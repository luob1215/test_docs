"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[1765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56496:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l="BroadcastChannel",s={unversionedId:"api/runtime-broadcast-channel",id:"api/runtime-broadcast-channel",title:"BroadcastChannel",description:"In Deno Deploy, code is run in different data centers around the world in order",source:"@site/deploy/api/runtime-broadcast-channel.md",sourceDirName:"api",slug:"/api/runtime-broadcast-channel",permalink:"/deploy/api/runtime-broadcast-channel",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployAPIHome",previous:{title:"TCP sockets and TLS",permalink:"/deploy/api/runtime-sockets"},next:{title:"HTTP requests (fetch)",permalink:"/deploy/api/runtime-fetch"}},i={},c=[{value:"Constructor",id:"constructor",level:2},{value:"Parameters",id:"parameters",level:4},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Example: Update an in-memory cache across instances",id:"example-update-an-in-memory-cache-across-instances",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"broadcastchannel"},"BroadcastChannel"),(0,r.kt)("p",null,"In Deno Deploy, code is run in different data centers around the world in order\nto reduce latency by servicing requests at the data center nearest to the\nclient. In the browser, the\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API"},(0,r.kt)("inlineCode",{parentName:"a"},"BroadcastChannel")),"\nAPI allows different tabs with the same origin to exchange messages. In Deno\nDeploy, the BroadcastChannel API provides a communication mechanism between the\nvarious instances; a simple message bus that connects the various Deploy\ninstances worldwide."),(0,r.kt)("h2",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastChannel()")," constructor creates a new ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastChannel")," instance\nand connects to (or creates) the provided channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let channel = new BroadcastChannel(channelName);\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name for the underlying broadcast channel connection.")))),(0,r.kt)("p",null,"The return type of the constructor is a ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastChannel")," instance."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the underlying broadcast channel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onmessage")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")," (or ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"The function that's executed when the channel receives a new message (",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageEvent")),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onmessageerror")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")," (or ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"The function that's executed when the arrived message cannot be deserialized to a JavaScript data structure.")))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"close()")),(0,r.kt)("td",{parentName:"tr",align:null},"Close the connection to the underlying channel. After closing, you can no longer post messages to the channel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"postMessage(message)")),(0,r.kt)("td",{parentName:"tr",align:null},"Post a message to the underlying channel. The message can be a string, object literal, a number or any kind of ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"},(0,r.kt)("inlineCode",{parentName:"a"},"Object")),".")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastChannel")," extends ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"},(0,r.kt)("inlineCode",{parentName:"a"},"EventTarget")),", which allows you to use\nmethods of ",(0,r.kt)("inlineCode",{parentName:"p"},"EventTarget")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"addEventListener")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"removeEventListener")," on an\ninstance of ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastChannel"),"."),(0,r.kt)("h2",{id:"example-update-an-in-memory-cache-across-instances"},"Example: Update an in-memory cache across instances"),(0,r.kt)("p",null,"One use case for a message bus like the one enabled by ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastChannel")," is\nupdating an in-memory cache of data between isolates running in different data\ncenters across the network. In the example below, we show how you can configure\na simple server that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastChannel")," to synchornize state across all\nrunning instances of the server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Hono } from "https://deno.land/x/hono/mod.ts";\n\n// in-memory cache of messages\nconst messages = [];\n\n// A BroadcastChannel used by all isolates\nconst channel = new BroadcastChannel("all_messages");\n\n// When a new message comes in from other instances, add it\nchannel.onmessage = (event: MessageEvent) => {\n  messages.push(event.data);\n};\n\n// Create a server to add and retrieve messages\nconst app = new Hono();\n\n// Add a message to the list\napp.get("/send", (c) => {\n  // New messages can be added by including a "message" query param\n  const message = c.req.query("message");\n  if (message) {\n    messages.push(message);\n    channel.postMessage(message);\n  }\n  return c.redirect("/");\n});\n\n// Get a list of messages\napp.get("/", (c) => {\n  // Return the current list of messages\n  return c.json(messages);\n});\n\nDeno.serve(app.fetch);\n')),(0,r.kt)("p",null,"You can test this example yourself on Deno Deploy using\n",(0,r.kt)("a",{parentName:"p",href:"https://dash.deno.com/playground/broadcast-channel-example"},"this playground"),"."))}m.isMDXComponent=!0}}]);