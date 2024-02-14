import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ubicacion } from '../model/Ubicacion';
import { Subject,Observable } from 'rxjs';
import { ubicacionCountDTO } from '../model/ubicacionCountDTO';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
private url=`${base_url}/ubicaciones`
private listaCambio= new Subject<Ubicacion[]>()
  constructor(private http:HttpClient ) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Ubicacion[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(ubicacion:Ubicacion){
    console.log(this.url,ubicacion);
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url,ubicacion, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva:Ubicacion[]){
this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
  listId(idUbicacion: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Ubicacion>(`${this.url}/${idUbicacion}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(ub: Ubicacion) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,ub, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  delete(idUbicacion: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${idUbicacion}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getDepartamentoCount(): Observable<ubicacionCountDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<ubicacionCountDTO[]>(`${this.url}/ubicacion-count`,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

}
