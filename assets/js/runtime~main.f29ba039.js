(()=>{"use strict";var e,a,t,r,f,b={},c={};function d(e){var a=c[e];if(void 0!==a)return a.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=b,d.c=c,e=[],d.O=(a,t,r,f)=>{if(!t){var b=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],f=e[i][2];for(var c=!0,o=0;o<t.length;o++)(!1&f||b>=f)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(c=!1,f<b&&(b=f));if(c){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[t,r,f]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);d.r(f);var b={};a=a||[null,t({}),t([]),t(t)];for(var c=2&r&&e;"object"==typeof c&&!~a.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,d.d(f,b),f},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({37:"414229c3",261:"910adc33",331:"e96e8e62",508:"13f17fa4",526:"58b28a50",816:"75656697",1108:"1f89f6be",1235:"a7456010",1383:"5b4f17f1",1674:"8b56690a",1816:"a2065270",1873:"f4d8752b",2067:"293257d8",2503:"c4aebc73",2713:"fad93737",2808:"bb8eb83e",3361:"c377a04b",3639:"9ed2362e",3769:"e9020183",4134:"393be207",4303:"3549c65e",4432:"7d81afdb",4583:"1df93b7f",4717:"1f032d64",4913:"3b9f98b5",4956:"99c739b1",5047:"b809dd47",5489:"402e64a4",5742:"aba21aa0",6061:"1f391b9e",6667:"f9e79a9e",7022:"47f33e4c",7098:"a7bd4aaa",7191:"a4117527",7291:"879c38f4",7490:"f4fecb1d",7513:"b43102f4",7729:"58567395",7939:"9d6140d8",8401:"17896441",8517:"d9060d0e",8540:"59eaa08d",8545:"f954c69b",8737:"4e8c5bc4",8815:"91b2960c",9048:"a94703ab",9114:"23a6e1b1",9219:"3aca5f9b",9376:"c917f6fa",9638:"80a8c72b",9647:"5e95c892",9722:"d514cad3",9910:"14ef2aa3"}[e]||e)+"."+{37:"e4b3b232",261:"de100880",331:"7871796c",508:"b92afb95",526:"d519b54b",816:"8a6ce27f",1108:"717eb597",1235:"9de05d2b",1383:"59a91d5e",1674:"f931e87b",1816:"8ae7f36b",1873:"8bc6eacc",2067:"7dcbf24c",2237:"6b89f734",2503:"0ae7236c",2713:"923eb3f6",2808:"1ed65656",3361:"7cee4e7d",3639:"bc909f30",3769:"e2b5d67c",4134:"03b8d65d",4303:"e300388e",4432:"217940ee",4583:"2ccffaab",4717:"e98c022f",4913:"2d854559",4956:"c7206f72",5047:"436474eb",5489:"2c56843a",5742:"7420608c",6061:"d9eed990",6667:"99989f7e",7022:"60fc6c90",7098:"d8423cbf",7191:"c25121fd",7291:"6acae1d1",7490:"712b7383",7513:"f8981a80",7729:"33820445",7939:"0aba4716",8401:"b55e8d60",8517:"4a869836",8540:"3c11831b",8545:"aa2169ef",8737:"5d29c2f1",8815:"8162b1c1",9048:"55f003b4",9114:"80fbcc80",9219:"1d61261f",9376:"152d423a",9408:"bc530ce9",9638:"77699eaa",9647:"3fb7b6a7",9722:"abecf810",9910:"4b01f174"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},f="opensource-docs:",d.l=(e,a,t,b)=>{if(r[e])r[e].push(a);else{var c,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+t){c=u;break}}c||(o=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,d.nc&&c.setAttribute("nonce",d.nc),c.setAttribute("data-webpack",f+t),c.src=e),r[e]=[a];var l=(a,t)=>{c.onerror=c.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),f&&f.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),o&&document.head.appendChild(c)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/docs/",d.gca=function(e){return e={17896441:"8401",58567395:"7729",75656697:"816","414229c3":"37","910adc33":"261",e96e8e62:"331","13f17fa4":"508","58b28a50":"526","1f89f6be":"1108",a7456010:"1235","5b4f17f1":"1383","8b56690a":"1674",a2065270:"1816",f4d8752b:"1873","293257d8":"2067",c4aebc73:"2503",fad93737:"2713",bb8eb83e:"2808",c377a04b:"3361","9ed2362e":"3639",e9020183:"3769","393be207":"4134","3549c65e":"4303","7d81afdb":"4432","1df93b7f":"4583","1f032d64":"4717","3b9f98b5":"4913","99c739b1":"4956",b809dd47:"5047","402e64a4":"5489",aba21aa0:"5742","1f391b9e":"6061",f9e79a9e:"6667","47f33e4c":"7022",a7bd4aaa:"7098",a4117527:"7191","879c38f4":"7291",f4fecb1d:"7490",b43102f4:"7513","9d6140d8":"7939",d9060d0e:"8517","59eaa08d":"8540",f954c69b:"8545","4e8c5bc4":"8737","91b2960c":"8815",a94703ab:"9048","23a6e1b1":"9114","3aca5f9b":"9219",c917f6fa:"9376","80a8c72b":"9638","5e95c892":"9647",d514cad3:"9722","14ef2aa3":"9910"}[e]||e,d.p+d.u(e)},(()=>{var e={5354:0,1869:0};d.f.j=(a,t)=>{var r=d.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var f=new Promise(((t,f)=>r=e[a]=[t,f]));t.push(r[2]=f);var b=d.p+d.u(a),c=new Error;d.l(b,(t=>{if(d.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var f=t&&("load"===t.type?"missing":t.type),b=t&&t.target&&t.target.src;c.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",c.name="ChunkLoadError",c.type=f,c.request=b,r[1](c)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var r,f,b=t[0],c=t[1],o=t[2],n=0;if(b.some((a=>0!==e[a]))){for(r in c)d.o(c,r)&&(d.m[r]=c[r]);if(o)var i=o(d)}for(a&&a(t);n<b.length;n++)f=b[n],d.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return d.O(i)},t=self.webpackChunkopensource_docs=self.webpackChunkopensource_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();