"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[8768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return t?o.createElement(h,i(i({ref:n},m),{},{components:t})):o.createElement(h,i({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},36294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const r={},i="Using deno-dom with Deno",s={unversionedId:"manual/advanced/jsx_dom/deno_dom",id:"manual/advanced/jsx_dom/deno_dom",title:"Using deno-dom with Deno",description:"deno-dom is an implementation of DOM and HTML",source:"@site/runtime/manual/advanced/jsx_dom/deno_dom.md",sourceDirName:"manual/advanced/jsx_dom",slug:"/manual/advanced/jsx_dom/deno_dom",permalink:"/runtime/manual/advanced/jsx_dom/deno_dom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Using jsdom with Deno",permalink:"/runtime/manual/advanced/jsx_dom/jsdom"},next:{title:"Using LinkeDOM with Deno",permalink:"/runtime/manual/advanced/jsx_dom/linkedom"}},l={},d=[{value:"Basic example",id:"basic-example",level:2},{value:"Faster startup",id:"faster-startup",level:2}],m={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-deno-dom-with-deno"},"Using deno-dom with Deno"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/deno_dom"},"deno-dom"),' is an implementation of DOM and HTML\nparser in Deno. It is implemented in Rust (via Wasm) and TypeScript. There is\nalso a "native" implementation, leveraging the FFI interface.'),(0,a.kt)("p",null,"deno-dom aims for specification compliance, like jsdom and unlike LinkeDOM.\nCurrently, deno-dom is slower than LinkeDOM for things like parsing data\nstructures, but faster at some manipulation operations. Both deno-dom and\nLinkeDOM are significantly faster than jsdom."),(0,a.kt)("p",null,"As of deno_dom v0.1.22-alpha supports running on Deno Deploy. So if you want\nstrict standards alignment, consider using deno-dom over LinkeDOM."),(0,a.kt)("h2",{id:"basic-example"},"Basic example"),(0,a.kt)("p",null,"This example will take a test string and parse it as HTML and generate a DOM\nstructure based on it. It will then query that DOM structure, picking out the\nfirst heading it encounters and print out the text content of that heading:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";\nimport { assert } from "https://deno.land/std@0.208.0/assert/mod.ts";\n\nconst document = new DOMParser().parseFromString(\n  `<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <title>Hello from Deno</title>\n    </head>\n    <body>\n      <h1>Hello from Deno</h1>\n      <form>\n        <input name="user">\n        <button>\n          Submit\n        </button>\n      </form>\n    </body>\n  </html>`,\n  "text/html",\n);\n\nassert(document);\nconst h1 = document.querySelector("h1");\nassert(h1);\n\nconsole.log(h1.textContent);\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: the example uses an unpinned version from ",(0,a.kt)("inlineCode",{parentName:"p"},"deno_land/x"),", which you\nlikely don't want to do, because the version can change and cause unexpected\noutcomes. You should use the latest version of available of\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/deno_dom"},"deno-dom"),".")),(0,a.kt)("h2",{id:"faster-startup"},"Faster startup"),(0,a.kt)("p",null,"Just importing the ",(0,a.kt)("inlineCode",{parentName:"p"},"deno-dom-wasm.ts")," file bootstraps the Wasm code via top\nlevel await. The problem is that top level await blocks the module loading\nprocess. Especially with big Wasm projects, it is a lot more performant to\ninitialize the Wasm after module loading is complete."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"deno-dom")," has the solution for that, they provide an alternative version of the\nlibrary that does not automatically init the Wasm, and requires you to do it in\nthe code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  DOMParser,\n  initParser,\n} from "https://deno.land/x/deno_dom/deno-dom-wasm-noinit.ts";\n\n(async () => {\n  // initialize when you need it, but not at the top level\n  await initParser();\n\n  const doc = new DOMParser().parseFromString(\n    `<h1>Lorem ipsum dolor...</h1>`,\n    "text/html",\n  );\n})();\n')),(0,a.kt)("p",null,"In addition, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"deno-dom-native.ts")," (which requires the ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-ffi"),"\nflag) will bypass the Wasm startup penalty as well as will not require the\n",(0,a.kt)("inlineCode",{parentName:"p"},"init()")," startup time. This would only work with the Deno CLI and not Deploy."))}u.isMDXComponent=!0}}]);