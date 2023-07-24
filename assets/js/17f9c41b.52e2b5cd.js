"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[19832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18227:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),s=["components"],i={id:"choosing_configuring_rds",title:"Choosing and Configuration Your RDS Database",hide_title:!1},l=void 0,u={unversionedId:"deployment/choosing_configuring_rds",id:"version-v15.0.2/deployment/choosing_configuring_rds",title:"Choosing and Configuration Your RDS Database",description:"Background",source:"@site/versioned_docs/version-v15.0.2/deployment/choosing_configuring_rds.md",sourceDirName:"deployment",slug:"/deployment/choosing_configuring_rds",permalink:"/cumulus/docs/v15.0.2/deployment/choosing_configuring_rds",draft:!1,tags:[],version:"v15.0.2",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1682721685,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{id:"choosing_configuring_rds",title:"Choosing and Configuration Your RDS Database",hide_title:!1},sidebar:"docs",previous:{title:"Terraform Best Practices",permalink:"/cumulus/docs/v15.0.2/deployment/terraform-best-practices"},next:{title:"PostgreSQL Database Deployment",permalink:"/cumulus/docs/v15.0.2/deployment/postgres_database_deployment"}},c={},d=[{value:"Background",id:"background",level:2},{value:"Provisioned vs. Serverless",id:"provisioned-vs-serverless",level:2},{value:"Recommended Scaling Configuration for Aurora Serverless",id:"recommended-scaling-configuration-for-aurora-serverless",level:2},{value:"Cumulus Serverless RDS Cluster Module",id:"cumulus-serverless-rds-cluster-module",level:3}],p={toc:d},m="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"Cumulus uses a ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," database as its primary data store\nfor operational and archive records (e.g. collections, granules, etc). The Cumulus\ncore deployment code expects this database to be provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/rds/index.html"},"AWS RDS")," service; however, it is agnostic about the type of the RDS database."),(0,o.kt)("p",null,"RDS databases are broadly divided into two types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Provisioned"),": Databases with a fixed capacity in terms of CPU and memory capacity. You can find\na list of the available database instance sizes in ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html"},"this AWS documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Serverless"),": Databases that can scale their CPU and memory capacity up and down in response to database load. ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"},"Amazon Aurora")," is the service which provides serverless RDS databases.")),(0,o.kt)("h2",{id:"provisioned-vs-serverless"},"Provisioned vs. Serverless"),(0,o.kt)("p",null,"Generally speaking, the advantage of provisioned databases is that they ",(0,o.kt)("strong",{parentName:"p"},"don't have to scale"),".\nAs soon as they are deployed, they have the full capacity of your chosen instance size and are\nready for ingest operations. Of course, this advantage is also a downside: if you ever have a\nsudden spike in database traffic, your database ",(0,o.kt)("strong",{parentName:"p"},"can't scale")," to accommodate that increased\nload."),(0,o.kt)("p",null,"On the other hand, serverless databases are designed precisely to ",(0,o.kt)("strong",{parentName:"p"},"scale in response to load"),".\nWhile the ability of serverless databases to scale is quite useful, there can be complexity in\nsetting the scaling configuration to achieve the best results. Recommendations for Aurora serverless database scaling configuration are provided in the section ",(0,o.kt)("a",{parentName:"p",href:"#recommended-scaling-configuration-for-aurora-serverless"},"below"),"."),(0,o.kt)("p",null,"To decide whether a provisioned or a serverless database is appropriate for your ingest\noperations, you should consider the pattern of your data ingests."),(0,o.kt)("p",null,"If you have a fairly steady, continuous rate of data ingest, then a provisioned database\nmay be appropriate because your database capacity needs should be consistent and the lack of\nscaling shouldn't be an issue."),(0,o.kt)("p",null,"If you have occasional, bursty ingests of data where you go from ingesting very little data\nto suddenly ingesting quite a lot then a serverless database may be a better choice because it\nwill be able to handle the spikes in your database load."),(0,o.kt)("h2",{id:"recommended-scaling-configuration-for-aurora-serverless"},"Recommended Scaling Configuration for Aurora Serverless"),(0,o.kt)("p",null,"If you are going to use an Aurora Serverless RDS database, we recommend the following scaling recommendations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the autoscaling timeout to 1 minute (currently the lowest allowed value)"),(0,o.kt)("li",{parentName:"ul"},"Set the database to force capacity change if the autoscaling timeout is reached")),(0,o.kt)("p",null,"The reason for these recommendations requires an understanding of Aurora Serverless scaling.\nAurora Serverless scaling works as described in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html"},"the Amazon Aurora documentation"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When it does need to perform a scaling operation, Aurora Serverless v1 first tries to identify a scaling point, a moment when no queries are being processed.")),(0,o.kt)("p",null,'However, during periods of heavy ingest, Cumulus will be continuously writing granules and other\nrecords to the database, so a "scaling point" will never be reached. This is where the\n"autoscaling timeout" setting becomes important. The "autoscaling timeout" is the amount of time\nthat Aurora will wait to find a "scaling point" before giving up.'),(0,o.kt)("p",null,'So with the above recommended settings, we are telling Aurora to only wait for a "scaling point"\nfor 1 minute and that if a "scaling point" cannot be found in that time, then we should\n',(0,o.kt)("strong",{parentName:"p"},"force the database to scale anyway"),". These settings effectively make the Aurora Serverless database scale as quickly as possible in response to increased database load."),(0,o.kt)("p",null,"With forced scaling on databases, there is a consequence that some running queries or transactions\nmay be dropped. However, Cumulus write operations are written with automatic retry logic, so any\nwrite operations that failed due to database scaling should be retried successfully."),(0,o.kt)("h3",{id:"cumulus-serverless-rds-cluster-module"},"Cumulus Serverless RDS Cluster Module"),(0,o.kt)("p",null,"Cumulus provides a Terraform module that will deploy an Aurora Serverless RDS cluster. If you are\nusing this module to create your RDS cluster, you can configure the autoscaling timeout action,\nthe cluster minimum and maximum capacity, and more as seen in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/6f104a89457be453809825ac2b4ac46985239365/tf-modules/cumulus-rds-tf/variables.tf"},"supported variables for the module"),"."),(0,o.kt)("p",null,"Unfortunately, Terraform currently doesn't allow specifying the autoscaling timeout itself, so\nthat value will have to be manually configured in the AWS console or CLI."))}h.isMDXComponent=!0}}]);