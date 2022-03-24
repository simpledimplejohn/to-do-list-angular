import { AddItemComponent } from './components/add-item/add-item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { ListsComponent } from './components/lists/lists.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path : "register", component: RegisterComponent},
  {path : "login", component: LoginComponent},
  {path : "lists", component: ListsComponent},
  {path: "list-details/:listId", component: ListDetailsComponent},
  {path: "item-details/:itemId", component: ItemDetailsComponent},
  {path: "add-item:listId", component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
