# Table Example

| FinanceRecord Name | FinanceRecord Cost | FinanceRecord to_keep | Total Bill  | Percent of Total | Total to Remove |
| ------------------ | ------------------ | --------------------- | ----------- | ---------------- | --------------- |
| Bill0              | \$ 159.90          | FALSE                 | \$ 1,801.98 | 24.852%          | \$ 447.82       |
| Bill1              | \$ 100.00          | FALSE                 |             |                  |                 |
| Bill2              | \$ 90.93           | FALSE                 |             |                  |                 |
| Bill3              | \$ 85.00           | FALSE                 |             |                  |                 |
| Bill4              | \$ 9.99            | FALSE                 |             |                  |                 |
| Bill5              | \$ 2.00            | FALSE                 |             |                  |                 |

# What this does

When an edit is made to the "FinanceRecord to_keep" column, the "Total to Remove" and "Percent of Total" will be updated to a new value.

# Technique

Created "Controller.ts" with "FinanceSheet.ts".

While writing "FinanceSheet.ts", created "FinanceRecord.ts" to create an object for the "FinanceRecord" columns.

Created "RecordAssessor.ts" to check what records are to be removed.

Created "Calculator.ts" to calculate "Percent of Total" and "Total to Remove" with an input of "records", preferably after the assessor has processed them.

Finished up "Code.ts" and "onEdit.ts" with the class and function composition built.
