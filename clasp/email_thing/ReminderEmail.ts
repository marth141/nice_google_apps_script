class ReminderEmail {
  public to: string;
  public replyTo: string;
  public subject: string;
  public body: string;

  constructor(to: string, reply_to: string, subject: string, body: string) {
    this.to = to;
    this.replyTo = reply_to;
    this.subject = subject;
    this.body = body;
  }
}
