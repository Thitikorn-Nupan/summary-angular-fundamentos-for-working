import { Component } from '@angular/core';
import {DynamicField} from '../../../models/form/dynamic-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'test-user-form',
  standalone: false,
  templateUrl: './test-user-form.component.html',
  styleUrl: './test-user-form.component.css'
})
export class TestUserFormComponent {

  protected userFormGroupTextFields: DynamicField[] = [
    new DynamicField('firstname',new FormControl('',Validators.required),'id-firstname','pi pi-pencil','Firstname...'),
    new DynamicField('lastname',new FormControl('',Validators.required),'id-lastname','pi pi-pencil','Lastname...'),
    new DynamicField('nickname',new FormControl('',Validators.required),'id-nickname','pi pi-pencil','Nickname...'),
  ]
  protected userFormGroupNumberFields: DynamicField[] = [
    new DynamicField('age',new FormControl(0,Validators.required),'id-age','Age','Age...'),
  ]
  protected userFormGroupDropdownFields: { dynamicField : DynamicField , option : any } [] = [
    {
      dynamicField: new DynamicField('position',new FormControl('',Validators.required),'id-position','pi pi-pencil','Select A Position'),
      option : [
        { name: 'Frontend Developer', code: 'FD' },
        { name: 'Backend Developer', code: 'BD' },
        { name: 'Fullstack Developer', code: 'FSD' },
      ]
    },
    {
      dynamicField: new DynamicField('salary',new FormControl('',Validators.required),'id-salary','pi pi-pencil','Select A Salary'),
      option : [
        { name: '15K - 25K', code: 'LOW' },
        { name: '26K - 35K', code: 'MID' },
        { name: '36K - 45K', code: 'HIGH' },
      ]
    },
  ]
  protected resultUserFormGroup : string = ''
  protected isValidFormGroup: boolean = false
  protected handleFormGroup(formGroup: FormGroup) {
    // console.log(formGroup.value)
    this.isValidFormGroup = formGroup.valid
    this.resultUserFormGroup = `
    Firstname : ${formGroup.value.firstname}
    Lastname : ${formGroup.value.lastname}
    Nickname : ${formGroup.value.nickname}
    Age : ${formGroup.value.age}
    Position : ${formGroup.value.position.name}
    Salary : ${formGroup.value.salary.name}
    `
    /*
    {
        "firstname": "T",
        "lastname": "T",
        "nickname": "T",
        "age": 23,
        "position": {
            "name": "Frontend Developer",
            "code": "FD"
        },
        "salary": {
            "name": "26K - 35K",
            "code": "MID"
        }
    }
    */
  }



}
