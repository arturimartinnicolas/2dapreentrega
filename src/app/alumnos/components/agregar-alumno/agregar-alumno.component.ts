import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.css']
})
export class AgregarAlumnoComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private personaService: PersonaService,
    private router: Router
  ) { 
    this.formulario = fb.group({
      dni: new FormControl('', [Validators.pattern('^[0-9]{8}$'), Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.pattern('^[a-z]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      fechanacimiento: new FormControl(new Date()), // Current Date
      genero: new FormControl()
    });
  }

  ngOnInit(): void {
  }
  agregarPersona(){
    const persona: Persona = {
      dni: this.formulario.value.dni,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechanacimiento: this.formulario.value.fechanacimiento.toISOString().slice(0, 10),
      genero: this.formulario.value.genero,
      correo: this.formulario.value.correo
    }
    this.personaService.agregarPersona(persona);
    this.router.navigate(['lista-alumnos'])
  }
  
}
