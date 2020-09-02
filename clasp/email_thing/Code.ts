function clear_last_sent() {
  new Controller().reminder_sheet.last_sent_column.clear();
}

function send_reminders() {
  new Employees().list.forEach((employee: Employee) => {
    switch (new Controller().configuration.activated) {
      case true:
        switch (new ReminderScheduler(employee).result) {
          case true:
            const configuration = new Controller().configuration;
            const email = new ReminderEmail(
              employee.email,
              configuration.reply_to,
              configuration.subject,
              configuration.body
            );
            MailApp.sendEmail(email.to, email.subject, email.body, {
              replyTo: email.replyTo,
              htmlBody: email.body,
            });
            new Controller().reminder_sheet.update_last_sent(
              employee,
              new Date()
            );
            break;
          default:
            switch (employee.last_sent) {
              case "":
                new Controller().reminder_sheet.update_last_sent(
                  employee,
                  employee.form_sent
                );
                send_reminders();
                break;
              default:
                new Controller().spreadsheet.toast(
                  "No reminder needed for " + employee.email
                );
            }
        }
        break;
      default:
        new Controller().spreadsheet.toast("Not activated, see configuration.");
    }
  });
}
