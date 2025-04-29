import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogDynamicOption} from '../../../models/form/dialog-dynamic-option';

@Component({
  selector: '[dynamic-popup-p-dialog]', // '[dynamic-popup-p-dialog]' mapped <div dynamic-popup-p-dialog></div>
  standalone: false,
  templateUrl: './dynamic-popup-with-p-dailog-for-extend.component.html',
  styleUrl: './dynamic-popup-with-p-dailog-for-extend.component.css'
})
export class DynamicPopupWithPDailogForExtendComponent  implements OnInit { // implements OnInit

  @Input()
  public visible!: boolean ;
  @Input()
  public dialogDynamicOption! : DialogDynamicOption
  @Output()
  public getOnCancel = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.visible)
    console.log(this.dialogDynamicOption)
  }



  protected onCancel() {
    this.getOnCancel.emit();
  }
}
