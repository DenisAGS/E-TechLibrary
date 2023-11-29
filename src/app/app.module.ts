import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { ServiciosLandingComponent } from './servicios-landing/servicios-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaLandingComponent } from './acerca-landing/acerca-landing.component';
import { CatalogoLandingComponent } from './catalogo-landing/catalogo-landing.component';
import { FormsModule } from '@angular/forms';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { CatalogoUsuarioComponent } from './catalogo-usuario/catalogo-usuario.component';
import { ComprasUsuarioComponent } from './compras-usuario/compras-usuario.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { ReservaUsuarioComponent } from './reserva-usuario/reserva-usuario.component';
import { ServiciosUsuarioComponent } from './servicios-usuario/servicios-usuario.component';
import { MiListaUsuarioComponent } from './mi-lista-usuario/mi-lista-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderLandingComponent,
    HomeLandingComponent,
    ServiciosLandingComponent,
    FooterLandingComponent,
    AcercaLandingComponent,
    CatalogoLandingComponent,
    MenuUserComponent,
    EditarPerfilComponent,
    HeaderDashboardComponent,
    CatalogoUsuarioComponent,
    ComprasUsuarioComponent,
    DashboardUsuarioComponent,
    ReservaUsuarioComponent,
    ServiciosUsuarioComponent,
    MiListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OwlModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
