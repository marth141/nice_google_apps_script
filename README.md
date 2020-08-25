# nice_google_apps_script
Just some Google Apps Script I'm happy with.

A lot of it was written after coming off a while of writing Elixir.

I wanted to try a lot more functional approaching and writing in much more Elixirish way with Google Apps Script.

The project ended up using Classes like Modules and some class properties took advantage of self invoking anonymous functions.

I chose anonymous functions because I saw a place where the property really needed the power of `switch case`. If in JavaScript functions are objects...

So I'm proud of how it turned out and hope that it helps someone else with thinking about how to write Google Apps Script

# Setup

With a reminder list like...

| Employee | Employee Email       | Last Sent |
|----------|----------------------|-----------|
| John Doe | john.doe@company.com |           |
| Jane Doe | jane.doe@company.com |           |
| ...      | ...                  | ...       |

Someone would be able to send some emails and set a trigger to have emails send automatically 2, 3, or 14 days after the initial Last Sent date.

Configuration table would look like...
|          |                      |
|----------|----------------------|
| reply to | john.doe@company.com |
| subject  | Example Subject      |
| body     | Example Body         |
