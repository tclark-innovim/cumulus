"use strict";(self.webpackChunk_cumulus_website=self.webpackChunk_cumulus_website||[]).push([[40682],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},49044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={id:"upgrade-rds",title:"Upgrade to RDS release",hide_title:!1},s=void 0,u={unversionedId:"upgrade-notes/upgrade-rds",id:"version-v18.0.0/upgrade-notes/upgrade-rds",title:"Upgrade to RDS release",description:"Background",source:"@site/versioned_docs/version-v18.0.0/upgrade-notes/upgrade-rds.md",sourceDirName:"upgrade-notes",slug:"/upgrade-notes/upgrade-rds",permalink:"/cumulus/docs/v18.0.0/upgrade-notes/upgrade-rds",draft:!1,tags:[],version:"v18.0.0",lastUpdatedBy:"Naga Nages",lastUpdatedAt:1693496758,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{id:"upgrade-rds",title:"Upgrade to RDS release",hide_title:!1},sidebar:"docs",previous:{title:"Upgrade to TF version 1.5.3",permalink:"/cumulus/docs/v18.0.0/upgrade-notes/upgrade_tf_version_1.5.3"},next:{title:"Migrate from TEA deployment to Cumulus Distribution",permalink:"/cumulus/docs/v18.0.0/upgrade-notes/cumulus_distribution_migration"}},p={},m=[{value:"Background",id:"background",level:2},{value:"Upgrade steps",id:"upgrade-steps",level:2},{value:"1. Deploy a new RDS cluster",id:"1-deploy-a-new-rds-cluster",level:3},{value:"2. Deploy your data-persistence module",id:"2-deploy-your-data-persistence-module",level:3},{value:"3. Deploy and run data-migration1",id:"3-deploy-and-run-data-migration1",level:3},{value:"4. Deploy Cumulus module",id:"4-deploy-cumulus-module",level:3},{value:"5. Run the second data migration",id:"5-run-the-second-data-migration",level:3},{value:"postgres-migration-async-operation payload parameters",id:"postgres-migration-async-operation-payload-parameters",level:4},{value:"6. Run validation tool",id:"6-run-validation-tool",level:3},{value:"Direct Lambda invocation",id:"direct-lambda-invocation",level:4},{value:"API invocation",id:"api-invocation",level:4},{value:"Payload parameters",id:"payload-parameters",level:4}],d={toc:m},c="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"This release of Cumulus (9.0.0) integrates with RDS and creates a new PostgreSQL database for archiving Cumulus data (e.g. granules, files, executions)."),(0,o.kt)("h2",{id:"upgrade-steps"},"Upgrade steps"),(0,o.kt)("p",null,"Follow the steps outlined below in precisely this order to upgrade your deployment and run the data migrations."),(0,o.kt)("h3",{id:"1-deploy-a-new-rds-cluster"},"1. Deploy a new RDS cluster"),(0,o.kt)("p",null,"Cumulus deployments require an Aurora ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL 10.2")," compatible database to be provided in addition to the existing DynamoDB/ElasticSearch backend with the eventual goal of utilizing the PostgreSQL database as the primary data store for Cumulus."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Users are ",(0,o.kt)("em",{parentName:"p"},"strongly")," encouraged to plan for and implement a database solution that scales to their use requirements, meets their security posture and maintenance needs and/or allows for multi-tenant cluster usage.")),(0,o.kt)("p",null,"Refer to the docs on ",(0,o.kt)("a",{parentName:"p",href:"/cumulus/docs/v18.0.0/deployment/postgres_database_deployment"},"how to deploy a new RDS cluster"),"."),(0,o.kt)("h3",{id:"2-deploy-your-data-persistence-module"},"2. Deploy your data-persistence module"),(0,o.kt)("p",null,"The following new variables have been added to the data-persistence module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vpc_id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"permissions_boundary_arn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rds_user_access_secret_arn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rds_security_group_id"))),(0,o.kt)("p",null,"You will need to update your data-persistence module to include these new variables related to RDS. See the configuration in our template-deploy repo for reference: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy/tree/master/data-persistence-tf"},"https://github.com/nasa/cumulus-template-deploy/tree/master/data-persistence-tf")),(0,o.kt)("p",null,"Then you can re-deploy your data-persistence module as usual:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,o.kt)("h3",{id:"3-deploy-and-run-data-migration1"},"3. Deploy and run data-migration1"),(0,o.kt)("p",null,"You will need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"data-migration1-tf")," directory. See the configuration in our template-deploy repo for reference: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy/tree/master/data-migration1-tf"},"https://github.com/nasa/cumulus-template-deploy/tree/master/data-migration1-tf")),(0,o.kt)("p",null,"Navigate to the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"data-migration1-tf")," and copy the following ",(0,o.kt)("inlineCode",{parentName:"p"},".example")," files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cp terraform.tf.example terraform.tf\ncp terraform.tfvars.example terraform.tfvars\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tf"),", configure your remote state settings by replacing the appropriate value for ",(0,o.kt)("inlineCode",{parentName:"p"},"PREFIX"),"."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," replace the appropriate values for the following variables:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prefix")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data_persistence_remote_state_config")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"permissions_boundary_arn")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lambda_subnet_ids")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"vpc_id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"provider_kms_key_id"))),(0,o.kt)("p",null,"These values should match the values used for your Cumulus Core deployment."),(0,o.kt)("p",null,"After replacing those values, run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init"),".\nThe output should resemble the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Initializing modules...\n\nInitializing the backend...\n\nInitializing provider plugins...\n- Using previously-installed hashicorp/aws v3.34.0\n- terraform.io/builtin/terraform is built in to Terraform\n\nTerraform has been successfully initialized!\n")),(0,o.kt)("p",null,"Run  ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply")," to deploy ",(0,o.kt)("inlineCode",{parentName:"p"},"data-migration1")," and type ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," when prompted to create those resources.\nOn success, you will see output like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Apply complete! Resources: 2 added, 0 changed, 0 destroyed.\n")),(0,o.kt)("p",null,"Once the deployment is complete, you can use the AWS Console or CLI to invoke the Lambda and start the data migration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws lambda invoke --function-name $PREFIX-data-migration1 $OUTFILE\n")),(0,o.kt)("p",null,"where"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PREFIX")," is the ",(0,o.kt)("inlineCode",{parentName:"li"},"prefix")," value used to deploy data-migration1-tf"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OUTFILE")," (",(0,o.kt)("strong",{parentName:"li"},"optional"),") is the filepath where the Lambda output (data-migration1 summary) will be saved.")),(0,o.kt)("h3",{id:"4-deploy-cumulus-module"},"4. Deploy Cumulus module"),(0,o.kt)("p",null,"The following variables were added to the Cumulus module"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rds_security_group")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rds_user_access_secret_arn"))),(0,o.kt)("p",null,"For reference on how to set these values, see our template-deploy repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-template-deploy/tree/master/cumulus-tf"},"https://github.com/nasa/cumulus-template-deploy/tree/master/cumulus-tf")),(0,o.kt)("p",null,"Instructions on deploying the Cumulus module can be found ",(0,o.kt)("a",{parentName:"p",href:"/cumulus/docs/v18.0.0/deployment/"},"here"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"cumulus")," module will create resources including the following relevant resources for the data migration:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"${PREFIX}-data-migration2")," Lambda"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"${PREFIX}-postgres-migration-async-operation")," Lambda")),(0,o.kt)("h3",{id:"5-run-the-second-data-migration"},"5. Run the second data migration"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please read this entire section thoroughly before proceeding to run the second data migration. In particular, pay close attention to the notes about parallelism options in order to achieve desired data migration performance while avoiding database outages and data loss.")),(0,o.kt)("p",null,"This second data migration process can be run by invoking the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"${PREFIX}-postgres-migration-async-operation")," Lambda included in the Cumulus module deployment.\nThis Lambda starts an asynchronous operation which runs as an ECS task to run the migration."),(0,o.kt)("p",null,"To invoke the Lambda and start the data migration, you can use the AWS Console or CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws lambda invoke --function-name $PREFIX-postgres-migration-async-operation \\\n  --payload $PAYLOAD $OUTFILE\n")),(0,o.kt)("p",null,"where"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PAYLOAD")," (",(0,o.kt)("strong",{parentName:"p"},"optional"),") is a base64 encoded JSON object. No payload is required to run this data migration, but configuring some of the payload options for parallelism can significantly decrease the duration of the data migration. For reference, in our testing using a value of ",(0,o.kt)("inlineCode",{parentName:"p"},"50")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"executionMigrationParams.parallelScanSegments")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"executionMigrationParams.writeConcurrency")," migrated ~900,000 execution records in 45 minutes and did not spike Aurora PostgreSQL database capacity above 2 ACUs. See the ",(0,o.kt)("a",{parentName:"p",href:"#postgres-migration-async-operation-payload-parameters"},"full description of payload parameters below")," for how to configure the parallelism of the migration. An example payload configuration might look like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'--payload $(echo \'{"executionMigrationParams": { "parallelScanSegments": 50,\n"writeConcurrency": 50 }}\' | base64)\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PREFIX")," is your Cumulus deployment prefix.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"OUTFILE")," (",(0,o.kt)("strong",{parentName:"p"},"optional"),") is the filepath where the Lambda output (data-migration2 summary) will be saved."))),(0,o.kt)("p",null,"The Lambda will trigger an Async Operation and return an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"id":"7ccaed31-756b-40bb-855d-e5e6d00dc4b3","status":"RUNNING",\n"taskArn":"arn:aws:ecs:us-east-1:AWSID:task/$PREFIX-CumulusECSCluster/123456789",\n"description":"Data Migration 2 Lambda ECS Run","operationType":"Data Migration"}\n')),(0,o.kt)("p",null,"which you can then query the Async Operations ",(0,o.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/#retrieve-async-operation"},"API Endpoint")," for the output or status of your request. If you want to directly observe the progress of the migration as it runs, you can view the CloudWatch logs for your async operations (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"PREFIX-AsyncOperationEcsLogs"),")."),(0,o.kt)("p",null,"Also, each run of these data migration will write a timestamped log of any errors to the following keys in the configured ",(0,o.kt)("inlineCode",{parentName:"p"},"system_bucket")," for your deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<prefix>-data-migration2-execution-errors-${timestamp}.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<prefix>-data-migration2-granulesAndFiles-errors-${timestamp}.json"))),(0,o.kt)("h4",{id:"postgres-migration-async-operation-payload-parameters"},"postgres-migration-async-operation payload parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"migrationsList"),(0,o.kt)("td",{parentName:"tr",align:null},"string[]"),(0,o.kt)("td",{parentName:"tr",align:null},"An array containing the names of the data types that you want to migrate. For the first run of this migration, you need to run at least the ",(0,o.kt)("inlineCode",{parentName:"td"},"executions")," migration, since the other data types may need to refer to execution records existing in PostgreSQL."),(0,o.kt)("td",{parentName:"tr",align:null},"['executions', 'granules', 'pdrs']")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"executionMigrationParams"),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Options for the executions data migration"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"executionMigrationParams.parallelScanSegments"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan"},"parallel scan")," segments to use for executions data migration. The higher this number, the less time it will take to migrate all of your data, but also the more load that will be put on your PostgreSQL database."),(0,o.kt)("td",{parentName:"tr",align:null},"20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"executionMigrationParams.parallelScanLimit"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of records to return per each ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan"},"parallel scan")," of a segment. This option was mostly provided for testing and it is not recommended to set a value."),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"executionMigrationParams.writeConcurrency"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of execution records to write concurrently to PostgreSQL. The higher this number, the less time it will take to migrate all of your data, but also the more load that will be put on your PostgreSQL database."),(0,o.kt)("td",{parentName:"tr",align:null},"10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"executionMigrationParams.loggingInterval"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"How many records to migrate before printing a log message on the status of the migration."),(0,o.kt)("td",{parentName:"tr",align:null},"100")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"granuleMigrationParams"),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Options for the granules data migration"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"granuleMigrationParams.parallelScanSegments"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan"},"parallel scan")," segments to use for granules data migration. The higher this number, the less time it will take to migrate all of your data, but also the more load that will be put on your PostgreSQL database."),(0,o.kt)("td",{parentName:"tr",align:null},"20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"granuleMigrationParams.parallelScanLimit"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of records to return per each ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan"},"parallel scan")," of a segment. This option was mostly provided for testing and it is not recommended to set a value."),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"granuleMigrationParams.writeConcurrency"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of granule records to write concurrently to PostgreSQL. The higher this number, the less time it will take to migrate all of your data, but also the more load that will be put on your PostgreSQL database."),(0,o.kt)("td",{parentName:"tr",align:null},"10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"granuleMigrationParams.loggingInterval"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"How many records to migrate before printing a log message on the status of the migration."),(0,o.kt)("td",{parentName:"tr",align:null},"100")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"granuleMigrationParams.migrateAndOverwrite"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Set to 'true' to set migration to overwrite ",(0,o.kt)("em",{parentName:"td"},"existing")," granule and file records in the PostgreSQL database (subject to PostgreSQL overwrite constraints).  Cannot be used with ",(0,o.kt)("inlineCode",{parentName:"td"},"migrateOnlyFiles")),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pdrMigrationParams"),(0,o.kt)("td",{parentName:"tr",align:null},"Object"),(0,o.kt)("td",{parentName:"tr",align:null},"Options for the PDRs data migration"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pdrMigrationParams.parallelScanSegments"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan"},"parallel scan")," segments to use for PDRs data migration. The higher this number, the less time it will take to migrate all of your data, but also the more load that will be put on your PostgreSQL database."),(0,o.kt)("td",{parentName:"tr",align:null},"20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pdrMigrationParams.parallelScanLimit"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of records to return per each ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan"},"parallel scan")," of a segment. This option was mostly provided for testing and it is not recommended to set a value."),(0,o.kt)("td",{parentName:"tr",align:null},"none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pdrMigrationParams.writeConcurrency"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The maximum number of PDR records to write concurrently to PostgreSQL. The higher this number, the less time it will take to migrate all of your data, but also the more load that will be put on your PostgreSQL database."),(0,o.kt)("td",{parentName:"tr",align:null},"10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pdrMigrationParams.loggingInterval"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"How many records to migrate before printing a log message on the status of the migration."),(0,o.kt)("td",{parentName:"tr",align:null},"100")))),(0,o.kt)("h3",{id:"6-run-validation-tool"},"6. Run validation tool"),(0,o.kt)("p",null,"We have provided a validation tool which provides a report regarding your data migration. For more information about this tool, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/lambdas/postgres-migration-count-tool/README.md"},"Postgres Migration Count Tool README"),"."),(0,o.kt)("p",null,"This tool can be run in the following two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Through direct Lambda invocation"),(0,o.kt)("li",{parentName:"ul"},"Through API invocation")),(0,o.kt)("h4",{id:"direct-lambda-invocation"},"Direct Lambda invocation"),(0,o.kt)("p",null,"Invoking the Lambda on the command line looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws lambda invoke --function-name $PREFIX-postgres-migration-count-tool \\\n  --payload $PAYLOAD $OUTFILE\n")),(0,o.kt)("p",null,"where"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PAYLOAD")," is a base64 encoded JSON object. For example,")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'--payload $(echo \'{"reportBucket": "someBucket", "reportPath": "somePath",\n"cutoffSeconds": 60, "dbConcurrency": 20, "dbMaxPool": 20}\' | base64)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"OUTFILE")," is the filepath to store the output from the Lambda."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PREFIX")," is your Cumulus deployment prefix.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This will invoke the Lambda synchronously. Depending on your data holdings, the execution time of this Lambda may exceed the 15 minute AWS Lambda limit. ",(0,o.kt)("strong",{parentName:"p"},"If this occurs, you will need to invoke the tool via the API as an asynchronous operation as described below."))),(0,o.kt)("h4",{id:"api-invocation"},"API invocation"),(0,o.kt)("p",null,"Invoking the API on the command line looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST https://$API_URL/dev/migrationCounts -d 'reportBucket=someBucket&\nreportPath=someReportPath&cutoffSeconds=60&dbConcurrency=20&dbMaxPool=20' --header\n'Authorization: Bearer $TOKEN'\n")),(0,o.kt)("p",null,"In this instance, the API will trigger an Async Operation and return an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"id":"7ccaed31-756b-40bb-855d-e5e6d00dc4b3","status":"RUNNING",\n"taskArn":"arn:aws:ecs:us-east-1:AWSID:task/$PREFIX-CumulusECSCluster/123456789",\n"description":"Migration Count Tool ECS Run","operationType":"Migration Count Report"}\n')),(0,o.kt)("p",null,"which you can then query the Async Operations ",(0,o.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-api/#retrieve-async-operation"},"API Endpoint")," for the output or status of your request."),(0,o.kt)("h4",{id:"payload-parameters"},"Payload parameters"),(0,o.kt)("p",null,"The following optional parameters are used by this tool:\n| Variable      | Type   | Description                                                                                                                                                                                       | Default |\n|---------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|\n| reportBucket  | string | Sets the bucket used for reporting. If this argument is used, a ",(0,o.kt)("inlineCode",{parentName:"p"},"reportPath")," must be set to generate a report.                                                                                    |         |\n| reportPath    | string | Sets the path location for the tool to write a copy of the Lambda payload to S3                                                                                                                   |         |\n| cutoffSeconds | number | Number of seconds prior to this execution to 'cutoff' reconciliation queries. This allows in-progress/other in-flight operations time to complete and propagate to Elasticsearch/postgres. | 3600    |\n| dbConcurrency | number | Sets max number of parallel collections reports the script will run at a time.                                                                                                                    | 20      |\n| dbMaxPool     | number | Sets the maximum number of connections the database pool has available. Modifying this may result in unexpected failures.                                                                         | 20      |"))}g.isMDXComponent=!0}}]);