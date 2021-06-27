/*! For license information please see baf9cc25.9812df91.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{283:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(1),n=a(9),o=(a(0),a(342)),i=a(341),c={last_modified_on:"2021-06-26",title:"PostgreSQL",description:"How to set up and use a PostgreSQL database"},l={id:"using-qovery/configuration/database/postgresql",title:"PostgreSQL",description:"How to set up and use a PostgreSQL database",source:"@site/docs/using-qovery/configuration/database/postgresql.md",permalink:"/docs/using-qovery/configuration/database/postgresql",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/database/postgresql.md",sidebar:"docs",previous:{title:"Databases",permalink:"/docs/using-qovery/configuration/database"},next:{title:"MySQL",permalink:"/docs/using-qovery/configuration/database/mysql"}},s=[{value:"Create a PostgreSQL database",id:"create-a-postgresql-database",children:[]},{value:"Modes",id:"modes",children:[{value:"Managed Service",id:"managed-service",children:[]},{value:"Container",id:"container",children:[]}]},{value:"Link your PostgreSQL database to your application",id:"link-your-postgresql-database-to-your-application",children:[]},{value:"Supported versions",id:"supported-versions",children:[]},{value:"Credentials",id:"credentials",children:[]},{value:"Manage logical databases",id:"manage-logical-databases",children:[]},{value:"Health check",id:"health-check",children:[]},{value:"Delete your PostgreSQL instance",id:"delete-your-postgresql-instance",children:[]},{value:"Backups",id:"backups",children:[]},{value:"Scaling",id:"scaling",children:[]}],u={rightToc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{type:"warning",mdxType:"Alert"},Object(o.b)("p",null,"WORK IN PROGRESS - THIS DOCUMENTATION IS OUTDATED")),Object(o.b)("p",null,"PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Check out ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/getting-started/create-a-database/"}),"this video guide")," to create and deploy your first database")),Object(o.b)("h2",{id:"create-a-postgresql-database"},"Create a PostgreSQL database"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"modes"},"Modes"),Object(o.b)("h3",{id:"managed-service"},"Managed Service"),Object(o.b)("p",null,"TODO"),Object(o.b)("h3",{id:"container"},"Container"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"link-your-postgresql-database-to-your-application"},"Link your PostgreSQL database to your application"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"supported-versions"},"Supported versions"),Object(o.b)("p",null,"Qovery supports the following PostgreSQL versions."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Version"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Supported"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"12"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes")))),Object(o.b)("h2",{id:"credentials"},"Credentials"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"manage-logical-databases"},"Manage logical databases"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"health-check"},"Health check"),Object(o.b)("p",null,"TODO"),Object(o.b)("h2",{id:"delete-your-postgresql-instance"},"Delete your PostgreSQL instance"),Object(o.b)(i.a,{type:"danger",mdxType:"Alert"},Object(o.b)("p",null,"Delete action drops the service and its data!")),Object(o.b)("p",null,"To delete a database, you have to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Remove it from the configuration file, commit and push."),Object(o.b)("li",{parentName:"ul"},"Delete it manually (for security purpose) through the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://start.qovery.com"}),"Qovery web interface"),".")),Object(o.b)(i.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Backups from production environments are kept for 1 month if you need to recover.")),Object(o.b)("h2",{id:"backups"},"Backups"),Object(o.b)("p",null,"Daily backups for your Backups database are automatically done for databases in managed mode."),Object(o.b)("h2",{id:"scaling"},"Scaling"),Object(o.b)("p",null,"TODO"))}b.isMDXComponent=!0},340:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)a.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},341:function(e,t,a){"use strict";a(344);var r=a(0),n=a.n(r),o=a(340),i=a.n(o);a(132);t.a=function(e){var t=e.children,a=e.classNames,r=e.fill,o=e.icon,c=e.type,l=null;switch(c){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return n.a.createElement("div",{className:i()(a,"alert","alert--"+c,{"alert--fill":r,"alert--icon":!1!==o}),role:"alert"},!1!==o&&n.a.createElement("i",{className:i()("feather","icon-"+(o||l))}),t)}},342:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=r,O=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?n.a.createElement(O,c({ref:t},s,{components:a})):n.a.createElement(O,c({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},344:function(e,t,a){var r=a(12);r(r.P,"Array",{fill:a(348)}),a(75)("fill")},348:function(e,t,a){"use strict";var r=a(26),n=a(76),o=a(25);e.exports=function(e){for(var t=r(this),a=o(t.length),i=arguments.length,c=n(i>1?arguments[1]:void 0,a),l=i>2?arguments[2]:void 0,s=void 0===l?a:n(l,a);s>c;)t[c++]=e;return t}}}]);