class Department {
  static ficalYear = 2021;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ` + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Value cannot be undefined.");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(employee: string) {
    if (employee === "Carlos") {
      return;
    }
    super.addEmployee(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Manuel');
console.log(employee1, Department.ficalYear);

const accounting = new AccountingDepartment("d1", []);
accounting.mostRecentReport = "Year End Report.";
accounting.addReport("Error...");
accounting.mostRecentReport;
accounting.describe();
accounting.addEmployee("Carlos");
accounting.addEmployee("Ana");

accounting.printReports();
