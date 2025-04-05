export class User {
  public uid: number
  public fullname: string
  public email: string

  constructor(uid: number, fullname: string, email: string) {
    this.uid = uid;
    this.fullname = fullname;
    this.email = email;
  }
}
