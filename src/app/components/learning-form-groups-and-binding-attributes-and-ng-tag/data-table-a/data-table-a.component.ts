import {Component, Input} from '@angular/core';
import {TreeNode} from 'primeng/api';
import {HeaderCol} from '../../../models/api/header-col';

@Component({
  selector: 'data-table-a',
  standalone: false,
  templateUrl: './data-table-a.component.html',
  styleUrl: './data-table-a.component.css'
})
export class DataTableAComponent {
  @Input()
  public data?: TreeNode[];
  @Input()
  public header?: HeaderCol[];
  @Input()
  public enable: boolean = false;
  @Input()
  public style = {
    'max-width': 'fit-content',
    'max-height': '500px',
    'overflow-y': 'auto',
    'height': '300px'
  }
  @Input()
  public loading: boolean = true;


}
