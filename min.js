var vanillaSlideshow=function(){function e(){for(var e=y.random?m(0,f.length-1):0,a=0;a<f.length;a++)null!==f[a].getAttribute("data-src")&&(f[a].style.backgroundImage="url( "+f[a].getAttribute("data-src")+")"),a===e&&(f[a].className+=" vanilla-active"),c(f[a],"Transition",y.animationSpeed)}function a(){var e=document.querySelector("#"+h.getAttribute("id")+" .vanilla-active"),a=r(e)?r(e):f[0];if(e.className="vanilla-slide",a.className+=" vanilla-active",y.indicators){var i=document.querySelector("#"+p+" .vanilla-active"),n=r(i)?r(i):u.indicators[0];i.className=i.className.replace(/(?:^|\s)vanilla-active(?!\S)/g,""),n.className+=" vanilla-active"}}function i(){o();var e=document.querySelector("#"+h.getAttribute("id")+" .vanilla-active"),a=v(e)?v(e):f[f.length-1];if(e.className="vanilla-slide",a.className+=" vanilla-active",y.indicators){var i=document.querySelector("#"+p+" .vanilla-active"),n=v(i)?v(i):u.indicators[u.indicators.length-1];i.className=i.className.replace(/(?:^|\s)vanilla-active(?!\S)/g,""),n.className+=" vanilla-active"}y.slideshow&&s()}function n(){o(),a(),y.slideshow&&s()}function t(){for(var e=0;e<f.length;e++){var a=document.createElement("div"),i=document.getElementById(p).appendChild(a);i.addEventListener("click",function(){l(this)}),i.className=p,d(f[e],"vanilla-active")&&(i.className+=" vanilla-active")}u.indicators=g.getElementsByClassName(p)}function l(e){o();for(var a=0;a<f.length;a++)d(u.indicators[a],"vanilla-active")&&(u.indicators[a].className=u.indicators[a].className.replace(/(?:^|\s)vanilla-active(?!\S)/g,"")),d(f[a],"vanilla-active")&&(f[a].className="vanilla-slide");var a=Array.prototype.indexOf.call(u.indicators,e);u.indicators[a].className+=" vanilla-active",f[a].className+=" vanilla-active",y.slideshow&&s()}function s(){u.intervalSliding=setInterval(function(){a()},y.delay)}function o(){clearInterval(u.intervalSliding)}function c(e,a,i){e.style["webkit"+a]=i+" ease-in-out",e.style["Moz"+a]=i+" ease-in-out",e.style["ms"+a]=i+" ease-in-out",e.style["o"+a]=i+" ease-in-out"}function d(e,a){return(" "+e.className+" ").indexOf(" "+a+" ")>-1}function r(e){do e=e.nextSibling;while(e&&1!==e.nodeType);return e}function v(e){do e=e.previousSibling;while(e&&1!==e.nodeType);return e}function m(e,a){return Math.floor(Math.random()*(a-e+1)+e)}var u={},y={delay:5e3,arrows:!0,indicators:!0,random:!1,slideshow:!0,animationSpeed:"1s"},g=document.getElementById("vanilla-slideshow-container"),h=document.getElementById("vanilla-slideshow"),f=document.getElementById("vanilla-slideshow").getElementsByClassName("vanilla-slide"),w="vanilla-slideshow-previous",N="vanilla-slideshow-next",p="vanilla-indicators";return u.init=function(a){return g?(a&&"object"==typeof a&&(y.arrows=""!==a.arrows?a.arrows:y.arrows,y.indicators=""!==a.indicators?a.indicators:y.indicators,y.random=""!==a.random?a.random:y.random,y.slideshow=""!==a.slideshow?a.slideshow:y.slideshow,y.delay=a.delay?a.delay:y.delay,y.animationSpeed=a.animationSpeed?a.animationSpeed:y.animationSpeed),e(),void(f.length>1&&(y.arrows&&(document.getElementById(N).addEventListener("click",function(){n()}),document.getElementById(w).addEventListener("click",function(){i()}),document.getElementById(w).style.display="block",document.getElementById(N).style.display="block"),y.indicators&&t(),y.slideshow&&s()))):!1},u}(vanillaSlideshow);