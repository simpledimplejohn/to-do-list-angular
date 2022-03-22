import { User } from './user';

export class ToDoList {
  id: number;
  listName: string;
  date: string;
  complete: boolean;
  taskList: [];

  constructor(
    id: number,
    listName: string,
    date: string,
    complete: boolean,
    taskList: []
) {
    this.id = id
    this.listName = listName
    this.date = date
    this.complete = complete
    this.taskList = taskList
  }

}
