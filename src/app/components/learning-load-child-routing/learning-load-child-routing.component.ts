import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-load-child-routing',
  standalone: false,
  templateUrl: './learning-load-child-routing.component.html',
  styleUrl: './learning-load-child-routing.component.css'
})
export class LearningLoadChildRoutingComponent {
  constructor() {
    console.log('LearningLoadChildRoutingComponent initialized.');
  }
}
