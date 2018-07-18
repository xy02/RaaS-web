import { Observable } from 'rxjs';

export type Data = string | Blob | ArrayBuffer | ArrayBufferView

export interface RaaSClient {
    callService(serviceName: string, output: Data): Observable<Data>
    //get single result (default timeout:10s)
    callUnaryService(serviceName: string, output: Data): Observable<Data>
    //timeout unit:ms
    callUnaryService(serviceName: string, output: Data, timeout: number): Observable<Data>
}

