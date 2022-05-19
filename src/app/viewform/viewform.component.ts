import { UserService } from './../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.css']
})
export class ViewformComponent implements OnInit {

  id!: number;
  form!: Form;

  constructor(private _route: ActivatedRoute, private _router: Router, private _service: UserService) { }

  ngOnInit(): void {
    this.form = new Form();
    this.id = this._route.snapshot.params['id'];

    this._service.fetchFormById(this.id).subscribe(
      data =>{
        console.log("data");
        this.form = data;
      },
      error => console.log("error")
    ) 
  };
  gotolist(){
    this._router.navigate(['/formlist']);
  }

}
