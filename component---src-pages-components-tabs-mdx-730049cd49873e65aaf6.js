(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},KcSJ:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("A2+M"),c=n("7ljp"),l=n("MhRC"),i=(n("hZTp"),{pre:function(e){return o.a.createElement("div",e)},code:l.a}),u=function(e){var t=e.children,n=t;return"string"==typeof n&&(n=o.a.createElement(a.MDXRenderer,null,t)),o.a.createElement(c.MDXProvider,{components:i},n)};t.a=function(e){return o.a.createElement("div",null,o.a.createElement(u,null,e.children))}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),a=n("lSNA"),c=n("8OQS");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("q1tI"),s=n("7ljp"),p=s.useMDXComponents,f=s.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,a=e.children,l=c(e,["scope","components","children"]),s=p(n),b=m(t),d=u.useMemo((function(){if(!a)return null;var e=i({React:u,mdx:f},b),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+a])).apply(void 0,[{}].concat(o(n)))}),[a,t]);return u.createElement(d,i({components:s},l))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},rvk5:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n("zLVn"),o=(n("q1tI"),n("7ljp")),a=n("KcSJ"),c=n("Wbzz"),l=n("mwIZ"),i=n.n(l),u=n("NJaX"),s=n("BXwR"),p={},f={_frontmatter:p},m=a.a;function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.mdx)(m,Object.assign({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Tabs"),Object(o.mdx)(s.a,{frontmatter:i()(n,"pageContext.frontmatter")?n.pageContext.frontmatter:null,mdxType:"SingleComponentStatus"}),Object(o.mdx)("p",{style:{fontSize:"1.5em"}},"This is a pass through component from React-Bootstrap.",Object(o.mdx)("br",null),Object(o.mdx)("a",{href:"https://react-bootstrap.github.io/components/cards/",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),Object(o.mdx)("h5",null,"Uncontrolled Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">\n  <Tab eventKey="home" title="Home">\n    Hello I am the first panel.\n  </Tab>\n  <Tab eventKey="profile" title="Profile">\n    Hello I am the second panel.\n  </Tab>\n  <Tab eventKey="contact" title="Contact" disabled>\n    Hello I am third first panel.\n  </Tab>\n</Tabs>\n')),Object(o.mdx)("h5",null,"Controlled Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'() => {\n  const [key, setKey] = useState(\'home\');\n\n  return (\n    <Tabs\n      id="controlled-tab-example"\n      activeKey={key}\n      onSelect={(k) => setKey(k)}\n    >\n      <Tab eventKey="home" title="Home">\n        Hello I am the first panel.\n      </Tab>\n      <Tab eventKey="profile" title="Profile">\n        Hello I am the second panel.\n      </Tab>\n      <Tab eventKey="contact" title="Contact" disabled>\n        Hello I am third first panel.\n      </Tab>\n    </Tabs>\n  );\n}\n')),Object(o.mdx)("hr",null),Object(o.mdx)("h2",null,"Tabs.Deprecated"),Object(o.mdx)("h5",null,"Basic Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<Tabs.Deprecated\n  labels={[\n    'Panel 1',\n    'Panel 2',\n    'Panel 3'\n  ]}\n>\n  <div>Hello I am the first panel</div>\n  <div>Hello I am the second panel</div>\n  <div>Hello I am the third panel</div>\n</Tabs.Deprecated>\n")),Object(o.mdx)("h5",null,"Props"),Object(o.mdx)(c.StaticQuery,{query:"4092443619",render:function(e){var t=e.componentMetadata;return null==t?null:Object(o.mdx)(u.a,{propMetaData:t.props,mdxType:"PropsTable"})},mdxType:"StaticQuery"}))}b.isMDXComponent=!0},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function a(t,n,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-components-tabs-mdx-730049cd49873e65aaf6.js.map