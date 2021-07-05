(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){mixinProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.qX(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)H.qY(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.mi"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.mi"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.mi(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=="string")q=a[q]
q.$callName=g[r]
s.push(q)}var q=s[0]
q.$R=e
q.$D=f
var p=i
if(typeof p=="number")p+=x
var o=h[0]
q.$stubName=o
var n=tearOff(s,j||0,p,c,o,d)
a[b]=n
if(c)q.$tearOff=n}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={lM:function lM(){},
jR:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
pa:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
i6:function(a,b,c){return a},
oM:function(a,b){if(t.t.b(a))return new H.cY(a,b)
return new H.bU(a,b)},
oG:function(){return new P.dz("No element")},
p9:function(a,b){H.fp(a,0,J.ax(a)-1,b)},
fp:function(a,b,c,d){if(c-b<=32)H.p8(a,b,c,d)
else H.p7(a,b,c,d)},
p8:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.ed(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aH()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
p7:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.aa(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.aa(a4+a5,2),f=g-j,e=g+j,d=J.ed(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aH()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.P(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.l(a3,p,d.h(a3,r))
d.l(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.l(a3,p,d.h(a3,r))
l=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,o)
q=m
r=l
break}else{d.l(a3,p,d.h(a3,q))
d.l(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.l(a3,p,d.h(a3,r))
d.l(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.l(a3,p,d.h(a3,r))
l=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,o)
r=l}else{d.l(a3,p,d.h(a3,q))
d.l(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.l(a3,a4,d.h(a3,a2))
d.l(a3,a2,b)
a2=q+1
d.l(a3,a5,d.h(a3,a2))
d.l(a3,a2,a0)
H.fp(a3,a4,r-2,a6)
H.fp(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.P(a6.$2(d.h(a3,r),b),0);)++r
for(;J.P(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.l(a3,p,d.h(a3,r))
d.l(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.l(a3,p,d.h(a3,r))
l=r+1
d.l(a3,r,d.h(a3,q))
d.l(a3,q,o)
r=l}else{d.l(a3,p,d.h(a3,q))
d.l(a3,q,o)}q=m
break}}H.fp(a3,r,q,a6)}else H.fp(a3,r,q,a6)},
eP:function eP(a){this.a=a},
U:function U(a){this.a=a},
k:function k(){},
dc:function dc(){},
bT:function bT(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(a,b){this.a=a
this.b=b},
cY:function cY(a,b){this.a=a
this.b=b},
dg:function dg(a,b){this.a=null
this.b=a
this.c=b},
bV:function bV(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
d1:function d1(){},
fW:function fW(){},
ct:function ct(){},
cs:function cs(a){this.a=a},
o1:function(a){var s,r=H.o0(a)
if(r!=null)return r
s="minified:"+a
return s},
qL:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
r:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.ib(a)
return s},
dr:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
p0:function(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return H.c(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
p_:function(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=C.b.df(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
ds:function(a){return H.oR(a)},
oR:function(a){var s,r,q,p
if(a instanceof P.A)return H.av(H.cF(a),null)
if(J.c7(a)===C.L||t.o.b(a)){s=C.n(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.av(H.cF(a),null)},
mZ:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
p3:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(!H.i4(q))throw H.b(H.i5(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bS(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.i5(q))}return H.mZ(p)},
p2:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.i4(q))throw H.b(H.i5(q))
if(q<0)throw H.b(H.i5(q))
if(q>65535)return H.p3(a)}return H.mZ(a)},
p1:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.bS(s,10)|55296)>>>0,s&1023|56320)}throw H.b(P.b5(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oZ:function(a){var s=H.c_(a).getFullYear()+0
return s},
oX:function(a){var s=H.c_(a).getMonth()+1
return s},
oT:function(a){var s=H.c_(a).getDate()+0
return s},
oU:function(a){var s=H.c_(a).getHours()+0
return s},
oW:function(a){var s=H.c_(a).getMinutes()+0
return s},
oY:function(a){var s=H.c_(a).getSeconds()+0
return s},
oV:function(a){var s=H.c_(a).getMilliseconds()+0
return s},
bm:function(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
C.a.ap(s,b)
q.b=""
if(c!=null&&c.a!==0)c.D(0,new H.jw(q,r,s))
""+q.a
return J.on(a,new H.iT(C.S,0,s,r,0))},
oS:function(a,b,c){var s,r,q,p
if(b instanceof Array)s=c==null||c.a===0
else s=!1
if(s){r=b
q=r.length
if(q===0){if(!!a.$0)return a.$0()}else if(q===1){if(!!a.$1)return a.$1(r[0])}else if(q===2){if(!!a.$2)return a.$2(r[0],r[1])}else if(q===3){if(!!a.$3)return a.$3(r[0],r[1],r[2])}else if(q===4){if(!!a.$4)return a.$4(r[0],r[1],r[2],r[3])}else if(q===5)if(!!a.$5)return a.$5(r[0],r[1],r[2],r[3],r[4])
p=a[""+"$"+q]
if(p!=null)return p.apply(a,r)}return H.oQ(a,b,c)},
oQ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b instanceof Array?b:P.cm(b,!0),h=i.length,g=a.$R
if(h<g)return H.bm(a,i,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.c7(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return H.bm(a,i,c)
if(h===g)return o.apply(a,i)
return H.bm(a,i,c)}if(q instanceof Array){if(c!=null&&c.a!==0)return H.bm(a,i,c)
if(h>g+q.length)return H.bm(a,i,null)
C.a.ap(i,q.slice(h-g))
return o.apply(a,i)}else{if(h>g)return H.bm(a,i,c)
n=Object.keys(q)
if(c==null)for(r=n.length,m=0;m<n.length;n.length===r||(0,H.n)(n),++m){l=q[n[m]]
if(C.p===l)return H.bm(a,i,c)
C.a.j(i,l)}else{for(r=n.length,k=0,m=0;m<n.length;n.length===r||(0,H.n)(n),++m){j=n[m]
if(c.el(0,j)){++k
C.a.j(i,c.h(0,j))}else{l=q[j]
if(C.p===l)return H.bm(a,i,c)
C.a.j(i,l)}}if(k!==c.a)return H.bm(a,i,c)}return o.apply(a,i)}},
c:function(a,b){if(a==null)J.ax(a)
throw H.b(H.cD(a,b))},
cD:function(a,b){var s,r="index"
if(!H.i4(b))return new P.aH(!0,b,r,null)
s=J.ax(a)
if(b<0||b>=s)return P.M(b,a,r,null,s)
return P.fg(b,r)},
qB:function(a,b,c){if(a>c)return P.b5(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.b5(b,a,c,"end",null)
return new P.aH(!0,b,"end",null)},
i5:function(a){return new P.aH(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.f4()
s=new Error()
s.dartException=a
r=H.qZ
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
qZ:function(){return J.ib(this.dartException)},
f:function(a){throw H.b(a)},
n:function(a){throw H.b(P.bI(a))},
ba:function(a){var s,r,q,p,o,n
a=H.nY(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.k9(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ka:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
nh:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
lN:function(a,b){var s=b==null,r=s?null:b.method
return new H.eL(a,r,s?null:b.receiver)},
a3:function(a){if(a==null)return new H.js(a)
if(a instanceof H.d_)return H.bx(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bx(a,a.dartException)
return H.qu(a)},
bx:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qu:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bS(r,16)&8191)===10)switch(q){case 438:return H.bx(a,H.lN(H.r(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.r(s)+" (Error "+q+")"
return H.bx(a,new H.dq(p,e))}}if(a instanceof TypeError){o=$.o4()
n=$.o5()
m=$.o6()
l=$.o7()
k=$.oa()
j=$.ob()
i=$.o9()
$.o8()
h=$.od()
g=$.oc()
f=o.aC(s)
if(f!=null)return H.bx(a,H.lN(s,f))
else{f=n.aC(s)
if(f!=null){f.method="call"
return H.bx(a,H.lN(s,f))}else{f=m.aC(s)
if(f==null){f=l.aC(s)
if(f==null){f=k.aC(s)
if(f==null){f=j.aC(s)
if(f==null){f=i.aC(s)
if(f==null){f=l.aC(s)
if(f==null){f=h.aC(s)
if(f==null){f=g.aC(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bx(a,new H.dq(s,f==null?e:f.method))}}return H.bx(a,new H.fV(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dy()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bx(a,new P.aH(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dy()
return a},
bd:function(a){var s
if(a instanceof H.d_)return a.b
if(a==null)return new H.dY(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.dY(a)},
qF:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
qK:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.e("Unsupported number of arguments for wrapped closure"))},
cC:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qK)
a.$identity=s
return s},
oy:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fu().constructor.prototype):Object.create(new H.cc(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aT
if(typeof r!=="number")return r.Y()
$.aT=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.mA(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.ou(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.mA(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ou:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nT,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.os:H.or
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
ov:function(a,b,c,d){var s=H.mz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
mA:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.ox(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.ov(r,!p,s,b)
if(r===0){p=$.aT
if(typeof p!=="number")return p.Y()
$.aT=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cK
return new Function(p+(o==null?$.cK=H.iq("self"):o)+";return "+n+"."+H.r(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aT
if(typeof p!=="number")return p.Y()
$.aT=p+1
m+=p
p="return function("+m+"){return this."
o=$.cK
return new Function(p+(o==null?$.cK=H.iq("self"):o)+"."+H.r(s)+"("+m+");}")()},
ow:function(a,b,c,d){var s=H.mz,r=H.ot
switch(b?-1:a){case 0:throw H.b(new H.fk("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
ox:function(a,b){var s,r,q,p,o,n,m,l=$.cK
if(l==null)l=$.cK=H.iq("self")
s=$.my
if(s==null)s=$.my=H.iq("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.ow(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.r(r)+"(this."+s+");"
n=$.aT
if(typeof n!=="number")return n.Y()
$.aT=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.r(r)+"(this."+s+", "+m+");"
n=$.aT
if(typeof n!=="number")return n.Y()
$.aT=n+1
return new Function(o+n+"}")()},
mi:function(a,b,c,d,e,f,g){return H.oy(a,b,c,d,!!e,!!f,g)},
or:function(a,b){return H.hS(v.typeUniverse,H.cF(a.a),b)},
os:function(a,b){return H.hS(v.typeUniverse,H.cF(a.c),b)},
mz:function(a){return a.a},
ot:function(a){return a.c},
iq:function(a){var s,r,q,p=new H.cc("self","target","receiver","name"),o=J.lK(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.el("Field name "+a+" not found."))},
qX:function(a){throw H.b(new P.ew(a))},
nQ:function(a){return v.getIsolateTag(a)},
qY:function(a){return H.f(new H.eP(a))},
tl:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qP:function(a){var s,r,q,p,o,n=$.nS.$1(a),m=$.lm[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ls[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.nM.$2(a,n)
if(q!=null){m=$.lm[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.ls[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.lu(s)
$.lm[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.ls[n]=s
return s}if(p==="-"){o=H.lu(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nW(a,s)
if(p==="*")throw H.b(P.ni(n))
if(v.leafTags[n]===true){o=H.lu(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nW(a,s)},
nW:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.mm(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
lu:function(a){return J.mm(a,!1,null,!!a.$iw)},
qR:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.lu(s)
else return J.mm(s,c,null,null)},
qI:function(){if(!0===$.mk)return
$.mk=!0
H.qJ()},
qJ:function(){var s,r,q,p,o,n,m,l
$.lm=Object.create(null)
$.ls=Object.create(null)
H.qH()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nX.$1(o)
if(n!=null){m=H.qR(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qH:function(){var s,r,q,p,o,n,m=C.A()
m=H.cB(C.B,H.cB(C.C,H.cB(C.o,H.cB(C.o,H.cB(C.D,H.cB(C.E,H.cB(C.F(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.nS=new H.lp(p)
$.nM=new H.lq(o)
$.nX=new H.lr(n)},
cB:function(a,b){return a(b)||b},
mI:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(P.lG("Illegal RegExp pattern ("+String(n)+")",a))},
nZ:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qE:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nY:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
o_:function(a,b,c){var s=H.qW(a,b,c)
return s},
qW:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nY(b),'g'),H.qE(c))},
cS:function cS(a,b){this.a=a
this.$ti=b},
cR:function cR(){},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iT:function iT(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dq:function dq(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a){this.a=a},
js:function js(a){this.a=a},
d_:function d_(a,b){this.a=a
this.b=b},
dY:function dY(a){this.a=a
this.b=null},
bH:function bH(){},
fz:function fz(){},
fu:function fu(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a){this.a=a},
kT:function kT(){},
Y:function Y(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iW:function iW(a){this.a=a},
iV:function iV(a){this.a=a},
j1:function j1(a,b){this.a=a
this.b=b
this.c=null},
bj:function bj(a){this.a=a},
eR:function eR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
lp:function lp(a){this.a=a},
lq:function lq(a){this.a=a},
lr:function lr(a){this.a=a},
iU:function iU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a){this.b=a},
ky:function ky(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
e8:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.ed(a)
r=s.gk(a)
q=P.cl(r,null,!1)
for(p=0;p<s.gk(a);++p){o=s.h(a,p)
if(p>=r)return H.c(q,p)
q[p]=o}return q},
bc:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.cD(b,a))},
pK:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.qB(a,b,c))
return b},
bX:function bX(){},
cp:function cp(){},
bW:function bW(){},
dm:function dm(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
dn:function dn(){},
f2:function f2(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
n9:function(a,b){var s=b.c
return s==null?b.c=H.m9(a,b.z,!0):s},
n8:function(a,b){var s=b.c
return s==null?b.c=H.e4(a,"bL",[b.z]):s},
na:function(a){var s=a.y
if(s===6||s===7||s===8)return H.na(a.z)
return s===11||s===12},
p5:function(a){return a.cy},
nP:function(a){return H.ma(v.typeUniverse,a,!1)},
bv:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.nu(a,r,!0)
case 7:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.m9(a,r,!0)
case 8:s=b.z
r=H.bv(a,s,a0,a1)
if(r===s)return b
return H.nt(a,r,!0)
case 9:q=b.Q
p=H.ec(a,q,a0,a1)
if(p===q)return b
return H.e4(a,b.z,p)
case 10:o=b.z
n=H.bv(a,o,a0,a1)
m=b.Q
l=H.ec(a,m,a0,a1)
if(n===o&&l===m)return b
return H.m7(a,n,l)
case 11:k=b.z
j=H.bv(a,k,a0,a1)
i=b.Q
h=H.qr(a,i,a0,a1)
if(j===k&&h===i)return b
return H.ns(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.ec(a,g,a0,a1)
o=b.z
n=H.bv(a,o,a0,a1)
if(f===g&&n===o)return b
return H.m8(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.ie("Attempted to substitute unexpected RTI kind "+c))}},
ec:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bv(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qs:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bv(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
qr:function(a,b,c,d){var s,r=b.a,q=H.ec(a,r,c,d),p=b.b,o=H.ec(a,p,c,d),n=b.c,m=H.qs(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.hi()
s.a=q
s.b=o
s.c=m
return s},
tn:function(a,b){a[v.arrayRti]=b
return a},
qy:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.nT(s)
return a.$S()}return null},
nU:function(a,b){var s
if(H.na(b))if(a instanceof H.bH){s=H.qy(a)
if(s!=null)return s}return H.cF(a)},
cF:function(a){var s
if(a instanceof P.A){s=a.$ti
return s!=null?s:H.me(a)}if(Array.isArray(a))return H.ny(a)
return H.me(J.c7(a))},
ny:function(a){var s=a[v.arrayRti],r=t.ce
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a_:function(a){var s=a.$ti
return s!=null?s:H.me(a)},
me:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.pR(a,s)},
pR:function(a,b){var s=a instanceof H.bH?a.__proto__.__proto__.constructor:b,r=H.pE(v.typeUniverse,s.name)
b.$ccache=r
return r},
nT:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.ma(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pQ:function(a){var s,r,q,p=this
if(p===t.K)return H.e9(p,a,H.pV)
if(!H.be(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.e9(p,a,H.pY)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.i4
else if(r===t.i||r===t.H)q=H.pU
else if(r===t.N)q=H.pW
else q=r===t.w?H.l6:null
if(q!=null)return H.e9(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.qM)){p.r="$i"+s
return H.e9(p,a,H.pX)}}else if(s===7)return H.e9(p,a,H.pO)
return H.e9(p,a,H.pM)},
e9:function(a,b,c){a.b=c
return a.b(b)},
pP:function(a){var s,r=this,q=H.pL
if(!H.be(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.pH
else if(r===t.K)q=H.pF
else{s=H.ee(r)
if(s)q=H.pN}r.a=q
return r.a(a)},
mh:function(a){var s,r=a.y
if(!H.be(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.mh(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
pM:function(a){var s=this
if(a==null)return H.mh(s)
return H.R(v.typeUniverse,H.nU(a,s),null,s,null)},
pO:function(a){if(a==null)return!0
return this.z.b(a)},
pX:function(a){var s,r=this
if(a==null)return H.mh(r)
s=r.r
if(a instanceof P.A)return!!a[s]
return!!J.c7(a)[s]},
pL:function(a){var s,r=this
if(a==null){s=H.ee(r)
if(s)return a}else if(r.b(a))return a
H.nB(a,r)},
pN:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.nB(a,s)},
nB:function(a,b){throw H.b(H.pu(H.nn(a,H.nU(a,b),H.av(b,null))))},
nn:function(a,b,c){var s=P.cf(a),r=H.av(b==null?H.cF(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
pu:function(a){return new H.e2("TypeError: "+a)},
ac:function(a,b){return new H.e2("TypeError: "+H.nn(a,null,b))},
pV:function(a){return a!=null},
pF:function(a){if(a!=null)return a
throw H.b(H.ac(a,"Object"))},
pY:function(a){return!0},
pH:function(a){return a},
l6:function(a){return!0===a||!1===a},
nz:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.ac(a,"bool"))},
t9:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.ac(a,"bool"))},
t8:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.ac(a,"bool?"))},
ta:function(a){if(typeof a=="number")return a
throw H.b(H.ac(a,"double"))},
tc:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ac(a,"double"))},
tb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ac(a,"double?"))},
i4:function(a){return typeof a=="number"&&Math.floor(a)===a},
i3:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.ac(a,"int"))},
te:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.ac(a,"int"))},
td:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.ac(a,"int?"))},
pU:function(a){return typeof a=="number"},
tf:function(a){if(typeof a=="number")return a
throw H.b(H.ac(a,"num"))},
th:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ac(a,"num"))},
tg:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.ac(a,"num?"))},
pW:function(a){return typeof a=="string"},
pG:function(a){if(typeof a=="string")return a
throw H.b(H.ac(a,"String"))},
tj:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.ac(a,"String"))},
ti:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.ac(a,"String?"))},
qo:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.av(a[q],b)
return s},
nC:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.c(a5,j)
m=C.b.Y(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.av(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.av(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.av(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.av(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.av(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
av:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.av(a.z,b)
return s}if(l===7){r=a.z
s=H.av(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.av(a.z,b)+">"
if(l===9){p=H.qt(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qo(o,b)+">"):p}if(l===11)return H.nC(a,b,null)
if(l===12)return H.nC(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.c(b,n)
return b[n]}return"?"},
qt:function(a){var s,r=H.o0(a)
if(r!=null)return r
s="minified:"+a
return s},
nv:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pE:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ma(a,b,!1)
else if(typeof m=="number"){s=m
r=H.e5(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.e4(a,b,q)
n[b]=o
return o}else return m},
pC:function(a,b){return H.nx(a.tR,b)},
pB:function(a,b){return H.nx(a.eT,b)},
ma:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.nr(H.np(a,null,b,c))
r.set(b,s)
return s},
hS:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.nr(H.np(a,b,c,!0))
q.set(c,r)
return r},
pD:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.m7(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bt:function(a,b){b.a=H.pP
b.b=H.pQ
return b},
e5:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aD(null,null)
s.y=b
s.cy=c
r=H.bt(a,s)
a.eC.set(c,r)
return r},
nu:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pz(a,b,r,c)
a.eC.set(r,s)
return s},
pz:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.be(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aD(null,null)
q.y=6
q.z=b
q.cy=c
return H.bt(a,q)},
m9:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.py(a,b,r,c)
a.eC.set(r,s)
return s},
py:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.be(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.ee(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.ee(q.z))return q
else return H.n9(a,b)}}p=new H.aD(null,null)
p.y=7
p.z=b
p.cy=c
return H.bt(a,p)},
nt:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pw(a,b,r,c)
a.eC.set(r,s)
return s},
pw:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.be(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.e4(a,"bL",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.aD(null,null)
q.y=8
q.z=b
q.cy=c
return H.bt(a,q)},
pA:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aD(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bt(a,s)
a.eC.set(q,r)
return r},
hR:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pv:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
e4:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hR(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aD(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bt(a,r)
a.eC.set(p,q)
return q},
m7:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hR(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aD(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bt(a,o)
a.eC.set(q,n)
return n},
ns:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hR(m)
if(j>0){s=l>0?",":""
r=H.hR(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pv(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aD(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bt(a,o)
a.eC.set(q,r)
return r},
m8:function(a,b,c,d){var s,r=b.cy+("<"+H.hR(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.px(a,b,c,r,d)
a.eC.set(r,s)
return s},
px:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bv(a,b,r,0)
m=H.ec(a,c,r,0)
return H.m8(a,n,m,c!==m)}}l=new H.aD(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bt(a,l)},
np:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
nr:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.po(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.nq(a,r,h,g,!1)
else if(q===46)r=H.nq(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bs(a.u,a.e,g.pop()))
break
case 94:g.push(H.pA(a.u,g.pop()))
break
case 35:g.push(H.e5(a.u,5,"#"))
break
case 64:g.push(H.e5(a.u,2,"@"))
break
case 126:g.push(H.e5(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.m6(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.e4(p,n,o))
else{m=H.bs(p,a.e,n)
switch(m.y){case 11:g.push(H.m8(p,m,o,a.n))
break
default:g.push(H.m7(p,m,o))
break}}break
case 38:H.pp(a,g)
break
case 42:p=a.u
g.push(H.nu(p,H.bs(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.m9(p,H.bs(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.nt(p,H.bs(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.hi()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
H.m6(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.ns(p,H.bs(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.m6(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.pr(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bs(a.u,a.e,i)},
po:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
nq:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.nv(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.p5(o)+'"')
d.push(H.hS(s,o,n))}else d.push(p)
return m},
pp:function(a,b){var s=b.pop()
if(0===s){b.push(H.e5(a.u,1,"0&"))
return}if(1===s){b.push(H.e5(a.u,4,"1&"))
return}throw H.b(P.ie("Unexpected extended operation "+H.r(s)))},
bs:function(a,b,c){if(typeof c=="string")return H.e4(a,c,a.sEA)
else if(typeof c=="number")return H.pq(a,b,c)
else return c},
m6:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bs(a,b,c[s])},
pr:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bs(a,b,c[s])},
pq:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.ie("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.ie("Bad index "+c+" for "+b.i(0)))},
R:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.be(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.be(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.R(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.R(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.R(a,b.z,c,d,e)
if(r===6)return H.R(a,b.z,c,d,e)
return r!==7}if(r===6)return H.R(a,b.z,c,d,e)
if(p===6){s=H.n9(a,d)
return H.R(a,b,c,s,e)}if(r===8){if(!H.R(a,b.z,c,d,e))return!1
return H.R(a,H.n8(a,b),c,d,e)}if(r===7){s=H.R(a,t.P,c,d,e)
return s&&H.R(a,b.z,c,d,e)}if(p===8){if(H.R(a,b,c,d.z,e))return!0
return H.R(a,b,c,H.n8(a,d),e)}if(p===7){s=H.R(a,b,c,t.P,e)
return s||H.R(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Y)return!0
if(p===12){if(b===t.M)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.R(a,k,c,j,e)||!H.R(a,j,e,k,c))return!1}return H.nF(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.nF(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.pT(a,b,c,d,e)}return!1},
nF:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.R(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.R(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.R(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.R(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!H.R(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
pT:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.R(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.nv(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.R(a,H.hS(a,b,l[p]),c,r[p],e))return!1
return!0},
ee:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.be(a))if(r!==7)if(!(r===6&&H.ee(a.z)))s=r===8&&H.ee(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qM:function(a){var s
if(!H.be(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
be:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
nx:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aD:function aD(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
hi:function hi(){this.c=this.b=this.a=null},
hd:function hd(){},
e2:function e2(a){this.a=a},
nV:function(a){return t.O.b(a)||t.B.b(a)||t.cF.b(a)||t.I.b(a)||t.a1.b(a)||t.cg.b(a)||t.bj.b(a)},
o0:function(a){return v.mangledGlobalNames[a]},
qS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
mm:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
lo:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.mk==null){H.qI()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.ni("Return interceptor for "+H.r(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.kQ
if(o==null)o=$.kQ=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.qP(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){o=$.kQ
if(o==null)o=$.kQ=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
oH:function(a){if(a<0||a>4294967295)throw H.b(P.b5(a,0,4294967295,"length",null))
return J.oI(new Array(a))},
lJ:function(a){if(a<0)throw H.b(P.el("Length must be a non-negative integer: "+a))
return new Array(a)},
oI:function(a){return J.lK(a)},
lK:function(a){a.fixed$length=Array
return a},
oJ:function(a,b){return J.ok(a,b)},
mH:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
oK:function(a,b){var s,r
for(s=a.length;b<s;){r=C.b.bM(a,b)
if(r!==32&&r!==13&&!J.mH(r))break;++b}return b},
lL:function(a,b){var s,r
for(;b>0;b=s){s=b-1
r=C.b.aU(a,s)
if(r!==32&&r!==13&&!J.mH(r))break}return b},
c7:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d6.prototype
return J.eJ.prototype}if(typeof a=="string")return J.bi.prototype
if(a==null)return J.cj.prototype
if(typeof a=="boolean")return J.eI.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.A)return a
return J.lo(a)},
ed:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.A)return a
return J.lo(a)},
ln:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.A)return a
return J.lo(a)},
qG:function(a){if(typeof a=="number")return J.ck.prototype
if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.c5.prototype
return a},
mj:function(a){if(typeof a=="string")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.c5.prototype
return a},
c8:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.A)return a
return J.lo(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.c7(a).m(a,b)},
J:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.qL(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ed(a).h(a,b)},
oi:function(a,b,c){return J.c8(a).iE(a,b,c)},
oj:function(a,b,c,d){return J.c8(a).iW(a,b,c,d)},
ok:function(a,b){return J.qG(a).aj(a,b)},
i9:function(a,b){return J.ln(a).H(a,b)},
ia:function(a,b){return J.ln(a).D(a,b)},
mr:function(a){return J.c8(a).geg(a)},
ol:function(a){return J.c8(a).geo(a)},
ei:function(a){return J.c7(a).gF(a)},
aS:function(a){return J.ln(a).gT(a)},
ax:function(a){return J.ed(a).gk(a)},
ms:function(a,b){return J.mj(a).jk(a,b)},
om:function(a,b){return J.ln(a).eM(a,b)},
on:function(a,b){return J.c7(a).eR(a,b)},
oo:function(a,b){return J.c8(a).jT(a,b)},
mt:function(a,b,c){return J.mj(a).bI(a,b,c)},
ib:function(a){return J.c7(a).i(a)},
mu:function(a){return J.mj(a).df(a)},
a:function a(){},
eI:function eI(){},
cj:function cj(){},
bP:function bP(){},
fb:function fb(){},
c5:function c5(){},
aY:function aY(){},
aA:function aA(){},
eK:function eK(){},
ae:function ae(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
ck:function ck(){},
d6:function d6(){},
eJ:function eJ(){},
bi:function bi(){}},P={
ph:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qv()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cC(new P.kA(q),1)).observe(s,{childList:true})
return new P.kz(q,s,r)}else if(self.setImmediate!=null)return P.qw()
return P.qx()},
pi:function(a){self.scheduleImmediate(H.cC(new P.kB(a),0))},
pj:function(a){self.setImmediate(H.cC(new P.kC(a),0))},
pk:function(a){P.m_(C.h,a)},
m_:function(a,b){var s=C.c.aa(a.a,1000)
return P.ps(s<0?0:s,b)},
ng:function(a,b){var s=C.c.aa(a.a,1000)
return P.pt(s<0?0:s,b)},
ps:function(a,b){var s=new P.e1()
s.fR(a,b)
return s},
pt:function(a,b){var s=new P.e1()
s.fS(a,b)
return s},
an:function(a){return new P.h1(new P.a8($.I,a.V("a8<0>")),a.V("h1<0>"))},
am:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ad:function(a,b){P.pI(a,b)},
al:function(a,b){b.cL(0,a)},
ak:function(a,b){b.bZ(H.a3(a),H.bd(a))},
pI:function(a,b){var s,r,q=new P.l0(b),p=new P.l1(b)
if(a instanceof P.a8)a.e3(q,p,t.z)
else{s=t.z
if(t.c.b(a))a.dd(q,p,s)
else{r=new P.a8($.I,t.aY)
r.a=4
r.c=a
r.e3(q,p,s)}}},
ap:function(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.I.f1(new P.lg(s))},
t5:function(a){return new P.cw(a,1)},
pl:function(){return C.T},
pm:function(a){return new P.cw(a,3)},
q_:function(a){return new P.dZ(a)},
ig:function(a,b){var s=H.i6(a,"error",t.K)
return new P.en(s,b==null?P.mv(a):b)},
mv:function(a){var s
if(t.C.b(a)){s=a.gbH()
if(s!=null)return s}return C.I},
m4:function(a,b){var s,r
for(;s=a.a,s===2;)a=a.c
if(s>=4){r=b.cv()
b.a=a.a
b.c=a.c
P.dL(b,r)}else{r=b.c
b.a=2
b.c=a
a.dW(r)}},
dL:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e={},d=e.a=a
for(s=t.c;!0;){r={}
q=d.a===8
if(b==null){if(q){s=d.c
P.lc(f,f,d.b,s.a,s.b)}return}r.a=b
p=b.a
for(d=b;p!=null;d=p,p=o){d.a=null
P.dL(e.a,d)
r.a=p
o=p.a}n=e.a
m=n.c
r.b=q
r.c=m
l=!q
if(l){k=d.c
k=(k&1)!==0||(k&15)===8}else k=!0
if(k){j=d.b.b
if(q){k=n.b===j
k=!(k||k)}else k=!1
if(k){P.lc(f,f,n.b,m.a,m.b)
return}i=$.I
if(i!==j)$.I=j
else i=f
d=d.c
if((d&15)===8)new P.kO(r,e,q).$0()
else if(l){if((d&1)!==0)new P.kN(r,m).$0()}else if((d&2)!==0)new P.kM(e,r).$0()
if(i!=null)$.I=i
d=r.c
if(s.b(d)){n=r.a.$ti
n=n.V("bL<2>").b(d)||!n.Q[1].b(d)}else n=!1
if(n){h=r.a.b
if(d.a>=4){g=h.c
h.c=null
b=h.bR(g)
h.a=d.a
h.c=d.c
e.a=d
continue}else P.m4(d,h)
return}}h=r.a.b
g=h.c
h.c=null
b=h.bR(g)
d=r.b
n=r.c
if(!d){h.a=4
h.c=n}else{h.a=8
h.c=n}e.a=h
d=h}},
qm:function(a,b){if(t.b.b(a))return b.f1(a)
if(t.b6.b(a))return a
throw H.b(P.oq(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
ql:function(){var s,r
for(s=$.cz;s!=null;s=$.cz){$.eb=null
r=s.b
$.cz=r
if(r==null)$.ea=null
s.a.$0()}},
qq:function(){$.mf=!0
try{P.ql()}finally{$.eb=null
$.mf=!1
if($.cz!=null)$.mo().$1(P.nN())}},
nI:function(a){var s=new P.h2(a),r=$.ea
if(r==null){$.cz=$.ea=s
if(!$.mf)$.mo().$1(P.nN())}else $.ea=r.b=s},
qp:function(a){var s,r,q,p=$.cz
if(p==null){P.nI(a)
$.eb=$.ea
return}s=new P.h2(a)
r=$.eb
if(r==null){s.b=p
$.cz=$.eb=s}else{q=r.b
s.b=q
$.eb=r.b=s
if(q==null)$.ea=s}},
qT:function(a){var s=null,r=$.I
if(C.e===r){P.cA(s,s,C.e,a)
return}P.cA(s,s,r,r.cG(a))},
rq:function(a){H.i6(a,"stream",t.K)
return new P.hG()},
lZ:function(a,b){var s=$.I
if(s===C.e)return P.m_(a,b)
return P.m_(a,s.cG(b))},
pd:function(a,b){var s=$.I
if(s===C.e)return P.ng(a,b)
return P.ng(a,s.ee(b,t.ae))},
lc:function(a,b,c,d,e){P.qp(new P.ld(d,e))},
nG:function(a,b,c,d){var s,r=$.I
if(r===c)return d.$0()
$.I=c
s=r
try{r=d.$0()
return r}finally{$.I=s}},
nH:function(a,b,c,d,e){var s,r=$.I
if(r===c)return d.$1(e)
$.I=c
s=r
try{r=d.$1(e)
return r}finally{$.I=s}},
qn:function(a,b,c,d,e,f){var s,r=$.I
if(r===c)return d.$2(e,f)
$.I=c
s=r
try{r=d.$2(e,f)
return r}finally{$.I=s}},
cA:function(a,b,c,d){if(C.e!==c)d=c.cG(d)
P.nI(d)},
kA:function kA(a){this.a=a},
kz:function kz(a,b,c){this.a=a
this.b=b
this.c=c},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
e1:function e1(){this.c=0},
kY:function kY(a,b){this.a=a
this.b=b},
kX:function kX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h1:function h1(a,b){this.a=a
this.b=!1
this.$ti=b},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
lg:function lg(a){this.a=a},
cw:function cw(a,b){this.a=a
this.b=b},
cy:function cy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dZ:function dZ(a){this.a=a},
en:function en(a,b){this.a=a
this.b=b},
dJ:function dJ(){},
dI:function dI(a,b){this.a=a
this.$ti=b},
cv:function cv(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a8:function a8(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
kE:function kE(a,b){this.a=a
this.b=b},
kL:function kL(a,b){this.a=a
this.b=b},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(a,b){this.a=a
this.b=b},
kK:function kK(a,b){this.a=a
this.b=b},
kF:function kF(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(a,b,c){this.a=a
this.b=b
this.c=c},
kP:function kP(a){this.a=a},
kN:function kN(a,b){this.a=a
this.b=b},
kM:function kM(a,b){this.a=a
this.b=b},
h2:function h2(a){this.a=a
this.b=null},
fw:function fw(){},
fx:function fx(){},
hG:function hG(){},
l_:function l_(){},
ld:function ld(a,b){this.a=a
this.b=b},
kU:function kU(){},
kV:function kV(a,b){this.a=a
this.b=b},
kW:function kW(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function(a,b,c){return H.qF(a,new H.Y(b.V("@<0>").bL(c).V("Y<1,2>")))},
S:function(a,b){return new H.Y(a.V("@<0>").bL(b).V("Y<1,2>"))},
mO:function(a){return new P.dM(a.V("dM<0>"))},
m5:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
pn:function(a,b){var s=new P.dN(a,b)
s.c=a.e
return s},
oF:function(a,b,c){var s,r
if(P.mg(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.ao.push(a)
try{P.pZ(a,s)}finally{if(0>=$.ao.length)return H.c($.ao,-1)
$.ao.pop()}r=P.nc(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
lI:function(a,b,c){var s,r
if(P.mg(a))return b+"..."+c
s=new P.bn(b)
$.ao.push(a)
try{r=s
r.a=P.nc(r.a,a,", ")}finally{if(0>=$.ao.length)return H.c($.ao,-1)
$.ao.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
mg:function(a){var s,r
for(s=$.ao.length,r=0;r<s;++r)if(a===$.ao[r])return!0
return!1},
pZ:function(a,b){var s,r,q,p,o,n,m,l=a.gT(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.r(l.gG(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.c(b,-1)
r=b.pop()
if(0>=b.length)return H.c(b,-1)
q=b.pop()}else{p=l.gG(l);++j
if(!l.t()){if(j<=4){b.push(H.r(p))
return}r=H.r(p)
if(0>=b.length)return H.c(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gG(l);++j
for(;l.t();p=o,o=n){n=l.gG(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.r(p)
r=H.r(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
j4:function(a){var s,r={}
if(P.mg(a))return"{...}"
s=new P.bn("")
try{$.ao.push(a)
s.a+="{"
r.a=!0
J.ia(a,new P.j5(r,s))
s.a+="}"}finally{if(0>=$.ao.length)return H.c($.ao,-1)
$.ao.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dM:function dM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
kS:function kS(a){this.a=a
this.c=this.b=null},
dN:function dN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d5:function d5(){},
db:function db(){},
G:function G(){},
de:function de(){},
j5:function j5(a,b){this.a=a
this.b=b},
a5:function a5(){},
hT:function hT(){},
df:function df(){},
dD:function dD(){},
fm:function fm(){},
dV:function dV(){},
dO:function dO(){},
e6:function e6(){},
e7:function e7(){},
er:function er(){},
ev:function ev(){},
iF:function iF(){},
kk:function kk(){},
kl:function kl(){},
kZ:function kZ(a){this.b=0
this.c=a},
ml:function(a){var s=H.p0(a,null)
if(s!=null)return s
throw H.b(P.lG(a,null))},
qD:function(a){var s=H.p_(a)
if(s!=null)return s
throw H.b(P.lG("Invalid double",a))},
oD:function(a){if(a instanceof H.bH)return a.i(0)
return"Instance of '"+H.ds(a)+"'"},
cl:function(a,b,c){var s,r=c?J.lJ(a):J.oH(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
cm:function(a,b){var s,r=[]
for(s=J.aS(a);s.t();)r.push(s.gG(s))
if(b)return r
return J.lK(r)},
mP:function(a,b){var s,r,q=J.lJ(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.c(q,s)
q[s]=r}return q},
lX:function(a){var s=a,r=s.length,q=P.lS(0,null,r)
return H.p2(q<r?s.slice(0,q):s)},
lT:function(a){return new H.iU(a,H.mI(a,!1,!0,!1,!1,!1))},
nc:function(a,b,c){var s=J.aS(b)
if(!s.t())return a
if(c.length===0){do a+=H.r(s.gG(s))
while(s.t())}else{a+=H.r(s.gG(s))
for(;s.t();)a=a+c+H.r(s.gG(s))}return a},
mU:function(a,b,c,d){return new P.f3(a,b,c,d)},
nw:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.i){s=$.oh().b
s=s.test(b)}else s=!1
if(s)return b
r=C.H.j7(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.c(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.p1(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
oA:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ex:function(a){if(a>=10)return""+a
return"0"+a},
mD:function(a){return new P.bK(1000*a)},
cf:function(a){if(typeof a=="number"||H.l6(a)||null==a)return J.ib(a)
if(typeof a=="string")return JSON.stringify(a)
return P.oD(a)},
ie:function(a){return new P.em(a)},
el:function(a){return new P.aH(!1,null,null,a)},
oq:function(a,b,c){return new P.aH(!0,a,b,c)},
fg:function(a,b){return new P.dt(null,null,!0,a,b,"Value not in range")},
b5:function(a,b,c,d,e){return new P.dt(b,c,!0,a,d,"Invalid value")},
lS:function(a,b,c){if(a>c)throw H.b(P.b5(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.b5(b,a,c,"end",null))
return b}return c},
n2:function(a,b){if(a<0)throw H.b(P.b5(a,0,null,b,null))
return a},
M:function(a,b,c,d,e){var s=e==null?J.ax(b):e
return new P.eG(s,!0,a,c,"Index out of range")},
z:function(a){return new P.fX(a)},
ni:function(a){return new P.fU(a)},
lW:function(a){return new P.dz(a)},
bI:function(a){return new P.eu(a)},
e:function(a){return new P.hf(a)},
lG:function(a,b){return new P.iM(a,b)},
i7:function(a){H.qS(a)},
jr:function jr(a,b){this.a=a
this.b=b},
V:function V(a,b){this.a=a
this.b=b},
bK:function bK(a){this.a=a},
iA:function iA(){},
iB:function iB(){},
F:function F(){},
em:function em(a){this.a=a},
fI:function fI(){},
f4:function f4(){},
aH:function aH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eG:function eG(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a){this.a=a},
fU:function fU(a){this.a=a},
dz:function dz(a){this.a=a},
eu:function eu(a){this.a=a},
f7:function f7(){},
dy:function dy(){},
ew:function ew(a){this.a=a},
hf:function hf(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
h:function h(){},
eH:function eH(){},
a0:function a0(){},
A:function A(){},
hJ:function hJ(){},
bn:function bn(a){this.a=a},
qA:function(a){var s,r,q,p
if(t.I.b(a)){s=J.ol(a)
r=s.constructor===Array
r.toString
if(r){r=typeof CanvasPixelArray!=="undefined"
r.toString
if(r){s.constructor=CanvasPixelArray
s.BYTES_PER_ELEMENT=1}}return a}r=a.data
r.toString
q=a.height
q.toString
p=a.width
p.toString
return new P.e3(r,q,p)},
qz:function(a){if(a instanceof P.e3)return{data:a.a,height:a.b,width:a.c}
return a},
bw:function(a){var s,r,q,p,o
if(a==null)return null
s=P.S(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
nA:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.l6(a))return a
if(t.bC.b(a))return P.nO(a)
if(t.cK.b(a)){s=[]
J.ia(a,new P.l2(s))
a=s}return a},
nO:function(a){var s={}
J.ia(a,new P.lk(s))
return s},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a){this.a=a},
lk:function lk(a){this.a=a},
eD:function eD(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(){},
d8:function d8(){},
pJ:function(a,b,c,d){var s,r
if(b){s=[c]
C.a.ap(s,d)
d=s}r=P.cm(J.om(d,P.qN()),!0)
return P.l3(H.oS(a,r,null))},
mc:function(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){H.a3(s)}return!1},
nE:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
l3:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.l6(a))return a
if(a instanceof P.aZ)return a.a
if(H.nV(a))return a
if(t.f.b(a))return a
if(a instanceof P.V)return H.c_(a)
if(t.Y.b(a))return P.nD(a,"$dart_jsFunction",new P.l4())
return P.nD(a,"_$dart_jsObject",new P.l5($.mq()))},
nD:function(a,b,c){var s=P.nE(a,b)
if(s==null){s=c.$1(a)
P.mc(a,b,s)}return s},
mb:function(a){var s,r
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.nV(a))return a
else if(a instanceof Object&&t.f.b(a))return a
else if(a instanceof Date){s=a.getTime()
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)H.f(P.el("DateTime is outside valid range: "+H.r(s)))
H.i6(!1,"isUtc",t.w)
return new P.V(s,!1)}else if(a.constructor===$.mq())return a.o
else return P.nK(a)},
nK:function(a){if(typeof a=="function")return P.md(a,$.lz(),new P.lh())
if(a instanceof Array)return P.md(a,$.mp(),new P.li())
return P.md(a,$.mp(),new P.lj())},
md:function(a,b,c){var s=P.nE(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
P.mc(a,b,s)}return s},
l4:function l4(){},
l5:function l5(a){this.a=a},
lh:function lh(){},
li:function li(){},
lj:function lj(){},
aZ:function aZ(a){this.a=a},
d7:function d7(a){this.a=a},
bQ:function bQ(a){this.a=a},
cx:function cx(){},
hy:function hy(){},
ah:function ah(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bS:function bS(){},
eQ:function eQ(){},
bY:function bY(){},
f5:function f5(){},
jv:function jv(){},
fy:function fy(){},
m:function m(){},
c4:function c4(){},
fH:function fH(){},
hm:function hm(){},
hn:function hn(){},
hu:function hu(){},
hv:function hv(){},
hH:function hH(){},
hI:function hI(){},
hP:function hP(){},
hQ:function hQ(){},
ij:function ij(){},
eo:function eo(){},
ik:function ik(a){this.a=a},
ep:function ep(){},
bh:function bh(){},
f6:function f6(){},
h3:function h3(){},
cr:function cr(){},
fs:function fs(){},
hD:function hD(){},
hE:function hE(){}},W={
op:function(){var s=document.createElement("a")
s.toString
return s},
lC:function(){var s=document.createElement("canvas")
s.toString
return s},
iE:function(a){return"wheel"},
mF:function(a){return W.oE(a,null,null).aE(new W.iQ(),t.N)},
oE:function(a,b,c){var s=new P.a8($.I,t.bR),r=new P.dI(s,t.d5),q=new XMLHttpRequest()
q.toString
C.K.jA(q,"GET",a,!0)
W.Z(q,"load",new W.iR(q,r),!1)
W.Z(q,"error",r.gj4(),!1)
q.send()
return s},
mG:function(a){var s=document.createElement("img")
s.src=a
return s},
kR:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
no:function(a,b,c,d){var s=W.kR(W.kR(W.kR(W.kR(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
Z:function(a,b,c,d){var s=W.nL(new W.kD(c),t.B)
if(s!=null&&!0)J.oj(a,b,s,!1)
return new W.he(a,b,s,!1)},
nL:function(a,b){var s=$.I
if(s===C.e)return a
return s.ee(a,b)},
q:function q(){},
ic:function ic(){},
ej:function ej(){},
ek:function ek(){},
bE:function bE(){},
bG:function bG(){},
cN:function cN(){},
aI:function aI(){},
it:function it(){},
H:function H(){},
cV:function cV(){},
iu:function iu(){},
az:function az(){},
aU:function aU(){},
iv:function iv(){},
iw:function iw(){},
ix:function ix(){},
iy:function iy(){},
cW:function cW(){},
cX:function cX(){},
ez:function ez(){},
iz:function iz(){},
h5:function h5(a,b){this.a=a
this.b=b},
L:function L(){},
j:function j(){},
d:function d(){},
aJ:function aJ(){},
eB:function eB(){},
eC:function eC(){},
eE:function eE(){},
aV:function aV(){},
iP:function iP(){},
bM:function bM(){},
aK:function aK(){},
iQ:function iQ(){},
iR:function iR(a,b){this.a=a
this.b=b},
bN:function bN(){},
bO:function bO(){},
ci:function ci(){},
bR:function bR(){},
j2:function j2(){},
jn:function jn(){},
eU:function eU(){},
jo:function jo(a){this.a=a},
eV:function eV(){},
jp:function jp(a){this.a=a},
b_:function b_(){},
eW:function eW(){},
at:function at(){},
h4:function h4(a){this.a=a},
v:function v(){},
dp:function dp(){},
b1:function b1(){},
fc:function fc(){},
b4:function b4(){},
fj:function fj(){},
jE:function jE(a){this.a=a},
fl:function fl(){},
aN:function aN(){},
fq:function fq(){},
b6:function b6(){},
fr:function fr(){},
b7:function b7(){},
fv:function fv(){},
jP:function jP(a){this.a=a},
aE:function aE(){},
bo:function bo(){},
aO:function aO(){},
au:function au(){},
fA:function fA(){},
fB:function fB(){},
k3:function k3(){},
b9:function b9(){},
c3:function c3(){},
fG:function fG(){},
k7:function k7(){},
bb:function bb(){},
kj:function kj(){},
fZ:function fZ(){},
bq:function bq(){},
br:function br(){},
aP:function aP(){},
h6:function h6(){},
dK:function dK(){},
hj:function hj(){},
dQ:function dQ(){},
hC:function hC(){},
hK:function hK(){},
lF:function lF(a,b){this.a=a
this.$ti=b},
he:function he(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
kD:function kD(a){this.a=a},
m3:function m3(a){this.$ti=a},
K:function K(){},
d2:function d2(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hg:function hg(){},
hh:function hh(){},
hk:function hk(){},
hl:function hl(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
hw:function hw(){},
hx:function hx(){},
hz:function hz(){},
dW:function dW(){},
dX:function dX(){},
hA:function hA(){},
hB:function hB(){},
hF:function hF(){},
hL:function hL(){},
hM:function hM(){},
e_:function e_(){},
e0:function e0(){},
hN:function hN(){},
hO:function hO(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){}},K={id:function id(){},eF:function eF(){},bl:function bl(a){this.a=a},a2:function a2(a){this.a=a}},L={ft:function ft(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},fF:function fF(a,b){this.b=a
this.c=b},k5:function k5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},k8:function k8(a,b){this.b=a
this.c=!1
this.a=b},
qQ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=V.p6("3Dart Chess")
c.bd(["This example is in development and may still have a few issues and glitches."])
s=W.lC()
s.className="pageLargeCanvas"
s.id="targetCanvas"
c.a.appendChild(s).toString
c.iV(["buttons"])
c.e8(1,"About")
c.bd(["Click and drag to see the board from different angles. ","Click without dragging to select a piece, unselect a piece, or pick which movement should be made. ","The game will start with white's turn."])
c.bd(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."])
c.bd(["\xab[Back to Examples List|../../]"])
c.e8(1,"Help wanted")
c.bd(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."])
c.bd(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."])
r=Q.nb()
c=$.aR()
q=$.bg()
c=c.a
q=q.a
p=c|q
o=$.aQ().a
n=o&1
r.v(new Q.i(1,1),new Q.t((p|n)>>>0))
m=$.cG()
m=m.a
l=m|q
r.v(new Q.i(1,2),new Q.t((l|n)>>>0))
k=$.bf()
k=k.a
j=k|q
r.v(new Q.i(1,3),new Q.t((j|n)>>>0))
i=$.by()
i=i.a
r.v(new Q.i(1,4),new Q.t((i|q|n)>>>0))
h=$.aq()
h=h.a
r.v(new Q.i(1,5),new Q.t((h|q|n)>>>0))
g=o&2
r.v(new Q.i(1,6),new Q.t((j|g)>>>0))
r.v(new Q.i(1,7),new Q.t((l|g)>>>0))
r.v(new Q.i(1,8),new Q.t((p|g)>>>0))
p=$.cH()
p=p.a
q=p|q
r.v(new Q.i(2,1),new Q.t((q|n)>>>0))
r.v(new Q.i(2,2),new Q.t((q|g)>>>0))
l=o&3
r.v(new Q.i(2,3),new Q.t((q|l)>>>0))
j=o&4
r.v(new Q.i(2,4),new Q.t((q|j)>>>0))
f=o&5
r.v(new Q.i(2,5),new Q.t((q|f)>>>0))
e=o&6
r.v(new Q.i(2,6),new Q.t((q|e)>>>0))
d=o&7
r.v(new Q.i(2,7),new Q.t((q|d)>>>0))
o&=8
r.v(new Q.i(2,8),new Q.t((q|o)>>>0))
q=$.a4()
q=q.a
p|=q
r.v(new Q.i(7,1),new Q.t((p|n)>>>0))
r.v(new Q.i(7,2),new Q.t((p|g)>>>0))
r.v(new Q.i(7,3),new Q.t((p|l)>>>0))
r.v(new Q.i(7,4),new Q.t((p|j)>>>0))
r.v(new Q.i(7,5),new Q.t((p|f)>>>0))
r.v(new Q.i(7,6),new Q.t((p|e)>>>0))
r.v(new Q.i(7,7),new Q.t((p|d)>>>0))
r.v(new Q.i(7,8),new Q.t((p|o)>>>0))
c|=q
r.v(new Q.i(8,1),new Q.t((c|n)>>>0))
p=m|q
r.v(new Q.i(8,2),new Q.t((p|n)>>>0))
o=k|q
r.v(new Q.i(8,3),new Q.t((o|n)>>>0))
r.v(new Q.i(8,4),new Q.t((i|q|n)>>>0))
r.v(new Q.i(8,5),new Q.t((h|q|n)>>>0))
r.v(new Q.i(8,6),new Q.t((o|g)>>>0))
r.v(new Q.i(8,7),new Q.t((p|g)>>>0))
r.v(new Q.i(8,8),new Q.t((c|g)>>>0))
P.lZ(C.h,new L.lt(new Q.iO(r)))},
lt:function lt(a){this.a=a}},O={
ay:function(){return new O.ce([])},
ce:function ce(a){this.a=a
this.c=this.b=null},
dl:function dl(a){this.a=a
this.b=null},
nR:function(a){var s=C.b.jo(a,"/")
if(s<=0)return a
return C.b.bI(a,0,s)},
nJ:function(a){var s,r=$.lf,q=(r==null?$.lf=P.lT("([^\\s]+)"):r).jf(a)
if(q==null)return[]
r=q.b
if(1>=r.length)return H.c(r,1)
s=r[1]
if(s==null)return[]
return[s,C.b.df(C.b.b5(a,s.length))]},
le:function(a){var s,r,q,p=[],o=$.lf
if(o==null)o=$.lf=P.lT("([^\\s]+)")
o=new H.ky(o,a,0)
s=t.d
for(;o.t();){r=s.a(o.d).b
if(1>=r.length)return H.c(r,1)
q=r[1]
if(q!=null)p.push(q)}return p},
bu:function(a){var s,r=O.le(a),q=[],p=r.length
for(s=0;s<p;++s){if(s>=r.length)return H.c(r,s)
q.push(P.qD(r[s]))}return q},
eX:function(a,b,c){return O.oO(a,b,!1)},
oO:function(a,b,c){var s=0,r=P.an(t.be),q,p=2,o,n=[],m,l,k,j,i,h,g
var $async$eX=P.ap(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:p=4
m=O.nR(a)
l=new O.l9(b,P.S(t.N,t.r))
s=7
return P.ad(W.mF(a),$async$eX)
case 7:k=e
s=8
return P.ad(l.aO(k,m,!1),$async$eX)
case 8:i=l.b
q=i
s=1
break
p=2
s=6
break
case 4:p=3
g=o
j=H.a3(g)
P.i7(a+": "+H.r(j))
i=P.e(a+": "+H.r(j))
throw H.b(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.al(q,r)
case 2:return P.ak(o,r)}})
return P.am($async$eX,r)},
aC:function(a,b){var s=null,r=null,q=!1
return O.oP(a,b)},
oP:function(a1,a2){var s=0,r=P.an(t.u),q,p=2,o,n=[],m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$aC=P.ap(function(a3,a4){if(a3===1){o=a4
s=p}while(true)switch(s){case 0:c=null
b=null
a=!1
p=4
m=O.nR(a1)
i=c
h=P.S(t.N,t.r)
g=new O.la(a2,[],[],[],h,b,E.Q(null,!0,null,"",null,null))
f=O.ab()
e=f.gW()
e.sn(0,new V.o(0.35,0.35,0.35))
e=f.gX()
e.sn(0,new V.o(0.65,0.65,0.65))
g.x=f
if(i!=null)h.ap(0,i)
g.bT()
l=g
s=7
return P.ad(W.mF(a1),$async$aC)
case 7:k=a4
s=8
return P.ad(l.aO(k,m,a),$async$aC)
case 8:i=b
if(i!=null)i.A(new O.fe())
i=l.gjd()
q=i
s=1
break
p=2
s=6
break
case 4:p=3
a0=o
j=H.a3(a0)
P.i7(a1+": "+H.r(j))
i=P.e(a1+": "+H.r(j))
throw H.b(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.al(q,r)
case 2:return P.ak(o,r)}})
return P.am($async$aC,r)},
l9:function l9(a,b){this.a=a
this.b=b
this.c=null},
lb:function lb(a,b){this.a=a
this.b=b},
la:function la(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=""
_.z=_.y=_.x=null
_.Q=g},
fe:function fe(){},
ab:function(){var s=O.ay(),r=new O.aL(s)
s.bq(r.ghv(),r.ghx())
s=r.gJ()
s.gp().j(0,r.gdX())
s.geL().j(0,r.gaI())
return r},
eS:function(a,b){return new O.dj(new V.o(0,0,0),a,b,new A.af(!1,!1,!1))},
aL:function aL(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=null},
jc:function jc(a,b){this.a=a
this.b=b},
jd:function jd(){},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(){},
jg:function jg(a,b){this.a=a
this.b=b},
jh:function jh(){},
ji:function ji(a,b){this.a=a
this.b=b},
jj:function jj(){},
j6:function j6(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
di:function di(){},
j7:function j7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
dj:function dj(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
j9:function j9(a){this.b=a},
ja:function ja(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
jb:function jb(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
fo:function fo(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
jK:function jK(a){this.a=null
this.b=a
this.c=null},
jT:function jT(){}},E={
Q:function(a,b,c,d,e,f){var s=new E.W(d,b,O.ay())
s.ax(a,b,c,d,e,f)
return s},
oC:function(a,b){var s,r,q,p=P.nK(P.l3(a))
for(s=p.a,r=0;r<5;++r){q=b[r]
if(q in s){p.j1(q,null)
return!0}}return!1},
nl:function(){var s=window.navigator.vendor
s.toString
if(C.b.P(s,"Google"))return C.y
s=window.navigator.userAgent
s.toString
if(C.b.P(s,"Firefox"))return C.l
s=window.navigator.appVersion
s.toString
if(C.b.P(s,"Trident")||C.b.P(s,"Edge"))return C.m
s=window.navigator.appName
s.toString
if(C.b.P(s,"Microsoft"))return C.m
return C.z},
nm:function(){var s=window.navigator.appVersion
s.toString
if(C.b.P(s,"Win"))return C.P
if(C.b.P(s,"Mac"))return C.u
if(C.b.P(s,"Linux"))return C.Q
return C.R},
p4:function(a,b){var s
Date.now()
s=new E.jy(a,new P.V(Date.now(),!1),new P.V(Date.now(),!1),new O.dl([]),new O.dl([]),new O.dl([]),[null],P.S(t.N,t.k))
s.fB(a,b)
return s},
pb:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.nd(a,!0,!0,!0,!1)
s=W.lC()
r=s.style
r.width="100%"
r.height="100%"
J.mr(a).j(0,s)
return E.nd(s,!0,!0,!0,!1)},
nd:function(a,b,c,d,e){var s,r,q,p,o,n,m="mousemove",l=t.z,k=t.ba.a(C.f.di(a,"webgl2",P.oL(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],l,l)))
if(k==null)throw H.b(P.e("Failed to get the rendering context for WebGL."))
s=E.p4(k,a)
l=H.i3(k.getParameter(3379))
r=H.i3(k.getParameter(34076))
q=[]
p=$.iG
o=new X.fY(a,q,(p==null?$.iG=new E.hc(E.nl(),E.nm()):p).a===C.l?0.16666666666666666:0.005555555555555556)
n=document
n.toString
q.push(W.Z(n,"contextmenu",o.ghF(),!1))
q.push(W.Z(a,"focus",o.ghL(),!1))
q.push(W.Z(a,"blur",o.ghz(),!1))
q.push(W.Z(n,"keyup",o.ghR(),!1))
q.push(W.Z(n,"keydown",o.ghP(),!1))
q.push(W.Z(a,"mousedown",o.ghV(),!1))
q.push(W.Z(a,"mouseup",o.ghZ(),!1))
q.push(W.Z(a,m,o.ghX(),!1))
W.iE(a)
W.iE(a)
q.push(W.Z(a,W.iE(a),o.gi0(),!1))
q.push(W.Z(n,m,o.ghH(),!1))
q.push(W.Z(n,"mouseup",o.ghJ(),!1))
q.push(W.Z(n,"pointerlockchange",o.gi2(),!1))
q.push(W.Z(a,"touchstart",o.gik(),!1))
q.push(W.Z(a,"touchend",o.gig(),!1))
q.push(W.Z(a,"touchmove",o.gii(),!1))
r=new E.fC(a,s,new T.jY(k,l,r),o,new P.V(Date.now(),!1))
r.dZ()
return r},
im:function im(){},
W:function W(a,b,c){var _=this
_.a=a
_.b=b
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=c
_.z=null},
cd:function cd(a){this.b=a},
cq:function cq(a){this.b=a},
hc:function hc(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.d=_.c=512
_.e=0
_.r=b
_.x=c
_.y=0
_.cx=_.ch=_.Q=_.z=null
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
fC:function fC(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
k1:function k1(a){this.a=a}},Z={
m2:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.e8(c)),35044)
a.bindBuffer(b,null)
return new Z.h_(b,s)},
aG:function(a){return new Z.bp(a)},
h_:function h_(a,b){this.a=a
this.b=b},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dG:function dG(a){this.a=a},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
bp:function bp(a){this.a=a}},D={
E:function(){return new D.cg()},
ir:function ir(){},
cg:function cg(){var _=this
_.c=_.b=_.a=null
_.d=0},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
X:function X(){},
aW:function aW(){},
aX:function aX(){},
x:function x(a,b,c){this.c=a
this.d=b
this.e=c},
mC:function(){var s=new D.ey(new V.o(1,1,1),V.pg(),V.kq(),V.pf())
s.sn(0,new V.o(1,1,1))
return s},
ey:function ey(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
da:function da(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cM:function cM(a,b){this.a=a
this.b=b},eM:function eM(a,b){this.a=a
this.b=b},iX:function iX(a){this.d=a},dd:function dd(a,b,c){this.x=a
this.c=b
this.d=c},j3:function j3(a,b,c,d){var _=this
_.a=a
_.f=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},co:function co(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},jq:function jq(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},fd:function fd(){},dB:function dB(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},k6:function k6(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fY:function fY(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
lH:function(a){var s=new V.ar(0,0,0,1),r=V.lU()
return new X.iN(s,r)},
mY:function(a){var s,r,q=new X.f9(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gp().j(0,q.gfT())
q.a2(new D.x("mover",s,q.b))}r=q.c
$.B().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.a2(new D.x("fov",r,1.0471975511965976))}r=q.d
$.B().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.a2(new D.x("near",r,0.1))}r=q.e
$.B().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.a2(new D.x("far",r,2000))}return q},
il:function il(a,b,c){var _=this
_.d=_.c=_.b=_.a=512
_.f=!1
_.x=_.r=1
_.Q=_.z=_.y=null
_.ch=a
_.cx=b
_.cy=!0
_.db=2000
_.dx=!0
_.dy=c
_.fr=null},
iN:function iN(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
iS:function iS(){this.b=null},
f9:function f9(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
jS:function jS(){}},V={
lD:function(a){var s,r,q=a.length
if(0>=q)return H.c(a,0)
s=a[0]
if(1>=q)return H.c(a,1)
r=a[1]
if(2>=q)return H.c(a,2)
q=a[2]
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.o(s,r,q)},
oz:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.d.bi(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.o(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.o(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.o(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
l=b>1?1:b
return new V.o(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
l=b>1?1:b
return new V.o(n,m,l)
default:n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.o(n,m,l)}},
es:function(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
if(p<0)p=0
else if(p>1)p=1
return new V.ar(s,r,q,p)},
r_:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.c9(a-b,s)
return(a<0?a+s:a)+b},
y:function(a,b,c){$.B().toString
return C.b.aD(C.d.de(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cE:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.n)(a),++p){o=a[p]
$.B().toString
n=C.b.aD(C.d.de(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.c(l,m)
s=C.b.aD(l[m],q)
r=l.length
if(m>=r)return H.c(l,m)
l[m]=s}return l},
ef:function(a){return C.d.k7(Math.pow(2,C.d.bi(Math.log(a)/Math.log(2))))},
aM:function(){var s=$.mT
return s==null?$.mT=V.bk(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
bk:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.cn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
eT:function(a,b,c){return V.bk(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lQ:function(a,b,c,d){return V.bk(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
mS:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.bk(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
lP:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.bk(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
lO:function(a,b,c){var s=c.L(),r=b.bB(s).L(),q=s.bB(r),p=new V.D(a.a,a.b,a.c)
return V.bk(r.a,q.a,s.a,r.bp(0).ak(p),r.b,q.b,s.b,q.bp(0).ak(p),r.c,q.c,s.c,s.bp(0).ak(p),0,0,0,1)},
lR:function(){var s=$.b2
return s==null?$.b2=new V.a1(0,0,0):s},
lU:function(){var s=$.n5
return s==null?$.n5=V.n4(0,0,1,1):s},
n4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.fh(a,b,c,d)},
dF:function(){var s=$.nk
return s==null?$.nk=new V.D(0,0,0):s},
pf:function(){var s=$.kn
return s==null?$.kn=new V.D(-1,0,0):s},
kq:function(){var s=$.ko
return s==null?$.ko=new V.D(0,1,0):s},
pg:function(){var s=$.kp
return s==null?$.kp=new V.D(0,0,1):s},
pe:function(a,b,c){return new V.D(a,b,c)},
o:function o(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(){},
dk:function dk(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p},
T:function T(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
qU:function(a){P.pd(C.J,new V.lv(a))},
p6:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.b(P.e("The html document body was null."))
s=n.createElement("div")
s.className="scrollTop"
m.appendChild(s).toString
r=n.createElement("div")
r.className="scrollPage"
m.appendChild(r).toString
q=n.createElement("div")
q.className="pageCenter"
r.appendChild(q).toString
if(a.length!==0){n.title=a
p=n.createElement("div")
p.className="pageTitle"
p.textContent=a
q.appendChild(p).toString}o=n.createElement("div")
o.toString
q.appendChild(o).toString
W.Z(n,"scroll",new V.jJ(s),!1)
return new V.jH(o)},
lv:function lv(a){this.a=a},
jH:function jH(a){this.a=a
this.b=null},
jJ:function jJ(a){this.a=a},
jI:function jI(a){this.a=a}},U={
mB:function(){return new U.is()},
as:function(a){var s=new U.cQ(V.aM())
s.sZ(0,a)
return s},
is:function is(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cQ:function cQ(a){this.a=a
this.b=null},
ch:function ch(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
aB:function aB(){},
dE:function dE(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null}},M={
mE:function(){var s,r=O.ay(),q=new M.cZ(r)
r.bq(q.ghB(),q.ghD())
s=X.lH(null)
q.sbf(null)
q.sbn(0,s)
return q},
cP:function cP(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
cU:function cU(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
cZ:function cZ(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
oN:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gat(a5)+a6.gat(a6)+a7.gat(a7)+a8.gat(a8)+a9.gat(a9)+b0.gat(b0)+b1.gat(b1)+b2.gat(b2)+b3.gat(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.n)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.n)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.n)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.n)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
m=b1.a||b1.b||!1||b2.a||b2.b||!1
l=s>0
if(!(a6.a||a6.b||!1))if(!(a7.a||a7.b||!1)){s=a8.a||a8.b||!1||a9.a||a9.b||!1
k=s}else k=!0
else k=!0
s=!a9.a
j=!s||a9.b||!1||l||o>0||m
if(!(a7.a||a7.b||!1))i=a8.a||a8.b||!1||!s||a9.b||!1
else i=!0
if(!i)h=b0.a||b0.b||!1||m
else h=!0
g=b0.a||b0.b||!1
f=a5.b||a6.b||a7.b||a8.b||a9.b||b0.b||b1.b||b2.b||b3.b
e=a4>0
d=h||g||j||!1
c=l&&i
a0=a0&&f
b=$.aw()
if(h){s=$.bB()
b=new Z.bp(b.a|s.a)}if(g)b=new Z.bp(b.a|$.bA().a)
if(f)b=new Z.bp(b.a|$.bC().a)
if(e)b=new Z.bp(b.a|$.bz().a)
return new A.j8(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
l7:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
l8:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.l7(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.i8(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
q4:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.l7(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.b){r=s+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
q0:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.l8(b,r,"ambient")
b.a+="\n"},
q2:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.l8(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.e
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
q5:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.l8(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.e
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
qb:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.l8(b,r,"specular")
r=b.a+="\n"
r+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=r
r+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=r
r+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=r
r+=u.e
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
q7:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
r=a.f
q=r.b
if(q){s+="uniform sampler2D bumpTxt;\n"
b.a=s
s=b.a=s+"\n"}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=r.a
if(!(r||q||!1)||r)s=b.a=s+"   return normalize(normalVec);\n"
else{s=(q?b.a=s+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=s+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
b.a=s
s+="   vec3 b = normalize(binormalVec);\n"
b.a=s
s+="   vec3 c = normalize(cross(b, n));\n"
b.a=s
s+="   b = cross(n, c);\n"
b.a=s
s+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
b.a=s
s+="                   -c.x, -c.y, -c.z,\n"
b.a=s
s+="                    n.x,  n.y,  n.z);\n"
b.a=s
s=b.a=s+"   return mat * normalize(2.0*color - 1.0);\n"}s+="}\n"
b.a=s
b.a=s+"\n"},
q9:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.l7(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
qa:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.l7(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.b){r=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.b){r=s+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=r}else r=s
r+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=r
r+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
q1:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.i8(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 startPnt;\n"
c.a=p
p+="   vec3 endPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
s=(s&4)!==0
if(s){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+m+"];\n"
p+="\n"
c.a=p
p+="vec3 "+r+"ClosestPoint("+q+" lit)\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=p
p+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=p
p+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=p
p+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=p
p+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=p
p+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=p
p+="   return lit.startPnt + t*lineVec;\n"
c.a=p
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Intensity(vec3 normDir, vec3 litPnt, "+q+" lit)\n"
c.a=p
p+="{\n"
c.a=p
if(s){p+="   float dist = length(objPos - litPnt);\n"
c.a=p
p+=u.u
c.a=p
p+=u.z
c.a=p
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.q(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
s=a.b
if(s.a||s.b||!1)o.push("ambientColor")
if(a.dx){c.a+=u.k
o.push("highLight")
s=c.a+="   vec3 litPnt  = "+r+"ClosestPoint(lit);\n"
s+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=s
s+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=s
s+="   vec3 intensity = "+r+"Intensity(normDir, litPnt, lit);\n"
c.a=s
c.a=s+"   if(length(intensity) > 0.0001) {\n"
n=[]
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.q(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
c.a=s+u.o
m=c.a+="   for(int i = 0; i < "+m+"; ++i)\n"
m+="   {\n"
c.a=m
m+="      if(i >= "+r+"Count) break;\n"
c.a=m
m+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=m
m+="   }\n"
c.a=m
m+="   return lightAccum;\n"
c.a=m
m+="}\n"
c.a=m
c.a=m+"\n"},
q3:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.i8(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p=c.a=p+"{\n"
s=(s&1)!==0
if(s){p+="   vec3 objUp;\n"
c.a=p
p+="   vec3 objRight;\n"
c.a=p
p=c.a=p+"   vec3 objDir;\n"}p+="   vec3 viewDir;\n"
c.a=p
p+="   vec3 color;\n"
c.a=p
p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+k+"];\n"
if(s)for(o=0;o<k;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
m=[]
p=a.b
if(p.a||p.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(p.a||p.b||!1)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)l.push("specular(norm, lit.viewDir)")
if(s){p=c.a+="   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
p+="   float tu = dot(offset, lit.objUp);\n"
c.a=p
p+="   float tv = dot(offset, lit.objRight);\n"
c.a=p
p+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=p
p+="   vec3 intensity = texture2D(txt2D, txtLoc).xyz;\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001)\n"
c.a+="      highLight = intensity*("+C.a.q(l," + ")+");\n"}else c.a+="   highLight = "+C.a.q(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.q(m," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.o
c.a=p
if(s){for(s=p,o=0;o<k;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}k=s}else{k=c.a+="   for(int i = 0; i < "+k+"; ++i)\n"
k+="   {\n"
c.a=k
k+="      if(i >= "+r+"Count) break;\n"
c.a=k
k+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=k
k=c.a=k+"   }\n"}k+="   return lightAccum;\n"
c.a=k
k+="}\n"
c.a=k
c.a=k+"\n"},
q8:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.i8(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 point;\n"
c.a=p
p+="   vec3 viewPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
o=(s&3)!==0
if(o){p+="   mat3 invViewRotMat;\n"
c.a=p}n=(s&2)!==0
if(n){p+="   vec4 shadowAdj;\n"
c.a=p}m=(s&4)!==0
if(m){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+h+"];\n"
s=(s&1)!==0
if(s)for(l=0;l<h;++l)p=c.a+="uniform samplerCube "+r+"sTextureCube"+l+";\n"
p+="\n"
c.a=p
k=s?", samplerCube txtCube":""
if(n)k+=", samplerCube shadowCube"
p+="vec3 "+r+"Intensity(vec3 normDir, "+q+" lit"+k+")\n"
c.a=p
p+="{\n"
c.a=p
p=c.a=p+"   float dist = length(objPos - lit.point);\n"
if(m){p+=u.u
c.a=p
p+=u.z
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.v
c.a=p
p+=u.q
c.a=p
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.q(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
p=a.b
if(p.a||p.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.q(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.q(j," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.o
c.a=p
if(o){for(l=0;l<h;++l){c.a+="   if("+r+"Count <= "+l+") return lightAccum;\n"
k=s?", "+r+"sTextureCube"+l:""
if(n)k+=", "+r+"sShadowCube"+l
p=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+l+"]"+k+");\n"}h=p}else{h=c.a+="   for(int i = 0; i < "+h+"; ++i)\n"
h+="   {\n"
c.a=h
h+="      if(i >= "+r+"Count) break;\n"
c.a=h
h+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=h
h=c.a=h+"   }\n"}h+="   return lightAccum;\n"
c.a=h
h+="}\n"
c.a=h
c.a=h+"\n"},
qc:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.i8(r)
p=c.a+="// === "+q+" ===\n"
p+="\n"
c.a=p
p+="struct "+q+"\n"
c.a=p
p+="{\n"
c.a=p
p+="   vec3 objPnt;\n"
c.a=p
p+="   vec3 objDir;\n"
c.a=p
p+="   vec3 viewPnt;\n"
c.a=p
p=c.a=p+"   vec3 color;\n"
o=(s&3)!==0
if(o){p+="   vec3 objUp;\n"
c.a=p
p+="   vec3 objRight;\n"
c.a=p
p+="   float tuScalar;\n"
c.a=p
p+="   float tvScalar;\n"
c.a=p}n=(s&2)!==0
if(n){p+="   vec4 shadowAdj;\n"
c.a=p}m=(s&8)!==0
if(m){p+="   float cutoff;\n"
c.a=p
p+="   float coneAngle;\n"
c.a=p}l=(s&4)!==0
if(l){p+="   float att0;\n"
c.a=p
p+="   float att1;\n"
c.a=p
p=c.a=p+"   float att2;\n"}p+="};\n"
c.a=p
p+="\n"
c.a=p
c.a=p+("uniform int "+r+"Count;\n")
p=c.a+="uniform "+q+" "+r+"s["+e+"];\n"
k=(s&1)!==0
if(k)for(j=0;j<e;++j)p=c.a+=f+r+"sTexture2D"+j+";\n"
if(n)for(j=0;j<e;++j)p=c.a+=f+r+"sShadow2D"+j+";\n"
p+="\n"
c.a=p
i=k?", sampler2D txt2D":""
if(n)i+=", sampler2D shadow2D"
p+="vec3 "+r+"Intensity("+q+" lit"+i+")\n"
c.a=p
p+="{\n"
c.a=p
p=c.a=p+"   vec3 dir = objPos - lit.objPnt;\n"
if((s&6)!==0){s=p+"   float dist = length(dir);\n"
c.a=s}else s=p
if(l){s+=u.u
c.a=s
s+=u.z
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.iG
if(s==null)s=$.iG=new E.hc(E.nl(),E.nm())
p=c.a
if(s.b===C.u){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
c.a=s
s=c.a=s+"   float angle = atan(crossMag, zScale);\n"}else s=c.a=p+"   float angle = acos(zScale);\n"
s+="   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);\n"
c.a=s
s+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   if(scale >= 1.0) scale = 1.0;\n"
c.a=s
s+="\n"
c.a=s}if(o){s+="   normDir = normDir / zScale;\n"
c.a=s
s+="   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;\n"
c.a=s
s+="   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;\n"
c.a=s
s+="   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
s+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=s
s=c.a=s+"\n"}if(n){s+="   float depth = dot(texture2D(shadow2D, vec2(txtLoc.x, 1.0-txtLoc.y)), lit.shadowAdj);\n"
c.a=s
s+=u.v
c.a=s
s+=u.q
c.a=s
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.q(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
s=a.b
if(s.a||s.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.q(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.q(h," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
s+=u.o
c.a=s
if(o){for(j=0;j<e;++j){c.a+="   if("+r+"Count <= "+j+") return lightAccum;\n"
i=k?", "+r+"sTexture2D"+j:""
if(n)i+=", "+r+"sShadow2D"+j
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+j+"]"+i+");\n"}e=s}else{e=c.a+="   for(int i = 0; i < "+e+"; ++i)\n"
e+="   {\n"
c.a=e
e+="      if(i >= "+r+"Count) break;\n"
c.a=e
e+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=e
e=c.a=e+"   }\n"}e+="   return lightAccum;\n"
c.a=e
e+="}\n"
c.a=e
c.a=e+"\n"},
q6:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=[]
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.q(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
qd:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.bn(""),j=""+"precision mediump float;\n"
k.a=j
j=k.a=j+"\n"
s=a.k4
if(s){j+="varying vec3 normalVec;\n"
k.a=j}if(a.r1){j+="varying vec3 binormalVec;\n"
k.a=j}if(a.r2){j+="varying vec2 txt2D;\n"
k.a=j}if(a.rx){j+="varying vec3 txtCube;\n"
k.a=j}if(a.k2){j+="varying vec3 objPos;\n"
k.a=j}j=k.a=(a.k3?k.a=j+"varying vec3 viewPos;\n":j)+"\n"
r=a.y1
if(r){j+="uniform mat4 colorMat;\n"
k.a=j}if(a.go){j+="uniform mat4 viewMat;\n"
k.a=j}if(a.dy)j=k.a=j+"uniform mat4 invViewMat;\n"
k.a=j+"\n"
A.q4(a,k)
A.q0(a,k)
A.q2(a,k)
A.q5(a,k)
A.qb(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.q9(a,k)
A.qa(a,k)}A.q7(a,k)
q=k.a+="// === Alpha ===\n"
q=k.a=q+"\n"
p=a.y
o=p.a
if(o){q+="uniform float alpha;\n"
k.a=q}p=p.b
if(p)q=k.a=q+"uniform sampler2D alphaTxt;\n"
q+="float alphaValue()\n"
k.a=q
q=k.a=q+"{\n"
if(!(o||p||!1))q=k.a=q+"   return 1.0;\n"
else if(p||!1){if(o){if(p){q+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
k.a=q}}else if(p){q+="   float a = texture2D(alphaTxt, txt2D).a;\n"
k.a=q}q+="   if (a <= 0.000001) discard;\n"
k.a=q
q+="   return a;\n"
k.a=q}else if(o){q+="   return alpha;\n"
k.a=q}q+="}\n"
k.a=q
k.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.n)(p),++n)A.q1(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.n)(p),++n)A.q3(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.n)(p),++n)A.q8(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.n)(p),++n)A.qc(a,p[n],k)
A.q6(a,k)}p=k.a+="// === Main ===\n"
p+="\n"
k.a=p
p+="void main()\n"
k.a=p
p+="{\n"
k.a=p
p=k.a=p+"   float alpha = alphaValue();\n"
if(s){s=p+"   vec3 norm = normal();\n"
k.a=s}else s=p
j=j?k.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n":s
m=[]
if(q){k.a=j+u.o
m.push("lightAccum")
j=a.b
if(j.a||j.b||!1)k.a+="   setAmbientColor();\n"
j=a.c
if(j.a||j.b||!1)k.a+="   setDiffuseColor();\n"
j=a.d
if(j.a||j.b||!1)k.a+="   setInvDiffuseColor();\n"
j=a.e
if(j.a||j.b||!1)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.n)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.c(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.b5(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.n)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.c(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.b5(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.n)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.c(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.b5(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.n)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.c(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.b5(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.a.q(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
qe:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.bg+"];\n"
s+="attribute vec4 bendAttr;\n"
b.a=s
s+="\n"
b.a=s
s+="float weightSum;\n"
b.a=s
s=b.a=s+"vec3 bendPos;\n"
r=a.k4
if(r){s+="vec3 bendNorm;\n"
b.a=s}q=a.r1
s=(q?b.a=s+"vec3 bendBinm;\n":s)+"\n"
b.a=s
s+="void adjustBend(float bendVal)\n"
b.a=s
s+="{\n"
b.a=s
s+="   if(bendVal >= 0.0)\n"
b.a=s
s+="   {\n"
b.a=s
s+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
b.a=s
s+="      if(index < bendMatCount)\n"
b.a=s
s+="      {\n"
b.a=s
s+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
b.a=s
s+="         mat4 m = bendValues[index].mat;\n"
b.a=s
s+="         weightSum += weight;\n"
b.a=s
s=b.a=s+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(r){s+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
b.a=s}s=(q?b.a=s+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":s)+"      }\n"
b.a=s
s+="   }\n"
b.a=s
s+="}\n"
b.a=s
s+="\n"
b.a=s
s+="void setupBendData()\n"
b.a=s
s+="{\n"
b.a=s
s=b.a=s+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(r){s+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
b.a=s}s=(q?b.a=s+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":s)+"   weightSum = 0.0;\n"
b.a=s
s+="   adjustBend(bendAttr.x);\n"
b.a=s
s+="   adjustBend(bendAttr.y);\n"
b.a=s
s+="   adjustBend(bendAttr.z);\n"
b.a=s
s+="   adjustBend(bendAttr.w);\n"
b.a=s
s+="   if(weightSum < 1.0)\n"
b.a=s
s+="   {\n"
b.a=s
s+="      float weight = 1.0 - weightSum;\n"
b.a=s
s=b.a=s+"      bendPos += posAttr*weight;\n"
if(r){s+="      bendNorm += normAttr*weight;\n"
b.a=s}s=(q?b.a=s+"      bendBinm += binmAttr*weight;\n":s)+"   }\n"
b.a=s
s+="   else\n"
b.a=s
s+="   {\n"
b.a=s
s+="      bendPos = bendPos/weightSum;\n"
b.a=s
s=b.a=s+"   }\n"
if(r){s+="   bendNorm = normalize(bendNorm);\n"
b.a=s}s=(q?b.a=s+"   bendBinm = normalize(bendBinm);\n":s)+"}\n"
b.a=s
b.a=s+"\n"},
qg:function(a,b){var s
if(!a.k4)return
s=b.a+="varying vec3 normalVec;\n"
s+="\n"
b.a=s
s+="vec3 getNorm()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
qf:function(a,b){var s
if(!a.r1)return
s=b.a+="varying vec3 binormalVec;\n"
s+="\n"
b.a=s
s+="vec3 getBinm()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
qi:function(a,b){var s,r
if(!a.r2)return
s=a.x1
if(s)b.a+="uniform mat3 txt2DMat;\n"
r=b.a+="attribute vec2 txt2DAttr;\n"
r+="varying vec2 txt2D;\n"
b.a=r
r+="\n"
b.a=r
r+="vec2 getTxt2D()\n"
b.a=r
r=b.a=r+"{\n"
r=(s?b.a=r+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":b.a=r+"   return txt2DAttr;\n")+"}\n"
b.a=r
b.a=r+"\n"},
qj:function(a,b){var s,r
if(!a.rx)return
s=a.x2
if(s)b.a+="uniform mat4 txtCubeMat;\n"
r=b.a+="attribute vec3 txtCubeAttr;\n"
r+="varying vec3 txtCube;\n"
b.a=r
r+="\n"
b.a=r
r+="vec3 getTxtCube()\n"
b.a=r
r=b.a=r+"{\n"
r=(s?b.a=r+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":b.a=r+"   return txtCubeAttr;\n")+"}\n"
b.a=r
b.a=r+"\n"},
qh:function(a,b){var s
if(!a.k2)return
s=b.a+="varying vec3 objPos;\n"
s+="\n"
b.a=s
s+="vec3 getObjPos()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
qk:function(a,b){var s
if(!a.k3)return
s=b.a+="varying vec3 viewPos;\n"
s+="\n"
b.a=s
s+="vec3 getViewPos()\n"
b.a=s
s+="{\n"
b.a=s
s+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=s
s+="}\n"
b.a=s
b.a=s+"\n"},
i8:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.b.b5(a,1)},
m0:function(a,b,c,d,e){var s=new A.kc([],a,c,e)
s.f=d
s.e=P.cl(d,0,!1)
return s},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dh:function dh(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.ko=_.eF=_.eE=_.kn=_.eD=_.eC=_.eB=_.km=_.eA=_.ez=_.ey=_.kl=_.ex=_.ew=_.kk=_.ev=_.eu=_.es=_.bh=_.bg=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cO=c
_.cP=d
_.cQ=e
_.cR=f
_.cS=g
_.cT=h
_.cU=i
_.cV=j
_.kr=_.kq=_.kp=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
bD:function bD(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
c2:function c2(a,b){this.a=a
this.b=b},
j8:function j8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r
_.fx=s
_.fy=a0
_.go=a1
_.id=a2
_.k1=a3
_.k2=a4
_.k3=a5
_.k4=a6
_.r1=a7
_.r2=a8
_.rx=a9
_.ry=b0
_.x1=b1
_.x2=b2
_.y1=b3
_.y2=b4
_.bg=b5
_.bh=b6
_.es=b7},
fM:function fM(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
fN:function fN(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
fQ:function fQ(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j},
fT:function fT(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m
_.db=n
_.dx=o
_.dy=p},
c1:function c1(){},
dw:function dw(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
dx:function dx(a,b){var _=this
_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
kb:function kb(){},
kh:function kh(a){this.a=a},
dC:function dC(a,b,c){this.a=a
this.c=b
this.d=c},
ke:function ke(a,b,c){this.a=a
this.c=b
this.d=c},
kf:function kf(a,b,c){this.a=a
this.c=b
this.d=c},
kg:function kg(a,b,c){this.a=a
this.c=b
this.d=c},
kc:function kc(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
fJ:function fJ(a,b,c){this.a=a
this.c=b
this.d=c},
kd:function kd(a,b,c){this.a=a
this.c=b
this.d=c},
fK:function fK(a,b,c){this.a=a
this.c=b
this.d=c},
fL:function fL(a,b,c){this.a=a
this.c=b
this.d=c},
ki:function ki(a,b,c){this.a=a
this.c=b
this.d=c},
fO:function fO(a,b,c){this.a=a
this.c=b
this.d=c},
fP:function fP(a,b,c){this.a=a
this.c=b
this.d=c},
fR:function fR(a,b,c){this.a=a
this.c=b
this.d=c},
fS:function fS(a,b,c){this.a=a
this.c=b
this.d=c}},F={
qC:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new F.ll()
if(a<3)throw H.b(P.e("Must have 3 or more sizes for a disk."))
s=F.lV()
r=-6.283185307179586/a
q=[]
p=s.gai()
o=new V.D(0,0,1).L()
q.push(p.iZ(new V.b3(-1,-1,-1,-1),new V.ar(1,1,1,1),new V.a1(0,0,0),new V.D(0,0,1),new V.T(0.5,0.5),o))
for(n=0;n<=a;++n){m=r*n
l=Math.sin(m)
k=Math.cos(m)
j=e.$1(n/a)
p=s.a
if(p==null)p=s.a=new F.a7(s,[])
o=new V.D(l,k,1).L()
if(l<0)i=0
else i=l>1?1:l
h=k<0
if(h)g=0
else g=k>1?1:k
if(h)h=0
else h=k>1?1:k
f=F.m1(new V.b3(-1,-1,-1,-1),null,new V.ar(i,g,h,1),new V.a1(l*j,k*j,0),new V.D(0,0,1),new V.T(l*0.5+0.5,k*0.5+0.5),o,null,0)
p.j(0,f)
q.push(f)}s.gaw().cD(q)
return s},
lV:function(){return new F.jF()},
m1:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.kr()
h=$.oe()
s=$.aw()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bB().a)!==0)q.r=e
if((r&$.bA().a)!==0)q.x=b
if((r&$.bC().a)!==0)q.y=f
if((r&$.cb().a)!==0)q.z=g
if((r&$.of().a)!==0)q.Q=c
if((r&$.cI().a)!==0)q.ch=i
if((r&$.bz().a)!==0)q.cx=a
return q},
ll:function ll(){},
d0:function d0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(){this.b=this.a=null},
ju:function ju(){this.a=null},
jF:function jF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
jG:function jG(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
du:function du(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
kr:function kr(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
kx:function kx(a){this.a=a},
kw:function kw(a){this.a=a},
a7:function a7(a,b){this.a=a
this.b=!1
this.c=b},
cu:function cu(a,b,c){this.b=a
this.c=b
this.d=c},
ks:function ks(a,b){this.a=a
this.b=b},
kt:function kt(a,b){this.a=a
this.b=b},
ku:function ku(a,b){this.b=a
this.c=b},
kv:function kv(a){this.b=a}},T={
lY:function(a){return new T.jW(a)},
et:function et(a){var _=this
_.a=a
_.x=_.f=_.d=_.c=_.b=null
_.ch=_.Q=!1},
cO:function cO(a,b){this.c=a
this.d=b},
jU:function jU(){},
jV:function jV(){},
jW:function jW(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
jX:function jX(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},
jY:function jY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},
k_:function k_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
jZ:function jZ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c}},Q={
mQ:function(a){if(a>=64)return new Q.i(0,0)
return new Q.i(C.c.aa(a,8)+1,C.c.c9(a,8)+1)},
nb:function(){return new Q.jL(P.cl(64,$.O().a,!1))},
ai:function(a){return new Q.t(a)},
iO:function iO(a){this.a=!0
this.c=a
this.d=null},
i:function i(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jL:function jL(a){this.a=a
this.c=null},
jN:function jN(a){this.a=a},
jO:function jO(a,b){this.a=a
this.b=b},
jM:function jM(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a){this.c=a
this.d=!1},
t:function t(a){this.a=a}},S={
io:function(a,b,c,d,e,f){var s=null,r=new S.eq(b,c,e,f,new Q.i(0,0),U.as(s),$.O(),"",!0,O.ay())
r.ax(s,!0,s,"",s,s)
r.fp(a,b,c,d,e,f,{})
return r},
iC:function(a,b,c,d,e,f){var s=null,r=new S.eA("",!0,O.ay())
r.ax(s,!0,s,"",s,s)
r.fs(a,b,c,d,e,f)
return r},
qV:function(a9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null,a6="modifiers",a7=document,a8=a7.getElementById("targetCanvas")
if(a8==null)H.f(P.e("Failed to find an element with the identifier, targetCanvas."))
s=E.pb(a8,!0,!0,!0,!1)
r=s.x
q=U.mB()
p=U.mB()
o=$.km
if(o==null)o=$.km=new V.aj(0,0)
o=new U.dE(q,p,new X.b0(!1,!1,!1),o,V.aM())
q.sdh(0,!0)
q.sd3(6.283185307179586)
q.sd4(0)
q.saB(0,0)
q.seN(100)
q.sao(0)
q.sen(0.5)
n=o.gbO()
q.gp().j(0,n)
p.sdh(0,!0)
p.sd3(6.283185307179586)
p.sd4(0)
p.saB(0,0)
p.seN(100)
p.sao(0)
p.sen(0.5)
p.gp().j(0,n)
p=new X.b0(!1,!1,!1)
if(!o.d.m(0,p)){m=o.d
o.d=p
o.a9(new D.x(a6,m,p))}o.cF(r)
q.sd4(-1.5707963267948966)
q.sd3(0)
q.saB(0,-0.5)
q.sdh(0,!1)
q=U.as(V.lQ(1.75,1.75,1.75,1))
p=U.as(V.eT(0,0,15))
n=new U.ch(V.aM(),[])
n.bq(n.ghr(),n.gi6())
n.ap(0,[o,q,p])
l=X.mY(n)
k=X.lH(a5)
if(k.b){k.b=!1
k.a2(new D.x("clearColor",!0,!1))}q=new S.jk(s)
j=new S.cJ(a9,[],[],[],q,"",!0,O.ay())
j.ax(a5,!0,a5,"",a5,a5)
j.fq(s,a9)
q=q.gI()
p=E.Q(a5,!0,a5,"",a5,a5)
i=new M.cU(p)
h=F.lV()
o=h.gai()
n=new V.D(-1,-1,1).L()
g=o.bV(new V.b3(1,2,4,6),V.es(255,0,0,255),new V.a1(-1,-1,0),new V.T(0,1),n,a5)
n=h.gai()
o=new V.D(1,-1,1).L()
f=n.bV(new V.b3(0,3,4,6),V.es(0,0,255,255),new V.a1(1,-1,0),new V.T(1,1),o,a5)
o=h.gai()
n=new V.D(1,1,1).L()
e=o.bV(new V.b3(0,2,5,6),V.es(0,128,0,255),new V.a1(1,1,0),new V.T(1,0),n,a5)
n=h.gai()
o=$.a6
if(o==null)o=$.a6=new V.T(0,0)
d=new V.D(-1,1,1).L()
c=n.bV(new V.b3(0,2,4,7),V.es(255,255,0,255),new V.a1(-1,1,0),o,d,a5)
h.gaw().cD([g,f,e,c])
h.be()
p.sa0(0,h)
i.sbf(a5)
i.sbn(0,a5)
i.sa_(a5)
p=new O.fo(new V.o(1,1,1))
m=p.c
p.c=q
q.gp().j(0,p.gaI())
p.U(new D.x("boxTexture",m,p.c))
i.sa_(p)
i.sbn(0,k)
i.sbf(l)
b=M.mE()
b.sbn(0,k)
b.sbf(l)
b.e.j(0,j)
q=T.lY(a5)
a=new X.il(q,new V.ar(0,0,0,1),V.lU())
a.saG(0,512)
a.saz(0,512)
a0=new V.ar(0,0,0,1)
if(!a.cx.m(0,a0)){m=a.cx
a.cx=a0
a.a2(new D.x("color",m,a0))}p=a.db
$.B().toString
if(!(Math.abs(p-2000)<1e-9)){a.db=2000
a.a2(new D.x("depth",p,2000))}if(!a.f){a.f=!0
a.a2(new D.x("autoResize",!1,!0))}p=a.r
$.B().toString
if(!(Math.abs(p-0.5)<1e-9)){a.r=0.5
a.a2(new D.x("autoResizeScalarX",p,0.5))}p=a.x
$.B().toString
if(!(Math.abs(p-0.5)<1e-9)){a.x=0.5
a.a2(new D.x("autoResizeScalarY",p,0.5))}a1=V.lU()
if(!a.dy.m(0,a1)){m=a.dy
a.dy=a1
a.a2(new D.x("region",m,a1))}a2=M.mE()
a2.sbn(0,a)
a2.sbf(l)
a2.e.j(0,j)
p=new T.et(s.f)
a3=new X.b0(!1,!1,!1)
p.c=a3
p.bK(new D.x(a6,a5,a3))
o=p.d
if(o!==q){if(o!=null)o.gp().R(0,p.gdB())
m=p.d
p.d=q
q.gp().j(0,p.gdB())
p.bK(new D.x("texture",m,p.d))}p.cF(r)
r=p.f
if(r==null)r=p.f=D.E()
r.j(0,new S.lw(j,s,a2))
r=p.x
if(r==null)r=p.x=D.E()
r.j(0,new S.lx(j))
r=new M.cP([])
r.bq(r.gia(),r.gic())
r.ap(0,[i,b])
q=s.d
if(q!==r){if(q!=null)q.gp().R(0,s.gdw())
s.d=r
r.gp().j(0,s.gdw())
s.dz()}a8=a7.getElementById("buttons")
a4=a7.createElement("button")
a4.textContent="Fullscreen"
W.Z(a4,"click",new S.ly(s),!1)
if(a8!=null)J.mr(a8).j(0,a4)
V.qU(s)},
mJ:function(a,b,c,d,e){var s=null,r=new S.eN(b,c,d,e,new Q.i(0,0),U.as(s),$.O(),"",!0,O.ay())
r.ax(s,!0,s,"",s,s)
r.ft(a,b,c,d,e,{})
return r},
iZ:function(a,b,c,d,e,f){var s=null,r=new S.eO(b,c,e,f,new Q.i(0,0),U.as(s),$.O(),"",!0,O.ay())
r.ax(s,!0,s,"",s,s)
r.fu(a,b,c,d,e,f,{})
return r},
mV:function(a,b,c,d,e,f){var s=null,r=new S.f8(b,c,e,f,new Q.i(0,0),U.as(s),$.O(),"",!0,O.ay())
r.ax(s,!0,s,"",s,s)
r.fz(a,b,c,d,e,f,{})
return r},
n_:function(a,b,c,d,e,f){var s=null,r=new S.ff(b,c,e,f,new Q.i(0,0),U.as(s),$.O(),"",!0,O.ay())
r.ax(s,!0,s,"",s,s)
r.fA(a,b,c,d,e,f,{})
return r},
jC:function(a,b,c,d,e,f){var s=null,r=new S.fi(b,c,e,f,new Q.i(0,0),U.as(s),$.O(),"",!0,O.ay())
r.ax(s,!0,s,"",s,s)
r.fC(a,b,c,d,e,f,{})
return r},
pc:function(a,b,c,d){var s=null,r=new S.fD(d,b,c,"",!0,O.ay())
r.ax(s,!0,s,"",s,s)
r.fD(a,b,c,d,{})
return r},
eq:function eq(a,b,c,d,e,f,g,h,i,j){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.k4=g
_.rx=_.r2=_.r1=!1
_.x2=_.x1=_.ry=null
_.a=h
_.b=i
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=j
_.z=null},
ip:function ip(a){this.a=a},
cJ:function cJ(a,b,c,d,e,f,g,h){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k3=_.k2=null
_.k4=e
_.r1=!1
_.a=f
_.b=g
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=h
_.z=null},
eA:function eA(a,b,c){var _=this
_.a=a
_.b=b
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=c
_.z=null},
iD:function iD(){},
lw:function lw(a,b,c){this.a=a
this.b=b
this.c=c},
lx:function lx(a){this.a=a},
ly:function ly(a){this.a=a},
eN:function eN(a,b,c,d,e,f,g,h,i,j){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.k4=g
_.rx=_.r2=_.r1=!1
_.x2=_.x1=_.ry=null
_.a=h
_.b=i
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=j
_.z=null},
iY:function iY(a){this.a=a},
eO:function eO(a,b,c,d,e,f,g,h,i,j){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.k4=g
_.rx=_.r2=_.r1=!1
_.x2=_.x1=_.ry=null
_.a=h
_.b=i
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=j
_.z=null},
j_:function j_(a){this.a=a},
jk:function jk(a){var _=this
_.a=a
_.fy=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
f8:function f8(a,b,c,d,e,f,g,h,i,j){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.k4=g
_.rx=_.r2=_.r1=!1
_.x2=_.x1=_.ry=null
_.a=h
_.b=i
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=j
_.z=null},
jt:function jt(a){this.a=a},
fa:function fa(){},
ff:function ff(a,b,c,d,e,f,g,h,i,j){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.k4=g
_.rx=_.r2=_.r1=!1
_.x2=_.x1=_.ry=null
_.a=h
_.b=i
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=j
_.z=null},
jx:function jx(a){this.a=a},
fi:function fi(a,b,c,d,e,f,g,h,i,j){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.k4=g
_.rx=_.r2=_.r1=!1
_.x2=_.x1=_.ry=null
_.a=h
_.b=i
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=j
_.z=null},
jD:function jD(a){this.a=a},
fD:function fD(a,b,c,d,e,f){var _=this
_.fy=a
_.go=b
_.id=c
_.k3=_.k2=_.k1=!1
_.r2=_.r1=_.k4=null
_.a=d
_.b=e
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=f
_.z=null},
k2:function k2(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,Q,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lM.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gF:function(a){return H.dr(a)},
i:function(a){return"Instance of '"+H.ds(a)+"'"},
eR:function(a,b){throw H.b(P.mU(a,b.geO(),b.gf_(),b.geP()))}}
J.eI.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ic6:1}
J.cj.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0},
$ia0:1}
J.bP.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.fb.prototype={}
J.c5.prototype={}
J.aY.prototype={
i:function(a){var s=a[$.lz()]
if(s==null)return this.fj(a)
return"JavaScript function for "+H.r(J.ib(s))},
$id3:1}
J.aA.prototype={
j:function(a,b){if(!!a.fixed$length)H.f(P.z("add"))
a.push(b)},
R:function(a,b){var s
if(!!a.fixed$length)H.f(P.z("remove"))
for(s=0;s<a.length;++s)if(J.P(a[s],b)){a.splice(s,1)
return!0}return!1},
ap:function(a,b){var s
if(!!a.fixed$length)H.f(P.z("addAll"))
if(Array.isArray(b)){this.fV(a,b)
return}for(s=J.aS(b);s.t();)a.push(s.gG(s))},
fV:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.b(P.bI(a))
for(s=0;s<r;++s)a.push(b[s])},
D:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.bI(a))}},
d2:function(a,b){return new H.bV(a,b)},
eM:function(a,b){return this.d2(a,b,t.z)},
q:function(a,b){var s,r,q=a.length,p=P.cl(q,"",!1)
for(s=0;s<a.length;++s){r=H.r(a[s])
if(s>=q)return H.c(p,s)
p[s]=r}return p.join(b)},
jn:function(a){return this.q(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
gd_:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.oG())},
bs:function(a,b){if(!!a.immutable$list)H.f(P.z("sort"))
H.p9(a,b==null?J.pS():b)},
fg:function(a){return this.bs(a,null)},
P:function(a,b){var s
for(s=0;s<a.length;++s)if(J.P(a[s],b))return!0
return!1},
i:function(a){return P.lI(a,"[","]")},
gT:function(a){return new J.ae(a,a.length)},
gF:function(a){return H.dr(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.f(P.z("set length"))
if(b>a.length)H.ny(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.cD(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.f(P.z("indexed set"))
if(b>=a.length||b<0)throw H.b(H.cD(a,b))
a[b]=c},
$iu:1,
$ik:1,
$ih:1,
$ip:1}
J.eK.prototype={}
J.ae.prototype={
gG:function(a){return H.a_(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.n(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.ck.prototype={
aj:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gc_(b)
if(this.gc_(a)===s)return 0
if(this.gc_(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gc_:function(a){return a===0?1/a<0:a<0},
k7:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.z(""+a+".toInt()"))},
bi:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.z(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.z(""+a+".round()"))},
j2:function(a,b,c){if(C.c.aj(b,c)>0)throw H.b(H.i5(b))
if(this.aj(a,b)<0)return b
if(this.aj(a,c)>0)return c
return a},
de:function(a,b){var s
if(b>20)throw H.b(P.b5(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gc_(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
c9:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
fo:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e2(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.e2(a,b)},
e2:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.z("Result of truncating division is "+H.r(s)+": "+H.r(a)+" ~/ "+b))},
bS:function(a,b){var s
if(a>0)s=this.iM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
iM:function(a,b){return b>31?0:a>>>b},
$ia9:1,
$iaa:1}
J.d6.prototype={$il:1}
J.eJ.prototype={}
J.bi.prototype={
aU:function(a,b){if(b<0)throw H.b(H.cD(a,b))
if(b>=a.length)H.f(H.cD(a,b))
return a.charCodeAt(b)},
bM:function(a,b){if(b>=a.length)throw H.b(H.cD(a,b))
return a.charCodeAt(b)},
Y:function(a,b){return a+b},
bI:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.fg(b,null))
if(b>c)throw H.b(P.fg(b,null))
if(c>a.length)throw H.b(P.fg(c,null))
return a.substring(b,c)},
b5:function(a,b){return this.bI(a,b,null)},
df:function(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.bM(p,0)===133){s=J.oK(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.aU(p,r)===133?J.lL(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
kb:function(a){var s,r,q
if(typeof a.trimRight!="undefined"){s=a.trimRight()
r=s.length
if(r===0)return s
q=r-1
if(this.aU(s,q)===133)r=J.lL(s,q)}else{r=J.lL(a,a.length)
s=a}if(r===s.length)return s
if(r===0)return""
return s.substring(0,r)},
N:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aD:function(a,b){var s=b-a.length
if(s<=0)return a
return this.N(" ",s)+a},
c3:function(a,b){var s=b-a.length
if(s<=0)return a
return a+this.N(" ",s)},
jk:function(a,b){var s=a.indexOf(b,0)
return s},
jo:function(a,b){var s=a.length,r=b.length
if(s+r>s)s-=r
return a.lastIndexOf(b,s)},
j6:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.b5(c,0,s,null,null))
return H.nZ(a,b,c)},
P:function(a,b){return this.j6(a,b,0)},
aj:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gF:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk:function(a){return a.length},
$iu:1,
$iC:1}
H.eP.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.U.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.b.aU(this.a,b)}}
H.k.prototype={}
H.dc.prototype={
gT:function(a){return new H.bT(this,this.gk(this))}}
H.bT.prototype={
gG:function(a){return H.a_(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.ed(q),o=p.gk(q)
if(r.b!==o)throw H.b(P.bI(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.bU.prototype={
gT:function(a){return new H.dg(J.aS(this.a),this.b)},
gk:function(a){return J.ax(this.a)},
H:function(a,b){return this.b.$1(J.i9(this.a,b))}}
H.cY.prototype={$ik:1}
H.dg.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gG(r))
return!0}s.a=null
return!1},
gG:function(a){return H.a_(this).Q[1].a(this.a)}}
H.bV.prototype={
gk:function(a){return J.ax(this.a)},
H:function(a,b){return this.b.$1(J.i9(this.a,b))}}
H.dH.prototype={
gT:function(a){return new H.h0(J.aS(this.a),this.b)}}
H.h0.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gG(s)))return!0
return!1},
gG:function(a){var s=this.a
return s.gG(s)}}
H.d1.prototype={}
H.fW.prototype={
l:function(a,b,c){throw H.b(P.z("Cannot modify an unmodifiable list"))}}
H.ct.prototype={}
H.cs.prototype={
gF:function(a){var s=this._hashCode
if(s!=null)return s
s=664597*J.ei(this.a)&536870911
this._hashCode=s
return s},
i:function(a){return'Symbol("'+H.r(this.a)+'")'},
m:function(a,b){if(b==null)return!1
return b instanceof H.cs&&this.a==b.a},
$idA:1}
H.cS.prototype={}
H.cR.prototype={
i:function(a){return P.j4(this)},
$iN:1}
H.cT.prototype={
gk:function(a){return this.a},
hb:function(a){return this.b[a]},
D:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.hb(q))}}}
H.iT.prototype={
geO:function(){var s=this.a
return s},
gf_:function(){var s,r,q,p,o=this
if(o.c===1)return C.q
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return C.q
q=[]
for(p=0;p<r;++p){if(p>=s.length)return H.c(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
geP:function(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return C.t
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return C.t
o=new H.Y(t.bV)
for(n=0;n<r;++n){if(n>=s.length)return H.c(s,n)
m=s[n]
l=p+n
if(l<0||l>=q.length)return H.c(q,l)
o.l(0,new H.cs(m),q[l])}return new H.cS(o,t.s)}}
H.jw.prototype={
$2:function(a,b){var s=this.a
s.b=s.b+"$"+a
this.b.push(a)
this.c.push(b);++s.a},
$S:6}
H.k9.prototype={
aC:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.dq.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eL.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fV.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.js.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.d_.prototype={}
H.dY.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib8:1}
H.bH.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.o1(r==null?"unknown":r)+"'"},
$id3:1,
gkd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fz.prototype={}
H.fu.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.o1(s)+"'"}}
H.cc.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cc))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.dr(this.a)
else s=typeof r!=="object"?J.ei(r):H.dr(r)
return(s^H.dr(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.r(this.d)+"' of "+("Instance of '"+H.ds(s)+"'")}}
H.fk.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.kT.prototype={}
H.Y.prototype={
gk:function(a){return this.a},
gb1:function(a){return new H.bj(this)},
gkc:function(a){return H.oM(new H.bj(this),new H.iW(this))},
el:function(a,b){var s=this.b
if(s==null)return!1
return this.h5(s,b)},
ap:function(a,b){J.ia(b,new H.iV(this))},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bN(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bN(p,b)
q=r==null?n:r.b
return q}else return o.jl(b)},
jl:function(a){var s,r,q=this.d
if(q==null)return null
s=this.dN(q,J.ei(a)&0x3ffffff)
r=this.eH(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.dC(s==null?m.b=m.co():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.dC(r==null?m.c=m.co():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.co()
p=J.ei(b)&0x3ffffff
o=m.dN(q,p)
if(o==null)m.cA(q,p,[m.cp(b,c)])
else{n=m.eH(o,b)
if(n>=0)o[n].b=c
else o.push(m.cp(b,c))}}},
D:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.bI(s))
r=r.c}},
dC:function(a,b,c){var s=this.bN(a,b)
if(s==null)this.cA(a,b,this.cp(b,c))
else s.b=c},
cp:function(a,b){var s=this,r=new H.j1(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
eH:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.P(a[r].a,b))return r
return-1},
i:function(a){return P.j4(this)},
bN:function(a,b){return a[b]},
dN:function(a,b){return a[b]},
cA:function(a,b,c){a[b]=c},
h8:function(a,b){delete a[b]},
h5:function(a,b){return this.bN(a,b)!=null},
co:function(){var s="<non-identifier-key>",r=Object.create(null)
this.cA(r,s,r)
this.h8(r,s)
return r}}
H.iW.prototype={
$1:function(a){var s=this.a
return H.a_(s).Q[1].a(s.h(0,a))},
$S:function(){return H.a_(this.a).V("2(1)")}}
H.iV.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:function(){return H.a_(this.a).V("~(1,2)")}}
H.j1.prototype={}
H.bj.prototype={
gk:function(a){return this.a.a},
gT:function(a){var s=this.a,r=new H.eR(s,s.r)
r.c=s.e
return r}}
H.eR.prototype={
gG:function(a){return H.a_(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.bI(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.lp.prototype={
$1:function(a){return this.a(a)},
$S:11}
H.lq.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.lr.prototype={
$1:function(a){return this.a(a)},
$S:29}
H.iU.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
ghq:function(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=H.mI(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
jf:function(a){var s=this.b.exec(a)
if(s==null)return null
return new H.dP(s)},
ha:function(a,b){var s,r=this.ghq()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new H.dP(s)}}
H.dP.prototype={$in3:1}
H.ky.prototype={
gG:function(a){return t.d.a(this.d)},
t:function(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.ha(l,s)
if(p!=null){m.d=p
s=p.b
o=s.index
n=o+s[0].length
if(o===n){if(q.b.unicode){s=m.c
q=s+1
if(q<r){s=C.b.aU(l,s)
if(s>=55296&&s<=56319){s=C.b.aU(l,q)
s=s>=56320&&s<=57343}else s=!1}else s=!1}else s=!1
n=(s?n+1:n)+1}m.c=n
return!0}}m.b=m.d=null
return!1}}
H.bX.prototype={$iaF:1}
H.cp.prototype={
gk:function(a){return a.length},
$iu:1,
$iw:1}
H.bW.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]},
l:function(a,b,c){H.bc(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$ip:1}
H.dm.prototype={
l:function(a,b,c){H.bc(b,a,a.length)
a[b]=c},
$ik:1,
$ih:1,
$ip:1}
H.eY.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.eZ.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.f_.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.f0.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.f1.prototype={
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.dn.prototype={
gk:function(a){return a.length},
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.f2.prototype={
gk:function(a){return a.length},
h:function(a,b){H.bc(b,a,a.length)
return a[b]}}
H.dR.prototype={}
H.dS.prototype={}
H.dT.prototype={}
H.dU.prototype={}
H.aD.prototype={
V:function(a){return H.hS(v.typeUniverse,this,a)},
bL:function(a){return H.pD(v.typeUniverse,this,a)}}
H.hi.prototype={}
H.hd.prototype={
i:function(a){return this.a}}
H.e2.prototype={}
P.kA.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:21}
P.kz.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:36}
P.kB.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:12}
P.kC.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:12}
P.e1.prototype={
fR:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cC(new P.kY(this,b),0),a)
else throw H.b(P.z("`setTimeout()` not found."))},
fS:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cC(new P.kX(this,a,Date.now(),b),0),a)
else throw H.b(P.z("Periodic timer."))},
$ik4:1}
P.kY.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$C:"$0",
$R:0,
$S:2}
P.kX.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.fo(s,o)}q.c=p
r.d.$1(q)},
$C:"$0",
$R:0,
$S:12}
P.h1.prototype={
cL:function(a,b){var s,r=this
if(b==null)b=r.$ti.c.a(b)
if(!r.b)r.a.dD(b)
else{s=r.a
if(r.$ti.V("bL<1>").b(b))s.dG(b)
else s.cg(b)}},
bZ:function(a,b){var s=this.a
if(this.b)s.bw(a,b)
else s.dE(a,b)}}
P.l0.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:19}
P.l1.prototype={
$2:function(a,b){this.a.$2(1,new H.d_(a,b))},
$C:"$2",
$R:2,
$S:60}
P.lg.prototype={
$2:function(a,b){this.a(a,b)},
$S:59}
P.cw.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.r(this.a)+")"}}
P.cy.prototype={
gG:function(a){var s=this.c
if(s==null)return this.b
return s.gG(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cw){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.c(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aS(s)
if(o instanceof P.cy){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dZ.prototype={
gT:function(a){return new P.cy(this.a())}}
P.en.prototype={
i:function(a){return H.r(this.a)},
$iF:1,
gbH:function(){return this.b}}
P.dJ.prototype={
bZ:function(a,b){var s
H.i6(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.b(P.lW("Future already completed"))
if(b==null)b=P.mv(a)
s.dE(a,b)},
ek:function(a){return this.bZ(a,null)}}
P.dI.prototype={
cL:function(a,b){var s=this.a
if(s.a!==0)throw H.b(P.lW("Future already completed"))
s.dD(b)}}
P.cv.prototype={
jq:function(a){if((this.c&15)!==6)return!0
return this.b.b.dc(this.d,a.a)},
jh:function(a){var s=this.e,r=a.a,q=this.b.b
if(t.b.b(s))return q.jX(s,r,a.b)
else return q.dc(s,r)}}
P.a8.prototype={
dd:function(a,b,c){var s,r,q=$.I
if(q!==C.e)b=b!=null?P.qm(b,q):b
s=new P.a8(q,c.V("a8<0>"))
r=b==null?1:3
this.cc(new P.cv(s,r,a,b,this.$ti.V("@<1>").bL(c).V("cv<1,2>")))
return s},
aE:function(a,b){return this.dd(a,null,b)},
e3:function(a,b,c){var s=new P.a8($.I,c.V("a8<0>"))
this.cc(new P.cv(s,19,a,b,this.$ti.V("@<1>").bL(c).V("cv<1,2>")))
return s},
cc:function(a){var s,r=this,q=r.a
if(q<=1){a.a=r.c
r.c=a}else{if(q===2){q=r.c
s=q.a
if(s<4){q.cc(a)
return}r.a=s
r.c=q.c}P.cA(null,null,r.b,new P.kE(r,a))}},
dW:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=m.c
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){s=m.c
n=s.a
if(n<4){s.dW(a)
return}m.a=n
m.c=s.c}l.a=m.bR(a)
P.cA(null,null,m.b,new P.kL(l,m))}},
cv:function(){var s=this.c
this.c=null
return this.bR(s)},
bR:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
h1:function(a){var s,r,q,p=this
p.a=1
try{a.dd(new P.kH(p),new P.kI(p),t.P)}catch(q){s=H.a3(q)
r=H.bd(q)
P.qT(new P.kJ(p,s,r))}},
cg:function(a){var s=this,r=s.cv()
s.a=4
s.c=a
P.dL(s,r)},
bw:function(a,b){var s=this,r=s.cv(),q=P.ig(a,b)
s.a=8
s.c=q
P.dL(s,r)},
dD:function(a){if(this.$ti.V("bL<1>").b(a)){this.dG(a)
return}this.fX(a)},
fX:function(a){this.a=1
P.cA(null,null,this.b,new P.kG(this,a))},
dG:function(a){var s=this
if(s.$ti.b(a)){if(a.a===8){s.a=1
P.cA(null,null,s.b,new P.kK(s,a))}else P.m4(a,s)
return}s.h1(a)},
dE:function(a,b){this.a=1
P.cA(null,null,this.b,new P.kF(this,a,b))},
$ibL:1}
P.kE.prototype={
$0:function(){P.dL(this.a,this.b)},
$S:2}
P.kL.prototype={
$0:function(){P.dL(this.b,this.a.a)},
$S:2}
P.kH.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.cg(p.$ti.c.a(a))}catch(q){s=H.a3(q)
r=H.bd(q)
p.bw(s,r)}},
$S:21}
P.kI.prototype={
$2:function(a,b){this.a.bw(a,b)},
$C:"$2",
$R:2,
$S:52}
P.kJ.prototype={
$0:function(){this.a.bw(this.b,this.c)},
$S:2}
P.kG.prototype={
$0:function(){this.a.cg(this.b)},
$S:2}
P.kK.prototype={
$0:function(){P.m4(this.b,this.a)},
$S:2}
P.kF.prototype={
$0:function(){this.a.bw(this.b,this.c)},
$S:2}
P.kO.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.jV(q.d)}catch(p){s=H.a3(p)
r=H.bd(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=P.ig(s,r)
o.b=!0
return}if(l instanceof P.a8&&l.a>=4){if(l.a===8){q=m.a
q.c=l.c
q.b=!0}return}if(t.c.b(l)){n=m.b.a
q=m.a
q.c=l.aE(new P.kP(n),t.z)
q.b=!1}},
$S:2}
P.kP.prototype={
$1:function(a){return this.a},
$S:53}
P.kN.prototype={
$0:function(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.dc(p.d,this.b)}catch(o){s=H.a3(o)
r=H.bd(o)
q=this.a
q.c=P.ig(s,r)
q.b=!0}},
$S:2}
P.kM.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.jq(s)&&p.a.e!=null){p.c=p.a.jh(s)
p.b=!1}}catch(o){r=H.a3(o)
q=H.bd(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=P.ig(r,q)
n.b=!0}},
$S:2}
P.h2.prototype={}
P.fw.prototype={}
P.fx.prototype={}
P.hG.prototype={}
P.l_.prototype={}
P.ld.prototype={
$0:function(){var s=H.b(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.kU.prototype={
jZ:function(a){var s,r,q,p=null
try{if(C.e===$.I){a.$0()
return}P.nG(p,p,this,a)}catch(q){s=H.a3(q)
r=H.bd(q)
P.lc(p,p,this,s,r)}},
k0:function(a,b){var s,r,q,p=null
try{if(C.e===$.I){a.$1(b)
return}P.nH(p,p,this,a,b)}catch(q){s=H.a3(q)
r=H.bd(q)
P.lc(p,p,this,s,r)}},
k5:function(a,b){return this.k0(a,b,t.z)},
cG:function(a){return new P.kV(this,a)},
ee:function(a,b){return new P.kW(this,a,b)},
jW:function(a){if($.I===C.e)return a.$0()
return P.nG(null,null,this,a)},
jV:function(a){return this.jW(a,t.z)},
k_:function(a,b){if($.I===C.e)return a.$1(b)
return P.nH(null,null,this,a,b)},
dc:function(a,b){return this.k_(a,b,t.z,t.z)},
jY:function(a,b,c){if($.I===C.e)return a.$2(b,c)
return P.qn(null,null,this,a,b,c)},
jX:function(a,b,c){return this.jY(a,b,c,t.z,t.z,t.z)},
jR:function(a){return a},
f1:function(a){return this.jR(a,t.z,t.z,t.z)}}
P.kV.prototype={
$0:function(){return this.a.jZ(this.b)},
$S:2}
P.kW.prototype={
$1:function(a){return this.a.k5(this.b,a)},
$S:function(){return this.c.V("~(0)")}}
P.dM.prototype={
gT:function(a){var s=new P.dN(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
P:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.h3(b)
return r}},
h3:function(a){var s=this.d
if(s==null)return!1
return this.cl(s[this.ci(a)],a)>=0},
j:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dI(s==null?q.b=P.m5():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dI(r==null?q.c=P.m5():r,b)}else return q.h2(0,b)},
h2:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.m5()
s=q.ci(b)
r=p[s]
if(r==null)p[s]=[q.cf(b)]
else{if(q.cl(r,b)>=0)return!1
r.push(q.cf(b))}return!0},
R:function(a,b){if((b&1073741823)===b)return this.iD(this.c,b)
else return this.iC(0,b)},
iC:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.ci(b)
r=n[s]
q=o.cl(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.e5(p)
return!0},
dI:function(a,b){if(a[b]!=null)return!1
a[b]=this.cf(b)
return!0},
iD:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.e5(s)
delete a[b]
return!0},
dR:function(){this.r=this.r+1&1073741823},
cf:function(a){var s,r=this,q=new P.kS(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.dR()
return q},
e5:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.dR()},
ci:function(a){return J.ei(a)&1073741823},
cl:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.P(a[r].a,b))return r
return-1}}
P.kS.prototype={}
P.dN.prototype={
gG:function(a){return H.a_(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.bI(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.d5.prototype={}
P.db.prototype={$ik:1,$ih:1,$ip:1}
P.G.prototype={
gT:function(a){return new H.bT(a,this.gk(a))},
H:function(a,b){return this.h(a,b)},
D:function(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gk(a))throw H.b(P.bI(a))}},
geJ:function(a){return this.gk(a)===0},
d2:function(a,b){return new H.bV(a,b)},
eM:function(a,b){return this.d2(a,b,t.z)},
k9:function(a,b){var s,r,q,p,o=this
if(o.geJ(a)){s=J.lJ(0)
return s}r=o.h(a,0)
q=P.cl(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p){s=o.h(a,p)
if(p>=q.length)return H.c(q,p)
q[p]=s}return q},
k8:function(a){return this.k9(a,!0)},
i:function(a){return P.lI(a,"[","]")}}
P.de.prototype={}
P.j5.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.r(a)
r.a=s+": "
r.a+=H.r(b)},
$S:57}
P.a5.prototype={
D:function(a,b){var s,r,q
for(s=J.aS(this.gb1(a)),r=H.cF(a).V("a5.V");s.t();){q=s.gG(s)
b.$2(q,r.a(this.h(a,q)))}},
gk:function(a){return J.ax(this.gb1(a))},
i:function(a){return P.j4(a)},
$iN:1}
P.hT.prototype={}
P.df.prototype={
D:function(a,b){this.a.D(0,b)},
gk:function(a){return this.a.a},
i:function(a){return P.j4(this.a)},
$iN:1}
P.dD.prototype={}
P.fm.prototype={
i:function(a){return P.lI(this,"{","}")},
H:function(a,b){var s,r,q,p,o="index"
H.i6(b,o,t.S)
P.n2(b,o)
for(s=P.pn(this,this.r),r=H.a_(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.b(P.M(b,this,o,null,q))}}
P.dV.prototype={$ik:1,$ih:1}
P.dO.prototype={}
P.e6.prototype={}
P.e7.prototype={}
P.er.prototype={}
P.ev.prototype={}
P.iF.prototype={}
P.kk.prototype={}
P.kl.prototype={
j7:function(a){var s,r,q,p=P.lS(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.kZ(r)
if(q.hc(a,0,p)!==p){C.b.aU(a,p-1)
q.cC()}return new Uint8Array(r.subarray(0,H.pK(0,q.b,s)))}}
P.kZ.prototype={
cC:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.c(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.c(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.c(r,q)
r[q]=189},
iT:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.c(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.c(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.c(r,p)
r[p]=s&63|128
return!0}else{n.cC()
return!1}},
hc:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.aU(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.bM(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.iT(p,C.b.bM(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.cC()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.c(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.c(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.c(s,o)
s[o]=p&63|128}}}return q}}
P.jr.prototype={
$2:function(a,b){var s=this.b,r=this.a,q=s.a+=r.a
q+=a.a
s.a=q
s.a=q+": "
s.a+=P.cf(b)
r.a=", "},
$S:30}
P.V.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.V&&this.a===b.a&&!0},
aj:function(a,b){return C.c.aj(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.bS(s,30))&1073741823},
i:function(a){var s=this,r=P.oA(H.oZ(s)),q=P.ex(H.oX(s)),p=P.ex(H.oT(s)),o=P.ex(H.oU(s)),n=P.ex(H.oW(s)),m=P.ex(H.oY(s)),l=P.oB(H.oV(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bK.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bK&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
aj:function(a,b){return C.c.aj(this.a,b.a)},
i:function(a){var s,r,q,p=new P.iB(),o=this.a
if(o<0)return"-"+new P.bK(0-o).i(0)
s=p.$1(C.c.aa(o,6e7)%60)
r=p.$1(C.c.aa(o,1e6)%60)
q=new P.iA().$1(o%1e6)
return""+C.c.aa(o,36e8)+":"+s+":"+r+"."+q}}
P.iA.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.iB.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.F.prototype={
gbH:function(){return H.bd(this.$thrownJsError)}}
P.em.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.cf(s)
return"Assertion failed"}}
P.fI.prototype={}
P.f4.prototype={
i:function(a){return"Throw of null."}}
P.aH.prototype={
gck:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcj:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.r(n),l=q.gck()+o+m
if(!q.a)return l
s=q.gcj()
r=P.cf(q.b)
return l+s+": "+r}}
P.dt.prototype={
gck:function(){return"RangeError"},
gcj:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.r(q):""
else if(q==null)s=": Not greater than or equal to "+H.r(r)
else if(q>r)s=": Not in inclusive range "+H.r(r)+".."+H.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.r(r)
return s}}
P.eG.prototype={
gck:function(){return"RangeError"},
gcj:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.f3.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new P.bn("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=P.cf(n)
j.a=", "}k.d.D(0,new P.jr(j,i))
m=P.cf(k.a)
l=i.i(0)
r="NoSuchMethodError: method not found: '"+k.b.a+"'\nReceiver: "+m+"\nArguments: ["+l+"]"
return r}}
P.fX.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fU.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.dz.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eu.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.cf(s)+"."}}
P.f7.prototype={
i:function(a){return"Out of Memory"},
gbH:function(){return null},
$iF:1}
P.dy.prototype={
i:function(a){return"Stack Overflow"},
gbH:function(){return null},
$iF:1}
P.ew.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.hf.prototype={
i:function(a){return"Exception: "+this.a}}
P.iM.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=C.b.bI(q,0,75)+"..."
return r+"\n"+q}else return r}}
P.h.prototype={
gk:function(a){var s,r=this.gT(this)
for(s=0;r.t();)++s
return s},
H:function(a,b){var s,r,q
P.n2(b,"index")
for(s=this.gT(this),r=0;s.t();){q=s.gG(s)
if(b===r)return q;++r}throw H.b(P.M(b,this,"index",null,r))},
i:function(a){return P.oF(this,"(",")")}}
P.eH.prototype={}
P.a0.prototype={
gF:function(a){return P.A.prototype.gF.call(C.M,this)},
i:function(a){return"null"}}
P.A.prototype={constructor:P.A,$iA:1,
m:function(a,b){return this===b},
gF:function(a){return H.dr(this)},
i:function(a){return"Instance of '"+H.ds(this)+"'"},
eR:function(a,b){throw H.b(P.mU(this,b.geO(),b.gf_(),b.geP()))},
toString:function(){return this.i(this)}}
P.hJ.prototype={
i:function(a){return""},
$ib8:1}
P.bn.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.q.prototype={}
W.ic.prototype={
gk:function(a){return a.length}}
W.ej.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ek.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bE.prototype={$ibE:1}
W.bG.prototype={
di:function(a,b,c){if(c!=null)return a.getContext(b,P.nO(c))
return a.getContext(b)},
f9:function(a,b){return this.di(a,b,null)},
$ibG:1}
W.cN.prototype={$icN:1}
W.aI.prototype={
gk:function(a){return a.length}}
W.it.prototype={
gk:function(a){return a.length}}
W.H.prototype={$iH:1}
W.cV.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.iu.prototype={}
W.az.prototype={}
W.aU.prototype={}
W.iv.prototype={
gk:function(a){return a.length}}
W.iw.prototype={
gk:function(a){return a.length}}
W.ix.prototype={
gk:function(a){return a.length}}
W.iy.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cW.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.cX.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.r(r)+", "
s=a.top
s.toString
return r+H.r(s)+") "+H.r(this.gaG(a))+" x "+H.r(this.gaz(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.c8(b)
if(s===r.gc1(b)){s=a.top
s.toString
s=s===r.gc6(b)&&this.gaG(a)===r.gaG(b)&&this.gaz(a)===r.gaz(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.no(r,C.d.gF(s),C.d.gF(this.gaG(a)),C.d.gF(this.gaz(a)))},
gef:function(a){var s=a.bottom
s.toString
return s},
gdO:function(a){return a.height},
gaz:function(a){var s=this.gdO(a)
s.toString
return s},
gc1:function(a){var s=a.left
s.toString
return s},
gda:function(a){var s=a.right
s.toString
return s},
gc6:function(a){var s=a.top
s.toString
return s},
ge7:function(a){return a.width},
gaG:function(a){var s=this.ge7(a)
s.toString
return s},
$iah:1}
W.ez.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.iz.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.h5.prototype={
geJ:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.c(s,b)
this.a.replaceChild(c,s[b]).toString},
j:function(a,b){this.a.appendChild(b).toString
return b},
gT:function(a){var s=this.k8(this)
return new J.ae(s,s.length)}}
W.L.prototype={
geg:function(a){var s=a.children
s.toString
return new W.h5(a,s)},
gej:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ah(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
$iL:1}
W.j.prototype={$ij:1}
W.d.prototype={
iW:function(a,b,c,d){if(c!=null)this.fW(a,b,c,!1)},
fW:function(a,b,c,d){return a.addEventListener(b,H.cC(c,1),!1)},
$id:1}
W.aJ.prototype={$iaJ:1}
W.eB.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.eC.prototype={
gk:function(a){return a.length}}
W.eE.prototype={
gk:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iP.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.bM.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.aK.prototype={
jA:function(a,b,c,d){return a.open(b,c,!0)},
$iaK:1}
W.iQ.prototype={
$1:function(a){var s=a.responseText
s.toString
return s},
$S:32}
W.iR.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.status
o.toString
s=o>=200&&o<300
r=o>307&&o<400
o=s||o===0||o===304||r
q=this.b
if(o)q.cL(0,p)
else q.ek(a)},
$S:33}
W.bN.prototype={}
W.bO.prototype={
geo:function(a){var s=a.data
s.toString
return s},
$ibO:1}
W.ci.prototype={$ici:1}
W.bR.prototype={$ibR:1}
W.j2.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.jn.prototype={
gk:function(a){return a.length}}
W.eU.prototype={
h:function(a,b){return P.bw(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bw(s.value[1]))}},
gb1:function(a){var s=[]
this.D(a,new W.jo(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iN:1}
W.jo.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.eV.prototype={
h:function(a,b){return P.bw(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bw(s.value[1]))}},
gb1:function(a){var s=[]
this.D(a,new W.jp(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iN:1}
W.jp.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.b_.prototype={$ib_:1}
W.eW.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.at.prototype={$iat:1}
W.h4.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.c(r,b)
s.replaceChild(c,r[b]).toString},
gT:function(a){var s=this.a.childNodes
return new W.d2(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.c(s,b)
return s[b]}}
W.v.prototype={
jT:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.oi(s,b,a)}catch(q){H.a3(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.fi(a):s},
iE:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iv:1}
W.dp.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.b1.prototype={
gk:function(a){return a.length},
$ib1:1}
W.fc.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.b4.prototype={$ib4:1}
W.fj.prototype={
h:function(a,b){return P.bw(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bw(s.value[1]))}},
gb1:function(a){var s=[]
this.D(a,new W.jE(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iN:1}
W.jE.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
W.fl.prototype={
gk:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.fq.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.b6.prototype={$ib6:1}
W.fr.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.b7.prototype={
gk:function(a){return a.length},
$ib7:1}
W.fv.prototype={
h:function(a,b){return a.getItem(H.pG(b))},
D:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gb1:function(a){var s=[]
this.D(a,new W.jP(s))
return s},
gk:function(a){var s=a.length
s.toString
return s},
$iN:1}
W.jP.prototype={
$2:function(a,b){return this.a.push(a)},
$S:25}
W.aE.prototype={$iaE:1}
W.bo.prototype={$ibo:1}
W.aO.prototype={$iaO:1}
W.au.prototype={$iau:1}
W.fA.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.fB.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.k3.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.b9.prototype={$ib9:1}
W.c3.prototype={$ic3:1}
W.fG.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.k7.prototype={
gk:function(a){return a.length}}
W.bb.prototype={}
W.kj.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fZ.prototype={
gk:function(a){return a.length}}
W.bq.prototype={
gja:function(a){var s=a.deltaY
if(s!=null)return s
throw H.b(P.z("deltaY is not supported"))},
gj9:function(a){var s=a.deltaX
if(s!=null)return s
throw H.b(P.z("deltaX is not supported"))},
$ibq:1}
W.br.prototype={
iF:function(a,b){var s=a.requestAnimationFrame(H.cC(b,1))
s.toString
return s},
h9:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibr:1}
W.aP.prototype={$iaP:1}
W.h6.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.dK.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.r(r)+", "
s=a.top
s.toString
s=r+H.r(s)+") "
r=a.width
r.toString
r=s+H.r(r)+" x "
s=a.height
s.toString
return r+H.r(s)},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.c8(b)
if(s===r.gc1(b)){s=a.top
s.toString
if(s===r.gc6(b)){s=a.width
s.toString
if(s===r.gaG(b)){s=a.height
s.toString
r=s===r.gaz(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gF(p)
s=a.top
s.toString
s=C.d.gF(s)
r=a.width
r.toString
r=C.d.gF(r)
q=a.height
q.toString
return W.no(p,s,r,C.d.gF(q))},
gdO:function(a){return a.height},
gaz:function(a){var s=a.height
s.toString
return s},
ge7:function(a){return a.width},
gaG:function(a){var s=a.width
s.toString
return s}}
W.hj.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.dQ.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.hC.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.hK.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iu:1,
$ik:1,
$iw:1,
$ih:1,
$ip:1}
W.lF.prototype={}
W.he.prototype={}
W.kD.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.m3.prototype={}
W.K.prototype={
gT:function(a){return new W.d2(a,this.gk(a))}}
W.d2.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.J(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gG:function(a){return H.a_(this).c.a(this.d)}}
W.h7.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hk.prototype={}
W.hl.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hq.prototype={}
W.hr.prototype={}
W.hs.prototype={}
W.ht.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hz.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hF.prototype={}
W.hL.prototype={}
W.hM.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.hN.prototype={}
W.hO.prototype={}
W.hU.prototype={}
W.hV.prototype={}
W.hW.prototype={}
W.hX.prototype={}
W.hY.prototype={}
W.hZ.prototype={}
W.i_.prototype={}
W.i0.prototype={}
W.i1.prototype={}
W.i2.prototype={}
P.e3.prototype={$ibO:1,
geo:function(a){return this.a}}
P.l2.prototype={
$1:function(a){this.a.push(P.nA(a))},
$S:19}
P.lk.prototype={
$2:function(a,b){this.a[a]=P.nA(b)},
$S:38}
P.eD.prototype={
gby:function(){return new H.bU(new H.dH(this.b,new P.iK()),new P.iL())},
D:function(a,b){C.a.D(P.cm(this.gby(),!1),b)},
l:function(a,b,c){var s=this.gby()
J.oo(s.b.$1(J.i9(s.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b).toString},
gk:function(a){return J.ax(this.gby().a)},
h:function(a,b){var s=this.gby()
return s.b.$1(J.i9(s.a,b))},
gT:function(a){var s=P.cm(this.gby(),!1)
return new J.ae(s,s.length)}}
P.iK.prototype={
$1:function(a){return t.h.b(a)},
$S:39}
P.iL.prototype={
$1:function(a){return t.h.a(a)},
$S:41}
P.d8.prototype={$id8:1}
P.l4.prototype={
$1:function(a){var s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.pJ,a,!1)
P.mc(s,$.lz(),a)
return s},
$S:11}
P.l5.prototype={
$1:function(a){return new this.a(a)},
$S:11}
P.lh.prototype={
$1:function(a){return new P.d7(a)},
$S:45}
P.li.prototype={
$1:function(a){return new P.bQ(a)},
$S:26}
P.lj.prototype={
$1:function(a){return new P.aZ(a)},
$S:27}
P.aZ.prototype={
h:function(a,b){return P.mb(this.a[b])},
l:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.b(P.el("property is not a String or num"))
this.a[b]=P.l3(c)},
m:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a},
i:function(a){var s,r
try{s=String(this.a)
return s}catch(r){H.a3(r)
s=this.fm(0)
return s}},
j1:function(a,b){var s=this.a,r=b==null?null:P.cm(new H.bV(b,P.qO()),!0)
return P.mb(s[a].apply(s,r))},
gF:function(a){return 0}}
P.d7.prototype={}
P.bQ.prototype={
dH:function(a){var s=this,r=a<0||a>=s.gk(s)
if(r)throw H.b(P.b5(a,0,s.gk(s),null,null))},
h:function(a,b){this.dH(b)
return this.fk(0,b)},
l:function(a,b,c){this.dH(b)
this.fn(0,b,c)},
gk:function(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw H.b(P.lW("Bad JsArray length"))},
$ik:1,
$ih:1,
$ip:1}
P.cx.prototype={
l:function(a,b,c){return this.fl(0,b,c)}}
P.hy.prototype={
gda:function(a){return this.$ti.c.a(this.a+this.c)},
gef:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.c8(b)
if(s===r.gc1(b)){q=o.b
if(q===r.gc6(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gda(b)&&p.a(q+o.d)===r.gef(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.pa(H.jR(H.jR(H.jR(H.jR(0,q),o),r),p))}}
P.ah.prototype={
gc1:function(a){return this.a},
gc6:function(a){return this.b},
gaG:function(a){return this.c},
gaz:function(a){return this.d}}
P.bS.prototype={$ibS:1}
P.eQ.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$ip:1}
P.bY.prototype={$ibY:1}
P.f5.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$ip:1}
P.jv.prototype={
gk:function(a){return a.length}}
P.fy.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$ip:1}
P.m.prototype={
geg:function(a){return new P.eD(a,new W.h4(a))}}
P.c4.prototype={$ic4:1}
P.fH.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$ip:1}
P.hm.prototype={}
P.hn.prototype={}
P.hu.prototype={}
P.hv.prototype={}
P.hH.prototype={}
P.hI.prototype={}
P.hP.prototype={}
P.hQ.prototype={}
P.ij.prototype={
gk:function(a){return a.length}}
P.eo.prototype={
h:function(a,b){return P.bw(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bw(s.value[1]))}},
gb1:function(a){var s=[]
this.D(a,new P.ik(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$iN:1}
P.ik.prototype={
$2:function(a,b){return this.a.push(a)},
$S:6}
P.ep.prototype={
gk:function(a){return a.length}}
P.bh.prototype={}
P.f6.prototype={
gk:function(a){return a.length}}
P.h3.prototype={}
P.cr.prototype={
f3:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.i4(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.I.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.qz(g))
return}if(t.b0.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.el("Incorrect number or type of arguments"))},
f2:function(a,b,c,d,e,f,g){return this.f3(a,b,c,d,e,f,g,null,null,null)},
$icr:1}
P.fs.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.M(b,a,null,null,null))
s=P.bw(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ik:1,
$ih:1,
$ip:1}
P.hD.prototype={}
P.hE.prototype={}
K.id.prototype={
bj:function(a,b){return!0},
i:function(a){return"all"}}
K.eF.prototype={
bj:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)if(s[q].bj(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.bl.prototype={
bj:function(a,b){return!this.fh(0,b)},
i:function(a){return"!["+this.cb(0)+"]"}}
K.a2.prototype={
a5:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.e("May not create a Set with zero characters."))
s=new H.Y(t.c_)
for(r=new H.bT(a,a.gk(a)),q=H.a_(r).c;r.t();)s.l(0,q.a(r.d),!0)
p=P.cm(new H.bj(s),!0)
C.a.fg(p)
this.a=p},
bj:function(a,b){return C.a.P(this.a,b)},
i:function(a){return P.lX(this.a)}}
L.ft.prototype={
q:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.k8(this.a.O(0,b),[])
s.push(p)
return p},
je:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.bj(0,a))return p}return null},
i:function(a){return this.b},
e4:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.P(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.bj(s.c)
s=J.aS(s==null?[]:s)
for(;s.t();){r=s.gG(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.P(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.n)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.cb(0))}return m.charCodeAt(0)==0?m:m}}
L.fE.prototype={
i:function(a){var s=H.o_(this.b,"\n","\\n"),r=H.o_(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fF.prototype={
i:function(a){return this.b}}
L.k5.prototype={
O:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.ft(this,b,[])
s.l(0,b,r)}return r},
bF:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fF(a,P.S(s,s))
r.l(0,a,q)}return q},
f6:function(a){return this.ka(a)},
ka:function(a){var s=this
return P.q_(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$f6(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.a_(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a0.length
if(h!==0){if(!!a0.fixed$length)H.f(P.z("removeAt"))
if(0>=h)H.f(P.fg(0,null))
g=a0.splice(0,1)[0]}else{if(!r.t()){q=3
break}g=n.a(r.d)}b.push(g);++k
h=d==null
f=h?null:d.je(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.lX(b)
throw H.b(P.e("Untokenizable string [state: "+H.r(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.z("removeRange"))
P.lS(0,i,b.length)
b.splice(0,i-0)
C.a.ap(a0,b)
b=[]
c=[]
d=s.d
q=!m.P(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)c.push(g)
d=f.b
h=d.d
if(h!=null){e=P.lX(c)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.fE(h,e,k)
l=h}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.P(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.pl()
case 1:return P.pm(o)}}},t.aR)},
i:function(a){var s,r,q=new P.bn(""),p=this.d
if(p!=null)q.a=""+(p.e4()+"\n")
for(p=this.a,p=p.gkc(p),p=new H.dg(J.aS(p.a),p.b),s=H.a_(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.r(r==null?null:r.e4())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.k8.prototype={
i:function(a){return this.b.b+": "+this.cb(0)}}
O.ce.prototype={
dl:function(a,b,c){this.b=b
this.c=a},
bq:function(a,b){return this.dl(a,null,b)},
bz:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
dv:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gk:function(a){return this.a.length},
gT:function(a){var s=this.a
return new J.ae(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.c(s,b)
return s[b]},
j:function(a,b){var s,r
if(this.bz([b])){s=this.a
r=s.length
s.push(b)
this.dv(r,[b])}},
ap:function(a,b){var s,r
if(this.bz(b)){s=this.a
r=s.length
C.a.ap(s,b)
this.dv(r,b)}},
$ih:1}
O.dl.prototype={
gk:function(a){return this.a.length},
gp:function(){var s=this.b
return s==null?this.b=D.E():s},
b6:function(){var s=this.b
return s==null?null:s.A(null)},
gZ:function(a){var s=this.a
if(s.length>0)return C.a.gd_(s)
else return V.aM()},
c5:function(a){this.a.push(a)
this.b6()},
b3:function(){var s=this.a
if(s.length>0){s.pop()
this.b6()}}}
E.im.prototype={}
E.W.prototype={
ax:function(a,b,c,d,e,f){var s=this,r=s.y
r.bq(s.gjs(),s.gjv())
s.sa0(0,e)
s.sa_(f)
s.sc2(c)
if(a!=null)r.ap(0,a)},
dF:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.ae(s,s.length),r=H.a_(s).c;s.t();){q=r.a(s.d)
if(q.f==null)q.dF()}},
sa0:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().R(0,s.geW())
if(b!=null)b.gp().j(0,s.geW())
s.aM(new D.x("shape",r,b))}},
sa_:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gp().R(0,s.geY())
if(a!=null)a.gp().j(0,s.geY())
s.dF()
s.aM(new D.x("technique",r,a))}},
sc2:function(a){var s,r,q=this
if(!J.P(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gp().R(0,q.geU())
if(a!=null)a.gp().j(0,q.geU())
r=q.r
q.aM(new D.x("mover",s,r))}},
aQ:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.a
if(!J.P(o,q.x)){s=q.x
q.x=o
q.aM(new D.x("matrix",s,o))}p=q.f
if(p!=null)p.aQ(0,b)
for(p=q.y.a,p=new J.ae(p,p.length),r=H.a_(p).c;p.t();)r.a(p.d).aQ(0,b)},
ae:function(a){var s,r,q,p,o=this
if(!o.b)return
s=a.dx
r=o.x
q=s.a
if(r==null)q.push(s.gZ(s))
else q.push(r.N(0,s.gZ(s)))
s.b6()
a.d7(o.f)
p=C.a.gd_(a.dy)
if(o.d!=null)if(p!=null)p.d8(a,o)
for(r=o.y.a,r=new J.ae(r,r.length),q=H.a_(r).c;r.t();)q.a(r.d).ae(a)
a.d6()
s.b3()},
aM:function(a){var s=this.z
return s==null?null:s.A(a)},
as:function(){return this.aM(null)},
eX:function(a){this.e=null
this.aM(a)},
jy:function(){return this.eX(null)},
eZ:function(a){return this.aM(a)},
jz:function(){return this.eZ(null)},
eV:function(a){return this.aM(a)},
jx:function(){return this.eV(null)},
eT:function(a){return this.aM(a)},
ju:function(){return this.eT(null)},
jt:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.geS(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.cg()
n=o.a;(n==null?o.a=[]:n).push(r)}this.as()},
jw:function(a,b){var s,r
for(s=b.gT(b),r=this.geS();s.t();)s.gG(s).gp().R(0,r)
this.as()},
i:function(a){var s=this.a
return s.length===0?"Unnamed entity":s}}
E.cd.prototype={
i:function(a){return this.b}}
E.cq.prototype={
i:function(a){return this.b}}
E.hc.prototype={}
E.jy.prototype={
fB:function(a,b){var s=this
s.cy.gp().j(0,new E.jz(s))
s.db.gp().j(0,new E.jA(s))
s.dx.gp().j(0,new E.jB(s))},
gjQ:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gZ(q).N(0,s.gZ(s))
q=s}return q},
gf0:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.gjQ().N(0,r.gZ(r))}return r},
d7:function(a){var s=this.dy
return s.push(a==null?C.a.gd_(s):a)},
d6:function(){var s=this.dy
if(s.length>1)s.pop()},
cE:function(a){var s,r=a.b
if(r.length===0)throw H.b(P.e("May not cache a shader with no name."))
s=this.fr
if(s.el(0,r))throw H.b(P.e('Shader cache already contains a shader by the name "'+r+'".'))
s.l(0,r,a)}}
E.jz.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:0}
E.jA.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:0}
E.jB.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:0}
E.fC.prototype={
dA:function(a){this.d9()},
dz:function(){return this.dA(null)},
gjg:function(){var s,r=this,q=Date.now(),p=C.c.aa(P.mD(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.V(q,!1)
return s/p},
dZ:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.bi(r*o)
r=s.clientHeight
r.toString
p=C.d.bi(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.lZ(C.h,this.gjU())}},
d9:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.x.h9(s)
r=W.nL(new E.k1(this),t.H)
r.toString
C.x.iF(s,r)}},
ae:function(a){var s,r,q,p,o,n=this
a=a
try{++n.db
n.cx=!1
n.dZ()
if(a==null)a=n.d
if(a!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.V(p,!1)
q.y=P.mD(p-q.r.a).a*0.000001
p=q.cy
C.a.sk(p.a,0)
p.b6()
p=q.db
C.a.sk(p.a,0)
p.b6()
p=q.dx
C.a.sk(p.a,0)
p.b6()
p=q.dy
C.a.sk(p,0)
p.push(null)
a.ae(q)}}catch(o){s=H.a3(o)
r=H.bd(o)
P.i7("Error: "+H.r(s))
P.i7("Stack: "+H.r(r))
throw H.b(s)}},
jS:function(){return this.ae(null)}}
E.k1.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.jS()}},
$S:31}
Z.h_.prototype={}
Z.cL.prototype={
S:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.a3(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.r(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.dG.prototype={}
Z.bF.prototype={
aW:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
S:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.c(r,s)
r[s].S(a)}},
an:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.c(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
ae:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.c(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.ds(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(m,", ")+"\nAttrs:   "+C.a.q(o,", ")}}
Z.d4.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.ds(this.c)+"'")+"]"}}
Z.bp.prototype={
gdr:function(a){var s=this.a,r=(s&$.aw().a)!==0?3:0
if((s&$.bB().a)!==0)r+=3
if((s&$.bA().a)!==0)r+=3
if((s&$.bC().a)!==0)r+=2
if((s&$.cb().a)!==0)r+=3
if((s&$.eg().a)!==0)r+=3
if((s&$.eh().a)!==0)r+=4
if((s&$.cI().a)!==0)++r
return(s&$.bz().a)!==0?r+4:r},
j_:function(a){var s,r=$.aw(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bB()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bA()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bC()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cb()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.eg()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.eh()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cI()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bz()
if((q&r.a)!==0)if(s===a)return r
return $.og()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bp))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aw().a)!==0)s.push("Pos")
if((r&$.bB().a)!==0)s.push("Norm")
if((r&$.bA().a)!==0)s.push("Binm")
if((r&$.bC().a)!==0)s.push("Txt2D")
if((r&$.cb().a)!==0)s.push("TxtCube")
if((r&$.eg().a)!==0)s.push("Clr3")
if((r&$.eh().a)!==0)s.push("Clr4")
if((r&$.cI().a)!==0)s.push("Weight")
if((r&$.bz().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.q(s,"|")}}
D.ir.prototype={}
D.cg.prototype={
j:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
R:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.P(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.R(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.P(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.R(p,b)
s=p===!0||s}return s},
A:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.X():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.D(P.cm(p,!0),new D.iI(s))
r=q.b
if(r!=null){q.b=[]
C.a.D(r,new D.iJ(s))}return!0},
cN:function(){return this.A(null)},
bm:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.A(s)}}}}
D.iI.prototype={
$1:function(a){a.$1(this.a)},
$S:18}
D.iJ.prototype={
$1:function(a){a.$1(this.a)},
$S:18}
D.X.prototype={}
D.aW.prototype={}
D.aX.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.r(this.d)+" => "+H.r(this.e)}}
O.l9.prototype={
aO:function(a,b,c){return this.jO(a,b,!1)},
jO:function(a,b,c){var s=0,r=P.an(t.z),q=this
var $async$aO=P.ap(function(d,e){if(d===1)return P.ak(e,r)
while(true)switch(s){case 0:s=2
return P.ad(q.aN(a.split("\n"),b,!1),$async$aO)
case 2:return P.al(null,r)}})
return P.am($async$aO,r)},
aN:function(a,b,c){return this.jM(a,b,!1)},
jM:function(a,b,c){var s=0,r=P.an(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$aN=P.ap(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:h=0
case 3:if(!!0){s=4
break}k=h
j=a.length
if(typeof k!=="number"){q=k.fa()
s=1
break}if(!(k<j)){s=4
break}p=6
k=h
if(k>>>0!==k||k>=j){q=H.c(a,k)
s=1
break}s=9
return P.ad(m.ag(a[k],b,!1),$async$aN)
case 9:p=2
s=8
break
case 6:p=5
g=o
l=H.a3(g)
k=h
if(typeof k!=="number"){q=k.Y()
s=1
break}throw H.b(P.e("Line "+H.r(k+1)+": "+H.r(l)))
s=8
break
case 5:s=2
break
case 8:k=h
if(typeof k!=="number"){q=k.Y()
s=1
break}h=k+1
s=3
break
case 4:case 1:return P.al(q,r)
case 2:return P.ak(o,r)}})
return P.am($async$aN,r)},
ag:function(a,b,c){return this.jK(a,b,!1)},
jK:function(a,b,c){var s=0,r=P.an(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f
var $async$ag=P.ap(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:a=a
p=4
l=J.ms(a,"#")
i=l
if(typeof i!=="number"){q=i.f8()
s=1
break}if(i>=0)a=J.mt(a,0,l)
a=J.mu(a)
if(J.ax(a)<=0){s=1
break}k=O.nJ(a)
if(J.ax(k)<1){s=1
break}case 7:switch(J.J(k,0)){case"newmtl":s=9
break
case"Ka":s=10
break
case"Kd":s=11
break
case"Ks":s=12
break
case"Ns":s=13
break
case"d":s=14
break
case"Tr":s=15
break
case"map_Ka":s=16
break
case"map_Kd":s=17
break
case"map_Ks":s=18
break
case"map_d":s=19
break
case"map_bump":s=20
break
case"bump":s=21
break
default:s=22
break}break
case 9:i=J.J(k,1)
h=O.ab()
m.c=h
m.b.l(0,i,h)
s=1
break
case 10:m.ip(J.J(k,1))
s=1
break
case 11:m.is(J.J(k,1))
s=1
break
case 12:m.iz(J.J(k,1))
s=1
break
case 13:m.iy(J.J(k,1))
s=1
break
case 14:m.im(J.J(k,1))
s=1
break
case 15:m.iB(J.J(k,1))
s=1
break
case 16:s=23
return P.ad(m.cr(J.J(k,1),b),$async$ag)
case 23:s=1
break
case 17:s=24
return P.ad(m.cs(J.J(k,1),b),$async$ag)
case 24:s=1
break
case 18:s=25
return P.ad(m.ct(J.J(k,1),b),$async$ag)
case 25:s=1
break
case 19:s=26
return P.ad(m.cq(J.J(k,1),b),$async$ag)
case 26:s=1
break
case 20:s=27
return P.ad(m.bP(J.J(k,1),b),$async$ag)
case 27:s=1
break
case 21:s=28
return P.ad(m.bP(J.J(k,1),b),$async$ag)
case 28:s=1
break
case 22:s=1
break
case 8:p=2
s=6
break
case 4:p=3
f=o
j=H.a3(f)
i=P.e("Line: '"+H.r(a)+"': "+H.r(j))
throw H.b(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.al(q,r)
case 2:return P.ak(o,r)}})
return P.am($async$ag,r)},
ip:function(a){var s,r=this.c
if(r==null)return
s=O.bu(a)
r.gW().sn(0,V.lD(s))},
is:function(a){var s,r=this.c
if(r==null)return
s=O.bu(a)
r.gX().sn(0,V.lD(s))},
iz:function(a){var s,r=this.c
if(r==null)return
s=O.bu(a)
r.gC().sn(0,V.lD(s))},
iy:function(a){var s,r,q=this.c
if(q==null)return
s=O.bu(a)
if(s.length!==1)throw H.b(P.e("Shininess may only have 1 number."))
r=q.gC()
if(0>=s.length)return H.c(s,0)
r.sac(s[0])},
im:function(a){var s,r,q=this.c
if(q==null)return
s=O.bu(a)
if(s.length!==1)throw H.b(P.e("Alpha may only have 1 number."))
r=q.gbW(q)
if(0>=s.length)return H.c(s,0)
r.sat(0,s[0])},
iB:function(a){var s,r,q=this.c
if(q==null)return
s=O.bu(a)
if(s.length!==1)throw H.b(P.e("Alpha may only have 1 number."))
r=q.gbW(q)
if(0>=s.length)return H.c(s,0)
r.sat(0,1-s[0])},
cr:function(a,b){return this.iq(a,b)},
iq:function(a,b){var s=0,r=P.an(t.z),q,p=this,o,n
var $async$cr=P.ap(function(c,d){if(c===1)return P.ak(d,r)
while(true)switch(s){case 0:n=p.c
if(n==null||!1){s=1
break}o=b+"/"+a
n.gW().sal(p.a.aA(o))
case 1:return P.al(q,r)}})
return P.am($async$cr,r)},
cs:function(a,b){return this.it(a,b)},
it:function(a,b){var s=0,r=P.an(t.z),q,p=this,o,n,m
var $async$cs=P.ap(function(c,d){if(c===1)return P.ak(d,r)
while(true)switch(s){case 0:n=p.c
m=n==null
if(m||!1){s=1
break}o=b+"/"+a
if(!m)n.gX().sal(p.a.aA(o))
case 1:return P.al(q,r)}})
return P.am($async$cs,r)},
ct:function(a,b){return this.iA(a,b)},
iA:function(a,b){var s=0,r=P.an(t.z),q,p=this,o,n,m
var $async$ct=P.ap(function(c,d){if(c===1)return P.ak(d,r)
while(true)switch(s){case 0:n=p.c
m=n==null
if(m||!1){s=1
break}o=b+"/"+a
if(!m)n.gC().sal(p.a.aA(o))
case 1:return P.al(q,r)}})
return P.am($async$ct,r)},
cq:function(a,b){return this.io(a,b)},
io:function(a,b){var s=0,r=P.an(t.z),q,p=this,o,n,m
var $async$cq=P.ap(function(c,d){if(c===1)return P.ak(d,r)
while(true)switch(s){case 0:n=p.c
m=n==null
if(m||!1){s=1
break}o=b+"/"+a
if(!m)n.gbW(n).sal(p.a.aA(o))
case 1:return P.al(q,r)}})
return P.am($async$cq,r)},
bP:function(a,b){return this.ir(a,b)},
ir:function(a,b){var s=0,r=P.an(t.z),q,p=this,o,n,m
var $async$bP=P.ap(function(c,d){if(c===1)return P.ak(d,r)
while(true)switch(s){case 0:n=p.c
m=n==null
if(m||!1){s=1
break}o=b+"/"+a
if(!m)n.gbX().sal(p.a.aA(o))
case 1:return P.al(q,r)}})
return P.am($async$bP,r)}}
O.lb.prototype={}
O.la.prototype={
gjd:function(){var s=this.Q,r=s.y.a,q=r.length
if(q===1){if(0>=q)return H.c(r,0)
return r[0]}return s},
aO:function(a,b,c){return this.jP(a,b,!1)},
jP:function(a,b,c){var s=0,r=P.an(t.z),q=this
var $async$aO=P.ap(function(d,e){if(d===1)return P.ak(e,r)
while(true)switch(s){case 0:s=2
return P.ad(q.aN(a.split("\n"),b,!1),$async$aO)
case 2:return P.al(null,r)}})
return P.am($async$aO,r)},
aN:function(a,b,c){return this.jN(a,b,!1)},
jN:function(a,b,c){var s=0,r=P.an(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g
var $async$aN=P.ap(function(d,e){if(d===1){o=e
s=p}while(true)switch(s){case 0:h=0
case 3:if(!!0){s=4
break}k=h
j=a.length
if(typeof k!=="number"){q=k.fa()
s=1
break}if(!(k<j)){s=4
break}p=6
k=h
if(k>>>0!==k||k>=j){q=H.c(a,k)
s=1
break}s=9
return P.ad(m.ag(a[k],b,!1),$async$aN)
case 9:p=2
s=8
break
case 6:p=5
g=o
l=H.a3(g)
k=h
if(typeof k!=="number"){q=k.Y()
s=1
break}throw H.b(P.e("Line "+H.r(k+1)+": "+H.r(l)))
s=8
break
case 5:s=2
break
case 8:k=h
if(typeof k!=="number"){q=k.Y()
s=1
break}h=k+1
s=3
break
case 4:case 1:return P.al(q,r)
case 2:return P.ak(o,r)}})
return P.am($async$aN,r)},
ag:function(a,b,c){return this.jL(a,b,!1)},
jL:function(a,b,c){var s=0,r=P.an(t.z),q,p=2,o,n=[],m=this,l,k,j,i,h,g,f,e,d
var $async$ag=P.ap(function(a0,a1){if(a0===1){o=a1
s=p}while(true)switch(s){case 0:a=a
p=4
l=J.ms(a,"#")
i=l
if(typeof i!=="number"){q=i.f8()
s=1
break}if(i>=0)a=J.mt(a,0,l)
a=J.mu(a)
if(J.ax(a)<=0){s=1
break}k=O.nJ(a)
if(J.ax(k)<1){s=1
break}case 7:switch(J.J(k,0)){case"v":s=9
break
case"vt":s=10
break
case"vn":s=11
break
case"p":s=12
break
case"l":s=13
break
case"f":s=14
break
case"mtllib":s=15
break
case"usemtl":s=16
break
case"g":s=17
break
case"o":s=18
break
default:s=19
break}break
case 9:h=O.bu(J.J(k,1))
i=h.length
if(i<3)H.f(P.e("Positions must have at least 3 numbers."))
if(i>4)H.f(P.e("Positions must have at most than 4 numbers."))
if(i===4){if(3>=i){q=H.c(h,3)
s=1
break}g=h[3]
$.B().toString
if(!(Math.abs(g-1)<1e-9))H.f(P.e("Currently, non-one w values in positions are not supported."))}if(0>=i){q=H.c(h,0)
s=1
break}g=h[0]
if(1>=i){q=H.c(h,1)
s=1
break}f=h[1]
if(2>=i){q=H.c(h,2)
s=1
break}f=[g,f,h[2]]
m.b.push(new O.lb(new V.a1(f[0],f[1],f[2]),[]))
s=1
break
case 10:h=O.bu(J.J(k,1))
i=h.length
if(i<2)H.f(P.e("Textures must have at least 2 numbers."))
if(i>3)H.f(P.e("Textures must have at most than 3 numbers."))
if(i===3){if(2>=i){q=H.c(h,2)
s=1
break}g=h[2]
$.B().toString
if(!(Math.abs(g-0)<1e-9))H.f(P.e("Currently, non-zero z values in textures are not supported."))}if(0>=i){q=H.c(h,0)
s=1
break}g=h[0]
if(1>=i){q=H.c(h,1)
s=1
break}g=[g,h[1]]
m.c.push(new V.T(g[0],g[1]))
s=1
break
case 11:h=O.bu(J.J(k,1))
i=h.length
if(i!==3)H.f(P.e("Normals must have exactly 3 numbers."))
if(0>=i){q=H.c(h,0)
s=1
break}g=h[0]
if(1>=i){q=H.c(h,1)
s=1
break}f=h[1]
if(2>=i){q=H.c(h,2)
s=1
break}m.d.push(new V.D(g,f,h[2]))
s=1
break
case 12:m.ix(J.J(k,1))
s=1
break
case 13:m.iv(J.J(k,1))
s=1
break
case 14:m.iu(J.J(k,1))
s=1
break
case 15:s=20
return P.ad(m.bQ(J.J(k,1),b,!1),$async$ag)
case 20:s=1
break
case 16:m.x=m.e.h(0,J.J(k,1))
m.bT()
s=1
break
case 17:m.r=J.J(k,1)
m.bT()
s=1
break
case 18:m.r=J.J(k,1)
m.bT()
s=1
break
case 19:s=1
break
case 8:p=2
s=6
break
case 4:p=3
d=o
j=H.a3(d)
i=P.e('Line: "'+H.r(a)+'": '+H.r(j))
throw H.b(i)
s=6
break
case 3:s=2
break
case 6:case 1:return P.al(q,r)
case 2:return P.ak(o,r)}})
return P.am($async$ag,r)},
bT:function(){var s,r,q,p=this,o=p.z,n=p.y
if(o==null||n==null||n.gai().c.length!==0){n=F.lV()
p.y=n
o=p.z=E.Q(null,!0,null,"",n,null)
p.Q.y.j(0,o)
for(s=p.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)C.a.sk(s[q].b,0)}o.sa_(p.x)
o.a=p.r},
cd:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=", was out of range [-",d=null,c=a.split("/"),b=c.length
if(0>=b)return H.c(c,0)
s=P.ml(c[0])
r=f.b
q=r.length
if(s<-q||s>q||s===0)throw H.b(P.e("The position index, "+s+e+q+".."+q+"] or 0."))
s=(s<0?q+s+1:s)-1
p=$.a6
if(p==null){p=new V.T(0,0)
$.a6=p}if(b>1){o=c[1]
if(o.length!==0){n=P.ml(o)
m=f.c
q=m.length
if(n<-q||n>q||n===0)throw H.b(P.e("The texture index, "+n+e+q+".."+q+"] or 0."))
l=(n<0?q+n+1:n)-1
if(l<0||l>=q)return H.c(m,l)
p=m[l]}}k=V.dF()
if(b>2){o=c[2]
if(o.length!==0){j=P.ml(o)
b=f.d
q=b.length
if(j<-q||j>q||j===0)throw H.b(P.e("The normal index, "+j+e+q+".."+q+"] or 0."))
m=(j<0?q+j+1:j)-1
if(m<0||m>=q)return H.c(b,m)
k=b[m]}}if(s<0||s>=r.length)return H.c(r,s)
i=r[s]
for(b=i.b,r=b.length,h=0;h<b.length;b.length===r||(0,H.n)(b),++h){g=b[h]
if(J.P(g.y,p)&&J.P(g.r,k))return g}g=F.m1(d,d,d,d,d,d,d,d,0)
r=i.a
if(!J.P(g.f,r)){g.f=r
r=g.a
if(r!=null)r.as()}if(!J.P(g.y,p)){g.y=p
r=g.a
if(r!=null)r.as()}k=k.L()
if(!J.P(g.r,k)){g.r=k
r=g.a
if(r!=null)r.as()}r=f.y
if(r!=null)r.gai().j(0,g)
b.push(g)
return g},
ix:function(a){var s,r,q=O.le(a),p=[],o=q.length
for(s=0;s<o;++s){if(s>=q.length)return H.c(q,s)
p.push(this.cd(q[s]))}r=this.y
if(r!=null)r.gc4(r).iY(p)},
iv:function(a){var s,r,q=O.le(a),p=[],o=q.length
for(s=0;s<o;++s){if(s>=q.length)return H.c(q,s)
p.push(this.cd(q[s]))}r=this.y
if(r!=null)r.gaX(r).iX(p)},
iu:function(a){var s,r,q=O.le(a),p=[],o=q.length
for(s=0;s<o;++s){if(s>=q.length)return H.c(q,s)
p.push(this.cd(q[s]))}r=this.y
if(r!=null)r.gaw().cD(p)},
bQ:function(a,b,c){return this.iw(a,b,!1)},
iw:function(a,b,c){var s=0,r=P.an(t.z),q=this,p
var $async$bQ=P.ap(function(d,e){if(d===1)return P.ak(e,r)
while(true)switch(s){case 0:p=q.e
s=2
return P.ad(O.eX(b+"/"+a,q.a,!1),$async$bQ)
case 2:p.ap(0,e)
return P.al(null,r)}})
return P.am($async$bQ,r)}}
O.fe.prototype={}
X.cM.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cM))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.eM.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.eM))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.iX.prototype={}
X.dd.prototype={}
X.j3.prototype={
bx:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.T(o.a+b.a,o.b+b.b)
o=q.a.gbY()
s=$.a6
if(s==null)s=$.a6=new V.T(0,0)
r=q.x
q.z=new P.V(p,!1)
q.x=n
return new X.co(a,s,r,o,n)},
d5:function(a,b){this.r=a.a
return!1},
bE:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bD:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.bx(a,b))
return!0},
jE:function(a){return!1},
hU:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.A(new X.dd(c,q.a.gbY(),b))
q.y=new P.V(s,!1)
s=$.a6
q.x=s==null?$.a6=new V.T(0,0):s}}
X.b0.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.b0))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.q(s,"+")}}
X.co.prototype={}
X.jq.prototype={
cm:function(a,b,c){var s=this,r=new P.V(Date.now(),!1),q=s.a.gbY(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.co(a,p,o,q,b)},
d5:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.A(this.cm(a,b,!0))
return!0},
bE:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.A(r.cm(a,b,!0))
return!0},
bD:function(a,b){var s=this.d
if(s==null)return!1
s.A(this.cm(a,b,!1))
return!0},
jF:function(a,b){return!1},
gep:function(){var s=this.b
return s==null?this.b=D.E():s},
gdg:function(){var s=this.c
return s==null?this.c=D.E():s},
gbC:function(){var s=this.d
return s==null?this.d=D.E():s}}
X.fd.prototype={}
X.dB.prototype={}
X.k6.prototype={
bx:function(a,b){var s,r,q,p,o=this,n=new P.V(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a6
if(r==null){r=new V.T(0,0)
$.a6=r
s=r}else s=r}r=o.a.gbY()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dB(q,p,r,s)},
jD:function(a){var s=this.b
if(s==null)return!1
s.A(this.bx(a,!0))
return!0},
jB:function(a){var s=this.c
if(s==null)return!1
s.A(this.bx(a,!0))
return!0},
jC:function(a){var s=this.d
if(s==null)return!1
s.A(this.bx(a,!1))
return!0},
gds:function(a){var s=this.b
return s==null?this.b=D.E():s},
ger:function(a){var s=this.c
return s==null?this.c=D.E():s},
gbC:function(){var s=this.d
return s==null?this.d=D.E():s}}
X.fY.prototype={
gc0:function(a){var s=this.b
return s==null?this.b=new X.iX(P.mO(t.S)):s},
gar:function(){var s,r=this.c
if(r==null){r=$.a6
if(r==null){r=$.a6=new V.T(0,0)
s=r}else s=r
r=this.c=new X.jq(this,r,s,new P.V(Date.now(),!1),new P.V(Date.now(),!1))}return r},
gaK:function(){var s=this.d
if(s==null){s=$.a6
if(s==null)s=$.a6=new V.T(0,0)
s=this.d=new X.j3(this,s,new P.V(Date.now(),!1),new P.V(Date.now(),!1))}return s},
gaP:function(){var s,r=this.e
if(r==null){r=$.a6
if(r==null){r=$.a6=new V.T(0,0)
s=r}else s=r
r=this.e=new X.k6(this,r,s,new P.V(Date.now(),!1),new P.V(Date.now(),!1))}return r},
gbY:function(){var s=this.a
return V.n4(0,0,C.f.gej(s).c,C.f.gej(s).d)},
dK:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.eM(p,new X.b0(s,r,q))},
bb:function(a){var s
this.gc0(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
cB:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gc0(this)
a.altKey
a.shiftKey},
b0:function(a){var s,r,q,p
if(a==null){s=$.a6
return s==null?$.a6=new V.T(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.T(r-p,q-s)},
bA:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.aj(r,s)},
cu:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.a4(n)
m=o.pageY
m.toString
C.d.a4(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.a4(l)
l=o.pageY
l.toString
l=C.d.a4(l)
k=j.top
k.toString
s.push(new V.T(n-m,l-k))}return s},
aY:function(a){var s,r,q,p
if(a==null)return new X.cM(0,new X.b0(!1,!1,!1))
s=a.buttons
if(s==null)s=0
r=a.ctrlKey
r.toString
if(!r){r=a.metaKey
r.toString}else r=!0
q=a.altKey
q.toString
p=a.shiftKey
p.toString
return new X.cM(s,new X.b0(r,q,p))},
cn:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
n.toString
s=a.pageX
s.toString
r=a.pageY
r.toString
q=n.left
q.toString
p=s-q
if(p<0)return!1
s=n.top
s.toString
o=r-s
if(o<0)return!1
s=n.width
s.toString
if(p<s){n=n.height
n.toString
n=o<n}else n=!1
return n},
hM:function(a){return this.f=!0},
hA:function(a){return this.f=!1},
hG:function(a){if(this.f&&this.cn(a))a.preventDefault()},
hS:function(a){var s,r=this
if(!r.f)return
s=r.dK(a)
r.gc0(r).d.j(0,s.a)},
hQ:function(a){var s,r=this
if(!r.f)return
s=r.dK(a)
r.gc0(r).d.R(0,s.a)},
hW:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.bb(a)
if(p.x){s=p.aY(a)
r=p.bA(a)
if(p.gaK().d5(s,r))a.preventDefault()
return}s=p.aY(a)
q=p.b0(a)
if(p.gar().d5(s,q))a.preventDefault()},
i_:function(a){var s,r,q,p=this
p.bb(a)
s=p.aY(a)
if(p.x){r=p.bA(a)
if(p.gaK().bE(s,r))a.preventDefault()
return}q=p.b0(a)
if(p.gar().bE(s,q))a.preventDefault()},
hK:function(a){var s,r,q,p=this
if(!p.cn(a)){p.bb(a)
s=p.aY(a)
if(p.x){r=p.bA(a)
if(p.gaK().bE(s,r))a.preventDefault()
return}q=p.b0(a)
if(p.gar().bE(s,q))a.preventDefault()}},
hY:function(a){var s,r,q,p=this
p.bb(a)
s=p.aY(a)
if(p.x){r=p.bA(a)
if(p.gaK().bD(s,r))a.preventDefault()
return}q=p.b0(a)
if(p.gar().bD(s,q))a.preventDefault()},
hI:function(a){var s,r,q,p=this
if(!p.cn(a)){p.bb(a)
s=p.aY(a)
if(p.x){r=p.bA(a)
if(p.gaK().bD(s,r))a.preventDefault()
return}q=p.b0(a)
if(p.gar().bD(s,q))a.preventDefault()}},
i1:function(a){var s,r,q=this
q.bb(a)
s=new V.aj(C.w.gj9(a),C.w.gja(a)).N(0,q.Q)
if(q.x){if(q.gaK().jE(s))a.preventDefault()
return}r=q.b0(a)
if(q.gar().jF(s,r))a.preventDefault()},
i3:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aY(q.y)
r=q.b0(q.y)
q.gaK().hU(s,r,p)}},
il:function(a){var s,r=this
r.a.focus()
r.f=!0
r.cB(a)
s=r.cu(a)
if(r.gaP().jD(s))a.preventDefault()},
ih:function(a){var s
this.cB(a)
s=this.cu(a)
if(this.gaP().jB(s))a.preventDefault()},
ij:function(a){var s
this.cB(a)
s=this.cu(a)
if(this.gaP().jC(s))a.preventDefault()}}
D.ey.prototype={
bJ:function(a){var s=this.r
return s==null?null:s.A(a)},
sn:function(a,b){var s,r=this
if(!r.b.m(0,b)){s=r.b
r.b=b
r.bJ(new D.x("color",s,b))}},
$id9:1}
D.da.prototype={
gp:function(){var s=this.y
return s==null?this.y=D.E():s},
geL:function(){var s=this.z
return s==null?this.z=D.E():s},
bJ:function(a){var s=this.y
return s==null?null:s.A(a)},
dT:function(a){var s=this.z
return s==null?null:s.A(a)},
hT:function(){return this.dT(null)},
i5:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r)if(this.h4(a[r]))return!1
return!0},
hu:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdS(),q=this.f,p=0;p<b.length;b.length===s||(0,H.n)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.cg()
m=n.a;(m==null?n.a=[]:m).push(r)}this.bJ(new D.aW())},
i9:function(a,b){var s,r,q,p
for(s=b.gT(b),r=this.gdS(),q=this.e;s.t();){p=s.gG(s)
C.a.R(q,p)
p.gp().R(0,r)}this.bJ(new D.aX())},
h4:function(a){var s=C.a.P(this.f,a)
return s}}
V.o.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.o))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.ar.prototype={
f7:function(){var s=this
return new V.ar(Math.floor(s.a*255)/255,Math.floor(s.b*255)/255,Math.floor(s.c*255)/255,Math.floor(s.d*255)/255)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ar))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.iH.prototype={}
V.dk.prototype={
am:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dk))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
if(!(Math.abs(b.r-r.r)<1e-9))return!1
if(!(Math.abs(b.x-r.x)<1e-9))return!1
if(!(Math.abs(b.y-r.y)<1e-9))return!1
return!0},
i:function(a){var s,r,q,p,o=this,n=V.cE([o.a,o.d,o.r],3,0),m=V.cE([o.b,o.e,o.x],3,0),l=V.cE([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.c(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.c(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.c(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.c(n,1)
p=" "+n[1]+", "
if(1>=r)return H.c(m,1)
p=p+m[1]+", "
if(1>=q)return H.c(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.c(n,2)
k=" "+n[2]+", "
if(2>=r)return H.c(m,2)
k=k+m[2]+", "
if(2>=q)return H.c(l,2)
return p+(k+l[2]+"]")}}
V.cn.prototype={
am:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cZ:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.B().toString
if(Math.abs(b3-0)<1e-9)return V.aM()
s=1/b3
r=-l
q=-a2
return V.bk((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
N:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.bk(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
c7:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bG:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a1(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cn))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
if(!(Math.abs(b.e-r.e)<1e-9))return!1
if(!(Math.abs(b.f-r.f)<1e-9))return!1
if(!(Math.abs(b.r-r.r)<1e-9))return!1
if(!(Math.abs(b.x-r.x)<1e-9))return!1
if(!(Math.abs(b.y-r.y)<1e-9))return!1
if(!(Math.abs(b.z-r.z)<1e-9))return!1
if(!(Math.abs(b.Q-r.Q)<1e-9))return!1
if(!(Math.abs(b.ch-r.ch)<1e-9))return!1
if(!(Math.abs(b.cx-r.cx)<1e-9))return!1
if(!(Math.abs(b.cy-r.cy)<1e-9))return!1
if(!(Math.abs(b.db-r.db)<1e-9))return!1
if(!(Math.abs(b.dx-r.dx)<1e-9))return!1
return!0},
i:function(a){return this.u()},
E:function(a){var s,r,q,p,o,n=this,m=V.cE([n.a,n.e,n.y,n.cx],3,0),l=V.cE([n.b,n.f,n.z,n.cy],3,0),k=V.cE([n.c,n.r,n.Q,n.db],3,0),j=V.cE([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.c(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.c(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.c(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.c(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.c(m,1)
o=o+m[1]+", "
if(1>=r)return H.c(l,1)
o=o+l[1]+", "
if(1>=q)return H.c(k,1)
o=o+k[1]+", "
if(1>=p)return H.c(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.c(m,2)
s=s+m[2]+", "
if(2>=r)return H.c(l,2)
s=s+l[2]+", "
if(2>=q)return H.c(k,2)
s=s+k[2]+", "
if(2>=p)return H.c(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.c(m,3)
o=o+m[3]+", "
if(3>=r)return H.c(l,3)
o=o+l[3]+", "
if(3>=q)return H.c(k,3)
o=o+k[3]+", "
if(3>=p)return H.c(j,3)
return s+(o+j[3]+"]")},
u:function(){return this.E("")}}
V.T.prototype={
aF:function(a){return new V.aj(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"},
u:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.a1.prototype={
bt:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
u:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.b3.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b3))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.fh.prototype={
gbk:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.fh))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.aj.prototype={
d0:function(a){return Math.sqrt(this.ak(this))},
ak:function(a){return this.a*a.a+this.b*a.b},
N:function(a,b){return new V.aj(this.a*b,this.b*b)},
aR:function(a,b){var s
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.km
return s==null?$.km=new V.aj(0,0):s}return new V.aj(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.D.prototype={
d0:function(a){return Math.sqrt(this.ak(this))},
ak:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
L:function(){var s=this,r=Math.sqrt(s.ak(s))
if(r===1)return s
return s.aR(0,r)},
bB:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.D(s*r-q*p,q*o-n*r,n*p-s*o)},
Y:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
bp:function(a){return new V.D(-this.a,-this.b,-this.c)},
aR:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.dF()
return new V.D(this.a/b,this.b/b,this.c/b)},
eK:function(){$.B().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
u:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.is.prototype={
ce:function(a){var s=this.a,r=this.c,q=this.b
if(s)return V.r_(a,r,q)
else{if(a<r)s=r
else s=a>q?q:a
return s}},
gp:function(){var s=this.y
return s==null?this.y=D.E():s},
a9:function(a){var s=this.y
return s==null?null:s.A(a)},
sdh:function(a,b){var s=this.a
if(s!==b){this.a=b
this.a9(new D.x("wrap",s,b))}},
sd3:function(a){var s,r=this,q=r.b
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.ce(s)}r.a9(new D.x("maximumLocation",q,r.b))}},
sd4:function(a){var s,r=this,q=r.c
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.ce(s)}r.a9(new D.x("minimumLocation",q,r.c))}},
saB:function(a,b){var s,r=this
b=r.ce(b)
s=r.d
$.B().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.a9(new D.x("location",s,b))}},
seN:function(a){var s,r,q=this,p=q.e
$.B().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.a9(new D.x("maximumVelocity",p,a))}},
sao:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.a9(new D.x("velocity",r,a))}},
sen:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.a9(new D.x("dampening",s,a))}},
aQ:function(a,b){var s,r,q,p=this,o=p.f
$.B().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.saB(0,p.d+s*b)
o=p.x
$.B().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sao(s)}}}
U.cQ.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.E():s},
sZ:function(a,b){var s,r,q=this
if(b==null)b=V.aM()
if(!q.a.m(0,b)){s=q.a
q.a=b
r=q.b
if(r!=null)r.A(new D.x("matrix",s,b))}},
c8:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cQ))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.ch.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.E():s},
a9:function(a){var s=this.e
return s==null?null:s.A(a)},
aS:function(){return this.a9(null)},
hs:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbO(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.gp()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.a9(new D.aW())},
i7:function(a,b){var s,r
for(s=b.gT(b),r=this.gbO();s.t();)s.gG(s).gp().R(0,r)
this.a9(new D.aX())},
c8:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ae(o,o.length),n=H.a_(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.c8(0,b,c)
s=s==null?q:q.N(0,s)}}p.f=s==null?V.aM():s
o=p.e
if(o!=null)o.bm(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ch))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.c(s,p)
o=s[p]
if(p>=q.length)return H.c(q,p)
if(!J.P(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iaB:1}
U.aB.prototype={}
U.dE.prototype={
gp:function(){var s=this.fx
return s==null?this.fx=D.E():s},
a9:function(a){var s=this.fx
return s==null?null:s.A(a)},
aS:function(){return this.a9(null)},
cF:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gar().gep().j(0,q.gfE())
a.gar().gbC().j(0,q.gfG())
a.gar().gdg().j(0,q.gfI())
s=a.gaK()
r=s.f
s=r==null?s.f=D.E():r
s.j(0,q.ghf())
s=a.gaK()
r=s.d
s=r==null?s.d=D.E():r
s.j(0,q.ghh())
s=a.gaP()
s.gds(s).j(0,q.gfO())
a.gaP().gbC().j(0,q.gfM())
s=a.gaP()
s.ger(s).j(0,q.gfK())
return!0},
b8:function(a){return new V.aj(a.a,a.b)},
fF:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fH:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aF(a.d)
if(s.ak(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b8(a.y.aF(r).N(0,2).aR(0,s.gbk()))
p=n.c
p.saB(0,-q.a*2.5+n.cy)
o=n.b
o.saB(0,-q.b*2.5+n.db)
o.sao(0)
p.sao(0)
n.dx=n.b8(a.z.aF(r).N(0,2).aR(0,s.gbk()))
n.aS()},
fJ:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ak(s)>0.0001){r.c.sao(-r.dx.a*10*2.5)
r.b.sao(-r.dx.b*10*2.5)
r.aS()}},
hg:function(a){var s=this
if(t.b7.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
hi:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.b8(a.y.aF(r).N(0,2).aR(0,s.gbk()))
p=n.c
p.saB(0,-q.a*2.5+n.cy)
o=n.b
o.saB(0,-q.b*2.5+n.db)
o.sao(0)
p.sao(0)
n.dx=n.b8(a.z.aF(r).N(0,2).aR(0,s.gbk()))
n.aS()},
fP:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fN:function(a){var s,r,q,p,o,n=this
t.Q.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aF(a.d)
if(s.ak(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.b8(a.y.aF(r).N(0,2).aR(0,s.gbk()))
p=n.c
p.saB(0,-q.a*2.5+n.cy)
o=n.b
o.saB(0,-q.b*2.5+n.db)
o.sao(0)
p.sao(0)
n.dx=n.b8(a.z.aF(r).N(0,2).aR(0,s.gbk()))
n.aS()},
fL:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ak(s)>0.0001){r.c.sao(-r.dx.a*10*2.5)
r.b.sao(-r.dx.b*10*2.5)
r.aS()}},
c8:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.aQ(0,s)
p=r.b
p.aQ(0,s)
r.fr=V.mS(p.d).N(0,V.lP(q.d))}return r.fr},
$iaB:1}
M.cP.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.E():s},
a1:function(a){var s=this.r
return s==null?null:s.A(a)},
bu:function(){return this.a1(null)},
ib:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.ga6(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q].gp()
o=p.a;(o==null?p.a=[]:o).push(r)}this.a1(new D.aW())},
ie:function(a,b){var s,r
for(s=b.gT(b),r=this.ga6();s.t();)s.gG(s).gp().R(0,r)
this.a1(new D.aX())},
ae:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.ae(s,s.length),r=H.a_(s).c;s.t();)r.a(s.d).ae(a)
q.f=!1},
$ic0:1}
M.cU.prototype={
gp:function(){var s=this.r
return s==null?this.r=D.E():s},
a1:function(a){var s=this.r
return s==null?null:s.A(a)},
bu:function(){return this.a1(null)},
sbf:function(a){var s,r,q=this
if(a==null)a=new X.iS()
s=q.b
if(s!==a){if(s!=null)s.gp().R(0,q.ga6())
r=q.b
q.b=a
a.gp().j(0,q.ga6())
q.a1(new D.x("camera",r,q.b))}},
sbn:function(a,b){var s,r,q=this
if(b==null)b=X.lH(null)
s=q.c
if(s!==b){if(s!=null)s.gp().R(0,q.ga6())
r=q.c
q.c=b
b.gp().j(0,q.ga6())
q.a1(new D.x("target",r,q.c))}},
sa_:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gp().R(0,r.ga6())
s=r.d
r.d=a
if(a!=null)a.gp().j(0,r.ga6())
r.a1(new D.x("technique",s,r.d))}},
ae:function(a){var s,r=this
a.d7(r.d)
s=r.c
if(s!=null)s.S(a)
s=r.b
if(s!=null)s.S(a)
s=r.e
s.aQ(0,a)
s.ae(a)
s=r.b
if(s!=null)s.an(a)
a.d6()},
$ic0:1}
M.cZ.prototype={
a1:function(a){var s=this.y
return s==null?null:s.A(a)},
bu:function(){return this.a1(null)},
hC:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga6(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.cg()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a1(new D.aW())},
hE:function(a,b){var s,r
for(s=b.gT(b),r=this.ga6();s.t();)s.gG(s).gp().R(0,r)
this.a1(new D.aX())},
sbf:function(a){var s,r,q=this
if(a==null)a=X.mY(null)
s=q.b
if(s!==a){if(s!=null)s.gp().R(0,q.ga6())
r=q.b
q.b=a
a.gp().j(0,q.ga6())
q.a1(new D.x("camera",r,q.b))}},
sbn:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gp().R(0,r.ga6())
s=r.c
r.c=b
b.gp().j(0,r.ga6())
r.a1(new D.x("target",s,r.c))}},
gp:function(){var s=this.y
return s==null?this.y=D.E():s},
ae:function(a){var s,r,q,p=this
a.d7(p.d)
s=p.c
if(s!=null)s.S(a)
s=p.b
if(s!=null)s.S(a)
for(s=p.e.a,r=new J.ae(s,s.length),q=H.a_(r).c;r.t();)q.a(r.d).aQ(0,a)
for(s=new J.ae(s,s.length),r=H.a_(s).c;s.t();)r.a(s.d).ae(a)
if(p.b!=null){a.cy.b3()
a.db.b3()}s=p.c
if(s!=null)s.an(a)
a.d6()},
$ic0:1}
A.ih.prototype={}
A.ii.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
jc:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
cM:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.af.prototype={
gat:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.af))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.dh.prototype={
fw:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.bn(""),d0=c8.fr
if(d0){s=""+"uniform mat4 objMat;\n"
c9.a=s}else s=""
r=c8.fx
s=(r?c9.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
c9.a=s
s+="\n"
c9.a=s
s=c9.a=s+"attribute vec3 posAttr;\n"
q=c8.k4
if(q){s+="attribute vec3 normAttr;\n"
c9.a=s}p=c8.r1
c9.a=(p?c9.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.qe(c8,c9)
A.qg(c8,c9)
A.qf(c8,c9)
A.qi(c8,c9)
A.qj(c8,c9)
A.qh(c8,c9)
A.qk(c8,c9)
s=c9.a+="vec4 getPos()\n"
s+="{\n"
c9.a=s
o=c8.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
c9.a=s
s+="}\n"
c9.a=s
s+="\n"
c9.a=s
s+="void main()\n"
c9.a=s
s=c9.a=s+"{\n"
if(o){s+="   setupBendData();\n"
c9.a=s}if(q){s+="   normalVec = getNorm();\n"
c9.a=s}if(p){s+="   binormalVec = getBinm();\n"
c9.a=s}if(c8.r2){s+="   txt2D = getTxt2D();\n"
c9.a=s}if(c8.rx){s+="   txtCube = getTxtCube();\n"
c9.a=s}if(c8.k2){s+="   objPos = getObjPos();\n"
c9.a=s}s=(c8.k3?c9.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
c9.a=s
s+="}\n"
c9.a=s
s=c9.a=s+"\n"
c3.cY(0,s.charCodeAt(0)==0?s:s,A.qd(c8))
c3.y=c3.gaq(c3).h(0,"posAttr")
c3.Q=c3.gaq(c3).h(0,"normAttr")
c3.z=c3.gaq(c3).h(0,"binmAttr")
c3.ch=c3.gaq(c3).h(0,"txt2DAttr")
c3.cx=c3.gaq(c3).h(0,"txtCubeAttr")
c3.cy=c3.gaq(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gw().K(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gw().K(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gw().K(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gw().K(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gw().K(0,"viewMat"))
if(c8.x1)c3.go=t.V.a(c3.gw().K(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gw().K(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gw().K(0,"colorMat"))
c3.k3=[]
s=c8.bg
if(s>0){c3.k2=t.v.a(c3.gw().K(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.e(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.e(c6+q+c7))
r.push(d0.a(l))}}d0=c8.a
if(d0.a)c3.k4=t.g.a(c3.gw().K(0,"emissionClr"))
if(d0.b)c3.r1=t.G.a(c3.gw().K(0,"emissionTxt"))
d0=c8.b
if(d0.a)c3.rx=t.g.a(c3.gw().K(0,"ambientClr"))
if(d0.b)c3.ry=t.G.a(c3.gw().K(0,"ambientTxt"))
d0=c8.c
if(d0.a)c3.x2=t.g.a(c3.gw().K(0,"diffuseClr"))
if(d0.b)c3.y1=t.G.a(c3.gw().K(0,"diffuseTxt"))
d0=c8.d
if(d0.a)c3.bg=t.g.a(c3.gw().K(0,"invDiffuseClr"))
if(d0.b)c3.bh=t.G.a(c3.gw().K(0,"invDiffuseTxt"))
d0=c8.e
s=d0.a
if(s||d0.b||!1){c3.ew=t.n.a(c3.gw().K(0,"shininess"))
if(s)c3.eu=t.g.a(c3.gw().K(0,"specularClr"))
if(d0.b)c3.ev=t.G.a(c3.gw().K(0,"specularTxt"))}if(c8.f.b)c3.ex=t.G.a(c3.gw().K(0,"bumpTxt"))
if(c8.db){c3.ey=t.a.a(c3.gw().K(0,"envSampler"))
d0=c8.r
if(d0.a)c3.ez=t.g.a(c3.gw().K(0,"reflectClr"))
if(d0.b)c3.eA=t.G.a(c3.gw().K(0,"reflectTxt"))
d0=c8.x
s=d0.a
if(s||d0.b||!1){c3.eB=t.n.a(c3.gw().K(0,"refraction"))
if(s)c3.eC=t.g.a(c3.gw().K(0,"refractClr"))
if(d0.b)c3.eD=t.G.a(c3.gw().K(0,"refractTxt"))}}d0=c8.y
if(d0.a)c3.eE=t.n.a(c3.gw().K(0,"alpha"))
if(d0.b)c3.eF=t.G.a(c3.gw().K(0,"alphaTxt"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.cO=P.S(r,t.W)
c3.cP=P.S(r,t.J)
for(r=t.v,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.n)(d0),++k){j=d0[k]
i=j.a
h="barLight"+i
g=[]
for(o=j.b,f=(i&4)!==0,n=0;n<o;++n){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].startPnt"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].endPnt"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].color"
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
q.a(c)
if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att0"
b=m.h(0,e)
if(b==null)H.f(P.e(c6+e+c7))
p.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att1"
a=m.h(0,e)
if(a==null)H.f(P.e(c6+e+c7))
p.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].att2"
a0=m.h(0,e)
if(a0==null)H.f(P.e(c6+e+c7))
p.a(a0)
a1=a0
a2=a
a3=b}else{a1=c4
a2=a1
a3=a2}g.push(new A.fM(l,d,c,a3,a2,a1))}c3.cP.l(0,i,g)
o=c3.cO
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.l(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.cQ=P.S(r,t.W)
c3.cR=P.S(r,t.L)
for(r=t.v,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.n)(d0),++k){j=d0[k]
i=j.a
h="dirLight"+i
g=[]
for(o=j.b,f=(i&1)!==0,n=0;n<o;++n){if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objUp"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objRight"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].objDir"
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
q.a(c)
a4=c
a5=d
a6=l}else{a4=c4
a5=a4
a6=a5}m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].viewDir"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"s["+n+"].color"
d=m.h(0,e)
if(d==null)H.f(P.e(c6+e+c7))
q.a(d)
if(f){m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"sTexture2D"+n
c=m.h(0,e)
if(c==null)H.f(P.e(c6+e+c7))
p.a(c)
a7=c}else a7=c4
g.push(new A.fN(a6,a5,a4,l,d,a7))}c3.cR.l(0,i,g)
o=c3.cQ
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.l(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.cS=P.S(r,t.W)
c3.cT=P.S(r,t.U)
for(r=t.v,q=t.g,p=t.V,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.n)(d0),++k){j=d0[k]
i=j.a
h="pointLight"+i
g=[]
for(a8=j.b,a9=(i&4)!==0,b0=(i&2)!==0,b1=(i&1)!==0,b2=(i&3)!==0,n=0;n<a8;++n){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].point"
l=m.h(0,b3)
if(l==null)H.f(P.e(c6+b3+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].viewPnt"
d=m.h(0,b3)
if(d==null)H.f(P.e(c6+b3+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].color"
c=m.h(0,b3)
if(c==null)H.f(P.e(c6+b3+c7))
q.a(c)
if(b2){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].invViewRotMat"
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
p.a(b)
b4=b}else b4=c4
if(b1){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"sTextureCube"+n
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
o.a(b)
a7=b}else a7=c4
if(b0){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"sShadowCube"+n
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
o.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].shadowAdj"
a=m.h(0,b3)
if(a==null)H.f(P.e(c6+b3+c7))
f.a(a)
b5=b
b6=a}else{b5=c4
b6=b5}if(a9){m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att0"
b=m.h(0,b3)
if(b==null)H.f(P.e(c6+b3+c7))
e.a(b)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att1"
a=m.h(0,b3)
if(a==null)H.f(P.e(c6+b3+c7))
e.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b3=h+"s["+n+"].att2"
a0=m.h(0,b3)
if(a0==null)H.f(P.e(c6+b3+c7))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c4
a2=a1
a3=a2}g.push(new A.fQ(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.cT.l(0,i,g)
a8=c3.cS
m=c3.r
if(m==null)H.f(P.e(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.e(c6+a9+c7))
a8.l(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.cU=P.S(s,t.W)
c3.cV=P.S(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.n)(c8),++k){j=c8[k]
i=j.a
h="spotLight"+i
g=[]
for(f=j.b,e=(i&2)!==0,a8=(i&1)!==0,a9=(i&4)!==0,b0=(i&8)!==0,b1=(i&3)!==0,n=0;n<f;++n){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objPnt"
l=m.h(0,b2)
if(l==null)H.f(P.e(c6+b2+c7))
r.a(l)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objDir"
d=m.h(0,b2)
if(d==null)H.f(P.e(c6+b2+c7))
r.a(d)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].viewPnt"
c=m.h(0,b2)
if(c==null)H.f(P.e(c6+b2+c7))
r.a(c)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].color"
b=m.h(0,b2)
if(b==null)H.f(P.e(c6+b2+c7))
r.a(b)
if(b1){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objUp"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
r.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].objRight"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
r.a(a0)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].tuScalar"
b7=m.h(0,b2)
if(b7==null)H.f(P.e(c6+b2+c7))
q.a(b7)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].tvScalar"
b8=m.h(0,b2)
if(b8==null)H.f(P.e(c6+b2+c7))
q.a(b8)
b9=b8
c0=b7
a5=a0
a6=a}else{b9=c4
c0=b9
a5=c0
a6=a5}if(e){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].shadowAdj"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
p.a(a)
b6=a}else b6=c4
if(b0){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].cutoff"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
q.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].coneAngle"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
q.a(a0)
c1=a0
c2=a}else{c1=c4
c2=c1}if(a9){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att0"
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
q.a(a)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att1"
a0=m.h(0,b2)
if(a0==null)H.f(P.e(c6+b2+c7))
q.a(a0)
m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"s["+n+"].att2"
b7=m.h(0,b2)
if(b7==null)H.f(P.e(c6+b2+c7))
q.a(b7)
a1=b7
a2=a0
a3=a}else{a1=c4
a2=a1
a3=a2}if(a8){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"sTexture2D"+n
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
o.a(a)
a7=a}else a7=c4
if(e){m=c3.r
if(m==null)H.f(P.e(c5))
b2=h+"sShadow2D"+n
a=m.h(0,b2)
if(a==null)H.f(P.e(c6+b2+c7))
o.a(a)
b5=a}else b5=c4
g.push(new A.fT(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.cV.l(0,i,g)
f=c3.cU
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
f.l(0,i,s.a(l))}}}},
aJ:function(a,b){if(b!=null&&b.d)if(a!=null)a.fe(b)},
iI:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.dn(b)}}
A.bD.prototype={
i:function(a){return"barLight"+this.a}}
A.bJ.prototype={
i:function(a){return"dirLight"+this.a}}
A.bZ.prototype={
i:function(a){return"pointLight"+this.a}}
A.c2.prototype={
i:function(a){return"spotLight"+this.a}}
A.j8.prototype={
i:function(a){return this.bh}}
A.fM.prototype={}
A.fN.prototype={}
A.fQ.prototype={}
A.fT.prototype={}
A.c1.prototype={
cY:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.dL(b,35633)
r=n.dL(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaZ(),s)
q.attachShader(n.gaZ(),r)
q.linkProgram(n.gaZ())
if(!H.nz(q.getProgramParameter(n.gaZ(),35714))){o=q.getProgramInfoLog(n.gaZ())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.e("Failed to link shader: "+o))}n.iJ()
n.iL()},
gaq:function(a){var s=this.f
if(s==null)throw H.b(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gw:function(){var s=this.r
if(s==null)throw H.b(P.e(u.C))
return s},
gaZ:function(){var s=this.e
if(s==null)throw H.b(P.e(u.F))
return s},
S:function(a){a.a.useProgram(this.e)
this.gaq(this).jc()},
dL:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.nz(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.b(P.e('Error compiling shader "'+H.r(q)+'": '+s))}return q},
iJ:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.i3(l.getProgramParameter(o.gaZ(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.f(P.e(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.f(P.e(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.ih(l,q,p))}o.f=new A.ii(m)},
iL:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.i3(j.getProgramParameter(m.gaZ(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.f(P.e(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.f(P.e(l))
p=q.name
p.toString
p=j.getUniformLocation(r,p)
p.toString
o=q.type
o.toString
n=q.size
n.toString
q=q.name
q.toString
k.push(m.j8(o,n,q,p))}m.r=new A.kh(k)},
b7:function(a,b,c){var s=this.a
if(a===1)return new A.dC(s,b,c)
else return A.m0(s,this.e,b,a,c)},
h6:function(a,b,c){var s=this.a
if(a===1)return new A.fR(s,b,c)
else return A.m0(s,this.e,b,a,c)},
h7:function(a,b,c){var s=this.a
if(a===1)return new A.fS(s,b,c)
else return A.m0(s,this.e,b,a,c)},
bU:function(a,b){return new P.hf(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
j8:function(a,b,c,d){var s=this
switch(a){case 5120:return s.b7(b,c,d)
case 5121:return s.b7(b,c,d)
case 5122:return s.b7(b,c,d)
case 5123:return s.b7(b,c,d)
case 5124:return s.b7(b,c,d)
case 5125:return s.b7(b,c,d)
case 5126:return new A.fJ(s.a,c,d)
case 35664:return new A.kd(s.a,c,d)
case 35665:return new A.fK(s.a,c,d)
case 35666:return new A.fL(s.a,c,d)
case 35667:return new A.ke(s.a,c,d)
case 35668:return new A.kf(s.a,c,d)
case 35669:return new A.kg(s.a,c,d)
case 35674:return new A.ki(s.a,c,d)
case 35675:return new A.fO(s.a,c,d)
case 35676:return new A.fP(s.a,c,d)
case 35678:return s.h6(b,c,d)
case 35680:return s.h7(b,c,d)
case 35670:throw H.b(s.bU("BOOL",c))
case 35671:throw H.b(s.bU("BOOL_VEC2",c))
case 35672:throw H.b(s.bU("BOOL_VEC3",c))
case 35673:throw H.b(s.bU("BOOL_VEC4",c))
default:throw H.b(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.dw.prototype={}
A.dx.prototype={}
A.kb.prototype={}
A.kh.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
K:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.dC.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.ke.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.kf.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.kg.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.kc.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.fJ.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.kd.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.fK.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.fL.prototype={
fc:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.ki.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.fO.prototype={
au:function(a){var s=new Float32Array(H.e8(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.fP.prototype={
au:function(a){var s=new Float32Array(H.e8(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.fR.prototype={
fe:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.fS.prototype={
dn:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.ll.prototype={
$1:function(a){return 1},
$S:42}
F.d0.prototype={
fZ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.dF()
if(n!=null)q=q.Y(0,n)
if(s!=null)q=q.Y(0,s)
if(r!=null)q=q.Y(0,r)
if(q.eK())return p
return q.L()},
h0:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.bt(0,n)
q=new V.D(o.a,o.b,o.c).L()
o=r.bt(0,n)
return q.bB(new V.D(o.a,o.b,o.c).L()).L()},
cK:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.fZ()
if(s==null){s=q.h0()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.as()}return!0},
fY:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.dF()
if(n!=null)q=q.Y(0,n)
if(s!=null)q=q.Y(0,s)
if(r!=null)q=q.Y(0,r)
if(q.eK())return p
return q.L()},
h_:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.bt(0,e)
o=new V.D(j.a,j.b,j.c).L()
if(q.a-r.a<0)o=o.bp(0)}else{n=(j-s.b)/p
j=b.bt(0,e)
j=new V.a1(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).bt(0,h)
o=new V.D(j.a,j.b,j.c).L()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.bp(0)}m=l.d
if(m!=null){m=m.L()
o=m.bB(o).L().bB(m).L()}return o},
cI:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.fY()
if(s==null){s=q.h_()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.as()}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
E:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gab(p)
p=a+C.b.aD(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gab(o)
p=p+C.b.aD(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gab(o)
s=p+C.b.aD(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.u()
return s+((p==null?"-":p)+"}")},
u:function(){return this.E("")}}
F.j0.prototype={
fv:function(a,b){var s=this,r=a.a
if(r==null)throw H.b(P.e("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.b(P.e("May not create a line with vertices attached to different shapes."))
s.a=a
a.gaX(a).b.push(s)
s.b=b
b.gaX(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gaX(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.as()}},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
E:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gab(s)
s=a+C.b.aD(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gab(r)
return s+C.b.aD(C.c.i(r==null?-1:r),0)},
u:function(){return this.E("")}}
F.ju.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
E:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gab(s)
return a+C.b.aD(C.c.i(s),0)},
u:function(){return this.E("")}}
F.jF.prototype={
gai:function(){var s=this.a
return s==null?this.a=new F.a7(this,[]):s},
gc4:function(a){var s=this.b
return s==null?this.b=new F.dv(this,[]):s},
gaX:function(a){var s=this.c
return s==null?this.c=new F.fn(this,[]):s},
gaw:function(){var s=this.d
return s==null?this.d=new F.du(this,[]):s},
gp:function(){var s=this.e
return s==null?this.e=D.E():s},
be:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gaw().be()||!1
if(!r.gai().be())s=!1
q=r.e
if(q!=null)q.bm(0)
return s},
cH:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gai().c.length,c=$.aw(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.bB().a)!==0)++a
if((b&$.bA().a)!==0)++a
if((b&$.bC().a)!==0)++a
if((b&$.cb().a)!==0)++a
if((b&$.eg().a)!==0)++a
if((b&$.eh().a)!==0)++a
if((b&$.cI().a)!==0)++a
if((b&$.bz().a)!==0)++a
s=a1.gdr(a1)
r=P.cl(d*s,0,!1)
e.a=0
q=P.mP(a,new F.jG(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.e8(r)),35044)
c.bindBuffer(f,g)
p=new Z.bF(new Z.h_(f,b),[],q,a1)
if(h.gc4(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.dv(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.c(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.a7(m,[]):l).aT()}b=b.e}o.push(b==null?0:b);++n}k=Z.m2(c,34963,o)
p.b.push(new Z.d4(0,o.length,k))}if(h.gaX(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.fn(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.c(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.a7(m,[]):l).aT()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.a7(m,[]):l).aT()}b=b.e}o.push(b==null?0:b);++n}k=Z.m2(c,34963,o)
p.b.push(new Z.d4(1,o.length,k))}if(h.gaw().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.du(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.c(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.a7(m,[]):l).aT()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.a7(m,[]):l).aT()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.a7(m,[]):l).aT()}b=b.e}o.push(b==null?0:b);++n}k=Z.m2(c,34963,o)
p.b.push(new Z.d4(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.gai().c.length!==0){q.push("Vertices:")
q.push(s.gai().E(r))}if(s.gc4(s).b.length!==0){q.push("Points:")
q.push(s.gc4(s).E(r))}if(s.gaX(s).b.length!==0){q.push("Lines:")
q.push(s.gaX(s).E(r))}if(s.gaw().b.length!==0){q.push("Faces:")
q.push(s.gaw().E(r))}return C.a.q(q,"\n")},
as:function(){var s=this.e
return s==null?null:s.A(null)}}
F.jG.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.j_(a),f=g.gdr(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.a7(o,[]):m).c
if(n>=m.length)return H.c(m,n)
l=m[n].jp(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.c(r,k)
r[k]=i;++k}}e.a+=f
return new Z.cL(g,f,d*4,h.d)},
$S:43}
F.du.prototype={
cD:function(a){var s,r,q,p,o,n,m,l=[],k=a.length
if(k>0){s=a[0]
for(r=this.a,q=2;q<k;++q){p=q-1
o=a.length
if(p>=o)return H.c(a,p)
p=a[p]
if(q>=o)return H.c(a,q)
o=a[q]
n=r.a;(n==null?r.a=new F.a7(r,[]):n).j(0,s)
n=r.a;(n==null?r.a=new F.a7(r,[]):n).j(0,p)
n=r.a;(n==null?r.a=new F.a7(r,[]):n).j(0,o)
m=new F.d0()
n=s.a
if(n==null)H.f(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(n!=p.a||n!=o.a)H.f(P.e("May not create a face with vertices attached to different shapes."))
m.a=s
n=s.d;(n==null?s.d=new F.cu([],[],[]):n).b.push(m)
m.b=p
n=p.d;(n==null?p.d=new F.cu([],[],[]):n).c.push(m)
m.c=o
p=o.d;(p==null?o.d=new F.cu([],[],[]):p).d.push(m)
p=m.a
if(p!=null){p=p.a
if(p!=null){o=p.d;(o==null?p.d=new F.du(p,[]):o).b.push(m)}}p=m.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.A(null)}}l.push(m)}}return l},
gk:function(a){return this.b.length},
be:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].cK())q=!1
return q},
cJ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].cI())q=!1
return q},
i:function(a){return this.u()},
E:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].E(a))
return C.a.q(p,"\n")},
u:function(){return this.E("")}}
F.fn.prototype={
iX:function(a){var s,r,q,p,o,n=[],m=a.length
for(s=this.a,r=1;r<m;r+=2){q=r-1
p=a.length
if(q>=p)return H.c(a,q)
q=a[q]
if(r>=p)return H.c(a,r)
p=a[r]
o=s.a;(o==null?s.a=new F.a7(s,[]):o).j(0,q)
o=s.a;(o==null?s.a=new F.a7(s,[]):o).j(0,p)
o=new F.j0()
o.fv(q,p)
n.push(o)}return n},
gk:function(a){return this.b.length},
i:function(a){return this.u()},
E:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.c(q,s)
r.push(q[s].E(a+(""+s+". ")))}return C.a.q(r,"\n")},
u:function(){return this.E("")}}
F.dv.prototype={
iY:function(a){var s,r,q,p,o,n=[],m=a.length
for(s=this.a,r=0;r<m;++r){if(r>=a.length)return H.c(a,r)
q=a[r]
p=s.a;(p==null?s.a=new F.a7(s,[]):p).j(0,q)
p=new F.ju()
if(q.a==null)H.f(P.e("May not create a point with a vertex which is not attached to a shape."))
p.a=q
o=q.b;(o==null?q.b=new F.kv([]):o).b.push(p)
q=p.a
if(q!=null){q=q.a
if(q!=null){o=q.b;(o==null?q.b=new F.dv(q,[]):o).b.push(p)}}q=p.a
if(q!=null){q=q.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}n.push(p)}return n},
gk:function(a){return this.b.length},
i:function(a){return this.u()},
E:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].E(a))
return C.a.q(p,"\n")},
u:function(){return this.E("")}}
F.kr.prototype={
gaX:function(a){var s=this.c
return s==null?this.c=new F.ku([],[]):s},
gaw:function(){var s=this.d
return s==null?this.d=new F.cu([],[],[]):s},
gab:function(a){var s=this.a
if(s!=null)s.gai().aT()
return this.e},
jp:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.aw())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.m(0,$.bB())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.m(0,$.bA())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.m(0,$.bC())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.m(0,$.cb())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.m(0,$.eg())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.m(0,$.eh())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.m(0,$.cI()))return[o.ch]
else if(a.m(0,$.bz())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
cK:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dF()
p.gaw().D(0,new F.kx(o))
p.r=o.a.L()
if(r){s.as()
o=s.e
if(o!=null)o.bm(0)}return!0},
cI:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.dF()
p.gaw().D(0,new F.kw(o))
p.x=o.a.L()
if(r){s.as()
o=s.e
if(o!=null)o.bm(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
E:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.aD(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.u()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.u()
n.push(s==null?o:s)
n.push(V.y(q.ch,3,0))
s=q.cx
s=s==null?p:s.u()
n.push(s==null?o:s)
r=C.a.q(n,", ")
return a+"{"+r+"}"},
u:function(){return this.E("")}}
F.kx.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.Y(0,r)}},
$S:8}
F.kw.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.Y(0,r)}},
$S:8}
F.a7.prototype={
aT:function(){},
j:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.e("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.as()
return!0},
e9:function(a,b,c,d,e,f,g){var s=F.m1(a,null,b,c,d,e,f,g,0)
this.j(0,s)
return s},
bV:function(a,b,c,d,e,f){return this.e9(a,b,c,null,d,e,f)},
iZ:function(a,b,c,d,e,f){return this.e9(a,b,c,d,e,f,null)},
gk:function(a){return this.c.length},
be:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].cK()
return!0},
cJ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].cI()
return!0},
j0:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.L()
if(!J.P(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.A(null)}}}}}return!0},
i:function(a){return this.u()},
E:function(a){var s,r,q,p
this.aT()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p)s.push(r[p].E(a))
return C.a.q(s,"\n")},
u:function(){return this.E("")}}
F.cu.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){var s=this
C.a.D(s.b,b)
C.a.D(s.c,new F.ks(s,b))
C.a.D(s.d,new F.kt(s,b))},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].E(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].E(""))
return C.a.q(p,"\n")}}
F.ks.prototype={
$1:function(a){if(!J.P(a.a,this.a))this.b.$1(a)},
$S:8}
F.kt.prototype={
$1:function(a){var s=this.a
if(!J.P(a.a,s)&&!J.P(a.b,s))this.b.$1(a)},
$S:8}
F.ku.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].E(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].E(""))
return C.a.q(p,"\n")}}
F.kv.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].E(""))
return C.a.q(p,"\n")}}
O.aL.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.E():s},
U:function(a){var s=this.fr
return s==null?null:s.A(a)},
bv:function(){return this.U(null)},
dY:function(a){this.a=null
this.U(a)},
iG:function(){return this.dY(null)},
hw:function(a,b){return this.U(new D.aW())},
hy:function(a,b){return this.U(new D.aX())},
gJ:function(){var s=this,r=s.dx
if(r==null){r=new D.da([],[],[],[],[])
r.dl(r.ght(),r.gi4(),r.gi8())
r.gp().j(0,s.gdX())
r.geL().j(0,s.gaI())
s.dx=r}return r},
gW:function(){var s=this.r
return s==null?this.r=O.eS(this,"ambient"):s},
gX:function(){var s=this.x
return s==null?this.x=O.eS(this,"diffuse"):s},
gC:function(){var s=this.z
return s==null?this.z=new O.jb(new V.o(0,0,0),this,"specular",new A.af(!1,!1,!1)):s},
gbX:function(){var s=this.Q
return s==null?this.Q=new O.j7(this,"bump",new A.af(!1,!1,!1)):s},
sI:function(a){var s,r=this,q=r.ch
if(q!==a){if(q!=null)q.gp().R(0,r.gaI())
s=r.ch
r.ch=a
a.gp().j(0,r.gaI())
r.U(new D.x("environment",s,r.ch))}},
gad:function(){var s=this.cx
return s==null?this.cx=O.eS(this,"reflect"):s},
gbW:function(a){var s=this.db
return s==null?this.db=new O.j6(this,"alpha",new A.af(!1,!1,!1)):s},
dJ:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=t.y,a0=new H.Y(a),a1=c.dx
a1=a1==null?b:a1.e
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.n)(a1),++r){q=a1[r]
p=q.gaV()
o=a0.h(0,q.gaV())
a0.l(0,p,o==null?1:o)}n=[]
a0.D(0,new O.jc(c,n))
C.a.bs(n,new O.jd())
m=new H.Y(a)
a1=c.dx
a1=a1==null?b:a1.f
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.n)(a1),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=[]
m.D(0,new O.je(c,l))
C.a.bs(l,new O.jf())
k=new H.Y(a)
a1=c.dx
a1=a1==null?b:a1.r
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.n)(a1),++r){q=a1[r]
p=q.gaV()
o=k.h(0,q.gaV())
k.l(0,p,o==null?1:o)}j=[]
k.D(0,new O.jg(c,j))
C.a.bs(j,new O.jh())
i=new H.Y(a)
a=c.dx
a=a==null?b:a.x
if(a==null)a=[]
a1=a.length
r=0
for(;r<a.length;a.length===a1||(0,H.n)(a),++r){q=a[r]
s=q.gaV()
p=i.h(0,q.gaV())
i.l(0,s,p==null?1:p)}h=[]
i.D(0,new O.ji(c,h))
C.a.bs(h,new O.jj())
a=C.c.aa(c.e.a.length+3,4)
if(c.dy==null)c.dy=new O.j9(new V.ar(0,0,0,0))
a1=c.f
a1=(a1==null?c.f=O.eS(c,"emission"):a1).c
s=c.gW().c
p=c.gX().c
o=c.y
o=(o==null?c.y=O.eS(c,"invDiffuse"):o).c
g=c.gC().c
f=c.gbX().c
e=c.gad().c
d=c.cy
return A.oN(!1,!1,!1,!1,a*4,a1,s,p,o,g,f,e,(d==null?c.cy=new O.ja(new V.o(0,0,0),c,"refract",new A.af(!1,!1,!1)):d).c,c.gbW(c).c,n,l,j,h)},
ay:function(a,b){if(b!=null)if(!C.a.P(a,b)){b.sab(0,a.length)
a.push(b)}},
aQ:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aS(m==null?[]:m)
s=H.a_(m).c
for(;m.t();){r=s.a(m.d)
q=$.kp
if(q==null)q=$.kp=new V.D(0,0,1)
r.c=q
p=$.ko
r.d=p==null?$.ko=new V.D(0,1,0):p
p=$.kn
r.e=p==null?$.kn=new V.D(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.c7(q).L()
r.d=n.c7(r.d).L()
r.e=n.c7(r.e).L()}}},
d8:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null){s=a6.dJ()
r=s.bh
a8=t.d1.a(a9.fr.h(0,r))
if(a8==null){q=a9.a
p=t.S
o=t.W
a8=new A.dh(s,[],P.S(p,o),P.S(p,t.J),P.S(p,o),P.S(p,t.L),P.S(p,o),P.S(p,t.U),P.S(p,o),P.S(p,t.R),q,r)
a8.fw(s,q)
a9.cE(a8)}a8=a6.a=a8
b0.e=null}n=a8.x
m=n.es
s=b0.e
if(!(s instanceof Z.bF))s=b0.e=null
if(s==null||!s.d.m(0,m)){s=n.k4
if(s){r=b0.d
if(r!=null)r.be()}r=n.r1
if(r){q=b0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gaw().cJ()
q.gai().cJ()
q=q.e
if(q!=null)q.bm(0)}}q=n.rx
if(q){p=b0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gai().j0()
p=p.e
if(p!=null)p.bm(0)}}p=b0.d
l=p==null?a7:p.cH(new Z.dG(a9.a),m)
if(l==null)return
p=l.aW($.aw())
if(p!=null){o=a8.y
o=o==null?a7:o.c
p.e=o==null?0:o}if(s){s=l.aW($.bB())
if(s!=null){p=a8.Q
p=p==null?a7:p.c
s.e=p==null?1:p}}if(r){s=l.aW($.bA())
if(s!=null){r=a8.z
r=r==null?a7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aW($.bC())
if(s!=null){r=a8.ch
r=r==null?a7:r.c
s.e=r==null?3:r}}if(q){s=l.aW($.cb())
if(s!=null){r=a8.cx
r=r==null?a7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aW($.bz())
if(s!=null){r=a8.cy
r=r==null?a7:r.c
s.e=r==null?5:r}}b0.e=l}k=[]
a8.S(a9)
if(n.fr){s=a9.dx
s=s.gZ(s)
r=a8.db
if(r!=null)r.au(s.am(0,!0))}if(n.fx){s=a9.cx
if(s==null){s=a9.db
r=a9.dx
r=a9.cx=s.gZ(s).N(0,r.gZ(r))
s=r}r=a8.dx
if(r!=null)r.au(s.am(0,!0))}s=a9.gf0()
r=a8.fr
if(r!=null)r.au(s.am(0,!0))
if(n.go){s=a9.db
s=s.gZ(s)
r=a8.dy
if(r!=null)r.au(s.am(0,!0))}if(n.x1){s=$.mR
if(s==null){s=new V.dk(1,0,0,0,1,0,0,0,1)
$.mR=s}r=a8.go
if(r!=null)r.au(s.am(0,!0))}if(n.x2){s=V.aM()
r=a8.id
if(r!=null)r.au(s.am(0,!0))}if(n.y1){s=V.aM()
r=a8.k1
if(r!=null)r.au(s.am(0,!0))}if(n.bg>0){s=a6.e.a
j=s.length
r=a8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.c(s,i)
r=s[i]
q=a8.k3
if(i>=q.length)return H.c(q,i)
q=q[i]
h=new Float32Array(H.e8(r.am(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a6.f
r=r==null?a7:r.f
if(r==null)r=new V.o(0,0,0)
q=a8.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a6.f
a6.ay(k,s==null?a7:s.d)
s=a6.f
s=s==null?a7:s.d
a8.aJ(a8.r1,s)}if(n.k1){s=n.b
if(s.a){r=a6.r
r=r==null?a7:r.f
if(r==null)r=new V.o(0,0,0)
q=a8.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a6.r
a6.ay(k,s==null?a7:s.d)
s=a6.r
s=s==null?a7:s.d
a8.aJ(a8.ry,s)}s=n.c
if(s.a){r=a6.x
r=r==null?a7:r.f
if(r==null)r=new V.o(0,0,0)
q=a8.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a6.x
a6.ay(k,s==null?a7:s.d)
s=a6.x
s=s==null?a7:s.d
a8.aJ(a8.y1,s)}s=n.d
if(s.a){r=a6.y
r=r==null?a7:r.f
if(r==null)r=new V.o(0,0,0)
q=a8.bg
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a6.y
a6.ay(k,s==null?a7:s.d)
s=a6.y
s=s==null?a7:s.d
a8.aJ(a8.bh,s)}s=n.e
r=s.a
if(r||s.b||!1){q=a6.z
q=q==null?a7:q.ch
if(q==null)q=100
p=a8.ew
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.z
r=r==null?a7:r.f
if(r==null)r=new V.o(1,1,1)
q=a8.eu
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a6.z
a6.ay(k,s==null?a7:s.d)
s=a6.z
s=s==null?a7:s.d
a8.aJ(a8.ev,s)}s=n.z
if(s.length>0){g=new H.Y(t.y)
r=a6.dx
r=r==null?a7:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.n)(r),++f){e=r[f]
d=e.gaV()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
p=a8.cP.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.c(p,c)
b=p[c]
p=e.gke()
o=$.b2
p=p.bG(o==null?$.b2=new V.a1(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gkj()
o=$.b2
p=p.bG(o==null?$.b2=new V.a1(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gn(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.geq()){p=e.geb()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gec()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ged()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.n)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a8.cO.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=a9.db
a=r.gZ(r)
a0=new H.Y(t.y)
r=a6.dx
r=r==null?a7:r.f
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.n)(r),++f){e=r[f]
c=a0.h(0,0)
if(c==null)c=0
a0.l(0,0,c+1)
p=a8.cR.h(0,0)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.c(p,c)
b=p[c]
p=a.c7(e.c).L()
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.b
o=b.f
o.a.uniform3f(o.d,p.a,p.b,p.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.n)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=a8.cQ.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=a9.db
a=r.gZ(r)
a1=new H.Y(t.y)
r=a6.dx
r=r==null?a7:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.n)(r),++f){e=r[f]
d=e.gaV()
c=a1.h(0,d)
if(c==null)c=0
a1.l(0,d,c+1)
p=a8.cT.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.c(p,c)
b=p[c]
a2=a.N(0,e.gZ(e))
p=e.gZ(e)
o=$.b2
p=p.bG(o==null?$.b2=new V.a1(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.b2
p=a2.bG(p==null?$.b2=new V.a1(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gn(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gb4()
p=a2.cZ(0)
o=b.d
if(o!=null){h=new Float32Array(H.e8(new V.dk(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).am(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gb4()
p=e.gb4()
if(!C.a.P(k,p)){p.sab(0,k.length)
k.push(p)}p=e.gb4()
o=p.gd1(p)
if(o){o=b.f
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gbr()
p=e.gff()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gbr()
if(!C.a.P(k,p)){p.sab(0,k.length)
k.push(p)}p=e.gbr()
o=p.gd1(p)
if(o){o=b.r
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.geq()){p=e.geb()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gec()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ged()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.n)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a8.cS.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=a9.db
a=r.gZ(r)
a5=new H.Y(t.y)
r=a6.dx
r=r==null?a7:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.n)(r),++f){e=r[f]
d=e.gaV()
c=a5.h(0,d)
if(c==null)c=0
a5.l(0,d,c+1)
p=a8.cV.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.c(p,c)
b=p[c]
p=e.gjJ(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gkh(e).L()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bG(e.gjJ(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gn(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gb4()
p=e.gdg()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gda(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gks()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gkt()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gb4()
p=e.gb4()
if(!C.a.P(k,p)){p.sab(0,k.length)
k.push(p)}p=e.gb4()
o=p.gd1(p)
if(o){o=b.dx
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gbr()
p=e.gff()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gbr()
if(!C.a.P(k,p)){p.sab(0,k.length)
k.push(p)}p=e.gbr()
o=p.gd1(p)
if(o){o=b.dy
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.gki()){p=e.gkg()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gkf()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.geq()){p=e.geb()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gec()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ged()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.n)(s),++f){q=s[f].a
j=a5.h(0,q)
if(j==null)j=0
q=a8.cU.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.b){s=a6.Q
a6.ay(k,s==null?a7:s.d)
s=a6.Q
s=s==null?a7:s.d
a8.aJ(a8.ex,s)}if(n.dy){s=a9.Q
if(s==null){s=a9.db
s=a9.Q=s.gZ(s).cZ(0)}r=a8.fy
if(r!=null)r.au(s.am(0,!0))}if(n.db){a6.ay(k,a6.ch)
s=a6.ch
a8.iI(a8.ey,s)
s=n.r
if(s.a){r=a6.cx
r=r==null?a7:r.f
if(r==null)r=new V.o(1,1,1)
q=a8.ez
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a6.cx
a6.ay(k,s==null?a7:s.d)
s=a6.cx
s=s==null?a7:s.d
a8.aJ(a8.eA,s)}s=n.x
r=s.a
if(r||s.b||!1){q=a6.cy
q=q==null?a7:q.ch
if(q==null)q=0
p=a8.eB
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.cy
r=r==null?a7:r.f
if(r==null)r=new V.o(1,1,1)
q=a8.eC
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=a6.cy
a6.ay(k,s==null?a7:s.d)
s=a6.cy
s=s==null?a7:s.d
a8.aJ(a8.eD,s)}}s=n.y
r=s.a
q=!r
if(!q||s.b||!1){if(r){r=a6.db
r=r==null?a7:r.f
if(r==null)r=1
p=a8.eE
if(p!=null)p.a.uniform1f(p.d,r)}if(s.b){r=a6.db
a6.ay(k,r==null?a7:r.d)
r=a6.db
r=r==null?a7:r.d
a8.aJ(a8.eF,r)}r=a9.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].S(a9)
r=t.D.a(b0.e)
r.S(a9)
r.ae(a9)
r.an(a9)
if(!q||s.b||!1)a9.a.disable(3042)
for(i=0;i<k.length;++i)k[i].an(a9)
a9.a.useProgram(a7)
a8.gaq(a8).cM()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.dJ().bh}}
O.jc.prototype={
$2:function(a,b){return this.b.push(new A.bD(a,C.c.aa(b+3,4)*4))},
$S:9}
O.jd.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:47}
O.je.prototype={
$2:function(a,b){return this.b.push(new A.bJ(a,C.c.aa(b+3,4)*4))},
$S:9}
O.jf.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:48}
O.jg.prototype={
$2:function(a,b){return this.b.push(new A.bZ(a,C.c.aa(b+3,4)*4))},
$S:9}
O.jh.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:49}
O.ji.prototype={
$2:function(a,b){return this.b.push(new A.c2(a,C.c.aa(b+3,4)*4))},
$S:9}
O.jj.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:50}
O.j6.prototype={
cw:function(a){var s=this,r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.a.U(new D.x(s.b,r,a))}},
b_:function(){this.dt()
this.cw(1)},
sat:function(a,b){var s=this,r=s.c.b
if(b<=0){s.bc(new A.af(!1,r,!1))
s.cw(0)}else{s.bc(new A.af(!0,r,!1))
s.cw(b>=1?1:b)}}}
O.di.prototype={
U:function(a){return this.a.U(a)},
bv:function(){return this.U(null)},
b_:function(){},
bc:function(a){var s,r,q=this
if(!q.c.m(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.b_()
s=q.a
s.a=null
s.U(null)}},
sal:function(a){var s,r=this,q=r.c
if(!q.b)r.bc(new A.af(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gp().R(0,r.gaI())
s=r.d
r.d=a
a.gp().j(0,r.gaI())
r.a.U(new D.x(r.b+".texture2D",s,r.d))}}}
O.j7.prototype={}
O.dj.prototype={
e0:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.U(new D.x(r.b+".color",s,a))}},
b_:function(){this.dt()
this.e0(new V.o(1,1,1))},
sn:function(a,b){this.bc(new A.af(!0,this.c.b,!1))
this.e0(b)}}
O.j9.prototype={}
O.ja.prototype={
b_:function(){var s,r=this
r.du()
s=r.ch
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.U(new D.x(r.b+".refraction",s,1))}}}
O.jb.prototype={
cz:function(a){var s=this,r=s.ch
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.U(new D.x(s.b+".shininess",r,a))}},
b_:function(){this.du()
this.cz(100)},
sac:function(a){var s=this,r=s.c.b
if(a<=0){s.bc(new A.af(!1,r,!1))
s.cz(0)}else{s.bc(new A.af(!0,r,!1))
s.cz(a)}}}
O.fo.prototype={
gp:function(){var s=this.e
return s==null?this.e=D.E():s},
U:function(a){var s=this.e
return s==null?null:s.A(a)},
bv:function(){return this.U(null)},
d8:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.x.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.dw(a.a,"Skybox")
s.cY(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gaq(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gw().h(0,"fov"))
s.z=r.a(s.gw().h(0,"ratio"))
s.Q=t.g.a(s.gw().h(0,"boxClr"))
s.ch=t.a.a(s.gw().h(0,"boxTxt"))
s.cx=t.j.a(s.gw().h(0,"viewMat"))
a.cE(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.cH(new Z.dG(a.a),$.aw())
if(r==null)r=l
else{q=r.aW($.aw())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.S(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.S(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.dn(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.gZ(r).cZ(0)
p=p.cx
if(p!=null)p.au(r.am(0,!0))}r=b.e
if(r instanceof Z.bF){r.S(a)
r.ae(a)
r.an(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gaq(r).cM()}o.an(a)}}
O.jK.prototype={
gp:function(){var s=this.c
return s==null?this.c=D.E():s},
aQ:function(a,b){},
d8:function(a,b){var s,r,q,p,o=this,n=null,m="SolidColor"
if(o.a==null){s=t.cH.a(a.fr.h(0,m))
if(s==null){s=new A.dx(a.a,m)
s.cY(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
s.x=s.gaq(s).h(0,"posAttr")
s.y=t.F.a(s.gw().h(0,"color"))
s.z=t.j.a(s.gw().h(0,"projViewObjMat"))
a.cE(s)}o.a=s}r=b.e
if((!(r instanceof Z.bF)?b.e=null:r)==null){r=b.d
r=r==null?n:r.cH(new Z.dG(a.a),$.aw())
if(r==null)r=n
else{q=r.aW($.aw())
if(q!=null){p=o.a
if(p==null)p=n
else{p=p.x
p=p==null?n:p.c}q.e=p==null?0:p}}b.e=r}r=o.a
if(r!=null){r.S(a)
q=r.y
if(q!=null)q.fc(o.b)
q=a.gf0()
r=r.z
if(r!=null)r.au(q.am(0,!0))}r=t.D.a(b.e)
r.S(a)
r.ae(a)
r.an(a)
r=o.a
if(r!=null){a.a.useProgram(n)
r.gaq(r).cM()}}}
O.jT.prototype={}
T.et.prototype={
bK:function(a){return null},
fQ:function(){return this.bK(null)},
cF:function(a){var s,r=this
if(r.b!=null)return!1
r.b=a
a.gar().gep().j(0,r.ghk())
a.gar().gbC().j(0,r.ghm())
a.gar().gdg().j(0,r.gho())
s=a.gaP()
s.gds(s).j(0,r.giR())
a.gaP().gbC().j(0,r.giP())
s=a.gaP()
s.ger(s).j(0,r.giN())
return!0},
hl:function(a){if(!t.Z.a(a).x.b.m(0,this.c))return
this.ch=this.Q=!0},
hn:function(a){var s
if(!this.Q)return
if(this.ch){t.Z.a(a)
s=a.y.aF(a.d)
if(s.ak(s)<4)return
this.ch=!1}},
hp:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.dU(a)},
iS:function(a){this.ch=this.Q=!0},
iQ:function(a){var s
if(!this.Q)return
if(this.ch){t.Q.a(a)
s=a.y.aF(a.d)
if(s.ak(s)<4)return
this.ch=!1}},
iO:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.dU(a)},
dU:function(a){var s,r,q,p,o,n,m,l,k,j=this,i=j.d
if(i==null)return
t.Z.a(a)
s=j.f
if(s!=null)s.A(new D.X())
s=a.d
r=a.c
q=s.a/r.c
p=s.b/r.d
o=C.d.bi(q*(i.r-1))
n=C.d.bi(p*(i.x-1))
r=j.a.a
s=i.x
m=r.createFramebuffer()
m.toString
r.bindFramebuffer(36160,m)
r.readBuffer(36064)
r.framebufferTexture2D(36160,36064,3553,i.b,0)
l=new Uint8Array(4)
r.readPixels(o,s-1-n,1,1,6408,5121,l)
r.bindFramebuffer(36160,null)
new T.k0(l,1,1).hd()
k=V.es(l[0],l[1],l[2],l[3])
s=j.x
if(s!=null)s.A(new T.cO(new V.aj(q,p),k))}}
T.cO.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.jU.prototype={}
T.jV.prototype={}
T.jW.prototype={
e1:function(){if(!this.d){this.d=!0
var s=this.y
if(s!=null)s.cN()}},
sab:function(a,b){this.a=b},
gp:function(){var s=this.y
return s==null?this.y=D.E():s},
S:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}},
an:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(3553,null)}}}
T.jX.prototype={
sab:function(a,b){this.a=b},
gp:function(){var s=this.e
return s==null?this.e=D.E():s},
S:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
an:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.jY.prototype={
aA:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null)
this.dP()
s=W.mG(a)
r=T.lY(o)
W.Z(s,"load",new T.k_(this,r,s,!1,o,!1,!1),!1)
return r},
ba:function(a,b,c,d,e,f){var s=W.mG(c)
this.dP()
W.Z(s,"load",new T.jZ(this,s,!1,b,!1,d,a),!1)},
e_:function(a,b,c){var s,r,q,p,o,n
b=V.ef(b)
s=a.width
r=V.ef(s==null?512:s)
s=a.height
q=V.ef(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.lC()
p.width=r
p.height=q
o=t.m.a(C.f.f9(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.qA(o.getImageData(0,0,s,n==null?512:n))}},
dP:function(){return this.d++},
dM:function(){return this.e++}}
T.k_.prototype={
$1:function(a){var s,r,q=this,p=q.b,o=q.c,n=o.width
p.e=n==null?512:n
n=o.height
p.f=n==null?512:n
n=q.a
s=n.e_(o,n.b,q.d)
r=o.width
p.r=r==null?512:r
o=o.height
p.x=o==null?512:o
o=n.a
o.bindTexture(3553,q.e)
o.pixelStorei(37440,0)
C.j.f2(o,3553,0,6408,6408,5121,s)
o.bindTexture(3553,null)
p.e1()
n.dM()},
$S:4}
T.jZ.prototype={
$1:function(a){var s=this,r=s.a,q=r.e_(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.j.f2(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.cN()}r.dM()},
$S:4}
T.k0.prototype={
hd:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.c,r=C.c.aa(s,2),q=this.b,p=this.a,o=p.length,n=q*4,--s;r>=0;--r){m=n*r
l=n*(s-r)
for(k=0;k<q;++k){j=4*k
i=m+j
h=l+j
for(g=0;g<4;++g){f=i+g
e=h+g
if(f<0||f>=o)return H.c(p,f)
d=p[f]
if(e<0||e>=o)return H.c(p,e)
p[f]=p[e]
p[e]=d}}}}}
X.il.prototype={
gp:function(){var s=this.fr
return s==null?this.fr=D.E():s},
a2:function(a){var s=this.fr
return s==null?null:s.A(a)},
saG:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.a2(new D.x("width",s,b))}},
saz:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.a2(new D.x("height",s,b))}},
S:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
h.saG(0,C.d.a4(r*h.r))
s=s.drawingBufferHeight
if(s==null)s=512
h.saz(0,C.d.a4(s*h.x))}if(h.y==null){s=a.a
r=h.ch
q=h.a
p=h.b
o=H.i3(s.getParameter(3379))
n=V.ef(q)
m=V.ef(p)
o=V.ef(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(f,l)
s.texParameteri(f,10242,33071)
s.texParameteri(f,10243,33071)
s.texParameteri(f,10241,9729)
s.texParameteri(f,10240,9729)
C.j.f3(s,f,0,6408,n,m,0,6408,5121,g)
s.bindTexture(f,g)
k=T.lY(l)
k.e=q
k.f=p
k.r=n
k.x=m
k.e1()
r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.cN()
q=r.b
h.z=q
h.c=r.r
h.d=r.x
s.bindTexture(f,q)
r=s.createRenderbuffer()
r.toString
h.Q=r
s.bindRenderbuffer(e,r)
s.renderbufferStorage(e,33189,h.c,h.d)
r=s.createFramebuffer()
r.toString
h.y=r
s.bindFramebuffer(d,r)
s.framebufferTexture2D(d,36064,f,h.z,0)
s.framebufferRenderbuffer(d,36096,e,h.Q)
s.bindTexture(f,g)
s.bindRenderbuffer(e,g)
s.bindFramebuffer(d,g)}s=a.a
s.bindFramebuffer(d,h.y)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
j=h.dy
r=j.c
a.c=C.d.a4(r*h.a)
q=j.d
a.d=C.d.a4(q*h.b)
p=h.c
i=C.d.a4(j.a*p)
l=h.d
s.viewport(i,C.d.a4(j.b*l),C.d.a4(r*p),C.d.a4(q*l))
s.clearDepth(h.db)
r=h.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
if(16640>0)s.clear(16640)},
an:function(a){a.a.bindFramebuffer(36160,null)}}
X.iN.prototype={
gp:function(){var s=this.x
return s==null?this.x=D.E():s},
a2:function(a){var s=this.x
return s==null?null:s.A(a)},
S:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.a4(q.a*s)
o=C.d.a4(q.b*r)
n=C.d.a4(q.c*s)
a.c=n
q=C.d.a4(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)},
an:function(a){}}
X.iS.prototype={
gp:function(){var s=this.b
return s==null?this.b=D.E():s},
S:function(a){var s
a.cy.c5(V.aM())
s=V.aM()
a.db.c5(s)},
an:function(a){a.cy.b3()
a.db.b3()}}
X.f9.prototype={
gp:function(){var s=this.f
return s==null?this.f=D.E():s},
a2:function(a){var s=this.f
return s==null?null:s.A(a)},
fU:function(){return this.a2(null)},
S:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.bk(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.c5(i)
s=$.o3()
r=q.b
if(r!=null)s=r.c8(0,a,q).N(0,s)
a.db.c5(s)},
an:function(a){a.cy.b3()
a.db.b3()}}
X.jS.prototype={}
V.lv.prototype={
$1:function(a){var s=C.d.de(this.a.gjg(),2)
if(s!=="0.00")P.i7(s+" fps")},
$S:51}
V.jH.prototype={
e8:function(a,b){var s,r,q,p,o
a=C.c.j2(a,0,4)
s=P.nw(C.r,b,C.i,!1)
r=document.createElement("div")
r.className="textHeader"
r.id=s
q=r.style
q.toString
p=""+(28-a*3)+"px"
q.fontSize=p
o=W.op()
o.href="#"+s
o.textContent=b
r.appendChild(o).toString
this.a.appendChild(r).toString},
bd:function(a){var s,r,q,p,o,n,m=this.iK(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.U(C.a.jn(a)),s=new P.cy(m.f6(new H.bT(s,s.gk(s))).a());s.t();){r=s.gG(s)
switch(r.a){case"Bold":q=l.createElement("div")
q.className="boldPar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Italic":q=l.createElement("div")
q.className="italicPar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Code":q=l.createElement("div")
q.className="codePar"
q.textContent=r.b
k.appendChild(q).toString
break
case"Link":r=r.b
if(H.nZ(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.c(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.nw(C.r,r,C.i,!1)
o=l.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=r
k.appendChild(o).toString}break
case"Other":q=l.createElement("div")
q.className="normalPar"
q.textContent=r.b
k.appendChild(q).toString
break}}this.a.appendChild(k).toString},
iV:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k).toString
r=k.insertRow(-1)
s=r.insertCell(-1)
s.toString
q=t.aL
s=q.a(s).style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=m
s.marginRight=m
for(p=0;p<1;++p){o=l.createElement("div")
o.id=a[p]
s=o.style
s.textAlign="left"
s=o.style
s.verticalAlign="top"
s=r.insertCell(-1)
s.toString
q.a(s)
n=s.style
n.textAlign="center"
n.verticalAlign="top"
n.marginLeft=m
n.marginRight=m
s.appendChild(o).toString}},
iK:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.k5(P.S(s,t.aJ),P.S(s,t.aX),P.mO(s))
h.d=h.O(0,q)
s=h.O(0,q).q(0,p)
r=new K.a2([])
r.a5(new H.U("*"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,p).q(0,p).a.push(new K.bl(s))
r=new K.a2([])
r.a5(new H.U("*"))
s.push(r)
r=h.O(0,p).q(0,"BoldEnd")
s=new K.a2([])
s.a5(new H.U("*"))
r.a.push(s)
r.c=!0
r=h.O(0,q).q(0,o)
s=new K.a2([])
s.a5(new H.U("_"))
r.a.push(s)
r.c=!0
r=[]
h.O(0,o).q(0,o).a.push(new K.bl(r))
s=new K.a2([])
s.a5(new H.U("_"))
r.push(s)
s=h.O(0,o).q(0,n)
r=new K.a2([])
r.a5(new H.U("_"))
s.a.push(r)
s.c=!0
s=h.O(0,q).q(0,m)
r=new K.a2([])
r.a5(new H.U("`"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,m).q(0,m).a.push(new K.bl(s))
r=new K.a2([])
r.a5(new H.U("`"))
s.push(r)
r=h.O(0,m).q(0,"CodeEnd")
s=new K.a2([])
s.a5(new H.U("`"))
r.a.push(s)
r.c=!0
r=h.O(0,q).q(0,l)
s=new K.a2([])
s.a5(new H.U("["))
r.a.push(s)
r.c=!0
r=h.O(0,l).q(0,k)
s=new K.a2([])
s.a5(new H.U("|"))
r.a.push(s)
s=h.O(0,l).q(0,j)
r=new K.a2([])
r.a5(new H.U("]"))
s.a.push(r)
s.c=!0
s=[]
h.O(0,l).q(0,l).a.push(new K.bl(s))
r=new K.a2([])
r.a5(new H.U("|]"))
s.push(r)
r=h.O(0,k).q(0,j)
s=new K.a2([])
s.a5(new H.U("]"))
r.a.push(s)
r.c=!0
r=[]
h.O(0,k).q(0,k).a.push(new K.bl(r))
s=new K.a2([])
s.a5(new H.U("|]"))
r.push(s)
h.O(0,q).q(0,i).a.push(new K.id())
s=[]
h.O(0,i).q(0,i).a.push(new K.bl(s))
r=new K.a2([])
r.a5(new H.U("*_`["))
s.push(r)
r=h.O(0,"BoldEnd")
r.d=r.a.bF(p)
r=h.O(0,n)
r.d=r.a.bF(o)
r=h.O(0,"CodeEnd")
r.d=r.a.bF(m)
r=h.O(0,j)
r.d=r.a.bF("Link")
r=h.O(0,i)
r.d=r.a.bF(i)
return this.b=h}}
V.jJ.prototype={
$1:function(a){P.lZ(C.h,new V.jI(this.a))},
$S:4}
V.jI.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.a4(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.r(-0.01*s)+"px"
q.top=r},
$S:2}
Q.iO.prototype={}
Q.i.prototype={
gaL:function(){var s=this.a
if(s>=1)if(s<=8){s=this.b
s=s>=1&&s<=8}else s=!1
else s=!1
return s},
gab:function(a){return this.gaL()?(this.a-1)*8+(this.b-1):-1},
i:function(a){return""+this.a+" "+this.b},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.i))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.ag.prototype={
i:function(a){var s=this,r=s.d,q=r!=null?", "+r.i(0)+" => "+H.r(s.e):""
return s.a+", "+s.b.i(0)+" => "+s.c.i(0)+q}}
Q.jL.prototype={
em:function(){var s,r,q,p=Q.nb()
for(s=p.a,r=this.a,q=0;q<64;++q)s[q]=r[q]
return p},
B:function(a){var s,r
if(!a.gaL())return $.lB()
s=a.gab(a)
r=this.a
if(s<0||s>=64)return H.c(r,s)
return new Q.t(r[s])},
v:function(a,b){var s,r,q
if(!a.gaL())return!1
s=this.a
r=a.gab(a)
q=b.a
if(r<0||r>=64)return H.c(s,r)
s[r]=q
return!0},
cW:function(a){var s,r=a.a,q=$.lA(),p=new Q.t((r&q.a)>>>0)
for(r=this.a,s=0;s<64;++s)if(new Q.t((r[s]&q.a)>>>0).m(0,p))return Q.mQ(s)
return new Q.i(0,0)},
ea:function(a){var s,r=this,q=a.b,p=r.B(q),o=a.d,n=o!=null,m=n?r.B(o):null,l=$.O()
r.v(q,l)
q=m!=null
if(q&&n)r.v(o,l)
n=$.c9()
l=p.a
n=n.a
r.v(a.c,new Q.t((l|n)>>>0))
s=a.e
if(q&&s!=null)r.v(s,new Q.t((m.a|n)>>>0))},
j5:function(a){if(this.eI(a)){if(!this.ji(a))return 2
return 1}return 0},
eI:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.by(),f=a?$.a4():$.bg(),e=h.cW(new Q.t((g.a|f.a|$.aQ().a&1)>>>0))
if(!e.gaL())return!1
s=a?-1:1
g=e.a
f=g+s
r=e.b
q=r+1
p=!a
o=$.cH()
if(h.M(new Q.i(f,q),p,[o]))return!0
n=r+-1
if(h.M(new Q.i(f,n),p,[o]))return!0
f=g+2
o=$.cG()
if(h.M(new Q.i(f,q),p,[o]))return!0
if(h.M(new Q.i(f,n),p,[o]))return!0
f=g+1
m=r+2
if(h.M(new Q.i(f,m),p,[o]))return!0
l=g+-1
if(h.M(new Q.i(l,m),p,[o]))return!0
m=g+-2
if(h.M(new Q.i(m,q),p,[o]))return!0
if(h.M(new Q.i(m,n),p,[o]))return!0
m=r+-2
if(h.M(new Q.i(f,m),p,[o]))return!0
if(h.M(new Q.i(l,m),p,[o]))return!0
for(o=g>=1,m=g<=8,k=1;k<8;++k){j=r+k
i=new Q.i(g,j)
if(h.M(i,p,[$.aR(),$.aq()]))return!0
if(!(o&&m&&j>=1&&j<=8&&h.B(i).a===$.O().a))break}for(k=1;k<8;++k){j=r+-k
i=new Q.i(g,j)
if(h.M(i,p,[$.aR(),$.aq()]))return!0
if(!(o&&m&&j>=1&&j<=8&&h.B(i).a===$.O().a))break}for(o=r>=1,m=r<=8,k=1;k<8;++k){j=g+k
i=new Q.i(j,r)
if(h.M(i,p,[$.aR(),$.aq()]))return!0
if(!(j>=1&&j<=8&&o&&m&&h.B(i).a===$.O().a))break}for(k=1;k<8;++k){j=g+-k
i=new Q.i(j,r)
if(h.M(i,p,[$.aR(),$.aq()]))return!0
if(!(j>=1&&j<=8&&o&&m&&h.B(i).a===$.O().a))break}for(k=1;k<8;++k){o=g+k
m=r+k
i=new Q.i(o,m)
if(h.M(i,p,[$.bf(),$.aq()]))return!0
if(!(o>=1&&o<=8&&m>=1&&m<=8&&h.B(i).a===$.O().a))break}for(k=1;k<8;++k){o=g+k
m=r+-k
i=new Q.i(o,m)
if(h.M(i,p,[$.bf(),$.aq()]))return!0
if(!(o>=1&&o<=8&&m>=1&&m<=8&&h.B(i).a===$.O().a))break}for(k=1;k<8;++k){o=g+-k
m=r+k
i=new Q.i(o,m)
if(h.M(i,p,[$.bf(),$.aq()]))return!0
if(!(o>=1&&o<=8&&m>=1&&m<=8&&h.B(i).a===$.O().a))break}for(k=1;k<8;++k){o=-k
m=g+o
o=r+o
i=new Q.i(m,o)
if(h.M(i,p,[$.bf(),$.aq()]))return!0
if(!(m>=1&&m<=8&&o>=1&&o<=8&&h.B(i).a===$.O().a))break}o=$.by()
if(h.M(new Q.i(f,q),p,[o]))return!0
if(h.M(new Q.i(f,r),p,[o]))return!0
if(h.M(new Q.i(f,n),p,[o]))return!0
if(h.M(new Q.i(g,n),p,[o]))return!0
if(h.M(new Q.i(l,n),p,[o]))return!0
if(h.M(new Q.i(l,r),p,[o]))return!0
if(h.M(new Q.i(l,q),p,[o]))return!0
if(h.M(new Q.i(g,q),p,[o]))return!0
return!1},
M:function(a,b,c){var s,r,q,p,o
if(a.gaL()){s=this.B(a)
r=$.a4()
q=s.a
r=r.a
if((q&r)>>>0===r===b){r=$.ca()
p=new Q.t((q&r.a)>>>0)
for(o=c.length-1;o>=0;--o){if(o>=c.length)return H.c(c,o)
if(p.m(0,new Q.t((c[o].a&r.a)>>>0)))return!0}}}return!1},
ji:function(a){var s,r,q,p
for(s=this.a,r=0;r<64;++r){q=s[r]
if(q!==$.O().a){p=$.a4().a
p=(q&p)>>>0===p===a
q=p}else q=!1
if(q)if(this.jj(Q.mQ(r)))return!0}return!1},
jj:function(a){var s={}
s.a=!1
this.cX(new Q.jN(s),a)
return s.a},
jm:function(a){var s={}
s.a=!1
this.cX(new Q.jO(s,a),a.b)
return s.a},
cX:function(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2="Pawn en passent "
if(!a4.gaL())return
s=a0.B(a4)
r=new Q.jM(a0,s,a3)
q=new Q.t((s.a&$.ca().a)>>>0)
if(q.m(0,$.cH())){s=a0.B(a4)
p=$.a4()
o=s.a
p=p.a
n=(o&p)>>>0===p
m=$.c9().a
l=n?-1:1
k=a4.a
j=k+l
i=a4.b
h=new Q.i(j,i)
g=a0.B(h).a
f=$.O().a
if(g===f){r.$1(new Q.ag("Pawn move to "+h.i(0),a4,h,a1,a1))
if((o&m)>>>0!==m){h=new Q.i(k+(l+l),i)
if(a0.B(h).a===f)r.$1(new Q.ag("Pawn move to "+h.i(0),a4,h,a1,a1))}}o=i+-1
h=new Q.i(j,o)
e=a0.B(h)
g=e.a
d=$.lB().a
if(g!==d&&g!==f&&(g&p)>>>0===p!==n)r.$1(new Q.ag("Pawn take "+e.gb2()+" at "+h.i(0),a4,h,h,a1));++i
h=new Q.i(j,i)
e=a0.B(h)
g=e.a
if(g!==d&&g!==f&&(g&p)>>>0===p!==n)r.$1(new Q.ag("Pawn take "+e.gb2()+" at "+h.i(0),a4,h,h,a1))
c=a0.c
if(c!=null)g=k===(n?4:5)
else g=!1
if(g){h=new Q.i(j,o)
if(h.gaL()&&a0.B(h).a===f){b=new Q.i(k,o)
e=a0.B(b)
g=e.a
if(g!==f&&(g&p)>>>0===p!==n){a=c.B(new Q.i(k+(l+l),o))
if((a.a&m)>>>0!==m&&a.dk(e))r.$1(new Q.ag(a2+e.gb2()+" at "+h.i(0),a4,h,b,a1))}}h=new Q.i(j,i)
if(h.gaL()&&a0.B(h).a===f){b=new Q.i(k,i)
e=a0.B(b)
o=e.a
if(o!==f&&(o&p)>>>0===p!==n){a=c.B(new Q.i(k+(l+l),i))
if((a.a&m)>>>0!==m&&a.dk(e))r.$1(new Q.ag(a2+e.gb2()+" at "+h.i(0),a4,h,b,a1))}}}}else if(q.m(0,$.aR()))a0.iH(r,a4)
else if(q.m(0,$.cG())){a0.a3(r,a4,2,1)
a0.a3(r,a4,2,-1)
a0.a3(r,a4,1,2)
a0.a3(r,a4,-1,2)
a0.a3(r,a4,-2,1)
a0.a3(r,a4,-2,-1)
a0.a3(r,a4,1,-2)
a0.a3(r,a4,-1,-2)}else if(q.m(0,$.bf())){a0.a8(r,a4,1,1)
a0.a8(r,a4,1,-1)
a0.a8(r,a4,-1,-1)
a0.a8(r,a4,-1,1)}else if(q.m(0,$.aq())){a0.a8(r,a4,1,1)
a0.a8(r,a4,1,0)
a0.a8(r,a4,1,-1)
a0.a8(r,a4,0,-1)
a0.a8(r,a4,-1,-1)
a0.a8(r,a4,-1,0)
a0.a8(r,a4,-1,1)
a0.a8(r,a4,0,1)}else if(q.m(0,$.by()))a0.he(r,a4)},
a3:function(a,b,c,d){var s,r,q,p,o,n=new Q.i(b.a+c,b.b+d)
if(!n.gaL())return!0
s=this.B(b)
r=this.B(n)
q=r.a
if(q===$.O().a){a.$1(new Q.ag(s.gb2()+" move to "+n.i(0),b,n,null,null))
return!1}p=$.a4()
o=s.a
p=p.a
if((q&p)>>>0===p!==((o&p)>>>0===p))a.$1(new Q.ag(s.gb2()+" take "+r.gb2()+" at "+n.i(0),b,n,n,null))
return!0},
a8:function(a,b,c,d){var s
for(s=1;s<8;++s)if(this.a3(a,b,c*s,d*s))return},
iH:function(a,b){var s,r,q,p,o,n=this,m=n.B(b),l=$.a4(),k=m.a
l=l.a
s=$.c9().a
n.a8(a,b,0,1)
n.a8(a,b,0,-1)
n.a8(a,b,1,0)
n.a8(a,b,-1,0)
if((k&s)>>>0!==s){r=new Q.i((k&l)>>>0===l?8:1,4)
l=n.B(r).a
if(new Q.t((l&$.ca().a)>>>0).m(0,$.by())&&(l&s)>>>0!==s){l=b.b
q=l>4?-1:1
o=l+q
l=b.a
while(!0){if(!(o!==4)){p=!0
break}if(n.B(new Q.i(l,o)).a!==$.O().a){p=!1
break}o+=q}if(p){l=r.a
k=4-q-q
a.$1(new Q.ag("Rook castles with King",b,new Q.i(l,k+q),r,new Q.i(l,k)))}}}},
he:function(a,b){var s,r,q,p,o,n,m,l,k=this,j=k.B(b),i=$.c9(),h=j.a
i=i.a
k.a3(a,b,1,1)
k.a3(a,b,1,0)
k.a3(a,b,1,-1)
k.a3(a,b,0,-1)
k.a3(a,b,-1,-1)
k.a3(a,b,-1,0)
k.a3(a,b,-1,1)
k.a3(a,b,0,1)
if((h&i)>>>0!==i)for(i=b.a,h=b.b,s=1;s<=8;s+=7){r=new Q.i(i,s)
q=k.B(r).a
if(new Q.t((q&$.ca().a)>>>0).m(0,$.aR())){p=$.c9().a
p=(q&p)>>>0!==p
q=p}else q=!1
if(q){o=h>s?-1:1
m=h+o
l=m
while(!0){if(!(l!==s)){n=!0
break}if(k.B(new Q.i(i,l)).a!==$.O().a){n=!1
break}l+=o}if(n){q=m+o
a.$1(new Q.ag("King castles with Rook",b,new Q.i(i,q),r,new Q.i(i,q-o)))}}}},
i:function(a){var s,r,q,p,o,n,m,l,k=this.a,j=0
while(!0){if(!(j<64)){s=!1
break}r=k[j]
q=$.c9().a
if((r&q)>>>0===q){s=!0
break}++j}p=new Q.jQ(P.cl(64,"",!1))
p.d=!0
for(o=0;o<8;o=n)for(n=o+1,r=(n-1)*8,m=0;m<8;m=l){l=m+1
j=r+(l-1)
if(j<0||j>=64)return H.c(k,j)
p.fb(o,m,new Q.t(k[j]).f5(0,!1,s))}return p.i(0)}}
Q.jN.prototype={
$1:function(a){this.a.a=!0},
$S:14}
Q.jO.prototype={
$1:function(a){var s,r=this.a
if(r.a)return
s=this.b
if(a.b.m(0,s.b)&&a.c.m(0,s.c)&&J.P(a.d,s.d)&&J.P(a.e,s.e))r.a=!0},
$S:14}
Q.jM.prototype={
$1:function(a){var s,r=this.a.em()
r.ea(a)
s=$.a4().a
if(!r.eI((this.b.a&s)>>>0===s))this.c.$1(a)},
$S:14}
Q.jQ.prototype={
dQ:function(a,b){var s=a*8+b
if(s>=64)return-1
return s},
fb:function(a,b,c){var s,r=this.dQ(a,b)
if(r<0)return
s=this.c
if(r>=s.length)return H.c(s,r)
s[r]=c},
hj:function(){var s,r,q,p=this.c,o=p.length
if(o<=0)return 0
s=p[0].length
for(r=1;r<o;++r){q=p[r].length
if(q>s)s=q}return s},
i:function(a){var s,r,q,p,o,n,m,l=this,k=[],j=l.hj()
if(l.d){s=C.b.c3("",2+C.c.aa(j-1,2))
for(r=j+1,q=0;q<8;){++q
s+=C.b.c3(" "+q,r)}k.push(C.b.kb(s))
p=2}else p=0
for(r=l.c,o=r.length,n=0;n<8;++n){s=l.d?C.b.c3(""+(n+1),p):""
for(q=0;q<8;++q){if(l.d||q!==0)s+="|"
m=l.dQ(n,q)
if(m<0||m>=o)return H.c(r,m)
s+=C.b.c3(r[m],j)}k.push(l.d?s+"|":s)}return C.a.q(k,"\n")}}
Q.t.prototype={
dj:function(a,b){return new Q.t((this.a|b.a)>>>0)},
dk:function(a){var s=$.lA().a
return(this.a&s)>>>0===(a.a&s)>>>0},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Q.t))return!1
return this.a===b.a},
gj3:function(){var s=new Q.t((this.a&$.mn().a)>>>0)
if(s.m(0,$.bg()))return"B"
if(s.m(0,$.a4()))return"W"
return" "},
gjI:function(){var s=new Q.t((this.a&$.ca().a)>>>0)
if(s.m(0,$.cH()))return"P"
if(s.m(0,$.aR()))return"R"
if(s.m(0,$.cG()))return"H"
if(s.m(0,$.bf()))return"B"
if(s.m(0,$.aq()))return"Q"
if(s.m(0,$.by()))return"K"
return" "},
gjr:function(){var s=(this.a&$.aQ().a)>>>0
if(s===$.O().a)return" "
return""+s},
gb2:function(){var s=new Q.t((this.a&$.ca().a)>>>0)
if(s.m(0,$.cH()))return"Pawn"
if(s.m(0,$.aR()))return"Rook"
if(s.m(0,$.cG()))return"Knight"
if(s.m(0,$.bf()))return"Bishop"
if(s.m(0,$.aq()))return"Queen"
if(s.m(0,$.by()))return"King"
return"Empty"},
f5:function(a,b,c){var s,r,q=this,p=q.a
if(p===$.O().a)return""
if(c){s=$.c9().a
r=(p&s)>>>0===s?"+":" "}else r=""
r=r+q.gj3()+q.gjI()
return b?r+q.gjr():r},
i:function(a){return this.f5(a,!0,!0)}}
S.eq.prototype={
fp:function(a,b,c,d,e,f,g){var s,r,q,p,o=null,n=$.mw
g.a=n
s=$.mx
g.b=s
if(n==null||s==null){$.mw=g.a=E.Q(o,!0,o,"color bishop shape",o,o)
$.mx=g.b=E.Q(o,!0,o,"pick bishop shape",o,o)
O.aC("./resources/bishop.obj",a.f).aE(new S.ip(g),t.P)}r=this.go
q=r?"white":"black"
p=q+(" bishop "+d)
q=$.bf()
r=r?$.a4():$.bg()
this.b9(p,new Q.t((q.a|r.a|d&$.aQ().a)>>>0),g.a,g.b)}}
S.ip.prototype={
$1:function(a){var s=this.a,r=s.a
if(r!=null)r.sa0(0,a.c)
s=s.b
if(s!=null)s.sa0(0,a.c)},
$S:3}
S.cJ.prototype={
fq:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.a="board"
for(s=h.id,r=h.y,q=r.a,p=1;p<=8;++p)for(o=1;o<=8;++o){n=S.pc(a,h,C.c.c9(p+o,2)===0,new Q.i(p,o))
s.push(n)
if(r.bz([n])){m=q.length
q.push(n)
l=r.c
if(l!=null)l.$2(m,[n])}}for(s=h.go,p=1;p<=8;++p){l=S.mV(a,h,!0,p,0,0.7)
s.push(l)
if(r.bz([l])){m=q.length
q.push(l)
k=r.c
if(k!=null)k.$2(m,[l])}l=S.mV(a,h,!1,p,0,0.7)
s.push(l)
if(r.bz([l])){m=q.length
q.push(l)
k=r.c
if(k!=null)k.$2(m,[l])}}h.a7(0,S.jC(a,h,!0,1,0,0.7))
h.a7(0,S.jC(a,h,!0,2,0,0.7))
h.a7(0,S.jC(a,h,!1,1,0,0.7))
h.a7(0,S.jC(a,h,!1,2,0,0.7))
h.a7(0,S.iZ(a,h,!0,1,0,0.7))
h.a7(0,S.iZ(a,h,!0,2,3.141592653589793,0.7))
h.a7(0,S.iZ(a,h,!1,1,0,0.7))
h.a7(0,S.iZ(a,h,!1,2,3.141592653589793,0.7))
h.a7(0,S.io(a,h,!0,1,-1.5707963267948966,0.8))
h.a7(0,S.io(a,h,!0,2,1.5707963267948966,0.8))
h.a7(0,S.io(a,h,!1,1,-1.5707963267948966,0.8))
h.a7(0,S.io(a,h,!1,2,1.5707963267948966,0.8))
h.a7(0,S.n_(a,h,!0,1,0,1))
h.a7(0,S.n_(a,h,!1,1,0,1))
h.a7(0,S.mJ(a,h,!0,1.5707963267948966,0.9))
h.a7(0,S.mJ(a,h,!1,1.5707963267948966,0.9))
j=h.k3=E.Q(g,!0,g,"",g,g)
r.j(0,j)
s=j.y
s.j(0,S.iC(a,h,0,0,0,0))
s.j(0,S.iC(a,h,8,0,1.5707963267948966,1))
s.j(0,S.iC(a,h,8,8,3.141592653589793,2))
s.j(0,S.iC(a,h,0,8,4.71238898038469,3))
s=F.qC(30)
q=h.k4.gk6()
i=E.Q(g,!0,U.as(V.eT(0,-0.5,0).N(0,V.mS(-1.5707963267948966)).N(0,V.lQ(12,12,12,1))),"",s,q)
h.k2=i
r.j(0,i)
r=h.fy
q=r.d
s=q==null?r.d=D.E():q
s.j(0,h.ghN())
h.dm(r.c)},
a7:function(a,b){this.go.push(b)
this.y.j(0,b)},
jG:function(a){var s,r,q,p,o,n,m=this
for(s=m.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=p.ry
if(J.P(o==null?null:o.b,a)){m.dV(p.k2)
return}}for(s=m.id,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){n=s[q]
o=n.k4
if(J.P(o==null?null:o.b,a)){m.dV(n.fy)
return}}},
dV:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
for(s=h.k1,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.c.m(0,a)||J.P(p.d,a)){s=h.fy
o=s.c.B(p.b)
r=$.a4()
n=o.a
r=r.a
if((n&r)>>>0===r!==s.a)H.f(P.e("may not make a move movement out-of-turn"))
if(!s.c.jm(p))H.f(P.e("not a valid move: "+p.i(0)))
r=s.c
m=r.em()
m.c=r
s.c=m
m.ea(p)
r=!s.a
s.a=r
s.c.j5(r)
s=s.d
if(s!=null)s.A(null)
C.a.sk(h.k1,0)
return}}s=h.fy
r=s.c.B(a)
n=r.a
if(n!==$.O().a){l=$.a4().a
l=(n&l)>>>0===l!==s.a}else l=!0
if(l)return
o=h.eG(r)
k=o!=null&&o.r1
h.eh()
h.ei()
if(!k){o=h.eG(r)
if(o!=null){o.sca(0,!0)
j=h.f4(o.k2)
if(j!=null)j.sca(0,!0)}if(n===$.lB().a)H.f(P.e("may not get movements for an out-of-bounds piece"))
l=$.a4().a
if((n&l)>>>0===l!==s.a)H.f(P.e("may not get movements out-of-turn"))
s=s.c
r=s.cW(r)
i=[]
s.cX(C.a.giU(i),r)
h.k1=i
h.fd(i)}},
hO:function(a){var s=this
s.eh()
s.ei()
s.dm(s.fy.c)},
eG:function(a){var s,r,q,p,o=$.lA(),n=new Q.t((a.a&o.a)>>>0)
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(new Q.t((p.k4.a&o.a)>>>0).m(0,n))return p}return null},
jH:function(a){var s,r,q,p
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.k2.m(0,a))return p}return null},
f4:function(a){var s,r,q,p
for(s=this.id,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.fy.m(0,a))return p}return null},
eh:function(){var s,r,q,p,o
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.r2){p.r1=p.r2=!1
p.av()}}for(s=this.id,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){o=s[q]
if(o.k2){o.k1=o.k2=!1
o.av()}}},
ei:function(){var s,r,q,p,o
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.r1){p.r2=p.r1=!1
p.av()}}for(s=this.id,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){o=s[q]
if(o.k1){o.k2=o.k1=!1
o.av()}}},
sdq:function(a){var s,r,q,p,o,n,m,l=this
if(a!==l.r1){l.r1=a
s=l.k2
if(s!=null)s.b=!a
s=l.k3
if(s!=null)s.b=!a
for(s=l.go,r=s.length,q=!a,p=0;p<r;++p){o=s[p]
if(a!==o.rx){o.rx=a
n=o.x1
if(n!=null)n.b=q
n=o.x2
if(n!=null)n.b=a}}for(s=l.id,r=s.length,p=0;p<r;++p){m=s[p]
if(a!==m.k3){m.k3=a
n=m.r1
if(n!=null)n.b=q
n=m.r2
if(n!=null)n.b=a}}}},
dm:function(a){var s,r,q,p,o,n
for(s=this.go,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
o=a.cW(p.k4)
if(!p.k2.m(0,o)){p.k2=o
p.e6()}n=o.a
if(n>=1)if(n<=8){n=o.b
n=n>=1&&n<=8}else n=!1
else n=!1
p.b=n}},
fd:function(a){var s,r,q,p,o,n
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
p=this.f4(q.c)
if(p!=null)if(!p.k2){p.k2=!0
p.k1=!1
p.av()}o=q.d
if(o!=null){n=this.jH(o)
if(n!=null)if(!n.r2){n.r2=!0
n.r1=!1
n.av()}}}}}
S.eA.prototype={
fs:function(a,b,c,d,e,f){var s,r=this,q=null,p=$.lE
if(p==null){p=$.lE=E.Q(q,!0,q,"edge shape",q,q)
O.aC("./resources/edge.obj",a.f).aE(new S.iD(),t.P)}r.sc2(U.as(V.eT(c-4,0,d-4).N(0,V.lP(e))))
r.a="edge"
r.y.j(0,p)
s=b.k4.gjb()
if(f>=4)return H.c(s,f)
r.sa_(s[f])}}
S.iD.prototype={
$1:function(a){var s=$.lE
if(s!=null)s.sa0(0,a.c)},
$S:3}
S.lw.prototype={
$1:function(a){var s,r=this.a
r.sdq(!0)
s=this.b
s.ae(this.c)
r.sdq(!1)
s.d9()},
$S:0}
S.lx.prototype={
$1:function(a){this.a.jG(t.l.a(a).d.f7())},
$S:0}
S.ly.prototype={
$1:function(a){E.oC(this.a.b,["webkitRequestFullscreen","mozRequestFullScreen","msRequestFullscreen","oRequestFullscreen","requestFullscreen"])
return!0},
$S:5}
S.eN.prototype={
ft:function(a,b,c,d,e,f){var s,r,q,p,o=null,n=$.mK
f.a=n
s=$.mL
f.b=s
if(n==null||s==null){$.mK=f.a=E.Q(o,!0,o,"color king shape",o,o)
$.mL=f.b=E.Q(o,!0,o,"pick king shape",o,o)
O.aC("./resources/king.obj",a.f).aE(new S.iY(f),t.P)}r=this.go
q=(r?"white":"black")+" king"
p=$.by()
r=r?$.a4():$.bg()
this.b9(q,new Q.t((p.a|r.a|$.aQ().a&1)>>>0),f.a,f.b)}}
S.iY.prototype={
$1:function(a){var s=this.a,r=s.a
if(r!=null)r.sa0(0,a.c)
s=s.b
if(s!=null)s.sa0(0,a.c)},
$S:3}
S.eO.prototype={
fu:function(a,b,c,d,e,f,g){var s,r,q,p,o=null,n=$.mM
g.a=n
s=$.mN
g.b=s
if(n==null||s==null){$.mM=g.a=E.Q(o,!0,o,"color knight shape",o,o)
$.mN=g.b=E.Q(o,!0,o,"pick knight shape",o,o)
O.aC("./resources/knight.obj",a.f).aE(new S.j_(g),t.P)}r=this.go
q=r?"white":"black"
p=q+(" knight "+d)
q=$.cG()
r=r?$.a4():$.bg()
this.b9(p,new Q.t((q.a|r.a|d&$.aQ().a)>>>0),g.a,g.b)}}
S.j_.prototype={
$1:function(a){var s=this.a,r=s.a
if(r!=null)r.sa0(0,a.c)
s=s.b
if(s!=null)s.sa0(0,a.c)},
$S:3}
S.jk.prototype={
eQ:function(a){var s=V.oz(a/96,1,1)
s=new V.ar(s.a,s.b,s.c,1).f7()
return new O.jK(s)},
gI:function(){var s,r,q,p=34067,o=this.b
if(o==null){o=this.a.f
s=o.a
r=s.createTexture()
r.toString
s.bindTexture(p,r)
s.texParameteri(p,10242,10497)
s.texParameteri(p,10243,10497)
s.texParameteri(p,10241,9729)
s.texParameteri(p,10240,9729)
s.bindTexture(p,null)
q=new T.jX(r)
o.ba(q,r,"resources/posx.png",34069,!1,!1)
o.ba(q,r,"resources/negx.png",34070,!1,!1)
o.ba(q,r,"resources/posy.png",34071,!1,!1)
o.ba(q,r,"resources/negy.png",34072,!1,!1)
o.ba(q,r,"resources/posz.png",34073,!1,!1)
o.ba(q,r,"resources/negz.png",34074,!1,!1)
this.b=q
o=q}return o},
gah:function(){var s=this.c
if(s==null){s=D.mC()
s.sn(0,new V.o(1,0.9,0.8))
s.a=U.as(V.lO(V.lR(),V.kq(),new V.D(0,-1,-0.25)))
this.c=s}return s},
gaf:function(){var s=this.d
if(s==null){s=D.mC()
s.sn(0,new V.o(0,0.1,0.3))
s.a=U.as(V.lO(V.lR(),V.kq(),new V.D(0,1,0.25)))
this.d=s}return s},
gbl:function(){var s=this.e
if(s==null)s=this.e=new V.o(0.15,0.15,0.15)
return s},
gbo:function(){var s=this.f
if(s==null)s=this.f=new V.o(0.075,0.075,0.075)
return s},
gjb:function(){var s=P.mP(4,new S.jl(this))
return s},
gk6:function(){var s=this.fy
return s==null?this.fy=new S.jm(this).$0():s}}
S.jl.prototype={
$1:function(a){var s,r=this.a,q=r.a.f,p=q.aA("resources/edge"+a+".png"),o=q.aA("resources/edge"+a+"Normal.png")
q=O.ab()
q.gbX().sal(o)
s=q.gX()
s.sn(0,new V.o(0.6,0.6,0.6))
q.gX().sal(p)
s=q.gW()
s.sn(0,new V.o(0.4,0.4,0.4))
q.gW().sal(p)
q.gC().sn(0,new V.o(1,1,1))
q.gC().sac(80)
q.sI(r.gI())
s=q.gad()
s.sn(0,new V.o(0.1,0.1,0.1))
q.gJ().j(0,r.gah())
q.gJ().j(0,r.gaf())
return q},
$S:54}
S.jm.prototype={
$0:function(){var s=this.a,r=s.a.f,q=r.aA("resources/tableColor.png"),p=r.aA("resources/tableSpec.png"),o=O.ab(),n=o.gX()
n.sn(0,new V.o(0.6,0.6,0.6))
o.gX().sal(q)
n=o.gW()
n.sn(0,new V.o(0.4,0.4,0.4))
o.gW().sal(q)
o.gC().sn(0,new V.o(1,1,1))
o.gC().sac(80)
o.gC().sal(p)
o.sI(s.gI())
o.gad().sal(p)
o.gbX().sal(r.aA("resources/tableNormal.png"))
o.gJ().j(0,s.gah())
o.gJ().j(0,s.gaf())
return o},
$S:55}
S.f8.prototype={
fz:function(a,b,c,d,e,f,g){var s,r,q,p,o=null,n=$.mW
g.a=n
s=$.mX
g.b=s
if(n==null||s==null){$.mW=g.a=E.Q(o,!0,o,"color pawn shape",o,o)
$.mX=g.b=E.Q(o,!0,o,"pick pawn shape",o,o)
O.aC("./resources/pawn.obj",a.f).aE(new S.jt(g),t.P)}r=this.go
q=r?"white":"black"
p=q+(" pawn "+d)
q=$.cH()
r=r?$.a4():$.bg()
this.b9(p,new Q.t((q.a|r.a|d&$.aQ().a)>>>0),g.a,g.b)}}
S.jt.prototype={
$1:function(a){var s=this.a,r=s.a
if(r!=null)r.sa0(0,a.c)
s=s.b
if(s!=null)s.sa0(0,a.c)},
$S:3}
S.fa.prototype={
b9:function(a,b,c,d){var s,r,q=this,p=null,o=q.fy
q.ry=o.k4.eQ(o.y.a.length)
q.k4=b
s=E.Q([c],!0,p,"color "+a,p,p)
q.x1=s
r=E.Q([d],!1,p,"pick "+a,p,q.ry)
q.x2=r
q.sc2(q.k3)
q.a=a
o=q.y
o.j(0,s)
o.j(0,r)
q.e6()
q.av()},
sca:function(a,b){var s=this
if(b!==s.r1){s.r1=b
s.r2=!1
s.av()}},
e6:function(){var s=this,r=s.k2,q=s.k1
q=V.eT(r.a-4.5,0,r.b-4.5).N(0,V.lP(s.id)).N(0,V.lQ(q,q,q,1))
s.k3.sZ(0,q)
return q},
av:function(){var s,r,q,p=this
if(p.go)if(p.r1){s=p.fy.k4
r=s.y
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.6,0,0))
q=r.gW()
q.sn(0,new V.o(0.8,0,0))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(100)
r.sI(s.gI())
r.gad().sn(0,s.gbl())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.y=r
s=r}else s=r
p.sa_(s)}else{s=p.fy.k4
if(p.r2){r=s.Q
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.5,0.5,0))
q=r.gW()
q.sn(0,new V.o(0.7,0.7,0))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(100)
r.sI(s.gI())
r.gad().sn(0,s.gbl())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.Q=r
s=r}else s=r
p.sa_(s)}else{r=s.r
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.6,0.6,0.6))
q=r.gW()
q.sn(0,new V.o(0.4,0.4,0.4))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(60)
r.sI(s.gI())
r.gad().sn(0,s.gbl())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.r=r
s=r}else s=r
p.sa_(s)}}else if(p.r1){s=p.fy.k4
r=s.z
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.2,0,0))
q=r.gW()
q.sn(0,new V.o(0.6,0,0))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(100)
r.sI(s.gI())
r.gad().sn(0,s.gbl())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.z=r
s=r}else s=r
p.sa_(s)}else{s=p.fy.k4
if(p.r2){r=s.ch
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.1,0.1,0))
q=r.gW()
q.sn(0,new V.o(0.5,0.5,0))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(100)
r.sI(s.gI())
r.gad().sn(0,s.gbl())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.ch=r
s=r}else s=r
p.sa_(s)}else{r=s.x
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.2,0.2,0.2))
q=r.gW()
q.sn(0,new V.o(0.1,0.1,0.1))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(60)
r.sI(s.gI())
r.gad().sn(0,s.gbl())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.x=r
s=r}else s=r
p.sa_(s)}}}}
S.ff.prototype={
fA:function(a,b,c,d,e,f,g){var s,r,q,p,o=null,n=$.n0
g.a=n
s=$.n1
g.b=s
if(n==null||s==null){$.n0=g.a=E.Q(o,!0,o,"color queen shape",o,o)
$.n1=g.b=E.Q(o,!0,o,"pick queen shape",o,o)
O.aC("./resources/queen.obj",a.f).aE(new S.jx(g),t.P)}r=this.go
q=r?"white":"black"
p=q+(" queen "+d)
q=$.aq()
r=r?$.a4():$.bg()
this.b9(p,new Q.t((q.a|r.a|d&$.aQ().a)>>>0),g.a,g.b)}}
S.jx.prototype={
$1:function(a){var s=this.a,r=s.a
if(r!=null)r.sa0(0,a.c)
s=s.b
if(s!=null)s.sa0(0,a.c)},
$S:3}
S.fi.prototype={
fC:function(a,b,c,d,e,f,g){var s,r,q,p,o=null,n="rook shape",m=$.n6
g.a=m
s=$.n7
g.b=s
if(m==null||s==null){$.n6=g.a=E.Q(o,!0,o,n,o,o)
$.n7=g.b=E.Q(o,!0,o,n,o,o)
O.aC("./resources/rook.obj",a.f).aE(new S.jD(g),t.P)}r=this.go
q=r?"white":"black"
p=q+(" rook "+d)
q=$.aR()
r=r?$.a4():$.bg()
this.b9(p,new Q.t((q.a|r.a|d&$.aQ().a)>>>0),g.a,g.b)}}
S.jD.prototype={
$1:function(a){var s=this.a,r=s.a
if(r!=null)r.sa0(0,a.c)
s=s.b
if(s!=null)s.sa0(0,a.c)},
$S:3}
S.fD.prototype={
fD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l=this,k=null,j=$.ne
e.a=j
s=$.nf
e.b=s
if(j==null||s==null){$.ne=e.a=E.Q(k,!0,k,"color tile shape",k,k)
$.nf=e.b=E.Q(k,!0,k,"pick tile shape",k,k)
O.aC("./resources/tile.obj",a.f).aE(new S.k2(e),t.P)}r=l.id?"white":"black"
q=l.fy
p=q.a
q=q.b
o=r+(" tile "+p+" "+q)
r=l.go
l.k4=r.k4.eQ(r.y.a.length)
n=E.Q([e.a],!0,k,"color "+o,k,k)
l.r1=n
m=E.Q([e.b],!1,k,"pick "+o,k,l.k4)
l.r2=m
l.sc2(U.as(V.eT(p-4.5,0,q-4.5)))
l.a=o
q=l.y
q.j(0,n)
q.j(0,m)
l.av()},
sca:function(a,b){var s=this
if(b!==s.k1){s.k1=b
s.k2=!1
s.av()}},
av:function(){var s,r,q,p=this
if(p.id)if(p.k1){s=p.go.k4
r=s.db
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.6,0,0))
q=r.gW()
q.sn(0,new V.o(0.8,0,0))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(100)
r.sI(s.gI())
r.gad().sn(0,s.gbo())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.db=r
s=r}else s=r
p.sa_(s)}else{s=p.go.k4
if(p.k2){r=s.dy
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.5,0.5,0))
q=r.gW()
q.sn(0,new V.o(0.7,0.7,0))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(100)
r.sI(s.gI())
r.gad().sn(0,s.gbo())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.dy=r
s=r}else s=r
p.sa_(s)}else{r=s.cx
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.6,0.6,0.6))
q=r.gW()
q.sn(0,new V.o(0.4,0.4,0.4))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(60)
r.sI(s.gI())
r.gad().sn(0,s.gbo())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.cx=r
s=r}else s=r
p.sa_(s)}}else if(p.k1){s=p.go.k4
r=s.dx
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.2,0,0))
q=r.gW()
q.sn(0,new V.o(0.6,0,0))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(100)
r.sI(s.gI())
r.gad().sn(0,s.gbo())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.dx=r
s=r}else s=r
p.sa_(s)}else{s=p.go.k4
if(p.k2){r=s.fr
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.1,0.1,0))
q=r.gW()
q.sn(0,new V.o(0.5,0.5,0))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(100)
r.sI(s.gI())
r.gad().sn(0,s.gbo())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.fr=r
s=r}else s=r
p.sa_(s)}else{r=s.cy
if(r==null){r=O.ab()
q=r.gX()
q.sn(0,new V.o(0.2,0.2,0.2))
q=r.gW()
q.sn(0,new V.o(0.1,0.1,0.1))
r.gC().sn(0,new V.o(1,1,1))
r.gC().sac(60)
r.sI(s.gI())
r.gad().sn(0,s.gbo())
r.gJ().j(0,s.gah())
r.gJ().j(0,s.gaf())
s.cy=r
s=r}else s=r
p.sa_(s)}}}}
S.k2.prototype={
$1:function(a){var s=this.a,r=s.a
if(r!=null)r.sa0(0,a.c)
s=s.b
if(s!=null)s.sa0(0,a.c)},
$S:3}
L.lt.prototype={
$0:function(){return S.qV(this.a)},
$S:2};(function aliases(){var s=J.a.prototype
s.fi=s.i
s=J.bP.prototype
s.fj=s.i
s=P.A.prototype
s.fm=s.i
s=P.aZ.prototype
s.fk=s.h
s.fl=s.l
s=P.cx.prototype
s.fn=s.l
s=K.eF.prototype
s.fh=s.bj
s.cb=s.i
s=O.di.prototype
s.dt=s.b_
s=O.dj.prototype
s.du=s.b_})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1i,q=hunkHelpers._static_1,p=hunkHelpers._static_0,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"pS","oJ",56)
r(J.aA.prototype,"giU","j",34)
q(P,"qv","pi",10)
q(P,"qw","pj",10)
q(P,"qx","pk",10)
p(P,"nN","qq",2)
o(P.dJ.prototype,"gj4",0,1,null,["$2","$1"],["bZ","ek"],46,0)
q(W,"tm","iE",58)
q(P,"qO","l3",44)
q(P,"qN","mb",40)
var j
o(j=E.W.prototype,"geW",0,0,function(){return[null]},["$1","$0"],["eX","jy"],1,0)
o(j,"geY",0,0,function(){return[null]},["$1","$0"],["eZ","jz"],1,0)
o(j,"geU",0,0,function(){return[null]},["$1","$0"],["eV","jx"],1,0)
o(j,"geS",0,0,function(){return[null]},["$1","$0"],["eT","ju"],1,0)
n(j,"gjs","jt",7)
n(j,"gjv","jw",7)
o(j=E.fC.prototype,"gdw",0,0,function(){return[null]},["$1","$0"],["dA","dz"],1,0)
m(j,"gjU","d9",2)
l(j=X.fY.prototype,"ghL","hM",4)
l(j,"ghz","hA",4)
l(j,"ghF","hG",5)
l(j,"ghR","hS",20)
l(j,"ghP","hQ",20)
l(j,"ghV","hW",5)
l(j,"ghZ","i_",5)
l(j,"ghJ","hK",5)
l(j,"ghX","hY",5)
l(j,"ghH","hI",5)
l(j,"gi0","i1",35)
l(j,"gi2","i3",4)
l(j,"gik","il",13)
l(j,"gig","ih",13)
l(j,"gii","ij",13)
o(j=D.da.prototype,"gdS",0,0,function(){return[null]},["$1","$0"],["dT","hT"],1,0)
l(j,"gi4","i5",37)
n(j,"ght","hu",22)
n(j,"gi8","i9",22)
k(V.aj.prototype,"gk","d0",23)
k(V.D.prototype,"gk","d0",23)
o(j=U.ch.prototype,"gbO",0,0,function(){return[null]},["$1","$0"],["a9","aS"],1,0)
n(j,"ghr","hs",15)
n(j,"gi6","i7",15)
o(j=U.dE.prototype,"gbO",0,0,function(){return[null]},["$1","$0"],["a9","aS"],1,0)
l(j,"gfE","fF",0)
l(j,"gfG","fH",0)
l(j,"gfI","fJ",0)
l(j,"ghf","hg",0)
l(j,"ghh","hi",0)
l(j,"gfO","fP",0)
l(j,"gfM","fN",0)
l(j,"gfK","fL",0)
o(j=M.cP.prototype,"ga6",0,0,function(){return[null]},["$1","$0"],["a1","bu"],1,0)
n(j,"gia","ib",24)
n(j,"gic","ie",24)
o(M.cU.prototype,"ga6",0,0,function(){return[null]},["$1","$0"],["a1","bu"],1,0)
o(j=M.cZ.prototype,"ga6",0,0,function(){return[null]},["$1","$0"],["a1","bu"],1,0)
n(j,"ghB","hC",7)
n(j,"ghD","hE",7)
o(j=O.aL.prototype,"gaI",0,0,function(){return[null]},["$1","$0"],["U","bv"],1,0)
o(j,"gdX",0,0,function(){return[null]},["$1","$0"],["dY","iG"],1,0)
n(j,"ghv","hw",16)
n(j,"ghx","hy",16)
o(O.di.prototype,"gaI",0,0,function(){return[null]},["$1","$0"],["U","bv"],1,0)
o(O.fo.prototype,"gaI",0,0,function(){return[null]},["$1","$0"],["U","bv"],1,0)
o(j=T.et.prototype,"gdB",0,0,function(){return[null]},["$1","$0"],["bK","fQ"],1,0)
l(j,"ghk","hl",0)
l(j,"ghm","hn",0)
l(j,"gho","hp",0)
l(j,"giR","iS",0)
l(j,"giP","iQ",0)
l(j,"giN","iO",0)
o(X.f9.prototype,"gfT",0,0,function(){return[null]},["$1","$0"],["a2","fU"],1,0)
l(S.cJ.prototype,"ghN","hO",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.A,null)
q(P.A,[H.lM,J.a,J.ae,P.F,P.dO,P.h,H.bT,P.eH,H.d1,H.fW,H.cs,P.df,H.cR,H.iT,H.bH,H.k9,H.js,H.d_,H.dY,H.kT,P.a5,H.j1,H.eR,H.iU,H.dP,H.ky,H.aD,H.hi,P.e1,P.h1,P.cw,P.cy,P.en,P.dJ,P.cv,P.a8,P.h2,P.fw,P.fx,P.hG,P.l_,P.e7,P.kS,P.dN,P.G,P.hT,P.fm,P.er,P.kZ,P.V,P.bK,P.f7,P.dy,P.hf,P.iM,P.a0,P.hJ,P.bn,W.iu,W.lF,W.m3,W.K,W.d2,P.e3,P.aZ,P.hy,K.id,K.eF,K.a2,L.ft,L.fE,L.fF,L.k5,O.ce,O.dl,E.im,E.W,E.cd,E.cq,E.hc,E.jy,E.fC,Z.h_,Z.dG,Z.bF,Z.d4,Z.bp,D.ir,D.cg,D.X,O.l9,O.lb,O.la,X.cM,X.eM,X.iX,X.j3,X.b0,X.jq,X.k6,X.fY,D.ey,V.o,V.ar,V.iH,V.dk,V.cn,V.T,V.a1,V.b3,V.fh,V.aj,V.D,U.dE,M.cU,M.cZ,A.ih,A.ii,A.af,A.bD,A.bJ,A.bZ,A.c2,A.j8,A.fM,A.fN,A.fQ,A.fT,A.kb,A.kh,F.d0,F.j0,F.ju,F.jF,F.du,F.fn,F.dv,F.kr,F.a7,F.cu,F.ku,F.kv,O.jT,O.di,O.j9,T.et,T.jY,T.k0,X.jS,X.iS,X.f9,V.jH,Q.iO,Q.i,Q.ag,Q.jL,Q.jQ,Q.t,S.jk])
q(J.a,[J.eI,J.cj,J.bP,J.aA,J.ck,J.bi,H.bX,W.d,W.ic,W.bE,W.cN,W.aU,W.H,W.h7,W.az,W.ix,W.iy,W.h8,W.cX,W.ha,W.iz,W.j,W.hg,W.aV,W.iP,W.hk,W.bO,W.j2,W.jn,W.ho,W.hp,W.b_,W.hq,W.hs,W.b1,W.hw,W.hz,W.b6,W.hA,W.b7,W.hF,W.aE,W.hL,W.k3,W.b9,W.hN,W.k7,W.kj,W.hU,W.hW,W.hY,W.i_,W.i1,P.d8,P.bS,P.hm,P.bY,P.hu,P.jv,P.hH,P.c4,P.hP,P.ij,P.h3,P.cr,P.hD])
q(J.bP,[J.fb,J.c5,J.aY])
r(J.eK,J.aA)
q(J.ck,[J.d6,J.eJ])
q(P.F,[H.eP,P.fI,H.eL,H.fV,H.fk,H.hd,P.em,P.f4,P.aH,P.f3,P.fX,P.fU,P.dz,P.eu,P.ew])
r(P.db,P.dO)
q(P.db,[H.ct,W.h5,W.h4,P.eD])
r(H.U,H.ct)
q(P.h,[H.k,H.bU,H.dH,P.d5])
q(H.k,[H.dc,H.bj])
r(H.cY,H.bU)
q(P.eH,[H.dg,H.h0])
r(H.bV,H.dc)
r(P.e6,P.df)
r(P.dD,P.e6)
r(H.cS,P.dD)
r(H.cT,H.cR)
q(H.bH,[H.jw,H.fz,H.iW,H.iV,H.lp,H.lq,H.lr,P.kA,P.kz,P.kB,P.kC,P.kY,P.kX,P.l0,P.l1,P.lg,P.kE,P.kL,P.kH,P.kI,P.kJ,P.kG,P.kK,P.kF,P.kO,P.kP,P.kN,P.kM,P.ld,P.kV,P.kW,P.j5,P.jr,P.iA,P.iB,W.iQ,W.iR,W.jo,W.jp,W.jE,W.jP,W.kD,P.l2,P.lk,P.iK,P.iL,P.l4,P.l5,P.lh,P.li,P.lj,P.ik,E.jz,E.jA,E.jB,E.k1,D.iI,D.iJ,F.ll,F.jG,F.kx,F.kw,F.ks,F.kt,O.jc,O.jd,O.je,O.jf,O.jg,O.jh,O.ji,O.jj,T.k_,T.jZ,V.lv,V.jJ,V.jI,Q.jN,Q.jO,Q.jM,S.ip,S.iD,S.lw,S.lx,S.ly,S.iY,S.j_,S.jl,S.jm,S.jt,S.jx,S.jD,S.k2,L.lt])
r(H.dq,P.fI)
q(H.fz,[H.fu,H.cc])
r(P.de,P.a5)
r(H.Y,P.de)
r(H.cp,H.bX)
q(H.cp,[H.dR,H.dT])
r(H.dS,H.dR)
r(H.bW,H.dS)
r(H.dU,H.dT)
r(H.dm,H.dU)
q(H.dm,[H.eY,H.eZ,H.f_,H.f0,H.f1,H.dn,H.f2])
r(H.e2,H.hd)
r(P.dZ,P.d5)
r(P.dI,P.dJ)
r(P.kU,P.l_)
r(P.dV,P.e7)
r(P.dM,P.dV)
r(P.ev,P.fx)
r(P.iF,P.er)
r(P.kk,P.iF)
r(P.kl,P.ev)
q(P.aH,[P.dt,P.eG])
q(W.d,[W.v,W.eC,W.bN,W.aN,W.dW,W.aO,W.au,W.e_,W.fZ,W.br,W.aP,P.ep,P.bh])
q(W.v,[W.L,W.aI])
q(W.L,[W.q,P.m])
q(W.q,[W.ej,W.ek,W.bG,W.eE,W.ci,W.fl,W.bo])
r(W.it,W.aU)
r(W.cV,W.h7)
q(W.az,[W.iv,W.iw])
r(W.h9,W.h8)
r(W.cW,W.h9)
r(W.hb,W.ha)
r(W.ez,W.hb)
r(W.aJ,W.bE)
r(W.hh,W.hg)
r(W.eB,W.hh)
r(W.hl,W.hk)
r(W.bM,W.hl)
r(W.aK,W.bN)
q(W.j,[W.bb,W.b4])
q(W.bb,[W.bR,W.at,W.c3])
r(W.eU,W.ho)
r(W.eV,W.hp)
r(W.hr,W.hq)
r(W.eW,W.hr)
r(W.ht,W.hs)
r(W.dp,W.ht)
r(W.hx,W.hw)
r(W.fc,W.hx)
r(W.fj,W.hz)
r(W.dX,W.dW)
r(W.fq,W.dX)
r(W.hB,W.hA)
r(W.fr,W.hB)
r(W.fv,W.hF)
r(W.hM,W.hL)
r(W.fA,W.hM)
r(W.e0,W.e_)
r(W.fB,W.e0)
r(W.hO,W.hN)
r(W.fG,W.hO)
r(W.bq,W.at)
r(W.hV,W.hU)
r(W.h6,W.hV)
r(W.dK,W.cX)
r(W.hX,W.hW)
r(W.hj,W.hX)
r(W.hZ,W.hY)
r(W.dQ,W.hZ)
r(W.i0,W.i_)
r(W.hC,W.i0)
r(W.i2,W.i1)
r(W.hK,W.i2)
r(W.he,P.fw)
q(P.aZ,[P.d7,P.cx])
r(P.bQ,P.cx)
r(P.ah,P.hy)
r(P.hn,P.hm)
r(P.eQ,P.hn)
r(P.hv,P.hu)
r(P.f5,P.hv)
r(P.hI,P.hH)
r(P.fy,P.hI)
r(P.hQ,P.hP)
r(P.fH,P.hQ)
r(P.eo,P.h3)
r(P.f6,P.bh)
r(P.hE,P.hD)
r(P.fs,P.hE)
q(K.eF,[K.bl,L.k8])
q(E.im,[Z.cL,A.c1,T.jU])
q(D.X,[D.aW,D.aX,D.x,O.fe,X.fd,T.cO])
q(X.fd,[X.dd,X.co,X.dB])
q(O.ce,[D.da,U.ch,M.cP])
q(D.ir,[U.is,U.aB])
r(U.cQ,U.aB)
q(A.c1,[A.dh,A.dw,A.dx])
q(A.kb,[A.dC,A.ke,A.kf,A.kg,A.kc,A.fJ,A.kd,A.fK,A.fL,A.ki,A.fO,A.fP,A.fR,A.fS])
q(O.jT,[O.aL,O.fo,O.jK])
q(O.di,[O.j6,O.j7,O.dj])
q(O.dj,[O.ja,O.jb])
q(T.jU,[T.jV,T.jX])
r(T.jW,T.jV)
q(X.jS,[X.il,X.iN])
q(E.W,[S.fa,S.cJ,S.eA,S.fD])
q(S.fa,[S.eq,S.eN,S.eO,S.f8,S.ff,S.fi])
s(H.ct,H.fW)
s(H.dR,P.G)
s(H.dS,H.d1)
s(H.dT,P.G)
s(H.dU,H.d1)
s(P.dO,P.G)
s(P.e6,P.hT)
s(P.e7,P.fm)
s(W.h7,W.iu)
s(W.h8,P.G)
s(W.h9,W.K)
s(W.ha,P.G)
s(W.hb,W.K)
s(W.hg,P.G)
s(W.hh,W.K)
s(W.hk,P.G)
s(W.hl,W.K)
s(W.ho,P.a5)
s(W.hp,P.a5)
s(W.hq,P.G)
s(W.hr,W.K)
s(W.hs,P.G)
s(W.ht,W.K)
s(W.hw,P.G)
s(W.hx,W.K)
s(W.hz,P.a5)
s(W.dW,P.G)
s(W.dX,W.K)
s(W.hA,P.G)
s(W.hB,W.K)
s(W.hF,P.a5)
s(W.hL,P.G)
s(W.hM,W.K)
s(W.e_,P.G)
s(W.e0,W.K)
s(W.hN,P.G)
s(W.hO,W.K)
s(W.hU,P.G)
s(W.hV,W.K)
s(W.hW,P.G)
s(W.hX,W.K)
s(W.hY,P.G)
s(W.hZ,W.K)
s(W.i_,P.G)
s(W.i0,W.K)
s(W.i1,P.G)
s(W.i2,W.K)
s(P.cx,P.G)
s(P.hm,P.G)
s(P.hn,W.K)
s(P.hu,P.G)
s(P.hv,W.K)
s(P.hH,P.G)
s(P.hI,W.K)
s(P.hP,P.G)
s(P.hQ,W.K)
s(P.h3,P.a5)
s(P.hD,P.G)
s(P.hE,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",a9:"double",aa:"num",C:"String",c6:"bool",a0:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(X)","~([X?])","~()","a0(W)","~(j)","~(at)","~(C,@)","~(l,h<W>)","~(d0)","~(l,l)","~(~())","@(@)","a0()","~(c3)","~(ag)","~(l,h<aB?>)","~(l,h<cn>)","C(l)","~(~(X))","~(@)","~(bR)","a0(@)","~(l,h<d9>)","a9()","~(l,h<c0>)","~(C,C)","bQ<@>(@)","aZ(@)","@(@,C)","@(C)","~(dA,@)","~(aa)","C(aK)","~(b4)","~(A?)","~(bq)","a0(~())","c6(h<d9>)","~(@,@)","c6(v)","A?(@)","L(v)","a9(a9)","cL(l)","A?(A?)","d7(@)","~(A[b8?])","l(bD,bD)","l(bJ,bJ)","l(bZ,bZ)","l(c2,c2)","~(k4)","a0(A,b8)","a8<@>(@)","aL(l)","aL()","l(@,@)","~(A?,A?)","C(d)","~(l,@)","a0(@,b8)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pC(v.typeUniverse,JSON.parse('{"fb":"bP","c5":"bP","aY":"bP","r1":"j","re":"j","r3":"bh","r2":"d","rm":"d","rp":"d","r0":"m","rf":"m","t6":"b4","r4":"q","rj":"q","rg":"v","rd":"v","t2":"au","r8":"bb","rc":"aP","r5":"aI","rr":"aI","ro":"at","ri":"bN","rh":"bM","r9":"H","ra":"aE","rl":"bW","rk":"bX","eI":{"c6":[]},"cj":{"a0":[]},"aA":{"p":["1"],"k":["1"],"h":["1"],"u":["1"]},"eK":{"p":["1"],"k":["1"],"h":["1"],"u":["1"]},"ck":{"a9":[],"aa":[]},"d6":{"a9":[],"l":[],"aa":[]},"eJ":{"a9":[],"aa":[]},"bi":{"C":[],"u":["@"]},"eP":{"F":[]},"U":{"p":["l"],"k":["l"],"h":["l"]},"k":{"h":["1"]},"dc":{"k":["1"],"h":["1"]},"bU":{"h":["2"]},"cY":{"k":["2"],"h":["2"]},"bV":{"k":["2"],"h":["2"]},"dH":{"h":["1"]},"ct":{"p":["1"],"k":["1"],"h":["1"]},"cs":{"dA":[]},"cS":{"N":["1","2"]},"cR":{"N":["1","2"]},"cT":{"N":["1","2"]},"dq":{"F":[]},"eL":{"F":[]},"fV":{"F":[]},"dY":{"b8":[]},"bH":{"d3":[]},"fz":{"d3":[]},"fu":{"d3":[]},"cc":{"d3":[]},"fk":{"F":[]},"Y":{"N":["1","2"],"a5.V":"2"},"bj":{"k":["1"],"h":["1"]},"dP":{"n3":[]},"bX":{"aF":[]},"cp":{"w":["1"],"aF":[],"u":["1"]},"bW":{"w":["a9"],"p":["a9"],"k":["a9"],"aF":[],"u":["a9"],"h":["a9"]},"dm":{"w":["l"],"p":["l"],"k":["l"],"aF":[],"u":["l"],"h":["l"]},"eY":{"w":["l"],"p":["l"],"k":["l"],"aF":[],"u":["l"],"h":["l"]},"eZ":{"w":["l"],"p":["l"],"k":["l"],"aF":[],"u":["l"],"h":["l"]},"f_":{"w":["l"],"p":["l"],"k":["l"],"aF":[],"u":["l"],"h":["l"]},"f0":{"w":["l"],"p":["l"],"k":["l"],"aF":[],"u":["l"],"h":["l"]},"f1":{"w":["l"],"p":["l"],"k":["l"],"aF":[],"u":["l"],"h":["l"]},"dn":{"w":["l"],"p":["l"],"k":["l"],"aF":[],"u":["l"],"h":["l"]},"f2":{"w":["l"],"p":["l"],"k":["l"],"aF":[],"u":["l"],"h":["l"]},"hd":{"F":[]},"e2":{"F":[]},"a8":{"bL":["1"]},"e1":{"k4":[]},"dZ":{"h":["1"]},"en":{"F":[]},"dI":{"dJ":["1"]},"dM":{"k":["1"],"h":["1"]},"d5":{"h":["1"]},"db":{"p":["1"],"k":["1"],"h":["1"]},"de":{"N":["1","2"]},"a5":{"N":["1","2"]},"df":{"N":["1","2"]},"dD":{"N":["1","2"]},"dV":{"k":["1"],"h":["1"]},"a9":{"aa":[]},"l":{"aa":[]},"p":{"k":["1"],"h":["1"]},"em":{"F":[]},"fI":{"F":[]},"f4":{"F":[]},"aH":{"F":[]},"dt":{"F":[]},"eG":{"F":[]},"f3":{"F":[]},"fX":{"F":[]},"fU":{"F":[]},"dz":{"F":[]},"eu":{"F":[]},"f7":{"F":[]},"dy":{"F":[]},"ew":{"F":[]},"hJ":{"b8":[]},"L":{"v":[],"d":[]},"aJ":{"bE":[]},"aK":{"d":[]},"bN":{"d":[]},"bR":{"j":[]},"at":{"j":[]},"v":{"d":[]},"b4":{"j":[]},"aN":{"d":[]},"aO":{"d":[]},"au":{"d":[]},"c3":{"j":[]},"bb":{"j":[]},"bq":{"at":[],"j":[]},"q":{"L":[],"v":[],"d":[]},"ej":{"L":[],"v":[],"d":[]},"ek":{"L":[],"v":[],"d":[]},"bG":{"L":[],"v":[],"d":[]},"aI":{"v":[],"d":[]},"cW":{"p":["ah<aa>"],"w":["ah<aa>"],"k":["ah<aa>"],"h":["ah<aa>"],"u":["ah<aa>"]},"cX":{"ah":["aa"]},"ez":{"p":["C"],"w":["C"],"k":["C"],"h":["C"],"u":["C"]},"h5":{"p":["L"],"k":["L"],"h":["L"]},"eB":{"p":["aJ"],"w":["aJ"],"k":["aJ"],"h":["aJ"],"u":["aJ"]},"eC":{"d":[]},"eE":{"L":[],"v":[],"d":[]},"bM":{"p":["v"],"w":["v"],"k":["v"],"h":["v"],"u":["v"]},"ci":{"L":[],"v":[],"d":[]},"eU":{"N":["C","@"],"a5.V":"@"},"eV":{"N":["C","@"],"a5.V":"@"},"eW":{"p":["b_"],"w":["b_"],"k":["b_"],"h":["b_"],"u":["b_"]},"h4":{"p":["v"],"k":["v"],"h":["v"]},"dp":{"p":["v"],"w":["v"],"k":["v"],"h":["v"],"u":["v"]},"fc":{"p":["b1"],"w":["b1"],"k":["b1"],"h":["b1"],"u":["b1"]},"fj":{"N":["C","@"],"a5.V":"@"},"fl":{"L":[],"v":[],"d":[]},"fq":{"p":["aN"],"w":["aN"],"d":[],"k":["aN"],"h":["aN"],"u":["aN"]},"fr":{"p":["b6"],"w":["b6"],"k":["b6"],"h":["b6"],"u":["b6"]},"fv":{"N":["C","C"],"a5.V":"C"},"bo":{"L":[],"v":[],"d":[]},"fA":{"p":["au"],"w":["au"],"k":["au"],"h":["au"],"u":["au"]},"fB":{"p":["aO"],"w":["aO"],"d":[],"k":["aO"],"h":["aO"],"u":["aO"]},"fG":{"p":["b9"],"w":["b9"],"k":["b9"],"h":["b9"],"u":["b9"]},"fZ":{"d":[]},"br":{"d":[]},"aP":{"d":[]},"h6":{"p":["H"],"w":["H"],"k":["H"],"h":["H"],"u":["H"]},"dK":{"ah":["aa"]},"hj":{"p":["aV?"],"w":["aV?"],"k":["aV?"],"h":["aV?"],"u":["aV?"]},"dQ":{"p":["v"],"w":["v"],"k":["v"],"h":["v"],"u":["v"]},"hC":{"p":["b7"],"w":["b7"],"k":["b7"],"h":["b7"],"u":["b7"]},"hK":{"p":["aE"],"w":["aE"],"k":["aE"],"h":["aE"],"u":["aE"]},"e3":{"bO":[]},"eD":{"p":["L"],"k":["L"],"h":["L"]},"bQ":{"p":["1"],"k":["1"],"h":["1"]},"ah":{"hy":["1"]},"eQ":{"p":["bS"],"k":["bS"],"h":["bS"]},"f5":{"p":["bY"],"k":["bY"],"h":["bY"]},"fy":{"p":["C"],"k":["C"],"h":["C"]},"m":{"L":[],"v":[],"d":[]},"fH":{"p":["c4"],"k":["c4"],"h":["c4"]},"eo":{"N":["C","@"],"a5.V":"@"},"ep":{"d":[]},"bh":{"d":[]},"f6":{"d":[]},"fs":{"p":["N<@,@>"],"k":["N<@,@>"],"h":["N<@,@>"]},"ce":{"h":["1"]},"aW":{"X":[]},"aX":{"X":[]},"x":{"X":[]},"fe":{"X":[]},"dd":{"X":[]},"co":{"X":[]},"fd":{"X":[]},"dB":{"X":[]},"ey":{"d9":[]},"da":{"h":["d9"]},"cQ":{"aB":[]},"ch":{"aB":[],"h":["aB?"]},"dE":{"aB":[]},"cP":{"c0":[],"h":["c0"]},"cU":{"c0":[]},"cZ":{"c0":[]},"dh":{"c1":[]},"dw":{"c1":[]},"dx":{"c1":[]},"cO":{"X":[]},"eq":{"W":[]},"cJ":{"W":[]},"eA":{"W":[]},"eN":{"W":[]},"eO":{"W":[]},"f8":{"W":[]},"fa":{"W":[]},"ff":{"W":[]},"fi":{"W":[]},"fD":{"W":[]}}'))
H.pB(v.typeUniverse,JSON.parse('{"aA":1,"eK":1,"ae":1,"k":1,"dc":1,"bT":1,"bU":2,"cY":2,"dg":2,"bV":2,"dH":1,"h0":1,"d1":1,"fW":1,"ct":1,"cR":2,"bj":1,"eR":1,"cp":1,"cy":1,"dZ":1,"fw":1,"fx":2,"hG":1,"dN":1,"d5":1,"db":1,"G":1,"de":2,"a5":2,"hT":2,"df":2,"dD":2,"fm":1,"dV":1,"dO":1,"e6":2,"e7":1,"er":2,"ev":2,"h":1,"p":1,"eH":1,"he":1,"K":1,"d2":1,"bQ":1,"cx":1,"ce":1,"aW":1,"aX":1,"x":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.nP
return{O:s("bE"),D:s("bF"),E:s("bG"),m:s("cN"),l:s("cO"),s:s("cS<dA,@>"),t:s("k<@>"),h:s("L"),u:s("W"),C:s("F"),B:s("j"),Y:s("d3"),c:s("bL<@>"),I:s("bO"),b0:s("ci"),ce:s("aA<@>"),e:s("u<@>"),T:s("cj"),M:s("aY"),p:s("w<@>"),bV:s("Y<dA,@>"),c_:s("Y<l,c6>"),y:s("Y<l,l>"),cF:s("d8"),J:s("p<fM>"),L:s("p<fN>"),U:s("p<fQ>"),R:s("p<fT>"),cK:s("p<@>"),b7:s("dd"),be:s("N<C,aL>"),bC:s("N<@,@>"),r:s("aL"),Z:s("co"),a1:s("v"),P:s("a0"),K:s("A"),q:s("ah<aa>"),d:s("n3"),k:s("c1"),N:s("C"),aL:s("bo"),ae:s("k4"),aR:s("fE"),Q:s("dB"),f:s("aF"),n:s("fJ"),v:s("dC"),g:s("fK"),F:s("fL"),V:s("fO"),j:s("fP"),G:s("fR"),a:s("fS"),o:s("c5"),cg:s("br"),bj:s("aP"),d5:s("dI<aK>"),bR:s("a8<aK>"),aY:s("a8<@>"),w:s("c6"),i:s("a9"),z:s("@"),b6:s("@(A)"),b:s("@(A,b8)"),S:s("l"),A:s("0&*"),_:s("A*"),bc:s("bL<a0>?"),d1:s("dh?"),X:s("A?"),ba:s("cr?"),x:s("dw?"),cH:s("dx?"),aJ:s("ft?"),aX:s("fF?"),W:s("dC?"),H:s("aa")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.bG.prototype
C.K=W.aK.prototype
C.L=J.a.prototype
C.a=J.aA.prototype
C.c=J.d6.prototype
C.M=J.cj.prototype
C.d=J.ck.prototype
C.b=J.bi.prototype
C.N=J.aY.prototype
C.v=J.fb.prototype
C.j=P.cr.prototype
C.k=J.c5.prototype
C.w=W.bq.prototype
C.x=W.br.prototype
C.y=new E.cd("Browser.chrome")
C.l=new E.cd("Browser.firefox")
C.m=new E.cd("Browser.edge")
C.z=new E.cd("Browser.other")
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.F=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.E=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.D=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.o=function(hooks) { return hooks; }

C.G=new P.f7()
C.i=new P.kk()
C.H=new P.kl()
C.p=new H.kT()
C.e=new P.kU()
C.I=new P.hJ()
C.h=new P.bK(0)
C.J=new P.bK(5e6)
C.q=s([])
C.r=s([0,0,65498,45055,65535,34815,65534,18431])
C.O=s([])
C.t=new H.cT(0,{},C.O,H.nP("cT<dA,@>"))
C.P=new E.cq("OperatingSystem.windows")
C.u=new E.cq("OperatingSystem.mac")
C.Q=new E.cq("OperatingSystem.linux")
C.R=new E.cq("OperatingSystem.other")
C.S=new H.cs("call")
C.T=new P.cw(null,2)})();(function staticFields(){$.kQ=null
$.aT=0
$.cK=null
$.my=null
$.nS=null
$.nM=null
$.nX=null
$.lm=null
$.ls=null
$.mk=null
$.cz=null
$.ea=null
$.eb=null
$.mf=!1
$.I=C.e
$.ao=[]
$.iG=null
$.lf=null
$.mR=null
$.mT=null
$.a6=null
$.b2=null
$.n5=null
$.km=null
$.nk=null
$.kn=null
$.ko=null
$.kp=null
$.nj=null
$.mw=null
$.mx=null
$.lE=null
$.mK=null
$.mL=null
$.mM=null
$.mN=null
$.mW=null
$.mX=null
$.n0=null
$.n1=null
$.n6=null
$.n7=null
$.ne=null
$.nf=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"rb","lz",function(){return H.nQ("_$dart_dartClosure")})
s($,"rH","o4",function(){return H.ba(H.ka({
toString:function(){return"$receiver$"}}))})
s($,"rI","o5",function(){return H.ba(H.ka({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rJ","o6",function(){return H.ba(H.ka(null))})
s($,"rK","o7",function(){return H.ba(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rN","oa",function(){return H.ba(H.ka(void 0))})
s($,"rO","ob",function(){return H.ba(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rM","o9",function(){return H.ba(H.nh(null))})
s($,"rL","o8",function(){return H.ba(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rQ","od",function(){return H.ba(H.nh(void 0))})
s($,"rP","oc",function(){return H.ba(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"t3","mo",function(){return P.ph()})
s($,"t7","oh",function(){return P.lT("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"t4","mp",function(){return H.nQ("_$dart_dartObject")})
s($,"tk","mq",function(){return function DartObject(a){this.o=a}})
s($,"rX","og",function(){return Z.aG(0)})
s($,"rR","oe",function(){return Z.aG(511)})
s($,"rZ","aw",function(){return Z.aG(1)})
s($,"rY","bB",function(){return Z.aG(2)})
s($,"rT","bA",function(){return Z.aG(4)})
s($,"t_","bC",function(){return Z.aG(8)})
s($,"t0","cb",function(){return Z.aG(16)})
s($,"rU","eg",function(){return Z.aG(32)})
s($,"rV","eh",function(){return Z.aG(64)})
s($,"rW","of",function(){return Z.aG(96)})
s($,"t1","cI",function(){return Z.aG(128)})
s($,"rS","bz",function(){return Z.aG(256)})
s($,"r7","o2",function(){return new V.iH()})
r($,"r6","B",function(){return $.o2()})
r($,"rn","o3",function(){var q=V.lR(),p=V.kq(),o=$.nj
return V.lO(q,p,o==null?$.nj=V.pe(0,0,-1):o)})
s($,"rB","lB",function(){return Q.ai(-1)})
s($,"rw","O",function(){return Q.ai(0)})
s($,"rA","c9",function(){return Q.ai(4096)})
s($,"rv","aQ",function(){return Q.ai(15)})
s($,"rx","lA",function(){return $.mn().dj(0,$.ca()).dj(0,$.aQ())})
s($,"rt","bg",function(){return Q.ai(256)})
s($,"rG","a4",function(){return Q.ai(512)})
s($,"ru","mn",function(){return Q.ai(768)})
s($,"rC","cH",function(){return Q.ai(16)})
s($,"rF","aR",function(){return Q.ai(32)})
s($,"rz","cG",function(){return Q.ai(48)})
s($,"rs","bf",function(){return Q.ai(64)})
s($,"rE","aq",function(){return Q.ai(80)})
s($,"ry","by",function(){return Q.ai(96)})
s($,"rD","ca",function(){return Q.ai(240)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bX,ArrayBufferView:H.bX,Float32Array:H.bW,Float64Array:H.bW,Int16Array:H.eY,Int32Array:H.eZ,Int8Array:H.f_,Uint16Array:H.f0,Uint32Array:H.f1,Uint8ClampedArray:H.dn,CanvasPixelArray:H.dn,Uint8Array:H.f2,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLDivElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.ic,HTMLAnchorElement:W.ej,HTMLAreaElement:W.ek,Blob:W.bE,HTMLCanvasElement:W.bG,CanvasRenderingContext2D:W.cN,CDATASection:W.aI,CharacterData:W.aI,Comment:W.aI,ProcessingInstruction:W.aI,Text:W.aI,CSSPerspective:W.it,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.cV,MSStyleCSSProperties:W.cV,CSS2Properties:W.cV,CSSImageValue:W.az,CSSKeywordValue:W.az,CSSNumericValue:W.az,CSSPositionValue:W.az,CSSResourceValue:W.az,CSSUnitValue:W.az,CSSURLImageValue:W.az,CSSStyleValue:W.az,CSSMatrixComponent:W.aU,CSSRotation:W.aU,CSSScale:W.aU,CSSSkew:W.aU,CSSTranslation:W.aU,CSSTransformComponent:W.aU,CSSTransformValue:W.iv,CSSUnparsedValue:W.iw,DataTransferItemList:W.ix,DOMException:W.iy,ClientRectList:W.cW,DOMRectList:W.cW,DOMRectReadOnly:W.cX,DOMStringList:W.ez,DOMTokenList:W.iz,Element:W.L,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,SubmitEvent:W.j,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aJ,FileList:W.eB,FileWriter:W.eC,HTMLFormElement:W.eE,Gamepad:W.aV,History:W.iP,HTMLCollection:W.bM,HTMLFormControlsCollection:W.bM,HTMLOptionsCollection:W.bM,XMLHttpRequest:W.aK,XMLHttpRequestUpload:W.bN,XMLHttpRequestEventTarget:W.bN,ImageData:W.bO,HTMLImageElement:W.ci,KeyboardEvent:W.bR,Location:W.j2,MediaList:W.jn,MIDIInputMap:W.eU,MIDIOutputMap:W.eV,MimeType:W.b_,MimeTypeArray:W.eW,PointerEvent:W.at,MouseEvent:W.at,DragEvent:W.at,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.dp,RadioNodeList:W.dp,Plugin:W.b1,PluginArray:W.fc,ProgressEvent:W.b4,ResourceProgressEvent:W.b4,RTCStatsReport:W.fj,HTMLSelectElement:W.fl,SourceBuffer:W.aN,SourceBufferList:W.fq,SpeechGrammar:W.b6,SpeechGrammarList:W.fr,SpeechRecognitionResult:W.b7,Storage:W.fv,CSSStyleSheet:W.aE,StyleSheet:W.aE,HTMLTableCellElement:W.bo,HTMLTableDataCellElement:W.bo,HTMLTableHeaderCellElement:W.bo,TextTrack:W.aO,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.fA,TextTrackList:W.fB,TimeRanges:W.k3,Touch:W.b9,TouchEvent:W.c3,TouchList:W.fG,TrackDefaultList:W.k7,CompositionEvent:W.bb,FocusEvent:W.bb,TextEvent:W.bb,UIEvent:W.bb,URL:W.kj,VideoTrackList:W.fZ,WheelEvent:W.bq,Window:W.br,DOMWindow:W.br,DedicatedWorkerGlobalScope:W.aP,ServiceWorkerGlobalScope:W.aP,SharedWorkerGlobalScope:W.aP,WorkerGlobalScope:W.aP,CSSRuleList:W.h6,ClientRect:W.dK,DOMRect:W.dK,GamepadList:W.hj,NamedNodeMap:W.dQ,MozNamedAttrMap:W.dQ,SpeechRecognitionResultList:W.hC,StyleSheetList:W.hK,IDBKeyRange:P.d8,SVGLength:P.bS,SVGLengthList:P.eQ,SVGNumber:P.bY,SVGNumberList:P.f5,SVGPointList:P.jv,SVGStringList:P.fy,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGTransform:P.c4,SVGTransformList:P.fH,AudioBuffer:P.ij,AudioParamMap:P.eo,AudioTrackList:P.ep,AudioContext:P.bh,webkitAudioContext:P.bh,BaseAudioContext:P.bh,OfflineAudioContext:P.f6,WebGL2RenderingContext:P.cr,SQLResultSetRowList:P.fs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
W.dW.$nativeSuperclassTag="EventTarget"
W.dX.$nativeSuperclassTag="EventTarget"
W.e_.$nativeSuperclassTag="EventTarget"
W.e0.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=L.qQ
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
