import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoLandingComponent } from './catalogo-landing.component';

describe('CatalogoLandingComponent', () => {
  let component: CatalogoLandingComponent;
  let fixture: ComponentFixture<CatalogoLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
