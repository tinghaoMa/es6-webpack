{
  let controller = {
    a: 100,
    makeRequest: function() {
      setTimeout(() => {
        console.log(this);
        console.log(this.a);
      }, 1000)
    },
    test: function() {
      console.log(this);
      console.log(this.a);
    }
  }
  controller.makeRequest()
  controller.test()
}