(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9938:function(e,t,i){"use strict";var n=i(930),r=i(5696),a=i(7980);t.default=function(e){var t,i=e.src,o=e.sizes,c=e.unoptimized,g=void 0!==c&&c,m=e.priority,w=void 0!==m&&m,x=e.loading,k=e.lazyRoot,E=void 0===k?null:k,I=e.lazyBoundary,R=void 0===I?"200px":I,P=e.className,_=e.quality,q=e.width,L=e.height,N=e.style,D=e.objectFit,W=e.objectPosition,C=e.onLoadingComplete,M=e.loader,B=void 0===M?j:M,U=e.placeholder,F=void 0===U?"empty":U,H=e.blurDataURL,G=p(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),J=l.useContext(f.ImageConfigContext),T=l.useMemo((function(){var e=y||J||u.imageConfigDefault,t=[].concat(a(e.deviceSizes),a(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:i})}),[J]),V=G,Q=o?"responsive":"intrinsic";"layout"in V&&(V.layout&&(Q=V.layout),delete V.layout);var K="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(i)){var X=z(i)?i.default:i;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(H=H||X.blurDataURL,K=X.src,(!Q||"fill"!==Q)&&(L=L||X.height,q=q||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}i="string"===typeof i?i:K;var Y=A(q),Z=A(L),$=A(_),ee=!w&&("lazy"===x||"undefined"===typeof x);(i.startsWith("data:")||i.startsWith("blob:"))&&(g=!0,ee=!1);b.has(i)&&(ee=!1);var te,ie=d.useIntersection({rootRef:E,rootMargin:R,disabled:!ee}),ne=r(ie,2),re=ne[0],ae=ne[1],oe=!ee||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,ue={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:D,objectPosition:W};0;0;var de=Object.assign({},N,"raw"===Q?{aspectRatio:"".concat(Y," / ").concat(Z)}:ue),fe="blur"===F?{filter:"blur(20px)",backgroundSize:D||"cover",backgroundImage:'url("'.concat(H,'")'),backgroundPosition:W||"0% 0%"}:{};if("fill"===Q)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Y&&"undefined"!==typeof Z){var ge=Z/Y,me=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===Q?(ce.display="block",ce.position="relative",se=!0,le.paddingTop=me):"intrinsic"===Q?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",se=!0,le.maxWidth="100%",te="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===Q&&(ce.display="inline-block",ce.position="relative",ce.width=Y,ce.height=Z)}else 0;var he={src:v,srcSet:void 0,sizes:void 0};oe&&(he=S({config:T,src:i,unoptimized:g,layout:Q,width:Y,quality:$,sizes:o,loader:B}));var pe=i;0;var ye="imagesrcset",be="imagesizes";ye="imageSrcSet",be="imageSizes";var ve=(n(t={},ye,he.srcSet),n(t,be,he.sizes),t),we=l.default.useLayoutEffect,ze=l.useRef(C),Se=l.useRef(null);l.useEffect((function(){ze.current=C}),[C]),we((function(){re(Se.current)}),[re]),l.useEffect((function(){!function(e,t,i,n,r){var a=function(){var i=e.current;i&&(i.src!==v&&("decode"in i?i.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(b.add(t),"blur"===n&&(i.style.filter="",i.style.backgroundSize="",i.style.backgroundImage="",i.style.backgroundPosition=""),r.current)){var a=i.naturalWidth,o=i.naturalHeight;r.current({naturalWidth:a,naturalHeight:o})}})))};e.current&&(e.current.complete?a():e.current.onload=a)}(Se,pe,0,F,ze)}),[pe,Q,F,oe]);var Ae=h({isLazy:ee,imgAttributes:he,heightInt:Z,widthInt:Y,qualityInt:$,layout:Q,className:P,imgStyle:de,blurStyle:fe,imgRef:Se,loading:x,config:T,unoptimized:g,placeholder:F,loader:B,srcString:pe},V);return l.default.createElement(l.default.Fragment,null,"raw"===Q?l.default.createElement(O,Object.assign({},Ae)):l.default.createElement("span",{style:ce},se?l.default.createElement("span",{style:le},te?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:te}):null):null,l.default.createElement(O,Object.assign({},Ae))),w?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},ve))):null)};var o,c,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}(i(7294)),s=(o=i(6505))&&o.__esModule?o:{default:o},u=i(5980),d=i(7215),f=i(1059),g=(i(7206),i(4979));function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){m(e,t,i[t])}))}return e}function p(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1};var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom",experimentalLayoutRaw:!1},b=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,a=new URL("".concat(t.path).concat(x(i))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(x(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(x(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function S(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,o=e.width,c=e.quality,l=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var u=function(e,t,i,n){var r=e.deviceSizes,o=e.allSizes;if(n&&("fill"===i||"responsive"===i||"raw"===i)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(n);c)s.push(parseInt(c[2]));if(s.length){var u=.01*Math.min.apply(Math,s);return{widths:o.filter((function(e){return e>=r[0]*u})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,r,l),d=u.widths,f=u.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:i,quality:c,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:c,width:d[g]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t,i=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(i))}var O=function(e){var t=e.imgAttributes,i=e.heightInt,n=e.widthInt,r=e.qualityInt,a=e.layout,o=e.className,c=e.imgStyle,s=e.blurStyle,u=e.isLazy,d=e.imgRef,f=e.placeholder,g=e.loading,m=e.sizes,y=e.srcString,b=e.config,v=e.unoptimized,w=e.loader,z=p(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","imgRef","placeholder","loading","sizes","srcString","config","unoptimized","loader"]);return l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,t,"raw"!==a||m?{}:{height:i,width:n},{decoding:"async","data-nimg":a,className:o,ref:d,style:h({},c,s)})),(u||"blur"===f)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},z,S({config:b,src:y,unoptimized:v,layout:a,width:n,quality:r,sizes:m,loader:w}),"raw"!==a||m?{}:{height:i,width:n},{decoding:"async","data-nimg":a,style:c,className:o,loading:g||"lazy"}))))};function x(e){return"/"===e[0]?e.slice(1):e}},5675:function(e,t,i){e.exports=i(9938)}}]);