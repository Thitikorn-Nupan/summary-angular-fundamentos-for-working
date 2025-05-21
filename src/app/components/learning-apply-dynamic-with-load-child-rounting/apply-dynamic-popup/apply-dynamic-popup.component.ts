import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {
  DynamicPopupWithPDailogComponent
} from '../../dom-components/dynamic-popup-with-p-dailog/dynamic-popup-with-p-dailog.component';
import {DialogDynamicOption} from '../../../models/form/dialog-dynamic-option';
import {
  DynamicPopupWithPDailogForExtendComponent
} from '../../dom-components/dynamic-popup-with-p-dailog-for-extend/dynamic-popup-with-p-dailog-for-extend.component';
import {DynamicInputTextField} from '../../../models/form/dynamic-input-text-field';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {
  DynamicPopupWithPDailogAndKeyFilterComponent
} from '../../dom-components/dynamic-popup-with-p-dailog-and-key-fillter/dynamic-popup-with-p-dailog-and-key-filter.component';

@Component({
  selector: 'apply-dynamic-popup',
  standalone: false,
  templateUrl: './apply-dynamic-popup.component.html',
  styleUrl: './apply-dynamic-popup.component.css'
})
// ** extends <component> extends DynamicPopupWithPDailogComponent
export class ApplyDynamicPopupComponent extends DynamicPopupWithPDailogForExtendComponent implements OnInit,AfterViewInit {

  protected visibleForExtendA : boolean = false;
  protected dialogDynamicOptionForExtendA = new DialogDynamicOption( // change it onInit
    'warning-dynamic-popup',
    false,
    'fa-solid fa-triangle-exclamation fa-xl',
    {'color': '#FFD43B'},
    'Warning message',
    'Please do the correct way!'
  )

  protected visibleForExtendB : boolean = false;
  protected dialogDynamicOptionForExtendB = new DialogDynamicOption(
    'warning-dynamic-popup',
    false,
    'fa-solid fa-triangle-exclamation fa-xl',
    {'color': '#FFD43B'},
    'Warning message',
    'Please do the correct way!'
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


  protected headerFormGroupInputText : string = 'Test FormGroup on popup'
  protected visibleFormGroupInputText : boolean = false;
  protected formGroupInputText = new FormGroup({})
  protected dynamicInputTextFields : DynamicInputTextField[] = [
    new DynamicInputTextField('firstname',new FormControl('',Validators.required),'firstname','Firstname','text','...'),
    new DynamicInputTextField('lastname',new FormControl('',Validators.required),'lastname','Lastname','text','...'),
    new DynamicInputTextField('year',new FormControl(1,Validators.required),'year','Year','number','...'),
    new DynamicInputTextField('email',new FormControl('',Validators.required),'email','Email','email','...'),
    new DynamicInputTextField('password',new FormControl('',Validators.required),'password','Password','password',null)
  ]
  @ViewChild(DynamicPopupWithPDailogAndKeyFilterComponent,{static:false})
  protected declare dynamicPopupWithPDailogAndKeyFilterComponent:DynamicPopupWithPDailogAndKeyFilterComponent;

  constructor() {
    super()
  }


  // override ngOnInit
  override ngOnInit(): void {
    /*
    this.visibleForExtendA = true //
    this.dialogDynamicOptionForExtendA = new  DialogDynamicOption(
      'confirm-dynamic-popup',
      false,
      'fa-solid fa-circle-info fa-xl',
      {'color': '#63E6BE'},
      'Confirm message',
      'Are you sure to delete?'
    )
    */
    /**this.visible = this.visibleForExtend
    this.dialogDynamicOption = this.dialogDynamicOptionForExtend*/
    super.ngOnInit();
  }


  protected setOnCancelA() {
    // why i don't call visible = false because i map visibleForExtend = visible
    // so when visibleForExtend changes it (visible) changes too
    this.visibleForExtendA = false;
    setTimeout(() => {
      this.visibleForExtendA = true;
    },3000)
  }

  protected setOnOkA() {
    // why i don't call visible = false because i map visibleForExtend = visible
    // so when visibleForExtend changes it (visible) changes too
    this.visibleForExtendA = false;
    console.log('Whatever you want next on Popup A?')
  }

  protected setOnCancelB() {
    this.visibleForExtendB = false;
    setTimeout(() => {
      this.visibleForExtendB = true;
    },3000)
  }

  protected setOnOkB() {
    // why i don't call visible = false because i map visibleForExtend = visible
    // so when visibleForExtend changes it (visible) changes too
    this.visibleForExtendB = false;
    console.log('Whatever you want next on Popup B?')
  }


  ngAfterViewInit(): void {
    // it did child and did parent (component)
    console.log('check object form group ',this.formGroupInputText)
  }


  protected setFormGroup($event: any) {
    this.formGroupInputText = $event
    console.log('got a form group')
  }

  protected setOnSave() {
    console.log('got event on save')
    const isFormGroupValid = this.formGroupInputText.valid
    if (isFormGroupValid) {
      this.dynamicPopupWithPDailogAndKeyFilterComponent.visible = false
      const values : any = this.formGroupInputText?.value
      console.log(`Result are ${values.firstname} , ${values.lastname} , ${values.email} , ${values.password}`)
      this.formGroupInputText.reset() // reset all controls values
    }
    this.headerFormGroupInputText = isFormGroupValid ? 'Test FormGroup on popup' : 'Some fields are empty'
  }


  protected setOnClose() {
    console.log('got event on close')
    this.dynamicPopupWithPDailogAndKeyFilterComponent.visible = false
  }
}
