import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProductoModalPagePageRoutingModule } from './detalle-producto-modal-page-routing.module';

import { DetalleProductoModalPagePage } from './detalle-producto-modal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProductoModalPagePageRoutingModule
  ],
  declarations: [DetalleProductoModalPagePage]
})
export class DetalleProductoModalPagePageModule {}
