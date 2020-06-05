import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private urlEndPoint = 'http://localhost:8080/api/clientes';
  // private httpHeader: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

  getClients(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }

  getClient(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  createClient(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint,cliente);
  }

  updateClient(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}/${cliente.id}`, cliente);
  }

  deleteClient(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`);
  }
}
