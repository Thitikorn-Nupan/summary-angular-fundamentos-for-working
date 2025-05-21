import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogDynamicOption} from '../../../models/form/dialog-dynamic-option';
import {DynamicInputTextField} from '../../../models/form/dynamic-input-text-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'dynamic-popup-p-dialog-and-key-filter', // '[dynamic-popup-p-dialog]' mapped <div dynamic-popup-p-dialog></div>
  standalone: false,
  templateUrl: './dynamic-popup-with-p-dailog-and-key-filter.component.html',
  styleUrl: './dynamic-popup-with-p-dailog-and-key-filter.component.css'
})
export class DynamicPopupWithPDailogAndKeyFilterComponent implements OnInit,AfterViewInit { // implements OnInit

  @Input()
  public declare header : string;
  @Input()
  public declare label : string ;
  @Input()
  public closeable : boolean = false;
  @Input()
  public declare dynamicInputTextFields : DynamicInputTextField[]
  @Input()
  public declare formGroup : FormGroup;
  @Input()
  public declare visible: boolean;
  // way to output functions
  @Output()
  public getOnCancel = new EventEmitter();
  @Output()
  public getOnSave = new EventEmitter();
  @Output()
  public getFormGroup : EventEmitter<FormGroup> = new EventEmitter();
  @Output()
  public getVisible : EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.loadDynamicFields()
  }

  ngAfterViewInit(): void {
    console.log('form group emitted')
    this.getFormGroup.emit(this.formGroup);
  }

  private loadDynamicFields() {
    // this.formGroup = new FormGroup({})
    for (let i = 0; i < this.dynamicInputTextFields.length; i++) {
      this.formGroup.addControl(this.dynamicInputTextFields[i].name,this.dynamicInputTextFields[i].data)
    }
  }

  protected showDialog() {
    this.visible = true;
  }

  // way to output functions
  protected onCancel() {
    this.getOnCancel.emit();
  }

  protected onSave() {
    this.getOnSave.emit(); // get only event on save
  }
}
