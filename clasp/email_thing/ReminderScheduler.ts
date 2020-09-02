class ReminderScheduler {
  public result: boolean;

  constructor(employee: Employee) {
    this.result = (function (employee: Employee) {
      const date_diff = function (last_sent: Date) {
        return new Date().getDate() - last_sent.getDate();
      };
      switch (employee.send_reminder) {
        case true:
          switch (employee.last_sent) {
            case "":
              return false;
            default:
              switch (typeof employee.form_sent) {
                case typeof Date:
                  switch (date_diff(employee.form_sent)) {
                    case 2:
                      return true;
                    case 5:
                      return true;
                    case 8:
                      return true;
                    default:
                      return false;
                  }
                default:
                  return false;
              }
          }
        default:
          return false;
      }
    })(employee);
  }
}
