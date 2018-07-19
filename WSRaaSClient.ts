import { RaaSClient, Data, DataType } from './api'
import { Observable, BehaviorSubject, Subscriber, of } from 'rxjs';
import { tap, single, filter, takeWhile, map, mergeMap, merge, take } from 'rxjs/operators'
import { raas } from './wsdata'

export class WSRaaSClient {
    constructor(private url: string) {
        this.newWS()
    }
    private _callerID: number = 0
    private subscriberMap = new Map<number, Subscriber<Uint8Array>>()
    private wsSubject: BehaviorSubject<WebSocket> = new BehaviorSubject<WebSocket>(null)
    private wsObservable = this.wsSubject.pipe(
        filter(ws => !!ws),
        take(1),
    )

    private newWS() {
        let ws = new WebSocket(this.url)
        ws.onopen = event => {
            this.wsSubject.next(ws)
        }
        ws.onerror = (event) => {
            console.error(event)
            //recreate websocket
            setTimeout(() => {
                this.newWS()
            }, 1000)
            this.wsSubject.next(null)
        }
        ws.onmessage = (event) => {
            let reader = new FileReader();
            reader.readAsArrayBuffer(event.data);
            reader.onload = (e) => {
                let buf = new Uint8Array(e.target.result)
                let msg = raas.WsServerOutput.decode(buf)
                let sub = this.subscriberMap[msg.callerId]
                if (!sub) {
                    return
                }
                console.log("typeof msg.type", msg.type)
                switch (msg.type) {
                    case "bin":
                        sub.next(msg.bin)
                        break
                    case "final":
                        if (msg.final)
                            sub.error(new Error(msg.final))
                        else
                            sub.complete()
                        break
                }
            }

        }
    }

    callService(serviceName: string, output: Data, inputDataType?: DataType): Observable<Data> {
        let callerID = ++this._callerID + ""
        let outputDataType = DataType.Object
        if (typeof output == "string") {
            outputDataType = DataType.String
        } else if (output instanceof Uint8Array) {
            outputDataType = DataType.Uint8Array
        }
        if (!inputDataType)
            inputDataType = outputDataType
        //watch response
        return new Observable<Uint8Array>(subscriber => this.subscriberMap[callerID] = subscriber).pipe(
            mergeMap(buf => new Observable<Data>(s => {
                switch (inputDataType) {
                    case DataType.String:
                        this.readAsText(buf, s)
                        break
                    case DataType.Uint8Array:
                        s.next(output)
                        s.complete()
                        break
                    default:
                        this.readAsText(buf, s, true)
                }
            })),
            // tap(x=>console.log(333,x)),
            //send request
            merge(this.sendRequest(callerID, serviceName, output, outputDataType)),
          
        )
    }

    readAsText(buf: Uint8Array, subscriber: Subscriber<Data>, json?: boolean) {
        let reader = new FileReader();
        reader.readAsText(new Blob([buf]));
        reader.onload = (e) => {
            let str = e.target.result
            if (json) {
                str = JSON.parse(str)
            }
            subscriber.next(str)
            subscriber.complete()
        }
    }


    sendRequest(callerID: string, serviceName: string, output: Data, outputDataType: DataType): Observable<Data> {
        return new Observable<Uint8Array>(s => {
            if (outputDataType == DataType.Object)
                output = JSON.stringify(output)
            let reader = new FileReader();
            reader.readAsArrayBuffer(new Blob([output]));
            reader.onload = (e) => {
                let buf = new Uint8Array(e.target.result)
                // console.info(buf)
                s.next(buf)
                s.complete()
            }
        }).pipe(
            map(buf => raas.WsClientOutput.create({
                callerId: callerID,
                callService: {
                    serviceName: serviceName,
                    bin: buf,
                },
            })),
            map(message => raas.WsClientOutput.encode(message).finish()),
            // tap(buf=>console.log(buf)),
            mergeMap(buf => this.wsObservable.pipe(
                tap(ws => ws.send(buf))
            )),
            map(x => ""),
            filter(x => false),
        )
    }
}
