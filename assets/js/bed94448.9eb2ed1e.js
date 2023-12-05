"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[7555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},i="Compressing response bodies",s={unversionedId:"api/compression",id:"api/compression",title:"Compressing response bodies",description:"Compressing the response body to save bandwidth is a common practice. To take",source:"@site/deploy/api/compression.md",sourceDirName:"api",slug:"/api/compression",permalink:"/deploy/api/compression",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployAPIHome",previous:{title:"Node.js built-in APIs",permalink:"/deploy/api/runtime-node"},next:{title:"TCP sockets and TLS",permalink:"/deploy/api/runtime-sockets"}},p={},l=[{value:"When is compression skipped?",id:"when-is-compression-skipped",level:3},{value:"What happens to my <code>Etag</code> header?",id:"what-happens-to-my-etag-header",level:3}],c={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"compressing-response-bodies"},"Compressing response bodies"),(0,r.kt)("p",null,"Compressing the response body to save bandwidth is a common practice. To take\nsome work off your shoulder, we built the capabilities directly into Deploy."),(0,r.kt)("p",null,"Deno Deploy supports brotli and gzip compression. Compression is applied when\nthe following conditions are met."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The request to your deployment has ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding"},(0,r.kt)("inlineCode",{parentName:"a"},"Accept-Encoding")),"\nheader set to either ",(0,r.kt)("inlineCode",{parentName:"li"},"br")," (brotli) or ",(0,r.kt)("inlineCode",{parentName:"li"},"gzip"),"."),(0,r.kt)("li",{parentName:"ol"},"The response from your deployment includes the ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type"},(0,r.kt)("inlineCode",{parentName:"a"},"Content-Type")),"\nheader."),(0,r.kt)("li",{parentName:"ol"},"The provided content type is compressible; we use\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jshttp/mime-db/blob/master/db.json"},"this database")," to\ndetermine if the content type is compressible."),(0,r.kt)("li",{parentName:"ol"},"The response body size is greater than 20 bytes.")),(0,r.kt)("p",null,"When Deploy compresses the response body, it will set ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Encoding: gzip"),"\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Encoding: br")," header to the response based on the compression\nalgorithm used."),(0,r.kt)("h3",{id:"when-is-compression-skipped"},"When is compression skipped?"),(0,r.kt)("p",null,"Deno Deploy skips the compression if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The response has ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding"},(0,r.kt)("inlineCode",{parentName:"a"},"Content-Encoding"))," header."),(0,r.kt)("li",{parentName:"ul"},"The response has ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range"},(0,r.kt)("inlineCode",{parentName:"a"},"Content-Range"))," header."),(0,r.kt)("li",{parentName:"ul"},"The response's ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control"},(0,r.kt)("inlineCode",{parentName:"a"},"Cache-Control"))," header has\n",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#other"},(0,r.kt)("inlineCode",{parentName:"a"},"no-transform"))," value (e.g.\n",(0,r.kt)("inlineCode",{parentName:"li"},"cache-control: public, no-transform"),").")),(0,r.kt)("h3",{id:"what-happens-to-my-etag-header"},"What happens to my ",(0,r.kt)("inlineCode",{parentName:"h3"},"Etag")," header?"),(0,r.kt)("p",null,"When you set an Etag header with the response, we convert the header value to a\nWeak Etag if we apply compression to your response body. If it is already a Weak\nEtag, we don't touch the header."))}m.isMDXComponent=!0}}]);