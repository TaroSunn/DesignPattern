function loadImg(src) {
  let promise = new Promise((resolve, reject) => {
    let img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () =>{
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

let src = 'https://www.baidu.com/img/bd_logo1.png'

let result = loadImg(src)

result.then((img)=>{
  alert(`${img.height}`)
  return img
}).then((img)=>{
  alert(`${img}`)
}).catch((err)=>{
  alert(err)
})