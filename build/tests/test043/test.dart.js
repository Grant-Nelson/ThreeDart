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
a[c]=function(){a[c]=function(){H.p_(b)}
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
if(a[b]!==s)H.p0(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kI(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={kk:function kk(){},
j4:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nc:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
oB:function(a,b,c){return a},
nb:function(a,b,c,d){P.eV(b,"start")
if(c!=null){P.eV(c,"end")
if(b>c)H.h(P.ar(b,0,c,"start",null))}return new H.df(a,b,c,d.w("df<0>"))},
mO:function(a,b,c,d){if(t.gw.b(a))return new H.cD(a,b,c.w("@<0>").bp(d).w("cD<1,2>"))
return new H.aT(a,b,c.w("@<0>").bp(d).w("aT<1,2>"))},
l2:function(){return new P.bE("No element")},
mI:function(){return new P.bE("Too many elements")},
mH:function(){return new P.bE("Too few elements")},
n9:function(a,b){H.f1(a,0,J.ax(a)-1,b)},
f1:function(a,b,c,d){if(c-b<=32)H.n8(a,b,c,d)
else H.n7(a,b,c,d)},
n8:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.ct(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.as()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
n7:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.a1(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.a1(a4+a5,2),f=g-j,e=g+j,d=J.ct(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.as()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.a2(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.f1(a3,a4,r-2,a6)
H.f1(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.a2(a6.$2(d.h(a3,r),b),0);)++r
for(;J.a2(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.f1(a3,r,q,a6)}else H.f1(a3,r,q,a6)},
ew:function ew(a){this.a=a},
Q:function Q(a){this.a=a},
m:function m(){},
c1:function c1(){},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bC:function bC(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b){this.a=null
this.b=a
this.c=b},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
b0:function b0(a,b,c){this.a=a
this.b=b
this.$ti=c},
fB:function fB(a,b){this.a=a
this.b=b},
cH:function cH(){},
fv:function fv(){},
cf:function cf(){},
m1:function(a){var s,r=H.m0(a)
if(r!=null)return r
s="minified:"+a
return s},
oP:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
w:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.e5(a)
return s},
d5:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
d6:function(a){return H.mT(a)},
mT:function(a){var s,r,q,p
if(a instanceof P.M)return H.ak(H.aK(a),null)
if(J.e_(a)===C.P||t.ak.b(a)){s=C.o(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ak(H.aK(a),null)},
le:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
n2:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r){q=a[r]
if(!H.hG(q))throw H.c(H.jX(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.br(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.jX(q))}return H.le(p)},
n1:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.hG(q))throw H.c(H.jX(q))
if(q<0)throw H.c(H.jX(q))
if(q>65535)return H.n2(a)}return H.le(a)},
n0:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.br(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.ar(a,0,1114111,null,null))},
c7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n_:function(a){var s=H.c7(a).getFullYear()+0
return s},
mY:function(a){var s=H.c7(a).getMonth()+1
return s},
mU:function(a){var s=H.c7(a).getDate()+0
return s},
mV:function(a){var s=H.c7(a).getHours()+0
return s},
mX:function(a){var s=H.c7(a).getMinutes()+0
return s},
mZ:function(a){var s=H.c7(a).getSeconds()+0
return s},
mW:function(a){var s=H.c7(a).getMilliseconds()+0
return s},
f:function(a,b){if(a==null)J.ax(a)
throw H.c(H.cr(a,b))},
cr:function(a,b){var s,r="index"
if(!H.hG(b))return new P.ay(!0,b,r,null)
s=J.ax(a)
if(b<0||b>=s)return P.L(b,a,r,null,s)
return P.eU(b,r)},
oD:function(a,b,c){if(a>c)return P.ar(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ar(b,a,c,"end",null)
return new P.ay(!0,b,"end",null)},
jX:function(a){return new P.ay(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eL()
s=new Error()
s.dartException=a
r=H.p1
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
p1:function(){return J.e5(this.dartException)},
h:function(a){throw H.c(a)},
p:function(a){throw H.c(P.aN(a))},
aZ:function(a){var s,r,q,p,o,n
a=H.lY(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jf(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
jg:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
lp:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kl:function(a,b){var s=b==null,r=s?null:b.method
return new H.eu(a,r,s?null:b.receiver)},
b3:function(a){if(a==null)return new H.iP(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bO(a,a.dartException)
return H.ox(a)},
bO:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ox:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.br(r,16)&8191)===10)switch(q){case 438:return H.bO(a,H.kl(H.w(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.w(s)+" (Error "+q+")"
return H.bO(a,new H.d4(p,e))}}if(a instanceof TypeError){o=$.m5()
n=$.m6()
m=$.m7()
l=$.m8()
k=$.mb()
j=$.mc()
i=$.ma()
$.m9()
h=$.me()
g=$.md()
f=o.ap(s)
if(f!=null)return H.bO(a,H.kl(s,f))
else{f=n.ap(s)
if(f!=null){f.method="call"
return H.bO(a,H.kl(s,f))}else{f=m.ap(s)
if(f==null){f=l.ap(s)
if(f==null){f=k.ap(s)
if(f==null){f=j.ap(s)
if(f==null){f=i.ap(s)
if(f==null){f=l.ap(s)
if(f==null){f=h.ap(s)
if(f==null){f=g.ap(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bO(a,new H.d4(s,f==null?e:f.method))}}return H.bO(a,new H.fu(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.de()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bO(a,new P.ay(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.de()
return a},
kJ:function(a){var s
if(a==null)return new H.hf(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.hf(a)},
oF:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
oO:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.e("Unsupported number of arguments for wrapped closure"))},
cq:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oO)
a.$identity=s
return s},
mA:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.f6().constructor.prototype):Object.create(new H.bR(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aM
if(typeof r!=="number")return r.a_()
$.aM=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kU(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mw(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kU(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mw:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lU,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.mu:H.mt
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
mx:function(a,b,c,d){var s=H.kT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kU:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mz(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mx(r,!p,s,b)
if(r===0){p=$.aM
if(typeof p!=="number")return p.a_()
$.aM=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.cv
return new Function(p+(o==null?$.cv=H.hQ("self"):o)+";return "+n+"."+H.w(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aM
if(typeof p!=="number")return p.a_()
$.aM=p+1
m+=p
p="return function("+m+"){return this."
o=$.cv
return new Function(p+(o==null?$.cv=H.hQ("self"):o)+"."+H.w(s)+"("+m+");}")()},
my:function(a,b,c,d){var s=H.kT,r=H.mv
switch(b?-1:a){case 0:throw H.c(new H.eZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mz:function(a,b){var s,r,q,p,o,n,m,l=$.cv
if(l==null)l=$.cv=H.hQ("self")
s=$.kS
if(s==null)s=$.kS=H.hQ("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.my(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.w(r)+"(this."+s+");"
n=$.aM
if(typeof n!=="number")return n.a_()
$.aM=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.w(r)+"(this."+s+", "+m+");"
n=$.aM
if(typeof n!=="number")return n.a_()
$.aM=n+1
return new Function(o+n+"}")()},
kI:function(a,b,c,d,e,f,g){return H.mA(a,b,c,d,!!e,!!f,g)},
mt:function(a,b){return H.ht(v.typeUniverse,H.aK(a.a),b)},
mu:function(a,b){return H.ht(v.typeUniverse,H.aK(a.c),b)},
kT:function(a){return a.a},
mv:function(a){return a.c},
hQ:function(a){var s,r,q,p=new H.bR("self","target","receiver","name"),o=J.kj(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.kc("Field name "+a+" not found."))},
p_:function(a){throw H.c(new P.ej(a))},
oI:function(a){return v.getIsolateTag(a)},
p0:function(a){return H.h(new H.ew(a))},
q2:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oR:function(a){var s,r,q,p,o,n=$.lT.$1(a),m=$.jZ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k4[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lN.$2(a,n)
if(q!=null){m=$.jZ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.k4[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.k8(s)
$.jZ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.k4[n]=s
return s}if(p==="-"){o=H.k8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lW(a,s)
if(p==="*")throw H.c(P.kr(n))
if(v.leafTags[n]===true){o=H.k8(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lW(a,s)},
lW:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kM(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
k8:function(a){return J.kM(a,!1,null,!!a.$iz)},
oT:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.k8(s)
else return J.kM(s,c,null,null)},
oM:function(){if(!0===$.kK)return
$.kK=!0
H.oN()},
oN:function(){var s,r,q,p,o,n,m,l
$.jZ=Object.create(null)
$.k4=Object.create(null)
H.oL()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lX.$1(o)
if(n!=null){m=H.oT(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oL:function(){var s,r,q,p,o,n,m=C.E()
m=H.cp(C.F,H.cp(C.G,H.cp(C.p,H.cp(C.p,H.cp(C.H,H.cp(C.I,H.cp(C.J(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lT=new H.k1(p)
$.lN=new H.k2(o)
$.lX=new H.k3(n)},
cp:function(a,b){return a(b)||b},
mL:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.ih("Illegal RegExp pattern ("+String(n)+")",a))},
lZ:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
oE:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lY:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m_:function(a,b,c){var s=H.oW(a,b,c)
return s},
oW:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lY(b),'g'),H.oE(c))},
oX:function(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return H.oY(a,s,s+b.length,c)},
oY:function(a,b,c,d){var s=a.substring(0,b),r=a.substring(c)
return s+d+r},
jf:function jf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
d4:function d4(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
iP:function iP(a){this.a=a},
hf:function hf(a){this.a=a
this.b=null},
bu:function bu(){},
fc:function fc(){},
f6:function f6(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a){this.a=a},
X:function X(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
io:function io(a){this.a=a},
iq:function iq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ap:function ap(a,b){this.a=a
this.$ti=b},
ez:function ez(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
il:function il(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j3:function j3(a,b){this.a=a
this.c=b},
kx:function kx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cn:function(a){return a},
b1:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cr(b,a))},
nM:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.oD(a,b,c))
return b},
d1:function d1(){},
c4:function c4(){},
ba:function ba(){},
ad:function ad(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
c5:function c5(){},
eK:function eK(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
lh:function(a,b){var s=b.c
return s==null?b.c=H.kA(a,b.z,!0):s},
lg:function(a,b){var s=b.c
return s==null?b.c=H.dS(a,"l0",[b.z]):s},
li:function(a){var s=a.y
if(s===6||s===7||s===8)return H.li(a.z)
return s===11||s===12},
n5:function(a){return a.cy},
lS:function(a){return H.kB(v.typeUniverse,a,!1)},
bl:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bl(a,s,a0,a1)
if(r===s)return b
return H.lD(a,r,!0)
case 7:s=b.z
r=H.bl(a,s,a0,a1)
if(r===s)return b
return H.kA(a,r,!0)
case 8:s=b.z
r=H.bl(a,s,a0,a1)
if(r===s)return b
return H.lC(a,r,!0)
case 9:q=b.Q
p=H.dZ(a,q,a0,a1)
if(p===q)return b
return H.dS(a,b.z,p)
case 10:o=b.z
n=H.bl(a,o,a0,a1)
m=b.Q
l=H.dZ(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ky(a,n,l)
case 11:k=b.z
j=H.bl(a,k,a0,a1)
i=b.Q
h=H.ou(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lB(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dZ(a,g,a0,a1)
o=b.z
n=H.bl(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kz(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hK("Attempted to substitute unexpected RTI kind "+c))}},
dZ:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bl(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
ov:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bl(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
ou:function(a,b,c,d){var s,r=b.a,q=H.dZ(a,r,c,d),p=b.b,o=H.dZ(a,p,c,d),n=b.c,m=H.ov(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fS()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
oC:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lU(s)
return a.$S()}return null},
lV:function(a,b){var s
if(H.li(b))if(a instanceof H.bu){s=H.oC(a)
if(s!=null)return s}return H.aK(a)},
aK:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.kD(a)}if(Array.isArray(a))return H.kC(a)
return H.kD(J.e_(a))},
kC:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
J:function(a){var s=a.$ti
return s!=null?s:H.kD(a)},
kD:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.nT(a,s)},
nT:function(a,b){var s=a instanceof H.bu?a.__proto__.__proto__.constructor:b,r=H.nI(v.typeUniverse,s.name)
b.$ccache=r
return r},
lU:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kB(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nS:function(a){var s,r,q,p=this
if(p===t.K)return H.dW(p,a,H.nX)
if(!H.b2(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dW(p,a,H.o_)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.hG
else if(r===t.gR||r===t.H)q=H.nW
else if(r===t.N)q=H.nY
else q=r===t.cJ?H.kE:null
if(q!=null)return H.dW(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.oQ)){p.r="$i"+s
return H.dW(p,a,H.nZ)}}else if(s===7)return H.dW(p,a,H.nQ)
return H.dW(p,a,H.nO)},
dW:function(a,b,c){a.b=c
return a.b(b)},
nR:function(a){var s,r=this,q=H.nN
if(!H.b2(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.nL
else if(r===t.K)q=H.nK
else{s=H.e0(r)
if(s)q=H.nP}r.a=q
return r.a(a)},
kH:function(a){var s,r=a.y
if(!H.b2(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kH(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nO:function(a){var s=this
if(a==null)return H.kH(s)
return H.O(v.typeUniverse,H.lV(a,s),null,s,null)},
nQ:function(a){if(a==null)return!0
return this.z.b(a)},
nZ:function(a){var s,r=this
if(a==null)return H.kH(r)
s=r.r
if(a instanceof P.M)return!!a[s]
return!!J.e_(a)[s]},
nN:function(a){var s,r=this
if(a==null){s=H.e0(r)
if(s)return a}else if(r.b(a))return a
H.lI(a,r)},
nP:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lI(a,s)},
lI:function(a,b){throw H.c(H.ny(H.lu(a,H.lV(a,b),H.ak(b,null))))},
lu:function(a,b,c){var s=P.ib(a),r=H.ak(b==null?H.aK(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
ny:function(a){return new H.dQ("TypeError: "+a)},
a7:function(a,b){return new H.dQ("TypeError: "+H.lu(a,null,b))},
nX:function(a){return a!=null},
nK:function(a){if(a!=null)return a
throw H.c(H.a7(a,"Object"))},
o_:function(a){return!0},
nL:function(a){return a},
kE:function(a){return!0===a||!1===a},
lG:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a7(a,"bool"))},
pS:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a7(a,"bool"))},
pR:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a7(a,"bool?"))},
pT:function(a){if(typeof a=="number")return a
throw H.c(H.a7(a,"double"))},
pV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a7(a,"double"))},
pU:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a7(a,"double?"))},
hG:function(a){return typeof a=="number"&&Math.floor(a)===a},
hF:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a7(a,"int"))},
pX:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a7(a,"int"))},
pW:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a7(a,"int?"))},
nW:function(a){return typeof a=="number"},
pY:function(a){if(typeof a=="number")return a
throw H.c(H.a7(a,"num"))},
q_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a7(a,"num"))},
pZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a7(a,"num?"))},
nY:function(a){return typeof a=="string"},
jR:function(a){if(typeof a=="string")return a
throw H.c(H.a7(a,"String"))},
q1:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a7(a,"String"))},
q0:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a7(a,"String?"))},
oq:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ak(a[q],b)
return s},
lJ:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.f(a5,j)
m=C.d.a_(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ak(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ak(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ak(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ak(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ak(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ak:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ak(a.z,b)
return s}if(l===7){r=a.z
s=H.ak(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ak(a.z,b)+">"
if(l===9){p=H.ow(a.z)
o=a.Q
return o.length!==0?p+("<"+H.oq(o,b)+">"):p}if(l===11)return H.lJ(a,b,null)
if(l===12)return H.lJ(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.f(b,n)
return b[n]}return"?"},
ow:function(a){var s,r=H.m0(a)
if(r!=null)return r
s="minified:"+a
return s},
lE:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nI:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kB(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dT(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dS(a,b,q)
n[b]=o
return o}else return m},
nG:function(a,b){return H.lF(a.tR,b)},
nF:function(a,b){return H.lF(a.eT,b)},
kB:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.lz(H.lx(a,null,b,c))
r.set(b,s)
return s},
ht:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.lz(H.lx(a,b,c,!0))
q.set(c,r)
return r},
nH:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ky(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bk:function(a,b){b.a=H.nR
b.b=H.nS
return b},
dT:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.as(null,null)
s.y=b
s.cy=c
r=H.bk(a,s)
a.eC.set(c,r)
return r},
lD:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.nD(a,b,r,c)
a.eC.set(r,s)
return s},
nD:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b2(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.as(null,null)
q.y=6
q.z=b
q.cy=c
return H.bk(a,q)},
kA:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.nC(a,b,r,c)
a.eC.set(r,s)
return s},
nC:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.b2(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.e0(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.e0(q.z))return q
else return H.lh(a,b)}}p=new H.as(null,null)
p.y=7
p.z=b
p.cy=c
return H.bk(a,p)},
lC:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nA(a,b,r,c)
a.eC.set(r,s)
return s},
nA:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.b2(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dS(a,"l0",[b])
else if(b===t.P||b===t.T)return t.eH}q=new H.as(null,null)
q.y=8
q.z=b
q.cy=c
return H.bk(a,q)},
nE:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.as(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bk(a,s)
a.eC.set(q,r)
return r},
hs:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nz:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dS:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.hs(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.as(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bk(a,r)
a.eC.set(p,q)
return q},
ky:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.hs(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bk(a,o)
a.eC.set(q,n)
return n},
lB:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.hs(m)
if(j>0){s=l>0?",":""
r=H.hs(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nz(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.as(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bk(a,o)
a.eC.set(q,r)
return r},
kz:function(a,b,c,d){var s,r=b.cy+("<"+H.hs(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nB(a,b,c,r,d)
a.eC.set(r,s)
return s},
nB:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bl(a,b,r,0)
m=H.dZ(a,c,r,0)
return H.kz(a,n,m,c!==m)}}l=new H.as(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bk(a,l)},
lx:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
lz:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.ns(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.ly(a,r,h,g,!1)
else if(q===46)r=H.ly(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bj(a.u,a.e,g.pop()))
break
case 94:g.push(H.nE(a.u,g.pop()))
break
case 35:g.push(H.dT(a.u,5,"#"))
break
case 64:g.push(H.dT(a.u,2,"@"))
break
case 126:g.push(H.dT(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kw(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dS(p,n,o))
else{m=H.bj(p,a.e,n)
switch(m.y){case 11:g.push(H.kz(p,m,o,a.n))
break
default:g.push(H.ky(p,m,o))
break}}break
case 38:H.nt(a,g)
break
case 42:p=a.u
g.push(H.lD(p,H.bj(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kA(p,H.bj(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.lC(p,H.bj(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fS()
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
H.kw(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.lB(p,H.bj(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kw(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.nv(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bj(a.u,a.e,i)},
ns:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ly:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lE(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.n5(o)+'"')
d.push(H.ht(s,o,n))}else d.push(p)
return m},
nt:function(a,b){var s=b.pop()
if(0===s){b.push(H.dT(a.u,1,"0&"))
return}if(1===s){b.push(H.dT(a.u,4,"1&"))
return}throw H.c(P.hK("Unexpected extended operation "+H.w(s)))},
bj:function(a,b,c){if(typeof c=="string")return H.dS(a,c,a.sEA)
else if(typeof c=="number")return H.nu(a,b,c)
else return c},
kw:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bj(a,b,c[s])},
nv:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bj(a,b,c[s])},
nu:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hK("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hK("Bad index "+c+" for "+b.i(0)))},
O:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.b2(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.b2(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.O(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.O(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.O(a,b.z,c,d,e)
if(r===6)return H.O(a,b.z,c,d,e)
return r!==7}if(r===6)return H.O(a,b.z,c,d,e)
if(p===6){s=H.lh(a,d)
return H.O(a,b,c,s,e)}if(r===8){if(!H.O(a,b.z,c,d,e))return!1
return H.O(a,H.lg(a,b),c,d,e)}if(r===7){s=H.O(a,t.P,c,d,e)
return s&&H.O(a,b.z,c,d,e)}if(p===8){if(H.O(a,b,c,d.z,e))return!0
return H.O(a,b,c,H.lg(a,d),e)}if(p===7){s=H.O(a,b,c,t.P,e)
return s||H.O(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.c)return!0
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
if(!H.O(a,k,c,j,e)||!H.O(a,j,e,k,c))return!1}return H.lK(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.lK(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nV(a,b,c,d,e)}return!1},
lK:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.O(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.O(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.O(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.O(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.O(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nV:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.O(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lE(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.O(a,H.ht(a,b,l[p]),c,r[p],e))return!1
return!0},
e0:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.b2(a))if(r!==7)if(!(r===6&&H.e0(a.z)))s=r===8&&H.e0(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oQ:function(a){var s
if(!H.b2(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
b2:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lF:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
as:function as(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fS:function fS(){this.c=this.b=this.a=null},
fO:function fO(){},
dQ:function dQ(a){this.a=a},
m0:function(a){return v.mangledGlobalNames[a]},
oU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kM:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k0:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kK==null){H.oM()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.kr("Return interceptor for "+H.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jB
if(o==null)o=$.jB=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.oR(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){o=$.jB
if(o==null)o=$.jB=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
l3:function(a,b){if(a<0||a>4294967295)throw H.c(P.ar(a,0,4294967295,"length",null))
return J.mJ(new Array(a),b)},
ki:function(a,b){if(a<0)throw H.c(P.kc("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.w("t<0>"))},
mJ:function(a,b){return J.kj(H.b(a,b.w("t<0>")))},
kj:function(a){a.fixed$length=Array
return a},
mK:function(a,b){return J.mn(a,b)},
e_:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cM.prototype
return J.et.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.cN.prototype
if(typeof a=="boolean")return J.es.prototype
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.M)return a
return J.k0(a)},
ct:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.M)return a
return J.k0(a)},
k_:function(a){if(a==null)return a
if(a.constructor==Array)return J.t.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.M)return a
return J.k0(a)},
oG:function(a){if(typeof a=="number")return J.c0.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bM.prototype
return a},
oH:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bM.prototype
return a},
aJ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aR.prototype
return a}if(a instanceof P.M)return a
return J.k0(a)},
a2:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.e_(a).n(a,b)},
mk:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oP(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ct(a).h(a,b)},
ml:function(a,b,c){return J.aJ(a).hd(a,b,c)},
mm:function(a,b,c,d){return J.aJ(a).hx(a,b,c,d)},
mn:function(a,b){return J.oG(a).al(a,b)},
e4:function(a,b){return J.k_(a).B(a,b)},
kb:function(a,b){return J.k_(a).F(a,b)},
mo:function(a){return J.aJ(a).gX(a)},
mp:function(a){return J.aJ(a).gbw(a)},
kP:function(a){return J.aJ(a).gdD(a)},
hI:function(a){return J.e_(a).gG(a)},
aL:function(a){return J.k_(a).gN(a)},
ax:function(a){return J.ct(a).gj(a)},
kQ:function(a){return J.k_(a).i9(a)},
mq:function(a,b){return J.aJ(a).ib(a,b)},
mr:function(a){return J.oH(a).il(a)},
e5:function(a){return J.e_(a).i(a)},
a:function a(){},
es:function es(){},
cN:function cN(){},
bA:function bA(){},
eQ:function eQ(){},
bM:function bM(){},
aR:function aR(){},
t:function t(a){this.$ti=a},
im:function im(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c0:function c0(){},
cM:function cM(){},
et:function et(){},
b9:function b9(){}},P={
nj:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.oy()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cq(new P.jx(q),1)).observe(s,{childList:true})
return new P.jw(q,s,r)}else if(self.setImmediate!=null)return P.oz()
return P.oA()},
nk:function(a){self.scheduleImmediate(H.cq(new P.jy(a),0))},
nl:function(a){self.setImmediate(H.cq(new P.jz(a),0))},
nm:function(a){P.kp(C.i,a)},
kp:function(a,b){var s=C.b.a1(a.a,1000)
return P.nw(s<0?0:s,b)},
lo:function(a,b){var s=C.b.a1(a.a,1000)
return P.nx(s<0?0:s,b)},
nw:function(a,b){var s=new P.dP()
s.eH(a,b)
return s},
nx:function(a,b){var s=new P.dP()
s.eI(a,b)
return s},
pP:function(a){return new P.cl(a,1)},
np:function(){return C.a_},
nq:function(a){return new P.cl(a,3)},
o1:function(a,b){return new P.dM(a,b.w("dM<0>"))},
on:function(){var s,r
for(s=$.co;s!=null;s=$.co){$.dY=null
r=s.b
$.co=r
if(r==null)$.dX=null
s.a.$0()}},
ot:function(){$.kF=!0
try{P.on()}finally{$.dY=null
$.kF=!1
if($.co!=null)$.kO().$1(P.lO())}},
or:function(a){var s=new P.fC(a),r=$.dX
if(r==null){$.co=$.dX=s
if(!$.kF)$.kO().$1(P.lO())}else $.dX=r.b=s},
os:function(a){var s,r,q,p=$.co
if(p==null){P.or(a)
$.dY=$.dX
return}s=new P.fC(a)
r=$.dY
if(r==null){s.b=p
$.co=$.dY=s}else{q=r.b
s.b=q
$.dY=r.b=s
if(q==null)$.dX=s}},
ln:function(a,b){var s=$.aI
if(s===C.e)return P.kp(a,b)
return P.kp(a,s.hC(b))},
nf:function(a,b){var s=$.aI
if(s===C.e)return P.lo(a,b)
return P.lo(a,s.dz(b,t.aF))},
lL:function(a,b,c,d,e){P.os(new P.jW(d,e))},
oo:function(a,b,c,d){var s,r=$.aI
if(r===c)return d.$0()
$.aI=c
s=r
try{r=d.$0()
return r}finally{$.aI=s}},
op:function(a,b,c,d,e){var s,r=$.aI
if(r===c)return d.$1(e)
$.aI=c
s=r
try{r=d.$1(e)
return r}finally{$.aI=s}},
jx:function jx(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
dP:function dP(){this.c=0},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cl:function cl(a,b){this.a=a
this.b=b},
cm:function cm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dM:function dM(a,b){this.a=a
this.$ti=b},
fC:function fC(a){this.a=a
this.b=null},
cc:function cc(){},
f8:function f8(){},
jP:function jP(){},
jW:function jW(a,b){this.a=a
this.b=b},
jE:function jE(){},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
mM:function(a,b,c){return H.oF(a,new H.X(b.w("@<0>").bp(c).w("X<1,2>")))},
P:function(a,b){return new H.X(a.w("@<0>").bp(b).w("X<1,2>"))},
cP:function(a){return new P.dA(a.w("dA<0>"))},
kv:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nr:function(a,b){var s=new P.dB(a,b)
s.c=a.e
return s},
mG:function(a,b,c){var s,r
if(P.kG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.af.push(a)
try{P.o0(a,s)}finally{if(0>=$.af.length)return H.f($.af,-1)
$.af.pop()}r=P.lj(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
kh:function(a,b,c){var s,r
if(P.kG(a))return b+"..."+c
s=new P.bF(b)
$.af.push(a)
try{r=s
r.a=P.lj(r.a,a,", ")}finally{if(0>=$.af.length)return H.f($.af,-1)
$.af.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kG:function(a){var s,r
for(s=$.af.length,r=0;r<s;++r)if(a===$.af[r])return!0
return!1},
o0:function(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.w(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.f(b,-1)
r=b.pop()
if(0>=b.length)return H.f(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.t()){if(j<=4){b.push(H.w(p))
return}r=H.w(p)
if(0>=b.length)return H.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.t();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.f(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.w(p)
r=H.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
l4:function(a,b){var s,r,q=P.cP(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)q.k(0,b.a(a[r]))
return q},
l5:function(a){var s,r={}
if(P.kG(a))return"{...}"
s=new P.bF("")
try{$.af.push(a)
s.a+="{"
r.a=!0
J.kb(a,new P.iu(r,s))
s.a+="}"}finally{if(0>=$.af.length)return H.f($.af,-1)
$.af.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dA:function dA(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jD:function jD(a){this.a=a
this.c=this.b=null},
dB:function dB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cL:function cL(){},
cQ:function cQ(){},
j:function j(){},
cS:function cS(){},
iu:function iu(a,b){this.a=a
this.b=b},
I:function I(){},
d8:function d8(){},
dI:function dI(){},
dC:function dC(){},
dU:function dU(){},
ee:function ee(){},
ei:function ei(){},
i8:function i8(){},
jj:function jj(){},
jk:function jk(){},
jN:function jN(a){this.b=0
this.c=a},
mF:function(a){if(a instanceof H.bu)return a.i(0)
return"Instance of '"+H.d6(a)+"'"},
eA:function(a,b,c,d){var s,r=c?J.ki(a,d):J.l3(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ir:function(a,b,c){var s,r=H.b([],c.w("t<0>"))
for(s=J.aL(a);s.t();)r.push(s.gC(s))
if(b)return r
return J.kj(r)},
mN:function(a,b,c){var s,r,q=J.ki(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.f(q,s)
q[s]=r}return q},
ko:function(a){var s=a,r=s.length,q=P.iR(0,null,r)
return H.n1(q<r?s.slice(0,q):s)},
n3:function(a){return new H.il(a,H.mL(a,!1,!0,!1,!1,!1))},
lj:function(a,b,c){var s=J.aL(b)
if(!s.t())return a
if(c.length===0){do a+=H.w(s.gC(s))
while(s.t())}else{a+=H.w(s.gC(s))
for(;s.t();)a=a+c+H.w(s.gC(s))}return a},
nJ:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.q){s=$.mj().b
s=s.test(b)}else s=!1
if(s)return b
r=C.L.hG(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.f(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.n0(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mC:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ek:function(a){if(a>=10)return""+a
return"0"+a},
kX:function(a){return new P.bv(1000*a)},
ib:function(a){if(typeof a=="number"||H.kE(a)||null==a)return J.e5(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mF(a)},
hK:function(a){return new P.e9(a)},
kc:function(a){return new P.ay(!1,null,null,a)},
eU:function(a,b){return new P.d7(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.d7(b,c,!0,a,d,"Invalid value")},
iR:function(a,b,c){if(0>a||a>c)throw H.c(P.ar(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ar(b,a,c,"end",null))
return b}return c},
eV:function(a,b){if(a<0)throw H.c(P.ar(a,0,null,b,null))
return a},
L:function(a,b,c,d,e){var s=e==null?J.ax(b):e
return new P.eq(s,!0,a,c,"Index out of range")},
B:function(a){return new P.fw(a)},
kr:function(a){return new P.ft(a)},
j1:function(a){return new P.bE(a)},
aN:function(a){return new P.eh(a)},
e:function(a){return new P.fP(a)},
kN:function(a){H.oU(a)},
W:function W(a,b){this.a=a
this.b=b},
bv:function bv(a){this.a=a},
i4:function i4(){},
i5:function i5(){},
H:function H(){},
e9:function e9(a){this.a=a},
fn:function fn(){},
eL:function eL(){},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eq:function eq(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fw:function fw(a){this.a=a},
ft:function ft(a){this.a=a},
bE:function bE(a){this.a=a},
eh:function eh(a){this.a=a},
eO:function eO(){},
de:function de(){},
ej:function ej(a){this.a=a},
fP:function fP(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
i:function i(){},
er:function er(){},
aq:function aq(){},
M:function M(){},
bF:function bF(a){this.a=a},
lR:function(a){var s,r,q,p
if(t.x.b(a)){s=J.kP(a)
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
return new P.dR(r,q,p)},
lQ:function(a){if(a instanceof P.dR)return{data:a.a,height:a.b,width:a.c}
return a},
bm:function(a){var s,r,q,p,o
if(a==null)return null
s=P.P(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.p)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
lH:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kE(a))return a
if(t.eO.b(a))return P.lP(a)
if(t.aH.b(a)){s=[]
J.kb(a,new P.jS(s))
a=s}return a},
lP:function(a){var s={}
J.kb(a,new P.jY(s))
return s},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a){this.a=a},
jY:function jY(a){this.a=a},
eo:function eo(a,b){this.a=a
this.b=b},
ie:function ie(){},
ig:function ig(){},
h8:function h8(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
ex:function ex(){},
aW:function aW(){},
eM:function eM(){},
iQ:function iQ(){},
ca:function ca(){},
f9:function f9(){},
n:function n(){},
aY:function aY(){},
fm:function fm(){},
fX:function fX(){},
fY:function fY(){},
h4:function h4(){},
h5:function h5(){},
hh:function hh(){},
hi:function hi(){},
hq:function hq(){},
hr:function hr(){},
hM:function hM(){},
eb:function eb(){},
hN:function hN(a){this.a=a},
ec:function ec(){},
b5:function b5(){},
eN:function eN(){},
fE:function fE(){},
c8:function c8(){},
f4:function f4(){},
hd:function hd(){},
he:function he(){}},W={
kR:function(){var s=document.createElement("a")
s.toString
return s},
hT:function(){var s=document.createElement("canvas")
s.toString
return s},
mE:function(a,b,c){var s=document.body
s.toString
s=new H.b0(new W.a5(C.l.am(s,a,b,c)),new W.i6(),t.ac.w("b0<j.E>"))
return t.h.a(s.gaR(s))},
i7:function(a){return"wheel"},
cE:function(a){var s,r,q="element tag unavailable"
try{s=J.aJ(a)
s.ge9(a)
q=s.ge9(a)}catch(r){H.b3(r)}return q},
jC:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lw:function(a,b,c,d){var s=W.jC(W.jC(W.jC(W.jC(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a0:function(a,b,c,d){var s=W.lM(new W.jA(c),t.aD)
if(s!=null&&!0)J.mm(a,b,s,!1)
return new W.dz(a,b,s,!1)},
lv:function(a){var s=W.kR(),r=window
s=new W.ck(new W.jH(s,r.location))
s.es(a)
return s},
nn:function(a,b,c,d){return!0},
no:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
o.href=c
s=o.hostname
p=p.b
if(s==p.hostname){r=o.port
q=p.port
q.toString
if(r===q){r=o.protocol
p=p.protocol
p.toString
p=r===p}else p=!1}else p=!1
if(!p)if(s==="")if(o.port===""){p=o.protocol
p=p===":"||p===""}else p=!1
else p=!1
else p=!0
return p},
lA:function(){var s=t.N,r=P.l4(C.u,s),q=H.b(["TEMPLATE"],t.s)
s=new W.hl(r,P.cP(s),P.cP(s),P.cP(s),null)
s.eF(null,new H.cU(C.u,new W.jK(),t.dv),q,null)
return s},
lM:function(a,b){var s=$.aI
if(s===C.e)return a
return s.dz(a,b)},
q:function q(){},
hJ:function hJ(){},
e7:function e7(){},
e8:function e8(){},
bQ:function bQ(){},
ed:function ed(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bU:function bU(){},
az:function az(){},
hY:function hY(){},
F:function F(){},
cA:function cA(){},
hZ:function hZ(){},
am:function am(){},
aO:function aO(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
cB:function cB(){},
cC:function cC(){},
el:function el(){},
i3:function i3(){},
fF:function fF(a,b){this.a=a
this.b=b},
C:function C(){},
i6:function i6(){},
l:function l(){},
d:function d(){},
aA:function aA(){},
em:function em(){},
en:function en(){},
ep:function ep(){},
aB:function aB(){},
ij:function ij(){},
by:function by(){},
bz:function bz(){},
bZ:function bZ(){},
bB:function bB(){},
is:function is(){},
iJ:function iJ(){},
eC:function eC(){},
iK:function iK(a){this.a=a},
eD:function eD(){},
iL:function iL(a){this.a=a},
aC:function aC(){},
eE:function eE(){},
ai:function ai(){},
a5:function a5(a){this.a=a},
r:function r(){},
d2:function d2(){},
aE:function aE(){},
eR:function eR(){},
eY:function eY(){},
iW:function iW(a){this.a=a},
f_:function f_(){},
at:function at(){},
f2:function f2(){},
aG:function aG(){},
f3:function f3(){},
aH:function aH(){},
f7:function f7(){},
j2:function j2(a){this.a=a},
aj:function aj(){},
bf:function bf(){},
dg:function dg(){},
fa:function fa(){},
fb:function fb(){},
cd:function cd(){},
au:function au(){},
ae:function ae(){},
fd:function fd(){},
fe:function fe(){},
ja:function ja(){},
av:function av(){},
bI:function bI(){},
fl:function fl(){},
je:function je(){},
b_:function b_(){},
ji:function ji(){},
fz:function fz(){},
bi:function bi(){},
ci:function ci(){},
cj:function cj(){},
fG:function fG(){},
dy:function dy(){},
fT:function fT(){},
dD:function dD(){},
hc:function hc(){},
hj:function hj(){},
fD:function fD(){},
fM:function fM(a){this.a=a},
kf:function kf(a,b){this.a=a
this.$ti=b},
dz:function dz(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jA:function jA(a){this.a=a},
ku:function ku(a){this.$ti=a},
ck:function ck(a){this.a=a},
K:function K(){},
d3:function d3(a){this.a=a},
iO:function iO(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(){},
jI:function jI(){},
jJ:function jJ(){},
hl:function hl(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jK:function jK(){},
hk:function hk(){},
cI:function cI(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jH:function jH(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a
this.b=0},
jO:function jO(a){this.a=a},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fQ:function fQ(){},
fR:function fR(){},
fV:function fV(){},
fW:function fW(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h6:function h6(){},
h7:function h7(){},
h9:function h9(){},
dK:function dK(){},
dL:function dL(){},
ha:function ha(){},
hb:function hb(){},
hg:function hg(){},
hm:function hm(){},
hn:function hn(){},
dN:function dN(){},
dO:function dO(){},
ho:function ho(){},
hp:function hp(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){}},K={e6:function e6(){},cK:function cK(){},aV:function aV(a){this.a=a},V:function V(a){this.a=a}},L={f5:function f5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},fk:function fk(a,b){this.b=a
this.c=b},jc:function jc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},dk:function dk(a,b){this.b=a
this.c=!1
this.a=b}},O={
hV:function(a){return new O.T(H.b([],a.w("t<0>")),a.w("T<0>"))},
T:function T(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
d_:function d_(a){this.a=a
this.b=null},
eB:function(a,b){return new O.cY(new V.G(0,0,0),a,b,new A.al(!1,!1,!1))},
cV:function cV(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(){},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(){},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(){},
iv:function iv(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cX:function cX(){},
iw:function iw(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cY:function cY(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iy:function iy(a){this.b=a},
iz:function iz(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iA:function iA(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
db:function db(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
f0:function f0(a){this.a=null
this.b=a
this.c=null},
bg:function bg(){},
dh:function dh(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.d=0
_.f=c
_.r=null},
bH:function bH(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.f=null}},E={
cF:function(a){var s=O.hV(t.l),r=new E.bw(s)
s.aQ(r.ghU(),r.ghX())
r.scQ(0,a)
r.saO(null)
r.scC(null)
return r},
ls:function(){var s=window.navigator.vendor
s.toString
if(C.d.A(s,"Google"))return C.B
s=window.navigator.userAgent
s.toString
if(C.d.A(s,"Firefox"))return C.m
s=window.navigator.appVersion
s.toString
if(C.d.A(s,"Trident")||C.d.A(s,"Edge"))return C.n
s=window.navigator.appName
s.toString
if(C.d.A(s,"Microsoft"))return C.n
return C.C},
lt:function(){var s=window.navigator.appVersion
s.toString
if(C.d.A(s,"Win"))return C.X
if(C.d.A(s,"Mac"))return C.v
if(C.d.A(s,"Linux"))return C.Y
return C.Z},
n4:function(a,b){var s
Date.now()
s=t.fA
s=new E.iS(a,new P.W(Date.now(),!1),new P.W(Date.now(),!1),new O.d_(H.b([],s)),new O.d_(H.b([],s)),new O.d_(H.b([],s)),H.b([null],t.bc),P.P(t.N,t.fg))
s.eq(a,b)
return s},
ne:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.lm(a,!0,!0,!0,!1)
s=W.hT()
r=s.style
r.width="100%"
r.height="100%"
J.mp(a).k(0,s)
return E.lm(s,!0,!0,!0,!1)},
lm:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.gW.a(C.f.cL(a,"webgl2",P.mM(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.e("Failed to get the rendering context for WebGL."))
s=E.n4(l,a)
H.hF(l.getParameter(3379))
m=H.hF(l.getParameter(34076))
r=H.b([],t.g9)
q=$.i9
p=new X.fx(a,r,(q==null?$.i9=new E.fN(E.ls(),E.lt()):q).a===C.m?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a0(o,"contextmenu",p.gfs(),!1))
r.push(W.a0(a,"focus",p.gfE(),!1))
r.push(W.a0(a,"blur",p.gfl(),!1))
r.push(W.a0(o,"keyup",p.gfI(),!1))
r.push(W.a0(o,"keydown",p.gfG(),!1))
r.push(W.a0(a,"mousedown",p.gfM(),!1))
r.push(W.a0(a,"mouseup",p.gfQ(),!1))
r.push(W.a0(a,n,p.gfO(),!1))
W.i7(a)
W.i7(a)
r.push(W.a0(a,W.i7(a),p.gfS(),!1))
r.push(W.a0(o,n,p.gfu(),!1))
r.push(W.a0(o,"mouseup",p.gfw(),!1))
r.push(W.a0(o,"pointerlockchange",p.gfU(),!1))
r.push(W.a0(a,"touchstart",p.gh9(),!1))
r.push(W.a0(a,"touchend",p.gh5(),!1))
r.push(W.a0(a,"touchmove",p.gh7(),!1))
m=new E.fi(a,s,new T.j6(l,m),p,new P.W(Date.now(),!1))
m.di()
return m},
hP:function hP(){},
bw:function bw(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bS:function bS(a){this.b=a},
c6:function c6(a){this.b=a},
fN:function fN(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c,d,e,f,g,h){var _=this
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
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
fi:function fi(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.z=null
_.cx=!1
_.cy=e
_.db=0},
j9:function j9(a){this.a=a}},Z={
kt:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cn(c)),35044)
a.bindBuffer(b,null)
return new Z.fA(b,s)},
aw:function(a){return new Z.bh(a)},
fA:function fA(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ch:function ch(a){this.a=a},
b6:function b6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a}},D={
D:function(){return new D.bx()},
hU:function hU(){},
bx:function bx(){var _=this
_.c=_.b=_.a=null
_.d=0},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
N:function N(){},
aP:function aP(){},
aQ:function aQ(){},
v:function v(a,b,c){this.c=a
this.d=b
this.e=c},
kW:function(a,b){var s=new D.bX(new V.G(1,1,1),V.ni(),V.ks(),V.nh()),r=s.a
s.a=b
b.gm().k(0,s.gev())
s.aF(new D.v("mover",r,s.a))
if(!s.b.n(0,a)){r=s.b
s.b=a
s.aF(new D.v("color",r,a))}return s},
bX:function bX(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cO:function cO(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={cw:function cw(a,b){this.a=a
this.b=b},ev:function ev(a,b){this.a=a
this.b=b},ip:function ip(a,b){this.c=a
this.d=b},cR:function cR(a,b,c){this.x=a
this.c=b
this.d=c},it:function it(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},c2:function c2(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},iM:function iM(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},c3:function c3(a,b,c){this.x=a
this.c=b
this.d=c},eT:function eT(){},dj:function dj(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},jd:function jd(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},fx:function fx(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
kg:function(a,b){var s=new V.a9(0,0,0,1),r=V.eX()
return new X.ii(s,a,r)},
lc:function(a){var s,r,q=new X.eP(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().k(0,q.geJ())
q.a0(new D.v("mover",s,q.b))}r=q.c
$.A().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.a0(new D.v("fov",r,1.0471975511965976))}r=q.d
$.A().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.a0(new D.v("near",r,0.1))}r=q.e
$.A().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.a0(new D.v("far",r,2000))}return q},
hO:function hO(a,b,c){var _=this
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
ii:function ii(a,b,c){var _=this
_.a=a
_.b=b
_.r=c
_.x=null},
ik:function ik(){this.b=null},
eP:function eP(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
j5:function j5(){}},V={
mB:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.c.b4(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.G(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.G(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.G(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
l=b>1?1:b
return new V.G(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
l=b>1?1:b
return new V.G(n,m,l)
default:n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.G(n,m,l)}},
ef:function(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
if(p<0)p=0
else if(p>1)p=1
return new V.a9(s,r,q,p)},
kL:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
ka:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.c.bK(a-b,s)
return(a<0?a+s:a)+b},
x:function(a,b,c){$.A().toString
return C.d.aq(C.c.cI(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
cs:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.p)(a),++p){o=a[p]
$.A().toString
n=C.d.aq(C.c.cI(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.f(l,m)
s=C.d.aq(l[m],q)
r=l.length
if(m>=r)return H.f(l,m)
l[m]=s}return l},
e1:function(a){return C.c.ij(Math.pow(2,C.c.b4(Math.log(a)/Math.log(2))))},
ac:function(){var s=$.d0
return s==null?$.d0=V.aU(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aU:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mR:function(a,b,c){return V.aU(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mQ:function(a,b,c){return V.aU(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
l8:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aU(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
l9:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aU(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
la:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aU(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
lb:function(a,b,c,d){d=V.ks()
return V.l7(V.ld(),d,new V.E(a,b,c))},
l7:function(a,b,c){var s=c.J(),r=b.bi(s).J(),q=s.bi(r),p=new V.E(a.a,a.b,a.c)
return V.aU(r.a,q.a,s.a,r.b9(0).a2(p),r.b,q.b,s.b,q.b9(0).a2(p),r.c,q.c,s.c,s.b9(0).a2(p),0,0,0,1)},
ld:function(){var s=$.aX
return s==null?$.aX=new V.a4(0,0,0):s},
eX:function(){var s=$.lf
return s==null?$.lf=V.km(0,0,1,1):s},
km:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eW(a,b,c,d)},
fy:function(){var s=$.lr
return s==null?$.lr=new V.E(0,0,0):s},
nh:function(){var s=$.jl
return s==null?$.jl=new V.E(-1,0,0):s},
ks:function(){var s=$.jm
return s==null?$.jm=new V.E(0,1,0):s},
ni:function(){var s=$.jn
return s==null?$.jn=new V.E(0,0,1):s},
ng:function(a,b,c){return new V.E(a,b,c)},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(){},
cZ:function cZ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ah:function ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
S:function S(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function(a){P.nf(C.O,new V.k9(a))},
n6:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.c(P.e("The html document body was null."))
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
W.a0(n,"scroll",new V.j0(s),!1)
return new V.iZ(o)},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
k9:function k9(a){this.a=a},
iZ:function iZ(a){this.a=a
this.b=null},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a}},U={
hX:function(){return new U.hW()},
kd:function(a){var s=V.ac(),r=new U.bW(s)
if(!s.n(0,a))r.a=a
return r},
l1:function(){var s=new U.bY(V.ac(),H.b([],t.eJ))
s.aQ(s.gex(),s.gfY())
return s},
hW:function hW(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
bW:function bW(a){this.a=a
this.b=null},
bY:function bY(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
U:function U(){},
c9:function c9(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
dv:function dv(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
dw:function dw(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.cx=_.ch=_.r=_.f=!1
_.db=_.cy=0
_.dx=d
_.dy=0
_.fr=e
_.fx=null},
dx:function dx(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={
kV:function(){var s,r,q,p,o=null,n=E.cF(o),m=new M.cz(n),l=F.kn(),k=l.ga4(),j=new V.E(-1,-1,1).J(),i=k.bt(new V.bb(1,2,4,6),V.ef(255,0,0,255),new V.a4(-1,-1,0),new V.S(0,1),j,o)
j=l.ga4()
k=new V.E(1,-1,1).J()
s=j.bt(new V.bb(0,3,4,6),V.ef(0,0,255,255),new V.a4(1,-1,0),new V.S(1,1),k,o)
k=l.ga4()
j=new V.E(1,1,1).J()
r=k.bt(new V.bb(0,2,5,6),V.ef(0,128,0,255),new V.a4(1,1,0),new V.S(1,0),j,o)
j=l.ga4()
k=$.a6
if(k==null)k=$.a6=new V.S(0,0)
q=new V.E(-1,1,1).J()
p=j.bt(new V.bb(0,2,4,7),V.ef(255,255,0,255),new V.a4(-1,1,0),k,q,o)
l.ga3().hy(H.b([i,s,r,p],t.k))
l.aL()
n.scQ(0,l)
m.sb0(o)
m.saN(0,o)
m.saO(o)
return m},
l_:function(){var s,r=O.hV(t.l),q=new M.cG(r)
r.aQ(q.gfn(),q.gfp())
s=X.kg(!0,null)
q.sb0(null)
q.saN(0,s)
return q},
cy:function cy(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
cz:function cz(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
cG:function cG(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mP:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gaw(a5)+a6.gaw(a6)+a7.gaw(a7)+a8.gaw(a8)+a9.gaw(a9)+b0.gaw(b0)+b1.gaw(b1)+b2.gaw(b2)+b3.gaw(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.p)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.p)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.p)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.p)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(o=b6.length,r=0;r<o;++r,p=!0)q+=b6[r].b
for(n=b7.length,r=0;r<n;++r,p=!0)q+=b7[r].b
if(!b1.a)n=b1.c
else n=!0
if(!n)if(!b2.a){n=b2.c
m=n}else m=!0
else m=!0
l=s>0
if(!a6.a)s=a6.c
else s=!0
if(!s){if(!a7.a)s=a7.c
else s=!0
if(!s){if(!a8.a)s=a8.c
else s=!0
if(!s)if(!a9.a)s=a9.c
else s=!0
else s=!0
k=s}else k=!0}else k=!0
s=!a9.a
if(s)n=a9.c
else n=!0
j=n||l||o>0||m
if(!a7.a)o=a7.c
else o=!0
if(!o){if(!a8.a)o=a8.c
else o=!0
if(!o){if(s)s=a9.c
else s=!0
i=s}else i=!0}else i=!0
if(!i){if(!b0.a)s=b0.c
else s=!0
h=s||m}else h=!0
if(!b0.a)g=b0.c
else g=!0
f=a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c||b2.c||b3.c
e=a4>0
d=h||g||j||!1
c=l&&i
a1=a1&&f
b=$.ab()
if(h){s=$.bp()
b=new Z.bh(b.a|s.a)}if(g)b=new Z.bh(b.a|$.bo().a)
if(f)b=new Z.bh(b.a|$.bq().a)
if(e)b=new Z.bh(b.a|$.bn().a)
return new A.ix(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jU:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jV:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jU(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hH(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
o6:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jU(b,r,"emission")
s=b.a+="\n"
s+="vec3 emissionColor()\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   return emissionClr;\n"
b.a=r}else if(r.c){r=s+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="}\n"
b.a=r
b.a=r+"\n"},
o2:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jV(b,r,"ambient")
b.a+="\n"},
o4:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jV(b,r,"diffuse")
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
o7:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jV(b,r,"invDiffuse")
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
od:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jV(b,r,"specular")
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
o9:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s=b.a=s+"\n"
if(a.f.c){s+="uniform samplerCube bumpTxt;\n"
b.a=s
s+="\n"
b.a=s}s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=a.f
q=r.a
if(!q)r=r.c
else r=!0
if(!r||q)s=b.a=s+"   return normalize(normalVec);\n"
else{s+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
b.a=s
s+="   vec3 n = normalize(normalVec);\n"
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
ob:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jU(b,r,"reflect")
s=b.a+="\n"
s+="vec3 reflect(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = reflectClr;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=r}else r=s
r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
oc:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jU(b,r,"refract")
s=b.a+="uniform float refraction;\n"
s+="\n"
b.a=s
s+="vec3 refract(vec3 refl)\n"
b.a=s
s=b.a=s+"{\n"
if(q)if(r.c){r=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=r}else{r=s+"   vec3 scalar = refractClr;\n"
b.a=r}else if(r.c){r=s+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
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
o3:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hH(r)
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
c.a=p+"\n"}p=t.s
o=H.b([],p)
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.p(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.b([],p)
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)o.push("ambientColor")
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
n=H.b([],p)
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)n.push("diffuse(norm, normDir)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.p(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
o5:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hH(r)
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
p=c.a+="uniform "+q+" "+r+"s["+j+"];\n"
if(s)for(o=0;o<j;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
p=t.s
m=H.b([],p)
l=a.b
if(!l.a)l=l.c
else l=!0
if(l)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.b([],p)
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(!p.a)p=p.c
else p=!0
if(p)k.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.p(k," + ")+");\n"}else c.a+="   highLight = "+C.a.p(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.p(m," + ")+");\n"
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
if(s){for(s=p,o=0;o<j;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}j=s}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+r+"Count) break;\n"
c.a=j
j+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
oa:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hH(r)
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
c.a=p+"\n"}p=t.s
j=H.b([],p)
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
m=c.a+="   return "+C.a.p(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.b([],p)
m=a.b
if(!m.a)m=m.c
else m=!0
if(m)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.b([],p)
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)i.push("diffuse(norm, normDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
p=a.e
if(!p.a)p=p.c
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
oe:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hH(r)
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
if(m){s=$.i9
if(s==null)s=$.i9=new E.fN(E.ls(),E.lt())
p=c.a
if(s.b===C.v){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}s=t.s
h=H.b([],s)
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
p=c.a+="   return "+C.a.p(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.b([],s)
p=a.b
if(!p.a)p=p.c
else p=!0
if(p)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.b([],s)
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)g.push("diffuse(norm, litVec)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.p(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.p(h," + ")+");\n"
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
o8:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.b([],t.s)
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)r.push("ambientColor")
s=a.c
if(!s.a)s=s.c
else s=!0
if(s)r.push("diffuse(norm, litVec)")
s=a.d
if(!s.a)s=s.c
else s=!0
if(s)r.push("invDiffuse(norm, litVec)")
s=a.e
if(!s.a)s=s.c
else s=!0
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
of:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.bF(""),i=""+"precision mediump float;\n"
j.a=i
i=j.a=i+"\n"
s=a.k4
if(s){i+="varying vec3 normalVec;\n"
j.a=i}if(a.r1){i+="varying vec3 binormalVec;\n"
j.a=i}if(a.r2){i+="varying vec2 txt2D;\n"
j.a=i}if(a.rx){i+="varying vec3 txtCube;\n"
j.a=i}if(a.k2){i+="varying vec3 objPos;\n"
j.a=i}i=j.a=(a.k3?j.a=i+"varying vec3 viewPos;\n":i)+"\n"
r=a.y1
if(r){i+="uniform mat4 colorMat;\n"
j.a=i}if(a.go){i+="uniform mat4 viewMat;\n"
j.a=i}if(a.dy)i=j.a=i+"uniform mat4 invViewMat;\n"
j.a=i+"\n"
A.o6(a,j)
A.o2(a,j)
A.o4(a,j)
A.o7(a,j)
A.od(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.ob(a,j)
A.oc(a,j)}A.o9(a,j)
q=j.a+="// === Alpha ===\n"
q=j.a=q+"\n"
p=a.y
o=p.a
if(o){q+="uniform float alpha;\n"
j.a=q}p=p.c
q=(p?j.a=q+"uniform samplerCube alphaTxt;\n":q)+"float alphaValue()\n"
j.a=q
q=j.a=q+"{\n"
if(!o)n=p
else n=!0
if(!n)q=j.a=q+"   return 1.0;\n"
else if(p){if(o){q+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
j.a=q}else{q+="   float a = textureCube(alphaTxt, txtCube).a;\n"
j.a=q}q+="   if (a <= 0.000001) discard;\n"
j.a=q
q+="   return a;\n"
j.a=q}else if(o){q+="   return alpha;\n"
j.a=q}q+="}\n"
j.a=q
j.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.p)(p),++m)A.o3(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.p)(p),++m)A.o5(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.p)(p),++m)A.oa(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.p)(p),++m)A.oe(a,p[m],j)
A.o8(a,j)}p=j.a+="// === Main ===\n"
p+="\n"
j.a=p
p+="void main()\n"
j.a=p
p+="{\n"
j.a=p
p=j.a=p+"   float alpha = alphaValue();\n"
s=s?j.a=p+"   vec3 norm = normal();\n":p
if(i)j.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
l=H.b([],t.s)
if(q){j.a+=u.o
l.push("lightAccum")
i=a.b
if(!i.a)i=i.c
else i=!0
if(i)j.a+="   setAmbientColor();\n"
i=a.c
if(!i.a)i=i.c
else i=!0
if(i)j.a+="   setDiffuseColor();\n"
i=a.d
if(!i.a)i=i.c
else i=!0
if(i)j.a+="   setInvDiffuseColor();\n"
i=a.e
if(!i.a)i=i.c
else i=!0
if(i)j.a+="   setSpecularColor();\n"
for(i=a.z,s=i.length,m=0;m<i.length;i.length===s||(0,H.p)(i),++m){q="barLight"+i[m].a
if(0>=q.length)return H.f(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.bc(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.p)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.f(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.bc(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.p)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.f(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.bc(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.p)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.f(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.bc(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
if(!i.a)i=i.c
else i=!0
if(i)l.push("emissionColor()")
i=a.r
if(!i.a)i=i.c
else i=!0
if(i)l.push("reflect(refl)")
i=a.x
if(!i.a)i=i.c
else i=!0
if(i)l.push("refract(refl)")
if(l.length<=0)l.push("vec3(0.0, 0.0, 0.0)")
i=j.a+="   vec4 objClr = vec4("+C.a.p(l," + ")+", alpha);\n"
if(r)i=j.a=i+"   objClr = colorMat*objClr;\n"
i+="   gl_FragColor = objClr;\n"
j.a=i
i=j.a=i+"}\n"
return i.charCodeAt(0)==0?i:i},
og:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.b3+"];\n"
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
oi:function(a,b){var s
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
oh:function(a,b){var s
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
ok:function(a,b){var s,r
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
ol:function(a,b){var s,r
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
oj:function(a,b){var s
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
om:function(a,b){var s
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
hH:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.d.bc(a,1)},
nd:function(a,b){var s,r,q,p=""+"precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n"
for(s=0;s<a;++s)p=p+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
p+="\nvec4 clrAccum;\n"
r=b===C.N
p=(r||b===C.t?p+"float colorCount;\n":p)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.M)p+="      clrAccum += color;\n"
else if(b===C.h)p+="      clrAccum = mix(clrAccum, color, color.a);\n"
else p=r?p+"      clrAccum += color;\n      colorCount += 1.0;\n":p+"      clrAccum = color;\n      colorCount = 1.0;\n"
p+="   }\n}\n\nvoid layoutAll()\n{\n"
q=b===C.t
if(q)for(s=a-1;s>=0;--s)p=p+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)p=p+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
p+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(r)p+="   colorCount = 1.0;\n"
else if(q)p+="   colorCount = 0.0;\n"
p+="   layoutAll();\n"
p=(r?p+"   clrAccum = clrAccum/colorCount;\n":p)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return p.charCodeAt(0)==0?p:p},
kq:function(a,b,c,d,e){var s=new A.fo(H.b([],t.t),a,c,e)
s.f=d
s.e=P.eA(d,0,!1,t.S)
return s},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a){this.a=a},
al:function al(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.dR=_.iB=_.dQ=_.dP=_.iA=_.dO=_.dN=_.dM=_.iz=_.dL=_.dK=_.dJ=_.iy=_.dI=_.dH=_.ix=_.dG=_.bz=_.by=_.b3=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cj=c
_.ck=d
_.cl=e
_.cm=f
_.cn=g
_.co=h
_.cp=i
_.cq=j
_.iE=_.iD=_.iC=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b4:function b4(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
ix:function ix(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.b3=b5
_.by=b6
_.bz=b7},
dp:function dp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
dq:function dq(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ds:function ds(a,b,c,d,e,f,g,h,i,j){var _=this
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
du:function du(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bd:function bd(){},
bV:function bV(a,b){this.a=a
this.b=b},
dc:function dc(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
dd:function dd(a,b){var _=this
_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
di:function di(a,b,c,d,e,f,g,h,i){var _=this
_.z=_.y=_.x=null
_.Q=a
_.ch=b
_.cx=c
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.a=h
_.b=i
_.d=_.c=""
_.r=_.f=_.e=null},
Y:function Y(){},
jh:function jh(a){this.a=a},
bJ:function bJ(a,b,c){this.a=a
this.c=b
this.d=c},
fp:function fp(a,b,c){this.a=a
this.c=b
this.d=c},
fq:function fq(a,b,c){this.a=a
this.c=b
this.d=c},
fr:function fr(a,b,c){this.a=a
this.c=b
this.d=c},
fo:function fo(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
dl:function dl(a,b,c){this.a=a
this.c=b
this.d=c},
ce:function ce(a,b,c){this.a=a
this.c=b
this.d=c},
dm:function dm(a,b,c){this.a=a
this.c=b
this.d=c},
dn:function dn(a,b,c){this.a=a
this.c=b
this.d=c},
fs:function fs(a,b,c){this.a=a
this.c=b
this.d=c},
dr:function dr(a,b,c){this.a=a
this.c=b
this.d=c},
bK:function bK(a,b,c){this.a=a
this.c=b
this.d=c},
bL:function bL(a,b,c){this.a=a
this.c=b
this.d=c},
dt:function dt(a,b,c){this.a=a
this.c=b
this.d=c},
oS:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2="testCanvas",c3=null,c4="modifiers",c5=V.n6("Test 043"),c6=W.hT()
c6.className="pageLargeCanvas"
c6.id=c2
c5.a.appendChild(c6).toString
s=t.s
c5.ds(H.b(["Test of the color picker, used to read the color of a pixel from a texture. It uses a back buffer with solid colored entities to pick which one to move. Also testing out the ability to screen shot a back buffer."],s))
c5.hw(H.b(["buttons"],s))
c5.ds(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(c2)
if(r==null)H.h(P.e("Failed to find an element with the identifier, testCanvas."))
q=E.ne(r,!0,!0,!0,!1)
p=U.l1()
c5=q.x
o=U.hX()
n=U.hX()
m=$.bN
if(m==null)m=$.bN=new V.a_(0,0)
m=new U.dw(o,n,new X.a3(!1,!1,!1),m,V.ac())
o.scJ(0,!0)
o.scz(6.283185307179586)
o.scB(0)
o.sah(0,0)
o.scA(100)
o.sZ(0)
o.sce(0.5)
l=m.gaY()
o.gm().k(0,l)
n.scJ(0,!0)
n.scz(6.283185307179586)
n.scB(0)
n.sah(0,0)
n.scA(100)
n.sZ(0)
n.sce(0.5)
n.gm().k(0,l)
o=new X.a3(!1,!1,!1)
if(!m.d.n(0,o)){k=m.d
m.d=o
m.I(new D.v(c4,k,o))}m.aK(c5)
p.k(0,m)
U.hX()
if($.bN==null)$.bN=new V.a_(0,0)
V.ac()
o=U.hX()
n=$.bN
if(n==null)n=$.bN=new V.a_(0,0)
n=new U.dv(o,new X.a3(!1,!1,!1),n,V.ac())
o.scJ(0,!0)
o.scz(6.283185307179586)
o.scB(0)
o.sah(0,0)
o.scA(100)
o.sZ(0)
o.sce(0.2)
o.gm().k(0,n.gaY())
o=new X.a3(!0,!1,!1)
if(!n.c.n(0,o)){k=n.c
n.c=o
n.I(new D.v(c4,k,o))}n.aK(c5)
p.k(0,n)
o=new X.a3(!1,!1,!1)
n=new U.dx(o,V.ac())
m=new X.a3(!1,!1,!1)
if(!o.n(0,m)){n.b=m
n.I(new D.v(c4,o,m))}n.aK(c5)
p.k(0,n)
p.k(0,U.kd(V.mR(0,0,5)))
j=X.lc(p)
o=q.f
i=o.dW("../resources/diceColor")
n=O.hV(t.gc)
h=new O.cV(n)
n.aQ(h.gfh(),h.gfj())
n=h.gcv()
n.gm().k(0,h.gdg())
n.gdV().k(0,h.ga6())
n=h.gcv()
m=U.kd(V.lb(-1,-1,-1,c3))
n.k(0,D.kW(new V.G(1,0.9,0.9),m))
n=h.gcv()
m=U.kd(V.lb(1,1,2,c3))
n.k(0,D.kW(new V.G(0.2,0.2,0.35),m))
n=h.gc8()
n.sb2(0,new V.G(0.2,0.2,0.2))
h.gc8().sbl(i)
n=h.gcf()
n.sb2(0,new V.G(0.8,0.8,0.8))
h.gcf().sbl(i)
n=h.gbL()
n.sb2(0,new V.G(0.7,0.7,0.7))
n=h.gbL()
n.c4(new A.al(!0,!1,n.c.c))
n.dl(10)
h.gdB().sbl(o.dW("../resources/diceBumpMap"))
g=H.b([],t.eC)
f=H.b([],t.dP)
e=F.kn()
F.dV(e,c3,c3,1,1,1,0,0,1)
F.dV(e,c3,c3,1,1,0,1,0,3)
F.dV(e,c3,c3,1,1,0,0,1,2)
F.dV(e,c3,c3,1,1,-1,0,0,0)
F.dV(e,c3,c3,1,1,0,-1,0,0)
F.dV(e,c3,c3,1,1,0,0,-1,3)
e.aL()
d=E.cF(e)
c=E.cF(c3)
b=E.cF(c3)
for(n=b.y,m=c.y,l=m.a,a=m.$ti.w("t<T.T>"),a0=n.a,a1=n.$ti.w("t<T.T>"),a2=-1.6;a2<=1.7;a2+=0.8)for(a3=-1.6;a3<=1.7;a3+=0.8)for(a4=-1.6;a4<=1.7;a4+=0.8){a5=new V.ah(1,0,0,a2,0,1,0,a3,0,0,1,a4,0,0,0,1).M(0,new V.ah(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
a6=$.d0
p=new U.c9(a6==null?$.d0=new V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):a6)
p.sec(0)
p.se5(0,0)
p.se8(0)
a6=p.d
$.A().toString
if(!(Math.abs(a6-0)<1e-9)){p.d=0
a7=p.y
if(a7!=null)a7.q(new D.v("deltaYaw",a6,0))}a6=p.e
$.A().toString
if(!(Math.abs(a6-0)<1e-9)){p.e=0
a7=p.y
if(a7!=null)a7.q(new D.v("deltaPitch",a6,0))}a6=p.f
$.A().toString
if(!(Math.abs(a6-0)<1e-9)){p.f=0
a7=p.y
if(a7!=null)a7.q(new D.v("deltaRoll",a6,0))}g.push(p)
a8=U.l1()
a6=H.J(a8).w("t<T.T>")
if(a8.ay(H.b([p],a6))){a7=a8.a
a9=a7.length
a7.push(p)
a7=H.b([p],a6)
b0=a8.c
if(b0!=null)b0.$2(a9,a7)}a7=$.d0
a7=new U.bW(a7==null?$.d0=new V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):a7)
a7.sP(0,a5)
if(a8.ay(H.b([a7],a6))){b0=a8.a
a9=b0.length
b0.push(a7)
a6=H.b([a7],a6)
a7=a8.c
if(a7!=null)a7.$2(a9,a6)}b1=E.cF(c3)
b1.saO(h)
b1.scC(a8)
a6=b1.y
a7=a6.$ti.w("t<T.T>")
if(a6.ay(H.b([d],a7))){b0=a6.a
a9=b0.length
b0.push(d)
a7=H.b([d],a7)
a6=a6.c
if(a6!=null)a6.$2(a9,a7)}if(m.ay(H.b([b1],a))){a9=l.length
l.push(b1)
a6=H.b([b1],a)
a7=m.c
if(a7!=null)a7.$2(a9,a6)}a6=V.mB(f.length/125,1,1)
i=new V.a9(Math.floor(a6.a*255)/255,Math.floor(a6.b*255)/255,Math.floor(a6.c*255)/255,Math.floor(255)/255)
f.push(i)
b2=E.cF(c3)
b2.saO(new O.f0(i))
b2.scC(a8)
a6=b2.y
a7=a6.$ti.w("t<T.T>")
if(a6.ay(H.b([d],a7))){b0=a6.a
a9=b0.length
b0.push(d)
a7=H.b([d],a7)
a6=a6.c
if(a6!=null)a6.$2(a9,a7)}if(n.ay(H.b([b2],a1))){a9=a0.length
a0.push(b2)
a6=H.b([b2],a1)
a7=n.c
if(a7!=null)a7.$2(a9,a6)}}n=T.lk(c3)
b3=new X.hO(n,new V.a9(0,0,0,1),V.eX())
b3.sar(0,512)
b3.san(0,512)
i=new V.a9(0,0,0,1)
if(!b3.cx.n(0,i)){k=b3.cx
b3.cx=i
b3.a0(new D.v("color",k,i))}m=b3.db
$.A().toString
if(!(Math.abs(m-2000)<1e-9)){b3.db=2000
b3.a0(new D.v("depth",m,2000))}if(!b3.f){b3.f=!0
b3.a0(new D.v("autoResize",!1,!0))}m=b3.r
$.A().toString
if(!(Math.abs(m-0.5)<1e-9)){b3.r=0.5
b3.a0(new D.v("autoResizeScalarX",m,0.5))}m=b3.x
$.A().toString
if(!(Math.abs(m-0.5)<1e-9)){b3.x=0.5
b3.a0(new D.v("autoResizeScalarY",m,0.5))}b4=V.eX()
if(!b3.dy.n(0,b4)){k=b3.dy
b3.dy=b4
b3.a0(new D.v("region",k,b4))}b5=M.l_()
b5.e.k(0,b)
b5.saN(0,b3)
b5.sb0(j)
b6=X.kg(!1,c3)
b7=M.l_()
b7.e.k(0,c)
b7.saN(0,b6)
b7.sb0(j)
m=o.dX("../resources/maskonaive",".jpg")
b8=M.kV()
l=new O.db(new V.G(1,1,1))
k=l.c
l.c=m
m.gm().k(0,l.ga6())
l.H(new D.v("boxTexture",k,l.c))
b8.saO(l)
b8.saN(0,b6)
b8.sb0(j)
m=O.hV(t.gb)
b9=new O.dh(new V.a9(0,0,0,0),m,C.h)
m.aQ(b9.gfA(),b9.gfC())
l=V.ac()
a=V.eX()
a0=V.eX()
l=new O.bH(l,a,a0)
a=V.km(0,0.75,0.25,0.25)
if(!a0.n(0,a)){l.d=a
l.H(new D.v("destination",a0,a))}a=l.a
if(a!==n){if(a!=null)a.gm().L(0,l.ga6())
k=l.a
l.a=n
n.gm().k(0,l.ga6())
l.H(new D.v("texture",k,l.a))}m.k(0,l)
c0=M.kV()
c0.saO(b9)
c0.saN(0,b6)
m=q.z
if(m==null)m=q.z=D.D()
m.k(0,new A.k5(g))
o=new T.eg(o)
c1=new X.a3(!1,!1,!1)
o.c=c1
o.bo(new D.v(c4,c3,c1))
m=o.d
if(m!==n){if(m!=null)m.gm().L(0,o.gd_())
k=o.d
o.d=n
n.gm().k(0,o.gd_())
o.bo(new D.v("texture",k,o.d))}o.aK(c5)
c5=o.x
if(c5==null)c5=o.x=D.D()
c5.k(0,new A.k6(f,g))
c5=t.ba
o=H.b([b5,b8,b7,c0],c5)
c5=new M.cy(H.b([],c5))
c5.aQ(c5.gh1(),c5.gh3())
c5.a7(0,o)
o=q.d
if(o!==c5){if(o!=null)o.gm().L(0,q.gcX())
q.d=c5
c5.gm().k(0,q.gcX())
q.cY()}r=s.getElementById("buttons")
if(r==null)H.h("Failed to find buttons for ButtonGroup")
new V.hR(r,H.b([],t.dn)).hv(0,"Back target snapshot",new A.k7(q,b3))
V.oV(q)},
k5:function k5(a){this.a=a},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a,b){this.a=a
this.b=b}},F={
jT:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dV:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.E(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.E(s+a4,r+a2,q+a3)
o=new V.E(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.E(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jT(h)
j=F.jT(g)
a.hT(F.oZ(a0,a1,new F.jQ(i,F.jT(f),F.jT(e),j,k,c),b))},
oZ:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null
if(a<1)throw H.c(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.e("Must have 1 or more divisions of the height for a surface."))
s=F.kn()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.y(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=F.jo(d,d,new V.a9(m,0,0,1),d,d,new V.S(o,1),d,d,0)
n.k(0,l)
c.$3(l,o,0)
q.push(l.cd(a0))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.y(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=F.jo(d,d,new V.a9(g,f,e,1),d,d,new V.S(o,j),d,d,0)
h.k(0,l)
c.$3(l,o,k)
q.push(l.cd(a0))}}s.ga3().hz(a+1,b+1,q)
return s},
kn:function(){return new F.iX()},
jo:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cg()
h=$.mf()
s=$.ab()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bp().a)!==0)q.r=e
if((r&$.bo().a)!==0)q.x=b
if((r&$.bP().a)!==0)q.y=f
if((r&$.bq().a)!==0)q.z=g
if((r&$.mg().a)!==0)q.Q=c
if((r&$.cu().a)!==0)q.ch=i
if((r&$.bn().a)!==0)q.cx=a
return q},
jQ:function jQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
an:function an(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ey:function ey(){this.b=this.a=null},
eS:function eS(){this.a=null},
iX:function iX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iY:function iY(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d9:function d9(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
cb:function cb(a,b){this.a=a
this.b=b},
cg:function cg(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jv:function jv(a){this.a=a},
ju:function ju(a){this.a=a},
y:function y(a,b){this.a=a
this.b=!1
this.c=b},
jp:function jp(a,b,c){this.b=a
this.c=b
this.d=c},
jq:function jq(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
js:function js(a,b){this.b=a
this.c=b},
jt:function jt(a){this.b=a}},T={
lk:function(a){return new T.fg(a)},
ll:function(a,b,c,d,e,f,g){var s,r,q,p
if(e==null)e=b.r
if(d==null)d=b.x
s=b.x
r=a.createFramebuffer()
r.toString
a.bindFramebuffer(36160,r)
a.readBuffer(36064)
a.framebufferTexture2D(36160,36064,3553,b.b,0)
q=new Uint8Array(e*d*4)
a.readPixels(f,s-d-g,e,d,6408,5121,q)
a.bindFramebuffer(36160,null)
p=new T.j8(q,e,d)
p.f_()
return p},
eg:function eg(a){var _=this
_.a=a
_.x=_.d=_.c=_.b=null
_.ch=_.Q=!1},
cx:function cx(a,b){this.c=a
this.d=b},
bG:function bG(){},
ff:function ff(){},
fg:function fg(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
fh:function fh(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},
j6:function j6(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},
j7:function j7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kk.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gG:function(a){return H.d5(a)},
i:function(a){return"Instance of '"+H.d6(a)+"'"}}
J.es.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iag:1}
J.cN.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.bA.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.eQ.prototype={}
J.bM.prototype={}
J.aR.prototype={
i:function(a){var s=a[$.m3()]
if(s==null)return this.el(a)
return"JavaScript function for "+J.e5(s)},
$icJ:1}
J.t.prototype={
L:function(a,b){var s
if(!!a.fixed$length)H.h(P.B("remove"))
for(s=0;s<a.length;++s)if(J.a2(a[s],b)){a.splice(s,1)
return!0}return!1},
a7:function(a,b){if(!!a.fixed$length)H.h(P.B("addAll"))
this.eM(a,b)
return},
eM:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aN(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aN(a))}},
p:function(a,b){var s,r,q=a.length,p=P.eA(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.w(a[s])
if(s>=q)return H.f(p,s)
p[s]=r}return p.join(b)},
hR:function(a){return this.p(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
gcs:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.l2())},
dt:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.aN(a))}return!1},
bb:function(a,b){if(!!a.immutable$list)H.h(P.B("sort"))
H.n9(a,b==null?J.nU():b)},
eg:function(a){return this.bb(a,null)},
A:function(a,b){var s
for(s=0;s<a.length;++s)if(J.a2(a[s],b))return!0
return!1},
i:function(a){return P.kh(a,"[","]")},
gN:function(a){return new J.a8(a,a.length)},
gG:function(a){return H.d5(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.h(P.B("set length"))
if(b>a.length)H.kC(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cr(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.h(P.B("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cr(a,b))
a[b]=c},
$im:1,
$ii:1,
$io:1}
J.im.prototype={}
J.a8.prototype={
gC:function(a){return H.J(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.p(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.c0.prototype={
al:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbB(b)
if(this.gbB(a)===s)return 0
if(this.gbB(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbB:function(a){return a===0?1/a<0:a<0},
ij:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.B(""+a+".toInt()"))},
b4:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.B(""+a+".floor()"))},
S:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.B(""+a+".round()"))},
cI:function(a,b){var s
if(b>20)throw H.c(P.ar(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbB(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bK:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
en:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.B("Result of truncating division is "+H.w(s)+": "+H.w(a)+" ~/ "+b))},
br:function(a,b){var s
if(a>0)s=this.hm(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hm:function(a,b){return b>31?0:a>>>b},
$iZ:1,
$ia1:1}
J.cM.prototype={$ik:1}
J.et.prototype={}
J.b9.prototype={
cc:function(a,b){if(b<0)throw H.c(H.cr(a,b))
if(b>=a.length)H.h(H.cr(a,b))
return a.charCodeAt(b)},
d3:function(a,b){if(b>=a.length)throw H.c(H.cr(a,b))
return a.charCodeAt(b)},
a_:function(a,b){return a+b},
eh:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
cT:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eU(b,null))
if(b>c)throw H.c(P.eU(b,null))
if(c>a.length)throw H.c(P.eU(c,null))
return a.substring(b,c)},
bc:function(a,b){return this.cT(a,b,null)},
il:function(a){return a.toLowerCase()},
M:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.K)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aq:function(a,b){var s=b-a.length
if(s<=0)return a
return this.M(" ",s)+a},
hE:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.ar(c,0,s,null,null))
return H.lZ(a,b,c)},
A:function(a,b){return this.hE(a,b,0)},
al:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gG:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$iu:1}
H.ew.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.Q.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.cc(this.a,b)}}
H.m.prototype={}
H.c1.prototype={
gN:function(a){return new H.bC(this,this.gj(this))},
bJ:function(a,b){return this.ek(0,b)}}
H.df.prototype={
geX:function(){var s=J.ax(this.a),r=this.c
if(r==null||r>s)return s
return r},
ghn:function(){var s=J.ax(this.a),r=this.b
if(r>s)return s
return r},
gj:function(a){var s,r=J.ax(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.aS()
return s-q},
B:function(a,b){var s=this,r=s.ghn()+b
if(b<0||r>=s.geX())throw H.c(P.L(b,s,"index",null,null))
return J.e4(s.a,r)},
cH:function(a,b){var s,r,q,p,o=this,n=o.b,m=o.a,l=J.ct(m),k=l.gj(m),j=o.c
if(j!=null&&j<k)k=j
s=k-n
if(s<=0){m=J.l3(0,o.$ti.c)
return m}r=P.eA(s,l.B(m,n),!1,o.$ti.c)
for(q=1;q<s;++q){p=l.B(m,n+q)
if(q>=r.length)return H.f(r,q)
r[q]=p
if(l.gj(m)<k)throw H.c(P.aN(o))}return r}}
H.bC.prototype={
gC:function(a){return H.J(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.ct(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.aN(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
H.aT.prototype={
gN:function(a){return new H.cT(J.aL(this.a),this.b)},
gj:function(a){return J.ax(this.a)},
B:function(a,b){return this.b.$1(J.e4(this.a,b))}}
H.cD.prototype={$im:1}
H.cT.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.J(this).Q[1].a(this.a)}}
H.cU.prototype={
gj:function(a){return J.ax(this.a)},
B:function(a,b){return this.b.$1(J.e4(this.a,b))}}
H.b0.prototype={
gN:function(a){return new H.fB(J.aL(this.a),this.b)}}
H.fB.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cH.prototype={}
H.fv.prototype={
l:function(a,b,c){throw H.c(P.B("Cannot modify an unmodifiable list"))},
T:function(a,b,c,d,e){throw H.c(P.B("Cannot modify an unmodifiable list"))},
ax:function(a,b,c,d){return this.T(a,b,c,d,0)}}
H.cf.prototype={}
H.jf.prototype={
ap:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.d4.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eu.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.fu.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.iP.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.hf.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bu.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.m1(r==null?"unknown":r)+"'"},
$icJ:1,
giq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fc.prototype={}
H.f6.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.m1(s)+"'"}}
H.bR.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bR))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.d5(this.a)
else s=typeof r!=="object"?J.hI(r):H.d5(r)
return(s^H.d5(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.w(this.d)+"' of "+("Instance of '"+H.d6(s)+"'")}}
H.eZ.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.X.prototype={
gj:function(a){return this.a},
gad:function(a){return new H.ap(this,H.J(this).w("ap<1>"))},
gip:function(a){var s=H.J(this)
return H.mO(new H.ap(this,s.w("ap<1>")),new H.io(this),s.c,s.Q[1])},
hF:function(a,b){var s=this.b
if(s==null)return!1
return this.eT(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bq(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bq(p,b)
q=r==null?n:r.b
return q}else return o.hQ(b)},
hQ:function(a){var s,r,q=this.d
if(q==null)return null
s=this.d9(q,J.hI(a)&0x3ffffff)
r=this.dS(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.d0(s==null?m.b=m.c1():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.d0(r==null?m.c=m.c1():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.c1()
p=J.hI(b)&0x3ffffff
o=m.d9(q,p)
if(o==null)m.c5(q,p,[m.c2(b,c)])
else{n=m.dS(o,b)
if(n>=0)o[n].b=c
else o.push(m.c2(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aN(s))
r=r.c}},
d0:function(a,b,c){var s=this.bq(a,b)
if(s==null)this.c5(a,b,this.c2(b,c))
else s.b=c},
f6:function(){this.r=this.r+1&67108863},
c2:function(a,b){var s,r=this,q=new H.iq(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.f6()
return q},
dS:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1},
i:function(a){return P.l5(this)},
bq:function(a,b){return a[b]},
d9:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
eW:function(a,b){delete a[b]},
eT:function(a,b){return this.bq(a,b)!=null},
c1:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c5(r,s,r)
this.eW(r,s)
return r}}
H.io.prototype={
$1:function(a){var s=this.a
return H.J(s).Q[1].a(s.h(0,a))},
$S:function(){return H.J(this.a).w("2(1)")}}
H.iq.prototype={}
H.ap.prototype={
gj:function(a){return this.a.a},
gN:function(a){var s=this.a,r=new H.ez(s,s.r)
r.c=s.e
return r}}
H.ez.prototype={
gC:function(a){return H.J(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aN(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.k1.prototype={
$1:function(a){return this.a(a)},
$S:44}
H.k2.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.k3.prototype={
$1:function(a){return this.a(a)},
$S:30}
H.il.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.j3.prototype={}
H.kx.prototype={
t:function(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new H.j3(s,o)
q.c=r===q.c?r+1:r
return!0},
gC:function(a){var s=this.d
s.toString
return s}}
H.d1.prototype={
f0:function(a,b,c,d){var s=P.ar(b,0,c,d,null)
throw H.c(s)},
d2:function(a,b,c,d){if(b>>>0!==b||b>c)this.f0(a,b,c,d)}}
H.c4.prototype={
gj:function(a){return a.length},
dk:function(a,b,c,d,e){var s,r,q=a.length
this.d2(a,b,q,"start")
this.d2(a,c,q,"end")
if(b>c)throw H.c(P.ar(b,0,c,null,null))
s=c-b
r=d.length
if(r-e<s)throw H.c(P.j1("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iz:1}
H.ba.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]},
l:function(a,b,c){H.b1(b,a,a.length)
a[b]=c},
T:function(a,b,c,d,e){if(t.d4.b(d)){this.dk(a,b,c,d,e)
return}this.cU(a,b,c,d,e)},
ax:function(a,b,c,d){return this.T(a,b,c,d,0)},
$im:1,
$ii:1,
$io:1}
H.ad.prototype={
l:function(a,b,c){H.b1(b,a,a.length)
a[b]=c},
T:function(a,b,c,d,e){if(t.eB.b(d)){this.dk(a,b,c,d,e)
return}this.cU(a,b,c,d,e)},
ax:function(a,b,c,d){return this.T(a,b,c,d,0)},
$im:1,
$ii:1,
$io:1}
H.eF.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eG.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eH.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eI.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eJ.prototype={
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.c5.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.eK.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b1(b,a,a.length)
return a[b]}}
H.dE.prototype={}
H.dF.prototype={}
H.dG.prototype={}
H.dH.prototype={}
H.as.prototype={
w:function(a){return H.ht(v.typeUniverse,this,a)},
bp:function(a){return H.nH(v.typeUniverse,this,a)}}
H.fS.prototype={}
H.fO.prototype={
i:function(a){return this.a}}
H.dQ.prototype={}
P.jx.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:33}
P.jw.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:39}
P.jy.prototype={
$0:function(){this.a.$0()},
$S:10}
P.jz.prototype={
$0:function(){this.a.$0()},
$S:10}
P.dP.prototype={
eH:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cq(new P.jM(this,b),0),a)
else throw H.c(P.B("`setTimeout()` not found."))},
eI:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cq(new P.jL(this,a,Date.now(),b),0),a)
else throw H.c(P.B("Periodic timer."))},
$ijb:1}
P.jM.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jL.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.b.en(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.cl.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.w(this.a)+")"}}
P.cm.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.cl){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.f(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aL(s)
if(o instanceof P.cm){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dM.prototype={
gN:function(a){return new P.cm(this.a())}}
P.fC.prototype={}
P.cc.prototype={}
P.f8.prototype={}
P.jP.prototype={}
P.jW.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jE.prototype={
ie:function(a){var s,r,q,p=null
try{if(C.e===$.aI){a.$0()
return}P.oo(p,p,this,a)}catch(q){s=H.b3(q)
r=H.kJ(q)
P.lL(p,p,this,s,r)}},
ig:function(a,b){var s,r,q,p=null
try{if(C.e===$.aI){a.$1(b)
return}P.op(p,p,this,a,b)}catch(q){s=H.b3(q)
r=H.kJ(q)
P.lL(p,p,this,s,r)}},
ih:function(a,b){return this.ig(a,b,t.z)},
hC:function(a){return new P.jF(this,a)},
dz:function(a,b){return new P.jG(this,a,b)}}
P.jF.prototype={
$0:function(){return this.a.ie(this.b)},
$S:2}
P.jG.prototype={
$1:function(a){return this.a.ih(this.b,a)},
$S:function(){return this.c.w("~(0)")}}
P.dA.prototype={
gN:function(a){var s=new P.dB(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
A:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eS(b)
return r}},
eS:function(a){var s=this.d
if(s==null)return!1
return this.bZ(s[this.bW(a)],a)>=0},
k:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.d4(s==null?q.b=P.kv():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.d4(r==null?q.c=P.kv():r,b)}else return q.eL(0,b)},
eL:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kv()
s=q.bW(b)
r=p[s]
if(r==null)p[s]=[q.bV(b)]
else{if(q.bZ(r,b)>=0)return!1
r.push(q.bV(b))}return!0},
L:function(a,b){if((b&1073741823)===b)return this.hc(this.c,b)
else return this.hb(0,b)},
hb:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bW(b)
r=n[s]
q=o.bZ(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dq(p)
return!0},
d4:function(a,b){if(a[b]!=null)return!1
a[b]=this.bV(b)
return!0},
hc:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.dq(s)
delete a[b]
return!0},
d5:function(){this.r=this.r+1&1073741823},
bV:function(a){var s,r=this,q=new P.jD(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d5()
return q},
dq:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d5()},
bW:function(a){return J.hI(a)&1073741823},
bZ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1}}
P.jD.prototype={}
P.dB.prototype={
gC:function(a){return H.J(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aN(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cL.prototype={}
P.cQ.prototype={$im:1,$ii:1,$io:1}
P.j.prototype={
gN:function(a){return new H.bC(a,this.gj(a))},
B:function(a,b){return this.h(a,b)},
F:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.aN(a))}},
gdT:function(a){return this.gj(a)===0},
cH:function(a,b){var s,r,q,p,o=this
if(o.gdT(a)){s=J.ki(0,H.aK(a).w("j.E"))
return s}r=o.h(a,0)
q=P.eA(o.gj(a),r,!0,H.aK(a).w("j.E"))
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.f(q,p)
q[p]=s}return q},
ik:function(a){return this.cH(a,!0)},
T:function(a,b,c,d,e){var s,r,q,p,o
P.iR(b,c,this.gj(a))
s=c-b
if(s===0)return
P.eV(e,"skipCount")
if(H.aK(a).w("o<j.E>").b(d)){r=e
q=d}else{q=H.nb(d,e,null,H.aK(d).w("j.E")).cH(0,!1)
r=0}p=J.ct(q)
if(r+s>p.gj(q))throw H.c(H.mH())
if(r<b)for(o=s-1;o>=0;--o)this.l(a,b+o,p.h(q,r+o))
else for(o=0;o<s;++o)this.l(a,b+o,p.h(q,r+o))},
ax:function(a,b,c,d){return this.T(a,b,c,d,0)},
ed:function(a,b,c){this.ax(a,b,b+c.length,c)},
i:function(a){return P.kh(a,"[","]")}}
P.cS.prototype={}
P.iu.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.w(a)
r.a=s+": "
r.a+=H.w(b)},
$S:28}
P.I.prototype={
F:function(a,b){var s,r,q
for(s=J.aL(this.gad(a)),r=H.aK(a).w("I.V");s.t();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.ax(this.gad(a))},
i:function(a){return P.l5(a)},
$iR:1}
P.d8.prototype={
a7:function(a,b){var s
for(s=J.aL(b);s.t();)this.k(0,s.gC(s))},
i:function(a){return P.kh(this,"{","}")},
B:function(a,b){var s,r,q,p,o="index"
H.oB(b,o,t.S)
P.eV(b,o)
for(s=P.nr(this,this.r),r=H.J(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.L(b,this,o,null,q))}}
P.dI.prototype={$im:1,$ii:1}
P.dC.prototype={}
P.dU.prototype={}
P.ee.prototype={}
P.ei.prototype={}
P.i8.prototype={}
P.jj.prototype={}
P.jk.prototype={
hG:function(a){var s,r,q,p=P.iR(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jN(r)
if(q.eZ(a,0,p)!==p){C.d.cc(a,p-1)
q.c7()}return new Uint8Array(r.subarray(0,H.nM(0,q.b,s)))}}
P.jN.prototype={
c7:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.f(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.f(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.f(r,q)
r[q]=189},
hu:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.f(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.f(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.f(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.f(r,p)
r[p]=s&63|128
return!0}else{n.c7()
return!1}},
eZ:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.d.cc(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.d.d3(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hu(p,C.d.d3(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c7()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.f(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.f(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.f(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.f(s,o)
s[o]=p&63|128}}}return q}}
P.W.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.W&&this.a===b.a&&!0},
al:function(a,b){return C.b.al(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.b.br(s,30))&1073741823},
i:function(a){var s=this,r=P.mC(H.n_(s)),q=P.ek(H.mY(s)),p=P.ek(H.mU(s)),o=P.ek(H.mV(s)),n=P.ek(H.mX(s)),m=P.ek(H.mZ(s)),l=P.mD(H.mW(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bv.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a},
gG:function(a){return C.b.gG(this.a)},
al:function(a,b){return C.b.al(this.a,b.a)},
i:function(a){var s,r,q,p=new P.i5(),o=this.a
if(o<0)return"-"+new P.bv(0-o).i(0)
s=p.$1(C.b.a1(o,6e7)%60)
r=p.$1(C.b.a1(o,1e6)%60)
q=new P.i4().$1(o%1e6)
return""+C.b.a1(o,36e8)+":"+s+":"+r+"."+q}}
P.i4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.i5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.H.prototype={}
P.e9.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.ib(s)
return"Assertion failed"}}
P.fn.prototype={}
P.eL.prototype={
i:function(a){return"Throw of null."}}
P.ay.prototype={
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.w(n),l=q.gbY()+o+m
if(!q.a)return l
s=q.gbX()
r=P.ib(q.b)
return l+s+": "+r}}
P.d7.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.w(q):""
else if(q==null)s=": Not greater than or equal to "+H.w(r)
else if(q>r)s=": Not in inclusive range "+H.w(r)+".."+H.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.w(r)
return s}}
P.eq.prototype={
gbY:function(){return"RangeError"},
gbX:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.fw.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ft.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bE.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eh.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ib(s)+"."}}
P.eO.prototype={
i:function(a){return"Out of Memory"},
$iH:1}
P.de.prototype={
i:function(a){return"Stack Overflow"},
$iH:1}
P.ej.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fP.prototype={
i:function(a){return"Exception: "+this.a}}
P.ih.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.d.cT(q,0,75)+"..."
return r+"\n"+q}}
P.i.prototype={
bJ:function(a,b){return new H.b0(this,b,H.J(this).w("b0<i.E>"))},
gj:function(a){var s,r=this.gN(this)
for(s=0;r.t();)++s
return s},
gaR:function(a){var s,r=this.gN(this)
if(!r.t())throw H.c(H.l2())
s=r.gC(r)
if(r.t())throw H.c(H.mI())
return s},
B:function(a,b){var s,r,q
P.eV(b,"index")
for(s=this.gN(this),r=0;s.t();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.L(b,this,"index",null,r))},
i:function(a){return P.mG(this,"(",")")}}
P.er.prototype={}
P.aq.prototype={
gG:function(a){return P.M.prototype.gG.call(C.Q,this)},
i:function(a){return"null"}}
P.M.prototype={constructor:P.M,$iM:1,
n:function(a,b){return this===b},
gG:function(a){return H.d5(this)},
i:function(a){return"Instance of '"+H.d6(this)+"'"},
toString:function(){return this.i(this)}}
P.bF.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.q.prototype={}
W.hJ.prototype={
gj:function(a){return a.length}}
W.e7.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.e8.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bQ.prototype={$ibQ:1}
W.ed.prototype={}
W.br.prototype={$ibr:1}
W.bs.prototype={$ibs:1}
W.bt.prototype={
cL:function(a,b,c){if(c!=null)return a.getContext(b,P.lP(c))
return a.getContext(b)},
cK:function(a,b){return this.cL(a,b,null)},
$ibt:1}
W.bU.prototype={
hJ:function(a,b,c){var s=P.lR(a.createImageData(b,c))
return s},
i8:function(a,b,c,d){a.putImageData(P.lQ(b),c,d)
return},
$ibU:1}
W.az.prototype={
gj:function(a){return a.length}}
W.hY.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.cA.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hZ.prototype={}
W.am.prototype={}
W.aO.prototype={}
W.i_.prototype={
gj:function(a){return a.length}}
W.i0.prototype={
gj:function(a){return a.length}}
W.i1.prototype={
gj:function(a){return a.length}}
W.i2.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cB.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.cC.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.w(r)+", "
s=a.top
s.toString
return r+H.w(s)+") "+H.w(this.gar(a))+" x "+H.w(this.gan(a))},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aJ(b)
if(s===r.gbC(b)){s=a.top
s.toString
s=s===r.gbG(b)&&this.gar(a)===r.gar(b)&&this.gan(a)===r.gan(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.c.gG(r)
s=a.top
s.toString
return W.lw(r,C.c.gG(s),C.c.gG(this.gar(a)),C.c.gG(this.gan(a)))},
gdA:function(a){var s=a.bottom
s.toString
return s},
gda:function(a){return a.height},
gan:function(a){var s=this.gda(a)
s.toString
return s},
gbC:function(a){var s=a.left
s.toString
return s},
gcG:function(a){var s=a.right
s.toString
return s},
gbG:function(a){var s=a.top
s.toString
return s},
gdr:function(a){return a.width},
gar:function(a){var s=this.gdr(a)
s.toString
return s},
$iaa:1}
W.el.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.i3.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fF.prototype={
gdT:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.f(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.f(s,b)
this.a.replaceChild(c,s[b]).toString},
k:function(a,b){this.a.appendChild(b).toString
return b},
gN:function(a){var s=this.ik(this)
return new J.a8(s,s.length)},
T:function(a,b,c,d,e){throw H.c(P.kr(null))},
ax:function(a,b,c,d){return this.T(a,b,c,d,0)}}
W.C.prototype={
gX:function(a){return new W.fM(a)},
gbw:function(a){var s=a.children
s.toString
return new W.fF(a,s)},
gdC:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.aa(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
am:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kZ
if(s==null){s=H.b([],t.Q)
r=new W.d3(s)
s.push(W.lv(null))
s.push(W.lA())
$.kZ=r
d=r}else d=s
s=$.kY
if(s==null){s=new W.hu(d)
$.kY=s
c=s}else{s.a=d
c=s}}if($.b8==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.b8=r
r=r.createRange()
r.toString
$.ke=r
r=$.b8.createElement("base")
t.cR.a(r)
s=s.baseURI
s.toString
r.href=s
$.b8.head.appendChild(r).toString}s=$.b8
if(s.body==null){r=s.createElement("body")
s.body=t.Y.a(r)}s=$.b8
if(t.Y.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.b8.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.A(C.T,s)}else s=!1
if(s){$.ke.selectNodeContents(q)
s=$.ke
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.b8.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.b8.body)J.kQ(q)
c.cM(p)
document.adoptNode(p).toString
return p},
hI:function(a,b,c){return this.am(a,b,c,null)},
ee:function(a,b){var s
a.textContent=null
s=a.appendChild(this.am(a,b,null,null))
s.toString},
ge9:function(a){var s=a.tagName
s.toString
return s},
$iC:1}
W.i6.prototype={
$1:function(a){return t.h.b(a)},
$S:22}
W.l.prototype={$il:1}
W.d.prototype={
hx:function(a,b,c,d){if(c!=null)this.eN(a,b,c,!1)},
eN:function(a,b,c,d){return a.addEventListener(b,H.cq(c,1),!1)},
$id:1}
W.aA.prototype={$iaA:1}
W.em.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.en.prototype={
gj:function(a){return a.length}}
W.ep.prototype={
gj:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.ij.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.by.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.bz.prototype={
gdD:function(a){var s=a.data
s.toString
return s},
$ibz:1}
W.bZ.prototype={$ibZ:1}
W.bB.prototype={$ibB:1}
W.is.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.iJ.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
h:function(a,b){return P.bm(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bm(s.value[1]))}},
gad:function(a){var s=H.b([],t.s)
this.F(a,new W.iK(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iR:1}
W.iK.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eD.prototype={
h:function(a,b){return P.bm(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bm(s.value[1]))}},
gad:function(a){var s=H.b([],t.s)
this.F(a,new W.iL(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iR:1}
W.iL.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aC.prototype={$iaC:1}
W.eE.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.ai.prototype={$iai:1}
W.a5.prototype={
gaR:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.j1("No elements"))
if(r>1)throw H.c(P.j1("More than one element"))
s=s.firstChild
s.toString
return s},
a7:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.f(r,b)
s.replaceChild(c,r[b]).toString},
gN:function(a){var s=this.a.childNodes
return new W.cI(s,s.length)},
T:function(a,b,c,d,e){throw H.c(P.B("Cannot setRange on Node list"))},
ax:function(a,b,c,d){return this.T(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.f(s,b)
return s[b]}}
W.r.prototype={
i9:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
ib:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.ml(s,b,a)}catch(q){H.b3(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ej(a):s},
hd:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.d2.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.aE.prototype={
gj:function(a){return a.length},
$iaE:1}
W.eR.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.eY.prototype={
h:function(a,b){return P.bm(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bm(s.value[1]))}},
gad:function(a){var s=H.b([],t.s)
this.F(a,new W.iW(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iR:1}
W.iW.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.f_.prototype={
gj:function(a){return a.length}}
W.at.prototype={$iat:1}
W.f2.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.aG.prototype={$iaG:1}
W.f3.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.aH.prototype={
gj:function(a){return a.length},
$iaH:1}
W.f7.prototype={
h:function(a,b){return a.getItem(H.jR(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gad:function(a){var s=H.b([],t.s)
this.F(a,new W.j2(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iR:1}
W.j2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:37}
W.aj.prototype={$iaj:1}
W.bf.prototype={$ibf:1}
W.dg.prototype={
am:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bM(a,b,c,d)
s=W.mE("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a5(r).a7(0,new W.a5(s))
return r}}
W.fa.prototype={
am:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bM(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.y.am(r,b,c,d))
r=new W.a5(r.gaR(r))
new W.a5(s).a7(0,new W.a5(r.gaR(r)))
return s}}
W.fb.prototype={
am:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bM(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a5(C.y.am(r,b,c,d))
new W.a5(s).a7(0,new W.a5(r.gaR(r)))
return s}}
W.cd.prototype={$icd:1}
W.au.prototype={$iau:1}
W.ae.prototype={$iae:1}
W.fd.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.fe.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.ja.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.av.prototype={$iav:1}
W.bI.prototype={$ibI:1}
W.fl.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.je.prototype={
gj:function(a){return a.length}}
W.b_.prototype={}
W.ji.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.fz.prototype={
gj:function(a){return a.length}}
W.bi.prototype={
ghM:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.B("deltaY is not supported"))},
ghL:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.B("deltaX is not supported"))},
$ibi:1}
W.ci.prototype={
he:function(a,b){var s=a.requestAnimationFrame(H.cq(b,1))
s.toString
return s},
eY:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cj.prototype={$icj:1}
W.fG.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.dy.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.w(r)+", "
s=a.top
s.toString
s=r+H.w(s)+") "
r=a.width
r.toString
r=s+H.w(r)+" x "
s=a.height
s.toString
return r+H.w(s)},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aJ(b)
if(s===r.gbC(b)){s=a.top
s.toString
if(s===r.gbG(b)){s=a.width
s.toString
if(s===r.gar(b)){s=a.height
s.toString
r=s===r.gan(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s,r,q,p=a.left
p.toString
p=C.c.gG(p)
s=a.top
s.toString
s=C.c.gG(s)
r=a.width
r.toString
r=C.c.gG(r)
q=a.height
q.toString
return W.lw(p,s,r,C.c.gG(q))},
gda:function(a){return a.height},
gan:function(a){var s=a.height
s.toString
return s},
gdr:function(a){return a.width},
gar:function(a){var s=a.width
s.toString
return s}}
W.fT.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.dD.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.hc.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.hj.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$iz:1,
$ii:1,
$io:1}
W.fD.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.gad(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.p)(s),++p){o=s[p]
b.$2(o,H.jR(q.getAttribute(o)))}},
gad:function(a){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.b([],t.s)
for(r=m.length,q=t.h9,p=0;p<r;++p){if(p>=m.length)return H.f(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
s.push(n)}}return s}}
W.fM.prototype={
h:function(a,b){return this.a.getAttribute(H.jR(b))},
gj:function(a){return this.gad(this).length}}
W.kf.prototype={}
W.dz.prototype={}
W.jA.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.ku.prototype={}
W.ck.prototype={
es:function(a){var s
if($.fU.a===0){for(s=0;s<262;++s)$.fU.l(0,C.S[s],W.oJ())
for(s=0;s<12;++s)$.fU.l(0,C.j[s],W.oK())}},
b_:function(a){return $.mi().A(0,W.cE(a))},
az:function(a,b,c){var s=$.fU.h(0,W.cE(a)+"::"+b)
if(s==null)s=$.fU.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaD:1}
W.K.prototype={
gN:function(a){return new W.cI(a,this.gj(a))},
T:function(a,b,c,d,e){throw H.c(P.B("Cannot setRange on immutable List."))},
ax:function(a,b,c,d){return this.T(a,b,c,d,0)}}
W.d3.prototype={
b_:function(a){return C.a.dt(this.a,new W.iO(a))},
az:function(a,b,c){return C.a.dt(this.a,new W.iN(a,b,c))},
$iaD:1}
W.iO.prototype={
$1:function(a){return a.b_(this.a)},
$S:19}
W.iN.prototype={
$1:function(a){return a.az(this.a,this.b,this.c)},
$S:19}
W.dJ.prototype={
eF:function(a,b,c,d){var s,r,q
this.a.a7(0,c)
s=b.bJ(0,new W.jI())
r=b.bJ(0,new W.jJ())
this.b.a7(0,s)
q=this.c
q.a7(0,C.U)
q.a7(0,r)},
b_:function(a){return this.a.A(0,W.cE(a))},
az:function(a,b,c){var s=this,r=W.cE(a),q=s.c
if(q.A(0,r+"::"+b))return s.d.hA(c)
else if(q.A(0,"*::"+b))return s.d.hA(c)
else{q=s.b
if(q.A(0,r+"::"+b))return!0
else if(q.A(0,"*::"+b))return!0
else if(q.A(0,r+"::*"))return!0
else if(q.A(0,"*::*"))return!0}return!1},
$iaD:1}
W.jI.prototype={
$1:function(a){return!C.a.A(C.j,a)},
$S:23}
W.jJ.prototype={
$1:function(a){return C.a.A(C.j,a)},
$S:23}
W.hl.prototype={
az:function(a,b,c){if(this.em(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.jK.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:47}
W.hk.prototype={
b_:function(a){var s
if(t.ew.b(a))return!1
s=t.g7.b(a)
if(s&&W.cE(a)==="foreignObject")return!1
if(s)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.d.eh(b,"on"))return!1
return this.b_(a)},
$iaD:1}
W.cI.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.mk(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.J(this).c.a(this.d)}}
W.jH.prototype={}
W.hu.prototype={
cM:function(a){var s,r=new W.jO(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bh:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.kQ(a)
else b.removeChild(a).toString},
hi:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.mo(a)
j=k.a.getAttribute("is")
p=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var i=c.childNodes
if(c.lastChild&&c.lastChild!==i[i.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var h=0
if(c.children)h=c.children.length
for(var g=0;g<h;g++){var f=c.children[g]
if(f.id=='attributes'||f.name=='attributes'||f.id=='lastChild'||f.name=='lastChild'||f.id=='previousSibling'||f.name=='previousSibling'||f.id=='children'||f.name=='children')return true}return false}(a)
p.toString
s=p
if(s)o=!0
else{p=!(a.attributes instanceof NamedNodeMap)
p.toString
o=p}l=o}catch(n){H.b3(n)}r="element unprintable"
try{r=J.e5(a)}catch(n){H.b3(n)}try{q=W.cE(a)
this.hh(a,b,l,r,q,k,j)}catch(n){if(H.b3(n) instanceof P.ay)throw n
else{this.bh(a,b)
p=window
p.toString
p="Removing corrupted element "+H.w(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
hh:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bh(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.b_(a)){m.bh(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.w(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.az(a,"is",g)){m.bh(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}s=f.gad(f)
q=H.b(s.slice(0),H.kC(s))
for(p=f.gad(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.f(q,p)
o=q[p]
r=m.a
n=J.mr(o)
H.jR(o)
if(!r.az(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.w(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.aW.b(a)){s=a.content
s.toString
m.cM(s)}}}
W.jO.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.hi(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bh(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.j1("Corrupt HTML")
throw H.c(n)}}catch(p){H.b3(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:49}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.h9.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hg.prototype={}
W.hm.prototype={}
W.hn.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.ho.prototype={}
W.hp.prototype={}
W.hv.prototype={}
W.hw.prototype={}
W.hx.prototype={}
W.hy.prototype={}
W.hz.prototype={}
W.hA.prototype={}
W.hB.prototype={}
W.hC.prototype={}
W.hD.prototype={}
W.hE.prototype={}
P.dR.prototype={$ibz:1,
gdD:function(a){return this.a}}
P.jS.prototype={
$1:function(a){this.a.push(P.lH(a))},
$S:38}
P.jY.prototype={
$2:function(a,b){this.a[a]=P.lH(b)},
$S:34}
P.eo.prototype={
gbf:function(){var s=this.b,r=H.J(s)
return new H.aT(new H.b0(s,new P.ie(),r.w("b0<j.E>")),new P.ig(),r.w("aT<j.E,C>"))},
F:function(a,b){C.a.F(P.ir(this.gbf(),!1,t.h),b)},
l:function(a,b,c){var s=this.gbf()
J.mq(s.b.$1(J.e4(s.a,b)),c)},
k:function(a,b){this.b.a.appendChild(b).toString},
T:function(a,b,c,d,e){throw H.c(P.B("Cannot setRange on filtered list"))},
ax:function(a,b,c,d){return this.T(a,b,c,d,0)},
gj:function(a){return J.ax(this.gbf().a)},
h:function(a,b){var s=this.gbf()
return s.b.$1(J.e4(s.a,b))},
gN:function(a){var s=P.ir(this.gbf(),!1,t.h)
return new J.a8(s,s.length)}}
P.ie.prototype={
$1:function(a){return t.h.b(a)},
$S:22}
P.ig.prototype={
$1:function(a){return t.h.a(a)},
$S:31}
P.h8.prototype={
gcG:function(a){return this.$ti.c.a(this.a+this.c)},
gdA:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
n:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.aJ(b)
if(s===r.gbC(b)){q=o.b
if(q===r.gbG(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcG(b)&&p.a(q+o.d)===r.gdA(b)}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s=this,r=s.a,q=C.b.gG(r),p=s.b,o=C.b.gG(p),n=s.$ti.c
r=C.b.gG(n.a(r+s.c))
p=C.b.gG(n.a(p+s.d))
return H.nc(H.j4(H.j4(H.j4(H.j4(0,q),o),r),p))}}
P.aa.prototype={
gbC:function(a){return this.a},
gbG:function(a){return this.b},
gar:function(a){return this.c},
gan:function(a){return this.d}}
P.aS.prototype={$iaS:1}
P.ex.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.aW.prototype={$iaW:1}
P.eM.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.iQ.prototype={
gj:function(a){return a.length}}
P.ca.prototype={$ica:1}
P.f9.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.n.prototype={
gbw:function(a){return new P.eo(a,new W.a5(a))},
am:function(a,b,c,d){var s,r,q,p,o=H.b([],t.Q)
o.push(W.lv(null))
o.push(W.lA())
o.push(new W.hk())
c=new W.hu(new W.d3(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.l.hI(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a5(q)
p=r.gaR(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$in:1}
P.aY.prototype={$iaY:1}
P.fm.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.fX.prototype={}
P.fY.prototype={}
P.h4.prototype={}
P.h5.prototype={}
P.hh.prototype={}
P.hi.prototype={}
P.hq.prototype={}
P.hr.prototype={}
P.hM.prototype={
gj:function(a){return a.length}}
P.eb.prototype={
h:function(a,b){return P.bm(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.bm(s.value[1]))}},
gad:function(a){var s=H.b([],t.s)
this.F(a,new P.hN(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iR:1}
P.hN.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.ec.prototype={
gj:function(a){return a.length}}
P.b5.prototype={}
P.eN.prototype={
gj:function(a){return a.length}}
P.fE.prototype={}
P.c8.prototype={
ea:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.hG(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.x.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.lQ(g))
return}if(t.fS.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.kc("Incorrect number or type of arguments"))},
ii:function(a,b,c,d,e,f,g){return this.ea(a,b,c,d,e,f,g,null,null,null)},
$ic8:1}
P.f4.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=P.bm(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.c(P.B("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$im:1,
$ii:1,
$io:1}
P.hd.prototype={}
P.he.prototype={}
K.e6.prototype={
b7:function(a,b){return!0},
i:function(a){return"all"},
$ibD:1}
K.cK.prototype={
b7:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)if(s[q].b7(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.p)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ibD:1}
K.aV.prototype={
b7:function(a,b){return!this.ei(0,b)},
i:function(a){return"!["+this.bN(0)+"]"}}
K.V.prototype={
U:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.e("May not create a Set with zero characters."))
s=new H.X(t.fX)
for(r=new H.bC(a,a.gj(a)),q=H.J(r).c;r.t();)s.l(0,q.a(r.d),!0)
p=P.ir(new H.ap(s,t.au),!0,t.S)
C.a.eg(p)
this.a=p},
b7:function(a,b){return C.a.A(this.a,b)},
i:function(a){return P.ko(this.a)},
$ibD:1}
L.f5.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.dk(this.a.K(0,b),H.b([],t.B))
s.push(p)
return p},
hO:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
if(p.b7(0,a))return p}return null},
i:function(a){return this.b},
dn:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.A(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=new H.ap(s,H.J(s).w("ap<1>"))}s=J.aL(s==null?H.b([],t.s):s)
for(;s.t();){r=s.gC(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.A(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.p)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bN(0))}return m.charCodeAt(0)==0?m:m}}
L.fj.prototype={
i:function(a){var s=H.m_(this.b,"\n","\\n"),r=H.m_(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.fk.prototype={
i:function(a){return this.b}}
L.jc.prototype={
K:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.f5(this,b,H.b([],t.ab))
s.l(0,b,r)}return r},
bm:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.fk(a,P.P(s,s))
r.l(0,a,q)}return q},
eb:function(a){return this.im(a)},
im:function(a){var s=this
return P.o1(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$eb(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.t
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=H.J(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a1.length
if(h!==0){if(!!a1.fixed$length)H.h(P.B("removeAt"))
if(0>=h)H.h(P.eU(0,null))
g=a1.splice(0,1)[0]}else{if(!r.t()){q=3
break}g=n.a(r.d)}a0.push(g);++k
h=d==null
f=h?null:d.hO(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.ko(a0)
throw H.c(P.e("Untokenizable string [state: "+H.w(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.h(P.B("removeRange"))
P.iR(0,i,a0.length)
a0.splice(0,i-0)
C.a.a7(a1,a0)
a0=H.b([],c)
b=H.b([],c)
d=s.d
q=!m.A(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(g)
d=f.b
h=d.d
if(h!=null){e=P.ko(b)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.fj(h,e,k)
l=h}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.A(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.np()
case 1:return P.nq(o)}}},t.bJ)},
i:function(a){var s,r,q=new P.bF(""),p=this.d
if(p!=null)q.a=""+(p.dn()+"\n")
for(p=this.a,p=p.gip(p),p=new H.cT(J.aL(p.a),p.b),s=H.J(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.w(r==null?null:r.dn())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.dk.prototype={
i:function(a){return this.b.b+": "+this.bN(0)}}
O.T.prototype={
cO:function(a,b,c){this.b=b
this.c=a},
aQ:function(a,b){return this.cO(a,null,b)},
ay:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
dc:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var s=this.a
return new J.a8(s,s.length)},
B:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.f(s,b)
return s[b]},
k:function(a,b){var s,r,q=this,p=H.J(q).w("t<T.T>")
if(q.ay(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.dc(r,H.b([b],p))}},
a7:function(a,b){var s,r
if(this.ay(b)){s=this.a
r=s.length
C.a.a7(s,b)
this.dc(r,b)}},
$ii:1}
O.d_.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.D():s},
aU:function(){var s=this.b
return s==null?null:s.q(null)},
gP:function(a){var s=this.a
if(s.length>0)return C.a.gcs(s)
else return V.ac()},
bE:function(a){this.a.push(a)
this.aU()},
aM:function(){var s=this.a
if(s.length>0){s.pop()
this.aU()}}}
E.hP.prototype={}
E.bw.prototype={
d1:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.a8(s,s.length),r=H.J(s).c;s.t();){q=r.a(s.d)
if(q.f==null)q.d1()}},
scQ:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().L(0,s.ge1())
if(b!=null)b.gm().k(0,s.ge1())
s.au(new D.v("shape",r,b))}},
saO:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gm().L(0,s.ge3())
if(a!=null)a.gm().k(0,s.ge3())
s.d1()
s.au(new D.v("technique",r,a))}},
scC:function(a){var s,r,q=this
if(!J.a2(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gm().L(0,q.ge_())
if(a!=null)a.gm().k(0,q.ge_())
r=q.r
q.au(new D.v("mover",s,r))}},
aa:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aE(0,b,q)
if(!J.a2(o,q.x)){s=q.x
q.x=o
q.au(new D.v("matrix",s,o))}p=q.f
if(p!=null)p.aa(0,b)
for(p=q.y.a,p=new J.a8(p,p.length),r=H.J(p).c;p.t();)r.a(p.d).aa(0,b)},
a9:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gP(q))
else o.push(p.M(0,q.gP(q)))
q.aU()
a.cF(r.f)
s=C.a.gcs(a.dy)
if(r.d!=null)if(s!=null)s.bF(a,r)
for(p=r.y.a,p=new J.a8(p,p.length),o=H.J(p).c;p.t();)o.a(p.d).a9(a)
a.cE()
q.aM()},
au:function(a){var s=this.z
return s==null?null:s.q(a)},
a8:function(){return this.au(null)},
e2:function(a){this.e=null
this.au(a)},
i_:function(){return this.e2(null)},
e4:function(a){return this.au(a)},
i0:function(){return this.e4(null)},
e0:function(a){return this.au(a)},
hZ:function(){return this.e0(null)},
dZ:function(a){return this.au(a)},
hW:function(){return this.dZ(null)},
hV:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdY(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bx()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a8()},
hY:function(a,b){var s,r
for(s=b.gN(b),r=this.gdY();s.t();)s.gC(s).gm().L(0,r)
this.a8()},
i:function(a){return"Unnamed entity"}}
E.bS.prototype={
i:function(a){return this.b}}
E.c6.prototype={
i:function(a){return this.b}}
E.fN.prototype={}
E.iS.prototype={
eq:function(a,b){var s=this
s.cy.gm().k(0,new E.iT(s))
s.db.gm().k(0,new E.iU(s))
s.dx.gm().k(0,new E.iV(s))},
gi7:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gP(q).M(0,s.gP(s))
q=s}return q},
ge6:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.gi7().M(0,r.gP(r))}return r},
cF:function(a){var s=this.dy
return s.push(a==null?C.a.gcs(s):a)},
cE:function(){var s=this.dy
if(s.length>1)s.pop()},
bu:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.e("May not cache a shader with no name."))
s=this.fr
if(s.hF(0,r))throw H.c(P.e('Shader cache already contains a shader by the name "'+r+'".'))
s.l(0,r,a)}}
E.iT.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.iU.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.iV.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.fi.prototype={
cZ:function(a){this.e7()},
cY:function(){return this.cZ(null)},
ghP:function(){var s,r=this,q=Date.now(),p=C.b.a1(P.kX(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.W(q,!1)
return s/p},
di:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.c.b4(r*o)
r=s.clientHeight
r.toString
p=C.c.b4(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.ln(C.i,this.gic())}},
e7:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.A.eY(s)
r=W.lM(new E.j9(this),t.H)
r.toString
C.A.he(s,r)}},
ia:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.di()
q=n.z
if(q!=null)q.q(null)
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.W(p,!1)
q.y=P.kX(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aU()
p=q.db
C.a.sj(p.a,0)
p.aU()
p=q.dx
C.a.sj(p.a,0)
p.aU()
p=q.dy
C.a.sj(p,0)
p.push(null)
m.a9(q)}}catch(o){s=H.b3(o)
r=H.kJ(o)
P.kN("Error: "+H.w(s))
P.kN("Stack: "+H.w(r))
throw H.c(s)}}}
E.j9.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ia()}},
$S:26}
Z.fA.prototype={}
Z.bT.prototype={
O:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.b3(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.w(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.ch.prototype={}
Z.b6.prototype={
at:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
O:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.f(r,s)
r[s].O(a)}},
ae:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.f(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a9:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.f(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.d6(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.p)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(l,", ")+"\nAttrs:   "+C.a.p(o,", ")}}
Z.c_.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d6(this.c)+"'")+"]"}}
Z.bh.prototype={
gcR:function(a){var s=this.a,r=(s&$.ab().a)!==0?3:0
if((s&$.bp().a)!==0)r+=3
if((s&$.bo().a)!==0)r+=3
if((s&$.bP().a)!==0)r+=2
if((s&$.bq().a)!==0)r+=3
if((s&$.e2().a)!==0)r+=3
if((s&$.e3().a)!==0)r+=4
if((s&$.cu().a)!==0)++r
return(s&$.bn().a)!==0?r+4:r},
hB:function(a){var s,r=$.ab(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bp()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bo()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e2()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.e3()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.cu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bn()
if((q&r.a)!==0)if(s===a)return r
return $.mh()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.ab().a)!==0)s.push("Pos")
if((r&$.bp().a)!==0)s.push("Norm")
if((r&$.bo().a)!==0)s.push("Binm")
if((r&$.bP().a)!==0)s.push("Txt2D")
if((r&$.bq().a)!==0)s.push("TxtCube")
if((r&$.e2().a)!==0)s.push("Clr3")
if((r&$.e3().a)!==0)s.push("Clr4")
if((r&$.cu().a)!==0)s.push("Weight")
if((r&$.bn().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.hU.prototype={}
D.bx.prototype={
k:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.b):s).push(b)},
L:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.A(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.L(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.A(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.L(p,b)
s=p===!0||s}return s},
q:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.N():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.F(P.ir(p,!0,t.h2),new D.ic(s))
r=q.b
if(r!=null){q.b=H.b([],t.b)
C.a.F(r,new D.id(s))}return!0},
ci:function(){return this.q(null)},
aD:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.q(s)}}}}
D.ic.prototype={
$1:function(a){a.$1(this.a)},
$S:13}
D.id.prototype={
$1:function(a){a.$1(this.a)},
$S:13}
D.N.prototype={}
D.aP.prototype={}
D.aQ.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.w(this.d)+" => "+H.w(this.e)}}
X.cw.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cw))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.ev.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ev))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.ip.prototype={}
X.cR.prototype={}
X.it.prototype={
be:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.S(o.a+b.a,o.b+b.b)
o=q.a.gb1()
s=$.a6
if(s==null)s=$.a6=new V.S(0,0)
r=q.x
q.z=new P.W(p,!1)
q.x=n
return new X.c2(a,s,r,o,n)},
cD:function(a,b){this.r=a.a
return!1},
bk:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bj:function(a,b){var s=this.d
if(s==null)return!1
s.q(this.be(a,b))
return!0},
i4:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gb1()
r=this.x
Date.now()
q.q(new X.c3(new V.a_(a.a,a.b),s,r))
return!0},
fL:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.q(new X.cR(c,q.a.gb1(),b))
q.y=new P.W(s,!1)
s=$.a6
q.x=s==null?$.a6=new V.S(0,0):s}}
X.a3.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a3))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.p(s,"+")}}
X.c2.prototype={}
X.iM.prototype={
c_:function(a,b,c){var s=this,r=new P.W(Date.now(),!1),q=s.a.gb1(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.c2(a,p,o,q,b)},
cD:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.q(this.c_(a,b,!0))
return!0},
bk:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.q(r.c_(a,b,!0))
return!0},
bj:function(a,b){var s=this.d
if(s==null)return!1
s.q(this.c_(a,b,!1))
return!0},
i5:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gb1()
Date.now()
r.q(new X.c3(new V.a_(a.a,a.b),s,b))
return!0},
gcg:function(){var s=this.b
return s==null?this.b=D.D():s},
gbI:function(){var s=this.c
return s==null?this.c=D.D():s},
gb8:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.c3.prototype={}
X.eT.prototype={}
X.dj.prototype={}
X.jd.prototype={
be:function(a,b){var s,r,q,p,o=this,n=new P.W(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a6
if(r==null){r=new V.S(0,0)
$.a6=r
s=r}else s=r}r=o.a.gb1()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.dj(q,p,r,s)},
i3:function(a){var s=this.b
if(s==null)return!1
s.q(this.be(a,!0))
return!0},
i1:function(a){var s=this.c
if(s==null)return!1
s.q(this.be(a,!0))
return!0},
i2:function(a){var s=this.d
if(s==null)return!1
s.q(this.be(a,!1))
return!0},
gcS:function(a){var s=this.b
return s==null?this.b=D.D():s},
gdF:function(a){var s=this.c
return s==null?this.c=D.D():s},
gb8:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.fx.prototype={
gb6:function(a){var s=this.b
return s==null?this.b=new X.ip(new X.a3(!1,!1,!1),P.cP(t.S)):s},
gY:function(){var s,r=this.c
if(r==null){r=$.a6
if(r==null){r=$.a6=new V.S(0,0)
s=r}else s=r
r=this.c=new X.iM(this,r,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return r},
gao:function(){var s=this.d
if(s==null){s=$.a6
if(s==null)s=$.a6=new V.S(0,0)
s=this.d=new X.it(this,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return s},
gav:function(){var s,r=this.e
if(r==null){r=$.a6
if(r==null){r=$.a6=new V.S(0,0)
s=r}else s=r
r=this.e=new X.jd(this,r,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return r},
gb1:function(){var s=this.a
return V.km(0,0,C.f.gdC(s).c,C.f.gdC(s).d)},
d7:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.ev(p,new X.a3(s,r,q))},
aZ:function(a){var s,r,q=this.gb6(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a3(p,s,r)},
c6:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gb6(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a3(s,r===!0,q===!0)},
aJ:function(a){var s,r,q,p
if(a==null){s=$.a6
return s==null?$.a6=new V.S(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.S(r-p,q-s)},
bg:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a_(r,s)},
c3:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.p)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.c.S(n)
m=o.pageY
m.toString
C.c.S(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.c.S(l)
l=o.pageY
l.toString
l=C.c.S(l)
k=j.top
k.toString
s.push(new V.S(n-m,l-k))}return s},
aG:function(a){var s,r,q,p
if(a==null)return new X.cw(0,new X.a3(!1,!1,!1))
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
return new X.cw(s,new X.a3(r,q,p))},
c0:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fF:function(a){return this.f=!0},
fm:function(a){return this.f=!1},
ft:function(a){if(this.f&&this.c0(a))a.preventDefault()},
fJ:function(a){var s,r,q=this
if(!q.f)return
s=q.d7(a)
r=q.gb6(q)
r.c=s.b
r.d.k(0,s.a)},
fH:function(a){var s,r,q=this
if(!q.f)return
s=q.d7(a)
r=q.gb6(q)
r.c=s.b
r.d.L(0,s.a)},
fN:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aZ(a)
if(p.x){s=p.aG(a)
r=p.bg(a)
if(p.gao().cD(s,r))a.preventDefault()
return}s=p.aG(a)
q=p.aJ(a)
if(p.gY().cD(s,q))a.preventDefault()},
fR:function(a){var s,r,q,p=this
p.aZ(a)
s=p.aG(a)
if(p.x){r=p.bg(a)
if(p.gao().bk(s,r))a.preventDefault()
return}q=p.aJ(a)
if(p.gY().bk(s,q))a.preventDefault()},
fz:function(a){var s,r,q,p=this
if(!p.c0(a)){p.aZ(a)
s=p.aG(a)
if(p.x){r=p.bg(a)
if(p.gao().bk(s,r))a.preventDefault()
return}q=p.aJ(a)
if(p.gY().bk(s,q))a.preventDefault()}},
fP:function(a){var s,r,q,p=this
p.aZ(a)
s=p.aG(a)
if(p.x){r=p.bg(a)
if(p.gao().bj(s,r))a.preventDefault()
return}q=p.aJ(a)
if(p.gY().bj(s,q))a.preventDefault()},
fv:function(a){var s,r,q,p=this
if(!p.c0(a)){p.aZ(a)
s=p.aG(a)
if(p.x){r=p.bg(a)
if(p.gao().bj(s,r))a.preventDefault()
return}q=p.aJ(a)
if(p.gY().bj(s,q))a.preventDefault()}},
fT:function(a){var s,r,q=this
q.aZ(a)
s=new V.a_(C.z.ghL(a),C.z.ghM(a)).M(0,q.Q)
if(q.x){if(q.gao().i4(s))a.preventDefault()
return}r=q.aJ(a)
if(q.gY().i5(s,r))a.preventDefault()},
fV:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aG(q.y)
r=q.aJ(q.y)
q.gao().fL(s,r,p)}},
ha:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c6(a)
s=r.c3(a)
if(r.gav().i3(s))a.preventDefault()},
h6:function(a){var s
this.c6(a)
s=this.c3(a)
if(this.gav().i1(s))a.preventDefault()},
h8:function(a){var s
this.c6(a)
s=this.c3(a)
if(this.gav().i2(s))a.preventDefault()}}
D.bX.prototype={
aF:function(a){var s=this.r
return s==null?null:s.q(a)},
ew:function(){return this.aF(null)},
$iao:1}
D.cO.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.D():s},
gdV:function(){var s=this.z
return s==null?this.z=D.D():s},
aF:function(a){var s=this.y
return s==null?null:s.q(a)},
de:function(a){var s=this.z
return s==null?null:s.q(a)},
fK:function(){return this.de(null)},
fX:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.p)(a),++r)if(this.eu(a[r]))return!1
return!0},
fg:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gdd(),q=this.f,p=t.b,o=0;o<b.length;b.length===s||(0,H.p)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bx()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.aF(new D.aP())},
h0:function(a,b){var s,r,q,p
for(s=b.gN(b),r=this.gdd(),q=this.e;s.t();){p=s.gC(s)
C.a.L(q,p)
p.gm().L(0,r)}this.aF(new D.aQ())},
eu:function(a){var s=C.a.A(this.f,a)
return s}}
V.G.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.G))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.a9.prototype={
io:function(){var s=this
return new V.a9(Math.floor(s.a*255)/255,Math.floor(s.b*255)/255,Math.floor(s.c*255)/255,Math.floor(s.d*255)/255)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a9))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.ia.prototype={}
V.cZ.prototype={
a5:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cZ))return!1
s=b.a
$.A().toString
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.cs(H.b([o.a,o.d,o.r],n),3,0),l=V.cs(H.b([o.b,o.e,o.x],n),3,0),k=V.cs(H.b([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.f(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.f(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.f(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.f(m,1)
p=" "+m[1]+", "
if(1>=r)return H.f(l,1)
p=p+l[1]+", "
if(1>=q)return H.f(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.f(m,2)
n=" "+m[2]+", "
if(2>=r)return H.f(l,2)
n=n+l[2]+", "
if(2>=q)return H.f(k,2)
return p+(n+k[2]+"]")}}
V.ah.prototype={
a5:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
cr:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.A().toString
if(Math.abs(b3-0)<1e-9)return V.ac()
s=1/b3
r=-l
q=-a2
return V.aU((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
M:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aU(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bH:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.E(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bn:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a4(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ah))return!1
s=b.a
$.A().toString
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
D:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.cs(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.cs(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.cs(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.cs(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.f(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.f(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.f(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.f(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.f(l,1)
o=o+l[1]+", "
if(1>=r)return H.f(k,1)
o=o+k[1]+", "
if(1>=q)return H.f(j,1)
o=o+j[1]+", "
if(1>=p)return H.f(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.f(l,2)
s=s+l[2]+", "
if(2>=r)return H.f(k,2)
s=s+k[2]+", "
if(2>=q)return H.f(j,2)
s=s+j[2]+", "
if(2>=p)return H.f(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.f(l,3)
o=o+l[3]+", "
if(3>=r)return H.f(k,3)
o=o+k[3]+", "
if(3>=q)return H.f(j,3)
o=o+j[3]+", "
if(3>=p)return H.f(i,3)
return s+(o+i[3]+"]")},
u:function(){return this.D("")}}
V.S.prototype={
ab:function(a){return new V.a_(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
u:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.a4.prototype={
aS:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a4))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
u:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.bb.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bb))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.eW.prototype={
gaC:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eW))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.a_.prototype={
ct:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){return this.a*a.a+this.b*a.b},
M:function(a,b){return new V.a_(this.a*b,this.b*b)},
ai:function(a,b){var s
$.A().toString
if(Math.abs(b-0)<1e-9){s=$.bN
return s==null?$.bN=new V.a_(0,0):s}return new V.a_(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.E.prototype={
ct:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){return new V.E(V.kL(this.a,a.a,b),V.kL(this.b,a.b,b),V.kL(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.a2(s))
if(r===1)return s
return s.ai(0,r)},
bi:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.E(s*r-q*p,q*o-n*r,n*p-s*o)},
a_:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
b9:function(a){return new V.E(-this.a,-this.b,-this.c)},
ai:function(a,b){$.A().toString
if(Math.abs(b-0)<1e-9)return V.fy()
return new V.E(this.a/b,this.b/b,this.c/b)},
dU:function(){$.A().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.A().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
u:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
U.hW.prototype={
bU:function(a){var s=V.ka(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.D():s},
I:function(a){var s=this.y
return s==null?null:s.q(a)},
scJ:function(a,b){},
scz:function(a){var s,r=this,q=r.b
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bU(s)}r.I(new D.v("maximumLocation",q,r.b))}},
scB:function(a){var s,r=this,q=r.c
$.A().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bU(s)}r.I(new D.v("minimumLocation",q,r.c))}},
sah:function(a,b){var s,r=this
b=r.bU(b)
s=r.d
$.A().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.I(new D.v("location",s,b))}},
scA:function(a){var s,r,q=this,p=q.e
$.A().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.I(new D.v("maximumVelocity",p,a))}},
sZ:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.I(new D.v("velocity",r,a))}},
sce:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.I(new D.v("dampening",s,a))}},
aa:function(a,b){var s,r,q,p=this,o=p.f
$.A().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sah(0,p.d+s*b)
o=p.x
$.A().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sZ(s)}}}
U.bW.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.D():s},
sP:function(a,b){var s,r,q=this
if(!q.a.n(0,b)){s=q.a
q.a=b
r=q.b
if(r!=null)r.q(new D.v("matrix",s,b))}},
aE:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bW))return!1
return this.a.n(0,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bY.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
I:function(a){var s=this.e
return s==null?null:s.q(a)},
ac:function(){return this.I(null)},
ey:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaY(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
if(o!=null){n=o.gm()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.I(new D.aP())},
fZ:function(a,b){var s,r
for(s=b.gN(b),r=this.gaY();s.t();)s.gC(s).gm().L(0,r)
this.I(new D.aQ())},
aE:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a8(o,o.length),n=H.J(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aE(0,b,c)
s=s==null?q:q.M(0,s)}}p.f=s==null?V.ac():s
o=p.e
if(o!=null)o.aD(0)}return p.f},
n:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bY))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.f(s,p)
o=s[p]
if(p>=q.length)return H.f(q,p)
if(!J.a2(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iU:1}
U.U.prototype={}
U.c9.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.D():s},
I:function(a){var s=this.y
return s==null?null:s.q(a)},
sec:function(a){var s
a=V.ka(a,0,6.283185307179586)
s=this.a
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.I(new D.v("yaw",s,a))}},
se5:function(a,b){var s
b=V.ka(b,0,6.283185307179586)
s=this.b
$.A().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.I(new D.v("pitch",s,b))}},
se8:function(a){var s
a=V.ka(a,0,6.283185307179586)
s=this.c
$.A().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.I(new D.v("roll",s,a))}},
aE:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sec(s.a+s.d*b.y)
s.se5(0,s.b+s.e*b.y)
s.se8(s.c+s.f*b.y)
s.x=V.la(s.c).M(0,V.l9(s.b)).M(0,V.l8(s.a))
r=s.y
if(r!=null)r.aD(0)}return s.x},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.c9))return!1
s=q.a
r=b.a
$.A().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+"], ["+V.x(s.d,3,0)+", "+V.x(s.e,3,0)+", "+V.x(s.f,3,0)+"]"}}
U.dv.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.D():s},
I:function(a){var s=this.cy
return s==null?null:s.q(a)},
ac:function(){return this.I(null)},
aK:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gY().gcg().k(0,s.gbO())
a.gY().gb8().k(0,s.gbQ())
a.gY().gbI().k(0,s.gbS())
return!0},
bP:function(a){var s=this,r=s.c,q=s.a
if(!r.n(0,q==null?null:q.gb6(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bR:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ab(a.d)
if(s.a2(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sah(0,-a.y.ab(r).M(0,2).ai(0,s.gaC()).a*2.5+p.z)
q.sZ(0)
p.Q=a.z.ab(r).M(0,2).ai(0,s.gaC())
p.ac()},
bT:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a2(s)>0.0001){r.b.sZ(r.Q.a*10*2.5)
r.ac()}},
aE:function(a,b,c){var s=this,r=s.ch,q=b.e
if(r<q){s.ch=q
r=s.b
r.aa(0,b.y)
s.cx=V.la(r.d)}return s.cx},
$iU:1}
U.dw.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.D():s},
I:function(a){var s=this.fx
return s==null?null:s.q(a)},
ac:function(){return this.I(null)},
aK:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gY().gcg().k(0,q.gbO())
a.gY().gb8().k(0,q.gbQ())
a.gY().gbI().k(0,q.gbS())
s=a.gao()
r=s.f
s=r==null?s.f=D.D():r
s.k(0,q.gf2())
s=a.gao()
r=s.d
s=r==null?s.d=D.D():r
s.k(0,q.gf4())
s=a.gav()
s.gcS(s).k(0,q.geD())
a.gav().gb8().k(0,q.geB())
s=a.gav()
s.gdF(s).k(0,q.gez())
return!0},
aW:function(a){return new V.a_(a.a,a.b)},
bP:function(a){var s=this
t.Z.a(a)
if(!s.d.n(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bR:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ab(a.d)
if(s.a2(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aW(a.y.ab(r).M(0,2).ai(0,s.gaC()))
p=n.c
p.sah(0,-q.a*2.5+n.cy)
o=n.b
o.sah(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aW(a.z.ab(r).M(0,2).ai(0,s.gaC()))
n.ac()},
bT:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a2(s)>0.0001){r.c.sZ(-r.dx.a*10*2.5)
r.b.sZ(-r.dx.b*10*2.5)
r.ac()}},
f3:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
f5:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.n(0,a.x.b))return
s=a.c
r=a.d
q=n.aW(a.y.ab(r).M(0,2).ai(0,s.gaC()))
p=n.c
p.sah(0,-q.a*2.5+n.cy)
o=n.b
o.sah(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aW(a.z.ab(r).M(0,2).ai(0,s.gaC()))
n.ac()},
eE:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eC:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ab(a.d)
if(s.a2(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aW(a.y.ab(r).M(0,2).ai(0,s.gaC()))
p=n.c
p.sah(0,-q.a*2.5+n.cy)
o=n.b
o.sah(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aW(a.z.ab(r).M(0,2).ai(0,s.gaC()))
n.ac()},
eA:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a2(s)>0.0001){r.c.sZ(-r.dx.a*10*2.5)
r.b.sZ(-r.dx.b*10*2.5)
r.ac()}},
aE:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.aa(0,s)
p=r.b
p.aa(0,s)
r.fr=V.l8(p.d).M(0,V.l9(q.d))}return r.fr},
$iU:1}
U.dx.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.D():s},
I:function(a){var s=this.r
return s==null?null:s.q(a)},
aK:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gY()
r=s.e
s=r==null?s.e=D.D():r
r=this.gfd()
s.k(0,r)
s=a.gao()
q=s.e;(q==null?s.e=D.D():q).k(0,r)
return!0},
fe:function(a){var s=this,r=s.b,q=s.a
if(!r.n(0,q==null?null:q.gb6(q).c))return
t.bZ.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.I(new D.v("zoom",r,q))}},
aE:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.mQ(s,s,s)}return r.f},
$iU:1}
M.cy.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.D():s},
R:function(a){var s=this.r
return s==null?null:s.q(a)},
bd:function(){return this.R(null)},
h2:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gV(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p].gm()
n=o.a;(n==null?o.a=H.b([],q):n).push(r)}this.R(new D.aP())},
h4:function(a,b){var s,r
for(s=b.gN(b),r=this.gV();s.t();)s.gC(s).gm().L(0,r)
this.R(new D.aQ())},
a9:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a8(s,s.length),r=H.J(s).c;s.t();)r.a(s.d).a9(a)
q.f=!1},
$iaF:1}
M.cz.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.D():s},
R:function(a){var s=this.r
return s==null?null:s.q(a)},
bd:function(){return this.R(null)},
sb0:function(a){var s,r,q=this
if(a==null)a=new X.ik()
s=q.b
if(s!==a){if(s!=null)s.gm().L(0,q.gV())
r=q.b
q.b=a
a.gm().k(0,q.gV())
q.R(new D.v("camera",r,q.b))}},
saN:function(a,b){var s,r,q=this
if(b==null)b=X.kg(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gm().L(0,q.gV())
r=q.c
q.c=b
b.gm().k(0,q.gV())
q.R(new D.v("target",r,q.c))}},
saO:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().L(0,r.gV())
s=r.d
r.d=a
if(a!=null)a.gm().k(0,r.gV())
r.R(new D.v("technique",s,r.d))}},
a9:function(a){var s,r=this
a.cF(r.d)
s=r.c
if(s!=null)s.O(a)
s=r.b
if(s!=null)s.O(a)
s=r.d
if(s!=null)s.aa(0,a)
s=r.e
s.aa(0,a)
s.a9(a)
s=r.b
if(s!=null)s.ae(a)
a.cE()},
$iaF:1}
M.cG.prototype={
R:function(a){var s=this.y
return s==null?null:s.q(a)},
bd:function(){return this.R(null)},
fo:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gV(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bx()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.R(new D.aP())},
fq:function(a,b){var s,r
for(s=b.gN(b),r=this.gV();s.t();)s.gC(s).gm().L(0,r)
this.R(new D.aQ())},
sb0:function(a){var s,r,q=this
if(a==null)a=X.lc(null)
s=q.b
if(s!==a){if(s!=null)s.gm().L(0,q.gV())
r=q.b
q.b=a
a.gm().k(0,q.gV())
q.R(new D.v("camera",r,q.b))}},
saN:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().L(0,r.gV())
s=r.c
r.c=b
b.gm().k(0,r.gV())
r.R(new D.v("target",s,r.c))}},
gm:function(){var s=this.y
return s==null?this.y=D.D():s},
a9:function(a){var s,r,q,p=this
a.cF(p.d)
s=p.c
if(s!=null)s.O(a)
s=p.b
if(s!=null)s.O(a)
for(s=p.e.a,r=new J.a8(s,s.length),q=H.J(r).c;r.t();)q.a(r.d).aa(0,a)
for(s=new J.a8(s,s.length),r=H.J(s).c;s.t();)r.a(s.d).a9(a)
if(p.b!=null){a.cy.aM()
a.db.aM()}s=p.c
if(s!=null)s.ae(a)
a.cE()},
$iaF:1}
A.ea.prototype={}
A.hL.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hN:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
bx:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.al.prototype={
gaw:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.al))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.cW.prototype={
ep:function(d2,d3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=this,c5=null,c6=u.C,c7="Required uniform value, ",c8=", was not defined or used in shader.",c9=c4.x,d0=new P.bF(""),d1=c9.fr
if(d1){s=""+"uniform mat4 objMat;\n"
d0.a=s}else s=""
r=c9.fx
s=(r?d0.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
d0.a=s
s+="\n"
d0.a=s
s=d0.a=s+"attribute vec3 posAttr;\n"
q=c9.k4
if(q){s+="attribute vec3 normAttr;\n"
d0.a=s}p=c9.r1
d0.a=(p?d0.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.og(c9,d0)
A.oi(c9,d0)
A.oh(c9,d0)
A.ok(c9,d0)
A.ol(c9,d0)
A.oj(c9,d0)
A.om(c9,d0)
s=d0.a+="vec4 getPos()\n"
s+="{\n"
d0.a=s
o=c9.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
d0.a=s
s+="}\n"
d0.a=s
s+="\n"
d0.a=s
s+="void main()\n"
d0.a=s
s=d0.a=s+"{\n"
if(o){s+="   setupBendData();\n"
d0.a=s}if(q){s+="   normalVec = getNorm();\n"
d0.a=s}if(p){s+="   binormalVec = getBinm();\n"
d0.a=s}if(c9.r2){s+="   txt2D = getTxt2D();\n"
d0.a=s}if(c9.rx){s+="   txtCube = getTxtCube();\n"
d0.a=s}if(c9.k2){s+="   objPos = getObjPos();\n"
d0.a=s}s=(c9.k3?d0.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
d0.a=s
s+="}\n"
d0.a=s
s=d0.a=s+"\n"
c4.bA(0,s.charCodeAt(0)==0?s:s,A.of(c9))
c4.y=c4.gX(c4).h(0,"posAttr")
c4.Q=c4.gX(c4).h(0,"normAttr")
c4.z=c4.gX(c4).h(0,"binmAttr")
c4.ch=c4.gX(c4).h(0,"txt2DAttr")
c4.cx=c4.gX(c4).h(0,"txtCubeAttr")
c4.cy=c4.gX(c4).h(0,"bendAttr")
if(c9.dy)c4.fy=t.j.a(c4.gv().E(0,"invViewMat"))
if(d1)c4.db=t.j.a(c4.gv().E(0,"objMat"))
if(r)c4.dx=t.j.a(c4.gv().E(0,"viewObjMat"))
d1=t.j
c4.fr=d1.a(c4.gv().E(0,"projViewObjMat"))
if(c9.go)c4.dy=d1.a(c4.gv().E(0,"viewMat"))
if(c9.x1)c4.go=t.bK.a(c4.gv().E(0,"txt2DMat"))
if(c9.x2)c4.id=d1.a(c4.gv().E(0,"txtCubeMat"))
if(c9.y1)c4.k1=d1.a(c4.gv().E(0,"colorMat"))
c4.k3=H.b([],t.p)
s=c9.b3
if(s>0){c4.k2=t.y.a(c4.gv().E(0,"bendMatCount"))
for(n=0;n<s;++n){r=c4.k3
m=c4.r
if(m==null)H.h(P.e(c6))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.h(P.e(c7+q+c8))
r.push(d1.a(l))}}d1=c9.a
if(d1.a)c4.k4=t.g.a(c4.gv().E(0,"emissionClr"))
if(d1.c)c4.r2=t.a.a(c4.gv().E(0,"emissionTxt"))
d1=c9.b
if(d1.a)c4.rx=t.g.a(c4.gv().E(0,"ambientClr"))
if(d1.c)c4.x1=t.a.a(c4.gv().E(0,"ambientTxt"))
d1=c9.c
if(d1.a)c4.x2=t.g.a(c4.gv().E(0,"diffuseClr"))
if(d1.c)c4.y2=t.a.a(c4.gv().E(0,"diffuseTxt"))
d1=c9.d
if(d1.a)c4.b3=t.g.a(c4.gv().E(0,"invDiffuseClr"))
if(d1.c)c4.bz=t.a.a(c4.gv().E(0,"invDiffuseTxt"))
d1=c9.e
s=d1.a
if(!s)r=d1.c
else r=!0
if(r){c4.dI=t.u.a(c4.gv().E(0,"shininess"))
if(s)c4.dG=t.g.a(c4.gv().E(0,"specularClr"))
if(d1.c)c4.dH=t.a.a(c4.gv().E(0,"specularTxt"))}if(c9.f.c)c4.dJ=t.a.a(c4.gv().E(0,"bumpTxt"))
if(c9.db){d1=t.a
c4.dK=d1.a(c4.gv().E(0,"envSampler"))
s=c9.r
if(s.a)c4.dL=t.g.a(c4.gv().E(0,"reflectClr"))
if(s.c)c4.dM=d1.a(c4.gv().E(0,"reflectTxt"))
s=c9.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c4.dN=t.u.a(c4.gv().E(0,"refraction"))
if(r)c4.dO=t.g.a(c4.gv().E(0,"refractClr"))
if(s.c)c4.dP=d1.a(c4.gv().E(0,"refractTxt"))}}d1=c9.y
if(d1.a)c4.dQ=t.u.a(c4.gv().E(0,"alpha"))
if(d1.c)c4.dR=t.a.a(c4.gv().E(0,"alphaTxt"))
if(c9.k1){d1=c9.z
s=d1.length
if(s!==0){r=t.S
c4.cj=P.P(r,t.W)
c4.ck=P.P(r,t.O)
for(r=t.y,q=t.g,p=t.u,o=t.f,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="barLight"+i
g=H.b([],o)
for(f=j.b,e=(i&4)!==0,n=0;n<f;++n){m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].startPnt"
l=m.h(0,d)
if(l==null)H.h(P.e(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].endPnt"
c=m.h(0,d)
if(c==null)H.h(P.e(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].color"
b=m.h(0,d)
if(b==null)H.h(P.e(c7+d+c8))
q.a(b)
if(e){m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].att0"
a=m.h(0,d)
if(a==null)H.h(P.e(c7+d+c8))
p.a(a)
m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].att1"
a0=m.h(0,d)
if(a0==null)H.h(P.e(c7+d+c8))
p.a(a0)
m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].att2"
a1=m.h(0,d)
if(a1==null)H.h(P.e(c7+d+c8))
p.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.dp(l,c,b,a4,a3,a2))}c4.ck.l(0,i,g)
f=c4.cj
m=c4.r
if(m==null)H.h(P.e(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.e(c7+e+c8))
f.l(0,i,r.a(l))}}d1=c9.Q
s=d1.length
if(s!==0){r=t.S
c4.cl=P.P(r,t.W)
c4.cm=P.P(r,t.r)
for(r=t.y,q=t.g,p=t.G,o=t.V,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="dirLight"+i
g=H.b([],o)
for(f=j.b,e=(i&1)!==0,n=0;n<f;++n){if(e){m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].objUp"
l=m.h(0,d)
if(l==null)H.h(P.e(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].objRight"
c=m.h(0,d)
if(c==null)H.h(P.e(c7+d+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].objDir"
b=m.h(0,d)
if(b==null)H.h(P.e(c7+d+c8))
q.a(b)
a5=b
a6=c
a7=l}else{a5=c5
a6=a5
a7=a6}m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].viewDir"
l=m.h(0,d)
if(l==null)H.h(P.e(c7+d+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"s["+n+"].color"
c=m.h(0,d)
if(c==null)H.h(P.e(c7+d+c8))
q.a(c)
if(e){m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"sTexture2D"+n
b=m.h(0,d)
if(b==null)H.h(P.e(c7+d+c8))
p.a(b)
a8=b}else a8=c5
g.push(new A.dq(a7,a6,a5,l,c,a8))}c4.cm.l(0,i,g)
f=c4.cl
m=c4.r
if(m==null)H.h(P.e(c6))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.h(P.e(c7+e+c8))
f.l(0,i,r.a(l))}}d1=c9.ch
s=d1.length
if(s!==0){r=t.S
c4.cn=P.P(r,t.W)
c4.co=P.P(r,t.f0)
for(r=t.y,q=t.g,p=t.bK,o=t.a,f=t.F,e=t.u,d=t.E,k=0;k<d1.length;d1.length===s||(0,H.p)(d1),++k){j=d1[k]
i=j.a
h="pointLight"+i
g=H.b([],d)
for(a9=j.b,b0=(i&4)!==0,b1=(i&2)!==0,b2=(i&1)!==0,b3=(i&3)!==0,n=0;n<a9;++n){m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"s["+n+"].point"
l=m.h(0,b4)
if(l==null)H.h(P.e(c7+b4+c8))
q.a(l)
m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"s["+n+"].viewPnt"
c=m.h(0,b4)
if(c==null)H.h(P.e(c7+b4+c8))
q.a(c)
m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"s["+n+"].color"
b=m.h(0,b4)
if(b==null)H.h(P.e(c7+b4+c8))
q.a(b)
if(b3){m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"s["+n+"].invViewRotMat"
a=m.h(0,b4)
if(a==null)H.h(P.e(c7+b4+c8))
p.a(a)
b5=a}else b5=c5
if(b2){m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"sTextureCube"+n
a=m.h(0,b4)
if(a==null)H.h(P.e(c7+b4+c8))
o.a(a)
a8=a}else a8=c5
if(b1){m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"sShadowCube"+n
a=m.h(0,b4)
if(a==null)H.h(P.e(c7+b4+c8))
o.a(a)
m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"s["+n+"].shadowAdj"
a0=m.h(0,b4)
if(a0==null)H.h(P.e(c7+b4+c8))
f.a(a0)
b6=a
b7=a0}else{b6=c5
b7=b6}if(b0){m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"s["+n+"].att0"
a=m.h(0,b4)
if(a==null)H.h(P.e(c7+b4+c8))
e.a(a)
m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"s["+n+"].att1"
a0=m.h(0,b4)
if(a0==null)H.h(P.e(c7+b4+c8))
e.a(a0)
m=c4.r
if(m==null)H.h(P.e(c6))
b4=h+"s["+n+"].att2"
a1=m.h(0,b4)
if(a1==null)H.h(P.e(c7+b4+c8))
e.a(a1)
a2=a1
a3=a0
a4=a}else{a2=c5
a3=a2
a4=a3}g.push(new A.ds(l,c,b5,b,a8,b6,b7,a4,a3,a2))}c4.co.l(0,i,g)
a9=c4.cn
m=c4.r
if(m==null)H.h(P.e(c6))
b0=h+"Count"
l=m.h(0,b0)
if(l==null)H.h(P.e(c7+b0+c8))
a9.l(0,i,r.a(l))}}c9=c9.cx
d1=c9.length
if(d1!==0){s=t.S
c4.cp=P.P(s,t.W)
c4.cq=P.P(s,t.R)
for(s=t.y,r=t.g,q=t.u,p=t.F,o=t.G,f=t.J,k=0;k<c9.length;c9.length===d1||(0,H.p)(c9),++k){j=c9[k]
i=j.a
h="spotLight"+i
g=H.b([],f)
for(e=j.b,d=(i&2)!==0,a9=(i&1)!==0,b0=(i&4)!==0,b1=(i&8)!==0,b2=(i&3)!==0,n=0;n<e;++n){m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].objPnt"
l=m.h(0,b3)
if(l==null)H.h(P.e(c7+b3+c8))
r.a(l)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].objDir"
c=m.h(0,b3)
if(c==null)H.h(P.e(c7+b3+c8))
r.a(c)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].viewPnt"
b=m.h(0,b3)
if(b==null)H.h(P.e(c7+b3+c8))
r.a(b)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].color"
a=m.h(0,b3)
if(a==null)H.h(P.e(c7+b3+c8))
r.a(a)
if(b2){m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].objUp"
a0=m.h(0,b3)
if(a0==null)H.h(P.e(c7+b3+c8))
r.a(a0)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].objRight"
a1=m.h(0,b3)
if(a1==null)H.h(P.e(c7+b3+c8))
r.a(a1)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].tuScalar"
b8=m.h(0,b3)
if(b8==null)H.h(P.e(c7+b3+c8))
q.a(b8)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].tvScalar"
b9=m.h(0,b3)
if(b9==null)H.h(P.e(c7+b3+c8))
q.a(b9)
c0=b9
c1=b8
a6=a1
a7=a0}else{c0=c5
c1=c0
a6=c1
a7=a6}if(d){m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].shadowAdj"
a0=m.h(0,b3)
if(a0==null)H.h(P.e(c7+b3+c8))
p.a(a0)
b7=a0}else b7=c5
if(b1){m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].cutoff"
a0=m.h(0,b3)
if(a0==null)H.h(P.e(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].coneAngle"
a1=m.h(0,b3)
if(a1==null)H.h(P.e(c7+b3+c8))
q.a(a1)
c2=a1
c3=a0}else{c2=c5
c3=c2}if(b0){m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].att0"
a0=m.h(0,b3)
if(a0==null)H.h(P.e(c7+b3+c8))
q.a(a0)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].att1"
a1=m.h(0,b3)
if(a1==null)H.h(P.e(c7+b3+c8))
q.a(a1)
m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"s["+n+"].att2"
b8=m.h(0,b3)
if(b8==null)H.h(P.e(c7+b3+c8))
q.a(b8)
a2=b8
a3=a1
a4=a0}else{a2=c5
a3=a2
a4=a3}if(a9){m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"sTexture2D"+n
a0=m.h(0,b3)
if(a0==null)H.h(P.e(c7+b3+c8))
o.a(a0)
a8=a0}else a8=c5
if(d){m=c4.r
if(m==null)H.h(P.e(c6))
b3=h+"sShadow2D"+n
a0=m.h(0,b3)
if(a0==null)H.h(P.e(c7+b3+c8))
o.a(a0)
b6=a0}else b6=c5
g.push(new A.du(l,c,b,a,a7,a6,c1,c0,b7,c3,c2,a4,a3,a2,a8,b6))}c4.cq.l(0,i,g)
e=c4.cp
m=c4.r
if(m==null)H.h(P.e(c6))
d=h+"Count"
l=m.h(0,d)
if(l==null)H.h(P.e(c7+d+c8))
e.l(0,i,s.a(l))}}}},
ak:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.cP(b)}}
A.b4.prototype={
i:function(a){return"barLight"+this.a}}
A.b7.prototype={
i:function(a){return"dirLight"+this.a}}
A.bc.prototype={
i:function(a){return"pointLight"+this.a}}
A.be.prototype={
i:function(a){return"spotLight"+this.a}}
A.ix.prototype={
i:function(a){return this.by}}
A.dp.prototype={}
A.dq.prototype={}
A.ds.prototype={}
A.du.prototype={}
A.bd.prototype={
bA:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.d8(b,35633)
r=n.d8(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaH(),s)
q.attachShader(n.gaH(),r)
q.linkProgram(n.gaH())
if(!H.lG(q.getProgramParameter(n.gaH(),35714))){o=q.getProgramInfoLog(n.gaH())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.h(P.e("Failed to link shader: "+o))}n.hj()
n.hl()},
gX:function(a){var s=this.f
if(s==null)throw H.c(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gv:function(){var s=this.r
if(s==null)throw H.c(P.e(u.C))
return s},
gaH:function(){var s=this.e
if(s==null)throw H.c(P.e(u.F))
return s},
O:function(a){a.a.useProgram(this.e)
this.gX(this).hN()},
d8:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.lG(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.e('Error compiling shader "'+H.w(q)+'": '+s))}return q},
hj:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.hF(l.getProgramParameter(o.gaH(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.h(P.e(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.h(P.e(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.ea(l,q,p))}o.f=new A.hL(m)},
hl:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.hF(j.getProgramParameter(m.gaH(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.h(P.e(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.h(P.e(l))
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
k.push(m.hK(o,n,q,p))}m.r=new A.jh(k)},
aV:function(a,b,c){var s=this.a
if(a===1)return new A.bJ(s,b,c)
else return A.kq(s,this.e,b,a,c)},
eU:function(a,b,c){var s=this.a
if(a===1)return new A.bL(s,b,c)
else return A.kq(s,this.e,b,a,c)},
eV:function(a,b,c){var s=this.a
if(a===1)return new A.dt(s,b,c)
else return A.kq(s,this.e,b,a,c)},
bs:function(a,b){return new P.fP(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hK:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aV(b,c,d)
case 5121:return s.aV(b,c,d)
case 5122:return s.aV(b,c,d)
case 5123:return s.aV(b,c,d)
case 5124:return s.aV(b,c,d)
case 5125:return s.aV(b,c,d)
case 5126:return new A.dl(s.a,c,d)
case 35664:return new A.ce(s.a,c,d)
case 35665:return new A.dm(s.a,c,d)
case 35666:return new A.dn(s.a,c,d)
case 35667:return new A.fp(s.a,c,d)
case 35668:return new A.fq(s.a,c,d)
case 35669:return new A.fr(s.a,c,d)
case 35674:return new A.fs(s.a,c,d)
case 35675:return new A.dr(s.a,c,d)
case 35676:return new A.bK(s.a,c,d)
case 35678:return s.eU(b,c,d)
case 35680:return s.eV(b,c,d)
case 35670:throw H.c(s.bs("BOOL",c))
case 35671:throw H.c(s.bs("BOOL_VEC2",c))
case 35672:throw H.c(s.bs("BOOL_VEC3",c))
case 35673:throw H.c(s.bs("BOOL_VEC4",c))
default:throw H.c(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.bV.prototype={
i:function(a){return this.b}}
A.dc.prototype={}
A.dd.prototype={}
A.di.prototype={
er:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.C,b="Required uniform value, ",a=", was not defined or used in shader."
""+"attribute vec3 posAttr;\n"
""+"attribute vec3 posAttr;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n"
s=""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n"
d.bA(0,s.charCodeAt(0)==0?s:s,A.nd(a0,a1))
d.x=d.gX(d).h(0,"posAttr")
d.y=t.y.a(d.gv().E(0,"txtCount"))
d.z=t.F.a(d.gv().E(0,"backClr"))
for(s=t.W,r=t.ch,q=d.dy,p=d.dx,o=d.db,n=d.cy,m=t.em,l=d.cx,k=t.cH,j=d.ch,i=d.Q,h=0;h<a0;++h){g=d.r
if(g==null)H.h(P.e(c))
f="txt"+h
e=g.h(0,f)
if(e==null)H.h(P.e(b+f+a))
i.push(k.a(e))
g=d.r
if(g==null)H.h(P.e(c))
f="clrMat"+h
e=g.h(0,f)
if(e==null)H.h(P.e(b+f+a))
j.push(m.a(e))
g=d.r
if(g==null)H.h(P.e(c))
f="srcLoc"+h
e=g.h(0,f)
if(e==null)H.h(P.e(b+f+a))
l.push(r.a(e))
g=d.r
if(g==null)H.h(P.e(c))
f="srcSize"+h
e=g.h(0,f)
if(e==null)H.h(P.e(b+f+a))
n.push(r.a(e))
g=d.r
if(g==null)H.h(P.e(c))
f="destLoc"+h
e=g.h(0,f)
if(e==null)H.h(P.e(b+f+a))
o.push(r.a(e))
g=d.r
if(g==null)H.h(P.e(c))
f="destSize"+h
e=g.h(0,f)
if(e==null)H.h(P.e(b+f+a))
p.push(r.a(e))
g=d.r
if(g==null)H.h(P.e(c))
f="flip"+h
e=g.h(0,f)
if(e==null)H.h(P.e(b+f+a))
q.push(s.a(e))}}}
A.Y.prototype={}
A.jh.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
E:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.p)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.bJ.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.fp.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.fq.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.fr.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.fo.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.dl.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.ce.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.dm.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.dn.prototype={
cN:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.fs.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.dr.prototype={
af:function(a){var s=new Float32Array(H.cn(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.bK.prototype={
af:function(a){var s=new Float32Array(H.cn(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.bL.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.dt.prototype={
cP:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jQ.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cu(q.b,b).cu(q.d.cu(q.c,b),c)
q=new V.a4(p.a,p.b,p.c)
if(!J.a2(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a8()}a.sbl(p.J())
q=1-b
s=1-c
s=new V.bb(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.a2(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a8()}},
$S:35}
F.an.prototype={
aT:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.e("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.ga3().b.push(s)
s.b=b
b.ga3().c.push(s)
s.c=c
c.ga3().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga3().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a8()}},
eP:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.fy()
if(n!=null)q=q.a_(0,n)
if(s!=null)q=q.a_(0,s)
if(r!=null)q=q.a_(0,r)
if(q.dU())return p
return q.J()},
eR:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aS(0,n)
q=new V.E(o.a,o.b,o.c).J()
o=r.aS(0,n)
return q.bi(new V.E(o.a,o.b,o.c).J()).J()},
cb:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eP()
if(s==null){s=q.eR()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a8()}return!0},
eO:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.fy()
if(n!=null)q=q.a_(0,n)
if(s!=null)q=q.a_(0,s)
if(r!=null)q=q.a_(0,r)
if(q.dU())return p
return q.J()},
eQ:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.A().toString
if(Math.abs(p-0)<1e-9){j=b.aS(0,e)
o=new V.E(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.b9(0)}else{n=(j-s.b)/p
j=b.aS(0,e)
j=new V.a4(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aS(0,h)
o=new V.E(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b9(0)}m=l.d
if(m!=null){m=m.J()
o=m.bi(o).J().bi(m).J()}return o},
c9:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eO()
if(s==null){s=q.eQ()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a8()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
D:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gb5(p)
p=a+C.d.aq(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gb5(o)
p=p+C.d.aq(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gb5(o)
s=p+C.d.aq(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.u()
return s+((p==null?"-":p)+"}")},
u:function(){return this.D("")}}
F.ey.prototype={
eo:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.e("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.e("May not create a line with vertices attached to different shapes."))
s.a=a
a.gaB(a).b.push(s)
s.b=b
b.gaB(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gaB(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a8()}},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
D:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gb5(s)
s=a+C.d.aq(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gb5(r)
return s+C.d.aq(C.b.i(r==null?-1:r),0)},
u:function(){return this.D("")}}
F.eS.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
D:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gb5(s)
return a+C.d.aq(C.b.i(s),0)},
u:function(){return this.D("")}}
F.iX.prototype={
ga4:function(){var s=this.a
return s==null?this.a=new F.y(this,H.b([],t.k)):s},
gbD:function(a){var s=this.b
return s==null?this.b=new F.cb(this,H.b([],t.I)):s},
gaB:function(a){var s=this.c
return s==null?this.c=new F.da(this,H.b([],t.L)):s},
ga3:function(){var s=this.d
return s==null?this.d=new F.d9(this,H.b([],t.v)):s},
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
hT:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.ga4().W()
s=b.ga4().c.length
for(a0=a1.ga4().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.y(b,H.b([],q))
n.k(0,o.hH())}b.ga4().W()
for(a0=a1.gbD(a1).b,r=a0.length,n=t.I,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.f(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.cb(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).k(0,h)
l=new F.eS()
if(h.a==null)H.h(P.e("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.jt(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.cb(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.q(a)}}}for(a0=a1.gaB(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.f(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.f(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.da(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).k(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).k(0,e)
new F.ey().eo(f,e)}for(a0=a1.ga3().b,r=a0.length,n=t.v,p=0;p<a0.length;a0.length===r||(0,H.p)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.y(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.f(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.f(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.y(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.y(j,H.b([],q)):i).W()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.f(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.d9(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).k(0,f)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).k(0,e)
k=l.a;(k==null?l.a=new F.y(l,H.b([],q)):k).k(0,c)
new F.an().aT(f,e,c)}a0=b.e
if(a0!=null)a0.aD(0)},
aL:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.ga3().aL()||!1
if(!r.ga4().aL())s=!1
q=r.e
if(q!=null)q.aD(0)
return s},
bv:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=34962,c={},b=f.ga4().c.length,a=$.ab(),a0=a3.a,a1=(a0&a.a)!==0?1:0
if((a0&$.bp().a)!==0)++a1
if((a0&$.bo().a)!==0)++a1
if((a0&$.bP().a)!==0)++a1
if((a0&$.bq().a)!==0)++a1
if((a0&$.e2().a)!==0)++a1
if((a0&$.e3().a)!==0)++a1
if((a0&$.cu().a)!==0)++a1
if((a0&$.bn().a)!==0)++a1
s=a3.gcR(a3)
r=P.eA(b*s,0,!1,t.gR)
c.a=0
q=P.mN(a1,new F.iY(c,f,a3,s*4,b,s,r),t.eT)
a=a2.a
a0=a.createBuffer()
a0.toString
a.bindBuffer(d,a0)
a.bufferData(d,new Float32Array(H.cn(r)),35044)
a.bindBuffer(d,e)
p=new Z.b6(new Z.fA(d,a0),H.b([],t.fv),q,a3)
if(f.gbD(f).b.length!==0){o=H.b([],t.t)
a0=t.I
n=t.k
m=0
while(!0){l=f.b
if(l==null){l=f.b=new F.cb(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.f(l,m)
l=l[m].a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).W()}l=l.e}o.push(l==null?0:l);++m}i=Z.kt(a,34963,o)
p.b.push(new Z.c_(0,o.length,i))}if(f.gaB(f).b.length!==0){o=H.b([],t.t)
a0=t.L
n=t.k
m=0
while(!0){l=f.c
if(l==null){l=f.c=new F.da(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.f(l,m)
h=l[m]
l=h.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).W()}l=l.e}o.push(l==null?0:l)
l=h.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).W()}l=l.e}o.push(l==null?0:l);++m}i=Z.kt(a,34963,o)
p.b.push(new Z.c_(1,o.length,i))}if(f.ga3().b.length!==0){o=H.b([],t.t)
a0=t.v
n=t.k
m=0
while(!0){l=f.d
if(l==null){l=f.d=new F.d9(f,H.b([],a0))
k=l}else k=l
if(!(m<l.b.length))break
l=k.b
if(m>=l.length)return H.f(l,m)
g=l[m]
l=g.a
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).W()}l=l.e}o.push(l==null?0:l)
l=g.b
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).W()}l=l.e}o.push(l==null?0:l)
l=g.c
if(l==null)l=e
else{k=l.a
if(k!=null){j=k.a;(j==null?k.a=new F.y(k,H.b([],n)):j).W()}l=l.e}o.push(l==null?0:l);++m}i=Z.kt(a,34963,o)
p.b.push(new Z.c_(4,o.length,i))}return p},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.ga4().c.length!==0){q.push("Vertices:")
q.push(s.ga4().D(r))}if(s.gbD(s).b.length!==0){q.push("Points:")
q.push(s.gbD(s).D(r))}if(s.gaB(s).b.length!==0){q.push("Lines:")
q.push(s.gaB(s).D(r))}if(s.ga3().b.length!==0){q.push("Faces:")
q.push(s.ga3().D(r))}return C.a.p(q,"\n")},
a8:function(){var s=this.e
return s==null?null:s.q(null)}}
F.iY.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.hB(a),e=f.gcR(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.y(o,H.b([],n)):l).c
if(m>=l.length)return H.f(l,m)
k=l[m].hS(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.f(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bT(f,e,c*4,g.d)},
$S:48}
F.d9.prototype={
hy:function(a){var s,r,q,p,o,n,m,l=H.b([],t.v),k=a[0]
for(s=this.a,r=t.k,q=2;q<4;++q){p=a[q-1]
o=a[q]
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).k(0,k)
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).k(0,p)
n=s.a;(n==null?s.a=new F.y(s,H.b([],r)):n).k(0,o)
m=new F.an()
m.aT(k,p,o)
l.push(m)}return l},
hz:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.v)
for(s=this.a,r=t.k,q=b,p=0,o=!1,n=1;n<a;++n,++p,++q){for(m=o,l=1;l<b;++l,q=h){k=c.length
if(p<0||p>=k)return H.f(c,p)
j=c[p];++p
if(p>=k)return H.f(c,p)
i=c[p]
h=q+1
if(h<0||h>=k)return H.f(c,h)
g=c[h]
if(q<0||q>=k)return H.f(c,q)
f=c[q]
k=s.a
if(m){(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,g)
e=new F.an()
e.aT(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,j)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,f)
e=new F.an()
e.aT(j,g,f)
d.push(e)}else{(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,g)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,f)
e=new F.an()
e.aT(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,i)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,f)
k=s.a;(k==null?s.a=new F.y(s,H.b([],r)):k).k(0,j)
e=new F.an()
e.aT(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gj:function(a){return this.b.length},
aL:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.p)(s),++p)if(!s[p].cb())q=!1
return q},
ca:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.p)(s),++p)if(!s[p].c9())q=!1
return q},
i:function(a){return this.u()},
D:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].D(a))
return C.a.p(p,"\n")},
u:function(){return this.D("")}}
F.da.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
D:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.f(q,s)
r.push(q[s].D(a+(""+s+". ")))}return C.a.p(r,"\n")},
u:function(){return this.D("")}}
F.cb.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
D:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].D(a))
return C.a.p(p,"\n")},
u:function(){return this.D("")}}
F.cg.prototype={
cd:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.jo(s.cx,p,m,r,q,o,n,a,l)},
hH:function(){return this.cd(null)},
gaB:function(a){var s=this.c
if(s==null){s=t.L
s=this.c=new F.js(H.b([],s),H.b([],s))}return s},
ga3:function(){var s=this.d
if(s==null){s=t.v
s=this.d=new F.jp(H.b([],s),H.b([],s),H.b([],s))}return s},
gb5:function(a){var s=this.a
if(s!=null)s.ga4().W()
return this.e},
sbl:function(a){var s
if(!J.a2(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a8()}},
hS:function(a){var s,r,q,p,o=this,n=null
if(a.n(0,$.ab())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.n(0,$.bp())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.n(0,$.bo())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.n(0,$.bP())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.n(0,$.bq())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.n(0,$.e2())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.n(0,$.e3())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.n(0,$.cu()))return H.b([o.ch],t.n)
else if(a.n(0,$.bn())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
cb:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.fy()
p.ga3().F(0,new F.jv(o))
p.r=o.a.J()
if(r){s.a8()
o=s.e
if(o!=null)o.aD(0)}return!0},
c9:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.fy()
p.ga3().F(0,new F.ju(o))
p.x=o.a.J()
if(r){s.a8()
o=s.e
if(o!=null)o.aD(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
D:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.d.aq(C.b.i(q.e),0))
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
n.push(V.x(q.ch,3,0))
s=q.cx
s=s==null?p:s.u()
n.push(s==null?o:s)
r=C.a.p(n,", ")
return a+"{"+r+"}"},
u:function(){return this.D("")}}
F.jv.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.a_(0,r)}},
$S:7}
F.ju.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.a_(0,r)}},
$S:7}
F.y.prototype={
W:function(){},
k:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.e("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a8()
return!0},
bt:function(a,b,c,d,e,f){var s=F.jo(a,null,b,c,null,d,e,f,0)
this.k(0,s)
return s},
gj:function(a){return this.c.length},
aL:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)s[q].cb()
return!0},
ca:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)s[q].c9()
return!0},
hD:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.J()
if(!J.a2(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.q(null)}}}}}return!0},
i:function(a){return this.u()},
D:function(a){var s,r,q,p
this.W()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.p)(r),++p)s.push(r[p].D(a))
return C.a.p(s,"\n")},
u:function(){return this.D("")}}
F.jp.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.jq(s,b))
C.a.F(s.d,new F.jr(s,b))},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].D(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].D(""))
return C.a.p(p,"\n")}}
F.jq.prototype={
$1:function(a){if(!J.a2(a.a,this.a))this.b.$1(a)},
$S:7}
F.jr.prototype={
$1:function(a){var s=this.a
if(!J.a2(a.a,s)&&!J.a2(a.b,s))this.b.$1(a)},
$S:7}
F.js.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].D(""))
return C.a.p(p,"\n")}}
F.jt.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.p)(s),++q)p.push(s[q].D(""))
return C.a.p(p,"\n")}}
O.cV.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.D():s},
H:function(a){var s=this.fr
return s==null?null:s.q(a)},
ag:function(){return this.H(null)},
dh:function(a){this.a=null
this.H(a)},
hf:function(){return this.dh(null)},
fi:function(a,b){return this.H(new D.aP())},
fk:function(a,b){return this.H(new D.aQ())},
gcv:function(){var s=this,r=s.dx
if(r==null){r=new D.cO(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.cO(r.gff(),r.gfW(),r.gh_())
r.gm().k(0,s.gdg())
r.gdV().k(0,s.ga6())
s.dx=r}return r},
gc8:function(){var s=this.r
return s==null?this.r=O.eB(this,"ambient"):s},
gcf:function(){var s=this.x
return s==null?this.x=O.eB(this,"diffuse"):s},
gbL:function(){var s=this.z
return s==null?this.z=new O.iA(new V.G(0,0,0),this,"specular",new A.al(!1,!1,!1)):s},
gdB:function(){var s=this.Q
return s==null?this.Q=new O.iw(this,"bump",new A.al(!1,!1,!1)):s},
d6:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.w,a1=new H.X(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=H.b([],t.i)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){q=a2[r]
p=q.gaA()
o=a1.h(0,q.gaA())
a1.l(0,p,o==null?1:o)}n=H.b([],t.cn)
a1.F(0,new O.iB(b,n))
C.a.bb(n,new O.iC())
m=new H.X(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=H.b([],t.U)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=H.b([],t.fD)
m.F(0,new O.iD(b,l))
C.a.bb(l,new O.iE())
k=new H.X(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=H.b([],t.o)
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.p)(a2),++r){q=a2[r]
p=q.gaA()
o=k.h(0,q.gaA())
k.l(0,p,o==null?1:o)}j=H.b([],t.eg)
k.F(0,new O.iF(b,j))
C.a.bb(j,new O.iG())
i=new H.X(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=H.b([],t.D)
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.p)(a0),++r){q=a0[r]
s=q.gaA()
p=i.h(0,q.gaA())
i.l(0,s,p==null?1:p)}h=H.b([],t.c3)
i.F(0,new O.iH(b,h))
C.a.bb(h,new O.iI())
a0=C.b.a1(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.iy(new V.a9(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.eB(b,"emission"):a2).c
s=b.gc8().c
p=b.gcf().c
o=b.y
o=(o==null?b.y=O.eB(b,"invDiffuse"):o).c
g=b.gbL().c
f=b.gdB().c
e=b.cx
e=(e==null?b.cx=O.eB(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.iz(new V.G(0,0,0),b,"refract",new A.al(!1,!1,!1)):d).c
c=b.db
return A.mP(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.iv(b,"alpha",new A.al(!1,!1,!1)):c).c,n,l,j,h)},
aj:function(a,b){if(b!=null)if(!C.a.A(a,b)){b.a=a.length
a.push(b)}},
aa:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aL(m==null?H.b([],t.e):m)
s=H.J(m).c
for(;m.t();){r=s.a(m.d)
q=$.jn
if(q==null)q=$.jn=new V.E(0,0,1)
r.c=q
p=$.jm
r.d=p==null?$.jm=new V.E(0,1,0):p
p=$.jl
r.e=p==null?$.jl=new V.E(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bH(q).J()
r.d=n.bH(r.d).J()
r.e=n.bH(r.e).J()}}},
bF:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.d6()
r=s.by
a9=t.eI.a(b0.fr.h(0,r))
if(a9==null){q=b0.a
p=t.S
o=t.W
a9=new A.cW(s,H.b([],t.p),P.P(p,o),P.P(p,t.O),P.P(p,o),P.P(p,t.r),P.P(p,o),P.P(p,t.f0),P.P(p,o),P.P(p,t.R),q,r)
a9.ep(s,q)
b0.bu(a9)}a9=a7.a=a9
b1.e=null}n=a9.x
m=n.bz
s=b1.e
if(!(s instanceof Z.b6))s=b1.e=null
if(s==null||!s.d.n(0,m)){s=n.k4
if(s){r=b1.d
if(r!=null)r.aL()}r=n.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.ga3().ca()
q.ga4().ca()
q=q.e
if(q!=null)q.aD(0)}}q=n.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga4().hD()
p=p.e
if(p!=null)p.aD(0)}}p=b1.d
l=p==null?a8:p.bv(new Z.ch(b0.a),m)
if(l==null)return
p=l.at($.ab())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=l.at($.bp())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=l.at($.bo())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(n.r2){s=l.at($.bP())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=l.at($.bq())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(n.ry){s=l.at($.bn())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=l}k=H.b([],t.d)
a9.O(b0)
if(n.fr){s=b0.dx
s=s.gP(s)
r=a9.db
if(r!=null)r.af(s.a5(0,!0))}if(n.fx){s=b0.cx
if(s==null){s=b0.db
r=b0.dx
r=b0.cx=s.gP(s).M(0,r.gP(r))
s=r}r=a9.dx
if(r!=null)r.af(s.a5(0,!0))}s=b0.ge6()
r=a9.fr
if(r!=null)r.af(s.a5(0,!0))
if(n.go){s=b0.db
s=s.gP(s)
r=a9.dy
if(r!=null)r.af(s.a5(0,!0))}if(n.x1){s=$.l6
if(s==null){s=new V.cZ(1,0,0,0,1,0,0,0,1)
$.l6=s}r=a9.go
if(r!=null)r.af(s.a5(0,!0))}if(n.x2){s=V.ac()
r=a9.id
if(r!=null)r.af(s.a5(0,!0))}if(n.y1){s=V.ac()
r=a9.k1
if(r!=null)r.af(s.a5(0,!0))}if(n.b3>0){s=a7.e.a
j=s.length
r=a9.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.f(s,i)
r=s[i]
q=a9.k3
if(i>=q.length)return H.f(q,i)
q=q[i]
h=new Float32Array(H.cn(r.a5(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a7.f
r=r==null?a8:r.f
if(r==null)r=new V.G(0,0,0)
q=a9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.f
a7.aj(k,s==null?a8:s.e)
s=a7.f
s=s==null?a8:s.e
a9.ak(a9.r2,s)}if(n.k1){s=n.b
if(s.a){r=a7.r
r=r==null?a8:r.f
if(r==null)r=new V.G(0,0,0)
q=a9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.r
a7.aj(k,s==null?a8:s.e)
s=a7.r
s=s==null?a8:s.e
a9.ak(a9.x1,s)}s=n.c
if(s.a){r=a7.x
r=r==null?a8:r.f
if(r==null)r=new V.G(0,0,0)
q=a9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.x
a7.aj(k,s==null?a8:s.e)
s=a7.x
s=s==null?a8:s.e
a9.ak(a9.y2,s)}s=n.d
if(s.a){r=a7.y
r=r==null?a8:r.f
if(r==null)r=new V.G(0,0,0)
q=a9.b3
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.y
a7.aj(k,s==null?a8:s.e)
s=a7.y
s=s==null?a8:s.e
a9.ak(a9.bz,s)}s=n.e
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a7.z
q=q==null?a8:q.ch
if(q==null)q=100
p=a9.dI
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.z
r=r==null?a8:r.f
if(r==null)r=new V.G(1,1,1)
q=a9.dG
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.z
a7.aj(k,s==null?a8:s.e)
s=a7.z
s=s==null?a8:s.e
a9.ak(a9.dH,s)}s=n.z
if(s.length>0){g=new H.X(t.w)
r=a7.dx
r=r==null?a8:r.e
if(r==null)r=H.b([],t.i)
q=r.length
p=t.f
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaA()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
o=a9.ck.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.f(o,c)
b=o[c]
o=e.gir()
a=$.aX
o=o.bn(a==null?$.aX=new V.a4(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giw()
a=$.aX
o=o.bn(a==null?$.aX=new V.a4(0,0,0):a)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb2(e)
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
if(e.gdE()){o=e.gdu()
a=b.e
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdv()
a=b.f
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdw()
a=b.r
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a9.cj.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b0.db
a0=r.gP(r)
a1=new H.X(t.w)
r=a7.dx
r=r==null?a8:r.f
if(r==null)r=H.b([],t.U)
q=r.length
p=t.V
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
c=a1.h(0,0)
if(c==null)c=0
a1.l(0,0,c+1)
o=a9.cm.h(0,0)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.f(o,c)
b=o[c]
o=a0.bH(e.c).J()
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.b
a=b.f
a.a.uniform3f(a.d,o.a,o.b,o.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a9.cl.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b0.db
a0=r.gP(r)
a2=new H.X(t.w)
r=a7.dx
r=r==null?a8:r.r
if(r==null)r=H.b([],t.o)
q=r.length
p=t.E
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaA()
c=a2.h(0,d)
if(c==null)c=0
a2.l(0,d,c+1)
o=a9.co.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.f(o,c)
b=o[c]
a3=a0.M(0,e.gP(e))
o=e.gP(e)
a=$.aX
o=o.bn(a==null?$.aX=new V.a4(0,0,0):a)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=$.aX
o=a3.bn(o==null?$.aX=new V.a4(0,0,0):o)
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb2(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaP()
o=a3.cr(0)
a=b.d
if(a!=null){h=new Float32Array(H.cn(new V.cZ(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).a5(0,!0)))
a.a.uniformMatrix3fv(a.d,!1,h)}e.gaP()
o=e.gaP()
if(!C.a.A(k,o)){o.a=k.length
k.push(o)}o=e.gaP()
a=o.gcw(o)
if(a){a=b.f
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gba()
o=e.gef()
a=b.x
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gba()
if(!C.a.A(k,o)){o.a=k.length
k.push(o)}o=e.gba()
a=o.gcw(o)
if(a){a=b.r
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(a4<6)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.gdE()){o=e.gdu()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdv()
a=b.z
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdw()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a2.h(0,q)
if(j==null)j=0
q=a9.cn.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b0.db
a0=r.gP(r)
a6=new H.X(t.w)
r=a7.dx
r=r==null?a8:r.x
if(r==null)r=H.b([],t.D)
q=r.length
p=t.J
f=0
for(;f<r.length;r.length===q||(0,H.p)(r),++f){e=r[f]
d=e.gaA()
c=a6.h(0,d)
if(c==null)c=0
a6.l(0,d,c+1)
o=a9.cq.h(0,d)
if(o==null)o=H.b([],p)
if(c>>>0!==c||c>=o.length)return H.f(o,c)
b=o[c]
o=e.gi6(e)
a=b.b
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giu(e).J()
a=b.c
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=a0.bn(e.gi6(e))
a=b.d
a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gb2(e)
a=b.e
a.a.uniform3f(a.d,o.a,o.b,o.c)
e.gaP()
o=e.gbI()
a=b.f
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.gcG(e)
a=b.r
if(a!=null)a.a.uniform3f(a.d,o.a,o.b,o.c)
o=e.giF()
a=b.x
if(a!=null)a.a.uniform1f(a.d,o)
o=e.giG()
a=b.y
if(a!=null)a.a.uniform1f(a.d,o)
e.gaP()
o=e.gaP()
if(!C.a.A(k,o)){o.a=k.length
k.push(o)}o=e.gaP()
a=o.gcw(o)
if(a){a=b.dx
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}e.gba()
o=e.gef()
a=b.z
if(a!=null)a.a.uniform4f(a.d,o.a,o.b,o.c,o.d)
o=e.gba()
if(!C.a.A(k,o)){o.a=k.length
k.push(o)}o=e.gba()
a=o.gcw(o)
if(a){a=b.dy
if(a!=null){a4=o.d
a5=a.a
a=a.d
if(!a4)a5.uniform1i(a,0)
else a5.uniform1i(a,o.a)}}if(e.giv()){o=e.git()
a=b.Q
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gis()
a=b.ch
if(a!=null)a.a.uniform1f(a.d,o)}if(e.gdE()){o=e.gdu()
a=b.cx
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdv()
a=b.cy
if(a!=null)a.a.uniform1f(a.d,o)
o=e.gdw()
a=b.db
if(a!=null)a.a.uniform1f(a.d,o)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.p)(s),++f){q=s[f].a
j=a6.h(0,q)
if(j==null)j=0
q=a9.cp.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.c){s=a7.Q
a7.aj(k,s==null?a8:s.e)
s=a7.Q
s=s==null?a8:s.e
a9.ak(a9.dJ,s)}if(n.dy){s=b0.Q
if(s==null){s=b0.db
s=b0.Q=s.gP(s).cr(0)}r=a9.fy
if(r!=null)r.af(s.a5(0,!0))}if(n.db){a7.aj(k,a8)
a9.ak(a9.dK,a8)
s=n.r
if(s.a){r=a7.cx
r=r==null?a8:r.f
if(r==null)r=new V.G(1,1,1)
q=a9.dL
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.cx
a7.aj(k,s==null?a8:s.e)
s=a7.cx
s=s==null?a8:s.e
a9.ak(a9.dM,s)}s=n.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a7.cy
q=q==null?a8:q.ch
if(q==null)q=0
p=a9.dN
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.cy
r=r==null?a8:r.f
if(r==null)r=new V.G(1,1,1)
q=a9.dO
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a7.cy
a7.aj(k,s==null?a8:s.e)
s=a7.cy
s=s==null?a8:s.e
a9.ak(a9.dP,s)}}s=n.y
r=s.a
q=!r
if(q)p=s.c
else p=!0
if(p){if(r){r=a7.db
r=r==null?a8:r.f
if(r==null)r=1
p=a9.dQ
if(p!=null)p.a.uniform1f(p.d,r)}if(s.c){r=a7.db
a7.aj(k,r==null?a8:r.e)
r=a7.db
r=r==null?a8:r.e
a9.ak(a9.dR,r)}r=b0.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].O(b0)
r=t.C.a(b1.e)
r.O(b0)
r.a9(b0)
r.ae(b0)
if(q)s=s.c
else s=!0
if(s)b0.a.disable(3042)
for(s=b0.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a8)}}s.useProgram(a8)
a9.gX(a9).bx()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.d6().by}}
O.iB.prototype={
$2:function(a,b){return this.b.push(new A.b4(a,C.b.a1(b+3,4)*4))},
$S:8}
O.iC.prototype={
$2:function(a,b){return C.b.al(a.a,b.a)},
$S:40}
O.iD.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.b.a1(b+3,4)*4))},
$S:8}
O.iE.prototype={
$2:function(a,b){return C.b.al(a.a,b.a)},
$S:41}
O.iF.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.b.a1(b+3,4)*4))},
$S:8}
O.iG.prototype={
$2:function(a,b){return C.b.al(a.a,b.a)},
$S:42}
O.iH.prototype={
$2:function(a,b){return this.b.push(new A.be(a,C.b.a1(b+3,4)*4))},
$S:8}
O.iI.prototype={
$2:function(a,b){return C.b.al(a.a,b.a)},
$S:43}
O.iv.prototype={
aI:function(){var s,r=this
r.cV()
s=r.f
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.H(new D.v(r.b,s,1))}}}
O.cX.prototype={
H:function(a){return this.a.H(a)},
ag:function(){return this.H(null)},
aI:function(){},
c4:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aI()
s=q.a
s.a=null
s.H(null)}},
sbl:function(a){var s,r=this,q=r.c
if(!q.c)r.c4(new A.al(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().L(0,r.ga6())
s=r.e
r.e=a
a.gm().k(0,r.ga6())
r.a.H(new D.v(r.b+".textureCube",s,r.e))}}}
O.iw.prototype={}
O.cY.prototype={
dj:function(a){var s,r=this
if(!r.f.n(0,a)){s=r.f
r.f=a
r.a.H(new D.v(r.b+".color",s,a))}},
aI:function(){this.cV()
this.dj(new V.G(1,1,1))},
sb2:function(a,b){this.c4(new A.al(!0,!1,this.c.c))
this.dj(b)}}
O.iy.prototype={}
O.iz.prototype={
aI:function(){var s,r=this
r.cW()
s=r.ch
$.A().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.H(new D.v(r.b+".refraction",s,1))}}}
O.iA.prototype={
dl:function(a){var s=this,r=s.ch
$.A().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.H(new D.v(s.b+".shininess",r,a))}},
aI:function(){this.cW()
this.dl(100)}}
O.db.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
H:function(a){var s=this.e
return s==null?null:s.q(a)},
ag:function(){return this.H(null)},
aa:function(a,b){},
bF:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.dm.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.dc(a.a,"Skybox")
s.bA(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gX(s).h(0,"posAttr")
r=t.u
s.y=r.a(s.gv().h(0,"fov"))
s.z=r.a(s.gv().h(0,"ratio"))
s.Q=t.g.a(s.gv().h(0,"boxClr"))
s.ch=t.a.a(s.gv().h(0,"boxTxt"))
s.cx=t.j.a(s.gv().h(0,"viewMat"))
a.bu(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.bv(new Z.ch(a.a),$.ab())
if(r==null)r=l
else{q=r.at($.ab())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.O(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.O(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.cP(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.gP(r).cr(0)
p=p.cx
if(p!=null)p.af(r.a5(0,!0))}r=b.e
if(r instanceof Z.b6){r.O(a)
r.a9(a)
r.ae(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gX(r).bx()}o.ae(a)}}
O.f0.prototype={
gm:function(){var s=this.c
return s==null?this.c=D.D():s},
aa:function(a,b){},
bF:function(a,b){var s,r,q,p,o=this,n=null,m="SolidColor"
if(o.a==null){s=t.eA.a(a.fr.h(0,m))
if(s==null){s=new A.dd(a.a,m)
s.bA(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
s.x=s.gX(s).h(0,"posAttr")
s.y=t.F.a(s.gv().h(0,"color"))
s.z=t.j.a(s.gv().h(0,"projViewObjMat"))
a.bu(s)}o.a=s}r=b.e
if((!(r instanceof Z.b6)?b.e=null:r)==null){r=b.d
r=r==null?n:r.bv(new Z.ch(a.a),$.ab())
if(r==null)r=n
else{q=r.at($.ab())
if(q!=null){p=o.a
if(p==null)p=n
else{p=p.x
p=p==null?n:p.c}q.e=p==null?0:p}}b.e=r}r=o.a
if(r!=null){r.O(a)
q=r.y
if(q!=null)q.cN(o.b)
q=a.ge6()
r=r.z
if(r!=null)r.af(q.a5(0,!0))}r=t.C.a(b.e)
r.O(a)
r.a9(a)
r.ae(a)
r=o.a
if(r!=null){a.a.useProgram(n)
r.gX(r).bx()}}}
O.bg.prototype={}
O.dh.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.D():s},
H:function(a){var s=this.r
return s==null?null:s.q(a)},
ag:function(){return this.H(null)},
fB:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.ga6(),q=t.b,p=0;p<b.length;b.length===s||(0,H.p)(b),++p){o=b[p]
n=o.f
if(n==null)n=o.f=new D.bx()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.ag()},
fD:function(a,b){var s,r
for(s=b.gN(b),r=this.ga6();s.t();)s.gC(s).gm().L(0,r)
this.ag()},
aa:function(a,b){},
f1:function(a){a=C.b.a1(a+3,4)*4
if(a<=0)return 4
return a},
bF:function(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.c.a,a2=a.f1(a1.length)
if(a2!==a.d||C.h!==a.f){a.d=a2
a.f=C.h
a.a=null}s=a.a
if(s==null){s=t.fB.a(a3.fr.h(0,"TextureLayout_"+a2+"_"+C.b.i(3)))
if(s==null){r=a3.a
q=t.bT
s=new A.di(H.b([],t.h4),H.b([],t.p),H.b([],q),H.b([],q),H.b([],q),H.b([],q),H.b([],t.b8),r,"TextureLayout_"+a2+"_"+C.b.i(3))
s.er(a2,C.h,r)
a3.bu(s)}s=a.a=s}if(a4.e==null){r=a4.d
r=r==null?a0:r.bv(new Z.ch(a3.a),$.ab())
if(r==null)r=a0
else{q=r.at($.ab())
if(q!=null){p=s.x
p=p==null?a0:p.c
q.e=p==null?0:p}}a4.e=r}s.O(a3)
o=H.b([],t.d)
for(r=s.dy,q=s.dx,p=s.db,n=s.cy,m=s.cx,l=s.ch,k=s.Q,j=0,i=0;i<a1.length;++i){h=a1[i]
g=h.a
if(g!=null){if(!C.a.A(o,g)){g.a=o.length
o.push(g)}if(j>=k.length)return H.f(k,j)
f=k[j]
e=g.d
d=f.a
f=f.d
if(!e)d.uniform1i(f,0)
else d.uniform1i(f,g.a)
f=h.b
if(j>=l.length)return H.f(l,j)
e=l[j]
c=new Float32Array(H.cn(f.a5(0,!0)))
e.a.uniformMatrix4fv(e.d,!1,c)
b=h.c
if(j>=m.length)return H.f(m,j)
f=m[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=n.length)return H.f(n,j)
f=n[j]
f.a.uniform2f(f.d,b.c,b.d)
b=h.d
if(j>=p.length)return H.f(p,j)
f=p[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=q.length)return H.f(q,j)
f=q[j]
f.a.uniform2f(f.d,b.c,b.d)
if(j>=r.length)return H.f(r,j)
f=r[j]
f.a.uniform1i(f.d,0);++j}}a1=s.y
if(a1!=null)a1.a.uniform1i(a1.d,j)
a1=s.z
if(a1!=null)a1.cN(a.b)
for(a1=a3.a,i=0;i<o.length;++i){r=o[i]
if(!r.c&&r.d){r.c=!0
a1.activeTexture(33984+r.a)
a1.bindTexture(3553,r.b)}}r=a4.e
if(r instanceof Z.b6){r.O(a3)
r.a9(a3)
r.ae(a3)}else a4.e=null
a1.useProgram(a0)
s.gX(s).bx()
for(i=0;i<o.length;++i){r=o[i]
if(r.c){r.c=!1
a1.activeTexture(33984+r.a)
a1.bindTexture(3553,a0)}}}}
O.bH.prototype={
H:function(a){var s=this.f
return s==null?null:s.q(a)},
ag:function(){return this.H(null)}}
T.eg.prototype={
bo:function(a){return null},
eG:function(){return this.bo(null)},
aK:function(a){var s,r=this
if(r.b!=null)return!1
r.b=a
a.gY().gcg().k(0,r.gf7())
a.gY().gb8().k(0,r.gf9())
a.gY().gbI().k(0,r.gfb())
s=a.gav()
s.gcS(s).k(0,r.ghs())
a.gav().gb8().k(0,r.ghq())
s=a.gav()
s.gdF(s).k(0,r.gho())
return!0},
f8:function(a){if(!t.Z.a(a).x.b.n(0,this.c))return
this.ch=this.Q=!0},
fa:function(a){var s
if(!this.Q)return
if(this.ch){t.Z.a(a)
s=a.y.ab(a.d)
if(s.a2(s)<4)return
this.ch=!1}},
fc:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.df(a)},
ht:function(a){this.ch=this.Q=!0},
hr:function(a){var s
if(!this.Q)return
if(this.ch){t.dr.a(a)
s=a.y.ab(a.d)
if(s.a2(s)<4)return
this.ch=!1}},
hp:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.df(a)},
df:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.d
if(f==null)return
t.Z.a(a)
s=a.d
r=a.c
q=s.a/r.c
p=s.b/r.d
o=T.ll(this.a.a,f,!0,1,1,C.c.b4(q*(f.r-1)),C.c.b4(p*(f.x-1)))
s=o.b
n=C.b.bK(0,s)
m=C.b.bK(0,o.c)
l=(n+m*s)*4
s=o.a
r=s.length
if(l<0||l>=r)return H.f(s,l)
k=s[l]
j=l+1
if(j>=r)return H.f(s,j)
j=s[j]
i=l+2
if(i>=r)return H.f(s,i)
i=s[i]
h=l+3
if(h>=r)return H.f(s,h)
g=V.ef(k,j,i,s[h])
h=this.x
if(h!=null)h.q(new T.cx(new V.a_(q,p),g))}}
T.cx.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.bG.prototype={}
T.ff.prototype={}
T.fg.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.D():s}}
T.fh.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.D():s},
O:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
ae:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.j6.prototype={
dX:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
i.toString
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.fh(i)
r.aX(s,i,p,34069,!1,!1)
r.aX(s,i,m,34070,!1,!1)
r.aX(s,i,o,34071,!1,!1)
r.aX(s,i,l,34072,!1,!1)
r.aX(s,i,n,34073,!1,!1)
r.aX(s,i,k,34074,!1,!1)
return s},
dW:function(a){return this.dX(a,".png")},
aX:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.a0(s,"load",new T.j7(this,s,!1,b,!1,d,a),!1)},
hg:function(a,b,c){var s,r,q,p,o,n
b=V.e1(b)
s=a.width
r=V.e1(s==null?512:s)
s=a.height
q=V.e1(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.hT()
p.width=r
p.height=q
o=t.m.a(C.f.cK(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.lR(o.getImageData(0,0,s,n==null?512:n))}}}
T.j7.prototype={
$1:function(a){var s=this,r=s.a,q=r.hg(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.x.ii(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.ci()}++r.e},
$S:4}
T.j8.prototype={
f_:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.c,r=C.b.a1(s,2),q=this.b,p=this.a,o=p.length,n=q*4,--s;r>=0;--r){m=n*r
l=n*(s-r)
for(k=0;k<q;++k){j=4*k
i=m+j
h=l+j
for(g=0;g<4;++g){f=i+g
e=h+g
if(f<0||f>=o)return H.f(p,f)
d=p[f]
if(e<0||e>=o)return H.f(p,e)
p[f]=p[e]
p[e]=d}}}}}
X.hO.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.D():s},
a0:function(a){var s=this.fr
return s==null?null:s.q(a)},
sar:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.a0(new D.v("width",s,b))}},
san:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.a0(new D.v("height",s,b))}},
O:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
h.sar(0,C.c.S(r*h.r))
s=s.drawingBufferHeight
if(s==null)s=512
h.san(0,C.c.S(s*h.x))}if(h.y==null){s=a.a
r=h.ch
q=h.a
p=h.b
o=H.hF(s.getParameter(3379))
n=V.e1(q)
m=V.e1(p)
o=V.e1(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(f,l)
s.texParameteri(f,10242,33071)
s.texParameteri(f,10243,33071)
s.texParameteri(f,10241,9729)
s.texParameteri(f,10240,9729)
C.x.ea(s,f,0,6408,n,m,0,6408,5121,g)
s.bindTexture(f,g)
k=T.lk(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.ci()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.ci()
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
a.c=C.c.S(r*h.a)
q=j.d
a.d=C.c.S(q*h.b)
p=h.c
i=C.c.S(j.a*p)
l=h.d
s.viewport(i,C.c.S(j.b*l),C.c.S(r*p),C.c.S(q*l))
s.clearDepth(h.db)
r=h.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
if(16640>0)s.clear(16640)},
ae:function(a){a.a.bindFramebuffer(36160,null)}}
X.ii.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.D():s},
O:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.c.S(q.a*s)
o=C.c.S(q.b*r)
n=C.c.S(q.c*s)
a.c=n
q=C.c.S(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)},
ae:function(a){}}
X.ik.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.D():s},
O:function(a){var s
a.cy.bE(V.ac())
s=V.ac()
a.db.bE(s)},
ae:function(a){a.cy.aM()
a.db.aM()}}
X.eP.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.D():s},
a0:function(a){var s=this.f
return s==null?null:s.q(a)},
eK:function(){return this.a0(null)},
O:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aU(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bE(i)
s=$.m4()
r=q.b
if(r!=null)s=r.aE(0,a,q).M(0,s)
a.db.bE(s)},
ae:function(a){a.cy.aM()
a.db.aM()}}
X.j5.prototype={}
V.hR.prototype={
hv:function(a,b,c){var s,r=document,q=r.createElement("button"),p=q.style
p.whiteSpace="nowrap"
C.D.ee(q,b)
W.a0(q,"click",new V.hS(c),!1)
p=this.a
s=J.aJ(p)
s.gbw(p).k(0,q)
p=s.gbw(p)
r=r.createElement("br")
r.toString
p.k(0,r)
this.b.push(q)}}
V.hS.prototype={
$1:function(a){return this.a.$0()},
$S:3}
V.k9.prototype={
$1:function(a){var s=C.c.cI(this.a.ghP(),2)
if(s!=="0.00")P.kN(s+" fps")},
$S:45}
V.iZ.prototype={
ds:function(a){var s,r,q,p,o,n,m=this.hk(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.Q(C.a.hR(a)),s=new P.cm(m.eb(new H.bC(s,s.gj(s))).a());s.t();){r=s.gC(s)
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
if(H.lZ(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.nJ(C.V,r,C.q,!1)
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
hw:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
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
q=t.bY
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
hk:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
s=t.N
f=new L.jc(P.P(s,t.dl),P.P(s,t.f7),P.cP(s))
f.d=f.K(0,o)
s=f.K(0,o).p(0,n)
r=t.t
q=new K.V(H.b([],r))
q.U(new H.Q("*"))
s.a.push(q)
s.c=!0
s=f.K(0,n).p(0,n)
q=t.B
p=H.b([],q)
s.a.push(new K.aV(p))
s=new K.V(H.b([],r))
s.U(new H.Q("*"))
p.push(s)
s=f.K(0,n).p(0,"BoldEnd")
p=new K.V(H.b([],r))
p.U(new H.Q("*"))
s.a.push(p)
s.c=!0
s=f.K(0,o).p(0,m)
p=new K.V(H.b([],r))
p.U(new H.Q("_"))
s.a.push(p)
s.c=!0
s=f.K(0,m).p(0,m)
p=H.b([],q)
s.a.push(new K.aV(p))
s=new K.V(H.b([],r))
s.U(new H.Q("_"))
p.push(s)
s=f.K(0,m).p(0,l)
p=new K.V(H.b([],r))
p.U(new H.Q("_"))
s.a.push(p)
s.c=!0
s=f.K(0,o).p(0,k)
p=new K.V(H.b([],r))
p.U(new H.Q("`"))
s.a.push(p)
s.c=!0
s=f.K(0,k).p(0,k)
p=H.b([],q)
s.a.push(new K.aV(p))
s=new K.V(H.b([],r))
s.U(new H.Q("`"))
p.push(s)
s=f.K(0,k).p(0,"CodeEnd")
p=new K.V(H.b([],r))
p.U(new H.Q("`"))
s.a.push(p)
s.c=!0
s=f.K(0,o).p(0,j)
p=new K.V(H.b([],r))
p.U(new H.Q("["))
s.a.push(p)
s.c=!0
s=f.K(0,j).p(0,i)
p=new K.V(H.b([],r))
p.U(new H.Q("|"))
s.a.push(p)
p=f.K(0,j).p(0,h)
s=new K.V(H.b([],r))
s.U(new H.Q("]"))
p.a.push(s)
p.c=!0
p=f.K(0,j).p(0,j)
s=H.b([],q)
p.a.push(new K.aV(s))
p=new K.V(H.b([],r))
p.U(new H.Q("|]"))
s.push(p)
p=f.K(0,i).p(0,h)
s=new K.V(H.b([],r))
s.U(new H.Q("]"))
p.a.push(s)
p.c=!0
p=f.K(0,i).p(0,i)
s=H.b([],q)
p.a.push(new K.aV(s))
p=new K.V(H.b([],r))
p.U(new H.Q("|]"))
s.push(p)
f.K(0,o).p(0,g).a.push(new K.e6())
p=f.K(0,g).p(0,g)
q=H.b([],q)
p.a.push(new K.aV(q))
r=new K.V(H.b([],r))
r.U(new H.Q("*_`["))
q.push(r)
r=f.K(0,"BoldEnd")
r.d=r.a.bm(n)
r=f.K(0,l)
r.d=r.a.bm(m)
r=f.K(0,"CodeEnd")
r.d=r.a.bm(k)
r=f.K(0,h)
r.d=r.a.bm("Link")
r=f.K(0,g)
r.d=r.a.bm(g)
return this.b=f}}
V.j0.prototype={
$1:function(a){P.ln(C.i,new V.j_(this.a))},
$S:4}
V.j_.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.c.S(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.w(-0.01*s)+"px"
q.top=r},
$S:2}
A.k5.prototype={
$1:function(a){var s,r,q,p,o,n
for(s=this.a,r=0;r<s.length;++r){q=s[r]
p=q.e
o=0.99*p
$.A().toString
if(!(Math.abs(p-o)<1e-9)){q.e=o
n=q.y
if(n!=null)n.q(new D.v("deltaPitch",p,o))}p=q.f
o=0.99*p
$.A().toString
if(!(Math.abs(p-o)<1e-9)){q.f=o
n=q.y
if(n!=null)n.q(new D.v("deltaRoll",p,o))}}},
$S:1}
A.k6.prototype={
$1:function(a){var s,r,q,p,o=t.aw.a(a).d.io()
for(s=this.a,r=0;r<s.length;++r)if(s[r].n(0,o)){s=this.b
if(r>=s.length)return H.f(s,r)
q=s[r]
s=q.e
$.A().toString
if(!(Math.abs(s-1.21)<1e-9)){q.e=1.21
p=q.y
if(p!=null)p.q(new D.v("deltaPitch",s,1.21))}s=q.f
$.A().toString
if(!(Math.abs(s-1.31)<1e-9)){q.f=1.31
p=q.y
if(p!=null)p.q(new D.v("deltaRoll",s,1.31))}break}},
$S:1}
A.k7.prototype={
$0:function(){var s,r,q,p,o,n="image/png",m=T.ll(this.a.f.a,this.b.ch,!0,null,null,0,0),l=W.hT(),k=m.b
l.width=k
s=m.c
l.height=s
r=t.m.a(C.f.cK(l,"2d"))
q=C.r.hJ(r,k,s)
C.W.ed(J.kP(q),0,m.a)
C.r.i8(r,q,0,0)
m=l.toDataURL(n,100)
m.toString
p=H.oX(m,n,"image/octet-stream",0)
o=W.kR()
o.setAttribute("download","backBuffer.png")
o.setAttribute("href",p)
o.click()},
$S:2};(function aliases(){var s=J.a.prototype
s.ej=s.i
s=J.bA.prototype
s.el=s.i
s=P.j.prototype
s.cU=s.T
s=P.i.prototype
s.ek=s.bJ
s=W.C.prototype
s.bM=s.am
s=W.dJ.prototype
s.em=s.az
s=K.cK.prototype
s.ei=s.b7
s.bN=s.i
s=O.cX.prototype
s.cV=s.aI
s=O.cY.prototype
s.cW=s.aI})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"nU","mK",46)
r(P,"oy","nk",9)
r(P,"oz","nl",9)
r(P,"oA","nm",9)
q(P,"lO","ot",2)
r(W,"q3","i7",36)
p(W,"oJ",4,null,["$4"],["nn"],20,0)
p(W,"oK",4,null,["$4"],["no"],20,0)
var j
o(j=E.bw.prototype,"ge1",0,0,null,["$1","$0"],["e2","i_"],0,0)
o(j,"ge3",0,0,null,["$1","$0"],["e4","i0"],0,0)
o(j,"ge_",0,0,null,["$1","$0"],["e0","hZ"],0,0)
o(j,"gdY",0,0,null,["$1","$0"],["dZ","hW"],0,0)
n(j,"ghU","hV",6)
n(j,"ghX","hY",6)
o(j=E.fi.prototype,"gcX",0,0,null,["$1","$0"],["cZ","cY"],0,0)
m(j,"gic","e7",2)
l(j=X.fx.prototype,"gfE","fF",4)
l(j,"gfl","fm",4)
l(j,"gfs","ft",3)
l(j,"gfI","fJ",15)
l(j,"gfG","fH",15)
l(j,"gfM","fN",3)
l(j,"gfQ","fR",3)
l(j,"gfw","fz",3)
l(j,"gfO","fP",3)
l(j,"gfu","fv",3)
l(j,"gfS","fT",27)
l(j,"gfU","fV",4)
l(j,"gh9","ha",11)
l(j,"gh5","h6",11)
l(j,"gh7","h8",11)
o(D.bX.prototype,"gev",0,0,null,["$1","$0"],["aF","ew"],0,0)
o(j=D.cO.prototype,"gdd",0,0,null,["$1","$0"],["de","fK"],0,0)
l(j,"gfW","fX",29)
n(j,"gff","fg",21)
n(j,"gh_","h0",21)
k(V.a_.prototype,"gj","ct",14)
k(V.E.prototype,"gj","ct",14)
o(j=U.bY.prototype,"gaY",0,0,null,["$1","$0"],["I","ac"],0,0)
n(j,"gex","ey",16)
n(j,"gfY","fZ",16)
o(j=U.dv.prototype,"gaY",0,0,null,["$1","$0"],["I","ac"],0,0)
l(j,"gbO","bP",12)
l(j,"gbQ","bR",12)
l(j,"gbS","bT",12)
o(j=U.dw.prototype,"gaY",0,0,null,["$1","$0"],["I","ac"],0,0)
l(j,"gbO","bP",1)
l(j,"gbQ","bR",1)
l(j,"gbS","bT",1)
l(j,"gf2","f3",1)
l(j,"gf4","f5",1)
l(j,"geD","eE",1)
l(j,"geB","eC",1)
l(j,"gez","eA",1)
l(U.dx.prototype,"gfd","fe",1)
o(j=M.cy.prototype,"gV",0,0,null,["$1","$0"],["R","bd"],0,0)
n(j,"gh1","h2",18)
n(j,"gh3","h4",18)
o(M.cz.prototype,"gV",0,0,null,["$1","$0"],["R","bd"],0,0)
o(j=M.cG.prototype,"gV",0,0,null,["$1","$0"],["R","bd"],0,0)
n(j,"gfn","fo",6)
n(j,"gfp","fq",6)
o(j=O.cV.prototype,"ga6",0,0,null,["$1","$0"],["H","ag"],0,0)
o(j,"gdg",0,0,null,["$1","$0"],["dh","hf"],0,0)
n(j,"gfh","fi",25)
n(j,"gfj","fk",25)
o(O.cX.prototype,"ga6",0,0,null,["$1","$0"],["H","ag"],0,0)
o(O.db.prototype,"ga6",0,0,null,["$1","$0"],["H","ag"],0,0)
o(j=O.dh.prototype,"ga6",0,0,null,["$1","$0"],["H","ag"],0,0)
n(j,"gfA","fB",24)
n(j,"gfC","fD",24)
o(O.bH.prototype,"ga6",0,0,null,["$1","$0"],["H","ag"],0,0)
o(j=T.eg.prototype,"gd_",0,0,null,["$1","$0"],["bo","eG"],0,0)
l(j,"gf7","f8",1)
l(j,"gf9","fa",1)
l(j,"gfb","fc",1)
l(j,"ghs","ht",1)
l(j,"ghq","hr",1)
l(j,"gho","hp",1)
o(X.eP.prototype,"geJ",0,0,null,["$1","$0"],["a0","eK"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.kk,J.a,J.a8,P.H,P.dC,P.i,H.bC,P.er,H.cH,H.fv,H.jf,H.iP,H.hf,H.bu,P.I,H.iq,H.ez,H.il,H.j3,H.kx,H.as,H.fS,P.dP,P.cl,P.cm,P.fC,P.cc,P.f8,P.jP,P.dU,P.jD,P.dB,P.j,P.d8,P.ee,P.jN,P.W,P.bv,P.eO,P.de,P.fP,P.ih,P.aq,P.bF,W.hZ,W.kf,W.ku,W.ck,W.K,W.d3,W.dJ,W.hk,W.cI,W.jH,W.hu,P.dR,P.h8,K.e6,K.cK,K.V,L.f5,L.fj,L.fk,L.jc,O.T,O.d_,E.hP,E.bw,E.bS,E.c6,E.fN,E.iS,E.fi,Z.fA,Z.ch,Z.b6,Z.c_,Z.bh,D.hU,D.bx,D.N,X.cw,X.ev,X.ip,X.it,X.a3,X.iM,X.jd,X.fx,D.bX,V.G,V.a9,V.ia,V.cZ,V.ah,V.S,V.a4,V.bb,V.eW,V.a_,V.E,U.dv,U.dw,U.dx,M.cz,M.cG,A.ea,A.hL,A.al,A.b4,A.b7,A.bc,A.be,A.ix,A.dp,A.dq,A.ds,A.du,A.bV,A.Y,A.jh,F.an,F.ey,F.eS,F.iX,F.d9,F.da,F.cb,F.cg,F.y,F.jp,F.js,F.jt,O.bg,O.cX,O.iy,O.bH,T.eg,T.j6,T.j8,X.j5,X.ik,X.eP,V.hR,V.iZ])
q(J.a,[J.es,J.cN,J.bA,J.t,J.c0,J.b9,H.d1,W.d,W.hJ,W.ed,W.bU,W.aO,W.F,W.fH,W.am,W.i1,W.i2,W.fI,W.cC,W.fK,W.i3,W.l,W.fQ,W.aB,W.ij,W.fV,W.bz,W.is,W.iJ,W.fZ,W.h_,W.aC,W.h0,W.h2,W.aE,W.h6,W.h9,W.aG,W.ha,W.aH,W.hg,W.aj,W.hm,W.ja,W.av,W.ho,W.je,W.ji,W.hv,W.hx,W.hz,W.hB,W.hD,P.aS,P.fX,P.aW,P.h4,P.iQ,P.hh,P.aY,P.hq,P.hM,P.fE,P.c8,P.hd])
q(J.bA,[J.eQ,J.bM,J.aR])
r(J.im,J.t)
q(J.c0,[J.cM,J.et])
q(P.H,[H.ew,P.fn,H.eu,H.fu,H.eZ,H.fO,P.e9,P.eL,P.ay,P.fw,P.ft,P.bE,P.eh,P.ej])
r(P.cQ,P.dC)
q(P.cQ,[H.cf,W.fF,W.a5,P.eo])
r(H.Q,H.cf)
q(P.i,[H.m,H.aT,H.b0,P.cL])
q(H.m,[H.c1,H.ap])
q(H.c1,[H.df,H.cU])
r(H.cD,H.aT)
q(P.er,[H.cT,H.fB])
r(H.d4,P.fn)
q(H.bu,[H.fc,H.io,H.k1,H.k2,H.k3,P.jx,P.jw,P.jy,P.jz,P.jM,P.jL,P.jW,P.jF,P.jG,P.iu,P.i4,P.i5,W.i6,W.iK,W.iL,W.iW,W.j2,W.jA,W.iO,W.iN,W.jI,W.jJ,W.jK,W.jO,P.jS,P.jY,P.ie,P.ig,P.hN,E.iT,E.iU,E.iV,E.j9,D.ic,D.id,F.jQ,F.iY,F.jv,F.ju,F.jq,F.jr,O.iB,O.iC,O.iD,O.iE,O.iF,O.iG,O.iH,O.iI,T.j7,V.hS,V.k9,V.j0,V.j_,A.k5,A.k6,A.k7])
q(H.fc,[H.f6,H.bR])
r(P.cS,P.I)
q(P.cS,[H.X,W.fD])
r(H.c4,H.d1)
q(H.c4,[H.dE,H.dG])
r(H.dF,H.dE)
r(H.ba,H.dF)
r(H.dH,H.dG)
r(H.ad,H.dH)
q(H.ad,[H.eF,H.eG,H.eH,H.eI,H.eJ,H.c5,H.eK])
r(H.dQ,H.fO)
r(P.dM,P.cL)
r(P.jE,P.jP)
r(P.dI,P.dU)
r(P.dA,P.dI)
r(P.ei,P.f8)
r(P.i8,P.ee)
r(P.jj,P.i8)
r(P.jk,P.ei)
q(P.ay,[P.d7,P.eq])
q(W.d,[W.r,W.en,W.at,W.dK,W.au,W.ae,W.dN,W.fz,W.ci,P.ec,P.b5])
q(W.r,[W.C,W.az,W.cj])
q(W.C,[W.q,P.n])
q(W.q,[W.e7,W.e8,W.bQ,W.br,W.bs,W.bt,W.ep,W.bZ,W.f_,W.bf,W.dg,W.fa,W.fb,W.cd])
r(W.hY,W.aO)
r(W.cA,W.fH)
q(W.am,[W.i_,W.i0])
r(W.fJ,W.fI)
r(W.cB,W.fJ)
r(W.fL,W.fK)
r(W.el,W.fL)
r(W.aA,W.ed)
r(W.fR,W.fQ)
r(W.em,W.fR)
r(W.fW,W.fV)
r(W.by,W.fW)
r(W.b_,W.l)
q(W.b_,[W.bB,W.ai,W.bI])
r(W.eC,W.fZ)
r(W.eD,W.h_)
r(W.h1,W.h0)
r(W.eE,W.h1)
r(W.h3,W.h2)
r(W.d2,W.h3)
r(W.h7,W.h6)
r(W.eR,W.h7)
r(W.eY,W.h9)
r(W.dL,W.dK)
r(W.f2,W.dL)
r(W.hb,W.ha)
r(W.f3,W.hb)
r(W.f7,W.hg)
r(W.hn,W.hm)
r(W.fd,W.hn)
r(W.dO,W.dN)
r(W.fe,W.dO)
r(W.hp,W.ho)
r(W.fl,W.hp)
r(W.bi,W.ai)
r(W.hw,W.hv)
r(W.fG,W.hw)
r(W.dy,W.cC)
r(W.hy,W.hx)
r(W.fT,W.hy)
r(W.hA,W.hz)
r(W.dD,W.hA)
r(W.hC,W.hB)
r(W.hc,W.hC)
r(W.hE,W.hD)
r(W.hj,W.hE)
r(W.fM,W.fD)
r(W.dz,P.cc)
r(W.hl,W.dJ)
r(P.aa,P.h8)
r(P.fY,P.fX)
r(P.ex,P.fY)
r(P.h5,P.h4)
r(P.eM,P.h5)
r(P.ca,P.n)
r(P.hi,P.hh)
r(P.f9,P.hi)
r(P.hr,P.hq)
r(P.fm,P.hr)
r(P.eb,P.fE)
r(P.eN,P.b5)
r(P.he,P.hd)
r(P.f4,P.he)
q(K.cK,[K.aV,L.dk])
q(E.hP,[Z.bT,A.bd,T.bG])
q(D.N,[D.aP,D.aQ,D.v,X.eT,T.cx])
q(X.eT,[X.cR,X.c2,X.c3,X.dj])
q(O.T,[D.cO,U.bY,M.cy])
q(D.hU,[U.hW,U.U])
q(U.U,[U.bW,U.c9])
q(A.bd,[A.cW,A.dc,A.dd,A.di])
q(A.Y,[A.bJ,A.fp,A.fq,A.fr,A.fo,A.dl,A.ce,A.dm,A.dn,A.fs,A.dr,A.bK,A.bL,A.dt])
q(O.bg,[O.cV,O.db,O.f0,O.dh])
q(O.cX,[O.iv,O.iw,O.cY])
q(O.cY,[O.iz,O.iA])
q(T.bG,[T.ff,T.fh])
r(T.fg,T.ff)
q(X.j5,[X.hO,X.ii])
s(H.cf,H.fv)
s(H.dE,P.j)
s(H.dF,H.cH)
s(H.dG,P.j)
s(H.dH,H.cH)
s(P.dC,P.j)
s(P.dU,P.d8)
s(W.fH,W.hZ)
s(W.fI,P.j)
s(W.fJ,W.K)
s(W.fK,P.j)
s(W.fL,W.K)
s(W.fQ,P.j)
s(W.fR,W.K)
s(W.fV,P.j)
s(W.fW,W.K)
s(W.fZ,P.I)
s(W.h_,P.I)
s(W.h0,P.j)
s(W.h1,W.K)
s(W.h2,P.j)
s(W.h3,W.K)
s(W.h6,P.j)
s(W.h7,W.K)
s(W.h9,P.I)
s(W.dK,P.j)
s(W.dL,W.K)
s(W.ha,P.j)
s(W.hb,W.K)
s(W.hg,P.I)
s(W.hm,P.j)
s(W.hn,W.K)
s(W.dN,P.j)
s(W.dO,W.K)
s(W.ho,P.j)
s(W.hp,W.K)
s(W.hv,P.j)
s(W.hw,W.K)
s(W.hx,P.j)
s(W.hy,W.K)
s(W.hz,P.j)
s(W.hA,W.K)
s(W.hB,P.j)
s(W.hC,W.K)
s(W.hD,P.j)
s(W.hE,W.K)
s(P.fX,P.j)
s(P.fY,W.K)
s(P.h4,P.j)
s(P.h5,W.K)
s(P.hh,P.j)
s(P.hi,W.K)
s(P.hq,P.j)
s(P.hr,W.K)
s(P.fE,P.I)
s(P.hd,P.j)
s(P.he,W.K)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{k:"int",Z:"double",a1:"num",u:"String",ag:"bool",aq:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([N?])","~(N)","~()","~(ai)","~(l)","~(u,@)","~(k,i<bw>)","~(an)","~(k,k)","~(~())","aq()","~(bI)","~(N?)","~(~(N))","Z()","~(bB)","~(k,i<U?>)","u(k)","~(k,i<aF>)","ag(aD)","ag(C,u,u,ck)","~(k,i<ao>)","ag(r)","ag(u)","~(k,i<bH>)","~(k,i<ah>)","~(a1)","~(bi)","~(M?,M?)","ag(i<ao>)","@(u)","C(r)","@(@,u)","aq(@)","~(@,@)","~(cg,Z,Z)","u(d)","~(u,u)","~(@)","aq(~())","k(b4,b4)","k(b7,b7)","k(bc,bc)","k(be,be)","@(@)","~(jb)","k(@,@)","u(u)","bT(k)","~(r,r?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nG(v.typeUniverse,JSON.parse('{"eQ":"bA","bM":"bA","aR":"bA","p3":"l","pf":"l","p5":"b5","p4":"d","pl":"d","po":"d","p2":"n","pg":"n","p6":"q","pj":"q","ph":"r","pe":"r","pM":"ae","pa":"b_","p7":"az","pp":"az","pn":"ai","pi":"by","pb":"F","pc":"aj","pk":"ba","es":{"ag":[]},"t":{"o":["1"],"m":["1"],"i":["1"]},"im":{"t":["1"],"o":["1"],"m":["1"],"i":["1"]},"c0":{"Z":[],"a1":[]},"cM":{"Z":[],"k":[],"a1":[]},"et":{"Z":[],"a1":[]},"b9":{"u":[]},"ew":{"H":[]},"Q":{"j":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"m":{"i":["1"]},"c1":{"m":["1"],"i":["1"]},"df":{"c1":["1"],"m":["1"],"i":["1"],"i.E":"1"},"aT":{"i":["2"],"i.E":"2"},"cD":{"aT":["1","2"],"m":["2"],"i":["2"],"i.E":"2"},"cU":{"c1":["2"],"m":["2"],"i":["2"],"i.E":"2"},"b0":{"i":["1"],"i.E":"1"},"cf":{"j":["1"],"o":["1"],"m":["1"],"i":["1"]},"d4":{"H":[]},"eu":{"H":[]},"fu":{"H":[]},"bu":{"cJ":[]},"fc":{"cJ":[]},"f6":{"cJ":[]},"bR":{"cJ":[]},"eZ":{"H":[]},"X":{"I":["1","2"],"R":["1","2"],"I.V":"2"},"ap":{"m":["1"],"i":["1"],"i.E":"1"},"c4":{"z":["1"]},"ba":{"j":["Z"],"z":["Z"],"o":["Z"],"m":["Z"],"i":["Z"],"j.E":"Z"},"ad":{"j":["k"],"z":["k"],"o":["k"],"m":["k"],"i":["k"]},"eF":{"ad":[],"j":["k"],"z":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"eG":{"ad":[],"j":["k"],"z":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"eH":{"ad":[],"j":["k"],"z":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"eI":{"ad":[],"j":["k"],"z":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"eJ":{"ad":[],"j":["k"],"z":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"c5":{"ad":[],"j":["k"],"z":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"eK":{"ad":[],"j":["k"],"z":["k"],"o":["k"],"m":["k"],"i":["k"],"j.E":"k"},"fO":{"H":[]},"dQ":{"H":[]},"dP":{"jb":[]},"dM":{"i":["1"],"i.E":"1"},"dA":{"d8":["1"],"m":["1"],"i":["1"]},"cL":{"i":["1"]},"cQ":{"j":["1"],"o":["1"],"m":["1"],"i":["1"]},"cS":{"I":["1","2"],"R":["1","2"]},"I":{"R":["1","2"]},"dI":{"d8":["1"],"m":["1"],"i":["1"]},"Z":{"a1":[]},"k":{"a1":[]},"o":{"m":["1"],"i":["1"]},"e9":{"H":[]},"fn":{"H":[]},"eL":{"H":[]},"ay":{"H":[]},"d7":{"H":[]},"eq":{"H":[]},"fw":{"H":[]},"ft":{"H":[]},"bE":{"H":[]},"eh":{"H":[]},"eO":{"H":[]},"de":{"H":[]},"ej":{"H":[]},"q":{"C":[],"r":[],"d":[]},"bs":{"C":[],"r":[],"d":[]},"C":{"r":[],"d":[]},"bB":{"l":[]},"ai":{"l":[]},"r":{"d":[]},"at":{"d":[]},"au":{"d":[]},"ae":{"d":[]},"bI":{"l":[]},"b_":{"l":[]},"bi":{"ai":[],"l":[]},"ck":{"aD":[]},"e7":{"C":[],"r":[],"d":[]},"e8":{"C":[],"r":[],"d":[]},"bQ":{"C":[],"r":[],"d":[]},"br":{"C":[],"r":[],"d":[]},"bt":{"C":[],"r":[],"d":[]},"az":{"r":[],"d":[]},"cB":{"j":["aa<a1>"],"o":["aa<a1>"],"z":["aa<a1>"],"m":["aa<a1>"],"i":["aa<a1>"],"j.E":"aa<a1>"},"cC":{"aa":["a1"]},"el":{"j":["u"],"o":["u"],"z":["u"],"m":["u"],"i":["u"],"j.E":"u"},"fF":{"j":["C"],"o":["C"],"m":["C"],"i":["C"],"j.E":"C"},"em":{"j":["aA"],"o":["aA"],"z":["aA"],"m":["aA"],"i":["aA"],"j.E":"aA"},"en":{"d":[]},"ep":{"C":[],"r":[],"d":[]},"by":{"j":["r"],"o":["r"],"z":["r"],"m":["r"],"i":["r"],"j.E":"r"},"bZ":{"C":[],"r":[],"d":[]},"eC":{"I":["u","@"],"R":["u","@"],"I.V":"@"},"eD":{"I":["u","@"],"R":["u","@"],"I.V":"@"},"eE":{"j":["aC"],"o":["aC"],"z":["aC"],"m":["aC"],"i":["aC"],"j.E":"aC"},"a5":{"j":["r"],"o":["r"],"m":["r"],"i":["r"],"j.E":"r"},"d2":{"j":["r"],"o":["r"],"z":["r"],"m":["r"],"i":["r"],"j.E":"r"},"eR":{"j":["aE"],"o":["aE"],"z":["aE"],"m":["aE"],"i":["aE"],"j.E":"aE"},"eY":{"I":["u","@"],"R":["u","@"],"I.V":"@"},"f_":{"C":[],"r":[],"d":[]},"f2":{"j":["at"],"o":["at"],"z":["at"],"d":[],"m":["at"],"i":["at"],"j.E":"at"},"f3":{"j":["aG"],"o":["aG"],"z":["aG"],"m":["aG"],"i":["aG"],"j.E":"aG"},"f7":{"I":["u","u"],"R":["u","u"],"I.V":"u"},"bf":{"C":[],"r":[],"d":[]},"dg":{"C":[],"r":[],"d":[]},"fa":{"C":[],"r":[],"d":[]},"fb":{"C":[],"r":[],"d":[]},"cd":{"C":[],"r":[],"d":[]},"fd":{"j":["ae"],"o":["ae"],"z":["ae"],"m":["ae"],"i":["ae"],"j.E":"ae"},"fe":{"j":["au"],"o":["au"],"z":["au"],"d":[],"m":["au"],"i":["au"],"j.E":"au"},"fl":{"j":["av"],"o":["av"],"z":["av"],"m":["av"],"i":["av"],"j.E":"av"},"fz":{"d":[]},"ci":{"d":[]},"cj":{"r":[],"d":[]},"fG":{"j":["F"],"o":["F"],"z":["F"],"m":["F"],"i":["F"],"j.E":"F"},"dy":{"aa":["a1"]},"fT":{"j":["aB?"],"o":["aB?"],"z":["aB?"],"m":["aB?"],"i":["aB?"],"j.E":"aB?"},"dD":{"j":["r"],"o":["r"],"z":["r"],"m":["r"],"i":["r"],"j.E":"r"},"hc":{"j":["aH"],"o":["aH"],"z":["aH"],"m":["aH"],"i":["aH"],"j.E":"aH"},"hj":{"j":["aj"],"o":["aj"],"z":["aj"],"m":["aj"],"i":["aj"],"j.E":"aj"},"fD":{"I":["u","u"],"R":["u","u"]},"fM":{"I":["u","u"],"R":["u","u"],"I.V":"u"},"dz":{"cc":["1"]},"d3":{"aD":[]},"dJ":{"aD":[]},"hl":{"aD":[]},"hk":{"aD":[]},"dR":{"bz":[]},"eo":{"j":["C"],"o":["C"],"m":["C"],"i":["C"],"j.E":"C"},"aa":{"h8":["1"]},"ex":{"j":["aS"],"o":["aS"],"m":["aS"],"i":["aS"],"j.E":"aS"},"eM":{"j":["aW"],"o":["aW"],"m":["aW"],"i":["aW"],"j.E":"aW"},"ca":{"n":[],"C":[],"r":[],"d":[]},"f9":{"j":["u"],"o":["u"],"m":["u"],"i":["u"],"j.E":"u"},"n":{"C":[],"r":[],"d":[]},"fm":{"j":["aY"],"o":["aY"],"m":["aY"],"i":["aY"],"j.E":"aY"},"eb":{"I":["u","@"],"R":["u","@"],"I.V":"@"},"ec":{"d":[]},"b5":{"d":[]},"eN":{"d":[]},"f4":{"j":["R<@,@>"],"o":["R<@,@>"],"m":["R<@,@>"],"i":["R<@,@>"],"j.E":"R<@,@>"},"cK":{"bD":[]},"e6":{"bD":[]},"aV":{"bD":[]},"V":{"bD":[]},"dk":{"bD":[]},"T":{"i":["1"],"T.T":"1"},"aP":{"N":[]},"aQ":{"N":[]},"v":{"N":[]},"cR":{"N":[]},"c2":{"N":[]},"c3":{"N":[]},"eT":{"N":[]},"dj":{"N":[]},"ms":{"ao":[]},"bX":{"ao":[]},"mS":{"ao":[]},"na":{"ao":[]},"cO":{"T":["ao"],"i":["ao"],"T.T":"ao"},"c9":{"U":[]},"bW":{"U":[]},"bY":{"T":["U?"],"U":[],"i":["U?"],"T.T":"U?"},"dv":{"U":[]},"dw":{"U":[]},"dx":{"U":[]},"cy":{"T":["aF"],"aF":[],"i":["aF"],"T.T":"aF"},"cz":{"aF":[]},"cG":{"aF":[]},"bJ":{"Y":[]},"ce":{"Y":[]},"bK":{"Y":[]},"bL":{"Y":[]},"cW":{"bd":[]},"dc":{"bd":[]},"dd":{"bd":[]},"di":{"bd":[]},"fp":{"Y":[]},"fq":{"Y":[]},"fr":{"Y":[]},"fo":{"Y":[]},"dl":{"Y":[]},"dm":{"Y":[]},"dn":{"Y":[]},"fs":{"Y":[]},"dr":{"Y":[]},"dt":{"Y":[]},"cV":{"bg":[]},"db":{"bg":[]},"f0":{"bg":[]},"dh":{"bg":[]},"ff":{"bG":[]},"fh":{"bG":[]},"cx":{"N":[]},"fg":{"bG":[]}}'))
H.nF(v.typeUniverse,JSON.parse('{"a8":1,"m":1,"bC":1,"cT":2,"fB":1,"cH":1,"fv":1,"cf":1,"ez":1,"c4":1,"cc":1,"cm":1,"f8":2,"dB":1,"cL":1,"cQ":1,"cS":2,"dI":1,"dC":1,"dU":1,"ee":2,"ei":2,"er":1,"dz":1,"K":1,"cI":1,"aP":1,"aQ":1,"v":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.lS
return{cR:s("bQ"),Y:s("br"),eT:s("bT"),C:s("b6"),gA:s("bt"),m:s("bU"),aw:s("cx"),gw:s("m<@>"),h:s("C"),l:s("bw"),bU:s("H"),aD:s("l"),c:s("cJ"),x:s("bz"),fS:s("bZ"),eu:s("t<ea>"),i:s("t<ms>"),cn:s("t<b4>"),dn:s("t<bs>"),dP:s("t<a9>"),U:s("t<bX>"),fD:s("t<b7>"),v:s("t<an>"),fv:s("t<c_>"),e:s("t<ao>"),L:s("t<ey>"),B:s("t<bD>"),fA:s("t<ah>"),Q:s("t<aD>"),I:s("t<eS>"),cG:s("t<S>"),eg:s("t<bc>"),o:s("t<mS>"),eC:s("t<c9>"),ba:s("t<aF>"),D:s("t<na>"),c3:s("t<be>"),g9:s("t<cc<M>>"),s:s("t<u>"),d:s("t<bG>"),gT:s("t<av>"),ab:s("t<dk>"),dC:s("t<Y>"),f:s("t<dp>"),V:s("t<dq>"),E:s("t<ds>"),J:s("t<du>"),k:s("t<cg>"),n:s("t<Z>"),gn:s("t<@>"),t:s("t<k>"),eJ:s("t<U?>"),bc:s("t<bg?>"),b8:s("t<bJ?>"),bT:s("t<ce?>"),p:s("t<bK?>"),h4:s("t<bL?>"),b:s("t<~(N)>"),T:s("cN"),M:s("aR"),aU:s("z<@>"),fX:s("X<k,ag>"),w:s("X<k,k>"),au:s("ap<k>"),O:s("o<dp>"),r:s("o<dq>"),f0:s("o<ds>"),R:s("o<du>"),aH:s("o<@>"),bv:s("cR"),eO:s("R<@,@>"),dv:s("cU<u,u>"),gc:s("ah"),Z:s("c2"),bZ:s("c3"),d4:s("ba"),eB:s("ad"),P:s("aq"),K:s("M"),q:s("aa<a1>"),ew:s("ca"),fg:s("bd"),N:s("u"),g7:s("n"),bY:s("bf"),aW:s("cd"),gb:s("bH"),aF:s("jb"),bJ:s("fj"),dr:s("dj"),u:s("dl"),y:s("bJ"),g:s("dm"),F:s("dn"),bK:s("dr"),j:s("bK"),G:s("bL"),a:s("dt"),ak:s("bM"),h9:s("cj"),ac:s("a5"),cJ:s("ag"),gR:s("Z"),z:s("@"),S:s("k"),A:s("0&*"),_:s("M*"),eH:s("l0<aq>?"),eI:s("cW?"),X:s("M?"),gW:s("c8?"),dm:s("dc?"),eA:s("dd?"),dl:s("f5?"),fB:s("di?"),f7:s("fk?"),W:s("bJ?"),ch:s("ce?"),em:s("bK?"),cH:s("bL?"),H:s("a1"),h2:s("~(N)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.br.prototype
C.D=W.bs.prototype
C.f=W.bt.prototype
C.r=W.bU.prototype
C.P=J.a.prototype
C.a=J.t.prototype
C.b=J.cM.prototype
C.Q=J.cN.prototype
C.c=J.c0.prototype
C.d=J.b9.prototype
C.R=J.aR.prototype
C.W=H.c5.prototype
C.w=J.eQ.prototype
C.x=P.c8.prototype
C.y=W.dg.prototype
C.k=J.bM.prototype
C.z=W.bi.prototype
C.A=W.ci.prototype
C.B=new E.bS("Browser.chrome")
C.m=new E.bS("Browser.firefox")
C.n=new E.bS("Browser.edge")
C.C=new E.bS("Browser.other")
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.K=new P.eO()
C.q=new P.jj()
C.L=new P.jk()
C.e=new P.jE()
C.t=new A.bV(0,"ColorBlendType.Overwrite")
C.M=new A.bV(1,"ColorBlendType.Additive")
C.N=new A.bV(2,"ColorBlendType.Average")
C.h=new A.bV(3,"ColorBlendType.AlphaBlend")
C.i=new P.bv(0)
C.O=new P.bv(5e6)
C.S=H.b(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
C.T=H.b(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
C.U=H.b(s([]),t.s)
C.V=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.u=H.b(s(["bind","if","ref","repeat","syntax"]),t.s)
C.j=H.b(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
C.X=new E.c6("OperatingSystem.windows")
C.v=new E.c6("OperatingSystem.mac")
C.Y=new E.c6("OperatingSystem.linux")
C.Z=new E.c6("OperatingSystem.other")
C.a_=new P.cl(null,2)})();(function staticFields(){$.jB=null
$.aM=0
$.cv=null
$.kS=null
$.lT=null
$.lN=null
$.lX=null
$.jZ=null
$.k4=null
$.kK=null
$.co=null
$.dX=null
$.dY=null
$.kF=!1
$.aI=C.e
$.af=H.b([],H.lS("t<M>"))
$.b8=null
$.ke=null
$.kZ=null
$.kY=null
$.fU=P.P(t.N,t.c)
$.i9=null
$.l6=null
$.d0=null
$.a6=null
$.aX=null
$.lf=null
$.bN=null
$.lr=null
$.jl=null
$.jm=null
$.jn=null
$.lq=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pd","m3",function(){return H.oI("_$dart_dartClosure")})
s($,"pq","m5",function(){return H.aZ(H.jg({
toString:function(){return"$receiver$"}}))})
s($,"pr","m6",function(){return H.aZ(H.jg({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ps","m7",function(){return H.aZ(H.jg(null))})
s($,"pt","m8",function(){return H.aZ(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"pw","mb",function(){return H.aZ(H.jg(void 0))})
s($,"px","mc",function(){return H.aZ(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"pv","ma",function(){return H.aZ(H.lp(null))})
s($,"pu","m9",function(){return H.aZ(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"pz","me",function(){return H.aZ(H.lp(void 0))})
s($,"py","md",function(){return H.aZ(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"pN","kO",function(){return P.nj()})
s($,"pQ","mj",function(){return P.n3("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"pO","mi",function(){return P.l4(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"pG","mh",function(){return Z.aw(0)})
s($,"pA","mf",function(){return Z.aw(511)})
s($,"pI","ab",function(){return Z.aw(1)})
s($,"pH","bp",function(){return Z.aw(2)})
s($,"pC","bo",function(){return Z.aw(4)})
s($,"pJ","bP",function(){return Z.aw(8)})
s($,"pK","bq",function(){return Z.aw(16)})
s($,"pD","e2",function(){return Z.aw(32)})
s($,"pE","e3",function(){return Z.aw(64)})
s($,"pF","mg",function(){return Z.aw(96)})
s($,"pL","cu",function(){return Z.aw(128)})
s($,"pB","bn",function(){return Z.aw(256)})
s($,"p9","m2",function(){return new V.ia()})
r($,"p8","A",function(){return $.m2()})
r($,"pm","m4",function(){var q=V.ld(),p=V.ks(),o=$.lq
return V.l7(q,p,o==null?$.lq=V.ng(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.d1,ArrayBufferView:H.d1,Float32Array:H.ba,Float64Array:H.ba,Int16Array:H.eF,Int32Array:H.eG,Int8Array:H.eH,Uint16Array:H.eI,Uint32Array:H.eJ,Uint8ClampedArray:H.c5,CanvasPixelArray:H.c5,Uint8Array:H.eK,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLDivElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.hJ,HTMLAnchorElement:W.e7,HTMLAreaElement:W.e8,HTMLBaseElement:W.bQ,Blob:W.ed,HTMLBodyElement:W.br,HTMLButtonElement:W.bs,HTMLCanvasElement:W.bt,CanvasRenderingContext2D:W.bU,CDATASection:W.az,CharacterData:W.az,Comment:W.az,ProcessingInstruction:W.az,Text:W.az,CSSPerspective:W.hY,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.cA,MSStyleCSSProperties:W.cA,CSS2Properties:W.cA,CSSImageValue:W.am,CSSKeywordValue:W.am,CSSNumericValue:W.am,CSSPositionValue:W.am,CSSResourceValue:W.am,CSSUnitValue:W.am,CSSURLImageValue:W.am,CSSStyleValue:W.am,CSSMatrixComponent:W.aO,CSSRotation:W.aO,CSSScale:W.aO,CSSSkew:W.aO,CSSTranslation:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.i_,CSSUnparsedValue:W.i0,DataTransferItemList:W.i1,DOMException:W.i2,ClientRectList:W.cB,DOMRectList:W.cB,DOMRectReadOnly:W.cC,DOMStringList:W.el,DOMTokenList:W.i3,Element:W.C,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aA,FileList:W.em,FileWriter:W.en,HTMLFormElement:W.ep,Gamepad:W.aB,History:W.ij,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.bz,HTMLImageElement:W.bZ,KeyboardEvent:W.bB,Location:W.is,MediaList:W.iJ,MIDIInputMap:W.eC,MIDIOutputMap:W.eD,MimeType:W.aC,MimeTypeArray:W.eE,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.d2,RadioNodeList:W.d2,Plugin:W.aE,PluginArray:W.eR,RTCStatsReport:W.eY,HTMLSelectElement:W.f_,SourceBuffer:W.at,SourceBufferList:W.f2,SpeechGrammar:W.aG,SpeechGrammarList:W.f3,SpeechRecognitionResult:W.aH,Storage:W.f7,CSSStyleSheet:W.aj,StyleSheet:W.aj,HTMLTableCellElement:W.bf,HTMLTableDataCellElement:W.bf,HTMLTableHeaderCellElement:W.bf,HTMLTableElement:W.dg,HTMLTableRowElement:W.fa,HTMLTableSectionElement:W.fb,HTMLTemplateElement:W.cd,TextTrack:W.au,TextTrackCue:W.ae,VTTCue:W.ae,TextTrackCueList:W.fd,TextTrackList:W.fe,TimeRanges:W.ja,Touch:W.av,TouchEvent:W.bI,TouchList:W.fl,TrackDefaultList:W.je,CompositionEvent:W.b_,FocusEvent:W.b_,TextEvent:W.b_,UIEvent:W.b_,URL:W.ji,VideoTrackList:W.fz,WheelEvent:W.bi,Window:W.ci,DOMWindow:W.ci,Attr:W.cj,CSSRuleList:W.fG,ClientRect:W.dy,DOMRect:W.dy,GamepadList:W.fT,NamedNodeMap:W.dD,MozNamedAttrMap:W.dD,SpeechRecognitionResultList:W.hc,StyleSheetList:W.hj,SVGLength:P.aS,SVGLengthList:P.ex,SVGNumber:P.aW,SVGNumberList:P.eM,SVGPointList:P.iQ,SVGScriptElement:P.ca,SVGStringList:P.f9,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,SVGTransform:P.aY,SVGTransformList:P.fm,AudioBuffer:P.hM,AudioParamMap:P.eb,AudioTrackList:P.ec,AudioContext:P.b5,webkitAudioContext:P.b5,BaseAudioContext:P.b5,OfflineAudioContext:P.eN,WebGL2RenderingContext:P.c8,SQLResultSetRowList:P.f4})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.dE.$nativeSuperclassTag="ArrayBufferView"
H.dF.$nativeSuperclassTag="ArrayBufferView"
H.ba.$nativeSuperclassTag="ArrayBufferView"
H.dG.$nativeSuperclassTag="ArrayBufferView"
H.dH.$nativeSuperclassTag="ArrayBufferView"
H.ad.$nativeSuperclassTag="ArrayBufferView"
W.dK.$nativeSuperclassTag="EventTarget"
W.dL.$nativeSuperclassTag="EventTarget"
W.dN.$nativeSuperclassTag="EventTarget"
W.dO.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.oS
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
