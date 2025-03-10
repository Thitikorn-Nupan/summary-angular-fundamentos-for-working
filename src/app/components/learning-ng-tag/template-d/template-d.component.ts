import {Component, Input} from '@angular/core';

@Component({
  selector: 'template-d',
  standalone: false,
  templateUrl: './template-d.component.html',
  styleUrl: './template-d.component.css'
})
export class TemplateDComponent {
  @Input() x: number = 0;
  @Input() y: number = 0;

  protected plusNumber() : number {
    return this.x + this.y;
  }
}
