import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-inicio-splash',
  templateUrl: './inicio-splash.page.html',
  styleUrls: ['./inicio-splash.page.scss'],
})
export class InicioSplashPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ionViewDidEnter() {
    setTimeout(() => {
      // Redirige a tu página principal o cualquier otra página después de reproducir el video.
      this.navCtrl.navigateRoot('/home'); // Ajusta la ruta según tu estructura de navegación.
    }, 6000); // Tiempo en milisegundos que dura el video (ajusta según la duración de tu video).
  }

  ngOnInit() {
    ScreenOrientation.lock({orientation: 'portrait'});
  }

}
