"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[136],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return t?o.createElement(h,i(i({ref:n},m),{},{components:t})):o.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},83883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const r={},i="Using jsdom with Deno",s={unversionedId:"manual/advanced/jsx_dom/jsdom",id:"manual/advanced/jsx_dom/jsdom",title:"Using jsdom with Deno",description:"jsdom is a pure JavaScript implementation of",source:"@site/runtime/manual/advanced/jsx_dom/jsdom.md",sourceDirName:"manual/advanced/jsx_dom",slug:"/manual/advanced/jsx_dom/jsdom",permalink:"/runtime/manual/advanced/jsx_dom/jsdom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Using Twind with Deno",permalink:"/runtime/manual/advanced/jsx_dom/twind"},next:{title:"Using deno-dom with Deno",permalink:"/runtime/manual/advanced/jsx_dom/deno_dom"}},l={},d=[{value:"Defining an <code>import_map.json</code>",id:"defining-an-import_mapjson",level:3},{value:"Setting up a configuration file",id:"setting-up-a-configuration-file",level:3},{value:"Basic example",id:"basic-example",level:2}],m={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-jsdom-with-deno"},"Using jsdom with Deno"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom"},"jsdom")," is a pure JavaScript implementation of\nmany web standards, notably the WHATWG DOM and HTML Standards. It's main goal is\nto be comprehensive and standards compliant and does not specifically consider\nperformance."),(0,a.kt)("p",null,"If you are interested in server side rendering, then both\n",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/advanced/jsx_dom/deno_dom"},"deno-dom")," and ",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/advanced/jsx_dom/linkedom"},"LinkeDOM"),' are better choices. If\nyou are trying to run code in a "virtual" browser that needs to be standards\nbased, then it is possible that jsdom is suitable for you.'),(0,a.kt)("p",null,"While jsdom works under the Deno CLI, it does not type check. This means you\nhave to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--no-check=remote")," option on the command line to avoid\ndiagnostics stopping the execution of your programme."),(0,a.kt)("p",null,"Having sound typing in an editor requires some changes to the workflow as well,\nas the way jsdom types are provided are declared as a global type definition\nwith a globally named module, as well as leveraging the built in types from the\nbuilt-in DOM libraries."),(0,a.kt)("p",null,"This means if you want strong typing and intelligent auto-completion in your\neditor while using the Deno language server, you have to perform some extra\nsteps."),(0,a.kt)("h3",{id:"defining-an-import_mapjson"},"Defining an ",(0,a.kt)("inlineCode",{parentName:"h3"},"import_map.json")),(0,a.kt)("p",null,"You need to map the bare specifier ",(0,a.kt)("inlineCode",{parentName:"p"},'"jsdom"')," to the imported version of jsdom.\nThis allows Deno to correctly apply the types to the import in the way they were\nspecified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsdom": "https://esm.sh/jsdom"\n}\n')),(0,a.kt)("h3",{id:"setting-up-a-configuration-file"},"Setting up a configuration file"),(0,a.kt)("p",null,"You will want to set up a ",(0,a.kt)("inlineCode",{parentName:"p"},"deno.jsonc")," configuration file in the root of your\nworkspace with both TypeScript library information as well as specifying the\nimport map defined above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "compilerOptions": {\n    "lib": [\n      "deno.ns",\n      "dom",\n      "dom.iterable",\n      "dom.asynciterable"\n    ]\n  },\n  "importMap": "./import_map.json"\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: we are using an unpinned version of jsdom above. You should consider\npinning the version to the version you know you want to use.")),(0,a.kt)("h2",{id:"basic-example"},"Basic example"),(0,a.kt)("p",null,"This example will take a test string and parse it as HTML and generate a DOM\nstructure based on it. It will then query that DOM structure, picking out the\nfirst heading it encounters and print out the text content of that heading:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { JSDOM } from "jsdom";\nimport { assert } from "https://deno.land/std@0.208.0/assert/mod.ts";\n\nconst { window: { document } } = new JSDOM(\n  `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Hello from Deno</title>\n  </head>\n  <body>\n    <h1>Hello from Deno</h1>\n    <form>\n      <input name="user">\n      <button>\n        Submit\n      </button>\n    </form>\n  </body>\n</html>`,\n  {\n    url: "https://example.com/",\n    referrer: "https://example.org/",\n    contentType: "text/html",\n    storageQuota: 10000000,\n  },\n);\n\nconst h1 = document.querySelector("h1");\nassert(h1);\n\nconsole.log(h1.textContent);\n')))}u.isMDXComponent=!0}}]);