import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {
  num1='';
  num2='';
  resultados: number=0;
  imprimir='';
  texto: string[]=[];

  sumar(){
    this.resultados =parseInt(this.num1)+parseInt(this.num2);
  }

  multiplicar(){
    let numero:number = parseInt(this.num1);
    let texto : string[]=[];
    for(let i=1; i<=10; i++){
        this.resultados = numero * i;
        texto.push ( i+' x '+numero+' = '+this.resultados);
    }
    this.texto = texto;
    console.log(texto);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
