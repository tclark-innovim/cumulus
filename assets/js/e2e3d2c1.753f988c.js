"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[98434],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},59209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],o={id:"replay-kinesis-messages",title:"How to replay Kinesis messages after an outage",hide_title:!1},l=void 0,p={unversionedId:"features/replay-kinesis-messages",id:"version-v18.1.0/features/replay-kinesis-messages",title:"How to replay Kinesis messages after an outage",description:"After a period of outage, it may be necessary for a Cumulus operator to reprocess or 'replay' messages that arrived on an AWS Kinesis Data Stream but did not trigger an ingest. This document serves as an outline on how to start a replay operation, and how to perform status tracking. Cumulus supports replay of all Kinesis messages on a stream (subject to the normal RetentionPeriod constraints), or all messages within a given time slice delimited by start and end timestamps.",source:"@site/versioned_docs/version-v18.1.0/features/replay-kinesis-messages.md",sourceDirName:"features",slug:"/features/replay-kinesis-messages",permalink:"/cumulus/docs/features/replay-kinesis-messages",draft:!1,tags:[],version:"v18.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1698268791,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"replay-kinesis-messages",title:"How to replay Kinesis messages after an outage",hide_title:!1},sidebar:"docs",previous:{title:"Writing logs for ESDIS Metrics",permalink:"/cumulus/docs/features/logging-esdis-metrics"},next:{title:"How to replay SQS messages archived in S3",permalink:"/cumulus/docs/features/replay-archived-sqs-messages"}},d={},m=[{value:"Replays endpoint",id:"replays-endpoint",level:2},{value:"Start a replay",id:"start-a-replay",level:2},{value:"Status tracking",id:"status-tracking",level:2}],u={toc:m},c="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After a period of outage, it may be necessary for a Cumulus operator to reprocess or 'replay' messages that arrived on an AWS Kinesis Data Stream but did not trigger an ingest. This document serves as an outline on how to start a replay operation, and how to perform status tracking. Cumulus supports replay of all Kinesis messages on a stream (subject to the normal RetentionPeriod constraints), or all messages within a given time slice delimited by start and end timestamps."),(0,i.kt)("p",null,"As Kinesis has no comparable field to e.g. the SQS ReceiveCount on its records, Cumulus cannot tell which messages within a given time slice have never been processed, and cannot guarantee only missed messages will be processed. Users will have to rely on duplicate handling or some other method of identifying messages that should not be processed within the time slice."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This operation flow effectively changes only the trigger mechanism for Kinesis ingest notifications. The existence of valid Kinesis-type rules and all other normal requirements for the triggering of ingest via Kinesis still apply.")),(0,i.kt)("h2",{id:"replays-endpoint"},"Replays endpoint"),(0,i.kt)("p",null,"Cumulus has added a new endpoint to its API, ",(0,i.kt)("inlineCode",{parentName:"p"},"/replays"),". This endpoint will allow you to start replay operations and returns an AsyncOperationId for operation status tracking."),(0,i.kt)("h2",{id:"start-a-replay"},"Start a replay"),(0,i.kt)("p",null,"In order to start a replay, you must perform a ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,i.kt)("inlineCode",{parentName:"p"},"replays")," endpoint."),(0,i.kt)("p",null,"The required and optional fields that should be part of the body of this request are documented below."),(0,i.kt)("p",null,"NOTE: As the ",(0,i.kt)("inlineCode",{parentName:"p"},"endTimestamp")," relies on a comparison with the Kinesis server-side ",(0,i.kt)("inlineCode",{parentName:"p"},"ApproximateArrivalTimestamp"),", and given that there is no documented level of accuracy for the approximation, it is recommended that the ",(0,i.kt)("inlineCode",{parentName:"p"},"endTimestamp")," include some amount of buffer to allow for slight discrepancies.\nIf tolerable, the same is recommended for the ",(0,i.kt)("inlineCode",{parentName:"p"},"startTimestamp")," although it is used differently and less vulnerable to discrepancies since a server-side arrival timestamp should never be earlier than the client-side request timestamp."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"required"),(0,i.kt)("td",{parentName:"tr",align:null},"Currently only accepts ",(0,i.kt)("inlineCode",{parentName:"td"},"kinesis"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kinesisStream")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"for type ",(0,i.kt)("inlineCode",{parentName:"td"},"kinesis")),(0,i.kt)("td",{parentName:"tr",align:null},"Any valid kinesis stream name (",(0,i.kt)("em",{parentName:"td"},"not")," ARN)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kinesisStreamCreationTimestamp")),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Any input valid for a JS Date constructor. For reasons to use this field see ",(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/kinesis/latest/APIReference/API_ListShards.html#API_ListShards_RequestSyntax"},"AWS documentation on StreamCreationTimestamp"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"endTimestamp")),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Any input valid for a JS Date constructor. Messages newer than this timestamp will be skipped.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"startTimestamp")),(0,i.kt)("td",{parentName:"tr",align:null},"*"),(0,i.kt)("td",{parentName:"tr",align:null},"optional"),(0,i.kt)("td",{parentName:"tr",align:null},"Any input valid for a JS Date constructor. Messages will be fetched from the Kinesis stream starting at this timestamp. Ignored if it is further in the past than the stream's retention period.")))),(0,i.kt)("h2",{id:"status-tracking"},"Status tracking"),(0,i.kt)("p",null,"A successful response from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/replays")," endpoint will contain an ",(0,i.kt)("inlineCode",{parentName:"p"},"asyncOperationId")," field.\nUse this ID with the ",(0,i.kt)("inlineCode",{parentName:"p"},"/asyncOperations")," endpoint to track the status."))}g.isMDXComponent=!0}}]);