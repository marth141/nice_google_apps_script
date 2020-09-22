function myFunction() {
  const helper: MyMapsHelper = new MyMapsHelper();
  const results: Array<Customer> = new LatLonCalculator().lat_lon_result(
    helper.customers_sheet.fetch_customers()
  );

  helper.output_sheet.update_output(results);
  helper.spreadsheet.toast(
    "Check Output Sheet and Save/Export Output Sheet as .csv",
    "Completed",
    180
  );
  return;
}
