import { Injectable } from '@angular/core';
import { donacion } from '../model/donacion';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { departamentoxDonacionDTO } from '../model/departamentoxDonacionDTO';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  private url = `${base_url}/donaciones`
  private listaCambio = new Subject<donacion[]>()
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<donacion[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(don:donacion) {
    console.log("PRUEBA",this.url,don);
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, don, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });

  }

  setList(ListaNueva:donacion[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }


  //lo que se agrega para el editar
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<donacion>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });

  }

  update(aut: donacion) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,aut, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });

  }

  //para eliminar mensaje
  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });

  }

    //report
    getdonacionsxDepartamento(): Observable<departamentoxDonacionDTO[]> {
      let token = sessionStorage.getItem("token");
      return this.http.get<departamentoxDonacionDTO[]>(`${this.url}/donaciones-departamento`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });
    }
}


