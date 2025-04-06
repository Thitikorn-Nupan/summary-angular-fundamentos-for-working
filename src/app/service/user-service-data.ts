import {User} from '../models/api/user';

export class UserServiceData {
  private users: User[]

  constructor() {
    this.users = [
      new User(100, 'alex ryder', 'alex@hotmail.com'),
      new User(101, 'jon john', 'jon@hotmail.com'),
      new User(102, 'kevin owner', 'kevin@hotmail.com')
    ];
  }
  public getUsers() {
    return this.users;
  }

  public addUser(user: User) {
    this.users.push(user);
  }

  public removeUser(userSearch: User) {
    this.users = this.users.filter((user)=> user.uid !== userSearch.uid)
  }

  public editUser(userNew: User,id: number) {
    this.users = this.users.filter((user)=> {
      if (user.uid === id) {
        user.fullname = userNew.fullname;
        user.email = userNew.email;
      }
      return user;
    })
  }

}
