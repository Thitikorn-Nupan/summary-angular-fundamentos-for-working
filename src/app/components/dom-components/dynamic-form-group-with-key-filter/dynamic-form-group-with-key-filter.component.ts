import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input()
  public declare dynamicFormGroup: FormGroup;
  @Input()
  public declare dynamicFieldsInput: DynamicField[];
  @Input()
  public declare formGroupTitle: string ;
  @Output()
  protected getFormGroup: EventEmitter<FormGroup>; // Event emitter for getting the form group

  constructor() {
    this.getFormGroup = new EventEmitter<FormGroup>();
  }

  ngOnInit(): void {
    this.loadDynamicFields()
  }

  /*private testSetupDynamicFields() {
    this.formGroup = new FormGroup({})
    let f0 = new DynamicField('nickname',new FormControl('',Validators.required),'nickname-id','Nickname','Put your nickname...').setPkeyFilter('alpha').setIsEmpty(true)
    let f1 = new DynamicField('fullname',new FormControl('',Validators.required),'fullname-id','Fullname','Put your fullname...').setPkeyFilter('alpha') // only chars i want
    let f2= new DynamicField('address',new FormControl('',Validators.required),'address-id','Address','Put your address...').setPkeyFilter(null) // any types
    let f3= new DynamicField('age',new FormControl(18,Validators.required),'age-id','Age','Put your age...').setPkeyFilter('int') // anything
    let f4= new DynamicField('email',new FormControl('',Validators.required),'email-id','Email','Put your email...').setPkeyFilter('email') // anything
    let f5= new DynamicField('salary',new FormControl(25000,Validators.required),'salary-id','Salary','Put your salary...').setPkeyFilter('money') //

    this.dynamicFieldsInput = [
      f0,f1,f2,f3,f4,f5
    ]
    for (let i = 0; i < this.dynamicFieldsInput.length; i++) {
      this.formGroup.addControl(this.dynamicFieldsInput[i].name,this.dynamicFieldsInput[i].data)
    }
  }*/


  private loadDynamicFields() {
    // this.formGroup = new FormGroup({})
    for (let i = 0; i < this.dynamicFieldsInput.length; i++) {
      this.dynamicFormGroup.addControl(this.dynamicFieldsInput[i].name,this.dynamicFieldsInput[i].data)
    }
  }

  public reloadFormGroup(dynamicFieldsInput: DynamicField[],dynamicFormGroup: FormGroup) {
    // console.log('reloaded')
    this.dynamicFormGroup = dynamicFormGroup
    for (let i = 0; i < dynamicFieldsInput.length; i++) {
      // console.log(dynamicFieldsInput[i].name)
      // console.log(dynamicFieldsInput[i].data)
      this.dynamicFormGroup.addControl(dynamicFieldsInput[i].name,dynamicFieldsInput[i].data)
    }
  }

  protected onSubmitFormGroup() {
    this.getFormGroup.emit(this.dynamicFormGroup)
  }
}
