import { ClientMessage } from './../../model/client-message';
import { Item } from './../../model/Item';
import { ToDoList } from './../../model/ToDoList';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  public toDoList = new ToDoList(0,'','',false,[]);
  public item: Item[] = [];

  public ClientMessage: ClientMessage = new ClientMessage(
    "No items in this list yet"
  );

  constructor(private userServ: UserService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const listIdFromRoute = Number(routeParams.get('listId'));

  }

  findListDetails(id:number) {

  }

}
