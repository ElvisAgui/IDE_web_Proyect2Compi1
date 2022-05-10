import { ManejoErrors } from '../manejoErrors/manejo-errors';
import { Clase } from './clase';
import { Funcion } from './funcion';
import { TipoVar } from './tipo-var';
import { Variables } from "./variables";

export class TableSimbol {
    
    clases: Array<Clase>
    claseTem: Clase = new Clase()
    errores!:ManejoErrors
    scope:number = 0

    constructor(errores: ManejoErrors){
        this.clases = new Array
        this.errores = errores
        this.claseTem.setErrors(errores)
    }
    
    
    public agregarClase(){
        let clase = new Clase()
        clase.funciones = this.claseTem.funciones
        clase.variables = this.claseTem.variables
        this.clases.push(clase)
        this.claseTem.limpiarArrays();
    }
    

    /**
     * captura la variable si no estra repetida, llema a la funcion capturarVariableGlobal de la clase tem para ser guardada en ella
     * @param tipo 
     * @param contenido 
     */
    public capturarVariableGlobal(tipo: TipoVar, contenido: any){
        if (!this.varExistsInTable()) {
            this.claseTem.capturarVariableGlobal(tipo, contenido)
        }
    }

    /**
     * verfica si la funcion agregada esta repetida tanto como clasetem, como en clases
     */
    public verificarFuncion(){
        if (!this.claseTem.funcionYaExiste()) {
            for (let index = 0; index < this.clases.length; index++) {
                const clase = this.clases[index];
                if (clase.funcionYaExiste()) {
                    break
                }
            }
        }
    }
    
    /**
     * verifica que las variables no se repitan en ninguno de los archivos ya guardados
     * @returns true si encuentra alguna repeticion 
     */
    private varExistsInTable():boolean{
        let yaExiste = false
        for (let i = 0; i < this.claseTem.items.length; i++) {
            const item = this.claseTem.items[i];
            for (let index = 0; index < this.clases.length; index++) {
                const clase = this.clases[index];
                if(clase.varYaExistente(item+"")){
                    yaExiste = true
                    break
                }
            }
            
        }
        return yaExiste
    }
    
    
    public asignarValorVarGlobal(identificador: string, contenido:any){
        let encontrado = this.claseTem.asignarValorVarGlobal(identificador,contenido)
        if (!encontrado) {
            for (let index = 0; index < this.clases.length; index++) {
                const clase = this.clases[index];
                if (clase.asignarValorVarGlobal(identificador, contenido)) {
                    encontrado = true
                    break;
                }
            }
        } 
        if (!encontrado) {
           this.errores.caputuraDeRepitencia("La variable no ha sido declarada",identificador) 
        }
    }


    public contenidoVariable(identificador: string): any{
        let contenido
        let indexVar = -1
        if (this.scope == 0 ) {
           indexVar =  this.claseTem.indexVariable(identificador)
            //buscar de manera global
            if (indexVar == -1) {
                for (let index = 0; index < this.clases.length; index++) {
                    const clase = this.clases[index];
                    let pos = clase.indexVariable(identificador)
                    if (pos != -1) {
                        contenido = clase.variables[pos].contenido
                        indexVar = pos
                        break
                    }
                }
            } else {
                contenido = this.claseTem.variables[indexVar].contenido
            }
               
        } else {
            //buscar en el nivel de identacion hasta de forma global
            let indexInterno = -1
            if (this.claseTem.funciones.length != 0) {
                indexInterno =  this.claseTem.funciones[this.claseTem.funciones.length-1].indexVariable(identificador)
            }
            indexVar = indexInterno
            if (indexInterno == -1) {
                indexVar =  this.claseTem.indexVariable(identificador)
                if (indexVar == -1) {
                    for (let index = 0; index < this.clases.length; index++) {
                        const clase = this.clases[index];
                        let pos = clase.indexVariable(identificador)
                        if (pos != -1) {
                            contenido = clase.variables[pos].contenido
                            indexVar = pos
                            break
                        }
                    }
                } else {
                    contenido = this.claseTem.variables[indexVar].contenido
                }
            } else {
                if (indexInterno < this.claseTem.funciones[this.claseTem.funciones.length-1].parametros.length ) {
                    contenido = this.claseTem.funciones[this.claseTem.funciones.length-1].parametros[indexInterno].contenido
                }else{
                    contenido = this.claseTem.funciones[this.claseTem.funciones.length-1].variables[indexInterno].contenido
                }
                
            }
        }
        if (indexVar == -1) {
            //error la varaible no existe
            this.errores.capturaExpresiones("La variable no ha sido declarada", identificador)
            contenido = 0
        }else if (contenido == null) {
            this.errores.capturaExpresiones("La variable no ha sido inicializada", identificador)
            contenido = 0
        }
        this.scope = 0
        return contenido
    }
    
}
