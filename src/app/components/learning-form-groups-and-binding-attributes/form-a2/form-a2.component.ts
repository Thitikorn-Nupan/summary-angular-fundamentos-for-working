import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'form-a2',
  standalone: false,
  templateUrl: './form-a2.component.html',
  styleUrl: './form-a2.component.css'
})
export class FormA2Component implements OnInit {

  protected declare formGroup: FormGroup;
  @Input()
  public declare formTitle: string;
  // I'll set formControlName,FormControl by using dynamic
  @Input()
  public declare field1: { fieldName: string, fieldData: FormControl, fieldId: string, fieldLabel: string };
  @Input()
  public declare field2: { fieldName: string, fieldData: FormControl, fieldId: string, fieldLabel: string  }


  ngOnInit(): void {
    // can't start dynamic form group on constructor because the first time will be null
    this.formGroup = new FormGroup({
      [this.field1?.fieldName]: this.field1?.fieldData,
      [this.field2?.fieldName]: this.field2?.fieldData
      // [this.field3?.fieldName]: this.field3?.fieldData
    })
    console.log(this.formGroup)
  }

  onSendClicked() {
    console.log(this.formGroup.valid)
  }

}



