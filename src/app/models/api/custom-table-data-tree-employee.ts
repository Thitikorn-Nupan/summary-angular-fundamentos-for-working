import {TreeNode} from 'primeng/api';
/*    employeeCols.push({field:'id',header:'ID'})
    employeeCols.push({field:'fullname',header:'Fullname'})
    employeeCols.push({field:'salary',header:'Salary'})
    employeeCols.push({field:'email',header:'Email'})
    employeeCols.push({field:'phone',header:'Phone'})*/
export class Employee {
  public id?: number
  public fullname?: string
  public salary?: number
  public email?: string
  public phone?: string
}

export class Address{
  public id?: number
  public streetAddress?: string
}

export class CustomTableDataTreeEmployee implements TreeNode {

  public data : Employee;
  public children : TreeNode<Address>[];

  constructor(data: Employee, children: TreeNode<Address>[]) {
    this.data = data;
    this.children = children;
  }
}
