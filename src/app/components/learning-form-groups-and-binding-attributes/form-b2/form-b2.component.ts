import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'form-b2',
  standalone: false,
  templateUrl: './form-b2.component.html',
  styleUrl: './form-b2.component.css'
})
export class FormB2Component implements OnInit {

  protected declare formGroup: FormGroup;
  // protected orders : Order[];
  public fieldTest: { fieldName: string, fieldData: FormControl, fieldId: string, fieldLabel: string } = {
    fieldName:'phoneNumber',
    fieldLabel:'Your Phone Number',
    fieldId:'phoneNumber',
    fieldData:new FormControl('',[Validators.required]),
  }

  // I'll set formControlName,FormControl by using dynamic
  @Input()
  public declare data: any[];
  @Input()
  public declare formTitle: string;
  @Input()
  public declare field1: { fieldName: string, fieldData: FormControl, fieldId: string, fieldLabel: string };
  @Input()
  public declare field2: { fieldName: string, fieldData: FormControl, fieldId: string, fieldLabel: string };


  ngOnInit(): void {
     this.formGroup = new FormGroup({
       [this.field1.fieldName]: this.field1.fieldData,
       [this.field2.fieldName]: this.field2.fieldData
     })
  }

  onSendClicked() {
    console.log(this.formGroup)
  }
}
