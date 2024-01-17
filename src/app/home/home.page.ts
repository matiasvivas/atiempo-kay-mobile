import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';

import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { UserResponse } from '../services/userResponse';
import { HttpErrorResponse } from '@angular/common/http';

import { SharedDataService } from '../services/shared-data.service';
import { Router } from '@angular/router';

import { AlertsService } from '../services/alerts.service';
import { StorageService } from '../services/storage.service';
//import { Storage } from '@ionic/storage-angular';

import { ScreenOrientation } from '@capacitor/screen-orientation';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: string = '';
  contrasena: string = '';

  nombre: string = "";

  constructor(
    private modalController: ModalController,
    private userService: UserService,
    private userObject: User,
    private router: Router,
    private sharedDataService: SharedDataService,
    private renderer: Renderer2,
    private alerts: AlertsService,
    private storage: StorageService,
    private faio: FingerprintAIO
  ) { }

  ngOnInit() {
    ScreenOrientation.lock({orientation: 'portrait'});
    this.storage.init();
  }

  ngAfterViewInit() {
    // Agrega la clase 'show' después de que la vista se haya inicializado
    this.renderer.addClass(document.getElementById('container'), 'show');
    this.renderer.addClass(document.getElementById('loginButton'), 'show');
    this.renderer.addClass(document.getElementById('inputAparecer1'), 'show');
    this.renderer.addClass(document.getElementById('inputAparecer2'), 'show');
    this.renderer.addClass(document.getElementById('bienvenidoAparecer'), 'show');
  }

  ionViewWillEnter() {
    //this.unLock()
  }

  async iniciarSesion() {
    let alertMessage: string;
    let alertImage: string;

    this.userObject = {
      username: this.usuario,
      password: this.contrasena,
    };

    this.userService.postUsers(this.userObject).subscribe(
      async (response: UserResponse) => {
        console.log("Acceso: ",response.usuario);

        if (response && response.usuario) {
          console.log("Nombre: ",response.nombre);
          this.nombre = response.nombre;
          this.sharedDataService.setUserResponseSubject(response);

          alertMessage = 'Credenciales válidas';
          alertImage = 'assets/icon/correcto.png';

          // Almacenar la respuesta del usuario en el servicio
          this.sharedDataService.setUserResponse(response);
          // Redirigir a la nueva página solo si las credenciales son válidas y el icono es correcto
          this.router.navigateByUrl('pagina-principal');

          let usuarioEligioRecordar = true;
          if (usuarioEligioRecordar) {
            await this.storage.set('user_credentials', {
              username: this.usuario,
              password: this.contrasena,
            });
            console.log("STORAGE: ",this.storage);
            console.log("STORAGE user_credentials: ",this.storage.get('user_credentials'));
           
          }

        } else {
          alertMessage = 'Credenciales inválidas';
          alertImage = 'assets/icon/incorrecto.png';
        }

        const modal = await this.modalController.create({
          component: CustomAlertComponent,
          componentProps: {
            message: alertMessage,
            image: alertImage,
          },
        });

        await modal.present();

        // Cerrar la modal después de 3 segundos
        setTimeout(() => {
          modal.dismiss();
        }, 3000);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);

        // En caso de error, mostrar una modal de error
        this.presentErrorModal();
      }
    );  
  }


  async iniciarSesionFinger() {

    // Mostrar el diálogo de huella digital antes de enviar las credenciales
  try {
    const storedCredentials = await this.storage.get('user_credentials');
    if(storedCredentials!=null){

    const result = await this.faio.show({
      title: 'Autenticación Biométrica',
      description: 'Utiliza tu huella digital para iniciar sesión.',
      fallbackButtonTitle: 'Utilizar contraseña',
      disableBackup: true,
    });
  

    // Autenticación biométrica exitosa, puedes continuar con el inicio de sesión
    console.log('Autenticación biométrica exitosa: ', result);
    console.log('Contenido de fingerPrint: ', result.withFingerprint);
    // Iniciar sesión solo si la autenticación biométrica es exitosa
    if (result=="biometric_success") {
      console.log('Ingreso al if');
      // Recuperar las credenciales asociadas con la huella digital
      const storedCredentials = await this.storage.get('user_credentials');
      console.log('Valor de storedCredentials: ',storedCredentials);
    
      if (storedCredentials!=null) {
        // Utilizar las credenciales para continuar con el inicio de sesión
        this.usuario = storedCredentials.username;
        this.contrasena = storedCredentials.password;
        console.log("STORAGE GET username: ",this.usuario);
    
        // Continuar con el proceso de inicio de sesión
        await this.iniciarSesionValidar();

      }
    }
  }

  } catch (error) {
    // Manejar errores de autenticación biométrica
    console.error('Error en la autenticación biométrica', error);

    // También puedes mostrar un mensaje al usuario
    this.alerts.toastInfo('Error en la autenticación biométrica 2');
  }

  
  }

  


  async presentErrorModal() {
    const modal = await this.modalController.create({
      component: CustomAlertComponent,
      componentProps: {
        message: 'Error al autenticar',
        image: 'assets/icon/incorrecto.png',
      },
    });

    await modal.present();

    // Cerrar la modal después de 2 segundos
    setTimeout(() => {
      modal.dismiss();
    }, 2000);
  }

  async iniciarSesionValidar() {

    let alertMessage: string;
    let alertImage: string;

    this.userObject = {
      username: this.usuario,
      password: this.contrasena,
    };

    this.userService.postUsers(this.userObject).subscribe(
      async (response: UserResponse) => {
        console.log("Acceso: ",response.usuario);

        if (response && response.usuario) {
          console.log("Nombre: ",response.nombre);
          this.nombre = response.nombre;
          this.sharedDataService.setUserResponseSubject(response);

          alertMessage = 'Credenciales válidas';
          alertImage = 'assets/icon/correcto.png';

          // Almacenar la respuesta del usuario en el servicio
          this.sharedDataService.setUserResponse(response);
          // Redirigir a la nueva página solo si las credenciales son válidas y el icono es correcto
          this.router.navigateByUrl('pagina-principal');

        } else {
          alertMessage = 'Credenciales inválidas';
          alertImage = 'assets/icon/incorrecto.png';
        }

        const modal = await this.modalController.create({
          component: CustomAlertComponent,
          componentProps: {
            message: alertMessage,
            image: alertImage,
          },
        });

        await modal.present();

        // Cerrar la modal después de 3 segundos
        setTimeout(() => {
          modal.dismiss();
        }, 3000);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);

        // En caso de error, mostrar una modal de error
        this.presentErrorModal();
      }
    ); 
  }

}
