import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './component/author/author.component';
import { AuthorCreaeditaComponent } from './component/author/author-creaedita/author-creaedita.component';
import { tipo_de_casoComponent } from './component/tipo-de-caso/tipo-de-caso.component';
import { TipoDeCasoCreaeditaComponent } from './component/tipo-de-caso/tipo-de-caso-creaedita/tipo-de-caso-creaedita.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';
import { UbicacionCreaeditaComponent } from './component/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { cuentabancaria } from './model/cuentabancaria';
import { CuentabancariaComponent } from './component/cuentabancaria/cuentabancaria.component';
import { cuentabancariaCreaeditaComponent } from './component/cuentabancaria/cuentabancaria-creaedita/cuentabancaria-creaedita.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './component/home/home.component';
import { OfferComponent } from './component/offer/offer.component';
import { OfferCreaeditaComponent } from './component/offer/offer-creaedita/offer-creaedita.component';
import { MensajeComponent } from './component/mensaje/mensaje.component';
import { MensajeCreaeditaComponent } from './component/mensaje/mensaje-creaedita/mensaje-creaedita.component';
import { CasoComponent } from './component/caso/caso.component';
import { CasoCreaeditaComponent } from './component/caso/caso-creaedita/caso-creaedita.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import { RoleComponent } from './component/role/role.component';
import { RoleCreaeditaComponent } from './component/role/role-creaedita/role-creaedita.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [

//  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigir la ruta raíz a '/home'
{
  path: '',
  redirectTo: 'login', pathMatch: 'full'
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'pages',
  loadChildren: () => import('./component/pages.module').then((m) => m.PagesModule),
},
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
