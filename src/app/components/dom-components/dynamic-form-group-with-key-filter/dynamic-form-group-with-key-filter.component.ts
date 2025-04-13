import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicField} from '../../../models/form/dynamic-field';

@Component({
  selector: 'dynamic-form-group-with-key-filter',
  standalone: false,
  templateUrl: './dynamic-form-group-with-key-filter.component.html',
  styleUrl: './dynamic-form-group-with-key-filter.component.css'
})
export class DynamicFormGroupWithKeyFilterComponent implements OnInit {

  // blockChars: RegExp = /^[^<>*!]+$/;
  protected declare formGroup: FormGroup;
  public declare dynamicFieldsInput: DynamicField[];
  @Input()
  public formGroupTitle: string = 'Form Name';

  ngOnInit(): void {
    this.formGroup = new FormGroup({})
    let f1 = new DynamicField('fullname',new FormControl('',Validators.required),'fullname-id','Fullname','Put your fullname...').setPkeyFilter('alpha') // only chars i want
    let f2= new DynamicField('address',new FormControl('',Validators.required),'address-id','Address','Put your address...').setPkeyFilter(null) // any types
    let f3= new DynamicField('age',new FormControl(18,Validators.required),'age-id','Age','Put your age...').setPkeyFilter('int') // anything

    this.dynamicFieldsInput = [
      f1,f2,f3
    ]
    for (let i = 0; i < this.dynamicFieldsInput.length; i++) {
      this.formGroup.addControl(this.dynamicFieldsInput[i].name,this.dynamicFieldsInput[i].data)
    }

  }


}
