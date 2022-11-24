import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RgprodPageRoutingModule } from './rgprod-routing.module';

import { RgprodPage } from './rgprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RgprodPageRoutingModule
  ],
  declarations: [RgprodPage]
})
export class RgprodPageModule {}
