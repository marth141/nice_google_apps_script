function myfunction() {
  const values = {
    key1: get_value("O11"),
    key2: get_value("K11"),
    key3: get_value("O13"),
    key4: get_value("O15"),
    key5: get_value("O17"),
    key6: get_value("O19"),
    key7: get_value("O21"),
    paid: null,
    key9: get_value("K13"),
    key10: get_value("K15"),
    key11: get_value("K17"),
    key12: get_value("K21"),
    key13: get_value("K19"),
  };
  Logger.log(values);
  return values;
}

function get_value(range_string) {
  const formSS = SpreadsheetApp.openByUrl("spreadsheet_url").getSheets()[0];
  return formSS.getRange(range_string).getValue();
}
