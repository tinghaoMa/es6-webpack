import defer from './defer';

{
  const delayPromise = ms => new Promise(resolve => {
    setTimeout(resolve, ms)
  })
  console.log('start');

  delayPromise(3000).then((value) => {
    console.log('end');
  });

}

{
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('p1 race done');
    }, 1000)
  })
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('p2 race time is out'))
    }, 3000)
  })

  Promise.race([p1, p2]).then((value) => {
    console.log('race done 模拟超时');
  }).catch((err) => {
    console.log(err);
  })
}


{
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('p1 all done');
    }, 1000)
  })
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log('p2 all done');
    }, 3000)
  })

  Promise.all([p1, p2]).then((value) => {
    console.log('all done');
  }).catch((err) => {
    console.log(err);
  })
}

{
  let obj = {
    name: 'test',
    age: 100,
    city: 'BeiJing',
    sex: 'man'
  }

  console.log(Object.keys(obj));

  const object1 = {
    a: 1,
    b: 2,
    c: 3
  };

  const object2 = Object.assign({
    c: 4,
    d: 5,
    test: function() {
      console.log('Object.assign test');
    }
  }, object1);

  console.log(object2.c, object2.d);
  console.log(object2);
  console.log(object1);
  object2.test();
  const object3 = Object.assign({}, {
    sucess: (param) => {
      console.log('sucess');
    },
    fail: () => {
      console.log('fail');
    }
  })
  console.log(object3);
}

{


  function test() {
    const deferred = defer();
    console.log(deferred);
    new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   deferred.reject(new Error('erro  msg '))
      // }, 1000)
      // setTimeout(() => {
      //   deferred.resolve('直接改变状态')
      // }, 1000)

      setTimeout(() => {
        resolve('hello world')
      }, 5000)
    }).then((value) => {
      deferred.resolve(value);
    }).catch((err) => {
      deferred.reject(err);
    })
    return deferred.promise;
  }

  test().then((value) => {
    console.log(value);
  }).catch((err) => {
    console.log(err);
  })

}


{
  Promise.resolve('param').then((value) => {
    console.log('111111');
    console.log(value);
    return value;
  }).then((value) => {
    console.log('2222222');
    console.log(value);
  }).then((value) => {
    console.log('333333');
    console.log(value);
  }).catch((err) => {
    console.log('error');
  })

}