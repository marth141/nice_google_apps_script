class Employee {
  public email: string;
  public position: string;
  public form_sent: Date;
  public send_reminder: boolean;
  public last_sent: any;
  public row_index: number;

  constructor(
    email: any,
    position: any,
    form_sent: any,
    send_reminder: boolean,
    last_sent: any,
    row_index: number
  ) {
    this.email = email;
    this.position = position;
    this.form_sent = (function (form_sent: any) {
      switch (typeof form_sent) {
        case typeof new Date():
          return form_sent;
        default:
          return false;
      }
    })(form_sent);
    this.send_reminder = send_reminder;
    this.last_sent = last_sent;
    this.row_index = row_index + 2;
  }
}
