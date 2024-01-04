import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaCtactePage } from './pagina-ctacte.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaCtactePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaCtactePageRoutingModule {}
