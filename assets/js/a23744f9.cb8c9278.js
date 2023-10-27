"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[67670],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=i(r),c=a,f=p["".concat(u,".").concat(c)]||p[c]||d[c]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],s={id:"faqs",title:"Frequently Asked Questions",hide_title:!1},u=void 0,i={unversionedId:"faqs",id:"version-v13.0.0/faqs",title:"Frequently Asked Questions",description:"Below are some commonly asked questions that you may encounter that can assist you along the way when working with Cumulus.",source:"@site/versioned_docs/version-v13.0.0/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/cumulus/docs/v13.0.0/faqs",draft:!1,tags:[],version:"v13.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"faqs",title:"Frequently Asked Questions",hide_title:!1},sidebar:"docs",previous:{title:"Glossary",permalink:"/cumulus/docs/v13.0.0/glossary"},next:{title:"Architecture",permalink:"/cumulus/docs/v13.0.0/architecture"}},m={},p=[{value:"General",id:"general",level:3},{value:"Integrators &amp; Developers",id:"integrators--developers",level:3},{value:"Operators",id:"operators",level:3}],d={toc:p},c="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Below are some commonly asked questions that you may encounter that can assist you along the way when working with Cumulus."),(0,o.kt)("h3",{id:"general"},"General"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I deploy a new instance in Cumulus?"),(0,o.kt)("p",null,"  Answer: For steps on the Cumulus deployment process go to ",(0,o.kt)("a",{parentName:"p",href:"deployment"},"How to Deploy Cumulus"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What prerequisites are needed to setup Cumulus?"),(0,o.kt)("p",null,"  Answer: You will need access to the AWS console and an ",(0,o.kt)("a",{parentName:"p",href:"https://urs.earthdata.nasa.gov/"},"Earthdata login")," before you can deploy Cumulus.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What is the preferred web browser for the Cumulus environment?"),(0,o.kt)("p",null,"  Answer: Our preferred web browser is the latest version of ",(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/chrome/"},"Google Chrome"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I quickly troubleshoot an issue in Cumulus?"),(0,o.kt)("p",null,"  Answer: To troubleshoot and fix issues in Cumulus reference our recommended solutions in ",(0,o.kt)("a",{parentName:"p",href:"troubleshooting"},"Troubleshooting Cumulus"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Where can I get support help?"),(0,o.kt)("p",null,"  Answer: The following options are available for assistance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cumulus: Outside NASA users should file a GitHub issue and inside NASA users should file a JIRA issue."),(0,o.kt)("li",{parentName:"ul"},"AWS: You can create a case in the ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/support/home"},"AWS Support Center"),", accessible via your AWS Console."))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"integrators--developers"},"Integrators & Developers"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What is a Cumulus integrator?"),(0,o.kt)("p",null,"  Answer: Those who are working within Cumulus and AWS for deployments and to manage workflows. They may perform the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Configure and deploy Cumulus to the AWS environment"),(0,o.kt)("li",{parentName:"ul"},"Configure Cumulus workflows"),(0,o.kt)("li",{parentName:"ul"},"Write custom workflow tasks"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What are the steps if I run into an issue during deployment?"),(0,o.kt)("p",null,"  Answer: If you encounter an issue with your deployment go to the ",(0,o.kt)("a",{parentName:"p",href:"../troubleshooting/troubleshooting-deployment"},"Troubleshooting Deployment")," guide.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Is Cumulus customizable and flexible?"),(0,o.kt)("p",null,"  Answer: Yes. Cumulus is a modular architecture that allows you to decide which components that you want/need to deploy. These components are maintained as Terraform modules.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What are Terraform modules?"),(0,o.kt)("p",null,"  Answer: They are modules that are composed to create a Cumulus deployment, which gives integrators the flexibility to choose the components of Cumulus that want/need. To view Cumulus maintained modules or steps on how to create a module go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules"},"Terraform modules"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Where do I find Terraform module variables"),(0,o.kt)("p",null,"  Answer: Go ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/tf-modules/cumulus/variables.tf"},"here")," for a list of Cumulus maintained variables.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What is a Cumulus workflow?"),(0,o.kt)("p",null,"  Answer: A workflow is a provider-configured set of steps that describe the process to ingest data. Workflows are defined using\xa0",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/step-functions/index.html"},"AWS Step Functions"),". For more details, we suggest visiting\xa0",(0,o.kt)("a",{parentName:"p",href:"workflows"},"here"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"How do I set up a Cumulus workflow?"),(0,o.kt)("p",null,"  Answer: You will need to create a provider, have an associated collection (add a new one), and generate a new rule first. Then you can set up a Cumulus workflow by following these steps ",(0,o.kt)("a",{parentName:"p",href:"workflows/developing-a-cumulus-workflow"},"here"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What are the common use cases that a Cumulus integrator encounters?"),(0,o.kt)("p",null,"  Answer: The following are some examples of possible use cases you may see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"configuration/data-management-types"},"Creating Cumulus Data Management Types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"integrator-guide/workflow-add-new-lambda"},"Workflow: Add New Lambda")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"integrator-guide/workflow-ts-failed-step"},"Workflow: Troubleshoot Failed Step(s)")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"operators"},"Operators"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What is a Cumulus operator?"),(0,o.kt)("p",null,"  Answer: Those that ingests, archives, and troubleshoots datasets (called collections in Cumulus). Your daily activities might include but not limited to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ingesting datasets"),(0,o.kt)("li",{parentName:"ul"},"Maintaining historical data ingest"),(0,o.kt)("li",{parentName:"ul"},"Starting and stopping data handlers"),(0,o.kt)("li",{parentName:"ul"},"Managing collections"),(0,o.kt)("li",{parentName:"ul"},"Managing provider definitions"),(0,o.kt)("li",{parentName:"ul"},"Creating, enabling, and disabling rules"),(0,o.kt)("li",{parentName:"ul"},"Investigating errors for granules and deleting or re-ingesting granules"),(0,o.kt)("li",{parentName:"ul"},"Investigating errors in executions and isolating failed workflow step(s)"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What are the common use cases that a Cumulus operator encounters?"),(0,o.kt)("p",null,"  Answer: The following are some examples of possible use cases you may see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"operator-docs/kinesis-stream-for-ingest"},"Kinesis Stream For Ingest")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"operator-docs/create-rule-in-cumulus"},"Create Rule In Cumulus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"operator-docs/granule-workflows"},"Granule Workflows")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Can you re-run a workflow execution in AWS?"),(0,o.kt)("p",null,"  Answer: Yes. For steps on how to re-run a workflow execution go to ",(0,o.kt)("a",{parentName:"p",href:"troubleshooting/rerunning-workflow-executions"},"Re-running workflow executions")," in the ",(0,o.kt)("a",{parentName:"p",href:"operator-docs/about-operator-docs"},"Cumulus Operator Docs"),".")))}f.isMDXComponent=!0}}]);