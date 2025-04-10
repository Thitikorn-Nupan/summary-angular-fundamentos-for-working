import {FormControl} from '@angular/forms';

export class DynamicField  {
  public name: string
  public data: FormControl
  public id: string
  public icon: string
  public placeHolder: string

  constructor(name: string, data: FormControl, id: string, icon: string, placeHolder: string) {
    this.name = name;
    this.data = data;
    this.id = id;
    this.icon = icon;
    this.placeHolder = placeHolder;
  }
}
