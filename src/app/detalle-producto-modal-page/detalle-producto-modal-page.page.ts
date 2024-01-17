import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-producto-modal-page',
  templateUrl: './detalle-producto-modal-page.page.html',
  styleUrls: ['./detalle-producto-modal-page.page.scss'],
})
export class DetalleProductoModalPagePage {

  @Input() nombre!: string;
  @Input() stock!: number;
  @Input() precio!: number;
  @Input() codigo!: string;

  nuevoStock: number=0;
  nuevoPrecio: number=0;

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }

  modificarProducto() {
    // Aquí puedes implementar la lógica para modificar el producto con los nuevos valores
    console.log('Nuevo Stock:', this.nuevoStock);
    console.log('Nuevo Precio:', this.nuevoPrecio);
  
    // Cerrar el modal después de realizar la modificación
    this.modalController.dismiss();
  }

}
