import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TemplateA4Component} from './template-a4/template-a4.component';
import {TemplateB4Component} from './template-b4/template-b4.component';
import {DataListComponent} from '../learning-ng-container-and-p-tree-table/data-list/data-list.component';
import {Country} from '../../models/api/country';
import {CardComponent} from './card/card.component';



@Component({
  selector: 'app-learning-view-child',
  standalone: false,
  templateUrl: './learning-view-child.component.html',
  styleUrl: './learning-view-child.component.css'
})
export class LearningViewChildComponent implements OnInit, AfterViewInit {


  // ElementRefA read only property that returns the HTML element where our ng-template is located in the DOM tree.
  @ViewChild('formTemplateA', {read: ElementRef})
  private formTemplateA?: ElementRef<HTMLElement>;
  @ViewChild('formTemplateA2')
  private formTemplateA2?: ElementRef<HTMLElement>;
  @ViewChild('formTemplateA3')
  private formTemplateA3?: ElementRef<HTMLElement>;


  // ** @ViewChild can also be used to access a child component's properties and methods.
  // ** you can access all methods without create new instance
  @ViewChild(TemplateA4Component)
  protected templateA4!: TemplateA4Component;
  @ViewChild(DataListComponent)
  protected dataListComponent!: DataListComponent;
  @ViewChild(CardComponent)
  protected cardComponent!: CardComponent;


  // ** @ViewChild with Static Option
  // The static option in @ViewChild determines when the view query is resolved
  // static: true: The query is resolved before ngOnInit and can be accessed immediately.
  // static: false: The query is resolved after ngAfterViewInit when the view is fully initialized. ** This is the default behavior and is often used for dynamic views.
  @ViewChild(TemplateB4Component, {static: true}) // now all methods you can't access
  protected templateB4!: TemplateB4Component;

  protected template?: string;
  protected message?: string;

  protected countries: Country[];

  constructor() {
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
    ];
  }

  ngOnInit(): void {
    console.log(this.formTemplateA?.nativeElement); // default is null
  }

  ngAfterViewInit(): void {
    console.log(this.formTemplateA?.nativeElement); // <div> ... any tag you can see ... </div> can't use with ng-container,ng-template
    console.log(this.formTemplateA2?.nativeElement.textContent); // get all text inside element ** all element that have texts n no care tags
    console.log(this.formTemplateA2?.nativeElement.id); // get all text inside element ** all element that have texts n no care tags
    console.log(this.formTemplateA3?.nativeElement); // only see <div> </div> but child can't see !!
  }


  protected listenTemplate() {
    console.log(this.template);
  }

  protected focusFormTemplateA() {
    this.formTemplateA?.nativeElement?.focus(); // .nativeElement.focus() to programmatically focus the input field when the button is clicked.
    // store detail DOM , so you can see all children as node
    console.log(this.formTemplateA);
  }

  protected updateMessageOnTemplateA4() {
    this.templateA4.changeMessage('Hello world');
  }

  protected updateMessageOnTemplateB4() {
    this.templateB4.changeMessage('Hello world');
  }

  protected updateCountryOnTemplateB() {
    this.dataListComponent.changeCountry([
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ])
  }

  protected updateCard() {
    this.cardComponent.enableCard = !this.cardComponent.enableCard;
  }


}
