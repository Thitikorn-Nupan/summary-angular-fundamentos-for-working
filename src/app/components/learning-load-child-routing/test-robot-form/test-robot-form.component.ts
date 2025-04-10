import { Component } from '@angular/core';
import {DynamicField} from '../../../models/form/dynamic-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'test-robot-form',
  standalone: false,
  templateUrl: './test-robot-form.component.html',
  styleUrl: './test-robot-form.component.css'
})
export class TestRobotFormComponent {
  protected robotFormGroupTextFields: DynamicField[] = [
    new DynamicField('code',new FormControl('',Validators.required),'id-code','pi pi-pencil','Code...'),
    new DynamicField('label',new FormControl('',Validators.required),'id-label','pi pi-pencil','Label...'),
  ]
  protected robotFormGroupNumberFields: DynamicField[] = [
    new DynamicField('cost',new FormControl(0,Validators.required),'id-cost','$','Cost...'),
  ]
  protected robotFormGroupDropdownFields: { dynamicField : DynamicField , option : any } [] = [
    {
      dynamicField: new DynamicField('status',new FormControl('',Validators.required),'id-status','pi pi-pencil','Select A Status'),
      option : [
        { name: 'Active', code: 'T' },
        { name: 'Inactive', code: 'F' },
      ]
    },
  ]
  protected resultRobotFormGroup : string = ''
  protected isValidFormGroup: boolean = false
  protected handleFormGroup(formGroup: FormGroup) {
    // console.log(formGroup.value)
    this.isValidFormGroup = formGroup.valid
    this.resultRobotFormGroup = `
    Code : ${formGroup.value.code}
    Label : ${formGroup.value.label}
    Cost : $${formGroup.value.cost}
    Status : ${formGroup.value.status.name}
    `
  }
}
