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
  public clientMessage = new ClientMessage('');

  addItemForm: FormGroup;

  lid! : number;


  constructor(private userServ: UserService,
    private listServ: ListService,
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) {
      this.addItemForm = this.fb.group({
        somethingElse: [""],
        newItemList: this.fb.array([
          this.fb.control
        ])
      })
  }

  get newItemList() : FormArray {
    return this.addItemForm.get('newItemList') as FormArray;
  }
// TODO: add date to date created
  newItem(): FormGroup {
    return this.fb.group({
      dateCreated: '',
      description: '',
      completed: false
    })
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
    this.lid = listIdFromRoute;

  }
// find the list details from the list id number extracted from the route
  findListDetails(id:number) {
    this.listServ.getListById(id).subscribe((data) => {
      this.toDoList = data;
      this.itemList = data.taskList;
    })
  }

  public addNewItems() : void {
    // console.log("form value: "+ this.addItemForm.value);
    this.listServ.addItemsToList(this.lid, this.addItemForm.value)
      .subscribe(
        (data) => {
          this.clientMessage.message = "Successfully added item"
          console.log("data is "+data)
        },
        error => this.clientMessage.message = `Error was: ${error}`
      )

  }
  public onSubmit() {

  }

}
