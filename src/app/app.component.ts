import { Component } from '@angular/core';
import { Product } from './models/product.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/200';
  products: Product [] = [
    {
      id: '1',
      name: 'Producto 1',
      image: 'https://source.unsplash.com/random',
      price: 100
    },
    {
      id: '2',
      name: 'Producto 2',
      image: 'https://source.unsplash.com/random',
      price: 100
    },
    {
      id: '3',
      name: 'Producto 3',
      image: 'https://source.unsplash.com/random',
      price: 100
    },
    {
      id: '4',
      name: 'Producto 4',
      image: 'https://source.unsplash.com/random',
      price: 100
    }
  ];

  onLoaded(img: string){
    console.log('log parent', img);
  }
}
