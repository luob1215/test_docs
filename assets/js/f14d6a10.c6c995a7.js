"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[5e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,u=d["".concat(p,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},14999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="Using Web Platform APIs",l={unversionedId:"manual/runtime/web_platform_apis",id:"manual/runtime/web_platform_apis",title:"Using Web Platform APIs",description:"One way Deno simplifies web and cloud development is by using Web Platform APIs",source:"@site/runtime/manual/runtime/web_platform_apis.md",sourceDirName:"manual/runtime",slug:"/manual/runtime/web_platform_apis",permalink:"/runtime/manual/runtime/web_platform_apis",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Stability",permalink:"/runtime/manual/runtime/stability"},next:{title:"Location API",permalink:"/runtime/manual/runtime/location_api"}},p={},s=[{value:"Supported APIs",id:"supported-apis",level:2},{value:"<code>fetch</code> API",id:"fetch-api",level:2},{value:"Overview",id:"overview",level:2},{value:"Spec deviations",id:"spec-deviations",level:2},{value:"Fetching local files",id:"fetching-local-files",level:2},{value:"<code>CustomEvent</code>, <code>EventTarget</code> and <code>EventListener</code>",id:"customevent-eventtarget-and-eventlistener",level:2},{value:"Overview",id:"overview-1",level:2},{value:"Spec deviations",id:"spec-deviations-1",level:2},{value:"Typings",id:"typings",level:2},{value:"Deviations of other APIs from spec",id:"deviations-of-other-apis-from-spec",level:2},{value:"Cache API",id:"cache-api",level:3}],m={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-web-platform-apis"},"Using Web Platform APIs"),(0,i.kt)("p",null,"One way Deno simplifies web and cloud development is by using Web Platform APIs\n(like ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),") over proprietary APIs. This means if you've ever built for the\nbrowser, you're likely already familiar with Deno, and if you're learning Deno,\nyou're also investing in your knowledge of the web."),(0,i.kt)("h2",{id:"supported-apis"},"Supported APIs"),(0,i.kt)("p",null,"Here's a partial list of supported web platform APIs in Deno:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob"},"Blob")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel"},"BroadcastChannel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache"},"Cache")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API"},"Channel Messaging API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API"},"Compression Streams API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Console"},"Console")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://deno.land/api@v1.26.0#DOM_APIs"},"DOM APIs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#customevent-eventtarget-and-eventlistener"},"DOM ",(0,i.kt)("inlineCode",{parentName:"a"},"CustomEvent"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"EventTarget")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"EventListener"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Encoding_API"},"Encoding API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fetch-api"},"Fetch API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData"},(0,i.kt)("inlineCode",{parentName:"a"},"FormData"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/runtime/manual/runtime/location_api"},"Location API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language"},(0,i.kt)("inlineCode",{parentName:"a"},"navigator.language")," API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Performance"},"Performance API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/setTimeout"},(0,i.kt)("inlineCode",{parentName:"a"},"setTimeout"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"setInterval"),", ",(0,i.kt)("inlineCode",{parentName:"a"},"clearInterval"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Streams_API"},"Streams API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL"},(0,i.kt)("inlineCode",{parentName:"a"},"URL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URLPattern"},(0,i.kt)("inlineCode",{parentName:"a"},"URLPattern"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams"},(0,i.kt)("inlineCode",{parentName:"a"},"URLSearchParams"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"},"Web Crypto API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/File_API"},"Web File API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/runtime/manual/runtime/web_storage_api"},"Web Storage API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Worker"},"Web Workers API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"},(0,i.kt)("inlineCode",{parentName:"a"},"WebSocket")))),(0,i.kt)("p",null,"You can find the Deno reference for these APIs ",(0,i.kt)("a",{parentName:"p",href:"https://deno.land/api"},"here"),". To\ncheck if a Web Platform API is available in Deno, click on\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API#interfaces"},"the interface on MDN"),"\nand refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController#browser_compatibility"},"its Browser Compatibility table"),"\n(link as an example)."),(0,i.kt)("h2",{id:"fetch-api"},(0,i.kt)("inlineCode",{parentName:"h2"},"fetch")," API"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," API can be used to make HTTP requests. It is implemented as\nspecified in the ",(0,i.kt)("a",{parentName:"p",href:"https://fetch.spec.whatwg.org/"},"WHATWG ",(0,i.kt)("inlineCode",{parentName:"a"},"fetch")," spec"),"."),(0,i.kt)("p",null,"You can find documentation about this API on\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"MDN"),"."),(0,i.kt)("h2",{id:"spec-deviations"},"Spec deviations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Deno user agent does not have a cookie jar. As such, the ",(0,i.kt)("inlineCode",{parentName:"li"},"set-cookie"),"\nheader on a response is not processed, or filtered from the visible response\nheaders."),(0,i.kt)("li",{parentName:"ul"},"Deno does not follow the same-origin policy, because the Deno user agent\ncurrently does not have the concept of origins, and it does not have a cookie\njar. This means Deno does not need to protect against leaking authenticated\ndata cross origin. Because of this Deno does not implement the following\nsections of the WHATWG ",(0,i.kt)("inlineCode",{parentName:"li"},"fetch")," specification:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Section ",(0,i.kt)("inlineCode",{parentName:"li"},"3.1. 'Origin' header"),"."),(0,i.kt)("li",{parentName:"ul"},"Section ",(0,i.kt)("inlineCode",{parentName:"li"},"3.2. CORS protocol"),"."),(0,i.kt)("li",{parentName:"ul"},"Section ",(0,i.kt)("inlineCode",{parentName:"li"},"3.5. CORB"),"."),(0,i.kt)("li",{parentName:"ul"},"Section ",(0,i.kt)("inlineCode",{parentName:"li"},"3.6. 'Cross-Origin-Resource-Policy' header"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Atomic HTTP redirect handling"),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"opaqueredirect")," response type."))),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"fetch")," with a ",(0,i.kt)("inlineCode",{parentName:"li"},"redirect")," mode of ",(0,i.kt)("inlineCode",{parentName:"li"},"manual")," will return a ",(0,i.kt)("inlineCode",{parentName:"li"},"basic")," response\nrather than an ",(0,i.kt)("inlineCode",{parentName:"li"},"opaqueredirect")," response."),(0,i.kt)("li",{parentName:"ul"},"The specification is vague on how\n",(0,i.kt)("a",{parentName:"li",href:"https://fetch.spec.whatwg.org/#scheme-fetch"},(0,i.kt)("inlineCode",{parentName:"a"},"file:")," URLs are to be handled"),".\nFirefox is the only mainstream browser that implements fetching ",(0,i.kt)("inlineCode",{parentName:"li"},"file:")," URLs,\nand even then it doesn't work by default. As of Deno 1.16, Deno supports\nfetching local files. See the next section for details."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"request")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"response")," header guards are implemented, but unlike\nbrowsers do not have any constraints on which header names are allowed."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"referrer"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"referrerPolicy"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"mode"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"credentials"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cache"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"integrity"),",\n",(0,i.kt)("inlineCode",{parentName:"li"},"keepalive"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"window")," properties and their relevant behaviours in\n",(0,i.kt)("inlineCode",{parentName:"li"},"RequestInit")," are not implemented. The relevant fields are not present on the\n",(0,i.kt)("inlineCode",{parentName:"li"},"Request")," object."),(0,i.kt)("li",{parentName:"ul"},"Request body upload streaming is supported (on HTTP/1.1 and HTTP/2). Unlike\nthe current fetch proposal, the implementation supports duplex streaming."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"set-cookie")," header is not concatenated when iterated over in the\n",(0,i.kt)("inlineCode",{parentName:"li"},"headers")," iterator. This behaviour is in the\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/whatwg/fetch/pull/1346"},"process of being specified"),".")),(0,i.kt)("h2",{id:"fetching-local-files"},"Fetching local files"),(0,i.kt)("p",null,"As of Deno 1.16, Deno supports fetching ",(0,i.kt)("inlineCode",{parentName:"p"},"file:")," URLs. This makes it easier to\nwrite code that uses the same code path on a server as local, as well as easier\nto author code that works both with the Deno CLI and Deno Deploy."),(0,i.kt)("p",null,"Deno only supports absolute file URLs, this means that ",(0,i.kt)("inlineCode",{parentName:"p"},'fetch("./some.json")'),"\nwill not work. It should be noted though that if\n",(0,i.kt)("a",{parentName:"p",href:"/runtime/manual/runtime/location_api"},(0,i.kt)("inlineCode",{parentName:"a"},"--location"))," is specified, relative URLs use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--location")," as the base, but a ",(0,i.kt)("inlineCode",{parentName:"p"},"file:")," URL cannot be passed as the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--location"),"."),(0,i.kt)("p",null,"To be able to fetch some resource, relative to the current module, which would\nwork if the module is local or remote, you would want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"import.meta.url"),"\nas the base. For example, something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const response = await fetch(new URL("./config.json", import.meta.url));\nconst config = await response.json();\n')),(0,i.kt)("p",null,"Notes on fetching local files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Permissions are applied to reading resources, so an appropriate ",(0,i.kt)("inlineCode",{parentName:"li"},"--allow-read"),"\npermission is needed to be able to read a local file."),(0,i.kt)("li",{parentName:"ul"},"Fetching locally only supports the ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," method, and will reject the promise\nwith any other method."),(0,i.kt)("li",{parentName:"ul"},"A file that does not exist simply rejects the promise with a vague\n",(0,i.kt)("inlineCode",{parentName:"li"},"TypeError"),". This is to avoid the potential of fingerprinting attacks."),(0,i.kt)("li",{parentName:"ul"},"No headers are set on the response. Therefore it is up to the consumer to\ndetermine things like the content type or content length."),(0,i.kt)("li",{parentName:"ul"},"Response bodies are streamed from the Rust side, so large files are available\nin chunks, and can be cancelled.")),(0,i.kt)("h2",{id:"customevent-eventtarget-and-eventlistener"},(0,i.kt)("inlineCode",{parentName:"h2"},"CustomEvent"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"EventTarget")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"EventListener")),(0,i.kt)("h2",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,"The DOM Event API can be used to dispatch and listen to events happening in an\napplication. It is implemented as specified in the\n",(0,i.kt)("a",{parentName:"p",href:"https://dom.spec.whatwg.org/#events"},"WHATWG DOM spec"),"."),(0,i.kt)("p",null,"You can find documentation about this API on\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"},"MDN"),"."),(0,i.kt)("h2",{id:"spec-deviations-1"},"Spec deviations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Events do not bubble, because Deno does not have a DOM hierarchy, so there is\nno tree for Events to bubble/capture through."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeStamp")," property is always set to ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"typings"},"Typings"),(0,i.kt)("p",null,"The TypeScript definitions for the implemented web APIs can be found in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/blob/$CLI_VERSION/cli/dts/lib.deno.shared_globals.d.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"lib.deno.shared_globals.d.ts")),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/blob/$CLI_VERSION/cli/dts/lib.deno.window.d.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"lib.deno.window.d.ts")),"\nfiles."),(0,i.kt)("p",null,"Definitions that are specific to workers can be found in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/blob/$CLI_VERSION/cli/dts/lib.deno.worker.d.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"lib.deno.worker.d.ts")),"\nfile."),(0,i.kt)("h2",{id:"deviations-of-other-apis-from-spec"},"Deviations of other APIs from spec"),(0,i.kt)("h3",{id:"cache-api"},"Cache API"),(0,i.kt)("p",null,"Only the following APIs are implemented:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open"},"CacheStorage::open()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/has"},"CacheStorage::has()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/delete"},"CacheStorage::delete()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache/match"},"Cache::match()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache/put"},"Cache::put()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete"},"Cache::delete()"))),(0,i.kt)("p",null,"A few things that are different compared to browsers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You cannot pass relative paths to the APIs. The request can be an instance of\nRequest or URL or a url string."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"match()")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"delete()")," don't support query options yet.")))}c.isMDXComponent=!0}}]);