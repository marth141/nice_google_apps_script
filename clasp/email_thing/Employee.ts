class Employee {
  public email: string;
  public position: string;
  public form_sent: boolean;
  public send_reminder: boolean;
  public last_sent: any;
  public row_index: number;

  constructor(
    email: any,
    position: any,
    form_sent: Date,
    send_reminder: boolean,
    last_sent: any,
    row_index: number
  ) {
    this.email = email;
    this.position = position;
    this.form_sent = typeof form_sent === typeof new Date();
    this.send_reminder = send_reminder;
    this.last_sent = last_sent;
    this.row_index = row_index + 2;
  }
}
