import { HttpClient } from '@angular/common/http';
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

  
    
  public image = null;

  message = '';

  selectValue: string = "rne"

  
  constructor(private _service: UserService, private _router: Router, private toast: NgToastService, private  _http: HttpClient  ) { }

  ngOnInit(): void {
  }

  public imageChoice(theEventFromHtml: any) {
    this.image = theEventFromHtml.target.files[0];
  }

  public sendFile(image: any) {

    if (this.image !== null) {

      const formdata: FormData = new FormData();

      formdata.append('image', this.image);

      this._http.post("http://localhost:8070/upload", formdata, { observe: 'response',   responseType: 'text'}).subscribe(
        Response => {console.log(Response.body);

        console.log(image)
       
        
        this.toast.success({detail: "Document Scanned Successfully",  duration: 2000})
        
        },error => console.log("Error Occured while Uploading Image")
      );
    }
    return Response
    
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
