"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[8891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,y=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?o.createElement(y,i(i({ref:t},d),{},{components:n})):o.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},74550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="CI and GitHub Actions",l={unversionedId:"manual/ci_github",id:"manual/ci_github",title:"CI and GitHub Actions",description:"Deno Deploy's Git integration enables deployment of code changes that are pushed",source:"@site/deploy/manual/ci_github.md",sourceDirName:"manual",slug:"/manual/ci_github",permalink:"/deploy/manual/ci_github",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"Deploy with GitHub integration",permalink:"/deploy/manual/how-to-deploy"},next:{title:"Using deployctl on the command line",permalink:"/deploy/manual/deployctl"}},p={},s=[{value:"Automatic",id:"automatic",level:2},{value:"GitHub Action",id:"github-action",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ci-and-github-actions"},"CI and GitHub Actions"),(0,a.kt)("p",null,"Deno Deploy's Git integration enables deployment of code changes that are pushed\nto a GitHub repository. Commits on the production branch will be deployed as a\nproduction deployment. Commits on all other branches will be deployed as a\npreview deployment."),(0,a.kt)("p",null,"There are two modes of operation for the Git integration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select your organization name, and repository. ",(0,a.kt)("em",{parentName:"li"},"If your repository or\norganization does not show up, make sure the ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/apps/deno-deploy"},"Deno Deploy GitHub App"),"\nis installed on your repository.")),(0,a.kt)("li",{parentName:"ol"},"Select a production branch. Code deployed from this branch will be deployed\nas a production deployment instead of a preview deployment."),(0,a.kt)("li",{parentName:"ol"},"Choose either ",(0,a.kt)("strong",{parentName:"li"},"Automatic")," or ",(0,a.kt)("strong",{parentName:"li"},"GitHub Actions")," deployment mode.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Automatic"),": Deno Deploy will automatically pull code and assets from\nyour repository source every time you push, and deploy it. This mode is\nvery fast, but does not allow for a build step. ",(0,a.kt)("em",{parentName:"li"},"This is the recommended\nmode for most users.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitHub Actions"),": In this mode, you push your code and assets to Deno\nDeploy from a GitHub Actions workflow. This allows you to perform a build\nstep before deploying. Below, we go into more detail about the different\nconfigurations for ",(0,a.kt)("strong",{parentName:"li"},"Automatic")," and ",(0,a.kt)("strong",{parentName:"li"},"Github Actions")," mode.")))),(0,a.kt)("h2",{id:"automatic"},"Automatic"),(0,a.kt)("p",null,"If you select ",(0,a.kt)("strong",{parentName:"p"},"Automatic"),' mode above, you\'ll subsequently have to select a\nfile in your Github repo as the "entrypoint" file. The entry file is simply the\nfile that Deno will run.'),(0,a.kt)("h2",{id:"github-action"},"GitHub Action"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GitHub Action")," mode enables you to add a build step to your deployment\nprocess by leveraging the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployctl")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/denoland/deployctl/blob/main/action/README.md"},"Github action"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"<project-name>")," project page and select your Github repo under\nthe ",(0,a.kt)("strong",{parentName:"p"},"Git integration")," card."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-project",src:n(71718).Z,width:"1066",height:"313"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select your branch for the production branch, and in the popup that appears,\nselect ",(0,a.kt)("strong",{parentName:"p"},"Github Action")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-branch",src:n(56782).Z,width:"709",height:"586"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Ok")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-ok",src:n(17293).Z,width:"709",height:"557"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Link")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-link",src:n(91682).Z,width:"723",height:"553"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This should take you to a next page, where you see a preview of a\n",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file that you can download. Download the file and add it to your\nGithub project under ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy.yml")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-deploy-yaml",src:n(50326).Z,width:"719",height:"805"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file as appropriate with your build step, Deno\nproject name, and entrypoint file:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"job:\npermissions:\n    id-token: write # This is required to allow the GitHub Action to authenticate with Deno Deploy.\n    contents: read\nsteps:\n    - name: Deploy to Deno Deploy\n    uses: denoland/deployctl@v1\n    with:\n        project: my-project # the name of the project on Deno Deploy\n        entrypoint: main.ts # the entrypoint to deploy\n")),(0,a.kt)("p",{parentName:"li"},"By default the entire contents of the repository will be deployed. This can\nbe changed by specifying the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," option."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Deploy to Deno Deploy\nuses: denoland/deployctl@v1\nwith:\n    project: my-project\n    entrypoint: index.js\n    root: dist\n")),(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"entrypoint")," can either be a relative path, file name, or an absolute\nURL. If it is a relative path, it will be resolved relative to the ",(0,a.kt)("inlineCode",{parentName:"p"},"root"),".\nBoth absolute ",(0,a.kt)("inlineCode",{parentName:"p"},"file:///")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," URLs are supported."),(0,a.kt)("p",{parentName:"li"},"To deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"./dist")," directory using the\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/std/http/file_server.ts"},"std/http/file_server.ts")," module, you can use the following\nconfiguration:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"- name: Deploy to Deno Deploy\nuses: denoland/deployctl@v1\nwith:\n    project: my-project\n    entrypoint: https://deno.land/std@0.208.0/http/file_server.ts\n    root: dist\n")),(0,a.kt)("p",{parentName:"li"},"See\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/denoland/deployctl/blob/main/action/README.md"},"deployctl README"),"\nfor more details."))))}m.isMDXComponent=!0},56782:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-branch-ffca7d7203482c08caa0dce59e1a45cb.png"},50326:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-deploy-yaml-dbf95bd1e5d32fa2d681e1b836891a8c.png"},91682:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-link-21fecbb428609b562bbfbd02d3bdb66e.png"},17293:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-ok-14b1f5190ac0b874c6e5fabb91cc0214.png"},71718:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-project-d80b8b3e14eab76faa2dc4cdca6be9cd.png"}}]);