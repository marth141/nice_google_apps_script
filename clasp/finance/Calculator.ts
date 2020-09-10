class Calculator {
  public total_cost_of_records_to_keep: number;
  public percent_of_keep_to_bill: number;
  constructor(records_to_keep: Array<FinanceRecord>, total_bill: number) {
    this.total_cost_of_records_to_keep = ((
      records_to_keep: Array<FinanceRecord>
    ) =>
      records_to_keep
        .map((record: FinanceRecord) => record.cost)
        .reduce((x, y) => x + y, 0))(records_to_keep);
    this.percent_of_keep_to_bill = ((
      total_cost_of_records_to_keep: number,
      total_bill: number
    ) => total_cost_of_records_to_keep / total_bill)(
      this.total_cost_of_records_to_keep,
      total_bill
    );
  }
}
