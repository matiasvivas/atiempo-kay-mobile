import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { UserResponse } from '../services/userResponse';

@Component({
  selector: 'app-pagina-ctacte',
  templateUrl: './pagina-ctacte.page.html',
  styleUrls: ['./pagina-ctacte.page.scss'],
})
export class PaginaCtactePage implements OnInit {
  cuentaCorriente: { ctacte: any[] } = { ctacte: [] };
  totalMontoPendiente: number = 0;
  userResponse: UserResponse = new UserResponse();

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    const response = this.sharedDataService.getUserResponse();

    this.userResponse = new UserResponse();
    this.userResponse.ctacte = response?.ctacte || [];
    this.obtenerDatosCuentaCorriente();
  }

  obtenerDatosCuentaCorriente() {
    if (Array.isArray(this.userResponse.ctacte)) {
      this.cuentaCorriente.ctacte = this.userResponse.ctacte;
    } else {
      console.error('Error: this.userResponse.ctacte no es un array');
      this.cuentaCorriente.ctacte = [];
    }

    this.calcularTotalMontoPendiente();
  }

  calcularTotalMontoPendiente() {
    if (Array.isArray(this.cuentaCorriente.ctacte) && this.cuentaCorriente.ctacte.length > 0) {
      this.totalMontoPendiente = this.cuentaCorriente.ctacte.reduce(
        (total: number, item: { montoPendiente: number }) => total + item.montoPendiente,
        0
      );
    } else {
      console.error('Error: cuentaCorriente.ctacte no es un array o está vacío');
      this.totalMontoPendiente = 0;
    }
  }
}
