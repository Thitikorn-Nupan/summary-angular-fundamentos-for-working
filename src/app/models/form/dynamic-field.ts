import {FormControl} from '@angular/forms';
import {KeyFilterPattern} from 'primeng/keyfilter';

export class DynamicField  {
  public name: string
  public data: FormControl
  public id: string
  public icon: string
  public placeHolder: string
  public pKeyFilter: KeyFilterPattern | null // add later and it can be null
  public isEmpty: boolean // add later and it can be null
  public optionDropdown : any
  public optionRadio : any
  public optionCheckbox : any

  constructor(name: string, data: FormControl, id: string, icon: string, placeHolder: string) {
    this.name = name;
    this.data = data;
    this.id = id;
    this.icon = icon;
    this.placeHolder = placeHolder;
    this.pKeyFilter = 'alpha'
    this.isEmpty = false
    this.optionDropdown = null
    this.optionRadio = null
    this.optionCheckbox = null
  }


  public setPkeyFilter(filter: KeyFilterPattern | null) {
    this.pKeyFilter = filter;
    return this
  }

  public setIsEmpty(condition: boolean) {
    this.isEmpty = condition;
    if (this.isEmpty) {
      this.name = 'empty';
      this.data = new FormControl<any>('empty');
    }
    return this
  }

  public setOptionDropdown(option: { name : string , code : string } []) {
    this.optionDropdown = option;
    return this
  }

  public setOptionRadio(option: { name : string , key : string } []) {
    this.optionRadio = option;
    return this
  }

  public setOptionCheckbox(option: { name : string , key : string } []) {
    this.optionCheckbox = option;
    return this
  }
}
