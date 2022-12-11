import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

    item: any;

  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(take(1)).subscribe(paramMap => {
      console.log(paramMap);
      if(!paramMap.has('id')){
        this.navCtrl.back();
        return;
      }
      const id= paramMap.get('id');
      console.log(id);
      this.item= this.cartService.getItem(id);
      console.log(this.item);
    })
  }

}
