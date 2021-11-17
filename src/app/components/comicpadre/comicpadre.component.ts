import { Component, Input, OnInit} from '@angular/core';
import { Comics } from 'src/app/Models/Comics';
import { ComicsService } from 'src/app/Services/comic.service';

@Component({
  selector: 'app-comicpadre',
  templateUrl: './comicpadre.component.html',
  styleUrls: ['./comicpadre.component.css']
})
export class ComicpadreComponent implements OnInit {

  @Input() comic!: Comics;
  public comicNuevo: any;
  public comics!:Array<Comics>;
  public favorito!: Comics;

  constructor( private _servicecomics:ComicsService) {
    this.comicNuevo = {
      nombre:"",
      imagen:"",
      descripcion:""
    }
   }

  ngOnInit(): void {
    this.comics = this._servicecomics.getComic();
  }

  nuevoComic():void{
    this.comics.push(this.comicNuevo);
  }

  eliminarComic(event:Comics):void{
    var aux = 0;
    for(var i = 0; i < this.comics.length; i++)
    {
      if(this.comics[i] == event)
      {
        aux = i;
      }
    }
    this.comics.splice(aux,1);
  }
  eliminar1Comic():void{
    this.comics.splice(0,1)
  }
  seleccionarFavorito(event:Comics):void{
    this.favorito = event;
  }

  modificarComic(event:Comics):void{
    for(var i = 0; i < this.comics.length; i++)
    {
      if(this.comics[i] == event)
      {
        this.comics[i] = this.comicNuevo;
      }
    }
  }

}
