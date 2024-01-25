import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductoRequest } from '../services/productoRequest';
import { SharedDataService } from '../services/shared-data.service';
import { UserService } from '../services/user.service';
import { GenericaResponse } from '../services/genericaResponse';
import { AlertsService } from '../services/alerts.service';
import { CustomAlertComponent } from '../custom-alert/custom-alert.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detalle-producto-modal-page',
  templateUrl: './detalle-producto-modal-page.page.html',
  styleUrls: ['./detalle-producto-modal-page.page.scss'],
})
export class DetalleProductoModalPagePage implements OnInit {

  username: string = "";
  token: string = "";

  @Input() nombre!: string;
  @Input() stock!: number;
  @Input() precio!: number;
  @Input() codigo!: string;

  nuevoStock: number=0;
  nuevoPrecio: number=0;

  constructor(private modalController: ModalController,
    private productoRequest: ProductoRequest,
    private sharedDataService: SharedDataService,
    private userService: UserService,
    private genericaResponse: GenericaResponse,
    private alerts: AlertsService
    ) {}

    ngOnInit() {
      const response = this.sharedDataService.getUserResponse();
      this.username = response?.nombre || "";
      this.token = response?.token || "";
    }

  cerrarModal() {
    this.modalController.dismiss();
  }

  modificarProducto() {

    let alertMessage: string;
    let alertImage: string;

    this.productoRequest = {
      username: '40406688',
      codigo: this.codigo,
      precioNuevo: this.nuevoPrecio,
      stockNuevo: this.nuevoStock,
      token: this.token
    };

    // Aquí puedes implementar la lógica para modificar el producto con los nuevos valores
    console.log('Nuevo Stock:', this.nuevoStock);
    console.log('Nuevo Precio:', this.nuevoPrecio);

    this.userService.postProducto(this.productoRequest).subscribe(
      async (response: GenericaResponse) => {
        console.log("Resp: ",response.resp);
        console.log("Msj: ",response.msj);

        if (response && response.resp) {

          alertMessage = response.msj;
          alertImage = 'assets/icon/correcto.png';

        } else {
          alertMessage = response.msj;;
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
        }, 1000);
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
    // Cerrar el modal después de realizar la modificación
    this.modalController.dismiss();
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
    }, 1000);
  }

}
