(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(206)),l={id:"federation",title:"Apollo Federation",sidebar_label:"Apollo Federation"},i={id:"handlers/federation",title:"Apollo Federation",description:"This handler allows you to load remote Apollo Federation services.",source:"@site/docs/handlers/federation.md",permalink:"/docs/handlers/federation",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/federation.md",sidebar_label:"Apollo Federation",sidebar:"sidebar",previous:{title:"GraphQL",permalink:"/docs/handlers/graphql"},next:{title:"OpenAPI / Swagger",permalink:"/docs/handlers/openapi"}},c=[{value:"Config API Reference",id:"config-api-reference",children:[]}],p={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This handler allows you to load remote Apollo Federation services."),Object(o.b)("p",null,"To get started, install the handler library from NPM:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ yarn add @graphql-mesh/handler-federation\n")),Object(o.b)("p",null,"Now, you can use it directly in your Mesh config file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n    - name: Gateway\n      handler:\n        federation:\n          serviceList:\n            - name: accounts\n              url: http://localhost:4001/graphql\n            - name: reviews\n              url: http://localhost:4002/graphql    \n            - name: products\n              url: http://localhost:4003/graphql      \n            - name: inventory\n              url: http://localhost:4004/graphql      \n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can check out our example that uses Federation Handler.\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/federation-handler-example"}),"Click here to open the example on GitHub"))),Object(o.b)("h2",{id:"config-api-reference"},"Config API Reference"),Object(o.b)("p",null,Object(o.b)("ul",{parentName:"p"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"serviceList")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"Array of Object"),", required): ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," (type: ",Object(o.b)("inlineCode",{parentName:"li"},"String"),", required)"))))))}u.isMDXComponent=!0},206:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,m=b["".concat(l,".").concat(s)]||b[s]||d[s]||o;return r?a.a.createElement(m,i({ref:t},p,{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);