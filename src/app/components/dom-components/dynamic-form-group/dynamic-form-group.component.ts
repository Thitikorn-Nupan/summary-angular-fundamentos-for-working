import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicField} from '../../../models/form/dynamic-field';

@Component({
  selector: 'dynamic-form-group',
  standalone: false,
  templateUrl: './dynamic-form-group.component.html',
  styleUrl: './dynamic-form-group.component.css'
})
export class DynamicFormGroupComponent implements OnInit {

  protected declare formGroup: FormGroup;

  @Input()
  public formGroupTitle: string = 'Form Name';
  @Input()
  public enableInputText: boolean = false;
  @Input()
  public enableInputNumber: boolean = false;
  @Input()
  public enableInputDropdown: boolean = false;
  @Input()
  public enableInputTextEmail: boolean = false;
  @Input()
  public enableInputTextSearch: boolean = false;

  // @Input()
  // public declare dynamicFieldsInputText: DynamicField[];
  @Input()
  public declare dynamicFieldsInputText: DynamicField[];
  @Input()
  public declare dynamicFieldsInputNumber: DynamicField[];
  @Input()
  public declare dynamicFieldsInputTextEmail: DynamicField[];
  @Input()
  public declare dynamicFieldsInputTextSearch: DynamicField[];
  // dropdown have to add option
  @Input()
  public declare dynamicFieldsInputDropdown: { dynamicField : DynamicField , option : any } [];

  @Output()
  // if i send form group back to parent field0Value,field1Value,field2Value it doesn't need anymore
  protected getFormGroup: EventEmitter<FormGroup> = new EventEmitter<FormGroup>(); // Event emitter for getting the form group


  constructor() {
  }

  ngOnInit(): void {
    // this.testInitialForm()
    this.loadDynamicFields();
  }

  private loadDynamicFields(): void {
    this.formGroup = new FormGroup({})
    if (this.enableInputText) {
      for (let i = 0; i < this.dynamicFieldsInputText.length; i++) {
        this.formGroup.addControl(this.dynamicFieldsInputText[i].name,this.dynamicFieldsInputText[i].data)
      }
    }
    if (this.enableInputNumber) {
      for (let i = 0; i < this.dynamicFieldsInputNumber.length; i++) {
        this.formGroup.addControl(this.dynamicFieldsInputNumber[i].name,this.dynamicFieldsInputNumber[i].data)
      }
    }
    if (this.enableInputDropdown) {
      for (let i = 0; i < this.dynamicFieldsInputDropdown.length; i++) {
        this.formGroup.addControl(this.dynamicFieldsInputDropdown[i].dynamicField.name,this.dynamicFieldsInputDropdown[i].dynamicField.data)
      }
    }
    if (this.enableInputTextEmail) {
      for (let i = 0; i < this.dynamicFieldsInputTextEmail.length; i++) {
        this.formGroup.addControl(this.dynamicFieldsInputTextEmail[i].name,this.dynamicFieldsInputTextEmail[i].data)
      }
    }
    if (this.enableInputTextSearch) {
      for (let i = 0; i < this.dynamicFieldsInputTextSearch.length; i++) {
        this.formGroup.addControl(this.dynamicFieldsInputTextSearch[i].name,this.dynamicFieldsInputTextSearch[i].data)
      }
    }
  }

  protected onSubmit(): void {
    // if (this.formGroup.valid) { // if form group is valid values
    //   this.getFormGroup.emit(this.formGroup); // send current form group object value to parent component
    // }
    this.getFormGroup.emit(this.formGroup);
  }

