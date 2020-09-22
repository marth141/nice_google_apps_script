function myFunction() {
  const { spreadsheet, input_sheet, output_sheet } = new MyMapsHelper();
  const { lat_lng_result } = new LatLngCalculator();
  const update = lat_lng_result(input_sheet().fetch_customers());

  output_sheet().update_output(update);
  spreadsheet().toast(
    "Check Output Sheet and Save/Export Output Sheet as .csv",
    "Completed",
    180
  );
  return;
}
