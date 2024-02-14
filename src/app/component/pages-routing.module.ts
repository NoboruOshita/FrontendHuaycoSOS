import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { AuthorComponent } from './author/author.component';
import { AuthorCreaeditaComponent } from './author/author-creaedita/author-creaedita.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { tipo_de_casoComponent } from './tipo-de-caso/tipo-de-caso.component';
import { TipoDeCasoCreaeditaComponent } from './tipo-de-caso/tipo-de-caso-creaedita/tipo-de-caso-creaedita.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { UbicacionCreaeditaComponent } from './ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { CuentabancariaComponent } from './cuentabancaria/cuentabancaria.component';
import { cuentabancariaCreaeditaComponent } from './cuentabancaria/cuentabancaria-creaedita/cuentabancaria-creaedita.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MensajeCreaeditaComponent } from './mensaje/mensaje-creaedita/mensaje-creaedita.component';
import { CasoComponent } from './caso/caso.component';
import { CasoCreaeditaComponent } from './caso/caso-creaedita/caso-creaedita.component';
import { RoleComponent } from './role/role.component';
import { RoleCreaeditaComponent } from './role/role-creaedita/role-creaedita.component';
import { DonacionComponent } from './donacion/donacion.component';
import { DonacionCreaeditaComponent } from './donacion/donacion-creaedita/donacion-creaedita.component';
import { EventoCreaeditaComponent } from './evento/evento-creaedita/evento-creaedita.component';
import { EventoComponent } from './evento/evento.component';
import { ReportesComponent } from './reportes/reportes.component';
import { Reportec1Component } from './reportes/reportec1/reportec1.component';
import { Reportec2Component } from './reportes/reportec2/reportec2.component';
import { Reporteu1Component } from './reportes/reporteu1/reporteu1.component';
import { Reporteu2Component } from './reportes/reporteu2/reporteu2.component';
import { InterfazComponent } from './interfaz/interfaz.component';

const routes: Routes = [
  {
    path: 'usuarios', component: UsuarioComponent, children: [
        { path: 'nuevo', component: UsuarioCreaeditaComponent },
        { path: 'edicion/:id', component: UsuarioCreaeditaComponent }
      ],canActivate:[GuardService]
    },

    {
        path: 'autores', component: AuthorComponent, children: [

            { path: 'nuevo', component: AuthorCreaeditaComponent },
            { path: 'edicion/:id', component: AuthorCreaeditaComponent }

        ],canActivate:[GuardService]

    },

          {    path:'Tipos_de_caso',component:tipo_de_casoComponent,children:[
            {
              path:'nuevo',component:TipoDeCasoCreaeditaComponent
            },
            {path:'edicion/:id',component:TipoDeCasoCreaeditaComponent}
          ],canActivate:[GuardService]},
          {
            path:'ubicaciones',component:UbicacionComponent,children:[
           {
             path:'nuevo',component:UbicacionCreaeditaComponent
           },
           {path:'edicion/:id',component:UbicacionCreaeditaComponent}
         ],canActivate:[GuardService]
        },
        {
          path:'cuentabancarias',component:CuentabancariaComponent,children:[
            {
              path:'nuevo',component:cuentabancariaCreaeditaComponent
            },
            {path:'edicion/:id',component:cuentabancariaCreaeditaComponent}
          ],canActivate:[GuardService]
        },
        {
          path:"mensajes",component:MensajeComponent,children:[
            {path:'nuevo',component:MensajeCreaeditaComponent},
            {path:'edicion/:id',component:MensajeCreaeditaComponent}
          ],canActivate:[GuardService]
        },
        {
          path:"caso",component:CasoComponent,children:[
            {path:"nuevo",component:CasoCreaeditaComponent},
            {path:"edicion/:id",component:CasoCreaeditaComponent}
          ],canActivate:[GuardService]
        },
        {
          path:"usuario",component:UsuarioComponent,children:[
            {path:'nuevo',component:UsuarioCreaeditaComponent},
            {path:'edicion/:id',component:UsuarioCreaeditaComponent}
          ],canActivate:[GuardService]
        },
        {
          path:"roles",component:RoleComponent,children:[
            {path:'nuevo',component:RoleCreaeditaComponent},
            {path:'edicion/:id',component:RoleCreaeditaComponent}
          ],canActivate:[GuardService]
        },
        {
          path:"eventos",component:EventoComponent,children:[
            {path:'nuevo',component:EventoCreaeditaComponent},
            {path:'edicion/:id',component:EventoCreaeditaComponent}
          ],canActivate:[GuardService]

        },
        {
          path:"donaciones",component:DonacionComponent,children:[
            {path:'nuevo',component:DonacionCreaeditaComponent},
            {path:'edicion/:id',component:DonacionCreaeditaComponent}
          ],canActivate:[GuardService]
        },
        {
          path:"reportes",component:ReportesComponent,children:[
            {path:'cuenta-count-usuario',component:Reportec1Component},
            {path:'max-cuenta-usuario',component:Reportec2Component},
            {path:'evento-count-usuario',component:Reporteu1Component},
            {path:'departamento-count',component:Reporteu2Component}

          ],canActivate:[GuardService]
        },
        {
          path:"interfaz",component:InterfazComponent,children:[
          ],canActivate:[GuardService]
        }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }

