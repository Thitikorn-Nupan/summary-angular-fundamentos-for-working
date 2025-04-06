import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'data-form',
  standalone: false,
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent implements OnInit{


  protected declare formGroup: FormGroup;

  @Input()
  public declare formTitle: string;
  @Input()
  public declare field0: { name: string, data: FormControl, id: string, icon: string, placeHolder: string };
  @Input()
  public declare field1: { name: string, data: FormControl, id: string, icon: string, placeHolder: string };
  @Input()
  public declare field2: { name: string, data: FormControl, id: string, icon: string, placeHolder: string };

  // The @Output() decorator in a child component or directive lets data flow from the child to the parent.
  // EventEmitter<string>() The @Output()'s type.
  // new EventEmitter<string>() Tells Angular to create a new event emitter and that the data it emits is of type string.
  @Output()
  protected field0Value = new EventEmitter<number>();
  @Output()
  protected field1Value = new EventEmitter<string>();
  @Output()
  protected field2Value = new EventEmitter<string>();
  @Output()
  protected emitterStatus = new EventEmitter<boolean>()
  @Output()
  protected fieldsValue = new EventEmitter<any>()
  @Output()
  // if i send form group back to parent field0Value,field1Value,field2Value it doesn't need anymore
  protected getFormGroup: EventEmitter<FormGroup> = new EventEmitter<FormGroup>(); // Event emitter for getting the form group

  protected dynamicFormFieldsTest : { [x: string]: FormControl } [] = [];

  ngOnInit(): void {
    let dynamicFormFields = {
      [this.field0.name] : this.field0.data,
      [this.field1.name] : this.field1.data,
      [this.field2.name] : this.field2.data
    }
    this.dynamicFormFieldsTest.push({[this.field0.name]: this.field0.data})
    this.dynamicFormFieldsTest.push({[this.field1.name]: this.field1.data})
    this.dynamicFormFieldsTest.push({[this.field2.name]: this.field2.data})




    this.formGroup = new FormGroup(dynamicFormFields)

  }

  onFormGroupClicked() {
    if (this.formGroup.valid) {
      /*this.field0Value.emit(this.formGroup.value[this.field0.name]);
      this.field1Value.emit(this.formGroup.value[this.field1.name]);
      this.field2Value.emit(this.formGroup.value[this.field2.name]);
      this.emitterStatus.emit(true)*/
      // i can use below instead
      this.fieldsValue.emit(this.formGroup.value)
      // send a form group if valid inputs
      this.getFormGroup.emit(this.formGroup)
    }
  }
}