  /*
  private testInitialForm () {
    this.dynamicFieldsInputText = []
    this.dynamicFieldsInputNumber = []
    this.dynamicFieldsInputDropdown = []
    this.dynamicFieldsInputTextEmail = []
    this.dynamicFieldsInputTextSearch = []
    // input text
    this.dynamicFieldsInputText.push(new DynamicField('firstname',new FormControl('',Validators.required),'id-firstname','pi pi-pencil','Firstname...'))
    this.dynamicFieldsInputText.push(new DynamicField('lastname',new FormControl('',Validators.required),'id-lastname','pi pi-pencil','Lastname...'))
    // input type email
    this.dynamicFieldsInputTextEmail.push(new DynamicField('email',new FormControl('',Validators.required),'id-email','pi pi-at','Email...'))
    this.dynamicFieldsInputTextEmail.push(new DynamicField('gmail',new FormControl('',Validators.required),'id-gmail','pi pi-at','Gmail...'))
    // input search
    this.dynamicFieldsInputTextSearch.push(new DynamicField('search',new FormControl('',Validators.required),'id-search','pi pi-search','Search by name...'))
    // input number
    this.dynamicFieldsInputNumber.push(new DynamicField('salary',new FormControl(0,Validators.required),'id-salary','Salary',''))
    this.dynamicFieldsInputNumber.push(new DynamicField('age',new FormControl(0,Validators.required),'id-age','Age',''))
    // input dropdown
    this.dynamicFieldsInputDropdown.push({
      dynamicField : new DynamicField('city',new FormControl('',Validators.required),'id-city','pi pi-map','City'),
      option : [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
      ]
    })
    this.dynamicFieldsInputDropdown.push({
      dynamicField : new DynamicField('order',new FormControl('',Validators.required),'id-order','pi pi-pencil','Order'),
      option : [
        { name: 'Hamburger', code: 'H1' },
        { name: 'Salad', code: 'S1' },
        { name: 'Pizza', code: 'P1' },
      ]
    })
    // initial form controls with constructor
    /!*
    this.formGroup = new FormGroup({
      [this.dynamicFieldsInputText[0].name] : this.dynamicFieldsInputText[0].data,
      [this.dynamicFieldsInputText[1].name] : this.dynamicFieldsInputText[1].data,
      [this.dynamicFieldsInputNumber[0].name] : this.dynamicFieldsInputNumber[1].data,
      [this.dynamicFieldsInputNumber[1].name] : this.dynamicFieldsInputNumber[1].data
    })
    *!/
    // ** initial empty form controls with constructor
    this.formGroup = new FormGroup({})
    // add form controls with function addControl
    // formGroup.addControl(this.dynamicFieldsInputText[0].name,this.dynamicFieldsInputText[0].data)
    // this.formGroup.addControl(this.dynamicFieldsInputText[1].name,this.dynamicFieldsInputText[1].data)
    // this.formGroup.addControl(this.dynamicFieldsInputNumber[0].name,this.dynamicFieldsInputNumber[0].data)
    // this.formGroup.addControl(this.dynamicFieldsInputNumber[1].name,this.dynamicFieldsInputNumber[1].data)
    // this.formGroup.addControl(this.dynamicFieldsInputDropdown[0].dynamicField.name,this.dynamicFieldsInputDropdown[0].dynamicField.data)
    // this.formGroup.addControl(this.dynamicFieldsInputDropdown[1].dynamicField.name,this.dynamicFieldsInputDropdown[1].dynamicField.data)
    // this.formGroup.addControl(this.dynamicFieldsInputTextEmail[0].name,this.dynamicFieldsInputTextEmail[0].data)
    // this.formGroup.addControl(this.dynamicFieldsInputTextEmail[1].name,this.dynamicFieldsInputTextEmail[1].data)
    // this.formGroup.addControl(this.dynamicFieldsInputTextSearch[0].name,this.dynamicFieldsInputTextSearch[0].data)
    for (let i = 0; i < this.dynamicFieldsInputText.length; i++) {
      this.formGroup.addControl(this.dynamicFieldsInputText[i].name,this.dynamicFieldsInputText[i].data)
    }
    for (let i = 0; i < this.dynamicFieldsInputNumber.length; i++) {
      this.formGroup.addControl(this.dynamicFieldsInputNumber[i].name,this.dynamicFieldsInputNumber[i].data)
    }
    for (let i = 0; i < this.dynamicFieldsInputDropdown.length; i++) {
      this.formGroup.addControl(this.dynamicFieldsInputDropdown[i].dynamicField.name,this.dynamicFieldsInputDropdown[i].dynamicField.data)
    }
    for (let i = 0; i < this.dynamicFieldsInputTextEmail.length; i++) {
      this.formGroup.addControl(this.dynamicFieldsInputTextEmail[i].name,this.dynamicFieldsInputTextEmail[i].data)
    }
    for (let i = 0; i < this.dynamicFieldsInputTextSearch.length; i++) {
      this.formGroup.addControl(this.dynamicFieldsInputTextSearch[i].name,this.dynamicFieldsInputTextSearch[i].data)
    }
  }
  */

}
