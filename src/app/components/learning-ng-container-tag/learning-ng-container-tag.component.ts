import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FakeDataService} from '../../service/fake-data';
import {TreeNode} from 'primeng/api';
import {File} from '../../models/api/file';
import {HeaderCol} from '../../models/api/header-col';
import {CustomTableDataTreeUser, User} from '../../models/api/custom-table-data-tree-user';
import {Address, CustomTableDataTreeEmployee, Employee} from '../../models/api/custom-table-data-tree-employee';
import {CustomTableDataTree} from '../../models/api/custom-table-data-tree';
import {Student} from '../../models/form/student';


@Component({
  selector: 'app-learning-ng-container-tag',
  standalone: false,
  templateUrl: './learning-ng-container-tag.component.html',
  styleUrl: './learning-ng-container-tag.component.css'
})
export class LearningNgContainerTagComponent implements OnInit {

  protected template?: string;
  protected templateB2?: string;
  protected switchTemplate: boolean = false
  protected switchTemplateB2: boolean = false
  protected isLoggedInOnTemplate: boolean = false;
  protected subTitleTemplate?: string;

  protected months: string[]
  private fakeDataService: FakeDataService
  protected files: File[]
  protected active: boolean = false;

  protected tableData: TreeNode[];
  protected cols: HeaderCol[];
  protected table?: string;
  protected title?: string;

  protected tableDataB2: TreeNode[];
  protected colsB2: HeaderCol[];

  // P Tree Table merge User,Employee to the same P Tree Table tag
  protected tableB2?: string;
  protected switchTableB2: boolean = false

  protected titleB2?: string;

  protected myContext = {
    // property $implicit. It can be used to set the default value for all variables whose values are not set.
    $implicit: 'World', // default key you can access by let-<key> {{ key }}
    message1:'World Mather Fucker',
    message2:'World Father Fucker',
    student : new Student(100,'alun ryder','alun@gmail.com'),
    students:[
      new Student(100,'alun ryder','alun@gmail.com'),
      new Student(101,'kevin hard','kevin@gmail.com'),
      new Student(102,'adam sandler','adam@gmail.com')
    ],
    alertMessage(v:string) {
      alert(v)
    }
  };

