parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"PcWv":[function(require,module,exports) {
module.exports=(()=>{const t=document.createElement("div"),e={backgroundColor:"black",border:"none",color:"#0f0",fontFamily:"Trebuchet MS",fontSize:"20px",fontWeight:"bold",margin:0,padding:"10px 20px",position:"absolute",transition:"all .05s ease-in",top:0,left:0,opacity:0,willChange:"top, left, opacity"};!function(o,n){Object.assign(t.style,e)}();const o=document.createElement("style"),n=document.createTextNode("\n    ::selection {\n      background-color: #0f0;\n      color: black;\n    }\n  ");o.appendChild(n),document.head.appendChild(o),t.textContent="CPL",document.body.appendChild(t),document.addEventListener("selectionchange",function(t,e=1e3){let o;return function(){clearTimeout(o),o=setTimeout(()=>t.apply(this,arguments),e)}}(()=>{let e=window.getSelection(),o=e.toString().length,{xPosition:n,yPosition:i}=function(t){let e=0,o=0;for(;"BODY"!=t.tagName;)e+=t.offsetLeft+t.clientLeft,o+=t.offsetTop+t.clientTop,t=t.offsetParent;return{xPosition:e,yPosition:o}}(e.anchorNode.parentElement);if(o<1)return t.style.top=0,t.style.left=0,void(t.style.opacity=0);t.textContent=`CPL: ${o}`,t.style.top=i-t.offsetHeight+"px",t.style.left=n+"px",t.style.opacity=1}))});
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=r(require("rdmkit-cpl"));function r(e){return e&&e.__esModule?e:{default:e}}(0,e.default)();
},{"rdmkit-cpl":"PcWv"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map