import {WSRaaSClient} from './WSRaaSClient'

let c = new WSRaaSClient("ws://localhost:8080/")
c.callService("test.s1","hi")
.subscribe(x=>console.log(666,x))