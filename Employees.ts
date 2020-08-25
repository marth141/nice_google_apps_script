class Employees {
  list: Array<Employee>;

  constructor() {
    this.list = (function () {
      const employee_table = new Controller().reminder_list.records;
      let to_return = [];
      let i = 0;
      while (i < employee_table.length) {
        switch (employee_table[i][0]) {
          case "":
            i++;
            break;
          default:
            to_return.push(
              new Employee(
                employee_table[i][0],
                employee_table[i][1],
                employee_table[i][2],
                i
              )
            );
            i++;
        }
      }
      return to_return;
    })();
  }
}
