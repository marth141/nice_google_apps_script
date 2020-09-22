class LatLngCalculator {
  public lat_lng_result: (customers: Array<Customer>) => Array<Customer>;

  constructor() {
    this.lat_lng_result = (customers: Array<Customer>) => {
      return customers.map((customer: Customer, index: number) => {
        const index_offset = (function get_offset(index: number) {
          return index + 1;
        })(index);
        switch (index_offset) {
          case 1:
            break;
          default:
            return new Customer({
              name: customer.name(),
              address: customer.address(),
              latitude: (function get_latitude(address: string): number {
                return Maps.newGeocoder().geocode(address).results[0].geometry
                  .location.lat;
              })(customer.address()),
              longitude: (function get_longitude(address: string): number {
                return Maps.newGeocoder().geocode(address).results[0].geometry
                  .location.lng;
              })(customer.address()),
            });
        }
      });
    };
  }
}
