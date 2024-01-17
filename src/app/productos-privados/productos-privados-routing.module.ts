import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosPrivadosPage } from './productos-privados.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosPrivadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosPrivadosPageRoutingModule {}
