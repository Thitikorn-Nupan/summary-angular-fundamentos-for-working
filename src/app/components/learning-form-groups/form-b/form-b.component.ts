import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'form-b',
  standalone: false,
  templateUrl: './form-b.component.html',
  styleUrl: './form-b.component.css'
})
export class FormBComponent {
  protected profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    // ** mapped input type checkbox
    checked: new FormControl(false, []),
    // ** mapped input type radio buttons
    fav_language : new FormControl('', [Validators.required]),
    ingredient : new FormControl('', [Validators.required]),
  });

  protected onSubmit() {
    console.log(this.profileForm); // get all detail of formGroup
    console.log(this.profileForm.value); // get all formControls
    console.log(this.profileForm.valid); // will be true if it follows case required,minLength(10),maxLength(20)
  }
}
