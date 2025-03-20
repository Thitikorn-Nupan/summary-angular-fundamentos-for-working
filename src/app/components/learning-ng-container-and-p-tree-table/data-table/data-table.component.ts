import {Component, Input, OnInit} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {HeaderCol} from '../../../models/api/header-col';

@Component({
  selector: 'data-table',
  standalone: false,
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {

  @Input()
  public title?: string;
  @Input({alias:'body'})
  public data?: TreeNode[];
  @Input({alias:'header'})
  public columns?: HeaderCol[];
  @Input()
  public enable: boolean = false;
  public loading: boolean = true;
  @Input()
  public style : any
  @Input()
  public imageUrl?: string ;
  // output key back


  ngOnInit(): void {
    this.sleep(1000).then(() => {
      this.loading = false
    })
  }


  private async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  protected listenEditMode(rowData: any) {
    console.log(rowData)
  }

  protected listenRemoveMode(rowData: any) {
    console.log(rowData)
  }
}
