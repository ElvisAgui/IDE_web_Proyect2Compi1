import { Nodo } from './nodo';
export class ArbolExpr {

    nodos: Nodo[] = [];
    hijos: Nodo[] = [];
    nodoAux = new Nodo("","",[]);



    constructor() {
    
    }


    public agregarNodo(nodo:Nodo){
        this.nodos.push(nodo);
    }

    public limpiarNodos(){
        this.nodos=[]
    }
}
