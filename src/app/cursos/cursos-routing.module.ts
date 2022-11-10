import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCursoComponent } from './components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const rutas: Routes = [
  {path: 'lista-cursos', component:ListaCursosComponent },
  {path: 'editar-curso', component:EditarCursoComponent },
  {path: 'agregar-curso', component:AgregarCursoComponent},
]

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
