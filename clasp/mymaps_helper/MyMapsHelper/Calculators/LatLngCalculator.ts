class LatLngCalculator {
  public lat_lng_result: (customers: Array<Customer>) => Array<Customer>;

  constructor() {
    this.lat_lng_result = (customers: Array<Customer>) => {
      return customers.map((customer: Customer, index: number) => {
        const index_offset = (index: number) => {
          return index + 1;
        };
        switch (index_offset(index)) {
          case 1:
            break;
          default:
            return new Customer([
              customer.name(),
              customer.address(),
              (function latitude(address: string): number {
                return Maps.newGeocoder().geocode(address).results[0].geometry
                  .location.lat;
              })(customer.address()),
              (function longitude(address: string): number {
                return Maps.newGeocoder().geocode(address).results[0].geometry
                  .location.lng;
              })(customer.address()),
            ]);
        }
      });
    };
  }
}
