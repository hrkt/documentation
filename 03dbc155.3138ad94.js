(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return g}));var n=a(1),r=a(9),o=(a(0),a(349)),i=a(348),l=a(354),c=a(358),s=a(361),u=a(362),p=a(353),b={last_modified_on:"2021-08-29",$schema:"/.meta/.schemas/guides.json",title:"Migrate your application from Heroku to AWS",description:"Tutorial on how to migrate your application from Heroku to AWS with a PostgreSQL database",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","cloud_provider: aws"],hide_pagination:!0},m={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Migrate your application from Heroku to AWS",description:"Tutorial on how to migrate your application from Heroku to AWS with a PostgreSQL database",permalink:"/guides/tutorial/migrate-your-application-from-heroku-to-aws",readingTime:"5 min read",source:"@site/guides/tutorial/migrate-your-application-from-heroku-to-aws.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"cloud_provider: aws",permalink:"/guides/tags/cloud-provider-aws"}],title:"Migrate your application from Heroku to AWS",truncated:!1,prevItem:{title:"Microservices",permalink:"/guides/advanced/microservices"},nextItem:{title:"Mono repository",permalink:"/guides/advanced/monorepository"}},d=[{value:"Deploying the sample application to Heroku",id:"deploying-the-sample-application-to-heroku",children:[]},{value:"Migrating the application from Heroku to AWS",id:"migrating-the-application-from-heroku-to-aws",children:[{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Create a new environment",id:"create-a-new-environment",children:[]},{value:"Create a new application",id:"create-a-new-application",children:[]},{value:"Deploy the app on Qovery",id:"deploy-the-app-on-qovery",children:[]}]},{value:"What&#39;s next",id:"whats-next",children:[]}],h={rightToc:d};function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial describes how to migrate your web application running on Heroku to AWS with Qovery. In the article, you learn how to\nmigrate a Node.js application connected to Heroku Postgres as a backing service on the Heroku platform. It covers all required\nsteps you need to take to deploy your application on AWS and transfer your data from Heroku Postgres to the database managed\nby AWS via Qovery."),Object(o.b)("p",null,"The application is a simple Node.js ",Object(o.b)("em",{parentName:"p"},"Todo")," web app that uses PostgreSQL as a persistence layer."),Object(o.b)(p.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You are familiar with Heroku basics, have a Heroku account and access to Heroku CLI"),Object(o.b)("li",{parentName:"ul"},"You have a Qovery account"),Object(o.b)("li",{parentName:"ul"},"You have a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github or Gitlab")," account"),Object(o.b)("li",{parentName:"ul"},"You have ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/guides/advanced/guide-amazon-web-services/"}),"configured your AWS account")," on Qovery"))),Object(o.b)("hr",null),Object(o.b)(s.a,{centered:!0,className:"rounded",defaultValue:"dontDeploy",placeholder:"Don't deploy sample application",select:!1,size:null,values:[{group:"Platforms",label:"I want to migrate my application",value:"dontDeploy"},{group:"Platforms",label:"I want to deploy a sample application",value:"deploy"}],mdxType:"Tabs"},Object(o.b)(u.a,{value:"dontDeploy",mdxType:"TabItem"},Object(o.b)("p",null,"If you have an existing app, you do not have to deploy our sample application to benefit from this guide.\nOtherwise, you can try to deploy and migrate our sample application to get experience.")),Object(o.b)(u.a,{value:"deploy",mdxType:"TabItem"},Object(o.b)("h2",{id:"deploying-the-sample-application-to-heroku"},"Deploying the sample application to Heroku"),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to Heroku using the CLI:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku login --interactive\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone the application repository:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/qovery/migrate-webapp-from-heroku-to-qovery.git\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Move to the directory of the cloned repository:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd migrate-webapp-from-heroku-to-qovery\n")),Object(o.b)("p",{parentName:"li"},"The repository is made of a few simple components:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"index.js")," - Node.js script for setting up the web application."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"package.json")," - File determining app's dependencies."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Procfile")," - File required to run the app on Heroku. It determines the command executed on the application startup."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"views")," - Directory with the HTML served by the app."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a Heroku app:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku create\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add Heroku PostgreSQL to your application:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku addons:create heroku-postgresql:hobby-dev\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Deploy the application:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"git push heroku master\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Check your application URL:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku info\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the browser, navigate to your application's URL - you'll see a simple view with a ",Object(o.b)("em",{parentName:"p"},"Todo")," app:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/todo-app-example.png",alt:"Connect Github"}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a few ",Object(o.b)("em",{parentName:"p"},"Todo")," tasks in the UI to make sure you have sample data in the database.")))))),Object(o.b)("h2",{id:"migrating-the-application-from-heroku-to-aws"},"Migrating the application from Heroku to AWS"),Object(o.b)(c.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://console.qovery.com"}),"Sign in to Qovery Console"))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-project"},"Create a new project"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-2.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-environment"},"Create a new environment"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-3.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-application"},"Create a new application"),Object(o.b)("p",null,"To follow the guide, ",Object(o.b)("a",{href:"https://github.com/qovery/migrate-webapp-from-heroku-to-qovery.git"},"you can fork and use our repository")),Object(o.b)("p",null,"Use the forked repository (and branch ",Object(o.b)("strong",{parentName:"p"},"master"),") while creating the application in the repository field:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/rust/rust.png",alt:"Migrate from Heroku"}))),Object(o.b)("li",null,Object(o.b)("p",null,"Create and deploy a new database"),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"Name the database ",Object(o.b)("strong",{parentName:"p"},"MY_POSTGRESQL")," to follow the guide flawlessly")),Object(o.b)("p",null,"To learn how to do it, you can ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"follow this guide"))),Object(o.b)("li",null,Object(o.b)("p",null,"Migrate PostgreSQL data"),Object(o.b)("p",null,"There are multiple paths you could take to migrate your data from Heroku Postgres to AWS.\nFor production usage for the shortest downtime you would probably want to configure PostgreSQL as a replica to\nthe database on Heroku, and making it the primary instance after migration. Heroku does not support this in its free\ntier, so for the purpose of the example, we take a simpler path and use different tools to migrate the data."),Object(o.b)(i.a,{mdxType:"Alert"},Object(o.b)("p",null,"To run the migration successfully, you need a ",Object(o.b)("inlineCode",{parentName:"p"},"psql")," PostgreSQL client installed on your machine.")),Object(o.b)("p",null,"First, dump the data from your Heroku Postgres:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"heroku pg:backups:download -a YOUR_APPLICATION_NAME\nheroku pg:backups:capture -a YOUR_APPLICATION_NAME\n")),Object(o.b)("p",null,"It results in creating a new ",Object(o.b)("inlineCode",{parentName:"p"},"latest.dump")," file, which you use to transfer data to AWS PostgreSQL."),Object(o.b)("p",null,"To migrate the data to your AWS PostgreSQL, run (replace all the values with secrets listed in your application ",Object(o.b)("inlineCode",{parentName:"p"},"Secrets")," tab):"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"pg_restore -v -h $QOVERY_DATABASE_MY_POSTGRESQL_HOST -U $QOVERY_DATABASE_MY_POSTGRESQL_USER -d postgres latest.dump --no-owner\n")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/secret/"}),"Learn more about secrets here"))),Object(o.b)("li",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"deploy-the-app-on-qovery"},"Deploy the app on Qovery"),Object(o.b)("p",null,"All you have to do now is to navigate to your application and click ",Object(o.b)("strong",{parentName:"p"},"Deploy")," button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-1.png",alt:"Deploy App"})),Object(o.b)("p",null,"That's it. Watch the status and wait till the app is deployed.")),Object(o.b)("p",null,"After it's done, click on ",Object(o.b)("strong",{parentName:"p"},"Action")," and ",Object(o.b)("strong",{parentName:"p"},"Open")," button to navigate to your app. It should be up and running with all the data from Heroku migrated to AWS!")))),Object(o.b)("h2",{id:"whats-next"},"What's next"),Object(o.b)(l.a,{to:"/guides/getting-started/setting-custom-domain",mdxType:"Jump"},"Setting Custom Domain"),Object(o.b)(l.a,{to:"/guides/advanced/using-multiple-environments",mdxType:"Jump"},"Using Multiple Environments"))}g.isMDXComponent=!0},348:function(e,t,a){"use strict";a(352);var n=a(0),r=a.n(n),o=a(347),i=a.n(o);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,o=e.icon,l=e.type,c=null;switch(l){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:i()(a,"alert","alert--"+l,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&r.a.createElement("i",{className:i()("feather","icon-"+(o||c))}),t)}},350:function(e,t,a){"use strict";var n=a(1),r=a(0),o=a.n(r),i=a(39),l=a(355),c=a(19),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,u=a||c,p=Object(l.a)(u),b=Object(r.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(u),function(){m&&t&&t.disconnect()}}),[u,m,p]),u&&p?o.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var a,n;m&&e&&p&&(a=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:u})):o.a.createElement("a",Object(n.a)({},e,{href:u}))}},351:function(e,t,a){var n=a(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},353:function(e,t,a){"use strict";a(351);var n=a(0),r=a.n(n),o=a(348);t.a=function(e){var t=e.children,a=e.name;return r.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},354:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(350),i=a(347),l=a.n(i);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,p=e.to,b=l()("jump-to","jump-to--"+s,a),m=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?r.a.createElement("a",{href:p,target:u,className:b},m):r.a.createElement(o.a,{to:p,className:b},m)}},355:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},358:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(347),a(356)),i=a.n(o);a(134);t.a=function(e){var t=e.children,a=e.headingDepth,o=e.hideFeedbackQuestion,l="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(c),u=Object(n.useState)(null),p=u[0],b=u[1];return r.a.createElement("div",{className:"steps steps--h"+a},t,!o&&!p&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",r.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},361:function(e,t,a){"use strict";var n=a(1),r=(a(365),a(363),a(53),a(28),a(21),a(20),a(0)),o=a.n(r),i=a(369),l=a(347),c=a.n(l),s=a(356),u=a.n(s),p=a(368),b=37,m=39;function d(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,r=e.className,i=e.handleKeydown,l=e.style,s=e.values,u=e.selectedValue,p=e.tabRefs;return o.a.createElement("div",{className:a?"tabs--centered":null},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",r,{"tabs--block":t}),style:l},s.map((function(e){var t=e.value,a=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return p.push(e)},onKeyDown:function(e){return i(p,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,r=e.size,l=e.values,c=l;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return o.a.createElement(i.a,{className:"react-select-container react-select--"+r,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:l.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,i=e.groupId,l=e.label,c=e.placeholder,s=e.select,g=e.size,f=(e.style,e.values),j=e.urlKey,O=Object(p.a)(),y=O.tabGroupChoices,v=O.setTabGroupChoices,N=Object(r.useState)(a),w=N[0],k=N[1];if(null!=i){var E=y[i];null!=E&&E!==w&&k(E)}var T=function(e){k(e),null!=i&&v(i,e)},S=[],A=function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(r.useEffect)((function(){if("undefined"!=typeof window&&window.location&&j){var e=u.a.parse(window.location.search);e[j]&&k(e[j])}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"margin-bottom--"+(g||"md")},l&&o.a.createElement("div",{className:"margin-vert--sm"},l),f.length>1&&(s?o.a.createElement(h,Object(n.a)({changeSelectedValue:T,handleKeydown:A,placeholder:c,selectedValue:w,size:g,tabRefs:S},e)):o.a.createElement(d,Object(n.a)({changeSelectedValue:T,handleKeydown:A,selectedValue:w,tabRefs:S},e)))),r.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},362:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.children)}}}]);