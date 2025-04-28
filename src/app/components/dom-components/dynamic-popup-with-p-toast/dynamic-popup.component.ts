import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ToastDynamicOption} from '../../../models/form/toast-dynamic-option';


@Component({
  selector: 'dynamic-popup-toast',
  standalone: false,
  templateUrl: './dynamic-popup.component.html',
  styleUrl: './dynamic-popup.component.css'
})
export class DynamicPopupComponent {

  // protected readonly severity = new Button().severity =  'info'
  @Input()
  public declare labelButton: string;
  @Input() // you have to set values of type follow the main severity prop ! if missing will get error type string
  public declare severityButton: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined;
  @Input()
  public declare toastDynamicOptions: ToastDynamicOption;
  @Output()
  public declare getToastDynamicStatus :EventEmitter<{ status : boolean , detail : string }> ;
  private disable : boolean = false; // where visible var binds to MessageService service ??

  constructor(private messageService: MessageService) {
    /**
    // confirm
    this.toastDynamicOptions = {
      key:'confirm-dynamic-popup',
      severity: 'secondary',
      header: 'Confirm message',
      summary: 'Are you sure to delete?',
      sticky: true,
      iconFa:'fa-solid fa-circle-info fa-xl',
      iconColor: {'color': '#63E6BE'}
    }

    // warning
    this.toastDynamicOptions = {
     key:'warning-dynamic-popup',
     severity: 'secondary',
     header: 'Warning message',
     summary: 'Please do the correct way!',
     sticky: true,
     iconFa:'fa-solid fa-triangle-exclamation fa-xl',
     iconColor: {'color': '#FFD43B'}
     }

    // error
    this.toastDynamicOptions = {
     key:'error-dynamic-popup',
     severity: 'secondary',
     header: 'Error message',
     summary: 'Please try another way!',
     sticky: true,
     iconFa:'fa-solid fa-bug fa-xl',
     iconColor: {'color': '#e0002d'}
     }
    */
    this.getToastDynamicStatus = new EventEmitter<{ status : boolean , detail : string }>()
  }

  /**
  showConfirm() {
    if (!this.disable) {
      // if add call it will show alert
      this.messageService.add({ key: 'confirm', sticky: true, severity: 'secondary', summary: 'Are you sure to delete?' });
      this.disable = true;
    }
  }

  showWarning() {
    if (!this.disable) {
      this.messageService.add({ key: 'warning', sticky: true, severity: 'secondary', summary: 'Please do the correct way!' });
      this.disable = true;
    }
  }

  showError() {
    if (!this.disable) {
      this.messageService.add({ key: 'error', sticky: true, severity: 'secondary', summary: 'Please try it again!' });
      this.disable = true;
    }
  }
   */

  protected showToastDynamic() {
    if (!this.disable) {
      this.messageService.add({ key: this.toastDynamicOptions.key, sticky: this.toastDynamicOptions.sticky, severity: this.toastDynamicOptions.severity, summary: this.toastDynamicOptions.summary });
      this.disable = true;
    }
  }

  protected onCancel () {
    this.getToastDynamicStatus.emit({
      status : false,
      detail : 'CANCEL'
    })
    this.messageService.clear(this.toastDynamicOptions.key);
    this.disable = false;
  }

  protected onConfirm() {
    this.getToastDynamicStatus.emit({
      status : true,
      detail : 'OK'
    })
    // clear it means remove add
    this.messageService.clear(this.toastDynamicOptions.key);
    this.disable = false;
  }

  protected onReject() { // if user cancel by clicked at X
    console.log('reject work')
    this.getToastDynamicStatus.emit({
      status : false,
      detail : 'REJECT'
    })
    this.messageService.clear(this.toastDynamicOptions.key);
    this.disable = false;
  }

}
