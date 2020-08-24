// function foo() {
//     this.count++; // foo 指向它自身
// }
// foo.count = 0
// console.error(foo.prototype)
// foo()
// console.error(foo.count)
// console.log("this", this)
// function foo() {
//     // "use strict";
//     console.log(this.a);
//     console.log("foo -> this", this)
//     console.log("foo -> this", this.a)
// }
// var a = 2;
// foo();

const { isLength } = require("lodash")

// let b = Object.create(null);
// console.error(b)
// Task = {
//     setID: function (ID) { this.id = ID; },
//     outputID: function () { console.log(this.id); }
// };
// // 让XYZ 委托Task
// XYZ = Object.create(Task);
// console.log("XYZ", XYZ)
// XYZ.prepareTask = function (ID, Label) {
//     this.setID(ID);
//     this.label = Label;
// };
// XYZ.outputTaskDetails = function () {
//     this.outputID();
//     console.log(this.label);
// };

// XYZ.prepareTask('1', 'title')
// XYZ.outputTaskDetails()


// function Foo(who) {
//     this.me = who;
// }
// Foo.prototype.identify = function () {
//     return "I am " + this.me;
// };
// function Bar(who) {
//     Foo.call(this, who);
// }
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function () {
//     console.log("Hello, " + this.identify() + ".");
// };
// var b1 = new Bar("b1");
// console.log("b1", b1)
// var b2 = new Bar("b2");
// b1.speak();
// b2.speak();


// var a = {
//     index: 1
// };
// // 然后
// console.log(a); // ??
// // 再然后
// a.index++;


// new Promise((res, rej) => {
//     res('11111')
// }).then(res => {
//     console.error(res)
// })


function defer() {
    var deferred = {}
    var promise = new Promise(function (resolve, reject) {
        deferred.resolve = resolve
        deferred.reject = reject
    })
    deferred.promise = promise
    return deferred
}



// var startPoint = function (next) {
//     next()
// }

// var endPoint = function (next) {
//     next()
// }

// Promise.resolve([startPoint, endPoint]).then(res => {
//     console.log("res", res)
// })


var ready = (
    Promise || {
        resolve: function () {
            return undefined
        }
    }
).resolve()
var post = defer()

// let a = function () {
//     console.error('aaaaaa')
//     return post.promise
// }
// let b = function () {
//     console.error('bbbbbb')
//     return post.promise
// }

// let c = function () {
//     console.error('cccccc')
//     return post.promise
// }
// let d = function () {
//     console.error('dddddd')
//     return post.promise
// }

// ready.then(function () {
//     console.error('aaaaaa')
//     return post.promise
// }).then(function () {
//     console.error('bbbbbb')
//     return post.promise
// }).then(function () {
//     console.error('ccccccc')
//     return post.promise
// }).then(function () {
//     console.error('dddddd')
//     return post.promise
// }).then(function () {
//     console.error('eeeeee')
//     return post.promise
// })


// setTimeout(() => {
//     post.resolve()
// }, 1000);



// let e = function (result) {
//     console.log("e -> result", result)
//     console.error('eeeeeee')
//     return 'eeeeeee'
// }
// let f = function (result) {
//     console.log("f -> result", result)
//     console.error('ffffff')
//     return 'ffffff'
// }
// let g = function (result) {
//     console.log("g -> result", result)
//     console.error('gggggg')
//     return 'gggggg'
// }
// let h = function (result) {
//     console.log("h -> result", result)
//     console.error('hhhhhh')
//     return 'hhhhhh'
// }



// let preProcessor = [a, b, c, d]
// let postProcessor = [e, f, g, h]

// let promise = ready
// let processor
// while (processor = preProcessor.shift()) {
//     promise = promise.then(processor)
// }
// while (processor = postProcessor.pop()) {
//     promise = promise.then(processor)
// }









function typeString(object) {
    return Object.prototype.toString.call(object).slice(8, -1).toLowerCase()
}

function isFunction(object) {
    return typeString(object) === 'function'
}
function isError(object) {
    return Object.prototype.toString.call(object).slice(8, -1).toLowerCase() === 'error'
}

function hello() {

}

function isObject(object) {
    return object && typeString(object) === 'object'
}


let err = new Error()

console.error(isFunction(hello))
console.error(Object.prototype.toString.call(hello))

console.error(isError(err))

console.error(Object.prototype.toString.call(err))

console.error(isObject([]))