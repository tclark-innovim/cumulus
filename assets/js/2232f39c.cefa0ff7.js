"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[94924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return r?o.createElement(d,s(s({ref:t},c),{},{components:r})):o.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},77485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),s=["components"],i={id:"interfaces",title:"Interfaces",hide_title:!1},u=void 0,l={unversionedId:"interfaces",id:"version-v17.0.0/interfaces",title:"Interfaces",description:"Cumulus has multiple interfaces that allow interaction with discrete components of the system, such as starting workflows via SNS/Kinesis/SQS, manually queueing workflow start messages, submitting SNS notifications for completed workflows, and the many operations allowed by the Cumulus API.",source:"@site/versioned_docs/version-v17.0.0/interfaces.md",sourceDirName:".",slug:"/interfaces",permalink:"/cumulus/docs/interfaces",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1691884278,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{id:"interfaces",title:"Interfaces",hide_title:!1},sidebar:"docs",previous:{title:"Architecture",permalink:"/cumulus/docs/architecture"},next:{title:"Cumulus Team",permalink:"/cumulus/docs/team"}},c={},p=[{value:"Workflow triggers and queuing",id:"workflow-triggers-and-queuing",level:2},{value:"Kinesis stream",id:"kinesis-stream",level:3},{value:"SQS queue for executions",id:"sqs-queue-for-executions",level:3},{value:"Workflow executions",id:"workflow-executions",level:2},{value:"Workflow reporting",id:"workflow-reporting",level:2},{value:"SNS reporting topics",id:"sns-reporting-topics",level:3},{value:"Cumulus API",id:"cumulus-api",level:3}],m={toc:p},f="wrapper";function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)(f,(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Cumulus has multiple interfaces that allow interaction with discrete components of the system, such as starting workflows via SNS/Kinesis/SQS, manually queueing workflow start messages, submitting SNS notifications for completed workflows, and the many operations allowed by the Cumulus API."),(0,a.kt)("p",null,"The diagram below illustrates the workflow process in detail and the various interfaces that allow starting of workflows, reporting of workflow information, and database create operations that occur when a workflow reporting message is processed. For interfaces with expected input or output schemas, details are provided below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture diagram showing the interfaces for triggering and reporting of Cumulus workflow executions",src:r(59652).Z,width:"2286",height:"1031"})),(0,a.kt)("h2",{id:"workflow-triggers-and-queuing"},"Workflow triggers and queuing"),(0,a.kt)("h3",{id:"kinesis-stream"},"Kinesis stream"),(0,a.kt)("p",null,"As a Kinesis stream is consumed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"messageConsumer")," Lambda to queue workflow executions, the incoming event is validated against ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lambdas/kinesis-consumer-event-schema.json"},"this consumer schema")," by the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ajv"},(0,a.kt)("inlineCode",{parentName:"a"},"ajv")," package"),"."),(0,a.kt)("h3",{id:"sqs-queue-for-executions"},"SQS queue for executions"),(0,a.kt)("p",null,"The messages put into the SQS queue for executions should conform to the ",(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/workflows/cumulus-task-message-flow#cumulus-message-format"},"Cumulus message format"),"."),(0,a.kt)("h2",{id:"workflow-executions"},"Workflow executions"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/workflows/"},"documentation on Cumulus workflows"),"."),(0,a.kt)("h2",{id:"workflow-reporting"},"Workflow reporting"),(0,a.kt)("h3",{id:"sns-reporting-topics"},"SNS reporting topics"),(0,a.kt)("p",null,"For granule and PDR reporting, the topics will only receive data if the ",(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/workflows/cumulus-task-message-flow#cumulus-message-format"},"Cumulus workflow execution message")," meets the following criteria:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Granules - workflow message contains granule data in ",(0,a.kt)("inlineCode",{parentName:"li"},"payload.granules")),(0,a.kt)("li",{parentName:"ul"},"PDRs - workflow message contains PDR data in ",(0,a.kt)("inlineCode",{parentName:"li"},"payload.pdr"))),(0,a.kt)("p",null,"The messages published to the SNS reporting topics for executions and PDRs and the ",(0,a.kt)("inlineCode",{parentName:"p"},"record")," property in the messages published to the granules SNS topic should conform to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lib/schemas.js"},"model schema")," for each data type."),(0,a.kt)("p",null,"Further detail on workflow reporting and how to interact with these interfaces can be found in the ",(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/data-cookbooks/ingest-notifications"},"workflow notifications data cookbook"),"."),(0,a.kt)("h3",{id:"cumulus-api"},"Cumulus API"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/"},"Cumulus API documentation"),"."))}d.isMDXComponent=!0},59652:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/interfaces-afde22eec1363772c777174b43895b47.svg"}}]);