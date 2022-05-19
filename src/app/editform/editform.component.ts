import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Form } from '../form';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {


  form  = new Form();
  selectedFile = null;
  onSelectedFile(event:any){
    this.selectedFile = event.target.files[0];
  }

  selectValue: string = "rne"

  constructor(private _route: ActivatedRoute,  private _service: UserService, private _router: Router,  private toast: NgToastService) { }

  ngOnInit(): void {

  let id = this._route.snapshot.params['id'];

  this._service.fetchFormById(id).subscribe(
    data =>{
      this.form = data;
      console.log(data);
    },
    error => console.log("ERROR!!!!")
  )

    
}


updateFormOnSubmit(){
  this._service.updateForm(this.form).subscribe(
    data =>{
      console.log("data added");
      
        this.toast.success({detail: "Updated",  duration: 2000})
      this._router.navigate(['/formlist']);
    },
    error => console.log("error")
  )
}



onChange(selectValue: any){
  this.selectValue = selectValue
}

gotolist(){
  this._router.navigate(['/formlist']);
}
  

  }


