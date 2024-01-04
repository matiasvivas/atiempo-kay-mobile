import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCtactePage } from './pagina-ctacte.page';

describe('PaginaCtactePage', () => {
  let component: PaginaCtactePage;
  let fixture: ComponentFixture<PaginaCtactePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaCtactePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
