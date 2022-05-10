import { ManejoErrors } from 'src/clases/manejoErrors/manejo-errors';
import { TipoVar } from './tipo-var';
import { Variables } from "./variables"

export class Funcion {

    variables: Array<Variables>
    identificado: String
    tipo:TipoVar
    retorno!: any 
    parametros: Array<Variables>
    errores: ManejoErrors

    constructor(identificador: String, tipo: TipoVar, errores: ManejoErrors){
        this.variables = new Array
        this.identificado = identificador
        this.tipo = tipo
        this.parametros = new Array
        this.errores = errores;
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

}
