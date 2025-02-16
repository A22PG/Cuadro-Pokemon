import "./style.css";

document.querySelector("#app").innerHTML = `
    <div style="min-width: 450px; max-width:450px; border-radius: 25px; background:#FFD700; padding: 1em;">
   <div style="text-align:center; font-size:2em; padding:.5em;">'''Pikachu'''</div>
   <div style="display: flex; align-items: center;">
      <div style="flex: 25%; text-align: left; white-space: nowrap;">ピカチュウ (Pikachu)</div>
      <div style="flex: 75%; text-align: right;">#0025</div>
   </div>
   <div style="min-width:425px; max-width:425px; border-radius:25px; background:#fff; padding:1em; text-align:center">
      <img id="imagenPokemonCuadro" src="public/Pikachu_hembra_HOME.png" height="200;">
      <hr style="border: 2px solid #dddddd; border-radius: 5px;">
      <div style="display:flex; align-items: center; justify-content: space-around">
         <!-- Masculino -->
        <div id="btnMacho" class="outer-circle">
            <div class="middle-circle blue transparent">
                <div class="inner-circle">
                    <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg" alt="Símbolo masculino">
                </div>
            </div>
        </div>
        <!-- Femenino -->
        <div id="btnHembra" class="outer-circle red">
            <div class="middle-circle">
                <div class="inner-circle red">
                    <img class="svg-icon white" src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg" alt="Símbolo femenino">
                </div>
            </div>
        </div>
         <div style="width: 2px; height: 100px; background: #dddddd;"></div>
         <!-- Variocolor -->
        <div id="btnShiny" class="outer-circle">
            <div class="middle-circle yellow transparent">
                <div class="inner-circle">
                    <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/7/72/latest/20220508212633/Variocolor_icon_HOME.png" alt="Símbolo variocolor">
                </div>
            </div>
        </div>
     </div>
     <br>
      <div id="seccion1" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif;">
         <div id="seccion1menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <span>&#8592;</span>
         </div>
         <div id="seccion1texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Normal</div>
         <div id="seccion1mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc;display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <span>&#8594;</span>
         </div>
      </div>
     
     <br>
     <div id="seccion2" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif;">
         <div id="seccion2menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <span>&#8592;</span>
         </div>
         <div id="seccion2texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Texto de prueba</div>
         <div id="seccion2mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc;display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <span>&#8594;</span>
         </div>
      </div>
     
   </div>
</div>

`;

let selector1 = 0;
let selector2 = 0;
let secciones = [
    {
      tipo: "Común"
    },
    {
      tipo: "Con gorro",
      opciones: ["Gorra blanca", "Gorra negra"]
    }
  ];

let imagenPokemonCuadro = document.querySelector("#imagenPokemonCuadro");
let btnMacho = document.querySelector("#btnMacho");
let btnHembra = document.querySelector("#btnHembra");
let btnShiny = document.querySelector("#btnShiny");
let seccion1 = document.querySelector("#seccion1")
let btnSec1Mas = document.querySelector("#seccion1mas");
let btnSec1Texto = document.querySelector("#seccion1texto");
let btnSec1Menos = document.querySelector("#seccion1menos");
let seccion2 = document.querySelector("#seccion2")
let btnSec2Mas = document.querySelector("#seccion2mas");
let btnSec2Texto = document.querySelector("#seccion2texto");
let btnSec2Menos = document.querySelector("#seccion2menos");

let pokemon = "Pikachu"
let isMacho = false;
let isHembra = true;
let isShiny = false;
let isSeccion1 = "Común"
let isSeccion2 = "Común"

let imagenFinal = "";

constructorImagenFinal();

