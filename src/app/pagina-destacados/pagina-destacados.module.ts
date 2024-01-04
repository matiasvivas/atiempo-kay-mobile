import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaDestacadosPageRoutingModule } from './pagina-destacados-routing.module';

import { PaginaDestacadosPage } from './pagina-destacados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaDestacadosPageRoutingModule
  ],
  declarations: [PaginaDestacadosPage]
})
export class PaginaDestacadosPageModule {}
