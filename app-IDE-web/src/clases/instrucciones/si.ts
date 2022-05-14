import { Instruccion } from './instruccion';
import { TipoInstruc } from './tipo-instruc';
export class Si extends Instruccion {
    
    condicionSi = false

    constructor(scope:number, tipo:TipoInstruc){
        super(scope, tipo);
    }
    
    
    

    

}
