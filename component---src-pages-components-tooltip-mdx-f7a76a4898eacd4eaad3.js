(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"0jh0":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"2klF":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Ck4i:function(t,e,n){var r=n("Q83E"),o=n("2klF");function c(e,n,a){return o()?t.exports=c=Reflect.construct:t.exports=c=function(t,e,n){var o=[null];o.push.apply(o,e);var c=new(Function.bind.apply(t,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}t.exports=c},KcSJ:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("A2+M"),a=n("7ljp"),i=n("MhRC"),u=(n("hZTp"),{pre:function(t){return o.a.createElement("div",t)},code:i.a}),p=function(t){var e=t.children,n=e;return"string"==typeof n&&(n=o.a.createElement(c.MDXRenderer,null,e)),o.a.createElement(a.MDXProvider,{components:u},n)};e.a=function(t){return o.a.createElement("div",null,o.a.createElement(p,null,t.children))}},Q83E:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},R7tm:function(t,e,n){var r=n("qHws"),o=n("gC2u"),c=n("dQcQ"),a=n("m7BV");t.exports=function(t){return r(t)||o(t)||c(t)||a()}},TzUa:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return l}));var r=n("8o2o"),o=(n("q1tI"),n("7ljp")),c=n("KcSJ"),a=(n("mwIZ"),n("BXwR")),i={},u={_frontmatter:i},p=c.a;function l(t){var e,n=t.components,c=Object(r.a)(t,["components"]);return Object(o.mdx)(p,Object.assign({},u,c,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Tooltip"),Object(o.mdx)(a.a,{frontmatter:null==c||null===(e=c.pageContext)||void 0===e?void 0:e.frontmatter,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",{style:{fontSize:"1.5em"}},"This is a pass through component from React-Bootstrap.",Object(o.mdx)("br",null),Object(o.mdx)("a",{href:"https://react-bootstrap.github.io/components/overlays#tooltips",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),Object(o.mdx)("h5",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<>\n  {['top', 'right', 'bottom', 'left'].map((placement) => (\n    <OverlayTrigger\n      key={placement}\n      placement={placement}\n      overlay={\n        <Tooltip id={`tooltip-${placement}`}>\n          Tooltip on <strong>{placement}</strong>.\n        </Tooltip>\n      }\n    >\n      <Button variant=\"primary\" className=\"mr-2 mb-2\">Tooltip on {placement}</Button>\n    </OverlayTrigger>\n  ))}\n</>\n")))}l.isMDXComponent=!0},X8hv:function(t,e,n){var r=n("Ck4i"),o=n("R7tm"),c=n("0jh0"),a=n("uDP2");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=n("q1tI"),l=n("7ljp"),s=l.useMDXComponents,f=l.mdx,m=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,i=a(t,["scope","components","children"]),l=s(n),b=m(e),d=p.useMemo((function(){if(!c)return null;var t=u({React:p,mdx:f},b),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,e]);return p.createElement(d,u({components:l},i))}},dQcQ:function(t,e,n){var r=n("hMe3");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},gC2u:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},m7BV:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(t,e,n){var r=n("hMe3");t.exports=function(t){if(Array.isArray(t))return r(t)}}}]);
//# sourceMappingURL=component---src-pages-components-tooltip-mdx-f7a76a4898eacd4eaad3.js.map