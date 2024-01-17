export class UserResponse {
    usuario: boolean = false;
    ctacte: Array<CtacteItem> = [];
    productosPriv: Array<ProductoPrivItem> = [];
    nombre: string = '';
  }
  
  export class CtacteItem {
    fechaHora: string = '';
    detalle: string = '';
    montoPendiente: number = 0;
  }

  export class ProductoPrivItem {
    codigo: string = '';
    nombre: string = '';
    stock: number = 0;
    precio: number = 0;
  }
  