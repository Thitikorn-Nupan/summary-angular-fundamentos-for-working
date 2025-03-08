import {Component, OnInit} from '@angular/core';

interface Product {
  Id: number;
  Name:string
  Category:string
  Quantity:number
}

interface Colum {
  C1:string;
  C2:string;
  C3:string;
  C4:string;
}



@Component({
  selector: 'template-a',
  standalone: false,
  templateUrl: './template-a.component.html',
  styleUrl: './template-a.component.css'
})
export class TemplateAComponent implements OnInit {

  ngOnInit(): void {


    const product:Product = {
      Id:100,
      Name:'string',
      Category:'string',
      Quantity:500
    }
    const product2:Product = {
      Id:101,
      Name:'string',
      Category:'string',
      Quantity:500
    }

    this.products = [product,product2];

    const colum : Colum = {
      C1 :'Id',
      C2:'Name',
      C3:'Category',
      C4:'Quantity'
    }
  }
  protected columns: Colum[] | undefined;
  protected products: Product[] | undefined;
}
