import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { role } from '../model/role';
import { MensajesByRolDTO } from '../model/MensajesByRolDTO';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class roleService {
  private url = `${base_url}/roles`
  private listaCambio = new Subject<role[]>()
  constructor(private http: HttpClient) {}
  list() {
   let token = sessionStorage.getItem("token");
    return this.http.get<role[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(men:role) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, men, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva:role[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }


  //lo que se agrega para el editar
  listId(idrole: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<role>(`${this.url}/${idrole}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(aut: role) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,aut, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //para eliminar role
  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //report
  getMensajesPorRol(): Observable<MensajesByRolDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<MensajesByRolDTO[]>(`${this.url}/mensajes-por-rol-count`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