  constructor() {
    this.fakeDataService = new FakeDataService();
    this.months = this.fakeDataService.retrieveAllMonths
    this.files = this.fakeDataService.retrieveAllFiles
    this.cols = []
    this.tableData = []
    this.colsB2 = []
    this.tableDataB2 = []
    /*this.tableData = [
      {
        data: {
          name: "A",
          age: "40"
        },
        children: [
          {
            data: {
              name: "B",
              age: "16"
            }
          },
          {
            data: {
              name: "C",
              age: "14"
            }
          }
        ]
      },
      {
        data: {
          name: "D",
          age: "55"
        },
        children: [
          {
            data: {
              name: "E",
              age: "20"
            }
          },
          {
            data: {
              name: "F",
              age: "24"
            }
          }
        ]
      },
      {
        data: {
          name: "G",
          age: "32"
        },
        children: [
          {
            data: {
              name: "H",
              age: "20"
            }
          },
          {
            data: {
              name: "I",
              age: "24"
            }
          }
        ]
      },
      {
        data: {
          name: "J",
          age: "64"
        },
        children: [
          {
            data: {
              name: "K",
              age: "20"
            }
          },
          {
            data: {
              name: "L",
              age: "24"
            }
          }
        ]
      },
      {
        data: {
          name: "M",
          age: "12"
        },
        children: [
          {
            data: {
              name: "N",
              age: "20"
            }
          },
          {
            data: {
              name: "O",
              age: "24"
            }
          }
        ]
      },
      {
        data: {
          name: "P",
          age: "34"
        },
        children: [
          {
            data: {
              name: "Q",
              age: "20"
            }
          },
          {
            data: {
              name: "R",
              age: "24"
            }
          }
        ]
      },
      {
        data: {
          name: "S",
          age: "43"
        },
        children: [
          {
            data: {
              name: "T",
              age: "20"
            }
          },
          {
            data: {
              name: "U",
              age: "24"
            }
          }
        ]
      }
    ];*/
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  protected listenTemplate() {
    this.switchTemplate = !this.switchTemplate;
  }

  protected listenTemplateB2() {
    this.switchTemplateB2 = !this.switchTemplateB2;
    this.titleB2 = 'Learning Dynamic Table';
  }

  protected getServerity() {
    return this.active ? 'success' : 'warn';
  }

  protected switchActivity() {
    this.active = !this.active;
  }

  protected listenTableAndCustomHeaderCols() {
    if (this.table === 'p-table-tree-user') {
      this.title = 'User Table';
      this.fakeDataService.setHeaderCols(this.getUserCols());
      this.fakeDataService.setBodyTreeTable(this.getCustomTableDataTreeUser())
    } else if (this.table === 'p-table-tree-employee') {
      this.title = 'Employee Table';
      this.fakeDataService.setHeaderCols(this.getEmployeeCols());
      this.fakeDataService.setBodyTreeTable(this.getCustomTableDataTreeEmployee())
    }

    this.cols = this.fakeDataService.retrieveAllHeaderCols
    this.tableData = this.fakeDataService.retrieveAllBodyTreeTable
  }

  // User P Tree Table
  private getCustomTableDataTreeUser() {
    let data: User[] = [];

    data.push({firstname: 'alex', age: 22});
    data.push({firstname: 'alun', age: 23});
    data.push({firstname: 'json', age: 24});
    data.push({firstname: 'kevin', age: 25});

    let childrenData1: TreeNode<User>[] = []
    let childrenData2: TreeNode<User>[] = []
    let childrenData3: TreeNode<User>[] = []
    let childrenData4: TreeNode<User>[] = []

    childrenData1.push({data: {firstname: `old name is ${data[0].firstname}`, age: data[0].age! - 1}, children: []})
    childrenData2.push({data: {firstname: `old name is ${data[1].firstname}`, age: data[1].age! - 1}, children: []})
    childrenData3.push({data: {firstname: `old name is ${data[2].firstname}`, age: data[2].age! - 1}, children: []})
    childrenData4.push({data: {firstname: `old name is ${data[3].firstname}`, age: data[3].age! - 1}, children: []})

    let customTableDataTree: CustomTableDataTreeUser[] = []
    customTableDataTree.push({data: data[0], children: childrenData1})
    customTableDataTree.push({data: data[1], children: childrenData2})
    customTableDataTree.push({data: data[2], children: childrenData3})
    customTableDataTree.push({data: data[3], children: childrenData4})

    return customTableDataTree;
  }

  private getUserCols() {
    let userCols: HeaderCol[] = []
    userCols.push({field: "firstname", header: "Firstname"})
    userCols.push({field: "age", header: "Age"})
    return userCols
  }

  // Employee P Tree Table
  private getCustomTableDataTreeEmployee() {
    let data: Employee[] = [];

    data.push({id: 100, fullname: 'alex ryder', email: 'alex@hotmail.com', phone: '0988878787', salary: 35000});
    data.push({id: 101, fullname: 'kevin owner', email: 'kevin@hotmail.com', phone: '0388878787', salary: 35000});
    data.push({id: 102, fullname: 'json slider', email: 'json@hotmail.com', phone: '0988872787', salary: 35000});
    data.push({id: 103, fullname: 'dony tyger', email: 'don@hotmail.com', phone: '0938878787', salary: 35000});

    let adresses: Address[] = []

    adresses.push({id: 100, streetAddress: '29/30-1 Soi Wattaphan, Ratchaprarop Rd., Rajthevee'})
    adresses.push({id: 101, streetAddress: '295/17 Surawong Suriyawong Bang Rak'})
    adresses.push({id: 102, streetAddress: '77/5 Gp 4 Phetkasem Bang Khae Bangkhae'})
    adresses.push({id: 103, streetAddress: ' '})

    let customTableDataTree: CustomTableDataTreeEmployee[] = [];

    for (const d of data) {
      let childrenAddress: TreeNode<Address>[] = []
      /*
      switch (d.id) {
          case 100 :
            childrenAddress.push({data : adresses[0]})
            break;
          case 101 :
            childrenAddress.push({data : adresses[1]})
            break;
          case 102 :
            childrenAddress.push({data : adresses[2]})
            break;
          case 103 :
            childrenAddress.push({data : adresses[3]})
            break;
        }
      */
      for (const adress of adresses) {
        if (adress.id === d.id) {
          adress.id = undefined
          childrenAddress.push({data: adress})
        }
      }

      customTableDataTree.push({data: d, children: childrenAddress})
    }
    return customTableDataTree;
  }
  private getEmployeeCols() {
    let employeeCols: HeaderCol[] = []
    employeeCols.push({field: 'id', header: 'ID'})
    employeeCols.push({field: 'fullname', header: 'Fullname'})
    employeeCols.push({field: 'salary', header: 'Salary'})
    employeeCols.push({field: 'email', header: 'Email'})
    employeeCols.push({field: 'phone', header: 'Phone'})
    employeeCols.push({field: 'streetAddress', header: 'Street'})
    return employeeCols
  }

  // Dynamic data tree
  protected listenTableB2Dynamic() {
    this.switchTableB2 = !this.switchTableB2
    if (this.switchTableB2) {
      this.titleB2 = 'User Table'
      this.fakeDataService.setHeaderCols(this.getCustomTableDataTreeCols(true));
      this.fakeDataService.setBodyTreeTable(this.getCustomTableDataTree(true));
    } else {
      this.titleB2 = 'Student Table'
      this.fakeDataService.setHeaderCols(this.getCustomTableDataTreeCols(false));
      this.fakeDataService.setBodyTreeTable(this.getCustomTableDataTree(false));
    }
    this.colsB2 = this.fakeDataService.retrieveAllHeaderCols
    this.tableDataB2 = this.fakeDataService.retrieveAllBodyTreeTable
  }
  private getCustomTableDataTree(userOrStudent: boolean) {
    if (userOrStudent) {
      let data: User[] = [];
      data.push({firstname: 'alex', age: 22});
      data.push({firstname: 'alun', age: 23});
      data.push({firstname: 'json', age: 24});
      data.push({firstname: 'kevin', age: 25});
      let customTableDataTree: CustomTableDataTree<User>[] = []
      customTableDataTree.push({data: data[0], children: []})
      customTableDataTree.push({data: data[1], children: []})
      customTableDataTree.push({data: data[2], children: []})
      customTableDataTree.push({data: data[3], children: []})
      return customTableDataTree;
    } else {
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
  }
  protected getCustomTableDataTreeCols(userOrStudent: boolean) {
    if (userOrStudent) {
      let userCols: HeaderCol[] = []
      userCols.push({field: "firstname", header: "Firstname"})
      userCols.push({field: "age", header: "Age"})
      return userCols
    } else {
      let studentCols: HeaderCol[] = []
      studentCols.push({field: "id", header: "ID"})
      studentCols.push({field: "name", header: "Name"})
      studentCols.push({field: "email", header: "Email"})
      return studentCols
    }
  }

  protected listenToggler(rowNode:any) {
    console.log(rowNode.node.data)
    /*
    {
      "id": 100,
      "fullname": "alex ryder",
      "email": "alex@hotmail.com",
      "phone": "0988878787",
      "salary": 35000
    }
    */
  }
}
