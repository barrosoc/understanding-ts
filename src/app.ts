const names: Array<string> = []; // string[]

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});  

promise.then(data => {
  data.split(' ');
})

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Carlos', hobbies: ['Football']}, {age: 33});

console.log(mergedObj.hobbies[0]);