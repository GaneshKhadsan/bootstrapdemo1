import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  fieldArray: Array<any> = [];
  newAttribute: any = {};

  constructor() { }

  ngOnInit() {
  }

  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }

  submitTable(){
   console.log(this.fieldArray);
    
  }
}
