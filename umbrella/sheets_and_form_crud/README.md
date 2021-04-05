# CRUD with Google Sheets

Hello! This folder contains an example of CRUD.

CRUD is Create, Read, Update, and Delete.

All of these are basic operations to be done on a database. Google Sheets just don't make it easy.

# File Legend

- `src/Code.ts`
  - Contains test functions that showcase CRUD operations.
- `src/example_form_response_spreadsheet.ts`
  - Abstracts the spreadsheet as a custom spreadsheet class.
  - Provides the official spreadsheet class to child sheets.
- `src/example_form_response_spreadsheet/example_form_response_sheet.ts`
  - Abstracts the spreadsheet's sheet as a custom class extending the custom spreadsheet class.
  - Contains all of the CRUD functions.
- `src/example_form_response_spreadsheet/structs/form_response.ts`
  - Abstracts the spreadsheet's sheet's table data as a class extending the built-in object class.
  - This makes it easier to write Google Apps Script code using an IDE; Makes the headers accessible with Intellisense.

# Example Sheet

https://docs.google.com/spreadsheets/d/1LS09YDGkLDIZCKofXYrhY72M2Y1HbJgE93q82XDHF-4/edit?usp=sharing

Feel free to copy the example sheet and test out the code yourself.
