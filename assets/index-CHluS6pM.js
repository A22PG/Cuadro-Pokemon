(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))v(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&v(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function v(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
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

`;let i=0,y=[{tipo:"Común"},{tipo:"Con gorro",opciones:["Gorra blanca","Gorra negra"]}],x=document.querySelector("#imagenPokemonCuadro"),r=document.querySelector("#btnMacho"),c=document.querySelector("#btnHembra"),o=document.querySelector("#btnShiny");document.querySelector("#seccion1");let S=document.querySelector("#seccion1mas"),b=document.querySelector("#seccion1texto"),q=document.querySelector("#seccion1menos");document.querySelector("#seccion2");document.querySelector("#seccion2mas");document.querySelector("#seccion2texto");document.querySelector("#seccion2menos");let L="Pikachu",u=!1,g=!0,p=!1,d="Común",l="";n();r.addEventListener("click",()=>{u=!u,g=!g,r.classList.toggle("blue"),r.querySelector(".middle-circle").classList.toggle("blue"),r.querySelector(".middle-circle").classList.toggle("transparent"),r.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue"),r.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),c.classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("transparent"),c.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red"),c.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),n()});c.addEventListener("click",()=>{u=!u,g=!g,c.classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("red"),c.querySelector(".middle-circle").classList.toggle("transparent"),c.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red"),c.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),r.classList.toggle("blue"),r.querySelector(".middle-circle").classList.toggle("blue"),r.querySelector(".middle-circle").classList.toggle("transparent"),r.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue"),r.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),n()});o.addEventListener("click",()=>{p=!p,o.classList.toggle("yellow"),o.querySelector(".middle-circle").classList.toggle("yellow"),o.querySelector(".middle-circle").classList.toggle("transparent"),o.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("yellow"),o.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white"),n()});function n(){l="public/"+L,l+=u?"_macho":g?"_hembra":"",l+=d=="Común"?"":"_"+d,l+="",l+=p?"_variocolor":"",l+="_HOME.png",console.log(l),x.src=l}S.addEventListener("click",()=>{d=y[h(1)].tipo,b.textContent=d,n()});q.addEventListener("click",()=>{d=y[h(-1)].tipo,b.textContent=d,n()});function h(f){let s=y.filter(a=>typeof a=="string"||a&&a.tipo).length;return console.log(i),i=f==1?i+1:i-1,i=i<0?s-1:i,i=i>s-1?0:i,console.log(i),i}
