import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.page.html',
  styleUrls: ['./pagina-principal.page.scss'],
})
export class PaginaPrincipalPage implements OnInit {
  @ViewChild('image') imageElement!: ElementRef;

  constructor() { }

  ngOnInit() {
    // Agregar la clase después de un pequeño retraso para permitir que la vista se renderice completamente
    setTimeout(() => {
      if (this.imageElement) {
        this.imageElement.nativeElement.classList.add('fade-in');
      }
    }, 100);
  }
}
