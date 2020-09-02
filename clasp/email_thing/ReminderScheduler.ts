class ReminderScheduler {
  public result: boolean;

  constructor(employee: Employee) {
    this.result = (function (employee: Employee) {
      switch (employee.last_sent) {
        case "":
          return true;
        default:
          switch (new Date().getDate() - employee.last_sent.getDate()) {
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
    })(employee);
  }
}
