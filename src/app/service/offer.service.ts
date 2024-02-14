import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { offer } from '../model/offer';
import { Subject } from 'rxjs';
import { cantidadService } from './cantidadoffers.service';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class offerService {
private url=`${base_url}/offers`
private listaCambio = new Subject<offer[]>()
  constructor(private http:HttpClient, public a:cantidadService ) { }

  list() {
    return this.http.get<offer[]>(this.url);
  }

  insert(damnificado:offer) {
    return this.http.post(this.url, damnificado);
  }

  setList(ListaNueva:offer[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }


  //lo que se agrega para el editar
  listId(id: number) {
    return this.http.get<offer>(`${this.url}/${id}`);
  }

  update(aut: offer) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
    return this.http.put(this.url + '/' + aut.id, aut);
  }

  //para eliminar damnificado
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
