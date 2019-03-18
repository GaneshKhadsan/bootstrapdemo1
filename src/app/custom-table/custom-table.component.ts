import { Component, OnInit } from '@angular/core';
import { Person } from 'src/Person';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  person: Person[];
  public show_table : boolean = false;
  
  tableForm: FormGroup;
  constructor(private fb: FormBuilder) {
   }

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
    this.show_table = !this.show_table;
    
    this.tableForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ]
   });


   console.log(this.fieldArray);
   this.person = { ...this.fieldArray };
   console.log(this.person);
  console.log(JSON.stringify(this.person)); 
  }
}
