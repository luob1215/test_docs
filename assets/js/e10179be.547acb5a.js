"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={},l="Set Up Your Environment",r={unversionedId:"manual/getting_started/setup_your_environment",id:"manual/getting_started/setup_your_environment",title:"Set Up Your Environment",description:"The Deno CLI contains a lot of the tools that are commonly needed for developing",source:"@site/runtime/manual/getting_started/setup_your_environment.md",sourceDirName:"manual/getting_started",slug:"/manual/getting_started/setup_your_environment",permalink:"/runtime/manual/getting_started/setup_your_environment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"First Steps",permalink:"/runtime/manual/getting_started/first_steps"},next:{title:"Command Line Interface",permalink:"/runtime/manual/getting_started/command_line_interface"}},s={},p=[{value:"Using an editor/IDE",id:"using-an-editoride",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"JetBrains IDEs",id:"jetbrains-ides",level:3},{value:"Vim/Neovim via plugins",id:"vimneovim-via-plugins",level:3},{value:"Neovim 0.6+ using the built-in language server",id:"neovim-06-using-the-built-in-language-server",level:3},{value:"coc.nvim",id:"cocnvim",level:4},{value:"ALE",id:"ale",level:4},{value:"Vim-EasyComplete",id:"vim-easycomplete",level:4},{value:"Emacs",id:"emacs",level:3},{value:"lsp-mode",id:"lsp-mode",level:4},{value:"eglot",id:"eglot",level:4},{value:"Pulsar",id:"pulsar",level:3},{value:"Sublime Text",id:"sublime-text",level:3},{value:"Nova",id:"nova",level:3},{value:"GitHub Codespaces",id:"github-codespaces",level:3},{value:"Kakoune",id:"kakoune",level:3},{value:"Shell completions",id:"shell-completions",level:2},{value:"bash example",id:"bash-example",level:3},{value:"PowerShell example",id:"powershell-example",level:3},{value:"zsh example",id:"zsh-example",level:3},{value:"zsh example with ohmyzsh and antigen",id:"zsh-example-with-ohmyzsh-and-antigen",level:3},{value:"fish example",id:"fish-example",level:3},{value:"Environment variables",id:"environment-variables",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-your-environment"},"Set Up Your Environment"),(0,o.kt)("p",null,"The Deno CLI contains a lot of the tools that are commonly needed for developing\napplications, including a full language server to help power your IDE of choice.\n",(0,o.kt)("a",{parentName:"p",href:"/runtime/manual/getting_started/installation"},"Installing")," is all you need to do to make these\n",(0,o.kt)("a",{parentName:"p",href:"/runtime/manual/getting_started/command_line_interface"},"tools")," available to you."),(0,o.kt)("p",null,"Outside using Deno with your favorite IDE, this section also documents\n",(0,o.kt)("a",{parentName:"p",href:"#shell-completions"},"shell completions")," and\n",(0,o.kt)("a",{parentName:"p",href:"#environment-variables"},"environment variables"),"."),(0,o.kt)("h2",{id:"using-an-editoride"},"Using an editor/IDE"),(0,o.kt)("p",null,"There is broad support for Deno in editors/IDEs. The following sections provide\ninformation about how to use Deno with editors. Most editors integrate directly\ninto Deno using the Language Server Protocol and the language server that is\nintegrated into the Deno CLI."),(0,o.kt)("p",null,"If you are trying to write or support a community integration to the Deno\nlanguage server, there is some\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/tree/main/cli/lsp#deno-language-server"},"documentation"),"\nlocated in the Deno CLI code repository, but also feel free to join the\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/deno"},"Discord community")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#dev-lsp")," channel."),(0,o.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,o.kt)("p",null,"There is an official extension for\n",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," called\n",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno"},"vscode_deno"),".\nWhen installed, it will connect to the language server built into the Deno CLI."),(0,o.kt)("p",null,"Because most people work in mixed environments, the extension does not enable a\nworkspace as ",(0,o.kt)("em",{parentName:"p"},"Deno enabled")," by default, and it requires that the ",(0,o.kt)("inlineCode",{parentName:"p"},'"deno.enable"'),"\nflag to be set. You can change the settings yourself, or you can choose\n",(0,o.kt)("inlineCode",{parentName:"p"},"Deno: Initialize Workspace Configuration")," from the command palette to enable\nyour project."),(0,o.kt)("p",null,"More information can be found in the\n",(0,o.kt)("a",{parentName:"p",href:"/runtime/manual/references/vscode_deno/"},"Using Visual Studio Code")," section of the\nmanual."),(0,o.kt)("h3",{id:"jetbrains-ides"},"JetBrains IDEs"),(0,o.kt)("p",null,"You can get support for Deno in WebStorm and other\n",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/products/#type=ide"},"JetBrains IDEs"),", including\nPhpStorm, IntelliJ IDEA Ultimate, and PyCharm Professional. For this, install\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/14382-deno"},"official Deno plugin")," from\n",(0,o.kt)("em",{parentName:"p"},"Preferences / Settings | Plugins - Marketplace"),"."),(0,o.kt)("p",null,"Check out\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.jetbrains.com/webstorm/2020/06/deno-support-in-jetbrains-ides/"},"this blog post"),"\nto learn more about how to get started with Deno."),(0,o.kt)("h3",{id:"vimneovim-via-plugins"},"Vim/Neovim via plugins"),(0,o.kt)("p",null,"Deno is well-supported on both ",(0,o.kt)("a",{parentName:"p",href:"https://www.vim.org/"},"Vim")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://neovim.io/"},"Neovim")," via\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neoclide/coc.nvim"},"coc.nvim"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jayli/vim-easycomplete"},"vim-easycomplete")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dense-analysis/ale"},"ALE"),". coc.nvim offers plugins to\nintegrate to the Deno language server while ALE supports it ",(0,o.kt)("em",{parentName:"p"},"out of the box"),"."),(0,o.kt)("h3",{id:"neovim-06-using-the-built-in-language-server"},"Neovim 0.6+ using the built-in language server"),(0,o.kt)("p",null,"To use the Deno language server install\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neovim/nvim-lspconfig/"},"nvim-lspconfig")," and follow the\ninstructions to enable the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#denols"},"supplied Deno configuration"),"."),(0,o.kt)("p",null,"Note that if you also have ",(0,o.kt)("inlineCode",{parentName:"p"},"tsserver")," as an LSP client, you may run into issues\nwhere both ",(0,o.kt)("inlineCode",{parentName:"p"},"tsserver")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"denols")," are attached to your current buffer. To\nresolve this, make sure to set some unique ",(0,o.kt)("inlineCode",{parentName:"p"},"root_dir")," for both ",(0,o.kt)("inlineCode",{parentName:"p"},"tsserver")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"denols"),". You may also need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"single_file_support")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," for\n",(0,o.kt)("inlineCode",{parentName:"p"},"tsserver")," to prevent it from running in ",(0,o.kt)("inlineCode",{parentName:"p"},"single file mode"),". Here is an example\nof such a configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local nvim_lsp = require(\'lspconfig\')\nnvim_lsp.denols.setup {\n  on_attach = on_attach,\n  root_dir = nvim_lsp.util.root_pattern("deno.json", "deno.jsonc"),\n}\n\nnvim_lsp.tsserver.setup {\n  on_attach = on_attach,\n  root_dir = nvim_lsp.util.root_pattern("package.json"),\n  single_file_support = false\n}\n')),(0,o.kt)("p",null,"For Deno, the example above assumes a ",(0,o.kt)("inlineCode",{parentName:"p"},"deno.json")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"deno.jsonc")," file exists at\nthe root of the project."),(0,o.kt)("h4",{id:"cocnvim"},"coc.nvim"),(0,o.kt)("p",null,"Once you have\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/neoclide/coc.nvim/wiki/Install-coc.nvim"},"coc.nvim"),"\ninstalled, you need to install the required\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fannheyward/coc-deno"},"coc-deno")," via ",(0,o.kt)("inlineCode",{parentName:"p"},":CocInstall coc-deno"),"."),(0,o.kt)("p",null,"Once the plugin is installed, and you want to enable Deno for a workspace, run\nthe command ",(0,o.kt)("inlineCode",{parentName:"p"},":CocCommand deno.initializeWorkspace")," and you should be able to\nutilize commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"gd")," (goto definition) and ",(0,o.kt)("inlineCode",{parentName:"p"},"gr")," (go/find references)."),(0,o.kt)("h4",{id:"ale"},"ALE"),(0,o.kt)("p",null,"ALE supports Deno via the Deno language server out of the box and in many uses\ncases doesn't require additional configuration. Once you have\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dense-analysis/ale#installation"},"ALE installed")," you can\nperform the command\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dense-analysis/ale/blob/master/doc/ale-typescript.txt"},(0,o.kt)("inlineCode",{parentName:"a"},":help ale-typescript-deno")),"\nto get information on the configuration options available."),(0,o.kt)("p",null,"For more information on how to setup ALE (like key bindings) refer to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dense-analysis/ale#usage"},"official documentation"),"."),(0,o.kt)("h4",{id:"vim-easycomplete"},"Vim-EasyComplete"),(0,o.kt)("p",null,"Vim-EasyComplete supports Deno without any other configuration. Once you have\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jayli/vim-easycomplete#installation"},"vim-easycomplete installed"),",\nyou need install deno via ",(0,o.kt)("inlineCode",{parentName:"p"},":InstallLspServer deno")," if you haven't installed\ndeno. You can get more information from\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jayli/vim-easycomplete"},"official documentation"),"."),(0,o.kt)("h3",{id:"emacs"},"Emacs"),(0,o.kt)("h4",{id:"lsp-mode"},"lsp-mode"),(0,o.kt)("p",null,"Emacs supports Deno via the Deno language server using\n",(0,o.kt)("a",{parentName:"p",href:"https://emacs-lsp.github.io/lsp-mode/"},"lsp-mode"),". Once\n",(0,o.kt)("a",{parentName:"p",href:"https://emacs-lsp.github.io/lsp-mode/page/installation/"},"lsp-mode is installed"),"\nit should support Deno, which can be\n",(0,o.kt)("a",{parentName:"p",href:"https://emacs-lsp.github.io/lsp-mode/page/lsp-deno/"},"configured")," to support\nvarious settings."),(0,o.kt)("h4",{id:"eglot"},"eglot"),(0,o.kt)("p",null,"You can also use built-in Deno language server by using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/joaotavora/eglot"},(0,o.kt)("inlineCode",{parentName:"a"},"eglot")),"."),(0,o.kt)("p",null,"An example configuration for Deno via eglot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-elisp"},'(add-to-list \'eglot-server-programs \'((js-mode typescript-mode) . (eglot-deno "deno" "lsp")))\n\n  (defclass eglot-deno (eglot-lsp-server) ()\n    :documentation "A custom class for deno lsp.")\n\n  (cl-defmethod eglot-initialization-options ((server eglot-deno))\n    "Passes through required deno initialization options"\n    (list :enable t\n    :lint t))\n')),(0,o.kt)("h3",{id:"pulsar"},"Pulsar"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://pulsar-edit.dev/"},"Pulsar editor, formerly known as Atom")," supports\nintegrating with the Deno language server via the\n",(0,o.kt)("a",{parentName:"p",href:"https://web.pulsar-edit.dev/packages/atom-ide-deno"},"atom-ide-deno")," package.\n",(0,o.kt)("inlineCode",{parentName:"p"},"atom-ide-deno")," requires that the Deno CLI be installed and the\n",(0,o.kt)("a",{parentName:"p",href:"https://web.pulsar-edit.dev/packages/atom-ide-base"},"atom-ide-base")," package to\nbe installed as well."),(0,o.kt)("h3",{id:"sublime-text"},"Sublime Text"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.sublimetext.com/"},"Sublime Text")," supports connecting to the Deno\nlanguage server via the ",(0,o.kt)("a",{parentName:"p",href:"https://packagecontrol.io/packages/LSP"},"LSP package"),".\nYou may also want to install the\n",(0,o.kt)("a",{parentName:"p",href:"https://packagecontrol.io/packages/TypeScript"},"TypeScript package")," to get full\nsyntax highlighting."),(0,o.kt)("p",null,"Once you have the LSP package installed, you will want to add configuration to\nyour ",(0,o.kt)("inlineCode",{parentName:"p"},".sublime-project")," configuration like the below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "settings": {\n    "LSP": {\n      "deno": {\n        "command": ["deno", "lsp"],\n        "initializationOptions": {\n          // "config": "", // Sets the path for the config file in your project\n          "enable": true,\n          // "importMap": "", // Sets the path for the import-map in your project\n          "lint": true,\n          "unstable": false\n        },\n        "enabled": true,\n        "languages": [\n          {\n            "languageId": "javascript",\n            "scopes": ["source.js"],\n            "syntaxes": [\n              "Packages/Babel/JavaScript (Babel).sublime-syntax",\n              "Packages/JavaScript/JavaScript.sublime-syntax"\n            ]\n          },\n          {\n            "languageId": "javascriptreact",\n            "scopes": ["source.jsx"],\n            "syntaxes": [\n              "Packages/Babel/JavaScript (Babel).sublime-syntax",\n              "Packages/JavaScript/JavaScript.sublime-syntax"\n            ]\n          },\n          {\n            "languageId": "typescript",\n            "scopes": ["source.ts"],\n            "syntaxes": [\n              "Packages/TypeScript-TmLanguage/TypeScript.tmLanguage",\n              "Packages/TypeScript Syntax/TypeScript.tmLanguage"\n            ]\n          },\n          {\n            "languageId": "typescriptreact",\n            "scopes": ["source.tsx"],\n            "syntaxes": [\n              "Packages/TypeScript-TmLanguage/TypeScriptReact.tmLanguage",\n              "Packages/TypeScript Syntax/TypeScriptReact.tmLanguage"\n            ]\n          }\n        ]\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"nova"},"Nova"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://nova.app"},"Nova editor")," can integrate the Deno language server via\nthe\n",(0,o.kt)("a",{parentName:"p",href:"https://extensions.panic.com/extensions/jaydenseric/jaydenseric.deno"},"Deno extension"),"."),(0,o.kt)("h3",{id:"github-codespaces"},"GitHub Codespaces"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/features/codespaces"},"GitHub Codespaces")," allows you to\ndevelop fully online or remotely on your local machine without needing to\nconfigure or install Deno. It is currently in early access."),(0,o.kt)("p",null,"If a project is a Deno enabled project and contains the ",(0,o.kt)("inlineCode",{parentName:"p"},".devcontainer"),'\nconfiguration as part of the repository, opening the project in GitHub\nCodespaces should just "work". If you are starting a new project, or you want to\nadd Deno support to an existing code space, it can be added by selecting the\n',(0,o.kt)("inlineCode",{parentName:"p"},"Codespaces: Add Development Container Configuration Files...")," from the command\npallet and then selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"Show All Definitions...")," and then searching for the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Deno")," definition."),(0,o.kt)("p",null,"Once selected, you will need to rebuild your container so that the Deno CLI is\nadded to the container. After the container is rebuilt, the code space will\nsupport Deno."),(0,o.kt)("h3",{id:"kakoune"},"Kakoune"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://kakoune.org/"},"Kakoune")," supports connecting to the Deno language server\nvia the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kak-lsp/kak-lsp"},"kak-lsp")," client. Once\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kak-lsp/kak-lsp#installation"},"kak-lsp is installed")," an\nexample of configuring it up to connect to the Deno language server is by adding\nthe following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"kak-lsp.toml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[language.typescript]\nfiletypes = ["typescript", "javascript"]\nroots = [".git"]\ncommand = "deno"\nargs = ["lsp"]\n[language.typescript.settings.deno]\nenable = true\nlint = true\n')),(0,o.kt)("h2",{id:"shell-completions"},"Shell completions"),(0,o.kt)("p",null,"Built into the Deno CLI is support to generate shell completion information for\nthe CLI itself. By using ",(0,o.kt)("inlineCode",{parentName:"p"},"deno completions <shell>"),", the Deno CLI will output to\nstdout the completions. Current shells that are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"bash"),(0,o.kt)("li",{parentName:"ul"},"elvish"),(0,o.kt)("li",{parentName:"ul"},"fish"),(0,o.kt)("li",{parentName:"ul"},"powershell"),(0,o.kt)("li",{parentName:"ul"},"zsh")),(0,o.kt)("h3",{id:"bash-example"},"bash example"),(0,o.kt)("p",null,"Output the completions and add them to the environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> deno completions bash > /usr/local/etc/bash_completion.d/deno.bash\n> source /usr/local/etc/bash_completion.d/deno.bash\n")),(0,o.kt)("h3",{id:"powershell-example"},"PowerShell example"),(0,o.kt)("p",null,"Output the completions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> deno completions powershell >> $profile\n> .$profile\n")),(0,o.kt)("p",null,"This will create a Powershell profile at\n",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME\\Documents\\WindowsPowerShell\\Microsoft.PowerShell_profile.ps1"),", and it\nwill be run whenever you launch the PowerShell."),(0,o.kt)("h3",{id:"zsh-example"},"zsh example"),(0,o.kt)("p",null,"You should have a directory where the completions can be saved:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> mkdir ~/.zsh\n")),(0,o.kt)("p",null,"Then output the completions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> deno completions zsh > ~/.zsh/_deno\n")),(0,o.kt)("p",null,"And ensure the completions get loaded in your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fpath=(~/.zsh $fpath)\nautoload -Uz compinit\ncompinit -u\n")),(0,o.kt)("p",null,"If after reloading your shell and completions are still not loading, you may\nneed to remove ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.zcompdump/")," to remove previously generated completions and\nthen ",(0,o.kt)("inlineCode",{parentName:"p"},"compinit")," to generate them again."),(0,o.kt)("h3",{id:"zsh-example-with-ohmyzsh-and-antigen"},"zsh example with ohmyzsh and antigen"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ohmyzsh/ohmyzsh"},"ohmyzsh")," is a configuration framework for\nzsh and can make it easier to manage your shell configuration.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/zsh-users/antigen"},"antigen")," is a plugin manager for zsh."),(0,o.kt)("p",null,"Create the directory to store the completions and output the completions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> mkdir ~/.oh-my-zsh/custom/plugins/deno\n> deno completions zsh > ~/.oh-my-zsh/custom/plugins/deno/_deno\n")),(0,o.kt)("p",null,"Then your ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc")," might look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"source /path-to-antigen/antigen.zsh\n\n# Load the oh-my-zsh's library.\nantigen use oh-my-zsh\n\nantigen bundle deno\n")),(0,o.kt)("h3",{id:"fish-example"},"fish example"),(0,o.kt)("p",null,"Output the completions to a ",(0,o.kt)("inlineCode",{parentName:"p"},"deno.fish")," file into the completions directory in\nthe fish config folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> deno completions fish > ~/.config/fish/completions/deno.fish\n")),(0,o.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"There are several environment variables which can impact the behavior of Deno:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_AUTH_TOKENS")," - a list of authorization tokens which can be used to allow\nDeno to access remote private code. See the\n",(0,o.kt)("a",{parentName:"li",href:"/runtime/manual/basics/modules/private"},"Private modules and repositories")," section for\nmore details."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_TLS_CA_STORE")," - a list of certificate stores which will be used when\nestablishing TLS connections. The available stores are ",(0,o.kt)("inlineCode",{parentName:"li"},"mozilla")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"system"),".\nYou can specify one, both or none. Certificate chains attempt to resolve in\nthe same order in which you specify them. The default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"mozilla"),". The\n",(0,o.kt)("inlineCode",{parentName:"li"},"mozilla")," store will use the bundled Mozilla certs provided by\n",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/webpki-roots"},(0,o.kt)("inlineCode",{parentName:"a"},"webpki-roots")),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"system")," store\nwill use your platform's\n",(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/rustls-native-certs"},"native certificate store"),". The\nexact set of Mozilla certs will depend on the version of Deno you are using.\nIf you specify no certificate stores, then no trust will be given to any TLS\nconnection without also specifying ",(0,o.kt)("inlineCode",{parentName:"li"},"DENO_CERT")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"--cert")," or specifying a\nspecific certificate per TLS connection."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_CERT"),' - load a certificate authority from a PEM encoded file. This\n"overrides" the ',(0,o.kt)("inlineCode",{parentName:"li"},"--cert")," option. See the\n",(0,o.kt)("a",{parentName:"li",href:"/runtime/manual/basics/modules/proxies"},"Proxies")," section for more information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_DIR")," - this will set the directory where cached information from the CLI\nis stored. This includes items like cached remote modules, cached transpiled\nmodules, language server cache information and persisted data from local\nstorage. This defaults to the operating system's default cache location and\nthen under the ",(0,o.kt)("inlineCode",{parentName:"li"},"deno")," path."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_INSTALL_ROOT")," - When using ",(0,o.kt)("inlineCode",{parentName:"li"},"deno install")," where the installed scripts\nare stored. This defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.deno/bin"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_NO_PACKAGE_JSON")," - Set to disable auto-resolution of package.json files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_NO_PROMPT")," - Set to disable permission prompts on access (alternative to\npassing ",(0,o.kt)("inlineCode",{parentName:"li"},"--no-prompt")," on invocation)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_NO_UPDATE_CHECK")," - Set to disable checking if a newer Deno version is\navailable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DENO_WEBGPU_TRACE")," - The directory to use for WebGPU traces."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY")," - The proxy address to use for HTTP requests. See the\n",(0,o.kt)("a",{parentName:"li",href:"/runtime/manual/basics/modules/proxies"},"Proxies")," section for more information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HTTPS_PROXY")," - The proxy address to use for HTTPS requests. See the\n",(0,o.kt)("a",{parentName:"li",href:"/runtime/manual/basics/modules/proxies"},"Proxies")," section for more information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NO_COLOR")," - If set, this will prevent the Deno CLI from sending ANSI color\ncodes when writing to stdout and stderr. See the website\n",(0,o.kt)("a",{parentName:"li",href:"https://no-color.org/"},"https://no-color.org/")," for more information on this ",(0,o.kt)("em",{parentName:"li"},"de facto")," standard. The\nvalue of this flag can be accessed at runtime without permission to read the\nenvironment variables by checking the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"Deno.noColor"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NO_PROXY")," - Indicates hosts which should bypass the proxy set in the other\nenvironment variables. See the ",(0,o.kt)("a",{parentName:"li",href:"/runtime/manual/basics/modules/proxies"},"Proxies")," section\nfor more information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NPM_CONFIG_REGISTRY")," - The npm registry to use when loading modules via\n",(0,o.kt)("a",{parentName:"li",href:"/runtime/manual/node/npm_specifiers"},"npm specifiers"))))}c.isMDXComponent=!0}}]);