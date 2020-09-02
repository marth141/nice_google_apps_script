function test() {
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
    last_sent: function (input: Date) {
      return input;
    },
    row_index: function (input: number) {
      return input;
    },
  };
  const test_schedule_1 = new ReminderScheduler(
    new Employee(
      employee_input.email("test@test.com"),
      employee_input.position("Test Position"),
      employee_input.form_sent(new Date()),
      employee_input.send_reminder(true),
      employee_input.last_sent(new Date()),
      employee_input.row_index(0)
    )
  );
  const test_schedule_2 = new ReminderScheduler(
    new Employee(
      employee_input.email("test@test.com"),
      employee_input.position("Test Position"),
      employee_input.form_sent(new Date()),
      employee_input.send_reminder(true),
      employee_input.last_sent(
        new Date(new Date().setDate(new Date().getDate() - 2))
      ),
      employee_input.row_index(0)
    )
  );
  const test_schedule_3 = new ReminderScheduler(
    new Employee(
      employee_input.email("test@test.com"),
      employee_input.position("Test Position"),
      employee_input.form_sent(new Date()),
      employee_input.send_reminder(true),
      employee_input.last_sent(
        new Date(new Date().setDate(new Date().getDate() - 5))
      ),
      employee_input.row_index(0)
    )
  );
  Logger.log(test_schedule_1);
  Logger.log(test_schedule_2);
  Logger.log(test_schedule_3);
}
