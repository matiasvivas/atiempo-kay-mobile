import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMensajesPage } from './pagina-mensajes.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMensajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMensajesPageRoutingModule {}
