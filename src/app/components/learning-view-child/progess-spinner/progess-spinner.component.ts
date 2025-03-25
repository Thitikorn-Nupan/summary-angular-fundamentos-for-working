import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'progess-spinner',
  standalone: false,
  templateUrl: './progess-spinner.component.html',
  styleUrl: './progess-spinner.component.css'
})
export class ProgessSpinnerComponent implements AfterViewInit , OnInit {

  @Input()
  loadingDelaySecond : number = 1;
  protected enable: boolean = true;
  @Input()
  animationSpinner: string = "0.1s";

  constructor() {
    // if i do this.processLoading() on constructor
    // it will be 1 sec.
  }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    this.processLoading()
  }

  protected processLoading() {
    setTimeout( () => {
      this.enable = false
    }, this.loadingDelaySecond * 1000 );
  }
}
