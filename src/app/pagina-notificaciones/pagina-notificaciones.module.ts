import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaNotificacionesPageRoutingModule } from './pagina-notificaciones-routing.module';

import { PaginaNotificacionesPage } from './pagina-notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaNotificacionesPageRoutingModule
  ],
  declarations: [PaginaNotificacionesPage]
})
export class PaginaNotificacionesPageModule {}
