import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaLandingComponent } from './acerca-landing.component';

describe('AcercaLandingComponent', () => {
  let component: AcercaLandingComponent;
  let fixture: ComponentFixture<AcercaLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
