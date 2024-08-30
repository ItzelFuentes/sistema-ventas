import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { Usuario } from '../../../../shared/models/usuario.interface';
import { Rol } from '../../../../shared/models/rol.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  private getHeaders() {
    const token = localStorage.getItem('authToken');
    console.log('Token:', token); // Verifica que el token esté presente
    return new HttpHeaders({
      'Authorization': `Bearer ${token}` // Asegúrate de que esté en el formato correcto
    });
  }


  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.API_URL}/usuarios`, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  listarRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${environment.API_URL}/general/roles`, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  insertarUsuario(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.API_URL}/usuarios`, user, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  actualizarUsuario(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.API_URL}/usuarios`, user, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  eliminarUsuario(cveUsuario: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${environment.API_URL}/usuarios/${cveUsuario}`, { headers: this.getHeaders() })
      .pipe(catchError((error) => this.handlerError(error)));
  }

  private handlerError(error: any) {
    console.log(error);
    let message = "Ocurrió un error";
    if (error.error) {
      if (error.error.message) message = error.error.message;
      else message = "Ocurrió un error";
    }

    this.snackBar.open(message, '', {
      duration: 3000
    });

    return throwError(() => new Error(message));
  }
}
