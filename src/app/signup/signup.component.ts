import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  message = '';

  constructor(private _service:UserService, private _router: Router) { }

  ngOnInit(): void {
  }
  
  registerUser(){
    this._service.registerUser(this.user).subscribe(
      data =>{
        console.log("res recieved");
        this.message="User created successfully!";
    },
      error => {
        console.log("Exception Occured");
        this.message = error.error;
    }  )
  }




}
