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