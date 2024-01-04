import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaDestacadosPage } from './pagina-destacados.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaDestacadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaDestacadosPageRoutingModule {}
