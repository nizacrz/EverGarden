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
    { id: 0, name: 'Monstera', price: 666.00, amount: 0, img:'assets//PRODUCTS/Monstera deliciosa.png'},
    { id: 1, name: 'Gardenia', price: 466.00, amount: 0, img:'assets/PRODUCTS/Gardenia.png'},
    { id: 2, name: 'Moonlight', price: 366.80, amount: 0, img:'assets/PRODUCTS/Moonlight Pothos.png' },
    { id: 3, name: 'Starfish Plant', price: 200.26, amount: 0, img:'assets/PRODUCTS/Dwarf Starfish.png' },
    { id: 4, name: 'Peace Lily', price: 440.00, amount: 0, img:'assets/PRODUCTS/Peace Lily.png' },
    { id: 5, name: 'Rubber Tree', price: 799.99, amount: 0, img:'assets/PRODUCTS/Rubber Tree.png' },
    { id: 6, name: 'Torch Mikado', price: 365.99, amount: 0, img:'assets/PRODUCTS/Torch Mikado.png' },
    { id: 7, name: 'Bromeliad', price: 660.00, amount: 0, img:'assets/PRODUCTS/Bromeliad.png' },
    { id: 8, name: 'Snake Plant', price: 299.00, amount: 0, img:'assets/PRODUCTS/Sansevieria.png' },
    { id: 9, name: 'Echeveria', price: 459.00, amount: 0, img:'assets/PRODUCTS/Echeveria Lola.png' }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }
  getProduct(id){
    const product = this.data.find(x => x.id == id);
    return product;
  }
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