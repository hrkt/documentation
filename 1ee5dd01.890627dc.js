(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{182:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return h}));var n=a(1),o=a(9),l=(a(0),a(342)),i=a(345),r=a(352),c=a(353),s=a(349),p=a(341),u={last_modified_on:"2021-06-26",$schema:"/.meta/.schemas/guides.json",title:"Deploy JHipster with PostgreSQL with Qovery",description:"How to deploy a JHipster application with the PostgreSQL database with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","framework: jhipster","language: java","database: postgresql"],hide_pagination:!0},b={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy JHipster with PostgreSQL with Qovery",description:"How to deploy a JHipster application with the PostgreSQL database with Qovery",permalink:"/guides/tutorial/deploy-jhipster-with-postgresql",readingTime:"7 min read",source:"@site/guides/tutorial/deploy-jhipster-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: jhipster",permalink:"/guides/tags/framework-jhipster"},{label:"language: java",permalink:"/guides/tags/language-java"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"Deploy JHipster with PostgreSQL with Qovery",truncated:!1,prevItem:{title:"Deploy Gin with PostgreSQL with Qovery",permalink:"/guides/tutorial/deploy-gin-with-postgresql"},nextItem:{title:"Deploy Laravel with MySQL with Qovery",permalink:"/guides/tutorial/deploy-laravel-with-mysql"}},d=[{value:"Steps to deploy JHipster with Qovery",id:"steps-to-deploy-jhipster-with-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Deployment",id:"deployment",children:[{value:"JHipster sample application",id:"jhipster-sample-application",children:[]},{value:"Configure your project",id:"configure-your-project",children:[]},{value:"Connect JHipster to PostgreSQL",id:"connect-jhipster-to-postgresql",children:[]}]},{value:"Trigger a new deployment",id:"trigger-a-new-deployment",children:[]},{value:"Bonuses (optional)",id:"bonuses-optional",children:[{value:"Deploy the application on dev environments",id:"deploy-the-application-on-dev-environments",children:[]},{value:"Test the JHipster application locally",id:"test-the-jhipster-application-locally",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],m={rightToc:d};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(p.a,{type:"warning",mdxType:"Alert"},Object(l.b)("p",null,"WORK IN PROGRESS - THIS DOCUMENTATION IS OUTDATED")),Object(l.b)("p",null,"This tutorial show you how to deploy your ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jhipster.tech/"}),"JHipster")," application with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org"}),"PostgreSQL")," database. Let's go!"),Object(l.b)(s.a,{name:"guide",mdxType:"Assumptions"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Your Operating System is macOS / Windows / Linux"),Object(l.b)("li",{parentName:"ul"},"You have a ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," or ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com"}),"Gitlab")," account"))),Object(l.b)("h2",{id:"steps-to-deploy-jhipster-with-qovery"},"Steps to deploy JHipster with Qovery"),Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"web",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("p",null,"Sign in to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(l.b)("p",{align:"center"},Object(l.b)("a",{href:"https://start.qovery.com"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(l.b)(c.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(l.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(l.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(l.b)(r.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(l.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Windows"),"."))),Object(l.b)("p",null,"Few limitations exist on Windows: ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/interface/cli/#windows"}),"read more"))))),Object(l.b)("li",null,Object(l.b)("h3",{id:"sign-up"},"Sign up"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(l.b)(p.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(l.b)("p",null,"Your browser window with sign-in options will open."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(l.b)("p",null,"Note: Qovery needs access to your account to be able to clone your repository for future application builds."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(l.b)("p",null,"Congratulations, you are logged-in.")))),Object(l.b)("h2",{id:"deployment"},"Deployment"),Object(l.b)("h3",{id:"jhipster-sample-application"},"JHipster sample application"),Object(l.b)("p",null,"Get a local copy of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/simple-example-jhipster-with-postgresql"}),"JHipster sample project")," by forking it."),Object(l.b)("h3",{id:"configure-your-project"},"Configure your project"),Object(l.b)("p",null,"To deploy your JHipster application connected to a PostgreSQL, you need to have a ",Object(l.b)("inlineCode",{parentName:"p"},".qovery.yml")," file, and a ",Object(l.b)("inlineCode",{parentName:"p"},"Dockerfile")," (both provided in the sample project) at the root of your project."),Object(l.b)(p.a,{mdxType:"Alert"},"The .qovery.yml file describes all the dependencies that your application needs (e.g., PostgreSQL) to work smoothly"),Object(l.b)("p",null,"In this example we are using PostgreSQL v11.5"),Object(l.b)("p",null,"After forking the sample application, you can check the content of ",Object(l.b)("inlineCode",{parentName:"p"},".qovery.yml"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ cat .qovery.yml\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".qovery.yml"',title:'".qovery.yml"'}),'application:\n  name: my-application\n  project: my-project\n  publicly_accessible: true\ndatabases:\n- type: postgresql\n  version: "11.5"\n  name: my-db\nrouters:\n- name: main\n  routes:\n  - application_name: my-application\n    paths:\n    - /\n')),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Authorize the Qovery Github application")," to get access to your Github account. Once done, all new commits you push to your forked repository will trigger new deployments of the application."),Object(l.b)("h3",{id:"connect-jhipster-to-postgresql"},"Connect JHipster to PostgreSQL"),Object(l.b)("p",null,"Credentials of your database are available via environment variables. Qovery injects environment vars at the runtime."),Object(l.b)(p.a,{type:"warning",mdxType:"Alert"},"Qovery does not inject any variable in your .env file, this is to be done on your side"),Object(l.b)("p",null,"To list all the environment variables available to your application, execute"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# List all environment variables\n$ qovery project env list\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"SCOPE    | KEY                                                      | VALUE\nBUILT_IN | QOVERY_JSON_B64                                          | <base64>\nBUILT_IN | QOVERY_BRANCH_NAME                                       | master\nBUILT_IN | QOVERY_IS_PRODUCTION                                     | true\nBUILT_IN | QOVERY_MY_APPLICATION_HOSTNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_DATABASE                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PASSWORD                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_USERNAME                           | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_PORT                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_FQDN                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_HOST                               | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI_WITHOUT_CREDENTIALS | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_CONNECTION_URI                     | <hidden>\nBUILT_IN | QOVERY_DATABASE_MY_DB_VERSION                            | 11.5\nBUILT_IN | QOVERY_DATABASE_MY_DB_TYPE                               | PostgreSQL\nBUILT_IN | QOVERY_DATABASE_MY_DB_NAME                               | my-db\n")),Object(l.b)("p",null,"Forking the application with ",Object(l.b)("inlineCode",{parentName:"p"},".qovery.yml")," and a ",Object(l.b)("inlineCode",{parentName:"p"},"Dockerfile")," should trigger app deployment."),Object(l.b)("p",null,"See the deployment status by executing:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Show your deployment status\n$ qovery status\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nmaster      | running | https://main-abcdefgh12345678-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME  | STATUS  | DATABASES\nmy-application    | running | my-db\n\nDATABASE NAME    | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db            | running | POSTGRESQL      | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(l.b)("p",null,"When your application ",Object(l.b)("inlineCode",{parentName:"p"},"status")," is ",Object(l.b)("inlineCode",{parentName:"p"},"running"),", you can use a browser or ",Object(l.b)("inlineCode",{parentName:"p"},"curl")," to access its endpoints."),Object(l.b)("h2",{id:"trigger-a-new-deployment"},"Trigger a new deployment"),Object(l.b)("p",null,"Now, you can play with the sample application and commit & push your changes. Qovery detects your actions and triggers new builds and application deployments. Any change you make will be reflected in your deployed application automatically."),Object(l.b)("h2",{id:"bonuses-optional"},"Bonuses (optional)"),Object(l.b)("h3",{id:"deploy-the-application-on-dev-environments"},"Deploy the application on dev environments"),Object(l.b)("p",null,'Qovery has a compelling feature known as "',Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment/"}),"environments"),'". Qovery supports the deployment of isolated development environments that reflect your Git branches. Environments are complete copies of all of your data, application, and services like databases. The Environment is useful for testing changes in isolation before merging them to your main branch.'),Object(l.b)("p",null,"So, do you want to create a new feature, fix a bug, or make modifications without impacting the production or any other important environment? Type the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git checkout -b feat_foo\n$ git push -u origin feat_foo\n\n# show deployment status\n$ qovery status\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Output"',title:'"Output"'}),"BRANCH NAME | STATUS  | ENDPOINTS                                   | APPLICATIONS    | DATABASES\nfeat_foo    | running | https://main-yenr7erjbs87dk4m-gtw.qovery.io | my-application  | my-db\n\nAPPLICATION NAME      | STATUS  | DATABASES\ndocker-simple-example | running | my-db\n\nDATABASE NAME  | STATUS  | TYPE       | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\nmy-db          | running | PostgreSQL      | 11.5     | <hidden> | <hidden> | <hidden> | <hidden> | my-application\n")),Object(l.b)(i.a,{to:"/guides/advanced/using-multiple-environments",mdxType:"Jump"},"Multiple Environments"),Object(l.b)("h3",{id:"test-the-jhipster-application-locally"},"Test the JHipster application locally"),Object(l.b)("p",null,"The Qovery motto is: if your application runs locally, it runs well on Qovery, too. To test if your application is running locally, execute the following command:"),Object(l.b)(p.a,{mdxType:"Alert"},"The Docker runtime is required"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery run\n")),Object(l.b)("p",null,"Note: ",Object(l.b)("inlineCode",{parentName:"p"},"qovery run")," connects your application to the PostgreSQL database on Qovery."),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"Congratulations! Now, you know how to deploy your JHipster app with PostgreSQL in just a few steps."),Object(l.b)("p",null,"Do you have any feedback about this tutorial? Let us know what you think on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),", and join our wonderful dev community of +600 devs."),Object(l.b)(i.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}h.isMDXComponent=!0},341:function(e,t,a){"use strict";a(344);var n=a(0),o=a.n(n),l=a(340),i=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,r=e.type,c=null;switch(r){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:i()(a,"alert","alert--"+r,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&o.a.createElement("i",{className:i()("feather","icon-"+(l||c))}),t)}},343:function(e,t,a){"use strict";var n=a(1),o=a(0),l=a.n(o),i=a(39),r=a(346),c=a(19),s=a.n(c);t.a=function(e){var t,a=e.to,c=e.href,p=a||c,u=Object(r.a)(p),b=Object(o.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!d&&u&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,u]),p&&u?l.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var a,n;d&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:p})):l.a.createElement("a",Object(n.a)({},e,{href:p}))}},345:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(343),i=a(340),r=a.n(i);a(133);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,c=e.rightIcon,s=e.size,p=e.target,u=e.to,b=r()("jump-to","jump-to--"+s,a),d=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},i&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+i})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return p?o.a.createElement("a",{href:u,target:p,className:b},d):o.a.createElement(l.a,{to:u,className:b},d)}},346:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}a.d(t,"a",(function(){return n}))},347:function(e,t,a){var n=a(27).f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},349:function(e,t,a){"use strict";a(347);var n=a(0),o=a.n(n),l=a(341);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},352:function(e,t,a){"use strict";var n=a(1),o=(a(358),a(355),a(52),a(28),a(21),a(20),a(0)),l=a.n(o),i=a(362),r=a(340),c=a.n(r),s=a(351),p=a.n(s),u=a(361),b=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,i=e.handleKeydown,r=e.style,s=e.values,p=e.selectedValue,u=e.tabRefs;return l.a.createElement("div",{className:a?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:r},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":p===t,className:c()("tab-item",{"tab-item--active":p===t}),key:t,ref:function(e){return u.push(e)},onKeyDown:function(e){return i(u,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,r=e.values,c=r;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(i.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:r.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,i=e.groupId,r=e.label,c=e.placeholder,s=e.select,y=e.size,g=(e.style,e.values),O=e.urlKey,j=Object(u.a)(),v=j.tabGroupChoices,f=j.setTabGroupChoices,N=Object(o.useState)(a),w=N[0],T=N[1];if(null!=i){var S=v[i];null!=S&&S!==w&&T(S)}var A=function(e){T(e),null!=i&&f(i,e)},E=[],I=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&O){var e=p.a.parse(window.location.search);e[O]&&T(e[O])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(y||"md")},r&&l.a.createElement("div",{className:"margin-vert--sm"},r),g.length>1&&(s?l.a.createElement(h,Object(n.a)({changeSelectedValue:A,handleKeydown:I,placeholder:c,selectedValue:w,size:y,tabRefs:E},e)):l.a.createElement(m,Object(n.a)({changeSelectedValue:A,handleKeydown:I,selectedValue:w,tabRefs:E},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===w}))[0])}},353:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);