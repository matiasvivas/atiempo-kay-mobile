import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaNotificacionesPage } from './pagina-notificaciones.page';

describe('PaginaNotificacionesPage', () => {
  let component: PaginaNotificacionesPage;
  let fixture: ComponentFixture<PaginaNotificacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaNotificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
