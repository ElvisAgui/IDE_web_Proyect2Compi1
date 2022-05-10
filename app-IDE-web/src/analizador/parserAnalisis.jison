/* description: Parses and executes mathematical expressions. */
%{
let tipoAux
let contenidoVar = null
let scope = 0
%}
/* lexical grammar */

%lex
%options case-sensitive
%%
[\t]                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); console.log("un identador"); return 'IDENTADOR'}
[\n]                                { return 'SALTO'} 
[\r|\s|\f]+                          {/*ignoramos */  }                
"Importar"                          {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'IMPORT'}
"."                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'PUNTO'}
"clr"                               {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'EXTENSIONCLR'} 
"Incerteza"                         {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'INSERTEZA'}
"true"                              {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'TRUE'}
"false"                             {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'FALSE'}
\"[^\"]*\"                          { yytext = yytext.substr(1,yyleng-2); Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'CADENA'; }
"'"[^]"'"                           { yytext = yytext.substr(1,yyleng-2); Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'CARACTER'; }
"Double"                            {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'DOUBLE'}
"Boolean"                           {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'BOOLEAN'}
"Int"                               {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'INT'}
"String"                            {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'STRING'}
"Char"                              {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'CHAR'}  
"Void"                              {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'VOID'}
"!="                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'NOEQUALS'}
"<="                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MENOROI'}
">="                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MAYOROI'}
"=="                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'EQUALS'}
"="                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'IGUAL'}
"!"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'NEGADO'}
"<"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MENORQ'}
">"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MAYORQ'}
"~"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'SIGINSERTEZA'}
"&&"                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'AND'}
"||"                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'OR'}
"|&"                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'XOR'}
"Retorno"                           {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'RETURN'}
"Principal"                         {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'PRINCIPAL'}
"Si"                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'SI'}
"Sino"                              {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'SINO'}
"++"                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MASMAS'}
"--"                                {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MENOSMENOS'}
"Para"                              {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'PARA'}
"Mientras"                          {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MIENTRAS'}
"Detener"                           {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'DETENER'}
"Continuar"                         {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'CONTINUAR'}
"Mostrar"                           {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MOSTRAR'}
"{"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'LLAVEA'}
"}"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'LLAVEC'}
"DibujarAST"                        {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'DIBUJARAST'}
"DibujarEXP"                        {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'DIBUJAREXP'}
"DibujarTS"                         {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'DIBUJARTS'}
[0-9]+"."[0-9]+\b                   {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'DECIMAL'}
((_)?[a-zA-Z]+(_|[a-zA-Z0-9]+)*)    {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'IDD'}
[0-9]+\b                            {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'ENTERO'}
":"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'DOPUNTO'}
";"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'PUNTOCOMA'}
','                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'COMA'}
"*"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'POR'}
"/"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'DIVISION'}
"-"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MENOS'}
"+"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MAS'}
"^"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'ELEVADO'}
"%"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'MOD'}
"("                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'PARENTESISA'}
")"                                 {Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column); return 'PARENTESISC'}
<<EOF>>                             {  return 'EOF'}
.                     //manejo de errores lexicos
/lex

/* operator associations and precedence */
%left OR XOR AND 
%left EQUALS NOEQUALS MAYORQ MAYOROI MENORQ MENOROI
%left MAS MENOS MOD
%left POR DIVISION
%left ELEVADO
%left UMINUS

%start inicio

%% /* language grammar */
inicio:
    importacion sentenciasGlobales
    ;

/*define las importaciones soportadas por el lenguaje*/
importacion :
        IMPORT IDD PUNTO EXTENSIONCLR saltos importacion {console.log("encontre una importacion")}
        |                     
        ;



saltos : 
        SALTO saltos            {console.log("encontre un salto de linea")}
        | SALTO
        | EOF                           {}
        ;

/*define las declaraciones de variables*/
variables:
        tipo items_coma            
        ;

items_coma:
        comodinItems items                             
        ;

comodinItems:
        IDD                     {Parser.yy.table.claseTem.capturaItems(yytext)}
        ;

items :
        IGUAL asignacion                
        | COMA items_coma               
        | saltos                
        ; 

tipo:
        DOUBLE      {tipoAux = Parser.yy.tipoVar.DOUBLE}    
        | INT       {tipoAux = Parser.yy.tipoVar.INT}          
        | BOOLEAN   {tipoAux = Parser.yy.tipoVar.BOOLEAN}          
        | CHAR      {tipoAux = Parser.yy.tipoVar.CHAR}  
        | STRING    {tipoAux = Parser.yy.tipoVar.STRING}          
        ;

/*define la asignacion de una variable ya creada*/
asignVar:
        IDD IGUAL asignacion {$$ = $1}
        ;

asignacion :
            operation saltos    {contenidoVar = $1}
            ;

/*define a las funciones*/
funtions : 
        comodinIDFun saltos sentenciasFuncion 
        ;

comodinIDFun:
        comss  PARENTESISC DOPUNTO                   {Parser.yy.table.verificarFuncion()}
        | comss  parametros PARENTESISC DOPUNTO      {Parser.yy.table.verificarFuncion()}
        ;
comss:
        tipo IDD  PARENTESISA              {Parser.yy.table.claseTem.instanciaNewFuncion($2,tipoAux)}
        ;


retornoFuntion :
                RETURN operation saltos
                | RETURN saltos
                ;

parametros:
        param COMA parametros
        | param
        ;

param:
        tipo IDD                                {Parser.yy.table.claseTem.capturarParametros($2,tipoAux)}
        ;

sentenciasFuncion:
                sentenciaFn sentenciasFuncion
                | sentenciaFn
                ;

