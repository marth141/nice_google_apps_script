class CheckoutFormResponseSheet extends CheckoutFormResponseSpreadsheet {
  sheet: GoogleAppsScript.Spreadsheet.Sheet;
  start_column: string;
  end_column: string;

  constructor() {
    super();
    const this_class = this;
    const { get_sheet, spreadsheet } = this_class;

    this.sheet = get_sheet(spreadsheet, "Form Responses 1");
    this.start_column = "A";
    this.end_column = "T";
  }

  get_sheet(
    spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet,
    name: string
  ) {
    return spreadsheet.getSheetByName(name);
  }

  // CRUD operations

  create_response(new_response: FormResponse) {
    const this_class = this;

    const existing_response = this_class
      .read_all_responses()
      .find((existing_response) => {
        return existing_response.name == new_response.name;
      }, new_response);

    if (existing_response == undefined) {
      this_class.update_response(new_response);
      return new_response;
    } else {
      console.error(new Error("Record already exists"));
      return existing_response;
    }
  }

  read_all_responses() {
    const this_class = this;
    const { sheet, start_column, end_column } = this_class;

    return sheet
      .getRange(`${start_column}1:${end_column}${sheet.getLastRow()}`)
      .getValues()
      .map(
        (
          [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t],
          index
        ) => {
          if (a instanceof Date) {
            return new FormResponse({
              index,
              a,
              b,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
            });
          }
        }
      )
      .filter((response: FormResponse) => {
        return response != undefined;
      });
  }

  read_one_response(read_query: {
    index?;
    timestamp?;
    name?;
    electronic_equipment_being_checked_out?;
    office_supplies_being_checked_out?;
    other_asset_being_checked_out_include_cables_chargers_keyboards_etc?;
    laptop_brand?;
    laptop_model?;
    laptop_serial_number?;
    desktop_brand?;
    desktop_model?;
    desktop_serial_number?;
    is_a_monitor_needed?;
    monitor_1_brand?;
    monitor_1_model?;
    monitor_1_serial_number?;
    is_another_monitor_needed?;
    monitor_2_brand?;
    monitor_2_model?;
    monitor_2_serial_number?;
    status?;
  }) {
    const this_class = this;
    const {
      index,
      timestamp,
      name,
      electronic_equipment_being_checked_out,
      office_supplies_being_checked_out,
      other_asset_being_checked_out_include_cables_chargers_keyboards_etc,
      laptop_brand,
      laptop_model,
      laptop_serial_number,
      desktop_brand,
      desktop_model,
      desktop_serial_number,
      is_a_monitor_needed,
      monitor_1_brand,
      monitor_1_model,
      monitor_1_serial_number,
      is_another_monitor_needed,
      monitor_2_brand,
      monitor_2_model,
      monitor_2_serial_number,
      status,
    } = read_query;

    return this_class
      .read_all_responses()
      .find((existing_response: FormResponse) => {
        for (const property in existing_response) {
          if (
            existing_response[property] == index ||
            timestamp ||
            name ||
            electronic_equipment_being_checked_out ||
            office_supplies_being_checked_out ||
            other_asset_being_checked_out_include_cables_chargers_keyboards_etc ||
            laptop_brand ||
            laptop_model ||
            laptop_serial_number ||
            desktop_brand ||
            desktop_model ||
            desktop_serial_number ||
            is_a_monitor_needed ||
            monitor_1_brand ||
            monitor_1_model ||
            monitor_1_serial_number ||
            is_another_monitor_needed ||
            monitor_2_brand ||
            monitor_2_model ||
            monitor_2_serial_number ||
            status
          ) {
            return existing_response;
          }
        }
      });
  }

  update_response(to_update: FormResponse) {
    const this_class = this;
    const { sheet, start_column, end_column } = this_class;
    const {
      index,
      timestamp,
      name,
      electronic_equipment_being_checked_out,
      office_supplies_being_checked_out,
      other_asset_being_checked_out_include_cables_chargers_keyboards_etc,
      laptop_brand,
      laptop_model,
      laptop_serial_number,
      desktop_brand,
      desktop_model,
      desktop_serial_number,
      is_a_monitor_needed,
      monitor_1_brand,
      monitor_1_model,
      monitor_1_serial_number,
      is_another_monitor_needed,
      monitor_2_brand,
      monitor_2_model,
      monitor_2_serial_number,
      status,
    } = to_update;

    sheet
      .getRange(`${start_column}${index + 1}:${end_column}${index + 1}`)
      .setValues([
        [
          timestamp,
          name,
          electronic_equipment_being_checked_out,
          office_supplies_being_checked_out,
          other_asset_being_checked_out_include_cables_chargers_keyboards_etc,
          laptop_brand,
          laptop_model,
          laptop_serial_number,
          desktop_brand,
          desktop_model,
          desktop_serial_number,
          is_a_monitor_needed,
          monitor_1_brand,
          monitor_1_model,
          monitor_1_serial_number,
          is_another_monitor_needed,
          monitor_2_brand,
          monitor_2_model,
          monitor_2_serial_number,
          status,
        ],
      ]);
    return to_update;
  }

  update_responses(list_to_update: FormResponse[]) {
    const this_class = this;
    const { sheet, start_column, end_column } = this_class;

    const to_google_sheets = list_to_update.map((to_update: FormResponse) => {
      const {
        index,
        timestamp,
        name,
        electronic_equipment_being_checked_out,
        office_supplies_being_checked_out,
        other_asset_being_checked_out_include_cables_chargers_keyboards_etc,
        laptop_brand,
        laptop_model,
        laptop_serial_number,
        desktop_brand,
        desktop_model,
        desktop_serial_number,
        is_a_monitor_needed,
        monitor_1_brand,
        monitor_1_model,
        monitor_1_serial_number,
        is_another_monitor_needed,
        monitor_2_brand,
        monitor_2_model,
        monitor_2_serial_number,
        status,
      } = to_update;
      return [
        timestamp,
        name,
        electronic_equipment_being_checked_out,
        office_supplies_being_checked_out,
        other_asset_being_checked_out_include_cables_chargers_keyboards_etc,
        laptop_brand,
        laptop_model,
        laptop_serial_number,
        desktop_brand,
        desktop_model,
        desktop_serial_number,
        is_a_monitor_needed,
        monitor_1_brand,
        monitor_1_model,
        monitor_1_serial_number,
        is_another_monitor_needed,
        monitor_2_brand,
        monitor_2_model,
        monitor_2_serial_number,
        status,
      ];
    });

    sheet
      .getRange(`${start_column}2:${end_column}${sheet.getLastRow()}`)
      .setValues(to_google_sheets);
    return list_to_update;
  }

  delete_response(to_delete: FormResponse) {
    const this_class = this;
    const { sheet } = this_class;

    const existing_response = this_class
      .read_all_responses()
      .find((existing_response: FormResponse) => {
        return existing_response.name == to_delete.name;
      }, to_delete);

    if (existing_response.name == to_delete.name) {
      sheet.deleteRow(existing_response.index + 1);
    }
    return "ok";
  }
}
