/* description: Parses and executes mathematical expressions. */
%{
let tipoAux
let contenidoVar = null
let scope = 0
let operationCondicion = ""
let capturarOperadors = false
%}
/* lexical grammar */

%lex
%options case-sensitive
%%
[\t]                                { return 'IDENTADOR'}
[\n]                                { return 'SALTO'} 
[\r|\s|\f]+                         { /*ignoramos */  }                
"Importar"                          { return 'IMPORT'}
"."                                 { return 'PUNTO'}
"clr"                               { return 'EXTENSIONCLR'} 
"Incerteza"                         { return 'INSERTEZA'}
"true"                              { return 'TRUE'}
"false"                             {  return 'FALSE'}
\"[^\"]*\"                          {yytext = yytext.substr(1,yyleng-2); Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column);  return 'CADENA'; }
"'"[^]"'"                           {yytext = yytext.substr(1,yyleng-2); Parser.yy.errores.capturaTokens(yytext, yylloc.last_line, yylloc.last_column);  return 'CARACTER'; }
"Double"                            {return 'DOUBLE'}
"Boolean"                           {return 'BOOLEAN'}
"Int"                               { return 'INT'}
"String"                            {return 'STRING'}
"Char"                              {return 'CHAR'}  
"Void"                              {return 'VOID'}
"!="                                {return 'NOEQUALS'}
"<="                                {return 'MENOROI'}
">="                                {return 'MAYOROI'}
"=="                                {return 'EQUALS'}
"="                                 {return 'IGUAL'}
"!"                                 {return 'NEGADO'}
"<"                                 {return 'MENORQ'}
">"                                 {return 'MAYORQ'}
"~"                                 {return 'SIGINSERTEZA'}
"|&"                                {return 'XOR'}
"&&"                                { return 'AND'}
"||"                                {return 'OR'}
"Retorno"                           {return 'RETURN'}
"Principal"                         {return 'PRINCIPAL'}
"Sino"                              {return 'SINO'}
"Si"                                {return 'SI'}
"++"                                {return 'MASMAS'}
"--"                                {return 'MENOSMENOS'}
"Para"                              {return 'PARA'}
"Mientras"                          {return 'MIENTRAS'}
"Detener"                           {return 'DETENER'}
"Continuar"                         {return 'CONTINUAR'}
"Mostrar"                           {return 'MOSTRAR'}
"{"                                 {return 'LLAVEA'}
"}"                                 {return 'LLAVEC'}
"DibujarAST"                        {return 'DIBUJARAST'}
"DibujarEXP"                        {return 'DIBUJAREXP'}
"DibujarTS"                         {return 'DIBUJARTS'}
[0-9]+"."[0-9]+\b                   {return 'DECIMAL'}
((_)?[a-zA-Z]+(_|[a-zA-Z0-9]+)*)    {return 'IDD'}
[0-9]+\b                            {return 'ENTERO'}
":"                                 {return 'DOPUNTO'}
";"                                 {return 'PUNTOCOMA'}
','                                 {return 'COMA'}
"*"                                 {return 'POR'}
"/"                                 {return 'DIVISION'}
"-"                                 {return 'MENOS'}
"+"                                 {return 'MAS'}
"^"                                 {return 'ELEVADO'}
"%"                                 {return 'MOD'}
"("                                 {return 'PARENTESISA'}
")"                                 {return 'PARENTESISC'}
<<EOF>>                             {  return 'EOF'}
.                     //manejo de errores lexicos
/lex

%left OR XOR AND 
%left EQUALS NOEQUALS MAYORQ MAYOROI MENORQ MENOROI
%left MAS MENOS MOD
%left POR DIVISION
%left ELEVADO
%left UMINUS


%start inicio

%%

inicio :
    sentenciasFuncion
    ;
saltos : 
        SALTO saltos                      {}
        | SALTO
        | EOF                           {}
        ;



identadorRecu : 
                comodinIdentado identadorRecu
                | comodinIdentado
                ;
comodinIdentado:
        IDENTADOR               {Parser.yy.fun.scope++}
        ;


variables:
        tipo items_coma            
        ;

items_coma:
        comodinItems items                             
        ;

comodinItems:
        IDD                     { }
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


sentenciasFuncion:
                sentenciaFn sentenciasFuncion
                | sentenciaFn
                ;

sentenciaFn:
        identadorRecu variables                         {Parser.yy.fun.scope = 1}
        | identadorRecu asignVar                        {Parser.yy.fun.scope = 1}
        | identadorRecu defSi                           {Parser.yy.fun.scope = 1}                                                
        | identadorRecu defMientras                     {Parser.yy.fun.scope = 1}
        | identadorRecu defPara                         {Parser.yy.fun.scope = 1}
        | identadorRecu defMostrar                      {Parser.yy.fun.scope = 1}
        | identadorRecu defSino                         {Parser.yy.fun.scope = 1}
        | identadorRecu retornoFuntion                  {Parser.yy.fun.scope = 1}
        | identadorRecu llamadaFun                      {Parser.yy.fun.scope = 1}
        ;


llamadaFunOP:
        IDD PARENTESISA PARENTESISC 
        | IDD PARENTESISA parametrosLlamada PARENTESISC 
        ;

parametrosLlamada :
                operation COMA parametrosLlamada
                | operation
                ;

/*define la sentencia si - sino*/

defSi : 
        SI PARENTESISA operation PARENTESISC DOPUNTO saltos     {Parser.yy.fun.capturarValorSi($3)}
        ;

defSino : 
        SINO DOPUNTO saltos                     {Parser.yy.fun.capturarValorSino()}
        ;


/*define la sentencia para */
defPara:
        PARA PARENTESISA INT IDD IGUAL operation PUNTOCOMA operation PUNTOCOMA incremDecrem PARENTESISC DOPUNTO saltos {}
        ;

incremDecrem :
                MASMAS
                | MENOSMENOS
                ;

/*define la sentencia mientras*/
defMientras :llamadaFunOP
                MIENTRAS PARENTESISA operation PARENTESISC DOPUNTO saltos
                ;

/*define la sentencia Mostrar*/
defMostrar : 
                MOSTRAR PARENTESISA parametroMostrar PARENTESISC saltos {}
                ;

parametroMostrar :
                stringOidd COMA parametrosLlamada
                | stringOidd
                ;
stringOidd : 
        operation        { Parser.yy.fun.capturarItems($1)}
        ;

/*terminales soportados para las expresiones(relacionales, aritmeticas y logicas)*/
terminalsOP :
            TRUE                {$$ = true; }
            | FALSE             {$$ = false; }
            | DECIMAL           {$$ = Number(yytext); }
            | ENTERO            {$$ = Number(yytext); }
            | CARACTER          {$$ = yytext; }
            | CADENA            {$$ = yytext; }
            | IDD               {$$ = Parser.yy.table.contenidoVariableIstr($1+"", Parser.yy.fun);}
            | llamadaFunOP      {$$ = Parser.yy.table.valoFuncion($1+"")}
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