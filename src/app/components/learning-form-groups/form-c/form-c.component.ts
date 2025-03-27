import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../../models/api/todo';
import {FakeApiService} from '../../../service/fake-api.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'form-c',
  standalone: false,
  templateUrl: './form-c.component.html',
  styleUrl: './form-c.component.css'
})
export class FormCComponent implements OnInit , AfterViewInit {

  protected tableId : string = 'table-info';
  protected tableHeaderId : string = 'table-header-info';
  protected todos : Todo[]
  protected colspan = 1

  protected tdCompletedClass: string[] = [
    // ** these are my classes that created on css file
    'state-completed',
    'state-uncompleted'
  ];


  protected declare loginForm : FormGroup;

  // Test Dynamic Form
  public fieldTest : { fieldName : string , fieldData : FormControl } = {
    fieldName : 'username',
    fieldData : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)])
  }

  // I'll set formControlName,FormControl by using dynamic
  @Input()
  public declare field1 : { fieldName : string , fieldData : FormControl }
  @Input()
  public declare field2 : { fieldName : string , fieldData : FormControl }
  @Input()
  public declare field3 : { fieldName : string , fieldData : FormControl }


  // Note if some logic need to wait some data before use
  // Do it on OnInit , AfterViewInit
  constructor(private fakeApiService : FakeApiService) {
    this.todos = []
  }



  ngOnInit(): void {
    this.fakeApiService.todoObserve.subscribe((todos) => {
      this.todos = todos.filter((t)=> t.id <= 2)
    })
    // can't start dynamic form group on constructor because the first time will be null
    this.loginForm =  new FormGroup({
      [this.field1?.fieldName]: this.field1?.fieldData ,
      [this.field2?.fieldName]: this.field2?.fieldData ,
      [this.field3?.fieldName]: this.field3?.fieldData
    })
  }

  ngAfterViewInit(): void {
    console.log(this.field1)
  }

  protected onSendClicked() {
    console.log(this.loginForm)
  }
}
