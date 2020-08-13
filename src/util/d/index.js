const { error } = console

let a = new Promise((res, rej) => {
    setTimeout(() => {

    }, 500);
    res('123123123')
})

let b = new Promise((res, rej) => {
    const tmo = setTimeout(res, 1000)
    return a.then(res)
    a.then((a) => {
        error(a)
    })
    a.then((a) => {
        error(a)
    })
    a.then((a) => {
        error(a)
    })
})

b.then(res => {
    error(res, 111)
})



const f = (x) => x + 1
const g = (x) => x + 1

const compose = function (f, g) {
    return function (x) {
        return f(g(x));
    };
}

let result = compose(f, g)(2)



error(result)

