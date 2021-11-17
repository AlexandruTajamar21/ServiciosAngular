import { Component, OnInit } from '@angular/core';
import { Comics } from 'src/app/Models/Comics';
import { ComicsService } from 'src/app/Services/comic.service';

@Component({
  selector: 'app-comicsinyeccion',
  templateUrl: './comicsinyeccion.component.html',
  styleUrls: ['./comicsinyeccion.component.css'],
})
export class ComicsinyeccionComponent implements OnInit {

  public comics!: Array<Comics>;

  constructor(private _service: ComicsService) { }

  ngOnInit(): void {
    this.comics = this._service.getComic();
  }

}
