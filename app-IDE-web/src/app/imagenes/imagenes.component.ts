import { GrapsMod } from './../../clases/graps-mod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicationService } from '../services/comunication.service';
import html2canvas from 'html2canvas';
import {graphviz} from 'd3-graphviz';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  
  listaGraficos!:GrapsMod[];
  imagenCreada: any;
  mostrarB=false;
  constructor(private router: Router,private comunication:ComunicationService) {
    this.listaGraficos = this.comunication.graficasExpresion
   }

  ngOnInit(): void {

  }


  agregarGraficos(){
    this.mostrarB=true;
    for (let index = 0; index < this.comunication.graficasExpresion.length; index++) {
      this.graficar(index+1,this.comunication.graficasExpresion[index].dot);
      
    }
  }


  graficar(div:any,dot:any){

    graphviz("#graph"+div).renderDot(dot);

  }


  descargar(index:any){
   
    html2canvas(document.querySelector("#graph"+index) as HTMLHtmlElement).then(canvas =>{
     this.imagenCreada = canvas.toDataURL();
     const a = document.createElement("a");
     a.href=canvas.toDataURL();
     a.download="";
     a.click();
     URL.revokeObjectURL(this.imagenCreada);
    })

  }
}
