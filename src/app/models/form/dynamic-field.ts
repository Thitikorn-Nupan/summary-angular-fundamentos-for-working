import {FormControl} from '@angular/forms';
import {KeyFilterPattern} from 'primeng/keyfilter';

export class DynamicField  {
  public name: string
  public data: FormControl
  public id: string
  public icon: string
  public placeHolder: string
  public pKeyFilter: KeyFilterPattern | null // add later and it can be null

  constructor(name: string, data: FormControl, id: string, icon: string, placeHolder: string) {
    this.name = name;
    this.data = data;
    this.id = id;
    this.icon = icon;
    this.placeHolder = placeHolder;
    this.pKeyFilter = 'alpha'
  }

  public setPkeyFilter(filter: KeyFilterPattern | null) {
    this.pKeyFilter = filter;
    return this
  }
}
