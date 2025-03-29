import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-learning-form-groups',
  standalone: false,
  templateUrl: './learning-form-groups.component.html',
  styleUrl: './learning-form-groups.component.css'
})
export class LearningFormGroupsComponent {

  protected usernameField() {
    return {
      fieldName: 'username',
      fieldData : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)])
    };
  }

  protected passwordField() {
    return {
      fieldName: 'password',
      fieldData : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)])
    };
  }

  protected rememberField() {
    return {
      fieldName: 'remember',
      fieldData : new FormControl(false, [Validators.required])
    };
  }


  protected usernameField2() {
    return {
      fieldName: 'username2',
      fieldData : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)])
    };
  }

  protected passwordField2() {
    return {
      fieldName: 'password2',
      fieldData : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)])
    };
  }

  protected rememberField2() {
    return {
      fieldName: 'remember2',
      fieldData : new FormControl(false, [Validators.required])
    };
  }
}
