class FormResponse extends Object {
  index: number;
  timestamp: Date;
  email: string;
  name: string;
  favorite_day: Date;
  given_number: number;
  favorite_food: string;

  constructor(args: {
    index;
    timestamp;
    email;
    name;
    favorite_day;
    given_number;
    favorite_food;
  }) {
    super();
    const {
      index,
      timestamp,
      email,
      name,
      favorite_day,
      given_number,
      favorite_food,
    } = args;

    this.index = index;
    this.timestamp = timestamp;
    this.email = email;
    this.name = name;
    this.favorite_day = favorite_day;
    this.given_number = given_number;
    this.favorite_food = favorite_food;
  }
}
