import {Component, OnInit} from '@angular/core';
import {HeaderCol} from '../../../models/api/header-col';
import {TreeNode} from 'primeng/api';
import {CustomTableDataTree} from '../../../models/api/custom-table-data-tree';

@Component({
  selector: 'test-robot-table',
  standalone: false,
  templateUrl: './test-robot-table.component.html',
  styleUrl: './test-robot-table.component.css'
})
// use extends
export class TestRobotTableComponent implements OnInit{
  public declare header: HeaderCol[]
  public declare  data: TreeNode[]
  // private userServiceData : UserServiceData;

  constructor() {
    // this.userServiceData  = new UserServiceData()
  }
  ngOnInit(): void {
    this.data = this.convertObjectToDataTreeTable([
      {code: 'RX-111',label:'Thaitun',cost:75000000},
      {code: 'GT-112',label:'Maximum',cost:75000000},
      {code: 'UV-113',label:'Falltun',cost:75000000},
    ]);
    this.header = this.getHeaderUserTreeTable()
  }


  private getHeaderUserTreeTable() {
    let robotCols: HeaderCol[] = []
    robotCols.push({field: "code", header: "Code"})
    robotCols.push({field: "label", header: "Label"})
    robotCols.push({field: "cost", header: "Cost"})
    robotCols.push({field: "action", header: "Action"})
    return robotCols
  }

  private convertObjectToDataTreeTable(data: any) {
    let customTableDataTree: CustomTableDataTree<any>[] = []
    for (let i = 0; i < data.length; i++) {
      customTableDataTree.push({data: data[i], children: []})
    }
    return customTableDataTree
  }

  protected setRobotRowDataDelete(rowData: any) {
    console.log(rowData)
  }

  protected setRobotRowDataUpdate(rowData: any) {
    console.log(rowData)
    // const userNew = new User(0, "test test", "test@hotmail.com")
    // this.userServiceData.editUser(userNew, rowData.uid)
    // this.data1 = this.convertObjectToDataTreeTable(this.userServiceData.getUsers()) // ** no need to set it empty array it'll do overwrite
  }
}
