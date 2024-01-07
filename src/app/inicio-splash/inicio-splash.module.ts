import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSplashPageRoutingModule } from './inicio-splash-routing.module';

import { InicioSplashPage } from './inicio-splash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSplashPageRoutingModule
  ],
  declarations: [InicioSplashPage]
})
export class InicioSplashPageModule {}
