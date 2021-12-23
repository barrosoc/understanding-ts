type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable, 
  input2: Combinable, 
  resultCoversion: ConversionDescriptor
  ) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if(resultCoversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);



const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine("Carlos", "Ana", 'as-text');
console.log(combineNames);


type User = { name: string; age: number };
const carlos = { name: 'Carlos', age: 33 };
const threadholdAge = 30;
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

greet(carlos);
console.log(`${carlos.name} is ${isOlder(carlos, threadholdAge) ? 'not ' : ''}older than ${threadholdAge}` )