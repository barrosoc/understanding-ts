function Logger(logString: string) {
  console.log('LOGGER factory');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE factory');
  return function(constructor: any){
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if(hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person object</h1>', 'app')
class Persona {
  name = 'Carlos';

  constructor(){
    console.log('Creating person object');
  }
}

const pers = new Persona();

console.log(pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  set price(val: number) {
    if(val < 0) {
      throw new Error('Invalid price - should be positive') 
    } 
    this.price = val;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}