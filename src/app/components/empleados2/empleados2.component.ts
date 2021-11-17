import { EmpleadoService } from 'src/app/Services/empleado.service';
import { Empleado } from './../../Models/Empleado';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-empleados2',
  templateUrl: './empleados2.component.html',
  styleUrls: ['./empleados2.component.css']
})
export class Empleados2Component implements OnInit {

  @ViewChild("cajaoficio") cajaoficio!: ElementRef;
  public empleados!: Array<Empleado>;
  public oficios!: Array<any>;

  constructor( private _service: EmpleadoService) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(response =>{
      this.oficios = response;
    })
  }

  mostrarEmpleados():void{
    var oficio = this.cajaoficio.nativeElement.value;
    this._service.getEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response;
    })
  }

}
