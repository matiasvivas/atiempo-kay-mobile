import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNotificacionesPage } from './pagina-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaNotificacionesPageRoutingModule {}
