/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parserInstru = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[16,20,21,22,23,24,33,34,39,41,42,48],$V2=[1,10],$V3=[1,32],$V4=[1,34],$V5=[1,44],$V6=[1,45],$V7=[1,58],$V8=[1,50],$V9=[1,52],$Va=[1,53],$Vb=[1,54],$Vc=[1,55],$Vd=[1,56],$Ve=[1,57],$Vf=[1,48],$Vg=[1,49],$Vh=[1,74],$Vi=[1,75],$Vj=[1,76],$Vk=[1,77],$Vl=[1,78],$Vm=[1,79],$Vn=[1,80],$Vo=[1,81],$Vp=[1,82],$Vq=[1,83],$Vr=[1,84],$Vs=[1,85],$Vt=[1,86],$Vu=[1,87],$Vv=[1,88],$Vw=[6,7,19,37,43,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73],$Vx=[6,7,19,37,43,47,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73],$Vy=[6,7,19,37,43,58,59,63,65,66,67,68,69,70,71,72,73],$Vz=[6,7,19,37,43,58,59,60,61,63,65,66,67,68,69,70,71,72,73],$VA=[6,7,19,37,43,65,66,67,68,69,70,71,72,73],$VB=[6,7,19,37,43,71,72,73];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"inicio":3,"sentenciasFuncion":4,"saltos":5,"SALTO":6,"EOF":7,"identadorRecu":8,"comodinIdentado":9,"IDENTADOR":10,"variables":11,"tipo":12,"items_coma":13,"comodinItems":14,"items":15,"IDD":16,"IGUAL":17,"asignacion":18,"COMA":19,"DOUBLE":20,"INT":21,"BOOLEAN":22,"CHAR":23,"STRING":24,"asignVar":25,"operation":26,"sentenciaFn":27,"defSi":28,"defMientras":29,"defPara":30,"defMostrar":31,"defSino":32,"retornoFuntion":33,"llamadaFun":34,"llamadaFunOP":35,"PARENTESISA":36,"PARENTESISC":37,"parametrosLlamada":38,"SI":39,"DOPUNTO":40,"SINO":41,"PARA":42,"PUNTOCOMA":43,"incremDecrem":44,"MASMAS":45,"MENOSMENOS":46,"MIENTRAS":47,"MOSTRAR":48,"parametroMostrar":49,"stringOidd":50,"terminalsOP":51,"TRUE":52,"FALSE":53,"DECIMAL":54,"ENTERO":55,"CARACTER":56,"CADENA":57,"MAS":58,"MENOS":59,"POR":60,"DIVISION":61,"ELEVADO":62,"MOD":63,"NEGADO":64,"EQUALS":65,"NOEQUALS":66,"MENORQ":67,"MAYORQ":68,"MENOROI":69,"MAYOROI":70,"OR":71,"AND":72,"XOR":73,"$accept":0,"$end":1},
terminals_: {2:"error",6:"SALTO",7:"EOF",10:"IDENTADOR",16:"IDD",17:"IGUAL",19:"COMA",20:"DOUBLE",21:"INT",22:"BOOLEAN",23:"CHAR",24:"STRING",33:"retornoFuntion",34:"llamadaFun",36:"PARENTESISA",37:"PARENTESISC",39:"SI",40:"DOPUNTO",41:"SINO",42:"PARA",43:"PUNTOCOMA",45:"MASMAS",46:"MENOSMENOS",47:"MIENTRAS",48:"MOSTRAR",52:"TRUE",53:"FALSE",54:"DECIMAL",55:"ENTERO",56:"CARACTER",57:"CADENA",58:"MAS",59:"MENOS",60:"POR",61:"DIVISION",62:"ELEVADO",63:"MOD",64:"NEGADO",65:"EQUALS",66:"NOEQUALS",67:"MENORQ",68:"MAYORQ",69:"MENOROI",70:"MAYOROI",71:"OR",72:"AND",73:"XOR"},
productions_: [0,[3,1],[5,2],[5,1],[5,1],[8,2],[8,1],[9,1],[11,2],[13,2],[14,1],[15,2],[15,2],[15,1],[12,1],[12,1],[12,1],[12,1],[12,1],[25,3],[18,2],[4,2],[4,1],[27,2],[27,2],[27,2],[27,2],[27,2],[27,2],[27,2],[27,2],[27,2],[35,3],[35,4],[38,3],[38,1],[28,6],[32,3],[30,13],[44,1],[44,1],[29,7],[31,5],[49,3],[49,1],[50,1],[51,1],[51,1],[51,1],[51,1],[51,1],[51,1],[51,1],[51,1],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,2],[26,2],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 7:
Parser.yy.fun.scope++
break;
case 10:
 
