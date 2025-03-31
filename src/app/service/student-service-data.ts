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

  public removeStudent(studentSearch: Student) {
    this.students = this.students.filter((student)=> student.id !== studentSearch.id)
  }

  public editStudent(studentNew: Student,id: number) {
    // can do
    /*for (const student of this.students) {
      if (student.id === id) {
        student.name = studentNew.name;
        student.email = studentNew.email;
      }
    }*/
    // can do
    // this below work like looping
    this.students = this.students.filter((student)=> {
      if (student.id === id) {
        student.name = studentNew.name;
        student.email = studentNew.email;
      }
      return student;
    })
  }
}
