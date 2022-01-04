function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string){
  return function(constructor: any){
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if(hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@WithTemplate('<h1>My Person object</h1>', 'app')
class Persona {
  name = 'Carlos';

  constructor(){
    console.log('Creating person object');
  }
}

const pers = new Persona();

console.log(pers);