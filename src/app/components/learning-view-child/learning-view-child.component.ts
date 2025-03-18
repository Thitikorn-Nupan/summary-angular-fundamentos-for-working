import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TemplateA4Component} from './template-a4/template-a4.component';
import {TemplateB4Component} from './template-b4/template-b4.component';

@Component({
  selector: 'app-learning-view-child',
  standalone: false,
  templateUrl: './learning-view-child.component.html',
  styleUrl: './learning-view-child.component.css'
})
export class LearningViewChildComponent implements OnInit {


  @ViewChild('formTemplateA')
  private formTemplateA?: ElementRef;

  // ** @ViewChild can also be used to access a child component's properties and methods.
  // ** you can access all methods without create new instance
  @ViewChild(TemplateA4Component)
  protected templateA4!: TemplateA4Component;

  // ** @ViewChild with Static Option
  // The static option in @ViewChild determines when the view query is resolved
  // static: true: The query is resolved before ngOnInit and can be accessed immediately.
  // static: false: The query is resolved after ngAfterViewInit when the view is fully initialized. ** This is the default behavior and is often used for dynamic views.
  @ViewChild(TemplateB4Component,{ static:true }) // now all methods you can't access
  protected templateB4!: TemplateB4Component;

  protected template?: string;
  protected message?: string;


  ngOnInit(): void {
    console.log(this.formTemplateA); // default is null
  }

  protected listenTemplate() {
    console.log(this.template);
  }

  protected focusFormTemplateA() {
    this.formTemplateA?.nativeElement?.focus(); // .nativeElement.focus() to programmatically focus the input field when the button is clicked.
    console.log(this.formTemplateA); // store detail of tag ?
  }

  protected updateMessageOnTemplateA4() {
    this.templateA4.changeMessage('Hello world');
  }

  protected updateMessageOnTemplateB4() {
    this.templateB4.changeMessage('Hello world');
  }

}
