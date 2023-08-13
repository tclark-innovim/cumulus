"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[90431],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",hide_title:!1},l=void 0,p={unversionedId:"operator-docs/kinesis-stream-for-ingest",id:"version-v17.0.0/operator-docs/kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",description:"Keep in mind that you should only have to set this up once per ingest stream. Kinesis pricing is based on the shard value and not on amount of kinesis usage.",source:"@site/versioned_docs/version-v17.0.0/operator-docs/kinesis-stream-for-ingest.md",sourceDirName:"operator-docs",slug:"/operator-docs/kinesis-stream-for-ingest",permalink:"/cumulus/docs/operator-docs/kinesis-stream-for-ingest",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1691884278,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{id:"kinesis-stream-for-ingest",title:"Setup Kinesis Stream & CNM Message",hide_title:!1},sidebar:"docs",previous:{title:"Operator Common Use Cases",permalink:"/cumulus/docs/operator-docs/ops-common-use-cases"},next:{title:"Create Rule In Cumulus",permalink:"/cumulus/docs/operator-docs/create-rule-in-cumulus"}},u={},c=[],m={toc:c},d="wrapper";function f(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)(d,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that you should only have to set this up once per ingest stream. Kinesis pricing is based on the shard value and not on amount of kinesis usage.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Kinesis Stream"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In your AWS console, go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Kinesis")," service and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create Data Stream"),"."),(0,i.kt)("li",{parentName:"ul"},"Assign a name to the stream."),(0,i.kt)("li",{parentName:"ul"},"Apply a ",(0,i.kt)("inlineCode",{parentName:"li"},"shard value")," of ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Create Kinesis Stream"),"."),(0,i.kt)("li",{parentName:"ul"},"A status page with stream details display. Once the status is ",(0,i.kt)("inlineCode",{parentName:"li"},"active")," then the stream is ready to use. Keep in mind to record the streamName and StreamARN for later use.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Screenshot of AWS console page for creating a Kinesis stream",src:r(45881).Z,width:"966",height:"925"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a Rule"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Refer to ",(0,i.kt)("a",{parentName:"li",href:"../operator-docs/create-rule-in-cumulus"},"Create Rule in Cumulus"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Send a message"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Send a message that makes your schema using python or by your command line."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"streamName")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Collection")," must match the ",(0,i.kt)("inlineCode",{parentName:"li"},"kinesisArn+collection")," defined in the rule that you have created in ",(0,i.kt)("a",{parentName:"li",href:"../operator-docs/create-rule-in-cumulus"},"Step 2"),".")))))}f.isMDXComponent=!0},45881:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cnm_create_kinesis_stream-c6a0bf74658b4d41c2274474add74d65.jpg"}}]);