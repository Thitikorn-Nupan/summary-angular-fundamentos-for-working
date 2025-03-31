import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MessageService } from 'primeng/api'; // the best alert service

@Component({
  selector: 'form-c2',
  standalone: false,
  templateUrl: './form-c2.component.html',
  styleUrl: './form-c2.component.css'
})
export class FormC2Component implements AfterViewInit , OnInit {

  protected declare formGroup: FormGroup;

  @Input()
  public enableInputSalary: boolean = true;
  @Input()
  public enableInputAddress: boolean = true;
  @Input()
  public declare formTitle: string;


  public fieldTest : { name: string, data: FormControl, id: string, icon: string, placeHolder: string } = {
    name : 'fullname',
    data : new FormControl('',[Validators.required]),
    id : 'fullname-id-field1',
    icon : 'pi pi-user',
    placeHolder : 'Fullname...'
  }

  @Input()
  public declare field1: { name: string, data: FormControl, id: string, icon: string, placeHolder: string };
  @Input()
  public declare field2: { name: string, data: FormControl, id: string, icon: string, placeHolder: string };
  @Input()
  public declare field3: { name: string, data: FormControl, id: string, icon: string, placeHolder: string };
  @Input()
  public declare field4: { name: string, data: FormControl, id: string, icon: string, placeHolder: string };


  constructor(private messageService : MessageService) { //  private formbuilder: FormBuilder
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      [this.field1.name] : this.field1.data,
      [this.field2.name] : this.field2.data,
      [this.field3.name] : this.field3.data,
      [this.field4.name] : this.field4.data,
    })
  }

  // we can use decorator @Input with setter
  @Input()
  public set updateField4(field: { name: string, data: FormControl, id: string, icon: string, placeHolder: string }) {
    this.field4 = field
  }

  onSendClicked() {
    let result = ''
    if (this.formGroup.valid) {
      // .toLocaleString() add comma to number
      result += `${this.formGroup.value.fullname}\n${this.formGroup.value.email}\n${this.formGroup.value.salary.toLocaleString()}\n${this.formGroup.value.address}`
      this.messageService.add({ severity: 'success', summary: this.formTitle , detail: result });
    } else {
      this.messageService.add({ severity: 'warn', summary: this.formTitle, detail: 'Invalid Input(s)' });
    }
  }
}
