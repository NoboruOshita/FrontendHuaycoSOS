import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtRequest } from '../model/jwtRequest';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  usuario:string;
  verificar_cuenta_activa:boolean;

  set_verificar_cuenta_activa(ver:boolean){
    this.verificar_cuenta_activa=ver;
  }
  get_verificar_cuenta_activia(){
    return this.verificar_cuenta_activa;
  }

  set_user(usu:string){
       this.usuario=usu;
  }
  get_user(){
    return this.usuario;
  }

  login(request: JwtRequest) {
    return this.http.post("http://localhost:8080/authenticate", request);
  }


  verificar() {
    let token = sessionStorage.getItem("token");
    return token != null;

  }
  showRole(){
    let token = sessionStorage.getItem("token");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.role;
  }


}
