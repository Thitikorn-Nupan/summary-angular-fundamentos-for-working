import {FormControl} from '@angular/forms';

export class DynamicInputTextField {
  public name: string
  public data: FormControl
  public id: string
  public label: string
  public typeInput: string
  public placeHolder: string | null

  constructor(name:string,data: FormControl, id: string, label: string, typeInput: string, placeHolder: string | null) {
    this.name = name;
    this.data = data;
    this.id = id;
    this.label = label;
    this.typeInput = typeInput;
    this.placeHolder = placeHolder;
  }

}
