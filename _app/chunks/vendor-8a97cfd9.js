function _(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function q(t){return t()}function M(){return Object.create(null)}function y(t){t.forEach(q)}function L(t){return typeof t=="function"}function I(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function T(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(T(n,e))}function at(t,n,e,i){if(t){const c=z(t,n,e,i);return t[0](c)}}function z(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function dt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],u=Math.max(n.dirty.length,c.length);for(let o=0;o<u;o+=1)l[o]=n.dirty[o]|c[o];return l}return n.dirty|c}return n.dirty}function _t(t,n,e,i,c,l){if(c){const u=z(n,e,i,l);t.p(u,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t,n,e){return t.set(e),n}let x=!1;function J(){x=!0}function K(){x=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=s?c+1:Q(1,c,m=>n[e[m]].claim_order,s))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const l=[],u=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);o>=r;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);l.reverse(),u.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<u.length;r++){for(;s<l.length&&u[r].claim_order>=l[s].claim_order;)s++;const f=s<l.length?l[s]:null;t.insertBefore(u[r],f)}}function W(t,n){if(x){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){x&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function bt(){return S(" ")}function gt(){return S("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function $t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,c=!1){Y(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Z(t,n,e,i){return B(t,c=>c.nodeName===n,c=>{const l=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];e[o.name]||l.push(o.name)}l.forEach(u=>c.removeAttribute(u))},()=>i(n))}function wt(t,n,e){return Z(t,n,e,V)}function tt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function At(t){return tt(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function St(t,n,e){t.classList[e?"add":"remove"](n)}function jt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let $;function w(t){$=t}function A(){if(!$)throw new Error("Function called outside component initialization");return $}function Nt(t){A().$$.on_mount.push(t)}function vt(t){A().$$.after_update.push(t)}function Ct(t,n){A().$$.context.set(t,n)}function qt(t){return A().$$.context.get(t)}const g=[],O=[],E=[],P=[],nt=Promise.resolve();let j=!1;function et(){j||(j=!0,nt.then(D))}function N(t){E.push(t)}let v=!1;const C=new Set;function D(){if(!v){v=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];w(n),it(n.$$)}for(w(null),g.length=0;O.length;)O.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];C.has(n)||(C.add(n),n())}E.length=0}while(g.length);for(;P.length;)P.pop()();j=!1,v=!1,C.clear()}}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const k=new Set;let h;function Mt(){h={r:0,c:[],p:h}}function Lt(){h.r||y(h.c),h=h.p}function rt(t,n){t&&t.i&&(k.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(k.has(t))return;k.add(t),h.c.push(()=>{k.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const u=t[l],o=n[l];if(o){for(const r in u)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[l]=o}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:o}=t.$$;c&&c.m(n,e),i||N(()=>{const r=l.map(q).filter(L);u?u.push(...r):y(r),t.$$.on_mount=[]}),o.forEach(N)}function ut(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function st(t,n){t.$$.dirty[0]===-1&&(g.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,c,l,u,o=[-1]){const r=$;w(t);const s=t.$$={fragment:null,ctx:null,props:l,update:_,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};u&&u(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,m,...d)=>{const p=d.length?d[0]:m;return s.ctx&&c(s.ctx[a],s.ctx[a]=p)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](p),f&&st(t,a)),m}):[],s.update(),f=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){J();const a=X(n.target);s.fragment&&s.fragment.l(a),a.forEach(U)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),D()}w(r)}class Ft{$destroy(){ut(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const b=[];function ot(t,n){return{subscribe:lt(t,n).subscribe}}function lt(t,n=_){let e;const i=new Set;function c(o){if(I(t,o)&&(t=o,e)){const r=!b.length;for(const s of i)s[1](),b.push(s,t);if(r){for(let s=0;s<b.length;s+=2)b[s][0](b[s+1]);b.length=0}}}function l(o){c(o(t))}function u(o,r=_){const s=[o,r];return i.add(s),i.size===1&&(e=n(c)||_),o(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:u}}function Ht(t,n,e){const i=!Array.isArray(t),c=i?[t]:t,l=n.length<2;return ot(e,u=>{let o=!1;const r=[];let s=0,f=_;const a=()=>{if(s)return;f();const d=n(i?r[0]:r,u);l?u(d):f=L(d)?d:_},m=c.map((d,p)=>T(d,F=>{r[p]=F,s&=~(1<<p),o&&a()},()=>{s|=1<<p}));return o=!0,a(),function(){y(m),f()}})}export{Nt as A,H as B,lt as C,at as D,W as E,_t as F,ht as G,dt as H,_ as I,xt as J,y as K,ft as L,mt as M,Ht as N,kt as O,qt as P,St as Q,yt as R,Ft as S,jt as T,X as a,$t as b,wt as c,U as d,V as e,pt as f,tt as g,Et as h,Dt as i,Ot as j,bt as k,gt as l,Pt as m,At as n,ct as o,zt as p,Bt as q,Mt as r,I as s,S as t,Tt as u,ut as v,Lt as w,rt as x,Ct as y,vt as z};
