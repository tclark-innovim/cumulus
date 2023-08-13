"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[75997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),c=o,f=d["".concat(u,".").concat(c)]||d[c]||m[c]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},42282:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],p={id:"upgrade_tf_version_0.13.6",title:"Upgrade to TF version 0.13.6",hide_title:!1},u=void 0,l={unversionedId:"upgrade-notes/upgrade_tf_version_0.13.6",id:"version-v17.0.0/upgrade-notes/upgrade_tf_version_0.13.6",title:"Upgrade to TF version 0.13.6",description:"Background",source:"@site/versioned_docs/version-v17.0.0/upgrade-notes/upgrading-tf-version-0.13.6.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/upgrade_tf_version_0.13.6",permalink:"/cumulus/docs/upgrade-notes/upgrade_tf_version_0.13.6",draft:!1,tags:[],version:"v17.0.0",lastUpdatedBy:"Jonathan Kovarik",lastUpdatedAt:1691884278,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{id:"upgrade_tf_version_0.13.6",title:"Upgrade to TF version 0.13.6",hide_title:!1},sidebar:"docs",previous:{title:"Migrate TEA deployment to standalone module",permalink:"/cumulus/docs/upgrade-notes/migrate_tea_standalone"},next:{title:"Upgrade to RDS release",permalink:"/cumulus/docs/upgrade-notes/upgrade-rds"}},s={},d=[{value:"Background",id:"background",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Upgrade your deployment code",id:"upgrade-your-deployment-code",level:3},{value:"Upgrade your deployment",id:"upgrade-your-deployment",level:3}],m={toc:d},c="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"Cumulus pins its support to a specific version of Terraform ",(0,a.kt)("a",{parentName:"p",href:"/cumulus/docs/deployment/#install-terraform"},"see: deployment documentation"),". The reason for only supporting one specific Terraform version at a time is to avoid deployment errors than can be caused by deploying to the same target with different Terraform versions."),(0,a.kt)("p",null,"Cumulus is upgrading its supported version of Terraform from ",(0,a.kt)("strong",{parentName:"p"},"0.12.12")," to ",(0,a.kt)("strong",{parentName:"p"},"0.13.6"),". This document contains instructions on how to perform the upgrade for your deployments."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Follow the ",(0,a.kt)("a",{parentName:"li",href:"https://www.terraform.io/upgrade-guides/0-13.html#before-you-upgrade"},"Terraform guidance for what to do before upgrading"),", notably ensuring that you have no pending changes to your Cumulus deployments before proceeding.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You should do a ",(0,a.kt)("inlineCode",{parentName:"li"},"terraform plan")," to see if you have any pending changes for your deployment (for both the ",(0,a.kt)("inlineCode",{parentName:"li"},"data-persistence-tf")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"cumulus-tf")," modules), and if so, run a ",(0,a.kt)("inlineCode",{parentName:"li"},"terraform apply")," ",(0,a.kt)("strong",{parentName:"li"},"before doing the upgrade to Terraform 0.13.6")))),(0,a.kt)("li",{parentName:"ul"},"Review the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hashicorp/terraform/blob/v0.13/CHANGELOG.md"},"Terraform v0.13 release notes")," to prepare for any breaking changes that may affect your custom deployment code. ",(0,a.kt)("strong",{parentName:"li"},"Cumulus' deployment code has already been updated for compatibility with version 0.13"),"."),(0,a.kt)("li",{parentName:"ul"},"Install Terraform version 0.13.6. We recommend using Terraform Version Manager ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tfutils/tfenv"},"tfenv")," to manage your installed versons of Terraform, but this is not required.")),(0,a.kt)("h3",{id:"upgrade-your-deployment-code"},"Upgrade your deployment code"),(0,a.kt)("p",null,"Terraform 0.13 does not support some of the syntax from previous Terraform versions, so you need to upgrade your deployment code for compatibility."),(0,a.kt)("p",null,"Terraform provides a ",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/docs/commands/0.13upgrade.html"},(0,a.kt)("inlineCode",{parentName:"a"},"0.13upgrade")," command")," as part of version 0.13 to handle automatically upgrading your code. ",(0,a.kt)("strong",{parentName:"p"},"Make sure to check out the ",(0,a.kt)("a",{parentName:"strong",href:"https://www.terraform.io/docs/commands/0.13upgrade.html#batch-usage"},"documentation on batch usage of ",(0,a.kt)("inlineCode",{parentName:"a"},"0.13upgrade")),", which will allow you to upgrade all of your Terraform code with one command"),"."),(0,a.kt)("p",null,"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"0.13upgrade")," command until you have no more necessary updates to your deployment code."),(0,a.kt)("h3",{id:"upgrade-your-deployment"},"Upgrade your deployment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Ensure that you are running Terraform 0.13.6 by running ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform --version"),". If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"tfenv"),", you can switch versions by running ",(0,a.kt)("inlineCode",{parentName:"p"},"tfenv use 0.13.6"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"data-persistence-tf")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cumulus-tf")," directories, take the following steps:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init --reconfigure"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"--reconfigure")," flag is required, otherwise you might see an error like:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},'Error: Failed to decode current backend config\n\nThe backend configuration created by the most recent run of "terraform init"\ncould not be decoded: unsupported attribute "lock_table". The configuration\nmay have been initialized by an earlier version that used an incompatible\nconfiguration structure. Run "terraform init -reconfigure" to force\nre-initialization of the backend.\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply")," to perform a deployment."),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Even if Terraform says that no resource changes are pending, running the ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," using Terraform version 0.13.6 will modify your backend state from version 0.12.12 to version 0.13.6 ",(0,a.kt)("strong",{parentName:"p"},"without requiring approval"),". Updating the backend state is a necessary part of the version 0.13.6 upgrade, but it is not completely transparent.")))))))}f.isMDXComponent=!0}}]);