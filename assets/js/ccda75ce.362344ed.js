"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[5655],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,h=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return t?o.createElement(h,l(l({ref:n},u),{},{components:t})):o.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},76654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=t(87462),a=(t(67294),t(3905));const r={},l="Program Lifecycle",i={unversionedId:"manual/runtime/program_lifecycle",id:"manual/runtime/program_lifecycle",title:"Program Lifecycle",description:"Deno supports browser compatible lifecycle events:",source:"@site/runtime/manual/runtime/program_lifecycle.md",sourceDirName:"manual/runtime",slug:"/manual/runtime/program_lifecycle",permalink:"/runtime/manual/runtime/program_lifecycle",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Foreign Function Interface",permalink:"/runtime/manual/runtime/ffi_api"},next:{title:"Stability",permalink:"/runtime/manual/runtime/stability"}},d={},s=[{value:"Example",id:"example",level:2},{value:"<code>beforeunload</code> Example",id:"beforeunload-example",level:2},{value:"<code>unhandledrejection</code> event Example:",id:"unhandledrejection-event-example",level:2}],u={toc:s},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"program-lifecycle"},"Program Lifecycle"),(0,a.kt)("p",null,"Deno supports browser compatible lifecycle events:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event#:~:text=The%20load%20event%20is%20fired,for%20resources%20to%20finish%20loading."},(0,a.kt)("inlineCode",{parentName:"a"},"load")),":\nfired when the whole page has loaded, including all dependent resources such\nas stylesheets and images."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event#:~:text=The%20beforeunload%20event%20is%20fired,want%20to%20leave%20the%20page."},(0,a.kt)("inlineCode",{parentName:"a"},"beforeunload")),":\nfired when the event loop has no more work to do and is about to exit.\nScheduling more asynchronous work (like timers or network requests) will cause\nthe program to continue."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/unload_event"},(0,a.kt)("inlineCode",{parentName:"a"},"unload")),":\nfired when the document or a child resource is being unloaded."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event"},(0,a.kt)("inlineCode",{parentName:"a"},"unhandledrejection")),":\nfired when a promise that has no rejection handler is rejected, ie. a promise\nthat has no ",(0,a.kt)("inlineCode",{parentName:"li"},".catch()")," handler or a second argument to ",(0,a.kt)("inlineCode",{parentName:"li"},".then()"),".")),(0,a.kt)("p",null,"You can use these events to provide setup and cleanup code in your program."),(0,a.kt)("p",null,"Listeners for ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," events can be asynchronous and will be awaited, this event\ncannot be canceled. Listeners for ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeunload")," need to be synchronous and can\nbe cancelled to keep the program running. Listeners for ",(0,a.kt)("inlineCode",{parentName:"p"},"unload")," events need to\nbe synchronous and cannot be cancelled."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"main.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import "./imported.ts";\n\nconst handler = (e: Event): void => {\n  console.log(`got ${e.type} event in event handler (main)`);\n};\n\nglobalThis.addEventListener("load", handler);\n\nglobalThis.addEventListener("beforeunload", handler);\n\nglobalThis.addEventListener("unload", handler);\n\nglobalThis.onload = (e: Event): void => {\n  console.log(`got ${e.type} event in onload function (main)`);\n};\n\nglobalThis.onbeforeunload = (e: Event): void => {\n  console.log(`got ${e.type} event in onbeforeunload function (main)`);\n};\n\nglobalThis.onunload = (e: Event): void => {\n  console.log(`got ${e.type} event in onunload function (main)`);\n};\n\nconsole.log("log from main script");\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"imported.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'const handler = (e: Event): void => {\n  console.log(`got ${e.type} event in event handler (imported)`);\n};\n\nglobalThis.addEventListener("load", handler);\nglobalThis.addEventListener("beforeunload", handler);\nglobalThis.addEventListener("unload", handler);\n\nglobalThis.onload = (e: Event): void => {\n  console.log(`got ${e.type} event in onload function (imported)`);\n};\n\nglobalThis.onbeforeunload = (e: Event): void => {\n  console.log(`got ${e.type} event in onbeforeunload function (imported)`);\n};\n\nglobalThis.onunload = (e: Event): void => {\n  console.log(`got ${e.type} event in onunload function (imported)`);\n};\n\nconsole.log("log from imported script");\n')),(0,a.kt)("p",null,"A couple notes on this example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"onload"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"onunload")," are prefixed with ",(0,a.kt)("inlineCode",{parentName:"li"},"globalThis"),", but\nyou could also use ",(0,a.kt)("inlineCode",{parentName:"li"},"self")," or no prefix at all.\n",(0,a.kt)("a",{parentName:"li",href:"https://lint.deno.land/#no-window-prefix"},"It is not recommended to use ",(0,a.kt)("inlineCode",{parentName:"a"},"window")," as a prefix"),"."),(0,a.kt)("li",{parentName:"ul"},"You can use ",(0,a.kt)("inlineCode",{parentName:"li"},"addEventListener")," and/or ",(0,a.kt)("inlineCode",{parentName:"li"},"onload"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"onunload")," to define handlers\nfor events. There is a major difference between them, let's run the example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ deno run main.ts\nlog from imported script\nlog from main script\ngot load event in event handler (imported)\ngot load event in event handler (main)\ngot load event in onload function (main)\ngot onbeforeunload event in event handler (imported)\ngot onbeforeunload event in event handler (main)\ngot onbeforeunload event in onbeforeunload function (main)\ngot unload event in event handler (imported)\ngot unload event in event handler (main)\ngot unload event in onunload function (main)\n")),(0,a.kt)("p",null,"All listeners added using ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener")," were run, but ",(0,a.kt)("inlineCode",{parentName:"p"},"onload"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"onbeforeunload")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onunload")," defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"main.ts")," overrode handlers defined\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"imported.ts"),"."),(0,a.kt)("p",null,"In other words, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener")," to register multiple ",(0,a.kt)("inlineCode",{parentName:"p"},'"load"')," or\n",(0,a.kt)("inlineCode",{parentName:"p"},'"unload"')," event handlers, but only the last defined ",(0,a.kt)("inlineCode",{parentName:"p"},"onload"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onbeforeunload"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"onunload")," event handlers will be executed. It is preferable to use\n",(0,a.kt)("inlineCode",{parentName:"p"},"addEventListener")," when possible for this reason."),(0,a.kt)("h2",{id:"beforeunload-example"},(0,a.kt)("inlineCode",{parentName:"h2"},"beforeunload")," Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// beforeunload.js\nlet count = 0;\n\nconsole.log(count);\n\nglobalThis.addEventListener("beforeunload", (e) => {\n  console.log("About to exit...");\n  if (count < 4) {\n    e.preventDefault();\n    console.log("Scheduling more work...");\n    setTimeout(() => {\n      console.log(count);\n    }, 100);\n  }\n\n  count++;\n});\n\nglobalThis.addEventListener("unload", (e) => {\n  console.log("Exiting");\n});\n\ncount++;\nconsole.log(count);\n\nsetTimeout(() => {\n  count++;\n  console.log(count);\n}, 100);\n')),(0,a.kt)("p",null,"Running this program will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ deno run beforeunload.js\n0\n1\n2\nAbout to exit...\nScheduling more work...\n3\nAbout to exit...\nScheduling more work...\n4\nAbout to exit...\nExiting\n")),(0,a.kt)("p",null,"This has allowed us to polyfill ",(0,a.kt)("inlineCode",{parentName:"p"},'process.on("beforeExit")')," in the Node\ncompatibility layer."),(0,a.kt)("h2",{id:"unhandledrejection-event-example"},(0,a.kt)("inlineCode",{parentName:"h2"},"unhandledrejection")," event Example:"),(0,a.kt)("p",null,"This release adds support for the unhandledrejection event. This event is fired\nwhen a promise that has no rejection handler is rejected, ie. a promise that has\nno .catch() handler or a second argument to .then()."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// unhandledrejection.js\nglobalThis.addEventListener("unhandledrejection", (e) => {\n  console.log("unhandled rejection at:", e.promise, "reason:", e.reason);\n  e.preventDefault();\n});\n\nfunction Foo() {\n  this.bar = Promise.reject(new Error("bar not available"));\n}\n\nnew Foo();\nPromise.reject();\n')),(0,a.kt)("p",null,"Running this program will print:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ deno run unhandledrejection.js\nunhandled rejection at: Promise {\n  <rejected> Error: bar not available\n    at new Foo (file:///dev/unhandled_rejection.js:7:29)\n    at file:///dev/unhandled_rejection.js:10:1\n} reason: Error: bar not available\n    at new Foo (file:///dev/unhandled_rejection.js:7:29)\n    at file:///dev/unhandled_rejection.js:10:1\nunhandled rejection at: Promise { <rejected> undefined } reason: undefined\n")),(0,a.kt)("p",null,"This API will allow us to polyfill ",(0,a.kt)("inlineCode",{parentName:"p"},'process.on("unhandledRejection")')," in the\nNode compatibility layer in future releases."))}c.isMDXComponent=!0}}]);