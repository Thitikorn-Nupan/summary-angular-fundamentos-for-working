import { Component } from '@angular/core';
import {DynamicField} from '../../../models/form/dynamic-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'test-user-form-with-key-filter',
  standalone: false,
  templateUrl: './test-user-form-with-key-filter.component.html',
  styleUrl: './test-user-form-with-key-filter.component.css'
})
export class TestUserFormWithKeyFilterComponent {

  protected dynamicFields : DynamicField[]
  protected resultUserFormGroup : string = ''
  protected isValidFormGroup : boolean = false

  constructor() {
    const optionD = [
      { name: 'Frontend Developer', code: 'FD' },
      { name: 'Backend Developer', code: 'BD' },
      { name: 'Fullstack Developer', code: 'FSD' },
    ]
    const optionR = [
      { name: 'Frontend Developer', key: 'FD' },
      { name: 'Backend Developer', key: 'BD' },
      { name: 'Fullstack Developer', key: 'FSD' },
    ]
    const optionC = optionR

    this.dynamicFields = [
      new DynamicField('',new FormControl(),'','','').setPkeyFilter(null).setIsEmpty(true),
      new DynamicField('nickname',new FormControl('',Validators.required),'nickname-id','Nickname','Put your nickname...').setPkeyFilter('alpha'), // only chars i want
      new DynamicField('address',new FormControl('',Validators.required),'address-id','Address','Put your address...').setPkeyFilter(null), // any types
      new DynamicField('age',new FormControl(18,Validators.required),'age-id','Age','Put your age...').setPkeyFilter('int'), // anything
      new DynamicField('email',new FormControl('',Validators.required),'email-id','Email','Put your email...').setPkeyFilter('email'), // anything
      new DynamicField('salary',new FormControl(25000,Validators.required),'salary-id','Salary','Put your salary...').setPkeyFilter('money'), //
      new DynamicField('positionDropdown',new FormControl('',Validators.required),'position-dd-id','Position Dropdown','Select A Position').setOptionDropdown(optionD),
      new DynamicField('positionRadio',new FormControl('',Validators.required),'position-rdo-id','Position Radio Button','Select A Position').setOptionRadio(optionR),
      new DynamicField('positionCheckbox',new FormControl('',Validators.required),'position-cb-id','Position Checkbox','Select Positions').setOptionCheckbox(optionC),
    ]
  }

  protected setEventFormGroup($event: FormGroup) {
    // console.log($event)
    this.isValidFormGroup = $event.valid
    this.resultUserFormGroup += $event.value.nickname
    this.resultUserFormGroup += $event.value.address
    this.resultUserFormGroup += $event.value.age
    this.resultUserFormGroup += $event.value.email
    this.resultUserFormGroup += $event.value.salary
  }
}
