import { RaaSClient, Data } from './api'
import { Observable, Subject, Subscriber, merge } from 'rxjs';
import { tap, single, filter, takeWhile, map, mergeMap } from 'rxjs/operators'
import { raas } from './wsdata.js'

class WSRaaSClient {
    constructor(private url: string) {
        this.newWS()
    }
    private ws: WebSocket
    private callCount: number = 0
    private subscriberMap: Map<number, Subscriber<Data>>
    private openCount: number = 0
    private onOpenSubject: Subject<number> = new Subject()

    private newWS() {
        this.ws = new WebSocket(this.url)
        this.ws.onopen = event => {
            this.onOpenSubject.next(++this.openCount)
        }
        this.ws.onerror = (event) => {
            console.error(event)
            setTimeout(() => {
                this.newWS()
            }, 1000)
        }
        this.ws.onmessage = (event) => {

        }
    }

    callService(serviceName: string, output: Data): Observable<Data> {
        let callerID = ++this.callCount
        merge(
            //watch response
            new Observable<Data>(subscriber => this.subscriberMap[callerID] = subscriber),
            //send request
            this.onOpenSubject.pipe(
                //convert Uint8Array
                mergeMap(x=> new Observable<Uint8Array>(s=>{
                    let reader = new FileReader();
                    reader.readAsArrayBuffer(new Blob([output]));
                    reader.onload = (e)=>{
                        let buf = new Uint8Array(e.target.result)
                        console.info(buf)
                        s.next(buf)
                        s.complete()
                    }
                })),
                map(buf=> raas.WsOutput.create({
                    caller_id: callerID,
                    call_service: {
                        service_name: serviceName,
                        bin: buf,
                    },
                })),
                map(message=>raas.WsOutput.encode(message).finish()),
                tap(buffer=> this.ws.send(buffer)),
                filter(x => false),
            )
        ).pipe(
            tap(x => {
                // if(){
                //     throw new Error()
                // }
            }),
            // takeWhile(input=>)
        )
    }
}