(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"0jh0":function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},"2klF":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Ck4i:function(e,t,n){var r=n("Q83E"),o=n("2klF");function c(t,n,a){return o()?e.exports=c=Reflect.construct:e.exports=c=function(e,t,n){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return n&&r(c,n.prototype),c},c.apply(null,arguments)}e.exports=c},KcSJ:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),c=n("A2+M"),a=n("7ljp"),i=n("MhRC"),u=(n("hZTp"),{pre:function(e){return o.a.createElement("div",e)},code:i.a}),p=function(e){var t=e.children,n=t;return"string"==typeof n&&(n=o.a.createElement(c.MDXRenderer,null,t)),o.a.createElement(a.MDXProvider,{components:u},n)};t.a=function(e){return o.a.createElement("div",null,o.a.createElement(p,null,e.children))}},Q83E:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},R7tm:function(e,t,n){var r=n("qHws"),o=n("gC2u"),c=n("dQcQ"),a=n("m7BV");e.exports=function(e){return r(e)||o(e)||c(e)||a()}},X8hv:function(e,t,n){var r=n("Ck4i"),o=n("R7tm"),c=n("0jh0"),a=n("uDP2");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=n("q1tI"),l=n("7ljp"),s=l.useMDXComponents,f=l.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,c=e.children,i=a(e,["scope","components","children"]),l=s(n),d=m(t),b=p.useMemo((function(){if(!c)return null;var e=u({React:p,mdx:f},d),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+c])).apply(void 0,[{}].concat(o(n)))}),[c,t]);return p.createElement(b,u({components:l},i))}},dQcQ:function(e,t,n){var r=n("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(e,t,n){var r=n("hMe3");e.exports=function(e){if(Array.isArray(e))return r(e)}},qPYn:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n("8o2o"),o=(n("q1tI"),n("7ljp")),c=n("KcSJ"),a=(n("mwIZ"),n("BXwR")),i={},u={_frontmatter:i},p=c.a;function l(e){var t,n=e.components,c=Object(r.a)(e,["components"]);return Object(o.mdx)(p,Object.assign({},u,c,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Popover"),Object(o.mdx)(a.a,{frontmatter:null==c||null===(t=c.pageContext)||void 0===t?void 0:t.frontmatter,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",{style:{fontSize:"1.5em"}},"This is a pass through component from React-Bootstrap.",Object(o.mdx)("br",null),Object(o.mdx)("a",{href:"https://react-bootstrap.github.io/components/overlays/#popovers",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),Object(o.mdx)("h5",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<>\n  {['top', 'right', 'bottom', 'left'].map((placement) => (\n    <OverlayTrigger\n      trigger=\"click\"\n      key={placement}\n      placement={placement}\n      overlay={\n        <Popover id={`popover-positioned-${placement}`}>\n          <Popover.Title as=\"h3\">{`Popover ${placement}`}</Popover.Title>\n          <Popover.Content>\n            <strong>Holy guacamole!</strong> Check this info.\n          </Popover.Content>\n        </Popover>\n      }\n    >\n      <Button variant=\"secondary\" className=\"mr-2 mb-2\">Popover on {placement}</Button>\n    </OverlayTrigger>\n  ))}\n</>\n")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-popover-mdx-45a815c94f371641df51.js.map