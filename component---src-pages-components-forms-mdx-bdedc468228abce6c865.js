(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"0jh0":function(o,n){o.exports=function(o,n,r){return n in o?Object.defineProperty(o,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[n]=r,o}},"2klF":function(o,n){o.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(o){return!1}}},"A2+M":function(o,n,r){var t=r("X8hv");o.exports={MDXRenderer:t}},Ck4i:function(o,n,r){var t=r("Q83E"),e=r("2klF");function i(n,r,a){return e()?o.exports=i=Reflect.construct:o.exports=i=function(o,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(o,e));return r&&t(i,r.prototype),i},i.apply(null,arguments)}o.exports=i},KcSJ:function(o,n,r){"use strict";var t=r("q1tI"),e=r.n(t),i=r("A2+M"),a=r("7ljp"),l=r("MhRC"),c=(r("hZTp"),{pre:function(o){return e.a.createElement("div",o)},code:l.a}),m=function(o){var n=o.children,r=n;return"string"==typeof r&&(r=e.a.createElement(i.MDXRenderer,null,n)),e.a.createElement(a.MDXProvider,{components:c},r)};n.a=function(o){return e.a.createElement("div",null,e.a.createElement(m,null,o.children))}},Q83E:function(o,n){function r(n,t){return o.exports=r=Object.setPrototypeOf||function(o,n){return o.__proto__=n,o},r(n,t)}o.exports=r},R7tm:function(o,n,r){var t=r("qHws"),e=r("gC2u"),i=r("dQcQ"),a=r("m7BV");o.exports=function(o){return t(o)||e(o)||i(o)||a()}},T1LR:function(o,n,r){"use strict";r.r(n),r.d(n,"_frontmatter",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r("8o2o"),e=(r("q1tI"),r("7ljp")),i=r("KcSJ"),a=(r("mwIZ"),r("BXwR")),l={},c={_frontmatter:l},m=i.a;function s(o){var n,r=o.components,i=Object(t.a)(o,["components"]);return Object(e.mdx)(m,Object.assign({},c,i,{components:r,mdxType:"MDXLayout"}),Object(e.mdx)("h1",null,"Forms"),Object(e.mdx)(a.a,{frontmatter:null==i||null===(n=i.pageContext)||void 0===n?void 0:n.frontmatter,mdxType:"SingleComponentStatus"}),Object(e.mdx)("h3",null,"Floating Labels"),Object(e.mdx)("pre",null,Object(e.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Form>\n  <Form.Row>\n    <Form.Group as={Col} controlId="formGridEmail">\n      <Form.Control\n        type="email"\n        floatingLabel="Email"\n      />\n      <Form.Text>\n        This is the email that we\'ll send emails to.\n      </Form.Text>\n    </Form.Group>\n\n    <Form.Group\n      as={Col}\n      controlId="formGridPassword"\n      isInvalid\n    >\n      <Form.Control\n        type="password"\n        floatingLabel="Password"\n      />\n      <Form.Control.Feedback type="invalid">\n        We don\'t like that password. Try a different one.\n      </Form.Control.Feedback>\n    </Form.Group>\n  </Form.Row>\n\n  <Form.Group\n    controlId="formGridAddress1"\n    isValid\n  >\n    <Form.Control floatingLabel="Address" />\n    <Form.Control.Feedback type="valid">\n      This is a nice place!\n    </Form.Control.Feedback>\n  </Form.Group>\n\n  <Form.Row>\n    <Form.Group as={Col} controlId="formGridCity">\n      <Form.Control floatingLabel="City" />\n    </Form.Group>\n\n    <Form.Group as={Col} controlId="formGridState">\n      <Form.Control floatingLabel="State" as="select">\n        <option value="">Choose...</option>\n        <option>...</option>\n      </Form.Control>\n    </Form.Group>\n\n    <Form.Group as={Col} controlId="formGridZip">\n      <Form.Control floatingLabel="Zip" />\n    </Form.Group>\n  </Form.Row>\n\n  <Form.Group controlId="formSwitch">\n    <Form.Check\n      type="switch"\n      id="custom-switch"\n      label="Check this switch"\n    />\n    <Form.Check\n      disabled\n      type="switch"\n      label="disabled switch"\n      id="disabled-custom-switch"\n    />\n  </Form.Group>\n\n  <Form.Group id="formGridCheckbox">\n    <Form.Check type="checkbox" id="formGridCheckboxCheck" label="Check me out" />\n  </Form.Group>\n\n  <Button variant="primary" type="submit">\n    Submit\n  </Button>\n</Form>\n')),Object(e.mdx)("h3",null,"Regular Labels"),Object(e.mdx)("pre",null,Object(e.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<Form>\n  <Form.Row>\n    <Form.Group as={Col} controlId="formGridEmail-2">\n      <Form.Label>Email</Form.Label>\n      <Form.Control type="email" placeholder="Enter email" />\n      <Form.Text muted>\n        This is the email that we\'ll send emails to.\n      </Form.Text>\n    </Form.Group>\n\n    <Form.Group isInvalid as={Col} controlId="formGridPassword-2">\n      <Form.Label>Password</Form.Label>\n      <Form.Control type="password" placeholder="Password" />\n      <Form.Control.Feedback type="invalid">\n        We don\'t like that password. Try a different one.\n      </Form.Control.Feedback>\n    </Form.Group>\n  </Form.Row>\n\n  <Form.Group controlId="formGridAddress1-2">\n    <Form.Label>Address</Form.Label>\n    <Form.Control placeholder="1234 Main St" />\n    <Form.Control.Feedback type="valid">\n      This is a nice place!\n    </Form.Control.Feedback>\n  </Form.Group>\n\n  <Form.Row>\n    <Form.Group as={Col} controlId="formGridCity-2">\n      <Form.Label>City</Form.Label>\n      <Form.Control />\n    </Form.Group>\n\n    <Form.Group as={Col} controlId="formGridState-2">\n      <Form.Label>State</Form.Label>\n      <Form.Control as="select" defaultValue="Choose...">\n        <option>Choose...</option>\n        <option>...</option>\n      </Form.Control>\n    </Form.Group>\n\n    <Form.Group as={Col} controlId="formGridZip-2">\n      <Form.Label>Zip</Form.Label>\n      <Form.Control />\n    </Form.Group>\n  </Form.Row>\n\n  <Form.Group controlId="formSwitch-2">\n    <Form.Check\n      type="switch"\n      id="custom-switch"\n      label="Check this switch"\n    />\n    <Form.Check\n      disabled\n      type="switch"\n      label="disabled switch"\n      id="disabled-custom-switch"\n    />\n  </Form.Group>\n\n  <Form.Group id="formGridCheckbox-2">\n    <Form.Check type="checkbox" id="formGridCheckboxCheck" label="Check me out" />\n  </Form.Group>\n\n  <Button variant="primary" type="submit">\n    Submit\n  </Button>\n</Form>\n')))}s.isMDXComponent=!0},X8hv:function(o,n,r){var t=r("Ck4i"),e=r("R7tm"),i=r("0jh0"),a=r("uDP2");function l(o,n){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),r.push.apply(r,t)}return r}function c(o){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(o,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(r,n))}))}return o}var m=r("q1tI"),s=r("7ljp"),u=s.useMDXComponents,p=s.mdx,d=r("BfwJ").useMDXScope;o.exports=function(o){var n=o.scope,r=o.components,i=o.children,l=a(o,["scope","components","children"]),s=u(r),f=d(n),F=m.useMemo((function(){if(!i)return null;var o=c({React:m,mdx:p},f),n=Object.keys(o),r=n.map((function(n){return o[n]}));return t(Function,["_fn"].concat(e(n),[""+i])).apply(void 0,[{}].concat(e(r)))}),[i,n]);return m.createElement(F,c({components:s},l))}},dQcQ:function(o,n,r){var t=r("hMe3");o.exports=function(o,n){if(o){if("string"==typeof o)return t(o,n);var r=Object.prototype.toString.call(o).slice(8,-1);return"Object"===r&&o.constructor&&(r=o.constructor.name),"Map"===r||"Set"===r?Array.from(o):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(o,n):void 0}}},gC2u:function(o,n){o.exports=function(o){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o))return Array.from(o)}},hMe3:function(o,n){o.exports=function(o,n){(null==n||n>o.length)&&(n=o.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=o[r];return t}},m7BV:function(o,n){o.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(o,n,r){var t=r("hMe3");o.exports=function(o){if(Array.isArray(o))return t(o)}}}]);
//# sourceMappingURL=component---src-pages-components-forms-mdx-bdedc468228abce6c865.js.map