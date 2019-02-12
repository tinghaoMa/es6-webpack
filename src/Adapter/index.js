{
  // 找出最大的数
  // const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
  // const firstTwoMax = ary(Math.max, 2);
  // console.log(firstTwoMax);
  //
  // [1, 2, 3].map((currnetValue, index, arr) => {
  //   console.log(`currnetValue=${currnetValue} inde=${index} arr=${arr}`);
  // })
  // const array = [1, 2, 3]
  // const newArray = array.map(x => {
  //   return x * 2;
  // })
  // console.log(newArray);
  //
  // console.log(array.slice(0, 2));
  //
  // const result = [
  //   [1, 2, 3],
  //   [4, 1, 5],
  //   [10]
  // ].map(x => firstTwoMax(...x));
  // console.log(result);

}

{
  // console.log('===============');
  // const call = (key, ...args) => context => context[key](...args);
  //
  // Promise.resolve([1, 2, 3])
  //   .then(call('map', x => 2 * x))
  //   .then(console.log);
  // Promise.resolve([11, 22, 33]).then(console.log)

}

{
  // console.log('===============');
  // const collectInto = fn => (...args) => fn(args)
  // const Pall = collectInto(Promise.all.bind(Promise));
  // let p1 = Promise.resolve(2);
  // let p2 = Promise.resolve(3);
  // let p3 = new Promise(resolve => setTimeout(resolve, 2000, 6));
  // Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
}

{
  console.log('=======everyevery========');
  const array = [1, 2, 3, 4, 5, 6]
  const value = array.every(item => item < 10)
  console.log(value);
}

{
  console.log('=======join========');
  const array = ['first', '2', 'hello']
  console.log(array.join('-'));
}

{
  console.log('=======闭包========');
  (function autorun() {
    let x = 100;

    function log() {
      console.log(x);
    }
    log();
  })();
}

{
  function test() {
    console.log(this.x);
  }

  var obj = {};
  obj.x = 1;
  obj.m = test;

  obj.m(); // 1
}


{
  let obj = {
    name: 'mth',
    sayHello: function() {
      console.log(this.name);
    },
    sayHello2: () => {
      console.log(this);
    },
    sayHello3: function() {
      return () => {
        console.log(this);
      }
    }
  }
  obj.sayHello();

  try {
    obj.sayHello2();
  } catch (e) {

  } finally {

  }
  obj.sayHello3()();

  let hello3 = obj.sayHello3;
  console.log(hello3);
  hello3()()


}

{
  function log() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('(app)');
    console.log.apply(console, args);
  };

  log('hello ');
}

{
  var o = {
    user: "追梦子",
    fn: function() {
      console.log(this.user); //追梦子
    }
  }
  o.fn();
}

{
  function fn() {
    this.user = '追梦子';
    return function() {

    };
  }
  var a = new fn;
  console.log(a.user); //undefined
}

{
  function foo() {
    setTimeout(() => {
      console.log(this);
      console.log("id:", this.id);
    }, 100);
  }

  foo.call({
    id: 42
  });
}

{

  function Person() {
    this.age = 0;
    setInterval(() => {
      // this.age++;
      // console.log(this.age);
    }, 1000);
  }
  var p = new Person();

}