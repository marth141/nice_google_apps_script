function test() {
  const test_last_sent_two_days_ago = (function () {
    const today = new Date();
    const two_days_ago = new Date(today.setDate(today.getDate() - 2));
    return two_days_ago;
  })();
  const test_last_sent_three_days_ago = (function () {
    const today = new Date();
    const two_days_ago = new Date(today.setDate(today.getDate() - 3));
    return two_days_ago;
  })();
  const test_schedule_1 = new ReminderSchedulerMessage(
    "employee@company.com",
    test_last_sent_two_days_ago
  );
  const test_schedule_2 = new ReminderSchedulerMessage(
    "employee@company.com",
    test_last_sent_three_days_ago
  );
  Logger.log(test_schedule_1);
  Logger.log(test_schedule_2);
}
