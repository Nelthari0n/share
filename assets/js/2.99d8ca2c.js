(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{268:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"j",function(){return r}),n.d(e,"i",function(){return o}),n.d(e,"f",function(){return l}),n.d(e,"g",function(){return u}),n.d(e,"h",function(){return c}),n.d(e,"b",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"l",function(){return f}),n.d(e,"m",function(){return d}),n.d(e,"c",function(){return g}),n.d(e,"k",function(){return v});const i=/#.*$/,s=/\.(md|html)$/,a=/\/$/,r=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return r.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;const e=t.match(i),n=e?e[0]:"",s=o(t);return a.test(s)?t:s+".html"+n}function p(t,e){const n=t.hash,s=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function f(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:s,themeConfig:a}=n,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=r.sidebar||a.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,i,s=1){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});{s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const a=e.children||[];return 0===a.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map(e=>t(e,n,i,s+1)),collapsable:!1!==e.collapsable}}})(e,s,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},269:function(t,e,n){"use strict";var i=n(9),s=n(74)(3);i(i.P+i.F*!n(52)([].some,!0),"Array",{some:function(t){return s(this,t,arguments[1])}})},271:function(t,e,n){},272:function(t,e,n){},273:function(t,e,n){},274:function(t,e,n){},275:function(t,e,n){},276:function(t,e,n){},277:function(t,e,n){},278:function(t,e,n){},279:function(t,e,n){},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){},283:function(t,e,n){},286:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},287:function(t,e,n){"use strict";var i=n(12),s=n(31),a=n(157),r=n(158);n(159)("match",1,function(t,e,n,o){return[function(n){var i=t(this),s=null==n?void 0:n[e];return void 0!==s?s.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var l=i(t),u=String(this);if(!l.global)return r(l,u);var c=l.unicode;l.lastIndex=0;for(var h,p=[],f=0;null!==(h=r(l,u));){var d=String(h[0]);p[f]=d,""===d&&(l.lastIndex=a(u,s(l.lastIndex),c)),f++}return 0===f?null:p}]})},288:function(t,e,n){"use strict";n.r(e);n(269);var i=n(268),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(289).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(288).default},methods:{isActive:i.e}},a=(n(309),n(11)),r=Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(73);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,s,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>a?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var u=Object(i.e)(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u),l(t,e.children,n,s,a,r+1)])}))}var u={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,s=n.$page,a=(n.$site,n.$route),r=n.$themeConfig,u=n.$themeLocaleConfig,c=e.props,h=c.item,p=c.sidebarDepth,f=Object(i.e)(a,h.path),d="auto"===h.type?f||h.children.some(function(t){return Object(i.e)(a,h.basePath+"#"+t.slug)}):f,g=o(t,h.path,h.title||h.path,d),v=s.frontmatter.sidebarDepth||p||u.sidebarDepth||r.sidebarDepth,m=null==v?1:v,b=u.displayAllHeaders||r.displayAllHeaders;return"auto"===h.type?[g,l(t,h.children,h.basePath,a,m)]:(d||b)&&h.headers&&!i.d.test(h.path)?[g,l(t,Object(i.c)(h.headers),h.path,a,m)]:g}};n(310);var c={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var s=e[n];if("group"===s.type&&s.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(a.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},289:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(304),n(11)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=a.exports},291:function(t,e,n){"use strict";n(292)("link",function(t){return function(e){return t(this,"a","href",e)}})},292:function(t,e,n){var i=n(9),s=n(21),a=n(29),r=/"/g,o=function(t,e,n,i){var s=String(a(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},293:function(t,e,n){"use strict";var i=n(271);n.n(i).a},294:function(t,e,n){t.exports=n(295)},295:function(t,e,n){n(296),t.exports=n(1).parseInt},296:function(t,e,n){var i=n(3),s=n(297);i(i.G+i.F*(parseInt!=s),{parseInt:s})},297:function(t,e,n){var i=n(5).parseInt,s=n(298).trim,a=n(286),r=/^[-+]?0[xX]/;t.exports=8!==i(a+"08")||22!==i(a+"0x16")?function(t,e){var n=s(String(t),3);return i(n,e>>>0||(r.test(n)?16:10))}:i},298:function(t,e,n){var i=n(3),s=n(75),a=n(22),r=n(286),o="["+r+"]",l=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(t,e,n){var s={},o=a(function(){return!!r[t]()||"​"!="​"[t]()}),l=s[t]=o?e(h):r[t];n&&(s[n]=l),i(i.P+i.F*o,"String",s)},h=c.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=c},299:function(t,e,n){"use strict";var i=n(9),s=n(151)(!1),a=[].indexOf,r=!!a&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(r||!n(52)(a)),"Array",{indexOf:function(t){return r?a.apply(this,arguments)||0:s(this,t,arguments[1])}})},300:function(t,e,n){"use strict";n(156)("trim",function(t){return function(){return t(this,3)}})},301:function(t,e,n){"use strict";var i=n(272);n.n(i).a},302:function(t,e,n){"use strict";var i=n(273);n.n(i).a},303:function(t,e,n){var i=n(7),s=n(154),a=n(28).f,r=n(155).f,o=n(153),l=n(160),u=i.RegExp,c=u,h=u.prototype,p=/a/g,f=/a/g,d=new u(p)!==p;if(n(18)&&(!d||n(21)(function(){return f[n(4)("match")]=!1,u(p)!=p||u(f)==f||"/a/i"!=u(p,"i")}))){u=function(t,e){var n=this instanceof u,i=o(t),a=void 0===e;return!n&&i&&t.constructor===u&&a?t:s(d?new c(i&&!a?t.source:t,e):c((i=t instanceof u)?t.source:t,i&&a?l.call(t):e),n?this:h,u)};for(var g=function(t){t in u||a(u,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},v=r(c),m=0;v.length>m;)g(v[m++]);h.constructor=u,u.prototype=h,n(30)(i,"RegExp",u)}n(152)("RegExp")},304:function(t,e,n){"use strict";var i=n(274);n.n(i).a},305:function(t,e,n){"use strict";var i=n(275);n.n(i).a},306:function(t,e,n){"use strict";var i=n(276);n.n(i).a},307:function(t,e,n){"use strict";var i=n(277);n.n(i).a},308:function(t,e,n){"use strict";var i=n(278);n.n(i).a},309:function(t,e,n){"use strict";var i=n(279);n.n(i).a},310:function(t,e,n){"use strict";var i=n(280);n.n(i).a},311:function(t,e,n){"use strict";var i=n(281);n.n(i).a},312:function(t,e,n){"use strict";var i=n(282);n.n(i).a},313:function(t,e,n){"use strict";var i=n(283);n.n(i).a},316:function(t,e,n){"use strict";n.r(e);var i=n(27),s=n.n(i),a=(n(269),n(291),n(268)),r={props:{item:{required:!0}},computed:{link:function(){return Object(a.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?s()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:a.f,isMailto:a.g,isTel:a.h}},o=n(11),l=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,u={components:{NavLink:l},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},c=(n(293),Object(o.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),h=n(294),p=n.n(h),f=(n(287),n(76),n(127)),d=n.n(f),g=n(26),v=n.n(g),m=(n(299),n(300),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],a=0;a<e.length&&!(s.length>=5);a++){var r=e[a];if(this.getPageLocalePath(r)===n&&this.isSearchable(r))if(i(r))s.push(r);else if(r.headers)for(var o=0;o<r.headers.length&&!(s.length>=5);o++){var l=r.headers[o];i(l)&&s.push(v()({},r,{path:r.path+"#"+l.slug,header:l}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=d()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),b=(n(301),Object(o.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),_=(n(302),Object(o.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),k=(n(303),n(37)),x=(n(150),n(73),{components:{NavLink:l,DropdownTransition:n(289).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),$=(n(305),{components:{NavLink:l,DropdownLink:Object(o.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&s()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,a=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:s()(e).map(function(s){var r,o=e[s],l=a[s]&&a[s].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,s),i.some(function(t){return t.path===r})||(r=s)),{text:l,link:r}})};return[].concat(Object(k.a)(this.userNav),[r])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return v()(Object(a.k)(t),{items:(t.items||[]).map(a.k)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),C=(n(306),Object(o.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function w(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var L={components:{SidebarButton:_,NavLinks:C,SearchBox:b,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=p()(w(this.$el,"paddingLeft"))+p()(w(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(n(307),Object(o.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function y(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[s+n]}}var O={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(a.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,y(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(a.l)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,y(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,r=t.docsBranch,o=void 0===r?"master":r,l=t.docsRepo,u=void 0===l?e:l,c=Object(a.i)(this.$page.path);return a.a.test(c)?c+="README.md":c+=".md",u&&n?this.createEditLink(e,u,s,o,c):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(a.j.test(e)?e:t).replace(a.a,"")+"/src"+"/".concat(i)+(n?"/"+n.replace(a.a,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(a.j.test(e)?e:"https://github.com/".concat(e)).replace(a.a,"")+"/edit/".concat(i)+(n?"/"+n.replace(a.a,""):"")+s}}},I=(n(308),Object(o.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),j={name:"Sidebar",components:{SidebarLinks:n(288).default,NavLinks:C},props:["items"]},E=(n(311),{components:{Home:c,Page:I,Sidebar:Object(o.a)(j,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(a.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),T=(n(312),n(313),Object(o.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=T.exports}}]);