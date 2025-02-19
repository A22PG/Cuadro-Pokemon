(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))h(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&h(f)}).observe(document,{childList:!0,subtree:!0});function q(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function h(e){if(e.ep)return;e.ep=!0;const i=q(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
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

`;let n=0,L=0,a=[{tipo:"Común"},{tipo:"Con gorro",opciones:["pikachu_gorras","Gorra negra"]}],S=document.querySelector("#imagenPokemonCuadro"),r=document.querySelector("#btnMacho"),c=document.querySelector("#btnHembra"),d=document.querySelector("#btnShiny");document.querySelector("#seccion1");let w=document.querySelector("#btnSec1Mas"),k=document.querySelector("#seccion1Texto"),M=document.querySelector("#btnSec1Menos"),v=document.querySelector("#seccion2");document.querySelector("#btnSec2Menos");let C=document.querySelector("#seccion2Texto");document.querySelector("#btnSec2Mas");const s={normal:{normal:{tipo:["Eléctrico"],altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}]},"Con gorra":{pikachu_gorras:{tipo:["Eléctrico con gorras"],genero:"m",altura:.4,peso:6,habilidad:[{nombre:"Electricidad Estática"},{nombre:"Pararrayos",oculta:!0}]}}}};let E="Pikachu",m=!1,g=!0,b=!1,t="Común",o="Común",l="";p();r.addEventListener("click",()=>{m=!m,g=!g,r.classList.toggle("blue"),r.querySelector(".middle-circle").classList.toggle("blue"),r.querySelector(".middle-circle").classList.toggle("transparent"),r.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue"),r.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),c.classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("transparent"),c.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red"),c.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),p()});c.addEventListener("click",()=>{m=!m,g=!g,c.classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("transparent"),c.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red"),c.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),r.classList.toggle("blue"),r.querySelector(".middle-circle").classList.toggle("blue"),r.querySelector(".middle-circle").classList.toggle("transparent"),r.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue"),r.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),p()});d.addEventListener("click",()=>{b=!b,d.classList.toggle("yellow"),d.querySelector(".middle-circle").classList.toggle("yellow"),d.querySelector(".middle-circle").classList.toggle("transparent"),d.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("yellow"),d.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),p()});function p(){t=t=="normal"?"Común":t,l="public/"+E,l+=m?"_macho":g?"_hembra":"",l+=t=="Común"?"":"_"+t,l+=o=="Común"||o==null?"":"_"+o,l+=b?"_variocolor":"",l+="_HOME.png",console.log(l),S.src=l,S.onerror}w.addEventListener("click",()=>{n=(n+1)%a.length,x()});M.addEventListener("click",()=>{n=(n-1+a.length)%a.length,x()});function P(){t="normal";let u;typeof s.normal[t]=="object"?u=s.normal[t][o]?s.normal[t][o]:s.normal[t]:t==="normal"&&Object.keys(s.normal).length===1?(u=s.normal[t],console.log("Solo 'normal' está disponible, ocultando barra.")):(u=s.normal[t],console.log("Más tipos disponibles, mostrando barra.")),console.log(u)}function x(){t=a[n].tipo,k.textContent=t,a[n].opciones?(v.style.display="flex",o=a[n].opciones[L],C.textContent=o):(o="Común",v.style.display="none"),P(),p()}
