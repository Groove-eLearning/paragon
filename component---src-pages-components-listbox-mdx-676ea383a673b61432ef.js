(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"0jh0":function(n,t){n.exports=function(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},"2klF":function(n,t){n.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}},"A2+M":function(n,t,e){var r=e("X8hv");n.exports={MDXRenderer:r}},Ck4i:function(n,t,e){var r=e("Q83E"),o=e("2klF");function i(t,e,s){return o()?n.exports=i=Reflect.construct:n.exports=i=function(n,t,e){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(n,o));return e&&r(i,e.prototype),i},i.apply(null,arguments)}n.exports=i},KVbp:function(n,t,e){"use strict";e.r(t),e.d(t,"_frontmatter",(function(){return a})),e.d(t,"default",(function(){return u}));var r=e("8o2o"),o=(e("q1tI"),e("7ljp")),i=e("KcSJ"),s=(e("mwIZ"),e("NJaX")),c=e("BXwR"),a={},p={query:"1472128993",_frontmatter:a},l=i.a;function u(n){var t,e=n.components,i=Object(r.a)(n,["components"]);return Object(o.mdx)(l,Object.assign({},p,i,{components:e,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"ListBox"),Object(o.mdx)(c.a,{frontmatter:null==i||null===(t=i.pageContext)||void 0===t?void 0:t.frontmatter,mdxType:"SingleComponentStatus"}),Object(o.mdx)("h5",null,"basic usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"<ListBox>\n  <ListBoxOption>\n    Apple\n  </ListBoxOption>\n  <ListBoxOption>\n    Orange\n  </ListBoxOption>\n  <ListBoxOption>\n    Strawberry\n  </ListBoxOption>\n  <ListBoxOption>\n    Banana\n  </ListBoxOption>\n</ListBox>\n")),Object(o.mdx)("h5",null,"using tag prop"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),'<React.Fragment>\n  <div>This is an ordered list!</div>\n  <ListBox tag="ol">\n    <ListBoxOption tag="li">\n      Apple\n    </ListBoxOption>\n    <ListBoxOption tag="li">\n      <div>Orange</div>\n    </ListBoxOption>\n    <ListBoxOption tag="li">\n      Strawberry\n    </ListBoxOption>\n    <ListBoxOption tag="li">\n      Banana\n    </ListBoxOption>\n  </ListBox>\n</React.Fragment>\n')),Object(o.mdx)("h5",null,"using onSelect prop"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"class ListBoxWrapperForOnSelect extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.onSelect = this.onSelect.bind(this);\n\n    this.state = {\n      selectedOption: null,\n      selectedOptionIndex: null,\n    };\n\n    this.fruits = {\n      Apple: '🍎',\n      Orange: '🍊',\n      Strawberry: '🍓',\n      Banana: '🍌',\n    };\n  }\n\n  onSelect(option, index) {\n    this.setState({\n      selectedOption: option,\n      selectedOptionIndex: index,\n    });\n  }\n\n  getSelectedFruitEmoji(fruit) {\n    return fruit ? this.fruits[fruit] : '';\n  }\n\n  render() {\n    const children = Object.keys(this.fruits).map((fruit, index) => (\n      <ListBoxOption\n        key={fruit}\n        onSelect={() => this.onSelect(fruit, index)}\n        style={{ textAlign: 'center' }}\n      >\n        {fruit}\n      </ListBoxOption>\n    ));\n\n    return (\n      <React.Fragment>\n        <span aria-live=\"polite\">\n          Selected Fruit:\n          {this.state.selectedOptionIndex === undefined ? (\n            <span className=\"sr-only\">none</span>\n          ) : (\n            <span\n              arialabelledby={`list-box-option-${\n                this.state.selectedOptionIndex\n              }`}\n            >\n              {this.getSelectedFruitEmoji(this.state.selectedOption)}\n            </span>\n          )}\n        </span>\n        <ListBox style={{ width: '200px' }}>\n          {children}\n        </ListBox>\n      </React.Fragment>\n    );\n  }\n}\n")),Object(o.mdx)("h5",null,"using selectedOptionIndex prop"),Object(o.mdx)("pre",null,Object(o.mdx)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"class ListBoxWrapperForSelectedOptionIndex extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.onSelect = this.onSelect.bind(this);\n    this.onButtonClick = this.onButtonClick.bind(this);\n\n    this.state = {\n      reset: true,\n    };\n\n    this.fruits = Object.keys({\n      Apple: '🍎',\n      Orange: '🍊',\n      Strawberry: '🍓',\n      Banana: '🍌',\n    });\n  }\n\n  onButtonClick() {\n    this.setState({\n      reset: true,\n    });\n  }\n\n  onSelect() {\n    this.setState({\n      reset: false,\n    });\n  }\n\n  render() {\n    const children = this.fruits.map(fruit => (\n      <ListBoxOption\n        key={fruit}\n        onSelect={this.onSelect}\n        style={{ textAlign: 'center' }}\n      >\n        {fruit}\n      </ListBoxOption>\n    ));\n\n    return (\n      <React.Fragment>\n        <Button variant=\"primary\" onClick={this.onButtonClick}>\n          Click me to reset your selected fruit!\n        </Button>\n        <ListBox\n          selectedOptionIndex={this.state.reset ? null : undefined}\n          style={{ margin: '10px' }}\n        >\n          {children}\n        </ListBox>\n      </React.Fragment>\n    );\n  }\n}\n")),Object(o.mdx)(s.a,Object.assign({},i.data.componentMetadata,{mdxType:"PropsTable"})))}u.isMDXComponent=!0},KcSJ:function(n,t,e){"use strict";var r=e("q1tI"),o=e.n(r),i=e("A2+M"),s=e("7ljp"),c=e("MhRC"),a=(e("hZTp"),{pre:function(n){return o.a.createElement("div",n)},code:c.a}),p=function(n){var t=n.children,e=t;return"string"==typeof e&&(e=o.a.createElement(i.MDXRenderer,null,t)),o.a.createElement(s.MDXProvider,{components:a},e)};t.a=function(n){return o.a.createElement("div",null,o.a.createElement(p,null,n.children))}},Q83E:function(n,t){function e(t,r){return n.exports=e=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},e(t,r)}n.exports=e},R7tm:function(n,t,e){var r=e("qHws"),o=e("gC2u"),i=e("dQcQ"),s=e("m7BV");n.exports=function(n){return r(n)||o(n)||i(n)||s()}},X8hv:function(n,t,e){var r=e("Ck4i"),o=e("R7tm"),i=e("0jh0"),s=e("uDP2");function c(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?c(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var p=e("q1tI"),l=e("7ljp"),u=l.useMDXComponents,d=l.mdx,f=e("BfwJ").useMDXScope;n.exports=function(n){var t=n.scope,e=n.components,i=n.children,c=s(n,["scope","components","children"]),l=u(e),m=f(t),x=p.useMemo((function(){if(!i)return null;var n=a({React:p,mdx:d},m),t=Object.keys(n),e=t.map((function(t){return n[t]}));return r(Function,["_fn"].concat(o(t),[""+i])).apply(void 0,[{}].concat(o(e)))}),[i,t]);return p.createElement(x,a({components:l},c))}},dQcQ:function(n,t,e){var r=e("hMe3");n.exports=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}},gC2u:function(n,t){n.exports=function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},hMe3:function(n,t){n.exports=function(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}},m7BV:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},qHws:function(n,t,e){var r=e("hMe3");n.exports=function(n){if(Array.isArray(n))return r(n)}}}]);
//# sourceMappingURL=component---src-pages-components-listbox-mdx-676ea383a673b61432ef.js.map