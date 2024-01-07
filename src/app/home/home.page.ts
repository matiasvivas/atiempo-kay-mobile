import { Component, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';

import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { UserResponse } from '../services/userResponse';
import { HttpErrorResponse } from '@angular/common/http';

import { SharedDataService } from '../services/shared-data.service';
import { Router } from '@angular/router';

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
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    // Agrega la clase 'show' después de que la vista se haya inicializado
    this.renderer.addClass(document.getElementById('container'), 'show');
    this.renderer.addClass(document.getElementById('loginButton'), 'show');
    this.renderer.addClass(document.getElementById('inputAparecer1'), 'show');
    this.renderer.addClass(document.getElementById('inputAparecer2'), 'show');
    this.renderer.addClass(document.getElementById('bienvenidoAparecer'), 'show');
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
          //this.router.navigate('pagina-principal');
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
}
