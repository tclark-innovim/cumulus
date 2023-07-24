"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[14908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=n(87462),a=n(63366),l=(n(67294),n(3905)),r=["components"],i={id:"cloudwatch-retention",title:"Cloudwatch Retention",hide_title:!1},s=void 0,u={unversionedId:"configuration/cloudwatch-retention",id:"version-v15.0.2/configuration/cloudwatch-retention",title:"Cloudwatch Retention",description:"Our lambdas dump logs to AWS CloudWatch. By default, these logs exist indefinitely. However, there are ways to specify a duration for log retention.",source:"@site/versioned_docs/version-v15.0.2/configuration/cloudwatch-retention.md",sourceDirName:"configuration",slug:"/configuration/cloudwatch-retention",permalink:"/cumulus/docs/v15.0.2/configuration/cloudwatch-retention",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"cloudwatch-retention",title:"Cloudwatch Retention",hide_title:!1},sidebar:"docs",previous:{title:"S3 Server Access Logging",permalink:"/cumulus/docs/v15.0.2/configuration/server_access_logging"},next:{title:"Setting S3 Lifecycle Policies",permalink:"/cumulus/docs/v15.0.2/configuration/lifecycle-policies"}},p={},d=[{value:"aws-cli",id:"aws-cli",level:2},{value:"AWS Management Console",id:"aws-management-console",level:2},{value:"Terraform",id:"terraform",level:2},{value:"default_log_retention_periods",id:"default_log_retention_periods",level:3},{value:"Example",id:"example",level:4},{value:"cloudwatch_log_retention_periods",id:"cloudwatch_log_retention_periods",level:3},{value:"Example",id:"example-1",level:4}],c={toc:d},m="wrapper";function g(e){var t=e.components,i=(0,a.Z)(e,r);return(0,l.kt)(m,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Our lambdas dump logs to ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cloudwatch/"},"AWS CloudWatch"),". By default, these logs exist indefinitely. However, there are ways to specify a duration for log retention."),(0,l.kt)("h2",{id:"aws-cli"},"aws-cli"),(0,l.kt)("p",null,"In addition to getting your aws-cli ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html"},"set-up"),", there are two values you'll need to acquire."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"log-group-name"),": the name of the log group who's retention policy (retention time) you'd like to change. We'll use ",(0,l.kt)("inlineCode",{parentName:"li"},"/aws/lambda/KinesisInboundLogger")," in our examples."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"retention-in-days"),": the number of days you'd like to retain the logs in the specified log group for. There is a list of possible values available in the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/reference/logs/put-retention-policy.html"},"aws logs documentation"),".")),(0,l.kt)("p",null,"For example, if we wanted to set log retention to 30 days on our ",(0,l.kt)("inlineCode",{parentName:"p"},"KinesisInboundLogger")," lambda, we would write:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'aws logs put-retention-policy --log-group-name "/aws/lambda/KinesisInboundLogger" --retention-in-days 30\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," The aws-cli log command that we're using is explained in detail ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/logs/put-retention-policy.html"},"here"),"."),(0,l.kt)("h2",{id:"aws-management-console"},"AWS Management Console"),(0,l.kt)("p",null,"Changing the log retention policy in the AWS Management Console is a fairly simple process:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Navigate to the CloudWatch service in the AWS Management Console."),(0,l.kt)("li",{parentName:"ol"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Logs")," entry on the sidebar."),(0,l.kt)("li",{parentName:"ol"},"Find the Log Group who's retention policy you're interested in changing."),(0,l.kt)("li",{parentName:"ol"},"Click on the value in the ",(0,l.kt)("inlineCode",{parentName:"li"},"Expire Events After")," column."),(0,l.kt)("li",{parentName:"ol"},"Enter/Select the number of days you'd like to retain logs in that log group for.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screenshot of AWS console showing how to configure the retention period for Cloudwatch logs",src:n(64818).Z,width:"1156",height:"841"})),(0,l.kt)("h2",{id:"terraform"},"Terraform"),(0,l.kt)("p",null,"Cumulus modules create cloudwatch log groups and manage log retention for a subset of lambdas and tasks. These log groups have a default log retention time, but, there are two optional variables which can be set to change the default retention period for all or specific Cumulus managed cloudwatch log groups through deployment. For cloudwatch log groups which are not managed by Cumulus modules, the retention period is indefinite or ",(0,l.kt)("inlineCode",{parentName:"p"},"Never Expire")," by AWS, cloudwatch log configurations for all Cumulus lambdas and tasks will be added in a future release."),(0,l.kt)("p",null,"There are optional variables that can be set during deployment of cumulus modules to configure\nthe retention period (in days) of cloudwatch log groups for lambdas and tasks which the ",(0,l.kt)("inlineCode",{parentName:"p"},"cumulus"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cumulus_distribution"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"cumulus_ecs_service")," modules supports (using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cumulus")," module as an example):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tf"},'module "cumulus" {\n  # ... other variables\n  default_log_retention_days = var.default_log_retention_days\n  cloudwatch_log_retention_periods = var.cloudwatch_log_retention_periods\n}\n')),(0,l.kt)("p",null,"By setting the below variables in ",(0,l.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," and deploying, the cloudwatch log groups will be instantiated or updated with the new retention value."),(0,l.kt)("h3",{id:"default_log_retention_periods"},"default_log_retention_periods"),(0,l.kt)("p",null,"The variable ",(0,l.kt)("inlineCode",{parentName:"p"},"default_log_retention_days")," can be configured in order to set the default log retention for all cloudwatch log groups managed by Cumulus in case a custom value isn't used. The log groups will use this value for their retention, and if this value is not set either, the retention will default to 30 days. For example, if a user would like their log groups of the Cumulus module to have a retention period of one year, deploy the respective modules with the variable in the example below."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tf"},"default_log_retention_periods = 365\n")),(0,l.kt)("h3",{id:"cloudwatch_log_retention_periods"},"cloudwatch_log_retention_periods"),(0,l.kt)("p",null,"The retention period (in days) of cloudwatch log groups for specific lambdas and tasks can be set\nduring deployment using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cloudwatch_log_retention_periods")," terraform map variable. In order to\nconfigure these values for respective cloudwatch log groups, uncomment the ",(0,l.kt)("inlineCode",{parentName:"p"},"cloudwatch_log_retention_periods"),' variable and add the retention values listed below corresponding to the group\'s retention you want to change. The following values are supported correlating to their lambda/task name, (i.e. "/aws/lambda/prefix-DiscoverPdrs" would have the retention variable "DiscoverPdrs" )'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ApiEndpoints"),(0,l.kt)("li",{parentName:"ul"},"AsyncOperationEcsLogs"),(0,l.kt)("li",{parentName:"ul"},"DiscoverPdrs"),(0,l.kt)("li",{parentName:"ul"},"DistributionApiEndpoints"),(0,l.kt)("li",{parentName:"ul"},"EcsLogs"),(0,l.kt)("li",{parentName:"ul"},"granuleFilesCacheUpdater"),(0,l.kt)("li",{parentName:"ul"},"HyraxMetadataUpdates"),(0,l.kt)("li",{parentName:"ul"},"ParsePdr"),(0,l.kt)("li",{parentName:"ul"},"PostToCmr"),(0,l.kt)("li",{parentName:"ul"},"PrivateApiLambda"),(0,l.kt)("li",{parentName:"ul"},"publishExecutions"),(0,l.kt)("li",{parentName:"ul"},"publishGranules"),(0,l.kt)("li",{parentName:"ul"},"publishPdrs"),(0,l.kt)("li",{parentName:"ul"},"QueuePdrs"),(0,l.kt)("li",{parentName:"ul"},"QueueWorkflow"),(0,l.kt)("li",{parentName:"ul"},"replaySqsMessages"),(0,l.kt)("li",{parentName:"ul"},"SyncGranule"),(0,l.kt)("li",{parentName:"ul"},"UpdateCmrAccessConstraints")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"EcsLogs")," is used for all cumulus_ecs_service tasks cloudwatch log groups")),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tf"},"cloudwatch_log_retention_periods = {\n  ParsePdr = 365\n}\n")),(0,l.kt)("p",null,"The retention periods are the number of days you'd like to retain the logs in the specified log group for. There is a list of possible values available in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/logs/put-retention-policy.html"},"aws logs documentation"),"."))}g.isMDXComponent=!0},64818:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloudwatch-retention-841daeaa6b834c931b9dc2872a47b814.png"}}]);