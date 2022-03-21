import { User } from './../../model/user';
import { ClientMessage } from './../../model/client-message';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  public clientMessage = new ClientMessage('');
  public user = new User(0,'','','','','',[]);



  public login(): void {
    let x = JSON.stringify(this.user);
    console.log(x);

    this.userService.getWithEmailAndPassword(x)
    .subscribe(data=> {
      this.user = data;
      this.clientMessage.message = `Successfully login ${data.firstName}`
      this.router.navigate(['/lists'])
    }
    )
  }

  ngOnInit(): void {
  }

}
