import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  img: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Arecaceae', price: 49.00, amount: 0, img:'assets/ArecaPlant.png'},
    { id: 1, name: 'Coleus', price: 80.00, amount: 0, img:'assets/Coleus.png'},
    { id: 2, name: 'Palmera Plant', price: 63.80, amount: 0, img:'assets/Palmera.png' },
    { id: 3, name: 'Llex Rotunda Plant', price: 66.26, amount: 0, img:'assets/rotunda.png' },
    { id: 4, name: 'Madagascar Plant', price: 33.00, amount: 0, img:'assets/MadagascarPlant.png' },
    { id: 5, name: 'Bush Tree', price: 74.99, amount: 0, img:'assets/BushTree.png' },
    { id: 6, name: 'Monstra Plant', price: 44.99, amount: 0, img:'assets/MonstraPlant.png' },
    { id: 7, name: 'Roundbush', price: 53.00, amount: 0, img:'assets/RoundBush.png' },
    { id: 8, name: 'Wheelbarrow Shrub', price: 40.00, amount: 0, img:'assets/WheelbarrowShrub.png' },
    { id: 9, name: 'Peace Lily', price: 65.00, amount: 0, img:'assets/PeaceLily.png' }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}