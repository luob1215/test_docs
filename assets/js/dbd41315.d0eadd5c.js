"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="Read and Write Files",l={unversionedId:"tutorials/read_write_files",id:"tutorials/read_write_files",title:"Read and Write Files",description:"Concepts",source:"@site/runtime/tutorials/read_write_files.md",sourceDirName:"tutorials",slug:"/tutorials/read_write_files",permalink:"/runtime/tutorials/read_write_files",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeTutorialsHome",previous:{title:"Fetch Data",permalink:"/runtime/tutorials/fetch_data"},next:{title:"Making Scripts Executable With a Hashbang (Shebang)",permalink:"/runtime/tutorials/hashbang"}},s={},p=[{value:"Concepts",id:"concepts",level:2},{value:"Overview",id:"overview",level:2},{value:"Reading a text file",id:"reading-a-text-file",level:2},{value:"Writing a text file",id:"writing-a-text-file",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"read-and-write-files"},"Read and Write Files"),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deno's runtime API provides the\n",(0,a.kt)("a",{parentName:"li",href:"https://deno.land/api?s=Deno.readTextFile"},"Deno.readTextFile")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://deno.land/api?s=Deno.writeTextFile"},"Deno.writeTextFile")," asynchronous\nfunctions for reading and writing entire text files."),(0,a.kt)("li",{parentName:"ul"},"Like many of Deno's APIs, synchronous alternatives are also available. See\n",(0,a.kt)("a",{parentName:"li",href:"https://deno.land/api?s=Deno.readTextFileSync"},"Deno.readTextFileSync")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://deno.land/api?s=Deno.writeTextFileSync"},"Deno.writeTextFileSync"),"."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"--allow-read")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"--allow-write")," permissions to gain access to the file\nsystem.")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Interacting with the filesystem to read and write files is a common requirement.\nDeno provides a number of ways to do this via the\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/std"},"standard library")," and the\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/api"},"Deno runtime API"),"."),(0,a.kt)("p",null,"As highlighted in the ",(0,a.kt)("a",{parentName:"p",href:"/runtime/tutorials/fetch_data"},"Fetch Data example")," Deno restricts\naccess to Input / Output by default for security reasons. Therefore when\ninteracting with the filesystem the ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-read")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-write")," flags\nmust be used with the ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run")," command."),(0,a.kt)("h2",{id:"reading-a-text-file"},"Reading a text file"),(0,a.kt)("p",null,"The Deno runtime API makes it possible to read text files via the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.readTextFile()")," method, it just requires a path string or URL object. The\nmethod returns a promise which provides access to the file's text data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run --allow-read read.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/**\n * read.ts\n */\nconst text = await Deno.readTextFile("./people.json");\nconsole.log(text);\n\n/**\n * Output:\n *\n * [\n *   {"id": 1, "name": "John", "age": 23},\n *   {"id": 2, "name": "Sandra", "age": 51},\n *   {"id": 5, "name": "Devika", "age": 11}\n * ]\n */\n')),(0,a.kt)("h2",{id:"writing-a-text-file"},"Writing a text file"),(0,a.kt)("p",null,"The Deno runtime API allows developers to write text to files via the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.writeTextFile()")," method. It just requires a file path and text string. The\nmethod returns a promise which resolves when the file was successfully written."),(0,a.kt)("p",null,"To run the command the ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-write")," flag must be supplied to the ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run"),"\ncommand."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run --allow-write write.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/**\n * write.ts\n */\nawait Deno.writeTextFile("./hello.txt", "Hello World!");\nconsole.log("File written to ./hello.txt");\n\n/**\n * Output: File written to ./hello.txt\n */\n')),(0,a.kt)("p",null,"You can ",(0,a.kt)("em",{parentName:"p"},"append")," text to a file like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'await Deno.writeTextFile("./hello.txt", "This text will be appended.", {\n  append: true,\n});\n')),(0,a.kt)("p",null,"By combining ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.writeTextFile")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," you can easily write\nserialized JSON objects to a file. This example uses synchronous\n",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.writeTextFileSync"),", but this can also be done asynchronously using\n",(0,a.kt)("inlineCode",{parentName:"p"},"await Deno.writeTextFile"),"."),(0,a.kt)("p",null,"To execute the code the ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run")," command needs the write flag."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Command:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run --allow-write write.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/**\n * write.ts\n */\nfunction writeJson(path: string, data: object): string {\n  try {\n    Deno.writeTextFileSync(path, JSON.stringify(data));\n\n    return "Written to " + path;\n  } catch (e) {\n    return e.message;\n  }\n}\n\nconsole.log(writeJson("./data.json", { hello: "World" }));\n\n/**\n * Output: Written to ./data.json\n */\n')))}c.isMDXComponent=!0}}]);