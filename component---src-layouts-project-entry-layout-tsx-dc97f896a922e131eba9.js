(self.webpackChunkkamilrybacki=self.webpackChunkkamilrybacki||[]).push([[89],{9100:function(t,e,n){var r=n(9489),o=n(7067);function l(e,n,c){return o()?(t.exports=l=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=l=function(t,e,n){var o=[null];o.push.apply(o,e);var l=new(Function.bind.apply(t,o));return n&&r(l,n.prototype),l},t.exports.__esModule=!0,t.exports.default=t.exports),l.apply(null,arguments)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},7067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},2102:function(t,e,n){var r=n(2632);t.exports={MDXRenderer:r}},2632:function(t,e,n){var r=n(9100),o=n(319),l=n(9713),c=n(7316),a=["scope","children"];function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=n(7294),f=n(4983).mdx,m=n(6948).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,l=c(t,a),i=m(e),p=s.useMemo((function(){if(!n)return null;var t=u({React:s,mdx:f},i),e=Object.keys(t),l=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(l)))}),[n,e]);return s.createElement(p,u({},l))}},7104:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return z}});var r=n(1880),o=n(7294),l=n(8648),c=n.n(l),a=n(2102),i=n(1597),u=n(5896);var s=n(181);function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,l=[],c=!0,a=!1;try{for(n=n.call(t);!(c=(r=n.next()).done)&&(l.push(r.value),!e||l.length!==e);c=!0);}catch(i){a=!0,o=i}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return l}}(t,e)||(0,s.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=n(4942);function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var d=["count","wrapper","className","containerClassName","containerTestId","circle","style"];function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){(0,m.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h,b,v=o.createContext({});function x(t){for(var e,n,r,l=t.count,c=void 0===l?1:l,a=t.wrapper,i=t.className,u=t.containerClassName,s=t.containerTestId,m=t.circle,y=void 0!==m&&m,h=t.style,b=p(t,d),x=o.useContext(v),w=g({},b),O=0,j=Object.entries(b);O<j.length;O++){var E=f(j[O],2),k=E[0];void 0===E[1]&&delete w[k]}var P=g(g(g({},x),w),{},{circle:y}),Z=g(g({},h),function(t){var e=t.baseColor,n=t.highlightColor,r=t.width,o=t.height,l=t.borderRadius,c=t.circle,a=t.direction,i=t.duration,u=t.enableAnimation,s=void 0===u||u,f={};return"rtl"===a&&(f["--animation-direction"]="reverse"),"number"==typeof i&&(f["--animation-duration"]="".concat(i,"s")),s||(f["--pseudo-element-display"]="none"),"string"!=typeof r&&"number"!=typeof r||(f.width=r),"string"!=typeof o&&"number"!=typeof o||(f.height=o),"string"!=typeof l&&"number"!=typeof l||(f.borderRadius=l),c&&(f.borderRadius="50%"),void 0!==e&&(f["--base-color"]=e),void 0!==n&&(f["--highlight-color"]=n),f}(P)),R="react-loading-skeleton";i&&(R+=" ".concat(i));for(var S=null!==(e=P.inline)&&void 0!==e&&e,D=[],_=Math.ceil(c),C=0;C<_;C++){var N=Z;if(_>c&&C===_-1){var M=null!==(n=N.width)&&void 0!==n?n:"100%",I=c%1,T="number"==typeof M?M*I:"calc(".concat(M," * ").concat(I,")");N=g(g({},N),{},{width:T})}var A=o.createElement("span",{className:R,style:N,key:C},"‌");S?D.push(A):D.push(o.createElement(o.Fragment,{key:C},A,o.createElement("br",null)))}return o.createElement("span",{className:u,"data-testid":s,"aria-live":"polite","aria-busy":null===(r=P.enableAnimation)||void 0===r||r},a?D.map((function(t,e){return o.createElement(a,{key:e},t)})):D)}var w,O,j,E,k,P,Z,R,S,D,_=c().div(h||(h=(0,r.Z)(["\n\tflex\n\tflex-wrap\n\tflex-auto\n\tjustify-between\n\tbg-secondary-500\n\tp-3\n\tmy-5\n\tborder-2\n\trounded-lg\n\tborder-primary-100\n\toverflow-x-hidden\n\toverflow-y-scroll\n\toverscroll-contain\n\tscrollbar-thin\n\tw-[90%]\n\tmx-auto\n\n\tlg:mt-3\n\tlg:mr-10\n\tlg:py-6\n"]))),C=c().img(b||(b=(0,r.Z)(["\n\tmy-1\n\tw-8\n\th-8\n\n\tmd:mx-1\n\tlg:w-10\n\tlg:h-10\n\tlg:mx-3\n"]))),N=function(t){var e=t.techs,n=(0,o.useState)([]),r=n[0],l=n[1];return(0,o.useEffect)((function(){fetch("https://api.github.com/repos/get-icon/geticon/branches/master").then((function(t){return t.json()})).then((function(t){return t.commit.sha})).then((function(t){return fetch("https://api.github.com/repos/get-icon/geticon/git/trees/"+t).then((function(t){return t.json()})).then((function(t){var n=t.tree.filter((function(t){return"icons"==t.path}))[0].url;return fetch(n).then((function(t){return t.json()})).then((function(t){return t.tree})).then((function(t){var n=[];t.forEach((function(t){var r=t.path.replace(".svg","").replace("-icon","");if(e.includes(r))if(n.includes("https://raw.githubusercontent.com/get-icon/geticon/master/icons/"+r+".svg")){var o=n.indexOf("https://raw.githubusercontent.com/get-icon/geticon/master/icons/"+r+".svg");n[o]="https://raw.githubusercontent.com/get-icon/geticon/master/icons/"+r+"-icon.svg"}else n.push("https://raw.githubusercontent.com/get-icon/geticon/master/icons/"+r+".svg")})),l(n)}))}))}))}),[]),o.createElement(_,null,r.map((function(t,e){return o.createElement(C,{key:"stack_"+e,src:t,alt:t.split("/").at(-1).replace(".svg","")})}))||o.createElement(x,{count:2}))},M=c().article(w||(w=(0,r.Z)(["\n\tw-full\n"]))),I=c().h1(O||(O=(0,r.Z)(["\n\tfont-display\n\tfont-bold\n\ttext-primary-500\n\ttext-3xl\n\tmb-8\n\tbg-primary-100\n\tpx-4\n\tpy-2\n\th-fit\n\ttext-center\n\n\tmax-w-full\n\tmd:text-6xl\n\tmd:py-5\n\tmd:top-8\n\tmd:mb-12\n\tmd:text-left\n"]))),T=c().div(j||(j=(0,r.Z)(["\n\tflex\n\tflex-col\n\tw-full\n\tgap-4\n\th-fit\n\n\tmd:h-1/3\n\tmd:flex-row\n\tmd:justify-center\n\tmd:align-middle\n\tmd:gap-10\n\t\n\tlg:h-fit\n\tlg:gap-20\n"]))),A=c().section(E||(E=(0,r.Z)(["\n\tflex\n\tflex-nowrap\n\tgap-5\n\toverflow-x-scroll\n\toverflow-y-hidden\n\n\tmd:flex-col\n\tmd:gap-0\n\tmd:overflow-x-hidden\n\tmd:overflow-y-scroll\n\tmd:w-[50vw]\n\n\tlg:w-fit\n\tlg:flex-row\n\tlg:gap-5\n\tlg:overflow-hidden\n"]))),F=c().img(k||(k=(0,r.Z)(["\n\tbg-secondary-500\n\tmb-4\n\tborder-8\n\tborder-primary-500\n\tw-screen\n\th-fit\n\n\tmd:w-full\n\tmd:mb-0\n\n\tlg:max-w-lg\n\tlg:relative\n\tlg:top-10\n"]))),X=c().main(P||(P=(0,r.Z)(["\n\tflex\n\tflex-col\n\talign-middle\n\tjustify-center\n\tmt-4\n\tpx-5\n\tpt-3\n\tpb-10\n\tw-fit\n\tbg-secondary-500\n"]))),B=c().div(Z||(Z=(0,r.Z)(["\n\trelative\n\tflex\n\tflex-row\n\tflex-nowrap\n\tflex-shrink-0\n\talign-middle\n\tjustify-center\n\tm-auto\n\tgap-4\n\th-full\n\tscrollbar-thin\n\n\tmd:h-fit\n\tmd:mt-14\n\tmd:overflow-x-hidden\n\tmd:overflow-y-scroll\n\tmd:flex-col\n"]))),q=c().img(R||(R=(0,r.Z)(["\n\tborder-4\n\tborder-primary-500\n\tw-screen\n\tlg:w-[25vw]\n"]))),L=function(t){var e=t.pictures;return o.createElement(B,null,e.map((function(t,e){return o.createElement(q,{src:t,key:"smpic_"+e})})))},Q=c().div(S||(S=(0,r.Z)(["\n\tflex\n\tflex-col\n\n\tmd:relative\n\tmd:w-1/4\n"]))),U=c().p(D||(D=(0,r.Z)(["\n\tfont-body\n\ttext-xl\n\tw-full\n\tmb-5\n\n\t\n\tmd:overflow-y-scroll\n\tmd:scrollbar-thin\n\tmd:h-20\n\tlg-text-2xl\n\tlg:h-40\n"]))),z=function(t){var e=t.pageContext;return o.createElement(i.i1,{query:"90615735",render:function(t){var n=t.allFile.edges.map((function(t){if(t.node.absolutePath.includes("galleries/"+e.frontmatter.gallery))return t.node.publicURL}));return o.createElement(u.Z,{extraClass:"w-full"},o.createElement(M,null,o.createElement(I,null,e.frontmatter.title),o.createElement(T,null,o.createElement(A,null,o.createElement(F,{src:n[0]}),o.createElement(L,{pictures:n.slice(1)})),o.createElement(Q,null,o.createElement("p",{className:"my-5 mx-auto text-2xl md:my-3 md:text-3xl lg:text-5xl font-display font-bold"},"Project info"),o.createElement("p",{className:"my-2 underline text-sm md:text-lg font-bold"},"Quick rundown:"),o.createElement(U,null,e.frontmatter.abstract),o.createElement("p",{className:"mt-1 underline text-sm md:text-lg font-bold"},"Tech Stack:"),o.createElement(N,{techs:e.frontmatter.techs}))),o.createElement("p",{className:"mt-7 underline text-2xl md:text-4xl font-display tracking-tighter font-bold"},"The whole story"),o.createElement(X,null,o.createElement(a.MDXRenderer,null,e.content))))}})}}}]);
//# sourceMappingURL=component---src-layouts-project-entry-layout-tsx-dc97f896a922e131eba9.js.map