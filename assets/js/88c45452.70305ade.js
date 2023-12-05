"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||a;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const a={},r="FAQs about TypeScript in Deno",s={unversionedId:"manual/advanced/typescript/faqs",id:"manual/advanced/typescript/faqs",title:"FAQs about TypeScript in Deno",description:"Can I use TypeScript not written for Deno?",source:"@site/runtime/manual/advanced/typescript/faqs.md",sourceDirName:"manual/advanced/typescript",slug:"/manual/advanced/typescript/faqs",permalink:"/runtime/manual/advanced/typescript/faqs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Migrating to and from JavaScript",permalink:"/runtime/manual/advanced/typescript/migration"},next:{title:"Using WebAssembly",permalink:"/runtime/manual/runtime/webassembly/"}},p={},l=[{value:"Can I use TypeScript not written for Deno?",id:"can-i-use-typescript-not-written-for-deno",level:2},{value:"What version(s) of TypeScript does Deno support?",id:"what-versions-of-typescript-does-deno-support",level:2},{value:"There was a breaking change in the version of TypeScript that Deno uses, why did you break my program?",id:"there-was-a-breaking-change-in-the-version-of-typescript-that-deno-uses-why-did-you-break-my-program",level:2},{value:"How do I write code that works in Deno and a browser, but still type checks?",id:"how-do-i-write-code-that-works-in-deno-and-a-browser-but-still-type-checks",level:2},{value:"Why are you forcing me to use isolated modules, why can&#39;t I use const enums with Deno, why do I need to do export type?",id:"why-are-you-forcing-me-to-use-isolated-modules-why-cant-i-use-const-enums-with-deno-why-do-i-need-to-do-export-type",level:2},{value:"Why don&#39;t you support language service plugins or transformer plugins?",id:"why-dont-you-support-language-service-plugins-or-transformer-plugins",level:2},{value:"How do I combine Deno code with non-Deno code in my IDE?",id:"how-do-i-combine-deno-code-with-non-deno-code-in-my-ide",level:2}],d={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faqs-about-typescript-in-deno"},"FAQs about TypeScript in Deno"),(0,i.kt)("h2",{id:"can-i-use-typescript-not-written-for-deno"},"Can I use TypeScript not written for Deno?"),(0,i.kt)("p",null,"Maybe. That is the best answer, we are afraid. For lots of reasons, Deno has\nchosen to have fully qualified module specifiers. In part this is because it\ntreats TypeScript as a first class language. Also, Deno uses explicit module\nresolution, with no ",(0,i.kt)("em",{parentName:"p"},"magic"),". This is effectively the same way browsers\nthemselves work, though they don't obviously support TypeScript directly. If the\nTypeScript modules use imports that don't have these design decisions in mind,\nthey may not work under Deno."),(0,i.kt)("p",null,"Also, in recent versions of Deno (starting with 1.5), we have started to use a\nRust library to do transformations of TypeScript to JavaScript in certain\nscenarios. Because of this, there are certain situations in TypeScript where\ntype information is required, and therefore those are not supported under Deno.\nIf you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," as stand-alone, the setting to use is ",(0,i.kt)("inlineCode",{parentName:"p"},'"isolatedModules"'),"\nand setting it to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to help ensure that your code can be properly handled\nby Deno."),(0,i.kt)("p",null,"One of the ways to deal with the extension and the lack of Node.js non-standard\nresolution logic is to use ",(0,i.kt)("a",{parentName:"p",href:"/runtime/manual/basics/import_maps"},"import maps"),' which\nwould allow you to specify "packages" of bare specifiers which then Deno could\nresolve and load.'),(0,i.kt)("h2",{id:"what-versions-of-typescript-does-deno-support"},"What version(s) of TypeScript does Deno support?"),(0,i.kt)("p",null,"Deno is built with a specific version of TypeScript. To find out what this is,\ntype the following on the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> deno --version\n")),(0,i.kt)("p",null,"The TypeScript version (along with the version of Deno and v8) will be printed.\nDeno tries to keep up to date with general releases of TypeScript, providing\nthem in the next patch or minor release of Deno."),(0,i.kt)("h2",{id:"there-was-a-breaking-change-in-the-version-of-typescript-that-deno-uses-why-did-you-break-my-program"},"There was a breaking change in the version of TypeScript that Deno uses, why did you break my program?"),(0,i.kt)("p",null,'We do not consider changes in behavior or breaking changes in TypeScript\nreleases as breaking changes for Deno. TypeScript is a generally mature language\nand breaking changes in TypeScript are almost always "good things" making code\nmore sound, and it is best that we all keep our code sound. If there is a\nblocking change in the version of TypeScript and it isn\'t suitable to use an\nolder release of Deno until the problem can be resolved, then you should be able\nto use ',(0,i.kt)("inlineCode",{parentName:"p"},"--no-check")," to skip type checking all together."),(0,i.kt)("p",null,"In addition you can utilize ",(0,i.kt)("inlineCode",{parentName:"p"},"@ts-ignore")," to ",(0,i.kt)("em",{parentName:"p"},"ignore")," a specific error in code\nthat you control. You can also replace whole dependencies, using\n",(0,i.kt)("a",{parentName:"p",href:"/runtime/manual/basics/import_maps"},"import maps"),", for situations where a dependency of\na dependency isn't being maintained or has some sort of breaking change you want\nto bypass while waiting for it to be updated."),(0,i.kt)("h2",{id:"how-do-i-write-code-that-works-in-deno-and-a-browser-but-still-type-checks"},"How do I write code that works in Deno and a browser, but still type checks?"),(0,i.kt)("p",null,"You can do this by using a configuration file with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," option on the\ncommand line and adjusting the ",(0,i.kt)("inlineCode",{parentName:"p"},'"lib"')," option in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"compilerOptions"')," in the\nfile. For more information see\n",(0,i.kt)("a",{parentName:"p",href:"/runtime/manual/advanced/typescript/configuration#targeting-deno-and-the-browser"},"Targeting Deno and the Browser"),"."),(0,i.kt)("h2",{id:"why-are-you-forcing-me-to-use-isolated-modules-why-cant-i-use-const-enums-with-deno-why-do-i-need-to-do-export-type"},"Why are you forcing me to use isolated modules, why can't I use const enums with Deno, why do I need to do export type?"),(0,i.kt)("p",null,"As of Deno 1.5 we defaulted to ",(0,i.kt)("em",{parentName:"p"},"isolatedModules")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and in Deno 1.6 we\nremoved the options to set it back to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," via a configuration file. The\n",(0,i.kt)("em",{parentName:"p"},"isolatedModules")," option forces the TypeScript compiler to check and emit\nTypeScript as if each module would stand on its own. TypeScript has a few ",(0,i.kt)("em",{parentName:"p"},"type\ndirected emits")," in the language at the moment. While not allowing type directed\nemits into the language was a design goal for TypeScript, it has happened\nanyways. This means that the TypeScript compiler needs to understand the\nerasable types in the code to determine what to emit, which when you are trying\nto make a fully erasable type system on top of JavaScript, that becomes a\nproblem."),(0,i.kt)("p",null,"When people started transpiling TypeScript without ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc"),", these type directed\nemits became a problem, since the likes of Babel simply try to erase the types\nwithout needing to understand the types to direct the emit."),(0,i.kt)("p",null,"So instead of trying to get every user to understand when and how we could\nsupport the type directed emits, we made the decision to disable the use of them\nby forcing the ",(0,i.kt)("em",{parentName:"p"},"isolatedModules")," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),'. This means that even when we\nare using the TypeScript compiler to emit the code, it will follow the same\n"rules" that the Rust based emitter follows.'),(0,i.kt)("p",null,"This means that certain language features are not supportable. Those features\nare:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Re-exporting of types is ambiguous and requires knowing if the source module\nis exporting runtime code or just type information. Therefore, it is\nrecommended that you use ",(0,i.kt)("inlineCode",{parentName:"li"},"import type")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"export type")," for type only imports\nand exports. This will help ensure that when the code is emitted, that all the\ntypes are erased."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"const enum")," is not supported. ",(0,i.kt)("inlineCode",{parentName:"li"},"const enum"),"s require type information to\ndirect the emit, as ",(0,i.kt)("inlineCode",{parentName:"li"},"const enum"),"s get written out as hard coded values.\nEspecially when ",(0,i.kt)("inlineCode",{parentName:"li"},"const enum"),"s get exported, they are a type system only\nconstruct."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"export =")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"import =")," are legacy TypeScript syntax which we do not\nsupport."),(0,i.kt)("li",{parentName:"ul"},"Only ",(0,i.kt)("inlineCode",{parentName:"li"},"declare namespace")," is supported. Runtime ",(0,i.kt)("inlineCode",{parentName:"li"},"namespace")," is legacy\nTypeScript syntax that is not supported.")),(0,i.kt)("h2",{id:"why-dont-you-support-language-service-plugins-or-transformer-plugins"},"Why don't you support language service plugins or transformer plugins?"),(0,i.kt)("p",null,"While ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," supports language service plugins, Deno does not. Deno does not\nalways use the built-in TypeScript compiler to do what it does, and the\ncomplexity of adding support for a language service plugin is not feasible.\nTypeScript does not support emitter plugins, but there are a few community\nprojects which ",(0,i.kt)("em",{parentName:"p"},"hack")," emitter plugins into TypeScript. First, we wouldn't want\nto support something that TypeScript doesn't support, plus we do not always use\nthe TypeScript compiler for the emit, which would mean we would need to ensure\nwe supported it in all modes, and the other emitter is written in Rust, meaning\nthat any emitter plugin for TypeScript wouldn't be available for the Rust\nemitter."),(0,i.kt)("h2",{id:"how-do-i-combine-deno-code-with-non-deno-code-in-my-ide"},"How do I combine Deno code with non-Deno code in my IDE?"),(0,i.kt)("p",null,'The Deno language server supports the ability to have a "per-resource"\nconfiguration of enabling Deno or not. This also requires a client IDE to\nsupport this ability. For Visual Studio Code the official\n',(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno"},"Deno extension"),"\nsupports the vscode concept of\n",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces"},"multi-root workspace"),".\nThis means you just need to add folders to the workspace and set the\n",(0,i.kt)("inlineCode",{parentName:"p"},"deno.enable")," setting as required on each folder."),(0,i.kt)("p",null,"For other IDEs, the client extensions needs to support the similar IDE concepts."))}c.isMDXComponent=!0}}]);