import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../model/client-message';
import { ToDoList } from './../../model/ToDoList';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  uid: number = 1;

  title = "List of Lists";
  public listOfLists : ToDoList[]= [];

  public ClientMessage: ClientMessage = new ClientMessage(
    "You have no lists, would you like to make one"
  );

  public  user : User = new User(0,'','','','','',[]);
  public  theUser : any;

  constructor(private uServ: UserService) { }

  ngOnInit(): void {
    // call this users list of ToDoLists and print
    this.findUsersLists(this.uid);
    // this.findUser(this.uid);
    console.log(this.user);
    // this.findUser(this.uid);



  }
// this method throws a cores error
  findUser(id: number) {
    this.uServ.getUserById(id).subscribe((data) => {
      this.user = data;
    })
  }

  findUsersLists(id: number) {
    this.uServ.getUsersListOfList(id).subscribe((data) => {
      this.listOfLists = data;
    });
  }

}
