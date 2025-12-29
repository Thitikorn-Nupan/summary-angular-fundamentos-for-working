import {Component, NgZone, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WebStorageService} from '../../service/web-storage-service';
import { Router } from '@angular/router';
import {DynamicInputTextField} from '../../models/form/dynamic-input-text-field';
import {
  DynamicPopupWithPDailogAndKeyFilterComponent
} from '../dom-components/dynamic-popup-with-p-dailog-and-key-fillter/dynamic-popup-with-p-dailog-and-key-filter.component';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  protected headerFormGroup : string = 'Login Popup'
  protected formGroup = new FormGroup({})
  protected dynamicInputTextFields : DynamicInputTextField[] = [
    new DynamicInputTextField('username',new FormControl('',Validators.required),'username','Username','text',null),
    new DynamicInputTextField('password',new FormControl('',Validators.required),'password','Password','password',null)
  ]
  @ViewChild(DynamicPopupWithPDailogAndKeyFilterComponent,{static:false})
  protected declare dynamicPopupWithPDailogAndKeyFilterComponent:DynamicPopupWithPDailogAndKeyFilterComponent;


  constructor(private webStorageService : WebStorageService,private  router: Router,private ngZone: NgZone ) {
    /*this.formGroup = new FormGroup({
      username : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })*/
  }

  /*protected doLogin() {
    if (this.formGroup.valid) {
      const values = this.formGroup.value;
      if (values.username ==='Admin' && values.password ==='1') {
        this.webStorageService.setLocal('login', true);
        this.webStorageService.setLocal('username', values.username);
        this.ngZone.run(() => this.router.navigateByUrl('learning-apply-dynamic-with-load-child-routing')) // go to path
      }else {
        this.webStorageService.setLocal('login', false);
      }
    }
  }*/

  protected setFormGroup($event: FormGroup) {
    this.formGroup = $event
  }

  protected setOnSave() {
    if (this.formGroup.valid) {
      const values : any = this.formGroup.value;
      if (values.username ==='Admin' && values.password ==='1') {
        this.webStorageService.setLocal('login', true);
        this.webStorageService.setLocal('username', values.username);
        this.ngZone.run(() => this.router.navigateByUrl('learning-apply-dynamic-with-load-child-routing')) // go to path
      }else {
        this.webStorageService.setLocal('login', false);
        this.headerFormGroup  = 'Login Failed';
      }
    }
  }


}
