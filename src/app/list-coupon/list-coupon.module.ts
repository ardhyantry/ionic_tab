import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCouponPageRoutingModule } from './list-coupon-routing.module';

import { ListCouponPage } from './list-coupon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCouponPageRoutingModule
  ],
  declarations: [ListCouponPage]
})
export class ListCouponPageModule {}
