function myFunction() {
  const { spreadsheet, input_sheet, output_sheet } = new MyMapsHelper();
  const { fetch_customers } = input_sheet();
  const { update_output } = output_sheet();
  const { lat_lng_result } = new LatLngCalculator();

  const update = (function get_update() {
    return lat_lng_result(fetch_customers());
  })();

  update_output(update);
  spreadsheet().toast(
    "Check Output Sheet and Save/Export Output Sheet as .csv",
    "Completed",
    180
  );
  return;
}
