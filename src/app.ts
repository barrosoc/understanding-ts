function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

@Logger('Logging - Persona')
class Persona {
  name = 'Carlos';

  constructor(){
    console.log('Creating person object');
  }
}

const pers = new Persona();

console.log(pers);