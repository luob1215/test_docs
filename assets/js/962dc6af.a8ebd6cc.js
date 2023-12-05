"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[5370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),m=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=m(r),d=n,f=s["".concat(u,".").concat(d)]||s[d]||c[d]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const l={displayed_sidebar:"runtimeTutorialsHome",sidebar_position:1,sidebar_label:"Overview",pagination_next:"tutorials/hello_world"},i="Examples",o={unversionedId:"tutorials/index",id:"tutorials/index",title:"Examples",description:"Here you can find some example programs that you can use to learn more about the",source:"@site/runtime/tutorials/index.md",sourceDirName:"tutorials",slug:"/tutorials/",permalink:"/runtime/tutorials/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{displayed_sidebar:"runtimeTutorialsHome",sidebar_position:1,sidebar_label:"Overview",pagination_next:"tutorials/hello_world"},sidebar:"runtimeTutorialsHome",next:{title:"Hello World",permalink:"/runtime/tutorials/hello_world"}},u={},m=[{value:"Basic",id:"basic",level:2},{value:"Advanced",id:"advanced",level:2},{value:"npm module examples",id:"npm-module-examples",level:2}],p={toc:m},s="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Here you can find some example programs that you can use to learn more about the\nruntime."),(0,n.kt)("h2",{id:"basic"},"Basic"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/hello_world"},"Hello World")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/manage_dependencies"},"Manage Dependencies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/fetch_data"},"Fetch Data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/read_write_files"},"Read and Write Files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/hashbang"},"Hashbang"))),(0,n.kt)("h2",{id:"advanced"},"Advanced"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/unix_cat"},"Unix cat Program")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/http_server"},"HTTP Web Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/file_server"},"File Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/tcp_echo"},"TCP echo Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/subprocess"},"Creating a Subprocess")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/os_signals"},"OS Signals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/file_system_events"},"File System Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/module_metadata"},"Module Metadata"))),(0,n.kt)("h2",{id:"npm-module-examples"},"npm module examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/apollo"},"Apollo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/express"},"Express")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/mongoose"},"Mongoose")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/mysql2"},"MySQL")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/planetscale"},"PlanetScale")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/prisma"},"Prisma")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/react"},"React")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/redis"},"Redis")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/runtime/tutorials/how_to_with_npm/vue"},"Vue"))),(0,n.kt)("p",null,"Additional examples can by found at\n",(0,n.kt)("a",{parentName:"p",href:"https://examples.deno.land/"},"Deno by Example"),"."))}c.isMDXComponent=!0}}]);