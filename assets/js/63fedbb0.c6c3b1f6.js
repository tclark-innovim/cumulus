"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[27e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=r.createContext({}),i=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(a),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||n;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<n;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],l={id:"developing-workflow-tasks",title:"Developing Workflow Tasks",hide_title:!1},u=void 0,i={unversionedId:"workflows/developing-workflow-tasks",id:"version-v16.1.3/workflows/developing-workflow-tasks",title:"Developing Workflow Tasks",description:"Workflow tasks can be either AWS Lambda Functions or ECS Activities.",source:"@site/versioned_docs/version-v16.1.3/workflows/developing-workflow-tasks.md",sourceDirName:"workflows",slug:"/workflows/developing-workflow-tasks",permalink:"/cumulus/docs/v16.1.3/workflows/developing-workflow-tasks",draft:!1,tags:[],version:"v16.1.3",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1706031284,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"developing-workflow-tasks",title:"Developing Workflow Tasks",hide_title:!1},sidebar:"docs",previous:{title:"Creating a Cumulus Workflow",permalink:"/cumulus/docs/v16.1.3/workflows/developing-a-cumulus-workflow"},next:{title:"Develop Lambda Functions",permalink:"/cumulus/docs/v16.1.3/workflows/lambda"}},c={},p=[{value:"Lambda functions",id:"lambda-functions",level:2},{value:"ECS Activities",id:"ecs-activities",level:2},{value:"Cumulus Docker Image",id:"cumulus-docker-image",level:3},{value:"Alternate Docker Images",id:"alternate-docker-images",level:3}],m={toc:p},d="wrapper";function f(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Workflow tasks can be either AWS Lambda Functions or ECS Activities."),(0,n.kt)("h2",{id:"lambda-functions"},"Lambda functions"),(0,n.kt)("p",null,"The full set of available core Lambda functions can be found in the deployed ",(0,n.kt)("inlineCode",{parentName:"p"},"cumulus")," module zipfile at ",(0,n.kt)("inlineCode",{parentName:"p"},"/tasks"),", as well as reference documentation ",(0,n.kt)("a",{parentName:"p",href:"/cumulus/docs/v16.1.3/tasks"},"here"),".  These Lambdas can be referenced in workflows via the outputs from that module (see the ",(0,n.kt)("inlineCode",{parentName:"p"},"cumulus-template-deploy")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy/tree/master/cumulus-tf"},"repo")," for an example)."),(0,n.kt)("p",null,"The tasks source is located in the Cumulus repository at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tasks"},"cumulus/tasks"),"."),(0,n.kt)("p",null,"You can also develop your own Lambda function. See the ",(0,n.kt)("a",{parentName:"p",href:"/cumulus/docs/v16.1.3/workflows/lambda"},"Lambda Functions")," page to learn more."),(0,n.kt)("h2",{id:"ecs-activities"},"ECS Activities"),(0,n.kt)("p",null,"ECS activities are supported via the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/cumulus_ecs_service"},(0,n.kt)("inlineCode",{parentName:"a"},"cumulus_ecs_module"))," available from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"Cumulus release page"),"."),(0,n.kt)("p",null,"Please read the module ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/cumulus_ecs_service/README.md"},"README")," for configuration details."),(0,n.kt)("p",null,"For assistance in creating a ",(0,n.kt)("inlineCode",{parentName:"p"},"task definition")," within the module read the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-task-definition.html"},"AWS Task Definition Docs"),"."),(0,n.kt)("p",null,"For a step-by-step example of using the ",(0,n.kt)("inlineCode",{parentName:"p"},"cumulus_ecs_module"),", please see the related ",(0,n.kt)("a",{parentName:"p",href:"../data-cookbooks/run-tasks-in-lambda-or-docker"},"cookbook entry"),"."),(0,n.kt)("h3",{id:"cumulus-docker-image"},"Cumulus Docker Image"),(0,n.kt)("p",null,"ECS activities require a docker image.  Cumulus provides a docker image (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-ecs-task"},"source")," for node 12x+ lambdas on dockerhub: ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/cumuluss/cumulus-ecs-task"},"cumuluss/cumulus-ecs-task"),"."),(0,n.kt)("h3",{id:"alternate-docker-images"},"Alternate Docker Images"),(0,n.kt)("p",null,"Custom docker images/runtimes are supported as are private registries.  For details on configuring a private registry/image see the AWS documentation on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/private-auth.html"},"Private Registry Authentication for Tasks"),"."))}f.isMDXComponent=!0}}]);