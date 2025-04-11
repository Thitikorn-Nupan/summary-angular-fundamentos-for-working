import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'understand-primeng';

  sidebarVisible: boolean = true;

  enableSlidebar() {
    console.log('clicked')
  }

  testClick() {
    console.log('clicked');
  }
}
