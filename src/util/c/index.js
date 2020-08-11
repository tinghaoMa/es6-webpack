var { message: msg = 'Something went wrong' } = {};
console.error(msg)

console.log("console", console)
const { log } = console
log(msg)

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
log(baz)

function move({ x = 0, y = 0 } = { x: 111, y: 2222 }) {
    return [x, y];
}
log(move())

const p = new Promise((res, rej) => {
    // res('1111')
    rej('test error')
})
const convert = (...args) => {
    console.error(args)
    return p
}

const cachedPromise = (func) => {
    let cache = {}
    return (...args) => {
        if (args.find(v => typeof v === 'function')) {
            console.error('cachedPromise params has function', args)
            return func(...args)
        }
        const key = JSON.stringify(args)
        let resultPromise = cache[key]
        if (!resultPromise) {
            const a = func(...args)
            resultPromise = a.catch(e => {
                if (cache[key] === resultPromise) {
                    delete cache[key]
                }
                throw e
            })
            cache[key] = resultPromise
        }
        return resultPromise
    }
}
cachedPromise(convert)({ name: 'mth', age: 10 }, log).catch(e => {
    // console.error(e)
})


const object1 = {
    a: 'somestring',
    b: 42,
    methods: {
        eat: () => {
            log('i can eat')
        },
        say: () => {
            log('i can say')
        },
    }
};

for (const [key, value] of Object.entries(object1)) {
    if (key == 'methods') {
        Object.entries(value).forEach(([key, value]) => {
            log(`key =${key} value= ${value}`)
        })
    }
}