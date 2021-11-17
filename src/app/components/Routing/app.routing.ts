import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { ComicpadreComponent } from "../comicpadre/comicpadre.component";
import { HomeComponent } from "../home/home.component";
import { ComicsinyeccionComponent } from "../comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "../personasapi/personasapi.component";
import { EmpleadosComponent } from "../empleados/empleados.component";
import { Empleados2Component } from "../empleados2/empleados2.component";
import { ListadoempleadosComponent } from "../listadoempleados/listadoempleados.component";
import { DetalleempleadoComponent } from "../detalleempleado/detalleempleado.component";


const appRoutes: Routes = [
    {path:"", component:HomeComponent}
    ,{path:"comicpadre",component:ComicpadreComponent}
    ,{path:"comicsinyectados",component:ComicsinyeccionComponent}
    ,{path:"personasapi",component:PersonasapiComponent}
    ,{path:"empleados",component:EmpleadosComponent}
    ,{path:"empleadosOficio",component:Empleados2Component}
    ,{path:"detalleempleado/:idempleado",component:DetalleempleadoComponent}
    ,{path:"listadoempleados",component:ListadoempleadosComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);