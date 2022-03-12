import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product = {
    name: 'Producto 1',
    image: 'https://source.unsplash.com/random',
    price: 100
  }

  constructor() { }

  ngOnInit(): void {
  }

}
