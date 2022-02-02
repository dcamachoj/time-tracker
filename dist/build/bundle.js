var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,c;function l(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function u(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function a(e,t){e.appendChild(t)}function d(e,t,n){e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function h(){return p(" ")}function y(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function $(e,t,n){e.classList[n?"add":"remove"](t)}function b(e){c=e}const k=[],w=[],x=[],_=[],D=Promise.resolve();let E=!1;function M(e){x.push(e)}const N=new Set;let S=0;function L(){const e=c;do{for(;S<k.length;){const e=k[S];S++,b(e),W(e.$$)}for(b(null),k.length=0,S=0;w.length;)w.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];N.has(t)||(N.add(t),t())}x.length=0}while(k.length);for(;_.length;)_.pop()();E=!1,N.clear(),b(e)}function W(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const j=new Set;let C;function T(e,t){e&&e.i&&(j.delete(e),e.i(t))}function z(e,t,n,r){if(e&&e.o){if(j.has(e))return;j.add(e),C.c.push((()=>{j.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const A="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function O(e,t){e.d(1),t.delete(e.key)}function P(e,t){z(e,1,1,(()=>{t.delete(e.key)}))}function R(e,t,n,r,s,o,i,c,l,u,a,d){let f=e.length,m=o.length,p=f;const h={};for(;p--;)h[e[p].key]=p;const y=[],g=new Map,v=new Map;for(p=m;p--;){const e=d(s,o,p),c=n(e);let l=i.get(c);l?r&&l.p(e,t):(l=u(c,e),l.c()),g.set(c,y[p]=l),c in h&&v.set(c,Math.abs(p-h[c]))}const $=new Set,b=new Set;function k(e){T(e,1),e.m(c,a),i.set(e.key,e),a=e.first,m--}for(;f&&m;){const t=y[m-1],n=e[f-1],r=t.key,s=n.key;t===n?(a=t.first,f--,m--):g.has(s)?!i.has(r)||$.has(r)?k(t):b.has(s)?f--:v.get(r)>v.get(s)?(b.add(r),k(t)):($.add(s),f--):(l(n,i),f--)}for(;f--;){const t=e[f];g.has(t.key)||l(t,i)}for(;m;)k(y[m-1]);return y}function q(e){e&&e.c()}function B(e,n,o,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=e.$$;c&&c.m(n,o),i||M((()=>{const n=l.map(t).filter(s);u?u.push(...n):r(n),e.$$.on_mount=[]})),a.forEach(M)}function H(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){-1===e.$$.dirty[0]&&(k.push(e),E||(E=!0,D.then(L)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,s,o,i,l,u,a,d=[-1]){const m=c;b(t);const p=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||m.$$.root};a&&a(p.root);let h=!1;if(p.ctx=o?o(t,s.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&l(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),h&&J(t,e)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);p.fragment&&p.fragment.l(e),e.forEach(f)}else p.fragment&&p.fragment.c();s.intro&&T(t.$$.fragment),B(t,s.target,s.anchor,s.customElement),L()}b(m)}class G{$destroy(){H(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const I=[];function K(t,n=e){let r;const s=new Set;function i(e){if(o(t,e)&&(t=e,r)){const e=!I.length;for(const e of s)e[1](),I.push(e,t);if(e){for(let e=0;e<I.length;e+=2)I[e][0](I[e+1]);I.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(o,c=e){const l=[o,c];return s.add(l),1===s.size&&(r=n(i)||e),o(t),()=>{s.delete(l),0===s.size&&(r(),r=null)}}}}const Q=K(window.outerWidth),U=K(!1),V=K(!1),X={subscribe:V.subscribe};function Y(e,t,n){const r=e.slice();return r[5]=t[n],r}function Z(e,t){let n,r,s,o,i,c=t[5].text+"";return{key:e,first:null,c(){n=m("button"),r=p(c),s=h(),g(n,"class","tab svelte-1nbodg2"),$(n,"is-active",t[0]===t[5].name),this.first=n},m(e,c){d(e,n,c),a(n,r),a(n,s),o||(i=y(n,"click",t[4](t[5].name)),o=!0)},p(e,r){t=e,9&r&&$(n,"is-active",t[0]===t[5].name)},d(e){e&&f(n),o=!1,i()}}}function ee(t){let n,r,s,o,i,c,u,y,b,k,w,x,_,D=t[1].displayName+"",E=[],M=new Map,N=t[3];const S=e=>e[5].name;for(let e=0;e<N.length;e+=1){let n=Y(t,N,e),r=S(n);M.set(r,E[e]=Z(r,n))}return{c(){n=m("div"),r=m("div"),s=m("div"),o=m("img"),c=h(),u=m("div"),y=m("div"),y.textContent="Report for",b=h(),k=m("div"),w=p(D),x=h(),_=m("dic");for(let e=0;e<E.length;e+=1)E[e].c();g(o,"alt","profile"),l(o.src,i="/images/image-"+t[1].userName+".png")||g(o,"src",i),g(o,"class","svelte-1nbodg2"),g(s,"class","image svelte-1nbodg2"),g(y,"class","report-for"),g(k,"class","display-name font-larger"),g(u,"class","info svelte-1nbodg2"),g(r,"class","profile main-radius flex svelte-1nbodg2"),g(_,"class","tabs flex svelte-1nbodg2"),g(n,"class","employee bg-dark main-radius flex-col svelte-1nbodg2"),$(n,"is-desktop",!t[2])},m(e,t){d(e,n,t),a(n,r),a(r,s),a(s,o),a(r,c),a(r,u),a(u,y),a(u,b),a(u,k),a(k,w),a(n,x),a(n,_);for(let e=0;e<E.length;e+=1)E[e].m(_,null)},p(e,[t]){2&t&&!l(o.src,i="/images/image-"+e[1].userName+".png")&&g(o,"src",i),2&t&&D!==(D=e[1].displayName+"")&&v(w,D),25&t&&(N=e[3],E=R(E,t,S,1,e,N,M,_,O,Z,null,Y)),4&t&&$(n,"is-desktop",!e[2])},i:e,o:e,d(e){e&&f(n);for(let e=0;e<E.length;e+=1)E[e].d()}}}function te(e,t,n){let r;u(e,X,(e=>n(2,r=e)));let{employee:s}=t,{selected:o}=t;const i=["Daily","Weekly","Monthly"].map((e=>({name:e.toLowerCase(),text:e})));return e.$$set=e=>{"employee"in e&&n(1,s=e.employee),"selected"in e&&n(0,o=e.selected)},[o,s,r,i,function(e){return()=>{n(0,o=e)}}]}class ne extends G{constructor(e){super(),F(this,e,te,ee,o,{employee:1,selected:0})}}function re(t){let n,r,s,o,i,c,l,u,y,b,k,w,x,_,D,E,M,N,S=t[0].title+"",L=se(t[2].current)+"",W=t[4][t[1]]+"",j=se(t[2].previous)+"";return{c(){n=m("div"),r=m("div"),s=m("div"),o=m("div"),i=p(S),c=h(),l=m("div"),l.innerHTML='<img alt="menu" src="/images/icon-ellipsis.svg"/>',u=h(),y=m("div"),b=m("div"),k=p(L),w=h(),x=m("div"),_=p("Last "),D=p(W),E=p(" - "),M=p(j),g(o,"class","type-title svelte-3u2kyc"),g(l,"class","menu svelte-3u2kyc"),g(s,"class","header svelte-3u2kyc"),g(b,"class","hours font-larger svelte-3u2kyc"),g(x,"class","last svelte-3u2kyc"),g(y,"class","data svelte-3u2kyc"),g(r,"class","content main-radius bg-dark svelte-3u2kyc"),g(n,"class",N="card bg-"+t[0].name+" main-radius type-"+t[0].name+" svelte-3u2kyc"),$(n,"is-desktop",!t[3])},m(e,t){d(e,n,t),a(n,r),a(r,s),a(s,o),a(o,i),a(s,c),a(s,l),a(r,u),a(r,y),a(y,b),a(b,k),a(y,w),a(y,x),a(x,_),a(x,D),a(x,E),a(x,M)},p(e,[t]){1&t&&S!==(S=e[0].title+"")&&v(i,S),4&t&&L!==(L=se(e[2].current)+"")&&v(k,L),2&t&&W!==(W=e[4][e[1]]+"")&&v(D,W),4&t&&j!==(j=se(e[2].previous)+"")&&v(M,j),1&t&&N!==(N="card bg-"+e[0].name+" main-radius type-"+e[0].name+" svelte-3u2kyc")&&g(n,"class",N),9&t&&$(n,"is-desktop",!e[3])},i:e,o:e,d(e){e&&f(n)}}}function se(e){return`${e}hr${1===e?"":"s"}`}function oe(e,t,n){let r,s;u(e,X,(e=>n(3,s=e)));let{timeData:o}=t,{active:i}=t;return e.$$set=e=>{"timeData"in e&&n(0,o=e.timeData),"active"in e&&n(1,i=e.active)},e.$$.update=()=>{3&e.$$.dirty&&n(2,r=o.timeframes[i])},[o,i,r,s,{daily:"Day",weekly:"Week",monthly:"Month"}]}class ie extends G{constructor(e){super(),F(this,e,oe,re,o,{timeData:0,active:1})}}const ce={userName:"jeremy",displayName:"Jeremy Robson",timeData:[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}].map((e=>Object.assign({name:e.title.toLowerCase().replace(/\s/i,"-")},e)))},{window:le}=A;function ue(e,t,n){const r=e.slice();return r[5]=t[n],r}function ae(e,t){let n,r,s;return r=new ie({props:{active:t[1],timeData:t[5]}}),{key:e,first:null,c(){n=p(""),q(r.$$.fragment),this.first=n},m(e,t){d(e,n,t),B(r,e,t),s=!0},p(e,n){t=e;const s={};2&n&&(s.active=t[1]),r.$set(s)},i(e){s||(T(r.$$.fragment,e),s=!0)},o(e){z(r.$$.fragment,e),s=!1},d(e){e&&f(n),H(r,e)}}}function de(e){let t,n,s,o,i,c,l,u=[],p=new Map;function v(t){e[4](t)}M(e[3]);let b={employee:ce};void 0!==e[1]&&(b.selected=e[1]),n=new ne({props:b}),w.push((()=>function(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}(n,"selected",v)));let k=ce.timeData;const x=e=>e[5].name;for(let t=0;t<k.length;t+=1){let n=ue(e,k,t),r=x(n);p.set(r,u[t]=ae(r,n))}return{c(){t=m("div"),q(n.$$.fragment),o=h();for(let e=0;e<u.length;e+=1)u[e].c();g(t,"class","app svelte-10rocza"),$(t,"is-desktop",!e[2])},m(r,s){d(r,t,s),B(n,t,null),a(t,o);for(let e=0;e<u.length;e+=1)u[e].m(t,null);i=!0,c||(l=y(le,"resize",e[3]),c=!0)},p(e,[o]){const i={};var c;!s&&2&o&&(s=!0,i.selected=e[1],c=()=>s=!1,_.push(c)),n.$set(i),2&o&&(k=ce.timeData,C={r:0,c:[],p:C},u=R(u,o,x,1,e,k,p,t,P,ae,null,ue),C.r||r(C.c),C=C.p),4&o&&$(t,"is-desktop",!e[2])},i(e){if(!i){T(n.$$.fragment,e);for(let e=0;e<k.length;e+=1)T(u[e]);i=!0}},o(e){z(n.$$.fragment,e);for(let e=0;e<u.length;e+=1)z(u[e]);i=!1},d(e){e&&f(t),H(n);for(let e=0;e<u.length;e+=1)u[e].d();c=!1,l()}}}function fe(e,t,n){let r;u(e,X,(e=>n(2,r=e))),console.log("jeremy",ce);let s="daily",o=window.outerWidth;return e.$$.update=()=>{var t;1&e.$$.dirty&&(t=o,Q.set(t),U.set(t>375&&t<=1440),V.set(t<=375),console.log("setScreenWidth",t))},[o,s,r,function(){n(0,o=le.outerWidth)},function(e){s=e,n(1,s)}]}return new class extends G{constructor(e){super(),F(this,e,fe,de,o,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
