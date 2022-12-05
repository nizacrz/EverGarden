import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutTheAppPageRoutingModule } from './about-the-app-routing.module';

import { AboutTheAppPage } from './about-the-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutTheAppPageRoutingModule
  ],
  declarations: [AboutTheAppPage]
})
export class AboutTheAppPageModule {}
