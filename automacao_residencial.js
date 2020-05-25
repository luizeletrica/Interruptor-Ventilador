function AlteraRele1(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("rele").innerHTML="<div class='rele1_ligado'></div>";
		document.getElementById("botao").innerHTML="<a href='/?desligar' class='botao'>Desliga</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("rele").innerHTML="<div class='rele1_desligado'></div>";
        document.getElementById("botao").innerHTML="<a href='/?ligar' class='botao'>Liga</a>";
    }
}


function AlteraRele2(){
    var estado_2 = document.getElementById("estado_2").innerHTML;
	if(estado_2 === "0"){
        document.getElementById("estado_2").innerHTML="1";
        document.getElementById("VENT").innerHTML="<div class='VENT_ligado'></div>";
		document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>Ligado</a>";
		document.getElementById("estado_3").innerHTML="1";
        document.getElementById("DESLIG").innerHTML="<div class='DESLIG_ligado'></div>";
		document.getElementById("botao_3").innerHTML="<a href='/?2_desligar' class='botao_3'>Desligar</a>";
	    document.getElementById("botao_4").innerHTML="<a href='/?2_desligar' class='botao_4'>Desligar</a>";
    
    } else {
       
document.getElementById("estado_2").innerHTML="0";
        document.getElementById("VENT").innerHTML="<div class='VENT_desligado'></div>";
        document.getElementById("botao_2").innerHTML="<a href='/?2_ligar' class='botao_2'>Ventilador</a>";
    }
}
 
 function AlteraRele4(){
    var estado_4 = document.getElementById("estado_4").innerHTML;
    if(estado_4 === "0"){
        document.getElementById("estado_4").innerHTML="1";
        document.getElementById("EXAUST").innerHTML="<div class='EXAUST_ligado'></div>";
		document.getElementById("botao_4").innerHTML="<a href='/?4_ligar' class='botao_4'>Ligado</a>";
		document.getElementById("estado_3").innerHTML="1";
        document.getElementById("DESLIG").innerHTML="<div class='DESLIG_ligado'></div>";
		document.getElementById("botao_3").innerHTML="<a href='/?4_desligar' class='botao_3'>Desligar</a>";
	    document.getElementById("botao_2").innerHTML="<a href='/?4_desligar' class='botao_2'>Desligar</a>";
    } else {
        document.getElementById("estado_4").innerHTML="0";
        document.getElementById("EXAUST").innerHTML="<div class='EXAUST_desligado'></div>";
        document.getElementById("botao_4").innerHTML="<a href='/?4_ligar' class='botao_4'>Exaustor</a>";
    }
}


 function AlteraRele3(){
    var estado_3 = document.getElementById("estado_3").innerHTML;
    if(estado_3 === "0"){
        document.getElementById("estado_3").innerHTML="1";
        document.getElementById("DESLIG").innerHTML="<div class='DESLIG_ligado'></div>";
		document.getElementById("botao_3").innerHTML="<a href='/?3_desligar' class='botao_3'>Desligar</a>";
    } else {
        document.getElementById("estado_3").innerHTML="0";
        document.getElementById("DESLIG").innerHTML="<div class='DESLIG_desligado'></div>";
        document.getElementById("botao_3").innerHTML="<a href='/?3_ligar' class='botao_3'>Desligado</a>";
    }
}

