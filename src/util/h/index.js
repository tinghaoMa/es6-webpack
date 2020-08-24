import mix from './mix'


const { error } = console

class A {
    constructor() {
        this.name = 'test'
    }
    say() { error('Persion say') }
}

class B {
    eat() { error('Persion eat') }
}


// class Persion extends mix(A, B) {

// }

// let p = new Persion()
// error(p)
// p.say()
// p.eat()

class C extends A {
    constructor() {
        super()
        this.age = 10
    }
}

    C.prototype.name = 1000
A.prototype.city = 'DL'

const c = new C()
error(c)
error(c.name)

let a = new A()
error(a)
error(a.__proto__)
error(a.__proto__ === A.prototype)

error(Object.assign({}, c))
function clone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}
error(Object.getPrototypeOf(c))
error(clone(c))


const object1 = {
    property1: 42,
    say: (word) => {

    },
    eat: (food) => {

    }

};

const descriptor1 = Object.getOwnPropertyDescriptors(object1);
error(descriptor1);

const obj1 = {};

let bValue = 0
Object.defineProperty(obj1, 'property1', {
    get() { return bValue; },
    set(newValue) { bValue = newValue; },

});
error(obj1)
obj1.property1 = 100
error(obj1)
error(obj1.property1)