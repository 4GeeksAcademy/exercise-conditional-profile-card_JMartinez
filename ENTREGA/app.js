
const boton = document.getElementById("boton");
const Numero = document.getElementById("inpute");
const Picastop = document.getElementById("imgtop");
const Picasbot = document.getElementById("imgbot");

//cargar numero
function cambiar(valor) {

    let resultado = valor;

    let l_top1 = document.getElementById("inpute");

    l_top1.innerHTML = resultado;
    
    
}





const numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const palo = ["♦", "♥", "♠","♣"]; 





function valor_numero() {

    let n_alea = Math.floor(Math.random() * 13 );

    
    let resu = numero[n_alea];

    return resu;



}

function valor_palo() {

    let n_palo = Math.floor(Math.random() * 4 );

    let resu_p = palo[n_palo];

    if (resu_p == "♥" || resu_p == "♦") {
        
    Picastop.style.color = "red";
    Picasbot.style.color = "red";

}else{

    Picastop.style.color = "black";
    Picasbot.style.color = "black";

}

    return resu_p;
    
    
}







//funcion encargada de carcar la escusa en el parrafo "escus"
function render (){


    const res = valor_numero();
    let vare_top = valor_palo() ;
    let vare_bot = vare_top;


    Numero.innerHTML = res;
    Picastop.innerHTML = vare_bot;
    Picasbot.innerHTML = vare_top;
      
} 



