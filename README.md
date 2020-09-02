# nice_google_apps_script
Just some Google Apps Script I'm happy with.

A lot of it was written after coming off a while of writing Elixir.

I wanted to try a lot more functional approaching and writing in much more Elixirish way with Google Apps Script.

The project ended up using Classes like Modules and some class properties took advantage of self invoking anonymous functions.

I chose anonymous functions because I saw a place where the property really needed the power of `switch case`. If in JavaScript functions are objects...

So I'm proud of how it turned out and hope that it helps someone else with thinking about how to write Google Apps Script

# Setup

Run `npm install` to get Google Types for coding.

Reminder Sheet would look like...

| Employee Email | Position | Form Sent | Send Reminder | Last Sent |
|----------------|----------|-----------|---------------|-----------|
| test0@test.com | Manager  | 9/2/2020  | FALSE         | 9/2/2020  |
| test1@test.com | Employee | 9/2/2020  | TRUE          | 9/4/2020  |
| ...            | ...      | ...       | ...           | ...       |

Configuration sheet would look like...

| Reply To       | Subject      | Link             | Body                          | Activated |
|----------------|--------------|------------------|-------------------------------|-----------|
| test2@test.com | Test Subject | https://test.com | Hello, visit LINK_PLACEHOLDER | TRUE      |
