class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department('Carlos');
accounting.describe();

const accountingCopy = { name: 'Ana', describe: accounting.describe };
accountingCopy.describe();
