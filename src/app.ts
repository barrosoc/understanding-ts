interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;

  constructor(public name: string) {}

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