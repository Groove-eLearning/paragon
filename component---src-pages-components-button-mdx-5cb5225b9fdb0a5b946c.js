(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"0jh0":function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},"2klF":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"A2+M":function(t,e,n){var r=n("X8hv");t.exports={MDXRenderer:r}},Ck4i:function(t,e,n){var r=n("Q83E"),a=n("2klF");function o(e,n,i){return a()?t.exports=o=Reflect.construct:t.exports=o=function(t,e,n){var a=[null];a.push.apply(a,e);var o=new(Function.bind.apply(t,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}t.exports=o},KcSJ:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("A2+M"),i=n("7ljp"),c=n("MhRC"),u=(n("hZTp"),{pre:function(t){return a.a.createElement("div",t)},code:c.a}),s=function(t){var e=t.children,n=e;return"string"==typeof n&&(n=a.a.createElement(o.MDXRenderer,null,e)),a.a.createElement(i.MDXProvider,{components:u},n)};e.a=function(t){return a.a.createElement("div",null,a.a.createElement(s,null,t.children))}},Q83E:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},R7tm:function(t,e,n){var r=n("qHws"),a=n("gC2u"),o=n("dQcQ"),i=n("m7BV");t.exports=function(t){return r(t)||a(t)||o(t)||i()}},X8hv:function(t,e,n){var r=n("Ck4i"),a=n("R7tm"),o=n("0jh0"),i=n("uDP2");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=n("q1tI"),l=n("7ljp"),m=l.useMDXComponents,p=l.mdx,d=n("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,c=i(t,["scope","components","children"]),l=m(n),b=d(e),v=s.useMemo((function(){if(!o)return null;var t=u({React:s,mdx:p},b),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(a(e),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,e]);return s.createElement(v,u({components:l},c))}},dQcQ:function(t,e,n){var r=n("hMe3");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},gC2u:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},hMe3:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},m7BV:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},q3rD:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return u})),n.d(e,"default",(function(){return m}));var r=n("8o2o"),a=(n("q1tI"),n("7ljp")),o=n("KcSJ"),i=(n("mwIZ"),n("NJaX")),c=n("BXwR"),u={},s={query:"759394896",_frontmatter:u},l=o.a;function m(t){var e,n=t.components,o=Object(r.a)(t,["components"]);return Object(a.mdx)(l,Object.assign({},s,o,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"Button"),Object(a.mdx)(c.a,{frontmatter:null==o||null===(e=o.pageContext)||void 0===e?void 0:e.frontmatter,mdxType:"SingleComponentStatus"}),Object(a.mdx)("p",{style:{fontSize:"1.5em"}},"This is a pass through component from React-Bootstrap.",Object(a.mdx)("br",null),Object(a.mdx)("a",{href:"https://react-bootstrap.github.io/components/cards/",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),Object(a.mdx)("h5",null,"Core Buttons"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<>\n  <Button variant=\"brand\">Brand</Button>{' '}\n  <Button variant=\"outline-brand\">Outline Brand</Button>{' '}\n  <Button variant=\"primary\">Primary</Button>{' '}\n  <Button variant=\"outline-primary\">Outline Primary</Button>{' '}\n  <Button variant=\"tertiary\">Tertiary</Button>{' '}\n</>\n")),Object(a.mdx)("h5",null,"Core Buttons (Inverse Pallete)"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div className="bg-dark-700 p-4">\n  <Button variant="inverse-brand">Brand</Button>{\' \'}\n  <Button variant="inverse-outline-brand">Outline Brand</Button>{\' \'}\n  <Button variant="inverse-primary">Primary</Button>{\' \'}\n  <Button variant="inverse-outline-primary">Outline Primary</Button>{\' \'}\n  <Button variant="inverse-tertiary">Tertiary</Button>{\' \'}\n</div>\n')),Object(a.mdx)("h5",null,"Utility Buttons"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<>\n  <div className="mb-2">\n    <Button variant="success">Success</Button>{\' \'}\n    <Button variant="danger">Danger</Button>{\' \'}\n    <Button variant="outline-success">Success</Button>{\' \'}\n    <Button variant="outline-danger">Danger</Button>{\' \'}\n  </div>\n  <div className="mb-2">\n    <Button variant="link">Link</Button>{\' \'}\n    <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{\' \'}\n    <Button variant="outline-light">Light</Button>{\' \'}\n    <Button variant="outline-dark">Dark</Button>\n  </div>\n</>\n')),Object(a.mdx)("h5",null,"Size"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<>\n  <div className="mb-2">\n    <Button variant="primary" size="lg">\n      Large button\n    </Button>{\' \'}\n    <Button variant="outline-primary" size="lg">\n      Large button\n    </Button>\n  </div>\n  <div>\n    <Button variant="primary" size="sm">\n      Small button\n    </Button>{\' \'}\n    <Button variant="outline-primary" size="sm">\n      Small button\n    </Button>\n  </div>\n  <div>\n    <Button variant="link" size="inline">Inline button</Button>\n    <Button variant="link" size="inline">Inline button</Button>\n  </div>\n</>\n')),Object(a.mdx)("h5",null,"When to use the inline size"),Object(a.mdx)("p",null,"Use inline size buttons for when a button sits with a line of text."),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<>\n  <p>\n    <span className="mr-1">2 items selected.</span>\n    <Button variant="link" size="inline" className="mr-1">Select all</Button>\n    <Button variant="link" size="inline">Clear</Button>\n  </p>\n</>\n')),Object(a.mdx)("h5",null,"Block Buttons"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<>\n  <Button variant="primary" size="lg" block>\n    Block level button\n  </Button>\n  <Button variant="secondary" size="lg" block>\n    Block level button\n  </Button>\n</>\n')),Object(a.mdx)("hr",null),Object(a.mdx)("h2",null,"Button/Deprecated"),Object(a.mdx)("h5",null,"Basic Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Button.Deprecated className="btn-primary">Hello World!</Button.Deprecated>\n')),Object(a.mdx)("h5",null,"Color Variants"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div>\n  <Button.Deprecated className="btn-primary">Primary</Button.Deprecated>\n  <Button.Deprecated className="btn-success">Success</Button.Deprecated>\n  <Button.Deprecated className="btn-danger">Danger</Button.Deprecated>\n  <Button.Deprecated className="btn-light">Light</Button.Deprecated>\n  <Button.Deprecated className="btn-dark">Dark</Button.Deprecated>\n</div>\n')),Object(a.mdx)("h5",null,"Outline Variants"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div>\n  <Button.Deprecated className="btn-outline-primary">Primary</Button.Deprecated>\n  <Button.Deprecated className="btn-outline-success">Success</Button.Deprecated>\n  <Button.Deprecated className="btn-outline-danger">Danger</Button.Deprecated>\n</div>\n')),Object(a.mdx)("h5",null,"Inverse Variants"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div className="bg-gray-700 p-3">\n  <Button.Deprecated className="btn-inverse-primary">Primary</Button.Deprecated>\n  <Button.Deprecated className="btn-inverse-success">Success</Button.Deprecated>\n  <Button.Deprecated className="btn-inverse-danger">Danger</Button.Deprecated>\n</div>\n')),Object(a.mdx)("h5",null,"Link Variant"),Object(a.mdx)("pre",null,Object(a.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<div className="bg-gray-200 p-3">\n  <Button.Deprecated className="btn-link">Link with button container</Button.Deprecated>\n  <br />\n  <Button.Deprecated className="btn-link px-0">Button with no horizontal padding</Button.Deprecated>\n</div>\n')),Object(a.mdx)(i.a,Object.assign({},o.data.componentMetadata,{mdxType:"PropsTable"})))}m.isMDXComponent=!0},qHws:function(t,e,n){var r=n("hMe3");t.exports=function(t){if(Array.isArray(t))return r(t)}}}]);
//# sourceMappingURL=component---src-pages-components-button-mdx-5cb5225b9fdb0a5b946c.js.map