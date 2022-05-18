import { Nodo } from './../../clases/nodo';
import { ArbolExpr } from './../../clases/arbol-expr';
import { Archivos } from './../../clases/archivos';
import { Funcion } from './../../clases/tableSimbol/funcion';
import { TipoVar } from '../../clases/tableSimbol/tipo-var';
import { TableSimbol } from '../../clases/tableSimbol/table-simbol';
import { OperationLogica } from './../../clases/expresiones/operation-logica';
import { OperationCasteo } from '../../clases/expresiones/operation-casteo';
import { Component, OnInit } from '@angular/core';
import { ManejoErrors } from 'src/clases/manejoErrors/manejo-errors';
import { ComunicationService } from '../services/comunication.service';
import { Router } from '@angular/router';
import { GrapsMod } from 'src/clases/graps-mod';
import Swal from 'sweetalert2';

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
  constructor(private router: Router,private comunication:ComunicationService) {
    
   }

  ngOnInit(): void {
    this.archivos = this.comunication.archivos
    this.salida = this.comunication.textSalida

  }



  public analizar(){
    this.settearText("")
    this.textoActual()
    const parser = require("./../../analizador/parserAnalisis.js")
    const parseIns = require("./../../analizador/parserInstru.js")

    //objetos para enviar al parse
    let arbol = new ArbolExpr()
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
    parseIns.Parser.yy = {opCast:opCast, opRelatins: opRelatins, table:table, tipoVar: TipoVar, errores:errores, fun:fun, funciones:funciones, arbol:arbol, nodo:Nodo}
    table.parser = parseIns
    table.parseG = parser
    parser.parse(this.entrada);
    table.valoFuncion("Principal", false, true)
    if (errores.errores.length == 0) {
      this.mensjaOk()
      this.salida = table.textoSalida
      this.comunication.textSalida = this.salida+""
      this.generarDots(arbol)
      this.comunication.errores = errores
    }else{
      this.salida = "Upss hay errores"
      this.comunication.textSalida = ""
      this.comunication.errores = errores
      this.msgError()
      errores.imprimiErrores()
    }
    
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

  public cerrarPestania(index:any){
    this.comunication.archivos.splice(index,1);
    console.log(this.comunication.archivos.length);
    if (this.comunication.archivos.length===0) {
      this.entrada="";
    }else{
      if (this.comunication.archivos[index]===undefined) {
        let archivo = this.comunication.archivos[index-1];
        this.comunication.archivoSelect=archivo;
        this.entrada=archivo.texto;
      }else{
        let archivo = this.comunication.archivos[index];
        this.comunication.archivoSelect=archivo;
        this.entrada=archivo.texto;
      }

    }

  }

  public clicReport(){
    if (this.comunication.errores.errores.length != 0) {
      this.settearText("")
      this.comunication.archivos = this.archivos
      this.comunication.textSalida = this.salida+""
      this.router.navigate(['ReporteErrores'])
    }else{
      this.mensajeSinERR()
    }
  }

  public clickImagenes(){
    if (this.comunication.errores.errores.length == 0) {
      this.settearText("")
      this.comunication.archivos = this.archivos
      this.comunication.textSalida = this.salida+""
      this.router.navigate(['Images-Generadas'])
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: ' Imagenes no generadas por Errores!'
      })
    }
  }

  public generarDots(arbol: ArbolExpr){
    this.comunication.graficasExpresion =  []
    if (arbol.nodos.length!==0) {
    for (let index = 0; index < arbol.nodos.length ; index++) {
      let text = this.recorrer(arbol.nodos[index]);
      this.comunication.graficasExpresion.push(new GrapsMod(text));
      } 
    }
  }


  public recorrer(Nodo:Nodo){
    let texto="";
    let contador =1;
    texto +="digraph {";
    texto+="Node0[label=\""+ Nodo.tipo +" | " + Nodo.valor +"\"];\n"; 
    recorrido("Node0",Nodo);
    texto+="}";
    return texto;
    function recorrido(nodoP:any,nodo:Nodo){
      if (nodo === undefined || nodo === null) return;
        nodo.hijos.forEach(nodito=> {
          if (typeof nodito.tipo === "undefined") return;
            let nombrehijo="Node"+contador;
            texto+=nombrehijo+"[label=\""+nodito.tipo +" | "+nodito.valor +"\"];\n";
            texto+=nodoP+"->"+nombrehijo+";\n";
            contador++;
            recorrido(nombrehijo,nodito);
        })
    }
  }

  public mensajeSinERR(){
    Swal.fire({
      icon: 'error',
      title: 'Oops',
      text: ' No cuentas con errores para mostrar!'
    })
  }

  public mensjaOk(){
    Swal.fire({
      icon: 'success',
      title: 'Excelente',
      text: ' Tus archivos de entrada estan correctos'
    })
  }

  public download(){
    let indes = -1
    for (let index = 0; index < this.comunication.archivos.length; index++) {
      const element = this.comunication.archivos[index];
      if (element.name == this.nameArchivoActual) {
        indes = index
        break
      }
    }
    if (indes != -1) {
      this.descargars(this.comunication.archivos[indes].texto)
    }
    
  }


  public nuevoArchio(){
    let archi = new Archivos("Archivo nuevo :3","Sin titulo.crl")
    this.comunication.archivos.push(archi)
    this.archivos = this.comunication.archivos
    this.nameArchivoActual = archi.name
    this.entrada = archi.texto
  }
  
  public descargars(data:any ){
    const a = document.createElement("a");
    const contenido=data;
    const enlc = new Blob([contenido],{type:"text/plain"})
    const url = window.URL.createObjectURL(enlc);
    a.href=url;
    a.download = this.nameArchivoActual;
    a.click();
    URL.revokeObjectURL(url);
  }

  public msgError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Se han encontrado errores al compilar el los archivos!'
    })

  }

}
