var bn=Array.isArray,Kt=Array.prototype.indexOf,Pn=Array.from,Fn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,qn=Array.prototype,$t=Object.getPrototypeOf;const Yn=()=>{};function Ln(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,Et=4,Q=8,ft=16,k=32,b=64,V=128,y=256,G=512,d=1024,D=2048,P=4096,I=8192,X=16384,Wt=32768,gt=65536,Mn=1<<17,zt=1<<19,mt=1<<20,vt=Symbol("$state"),jn=Symbol("legacy props");function Tt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function xt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Xt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Bn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Un(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Hn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let tt=!1;function Gn(){tt=!0}const Kn=1,Zn=2,$n=4,Wn=8,zn=16,Jn=1,Qn=2,ln="[",an="[!",sn="]",At={},Xn=Symbol();function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function pt(t){i=t}function tr(t,n=!1,r){var e=i={p:i,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};tt&&!n&&(i.l={s:null,u:null,r1:[],r2:ot(!1)}),pn(()=>{e.d=!0})}function nr(t){const n=i;if(n!==null){t!==void 0&&(n.x=t);const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];W(l.effect),$(l.reaction),Ft(l.fn)}}finally{W(r),$(e)}}i=n.p,n.m=!0}return t||{}}function nt(){return!tt||i!==null&&i.l===null}const Y=new Map;function ot(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function rr(t){return Rt(ot(t))}function un(t,n=!1){var e;const r=ot(t);return n||(r.equals=xt),tt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function er(t,n=!1){return Rt(un(t,n))}function Rt(t){return u!==null&&!E&&(u.f&g)!==0&&(T===null?mn([t]):T.push(t)),t}function lr(t,n){return u!==null&&!E&&nt()&&(u.f&(g|ft))!==0&&(T===null||!T.includes(t))&&en(),fn(t,n)}function fn(t,n){if(!t.equals(n)){var r=t.v;j?Y.set(t,n):Y.set(t,r),t.v=n,t.wv=Ut(),Dt(t,D),nt()&&f!==null&&(f.f&d)!==0&&(f.f&(k|b))===0&&(w===null?Tn([t]):w.push(t))}return n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=nt(),a=r.length,l=0;l<a;l++){var s=r[l],o=s.f;(o&D)===0&&(!e&&s===f||(x(s,n),(o&(d|y))!==0&&((o&g)!==0?Dt(s,P):et(s))))}}let N=!1;function ar(t){N=t}let A;function L(t){if(t===null)throw kt(),At;return A=t}function sr(){return L(F(A))}function ur(t){if(N){if(F(A)!==null)throw kt(),At;A=t}}function fr(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===sn){if(t===0)return n;t-=1}else(r===ln||r===an)&&(t+=1)}var e=F(n);n.remove(),n=e}}var ht,on,Ot,St;function or(){if(ht===void 0){ht=window,on=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Ot=ct(n,"firstChild").get,St=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function at(t){return Ot.call(t)}function F(t){return St.call(t)}function ir(t,n){if(!N)return at(t);var r=at(A);if(r===null)r=A.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),L(e),e}return L(r),r}function _r(t,n){if(!N){var r=at(t);return r instanceof Comment&&r.data===""?F(r):r}return A}function cr(t,n=1,r=!1){let e=N?A:t;for(var a;n--;)a=e,e=F(e);if(!N)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=lt();return e===null?a==null||a.after(s):e.before(s),L(s),s}return L(e),e}function vr(t){t.textContent=""}function It(t){var n=g|D,r=u!==null&&(u.f&g)!==0?u:null;return f===null||r!==null&&(r.f&y)!==0?n|=y:f.f|=mt,{ctx:i,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function pr(t){const n=It(t);return n.equals=xt,n}function Nt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)S(n[r])}}function _n(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function cn(t){var n,r=f;W(_n(t));try{Nt(t),n=Vt(t)}finally{W(r)}return n}function bt(t){var n=cn(t),r=(R||(t.f&y)!==0)&&t.deps!==null?P:d;x(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function Pt(t){f===null&&u===null&&tn(),u!==null&&(u.f&y)!==0&&f===null&&Xt(),j&&Qt()}function vn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function C(t,n,r,e=!0){var a=f,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{it(l),l.f|=Wt}catch(_){throw S(l),_}else n!==null&&et(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(mt|V))===0;if(!s&&e&&(a!==null&&vn(l,a),u!==null&&(u.f&g)!==0)){var o=u;(o.effects??(o.effects=[])).push(l)}return l}function pn(t){const n=C(Q,null,!1);return x(n,d),n.teardown=t,n}function hr(t){Pt();var n=f!==null&&(f.f&k)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Ft(t);return e}}function dr(t){return Pt(),hn(t)}function wr(t){const n=C(b,t,!0);return(r={})=>new Promise(e=>{r.outro?yn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Ft(t){return C(Et,t,!1)}function hn(t){return C(Q,t,!0)}function yr(t,n=[],r=It){const e=n.map(r);return dn(()=>t(...e.map(In)))}function dn(t,n=0){return C(Q|ft|n,t,!0)}function Er(t,n=!0){return C(Q|k,t,!0,n)}function Ct(t){var n=t.teardown;if(n!==null){const r=j,e=u;wt(!0),$(null);try{n.call(null)}finally{wt(r),$(e)}}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&b)!==0?r.parent=null:S(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&S(n),n=r}}function S(t,n=!0){var r=!1;if((n||(t.f&zt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:F(e);e.remove(),e=l}r=!0}qt(t,n&&!r),J(t,0),x(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ct(t);var o=t.parent;o!==null&&o.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yn(t,n){var r=[];Lt(t,r,!0),En(r,()=>{S(t),n&&n()})}function En(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function Lt(t,n,r){if((t.f&I)===0){if(t.f^=I,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&gt)!==0||(e.f&k)!==0;Lt(e,n,l?r:!1),e=a}}}function gr(t){Mt(t,!0)}function Mt(t,n){if((t.f&I)!==0){t.f^=I,(t.f&d)===0&&(t.f^=d),B(t)&&(x(t,D),et(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&gt)!==0||(r.f&k)!==0;Mt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let M=[],st=[];function jt(){var t=M;M=[],yt(t)}function gn(){var t=st;st=[],yt(t)}function mr(t){M.length===0&&queueMicrotask(jt),M.push(t)}function dt(){M.length>0&&jt(),st.length>0&&gn()}let H=!1,K=!1,Z=null,O=!1,j=!1;function wt(t){j=t}let q=[];let u=null,E=!1;function $(t){u=t}let f=null;function W(t){f=t}let T=null;function mn(t){T=t}let c=null,h=0,w=null;function Tn(t){w=t}let Bt=1,z=0,R=!1;function Ut(){return++Bt}function B(t){var v;var n=t.f;if((n&D)!==0)return!0;if((n&P)!==0){var r=t.deps,e=(n&y)!==0;if(r!==null){var a,l,s=(n&G)!==0,o=e&&f!==null&&!R,_=r.length;if(s||o){var m=t,U=m.parent;for(a=0;a<_;a++)l=r[a],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(m)))&&(l.reactions??(l.reactions=[])).push(m);s&&(m.f^=G),o&&U!==null&&(U.f&y)===0&&(m.f^=y)}for(a=0;a<_;a++)if(l=r[a],B(l)&&bt(l),l.wv>t.wv)return!0}(!e||f!==null&&!R)&&x(t,d)}return!1}function xn(t,n){for(var r=n;r!==null;){if((r.f&V)!==0)try{r.fn(t);return}catch{r.f^=V}r=r.parent}throw H=!1,t}function An(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&V)===0)}function rt(t,n,r,e){if(H){if(r===null&&(H=!1),An(n))throw t;return}r!==null&&(H=!0);{xn(t,n);return}}function Ht(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&g)!==0?Ht(l,n,!1):n===l&&(r?x(l,D):(l.f&d)!==0&&x(l,P),et(l))}}function Vt(t){var _t;var n=c,r=h,e=w,a=u,l=R,s=T,o=i,_=E,m=t.f;c=null,h=0,w=null,R=(m&y)!==0&&(E||!O||u===null),u=(m&(k|b))===0?t:null,T=null,pt(t.ctx),E=!1,z++;try{var U=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(J(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!R)for(p=h;p<v.length;p++)((_t=v[p]).reactions??(_t.reactions=[])).push(t)}else v!==null&&h<v.length&&(J(t,h),v.length=h);if(nt()&&w!==null&&!E&&v!==null&&(t.f&(g|P|D))===0)for(p=0;p<w.length;p++)Ht(w[p],t);return a!==null&&(z++,w!==null&&(e===null?e=w:e.push(...w))),U}finally{c=n,h=r,w=e,u=a,R=l,T=s,pt(o),E=_}}function kn(t,n){let r=n.reactions;if(r!==null){var e=Kt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&g)!==0&&(c===null||!c.includes(n))&&(x(n,P),(n.f&(y|G))===0&&(n.f^=G),Nt(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)kn(t,r[e])}function it(t){var n=t.f;if((n&X)===0){x(t,d);var r=f,e=i,a=O;f=t,O=!0;try{(n&ft)!==0?wn(t):qt(t),Ct(t);var l=Vt(t);t.teardown=typeof l=="function"?l:null,t.wv=Bt;var s=t.deps,o}catch(_){rt(_,t,r,e||t.ctx)}finally{O=a,f=r}}}function Rn(){try{nn()}catch(t){if(Z!==null)rt(t,Z,null);else throw t}}function Gt(){var t=O;try{var n=0;for(O=!0;q.length>0;){n++>1e3&&Rn();var r=q,e=r.length;q=[];for(var a=0;a<e;a++){var l=On(r[a]);Dn(l)}}}finally{K=!1,O=t,Z=null,Y.clear()}}function Dn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|I))===0)try{B(e)&&(it(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(a){rt(a,e,null,e.ctx)}}}function et(t){K||(K=!0,queueMicrotask(Gt));for(var n=Z=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(b|k))!==0){if((r&d)===0)return;n.f^=d}}q.push(n)}function On(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(k|b))!==0,l=a&&(e&d)!==0;if(!l&&(e&I)===0){if((e&Et)!==0)n.push(r);else if(a)r.f^=d;else{var s=u;try{u=r,B(r)&&it(r)}catch(m){rt(m,r,null,r.ctx)}finally{u=s}}var o=r.first;if(o!==null){r=o;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Sn(t){var n;for(dt();q.length>0;)K=!0,Gt(),dt();return n}async function Tr(){await Promise.resolve(),Sn()}function In(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!E){T!==null&&T.includes(t)&&rn();var e=u.deps;t.rv<z&&(t.rv=z,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&y)===0&&(a.f^=y)}return r&&(a=t,B(a)&&bt(a)),j&&Y.has(t)?Y.get(t):t.v}function xr(t){var n=E;try{return E=!0,t()}finally{E=n}}const Nn=-7169;function x(t,n){t.f=t.f&Nn|n}function Ar(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)ut(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&ut(r)}}}function ut(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ut(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{wr as $,Yn as A,S as B,_r as C,yr as D,gt as E,ir as F,ur as G,cr as H,er as I,lr as J,$ as K,W as L,u as M,mr as N,Fn as O,bn as P,or as Q,ln as R,F as S,Jn as T,At as U,ar as V,sn as W,kt as X,Bn as Y,vr as Z,Pn as _,nr as a,vt as a0,Cn as a1,qn as a2,ot as a3,Vn as a4,Xn as a5,Hn as a6,$t as a7,an as a8,fr as a9,gr as aa,yn as ab,Ft as ac,hn as ad,Un as ae,Mn as af,pr as ag,$n as ah,xt as ai,un as aj,Wn as ak,jn as al,Zn as am,Kn as an,zn as ao,Sn as ap,rr as aq,Tr as ar,Jt as as,hr as b,i as c,xr as d,Ln as e,Ar as f,In as g,It as h,ct as i,Gn as j,lt as k,at as l,on as m,f as n,Qn as o,tr as p,N as q,yt as r,A as s,pn as t,dr as u,sr as v,L as w,tt as x,dn as y,Er as z};
