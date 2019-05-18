import {Creator} from './工厂模式'

const creator = new Creator()

const p = creator.create('p')

p.init()

p.fun1()