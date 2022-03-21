import { UserService } from './../../services/user.service';
import { ClientMessage } from './../../model/client-message';
import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user = new User(0, '', '', '', '', '', []);
  public clientMessage = new ClientMessage('');

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public addUser(): void {
    this.userService.addUser(this.user).subscribe(
      (data) =>
        (this.clientMessage.message = `Successfully added ${data.firstName}`),
      (error) => (this.clientMessage.message = `Error was ${error}`)
    );
    console.log(this.user);
  }
}
