import { Component, OnInit } from '@angular/core';
import { Person } from 'src/Person';


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  person: Person[];
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
   this.person = { ...this.fieldArray };
   console.log(this.person);
  console.log(JSON.stringify(this.person)); 
  }
}
