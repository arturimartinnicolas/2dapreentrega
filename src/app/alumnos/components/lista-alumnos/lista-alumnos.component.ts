import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Observable } from 'rxjs';
import { PersonaService } from '../../services/persona.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos$!: Observable<Persona[]>;

  
  columnas: string[] = ['dni','nombre','fechanacimiento', 'genero', 'acciones']

  constructor( private personaService: PersonaService,private router: Router) { 
  }

  ngOnInit(): void {
    this.alumnos$ = this.personaService.obtenerPersonas();
  }
  eliminarPersona(dni: number){
    this.personaService.eliminarPersona(dni);
  }

  editarPersona(persona: Persona){
    let fechanac = new Date(persona.fechanacimiento).toISOString().slice(0, 10);
    persona.fechanacimiento = fechanac;
    this.router.navigate(['editar-alumno', persona]);
  }
}
