import { Observable } from 'rxjs';

// export type Bin = Blob | ArrayBuffer | ArrayBufferView

export type Data = string | object | Uint8Array

export interface RaaSClient {
    callService(serviceName: string, output: Data): Observable<Data>
    //get single result, timeout unit:ms default 10s
    callUnaryService(serviceName: string, output: Data, timeout?: number): Observable<Data>
}

