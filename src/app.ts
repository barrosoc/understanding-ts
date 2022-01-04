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

function extractAndCovert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value ${obj[key]}`;
}

extractAndCovert({name: 'Carlos'}, 'name');

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T){
    this.data.push(item);
  }

  removeItem(item: T) {
    if(this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }

}

const textStorage = new DataStorage<string>();
textStorage.addItem('Carlos');
textStorage.addItem('Manuel');
textStorage.removeItem('Carlos');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(10);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());