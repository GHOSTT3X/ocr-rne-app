import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form = new Form();
  
  message = '';

  selectedFile = null;
  onSelectedFile(event:any){
    this.selectedFile = event.target.files[0];
  }

  selectValue: string = "rne"


  constructor(private _service: UserService, private _router: Router, private toast: NgToastService  ) { }

  ngOnInit(): void {
  }

  addFormFromSubmit(){
    this._service.addFormToRemote(this.form).subscribe(
      data =>{
        console.log("res recieved");
        this._router.navigate(['/formlist'])
        this.toast.success({detail: "Form Submitted",  duration: 2000})
    },
      error => {
        console.log("Exception Occured");
    }  )
  }

  onChange(selectValue: any){
    this.selectValue = selectValue
  }
  
  

}
