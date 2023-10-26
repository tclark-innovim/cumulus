"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[87657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},54257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={id:"locating-access-logs",title:"Locating S3 Access Logs",hide_title:!1},s=void 0,l={unversionedId:"operator-docs/locating-access-logs",id:"version-v18.1.0/operator-docs/locating-access-logs",title:"Locating S3 Access Logs",description:"When enabling S3 Access Logs for EMS Reporting you configured a TargetBucket and TargetPrefix.  Inside the TargetBucket at the TargetPrefix is where you will find the raw S3 access logs.",source:"@site/versioned_docs/version-v18.1.0/operator-docs/locating-access-logs.md",sourceDirName:"operator-docs",slug:"/operator-docs/locating-access-logs",permalink:"/cumulus/docs/operator-docs/locating-access-logs",draft:!1,tags:[],version:"v18.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1698268791,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"locating-access-logs",title:"Locating S3 Access Logs",hide_title:!1},sidebar:"docs",previous:{title:"Configuration",permalink:"/cumulus/docs/category/configuration-1"},next:{title:"Cumulus Data Management Types",permalink:"/cumulus/docs/configuration/data-management-types"}},p={},u=[],d={toc:u},g="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"../configuration/server_access_logging"},"enabling S3 Access Logs")," for EMS Reporting you configured a ",(0,a.kt)("inlineCode",{parentName:"p"},"TargetBucket")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TargetPrefix"),".  Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"TargetBucket")," at the ",(0,a.kt)("inlineCode",{parentName:"p"},"TargetPrefix")," is where you will find the raw S3 access logs."),(0,a.kt)("p",null,"In a standard deployment, this will be your stack's ",(0,a.kt)("inlineCode",{parentName:"p"},"<internal bucket name>")," and a key prefix of ",(0,a.kt)("inlineCode",{parentName:"p"},"<stack>/ems-distribution/s3-server-access-logs/")))}f.isMDXComponent=!0}}]);