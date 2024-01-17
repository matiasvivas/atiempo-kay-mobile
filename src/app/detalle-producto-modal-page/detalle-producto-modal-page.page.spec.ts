import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleProductoModalPagePage } from './detalle-producto-modal-page.page';

describe('DetalleProductoModalPagePage', () => {
  let component: DetalleProductoModalPagePage;
  let fixture: ComponentFixture<DetalleProductoModalPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleProductoModalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
