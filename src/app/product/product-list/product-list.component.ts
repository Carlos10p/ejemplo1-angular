import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=100;
  imageMargin:number=100;
  muestraImg:boolean=true;
  listFilter:string ='';

  showImage():void{
    this.muestraImg =! this.muestraImg;
  }

  constructor() { }

  ngOnInit(): void {

  }
  productos:IProducto[]=[
    {
      "productoId":1,
      "productoName": "Sentra",
      "Descripcion": "Nuevo nissan Sentra",
      "Ano": "2022",
      "Precio": 12000,
      "Marca": "Nissan",
      "Color": "Negro",
      "imageUrl" : "https://www.informador.mx/__export/1591376300172/sites/elinformador/img/2020/06/05/nissan-sentra-2020-1600-0c_1_crop1591376299435.jpg_1970638775.jpg"
    },
    {
      "productoId":2,
      "productoName": "Vento",
      "Descripcion": "Nuevo vento",
      "Ano": "2022",
      "Precio": 32000,
      "Marca": "Volkswagen",
      "Color": "Azul",
      "imageUrl" : "https://i.blogs.es/f8f00c/a202489_large/840_560.jpg"
    },
    {
      "productoId":3,
      "productoName": "Audi A4",
      "Descripcion": "Nuevo audi",
      "Ano": "2022",
      "Precio": 32000,
      "Marca": "Audi",
      "Color": "Blanco",
      "imageUrl" : "https://i.blogs.es/f8f00c/a202489_large/840_560.jpeg"
    }
  ]
}
