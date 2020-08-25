class Employee {
  name: string;
  email: string;
  last_sent: any;
  row_index: number;

  constructor(name: any, email: any, last_sent: any, row_index: number) {
    this.name = name;
    this.email = email;
    this.last_sent = last_sent;
    this.row_index = row_index + 2;
  }
}
