var whereIam = window.location.href;
if (whereIam.indexOf("grade/report")>0){
    const colGrade = "Rango";
    const numberGrade = '0–0';
    var tabla = document.getElementsByTagName("TABLE")[0];
    var cabecera = document.getElementsByTagName("TABLE")[0].getElementsByTagName("thead")[0];
    var cuerpo = document.getElementsByTagName("TABLE")[0].getElementsByTagName("tbody")[0];
    var columna;
    var columnaFinal;

    for(var i=0; i<cabecera.getElementsByTagName("th").length; i++){
        if(cabecera.getElementsByTagName("th")[i].innerHTML == colGrade){
            columnaFinal = i;
        }
    }

    for(var j = cuerpo.getElementsByTagName("tr").length - 1; j>0; j--){
        if(cuerpo.getElementsByTagName("tr")[j].getElementsByTagName("td")[columnaFinal-1].innerHTML == numberGrade){
            tabla.deleteRow(cuerpo.getElementsByTagName("tr")[j].rowIndex);
        }
    }
}
