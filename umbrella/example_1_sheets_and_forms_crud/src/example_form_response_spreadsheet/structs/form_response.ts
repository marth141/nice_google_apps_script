class FormResponseObj {
  index: number;
  timestamp: Date;
  email: string;
  favorite_day: Date;
  given_number: number;
  favorite_food: string;

  constructor(args: {
    index;
    timestamp;
    email;
    favorite_day;
    given_number;
    favorite_food;
  }) {
    const {
      index,
      timestamp,
      email,
      favorite_day,
      given_number,
      favorite_food,
    } = args;

    this.index = index;
    this.timestamp = timestamp;
    this.email = email;
    this.favorite_day = favorite_day;
    this.given_number = given_number;
    this.favorite_food = favorite_food;
  }
}
