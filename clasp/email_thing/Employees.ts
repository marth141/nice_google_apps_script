class Employees {
  public list: Array<Employee>;

  constructor() {
    this.list = (function () {
      return new Controller().reminder_sheet.records
        .map((record, index) => {
          switch (record[0]) {
            case "":
              break;
            default:
              const employee_input = {
                email: function (input: string) {
                  return input;
                },
                position: function (input: string) {
                  return input;
                },
                form_sent: function (input: Date) {
                  return input;
                },
                send_reminder: function (input: boolean) {
                  return input;
                },
                last_sent: function (input: any) {
                  return input;
                },
                row_index: function (input: number) {
                  return input;
                },
              };
              return new Employee(
                employee_input.email(record[0]),
                employee_input.position(record[1]),
                employee_input.form_sent(record[2]),
                employee_input.send_reminder(record[3]),
                employee_input.last_sent(record[4]),
                employee_input.row_index(index)
              );
          }
        })
        .filter((element) => element != null);
    })();
  }
}
