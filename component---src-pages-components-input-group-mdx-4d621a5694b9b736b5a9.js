(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"0jh0":function(n,t){n.exports=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},"2klF":function(n,t){n.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}},"A2+M":function(n,t,e){var r=e("X8hv");n.exports={MDXRenderer:r}},Ck4i:function(n,t,e){var r=e("Q83E"),o=e("2klF");function u(t,e,p){return o()?n.exports=u=Reflect.construct:n.exports=u=function(n,t,e){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(n,o));return e&&r(u,e.prototype),u},u.apply(null,arguments)}n.exports=u},GSqq:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return a})),e.d(t,"default",(function(){return s}));var r=e("8o2o"),o=(e("q1tI"),e("7ljp")),u=e("KcSJ"),p=(e("mwIZ"),e("BXwR")),a={},c={_frontmatter:a},i=u.a;function s(n){var t,e=n.components,u=Object(r.a)(n,["components"]);return Object(o.mdx)(i,Object.assign({},c,u,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Input Group"),Object(o.mdx)(p.a,{frontmatter:null==u||null===(t=u.pageContext)||void 0===t?void 0:t.frontmatter,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",{style:{fontSize:"1.5em"}},"This is a pass through component from React-Bootstrap.",Object(o.mdx)("br",null),Object(o.mdx)("a",{href:"https://react-bootstrap.github.io/components/input-group/",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),Object(o.mdx)("h5",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div>\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl\n      placeholder="Username"\n      aria-label="Username"\n      aria-describedby="basic-addon1"\n    />\n  </InputGroup>\n\n  <InputGroup className="mb-3">\n    <FormControl\n      placeholder="Recipient\'s username"\n      aria-label="Recipient\'s username"\n      aria-describedby="basic-addon2"\n    />\n    <InputGroup.Append>\n      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>\n    </InputGroup.Append>\n  </InputGroup>\n\n  <label htmlFor="basic-url">Your vanity URL</label>\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text id="basic-addon3">\n        https://example.com/users/\n      </InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl id="basic-url" aria-describedby="basic-addon3" />\n  </InputGroup>\n\n  <InputGroup className="mb-3">\n    <InputGroup.Prepend>\n      <InputGroup.Text>$</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl aria-label="Amount (to the nearest dollar)" />\n    <InputGroup.Append>\n      <InputGroup.Text>.00</InputGroup.Text>\n    </InputGroup.Append>\n  </InputGroup>\n\n  <InputGroup>\n    <InputGroup.Prepend>\n      <InputGroup.Text>With textarea</InputGroup.Text>\n    </InputGroup.Prepend>\n    <FormControl as="textarea" aria-label="With textarea" />\n  </InputGroup>\n</div>\n')))}s.isMDXComponent=!0},KcSJ:function(n,t,e){"use strict";var r=e("q1tI"),o=e.n(r),u=e("A2+M"),p=e("7ljp"),a=e("MhRC"),c=(e("hZTp"),{pre:function(n){return o.a.createElement("div",n)},code:a.a}),i=function(n){var t=n.children,e=t;return"string"==typeof e&&(e=o.a.createElement(u.MDXRenderer,null,t)),o.a.createElement(p.MDXProvider,{components:c},e)};t.a=function(n){return o.a.createElement("div",null,o.a.createElement(i,null,n.children))}},Q83E:function(n,t){function e(t,r){return n.exports=e=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},e(t,r)}n.exports=e},R7tm:function(n,t,e){var r=e("qHws"),o=e("gC2u"),u=e("dQcQ"),p=e("m7BV");n.exports=function(n){return r(n)||o(n)||u(n)||p()}},X8hv:function(n,t,e){var r=e("Ck4i"),o=e("R7tm"),u=e("0jh0"),p=e("uDP2");function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var i=e("q1tI"),s=e("7ljp"),l=s.useMDXComponents,d=s.mdx,f=e("BfwJ").useMDXScope;n.exports=function(n){var t=n.scope,e=n.components,u=n.children,a=p(n,["scope","components","children"]),s=l(e),m=f(t),b=i.useMemo((function(){if(!u)return null;var n=c({React:i,mdx:d},m),t=Object.keys(n),e=t.map((function(t){return n[t]}));return r(Function,["_fn"].concat(o(t),[""+u])).apply(void 0,[{}].concat(o(e)))}),[u,t]);return i.createElement(b,c({components:s},a))}},dQcQ:function(n,t,e){var r=e("hMe3");n.exports=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}},gC2u:function(n,t){n.exports=function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},hMe3:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}},m7BV:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(n,t,e){var r=e("hMe3");n.exports=function(n){if(Array.isArray(n))return r(n)}}}]);
//# sourceMappingURL=component---src-pages-components-input-group-mdx-4d621a5694b9b736b5a9.js.map