import {Component, NgZone} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WebStorageService} from '../../service/web-storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public formGroup: FormGroup ;
  constructor(private webStorageService : WebStorageService,private  router: Router,private ngZone: NgZone ) {
    this.formGroup = new FormGroup({
      username : new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }

  protected doLogin() {
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
  }
}
