import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioSplashPage } from './inicio-splash.page';

describe('InicioSplashPage', () => {
  let component: InicioSplashPage;
  let fixture: ComponentFixture<InicioSplashPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioSplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
