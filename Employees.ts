class Employees {
  list: Array<Employee>;

  constructor() {
    this.list = (function () {
      return new Controller().reminder_list.records.map((record, index) => {
        switch (record[0]) {
          case "":
            break;
          default:
            return new Employee(record[0], record[1], record[2], index);
        }
      });
    })();
  }
}
