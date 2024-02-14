import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject,Observable } from 'rxjs';
import { evento } from '../model/evento';
import { eventoUsuarioDTO } from '../model/eventoUsuarioDTO';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private url = `${base_url}/eventos`
  private listaCambio = new Subject<evento[]>()
  constructor(private http: HttpClient) {}
list(){
  let token = sessionStorage.getItem("token");
  return this.http.get<evento[]>(this.url, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
insert(even:evento){
  let token = sessionStorage.getItem("token");
  return this.http.post(this.url,even, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
setList(listaNueva:evento[]){
this.listaCambio.next(listaNueva);
}
getList(){
  return this.listaCambio.asObservable();
}
listId(idEvento: number) {
  let token = sessionStorage.getItem("token");
  return this.http.get<evento>(`${this.url}/${idEvento}`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
update(ub: evento) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
  let token = sessionStorage.getItem("token");
  return this.http.put(this.url,ub, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}
delete(idEvento: number) {
  let token = sessionStorage.getItem("token");
  return this.http.delete(`${this.url}/${idEvento}`, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}

getEventoCountByUsuario(): Observable<eventoUsuarioDTO[]> {
  let token = sessionStorage.getItem("token");
  return this.http.get<eventoUsuarioDTO[]>(`${this.url}/evento-count`,{
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  });
}

}
