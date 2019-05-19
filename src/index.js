import {Creator} from './工厂模式'
import {Login} from './单例模式'

const creator = new Creator()

const p = creator.create('p')

// p.init()

// p.fun1()

let login1 = new Login()
let login2 = new Login()

alert(login1 === login2)