function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit) {
  switch (e.range.getColumn()) {
    case 3:
      myFunction();
    default:
      break;
  }
}
