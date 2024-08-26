import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { Usuario } from '../../../../shared/models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
              private  snackBar: MatSnackBar,
              private http: HttpClient
  ) { }


  listarUsuarios(): Observable <Usuario[]> {
    return this.http.get<Usuario []>(`{environment.API_URL}/usuarios`, {headers: {"requireToken": "true"}}).pipe(catchError((error) => this.handlerError(error)));
  }

  insertarUsuario(user: Usuario):Observable<Usuario>{ 
    return this.http.post<Usuario>(`${environment.API_URL}/usuario`,  user, {headers: {"requireToken": "true"}})
    .pipe(catchError ((error) => this.handlerError(error)))
   }

  actualizarUsuario(user: Usuario): Observable<Usuario>{ 
    return this.http.put<Usuario>(`${environment.API_URL}/usuario`, user, {headers: {"requireToken": "true"}})
    .pipe(catchError ((error) => this.handlerError(error)))
  }

  eliminarUsuario(id: number): Observable<any>{  
    return this.http.delete<Usuario>(`${environment.API_URL}/usuario/${id}`, {headers: {"requireToken": "true"}})
    .pipe(catchError ((error) => this.handlerError(error)))
  }

  

  private handlerError(error: any){
    var message = "";
    if(error.error) {
      if(error.error.message) message= error.error.message;
      else message = "Ocurrió un error"
    }

    this.snackBar.open(message, '', {
      duration: 3000
    })

    return throwError(() => Error(message));
  }
}
