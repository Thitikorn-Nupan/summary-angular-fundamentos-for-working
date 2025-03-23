import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../../../models/api/country';

@Component({
  selector: 'data-list',
  standalone: false,
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent implements OnInit {

  // only public can do
  @Input()
  public countries!: Country[];

  protected selectedCountry!: Country;

  ngOnInit() {
    // this.countries = [
    //   {name: 'Australia', code: 'AU'},
    //   {name: 'Brazil', code: 'BR'},
    //   {name: 'China', code: 'CN'},
    //   {name: 'Egypt', code: 'EG'},
    //   {name: 'France', code: 'FR'},
    //   {name: 'Germany', code: 'DE'},
    //   {name: 'India', code: 'IN'},
    //   {name: 'Japan', code: 'JP'},
    //   {name: 'Spain', code: 'ES'},
    //   {name: 'United States', code: 'US'}
    // ];
  }

  public changeCountry(countries: Country[]): void {
    this.countries = countries;
  }

  protected listenSelect(country: Country) {
    console.log(country);
  }

}
