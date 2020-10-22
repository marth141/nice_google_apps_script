class DueDateParams {
  start_date: Date;
  end_date: Date;

  constructor(input: { start_date: any; end_date: any }) {
    const { start_date, end_date } = input;
    this.start_date = start_date;
    this.end_date = end_date;
  }
}
