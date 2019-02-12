import a from './a'

export default function test222222() {
  console.log('----test222222-----')
}

{
  a(1, 2)
}

{
  let p = new Promise((resolve, reject) => {
    resolve();
  }).then(() => {
    return {
      age: 100
    }
  })

  p.then(res => {
    console.log(res);
    return test1();
  }).then(res => {
    console.log(res);
  })

  function test1() {
    return new Promise((resolve, reject) => {
      resolve('hello world 1111')
    })
  }

}

{
  function test1(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`先执行  test1 ${name}`);
      }, 1000)
    })
  }

  function test2(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`在执行 test2 ${name}`);
      }, 2000)
    })
  }


  async function test3(name) {
    const tempName1 = await test1(name);
    const tempName2 = await test2(tempName1);
    return tempName2;
  }


  test3('mth').then((name) => {
    console.log(`name = ${name}`);
  })


}

{
  function test1(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`test1 ${name}`);
      }, 1000)
    })
  }

  async function test2() {
    const value = await test1('test1')
    console.log(value);
  }

  test2();
}



{
  async function f() {
    // throw new Error('出错了');
    return 'async 函数'
  }

  f().then(
    v => console.log(v),
    e => console.log(e)
  )
  //
  // f().then(res => {
  //   console.log(res);
  // }).catch((err) => {
  //   console.log(err);
  // })


}

{

  class Sleep {

    constructor(timeout) {
      this.timeout = timeout;
    }

    then(resolve, reject) {
      const startTime = Date.now();
      setTimeout(() => {
          resolve(Date.now() - startTime)
        },
        this.timeout
      );
    }
  }

  (async () => {
    const actualTime = await new Sleep(1000);
    console.log(`actualTime = ${actualTime}`);
  })();

}

{
  async function f() {
    try {
      await Promise.reject('出错了');
    } catch (e) {

    }
    return await Promise.resolve('Promise.reject hello world');
  }

  f()
    .then(v => console.log(v))
}

{
  function getFoo() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('=======getFoo=====')
      }, 1000)
    })
  }

  function getBar() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('=======getBar=====')
      }, 3000)
    })
  }

  // async function doMain() {
  //   console.log('========开始2个方法顺序执行========');
  //   let foo = await getFoo();
  //   let bar = await getBar();
  //   return bar + foo;
  // }

  async function doMain() {
    console.log('========开始2个方法同时执行========');
    let [foo, bar] = await Promise.all([getFoo(), getBar()]);
    return `===执行结束===${bar + foo}`;
  }

  doMain().then((value) => {
    console.log(value);
  })
}

{

  let p = Promise.resolve();
  console.log('pre');
  console.log(p);
  p = p.then(() => {
    return 'mth'
  })
  console.log('dest');
  console.log(p);
}

{
  function test2() {
    return () => 'ssssss hello world';
  }
  async function test() {
    const result = await test2();
    console.log('============test===========');
    console.log(result);
  }
  test();
}

{
  let resolveAfter2Seconds = function() {
    console.log("starting slow promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(20);
        console.log("slow promise is done");
      }, 2000);
    });
  };

  let resolveAfter1Second = function() {
    console.log("starting fast promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve(10);
        console.log("fast promise is done");
      }, 1000);
    });
  };

  var concurrentStart = async function() {
    console.log('==CONCURRENT START with await==');
    const slow = resolveAfter2Seconds(); // 立即启动计时器
    const fast = resolveAfter1Second();

    console.log(await slow);
    console.log(await fast); // 等待 slow 完成, fast 也已经完成。

  }
  concurrentStart();

}