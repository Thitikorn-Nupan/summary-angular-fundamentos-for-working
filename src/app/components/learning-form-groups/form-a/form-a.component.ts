import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'form-a',
  standalone: false,
  templateUrl: './form-a.component.html',
  styleUrl: './form-a.component.css'
})
export class FormAComponent {

  protected profileForm = new FormGroup({
    // mapped formControlName="<key>" on input tag
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  protected onSubmit() {
    console.log(this.profileForm); // get all detail of formGroup
    console.log(this.profileForm.value); // get all formControls
    console.log(this.profileForm.valid); // get valid default will be true because i don't set it on profileForm object class
  }
}
