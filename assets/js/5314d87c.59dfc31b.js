"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[9645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,m=p["".concat(d,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Building a Word Finder App with Deno",l={unversionedId:"tutorials/word_finder",id:"tutorials/word_finder",title:"Building a Word Finder App with Deno",description:"Getting Started",source:"@site/runtime/tutorials/word_finder.md",sourceDirName:"tutorials",slug:"/tutorials/word_finder",permalink:"/runtime/tutorials/word_finder",draft:!1,tags:[],version:"current",frontMatter:{}},d={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Building the View",id:"building-the-view",level:2},{value:"Searching the Dictionary",id:"searching-the-dictionary",level:2},{value:"Running a Deno Server",id:"running-a-deno-server",level:2},{value:"Example Code",id:"example-code",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"building-a-word-finder-app-with-deno"},"Building a Word Finder App with Deno"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"In this tutorial we'll create a simple Word Finder web application using Deno.\nNo prior knowledge of Deno is required."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Our Word Finder application will take a pattern string provided by the user and\nreturn all words in the English dictionary that match the pattern. The pattern\ncan include alphabetical characters as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"?"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," can stand\nfor any letter that isn't present in the pattern. ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," can stand for any letter."),(0,a.kt)("p",null,"For example, the pattern ",(0,a.kt)("inlineCode",{parentName:"p"},"c?t"),' matches "cat" and "cut". The pattern ',(0,a.kt)("inlineCode",{parentName:"p"},"go?d"),'\nmatches the words "goad" and "gold" (but not "good").'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(93e3).Z,width:"308",height:"174"})),(0,a.kt)("h2",{id:"building-the-view"},"Building the View"),(0,a.kt)("p",null,"The function below renders the HTML that creates the simple UI displayed above.\nYou can specify a pattern and list of words to customize the HTML content. If a\npattern is specified then it will show up in the search text box. If the word\nlist is specified, then a bulleted list of words will be rendered."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// render.js\n\nexport function renderHtml(pattern, words) {\n  let searchResultsContent = "";\n  if (words.length > 0) {\n    let wordList = "";\n    for (const word of words) {\n      wordList += `<li>${word}</li>`;\n    }\n    searchResultsContent = `\n        <p id="search-result-count" data-count="${words.length}">Words found: ${words.length}</p>\n        <ul id="search-result" name="search-results"> \n          ${wordList}\n        </ul>\n      `;\n  }\n\n  return `<html>\n    <head>\n        <title>Deno Word Finder</title>\n        <meta name="version" content="1.0" />\n    </head>\n    <body>\n        <h1>Deno Word Finder</h1>\n  \n        <form id="perform-search" name="perform-search" method="get" action="/api/search">\n            <label for="search-text">Search text:</label>\n            <input id="search-text" name="search-text" type="text" value="${pattern}" />\n            <input type="submit" />\n        </form>\n  \n        ${searchResultsContent}\n  \n        <h2>Instructions</h2>\n  \n        <p>\n            Enter a word using _ and ? as needed for unknown characters. Using ? means to include letters that aren\'t already used (you can think of it as a "Wheel of Fortune" placeholder). Using _ will find words that contain any character (whether it\'s currently "revealed" or not).\n            <br />\n            <br />\n            For example, d__d would return:\n            <ul>\n                <li>dand</li>\n                <li>daud</li>\n                <li>dead</li>\n                <li>deed</li>\n                <li>dird</li>\n                <li>dodd</li>\n                <li>dowd</li>\n                <li>duad</li>\n                <li>dyad</li>\n            </ul>\n            <br />\n            And go?d would return:\n            <ul>\n                <li>goad</li>\n                <li>gold</li>\n            </ul>\n        </p>\n    </body>\n  </html>\n  `;\n}\n')),(0,a.kt)("h2",{id:"searching-the-dictionary"},"Searching the Dictionary"),(0,a.kt)("p",null,"We also need a simple search function which scans the dictionary and returns all\nwords that match the specified pattern. The function below takes a pattern and\ndictionary and then returns all matched words."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// search.js\n\nexport function search(pattern, dictionary) {\n  // Create regex pattern that excludes characters already present in word\n  let excludeRegex = "";\n  for (let i = 0; i < pattern.length; i++) {\n    const c = pattern[i];\n    if (c != "?" && c != "_") {\n      excludeRegex += "^" + c;\n    }\n  }\n  excludeRegex = "[" + excludeRegex + "]";\n\n  // Let question marks only match characters not already present in word\n  let searchPattern = pattern.replace(/\\?/g, excludeRegex);\n\n  // Let underscores match anything\n  searchPattern = "^" + searchPattern.replace(/\\_/g, "[a-z]") + "$";\n\n  // Find all words in dictionary that match pattern\n  let matches = [];\n  for (let i = 0; i < dictionary.length; i++) {\n    const word = dictionary[i];\n    if (word.match(new RegExp(searchPattern))) {\n      matches.push(word);\n    }\n  }\n\n  return matches;\n}\n')),(0,a.kt)("h2",{id:"running-a-deno-server"},"Running a Deno Server"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/x/oak@v11.1.0"},"Oak")," is a framework that lets you easily setup\na server in Deno (analogous to JavaScript's Express) and we'll be using it to\nhost our application. Our server will use our search function to populate our\nHTML template with data and then return the customized HTML back to the viewer.\nWe can conveniently rely on the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/dict/words")," file as our dictionary\nwhich is a standard file present on most Unix-like operating systems."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx,",metastring:"ignore",ignore:!0},'// server.js\n\nimport { Application, Router } from "https://deno.land/x/oak/mod.ts";\nimport { search } from "./search.js";\nimport { renderHtml } from "./render.js";\n\nconst dictionary = (await Deno.readTextFile("/usr/share/dict/words")).split(\n  "\\n",\n);\n\nconst app = new Application();\nconst port = 8080;\n\nconst router = new Router();\n\nrouter.get("/", async (ctx) => {\n  ctx.response.body = renderHtml("", []);\n});\n\nrouter.get("/api/search", async (ctx) => {\n  const pattern = ctx.request.url.searchParams.get("search-text");\n  ctx.response.body = renderHtml(pattern, search(pattern, dictionary));\n});\n\napp.use(router.routes());\napp.use(router.allowedMethods());\n\nconsole.log("Listening at http://localhost:" + port);\nawait app.listen({ port });\n')),(0,a.kt)("p",null,"We can start our server with the following command. Note we need to explicitly\ngrant access to the file system and network because Deno is secure by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"deno run --allow-read --allow-net server.js\n")),(0,a.kt)("p",null,"Now if you visit ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080")," you should be\nable to view the Word Finder app."),(0,a.kt)("h2",{id:"example-code"},"Example Code"),(0,a.kt)("p",null,"You can find the entire example code\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/awelm/deno-word-finder"},"here"),"."))}u.isMDXComponent=!0},93e3:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/word_finder-abd6aabd5ab23cf526a394056c6eca36.png"}}]);