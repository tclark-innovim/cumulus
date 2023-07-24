"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[62523],{3905:(o,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var n=t(67294);function r(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function a(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.push.apply(t,n)}return t}function i(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(o,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}))}return o}function l(o,e){if(null==o)return{};var t,n,r=function(o,e){if(null==o)return{};var t,n,r={},a=Object.keys(o);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(r[t]=o[t]);return r}(o,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(o,t)&&(r[t]=o[t])}return r}var s=n.createContext({}),u=function(o){var e=n.useContext(s),t=e;return o&&(t="function"==typeof o?o(e):i(i({},e),o)),t},c=function(o){var e=u(o.components);return n.createElement(s.Provider,{value:e},o.children)},d="mdxType",p={inlineCode:"code",wrapper:function(o){var e=o.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(o,e){var t=o.components,r=o.mdxType,a=o.originalType,s=o.parentName,c=l(o,["components","mdxType","originalType","parentName"]),d=u(t),k=r,f=d["".concat(s,".").concat(k)]||d[k]||p[k]||a;return t?n.createElement(f,i(i({ref:e},c),{},{components:t})):n.createElement(f,i({ref:e},c))}));function f(o,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof o||r){var a=t.length,i=new Array(a);i[0]=k;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=o,l[d]="string"==typeof o?o:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},73185:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},s=void 0,u={unversionedId:"data-cookbooks/about-cookbooks",id:"version-v15.0.2/data-cookbooks/about-cookbooks",title:"About Cookbooks",description:"Introduction",source:"@site/versioned_docs/version-v15.0.2/data-cookbooks/about-cookbooks.md",sourceDirName:"data-cookbooks",slug:"/data-cookbooks/about-cookbooks",permalink:"/cumulus/docs/v15.0.2/data-cookbooks/about-cookbooks",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"about-cookbooks",title:"About Cookbooks",hide_title:!1},sidebar:"Data Cookbooks",next:{title:"HelloWorld Workflow",permalink:"/cumulus/docs/v15.0.2/data-cookbooks/hello-world"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Adding a page",id:"adding-a-page",level:2},{value:"More about workflows",id:"more-about-workflows",level:2}],p={toc:d},k="wrapper";function f(o){var e=o.components,t=(0,r.Z)(o,i);return(0,a.kt)(k,(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The following data cookbooks are documents containing examples and explanations of workflows in the Cumulus framework. Additionally, the following data cookbooks should serve to help unify an institution/user group on a set of terms."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"The data cookbooks assume you can configure providers, collections, and rules to run workflows. Visit ",(0,a.kt)("a",{parentName:"p",href:"../configuration/data-management-types"},"Cumulus data management types")," for information on how to configure Cumulus data management types."),(0,a.kt)("h2",{id:"adding-a-page"},"Adding a page"),(0,a.kt)("p",null,'As shown in detail in the "Add a New Page and Sidebars" section in ',(0,a.kt)("a",{parentName:"p",href:"docs-how-to.md"},"Cumulus Docs: How To's"),", you can add a new page to the data cookbook by creating a markdown (",(0,a.kt)("inlineCode",{parentName:"p"},".md"),") file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/data-cookbooks")," directory. The new page can then be linked to the sidebar by adding it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Data-Cookbooks")," object in the ",(0,a.kt)("inlineCode",{parentName:"p"},"website/sidebar.json")," file as ",(0,a.kt)("inlineCode",{parentName:"p"},"data-cookbooks/${id}"),"."),(0,a.kt)("h2",{id:"more-about-workflows"},"More about workflows"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/workflows/"},"Workflow general information")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/workflows/input_output"},"Input & Output")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/workflows/developing-workflow-tasks"},"Developing Workflow Tasks")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/v15.0.2/workflows/workflow-configuration-how-to"},"Workflow Configuration How-to's")))}f.isMDXComponent=!0}}]);