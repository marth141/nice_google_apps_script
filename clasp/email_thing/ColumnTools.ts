class ColumnTools {
  private get_alphabet_index: (column: number) => number;
  private get_char_code: (column: number) => number;
  private exit_loop: (column: number) => number;
  private get_letter: (column: number, letter: string) => string;
  public column_to_letter: (column: number) => string;

  constructor() {
    this.get_alphabet_index = function (column: number) {
      return (column - 1) % 26;
    };
    this.get_char_code = function (column: number) {
      return new ColumnTools().get_alphabet_index(column) + 65;
    };
    this.exit_loop = function (column: number) {
      return (column - new ColumnTools().get_alphabet_index(column) - 1) / 26;
    };
    this.get_letter = function (column: number, letter: string) {
      return (
        String.fromCharCode(new ColumnTools().get_char_code(column)) + letter
      );
    };
    this.column_to_letter = function (column: number) {
      let letter = "";
      while (column > 0) {
        letter = new ColumnTools().get_letter(column, letter);

        column = new ColumnTools().exit_loop(column);
      }
      return letter;
    };
  }
}

function myFunction() {
  Logger.log(new ColumnTools().column_to_letter(1));
}
