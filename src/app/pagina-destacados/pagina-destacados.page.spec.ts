import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaDestacadosPage } from './pagina-destacados.page';

describe('PaginaDestacadosPage', () => {
  let component: PaginaDestacadosPage;
  let fixture: ComponentFixture<PaginaDestacadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaDestacadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
