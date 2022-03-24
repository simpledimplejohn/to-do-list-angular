import { ListService } from './../../services/list.service';
import { ClientMessage } from './../../model/client-message';
import { Item } from './../../model/Item';
import { ToDoList } from './../../model/ToDoList';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  public toDoList = new ToDoList(0,'','',false,[]);
  public itemList: Item[] = [];

  addItemForm: FormGroup;


  lid : number = this.toDoList.id;

  public ClientMessage: ClientMessage = new ClientMessage(
    "No items in this list yet"
  );

  constructor(private userServ: UserService,
    private listServ: ListService,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) {
      this.addItemForm = this.fb.group({
        newItemList: this.fb.array([])
      })
  }

  get newItemList() : FormArray {
    return this.addItemForm.get('newTrackList') as FormArray;
  }
// TODO: add date to date created
  newItem(): FormGroup {
    return this.fb.group({
      dateCreated: '',
      description: '',
      completed: false
    });
  }

  addItem() {
    this.newItemList.push(this.newItem());
  }

  removeItem(i:number) {
    this.newItemList.removeAt(i);
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const listIdFromRoute = Number(routeParams.get('listId'));
    this.findListDetails(listIdFromRoute);

  }
// find the list details from the list id number extracted from the route
  findListDetails(id:number) {
    this.listServ.getListById(id).subscribe((data) => {
      this.toDoList = data;
      this.itemList = data.taskList;
    })
  }

  public addNewItems() : void {
    console.log("form value: "+ this.addItemForm.value);

  }
  public onSubmit() {

  }

}
