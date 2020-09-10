function myFunction() {
  try {
    const controller = new Controller();
    const record_assessor = new RecordsAssessor(
      controller.finance_sheet.records
    );
    const calculator = new Calculator(
      record_assessor.records_to_keep,
      controller.finance_sheet.total_bill
    );
    controller.finance_sheet.update_percent(calculator.percent_of_keep_to_bill);
    controller.finance_sheet.update_total_to_remove(
      calculator.total_cost_of_records_to_keep
    );
    return "OK";
  } catch (error) {
    throw error;
  }
}
