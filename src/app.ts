type Admin = {
  name: string;
  priviledges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

//interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Carlos',
  priviledges: ['create-server'],
  startDate: new Date()
}
 type Combine = string | number;
 type Numeric = number | boolean;

 type Universal = Combine & Numeric;

 function sumAdd(a: number, b: number): number;
 function sumAdd(a: string, b: string): string;
 function sumAdd(a: string, b: number): string;
 function sumAdd(a: number, b: string): string;
 function sumAdd(a: Combine, b: Combine) {
   if(typeof a === 'string' || typeof b === 'string') {
     return a.toString() + b.toString();
   }
   return a + b;
 }

 const result = sumAdd(1, 2);
 const resultString = sumAdd('Carlos', ' Barroso');

 const fetchedUserData = {
   id: 'u1',
   name: 'Carlos',
   job: { title: 'CEO', description: 'My own company'}
 }

 console.log(fetchedUserData?.job?.title);

 const userInputField = '';
 const storedData = userInputField ?? 'DEFAULT';

 console.log(storedData);

//  type UnkownEmployee = Employee | Admin;

//  function printEmployeeInformation(emp: UnkownEmployee) {
//    console.log('Name: ' + emp.name);
//    if('priviledges' in emp) {
//      console.log('Priviledges: ' + emp.priviledges);
//    }
//    if('startDate' in emp) {
//      console.log('Start Date: ' + emp.startDate);
//    }
//  }

//  printEmployeeInformation({name: 'Carlos', startDate: new Date()});

//  class Car {
//    drive() {
//      console.log('Driving...');
//    }
//  }

//  class Truck {
//    drive() {
//      console.log('Driving a truck...');
//    }

//    loadCargo(amount: number){
//     console.log('Loading a cargo...' + amount);
//    }
//  }

//  type Vehicle = Car | Truck;

//  const v1 = new Car();
//  const v2 = new Truck();

//  function useVehicle(vehicle: Vehicle) {
//    vehicle.drive();
//    if(vehicle instanceof Truck) {
//      vehicle.loadCargo(1000);
//    }
//  }

//  useVehicle(v1);
//  useVehicle(v2);


// interface Bird {
//   type: 'bird'
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse'
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch(animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving with speed...' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 100});
// moveAnimal({type: 'horse', runningSpeed: 50});

// //const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// //const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// const userInputElement = document.getElementById('user-input');

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there!';
// }

// interface ErrorContainer {
//   [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with capital letter!'
// }