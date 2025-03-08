import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-ng-tag',
  standalone: false,
  templateUrl: './learning-ng-tag.component.html',
  styleUrl: './learning-ng-tag.component.css'
})
export class LearningNgTagComponent {
  protected textEnable : boolean = true;
  protected templateAEnable : boolean = true;
  protected templateBEnable : boolean = false;
}
