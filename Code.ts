function clear_last_sent() {
  new Controller().reminder_list.last_sent_column.clear();
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
        new Controller().reminder_list.update_last_sent(employee);
        break;
      default:
        switch (employee.last_sent) {
          case "":
            new Controller().reminder_list.update_last_sent(employee);
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
