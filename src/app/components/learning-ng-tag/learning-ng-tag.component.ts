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
  protected templateBEnable : boolean = true;
  protected title = 'Title From Parent'
  protected subTitle = 'Subtitle From Parent'
  protected status? : string
  protected lessons: boolean = false;

  protected changeStatus(padding: string) {
    this.status = padding;
  }

  protected logData(value : any) {
    if (value.length >= 5) {
      this.lessons = true;
    }else {
      this.lessons = false;
    }
  }
}
