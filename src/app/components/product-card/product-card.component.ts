import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CatService} from '../../services/cat.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  constructor(protected catService: CatService) {
  }

  @Input() image: string ="";
  @Input() name: string ="";
  @Input() price: number = 0;
  @Input() breed: string ="";

  @Output() onAddToCartInProductCardComponent = new EventEmitter<any>();

  addToCart() {
  this.onAddToCartInProductCardComponent.emit(`cat ${this.name} added to cart`);
    console.log(`cat ${this.name} added to cart`);
}




}
