// 由于有些浏览器不能够使用localstorage，所以这里要使用兼容处理
// 利用try和catch来处理错误
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
