import { Component, signal } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [ProductList, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  cartCount = signal(0);

  onAddToCart() {
    this.cartCount.update((count) => count + 1);
  }

}