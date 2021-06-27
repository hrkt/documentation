/*! For license information please see 005ae1b2.3244ade3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(342)),i=n(345),c={last_modified_on:"2021-06-19",title:"Gitlab CI",description:"Learn how to configure and plug your Gitlab CI account"},u={id:"using-qovery/addon/continuous-integration/gitlab-ci",title:"Gitlab CI",description:"Learn how to configure and plug your Gitlab CI account",source:"@site/docs/using-qovery/addon/continuous-integration/gitlab-ci.md",permalink:"/docs/using-qovery/addon/continuous-integration/gitlab-ci",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/addon/continuous-integration/gitlab-ci.md",sidebar:"docs",previous:{title:"Qovery CI",permalink:"/docs/using-qovery/addon/continuous-integration/qovery-ci"},next:{title:"Circle CI",permalink:"/docs/using-qovery/addon/continuous-integration/circle-ci"}},s=[{value:"Available Build platforms",id:"available-build-platforms",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Gitlab CI is coming soon (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/c/40-gitlab-ci"}),"see when"),"). Vote ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://roadmap.qovery.com/c/40-gitlab-ci"}),"here")," to make it happen faster."),Object(o.b)("h2",{id:"available-build-platforms"},"Available Build platforms"),Object(o.b)(i.a,{to:"/docs/using-qovery/addon/continuous-integration/qovery-ci",mdxType:"Jump"},"Qovery CI"))}p.isMDXComponent=!0},340:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},343:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(39),c=n(346),u=n(19),s=n.n(u);t.a=function(e){var t,n=e.to,u=e.href,l=n||u,p=Object(c.a)(l),f=Object(a.useRef)(!1),d=s.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!d&&p&&window.docusaurus.prefetch(l),function(){d&&t&&t.disconnect()}}),[l,d,p]),l&&p?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(l),f.current=!0)},innerRef:function(e){var n,r;d&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):o.a.createElement("a",Object(r.a)({},e,{href:l}))}},345:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(343),i=n(340),c=n.n(i);n(133);t.a=function(e){var t=e.children,n=e.className,r=e.badge,i=e.leftIcon,u=e.rightIcon,s=e.size,l=e.target,p=e.to,f=c()("jump-to","jump-to--"+s,n),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},i&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+i})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return l?a.a.createElement("a",{href:p,target:l,className:f},d):a.a.createElement(o.a,{to:p,className:f},d)}},346:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);