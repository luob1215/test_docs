"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},i="Deploy a React app with Vite",p={unversionedId:"tutorials/vite",id:"tutorials/vite",title:"Deploy a React app with Vite",description:"This tutorial covers how to deploy a Vite Deno and React app on Deno Deploy.",source:"@site/deploy/tutorials/vite.md",sourceDirName:"tutorials",slug:"/tutorials/vite",permalink:"/deploy/tutorials/vite",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployTutorialsHome",previous:{title:"Use Wordpress as a headless CMS",permalink:"/deploy/tutorials/tutorial-wordpress-frontend"}},l={},s=[{value:"<strong>Step 1:</strong> Create Vite app",id:"step-1-create-vite-app",level:2},{value:"<strong>Step 2:</strong> Build repo",id:"step-2-build-repo",level:2},{value:"<strong>Step 3:</strong> Create a new Deno project",id:"step-3-create-a-new-deno-project",level:2},{value:"<strong>Step 4:</strong> Deploy the static site to Deno Deploy",id:"step-4-deploy-the-static-site-to-deno-deploy",level:2},{value:"Github integration",id:"github-integration",level:3},{value:"<code>deployctl</code>",id:"deployctl",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-a-react-app-with-vite"},"Deploy a React app with Vite"),(0,a.kt)("p",null,"This tutorial covers how to deploy a Vite Deno and React app on Deno Deploy."),(0,a.kt)("h2",{id:"step-1-create-vite-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1:")," Create Vite app"),(0,a.kt)("p",null,"Let's use ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite")," to quickly scaffold a Deno and React app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"deno run --allow-read --allow-write --allow-env npm:create-vite-extra@latest\n")),(0,a.kt)("p",null,"We'll name our project ",(0,a.kt)("inlineCode",{parentName:"p"},"vite-project"),". Be sure to select ",(0,a.kt)("inlineCode",{parentName:"p"},"deno-react")," in the\nproject configuration."),(0,a.kt)("p",null,"Then, ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the newly created project folder."),(0,a.kt)("h2",{id:"step-2-build-repo"},(0,a.kt)("strong",{parentName:"h2"},"Step 2:")," Build repo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"deno task build\n")),(0,a.kt)("h2",{id:"step-3-create-a-new-deno-project"},(0,a.kt)("strong",{parentName:"h2"},"Step 3:")," Create a new Deno project"),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://dash.deno.com/new"},"https://dash.deno.com/new")," and click the ",(0,a.kt)("strong",{parentName:"p"},"+Empty Project")," button\nunder ",(0,a.kt)("strong",{parentName:"p"},"Deploy from command line"),"."),(0,a.kt)("p",null,"On the next page, grab the project name, in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"late-goose-47"),"."),(0,a.kt)("h2",{id:"step-4-deploy-the-static-site-to-deno-deploy"},(0,a.kt)("strong",{parentName:"h2"},"Step 4:")," Deploy the static site to Deno Deploy"),(0,a.kt)("p",null,"There are a couple of ways you can deploy the Vite site to Deno Deploy."),(0,a.kt)("h3",{id:"github-integration"},"Github integration"),(0,a.kt)("p",null,"The first way is via the Github integration."),(0,a.kt)("p",null,"Recall that the Github integration has two modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Automatic"),": Deno Deploy will automatically pull code and assets from your\nrepository source every time you push and deploy it. This mode is very fast\nbut does not allow for a build step."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitHub Actions"),": In this mode, you push your code and assets to Deno Deploy\nfrom a GitHub Actions workflow. This allows you to perform a build step before\ndeploying.")),(0,a.kt)("p",null,"Since there is a build step here, you will need to use the Github Actions mode."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"<project-name>")," project page and select ",(0,a.kt)("inlineCode",{parentName:"p"},"vite-project")," under the\n",(0,a.kt)("strong",{parentName:"p"},"Git integration")," card."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-project",src:n(71718).Z,width:"1066",height:"313"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select your branch for the production branch, and in the popup that appears,\nselect ",(0,a.kt)("strong",{parentName:"p"},"Github Action")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-branch",src:n(56782).Z,width:"709",height:"586"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Ok")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-ok",src:n(17293).Z,width:"709",height:"557"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Link")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-link",src:n(91682).Z,width:"723",height:"553"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This should take you to the next page, where you will see a preview of a\n",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file that you can download. Download the file and add it to your\n",(0,a.kt)("inlineCode",{parentName:"p"},"vite-project")," under ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy.yml")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"vite-deploy-yaml",src:n(50326).Z,width:"719",height:"805"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file so that it looks like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'name: Deploy\non: [push]\n\njobs:\ndeploy:\n    name: Deploy\n    runs-on: ubuntu-latest\n    permissions:\n    id-token: write # Needed for auth with Deno Deploy\n    contents: read # Needed to clone the repository\n\n    steps:\n    - name: Clone repository\n        uses: actions/checkout@v3\n\n    - name: Install Deno\n        uses: denoland/setup-deno@v1\n\n    - name: Build\n        run: deno task build\n\n    - name: Deploy to Deno Deploy\n        uses: denoland/deployctl@v1\n        with:\n        project: "<project-name>"\n        entrypoint: https://deno.land/std@0.208.0/http/file_server.ts\n        root: dist\n')),(0,a.kt)("p",{parentName:"li"},"For this example there are two build steps:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"setting up Deno"),(0,a.kt)("li",{parentName:"ul"},"running ",(0,a.kt)("inlineCode",{parentName:"li"},"deno task build"))),(0,a.kt)("p",{parentName:"li"},"You will also have to set the entrypoint file to\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://deno.land/std@$STD_VERSION/http/file_server.ts"),", and the root to\n",(0,a.kt)("inlineCode",{parentName:"p"},"/dist"),"."),(0,a.kt)("p",{parentName:"li"},"Note that this is not a file that exists in the Vite repo itself. Instead, it\nis an external program. When run, this program uploads all the static asset\nfiles in your current repo (",(0,a.kt)("inlineCode",{parentName:"p"},"vite-project/dist"),") to Deno Deploy. Then when\nyou navigate to the deployment URL, it serves up the local directory."),(0,a.kt)("p",{parentName:"li"},"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.yml")," file has been pushed to your Github repo, every time\ncode is pushed to the Github repo, it will also be pushed to Deno Deploy,\nwith the build step run first."))),(0,a.kt)("h3",{id:"deployctl"},(0,a.kt)("inlineCode",{parentName:"h3"},"deployctl")),(0,a.kt)("p",null,"Alternatively, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"deployctl")," directly to deploy ",(0,a.kt)("inlineCode",{parentName:"p"},"vite-project")," to Deno\nDeploy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /dist\ndeployctl deploy --project=<project-name> https://deno.land/std@0.208.0/http/file_server.ts\n")))}u.isMDXComponent=!0},56782:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-branch-ffca7d7203482c08caa0dce59e1a45cb.png"},50326:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-deploy-yaml-dbf95bd1e5d32fa2d681e1b836891a8c.png"},91682:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-link-21fecbb428609b562bbfbd02d3bdb66e.png"},17293:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-ok-14b1f5190ac0b874c6e5fabb91cc0214.png"},71718:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vite-project-d80b8b3e14eab76faa2dc4cdca6be9cd.png"}}]);