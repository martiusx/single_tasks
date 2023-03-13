// 1,1,2,3,5,8,13,21, ...

function fib(n) {
  const arr = [0, 1];
  for (let i = 0; i < n; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  console.log(arr[n]);
}

fib(10); //5
fib(6); //8
