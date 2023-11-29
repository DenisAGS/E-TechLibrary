import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';
import { ServiciosLandingComponent } from './servicios-landing/servicios-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { AcercaLandingComponent } from './acerca-landing/acerca-landing.component';
import { CatalogoLandingComponent } from './catalogo-landing/catalogo-landing.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { ReservaUsuarioComponent } from './reserva-usuario/reserva-usuario.component';
import { MiListaUsuarioComponent } from './mi-lista-usuario/mi-lista-usuario.component';
import { ComprasUsuarioComponent } from './compras-usuario/compras-usuario.component';
import { CatalogoUsuarioComponent } from './catalogo-usuario/catalogo-usuario.component';
import { ServiciosUsuarioComponent } from './servicios-usuario/servicios-usuario.component';
import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'header-landing',
    component: HeaderLandingComponent
  },
  {
    path: 'servicios-landing',
    component: ServiciosLandingComponent
  },
  {
    path: 'footer-landing',
    component: FooterLandingComponent
  },
  {
    path: 'acerca-landing',
    component: AcercaLandingComponent
  },
  {
    path: 'catalogo-landing',
    component: CatalogoLandingComponent
  },
  {
    path: 'menu',
    component: MenuUserComponent
  },
  {
    path: 'editar-cuenta',
    component: EditarPerfilComponent
  },
  {
    path: 'mi-lista-usuario',
    component: MiListaUsuarioComponent
  },
  {
    path: 'reserva-usuario',
    component: ReservaUsuarioComponent
  },
  {
    path: 'compras-usuario',
    component: ComprasUsuarioComponent
  },
  {
    path: 'servicio-usuario',
    component: ServiciosUsuarioComponent
  },
  {
    path: 'catalogo-usuario',
    component: CatalogoUsuarioComponent
  },
  {
    path: 'dashboard-usuario',
    component: DashboardUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
