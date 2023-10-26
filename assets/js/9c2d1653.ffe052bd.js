"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[76806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(67294),i=n(86010),o=n(78425),a=n(39960),s=n(13919),u=n(95999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",c.cardContainer)},n)}function p(e){var t=e.href,n=e.icon,o=e.title,a=e.description;return r.createElement(l,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",c.cardTitle),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",c.cardDescription),title:a},a))}function m(e){var t,n=e.item,i=(0,o.Wl)(n);return i?r.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function d(e){var t,n,i=e.item,a=(0,s.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,o.xz)(null!=(t=i.docId)?t:void 0);return r.createElement(p,{href:i.href,icon:a,title:i.label,description:null!=(n=i.description)?n:null==u?void 0:u.description})}function f(e){var t=e.item;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function y(e){var t=e.className,n=(0,o.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){var t=e.items,n=e.className;if(!t)return r.createElement(y,e);var a=(0,o.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},a.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e}))})))}},1311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>l,toc:()=>m});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(52991),s=["components"],u={id:"apis-introduction",title:"APIs",hide_title:!1},c=void 0,l={unversionedId:"deployment/apis-introduction",id:"version-v18.1.0/deployment/apis-introduction",title:"APIs",description:"Common Distribution APIs",source:"@site/versioned_docs/version-v18.1.0/deployment/apis-introduction.mdx",sourceDirName:"deployment",slug:"/deployment/apis-introduction",permalink:"/cumulus/docs/deployment/apis-introduction",draft:!1,tags:[],version:"v18.1.0",lastUpdatedBy:"jennyhliu",lastUpdatedAt:1698268791,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"apis-introduction",title:"APIs",hide_title:!1},sidebar:"docs",previous:{title:"RDS: Choosing and Configuring Your Database Type",permalink:"/cumulus/docs/deployment/choosing_configuring_rds"},next:{title:"Using the Thin Egress App (TEA) for Cumulus Distribution",permalink:"/cumulus/docs/deployment/thin_egress_app"}},p={},m=[{value:"Common Distribution APIs",id:"common-distribution-apis",level:3},{value:"Cumulus API Customization Use Cases",id:"cumulus-api-customization-use-cases",level:3},{value:"Types of APIs",id:"types-of-apis",level:3}],d={toc:m},f="wrapper";function y(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"common-distribution-apis"},"Common Distribution APIs"),(0,o.kt)("p",null,"When deploying from the Cumulus Deployment Template or a configuration based on that repo, the Thin Egress App (TEA) distribution app will be used by default. However, you have the choice to use the Cumulus Distribution API as well."),(0,o.kt)("h3",{id:"cumulus-api-customization-use-cases"},"Cumulus API Customization Use Cases"),(0,o.kt)("p",null,"Our Cumulus API offers you the flexibility to customize for your DAAC/organization. Below is a list of use cases that may help you with options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.earthdata.nasa.gov/display/CUMULUS/Cumulus+API+with+Launchpad+Authentication"},"Cumulus API w/Launchpad Authentication")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.earthdata.nasa.gov/display/CUMULUS/Using+Cumulus+with+Private+APIs"},"Using Cumulus with Private APIs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.earthdata.nasa.gov/display/CUMULUS/Connecting+to+Cumulus+Private+APIs+via+socks5+proxy"},"Connecting to Cumulus Private APIs via socks5 proxy"))),(0,o.kt)("h3",{id:"types-of-apis"},"Types of APIs"),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);