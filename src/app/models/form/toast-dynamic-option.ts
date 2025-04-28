import {ToastMessageOptions} from 'primeng/api';

export class ToastDynamicOption implements ToastMessageOptions{
  public key : string;
  public severity : string;
  public header : string;
  public summary : string;
  public sticky : boolean;
  public iconFa : string;
  public iconColor : any;

  constructor(key:string,severity:string,header:string,summary:string,sticky:boolean,iconFa:string,iconColor:any) {
    this.key = key;
    this.severity = severity;
    this.header = header;
    this.summary = summary;
    this.sticky = sticky;
    this.iconFa = iconFa;
    this.iconColor = iconColor;
  }

}
