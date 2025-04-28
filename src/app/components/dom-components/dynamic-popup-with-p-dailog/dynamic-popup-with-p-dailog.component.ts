import {Component, Input, OnInit} from '@angular/core';
import {DialogDynamicOption} from '../../../models/form/dialog-dynamic-option';

@Component({
  selector: 'dynamic-popup-p-dialog', // '[dynamic-popup-p-dialog]' mapped <div dynamic-popup-p-dialog></div>
  standalone: false,
  templateUrl: './dynamic-popup-with-p-dailog.component.html',
  styleUrl: './dynamic-popup-with-p-dailog.component.css'
})
export class DynamicPopupWithPDailogComponent  { // implements OnInit

  @Input()
  public declare visible: boolean ;
  @Input()
  public declare dialogDynamicOption : DialogDynamicOption

  constructor() {
    /**
     this.visible = true; // no need button
     // confirm
     this.dialogDynamicOption = new DialogDynamicOption(
     'confirm-dynamic-popup',
     false,
     'fa-solid fa-circle-info fa-xl',
     {'color': '#63E6BE'},
     'Confirm message',
     'Are you sure to delete?'
     )
     // confirm
     this.dialogDynamicOption = new DialogDynamicOption(
     'confirm-dynamic-popup',
     false,
     'fa-solid fa-circle-info fa-xl',
     {'color': '#63E6BE'},
     'Confirm message',
     'Are you sure to delete?'
     )
     // warning
     this.dialogDynamicOption = new DialogDynamicOption(
     'warning-dynamic-popup',
     false,
     'fa-solid fa-triangle-exclamation fa-xl',
     {'color': '#FFD43B'},
     'Warning message',
     'Please do the correct way!'
     )
     // error
     this.dialogDynamicOption = new DialogDynamicOption(
     'error-dynamic-popup',
     false,
     'fa-solid fa-bug fa-xl',
     {'color': '#e0002d'},
     'Error message',
     'Please try another way!'
     )
     */
  }

  /*public setPopup(visible : boolean , dialogDynamicOption : DialogDynamicOption) {
    this.visible = visible;
    this.dialogDynamicOption = dialogDynamicOption;
  }*/

  /*ngOnInit(): void {
    console.log(this.visible)
    console.log(this.dialogDynamicOption)
    // this.openDialog()
  }*/


  protected openDialog(): void {
    this.visible = true;
  }

  protected closeDialog(): void {
    this.visible = false;
  }

}
