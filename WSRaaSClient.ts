import { RaaSClient, Data } from './api'
import { Observable, BehaviorSubject, Subscriber, of } from 'rxjs';
import { tap, single, filter, takeWhile, map, mergeMap, merge } from 'rxjs/operators'
import { raas } from './wsdata.js'

class WSRaaSClient {
    constructor(private url: string) {
        this.newWS()
    }
    private callerID: number = 0
    private subscriberMap: Map<number, Subscriber<Uint8Array>>
    private wsSubject: BehaviorSubject<WebSocket> = new BehaviorSubject<WebSocket>(null)
    private wsObservable = this.wsSubject.pipe(
        filter(ws => !!ws),
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

        }
    }
    test(): object | string {
        return {}
    }

    callService(serviceName: string, output: Data): Observable<Data>{
        let callerID = ++this.callerID
        //watch response
        return new Observable<Uint8Array>(subscriber => this.subscriberMap[callerID] = subscriber).pipe(
            mergeMap(buf => new Observable<Data>(s => {  
                if (typeof output == "string") {
                    //按字符串反序列化
                    this.readAsText(buf,s)
                }else if(output instanceof Uint8Array){
                    s.next(output)
                }else if(typeof output == "object"){
                    this.readAsText(buf,s,true)
                }
                s.complete()
            })),
            //send request
            merge(this.sendRequest(callerID, serviceName, output))
        )
    }

    readAsText(buf: Uint8Array,subscriber: Subscriber<Data>, json?:boolean){
        let reader = new FileReader();
        reader.readAsText(new Blob([buf]));
        reader.onload = (e) => {
            let str = e.target.result
            if(json){
                str = JSON.parse(str)
            }
            subscriber.next(str)
        }
    }


    sendRequest(callerID: number, serviceName: string, output: Data): Observable<Data> {
        return new Observable<Uint8Array>(s => {
            let reader = new FileReader();
            reader.readAsArrayBuffer(new Blob([output]));
            reader.onload = (e) => {
                let buf = new Uint8Array(e.target.result)
                console.info(buf)
                s.next(buf)
                s.complete()
            }
        }).pipe(
            map(buf => raas.WsOutput.create({
                caller_id: callerID,
                call_service: {
                    service_name: serviceName,
                    bin: buf,
                },
            })),
            map(message => raas.WsOutput.encode(message).finish()),
            mergeMap(buf => this.wsObservable.pipe(
                tap(ws => ws.send(buf))
            )),
            map(x => ""),
            filter(x => false),
        )
    }
}