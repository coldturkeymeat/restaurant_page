(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var c=n.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"2d3dd226bafdc4cf2836.png";function n(){const e=document.createElement("div"),n=document.createElement("h1"),c=document.createElement("p"),o=document.createElement("img");return e.id="main",n.textContent="Restaurant",c.textContent="This restaurant sucks",o.src=t,e.appendChild(n),e.appendChild(c),e.appendChild(o),e}document.body.appendChild(function(){const e=document.getElementById("content"),t=document.createElement("button"),c=document.createElement("button"),o=document.createElement("button");return t.textContent="Home",c.textContent="Contact",o.textContent="Menu",t.id="homeTab",o.id="menuTab",c.id="contactTab",console.log("hello"),e.appendChild(t),e.appendChild(o),e.appendChild(c),e.appendChild(n()),e}());const c=document.getElementById("contactTab"),o=document.getElementById("menuTab");document.getElementById("homeTab").onclick=function(){const e=document.getElementById("main");e.innerHTML="",e.appendChild(n())},c.onclick=function(){const e=document.getElementById("main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("p");return t.textContent="This is where the contact info goes",e.appendChild(t),e}())},o.onclick=function(){const e=document.getElementById("main");e.innerHTML="",e.appendChild(function(){const e=document.createElement("div"),t=document.createElement("p");return t.textContent="This is where the food goes",e.appendChild(t),e}())}})();