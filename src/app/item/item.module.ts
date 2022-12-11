import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {SwiperModule} from 'swiper/angular';
import { ItemPageRoutingModule } from './item-routing.module';
import { ItemPage } from './item.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPageRoutingModule,
    SwiperModule
  ],
  declarations: [ItemPage]
  
})
export class ItemPageModule {}
