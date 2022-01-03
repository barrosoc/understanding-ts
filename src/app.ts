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

 function sumAdd(a: Combine, b: Combine) {
   if(typeof a === 'string' || typeof b === 'string') {
     return a.toString() + b.toString();
   }
   return a + b;
 }

 type UnkownEmployee = Employee | Admin;

 function printEmployeeInformation(emp: UnkownEmployee) {
   console.log('Name: ' + emp.name);
   if('priviledges' in emp) {
     console.log('Priviledges: ' + emp.priviledges);
   }
   if('startDate' in emp) {
     console.log('Start Date: ' + emp.startDate);
   }
 }

 printEmployeeInformation({name: 'Carlos', startDate: new Date()});

 class Car {
   drive() {
     console.log('Driving...');
   }
 }

 class Truck {
   drive() {
     console.log('Driving a truck...');
   }

   loadCargo(amount: number){
    console.log('Loading a cargo...' + amount);
   }
 }

 type Vehicle = Car | Truck;

 const v1 = new Car();
 const v2 = new Truck();

 function useVehicle(vehicle: Vehicle) {
   vehicle.drive();
   if(vehicle instanceof Truck) {
     vehicle.loadCargo(1000);
   }
 }

 useVehicle(v1);
 useVehicle(v2);