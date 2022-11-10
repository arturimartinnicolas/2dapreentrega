import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

const rutas: Routes = [
  {path: 'lista-alumnos', component:ListaAlumnosComponent},
  {path: 'editar-alumno',component:EditarAlumnoComponent },
  {path: 'agregar-alumno',component:AgregarAlumnoComponent},
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
