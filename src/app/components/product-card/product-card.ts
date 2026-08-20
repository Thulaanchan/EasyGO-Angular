import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() productName: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';

  @Output() addToCart = new EventEmitter<string>();

  notifyAddToCart() {
    console.log('Button clicked:', this.productName);
    this.addToCart.emit(this.productName);
  }
}