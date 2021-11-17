import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComicpadreComponent } from './components/comicpadre/comicpadre.component';
import { ComichijoComponent } from './components/comichijo/comichijo.component';
import { appRoutingProviders, routing } from './components/Routing/app.routing';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './Services/comic.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component'
import { ServicePersonas } from './Services/servicepersonas';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadoService } from './Services/empleado.service';
import { Empleados2Component } from './components/empleados2/empleados2.component';
import { ListadoempleadosComponent } from './components/listadoempleados/listadoempleados.component';
import { DetalleempleadoComponent } from './components/detalleempleado/detalleempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ComicpadreComponent,
    ComichijoComponent,
    HomeComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadosComponent,
    Empleados2Component,
    ListadoempleadosComponent,
    DetalleempleadoComponent
  ],
  imports: [
    HttpClientModule,BrowserModule,routing,FormsModule
  ],
  providers: [appRoutingProviders,ComicsService,ServicePersonas, EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
