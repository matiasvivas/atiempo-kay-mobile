import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleProductoModalPagePage } from './detalle-producto-modal-page.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProductoModalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProductoModalPagePageRoutingModule {}
