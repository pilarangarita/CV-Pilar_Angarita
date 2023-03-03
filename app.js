//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculta el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=9;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//Barras generales
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let figma = document.getElementById("figma");
crearBarra(figma);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let aftereffects = document.getElementById("aftereffects");
crearBarra(aftereffects);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

//Barras iniciales
let contadores = [-1,-1,-1,-1,-1,-1];
//prueba
let entro = false;

//función para animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 3, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 3, 1, intervalJavascript);
        },100);
        const intervalfigma = setInterval(function(){
            pintarBarra(figma, 5, 2, intervalfigma);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 9, 3, intervalPhotoshop);
        },100);
        const intervalaftereffects = setInterval(function(){
            pintarBarra(aftereffects, 5, 4, intervalaftereffects);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 9, 5, intervalIlustrator);
        },100);
    }
}

//llena una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#BA55D3";
    }else{
        clearInterval(interval)
    }
}

//detector del scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}
