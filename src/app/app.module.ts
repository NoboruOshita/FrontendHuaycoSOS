import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthorComponent } from './component/author/author.component';
import { AuthorListarComponent } from './component/author/author-listar/author-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { tipo_de_casoComponent } from './component/tipo-de-caso/tipo-de-caso.component';
import { tipo_de_casoListarComponent } from './component/tipo-de-caso/tipo-de-caso-listar/tipo-de-caso-listar.component';
import { UbicacionComponent } from './component/ubicacion/ubicacion.component';
import { UbicacionlistarComponent } from './component/ubicacion/ubicacion-listar/ubicacion-listar.component';
import { CuentabancariaComponent } from './component/cuentabancaria/cuentabancaria.component';
import { cuentabancaria } from './model/cuentabancaria';
import { cuentabancariaListarComponent } from './component/cuentabancaria/cuentabancaria-listar/cuentabancaria-listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorCreaeditaComponent } from './component/author/author-creaedita/author-creaedita.component';
import {MatInputModule} from '@angular/material/input'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { TipoDeCasoCreaeditaComponent } from './component/tipo-de-caso/tipo-de-caso-creaedita/tipo-de-caso-creaedita.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UbicacionCreaeditaComponent } from './component/ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { cuentabancariaCreaeditaComponent } from './component/cuentabancaria/cuentabancaria-creaedita/cuentabancaria-creaedita.component';
import { MatToolbar, MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './component/menu/menu.component';
import { InterfazComponent } from './component/interfaz/interfaz.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './component/home/home.component';
import { OfferComponent } from './component/offer/offer.component';
import { OfferListarComponent } from './component/offer/offer-listar/offer-listar.component';
import { OfferCreaeditaComponent } from './component/offer/offer-creaedita/offer-creaedita.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { DialogEliminarComponent } from './component/offer/offer-creaedita/dialog-eliminar/dialog-eliminar.component';
import { MensajeComponent } from './component/mensaje/mensaje.component';
import { MensajeListarComponent } from './component/mensaje/mensaje-listar/mensaje-listar.component';
import { MensajeCreaeditaComponent } from './component/mensaje/mensaje-creaedita/mensaje-creaedita.component';
import { MatSelectModule } from '@angular/material/select';
import { CasoComponent } from './component/caso/caso.component';
import { CasoListarComponent } from './component/caso/caso-listar/caso-listar.component';
import { CasoCreaeditaComponent } from './component/caso/caso-creaedita/caso-creaedita.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreaeditaComponent } from './component/usuario/usuario-creaedita/usuario-creaedita.component';
import { RoleComponent } from './component/role/role.component';
import { RoleListarComponent } from './component/role/role-listar/role-listar.component';
import { RoleCreaeditaComponent } from './component/role/role-creaedita/role-creaedita.component';
import { LoginComponent } from './component/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    MenuComponent,
    InterfazComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
      MatFormFieldModule,
      MatToolbarModule,
      MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatSortModule,
    MatSelectModule,
    MatSnackBarModule,
    MatBadgeModule
  ],
  exports:[
    MatToolbar,
    MatToolbarRow,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
