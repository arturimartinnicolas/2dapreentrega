import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Curso } from '../../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Angular',
      comision: '32310',
      profesor: 'Keven',
      fechaInicio:'2022-08-01',
      fechaFin: '2022-12-01',
      inscripcionAbierta: true,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 2,
      nombre: 'Angular',
      comision: '32320',
      profesor: 'Fernando',
      fechaInicio: '2022-03-01',
      fechaFin: '2022-09-01',
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 3,
      nombre: 'ReactJS',
      comision: '33310',
      profesor: 'Arturo',
      fechaInicio: '2022-01-01',
      fechaFin: '2022-06-01',
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 4,
      nombre: 'VueJS',
      comision: '34310',
      profesor: 'Lautaro',
      fechaInicio: '2022-11-01',
      fechaFin: '2022-12-21',
      inscripcionAbierta: false,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    }
  ];
  private cursosSubject: BehaviorSubject<Curso[]>;

  constructor() {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
  }

  obtenerCursos(): Observable<Curso[]>{
    return this.cursosSubject.asObservable();
  }

  obtenerCurso(id: number): Observable<Curso[]>{
    return this.obtenerCursos().pipe(
      map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id))
    )
  }

  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }

  editarCurso(curso: Curso){
    let indice = this.cursos.findIndex((c: Curso) => c.id === curso.id);

    if(indice > -1){
      this.cursos[indice] = curso;
    }

    this.cursosSubject.next(this.cursos);
  }

  eliminarCurso(id: number){
    let indice = this.cursos.findIndex((c: Curso) => c.id === id);

    if(indice > -1){
      this.cursos.splice(indice, 1);
    }

    this.cursosSubject.next(this.cursos);
  }
}
