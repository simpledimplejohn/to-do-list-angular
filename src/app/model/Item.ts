export class Item {
  id: number;
  dateCreated: string;
  description: string;
  completed: boolean;


  constructor(
    id: number,
    dateCreated: string,
    description: string,
    completed: boolean
) {
    this.id = id
    this.dateCreated = dateCreated
    this.description = description
    this.completed = completed
  }

}
