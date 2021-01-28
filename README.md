# nice_google_apps_script

So sharing this recipe for working with Spreadsheet Google Apps Script.

Basically you'd want to abstract the top level "Spreadsheet" stuff into a class like in `example_spreadsheet.ts`.

Then you'd want to abstract your sheets into classes like in `example_spreadsheet/example_sheet.ts`.

You'd want to abstract your table data like in `struct/employee_spreadsheet_obj.ts`.

With these foundations, you can execute `myFunction()` in `Code.ts`.

The end result of this is that it'll show a "how to read spreadsheet data & how to update spreadsheet data" method with a solid umbrella application foundation; with pretty full IDE support if you're using Visual Studio Code, clasp, and @types/google-apps-script.

I filled in comments across all the mentioned files to explain more in depth what is happening.

# Setup Commands

1. Run `npm install -g @google/clasp` to install clasp.
2. Run `npm install` to get `@types/google-apps-script` for coding.
3. Run `clasp login` to login to your Google.
4. Use `clasp create` create your apps script project.
5. Update the `.clasp.json` with the new script's id.
6. Use `clasp push` in the `src/` directory. e.g. `~/code/nice_google_apps_script/umbrella/nice_skeleton/src$ clasp push`

Any critique is welcome!
