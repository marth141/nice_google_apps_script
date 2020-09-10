class RecordsAssessor {
  public records_to_keep: Array<FinanceRecord>;
  constructor(records: Array<FinanceRecord>) {
    this.records_to_keep = ((records: Array<FinanceRecord>) =>
      records
        .map((record: FinanceRecord) => {
          switch (record.to_keep) {
            case true:
              return record;
            default:
              break;
          }
        })
        .filter((record: FinanceRecord) => record !== undefined))(records);
  }
}
