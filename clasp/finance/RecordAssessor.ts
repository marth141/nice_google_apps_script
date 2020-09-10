class RecordsAssessor {
  records_to_keep: Array<FinanceRecord>;
  constructor(records: Array<FinanceRecord>) {
    this.records_to_keep = ((records: Array<FinanceRecord>) => {
      return records.map((record: FinanceRecord) => {
        switch (record.to_be_removed) {
          case false:
            return record;

          default:
            break;
        }
      });
    })(records);
  }
}
