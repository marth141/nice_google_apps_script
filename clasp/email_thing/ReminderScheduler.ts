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
              return true;
            default:
              switch (date_diff(employee.last_sent)) {
                case 2:
                  return true;
                case 3:
                  return true;
                case 5:
                  return true;
                case 13:
                  return true;
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
