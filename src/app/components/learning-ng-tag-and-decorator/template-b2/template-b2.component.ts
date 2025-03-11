import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../../models/form/todo';
import {FakeApiService} from '../../../service/fake-api.service';

@Component({
  selector: 'template-b2',
  standalone: false,
  templateUrl: './template-b2.component.html',
  styleUrl: './template-b2.component.css'
})
export class TemplateB2Component implements OnInit {
  protected todos? : Todo[]

  @Input({
    alias:'titleDefault', // The name of the DOM property to which the input property is bound.
    required: true, // Whether the input is required for the directive to function.
  }) title?: string;
  @Input({
    required: true,
  }) serverity?: string;
  // The @Output() decorator in a child component or directive lets data flow from the child to the parent.
  // EventEmitter<string>() The @Output()'s type.
  // new EventEmitter<string>() Tells Angular to create a new event emitter and that the data it emits is of type string.
  @Output() protected newTitleEvent = new EventEmitter<string>();
  @Output() protected newSeverityEvent = new EventEmitter<string>();

  constructor(private fakeApi: FakeApiService) {}

  ngOnInit(): void {
    this.fakeApi.todoObserve?.subscribe((todos) => {
      this.todos = todos.filter((todo)=> todo.id <= 3) })
  }

  protected changeTitle(title:string){
    this.newTitleEvent.emit(title)
    // console.log(this.newTitleEvent)
  }

  protected changeSeverity(severity:string){
     this.newSeverityEvent.emit(severity)
  }
}
