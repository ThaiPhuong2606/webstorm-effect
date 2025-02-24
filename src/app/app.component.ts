import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {CatService} from './services/cat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-demo02';

  constructor(private catService: CatService) {
          console.log(this.catService.cats)
  }

  get cats() {
    return this.catService.cats;
  }
}

