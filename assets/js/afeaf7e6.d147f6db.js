"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[7660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,g=c["".concat(i,".").concat(h)]||c[h]||d[h]||r;return n?o.createElement(g,s(s({ref:t},u),{},{components:n})):o.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={},s="API server with Postgres",l={unversionedId:"tutorials/tutorial-postgres",id:"tutorials/tutorial-postgres",title:"API server with Postgres",description:"Postgres is a popular database for web applications because of its flexibility",source:"@site/deploy/tutorials/tutorial-postgres.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-postgres",permalink:"/deploy/tutorials/tutorial-postgres",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployTutorialsHome",previous:{title:"Build a blog with Hugo",permalink:"/deploy/tutorials/tutorial-hugo-blog"},next:{title:"Use Wordpress as a headless CMS",permalink:"/deploy/tutorials/tutorial-wordpress-frontend"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"Setup Postgres",id:"setup-postgres",level:2},{value:"Write and deploy the application",id:"write-and-deploy-the-application",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-server-with-postgres"},"API server with Postgres"),(0,a.kt)("p",null,"Postgres is a popular database for web applications because of its flexibility\nand ease of use. This guide will show you how to use Deno Deploy with Postgres."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setup-postgres"},"Setup Postgres")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#write-and-deploy-the-application"},"Write and deploy the application"))),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We are going to build the API for a simple todo list application. It will have\ntwo endpoints:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /todos")," will return a list of all todos, and ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /todos")," will create a\nnew todo."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'GET /todos\n# returns a list of all todos\n[\n  {\n    "id": 1,\n    "title": "Buy bread"\n  },\n  {\n    "id": 2,\n    "title": "Buy rice"\n  },\n  {\n    "id": 3,\n    "title": "Buy spices"\n  }\n]\n\nPOST /todos\n# creates a new todo\n"Buy milk"\n# returns a 201 status code\n')),(0,a.kt)("p",null,"In this tutorial, we will be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating and setting up a ",(0,a.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"Postgres")," instance on\n",(0,a.kt)("a",{parentName:"li",href:"https://supabase.com"},"Supabase"),"."),(0,a.kt)("li",{parentName:"ul"},"Using a ",(0,a.kt)("a",{parentName:"li",href:"/deploy"},"Deno Deploy")," Playground to develop and deploy the\napplication."),(0,a.kt)("li",{parentName:"ul"},"Testing our application using ",(0,a.kt)("a",{parentName:"li",href:"https://curl.se/"},"cURL"),".")),(0,a.kt)("h2",{id:"setup-postgres"},"Setup Postgres"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This tutorial will focus entirely on connecting to Postgres unencrypted. If\nyou would like to use encryption with a custom CA certificate, use the\ndocumentation ",(0,a.kt)("a",{parentName:"p",href:"https://deno-postgres.com/#/?id=ssltls-connection"},"here"),".")),(0,a.kt)("p",null,"To get started we need to create a new Postgres instance for us to connect to.\nFor this tutorial we will be using ",(0,a.kt)("a",{parentName:"p",href:"https://supabase.com"},"Supabase")," as they\nprovide free, managed Postgres instances. If you like to host your database\nsomewhere else, you can do that too."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://app.supabase.io/"},"https://app.supabase.io/"),' and click "New project".'),(0,a.kt)("li",{parentName:"ol"},"Select a name, password, and region for your database. Make sure to save the\npassword, as you will need it later."),(0,a.kt)("li",{parentName:"ol"},'Click "Create new project". Creating the project can take a while, so be\npatient.'),(0,a.kt)("li",{parentName:"ol"},'Once the project is created, navigate to the "Database" tab on the left.'),(0,a.kt)("li",{parentName:"ol"},'Go to the "Connection Pooling" settings, and copy the connection string from\nthe "Connection String" field. This is the connection string you will use to\nconnect to your database. Insert the password you saved earlier into this\nstring, and then save the string somewhere - you will need it later.')),(0,a.kt)("h2",{id:"write-and-deploy-the-application"},"Write and deploy the application"),(0,a.kt)("p",null,'We can now start writing our application. To start, we will create a new Deno\nDeploy playground in the control panel: press the "New Playground" button on\n',(0,a.kt)("a",{parentName:"p",href:"https://dash.deno.com/projects"},"https://dash.deno.com/projects"),"."),(0,a.kt)("p",null,"This will open up the playground editor. Before we can actually start writing\ncode, we'll need to put our Postgres connection string into the environment\nvariables. To do this, click on the project name in the top left corner of the\neditor. This will open up the project settings."),(0,a.kt)("p",null,'From here, you can navigate to the "Settings" -> "Environment Variable" tab via\nthe left navigation menu. Enter "DATABASE_URL" into the "Key" field, and paste\nyour connection string into the "Value" field. Now, press "Add". Your\nenvironment variables is now set.'),(0,a.kt)("p",null,'Let\'s return back to the editor: to do this, go to the "Overview" tab via the\nleft navigation menu, and press "Open Playground". Let\'s start by the ',(0,a.kt)("inlineCode",{parentName:"p"},"std/http"),"\nmodule so we can start serving HTTP requests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { serve } from "https://deno.land/std@0.208.0/http/server.ts";\n\nserve(async (req) => {\n  return new Response("Not Found", { status: 404 });\n});\n')),(0,a.kt)("p",null,"You can already save this code using ",(0,a.kt)("kbd",null,"Ctrl"),"+",(0,a.kt)("kbd",null,"S")," (or"),(0,a.kt)("kbd",null,"Cmd"),"+",(0,a.kt)("kbd",null,"S"),' on Mac). You should see the preview page on the right refresh automatically: it now says "Not Found".',(0,a.kt)("p",null,"Next, let's import the Postgres module, read the connection string from the\nenvironment variables, and create a connection pool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { serve } from "https://deno.land/std@0.208.0/http/server.ts";\nimport * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";\n\n// Get the connection string from the environment variable "DATABASE_URL"\nconst databaseUrl = Deno.env.get("DATABASE_URL")!;\n\n// Create a database pool with three connections that are lazily established\nconst pool = new postgres.Pool(databaseUrl, 3, true);\n')),(0,a.kt)("p",null,"Again, you can save this code now, but this time you should see no changes. We\nare creating a connection pool, but we are not actually running any queries\nagainst the database yet. Before we can do that, we need to set up our table\nschema."),(0,a.kt)("p",null,"We want to store a list of todos. Let's create a table called ",(0,a.kt)("inlineCode",{parentName:"p"},"todos")," with an\nauto-increment ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," column and a ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," column:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const pool = new postgres.Pool(databaseUrl, 3, true);\n\n// Connect to the database\nconst connection = await pool.connect();\ntry {\n  // Create the table\n  await connection.queryObject`\n    CREATE TABLE IF NOT EXISTS todos (\n      id SERIAL PRIMARY KEY,\n      title TEXT NOT NULL\n    )\n  `;\n} finally {\n  // Release the connection back into the pool\n  connection.release();\n}\n")),(0,a.kt)("p",null,"Now that we have a table, we can add the HTTP handlers for the GET and POST\nendpoints."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'serve(async (req) => {\n  // Parse the URL and check that the requested endpoint is /todos. If it is\n  // not, return a 404 response.\n  const url = new URL(req.url);\n  if (url.pathname !== "/todos") {\n    return new Response("Not Found", { status: 404 });\n  }\n\n  // Grab a connection from the database pool\n  const connection = await pool.connect();\n\n  try {\n    switch (req.method) {\n      case "GET": { // This is a GET request. Return a list of all todos.\n        // Run the query\n        const result = await connection.queryObject`\n          SELECT * FROM todos\n        `;\n\n        // Encode the result as JSON\n        const body = JSON.stringify(result.rows, null, 2);\n\n        // Return the result as JSON\n        return new Response(body, {\n          headers: { "content-type": "application/json" },\n        });\n      }\n      case "POST": { // This is a POST request. Create a new todo.\n        // Parse the request body as JSON. If the request body fails to parse,\n        // is not a string, or is longer than 256 chars, return a 400 response.\n        const title = await req.json().catch(() => null);\n        if (typeof title !== "string" || title.length > 256) {\n          return new Response("Bad Request", { status: 400 });\n        }\n\n        // Insert the new todo into the database\n        await connection.queryObject`\n          INSERT INTO todos (title) VALUES (${title})\n        `;\n\n        // Return a 201 Created response\n        return new Response("", { status: 201 });\n      }\n      default: // If this is neither a POST, or a GET return a 405 response.\n        return new Response("Method Not Allowed", { status: 405 });\n    }\n  } catch (err) {\n    console.error(err);\n    // If an error occurs, return a 500 response\n    return new Response(`Internal Server Error\\n\\n${err.message}`, {\n      status: 500,\n    });\n  } finally {\n    // Release the connection back into the pool\n    connection.release();\n  }\n});\n')),(0,a.kt)("p",null,"And there we go - application done. Deploy this code by saving the editor. You\ncan now POST to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/todos")," endpoint to create a new todo, and you can get a\nlist of all todos by making a GET request to ",(0,a.kt)("inlineCode",{parentName:"p"},"/todos"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'$ curl -X GET https://tutorial-postgres.deno.dev/todos\n[]\u23ce\n\n$ curl -X POST -d \'"Buy milk"\' https://tutorial-postgres.deno.dev/todos\n\n$ curl -X GET https://tutorial-postgres.deno.dev/todos\n[\n  {\n    "id": 1,\n    "title": "Buy milk"\n  }\n]\u23ce\n')),(0,a.kt)("p",null,"It's all working \ud83c\udf89"),(0,a.kt)("p",null,"The full code for the tutorial:"),(0,a.kt)("iframe",{width:"100%",height:"600",src:"https://embed.deno.com/playground/tutorial-postgres?layout=code-only&corp"}),(0,a.kt)("p",null,"As an extra challenge, try add a ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE /todos/:id")," endpoint to delete a todo.\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API"},"URLPattern")," API can help with this."))}d.isMDXComponent=!0}}]);