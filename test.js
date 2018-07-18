import { raas } from './wsdata'
import {  BehaviorSubject, of} from 'rxjs';
import { tap, single, filter, takeWhile, map, mergeMap, merge } from 'rxjs/operators'

console.log(typeof {})

let subject = new BehaviorSubject(null)
let ob = subject.pipe(
    merge(of(666))
)
// subject.next(1)
ob.subscribe(x=>console.log(1111,x),err=>console.log(2222,err))
subject.error("tt")
setTimeout(()=>{
    ob.subscribe(x=>console.log(3333,x),err=>console.log(4444,err))
},200)
