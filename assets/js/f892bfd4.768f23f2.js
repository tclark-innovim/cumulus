"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[7033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"queue_granules",title:"Queue Granules",hide_title:!1},u=void 0,l={unversionedId:"workflow_tasks/queue_granules",id:"version-v17.0.0/workflow_tasks/queue_granules",title:"Queue Granules",description:"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages.",source:"@site/versioned_docs/version-v17.0.0/workflow_tasks/queue_granules.md",sourceDirName:"workflow_tasks",slug:"/workflow_tasks/queue_granules",permalink:"/cumulus/docs/workflow_tasks/queue_granules",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1691884278,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{id:"queue_granules",title:"Queue Granules",hide_title:!1},sidebar:"docs",previous:{title:"Move Granules",permalink:"/cumulus/docs/workflow_tasks/move_granules"},next:{title:"LZARDS Backup",permalink:"/cumulus/docs/workflow_tasks/lzards_backup"}},c={},p=[{value:"Summary",id:"summary",level:2},{value:"Task Inputs",id:"task-inputs",level:2},{value:"Input",id:"input",level:3},{value:"Cumulus Configuration",id:"cumulus-configuration",level:3},{value:"<code>provider</code>",id:"provider",level:4},{value:"<code>internalBucket</code>",id:"internalbucket",level:4},{value:"<code>granuleIngestWorkflow</code>",id:"granuleingestworkflow",level:4},{value:"<code>queueUrl</code>",id:"queueurl",level:4},{value:"<code>preferredQueueBatchSize</code>",id:"preferredqueuebatchsize",level:4},{value:"<code>concurrency</code>",id:"concurrency",level:4},{value:"<code>executionNamePrefix</code>",id:"executionnameprefix",level:4},{value:"<code>childWorkflowMeta</code>",id:"childworkflowmeta",level:4},{value:"Task Outputs",id:"task-outputs",level:2}],d={toc:p},h="wrapper";function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This task utilizes the Cumulus Message Adapter to interpret and construct incoming and outgoing messages."),(0,o.kt)("p",null,"Links to the npm package, task input, output and configuration schema definitions, and more can be found on the auto-generated ",(0,o.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks")," page."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The purpose of this task is to schedule ingest of granules that were discovered on a remote host, whether via the ",(0,o.kt)("a",{parentName:"p",href:"./discover_granules"},"DiscoverGranules")," task or the ",(0,o.kt)("a",{parentName:"p",href:"./parse_pdr"},"ParsePDR")," task."),(0,o.kt)("p",null,"The task utilizes a defined ",(0,o.kt)("a",{parentName:"p",href:"../configuration/data-management-types#collections"},"collection")," in concert with a defined ",(0,o.kt)("a",{parentName:"p",href:"../configuration/data-management-types#providers"},"provider"),", either on each granule, or passed in via config to queue up ingest executions for each granule, or for batches of granules."),(0,o.kt)("p",null,"The constructed granules object is defined by the collection passed in the configuration, and has impacts to other provided core ",(0,o.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks"),"."),(0,o.kt)("p",null,"Users of this task in a workflow are encouraged to carefully consider their configuration in context of downstream tasks and workflows."),(0,o.kt)("h2",{id:"task-inputs"},"Task Inputs"),(0,o.kt)("p",null,"Each of the following sections are a high-level discussion of the intent of the various input/output/config values."),(0,o.kt)("p",null,"For the most recent config.json schema, please see the ",(0,o.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("p",null,"This task expects an incoming input that contains granules and information about them and their files. For the specifics, see the ",(0,o.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,o.kt)("p",null,"This input is most commonly the output from a preceding ",(0,o.kt)("a",{parentName:"p",href:"./discover_granules"},"DiscoverGranules")," or ",(0,o.kt)("a",{parentName:"p",href:"./parse_pdr"},"ParsePDR")," task."),(0,o.kt)("h3",{id:"cumulus-configuration"},"Cumulus Configuration"),(0,o.kt)("p",null,"This task does expect values to be set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"task_config")," CMA parameters for the workflows.  A schema exists that defines the requirements for the task."),(0,o.kt)("p",null,"For the most recent config.json schema, please see the ",(0,o.kt)("a",{parentName:"p",href:"../tasks"},"Cumulus Tasks page")," entry for the schema."),(0,o.kt)("p",null,"Below are expanded descriptions of selected config keys:"),(0,o.kt)("h4",{id:"provider"},(0,o.kt)("inlineCode",{parentName:"h4"},"provider")),(0,o.kt)("p",null,"A Cumulus ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/packages/api/lib/schemas.js"},"provider")," object for the originating provider. Will be passed along to the ingest workflow. This will be overruled by more specific provider information that may exist on a granule."),(0,o.kt)("h4",{id:"internalbucket"},(0,o.kt)("inlineCode",{parentName:"h4"},"internalBucket")),(0,o.kt)("p",null,"The Cumulus internal system bucket."),(0,o.kt)("h4",{id:"granuleingestworkflow"},(0,o.kt)("inlineCode",{parentName:"h4"},"granuleIngestWorkflow")),(0,o.kt)("p",null,"A string property that denotes the name of the ingest workflow into which granules should be queued."),(0,o.kt)("h4",{id:"queueurl"},(0,o.kt)("inlineCode",{parentName:"h4"},"queueUrl")),(0,o.kt)("p",null,"A string property that denotes the URL of the queue to which scheduled execution messages are sent."),(0,o.kt)("h4",{id:"preferredqueuebatchsize"},(0,o.kt)("inlineCode",{parentName:"h4"},"preferredQueueBatchSize")),(0,o.kt)("p",null,"A number property that sets an upper bound on the size of each batch of granules queued into the payload of an ingest execution. Setting this property to a value higher than 1 allows queueing of multiple granules per ingest workflow."),(0,o.kt)("p",null,"As ingest executions typically expect granules in the payload to have a common collection and common provider, this property only sets an upper bound within which batches will be created based on common collection and provider information."),(0,o.kt)("p",null,"This means batches may be smaller than the preferred size if collection or provider information diverge, but never larger."),(0,o.kt)("p",null,"The default value if none is specified is 1, which will queue one ingest execution per granule."),(0,o.kt)("h4",{id:"concurrency"},(0,o.kt)("inlineCode",{parentName:"h4"},"concurrency")),(0,o.kt)("p",null,"A number property that determines the level of concurrency with which ingest executions are scheduled.\nGranules or batches of granules will be queued up into executions at this level of concurrency."),(0,o.kt)("p",null,"This property is also used to limit concurrency when updating granule status to ",(0,o.kt)("inlineCode",{parentName:"p"},"queued"),"."),(0,o.kt)("p",null,"Limiting concurrency helps to avoid throttling by the AWS Lambda API and helps to avoid encountering account Lambda concurrency limitations."),(0,o.kt)("p",null,"We do not recommend increasing this value unless you are seeing Lambda.Timeout errors when queue-granules receives a large number of granules as input. However, as increasing the concurrency may lead to Lambda API or Lambda concurrency throttling errors, you may wish to consider converting the queue-granules task to an ECS activity, which does not face similar runtime constraints."),(0,o.kt)("p",null,"The default value is 3."),(0,o.kt)("h4",{id:"executionnameprefix"},(0,o.kt)("inlineCode",{parentName:"h4"},"executionNamePrefix")),(0,o.kt)("p",null,"A string property that will prefix the names of scheduled executions."),(0,o.kt)("h4",{id:"childworkflowmeta"},(0,o.kt)("inlineCode",{parentName:"h4"},"childWorkflowMeta")),(0,o.kt)("p",null,"An object property that will be merged into the scheduled execution input's ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," field."),(0,o.kt)("h2",{id:"task-outputs"},"Task Outputs"),(0,o.kt)("p",null,"This task outputs an assembled array of workflow execution ARNs for all scheduled workflow executions within the payload's ",(0,o.kt)("inlineCode",{parentName:"p"},"running")," object."))}m.isMDXComponent=!0}}]);