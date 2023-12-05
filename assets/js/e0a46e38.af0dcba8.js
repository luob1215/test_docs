"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[927],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25875:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),o=(a(67294),a(3905)),r=a(74866),l=a(85162);const s={displayed_sidebar:"deployGuideHome"},i="Deno Deploy Quick Start",p={unversionedId:"manual/index",id:"manual/index",title:"Deno Deploy Quick Start",description:"Deno Deploy is a globally distributed platform for serverless JavaScript",source:"@site/deploy/manual/index.mdx",sourceDirName:"manual",slug:"/manual/",permalink:"/deploy/manual/",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"deployGuideHome"},sidebar:"deployGuideHome",next:{title:"Deno Deploy Use Cases",permalink:"/deploy/manual/use-cases"}},u={},c=[{value:"Option 1: Start with a template",id:"option-1-start-with-a-template",level:2},{value:"Option 2: Start with an existing app",id:"option-2-start-with-an-existing-app",level:2},{value:"Option 3: Start with a playground",id:"option-3-start-with-a-playground",level:2},{value:"Option 4: Start from scratch",id:"option-4-start-from-scratch",level:2},{value:"Install Deno and <code>deployctl</code>",id:"install-deno-and-deployctl",level:3},{value:"Write and test a Deno program",id:"write-and-test-a-deno-program",level:3},{value:"Sign up for Deno Deploy and create a blank project",id:"sign-up-for-deno-deploy-and-create-a-blank-project",level:3},{value:"Create and export a Deploy access token",id:"create-and-export-a-deploy-access-token",level:3},{value:"Deploy!",id:"deploy",level:3},{value:"Next Steps",id:"next-steps",level:2}],d={toc:c},m="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deno-deploy-quick-start"},"Deno Deploy Quick Start"),(0,o.kt)("p",null,"Deno Deploy is a globally distributed platform for serverless JavaScript\napplications. Your JavaScript, TypeScript, and WebAssembly code runs on managed\nservers geographically close to your users, enabling low latency and faster\nresponse times. Deploy applications run on fast, light-weight\n",(0,o.kt)("a",{parentName:"p",href:"https://deno.com/blog/anatomy-isolate-cloud"},"V8 isolates")," rather than virtual\nmachines, powered by the ",(0,o.kt)("a",{parentName:"p",href:"/runtime/manual"},"Deno runtime"),"."),(0,o.kt)("p",null,"Let's deploy your first application - it should only take a few minutes."),(0,o.kt)("h2",{id:"option-1-start-with-a-template"},"Option 1: Start with a template"),(0,o.kt)("p",null,"If you'd like to start out by deploying a pre-built template application, simply\n",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com"},"log in to the Deno Deploy dashboard"),' and click the "New\nProject" button. You can choose to deploy a starter web application using\n',(0,o.kt)("a",{parentName:"p",href:"https://fresh.deno.dev"},"Fresh")," or any of our supported web frameworks."),(0,o.kt)("h2",{id:"option-2-start-with-an-existing-app"},"Option 2: Start with an existing app"),(0,o.kt)("p",null,"If you already have a Deno project hosted on GitHub, you can immediately import\nit in Deno Deploy. ",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com"},"From the Deno Deploy dashboard"),',\nclick the "New Project" button and choose the option to "Select a repository".\nFollow the on-screen instructions to deploy your existing application.'),(0,o.kt)("h2",{id:"option-3-start-with-a-playground"},"Option 3: Start with a playground"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/deploy/manual/playgrounds"},"playground")," is a browser-based editor that enables you to\nwrite and run JavaScript code right away. This is a great choice for just\nkicking the tires on Deno and Deno Deploy!\n",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com"},"From the Deno Deploy dashboard"),', click the "New Project"\nbutton and choose any of the options with a "Try with a playground" button.'),(0,o.kt)("h2",{id:"option-4-start-from-scratch"},"Option 4: Start from scratch"),(0,o.kt)("p",null,"If you'd like to develop and deploy a simple application locally, follow these\ninstructions to get started. We'll use the ",(0,o.kt)("a",{parentName:"p",href:"/deploy/manual/deployctl"},(0,o.kt)("inlineCode",{parentName:"a"},"deployctl"))," command\nline utility to deploy a local Deno script from your computer."),(0,o.kt)("h3",{id:"install-deno-and-deployctl"},"Install Deno and ",(0,o.kt)("inlineCode",{parentName:"h3"},"deployctl")),(0,o.kt)("p",null,"If you haven't already, you can\n",(0,o.kt)("a",{parentName:"p",href:"/runtime/manual/getting_started/installation"},"install the Deno runtime"),"\nusing one of the commands below:"),(0,o.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mac",label:"macOS",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://deno.land/x/install/install.sh | sh\n"))),(0,o.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"irm https://deno.land/install.ps1 | iex\n"))),(0,o.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://deno.land/x/install/install.sh | sh\n")))),(0,o.kt)("p",null,"After Deno is installed, install the ",(0,o.kt)("a",{parentName:"p",href:"/deploy/manual/deployctl"},(0,o.kt)("inlineCode",{parentName:"a"},"deployctl"))," utility:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"deno install -A --no-check -r -f https://deno.land/x/deploy/deployctl.ts\n")),(0,o.kt)("p",null,"You can confirm ",(0,o.kt)("inlineCode",{parentName:"p"},"deployctl")," has been installed correctly by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"deployctl --help\n")),(0,o.kt)("p",null,"Now, you're ready to deploy a Deno script from the command line!"),(0,o.kt)("h3",{id:"write-and-test-a-deno-program"},"Write and test a Deno program"),(0,o.kt)("p",null,"Create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"server.ts"),' in your terminal, and include the following\n"Hello World" web server:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="server.ts"',title:'"server.ts"'},'Deno.serve(() => new Response("Hello, world!"));\n')),(0,o.kt)("p",null,"You can test that it works by running it with the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"deno run --allow-net server.ts\n")),(0,o.kt)("p",null,"Your server should be viewable at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8000"},"localhost:8000"),".\nNow let's run this code on the edge with Deno Deploy!"),(0,o.kt)("h3",{id:"sign-up-for-deno-deploy-and-create-a-blank-project"},"Sign up for Deno Deploy and create a blank project"),(0,o.kt)("p",null,"If you haven't already, now is the time to\n",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com"},"sign up for a Deno Deploy account"),". After signing up,\n",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com"},'click the "New Project" button here'),'. Near the top of\nthe page, you\'ll see an option to "create a blank project" - choose that option\nnow, as we will need one of these projects to complete our deployment process.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create a blank project",src:a(1062).Z,width:"2024",height:"658"})),(0,o.kt)("p",null,"After creating the project, make a note of the name that's generated for you -\nyou'll need this project name when deploying from the command line."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project name",src:a(54687).Z,width:"2008",height:"570"})),(0,o.kt)("p",null,"In this example, the project name is ",(0,o.kt)("inlineCode",{parentName:"p"},"deep-zebra-47")," - we'll use this as an\nexample name in the commands below."),(0,o.kt)("h3",{id:"create-and-export-a-deploy-access-token"},"Create and export a Deploy access token"),(0,o.kt)("p",null,"In order to use ",(0,o.kt)("inlineCode",{parentName:"p"},"deployctl")," to control your Deno Deploy account from the\ncommand line, you'll need an access token."),(0,o.kt)("p",null,"This token\n",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com/account#access-tokens"},"can be found in the dashboard here"),'.\nClick "New Access Token", give the token a name, and copy your newly minted token\nto a secure location on your computer.'),(0,o.kt)("p",null,"In your terminal, you'll need to export this token as a system environment\nvariable that can be used by ",(0,o.kt)("inlineCode",{parentName:"p"},"deployctl"),". "),(0,o.kt)(r.Z,{groupId:"shells",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"bash",label:"macOS / Linux",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export DENO_DEPLOY_TOKEN=your_access_token_here\n"))),(0,o.kt)(l.Z,{value:"powershell",label:" Windows (PowerShell)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"$env:DENO_DEPLOY_TOKEN = 'your_access_token_here'\n")))),(0,o.kt)("h3",{id:"deploy"},"Deploy!"),(0,o.kt)("p",null,"Now that you have a project created and an access token created, you're ready\nto deploy your application. In the same directory as the ",(0,o.kt)("inlineCode",{parentName:"p"},"server.ts")," file you\ncreated before, run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deployctl deploy --project=deep-zebra-47 --prod server.ts\n")),(0,o.kt)("p",null,"In a few moments, your Hello World server will be deployed across ~30 data\ncenters around the world, ready to handle large volumes of traffic."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Now that you've created your first project, you can\n",(0,o.kt)("a",{parentName:"p",href:"/deploy/manual/use-cases"},"check out the kinds of apps")," you can run on Deploy. You could\nalso skip right to ",(0,o.kt)("a",{parentName:"p",href:"/deploy/manual/custom-domains"},"setting up your own custom domain"),".\nWe're so excited to see what you'll ship with Deploy!"))}h.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),o=a(67294),r=a(86010),l=a(12466),s=a(16550),i=a(91980),p=a(67392),u=a(50012);function c(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,p]=h({queryString:a,groupId:n}),[c,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=i??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),y(e)}),[p,y,r]),tabValues:r}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==s&&(c(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},o.createElement(b,(0,n.Z)({},e,t)),o.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},1062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/blank_project-69d0c9382b131412f0aec4d0d88cbda2.png"},54687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project_name-052fe09eeaaa1ce857f525d5140d8648.png"}}]);