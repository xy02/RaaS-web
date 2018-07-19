import { Observable } from 'rxjs';

// export type Bin = Blob | ArrayBuffer | ArrayBufferView

//if data is object, RaaSClient use JSON to serialize and deserialize it.
export type Data = string | object | Uint8Array

export enum DataType {
    String =1,
    Object,
    Uint8Array,
}

export interface RaaSClient {
    callService(serviceName: string, output: Data, inputDataType?:DataType): Observable<Data>
    //get single result, timeout unit:ms default 10s
    callUnaryService(serviceName: string, output: Data, timeout?: number, inputDataType?:DataType): Observable<Data>
}

