function sum(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  return cb(result);
}

printResult(sum(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = sum;

console.log(combineValues(8,8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return true;
});