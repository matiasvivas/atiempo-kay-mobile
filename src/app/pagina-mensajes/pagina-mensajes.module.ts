import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaMensajesPageRoutingModule } from './pagina-mensajes-routing.module';

import { PaginaMensajesPage } from './pagina-mensajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMensajesPageRoutingModule
  ],
  declarations: [PaginaMensajesPage]
})
export class PaginaMensajesPageModule {}
