import {File} from '../models/api/file';

export class FakeDataService {
  private months : string[]
  private files : File[]
  constructor() {
    this.months = []
    this.months.push('January');
    this.months.push('February');
    this.months.push('March');
    this.months.push('April');
    this.months.push('May');
    this.months.push('June');
    this.files = []
    this.files.push({name:'ABC',size:10, type:'file',active:false});
    this.files.push({name:'EFG',size:10, type:'file',active:true})
    this.files.push({name:'HIJ',size:10, type:'file',active:false})
  }


  get retrieveAllMonths ()  {
    return this.months;
  }

  get retrieveAllFiles () {
    return this.files;
  }
}
