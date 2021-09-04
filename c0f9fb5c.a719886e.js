/*! For license information please see c0f9fb5c.a719886e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{299:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(349)),i=n(358),c=(n(348),n(353),n(354)),l={last_modified_on:"2021-09-04",$schema:"/.meta/.schemas/guides.json",title:"How to deploy Strapi with PostgreSQL",description:"This tutorial show you how to deploy Strapi with PostgreSQL in a few steps",author_github:"https://github.com/evoxmusic",tags:["type: tutorial","framework: strapi","database: postgresql"],hide_pagination:!0},s={categories:[{name:"tutorial",title:"Tutorial",description:"Simple step-by-step tutorials.",permalink:"/guides/tutorial"}],coverLabel:"How to deploy Strapi with PostgreSQL",description:"This tutorial show you how to deploy Strapi with PostgreSQL in a few steps",permalink:"/guides/tutorial/how-to-deploy-strapi-with-postgresql",readingTime:"2 min read",source:"@site/guides/tutorial/how-to-deploy-strapi-with-postgresql.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"framework: strapi",permalink:"/guides/tags/framework-strapi"},{label:"database: postgresql",permalink:"/guides/tags/database-postgresql"}],title:"How to deploy Strapi with PostgreSQL",truncated:!1,prevItem:{title:"How to deploy NuxtJS",permalink:"/guides/tutorial/how-to-deploy-nuxtjs"},nextItem:{title:"How to migrate your PostHog self-hosted to PostHog Cloud",permalink:"/guides/engineering/how-to-migrate-posthog-self-hosted-to-posthog-cloud"}},u=[{value:"Deploying with the web interface",id:"deploying-with-the-web-interface",children:[{value:"Create a Qovery Account",id:"create-a-qovery-account",children:[]},{value:"Create a new project",id:"create-a-new-project",children:[]},{value:"Create a new environment",id:"create-a-new-environment",children:[]},{value:"Create a new application",id:"create-a-new-application",children:[]},{value:"Deploy a database",id:"deploy-a-database",children:[]},{value:"Add storage",id:"add-storage",children:[]},{value:"Setup your Strapi configuration:",id:"setup-your-strapi-configuration",children:[]}]},{value:"Deploy your application",id:"deploy-your-application",children:[]}],p={rightToc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This tutorial is linked to this ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/qovery.html"}),"Strapi tutorial"))),Object(o.b)("p",null,"This is a step-by-step guide for deploying a Strapi project on Qovery."),Object(o.b)("h2",{id:"deploying-with-the-web-interface"},"Deploying with the web interface"),Object(o.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-qovery-account"},"Create a Qovery Account"),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://start.qovery.com"}),"the Qovery dashboard")," to create an account if you don't already have one.")),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-project"},"Create a new project"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-2.png",alt:"Strapi"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-environment"},"Create a new environment"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-3.png",alt:"Strapi"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"create-a-new-application"},"Create a new application"),Object(o.b)("p",null,"Select your Github or Gitlab repository where your Strapi app is located:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/rust/rust.png",alt:"Migrate from Heroku"})),Object(o.b)("p",null,"After the application is created: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate application settings"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Port")),Object(o.b)("li",{parentName:"ul"},"Add port used by our Strapi application")),Object(o.b)("p",{align:"left"},Object(o.b)("img",{src:"/img/micro/micros-1.png",alt:"Microservices"})),Object(o.b)("p",null,"This will expose your application and make accessible in the public internet.")),Object(o.b)("li",null,Object(o.b)("h3",{id:"deploy-a-database"},"Deploy a database"),Object(o.b)("p",null,"Create and deploy a new database PostgreSQL database"),Object(o.b)("p",null,"To learn how to do it, you can ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"follow this guide"))),Object(o.b)("li",null,Object(o.b)("h3",{id:"add-storage"},"Add storage"),Object(o.b)("p",null,"To add storage, go to your Strapi application ",Object(o.b)("strong",{parentName:"p"},"Settings"),":"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/add-storage.png",alt:"Add Storage"}))),Object(o.b)("li",null,Object(o.b)("h3",{id:"setup-your-strapi-configuration"},"Setup your Strapi configuration:"),Object(o.b)("p",null,"To use PostgreSQL provided by Qovery, you can use the built-in secrets and environment variables.\nYou can read more about environment variables and secrets in our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/using-qovery/configuration/environment-variable/"}),"configuration section"),".")),Object(o.b)("h2",{id:"deploy-your-application"},"Deploy your application"),Object(o.b)("p",null,"All you have to do now is to navigate to your application and click ",Object(o.b)("strong",{parentName:"p"},"Deploy")," button"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/heroku/heroku-1.png",alt:"Deploy App"})),Object(o.b)("p",null,"That's it. Watch the status and wait till the app is deployed."),Object(o.b)("p",null,"To open the application in your browser, click on ",Object(o.b)("strong",{parentName:"p"},"Action")," and ",Object(o.b)("strong",{parentName:"p"},"Open")," buttons in your application overview:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"/img/deploy-env-1.png",alt:"Open App"})))),Object(o.b)(c.a,{to:"/guides/tutorial/",mdxType:"Jump"},"Tutorial"))}b.isMDXComponent=!0},347:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},348:function(e,t,n){"use strict";n(352);var r=n(0),a=n.n(r),o=n(347),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:i()(n,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,c({ref:t},s,{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},350:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(355),l=n(19),s=n.n(l);t.a=function(e){var t,n=e.to,l=e.href,u=n||l,p=Object(c.a)(u),b=Object(a.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(u),function(){d&&t&&t.disconnect()}}),[u,d,p]),u&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(u),b.current=!0)},innerRef:function(e){var n,r;d&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):o.a.createElement("a",Object(r.a)({},e,{href:u}))}},351:function(e,t,n){var r=n(25).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},352:function(e,t,n){var r=n(12);r(r.P,"Array",{fill:n(357)}),n(75)("fill")},353:function(e,t,n){"use strict";n(351);var r=n(0),a=n.n(r),o=n(348);t.a=function(e){var t=e.children,n=e.name;return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",n||"page"," assumes the following:"),t)}},354:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(350),i=n(347),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,l=e.rightIcon,s=e.size,u=e.target,p=e.to,b=c()("jump-to","jump-to--"+s,n),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:p,target:u,className:b},d):a.a.createElement(o.a,{to:p,className:b},d)}},355:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},356:function(e,t,n){"use strict";var r=n(360),a=n(52);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=a({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),a=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),n(decodeURIComponent(a),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r},t.stringify=function(e,t){var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t=a({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(r){var a=e[r];if(void 0===a)return"";if(null===a)return o(r,t);if(Array.isArray(a)){var i=[];return a.slice().forEach((function(e){void 0!==e&&i.push(n(r,e,i.length))})),i.join("&")}return o(r,t)+"="+o(a,t)})).filter((function(e){return e.length>0})).join("&"):""}},357:function(e,t,n){"use strict";var r=n(27),a=n(76),o=n(26);e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),l=i>2?arguments[2]:void 0,s=void 0===l?n:a(l,n);s>c;)t[c++]=e;return t}},358:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(347),n(356)),i=n.n(o);n(134);t.a=function(e){var t=e.children,n=e.headingDepth,o=e.hideFeedbackQuestion,c="undefined"!=typeof window?window.location:null,l={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+i.a.stringify(l),u=Object(r.useState)(null),p=u[0],b=u[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!o&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))}},360:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);