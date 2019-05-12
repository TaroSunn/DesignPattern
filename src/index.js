class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

let p = new Person('Taro Sun')
console.log(p.getName())