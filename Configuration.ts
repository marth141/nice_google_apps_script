class Configuration {
  reply_to: string;
  subject: string;
  body: string;

  constructor() {
    this.reply_to = new Controller().configuration.getRange(1, 2).getValue();
    this.subject = new Controller().configuration.getRange(2, 2).getValue();
    this.body = new Controller().configuration.getRange(3, 2).getValue();
  }
}
