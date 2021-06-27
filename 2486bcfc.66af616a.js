(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),c=(n(0),n(342)),o={last_modified_on:"2021-06-19",title:"Encryption",description:"End to end encryption for safe data transit and storage"},i={id:"security-and-compliance/encryption",title:"Encryption",description:"End to end encryption for safe data transit and storage",source:"@site/docs/security-and-compliance/encryption.md",permalink:"/docs/security-and-compliance/encryption",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/security-and-compliance/encryption.md",sidebar:"docs",previous:{title:"Backup and Restore",permalink:"/docs/security-and-compliance/backup-and-restore"},next:{title:"GDPR",permalink:"/docs/security-and-compliance/gdpr"}},s=[{value:"Data in transit",id:"data-in-transit",children:[]},{value:"Data storage",id:"data-storage",children:[]},{value:"Secrets",id:"secrets",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"data-in-transit"},"Data in transit"),Object(c.b)("p",null,"Data in transit between the World and Qovery is always encrypted, as all of the services which Qovery supports. Services include the Qovery CLI, management console, Documentation, Landing Page, and Back Office."),Object(c.b)("p",null,"Data in transit between the World and customer applications is encrypted. By default, HTTPS connections use an automatically generated Let's Encrypt certificate, or users may provide their own TLS certificate (Enterprise only)."),Object(c.b)("p",null,"Data in transit on Qovery controlled networks (e.g., between the application and a database) use end-to-end encryption and private networking rules."),Object(c.b)("h2",{id:"data-storage"},"Data storage"),Object(c.b)("p",null,"All application data is encrypted by using encrypted storage (typically using an AES-256 block cipher). If you have specific audit requirements surrounding data at rest encryption, please ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"contact us"),"."),Object(c.b)("h2",{id:"secrets"},"Secrets"),Object(c.b)("p",null,"All secrets data is encrypted by using salted AES-256."))}l.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=r,f=d["".concat(o,".").concat(y)]||d[y]||u[y]||c;return n?a.a.createElement(f,i({ref:t},p,{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);