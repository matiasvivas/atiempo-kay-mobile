import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SharedDataService } from './services/shared-data.service';
import { UserResponse } from './services/userResponse';
import { Plugins } from '@capacitor/core';

const { App } = Plugins;
const { StatusBar } = Plugins;
const { navigationBar } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  public appPages = [
    { title: 'Inicio', url: '/pagina-principal', icon: 'home' },
    { title: 'Mi cuenta corriente', url: '/pagina-ctacte', icon: 'cash' },
    //{ title: 'Notificaciones', url: '/pagina-notificaciones', icon: 'notifications' },
    { title: 'Productos destacados', url: '/pagina-destacados', icon: 'medal' },
    //{ title: 'Mis descuentos', url: '/pagina-mensajes', icon: 'heart-half' },
    //{ title: 'Productos privados', url: '/productos-privados', icon: 'medal' },
    { title: 'Productos privados', url: '/productos-privados', icon: 'medal', showForUser: 'Mati & Sol' },
    
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
        this.updateMenuOptions(response.nombre);
      }
    });

  }

  updateMenuOptions(userName: string) {
    // Filtra las opciones del menú según el nombre del usuario
    this.appPages = this.appPages.filter((page) =>
      (page.showForUser ? userName === page.showForUser : true)
    );
  }

  ngOnInit() {
    this.initializeApp();
  }

  async initializeApp() {
    await StatusBar['setBackgroundColor']({ color: '#458cf4' });
    await navigationBar['setNavigationBarColor']({ color: '#458cf4' });
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
