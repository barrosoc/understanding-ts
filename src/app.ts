function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Persona {
  name = 'Carlos';

  constructor(){
    console.log('Creating person object');
  }
}

const pers = new Persona();

console.log(pers);