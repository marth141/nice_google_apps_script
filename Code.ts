function clear_last_sent() {
  new Controller().reminder_list.getRange("C2:C").clear();
}

function send_reminders() {
  new Employees().list.forEach((employee: Employee) => {
    switch (
      check_needs_reminder(employee.name, employee.last_sent).send_reminder
    ) {
      case true:
        const configuration = new Configuration();
        const email = new ReminderEmail(
          employee.email,
          configuration.reply_to,
          configuration.subject,
          configuration.body
        );
        MailApp.sendEmail(email.to, email.replyTo, email.subject, email.body);
        new Controller().reminder_list
          .getRange(employee.row_index, 3)
          .setValue(new Date());
        break;
      default:
        switch (employee.last_sent) {
          case "":
            new Controller().reminder_list
              .getRange(employee.row_index, 3)
              .setValue(new Date());
            break;
          default:
            new Controller().spreadsheet.toast(
              "No reminder needed for " + employee.name
            );
        }
    }
  });
}

function check_needs_reminder(who: string, last_sent: any) {
  return new ReminderSchedulerMessage(who, last_sent);
}
