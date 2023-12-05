"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[424],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[m]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const o={},l="Deploy Deno to Amazon Lightsail",r={unversionedId:"manual/advanced/deploying_deno/aws_lightsail",id:"manual/advanced/deploying_deno/aws_lightsail",title:"Deploy Deno to Amazon Lightsail",description:"Amazon Lightsail is the easiest and",source:"@site/runtime/manual/advanced/deploying_deno/aws_lightsail.md",sourceDirName:"manual/advanced/deploying_deno",slug:"/manual/advanced/deploying_deno/aws_lightsail",permalink:"/runtime/manual/advanced/deploying_deno/aws_lightsail",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Run Deno in the Cloud",permalink:"/runtime/manual/advanced/deploying_deno/"},next:{title:"Deploying Deno to Cloudflare Workers",permalink:"/runtime/manual/advanced/deploying_deno/cloudflare_workers"}},s={},c=[{value:"Create Dockerfile and docker-compose.yml",id:"create-dockerfile-and-docker-composeyml",level:2},{value:"Build, Tag, and Push to Docker Hub",id:"build-tag-and-push-to-docker-hub",level:2},{value:"Create and Deploy to a Lightsail Container",id:"create-and-deploy-to-a-lightsail-container",level:2},{value:"Automate using GitHub Actions",id:"automate-using-github-actions",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...o}=e;return(0,i.kt)(m,(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-deno-to-amazon-lightsail"},"Deploy Deno to Amazon Lightsail"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lightsail/"},"Amazon Lightsail")," is the easiest and\ncheapest way to get started with Amazon Web Services. It allows you to host\nvirtual machines and even entire container services."),(0,i.kt)("p",null,"This How To guide will show you how to deploy a Deno app to Amazon Lightsail\nusing Docker, Docker Hub, and GitHub Actions."),(0,i.kt)("p",null,"Before continuing, make sure you have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/cli/"},(0,i.kt)("inlineCode",{parentName:"a"},"docker")," CLI")),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com"},"Docker Hub account")),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com"},"GitHub account")),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"AWS account"))),(0,i.kt)("h2",{id:"create-dockerfile-and-docker-composeyml"},"Create Dockerfile and docker-compose.yml"),(0,i.kt)("p",null,"To focus on the deployment, our app will simply be a ",(0,i.kt)("inlineCode",{parentName:"p"},"main.ts")," file that returns\na string as an HTTP response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { Application } from "https://deno.land/x/oak/mod.ts";\n\nconst app = new Application();\n\napp.use((ctx) => {\n  ctx.response.body = "Hello from Deno and AWS Lightsail!";\n});\n\nawait app.listen({ port: 8000 });\n')),(0,i.kt)("p",null,"Then, we'll create two files -- ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," -- to\nbuild the Docker image."),(0,i.kt)("p",null,"In our ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", let's add:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile,",metastring:"ignore",ignore:!0},'FROM denoland/deno\n\nEXPOSE 8000\n\nWORKDIR /app\n\nADD . /app\n\nRUN deno cache main.ts\n\nCMD ["run", "--allow-net", "main.ts"]\n')),(0,i.kt)("p",null,"Then, in our ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml,",metastring:"ignore",ignore:!0},"version: '3'\n\nservices:\n  web:\n    build: .\n    container_name: deno-container\n    image: deno-image\n    ports:\n      - \"8000:8000\"\n")),(0,i.kt)("p",null,"Let's test this locally by running ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose -f docker-compose.yml build"),",\nthen ",(0,i.kt)("inlineCode",{parentName:"p"},"docker compose up"),", and going to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8000"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"hello world from localhost",src:t(20940).Z,width:"1072",height:"577"})),(0,i.kt)("p",null,"It works!"),(0,i.kt)("h2",{id:"build-tag-and-push-to-docker-hub"},"Build, Tag, and Push to Docker Hub"),(0,i.kt)("p",null,"First, let's sign into ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repositories"},"Docker Hub")," and\ncreate a repository. Let's name it ",(0,i.kt)("inlineCode",{parentName:"p"},"deno-on-aws-lightsail"),"."),(0,i.kt)("p",null,"Then, let's tag and push our new image, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," with yours:"),(0,i.kt)("p",null,"Then, let's build the image locally. Note our ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file will\nname the build ",(0,i.kt)("inlineCode",{parentName:"p"},"deno-image"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"docker compose -f docker-compose.yml build\n")),(0,i.kt)("p",null,"Let's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/tag/"},"tag")," the local\nimage with ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ username }}/deno-on-aws-lightsail"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"docker tag deno-image {{ username }}/deno-on-aws-lightsail\n")),(0,i.kt)("p",null,"We can now push the image to Docker Hub:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"docker push {{ username }}/deno-on-aws-lightsail\n")),(0,i.kt)("p",null,"After that succeeds, you should be able to see the new image on your Docker Hub\nrepository:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"new image on docker hub",src:t(66475).Z,width:"1072",height:"804"})),(0,i.kt)("h2",{id:"create-and-deploy-to-a-lightsail-container"},"Create and Deploy to a Lightsail Container"),(0,i.kt)("p",null,"Let's head over to\n",(0,i.kt)("a",{parentName:"p",href:"https://lightsail.aws.amazon.com/ls/webapp/home/container-services"},"the Amazon Lightsail console"),"."),(0,i.kt)("p",null,'Then click "Containers" and "Create container service". Half way down the page,\nclick "Setup your first Deployment" and select "Specify a custom deployment".'),(0,i.kt)("p",null,"You can write whatever container name you'd like."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"Image"),", be sure to use ",(0,i.kt)("inlineCode",{parentName:"p"},"{{ username }}/{{ image }}")," that you have set in\nyour Docker Hub. For this example, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"lambtron/deno-on-aws-lightsail"),"."),(0,i.kt)("p",null,"Let's click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add open ports")," and add ",(0,i.kt)("inlineCode",{parentName:"p"},"8000"),"."),(0,i.kt)("p",null,"Finally, under ",(0,i.kt)("inlineCode",{parentName:"p"},"PUBLIC ENDPOINT"),", select the container name that you just\ncreated."),(0,i.kt)("p",null,"The full form should look like below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create container service interface",src:t(30374).Z,width:"1072",height:"1167"})),(0,i.kt)("p",null,'When you\'re ready, click "Create container service".'),(0,i.kt)("p",null,"After a few moments, your new container should be deployed. Click on the public\naddress and you should see your Deno app:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hello world from Deno and AWS Lightsail",src:t(88863).Z,width:"1072",height:"573"})),(0,i.kt)("h2",{id:"automate-using-github-actions"},"Automate using GitHub Actions"),(0,i.kt)("p",null,"In order to automate that process, we'll use the ",(0,i.kt)("inlineCode",{parentName:"p"},"aws")," CLI with the\n",(0,i.kt)("a",{parentName:"p",href:"https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/push-container-image.html"},(0,i.kt)("inlineCode",{parentName:"a"},"lightsail")," subcommand"),"."),(0,i.kt)("p",null,"The steps in our GitHub Actions workflow will be:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Checkout the repo"),(0,i.kt)("li",{parentName:"ol"},"Build our app as a Docker image locally"),(0,i.kt)("li",{parentName:"ol"},"Install and authenticate AWS CLI"),(0,i.kt)("li",{parentName:"ol"},"Push local Docker image to AWS Lightsail Container Service via CLI")),(0,i.kt)("p",null,"Pre-requisites for this GitHub Action workflow to work:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an AWS Lightsail Container Instance is created (see section above)"),(0,i.kt)("li",{parentName:"ul"},"IAM user and relevant permissions set.\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/awsdocs/amazon-lightsail-developer-manual/blob/master/doc_source/amazon-lightsail-managing-access-for-an-iam-user.md"},"See here to learn more about managing access to Amazon Lightsail for an IAM user."),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_SUCCESS_ACCESS_KEY")," for your permissioned user.\n(Follow\n",(0,i.kt)("a",{parentName:"li",href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli"},"this AWS guide"),"\nto get generate an ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_SUCCESS_ACCESS_KEY"),".)")),(0,i.kt)("p",null,"Let's create a new file ",(0,i.kt)("inlineCode",{parentName:"p"},"container.template.json"),", which contains configuration\nfor how to make the service container deployment. Note the similarities these\noption values have with the inputs we entered manually in the previous section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json,",metastring:"ignore",ignore:!0},'{\n  "containers": {\n    "app": {\n      "image": "",\n      "environment": {\n        "APP_ENV": "release"\n      },\n      "ports": {\n        "8000": "HTTP"\n      }\n    }\n  },\n  "publicEndpoint": {\n    "containerName": "app",\n    "containerPort": 8000,\n    "healthCheck": {\n      "healthyThreshold": 2,\n      "unhealthyThreshold": 2,\n      "timeoutSeconds": 5,\n      "intervalSeconds": 10,\n      "path": "/",\n      "successCodes": "200-499"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Let's add the below to your ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml,",metastring:"ignore",ignore:!0},'name: Build and Deploy to AWS Lightsail\n\non:\n  push:\n    branches:\n      - main\n\nenv:\n  AWS_REGION: us-west-2\n  AWS_LIGHTSAIL_SERVICE_NAME: container-service-2\njobs:\n  build_and_deploy:\n    name: Build and Deploy\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout main\n        uses: actions/checkout@v2\n\n      - name: Install Utilities\n        run: |\n          sudo apt-get update\n          sudo apt-get install -y jq unzip\n      - name: Install AWS Client\n        run: |\n          curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\n          unzip awscliv2.zip\n          sudo ./aws/install || true\n          aws --version\n          curl "https://s3.us-west-2.amazonaws.com/lightsailctl/latest/linux-amd64/lightsailctl" -o "lightsailctl"\n          sudo mv "lightsailctl" "/usr/local/bin/lightsailctl"\n          sudo chmod +x /usr/local/bin/lightsailctl\n      - name: Configure AWS credentials\n        uses: aws-actions/configure-aws-credentials@v1\n        with:\n          aws-region: ${{ env.AWS_REGION }}\n          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n      - name: Build Docker Image\n        run: docker build -t ${{ env.AWS_LIGHTSAIL_SERVICE_NAME }}:release .\n      - name: Push and Deploy\n        run: |\n          service_name=${{ env.AWS_LIGHTSAIL_SERVICE_NAME }}\n          aws lightsail push-container-image \\\n            --region ${{ env.AWS_REGION }} \\\n            --service-name ${service_name} \\\n            --label ${service_name} \\\n            --image ${service_name}:release\n          aws lightsail get-container-images --service-name ${service_name} | jq --raw-output ".containerImages[0].image" > image.txt\n          jq --arg image $(cat image.txt) \'.containers.app.image = $image\' container.template.json > container.json\n          aws lightsail create-container-service-deployment --service-name ${service_name} --cli-input-json file://$(pwd)/container.json\n')),(0,i.kt)("p",null,"Whoa there is a lot going on here! The last two steps are most important:\n",(0,i.kt)("inlineCode",{parentName:"p"},"Build Docker Image")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Push and Deploy"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"docker build -t ${{ env.AWS_LIGHTSAIL_SERVICE_NAME }}:release .\n")),(0,i.kt)("p",null,"This command builds our Docker image with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"container-service-2")," and\ntags it ",(0,i.kt)("inlineCode",{parentName:"p"},"release"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"aws lightsail push-container-image ...\n")),(0,i.kt)("p",null,"This command pushes the local image to our Lightsail container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},'aws lightsail get-container-images --service-name ${service_name} | jq --raw-output ".containerImages[0].image" > image.txt\n')),(0,i.kt)("p",null,"This command retrieves the image information and, using\n",(0,i.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,i.kt)("inlineCode",{parentName:"a"},"jq")),", parses it and saves the image name in a\nlocal file ",(0,i.kt)("inlineCode",{parentName:"p"},"image.txt"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"jq --arg image $(cat image.txt) '.containers.app.image = $image' container.template.json > container.json\n")),(0,i.kt)("p",null,"This command uses the image name saved in ",(0,i.kt)("inlineCode",{parentName:"p"},"image.txt")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"container.template.json")," and creates a new options file called\n",(0,i.kt)("inlineCode",{parentName:"p"},"container.json"),". This options file will be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"aws lightsail")," for the\nfinal deployment in the next step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"aws lightsail create-container-service-deployment --service-name ${service_name} --cli-input-json file://$(pwd)/container.json\n")),(0,i.kt)("p",null,"Finally, this command creates a new deployment using the ",(0,i.kt)("inlineCode",{parentName:"p"},"service_name"),", along\nwith the config settings in ",(0,i.kt)("inlineCode",{parentName:"p"},"container.json"),"."),(0,i.kt)("p",null,"When you push to GitHub and the Action succeeds, you'll be able to see your new\nDeno app on AWS:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"deno on aws",src:t(88863).Z,width:"1072",height:"573"})))}u.isMDXComponent=!0},30374:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/create-container-service-on-aws-2ae5eca02be134dde00aa5eec9b97c3c.png"},88863:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-world-from-deno-and-aws-lightsail-9268528211f36171cf5c3ae37622db85.png"},20940:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/hello-world-from-localhost-c44ccccdb3bf78c4faf816bf4c5e72b0.png"},66475:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/new-image-on-docker-hub-540bd4e42490b163c0bee995a6d4ff11.png"}}]);