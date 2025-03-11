import {Component, Input} from '@angular/core';

@Component({
  selector: 'template-e',
  standalone: false,
  templateUrl: './template-e.component.html',
  styleUrl: './template-e.component.css'
})
export class TemplateEComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;

  protected minusNumber() : number {
    return this.x - this.y;
  }
}
