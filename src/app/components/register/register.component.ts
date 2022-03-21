import { ClientMessage } from './../../model/client-message';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = new User(0,'','','','','',[]);
  public ClientMessage = new ClientMessage('');

  constructor() { }

  ngOnInit(): void {
  }

}
