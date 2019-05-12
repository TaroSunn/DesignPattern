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

8.z
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