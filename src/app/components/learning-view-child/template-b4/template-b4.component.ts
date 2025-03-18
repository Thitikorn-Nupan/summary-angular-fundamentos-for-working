import {Component, Input} from '@angular/core';

@Component({
  selector: 'template-b4',
  standalone: false,
  templateUrl: './template-b4.component.html',
  styleUrl: './template-b4.component.css'
})
export class TemplateB4Component {
  @Input() public message: string = 'Hello from Child!';

  public changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
