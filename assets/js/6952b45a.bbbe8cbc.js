"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3352],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),m=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=m(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(t),p=r,h=c["".concat(l,".").concat(p)]||c[p]||u[p]||a;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<a;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var o=t(87462),r=(t(67294),t(3905));const a={},i="Using LinkeDOM with Deno",s={unversionedId:"manual/advanced/jsx_dom/linkedom",id:"manual/advanced/jsx_dom/linkedom",title:"Using LinkeDOM with Deno",description:"LinkeDOM is a DOM-like namespace to",source:"@site/runtime/manual/advanced/jsx_dom/linkedom.md",sourceDirName:"manual/advanced/jsx_dom",slug:"/manual/advanced/jsx_dom/linkedom",permalink:"/runtime/manual/advanced/jsx_dom/linkedom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Using deno-dom with Deno",permalink:"/runtime/manual/advanced/jsx_dom/deno_dom"},next:{title:"Language Server Overview",permalink:"/runtime/manual/advanced/language_server/overview"}},l={},m=[{value:"Basic example",id:"basic-example",level:2},{value:"Alternative API",id:"alternative-api",level:2}],d={toc:m},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-linkedom-with-deno"},"Using LinkeDOM with Deno"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebReflection/linkedom"},"LinkeDOM")," is a DOM-like namespace to\nbe used in environments, like Deno, which don't implement the DOM."),(0,r.kt)("p",null,"LinkeDOM focuses on being fast and implementing features useful for server side\nrendering. It may allow you to do things that are invalid DOM operations.\n",(0,r.kt)("a",{parentName:"p",href:"/runtime/manual/advanced/jsx_dom/deno_dom"},"deno-dom")," and ",(0,r.kt)("a",{parentName:"p",href:"/runtime/manual/advanced/jsx_dom/jsdom"},"jsdom")," focus on correctness. While\ncurrently deno-dom is slower than LinkeDOM in some cases, both are significantly\nfaster than jsdom, so if you require correctness or features not related to\nserver side rendering, consider deno-dom."),(0,r.kt)("p",null,"While LinkeDOM works under the Deno CLI, it does not type check. While the\nprovided types work well when using an editor like VSCode, attempting to\nstrictly type check them, like Deno does by default, at runtime, it will fail.\nThis is the same if you were to use ",(0,r.kt)("inlineCode",{parentName:"p"},"tsc")," to type check the code. The maintainer\nhas indicated they aren't interested in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/WebReflection/linkedom/issues/87"},"fixing this issue"),". This\nmeans for Deno, you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-check=remote")," to avoid diagnostics\nstopping the execution of your programme."),(0,r.kt)("p",null,"LinkedDOM runs under Deno Deploy, along with deno_dom, but jsdom does not."),(0,r.kt)("h2",{id:"basic-example"},"Basic example"),(0,r.kt)("p",null,"This example will take a test string and parse it as HTML and generate a DOM\nstructure based on it. It will then query that DOM structure, picking out the\nfirst heading it encounters and print out the text content of that heading:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { DOMParser } from "https://esm.sh/linkedom";\nimport { assert } from "https://deno.land/std@0.208.0/assert/mod.ts";\n\nconst document = new DOMParser().parseFromString(\n  `<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <title>Hello from Deno</title>\n    </head>\n    <body>\n      <h1>Hello from Deno</h1>\n      <form>\n        <input name="user">\n        <button>\n          Submit\n        </button>\n      </form>\n    </body>\n  </html>`,\n  "text/html",\n);\n\nassert(document);\nconst h1 = document.querySelector("h1");\nassert(h1);\n\nconsole.log(h1.textContent);\n')),(0,r.kt)("h2",{id:"alternative-api"},"Alternative API"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseHTML()")," can be better suited for certain SSR workloads. This is\nsimilar to jsdom's ",(0,r.kt)("inlineCode",{parentName:"p"},"JSDOM()"),' function, in the sense it gives you a "sandbox" of\na ',(0,r.kt)("inlineCode",{parentName:"p"},"window")," scope you can use to access API's outside of the scope of the\n",(0,r.kt)("inlineCode",{parentName:"p"},"document"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { parseHTML } from "https://esm.sh/linkedom";\n\nconst { document, customElements, HTMLElement } = parseHTML(`<!DOCTYPE html>\n  <html lang="en">\n    <head>\n      <title>Hello from Deno</title>\n    </head>\n    <body>\n      <h1>Hello from Deno</h1>\n      <form>\n        <input name="user">\n        <button>\n          Submit\n        </button>\n      </form>\n    </body>\n  </html>`);\n\ncustomElements.define(\n  "custom-element",\n  class extends HTMLElement {\n    connectedCallback() {\n      console.log("it works \ud83e\udd73");\n    }\n  },\n);\n\ndocument.body.appendChild(document.createElement("custom-element"));\n\ndocument.toString(); // the string of the document, ready to send to a client\n')))}u.isMDXComponent=!0}}]);