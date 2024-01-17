import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosPrivadosPage } from './productos-privados.page';

describe('ProductosPrivadosPage', () => {
  let component: ProductosPrivadosPage;
  let fixture: ComponentFixture<ProductosPrivadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductosPrivadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
