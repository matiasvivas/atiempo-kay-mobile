import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { UserResponse } from '../services/userResponse';
import { ScreenOrientation } from '@capacitor/screen-orientation';

@Component({
  selector: 'app-productos-privados',
  templateUrl: './productos-privados.page.html',
  styleUrls: ['./productos-privados.page.scss'],
})
export class ProductosPrivadosPage implements OnInit {

  productosPrivados: { productosPriv: any[] } = { productosPriv: [] };
  userResponse: UserResponse = new UserResponse();
  originalProductosPrivados: any[] = []; 

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {

    ScreenOrientation.lock({orientation: 'portrait'});

    const response = this.sharedDataService.getUserResponse();

    this.userResponse = new UserResponse();
    this.userResponse.productosPriv = response?.productosPriv || [];
    this.obtenerProductosPrivados();
  }

  obtenerProductosPrivados() {
    if (Array.isArray(this.userResponse.productosPriv)) {
      this.productosPrivados.productosPriv = this.userResponse.productosPriv;
      this.originalProductosPrivados = [...this.productosPrivados.productosPriv];
    } else {
      console.error('Error: this.userResponse.productosPriv no es un array');
      this.productosPrivados.productosPriv = [];
    }

  }

  buscarProductos(event: any) {
    const textoBusqueda = event.detail.value.trim().toLowerCase();
  
    // Si no hay texto de búsqueda, mostrar la lista completa
    if (textoBusqueda === '') {
      this.productosPrivados.productosPriv = [...this.originalProductosPrivados];
    } else {
      // Realizar la búsqueda de manera eficiente utilizando filter y toLowerCase
      this.productosPrivados.productosPriv = this.originalProductosPrivados.filter(item => 
        item.nombre.toLowerCase().includes(textoBusqueda)
      );
    }
  }
  

}
