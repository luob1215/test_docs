"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[7498],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?o.createElement(h,i(i({ref:n},u),{},{components:t})):o.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20647:(e,n,t)=>{t.d(n,{ZP:()=>l});var o=t(87462),a=(t(67294),t(3905));const r={toc:[]},i="wrapper";function l(e){let{components:n,...t}=e;return(0,a.kt)(i,(0,o.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Deno KV is currently in beta",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Deno KV and related cloud primitive APIs like queues and cron are currently\n",(0,a.kt)("strong",{parentName:"p"},"experimental")," and ",(0,a.kt)("strong",{parentName:"p"},"subject to change"),". While we do our best to ensure data\ndurability, data loss is possible, especially around Deno updates."),(0,a.kt)("p",{parentName:"admonition"},"Deno programs that use KV require the ",(0,a.kt)("inlineCode",{parentName:"p"},"--unstable")," flag when launching the\nprogram, as shown below:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"deno run -A --unstable my_kv_code.ts\n"))))}l.isMDXComponent=!0},23105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=t(87462),a=(t(67294),t(3905)),r=t(20647);const i={},l="Scheduling cron tasks",s={unversionedId:"manual/cron",id:"manual/cron",title:"Scheduling cron tasks",description:"The Deno.cron interface enables",source:"@site/kv/manual/cron.md",sourceDirName:"manual",slug:"/manual/cron",permalink:"/kv/manual/cron",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kvGuideHome",previous:{title:"Using Queues",permalink:"/kv/manual/queue_overview"},next:{title:"Data Modeling in TypeScript",permalink:"/kv/manual/data_modeling_typescript"}},c={},u=[{value:"Retrying failed runs",id:"retrying-failed-runs",level:2},{value:"Design and limitations",id:"design-and-limitations",level:2},{value:"Tasks must be defined at the top level module scope",id:"tasks-must-be-defined-at-the-top-level-module-scope",level:3},{value:"Time zone",id:"time-zone",level:3},{value:"Overlapping executions",id:"overlapping-executions",level:3},{value:"Usage on Deno Deploy",id:"usage-on-deno-deploy",level:2},{value:"Differences with Deno CLI",id:"differences-with-deno-cli",level:3},{value:"How cron works by default",id:"how-cron-works-by-default",level:4},{value:"How cron works on Deno Deploy",id:"how-cron-works-on-deno-deploy",level:4},{value:"Cron dashboard",id:"cron-dashboard",level:3},{value:"Pricing",id:"pricing",level:3},{value:"Deploy-specific limitations",id:"deploy-specific-limitations",level:3},{value:"Cron configuration examples",id:"cron-configuration-examples",level:2}],p={toc:u},d="wrapper";function m(e){let{components:n,...i}=e;return(0,a.kt)(d,(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduling-cron-tasks"},"Scheduling cron tasks"),(0,a.kt)(r.ZP,{mdxType:"Admonition"}),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.cron&unstable="},(0,a.kt)("inlineCode",{parentName:"a"},"Deno.cron"))," interface enables\nyou to configure JavaScript or TypeScript code that executes on a configurable\nschedule using ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"cron syntax"),". In the example\nbelow, we configure a block of JavaScript code that will execute every minute."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'Deno.cron("Log a message", "* * * * *", () => {\n  console.log("This will print once a minute.");\n});\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," takes three arguments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A human-readable name for the cron task"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://cronitor.io/guides/cron-jobs"},"cron schedule string")," that defines a\nschedule on which the cron job will run"),(0,a.kt)("li",{parentName:"ul"},"a function to be executed on the given schedule")),(0,a.kt)("p",null,"If you are new to cron syntax, it might be useful to check out\n",(0,a.kt)("a",{parentName:"p",href:"https://crontab.guru/"},"crontab.guru"),", a browser-based tool that provides an\ninteractive interface to experiment with different cron syntaxes. There are also\na number of third party modules\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cron-time-generator"},"like this one")," that will\nhelp you generate cron schedule strings."),(0,a.kt)("h2",{id:"retrying-failed-runs"},"Retrying failed runs"),(0,a.kt)("p",null,"Failed cron invocations are automatically retried with a default retry policy.\nIf you would like to specify a custom retry policy, you can use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"backoffSchedule")," property to specify an array of wait times (in milliseconds)\nto wait before retrying the function call again. In the following example, we\nwill attempt to retry failed callbacks three times - after one second, five\nseconds, and then ten seconds."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'Deno.cron("Retry example", "* * * * *", () => {\n  throw new Error("Deno.cron will retry this three times, to no avail!");\n}, {\n  backoffSchedule: [1000, 5000, 10000],\n});\n')),(0,a.kt)("h2",{id:"design-and-limitations"},"Design and limitations"),(0,a.kt)("p",null,"Below are some design details and limitations to be aware of when using\n",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron"),"."),(0,a.kt)("h3",{id:"tasks-must-be-defined-at-the-top-level-module-scope"},"Tasks must be defined at the top level module scope"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.cron&unstable="},(0,a.kt)("inlineCode",{parentName:"a"},"Deno.cron"))," interface is\ndesigned to support static definition of cron tasks based on pre-defined\nschedules. All ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," tasks must be defined at the top-level of a module.\nAny nested ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," definitions (e.g. inside\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.serve&unstable="},(0,a.kt)("inlineCode",{parentName:"a"},"Deno.serve"))," handler) will\nresult in an error or will be ignored."),(0,a.kt)("p",null,"If you need to schedule tasks dynamically during your Deno program execution,\nyou can use the ",(0,a.kt)("a",{parentName:"p",href:"./queue_overview"},"Deno Queues")," APIs."),(0,a.kt)("h3",{id:"time-zone"},"Time zone"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," schedules are specified using UTC time zone. This helps avoid issues\nwith time zones which observe daylight saving time."),(0,a.kt)("h3",{id:"overlapping-executions"},"Overlapping executions"),(0,a.kt)("p",null,"It's possible for the next scheduled invocation of your cron task to overlap\nwith the previous invocation. If this occurs, ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," will skip the next\nscheduled invocation in order to avoid overlapping executions."),(0,a.kt)("h2",{id:"usage-on-deno-deploy"},"Usage on Deno Deploy"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://www.deno.com/deploy"},"Deno Deploy"),", you can run your background\ntasks on V8 isolates in the cloud. When doing so, there are a few considerations\nto keep in mind."),(0,a.kt)("h3",{id:"differences-with-deno-cli"},"Differences with Deno CLI"),(0,a.kt)("p",null,"Like other Deno runtime built-ins (like queues and Deno KV), the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron"),"\nimplementation works slightly differently on Deno Deploy."),(0,a.kt)("h4",{id:"how-cron-works-by-default"},"How cron works by default"),(0,a.kt)("p",null,"The implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," in the Deno runtime keeps execution state\nin-memory. If you run multiple Deno programs that use ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron"),", each program\nwill have its own independent set of cron tasks."),(0,a.kt)("h4",{id:"how-cron-works-on-deno-deploy"},"How cron works on Deno Deploy"),(0,a.kt)("p",null,"Deno Deploy provides a serverless implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," that is designed\nfor high availability and scale. Deno Deploy automatically extracts your\n",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," definitions at deployment time, and schedules them for execution\nusing on-demand isolates. Your latest production deployment defines the set of\nactive cron tasks that are scheduled for execution. To add, remove, or modify\ncron tasks, simply modify your code and create a new production deployment."),(0,a.kt)("p",null,"Deno Deploy guarantees that your cron tasks are executed at least once per each\nscheduled time interval. This generally means that your cron handler will be\ninvoked once per scheduled time. In some failure scenarios, the handler may be\ninvoked multiple times for the same scheduled time."),(0,a.kt)("h3",{id:"cron-dashboard"},"Cron dashboard"),(0,a.kt)("p",null,"When you make a production deployment that includes a cron task, you can view a\nlist of all your cron tasks in the\n",(0,a.kt)("a",{parentName:"p",href:"https://dash.deno.com/projects"},"Deploy dashboard")," under the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cron")," tab for your\nproject."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"a listing of cron tasks in the Deno dashboard",src:t(32037).Z,width:"1978",height:"640"})),(0,a.kt)("h3",{id:"pricing"},"Pricing"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Deno.cron")," invocations are charged at the same rate as inbound HTTP requests to\nyour deployments. Learn more about pricing\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.com/deploy/pricing"},"here"),"."),(0,a.kt)("h3",{id:"deploy-specific-limitations"},"Deploy-specific limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Deno.cron")," is only available for production deployments (not preview\ndeployments)"),(0,a.kt)("li",{parentName:"ul"},"The exact invocation time of your ",(0,a.kt)("inlineCode",{parentName:"li"},"Deno.cron")," handler may vary by up to a\nminute from the scheduled time")),(0,a.kt)("h2",{id:"cron-configuration-examples"},"Cron configuration examples"),(0,a.kt)("p",null,"Here are a few common cron configurations, provided for your convenience."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Run once a minute"',title:'"Run',once:!0,a:!0,'minute"':!0},'Deno.cron("Run once a minute", "* * * * *", () => {\n  console.log("Hello, cron!");\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Run every fifteen minutes"',title:'"Run',every:!0,fifteen:!0,'minutes"':!0},'Deno.cron("Run every fifteen minutes", "*/15 * * * *", () => {\n  console.log("Hello, cron!");\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Run once an hour, on the hour"',title:'"Run',once:!0,an:!0,"hour,":!0,on:!0,the:!0,'hour"':!0},'Deno.cron("Run once an hour, on the hour", "0 * * * *", () => {\n  console.log("Hello, cron!");\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Run every three hours"',title:'"Run',every:!0,three:!0,'hours"':!0},'Deno.cron("Run every three hours", "0 */3 * * *", () => {\n  console.log("Hello, cron!");\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Run every day at 1am"',title:'"Run',every:!0,day:!0,at:!0,'1am"':!0},'Deno.cron("Run every day at 1am", "0 1 * * *", () => {\n  console.log("Hello, cron!");\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Run every Wednesday at midnight"',title:'"Run',every:!0,Wednesday:!0,at:!0,'midnight"':!0},'Deno.cron("Run every Wednesday at midnight", "0 0 * * WED", () => {\n  console.log("Hello, cron!");\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Run on the first of the month at midnight"',title:'"Run',on:!0,the:!0,first:!0,of:!0,month:!0,at:!0,'midnight"':!0},'Deno.cron("Run on the first of the month at midnight", "0 0 1 * *", () => {\n  console.log("Hello, cron!");\n});\n')))}m.isMDXComponent=!0},32037:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cron-tasks-a468220fd23dde3dade0cf23964ec338.png"}}]);