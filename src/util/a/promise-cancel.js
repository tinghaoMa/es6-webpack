/*
 * Promise是一种链式的回调，
 * 每一个then或者catch返回的是一个已经处理过的promise对象，
 * 同时catch只能catch之前链条中出现的错误。
 */

{
  function race(p) {
    let obj = {};
    let p1 = new Promise(function(resolve, reject) {
      obj.resolve = resolve;
      obj.reject = reject;
    });
    obj.promise = Promise.race([p, p1]);
    return obj;
  }
  //请求时间很长 退出界面的时候需要取消该请求
  const p = new Promise((resolve, reject) => {
    console.log('开始请求');
    setTimeout(() => {
      resolve({
        status: 200,
        msg: '请求成功'
      });
    }, 2000)
  })

  const p1 = race(p);

  p1.promise.then((value) => {

    const {
      status,
      msg
    } = value;

    console.log(`status = ${status} msg = ${msg}`);

    if (status === 0) {
      return;
    }
    //doSomething
  })

  // leavePage();

  function leavePage() {
    p1.resolve({
      status: 0,
      msg: '页面关闭取消请求'
    }); // or p1.reject(cancelReason)
  }


}