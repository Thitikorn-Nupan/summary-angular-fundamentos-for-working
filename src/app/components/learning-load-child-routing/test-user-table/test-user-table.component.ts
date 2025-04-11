import {Component, OnInit} from '@angular/core';
import {HeaderCol} from '../../../models/api/header-col';
import {TreeNode} from 'primeng/api';
import {User} from '../../../models/api/user';
import {UserServiceData} from '../../../service/user-service-data';
import {CustomTableDataTree} from '../../../models/api/custom-table-data-tree';

@Component({
  selector: 'test-user-table',
  standalone: false,
  templateUrl: './test-user-table.component.html',
  styleUrl: './test-user-table.component.css'
})
export class TestUserTableComponent implements OnInit {

  public declare header: HeaderCol[]
  public declare  data: TreeNode[]
  private userServiceData : UserServiceData;

  constructor() {
    this.userServiceData = new UserServiceData()
  }

  ngOnInit(): void {
     this.data = this.convertObjectToDataTreeTable(this.userServiceData.getUsers());
     this.header = this.getHeaderUserTreeTable()
  }

  private getHeaderUserTreeTable() {
    let userCols: HeaderCol[] = []
    userCols.push({field: "uid", header: "UID"})
    userCols.push({field: "fullname", header: "Fullname"})
    userCols.push({field: "email", header: "Email"})
    userCols.push({field: "action", header: "Action"})
    return userCols
  }

  private convertObjectToDataTreeTable(data: any) {
    let customTableDataTree: CustomTableDataTree<any>[] = []
    for (let i = 0; i < data.length; i++) {
      customTableDataTree.push({data: data[i], children: []})
    }
    return customTableDataTree
  }

  protected setUserRowDataDelete(rowData: any) {
    console.log(rowData)
    // const user = new User(rowData.uid, rowData.fullname, rowData.email)
    // this.userServiceData.removeUser(user)
    // this.data1 = this.convertObjectToDataTreeTable(this.userServiceData.getUsers()) // ** no need to set it empty array it'll do overwrite
  }

  protected setUserRowDataUpdate(rowData: any) {
    console.log(rowData)
    // const userNew = new User(0, "test test", "test@hotmail.com")
    // this.userServiceData.editUser(userNew, rowData.uid)
    // this.data1 = this.convertObjectToDataTreeTable(this.userServiceData.getUsers()) // ** no need to set it empty array it'll do overwrite
  }
}
