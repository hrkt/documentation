(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{220:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return h}));var n=a(1),o=a(9),l=(a(0),a(349)),r=a(358),i=a(361),c=a(362),s=a(353),b=a(348),p={last_modified_on:"2021-08-29",$schema:"/.meta/.schemas/guides.json",title:"Simplest way to deploy your Deno application with MongoDB database",description:"Tutorial how to deploy a Deno app with MongoDB database with Qovery",author_github:"https://github.com/pjeziorowski",tags:["type: tutorial","framework: deno","language: javascript","database: mongodb"],hide_pagination:!0},u={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Simplest way to deploy your Deno application with MongoDB database",description:"Tutorial how to deploy a Deno app with MongoDB database with Qovery",permalink:"/guides/tutorial/simplest-way-to-deploy-deno-with-database",readingTime:"7 min read",source:"@site/guides/tutorial/simplest-way-to-deploy-deno-with-database.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: deno",permalink:"/guides/tags/framework-deno"},{label:"language: javascript",permalink:"/guides/tags/language-javascript"},{label:"database: mongodb",permalink:"/guides/tags/database-mongodb"}],title:"Simplest way to deploy your Deno application with MongoDB database",truncated:!1,prevItem:{title:"Mono repository",permalink:"/guides/advanced/monorepository"},nextItem:{title:"Staging environment",permalink:"/guides/advanced/staging-environment"}},d=[{value:"Deployment",id:"deployment",children:[]},{value:"Steps to deploy Deno with Qovery",id:"steps-to-deploy-deno-with-qovery",children:[{value:"Install Qovery CLI",id:"install-qovery-cli",children:[]},{value:"Sign up",id:"sign-up",children:[]}]},{value:"Deployment",id:"deployment-1",children:[{value:"Deno sample application",id:"deno-sample-application",children:[]},{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Create a new environment",id:"create-a-new-environment",children:[]},{value:"Create a new application",id:"create-a-new-application",children:[]},{value:"Select application port",id:"select-application-port",children:[]},{value:"Use Dockerfile",id:"use-dockerfile",children:[]},{value:"Deploy a MongoDB database",id:"deploy-a-mongodb-database",children:[]},{value:"Connect Deno to MongoDB",id:"connect-deno-to-mongodb",children:[]},{value:"Deploy the app on Qovery",id:"deploy-the-app-on-qovery",children:[]}]},{value:"Trigger a new deployment",id:"trigger-a-new-deployment",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={rightToc:d};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Deno is a secure runtime for JavaScript and TypeScript based on the V8 engine and Rust programming language. It was created by Ryan Dahl, the same person who is the creator of good ol\u2019 Node.js."),Object(l.b)("p",null,"This article is not meant to teach you Deno, but it\u2019s worth to mention its main cool features:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Secure by default, runs in a sandbox. No file, network, or environment access, unless explicitly enabled. You need to add flags to gain permissions."),Object(l.b)("li",{parentName:"ul"},"TypeScript compiler baked in, works out of the box."),Object(l.b)("li",{parentName:"ul"},"Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt)."),Object(l.b)("li",{parentName:"ul"},"Ships only a single executable file."),Object(l.b)("li",{parentName:"ul"},"Decentralized packages. No more NPM packages / package.json. Packages are imported from URLs and are cached on the hard drive on load."),Object(l.b)("li",{parentName:"ul"},"Extensive standard library."),Object(l.b)("li",{parentName:"ul"},"ES Modules import syntax over require syntax."),Object(l.b)("li",{parentName:"ul"},"Browser compatible API e.g. fetch.")),Object(l.b)("p",null,"Without further due, let's move on to next post section where we'll deploy a Deno application with MongoDB on scalable cloud platform."),Object(l.b)("h2",{id:"deployment"},"Deployment"),Object(l.b)("p",null,"This tutorial show you how to deploy your ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/denoland/deno"}),"Deno")," application with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mongodb.com"}),"MongoDB")," database. Let's go!"),Object(l.b)(s.a,{name:"guide",mdxType:"Assumptions"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Your Operating System is macOS / Windows / Linux"),Object(l.b)("li",{parentName:"ul"},"You have a ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com"}),"Github")," or ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://gitlab.com"}),"Gitlab")," account"))),Object(l.b)("h2",{id:"steps-to-deploy-deno-with-qovery"},"Steps to deploy Deno with Qovery"),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"web",placeholder:"Select your interface",select:!1,size:null,values:[{group:"Interfaces",label:"Web",value:"web"},{group:"Interfaces",label:"CLI",value:"cli"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"web",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("p",null,"Sign in to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://start.qovery.com"}),"Qovery web interface"),"."),Object(l.b)("p",{align:"center"},Object(l.b)("a",{href:"https://start.qovery.com"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"}))))),Object(l.b)(c.a,{value:"cli",mdxType:"TabItem"},Object(l.b)("li",null,Object(l.b)("h3",{id:"install-qovery-cli"},"Install Qovery CLI"),Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Download and install Qovery CLI on every Linux distribution\n$ curl -s https://get.qovery.com | sudo bash\n"))),Object(l.b)(c.a,{value:"macos",mdxType:"TabItem"},Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,"The common solution to install a command line binary on the MacOS is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery brew repository\n$ brew tap Qovery/qovery-cli\n\n# Install the CLI\n$ brew install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Install the Qovery CLI on MacOS manually\n$ curl -s https://get.qovery.com | bash\n"))))),Object(l.b)(c.a,{value:"windows",mdxType:"TabItem"},Object(l.b)(i.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(c.a,{value:"scoop",mdxType:"TabItem"},Object(l.b)("p",null,"The classic way to install binaries on Windows is to use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://scoop.sh/"}),"Scoop"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Add Qovery bucket\n$ scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n\n# Install the CLI\n$ scoop install qovery-cli\n"))),Object(l.b)(c.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,"Install the Qovery CLI on Windows manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease"),", and uncompress its content to\n",Object(l.b)("inlineCode",{parentName:"p"},"C:\\Windows"),".")))))),Object(l.b)("li",null,Object(l.b)("h3",{id:"sign-up"},"Sign up"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth\n")),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"If you are using an environment without access to GUI or a browser, you can use headless authentication instead:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# Sign up and sign in command\n$ qovery auth --headless\n"))),Object(l.b)("p",null,"Your browser window with sign-in options will open."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/qovery_signup.svg",alt:"Qovery Sign-up page"})),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"Click here")," to authorize Qovery to clone and build your applications."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/github_signup.svg",alt:"Connect Github"})),Object(l.b)("p",null,"Congratulations, you are logged-in.")))),Object(l.b)("h2",{id:"deployment-1"},"Deployment"),Object(l.b)("h3",{id:"deno-sample-application"},"Deno sample application"),Object(l.b)("p",null,"Get a copy of the sample source code of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/deno-simple-example"}),"Deno sample project")," by forking it."),Object(l.b)("p",null,"To deploy your Deno application connected to a ",Object(l.b)("strong",{parentName:"p"},"MongoDB"),", you can use our sample code and follow the configuration steps."),Object(l.b)("p",null,"In this example we are using ",Object(l.b)("strong",{parentName:"p"},"MongoDB")," ",Object(l.b)("strong",{parentName:"p"},"v3.6"),"."),Object(l.b)(r.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",null,Object(l.b)("h3",{id:"create-a-new-project"},"Create a new project"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/heroku/heroku-2.png",alt:"Migrate from Heroku"}))),Object(l.b)("li",null,Object(l.b)("h3",{id:"create-a-new-environment"},"Create a new environment"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/heroku/heroku-3.png",alt:"Migrate from Heroku"}))),Object(l.b)("li",null,Object(l.b)("h3",{id:"create-a-new-application"},"Create a new application"),Object(l.b)("p",null,"To follow the guide, ",Object(l.b)("a",{href:"urls.sample_deno_with_mongodb"},"you can fork and use our repository")),Object(l.b)("p",null,"Use the forked repository (and branch ",Object(l.b)("strong",{parentName:"p"},"master"),") while creating the application in the repository field:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/rust/rust.png",alt:"Migrate from Heroku"}))),Object(l.b)("li",null,Object(l.b)("h3",{id:"select-application-port"},"Select application port"),Object(l.b)("p",null,"After the application is created: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Navigate application settings"),Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("strong",{parentName:"li"},"Port")),Object(l.b)("li",{parentName:"ul"},"Add port ",Object(l.b)("strong",{parentName:"li"}," 8080 "))),Object(l.b)("p",{align:"left"},Object(l.b)("img",{src:"/img/micro/micros-1.png",alt:"Port"}))),Object(l.b)("li",null,Object(l.b)("h3",{id:"use-dockerfile"},"Use Dockerfile"),Object(l.b)("p",null,"In the settings ",Object(l.b)("strong",{parentName:"p"},"General")," section, set ",Object(l.b)("strong",{parentName:"p"},"Build Mode"),' to Dockerfile and set Dockerfile path as "Dockerfile"')),Object(l.b)("li",null,Object(l.b)("h3",{id:"deploy-a-mongodb-database"},"Deploy a MongoDB database"),Object(l.b)("p",null,"In your envioronment view, click on ",Object(l.b)("strong",{parentName:"p"},"Add")," and ",Object(l.b)("strong",{parentName:"p"},"Database")," buttons:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/template-add-db.png",alt:"Template DB Deno"})),Object(l.b)("p",null,"In the popup window while adding a database, choose your name, select ",Object(l.b)("strong",{parentName:"p"},"MongoDB")," and ",Object(l.b)("strong",{parentName:"p"},"3.6")," version."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/template-db.png",alt:"Template DB"})),Object(l.b)("p",null,"In the end, click on your added database - in the new screen you'll be able to find the ",Object(l.b)("strong",{parentName:"p"},"Deploy")," button:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/template-deploy-db.png",alt:"Template DB"})),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"To learn how to add a MongoDB database in more details, you can ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"follow this guide"),"."))),Object(l.b)("li",null,Object(l.b)("h3",{id:"connect-deno-to-mongodb"},"Connect Deno to MongoDB"),Object(l.b)("p",null,"Credentials of your MongoDB database are available via ",Object(l.b)("strong",{parentName:"p"},"Environment Variables")," and ",Object(l.b)("strong",{parentName:"p"},"Secrets"),". Qovery injects environment vars at the runtime."),Object(l.b)("p",null,"You can learn more about environment variables and secrets ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"here"),"."),Object(l.b)("p",null,"To list all the environment variables available to your Deno application, you can open ",Object(l.b)("strong",{parentName:"p"},"Environment Variables")," and ",Object(l.b)("strong",{parentName:"p"},"Secret")," tabs in your application window:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/configuration/variables/secret-2.png",alt:"Secret"})),Object(l.b)(b.a,{type:"info",mdxType:"Alert"},Object(l.b)("p",null,"In the ",Object(l.b)("strong",{parentName:"p"},"Secrets")," section, you'll see all names of injected database secrets, including those for the previously created MongoDB database.\nTo connect the Deno app to the MongoDB database, you need to setup the application to use those secrets."),Object(l.b)("p",null,"All you have to do is to open and edit ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/deno-simple-example/blob/master/src/db.ts"}),"database configuration file")," in your forked repository.\nReplace all the ",Object(l.b)("strong",{parentName:"p"},"QOVERY_DATABASE_XXX")," variables with values you have in your own environment. Those variable keys contain your database ID, this is why you need to update the file. "),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"TIP: you could also make use of ",Object(l.b)("strong",{parentName:"em"},"Variable Aliases")," to change the name of used environment variables in your Deno application. ",Object(l.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/using-qovery/configuration/secret/#alias-secret"}),"Learn more here"),".")))),Object(l.b)("li",null,Object(l.b)("h3",{id:"deploy-the-app-on-qovery"},"Deploy the app on Qovery"),Object(l.b)("p",null,"All you have to do now is to navigate to your application and click ",Object(l.b)("strong",{parentName:"p"},"Deploy")," button"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/heroku/heroku-1.png",alt:"Deploy App"})),Object(l.b)("p",null,"That's it. Watch the status and wait till the app is deployed.")))),Object(l.b)("p",null,"Congratulations! Your environment with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/denoland/deno"}),"Deno")," application and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mongodb.com"}),"MongoDB")," database should be in progress."),Object(l.b)("h2",{id:"trigger-a-new-deployment"},"Trigger a new deployment"),Object(l.b)("p",null,"Now, you can play with the sample Deno application and commit & push your changes. Qovery detects your actions and triggers new builds and application deployments. Any change you make will be reflected in your deployed application automatically."),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"Congratulations! Now, you know how to deploy your Deno app with MongoDB in just a few steps."),Object(l.b)("p",null,"Do you have any feedback about this tutorial? Let us know what you think on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://discord.qovery.com"}),"Discord"),", and join our wonderful dev community of +5500 devs."))}h.isMDXComponent=!0},348:function(e,t,a){"use strict";a(352);var n=a(0),o=a.n(n),l=a(347),r=a.n(l);a(132);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:r()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&o.a.createElement("i",{className:r()("feather","icon-"+(l||c))}),t)}},351:function(e,t,a){var n=a(25).f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},353:function(e,t,a){"use strict";a(351);var n=a(0),o=a.n(n),l=a(348);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},358:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=(a(347),a(356)),r=a.n(l);a(134);t.a=function(e){var t=e.children,a=e.headingDepth,l=e.hideFeedbackQuestion,i="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+i+" failed",body:"The tutorial on:\n\n"+i+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(c),b=Object(n.useState)(null),p=b[0],u=b[1];return o.a.createElement("div",{className:"steps steps--h"+a},t,!l&&!p&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return u("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},361:function(e,t,a){"use strict";var n=a(1),o=(a(365),a(363),a(53),a(28),a(21),a(20),a(0)),l=a.n(o),r=a(369),i=a(347),c=a.n(i),s=a(356),b=a.n(s),p=a(368),u=37,d=39;function m(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,r=e.handleKeydown,i=e.style,s=e.values,b=e.selectedValue,p=e.tabRefs;return l.a.createElement("div",{className:a?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":b===t,className:c()("tab-item",{"tab-item--active":b===t}),key:t,ref:function(e){return p.push(e)},onKeyDown:function(e){return r(p,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(r.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,i=e.label,c=e.placeholder,s=e.select,g=e.size,y=(e.style,e.values),j=e.urlKey,O=Object(p.a)(),v=O.tabGroupChoices,f=O.setTabGroupChoices,w=Object(o.useState)(a),N=w[0],k=w[1];if(null!=r){var D=v[r];null!=D&&D!==N&&k(D)}var T=function(e){k(e),null!=r&&f(r,e)},S=[],x=function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&j){var e=b.a.parse(window.location.search);e[j]&&k(e[j])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(g||"md")},i&&l.a.createElement("div",{className:"margin-vert--sm"},i),y.length>1&&(s?l.a.createElement(h,Object(n.a)({changeSelectedValue:T,handleKeydown:x,placeholder:c,selectedValue:N,size:g,tabRefs:S},e)):l.a.createElement(m,Object(n.a)({changeSelectedValue:T,handleKeydown:x,selectedValue:N,tabRefs:S},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},362:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}}}]);