btnMacho.addEventListener("click", () => {
  isMacho = isMacho ? false : true;
  isHembra = isHembra ? false : true;
  btnMacho.classList.toggle("blue")
  btnMacho.querySelector(".middle-circle").classList.toggle("blue")
  btnMacho.querySelector(".middle-circle").classList.toggle("transparent");
  btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue")
  btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

  btnHembra.classList.toggle("red")
  btnHembra.querySelector(".middle-circle").classList.toggle("red")
  btnHembra.querySelector(".middle-circle").classList.toggle("transparent");
  btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red")
  btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

  constructorImagenFinal();
});

btnHembra.addEventListener("click", () => {
  isMacho = isMacho ? false : true;
  isHembra = isHembra ? false : true;
  btnHembra.classList.toggle("red")
  btnHembra.querySelector(".middle-circle").classList.toggle("red")
  btnHembra.querySelector(".middle-circle").classList.toggle("transparent");
  btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red")
  btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

  btnMacho.classList.toggle("blue")
  btnMacho.querySelector(".middle-circle").classList.toggle("blue")
  btnMacho.querySelector(".middle-circle").classList.toggle("transparent");
  btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue")
  btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

  constructorImagenFinal();

});

btnShiny.addEventListener("click", () => {
  isShiny = isShiny ? false : true;
  btnShiny.classList.toggle("yellow")
  btnShiny.querySelector(".middle-circle").classList.toggle("yellow");
  btnShiny.querySelector(".middle-circle").classList.toggle("transparent");
  btnShiny.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("yellow")
  btnShiny.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

  constructorImagenFinal();
})


function constructorImagenFinal(){
  imagenFinal = "public/" + pokemon
  imagenFinal += isMacho ? "_macho" : (isHembra ? "_hembra" : "")
  imagenFinal += isSeccion1 == "Común" ? "" : ("_" + isSeccion1)
  imagenFinal += (isSeccion2 == "Común" || isSeccion2 == null) ? "" : ("_" + isSeccion2)
  imagenFinal += isShiny ? "_variocolor" : ""
  imagenFinal += "_HOME.png"

  console.log(imagenFinal)
  imagenPokemonCuadro.src = imagenFinal
}


btnSec1Mas.addEventListener("click", () => {

    
    isSeccion1 = secciones[codSelector1(1)].tipo;
    btnSec1Texto.textContent = isSeccion1;

    /*if (secciones[selector1].opciones){
        seccion2.style.display = "flex";
        isSeccion2 = secciones[selector1].opciones[selector2];
        // Da error
        btnSec2Texto.textContent = isSeccion2;
    }
    else{
        btnSec2Texto = "Común"
        seccion2.style.display = "none";
        
    }*/
  
    constructorImagenFinal();
});

btnSec1Menos.addEventListener("click", () => {
    isSeccion1 = secciones[codSelector1(-1)].tipo;
    btnSec1Texto.textContent = isSeccion1;

    /*if (secciones[selector1].opciones){
        seccion2.style.display = "flex";
        isSeccion2 = secciones[selector1].opciones[selector2];
        // Da error
        btnSec2Texto.textContent = isSeccion2;
    }
    else{
        btnSec2Texto = "Común"
        seccion2.style.display = "none";
    }*/

    constructorImagenFinal();

   
})


function codSelector1(tipo) {
    let maxSelector = secciones.filter(item => typeof item === 'string' || (item && item.tipo)).length;
    console.log(selector1)
    selector1 = tipo == 1 ? (selector1 + 1) : (selector1 - 1)
    selector1 = selector1 < 0 ? (maxSelector - 1) : selector1;
    selector1 = selector1 > (maxSelector - 1) ? 0 : selector1;
console.log(selector1)
    return selector1
  }

  /*function codSelector2(tipo) {
    let maxSelector = secciones.filter(item => typeof item === 'string' || (item && item.tipo)).length;
    console.log(selector1)
    selector2 = tipo == 1 ? (selector1 + 1) : (selector1 - 1)
    selector2 = selector1 < 0 ? (maxSelector - 1) : selector1;
    selector2 = selector1 > (maxSelector - 1) ? 0 : selector1;
console.log(selector1)
    return selector1
  }*/