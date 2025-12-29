export class DialogDynamicOption {

  public key : string;
  public draggable : boolean
  public iconFa : string
  public iconColor : any
  public header : string
  public content : string

  constructor(key: string, draggable: boolean, iconFa: string, iconColor: any, header: string, content: string) {
    this.key = key;
    this.draggable = draggable;
    this.iconFa = iconFa;
    this.iconColor = iconColor;
    this.header = header;
    this.content = content;
  }

}
