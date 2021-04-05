class FormResponse extends Object {
  index;
  timestamp;
  name;
  electronic_equipment_being_checked_out;
  office_supplies_being_checked_out;
  other_asset_being_checked_out_include_cables_chargers_keyboards_etc;
  laptop_brand;
  laptop_model;
  laptop_serial_number;
  desktop_brand;
  desktop_model;
  desktop_serial_number;
  is_a_monitor_needed;
  monitor_1_brand;
  monitor_1_model;
  monitor_1_serial_number;
  is_another_monitor_needed;
  monitor_2_brand;
  monitor_2_model;
  monitor_2_serial_number;
  status;

  constructor(args: {
    index;
    a;
    b;
    c;
    d;
    e;
    f;
    g;
    h;
    i;
    j;
    k;
    l;
    m;
    n;
    o;
    p;
    q;
    r;
    s;
    t;
  }) {
    super();
    const {
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
    } = args;
    this.index = index;
    this.timestamp = a;
    this.name = b;
    this.electronic_equipment_being_checked_out = c;
    this.office_supplies_being_checked_out = d;
    this.other_asset_being_checked_out_include_cables_chargers_keyboards_etc = e;
    this.laptop_brand = f;
    this.laptop_model = g;
    this.laptop_serial_number = h;
    this.desktop_brand = i;
    this.desktop_model = j;
    this.desktop_serial_number = k;
    this.is_a_monitor_needed = l;
    this.monitor_1_brand = m;
    this.monitor_1_model = n;
    this.monitor_1_serial_number = o;
    this.is_another_monitor_needed = p;
    this.monitor_2_brand = q;
    this.monitor_2_model = r;
    this.monitor_2_serial_number = s;
    this.status = t;
  }
}
