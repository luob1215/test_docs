"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[2229],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(t),c=o,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},99411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const l={},r="Task Runner",i={unversionedId:"manual/tools/task_runner",id:"manual/tools/task_runner",title:"Task Runner",description:"deno task provides a cross platform way to define and execute custom commands",source:"@site/runtime/manual/tools/task_runner.md",sourceDirName:"manual/tools",slug:"/manual/tools/task_runner",permalink:"/runtime/manual/tools/task_runner",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Script Installer",permalink:"/runtime/manual/tools/script_installer"},next:{title:"Vendoring Dependencies",permalink:"/runtime/manual/tools/vendor"}},s={},p=[{value:"Listing tasks",id:"listing-tasks",level:2},{value:"Executing a task",id:"executing-a-task",level:2},{value:"Specifying the current working directory",id:"specifying-the-current-working-directory",level:2},{value:"Getting directory <code>deno task</code> was run from",id:"getting-directory-deno-task-was-run-from",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Boolean lists",id:"boolean-lists",level:3},{value:"Sequential lists",id:"sequential-lists",level:3},{value:"Async commands",id:"async-commands",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Setting environment variables for a command",id:"setting-environment-variables-for-a-command",level:4},{value:"Shell variables",id:"shell-variables",level:3},{value:"Pipelines",id:"pipelines",level:3},{value:"Command substitution",id:"command-substitution",level:3},{value:"Negate exit code",id:"negate-exit-code",level:3},{value:"Redirects",id:"redirects",level:3},{value:"Glob expansion",id:"glob-expansion",level:3},{value:"Built-in commands",id:"built-in-commands",level:2},{value:"package.json support",id:"packagejson-support",level:2}],d={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"task-runner"},"Task Runner"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deno task")," provides a cross platform way to define and execute custom commands\nspecific to a codebase."),(0,o.kt)("p",null,"To get started, define your commands in your codebase's\n",(0,o.kt)("a",{parentName:"p",href:"/runtime/manual/getting_started/configuration_file"},"Deno configuration file")," under a\n",(0,o.kt)("inlineCode",{parentName:"p"},'"tasks"')," key."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "tasks": {\n    "data": "deno task collect && deno task analyze",\n    "collect": "deno run --allow-read=. --allow-write=. scripts/collect.js",\n    "analyze": "deno run --allow-read=. scripts/analyze.js"\n  }\n}\n')),(0,o.kt)("h2",{id:"listing-tasks"},"Listing tasks"),(0,o.kt)("p",null,"To get an output showing all the defined tasks, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno task\n")),(0,o.kt)("h2",{id:"executing-a-task"},"Executing a task"),(0,o.kt)("p",null,"To execute a specific task, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"deno task task-name [additional args]...\n")),(0,o.kt)("p",null,"In the example above, to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," task we would do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"deno task data\n")),(0,o.kt)("h2",{id:"specifying-the-current-working-directory"},"Specifying the current working directory"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"deno task")," executes commands with the directory of the Deno\nconfiguration file (ex. ",(0,o.kt)("em",{parentName:"p"},"deno.json"),") as the current working directory. This\nallows tasks to use relative paths and continue to work regardless of where in\nthe directory tree you happen to execute the deno task from. In some scenarios,\nthis may not be desired and this behavior can be overridden with the ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT_CWD"),"\nenvironment variable."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INIT_CWD")," will be set with the full path to the directory the task was run in,\nif not already set. This aligns with the same behavior as ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run"),"."),(0,o.kt)("p",null,"For example, the following task will change the current working directory of the\ntask to be in the same directory the user ran the task from and then output the\ncurrent working directory which is now that directory (remember, this works on\nWindows too because deno task is cross platform)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "tasks": {\n    "my_task": "cd $INIT_CWD && pwd"\n  }\n}\n')),(0,o.kt)("h2",{id:"getting-directory-deno-task-was-run-from"},"Getting directory ",(0,o.kt)("inlineCode",{parentName:"h2"},"deno task")," was run from"),(0,o.kt)("p",null,"Since tasks are run using the directory of the Deno configuration file as the\ncurrent working directory, it may be useful to know the directory the\n",(0,o.kt)("inlineCode",{parentName:"p"},"deno task")," was executed from instead. This is possible by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT_CWD"),"\nenvironment variable in a task or script launched from ",(0,o.kt)("inlineCode",{parentName:"p"},"deno task")," (works the\nsame way as in ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run"),", but in a cross platform way)."),(0,o.kt)("p",null,"For example, to provide this directory to a script in a task, do the following\n(note the directory is surrounded in double quotes to keep it as a single\nargument in case it contains spaces):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tasks": {\n    "start": "deno run main.ts \\"$INIT_CWD\\""\n  }\n}\n')),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deno task")," uses a cross platform shell that's a subset of sh/bash to execute\ndefined tasks."),(0,o.kt)("h3",{id:"boolean-lists"},"Boolean lists"),(0,o.kt)("p",null,"Boolean lists provide a way to execute additional commands based on the exit\ncode of the initial command. They separate commands using the ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"||"),"\noperators."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"&&")," operator provides a way to execute a command and if it ",(0,o.kt)("em",{parentName:"p"},"succeeds")," (has\nan exit code of ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),") it will execute the next command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run --allow-read=. --allow-write=. collect.ts && deno run --allow-read=. analyze.ts\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"||")," operator is the opposite. It provides a way to execute a command and\nonly if it ",(0,o.kt)("em",{parentName:"p"},"fails")," (has a non-zero exit code) it will execute the next command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run --allow-read=. --allow-write=. collect.ts || deno run play_sad_music.ts\n")),(0,o.kt)("h3",{id:"sequential-lists"},"Sequential lists"),(0,o.kt)("p",null,"Sequential lists are similar to boolean lists, but execute regardless of whether\nthe previous command in the list passed or failed. Commands are separated with a\nsemi-colon (",(0,o.kt)("inlineCode",{parentName:"p"},";"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run output_data.ts ; deno run --allow-net server.ts\n")),(0,o.kt)("h3",{id:"async-commands"},"Async commands"),(0,o.kt)("p",null,"Async commands provide a way to make a command execute asynchronously. This can\nbe useful when starting multiple processes. To make a command asynchronous, add\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"&")," to the end of it. For example the following would execute\n",(0,o.kt)("inlineCode",{parentName:"p"},"sleep 1 && deno run --allow-net client.ts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deno run --allow-net server.ts"),"\nat the same time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sleep 1 && deno run --allow-net client.ts & deno run --allow-net server.ts\n")),(0,o.kt)("p",null,"Unlike in most shells, the first async command to fail will cause all the other\ncommands to fail immediately. In the example above, this would mean that if the\nclient command fails then the server command will also fail and exit. You can\nopt out of this behavior by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"|| true")," to the end of a command, which will\nforce a ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," exit code. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run --allow-net client.ts || true & deno run --allow-net server.ts || true\n")),(0,o.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"Environment variables are defined like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export VAR_NAME=value\n")),(0,o.kt)("p",null,"Here's an example of using one in a task with shell variable substitution and\nthen with it being exported as part of the environment of the spawned Deno\nprocess (note that in the JSON configuration file the double quotes would need\nto be escaped with backslashes):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"export VAR=hello && echo $VAR && deno eval \"console.log('Deno: ' + Deno.env.get('VAR'))\"\n")),(0,o.kt)("p",null,"Would output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hello\nDeno: hello\n")),(0,o.kt)("h4",{id:"setting-environment-variables-for-a-command"},"Setting environment variables for a command"),(0,o.kt)("p",null,"To specify environment variable(s) before a command, list them like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"VAR=hello VAR2=bye deno run main.ts\n")),(0,o.kt)("p",null,"This will use those environment variables specifically for the following\ncommand."),(0,o.kt)("h3",{id:"shell-variables"},"Shell variables"),(0,o.kt)("p",null,"Shell variables are similar to environment variables, but won't be exported to\nspawned commands. They are defined with the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"VAR_NAME=value\n")),(0,o.kt)("p",null,'If we use a shell variable instead of an environment variable in a similar\nexample to what\'s shown in the previous "Environment variables" section:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"VAR=hello && echo $VAR && deno eval \"console.log('Deno: ' + Deno.env.get('VAR'))\"\n")),(0,o.kt)("p",null,"We will get the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"hello\nDeno: undefined\n")),(0,o.kt)("p",null,"Shell variables can be useful when we want to re-use a value, but don't want it\navailable in any spawned processes."),(0,o.kt)("h3",{id:"pipelines"},"Pipelines"),(0,o.kt)("p",null,"Pipelines provide a way to pipe the output of one command to another."),(0,o.kt)("p",null,'The following command pipes the stdout output "Hello" to the stdin of the\nspawned Deno process:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo Hello | deno run main.ts\n")),(0,o.kt)("p",null,"To pipe stdout and stderr, use ",(0,o.kt)("inlineCode",{parentName:"p"},"|&")," instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno eval 'console.log(1); console.error(2);' |& deno run main.ts\n")),(0,o.kt)("h3",{id:"command-substitution"},"Command substitution"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"$(command)")," syntax provides a way to use the output of a command in other\ncommands that get executed."),(0,o.kt)("p",null,"For example, to provide the output of getting the latest git revision to another\ncommand you could do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run main.ts $(git rev-parse HEAD)\n")),(0,o.kt)("p",null,"Another example using a shell variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"REV=$(git rev-parse HEAD) && deno run main.ts $REV && echo $REV\n")),(0,o.kt)("h3",{id:"negate-exit-code"},"Negate exit code"),(0,o.kt)("p",null,"To negate the exit code, add an exclamation point and space before a command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# change the exit code from 1 to 0\n! deno eval 'Deno.exit(1);'\n")),(0,o.kt)("h3",{id:"redirects"},"Redirects"),(0,o.kt)("p",null,"Redirects provide a way to pipe stdout and/or stderr to a file."),(0,o.kt)("p",null,"For example, the following redirects ",(0,o.kt)("em",{parentName:"p"},"stdout")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"deno run main.ts")," to a file\ncalled ",(0,o.kt)("inlineCode",{parentName:"p"},"file.txt")," on the file system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run main.ts > file.txt\n")),(0,o.kt)("p",null,"To instead redirect ",(0,o.kt)("em",{parentName:"p"},"stderr"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"2>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run main.ts 2> file.txt\n")),(0,o.kt)("p",null,"To redirect both stdout ",(0,o.kt)("em",{parentName:"p"},"and")," stderr, use ",(0,o.kt)("inlineCode",{parentName:"p"},"&>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run main.ts &> file.txt\n")),(0,o.kt)("p",null,"To append to a file, instead of overwriting an existing one, use two right angle\nbrackets instead of one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run main.ts >> file.txt\n")),(0,o.kt)("p",null,"Suppressing either stdout, stderr, or both of a command is possible by\nredirecting to ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/null"),". This works in a cross platform way including on\nWindows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# suppress stdout\ndeno run main.ts > /dev/null\n# suppress stderr\ndeno run main.ts 2> /dev/null\n# suppress both stdout and stderr\ndeno run main.ts &> /dev/null\n")),(0,o.kt)("p",null,"Note that redirecting input and multiple redirects are currently not supported."),(0,o.kt)("h3",{id:"glob-expansion"},"Glob expansion"),(0,o.kt)("p",null,"Glob expansion is supported in Deno 1.34 and above. This allows for specifying\nglobs to match files in a cross platform way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# match .ts files in the current and descendant directories\necho **/*.ts\n# match .ts files in the current directory\necho *.ts\n# match files that start with "data", have a single number, then end with .csv\necho data[0-9].csv\n')),(0,o.kt)("p",null,"The supported glob characters are ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"?"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"["),"/",(0,o.kt)("inlineCode",{parentName:"p"},"]"),"."),(0,o.kt)("h2",{id:"built-in-commands"},"Built-in commands"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deno task")," ships with several built-in commands that work the same out of the\nbox on Windows, Mac, and Linux."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/cp.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"cp"))," - Copies files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/mv.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"mv"))," - Moves files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/rm.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"rm"))," - Remove files or\ndirectories.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ex: ",(0,o.kt)("inlineCode",{parentName:"li"},"rm -rf [FILE]...")," - Commonly used to recursively delete files or\ndirectories."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/mkdir.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"mkdir"))," - Makes\ndirectories.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"mkdir -p DIRECTORY...")," - Commonly used to make a directory and all its\nparents with no error if it exists."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/pwd.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"pwd"))," - Prints the name of\nthe current/working directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/sleep.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sleep"))," - Delays for a\nspecified amount of time.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ex. ",(0,o.kt)("inlineCode",{parentName:"li"},"sleep 1")," to sleep for 1 second, ",(0,o.kt)("inlineCode",{parentName:"li"},"sleep 0.5")," to sleep for half a second,\nor ",(0,o.kt)("inlineCode",{parentName:"li"},"sleep 1m")," to sleep a minute"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/echo.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"echo"))," - Displays a line\nof text."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/cat.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"cat"))," - Concatenates files\nand outputs them on stdout. When no arguments are provided it reads and\noutputs stdin."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/exit.1p.html"},(0,o.kt)("inlineCode",{parentName:"a"},"exit"))," - Causes the\nshell to exit."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/head.1.html"},(0,o.kt)("inlineCode",{parentName:"a"},"head"))," - Output the first\npart of a file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/unset.1p.html"},(0,o.kt)("inlineCode",{parentName:"a"},"unset"))," - Unsets\nenvironment variables."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man1/xargs.1p.html"},(0,o.kt)("inlineCode",{parentName:"a"},"xargs"))," - Builds\narguments from stdin and executes a command.")),(0,o.kt)("p",null,"If you find a useful flag missing on a command or have any suggestions for\nadditional commands that should be supported out of the box, then please\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno_task_shell/issues"},"open an issue")," on the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno_task_shell/"},"deno_task_shell")," repo."),(0,o.kt)("p",null,"Note that if you wish to execute any of these commands in a non-cross platform\nway on Mac or Linux, then you may do so by running it through ",(0,o.kt)("inlineCode",{parentName:"p"},"sh"),":\n",(0,o.kt)("inlineCode",{parentName:"p"},"sh -c <command>")," (ex. ",(0,o.kt)("inlineCode",{parentName:"p"},"sh -c cp source destination"),")."),(0,o.kt)("h2",{id:"packagejson-support"},"package.json support"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deno task")," falls back to reading from the ",(0,o.kt)("inlineCode",{parentName:"p"},'"scripts"')," entries in a package.json\nfile if it is discovered. Note that Deno does not respect or support any npm\nlife cycle events like ",(0,o.kt)("inlineCode",{parentName:"p"},"preinstall")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"postinstall"),"\u2014you must explicitly run the\nscript entries you want to run (ex.\n",(0,o.kt)("inlineCode",{parentName:"p"},"deno cache main.ts && deno task postinstall"),")."))}u.isMDXComponent=!0}}]);