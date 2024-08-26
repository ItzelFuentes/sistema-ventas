/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  // Create
  createUsuario(usuario: any): Observable<any> {
    return this.http.post('localhost:3000/api/usuario', usuario);
  }

  // Read All
  getUsuarios(): Observable<any> {
    return this.http.get('localhost:3000/api/usuario');
  }

  // Read One
  getUsuario(id: number): Observable<any> {
    return this.http.get('localhost:3000/api/usuario/:id');
  }

  // Update
  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put('localhost:3000/api/usuario/:id', usuario);
  }

  // Delete
  deleteUsuario(id: number): Observable<any> {
    return this.http.delete('localhost:3000/api/usuario/:id');
  }

}*/