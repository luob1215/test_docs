"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[7318],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(k,s(s({ref:n},u),{},{components:t})):a.createElement(k,s({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20647:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(87462),r=(t(67294),t(3905));const i={toc:[]},s="wrapper";function o(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Deno KV is currently in beta",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Deno KV and related cloud primitive APIs like queues and cron are currently\n",(0,r.kt)("strong",{parentName:"p"},"experimental")," and ",(0,r.kt)("strong",{parentName:"p"},"subject to change"),". While we do our best to ensure data\ndurability, data loss is possible, especially around Deno updates."),(0,r.kt)("p",{parentName:"admonition"},"Deno programs that use KV require the ",(0,r.kt)("inlineCode",{parentName:"p"},"--unstable")," flag when launching the\nprogram, as shown below:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"deno run -A --unstable my_kv_code.ts\n"))))}o.isMDXComponent=!0},41370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905)),i=t(20647);const s={},o="Key Space",l={unversionedId:"manual/key_space",id:"manual/key_space",title:"Key Space",description:"Deno KV is a key value store. The key space is a flat namespace of",source:"@site/kv/manual/key_space.mdx",sourceDirName:"manual",slug:"/manual/key_space",permalink:"/kv/manual/key_space",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kvGuideHome",previous:{title:"Deno KV Quick Start",permalink:"/kv/manual/"},next:{title:"Operations",permalink:"/kv/manual/operations"}},p={},u=[{value:"Keys",id:"keys",level:2},{value:"Key Part Ordering",id:"key-part-ordering",level:3},{value:"Key Examples",id:"key-examples",level:3},{value:"Universally Unique Lexicographically Sortable Identifiers (ULIDs)",id:"universally-unique-lexicographically-sortable-identifiers-ulids",level:3},{value:"Values",id:"values",level:2},{value:"<code>Deno.KvU64</code> type",id:"denokvu64-type",level:3},{value:"Value Examples",id:"value-examples",level:3},{value:"Versionstamp",id:"versionstamp",level:2}],c={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"key-space"},"Key Space"),(0,r.kt)(i.ZP,{mdxType:"Admonition"}),(0,r.kt)("p",null,"Deno KV is a key value store. The key space is a flat namespace of\nkey+value+versionstamp pairs. Keys are sequences of key parts, which allow\nmodeling of hierarchical data. Values are arbitrary JavaScript objects.\nVersionstamps represent when a value was inserted / modified."),(0,r.kt)("h2",{id:"keys"},"Keys"),(0,r.kt)("p",null,"Keys in Deno KV are sequences of key parts, which can be ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"s, ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),"s,\n",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"s, ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array"),"s, or ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint"),"s."),(0,r.kt)("p",null,"Using a sequence of parts, rather than a single string eliminates the\npossibility of delimiter injection attacks, because there is no visible\ndelimiter."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'A key injection attack occurs when an attacker manipulates the structure of a\nkey-value store by injecting delimiters used in the key encoding scheme into a\nuser controlled variable, leading to unintended behavior or unauthorized\naccess. For example, consider a key-value store using a slash (/) as a\ndelimiter, with keys like "user/alice/settings" and "user/bob/settings". An\nattacker could create a new user with the name "alice/settings/hacked" to form\nthe key "user/alice/settings/hacked/settings", injecting the delimiter and\nmanipulating the key structure. In Deno KV, the injection would result in the\nkey ',(0,r.kt)("inlineCode",{parentName:"p"},'["user", "alice/settings/hacked", "settings"]'),", which is not harmful.")),(0,r.kt)("p",null,"Between key parts, invisible delimiters are used to separate the parts. These\ndelimiters are never visible, but ensure that one part can not be confused with\nanother part. For example, the key parts ",(0,r.kt)("inlineCode",{parentName:"p"},'["abc", "def"]'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'["ab", "cdef"]'),",\n",(0,r.kt)("inlineCode",{parentName:"p"},'["abc", "", "def"]')," are all different keys."),(0,r.kt)("p",null,"Keys are case sensitive and are ordered lexicographically by their parts. The\nfirst part is the most significant, and the last part is the least significant.\nThe order of the parts is determined by both the type and the value of the part."),(0,r.kt)("h3",{id:"key-part-ordering"},"Key Part Ordering"),(0,r.kt)("p",null,"Key parts are ordered lexicographically by their type, and within a given type,\nthey are ordered by their value. The ordering of types is as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Uint8Array")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"bigint")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean"))),(0,r.kt)("p",null,"Within a given type, the ordering is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Uint8Array"),": byte ordering of the array"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": byte ordering of the UTF-8 encoding of the string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": -Infinity < -1.0 < -0.5 < -0.0 < 0.0 < 0.5 < 1.0 < Infinity <\nNaN"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bigint"),": mathematical ordering, largest negative number first, largest\npositive number last"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean"),": false < true")),(0,r.kt)("p",null,"This means that the part ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," (a number) is ordered before the part ",(0,r.kt)("inlineCode",{parentName:"p"},"2.0")," (also\na number), but is greater than the part ",(0,r.kt)("inlineCode",{parentName:"p"},"0n")," (a bigint), because ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," is a\nnumber and ",(0,r.kt)("inlineCode",{parentName:"p"},"0n")," is a bigint, and type ordering has precedence over the ordering\nof values within a type."),(0,r.kt)("h3",{id:"key-examples"},"Key Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'["users", 42, "profile"]; // User with ID 42\'s profile\n["posts", "2023-04-23", "comments"]; // Comments for all posts on 2023-04-23\n["products", "electronics", "smartphones", "apple"]; // Apple smartphones in the electronics category\n["orders", 1001, "shipping", "tracking"]; // Tracking information for order ID 1001\n["files", new Uint8Array([1, 2, 3]), "metadata"]; // Metadata for a file with Uint8Array identifier\n["projects", "openai", "tasks", 5]; // Task with ID 5 in the OpenAI project\n["events", "2023-03-31", "location", "san_francisco"]; // Events in San Francisco on 2023-03-31\n["invoices", 2023, "Q1", "summary"]; // Summary of Q1 invoices for 2023\n["teams", "engineering", "members", 1n]; // Member with ID 1n in the engineering team\n')),(0,r.kt)("h3",{id:"universally-unique-lexicographically-sortable-identifiers-ulids"},"Universally Unique Lexicographically Sortable Identifiers (ULIDs)"),(0,r.kt)("p",null,"Key part ordering allows keys consisting of timestamps and ID parts to be listed\nchronologically. Typically, you can generate a key using the following:\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now"},(0,r.kt)("inlineCode",{parentName:"a"},"Date.now()")),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID"},(0,r.kt)("inlineCode",{parentName:"a"},"crypto.randomUUID()")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function setUser(user) {\n  await kv.set(["users", Date.now(), crypto.randomUUID()], user);\n}\n')),(0,r.kt)("p",null,"Run multiple times sequentially, this produces the following keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'["users", 1691377037923, "8c72fa25-40ad-42ce-80b0-44f79bc7a09e"]; // First user\n["users", 1691377037924, "8063f20c-8c2e-425e-a5ab-d61e7a717765"]; // Second user\n["users", 1691377037925, "35310cea-58ba-4101-b09a-86232bf230b2"]; // Third user\n')),(0,r.kt)("p",null,"However, having the timestamp and ID represented within a single key part may be\nmore straightforward in some cases. You can use a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ulid/spec"},"Universally Unique Lexicographically Sortable Identifier (ULID)"),"\nto do this. This type of identifier encodes a UTC timestamp, is\nlexicographically sortable and is cryptographically random by default:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { ulid } from "https://deno.land/x/ulid/mod.ts";\n\nconst kv = await Deno.openKv();\n\nasync function setUser(user) {\n  await kv.set(["users", ulid()], user);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'["users", "01H76YTWK3YBV020S6MP69TBEQ"]; // First user\n["users", "01H76YTWK4V82VFET9YTYDQ0NY"]; // Second user\n["users", "01H76YTWK5DM1G9TFR0Y5SCZQV"]; // Third user\n')),(0,r.kt)("p",null,"Furthermore, you can generate ULIDs monotonically increasingly using a factory\nfunction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { monotonicFactory } from "https://deno.land/x/ulid/mod.ts";\n\nconst ulid = monotonicFactory();\n\nasync function setUser(user) {\n  await kv.set(["users", ulid()], user);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// Strict ordering for the same timestamp by incrementing the least-significant random bit by 1\n["users", "01H76YTWK3YBV020S6MP69TBEQ"]; // First user\n["users", "01H76YTWK3YBV020S6MP69TBER"]; // Second user\n["users", "01H76YTWK3YBV020S6MP69TBES"]; // Third user\n')),(0,r.kt)("h2",{id:"values"},"Values"),(0,r.kt)("p",null,"Values in Deno KV can be arbitrary JavaScript values that are compatible with\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm"},"structured clone algorithm"),". This includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"undefined")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bigint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Uint8Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Array")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Map")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Date")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RegExp"))),(0,r.kt)("p",null,"Objects and arrays can contain any of the above types, including other objects\nand arrays. ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"s can contain any of the above types, including\nother ",(0,r.kt)("inlineCode",{parentName:"p"},"Map"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),"s."),(0,r.kt)("p",null,"Circular references within values are supported."),(0,r.kt)("p",null,"Objects with a non-primitive prototype are not supported (such as class\ninstances or Web API objects). Functions and symbols can also not be serialized."),(0,r.kt)("h3",{id:"denokvu64-type"},(0,r.kt)("inlineCode",{parentName:"h3"},"Deno.KvU64")," type"),(0,r.kt)("p",null,"In addition to structured serializable values, the special value ",(0,r.kt)("inlineCode",{parentName:"p"},"Deno.KvU64")," is\nalso supported as a value. This object represents a 64-bit unsigned integer,\nrepresented as a bigint. It can be used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"min"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"max")," KV\noperations. It can not be stored within an object or array. It must be stored as\na top-level value."),(0,r.kt)("p",null,"It can be created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Deno.KvU64")," constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const u64 = new Deno.KvU64(42n);\n")),(0,r.kt)("h3",{id:"value-examples"},"Value Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js,ignore"},'undefined;\nnull;\ntrue;\nfalse;\n42;\n-42.5;\n42n;\n"hello";\nnew Uint8Array([1, 2, 3]);\n[1, 2, 3];\n{ a: 1, b: 2, c: 3 };\nnew Map([["a", 1], ["b", 2], ["c", 3]]);\nnew Set([1, 2, 3]);\nnew Date("2023-04-23");\n/abc/;\n\n// Circular references are supported\nconst a = {};\nconst b = { a };\na.b = b;\n\n// Deno.KvU64 is supported\nnew Deno.KvU64(42n);\n')),(0,r.kt)("h2",{id:"versionstamp"},"Versionstamp"),(0,r.kt)("p",null,"All data in the Deno KV key-space is versioned. Every time a value is inserted\nor modified, a versionstamp is assigned to it. Versionstamps are monotonically\nincreasing, non-sequential, 12 byte values that represent the time that the\nvalue was modified. Versionstamps do not represent real time, but rather the\norder in which the values were modified."),(0,r.kt)("p",null,"Because versionstamps are monotonically increasing, they can be used to\ndetermine whether a given value is newer or older than another value. This can\nbe done by comparing the versionstamps of the two values. If versionstamp A is\ngreater than versionstamp B, then value A was modified more recently than value\nB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'versionstampA > versionstampB;\n"000002fa526aaccb0000" > "000002fa526aacc90000"; // true\n')),(0,r.kt)("p",null,"All data modified by a single transaction are assigned the same versionstamp.\nThis means that if two ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," operations are performed in the same atomic\noperation, then the versionstamp of the new values will be the same."),(0,r.kt)("p",null,"Versionstamps are used to implement optimistic concurrency control. Atomic\noperations can contain checks that ensure that the versionstamp of the data they\nare operating on matches a versionstamp passed to the operation. If the\nversionstamp of the data is not the same as the versionstamp passed to the\noperation, then the transaction will fail and the operation will not be applied."))}m.isMDXComponent=!0}}]);