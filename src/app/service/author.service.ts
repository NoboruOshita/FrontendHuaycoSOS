import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Author } from '../model/author';
import { Subject } from 'rxjs';

const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private url = `${base_url}/authors`;
  private listaCambio = new Subject<Author[]>();
  constructor(private http: HttpClient) {}
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Author[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(author: Author) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, author);
  }

  setList(ListaNueva: Author[]) {
    this.listaCambio.next(ListaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    return this.http.get<Author>(`${this.url}/${id}`);
  }

  update(aut: Author) { //http HttpClientModule: get-post-put-delete, hacer cuadro comparativo
   // return this.http.put(this.url + '/' + aut.idAuthor, aut); esto funca para cuando es json nomas
   return this.http.put(this.url, aut)
  }


  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
