import {Component, OnInit} from '@angular/core';
import {FakeDataService} from '../../service/fake-data';
import {HeaderCol} from '../../models/api/header-col';
import {TreeNode} from 'primeng/api';
import {User} from '../../models/api/custom-table-data-tree-user';
import {CustomTableDataTree} from '../../models/api/custom-table-data-tree';
import {Student} from '../../models/form/student';
import {FakeApiService} from '../../service/fake-api.service';
import {Todo} from '../../models/api/todo';
import {Post} from '../../models/api/post';

@Component({
  selector: 'app-learning-ng-container-and-p-tree-table',
  standalone: false,
  templateUrl: './learning-ng-container-and-p-tree-table.component.html',
  styleUrl: './learning-ng-container-and-p-tree-table.component.css'
})
export class LearningNgContainerAndPTreeTableComponent implements OnInit {

  protected templates = {
     a : false,
     b : false,
     c : false,
     d : false
  };

  private fakeDataService: FakeDataService;

  public header: HeaderCol[]
  public body : TreeNode[]

  public header2: HeaderCol[]
  public body2 : TreeNode[]

  protected todos : Todo[]
  protected posts : Post[]

  constructor(private fakeApiService : FakeApiService) {
    this.fakeDataService = new FakeDataService();
    this.header = []
    this.body = []
    this.header2 = []
    this.body2 = []
    this.todos = []
    this.posts = []
  }

  ngOnInit(): void {
    this.fakeApiService.todoObserve.subscribe((todos) => this.todos = todos)
    this.fakeApiService.postObserve.subscribe((post) => this.posts = post);
  }

  protected listenTemplates(template:any) {
    if (template.name === 'a' && template.model.length > 0) {
      this.templates.a = true;
      /*
        this.fakeDataService.setHeaderCols(this.getHeaderUserTreeTable());
        this.fakeDataService.setBodyTreeTable(this.getBodyUserTreeTable());
      */
      this.header = this.getHeaderUserTreeTable()
      this.body = this.getBodyUserTreeTable()
      this.header2 = this.getHeaderStudentTreeTable()
      this.body2 = this.getBodyStudentTreeTable()
    }
    if (template.name === 'a' && template.model.length == 0) {
      this.templates.a = false;
      this.header = []
      this.header2 = []
      this.body = []
      this.body2 = []
    }
    if (template.name === 'b' && template.model.length > 0) {
      this.templates.b = true;
      this.header = this.getHeaderTodoTreeTable()
      this.body = this.getBodyTodoTreeTable()
      this.header2 = this.getHeaderPostTreeTable()
      this.body2 = this.getBodyPostTreeTable()
    }
    if (template.name === 'b' && template.model.length == 0) {
      this.templates.b = false;
      this.header = []
      this.header2 = []
      this.body = []
      this.body2 = []
    }
    if (template.name === 'c' && template.model.length > 0) {
      this.templates.c = true;
    }
    if (template.name === 'c' && template.model.length == 0) {
      this.templates.c = false;
      this.header = []
      this.header2 = []
      this.body = []
      this.body2 = []
    }
    console.log(this.templates);
  }

  // User table
  protected getHeaderUserTreeTable() {
      let userCols: HeaderCol[] = []
      userCols.push({field: "firstname", header: "Firstname"})
      userCols.push({field: "age", header: "Age"})
      userCols.push({field: "action", header: "Action"})
      return userCols
  }
  private getBodyUserTreeTable() {
      let data: User[] = [];
      data.push({firstname: 'alex', age: 22});
      data.push({firstname: 'alun', age: 23});
      data.push({firstname: 'json', age: 24});
      data.push({firstname: 'kevin', age: 25});
      data.push({firstname: 'max', age: 25});
      data.push({firstname: 'jack', age: 25});
      data.push({firstname: 'bron', age: 25});
      let customTableDataTree: CustomTableDataTree<User>[] = []
      customTableDataTree.push({data: data[0], children: []})
      customTableDataTree.push({data: data[1], children: []})
      customTableDataTree.push({data: data[2], children: []})
      customTableDataTree.push({data: data[3], children: []})
      customTableDataTree.push({data: data[4], children: []})
      customTableDataTree.push({data: data[5], children: []})
      customTableDataTree.push({data: data[6], children: []})
      return customTableDataTree;
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
  private getBodyStudentTreeTable() {
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

  // To.do table
  protected getHeaderTodoTreeTable() {
    let todoCols: HeaderCol[] = []
    todoCols.push({field: "userId", header: "UID"})
    todoCols.push({field: "id", header: "ID"})
    todoCols.push({field: "title", header: "Title"})
    todoCols.push({field: "completed", header: "Completed"})
    todoCols.push({field: "action", header: "Action"})
    return todoCols
  }
  private getBodyTodoTreeTable() {
    let customTableDataTree: CustomTableDataTree<Todo>[] = []
    for (const todo of this.todos) {
      customTableDataTree.push({data: todo, children: []})
    }
    return customTableDataTree
  }

  // Post table
  protected getHeaderPostTreeTable() {
    let postCols: HeaderCol[] = []
    postCols.push({field: "userId", header: "UID"})
    postCols.push({field: "id", header: "ID"})
    postCols.push({field: "title", header: "Title"})
    postCols.push({field: "body", header: "Body"})
    postCols.push({field: "link", header: "Link"})
    postCols.push({field: "comment_count", header: "Comments Count"})
    postCols.push({field: "action", header: "Action"})
    return postCols
  }
  private getBodyPostTreeTable() {
    let customTableDataTree: CustomTableDataTree<Post>[] = []
    for (const post of this.posts) {
      customTableDataTree.push({data: post, children: []})
    }
    return customTableDataTree
  }

}
