export class Nodo {
    valor:any;
    tipo:any;
    hijos: Nodo[];
    padreTipo:any;
    padreValor:any;

    constructor(valor :any,tipo:any,hijos:Nodo[]){
        this.valor=valor;
        this.tipo=tipo;
        this.hijos=hijos;

    }
    

    agregarHijo(hijo:any){
        this.hijos.push(hijo);
    }
}
