import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {  Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User();
  message = '';
  
 
  constructor(private _service:UserService, private _router: Router, private toast: NgToastService) { }

  

  ngOnInit(): void {
  }
  
  registerUser(){
    this._service.registerUser(this.user).subscribe(
      data =>{
        console.log("res recieved");
        this._router.navigate(['/signin'])
        this.toast.success({detail: "Account Created",  duration: 10000})
     
    },
      error => {
        console.log("Exception Occured");
        this.message = "User already exist";
    }  )
  }

 
}
