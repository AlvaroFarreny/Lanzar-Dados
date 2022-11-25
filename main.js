// Llamar a los objetos HTML que vamos a editar
let dadoA = document.getElementById("dadoA");
let dadoB = document.getElementById("dadoB");
let textoA = document.getElementById("resultadoA");
let textoB = document.getElementById("resultadoB");
let suma = document.getElementById("suma");

let modoA = "parado"; 
let modoB = "parado"; 

let urls = []
    urls[0] = "img/1.png";
    urls[1] = "img/2.png";
    urls[2] = "img/3.png";
    urls[3] = "img/4.png";
    urls[4] = "img/5.png";
    urls[5] = "img/6.png";

//valores aleatorios para asignar a los dados
randA = 0; 
randB = 0; 

// Función de doble click
function lanzardados(){
    modoA = "girando";
    // Elegir dado aleatorio
    randA = Math.floor(Math.random()*6);
    randB = Math.floor(Math.random()*6); 
    //Cambiamos la imagen del dado
    dadoB.src=urls[randB]; 
    dadoA.src=urls[randA]; 
    //No mostramos el resultado mientras giramos los dados
    textoA.innerText = "Lanzando dado..."; 
    textoB.innerText = "Lanzando dado..."; 
    suma.innerText = "Esperando a los dados...";
}

// Función de click simple
function parardados(){
    modoA = "parado";
    //Actualizar el texto con el resultado
    textoA.innerText = "Ha salido un " + (randA+1); 
    textoB.innerText = "Ha salido un " + (randB+1); 
    //Para que no calcule la suma con un número aleatorio que tenía el otro dado mientras giraba    
    if(modoB=="parado") 
    {
        suma.innerText = "En total suman " + (randA+randB+2) + " puntos";
    }
}

//Para mantener los dados girando indefinidamente
function bucle(){ 
    if(modoA=="girando"){ 
        lanzardados(); 
    }
    //tiempo de giro de los dados en milisegundos
    setTimeout(() => { bucle(); }, 150); 
}

bucle(); 