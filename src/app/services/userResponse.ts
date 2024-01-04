export class UserResponse {
    usuario: boolean = false;
    ctacte: Array<CtacteItem> = [];
    nombre: string = '';
  }
  
  export class CtacteItem {
    fechaHora: string = '';
    detalle: string = '';
    montoPendiente: number = 0;
  }
  