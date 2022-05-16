import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  selectedFile = null;
  onSelectedFile(event:any){
    this.selectedFile = event.target.files[0];
  }

  selectValue: string = "rne"


  constructor() { }




  ngOnInit(): void {
  }

  onChange(selectValue: any){
    this.selectValue = selectValue

  }

}
