import {Component, Input} from '@angular/core';

@Component({
  selector: 'card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  public imageUrl?: string;
  @Input()
  public titleCard?: string;
  @Input()
  public subTitleCard?: string;
  @Input()
  public contentCard?: string;

  enableCard: boolean = true;

  listenCancel() {
    this.enableCard = false;
  }

}
