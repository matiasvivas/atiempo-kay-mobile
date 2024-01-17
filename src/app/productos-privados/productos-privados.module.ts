import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPrivadosPageRoutingModule } from './productos-privados-routing.module';

import { ProductosPrivadosPage } from './productos-privados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPrivadosPageRoutingModule
  ],
  declarations: [ProductosPrivadosPage]
})
export class ProductosPrivadosPageModule {}
