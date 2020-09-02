class Employee {
  public email: string;
  public position: string;
  public send_reminder: boolean;
  public last_sent: any;
  public row_index: number;

  constructor(
    email: any,
    position: any,
    send_reminder: any,
    last_sent: any,
    row_index: number
  ) {
    this.email = email;
    this.position = position;
    this.send_reminder = send_reminder;
    this.last_sent = last_sent;
    this.row_index = row_index + 2;
  }
}
