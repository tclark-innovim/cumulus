"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[73600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",hide_title:!1},p=void 0,s={unversionedId:"integrator-guide/workflow-ts-failed-step",id:"version-v17.0.0/integrator-guide/workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",description:"Steps",source:"@site/versioned_docs/version-v17.0.0/integrator-guide/workflow-ts-failed-step.md",sourceDirName:"integrator-guide",slug:"/integrator-guide/workflow-ts-failed-step",permalink:"/cumulus/docs/integrator-guide/workflow-ts-failed-step",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1691884278,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{id:"workflow-ts-failed-step",title:"Workflow - Troubleshoot Failed Step(s)",hide_title:!1},sidebar:"docs",previous:{title:"Workflow - Add New Lambda",permalink:"/cumulus/docs/integrator-guide/workflow-add-new-lambda"},next:{title:"Upgrade Notes",permalink:"/cumulus/docs/category/upgrade-notes"}},u={},c=[{value:"Steps",id:"steps",level:2}],d={toc:c},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Locate Step")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Cumulus")," dashboard"),(0,a.kt)("li",{parentName:"ul"},"Find the granule"),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Executions")," to determine the failed step")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Investigate in Cloudwatch")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloudwatch")),(0,a.kt)("li",{parentName:"ul"},"Locate lambda"),(0,a.kt)("li",{parentName:"ul"},"Search ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloudwatch")," logs")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Recreate Error"),(0,a.kt)("p",{parentName:"li"},"In your sandbox environment, try to recreate the error.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Resolution"))))}m.isMDXComponent=!0}}]);