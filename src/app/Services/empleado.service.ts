import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Global } from "../Global";
import { Observable } from "rxjs";

@Injectable()
export class EmpleadoService{

    constructor(private _http: HttpClient){}

    getEmpleadosSalario(salario:number): Observable<any>{
        var url = Global.ulrEmpleados + "api/Empleados/EmpleadosSalario/" + salario;
        return this._http.get(url);
    }

    getEmpleadosOficio(oficio:string):Observable<any>{
        var url = Global.ulrEmpleados + "api/Empleados/EmpleadosOficio/" + oficio;
        return this._http.get(url);
    }

    getOficios():Observable<any>{
        var url = Global.ulrEmpleados + "api/Empleados/oficios"
        return this._http.get(url);
    }

    getEmpleado(): Observable<any>{
        var request = "/api/empleados";
        var url  = Global.ulrEmpleados + request;
        return this._http.get(url);
    }

    findEmpleado(idempleado:string): Observable<any>{
        var request = "/api/empleados/" + idempleado;
        var url = Global.ulrEmpleados + request;
        return this._http.get(url);
    }
}
