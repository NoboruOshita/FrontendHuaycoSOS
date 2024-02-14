import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { usuario } from "../model/usuario";
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { usuarioByDonacionDTO } from "../model/UsuarioByDonacionDTO";

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class usuarioService{
  private url=`${base_url}/usuarios`

  private listaCambio= new Subject<usuario[]>()
    constructor(private http:HttpClient) { }
    list(){
      let token = sessionStorage.getItem("token");
      return this.http.get<usuario[]>(this.url, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });
    }
    insert(usuario:usuario){
      let token = sessionStorage.getItem("token");
      return this.http.post(this.url,usuario, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });
    }



    setList(listaNueva:usuario[]){
       this.listaCambio.next(listaNueva);
    }
    getList(){
      return this.listaCambio.asObservable();
    }
    listId(id: number) {
      let token = sessionStorage.getItem("token");
      return this.http.get<usuario>(`${this.url}/${id}`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });
    }
    update(us: usuario) {
      let token = sessionStorage.getItem("token");
      // return this.http.put(this.url + "/" + us.idUsuario,us);
      return this.http.put(this.url,us, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });
    }
    delete(id: number) {
      let token = sessionStorage.getItem("token");
      return this.http.delete(`${this.url}/${id}`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
      });
    }

      //report
  getDonacionesByUser(): Observable<usuarioByDonacionDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<usuarioByDonacionDTO[]>(`${this.url}/donaciones-por-usuario`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
}
