import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { cuentabancaria } from '../model/cuentabancaria';
import { Subject,Observable } from 'rxjs';
import { cuentaUsuarioDTO } from '../model/cuentaUsuarioDTO';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})

export class cuentabancariaService {
private url=`${base_url}/cuentabancarias`
 private listaCambio = new Subject<cuentabancaria[]>()
 private confirmarEliminacion = new Subject<Boolean>()
 constructor(private http: HttpClient) {}
 list() {
  let token = sessionStorage.getItem("token");
   return this.http.get<cuentabancaria[]>(this.url, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
 }

 insert(cb:cuentabancaria) {
  let token = sessionStorage.getItem("token");
  return this.http.post(this.url, cb, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}

 setList(ListaNueva:cuentabancaria[]) {
   this.listaCambio.next(ListaNueva);
 }

 getList() {
   return this.listaCambio.asObservable();
 }


 //lo que se agrega para el editar
 listId(id: number) {
  let token = sessionStorage.getItem("token");
  return this.http.get<cuentabancaria>(`${this.url}/${id}`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });

}

update(cb: cuentabancaria) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
  let token = sessionStorage.getItem("token");
  return this.http.put(this.url,cb, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });

}


delete(id: number) {
  let token = sessionStorage.getItem("token");
  return this.http.delete(`${this.url}/${id}`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });

}

getCuentaCountByUsuario(): Observable<cuentaUsuarioDTO[]> {
  let token = sessionStorage.getItem("token");
  return this.http.get<cuentaUsuarioDTO[]>(`${this.url}/cuenta-count`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}

getCuentaMaxByUsuario(): Observable<cuentaUsuarioDTO[]> {
  let token = sessionStorage.getItem("token");
  return this.http.get<cuentaUsuarioDTO[]>(`${this.url}/cuenta-max`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}

}
