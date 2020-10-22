function myFunction() {
  const spreadsheet = new Spreadsheet();

  spreadsheet.norco_dashboard.update_stats();
  spreadsheet.soco_dashboard.update_stats();
  spreadsheet.wesco_dashboard.update_stats();
  spreadsheet.mn_dashboard.update_stats();
  spreadsheet.ut_dashboard.update_stats();
  spreadsheet.missing_install_area_dashboard.update_stats();
  spreadsheet.all_regions_dashboard.update_stats();
  show_complete();
}

function create_time_trigger_for_myFunction() {
  ScriptApp.newTrigger(`myFunction`).timeBased().everyHours(4).create();
}

function create_on_open_trigger_for_on_open() {
  ScriptApp.newTrigger(`on_open`)
    .forSpreadsheet(new Spreadsheet().spreadsheet)
    .onOpen()
    .create();
}

function on_open() {
  SpreadsheetApp.getUi()
    .createMenu(`Refresh Counts`)
    .addItem(`Run`, `myFunction`)
    .addToUi();
}

function show_complete() {
  var ui = SpreadsheetApp.getUi();
  ui.alert(
    `Complete`,
    `Install Area Disposition and Activity Type Scheduled Counts Updated`,
    ui.ButtonSet.OK
  );
}

function test_conditional_formatter() {
  new PassRateConditionalFormatter().run();
}
