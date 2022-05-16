import { Archivos } from './../../clases/archivos';
import { Funcion } from './../../clases/tableSimbol/funcion';
import { TipoVar } from '../../clases/tableSimbol/tipo-var';
import { TableSimbol } from '../../clases/tableSimbol/table-simbol';
import { OperationLogica } from './../../clases/expresiones/operation-logica';
import { OperationCasteo } from '../../clases/expresiones/operation-casteo';
import { Component, OnInit } from '@angular/core';
import { ManejoErrors } from 'src/clases/manejoErrors/manejo-errors';
import { ComunicationService } from '../services/comunication.service';
//se declar un require any para poder usarlo
declare  var require:  any;


@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  
  salida!: String;
  entrada!: String;
  selectedFile: File | null = null;
  nameArchivoActual!: string
  archivos:Array<Archivos> = new Array
  constructor(private comunication:ComunicationService) { }

  ngOnInit(): void {
    this.archivos = this.comunication.archivos

  }



  public analizar(){
    this.settearText("")
    this.textoActual()
    const parser = require("./../../analizador/parserAnalisis.js")
    const parseIns = require("./../../analizador/parserInstru.js")

    //objetos para enviar al parse
    let errores = new ManejoErrors();
    errores.setNombreArch(this.nameArchivoActual);
    let opCast = new OperationCasteo(errores);
    let opRelatins = new OperationLogica(errores);
    let table = new TableSimbol(errores,this.archivos);
    let fun!: Funcion
    let funciones: Array<Funcion> = new Array
    table.nombresImports.push(this.nameArchivoActual)
    //enviando los objetos con la vaiable yy
    parser.Parser.yy = {opCast:opCast, opRelatins: opRelatins, table:table, tipoVar: TipoVar, errores:errores}
    parseIns.Parser.yy = {opCast:opCast, opRelatins: opRelatins, table:table, tipoVar: TipoVar, errores:errores, fun:fun, funciones:funciones}
    table.parser = parseIns
    table.parseG = parser
    parser.parse(this.entrada);
    table.valoFuncion("Principal", false, true)
    this.salida = table.textoSalida
    errores.imprimiErrores()
  }


  private textoActual(){
    for (let index = 0; index < this.comunication.archivos.length; index++) {
      const archivo = this.comunication.archivos[index];
      if (this.nameArchivoActual == archivo.name) {
        this.entrada = archivo.texto
        archivo.yaCompilado = true
      }
    }
    this.archivos = this.comunication.archivos
  }



  public fileUploadInAngular(event: Event) {
    
    const files = (event.target as  HTMLInputElement).files;
    if (files != null) {
      this.selectedFile = files.item(0);
    }  
    this.mprimir()  
  }

   public mprimir(){
     if ('undefined' != typeof this.nameArchivoActual) {
       this.settearText("")
     }
    let fileReader = new FileReader();
    let text = this.selectedFile?.text();

    fileReader.onload = (e) =>{
      const contenido = e.target?.result;   
      this.entrada=fileReader.result+"";
    }
    if (this.selectedFile!=null) {
    fileReader.readAsText(this.selectedFile); 
    }else{
      console.log("archivo nulo");
      
    }
    if (this.entrada != "") {
      this.comunication.archivos.push(new Archivos(this.entrada+"", this.selectedFile?.name+""))
      this.archivos = this.comunication.archivos
      this.nameArchivoActual = this.selectedFile?.name+""
    }
  }

  public settearText(name:string){
    for (let index = 0; index < this.comunication.archivos.length; index++) {
      const archivo = this.comunication.archivos[index];
      if (archivo.name == this.nameArchivoActual) {
        archivo.texto = this.entrada+""
        break
      }
    }
    this.archivos = this.comunication.archivos
    for (let index = 0; index < this.comunication.archivos.length; index++) {
      const archivo = this.comunication.archivos[index];
      if (name == archivo.name) {
        this.nameArchivoActual = archivo.name
        this.entrada = archivo.texto
      }
    }

  }


}
