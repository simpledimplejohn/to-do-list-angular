export class User {
  id: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    listOfList: []
) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.userName = userName
    this.email = email
    this.password = password
    this.listOfList = listOfList
  }
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  listOfList: [];
}
