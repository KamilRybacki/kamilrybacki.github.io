(self.webpackChunkkamilrybacki=self.webpackChunkkamilrybacki||[]).push([[811],{9100:function(t,e,n){var r=n(9489),o=n(7067);function l(e,n,a){return o()?(t.exports=l=Reflect.construct,t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=l=function(t,e,n){var o=[null];o.push.apply(o,e);var l=new(Function.bind.apply(t,o));return n&&r(l,n.prototype),l},t.exports.__esModule=!0,t.exports.default=t.exports),l.apply(null,arguments)}t.exports=l,t.exports.__esModule=!0,t.exports.default=t.exports},7067:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},2102:function(t,e,n){var r=n(2632);t.exports={MDXRenderer:r}},2632:function(t,e,n){var r=n(9100),o=n(319),l=n(9713),a=n(7316),c=["scope","children"];function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p=n(7294),s=n(4983).mdx,f=n(6948).useMDXScope;t.exports=function(t){var e=t.scope,n=t.children,l=a(t,c),u=f(e),m=p.useMemo((function(){if(!n)return null;var t=i({React:p,mdx:s},u),e=Object.keys(t),l=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+n])).apply(void 0,[{}].concat(o(l)))}),[n,e]);return p.createElement(m,i({},l))}},3269:function(t,e,n){"use strict";n.r(e);var r,o,l,a,c,u,i,p,s,f=n(1880),m=n(7294),d=n(8648),x=n.n(d),b=n(1074),y=n(2102),h=n(1597),g=n(5896),v=x().article(r||(r=(0,f.Z)(["\n"]))),O=b.default.div.withConfig({displayName:"BlogPostLayout__ThumbnailWrapper",componentId:"sc-1tx8vhl-0"})(['position:relative;display:flex;padding:2rem;justify-content:space-between;height:15rem;&::before{position:absolute;top:0;left:0;bottom:0;right:0;content:"";width:100%;height:100%;z-index:-1;background-image:url(',");}"],(function(t){return t.thumbnail})),w=x().div(o||(o=(0,f.Z)(["\n\tflex\n\talign-middle\n\tjustify-between\n\tw-full\n"]))),E=x().h1(l||(l=(0,f.Z)(["\n\trelative\n\tfont-display\n\tfont-bold\n\ttext-secondary-100\n\ttext-3xl\n\tmb-4\n\tbg-primary-900\n\tp-3\n\th-fit\n\t-top-12\n\t-left-12\n\n\tmd:left-0\n\tmd:top-0\n\tmd:text-5xl\n"]))),j=x().time(a||(a=(0,f.Z)(["\n\tmt-5\n\tmr-5\n\tw-max\n\th-max\n\tfont-sans\n\ttext-sm\n"]))),k=x().menu(c||(c=(0,f.Z)(["\n\tflex\n\tmt-5\n\tml-5\n\tmb-8\n\th-2\n"]))),_=x().span(u||(u=(0,f.Z)(["\n\tfont-sans\n\ttext-sm\n\ttext-primary-300\n\tmr-2\n"]))),P=x()(h.rU)(i||(i=(0,f.Z)(["\n\th-max\n\tw-max\n\tmr-2\n\tpx-2\n\tpy-0.25\n\trounded-sm\n\tbg-primary-100\n\tfont-mono\n\ttracking-tighter\n\ttext-sm\n\ttext-primary-600\n\n\thover:-translate-x-0.5\n\thover:-translate-y-0.5\n"]))),R=x().hr(p||(p=(0,f.Z)(["\n\trelative\n\th-[0.1rem]\n\tleft-[1%]\n\tw-[98%]\n\tborder-0\n\tbg-primary-300\n\tmb-4\n"]))),Z=x().main(s||(s=(0,f.Z)(["\n\tflex\n\tflex-col\n\talign-middle\n\tjustify-center\n\tpx-5\n\tpt-3\n\tpb-10\n\tbg-secondary-500\n"])));e.default=function(t){var e=t.pageContext;return m.createElement(h.i1,{query:"4050616067",render:function(t){var n=t.allFile.edges.map((function(t){if(t.node.publicURL.includes(e.frontmatter.thumbnail))return t.node.publicURL}))[0];return m.createElement(g.Z,null,m.createElement(v,null,m.createElement(O,{thumbnail:n},m.createElement(E,null,e.frontmatter.title)),m.createElement(w,null,m.createElement(k,null,m.createElement(_,null,"Tags:"),e.frontmatter.tags.map((function(t){return m.createElement(P,{key:t},t)}))),m.createElement(j,null,"Date published: ",e.frontmatter.date)),m.createElement(R,null),m.createElement(Z,null,m.createElement(y.MDXRenderer,null,e.content))))}})}}}]);
//# sourceMappingURL=component---src-layouts-blog-post-layout-tsx-9376ea43ea413aeebb63.js.map