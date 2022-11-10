import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CursosModule } from './cursos/cursos.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    ToolbarComponent,
    InicioComponent,
    ToolbarComponent,
    NavbarComponent,
    PaginaNoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,    
    BrowserAnimationsModule,
    AlumnosModule,
    CursosModule,
    AutenticacionModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
