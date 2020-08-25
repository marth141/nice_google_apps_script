class ReminderSchedulerMessage {
  reminder_for: string;
  now: Date;
  last_sent: any;
  send_reminder: boolean;

  constructor(who: string, last_sent: any) {
    this.now = new Date();
    this.reminder_for = who;
    this.last_sent = last_sent;
    this.send_reminder = (function (last_sent: any) {
      switch (last_sent) {
        case "":
          return false;
        default:
          switch (new Date().getDate() - last_sent.getDate()) {
            case 2:
              return true;
            case 3:
              return true;
            case 14:
              return true;
            default:
              return false;
          }
      }
    })(last_sent);
  }
}
