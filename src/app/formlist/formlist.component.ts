import { ViewformComponent } from './../viewform/viewform.component';
import { identity, Observable } from 'rxjs';
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { UserService } from '../user.service';
import {  Router } from '@angular/router';
import { Form } from '../form';


@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})


export class FormlistComponent implements OnInit {
  
  forms!: Observable<Form[]>;
  
  

  constructor(private _service:UserService, private _route: Router){}

  ngOnInit()  {
  this.reloadData();
  }

  reloadData(){
    this.forms = this._service.fetchFormListFromServer();
  }


  deleteForm(id: number){
    this._service.deleteForm(id).subscribe(
      data =>{
        console.log("data");
        this.ngOnInit();
      },
      error =>{
        console.log("Error! ID not found");
      }
    )

  }
    
  viewForm(id: number){
    this._route.navigate(["/viewform", id])
  }

  updateForm(id: number){
    this._route.navigate(["/editform", id])
  }

  }
  
  
  



