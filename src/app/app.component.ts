import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://picsum.photos/200';

  onLoaded(img: string){
    console.log('log parent', img);
  }
}
