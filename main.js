var nombre_invitado_array=[];
function submit() {
    var ver_invitado_array=[];

    for (var j=1; j <=5; j++){
        var nombre_invitado=document.getElementById("nombre_invitado_" +j).value;
        console.log(nombre_invitado);
        nombre_invitado_array.push(nombre_invitado);
    }
    var longitud=nombre_invitado_array.length;
    for (var k=0; k <longitud; k++){
       ver_invitado_array.push("<h4>nombre " +nombre_invitado_array[k] +"</h4>");
    }

    document.getElementById("mostrar_nombres_con_comas").innerHTML=ver_invitado_array;
var remover=ver_invitado_array.join(" ");
document.getElementById("mostrar_nombres_sin_comas").innerHTML=remover;
}
function sorting() 
{
nombre_invitado_array.sort();
console.log(nombre_invitado_array);
var ver_invitado_array_ordenar = [];
var longitud_nombre_invitado_array = nombre_invitado_array.length; 
console.log(longitud_nombre_invitado_array); 
for (var k = 0; k < longitud_nombre_invitado_array; k++) 
{ ver_invitado_array_ordenar.push("<h4>NOMBRE - " + nombre_invitado_array[k] + "</h4>"); 
console.log(ver_invitado_array_ordenar); } 
var remover_comas = ver_invitado_array_ordenar.join(" "); 
console.log(remover_comas); document.getElementById("ver_nombre_sin_comas").innerHTML = remover_comas; }
