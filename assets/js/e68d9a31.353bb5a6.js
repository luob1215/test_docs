"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6517],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=o,k=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},20647:(e,t,a)=>{a.d(t,{ZP:()=>i});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Deno KV is currently in beta",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Deno KV and related cloud primitive APIs like queues and cron are currently\n",(0,o.kt)("strong",{parentName:"p"},"experimental")," and ",(0,o.kt)("strong",{parentName:"p"},"subject to change"),". While we do our best to ensure data\ndurability, data loss is possible, especially around Deno updates."),(0,o.kt)("p",{parentName:"admonition"},"Deno programs that use KV require the ",(0,o.kt)("inlineCode",{parentName:"p"},"--unstable")," flag when launching the\nprogram, as shown below:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"deno run -A --unstable my_kv_code.ts\n"))))}i.isMDXComponent=!0},52353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var n=a(87462),o=(a(67294),a(3905)),r=a(20647);const l=a.p+"assets/images/backup-add-bucket-to-dash-005af753196facd9cc1318325aed750d.png";a.p;var i=a(74866),c=a(85162);const u={},s="Backups",p={unversionedId:"manual/backup",id:"manual/backup",title:"Backups",description:"KV databases hosted on Deno Deploy can be continuously backed up to your own S3-compatible storage buckets. This is in",source:"@site/kv/manual/backup.mdx",sourceDirName:"manual",slug:"/manual/backup",permalink:"/kv/manual/backup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kvGuideHome",previous:{title:"KV on Deno Deploy",permalink:"/kv/manual/on_deploy"}},m={},d=[{value:"Configuring backup to Amazon S3",id:"configuring-backup-to-amazon-s3",level:2},{value:"Configuring backup to Google Cloud Storage",id:"configuring-backup-to-google-cloud-storage",level:2},{value:"Using backups",id:"using-backups",level:2}],k={toc:d},h="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backups"},"Backups"),(0,o.kt)(r.ZP,{mdxType:"Admonition"}),(0,o.kt)("p",null,"KV databases hosted on Deno Deploy can be continuously backed up to your own S3-compatible storage buckets. This is in\naddition to the replication and backups that we internally perform for all data stored in hosted Deno KV databases to ensure\nhigh availability and data durability."),(0,o.kt)("p",null,"This backup happens continuously with very little lag, enabling ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Point-in-time_recovery"},"point-in-time-recovery")),"\nand live replication. Enabling backup for KV databases unlocks various interesting use-cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Retrieving a consistent snapshot of your data at any point in time in the past"),(0,o.kt)("li",{parentName:"ul"},"Running a read-only data replica independent of Deno Deploy"),(0,o.kt)("li",{parentName:"ul"},"Pushing data into your favorite data pipeline by piping mutations into streaming platforms and analytical databases like Kafka, BigQuery and ClickHouse")),(0,o.kt)("h2",{id:"configuring-backup-to-amazon-s3"},"Configuring backup to Amazon S3"),(0,o.kt)("p",null,"First you must create a bucket on AWS:"),(0,o.kt)(i.Z,{groupId:"aws-tool",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"console",label:"AWS Console",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://s3.console.aws.amazon.com/s3/home"},"AWS S3 console")),(0,o.kt)("li",{parentName:"ol"},'Click "Create bucket"'),(0,o.kt)("li",{parentName:"ol"},'Enter a bucket name and choose a AWS region, then scroll down and click "Next"'))),(0,o.kt)(c.Z,{value:"cli",label:"AWS CLI",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS CLI")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"aws s3api create-bucket --bucket <bucket-name> --region <region> --create-bucket-configuration LocationConstraint=<region>")," (replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<bucket-name>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<region>")," with your own values)")))),(0,o.kt)("p",null,"Then, create an IAM policy with ",(0,o.kt)("inlineCode",{parentName:"p"},"PutObject")," access to the bucket, attach it to\nan IAM user, and create access keys for that user:"),(0,o.kt)(i.Z,{groupId:"aws-tool",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"console",label:"AWS Console",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/home"},"AWS IAM console")),(0,o.kt)("li",{parentName:"ol"},'Click "Policies" in the left sidebar'),(0,o.kt)("li",{parentName:"ol"},'Click on "Create policy"'),(0,o.kt)("li",{parentName:"ol"},'Select the "JSON" the policy editor and paste the following policy:',(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Sid": "KVBackup",\n      "Effect": "Allow",\n      "Action": "s3:PutObject",\n      "Resource": "arn:aws:s3:::<bucket-name>/*"\n    }\n  ]\n}\n')),"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<bucket-name>")," with the name of the bucket you created earlier."),(0,o.kt)("li",{parentName:"ol"},'Click "Review policy"'),(0,o.kt)("li",{parentName:"ol"},'Enter a name for the policy and click "Create policy"'),(0,o.kt)("li",{parentName:"ol"},'Click "Users" in the left sidebar'),(0,o.kt)("li",{parentName:"ol"},'Click "Add user"'),(0,o.kt)("li",{parentName:"ol"},'Enter a name for the user and click "Next"'),(0,o.kt)("li",{parentName:"ol"},'Click "Attach policies directly"'),(0,o.kt)("li",{parentName:"ol"},"Search for the policy you created earlier and click the checkbox next to it"),(0,o.kt)("li",{parentName:"ol"},'Click "Next"'),(0,o.kt)("li",{parentName:"ol"},'Click "Create user"'),(0,o.kt)("li",{parentName:"ol"},"Click on the user you just created"),(0,o.kt)("li",{parentName:"ol"},'Click "Security credentials" and then "Create access key"'),(0,o.kt)("li",{parentName:"ol"},'Select "Other", then click "Next"'),(0,o.kt)("li",{parentName:"ol"},'Enter a description for the access key and click "Create access key"'),(0,o.kt)("li",{parentName:"ol"},"Copy the access key ID and secret access key and save them somewhere safe.\nYou will need them later, and you will not be able to retrieve them again."))),(0,o.kt)(c.Z,{value:"cli",label:"AWS CLI",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the following command to your terminal, and replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<bucket-name>")," with\nthe name of the bucket you created earlier, then run it:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'aws iam create-policy --policy-name <policy-name> --policy-document \'{"Version":"2012-10-17","Statement":[{"Sid":"KVBackup","Effect":"Allow","Action":"s3:PutObject","Resource":"arn:aws:s3:::<bucket-name>/*"}]}\'\n'))),(0,o.kt)("li",{parentName:"ol"},"Copy the following command to your terminal, and replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<user-name>")," with\na name for the user you are creating, then run it:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"aws iam create-user --user-name <user-name>\n"))),(0,o.kt)("li",{parentName:"ol"},"Copy the following command to your terminal, and replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<policy-arn>")," with\nthe ARN of the policy you created in step 1, and ",(0,o.kt)("inlineCode",{parentName:"li"},"<user-name>")," with\nthe name of the user you created in the previous step, then run it:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"aws iam attach-user-policy --policy-arn <policy-arn> --user-name <user-name>\n"))),(0,o.kt)("li",{parentName:"ol"},"Copy the following command to your terminal, and replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<user-name>")," with\nthe name of the user you created in step 2, then run it:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"aws iam create-access-key --user-name <user-name>\n"))),(0,o.kt)("li",{parentName:"ol"},"Copy the access key ID and secret access key and save them somewhere safe.\nYou will need them later, and you will not be able to retrieve them again.")))),(0,o.kt)("p",null,"Now visit the ",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com"},"Deno Deploy dashboard"),', and click on the\n"KV" tab in your project. Scroll to the "Backup" section, and click on "AWS S3".\nEnter the bucket name, access key ID, and secret access key you created earlier,\nand the region the bucket is in. Then click "Save".'),(0,o.kt)("img",{src:l,alt:"add backup to dashboard",style:{height:"500px"}}),(0,o.kt)("p",null,'The backup will start immediately. Once the data has been backed up, and\ncontinous backup is active, you will see the status change to "Active".'),(0,o.kt)("h2",{id:"configuring-backup-to-google-cloud-storage"},"Configuring backup to Google Cloud Storage"),(0,o.kt)("p",null,"Google Cloud Storage (GCS) is compatible with the S3 protocol, and can also be\nused as a backup target."),(0,o.kt)("p",null,"First you must create a bucket on GCP:"),(0,o.kt)(i.Z,{groupId:"gcp-tool",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"console",label:"GCP Console",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/storage/browser"},"GCP Cloud Storage console")),(0,o.kt)("li",{parentName:"ol"},'Click on "Create" in the top bar'),(0,o.kt)("li",{parentName:"ol"},'Enter a bucket name, choose a location, and click "Create"'))),(0,o.kt)(c.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"gcloud CLI")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"gcloud storage buckets create <bucket-name> --location <location>")," (replace ",(0,o.kt)("inlineCode",{parentName:"li"},"<bucket-name>")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"<location>")," with your own values)")))),(0,o.kt)("p",null,"Then, create a service account with ",(0,o.kt)("inlineCode",{parentName:"p"},"Storage Object Admin")," access to the bucket,\nand create an HMAC access key for the service account:"),(0,o.kt)(i.Z,{groupId:"gcp-tool",mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"console",label:"GCP Console",default:!0,mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/iam"},"GCP IAM console")),(0,o.kt)("li",{parentName:"ol"},'Click on "Service accounts" in the left sidebar'),(0,o.kt)("li",{parentName:"ol"},'Click on "Create service account"'),(0,o.kt)("li",{parentName:"ol"},'Enter a name for the service account and click "Done"'),(0,o.kt)("li",{parentName:"ol"},"Copy the email for the service account you just created. You will need it\nlater."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/storage/browser"},"GCP Cloud Storage console")),(0,o.kt)("li",{parentName:"ol"},"Click on the bucket you created earlier"),(0,o.kt)("li",{parentName:"ol"},'Click on "Permissions" in the toolbar'),(0,o.kt)("li",{parentName:"ol"},'Click "Grant access"'),(0,o.kt)("li",{parentName:"ol"},'Paste the email for the service account you copied earlier into the "New\nprincipals" field'),(0,o.kt)("li",{parentName:"ol"},'Select "Storage Object Admin" from the "Select a role" dropdown'),(0,o.kt)("li",{parentName:"ol"},'Click "Save"'),(0,o.kt)("li",{parentName:"ol"},'Click on "Settings" in the left sidebar (still in the Cloud Storage console)'),(0,o.kt)("li",{parentName:"ol"},'Click on the "Interoperability" tab'),(0,o.kt)("li",{parentName:"ol"},'Click on "Create a key for a service account"'),(0,o.kt)("li",{parentName:"ol"},"Select the service account you created earlier"),(0,o.kt)("li",{parentName:"ol"},'Click "Create key"'),(0,o.kt)("li",{parentName:"ol"},"Copy the access key and secret access key and save them somewhere safe.\nYou will need them later, and you will not be able to retrieve them again."))),(0,o.kt)(c.Z,{value:"cli",label:"gcloud CLI",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the following command, replacing ",(0,o.kt)("inlineCode",{parentName:"li"},"<service-account-name>")," with a name for\nthe service account you are creating:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"gcloud iam service-accounts create <service-account-name>\n"))),(0,o.kt)("li",{parentName:"ol"},"Run the following command, replacing ",(0,o.kt)("inlineCode",{parentName:"li"},"<bucket-name>")," with the name of the\nbucket you created earlier, and ",(0,o.kt)("inlineCode",{parentName:"li"},"<service-account-email>")," with the email of\nthe service account you created in the previous step:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"gsutil iam ch serviceAccount:<service-account-email>:objectAdmin gs://<bucket-name>\n"))),(0,o.kt)("li",{parentName:"ol"},"Run the following command, replacing ",(0,o.kt)("inlineCode",{parentName:"li"},"<service-account-email>")," with the email\nof the service account you created in the previous step:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"gcloud storage hmac create <service-account-email>\n"))),(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"accessId")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"secret")," and save them somewhere safe. You will need\nthem later, and you will not be able to retrieve them again.")))),(0,o.kt)("p",null,"Now visit the ",(0,o.kt)("a",{parentName:"p",href:"https://dash.deno.com"},"Deno Deploy dashboard"),', and click on the\n"KV" tab in your project. Scroll to the "Backup" section, and click on "Google\nCloud Storage". Enter the bucket name, access key ID, and secret access key you\ncreated earlier, and the region the bucket is in. Then click "Save".'),(0,o.kt)("p",null,'The backup will start immediately. Once the data has been backed up, and\ncontinous backup is active, you will see the status change to "Active".'),(0,o.kt)("h2",{id:"using-backups"},"Using backups"),(0,o.kt)("p",null,"S3 backups can be used with the ",(0,o.kt)("inlineCode",{parentName:"p"},"denokv")," tool. Please refer to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/denoland/denokv"},"documentation")," for more details."))}b.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),o=a(67294),r=a(86010),l=a(12466),i=a(16550),c=a(91980),u=a(67392),s=a(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,u]=k({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,s.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=c??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var b=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:c,tabValues:u}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=s.indexOf(t),n=u[a].value;n!==i&&(p(t),c(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:m},l,{className:(0,r.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},o.createElement(f,(0,n.Z)({},e,t)),o.createElement(g,(0,n.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return o.createElement(N,(0,n.Z)({key:String(t)},e))}}}]);