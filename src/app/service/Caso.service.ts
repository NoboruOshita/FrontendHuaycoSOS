import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { caso } from "../model/Caso";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { CasosXDepartamentoDTO } from "../model/CasosXDepartamentoDTO";

const base_url = environment.base;
@Injectable({
  providedIn:"root"
})
export class CasoService{
  private url = `${base_url}/caso`
  private listaCambio = new Subject<caso[]>()
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<caso[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(cs:caso) {
    console.log(cs);
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, cs, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva:caso[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }


  //lo que se agrega para el editar
  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<caso>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(cs: caso) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url,cs, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  //para eliminar mensaje
  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });;
  }

          //report
          getCasosByDepartamentos(): Observable<CasosXDepartamentoDTO[]> {
            let token = sessionStorage.getItem("token");
            return this.http.get<CasosXDepartamentoDTO[]>(`${this.url}/Casos_segun_departamento`, {
              headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
            });
          }
}
