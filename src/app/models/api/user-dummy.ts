export class User {
  id: number;
  name: string;
  company: string;
  username: string;
  email: string;
  address: string;
  zip: string;
  state: string;
  country: string;
  phone: string;
  photo: string;

  constructor(
    id: number,
    name: string,
    company: string,
    username: string,
    email: string,
    address: string,
    zip: string,
    state: string,
    country: string,
    phone: string,
    photo: string
  ) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.username = username;
    this.email = email;
    this.address = address;
    this.zip = zip;
    this.state = state;
    this.country = country;
    this.phone = phone;
    this.photo = photo;
  }
}
