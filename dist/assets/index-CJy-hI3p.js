(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function ki(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Sd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ua={duration:.5,overwrite:!1,delay:0},ku,sn,Rt,ci=1e8,xt=1/ci,wc=Math.PI*2,wm=wc/4,Am=0,Md=Math.sqrt,Rm=Math.cos,Cm=Math.sin,nn=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},$i=function(e){return typeof e=="number"},zu=function(e){return typeof e>"u"},Di=function(e){return typeof e=="object"},In=function(e){return e!==!1},Hu=function(){return typeof window<"u"},so=function(e){return Ot(e)||nn(e)},yd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,Pm=/random\([^)]+\)/g,Dm=/,\s*/g,Lh=/(?:-?\.?\d|\.)+/gi,Ed=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Td=/[+-]=-?[.\d]+/,Lm=/[^,'"\[\]\s]+/gi,Im=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,yi,Ac,Vu,Qn={},il={},bd,wd=function(e){return(il=Hs(e,Qn))&&Bn},Gu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Na=function(e,t){return!t&&console.warn(e)},Ad=function(e,t){return e&&(Qn[e]=t)&&il&&(il[e]=t)||Qn},Fa=function(){return 0},Um={suppressEvents:!0,isStart:!0,kill:!1},Vo={suppressEvents:!0,kill:!1},Nm={suppressEvents:!0},Wu={},ur=[],Rc={},Rd,qn={},Dl={},Ih=30,Go=[],Xu="",Yu=function(e){var t=e[0],n,i;if(Di(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Go.length;i--&&!Go[i].targetTest(t););n=Go[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zd(e[i],n)))||e.splice(i,1);return e},Gr=function(e){return e._gsap||Yu(ui(e))[0]._gsap},Cd=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():zu(n)&&e.getAttribute&&e.getAttribute(t)||n},Un=function(e,t){return(e=e.split(",")).forEach(t)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},Cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Fm=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},rl=function(){var e=ur.length,t=ur.slice(0),n,i;for(Rc={},ur.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qu=function(e){return!!(e._initted||e._startAt||e.add)},Pd=function(e,t,n,i){ur.length&&!sn&&rl(),e.render(t,n,!!(sn&&t<0&&qu(e))),ur.length&&!sn&&rl()},Dd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Lm).length<2?t:nn(e)?e.trim():e},Ld=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Om=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Hs=function(e,t){for(var n in t)e[n]=t[n];return e},Uh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Di(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},sl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ya=function(e){var t=e.parent||It,n=e.keyframes?Om(fn(e.keyframes)):ei;if(In(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Bm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Id=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},yl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},_r=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Wr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},km=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cc=function(e,t,n,i){return e._startAt&&(sn?e._startAt.revert(Vo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},zm=function r(e){return!e||e._ts&&r(e.parent)},Nh=function(e){return e._repeat?Vs(e._tTime,e=e.duration()+e._rDelay)*e:0},Vs=function(e,t){var n=Math.floor(e=Lt(e/t));return e&&n===e?n-1:n},al=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},El=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||xt)||0))},Tl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),El(e),n._dirty||Wr(n,e)),e},Ud=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=al(e.rawTime(),t),(!t._dur||ja(0,t.totalDuration(),n)-t._tTime>xt)&&t.render(n,!0)),Wr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-xt}},bi=function(e,t,n,i){return t.parent&&_r(t),t._start=Lt(($i(n)?n:!n&&ol(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==It?si(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Id(e,t,"_first","_last",e._sort?"_start":0),ol(t)||(e._recent=t),i||Ud(e,t),e._ts<0&&Tl(e,e._tTime),e},Nd=function(e,t){return(Qn.ScrollTrigger||Gu("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},Fd=function(e,t,n,i,s){if(Ku(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Rd!==Kn.frame)return ur.push(e),e._lazy=[s,i],1},Hm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ol=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vm=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Hm(e)&&!(!e._initted&&ol(e))||(e._ts<0||e._dp._ts<0)&&!ol(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ja(0,e._tDur,t),u=Vs(l,o),e._yoyo&&u&1&&(a=1-a),u!==Vs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||sn||i||e._zTime===xt||!t&&e._zTime){if(!e._initted&&Fd(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?xt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Cc(e,t,n,!0),e._onUpdate&&!n&&Zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&_r(e,1),!n&&!sn&&(Zn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gm=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Gs=function(e,t,n,i){var s=e._repeat,a=Lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Tl(e,e._tTime=e._tDur*o),e.parent&&El(e),n||Wr(e.parent,e),e},Fh=function(e){return e instanceof Dn?Wr(e):Gs(e,e._dur)},Wm={_start:0,endTime:Fa,totalDuration:Fa},si=function r(e,t,n){var i=e.labels,s=e._recent||Wm,a=e.duration()>=ci?s.endTime(!1):e._dur,o,l,c;return nn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(fn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ea=function(e,t,n){var i=$i(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=In(l.vars.inherit)&&l.parent;a.immediateRender=In(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Yt(t[0],a,t[s+1])},yr=function(e,t){return e||e===0?t(e):t},ja=function(e,t,n){return n<e?e:n>t?t:n},un=function(e,t){return!nn(e)||!(t=Im.exec(e))?"":t[1]},Xm=function(e,t,n){return yr(n,function(i){return ja(e,t,i)})},Pc=[].slice,Od=function(e,t){return e&&Di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Di(e[0]))&&!e.nodeType&&e!==yi},Ym=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||Od(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):nn(e)&&!n&&(Ac||!Ws())?Pc.call((t||Vu).querySelectorAll(e),0):fn(e)?Ym(e,n):Od(e)?Pc.call(e,0):e?[e]:[]},Dc=function(e){return e=ui(e)[0]||Na("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ui(t,n.querySelectorAll?n:n===e?Na("Invalid scope")||Vu.createElement("div"):e)}},Bd=function(e){return e.sort(function(){return .5-Math.random()})},kd=function(e){if(Ot(e))return e;var t=Di(e)?e:{each:e},n=Xr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return nn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,m=a[g],p,M,b,v,w,A,T,R,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ci])[1],!S){for(T=-ci;T<(T=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=a[g]=[],p=l?Math.min(S,g)*u-.5:i%S,M=S===ci?0:l?g*h/S-.5:i/S|0,T=0,R=ci,A=0;A<g;A++)b=A%S-p,v=M-(A/S|0),m[A]=w=c?Math.abs(c==="y"?v:b):Md(b*b+v*v),w>T&&(T=w),w<R&&(R=w);i==="random"&&Bd(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=un(t.amount||t.each)||0,n=n&&g<0?s_(n):n}return g=(m[d]-m.min)/m.max||0,Lt(m.b+(n?n(g):g)*m.v)+m.u}},Lc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+($i(n)?0:un(n))}},zd=function(e,t){var n=fn(e),i,s;return!n&&Di(e)&&(i=n=e.radius||ci,e.values?(e=ui(e.values),(s=!$i(e[0]))&&(i*=i)):e=Lc(e.increment)),yr(t,n?Ot(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ci,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||$i(a)?u:u+un(a)}:Lc(e))},Hd=function(e,t,n,i){return yr(fn(e)?!t:n===!0?!!(n=0):!i,function(){return fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qm=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},$m=function(e,t){return function(n){return e(parseFloat(n))+(t||un(n))}},Km=function(e,t,n){return Gd(e,t,0,1,n)},Vd=function(e,t,n){return yr(n,function(i){return e[~~t(i)]})},Zm=function r(e,t,n){var i=t-e;return fn(e)?Vd(e,r(0,e.length),t):yr(n,function(s){return(i+(s-e)%i)%i+e})},jm=function r(e,t,n){var i=t-e,s=i*2;return fn(e)?Vd(e,r(0,e.length-1),t):yr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Oa=function(e){return e.replace(Pm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Dm);return Hd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Gd=function(e,t,n,i,s){var a=t-e,o=i-n;return yr(s,function(l){return n+((l-e)/a*o||0)})},Jm=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=nn(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(fn(e)&&!fn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=Hs(fn(e)?[]:{},e));if(!u){for(l in t)$u.call(o,e,l,"get",t[l]);s=function(_){return Ju(_,o)||(a?e.p:e)}}}return yr(n,s)},Oh=function(e,t,n){var i=e.labels,s=ci,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Zn=function(e,t,n){var i=e.vars,s=i[t],a=Rt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ur.length&&rl(),o&&(Rt=o),u=l?s.apply(c,l):s.call(c),Rt=a,u},da=function(e){return _r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Zn(e,"onInterrupt"),e},bs,Wd=[],Xd=function(e){if(e)if(e=!e.name&&e.default||e,Hu()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Fa,render:Ju,add:$u,kill:m_,modifier:p_,rawVars:0},a={targetTest:0,get:0,getSetter:ju,aliases:{},register:0};if(Ws(),e!==i){if(qn[t])return;ei(i,ei(sl(e,s),a)),Hs(i.prototype,Hs(s,sl(e,a))),qn[i.prop=t]=i,e.targetTest&&(Go.push(i),Wu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ad(t,i),e.register&&e.register(Bn,i,Nn)}else Wd.push(e)},Et=255,pa={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Ll=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},Yd=function(e,t,n){var i=e?$i(e)?[e>>16,e>>8&Et,e&Et]:0:pa.black,s,a,o,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),pa[e])i=pa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Et,i&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Lh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ll(l+1/3,s,a),i[1]=Ll(l,s,a),i[2]=Ll(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Ed),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lh)||pa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Et,a=i[1]/Et,o=i[2]/Et,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},qd=function(e){var t=[],n=[],i=-1;return e.split(hr).forEach(function(s){var a=s.match(Ts)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Bh=function(e,t,n){var i="",s=(e+i).match(hr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=Yd(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=qd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(hr,"1").split(Ts),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(hr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},hr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in pa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Qm=/hsl[a]?\(/,$d=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=Qm.test(t),e[1]=Bh(e[1],n),e[0]=Bh(e[0],n,qd(e[1])),!0},Ba,Kn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,M=m===!0,b,v,w,A;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,b=w-a,(b>0||M)&&(A=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,a+=b+(b>=s?0:s-b),v=1),M||(l=c(g)),v)for(f=0;f<o.length;f++)o[f](w,d,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){bd&&(!Ac&&Hu()&&(yi=Ac=window,Vu=yi.document||{},Qn.gsap=Bn,(yi.gsapVersions||(yi.gsapVersions=[])).push(Bn.version),wd(il||yi.GreenSockGlobals||!yi.gsap&&yi||{}),Wd.forEach(Xd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Ba=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ba=0,c=Fa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,M){var b=p?function(v,w,A,T){m(v,w,A,T),h.remove(b)}:m;return h.remove(m),o[M?"unshift":"push"](b),Ws(),b},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),Ws=function(){return!Ba&&Kn.wake()},lt={},e_=/^[\d.\-M][\d.\-,\s]/,t_=/["']/g,n_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(t_,"").trim():+c,i=l.substr(o+1).trim();return t},i_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},r_=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[n_(t[1])]:i_(e).split(",").map(Dd)):lt._CE&&e_.test(e)?lt._CE("",e):n},s_=function(e){return function(t){return 1-e(1-t)}},Xr=function(e,t){return e&&(Ot(e)?e:lt[e]||r_(e))||t},ns=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Un(e,function(o){lt[o]=Qn[o]=s,lt[a=o.toLowerCase()]=n;for(var l in s)lt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[o+"."+l]=s[l]}),s},Kd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Il=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/wc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Cm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Kd(o);return s=wc/s,l.config=function(c,u){return r(e,c,u)},l},Ul=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Kd(n);return i.config=function(s){return r(e,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ns(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;ns("Elastic",Il("in"),Il("out"),Il());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ns("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ns("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ns("Circ",function(r){return-(Md(1-r*r)-1)});ns("Sine",function(r){return r===1?1:-Rm(r*wm)+1});ns("Back",Ul("in"),Ul("out"),Ul());lt.SteppedEase=lt.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-xt;return function(o){return((i*ja(0,a,o)|0)+s)*n}}};Ua.ease=lt["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Xu+=r+","+r+"Params,"});var Zd=function(e,t){this.id=Am++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cd,this.set=t?t.getSetter:ju},ka=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Gs(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Ba||Kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Gs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ws(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tl(this,n),!s._dp||s.parent||Ud(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===xt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Pd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Vs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?al(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-xt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(ja(-Math.abs(this._delay),o,s),i!==!1),El(this),km(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ws(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==xt,a;if(s)for(this._tTime-=xt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+xt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&bi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(In(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?al(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Nm);var i=sn;return sn=n,qu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Fh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Fh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(si(this,n),In(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,In(i)),this._dur||(this._zTime=-xt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-xt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-xt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ot(n)?n:Ld,l=function(){var u=i.then;i.then=null,s&&s(),Ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){da(this)},r})();ei(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var Dn=(function(r){Sd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=In(n.sortChildren),It&&bi(n.parent||It,ki(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Nd(ki(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ea(0,arguments,this),this},t.from=function(i,s,a){return Ea(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ea(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ya(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Yt(i,s,si(this,a),1),this},t.call=function(i,s,a){return bi(this,Yt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Yt(i,a,si(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ya(a).immediateRender=In(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ya(o).immediateRender=In(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,M,b,v,w,A,T;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,v=this._start,b=this._ts,p=!b,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Lt(u%m),u===l?(g=this._repeat,d=c):(w=Lt(u/m),g=~~w,g&&g===w&&(d=c,g--),d>c&&(d=c)),w=Vs(this._tTime,m),!o&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),A&&g&1&&(d=c-d,T=1),g!==w&&!this._lock){var R=A&&w&1,S=R===(A&&g&1);if(g<w&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(T?0:Lt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Gm(this,Lt(o),Lt(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!w&&(Zn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-xt);break}}f=_}else{f=this._last;for(var x=i<0?i:d;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,a||sn&&qu(f)),d!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=x?-xt:xt);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-xt)._zTime=d>=o?1:-1,this._ts))return this._start=v,El(this),this.render(i,s,a);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&_r(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if($i(s)||(s=si(this,s,i)),!(i instanceof ka)){if(fn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ot(i))i=Yt.delayedCall(0,i);else return this}return this!==i?bi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ci);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Yt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&yl(this,i),i===this._recent&&(this._recent=this._last),Wr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(Kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=si(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Yt.delayedCall(0,s||Fa,a);return o.data="isPause",this._hasPause=1,bi(this,o,si(this,i))},t.removePause=function(i){var s=this._first;for(i=si(this,i);s;)s._start===i&&s.data==="isPause"&&_r(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)rr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ui(i),l=this._first,c=$i(s),u;l;)l instanceof Yt?Fm(l._targets,o)&&(c?(!rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=si(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=Yt.to(a,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||xt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Gs(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ei({startAt:{time:si(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Oh(this,si(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Oh(this,si(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+xt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Lt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Wr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Wr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=ci,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,bi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Lt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Gs(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(It._ts&&(Pd(It,al(i,It)),Rd=Kn.frame),Kn.frame>=Ih){Ih+=Jn.autoSleep||120;var s=It._first;if((!s||!s._ts)&&Jn.autoSleep&&Kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Kn.sleep()}}},e})(ka);ei(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var a_=function(e,t,n,i,s,a,o){var l=new Nn(this._pt,e,t,0,1,tp,null,s),c=0,u=0,h,d,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Oa(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),d=n.match(Pl)||[];h=Pl.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Cs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Pl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Td.test(i)||p)&&(l.e=0),this._pt=l,l},$u=function(e,t,n,i,s,a,o,l,c,u){Ot(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:Ot(h)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Ot(h)?c?h_:Qd:Zu,_;if(nn(i)&&(~i.indexOf("random(")&&(i=Oa(i)),i.charAt(1)==="="&&(_=Cs(d,i)+(un(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Ic)return!isNaN(d*i)&&i!==""?(_=new Nn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?d_:ep,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&Gu(t,i),a_.call(this,e,t,d,i,f,l||Jn.stringFilter,c))},o_=function(e,t,n,i,s){if(Ot(e)&&(e=Ta(e,s,t,n,i)),!Di(e)||e.style&&e.nodeType||fn(e)||yd(e))return nn(e)?Ta(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ta(e[o],s,t,n,i);return a},jd=function(e,t,n,i,s,a){var o,l,c,u;if(qn[e]&&(o=new qn[e]).init(s,o.rawVars?t[e]:o_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Nn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==bs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},rr,Ic,Ku=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!ku,v=e.timeline,w=i.easeReverse||h,A,T,R,S,x,D,U,z,V,G,W,Y,H;if(v&&(!d||!s)&&(s="none"),e._ease=Xr(s,Ua.ease),e._rEase=w&&(Xr(w)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||d&&!i.stagger){if(z=m[0]?Gr(m[0]).harness:0,Y=z&&i[z.prop],A=sl(i,Wu),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?Vo:Um),g._lazy=0),a){if(_r(e._startAt=Yt.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&In(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!f)&&e._startAt.revert(Vo),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),R=ei({overwrite:!1,data:"isFromStart",lazy:o&&!g&&In(l),immediateRender:o,stagger:0,parent:p},A),Y&&(R[z.prop]=Y),_r(e._startAt=Yt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(Vo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,xt,xt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&In(l)||l&&!_,T=0;T<m.length;T++){if(x=m[T],U=x._gsap||Yu(m)[T]._gsap,e._ptLookup[T]=G={},Rc[U.id]&&ur.length&&rl(),W=M===m?T:M.indexOf(x),z&&(V=new z).init(x,Y||A,e,W,M)!==!1&&(e._pt=S=new Nn(e._pt,x,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ne){G[ne]=S}),V.priority&&(D=1)),!z||Y)for(R in A)qn[R]&&(V=jd(R,A,e,W,x,M))?V.priority&&(D=1):G[R]=S=$u.call(e,x,R,"get",A[R],W,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),b&&e._pt&&(rr=e,It.killTweensOf(x,G,e.globalTime(t)),H=!e.parent,rr=0),e._pt&&l&&(Rc[U.id]=1)}D&&np(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&v.render(ci,!0,!0)},l_=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ic=1,e.vars[t]="+=0",Ku(e,o),Ic=0,l?Na(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=zt(n)+un(h.e)),h.b&&(h.b=u.s+un(h.b))},c_=function(e,t){var n=e[0]?Gr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Hs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},u_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(fn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ta=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?Oa(e):e},ll=Xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Jd={};Un(ll+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Jd[r]=1});ll=ll.split(",");var Yt=(function(r){Sd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ya(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||It,M=(fn(n)||yd(n)?$i(n[0]):"length"in i)?[n]:ui(n),b,v,w,A,T,R,S,x;if(o._targets=M.length?Yu(M):Na("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||so(c)||so(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(b=o.timeline=new Dn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:M}),b.kill(),b.parent=b._dp=ki(o),b._start=0,d||so(c)||so(u)){if(A=M.length,S=d&&kd(d),Di(d))for(T in d)~ll.indexOf(T)&&(x||(x={}),x[T]=d[T]);for(v=0;v<A;v++)w=sl(i,Jd),w.stagger=0,D&&(w.easeReverse=D),x&&Hs(w,x),R=M[v],w.duration=+Ta(c,ki(o),v,R,M),w.delay=(+Ta(u,ki(o),v,R,M)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),b.to(R,w,S?S(v,R,M):0),b._ease=lt.none;b.duration()?c=u=0:o.timeline=0}else if(_){ya(ei(b.vars.defaults,{ease:"none"})),b._ease=Xr(_.ease||i.ease||"none");var U=0,z,V,G;if(fn(_))_.forEach(function(W){return b.to(M,W,">")}),b.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||u_(T,_[T],w,_.easeEach);for(T in w)for(z=w[T].sort(function(W,Y){return W.t-Y.t}),U=0,v=0;v<z.length;v++)V=z[v],G={ease:V.e,duration:(V.t-(v?z[v-1].t:0))/100*c},G[T]=V.v,b.to(M,G,U),U+=G.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return f===!0&&!ku&&(rr=ki(o),It.killTweensOf(M),rr=0),bi(p,ki(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Lt(p._time)&&In(h)&&zm(ki(o))&&p.data!=="nested")&&(o._tTime=-xt,o.render(Math.max(0,-u)||0)),m&&Nd(ki(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-xt&&!u?l:i<xt?0:i,d,f,_,g,m,p,M,b;if(!c)Vm(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=Lt(h%g),h===l?(_=this._repeat,d=c):(m=Lt(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=Vs(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Lt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Fd(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=d<o;if(v!==this._inv){var w=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=w?(v?-1:1)/w:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Zn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;b&&b.render(i<0?i:b._dur*b._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Cc(this,i,s,a),Zn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Cc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&_r(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Zn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Ba||Kn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ku(this,c),u=this._ease(c/this._dur),l_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Tl(this,0),this.parent||Id(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,rr&&rr.vars.overwrite!==!0)._first||da(this),this.parent&&a!==this.timeline.totalDuration()&&Gs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ui(i):o,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&Bm(o,l))return s==="all"&&(this._pt=0),da(this);for(h=this._op=this._op||[],s!=="all"&&(nn(s)&&(g={},Un(s,function(M){return g[M]=1}),s=g),s=c_(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&yl(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&da(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ea(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ea(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return It.killTweensOf(i,s,a)},e})(ka);ei(Yt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){Yt[r]=function(){var e=new Dn,t=Pc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Zu=function(e,t,n){return e[t]=n},Qd=function(e,t,n){return e[t](n)},h_=function(e,t,n,i){return e[t](i.fp,n)},f_=function(e,t,n){return e.setAttribute(t,n)},ju=function(e,t){return Ot(e[t])?Qd:zu(e[t])&&e.setAttribute?f_:Zu},ep=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},d_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},tp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ju=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},p_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},m_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?yl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},__=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},np=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Nn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||ep,this.d=l||this,this.set=c||Zu,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=__,this.m=n,this.mt=s,this.tween=i},r})();Un(Xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Wu[r]=1});Qn.TweenMax=Qn.TweenLite=Yt;Qn.TimelineLite=Qn.TimelineMax=Dn;It=new Dn({sortChildren:!1,defaults:Ua,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=$d;var Yr=[],Wo={},g_=[],kh=0,v_=0,Nl=function(e){return(Wo[e]||g_).map(function(t){return t()})},za=function(){var e=Date.now(),t=[];e-kh>2&&(Nl("matchMediaInit"),Yr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=yi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Nl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),kh=e,Nl("matchMedia"))},ip=(function(){function r(t,n){this.selector=n&&Dc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=v_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var a=this,o=function(){var c=Rt,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Dc(s)),Rt=a,h=i.apply(a,arguments),Ot(h)&&a._r.push(h),Rt=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ot?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Yt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Yt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Yr.length;a--;)Yr[a].id===this.id&&Yr.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(za):o.removeEventListener("change",za)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),x_=(function(){function r(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Di(n)||(n={matches:n});var a=new ip(0,s||this.scope),o=a.conditions={},l,c,u;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=yi.matchMedia(n[c]),l&&(Yr.indexOf(a)<0&&Yr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(za):l.addEventListener("change",za),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xd(i)})},timeline:function(e){return new Dn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=ui(e)[0]);var s=Gr(e||{}).get,a=n?Ld:Dd;return n==="native"&&(n=""),e&&(t?a((qn[t]&&qn[t].get||s)(e,t,n,i)):function(o,l,c){return a((qn[o]&&qn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ui(e),e.length>1){var i=e.map(function(u){return Bn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=qn[t],o=Gr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;bs._pt=0,h.init(e,n?u+n:u,bs,0,[e]),h.render(1,h),bs._pt&&Ju(1,bs)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Bn.to(e,ei((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xr(e.ease,Ua.ease)),Uh(Ua,e||{})},config:function(e){return Uh(Jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!qn[o]&&!Qn[o]&&Na(t+" effect requires "+o+" plugin.")}),Dl[t]=function(o,l,c){return n(ui(o),ei(l||{},s),c)},a&&(Dn.prototype[t]=function(o,l,c){return this.add(Dl[t](o,Di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=Xr(t)},parseEase:function(e,t){return arguments.length?Xr(e,t):lt},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Dn(e),i,s;for(n.smoothChildTiming=In(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Yt&&i.vars.onComplete===i._targets[0]))&&bi(n,i,i._start-i._delay),i=s;return bi(It,n,0),n},context:function(e,t){return e?new ip(e,t):Rt},matchMedia:function(e){return new x_(e)},matchMediaRefresh:function(){return Yr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||za()},addEventListener:function(e,t){var n=Wo[e]||(Wo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Wo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Zm,wrapYoyo:jm,distribute:kd,random:Hd,snap:zd,normalize:Km,getUnit:un,clamp:Xm,splitColor:Yd,toArray:ui,selector:Dc,mapRange:Gd,pipe:qm,unitize:$m,interpolate:Jm,shuffle:Bd},install:wd,effects:Dl,ticker:Kn,updateRoot:Dn.updateRoot,plugins:qn,globalTimeline:It,core:{PropTween:Nn,globals:Ad,Tween:Yt,Timeline:Dn,Animation:ka,getCache:Gr,_removeLinkedListItem:yl,reverting:function(){return sn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return ku=e}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=Yt[r]});Kn.add(Dn.updateRoot);bs=cl.to({},{duration:0});var S_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},M_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=S_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Fl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},Un(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}M_(o,s)}}}},Bn=cl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Fl("roundProps",Lc),Fl("modifiers"),Fl("snap",zd))||cl;Yt.version=Dn.version=Bn.version="3.15.1";bd=1;Hu()&&Ws();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;var zh,sr,Ps,Qu,kr,Hh,eh,y_=function(){return typeof window<"u"},Ki={},Lr=180/Math.PI,Ds=Math.PI/180,rs=Math.atan2,Vh=1e8,th=/([A-Z])/g,E_=/(left|right|width|margin|padding|x)/i,T_=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},w_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},A_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},R_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},rp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},sp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},C_=function(e,t,n){return e.style[t]=n},P_=function(e,t,n){return e.style.setProperty(t,n)},D_=function(e,t,n){return e._gsap[t]=n},L_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},I_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},U_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ut="transform",Fn=Ut+"Origin",N_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ki&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=zi(i,o)}):this.tfm[e]=a.x?a[e]:zi(i,e),e===Fn&&(this.tfm.zOrigin=a.zOrigin);else return wi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Fn,t,"")),e=Ut}(s||t)&&this.props.push(e,t,s[e])},ap=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},F_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(th,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=eh(),(!s||!s.isStart)&&!n[Ut]&&(ap(n),i.zOrigin&&n[Fn]&&(n[Fn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},op=function(e,t){var n={target:e,props:[],revert:F_,save:N_};return e._gsap||Bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},lp,Nc=function(e,t){var n=sr.createElementNS?sr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):sr.createElement(e);return n&&n.style?n:sr.createElement(e)},jn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(th,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Xs(t)||t,1)||""},Gh="O,Moz,ms,Ms,Webkit".split(","),Xs=function(e,t,n){var i=t||kr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Gh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Gh[a]:"")+e},Fc=function(){y_()&&window.document&&(zh=window,sr=zh.document,Ps=sr.documentElement,kr=Nc("div")||{style:{}},Nc("div"),Ut=Xs(Ut),Fn=Ut+"Origin",kr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",lp=!!Xs("perspective"),eh=Bn.core.reverting,Qu=1)},Wh=function(e){var t=e.ownerSVGElement,n=Nc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ps.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ps.removeChild(n),s},Xh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},cp=function(e){var t,n;try{t=e.getBBox()}catch{t=Wh(e),n=1}return t&&(t.width||t.height)||n||(t=Wh(e)),t&&!t.width&&!t.x&&!t.y?{x:+Xh(e,["x","cx","x1"])||0,y:+Xh(e,["y","cy","y1"])||0,width:0,height:0}:t},up=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&cp(e))},gr=function(e,t){if(t){var n=e.style,i;t in Ki&&t!==Fn&&(t=Ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(th,"-$1").toLowerCase())):n.removeAttribute(t)}},ar=function(e,t,n,i,s,a){var o=new Nn(e._pt,t,n,0,1,a?sp:rp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Yh={deg:1,rad:1,turn:1},O_={grid:1,flex:1},vr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=kr.style,l=E_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||Yh[i]||Yh[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&up(e),(f||a==="%")&&(Ki[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],zt(f?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===sr||!g.appendChild)&&(g=sr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Kn.time&&!m.uncache)return zt(s/m.width*h);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:gr(e,t)}else(f||a==="%")&&!O_[jn(g,"display")]&&(o.position=jn(e,"position")),g===e&&(o.position="static"),g.appendChild(kr),_=kr[u],g.removeChild(kr),o.position="absolute";return l&&f&&(m=Gr(g),m.time=Kn.time,m.width=g[u]),zt(d?_*s/h:_&&s?h/_*s:0)},zi=function(e,t,n,i){var s;return Qu||Fc(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ki[t]&&t!=="transform"?(s=Va(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:hl(jn(e,Fn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ul[t]&&ul[t](e,t,n)||jn(e,t)||Cd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vr(e,t,s,n)+n:s},B_=function(e,t,n,i){if(!n||n==="none"){var s=Xs(t,e,1),a=s&&jn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=jn(e,"borderTopColor"))}var o=new Nn(this._pt,e.style,t,0,1,tp),l=0,c=0,u,h,d,f,_,g,m,p,M,b,v,w;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=jn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=jn(e,t)||i,g?e.style[t]=g:gr(e,t)),u=[n,i],$d(u),n=u[0],i=u[1],d=n.match(Ts)||[],w=i.match(Ts)||[],w.length){for(;h=Ts.exec(i);)m=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=Cs(f,m)+v),p=parseFloat(m),b=m.substr((p+"").length),l=Ts.lastIndex-b.length,b||(b=b||Jn.units[t]||v,l===i.length&&(i+=b,o.e+=b)),v!==b&&(f=vr(e,t,g,b)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?sp:rp;return Td.test(i)&&(o.e=0),this._pt=o,o},qh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},k_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=qh[n]||n,t[1]=qh[i]||i,t.join(" ")},z_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ki[o]&&(l=1,o=o==="transformOrigin"?Fn:Ut),gr(n,o);l&&(gr(n,Ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Va(n,1),a.uncache=1,ap(i)))}},ul={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Nn(e._pt,t,n,0,0,z_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ha=[1,0,0,1,0,0],hp={},fp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$h=function(e){var t=jn(e,Ut);return fp(t)?Ha:t.substr(7).match(Ed).map(zt)},nh=function(e,t){var n=e._gsap||Gr(e),i=e.style,s=$h(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ha:s):(s===Ha&&!e.offsetParent&&e!==Ps&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ps.appendChild(e)),s=$h(e),l?i.display=l:gr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ps.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Oc=function(e,t,n,i,s,a){var o=e._gsap,l=s||nh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],b=t.split(" "),v=parseFloat(b[0])||0,w=parseFloat(b[1])||0,A,T,R,S;n?l!==Ha&&(T=f*m-_*g)&&(R=v*(m/T)+w*(-g/T)+(g*M-m*p)/T,S=v*(-_/T)+w*(f/T)-(f*M-_*p)/T,v=R,w=S):(A=cp(e),v=A.x+(~b[0].indexOf("%")?v/100*A.width:v),w=A.y+(~(b[1]||b[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&o.smooth?(p=v-c,M=w-u,o.xOffset=h+(p*f+M*g)-p,o.yOffset=d+(p*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Fn]="0px 0px",a&&(ar(a,o,"xOrigin",c,v),ar(a,o,"yOrigin",u,w),ar(a,o,"xOffset",h,o.xOffset),ar(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+w)},Va=function(e,t){var n=e._gsap||new Zd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=jn(e,Fn)||"0",u,h,d,f,_,g,m,p,M,b,v,w,A,T,R,S,x,D,U,z,V,G,W,Y,H,ne,L,ue,Fe,it,We,Ge;return u=h=d=g=m=p=M=b=v=0,f=_=1,n.svg=!!(e.getCTM&&up(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ut]!=="none"?l[Ut]:"")),i.scale=i.rotate=i.translate="none"),T=nh(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Oc(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,A=n.yOrigin||0,T!==Ha&&(D=T[0],U=T[1],z=T[2],V=T[3],u=G=T[4],h=W=T[5],T.length===6?(f=Math.sqrt(D*D+U*U),_=Math.sqrt(V*V+z*z),g=D||U?rs(U,D)*Lr:0,M=z||V?rs(z,V)*Lr+g:0,M&&(_*=Math.abs(Math.cos(M*Ds))),n.svg&&(u-=w-(w*D+A*z),h-=A-(w*U+A*V))):(Ge=T[6],it=T[7],L=T[8],ue=T[9],Fe=T[10],We=T[11],u=T[12],h=T[13],d=T[14],R=rs(Ge,Fe),m=R*Lr,R&&(S=Math.cos(-R),x=Math.sin(-R),Y=G*S+L*x,H=W*S+ue*x,ne=Ge*S+Fe*x,L=G*-x+L*S,ue=W*-x+ue*S,Fe=Ge*-x+Fe*S,We=it*-x+We*S,G=Y,W=H,Ge=ne),R=rs(-z,Fe),p=R*Lr,R&&(S=Math.cos(-R),x=Math.sin(-R),Y=D*S-L*x,H=U*S-ue*x,ne=z*S-Fe*x,We=V*x+We*S,D=Y,U=H,z=ne),R=rs(U,D),g=R*Lr,R&&(S=Math.cos(R),x=Math.sin(R),Y=D*S+U*x,H=G*S+W*x,U=U*S-D*x,W=W*S-G*x,D=Y,G=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=zt(Math.sqrt(D*D+U*U+z*z)),_=zt(Math.sqrt(W*W+Ge*Ge)),R=rs(G,W),M=Math.abs(R)>2e-4?R*Lr:0,v=We?1/(We<0?-We:We):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!fp(jn(e,Ut)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=zt(f),n.scaleY=zt(_),n.rotation=zt(g)+o,n.rotationX=zt(m)+o,n.rotationY=zt(p)+o,n.skewX=M+o,n.skewY=b+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Fn]=hl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?V_:lp?dp:H_,n.uncache=0,n},hl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ol=function(e,t,n){var i=un(t);return zt(parseFloat(t)+parseFloat(vr(e,"x",n+"px",i)))+i},H_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,dp(e,t)},Tr="0deg",ia="0px",br=") ",dp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,b=n.zOrigin,v="",w=p==="auto"&&e&&e!==1||p===!0;if(b&&(h!==Tr||u!==Tr)){var A=parseFloat(u)*Ds,T=Math.sin(A),R=Math.cos(A),S;A=parseFloat(h)*Ds,S=Math.cos(A),a=Ol(M,a,T*S*-b),o=Ol(M,o,-Math.sin(A)*-b),l=Ol(M,l,R*S*-b+b)}m!==ia&&(v+="perspective("+m+br),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(w||a!==ia||o!==ia||l!==ia)&&(v+=l!==ia||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+br),c!==Tr&&(v+="rotate("+c+br),u!==Tr&&(v+="rotateY("+u+br),h!==Tr&&(v+="rotateX("+h+br),(d!==Tr||f!==Tr)&&(v+="skew("+d+", "+f+br),(_!==1||g!==1)&&(v+="scale("+_+", "+g+br),M.style[Ut]=v||"translate(0, 0)"},V_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,b=parseFloat(a),v=parseFloat(o),w,A,T,R,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ds,c*=Ds,w=Math.cos(l)*h,A=Math.sin(l)*h,T=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=Ds,S=Math.tan(c-u),S=Math.sqrt(1+S*S),T*=S,R*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,A*=S)),w=zt(w),A=zt(A),T=zt(T),R=zt(R)):(w=h,R=d,A=T=0),(b&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(b=vr(f,"x",a,"px"),v=vr(f,"y",o,"px")),(_||g||m||p)&&(b=zt(b+_-(_*w+g*T)+m),v=zt(v+g-(_*A+g*R)+p)),(i||s)&&(S=f.getBBox(),b=zt(b+i/100*S.width),v=zt(v+s/100*S.height)),S="matrix("+w+","+A+","+T+","+R+","+b+","+v+")",f.setAttribute("transform",S),M&&(f.style[Ut]=S)},G_=function(e,t,n,i,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Lr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Vh)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Vh)%a-~~(c/a)*a)),e._pt=d=new Nn(e._pt,t,n,i,c,b_),d.e=u,d.u="deg",e._props.push(n),d},Kh=function(e,t){for(var n in t)e[n]=t[n];return e},W_=function(e,t,n){var i=Kh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ut]=t,o=Va(n,1),gr(n,Ut),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ut],a[Ut]=t,o=Va(n,1),a[Ut]=c);for(l in Ki)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=un(c),_=un(u),h=f!==_?vr(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Nn(e._pt,o,l,h,d-h,Uc),e._pt.u=_||0,e._props.push(l));Kh(o,i)};Un("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ul[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return zi(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,h)}});var pp={name:"css",register:Fc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,M,b,v,w,A,T,R,S;Qu||Fc(),this.styles=this.styles||op(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(qn[g]&&jd(g,t,n,i,e,s)))){if(f=typeof u,_=ul[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Oa(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",hr.lastIndex=0,hr.test(c)||(m=un(c),p=un(u),p?m!==p&&(c=vr(e,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],nn(c)&&~c.indexOf("random(")&&(c=Oa(c)),un(c+"")||c==="auto"||(c+=Jn.units[g]||un(zi(e,g))||""),(c+"").charAt(1)==="="&&(c=zi(e,g))):c=zi(e,g),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in wi&&(g==="autoAlpha"&&(d===1&&zi(e,"visibility")==="hidden"&&h&&(d=0),R.push("visibility",0,o.visibility),ar(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=wi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in Ki,b){if(this.styles.save(g),S=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=jn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=jn(e,"perspective"),x?e.style.perspective=x:gr(e,"perspective")}h=parseFloat(u)}if(v||(w=e._gsap,w.renderTransform&&!t.parseTransform||Va(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,v=this._pt=new Nn(this._pt,o,Ut,0,1,w.renderTransform,w,0,-1),v.dep=1),g==="scale")this._pt=new Nn(this._pt,w,"scaleY",w.scaleY,(M?Cs(w.scaleY,M+h):h)-w.scaleY||0,Uc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Fn,0,o[Fn]),u=k_(u),w.svg?Oc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&ar(this,w,"zOrigin",w.zOrigin,p),ar(this,o,g,hl(c),hl(u)));continue}else if(g==="svgOrigin"){Oc(e,u,1,A,0,this);continue}else if(g in hp){G_(this,w,g,d,M?Cs(d,M+u):u);continue}else if(g==="smoothOrigin"){ar(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){W_(this,u,e);continue}}else g in o||(g=Xs(g)||g);if(b||(h||h===0)&&(d||d===0)&&!T_.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),p=un(u)||(g in Jn.units?Jn.units[g]:m),m!==p&&(d=vr(e,g,c,p)),this._pt=new Nn(this._pt,b?w:o,g,d,(M?Cs(d,M+h):h)-d,!b&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?R_:Uc),this._pt.u=p||0,b&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=A_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=w_);else if(g in o)B_.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){Gu(g,u);continue}b||(g in o?R.push(g,0,o[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),a.push(g)}}T&&np(this)},render:function(e,t){if(t.tween._time||!eh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:zi,aliases:wi,getSetter:function(e,t,n){var i=wi[t];return i&&i.indexOf(",")<0&&(t=i),t in Ki&&t!==Fn&&(e._gsap.x||zi(e,"x"))?n&&Hh===n?t==="scale"?L_:D_:(Hh=n||{})&&(t==="scale"?I_:U_):e.style&&!zu(e.style[t])?C_:~t.indexOf("-")?P_:ju(e,t)},core:{_removeProperty:gr,_getMatrix:nh}};Bn.utils.checkPrefix=Xs;Bn.core.getStyleSaver=op;(function(r,e,t,n){var i=Un(r+","+e+","+t,function(s){Ki[s]=1});Un(e,function(s){Jn.units[s]="deg",hp[s]=1}),wi[i[13]]=r+","+e,Un(n,function(s){var a=s.split(":");wi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});Bn.registerPlugin(pp);var mp=Bn.registerPlugin(pp)||Bn;mp.core.Tween;function X_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Y_(r,e,t){return e&&X_(r.prototype,e),r}var rn,Xo,Ln,or,lr,Ls,_p,Ir,Is,gp,Gi,_i,vp,xp=function(){return rn||typeof window<"u"&&(rn=window.gsap)&&rn.registerPlugin&&rn},Sp=1,ws=[],nt=[],Pi=[],ba=Date.now,Bc=function(e,t){return t},q_=function(){var e=Is.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Pi),nt=n,Pi=i,Bc=function(a,o){return t[a](o)}},fr=function(e,t){return~Pi.indexOf(e)&&Pi[Pi.indexOf(e)+1][t]},wa=function(e){return!!~gp.indexOf(e)},gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},_n=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ao="scrollLeft",oo="scrollTop",kc=function(){return Gi&&Gi.isPressed||nt.cache++},fl=function(e,t){var n=function i(s){if(s||s===0){Sp&&Ln.history.scrollRestoration!=="manual"&&(Ln.history.scrollRestoration="manual");var a=Gi&&Gi.isPressed;s=i.v=Math.round(s)||(Gi&&Gi.iOS?1:0),e(s),i.cacheID=nt.cache,a&&Bc("ss",s)}else(t||nt.cache!==i.cacheID||Bc("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},En={s:ao,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fl(function(r){return arguments.length?Ln.scrollTo(r,Zt.sc()):Ln.pageXOffset||or[ao]||lr[ao]||Ls[ao]||0})},Zt={s:oo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:En,sc:fl(function(r){return arguments.length?Ln.scrollTo(En.sc(),r):Ln.pageYOffset||or[oo]||lr[oo]||Ls[oo]||0})},An=function(e,t){return(t&&t._ctx&&t._ctx.selector||rn.utils.toArray)(e)[0]||(typeof e=="string"&&rn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},$_=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},xr=function(e,t){var n=t.s,i=t.sc;wa(e)&&(e=or.scrollingElement||lr);var s=nt.indexOf(e),a=i===Zt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+a]||gn(e,"scroll",kc);var o=nt[s+a],l=o||(nt[s+a]=fl(fr(e,n),!0)||(wa(e)?i:fl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=rn.getProperty(e,"scrollBehavior")==="smooth"),l},zc=function(e,t,n){var i=e,s=e,a=ba(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=ba();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},d=function(_){var g=o,m=s,p=ba();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:h,getVelocity:d}},ra=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Zh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Mp=function(){Is=rn.core.globals().ScrollTrigger,Is&&Is.core&&q_()},yp=function(e){return rn=e||xp(),!Xo&&rn&&typeof document<"u"&&document.body&&(Ln=window,or=document,lr=or.documentElement,Ls=or.body,gp=[Ln,or,lr,Ls],rn.utils.clamp,vp=rn.core.context||function(){},Ir="onpointerenter"in Ls?"pointer":"mouse",_p=Gt.isTouch=Ln.matchMedia&&Ln.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ln||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_i=Gt.eventTypes=("ontouchstart"in lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sp=0},500),Xo=1),Is||Mp(),Xo};En.op=Zt;nt.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Xo||yp(rn)||console.warn("Please gsap.registerPlugin(Observer)"),Is||Mp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,b=n.onPress,v=n.onRelease,w=n.onRight,A=n.onLeft,T=n.onUp,R=n.onDown,S=n.onChangeX,x=n.onChangeY,D=n.onChange,U=n.onToggleX,z=n.onToggleY,V=n.onHover,G=n.onHoverEnd,W=n.onMove,Y=n.ignoreCheck,H=n.isNormalizer,ne=n.onGestureStart,L=n.onGestureEnd,ue=n.onWheel,Fe=n.onEnable,it=n.onDisable,We=n.onClick,Ge=n.scrollSpeed,K=n.capture,j=n.allowClicks,fe=n.lockAxis,we=n.onLockAxis;this.target=o=An(o)||lr,this.vars=n,f&&(f=rn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,Ge=Ge||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ln.getComputedStyle(Ls).lineHeight)||22);var Ee,Be,ut,P,Xe,Le,Ae,N=this,rt=0,ge=0,He=n.passive||!u&&n.passive!==!1,$e=xr(o,En),pt=xr(o,Zt),C=$e(),y=pt(),k=~a.indexOf("touch")&&!~a.indexOf("pointer")&&_i[0]==="pointerdown",Z=wa(o),J=o.ownerDocument||or,$=[0,0,0],ve=[0,0,0],se=0,Te=function(){return se=ba()},he=function(Re,qe){return(N.event=Re)&&f&&$_(Re.target,f)||qe&&k&&Re.pointerType!=="touch"||Y&&Y(Re,qe)},re=function(){N._vx.reset(),N._vy.reset(),Be.pause(),h&&h(N)},ce=function(){var Re=N.deltaX=Zh($),qe=N.deltaY=Zh(ve),de=Math.abs(Re)>=i,ke=Math.abs(qe)>=i;D&&(de||ke)&&D(N,Re,qe,$,ve),de&&(w&&N.deltaX>0&&w(N),A&&N.deltaX<0&&A(N),S&&S(N),U&&N.deltaX<0!=rt<0&&U(N),rt=N.deltaX,$[0]=$[1]=$[2]=0),ke&&(R&&N.deltaY>0&&R(N),T&&N.deltaY<0&&T(N),x&&x(N),z&&N.deltaY<0!=ge<0&&z(N),ge=N.deltaY,ve[0]=ve[1]=ve[2]=0),(P||ut)&&(W&&W(N),ut&&(m&&ut===1&&m(N),M&&M(N),ut=0),P=!1),Le&&!(Le=!1)&&we&&we(N),Xe&&(ue(N),Xe=!1),Ee=0},Ue=function(Re,qe,de){$[de]+=Re,ve[de]+=qe,N._vx.update(Re),N._vy.update(qe),c?Ee||(Ee=requestAnimationFrame(ce)):ce()},be=function(Re,qe){fe&&!Ae&&(N.axis=Ae=Math.abs(Re)>Math.abs(qe)?"x":"y",Le=!0),Ae!=="y"&&($[2]+=Re,N._vx.update(Re,!0)),Ae!=="x"&&(ve[2]+=qe,N._vy.update(qe,!0)),c?Ee||(Ee=requestAnimationFrame(ce)):ce()},le=function(Re){if(!he(Re,1)){Re=ra(Re,u);var qe=Re.clientX,de=Re.clientY,ke=qe-N.x,Ie=de-N.y,Ye=N.isDragging;N.x=qe,N.y=de,(Ye||(ke||Ie)&&(Math.abs(N.startX-qe)>=s||Math.abs(N.startY-de)>=s))&&(ut||(ut=Ye?2:1),Ye||(N.isDragging=!0),be(ke,Ie))}},Ve=N.onPress=function(_e){he(_e,1)||_e&&_e.button||(N.axis=Ae=null,Be.pause(),N.isPressed=!0,_e=ra(_e),rt=ge=0,N.startX=N.x=_e.clientX,N.startY=N.y=_e.clientY,N._vx.reset(),N._vy.reset(),gn(H?o:J,_i[1],le,He,!0),N.deltaX=N.deltaY=0,b&&b(N))},I=N.onRelease=function(_e){if(!he(_e,1)){_n(H?o:J,_i[1],le,!0);var Re=!isNaN(N.y-N.startY),qe=N.isDragging,de=qe&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),ke=ra(_e);!de&&Re&&(N._vx.reset(),N._vy.reset(),u&&j&&rn.delayedCall(.08,function(){if(ba()-se>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(J.createEvent){var Ie=J.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,Ln,1,ke.screenX,ke.screenY,ke.clientX,ke.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Ie)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,h&&qe&&!H&&Be.restart(!0),ut&&ce(),p&&qe&&p(N),v&&v(N,de)}},ie=function(Re){return Re.touches&&Re.touches.length>1&&(N.isGesturing=!0)&&ne(Re,N.isDragging)},ae=function(){return(N.isGesturing=!1)||L(N)},pe=function(Re){if(!he(Re)){var qe=$e(),de=pt();Ue((qe-C)*Ge,(de-y)*Ge,1),C=qe,y=de,h&&Be.restart(!0)}},te=function(Re){if(!he(Re)){Re=ra(Re,u),ue&&(Xe=!0);var qe=(Re.deltaMode===1?l:Re.deltaMode===2?Ln.innerHeight:1)*_;Ue(Re.deltaX*qe,Re.deltaY*qe,0),h&&!H&&Be.restart(!0)}},Q=function(Re){if(!he(Re)){var qe=Re.clientX,de=Re.clientY,ke=qe-N.x,Ie=de-N.y;N.x=qe,N.y=de,P=!0,h&&Be.restart(!0),(ke||Ie)&&be(ke,Ie)}},Se=function(Re){N.event=Re,V(N)},Oe=function(Re){N.event=Re,G(N)},ht=function(Re){return he(Re)||ra(Re,u)&&We(N)};Be=N._dc=rn.delayedCall(d||.25,re).pause(),N.deltaX=N.deltaY=0,N._vx=zc(0,50,!0),N._vy=zc(0,50,!0),N.scrollX=$e,N.scrollY=pt,N.isDragging=N.isGesturing=N.isPressed=!1,vp(this),N.enable=function(_e){return N.isEnabled||(gn(Z?J:o,"scroll",kc),a.indexOf("scroll")>=0&&gn(Z?J:o,"scroll",pe,He,K),a.indexOf("wheel")>=0&&gn(o,"wheel",te,He,K),(a.indexOf("touch")>=0&&_p||a.indexOf("pointer")>=0)&&(gn(o,_i[0],Ve,He,K),gn(J,_i[2],I),gn(J,_i[3],I),j&&gn(o,"click",Te,!0,!0),We&&gn(o,"click",ht),ne&&gn(J,"gesturestart",ie),L&&gn(J,"gestureend",ae),V&&gn(o,Ir+"enter",Se),G&&gn(o,Ir+"leave",Oe),W&&gn(o,Ir+"move",Q)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=P=ut=!1,N._vx.reset(),N._vy.reset(),C=$e(),y=pt(),_e&&_e.type&&Ve(_e),Fe&&Fe(N)),N},N.disable=function(){N.isEnabled&&(ws.filter(function(_e){return _e!==N&&wa(_e.target)}).length||_n(Z?J:o,"scroll",kc),N.isPressed&&(N._vx.reset(),N._vy.reset(),_n(H?o:J,_i[1],le,!0)),_n(Z?J:o,"scroll",pe,K),_n(o,"wheel",te,K),_n(o,_i[0],Ve,K),_n(J,_i[2],I),_n(J,_i[3],I),_n(o,"click",Te,!0),_n(o,"click",ht),_n(J,"gesturestart",ie),_n(J,"gestureend",ae),_n(o,Ir+"enter",Se),_n(o,Ir+"leave",Oe),_n(o,Ir+"move",Q),N.isEnabled=N.isPressed=N.isDragging=!1,it&&it(N))},N.kill=N.revert=function(){N.disable();var _e=ws.indexOf(N);_e>=0&&ws.splice(_e,1),Gi===N&&(Gi=0)},ws.push(N),H&&wa(o)&&(Gi=N),N.enable(g)},Y_(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.15.1";Gt.create=function(r){return new Gt(r)};Gt.register=yp;Gt.getAll=function(){return ws.slice()};Gt.getById=function(r){return ws.filter(function(e){return e.vars.id===r})[0]};xp()&&rn.registerPlugin(Gt);var ye,ys,tt,gt,$n,mt,ih,dl,Ga,Aa,ma,lo,ln,bl,Hc,Sn,jh,Jh,Es,Ep,Bl,Tp,xn,Vc,bp,wp,nr,Gc,rh,Us,sh,dr,Wc,kl,co=1,cn=Date.now,zl=cn(),hi=0,_a=0,Qh=function(e,t,n){var i=Xn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},ef=function(e,t){return t&&(!Xn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},K_=function r(){return _a&&requestAnimationFrame(r)},tf=function(){return bl=1},nf=function(){return bl=0},Ei=function(e){return e},ga=function(e){return Math.round(e*1e5)/1e5||0},Ap=function(){return typeof window<"u"},Rp=function(){return ye||Ap()&&(ye=window.gsap)&&ye.registerPlugin&&ye},jr=function(e){return!!~ih.indexOf(e)},Cp=function(e){return(e==="Height"?sh:tt["inner"+e])||$n["client"+e]||mt["client"+e]},Pp=function(e){return fr(e,"getBoundingClientRect")||(jr(e)?function(){return Zo.width=tt.innerWidth,Zo.height=sh,Zo}:function(){return Hi(e)})},Z_=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=fr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Cp(s):e["client"+s])||0}},j_=function(e,t){return!t||~Pi.indexOf(e)?Pp(e):function(){return Zo}},Ai=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=fr(e,n))?a()-Pp(e)()[s]:jr(e)?($n[n]||mt[n])-Cp(i):e[n]-e["offset"+i])},uo=function(e,t){for(var n=0;n<Es.length;n+=3)(!t||~t.indexOf(Es[n+1]))&&e(Es[n],Es[n+1],Es[n+2])},Xn=function(e){return typeof e=="string"},hn=function(e){return typeof e=="function"},va=function(e){return typeof e=="number"},Ur=function(e){return typeof e=="object"},sa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ss=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},as=Math.abs,Dp="left",Lp="top",ah="right",oh="bottom",qr="width",$r="height",Ra="Right",Ca="Left",Pa="Top",Da="Bottom",Xt="padding",oi="margin",Ys="Width",lh="Height",Kt="px",li=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},J_=function(e){var t=li(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},rf=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&li(e)[Hc]!=="matrix(1, 0, 0, 1, 0, 0)"&&ye.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},pl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ip=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Q_=function(e){return function(t){return ye.utils.snap(Ip(e),t)}},ch=function(e){var t=ye.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},eg=function(e){return function(t,n){return ch(Ip(e))(t,n.direction)}},ho=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},tn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},en=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},fo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},sf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},po={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},Yo=function(e,t){if(Xn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ml?ml[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},mo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=gt.createElement("div"),g=jr(n)||fr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?mt:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,b=M?c:u,v="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Zt?ah:oh)+":"+(a+parseFloat(d))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],qo(_,0,i,M),_},qo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ys]=1,s["border"+o+Ys]=0,s[n.p]=t+"px",ye.set(e,s)},et=[],Xc={},Wa,af=function(){return cn()-hi>34&&(Wa||(Wa=requestAnimationFrame(Xi)))},os=function(){(!xn||!xn.isPressed||xn.startX>mt.clientWidth)&&(nt.cache++,xn?Wa||(Wa=requestAnimationFrame(Xi)):Xi(),hi||Qr("scrollStart"),hi=cn())},Hl=function(){wp=tt.innerWidth,bp=tt.innerHeight},xa=function(e){nt.cache++,(e===!0||!ln&&!Tp&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!Vc||wp!==tt.innerWidth||Math.abs(tt.innerHeight-bp)>tt.innerHeight*.25))&&dl.restart(!0)},Jr={},tg=[],Up=function r(){return en(je,"scrollEnd",r)||zr(!0)},Qr=function(e){return Jr[e]&&Jr[e].map(function(t){return t()})||tg},Wn=[],Np=function(e){for(var t=0;t<Wn.length;t+=5)(!e||Wn[t+4]&&Wn[t+4].query===e)&&(Wn[t].style.cssText=Wn[t+1],Wn[t].getBBox&&Wn[t].setAttribute("transform",Wn[t+2]||""),Wn[t+3].uncache=1)},Fp=function(){nt.cache++,nt.forEach(function(e){return hn(e)&&(e.rec=e())})},uh=function(e,t){var n;for(Sn=0;Sn<et.length;Sn++)n=et[Sn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));dr=!0,t&&Np(t),t||Qr("revert")},Op=function(e,t){nt.cache++,(t||!Mn)&&nt.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),Xn(e)&&(rh=e,tt.history.scrollRestoration!==e&&(tt.history.scrollRestoration=e))},Mn,Kr=0,of,ng=function(){if(of!==Kr){var e=of=Kr;requestAnimationFrame(function(){return e===Kr&&zr(!0)})}},Bp=function(){mt.appendChild(Us),sh=!xn&&Us.offsetHeight||tt.innerHeight,mt.removeChild(Us)},lf=function(e){return Ga(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},zr=function(e,t){if($n=gt.documentElement,mt=gt.body,ih=[tt,gt,$n,mt],hi&&!e&&!dr){tn(je,"scrollEnd",Up);return}Bp(),Mn=je.isRefreshing=!0,dr||Fp();var n=Qr("refreshInit");Ep&&je.sort(),t||uh(),nt.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),dr=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Wc=1,lf(!0),et.forEach(function(i){var s=Ai(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),lf(!1),Wc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Op(rh,1),dl.pause(),Kr++,Mn=2,Xi(2),et.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Mn=je.isRefreshing=!1,Qr("refresh")},Yc=0,$o=1,La,Xi=function(e){if(e===2||!Mn&&!dr){je.isUpdating=!0,La&&La.update(0);var t=et.length,n=cn(),i=n-zl>=50,s=t&&et[0].scroll();if($o=Yc>s?-1:1,Mn||(Yc=s),i&&(hi&&!bl&&n-hi>200&&(hi=0,Qr("scrollEnd")),ma=zl,zl=n),$o<0){for(Sn=t;Sn-- >0;)et[Sn]&&et[Sn].update(0,i);$o=1}else for(Sn=0;Sn<t;Sn++)et[Sn]&&et[Sn].update(0,i);je.isUpdating=!1}Wa=0},qc=[Dp,Lp,oh,ah,oi+Da,oi+Ra,oi+Pa,oi+Ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ko=qc.concat([qr,$r,"boxSizing","max"+Ys,"max"+lh,"position",oi,Xt,Xt+Pa,Xt+Ra,Xt+Da,Xt+Ca]),ig=function(e,t,n){Ns(n);var i=e._gsap;if(i.spacerIsNative)Ns(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Vl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=qc.length,a=t.style,o=e.style,l;s--;)l=qc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[oh]=o[ah]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[qr]=pl(e,En)+Kt,a[$r]=pl(e,Zt)+Kt,a[Xt]=o[oi]=o[Lp]=o[Dp]="0",Ns(i),o[qr]=o["max"+Ys]=n[qr],o[$r]=o["max"+lh]=n[$r],o[Xt]=n[Xt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},rg=/([A-Z])/g,Ns=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||ye.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(rg,"-$1").toLowerCase())}},_o=function(e){for(var t=Ko.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ko[s],n[Ko[s]]);return i.t=e,i},sg=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Zo={left:0,top:0},cf=function(e,t,n,i,s,a,o,l,c,u,h,d,f,_){hn(e)&&(e=e(l)),Xn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Yo("0"+e.substr(3),n):0));var g=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(e)||(e=+e),va(e))f&&(e=ye.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&qo(o,n,i,!0);else{hn(t)&&(t=t(l));var b=(e||"0").split(" "),v,w,A,T;M=An(t,l)||mt,v=Hi(M)||{},(!v||!v.left&&!v.top)&&li(M).display==="none"&&(T=M.style.display,M.style.display="block",v=Hi(M),T?M.style.display=T:M.style.removeProperty("display")),w=Yo(b[0],v[i.d]),A=Yo(b[1]||"0",n),e=v[i.p]-c[i.p]-u+w+s-A,o&&qo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var R=e+n,S=a._isStart;m="scroll"+i.d2,qo(a,R,i,S&&R>20||!S&&(h?Math.max(mt[m],$n[m]):a.parentNode[m])<=R+1),h&&(c=Hi(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Kt))}return f&&M&&(m=Hi(M),f.seek(d),p=Hi(M),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},ag=/(webkit|moz|length|cssText|inset)/i,uf=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===mt){e._stOrig=s.cssText,o=li(e);for(a in o)!+a&&!ag.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;ye.core.getCache(e).uncache=1,t.appendChild(e)}},kp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},go=function(e,t,n){var i={};i[t.p]="+="+n,ye.set(e,i)},hf=function(e,t){var n=xr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,_={};c=c||n();var g=kp(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){nt.cache++,a.tween&&Xi()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=ye.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},tn(e,"wheel",n.wheelHandler),je.isTouch&&tn(e,"touchmove",n.wheelHandler),s},je=(function(){function r(t,n){ys||r.register(ye)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Gc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=Ei;return}n=rf(Xn(n)||va(n)||n.nodeType?{trigger:n}:n,po);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,b=s.once,v=s.snap,w=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,R=s.fastScrollEnd,S=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?En:Zt,D=!h&&h!==0,U=An(n.scroller||tt),z=ye.core.getCache(U),V=jr(U),G=("pinType"in n?n.pinType:fr(U,"pinType")||V&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=D&&n.toggleActions.split(" "),H="markers"in n?n.markers:po.markers,ne=V?0:parseFloat(li(U)["border"+x.p2+Ys])||0,L=this,ue=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Fe=Z_(U,V,x),it=j_(U,V),We=0,Ge=0,K=0,j=xr(U,x),fe,we,Ee,Be,ut,P,Xe,Le,Ae,N,rt,ge,He,$e,pt,C,y,k,Z,J,$,ve,se,Te,he,re,ce,Ue,be,le,Ve,I,ie,ae,pe,te,Q,Se,Oe;if(L._startClamp=L._endClamp=!1,L._dir=x,m*=45,L.scroller=U,L.scroll=T?T.time.bind(T):j,Be=j(),dr&&j.rec==null&&(j.rec=Be),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Ep=1,n.refreshPriority===-9999&&(La=L)),z.tweenScroll=z.tweenScroll||{top:hf(U,Zt),left:hf(U,En)},L.tweenTo=fe=z.tweenScroll[x.p],L.scrubDuration=function(de){ie=va(de)&&de,ie?I?I.duration(de):I=ye.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(L)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),le=0,l||(l=i.vars.id)),v&&((!Ur(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in mt.style&&ye.set(V?[mt,$n]:U,{scrollBehavior:"auto"}),nt.forEach(function(de){return hn(de)&&de.target===(V?gt.scrollingElement||$n:U)&&(de.smooth=!1)}),Ee=hn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Q_(i):v.snapTo==="labelsDirectional"?eg(i):v.directional!==!1?function(de,ke){return ch(v.snapTo)(de,cn()-Ge<500?0:ke.direction)}:ye.utils.snap(v.snapTo),ae=v.duration||{min:.1,max:2},ae=Ur(ae)?Aa(ae.min,ae.max):Aa(ae,ae),pe=ye.delayedCall(v.delay||ie/2||.1,function(){var de=j(),ke=cn()-Ge<500,Ie=fe.tween;if((ke||Math.abs(L.getVelocity())<10)&&!Ie&&!bl&&We!==de){var Ye=(de-P)/$e,Bt=i&&!D?i.totalProgress():Ye,Je=ke?0:(Bt-Ve)/(cn()-ma)*1e3||0,At=ye.utils.clamp(-Ye,1-Ye,as(Je/2)*Je/.185),kt=Ye+(v.inertia===!1?0:At),Tt,Mt,_t=v,kn=_t.onStart,bt=_t.onInterrupt,pn=_t.onComplete;if(Tt=Ee(kt,L),va(Tt)||(Tt=kt),Mt=Math.max(0,Math.round(P+Tt*$e)),de<=Xe&&de>=P&&Mt!==de){if(Ie&&!Ie._initted&&Ie.data<=as(Mt-de))return;v.inertia===!1&&(At=Tt-Ye),fe(Mt,{duration:ae(as(Math.max(as(kt-Bt),as(Tt-Bt))*.185/Je/.05||0)),ease:v.ease||"power3",data:as(Mt-de),onInterrupt:function(){return pe.restart(!0)&&bt&&ss(L,bt)},onComplete:function(){L.update(),We=j(),i&&!D&&(I?I.resetTo("totalProgress",Tt,i._tTime/i._tDur):i.progress(Tt)),le=Ve=i&&!D?i.totalProgress():L.progress,M&&M(L),pn&&ss(L,pn)}},de,At*$e,Mt-de-At*$e),kn&&ss(L,kn,fe.tween)}}else L.isActive&&We!==de&&pe.restart(!0)}).pause()),l&&(Xc[l]=L),d=L.trigger=An(d||f!==!0&&f),Oe=d&&d._gsap&&d._gsap.stRevert,Oe&&(Oe=Oe(L)),f=f===!0?d:An(f),Xn(o)&&(o={targets:d,className:o}),f&&(_===!1||_===oi||(_=!_&&f.parentNode&&f.parentNode.style&&li(f.parentNode).display==="flex"?!1:Xt),L.pin=f,we=ye.core.getCache(f),we.spacer?pt=we.pinState:(A&&(A=An(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),we.spacerIsNative=!!A,A&&(we.spacerState=_o(A))),we.spacer=k=A||gt.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),we.pinState=pt=_o(f)),n.force3D!==!1&&ye.set(f,{force3D:!0}),L.spacer=k=we.spacer,be=li(f),Te=be[_+x.os2],J=ye.getProperty(f),$=ye.quickSetter(f,x.a,Kt),Vl(f,k,be),y=_o(f)),H){ge=Ur(H)?rf(H,sf):sf,N=mo("scroller-start",l,U,x,ge,0),rt=mo("scroller-end",l,U,x,ge,0,N),Z=N["offset"+x.op.d2];var ht=An(fr(U,"content")||U);Le=this.markerStart=mo("start",l,ht,x,ge,Z,0,T),Ae=this.markerEnd=mo("end",l,ht,x,ge,Z,0,T),T&&(Se=ye.quickSetter([Le,Ae],x.a,Kt)),!G&&!(Pi.length&&fr(U,"fixedMarkers")===!0)&&(J_(V?mt:U),ye.set([N,rt],{force3D:!0}),re=ye.quickSetter(N,x.a,Kt),Ue=ye.quickSetter(rt,x.a,Kt))}if(T){var _e=T.vars.onUpdate,Re=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),_e&&_e.apply(T,Re||[])})}if(L.previous=function(){return et[et.indexOf(L)-1]},L.next=function(){return et[et.indexOf(L)+1]},L.revert=function(de,ke){if(!ke)return L.kill(!0);var Ie=de!==!1||!L.enabled,Ye=ln;Ie!==L.isReverted&&(Ie&&(te=Math.max(j(),L.scroll.rec||0),K=L.progress,Q=i&&i.progress()),Le&&[Le,Ae,N,rt].forEach(function(Bt){return Bt.style.display=Ie?"none":"block"}),Ie&&(ln=L,L.update(Ie)),f&&(!w||!L.isActive)&&(Ie?ig(f,k,pt):Vl(f,k,li(f),he)),Ie||L.update(Ie),ln=Ye,L.isReverted=Ie)},L.refresh=function(de,ke,Ie,Ye){if(!((ln||!L.enabled)&&!ke)){if(f&&de&&hi){tn(r,"scrollEnd",Up);return}!Mn&&ue&&ue(L),ln=L,fe.tween&&!Ie&&(fe.tween.kill(),fe.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(st){return st.vars.immediateRender&&st.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Bt=Fe(),Je=it(),At=T?T.duration():Ai(U,x),kt=$e<=.01||!$e,Tt=0,Mt=Ye||0,_t=Ur(Ie)?Ie.end:n.end,kn=n.endTrigger||d,bt=Ur(Ie)?Ie.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),pn=L.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,L),ti=d&&Math.max(0,et.indexOf(L))||0,$t=ti,E,F,X,q,O,ee,oe,Me,xe,Ne,Pe,Ce,Ke;for(H&&Ur(Ie)&&(Ce=ye.getProperty(N,x.p),Ke=ye.getProperty(rt,x.p));$t-- >0;)ee=et[$t],ee.end||ee.refresh(0,1)||(ln=L),oe=ee.pin,oe&&(oe===d||oe===f||oe===pn)&&!ee.isReverted&&(Ne||(Ne=[]),Ne.unshift(ee),ee.revert(!0,!0)),ee!==et[$t]&&(ti--,$t--);for(hn(bt)&&(bt=bt(L)),bt=Qh(bt,"start",L),P=cf(bt,d,Bt,x,j(),Le,N,L,Je,ne,G,At,T,L._startClamp&&"_startClamp")||(f?-.001:0),hn(_t)&&(_t=_t(L)),Xn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Xn(bt)?bt.split(" ")[0]:"")+_t:(Tt=Yo(_t.substr(2),Bt),_t=Xn(bt)?bt:(T?ye.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,P):P)+Tt,kn=d)),_t=Qh(_t,"end",L),Xe=Math.max(P,cf(_t||(kn?"100% 0":At),kn,Bt,x,j()+Tt,Ae,rt,L,Je,ne,G,At,T,L._endClamp&&"_endClamp"))||-.001,Tt=0,$t=ti;$t--;)ee=et[$t]||{},oe=ee.pin,oe&&ee.start-ee._pinPush<=P&&!T&&ee.end>0&&(E=ee.end-(L._startClamp?Math.max(0,ee.start):ee.start),(oe===d&&ee.start-ee._pinPush<P||oe===pn)&&isNaN(bt)&&(Tt+=E*(1-ee.progress)),oe===f&&(Mt+=E));if(P+=Tt,Xe+=Tt,L._startClamp&&(L._startClamp+=Tt),L._endClamp&&!Mn&&(L._endClamp=Xe||-.001,Xe=Math.min(Xe,Ai(U,x))),$e=Xe-P||(P-=.01)&&.001,kt&&(K=ye.utils.clamp(0,1,ye.utils.normalize(P,Xe,te))),L._pinPush=Mt,Le&&Tt&&(E={},E[x.a]="+="+Tt,pn&&(E[x.p]="-="+j()),ye.set([Le,Ae],E)),f&&!(Wc&&L.end>=Ai(U,x)))E=li(f),q=x===Zt,X=j(),ve=parseFloat(J(x.a))+Mt,!At&&Xe>1&&(Pe=(V?gt.scrollingElement||$n:U).style,Pe={style:Pe,value:Pe["overflow"+x.a.toUpperCase()]},V&&li(mt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Pe.style["overflow"+x.a.toUpperCase()]="scroll")),Vl(f,k,E),y=_o(f),F=Hi(f,!0),Me=G&&xr(U,q?En:Zt)(),_?(he=[_+x.os2,$e+Mt+Kt],he.t=k,$t=_===Xt?pl(f,x)+$e+Mt:0,$t&&(he.push(x.d,$t+Kt),k.style.flexBasis!=="auto"&&(k.style.flexBasis=$t+Kt)),Ns(he),pn&&et.forEach(function(st){st.pin===pn&&st.vars.pinSpacing!==!1&&(st._subPinOffset=!0)}),G&&j(te)):($t=pl(f,x),$t&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=$t+Kt)),G&&(O={top:F.top+(q?X-P:Me)+Kt,left:F.left+(q?Me:X-P)+Kt,boxSizing:"border-box",position:"fixed"},O[qr]=O["max"+Ys]=Math.ceil(F.width)+Kt,O[$r]=O["max"+lh]=Math.ceil(F.height)+Kt,O[oi]=O[oi+Pa]=O[oi+Ra]=O[oi+Da]=O[oi+Ca]="0",O[Xt]=E[Xt],O[Xt+Pa]=E[Xt+Pa],O[Xt+Ra]=E[Xt+Ra],O[Xt+Da]=E[Xt+Da],O[Xt+Ca]=E[Xt+Ca],C=sg(pt,O,w),Mn&&j(0)),i?(xe=i._initted,Bl(1),i.render(i.duration(),!0,!0),se=J(x.a)-ve+$e+Mt,ce=Math.abs($e-se)>1,G&&ce&&C.splice(C.length-2,2),i.render(0,!0,!0),xe||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Bl(0)):se=$e,Pe&&(Pe.value?Pe.style["overflow"+x.a.toUpperCase()]=Pe.value:Pe.style.removeProperty("overflow-"+x.a));else if(d&&j()&&!T)for(F=d.parentNode;F&&F!==mt;)F._pinOffset&&(P-=F._pinOffset,Xe-=F._pinOffset),F=F.parentNode;Ne&&Ne.forEach(function(st){return st.revert(!1,!0)}),L.start=P,L.end=Xe,Be=ut=Mn?te:j(),!T&&!Mn&&!dr&&(Be<te&&j(te),L.scroll.rec=0),L.revert(!1,!0),Ge=cn(),pe&&(We=-1,pe.restart(!0)),ln=0,i&&D&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(kt||K!==L.progress||T||g||i&&!i._initted)&&(i&&!D&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(T&&P<-.001&&!K?ye.utils.normalize(P,Xe,0):K,!0),L.progress=kt||(Be-P)/$e===K?0:K),f&&_&&(k._pinOffset=Math.round(L.progress*se)),I&&I.invalidate(),isNaN(Ce)||(Ce-=ye.getProperty(N,x.p),Ke-=ye.getProperty(rt,x.p),go(N,x,Ce),go(Le,x,Ce-(Ye||0)),go(rt,x,Ke),go(Ae,x,Ke-(Ye||0))),kt&&!Mn&&L.update(),u&&!Mn&&!He&&(He=!0,u(L),He=!1)}},L.getVelocity=function(){return(j()-ut)/(cn()-ma)*1e3||0},L.endAnimation=function(){sa(L.callbackAnimation),i&&(I?I.progress(1):i.paused()?D||sa(i,L.direction<0,1):sa(i,i.reversed()))},L.labelToScroll=function(de){return i&&i.labels&&(P||L.refresh()||P)+i.labels[de]/i.duration()*$e||0},L.getTrailing=function(de){var ke=et.indexOf(L),Ie=L.direction>0?et.slice(0,ke).reverse():et.slice(ke+1);return(Xn(de)?Ie.filter(function(Ye){return Ye.vars.preventOverlaps===de}):Ie).filter(function(Ye){return L.direction>0?Ye.end<=P:Ye.start>=Xe})},L.update=function(de,ke,Ie){if(!(T&&!Ie&&!de)){var Ye=Mn===!0?te:L.scroll(),Bt=de?0:(Ye-P)/$e,Je=Bt<0?0:Bt>1?1:Bt||0,At=L.progress,kt,Tt,Mt,_t,kn,bt,pn,ti;if(ke&&(ut=Be,Be=T?j():Ye,v&&(Ve=le,le=i&&!D?i.totalProgress():Je)),m&&f&&!ln&&!co&&hi&&(!Je&&P<Ye+(Ye-ut)/(cn()-ma)*m?Je=1e-4:Je===1&&Xe>Ye+(Ye-ut)/(cn()-ma)*m&&(Je=.9999)),Je!==At&&L.enabled){if(kt=L.isActive=!!Je&&Je<1,Tt=!!At&&At<1,bt=kt!==Tt,kn=bt||!!Je!=!!At,L.direction=Je>At?1:-1,L.progress=Je,kn&&!ln&&(Mt=Je&&!At?0:Je===1?1:At===1?2:3,D&&(_t=!bt&&Y[Mt+1]!=="none"&&Y[Mt+1]||Y[Mt],ti=i&&(_t==="complete"||_t==="reset"||_t in i))),S&&(bt||ti)&&(ti||h||!i)&&(hn(S)?S(L):L.getTrailing(S).forEach(function(X){return X.endAnimation()})),D||(I&&!ln&&!co?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Je,i._tTime/i._tDur):(I.vars.totalProgress=Je,I.invalidate().restart())):i&&i.totalProgress(Je,!!(ln&&(Ge||de)))),f){if(de&&_&&(k.style[_+x.os2]=Te),!G)$(ga(ve+se*Je));else if(kn){if(pn=!de&&Je>At&&Xe+1>Ye&&Ye+1>=Ai(U,x),w)if(!de&&(kt||pn)){var $t=Hi(f,!0),E=Ye-P;uf(f,mt,$t.top+(x===Zt?E:0)+Kt,$t.left+(x===Zt?0:E)+Kt)}else uf(f,k);Ns(kt||pn?C:y),ce&&Je<1&&kt||$(ve+(Je===1&&!pn?se:0))}}v&&!fe.tween&&!ln&&!co&&pe.restart(!0),o&&(bt||b&&Je&&(Je<1||!kl))&&Ga(o.targets).forEach(function(X){return X.classList[kt||b?"add":"remove"](o.className)}),a&&!D&&!de&&a(L),kn&&!ln?(D&&(ti&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),a&&a(L)),(bt||!kl)&&(c&&bt&&ss(L,c),W[Mt]&&ss(L,W[Mt]),b&&(Je===1?L.kill(!1,1):W[Mt]=0),bt||(Mt=Je===1?1:3,W[Mt]&&ss(L,W[Mt]))),R&&!kt&&Math.abs(L.getVelocity())>(va(R)?R:2500)&&(sa(L.callbackAnimation),I?I.progress(1):sa(i,_t==="reverse"?1:!Je,1))):D&&a&&!ln&&a(L)}if(Ue){var F=T?Ye/T.duration()*(T._caScrollDist||0):Ye;re(F+(N._isFlipped?1:0)),Ue(F)}Se&&Se(-Ye/T.duration()*(T._caScrollDist||0))}},L.enable=function(de,ke){L.enabled||(L.enabled=!0,tn(U,"resize",xa),V||tn(U,"scroll",os),ue&&tn(r,"refreshInit",ue),de!==!1&&(L.progress=K=0,Be=ut=We=j()),ke!==!1&&L.refresh())},L.getTween=function(de){return de&&fe?fe.tween:I},L.setPositions=function(de,ke,Ie,Ye){if(T){var Bt=T.scrollTrigger,Je=T.duration(),At=Bt.end-Bt.start;de=Bt.start+At*de/Je,ke=Bt.start+At*ke/Je}L.refresh(!1,!1,{start:ef(de,Ie&&!!L._startClamp),end:ef(ke,Ie&&!!L._endClamp)},Ye),L.update()},L.adjustPinSpacing=function(de){if(he&&de){var ke=he.indexOf(x.d)+1;he[ke]=parseFloat(he[ke])+de+Kt,he[1]=parseFloat(he[1])+de+Kt,Ns(he)}},L.disable=function(de,ke){if(de!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,ke||I&&I.pause(),te=0,we&&(we.uncache=1),ue&&en(r,"refreshInit",ue),pe&&(pe.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!V)){for(var Ie=et.length;Ie--;)if(et[Ie].scroller===U&&et[Ie]!==L)return;en(U,"resize",xa),V||en(U,"scroll",os)}},L.kill=function(de,ke){L.disable(de,ke),I&&!ke&&I.kill(),l&&delete Xc[l];var Ie=et.indexOf(L);Ie>=0&&et.splice(Ie,1),Ie===Sn&&$o>0&&Sn--,Ie=0,et.forEach(function(Ye){return Ye.scroller===L.scroller&&(Ie=1)}),Ie||Mn||dr||(L.scroll.rec=0),i&&(i.scrollTrigger=null,de&&i.revert({kill:!1}),ke||i.kill()),Le&&[Le,Ae,N,rt].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),La===L&&(La=0),f&&(we&&(we.uncache=1),Ie=0,et.forEach(function(Ye){return Ye.pin===f&&Ie++}),Ie||(we.spacer=0)),n.onKill&&n.onKill(L)},et.push(L),L.enable(!1,!1),Oe&&Oe(L),i&&i.add&&!$e){var qe=L.update;L.update=function(){L.update=qe,nt.cache++,P||Xe||L.refresh()},ye.delayedCall(.01,L.update),$e=.01,P=Xe=0}else L.refresh();f&&ng()},r.register=function(n){return ys||(ye=n||Rp(),Ap()&&window.document&&r.enable(),ys=_a),ys},r.defaults=function(n){if(n)for(var i in n)po[i]=n[i];return po},r.disable=function(n,i){_a=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),en(tt,"wheel",os),en(gt,"scroll",os),clearInterval(lo),en(gt,"touchcancel",Ei),en(mt,"touchstart",Ei),ho(en,gt,"pointerdown,touchstart,mousedown",tf),ho(en,gt,"pointerup,touchend,mouseup",nf),dl.kill(),uo(en);for(var s=0;s<nt.length;s+=3)fo(en,nt[s],nt[s+1]),fo(en,nt[s],nt[s+2])},r.enable=function(){if(tt=window,gt=document,$n=gt.documentElement,mt=gt.body,ye){if(Ga=ye.utils.toArray,Aa=ye.utils.clamp,Gc=ye.core.context||Ei,Bl=ye.core.suppressOverwrites||Ei,rh=tt.history.scrollRestoration||"auto",Yc=tt.pageYOffset||0,ye.core.globals("ScrollTrigger",r),mt){_a=1,Us=document.createElement("div"),Us.style.height="100vh",Us.style.position="absolute",Bp(),K_(),Gt.register(ye),r.isTouch=Gt.isTouch,nr=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vc=Gt.isTouch===1,tn(tt,"wheel",os),ih=[tt,gt,$n,mt],ye.matchMedia?(r.matchMedia=function(u){var h=ye.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},ye.addEventListener("matchMediaInit",function(){Fp(),uh()}),ye.addEventListener("matchMediaRevert",function(){return Np()}),ye.addEventListener("matchMedia",function(){zr(0,1),Qr("matchMedia")}),ye.matchMedia().add("(orientation: portrait)",function(){return Hl(),Hl})):console.warn("Requires GSAP 3.11.0 or later"),Hl(),tn(gt,"scroll",os);var n=mt.hasAttribute("style"),i=mt.style,s=i.borderTopStyle,a=ye.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Hi(mt),Zt.m=Math.round(o.top+Zt.sc())||0,En.m=Math.round(o.left+En.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),lo=setInterval(af,250),ye.delayedCall(.5,function(){return co=0}),tn(gt,"touchcancel",Ei),tn(mt,"touchstart",Ei),ho(tn,gt,"pointerdown,touchstart,mousedown",tf),ho(tn,gt,"pointerup,touchend,mouseup",nf),Hc=ye.utils.checkPrefix("transform"),Ko.push(Hc),ys=cn(),dl=ye.delayedCall(.2,zr).pause(),Es=[gt,"visibilitychange",function(){var u=tt.innerWidth,h=tt.innerHeight;gt.hidden?(jh=u,Jh=h):(jh!==u||Jh!==h)&&xa()},gt,"DOMContentLoaded",zr,tt,"load",zr,tt,"resize",xa],uo(tn),et.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)fo(en,nt[l],nt[l+1]),fo(en,nt[l],nt[l+2])}else if(gt){var c=function u(){r.enable(),gt.removeEventListener("DOMContentLoaded",u)};gt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(kl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(lo)||(lo=i)&&setInterval(af,i),"ignoreMobileResize"in n&&(Vc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(uo(en)||uo(tn,n.autoRefreshEvents||"none"),Tp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=An(n),a=nt.indexOf(s),o=jr(s);~a&&nt.splice(a,o?6:2),i&&(o?Pi.unshift(tt,i,mt,i,$n,i):Pi.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Xn(n)?An(n):n).getBoundingClientRect(),o=a[s?qr:$r]*i||0;return s?a.right-o>0&&a.left+o<tt.innerWidth:a.bottom-o>0&&a.top+o<tt.innerHeight},r.positionInViewport=function(n,i,s){Xn(n)&&(n=An(n));var a=n.getBoundingClientRect(),o=a[s?qr:$r],l=i==null?o/2:i in ml?ml[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/tt.innerWidth:(a.top+l)/tt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Jr.killAll||[];Jr={},i.forEach(function(s){return s()})}},r})();je.version="3.15.1";je.saveStyles=function(r){return r?Ga(r).forEach(function(e){if(e&&e.style){var t=Wn.indexOf(e);t>=0&&Wn.splice(t,5),Wn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ye.core.getCache(e),Gc())}}):Wn};je.revert=function(r,e){return uh(!r,e)};je.create=function(r,e){return new je(r,e)};je.refresh=function(r){return r?xa(!0):(ys||je.register())&&zr(!0)};je.update=function(r){return++nt.cache&&Xi(r===!0?2:0)};je.clearScrollMemory=Op;je.maxScroll=function(r,e){return Ai(r,e?En:Zt)};je.getScrollFunc=function(r,e){return xr(An(r),e?En:Zt)};je.getById=function(r){return Xc[r]};je.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!hi};je.snapDirectional=ch;je.addEventListener=function(r,e){var t=Jr[r]||(Jr[r]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(r,e){var t=Jr[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],d=[],f=ye.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&hn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return hn(s)&&(s=s(),tn(je,"refresh",function(){return s=e.batchMax()})),Ga(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(je.create(c))}),t};var ff=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Gl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===$n&&r(mt,t)},vo={auto:1,scroll:1},og=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||ye.core.getCache(s),o=cn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(vo[(l=li(s)).overflowY]||vo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!jr(s)&&(vo[(l=li(s)).overflowY]||vo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},zp=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&og,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&tn(gt,Gt.eventTypes[0],pf,!1,!0)},onDisable:function(){return en(gt,Gt.eventTypes[0],pf,!0)}})},lg=/(input|label|select|textarea)/i,df,pf=function(e){var t=lg.test(e.target.tagName);(t||df)&&(e._gsapAllow=!0,df=t)},cg=function(e){Ur(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=An(e.target)||$n,u=ye.core.globals().ScrollSmoother,h=u&&u.get(),d=nr&&(e.content&&An(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=xr(c,Zt),_=xr(c,En),g=1,m=(Gt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,p=0,M=hn(i)?function(){return i(o)}:function(){return i||2.8},b,v,w=zp(c,e.type,!0,s),A=function(){return v=!1},T=Ei,R=Ei,S=function(){l=Ai(c,Zt),R=Aa(nr?1:0,l),n&&(T=Aa(0,Ai(c,En))),b=Kr},x=function(){d._gsap.y=ga(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(v){requestAnimationFrame(A);var H=ga(o.deltaY/2),ne=R(f.v-H);if(d&&ne!==f.v+f.offset){f.offset=ne-f.v;var L=ga((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=nt.cache,Xi()}return!0}f.offset&&x(),v=!0},U,z,V,G,W=function(){S(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&ye.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return nr&&Y.type==="touchmove"&&D()||g>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=g;g=ga((tt.visualViewport&&tt.visualViewport.scale||1)/m),U.pause(),Y!==g&&Gl(c,g>1.01?!0:n?!1:"x"),z=_(),V=f(),S(),b=Kr},e.onRelease=e.onGestureStart=function(Y,H){if(f.offset&&x(),!H)G.restart(!0);else{nt.cache++;var ne=M(),L,ue;n&&(L=_(),ue=L+ne*.05*-Y.velocityX/.227,ne*=ff(_,L,ue,Ai(c,En)),U.vars.scrollX=T(ue)),L=f(),ue=L+ne*.05*-Y.velocityY/.227,ne*=ff(f,L,ue,Ai(c,Zt)),U.vars.scrollY=R(ue),U.invalidate().duration(ne).play(.01),(nr&&U.vars.scrollY>=l||L>=l-1)&&ye.to({},{onUpdate:W,duration:ne})}a&&a(Y)},e.onWheel=function(){U._ts&&U.pause(),cn()-p>1e3&&(b=0,p=cn())},e.onChange=function(Y,H,ne,L,ue){if(Kr!==b&&S(),H&&n&&_(T(L[2]===H?z+(Y.startX-Y.x):_()+H-L[1])),ne){f.offset&&x();var Fe=ue[2]===ne,it=Fe?V+Y.startY-Y.y:f()+ne-ue[1],We=R(it);Fe&&it!==We&&(V+=We-it),f(We)}(ne||H)&&Xi()},e.onEnable=function(){Gl(c,n?!1:"x"),je.addEventListener("refresh",W),tn(tt,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){Gl(c,!0),en(tt,"resize",W),je.removeEventListener("refresh",W),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=nr,nr&&!f()&&f(1),nr&&ye.ticker.add(Ei),G=o._dc,U=ye.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:kp(f,f(),function(){return U.pause()})},onUpdate:Xi,onComplete:G.vars.onComplete}),o};je.sort=function(r){if(hn(r))return et.sort(r);var e=tt.pageYOffset||0;return je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};je.observe=function(r){return new Gt(r)};je.normalizeScroll=function(r){if(typeof r>"u")return xn;if(r===!0&&xn)return xn.enable();if(r===!1){xn&&xn.kill(),xn=r;return}var e=r instanceof Gt?r:cg(r);return xn&&xn.target===e.target&&xn.kill(),jr(e.target)&&(xn=e),e};je.core={_getVelocityProp:zc,_inputObserver:zp,_scrollers:nt,_proxies:Pi,bridge:{ss:function(){hi||Qr("scrollStart"),hi=cn()},ref:function(){return ln}}};Rp()&&ye.registerPlugin(je);const hh="180",ug=0,mf=1,hg=2,Hp=1,Vp=2,Bi=3,Sr=0,On=1,Vi=2,pr=0,Fs=1,$c=2,_f=3,gf=4,fg=5,Or=100,dg=101,pg=102,mg=103,_g=104,gg=200,vg=201,xg=202,Sg=203,Kc=204,Zc=205,Mg=206,yg=207,Eg=208,Tg=209,bg=210,wg=211,Ag=212,Rg=213,Cg=214,jc=0,Jc=1,Qc=2,qs=3,eu=4,tu=5,nu=6,iu=7,Gp=0,Pg=1,Dg=2,mr=0,Lg=1,Ig=2,Ug=3,Wp=4,Ng=5,Fg=6,Og=7,Xp=300,$s=301,Ks=302,ru=303,su=304,wl=306,Xa=1e3,Hr=1001,au=1002,Si=1003,Bg=1004,xo=1005,Ri=1006,Wl=1007,Vr=1008,Li=1009,Yp=1010,qp=1011,Ya=1012,fh=1013,es=1014,Wi=1015,Ja=1016,dh=1017,ph=1018,qa=1020,$p=35902,Kp=35899,Zp=1021,jp=1022,vi=1023,$a=1026,Ka=1027,Jp=1028,mh=1029,Qp=1030,_h=1031,gh=1033,jo=33776,Jo=33777,Qo=33778,el=33779,ou=35840,lu=35841,cu=35842,uu=35843,hu=36196,fu=37492,du=37496,pu=37808,mu=37809,_u=37810,gu=37811,vu=37812,xu=37813,Su=37814,Mu=37815,yu=37816,Eu=37817,Tu=37818,bu=37819,wu=37820,Au=37821,Ru=36492,Cu=36494,Pu=36495,Du=36283,Lu=36284,Iu=36285,Uu=36286,kg=3200,zg=3201,em=0,Hg=1,ir="",Rn="srgb",Zs="srgb-linear",_l="linear",vt="srgb",ls=7680,vf=519,Vg=512,Gg=513,Wg=514,tm=515,Xg=516,Yg=517,qg=518,$g=519,xf=35044,Sf="300 es",Ci=2e3,gl=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xl=Math.PI/180,vl=180/Math.PI;function Qa(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function Kg(r,e){return(r%e+e)%e}function Yl(r,e,t){return(1-t)*r+t*e}function aa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class eo{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-o;const p=l*d+c*f+u*_+h*g,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const w=Math.sqrt(b),A=Math.atan2(w,p*M);m=Math.sin(m*A)/w,o=Math.sin(o*A)/w}const v=o*M;if(l=l*m+d*v,c=c*m+f*v,u=u*m+_*v,h=h*m+g*v,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new B,Mf=new eo;class Ze{constructor(e,t,n,i,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],b=i[4],v=i[7],w=i[2],A=i[5],T=i[8];return s[0]=a*g+o*M+l*w,s[3]=a*m+o*b+l*A,s[6]=a*p+o*v+l*T,s[1]=c*g+u*M+h*w,s[4]=c*m+u*b+h*A,s[7]=c*p+u*v+h*T,s[2]=d*g+f*M+_*w,s[5]=d*m+f*b+_*A,s[8]=d*p+f*v+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new Ze;function nm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zg(){const r=xl("canvas");return r.style.display="block",r}const yf={};function Za(r){r in yf||(yf[r]=!0,console.warn(r))}function jg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ef=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tf=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jg(){const r={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ir?_l:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Za("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Za("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zs]:{primaries:e,whitePoint:n,transfer:_l,toXYZ:Ef,fromXYZ:Tf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Ef,fromXYZ:Tf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),r}const dt=Jg();function Yi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Os(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cs;class Qg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=xl("canvas")),cs.width=e.width,cs.height=e.height;const i=cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Yi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let e0=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Kl(i[a].image)):s.push(Kl(i[a]))}else s=Kl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t0=0;const Zl=new B;class Tn extends Js{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,n=Hr,i=Hr,s=Ri,a=Vr,o=vi,l=Li,c=Tn.DEFAULT_ANISOTROPY,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Qa(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=Xp;Tn.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(f+1)/2,w=(p+1)/2,A=(u+d)/4,T=(h+g)/4,R=(_+m)/4;return b>v&&b>w?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=T/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=R/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=T/s,i=R/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class n0 extends Js{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Tn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new vh(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends n0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class im extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Si,this.minFilter=Si,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class i0 extends Tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Si,this.minFilter=Si,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(s,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),So.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(e.matrixWorld),this.union(So)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),Mo.subVectors(this.max,oa),us.subVectors(e.a,oa),hs.subVectors(e.b,oa),fs.subVectors(e.c,oa),Zi.subVectors(hs,us),ji.subVectors(fs,hs),wr.subVectors(us,fs);let t=[0,-Zi.z,Zi.y,0,-ji.z,ji.y,0,-wr.z,wr.y,Zi.z,0,-Zi.x,ji.z,0,-ji.x,wr.z,0,-wr.x,-Zi.y,Zi.x,0,-ji.y,ji.x,0,-wr.y,wr.x,0];return!jl(t,us,hs,fs,Mo)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,us,hs,fs,Mo))?!1:(yo.crossVectors(Zi,ji),t=[yo.x,yo.y,yo.z],jl(t,us,hs,fs,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new B,new B,new B,new B,new B,new B,new B,new B],di=new B,So=new to,us=new B,hs=new B,fs=new B,Zi=new B,ji=new B,wr=new B,oa=new B,Mo=new B,yo=new B,Ar=new B;function jl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ar.fromArray(r,s);const o=i.x*Math.abs(Ar.x)+i.y*Math.abs(Ar.y)+i.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),u=n.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const r0=new to,la=new B,Jl=new B;class Al{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):r0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(la,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Jl)),this.expandByPoint(la.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ui=new B,Ql=new B,Eo=new B,Ji=new B,ec=new B,To=new B,tc=new B;class xh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ql.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Ql);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Eo),o=Ji.dot(this.direction),l=-Ji.dot(Eo),c=Ji.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ql).addScaledVector(Eo,d),f}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,i,s){ec.subVectors(t,e),To.subVectors(n,e),tc.crossVectors(ec,To);let a=this.direction.dot(tc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ji.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(Ji,To));if(l<0)return null;const c=o*this.direction.dot(ec.cross(Ji));if(c<0||l+c>a)return null;const u=-o*Ji.dot(tc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,a0)}lookAt(e,t,n){const i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),Qi.crossVectors(n,Vn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),Qi.crossVectors(n,Vn)),Qi.normalize(),bo.crossVectors(Vn,Qi),i[0]=Qi.x,i[4]=bo.x,i[8]=Vn.x,i[1]=Qi.y,i[5]=bo.y,i[9]=Vn.y,i[2]=Qi.z,i[6]=bo.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],b=n[7],v=n[11],w=n[15],A=i[0],T=i[4],R=i[8],S=i[12],x=i[1],D=i[5],U=i[9],z=i[13],V=i[2],G=i[6],W=i[10],Y=i[14],H=i[3],ne=i[7],L=i[11],ue=i[15];return s[0]=a*A+o*x+l*V+c*H,s[4]=a*T+o*D+l*G+c*ne,s[8]=a*R+o*U+l*W+c*L,s[12]=a*S+o*z+l*Y+c*ue,s[1]=u*A+h*x+d*V+f*H,s[5]=u*T+h*D+d*G+f*ne,s[9]=u*R+h*U+d*W+f*L,s[13]=u*S+h*z+d*Y+f*ue,s[2]=_*A+g*x+m*V+p*H,s[6]=_*T+g*D+m*G+p*ne,s[10]=_*R+g*U+m*W+p*L,s[14]=_*S+g*z+m*Y+p*ue,s[3]=M*A+b*x+v*V+w*H,s[7]=M*T+b*D+v*G+w*ne,s[11]=M*R+b*U+v*W+w*L,s[15]=M*S+b*z+v*Y+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*h-i*c*h-s*o*d+n*c*d+i*o*f-n*l*f)+g*(+t*l*f-t*c*d+s*a*d-i*a*f+i*c*u-s*l*u)+m*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+p*(-i*o*u-t*l*h+t*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,b=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,v=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,w=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,A=t*M+n*b+i*v+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*T,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*T,e[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*T,e[4]=b*T,e[5]=(u*m*s-_*d*s+_*i*f-t*m*f-u*i*p+t*d*p)*T,e[6]=(_*l*s-a*m*s-_*i*c+t*m*c+a*i*p-t*l*p)*T,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*f+t*l*f)*T,e[8]=v*T,e[9]=(_*h*s-u*g*s-_*n*f+t*g*f+u*n*p-t*h*p)*T,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*p+t*o*p)*T,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*T,e[12]=w*T,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*m+t*h*m)*T,e[14]=(_*o*i-a*g*i-_*n*l+t*g*l+a*n*m-t*o*m)*T,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,M=l*c,b=l*u,v=l*h,w=n.x,A=n.y,T=n.z;return i[0]=(1-(g+p))*w,i[1]=(f+v)*w,i[2]=(_-b)*w,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(_+b)*T,i[9]=(m-M)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ds.set(i[0],i[1],i[2]).length();const a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pi.copy(this);const c=1/s,u=1/a,h=1/o;return pi.elements[0]*=c,pi.elements[1]*=c,pi.elements[2]*=c,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,t.setFromRotationMatrix(pi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Ci,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Ci)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===gl)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ci,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Ci)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===gl)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new B,pi=new Ct,s0=new B(0,0,0),a0=new B(1,1,1),Qi=new B,bo=new B,Vn=new B,bf=new Ct,wf=new eo;class Ft{constructor(e=0,t=0,n=0,i=Ft.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ft.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const Af=new B,ps=new eo,Ni=new Ct,wo=new B,ca=new B,l0=new B,c0=new eo,Rf=new B(1,0,0),Cf=new B(0,1,0),Pf=new B(0,0,1),Df={type:"added"},u0={type:"removed"},ms={type:"childadded",child:null},nc={type:"childremoved",child:null};class qt extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new B,t=new Ft,n=new eo,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ze}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(Rf,e)}rotateY(e){return this.rotateOnAxis(Cf,e)}rotateZ(e){return this.rotateOnAxis(Pf,e)}translateOnAxis(e,t){return Af.copy(e).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rf,e)}translateY(e){return this.translateOnAxis(Cf,e)}translateZ(e){return this.translateOnAxis(Pf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ca,wo,this.up):Ni.lookAt(wo,ca,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),ps.setFromRotationMatrix(Ni),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Df),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u0),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Df),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qt.DEFAULT_UP=new B(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new B,Fi=new B,ic=new B,Oi=new B,_s=new B,gs=new B,Lf=new B,rc=new B,sc=new B,ac=new B,oc=new St,lc=new St,cc=new St;class gi{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mi.subVectors(e,t),i.cross(mi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mi.subVectors(i,t),Fi.subVectors(n,t),ic.subVectors(e,t);const a=mi.dot(mi),o=mi.dot(Fi),l=mi.dot(ic),c=Fi.dot(Fi),u=Fi.dot(ic),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(a,Oi.y),l.addScaledVector(o,Oi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(oc,s.x),a.addScaledVector(lc,s.y),a.addScaledVector(cc,s.z),a}static isFrontFacing(e,t,n,i){return mi.subVectors(n,t),Fi.subVectors(e,t),mi.cross(Fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),mi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return gi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;_s.subVectors(i,n),gs.subVectors(s,n),rc.subVectors(e,n);const l=_s.dot(rc),c=gs.dot(rc);if(l<=0&&c<=0)return t.copy(n);sc.subVectors(e,i);const u=_s.dot(sc),h=gs.dot(sc);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_s,a);ac.subVectors(e,s);const f=_s.dot(ac),_=gs.dot(ac);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(gs,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return Lf.subVectors(s,i),o=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(Lf,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(_s,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function uc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=Kg(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=uc(a,s,e+1/3),this.g=uc(a,s,e),this.b=uc(a,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=rm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return dt.workingToColorSpace(on.copy(this),e),Math.round(ot(on.r*255,0,255))*65536+Math.round(ot(on.g*255,0,255))*256+Math.round(ot(on.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(on.copy(this),t);const n=on.r,i=on.g,s=on.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Rn){dt.workingToColorSpace(on.copy(this),e);const t=on.r,n=on.g,i=on.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(Ao);const n=Yl(er.h,Ao.h,t),i=Yl(er.s,Ao.s,t),s=Yl(er.l,Ao.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new at;at.NAMES=rm;let h0=0;class Qs extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Qa(),this.name="",this.type="Material",this.blending=Fs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Zc,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Sr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==Or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mh extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new B,Ro=new ct;let f0=0;class Mi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xf,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=aa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xf&&(e.usage=this.usage),e}}class sm extends Mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class am extends Mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dn extends Mi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d0=0;const ri=new Ct,hc=new qt,vs=new B,Gn=new to,ua=new to,Qt=new B;class fi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?am:sm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Gn.min,ua.min),Gn.expandByPoint(Qt),Qt.addVectors(Gn.max,ua.max),Gn.expandByPoint(Qt)):(Gn.expandByPoint(ua.min),Gn.expandByPoint(ua.max))}Gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Qt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Qt.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(e,c),Qt.add(vs)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new B,l[R]=new B;const c=new B,u=new B,h=new B,d=new ct,f=new ct,_=new ct,g=new B,m=new B;function p(R,S,x){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,R),f.fromBufferAttribute(s,S),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(D),o[R].add(g),o[S].add(g),o[x].add(g),l[R].add(m),l[S].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,S=M.length;R<S;++R){const x=M[R],D=x.start,U=x.count;for(let z=D,V=D+U;z<V;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new B,v=new B,w=new B,A=new B;function T(R){w.fromBufferAttribute(i,R),A.copy(w);const S=o[R];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),v.crossVectors(A,S);const D=v.dot(l[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,D)}for(let R=0,S=M.length;R<S;++R){const x=M[R],D=x.start,U=x.count;for(let z=D,V=D+U;z<V;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Mi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const If=new Ct,Rr=new xh,Co=new Al,Uf=new B,Po=new B,Do=new B,Lo=new B,fc=new B,Io=new B,Nf=new B,Uo=new B;class Ht extends qt{constructor(e=new fi,t=new Mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(fc.fromBufferAttribute(h,e),a?Io.addScaledVector(fc,u):Io.addScaledVector(fc.sub(t),u))}t.add(Io)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(Co.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Co,Uf)===null||Rr.origin.distanceToSquared(Uf)>(e.far-e.near)**2))&&(If.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(If),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,w=b;v<w;v+=3){const A=o.getX(v),T=o.getX(v+1),R=o.getX(v+2);i=No(this,p,e,n,c,u,h,A,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);i=No(this,a,e,n,c,u,h,M,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,w=b;v<w;v+=3){const A=v,T=v+1,R=v+2;i=No(this,p,e,n,c,u,h,A,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,b=m+1,v=m+2;i=No(this,a,e,n,c,u,h,M,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function p0(r,e,t,n,i,s,a,o){let l;if(e.side===On?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Sr,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:r}}function No(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Po),r.getVertexPosition(l,Do),r.getVertexPosition(c,Lo);const u=p0(r,e,t,n,Po,Do,Lo,Nf);if(u){const h=new B;gi.getBarycoord(Nf,Po,Do,Lo,h),i&&(u.uv=gi.getInterpolatedAttribute(i,o,l,c,h,new ct)),s&&(u.uv1=gi.getInterpolatedAttribute(s,o,l,c,h,new ct)),a&&(u.normal=gi.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};gi.getNormal(Po,Do,Lo,d.normal),u.face=d,u.barycoord=h}return u}class yn extends fi{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(h,2));function _(g,m,p,M,b,v,w,A,T,R,S){const x=v/T,D=w/R,U=v/2,z=w/2,V=A/2,G=T+1,W=R+1;let Y=0,H=0;const ne=new B;for(let L=0;L<W;L++){const ue=L*D-z;for(let Fe=0;Fe<G;Fe++){const it=Fe*x-U;ne[g]=it*M,ne[m]=ue*b,ne[p]=V,c.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[p]=A>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Fe/T),h.push(1-L/R),Y+=1}}for(let L=0;L<R;L++)for(let ue=0;ue<T;ue++){const Fe=d+ue+G*L,it=d+ue+G*(L+1),We=d+(ue+1)+G*(L+1),Ge=d+(ue+1)+G*L;l.push(Fe,it,Ge),l.push(it,We,Ge),H+=6}o.addGroup(f,H,S),f+=H,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function vn(r){const e={};for(let t=0;t<r.length;t++){const n=js(r[t]);for(const i in n)e[i]=n[i]}return e}function m0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function om(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const _0={clone:js,merge:vn};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lm extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new B,Ff=new ct,Of=new ct;class Pn extends lm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Ff,Of),t.subVectors(Of,Ff)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ss=1;class x0 extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pn(xs,Ss,e,t);i.layers=this.layers,this.add(i);const s=new Pn(xs,Ss,e,t);s.layers=this.layers,this.add(s);const a=new Pn(xs,Ss,e,t);a.layers=this.layers,this.add(a);const o=new Pn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const l=new Pn(xs,Ss,e,t);l.layers=this.layers,this.add(l);const c=new Pn(xs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class cm extends Tn{constructor(e=[],t=$s,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S0 extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yn(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:pr});s.uniforms.tEquirect.value=t;const a=new Ht(i,s),o=t.minFilter;return t.minFilter===Vr&&(t.minFilter=Ri),new x0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class xi extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M0={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(e),this.near=t,this.far=n}clone(){return new yh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class y0 extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ft,this.environmentIntensity=1,this.environmentRotation=new Ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pc=new B,E0=new B,T0=new Ze;class Nr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pc.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||T0.getNormalMatrix(e),i=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Al,b0=new ct(.5,.5),Fo=new B;class Eh{constructor(e=new Nr,t=new Nr,n=new Nr,i=new Nr,s=new Nr,a=new Nr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],M=s[12],b=s[13],v=s[14],w=s[15];if(i[0].setComponents(c-a,f-u,p-_,w-M).normalize(),i[1].setComponents(c+a,f+u,p+_,w+M).normalize(),i[2].setComponents(c+o,f+h,p+g,w+b).normalize(),i[3].setComponents(c-o,f-h,p-g,w-b).normalize(),n)i[4].setComponents(l,d,m,v).normalize(),i[5].setComponents(c-l,f-d,p-m,w-v).normalize();else if(i[4].setComponents(c-l,f-d,p-m,w-v).normalize(),t===Ci)i[5].setComponents(c+l,f+d,p+m,w+v).normalize();else if(t===gl)i[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);const t=b0.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fo.x=i.normal.x>0?e.max.x:e.min.x,Fo.y=i.normal.y>0?e.max.y:e.min.y,Fo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class um extends Qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bf=new Ct,Nu=new xh,Oo=new Al,Bo=new B;class w0 extends qt{constructor(e=new fi,t=new um){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(i),Oo.radius+=s,e.ray.intersectsSphere(Oo)===!1)return;Bf.copy(i).invert(),Nu.copy(e.ray).applyMatrix4(Bf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Bo.fromBufferAttribute(h,m),kf(Bo,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Bo.fromBufferAttribute(h,_),kf(Bo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kf(r,e,t,n,i,s,a){const o=Nu.distanceSqToPoint(r);if(o<t){const l=new B;Nu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class A0 extends Tn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hm extends Tn{constructor(e,t,n=es,i,s,a,o=Si,l=Si,c,u=$a,h=1){if(u!==$a&&u!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fm extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Th extends fi{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new B,u=new ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new dn(a,3)),this.setAttribute("normal",new dn(o,3)),this.setAttribute("uv",new dn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Th(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bs extends fi{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new dn(h,3)),this.setAttribute("normal",new dn(d,3)),this.setAttribute("uv",new dn(f,2));function M(){const v=new B,w=new B;let A=0;const T=(t-e)/n;for(let R=0;R<=s;R++){const S=[],x=R/s,D=x*(t-e)+e;for(let U=0;U<=i;U++){const z=U/i,V=z*l+o,G=Math.sin(V),W=Math.cos(V);w.x=D*G,w.y=-x*n+m,w.z=D*W,h.push(w.x,w.y,w.z),v.set(G,T,W).normalize(),d.push(v.x,v.y,v.z),f.push(z,1-x),S.push(_++)}g.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){const x=g[S][R],D=g[S+1][R],U=g[S+1][R+1],z=g[S][R+1];(e>0||S!==0)&&(u.push(x,D,z),A+=3),(t>0||S!==s-1)&&(u.push(D,U,z),A+=3)}c.addGroup(p,A,0),p+=A}function b(v){const w=_,A=new ct,T=new B;let R=0;const S=v===!0?e:t,x=v===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),_++;const D=_;for(let U=0;U<=i;U++){const V=U/i*l+o,G=Math.cos(V),W=Math.sin(V);T.x=S*W,T.y=m*x,T.z=S*G,h.push(T.x,T.y,T.z),d.push(0,x,0),A.x=G*.5+.5,A.y=W*.5*x+.5,f.push(A.x,A.y),_++}for(let U=0;U<i;U++){const z=w+U,V=D+U;v===!0?u.push(V,V+1,z):u.push(V+1,V,z),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bh extends Bs{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new bh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zr extends fi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let b=0;b<c;b++){const v=b*h-s;_.push(v,-M,0),g.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const b=M+c*p,v=M+c*(p+1),w=M+1+c*(p+1),A=M+1+c*p;f.push(b,v,A),f.push(v,w,A)}this.setIndex(f),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.width,e.height,e.widthSegments,e.heightSegments)}}class wh extends fi{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new B,h=new B,d=new B;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(g),h.y=(e+t*Math.cos(m))*Math.sin(g),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,M=(i+1)*f+_;a.push(g,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new dn(o,3)),this.setAttribute("normal",new dn(l,3)),this.setAttribute("uv",new dn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yn extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class R0 extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C0 extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class no extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class P0 extends no{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mc=new Ct,zf=new B,Hf=new B;class Ah{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(zf),Hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hf),t.updateMatrixWorld(),mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class D0 extends Ah{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=vl*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vf extends no{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new D0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Gf=new Ct,ha=new B,_c=new B;class L0 extends Ah{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),n.position.copy(ha),_c.copy(n.position),_c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_c),n.updateMatrixWorld(),i.makeTranslation(-ha.x,-ha.y,-ha.z),Gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf,n.coordinateSystem,n.reversedDepth)}}class I0 extends no{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new L0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dm extends lm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class U0 extends Ah{constructor(){super(new dm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class N0 extends no{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new U0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class F0 extends no{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class O0 extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class B0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Wf=new Ct;class k0{constructor(e,t,n=0,i=1/0){this.ray=new xh(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(Xf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Fu(e[i],this,n,t);return n.sort(Xf),n}}function Xf(r,e){return r.distance-e.distance}function Fu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Fu(s[a],e,t,!0)}}function Yf(r,e,t,n){const i=z0(n);switch(t){case Zp:return r*e;case Jp:return r*e/i.components*i.byteLength;case mh:return r*e/i.components*i.byteLength;case Qp:return r*e*2/i.components*i.byteLength;case _h:return r*e*2/i.components*i.byteLength;case jp:return r*e*3/i.components*i.byteLength;case vi:return r*e*4/i.components*i.byteLength;case gh:return r*e*4/i.components*i.byteLength;case jo:case Jo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qo:case el:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lu:case uu:return Math.max(r,16)*Math.max(e,8)/4;case ou:case cu:return Math.max(r,8)*Math.max(e,8)/2;case hu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case _u:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Su:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Mu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case yu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case bu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Au:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ru:case Cu:case Pu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Du:case Lu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Iu:case Uu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z0(r){switch(r){case Li:case Yp:return{byteLength:1,components:1};case Ya:case qp:case Ja:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case es:case fh:case Wi:return{byteLength:4,components:1};case $p:case Kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);function pm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function H0(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,X0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,K0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ev=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vv="gl_FragColor = linearToOutputTexel( gl_FragColor );",xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Iv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$v=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$x=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:X0,alphatest_fragment:Y0,alphatest_pars_fragment:q0,aomap_fragment:$0,aomap_pars_fragment:K0,batching_pars_vertex:Z0,batching_vertex:j0,begin_vertex:J0,beginnormal_vertex:Q0,bsdfs:ev,iridescence_fragment:tv,bumpmap_pars_fragment:nv,clipping_planes_fragment:iv,clipping_planes_pars_fragment:rv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:av,color_fragment:ov,color_pars_fragment:lv,color_pars_vertex:cv,color_vertex:uv,common:hv,cube_uv_reflection_fragment:fv,defaultnormal_vertex:dv,displacementmap_pars_vertex:pv,displacementmap_vertex:mv,emissivemap_fragment:_v,emissivemap_pars_fragment:gv,colorspace_fragment:vv,colorspace_pars_fragment:xv,envmap_fragment:Sv,envmap_common_pars_fragment:Mv,envmap_pars_fragment:yv,envmap_pars_vertex:Ev,envmap_physical_pars_fragment:Uv,envmap_vertex:Tv,fog_vertex:bv,fog_pars_vertex:wv,fog_fragment:Av,fog_pars_fragment:Rv,gradientmap_pars_fragment:Cv,lightmap_pars_fragment:Pv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Iv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Fv,lights_phong_fragment:Ov,lights_phong_pars_fragment:Bv,lights_physical_fragment:kv,lights_physical_pars_fragment:zv,lights_fragment_begin:Hv,lights_fragment_maps:Vv,lights_fragment_end:Gv,logdepthbuf_fragment:Wv,logdepthbuf_pars_fragment:Xv,logdepthbuf_pars_vertex:Yv,logdepthbuf_vertex:qv,map_fragment:$v,map_pars_fragment:Kv,map_particle_fragment:Zv,map_particle_pars_fragment:jv,metalnessmap_fragment:Jv,metalnessmap_pars_fragment:Qv,morphinstance_vertex:ex,morphcolor_vertex:tx,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:rx,normal_fragment_begin:sx,normal_fragment_maps:ax,normal_pars_fragment:ox,normal_pars_vertex:lx,normal_vertex:cx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:hx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:dx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:_x,premultiplied_alpha_fragment:gx,project_vertex:vx,dithering_fragment:xx,dithering_pars_fragment:Sx,roughnessmap_fragment:Mx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:Ex,shadowmap_pars_vertex:Tx,shadowmap_vertex:bx,shadowmask_pars_fragment:wx,skinbase_vertex:Ax,skinning_pars_vertex:Rx,skinning_vertex:Cx,skinnormal_vertex:Px,specularmap_fragment:Dx,specularmap_pars_fragment:Lx,tonemapping_fragment:Ix,tonemapping_pars_fragment:Ux,transmission_fragment:Nx,transmission_pars_fragment:Fx,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:kx,worldpos_vertex:zx,background_vert:Hx,background_frag:Vx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:Yx,depth_vert:qx,depth_frag:$x,distanceRGBA_vert:Kx,distanceRGBA_frag:Zx,equirect_vert:jx,equirect_frag:Jx,linedashed_vert:Qx,linedashed_frag:eS,meshbasic_vert:tS,meshbasic_frag:nS,meshlambert_vert:iS,meshlambert_frag:rS,meshmatcap_vert:sS,meshmatcap_frag:aS,meshnormal_vert:oS,meshnormal_frag:lS,meshphong_vert:cS,meshphong_frag:uS,meshphysical_vert:hS,meshphysical_frag:fS,meshtoon_vert:dS,meshtoon_frag:pS,points_vert:mS,points_frag:_S,shadow_vert:gS,shadow_frag:vS,sprite_vert:xS,sprite_frag:SS},me={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ti={basic:{uniforms:vn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:vn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:vn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:vn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:vn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new at(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:vn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:vn([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:vn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:vn([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:vn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:vn([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:vn([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:vn([me.lights,me.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ti.physical={uniforms:vn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ko={r:0,b:0,g:0},Pr=new Ft,MS=new Ct;function yS(r,e,t,n,i,s,a){const o=new at(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function g(b){let v=!1;const w=_(b);w===null?p(o,l):w&&w.isColor&&(p(w,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,v){const w=_(v);w&&(w.isCubeTexture||w.mapping===wl)?(u===void 0&&(u=new Ht(new yn(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:js(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Pr.copy(v.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(MS.makeRotationFromEuler(Pr)),u.material.toneMapped=dt.getTransfer(w.colorSpace)!==vt,(h!==w||d!==w.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=r.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ht(new Zr(2,2),new Mr({name:"BackgroundMaterial",uniforms:js(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=dt.getTransfer(w.colorSpace)!==vt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(ko,om(r)),n.buffers.color.setClear(ko.r,ko.g,ko.b,v,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:g,addToRenderList:m,dispose:M}}function ES(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(x,D,U,z,V){let G=!1;const W=h(z,U,D);s!==W&&(s=W,c(s.object)),G=f(x,z,U,V),G&&_(x,z,U,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(x,D,U,z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function h(x,D,U){const z=U.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let G=V[D.id];G===void 0&&(G={},V[D.id]=G);let W=G[z];return W===void 0&&(W=d(l()),G[z]=W),W}function d(x){const D=[],U=[],z=[];for(let V=0;V<t;V++)D[V]=0,U[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,D,U,z){const V=s.attributes,G=D.attributes;let W=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){const L=V[H];let ue=G[H];if(ue===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),L===void 0||L.attribute!==ue||ue&&L.data!==ue.data)return!0;W++}return s.attributesNum!==W||s.index!==z}function _(x,D,U,z){const V={},G=D.attributes;let W=0;const Y=U.getAttributes();for(const H in Y)if(Y[H].location>=0){let L=G[H];L===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const ue={};ue.attribute=L,L&&L.data&&(ue.data=L.data),V[H]=ue,W++}s.attributes=V,s.attributesNum=W,s.index=z}function g(){const x=s.newAttributes;for(let D=0,U=x.length;D<U;D++)x[D]=0}function m(x){p(x,0)}function p(x,D){const U=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;U[x]=1,z[x]===0&&(r.enableVertexAttribArray(x),z[x]=1),V[x]!==D&&(r.vertexAttribDivisor(x,D),V[x]=D)}function M(){const x=s.newAttributes,D=s.enabledAttributes;for(let U=0,z=D.length;U<z;U++)D[U]!==x[U]&&(r.disableVertexAttribArray(U),D[U]=0)}function b(x,D,U,z,V,G,W){W===!0?r.vertexAttribIPointer(x,D,U,V,G):r.vertexAttribPointer(x,D,U,z,V,G)}function v(x,D,U,z){g();const V=z.attributes,G=U.getAttributes(),W=D.defaultAttributeValues;for(const Y in G){const H=G[Y];if(H.location>=0){let ne=V[Y];if(ne===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){const L=ne.normalized,ue=ne.itemSize,Fe=e.get(ne);if(Fe===void 0)continue;const it=Fe.buffer,We=Fe.type,Ge=Fe.bytesPerElement,K=We===r.INT||We===r.UNSIGNED_INT||ne.gpuType===fh;if(ne.isInterleavedBufferAttribute){const j=ne.data,fe=j.stride,we=ne.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)p(H.location+Ee,j.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Ee=0;Ee<H.locationSize;Ee++)b(H.location+Ee,ue/H.locationSize,We,L,fe*Ge,(we+ue/H.locationSize*Ee)*Ge,K)}else{if(ne.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)p(H.location+j,ne.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let j=0;j<H.locationSize;j++)m(H.location+j);r.bindBuffer(r.ARRAY_BUFFER,it);for(let j=0;j<H.locationSize;j++)b(H.location+j,ue/H.locationSize,We,L,ue*Ge,ue/H.locationSize*j*Ge,K)}}else if(W!==void 0){const L=W[Y];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(H.location,L);break;case 3:r.vertexAttrib3fv(H.location,L);break;case 4:r.vertexAttrib4fv(H.location,L);break;default:r.vertexAttrib1fv(H.location,L)}}}}M()}function w(){R();for(const x in n){const D=n[x];for(const U in D){const z=D[U];for(const V in z)u(z[V].object),delete z[V];delete D[U]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const D=n[x.id];for(const U in D){const z=D[U];for(const V in z)u(z[V].object),delete z[V];delete D[U]}delete n[x.id]}function T(x){for(const D in n){const U=n[D];if(U[x.id]===void 0)continue;const z=U[x.id];for(const V in z)u(z[V].object),delete z[V];delete U[x.id]}}function R(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function TS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function bS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==vi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Li&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Wi&&!R)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:w,maxSamples:A}}function wS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Nr,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,b=M*4;let v=p.clippingState||null;l.value=v,v=u(_,d,b,f);for(let w=0;w!==b;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==g;++b,v+=4)a.copy(h[b]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function AS(r){let e=new WeakMap;function t(a,o){return o===ru?a.mapping=$s:o===su&&(a.mapping=Ks),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ru||o===su)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new S0(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const As=4,qf=[.125,.215,.35,.446,.526,.582],Br=20,gc=new dm,$f=new at;let vc=null,xc=0,Sc=0,Mc=!1;const Fr=(1+Math.sqrt(5))/2,Ms=1/Fr,Kf=[new B(-Fr,Ms,0),new B(Fr,Ms,0),new B(-Ms,0,Fr),new B(Ms,0,Fr),new B(0,Fr,-Ms),new B(0,Fr,Ms),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],RS=new B;class Zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=RS}=s;vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,xc,Sc),this._renderer.xr.enabled=Mc,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Ja,format:vi,colorSpace:Zs,depthBuffer:!1},i=jf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CS(s)),this._blurMaterial=PS(s,e,t)}return i}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,gc)}_sceneToCubeUV(e,t,n,i,s){const l=new Pn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($f),h.toneMapping=mr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const g=new Mh({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),m=new Ht(new yn,g);let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy($f),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const w=this._cubeSize;zo(i,v*w,b>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$s||e.mapping===Ks;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kf[(i-s-1)%Kf.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ht(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Br-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Br;m>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const p=[];let M=0;for(let T=0;T<Br;++T){const R=T/g,S=Math.exp(-R*R/2);p.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;const v=this._sizeLods[i],w=3*v*(i>b-As?i-b+As:0),A=4*(this._cubeSize-v);zo(t,w,A,3*v,2*v),l.setRenderTarget(t),l.render(h,gc)}}function CS(r){const e=[],t=[],n=[];let i=r;const s=r-As+1+qf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-As?l=qf[a-r+As-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),b=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,R=A>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(S,g*_*A),b.set(d,m*_*A);const x=[A,A,A,A,A,A];v.set(x,p*_*A)}const w=new fi;w.setAttribute("position",new Mi(M,g)),w.setAttribute("uv",new Mi(b,m)),w.setAttribute("faceIndex",new Mi(v,p)),e.push(w),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jf(r,e,t){const n=new ts(r,e,t);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function PS(r,e,t){const n=new Float32Array(Br),i=new B(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Jf(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Qf(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DS(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ru||l===su,u=l===$s||l===Ks;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Zf(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Zf(r)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function LS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Za("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function IS(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let b=0,v=M.length;b<v;b+=3){const w=M[b+0],A=M[b+1],T=M[b+2];d.push(w,A,A,T,T,w)}}else if(_!==void 0){const M=_.array;g=_.version;for(let b=0,v=M.length/3-1;b<v;b+=3){const w=b+0,A=b+1,T=b+2;d.push(w,A,A,T,T,w)}}else return;const m=new(nm(d)?am:sm)(d,1);m.version=g;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function US(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function NS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function FS(r,e,t){const n=new WeakMap,i=new St;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let x=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*A*4*h),R=new im(T,w,A,h);R.type=Wi,R.needsUpdate=!0;const S=v*4;for(let D=0;D<h;D++){const U=p[D],z=M[D],V=b[D],G=w*A*4*D;for(let W=0;W<U.count;W++){const Y=W*S;_===!0&&(i.fromBufferAttribute(U,W),T[G+Y+0]=i.x,T[G+Y+1]=i.y,T[G+Y+2]=i.z,T[G+Y+3]=0),g===!0&&(i.fromBufferAttribute(z,W),T[G+Y+4]=i.x,T[G+Y+5]=i.y,T[G+Y+6]=i.z,T[G+Y+7]=0),m===!0&&(i.fromBufferAttribute(V,W),T[G+Y+8]=i.x,T[G+Y+9]=i.y,T[G+Y+10]=i.z,T[G+Y+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new ct(w,A)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function OS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const mm=new Tn,ed=new hm(1,1),_m=new im,gm=new i0,vm=new cm,td=[],nd=[],id=new Float32Array(16),rd=new Float32Array(9),sd=new Float32Array(4);function ea(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=td[i];if(s===void 0&&(s=new Float32Array(i),td[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Rl(r,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function BS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function zS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function HS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function VS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;sd.set(n),r.uniformMatrix2fv(this.addr,!1,sd),Jt(t,n)}}function GS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;rd.set(n),r.uniformMatrix3fv(this.addr,!1,rd),Jt(t,n)}}function WS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(jt(t,n))return;id.set(n),r.uniformMatrix4fv(this.addr,!1,id),Jt(t,n)}}function XS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function YS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function qS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function $S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function KS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ZS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function jS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function JS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function QS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ed.compareFunction=tm,s=ed):s=mm,t.setTexture2D(e||s,i)}function eM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gm,i)}function tM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||vm,i)}function nM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_m,i)}function iM(r){switch(r){case 5126:return BS;case 35664:return kS;case 35665:return zS;case 35666:return HS;case 35674:return VS;case 35675:return GS;case 35676:return WS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return $S;case 5125:return KS;case 36294:return ZS;case 36295:return jS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return eM;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return nM}}function rM(r,e){r.uniform1fv(this.addr,e)}function sM(r,e){const t=ea(e,this.size,2);r.uniform2fv(this.addr,t)}function aM(r,e){const t=ea(e,this.size,3);r.uniform3fv(this.addr,t)}function oM(r,e){const t=ea(e,this.size,4);r.uniform4fv(this.addr,t)}function lM(r,e){const t=ea(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cM(r,e){const t=ea(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uM(r,e){const t=ea(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hM(r,e){r.uniform1iv(this.addr,e)}function fM(r,e){r.uniform2iv(this.addr,e)}function dM(r,e){r.uniform3iv(this.addr,e)}function pM(r,e){r.uniform4iv(this.addr,e)}function mM(r,e){r.uniform1uiv(this.addr,e)}function _M(r,e){r.uniform2uiv(this.addr,e)}function gM(r,e){r.uniform3uiv(this.addr,e)}function vM(r,e){r.uniform4uiv(this.addr,e)}function xM(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||mm,s[a])}function SM(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||gm,s[a])}function MM(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||vm,s[a])}function yM(r,e,t){const n=this.cache,i=e.length,s=Rl(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||_m,s[a])}function EM(r){switch(r){case 5126:return rM;case 35664:return sM;case 35665:return aM;case 35666:return oM;case 35674:return lM;case 35675:return cM;case 35676:return uM;case 5124:case 35670:return hM;case 35667:case 35671:return fM;case 35668:case 35672:return dM;case 35669:case 35673:return pM;case 5125:return mM;case 36294:return _M;case 36295:return gM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return yM}}class TM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iM(t.type)}}class bM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EM(t.type)}}class wM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function ad(r,e){r.seq.push(e),r.map[e.id]=e}function AM(r,e,t){const n=r.name,i=n.length;for(yc.lastIndex=0;;){const s=yc.exec(n),a=yc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ad(t,c===void 0?new TM(o,r,e):new bM(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new wM(o),ad(t,h)),t=h}}}class tl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);AM(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function od(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const RM=37297;let CM=0;function PM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ld=new Ze;function DM(r){dt._getMatrix(ld,dt.workingColorSpace,r);const e=`mat3( ${ld.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case _l:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function cd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+PM(r.getShaderSource(e),o)}else return s}function LM(r,e){const t=DM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function IM(r,e){let t;switch(e){case Lg:t="Linear";break;case Ig:t="Reinhard";break;case Ug:t="Cineon";break;case Wp:t="ACESFilmic";break;case Fg:t="AgX";break;case Og:t="Neutral";break;case Ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ho=new B;function UM(){dt.getLuminanceCoefficients(Ho);const r=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function FM(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function OM(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Sa(r){return r!==""}function ud(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(r){return r.replace(BM,zM)}const kM=new Map;function zM(r,e){let t=Qe[e];if(t===void 0){const n=kM.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ou(t)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(r){return r.replace(HM,VM)}function VM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function WM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XM(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Ks&&(e="ENVMAP_MODE_REFRACTION"),e}function YM(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gp:e="ENVMAP_BLENDING_MULTIPLY";break;case Pg:e="ENVMAP_BLENDING_MIX";break;case Dg:e="ENVMAP_BLENDING_ADD";break}return e}function qM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $M(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=GM(t),c=WM(t),u=XM(t),h=YM(t),d=qM(t),f=NM(t),_=FM(s),g=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(m=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==mr?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,LM("linearToOutputTexel",t.outputColorSpace),UM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=Ou(a),a=ud(a,t),a=hd(a,t),o=Ou(o),o=ud(o,t),o=hd(o,t),a=fd(a),o=fd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+a,v=M+p+o,w=od(i,i.VERTEX_SHADER,b),A=od(i,i.FRAGMENT_SHADER,v);i.attachShader(g,w),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(D){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(w)||"",V=i.getShaderInfoLog(A)||"",G=U.trim(),W=z.trim(),Y=V.trim();let H=!0,ne=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,w,A);else{const L=cd(i,w,"vertex"),ue=cd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+L+`
`+ue)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(W===""||Y==="")&&(ne=!1);ne&&(D.diagnostics={runnable:H,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(w),i.deleteShader(A),R=new tl(i,g),S=OM(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,RM)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}let KM=0;class ZM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jM(e),t.set(e,n)),n}}class jM{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}}function JM(r,e,t,n,i,s,a){const o=new Sh,l=new ZM,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,D,U,z){const V=U.fog,G=z.geometry,W=S.isMeshStandardMaterial?U.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),H=Y&&Y.mapping===wl?Y.image.height:null,ne=_[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const L=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=L!==void 0?L.length:0;let Fe=0;G.morphAttributes.position!==void 0&&(Fe=1),G.morphAttributes.normal!==void 0&&(Fe=2),G.morphAttributes.color!==void 0&&(Fe=3);let it,We,Ge,K;if(ne){const _e=Ti[ne];it=_e.vertexShader,We=_e.fragmentShader}else it=S.vertexShader,We=S.fragmentShader,l.update(S),Ge=l.getVertexShaderID(S),K=l.getFragmentShaderID(S);const j=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),we=z.isInstancedMesh===!0,Ee=z.isBatchedMesh===!0,Be=!!S.map,ut=!!S.matcap,P=!!Y,Xe=!!S.aoMap,Le=!!S.lightMap,Ae=!!S.bumpMap,N=!!S.normalMap,rt=!!S.displacementMap,ge=!!S.emissiveMap,He=!!S.metalnessMap,$e=!!S.roughnessMap,pt=S.anisotropy>0,C=S.clearcoat>0,y=S.dispersion>0,k=S.iridescence>0,Z=S.sheen>0,J=S.transmission>0,$=pt&&!!S.anisotropyMap,ve=C&&!!S.clearcoatMap,se=C&&!!S.clearcoatNormalMap,Te=C&&!!S.clearcoatRoughnessMap,he=k&&!!S.iridescenceMap,re=k&&!!S.iridescenceThicknessMap,ce=Z&&!!S.sheenColorMap,Ue=Z&&!!S.sheenRoughnessMap,be=!!S.specularMap,le=!!S.specularColorMap,Ve=!!S.specularIntensityMap,I=J&&!!S.transmissionMap,ie=J&&!!S.thicknessMap,ae=!!S.gradientMap,pe=!!S.alphaMap,te=S.alphaTest>0,Q=!!S.alphaHash,Se=!!S.extensions;let Oe=mr;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Oe=r.toneMapping);const ht={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:it,fragmentShader:We,defines:S.defines,customVertexShaderID:Ge,customFragmentShaderID:K,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Zs,alphaToCoverage:!!S.alphaToCoverage,map:Be,matcap:ut,envMap:P,envMapMode:P&&Y.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:Le,bumpMap:Ae,normalMap:N,displacementMap:d&&rt,emissiveMap:ge,normalMapObjectSpace:N&&S.normalMapType===Hg,normalMapTangentSpace:N&&S.normalMapType===em,metalnessMap:He,roughnessMap:$e,anisotropy:pt,anisotropyMap:$,clearcoat:C,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Te,dispersion:y,iridescence:k,iridescenceMap:he,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:ce,sheenRoughnessMap:Ue,specularMap:be,specularColorMap:le,specularIntensityMap:Ve,transmission:J,transmissionMap:I,thicknessMap:ie,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:pe,alphaTest:te,alphaHash:Q,combine:S.combine,mapUv:Be&&g(S.map.channel),aoMapUv:Xe&&g(S.aoMap.channel),lightMapUv:Le&&g(S.lightMap.channel),bumpMapUv:Ae&&g(S.bumpMap.channel),normalMapUv:N&&g(S.normalMap.channel),displacementMapUv:rt&&g(S.displacementMap.channel),emissiveMapUv:ge&&g(S.emissiveMap.channel),metalnessMapUv:He&&g(S.metalnessMap.channel),roughnessMapUv:$e&&g(S.roughnessMap.channel),anisotropyMapUv:$&&g(S.anisotropyMap.channel),clearcoatMapUv:ve&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&g(S.sheenRoughnessMap.channel),specularMapUv:be&&g(S.specularMap.channel),specularColorMapUv:le&&g(S.specularColorMap.channel),specularIntensityMapUv:Ve&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:ie&&g(S.thicknessMap.channel),alphaMapUv:pe&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(N||pt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Be||pe),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vi,flipSided:S.side===On,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)x.push(D),x.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(x,S),b(x,S),x.push(r.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function M(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function b(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const x=_[S.type];let D;if(x){const U=Ti[x];D=_0.clone(U.uniforms)}else D=S.uniforms;return D}function w(S,x){let D;for(let U=0,z=u.length;U<z;U++){const V=u[U];if(V.cacheKey===x){D=V,++D.usedTimes;break}}return D===void 0&&(D=new $M(r,x,S,s),u.push(D)),D}function A(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:R}}function QM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function ey(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function pd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function md(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||ey),n.length>1&&n.sort(d||pd),i.length>1&&i.sort(d||pd)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function ty(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new md,r.set(n,[a])):i>=s.length?(a=new md,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function ny(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new at};break;case"SpotLight":t={position:new B,direction:new B,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function iy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ry=0;function sy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ay(r){const e=new ny,t=iy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new Ct,a=new Ct;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,b=0,v=0,w=0,A=0,T=0;c.sort(sy);for(let S=0,x=c.length;S<x;S++){const D=c[S],U=D.color,z=D.intensity,V=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=U.r*z,h+=U.g*z,d+=U.b*z;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],z);T++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=D.shadow.matrix,M++}n.directional[f]=W,f++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(U).multiplyScalar(z),W.distance=V,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[g]=W;const Y=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,Y.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[g]=Y.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=G,v++}g++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Y=D.shadow,H=t.get(D);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=D.shadow.matrix,b++}n.point[_]=W,_++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(z),W.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==b||R.numSpotShadows!==v||R.numSpotMaps!==w||R.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=b,R.numSpotShadows=v,R.numSpotMaps=w,R.numLightProbes=T,n.version=ry++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const b=c[p];if(b.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function _d(r){const e=new ay(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function oy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new _d(r),e.set(i,[o])):s>=a.length?(o=new _d(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uy(r,e,t){let n=new Eh;const i=new ct,s=new ct,a=new St,o=new R0({depthPacking:zg}),l=new C0,c={},u=t.maxTextureSize,h={[Sr]:On,[On]:Sr,[Vi]:Vi},d=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:ly,fragmentShader:cy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new fi;_.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ht(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hp;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=r.getRenderTarget(),x=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),U=r.state;U.setBlending(pr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==Bi&&this.type===Bi,V=p===Bi&&this.type!==Bi;for(let G=0,W=A.length;G<W;G++){const Y=A[G],H=Y.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ne=H.getFrameExtents();if(i.multiply(ne),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,H.mapSize.y=s.y)),H.map===null||z===!0||V===!0){const ue=this.type!==Bi?{minFilter:Si,magFilter:Si}:{};H.map!==null&&H.map.dispose(),H.map=new ts(i.x,i.y,ue),H.map.texture.name=Y.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const L=H.getViewportCount();for(let ue=0;ue<L;ue++){const Fe=H.getViewport(ue);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),U.viewport(a),H.updateMatrices(Y,ue),n=H.getFrustum(),v(T,R,H.camera,Y,this.type)}H.isPointLightShadow!==!0&&this.type===Bi&&M(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,x,D)};function M(A,T){const R=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ts(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(T,null,R,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(T,null,R,f,g,null)}function b(A,T,R,S){let x=null;const D=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)x=D;else if(x=R.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const U=x.uuid,z=T.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let G=V[z];G===void 0&&(G=x.clone(),V[z]=G,T.addEventListener("dispose",w)),x=G}if(x.visible=T.visible,x.wireframe=T.wireframe,S===Bi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=R}return x}function v(A,T,R,S,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Bi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const z=e.update(A),V=A.material;if(Array.isArray(V)){const G=z.groups;for(let W=0,Y=G.length;W<Y;W++){const H=G[W],ne=V[H.materialIndex];if(ne&&ne.visible){const L=b(A,ne,S,x);A.onBeforeShadow(r,A,T,R,z,L,H),r.renderBufferDirect(R,null,z,L,A,H),A.onAfterShadow(r,A,T,R,z,L,H)}}}else if(V.visible){const G=b(A,V,S,x);A.onBeforeShadow(r,A,T,R,z,G,null),r.renderBufferDirect(R,null,z,G,A,null),A.onAfterShadow(r,A,T,R,z,G,null)}}const U=A.children;for(let z=0,V=U.length;z<V;z++)v(U[z],T,R,S,x)}function w(A){A.target.removeEventListener("dispose",w);for(const R in c){const S=c[R],x=A.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const hy={[jc]:Jc,[Qc]:nu,[eu]:iu,[qs]:tu,[Jc]:jc,[nu]:Qc,[iu]:eu,[tu]:qs};function fy(r,e){function t(){let I=!1;const ie=new St;let ae=null;const pe=new St(0,0,0,0);return{setMask:function(te){ae!==te&&!I&&(r.colorMask(te,te,te,te),ae=te)},setLocked:function(te){I=te},setClear:function(te,Q,Se,Oe,ht){ht===!0&&(te*=Oe,Q*=Oe,Se*=Oe),ie.set(te,Q,Se,Oe),pe.equals(ie)===!1&&(r.clearColor(te,Q,Se,Oe),pe.copy(ie))},reset:function(){I=!1,ae=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,ae=null,pe=null,te=null;return{setReversed:function(Q){if(ie!==Q){const Se=e.get("EXT_clip_control");Q?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ie=Q;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(Q){Q?j(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!I&&(r.depthMask(Q),ae=Q)},setFunc:function(Q){if(ie&&(Q=hy[Q]),pe!==Q){switch(Q){case jc:r.depthFunc(r.NEVER);break;case Jc:r.depthFunc(r.ALWAYS);break;case Qc:r.depthFunc(r.LESS);break;case qs:r.depthFunc(r.LEQUAL);break;case eu:r.depthFunc(r.EQUAL);break;case tu:r.depthFunc(r.GEQUAL);break;case nu:r.depthFunc(r.GREATER);break;case iu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=Q}},setLocked:function(Q){I=Q},setClear:function(Q){te!==Q&&(ie&&(Q=1-Q),r.clearDepth(Q),te=Q)},reset:function(){I=!1,ae=null,pe=null,te=null,ie=!1}}}function i(){let I=!1,ie=null,ae=null,pe=null,te=null,Q=null,Se=null,Oe=null,ht=null;return{setTest:function(_e){I||(_e?j(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(_e){ie!==_e&&!I&&(r.stencilMask(_e),ie=_e)},setFunc:function(_e,Re,qe){(ae!==_e||pe!==Re||te!==qe)&&(r.stencilFunc(_e,Re,qe),ae=_e,pe=Re,te=qe)},setOp:function(_e,Re,qe){(Q!==_e||Se!==Re||Oe!==qe)&&(r.stencilOp(_e,Re,qe),Q=_e,Se=Re,Oe=qe)},setLocked:function(_e){I=_e},setClear:function(_e){ht!==_e&&(r.clearStencil(_e),ht=_e)},reset:function(){I=!1,ie=null,ae=null,pe=null,te=null,Q=null,Se=null,Oe=null,ht=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,b=null,v=null,w=null,A=null,T=new at(0,0,0),R=0,S=!1,x=null,D=null,U=null,z=null,V=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Y>=2);let ne=null,L={};const ue=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),it=new St().fromArray(ue),We=new St().fromArray(Fe);function Ge(I,ie,ae,pe){const te=new Uint8Array(4),Q=r.createTexture();r.bindTexture(I,Q),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<ae;Se++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ie+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return Q}const K={};K[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(r.DEPTH_TEST),a.setFunc(qs),Ae(!1),N(mf),j(r.CULL_FACE),Xe(pr);function j(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function fe(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function we(I,ie){return h[I]!==ie?(r.bindFramebuffer(I,ie),h[I]=ie,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ie),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ee(I,ie){let ae=f,pe=!1;if(I){ae=d.get(ie),ae===void 0&&(ae=[],d.set(ie,ae));const te=I.textures;if(ae.length!==te.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,Se=te.length;Q<Se;Q++)ae[Q]=r.COLOR_ATTACHMENT0+Q;ae.length=te.length,pe=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,pe=!0);pe&&r.drawBuffers(ae)}function Be(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const ut={[Or]:r.FUNC_ADD,[dg]:r.FUNC_SUBTRACT,[pg]:r.FUNC_REVERSE_SUBTRACT};ut[mg]=r.MIN,ut[_g]=r.MAX;const P={[gg]:r.ZERO,[vg]:r.ONE,[xg]:r.SRC_COLOR,[Kc]:r.SRC_ALPHA,[bg]:r.SRC_ALPHA_SATURATE,[Eg]:r.DST_COLOR,[Mg]:r.DST_ALPHA,[Sg]:r.ONE_MINUS_SRC_COLOR,[Zc]:r.ONE_MINUS_SRC_ALPHA,[Tg]:r.ONE_MINUS_DST_COLOR,[yg]:r.ONE_MINUS_DST_ALPHA,[wg]:r.CONSTANT_COLOR,[Ag]:r.ONE_MINUS_CONSTANT_COLOR,[Rg]:r.CONSTANT_ALPHA,[Cg]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(I,ie,ae,pe,te,Q,Se,Oe,ht,_e){if(I===pr){g===!0&&(fe(r.BLEND),g=!1);return}if(g===!1&&(j(r.BLEND),g=!0),I!==fg){if(I!==m||_e!==S){if((p!==Or||v!==Or)&&(r.blendEquation(r.FUNC_ADD),p=Or,v=Or),_e)switch(I){case Fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $c:r.blendFunc(r.ONE,r.ONE);break;case _f:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $c:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _f:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,b=null,w=null,A=null,T.set(0,0,0),R=0,m=I,S=_e}return}te=te||ie,Q=Q||ae,Se=Se||pe,(ie!==p||te!==v)&&(r.blendEquationSeparate(ut[ie],ut[te]),p=ie,v=te),(ae!==M||pe!==b||Q!==w||Se!==A)&&(r.blendFuncSeparate(P[ae],P[pe],P[Q],P[Se]),M=ae,b=pe,w=Q,A=Se),(Oe.equals(T)===!1||ht!==R)&&(r.blendColor(Oe.r,Oe.g,Oe.b,ht),T.copy(Oe),R=ht),m=I,S=!1}function Le(I,ie){I.side===Vi?fe(r.CULL_FACE):j(r.CULL_FACE);let ae=I.side===On;ie&&(ae=!ae),Ae(ae),I.blending===Fs&&I.transparent===!1?Xe(pr):Xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ge(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(I){x!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),x=I)}function N(I){I!==ug?(j(r.CULL_FACE),I!==D&&(I===mf?r.cullFace(r.BACK):I===hg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),D=I}function rt(I){I!==U&&(W&&r.lineWidth(I),U=I)}function ge(I,ie,ae){I?(j(r.POLYGON_OFFSET_FILL),(z!==ie||V!==ae)&&(r.polygonOffset(ie,ae),z=ie,V=ae)):fe(r.POLYGON_OFFSET_FILL)}function He(I){I?j(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function $e(I){I===void 0&&(I=r.TEXTURE0+G-1),ne!==I&&(r.activeTexture(I),ne=I)}function pt(I,ie,ae){ae===void 0&&(ne===null?ae=r.TEXTURE0+G-1:ae=ne);let pe=L[ae];pe===void 0&&(pe={type:void 0,texture:void 0},L[ae]=pe),(pe.type!==I||pe.texture!==ie)&&(ne!==ae&&(r.activeTexture(ae),ne=ae),r.bindTexture(I,ie||K[I]),pe.type=I,pe.texture=ie)}function C(){const I=L[ne];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(I){it.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),it.copy(I))}function Ue(I){We.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function be(I,ie){let ae=c.get(ie);ae===void 0&&(ae=new WeakMap,c.set(ie,ae));let pe=ae.get(I);pe===void 0&&(pe=r.getUniformBlockIndex(ie,I.name),ae.set(I,pe))}function le(I,ie){const pe=c.get(ie).get(I);l.get(ie)!==pe&&(r.uniformBlockBinding(ie,pe,I.__bindingPointIndex),l.set(ie,pe))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,L={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,b=null,v=null,w=null,A=null,T=new at(0,0,0),R=0,S=!1,x=null,D=null,U=null,z=null,V=null,it.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:fe,bindFramebuffer:we,drawBuffers:Ee,useProgram:Be,setBlending:Xe,setMaterial:Le,setFlipSided:Ae,setCullFace:N,setLineWidth:rt,setPolygonOffset:ge,setScissorTest:He,activeTexture:$e,bindTexture:pt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:he,texImage3D:re,updateUBOMapping:be,uniformBlockBinding:le,texStorage2D:se,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:ve,scissor:ce,viewport:Ue,reset:Ve}}function dy(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,y){return f?new OffscreenCanvas(C,y):xl("canvas")}function g(C,y,k){let Z=1;const J=pt(C);if((J.width>k||J.height>k)&&(Z=k/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Z*J.width),ve=Math.floor(Z*J.height);h===void 0&&(h=_($,ve));const se=y?_($,ve):h;return se.width=$,se.height=ve,se.getContext("2d").drawImage(C,0,0,$,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+ve+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(C,y,k,Z,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=y;if(y===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8)),y===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),y===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8)),y===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),y===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),y===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),y===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),y===r.RGBA){const ve=J?_l:dt.getTransfer(Z);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=ve===vt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(C,y){let k;return C?y===null||y===es||y===qa?k=r.DEPTH24_STENCIL8:y===Wi?k=r.DEPTH32F_STENCIL8:y===Ya&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===es||y===qa?k=r.DEPTH_COMPONENT24:y===Wi?k=r.DEPTH_COMPONENT32F:y===Ya&&(k=r.DEPTH_COMPONENT16),k}function w(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Si&&C.minFilter!==Ri?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&u.delete(y)}function T(C){const y=C.target;y.removeEventListener("dispose",T),x(y)}function R(C){const y=n.get(C);if(y.__webglInit===void 0)return;const k=C.source,Z=d.get(k);if(Z){const J=Z[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(C),Object.keys(Z).length===0&&d.delete(k)}n.remove(C)}function S(C){const y=n.get(C);r.deleteTexture(y.__webglTexture);const k=C.source,Z=d.get(k);delete Z[y.__cacheKey],a.memory.textures--}function x(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let J=0;J<y.__webglFramebuffer[Z].length;J++)r.deleteFramebuffer(y.__webglFramebuffer[Z][J]);else r.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)r.deleteFramebuffer(y.__webglFramebuffer[Z]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let Z=0,J=k.length;Z<J;Z++){const $=n.get(k[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(k[Z])}n.remove(C)}let D=0;function U(){D=0}function z(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function V(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function G(C,y){const k=n.get(C);if(C.isVideoTexture&&He(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+y)}function W(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){K(k,C,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+y)}function Y(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){K(k,C,y);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+y)}function H(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+y)}const ne={[Xa]:r.REPEAT,[Hr]:r.CLAMP_TO_EDGE,[au]:r.MIRRORED_REPEAT},L={[Si]:r.NEAREST,[Bg]:r.NEAREST_MIPMAP_NEAREST,[xo]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[Wl]:r.LINEAR_MIPMAP_NEAREST,[Vr]:r.LINEAR_MIPMAP_LINEAR},ue={[Vg]:r.NEVER,[$g]:r.ALWAYS,[Gg]:r.LESS,[tm]:r.LEQUAL,[Wg]:r.EQUAL,[qg]:r.GEQUAL,[Xg]:r.GREATER,[Yg]:r.NOTEQUAL};function Fe(C,y){if(y.type===Wi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ri||y.magFilter===Wl||y.magFilter===xo||y.magFilter===Vr||y.minFilter===Ri||y.minFilter===Wl||y.minFilter===xo||y.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ne[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ne[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ne[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,L[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,L[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ue[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Si||y.minFilter!==xo&&y.minFilter!==Vr||y.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function it(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let J=d.get(Z);J===void 0&&(J={},d.set(Z,J));const $=V(y);if($!==C.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[$].usedTimes++;const ve=J[C.__cacheKey];ve!==void 0&&(J[C.__cacheKey].usedTimes--,ve.usedTimes===0&&S(y)),C.__cacheKey=$,C.__webglTexture=J[$].texture}return k}function We(C,y,k){return Math.floor(Math.floor(C/k)/y)}function Ge(C,y,k,Z){const $=C.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,k,Z,y.data);else{$.sort((re,ce)=>re.start-ce.start);let ve=0;for(let re=1;re<$.length;re++){const ce=$[ve],Ue=$[re],be=ce.start+ce.count,le=We(Ue.start,y.width,4),Ve=We(ce.start,y.width,4);Ue.start<=be+1&&le===Ve&&We(Ue.start+Ue.count-1,y.width,4)===le?ce.count=Math.max(ce.count,Ue.start+Ue.count-ce.start):(++ve,$[ve]=Ue)}$.length=ve+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),Te=r.getParameter(r.UNPACK_SKIP_PIXELS),he=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let re=0,ce=$.length;re<ce;re++){const Ue=$[re],be=Math.floor(Ue.start/4),le=Math.ceil(Ue.count/4),Ve=be%y.width,I=Math.floor(be/y.width),ie=le,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,Ve,I,ie,ae,k,Z,y.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),r.pixelStorei(r.UNPACK_SKIP_ROWS,he)}}function K(C,y,k){let Z=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=r.TEXTURE_3D);const J=it(C,y),$=y.source;t.bindTexture(Z,C.__webglTexture,r.TEXTURE0+k);const ve=n.get($);if($.version!==ve.__version||J===!0){t.activeTexture(r.TEXTURE0+k);const se=dt.getPrimaries(dt.workingColorSpace),Te=y.colorSpace===ir?null:dt.getPrimaries(y.colorSpace),he=y.colorSpace===ir||se===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let re=g(y.image,!1,i.maxTextureSize);re=$e(y,re);const ce=s.convert(y.format,y.colorSpace),Ue=s.convert(y.type);let be=b(y.internalFormat,ce,Ue,y.colorSpace,y.isVideoTexture);Fe(Z,y);let le;const Ve=y.mipmaps,I=y.isVideoTexture!==!0,ie=ve.__version===void 0||J===!0,ae=$.dataReady,pe=w(y,re);if(y.isDepthTexture)be=v(y.format===Ka,y.type),ie&&(I?t.texStorage2D(r.TEXTURE_2D,1,be,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,be,re.width,re.height,0,ce,Ue,null));else if(y.isDataTexture)if(Ve.length>0){I&&ie&&t.texStorage2D(r.TEXTURE_2D,pe,be,Ve[0].width,Ve[0].height);for(let te=0,Q=Ve.length;te<Q;te++)le=Ve[te],I?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,le.width,le.height,ce,Ue,le.data):t.texImage2D(r.TEXTURE_2D,te,be,le.width,le.height,0,ce,Ue,le.data);y.generateMipmaps=!1}else I?(ie&&t.texStorage2D(r.TEXTURE_2D,pe,be,re.width,re.height),ae&&Ge(y,re,ce,Ue)):t.texImage2D(r.TEXTURE_2D,0,be,re.width,re.height,0,ce,Ue,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,be,Ve[0].width,Ve[0].height,re.depth);for(let te=0,Q=Ve.length;te<Q;te++)if(le=Ve[te],y.format!==vi)if(ce!==null)if(I){if(ae)if(y.layerUpdates.size>0){const Se=Yf(le.width,le.height,y.format,y.type);for(const Oe of y.layerUpdates){const ht=le.data.subarray(Oe*Se/le.data.BYTES_PER_ELEMENT,(Oe+1)*Se/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Oe,le.width,le.height,1,ce,ht)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,re.depth,ce,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,be,le.width,le.height,re.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,le.width,le.height,re.depth,ce,Ue,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,be,le.width,le.height,re.depth,0,ce,Ue,le.data)}else{I&&ie&&t.texStorage2D(r.TEXTURE_2D,pe,be,Ve[0].width,Ve[0].height);for(let te=0,Q=Ve.length;te<Q;te++)le=Ve[te],y.format!==vi?ce!==null?I?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(r.TEXTURE_2D,te,be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,le.width,le.height,ce,Ue,le.data):t.texImage2D(r.TEXTURE_2D,te,be,le.width,le.height,0,ce,Ue,le.data)}else if(y.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,pe,be,re.width,re.height,re.depth),ae)if(y.layerUpdates.size>0){const te=Yf(re.width,re.height,y.format,y.type);for(const Q of y.layerUpdates){const Se=re.data.subarray(Q*te/re.data.BYTES_PER_ELEMENT,(Q+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ce,Ue,Se)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ce,Ue,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,ce,Ue,re.data);else if(y.isData3DTexture)I?(ie&&t.texStorage3D(r.TEXTURE_3D,pe,be,re.width,re.height,re.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ce,Ue,re.data)):t.texImage3D(r.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,ce,Ue,re.data);else if(y.isFramebufferTexture){if(ie)if(I)t.texStorage2D(r.TEXTURE_2D,pe,be,re.width,re.height);else{let te=re.width,Q=re.height;for(let Se=0;Se<pe;Se++)t.texImage2D(r.TEXTURE_2D,Se,be,te,Q,0,ce,Ue,null),te>>=1,Q>>=1}}else if(Ve.length>0){if(I&&ie){const te=pt(Ve[0]);t.texStorage2D(r.TEXTURE_2D,pe,be,te.width,te.height)}for(let te=0,Q=Ve.length;te<Q;te++)le=Ve[te],I?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ce,Ue,le):t.texImage2D(r.TEXTURE_2D,te,be,ce,Ue,le);y.generateMipmaps=!1}else if(I){if(ie){const te=pt(re);t.texStorage2D(r.TEXTURE_2D,pe,be,te.width,te.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ce,Ue,re)}else t.texImage2D(r.TEXTURE_2D,0,be,ce,Ue,re);m(y)&&p(Z),ve.__version=$.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function j(C,y,k){if(y.image.length!==6)return;const Z=it(C,y),J=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const $=n.get(J);if(J.version!==$.__version||Z===!0){t.activeTexture(r.TEXTURE0+k);const ve=dt.getPrimaries(dt.workingColorSpace),se=y.colorSpace===ir?null:dt.getPrimaries(y.colorSpace),Te=y.colorSpace===ir||ve===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,ce=[];for(let Q=0;Q<6;Q++)!he&&!re?ce[Q]=g(y.image[Q],!0,i.maxCubemapSize):ce[Q]=re?y.image[Q].image:y.image[Q],ce[Q]=$e(y,ce[Q]);const Ue=ce[0],be=s.convert(y.format,y.colorSpace),le=s.convert(y.type),Ve=b(y.internalFormat,be,le,y.colorSpace),I=y.isVideoTexture!==!0,ie=$.__version===void 0||Z===!0,ae=J.dataReady;let pe=w(y,Ue);Fe(r.TEXTURE_CUBE_MAP,y);let te;if(he){I&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ve,Ue.width,Ue.height);for(let Q=0;Q<6;Q++){te=ce[Q].mipmaps;for(let Se=0;Se<te.length;Se++){const Oe=te[Se];y.format!==vi?be!==null?I?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Oe.width,Oe.height,be,Oe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Ve,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,0,0,Oe.width,Oe.height,be,le,Oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se,Ve,Oe.width,Oe.height,0,be,le,Oe.data)}}}else{if(te=y.mipmaps,I&&ie){te.length>0&&pe++;const Q=pt(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Ve,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ce[Q].width,ce[Q].height,be,le,ce[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,ce[Q].width,ce[Q].height,0,be,le,ce[Q].data);for(let Se=0;Se<te.length;Se++){const ht=te[Se].image[Q].image;I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,ht.width,ht.height,be,le,ht.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Ve,ht.width,ht.height,0,be,le,ht.data)}}else{I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,be,le,ce[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ve,be,le,ce[Q]);for(let Se=0;Se<te.length;Se++){const Oe=te[Se];I?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,0,0,be,le,Oe.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Se+1,Ve,be,le,Oe.image[Q])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),$.__version=J.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function fe(C,y,k,Z,J,$){const ve=s.convert(k.format,k.colorSpace),se=s.convert(k.type),Te=b(k.internalFormat,ve,se,k.colorSpace),he=n.get(y),re=n.get(k);if(re.__renderTarget=y,!he.__hasExternalTextures){const ce=Math.max(1,y.width>>$),Ue=Math.max(1,y.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,$,Te,ce,Ue,y.depth,0,ve,se,null):t.texImage2D(J,$,Te,ce,Ue,0,ve,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,J,re.__webglTexture,0,rt(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,J,re.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(C,y,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){const Z=y.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,$=v(y.stencilBuffer,J),ve=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=rt(y);ge(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,$,y.width,y.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,$,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,$,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,C)}else{const Z=y.textures;for(let J=0;J<Z.length;J++){const $=Z[J],ve=s.convert($.format,$.colorSpace),se=s.convert($.type),Te=b($.internalFormat,ve,se,$.colorSpace),he=rt(y);k&&ge(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,Te,y.width,y.height):ge(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,Te,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,Te,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(C,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const J=Z.__webglTexture,$=rt(y);if(y.depthTexture.format===$a)ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(y.depthTexture.format===Ka)ge(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Be(C){const y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Z=C.texture.mipmaps;Z&&Z.length>0?Ee(y.__webglFramebuffer[0],C):Ee(y.__webglFramebuffer,C)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=r.createRenderbuffer(),we(y.__webglDepthbuffer[Z],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),we(y.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(C,y,k){const Z=n.get(C);y!==void 0&&fe(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Be(C)}function P(C){const y=C.texture,k=n.get(C),Z=n.get(y);C.addEventListener("dispose",T);const J=C.textures,$=C.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=y.version,a.memory.textures++),$){k.__webglFramebuffer=[];for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[se]=[];for(let Te=0;Te<y.mipmaps.length;Te++)k.__webglFramebuffer[se][Te]=r.createFramebuffer()}else k.__webglFramebuffer[se]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let se=0;se<y.mipmaps.length;se++)k.__webglFramebuffer[se]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ve)for(let se=0,Te=J.length;se<Te;se++){const he=n.get(J[se]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ge(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const Te=J[se];k.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[se]);const he=s.convert(Te.format,Te.colorSpace),re=s.convert(Te.type),ce=b(Te.internalFormat,he,re,Te.colorSpace,C.isXRRenderTarget===!0),Ue=rt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,ce,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,k.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),we(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,y);for(let se=0;se<6;se++)if(y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)fe(k.__webglFramebuffer[se][Te],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te);else fe(k.__webglFramebuffer[se],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Te=J.length;se<Te;se++){const he=J[se],re=n.get(he);let ce=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,re.__webglTexture),Fe(ce,he),fe(k.__webglFramebuffer,C,he,r.COLOR_ATTACHMENT0+se,ce,0),m(he)&&p(ce)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),Fe(se,y),y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)fe(k.__webglFramebuffer[Te],C,y,r.COLOR_ATTACHMENT0,se,Te);else fe(k.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,se,0);m(y)&&p(se),t.unbindTexture()}C.depthBuffer&&Be(C)}function Xe(C){const y=C.textures;for(let k=0,Z=y.length;k<Z;k++){const J=y[k];if(m(J)){const $=M(C),ve=n.get(J).__webglTexture;t.bindTexture($,ve),p($),t.unbindTexture()}}}const Le=[],Ae=[];function N(C){if(C.samples>0){if(ge(C)===!1){const y=C.textures,k=C.width,Z=C.height;let J=r.COLOR_BUFFER_BIT;const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(C),se=y.length>1;if(se)for(let he=0;he<y.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Te=C.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let he=0;he<y.length;he++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const re=n.get(y[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,k,Z,0,0,k,Z,J,r.NEAREST),l===!0&&(Le.length=0,Ae.length=0,Le.push(r.COLOR_ATTACHMENT0+he),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Le.push($),Ae.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let he=0;he<y.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ve.__webglColorRenderbuffer[he]);const re=n.get(y[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function rt(C){return Math.min(i.maxSamples,C.samples)}function ge(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function He(C){const y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function $e(C,y){const k=C.colorSpace,Z=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Zs&&k!==ir&&(dt.getTransfer(k)===vt?(Z!==vi||J!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=H,this.rebindTextures=ut,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function py(r,e){function t(n,i=ir){let s;const a=dt.getTransfer(i);if(n===Li)return r.UNSIGNED_BYTE;if(n===dh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ph)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$p)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Kp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yp)return r.BYTE;if(n===qp)return r.SHORT;if(n===Ya)return r.UNSIGNED_SHORT;if(n===fh)return r.INT;if(n===es)return r.UNSIGNED_INT;if(n===Wi)return r.FLOAT;if(n===Ja)return r.HALF_FLOAT;if(n===Zp)return r.ALPHA;if(n===jp)return r.RGB;if(n===vi)return r.RGBA;if(n===$a)return r.DEPTH_COMPONENT;if(n===Ka)return r.DEPTH_STENCIL;if(n===Jp)return r.RED;if(n===mh)return r.RED_INTEGER;if(n===Qp)return r.RG;if(n===_h)return r.RG_INTEGER;if(n===gh)return r.RGBA_INTEGER;if(n===jo||n===Jo||n===Qo||n===el)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ou||n===lu||n===cu||n===uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hu||n===fu||n===du)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hu||n===fu)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===du)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===bu||n===wu||n===Au)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_u)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Su)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Au)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ru||n===Cu||n===Pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ru)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Du||n===Lu||n===Iu||n===Uu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Du)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Iu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const my=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_y=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new fm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mr({vertexShader:my,fragmentShader:_y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Zr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vy extends Js{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new gy,p={},M=t.getContextAttributes();let b=null,v=null;const w=[],A=[],T=new ct;let R=null;const S=new Pn;S.viewport=new St;const x=new Pn;x.viewport=new St;const D=[S,x],U=new O0;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=w[K];return j===void 0&&(j=new dc,w[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=w[K];return j===void 0&&(j=new dc,w[K]=j),j.getGripSpace()},this.getHand=function(K){let j=w[K];return j===void 0&&(j=new dc,w[K]=j),j.getHandSpace()};function G(K){const j=A.indexOf(K.inputSource);if(j===-1)return;const fe=w[j];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||a),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let K=0;K<w.length;K++){const j=A[K];j!==null&&(A[K]=null,w[K].disconnect(j))}z=null,V=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(b),f=null,d=null,h=null,i=null,v=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,we=null,Ee=null;M.depth&&(Ee=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?Ka:$a,we=M.stencil?qa:es);const Be={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new ts(d.textureWidth,d.textureHeight,{format:vi,type:Li,depthTexture:new hm(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ts(f.framebufferWidth,f.framebufferHeight,{format:vi,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(K){for(let j=0;j<K.removed.length;j++){const fe=K.removed[j],we=A.indexOf(fe);we>=0&&(A[we]=null,w[we].disconnect(fe))}for(let j=0;j<K.added.length;j++){const fe=K.added[j];let we=A.indexOf(fe);if(we===-1){for(let Be=0;Be<w.length;Be++)if(Be>=A.length){A.push(fe),we=Be;break}else if(A[Be]===null){A[Be]=fe,we=Be;break}if(we===-1)break}const Ee=w[we];Ee&&Ee.connect(fe)}}const H=new B,ne=new B;function L(K,j,fe){H.setFromMatrixPosition(j.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);const we=H.distanceTo(ne),Ee=j.projectionMatrix.elements,Be=fe.projectionMatrix.elements,ut=Ee[14]/(Ee[10]-1),P=Ee[14]/(Ee[10]+1),Xe=(Ee[9]+1)/Ee[5],Le=(Ee[9]-1)/Ee[5],Ae=(Ee[8]-1)/Ee[0],N=(Be[8]+1)/Be[0],rt=ut*Ae,ge=ut*N,He=we/(-Ae+N),$e=He*-Ae;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX($e),K.translateZ(He),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const pt=ut+He,C=P+He,y=rt-$e,k=ge+(we-$e),Z=Xe*P/C*pt,J=Le*P/C*pt;K.projectionMatrix.makePerspective(y,k,Z,J,pt,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ue(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let j=K.near,fe=K.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),U.near=x.near=S.near=j,U.far=x.far=S.far=fe,(z!==U.near||V!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,V=U.far),U.layers.mask=K.layers.mask|6,S.layers.mask=U.layers.mask&3,x.layers.mask=U.layers.mask&5;const we=K.parent,Ee=U.cameras;ue(U,we);for(let Be=0;Be<Ee.length;Be++)ue(Ee[Be],we);Ee.length===2?L(U,S,x):U.projectionMatrix.copy(S.projectionMatrix),Fe(K,U,we)};function Fe(K,j,fe){fe===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=vl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let it=null;function We(K,j){if(u=j.getViewerPose(c||a),_=j,u!==null){const fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let we=!1;fe.length!==U.cameras.length&&(U.cameras.length=0,we=!0);for(let P=0;P<fe.length;P++){const Xe=fe[P];let Le=null;if(f!==null)Le=f.getViewport(Xe);else{const N=h.getViewSubImage(d,Xe);Le=N.viewport,P===0&&(e.setRenderTargetTextures(v,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(v))}let Ae=D[P];Ae===void 0&&(Ae=new Pn,Ae.layers.enable(P),Ae.viewport=new St,D[P]=Ae),Ae.matrix.fromArray(Xe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Xe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Le.x,Le.y,Le.width,Le.height),P===0&&(U.matrix.copy(Ae.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),we===!0&&U.cameras.push(Ae)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const P=h.getDepthInformation(fe[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(Ee&&Ee.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<fe.length;P++){const Xe=fe[P].camera;if(Xe){let Le=p[Xe];Le||(Le=new fm,p[Xe]=Le);const Ae=h.getCameraImage(Xe);Le.sourceTexture=Ae}}}}for(let fe=0;fe<w.length;fe++){const we=A[fe],Ee=w[fe];we!==null&&Ee!==void 0&&Ee.update(we,j,c||a)}it&&it(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const Ge=new pm;Ge.setAnimationLoop(We),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}}const Dr=new Ft,xy=new Ct;function Sy(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,om(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===On&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===On&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),b=M.envMap,v=M.envMapRotation;b&&(m.envMap.value=b,Dr.copy(v),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(xy.makeRotationFromEuler(Dr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===On&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function My(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const v=b.program;n.uniformBlockBinding(M,v)}function c(M,b){let v=i[M.id];v===void 0&&(_(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",m));const w=b.program;n.updateUBOMapping(M,w);const A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function u(M){const b=h();M.__bindingPointIndex=b;const v=r.createBuffer(),w=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,v),v}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=i[M.id],v=M.uniforms,w=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let A=0,T=v.length;A<T;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,x=R.length;S<x;S++){const D=R[S];if(f(D,A,S,w)===!0){const U=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let G=0;G<z.length;G++){const W=z[G],Y=g(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,U+V,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,b,v,w){const A=M.value,T=b+"_"+v;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const R=w[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(M){const b=M.uniforms;let v=0;const w=16;for(let T=0,R=b.length;T<R;T++){const S=Array.isArray(b[T])?b[T]:[b[T]];for(let x=0,D=S.length;x<D;x++){const U=S[x],z=Array.isArray(U.value)?U.value:[U.value];for(let V=0,G=z.length;V<G;V++){const W=z[V],Y=g(W),H=v%w,ne=H%Y.boundary,L=H+ne;v+=ne,L!==0&&w-L<Y.storage&&(v+=w-L),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=Y.storage}}}const A=v%w;return A>0&&(v+=w-A),M.__size=v,M.__cache={},this}function g(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class yy{constructor(e={}){const{canvas:t=Zg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=Rn;let A=0,T=0,R=null,S=-1,x=null;const D=new St,U=new St;let z=null;const V=new at(0);let G=0,W=t.width,Y=t.height,H=1,ne=null,L=null;const ue=new St(0,0,W,Y),Fe=new St(0,0,W,Y);let it=!1;const We=new Eh;let Ge=!1,K=!1;const j=new Ct,fe=new B,we=new St,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function ut(){return R===null?H:1}let P=n;function Xe(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hh}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",te,!1),P===null){const F="webgl2";if(P=Xe(F,E),P===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Le,Ae,N,rt,ge,He,$e,pt,C,y,k,Z,J,$,ve,se,Te,he,re,ce,Ue,be,le,Ve;function I(){Le=new LS(P),Le.init(),be=new py(P,Le),Ae=new bS(P,Le,e,be),N=new fy(P,Le),Ae.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),rt=new NS(P),ge=new QM,He=new dy(P,Le,N,ge,Ae,be,rt),$e=new AS(v),pt=new DS(v),C=new H0(P),le=new ES(P,C),y=new IS(P,C,rt,le),k=new OS(P,y,C,rt),re=new FS(P,Ae,He),se=new wS(ge),Z=new JM(v,$e,pt,Le,Ae,le,se),J=new Sy(v,ge),$=new ty,ve=new oy(Le),he=new yS(v,$e,pt,N,k,f,l),Te=new uy(v,k,Ae),Ve=new My(P,rt,Ae,N),ce=new TS(P,Le,rt),Ue=new US(P,Le,rt),rt.programs=Z.programs,v.capabilities=Ae,v.extensions=Le,v.properties=ge,v.renderLists=$,v.shadowMap=Te,v.state=N,v.info=rt}I();const ie=new vy(v,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(W,Y,!1))},this.getSize=function(E){return E.set(W,Y)},this.setSize=function(E,F,X=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Y=F,t.width=Math.floor(E*H),t.height=Math.floor(F*H),X===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(W*H,Y*H).floor()},this.setDrawingBufferSize=function(E,F,X){W=E,Y=F,H=X,t.width=Math.floor(E*X),t.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(ue)},this.setViewport=function(E,F,X,q){E.isVector4?ue.set(E.x,E.y,E.z,E.w):ue.set(E,F,X,q),N.viewport(D.copy(ue).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,F,X,q){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,F,X,q),N.scissor(U.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){N.setScissorTest(it=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){L=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,X=!0){let q=0;if(E){let O=!1;if(R!==null){const ee=R.texture.format;O=ee===gh||ee===_h||ee===mh}if(O){const ee=R.texture.type,oe=ee===Li||ee===es||ee===Ya||ee===qa||ee===dh||ee===ph,Me=he.getClearColor(),xe=he.getClearAlpha(),Ne=Me.r,Pe=Me.g,Ce=Me.b;oe?(_[0]=Ne,_[1]=Pe,_[2]=Ce,_[3]=xe,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=Ne,g[1]=Pe,g[2]=Ce,g[3]=xe,P.clearBufferiv(P.COLOR,0,g))}else q|=P.COLOR_BUFFER_BIT}F&&(q|=P.DEPTH_BUFFER_BIT),X&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",te,!1),he.dispose(),$.dispose(),ve.dispose(),ge.dispose(),$e.dispose(),pt.dispose(),k.dispose(),le.dispose(),Ve.dispose(),Z.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",qe),ie.removeEventListener("sessionend",de),ke.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=rt.autoReset,F=Te.enabled,X=Te.autoUpdate,q=Te.needsUpdate,O=Te.type;I(),rt.autoReset=E,Te.enabled=F,Te.autoUpdate=X,Te.needsUpdate=q,Te.type=O}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Q(E){const F=E.target;F.removeEventListener("dispose",Q),Se(F)}function Se(E){Oe(E),ge.remove(E)}function Oe(E){const F=ge.get(E).programs;F!==void 0&&(F.forEach(function(X){Z.releaseProgram(X)}),E.isShaderMaterial&&Z.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,q,O,ee){F===null&&(F=Ee);const oe=O.isMesh&&O.matrixWorld.determinant()<0,Me=_t(E,F,X,q,O);N.setMaterial(q,oe);let xe=X.index,Ne=1;if(q.wireframe===!0){if(xe=y.getWireframeAttribute(X),xe===void 0)return;Ne=2}const Pe=X.drawRange,Ce=X.attributes.position;let Ke=Pe.start*Ne,st=(Pe.start+Pe.count)*Ne;ee!==null&&(Ke=Math.max(Ke,ee.start*Ne),st=Math.min(st,(ee.start+ee.count)*Ne)),xe!==null?(Ke=Math.max(Ke,0),st=Math.min(st,xe.count)):Ce!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,Ce.count));const Nt=st-Ke;if(Nt<0||Nt===1/0)return;le.setup(O,q,Me,X,xe);let wt,yt=ce;if(xe!==null&&(wt=C.get(xe),yt=Ue,yt.setIndex(wt)),O.isMesh)q.wireframe===!0?(N.setLineWidth(q.wireframeLinewidth*ut()),yt.setMode(P.LINES)):yt.setMode(P.TRIANGLES);else if(O.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),N.setLineWidth(ze*ut()),O.isLineSegments?yt.setMode(P.LINES):O.isLineLoop?yt.setMode(P.LINE_LOOP):yt.setMode(P.LINE_STRIP)}else O.isPoints?yt.setMode(P.POINTS):O.isSprite&&yt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Za("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))yt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ze=O._multiDrawStarts,Pt=O._multiDrawCounts,ft=O._multiDrawCount,zn=xe?C.get(xe).bytesPerElement:1,is=ge.get(q).currentProgram.getUniforms();for(let Hn=0;Hn<ft;Hn++)is.setValue(P,"_gl_DrawID",Hn),yt.render(ze[Hn]/zn,Pt[Hn])}else if(O.isInstancedMesh)yt.renderInstances(Ke,Nt,O.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Pt=Math.min(X.instanceCount,ze);yt.renderInstances(Ke,Nt,Pt)}else yt.render(Ke,Nt)};function ht(E,F,X){E.transparent===!0&&E.side===Vi&&E.forceSinglePass===!1?(E.side=On,E.needsUpdate=!0,kt(E,F,X),E.side=Sr,E.needsUpdate=!0,kt(E,F,X),E.side=Vi):kt(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),p=ve.get(X),p.init(F),b.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==X&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const q=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ee=O.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const Me=ee[oe];ht(Me,X,O),q.add(Me)}else ht(ee,X,O),q.add(ee)}),p=b.pop(),q},this.compileAsync=function(E,F,X=null){const q=this.compile(E,F,X);return new Promise(O=>{function ee(){if(q.forEach(function(oe){ge.get(oe).currentProgram.isReady()&&q.delete(oe)}),q.size===0){O(E);return}setTimeout(ee,10)}Le.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let _e=null;function Re(E){_e&&_e(E)}function qe(){ke.stop()}function de(){ke.start()}const ke=new pm;ke.setAnimationLoop(Re),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(E){_e=E,ie.setAnimationLoop(E),E===null?ke.stop():ke.start()},ie.addEventListener("sessionstart",qe),ie.addEventListener("sessionend",de),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,R),p=ve.get(E,b.length),p.init(F),b.push(p),j.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),We.setFromProjectionMatrix(j,Ci,F.reversedDepth),K=this.localClippingEnabled,Ge=se.init(this.clippingPlanes,K),m=$.get(E,M.length),m.init(),M.push(m),ie.enabled===!0&&ie.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&Ie(ee,F,-1/0,v.sortObjects)}Ie(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ne,L),Be=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Be&&he.addToRenderList(m,E),this.info.render.frame++,Ge===!0&&se.beginShadows();const X=p.state.shadowsArray;Te.render(X,E,F),Ge===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const ee=F.cameras;if(O.length>0)for(let oe=0,Me=ee.length;oe<Me;oe++){const xe=ee[oe];Bt(q,O,E,xe)}Be&&he.render(E);for(let oe=0,Me=ee.length;oe<Me;oe++){const xe=ee[oe];Ye(m,E,xe,xe.viewport)}}else O.length>0&&Bt(q,O,E,F),Be&&he.render(E),Ye(m,E,F);R!==null&&T===0&&(He.updateMultisampleRenderTarget(R),He.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,F),le.resetDefaultState(),S=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],Ge===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ie(E,F,X,q){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||We.intersectsSprite(E)){q&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);const oe=k.update(E),Me=E.material;Me.visible&&m.push(E,oe,Me,X,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||We.intersectsObject(E))){const oe=k.update(E),Me=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),we.copy(oe.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(j)),Array.isArray(Me)){const xe=oe.groups;for(let Ne=0,Pe=xe.length;Ne<Pe;Ne++){const Ce=xe[Ne],Ke=Me[Ce.materialIndex];Ke&&Ke.visible&&m.push(E,oe,Ke,X,we.z,Ce)}}else Me.visible&&m.push(E,oe,Me,X,we.z,null)}}const ee=E.children;for(let oe=0,Me=ee.length;oe<Me;oe++)Ie(ee[oe],F,X,q)}function Ye(E,F,X,q){const O=E.opaque,ee=E.transmissive,oe=E.transparent;p.setupLightsView(X),Ge===!0&&se.setGlobalState(v.clippingPlanes,X),q&&N.viewport(D.copy(q)),O.length>0&&Je(O,F,X),ee.length>0&&Je(ee,F,X),oe.length>0&&Je(oe,F,X),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Bt(E,F,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ts(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Ja:Li,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const ee=p.state.transmissionRenderTarget[q.id],oe=q.viewport||D;ee.setSize(oe.z*v.transmissionResolutionScale,oe.w*v.transmissionResolutionScale);const Me=v.getRenderTarget(),xe=v.getActiveCubeFace(),Ne=v.getActiveMipmapLevel();v.setRenderTarget(ee),v.getClearColor(V),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Be&&he.render(X);const Pe=v.toneMapping;v.toneMapping=mr;const Ce=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Ge===!0&&se.setGlobalState(v.clippingPlanes,q),Je(E,X,q),He.updateMultisampleRenderTarget(ee),He.updateRenderTargetMipmap(ee),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let st=0,Nt=F.length;st<Nt;st++){const wt=F[st],yt=wt.object,ze=wt.geometry,Pt=wt.material,ft=wt.group;if(Pt.side===Vi&&yt.layers.test(q.layers)){const zn=Pt.side;Pt.side=On,Pt.needsUpdate=!0,At(yt,X,q,ze,Pt,ft),Pt.side=zn,Pt.needsUpdate=!0,Ke=!0}}Ke===!0&&(He.updateMultisampleRenderTarget(ee),He.updateRenderTargetMipmap(ee))}v.setRenderTarget(Me,xe,Ne),v.setClearColor(V,G),Ce!==void 0&&(q.viewport=Ce),v.toneMapping=Pe}function Je(E,F,X){const q=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ee=E.length;O<ee;O++){const oe=E[O],Me=oe.object,xe=oe.geometry,Ne=oe.group;let Pe=oe.material;Pe.allowOverride===!0&&q!==null&&(Pe=q),Me.layers.test(X.layers)&&At(Me,F,X,xe,Pe,Ne)}}function At(E,F,X,q,O,ee){E.onBeforeRender(v,F,X,q,O,ee),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,F,X,q,E,ee),O.transparent===!0&&O.side===Vi&&O.forceSinglePass===!1?(O.side=On,O.needsUpdate=!0,v.renderBufferDirect(X,F,q,O,E,ee),O.side=Sr,O.needsUpdate=!0,v.renderBufferDirect(X,F,q,O,E,ee),O.side=Vi):v.renderBufferDirect(X,F,q,O,E,ee),E.onAfterRender(v,F,X,q,O,ee)}function kt(E,F,X){F.isScene!==!0&&(F=Ee);const q=ge.get(E),O=p.state.lights,ee=p.state.shadowsArray,oe=O.state.version,Me=Z.getParameters(E,O.state,ee,F,X),xe=Z.getProgramCacheKey(Me);let Ne=q.programs;q.environment=E.isMeshStandardMaterial?F.environment:null,q.fog=F.fog,q.envMap=(E.isMeshStandardMaterial?pt:$e).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Q),Ne=new Map,q.programs=Ne);let Pe=Ne.get(xe);if(Pe!==void 0){if(q.currentProgram===Pe&&q.lightsStateVersion===oe)return Mt(E,Me),Pe}else Me.uniforms=Z.getUniforms(E),E.onBeforeCompile(Me,v),Pe=Z.acquireProgram(Me,xe),Ne.set(xe,Pe),q.uniforms=Me.uniforms;const Ce=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ce.clippingPlanes=se.uniform),Mt(E,Me),q.needsLights=bt(E),q.lightsStateVersion=oe,q.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=Pe,q.uniformsList=null,Pe}function Tt(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=tl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Mt(E,F){const X=ge.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function _t(E,F,X,q,O){F.isScene!==!0&&(F=Ee),He.resetTextureUnits();const ee=F.fog,oe=q.isMeshStandardMaterial?F.environment:null,Me=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Zs,xe=(q.isMeshStandardMaterial?pt:$e).get(q.envMap||oe),Ne=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!X.morphAttributes.position,Ke=!!X.morphAttributes.normal,st=!!X.morphAttributes.color;let Nt=mr;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const wt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=wt!==void 0?wt.length:0,ze=ge.get(q),Pt=p.state.lights;if(Ge===!0&&(K===!0||E!==x)){const mn=E===x&&q.id===S;se.setState(q,E,mn)}let ft=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Pt.state.version||ze.outputColorSpace!==Me||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==xe||q.fog===!0&&ze.fog!==ee||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==se.numPlanes||ze.numIntersection!==se.numIntersection)||ze.vertexAlphas!==Ne||ze.vertexTangents!==Pe||ze.morphTargets!==Ce||ze.morphNormals!==Ke||ze.morphColors!==st||ze.toneMapping!==Nt||ze.morphTargetsCount!==yt)&&(ft=!0):(ft=!0,ze.__version=q.version);let zn=ze.currentProgram;ft===!0&&(zn=kt(q,F,O));let is=!1,Hn=!1,na=!1;const Dt=zn.getUniforms(),ni=ze.uniforms;if(N.useProgram(zn.program)&&(is=!0,Hn=!0,na=!0),q.id!==S&&(S=q.id,Hn=!0),is||x!==E){N.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Dt.setValue(P,"projectionMatrix",E.projectionMatrix),Dt.setValue(P,"viewMatrix",E.matrixWorldInverse);const bn=Dt.map.cameraPosition;bn!==void 0&&bn.setValue(P,fe.setFromMatrixPosition(E.matrixWorld)),Ae.logarithmicDepthBuffer&&Dt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Hn=!0,na=!0)}if(O.isSkinnedMesh){Dt.setOptional(P,O,"bindMatrix"),Dt.setOptional(P,O,"bindMatrixInverse");const mn=O.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Dt.setValue(P,"boneTexture",mn.boneTexture,He))}O.isBatchedMesh&&(Dt.setOptional(P,O,"batchingTexture"),Dt.setValue(P,"batchingTexture",O._matricesTexture,He),Dt.setOptional(P,O,"batchingIdTexture"),Dt.setValue(P,"batchingIdTexture",O._indirectTexture,He),Dt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&Dt.setValue(P,"batchingColorTexture",O._colorsTexture,He));const ii=X.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&re.update(O,X,zn),(Hn||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,Dt.setValue(P,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ni.envMap.value=xe,ni.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&F.environment!==null&&(ni.envMapIntensity.value=F.environmentIntensity),Hn&&(Dt.setValue(P,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&kn(ni,na),ee&&q.fog===!0&&J.refreshFogUniforms(ni,ee),J.refreshMaterialUniforms(ni,q,H,Y,p.state.transmissionRenderTarget[E.id]),tl.upload(P,Tt(ze),ni,He)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(tl.upload(P,Tt(ze),ni,He),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(P,"center",O.center),Dt.setValue(P,"modelViewMatrix",O.modelViewMatrix),Dt.setValue(P,"normalMatrix",O.normalMatrix),Dt.setValue(P,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const mn=q.uniformsGroups;for(let bn=0,Cl=mn.length;bn<Cl;bn++){const Er=mn[bn];Ve.update(Er,zn),Ve.bind(Er,zn)}}return zn}function kn(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function bt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,F,X){const q=ge.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ge.get(E.texture).__webglTexture=F,ge.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const X=ge.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0};const pn=P.createFramebuffer();this.setRenderTarget=function(E,F=0,X=0){R=E,A=F,T=X;let q=!0,O=null,ee=!1,oe=!1;if(E){const xe=ge.get(E);if(xe.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(xe.__webglFramebuffer===void 0)He.setupRenderTarget(E);else if(xe.__hasExternalTextures)He.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ce=E.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&ge.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(oe=!0);const Pe=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[F])?O=Pe[F][X]:O=Pe[F],ee=!0):E.samples>0&&He.useMultisampledRTT(E)===!1?O=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?O=Pe[X]:O=Pe,D.copy(E.viewport),U.copy(E.scissor),z=E.scissorTest}else D.copy(ue).multiplyScalar(H).floor(),U.copy(Fe).multiplyScalar(H).floor(),z=it;if(X!==0&&(O=pn),N.bindFramebuffer(P.FRAMEBUFFER,O)&&q&&N.drawBuffers(E,O),N.viewport(D),N.scissor(U),N.setScissorTest(z),ee){const xe=ge.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe.__webglTexture,X)}else if(oe){const xe=F;for(let Ne=0;Ne<E.textures.length;Ne++){const Pe=ge.get(E.textures[Ne]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ne,Pe.__webglTexture,X,xe)}}else if(E!==null&&X!==0){const xe=ge.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xe.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(E,F,X,q,O,ee,oe,Me=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(xe=xe[oe]),xe){N.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Ne=E.textures[Me],Pe=Ne.format,Ce=Ne.type;if(!Ae.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-q&&X>=0&&X<=E.height-O&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Me),P.readPixels(F,X,q,O,be.convert(Pe),be.convert(Ce),ee))}finally{const Ne=R!==null?ge.get(R).__webglFramebuffer:null;N.bindFramebuffer(P.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,q,O,ee,oe,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(xe=xe[oe]),xe)if(F>=0&&F<=E.width-q&&X>=0&&X<=E.height-O){N.bindFramebuffer(P.FRAMEBUFFER,xe);const Ne=E.textures[Me],Pe=Ne.format,Ce=Ne.type;if(!Ae.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Me),P.readPixels(F,X,q,O,be.convert(Pe),be.convert(Ce),0);const st=R!==null?ge.get(R).__webglFramebuffer:null;N.bindFramebuffer(P.FRAMEBUFFER,st);const Nt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await jg(P,Nt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(Ke),P.deleteSync(Nt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,X=0){const q=Math.pow(2,-X),O=Math.floor(E.image.width*q),ee=Math.floor(E.image.height*q),oe=F!==null?F.x:0,Me=F!==null?F.y:0;He.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,oe,Me,O,ee),N.unbindTexture()};const ti=P.createFramebuffer(),$t=P.createFramebuffer();this.copyTextureToTexture=function(E,F,X=null,q=null,O=0,ee=null){ee===null&&(O!==0?(Za("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=O,O=0):ee=0);let oe,Me,xe,Ne,Pe,Ce,Ke,st,Nt;const wt=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(X!==null)oe=X.max.x-X.min.x,Me=X.max.y-X.min.y,xe=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Pe=X.min.y,Ce=X.isBox3?X.min.z:0;else{const ii=Math.pow(2,-O);oe=Math.floor(wt.width*ii),Me=Math.floor(wt.height*ii),E.isDataArrayTexture?xe=wt.depth:E.isData3DTexture?xe=Math.floor(wt.depth*ii):xe=1,Ne=0,Pe=0,Ce=0}q!==null?(Ke=q.x,st=q.y,Nt=q.z):(Ke=0,st=0,Nt=0);const yt=be.convert(F.format),ze=be.convert(F.type);let Pt;F.isData3DTexture?(He.setTexture3D(F,0),Pt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Pt=P.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Pt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const ft=P.getParameter(P.UNPACK_ROW_LENGTH),zn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),is=P.getParameter(P.UNPACK_SKIP_PIXELS),Hn=P.getParameter(P.UNPACK_SKIP_ROWS),na=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,wt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ne),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce);const Dt=E.isDataArrayTexture||E.isData3DTexture,ni=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const ii=ge.get(E),mn=ge.get(F),bn=ge.get(ii.__renderTarget),Cl=ge.get(mn.__renderTarget);N.bindFramebuffer(P.READ_FRAMEBUFFER,bn.__webglFramebuffer),N.bindFramebuffer(P.DRAW_FRAMEBUFFER,Cl.__webglFramebuffer);for(let Er=0;Er<xe;Er++)Dt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(E).__webglTexture,O,Ce+Er),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.get(F).__webglTexture,ee,Nt+Er)),P.blitFramebuffer(Ne,Pe,oe,Me,Ke,st,oe,Me,P.DEPTH_BUFFER_BIT,P.NEAREST);N.bindFramebuffer(P.READ_FRAMEBUFFER,null),N.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||ge.has(E)){const ii=ge.get(E),mn=ge.get(F);N.bindFramebuffer(P.READ_FRAMEBUFFER,ti),N.bindFramebuffer(P.DRAW_FRAMEBUFFER,$t);for(let bn=0;bn<xe;bn++)Dt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ii.__webglTexture,O,Ce+bn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ii.__webglTexture,O),ni?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mn.__webglTexture,ee,Nt+bn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mn.__webglTexture,ee),O!==0?P.blitFramebuffer(Ne,Pe,oe,Me,Ke,st,oe,Me,P.COLOR_BUFFER_BIT,P.NEAREST):ni?P.copyTexSubImage3D(Pt,ee,Ke,st,Nt+bn,Ne,Pe,oe,Me):P.copyTexSubImage2D(Pt,ee,Ke,st,Ne,Pe,oe,Me);N.bindFramebuffer(P.READ_FRAMEBUFFER,null),N.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ni?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Pt,ee,Ke,st,Nt,oe,Me,xe,yt,ze,wt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Pt,ee,Ke,st,Nt,oe,Me,xe,yt,wt.data):P.texSubImage3D(Pt,ee,Ke,st,Nt,oe,Me,xe,yt,ze,wt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ee,Ke,st,oe,Me,yt,ze,wt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ee,Ke,st,wt.width,wt.height,yt,wt.data):P.texSubImage2D(P.TEXTURE_2D,ee,Ke,st,oe,Me,yt,ze,wt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,is),P.pixelStorei(P.UNPACK_SKIP_ROWS,Hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,na),ee===0&&F.generateMipmaps&&P.generateMipmap(Pt),N.unbindTexture()},this.initRenderTarget=function(E){ge.get(E).__webglFramebuffer===void 0&&He.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?He.setTextureCube(E,0):E.isData3DTexture?He.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?He.setTexture2DArray(E,0):He.setTexture2D(E,0),N.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,N.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}const ks=[{slug:"seapedia",index:"01",title:"Seapedia",category:"Marketplace platform",year:"2026",medium:"React · Express · Prisma",summary:"A four-role marketplace built for COMPFEST 18: buyers, sellers, drivers and admins sharing one checkout, wallet and delivery system.",preview:{kind:"image",src:"/assets/projects/seapedia.webp"},overview:"Seapedia was built for the COMPFEST 18 Software Engineering Academy brief: a marketplace where users can buy, sell and deliver products. Each role gets its own dashboard, and the whole system shares one API: wallet top-ups, cart checkout, vouchers and promos, 12% PPN, delivery SLAs and admin monitoring.",problem:"Most marketplace demos stop at product cards. The difficult part is after checkout: a wallet that must not go negative, stock that must not oversell, tax calculated on the discounted total, and an SLA clock that needs a tested admin override.",objectives:["Make all four roles usable end to end: buyer, seller, driver, admin.","Keep checkout consistent: wallet charge, stock change and order creation in one flow.","Document the API and the setup well enough for another person to run it.","Deploy a working demo rather than a local-only repository."],role:["Fullstack: data model, API, authentication and role checks.","Frontend: React app, role dashboards and checkout flow.","Documentation: OpenAPI, environment setup and demo accounts."],stack:["TypeScript","React 19","Vite","Tailwind CSS v4","Node.js / Express","Prisma ORM","PostgreSQL (production) / SQLite (local)","JWT + bcrypt","Swagger / OpenAPI","Railway + Vercel"],process:[{step:"Schema first",detail:"Modelled users, roles, stores, products, carts, orders, wallet entries, discounts, deliveries and claims before writing the UI."},{step:"Auth and roles",detail:"JWT sessions carry the active role; middleware enforces access per route group, including delivery RBAC."},{step:"Build the API",detail:"Eleven route groups, Zod validation and consistent error responses. Swagger documents each group."},{step:"Build the surface",detail:"React dashboards for each role, with a role picker and switcher for accounts that hold more than one role."},{step:"Harden and ship",detail:"XSS sanitising for address and store text, phone validation, security headers, seed data and a Railway/Vercel deployment."}],challenges:[{problem:"A cart could mix products from different stores, which makes delivery and seller order processing ambiguous.",solution:"The cart API enforces a single-store rule and returns a clear 400 with the store already in the cart; the UI surfaces it before checkout."},{problem:"PPN must apply to the amount actually paid, not the pre-discount subtotal.",solution:"Tax is calculated as 12% of (subtotal − discount), and the checkout summary breaks out subtotal, delivery, discount and tax."},{problem:"Multi-role accounts can act as seller and buyer, but permissions must not leak between dashboards.",solution:"The active role is stored in the JWT and re-checked by middleware on every protected route; switching roles issues a fresh token."},{problem:"Delivery SLAs are time-based, and a real waiting period is impractical to test.",solution:"Admin-only time simulation advances the clock, then an overdue run refunds affected orders and moves them to the returned state."}],links:[{label:"Live demo",href:"https://seapedia-seven.vercel.app",note:"Vercel frontend, Railway API"},{label:"GitHub",href:"https://github.com/dpinlol/seapedia",note:"Source and README"},{label:"API docs",href:"https://seapedia-production-269b.up.railway.app/api-docs",note:"Swagger / OpenAPI"}]},{slug:"u-find2",index:"02",title:"u-FIND2",category:"Serverless port",year:"2026",medium:"Next.js · Upstash Redis",summary:"The Lost & Found system rebuilt for Vercel: same UI and workflow, with signed cookies, server actions and Redis instead of PHP sessions and MySQL.",preview:{kind:"study",variant:"lostfound"},overview:"u-FIND2 is a JavaScript port of an earlier PHP MVC app. The screens, copy and stylesheet were kept; the data layer, sessions and mutations were replaced so the app can run serverless on Vercel. Old index.php URLs redirect to their App Router equivalents.",problem:"The original app assumed a LAMP stack with a persistent MySQL connection. Hosting it meant keeping a server and database alive for a school project, and the session model did not fit an edge/serverless deployment.",objectives:["Preserve the existing interface and the verification workflow.","Run without a connection pool, on Vercel's serverless runtime.","Keep passwords hashed and sessions signed rather than storing user ids in plain cookies.","Keep old PHP URLs working through redirects."],role:["Porting: mapped the PHP routes and controllers to App Router routes.","Data modelling: designed Redis keys and index sets for users, items, claims and statuses.","Auth: bcrypt hashing and jose-signed session cookies."],stack:["Next.js 16 App Router","React 19","JavaScript","Upstash Redis (REST)","@upstash/redis","jose","bcryptjs","Vercel"],process:[{step:"Map the old app",detail:"Listed every PHP route, query and mutation, then matched each one to an App Router page, server action or redirect."},{step:"Model Redis",detail:"Used hashes for records, lists for ids and sets for status indexes, with explicit next-id counters and idempotent seeding."},{step:"Replace sessions",detail:"Signed, http-only cookies replace PHP sessions; login and registration hash passwords with bcrypt."},{step:"Keep the old URLs",detail:"next.config.js redirects index.php?page=… to the new routes so existing links and bookmarks still resolve."}],challenges:[{problem:"Redis has no joins or relational queries.",solution:"Index sets and id lists reconstruct the views; status changes update both the record hash and the status set in one pipeline."},{problem:"Serverless functions can be recycled at any time, so in-memory sessions are unsafe.",solution:"Sessions moved to signed JWTs in http-only cookies, with the secret supplied by the environment."},{problem:"The original UI expected form posts and redirects.",solution:"Server actions keep the same request/redirect rhythm, and a small flash module carries status messages across the redirect."}],links:[{label:"GitHub",href:"https://github.com/dpinlol/u-FIND2",note:"Source and setup notes"},{label:"Deployment",note:"The earlier Vercel URL is no longer live; the repository runs locally with Upstash credentials."}]},{slug:"u-find",index:"03",title:"U-Find",category:"Lost & found system",year:"2026",medium:"PHP · MySQL · MVC",summary:"A framework-free lost-and-found desk: students report items, an admin verifies them, and approved items can be claimed with a recorded decision.",preview:{kind:"study",variant:"lostfound"},overview:"U-Find is a native PHP application built on an explicit MVC structure: one front controller, controllers, models and views. Students report lost or found items; an admin approves or rejects reports and claims; approved items move through a visible status trail.",problem:"Lost items at school were handled through chat groups and noticeboards. There was no record of who reported an item, whether it was verified, or who claimed it.",objectives:["Give students one place to report lost and found items.","Give admins a review queue for reports and claims.","Make every item's status visible: pending, approved, rejected or claimed.","Build the MVC structure by hand rather than hiding it behind a framework."],role:["Solo build for a school assignment.","Database schema, controllers, models, views and styling.","Manual routing, validation and role checks."],stack:["PHP","MySQL","MySQLi","HTML","CSS","Laragon"],process:[{step:"Design the tables",detail:"Users, items and claims, with status fields for reports and claims and a reporter reference on each item."},{step:"Build the front controller",detail:"index.php requires the matching controller and calls its action; page parameters select login, register, user or admin views."},{step:"Implement the workflow",detail:"Report → pending → admin decision → approved/rejected; claim → pending → admin decision → claimed."},{step:"Build the two dashboards",detail:"Students see their reports and claims; admins see the review queue with the reporter column and approve/reject actions."}],challenges:[{problem:"Without a framework there is no router, ORM or built-in CSRF protection.",solution:"Routing stays in one front controller, queries sit in models, and every state-changing action re-checks the session role."},{problem:"A claim must not mark an item claimed until an admin approves it.",solution:"Claims have their own status; only an approved claim updates the item to CLAIMED, and rejected claims leave it available."}],links:[{label:"GitHub",href:"https://github.com/dpinlol/U-Find",note:"Source, SQL dump and setup notes"}]},{slug:"perpustakaan",index:"04",title:"Perpustakaan Sekolah",category:"Library application",year:"2026",medium:"Laravel · Blade · MySQL",summary:"A school library system built under exam conditions: two roles, book and member CRUD, and borrowing and returns with dates.",preview:{kind:"study",variant:"library"},overview:"Built for the UKK competency exam, this Laravel application covers the brief's full workflow: admin and student login, book and member management, borrowing and returns, and a responsive Bootstrap interface. Students can register themselves; admins manage the catalogue and transactions.",problem:"The library kept borrowing records on paper. The exam brief required a working digital system with two roles and a complete transaction history, built within three sessions.",objectives:["Implement role-based login for admin and student.","Provide CRUD for books, members and transactions.","Let students register, borrow and return books with dates.","Keep the database constraints honest: unique NIS, unique book code, restricted deletes."],role:["Solo build under exam conditions.","Migrations, models, controllers, Blade views and route protection.","Responsive Bootstrap layout."],stack:["Laravel 13","PHP 8.3","Blade","Bootstrap 5","MySQL","Vite","Tailwind CSS"],process:[{step:"Read the brief",detail:"Mapped each exam requirement (a–h) to a route, a controller action and a database table before coding."},{step:"Build the schema",detail:"Books keyed by kode_buku; members with unique NIS and user link; transactions referencing both with restricted deletes."},{step:"Split the roles",detail:"Admin routes cover books, members and transactions; student routes cover borrowing and returns. Middleware checks the role on every group."},{step:"Finish the interface",detail:"Bootstrap tables and forms, status alerts, and a login page that keeps the demo accounts visible."}],challenges:[{problem:"The exam time limit rewards shortcuts that would normally create data problems.",solution:"The schema keeps unique constraints and foreign keys; deletes are restricted when a book has transactions, rather than silently orphaning records."},{problem:"A return date must be recorded only when the book actually comes back.",solution:"tanggal_kembali stays nullable until the return action runs, and the student view shows the current state instead of a fake date."}],links:[{label:"GitHub",href:"https://github.com/dpinlol/Latihan_UKK_Devin_XIIPPLG2",note:"Source, migrations and setup notes"}]},{slug:"ruang-editing",index:"05",title:"Ruang Editing",category:"Creative study",year:"2026",medium:"Three.js · GSAP · Canvas",summary:"A film-production study site for class case studies 9 and 12: how frame size carries emotion, and how music and dialogue share a mix.",preview:{kind:"image",src:"/assets/projects/ruang-editing.webp"},overview:"Ruang Editing turns two film-production case studies into a scrollable interface. The first explains how shot size and aspect ratio direct emotion; the second explains how score and dialogue are balanced so both survive. A viewfinder HUD, a Three.js lens and a silent-film still carry the visual language.",problem:"Film theory is usually handed in as a document. The concepts are visual and temporal, so a text-only page loses the thing it is trying to explain.",objectives:["Make framing and sound-mixing decisions legible without a lecturer.","Use the interface itself as the example: crop marks, HUD, lens, timecode.","Keep the page usable on a phone and with reduced motion."],role:["Co-designed and built with Hosea for XII PPLG 2.","Frontend structure, motion and canvas/Three.js elements.","Content layout for both case studies."],stack:["HTML","CSS","JavaScript","GSAP","ScrollTrigger","Three.js","Canvas 2D"],process:[{step:"Choose the frame",detail:"A silent-film still and a camera HUD set the subject before any paragraph is read."},{step:"Build the lens",detail:"A canvas-drawn lens and a Three.js element respond to the pointer and scroll without hiding the text."},{step:"Write to the visuals",detail:"Each section pairs one concept with one visible comparison, rather than a wall of theory."},{step:"Test the quiet paths",detail:"Reduced motion and small screens keep the content readable when the effects are off."}],challenges:[{problem:"A dense HUD can make body copy unreadable over a photograph.",solution:"The HUD is confined to the edges, the image is scrimmed, and reading sections move to a solid paper background."},{problem:"Three.js and GSAP can both compete for scroll.",solution:"One scroll trigger owns the sequence; the 3D layer only reads progress and pointer state."}],links:[{label:"GitHub",href:"https://github.com/dpinlol/FILM",note:"Source and assets"}]}],Ey=`
  varying vec2 vArtUv;
`,Ty=`
  uniform float uReveal;
  uniform float uPreviewMix;
  uniform sampler2D uTop;
  uniform sampler2D uPreview;
  uniform float uTopOpacity;
  varying vec2 vArtUv;

  float artHash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
`,by=`
  #include <map_fragment>

  vec4 topSample = texture2D(uTop, vArtUv);
  float bristle = artHash(floor(vArtUv * vec2(190.0, 26.0)));
  float speckle = artHash(floor(vArtUv * vec2(58.0, 58.0)));
  float field = (1.0 - vArtUv.y) + (bristle - 0.5) * 0.05 + (speckle - 0.5) * 0.018;
  float front = uReveal * 1.2 - 0.1;
  float reveal = 1.0 - smoothstep(front - 0.14, front + 0.02, field);
  reveal *= topSample.a * uTopOpacity;

  vec3 painted = mix(diffuseColor.rgb, topSample.rgb, reveal);
  vec3 next = texture2D(uPreview, vArtUv).rgb;
  diffuseColor.rgb = mix(painted, next, uPreviewMix);
`;function wy(r){const{baseTexture:e,topTexture:t,previewTexture:n}=r,i={uReveal:{value:0},uPreviewMix:{value:0},uTop:{value:t},uPreview:{value:n},uTopOpacity:{value:1}},s=new Yn({map:e,roughness:.9,metalness:0,emissive:new at(13149050),emissiveIntensity:0});s.transparent=!0,s.onBeforeCompile=_=>{_.uniforms.uReveal=i.uReveal,_.uniforms.uPreviewMix=i.uPreviewMix,_.uniforms.uTop=i.uTop,_.uniforms.uPreview=i.uPreview,_.uniforms.uTopOpacity=i.uTopOpacity,_.vertexShader=Ey+_.vertexShader,_.vertexShader=_.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
  vArtUv = uv;`),_.fragmentShader=Ty+_.fragmentShader,_.fragmentShader=_.fragmentShader.replace("#include <map_fragment>",by)},s.customProgramCacheKey=()=>"art-of-becoming-canvas";const a=new Yn({map:r.linenTexture,color:14931650,roughness:.96,metalness:0});a.transparent=!0;const o=new Yn({color:4865068,roughness:.92,metalness:0});o.transparent=!0;const l=r.width,c=r.height,u=r.depth??.11,h=new yn(l,c,u),d=[a,a,a,a,s,o],f=new Ht(h,d);return f.castShadow=!0,f.receiveShadow=!0,{mesh:f,materials:d,front:s,side:a,uniforms:i}}function xm(r){return wy(r)}const Ia=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),Cn=(r,e,t)=>r+(e-r)*t,cr=(r,e,t)=>{const n=Ia((t-r)/(e-r));return n*n*(3-2*n)},Sm=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,Sl=(r,e,t)=>Sm(Ia((r-e)/(t-e))),ai=(r,e,t,n)=>Cn(r,e,1-Math.exp(-t*n));function Ay(r,e){if(e<=r[0].at){const n=r[0];return{position:n.position,target:n.target,fov:n.fov}}for(let n=1;n<r.length;n+=1){const i=r[n],s=r[n-1];if(e<=i.at){const a=Sm((e-s.at)/(i.at-s.at));return{position:[Cn(s.position[0],i.position[0],a),Cn(s.position[1],i.position[1],a),Cn(s.position[2],i.position[2],a)],target:[Cn(s.target[0],i.target[0],a),Cn(s.target[1],i.target[1],a),Cn(s.target[2],i.target[2],a)],fov:Cn(s.fov,i.fov,a)}}}const t=r[r.length-1];return{position:t.position,target:t.target,fov:t.fov}}function Mm(r){let e=r>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ta(r,e,t=7){const n=document.createElement("canvas");n.width=r,n.height=e;const i=n.getContext("2d");if(!i)throw new Error("Canvas 2D is not available");return{canvas:n,ctx:i,random:Mm(t)}}function io(r,e,t=!1){const n=new A0(r);return n.colorSpace=Rn,n.anisotropy=e,n.needsUpdate=!0,t&&(n.wrapS=Xa,n.wrapT=Xa),n}function ro(r,e=9e3,t=.05,n="81, 72, 62"){const{ctx:i,random:s}=r;i.save();for(let a=0;a<e;a+=1){const o=s()*i.canvas.width,l=s()*i.canvas.height,c=s()*1.6+.2;i.fillStyle=`rgba(${n}, ${t*(.35+s())})`,i.fillRect(o,l,c,c)}i.restore()}function Ry(r){const t=ta(768,768,11),{ctx:n,random:i}=t;n.fillStyle="#e9dfcc",n.fillRect(0,0,768,768);for(let s=0;s<768;s+=3){const a=.035+i()*.04;n.fillStyle=`rgba(81, 72, 62, ${a})`,n.fillRect(0,s,768,1),n.fillStyle=`rgba(255, 250, 236, ${a*1.25})`,n.fillRect(s,0,1,768)}for(let s=0;s<28;s+=1){const a=i()*768,o=i()*768,l=8+i()*90,c=n.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,`rgba(165, 138, 112, ${.018+i()*.035})`),c.addColorStop(1,"rgba(165, 138, 112, 0)"),n.fillStyle=c,n.fillRect(a-l,o-l,l*2,l*2)}return ro(t,22e3,.045),io(t.canvas,r,!0)}function Cy(r){const e=ta(512,512,23),{ctx:t,random:n}=e;t.fillStyle="#6d5138",t.fillRect(0,0,512,512);for(let i=0;i<190;i+=1){const s=n()*512,a=2+n()*9,o=.5+n()*2.2;t.beginPath(),t.strokeStyle=`rgba(${n()>.5?"38, 26, 17":"154, 122, 86"}, ${.05+n()*.16})`,t.lineWidth=o;for(let l=-10;l<=522;l+=8){const c=Math.sin(l*(.008+n()*.001)+i)*a,u=s+c*.15+Math.sin((l+i*37)*.004)*2;l===-10?t.moveTo(l,u):t.lineTo(l,u)}t.stroke()}for(let i=0;i<3;i+=1){const s=n()*512,a=n()*512;t.strokeStyle="rgba(38, 26, 17, .16)",t.lineWidth=1.2;for(let o=4;o<24;o+=4)t.beginPath(),t.ellipse(s,a,o*1.8,o,.3,0,Math.PI*2),t.stroke()}return ro(e,12e3,.06,"30, 20, 12"),io(e.canvas,r,!0)}function Py(r){const e=ta(768,768,41),{ctx:t,random:n}=e;t.fillStyle="#2c2a24",t.fillRect(0,0,768,768);const i=t.createLinearGradient(0,0,0,768);i.addColorStop(0,"rgba(83, 73, 58, .35)"),i.addColorStop(.55,"rgba(44, 42, 36, .08)"),i.addColorStop(1,"rgba(15, 14, 12, .42)"),t.fillStyle=i,t.fillRect(0,0,768,768);for(let s=0;s<120;s+=1){const a=n()*768,o=n()*768,l=20+n()*120,c=t.createRadialGradient(a,o,0,a,o,l);c.addColorStop(0,`rgba(120, 103, 82, ${.008+n()*.018})`),c.addColorStop(1,"rgba(120, 103, 82, 0)"),t.fillStyle=c,t.fillRect(a-l,o-l,l*2,l*2)}return ro(e,18e3,.06,"12, 11, 9"),io(e.canvas,r,!0)}function Dy(r){const e=ta(1280,1600,83),{ctx:t,random:n}=e;t.fillStyle="#e8dcc5",t.fillRect(0,0,1280,1600);for(let o=0;o<46;o+=1){const l=n()*1280,c=20+n()*130;t.fillStyle=`rgba(${n()>.62?"165, 138, 112":"216, 201, 179"}, ${.02+n()*.06})`,t.fillRect(l,0,c,1600)}const i=t.createLinearGradient(0,820,0,1600);i.addColorStop(0,"rgba(165, 138, 112, 0)"),i.addColorStop(.48,"rgba(165, 138, 112, .13)"),i.addColorStop(1,"rgba(122, 96, 73, .24)"),t.fillStyle=i,t.fillRect(0,820,1280,780),t.save(),t.translate(640,0),t.beginPath(),t.arc(-30,520,296,0,Math.PI*2),t.fillStyle="rgba(165, 138, 112, .13)",t.fill(),t.beginPath(),t.moveTo(-410,1600),t.bezierCurveTo(-380,1150,-260,1e3,-70,946),t.lineTo(70,946),t.bezierCurveTo(270,1e3,390,1160,420,1600),t.closePath(),t.fillStyle="rgba(198, 179, 151, .92)",t.fill(),t.strokeStyle="rgba(81, 72, 62, .85)",t.lineWidth=6,t.stroke(),t.beginPath(),t.moveTo(-72,848),t.bezierCurveTo(-66,928,-48,966,-30,990),t.lineTo(34,990),t.bezierCurveTo(54,960,68,918,70,846),t.closePath(),t.fillStyle="rgba(232, 218, 197, .98)",t.fill(),t.strokeStyle="rgba(81, 72, 62, .75)",t.lineWidth=4,t.stroke(),t.beginPath(),t.moveTo(-8,250),t.bezierCurveTo(116,244,196,338,198,488),t.bezierCurveTo(200,640,152,800,50,858),t.bezierCurveTo(8,882,-30,884,-66,866),t.bezierCurveTo(-162,812,-208,662,-206,508),t.bezierCurveTo(-204,352,-124,256,-8,250),t.closePath(),t.fillStyle="rgba(241, 231, 214, 1)",t.fill(),t.strokeStyle="rgba(81, 72, 62, .95)",t.lineWidth=5.5,t.stroke();const s=t.createRadialGradient(0,900,20,0,900,260);s.addColorStop(0,"rgba(81, 72, 62, .20)"),s.addColorStop(1,"rgba(81, 72, 62, 0)"),t.fillStyle=s,t.fillRect(-280,760,560,340),t.beginPath(),t.moveTo(-198,474),t.bezierCurveTo(-232,320,-154,208,-10,202),t.bezierCurveTo(102,198,190,268,202,390),t.bezierCurveTo(150,330,70,306,-18,320),t.bezierCurveTo(-104,334,-158,388,-198,474),t.closePath(),t.fillStyle="rgba(81, 72, 62, .78)",t.fill(),t.strokeStyle="rgba(81, 72, 62, .8)",t.lineWidth=3.4,t.beginPath(),t.moveTo(-112,526),t.bezierCurveTo(-52,546,20,548,104,516),t.stroke(),t.strokeStyle="rgba(81, 72, 62, .26)",t.lineWidth=2;for(let o=0;o<17;o+=1){const l=360+o*24;t.beginPath(),t.moveTo(-198+o*2,l),t.bezierCurveTo(-152+o,l+10,-148+o,l+34,-186+o*1.5,l+56),t.stroke()}t.beginPath(),t.moveTo(-360,1220),t.bezierCurveTo(-120,1140,170,1180,376,1090),t.bezierCurveTo(300,1270,-80,1330,-360,1220),t.closePath(),t.fillStyle="rgba(150, 116, 84, .58)",t.fill(),t.strokeStyle="rgba(81, 72, 62, .28)",t.lineWidth=3,t.beginPath(),t.moveTo(-286,1290),t.bezierCurveTo(-130,1340,120,1360,310,1280),t.stroke(),t.beginPath(),t.moveTo(-224,1470),t.bezierCurveTo(-80,1430,100,1430,246,1480),t.stroke(),t.beginPath(),t.moveTo(-120,1060),t.bezierCurveTo(-60,1180,-40,1330,-56,1460),t.strokeStyle="rgba(81, 72, 62, .18)",t.lineWidth=2.4,t.stroke(),t.beginPath(),t.moveTo(240,1410),t.bezierCurveTo(292,1360,300,1444,348,1392),t.strokeStyle="rgba(41, 40, 35, .82)",t.lineWidth=5,t.stroke(),t.restore();const a=t.createLinearGradient(0,1380,0,1600);a.addColorStop(0,"rgba(81, 72, 62, 0)"),a.addColorStop(1,"rgba(81, 72, 62, .16)"),t.fillStyle=a,t.fillRect(0,1380,1280,220);for(let o=0;o<90;o+=1){const l=n()*1280,c=1e3+n()*560,u=.8+n()*3.8;t.fillStyle=`rgba(81, 72, 62, ${.04+n()*.13})`,t.beginPath(),t.arc(l,c,u,0,Math.PI*2),t.fill()}for(let o=0;o<7;o+=1){const l=280+n()*720,c=30+n()*150;t.fillStyle=`rgba(81, 72, 62, ${.025+n()*.05})`,t.fillRect(l,900,1.5+n()*2,c)}ro(e,3e4,.045);for(let o=0;o<1600;o+=1){const l=n()*1280,c=n()*1600;t.fillStyle=`rgba(255, 250, 236, ${.01+n()*.022})`,t.fillRect(l,c,1,1)}return io(e.canvas,r)}function Ly(r,e,t,n,i,s){const a=Math.max(i/e.naturalWidth,s/e.naturalHeight),o=e.naturalWidth*a,l=e.naturalHeight*a,c=t+(i-o)/2,u=n;r.save(),r.beginPath(),r.rect(t,n,i,s),r.clip(),r.drawImage(e,c,u,o,l),r.restore()}function ym(r,e,t,n,i,s){r.fillStyle="#ffffff",r.fillRect(e,t,n,i),r.fillStyle="#e7e2d7",r.fillRect(e,t,n,46),["#d9a297","#d8c48f","#a9c0a5"].forEach((o,l)=>{r.fillStyle=o,r.beginPath(),r.arc(e+22+l*18,t+23,5,0,Math.PI*2),r.fill()}),r.fillStyle="#f7f4ec",r.fillRect(e+98,t+10,n-160,26),r.fillStyle="#8b8375",r.font="500 13px 'DM Sans', Arial, sans-serif",r.textAlign="left",r.fillText(s,e+112,t+28)}function Iy(r,e,t,n,i){ym(r,e,t,n,i,"lostandfound.app");const s=t+46,a=n;r.fillStyle="#f6fbf8",r.fillRect(e,s,a,i-46),r.fillStyle="#ffffff",r.fillRect(e,s,a,74),r.fillStyle="#0f766e",r.font="800 28px 'DM Sans', Arial, sans-serif",r.textAlign="left",r.fillText("Lost & Found",e+38,s+47),r.font="500 15px 'DM Sans', Arial, sans-serif",r.fillStyle="#134e4a",r.fillText("Beranda",e+a-330,s+45),r.fillText("Barang",e+a-242,s+45),r.fillStyle="#0f766e",r.fillRect(e+a-152,s+23,58,30),r.fillStyle="#ffffff",r.font="600 13px 'DM Sans', Arial, sans-serif",r.fillText("Masuk",e+a-140,s+43),r.strokeStyle="#0f766e",r.lineWidth=1.4,r.strokeRect(e+a-78,s+23,52,30),r.fillStyle="#0f766e",r.fillText("Daftar",e+a-66,s+43),r.fillStyle="#ffffff",r.fillRect(e,s+74,a,250),r.fillStyle="#134e4a",r.font="800 47px 'DM Sans', Arial, sans-serif",r.fillText("Temukan atau laporkan",e+38,s+160),r.fillStyle="#0f766e",r.fillText("barang hilang.",e+38,s+212),r.fillStyle="#64748b",r.font="400 17px 'DM Sans', Arial, sans-serif",r.fillText("Satu tempat untuk barang hilang dan temuan di sekolah.",e+38,s+248),r.fillStyle="#f0fdf9",r.strokeStyle="#cce7e0",r.lineWidth=1,r.fillRect(e+38,s+270,a-76,48),r.strokeRect(e+38,s+270,a-76,48),r.fillStyle="#94a3b8",r.font="400 15px 'DM Sans', Arial, sans-serif",r.fillText("Cari nama barang, lokasi, atau pelapor…",e+54,s+300);const o=[["Total laporan","2"],["Disetujui","1"],["Diklaim","0"]],l=(a-76-24)/3;o.forEach(([h,d],f)=>{const _=e+38+f*(l+12);r.fillStyle="#ffffff",r.fillRect(_,s+346,l,88),r.strokeStyle="#d7ece6",r.strokeRect(_,s+346,l,88),r.fillStyle="#64748b",r.font="500 12px 'DM Sans', Arial, sans-serif",r.fillText(h,_+18,s+375),r.fillStyle="#0f766e",r.font="800 30px 'DM Sans', Arial, sans-serif",r.fillText(d,_+18,s+412)});const c=[["Dompet Coklat","Hilang · Kantin","PENDING","Dompet kulit isi KTP"],["Kunci Motor","Ditemukan · Parkiran","APPROVED","Kunci Yamaha + gantungan"]],u=(a-76-18)/2;c.forEach(([h,d,f,_],g)=>{const m=e+38+g*(u+18),p=s+458,M=250;r.fillStyle="#ffffff",r.fillRect(m,p,u,M),r.strokeStyle="#d7ece6",r.strokeRect(m,p,u,M),r.fillStyle=g===0?"#ffe4e6":"#ccfbf1",r.fillRect(m,p,u,92),r.fillStyle=g===0?"#be123c":"#0f766e",r.font="800 30px 'DM Sans', Arial, sans-serif",r.fillText(g===0?"◇":"⌘",m+24,p+60),r.fillStyle="#134e4a",r.font="700 21px 'DM Sans', Arial, sans-serif",r.fillText(h,m+22,p+130),r.fillStyle="#64748b",r.font="400 14px 'DM Sans', Arial, sans-serif",r.fillText(d,m+22,p+156),r.fillText(_,m+22,p+180),r.fillStyle=f==="PENDING"?"#e11d48":"#0f766e",r.fillRect(m+22,p+204,f==="PENDING"?92:104,26),r.fillStyle="#ffffff",r.font="700 11px 'DM Sans', Arial, sans-serif",r.fillText(f,m+34,p+222)}),r.fillStyle="#f0fdf9",r.fillRect(e,t+i-58,a,58),r.fillStyle="#64748b",r.font="400 12px 'DM Sans', Arial, sans-serif",r.fillText("© 2026 Lost & Found · XII PPLG 2",e+38,t+i-24)}function Uy(r,e,t,n,i){ym(r,e,t,n,i,"perpustakaan.sekolah/admin/buku");const s=t+46;r.fillStyle="#f8f9fa",r.fillRect(e,s,n,i-46),r.fillStyle="#212529",r.fillRect(e,s,n,64),r.fillStyle="#ffffff",r.font="500 19px 'DM Sans', Arial, sans-serif",r.textAlign="left",r.fillText("Perpustakaan Sekolah Digital",e+34,s+39),r.font="400 14px 'DM Sans', Arial, sans-serif",r.fillStyle="#d3d3d3",r.fillText("Buku",e+n-330,s+38),r.fillText("Transaksi",e+n-278,s+38),r.fillText("Anggota",e+n-188,s+38),r.fillStyle="#ffffff",r.font="400 12px 'DM Sans', Arial, sans-serif",r.fillText("admin (admin)",e+n-110,s+37),r.fillStyle="#212529",r.font="600 28px 'DM Sans', Arial, sans-serif",r.fillText("Data Buku",e+34,s+120),r.fillStyle="#0d6efd",r.fillRect(e+n-168,s+92,134,38),r.fillStyle="#ffffff",r.font="500 14px 'DM Sans', Arial, sans-serif",r.fillText("+ Tambah Buku",e+n-152,s+117);const a=e+34,o=n-68,l=s+158;r.fillStyle="#ffffff",r.fillRect(a,l,o,46),r.strokeStyle="#dee2e6",r.lineWidth=1,r.strokeRect(a,l,o,46);const c=[["Kode",.11],["Judul",.32],["Pengarang",.52],["Penerbit",.7],["Tahun",.83],["Aksi",.92]];r.fillStyle="#495057",r.font="600 12px 'DM Sans', Arial, sans-serif",c.forEach(([h,d])=>{r.fillText(h,a+o*d-(d===.11?-16:0),l+28)});const u=[["BK001","Pemrograman Web Modern","Andi Rahman","Erlangga","2023"],["BK002","Basis Data untuk Pemula","Budi Santoso","Informatika","2022"],["BK003","Algoritma & Pemrograman","Citra Lestari","Grasindo","2024"]];u.forEach((h,d)=>{const f=l+46+d*58;r.fillStyle=d%2===1?"#f8f9fa":"#ffffff",r.fillRect(a,f,o,58),r.strokeStyle="#dee2e6",r.strokeRect(a,f,o,58),r.fillStyle="#495057",r.font="400 13px 'DM Sans', Arial, sans-serif",r.fillText(h[0],a+16,f+34),r.fillStyle="#212529",r.font="500 13px 'DM Sans', Arial, sans-serif",r.fillText(h[1],a+o*.32,f+34),r.font="400 13px 'DM Sans', Arial, sans-serif",r.fillStyle="#495057",r.fillText(h[2],a+o*.52,f+34),r.fillText(h[3],a+o*.7,f+34),r.fillText(h[4],a+o*.83,f+34),r.fillStyle="#0d6efd",r.fillRect(a+o*.9,f+14,44,28),r.fillStyle="#dc3545",r.fillRect(a+o*.9+50,f+14,44,28),r.fillStyle="#ffffff",r.font="500 10px 'DM Sans', Arial, sans-serif",r.fillText("Ubah",a+o*.9+8,f+32),r.fillText("Hapus",a+o*.9+56,f+32)}),r.fillStyle="#d1e7dd",r.fillRect(a,l+46+u.length*58+20,o,42),r.fillStyle="#0f5132",r.font="400 13px 'DM Sans', Arial, sans-serif",r.fillText("Data buku berhasil dimuat dari database.",a+16,l+46+u.length*58+47)}function Em(r,e,t,n,i,s){e==="lostfound"?Iy(r,t,n,i,s):Uy(r,t,n,i,s)}function Ny(r){const e=ta(1280,820,211);return e.ctx.fillStyle="#ffffff",e.ctx.fillRect(0,0,1280,820),Em(e.ctx,r,0,0,1280,820),e.canvas.toDataURL("image/jpeg",.9)}function Fy(r,e,t,n,i,s){r.fillStyle="#e5d8c1",r.fillRect(e,t,n,i),r.strokeStyle="rgba(81, 72, 62, .18)",r.lineWidth=1;for(let a=0;a<22;a+=1){const o=t+40+a*46;r.beginPath(),r.moveTo(e+40,o),r.bezierCurveTo(e+n*.35,o-22,e+n*.62,o+26,e+n-40,o-4),r.stroke()}r.fillStyle="rgba(81, 72, 62, .82)",r.font="300 220px 'Fraunces', Georgia, serif",r.textAlign="center",r.fillText(s,e+n/2,t+i/2+70)}function Oy(r,e,t){const n=ta(1280,1600,100+Number(r.index)),{ctx:i,random:s}=n;i.fillStyle="#ece2d0",i.fillRect(0,0,1280,1600);const a=i.createLinearGradient(0,0,1280,1600);a.addColorStop(0,"rgba(255, 250, 240, .28)"),a.addColorStop(.55,"rgba(216, 201, 179, .08)"),a.addColorStop(1,"rgba(165, 138, 112, .16)"),i.fillStyle=a,i.fillRect(0,0,1280,1600),i.fillStyle="#51483e",i.textAlign="left",i.font="500 22px 'DM Sans', Arial, sans-serif",i.fillText(r.index,80,92),i.textAlign="right",i.fillStyle="#8a6f57",i.fillText(r.year,1200,92);const o=80,l=128,c=1120,u=1040;i.fillStyle="#e2d5bf",i.fillRect(o-10,l-10,c+20,u+20),i.strokeStyle="rgba(81, 72, 62, .34)",i.lineWidth=1.5,i.strokeRect(o-10,l-10,c+20,u+20),r.preview.kind==="image"&&e?Ly(i,e,o,l,c,u):r.preview.kind==="image"?Fy(i,o,l,c,u,r.index):Em(i,r.preview.variant,o,l,c,u),i.fillStyle="rgba(242, 235, 221, .06)",i.fillRect(o,l,c,u),i.strokeStyle="rgba(242, 235, 221, .3)",i.lineWidth=1,i.strokeRect(o+.5,l+.5,c-1,u-1),i.textAlign="left",i.fillStyle="#292823",i.font="400 78px 'Fraunces', Georgia, serif",i.fillText(r.title,80,1292),i.fillStyle="#8a6f57",i.font="500 25px 'DM Sans', Arial, sans-serif",i.fillText(r.category.toUpperCase(),82,1344),i.fillStyle="#6a5f53",i.font="400 22px 'DM Sans', Arial, sans-serif",i.fillText(r.medium,82,1384),i.strokeStyle="rgba(81, 72, 62, .3)",i.lineWidth=1,i.beginPath(),i.moveTo(80,1450),i.lineTo(1200,1450),i.stroke(),i.fillStyle="#8a6f57",i.font="500 18px 'DM Sans', Arial, sans-serif",i.fillText("CASE STUDY",80,1492),i.textAlign="right",i.fillStyle="#51483e",i.font="italic 400 24px 'Fraunces', Georgia, serif",i.fillText("D.",1200,1494),ro(n,24e3,.042);for(let h=0;h<5;h+=1){const d=80+s()*1120,f=1410+s()*60;i.fillStyle=`rgba(165, 138, 112, ${.08+s()*.12})`,i.fillRect(d,f,6+s()*40,2+s()*5)}return io(n.canvas,t)}async function By(r){return new Promise(e=>{const t=new Image;t.decoding="async",t.onload=()=>e(t),t.onerror=()=>e(void 0),t.src=r})}function ky(r){const e=new xi,t=new Yn({map:Cy(r),color:10122834,roughness:.82,metalness:0}),n=new Yn({map:t.map,color:7164216,roughness:.88,metalness:0}),i=[t,n],s=(m,p,M,b=[0,0,0])=>{const v=new Ht(m,p);return v.position.set(...M),v.rotation.set(...b),v.castShadow=!0,v.receiveShadow=!0,e.add(v),v};s(new yn(.13,5.32,.13),n,[0,-.06,-.19]),s(new yn(.13,5.3,.13),t,[-1.52,-.08,-.44],[-.055,0,-.085]),s(new yn(.13,5.3,.13),t,[1.52,-.08,-.44],[-.055,0,.085]),s(new yn(2.85,.11,.12),n,[0,1.94,-.24]),s(new yn(2.55,.1,.11),n,[0,-2.12,-.42]),s(new yn(3.02,.11,.54),t,[0,-1.47,.08]),s(new yn(3.02,.16,.055),n,[0,-1.37,.34]),s(new yn(.055,.16,.42),n,[-1.49,-1.37,.14]),s(new yn(.055,.16,.42),n,[1.49,-1.37,.14]);const a=new xi,o=new Ht(new Bs(.016,.021,.86,10),new Yn({color:3811868,roughness:.6,metalness:.05}));o.rotation.z=Math.PI/2,o.position.x=.12,o.castShadow=!0,a.add(o);const l=new Ht(new Bs(.026,.022,.13,10),new Yn({color:12102293,roughness:.35,metalness:.6}));l.rotation.z=Math.PI/2,l.position.x=-.37,l.castShadow=!0,a.add(l);const c=new Ht(new bh(.032,.19,10),new Yn({color:8149825,roughness:.95}));c.rotation.z=Math.PI/2,c.position.x=-.53,c.castShadow=!0,a.add(c),a.position.set(-1.02,-1.39,.34),a.rotation.set(0,.08,.035),e.add(a);const u=new xi,h=new Ht(new Bs(.25,.25,.34,28),new Yn({color:5917498,roughness:.55,metalness:.4}));h.position.y=.17,h.castShadow=!0,h.receiveShadow=!0,u.add(h);const d=new Ht(new wh(.25,.016,8,32),new Yn({color:9272679,roughness:.4,metalness:.5}));d.rotation.x=Math.PI/2,d.position.y=.34,u.add(d);const f=new Ht(new Th(.235,32),new Yn({color:10189403,roughness:.85}));f.rotation.x=-Math.PI/2,f.position.y=.337,u.add(f),u.position.set(2.16,-2.72,.62),e.add(u);let _=1;const g=m=>{_=Math.max(0,Math.min(1,m)),i.forEach(p=>{p.transparent=_<.999,p.opacity=_}),e.visible=_>.005,e.traverse(p=>{if(p instanceof Ht&&!i.includes(p.material)){const M=p.material;M.transparent=_<.999,M.opacity=_}})};return g(1),{group:e,setOpacity:g}}const Ec=new B(0,.35,0),zy=1;function gd(r){const e=r?.86:1,t=r?.44:.5,n=r?.49:.55,i=r?.53:.6;return[{position:new B(-4.9*e,.16,-.55),rotation:new Ft(-.02,.32,.012),scale:t,phase:.4},{position:new B(-2.45*e,-.28,.12),rotation:new Ft(.018,.16,-.008),scale:n,phase:2.1},{position:new B(0,.12,.8),rotation:new Ft(-.014,0,.004),scale:i,phase:4.2},{position:new B(2.45*e,-.28,.12),rotation:new Ft(.018,-.16,.008),scale:n,phase:1.2},{position:new B(4.9*e,.16,-.55),rotation:new Ft(-.02,-.32,-.012),scale:t,phase:3.4}]}function Hy(){return[{position:new B(-.9,2.25,.1),rotation:new Ft(.02,.09,.01),scale:.46,phase:.6},{position:new B(.9,2.25,.05),rotation:new Ft(.02,-.09,-.01),scale:.46,phase:2.4},{position:new B(-.9,.15,.32),rotation:new Ft(.01,.07,.008),scale:.48,phase:4.1},{position:new B(.9,.15,.32),rotation:new Ft(.01,-.07,-.008),scale:.48,phase:1.6},{position:new B(0,-1.5,.35),rotation:new Ft(-.01,0,0),scale:.47,phase:3.2}]}function Vy(r,e,t,n){const i=new xi,s=[],a=[];let o=gd(!1);r.forEach((h,d)=>{const f=e[d];if(!f)return;const _=xm({width:2.8,height:3.5,depth:.11,baseTexture:f,topTexture:t,previewTexture:f,linenTexture:n});_.uniforms.uReveal.value=1,_.uniforms.uPreviewMix.value=0;const g=new xi;g.add(_.mesh),g.visible=!1,i.add(g);const m={project:h,artwork:_,group:g,slot:o[d],hover:0,current:{position:new B(0,.35,0),rotation:new Ft(0,0,0),scale:1}};a.push(_.mesh),_.mesh.userData.projectIndex=d,s.push(m)});const l=h=>{o=h?Hy():gd(window.innerWidth<1100),s.forEach((d,f)=>{d.slot=o[f]??o[o.length-1]})};return l(window.innerWidth<860),{group:i,meshes:a,update:(h,d,f,_)=>{const g=cr(.9,1,h),m=cr(.885,.94,h);s.forEach((p,M)=>{const b=.655+M*.005,w=Sl(h,b,.885),A=p.slot,T=Math.sin(w*Math.PI),R=new B(Cn(Ec.x,A.position.x,w)+T*(M-2)*.11,Cn(Ec.y,A.position.y,w)+T*.16,Cn(Ec.z,A.position.z,w)+T*.32),S=Cn(zy,A.scale,w)*(1+p.hover*.09),x=new Ft(Cn(0,A.rotation.x,w)*(1-p.hover),Cn(0,A.rotation.y,w)*(1-p.hover),A.rotation.z),D=p.artwork.mesh.userData.hovered===!0?m:0;p.hover=_?D:ai(p.hover,D,9,d),p.hover>.01&&(R.z+=p.hover*.5,R.y+=p.hover*.06),!_&&g>.001&&(R.x+=Math.sin(f*.42+A.phase)*.012*g,R.y+=Math.sin(f*.56+A.phase*1.3)*.032*g,x.z+=Math.sin(f*.38+A.phase)*.007*g);const U=_?1e3:8,z=_?1e3:7;p.current.position.x=ai(p.current.position.x,R.x,U,d),p.current.position.y=ai(p.current.position.y,R.y,U,d),p.current.position.z=ai(p.current.position.z,R.z,U,d),p.current.rotation.x=ai(p.current.rotation.x,x.x,z,d),p.current.rotation.y=ai(p.current.rotation.y,x.y,z,d),p.current.rotation.z=ai(p.current.rotation.z,x.z,z,d),p.current.scale=ai(p.current.scale,S,U,d),p.group.position.copy(p.current.position),p.group.rotation.copy(p.current.rotation),p.group.scale.setScalar(p.current.scale);const V=Sl(h,.72+M*.011,.865);p.artwork.uniforms.uPreviewMix.value=V,p.artwork.front.emissiveIntensity=p.hover*.16,p.artwork.side.emissiveIntensity=p.hover*.06,p.group.visible=h>.648})},setHover:h=>{s.forEach((d,f)=>{d.artwork.mesh.userData.hovered=f===h})},getEntry:h=>s[h],setMobile:l}}function Gy(r,e){const t=new xi,n=new Ht(new Zr(54,26),new Yn({map:Py(r),color:9077624,roughness:1,metalness:0}));n.position.set(0,4.2,-8.2),n.receiveShadow=!0,t.add(n);const i=new Ht(new Zr(70,70),new Yn({color:2565407,roughness:.97,metalness:0}));i.rotation.x=-Math.PI/2,i.position.set(0,-2.72,0),i.receiveShadow=!0,t.add(i);const s=new Ht(new Zr(15,11),new Mh({color:7298375,transparent:!0,opacity:.12,depthWrite:!1,blending:$c}));s.rotation.x=-Math.PI/2,s.position.set(.4,-2.709,.4),t.add(s);const a=new P0(15919832,1775893,.5);t.add(a);const o=new F0(16774111,.16);t.add(o);const l=new Vf(16771012,220,22,.52,.82,2);l.position.set(-4.4,6.2,5.4),l.target.position.set(.1,.1,0),l.castShadow=!0,l.shadow.mapSize.set(e?768:1280,e?768:1280),l.shadow.camera.near=2,l.shadow.camera.far=24,l.shadow.camera.fov=34,l.shadow.bias=-8e-4,l.shadow.normalBias=.025,t.add(l),t.add(l.target);const c=new N0(14207411,.5);c.position.set(5.5,2.4,4.2),t.add(c);const u=new Vf(13081453,65,20,.7,1,2);u.position.set(4.4,3.2,-4.8),u.target.position.set(0,.7,0),t.add(u),t.add(u.target);const h=new I0(16767144,0,5.5,2);h.position.set(0,.5,2),t.add(h);const d=e?90:190,f=Mm(97),_=new Float32Array(d*3),g=new Float32Array(d);for(let v=0;v<d;v+=1)_[v*3]=(f()-.5)*16,_[v*3+1]=-1.8+f()*7,_[v*3+2]=-5.5+f()*12,g[v]=f()*Math.PI*2;const m=new fi;m.setAttribute("position",new Mi(_,3));const p=new w0(m,new um({color:15918281,size:.022,transparent:!0,opacity:.4,depthWrite:!1,sizeAttenuation:!0}));t.add(p);const M=_.slice();return{group:t,keyLight:l,hoverLight:h,update:v=>{const w=m.getAttribute("position"),A=w.array;for(let T=0;T<d;T+=1){const R=g[T];A[T*3]=M[T*3]+Math.sin(v*.075+R)*.24,A[T*3+1]=M[T*3+1]+Math.sin(v*.055+R*1.7)*.16,A[T*3+2]=M[T*3+2]+Math.cos(v*.05+R)*.14}w.needsUpdate=!0}}}function vd(r){return r?[{at:0,position:[0,.28,13.6],target:[0,.3,0],fov:32},{at:.16,position:[0,.2,12.3],target:[0,.24,0],fov:32},{at:.33,position:[0,.1,11.6],target:[0,.1,0],fov:33},{at:.46,position:[0,-1.15,13.6],target:[0,-1.15,0],fov:33},{at:.62,position:[0,-1.12,13.3],target:[0,-1.12,0],fov:33},{at:.71,position:[0,.2,11.8],target:[0,.15,0],fov:34},{at:.86,position:[0,.65,11.5],target:[0,.65,0],fov:46},{at:1,position:[0,.65,11],target:[0,.65,0],fov:46}]:[{at:0,position:[0,.3,10.8],target:[0,.14,0],fov:32},{at:.16,position:[0,.2,9.3],target:[0,.14,0],fov:32},{at:.33,position:[-.95,.04,9.2],target:[-.95,.02,0],fov:33},{at:.46,position:[-1.3,-.04,8.8],target:[-1.3,-.04,0],fov:33},{at:.62,position:[-1.28,-.04,8.6],target:[-1.28,-.04,0],fov:33},{at:.71,position:[0,.24,9.6],target:[0,.16,0],fov:34},{at:.86,position:[0,.46,11.6],target:[0,.12,0],fov:34},{at:1,position:[0,.5,11.1],target:[0,.12,0],fov:34}]}class Ch{canvas;renderer;scene;camera;studio;easel;mainArtwork;mainGroup;gallery;raycaster=new k0;pointerNdc=new ct;clock=new B0;options;cameraKeys;mobile;targetProgress=0;currentProgress=0;reducedMotion;hovered=null;pointer={x:0,y:0,smoothX:0,smoothY:0,downX:0,downY:0,downTime:0,downId:-1};active=!0;running=!1;frameId=0;destroyed=!1;ready=!1;lastReported=-1;hoverLightLevel=0;resizeTimer=0;constructor(e,t){this.options=e,this.canvas=e.canvas,this.renderer=t.renderer,this.scene=t.scene,this.camera=t.camera,this.studio=t.studio,this.easel=t.easel,this.mainArtwork=t.mainArtwork,this.mainGroup=t.mainGroup,this.gallery=t.gallery,this.reducedMotion=e.reducedMotion,this.mobile=window.innerWidth<860,this.cameraKeys=vd(this.mobile),this.bind(),this.resize(),this.applyProgress(0,0,!0),this.renderer.render(this.scene,this.camera),this.ready=!0,this.options.onReady?.(),this.start()}static async create(e){const t=new yy({canvas:e.canvas,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"}),n=window.innerWidth<860;t.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.5:1.75)),t.outputColorSpace=Rn,t.toneMapping=Wp,t.toneMappingExposure=1.08,t.shadowMap.enabled=!0,t.shadowMap.type=Vp;const i=new y0;i.background=new at(2170651),i.fog=new yh(2170651,13,30);const s=new Pn(32,1,.1,80),a=Math.min(t.capabilities.getMaxAnisotropy(),n?4:8),o=Ry(a),l=Dy(a),c=Gy(a,n),u=ky(a),h=await Promise.all(ks.map(async M=>{if(M.preview.kind!=="image")return[M.slug,void 0];const b=await By(M.preview.src);return[M.slug,b]})),d=new Map(h),f=ks.map(M=>Oy(M,d.get(M.slug),a)),_=xm({width:2.8,height:3.5,depth:.11,baseTexture:o,topTexture:l,previewTexture:l,linenTexture:o}),g=new xi;g.position.set(0,.35,0),g.add(_.mesh);const m=Vy(ks,f,l,o);return i.add(c.group),i.add(u.group),i.add(g),i.add(m.group),new Ch(e,{renderer:t,scene:i,camera:s,studio:c,easel:u,mainArtwork:_,mainGroup:g,gallery:m})}bind(){this.canvas.addEventListener("pointermove",this.onPointerMove,{passive:!0}),this.canvas.addEventListener("pointerleave",this.onPointerLeave),this.canvas.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),this.canvas.addEventListener("pointerup",this.onPointerUp),this.canvas.addEventListener("pointercancel",this.onPointerLeave),document.addEventListener("visibilitychange",this.onVisibility),window.addEventListener("resize",this.onResize,{passive:!0})}onPointerMove=e=>{const t=this.canvas.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*2-1,i=-((e.clientY-t.top)/t.height*2-1);this.pointer.x=Ia(n,-1,1),this.pointer.y=Ia(i,-1,1),this.pointerNdc.set(this.pointer.x,this.pointer.y),e.pointerType!=="touch"&&this.updateHover()};onPointerLeave=()=>{this.setHovered(null),this.pointer.x=0,this.pointer.y=0,this.pointerNdc.set(0,0)};onPointerDown=e=>{this.pointer.downX=e.clientX,this.pointer.downY=e.clientY,this.pointer.downTime=performance.now(),this.pointer.downId=e.pointerId};onPointerUp=e=>{if(this.pointer.downId!==e.pointerId)return;const t=Math.hypot(e.clientX-this.pointer.downX,e.clientY-this.pointer.downY),n=performance.now()-this.pointer.downTime;if(this.currentProgress<.88||t>14||n>900)return;const i=this.raycastProject(e.clientX,e.clientY);i!==null&&this.options.onOpenProject?.(i)};onVisibility=()=>{document.hidden?this.stop():this.active&&this.start()};onResize=()=>{window.clearTimeout(this.resizeTimer),this.resizeTimer=window.setTimeout(()=>this.resize(),120)};updateHover(){if(this.currentProgress<.88){this.setHovered(null);return}const e=this.canvas.getBoundingClientRect(),t=e.left+(this.pointer.x+1)/2*e.width,n=e.top+(-this.pointer.y+1)/2*e.height;this.setHovered(this.raycastProject(t,n))}raycastProject(e,t){const n=this.canvas.getBoundingClientRect();this.pointerNdc.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height*2-1)),this.raycaster.setFromCamera(this.pointerNdc,this.camera);const i=this.gallery.meshes.filter(l=>l.parent?.visible===!0),a=this.raycaster.intersectObjects(i,!1)[0];if(!a)return null;const o=a.object.userData.projectIndex;return typeof o=="number"?o:null}setHovered(e){this.hovered!==e&&(this.hovered=e,this.gallery.setHover(e),this.options.onHover?.(e))}setProgress(e){this.targetProgress=Ia(e),this.reducedMotion&&(this.currentProgress=this.targetProgress,this.applyProgress(this.currentProgress,0,!0))}setReducedMotion(e){this.reducedMotion=e,e&&(this.currentProgress=this.targetProgress,this.applyProgress(this.currentProgress,0,!0))}highlightProject(e){this.currentProgress<.86||this.setHovered(e)}clearHighlight(){this.setHovered(null)}setActive(e){this.active=e,e?this.start():(this.setHovered(null),this.stop())}resize(){const e=window.innerWidth,t=window.innerHeight,n=e<860,i=Math.min(window.devicePixelRatio||1,n?1.5:1.75);this.mobile=n,this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.cameraKeys=vd(n),this.gallery.setMobile(n),this.applyProgress(this.currentProgress,0,!0),this.ready&&this.renderer.render(this.scene,this.camera)}start(){this.running||this.destroyed||(this.running=!0,this.clock.start(),this.frameId=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.frameId)}applyProgress(e,t,n=!1){const i=Sl(e,.26,.5);this.mainArtwork.uniforms.uReveal.value=i;const a=1-Sl(e,.665,.74);this.mainArtwork.materials.forEach(u=>{u.opacity=a}),this.mainArtwork.front.emissiveIntensity=0,this.mainGroup.visible=a>.004,this.easel.setOpacity(a),this.gallery.group.visible=e>.64,this.gallery.update(e,t,this.clock.elapsedTime,this.reducedMotion);const o=Ay(this.cameraKeys,e),l=this.reducedMotion?0:.12;if(this.pointer.smoothX=ai(this.pointer.smoothX,this.pointer.x,4,n?1:t),this.pointer.smoothY=ai(this.pointer.smoothY,this.pointer.y,4,n?1:t),this.camera.position.set(o.position[0]+this.pointer.smoothX*l,o.position[1]+this.pointer.smoothY*l*.55,o.position[2]),this.camera.lookAt(o.target[0],o.target[1],o.target[2]),Math.abs(this.camera.fov-o.fov)>.01&&(this.camera.fov=o.fov,this.camera.updateProjectionMatrix()),this.hovered!==null){const u=this.gallery.getEntry(this.hovered);u&&this.studio.hoverLight.position.set(u.group.position.x,u.group.position.y+.35,u.group.position.z+1.2)}const c=this.hovered!==null&&e>.88?17:0;this.hoverLightLevel=n?c:ai(this.hoverLightLevel,c,6,t),this.studio.hoverLight.intensity=this.hoverLightLevel,(!this.ready||Math.abs(e-this.lastReported)>.0015||e===this.targetProgress)&&(this.lastReported=e,this.options.onProgress?.(e))}frame=()=>{if(!this.running)return;const e=Math.min(this.clock.getDelta(),.05),t=this.clock.elapsedTime;this.reducedMotion?this.currentProgress=this.targetProgress:(this.currentProgress=ai(this.currentProgress,this.targetProgress,6.5,e),Math.abs(this.currentProgress-this.targetProgress)<4e-4&&(this.currentProgress=this.targetProgress)),this.applyProgress(this.currentProgress,e),this.studio.update(t),!this.reducedMotion&&this.currentProgress>.88&&this.pointer.x!==0&&this.updateHover(),this.renderer.render(this.scene,this.camera),this.frameId=requestAnimationFrame(this.frame)};destroy(){this.destroyed=!0,this.stop(),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointercancel",this.onPointerLeave),document.removeEventListener("visibilitychange",this.onVisibility),window.removeEventListener("resize",this.onResize),window.clearTimeout(this.resizeTimer),this.renderer.dispose()}}const Wy=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;function De(r,e,t){const n=document.createElement(r);return e&&(n.className=e),t&&(n.textContent=t),n}function fa(r,e){const t=De("h3");return t.append(De("span",void 0,r),document.createTextNode(e)),t}function Xy(r){const e=De("figure","case-preview"),t=De("img");if(r.preview.kind==="image"){t.src=r.preview.src,t.alt=`${r.title} interface`;const n=De("figcaption");n.append(De("span",void 0,"Captured from the running build"),De("span",void 0,r.year)),e.append(t,n)}else{t.src=Ny(r.preview.variant),t.alt=`${r.title} interface study, redrawn from the application layout`,e.append(t);const n=De("figcaption");n.append(De("span",void 0,"Interface study, redrawn from the application layout"),De("span",void 0,"Not a live screenshot")),e.append(n)}return e}function Yy(r){const e=De("aside","case-aside");e.append(De("h3",void 0,"Details"));const t=De("dl","case-meta"),n=(l,c)=>{const u=De("div");u.append(De("dt",void 0,l)),c.forEach(h=>u.append(De("dd",void 0,h))),t.append(u)};n("Year",[r.year]),n("Medium",[r.medium]),n("Role",r.role),e.append(t);const i=De("div","case-group");i.append(De("h3",void 0,"Materials"));const s=De("ul","case-tags");r.stack.forEach(l=>s.append(De("li",void 0,l))),i.append(s),e.append(i);const a=De("div","case-group");a.append(De("h3",void 0,"Links"));const o=De("div","case-links");return r.links.forEach(l=>{if(l.href){const c=De("a");c.href=l.href,c.target="_blank",c.rel="noreferrer",c.append(De("b",void 0,l.label),De("small",void 0,l.note)),o.append(c)}else{const c=De("span");c.append(De("b",void 0,l.label),De("small",void 0,l.note)),o.append(c)}}),a.append(o),e.append(a),e.append(De("p","case-note","Written from the project's source and documentation. Interface images are labelled where they are studies rather than captures.")),e}function qy(r){const e=De("article","case-doc"),t=De("header","case-top"),n=De("div"),i=De("div","case-kicker");i.append(De("span",void 0,r.index),De("span",void 0,r.category),De("span",void 0,r.year));const s=De("h2","case-title",r.title);s.id="caseTitle",n.append(i,s),t.append(n,De("p","case-summary",r.summary)),e.append(t,Xy(r));const a=De("div","case-grid"),o=De("div","case-main"),l=De("section","case-block");l.append(fa("01","Overview"),De("p",void 0,r.overview)),o.append(l);const c=De("section","case-block");c.append(fa("02","The problem"),De("p",void 0,r.problem)),o.append(c);const u=De("section","case-block");u.append(fa("03","Objectives"));const h=De("ul","case-list");r.objectives.forEach(g=>h.append(De("li",void 0,g))),u.append(h),o.append(u);const d=De("section","case-block");d.append(fa("04","Process"));const f=De("ol","case-steps");r.process.forEach(g=>{const m=De("li"),p=De("div","case-step-content");p.append(De("b",void 0,g.step),De("span",void 0,g.detail)),m.append(p),f.append(m)}),d.append(f),o.append(d);const _=De("section","case-block");return _.append(fa("05","Decisions worth explaining")),r.challenges.forEach(g=>{const m=De("div","case-challenge");m.append(De("b",void 0,g.problem),De("p",void 0,g.solution)),_.append(m)}),o.append(_),a.append(o,Yy(r)),e.append(a),e}function $y(){const r=document.getElementById("caseStudy"),e=document.getElementById("caseContent"),t=document.getElementById("caseClose");if(!(r instanceof HTMLDialogElement)||!e){const l=()=>{};return{open:l,close:l}}let n=null,i=0;const s=()=>{window.clearTimeout(i),r.classList.remove("is-closing"),r.open&&r.close(),document.body.classList.remove("case-open"),n&&document.contains(n)&&n.focus({preventScroll:!0}),n=null},a=()=>{!r.open||r.classList.contains("is-closing")||(r.classList.add("is-closing"),i=window.setTimeout(s,Wy()?0:380))},o=(l,c)=>{const u=ks[l];u&&(window.clearTimeout(i),r.classList.remove("is-closing"),e.replaceChildren(qy(u)),e.scrollTop=0,n=c,document.body.classList.add("case-open"),r.open||r.showModal(),t?.focus({preventScroll:!0}))};return t?.addEventListener("click",a),r.addEventListener("cancel",l=>{l.preventDefault(),a()}),r.addEventListener("click",l=>{l.target===r&&a()}),{open:o,close:a}}const zs={location:"Indonesia",availability:"Open to internships and junior roles",email:"devinleez99@gmail.com",about:["I am a software engineering student in XII PPLG 2. Most of what I know comes from building things that had to work: a lost-and-found desk for school, a library system under exam time, a four-role marketplace for COMPFEST 18.","I like the unglamorous middle of a project — schema design, role checks, the checkout edge cases — and I like the surface to feel considered too. Good type, a clear hierarchy, and motion that explains rather than decorates.","Right now I am looking for an internship or junior role on a real product with people who review code carefully."],skills:[{title:"Languages",note:"Read and written day to day",items:["TypeScript","JavaScript","PHP","SQL","Python"]},{title:"Frontend",note:"The surface and its behaviour",items:["React","Next.js","Vite","Tailwind CSS","Three.js","GSAP","Semantic HTML & CSS"]},{title:"Backend",note:"APIs, auth and data flow",items:["Node.js","Express","Laravel","Prisma","JWT & sessions","REST","Zod"]},{title:"Data",note:"Where the state lives",items:["PostgreSQL","MySQL","SQLite","Upstash Redis"]},{title:"Tools",note:"Shipping and collaboration",items:["Git & GitHub","Docker","Vercel","Railway","Swagger / OpenAPI","Figma"]},{title:"Practice",note:"How the work gets made",items:["MVC structure","Role-based access","Accessibility basics","Responsive layout","Interface illustration"]}],experience:[{period:"2026",title:"COMPFEST 18 — Software Engineering Academy",context:"Participant · Seapedia",detail:"Designed and built a fullstack multi-role marketplace against the academy brief: wallet checkout, vouchers, 12% tax, delivery SLAs and admin monitoring."},{period:"2026",title:"UKK — Perpustakaan Sekolah Digital",context:"Competency exam · Laravel",detail:"Built a school library system inside the exam's three-session limit: two roles, book and member CRUD, borrowing and returns with dates."},{period:"2026",title:"Ruang Editing",context:"Collaboration · with Hosea",detail:"A film-production study site for class case studies 9 and 12, translating framing and sound-mixing theory into a scrollable, cinematic interface."},{period:"2025—2026",title:"School and independent builds",context:"Lost & Found, then its Next.js port",detail:"Built the same lost-and-found workflow twice: first as a framework-free PHP MVC app, then as a serverless Next.js port on Upstash Redis."}]};function Vt(r,e,t){const n=document.createElement(r);return e&&(n.className=e),t&&(n.textContent=t),n}function Ky(){const r=document.getElementById("aboutCopy");r&&zs.about.forEach(n=>r.append(Vt("p",void 0,n)));const e=document.getElementById("aboutLedger");if(!e)return;[["Based",zs.location],["Status",zs.availability],["Focus","Fullstack web, interfaces and the systems behind them"]].forEach(([n,i])=>{const s=Vt("div");s.append(Vt("dt",void 0,n),Vt("dd",void 0,i)),e.append(s)})}function Zy(){const r=document.getElementById("skillsList");r&&zs.skills.forEach(e=>{const t=Vt("section","skill-group"),n=Vt("header");n.append(Vt("h3",void 0,e.title),Vt("p",void 0,e.note));const i=Vt("ul","skill-items");e.items.forEach(s=>i.append(Vt("li",void 0,s))),t.append(n,i),r.append(t)})}function jy(){const r=document.getElementById("timeline");r&&zs.experience.forEach(e=>{const t=Vt("li"),n=Vt("div");n.append(Vt("h3",void 0,e.title),Vt("p","timeline-context",e.context)),t.append(Vt("p","timeline-period",e.period),n,Vt("p","timeline-detail",e.detail)),r.append(t)})}function Jy(r){const e=document.getElementById("fallbackProjects");e&&ks.forEach((t,n)=>{const i=Vt("li"),s=Vt("button","fallback-link","Read the case study");s.type="button",s.setAttribute("aria-haspopup","dialog"),s.addEventListener("click",()=>r.onOpenProject(n,s)),i.append(Vt("p","eyebrow",`${t.index} · ${t.category}`),Vt("h3",void 0,t.title),Vt("p",void 0,t.summary),s),e.append(i)})}function Qy(){const r=document.getElementById("copyEmail"),e=document.getElementById("copyStatus");if(!r||!e)return;let t=0;r.addEventListener("click",()=>{const n=i=>{e.textContent=i,window.clearTimeout(t),t=window.setTimeout(()=>{e.textContent=""},4e3)};navigator.clipboard.writeText(zs.email).then(()=>n("Copied to clipboard.")).catch(()=>n("Copy failed — select the address above."))})}function eE(){const r=Array.from(document.querySelectorAll(".reveal"));if(!("IntersectionObserver"in window)){r.forEach(t=>t.classList.add("is-in"));return}const e=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(n.target.classList.add("is-in"),e.unobserve(n.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.05});r.forEach(t=>e.observe(t))}function tE(r){Ky(),Zy(),jy(),Jy(r),Qy(),eE()}const Tc=(r,e,t,n,i)=>{const s=cr(e,t,r),a=cr(n,i,r);return s*(1-a)};function nE(r){const e=new Map;document.querySelectorAll("[data-scene]").forEach(p=>{const M=p.dataset.scene;M&&e.set(M,p)});const t=e.get("intro"),n=e.get("approach"),i=e.get("portrait"),s=e.get("transform"),a=e.get("gallery"),o=document.getElementById("scrollCue"),l=document.querySelector(".stage-caption"),c=Array.from(document.querySelectorAll("[data-chapter]")),u=document.querySelector(".chapter-rail"),h=document.getElementById("railProgress"),d=document.getElementById("projectIndex"),f=[];d&&ks.forEach((p,M)=>{const b=document.createElement("li"),v=document.createElement("button");v.type="button",v.setAttribute("aria-haspopup","dialog"),v.setAttribute("aria-label",`Open ${p.title} case study`),v.innerHTML=`<span>${p.index}</span>${p.title}`,v.addEventListener("mouseenter",()=>r.onHoverProject(M)),v.addEventListener("mouseleave",()=>r.onHoverProject(null)),v.addEventListener("focus",()=>r.onHoverProject(M)),v.addEventListener("blur",()=>r.onHoverProject(null)),v.addEventListener("click",()=>r.onOpenProject(M,v)),b.appendChild(v),d.appendChild(b),f.push(v)});const _=(p,M,b=16)=>{p&&(p.style.opacity=M.toFixed(3),p.style.visibility=M>.005?"visible":"hidden",p.style.translate=`0 ${((1-M)*b).toFixed(2)}px`,p===a&&(p.inert=M<.35))},g=p=>{f.forEach((M,b)=>M.classList.toggle("is-active",b===p))},m=p=>{const M=1-cr(.12,.2,p),b=Tc(p,.21,.26,.3,.34),v=Tc(p,.36,.43,.6,.66),w=Tc(p,.67,.72,.76,.81),A=cr(.83,.89,p);if(_(t,M,28),_(n,b,18),_(i,v,22),_(s,w,18),_(a,A,14),u?.classList.toggle("is-gallery",A>.2),o){const R=1-cr(.015,.075,p);o.style.opacity=R.toFixed(3),o.style.visibility=R>.01?"visible":"hidden"}if(l){const R=1-cr(.18,.3,p);l.style.opacity=R.toFixed(3)}const T=p<.34?0:p<.7?1:2;c.forEach((R,S)=>R.classList.toggle("is-active",S===T)),h&&(h.textContent=String(T+1).padStart(2,"0"))};return m(0),{setProgress:m,setHover:g,getTrigger:p=>f[p]}}mp.registerPlugin(je);je.config({ignoreMobileResize:!0});const Tm=document.documentElement,nl=document.body,Ph=document.getElementById("stage"),Ml=document.getElementById("experience"),xd=document.getElementById("fallback"),bc=document.getElementById("scene"),Rs=document.getElementById("loaderStatus"),bm=window.matchMedia("(prefers-reduced-motion: reduce)");let qi=null;function iE(){try{const r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}function rE(){qi&&(qi.destroy(),qi=null),Bu()}function Bu(){Tm.classList.add("booted"),Ph?.classList.add("is-hidden"),Ml&&(Ml.hidden=!0),xd&&(xd.hidden=!1),nl.classList.add("is-paper","past-stage"),Rs&&(Rs.textContent="Showing the catalogue"),je.refresh()}function sE(){if(!Ml)return;je.create({trigger:Ml,start:"top top",end:()=>`+=${window.innerHeight*(window.innerWidth<860?6:7.2)}`,pin:!0,pinSpacing:!0,anticipatePin:1,invalidateOnRefresh:!0,onUpdate:a=>{qi?qi.setProgress(a.progress):Ma.setProgress(a.progress)}});const r=document.getElementById("about"),e=document.getElementById("contact");let t=!1;const n=()=>{const a=window.innerHeight,o=r?.getBoundingClientRect().top??1/0,l=e?.getBoundingClientRect().top??1/0,c=o<a*.08;nl.classList.toggle("is-paper",c),nl.classList.toggle("past-stage",c),nl.classList.toggle("is-dark-end",l<a*.62);const u=o<0;u!==t&&(t=u,Ph?.classList.toggle("is-hidden",u),qi?.setActive(!u))};let i=window.scrollY;const s=document.getElementById("siteHead");window.addEventListener("scroll",()=>{const a=window.scrollY;n(),s&&(a<80?s.classList.remove("is-tucked"):a>i+6?s.classList.add("is-tucked"):a<i-6&&s.classList.remove("is-tucked"),i=a)},{passive:!0}),window.addEventListener("resize",n,{passive:!0}),n()}const Dh=$y(),Ma=nE({onOpenProject:(r,e)=>Dh.open(r,e),onHoverProject:r=>qi?.highlightProject(r)});tE({onOpenProject:(r,e)=>Dh.open(r,e)});async function aE(){if(!bc||!iE()){Bu();return}Rs&&(Rs.textContent="Stretching the canvas");try{await Promise.race([document.fonts.ready,new Promise(r=>window.setTimeout(r,1600))])}catch{}try{qi=await Ch.create({canvas:bc,reducedMotion:bm.matches,onProgress:r=>Ma.setProgress(r),onHover:r=>{Ma.setHover(r),Ph?.classList.toggle("is-pointing",r!==null)},onOpenProject:r=>{const e=Ma.getTrigger(r)??null;Dh.open(r,e)}})}catch(r){console.error("The studio could not start:",r),Bu();return}bc.addEventListener("webglcontextlost",rE),sE(),Ma.setProgress(0),Tm.classList.add("booted"),Rs&&(Rs.textContent="The studio is open")}bm.addEventListener("change",r=>{qi?.setReducedMotion(r.matches)});window.addEventListener("load",()=>je.refresh());aE();
