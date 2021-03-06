export class Token {

    lexeme!:String
    line!:number
    column!: number
    description!:string
    tipoErr!:string
    nameArch!:String

    constructor(){

    }
    
    public inicializarVal(lexeme:String, line:number, columm: number){
        this.lexeme = lexeme
        this.line = line
        this.column = columm
    }

    public constructorToken(lexeme:String, line:number, columm: number,descripcion:string, tipoErr:string, nameArch:string){
        this.column= columm
        this.lexeme = lexeme
        this.line = line
        this.description = descripcion
        this.tipoErr= tipoErr
        this.nameArch = nameArch
    }

    public getDescripcion(): string{
        let descip = ""
        if (this.tipoErr == "Sintactico" || this.tipoErr == "Lexico") {
            descip = this.description+" : "+ this.lexeme
        }else{
            descip = this.description+" ref: "+this.lexeme
        }
        return descip
    }

}
