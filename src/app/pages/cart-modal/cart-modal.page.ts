import { Product, CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }
  // emptyCart(product){
  //   this.cartService.clearCart(product);
  // }

  

  async checkout() {
    // Perfom PayPal or Stripe checkout process

    let alert = await this.alertCtrl.create
    ({
      header: 'Thank you for your order!',
      message: 'You just made our business grow, and for that we are grateful! We will deliver your order as soon as possible.',
      buttons: [ 
        {  
        text: 'Cancel',  
        role: 'cancel',  
        handler: () => {  
          console.log('Confirm Cancel');  
        }
      },
        {
          text: 'Yes',
          handler: () => {
             this.cart=this.cartService.clearCart();
            // this.cartItemCount = this.cartService.clearCart();
          }  }]
    });
    alert.present().then(() => {
      
      this.modalCtrl.dismiss();
    });
    
  }
}