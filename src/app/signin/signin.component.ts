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
  hide = true;
  user = new User();
  message = '';

  constructor(private _service : UserService, private _route: Router) { }

  ngOnInit(): void{}

  loginUser(){
    this._service.loginUser(this.user).subscribe(
      data => {
        console.log("Res recieved!");
        this._route.navigate(['/formlist'])
      },
      error =>{
      console.log("Exception Occured!");
      this.message = "Incorrect username or password";
      }
    )
  }
}
