import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { mensaje } from '../model/mensaje';
import { MensajeEnviadoDTO } from '../model/MensajeEnviadoDTO';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private url = `${base_url}/mensajes`
  private listaCambio = new Subject<mensaje[]>()
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<mensaje[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(men:mensaje) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, men, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva:mensaje[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }


  //lo que se agrega para el editar
  listId(idMensaje: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<mensaje>(`${this.url}/${idMensaje}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(aut: mensaje) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,aut, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //para eliminar mensaje
  delete(idMensaje: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${idMensaje}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //reportes
//este si funca
  getMensajesEnviados(username: String): Observable<MensajeEnviadoDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<MensajeEnviadoDTO[]>(`${this.url}/msg_enviados?username=${username}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //este si funca
  getMensajesRecibidos(username: String): Observable<MensajeEnviadoDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<MensajeEnviadoDTO[]>(`${this.url}/msg_recibidos?username=${username}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //este no funca
  getTotalMensajesCount(): Observable<number> {
    let token = sessionStorage.getItem("token");
    return this.http.get<number>(`${this.url}/total_mensajes`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

}
