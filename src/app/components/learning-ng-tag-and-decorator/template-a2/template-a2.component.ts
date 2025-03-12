import {Component, Input, OnInit} from '@angular/core';
import {FakeApiService} from '../../../service/fake-api.service';
import {Todo} from '../../../models/api/todo';

@Component({
  selector: 'template-a2',
  templateUrl: './template-a2.component.html',
  styleUrl: './template-a2.component.css',
  standalone:false
})
export class TemplateA2Component implements OnInit {

  @Input({
    alias:'titleDefault', // The name of the DOM property to which the input property is bound.
    required: true, // Whether the input is required for the directive to function.
  }) title?: string;
  @Input({
    required: true,
  }) serverity?: string;

  protected todos? : Todo[]

  constructor(private fakeApi: FakeApiService) {
  }

  ngOnInit(): void {
    this.fakeApi.todoObserve?.subscribe((todos) => {
      this.todos = todos.filter((todo)=> todo.id <= 3) })
    }
}
