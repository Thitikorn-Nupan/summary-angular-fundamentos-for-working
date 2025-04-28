import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {HeaderCol} from '../../../models/api/header-col';

@Component({
  selector: 'data-tree-table',
  standalone: false,
  templateUrl: './data-tree-table.component.html',
  styleUrl: './data-tree-table.component.css'
})
export class DataTreeTableComponent {
  @Input()
  public data?: TreeNode[];
  @Input()
  public header?: HeaderCol[];
  @Input()
  public enable: boolean = false;
  @Input()
  public loading: boolean = true;
  @Input()
  public pTableId?: string;
  @Input()
  public nameTable?: string;
  // for send row selected to parent component
  @Input()
  public style : any
  @Output()
  protected getRowDataDelete = new EventEmitter<any>();
  @Output()
  protected getRowDataUpdate = new EventEmitter<any>();

  protected onDeleteClicked(rowData : any) {
    this.getRowDataDelete.emit(rowData)
  }
  protected onUpdateClicked(rowData : any) {
    this.getRowDataUpdate.emit(rowData)
  }

  public addRowData(rowData : any) {
    this.data?.push({
      data : rowData,
      children : [],
    })
    console.log(this.data)
  }
}
