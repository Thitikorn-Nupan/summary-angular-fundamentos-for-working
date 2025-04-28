import {Component, OnInit, ViewChild} from '@angular/core';
import {FakeApiService} from '../../../service/fake-api.service';
import {Todo} from '../../../models/api/todo';
import {TreeNode} from 'primeng/api';
import {HeaderCol} from '../../../models/api/header-col';
import {CustomTableDataTree} from '../../../models/api/custom-table-data-tree';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicField} from '../../../models/form/dynamic-field';
import {User} from '../../../models/api/user';
import {DataTreeTableComponent} from '../../dom-components/data-tree-table/data-tree-table.component';
import {Observable} from 'rxjs';


@Component({
  selector: 'crud-todo-fakeapi-with-key-filter',
  standalone: false,
  templateUrl: './crud-todo-fakeapi-with-key-filter.component.html',
  styleUrl: './crud-todo-fakeapi-with-key-filter.component.css'
})
export class CrudTodoFakeapiWithKeyFilterComponent implements OnInit {


  protected declare todos: Todo[]
  // table
  public declare header: HeaderCol[]
  public declare data: TreeNode[]
  // forms
  public declare formGroup: FormGroup
  public declare formGroupUpdate: FormGroup
  protected declare dynamicFields: DynamicField[]
  protected declare dynamicFieldsUpdate: DynamicField[]

  constructor(private fakeApiService: FakeApiService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({})
    this.fakeApiService.todoObserve.subscribe((todos) => {
      // this.todos = todos
      this.todos = todos
      this.header = this.getHeaderTodoTreeTable(todos[0])
      this.data = this.convertObjectToDataTreeTable(todos)
    })
    this.dynamicFields = [
      new DynamicField('userId', new FormControl(0, Validators.required), 'uid-id', 'UID', 'Put your user id...').setPkeyFilter('int'),
      new DynamicField('id', new FormControl(0, Validators.required), 'id-id', 'ID', 'Put your id...').setPkeyFilter('int'),
      new DynamicField('title', new FormControl('', Validators.required), 'title-id', 'TITLE', 'Put your title...').setPkeyFilter(null), // only text no spec
      new DynamicField('completed', new FormControl(), 'completed-id', '', '').setIsEmpty(true).setOptionCheckbox([{
        name: "completed",
        key: "c"
      }]), // anything
    ]
  }

  protected handleFormGroupCreate(formGroup: FormGroup) {
    let todo: Todo | null = null
    let completed = false
    if (formGroup.valid && (formGroup.value.completed !== null && formGroup.value.completed.length > 0)) {
      completed = true
    } else if (formGroup.valid && formGroup.value.completed === null) {
      completed = false
    }
    todo = {
      userId: Number(formGroup.value.userId),
      id: Number(formGroup.value.id),
      title: formGroup.value.title,
      completed: completed
    }
    this.addTodo(todo);
  }


  private reloadDataTable() {
    this.fakeApiService.todoObserve.subscribe(() => {
      this.data = this.convertObjectToDataTreeTable(this.todos)
    })
  }

  private getHeaderTodoTreeTable(todo: Todo) {
    const keys: string[] = Object.keys(todo)
    let todoCols: HeaderCol[] = []
    keys.forEach(key => {
      todoCols.push({field: key, header: key.toUpperCase()})
    })
    todoCols.push({field: 'action', header: 'action'.toUpperCase()})
    console.log(keys)
    return todoCols
  }

  private convertObjectToDataTreeTable(data: any) {
    let customTableDataTree: CustomTableDataTree<any>[] = []
    for (let i = 0; i < data.length; i++) {
      customTableDataTree.push({data: data[i], children: []})
    }
    return customTableDataTree
  }

  private addTodo(todo: Todo) {
    this.todos.push(todo)
    this.reloadDataTable()
  }

  protected setTodoRowDataDelete(rowData: any) {
    this.todos.splice(this.todos.indexOf(rowData), 1)
    this.reloadDataTable();

  }

  protected setTodoRowDataUpdate(rowData: any) {
    this.todos.map((todo: Todo) => {
      if (rowData.id === todo.id) {
        todo.title = 'updated'
      }
    })
    this.reloadDataTable();
  }
}
