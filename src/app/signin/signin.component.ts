import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user = new User();
  message = '';

  constructor(private _service : UserService, private _route: Router) { }

  ngOnInit(): void {}

  loginUser(){
    this._service.loginUser(this.user).subscribe(
      data => {
        console.log("Res recieved!");
        this._route.navigate(['/form'])

      },
      error =>{
      console.log("Exception Occured!");
      this.message = "Incorrect username or password";
      }
    )
  }
}
