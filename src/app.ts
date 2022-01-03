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