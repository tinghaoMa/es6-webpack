{
  // 找出最大的数
  const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
  const firstTwoMax = ary(Math.max, 2);
  console.log(firstTwoMax);

  [1, 2, 3].map((currnetValue, index, arr) => {
    console.log(`currnetValue=${currnetValue} inde=${index} arr=${arr}`);
  })
  const array = [1, 2, 3]
  const newArray = array.map(x => {
    return x * 2;
  })
  console.log(newArray);

  console.log(array.slice(0, 2));

  const result = [
    [1, 2, 3],
    [4, 1, 5],
    [10]
  ].map(x => firstTwoMax(...x));
  console.log(result);

}

{

  Promise.resolve(['a', 'b', 'c']).then(x => {
    console.log(x);
  })





}