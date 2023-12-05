"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[2592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?o.createElement(g,r(r({ref:t},c),{},{components:n})):o.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const l={},r="How to Deploy to Google Cloud Run",i={unversionedId:"manual/advanced/deploying_deno/google_cloud_run",id:"manual/advanced/deploying_deno/google_cloud_run",title:"How to Deploy to Google Cloud Run",description:"Google Cloud Run is a managed compute platform",source:"@site/runtime/manual/advanced/deploying_deno/google_cloud_run.md",sourceDirName:"manual/advanced/deploying_deno",slug:"/manual/advanced/deploying_deno/google_cloud_run",permalink:"/runtime/manual/advanced/deploying_deno/google_cloud_run",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"How to Deploy Deno to Digital Ocean",permalink:"/runtime/manual/advanced/deploying_deno/digital_ocean"},next:{title:"How to Deploy Deno on Kinsta",permalink:"/runtime/manual/advanced/deploying_deno/kinsta"}},u={},s=[{value:"Manual Deployment",id:"manual-deployment",level:2},{value:"Create <code>Dockerfile</code> and <code>docker-compose.yml</code>",id:"create-dockerfile-and-docker-composeyml",level:3},{value:"Set up Artifact Registry",id:"set-up-artifact-registry",level:3},{value:"Build, Tag, and Push to Artifact Registry",id:"build-tag-and-push-to-artifact-registry",level:3},{value:"Create a Google Cloud Run Service",id:"create-a-google-cloud-run-service",level:3},{value:"Deploy with <code>gcloud</code>",id:"deploy-with-gcloud",level:3},{value:"Automate Deployment with GitHub Actions",id:"automate-deployment-with-github-actions",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deploy-to-google-cloud-run"},"How to Deploy to Google Cloud Run"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/run"},"Google Cloud Run")," is a managed compute platform\nthat lets you run containers on Google's scalable infrastructure."),(0,a.kt)("p",null,"This How To guide will show you how to use Docker to deploy your Deno app to\nGoogle Cloud Run."),(0,a.kt)("p",null,"First, we'll show you how to deploy manually, then we'll show you how to\nautomate it with GitHub Actions."),(0,a.kt)("p",null,"Pre-requisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/gcp"},"Google Cloud Platform account")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/reference/commandline/cli/"},(0,a.kt)("inlineCode",{parentName:"a"},"docker")," CLI"),"\ninstalled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/gcloud"},(0,a.kt)("inlineCode",{parentName:"a"},"gcloud"))," installed")),(0,a.kt)("h2",{id:"manual-deployment"},"Manual Deployment"),(0,a.kt)("h3",{id:"create-dockerfile-and-docker-composeyml"},"Create ",(0,a.kt)("inlineCode",{parentName:"h3"},"Dockerfile")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"docker-compose.yml")),(0,a.kt)("p",null,"To focus on the deployment, our app will simply be a ",(0,a.kt)("inlineCode",{parentName:"p"},"main.ts")," file that returns\na string as an HTTP response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'import { Application } from "https://deno.land/x/oak/mod.ts";\n\nconst app = new Application();\n\napp.use((ctx) => {\n  ctx.response.body = "Hello from Deno and Google Cloud Run!";\n});\n\nawait app.listen({ port: 8000 });\n')),(0,a.kt)("p",null,"Then, we'll create two files -- ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," -- to\nbuild the Docker image."),(0,a.kt)("p",null,"In our ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", let's add:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile,",metastring:"ignore",ignore:!0},'FROM denoland/deno\n\nEXPOSE 8000\n\nWORKDIR /app\n\nADD . /app\n\nRUN deno cache main.ts\n\nCMD ["run", "--allow-net", "main.ts"]\n')),(0,a.kt)("p",null,"Then, in our ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml,",metastring:"ignore",ignore:!0},"version: '3'\n\nservices:\n  web:\n    build: .\n    container_name: deno-container\n    image: deno-image\n    ports:\n      - \"8000:8000\"\n")),(0,a.kt)("p",null,"Let's test this locally by running ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose -f docker-compose.yml build"),",\nthen ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose up"),", and going to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8000"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello from localhost",src:n(50231).Z,width:"1072",height:"573"})),(0,a.kt)("p",null,"It works!"),(0,a.kt)("h3",{id:"set-up-artifact-registry"},"Set up Artifact Registry"),(0,a.kt)("p",null,"Artifact Registry is GCP's private registry of Docker images."),(0,a.kt)("p",null,"Before we can use it, go to GCP's\n",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/artifacts"},"Artifact Registry"),' and click\n"Create repository". You\'ll be asked for a name (',(0,a.kt)("inlineCode",{parentName:"p"},"deno-repository"),") and a region\n(",(0,a.kt)("inlineCode",{parentName:"p"},"us-central1"),'). Then click "Create".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New repository in Google Artifact Repository",src:n(71635).Z,width:"1072",height:"833"})),(0,a.kt)("h3",{id:"build-tag-and-push-to-artifact-registry"},"Build, Tag, and Push to Artifact Registry"),(0,a.kt)("p",null,"Once we've created a repository, we can start pushing images to it."),(0,a.kt)("p",null,"First, let's add the registry's address to ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"gcloud auth configure-docker us-central1-docker.pkg.dev\n")),(0,a.kt)("p",null,"Then, let's build your Docker image. (Note that the image name is defined in our\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"docker compose -f docker-compose.yml build\n")),(0,a.kt)("p",null,"Then, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/tag/"},"tag")," it with\nthe new Google Artifact Registry address, repository, and name. The image name\nshould follow this structure:\n",(0,a.kt)("inlineCode",{parentName:"p"},"{{ location }}-docker.pkg.dev/{{ google_cloudrun_project_name }}/{{ repository }}/{{ image }}"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"docker tag deno-image us-central1-docker.pkg.dev/deno-app-368305/deno-repository/deno-cloudrun-image\n")),(0,a.kt)("p",null,"If you don't specify a tag, it'll use ",(0,a.kt)("inlineCode",{parentName:"p"},":latest")," by default."),(0,a.kt)("p",null,"Next, push the image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"docker push us-central1-docker.pkg.dev/deno-app-368305/deno-repository/deno-cloudrun-image\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling"},"More info on how to push and pull images to Google Artifact Registry"),".")),(0,a.kt)("p",null,"Your image should now appear in your Google Artifact Registry!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image in Google Artifact Registry",src:n(26817).Z,width:"1072",height:"841"})),(0,a.kt)("h3",{id:"create-a-google-cloud-run-service"},"Create a Google Cloud Run Service"),(0,a.kt)("p",null,"We need an instance where we can build these images, so let's go to\n",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/run"},"Google Cloud Run"),' and click "Create\nService".'),(0,a.kt)("p",null,'Let\'s name it "hello-from-deno".'),(0,a.kt)("p",null,'Select "Deploy one revision from an existing container image". Use the drop down\nto select the image from the ',(0,a.kt)("inlineCode",{parentName:"p"},"deno-repository")," Artifact Registry."),(0,a.kt)("p",null,'Select "allow unauthenticated requests" and then click "Create service". Make\nsure the port is ',(0,a.kt)("inlineCode",{parentName:"p"},"8000"),"."),(0,a.kt)("p",null,"When it's done, your app should now be live:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello from Google Cloud Run",src:n(33310).Z,width:"1072",height:"566"})),(0,a.kt)("p",null,"Awesome!"),(0,a.kt)("h3",{id:"deploy-with-gcloud"},"Deploy with ",(0,a.kt)("inlineCode",{parentName:"h3"},"gcloud")),(0,a.kt)("p",null,"Now that it's created, we'll be able to deploy to this service from the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud"),"\nCLI. The command follows this structure:\n",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud run deploy {{ service_name }} --image={{ image }} --region={{ region }} --allow-unauthenticated"),".\nNote that the ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," name follows the structure from above."),(0,a.kt)("p",null,"For this example, the command is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell,",metastring:"ignore",ignore:!0},"gcloud run deploy hello-from-deno --image=us-central1-docker.pkg.dev/deno-app-368305/deno-repository/deno-cloudrun-image --region=us-central1 --allow-unauthenticated\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello from Google Cloud Run",src:n(33310).Z,width:"1072",height:"566"})),(0,a.kt)("p",null,"Success!"),(0,a.kt)("h2",{id:"automate-deployment-with-github-actions"},"Automate Deployment with GitHub Actions"),(0,a.kt)("p",null,"In order for automation to work, we first need to make sure that these both have\nbeen created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the Google Artifact Registry"),(0,a.kt)("li",{parentName:"ul"},"the Google Cloud Run service instance")),(0,a.kt)("p",null,"(If you haven't done that, please see the section before.)"),(0,a.kt)("p",null,"Now that we have done that, we can automate it with a GitHub workflow. Here's\nthe yaml file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml,",metastring:"ignore",ignore:!0},"name: Build and Deploy to Cloud Run\n\non:\n  push:\n    branches:\n      - main\n\nenv:\n  PROJECT_ID: {{ PROJECT_ID }}\n  GAR_LOCATION: {{ GAR_LOCATION }}\n  REPOSITORY: {{ GAR_REPOSITORY }}\n  SERVICE: {{ SERVICE }}\n  REGION: {{ REGION }}\n\njobs:\n  deploy:\n    name: Deploy\n    permissions:\n      contents: 'read'\n      id-token: 'write'\n\n    runs-on: ubuntu-latest\n    steps:\n    - name: CHeckout\n      uses: actions/checkout@v3\n\n    - name: Google Auth\n      id: auth\n      uses: 'google-github-actions/auth@v0'\n      with:\n        credentials_json: '${{ secrets.GCP_CREDENTIALS }}'\n\n    - name: Login to GAR\n      uses: docker/login-action@v2.1.0\n      with:\n        registry: ${{ env.GAR_LOCATION }}-docker.pkg.dev\n        username: _json_key\n        password: ${{ secrets.GCP_CREDENTIALS }}\n\n    - name: Build and Push Container\n      run: |-\n        docker build -t \"${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.REPOSITORY }}/${{ env.SERVICE }}:${{ github.sha }}\" ./\n        docker push \"${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.REPOSITORY }}/${{ env.SERVICE }}:${{ github.sha }}\"\n\n    - name: Deploy to Cloud Run\n      id: deploy\n      uses: google-github-actions/deploy-cloudrun@v0\n      with:\n        service: ${{ env.SERVICE }}\n        region: ${{ env.REGION }}\n        image: ${{ env.GAR_LOCATION }}-docker.pkg.dev/${{ env.PROJECT_ID }}/${{ env.REPOSITORY }}/${{ env.SERVICE }}:${{ github.sha }}\n\n    - name: Show Output\n      run: echo ${{ steps.deploy.outputs.url }}\n")),(0,a.kt)("p",null,"The environment variables that we need to set are (the examples in parenthesis\nare the ones for this repository)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PROJECT_ID"),": your project id (",(0,a.kt)("inlineCode",{parentName:"li"},"deno-app-368305"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GAR_LOCATION"),": the location your Google Artifact Registry is set\n(",(0,a.kt)("inlineCode",{parentName:"li"},"us-central1"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GAR_REPOSITORY"),": the name you gave your Google Artifact Registry\n(",(0,a.kt)("inlineCode",{parentName:"li"},"deno-repository"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVICE"),": the name of the Google Cloud Run service (",(0,a.kt)("inlineCode",{parentName:"li"},"hello-from-deno"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REGION"),": the region of your Google Cloud Run service (",(0,a.kt)("inlineCode",{parentName:"li"},"us-central1"),")")),(0,a.kt)("p",null,"The secret variables that we need to set are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GCP_CREDENTIALS"),": this is the\n",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/service-accounts"},"service account")," json\nkey. When you create the service account, be sure to\n",(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/iam/docs/granting-changing-revoking-access#granting_access_to_a_user_for_a_service_account"},"include the roles and permissions necessary"),"\nfor Artifact Registry and Google Cloud Run.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/google-github-actions/deploy-cloudrun"},"Check out more details and examples of deploying to Cloud Run from GitHub Actions.")),(0,a.kt)("p",null,"For reference:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google-github-actions/example-workflows/blob/main/workflows/deploy-cloudrun/cloudrun-docker.yml"},"https://github.com/google-github-actions/example-workflows/blob/main/workflows/deploy-cloudrun/cloudrun-docker.yml")))}d.isMDXComponent=!0},33310:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-from-google-cloud-run-e99cc7bc36a24b1d997503737e62a8a3.png"},50231:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hello-world-from-localhost-d56e15e0b84a511616a1be799237c8ea.png"},26817:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/image-in-google-artifact-registry-bc0a760a5226c28400db8de27a2ef9b3.png"},71635:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/new-repository-in-google-artifact-repository-09d8fc4519cc95279bc53bbe37720143.png"}}]);