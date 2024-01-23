"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[94033],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"external-contributions",title:"External Contributions",hide_title:!1},u=void 0,l={unversionedId:"external-contributions/external-contributions",id:"version-v16.1.3/external-contributions/external-contributions",title:"External Contributions",description:"Contributions to Cumulus may be made in the form of PRs to the repositories directly or through externally developed tasks and components. Cumulus is designed as an ecosystem that leverages Terraform deployments and AWS Step Functions to easily integrate external components.",source:"@site/versioned_docs/version-v16.1.3/external-contributions/external-contributions.md",sourceDirName:"external-contributions",slug:"/external-contributions/",permalink:"/cumulus/docs/v16.1.3/external-contributions/",draft:!1,tags:[],version:"v16.1.3",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1706031284,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"external-contributions",title:"External Contributions",hide_title:!1},sidebar:"docs",previous:{title:"External Contributions",permalink:"/cumulus/docs/v16.1.3/category/external-contributions"},next:{title:"About Cookbooks",permalink:"/cumulus/docs/v16.1.3/data-cookbooks/about-cookbooks"}},c={},p=[{value:"Distribution",id:"distribution",level:2},{value:"Operational Cloud Recovery Archive (ORCA)",id:"operational-cloud-recovery-archive-orca",level:2},{value:"Workflow Tasks",id:"workflow-tasks",level:2},{value:"CNM",id:"cnm",level:3},{value:"DMR++ Generation",id:"dmr-generation",level:3}],d={toc:p},m="wrapper";function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contributions to Cumulus may be made in the form of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/CONTRIBUTING.md"},"PRs to the repositories directly")," or through externally developed tasks and components. Cumulus is designed as an ecosystem that leverages Terraform deployments and AWS Step Functions to easily integrate external components."),(0,a.kt)("p",null,"This list may not be exhaustive and represents components that are open source, owned externally,  and that have been tested with the Cumulus system. For more information and contributing guidelines, visit the respective GitHub repositories."),(0,a.kt)("h2",{id:"distribution"},"Distribution"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/asfadmin/thin-egress-app#welcome-to-tea---the-thin-egress-app"},"The ASF Thin Egress App")," is used by Cumulus for distribution. TEA can be deployed ",(0,a.kt)("a",{parentName:"p",href:"../deployment/thin_egress_app"},"with Cumulus")," or as part of other applications to distribute data."),(0,a.kt)("h2",{id:"operational-cloud-recovery-archive-orca"},"Operational Cloud Recovery Archive (ORCA)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-orca/"},"ORCA")," can be ",(0,a.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-orca/docs/developer/deployment-guide/deployment"},"deployed with Cumulus")," to provide a customizable baseline for creating and managing operational backups."),(0,a.kt)("h2",{id:"workflow-tasks"},"Workflow Tasks"),(0,a.kt)("h3",{id:"cnm"},"CNM"),(0,a.kt)("p",null,"PO.DAAC provides two workflow tasks to be used with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/podaac/cloud-notification-message-schema#cumulus-sns-schema"},"Cloud Notification Mechanism (CNM) Schema"),": ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/podaac/cumulus-cnm-to-granule#cnm-to-granule-task"},"CNM to Granule")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/podaac/cumulus-cnm-response-task#cnm-response-task"},"CNM Response"),"."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"../data-cookbooks/cnm-workflow"},"CNM workflow data cookbook")," for an example of how these can be used in a Cumulus ingest workflow."),(0,a.kt)("h3",{id:"dmr-generation"},"DMR++ Generation"),(0,a.kt)("p",null,"GHRC has provided a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ghrcdaac/dmrpp-generator#overview"},"DMR++ Generation")," wokrflow task. This task is meant to be used in conjunction with Cumulus' ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/tree/master/tasks/hyrax-metadata-updates#cumulushyrax-metadata-updates"},"Hyrax Metadata Updates workflow task"),"."))}h.isMDXComponent=!0}}]);