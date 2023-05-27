export class Customer {
  constructor(
    customerId,
    customerName,
    customerAddress,
    customerSalary,
    customerGender,
    customerAge
  ) {
    this._customerId = customerId;
    this._customerName = customerName;
    this._CustomerAddress = customerAddress;
    this._CustomerSalary = customerSalary;
    this._customerGender = customerGender;
    this._customerAge = customerAge;
  }

  get customerId() {
    return this._customerId;
  }

  set customerId(value) {
    this._customerId = value;
  }

  get customerName() {
    return this._customerName;
  }

  set customerName(value) {
    this._customerName = value;
  }

  get customerAddress() {
    return this._CustomerAddress;
  }

  set customerAddress(value) {
    this._CustomerAddress = value;
  }

  get customerSalary() {
    return this._CustomerSalary;
  }

  set customerSalary(value) {
    this._CustomerSalary = value;
  }

  get customerGender() {
    return this._customerGender;
  }

  set customerGender(value) {
    this._customerGender = value;
  }

  get customerAge() {
    return this._customerAge;
  }

  set customerAge(value) {
    this._customerAge = value;
  }
}
