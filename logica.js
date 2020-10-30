window.addEventListener("load",inicio,true);
function inicio(){
    document.getElementById("cadena").addEventListener("keyup", function(){
        this.value = this.value.toLowerCase();
    }, true);
    document.getElementById("cifrar").addEventListener("click",function(){  
        var texto = document.getElementById("cadena").value;
        var po = document.getElementById("po").value;               
        document.getElementById("resultado").value = cifrar2(texto, po);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  
        var texto = document.getElementById("cadena").value;
        var po = document.getElementById("po").value;                               
        document.getElementById("resultado").value = descifrar(texto, po);
    },true);
}
function cifrar(texto, po) {
    if (!texto) 
        return '';
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    po = (po % 27 + 27) % 27; 
    return texto.replace(/[a-zA-Zñ]/ig, c => letras[(letras.indexOf(c) + po) % 27]);
}
function descifrar(texto, po) {
    if (!texto) 
        return ''; 
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    po = (po % 27 - 27) % 27; 
    return texto.replace(/[a-zA-Zñ]/ig, c => letras[(letras.indexOf(c) - po) % 27]);
}
function cifrar2(texto, po) {
    var resultado='';
    var letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    po = (po % 27 + 27) % 27;     
    if (texto){
        for (var i=0; i<texto.length; ++i){
            if (letras.indexOf(texto[i])!=-1)
            { 
                var posicion=((letras.indexOf(texto[i])+po) % 27);
                resultado+=letras[posicion];
            }
            else
                resultado+=texto[i];
        }
    }
    return resultado;
}
