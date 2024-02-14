import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagesRoutingModule } from './pages-routing.module';
import { AuthorComponent } from './author/author.component';
import { AuthorCreaeditaComponent } from './author/author-creaedita/author-creaedita.component';
import { AuthorListarComponent } from './author/author-listar/author-listar.component';
import { tipo_de_casoComponent } from './tipo-de-caso/tipo-de-caso.component';
import { tipo_de_casoListarComponent } from './tipo-de-caso/tipo-de-caso-listar/tipo-de-caso-listar.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { UbicacionlistarComponent } from './ubicacion/ubicacion-listar/ubicacion-listar.component';
import { CuentabancariaComponent } from './cuentabancaria/cuentabancaria.component';
import { cuentabancariaListarComponent } from './cuentabancaria/cuentabancaria-listar/cuentabancaria-listar.component';
import { TipoDeCasoCreaeditaComponent } from './tipo-de-caso/tipo-de-caso-creaedita/tipo-de-caso-creaedita.component';
import { UbicacionCreaeditaComponent } from './ubicacion/ubicacion-creaedita/ubicacion-creaedita.component';
import { cuentabancariaCreaeditaComponent } from './cuentabancaria/cuentabancaria-creaedita/cuentabancaria-creaedita.component';
import { MenuComponent } from './menu/menu.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { OfferListarComponent } from './offer/offer-listar/offer-listar.component';
import { OfferCreaeditaComponent } from './offer/offer-creaedita/offer-creaedita.component';
import { DialogEliminarComponent } from './offer/offer-creaedita/dialog-eliminar/dialog-eliminar.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MensajeListarComponent } from './mensaje/mensaje-listar/mensaje-listar.component';
import { CasoComponent } from './caso/caso.component';
import { MensajeCreaeditaComponent } from './mensaje/mensaje-creaedita/mensaje-creaedita.component';
import { CasoListarComponent } from './caso/caso-listar/caso-listar.component';
import { CasoCreaeditaComponent } from './caso/caso-creaedita/caso-creaedita.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreaeditaComponent } from './usuario/usuario-creaedita/usuario-creaedita.component';
import { RoleComponent } from './role/role.component';
import { RoleListarComponent } from './role/role-listar/role-listar.component';
import { RoleCreaeditaComponent } from './role/role-creaedita/role-creaedita.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { DonacionComponent } from './donacion/donacion.component';
import { DonacionListarComponent } from './donacion/donacion-listar/donacion-listar.component';
import { DonacionCreaeditaComponent } from './donacion/donacion-creaedita/donacion-creaedita.component';
import { EventoComponent } from './evento/evento.component';
import { EventoCreaeditaComponent } from './evento/evento-creaedita/evento-creaedita.component';
import { EventoListarComponent } from './evento/evento-listar/evento-listar.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTabsModule} from '@angular/material/tabs';
import { ReportesComponent } from './reportes/reportes.component';
import { Reportec1Component } from './reportes/reportec1/reportec1.component';
import { Reportec2Component } from './reportes/reportec2/reportec2.component';
import { Reporteu1Component } from './reportes/reporteu1/reporteu1.component';
import { Reporteu2Component } from './reportes/reporteu2/reporteu2.component';
@NgModule({
  declarations: [
    AuthorComponent,
    AuthorListarComponent,
    tipo_de_casoComponent,
    tipo_de_casoListarComponent,
    UbicacionComponent,
    UbicacionlistarComponent,
    CuentabancariaComponent,
    cuentabancariaListarComponent,
    AuthorCreaeditaComponent,
    TipoDeCasoCreaeditaComponent,
    UbicacionCreaeditaComponent,
    cuentabancariaCreaeditaComponent,


    HomeComponent,
    OfferComponent,
    OfferListarComponent,
    OfferCreaeditaComponent,
    DialogEliminarComponent,
    MensajeComponent,
    MensajeListarComponent,
    MensajeCreaeditaComponent,
    CasoComponent,
    CasoListarComponent,
    CasoCreaeditaComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreaeditaComponent,
    RoleComponent,
    RoleListarComponent,
    RoleCreaeditaComponent,
    DonacionComponent,
    DonacionListarComponent,
    DonacionCreaeditaComponent,
    EventoComponent,
    EventoListarComponent,
    EventoCreaeditaComponent,
    ReportesComponent,
    Reportec1Component,
    Reportec2Component,
    Reporteu1Component,
    Reporteu2Component,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    PagesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatTabsModule
  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
