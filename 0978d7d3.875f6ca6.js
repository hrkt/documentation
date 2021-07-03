/*! For license information please see 0978d7d3.875f6ca6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(343)),c=r(342),i=r(347),u={last_modified_on:"2021-06-28",title:"Rewards",description:"Here is how you can give back to the Qovery community and get rewarded",sidebar_label:"hidden",hide_pagination:!0},s={id:"community/reward",title:"Rewards",description:"Here is how you can give back to the Qovery community and get rewarded",source:"@site/docs/community/reward.md",permalink:"/docs/community/reward",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/community/reward.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Troubleshoot",permalink:"/docs/using-qovery/troubleshoot"},next:{title:"Feedback",permalink:"/docs/community/reward/feedback"}},l=[],d={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"You can apply rewards on all plans \ud83d\ude0e")),Object(o.b)("p",null,"In the following subsections, you'll learn how to give back to the Qovery community and get rewarded. This is part of our Qovery Referral program."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Read ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/blog/how-qovery-billing-works"}),"this post")," to know more about the context of our rewards.")),Object(o.b)(i.a,{to:"/docs/community/reward/bug-bounty/",mdxType:"Jump"},"Bug bounty"),Object(o.b)(i.a,{to:"/docs/community/reward/feedback/",mdxType:"Jump"},"Feedback"),Object(o.b)(i.a,{to:"/docs/community/reward/friend-sponsorship/",mdxType:"Jump"},"Friend sponsorship"),Object(o.b)(i.a,{to:"/docs/community/reward/video-record/",mdxType:"Jump"},"Video record"),Object(o.b)(i.a,{to:"/docs/community/reward/write-content/",mdxType:"Jump"},"Write content"))}p.isMDXComponent=!0},341:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},342:function(e,t,r){"use strict";r(346);var n=r(0),a=r.n(n),o=r(341),c=r.n(o);r(132);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,i=e.type,u=null;switch(i){case"danger":u="alert-triangle";break;case"success":u="check-circle";break;case"warning":u="alert-triangle";break;default:u="info"}return a.a.createElement("div",{className:c()(r,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:c()("feather","icon-"+(o||u))}),t)}},343:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?a.a.createElement(f,i({ref:t},s,{components:r})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},344:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),c=r(39),i=r(348),u=r(19),s=r.n(u);t.a=function(e){var t,r=e.to,u=e.href,l=r||u,d=Object(i.a)(l),p=Object(a.useRef)(!1),m=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!m&&d&&window.docusaurus.prefetch(l),function(){m&&t&&t.disconnect()}}),[l,m,d]),l&&d?o.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(l),p.current=!0)},innerRef:function(e){var r,n;m&&e&&d&&(r=e,n=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:l})):o.a.createElement("a",Object(n.a)({},e,{href:l}))}},346:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(350)}),r(75)("fill")},347:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(344),c=r(341),i=r.n(c);r(133);t.a=function(e){var t=e.children,r=e.className,n=e.badge,c=e.leftIcon,u=e.rightIcon,s=e.size,l=e.target,d=e.to,p=i()("jump-to","jump-to--"+s,r),m=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},c&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+c})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:d,target:l,className:p},m):a.a.createElement(o.a,{to:d,className:p},m)}},348:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))},350:function(e,t,r){"use strict";var n=r(27),a=r(76),o=r(26);e.exports=function(e){for(var t=n(this),r=o(t.length),c=arguments.length,i=a(c>1?arguments[1]:void 0,r),u=c>2?arguments[2]:void 0,s=void 0===u?r:a(u,r);s>i;)t[i++]=e;return t}}}]);