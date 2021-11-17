import { Injectable } from "@angular/core";
import { Comics } from "../Models/Comics";

@Injectable()
export class ComicsService{
    getComic():any{
        var comics = new Array<Comics>();
        comics = [
            new Comics(
                "Spiderman",
                "https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg",
                "Hombre araña"
              ),
              new Comics(
                "Wolverine",
                "https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg",
                "Lobezno"
              ),
              new Comics(
                "Guardianes de la Galaxia",
                "https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg",
                "Yo soy Groot"
              ),
              new Comics(
              "Avengers",
              "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
              "Los Vengadores"
              ),
              new Comics(
              "Spawn",
              "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
              "Todd MacFarlane"
              )
        ]
        return comics;
    }
}