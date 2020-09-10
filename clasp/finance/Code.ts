function myFunction() {
  try {
    const controller = new Controller();
    const record_assessor = new RecordsAssessor(
      controller.finance_sheet.records
    );
    const update_value = new Calculator(
      record_assessor.records_to_keep,
      controller.finance_sheet.total_bill
    ).percent_of_keep_to_bill;
    controller.finance_sheet.update_percent(update_value);
    return "OK";
  } catch (error) {
    throw error;
  }
}
