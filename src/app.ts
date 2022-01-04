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

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';

  if(element.length === 1) {
    descriptionText = 'Got one element'
  } else {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText]
}

console.log(countAndPrint(['sports', 'cooking']));