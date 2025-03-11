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
  protected templateDTrueOrEFalse? : boolean | null = true;
  protected title = 'Title From Parent'
  protected subTitle = 'Subtitle From Parent'
  protected status? : string
  protected lessons: boolean = false;
  protected ingredient?: string; // mapped [(ngModel)] so value is dynamic

  protected changeStatus(padding: string) {
    this.status = padding;
  }

  protected logData(value : any) {
    if (value === 'open') {
      this.lessons = true;
    }else {
      this.lessons = false;
    }
  }

  protected listenTemplate() {
    // console.log(this.ingredient); // template-d | template-e
    if (this.ingredient === 'template-d') {
      this.templateDTrueOrEFalse = true
    }
    else {
      this.templateDTrueOrEFalse = false
    }
  }
}
