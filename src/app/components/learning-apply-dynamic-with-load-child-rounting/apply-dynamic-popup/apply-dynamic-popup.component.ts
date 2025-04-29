import {Component, OnInit} from '@angular/core';
import {
  DynamicPopupWithPDailogComponent
} from '../../dom-components/dynamic-popup-with-p-dailog/dynamic-popup-with-p-dailog.component';
import {DialogDynamicOption} from '../../../models/form/dialog-dynamic-option';
import {
  DynamicPopupWithPDailogForExtendComponent
} from '../../dom-components/dynamic-popup-with-p-dailog-for-extend/dynamic-popup-with-p-dailog-for-extend.component';

@Component({
  selector: 'apply-dynamic-popup',
  standalone: false,
  templateUrl: './apply-dynamic-popup.component.html',
  styleUrl: './apply-dynamic-popup.component.css'
})
// ** extends <component> extends DynamicPopupWithPDailogComponent
export class ApplyDynamicPopupComponent extends DynamicPopupWithPDailogForExtendComponent implements OnInit {

  protected visibleForExtendA : boolean = false;
  protected dialogDynamicOptionForExtendA = new DialogDynamicOption(
    'warning-dynamic-popup',
    false,
    'fa-solid fa-triangle-exclamation fa-xl',
    {'color': '#FFD43B'},
    'Warning message',
    'Please do the correct way!'
  )

  protected visibleForExtendB : boolean = false;
  protected dialogDynamicOptionForExtendB = new DialogDynamicOption(
    'confirm-dynamic-popup',
    false,
    'fa-solid fa-circle-info fa-xl',
    {'color': '#63E6BE'},
    'Confirm message',
    'Are you sure to delete?'
  )


  protected visibleConfirm : boolean = false;
  protected dialogDynamicOptionConfirm = new DialogDynamicOption(
    'confirm-dynamic-popup',
    false,
    'fa-solid fa-circle-info fa-xl',
    {'color': '#63E6BE'},
    'Confirm message',
    'Are you sure to delete?'
  )

  protected visibleWarning : boolean = false;
  protected dialogDynamicOptionWarning = new  DialogDynamicOption(
    'warning-dynamic-popup',
    false,
    'fa-solid fa-triangle-exclamation fa-xl',
    {'color': '#FFD43B'},
    'Warning message',
    'Please do the correct way!'
  )

  protected visibleError : boolean = false;
  protected dialogDynamicOptionError = new DialogDynamicOption(
    'error-dynamic-popup',
    false,
    'fa-solid fa-bug fa-xl',
    {'color': '#e0002d'},
    'Error message',
    'Please try another way!'
  )

  constructor() {
    super()
  }

  // override ngOnInit
  override ngOnInit(): void {
    this.visibleForExtendA = true //
    this.dialogDynamicOptionForExtendA = new  DialogDynamicOption(
      'confirm-dynamic-popup',
      false,
      'fa-solid fa-circle-info fa-xl',
      {'color': '#63E6BE'},
      'Confirm message',
      'Are you sure to delete?'
    )
    /**this.visible = this.visibleForExtend
    this.dialogDynamicOption = this.dialogDynamicOptionForExtend*/
    super.ngOnInit();
  }


  setOnCancelA() {
    // why i don't call visible = false because i map visibleForExtend = visible
    // so when visibleForExtend changes it (visible) changes too
    this.visibleForExtendA = false;
    setTimeout(() => {
      this.visibleForExtendA = true;
    },3000)
  }


  setOnCancelB() {
    this.visibleForExtendB = false;
    setTimeout(() => {
      this.visibleForExtendB = true;
    },3000)
  }
}
