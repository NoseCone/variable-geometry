import{M as ue,C as vs,S as zs,i as Fs,s as qs,e as a,t as _,k,c as t,a as l,g,d as e,n as N,b as n,N as me,f as Hs,E as s,h as T,I as ls,K as ps,A as _e,O as ge,P as ns}from"./vendor-386ac7c8.js";const Ds=vs({civilId:"",earthMath:"",discipline:"",location:"",to:"",compName:"",from:"",utcOffset:{timeZoneMinutes:600},earth:{sphere:{radius:"6371000.0 m"}},give:{giveDistance:null,giveFraction:.005},scoreBack:"900.000 s"}),Ee=ue(Ds,r=>r.from+" to "+r.to+", "+r.location),fe=vs({free:"5.000 km",time:"1.500000 h",launch:.96,distance:"50.0 km",goal:.1}),be=vs([]),Ie=vs([]),je=ue([be,Ie],(r,i)=>{const o=r.map(h=>h.length),d=Math.min(...o);var[v,u]=r;let c=v.slice(0,d).map((h,f)=>({taskName:h.taskName,zoneNames:h.zones.raw.map(D=>D.zoneName).join("-"),cancelled:h.cancelled?"CANCELLED":"",stopped:h.stopped?"STOPPED":"",distance:u[f]}));i(c)}),Te=vs([]);function ke(r){let i,o,d,v,u,c,h=r[0].compName+"",f,D,S,m,E,V,p,b,I,L,z,F,j,M=r[0].utcOffset.timeZoneMinutes+"",$,Ss,q,w,H,Vs,As,K,rs=r[2].free+"",hs,Ps,W,B,y,Ls,Cs,G,is=r[2].distance+"",us,js,J,O,Q,Ts,Ms,R,os=r[2].time+"",fs,ws,X,U,Y,Bs,Os,x,cs=r[2].goal+"",ms,Us,ss,Z,es,Zs,$s,as,ds=r[0].scoreBack+"",_s;return{c(){i=a("div"),o=a("div"),d=a("div"),v=a("div"),u=a("div"),c=a("p"),f=_(h),D=k(),S=a("p"),m=_(r[1]),E=k(),V=a("div"),p=a("div"),b=a("div"),I=a("div"),L=a("span"),z=_("UTC offset"),F=k(),j=a("span"),$=_(M),Ss=k(),q=a("div"),w=a("div"),H=a("span"),Vs=_("minimum distance"),As=k(),K=a("span"),hs=_(rs),Ps=k(),W=a("div"),B=a("div"),y=a("span"),Ls=_("nominal distance"),Cs=k(),G=a("span"),us=_(is),js=k(),J=a("div"),O=a("div"),Q=a("span"),Ts=_("nominal time"),Ms=k(),R=a("span"),fs=_(os),ws=k(),X=a("div"),U=a("div"),Y=a("span"),Bs=_("nominal goal"),Os=k(),x=a("span"),ms=_(cs),Us=k(),ss=a("div"),Z=a("div"),es=a("span"),Zs=_("score-back time"),$s=k(),as=a("span"),_s=_(ds),this.h()},l(A){i=t(A,"DIV",{class:!0});var P=l(i);o=t(P,"DIV",{class:!0,style:!0});var Ks=l(o);d=t(Ks,"DIV",{class:!0});var Ws=l(d);v=t(Ws,"DIV",{class:!0});var ys=l(v);u=t(ys,"DIV",{class:!0});var ts=l(u);c=t(ts,"P",{class:!0});var Gs=l(c);f=g(Gs,h),Gs.forEach(e),D=N(ts),S=t(ts,"P",{class:!0});var Js=l(S);m=g(Js,r[1]),Js.forEach(e),E=N(ts),V=t(ts,"DIV",{class:!0});var Qs=l(V);p=t(Qs,"DIV",{class:!0});var C=l(p);b=t(C,"DIV",{class:!0});var Rs=l(b);I=t(Rs,"DIV",{class:!0});var gs=l(I);L=t(gs,"SPAN",{class:!0});var Xs=l(L);z=g(Xs,"UTC offset"),Xs.forEach(e),F=N(gs),j=t(gs,"SPAN",{class:!0});var Ys=l(j);$=g(Ys,M),Ys.forEach(e),gs.forEach(e),Rs.forEach(e),Ss=N(C),q=t(C,"DIV",{class:!0});var xs=l(q);w=t(xs,"DIV",{class:!0});var Es=l(w);H=t(Es,"SPAN",{class:!0});var se=l(H);Vs=g(se,"minimum distance"),se.forEach(e),As=N(Es),K=t(Es,"SPAN",{class:!0});var ee=l(K);hs=g(ee,rs),ee.forEach(e),Es.forEach(e),xs.forEach(e),Ps=N(C),W=t(C,"DIV",{class:!0});var ae=l(W);B=t(ae,"DIV",{class:!0});var bs=l(B);y=t(bs,"SPAN",{class:!0});var te=l(y);Ls=g(te,"nominal distance"),te.forEach(e),Cs=N(bs),G=t(bs,"SPAN",{class:!0});var le=l(G);us=g(le,is),le.forEach(e),bs.forEach(e),ae.forEach(e),js=N(C),J=t(C,"DIV",{class:!0});var ne=l(J);O=t(ne,"DIV",{class:!0});var Is=l(O);Q=t(Is,"SPAN",{class:!0});var re=l(Q);Ts=g(re,"nominal time"),re.forEach(e),Ms=N(Is),R=t(Is,"SPAN",{class:!0});var ie=l(R);fs=g(ie,os),ie.forEach(e),Is.forEach(e),ne.forEach(e),ws=N(C),X=t(C,"DIV",{class:!0});var oe=l(X);U=t(oe,"DIV",{class:!0});var ks=l(U);Y=t(ks,"SPAN",{class:!0});var ce=l(Y);Bs=g(ce,"nominal goal"),ce.forEach(e),Os=N(ks),x=t(ks,"SPAN",{class:!0});var de=l(x);ms=g(de,cs),de.forEach(e),ks.forEach(e),oe.forEach(e),Us=N(C),ss=t(C,"DIV",{class:!0});var ve=l(ss);Z=t(ve,"DIV",{class:!0});var Ns=l(Z);es=t(Ns,"SPAN",{class:!0});var pe=l(es);Zs=g(pe,"score-back time"),pe.forEach(e),$s=N(Ns),as=t(Ns,"SPAN",{class:!0});var he=l(as);_s=g(he,ds),he.forEach(e),Ns.forEach(e),ve.forEach(e),C.forEach(e),Qs.forEach(e),ts.forEach(e),ys.forEach(e),Ws.forEach(e),Ks.forEach(e),P.forEach(e),this.h()},h(){n(c,"class","title is-3"),n(S,"class","title is-5"),n(L,"class","tag"),n(j,"class","tag is-warning"),n(I,"class","tags has-addons"),n(b,"class","control"),n(H,"class","tag"),n(K,"class","tag is-black"),n(w,"class","tags has-addons"),n(q,"class","control"),n(y,"class","tag"),n(G,"class","tag is-info"),n(B,"class","tags has-addons"),n(W,"class","control"),n(Q,"class","tag"),n(R,"class","tag is-success"),n(O,"class","tags has-addons"),n(J,"class","control"),n(Y,"class","tag"),n(x,"class","tag is-primary"),n(U,"class","tags has-addons"),n(X,"class","control"),n(es,"class","tag"),n(as,"class","tag is-danger"),n(Z,"class","tags has-addons"),n(ss,"class","control"),n(p,"class","field is-grouped is-grouped-multiline"),n(V,"class","example"),n(u,"class","tile is-child box"),n(v,"class","tile is-parent"),n(d,"class","tile"),n(o,"class","tile is-ancestor"),me(o,"flex-wrap","wrap"),n(i,"class","container")},m(A,P){Hs(A,i,P),s(i,o),s(o,d),s(d,v),s(v,u),s(u,c),s(c,f),s(u,D),s(u,S),s(S,m),s(u,E),s(u,V),s(V,p),s(p,b),s(b,I),s(I,L),s(L,z),s(I,F),s(I,j),s(j,$),s(p,Ss),s(p,q),s(q,w),s(w,H),s(H,Vs),s(w,As),s(w,K),s(K,hs),s(p,Ps),s(p,W),s(W,B),s(B,y),s(y,Ls),s(B,Cs),s(B,G),s(G,us),s(p,js),s(p,J),s(J,O),s(O,Q),s(Q,Ts),s(O,Ms),s(O,R),s(R,fs),s(p,ws),s(p,X),s(X,U),s(U,Y),s(Y,Bs),s(U,Os),s(U,x),s(x,ms),s(p,Us),s(p,ss),s(ss,Z),s(Z,es),s(es,Zs),s(Z,$s),s(Z,as),s(as,_s)},p(A,[P]){P&1&&h!==(h=A[0].compName+"")&&T(f,h),P&2&&T(m,A[1]),P&1&&M!==(M=A[0].utcOffset.timeZoneMinutes+"")&&T($,M),P&4&&rs!==(rs=A[2].free+"")&&T(hs,rs),P&4&&is!==(is=A[2].distance+"")&&T(us,is),P&4&&os!==(os=A[2].time+"")&&T(fs,os),P&4&&cs!==(cs=A[2].goal+"")&&T(ms,cs),P&1&&ds!==(ds=A[0].scoreBack+"")&&T(_s,ds)},i:ls,o:ls,d(A){A&&e(i)}}}function Ne(r,i,o){let d,v,u;return ps(r,Ds,c=>o(0,d=c)),ps(r,Ee,c=>o(1,v=c)),ps(r,fe,c=>o(2,u=c)),_e(async()=>{fetch("http://2017-dalby.flaretiming.com/json/comp-input/comps.json").then(c=>c.json()).then(c=>Ds.set(c)).catch(c=>(console.log(c),[])),fetch("http://2017-dalby.flaretiming.com/json/comp-input/nominals.json").then(c=>c.json()).then(c=>fe.set(c)).catch(c=>(console.log(c),[]))}),[d,v,u]}class Me extends zs{constructor(i){super();Fs(this,i,Ne,ke,qs,{})}}function De(r){let i,o,d,v,u,c,h,f,D=r[0].compName+"",S;return{c(){i=a("nav"),o=a("ul"),d=a("li"),v=a("a"),u=_("Flare Timing"),c=k(),h=a("li"),f=a("a"),S=_(D),this.h()},l(m){i=t(m,"NAV",{class:!0});var E=l(i);o=t(E,"UL",{});var V=l(o);d=t(V,"LI",{});var p=l(d);v=t(p,"A",{href:!0});var b=l(v);u=g(b,"Flare Timing"),b.forEach(e),p.forEach(e),c=N(V),h=t(V,"LI",{class:!0});var I=l(h);f=t(I,"A",{href:!0});var L=l(f);S=g(L,D),L.forEach(e),I.forEach(e),V.forEach(e),E.forEach(e),this.h()},h(){n(v,"href","http://flaretiming.com"),n(f,"href","#"),n(h,"class","is-active"),n(i,"class","breadcrumb")},m(m,E){Hs(m,i,E),s(i,o),s(o,d),s(d,v),s(v,u),s(o,c),s(o,h),s(h,f),s(f,S)},p(m,[E]){E&1&&D!==(D=m[0].compName+"")&&T(S,D)},i:ls,o:ls,d(m){m&&e(i)}}}function Se(r,i,o){let d;return ps(r,Ds,v=>o(0,d=v)),[d]}class we extends zs{constructor(i){super();Fs(this,i,Se,De,qs,{})}}const Ve=()=>{const r=ge("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session}},Ae={subscribe(r){return Ve().page.subscribe(r)}};function Pe(r){let i,o,d,v,u,c,h,f,D,S,m,E,V;return{c(){i=a("div"),o=a("ul"),d=a("li"),v=a("a"),u=_("Settings"),c=k(),h=a("li"),f=a("a"),D=_("Tasks"),S=k(),m=a("li"),E=a("a"),V=_("Pilots"),this.h()},l(p){i=t(p,"DIV",{class:!0});var b=l(i);o=t(b,"UL",{});var I=l(o);d=t(I,"LI",{});var L=l(d);v=t(L,"A",{"sveltekit:prefetch":!0,href:!0});var z=l(v);u=g(z,"Settings"),z.forEach(e),L.forEach(e),c=N(I),h=t(I,"LI",{});var F=l(h);f=t(F,"A",{"sveltekit:prefetch":!0,href:!0});var j=l(f);D=g(j,"Tasks"),j.forEach(e),F.forEach(e),S=N(I),m=t(I,"LI",{});var M=l(m);E=t(M,"A",{"sveltekit:prefetch":!0,href:!0});var $=l(E);V=g($,"Pilots"),$.forEach(e),M.forEach(e),I.forEach(e),b.forEach(e),this.h()},h(){n(v,"sveltekit:prefetch",""),n(v,"href","/settings"),ns(d,"is-active",r[0].path==="/settings"),n(f,"sveltekit:prefetch",""),n(f,"href","/"),ns(h,"is-active",r[0].path==="/"),n(E,"sveltekit:prefetch",""),n(E,"href","/pilots"),ns(m,"is-active",r[0].path==="/pilots"),n(i,"class","tabs")},m(p,b){Hs(p,i,b),s(i,o),s(o,d),s(d,v),s(v,u),s(o,c),s(o,h),s(h,f),s(f,D),s(o,S),s(o,m),s(m,E),s(E,V)},p(p,[b]){b&1&&ns(d,"is-active",p[0].path==="/settings"),b&1&&ns(h,"is-active",p[0].path==="/"),b&1&&ns(m,"is-active",p[0].path==="/pilots")},i:ls,o:ls,d(p){p&&e(i)}}}function Le(r,i,o){let d;return ps(r,Ae,v=>o(0,d=v)),[d]}class Be extends zs{constructor(i){super();Fs(this,i,Le,Pe,qs,{})}}export{we as B,Me as C,be as a,je as b,Be as c,Ds as d,Te as p,Ie as t};