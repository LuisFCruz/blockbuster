!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/blockbuster/",n(n.s=2)}([function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a={baseUrl:"https://luisfcruz.github.io/blockbuster",path:"/blockbuster"};const i=async e=>(await fetch(e,{method:"GET"})).json(),r=async()=>{try{return await i(`${a.baseUrl}/movies.json`)}catch{return[]}},s=async e=>{try{return await i(`${a.baseUrl}/movies/${e}.json`)}catch{return{}}};class o extends HTMLElement{constructor(e,t){super(),this.router=e,this.movie=t}static get name(){return"b-movie-item"}connectedCallback(){const{title:e,image:t,release:n,rating:a,id:i}=this.movie,[,r]=n.match(/(\d{4})$/),s=`\n      <b-image src="${t}" title="Poster ${e}"></b-image>\n      <div>\n        <h2>\n          <a href="movie/${i}" alt="Acesar ${e}" >${e}</a>\n        </h2>\n        <span>${r}</span>\n        <span>Nota ${a.toLocaleString()}</span>\n      </div>\n    `;this.innerHTML=s,this.querySelector("a").addEventListener("click",this.handlerClick.bind(this),!1)}disconnectedCallback(){this.querySelector("a").removeEventListener("click",this.handlerClick.bind(this),!1)}handlerClick(e){e.preventDefault();const t=e.target.closest("a");this.router.navigateTo(t.href)}}customElements.define(o.name,o);class c extends HTMLElement{constructor(e){super(),this.router=e}static get name(){return"b-home"}async connectedCallback(){(await r()).forEach(e=>this.appendChild(new o(this.router,e)))}}customElements.define(c.name,c);class l extends HTMLElement{constructor(e){super(),this.movieId=e}static get name(){return"b-movie"}async connectedCallback(){const{title:e,originalTitle:t,release:n,genre:a,duration:i,recommended:r,image:o,synopsis:c}=await s(this.movieId),l=`\n      <article>\n        <h2>${e}</h2>\n        <div>\n          <b-image src="${o}" title="Poster ${e}"></b-image>\n          <p>${c}</p>\n        </div>\n        <b-datasheet\n          originalTitle="${t}"\n          release="${n}"\n          genre="${a}"\n          duration="${i}"\n          recommended="${r}"\n        ></b-datasheet>\n      </article>\n    `;this.innerHTML=l}}customElements.define(l.name,l);class d extends HTMLElement{constructor(e){super(),this.router=e}static get name(){return"b-header"}connectedCallback(){this.innerHTML='\n      <header>\n        <a href="/">\n          <h1>\n            Block<span>buster</span>\n          </h1>\n        </a>\n      </header>\n    ',this.querySelector("a").addEventListener("click",this.handlerClick.bind(this),!1)}disconnectedCallback(){this.querySelector("a").removeEventListener("click",this.handlerClick.bind(this),!1)}handlerClick(e){e.preventDefault();const t=e.target.closest("a");this.router.navigateTo(t.href)}}customElements.define(d.name,d);n(0);class u extends HTMLElement{constructor(){super()}static get name(){return"b-image"}connectedCallback(){const e=this.getAttribute("src"),t=this.getAttribute("title"),n=`\n      <figure>\n        <img src="${a.baseUrl}/images/${e}" alt=${t} />\n      </figure>\n    `;this.innerHTML=n}}customElements.define(u.name,u);class h extends HTMLElement{constructor(e){super(),this.movieId=e}static get name(){return"b-datasheet"}async connectedCallback(){const e=this.getAttribute("originalTitle"),t=this.getAttribute("release"),n=this.getAttribute("genre"),a=this.getAttribute("duration"),i=this.getAttribute("recommended"),r=`\n      <section>\n        <h3>Ficha Técnica</h3>\n        <b-datasheet-item label="Título Original" description="${e}" ></b-datasheet-item>\n          <b-datasheet-item label="Data de Lançamento" description="${t}" ></b-datasheet-item>\n          <b-datasheet-item label="Gênero" description="${n}" ></b-datasheet-item>\n          <b-datasheet-item label="Duração" description="${a}" ></b-datasheet-item>\n          <b-datasheet-item\n            label="Recomendação"\n            description="${"L"===i?"Recomendado para todas as idades":`Não recomendado para menores de ${i} anos`}"\n          ></b-datasheet-item>\n      </section>\n    `;this.innerHTML=r}}customElements.define(h.name,h);class m extends HTMLElement{constructor(){super()}static get name(){return"b-datasheet-item"}async connectedCallback(){const e=`\n        <div>\n          <span>${this.getAttribute("label")}:</span> ${this.getAttribute("description")}\n        </div>\n    `;this.innerHTML=e}}customElements.define(m.name,m);const b=new class{constructor(){this.routes=[]}add(e,t){const n=this._getPath(e);this.routes.push({uri:n,handler:t,rule:this._getRule(n)})}applay(){const[e]=this.routes;_handleNavigation({pathname:e.uri})}navigateTo(e){var t;t=t=>{window.history.pushState({},"",this._getPath(e)),this._handleNavigation(t)},document.body.addEventListener("click",e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const n=e.composedPath().filter(e=>"A"===e.tagName)[0];if(!n||n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const a=n.href;if(!a||-1!==a.indexOf("mailto:"))return;const i=window.location,r=i.origin||i.protocol+"//"+i.host;0===a.indexOf(r)&&(e.preventDefault(),a!==i.href&&(window.history.pushState({},"",a),t(i,e)))}),window.addEventListener("popstate",e=>t(window.location,e)),t(window.location,null)}_getPath(e){return`${a.path}${e}`}_getRule(e){const t=e.replace(/([\/])/g,"\\$1").replace(/\:id/g,"(\\d+)");return new RegExp("^"+t+"$","i")}_handleNavigation({pathname:e}){const t=this.routes.find(t=>this._testRoute(t,e));if(t){const n=this._getParams(t,e);t.handler.apply(null,n)}}_testRoute({rule:e},t){return e.test(t)}_getParams({rule:e},t){const n=t.match(e);if(n)return n.shift(),n}};window.addEventListener("load",()=>{const e=document.querySelector(".container");b.add("/",()=>{e.innerHTML="";const t=new d(b);e.appendChild(t);const n=new c(b);e.appendChild(n)}),b.add("/movie/:id",t=>{e.innerHTML="";const n=new d(b);e.appendChild(n);const a=new l(t);e.appendChild(a)}),b.applay()})}]);