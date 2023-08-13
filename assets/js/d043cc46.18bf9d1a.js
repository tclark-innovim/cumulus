"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[90046],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||s;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},94231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=a(63366),s=(a(67294),a(3905)),o=["components"],i={id:"architecture",title:"Architecture",hide_title:!1},u=void 0,l={unversionedId:"architecture",id:"version-v9.0.0/architecture",title:"Architecture",description:"Architecture",source:"@site/versioned_docs/version-v9.0.0/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/cumulus/docs/v9.0.0/architecture",draft:!1,tags:[],version:"v9.0.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1678406688,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"architecture",title:"Architecture",hide_title:!1},sidebar:"docs",previous:{title:"Frequently Asked Questions",permalink:"/cumulus/docs/v9.0.0/faqs"},next:{title:"Interfaces",permalink:"/cumulus/docs/v9.0.0/interfaces"}},c={},p=[{value:"Architecture",id:"architecture",level:2},{value:"Data Distribution",id:"data-distribution",level:3},{value:"Data search",id:"data-search",level:4},{value:"Data ingest",id:"data-ingest",level:3},{value:"Workflows",id:"workflows",level:4},{value:"Data persistence",id:"data-persistence",level:4},{value:"Data discovery",id:"data-discovery",level:4},{value:"Maintenance",id:"maintenance",level:3},{value:"Deployment Structure",id:"deployment-structure",level:2},{value:"Cumulus",id:"cumulus",level:3},{value:"Data persistence",id:"data-persistence-1",level:3},{value:"Other modules",id:"other-modules",level:3}],d={toc:p},m="wrapper";function h(e){var t=e.components,i=(0,n.Z)(e,o);return(0,s.kt)(m,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("p",null,"Below, find a diagram with the components that comprise an instance of Cumulus."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Architecture diagram of a Cumulus deployment",src:a(51129).Z,width:"2427",height:"2200"})),(0,s.kt)("p",null,"This diagram details all of the major architectural  components of a Cumulus deployment."),(0,s.kt)("p",null,"While the diagram can feel complex, it can easily be digested in several major components:"),(0,s.kt)("h3",{id:"data-distribution"},"Data Distribution"),(0,s.kt)("p",null,"End Users can access data via Cumulus's ",(0,s.kt)("inlineCode",{parentName:"p"},"distribution")," submodule, which includes ASF's ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app"},"thin egress application"),", this provides authenticated data egress, temporary S3 links and other statistics features."),(0,s.kt)("h4",{id:"data-search"},"Data search"),(0,s.kt)("p",null,"End user exposure of Cumulus's holdings is expected to be provided by an external service."),(0,s.kt)("p",null,"For NASA use, this is assumed to be ",(0,s.kt)("a",{parentName:"p",href:"https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/cmr"},"CMR")," in this diagram."),(0,s.kt)("h3",{id:"data-ingest"},"Data ingest"),(0,s.kt)("h4",{id:"workflows"},"Workflows"),(0,s.kt)("p",null,"The core of the ingest and processing capabilities in Cumulus is built into the deployed AWS ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/step-functions/"},"Step Function")," workflows.    Cumulus rules trigger workflows via either Cloud Watch rules, Kinesis streams, SNS topic, or SQS queue.   The workflows then run with a configured ",(0,s.kt)("a",{parentName:"p",href:"./workflows/cumulus-task-message-flow"},"Cumulus message"),", utilizing built-in processes to report status of granules, PDRs, executions, etc to the ",(0,s.kt)("a",{parentName:"p",href:"#data-persistence"},"Data Persistence")," components."),(0,s.kt)("p",null,"Workflows can optionally report granule metadata to ",(0,s.kt)("a",{parentName:"p",href:"https://earthdata.nasa.gov/eosdis/science-system-description/eosdis-components/cmr"},"CMR"),", and workflow steps can report metrics information to a shared SNS topic, which could be subscribed to for near real time granule, execution, and PDR status. This could be used for metrics reporting using an external ELK stack, for example."),(0,s.kt)("h4",{id:"data-persistence"},"Data persistence"),(0,s.kt)("p",null,"Cumulus entity state data is stored in a set of ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/dynamodb/"},"DynamoDB")," database tables, and is exported to an ElasticSearch instance for non-authoritative querying/state data for the API and other applications that require more complex queries."),(0,s.kt)("h4",{id:"data-discovery"},"Data discovery"),(0,s.kt)("p",null,"Discovering data for ingest is handled via workflow step components using Cumulus ",(0,s.kt)("inlineCode",{parentName:"p"},"provider")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"collection")," configurations and various triggers.    Data can be ingested from AWS S3, FTP, HTTPS and more."),(0,s.kt)("h3",{id:"maintenance"},"Maintenance"),(0,s.kt)("p",null,"System maintenance personnel have access to manage ingest and various portions of Cumulus via an ",(0,s.kt)("a",{parentName:"p",href:"https://aws.amazon.com/api-gateway/"},"AWS API gateway"),", as well as the operator ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-dashboard"},"dashboard"),"."),(0,s.kt)("h2",{id:"deployment-structure"},"Deployment Structure"),(0,s.kt)("p",null,"Cumulus is deployed via ",(0,s.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," and is organized internally into two separate top-level modules, as well as several external modules."),(0,s.kt)("h3",{id:"cumulus"},"Cumulus"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/cumulus"},"Cumulus module"),", which contains multiple internal submodules, deploys all of the Cumulus components that are not part of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Data Persistence")," portion of this diagram."),(0,s.kt)("h3",{id:"data-persistence-1"},"Data persistence"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tf-modules/data-persistence"},"data persistence")," module provides the ",(0,s.kt)("inlineCode",{parentName:"p"},"Data Persistence")," portion of the diagram."),(0,s.kt)("h3",{id:"other-modules"},"Other modules"),(0,s.kt)("p",null,"Other modules are provided as artifacts on the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/releases"},"release")," page for use in users configuring their own deployment and contain extracted subcomponents of the ",(0,s.kt)("a",{parentName:"p",href:"#cumulus"},"cumulus")," module.  For more on these components see the ",(0,s.kt)("a",{parentName:"p",href:"deployment/components"},"components documentation"),"."),(0,s.kt)("p",null,"For more on the specific structure, examples of use and how to deploy and more, please see the ",(0,s.kt)("a",{parentName:"p",href:"deployment"},"deployment")," docs as well as the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy"},"cumulus-template-deploy")," repo\n."))}h.isMDXComponent=!0},51129:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/cumulus-arch-diagram-0dcf1a9a22f85ea1074331c9d2f5caff.png"}}]);