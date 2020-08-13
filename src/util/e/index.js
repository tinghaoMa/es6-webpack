import { compose } from 'redux'
let { error } = console
let x = 10
function fn1(x) { return x + 1 }
function fn2(x) { return x + 2 }
function fn3(x) { return x + 3 }
function fn4(x) { return x + 4 }

// 假设我这里想求得这样的值
let a = fn1(fn2(fn3(fn4(x)))) // 10 + 4 + 3 + 2 + 1 = 20
error(a)
// 根据compose的功能，我们可以把上面的这条式子改成如下：
//funcs.reduce((a, b) => (...args) => a(b(...args)))
let composeFn = compose(fn1, fn2, fn3, fn4)
let b = composeFn(x) // 理论上也应该得到20
error(b)


function applyMiddleware() {
    return createStore => (...args) => {
        const store = createStore(...args)
        return {
            store,
        }
    }
}

applyMiddleware()(error)(1, 2, 3, 4, 5, 6)


