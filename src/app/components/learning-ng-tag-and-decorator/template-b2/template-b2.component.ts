import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../../models/api/todo';
import {FakeApiService} from '../../../service/fake-api.service';
import {Post} from '../../../models/api/post';

@Component({
  selector: 'template-b2',
  standalone: false,
  templateUrl: './template-b2.component.html',
  styleUrl: './template-b2.component.css'
})
export class TemplateB2Component implements OnInit {
  protected todos? : Todo[]
  protected posts? : Post[]

  @Input({ // **
    alias:'titleDefault', // The name of the DOM property to which the input property is bound.
    required: true, // Whether the input is required for the directive to function.
  }) title?: string;
  @Input({
    required: true,
  }) serverity?: string;
  @Input() sizeTable: number = 1;

  // The @Output() decorator in a child component or directive lets data flow from the child to the parent.
  // EventEmitter<string>() The @Output()'s type.
  // new EventEmitter<string>() Tells Angular to create a new event emitter and that the data it emits is of type string.
  @Output() protected newTitleEvent = new EventEmitter<string>();
  @Output() protected newSeverityEvent = new EventEmitter<string>();
  @Output() protected newDefaultMessageTemplateBEvent = new EventEmitter<string>();
  // newSizeTodoEvent binding two functions
  @Output() protected newSizeEvent = new EventEmitter<number>();

  constructor(private fakeApi: FakeApiService) {}

  ngOnInit(): void {
    this.reloadTodo()
    this.reloadPost()
  }

  private reloadTodo () {
    this.fakeApi.todoObserve?.subscribe((todos) => {
      this.todos = todos.filter((todo)=> todo.id <= this.sizeTable) }
    )
  }

  private reloadPost () {
    this.fakeApi.postObserve?.subscribe((posts) => {
      this.posts = posts.filter((post)=> post.id <= this.sizeTable) }
    )
  }

  protected changeTitle(title:string){
    this.newTitleEvent.emit(title)
  }

  protected changeSeverity(severity:string){
     this.newSeverityEvent.emit(severity)
  }

  protected changeDefaultMessageTemplateB() {
    this.newDefaultMessageTemplateBEvent.emit('Default message set on child');
  }


  //
  protected plusSize() {
    this.newSizeEvent.emit(this.sizeTable + 1) // plus by 1 if event called
    this.reloadTodo() // and reload todo table
    this.reloadPost()
  }

  protected minusSize() {
    this.newSizeEvent.emit(this.sizeTable - 1) // minus by 1 if event called
    this.reloadTodo() // and reload todo table
    this.reloadPost()
  }
}
