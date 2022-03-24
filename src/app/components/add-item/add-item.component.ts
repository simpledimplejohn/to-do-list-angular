import { ActivatedRoute } from '@angular/router';
import { ListService } from './../../services/list.service';
import { ItemService } from './../../services/item.service';
import { Item } from './../../model/Item';
import { ToDoList } from './../../model/ToDoList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public toDoList : ToDoList = new ToDoList(0,'','', false,[]);
  public item : Item = new Item(0,'','',false);
  public itemList : Item[] = [];

  constructor(private listServ: ListService,
    private itemService: ItemService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const listIdFromRoute = Number(routeParams.get('listId'));
    this.findListDetails(listIdFromRoute);
  }

  findListDetails(id:number) {
    this.listServ.getListById(id).subscribe((data) => {
      this.toDoList = data;
      this.itemList = data.taskList;
    })
  }

}
