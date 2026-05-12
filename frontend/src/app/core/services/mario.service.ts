import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  
  constructor(private http: HttpClient) { }

  // APUNTAR A NODE
  //apiUrl = 'http://localhost:3000/personaje';

  // APUNTAR A LARAVEL
  apiUrl = 'http://localhost:8000/api/personajes';

  // Método CRUD
  // Crear un nuevo personaje
  createPersonaje(datos: any) {
    return this.http.post(this.apiUrl, datos);
  }

  getPersonajes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}