import { Component, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pagina-destacados',
  templateUrl: './pagina-destacados.page.html',
  styleUrls: ['./pagina-destacados.page.scss'],
})
export class PaginaDestacadosPage implements AfterViewInit  {
  @ViewChild('container', { static: false }) container!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.container) {
      const containerElement = this.container.nativeElement;
      const carousel = containerElement.querySelector(".image-carousel");

      setInterval(() => {
        const firstCard = carousel.firstElementChild.cloneNode(true);
        carousel.style.transition = "transform 1s ease-in-out";
        carousel.style.transform = `translateX(-${firstCard.clientWidth}px)`;

        setTimeout(() => {
          carousel.style.transition = "none";
          carousel.appendChild(firstCard);
          carousel.removeChild(carousel.firstElementChild);
          carousel.style.transform = "translateX(0)";
        }, 1000);
      }, 2000);
    }
  }

}
