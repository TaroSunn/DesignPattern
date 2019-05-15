# DesignPattern

## 环境配置

`src`项目文件

```
npm init -y

yarn add webpack webpack-cli webpack-dev-server clean-webpack-plugin html-webpack-plugin -D
```

### webpackp配置

```javascript
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080
  },
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
```

修改package.json
```
"scripts": {
  "dev": "webpack-dev-server"
}
```

### babel配置

```
yarn add babel-core babel-polyfill babel-preset-es2015 babel-preset-latest babel-loader@7 -D
```

**注意**
新版本`babel-core`与`babel-loader`有冲突

7.x
```
yarn add babel-core babel-polyfill babel-preset-es2015 babel-preset-latest babel-loader@7 -D
```

8.x
```
yarn add babel-loader @babel/core @babel/preset-env babel-polyfill -D
```


创建`.babelrc`文件

```javascript
{
  "presets": ["es2015","latest"]
  "plugins": []
}
```

修改webpack
```
module: {
  rules: [
    {
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }
  ]
}
```

## 面向对象

### 继承

``` javascript
// 定义父类
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  eat() {
    console.log(`${this.name} eat`)
  }
  speak() {
    console.log(`${this.name} ${this.age}`)
  }
}

// 子类继承父类
class Cat extends Animal {
  constructor(name, age, number) {
    super(name, age) // 继承父类属性
    this.number = number
  }
  sleep() {
    console.log(`${this.name} ${this.age} ${this.number}`)
  }
}

const black = new Cat('cat', '2', 10)
sleep()
eat()
speak()
```
将公共方法抽离，提高复用，减少冗余

### 封装

`private`私有

`protected`

`public`

### 多态

## 设计原则

### 单一职责

### 开放封闭

### 李氏置换

### 接口独立

### 依赖倒置

## 设计模式

### 创建型

- 工厂模式
- 单例模式
- 原型模式

### 组合型

- 适配器模式
- 装饰器模式
- 代理模式
- 外观模式
- 桥接模式
- 组合模式
- 享元模式

### 行为型

- 策略模式
- 模版方法模式
- 观察者模式
- 迭代器模式
- 职责模式
- 命令模式
- 备忘录模式
- 状态模式
- 访问者模式
- 中介者模式
- 解释器模式