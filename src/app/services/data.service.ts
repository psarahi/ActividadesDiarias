import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Actividades } from '../Modelos/actividades';
import { Proyectos } from '../Modelos/proyectos';
import { forkJoin, Observable } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {

    return forkJoin(
      this.http.get<Actividades>(`${apiUrl}/Actividades_Vista?filter[where][ID_Proyecto]=18`),
      this.http.get<Proyectos>(`${apiUrl}/Proyectos_Vista`)
    );

  }

  verificar(usuario, password) {
    console.log(`${apiUrl}/EMPLEADOS?filter[where][Activo]=1&filter[where][Nombre_Usuario]=${usuario}&filter[where][Password]=${password}`);

    return this.http.get(`${apiUrl}/EMPLEADOS?filter[where][Activo]=1&filter[where][Nombre_Usuario]=${usuario}&filter[where][Password]=${password}`);

  }
}
