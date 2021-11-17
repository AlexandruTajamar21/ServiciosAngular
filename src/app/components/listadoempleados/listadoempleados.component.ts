import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/Services/empleado.service';
import { Empleado } from 'src/app/Models/Empleado';

@Component({
  selector: 'app-listadoempleados',
  templateUrl: './listadoempleados.component.html',
  styleUrls: ['./listadoempleados.component.css']
})
export class ListadoempleadosComponent implements OnInit {

  public empleados!: Array<Empleado>;

  constructor(private _service: EmpleadoService) { }

  ngOnInit(): void {
    this._service.getEmpleado().subscribe(response =>{
      this.empleados = response;
    })
  }

  muestraDetalles(id:number):void{

  }

}
