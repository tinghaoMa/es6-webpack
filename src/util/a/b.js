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