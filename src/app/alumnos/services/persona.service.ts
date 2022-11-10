import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Persona } from '../../models/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private personas: Persona[] = [
    {dni:22222221,nombre: 'Martin', apellido:'Perez', fechanacimiento: '2002-08-01', genero: 'M', correo:'test@test.com'},
    {dni:33333332,nombre: 'Maria', apellido:'Gonzalez',fechanacimiento: '2002-03-01', genero: 'F', correo:'test@test.com'},
    {dni:22221111,nombre: 'Jose', apellido:'Ruiz', fechanacimiento: '2001-10-01', genero: 'M', correo:'test@test.com'},
    {dni:29999991,nombre: 'Luis', apellido:'Loreto', fechanacimiento: '2002-11-01', genero: 'M', correo:'test@test.com'},
    {dni:29993331,nombre: 'Carlos', apellido:'Fernandez', fechanacimiento: '2001-12-24', genero: 'M', correo:'test@test.com'},
  ]
  private personasSubject: BehaviorSubject<Persona[]>;

  constructor() {
    this.personasSubject = new BehaviorSubject<Persona[]>(this.personas);
  }

  obtenerPersonas(): Observable<Persona[]>{
    return this.personasSubject.asObservable();
  }

  obtenerPersona(dni: number): Observable<Persona[]>{
    return this.obtenerPersonas().pipe(
      map((personas: Persona[]) => personas.filter((personas: Persona) => personas.dni === dni))
    )
  }

  agregarPersona(persona: Persona){
    this.personas.push(persona);
    this.personasSubject.next(this.personas);
  }

  editarPersona(persona: Persona){
    let indice = this.personas.findIndex((p: Persona) => p.dni === persona.dni);

    if(indice > -1){
      this.personas[indice] = persona;
    }

    this.personasSubject.next(this.personas);
  }

  eliminarPersona(dni: number){
    let indice = this.personas.findIndex((p: Persona) => p.dni === dni);

    if(indice > -1){
      this.personas.splice(indice, 1);
    }

    this.personasSubject.next(this.personas);
  }
}
