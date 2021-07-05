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
a[c]=function(){a[c]=function(){H.nQ(b)}
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
if(a[b]!==s)H.nR(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jX(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jB:function jB(){},
ii:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
m9:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nt:function(a,b,c){return a},
lQ:function(a,b){if(t.V.b(a))return new H.ce(a,b)
return new H.bi(a,b)},
kb:function(){return new P.ej("No element")},
m8:function(a,b){H.ee(a,0,J.bw(a)-1,b)},
ee:function(a,b,c,d){if(c-b<=32)H.m7(a,b,c,d)
else H.m6(a,b,c,d)},
m7:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.fR(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ao()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
m6:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.ag(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.ag(a4+a5,2),f=g-j,e=g+j,d=J.fR(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ao()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.z(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.ee(a3,a4,r-2,a6)
H.ee(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.z(a6.$2(d.h(a3,r),b),0);)++r
for(;J.z(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.ee(a3,r,q,a6)}else H.ee(a3,r,q,a6)},
dM:function dM(a){this.a=a},
R:function R(a){this.a=a},
j:function j(){},
bD:function bD(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bi:function bi(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
ct:function ct(a,b){this.a=null
this.b=a
this.c=b},
cR:function cR(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
ci:function ci(){},
eJ:function eJ(){},
bQ:function bQ(){},
l9:function(a){var s,r=H.l8(a)
if(r!=null)return r
s="minified:"+a
return s},
nF:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
u:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.fV(a)
return s},
cE:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cF:function(a){return H.lS(a)},
lS:function(a){var s,r,q,p
if(a instanceof P.Q)return H.ae(H.c_(a),null)
if(J.dh(a)===C.E||t.o.b(a)){s=C.m(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ae(H.c_(a),null)},
kh:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
m1:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.j6(q))throw H.b(H.fQ(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.bp(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.fQ(q))}return H.kh(p)},
m0:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.j6(q))throw H.b(H.fQ(q))
if(q<0)throw H.b(H.fQ(q))
if(q>65535)return H.m1(a)}return H.kh(a)},
m_:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.bp(s,10)|55296)>>>0,s&1023|56320)}throw H.b(P.aX(a,0,1114111,null,null))},
bM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lZ:function(a){var s=H.bM(a).getFullYear()+0
return s},
lX:function(a){var s=H.bM(a).getMonth()+1
return s},
lT:function(a){var s=H.bM(a).getDate()+0
return s},
lU:function(a){var s=H.bM(a).getHours()+0
return s},
lW:function(a){var s=H.bM(a).getMinutes()+0
return s},
lY:function(a){var s=H.bM(a).getSeconds()+0
return s},
lV:function(a){var s=H.bM(a).getMilliseconds()+0
return s},
d:function(a,b){if(a==null)J.bw(a)
throw H.b(H.bX(a,b))},
bX:function(a,b){var s,r="index"
if(!H.j6(b))return new P.av(!0,b,r,null)
s=J.bw(a)
if(b<0||b>=s)return P.I(b,a,r,null,s)
return P.e8(b,r)},
nv:function(a,b,c){if(a>c)return P.aX(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aX(b,a,c,"end",null)
return new P.av(!0,b,"end",null)},
fQ:function(a){return new P.av(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.e0()
s=new Error()
s.dartException=a
r=H.nS
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nS:function(){return J.fV(this.dartException)},
f:function(a){throw H.b(a)},
o:function(a){throw H.b(P.bb(a))},
aG:function(a){var s,r,q,p,o,n
a=H.l5(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.it(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iu:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kr:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jC:function(a,b){var s=b==null,r=s?null:b.method
return new H.dK(a,r,s?null:b.receiver)},
fT:function(a){if(a==null)return new H.i2(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bt(a,a.dartException)
return H.np(a)},
bt:function(a,b){if(t.Y.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
np:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bp(r,16)&8191)===10)switch(q){case 438:return H.bt(a,H.jC(H.u(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.u(s)+" (Error "+q+")"
return H.bt(a,new H.cD(p,e))}}if(a instanceof TypeError){o=$.ld()
n=$.le()
m=$.lf()
l=$.lg()
k=$.lj()
j=$.lk()
i=$.li()
$.lh()
h=$.lm()
g=$.ll()
f=o.al(s)
if(f!=null)return H.bt(a,H.jC(s,f))
else{f=n.al(s)
if(f!=null){f.method="call"
return H.bt(a,H.jC(s,f))}else{f=m.al(s)
if(f==null){f=l.al(s)
if(f==null){f=k.al(s)
if(f==null){f=j.al(s)
if(f==null){f=i.al(s)
if(f==null){f=l.al(s)
if(f==null){f=h.al(s)
if(f==null){f=g.al(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bt(a,new H.cD(s,f==null?e:f.method))}}return H.bt(a,new H.eI(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cL()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bt(a,new P.av(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cL()
return a},
jZ:function(a){var s
if(a==null)return new H.ft(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.ft(a)},
nx:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
nE:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.e("Unsupported number of arguments for wrapped closure"))},
dg:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nE)
a.$identity=s
return s},
lF:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ig().constructor.prototype):Object.create(new H.c2(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aw
if(typeof r!=="number")return r.P()
$.aw=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.k8(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lB(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k8(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lB:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.l_,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.lz:H.ly
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
lC:function(a,b,c,d){var s=H.k6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k8:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lE(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lC(r,!p,s,b)
if(r===0){p=$.aw
if(typeof p!=="number")return p.P()
$.aw=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c3
return new Function(p+(o==null?$.c3=H.h3("self"):o)+";return "+n+"."+H.u(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aw
if(typeof p!=="number")return p.P()
$.aw=p+1
m+=p
p="return function("+m+"){return this."
o=$.c3
return new Function(p+(o==null?$.c3=H.h3("self"):o)+"."+H.u(s)+"("+m+");}")()},
lD:function(a,b,c,d){var s=H.k6,r=H.lA
switch(b?-1:a){case 0:throw H.b(new H.eb("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lE:function(a,b){var s,r,q,p,o,n,m,l=$.c3
if(l==null)l=$.c3=H.h3("self")
s=$.k5
if(s==null)s=$.k5=H.h3("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lD(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.u(r)+"(this."+s+");"
n=$.aw
if(typeof n!=="number")return n.P()
$.aw=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.u(r)+"(this."+s+", "+m+");"
n=$.aw
if(typeof n!=="number")return n.P()
$.aw=n+1
return new Function(o+n+"}")()},
jX:function(a,b,c,d,e,f,g){return H.lF(a,b,c,d,!!e,!!f,g)},
ly:function(a,b){return H.fF(v.typeUniverse,H.c_(a.a),b)},
lz:function(a,b){return H.fF(v.typeUniverse,H.c_(a.c),b)},
k6:function(a){return a.a},
lA:function(a){return a.c},
h3:function(a){var s,r,q,p=new H.c2("self","target","receiver","name"),o=J.jA(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.k4("Field name "+a+" not found."))},
nQ:function(a){throw H.b(new P.dw(a))},
nA:function(a){return v.getIsolateTag(a)},
nR:function(a){return H.f(new H.dM(a))},
oU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nH:function(a){var s,r,q,p,o,n=$.kZ.$1(a),m=$.jc[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jh[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kU.$2(a,n)
if(q!=null){m=$.jc[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jh[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.ji(s)
$.jc[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jh[n]=s
return s}if(p==="-"){o=H.ji(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l2(a,s)
if(p==="*")throw H.b(P.ks(n))
if(v.leafTags[n]===true){o=H.ji(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l2(a,s)},
l2:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k2(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
ji:function(a){return J.k2(a,!1,null,!!a.$ir)},
nJ:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.ji(s)
else return J.k2(s,c,null,null)},
nC:function(){if(!0===$.k_)return
$.k_=!0
H.nD()},
nD:function(){var s,r,q,p,o,n,m,l
$.jc=Object.create(null)
$.jh=Object.create(null)
H.nB()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l4.$1(o)
if(n!=null){m=H.nJ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nB:function(){var s,r,q,p,o,n,m=C.w()
m=H.bW(C.x,H.bW(C.y,H.bW(C.n,H.bW(C.n,H.bW(C.z,H.bW(C.A,H.bW(C.B(C.m),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kZ=new H.je(p)
$.kU=new H.jf(o)
$.l4=new H.jg(n)},
bW:function(a,b){return a(b)||b},
lN:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(new P.hq("Illegal RegExp pattern ("+String(n)+")",a))},
l6:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nw:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l5:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l7:function(a,b,c){var s=H.nO(a,b,c)
return s},
nO:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l5(b),'g'),H.nw(c))},
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cD:function cD(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a){this.a=a},
i2:function i2(a){this.a=a},
ft:function ft(a){this.a=a
this.b=null},
by:function by(){},
ik:function ik(){},
ig:function ig(){},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eb:function eb(a){this.a=a},
W:function W(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hB:function hB(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b
this.c=null},
aT:function aT(a){this.a=a},
dO:function dO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
hA:function hA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
db:function(a){return a},
aJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bX(b,a))},
mE:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.nv(a,b,c))
return b},
cA:function cA(){},
bJ:function bJ(){},
bj:function bj(){},
cz:function cz(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
cB:function cB(){},
e_:function e_(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
km:function(a,b){var s=b.c
return s==null?b.c=H.jQ(a,b.z,!0):s},
kl:function(a,b){var s=b.c
return s==null?b.c=H.d7(a,"k9",[b.z]):s},
kn:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kn(a.z)
return s===11||s===12},
m4:function(a){return a.cy},
ny:function(a){return H.jR(v.typeUniverse,a,!1)},
b6:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b6(a,s,a0,a1)
if(r===s)return b
return H.kI(a,r,!0)
case 7:s=b.z
r=H.b6(a,s,a0,a1)
if(r===s)return b
return H.jQ(a,r,!0)
case 8:s=b.z
r=H.b6(a,s,a0,a1)
if(r===s)return b
return H.kH(a,r,!0)
case 9:q=b.Q
p=H.df(a,q,a0,a1)
if(p===q)return b
return H.d7(a,b.z,p)
case 10:o=b.z
n=H.b6(a,o,a0,a1)
m=b.Q
l=H.df(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jO(a,n,l)
case 11:k=b.z
j=H.b6(a,k,a0,a1)
i=b.Q
h=H.nm(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kG(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.df(a,g,a0,a1)
o=b.z
n=H.b6(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jP(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.fY("Attempted to substitute unexpected RTI kind "+c))}},
df:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b6(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nn:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b6(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nm:function(a,b,c,d){var s,r=b.a,q=H.df(a,r,c,d),p=b.b,o=H.df(a,p,c,d),n=b.c,m=H.nn(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.f6()
s.a=q
s.b=o
s.c=m
return s},
oW:function(a,b){a[v.arrayRti]=b
return a},
nu:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.l_(s)
return a.$S()}return null},
l0:function(a,b){var s
if(H.kn(b))if(a instanceof H.by){s=H.nu(a)
if(s!=null)return s}return H.c_(a)},
c_:function(a){var s
if(a instanceof P.Q){s=a.$ti
return s!=null?s:H.jS(a)}if(Array.isArray(a))return H.kM(a)
return H.jS(J.dh(a))},
kM:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
U:function(a){var s=a.$ti
return s!=null?s:H.jS(a)},
jS:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mL(a,s)},
mL:function(a,b){var s=a instanceof H.by?a.__proto__.__proto__.constructor:b,r=H.mA(v.typeUniverse,s.name)
b.$ccache=r
return r},
l_:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jR(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mK:function(a){var s,r,q,p=this
if(p===t.K)return H.dc(p,a,H.mP)
if(!H.aK(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dc(p,a,H.mS)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.j6
else if(r===t.i||r===t.H)q=H.mO
else if(r===t.N)q=H.mQ
else q=r===t.w?H.jT:null
if(q!=null)return H.dc(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.nG)){p.r="$i"+s
return H.dc(p,a,H.mR)}}else if(s===7)return H.dc(p,a,H.mI)
return H.dc(p,a,H.mG)},
dc:function(a,b,c){a.b=c
return a.b(b)},
mJ:function(a){var s,r=this,q=H.mF
if(!H.aK(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.mD
else if(r===t.K)q=H.mB
else{s=H.di(r)
if(s)q=H.mH}r.a=q
return r.a(a)},
jW:function(a){var s,r=a.y
if(!H.aK(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.jW(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mG:function(a){var s=this
if(a==null)return H.jW(s)
return H.L(v.typeUniverse,H.l0(a,s),null,s,null)},
mI:function(a){if(a==null)return!0
return this.z.b(a)},
mR:function(a){var s,r=this
if(a==null)return H.jW(r)
s=r.r
if(a instanceof P.Q)return!!a[s]
return!!J.dh(a)[s]},
mF:function(a){var s,r=this
if(a==null){s=H.di(r)
if(s)return a}else if(r.b(a))return a
H.kP(a,r)},
mH:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kP(a,s)},
kP:function(a,b){throw H.b(H.mq(H.kB(a,H.l0(a,b),H.ae(b,null))))},
kB:function(a,b,c){var s=P.hk(a),r=H.ae(b==null?H.c_(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
mq:function(a){return new H.d6("TypeError: "+a)},
a5:function(a,b){return new H.d6("TypeError: "+H.kB(a,null,b))},
mP:function(a){return a!=null},
mB:function(a){if(a!=null)return a
throw H.b(H.a5(a,"Object"))},
mS:function(a){return!0},
mD:function(a){return a},
jT:function(a){return!0===a||!1===a},
kN:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a5(a,"bool"))},
oJ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a5(a,"bool"))},
oI:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a5(a,"bool?"))},
oK:function(a){if(typeof a=="number")return a
throw H.b(H.a5(a,"double"))},
oM:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a5(a,"double"))},
oL:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a5(a,"double?"))},
j6:function(a){return typeof a=="number"&&Math.floor(a)===a},
j3:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a5(a,"int"))},
oO:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a5(a,"int"))},
oN:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a5(a,"int?"))},
mO:function(a){return typeof a=="number"},
oP:function(a){if(typeof a=="number")return a
throw H.b(H.a5(a,"num"))},
oR:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a5(a,"num"))},
oQ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a5(a,"num?"))},
mQ:function(a){return typeof a=="string"},
mC:function(a){if(typeof a=="string")return a
throw H.b(H.a5(a,"String"))},
oT:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a5(a,"String"))},
oS:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a5(a,"String?"))},
ni:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ae(a[q],b)
return s},
kQ:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.d.P(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ae(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ae(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ae(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ae(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ae(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ae:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ae(a.z,b)
return s}if(l===7){r=a.z
s=H.ae(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ae(a.z,b)+">"
if(l===9){p=H.no(a.z)
o=a.Q
return o.length!==0?p+("<"+H.ni(o,b)+">"):p}if(l===11)return H.kQ(a,b,null)
if(l===12)return H.kQ(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
no:function(a){var s,r=H.l8(a)
if(r!=null)return r
s="minified:"+a
return s},
kJ:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mA:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jR(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d8(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d7(a,b,q)
n[b]=o
return o}else return m},
my:function(a,b){return H.kL(a.tR,b)},
mx:function(a,b){return H.kL(a.eT,b)},
jR:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kF(H.kD(a,null,b,c))
r.set(b,s)
return s},
fF:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kF(H.kD(a,b,c,!0))
q.set(c,r)
return r},
mz:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jO(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b5:function(a,b){b.a=H.mJ
b.b=H.mK
return b},
d8:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.am(null,null)
s.y=b
s.cy=c
r=H.b5(a,s)
a.eC.set(c,r)
return r},
kI:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mv(a,b,r,c)
a.eC.set(r,s)
return s},
mv:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aK(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.am(null,null)
q.y=6
q.z=b
q.cy=c
return H.b5(a,q)},
jQ:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mu(a,b,r,c)
a.eC.set(r,s)
return s},
mu:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aK(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.di(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.di(q.z))return q
else return H.km(a,b)}}p=new H.am(null,null)
p.y=7
p.z=b
p.cy=c
return H.b5(a,p)},
kH:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.ms(a,b,r,c)
a.eC.set(r,s)
return s},
ms:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aK(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d7(a,"k9",[b])
else if(b===t.P||b===t.T)return t.r}q=new H.am(null,null)
q.y=8
q.z=b
q.cy=c
return H.b5(a,q)},
mw:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.am(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b5(a,s)
a.eC.set(q,r)
return r},
fE:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mr:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d7:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fE(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.am(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b5(a,r)
a.eC.set(p,q)
return q},
jO:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fE(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.am(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b5(a,o)
a.eC.set(q,n)
return n},
kG:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fE(m)
if(j>0){s=l>0?",":""
r=H.fE(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mr(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.am(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b5(a,o)
a.eC.set(q,r)
return r},
jP:function(a,b,c,d){var s,r=b.cy+("<"+H.fE(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mt(a,b,c,r,d)
a.eC.set(r,s)
return s},
mt:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b6(a,b,r,0)
m=H.df(a,c,r,0)
return H.jP(a,n,m,c!==m)}}l=new H.am(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b5(a,l)},
kD:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kF:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.ml(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kE(a,r,h,g,!1)
else if(q===46)r=H.kE(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b4(a.u,a.e,g.pop()))
break
case 94:g.push(H.mw(a.u,g.pop()))
break
case 35:g.push(H.d8(a.u,5,"#"))
break
case 64:g.push(H.d8(a.u,2,"@"))
break
case 126:g.push(H.d8(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.jN(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.d7(p,n,o))
else{m=H.b4(p,a.e,n)
switch(m.y){case 11:g.push(H.jP(p,m,o,a.n))
break
default:g.push(H.jO(p,m,o))
break}}break
case 38:H.mm(a,g)
break
case 42:p=a.u
g.push(H.kI(p,H.b4(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.jQ(p,H.b4(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.kH(p,H.b4(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.f6()
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
H.jN(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.kG(p,H.b4(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.jN(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.mo(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.b4(a.u,a.e,i)},
ml:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kE:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kJ(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.m4(o)+'"')
d.push(H.fF(s,o,n))}else d.push(p)
return m},
mm:function(a,b){var s=b.pop()
if(0===s){b.push(H.d8(a.u,1,"0&"))
return}if(1===s){b.push(H.d8(a.u,4,"1&"))
return}throw H.b(P.fY("Unexpected extended operation "+H.u(s)))},
b4:function(a,b,c){if(typeof c=="string")return H.d7(a,c,a.sEA)
else if(typeof c=="number")return H.mn(a,b,c)
else return c},
jN:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b4(a,b,c[s])},
mo:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b4(a,b,c[s])},
mn:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.fY("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.fY("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aK(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aK(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.L(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.L(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.L(a,b.z,c,d,e)
if(r===6)return H.L(a,b.z,c,d,e)
return r!==7}if(r===6)return H.L(a,b.z,c,d,e)
if(p===6){s=H.km(a,d)
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kl(a,b),c,d,e)}if(r===7){s=H.L(a,t.P,c,d,e)
return s&&H.L(a,b.z,c,d,e)}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kl(a,d),e)}if(p===7){s=H.L(a,b,c,t.P,e)
return s||H.L(a,b,c,d.z,e)}if(q)return!1
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.kR(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.kR(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mN(a,b,c,d,e)}return!1},
kR:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.L(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.L(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.L(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.L(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.L(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mN:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kJ(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fF(a,b,l[p]),c,r[p],e))return!1
return!0},
di:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aK(a))if(r!==7)if(!(r===6&&H.di(a.z)))s=r===8&&H.di(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nG:function(a){var s
if(!H.aK(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aK:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kL:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
am:function am(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f6:function f6(){this.c=this.b=this.a=null},
f1:function f1(){},
d6:function d6(a){this.a=a},
l8:function(a){return v.mangledGlobalNames[a]},
nK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jd:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.k_==null){H.nC()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.ks("Return interceptor for "+H.u(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iT
if(o==null)o=$.iT=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.nH(a)
if(p!=null)return p
if(typeof a=="function")return C.G
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){o=$.iT
if(o==null)o=$.iT=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
lK:function(a){if(a<0||a>4294967295)throw H.b(P.aX(a,0,4294967295,"length",null))
return J.lL(new Array(a))},
jz:function(a){if(a<0)throw H.b(P.k4("Length must be a non-negative integer: "+a))
return new Array(a)},
lL:function(a){return J.jA(a)},
jA:function(a){a.fixed$length=Array
return a},
lM:function(a,b){return J.lu(a,b)},
dh:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cn.prototype
return J.dI.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.co.prototype
if(typeof a=="boolean")return J.dH.prototype
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.Q)return a
return J.jd(a)},
fR:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.Q)return a
return J.jd(a)},
jY:function(a){if(a==null)return a
if(a.constructor==Array)return J.as.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.Q)return a
return J.jd(a)},
nz:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bP.prototype
return a},
bZ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.Q)return a
return J.jd(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dh(a).n(a,b)},
lr:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nF(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fR(a).h(a,b)},
ls:function(a,b,c){return J.bZ(a).fH(a,b,c)},
lt:function(a,b,c,d){return J.bZ(a).h2(a,b,c,d)},
lu:function(a,b){return J.nz(a).a8(a,b)},
jt:function(a,b){return J.jY(a).F(a,b)},
ju:function(a,b){return J.jY(a).B(a,b)},
lv:function(a){return J.bZ(a).gdl(a)},
fU:function(a){return J.dh(a).gG(a)},
aO:function(a){return J.jY(a).gU(a)},
bw:function(a){return J.fR(a).gk(a)},
lw:function(a,b){return J.bZ(a).hJ(a,b)},
fV:function(a){return J.dh(a).i(a)},
a:function a(){},
dH:function dH(){},
co:function co(){},
bf:function bf(){},
e5:function e5(){},
bP:function bP(){},
aB:function aB(){},
as:function as(){},
dJ:function dJ(){},
a7:function a7(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bC:function bC(){},
cn:function cn(){},
dI:function dI(){},
be:function be(){}},P={
me:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nq()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.dg(new P.iP(q),1)).observe(s,{childList:true})
return new P.iO(q,s,r)}else if(self.setImmediate!=null)return P.nr()
return P.ns()},
mf:function(a){self.scheduleImmediate(H.dg(new P.iQ(a),0))},
mg:function(a){self.setImmediate(H.dg(new P.iR(a),0))},
mh:function(a){P.jH(C.i,a)},
jH:function(a,b){var s=C.b.ag(a.a,1000)
return P.mp(s<0?0:s,b)},
mp:function(a,b){var s=new P.iZ()
s.ek(a,b)
return s},
oG:function(a){return new P.bT(a,1)},
mi:function(){return C.K},
mj:function(a){return new P.bT(a,3)},
mU:function(a){return new P.d3(a)},
nf:function(){var s,r
for(s=$.bV;s!=null;s=$.bV){$.de=null
r=s.b
$.bV=r
if(r==null)$.dd=null
s.a.$0()}},
nl:function(){$.jU=!0
try{P.nf()}finally{$.de=null
$.jU=!1
if($.bV!=null)$.k3().$1(P.kV())}},
nj:function(a){var s=new P.eR(a),r=$.dd
if(r==null){$.bV=$.dd=s
if(!$.jU)$.k3().$1(P.kV())}else $.dd=r.b=s},
nk:function(a){var s,r,q,p=$.bV
if(p==null){P.nj(a)
$.de=$.dd
return}s=new P.eR(a)
r=$.de
if(r==null){s.b=p
$.bV=$.de=s}else{q=r.b
s.b=q
$.de=r.b=s
if(q==null)$.dd=s}},
kq:function(a,b){var s=$.aI
if(s===C.e)return P.jH(a,b)
return P.jH(a,s.h8(b))},
kS:function(a,b,c,d,e){P.nk(new P.j9(d,e))},
ng:function(a,b,c,d){var s,r=$.aI
if(r===c)return d.$0()
$.aI=c
s=r
try{r=d.$0()
return r}finally{$.aI=s}},
nh:function(a,b,c,d,e){var s,r=$.aI
if(r===c)return d.$1(e)
$.aI=c
s=r
try{r=d.$1(e)
return r}finally{$.aI=s}},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iZ:function iZ(){},
j_:function j_(a,b){this.a=a
this.b=b},
bT:function bT(a,b){this.a=a
this.b=b},
bU:function bU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d3:function d3(a){this.a=a},
eR:function eR(a){this.a=a
this.b=null},
el:function el(){},
em:function em(){},
j1:function j1(){},
j9:function j9(a,b){this.a=a
this.b=b},
iW:function iW(){},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
lO:function(a,b,c){return H.nx(a,new H.W(b.av("@<0>").cO(c).av("W<1,2>")))},
P:function(a,b){return new H.W(a.av("@<0>").cO(b).av("W<1,2>"))},
kc:function(a){return new P.cT(a.av("cT<0>"))},
jM:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mk:function(a,b){var s=new P.cU(a,b)
s.c=a.e
return s},
lJ:function(a,b,c){var s,r
if(P.jV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.aa.push(a)
try{P.mT(a,s)}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}r=P.ko(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jy:function(a,b,c){var s,r
if(P.jV(a))return b+"..."+c
s=new P.bn(b)
$.aa.push(a)
try{r=s
r.a=P.ko(r.a,a,", ")}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jV:function(a){var s,r
for(s=$.aa.length,r=0;r<s;++r)if(a===$.aa[r])return!0
return!1},
mT:function(a,b){var s,r,q,p,o,n,m,l=a.gU(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.u(l.gH(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gH(l);++j
if(!l.u()){if(j<=4){b.push(H.u(p))
return}r=H.u(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gH(l);++j
for(;l.u();p=o,o=n){n=l.gH(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.u(p)
r=H.u(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
kd:function(a){var s,r={}
if(P.jV(a))return"{...}"
s=new P.bn("")
try{$.aa.push(a)
s.a+="{"
r.a=!0
J.ju(a,new P.hK(r,s))
s.a+="}"}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cT:function cT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iV:function iV(a){this.a=a
this.c=this.b=null},
cU:function cU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cm:function cm(){},
cq:function cq(){},
C:function C(){},
cs:function cs(){},
hK:function hK(a,b){this.a=a
this.b=b},
Y:function Y(){},
ed:function ed(){},
d0:function d0(){},
cV:function cV(){},
d9:function d9(){},
ds:function ds(){},
dv:function dv(){},
hh:function hh(){},
iF:function iF(){},
iG:function iG(){},
j0:function j0(a){this.b=0
this.c=a},
lI:function(a){if(a instanceof H.by)return a.i(0)
return"Instance of '"+H.cF(a)+"'"},
hG:function(a,b,c){var s,r=c?J.jz(a):J.lK(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hH:function(a,b){var s,r=[]
for(s=J.aO(a);s.u();)r.push(s.gH(s))
if(b)return r
return J.jA(r)},
lP:function(a,b){var s,r,q=J.jz(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
jF:function(a){var s=a,r=s.length,q=P.jE(0,null,r)
return H.m0(q<r?s.slice(0,q):s)},
m2:function(a){return new H.hA(a,H.lN(a,!1,!0,!1,!1,!1))},
ko:function(a,b,c){var s=J.aO(b)
if(!s.u())return a
if(c.length===0){do a+=H.u(s.gH(s))
while(s.u())}else{a+=H.u(s.gH(s))
for(;s.u();)a=a+c+H.u(s.gH(s))}return a},
kK:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.lq().b
s=s.test(b)}else s=!1
if(s)return b
r=C.D.he(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.m_(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lG:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dx:function(a){if(a>=10)return""+a
return"0"+a},
hk:function(a){if(typeof a=="number"||H.jT(a)||null==a)return J.fV(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lI(a)},
fY:function(a){return new P.dm(a)},
k4:function(a){return new P.av(!1,null,null,a)},
e8:function(a,b){return new P.cG(null,null,!0,a,b,"Value not in range")},
aX:function(a,b,c,d,e){return new P.cG(b,c,!0,a,d,"Invalid value")},
jE:function(a,b,c){if(a>c)throw H.b(P.aX(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.aX(b,a,c,"end",null))
return b}return c},
ki:function(a,b){if(a<0)throw H.b(P.aX(a,0,null,b,null))
return a},
I:function(a,b,c,d,e){var s=e==null?J.bw(b):e
return new P.dE(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eK(a)},
ks:function(a){return new P.eH(a)},
bb:function(a){return new P.du(a)},
e:function(a){return new P.f3(a)},
l3:function(a){H.nK(a)},
Z:function Z(a,b){this.a=a
this.b=b},
cd:function cd(a){this.a=a},
he:function he(){},
hf:function hf(){},
F:function F(){},
dm:function dm(a){this.a=a},
ev:function ev(){},
e0:function e0(){},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cG:function cG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dE:function dE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eK:function eK(a){this.a=a},
eH:function eH(a){this.a=a},
ej:function ej(a){this.a=a},
du:function du(a){this.a=a},
e3:function e3(){},
cL:function cL(){},
dw:function dw(a){this.a=a},
f3:function f3(a){this.a=a},
hq:function hq(a,b){this.a=a
this.b=b},
h:function h(){},
dG:function dG(){},
ak:function ak(){},
Q:function Q(){},
bn:function bn(a){this.a=a},
b7:function(a){var s,r,q,p,o
if(a==null)return null
s=P.P(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
kO:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jT(a))return a
if(t.f.b(a))return P.kW(a)
if(t.e.b(a)){s=[]
J.ju(a,new P.j4(s))
a=s}return a},
kW:function(a){var s={}
J.ju(a,new P.ja(s))
return s},
j4:function j4(a){this.a=a},
ja:function ja(a){this.a=a},
dB:function dB(a,b){this.a=a
this.b=b},
ho:function ho(){},
hp:function hp(){},
fm:function fm(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
dN:function dN(){},
bk:function bk(){},
e1:function e1(){},
i4:function i4(){},
en:function en(){},
k:function k(){},
bp:function bp(){},
eu:function eu(){},
fa:function fa(){},
fb:function fb(){},
fi:function fi(){},
fj:function fj(){},
fv:function fv(){},
fw:function fw(){},
fC:function fC(){},
fD:function fD(){},
h0:function h0(){},
dn:function dn(){},
h1:function h1(a){this.a=a},
dp:function dp(){},
aP:function aP(){},
e2:function e2(){},
eS:function eS(){},
cH:function cH(){},
eh:function eh(){},
fr:function fr(){},
fs:function fs(){}},W={
lx:function(){var s=document.createElement("a")
s.toString
return s},
k7:function(){var s=document.createElement("canvas")
s.toString
return s},
hg:function(a){return"wheel"},
iU:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kC:function(a,b,c,d){var s=W.iU(W.iU(W.iU(W.iU(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a4:function(a,b,c,d){var s=W.kT(new W.iS(c),t.B)
if(s!=null&&!0)J.lt(a,b,s,!1)
return new W.f2(a,b,s,!1)},
kT:function(a,b){var s=$.aI
if(s===C.e)return a
return s.h9(a,b)},
l:function l(){},
fW:function fW(){},
dk:function dk(){},
dl:function dl(){},
dq:function dq(){},
ba:function ba(){},
ar:function ar(){},
h7:function h7(){},
E:function E(){},
ca:function ca(){},
h8:function h8(){},
ag:function ag(){},
ax:function ax(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
cb:function cb(){},
cc:function cc(){},
dy:function dy(){},
hd:function hd(){},
eU:function eU(a,b){this.a=a
this.b=b},
N:function N(){},
i:function i(){},
c:function c(){},
aQ:function aQ(){},
dz:function dz(){},
dA:function dA(){},
dC:function dC(){},
aR:function aR(){},
ht:function ht(){},
bd:function bd(){},
bg:function bg(){},
hI:function hI(){},
hZ:function hZ(){},
dS:function dS(){},
i_:function i_(a){this.a=a},
dT:function dT(){},
i0:function i0(a){this.a=a},
aU:function aU(){},
dU:function dU(){},
ab:function ab(){},
eT:function eT(a){this.a=a},
v:function v(){},
cC:function cC(){},
aW:function aW(){},
e6:function e6(){},
ea:function ea(){},
i9:function i9(a){this.a=a},
ec:function ec(){},
aE:function aE(){},
ef:function ef(){},
aY:function aY(){},
eg:function eg(){},
aZ:function aZ(){},
ek:function ek(){},
ih:function ih(a){this.a=a},
au:function au(){},
aF:function aF(){},
ao:function ao(){},
eo:function eo(){},
ep:function ep(){},
io:function io(){},
b_:function b_(){},
bo:function bo(){},
et:function et(){},
ir:function ir(){},
aH:function aH(){},
iE:function iE(){},
eN:function eN(){},
b3:function b3(){},
bS:function bS(){},
eV:function eV(){},
cS:function cS(){},
f7:function f7(){},
cW:function cW(){},
fq:function fq(){},
fx:function fx(){},
jx:function jx(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iS:function iS(a){this.a=a},
jL:function jL(a){this.$ti=a},
H:function H(){},
cj:function cj(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f4:function f4(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
fn:function fn(){},
d1:function d1(){},
d2:function d2(){},
fo:function fo(){},
fp:function fp(){},
fu:function fu(){},
fy:function fy(){},
fz:function fz(){},
d4:function d4(){},
d5:function d5(){},
fA:function fA(){},
fB:function fB(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){}},K={fX:function fX(){},dD:function dD(){},aV:function aV(a){this.a=a},X:function X(a){this.a=a}},L={ei:function ei(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},er:function er(a,b,c){this.a=a
this.b=b
this.c=c},es:function es(a,b){this.b=a
this.c=b},ip:function ip(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},is:function is(a,b){this.b=a
this.c=!1
this.a=b}},O={
jv:function(){return new O.bz([])},
bz:function bz(a){this.a=a
this.c=this.b=null},
cx:function cx(a){this.a=a
this.b=null},
ka:function(){var s=V.kx(),r=V.dt(0.7),q=V.dt(0.3),p=V.dt(0.5),o=V.dt(0.5)
return new O.dF(s,new V.K(0.2,0.3,0.4,1),new V.K(0.1,0.2,0.3,1),r,q,p,o,new V.K(1,1,1,1),V.dt(0.8))},
bE:function(){var s=O.jv(),r=new O.dP(s)
s.b2(r.geM(),r.geO())
s=r.dx
if(s==null){s=new D.cp([],[],[],[],[])
s.cB(s.geK(),s.gfj(),s.gfn())
s.gq().j(0,r.gd2())
s.gdN().j(0,r.gcM())
r.dx=s}s.gq().j(0,r.gd2())
s.gdN().j(0,r.gcM())
return r},
dR:function(a,b){return new O.cv(new V.O(0,0,0),a,b,new A.af(!1,!1,!1))},
dF:function dF(a,b,c,d,e,f,g,h,i){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.ch=_.Q=!1
_.rx=null},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(a){this.a=a},
hx:function hx(a,b){this.a=a
this.b=b},
hw:function hw(a){this.a=a},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
dP:function dP(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(){},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(){},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(){},
hL:function hL(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
dQ:function dQ(){},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
cv:function cv(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
hO:function hO(a){this.b=a},
hP:function hP(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
hQ:function hQ(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
il:function il(){}},E={
ah:function(){var s=O.jv(),r=new E.bA(s)
s.b2(r.ghr(),r.ghu())
r.sa6(0,null)
r.sae(null)
r.sX(null)
return r},
kz:function(){var s=window.navigator.vendor
s.toString
if(C.d.O(s,"Google"))return C.u
s=window.navigator.userAgent
s.toString
if(C.d.O(s,"Firefox"))return C.k
s=window.navigator.appVersion
s.toString
if(C.d.O(s,"Trident")||C.d.O(s,"Edge"))return C.l
s=window.navigator.appName
s.toString
if(C.d.O(s,"Microsoft"))return C.l
return C.v},
kA:function(){var s=window.navigator.appVersion
s.toString
if(C.d.O(s,"Win"))return C.H
if(C.d.O(s,"Mac"))return C.p
if(C.d.O(s,"Linux"))return C.I
return C.J},
m3:function(a,b){var s
Date.now()
s=new E.i5(a,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1),new O.cx([]),new O.cx([]),new O.cx([]),[null],P.P(t.N,t.k))
s.eg(a,b)
return s},
jG:function(a){var s=document.getElementById(a)
if(s==null)throw H.b(P.e("Failed to find an element with the identifier, "+a+"."))
return E.ma(s,!0,!0,!0,!1)},
ma:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kp(a,!0,!0,!0,!1)
s=W.k7()
r=s.style
r.width="100%"
r.height="100%"
J.lv(a).j(0,s)
return E.kp(s,!0,!0,!0,!1)},
kp:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=t.z,m=t.t.a(C.h.e6(a,"webgl2",P.lO(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n)))
if(m==null)throw H.b(P.e("Failed to get the rendering context for WebGL."))
s=E.m3(m,a)
H.j3(m.getParameter(3379))
H.j3(m.getParameter(34076))
n=[]
r=$.hi
q=new X.eL(a,n,(r==null?$.hi=new E.f0(E.kz(),E.kA()):r).a===C.k?0.16666666666666666:0.005555555555555556)
p=document
p.toString
n.push(W.a4(p,"contextmenu",q.geW(),!1))
n.push(W.a4(a,"focus",q.gf1(),!1))
n.push(W.a4(a,"blur",q.geQ(),!1))
n.push(W.a4(p,"keyup",q.gf5(),!1))
n.push(W.a4(p,"keydown",q.gf3(),!1))
n.push(W.a4(a,"mousedown",q.gf9(),!1))
n.push(W.a4(a,"mouseup",q.gfd(),!1))
n.push(W.a4(a,o,q.gfb(),!1))
W.hg(a)
W.hg(a)
n.push(W.a4(a,W.hg(a),q.gff(),!1))
n.push(W.a4(p,o,q.geY(),!1))
n.push(W.a4(p,"mouseup",q.gf_(),!1))
n.push(W.a4(p,"pointerlockchange",q.gfh(),!1))
n.push(W.a4(a,"touchstart",q.gfA(),!1))
n.push(W.a4(a,"touchend",q.gfu(),!1))
n.push(W.a4(a,"touchmove",q.gfw(),!1))
Date.now()
n=new E.eq(a,s,q)
n.d4()
return n},
h2:function h2(){},
bA:function bA(a){var _=this
_.b=!0
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bx:function bx(a){this.b=a},
bK:function bK(a){this.b=a},
f0:function f0(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c,d,e,f,g,h){var _=this
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
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
eq:function eq(a,b,c){var _=this
_.b=a
_.d=null
_.e=b
_.x=c
_.cx=!1
_.db=0},
im:function im(a){this.a=a}},Z={
jK:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.db(c)),35044)
a.bindBuffer(b,null)
return new Z.eO(b,s)},
aq:function(a){return new Z.b2(a)},
eO:function eO(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eP:function eP(a){this.a=a},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dr:function dr(a){this.a=a},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
G:function(){return new D.ch()},
h4:function h4(){},
ch:function ch(){var _=this
_.c=_.b=_.a=null
_.d=0},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
S:function S(){this.b=!0},
az:function az(){this.b=!0},
aA:function aA(){this.b=!0},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=!0},
cp:function cp(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={c6:function c6(a,b){this.a=a
this.b=b},dL:function dL(a,b){this.a=a
this.b=b},hC:function hC(a,b){this.c=a
this.d=b},cr:function cr(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=!0},hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},bH:function bH(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=!0},i1:function i1(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bI:function bI(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=!0},e7:function e7(){},cM:function cM(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=!0},iq:function iq(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eL:function eL(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
hs:function(a,b){var s=new V.K(0,0,0,1),r=$.kk
if(r==null){r=V.kj(0,0,1,1)
$.kk=r}return new X.hr(s,a,r)},
bL:function(){var s,r=new X.e4(1.0471975511965976,0.1)
r.saJ(null)
r.sX(null)
s=r.c
$.y().toString
if(!(Math.abs(s-1.0471975511965976)<1e-9)){r.c=1.0471975511965976
r.aA(new D.w("fov",s,1.0471975511965976))}s=r.d
$.y().toString
if(!(Math.abs(s-0.1)<1e-9)){r.d=0.1
r.aA(new D.w("near",s,0.1))}s=r.e
$.y().toString
if(!(Math.abs(s-2000)<1e-9)){r.e=2000
r.aA(new D.w("far",s,2000))}return r},
hr:function hr(a,b,c){var _=this
_.a=a
_.b=b
_.r=c
_.x=null},
e4:function e4(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
ij:function ij(){}},V={
dt:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.K(a,a,a,1)},
c7:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.K(s,r,q,1)},
k0:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
nT:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.c.e7(a-b,s)
return(a<0?a+s:a)+b},
t:function(a,b,c){$.y().toString
return C.d.am(C.c.e2(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bY:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.y().toString
n=C.d.am(C.c.e2(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.d.am(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
aj:function(){var s=$.kf
return s==null?$.kf=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
a1:function(a,b,c){return V.aC(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
bG:function(a,b,c,d){return V.aC(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
cy:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aC(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
jD:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aC(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
kg:function(){var s=$.aD
return s==null?$.aD=new V.J(0,0,0):s},
kj:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e9(a,b,c,d)},
bR:function(){var s=$.kw
return s==null?$.kw=new V.q(0,0,0):s},
jJ:function(){var s=$.kv
return s==null?$.kv=new V.q(0,0,1):s},
kx:function(){var s=$.kt
return s==null?$.kt=new V.q(0,0,-1):s},
mb:function(a,b,c){return new V.q(a,b,c)},
mc:function(a){return new V.q(a.a,a.b,a.c)},
md:function(){var s=$.ky
return s==null?$.ky=new V.b0(0,0,0,0):s},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hj:function hj(){},
cw:function cw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bF:function bF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
D:function D(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9:function e9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function a0(a,b){this.a=a
this.b=b},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
m5:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.a4(n,"scroll",new V.id(s),!1)
return new V.ib(o)},
ib:function ib(a){this.a=a
this.b=null},
id:function id(a){this.a=a},
ic:function ic(a){this.a=a}},U={
h6:function(){return new U.h5()},
B:function(a){var s=new U.c9(V.aj())
s.sL(0,a)
return s},
ay:function(){var s=new U.bB(V.aj(),[])
s.b2(s.geh(),s.gfl())
return s},
h5:function h5(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
c9:function c9(a){this.a=a
this.b=null},
bB:function bB(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a3:function a3(){},
cO:function cO(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cP:function cP(a,b,c,d,e){var _=this
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
cQ:function cQ(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={
jw:function(a){var s=new M.c8([])
s.b2(s.gfp(),s.gfs())
s.br(0,a)
return s},
cg:function(){var s,r=O.jv(),q=new M.cf(r)
r.b2(q.geS(),q.geU())
s=X.hs(!0,null)
q.saF(null)
q.sby(0,s)
q.sae(null)
return q},
c8:function c8(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
cf:function cf(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},
nL:function(a){var s,r,q,p,o,n,m,l,k,j,i={},h=E.jG(a),g=O.bE(),f=g.gay()
f.sY(0,new V.O(0.4,0.6,0.8))
s=O.bE()
f=s.gay()
f.sY(0,new V.O(0.8,0.6,0.4))
s.gbc(s).sa4(0,0.3)
r=O.bE()
f=r.gay()
f.sY(0,new V.O(0.4,0.6,0.8))
r.gbc(r).sa4(0,0.3)
q=U.B(null)
p=U.B(null)
o=E.ah()
o.sae(g)
f=F.at()
f.aI(F.jj(!0))
f.aI(F.kY(!0,36))
o.sa6(0,f)
n=E.ah()
n.sae(s)
n.sa6(0,F.k1())
f=U.ay()
f.j(0,U.B(V.bG(1.3,1.3,1.3,1)))
f.j(0,U.B(V.cy(-1.5707963267948966)))
f.j(0,q)
n.sX(f)
m=E.ah()
m.sa6(0,F.k1())
f=U.ay()
f.j(0,U.B(V.a1(0,0,0.1)))
m.sX(f)
l=E.ah()
l.sa6(0,F.k1())
f=U.ay()
f.j(0,p)
l.sX(f)
k=M.cg()
k.sby(0,X.hs(!1,null))
f=X.bL()
f.saJ(U.B(V.a1(-0.5,0,0)))
f.sX(U.B(V.a1(0,0,5)))
k.saF(f)
f=k.e
f.j(0,n)
f.j(0,o)
j=M.cg()
f=X.bL()
f.saJ(U.B(V.a1(0.5,0,0)))
f.sX(U.B(V.a1(0,0,5)))
j.saF(f)
j.sae(r)
f=j.e
f.j(0,l)
f.j(0,m)
i.a=0.5
i.b=!1
f=h.x
f.gS().gbg().j(0,new M.jk(i))
f.gS().gaK().j(0,new M.jl(i))
f.gS().gbi().j(0,new M.jm(i,q,m,l,p))
h.sbA(M.jw([j,k]))},
nM:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=null,f={},e=E.jG(a),d=O.ka()
d.scD(!0)
d.scC(!0)
d.sdn(new V.K(0.2,0.3,0.4,0.2))
d.sdf(new V.K(0.1,0.2,0.3,0.2))
s=O.bE()
r=s.gay()
r.sY(0,new V.O(0.8,0.6,0.4))
s.gbc(s).sa4(0,0.3)
q=O.bE()
r=q.gay()
r.sY(0,new V.O(0.4,0.6,0.8))
p=U.B(g)
o=U.B(g)
n=U.ay()
n.j(0,U.B(V.cy(0.4)))
n.j(0,U.B(V.jD(0.4)))
m=E.ah()
m.sae(d)
r=F.at()
r.aI(F.kX(1,g,1))
r.aI(F.l1(2))
m.sa6(0,r)
m.sX(n)
l=E.ah()
l.sae(s)
l.sa6(0,F.jj(!1))
r=U.ay()
r.j(0,U.B(V.bG(1.3,1.3,1.3,1)))
r.j(0,U.B(V.cy(-1.5707963267948966)))
r.j(0,p)
r.j(0,n)
l.sX(r)
k=E.ah()
k.sa6(0,F.jj(!0))
j=E.ah()
j.sa6(0,F.kY(!0,36))
r=U.ay()
r.j(0,o)
j.sX(r)
i=M.cg()
i.sby(0,X.hs(!1,g))
r=X.bL()
r.saJ(U.B(V.a1(-0.5,0,0)))
r.sX(U.B(V.a1(0,0,5)))
i.saF(r)
r=i.e
r.j(0,l)
r.j(0,m)
h=M.cg()
r=X.bL()
r.saJ(U.B(V.a1(0.5,0,0)))
r.sX(U.B(V.a1(0,0,5)))
h.saF(r)
h.sae(q)
r=h.e
r.j(0,j)
r.j(0,k)
f.a=0.5
f.b=!1
r=e.x
r.gS().gbg().j(0,new M.jn(f))
r.gS().gaK().j(0,new M.jo(f))
r.gS().gbi().j(0,new M.jp(f,p,k,j,o))
e.sbA(M.jw([h,i]))},
nN:function(c0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5="modifiers",b6={},b7=E.jG(c0),b8=O.bE(),b9=b8.gay()
b9.sY(0,new V.O(0.4,0.6,0.8))
s=O.bE()
b9=s.gay()
b9.sY(0,new V.O(0.8,0.6,0.4))
s.gbc(s).sa4(0,0.3)
r=O.ka()
r.scD(!0)
r.scC(!0)
r.sdn(new V.K(0.2,0.3,0.4,0.2))
r.sdf(new V.K(0.1,0.2,0.3,0.2))
q=U.B(b4)
p=U.B(b4)
o=U.ay()
o.j(0,U.B(V.cy(0.4)))
o.j(0,U.B(V.jD(0.4)))
n=U.ay()
m=F.at()
l=m.gm().a_(1,-1,1)
k=m.gm().a_(1,1,1)
j=m.gm().a_(1,1,-1)
i=m.gm().a_(1,-1,-1)
h=m.gm().a_(-1,-1,1)
g=m.gm().a_(-1,1,1)
f=m.gm().a_(-1,1,-1)
e=m.gm().a_(-1,-1,-1)
d=m.gm().a_(0.5,-0.5,0.5)
c=m.gm().a_(0.5,0.5,0.5)
b=m.gm().a_(0.5,0.5,-0.5)
a=m.gm().a_(0.5,-0.5,-0.5)
a0=m.gm().a_(-0.5,-0.5,0.5)
a1=m.gm().a_(-0.5,0.5,0.5)
a2=m.gm().a_(-0.5,0.5,-0.5)
a3=m.gm().a_(-0.5,-0.5,-0.5)
m.gR(m).h5([l,k,k,j,j,i,i,l,h,g,g,f,f,e,e,h,d,c,c,b,b,a,a,d,a0,a1,a1,a2,a2,a3,a3,a0,l,h,k,g,j,f,i,e,d,a0,c,a1,b,a2,a,a3,l,d,k,c,j,b,i,a,h,a0,g,a1,f,a2,e,a3])
a4=E.ah()
a4.sae(b8)
a4.sa6(0,m)
a4.sX(o)
a5=E.ah()
a5.sae(s)
a5.sa6(0,F.jj(!1))
b9=U.ay()
b9.j(0,U.B(V.bG(1.1,1.1,1.1,1)))
b9.j(0,U.B(V.cy(-1.5707963267948966)))
b9.j(0,q)
b9.j(0,o)
a5.sX(b9)
a6=E.ah()
a6.sa6(0,F.kX(1,b4,1))
a6.sX(n)
a7=E.ah()
a7.sa6(0,F.l1(2))
b9=U.ay()
b9.j(0,p)
b9.j(0,n)
a7.sX(b9)
a8=M.cg()
a8.sby(0,X.hs(!1,b4))
b9=X.bL()
b9.saJ(U.B(V.a1(-0.5,0,0)))
b9.sX(U.B(V.a1(0,0,5)))
a8.saF(b9)
b9=a8.e
b9.j(0,a4)
b9.j(0,a5)
a9=M.cg()
b9=X.bL()
b9.saJ(U.B(V.a1(0.5,0,0)))
b9.sX(U.B(V.a1(0,0,5)))
a9.saF(b9)
a9.sae(r)
b9=a9.e
b9.j(0,a7)
b9.j(0,a6)
b6.a=0.5
b6.b=!1
b9=b7.x
b9.gS().gbg().j(0,new M.jq(b6))
b9.gS().gaK().j(0,new M.jr(b6))
b9.gS().gbi().j(0,new M.js(b6,q,a6,a7,p))
b6=U.h6()
b0=U.h6()
b1=$.bq
if(b1==null)b1=$.bq=new V.a0(0,0)
b1=new U.cP(b6,b0,new X.a2(!1,!1,!1),b1,V.aj())
b6.scz(0,!0)
b6.scl(6.283185307179586)
b6.scn(0)
b6.sa2(0,0)
b6.scm(100)
b6.sa0(0)
b6.sc9(0.5)
b2=b1.gaR()
b6.gq().j(0,b2)
b0.scz(0,!0)
b0.scl(6.283185307179586)
b0.scn(0)
b0.sa2(0,0)
b0.scm(100)
b0.sa0(0)
b0.sc9(0.5)
b0.gq().j(0,b2)
b6=new X.a2(!1,!1,!1)
if(!b1.d.n(0,b6)){b3=b1.d
b1.d=b6
b1.N(new D.w(b5,b3,b6))}if(!b1.r){b1.r=!0
b1.N(new D.w("invertY",!1,!0))}b1.bd(b9)
n.j(0,b1)
U.h6()
if($.bq==null)$.bq=new V.a0(0,0)
V.aj()
b6=U.h6()
b0=$.bq
if(b0==null)b0=$.bq=new V.a0(0,0)
b0=new U.cO(b6,new X.a2(!1,!1,!1),b0,V.aj())
b6.scz(0,!0)
b6.scl(6.283185307179586)
b6.scn(0)
b6.sa2(0,0)
b6.scm(100)
b6.sa0(0)
b6.sc9(0.2)
b6.gq().j(0,b0.gaR())
b6=new X.a2(!0,!1,!1)
if(!b0.c.n(0,b6)){b3=b0.c
b0.c=b6
b0.N(new D.w(b5,b3,b6))}b0.bd(b9)
n.j(0,b0)
b6=new X.a2(!1,!1,!1)
b0=new U.cQ(b6,V.aj())
b1=new X.a2(!1,!1,!1)
if(!b6.n(0,b1)){b0.b=b1
b0.N(new D.w(b5,b6,b1))}b0.bd(b9)
n.j(0,b0)
b7.sbA(M.jw([a9,a8]))},
nI:function(){var s="target2D",r="_Click and drag to move the location of the slice._",q="target3D",p="target4D",o=V.m5("Hypersphere")
o.ap(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."])
o.c2(3,"2D: circle and square")
o.ap(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."])
o.c3(s)
o.ap([r])
o.c2(3,"3D: sphere and cube")
o.ap(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."])
o.c3(q)
o.ap([r])
o.c2(3,"4D: hypersphere and hypercube")
o.ap(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."])
o.c3(p)
o.ap(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"])
o.ap(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."])
o.ap(["\xab[Back to Examples|../]"])
M.nL(s)
M.nM(q)
M.nN(p)},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},A={
lR:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.ga4(a4)+a5.ga4(a5)+a6.ga4(a6)+a7.ga4(a7)+a8.ga4(a8)+a9.ga4(a9)+b0.ga4(b0)+b1.ga4(b1)+b2.ga4(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.o)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
for(o=b4.length,r=0;r<o;++r,p=!0)q+=b4[r].b
for(o=b5.length,r=0;r<o;++r,p=!0)q+=b5[r].b
for(n=b6.length,r=0;r<n;++r,p=!0)q+=b6[r].b
if(!b0.a)n=!1
else n=!0
if(!n)if(!b1.a)m=!1
else m=!0
else m=!0
l=s>0
if(!a5.a)s=!1
else s=!0
if(!s){if(!a6.a)s=!1
else s=!0
if(!s){if(!a7.a)s=!1
else s=!0
if(!s)if(!a8.a)s=!1
else s=!0
else s=!0
k=s}else k=!0}else k=!0
s=!a8.a
if(s)n=!1
else n=!0
j=n||l||o>0||m
if(!a6.a)o=!1
else o=!0
if(!o){if(!a7.a)o=!1
else o=!0
if(!o){if(s)s=!1
else s=!0
i=s}else i=!0}else i=!0
if(!i){if(!a9.a)s=!1
else s=!0
h=s||m}else h=!0
if(!a9.a)g=!1
else g=!0
f=a3>0
e=h||g||j||!1
d=l&&i
c=$.aN()
if(h){s=$.aM()
c=new Z.b2(c.a|s.a)}if(g)c=new Z.b2(c.a|$.aL().a)
if(f)c=new Z.b2(c.a|$.b8().a)
return new A.hN(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
j7:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
j8:function(a,b,c){var s
A.j7(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fS(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
mZ:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.j7(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
mV:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.j8(b,r,"ambient")
b.a+="\n"},
mX:function(a,b){var s,r=a.c
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.j8(b,r,"diffuse")
r=b.a+="\n"
r+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = dot(norm, -litVec);\n"
b.a=r
r+=u.q
b.a=r
r+="   return diffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
n_:function(a,b){var s,r=a.d
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.j8(b,r,"invDiffuse")
r=b.a+="\n"
r+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=r
r+="{\n"
b.a=r
r+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=r
r+=u.q
b.a=r
r+="   return invDiffuseColor*scalar;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
n5:function(a,b){var s,r=a.e
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.j8(b,r,"specular")
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
r+=u.q
b.a=r
r+="   return specularColor*pow(scalar, shininess);\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
n1:function(a,b){var s,r,q
if(!a.k4)return
s=b.a+="// === Normal ===\n"
s+="\n"
b.a=s
s+="vec3 normal()\n"
b.a=s
s=b.a=s+"{\n"
r=a.f.a
if(!r)q=!1
else q=!0
if(!q||r)s=b.a=s+"   return normalize(normalVec);\n"
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
n3:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.j7(b,r,"reflect")
r=b.a+="\n"
r+="vec3 reflect(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   vec3 scalar = reflectClr;\n"
b.a=r}r+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
n4:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.j7(b,r,"refract")
r=b.a+="uniform float refraction;\n"
r+="\n"
b.a=r
r+="vec3 refract(vec3 refl)\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   vec3 scalar = refractClr;\n"
b.a=r}r+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=r
r+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=r
r+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=r
r+="}\n"
b.a=r
b.a=r+"\n"},
mW:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.fS(r)
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
p+=u.M
c.a=p
p+=u.b
c.a=p
c.a=p+"\n"}o=[]
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.a.t(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
if(!a.b.a)s=!1
else s=!0
if(s)o.push("ambientColor")
if(a.dx){c.a+=u.h
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
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.t(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.t(o," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
c.a=s+u.N
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
mY:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.fS(r)
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
if(!a.b.a)p=!1
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.h
l=[]
if(!a.c.a)p=!1
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)p=!1
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)p=!1
else p=!0
if(p)l.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.t(l," + ")+");\n"}else c.a+="   highLight = "+C.a.t(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.t(m," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.N
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
n2:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.fS(r)
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
if(m){p+=u.M
c.a=p
p+=u.b
c.a=p
p+="\n"
c.a=p}if(o)p=c.a=p+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(n){p+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=p
p+=u.S
c.a=p
p+=u.U
c.a=p
c.a=p+"\n"}j=[]
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
p=c.a+="   return "+C.a.t(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
if(!a.b.a)p=!1
else p=!0
if(p)j.push("ambientColor")
if(a.dx){c.a+=u.h
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
p=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
p+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=p
c.a=p+"   if(length(intensity) > 0.0001) {\n"
i=[]
if(!a.c.a)p=!1
else p=!0
if(p)i.push("diffuse(norm, normDir)")
if(!a.d.a)p=!1
else p=!0
if(p)i.push("invDiffuse(norm, normDir)")
if(!a.e.a)p=!1
else p=!0
if(p)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.a.t(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.t(j," + ")+");\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=p
p+="{\n"
c.a=p
p+=u.N
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
n6:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.fS(r)
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
if(l){s+=u.M
c.a=s
s+=u.b
c.a=s
s=c.a=s+"\n"}s+="   vec3 normDir = normalize(dir);\n"
c.a=s
s+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=s
s+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=s
if(m){s=$.hi
if(s==null)s=$.hi=new E.f0(E.kz(),E.kA())
p=c.a
if(s.b===C.p){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s+=u.S
c.a=s
s+=u.U
c.a=s
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.t(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
if(!a.b.a)s=!1
else s=!0
if(s)h.push("ambientColor")
if(a.dx){c.a+=u.h
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
s=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
s+="   if(length(intensity) > 0.0001) {\n"
c.a=s
c.a=s+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=[]
if(!a.c.a)s=!1
else s=!0
if(s)g.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)g.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.a.t(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.t(h," + ")+");\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 all"+q+"Values(vec3 norm)\n"
c.a=s
s+="{\n"
c.a=s
s+=u.N
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
n0:function(a,b){var s,r
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
if(!a.b.a)s=!1
else s=!0
if(s)r.push("ambientColor")
if(!a.c.a)s=!1
else s=!0
if(s)r.push("diffuse(norm, litVec)")
if(!a.d.a)s=!1
else s=!0
if(s)r.push("invDiffuse(norm, litVec)")
if(!a.e.a)s=!1
else s=!0
if(s)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.a.t(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
n7:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.bn(""),j=""+"precision mediump float;\n"
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
A.mZ(a,k)
A.mV(a,k)
A.mX(a,k)
A.n_(a,k)
A.n5(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.n3(a,k)
A.n4(a,k)}A.n1(a,k)
q=k.a+="// === Alpha ===\n"
q=k.a=q+"\n"
p=a.y.a
if(p)q=k.a=q+"uniform float alpha;\n"
q+="float alphaValue()\n"
k.a=q
q=k.a=q+"{\n"
if(!p)o=!1
else o=!0
if(!o)q=k.a=q+"   return 1.0;\n"
else if(p){q+="   return alpha;\n"
k.a=q}q+="}\n"
k.a=q
k.a=q+"\n"
q=a.k1
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mW(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mY(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.n2(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.n6(a,p[n],k)
A.n0(a,k)}p=k.a+="// === Main ===\n"
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
if(q){k.a=j+u.N
m.push("lightAccum")
if(!a.b.a)j=!1
else j=!0
if(j)k.a+="   setAmbientColor();\n"
if(!a.c.a)j=!1
else j=!0
if(j)k.a+="   setDiffuseColor();\n"
if(!a.d.a)j=!1
else j=!0
if(j)k.a+="   setInvDiffuseColor();\n"
if(!a.e.a)j=!1
else j=!0
if(j)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.d.b6(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.d.b6(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.d.b6(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.d.b6(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.a.t(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
n8:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aW+"];\n"
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
na:function(a,b){var s
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
n9:function(a,b){var s
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
nc:function(a,b){var s,r
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
nd:function(a,b){var s,r
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
nb:function(a,b){var s
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
ne:function(a,b){var s
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
fS:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.d.b6(a,1)},
jI:function(a,b,c,d,e){var s=new A.ix([],a,c,e)
s.f=d
s.e=P.hG(d,0,!1)
return s},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a,b){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.i5=_.i4=_.dF=_.i3=_.i2=_.dE=_.dD=_.i1=_.i0=_.dC=_.dB=_.i_=_.hZ=_.dA=_.hY=_.hX=_.dz=_.dw=_.bu=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.ca=c
_.cb=d
_.cc=e
_.cd=f
_.ce=g
_.cf=h
_.cg=i
_.ci=j
_.i8=_.i7=_.i6=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b9:function b9(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
bm:function bm(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aW=b5
_.bu=b6
_.dw=b7},
ez:function ez(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eA:function eA(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eD:function eD(a,b,c,d,e,f,g,h,i,j){var _=this
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
eG:function eG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bN:function bN(){},
iw:function iw(){},
iC:function iC(a){this.a=a},
cN:function cN(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iA:function iA(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ew:function ew(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
ex:function ex(a,b,c){this.a=a
this.c=b
this.d=c},
ey:function ey(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
eB:function eB(a,b,c){this.a=a
this.c=b
this.d=c},
eC:function eC(a,b,c){this.a=a
this.c=b
this.d=c},
eE:function eE(a,b,c){this.a=a
this.c=b
this.d=c},
eF:function eF(a,b,c){this.a=a
this.c=b
this.d=c}},F={
k1:function(){var s,r,q,p=F.at(),o=p.gm(),n=$.T
if(n==null)n=$.T=new V.D(0,0)
s=new V.q(-1,-1,0).E()
r=o.aT(new V.al(1,2,4,6),V.c7(255,0,0),new V.J(-1,0,0),n,s,null)
s=p.gm()
n=new V.q(1,-1,0).E()
q=s.aT(new V.al(0,3,4,6),V.c7(0,0,255),new V.J(1,0,0),new V.D(1,0),n,null)
p.gR(p).c1(0,r,q)
return p},
jj:function(a){var s,r,q,p,o=null,n=F.at(),m=n.gm(),l=new V.q(-1,-1,1).E(),k=m.aT(new V.al(1,2,4,6),V.c7(255,0,0),new V.J(-1,-1,0),new V.D(0,1),l,o)
l=n.gm()
m=new V.q(1,-1,1).E()
s=l.aT(new V.al(0,3,4,6),V.c7(0,0,255),new V.J(1,-1,0),new V.D(1,1),m,o)
m=n.gm()
l=new V.q(1,1,1).E()
r=m.aT(new V.al(0,2,5,6),V.c7(0,128,0),new V.J(1,1,0),new V.D(1,0),l,o)
l=n.gm()
m=$.T
if(m==null)m=$.T=new V.D(0,0)
q=new V.q(-1,1,1).E()
p=l.aT(new V.al(0,2,4,7),V.c7(255,255,0),new V.J(-1,1,0),m,q,o)
if(a)n.gR(n).dd([k,s,r,p])
else n.gI().h3([k,s,r,p])
n.ax()
return n},
kX:function(a,b,c){var s=null,r=F.at()
F.da(r,b,s,c,a,1,0,0,1)
F.da(r,b,s,c,a,0,1,0,3)
F.da(r,b,s,c,a,0,0,1,2)
F.da(r,b,s,c,a,-1,0,0,0)
F.da(r,b,s,c,a,0,-1,0,0)
F.da(r,b,s,c,a,0,0,-1,3)
r.ax()
return r},
j5:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
da:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.q(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.q(s+a4,r+a2,q+a3)
o=new V.q(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.q(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.j5(h)
j=F.j5(g)
a.aI(F.nP(a0,a1,new F.j2(i,F.j5(f),F.j5(e),j,k,c),b))},
kY:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new F.jb()
if(b<3)throw H.b(P.e("Must have 3 or more sizes for a disk."))
s=F.at()
r=-6.283185307179586/b
q=[]
for(p=0;p<=b;++p){o=r*p
n=Math.sin(o)
m=Math.cos(o)
l=e.$1(p/b)
k=s.a
if(k==null)k=s.a=new F.p(s,[])
j=new V.q(n,m,1).E()
if(n<0)i=0
else i=n>1?1:n
h=m<0
if(h)g=0
else g=m>1?1:m
if(h)h=0
else h=m>1?1:m
f=F.br(new V.al(-1,-1,-1,-1),null,new V.K(i,g,h,1),new V.J(n*l,m*l,0),new V.q(0,0,1),new V.D(n*0.5+0.5,m*0.5+0.5),j,null,0)
k.j(0,f)
q.push(f)}s.gR(s).dd(q)
return s},
l1:function(a){var s=F.at(),r=Math.sqrt(5)/2+0.5,q=F.a8(s,new V.q(-1,r,0)),p=F.a8(s,new V.q(1,r,0)),o=-r,n=F.a8(s,new V.q(-1,o,0)),m=F.a8(s,new V.q(1,o,0)),l=F.a8(s,new V.q(0,-1,o)),k=F.a8(s,new V.q(0,1,o)),j=F.a8(s,new V.q(0,-1,r)),i=F.a8(s,new V.q(0,1,r)),h=F.a8(s,new V.q(r,0,1)),g=F.a8(s,new V.q(r,0,-1)),f=F.a8(s,new V.q(o,0,1)),e=F.a8(s,new V.q(o,0,-1))
F.M(s,q,e,k,a)
F.M(s,q,k,p,a)
F.M(s,q,p,i,a)
F.M(s,q,i,f,a)
F.M(s,q,f,e,a)
F.M(s,p,k,g,a)
F.M(s,k,e,l,a)
F.M(s,e,f,n,a)
F.M(s,f,i,j,a)
F.M(s,i,p,h,a)
F.M(s,m,g,l,a)
F.M(s,m,l,n,a)
F.M(s,m,n,j,a)
F.M(s,m,j,h,a)
F.M(s,m,h,g,a)
F.M(s,l,g,k,a)
F.M(s,n,l,e,a)
F.M(s,j,n,f,a)
F.M(s,h,j,i,a)
F.M(s,g,h,p,a)
s.hq(new F.eM(),new F.iJ())
return s},
a8:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=null
b=b.E()
s=b.a
r=b.b
q=b.c
p=F.br(h,h,h,new V.J(s,r,q),b,h,h,h,0)
o=a.hj(p,new F.eM())
if(o!=null)return o
n=s*0.5+0.5
m=r*0.5+0.5
l=q*0.5+0.5
if(n<0)n=0
else if(n>1)n=1
if(m<0)m=0
else if(m>1)m=1
if(l<0)l=0
else if(l>1)l=1
p.sY(0,new V.K(n,m,l,1))
k=Math.sqrt(s*s+r*r)
j=Math.atan2(r,s)/1.5707963267948966
if(j<0)j=-j
i=Math.atan2(k,q)/3.141592653589793
p.sct(new V.D(j,i<0?-i:i))
a.gm().j(0,p)
return p},
M:function(a,b,c,d,e){var s,r,q,p,o,n,m
if(e<=0)a.gI().dc(0,b,d,c)
else{s=b.r
if(s==null)s=V.jJ()
r=c.r
if(r==null)r=V.jJ()
q=d.r
if(q==null)q=V.jJ()
p=F.a8(a,s.P(0,r).w(0,0.5))
o=F.a8(a,r.P(0,q).w(0,0.5))
n=F.a8(a,q.P(0,s).w(0,0.5))
m=e-1
F.M(a,b,p,n,m)
F.M(a,p,c,o,m)
F.M(a,o,n,p,m)
F.M(a,n,o,d,m)}},
nP:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.b(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.b(P.e("Must have 1 or more divisions of the height for a surface."))
s=F.at()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.p(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.br(e,e,new V.K(n,0,0,1),e,e,new V.D(p,1),e,e,0)
o.j(0,m)
c.$3(m,p,0)
r.push(m.c8(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.p(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.br(e,e,new V.K(h,g,f,1),e,e,new V.D(p,k),e,e,0)
i.j(0,m)
c.$3(m,p,l)
r.push(m.c8(d))}}s.gI().h4(a+1,b+1,r)
return s},
at:function(){return new F.an()},
br:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.ap()
h=$.ln()
s=$.aN()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.aM().a)!==0)q.r=e
if((r&$.aL().a)!==0)q.x=b
if((r&$.bu().a)!==0)q.y=f
if((r&$.bv().a)!==0)q.z=g
if((r&$.lo().a)!==0)q.Q=c
if((r&$.c1().a)!==0)q.ch=i
if((r&$.b8().a)!==0)q.cx=a
return q},
j2:function j2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jb:function jb(){},
ai:function ai(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(){},
ie:function ie(){},
aS:function aS(){this.b=this.a=null},
hE:function hE(){},
iv:function iv(){},
i3:function i3(){this.a=null},
an:function an(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cJ:function cJ(a,b){this.a=a
this.b=b},
cK:function cK(a,b){this.a=a
this.b=b},
bO:function bO(a,b){this.a=a
this.b=b},
ap:function ap(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
iN:function iN(a){this.a=a},
iM:function iM(a){this.a=a},
p:function p(a,b){this.a=a
this.b=!1
this.c=b},
a9:function a9(a,b,c){this.b=a
this.c=b
this.d=c},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
this.b=b},
ad:function ad(a,b){this.b=a
this.c=b},
iK:function iK(){},
eM:function eM(){},
iL:function iL(){},
iJ:function iJ(){},
b1:function b1(a){this.b=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jB.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gG:function(a){return H.cE(a)},
i:function(a){return"Instance of '"+H.cF(a)+"'"}}
J.dH.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ibs:1}
J.co.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.bf.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.e5.prototype={}
J.bP.prototype={}
J.aB.prototype={
i:function(a){var s=a[$.lb()]
if(s==null)return this.ed(a)
return"JavaScript function for "+J.fV(s)}}
J.as.prototype={
cq:function(a,b){if(!!a.fixed$length)H.f(P.x("removeAt"))
if(b<0||b>=a.length)throw H.b(P.e8(b,null))
return a.splice(b,1)[0]},
A:function(a,b){var s
if(!!a.fixed$length)H.f(P.x("remove"))
for(s=0;s<a.length;++s)if(J.z(a[s],b)){a.splice(s,1)
return!0}return!1},
br:function(a,b){if(!!a.fixed$length)H.f(P.x("addAll"))
this.en(a,b)
return},
en:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.b(P.bb(a))
for(s=0;s<r;++s)a.push(b[s])},
B:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.bb(a))}},
t:function(a,b){var s,r,q=a.length,p=P.hG(q,"",!1)
for(s=0;s<a.length;++s){r=H.u(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
ho:function(a){return this.t(a,"")},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ghl:function(a){if(a.length>0)return a[0]
throw H.b(H.kb())},
gcj:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.kb())},
b4:function(a,b){if(!!a.immutable$list)H.f(P.x("sort"))
H.m8(a,b==null?J.mM():b)},
ea:function(a){return this.b4(a,null)},
O:function(a,b){var s
for(s=0;s<a.length;++s)if(J.z(a[s],b))return!0
return!1},
i:function(a){return P.jy(a,"[","]")},
gU:function(a){return new J.a7(a,a.length)},
gG:function(a){return H.cE(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.f(P.x("set length"))
if(b>a.length)H.kM(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.bX(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.f(P.x("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bX(a,b))
a[b]=c},
$ij:1,
$ih:1,
$im:1}
J.dJ.prototype={}
J.a7.prototype={
gH:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bC.prototype={
a8:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbv(b)
if(this.gbv(a)===s)return 0
if(this.gbv(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbv:function(a){return a===0?1/a<0:a<0},
dH:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.x(""+a+".floor()"))},
au:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.x(""+a+".round()"))},
ha:function(a,b,c){if(C.b.a8(b,c)>0)throw H.b(H.fQ(b))
if(this.a8(a,b)<0)return b
if(this.a8(a,c)>0)return c
return a},
e2:function(a,b){var s
if(b>20)throw H.b(P.aX(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbv(a))return"-"+s
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
w:function(a,b){return a*b},
e7:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ag:function(a,b){return(a|0)===a?a/b|0:this.fT(a,b)},
fT:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.x("Result of truncating division is "+H.u(s)+": "+H.u(a)+" ~/ "+b))},
bp:function(a,b){var s
if(a>0)s=this.fS(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fS:function(a,b){return b>31?0:a>>>b},
$iV:1,
$ia6:1}
J.cn.prototype={$in:1}
J.dI.prototype={}
J.be.prototype={
c6:function(a,b){if(b<0)throw H.b(H.bX(a,b))
if(b>=a.length)H.f(H.bX(a,b))
return a.charCodeAt(b)},
cQ:function(a,b){if(b>=a.length)throw H.b(H.bX(a,b))
return a.charCodeAt(b)},
P:function(a,b){return a+b},
cF:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.e8(b,null))
if(b>c)throw H.b(P.e8(b,null))
if(c>a.length)throw H.b(P.e8(c,null))
return a.substring(b,c)},
b6:function(a,b){return this.cF(a,b,null)},
w:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.C)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
am:function(a,b){var s=b-a.length
if(s<=0)return a
return this.w(" ",s)+a},
hc:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.aX(c,0,s,null,null))
return H.l6(a,b,c)},
O:function(a,b){return this.hc(a,b,0)},
a8:function(a,b){var s
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
gk:function(a){return a.length},
$iA:1}
H.dM.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.R.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.d.c6(this.a,b)}}
H.j.prototype={}
H.bD.prototype={
gH:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.fR(q),o=p.gk(q)
if(r.b!==o)throw H.b(P.bb(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.F(q,s);++r.c
return!0}}
H.bi.prototype={
gU:function(a){return new H.ct(J.aO(this.a),this.b)},
gk:function(a){return J.bw(this.a)},
F:function(a,b){return this.b.$1(J.jt(this.a,b))}}
H.ce.prototype={$ij:1}
H.ct.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gH(r))
return!0}s.a=null
return!1},
gH:function(a){return H.U(this).Q[1].a(this.a)}}
H.cR.prototype={
gU:function(a){return new H.eQ(J.aO(this.a),this.b)}}
H.eQ.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gH(s)))return!0
return!1},
gH:function(a){var s=this.a
return s.gH(s)}}
H.ci.prototype={}
H.eJ.prototype={
l:function(a,b,c){throw H.b(P.x("Cannot modify an unmodifiable list"))}}
H.bQ.prototype={}
H.it.prototype={
al:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cD.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dK.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eI.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i2.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ft.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.by.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.l9(r==null?"unknown":r)+"'"},
ghR:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ik.prototype={}
H.ig.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.l9(s)+"'"}}
H.c2.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.c2))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.cE(this.a)
else s=typeof r!=="object"?J.fU(r):H.cE(r)
return(s^H.cE(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.u(this.d)+"' of "+("Instance of '"+H.cF(s)+"'")}}
H.eb.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.W.prototype={
gk:function(a){return this.a},
gaH:function(a){return new H.aT(this)},
ghQ:function(a){return H.lQ(new H.aT(this),new H.hB(this))},
hd:function(a,b){var s=this.b
if(s==null)return!1
return this.ey(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bo(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bo(p,b)
q=r==null?n:r.b
return q}else return o.hn(b)},
hn:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cV(q,J.fU(a)&0x3ffffff)
r=this.dJ(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cN(s==null?m.b=m.bS():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cN(r==null?m.c=m.bS():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bS()
p=J.fU(b)&0x3ffffff
o=m.cV(q,p)
if(o==null)m.bZ(q,p,[m.bT(b,c)])
else{n=m.dJ(o,b)
if(n>=0)o[n].b=c
else o.push(m.bT(b,c))}}},
B:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.bb(s))
r=r.c}},
cN:function(a,b,c){var s=this.bo(a,b)
if(s==null)this.bZ(a,b,this.bT(b,c))
else s.b=c},
bT:function(a,b){var s=this,r=new H.hF(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dJ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.z(a[r].a,b))return r
return-1},
i:function(a){return P.kd(this)},
bo:function(a,b){return a[b]},
cV:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
eB:function(a,b){delete a[b]},
ey:function(a,b){return this.bo(a,b)!=null},
bS:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bZ(r,s,r)
this.eB(r,s)
return r}}
H.hB.prototype={
$1:function(a){var s=this.a
return H.U(s).Q[1].a(s.h(0,a))},
$S:function(){return H.U(this.a).av("2(1)")}}
H.hF.prototype={}
H.aT.prototype={
gk:function(a){return this.a.a},
gU:function(a){var s=this.a,r=new H.dO(s,s.r)
r.c=s.e
return r}}
H.dO.prototype={
gH:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.bb(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.je.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.jf.prototype={
$2:function(a,b){return this.a(a,b)},
$S:47}
H.jg.prototype={
$1:function(a){return this.a(a)},
$S:41}
H.hA.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cA.prototype={}
H.bJ.prototype={
gk:function(a){return a.length},
$ir:1}
H.bj.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cz.prototype={
l:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dV.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.dW.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.dX.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.dY.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.dZ.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.cB.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.e_.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.cX.prototype={}
H.cY.prototype={}
H.cZ.prototype={}
H.d_.prototype={}
H.am.prototype={
av:function(a){return H.fF(v.typeUniverse,this,a)},
cO:function(a){return H.mz(v.typeUniverse,this,a)}}
H.f6.prototype={}
H.f1.prototype={
i:function(a){return this.a}}
H.d6.prototype={}
P.iP.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:37}
P.iO.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:34}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:19}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:19}
P.iZ.prototype={
ek:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.dg(new P.j_(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))}}
P.j_.prototype={
$0:function(){this.b.$0()},
$S:4}
P.bT.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.u(this.a)+")"}}
P.bU.prototype={
gH:function(a){var s=this.c
if(s==null)return this.b
return s.gH(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bT){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aO(s)
if(o instanceof P.bU){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d3.prototype={
gU:function(a){return new P.bU(this.a())}}
P.eR.prototype={}
P.el.prototype={}
P.em.prototype={}
P.j1.prototype={}
P.j9.prototype={
$0:function(){var s=H.b(this.a)
s.stack=this.b.i(0)
throw s},
$S:4}
P.iW.prototype={
hL:function(a){var s,r,q,p=null
try{if(C.e===$.aI){a.$0()
return}P.ng(p,p,this,a)}catch(q){s=H.fT(q)
r=H.jZ(q)
P.kS(p,p,this,s,r)}},
hM:function(a,b){var s,r,q,p=null
try{if(C.e===$.aI){a.$1(b)
return}P.nh(p,p,this,a,b)}catch(q){s=H.fT(q)
r=H.jZ(q)
P.kS(p,p,this,s,r)}},
hN:function(a,b){return this.hM(a,b,t.z)},
h8:function(a){return new P.iX(this,a)},
h9:function(a,b){return new P.iY(this,a,b)}}
P.iX.prototype={
$0:function(){return this.a.hL(this.b)},
$S:4}
P.iY.prototype={
$1:function(a){return this.a.hN(this.b,a)},
$S:function(){return this.c.av("~(0)")}}
P.cT.prototype={
gU:function(a){var s=new P.cU(this,this.r)
s.c=this.e
return s},
gk:function(a){return this.a},
O:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ew(b)
return r}},
ew:function(a){var s=this.d
if(s==null)return!1
return this.bJ(s[this.bG(a)],a)>=0},
j:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cR(s==null?q.b=P.jM():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cR(r==null?q.c=P.jM():r,b)}else return q.em(0,b)},
em:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jM()
s=q.bG(b)
r=p[s]
if(r==null)p[s]=[q.bF(b)]
else{if(q.bJ(r,b)>=0)return!1
r.push(q.bF(b))}return!0},
A:function(a,b){if((b&1073741823)===b)return this.fD(this.c,b)
else return this.fC(0,b)},
fC:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bG(b)
r=n[s]
q=o.bJ(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d8(p)
return!0},
cR:function(a,b){if(a[b]!=null)return!1
a[b]=this.bF(b)
return!0},
fD:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d8(s)
delete a[b]
return!0},
cX:function(){this.r=this.r+1&1073741823},
bF:function(a){var s,r=this,q=new P.iV(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cX()
return q},
d8:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cX()},
bG:function(a){return J.fU(a)&1073741823},
bJ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.z(a[r].a,b))return r
return-1}}
P.iV.prototype={}
P.cU.prototype={
gH:function(a){return H.U(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.bb(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cm.prototype={}
P.cq.prototype={$ij:1,$ih:1,$im:1}
P.C.prototype={
gU:function(a){return new H.bD(a,this.gk(a))},
F:function(a,b){return this.h(a,b)},
B:function(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gk(a))throw H.b(P.bb(a))}},
gdL:function(a){return this.gk(a)===0},
hO:function(a,b){var s,r,q,p,o=this
if(o.gdL(a)){s=J.jz(0)
return s}r=o.h(a,0)
q=P.hG(o.gk(a),r,!0)
for(p=1;p<o.gk(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
cv:function(a){return this.hO(a,!0)},
i:function(a){return P.jy(a,"[","]")}}
P.cs.prototype={}
P.hK.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.u(a)
r.a=s+": "
r.a+=H.u(b)},
$S:30}
P.Y.prototype={
B:function(a,b){var s,r,q
for(s=J.aO(this.gaH(a)),r=H.c_(a).av("Y.V");s.u();){q=s.gH(s)
b.$2(q,r.a(this.h(a,q)))}},
gk:function(a){return J.bw(this.gaH(a))},
i:function(a){return P.kd(a)},
$ia_:1}
P.ed.prototype={
i:function(a){return P.jy(this,"{","}")},
F:function(a,b){var s,r,q,p,o="index"
H.nt(b,o,t.S)
P.ki(b,o)
for(s=P.mk(this,this.r),r=H.U(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.b(P.I(b,this,o,null,q))}}
P.d0.prototype={$ij:1,$ih:1}
P.cV.prototype={}
P.d9.prototype={}
P.ds.prototype={}
P.dv.prototype={}
P.hh.prototype={}
P.iF.prototype={}
P.iG.prototype={
he:function(a){var s,r,q,p=P.jE(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.j0(r)
if(q.eD(a,0,p)!==p){C.d.c6(a,p-1)
q.c0()}return new Uint8Array(r.subarray(0,H.mE(0,q.b,s)))}}
P.j0.prototype={
c0:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
h1:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.d(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.d(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.d(r,p)
r[p]=s&63|128
return!0}else{n.c0()
return!1}},
eD:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.d.c6(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.d.cQ(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.h1(p,C.d.cQ(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c0()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.d(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.d(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.d(s,o)
s[o]=p&63|128}}}return q}}
P.Z.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.Z&&this.a===b.a&&!0},
a8:function(a,b){return C.b.a8(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.b.bp(s,30))&1073741823},
i:function(a){var s=this,r=P.lG(H.lZ(s)),q=P.dx(H.lX(s)),p=P.dx(H.lT(s)),o=P.dx(H.lU(s)),n=P.dx(H.lW(s)),m=P.dx(H.lY(s)),l=P.lH(H.lV(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.cd.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.cd&&this.a===b.a},
gG:function(a){return C.b.gG(this.a)},
a8:function(a,b){return C.b.a8(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hf(),o=this.a
if(o<0)return"-"+new P.cd(0-o).i(0)
s=p.$1(C.b.ag(o,6e7)%60)
r=p.$1(C.b.ag(o,1e6)%60)
q=new P.he().$1(o%1e6)
return""+C.b.ag(o,36e8)+":"+s+":"+r+"."+q}}
P.he.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.hf.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.F.prototype={}
P.dm.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hk(s)
return"Assertion failed"}}
P.ev.prototype={}
P.e0.prototype={
i:function(a){return"Throw of null."}}
P.av.prototype={
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbI()+o+m
if(!q.a)return l
s=q.gbH()
r=P.hk(q.b)
return l+s+": "+r}}
P.cG.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.u(q):""
else if(q==null)s=": Not greater than or equal to "+H.u(r)
else if(q>r)s=": Not in inclusive range "+H.u(r)+".."+H.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.u(r)
return s}}
P.dE.prototype={
gbI:function(){return"RangeError"},
gbH:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk:function(a){return this.f}}
P.eK.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eH.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.ej.prototype={
i:function(a){return"Bad state: "+this.a}}
P.du.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hk(s)+"."}}
P.e3.prototype={
i:function(a){return"Out of Memory"},
$iF:1}
P.cL.prototype={
i:function(a){return"Stack Overflow"},
$iF:1}
P.dw.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f3.prototype={
i:function(a){return"Exception: "+this.a}}
P.hq.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.d.cF(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gk:function(a){var s,r=this.gU(this)
for(s=0;r.u();)++s
return s},
F:function(a,b){var s,r,q
P.ki(b,"index")
for(s=this.gU(this),r=0;s.u();){q=s.gH(s)
if(b===r)return q;++r}throw H.b(P.I(b,this,"index",null,r))},
i:function(a){return P.lJ(this,"(",")")}}
P.dG.prototype={}
P.ak.prototype={
gG:function(a){return P.Q.prototype.gG.call(C.F,this)},
i:function(a){return"null"}}
P.Q.prototype={constructor:P.Q,$iQ:1,
n:function(a,b){return this===b},
gG:function(a){return H.cE(this)},
i:function(a){return"Instance of '"+H.cF(this)+"'"},
toString:function(){return this.i(this)}}
P.bn.prototype={
gk:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fW.prototype={
gk:function(a){return a.length}}
W.dk.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dl.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dq.prototype={}
W.ba.prototype={
e6:function(a,b,c){var s=a.getContext(b,P.kW(c))
return s},
$iba:1}
W.ar.prototype={
gk:function(a){return a.length}}
W.h7.prototype={
gk:function(a){return a.length}}
W.E.prototype={$iE:1}
W.ca.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.h8.prototype={}
W.ag.prototype={}
W.ax.prototype={}
W.h9.prototype={
gk:function(a){return a.length}}
W.ha.prototype={
gk:function(a){return a.length}}
W.hb.prototype={
gk:function(a){return a.length}}
W.hc.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cb.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.cc.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.u(r)+", "
s=a.top
s.toString
return r+H.u(s)+") "+H.u(this.gaL(a))+" x "+H.u(this.gaG(a))},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bZ(b)
if(s===r.gbw(b)){s=a.top
s.toString
s=s===r.gbz(b)&&this.gaL(a)===r.gaL(b)&&this.gaG(a)===r.gaG(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.c.gG(r)
s=a.top
s.toString
return W.kC(r,C.c.gG(s),C.c.gG(this.gaL(a)),C.c.gG(this.gaG(a)))},
gdj:function(a){var s=a.bottom
s.toString
return s},
gcW:function(a){return a.height},
gaG:function(a){var s=this.gcW(a)
s.toString
return s},
gbw:function(a){var s=a.left
s.toString
return s},
gbx:function(a){var s=a.right
s.toString
return s},
gbz:function(a){var s=a.top
s.toString
return s},
gd9:function(a){return a.width},
gaL:function(a){var s=this.gd9(a)
s.toString
return s},
$iac:1}
W.dy.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.hd.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.eU.prototype={
gdL:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
j:function(a,b){this.a.appendChild(b).toString
return b},
gU:function(a){var s=this.cv(this)
return new J.a7(s,s.length)}}
W.N.prototype={
gdl:function(a){var s=a.children
s.toString
return new W.eU(a,s)},
gdm:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.ac(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
$iN:1}
W.i.prototype={$ii:1}
W.c.prototype={
h2:function(a,b,c,d){if(c!=null)this.eo(a,b,c,!1)},
eo:function(a,b,c,d){return a.addEventListener(b,H.dg(c,1),!1)},
$ic:1}
W.aQ.prototype={$iaQ:1}
W.dz.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.dA.prototype={
gk:function(a){return a.length}}
W.dC.prototype={
gk:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.ht.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.bd.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.bg.prototype={$ibg:1}
W.hI.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.hZ.prototype={
gk:function(a){return a.length}}
W.dS.prototype={
h:function(a,b){return P.b7(a.get(b))},
B:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b7(s.value[1]))}},
gaH:function(a){var s=[]
this.B(a,new W.i_(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$ia_:1}
W.i_.prototype={
$2:function(a,b){return this.a.push(a)},
$S:7}
W.dT.prototype={
h:function(a,b){return P.b7(a.get(b))},
B:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b7(s.value[1]))}},
gaH:function(a){var s=[]
this.B(a,new W.i0(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$ia_:1}
W.i0.prototype={
$2:function(a,b){return this.a.push(a)},
$S:7}
W.aU.prototype={$iaU:1}
W.dU.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.ab.prototype={$iab:1}
W.eT.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gU:function(a){var s=this.a.childNodes
return new W.cj(s,s.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.v.prototype={
hJ:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.ls(s,b,a)}catch(q){H.fT(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ec(a):s},
fH:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iv:1}
W.cC.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.aW.prototype={
gk:function(a){return a.length},
$iaW:1}
W.e6.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.ea.prototype={
h:function(a,b){return P.b7(a.get(b))},
B:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b7(s.value[1]))}},
gaH:function(a){var s=[]
this.B(a,new W.i9(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$ia_:1}
W.i9.prototype={
$2:function(a,b){return this.a.push(a)},
$S:7}
W.ec.prototype={
gk:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.ef.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.aY.prototype={$iaY:1}
W.eg.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.aZ.prototype={
gk:function(a){return a.length},
$iaZ:1}
W.ek.prototype={
h:function(a,b){return a.getItem(H.mC(b))},
B:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaH:function(a){var s=[]
this.B(a,new W.ih(s))
return s},
gk:function(a){var s=a.length
s.toString
return s},
$ia_:1}
W.ih.prototype={
$2:function(a,b){return this.a.push(a)},
$S:29}
W.au.prototype={$iau:1}
W.aF.prototype={$iaF:1}
W.ao.prototype={$iao:1}
W.eo.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.ep.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.io.prototype={
gk:function(a){var s=a.length
s.toString
return s}}
W.b_.prototype={$ib_:1}
W.bo.prototype={$ibo:1}
W.et.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.ir.prototype={
gk:function(a){return a.length}}
W.aH.prototype={}
W.iE.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eN.prototype={
gk:function(a){return a.length}}
W.b3.prototype={
ghh:function(a){var s=a.deltaY
if(s!=null)return s
throw H.b(P.x("deltaY is not supported"))},
ghg:function(a){var s=a.deltaX
if(s!=null)return s
throw H.b(P.x("deltaX is not supported"))},
$ib3:1}
W.bS.prototype={
fJ:function(a,b){var s=a.requestAnimationFrame(H.dg(b,1))
s.toString
return s},
eC:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eV.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.cS.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.u(r)+", "
s=a.top
s.toString
s=r+H.u(s)+") "
r=a.width
r.toString
r=s+H.u(r)+" x "
s=a.height
s.toString
return r+H.u(s)},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bZ(b)
if(s===r.gbw(b)){s=a.top
s.toString
if(s===r.gbz(b)){s=a.width
s.toString
if(s===r.gaL(b)){s=a.height
s.toString
r=s===r.gaG(b)
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
return W.kC(p,s,r,C.c.gG(q))},
gcW:function(a){return a.height},
gaG:function(a){var s=a.height
s.toString
return s},
gd9:function(a){return a.width},
gaL:function(a){var s=a.width
s.toString
return s}}
W.f7.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.cW.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.fq.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.fx.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$ir:1,
$ih:1,
$im:1}
W.jx.prototype={}
W.f2.prototype={}
W.iS.prototype={
$1:function(a){return this.a.$1(a)},
$S:5}
W.jL.prototype={}
W.H.prototype={
gU:function(a){return new W.cj(a,this.gk(a))}}
W.cj.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lr(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gH:function(a){return H.U(this).c.a(this.d)}}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fn.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fu.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fP.prototype={}
P.j4.prototype={
$1:function(a){this.a.push(P.kO(a))},
$S:28}
P.ja.prototype={
$2:function(a,b){this.a[a]=P.kO(b)},
$S:27}
P.dB.prototype={
gb8:function(){return new H.bi(new H.cR(this.b,new P.ho()),new P.hp())},
B:function(a,b){C.a.B(P.hH(this.gb8(),!1),b)},
l:function(a,b,c){var s=this.gb8()
J.lw(s.b.$1(J.jt(s.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b).toString},
gk:function(a){return J.bw(this.gb8().a)},
h:function(a,b){var s=this.gb8()
return s.b.$1(J.jt(s.a,b))},
gU:function(a){var s=P.hH(this.gb8(),!1)
return new J.a7(s,s.length)}}
P.ho.prototype={
$1:function(a){return t.h.b(a)},
$S:26}
P.hp.prototype={
$1:function(a){return t.h.a(a)},
$S:24}
P.fm.prototype={
gbx:function(a){return this.$ti.c.a(this.a+this.c)},
gdj:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
n:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bZ(b)
if(s===r.gbw(b)){q=o.b
if(q===r.gbz(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbx(b)&&p.a(q+o.d)===r.gdj(b)}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s=this,r=s.a,q=C.b.gG(r),p=s.b,o=C.b.gG(p),n=s.$ti.c
r=C.b.gG(n.a(r+s.c))
p=C.b.gG(n.a(p+s.d))
return H.m9(H.ii(H.ii(H.ii(H.ii(0,q),o),r),p))}}
P.ac.prototype={
gbw:function(a){return this.a},
gbz:function(a){return this.b},
gaL:function(a){return this.c},
gaG:function(a){return this.d}}
P.bh.prototype={$ibh:1}
P.dN.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bk.prototype={$ibk:1}
P.e1.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.i4.prototype={
gk:function(a){return a.length}}
P.en.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gdl:function(a){return new P.dB(a,new W.eT(a))}}
P.bp.prototype={$ibp:1}
P.eu.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fa.prototype={}
P.fb.prototype={}
P.fi.prototype={}
P.fj.prototype={}
P.fv.prototype={}
P.fw.prototype={}
P.fC.prototype={}
P.fD.prototype={}
P.h0.prototype={
gk:function(a){return a.length}}
P.dn.prototype={
h:function(a,b){return P.b7(a.get(b))},
B:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b7(s.value[1]))}},
gaH:function(a){var s=[]
this.B(a,new P.h1(s))
return s},
gk:function(a){var s=a.size
s.toString
return s},
$ia_:1}
P.h1.prototype={
$2:function(a,b){return this.a.push(a)},
$S:7}
P.dp.prototype={
gk:function(a){return a.length}}
P.aP.prototype={}
P.e2.prototype={
gk:function(a){return a.length}}
P.eS.prototype={}
P.cH.prototype={$icH:1}
P.eh.prototype={
gk:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.I(b,a,null,null,null))
s=P.b7(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fr.prototype={}
P.fs.prototype={}
K.fX.prototype={
aY:function(a,b){return!0},
i:function(a){return"all"}}
K.dD.prototype={
aY:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aY(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aV.prototype={
aY:function(a,b){return!this.eb(0,b)},
i:function(a){return"!["+this.bB(0)+"]"}}
K.X.prototype={
Z:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.e("May not create a Set with zero characters."))
s=new H.W(t.d)
for(r=new H.bD(a,a.gk(a)),q=H.U(r).c;r.u();)s.l(0,q.a(r.d),!0)
p=P.hH(new H.aT(s),!0)
C.a.ea(p)
this.a=p},
aY:function(a,b){return C.a.O(this.a,b)},
i:function(a){return P.jF(this.a)}}
L.ei.prototype={
t:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.is(this.a.K(0,b),[])
s.push(p)
return p},
hk:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aY(0,a))return p}return null},
i:function(a){return this.b},
d7:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.O(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.aT(s.c)
s=J.aO(s==null?[]:s)
for(;s.u();){r=s.gH(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.O(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bB(0))}return m.charCodeAt(0)==0?m:m}}
L.er.prototype={
i:function(a){var s=H.l7(this.b,"\n","\\n"),r=H.l7(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.es.prototype={
i:function(a){return this.b}}
L.ip.prototype={
K:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.ei(this,b,[])
s.l(0,b,r)}return r},
bl:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.es(a,P.P(s,s))
r.l(0,a,q)}return q},
e3:function(a){return this.hP(a)},
hP:function(a){var s=this
return P.mU(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$e3(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.U(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a0.length!==0)h=C.a.cq(a0,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}b.push(h);++k
g=d==null
f=g?null:d.hk(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.jF(b)
throw H.b(P.e("Untokenizable string [state: "+H.u(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.x("removeRange"))
P.jE(0,i,b.length)
b.splice(0,i-0)
C.a.br(a0,b)
b=[]
c=[]
d=s.d
q=!m.O(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)c.push(h)
d=f.b
g=d.d
if(g!=null){e=P.jF(c)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.er(g,e,k)
l=g}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.O(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mi()
case 1:return P.mj(o)}}},t.l)},
i:function(a){var s,r,q=new P.bn(""),p=this.d
if(p!=null)q.a=""+(p.d7()+"\n")
for(p=this.a,p=p.ghQ(p),p=new H.ct(J.aO(p.a),p.b),s=H.U(p).Q[1];p.u();){r=s.a(p.a)
if(r!=this.d)q.a+=H.u(r==null?null:r.d7())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.is.prototype={
i:function(a){return this.b.b+": "+this.bB(0)}}
O.bz.prototype={
cB:function(a,b,c){this.b=b
this.c=a},
b2:function(a,b){return this.cB(a,null,b)},
d0:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cY:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gk:function(a){return this.a.length},
gU:function(a){var s=this.a
return new J.a7(s,s.length)},
F:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
j:function(a,b){var s,r
if(this.d0([b])){s=this.a
r=s.length
s.push(b)
this.cY(r,[b])}},
br:function(a,b){var s,r
if(this.d0(b)){s=this.a
r=s.length
C.a.br(s,b)
this.cY(r,b)}},
$ih:1}
O.cx.prototype={
gk:function(a){return this.a.length},
gq:function(){var s=this.b
return s==null?this.b=D.G():s},
aN:function(){var s=this.b
return s==null?null:s.C(null)},
gL:function(a){var s=this.a
if(s.length>0)return C.a.gcj(s)
else return V.aj()},
dZ:function(a){this.a.push(a)
this.aN()},
cp:function(){var s=this.a
if(s.length>0){s.pop()
this.aN()}}}
E.h2.prototype={}
E.bA.prototype={
cP:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.a7(s,s.length),r=H.U(s).c;s.u();){q=r.a(s.d)
if(q.f==null)q.cP()}},
sa6:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().A(0,s.gdT())
if(b!=null)b.gq().j(0,s.gdT())
s.ar(new D.w("shape",r,b))}},
sae:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gq().A(0,s.gdV())
if(a!=null)a.gq().j(0,s.gdV())
s.cP()
s.ar(new D.w("technique",r,a))}},
sX:function(a){var s,r,q=this
if(!J.z(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gq().A(0,q.gdR())
if(a!=null)a.gq().j(0,q.gdR())
r=q.r
q.ar(new D.w("mover",s,r))}},
ai:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.b0(0,b,q)
if(!J.z(o,q.x)){s=q.x
q.x=o
q.ar(new D.w("matrix",s,o))}p=q.f
if(p!=null)p.ai(0,b)
for(p=q.y.a,p=new J.a7(p,p.length),r=H.U(p).c;p.u();)r.a(p.d).ai(0,b)},
at:function(a){var s,r,q,p,o=this
if(!o.b)return
s=a.dx
r=o.x
q=s.a
if(r==null)q.push(s.gL(s))
else q.push(r.w(0,s.gL(s)))
s.aN()
a.e_(o.f)
p=C.a.gcj(a.dy)
if(o.d!=null)if(p!=null)p.e0(a,o)
for(r=o.y.a,r=new J.a7(r,r.length),q=H.U(r).c;r.u();)q.a(r.d).at(a)
a.dX()
s.cp()},
ar:function(a){var s=this.z
return s==null?null:s.C(a)},
M:function(){return this.ar(null)},
dU:function(a){this.e=null
this.ar(a)},
hx:function(){return this.dU(null)},
dW:function(a){return this.ar(a)},
hy:function(){return this.dW(null)},
dS:function(a){return this.ar(a)},
hw:function(){return this.dS(null)},
dQ:function(a){return this.ar(a)},
ht:function(){return this.dQ(null)},
hs:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdP(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.ch()
n=o.a;(n==null?o.a=[]:n).push(r)}this.M()},
hv:function(a,b){var s,r
for(s=b.gU(b),r=this.gdP();s.u();)s.gH(s).gq().A(0,r)
this.M()},
i:function(a){return"Unnamed entity"}}
E.bx.prototype={
i:function(a){return this.b}}
E.bK.prototype={
i:function(a){return this.b}}
E.f0.prototype={}
E.i5.prototype={
eg:function(a,b){var s=this
s.cy.gq().j(0,new E.i6(s))
s.db.gq().j(0,new E.i7(s))
s.dx.gq().j(0,new E.i8(s))},
ghG:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gL(q).w(0,s.gL(s))
q=s}return q},
gdY:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.ghG().w(0,r.gL(r))}return r},
ge4:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
s=r.dx
s=r.cx=q.gL(q).w(0,s.gL(s))
q=s}return q},
e_:function(a){var s=this.dy
return s.push(a==null?C.a.gcj(s):a)},
dX:function(){var s=this.dy
if(s.length>1)s.pop()},
de:function(a){var s,r=a.b
if(r.length===0)throw H.b(P.e("May not cache a shader with no name."))
s=this.fr
if(s.hd(0,r))throw H.b(P.e('Shader cache already contains a shader by the name "'+r+'".'))
s.l(0,r,a)}}
E.i6.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:0}
E.i7.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:0}
E.i8.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:0}
E.eq.prototype={
cK:function(a){this.e1()},
cJ:function(){return this.cK(null)},
sbA:function(a){var s=this,r=s.d
if(r!==a){if(r!=null)r.gq().A(0,s.gcI())
s.d=a
a.gq().j(0,s.gcI())
s.cJ()}},
d4:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.c.dH(r*o)
r=s.clientHeight
r.toString
p=C.c.dH(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kq(C.i,this.ghK())}},
e1:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.t.eC(s)
r=W.kT(new E.im(this),t.H)
r.toString
C.t.fJ(s,r)}},
hI:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d4()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Z(p,!1)
q.y=1000*(p-q.r.a)*0.000001
p=q.cy
C.a.sk(p.a,0)
p.aN()
p=q.db
C.a.sk(p.a,0)
p.aN()
p=q.dx
C.a.sk(p.a,0)
p.aN()
p=q.dy
C.a.sk(p,0)
p.push(null)
m.at(q)}}catch(o){s=H.fT(o)
r=H.jZ(o)
P.l3("Error: "+H.u(s))
P.l3("Stack: "+H.u(r))
throw H.b(s)}}}
E.im.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hI()}},
$S:48}
Z.eO.prototype={}
Z.c4.prototype={
aw:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fT(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.u(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.eP.prototype={}
Z.c5.prototype={
aj:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
aw:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].aw(a)}},
cw:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
at:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
hz:function(a){this.aw(a)
this.at(a)
this.cw(a)},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cF(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(m,", ")+"\nAttrs:   "+C.a.t(o,", ")}}
Z.dr.prototype={}
Z.ck.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cF(this.c)+"'")+"]"}}
Z.b2.prototype={
gcE:function(a){var s=this.a,r=(s&$.aN().a)!==0?3:0
if((s&$.aM().a)!==0)r+=3
if((s&$.aL().a)!==0)r+=3
if((s&$.bu().a)!==0)r+=2
if((s&$.bv().a)!==0)r+=3
if((s&$.c0().a)!==0)r+=3
if((s&$.dj().a)!==0)r+=4
if((s&$.c1().a)!==0)++r
return(s&$.b8().a)!==0?r+4:r},
h7:function(a){var s,r=$.aN(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aM()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aL()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bu()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c1()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b8()
if((q&r.a)!==0)if(s===a)return r
return $.lp()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aN().a)!==0)s.push("Pos")
if((r&$.aM().a)!==0)s.push("Norm")
if((r&$.aL().a)!==0)s.push("Binm")
if((r&$.bu().a)!==0)s.push("Txt2D")
if((r&$.bv().a)!==0)s.push("TxtCube")
if((r&$.c0().a)!==0)s.push("Clr3")
if((r&$.dj().a)!==0)s.push("Clr4")
if((r&$.c1().a)!==0)s.push("Weight")
if((r&$.b8().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.t(s,"|")}}
D.h4.prototype={}
D.ch.prototype={
j:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
A:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.O(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.A(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.O(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.A(p,b)
s=p===!0||s}return s},
C:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.S():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.B(P.hH(p,!0),new D.hl(s))
r=q.b
if(r!=null){q.b=[]
C.a.B(r,new D.hm(s))}return!0},
az:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.C(s)}}}}
D.hl.prototype={
$1:function(a){var s=this.a
if(s.b)a.$1(s)},
$S:20}
D.hm.prototype={
$1:function(a){var s=this.a
if(s.b)a.$1(s)},
$S:20}
D.S.prototype={}
D.az.prototype={}
D.aA.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.u(this.d)+" => "+H.u(this.e)}}
X.c6.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c6))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dL.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dL))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hC.prototype={}
X.cr.prototype={}
X.hJ.prototype={
b7:function(a,b){var s,r=this,q=Date.now(),p=r.x.P(0,new V.D(b.a,b.b)),o=r.a.gaV(),n=$.T
if(n==null)n=$.T=new V.D(0,0)
s=r.x
r.z=new P.Z(q,!1)
r.x=p
return new X.bH(a,n,s,o,p)},
co:function(a,b){this.r=a.a
return!1},
bk:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bj:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.b7(a,b))
return!0},
hD:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaV()
r=this.x
Date.now()
q.C(new X.bI(new V.a0(a.a,a.b),s,r))
return!0},
f8:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.C(new X.cr(c,q.a.gaV(),b))
q.y=new P.Z(s,!1)
s=$.T
q.x=s==null?$.T=new V.D(0,0):s}}
X.a2.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a2))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.t(s,"+")}}
X.bH.prototype={}
X.i1.prototype={
bK:function(a,b,c){var s=this,r=new P.Z(Date.now(),!1),q=s.a.gaV(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bH(a,p,o,q,b)},
co:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.C(this.bK(a,b,!0))
return!0},
bk:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.C(r.bK(a,b,!0))
return!0},
bj:function(a,b){var s=this.d
if(s==null)return!1
s.C(this.bK(a,b,!1))
return!0},
hE:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaV()
Date.now()
r.C(new X.bI(new V.a0(a.a,a.b),s,b))
return!0},
gbg:function(){var s=this.b
return s==null?this.b=D.G():s},
gaK:function(){var s=this.c
return s==null?this.c=D.G():s},
gbi:function(){var s=this.d
return s==null?this.d=D.G():s}}
X.bI.prototype={}
X.e7.prototype={}
X.cM.prototype={}
X.iq.prototype={
b7:function(a,b){var s,r,q,p,o=this,n=new P.Z(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.T
if(r==null){r=new V.D(0,0)
$.T=r
s=r}else s=r}r=o.a.gaV()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cM(q,p,r,s)},
hC:function(a){var s=this.b
if(s==null)return!1
s.C(this.b7(a,!0))
return!0},
hA:function(a){var s=this.c
if(s==null)return!1
s.C(this.b7(a,!0))
return!0},
hB:function(a){var s=this.d
if(s==null)return!1
s.C(this.b7(a,!1))
return!0}}
X.eL.prototype={
gaX:function(a){var s=this.b
return s==null?this.b=new X.hC(new X.a2(!1,!1,!1),P.kc(t.S)):s},
gS:function(){var s,r=this.c
if(r==null){r=$.T
if(r==null){r=$.T=new V.D(0,0)
s=r}else s=r
r=this.c=new X.i1(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gak:function(){var s=this.d
if(s==null){s=$.T
if(s==null)s=$.T=new V.D(0,0)
s=this.d=new X.hJ(this,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return s},
gb_:function(){var s,r=this.e
if(r==null){r=$.T
if(r==null){r=$.T=new V.D(0,0)
s=r}else s=r
r=this.e=new X.iq(this,r,s,new P.Z(Date.now(),!1),new P.Z(Date.now(),!1))}return r},
gaV:function(){var s=this.a
return V.kj(0,0,C.h.gdm(s).c,C.h.gdm(s).d)},
cT:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dL(p,new X.a2(s,r,q))},
aS:function(a){var s,r,q=this.gaX(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a2(p,s,r)},
c_:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaX(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a2(s,r===!0,q===!0)},
aE:function(a){var s,r,q,p
if(a==null){s=$.T
return s==null?$.T=new V.D(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.D(r-p,q-s)},
b9:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a0(r,s)},
bU:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.c.au(n)
m=o.pageY
m.toString
C.c.au(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.c.au(l)
l=o.pageY
l.toString
l=C.c.au(l)
k=j.top
k.toString
s.push(new V.D(n-m,l-k))}return s},
aB:function(a){var s,r,q,p
if(a==null)return new X.c6(0,new X.a2(!1,!1,!1))
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
return new X.c6(s,new X.a2(r,q,p))},
bL:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
f2:function(a){return this.f=!0},
eR:function(a){return this.f=!1},
eX:function(a){if(this.f&&this.bL(a))a.preventDefault()},
f6:function(a){var s,r,q=this
if(!q.f)return
s=q.cT(a)
r=q.gaX(q)
r.c=s.b
r.d.j(0,s.a)},
f4:function(a){var s,r,q=this
if(!q.f)return
s=q.cT(a)
r=q.gaX(q)
r.c=s.b
r.d.A(0,s.a)},
fa:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aS(a)
if(p.x){s=p.aB(a)
r=p.b9(a)
if(p.gak().co(s,r))a.preventDefault()
return}s=p.aB(a)
q=p.aE(a)
if(p.gS().co(s,q))a.preventDefault()},
fe:function(a){var s,r,q,p=this
p.aS(a)
s=p.aB(a)
if(p.x){r=p.b9(a)
if(p.gak().bk(s,r))a.preventDefault()
return}q=p.aE(a)
if(p.gS().bk(s,q))a.preventDefault()},
f0:function(a){var s,r,q,p=this
if(!p.bL(a)){p.aS(a)
s=p.aB(a)
if(p.x){r=p.b9(a)
if(p.gak().bk(s,r))a.preventDefault()
return}q=p.aE(a)
if(p.gS().bk(s,q))a.preventDefault()}},
fc:function(a){var s,r,q,p=this
p.aS(a)
s=p.aB(a)
if(p.x){r=p.b9(a)
if(p.gak().bj(s,r))a.preventDefault()
return}q=p.aE(a)
if(p.gS().bj(s,q))a.preventDefault()},
eZ:function(a){var s,r,q,p=this
if(!p.bL(a)){p.aS(a)
s=p.aB(a)
if(p.x){r=p.b9(a)
if(p.gak().bj(s,r))a.preventDefault()
return}q=p.aE(a)
if(p.gS().bj(s,q))a.preventDefault()}},
fg:function(a){var s,r,q=this
q.aS(a)
s=new V.a0(C.r.ghg(a),C.r.ghh(a)).w(0,q.Q)
if(q.x){if(q.gak().hD(s))a.preventDefault()
return}r=q.aE(a)
if(q.gS().hE(s,r))a.preventDefault()},
fi:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aB(q.y)
r=q.aE(q.y)
q.gak().f8(s,r,p)}},
fB:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c_(a)
s=r.bU(a)
if(r.gb_().hC(s))a.preventDefault()},
fv:function(a){var s
this.c_(a)
s=this.bU(a)
if(this.gb_().hA(s))a.preventDefault()},
fz:function(a){var s
this.c_(a)
s=this.bU(a)
if(this.gb_().hB(s))a.preventDefault()}}
D.cp.prototype={
gq:function(){var s=this.y
return s==null?this.y=D.G():s},
gdN:function(){var s=this.z
return s==null?this.z=D.G():s},
cL:function(a){var s=this.y
return s==null?null:s.C(a)},
d_:function(a){var s=this.z
return s==null?null:s.C(a)},
f7:function(){return this.d_(null)},
fk:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.ex(a[r]))return!1
return!0},
eL:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gcZ(),q=this.e,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
o.gq().j(0,r)}this.cL(new D.az())},
fo:function(a,b){var s,r,q,p
for(s=b.gU(b),r=this.gcZ(),q=this.e;s.u();){p=s.gH(s)
C.a.A(q,p)
p.gq().A(0,r)}this.cL(new D.aA())},
ex:function(a){var s=C.a.O(this.e,a)
return s}}
V.O.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
V.K.prototype={
cv:function(a){var s=this
return[s.a,s.b,s.c,s.d]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.K))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"}}
V.hj.prototype={}
V.cw.prototype={
a3:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cw))return!1
s=b.a
$.y().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bY([o.a,o.d,o.r],3,0),m=V.bY([o.b,o.e,o.x],3,0),l=V.bY([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.d(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.d(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.d(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.d(n,1)
p=" "+n[1]+", "
if(1>=r)return H.d(m,1)
p=p+m[1]+", "
if(1>=q)return H.d(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.d(n,2)
k=" "+n[2]+", "
if(2>=r)return H.d(m,2)
k=k+m[2]+", "
if(2>=q)return H.d(l,2)
return p+(k+l[2]+"]")}}
V.bF.prototype={
a3:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
dK:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.y().toString
if(Math.abs(b3-0)<1e-9)return V.aj()
s=1/b3
r=-l
q=-a2
return V.aC((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
w:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aC(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bm:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.J(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bF))return!1
s=b.a
$.y().toString
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
i:function(a){return this.v()},
D:function(a){var s,r,q,p,o,n=this,m=V.bY([n.a,n.e,n.y,n.cx],3,0),l=V.bY([n.b,n.f,n.z,n.cy],3,0),k=V.bY([n.c,n.r,n.Q,n.db],3,0),j=V.bY([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.d(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.d(m,1)
o=o+m[1]+", "
if(1>=r)return H.d(l,1)
o=o+l[1]+", "
if(1>=q)return H.d(k,1)
o=o+k[1]+", "
if(1>=p)return H.d(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.d(m,2)
s=s+m[2]+", "
if(2>=r)return H.d(l,2)
s=s+l[2]+", "
if(2>=q)return H.d(k,2)
s=s+k[2]+", "
if(2>=p)return H.d(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.d(m,3)
o=o+m[3]+", "
if(3>=r)return H.d(l,3)
o=o+l[3]+", "
if(3>=q)return H.d(k,3)
o=o+k[3]+", "
if(3>=p)return H.d(j,3)
return s+(o+j[3]+"]")},
v:function(){return this.D("")}}
V.D.prototype={
a5:function(a){return new V.a0(a.a-this.a,a.b-this.b)},
P:function(a,b){return new V.D(this.a+b.a,this.b+b.b)},
T:function(a,b){var s
$.y().toString
if(Math.abs(b-0)<1e-9){s=$.T
return s==null?$.T=new V.D(0,0):s}return new V.D(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+"]"},
v:function(){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+"]"}}
V.J.prototype={
P:function(a,b){return new V.J(this.a+b.a,this.b+b.b,this.c+b.c)},
b5:function(a,b){return new V.J(this.a-b.a,this.b-b.b,this.c-b.c)},
T:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.kg()
return new V.J(this.a/b,this.b/b,this.c/b)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.J))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"},
v:function(){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
V.al.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.al))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"}}
V.e9.prototype={
gad:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e9))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"}}
V.a0.prototype={
bh:function(a){return Math.sqrt(this.a9(this))},
a9:function(a){return this.a*a.a+this.b*a.b},
w:function(a,b){return new V.a0(this.a*b,this.b*b)},
T:function(a,b){var s
$.y().toString
if(Math.abs(b-0)<1e-9){s=$.bq
return s==null?$.bq=new V.a0(0,0):s}return new V.a0(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+"]"}}
V.q.prototype={
bh:function(a){return Math.sqrt(this.a9(this))},
a9:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ck:function(a,b){return new V.q(V.k0(this.a,a.a,b),V.k0(this.b,a.b,b),V.k0(this.c,a.c,b))},
E:function(){var s=this,r=Math.sqrt(s.a9(s))
if(r===1)return s
return s.T(0,r)},
be:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.q(s*r-q*p,q*o-n*r,n*p-s*o)},
P:function(a,b){return new V.q(this.a+b.a,this.b+b.b,this.c+b.c)},
b1:function(a){return new V.q(-this.a,-this.b,-this.c)},
w:function(a,b){return new V.q(this.a*b,this.b*b,this.c*b)},
T:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.bR()
return new V.q(this.a/b,this.b/b,this.c/b)},
dM:function(){$.y().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.q))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"},
v:function(){return"["+V.t(this.a,3,0)+", "+V.t(this.b,3,0)+", "+V.t(this.c,3,0)+"]"}}
V.b0.prototype={
bh:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
T:function(a,b){var s=this
$.y().toString
if(Math.abs(b-0)<1e-9)return V.md()
return new V.b0(s.a/b,s.b/b,s.c/b,s.d/b)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b0))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.t(s.a,3,0)+", "+V.t(s.b,3,0)+", "+V.t(s.c,3,0)+", "+V.t(s.d,3,0)+"]"}}
U.h5.prototype={
bE:function(a){var s=V.nT(a,this.c,this.b)
return s},
gq:function(){var s=this.y
return s==null?this.y=D.G():s},
N:function(a){var s=this.y
return s==null?null:s.C(a)},
scz:function(a,b){},
scl:function(a){var s,r=this,q=r.b
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bE(s)}r.N(new D.w("maximumLocation",q,r.b))}},
scn:function(a){var s,r=this,q=r.c
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bE(s)}r.N(new D.w("minimumLocation",q,r.c))}},
sa2:function(a,b){var s,r=this
b=r.bE(b)
s=r.d
$.y().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.N(new D.w("location",s,b))}},
scm:function(a){var s,r,q=this,p=q.e
$.y().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.N(new D.w("maximumVelocity",p,a))}},
sa0:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.N(new D.w("velocity",r,a))}},
sc9:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.y().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.N(new D.w("dampening",s,a))}},
ai:function(a,b){var s,r,q,p=this,o=p.f
$.y().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa2(0,p.d+s*b)
o=p.x
$.y().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sa0(s)}}}
U.c9.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.G():s},
sL:function(a,b){var s,r,q=this
if(b==null)b=V.aj()
if(!q.a.n(0,b)){s=q.a
q.a=b
r=q.b
if(r!=null)r.C(new D.w("matrix",s,b))}},
b0:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c9))return!1
return this.a.n(0,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bB.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.G():s},
N:function(a){var s=this.e
return s==null?null:s.C(a)},
ac:function(){return this.N(null)},
ei:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaR(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gq()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.N(new D.az())},
fm:function(a,b){var s,r
for(s=b.gU(b),r=this.gaR();s.u();)s.gH(s).gq().A(0,r)
this.N(new D.aA())},
b0:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a7(o,o.length),n=H.U(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.b0(0,b,c)
s=s==null?q:q.w(0,s)}}p.f=s==null?V.aj():s
o=p.e
if(o!=null)o.az(0)}return p.f},
n:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bB))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.z(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia3:1}
U.a3.prototype={}
U.cO.prototype={
gq:function(){var s=this.cy
return s==null?this.cy=D.G():s},
N:function(a){var s=this.cy
return s==null?null:s.C(a)},
ac:function(){return this.N(null)},
bd:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gS().gbg().j(0,s.gbM())
a.gS().gbi().j(0,s.gbO())
a.gS().gaK().j(0,s.gbQ())
return!0},
bN:function(a){var s=this,r=s.c,q=s.a
if(!r.n(0,q==null?null:q.gaX(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bP:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a5(a.d)
if(s.a9(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa2(0,-a.y.a5(r).w(0,2).T(0,s.gad()).a*2.5+p.z)
q.sa0(0)
p.Q=a.z.a5(r).w(0,2).T(0,s.gad())
p.ac()},
bR:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a9(s)>0.0001){r.b.sa0(r.Q.a*10*2.5)
r.ac()}},
b0:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.ai(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aC(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia3:1}
U.cP.prototype={
gq:function(){var s=this.fx
return s==null?this.fx=D.G():s},
N:function(a){var s=this.fx
return s==null?null:s.C(a)},
ac:function(){return this.N(null)},
bd:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gS().gbg().j(0,q.gbM())
a.gS().gbi().j(0,q.gbO())
a.gS().gaK().j(0,q.gbQ())
s=a.gak()
r=s.f
s=r==null?s.f=D.G():r
s.j(0,q.geE())
s=a.gak()
r=s.d
s=r==null?s.d=D.G():r
s.j(0,q.geG())
s=a.gb_()
r=s.b
s=r==null?s.b=D.G():r
s.j(0,q.gfY())
s=a.gb_()
r=s.d
s=r==null?s.d=D.G():r
s.j(0,q.gfW())
s=a.gb_()
r=s.c
s=r==null?s.c=D.G():r
s.j(0,q.gfU())
return!0},
aQ:function(a){var s=a.b
if(this.r)s=-s
return new V.a0(a.a,s)},
bN:function(a){var s=this
t.Z.a(a)
if(!s.d.n(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bP:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a5(a.d)
if(s.a9(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aQ(a.y.a5(r).w(0,2).T(0,s.gad()))
p=n.c
p.sa2(0,-q.a*2.5+n.cy)
o=n.b
o.sa2(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aQ(a.z.a5(r).w(0,2).T(0,s.gad()))
n.ac()},
bR:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a9(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.ac()}},
eF:function(a){var s=this
if(t.D.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eH:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.n(0,a.x.b))return
s=a.c
r=a.d
q=n.aQ(a.y.a5(r).w(0,2).T(0,s.gad()))
p=n.c
p.sa2(0,-q.a*2.5+n.cy)
o=n.b
o.sa2(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aQ(a.z.a5(r).w(0,2).T(0,s.gad()))
n.ac()},
fZ:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fX:function(a){var s,r,q,p,o,n=this
t.m.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a5(a.d)
if(s.a9(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aQ(a.y.a5(r).w(0,2).T(0,s.gad()))
p=n.c
p.sa2(0,-q.a*2.5+n.cy)
o=n.b
o.sa2(0,-q.b*2.5+n.db)
o.sa0(0)
p.sa0(0)
n.dx=n.aQ(a.z.a5(r).w(0,2).T(0,s.gad()))
n.ac()},
fV:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a9(s)>0.0001){r.c.sa0(-r.dx.a*10*2.5)
r.b.sa0(-r.dx.b*10*2.5)
r.ac()}},
b0:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.ai(0,s)
p=r.b
p.ai(0,s)
r.fr=V.cy(p.d).w(0,V.jD(q.d))}return r.fr},
$ia3:1}
U.cQ.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.G():s},
N:function(a){var s=this.r
return s==null?null:s.C(a)},
bd:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gS()
r=s.e
s=r==null?s.e=D.G():r
r=this.geI()
s.j(0,r)
s=a.gak()
q=s.e;(q==null?s.e=D.G():q).j(0,r)
return!0},
eJ:function(a){var s=this,r=s.b,q=s.a
if(!r.n(0,q==null?null:q.gaX(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.N(new D.w("zoom",r,q))}},
b0:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.bG(s,s,s,1)}return r.f},
$ia3:1}
M.c8.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.G():s},
ab:function(a){var s=this.r
return s==null?null:s.C(a)},
bD:function(){return this.ab(null)},
fq:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gaf(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q].gq()
o=p.a;(o==null?p.a=[]:o).push(r)}this.ab(new D.az())},
ft:function(a,b){var s,r
for(s=b.gU(b),r=this.gaf();s.u();)s.gH(s).gq().A(0,r)
this.ab(new D.aA())},
at:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a7(s,s.length),r=H.U(s).c;s.u();)r.a(s.d).at(a)
q.f=!1},
$icI:1}
M.cf.prototype={
ab:function(a){var s=this.y
return s==null?null:s.C(a)},
bD:function(){return this.ab(null)},
eT:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaf(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.ch()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ab(new D.az())},
eV:function(a,b){var s,r
for(s=b.gU(b),r=this.gaf();s.u();)s.gH(s).gq().A(0,r)
this.ab(new D.aA())},
saF:function(a){var s,r,q=this
if(a==null)a=X.bL()
s=q.b
if(s!==a){if(s!=null)s.gq().A(0,q.gaf())
r=q.b
q.b=a
a.gq().j(0,q.gaf())
q.ab(new D.w("camera",r,q.b))}},
sby:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gq().A(0,r.gaf())
s=r.c
r.c=b
b.gq().j(0,r.gaf())
r.ab(new D.w("target",s,r.c))}},
sae:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gq().A(0,r.gaf())
s=r.d
r.d=a
if(a!=null)a.gq().j(0,r.gaf())
r.ab(new D.w("technique",s,r.d))}},
gq:function(){var s=this.y
return s==null?this.y=D.G():s},
at:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
a.e_(b.d)
s=b.c
if(s!=null){r=a.a
r.bindFramebuffer(36160,null)
r.enable(2884)
r.enable(2929)
r.depthFunc(513)
q=r.drawingBufferWidth
if(q==null)q=512
p=r.drawingBufferHeight
if(p==null)p=512
o=s.r
n=C.c.au(o.a*q)
m=C.c.au(o.b*p)
l=C.c.au(o.c*q)
a.c=l
o=C.c.au(o.d*p)
a.d=o
r.viewport(n,m,l,o)
r.clearDepth(2000)
if(s.b){s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
k=16640}else k=256
if(k>0)r.clear(k)}s=b.b
if(s!=null){r=a.c
o=a.d
l=s.c
j=s.d
i=s.e
h=i-j
g=1/Math.tan(l*0.5)
f=V.aC(-g/(r/o),0,0,0,0,g,0,0,0,0,i/h,-i*j/h,0,0,1,0)
e=s.a
if(e!=null)f=e.a.w(0,f)
a.cy.dZ(f)
d=$.lc()
c=s.b
if(c!=null)d=c.a.w(0,d)
a.db.dZ(d)}s=b.d
if(s!=null)s.ai(0,a)
for(s=b.e.a,r=new J.a7(s,s.length),o=H.U(r).c;r.u();)o.a(r.d).ai(0,a)
for(s=new J.a7(s,s.length),r=H.U(s).c;s.u();)r.a(s.d).at(a)
if(b.b!=null){a.cy.cp()
a.db.cp()}a.dX()},
$icI:1}
A.fZ.prototype={}
A.h_.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hi:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dr:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.af.prototype={
ga4:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.af))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.cl.prototype={
e8:function(a,b){var s=this.cx
if(s!=null)s.cA(a)
s=this.cy
if(s!=null)s.cA(b)}}
A.cu.prototype={
ee:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.bn(""),d0=c8.fr
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
A.n8(c8,c9)
A.na(c8,c9)
A.n9(c8,c9)
A.nc(c8,c9)
A.nd(c8,c9)
A.nb(c8,c9)
A.ne(c8,c9)
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
c3.dI(0,s.charCodeAt(0)==0?s:s,A.n7(c8))
c3.y=c3.ga7(c3).h(0,"posAttr")
c3.Q=c3.ga7(c3).h(0,"normAttr")
c3.z=c3.ga7(c3).h(0,"binmAttr")
c3.ch=c3.ga7(c3).h(0,"txt2DAttr")
c3.cx=c3.ga7(c3).h(0,"txtCubeAttr")
c3.cy=c3.ga7(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gJ().V(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gJ().V(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gJ().V(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gJ().V(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gJ().V(0,"viewMat"))
if(c8.x1)c3.go=t.Q.a(c3.gJ().V(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gJ().V(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gJ().V(0,"colorMat"))
c3.k3=[]
s=c8.aW
if(s>0){c3.k2=t.v.a(c3.gJ().V(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.e(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.e(c6+q+c7))
r.push(d0.a(l))}}if(c8.a.a)c3.k4=t.g.a(c3.gJ().V(0,"emissionClr"))
if(c8.b.a)c3.rx=t.g.a(c3.gJ().V(0,"ambientClr"))
if(c8.c.a)c3.x2=t.g.a(c3.gJ().V(0,"diffuseClr"))
if(c8.d.a)c3.aW=t.g.a(c3.gJ().V(0,"invDiffuseClr"))
d0=c8.e.a
if(!d0)s=!1
else s=!0
if(s){c3.dA=t.n.a(c3.gJ().V(0,"shininess"))
if(d0)c3.dz=t.g.a(c3.gJ().V(0,"specularClr"))}if(c8.db){c3.dB=t.a.a(c3.gJ().V(0,"envSampler"))
if(c8.r.a)c3.dC=t.g.a(c3.gJ().V(0,"reflectClr"))
d0=c8.x.a
if(!d0)s=!1
else s=!0
if(s){c3.dD=t.n.a(c3.gJ().V(0,"refraction"))
if(d0)c3.dE=t.g.a(c3.gJ().V(0,"refractClr"))}}if(c8.y.a)c3.dF=t.n.a(c3.gJ().V(0,"alpha"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.ca=P.P(r,t.W)
c3.cb=P.P(r,t.I)
for(r=t.v,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.ez(l,d,c,a3,a2,a1))}c3.cb.l(0,i,g)
o=c3.ca
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.l(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.cc=P.P(r,t.W)
c3.cd=P.P(r,t.L)
for(r=t.v,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
g.push(new A.eA(a6,a5,a4,l,d,a7))}c3.cd.l(0,i,g)
o=c3.cc
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.l(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.ce=P.P(r,t.W)
c3.cf=P.P(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.eD(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.cf.l(0,i,g)
a8=c3.ce
m=c3.r
if(m==null)H.f(P.e(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.e(c6+a9+c7))
a8.l(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.cg=P.P(s,t.W)
c3.ci=P.P(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.o)(c8),++k){j=c8[k]
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
g.push(new A.eG(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.ci.l(0,i,g)
f=c3.cg
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
f.l(0,i,s.a(l))}}}},
fL:function(a,b){}}
A.b9.prototype={
i:function(a){return"barLight"+this.a}}
A.bc.prototype={
i:function(a){return"dirLight"+this.a}}
A.bl.prototype={
i:function(a){return"pointLight"+this.a}}
A.bm.prototype={
i:function(a){return"spotLight"+this.a}}
A.hN.prototype={
i:function(a){return this.bu}}
A.ez.prototype={}
A.eA.prototype={}
A.eD.prototype={}
A.eG.prototype={}
A.bN.prototype={
dI:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cU(b,35633)
r=n.cU(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaC(),s)
q.attachShader(n.gaC(),r)
q.linkProgram(n.gaC())
if(!H.kN(q.getProgramParameter(n.gaC(),35714))){o=q.getProgramInfoLog(n.gaC())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.e("Failed to link shader: "+o))}n.fN()
n.fP()},
ga7:function(a){var s=this.f
if(s==null)throw H.b(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gJ:function(){var s=this.r
if(s==null)throw H.b(P.e(u.C))
return s},
gaC:function(){var s=this.e
if(s==null)throw H.b(P.e(u.p))
return s},
aw:function(a){a.a.useProgram(this.e)
this.ga7(this).hi()},
cU:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.kN(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.b(P.e('Error compiling shader "'+H.u(q)+'": '+s))}return q},
fN:function(){var s,r,q,p,o=this,n=u.p,m=[],l=o.a,k=H.j3(l.getProgramParameter(o.gaC(),35721))
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
m.push(new A.fZ(l,q,p))}o.f=new A.h_(m)},
fP:function(){var s,r,q,p,o,n,m=this,l=u.p,k=[],j=m.a,i=H.j3(j.getProgramParameter(m.gaC(),35718))
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
k.push(m.hf(o,n,q,p))}m.r=new A.iC(k)},
aP:function(a,b,c){var s=this.a
if(a===1)return new A.cN(s,b,c)
else return A.jI(s,this.e,b,a,c)},
ez:function(a,b,c){var s=this.a
if(a===1)return new A.eE(s,b,c)
else return A.jI(s,this.e,b,a,c)},
eA:function(a,b,c){var s=this.a
if(a===1)return new A.eF(s,b,c)
else return A.jI(s,this.e,b,a,c)},
bq:function(a,b){return new P.f3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hf:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aP(b,c,d)
case 5121:return s.aP(b,c,d)
case 5122:return s.aP(b,c,d)
case 5123:return s.aP(b,c,d)
case 5124:return s.aP(b,c,d)
case 5125:return s.aP(b,c,d)
case 5126:return new A.ew(s.a,c,d)
case 35664:return new A.iy(s.a,c,d)
case 35665:return new A.ex(s.a,c,d)
case 35666:return new A.ey(s.a,c,d)
case 35667:return new A.iz(s.a,c,d)
case 35668:return new A.iA(s.a,c,d)
case 35669:return new A.iB(s.a,c,d)
case 35674:return new A.iD(s.a,c,d)
case 35675:return new A.eB(s.a,c,d)
case 35676:return new A.eC(s.a,c,d)
case 35678:return s.ez(b,c,d)
case 35680:return s.eA(b,c,d)
case 35670:throw H.b(s.bq("BOOL",c))
case 35671:throw H.b(s.bq("BOOL_VEC2",c))
case 35672:throw H.b(s.bq("BOOL_VEC3",c))
case 35673:throw H.b(s.bq("BOOL_VEC4",c))
default:throw H.b(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.iw.prototype={}
A.iC.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
V:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.v()},
v:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cN.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iz.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iA.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iB.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.ix.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.ew.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iy.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.ex.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.ey.prototype={
cA:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.iD.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eB.prototype={
aa:function(a){var s=new Float32Array(H.db(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eC.prototype={
aa:function(a){var s=new Float32Array(H.db(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eE.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.eF.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.j2.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ck(q.b,b).ck(q.d.ck(q.c,b),c)
a.sa2(0,new V.J(p.a,p.b,p.c))
a.scu(p.E())
q=1-b
s=1-c
s=new V.al(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.z(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.M()}},
$S:31}
F.jb.prototype={
$1:function(a){return 1},
$S:40}
F.ai.prototype={
aM:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.b(P.e(u.D))
if(r!==b.a||r!==c.a)throw H.b(P.e(u.R))
s.e=s.d=null
s.ba(a)
s.bb(b)
s.d6(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gI().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.M()}},
bf:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.A(r.gI().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.M()}}s.bV()
s.bW()
s.fE()},
ba:function(a){this.a=a
a.gI().b.push(this)},
bb:function(a){this.b=a
a.gI().c.push(this)},
d6:function(a){this.c=a
a.gI().d.push(this)},
bV:function(){var s=this.a
if(s!=null)C.a.A(s.gI().b,this)
this.a=null},
bW:function(){var s=this.b
if(s!=null)C.a.A(s.gI().c,this)
this.b=null},
fE:function(){var s=this.c
if(s!=null)C.a.A(s.gI().d,this)
this.c=null},
er:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.bR()
if(n!=null)q=q.P(0,n)
if(s!=null)q=q.P(0,s)
if(r!=null)q=q.P(0,r)
if(q.dM())return p
return q.E()},
ev:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b5(0,n)
q=new V.q(o.a,o.b,o.c).E()
o=r.b5(0,n)
return q.be(new V.q(o.a,o.b,o.c).E()).E()},
c5:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.er()
if(s==null){s=q.ev()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.M()}return!0},
eq:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.bR()
if(n!=null)q=q.P(0,n)
if(s!=null)q=q.P(0,s)
if(r!=null)q=q.P(0,r)
if(q.dM())return p
return q.E()},
eu:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.y().toString
if(Math.abs(p-0)<1e-9){j=b.b5(0,e)
o=new V.q(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.b1(0)}else{n=(j-s.b)/p
j=b.b5(0,e)
j=new V.J(j.a*n,j.b*n,j.c*n).P(0,e).b5(0,h)
o=new V.q(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b1(0)}m=l.d
if(m!=null){m=m.E()
o=m.be(o).E().be(m).E()}return o},
c4:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eq()
if(s==null){s=q.eu()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.M()}return!0},
aO:function(a,b){var s,r=b.a
if(r==null)throw H.b(P.e("May not replace a face's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.b(P.e("May not replace a face's vertex with a vertex attached to a different shape."))},
ghb:function(a){var s=this
if(J.z(s.a,s.b))return!0
if(J.z(s.b,s.c))return!0
if(J.z(s.c,s.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
D:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gp(p)
p=a+C.d.am(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gp(o)
p=p+C.d.am(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gp(o)
s=p+C.d.am(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.v()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.v()
return s+((p==null?"-":p)+"}")},
v:function(){return this.D("")}}
F.hn.prototype={}
F.ie.prototype={
aZ:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gp(q)
s=c.a
if(q==(s==null?r:s.gp(s))){q=b.b
q=q==null?r:q.gp(q)
s=c.b
if(q==(s==null?r:s.gp(s))){q=b.c
q=q==null?r:q.gp(q)
s=c.c
q=q==(s==null?r:s.gp(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gp(q)
s=c.b
if(q==(s==null?r:s.gp(s))){q=b.b
q=q==null?r:q.gp(q)
s=c.c
if(q==(s==null?r:s.gp(s))){q=b.c
q=q==null?r:q.gp(q)
s=c.a
q=q==(s==null?r:s.gp(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gp(q)
s=c.c
if(q==(s==null?r:s.gp(s))){q=b.b
q=q==null?r:q.gp(q)
s=c.a
if(q==(s==null?r:s.gp(s))){q=b.c
q=q==null?r:q.gp(q)
s=c.b
q=q==(s==null?r:s.gp(s))}else q=!1
return q}else return!1}}}}
F.aS.prototype={
bC:function(a,b){var s=this,r=a.a
if(r==null)throw H.b(P.e(u.E))
if(r!==b.a)throw H.b(P.e(u.T))
s.ba(a)
s.bb(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gR(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.M()}},
bf:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.a.A(r.gR(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.M()}}s.bV()
s.bW()},
ba:function(a){this.a=a
a.gR(a).b.push(this)},
bb:function(a){this.b=a
a.gR(a).c.push(this)},
bV:function(){var s=this.a
if(s!=null)C.a.A(s.gR(s).b,this)
this.a=null},
bW:function(){var s=this.b
if(s!=null)C.a.A(s.gR(s).c,this)
this.b=null},
aO:function(a,b){var s,r=b.a
if(r==null)throw H.b(P.e("May not replace a line's vertex with a vertex which is not attached to a shape."))
s=a.a
if(s!==r)throw H.b(P.e("May not replace a line's vertex with a vertex attached to a different shape."))},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
D:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gp(s)
s=a+C.d.am(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gp(r)
return s+C.d.am(C.b.i(r==null?-1:r),0)},
v:function(){return this.D("")}}
F.hE.prototype={}
F.iv.prototype={
aZ:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gp(q)
s=c.a
if(q==(s==null?r:s.gp(s))){q=b.b
q=q==null?r:q.gp(q)
s=c.b
return q==(s==null?r:s.gp(s))}else{q=b.a
q=q==null?r:q.gp(q)
s=c.b
if(q==(s==null?r:s.gp(s))){q=b.b
q=q==null?r:q.gp(q)
s=c.a
return q==(s==null?r:s.gp(s))}else return!1}}}
F.i3.prototype={
ef:function(a){var s,r=this
if(a.a==null)throw H.b(P.e("May not create a point with a vertex which is not attached to a shape."))
r.fM(a)
s=r.a
if(s!=null){s=s.a
if(s!=null)s.gas(s).b.push(r)}s=r.a
if(s!=null){s=s.a
if(s!=null)s.M()}},
fM:function(a){this.a=a
a.gas(a).b.push(this)},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
D:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gp(s)
return a+C.d.am(C.b.i(s),0)},
v:function(){return this.D("")}}
F.an.prototype={
gm:function(){var s=this.a
return s==null?this.a=new F.p(this,[]):s},
gas:function(a){var s=this.b
return s==null?this.b=new F.bO(this,[]):s},
gR:function(a){var s=this.c
return s==null?this.c=new F.cK(this,[]):s},
gI:function(){var s=this.d
return s==null?this.d=new F.cJ(this,[]):s},
gq:function(){var s=this.e
return s==null?this.e=D.G():s},
aI:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gm().W()
s=d.gm().c.length
for(b=a.gm().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
o.j(0,p.c7())}d.gm().W()
for(b=a.gas(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bO(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,j)
new F.i3().ef(j)}for(b=a.gR(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cK(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,g)
new F.aS().bC(h,g)}for(b=a.gI().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cJ(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,g)
m=o.a;(m==null?o.a=new F.p(o,[]):m).j(0,e)
new F.ai().aM(h,g,e)}b=d.e
if(b!=null)b.az(0)},
ax:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gI().ax()||!1
if(!r.gm().ax())s=!1
q=r.e
if(q!=null)q.az(0)
return s},
aU:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gI().aU()||!1
if(!r.gm().aU())s=!1
q=r.e
if(q!=null)q.az(0)
return s},
bt:function(){var s=this.e
if(s!=null)++s.d
this.gm().bt()
s=this.e
if(s!=null)s.az(0)
return!0},
hj:function(a,b){var s,r,q,p=this,o=p.gm().c.length
for(s=0;s<o;++s){r=p.a
r=(r==null?p.a=new F.p(p,[]):r).c
if(s>=r.length)return H.d(r,s)
q=r[s]
if(b.aZ(0,a,q))return q}return null},
fI:function(a,b){var s,r,q,p,o,n,m,l=this
l.gm().j(0,a)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.o)(b),++r){q=b[r]
while(!0){p=q.d
if(p==null){p=q.d=new F.a9([],[],[])
o=p}else o=p
if(!(p.b.length+p.c.length+p.d.length>0))break
p=o.h(0,0)
o=p.a
if(o==null||p.b==null||p.c==null)H.f(P.e("May not replace a face's vertex when the point has been disposed."))
if(J.z(o,q)){p.aO(q,a)
o=p.a
if(o!=null){n=o.d
C.a.A((n==null?o.d=new F.a9([],[],[]):n).b,p)}p.a=null
p.a=a
o=a.d;(o==null?a.d=new F.a9([],[],[]):o).b.push(p)
m=1}else m=0
if(J.z(p.b,q)){p.aO(q,a)
o=p.b
if(o!=null){n=o.d
C.a.A((n==null?o.d=new F.a9([],[],[]):n).c,p)}p.b=null
p.b=a
o=a.d;(o==null?a.d=new F.a9([],[],[]):o).c.push(p);++m}if(J.z(p.c,q)){p.aO(q,a)
o=p.c
if(o!=null){n=o.d
C.a.A((n==null?o.d=new F.a9([],[],[]):n).d,p)}p.c=null
p.c=a
o=a.d;(o==null?a.d=new F.a9([],[],[]):o).d.push(p);++m}if(m>0){p=p.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}}while(!0){p=q.c
if(p==null){p=q.c=new F.ad([],[])
o=p}else o=p
if(!(p.b.length+p.c.length>0))break
p=o.h(0,0)
o=p.a
if(o==null||p.b==null)H.f(P.e("May not replace a line's vertex when the point has been disposed."))
if(J.z(o,q)){p.aO(q,a)
o=p.a
if(o!=null){n=o.c
C.a.A((n==null?o.c=new F.ad([],[]):n).b,p)}p.a=null
p.a=a
o=a.c;(o==null?a.c=new F.ad([],[]):o).b.push(p)
m=1}else m=0
if(J.z(p.b,q)){p.aO(q,a)
o=p.b
if(o!=null){n=o.c
C.a.A((n==null?o.c=new F.ad([],[]):n).c,p)}p.b=null
p.b=a
o=a.c;(o==null?a.c=new F.ad([],[]):o).c.push(p);++m}if(m>0){p=p.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}}while(!0){p=q.b
if(p==null){p=q.b=new F.b1([])
o=p}else o=p
if(!(p.b.length>0))break
p=o.b
if(0>=p.length)return H.d(p,0)
p=p[0]
o=p.a
if(o==null)H.f(P.e("May not replace a point's vertex when the point has been disposed."))
if(J.z(o,q)){if(a.a==null)H.f(P.e("May not replace a point's vertex with a vertex which is not attached to a shape."))
o=p.a
if(o!=null){n=o.b
C.a.A((n==null?o.b=new F.b1([]):n).b,p)}p.a=null
p.a=a
o=a.b;(o==null?a.b=new F.b1([]):o).b.push(p)
m=1}else m=0
if(m>0){p=p.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}}p=l.a;(p==null?l.a=new F.p(l,[]):p).A(0,q)}},
hq:function(a,b){var s,r,q,p,o,n,m=this,l=m.e
if(l!=null)++l.d
s=m.gm().c.slice(0)
for(;s.length!==0;){r=C.a.ghl(s)
C.a.cq(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.aZ(0,r,o)){q.push(o)
C.a.cq(s,p)}}if(q.length>1){n=b.aI(q)
m.fI(n,q)
s.push(n)}}m.gm().W()
m.gR(m).cr()
m.gI().cr()
m.gas(m).hH()
m.gR(m).cs(new F.iv())
m.gI().cs(new F.ie())
l=m.e
if(l!=null)l.az(0)},
dk:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=34962,d={},c=g.gm().c.length,b=a1.a,a=(b&$.aN().a)!==0?1:0
if((b&$.aM().a)!==0)++a
if((b&$.aL().a)!==0)++a
if((b&$.bu().a)!==0)++a
if((b&$.bv().a)!==0)++a
if((b&$.c0().a)!==0)++a
if((b&$.dj().a)!==0)++a
if((b&$.c1().a)!==0)++a
if((b&$.b8().a)!==0)++a
s=a1.gcE(a1)
r=P.hG(c*s,0,!1)
d.a=0
q=P.lP(a,new F.ia(d,g,a1,s*4,c,s,r))
b=a0.a
p=b.createBuffer()
p.toString
b.bindBuffer(e,p)
b.bufferData(e,new Float32Array(H.db(r)),35044)
b.bindBuffer(e,f)
o=new Z.c5(new Z.eO(e,p),[],q,a1)
if(g.gas(g).b.length!==0){n=[]
m=0
while(!0){p=g.b
if(p==null){p=g.b=new F.bO(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
p=p[m].a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}p=p.e}n.push(p==null?0:p);++m}j=Z.jK(b,34963,n)
o.b.push(new Z.ck(0,n.length,j))}if(g.gR(g).b.length!==0){n=[]
m=0
while(!0){p=g.c
if(p==null){p=g.c=new F.cK(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
i=p[m]
p=i.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}p=p.e}n.push(p==null?0:p)
p=i.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}p=p.e}n.push(p==null?0:p);++m}j=Z.jK(b,34963,n)
o.b.push(new Z.ck(1,n.length,j))}if(g.gI().b.length!==0){n=[]
m=0
while(!0){p=g.d
if(p==null){p=g.d=new F.cJ(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
h=p[m]
p=h.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}p=p.e}n.push(p==null?0:p)
p=h.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}p=p.e}n.push(p==null?0:p)
p=h.c
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).W()}p=p.e}n.push(p==null?0:p);++m}j=Z.jK(b,34963,n)
o.b.push(new Z.ck(4,n.length,j))}return o},
i:function(a){var s=this,r="   ",q=[]
if(s.gm().c.length!==0){q.push("Vertices:")
q.push(s.gm().D(r))}if(s.gas(s).b.length!==0){q.push("Points:")
q.push(s.gas(s).D(r))}if(s.gR(s).b.length!==0){q.push("Lines:")
q.push(s.gR(s).D(r))}if(s.gI().b.length!==0){q.push("Faces:")
q.push(s.gI().D(r))}return C.a.t(q,"\n")},
M:function(){var s=this.e
return s==null?null:s.C(null)}}
F.ia.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.h7(a),f=g.gcE(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.p(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].hp(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c4(g,f,d*4,h.d)},
$S:33}
F.cJ.prototype={
dc:function(a,b,c,d){var s,r=this.a
r.gm().j(0,b)
r.gm().j(0,c)
r.gm().j(0,d)
s=new F.ai()
r=b.a
if(r==null)H.f(P.e(u.D))
if(r!=c.a||r!=d.a)H.f(P.e(u.R))
s.ba(b)
s.bb(c)
s.d6(d)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gI().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.M()}return s},
h3:function(a){var s,r,q,p,o,n,m,l=[],k=a.length
if(k>0){s=a[0]
for(r=this.a,q=2;q<k;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
n=r.a;(n==null?r.a=new F.p(r,[]):n).j(0,s)
n=r.a;(n==null?r.a=new F.p(r,[]):n).j(0,p)
n=r.a;(n==null?r.a=new F.p(r,[]):n).j(0,o)
m=new F.ai()
m.aM(s,p,o)
l.push(m)}}return l},
h4:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.d(c,q)
k=c[q];++q
if(q>=l)return H.d(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.d(c,i)
h=c[i]
if(r<0||r>=l)return H.d(c,r)
g=c[r]
l=s.a
if(n){(l==null?s.a=new F.p(s,[]):l).j(0,k)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,h)
f=new F.ai()
f.aM(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,k)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,g)
f=new F.ai()
f.aM(k,h,g)
e.push(f)}else{(l==null?s.a=new F.p(s,[]):l).j(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,g)
f=new F.ai()
f.aM(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,g)
l=s.a;(l==null?s.a=new F.p(s,[]):l).j(0,k)
f=new F.ai()
f.aM(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gk:function(a){return this.b.length},
cs:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gm().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.p(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.a9([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.a9([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.aZ(0,n,(q==null?p.d=new F.a9([],[],[]):q).h(0,l))){n.bf()
break}}}}},
cr:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghb(q))q.bf()}},
ax:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c5())q=!1
return q},
aU:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c4())q=!1
return q},
i:function(a){return this.v()},
D:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(a))
return C.a.t(p,"\n")},
v:function(){return this.D("")}}
F.cK.prototype={
c1:function(a,b,c){var s,r=this.a
r.gm().j(0,b)
r.gm().j(0,c)
r=new F.aS()
s=b.a
if(s==null)H.f(P.e(u.E))
if(s!=c.a)H.f(P.e(u.T))
r.ba(b)
r.bb(c)
s=r.a
if(s!=null){s=s.a
if(s!=null)s.gR(s).b.push(r)}s=r.a
if(s!=null){s=s.a
if(s!=null)s.M()}return r},
dd:function(a){var s,r,q,p,o,n=[],m=a.length
if(m>0){for(s=this.a,r=1;r<m;++r){q=r-1
p=a.length
if(q>=p)return H.d(a,q)
q=a[q]
if(r>=p)return H.d(a,r)
p=a[r]
o=s.a;(o==null?s.a=new F.p(s,[]):o).j(0,q)
o=s.a;(o==null?s.a=new F.p(s,[]):o).j(0,p)
o=new F.aS()
o.bC(q,p)
n.push(o)}s=m-1
q=a.length
if(s>=q)return H.d(a,s)
s=a[s]
if(0>=q)return H.d(a,0)
n.push(this.c1(0,s,a[0]))}return n},
h5:function(a){var s,r,q,p,o,n=[]
for(s=this.a,r=1;r<64;r+=2){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.p(s,[]):o).j(0,q)
o=s.a;(o==null?s.a=new F.p(s,[]):o).j(0,p)
o=new F.aS()
o.bC(q,p)
n.push(o)}return n},
gk:function(a){return this.b.length},
cs:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gm().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.p(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
if(q==null)q=p.c=new F.ad([],[])
o=q.b.length+q.c.length-1
for(;o>=0;o=m){q=p.c
n=(q==null?p.c=new F.ad([],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.c
if(a.aZ(0,n,(q==null?p.c=new F.ad([],[]):q).h(0,l))){n.bf()
break}}}}},
cr:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.z(q.a,q.b))q.bf()}},
i:function(a){return this.v()},
D:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].D(a+(""+s+". ")))}return C.a.t(r,"\n")},
v:function(){return this.D("")}}
F.bO.prototype={
gk:function(a){return this.b.length},
hH:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
p=q.a
o=p==null
if(o)n=null
else{m=p.b
m=(m==null?p.b=new F.b1([]):m).b.length
n=m}if((n==null?0:n)>1){if(!o){p=p.a
if(p!=null){o=p.b
C.a.A((o==null?p.b=new F.bO(p,[]):o).b,q)}p=q.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}p=q.a
if(p!=null){o=p.b
C.a.A((o==null?p.b=new F.b1([]):o).b,q)}q.a=null}}},
i:function(a){return this.v()},
D:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(a))
return C.a.t(p,"\n")},
v:function(){return this.D("")}}
F.ap.prototype={
c8:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.br(s.cx,p,m,r,q,o,n,a,l)},
c7:function(){return this.c8(null)},
gas:function(a){var s=this.b
return s==null?this.b=new F.b1([]):s},
gR:function(a){var s=this.c
return s==null?this.c=new F.ad([],[]):s},
gI:function(){var s=this.d
return s==null?this.d=new F.a9([],[],[]):s},
gp:function(a){var s=this.a
if(s!=null)s.gm().W()
return this.e},
sa2:function(a,b){var s
if(!J.z(this.f,b)){this.f=b
s=this.a
if(s!=null)s.M()}},
sdO:function(a){var s
a=a==null?null:a.E()
if(!J.z(this.r,a)){this.r=a
s=this.a
if(s!=null)s.M()}},
sbs:function(a){var s
a=a==null?null:a.E()
if(!J.z(this.x,a)){this.x=a
s=this.a
if(s!=null)s.M()}},
sct:function(a){var s
if(!J.z(this.y,a)){this.y=a
s=this.a
if(s!=null)s.M()}},
scu:function(a){var s
if(!J.z(this.z,a)){this.z=a
s=this.a
if(s!=null)s.M()}},
sY:function(a,b){var s
if(!J.z(this.Q,b)){this.Q=b
s=this.a
if(s!=null)s.M()}},
se5:function(a,b){var s
if(this.ch!==b){this.ch=b
s=this.a
if(s!=null)s.M()}},
hp:function(a){var s,r,q,p,o=this,n=null
if(a.n(0,$.aN())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.aM())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.n(0,$.aL())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.n(0,$.bu())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.n(0,$.bv())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.c0())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.n(0,$.dj())){s=o.Q
s=s==null?n:s.cv(0)
return s==null?[1,1,1,1]:s}else if(a.n(0,$.c1()))return[o.ch]
else if(a.n(0,$.b8())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
c5:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.bR()
p.gI().B(0,new F.iN(o))
p.r=o.a.E()
if(r){s.M()
o=s.e
if(o!=null)o.az(0)}return!0},
c4:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.bR()
p.gI().B(0,new F.iM(o))
p.x=o.a.E()
if(r){s.M()
o=s.e
if(o!=null)o.az(0)}return!0},
dG:function(a){var s,r,q,p,o,n=this,m=n.gR(n).b.length
for(s=0;s<m;++s){r=n.c
r=(r==null?n.c=new F.ad([],[]):r).b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.b
if(r==null)r=null
else{p=r.a
if(p!=null){o=p.a;(o==null?p.a=new F.p(p,[]):o).W()}r=r.e}p=a.a
if(p!=null){o=p.a;(o==null?p.a=new F.p(p,[]):o).W()}if(r===a.e)return q}return null},
hm:function(a){var s=this.dG(a)
if(s!=null)return s
return a.dG(this)},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
D:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.d.am(C.b.i(q.e),0))
s=q.f
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.v()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.v()
n.push(s==null?o:s)
n.push(V.t(q.ch,3,0))
s=q.cx
s=s==null?p:s.v()
n.push(s==null?o:s)
r=C.a.t(n,", ")
return a+"{"+r+"}"},
v:function(){return this.D("")}}
F.iN.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.P(0,r)}},
$S:3}
F.iM.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.P(0,r)}},
$S:3}
F.p.prototype={
W:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
j:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.e("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.M()
return!0},
h6:function(a,b,c,d,e,f,g){var s=F.br(a,null,b,c,d,e,f,g,0)
this.j(0,s)
return s},
aT:function(a,b,c,d,e,f){return this.h6(a,b,c,null,d,e,f)},
a_:function(a,b,c){var s=null,r=F.br(s,s,s,new V.J(a,b,c),s,s,s,s,0)
this.j(0,r)
return r},
gk:function(a){return this.c.length},
A:function(a,b){var s,r=this.a
if(b.a!==r)return!1
if(b.gas(b).b.length===0){s=b.gR(b)
if(s.b.length===0&&s.c.length===0){s=b.gI()
s=s.b.length===0&&s.c.length===0&&s.d.length===0}else s=!1}else s=!1
if(!s)throw H.b(P.e("May not remove a vertex without first making it empty."))
b.a=null
C.a.A(this.c,b)
r.M()
return this.b=!0},
ax:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c5()
return!0},
aU:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c4()
return!0},
bt:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.E()
if(!J.z(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.C(null)}}}}}return!0},
i:function(a){return this.v()},
D:function(a){var s,r,q,p
this.W()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].D(a))
return C.a.t(s,"\n")},
v:function(){return this.D("")}}
F.a9.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.d(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.d(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.d(r,b)
return r[b]},
B:function(a,b){var s=this
C.a.B(s.b,b)
C.a.B(s.c,new F.iH(s,b))
C.a.B(s.d,new F.iI(s,b))},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.a.t(p,"\n")}}
F.iH.prototype={
$1:function(a){if(!J.z(a.a,this.a))this.b.$1(a)},
$S:3}
F.iI.prototype={
$1:function(a){var s=this.a
if(!J.z(a.a,s)&&!J.z(a.b,s))this.b.$1(a)},
$S:3}
F.ad.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.a.t(p,"\n")}}
F.iK.prototype={}
F.eM.prototype={
aZ:function(a,b,c){return J.z(b.f,c.f)}}
F.iL.prototype={}
F.iJ.prototype={
aI:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=null
for(s=a8.length,r=a7,q=r,p=q,o=p,n=o,m=n,l=0,k=0,j=0,i=0,h=0,g=0,f=0;f<s;++f){e=a8[f]
d=e.f
if(d!=null){m=m==null?d:new V.J(m.a+d.a,m.b+d.b,m.c+d.c);++l}c=e.r
if(c!=null)n=n==null?c:new V.q(n.a+c.a,n.b+c.b,n.c+c.c)
b=e.x
if(b!=null)o=o==null?b:new V.q(o.a+b.a,o.b+b.b,o.c+b.c)
a=e.y
if(a!=null){q=q==null?a:new V.D(q.a+a.a,q.b+a.b);++j}a0=e.z
if(a0!=null){r=r==null?a0:new V.q(r.a+a0.a,r.b+a0.b,r.c+a0.c);++i}a1=e.Q
if(a1!=null){a2=a1.a
a3=a1.b
a4=a1.c
a5=a1.d
if(p==null){a2=[a2,a3,a4,a5]
p=new V.b0(a2[0],a2[1],a2[2],a2[3])}else{a2=[a2,a3,a4,a5]
a3=a2[0]
a4=a2[1]
a5=a2[2]
a2=a2[3]
p=new V.b0(p.a+a3,p.b+a4,p.c+a5,p.d+a2)}++k}g+=e.ch;++h}a6=F.br(a7,a7,a7,a7,a7,a7,a7,a7,0)
if(l<=0||m==null)a6.sa2(0,a7)
else a6.sa2(0,m.T(0,l))
if(n==null)a6.sdO(a7)
else a6.sdO(n.E())
if(o==null)a6.sbs(a7)
else a6.sbs(o.E())
if(j<=0||q==null)a6.sct(a7)
else a6.sct(q.T(0,j))
if(i<=0||r==null)a6.scu(a7)
else a6.scu(r.T(0,i))
if(k<=0||p==null)a6.sY(0,a7)
else{s=p.T(0,k)
s=[s.a,s.b,s.c,s.d]
a2=s[0]
a3=s[1]
a4=s[2]
s=s[3]
if(a2<0)a2=0
else if(a2>1)a2=1
if(a3<0)a3=0
else if(a3>1)a3=1
if(a4<0)a4=0
else if(a4>1)a4=1
if(s<0)s=0
else if(s>1)s=1
a6.sY(0,new V.K(a2,a3,a4,s))}if(h<=0)a6.se5(0,0)
else a6.se5(0,g/h)
return a6}}
F.b1.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].D(""))
return C.a.t(p,"\n")}}
O.dF.prototype={
gq:function(){var s=this.rx
return s==null?this.rx=D.G():s},
a1:function(a){var s=this.rx
return s==null?null:s.C(a)},
scC:function(a){if(!this.Q){this.Q=!0
this.a1(new D.w("showFilled",!1,!0))}},
scD:function(a){if(!this.ch){this.ch=!0
this.a1(new D.w("showWireFrame",!1,!0))}},
sdn:function(a){var s,r=this
if(!r.c.n(0,a)){s=r.c
r.c=a
r.a1(new D.w("diffuse1",s,a))}},
sdf:function(a){var s,r=this
if(!r.d.n(0,a)){s=r.d
r.d=a
r.a1(new D.w("ambient1",s,a))}},
ai:function(a,b){},
e0:function(a,b){var s,r,q,p,o=this,n="Inspection"
if(o.a==null){s=t.s.a(a.fr.h(0,n))
if(s==null){s=new A.cl(a.a,n)
s.dI(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
s.x=s.ga7(s).h(0,"posAttr")
s.y=s.ga7(s).h(0,"normAttr")
s.z=s.ga7(s).h(0,"clrAttr")
s.Q=s.ga7(s).h(0,"binmAttr")
s.ch=t.g.a(s.gJ().h(0,"lightVec"))
r=t.F
s.cx=r.a(s.gJ().h(0,"ambientClr"))
s.cy=r.a(s.gJ().h(0,"diffuseClr"))
s.db=t.n.a(s.gJ().h(0,"weightScalar"))
r=t.j
s.dx=r.a(s.gJ().h(0,"viewMat"))
s.dy=r.a(s.gJ().h(0,"viewObjMatrix"))
s.fr=r.a(s.gJ().h(0,"projViewObjMatrix"))
a.de(s)}o.a=s}if(b.e==null){r=b.d
if(r!=null)r.ax()
r=b.d
if(r!=null)r.aU()
r=b.d
if(r!=null)r.bt()
b.e=new Z.dr(P.P(t.N,t.C))}r=o.a
if(r!=null){r.aw(a)
q=r.db
if(q!=null)q.a.uniform1f(q.d,1)
q=o.b
p=r.ch
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)
q=a.db
q=q.gL(q)
p=r.dx
if(p!=null)p.aa(q.a3(0,!0))
q=a.ge4()
p=r.dy
if(p!=null)p.aa(q.a3(0,!0))
q=a.gdY()
r=r.fr
if(r!=null)r.aa(q.a3(0,!0))}r=b.e
if(r instanceof Z.dr){a.a.blendFunc(1,1)
if(b.c==null)o.fF(r,a,b)
else o.fG(r,a,b)}else b.e=null
r=o.a
if(r!=null){a.a.useProgram(null)
r.ga7(r).dr()}},
fF:function(a,b,c){var s
if(c.d==null)return
s=b.a
s.disable(2929)
s.enable(3042)
s.blendFunc(1,1)
s.enable(2929)
s.blendFunc(770,771)},
fG:function(a,b,c){var s,r=this,q=c.c
if(q==null)return
s=b.a
s.enable(2929)
s.enable(3042)
s.blendFunc(770,771)
if(r.Q)r.d1(b,a,q,"shapeFill",r.gfQ(),r.d,r.c)
s.disable(2929)
s.blendFunc(1,1)
if(r.ch)r.d1(b,a,q,"wireFrame",r.gh_(),r.f,r.e)
s.enable(2929)
s.blendFunc(770,771)},
d1:function(a,b,c,d,e,f,g){var s=b.a,r=s.h(0,d)
if(r==null){r=this.es(a,e.$1(c))
s.l(0,d,r)}s=this.a
if(s!=null)s.e8(f,g)
r.hz(a)},
es:function(a,b){var s=this,r=null,q=$.aN(),p=$.aM(),o=q.a,n=p.a,m=$.aL(),l=m.a,k=$.c0(),j=b.dk(new Z.eP(a.a),new Z.b2(o|n|l|k.a))
q=j.aj(q)
if(q!=null){o=s.a
if(o==null)o=r
else{o=o.x
o=o==null?r:o.c}q.e=o==null?0:o}q=j.aj(p)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.y
p=p==null?r:p.c}q.e=p==null?1:p}q=j.aj(k)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.z
p=p==null?r:p.c}q.e=p==null?2:p}q=j.aj(m)
if(q!=null){p=s.a
if(p==null)p=r
else{p=p.Q
p=p==null?r:p.c}q.e=p==null?3:p}return j},
fR:function(a){var s=F.at()
C.a.B(a.gm().c,new O.hu(s,new V.K(1,1,1,1)))
C.a.B(a.gI().b,new O.hv(s))
return s},
da:function(a,b){var s,r={}
r.a=b
s=F.at()
r.a=new V.K(0,0.7,1,1)
C.a.B(a.gm().c,new O.hx(r,s))
r=new O.hw(s)
C.a.B(a.gR(a).b,new O.hy(s,r))
C.a.B(a.gI().b,new O.hz(s,r))
return s},
h0:function(a){return this.da(a,null)}}
O.hu.prototype={
$1:function(a){var s=this.a.gm(),r=a.c7()
r.sY(0,this.b)
r.sbs(V.bR())
s.j(0,r)},
$S:13}
O.hv.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gm(),n=a.a
n=n==null?null:n.gp(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
s=o[n]
n=p.gm()
o=a.b
o=o==null?null:o.gp(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.d(n,o)
r=n[o]
o=p.gm()
n=a.c
n=n==null?null:n.gp(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
q=o[n]
p.gI().dc(0,s,r,q)},
$S:3}
O.hx.prototype={
$1:function(a){var s=this.b.gm(),r=a.c7()
r.sY(0,this.a.a)
r.sbs(V.bR())
s.j(0,r)},
$S:13}
O.hw.prototype={
$2:function(a,b){var s
if(a.hm(b)==null){s=this.a
s.gR(s).c1(0,a,b)}},
$S:38}
O.hy.prototype={
$1:function(a){var s,r=this.a,q=r.gm(),p=a.a
p=p==null?null:p.gp(p)
if(p==null)p=0
q=q.c
if(p>=q.length)return H.d(q,p)
s=q[p]
r=r.gm()
p=a.b
q=p==null?null:p.gp(p)
if(q==null)q=0
r=r.c
if(q>=r.length)return H.d(r,q)
this.b.$2(s,r[q])},
$S:39}
O.hz.prototype={
$1:function(a){var s,r,q,p=this.a,o=p.gm(),n=a.a
n=n==null?null:n.gp(n)
if(n==null)n=0
o=o.c
if(n>=o.length)return H.d(o,n)
s=o[n]
n=p.gm()
o=a.b
o=o==null?null:o.gp(o)
if(o==null)o=0
n=n.c
if(o>=n.length)return H.d(n,o)
r=n[o]
p=p.gm()
o=a.c
o=o==null?null:o.gp(o)
if(o==null)o=0
p=p.c
if(o>=p.length)return H.d(p,o)
q=p[o]
o=this.b
o.$2(s,r)
o.$2(r,q)
o.$2(q,s)},
$S:3}
O.dP.prototype={
gq:function(){var s=this.fr
return s==null?this.fr=D.G():s},
a1:function(a){var s=this.fr
return s==null?null:s.C(a)},
ej:function(){return this.a1(null)},
d3:function(a){this.a=null
this.a1(a)},
fK:function(){return this.d3(null)},
eN:function(a,b){return this.a1(new D.az())},
eP:function(a,b){return this.a1(new D.aA())},
gay:function(){var s=this.f
return s==null?this.f=O.dR(this,"emission"):s},
gbc:function(a){var s=this.db
return s==null?this.db=new O.hL(this,"alpha",new A.af(!1,!1,!1)):s},
cS:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=t.y,a0=new H.W(a),a1=c.dx
a1=a1==null?b:a1.e
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){q=a1[r]
p=q.gah()
o=a0.h(0,q.gah())
a0.l(0,p,o==null?1:o)}n=[]
a0.B(0,new O.hR(c,n))
C.a.b4(n,new O.hS())
m=new H.W(a)
a1=c.dx
a1=a1==null?b:a1.f
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){q=a1[r]
p=q.gah()
o=m.h(0,q.gah())
m.l(0,p,o==null?1:o)}l=[]
m.B(0,new O.hT(c,l))
C.a.b4(l,new O.hU())
k=new H.W(a)
a1=c.dx
a1=a1==null?b:a1.r
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){q=a1[r]
p=q.gah()
o=k.h(0,q.gah())
k.l(0,p,o==null?1:o)}j=[]
k.B(0,new O.hV(c,j))
C.a.b4(j,new O.hW())
i=new H.W(a)
a=c.dx
a=a==null?b:a.x
if(a==null)a=[]
a1=a.length
r=0
for(;r<a.length;a.length===a1||(0,H.o)(a),++r){q=a[r]
s=q.gah()
p=i.h(0,q.gah())
i.l(0,s,p==null?1:p)}h=[]
i.B(0,new O.hX(c,h))
C.a.b4(h,new O.hY())
a=C.b.ag(c.e.a.length+3,4)
if(c.dy==null)c.dy=new O.hO(new V.K(0,0,0,0))
a1=c.gay().c
s=c.r
s=(s==null?c.r=O.dR(c,"ambient"):s).c
p=c.x
p=(p==null?c.x=O.dR(c,"diffuse"):p).c
o=c.y
o=(o==null?c.y=O.dR(c,"invDiffuse"):o).c
g=c.z
g=(g==null?c.z=new O.hQ(new V.O(0,0,0),c,"specular",new A.af(!1,!1,!1)):g).c
f=c.Q
f=(f==null?c.Q=new O.hM(c,"bump",new A.af(!1,!1,!1)):f).c
e=c.cx
e=(e==null?c.cx=O.dR(c,"reflect"):e).c
d=c.cy
return A.lR(!1,!1,!1,!1,a*4,a1,s,p,o,g,f,e,(d==null?c.cy=new O.hP(new V.O(0,0,0),c,"refract",new A.af(!1,!1,!1)):d).c,c.gbc(c).c,n,l,j,h)},
ep:function(a,b){},
ai:function(a,b){var s,r=this.dx
r=J.aO(r==null?[]:r)
s=H.U(r).c
for(;r.u();)s.a(r.d).ai(0,b)},
e0:function(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=b5.a
if(b7==null){s=b5.cS()
r=s.bu
b7=t.J.a(b8.fr.h(0,r))
if(b7==null){q=b8.a
p=t.S
o=t.W
b7=new A.cu(s,[],P.P(p,o),P.P(p,t.I),P.P(p,o),P.P(p,t.L),P.P(p,o),P.P(p,t.U),P.P(p,o),P.P(p,t.R),q,r)
b7.ee(s,q)
b8.de(b7)}b7=b5.a=b7
b9.e=null}n=b7.x
m=n.dw
s=b9.e
if(!(s instanceof Z.c5))s=b9.e=null
if(s==null||!s.d.n(0,m)){s=n.k4
if(s){r=b9.d
if(r!=null)r.ax()}r=n.r1
if(r){q=b9.d
if(q!=null)q.aU()}q=n.rx
if(q){p=b9.d
if(p!=null)p.bt()}p=b9.d
l=p==null?b6:p.dk(new Z.eP(b8.a),m)
if(l==null)return
p=l.aj($.aN())
if(p!=null){o=b7.y
o=o==null?b6:o.c
p.e=o==null?0:o}if(s){s=l.aj($.aM())
if(s!=null){p=b7.Q
p=p==null?b6:p.c
s.e=p==null?1:p}}if(r){s=l.aj($.aL())
if(s!=null){r=b7.z
r=r==null?b6:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aj($.bu())
if(s!=null){r=b7.ch
r=r==null?b6:r.c
s.e=r==null?3:r}}if(q){s=l.aj($.bv())
if(s!=null){r=b7.cx
r=r==null?b6:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aj($.b8())
if(s!=null){r=b7.cy
r=r==null?b6:r.c
s.e=r==null?5:r}}b9.e=l}k=[]
b7.aw(b8)
if(n.fr){s=b8.dx
s=s.gL(s)
r=b7.db
if(r!=null)r.aa(s.a3(0,!0))}if(n.fx){s=b8.ge4()
r=b7.dx
if(r!=null)r.aa(s.a3(0,!0))}s=b8.gdY()
r=b7.fr
if(r!=null)r.aa(s.a3(0,!0))
if(n.go){s=b8.db
s=s.gL(s)
r=b7.dy
if(r!=null)r.aa(s.a3(0,!0))}if(n.x1){s=$.ke
if(s==null){s=new V.cw(1,0,0,0,1,0,0,0,1)
$.ke=s}r=b7.go
if(r!=null)r.aa(s.a3(0,!0))}if(n.x2){s=V.aj()
r=b7.id
if(r!=null)r.aa(s.a3(0,!0))}if(n.y1){s=V.aj()
r=b7.k1
if(r!=null)r.aa(s.a3(0,!0))}if(n.aW>0){s=b5.e.a
j=s.length
r=b7.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=b7.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.db(r.a3(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}if(n.a.a){s=b5.f
s=s==null?b6:s.f
if(s==null)s=new V.O(0,0,0)
r=b7.k4
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.k1){if(n.b.a){s=b5.r
s=s==null?b6:s.f
if(s==null)s=new V.O(0,0,0)
r=b7.rx
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.c.a){s=b5.x
s=s==null?b6:s.f
if(s==null)s=new V.O(0,0,0)
r=b7.x2
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}if(n.d.a){s=b5.y
s=s==null?b6:s.f
if(s==null)s=new V.O(0,0,0)
r=b7.aW
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.e.a
if(!s)r=!1
else r=!0
if(r){r=b5.z
r=r==null?b6:r.ch
if(r==null)r=100
q=b7.dA
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=b5.z
s=s==null?b6:s.f
if(s==null)s=new V.O(1,1,1)
r=b7.dz
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.z
if(s.length>0){g=new H.W(t.y)
r=b5.dx
r=r==null?b6:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gah()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
p=b7.cb.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=e.ghS()
o=$.aD
p=p.bm(o==null?$.aD=new V.J(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghW()
o=$.aD
p=p.bm(o==null?$.aD=new V.J(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gY(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gdv()){p=e.gdg()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdh()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdi()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=b7.ca.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b8.db
a=r.gL(r)
a0=new H.W(t.y)
r=b5.dx
r=r==null?b6:r.f
if(r==null)r=[]
q=r.length
p=a.a
o=a.b
a1=a.c
a2=a.e
a3=a.f
a4=a.r
a5=a.y
a6=a.z
a7=a.Q
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gah()
c=a0.h(0,d)
if(c==null)c=0
a0.l(0,d,c+1)
a8=b7.cd.h(0,d)
if(a8==null)a8=[]
if(c>>>0!==c||c>=a8.length)return H.d(a8,c)
b=a8[c]
a8=e.gdq(e)
a8=new V.q(C.c.w(p,a8.gds(a8))+C.c.w(o,a8.gdt(a8))+C.c.w(a1,a8.gdu()),C.c.w(a2,a8.gds(a8))+C.c.w(a3,a8.gdt(a8))+C.c.w(a4,a8.gdu()),C.c.w(a5,a8.gds(a8))+C.c.w(a6,a8.gdt(a8))+C.c.w(a7,a8.gdu())).E()
a9=b.e
a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gY(e)
a9=b.f
a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
e.gan()
a8=e.gdq(e)
a9=b.d
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gaK()
a9=b.b
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gbx(e)
a9=b.c
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gan()
if(!C.a.O(k,a8)){a8.sp(0,k.length)
k.push(a8)}a8=e.gan()
a9=a8.gaq(a8)
if(a9){a9=b.r
if(a9!=null){b0=a8.gaq(a8)
b1=a9.a
a9=a9.d
if(!b0)b1.uniform1i(a9,0)
else b1.uniform1i(a9,a8.gp(a8))}}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=b7.cc.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b8.db
a=r.gL(r)
b2=new H.W(t.y)
r=b5.dx
r=r==null?b6:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gah()
c=b2.h(0,d)
if(c==null)c=0
b2.l(0,d,c+1)
p=b7.cf.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
b3=a.w(0,e.gL(e))
p=e.gL(e)
o=$.aD
p=p.bm(o==null?$.aD=new V.J(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aD
p=b3.bm(p==null?$.aD=new V.J(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gY(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gan()
p=b3.dK(0)
o=b.d
if(o!=null){h=new Float32Array(H.db(new V.cw(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).a3(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gan()
p=e.gan()
if(!C.a.O(k,p)){p.sp(0,k.length)
k.push(p)}p=e.gan()
o=p.gaq(p)
if(o){o=b.f
if(o!=null){a1=p.gaq(p)
a2=o.a
o=o.d
if(!a1)a2.uniform1i(o,0)
else a2.uniform1i(o,p.gp(p))}}e.gb3()
p=e.ge9()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb3()
if(!C.a.O(k,p)){p.sp(0,k.length)
k.push(p)}p=e.gb3()
o=p.gaq(p)
if(o){o=b.r
if(o!=null){a1=p.gaq(p)
a2=o.a
o=o.d
if(!a1)a2.uniform1i(o,0)
else a2.uniform1i(o,p.gp(p))}}if(e.gdv()){p=e.gdg()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdh()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdi()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=b2.h(0,q)
if(j==null)j=0
q=b7.ce.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b8.db
a=r.gL(r)
b4=new H.W(t.y)
r=b5.dx
r=r==null?b6:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gah()
c=b4.h(0,d)
if(c==null)c=0
b4.l(0,d,c+1)
p=b7.ci.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=e.ghF(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gdq(e).E()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bm(e.ghF(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gY(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gan()
p=e.gaK()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gbx(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gi9()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gia()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gan()
p=e.gan()
if(!C.a.O(k,p)){p.sp(0,k.length)
k.push(p)}p=e.gan()
o=p.gaq(p)
if(o){o=b.dx
if(o!=null){a1=p.gaq(p)
a2=o.a
o=o.d
if(!a1)a2.uniform1i(o,0)
else a2.uniform1i(o,p.gp(p))}}e.gb3()
p=e.ge9()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb3()
if(!C.a.O(k,p)){p.sp(0,k.length)
k.push(p)}p=e.gb3()
o=p.gaq(p)
if(o){o=b.dy
if(o!=null){a1=p.gaq(p)
a2=o.a
o=o.d
if(!a1)a2.uniform1i(o,0)
else a2.uniform1i(o,p.gp(p))}}if(e.ghV()){p=e.ghU()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghT()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gdv()){p=e.gdg()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdh()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdi()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=b4.h(0,q)
if(j==null)j=0
q=b7.cg.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.dy){s=b8.Q
if(s==null){s=b8.db
s=b8.Q=s.gL(s).dK(0)}r=b7.fy
if(r!=null)r.aa(s.a3(0,!0))}if(n.db){b5.ep(k,b6)
b7.fL(b7.dB,b6)
if(n.r.a){s=b5.cx
s=s==null?b6:s.f
if(s==null)s=new V.O(1,1,1)
r=b7.dC
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}s=n.x.a
if(!s)r=!1
else r=!0
if(r){r=b5.cy
r=r==null?b6:r.ch
if(r==null)r=0
q=b7.dD
if(q!=null)q.a.uniform1f(q.d,r)}if(s){s=b5.cy
s=s==null?b6:s.f
if(s==null)s=new V.O(1,1,1)
r=b7.dE
if(r!=null)r.a.uniform3f(r.d,s.a,s.b,s.c)}}s=n.y.a
r=!s
if(r)q=!1
else q=!0
if(q){if(s){s=b5.db
s=s==null?b6:s.f
if(s==null)s=1
q=b7.dF
if(q!=null)q.a.uniform1f(q.d,s)}s=b8.a
s.enable(3042)
s.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].aw(b8)
s=t.C.a(b9.e)
s.aw(b8)
s.at(b8)
s.cw(b8)
if(r)s=!1
else s=!0
if(s)b8.a.disable(3042)
for(i=0;i<k.length;++i)k[i].cw(b8)
b8.a.useProgram(b6)
b7.ga7(b7).dr()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cS().bu}}
O.hR.prototype={
$2:function(a,b){return this.b.push(new A.b9(a,C.b.ag(b+3,4)*4))},
$S:6}
O.hS.prototype={
$2:function(a,b){return C.b.a8(a.a,b.a)},
$S:42}
O.hT.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.b.ag(b+3,4)*4))},
$S:6}
O.hU.prototype={
$2:function(a,b){return C.b.a8(a.a,b.a)},
$S:43}
O.hV.prototype={
$2:function(a,b){return this.b.push(new A.bl(a,C.b.ag(b+3,4)*4))},
$S:6}
O.hW.prototype={
$2:function(a,b){return C.b.a8(a.a,b.a)},
$S:44}
O.hX.prototype={
$2:function(a,b){return this.b.push(new A.bm(a,C.b.ag(b+3,4)*4))},
$S:6}
O.hY.prototype={
$2:function(a,b){return C.b.a8(a.a,b.a)},
$S:45}
O.hL.prototype={
bX:function(a){var s=this,r=s.f
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.a.a1(new D.w(s.b,r,a))}},
aD:function(){this.cG()
this.bX(1)},
sa4:function(a,b){var s=this
if(b<=0){s.bY(new A.af(!1,!1,!1))
s.bX(0)}else{s.bY(new A.af(!0,!1,!1))
s.bX(b>=1?1:b)}}}
O.dQ.prototype={
aD:function(){},
bY:function(a){var s,r,q=this
if(!q.c.n(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aD()
s=q.a
s.a=null
s.a1(null)}}}
O.hM.prototype={}
O.cv.prototype={
d5:function(a){var s,r=this
if(!r.f.n(0,a)){s=r.f
r.f=a
r.a.a1(new D.w(r.b+".color",s,a))}},
aD:function(){this.cG()
this.d5(new V.O(1,1,1))},
sY:function(a,b){this.bY(new A.af(!0,!1,!1))
this.d5(b)}}
O.hO.prototype={}
O.hP.prototype={
aD:function(){var s,r=this
r.cH()
s=r.ch
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.a1(new D.w(r.b+".refraction",s,1))}}}
O.hQ.prototype={
aD:function(){var s,r=this
r.cH()
s=r.ch
$.y().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
r.a.a1(new D.w(r.b+".shininess",s,100))}}}
O.il.prototype={}
X.hr.prototype={
gq:function(){var s=this.x
return s==null?this.x=D.G():s}}
X.e4.prototype={
gq:function(){var s=this.f
return s==null?this.f=D.G():s},
aA:function(a){var s=this.f
return s==null?null:s.C(a)},
el:function(){return this.aA(null)},
sX:function(a){var s,r,q=this
if(!J.z(q.b,a)){s=q.b
if(s!=null)s.gq().A(0,q.gbn())
r=q.b
q.b=a
if(a!=null)a.gq().j(0,q.gbn())
q.aA(new D.w("mover",r,q.b))}},
saJ:function(a){var s,r,q=this
if(!J.z(q.a,a)){s=q.a
if(s!=null)s.gq().A(0,q.gbn())
r=q.a
q.a=a
if(a!=null)a.gq().j(0,q.gbn())
q.aA(new D.w("premover",r,q.a))}}}
X.ij.prototype={}
V.ib.prototype={
c2:function(a,b){var s,r,q,p,o
a=C.b.ha(a,0,4)
s=P.kK(C.o,b,C.f,!1)
r=document.createElement("div")
r.className="textHeader"
r.id=s
q=r.style
q.toString
p=""+(28-a*3)+"px"
q.fontSize=p
o=W.lx()
o.href="#"+s
o.textContent=b
r.appendChild(o).toString
this.a.appendChild(r).toString},
ap:function(a){var s,r,q,p,o,n,m=this.fO(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.R(C.a.ho(a)),s=new P.bU(m.e3(new H.bD(s,s.gk(s))).a());s.u();){r=s.gH(s)
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
if(H.l6(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kK(C.o,r,C.f,!1)
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
c3:function(a){var s=W.k7()
s.className="pageLargeCanvas"
s.id=a
this.a.appendChild(s).toString},
fO:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.ip(P.P(s,t.u),P.P(s,t.x),P.kc(s))
h.d=h.K(0,q)
s=h.K(0,q).t(0,p)
r=new K.X([])
r.Z(new H.R("*"))
s.a.push(r)
s.c=!0
s=[]
h.K(0,p).t(0,p).a.push(new K.aV(s))
r=new K.X([])
r.Z(new H.R("*"))
s.push(r)
r=h.K(0,p).t(0,"BoldEnd")
s=new K.X([])
s.Z(new H.R("*"))
r.a.push(s)
r.c=!0
r=h.K(0,q).t(0,o)
s=new K.X([])
s.Z(new H.R("_"))
r.a.push(s)
r.c=!0
r=[]
h.K(0,o).t(0,o).a.push(new K.aV(r))
s=new K.X([])
s.Z(new H.R("_"))
r.push(s)
s=h.K(0,o).t(0,n)
r=new K.X([])
r.Z(new H.R("_"))
s.a.push(r)
s.c=!0
s=h.K(0,q).t(0,m)
r=new K.X([])
r.Z(new H.R("`"))
s.a.push(r)
s.c=!0
s=[]
h.K(0,m).t(0,m).a.push(new K.aV(s))
r=new K.X([])
r.Z(new H.R("`"))
s.push(r)
r=h.K(0,m).t(0,"CodeEnd")
s=new K.X([])
s.Z(new H.R("`"))
r.a.push(s)
r.c=!0
r=h.K(0,q).t(0,l)
s=new K.X([])
s.Z(new H.R("["))
r.a.push(s)
r.c=!0
r=h.K(0,l).t(0,k)
s=new K.X([])
s.Z(new H.R("|"))
r.a.push(s)
s=h.K(0,l).t(0,j)
r=new K.X([])
r.Z(new H.R("]"))
s.a.push(r)
s.c=!0
s=[]
h.K(0,l).t(0,l).a.push(new K.aV(s))
r=new K.X([])
r.Z(new H.R("|]"))
s.push(r)
r=h.K(0,k).t(0,j)
s=new K.X([])
s.Z(new H.R("]"))
r.a.push(s)
r.c=!0
r=[]
h.K(0,k).t(0,k).a.push(new K.aV(r))
s=new K.X([])
s.Z(new H.R("|]"))
r.push(s)
h.K(0,q).t(0,i).a.push(new K.fX())
s=[]
h.K(0,i).t(0,i).a.push(new K.aV(s))
r=new K.X([])
r.Z(new H.R("*_`["))
s.push(r)
r=h.K(0,"BoldEnd")
r.d=r.a.bl(p)
r=h.K(0,n)
r.d=r.a.bl(o)
r=h.K(0,"CodeEnd")
r.d=r.a.bl(m)
r=h.K(0,j)
r.d=r.a.bl("Link")
r=h.K(0,i)
r.d=r.a.bl(i)
return this.b=h}}
V.id.prototype={
$1:function(a){P.kq(C.i,new V.ic(this.a))},
$S:5}
V.ic.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.c.au(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.u(-0.01*s)+"px"
q.top=r},
$S:4}
M.jk.prototype={
$1:function(a){this.a.b=!0},
$S:0}
M.jl.prototype={
$1:function(a){this.a.b=!1},
$S:0}
M.jm.prototype={
$1:function(a){var s,r,q,p,o,n,m=this
t.Z.a(a)
s=m.a
if(!s.b)return
r=s.a=s.a+a.z.a5(a.d).w(0,2).T(0,a.c.gad()).b
if(r<-0.1)r=-0.1
else if(r>1.1)r=1.1
s.a=r
m.b.sL(0,V.a1(0,1-2*r,0))
s=s.a
q=s<=0||s>=1
p=m.c
o=m.d
if(q)o.b=p.b=!1
else{n=Math.sin(s*3.141592653589793)
m.e.sL(0,V.bG(n,n,n,1))
o.b=p.b=!0}},
$S:0}
M.jn.prototype={
$1:function(a){this.a.b=!0},
$S:0}
M.jo.prototype={
$1:function(a){this.a.b=!1},
$S:0}
M.jp.prototype={
$1:function(a){var s,r,q,p,o,n,m=this
t.Z.a(a)
s=m.a
if(!s.b)return
r=s.a=s.a+a.z.a5(a.d).w(0,2).T(0,a.c.gad()).b
if(r<-0.1)r=-0.1
else if(r>1.1)r=1.1
s.a=r
m.b.sL(0,V.a1(0,1-2*r,0))
s=s.a
q=s<=0||s>=1
p=m.c
o=m.d
if(q)o.b=p.b=!1
else{n=Math.sin(s*3.141592653589793)
m.e.sL(0,V.bG(n,n,n,1))
o.b=p.b=!0}},
$S:0}
M.jq.prototype={
$1:function(a){this.a.b=!0},
$S:0}
M.jr.prototype={
$1:function(a){this.a.b=!1},
$S:0}
M.js.prototype={
$1:function(a){var s,r,q,p,o,n,m=this
t.Z.a(a)
s=m.a
if(!s.b)return
r=a.c
q=a.d
if(new V.D((q.a-r.a-r.c*0.5)*2,(q.b-r.b-r.d*0.5)*2).T(0,r.gad()).a>0)return
p=s.a=s.a+a.z.a5(q).w(0,2).T(0,r.gad()).b
if(p<-0.1)p=-0.1
else if(p>1.1)p=1.1
s.a=p
m.b.sL(0,V.a1(0,1-2*p,0))
s=s.a
r=s<=0||s>=1
q=m.c
o=m.d
if(r)o.b=q.b=!1
else{n=Math.sin(s*3.141592653589793)
m.e.sL(0,V.bG(n,n,n,1))
o.b=q.b=!0}a.b=!1},
$S:0};(function aliases(){var s=J.a.prototype
s.ec=s.i
s=J.bf.prototype
s.ed=s.i
s=K.dD.prototype
s.eb=s.aY
s.bB=s.i
s=O.dQ.prototype
s.cG=s.aD
s=O.cv.prototype
s.cH=s.aD})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mM","lM",46)
r(P,"nq","mf",12)
r(P,"nr","mg",12)
r(P,"ns","mh",12)
q(P,"kV","nl",4)
r(W,"oV","hg",32)
var k
p(k=E.bA.prototype,"gdT",0,0,null,["$1","$0"],["dU","hx"],1,0)
p(k,"gdV",0,0,null,["$1","$0"],["dW","hy"],1,0)
p(k,"gdR",0,0,null,["$1","$0"],["dS","hw"],1,0)
p(k,"gdP",0,0,null,["$1","$0"],["dQ","ht"],1,0)
o(k,"ghr","hs",8)
o(k,"ghu","hv",8)
p(k=E.eq.prototype,"gcI",0,0,null,["$1","$0"],["cK","cJ"],1,0)
n(k,"ghK","e1",4)
m(k=X.eL.prototype,"gf1","f2",5)
m(k,"geQ","eR",5)
m(k,"geW","eX",2)
m(k,"gf5","f6",17)
m(k,"gf3","f4",17)
m(k,"gf9","fa",2)
m(k,"gfd","fe",2)
m(k,"gf_","f0",2)
m(k,"gfb","fc",2)
m(k,"geY","eZ",2)
m(k,"gff","fg",23)
m(k,"gfh","fi",5)
m(k,"gfA","fB",9)
m(k,"gfu","fv",9)
m(k,"gfw","fz",9)
p(k=D.cp.prototype,"gcZ",0,0,null,["$1","$0"],["d_","f7"],1,0)
m(k,"gfj","fk",25)
o(k,"geK","eL",15)
o(k,"gfn","fo",15)
l(V.a0.prototype,"gk","bh",11)
l(V.q.prototype,"gk","bh",11)
l(V.b0.prototype,"gk","bh",11)
p(k=U.bB.prototype,"gaR",0,0,null,["$1","$0"],["N","ac"],1,0)
o(k,"geh","ei",14)
o(k,"gfl","fm",14)
p(k=U.cO.prototype,"gaR",0,0,null,["$1","$0"],["N","ac"],1,0)
m(k,"gbM","bN",10)
m(k,"gbO","bP",10)
m(k,"gbQ","bR",10)
p(k=U.cP.prototype,"gaR",0,0,null,["$1","$0"],["N","ac"],1,0)
m(k,"gbM","bN",0)
m(k,"gbO","bP",0)
m(k,"gbQ","bR",0)
m(k,"geE","eF",0)
m(k,"geG","eH",0)
m(k,"gfY","fZ",0)
m(k,"gfW","fX",0)
m(k,"gfU","fV",0)
m(U.cQ.prototype,"geI","eJ",0)
p(k=M.c8.prototype,"gaf",0,0,null,["$1","$0"],["ab","bD"],1,0)
o(k,"gfp","fq",18)
o(k,"gfs","ft",18)
p(k=M.cf.prototype,"gaf",0,0,null,["$1","$0"],["ab","bD"],1,0)
o(k,"geS","eT",8)
o(k,"geU","eV",8)
m(k=O.dF.prototype,"gfQ","fR",35)
p(k,"gh_",0,1,null,["$2$color","$1"],["da","h0"],36,0)
p(k=O.dP.prototype,"gcM",0,0,null,["$1","$0"],["a1","ej"],1,0)
p(k,"gd2",0,0,null,["$1","$0"],["d3","fK"],1,0)
o(k,"geM","eN",21)
o(k,"geO","eP",21)
p(X.e4.prototype,"gbn",0,0,null,["$1","$0"],["aA","el"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.Q,null)
q(P.Q,[H.jB,J.a,J.a7,P.F,P.cV,P.h,H.bD,P.dG,H.ci,H.eJ,H.it,H.i2,H.ft,H.by,P.Y,H.hF,H.dO,H.hA,H.am,H.f6,P.iZ,P.bT,P.bU,P.eR,P.el,P.em,P.j1,P.d9,P.iV,P.cU,P.C,P.ed,P.ds,P.j0,P.Z,P.cd,P.e3,P.cL,P.f3,P.hq,P.ak,P.bn,W.h8,W.jx,W.jL,W.H,W.cj,P.fm,K.fX,K.dD,K.X,L.ei,L.er,L.es,L.ip,O.bz,O.cx,E.h2,E.bA,E.bx,E.bK,E.f0,E.i5,E.eq,Z.eO,Z.eP,Z.c5,Z.dr,Z.ck,Z.b2,D.h4,D.ch,D.S,X.c6,X.dL,X.hC,X.hJ,X.a2,X.i1,X.iq,X.eL,V.O,V.K,V.hj,V.cw,V.bF,V.D,V.J,V.al,V.e9,V.a0,V.q,V.b0,U.cO,U.cP,U.cQ,M.cf,A.fZ,A.h_,A.af,A.b9,A.bc,A.bl,A.bm,A.hN,A.ez,A.eA,A.eD,A.eG,A.iw,A.iC,F.ai,F.hn,F.aS,F.hE,F.i3,F.an,F.cJ,F.cK,F.bO,F.ap,F.p,F.a9,F.ad,F.iK,F.iL,F.b1,O.il,O.dQ,O.hO,X.ij,X.e4,V.ib])
q(J.a,[J.dH,J.co,J.bf,J.as,J.bC,J.be,H.cA,W.c,W.fW,W.dq,W.ax,W.E,W.eW,W.ag,W.hb,W.hc,W.eX,W.cc,W.eZ,W.hd,W.i,W.f4,W.aR,W.ht,W.f8,W.hI,W.hZ,W.fc,W.fd,W.aU,W.fe,W.fg,W.aW,W.fk,W.fn,W.aY,W.fo,W.aZ,W.fu,W.au,W.fy,W.io,W.b_,W.fA,W.ir,W.iE,W.fG,W.fI,W.fK,W.fM,W.fO,P.bh,P.fa,P.bk,P.fi,P.i4,P.fv,P.bp,P.fC,P.h0,P.eS,P.cH,P.fr])
q(J.bf,[J.e5,J.bP,J.aB])
r(J.dJ,J.as)
q(J.bC,[J.cn,J.dI])
q(P.F,[H.dM,P.ev,H.dK,H.eI,H.eb,H.f1,P.dm,P.e0,P.av,P.eK,P.eH,P.ej,P.du,P.dw])
r(P.cq,P.cV)
q(P.cq,[H.bQ,W.eU,W.eT,P.dB])
r(H.R,H.bQ)
q(P.h,[H.j,H.bi,H.cR,P.cm])
r(H.ce,H.bi)
q(P.dG,[H.ct,H.eQ])
r(H.cD,P.ev)
q(H.by,[H.ik,H.hB,H.je,H.jf,H.jg,P.iP,P.iO,P.iQ,P.iR,P.j_,P.j9,P.iX,P.iY,P.hK,P.he,P.hf,W.i_,W.i0,W.i9,W.ih,W.iS,P.j4,P.ja,P.ho,P.hp,P.h1,E.i6,E.i7,E.i8,E.im,D.hl,D.hm,F.j2,F.jb,F.ia,F.iN,F.iM,F.iH,F.iI,O.hu,O.hv,O.hx,O.hw,O.hy,O.hz,O.hR,O.hS,O.hT,O.hU,O.hV,O.hW,O.hX,O.hY,V.id,V.ic,M.jk,M.jl,M.jm,M.jn,M.jo,M.jp,M.jq,M.jr,M.js])
q(H.ik,[H.ig,H.c2])
r(P.cs,P.Y)
r(H.W,P.cs)
r(H.aT,H.j)
r(H.bJ,H.cA)
q(H.bJ,[H.cX,H.cZ])
r(H.cY,H.cX)
r(H.bj,H.cY)
r(H.d_,H.cZ)
r(H.cz,H.d_)
q(H.cz,[H.dV,H.dW,H.dX,H.dY,H.dZ,H.cB,H.e_])
r(H.d6,H.f1)
r(P.d3,P.cm)
r(P.iW,P.j1)
r(P.d0,P.d9)
r(P.cT,P.d0)
r(P.dv,P.em)
r(P.hh,P.ds)
r(P.iF,P.hh)
r(P.iG,P.dv)
q(P.av,[P.cG,P.dE])
q(W.c,[W.v,W.dA,W.aE,W.d1,W.aF,W.ao,W.d4,W.eN,W.bS,P.dp,P.aP])
q(W.v,[W.N,W.ar])
q(W.N,[W.l,P.k])
q(W.l,[W.dk,W.dl,W.ba,W.dC,W.ec])
r(W.h7,W.ax)
r(W.ca,W.eW)
q(W.ag,[W.h9,W.ha])
r(W.eY,W.eX)
r(W.cb,W.eY)
r(W.f_,W.eZ)
r(W.dy,W.f_)
r(W.aQ,W.dq)
r(W.f5,W.f4)
r(W.dz,W.f5)
r(W.f9,W.f8)
r(W.bd,W.f9)
r(W.aH,W.i)
q(W.aH,[W.bg,W.ab,W.bo])
r(W.dS,W.fc)
r(W.dT,W.fd)
r(W.ff,W.fe)
r(W.dU,W.ff)
r(W.fh,W.fg)
r(W.cC,W.fh)
r(W.fl,W.fk)
r(W.e6,W.fl)
r(W.ea,W.fn)
r(W.d2,W.d1)
r(W.ef,W.d2)
r(W.fp,W.fo)
r(W.eg,W.fp)
r(W.ek,W.fu)
r(W.fz,W.fy)
r(W.eo,W.fz)
r(W.d5,W.d4)
r(W.ep,W.d5)
r(W.fB,W.fA)
r(W.et,W.fB)
r(W.b3,W.ab)
r(W.fH,W.fG)
r(W.eV,W.fH)
r(W.cS,W.cc)
r(W.fJ,W.fI)
r(W.f7,W.fJ)
r(W.fL,W.fK)
r(W.cW,W.fL)
r(W.fN,W.fM)
r(W.fq,W.fN)
r(W.fP,W.fO)
r(W.fx,W.fP)
r(W.f2,P.el)
r(P.ac,P.fm)
r(P.fb,P.fa)
r(P.dN,P.fb)
r(P.fj,P.fi)
r(P.e1,P.fj)
r(P.fw,P.fv)
r(P.en,P.fw)
r(P.fD,P.fC)
r(P.eu,P.fD)
r(P.dn,P.eS)
r(P.e2,P.aP)
r(P.fs,P.fr)
r(P.eh,P.fs)
q(K.dD,[K.aV,L.is])
q(E.h2,[Z.c4,A.bN])
q(D.S,[D.az,D.aA,D.w,X.e7])
q(X.e7,[X.cr,X.bH,X.bI,X.cM])
q(O.bz,[D.cp,U.bB,M.c8])
q(D.h4,[U.h5,U.a3])
r(U.c9,U.a3)
q(A.bN,[A.cl,A.cu])
q(A.iw,[A.cN,A.iz,A.iA,A.iB,A.ix,A.ew,A.iy,A.ex,A.ey,A.iD,A.eB,A.eC,A.eE,A.eF])
r(F.ie,F.hn)
r(F.iv,F.hE)
r(F.eM,F.iK)
r(F.iJ,F.iL)
q(O.il,[O.dF,O.dP])
q(O.dQ,[O.hL,O.hM,O.cv])
q(O.cv,[O.hP,O.hQ])
r(X.hr,X.ij)
s(H.bQ,H.eJ)
s(H.cX,P.C)
s(H.cY,H.ci)
s(H.cZ,P.C)
s(H.d_,H.ci)
s(P.cV,P.C)
s(P.d9,P.ed)
s(W.eW,W.h8)
s(W.eX,P.C)
s(W.eY,W.H)
s(W.eZ,P.C)
s(W.f_,W.H)
s(W.f4,P.C)
s(W.f5,W.H)
s(W.f8,P.C)
s(W.f9,W.H)
s(W.fc,P.Y)
s(W.fd,P.Y)
s(W.fe,P.C)
s(W.ff,W.H)
s(W.fg,P.C)
s(W.fh,W.H)
s(W.fk,P.C)
s(W.fl,W.H)
s(W.fn,P.Y)
s(W.d1,P.C)
s(W.d2,W.H)
s(W.fo,P.C)
s(W.fp,W.H)
s(W.fu,P.Y)
s(W.fy,P.C)
s(W.fz,W.H)
s(W.d4,P.C)
s(W.d5,W.H)
s(W.fA,P.C)
s(W.fB,W.H)
s(W.fG,P.C)
s(W.fH,W.H)
s(W.fI,P.C)
s(W.fJ,W.H)
s(W.fK,P.C)
s(W.fL,W.H)
s(W.fM,P.C)
s(W.fN,W.H)
s(W.fO,P.C)
s(W.fP,W.H)
s(P.fa,P.C)
s(P.fb,W.H)
s(P.fi,P.C)
s(P.fj,W.H)
s(P.fv,P.C)
s(P.fw,W.H)
s(P.fC,P.C)
s(P.fD,W.H)
s(P.eS,P.Y)
s(P.fr,P.C)
s(P.fs,W.H)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",V:"double",a6:"num",A:"String",bs:"bool",ak:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(S)","~([S?])","~(ab)","~(ai)","~()","~(i)","~(n,n)","~(A,@)","~(n,h<bA>)","~(bo)","~(S?)","V()","~(~())","~(ap)","~(n,h<a3?>)","~(n,h<hD>)","A(n)","~(bg)","~(n,h<cI>)","ak()","~(~(S))","~(n,h<bF>)","@(@)","~(b3)","N(v)","bs(h<hD>)","bs(v)","~(@,@)","~(@)","~(A,A)","~(Q?,Q?)","~(ap,V,V)","A(c)","c4(n)","ak(~())","an(an)","an(an{color:K?})","ak(@)","~(ap,ap)","~(aS)","V(V)","@(A)","n(b9,b9)","n(bc,bc)","n(bl,bl)","n(bm,bm)","n(@,@)","@(@,A)","~(a6)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.my(v.typeUniverse,JSON.parse('{"e5":"bf","bP":"bf","aB":"bf","nV":"i","o6":"i","nX":"aP","nW":"c","od":"c","og":"c","nU":"k","o8":"k","nY":"l","ob":"l","o9":"v","o5":"v","oE":"ao","o1":"aH","nZ":"ar","oh":"ar","of":"ab","oa":"bd","o2":"E","o3":"au","oc":"bj","dH":{"bs":[]},"as":{"m":["1"],"j":["1"],"h":["1"]},"dJ":{"m":["1"],"j":["1"],"h":["1"]},"bC":{"V":[],"a6":[]},"cn":{"V":[],"n":[],"a6":[]},"dI":{"V":[],"a6":[]},"be":{"A":[]},"dM":{"F":[]},"R":{"m":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"bi":{"h":["2"]},"ce":{"j":["2"],"h":["2"]},"cR":{"h":["1"]},"bQ":{"m":["1"],"j":["1"],"h":["1"]},"cD":{"F":[]},"dK":{"F":[]},"eI":{"F":[]},"eb":{"F":[]},"W":{"a_":["1","2"],"Y.V":"2"},"aT":{"j":["1"],"h":["1"]},"bJ":{"r":["1"]},"bj":{"r":["V"],"m":["V"],"j":["V"],"h":["V"]},"cz":{"r":["n"],"m":["n"],"j":["n"],"h":["n"]},"dV":{"r":["n"],"m":["n"],"j":["n"],"h":["n"]},"dW":{"r":["n"],"m":["n"],"j":["n"],"h":["n"]},"dX":{"r":["n"],"m":["n"],"j":["n"],"h":["n"]},"dY":{"r":["n"],"m":["n"],"j":["n"],"h":["n"]},"dZ":{"r":["n"],"m":["n"],"j":["n"],"h":["n"]},"cB":{"r":["n"],"m":["n"],"j":["n"],"h":["n"]},"e_":{"r":["n"],"m":["n"],"j":["n"],"h":["n"]},"f1":{"F":[]},"d6":{"F":[]},"d3":{"h":["1"]},"cT":{"j":["1"],"h":["1"]},"cm":{"h":["1"]},"cq":{"m":["1"],"j":["1"],"h":["1"]},"cs":{"a_":["1","2"]},"Y":{"a_":["1","2"]},"d0":{"j":["1"],"h":["1"]},"V":{"a6":[]},"n":{"a6":[]},"m":{"j":["1"],"h":["1"]},"dm":{"F":[]},"ev":{"F":[]},"e0":{"F":[]},"av":{"F":[]},"cG":{"F":[]},"dE":{"F":[]},"eK":{"F":[]},"eH":{"F":[]},"ej":{"F":[]},"du":{"F":[]},"e3":{"F":[]},"cL":{"F":[]},"dw":{"F":[]},"N":{"v":[],"c":[]},"bg":{"i":[]},"ab":{"i":[]},"v":{"c":[]},"aE":{"c":[]},"aF":{"c":[]},"ao":{"c":[]},"bo":{"i":[]},"aH":{"i":[]},"b3":{"ab":[],"i":[]},"l":{"N":[],"v":[],"c":[]},"dk":{"N":[],"v":[],"c":[]},"dl":{"N":[],"v":[],"c":[]},"ba":{"N":[],"v":[],"c":[]},"ar":{"v":[],"c":[]},"cb":{"m":["ac<a6>"],"r":["ac<a6>"],"j":["ac<a6>"],"h":["ac<a6>"]},"cc":{"ac":["a6"]},"dy":{"m":["A"],"r":["A"],"j":["A"],"h":["A"]},"eU":{"m":["N"],"j":["N"],"h":["N"]},"dz":{"m":["aQ"],"r":["aQ"],"j":["aQ"],"h":["aQ"]},"dA":{"c":[]},"dC":{"N":[],"v":[],"c":[]},"bd":{"m":["v"],"r":["v"],"j":["v"],"h":["v"]},"dS":{"a_":["A","@"],"Y.V":"@"},"dT":{"a_":["A","@"],"Y.V":"@"},"dU":{"m":["aU"],"r":["aU"],"j":["aU"],"h":["aU"]},"eT":{"m":["v"],"j":["v"],"h":["v"]},"cC":{"m":["v"],"r":["v"],"j":["v"],"h":["v"]},"e6":{"m":["aW"],"r":["aW"],"j":["aW"],"h":["aW"]},"ea":{"a_":["A","@"],"Y.V":"@"},"ec":{"N":[],"v":[],"c":[]},"ef":{"m":["aE"],"r":["aE"],"c":[],"j":["aE"],"h":["aE"]},"eg":{"m":["aY"],"r":["aY"],"j":["aY"],"h":["aY"]},"ek":{"a_":["A","A"],"Y.V":"A"},"eo":{"m":["ao"],"r":["ao"],"j":["ao"],"h":["ao"]},"ep":{"m":["aF"],"r":["aF"],"c":[],"j":["aF"],"h":["aF"]},"et":{"m":["b_"],"r":["b_"],"j":["b_"],"h":["b_"]},"eN":{"c":[]},"bS":{"c":[]},"eV":{"m":["E"],"r":["E"],"j":["E"],"h":["E"]},"cS":{"ac":["a6"]},"f7":{"m":["aR?"],"r":["aR?"],"j":["aR?"],"h":["aR?"]},"cW":{"m":["v"],"r":["v"],"j":["v"],"h":["v"]},"fq":{"m":["aZ"],"r":["aZ"],"j":["aZ"],"h":["aZ"]},"fx":{"m":["au"],"r":["au"],"j":["au"],"h":["au"]},"dB":{"m":["N"],"j":["N"],"h":["N"]},"ac":{"fm":["1"]},"dN":{"m":["bh"],"j":["bh"],"h":["bh"]},"e1":{"m":["bk"],"j":["bk"],"h":["bk"]},"en":{"m":["A"],"j":["A"],"h":["A"]},"k":{"N":[],"v":[],"c":[]},"eu":{"m":["bp"],"j":["bp"],"h":["bp"]},"dn":{"a_":["A","@"],"Y.V":"@"},"dp":{"c":[]},"aP":{"c":[]},"e2":{"c":[]},"eh":{"m":["a_<@,@>"],"j":["a_<@,@>"],"h":["a_<@,@>"]},"bz":{"h":["1"]},"az":{"S":[]},"aA":{"S":[]},"w":{"S":[]},"cr":{"S":[]},"bH":{"S":[]},"bI":{"S":[]},"e7":{"S":[]},"cM":{"S":[]},"cp":{"h":["hD"]},"c9":{"a3":[]},"bB":{"a3":[],"h":["a3?"]},"cO":{"a3":[]},"cP":{"a3":[]},"cQ":{"a3":[]},"c8":{"cI":[],"h":["cI"]},"cf":{"cI":[]},"cl":{"bN":[]},"cu":{"bN":[]}}'))
H.mx(v.typeUniverse,JSON.parse('{"as":1,"dJ":1,"a7":1,"j":1,"bD":1,"bi":2,"ce":2,"ct":2,"cR":1,"eQ":1,"ci":1,"eJ":1,"bQ":1,"aT":1,"dO":1,"bJ":1,"bU":1,"d3":1,"el":1,"em":2,"cU":1,"cm":1,"cq":1,"C":1,"cs":2,"Y":2,"ed":1,"d0":1,"cV":1,"d9":1,"ds":2,"dv":2,"h":1,"m":1,"dG":1,"f2":1,"H":1,"cj":1,"bz":1,"az":1,"aA":1,"w":1}'))
var u={M:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",S:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",b:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",U:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",q:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",h:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",N:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",D:"May not create a face with a first vertex which is not attached to a shape.",R:"May not create a face with vertices attached to different shapes.",E:"May not create a line with a start vertex which is not attached to a shape.",T:"May not create a line with vertices attached to different shapes.",p:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.ny
return{C:s("c5"),E:s("ba"),V:s("j<@>"),h:s("N"),Y:s("F"),B:s("i"),c:s("o7"),b:s("as<@>"),T:s("co"),M:s("aB"),p:s("r<@>"),d:s("W<n,bs>"),y:s("W<n,n>"),I:s("m<ez>"),L:s("m<eA>"),U:s("m<eD>"),R:s("m<eG>"),e:s("m<@>"),D:s("cr"),f:s("a_<@,@>"),Z:s("bH"),O:s("bI"),P:s("ak"),K:s("Q"),q:s("ac<a6>"),k:s("bN"),N:s("A"),l:s("er"),m:s("cM"),n:s("ew"),v:s("cN"),g:s("ex"),F:s("ey"),Q:s("eB"),j:s("eC"),G:s("eE"),a:s("eF"),o:s("bP"),w:s("bs"),i:s("V"),z:s("@"),S:s("n"),A:s("0&*"),_:s("Q*"),r:s("k9<ak>?"),s:s("cl?"),J:s("cu?"),X:s("Q?"),t:s("cH?"),u:s("ei?"),x:s("es?"),W:s("cN?"),H:s("a6")}})();(function constants(){var s=hunkHelpers.makeConstList
C.h=W.ba.prototype
C.E=J.a.prototype
C.a=J.as.prototype
C.b=J.cn.prototype
C.F=J.co.prototype
C.c=J.bC.prototype
C.d=J.be.prototype
C.G=J.aB.prototype
C.q=J.e5.prototype
C.j=J.bP.prototype
C.r=W.b3.prototype
C.t=W.bS.prototype
C.u=new E.bx("Browser.chrome")
C.k=new E.bx("Browser.firefox")
C.l=new E.bx("Browser.edge")
C.v=new E.bx("Browser.other")
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.C=new P.e3()
C.f=new P.iF()
C.D=new P.iG()
C.e=new P.iW()
C.i=new P.cd(0)
C.o=s([0,0,65498,45055,65535,34815,65534,18431])
C.H=new E.bK("OperatingSystem.windows")
C.p=new E.bK("OperatingSystem.mac")
C.I=new E.bK("OperatingSystem.linux")
C.J=new E.bK("OperatingSystem.other")
C.K=new P.bT(null,2)})();(function staticFields(){$.iT=null
$.aw=0
$.c3=null
$.k5=null
$.kZ=null
$.kU=null
$.l4=null
$.jc=null
$.jh=null
$.k_=null
$.bV=null
$.dd=null
$.de=null
$.jU=!1
$.aI=C.e
$.aa=[]
$.hi=null
$.ke=null
$.kf=null
$.T=null
$.aD=null
$.kk=null
$.bq=null
$.kw=null
$.ku=null
$.kv=null
$.kt=null
$.ky=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"o4","lb",function(){return H.nA("_$dart_dartClosure")})
s($,"oi","ld",function(){return H.aG(H.iu({
toString:function(){return"$receiver$"}}))})
s($,"oj","le",function(){return H.aG(H.iu({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ok","lf",function(){return H.aG(H.iu(null))})
s($,"ol","lg",function(){return H.aG(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oo","lj",function(){return H.aG(H.iu(void 0))})
s($,"op","lk",function(){return H.aG(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"on","li",function(){return H.aG(H.kr(null))})
s($,"om","lh",function(){return H.aG(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"or","lm",function(){return H.aG(H.kr(void 0))})
s($,"oq","ll",function(){return H.aG(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"oF","k3",function(){return P.me()})
s($,"oH","lq",function(){return P.m2("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oy","lp",function(){return Z.aq(0)})
s($,"os","ln",function(){return Z.aq(511)})
s($,"oA","aN",function(){return Z.aq(1)})
s($,"oz","aM",function(){return Z.aq(2)})
s($,"ou","aL",function(){return Z.aq(4)})
s($,"oB","bu",function(){return Z.aq(8)})
s($,"oC","bv",function(){return Z.aq(16)})
s($,"ov","c0",function(){return Z.aq(32)})
s($,"ow","dj",function(){return Z.aq(64)})
s($,"ox","lo",function(){return Z.aq(96)})
s($,"oD","c1",function(){return Z.aq(128)})
s($,"ot","b8",function(){return Z.aq(256)})
s($,"o0","la",function(){return new V.hj()})
r($,"o_","y",function(){return $.la()})
r($,"oe","lc",function(){var q,p,o,n,m=V.kg(),l=$.ku
if(l==null)l=$.ku=V.mb(0,1,0)
q=V.kx().E()
p=l.be(q).E()
o=q.be(p)
n=V.mc(m)
return V.aC(p.a,o.a,q.a,p.b1(0).a9(n),p.b,o.b,q.b,o.b1(0).a9(n),p.c,o.c,q.c,q.b1(0).a9(n),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cA,ArrayBufferView:H.cA,Float32Array:H.bj,Float64Array:H.bj,Int16Array:H.dV,Int32Array:H.dW,Int8Array:H.dX,Uint16Array:H.dY,Uint32Array:H.dZ,Uint8ClampedArray:H.cB,CanvasPixelArray:H.cB,Uint8Array:H.e_,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fW,HTMLAnchorElement:W.dk,HTMLAreaElement:W.dl,Blob:W.dq,HTMLCanvasElement:W.ba,CDATASection:W.ar,CharacterData:W.ar,Comment:W.ar,ProcessingInstruction:W.ar,Text:W.ar,CSSPerspective:W.h7,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.ca,MSStyleCSSProperties:W.ca,CSS2Properties:W.ca,CSSImageValue:W.ag,CSSKeywordValue:W.ag,CSSNumericValue:W.ag,CSSPositionValue:W.ag,CSSResourceValue:W.ag,CSSUnitValue:W.ag,CSSURLImageValue:W.ag,CSSStyleValue:W.ag,CSSMatrixComponent:W.ax,CSSRotation:W.ax,CSSScale:W.ax,CSSSkew:W.ax,CSSTranslation:W.ax,CSSTransformComponent:W.ax,CSSTransformValue:W.h9,CSSUnparsedValue:W.ha,DataTransferItemList:W.hb,DOMException:W.hc,ClientRectList:W.cb,DOMRectList:W.cb,DOMRectReadOnly:W.cc,DOMStringList:W.dy,DOMTokenList:W.hd,Element:W.N,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.aQ,FileList:W.dz,FileWriter:W.dA,HTMLFormElement:W.dC,Gamepad:W.aR,History:W.ht,HTMLCollection:W.bd,HTMLFormControlsCollection:W.bd,HTMLOptionsCollection:W.bd,KeyboardEvent:W.bg,Location:W.hI,MediaList:W.hZ,MIDIInputMap:W.dS,MIDIOutputMap:W.dT,MimeType:W.aU,MimeTypeArray:W.dU,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cC,RadioNodeList:W.cC,Plugin:W.aW,PluginArray:W.e6,RTCStatsReport:W.ea,HTMLSelectElement:W.ec,SourceBuffer:W.aE,SourceBufferList:W.ef,SpeechGrammar:W.aY,SpeechGrammarList:W.eg,SpeechRecognitionResult:W.aZ,Storage:W.ek,CSSStyleSheet:W.au,StyleSheet:W.au,TextTrack:W.aF,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.eo,TextTrackList:W.ep,TimeRanges:W.io,Touch:W.b_,TouchEvent:W.bo,TouchList:W.et,TrackDefaultList:W.ir,CompositionEvent:W.aH,FocusEvent:W.aH,TextEvent:W.aH,UIEvent:W.aH,URL:W.iE,VideoTrackList:W.eN,WheelEvent:W.b3,Window:W.bS,DOMWindow:W.bS,CSSRuleList:W.eV,ClientRect:W.cS,DOMRect:W.cS,GamepadList:W.f7,NamedNodeMap:W.cW,MozNamedAttrMap:W.cW,SpeechRecognitionResultList:W.fq,StyleSheetList:W.fx,SVGLength:P.bh,SVGLengthList:P.dN,SVGNumber:P.bk,SVGNumberList:P.e1,SVGPointList:P.i4,SVGStringList:P.en,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bp,SVGTransformList:P.eu,AudioBuffer:P.h0,AudioParamMap:P.dn,AudioTrackList:P.dp,AudioContext:P.aP,webkitAudioContext:P.aP,BaseAudioContext:P.aP,OfflineAudioContext:P.e2,WebGL2RenderingContext:P.cH,SQLResultSetRowList:P.eh})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.bj.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=M.nI
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
