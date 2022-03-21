import { ToDoList } from './../../model/ToDoList';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  title = "List of Lists";
  public listOfLists : ToDoList[]= [];

  public user : User = new User(0,'','','','','',[]);

  constructor() { }

  ngOnInit(): void {
    // call this users list of ToDoLists and print
  }

}