break;
case 14:
tipoAux = Parser.yy.tipoVar.DOUBLE
break;
case 15:
tipoAux = Parser.yy.tipoVar.INT
break;
case 16:
tipoAux = Parser.yy.tipoVar.BOOLEAN
break;
case 17:
tipoAux = Parser.yy.tipoVar.CHAR
break;
case 18:
tipoAux = Parser.yy.tipoVar.STRING
break;
case 19:
this.$ = $$[$0-2]
break;
case 20:
contenidoVar = $$[$0-1]
break;
case 23: case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31:
Parser.yy.fun.scope = 1
break;
case 36:
Parser.yy.fun.capturarValorSi($$[$0-3])
break;
case 37:
Parser.yy.fun.capturarValorSino()
break;
case 45:
 Parser.yy.fun.capturarItems($$[$0])
break;
case 46:
this.$ = true; 
break;
case 47:
this.$ = false; 
break;
case 48: case 49:
this.$ = Number(yytext); 
break;
case 50: case 51:
this.$ = yytext; 
break;
case 52:
this.$ = Parser.yy.table.contenidoVariableIstr($$[$0]+"", Parser.yy.fun);
break;
case 53:
this.$ = Parser.yy.table.valoFuncion($$[$0]+"")
break;
case 54:
this.$ = Parser.yy.opCast.suma($$[$0-2],$$[$0]); 
break;
case 55:
this.$ = Parser.yy.opCast.resta($$[$0-2],$$[$0])
break;
case 56:
this.$ = Parser.yy.opCast.multiplicacion($$[$0-2],$$[$0])
break;
case 57:
this.$ = Parser.yy.opCast.division($$[$0-2],$$[$0])
break;
case 58:
this.$ = Parser.yy.opCast.potencia($$[$0-2],$$[$0])
break;
case 59:
this.$ = Parser.yy.opCast.modulo($$[$0-2],$$[$0])
break;
case 60:
this.$ = Parser.yy.opCast.negativo($$[$0]);
break;
case 61:
this.$ = Parser.yy.opRelatins.expresionNegation($$[$0])
break;
case 62:
this.$ = Parser.yy.opRelatins.expresionEquals($$[$0-2],$$[$0])
break;
case 63:
this.$ = Parser.yy.opRelatins.expresioNoEquals($$[$0-2],$$[$0])
break;
case 64:
this.$ = Parser.yy.opRelatins.expresioMenorQ($$[$0-2],$$[$0])
break;
case 65:
this.$ = Parser.yy.opRelatins.expresioMayorQ($$[$0-2],$$[$0])
break;
case 66:
this.$ = Parser.yy.opRelatins.expresioMenorOI($$[$0-2],$$[$0])
break;
case 67:
this.$ = Parser.yy.opRelatins.expresioMayorOI($$[$0-2],$$[$0])
break;
case 68:
this.$ = Parser.yy.opRelatins.expresionOR($$[$0-2],$$[$0])
break;
case 69:
this.$ = Parser.yy.opRelatins.expresionAnd($$[$0-2],$$[$0])
break;
case 70:
this.$ = Parser.yy.opRelatins.expresionXOR($$[$0-2],$$[$0])
break;
case 71:
this.$ = $$[$0-1]
break;
case 72:
this.$ = $$[$0]
break;
}
},
table: [{3:1,4:2,8:4,9:5,10:$V0,27:3},{1:[3]},{1:[2,1]},{1:[2,22],4:7,8:4,9:5,10:$V0,27:3},{11:8,12:17,16:[1,18],20:[1,24],21:[1,25],22:[1,26],23:[1,27],24:[1,28],25:9,28:10,29:11,30:12,31:13,32:14,33:[1,15],34:[1,16],35:20,39:[1,19],41:[1,23],42:[1,21],48:[1,22]},o($V1,[2,6],{9:5,8:29,10:$V0}),o([10,16,20,21,22,23,24,33,34,39,41,42,48],[2,7]),{1:[2,21]},o($V2,[2,23]),o($V2,[2,24]),o($V2,[2,25]),o($V2,[2,26]),o($V2,[2,27]),o($V2,[2,28]),o($V2,[2,29]),o($V2,[2,30]),o($V2,[2,31]),{13:30,14:31,16:$V3},{17:[1,33],36:$V4},{36:[1,35]},{47:[1,36]},{36:[1,37]},{36:[1,38]},{40:[1,39]},{16:[2,14]},{16:[2,15]},{16:[2,16]},{16:[2,17]},{16:[2,18]},o($V1,[2,5]),o($V2,[2,8]),{5:43,6:$V5,7:$V6,15:40,17:[1,41],19:[1,42]},o([6,7,17,19],[2,10]),{16:$V7,18:46,26:47,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:62,35:59,36:$V8,37:[1,60],38:61,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:63,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{36:[1,64]},{21:[1,65]},{16:$V7,26:68,35:59,36:$V8,49:66,50:67,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{5:69,6:$V5,7:$V6},o($V2,[2,9]),{16:$V7,18:70,26:47,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{13:71,14:31,16:$V3},o($V2,[2,13]),o($V2,[2,3],{5:72,6:$V5,7:$V6}),o($V2,[2,4]),o($V2,[2,19]),{5:73,6:$V5,7:$V6,58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv},{16:$V7,26:89,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:90,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:91,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},o($Vw,[2,72]),o($Vw,[2,46]),o($Vw,[2,47]),o($Vw,[2,48]),o($Vw,[2,49]),o($Vw,[2,50]),o($Vw,[2,51]),o($Vw,[2,52],{36:$V4}),o($Vw,[2,53]),o($Vx,[2,32]),{37:[1,92]},{19:[1,93],37:[2,35],58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv},{37:[1,94],58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv},{16:$V7,26:95,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:[1,96]},{37:[1,97]},{19:[1,98],37:[2,44]},o([19,37],[2,45],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv}),o($V2,[2,37]),o($V2,[2,11]),o($V2,[2,12]),o($V2,[2,2]),o($V2,[2,20]),{16:$V7,26:99,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:100,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:101,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:102,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:103,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:104,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:105,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:106,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:107,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:108,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:109,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:110,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:111,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:112,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{16:$V7,26:113,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},o($Vw,[2,60]),o($Vw,[2,61]),{37:[1,114],58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv},o($Vx,[2,33]),{16:$V7,26:62,35:59,36:$V8,38:115,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{40:[1,116]},{37:[1,117],58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv},{17:[1,118]},{5:119,6:$V5,7:$V6},{16:$V7,26:62,35:59,36:$V8,38:120,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},o($Vy,[2,54],{60:$Vj,61:$Vk,62:$Vl}),o($Vy,[2,55],{60:$Vj,61:$Vk,62:$Vl}),o($Vz,[2,56],{62:$Vl}),o($Vz,[2,57],{62:$Vl}),o($Vw,[2,58]),o($Vy,[2,59],{60:$Vj,61:$Vk,62:$Vl}),o($VA,[2,62],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm}),o($VA,[2,63],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm}),o($VA,[2,64],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm}),o($VA,[2,65],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm}),o($VA,[2,66],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm}),o($VA,[2,67],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm}),o($VB,[2,68],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs}),o($VB,[2,69],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs}),o($VB,[2,70],{58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs}),o($Vw,[2,71]),{37:[2,34]},{5:121,6:$V5,7:$V6},{40:[1,122]},{16:$V7,26:123,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},o($V2,[2,42]),{37:[2,43]},o($V2,[2,36]),{5:124,6:$V5,7:$V6},{43:[1,125],58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv},o($V2,[2,41]),{16:$V7,26:126,35:59,36:$V8,51:51,52:$V9,53:$Va,54:$Vb,55:$Vc,56:$Vd,57:$Ve,59:$Vf,64:$Vg},{43:[1,127],58:$Vh,59:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,65:$Vn,66:$Vo,67:$Vp,68:$Vq,69:$Vr,70:$Vs,71:$Vt,72:$Vu,73:$Vv},{44:128,45:[1,129],46:[1,130]},{37:[1,131]},{37:[2,39]},{37:[2,40]},{40:[1,132]},{5:133,6:$V5,7:$V6},o($V2,[2,38])],
defaultActions: {2:[2,1],7:[2,21],24:[2,14],25:[2,15],26:[2,16],27:[2,17],28:[2,18],115:[2,34],120:[2,43],129:[2,39],130:[2,40]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

let tipoAux
let contenidoVar = null
let scope = 0
let operationCondicion = ""
let capturarOperadors = false
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-sensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: return 10
break;
case 1: return 6
break;
case 2: /*ignoramos */  
break;
case 3: return 'IMPORT'
break;
case 4: return 'PUNTO'
break;
case 5: return 'EXTENSIONCLR'
break;
case 6: return 'INSERTEZA'
break;
case 7: return 52
break;
case 8:  return 53
break;
case 9:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); Parser.yy.errores.capturaTokens(yy_.yytext, yy_.yylloc.last_line, yy_.yylloc.last_column);  return 57; 
break;
case 10:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); Parser.yy.errores.capturaTokens(yy_.yytext, yy_.yylloc.last_line, yy_.yylloc.last_column);  return 56; 
break;
case 11:return 20
break;
case 12:return 22
break;
case 13: return 21
break;
case 14:return 24
break;
case 15:return 23
break;
case 16:return 'VOID'
break;
case 17:return 66
break;
case 18:return 69
break;
case 19:return 70
break;
case 20:return 65
break;
case 21:return 17
break;
case 22:return 64
break;
case 23:return 67
break;
case 24:return 68
break;
case 25:return 'SIGINSERTEZA'
break;
case 26:return 73
break;
case 27: return 72
break;
case 28:return 71
break;
case 29:return 'RETURN'
break;
case 30:return 'PRINCIPAL'
break;
case 31:return 41
break;
case 32:return 39
break;
case 33:return 45
break;
case 34:return 46
break;
case 35:return 42
break;
case 36:return 47
break;
case 37:return 'DETENER'
break;
case 38:return 'CONTINUAR'
break;
case 39:return 48
break;
case 40:return 'LLAVEA'
break;
case 41:return 'LLAVEC'
break;
case 42:return 'DIBUJARAST'
break;
case 43:return 'DIBUJAREXP'
break;
case 44:return 'DIBUJARTS'
break;
case 45:return 54
break;
case 46:return 16
break;
case 47:return 55
break;
case 48:return 40
break;
case 49:return 43
break;
case 50:return 19
break;
case 51:return 60
break;
case 52:return 61
break;
case 53:return 59
break;
case 54:return 58
break;
case 55:return 62
break;
case 56:return 63
break;
case 57:return 36
break;
case 58:return 37
break;
case 59:  return 7
break;
case 60://manejo de errores lexicos
break;
}
},
rules: [/^(?:[\t])/,/^(?:[\n])/,/^(?:[\r|\s|\f]+)/,/^(?:Importar\b)/,/^(?:\.)/,/^(?:clr\b)/,/^(?:Incerteza\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:"[^\"]*")/,/^(?:'[^]')/,/^(?:Double\b)/,/^(?:Boolean\b)/,/^(?:Int\b)/,/^(?:String\b)/,/^(?:Char\b)/,/^(?:Void\b)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:=)/,/^(?:!)/,/^(?:<)/,/^(?:>)/,/^(?:~)/,/^(?:\|&)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:Retorno\b)/,/^(?:Principal\b)/,/^(?:Sino\b)/,/^(?:Si\b)/,/^(?:\+\+)/,/^(?:--)/,/^(?:Para\b)/,/^(?:Mientras\b)/,/^(?:Detener\b)/,/^(?:Continuar\b)/,/^(?:Mostrar\b)/,/^(?:\{)/,/^(?:\})/,/^(?:DibujarAST\b)/,/^(?:DibujarEXP\b)/,/^(?:DibujarTS\b)/,/^(?:[0-9]+\.[0-9]+\b)/,/^(?:((_)?[a-zA-Z]+(_|[a-zA-Z0-9]+)*))/,/^(?:[0-9]+\b)/,/^(?::)/,/^(?:;)/,/^(?:,)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parserInstru;
exports.Parser = parserInstru.Parser;
exports.parse = function () { return parserInstru.parse.apply(parserInstru, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}