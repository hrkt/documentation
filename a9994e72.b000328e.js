/*! For license information please see a9994e72.b000328e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{276:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(9),a=(n(0),n(349)),i=n(348),c=n(354),l=n(353),u={last_modified_on:"2021-05-06",$schema:"/.meta/.schemas/guides.json",title:"How to write a Dockerfile",description:"How to write your first Dockerfile in order to deploy your application with Qovery",author_github:"https://github.com/MacLikorne",tags:["type: tutorial","technology: docker"],hide_pagination:!0},s={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to write a Dockerfile",description:"How to write your first Dockerfile in order to deploy your application with Qovery",permalink:"/guides/tutorial/how-to-write-a-dockerfile",readingTime:"5 min read",source:"@site/guides/tutorial/how-to-write-a-dockerfile.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"technology: docker",permalink:"/guides/tags/technology-docker"}],title:"How to write a Dockerfile",truncated:!1,prevItem:{title:"How to migrate your PostHog self-hosted to PostHog Cloud",permalink:"/guides/engineering/how-to-migrate-posthog-self-hosted-to-posthog-cloud"},nextItem:{title:"Kubernetes - Network isolation with NetworkPolicy",permalink:"/guides/engineering/basic-network-isolation-in-kubernetes"}},p=[{value:"My Sweet Dockerfile",id:"my-sweet-dockerfile",children:[{value:"FROM",id:"from",children:[]},{value:"WORKDIR",id:"workdir",children:[]},{value:"COPY",id:"copy",children:[]},{value:"RUN",id:"run",children:[]},{value:"EXPOSE",id:"expose",children:[]},{value:"CMD",id:"cmd",children:[]},{value:"Build your image",id:"build-your-image",children:[]},{value:"Test your image",id:"test-your-image",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]}],b={rightToc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"With Qovery, there are two ways to build and deploy your application:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Without a Dockerfile in your repository: your application is built with ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.qovery.com/docs/using-qovery/configuration/applications/#option-1-buildpacks"}),"Buildpacks")),Object(a.b)("li",{parentName:"ol"},"With a Dockerfile: sometimes Buildpacks won't fit your specific setup, and you'll have to write your Dockerfile.")),Object(a.b)("p",null,"In this article, we'll see, step by step, how to quickly write a proper Dockerfile for any application you would like to deploy."),Object(a.b)(l.a,{name:"guide",mdxType:"Assumptions"},Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have installed the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.qovery.com/docs/using-qovery/interface/cli/"}),"Qovery CLI")),Object(a.b)("li",{parentName:"ul"},"You host your code on Github"))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"my-sweet-dockerfile"},"My Sweet Dockerfile"),Object(a.b)("p",null,"If you read this, you probably don't know why Docker is used and what is the purpose of a Dockerfile."),Object(a.b)("p",null,"Docker is a container engine, building and using images to deploy applications in containers. It looks like virtualization, and each container could be compared to a virtual machine with the minimal setup to run an application."),Object(a.b)("p",null,"The Dockerfile is your image builder recipe. When Docker uses it, it will follow all instructions to ",Object(a.b)("strong",{parentName:"p"},"build your application and run it"),"."),Object(a.b)("p",null,"The first step is to create a file named ",Object(a.b)("strong",{parentName:"p"},"Dockerfile")," at your project root level so Qovery would be able to find and use it."),Object(a.b)("p",null,"Also, to avoid unwanted files from your repository (images, .idea, DS_Store etc.), you need to add a ",Object(a.b)("strong",{parentName:"p"},".dockerignore"),". It will prevent heavy copy tasks of useless files, mostly your project dependencies and libraries you'll get back to with your package manager."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},".dockerignore")," file works like the ",Object(a.b)("strong",{parentName:"p"},".gitignore"),", so add all the path of the useless files and folders in it."),Object(a.b)("h3",{id:"from"},"FROM"),Object(a.b)("p",null,"The first line you'll add in your Dockerfile is ",Object(a.b)("strong",{parentName:"p"},"FROM"),"."),Object(a.b)("p",null,"It will pull an already existing image from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/"}),"Docker Hub"),". You should most of the time use an image that fits your application language (Node, Python, Java, etc.), but you can go a step backward and begin with a simple Linux image."),Object(a.b)("p",null,"Your Dockerfile's first line should look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"FROM <image_name>:<image_version>\n")),Object(a.b)("p",null,"For example, with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/_/python"}),"python"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"FROM python:3\n")),Object(a.b)("h3",{id:"workdir"},"WORKDIR"),Object(a.b)("p",null,"Since most of the images are Linux-based, a good practice is to set up a directory you'll work in. That's the purpose of the ",Object(a.b)("strong",{parentName:"p"},"WORKDIR")," line. It defines a directory and moves you in:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"FROM <image_name>:<image_version>\nWORKDIR /app\n")),Object(a.b)("p",null,"If you now work with a relative path (./), it will be in the ",Object(a.b)("em",{parentName:"p"},"app")," directory."),Object(a.b)("h3",{id:"copy"},"COPY"),Object(a.b)("p",null,"Now you have defined your base image and your working directory, it's time to add your code in. ",Object(a.b)("strong",{parentName:"p"},"COPY")," works like ",Object(a.b)("strong",{parentName:"p"},"cp")," linux command. First argument is the source and second one is the destination."),Object(a.b)("p",null,"It's time to copy your source code in the image."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"FROM <image_name>:<image_version>\nWORKDIR /app\nCOPY . .\n")),Object(a.b)("p",null,"Here, the elements of your ",Object(a.b)("strong",{parentName:"p"},"root")," folder from your current directory will be added inside the ",Object(a.b)("strong",{parentName:"p"},"/app")," folder."),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"You can use your current repository relative path (",Object(a.b)("strong",{parentName:"p"},".")," can be replaced by ",Object(a.b)("strong",{parentName:"p"},"./<my_source>"),") if you want to add specific element (except the content of ",Object(a.b)("strong",{parentName:"p"},".dockerignore"),") to your image relative path (as we are already in the ",Object(a.b)("strong",{parentName:"p"},"/app")," folder, we can use ",Object(a.b)("strong",{parentName:"p"},"./<my_destination>"),").")),Object(a.b)("h3",{id:"run"},"RUN"),Object(a.b)("p",null,"One does not simply get source code to run an application."),Object(a.b)("p",null,"Most of the time, you have some stuff to do before an application execution like downloading/installing peer dependencies and build your application."),Object(a.b)("p",null,"That's the purpose of ",Object(a.b)("strong",{parentName:"p"},"RUN")," lines; it will execute a command and wait to finish the task to go forward."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'FROM <image_name>:<image_version>\nWORKDIR /app\nCOPY . .\nRUN echo "Installing or doing stuff."\nRUN <my_command>\n')),Object(a.b)("p",null,"You can set as many ",Object(a.b)("strong",{parentName:"p"},"RUN")," lines as you need."),Object(a.b)("h3",{id:"expose"},"EXPOSE"),Object(a.b)("p",null,"If your app needs to be reached from outside the container, you have to open its listening port. ",Object(a.b)("strong",{parentName:"p"},"EXPOSE")," is made for this."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'FROM <image_name>:<image_version>\nWORKDIR /app\nCOPY . .\nRUN echo "Installing or doing stuff"\nRUN <my_command>\nEXPOSE <app_port>\n')),Object(a.b)(i.a,{type:"info",mdxType:"Alert"},Object(a.b)("p",null,"Typical mistakes are made application configuration side. Ensure your application will listen on all interfaces ",Object(a.b)("strong",{parentName:"p"},"0.0.0.0")," and not only localhost ",Object(a.b)("strong",{parentName:"p"},"127.0.0.1"),".")),Object(a.b)("h3",{id:"cmd"},"CMD"),Object(a.b)("p",null,"Your application is now ready to run."),Object(a.b)("p",null,"The last thing to do is to specify how to execute it. Add the ",Object(a.b)("strong",{parentName:"p"},"CMD")," line with the same command with all the arguments you use locally to launch your application."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),'FROM <image_name>:<image_version>\nWORKDIR /app\nCOPY . .\nRUN echo "Installing or doing stuff"\nRUN <my_command>\nEXPOSE <app_port>\nCMD [ "<command>", "<argument_1>", "<argument_2>" ]\n')),Object(a.b)("p",null,"Like a local usage, you can set as many arguments as needed."),Object(a.b)("h3",{id:"build-your-image"},"Build your image"),Object(a.b)("p",null,"When Qovery uses your Dockerfile, it first builds it before running it."),Object(a.b)("p",null,"If the build fails, Qovery won't be able to launch our application. To simplify debugging, you can build your image locally if you have Docker installed on your computer."),Object(a.b)("p",null,"Open a terminal and set the path at the Dockerfile location, and use the command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"cd ~/my/folder/where/my/code/is\ndocker build .\n")),Object(a.b)("p",null,"It will build your image based on your Dockerfile. You'll see all the logs related to all lines you've added in the Dockerfile."),Object(a.b)("p",null,"If something goes wrong, it will be printed onto the terminal, and you'll be able to ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://stackoverflow.com/"}),"debug it"),"."),Object(a.b)("h3",{id:"test-your-image"},"Test your image"),Object(a.b)("p",null,"If your image builds properly, you can now check how it will be handle by Qovery with the command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"qovery run\n")),Object(a.b)("h2",{id:"whats-next"},"What's next?"),Object(a.b)("p",null,"If you follow this tutorial and everything works perfectly, it's time to deploy your app on Qovery. You will find all the things you need to know ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.qovery.com/docs/using-qovery/configuration/"}),"here"),"."),Object(a.b)(c.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}d.isMDXComponent=!0},347:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},348:function(e,t,n){"use strict";n(352);var o=n(0),r=n.n(o),a=n(347),i=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.classNames,o=e.fill,a=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return r.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":o,"alert--icon":!1!==a}),role:"alert"},!1!==a&&r.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),t)}},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,c({ref:t},u,{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},350:function(e,t,n){"use strict";var o=n(1),r=n(0),a=n.n(r),i=n(39),c=n(355),l=n(19),u=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,s=n||l,p=Object(c.a)(s),b=Object(r.useRef)(!1),d=u.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,p]),s&&p?a.a.createElement(i.b,Object(o.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(s),b.current=!0)},innerRef:function(e){var n,o;d&&e&&p&&(n=e,o=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:s})):a.a.createElement("a",Object(o.a)({},e,{href:s}))}},351:function(e,t,n){var o=n(25).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||n(10)&&o(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},352:function(e,t,n){var o=n(12);o(o.P,"Array",{fill:n(357)}),n(75)("fill")},353:function(e,t,n){"use strict";n(351);var o=n(0),r=n.n(o),a=n(348);t.a=function(e){var t=e.children,n=e.name;return r.a.createElement(a.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},r.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},354:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(350),i=n(347),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,o=e.badge,i=e.leftIcon,l=e.rightIcon,u=e.size,s=e.target,p=e.to,b=c()("jump-to","jump-to--"+u,n),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},o?r.a.createElement("span",{className:"badge badge--primary badge--right"},o):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return s?r.a.createElement("a",{href:p,target:s,className:b},d):r.a.createElement(a.a,{to:p,className:b},d)}},355:function(e,t,n){"use strict";function o(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return o}))},357:function(e,t,n){"use strict";var o=n(27),r=n(76),a=n(26);e.exports=function(e){for(var t=o(this),n=a(t.length),i=arguments.length,c=r(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,u=void 0===l?n:r(l,n);u>c;)t[c++]=e;return t}}}]);