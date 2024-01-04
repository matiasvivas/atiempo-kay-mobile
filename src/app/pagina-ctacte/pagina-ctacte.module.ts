import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaCtactePageRoutingModule } from './pagina-ctacte-routing.module';

import { PaginaCtactePage } from './pagina-ctacte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaCtactePageRoutingModule
  ],
  declarations: [PaginaCtactePage]
})
export class PaginaCtactePageModule {}
