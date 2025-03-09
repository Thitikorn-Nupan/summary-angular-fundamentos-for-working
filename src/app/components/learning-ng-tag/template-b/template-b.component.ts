import {Component, Input} from '@angular/core';

// ** This is my child component
@Component({
  selector: 'template-b',
  standalone: false,
  templateUrl: './template-b.component.html',
  styleUrl: './template-b.component.css'
})
export class TemplateBComponent {
  // Decorate the property with @Input()
  // To use the @Input() decorator in a child component class
  // *** Note it's not show default value if you don't put condition to ng-template
  @Input() enableCard?:boolean
  @Input() title?: string;
  @Input() subTitle: string = "Default Subtitle";
  @Input() description?: string = "Default Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam\n" +
    "deserunt\n" +
    "quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!\n";
}
