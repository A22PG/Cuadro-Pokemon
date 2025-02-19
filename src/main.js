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
      <div id="seccion1" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif;  margin-top:.75em">
         <div id="btnSec1Menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <span>&#8592;</span>
         </div>
         <div id="seccion1Texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Común</div>
         <div id="btnSec1Mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc;display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <span>&#8594;</span>
         </div>
      </div>
     
     <div id="seccion2" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif; margin-top:.75em">
         <div id="btnSec2Menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
            <span>&#8592;</span>
         </div>
         <div id="seccion2Texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Común</div>
         <div id="btnSec2Mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc;display: flex; align-items: center; justify-content: center; cursor: pointer;">
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
        opciones: ["pikachu_gorras", "Gorra negra"]
    }
];

let imagenPokemonCuadro = document.querySelector("#imagenPokemonCuadro");
let btnMacho = document.querySelector("#btnMacho");
let btnHembra = document.querySelector("#btnHembra");
let btnShiny = document.querySelector("#btnShiny");
let seccion1 = document.querySelector("#seccion1")
let btnSec1Mas = document.querySelector("#btnSec1Mas");
let seccion1Texto = document.querySelector("#seccion1Texto");
let btnSec1Menos = document.querySelector("#btnSec1Menos");
let seccion2 = document.querySelector("#seccion2")
let btnSec2Menos = document.querySelector("#btnSec2Menos");
let seccion2Texto = document.querySelector("#seccion2Texto");
let btnSec2Mas = document.querySelector("#btnSec2Mas");

const infoPokemon = {
    "normal": {
        "normal": {
            "tipo": [
                "Eléctrico"
            ],
            "altura": 0.4,
            "peso": 6,
            "habilidad": [
                {
                    "nombre": "Electricidad Estática"
                },
                {
                    "nombre": "Pararrayos",
                    "oculta": true
                }
            ]
        },
        "Con gorra": {
            "pikachu_gorras": {
                "tipo": [
                    "Eléctrico con gorras"
                ],
                "genero": "m",
                "altura": 0.4,
                "peso": 6,
                "habilidad": [
                    {
                        "nombre": "Electricidad Estática"
                    },
                    {
                        "nombre": "Pararrayos",
                        "oculta": true
                    }
                ]
            }
        }
    },
    "giga": {
        "tipo": [
            "Eléctrico"
        ],
        "altura": 21,
        "habilidad": [
            {
                "nombre": "Electricidad Estática"
            },
            {
                "nombre": "Pararrayos",
                "oculta": true
            }
        ]
    }
}

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


function constructorImagenFinal() {

    isSeccion1 = isSeccion1 == "normal" ? "Común" : isSeccion1;
    imagenFinal = "public/" + pokemon
    imagenFinal += isMacho ? "_macho" : (isHembra ? "_hembra" : "")
    imagenFinal += isSeccion1 == "Común" ? "" : ("_" + isSeccion1)
    imagenFinal += (isSeccion2 == "Común" || isSeccion2 == null) ? "" : ("_" + isSeccion2)
    imagenFinal += isShiny ? "_variocolor" : ""
    imagenFinal += "_HOME.png"

    console.log(imagenFinal)
    imagenPokemonCuadro.src = imagenFinal
    imagenPokemonCuadro.onerror
}


btnSec1Mas.addEventListener("click", () => {
    selector1 = (selector1 + 1) % secciones.length;
    actualizarSecciones();
});


btnSec1Menos.addEventListener("click", () => {
    selector1 = (selector1 - 1 + secciones.length) % secciones.length;
    actualizarSecciones();
});

function reorganizarInfo() {
    isSeccion1 = "Común" ? "normal" : isSeccion1;

    let datosPokemon;

    if (typeof infoPokemon.normal[isSeccion1] === 'object') {
        // Si isSeccion1 tiene subniveles, intentamos acceder a isSeccion2 dentro de isSeccion1
        datosPokemon = infoPokemon.normal[isSeccion1][isSeccion2]
            ? infoPokemon.normal[isSeccion1][isSeccion2]  // Si existe isSeccion2, usamos eso
            : infoPokemon.normal[isSeccion1];  // Si no, usamos solo isSeccion1
    } else {
        // Verificamos si es la sección "normal" y si no hay otros tipos además de "normal"
        if (isSeccion1 === "normal" && Object.keys(infoPokemon.normal).length === 1) {
            // Si solo hay la sección "normal", no mostramos la barra de selección
            datosPokemon = infoPokemon.normal[isSeccion1];
            // Aquí puedes agregar lógica para ocultar la barra de selección
            console.log("Solo 'normal' está disponible, ocultando barra.");
        } else {
            // Si hay más tipos disponibles o no es "normal", mostramos la barra
            datosPokemon = infoPokemon.normal[isSeccion1];
            // Aquí puedes agregar lógica para mostrar la barra de selección
            console.log("Más tipos disponibles, mostrando barra.");
        }
    }

    console.log(datosPokemon)
    
    /*if (datosPokemon.genero === undefined) {
        btnMacho.style.display = "flex";
        btnHembra.style.display = "flex";
        if(btnHembra || btnMacho){
            btnMacho = true
        }
    } else {
        if (datosPokemon.genero === "m") {
            btnMacho.style.display = "flex";
            btnHembra.style.display = "none";
            isMacho = true;
            isHembra = false;
        } else if (datosPokemon.genero === "h") {
            btnMacho.style.display = "none";
            btnHembra.style.display = "flex";
            isMacho = false;
            isHembra = true;
        } else {
            btnMacho.style.display = "none";
            btnHembra.style.display = "none";
            isMacho = false;
            isHembra = false;
        }
    }*/
    
}

function actualizarSecciones() {
    isSeccion1 = secciones[selector1].tipo;
    seccion1Texto.textContent = isSeccion1;

    if (secciones[selector1].opciones) {
        seccion2.style.display = "flex";
        isSeccion2 = secciones[selector1].opciones[selector2];
        seccion2Texto.textContent = isSeccion2;

    } else {
        isSeccion2 = "Común";
        seccion2.style.display = "none";
    }

    reorganizarInfo();
    constructorImagenFinal();
}