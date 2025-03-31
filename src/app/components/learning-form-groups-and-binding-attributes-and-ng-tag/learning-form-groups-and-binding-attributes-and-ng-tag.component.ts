import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {HeaderCol} from '../../models/api/header-col';
import {TreeNode} from 'primeng/api';
import {Student} from '../../models/form/student';
import {CustomTableDataTree} from '../../models/api/custom-table-data-tree';
import {StudentServiceData} from '../../service/student-service-data';

interface Template {
  name: string
  key: string
}

interface Field {
  field0: number,
  field1: string,
  field2: string,
  emitterStatus:boolean
}

@Component({
  selector: 'app-learning-form-groups-and-binding-attributes-and-ng-tag',
  standalone: false,
  templateUrl: './learning-form-groups-and-binding-attributes-and-ng-tag.component.html',
  styleUrl: './learning-form-groups-and-binding-attributes-and-ng-tag.component.css'
})
export class LearningFormGroupsAndBindingAttributesAndNgTagComponent implements OnInit {

  protected templates: Template []
  protected studentFieldsValue: Field
  protected selectedTemplate: Template;
  public header1: HeaderCol[]
  public header2: HeaderCol[]
  public declare data1 : TreeNode[]
  public declare data2 : TreeNode[]
  private studentServiceData1:StudentServiceData
  private studentServiceData2:StudentServiceData

  constructor() {
    this.templates = [
      {name: 'Template A', key: 'A'},
      {name: 'Template B', key: 'B'},
      {name: 'Template C', key: 'C'},
    ]
    this.studentFieldsValue = {
      field0: 0,
      field1: '',
      field2: '',
      emitterStatus: false
    }
    this.selectedTemplate = {
      name: '', key: ''
    }
    this.studentServiceData1 = new StudentServiceData();
    this.studentServiceData2 = new StudentServiceData();
    this.header1 = this.getHeaderStudentTreeTable()
    this.header2 = this.getHeaderStudentTreeTable()
  }

  ngOnInit(): void {
    this.data1 = this.convertObjectToDataTreeTable(this.studentServiceData1.getStudents())
    this.data2 = this.convertObjectToDataTreeTable(this.studentServiceData2.getStudents())
  }

  protected studentForm() {
    return {
      formTitle: 'Student Form',
      field0: {
        name: 'id',
        data: new FormControl('', [Validators.required]),
        id: 'student-id-field0',
        icon: 'ID',
        placeHolder: 'ID...'
      },
      field1: {
        name: 'name',
        data: new FormControl('', [Validators.required]),
        id: 'name-id-field1',
        icon: 'pi pi-user',
        placeHolder: 'Name...'
      }
      ,
      field2: {
        name: 'email',
        data: new FormControl('', [Validators.required]),
        id: 'email-id-field3',
        icon: 'pi pi-at',
        placeHolder: 'Email...'
      }
    }
  }

  private convertObjectToDataTreeTable(data : any) {
    let customTableDataTree: CustomTableDataTree<Student>[] = []
    for (let i = 0; i < data.length; i++) {
      customTableDataTree.push({data: data[i], children: []})
    }
    return customTableDataTree
  }

  // Student table
  private getHeaderStudentTreeTable() {
    let studentCols: HeaderCol[] = []
    studentCols.push({field: "id", header: "ID"})
    studentCols.push({field: "name", header: "Name"})
    studentCols.push({field: "email", header: "Email"})
    studentCols.push({field: "action", header: "Action"})
    return studentCols
  }

  /** can reduce code by setStudentFieldsValueValid(...) method
  // ** map @Output on child component
  protected setStudentField0(field: number) {
    this.studentFieldsValue.field0 = field
  }
  // ** map @Output on child component
  protected setStudentField1(field: string) {
    this.studentFieldsValue.field1 = field
  }
  // ** map @Output on child component
  protected setStudentField2(field: string) {
    this.studentFieldsValue.field2 = field
  }
  // ** map @Output on child component
  protected setStudentEmitterStatus(emitter: boolean) {
    this.studentFieldsValue.emitterStatus = emitter
    if (this.studentFieldsValue.emitterStatus) {
      const student = new Student(this.studentFieldsValue.field0,this.studentFieldsValue.field1,this.studentFieldsValue.field2)
      this.studentServiceData.addStudent(student)
      this.data = this.convertObjectToDataTreeTable(this.studentServiceData.getStudents()) // ** no need to set it empty array it'll do overwrite
    }
    this.studentFieldsValue.emitterStatus = false
  }
  */

  protected setStudentFieldsValueValid(fieldsValue : any) {
    const student = new Student(fieldsValue.id,fieldsValue.name,fieldsValue.email)
    this.studentServiceData1.addStudent(student)
    this.data1 = this.convertObjectToDataTreeTable(this.studentServiceData1.getStudents()) // ** no need to set it empty array it'll do overwrite
  }

  protected setStudentRowDataDelete(rowData: any) {
    const student = new Student(rowData.id,rowData.name,rowData.email)
    this.studentServiceData1.removeStudent(student)
    this.data1 = this.convertObjectToDataTreeTable(this.studentServiceData1.getStudents())
  }

  protected setStudentRowDataUpdate(rowData: any) {
    const studentNew = new Student(0,"test","test@hotmail.com")
    this.studentServiceData1.editStudent(studentNew,rowData.id)
    this.data1 = this.convertObjectToDataTreeTable(this.studentServiceData1.getStudents())
  }



  // New
  protected studentNewForm() {
    return {
      formTitle: 'Student New Form',
      field0: {
        name: 'id',
        data: new FormControl('', [Validators.required]),
        id: 'student-new-id-field0',
        icon: 'ID',
        placeHolder: 'ID...'
      },
      field1: {
        name: 'name',
        data: new FormControl('', [Validators.required]),
        id: 'name-new-id-field1',
        icon: 'pi pi-user',
        placeHolder: 'Name...'
      }
      ,
      field2: {
        name: 'email',
        data: new FormControl('', [Validators.required]),
        id: 'email-new-id-field3',
        icon: 'pi pi-at',
        placeHolder: 'Email...'
      }
    }
  }

  protected setStudentNewFieldsValueValid(fieldsValue : any) {
    const student = new Student(fieldsValue.id,fieldsValue.name,fieldsValue.email)
    this.studentServiceData2.addStudent(student)
    this.data2 = this.convertObjectToDataTreeTable(this.studentServiceData2.getStudents()) // ** no need to set it empty array it'll do overwrite
  }

  protected setStudentNewRowDataDelete(rowData: any) {
    const student = new Student(rowData.id,rowData.name,rowData.email)
    this.studentServiceData2.removeStudent(student)
    this.data2 = this.convertObjectToDataTreeTable(this.studentServiceData2.getStudents())
  }

  protected setStudentNewRowDataUpdate(rowData: any) {
    const studentNew = new Student(0,"test","test@hotmail.com")
    this.studentServiceData2.editStudent(studentNew,rowData.id)
    this.data2 = this.convertObjectToDataTreeTable(this.studentServiceData2.getStudents())
  }

}
