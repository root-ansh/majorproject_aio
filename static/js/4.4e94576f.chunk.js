(this.webpackJsonpaio=this.webpackJsonpaio||[]).push([[4],{30:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(30);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},32:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},67:function(e,t,n){"use strict";n.r(t);var r=n(30),a=n(31),i=n(32),o=n(0),c=n.n(o);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s="undefined"!=typeof window&&window.cordova&&window.cordova.require("cordova/modulemapper"),u=s&&s.getOriginalSymbol(window,"File")||File,m=s&&s.getOriginalSymbol(window,"FileReader")||FileReader;function f(e){return new Promise((function(t,n){var r=new m;r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)},r.readAsDataURL(e)}))}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return new Promise((function(r){for(var a=e.split(","),i=a[0].match(/:(.*?);/)[1],o=atob(a[1]),c=o.length,l=new Uint8Array(c);c--;)l[c]=o.charCodeAt(c);var s=new Blob([l],{type:i});s.name=t,s.lastModified=n,r(s)}))}function h(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){return t(r)},r.onerror=function(e){return n(e)},r.src=e}))}function g(e){var t=l(E(e.width,e.height),2),n=t[0];return t[1].drawImage(e,0,0,n.width,n.height),n}function p(e){return new Promise((function(t,n){var r,a,i=function(){try{return a=g(r),t([r,a])}catch(e){return n(e)}},o=function(t){try{return f(e).then((function(e){try{return h(e).then((function(e){try{return r=e,i()}catch(e){return n(e)}}),n)}catch(e){return n(e)}}),n)}catch(e){return n(e)}};try{return createImageBitmap(e).then((function(e){try{return r=e,i()}catch(e){return o()}}),o)}catch(e){o()}}))}function w(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return new Promise((function(i,o){var c;return"function"==typeof OffscreenCanvas&&e instanceof OffscreenCanvas?e.convertToBlob({type:t,quality:a}).then(function(e){try{return(c=e).name=n,c.lastModified=r,l.call(this)}catch(e){return o(e)}}.bind(this),o):d(e.toDataURL(t,a),n,r).then(function(e){try{return c=e,l.call(this)}catch(e){return o(e)}}.bind(this),o);function l(){return i(c)}}))}function v(e){return new Promise((function(t,n){var r=new m;r.onload=function(e){var n=new DataView(e.target.result);if(65496!=n.getUint16(0,!1))return t(-2);for(var r=n.byteLength,a=2;a<r;){if(n.getUint16(a+2,!1)<=8)return t(-1);var i=n.getUint16(a,!1);if(a+=2,65505==i){if(1165519206!=n.getUint32(a+=2,!1))return t(-1);var o=18761==n.getUint16(a+=6,!1);a+=n.getUint32(a+4,o);var c=n.getUint16(a,o);a+=2;for(var l=0;l<c;l++)if(274==n.getUint16(a+12*l,o))return t(n.getUint16(a+12*l+8,o))}else{if(65280!=(65280&i))break;a+=n.getUint16(a,!1)}}return t(-1)},r.onerror=function(e){return n(e)},r.readAsArrayBuffer(e)}))}function b(e,t){var n,r=e.width,a=e.height,i=t.maxWidthOrHeight,o=e;if(Number.isInteger(i)&&(r>i||a>i)){var c=l(E(r,a),2);o=c[0],n=c[1],r>a?(o.width=i,o.height=a/r*i):(o.width=r/a*i,o.height=i),n.drawImage(e,0,0,o.width,o.height)}return o}function y(e,t){var n=e.width,r=e.height,a=l(E(n,r),2),i=a[0],o=a[1];switch(4<t&&t<9?(i.width=r,i.height=n):(i.width=n,i.height=r),t){case 2:o.transform(-1,0,0,1,n,0);break;case 3:o.transform(-1,0,0,-1,n,r);break;case 4:o.transform(1,0,0,-1,0,r);break;case 5:o.transform(0,1,1,0,0,0);break;case 6:o.transform(0,1,-1,0,r,0);break;case 7:o.transform(0,-1,-1,0,r,n);break;case 8:o.transform(0,-1,1,0,0,n)}return o.drawImage(e,0,0,n,r),i}function E(e,t){var n,r;try{r=(n=new OffscreenCanvas(e,t)).getContext("2d")}catch(e){r=(n=document.createElement("canvas")).getContext("2d")}return n.width=e,n.height=t,[n,r]}function O(e,t){return new Promise((function(n,r){var a,i,o,c,s,u;return a=t.maxIteration||10,i=1024*t.maxSizeMB*1024,p(e).then(function(m){try{var f=l(m,2);return f[0],o=b(o=f[1],t),new Promise((function(n,r){var a;if(!(a=t.exifOrientation))return v(e).then(function(e){try{return a=e,i.call(this)}catch(e){return r(e)}}.bind(this),r);function i(){return n(a)}return i.call(this)})).then(function(m){try{return t.exifOrientation=m,o=y(o,t.exifOrientation),c=1,w(o,e.type,e.name,e.lastModified,c).then(function(t){try{var m,f=function t(){if(a--&&u.size>i){var n,s,m,f=l(E(n=.9*o.width,s=.9*o.height),2);return m=f[0],f[1].drawImage(o,0,0,n,s),"image/jpeg"===e.type&&(c*=.9),w(m,e.type,e.name,e.lastModified,c).then((function(e){try{return u=e,o=m,t}catch(e){return r(e)}}),r)}return[1]},d=function(){return n(u)};return(s=t).size<=i?n(s):(u=s,(m=function(e){for(;e;){if(e.then)return void e.then(m,r);try{if(e.pop){if(e.length)return e.pop()?d.call(this):e;e=f}else e=e.call(this)}catch(e){return r(e)}}}.bind(this))(f))}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}catch(e){return r(e)}}.bind(this),r)}))}var C,I=0,F=function(e){return new Worker(URL.createObjectURL(new Blob(["(".concat(e,")()")])))}((function(){var e=!1;self.addEventListener("message",(function(t){return new Promise((function(n,r){var a,i,o,c,l=t.data;a=l.file,i=l.id,o=l.imageCompressionLibUrl,c=l.options;var s=function(){try{return n()}catch(e){return r(e)}},u=function(e){try{return self.postMessage({error:e.message+"\n"+e.stack,id:i}),s()}catch(e){return r(e)}};try{var m;return e||(importScripts(o),e=!0),N(a,c).then((function(e){try{return m=e,self.postMessage({file:m,id:i}),s()}catch(e){return u(e)}}),u)}catch(e){u(e)}}))}))}));function x(e,t){return new Promise((function(n,r){return new Promise((function(a,i){C||(C=function(e){return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))}("\n    function imageCompression (){return (".concat(N,").apply(null, arguments)}\n\n    imageCompression.getDataUrlFromFile = ").concat(N.getDataUrlFromFile,"\n    imageCompression.getFilefromDataUrl = ").concat(N.getFilefromDataUrl,"\n    imageCompression.loadImage = ").concat(N.loadImage,"\n    imageCompression.drawImageInCanvas = ").concat(N.drawImageInCanvas,"\n    imageCompression.drawFileInCanvas = ").concat(N.drawFileInCanvas,"\n    imageCompression.canvasToFile = ").concat(N.canvasToFile,"\n    imageCompression.getExifOrientation = ").concat(N.getExifOrientation,"\n    imageCompression.handleMaxWidthOrHeight = ").concat(N.handleMaxWidthOrHeight,"\n    imageCompression.followExifOrientation = ").concat(N.followExifOrientation,"\n\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    getExifOrientation = imageCompression.getExifOrientation\n    handleMaxWidthOrHeight = imageCompression.handleMaxWidthOrHeight\n    followExifOrientation = imageCompression.followExifOrientation\n\n    getNewCanvasAndCtx = ").concat(E,"\n    \n    CustomFileReader = FileReader\n    \n    CustomFile = File\n    \n    function _slicedToArray(arr, n) { return arr }\n\n    function compress (){return (").concat(O,").apply(null, arguments)}\n    ")));var o=I++;return F.addEventListener("message",(function e(t){t.data.id===o&&(F.removeEventListener("message",e),t.data.error&&r(new Error(t.data.error)),n(t.data.file))})),F.postMessage({file:e,id:o,imageCompressionLibUrl:C,options:t}),a()}))}))}function N(e,t){return new Promise((function(n,r){var a,i;if(t.maxSizeMB=t.maxSizeMB||Number.POSITIVE_INFINITY,t.useWebWorker="boolean"!=typeof t.useWebWorker||t.useWebWorker,!(e instanceof Blob||e instanceof u))return r(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return r(new Error("The file given is not an image"));if(i="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,!t.useWebWorker||"function"!=typeof Worker||i)return O(e,t).then(function(e){try{return a=e,l.call(this)}catch(e){return r(e)}}.bind(this),r);var o=function(){try{return l.call(this)}catch(e){return r(e)}}.bind(this),c=function(n){try{return console.warn("Run compression in web worker failed:",n,", fall back to main thread"),O(e,t).then((function(e){try{return a=e,o()}catch(e){return r(e)}}),r)}catch(e){return r(e)}};try{return x(e,t).then((function(e){try{return a=e,o()}catch(e){return c(e)}}),c)}catch(e){c(e)}function l(){try{a.name=e.name,a.lastModified=e.lastModified}catch(e){}return n(a)}}))}N.getDataUrlFromFile=f,N.getFilefromDataUrl=d,N.loadImage=h,N.drawImageInCanvas=g,N.drawFileInCanvas=p,N.canvasToFile=w,N.getExifOrientation=v,N.handleMaxWidthOrHeight=b,N.followExifOrientation=y;var j=N;t.default=function(){var e=Object(o.useState)(null),t=Object(i.a)(e,2),n=t[0],l=t[1],s=Object(o.useState)(!1),u=Object(i.a)(s,2),m=u[0],f=u[1],d=Object(o.useState)(!1),h=Object(i.a)(d,2),g=h[0],p=h[1],w=Object(o.useState)({from:""}),v=Object(i.a)(w,2),b=v[0],y=v[1];return c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"level is-mobile"},c.a.createElement("div",{className:"level-item has-text-centered"},c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"control has-icons-left"},c.a.createElement("div",{className:"select is-rounded"},c.a.createElement("select",{name:"from",onChange:function(e){y(Object(a.a)({},b,Object(r.a)({},e.target.name,e.target.value)))}},c.a.createElement("option",{defaultValue:!0},"Original File Types"),c.a.createElement("option",null,"PDF"),c.a.createElement("option",null,"PNG"),c.a.createElement("option",null,"JPEG/JPG"),c.a.createElement("option",null,"WEBP"),c.a.createElement("option",null,"ICO"))),c.a.createElement("div",{className:"icon is-small is-left"},c.a.createElement("i",{className:"fas fa-globe"})))))),c.a.createElement("p",{style:{color:"red"}},"*All Compression algo working except pdf compression*"),c.a.createElement("div",{className:"level is-mobile"},c.a.createElement("div",{className:"level-item has-text-centered"},c.a.createElement("div",{className:"file is-dark has-name is-boxed"},c.a.createElement("label",{className:"file-label"},c.a.createElement("input",{className:"file-input",type:"file",name:"image",accept:"image/*",onChange:function(e){l(e.target.files[0])}}),c.a.createElement("span",{className:"file-cta"},c.a.createElement("span",{className:"file-icon"},c.a.createElement("i",{className:"fas fa-upload"})),c.a.createElement("span",{className:"file-label"},"Choose a file\u2026")),c.a.createElement("span",{className:"file-name"},null===n?null:n.name))))),c.a.createElement("div",{className:"level has-centered"},g?c.a.createElement("div",{className:"columns level-item has-centered"},c.a.createElement("div",{className:"column is-two-thirds"},c.a.createElement("progress",{className:"progress is-dark",max:"100"},"30%"))):c.a.createElement("div",{className:"level-item has-centered"},c.a.createElement("button",{className:"button is-dark is-rounded",onClick:function(e){if(e.preventDefault(),null!==n)if(n.size>112582912)alert("File Size must be less then 11mb.");else if(""!==b.from&&"Original File Types"!==b.from){if(b.from.toLowerCase()!==n.name.split(".").pop()){if("JPEG/JPG"!==b.from)return alert("Mismatch in selected file type: "+n.name.split(".").pop()+" with 'From' Select box: "+b.from.toLowerCase()),!1;if("jpg"!==n.name.split(".").pop()&&"jpeg"!==n.name.split(".").pop())return alert("Mismatch in selected file type: "+n.name.split(".").pop()+" with 'From' Select box: "+b.from.toLowerCase()),!1}if(f(!1),p(!0),"JPEG/JPG"!==b.from&&"PNG"!==b.from&&"ICO"!==b.from||function(e,t,n){var r=1;700>e.size/1024&&(r=.5),r=10>e.size/1024?.01:1,j(e,{maxSizeMB:r,maxWidthOrHeight:1920,useWebWorker:!0}).then((function(r){var a=r,i=new FileReader;i.readAsDataURL(a),i.onloadend=function(){var a=i.result;t(!1),n(!0),document.getElementById("size").innerText="File Size: "+(r.size/1024).toFixed(2)+"kb",document.getElementById("downloader").download=e.name,document.getElementById("downloader").href=a}})).catch((function(e){console.log(e.message)}))}(n,p,f),"WEBP"===b.from){var t=new FileReader;t.readAsDataURL(n),t.onload=function(){!function(e){var t=document.getElementById("jpgtopng").getContext("2d"),n=new Image;t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight,n.onload=function(){t.drawImage(n,0,0,window.innerWidth,window.innerHeight)},n.src=e,setTimeout((function(){var e=document.getElementById("jpgtopng").toDataURL("image/webp",.03).replace(/^data:image\/[^;]/,"data:application/octet-stream"),t=Math.round(3*(e.length-"data:image/webp;base64,".length)/4)/1024;document.getElementById("size").innerText="File Size: "+t.toFixed(2)+"kb"}),3e3)}(t.result)}}if("PDF"===b.from){var r=new FileReader;r.readAsArrayBuffer(n),r.onload=function(){!function(e){console.log(e);var t=document.getElementById("jpgtopng").getContext("2d"),n=new Image;t.canvas.width=window.innerWidth,t.canvas.height=window.innerHeight,n.onload=function(){t.drawImage(n,0,0,window.innerWidth,window.innerHeight)},n.src=e}(r.result),f(!0),p(!1)}}}else alert("'From' file type is not selected!");else alert("Please first select file and types")}},c.a.createElement("span",{className:"icon"},c.a.createElement("i",{className:"fas fa-dice-d20"})),c.a.createElement("span",null,"Convert")))),c.a.createElement("canvas",{className:"container has-centered",id:"jpgtopng",style:{display:"none"}}),c.a.createElement("div",{className:"has-centered"},m?c.a.createElement("div",{className:"has-centered"},c.a.createElement("div",{className:"container level-item has-centered"},c.a.createElement("p",null,"Your converted file is ready to download!")),c.a.createElement("div",{className:"container level-item has-centered"},c.a.createElement("p",{id:"size"})),c.a.createElement("br",null),c.a.createElement("div",{className:"container level-item has-centered"},c.a.createElement("a",{onClick:function(){var e;"WEBP"===b.from&&function(e,t){document.getElementById("downloader").download=e+".webp";for(var n=document.getElementById("jpgtopng").toDataURL("image/webp",.7).replace(/^data:image\/[^;]/,"data:application/octet-stream"),r=atob(n.split(",")[1]),a=n.split(",")[0].split(":")[1].split(";")[0],i=new ArrayBuffer(r.length),o=new Uint8Array(i),c=0;c<r.length;c++)o[c]=r.charCodeAt(c);var l=new DataView(i),s=new Blob([l],{type:a});document.getElementById("downloader").href=URL.createObjectURL(s),t(!1)}(n.name.split(".")[0],f),"PDF"===b.from&&(e=n.name.split(".")[0],document.getElementById("downloader").download=e+".pdf")},id:"downloader",href:"#i",className:"button is-dark is-outlined"},c.a.createElement("span",{className:"icon is-small"},c.a.createElement("i",{className:"fas fa-download"}))))):null),c.a.createElement("hr",null))}}}]);
//# sourceMappingURL=4.4e94576f.chunk.js.map