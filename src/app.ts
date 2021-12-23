class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ` + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(employee: string) {
    if (employee === 'Carlos'){
      return
    }
    super.addEmployee(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports(){
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment('d1', []);
accounting.describe();
accounting.addReport('Error...');
accounting.addEmployee('Carlos');
accounting.addEmployee('Ana');


accounting.printReports();