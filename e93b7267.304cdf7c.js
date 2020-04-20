(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{214:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return g}));var n=a(1),o=a(9),l=(a(0),a(228)),r=a(231),i=a(318),c=a(291),s=a(290),u=a(294),b=a(254),p={last_modified_on:"2020-04-20",$schema:"/.meta/.schemas/guides.json",title:"Deploy Laravel with MySQL on AWS",description:"How to deploy Laravel with MySQL on Amazon Web Services",author_github:"https://github.com/evoxmusic",tags:["type: tutorial"],hide_pagination:!0},m={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"Deploy Laravel with MySQL on AWS",description:"How to deploy Laravel with MySQL on Amazon Web Services",permalink:"/guides/tutorial/deploy-laravel-with-mysql",readingTime:"6 min read",source:"@site/guides/tutorial/deploy-laravel-with-mysql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"}],title:"Deploy Laravel with MySQL on AWS",truncated:!1,prevItem:{title:"Customizing routes",permalink:"/guides/advanced/customizing-routing"},nextItem:{title:"GraphQL API with Hasura",permalink:"/guides/tutorial/graphql-api-with-hasura"}},d=[{value:"Sign up",id:"sign-up",children:[{value:"Install the CLI!",id:"install-the-cli",children:[]},{value:"Sign Up",id:"sign-up-1",children:[]},{value:"Authorize Qovery",id:"authorize-qovery",children:[]}]},{value:"Optional: Get the Laravel sample application",id:"optional-get-the-laravel-sample-application",children:[]},{value:"Deploy the Laravel application",id:"deploy-the-laravel-application",children:[]},{value:"Bonuses",id:"bonuses",children:[{value:"Test the Laravel application locally",id:"test-the-laravel-application-locally",children:[]},{value:"Deploy the application on a staging environment",id:"deploy-the-application-on-a-staging-environment",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],h={rightToc:d};function g(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/"}),"AWS")," (Amazon Web Services) is an amazing and reliable cloud service provider. AWS, like Google Cloud Platform and Microsoft Azure, provides everything you need to host an application without having to worry about running the underlying servers and network configuration. Everything you need to quickly begin hosting is provided as a packaged services."),Object(l.b)("p",null,"However, deploying an application on AWS presents some challenges. The typical deployment workflow looks like this: write code, push it to Git, compile code, deploy code, validate your changes and repeat. Developers thus not only have to do all of this manually, but they also have to configure tons of services (VPC, database, cache, DNS, CDN, etc.) to make their application live on the web."),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/"}),"Qovery")," was created to solve this problem. In this blog post, I will show you how Qovery improves the developer experience to deploy staging and production ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.laravel.com/"}),"Laravel")," application with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.mysql.com/"}),"MySQL")," database on AWS. You will be able to focus on writing the best code instead of managing complex services."),Object(l.b)(u.a,{name:"guide",mdxType:"Assumptions"},Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Your Operating System is MacOS / Windows / Linux"),Object(l.b)("li",{parentName:"ul"},"You have a Github account"))),Object(l.b)("h2",{id:"sign-up"},"Sign up"),Object(l.b)("p",null,"Sign up using the ",Object(l.b)("strong",{parentName:"p"},"Qovery CLI"),", it's very simple!"),Object(l.b)("h3",{id:"install-the-cli"},"Install the CLI!"),Object(l.b)(c.a,{centered:!0,className:"rounded",defaultValue:"linux",placeholder:"Please select your OS",select:!1,size:null,values:[{group:"Platforms",label:"Linux",value:"linux"},{group:"Platforms",label:"MacOS",value:"macos"},{group:"Platforms",label:"Windows",value:"windows"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"linux",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Download and install Qovery CLI on every Linux distribution")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -s https://get.qovery.com | sudo bash\n"))),Object(l.b)(s.a,{value:"macos",mdxType:"TabItem"},Object(l.b)(c.a,{centered:!0,className:"rounded",defaultValue:"homebrew",values:[{label:"Homebrew",value:"homebrew"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"homebrew",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"The common solution to install a command line binary on the MacOS is to use ",Object(l.b)("a",Object(n.a)({parentName:"strong"},{href:"https://brew.sh/"}),"Homebrew"),".")),Object(l.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"add-qovery-brew-repository"}),"Add Qovery brew repository"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew tap Qovery/qovery-cli\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"install-the-cli-1"}),"Install the CLI"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"brew install qovery-cli\n")))))),Object(l.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Install the Qovery CLI on MacOS manually")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl -s https://get.qovery.com | bash\n"))))),Object(l.b)(s.a,{value:"windows",mdxType:"TabItem"},Object(l.b)(c.a,{centered:!0,className:"rounded",defaultValue:"scoop",values:[{label:"Scoop",value:"scoop"},{label:"Manual",value:"manual"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"scoop",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"The classic way to install binaries on Windows is to use ",Object(l.b)("a",Object(n.a)({parentName:"strong"},{href:"https://brew.sh/"}),"Scoop"),".")),Object(l.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"add-qovery-bucket"}),"Add Qovery bucket"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"scoop bucket add qovery https://github.com/Qovery/scoop-qovery-cli\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("h3",Object(n.a)({parentName:"li"},{id:"install-the-cli-2"}),"Install the CLI"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"scoop install qovery-cli\n")))))),Object(l.b)(s.a,{value:"manual",mdxType:"TabItem"},Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"}," Install the Qovery CLI on Windows manually by downloading the ",Object(l.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/Qovery/qovery-cli/releases"}),"latest realease")," and uncompressing its content to\n",Object(l.b)("inlineCode",{parentName:"strong"},"C:\\Windows"),".")))))),Object(l.b)("h3",{id:"sign-up-1"},"Sign Up"),Object(l.b)("p",null,"After the Qovery CLI is installed, run the following command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"qovery auth\n")),Object(l.b)("p",null,"A browser window with sign in options will open."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/qovery_auth.png",alt:"Qovery Authentication"})),Object(l.b)("p",null,"Choose one of the options (e.g. ",Object(l.b)("strong",{parentName:"p"},"Github"),") to authenticate."),Object(l.b)("h3",{id:"authorize-qovery"},"Authorize Qovery"),Object(l.b)("p",null,"Qovery needs an access to your account to be able to clone your repository for future application builds."),Object(l.b)("p",null,"Click ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apps/qovery/installations/new"}),"here to authorize Qovery to clone and build your applications"),"."),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/github-connect.png",alt:"Connect Github"})),Object(l.b)("p",null,"At the end, we need to validate your action on our side:"),Object(l.b)("p",{align:"center"},Object(l.b)("img",{src:"/img/github-auth.png",alt:"Github Auth"})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},'That\'s it! You should see "Authentication successful. You can close this window." message.')),Object(l.b)("h2",{id:"optional-get-the-laravel-sample-application"},"Optional: Get the Laravel sample application"),Object(l.b)("p",null,"Get a local copy of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Qovery/docker-simple-example-laravel"}),"Laravel sample project")," by forking the project using your Github account and by executing the following command:"),Object(l.b)(b.a,{mdxType:"Alert"},"Do not forget to fork the project and change the URL below with yours"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone -b tutorial git@github.com:YOUR_GITHUB_USERNAME/docker-simple-example-laravel.git\n")),Object(l.b)("h2",{id:"deploy-the-laravel-application"},"Deploy the Laravel application"),Object(l.b)("p",null,"TODO CHANGE"),Object(l.b)("h2",{id:"bonuses"},"Bonuses"),Object(l.b)("h3",{id:"test-the-laravel-application-locally"},"Test the Laravel application locally"),Object(l.b)("p",null,"The Qovery motto is: if your application runs locally, then your application will run on Qovery. To test if your application is running locally, execute the following command:"),Object(l.b)(b.a,{mdxType:"Alert"},"The Docker runtime is required"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ qovery run\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"...\nStarting server\nAH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message\nAH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.17.0.2. Set the 'ServerName' directive globally to suppress this message\n[Fri Mar 06 12:43:30.338700 2020] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.38 (Debian) PHP/7.4.3 configured -- resuming normal operations\n[Fri Mar 06 12:43:30.339017 2020] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'\n")),Object(l.b)("p",null,"Navigate to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:80"}),"http://localhost:80")," through your web browser and you should see a JSON response\nNote: ",Object(l.b)("inlineCode",{parentName:"p"},"qovery run")," connects your application to the MySQL database on AWS."),Object(l.b)("h3",{id:"deploy-the-application-on-a-staging-environment"},"Deploy the application on a staging environment"),Object(l.b)("p",null,"Qovery has a very powerful feature known as \u201cenvironment\u201d. Qovery supports the deployment of isolated development environments from your branches, complete with exact copies of all of your data. This is useful for testing changes in isolation before merging them."),Object(l.b)("p",null,"So, do you want to create a new feature, fix a bug or make a modification without impacting the production or any other important environment? Type the following commands:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ git checkout -b feat_foo\n$ git push -u origin feat_foo\n$ qovery status\n")),Object(l.b)("p",null,"Output"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"------------+---------+---------------------------------------------+--------------+-----------+---------+----------\n  feat_foo    | running | https://ym3en0t3jm3j4xxx-main-gtw.qovery.io | 1            | 1         | 0       | 0\n\n  APPLICATION NAME              | STATUS  | ENDPOINT                                                | DATABASES | BROKERS | STORAGE\n--------------------------------+---------+---------------------------------------------------------+-----------+---------+----------\n  docker-simple-example-laravel | running | https://ee5laucsynk35unj-ym3en0t3jm3j4xxx-app.qovery.io | 1         | 0       | 0\n\n  DATABASE NAME    | STATUS  | TYPE  | VERSION | ENDPOINT | PORT     | USERNAME | PASSWORD | APPLICATIONS\n-------------------+---------+-------+---------+----------+----------+----------+----------+--------------------------------\n  my-mysql-6132005 | running | MYSQL | 8.0     |  hidden  |  hidden  |  hidden  |  hidden  | docker-simple-example-laravel\n")),Object(l.b)("h2",{id:"conclusion"},"Conclusion"),Object(l.b)("p",null,"Qovery and AWS together bring to developers the full power of simplicity and flexibility while deploying applications. Any developer can now take advantage of AWS in seconds instead of days."),Object(l.b)("p",null,"Accelerate your development and start using Qovery today. Let us know what you think about it on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/Qovery_"}),"Twitter"),", or by Discord."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"With thanks to ",Object(l.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/arnaudj"}),"Arnaud J.")," for his contribution to this article."),"s"),Object(l.b)(r.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}g.isMDXComponent=!0},231:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=a(229),r=a(226),i=a.n(r);a(131);t.a=function(e){var t=e.children,a=e.className,n=e.badge,r=e.leftIcon,c=e.rightIcon,s=e.size,u=e.target,b=e.to,p=i()("jump-to","jump-to--"+s,a),m=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},r&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+r})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(c||"chevron-right")+" arrow"}))));return u?o.a.createElement("a",{href:b,target:u,className:p},m):o.a.createElement(l.a,{to:b,className:p},m)}},234:function(e,t,a){var n=a(26).f,o=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in o||a(10)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},254:function(e,t,a){"use strict";a(255);var n=a(0),o=a.n(n),l=a(226),r=a.n(l);a(140);t.a=function(e){var t=e.children,a=e.classNames,n=e.fill,l=e.icon,i=e.type,c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return o.a.createElement("div",{className:r()(a,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==l}),role:"alert"},!1!==l&&o.a.createElement("i",{className:r()("feather","icon-"+(l||c))}),t)}},255:function(e,t,a){var n=a(12);n(n.P,"Array",{fill:a(256)}),a(75)("fill")},256:function(e,t,a){"use strict";var n=a(25),o=a(80),l=a(24);e.exports=function(e){for(var t=n(this),a=l(t.length),r=arguments.length,i=o(r>1?arguments[1]:void 0,a),c=r>2?arguments[2]:void 0,s=void 0===c?a:o(c,a);s>i;)t[i++]=e;return t}},290:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){return o.a.createElement(o.a.Fragment,null,e.children)}},291:function(e,t,a){"use strict";var n=a(1),o=(a(264),a(235),a(53),a(27),a(19),a(20),a(0)),l=a.n(o),r=a(319),i=a(226),c=a.n(i),s=a(285),u=a.n(s),b=a(298),p=37,m=39;function d(e){var t=e.block,a=e.centered,n=e.changeSelectedValue,o=e.className,r=e.handleKeydown,i=e.style,s=e.values,u=e.selectedValue,b=e.tabRefs;return l.a.createElement("div",{className:a?"tabs--centered":null},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",o,{"tabs--block":t}),style:i},s.map((function(e){var t=e.value,a=e.label;return l.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:c()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:function(e){return r(b,e.target,e)},onFocus:function(){return n(t)},onClick:function(){return n(t)}},a)}))))}function h(e){var t=e.placeholder,a=e.selectedValue,n=e.changeSelectedValue,o=e.size,i=e.values,c=i;if(c[0].group){var s=_.groupBy(c,"group");c=Object.keys(s).map((function(e){return{label:e,options:s[e]}}))}return l.a.createElement(r.a,{className:"react-select-container react-select--"+o,classNamePrefix:"react-select",options:c,isClearable:a,placeholder:t,value:i.find((function(e){return e.value==a})),onChange:function(e){return n(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,a=e.defaultValue,r=e.groupId,i=e.label,c=e.placeholder,s=e.select,g=e.size,v=(e.style,e.values),y=e.urlKey,O=Object(b.a)(),j=O.tabGroupChoices,f=O.setTabGroupChoices,w=Object(o.useState)(a),N=w[0],S=w[1];if(null!=r){var T=j[r];null!=T&&T!==N&&S(T)}var A=function(e){S(e),null!=r&&f(r,e)},k=[],x=function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}};return Object(o.useEffect)((function(){if("undefined"!=typeof window&&window.location&&y){var e=u.a.parse(window.location.search);e[y]&&S(e[y])}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"margin-bottom--"+(g||"md")},i&&l.a.createElement("div",{className:"margin-vert--sm"},i),v.length>1&&(s?l.a.createElement(h,Object(n.a)({changeSelectedValue:A,handleKeydown:x,placeholder:c,selectedValue:N,size:g,tabRefs:k},e)):l.a.createElement(d,Object(n.a)({changeSelectedValue:A,handleKeydown:x,selectedValue:N,tabRefs:k},e)))),o.Children.toArray(t).filter((function(e){return e.props.value===N}))[0])}},294:function(e,t,a){"use strict";a(234);var n=a(0),o=a.n(n),l=a(254);t.a=function(e){var t=e.children,a=e.name;return o.a.createElement(l.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},o.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",a||"page"," assumes the following:"),t)}},318:function(e,t,a){"use strict";var n=a(0),o=a.n(n),l=(a(226),a(285)),r=a.n(l);a(145);t.a=function(e){var t=e.children,a=e.headingDepth,l="undefined"!=typeof window?window.location:null,i={title:"Tutorial on "+l+" failed",body:"The tutorial on:\n\n"+l+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},c="https://github.com/qovery/documentation/issues/new?"+r.a.stringify(i),s=Object(n.useState)(null),u=s[0],b=s[1];return o.a.createElement("div",{className:"steps steps--h"+a},t,!u&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:c,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",o.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}}}]);