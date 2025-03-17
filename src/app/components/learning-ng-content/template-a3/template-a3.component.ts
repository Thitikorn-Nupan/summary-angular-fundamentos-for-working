import {Component, Input} from '@angular/core';
import {Student} from '../../../models/form/student';

@Component({
  selector: 'template-a3',
  standalone: false,
  templateUrl: './template-a3.component.html',
  styleUrl: './template-a3.component.css'
})
export class TemplateA3Component {

  protected title?: string
  protected student?: Student
  protected students?: Student[]

  @Input() // access on tag or selector
  public set dynamicMessage(data: { title?: string, student: Student, students: Student[] }) {
    this.title = data.title;
    this.student = data.student;
    this.students = data.students;
  }

  protected getSererity(index: number) {
    if (index === 0) return 'info'
    else if (index === 1) return 'warn'
    else if (index === 2) return 'secondary'
    return 'secondary'
  }

}
