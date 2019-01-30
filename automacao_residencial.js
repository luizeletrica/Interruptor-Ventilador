function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='lamp_ligada'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='lamp_desligada'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Liga</a>";
    }
}

function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
    if(estado_2 === "0"){
        document.getElementById("estado_2").innerHTML="1";
        document.getElementById("rele_2").innerHTML="<div class='vent_ligado'></div>";
		document.getElementById("botao_2").innerHTML="<a href='/?2_desligar' class='botao_2'>Desligar</a>";
    } else {
        document.getElementById("estado_2").innerHTML="0";
        document.getElementById("rele_2").innerHTML="<div class='vent_desligado'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>Ventilador</a>";
    }
}
 
 function AlteraRele3(){
    var estado_3 = document.getElementById("estado_3").innerHTML;
    if(estado_3 === "0"){
        document.getElementById("estado_3").innerHTML="1";
        document.getElementById("rele_3").innerHTML="<div class='exasut_ligado'></div>";
		document.getElementById("botao_3").innerHTML="<a href='/?3_desligar' class='botao_3'>Desligar</a>";
    } else {
        document.getElementById("estado_3").innerHTML="0";
        document.getElementById("rele_3").innerHTML="<div class='exasut_desligado'></div>";
        document.getElementById("botao_3").innerHTML="<a href='/?3_ligar' class='botao_3'>Exaustor</a>";
    }
}

