let x = 10;
let y = 20;

setTimeout(() => {
  x = 100
  y = 200
}, 1000)

export default y;
export {
  x
}
// y  as  default 其实导出的也是一个引用
// export {
//   y as
//   default
// }