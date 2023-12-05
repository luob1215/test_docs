"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="Getting started with subhosting",l={unversionedId:"manual/subhosting/getting_started",id:"manual/subhosting/getting_started",title:"Getting started with subhosting",description:"To get started with subhosting, you will need to create an organization in the",source:"@site/deploy/manual/subhosting/getting_started.md",sourceDirName:"manual/subhosting",slug:"/manual/subhosting/getting_started",permalink:"/deploy/manual/subhosting/getting_started",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"About Subhosting",permalink:"/deploy/manual/subhosting/"},next:{title:"Projects and deployments",permalink:"/deploy/manual/subhosting/projects_and_deployments"}},s={},c=[{value:"Set up a test environment",id:"set-up-a-test-environment",level:2},{value:"Configure a <code>.env</code> file and <code>.gitignore</code> file",id:"configure-a-env-file-and-gitignore-file",level:3},{value:"Creating our first project",id:"creating-our-first-project",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-subhosting"},"Getting started with subhosting"),(0,r.kt)("p",null,"To get started with subhosting, you will need to create an organization in the\n",(0,r.kt)("a",{parentName:"p",href:"https://dash.deno.com/orgs/new"},"Deno Deploy dashboard"),". Follow the on-screen\ninstructions to create a new organization for subhosting."),(0,r.kt)("p",null,"Going through the onboarding flow, you will likely also generate an ",(0,r.kt)("strong",{parentName:"p"},"access\ntoken"),", which you will use to access the ",(0,r.kt)("a",{parentName:"p",href:"/deploy/api/rest"},"REST API"),". If you\ndidn't do this (or lost the token you generated), you can\n",(0,r.kt)("a",{parentName:"p",href:"https://dash.deno.com/account#access-tokens"},"generate a new one here"),"."),(0,r.kt)("admonition",{title:"Save your token in a safe place",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Once you generate an access token, ",(0,r.kt)("strong",{parentName:"p"},"it will not be displayed again within the\nDeploy dashboard UI"),". Make sure you store this token in a safe place.")),(0,r.kt)("h2",{id:"set-up-a-test-environment"},"Set up a test environment"),(0,r.kt)("p",null,"In the tutorial pages to follow, we will assume you are interacting with the\nDeploy REST API through Deno scripts (TypeScript code), and will show examples\nof interacting with the API in this way. However, the techniques shown here will\nalso work in any other environment capable of executing HTTP requests."),(0,r.kt)("p",null,"The example code shown here and in future chapters assume that you have\n",(0,r.kt)("a",{parentName:"p",href:"/runtime/manual/getting_started/installation"},"Deno 1.38 or higher")," installed."),(0,r.kt)("p",null,"When working with a REST API, it is useful to store authentication credentials\nin the ",(0,r.kt)("a",{parentName:"p",href:"/runtime/manual/basics/env_variables"},"system environment"),", to prevent\nyou from accidentally checking them in to source control."),(0,r.kt)("p",null,"For this tutorial, we'll use the new ",(0,r.kt)("inlineCode",{parentName:"p"},"--env")," flag\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.com/blog/v1.38#deno-run---env"},"introduced in Deno 1.38")," to manage\nenvironment variables. On your local computer, create a new directory to store\nour management scripts in, and create three files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".env")," - to hold our API access info"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," - to ignore our ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file so we don't put it in source control\nby mistake"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create_project.ts")," - a file we'll use in a moment to make our first request\nto the REST API")),(0,r.kt)("h3",{id:"configure-a-env-file-and-gitignore-file"},"Configure a ",(0,r.kt)("inlineCode",{parentName:"h3"},".env")," file and ",(0,r.kt)("inlineCode",{parentName:"h3"},".gitignore")," file"),(0,r.kt)("p",null,"First, store your ",(0,r.kt)("a",{parentName:"p",href:"https://dash.deno.com/account#access-tokens"},"access token"),"\nand organization ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file you created earlier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"DEPLOY_ACCESS_TOKEN=your_token_here\nDEPLOY_ORG_ID=your_org_id_here\n")),(0,r.kt)("p",null,"Replace the values in the file with the values from your own Deploy account."),(0,r.kt)("p",null,"Next, create a ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file just to ensure we don't accidentally check our\n",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file into source control:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".gitignore"',title:'".gitignore"'},"# Ignore this file in git\n.env\n\n# Optional: ignore this junk file often generated on mac OS\n.DS_Store\n")),(0,r.kt)("p",null,"Now that we have our credentials set up, let's write some code to access the\nREST API."),(0,r.kt)("h2",{id:"creating-our-first-project"},"Creating our first project"),(0,r.kt)("p",null,"In order to do anything interesting with subhosting or the REST API, we'll need\nto ",(0,r.kt)("a",{parentName:"p",href:"/deploy/api/rest/projects"},"create a project"),". Copy the code below into a\nfile named ",(0,r.kt)("inlineCode",{parentName:"p"},"create_project.ts")," in the same file as your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),"\nfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="create_project.ts"',title:'"create_project.ts"'},'const accessToken = Deno.env.get("DEPLOY_ACCESS_TOKEN");\nconst orgId = Deno.env.get("DEPLOY_ORG_ID");\nconst API = "https://api.deno.com/v1";\n\n// Create a new project\nconst res = await fetch(`${API}/organizations/${orgId}/projects`, {\n  method: "POST",\n  headers: {\n    Authorization: `Bearer ${accessToken}`,\n    "Content-Type": "application/json",\n  },\n  body: JSON.stringify({\n    name: null, // randomly generates project name\n  }),\n});\n\nconst project = await res.json();\nconsole.log(project);\n')),(0,r.kt)("p",null,"Execute this code with the following command in a terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"deno run -A --env create_project.ts\n")),(0,r.kt)("p",null,"If everything goes according to plan, you should see output that looks something\nlike this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  id: "f084712a-b23b-4aba-accc-3c2de0bfa26a",\n  name: "strong-fox-44",\n  createdAt: "2023-11-07T01:01:14.078730Z",\n  updatedAt: "2023-11-07T01:01:14.078730Z"\n}\n')),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the project that was returned with this repsonse - this is the\nproject ID we'll use in the next step."),(0,r.kt)("p",null,"Now that we have REST API access configured and a project set up, we can move on\nto ",(0,r.kt)("a",{parentName:"p",href:"./projects_and_deployments"},"creating our first deployment"),"."))}d.isMDXComponent=!0}}]);