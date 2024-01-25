import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsInterceptor } from './cors-interceptor';
import { User } from './services/user';
import { UserResponse } from './services/userResponse';
import { PaginaPrincipalPageModule } from './pagina-principal/pagina-principal.module';
import { HomePageModule } from './home/home.module';
import { CustomAlertComponent } from './custom-alert/custom-alert.component';
import { PaginaDestacadosPageModule } from './pagina-destacados/pagina-destacados.module';
import { PaginaNotificacionesPageModule } from './pagina-notificaciones/pagina-notificaciones.module';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Storage } from '@ionic/storage-angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { GenericaResponse } from './services/genericaResponse';
import { ProductoRequest } from './services/productoRequest';

@NgModule({
  declarations: [AppComponent, CustomAlertComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, PaginaPrincipalPageModule, HomePageModule, PaginaDestacadosPageModule, PaginaNotificacionesPageModule, HttpClientModule, IonicStorageModule.forRoot()],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true },
    User,
    UserResponse,
    FingerprintAIO,
    Storage,
    GenericaResponse,
    ProductoRequest
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
