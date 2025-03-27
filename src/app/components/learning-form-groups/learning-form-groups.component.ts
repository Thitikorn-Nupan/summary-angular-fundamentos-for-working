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
}
