interface AddFn {
  (a: number, b: number): number;
} 

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    throw new Error("Method not implemented.");
  }

}

let user1: Greetable;

user1 = {
  name: 'Carlos',

  greet(phrase: string) {
   console.log(phrase + ' ' + this.name); 
  }
};

user1.greet('Hi there! I am');
console.log(user1);