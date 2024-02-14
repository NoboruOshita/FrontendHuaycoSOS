import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { MensajeService } from './service/mensaje.service';
import { MensajeEnviadoDTO } from './model/MensajeEnviadoDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService: LoginService, private mS:MensajeService) {
  }

  title = 'Huaycos';

  // Variable para determinar si la tabla se muestra o no
  tablaVisible = false;

  role:string="";
  usuario:string="";


  cerrar() {
    sessionStorage.clear();
    this.loginService.set_verificar_cuenta_activa(false);
  }

  ngOnInit(): void {

  }
  verificar() {
    this.usuario=this.loginService.get_user();
    this.role=this.loginService.showRole();


    return this.loginService.verificar();
  }
  validarRol(){
    if(this.role=='ADMIN' || this.role=='USER'){
      return true;
    }else{
      return false;
    }
  }
}
