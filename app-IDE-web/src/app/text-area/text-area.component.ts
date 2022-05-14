import { Funcion } from './../../clases/tableSimbol/funcion';
import { TipoVar } from '../../clases/tableSimbol/tipo-var';
import { TableSimbol } from '../../clases/tableSimbol/table-simbol';
import { OperationLogica } from './../../clases/expresiones/operation-logica';
import { OperationCasteo } from '../../clases/expresiones/operation-casteo';
import { Component, OnInit } from '@angular/core';
import { ManejoErrors } from 'src/clases/manejoErrors/manejo-errors';
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

  
  constructor() { }

  ngOnInit(): void {
  }


  public recibirTexto(event: Event){
    this.entrada = (<HTMLInputElement>event.target).value
  }

  public analizar(){
    const parser = require("./../../analizador/parserAnalisis.js")
    const parseIns = require("./../../analizador/parserInstru.js")

    //objetos para enviar al parse
    let errores = new ManejoErrors();
    errores.setParser(parser)
    errores.setNombreArch("nombreIterable");
    let opCast = new OperationCasteo(errores);
    let opRelatins = new OperationLogica(errores);
    let table = new TableSimbol(errores);
    let fun!: Funcion
    
    //enviando los objetos con la vaiable yy
    parser.Parser.yy = {opCast:opCast, opRelatins: opRelatins, table:table, tipoVar: TipoVar, errores:errores}
    parseIns.Parser.yy = {opCast:opCast, opRelatins: opRelatins, table:table, tipoVar: TipoVar, errores:errores, fun:fun}
    table.parser = parseIns
    parser.parse(this.entrada);
    errores.imprimiErrores()
    this.salida = this.entrada      
  }
}
