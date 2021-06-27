/*! For license information please see 71748f56.79612b1c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),i=(n(0),n(342)),a=n(345),c={last_modified_on:"2021-06-19",title:"Monitoring",description:"Learn how to configure your Monitoring provider in Qovery",sidebar_label:"hidden",hide_pagination:!0},u={id:"using-qovery/addon/monitoring",title:"Monitoring",description:"Learn how to configure your Monitoring provider in Qovery",source:"@site/docs/using-qovery/addon/monitoring.md",permalink:"/docs/using-qovery/addon/monitoring",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/addon/monitoring.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Github Actions",permalink:"/docs/using-qovery/addon/continuous-integration/github-actions"},next:{title:"Datadog",permalink:"/docs/using-qovery/addon/monitoring/datadog"}},s=[{value:"FAQ",id:"faq",children:[{value:"I don&#39;t find my Monitoring provider, what should I do?",id:"i-dont-find-my-monitoring-provider-what-should-i-do",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{to:"/docs/using-qovery/addon/monitoring/datadog",mdxType:"Jump"},"Datadog"),Object(i.b)(a.a,{to:"/docs/using-qovery/addon/monitoring/new-relic",mdxType:"Jump"},"New Relic"),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"i-dont-find-my-monitoring-provider-what-should-i-do"},"I don't find my Monitoring provider, what should I do?"),Object(i.b)("p",null,"Your Monitoring provider is probably going to be supported in the near future. ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"Contact us")," to see how we can help you."))}l.isMDXComponent=!0},340:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,m=l["".concat(a,".").concat(f)]||l[f]||p[f]||i;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},343:function(e,t,n){"use strict";var r=n(1),o=n(0),i=n.n(o),a=n(39),c=n(346),u=n(19),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,d=n||u,l=Object(c.a)(d),p=Object(o.useRef)(!1),f=s.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!f&&l&&window.docusaurus.prefetch(d),function(){f&&t&&t.disconnect()}}),[d,f,l]),d&&l?i.a.createElement(a.b,Object(r.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(d),p.current=!0)},innerRef:function(e){var n,r;f&&e&&l&&(n=e,r=function(){window.docusaurus.prefetch(d)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:d})):i.a.createElement("a",Object(r.a)({},e,{href:d}))}},345:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(343),a=n(340),c=n.n(a);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,a=e.leftIcon,u=e.rightIcon,s=e.size,d=e.target,l=e.to,p=c()("jump-to","jump-to--"+s,n),f=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},a&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+a})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return d?o.a.createElement("a",{href:l,target:d,className:p},f):o.a.createElement(i.a,{to:l,className:p},f)}},346:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);