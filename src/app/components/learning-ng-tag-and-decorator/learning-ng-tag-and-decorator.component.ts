import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-ng-tag-and-decorator',
  standalone: false,
  templateUrl: './learning-ng-tag-and-decorator.component.html',
  styleUrl: './learning-ng-tag-and-decorator.component.css'
})
export class LearningNgTagAndDecoratorComponent {

  protected template?: string;
  protected titleTemplateB : string = "Render from template-b2 and send values to child component by @Input()"
  protected serverityTemplateB: string = "info";
  protected messageOnTemplateB : string= "Default message set on parent";
  protected sizeTableTemplateB: number = 1;

  protected listenTemplate() {
    console.log(this.template)
  }

  // *** Binding child (EventEmitter) to method parent
  protected changeTitle(title:string){
    this.titleTemplateB = title
  }

  protected changeServerity(serverity:string){
    this.serverityTemplateB = serverity
  }

  protected changeDefaultMessage($event: string) {
    this.messageOnTemplateB = $event;
  }

  protected changeSizeTable(size:number) {
    this.sizeTableTemplateB = size
  }
}
