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
  public header: HeaderCol[]
  public data : TreeNode[]
  private studentServiceData:StudentServiceData
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
    /*this.header = []
    this.data = []*/
    this.studentServiceData = new StudentServiceData();
    this.header = this.getHeaderStudentTreeTable()
    this.data = this.getDataStudentTreeTable()
  }



  ngOnInit(): void {

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

  // Student table
  private getHeaderStudentTreeTable() {
    let studentCols: HeaderCol[] = []
    studentCols.push({field: "id", header: "ID"})
    studentCols.push({field: "name", header: "Name"})
    studentCols.push({field: "email", header: "Email"})
    studentCols.push({field: "action", header: "Action"})
    return studentCols
  }
  private getDataStudentTreeTable() {
    let data: Student[] = [
      new Student(100, 'alex', 'alex@hotmail.com'),
      new Student(101, 'jon', 'jon@hotmail.com'),
      new Student(102, 'kevin', 'kevin@hotmail.com'),
    ];
    let customTableDataTree: CustomTableDataTree<Student>[] = []
    customTableDataTree.push({data: data[0], children: []})
    customTableDataTree.push({data: data[1], children: []})
    customTableDataTree.push({data: data[2], children: []})
    return customTableDataTree
  }

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
      console.log('success')
    }
  }
}
