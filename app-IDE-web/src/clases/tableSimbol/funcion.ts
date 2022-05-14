import { Si } from './../instrucciones/si';
import { TipoInstruc } from './../instrucciones/tipo-instruc';
import { Instruccion } from './../instrucciones/instruccion';
import { ManejoErrors } from 'src/clases/manejoErrors/manejo-errors';
import { TipoVar } from './tipo-var';
import { Variables } from "./variables"

export class Funcion {

    variables: Array<Variables>
    identificado: String
    tipo:TipoVar
    retorno: any = null 
    parametros: Array<Variables>
    errores: ManejoErrors
    instrucciones :string = ""
    instrucs : Instruccion = new Instruccion(1, TipoInstruc.LIBRE)
    scope = 0
    itemsMostrar: Array<string> = new Array


    constructor(identificador: String, tipo: TipoVar, errores: ManejoErrors){
        this.variables = new Array
        this.identificado = identificador
        this.tipo = tipo
        this.parametros = new Array
        this.errores = errores;
    }

    public isFuncion(): boolean{
        return this.tipo != TipoVar.VOID
    }


    public retornoBasura(): any{
        let retorns
        switch (this.tipo) {
            case TipoVar.BOOLEAN:
                retorns = false
                break;
            case TipoVar.INT:
                retorns = 0
                break;
            case TipoVar.DOUBLE:
                retorns = 0.1
                break;
            case TipoVar.STRING:
                retorns = "ssss"
                break;
            case TipoVar.CHAR:
                retorns = "s"
                break
            default:
                break;
        }

        return retorns
    }
    
    public paramRepit(identificador:string): boolean{
        let repetido = false
        for (let index = 0; index < this.parametros.length; index++) {
            const parametro = this.parametros[index];
            if (identificador == parametro.nombre) {
                this.errores.capturarErrorSemantico("Parametro repetido en la funcion: "+this.identificado)
                repetido = true
                break
            }
        }

        return repetido
    }

    public indexVariable(identificador:string): number{
        let varia = this.parametros
        let pos = -1
        varia = varia.concat(this.variables)
        for (let index = 0; index < varia.length; index++) {
            const variable = varia[index];
            if (identificador == variable.nombre) {
                pos = index
                break
            }
        }

        return pos
    }
    
    public varExistente(identeificador: string): boolean {
        let yaExiste = false
        let varia = this.parametros
        varia = varia.concat(this.variables)
        for (let index = 0; index < varia.length; index++) {
            const variable = varia[index];
            if (variable.nombre == identeificador) {
                yaExiste = true
                //erro variable ya ha sido declarada en la funcion x
                this.errores.capturaExpresiones("La variable ya ha sido declarada", identeificador)
                break
            }
        }


        return yaExiste
    }

    public asignarValorVariable(identificador: string, contenido:any): boolean{
        let yaExiste = false
        let vari = this.parametros
        vari = vari.concat(this.variables)
        for (let index = 0; index < vari.length; index++) {
            const variable = vari[index];
            if (variable.nombre == identificador) {
                yaExiste = true
                variable.contenido = contenido
                break
            }
        }
        return yaExiste
    }

    public caputrarInstrucciones(){
        this.instrucciones = this.errores.instrucciones
        this.errores.limpiarInstruciones()
    }

    public busquedaParamId(identificado:string, parametrosBusqued:Array<any>): boolean{
        if (identificado == this.identificado  && this.compararParametros(parametrosBusqued)) {
           this.actulizarContenidoParametros(parametrosBusqued)
            return true
        }else{
            return false
        }
    }

    private compararParametros(parametrosBusqued:Array<any>): boolean{
        let iguales = true
        if (parametrosBusqued.length == this.parametros.length) {
            for (let index = 0; index < parametrosBusqued.length; index++) {
                const parametroB = parametrosBusqued[index];
                if (this.tipoVar(parametroB) != this.parametros[index].tipo) {
                    iguales = false
                    break
                }
            } 
        }else{
            iguales = false
        }
        return iguales
    }

    private tipoVar(vari: any): TipoVar{
        if ("boolean"  == typeof vari) {
            return  TipoVar.BOOLEAN
        }else if ("string" == typeof vari && vari.length == 1) {
            return TipoVar.CHAR
        }else if ("number" == typeof  vari) {
           if (Number.isInteger(vari)) {
            return TipoVar.INT
           } else {
               return TipoVar.DOUBLE
           }
        }else{
            return TipoVar.STRING
        }
    }

    private actulizarContenidoParametros(parametrosBusqued:Array<any>){
        for (let index = 0; index < this.parametros.length; index++) {
            const parametro = this.parametros[index];
            parametro.contenido = parametrosBusqued[index]
            
        }
    }

    public realizarInstrucciones(parser:any, funcion:Funcion){   
         parser.Parser.yy.fun= funcion
        if (this.instrucciones != "") {
            console.log(this.instrucciones)
            parser.parse(this.instrucciones)
        }else{
            //manejar un posible error que no tenga ningun istruccion (lista de pendientes xd)
        }
    }

    public capturarValorSi(valor:any){
        this.instrucs = new  Instruccion(1,TipoInstruc.SI)
        this.instrucs.condicionSi = valor
    }

    public capturarValorSino(){
        this.instrucs.condicionSi = !this.instrucs.condicionSi
    }

 
    public valorVariable(identificador: string): any{
        let contenido = null
        let vari = this.parametros
        vari = vari.concat(this.variables)
        for (let index = 0; index < vari.length; index++) {
            const variable = vari[index];  
            if (identificador ==  variable.nombre)  {
                contenido = variable.contenido
                break
            }
        }

        return contenido
    }

    public capturarItems(valor:any){
        this.itemsMostrar.push(valor+"")
    }

    public realizarMostrar(){
       if (this.scope == 1) {
           //realizar y indefinir la condicion como Libre
       }else  {
           //verficar condicion

       }
    }

   
}
