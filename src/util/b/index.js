class Person {

}

export default new Person();



{

  let promise = new Promise(function(resolve, reject) {
    console.log('Promise 创建的时候就会立即执行');
    // return resolve('sucess');
    reject(new Error('promise error 错误回调写在then方法里面'))
  }).then((value) => {
    console.log(value);
  }, (error) => {
    // console.log(error);
  })

}

{
  let promise = new Promise(function(resolve, reject) {
    console.log('Promise 创建的时候就会立即执行');
    // return resolve('sucess');
    reject(new Error('promise error 错误回调 catch去捕获'))
  }).then((value) => {
    console.log(value);
  }).catch((err) => {
    // console.log(err);
  });
}

{
  let promise = new Promise(function(resolve, reject) {
    resolve('sucess');
    throw new Error('promise error 捕获时机');
  });


  new Promise((resolve, reject) => {
    promise.then((value) => {
      console.log(value);
    })
  }).catch((err) => {
    // console.log(err);
  })


}

{
  const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      // 下面一行会报错，因为x没有声明
      resolve(x + 2);
    });
  };

  someAsyncThing()
    .catch(function(error) {
      console.log('oh no', error);
    })
    .then(function() {
      console.log('carry on');
    });

}

{

  Promise.resolve()
    .catch(function(error) {
      console.log('oh no', error);
    })
    .then(function() {
      console.log('no error carry on');
    });

}


{
  new Promise((resolve, reject) => {
    resolve('0000')
  }).then((value) => {
    console.log("============先catch 后then================");
    console.log(value);
    throw new Error('error msg')
  }).catch((err) => {
    console.log(err);

  })

  new Promise((resolve, reject) => {
    resolve('0000')
  }).catch((err) => {
    console.log(err);
  }).then((value) => {
    console.log("先执行catch之后再then 那么then 里面发生错误将不会被捕捉");
    console.log(value);
    throw new Error('error msg')
  })


}

{

  Promise.resolve().then((value) => {}).catch((err) => {}).finally(() => {

  })

  new Promise((resolve, reject) => {
    console.log('Promise resolve start');
    setTimeout(() => {
      resolve();
    }, 3000)
  }).finally(() => {
    console.log('Promise resolve finally do');
  })


}