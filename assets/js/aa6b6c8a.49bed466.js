"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Web Storage API",l={unversionedId:"manual/runtime/web_storage_api",id:"manual/runtime/web_storage_api",title:"Web Storage API",description:"Deno 1.10 introduced the",source:"@site/runtime/manual/runtime/web_storage_api.md",sourceDirName:"manual/runtime",slug:"/manual/runtime/web_storage_api",permalink:"/runtime/manual/runtime/web_storage_api",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Location API",permalink:"/runtime/manual/runtime/location_api"},next:{title:"Workers",permalink:"/runtime/manual/runtime/workers"}},s={},p=[{value:"Example",id:"example",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-storage-api"},"Web Storage API"),(0,r.kt)("p",null,"Deno 1.10 introduced the\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"},"Web Storage API"),"\nwhich provides an API for storing string keys and values. Persisting data works\nsimilar to a browser, and has a 10MB storage limit. The global ",(0,r.kt)("inlineCode",{parentName:"p"},"sessionStorage"),"\nobject only persists data for the current execution context, while\n",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," persists data from execution to execution."),(0,r.kt)("p",null,"In a browser, ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," persists data uniquely per origin (effectively the\nprotocol plus hostname plus port). As of Deno 1.16, Deno has a set of rules to\ndetermine what is a unique storage location:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When using the ",(0,r.kt)("inlineCode",{parentName:"li"},"--location")," flag, the origin for the location is used to\nuniquely store the data. That means a location of ",(0,r.kt)("inlineCode",{parentName:"li"},"http://example.com/a.ts"),"\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"http://example.com/b.ts")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"http://example.com:80/")," would all share the\nsame storage, but ",(0,r.kt)("inlineCode",{parentName:"li"},"https://example.com/")," would be different."),(0,r.kt)("li",{parentName:"ul"},"If there is no location specifier, but there is a ",(0,r.kt)("inlineCode",{parentName:"li"},"--config")," configuration\nfile specified, the absolute path to that configuration file is used. That\nmeans ",(0,r.kt)("inlineCode",{parentName:"li"},"deno run --config deno.jsonc a.ts")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"deno run --config deno.jsonc b.ts")," would share the same storage, but\n",(0,r.kt)("inlineCode",{parentName:"li"},"deno run --config tsconfig.json a.ts")," would be different."),(0,r.kt)("li",{parentName:"ul"},'If there is no configuration or location specifier, Deno uses the absolute\npath to the main module to determine what storage is shared. The Deno REPL\ngenerates a "synthetic" main module that is based off the current working\ndirectory where ',(0,r.kt)("inlineCode",{parentName:"li"},"deno")," is started from. This means that multiple invocations\nof the REPL from the same path will share the persisted ",(0,r.kt)("inlineCode",{parentName:"li"},"localStorage")," data.")),(0,r.kt)("p",null,"This means, unlike versions prior to 1.16, ",(0,r.kt)("inlineCode",{parentName:"p"},"localStorage")," is always available in\nthe main process."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The following snippet accesses the local storage bucket for the current origin\nand adds a data item to it using ",(0,r.kt)("inlineCode",{parentName:"p"},"setItem()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'localStorage.setItem("myDemo", "Deno App");\n')),(0,r.kt)("p",null,"The syntax for reading the localStorage item is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const cat = localStorage.getItem("myDemo");\n')),(0,r.kt)("p",null,"The syntax for removing the localStorage item is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'localStorage.removeItem("myDemo");\n')),(0,r.kt)("p",null,"The syntax for removing all the localStorage items is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"localStorage.clear();\n")))}m.isMDXComponent=!0}}]);