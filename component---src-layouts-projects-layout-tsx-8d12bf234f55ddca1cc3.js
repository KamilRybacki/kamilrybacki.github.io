/*! For license information please see component---src-layouts-projects-layout-tsx-8d12bf234f55ddca1cc3.js.LICENSE.txt */
(self.webpackChunkkamilrybacki=self.webpackChunkkamilrybacki||[]).push([[13],{9591:function(e,t,n){var r=n(8).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return Z()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=k(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=f;var h={};function m(){}function p(){}function y(){}var v={};s(v,l,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(O([])));x&&x!==n&&i.call(x,l)&&(v=x);var w=y.prototype=m.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,l,c){var u=d(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,l,c)}),(function(e){n("throw",e,l,c)})):t.resolve(f).then((function(e){s.value=e,l(s)}),(function(e){return n("throw",e,l,c)}))}c(u.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function k(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=d(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function O(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return p.prototype=y,s(w,"constructor",y),s(y,"constructor",p),p.displayName=s(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},b(E.prototype),s(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),s(w,u,"Generator"),s(w,l,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:O(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},7757:function(e,t,n){e.exports=n(9591)()},4342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ue}});var r=n(7294),o=n(1597);function i(e,t,n,r,o,i,a){try{var l=e[i](a),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,o)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function l(e){i(a,r,o,l,c,"next",e)}function c(e){i(a,r,o,l,c,"throw",e)}l(void 0)}))}}var l=n(7757),c=n.n(l),u=n(3549),s=n(1880),f=n(8648),d=n.n(f),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var p={color:"#38ad48",enabled:!0,size:50,style:{}},y=function(e){return parseFloat(e.toString()).toString()===e.toString()?e+"px":e.toString()},v=h(h({},{speed:100,still:!1,thickness:100}),{secondaryColor:"rgba(0,0,0,0.44)"});!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("@keyframes spinners-react-circular-fixed{0%{stroke-dashoffset:325}to{stroke-dashoffset:151}}");var g=function(e){var t=e.secondaryColor,n=e.speed,o=e.still,i=e.thickness,a=m(e,["secondaryColor","speed","still","thickness"]),l=i/100*4,c=o?{}:{animation:"spinners-react-circular-fixed "+140/n+"s linear infinite"};return r.createElement("svg",h({fill:"none"},a,{viewBox:"0 0 66 66"}),r.createElement("circle",{cx:"33",cy:"33",fill:"none",r:"28",stroke:t,strokeWidth:l}),r.createElement("circle",{cx:"33",cy:"33",fill:"none",r:"28",stroke:"currentColor",strokeDasharray:"40, 134",strokeDashoffset:"325",strokeLinecap:"round",strokeWidth:l,style:c}))};g.defaultProps=v;var x,w,b,E,k,L,_,j,O,Z,S,P,C,N,F,T,G,z,B,I=function(e){var t=function(t){var n=t.color,o=t.enabled,i=t.size,a=t.style,l=m(t,["color","enabled","size","style"]),c=h(h({},l),{style:h({color:n,overflow:"visible",width:y(i)},a)});return o?r.createElement(e,h({},c)):null};return t.defaultProps=p,t}(g),R=d()(I)(x||(x=(0,s.Z)(["\n    m-auto\n"]))),A=function(e){var t=e.size,n=r.useContext(u.$);return r.createElement(R,{color:n.colors.accent[500],secondaryColor:n.colors.primary[900],size:t})},M=d().div(w||(w=(0,s.Z)(["\n    relative\n    flex\n    flex-wrap\n    flex-auto\n    justify-between\n    bg-secondary-50\n    p-3\n    my-5\n    border-2\n    rounded-lg\n    border-primary-100\n    overflow-x-hidden\n    overflow-y-scroll\n    overscroll-contain\n    scrollbar-thin\n    mx-auto\n    gap-1\n\n    lg:mt-3\n    lg:py-6\n"]))),D=d().img(b||(b=(0,s.Z)(["\n    my-1\n    w-8\n    h-8\n\n    md:mx-1\n    lg:w-10\n    lg:h-10\n    lg:mx-3\n"]))),U=function(e){var t=e.techs,n=r.useState([]),i=n[0],a=n[1],l=(0,o.K2)("3545564474");return r.useEffect((function(){a(l.allFile.edges.filter((function(e){return t.includes(e.node.name)})).map((function(e){return e.node.publicURL})).map((function(e,t){return r.createElement(D,{key:"stack_"+t,src:e,alt:"Stack icon"})})))}),[]),r.createElement(M,null,i||r.createElement(A,{size:"30%"}))},W=n(8613),Y=d().div(E||(E=(0,s.Z)(["\n    flex\n    flex-col\n\n    md:relative\n    md:w-1/4\n"]))),q=d().p(k||(k=(0,s.Z)(["\n    my-5\n    mx-auto\n    text-2xl\n    font-heading\n    font-bold\n    underline\n\n    md:text-3xl\n    lg:text-5xl\n"]))),H=d().p(L||(L=(0,s.Z)(["\n    underline\n    text-sm\n    font-bold\n\n    md:text-lg\n"]))),K=d().p(_||(_=(0,s.Z)(["\n    font-sans\n    text-xl\n    w-full\n    mb-5\n    text-justify\n    \n    md:overflow-y-scroll\n    md:scrollbar-thin\n    md:h-20\n    lg-text-2xl\n    lg:h-40\n"]))),Q=d().a(j||(j=(0,s.Z)(["\n    relative\n    w-1/3\n    text-center\n    text-2xl\n    font-bold\n    font-heading\n    bg-primary-900\n    text-accent-200\n    mx-auto\n    px-3\n    py-2\n\n    hover:text-secondary-100\n"]))),$=d().span(O||(O=(0,s.Z)(["\n    relative\n    text-4xl\n    font-bold\n    font-heading\n    underline\n    w-full\n    my-5\n\n    md:mt-10\n"]))),J=d().article(Z||(Z=(0,s.Z)(["\n    w-full\n"]))),V=d().h1(S||(S=(0,s.Z)(["\n    font-heading\n    font-bold\n    text-primary-900\n    text-3xl\n    mb-8\n    bg-secondary-100\n    px-4\n    pt-3\n    pb-2\n    h-fit\n    text-center\n    underline\n    decoration-dotted\n    decoration-from-font\n    underline-offset-[1rem]\n\n    max-w-full\n    md:text-6xl\n    md:pt-5\n    md:pb-3\n    md:top-8\n    md:mb-12\n    md:text-left\n"]))),X=d().div(P||(P=(0,s.Z)(["\n    flex\n    flex-col\n    w-full\n    gap-4\n    h-fit\n\n    md:h-1/3\n    md:flex-row\n    md:justify-center\n    md:align-middle\n    md:gap-10\n    \n    lg:h-fit\n    lg:gap-20\n"]))),ee=d().section(C||(C=(0,s.Z)(["\n    flex\n    flex-nowrap\n    gap-5\n    overflow-x-scroll\n    overflow-y-hidden\n\n    md:flex-col\n    md:gap-0\n    md:overflow-x-hidden\n    md:overflow-y-scroll\n    md:w-[50vw]\n\n    lg:w-fit\n    lg:flex-row\n    lg:gap-5\n    lg:overflow-hidden\n"]))),te=d().img(N||(N=(0,s.Z)(["\n    bg-secondary-50\n    mb-4\n    w-screen\n    h-fit\n\n    md:w-full\n    md:mb-0\n\n    lg:max-w-lg\n    lg:relative\n    lg:top-10\n"]))),ne=d().div(F||(F=(0,s.Z)(["\n    relative\n    flex\n    flex-row\n    flex-nowrap\n    flex-shrink-0\n    align-middle\n    justify-center\n    m-auto\n    gap-4\n    h-full\n    scrollbar-thin\n\n    md:h-fit\n    md:mt-14\n    md:overflow-x-hidden\n    md:overflow-y-scroll\n    md:flex-col\n"]))),re=d().img(T||(T=(0,s.Z)(["\n    w-screen\n    lg:w-[25vw]\n"]))),oe=d().p(G||(G=(0,s.Z)(["\n    mt-7\n    underline\n    text-2xl\n    font-heading\n    tracking-tighter\n    font-bold\n    \n    md:text-4xl\n"]))),ie=d().main(z||(z=(0,s.Z)(["\n    flex\n    flex-col\n    align-middle\n    justify-center\n    mt-2\n    pb-10\n    w-full\n    bg-secondary-50\n\n    md:mt-4\n"]))),ae=d().button(B||(B=(0,s.Z)(["\n    mx-auto\n    my-5\n    p-2\n    text-sans\n    font-bold\n    border-[1px]\n    border-primary-500\n    border-dashed\n    duration-200\n\n    hover:translate-y-1\n    hover:border-solid\n    hover:bg-accent-50\n\n    active:bg-accent-100\n"]))),le=function(e){var t=e.pictures;return r.createElement(ne,null,t.map((function(e,t){return r.createElement(re,{src:e,key:"smpic_"+t})})))},ce=function(e){var t=e.readme,n=e.title,o=e.gallery,i=e.abstract,l=e.techs,s=e.link,f=e.content,d=r.useState(""),h=d[0],m=d[1],p=r.useState(),y=p[0],v=p[1],g=r.useState(!1),x=g[0],w=g[1],b=function(){var e=a(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=a(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(r.createElement(A,{id:"readme_spinner",size:"5rem"})),e.next=3,fetch(t).then((function(e){return e.text()})).then((function(e){return"404: Not Found"===e?"<strong>\n    Failed loading Readme!\n    </strong>\n    <br/> Check the link in the post frontmatter.\n":e})).then((function(e){m(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=3,n();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.useEffect((function(){if("none"===t){var e=document.getElementById("readme_button");e&&(e.outerHTML="")}""!==h&&w(!0)}),[h]),r.createElement(u.Z,{extraClass:"w-full"},r.createElement(J,null,r.createElement(V,null,n),r.createElement(X,null,3===o.length?r.createElement(ee,null,r.createElement(te,{src:o[0]}),r.createElement(le,{pictures:o.slice(1)})):r.createElement(r.Fragment,null),r.createElement(Y,null,r.createElement(q,null,"Project info"),r.createElement(H,{className:"my-2 "},"Quick rundown:"),r.createElement(K,null,i),r.createElement(H,{className:"mt-1"},"Tech Stack:"),r.createElement(U,{techs:l}),r.createElement(Q,{href:s},"Link"))),r.createElement(oe,null,"The whole story"),r.createElement(ie,null,r.createElement(W.Z,{mdx:!0},f),x?r.createElement(r.Fragment,null,r.createElement($,null,"Project Readme.md"),r.createElement(W.Z,{className:"mt-10",linkTarget:"_blank"},h)):y||r.createElement(ae,{id:"readme_button",onClick:function(){b()}},"Load Readme.md"))))},ue=function(e){var t=e.pageContext;return r.createElement(o.i1,{query:"2098254665",render:function(e){var n="galleries/"+t.frontmatter.gallery,o=e.allFile.edges.map((function(e){if(e.node.absolutePath.includes(n))return e.node.publicURL})).filter(Boolean);return r.createElement(ce,{readme:t.frontmatter.readme,title:t.frontmatter.title,gallery:o,abstract:t.frontmatter.abstract,techs:t.frontmatter.techs,link:t.frontmatter.link,content:t.content})}})}}}]);
//# sourceMappingURL=component---src-layouts-projects-layout-tsx-8d12bf234f55ddca1cc3.js.map