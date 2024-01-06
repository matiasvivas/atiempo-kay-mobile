import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaMensajesPage } from './pagina-mensajes.page';

describe('PaginaMensajesPage', () => {
  let component: PaginaMensajesPage;
  let fixture: ComponentFixture<PaginaMensajesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaMensajesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
