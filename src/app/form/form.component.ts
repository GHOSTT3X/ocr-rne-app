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
  nom : any = "";
  
    
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

      this._http.post("http://localhost:8070/upload", formdata, { observe: 'response',   responseType: 'json'}).subscribe(
        (response: any) => {console.log(response.body);
          this.form.mouaref = response.body.mouaref
          this.form.adad_sejel = response.body.adad_sejel
          this.form.tarikh = response.body.tarikh
          this.form.esmTijari  = response.body.esmTijari
          this.form.esmTijariLatin = response.body.esmTijariLatin
          this.form.makarEjtima = response.body.makarEjtima
          this.form.makarNachat = response.body.makarNachat
          this.form.modatCharika = response.body.modatCharika
          this.form.nachatRaisi = response.body.nachatRaisi
          this.form.nithamKanouni = response.body.nithamKanouni
          this.form.rasMal = response.body.rasMal
          this.form.tarikhBideyetNachat = response.body.tarikhBideyetNachat
          this.form.tarikhEchhar = response.body.tarikhEchhar
          this.form.tasmiya = response.body.tasmiya
          this.form.tasmiyaLatin = response.body.tasmiyaLatin
          this.form.adadFar = response.body.adadFar

        this.toast.success({detail: "Document Scanned Successfully",  duration: 2000})
        
        },error => console.log("Error Occured while Uploading Image")
      );
    }
    
    
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
