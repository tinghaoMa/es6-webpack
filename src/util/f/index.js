// function MayBe(val) {
//     this.value = val
// }

// MayBe.of = function (val) {
//     return new MayBe(val)
// }

// MayBe.prototype.isNothing = function () {
//     return this.value === null || this.value === undefined
// }

// MayBe.prototype.map = function (fn) {
//     return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value))
// }

// let m1 = MayBe.of(1111).map(() => undefined).map(x => x + 1)
// console.log("m1", m1)

// var a;
// console.log(a);

// a = 2;


// function foo() {
//     console.log(a); // 2
// }
// function bar() {
//     var a = 3;
//     foo();
// }
// var a = 2;
// bar();

// let num = 0;
// function Obj() {
//     let that = this
//     this.num = 1
//     this.getNum = function () {
//         console.log(this.num);
//     }
//     this.getNumLater = function () {
//         setTimeout(function () {
//             console.log(that.num);
//         }, 1000)
//     }
// }
// var obj = new Obj;
// obj.getNum();//1　　打印的是obj.num，值为1
// obj.getNumLater()//0　　打印的是window.num，值为0
