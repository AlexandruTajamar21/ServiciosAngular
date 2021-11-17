import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { Comics } from 'src/app/Models/Comics';

@Component({
  selector: 'app-comichijo',
  templateUrl: './comichijo.component.html',
  styleUrls: ['./comichijo.component.css']
})
export class ComichijoComponent implements OnInit {

  @Input() comic!: Comics;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter();
  @Output() modificarComic: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  favorito():void{
    this.seleccionarFavorito.emit(this.comic);
    console.log("favorito hijo");
  }
  editar():void{
    this.modificarComic.emit(this.comic);
  }
  eliminar():void{
    this.eliminarComic.emit(this.comic);
    console.log("eliminar hijo");
  }

}
