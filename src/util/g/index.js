// function foo() {
//     this.count++; // foo 指向它自身
// }
// foo.count = 0
// console.error(foo.prototype)
// foo()
// console.error(foo.count)
console.log("this", this)
function foo() {
    // "use strict";
    console.log(this.a);
    console.log("foo -> this", this)
    console.log("foo -> this", this.a)
}
var a = 2;
foo();
