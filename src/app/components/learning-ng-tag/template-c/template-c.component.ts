import {Component, Input} from '@angular/core';

@Component({
  selector: 'template-c',
  standalone: false,
  templateUrl: './template-c.component.html',
  styleUrl: './template-c.component.css'
})
export class TemplateCComponent {
  //  'success' | 'info' | 'warn' | 'error' | 'secondary' |
  @Input() severity?: string ;
  @Input() enableWarning: boolean = false;
  @Input() formHeader: string = 'Form Invalid';
  protected enableWarningUs  : boolean = true;
  protected enableWarningEm  : boolean = true;

  protected listenInput(value:any) {
    switch(value.name){
      case 'username':
        if(value.value.length > 0){
          this.enableWarningUs = false;
        }
        break;
       case 'email':
         if(value.value.length > 0){
           this.enableWarningEm = false;
         }
         break;
    }
    // if both warning are false
    if (!this.enableWarningUs && !this.enableWarningEm) {
      this.enableWarning = false
      console.log('correct')
    }
  }

}
