import {Component, Input} from '@angular/core';

@Component({
  selector: 'template-a4',
  standalone: false,
  templateUrl: './template-a4.component.html',
  styleUrl: './template-a4.component.css'
})
export class TemplateA4Component {
  @Input() public message: string = 'Hello from Child!';

  public changeMessage(newMessage: string) {
    this.message = newMessage;
  }

}