sentenciaFn:
        identadorRecu variables                         {}
        | identadorRecu asignVar 
        | identadorRecu defSi
        | identadorRecu defMientras
        | identadorRecu defPara
        | identadorRecu defMostrar
        | identadorRecu defSino
        | identadorRecu retornoFuntion
        | identadorRecu llamadaFun
        ;

identadorRecu : 
                comodinIdentado identadorRecu
                | comodinIdentado
                ;
comodinIdentado:
        IDENTADOR               {Parser.yy.table.scope++;}
        ;

/*define a los metodos*/
metod :
        comodinVerificador DOPUNTO saltos sentenciasMetod 
        ;

comodinVerificador:
                comodinMetod PARENTESISC                        {Parser.yy.table.verificarFuncion();}
                | comodinMetod parametros PARENTESISC           {Parser.yy.table.verificarFuncion();}
                ;       

comodinMetod:
        VOID IDD PARENTESISA            {Parser.yy.table.claseTem.instanciaNewFuncion($2,Parser.yy.tipoVar.VOID)}
        ;

sentenciasMetod :
                sentenciaFn sentenciasMetod
                | sentenciaFn
                ;


/*define la funcion principal*/
funPrincipal :
                VOID PRINCIPAL PARENTESISA PARENTESISC DOPUNTO saltos sentenciasFuncion
                ;
/*describe las llamadas a funciones*/
llamadaFun :
        IDD PARENTESISA PARENTESISC saltos
        | IDD PARENTESISA parametrosLlamada PARENTESISC saltos
        ;

llamadaFunOP:
        IDD PARENTESISA PARENTESISC 
        | IDD PARENTESISA parametrosLlamada PARENTESISC 
        ;

parametrosLlamada :
                operation COMA parametrosLlamada
                | operation
                ;

/*Define la sentencias validas en el archivo*/
sentenciasGlobales : 
                sentenciaGlobales sentenciasGlobales
                |
                ;

sentenciaGlobales :
                funtions
                | asignVar              {Parser.yy.table.asignarValorVarGlobal($1+"",contenidoVar); contenidoVar = null}
                | variables             {Parser.yy.table.capturarVariableGlobal(tipoAux,contenidoVar);contenidoVar = null} 
                | metod
                | funPrincipal
                ;

/*define la sentencia si - sino*/

defSi : 
        SI PARENTESISA operation PARENTESISC saltos  
        ;

defSino : 
        SINO 
        ;


/*define la sentencia para */
defPara:
        PARA PARENTESISA INT IDD IGUAL operation PUNTOCOMA operation PUNTOCOMA incremDecrem PARENTESISC DOPUNTO saltos
        ;

incremDecrem :
                MASMAS
                | MENOSMENOS
                ;

/*define la sentencia mientras*/
defMientras :
                MIENTRAS PARENTESISA operation PARENTESISC DOPUNTO saltos
                ;

/*define la sentencia Mostrar*/
defMostrar : 
                MOSTRAR PARENTESISA parametroMostrar PARENTESISC saltos 
                ;

parametroMostrar :
                stringOidd COMA parametrosLlamada
                | stringOidd
                ;
stringOidd : 
        CADENA
        | IDD
        ;

/*terminales soportados para las expresiones(relacionales, aritmeticas y logicas)*/
terminalsOP :
            TRUE                {$$ = true}
            | FALSE             {$$ = false}
            | DECIMAL           {$$ = Number(yytext)}
            | ENTERO            {$$ = Number(yytext)}
            | CARACTER          {$$ = yytext}
            | CADENA            {$$ = yytext}
            | IDD               {$$ = Parser.yy.table.contenidoVariable(yytext+"")}
            | llamadaFunOP      {}
            ;

/*define el lenguje de una expresion(relacional, aritmetica y logica)*/
operation :
        operation MAS operation	                   {$$ = Parser.yy.opCast.suma($1,$3); }   	
        | operation MENOS operation       	   {$$ = Parser.yy.opCast.resta($1,$3)}	
	| operation POR operation                  {$$ = Parser.yy.opCast.multiplicacion($1,$3)}  		
	| operation DIVISION operation             {$$ = Parser.yy.opCast.division($1,$3)}
        | operation ELEVADO  operation             {$$ = Parser.yy.opCast.potencia($1,$3)}
        | operation MOD operation                  {$$ = Parser.yy.opCast.modulo($1,$3)}
        | MENOS operation %prec UMINUS             {$$ = Parser.yy.opCast.negativo($2);}
        | NEGADO operation %prec UMINUS            {$$ = Parser.yy.opRelatins.expresionNegation($2)}
        | operation EQUALS operation               {$$ = Parser.yy.opRelatins.expresionEquals($1,$3)}
        | operation NOEQUALS operation             {$$ = Parser.yy.opRelatins.expresioNoEquals($1,$3)}
        | operation MENORQ operation               {$$ = Parser.yy.opRelatins.expresioMenorQ($1,$3)}
        | operation MAYORQ operation               {$$ = Parser.yy.opRelatins.expresioMayorQ($1,$3)}
        | operation MENOROI operation              {$$ = Parser.yy.opRelatins.expresioMenorOI($1,$3)}
        | operation MAYOROI operation              {$$ = Parser.yy.opRelatins.expresioMayorOI($1,$3)}
        | operation OR operation                   {$$ = Parser.yy.opRelatins.expresionOR($1,$3)}
        | operation AND operation                  {$$ = Parser.yy.opRelatins.expresionAnd($1,$3)}
        | operation XOR operation                  {$$ = Parser.yy.opRelatins.expresionXOR($1,$3)}
	| PARENTESISA operation PARENTESISC        {$$ = $2} 
        | terminalsOP                              {$$ = $1}         	        			 														
    ;




