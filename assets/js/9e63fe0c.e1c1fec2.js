"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3331],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||i;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},33033:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const i={},r="Migrating from Node.js to Deno",s={unversionedId:"manual/node/migrate",id:"manual/node/migrate",title:"Migrating from Node.js to Deno",description:"To migrate an existing Node.js program to Deno, there are a number of",source:"@site/runtime/manual/node/migrate.md",sourceDirName:"manual/node",slug:"/manual/node/migrate",permalink:"/runtime/manual/node/migrate",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Frequently Asked Questions",permalink:"/runtime/manual/node/faqs"},next:{title:"Node.js -> Deno cheatsheet",permalink:"/runtime/manual/references/cheatsheet"}},l={},p=[{value:"Module imports and exports",id:"module-imports-and-exports",level:2},{value:"Replace <code>require</code> with <code>import</code>",id:"replace-require-with-import",level:3},{value:"Replace <code>module.exports</code> with <code>export default</code>",id:"replace-moduleexports-with-export-default",level:3},{value:"Node.js built-ins",id:"nodejs-built-ins",level:2},{value:"Runtime permissions in Deno",id:"runtime-permissions-in-deno",level:2},{value:"Running your code with only the necessary flags",id:"running-your-code-with-only-the-necessary-flags",level:3},{value:"Reusing runtime flag configuration with <code>deno task</code>",id:"reusing-runtime-flag-configuration-with-deno-task",level:3},{value:"Running with all permissions enabled",id:"running-with-all-permissions-enabled",level:3},{value:"Running scripts from <code>package.json</code>",id:"running-scripts-from-packagejson",level:2},{value:"Running npm scripts in Deno",id:"running-npm-scripts-in-deno",level:3},{value:"Using and managing npm dependencies",id:"using-and-managing-npm-dependencies",level:2},{value:"Node.js global objects",id:"nodejs-global-objects",level:2}],d={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-from-nodejs-to-deno"},"Migrating from Node.js to Deno"),(0,a.kt)("p",null,"To migrate an existing Node.js program to Deno, there are a number of\ndifferences to take into account between the Node and Deno runtimes. This guide\nwill attempt to call out several of those differences, and describe how you can\nbegin to migrate your Node.js project to work on Deno."),(0,a.kt)("admonition",{title:"About Node.js Compatibility",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Node.js compatibility is an ongoing project in Deno - you may encounter some\nmodules or packages on npm that do not work as you expect. If you do run into a\nproblem with Node.js compatibility, please let us know by\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/issues"},"opening an issue on GitHub"),".")),(0,a.kt)("h2",{id:"module-imports-and-exports"},"Module imports and exports"),(0,a.kt)("p",null,"Deno supports ",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/basics/modules/"},"ECMAScript modules")," exclusively,\nrather than a combination of ESM and\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/modules.html"},"CommonJS"),", as found in Node. If your\nNode.js code uses ",(0,a.kt)("inlineCode",{parentName:"p"},"require"),", you should update it to use ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statements\ninstead. If your internal code uses CommonJS-style exports, those will need to\nbe changed as well."),(0,a.kt)("p",null,"Consider the following two files in a Node.js program, located in the same\ndirectory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const addNumbers = require("./add_numbers");\nconsole.log(addNumbers(2, 2));\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="add_numbers.js"',title:'"add_numbers.js"'},"module.exports = function addNumbers(num1, num2) {\n  return num1 + num2;\n};\n")),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"node index.js")," with the files above works fine in Node.js 20 and\nearlier. However, this code will not run unchanged if you attempt to use\n",(0,a.kt)("inlineCode",{parentName:"p"},"deno run index.js")," instead. You will need to change both the code that is\nconsuming the module, and how you export functionality from the ",(0,a.kt)("inlineCode",{parentName:"p"},"add_numbers"),"\nmodule."),(0,a.kt)("h3",{id:"replace-require-with-import"},"Replace ",(0,a.kt)("inlineCode",{parentName:"h3"},"require")," with ",(0,a.kt)("inlineCode",{parentName:"h3"},"import")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"require")," statements with an ",(0,a.kt)("inlineCode",{parentName:"p"},"import"),", like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import addNumbers from "./add_numbers.js";\n')),(0,a.kt)("p",null,"This statement uses the ES6 module standard, but does pretty much the same\nthing. Also, note that we ",(0,a.kt)("strong",{parentName:"p"},"include the full file extension when importing\nmodules"),", much as you would in the browser. There is also no special handling\nof files named ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js"),"."),(0,a.kt)("h3",{id:"replace-moduleexports-with-export-default"},"Replace ",(0,a.kt)("inlineCode",{parentName:"h3"},"module.exports")," with ",(0,a.kt)("inlineCode",{parentName:"h3"},"export default")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"add_numbers.js")," file that exports the function, we would use a default\nexport from ES6 modules rather than the ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports")," provided by CommonJS."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="add_numbers.js"',title:'"add_numbers.js"'},"export default function addNumbers(num1, num2) {\n  return num1 + num2;\n}\n")),(0,a.kt)("p",null,"After making those two changes, this code would run successfully with\n",(0,a.kt)("inlineCode",{parentName:"p"},"deno run index.js"),". Learn more about\n",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/basics/modules/"},"ES modules in Deno here"),"."),(0,a.kt)("h2",{id:"nodejs-built-ins"},"Node.js built-ins"),(0,a.kt)("p",null,'In Node.js 20 and earlier, built-in modules in the Node.js standard library\ncould be imported with "bare specifiers". Consider the Node program below with a\n',(0,a.kt)("inlineCode",{parentName:"p"},".mjs")," extension:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.mjs"',title:'"index.mjs"'},'import * as os from "os";\nconsole.log(os.cpus());\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/os.html#oscpus"},(0,a.kt)("inlineCode",{parentName:"a"},"os")," module")," is built in to the\nNode.js runtime, and can be imported using a bare specifier as above."),(0,a.kt)("admonition",{title:".mjs extensions not required in Deno",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},".mjs")," file extension is supported but not required in Deno. Because Node\ndoesn't support ESM by default, it requires you to name any files that use ESM\nwith a ",(0,a.kt)("inlineCode",{parentName:"p"},".mjs")," file extension.")),(0,a.kt)("p",null,"Deno provides a compatibility layer that allows the use of Node.js built-in APIs\nwithin Deno programs. However, in order to use them, you will need to add the\n",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/node/node_specifiers"},(0,a.kt)("inlineCode",{parentName:"a"},"node:")," specifier")," to any import statements that use\nthem."),(0,a.kt)("p",null,"For example - if you update the code above to be this instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import * as os from "node:os";\nconsole.log(os.cpus());\n')),(0,a.kt)("p",null,"And run it with ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run index.mjs")," - you will notice you get the same output\nas running the program in Node.js. Updating any imports in your application to\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"node:")," specifiers should enable any code using Node built-ins to function\nas it did in Node.js."),(0,a.kt)("h2",{id:"runtime-permissions-in-deno"},"Runtime permissions in Deno"),(0,a.kt)("p",null,"Deno features ",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/basics/permissions"},"runtime security by default"),", meaning\nthat you as the developer must opt in to giving your code access to the\nfilesystem, network, system environment, and more. Doing this prevents supply\nchain attacks and other potential vulnerabilities in your code. By comparison,\nNode.js has no concept of runtime security, with all code executed with the same\nlevel of permission as the user running the code."),(0,a.kt)("h3",{id:"running-your-code-with-only-the-necessary-flags"},"Running your code with only the necessary flags"),(0,a.kt)("p",null,"When you run a Node.js project ported to Deno for the first time, the runtime\nwill likely prompt you for access to the permissions it needs to execute your\ncode. Consider the following simple ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"express")," server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import express from "npm:express@4";\n\nconst app = express();\n\napp.get("/", function (_req, res) {\n  res.send("hello");\n});\n\napp.listen(3000, () => {\n  console.log("Express listening on :3000");\n});\n')),(0,a.kt)("p",null,"If you run it with ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run server.js"),", it would prompt you for a number of\npermissions required to execute the code and its dependencies. These prompts can\nshow you what runtime permission flags need to be passed in to grant the access\nyou need. Running the code above with the necessary permissions provided would\nlook like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deno run --allow-net --allow-read --allow-env server.js\n")),(0,a.kt)("h3",{id:"reusing-runtime-flag-configuration-with-deno-task"},"Reusing runtime flag configuration with ",(0,a.kt)("inlineCode",{parentName:"h3"},"deno task")),(0,a.kt)("p",null,"A common pattern for configuring a set of runtime flags is to set up scripts to\nbe run with ",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/tools/task_runner"},(0,a.kt)("inlineCode",{parentName:"a"},"deno task")),". The following ",(0,a.kt)("inlineCode",{parentName:"p"},"deno.json"),"\nfile has a task called ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," which will run the express server from above with\nall the necessary flags."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tasks": {\n    "dev": "deno run --allow-net --allow-read --allow-env server.js"\n  }\n}\n')),(0,a.kt)("p",null,"You can then run the task with ",(0,a.kt)("inlineCode",{parentName:"p"},"deno task dev"),"."),(0,a.kt)("h3",{id:"running-with-all-permissions-enabled"},"Running with all permissions enabled"),(0,a.kt)("p",null,"It is possible, but not recommended in production or sensitive environments, to\nrun your programs with all runtime permissions enabled. This would be the\ndefault behavior of Node, which lacks a permission system. To run a program with\nall permissions enabled, you can do so with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"deno run -A server.js\n")),(0,a.kt)("h2",{id:"running-scripts-from-packagejson"},"Running scripts from ",(0,a.kt)("inlineCode",{parentName:"h2"},"package.json")),(0,a.kt)("p",null,"Many Node.js projects make use of\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/using-npm/scripts"},"npm scripts")," to drive local\ndevelopment. In Deno, you can continue to use your existing npm scripts while\nmigrating over time to ",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/tools/task_runner"},(0,a.kt)("inlineCode",{parentName:"a"},"deno task")),"."),(0,a.kt)("h3",{id:"running-npm-scripts-in-deno"},"Running npm scripts in Deno"),(0,a.kt)("p",null,"One of the ways ",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/node/package_json"},"Deno supports existing ",(0,a.kt)("inlineCode",{parentName:"a"},"package.json")," files"),"\nis by executing any scripts configured there with ",(0,a.kt)("inlineCode",{parentName:"p"},"deno task"),". Consider the\nfollowing Node.js project with a package.json and a script configured within it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="bin/my_task.mjs"',title:'"bin/my_task.mjs"'},'console.log("running my task...");\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "test",\n  "scripts": {\n    "start": "node bin/my_task.mjs"\n  }\n}\n')),(0,a.kt)("p",null,"You can execute this script with Deno by running ",(0,a.kt)("inlineCode",{parentName:"p"},"deno task start"),"."),(0,a.kt)("h2",{id:"using-and-managing-npm-dependencies"},"Using and managing npm dependencies"),(0,a.kt)("p",null,"Deno supports\n",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/node/package_json"},"managing npm dependencies through a ",(0,a.kt)("inlineCode",{parentName:"a"},"package.json")," file"),".\nNote that unlike using npm at the command line, you can simply run your project\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"deno run"),", and the first time your script runs, Deno will cache all the\nnecessary dependencies for your application."),(0,a.kt)("p",null,"Going forward, we'd recommend that you manage dependencies through\n",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/getting_started/configuration_file"},(0,a.kt)("inlineCode",{parentName:"a"},"deno.json"))," instead, which supports\nother types of imports as well."),(0,a.kt)("p",null,"When importing npm packages, you would use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm:")," specifier, much like you\nwould the ",(0,a.kt)("inlineCode",{parentName:"p"},"node:")," specifier for any built-in Node modules."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import express from "npm:express@4";\n\nconst app = express();\n\napp.get("/", function (_req, res) {\n  res.send("hello");\n});\n\napp.listen(3000, () => {\n  console.log("Express listening on :3000");\n});\n')),(0,a.kt)("h2",{id:"nodejs-global-objects"},"Node.js global objects"),(0,a.kt)("p",null,"In Node.js, there are a number of\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/globals.html"},"global objects")," that are available in the\nscope of all programs, like the ",(0,a.kt)("inlineCode",{parentName:"p"},"process")," object or ",(0,a.kt)("inlineCode",{parentName:"p"},"__dirname")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"__filename"),"."),(0,a.kt)("p",null,"Deno does not add additional objects and variables to the global scope, other\nthan the ",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/runtime/builtin_apis"},(0,a.kt)("inlineCode",{parentName:"a"},"Deno")," namespace"),". Any API that doesn't\nexist as a web standard browser API will be found in this namespace."),(0,a.kt)("p",null,"The equivalent Deno expression for every Node.js built-in global object will\nvary, but it should be possible to accomplish everything you can do in Node\nusing a slightly different method in Deno. For example, the\n",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/api/process.html#processcwd"},"process.cwd()")," function in\nNode.js exists in Deno as ",(0,a.kt)("a",{parentName:"p",href:"https://www.deno.com/api?s=Deno.cwd"},"Deno.cwd()"),"."))}m.isMDXComponent=!0}}]);