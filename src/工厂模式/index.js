export class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    alert('init')
  }
  fun1() {
    alert('fun1')
  }
  fun2() {
    alert('fun2')
  }
}

export class Creator {
  create(name) {
    return new Product(name)
  }
}