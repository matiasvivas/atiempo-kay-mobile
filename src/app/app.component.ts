import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/folder/inbox', icon: 'mail' },
    { title: 'Notificaciones', url: '/pagina-notificaciones', icon: 'paper-plane' },
    { title: 'Destacados', url: '/pagina-destacados', icon: 'heart' },
    { title: 'Mi cuenta corriente', url: '/pagina-ctacte', icon: 'archive' },
    { title: 'Nuestras Marcas', url: '/pagina-principal', icon: 'bookmark' },
  ];
  public labels = ['Por la mañana 9hs a 14hs',
    'Por la tarde 18hs a 22hs'
  ];

  constructor(private router: Router, private menuController: MenuController) {}

  cerrarSesion() {
    this.menuController.close();
    this.router.navigate(['/home']);
  }
}
