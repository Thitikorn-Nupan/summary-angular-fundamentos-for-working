import {File} from '../models/api/file';
import {HeaderCol} from '../models/api/header-col';
import {CustomTableDataTreeUser} from '../models/api/custom-table-data-tree-user';
import {User} from '../models/api/custom-table-data-tree-user';
import {TreeNode} from 'primeng/api';

export class FakeDataService {
  private months: string[]
  private files: File[]
  private headerCols: HeaderCol[]
  private customTableDataTree: TreeNode[]

  constructor() {
    this.months = []
    this.initialMonths();
    this.files = []
    this.initialFiles();
    this.headerCols = []
    // this.initialHeaderCols(); // change to dynamic header cols so i set it on setter method
    this.customTableDataTree = []
    // this.initialCustomTableDataTree()

  }

  private initialHeaderCols() {
    // Note. field value mapped to data table tree
    // behind the sense it binds on tag p-treeTable maybe?
    this.headerCols.push({field: "firstname", header: "Firstname"})
    this.headerCols.push({field: "age", header: "Age"})
  }

  // **
  public setHeaderCols(headerCols: HeaderCol[]) {
    this.headerCols = headerCols;
  }

  /**
  // the first p-treeTable
  private initialCustomTableDataTree() {
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

    this.customTableDataTree.push({data: data[0], children: childrenData1})
    this.customTableDataTree.push({data: data[1], children: childrenData2})
    this.customTableDataTree.push({data: data[2], children: childrenData3})
    this.customTableDataTree.push({data: data[3], children: childrenData4})

  }*/

  public setCustomTableDataTree(customTableDataTree: TreeNode[]) {
    this.customTableDataTree = customTableDataTree
  }

  private initialFiles() {
    this.files.push({name: 'ABC', size: 10, type: 'file', active: false});
    this.files.push({name: 'EFG', size: 10, type: 'file', active: true})
    this.files.push({name: 'HIJ', size: 10, type: 'file', active: false})
  }

  private initialMonths() {
    this.months.push('January');
    this.months.push('February');
    this.months.push('March');
    this.months.push('April');
    this.months.push('May');
    this.months.push('June');
  }

  get retrieveAllMonths() {
    return this.months;
  }

  get retrieveAllFiles() {
    return this.files;
  }

  get retrieveAllHeaderCols() {
    return this.headerCols;
  }

  get retrieveAllCustomTableDataTree() {
    return this.customTableDataTree;
  }
}
