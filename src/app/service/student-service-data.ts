import {Student} from '../models/form/student';

export class StudentServiceData {

  private students: Student[]

  constructor() {
    this.students = [
      new Student(100, 'alex', 'alex@hotmail.com'),
      new Student(101, 'jon', 'jon@hotmail.com'),
      new Student(102, 'kevin', 'kevin@hotmail.com')
    ];
  }

  public getStudents() {
    return this.students;
  }

  public addStudent(student: Student) {
    this.students.push(student);
  }

}
