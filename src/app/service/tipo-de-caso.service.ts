import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tipo_de_caso } from '../model/tipo-de-caso';
import { Observable, Subject } from 'rxjs';
import { TipoDeCasoxCasosDTO } from '../model/TipoDeCasoxCasosDTO';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class tipo_de_casoService {
private url=`${base_url}/tipodecaso`
private listaCambio = new Subject<tipo_de_caso[]>()

  constructor(private http:HttpClient ) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<tipo_de_caso[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(Tipo_Caso:tipo_de_caso){
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,Tipo_Caso, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(ListaNueva:tipo_de_caso[]){
    this.listaCambio.next(ListaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  //lo que se agrega para el editar
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<tipo_de_caso>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(tp: tipo_de_caso) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, tp, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //para eliminar damnificado
  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });;
  }
        //report
        getTiposdecasoByCasos(): Observable<TipoDeCasoxCasosDTO[]> {
          let token = sessionStorage.getItem("token");
          return this.http.get<TipoDeCasoxCasosDTO[]>(`${this.url}/casos-x-tipo-de-casos`, {
            headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
          });
        }

}
