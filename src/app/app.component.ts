import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SharedDataService } from './services/shared-data.service';
import { UserResponse } from './services/userResponse';
import { Plugins } from '@capacitor/core';

const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  public appPages = [
    { title: 'Inicio', url: '/pagina-principal', icon: 'bookmark' },
    { title: 'Mensajes', url: '/pagina-mensajes', icon: 'mail' },
    { title: 'Notificaciones', url: '/pagina-notificaciones', icon: 'paper-plane' },
    { title: 'Destacados', url: '/pagina-destacados', icon: 'heart' },
    { title: 'Mi cuenta corriente', url: '/pagina-ctacte', icon: 'archive' },
  ];
  public labels = ['Por la mañana 9hs a 14hs',
    'Por la tarde 18hs a 22hs'
  ];

  nombre: string = "";

  constructor(private router: Router, private menuController: MenuController,
    private sharedDataService: SharedDataService) {

    this.sharedDataService.userResponse$.subscribe(response => {
      if (response && response.nombre) {
        this.nombre = response.nombre;
      }
    });

  }

  abrirWhatsApp() {
    const telefono = '3434664555';
    const mensaje = encodeURIComponent('Hola, Kiosco Ayacucho! Quisiera hacerles una consulta desde la aplicación mobile.');
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    // Utilizar la API de navegación de Capacitor
    (App as any)['openUrl']({ url }); // Acceder a la propiedad usando ['openUrl']
  }

  cerrarSesion() {
    this.sharedDataService.setUserResponse(null);
    this.sharedDataService.setUserResponseSubject(new UserResponse);
    this.menuController.close();
    this.router.navigate(['/home']);
  }
}
