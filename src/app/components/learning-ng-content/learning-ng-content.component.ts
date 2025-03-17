import {Component} from '@angular/core';
import {Student} from '../../models/form/student';

@Component({
  selector: 'app-learning-ng-content',
  standalone: false,
  templateUrl: './learning-ng-content.component.html',
  styleUrl: './learning-ng-content.component.css'
})
export class LearningNgContentComponent {


  protected username: any;

  protected styles = {
    'margin-top':'30px',
  }

  protected data = {
    title:'Student Information mapped on @Input() setter function',
    student: new Student(100,'alex ryder','alex@gmail.com'),
    students: [
      new Student(101,'alex ryder','alex_r@gmail.com'),
      new Student(102,'alex slider','alex_s@gmail.com'),
      new Student(103,'alex owner','alex_o@gmail.com')
    ]
  }

  protected contents  = {
    content1: [],
    content2: [],
    content3: [],
  };

  protected x: number = 0;
  protected y: number = 0;


  protected listenContents () {
    console.log(this.contents);
  }


}
