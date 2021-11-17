import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/Models/Empleado';
import { EmpleadoService } from 'src/app/Services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  @ViewChild("cajasalario") cajasalario!: ElementRef;
  public empleados!: Array<Empleado>;

  constructor(private _service: EmpleadoService) {
  }

  ngOnInit(): void {
  }

  mostrarEmpleados():void{
    var salario = this.cajasalario.nativeElement.value;
    this._service.getEmpleadosSalario(salario).subscribe(response => {
      this.empleados = response;
    })
  }
}
