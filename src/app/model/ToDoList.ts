import { User } from './user';

export class ToDoList {
  id: number;
  listName: string;
  date: string;
  complete: boolean;
  user: User;
  taskList: [];

  constructor(
    id: number,
    listName: string,
    date: string,
    complete: boolean,
    user: User,
    taskList: []
) {
    this.id = id
    this.listName = listName
    this.date = date
    this.complete = complete
    this.user = user
    this.taskList = taskList
  }

}
