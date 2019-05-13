class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    console.log(`${this.name} eat`)
  }
  speak() {
    console.log(`${this.age}`)
  }
}

class Cat extends Animal {
  constructor(name, age, number) {
    super(name, age)
    this.name = name
  }
  sleep() {
    console.log(`${this.name} ${this.age} ${this.number}`)
  }
}

const black = new Cat('black', '1', 2)

black.eat()
black.speak()
black.sleep()