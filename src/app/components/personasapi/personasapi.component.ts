import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from 'src/app/Services/servicepersonas';
import { Persona } from 'src/app/Models/Persona';

@Component({
  selector: 'app-personasapi',
  templateUrl: './personasapi.component.html',
  styleUrls: ['./personasapi.component.css']
})
export class PersonasapiComponent implements OnInit {

  public personas!: Array<Persona>

  constructor(private _service:ServicePersonas) { }

  ngOnInit(): void {
    this._service.getPersonas().subscribe(response => {
      this.personas = response;
    })
  }

}
