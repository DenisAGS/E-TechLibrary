import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiListaUsuarioComponent } from './mi-lista-usuario.component';

describe('MiListaUsuarioComponent', () => {
  let component: MiListaUsuarioComponent;
  let fixture: ComponentFixture<MiListaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiListaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
