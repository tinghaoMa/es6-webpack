import y from './d';
import {
  x
} from './d';


{
  // let controller = {
  //   a: 100,
  //   makeRequest: function() {
  //     setTimeout(() => {
  //       console.log(this);
  //       console.log(this.a);
  //     }, 0)
  //   },
  //   test: function() {
  //     console.log(this);
  //     console.log(this.a);
  //   }
  // }
  // controller.makeRequest()
  // controller.test()
}

{
  let array = [1, 2, 3]
  const values = array[Symbol.iterator]()
  console.log(values);
  console.log(values.next());
  console.log(values.next());
  console.log(values.next());
  console.log(values.next());
}

{
  function test({
    fn
  }) {
    fn();
  }

  const obj = {
    name: 'hello',
    fn: () => {
      console.log('结构赋值传参');
    }
  }
  test(obj)

}

{
  console.log('扩展运算符 必须放在最后一个参数');
  let [first, ...arr] = [1, 2, 3, 4, 5, 6]
  console.log(first);
  console.log(arr);


  // let [...aar, last] = [1, 2, 3, 4, 5, 6]

  console.log('剩余运算符');

  function print(...params) {
    console.log(params);
  }

  print(1, 2, 3, 4, 5, 6, 7)

}

{
  // 省略的是属性名而不是值
  // 值必须是一个变量
  let bar = {
    x: 10,
    y: 10,
    z: 100
  }

  let {
    x: x,
    y,
    z
  } = bar

  console.log(`x = ${x} y = ${y} z = ${z}`);

  let obj = {
    func() {
      console.log('方法名称简写');
    }

  }
  obj.func()
}

{

  let arr = [{
    a: 1
  }, {
    a: 2
  }, {
    a: 3
  }, {
    a: 4
  }]
  let obj = {}
  for ({
      a: obj.a
    } of arr) {
    console.log(obj.a);
  }

}

{
  console.log('export {<变量>}导出的是一个变量的引用，export default导出的是一个值');
  console.log(`x = ${x} y = ${y}`);
  setTimeout(() => {
    console.log('y的值不会发生变化');
    console.log(`x = ${x} y = ${y}`);
  }, 1000)
}