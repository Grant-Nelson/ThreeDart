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
a[c]=function(){a[c]=function(){H.oj(b)}
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
if(a[b]!==s)H.ok(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kf(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jU:function jU(){},
iu:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mx:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nU:function(a,b,c){return a},
me:function(a,b){if(t.V.b(a))return new H.cf(a,b)
return new H.bl(a,b)},
jR:function(){return new P.bR("No element")},
m7:function(){return new P.bR("Too many elements")},
mw:function(a,b){H.ep(a,0,J.b8(a)-1,b)},
ep:function(a,b,c,d){if(c-b<=32)H.mv(a,b,c,d)
else H.mu(a,b,c,d)},
mv:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.dm(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.af()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
mu:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.W(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.W(a4+a5,2),f=g-j,e=g+j,d=J.dm(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.af()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.U(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
q=m
r=l
break}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.m(a3,a4,d.h(a3,a2))
d.m(a3,a2,b)
a2=q+1
d.m(a3,a5,d.h(a3,a2))
d.m(a3,a2,a0)
H.ep(a3,a4,r-2,a6)
H.ep(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.U(a6.$2(d.h(a3,r),b),0);)++r
for(;J.U(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.m(a3,p,d.h(a3,r))
d.m(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.m(a3,p,d.h(a3,r))
l=r+1
d.m(a3,r,d.h(a3,q))
d.m(a3,q,o)
r=l}else{d.m(a3,p,d.h(a3,q))
d.m(a3,q,o)}q=m
break}}H.ep(a3,r,q,a6)}else H.ep(a3,r,q,a6)},
dU:function dU(a){this.a=a},
o:function o(a){this.a=a},
j:function j(){},
cs:function cs(){},
aV:function aV(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bl:function bl(a,b){this.a=a
this.b=b},
cf:function cf(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=null
this.b=a
this.c=b},
cw:function cw(a,b){this.a=a
this.b=b},
bu:function bu(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
ch:function ch(){},
eX:function eX(){},
bT:function bT(){},
ls:function(a){var s,r=H.lr(a)
if(r!=null)return r
s="minified:"+a
return s},
oa:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
u:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dr(a)
return s},
cH:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cI:function(a){return H.mg(a)},
mg:function(a){var s,r,q,p
if(a instanceof P.M)return H.ad(H.c2(a),null)
if(J.dl(a)===C.L||t.o.b(a)){s=C.o(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ad(H.c2(a),null)},
kE:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mp:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(!H.ju(q))throw H.c(H.jy(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bj(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.jy(q))}return H.kE(p)},
mo:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.ju(q))throw H.c(H.jy(q))
if(q<0)throw H.c(H.jy(q))
if(q>65535)return H.mp(a)}return H.kE(a)},
jW:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.bj(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aW(a,0,1114111,null,null))},
bM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mn:function(a){var s=H.bM(a).getFullYear()+0
return s},
ml:function(a){var s=H.bM(a).getMonth()+1
return s},
mh:function(a){var s=H.bM(a).getDate()+0
return s},
mi:function(a){var s=H.bM(a).getHours()+0
return s},
mk:function(a){var s=H.bM(a).getMinutes()+0
return s},
mm:function(a){var s=H.bM(a).getSeconds()+0
return s},
mj:function(a){var s=H.bM(a).getMilliseconds()+0
return s},
e:function(a,b){if(a==null)J.b8(a)
throw H.c(H.c0(a,b))},
c0:function(a,b){var s,r="index"
if(!H.ju(b))return new P.ak(!0,b,r,null)
s=J.b8(a)
if(b<0||b>=s)return P.J(b,a,r,null,s)
return P.ej(b,r)},
nY:function(a,b,c){if(a>c)return P.aW(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aW(b,a,c,"end",null)
return new P.ak(!0,b,"end",null)},
jy:function(a){return new P.ak(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.e9()
s=new Error()
s.dartException=a
r=H.ol
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
ol:function(){return J.dr(this.dartException)},
f:function(a){throw H.c(a)},
n:function(a){throw H.c(P.au(a))},
aI:function(a){var s,r,q,p,o,n
a=H.lp(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iK:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kQ:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jV:function(a,b){var s=b==null,r=s?null:b.method
return new H.dS(a,r,s?null:b.receiver)},
aN:function(a){if(a==null)return new H.ic(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bw(a,a.dartException)
return H.nQ(a)},
bw:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nQ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bj(r,16)&8191)===10)switch(q){case 438:return H.bw(a,H.jV(H.u(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.u(s)+" (Error "+q+")"
return H.bw(a,new H.cG(p,e))}}if(a instanceof TypeError){o=$.lw()
n=$.lx()
m=$.ly()
l=$.lz()
k=$.lC()
j=$.lD()
i=$.lB()
$.lA()
h=$.lF()
g=$.lE()
f=o.ad(s)
if(f!=null)return H.bw(a,H.jV(s,f))
else{f=n.ad(s)
if(f!=null){f.method="call"
return H.bw(a,H.jV(s,f))}else{f=m.ad(s)
if(f==null){f=l.ad(s)
if(f==null){f=k.ad(s)
if(f==null){f=j.ad(s)
if(f==null){f=i.ad(s)
if(f==null){f=l.ad(s)
if(f==null){f=h.ad(s)
if(f==null){f=g.ad(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bw(a,new H.cG(s,f==null?e:f.method))}}return H.bw(a,new H.eW(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cM()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bw(a,new P.ak(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cM()
return a},
kg:function(a){var s
if(a==null)return new H.fJ(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fJ(a)},
o_:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
o9:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o9)
a.$identity=s
return s},
m0:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.eu().constructor.prototype):Object.create(new H.bz(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.as
if(typeof r!=="number")return r.S()
$.as=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.ks(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lX(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ks(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lX:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.ll,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lV:H.lU
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lY:function(a,b,c,d){var s=H.kr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ks:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.m_(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lY(r,!p,s,b)
if(r===0){p=$.as
if(typeof p!=="number")return p.S()
$.as=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c4
return new Function(p+(o==null?$.c4=H.hi("self"):o)+";return "+n+"."+H.u(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.as
if(typeof p!=="number")return p.S()
$.as=p+1
m+=p
p="return function("+m+"){return this."
o=$.c4
return new Function(p+(o==null?$.c4=H.hi("self"):o)+"."+H.u(s)+"("+m+");}")()},
lZ:function(a,b,c,d){var s=H.kr,r=H.lW
switch(b?-1:a){case 0:throw H.c(new H.em("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
m_:function(a,b){var s,r,q,p,o,n,m,l=$.c4
if(l==null)l=$.c4=H.hi("self")
s=$.kq
if(s==null)s=$.kq=H.hi("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lZ(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.u(r)+"(this."+s+");"
n=$.as
if(typeof n!=="number")return n.S()
$.as=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.u(r)+"(this."+s+", "+m+");"
n=$.as
if(typeof n!=="number")return n.S()
$.as=n+1
return new Function(o+n+"}")()},
kf:function(a,b,c,d,e,f,g){return H.m0(a,b,c,d,!!e,!!f,g)},
lU:function(a,b){return H.fX(v.typeUniverse,H.c2(a.a),b)},
lV:function(a,b){return H.fX(v.typeUniverse,H.c2(a.c),b)},
kr:function(a){return a.a},
lW:function(a){return a.c},
hi:function(a){var s,r,q,p=new H.bz("self","target","receiver","name"),o=J.jT(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jL("Field name "+a+" not found."))},
oj:function(a){throw H.c(new P.dB(a))},
o3:function(a){return v.getIsolateTag(a)},
ok:function(a){return H.f(new H.dU(a))},
pn:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oc:function(a){var s,r,q,p,o,n=$.lk.$1(a),m=$.jA[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jG[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lh.$2(a,n)
if(q!=null){m=$.jA[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jG[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jI(s)
$.jA[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jG[n]=s
return s}if(p==="-"){o=H.jI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ln(a,s)
if(p==="*")throw H.c(P.kR(n))
if(v.leafTags[n]===true){o=H.jI(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ln(a,s)},
ln:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kj(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jI:function(a){return J.kj(a,!1,null,!!a.$iw)},
oe:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jI(s)
else return J.kj(s,c,null,null)},
o7:function(){if(!0===$.kh)return
$.kh=!0
H.o8()},
o8:function(){var s,r,q,p,o,n,m,l
$.jA=Object.create(null)
$.jG=Object.create(null)
H.o6()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lo.$1(o)
if(n!=null){m=H.oe(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
o6:function(){var s,r,q,p,o,n,m=C.A()
m=H.bZ(C.B,H.bZ(C.C,H.bZ(C.p,H.bZ(C.p,H.bZ(C.D,H.bZ(C.E,H.bZ(C.F(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lk=new H.jD(p)
$.lh=new H.jE(o)
$.lo=new H.jF(n)},
bZ:function(a,b){return a(b)||b},
mb:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hF("Illegal RegExp pattern ("+String(n)+")",a))},
lq:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lp:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
km:function(a,b,c){var s=H.oh(a,b,c)
return s},
oh:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lp(b),'g'),H.nZ(c))},
iJ:function iJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cG:function cG(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a){this.a=a},
ic:function ic(a){this.a=a},
fJ:function fJ(a){this.a=a
this.b=null},
bc:function bc(){},
eB:function eB(){},
eu:function eu(){},
bz:function bz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
em:function em(a){this.a=a},
R:function R(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hL:function hL(a){this.a=a},
hO:function hO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aU:function aU(a){this.a=a},
dW:function dW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
hK:function hK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dg:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.dm(a)
r=s.gl(a)
q=P.dX(r,null,!1)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.e(q,p)
q[p]=o}return q},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c0(b,a))},
n4:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nY(a,b,c))
return b},
cC:function cC(){},
bK:function bK(){},
bm:function bm(){},
cB:function cB(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
cD:function cD(){},
e8:function e8(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
d1:function d1(){},
kJ:function(a,b){var s=b.c
return s==null?b.c=H.k8(a,b.z,!0):s},
kI:function(a,b){var s=b.c
return s==null?b.c=H.dc(a,"kx",[b.z]):s},
kK:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kK(a.z)
return s===11||s===12},
ms:function(a){return a.cy},
o0:function(a){return H.k9(v.typeUniverse,a,!1)},
b1:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.l5(a,r,!0)
case 7:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.k8(a,r,!0)
case 8:s=b.z
r=H.b1(a,s,a0,a1)
if(r===s)return b
return H.l4(a,r,!0)
case 9:q=b.Q
p=H.dk(a,q,a0,a1)
if(p===q)return b
return H.dc(a,b.z,p)
case 10:o=b.z
n=H.b1(a,o,a0,a1)
m=b.Q
l=H.dk(a,m,a0,a1)
if(n===o&&l===m)return b
return H.k6(a,n,l)
case 11:k=b.z
j=H.b1(a,k,a0,a1)
i=b.Q
h=H.nN(a,i,a0,a1)
if(j===k&&h===i)return b
return H.l3(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dk(a,g,a0,a1)
o=b.z
n=H.b1(a,o,a0,a1)
if(f===g&&n===o)return b
return H.k7(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hc("Attempted to substitute unexpected RTI kind "+c))}},
dk:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b1(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nO:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b1(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nN:function(a,b,c,d){var s,r=b.a,q=H.dk(a,r,c,d),p=b.b,o=H.dk(a,p,c,d),n=b.c,m=H.nO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fl()
s.a=q
s.b=o
s.c=m
return s},
pp:function(a,b){a[v.arrayRti]=b
return a},
nV:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.ll(s)
return a.$S()}return null},
lm:function(a,b){var s
if(H.kK(b))if(a instanceof H.bc){s=H.nV(a)
if(s!=null)return s}return H.c2(a)},
c2:function(a){var s
if(a instanceof P.M){s=a.$ti
return s!=null?s:H.ka(a)}if(Array.isArray(a))return H.l9(a)
return H.ka(J.dl(a))},
l9:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
V:function(a){var s=a.$ti
return s!=null?s:H.ka(a)},
ka:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.nb(a,s)},
nb:function(a,b){var s=a instanceof H.bc?a.__proto__.__proto__.constructor:b,r=H.n1(v.typeUniverse,s.name)
b.$ccache=r
return r},
ll:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.k9(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
na:function(a){var s,r,q,p=this
if(p===t.K)return H.dh(p,a,H.nf)
if(!H.aM(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dh(p,a,H.ni)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.ju
else if(r===t.i||r===t.H)q=H.ne
else if(r===t.N)q=H.ng
else q=r===t.cB?H.kb:null
if(q!=null)return H.dh(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.ob)){p.r="$i"+s
return H.dh(p,a,H.nh)}}else if(s===7)return H.dh(p,a,H.n8)
return H.dh(p,a,H.n6)},
dh:function(a,b,c){a.b=c
return a.b(b)},
n9:function(a){var s,r=this,q=H.n5
if(!H.aM(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.n3
else if(r===t.K)q=H.n2
else{s=H.dn(r)
if(s)q=H.n7}r.a=q
return r.a(a)},
ke:function(a){var s,r=a.y
if(!H.aM(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.ke(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
n6:function(a){var s=this
if(a==null)return H.ke(s)
return H.L(v.typeUniverse,H.lm(a,s),null,s,null)},
n8:function(a){if(a==null)return!0
return this.z.b(a)},
nh:function(a){var s,r=this
if(a==null)return H.ke(r)
s=r.r
if(a instanceof P.M)return!!a[s]
return!!J.dl(a)[s]},
n5:function(a){var s,r=this
if(a==null){s=H.dn(r)
if(s)return a}else if(r.b(a))return a
H.lc(a,r)},
n7:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lc(a,s)},
lc:function(a,b){throw H.c(H.mS(H.kX(a,H.lm(a,b),H.ad(b,null))))},
kX:function(a,b,c){var s=P.hA(a),r=H.ad(b==null?H.c2(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
mS:function(a){return new H.da("TypeError: "+a)},
a3:function(a,b){return new H.da("TypeError: "+H.kX(a,null,b))},
nf:function(a){return a!=null},
n2:function(a){if(a!=null)return a
throw H.c(H.a3(a,"Object"))},
ni:function(a){return!0},
n3:function(a){return a},
kb:function(a){return!0===a||!1===a},
la:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a3(a,"bool"))},
pc:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a3(a,"bool"))},
pb:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a3(a,"bool?"))},
pd:function(a){if(typeof a=="number")return a
throw H.c(H.a3(a,"double"))},
pf:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a3(a,"double"))},
pe:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a3(a,"double?"))},
ju:function(a){return typeof a=="number"&&Math.floor(a)===a},
jq:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a3(a,"int"))},
ph:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a3(a,"int"))},
pg:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a3(a,"int?"))},
ne:function(a){return typeof a=="number"},
pi:function(a){if(typeof a=="number")return a
throw H.c(H.a3(a,"num"))},
pk:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a3(a,"num"))},
pj:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a3(a,"num?"))},
ng:function(a){return typeof a=="string"},
jr:function(a){if(typeof a=="string")return a
throw H.c(H.a3(a,"String"))},
pm:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a3(a,"String"))},
pl:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a3(a,"String?"))},
nJ:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ad(a[q],b)
return s},
ld:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.e(a5,j)
m=C.b.S(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ad(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ad(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ad(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ad(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ad(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ad:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ad(a.z,b)
return s}if(l===7){r=a.z
s=H.ad(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ad(a.z,b)+">"
if(l===9){p=H.nP(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nJ(o,b)+">"):p}if(l===11)return H.ld(a,b,null)
if(l===12)return H.ld(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nP:function(a){var s,r=H.lr(a)
if(r!=null)return r
s="minified:"+a
return s},
l6:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
n1:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.k9(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dd(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dc(a,b,q)
n[b]=o
return o}else return m},
n_:function(a,b){return H.l8(a.tR,b)},
mZ:function(a,b){return H.l8(a.eT,b)},
k9:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.l1(H.l_(a,null,b,c))
r.set(b,s)
return s},
fX:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.l1(H.l_(a,b,c,!0))
q.set(c,r)
return r},
n0:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.k6(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b0:function(a,b){b.a=H.n9
b.b=H.na
return b},
dd:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ah(null,null)
s.y=b
s.cy=c
r=H.b0(a,s)
a.eC.set(c,r)
return r},
l5:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mX(a,b,r,c)
a.eC.set(r,s)
return s},
mX:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aM(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ah(null,null)
q.y=6
q.z=b
q.cy=c
return H.b0(a,q)},
k8:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mW(a,b,r,c)
a.eC.set(r,s)
return s},
mW:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aM(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dn(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dn(q.z))return q
else return H.kJ(a,b)}}p=new H.ah(null,null)
p.y=7
p.z=b
p.cy=c
return H.b0(a,p)},
l4:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mU(a,b,r,c)
a.eC.set(r,s)
return s},
mU:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aM(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dc(a,"kx",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ah(null,null)
q.y=8
q.z=b
q.cy=c
return H.b0(a,q)},
mY:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ah(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b0(a,s)
a.eC.set(q,r)
return r},
fW:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mT:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dc:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fW(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ah(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b0(a,r)
a.eC.set(p,q)
return q},
k6:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fW(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ah(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b0(a,o)
a.eC.set(q,n)
return n},
l3:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fW(m)
if(j>0){s=l>0?",":""
r=H.fW(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mT(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ah(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b0(a,o)
a.eC.set(q,r)
return r},
k7:function(a,b,c,d){var s,r=b.cy+("<"+H.fW(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mV(a,b,c,r,d)
a.eC.set(r,s)
return s},
mV:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b1(a,b,r,0)
m=H.dk(a,c,r,0)
return H.k7(a,n,m,c!==m)}}l=new H.ah(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b0(a,l)},
l_:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
l1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mM(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.l0(a,r,h,g,!1)
else if(q===46)r=H.l0(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b_(a.u,a.e,g.pop()))
break
case 94:g.push(H.mY(a.u,g.pop()))
break
case 35:g.push(H.dd(a.u,5,"#"))
break
case 64:g.push(H.dd(a.u,2,"@"))
break
case 126:g.push(H.dd(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.k5(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dc(p,n,o))
else{m=H.b_(p,a.e,n)
switch(m.y){case 11:g.push(H.k7(p,m,o,a.n))
break
default:g.push(H.k6(p,m,o))
break}}break
case 38:H.mN(a,g)
break
case 42:p=a.u
g.push(H.l5(p,H.b_(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.k8(p,H.b_(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.l4(p,H.b_(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fl()
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
H.k5(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.l3(p,H.b_(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.k5(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.mP(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.b_(a.u,a.e,i)},
mM:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
l0:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.l6(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.ms(o)+'"')
d.push(H.fX(s,o,n))}else d.push(p)
return m},
mN:function(a,b){var s=b.pop()
if(0===s){b.push(H.dd(a.u,1,"0&"))
return}if(1===s){b.push(H.dd(a.u,4,"1&"))
return}throw H.c(P.hc("Unexpected extended operation "+H.u(s)))},
b_:function(a,b,c){if(typeof c=="string")return H.dc(a,c,a.sEA)
else if(typeof c=="number")return H.mO(a,b,c)
else return c},
k5:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b_(a,b,c[s])},
mP:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b_(a,b,c[s])},
mO:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hc("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hc("Bad index "+c+" for "+b.i(0)))},
L:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aM(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aM(b))return!1
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
if(p===6){s=H.kJ(a,d)
return H.L(a,b,c,s,e)}if(r===8){if(!H.L(a,b.z,c,d,e))return!1
return H.L(a,H.kI(a,b),c,d,e)}if(r===7){s=H.L(a,t.P,c,d,e)
return s&&H.L(a,b.z,c,d,e)}if(p===8){if(H.L(a,b,c,d.z,e))return!0
return H.L(a,b,c,H.kI(a,d),e)}if(p===7){s=H.L(a,b,c,t.P,e)
return s||H.L(a,b,c,d.z,e)}if(q)return!1
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
if(!H.L(a,k,c,j,e)||!H.L(a,j,e,k,c))return!1}return H.le(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.le(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nd(a,b,c,d,e)}return!1},
le:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
nd:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.L(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.l6(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.L(a,H.fX(a,b,l[p]),c,r[p],e))return!1
return!0},
dn:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aM(a))if(r!==7)if(!(r===6&&H.dn(a.z)))s=r===8&&H.dn(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ob:function(a){var s
if(!H.aM(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aM:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
l8:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ah:function ah(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fl:function fl(){this.c=this.b=this.a=null},
fg:function fg(){},
da:function da(a){this.a=a},
lr:function(a){return v.mangledGlobalNames[a]},
of:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jC:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kh==null){H.o7()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.kR("Return interceptor for "+H.u(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ja
if(o==null)o=$.ja=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.oc(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){o=$.ja
if(o==null)o=$.ja=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
m8:function(a){if(a<0||a>4294967295)throw H.c(P.aW(a,0,4294967295,"length",null))
return J.m9(new Array(a))},
jS:function(a){if(a<0)throw H.c(P.jL("Length must be a non-negative integer: "+a))
return new Array(a)},
m9:function(a){return J.jT(a)},
jT:function(a){a.fixed$length=Array
return a},
ma:function(a,b){return J.lO(a,b)},
dl:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cm.prototype
return J.dQ.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.cn.prototype
if(typeof a=="boolean")return J.dP.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.M)return a
return J.jC(a)},
dm:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.M)return a
return J.jC(a)},
jB:function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.M)return a
return J.jC(a)},
o1:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bs.prototype
return a},
o2:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bs.prototype
return a},
aL:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.M)return a
return J.jC(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dl(a).q(a,b)},
lL:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oa(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dm(a).h(a,b)},
lM:function(a,b,c){return J.aL(a).fo(a,b,c)},
lN:function(a,b,c,d){return J.aL(a).fI(a,b,c,d)},
lO:function(a,b){return J.o1(a).aa(a,b)},
h9:function(a,b){return J.jB(a).C(a,b)},
jK:function(a,b){return J.jB(a).E(a,b)},
lP:function(a){return J.aL(a).ga9(a)},
lQ:function(a){return J.aL(a).gd7(a)},
lR:function(a){return J.aL(a).gd9(a)},
ha:function(a){return J.dl(a).gF(a)},
ar:function(a){return J.jB(a).gL(a)},
b8:function(a){return J.dm(a).gl(a)},
ko:function(a){return J.jB(a).hk(a)},
lS:function(a,b){return J.aL(a).hn(a,b)},
lT:function(a){return J.o2(a).hw(a)},
dr:function(a){return J.dl(a).i(a)},
a:function a(){},
dP:function dP(){},
cn:function cn(){},
bi:function bi(){},
ee:function ee(){},
bs:function bs(){},
az:function az(){},
am:function am(){},
dR:function dR(){},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bG:function bG(){},
cm:function cm(){},
dQ:function dQ(){},
aT:function aT(){}},P={
mD:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nR()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c_(new P.j6(q),1)).observe(s,{childList:true})
return new P.j5(q,s,r)}else if(self.setImmediate!=null)return P.nS()
return P.nT()},
mE:function(a){self.scheduleImmediate(H.c_(new P.j7(a),0))},
mF:function(a){self.setImmediate(H.c_(new P.j8(a),0))},
mG:function(a){P.k_(C.i,a)},
k_:function(a,b){var s=C.c.W(a.a,1000)
return P.mQ(s<0?0:s,b)},
kP:function(a,b){var s=C.c.W(a.a,1000)
return P.mR(s<0?0:s,b)},
mQ:function(a,b){var s=new P.d9()
s.e8(a,b)
return s},
mR:function(a,b){var s=new P.d9()
s.e9(a,b)
return s},
p9:function(a){return new P.bX(a,1)},
mJ:function(){return C.V},
mK:function(a){return new P.bX(a,3)},
nk:function(a){return new P.d6(a)},
nG:function(){var s,r
for(s=$.bY;s!=null;s=$.bY){$.dj=null
r=s.b
$.bY=r
if(r==null)$.di=null
s.a.$0()}},
nM:function(){$.kc=!0
try{P.nG()}finally{$.dj=null
$.kc=!1
if($.bY!=null)$.kn().$1(P.li())}},
nK:function(a){var s=new P.f4(a),r=$.di
if(r==null){$.bY=$.di=s
if(!$.kc)$.kn().$1(P.li())}else $.di=r.b=s},
nL:function(a){var s,r,q,p=$.bY
if(p==null){P.nK(a)
$.dj=$.di
return}s=new P.f4(a)
r=$.dj
if(r==null){s.b=p
$.bY=$.dj=s}else{q=r.b
s.b=q
$.dj=r.b=s
if(q==null)$.di=s}},
kO:function(a,b){var s=$.aq
if(s===C.e)return P.k_(a,b)
return P.k_(a,s.fM(b))},
mz:function(a,b){var s=$.aq
if(s===C.e)return P.kP(a,b)
return P.kP(a,s.d4(b,t.ae))},
lf:function(a,b,c,d,e){P.nL(new P.jx(d,e))},
nH:function(a,b,c,d){var s,r=$.aq
if(r===c)return d.$0()
$.aq=c
s=r
try{r=d.$0()
return r}finally{$.aq=s}},
nI:function(a,b,c,d,e){var s,r=$.aq
if(r===c)return d.$1(e)
$.aq=c
s=r
try{r=d.$1(e)
return r}finally{$.aq=s}},
j6:function j6(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
d9:function d9(){this.c=0},
jl:function jl(a,b){this.a=a
this.b=b},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bX:function bX(a,b){this.a=a
this.b=b},
bv:function bv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d6:function d6(a){this.a=a},
f4:function f4(a){this.a=a
this.b=null},
ew:function ew(){},
ex:function ex(){},
jo:function jo(){},
jx:function jx(a,b){this.a=a
this.b=b},
jd:function jd(){},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
mc:function(a,b,c){return H.o_(a,new H.R(b.ak("@<0>").cF(c).ak("R<1,2>")))},
N:function(a,b){return new H.R(a.ak("@<0>").cF(b).ak("R<1,2>"))},
cq:function(a){return new P.cV(a.ak("cV<0>"))},
k4:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mL:function(a,b){var s=new P.cW(a,b)
s.c=a.e
return s},
m6:function(a,b,c){var s,r
if(P.kd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a8.push(a)
try{P.nj(a,s)}finally{if(0>=$.a8.length)return H.e($.a8,-1)
$.a8.pop()}r=P.kM(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jQ:function(a,b,c){var s,r
if(P.kd(a))return b+"..."+c
s=new P.aX(b)
$.a8.push(a)
try{r=s
r.a=P.kM(r.a,a,", ")}finally{if(0>=$.a8.length)return H.e($.a8,-1)
$.a8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kd:function(a){var s,r
for(s=$.a8.length,r=0;r<s;++r)if(a===$.a8[r])return!0
return!1},
nj:function(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.u(l.gB(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gB(l);++j
if(!l.u()){if(j<=4){b.push(H.u(p))
return}r=H.u(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gB(l);++j
for(;l.u();p=o,o=n){n=l.gB(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.u(p)
r=H.u(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
ky:function(a,b){var s,r,q=P.cq(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r)q.n(0,b.a(a[r]))
return q},
kz:function(a){var s,r={}
if(P.kd(a))return"{...}"
s=new P.aX("")
try{$.a8.push(a)
s.a+="{"
r.a=!0
J.jK(a,new P.hS(r,s))
s.a+="}"}finally{if(0>=$.a8.length)return H.e($.a8,-1)
$.a8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cV:function cV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jc:function jc(a){this.a=a
this.c=this.b=null},
cW:function cW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function cl(){},
cr:function cr(){},
D:function D(){},
cu:function cu(){},
hS:function hS(a,b){this.a=a
this.b=b},
T:function T(){},
eo:function eo(){},
d2:function d2(){},
cX:function cX(){},
de:function de(){},
dy:function dy(){},
dA:function dA(){},
hx:function hx(){},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hI:function hI(a){this.a=a},
iU:function iU(){},
iV:function iV(){},
jm:function jm(a){this.b=0
this.c=a},
m4:function(a){if(a instanceof H.bc)return a.i(0)
return"Instance of '"+H.cI(a)+"'"},
dX:function(a,b,c){var s,r=c?J.jS(a):J.m8(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hP:function(a,b){var s,r=[]
for(s=J.ar(a);s.u();)r.push(s.gB(s))
if(b)return r
return J.jT(r)},
md:function(a,b){var s,r,q=J.jS(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
jZ:function(a){var s=a,r=s.length,q=P.jX(0,null,r)
return H.mo(q<r?s.slice(0,q):s)},
mq:function(a){return new H.hK(a,H.mb(a,!1,!0,!1,!1,!1))},
kM:function(a,b,c){var s=J.ar(b)
if(!s.u())return a
if(c.length===0){do a+=H.u(s.gB(s))
while(s.u())}else{a+=H.u(s.gB(s))
for(;s.u();)a=a+c+H.u(s.gB(s))}return a},
l7:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.lK().b
s=s.test(b)}else s=!1
if(s)return b
r=C.H.fR(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jW(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
m1:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
m2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dD:function(a){if(a>=10)return""+a
return"0"+a},
ku:function(a){return new P.bf(1000*a)},
hA:function(a){if(typeof a=="number"||H.kb(a)||null==a)return J.dr(a)
if(typeof a=="string")return JSON.stringify(a)
return P.m4(a)},
hc:function(a){return new P.du(a)},
jL:function(a){return new P.ak(!1,null,null,a)},
ej:function(a,b){return new P.cJ(null,null,!0,a,b,"Value not in range")},
aW:function(a,b,c,d,e){return new P.cJ(b,c,!0,a,d,"Invalid value")},
jX:function(a,b,c){if(a>c)throw H.c(P.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aW(b,a,c,"end",null))
return b}return c},
kF:function(a,b){if(a<0)throw H.c(P.aW(a,0,null,b,null))
return a},
J:function(a,b,c,d,e){var s=e==null?J.b8(b):e
return new P.dN(s,!0,a,c,"Index out of range")},
z:function(a){return new P.eY(a)},
kR:function(a){return new P.eV(a)},
jY:function(a){return new P.bR(a)},
au:function(a){return new P.dz(a)},
d:function(a){return new P.fi(a)},
kl:function(a){H.of(a)},
Q:function Q(a,b){this.a=a
this.b=b},
bf:function bf(a){this.a=a},
ht:function ht(){},
hu:function hu(){},
G:function G(){},
du:function du(a){this.a=a},
eJ:function eJ(){},
e9:function e9(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dN:function dN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eY:function eY(a){this.a=a},
eV:function eV(a){this.a=a},
bR:function bR(a){this.a=a},
dz:function dz(a){this.a=a},
ec:function ec(){},
cM:function cM(){},
dB:function dB(a){this.a=a},
fi:function fi(a){this.a=a},
hF:function hF(a,b){this.a=a
this.b=b},
h:function h(){},
dO:function dO(){},
ag:function ag(){},
M:function M(){},
aX:function aX(a){this.a=a},
nX:function(a){var s,r,q,p
if(t.I.b(a)){s=J.lR(a)
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
return new P.db(r,q,p)},
nW:function(a){if(a instanceof P.db)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var s,r,q,p,o
if(a==null)return null
s=P.N(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
lb:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kb(a))return a
if(t.f.b(a))return P.lj(a)
if(t.d.b(a)){s=[]
J.jK(a,new P.js(s))
a=s}return a},
lj:function(a){var s={}
J.jK(a,new P.jz(s))
return s},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jz:function jz(a){this.a=a},
dI:function dI(a,b){this.a=a
this.b=b},
hD:function hD(){},
hE:function hE(){},
fC:function fC(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bk:function bk(){},
dV:function dV(){},
bn:function bn(){},
ea:function ea(){},
ie:function ie(){},
bO:function bO(){},
ey:function ey(){},
k:function k(){},
br:function br(){},
eI:function eI(){},
fq:function fq(){},
fr:function fr(){},
fy:function fy(){},
fz:function fz(){},
fL:function fL(){},
fM:function fM(){},
fU:function fU(){},
fV:function fV(){},
hf:function hf(){},
dv:function dv(){},
hg:function hg(a){this.a=a},
dw:function dw(){},
aP:function aP(){},
eb:function eb(){},
f6:function f6(){},
bN:function bN(){},
es:function es(){},
fH:function fH(){},
fI:function fI(){}},W={
kp:function(){var s=document.createElement("a")
s.toString
return s},
jM:function(){var s=document.createElement("canvas")
s.toString
return s},
m3:function(a,b,c){var s=document.body
s.toString
s=new H.bu(new W.a2(C.l.ab(s,a,b,c)),new W.hv())
return t.h.a(s.gaE(s))},
hw:function(a){return"wheel"},
cg:function(a){var s,r,q="element tag unavailable"
try{s=J.aL(a)
s.gdL(a)
q=s.gdL(a)}catch(r){H.aN(r)}return q},
jb:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kZ:function(a,b,c,d){var s=W.jb(W.jb(W.jb(W.jb(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
X:function(a,b,c,d){var s=W.lg(new W.j9(c),t.B)
if(s!=null&&!0)J.lN(a,b,s,!1)
return new W.fh(a,b,s,!1)},
kY:function(a){var s=W.kp(),r=window
s=new W.bW(new W.jg(s,r.location))
s.e2(a)
return s},
mH:function(a,b,c,d){return!0},
mI:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
l2:function(){var s=t.N
s=new W.fP(P.ky(C.r,s),P.cq(s),P.cq(s),P.cq(s),null)
s.e7(null,new H.cw(C.r,new W.jj()),["TEMPLATE"],null)
return s},
lg:function(a,b){var s=$.aq
if(s===C.e)return a
return s.d4(a,b)},
p:function p(){},
hb:function hb(){},
ds:function ds(){},
dt:function dt(){},
by:function by(){},
dx:function dx(){},
ba:function ba(){},
bb:function bb(){},
c8:function c8(){},
al:function al(){},
hm:function hm(){},
F:function F(){},
ca:function ca(){},
hn:function hn(){},
af:function af(){},
av:function av(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(){},
cc:function cc(){},
hr:function hr(){},
cd:function cd(){},
ce:function ce(){},
dE:function dE(){},
hs:function hs(){},
f7:function f7(a,b){this.a=a
this.b=b},
A:function A(){},
hv:function hv(){},
i:function i(){},
b:function b(){},
ax:function ax(){},
dG:function dG(){},
dH:function dH(){},
dJ:function dJ(){},
ay:function ay(){},
hH:function hH(){},
bg:function bg(){},
bh:function bh(){},
bF:function bF(){},
bj:function bj(){},
hQ:function hQ(){},
i6:function i6(){},
e0:function e0(){},
i7:function i7(a){this.a=a},
e1:function e1(){},
i8:function i8(a){this.a=a},
aB:function aB(){},
e2:function e2(){},
aa:function aa(){},
a2:function a2(a){this.a=a},
r:function r(){},
cE:function cE(){},
aD:function aD(){},
eg:function eg(){},
el:function el(){},
il:function il(a){this.a=a},
en:function en(){},
ao:function ao(){},
eq:function eq(){},
aF:function aF(){},
er:function er(){},
aG:function aG(){},
ev:function ev(){},
it:function it(a){this.a=a},
ai:function ai(){},
cN:function cN(){},
ez:function ez(){},
eA:function eA(){},
bS:function bS(){},
ap:function ap(){},
ac:function ac(){},
eC:function eC(){},
eD:function eD(){},
iC:function iC(){},
aH:function aH(){},
bq:function bq(){},
eH:function eH(){},
iH:function iH(){},
aJ:function aJ(){},
iT:function iT(){},
f1:function f1(){},
aZ:function aZ(){},
bU:function bU(){},
bV:function bV(){},
f8:function f8(){},
cU:function cU(){},
fm:function fm(){},
cY:function cY(){},
fG:function fG(){},
fN:function fN(){},
f5:function f5(){},
fe:function fe(a){this.a=a},
jP:function jP(a,b){this.a=a
this.$ti=b},
fh:function fh(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j9:function j9(a){this.a=a},
k3:function k3(a){this.$ti=a},
bW:function bW(a){this.a=a},
I:function I(){},
cF:function cF(a){this.a=a},
ib:function ib(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(){},
jh:function jh(){},
ji:function ji(){},
fP:function fP(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jj:function jj(){},
fO:function fO(){},
ci:function ci(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jg:function jg(a,b){this.a=a
this.b=b},
fY:function fY(a){this.a=a
this.b=0},
jn:function jn(a){this.a=a},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fj:function fj(){},
fk:function fk(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fA:function fA(){},
fB:function fB(){},
fD:function fD(){},
d4:function d4(){},
d5:function d5(){},
fE:function fE(){},
fF:function fF(){},
fK:function fK(){},
fQ:function fQ(){},
fR:function fR(){},
d7:function d7(){},
d8:function d8(){},
fS:function fS(){},
fT:function fT(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){}},K={
K:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.d("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.bh(a,0)
r=C.b.bh(b,0)
if(s>r){q=r
r=s
s=q}return new K.ig(s,r)},
aO:function aO(){},
dL:function dL(){},
a5:function a5(a){this.a=a},
ig:function ig(a,b){this.a=a
this.b=b},
q:function q(a){this.a=a}},L={
iF:function(){var s=t.N
return new L.iE(P.N(s,t.aJ),P.N(s,t.aX),P.cq(s))},
et:function et(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b){this.b=a
this.c=b},
iE:function iE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iI:function iI(a,b){this.b=a
this.c=!1
this.a=b}},O={
jN:function(){return new O.bB([])},
bB:function bB(a){this.a=a
this.c=this.b=null},
cA:function cA(a){this.a=a
this.b=null},
e_:function(a,b){return new O.cy(new V.P(0,0,0),a,b,new A.ae(!1,!1,!1))},
dY:function dY(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(){},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(){},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(){},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(){},
hT:function hT(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cx:function cx(){},
hU:function hU(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cy:function cy(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hW:function hW(a){this.b=a},
hX:function hX(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hY:function hY(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iw:function iw(){}},E={
kV:function(){var s=window.navigator.vendor
s.toString
if(C.b.w(s,"Google"))return C.y
s=window.navigator.userAgent
s.toString
if(C.b.w(s,"Firefox"))return C.m
s=window.navigator.appVersion
s.toString
if(C.b.w(s,"Trident")||C.b.w(s,"Edge"))return C.n
s=window.navigator.appName
s.toString
if(C.b.w(s,"Microsoft"))return C.n
return C.z},
kW:function(){var s=window.navigator.appVersion
s.toString
if(C.b.w(s,"Win"))return C.R
if(C.b.w(s,"Mac"))return C.t
if(C.b.w(s,"Linux"))return C.S
return C.T},
mr:function(a,b){var s
Date.now()
s=new E.ih(a,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1),new O.cA([]),new O.cA([]),new O.cA([]),[null],P.N(t.N,t.k))
s.e0(a,b)
return s},
my:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kN(a,!0,!0,!0,!1)
s=W.jM()
r=s.style
r.width="100%"
r.height="100%"
J.lQ(a).n(0,s)
return E.kN(s,!0,!0,!0,!1)},
kN:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.f.cr(a,"webgl2",P.mc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.d("Failed to get the rendering context for WebGL."))
s=E.mr(l,a)
H.jq(l.getParameter(3379))
m=H.jq(l.getParameter(34076))
r=[]
q=$.hy
p=new X.eZ(a,r,(q==null?$.hy=new E.ff(E.kV(),E.kW()):q).a===C.m?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.X(o,"contextmenu",p.geM(),!1))
r.push(W.X(a,"focus",p.geS(),!1))
r.push(W.X(a,"blur",p.geG(),!1))
r.push(W.X(o,"keyup",p.geW(),!1))
r.push(W.X(o,"keydown",p.geU(),!1))
r.push(W.X(a,"mousedown",p.gf_(),!1))
r.push(W.X(a,"mouseup",p.gf3(),!1))
r.push(W.X(a,n,p.gf1(),!1))
W.hw(a)
W.hw(a)
r.push(W.X(a,W.hw(a),p.gf5(),!1))
r.push(W.X(o,n,p.geO(),!1))
r.push(W.X(o,"mouseup",p.geQ(),!1))
r.push(W.X(o,"pointerlockchange",p.gf7(),!1))
r.push(W.X(a,"touchstart",p.gfk(),!1))
r.push(W.X(a,"touchend",p.gfg(),!1))
r.push(W.X(a,"touchmove",p.gfi(),!1))
m=new E.eE(a,s,new T.iz(l,m),p,new P.Q(Date.now(),!1))
m.cR()
return m},
hh:function hh(){},
bC:function bC(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bA:function bA(a){this.b=a},
bL:function bL(a){this.b=a},
ff:function ff(a,b){this.a=a
this.b=b},
ih:function ih(a,b,c,d,e,f,g,h){var _=this
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
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
eE:function eE(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
iB:function iB(a){this.a=a}},Z={
k2:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.dg(c)),35044)
a.bindBuffer(b,null)
return new Z.f2(b,s)},
aj:function(a){return new Z.aY(a)},
f2:function f2(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
j4:function j4(a){this.a=a},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a},
od:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.mt("Test 012"),a1=W.jM()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1).toString
a0.d_(["A test of the Material Lighting shader with cube textures and ","a directional light with a cube texture bump map."])
a0.d_(["\xab[Back to Tests|../]"])
s=document.getElementById(c)
if(s==null)H.f(P.d("Failed to find an element with the identifier, testCanvas."))
r=E.my(s,!0,!0,!0,!1)
q=O.jN()
p=new E.bC(q)
q.bd(p.gh6(),p.gh9())
p.scu(0,b)
p.sb9(b)
o=F.kL()
F.df(o,b,b,1,1,1,0,0,1)
F.df(o,b,b,1,1,0,1,0,3)
F.df(o,b,b,1,1,0,0,1,2)
F.df(o,b,b,1,1,-1,0,0,0)
F.df(o,b,b,1,1,0,-1,0,0)
F.df(o,b,b,1,1,0,0,-1,3)
o.aN()
p.scu(0,o)
q=new U.bE(V.an(),[])
q.bd(q.gey(),q.gfc())
n=r.x
m=U.hl()
l=U.hl()
k=$.bt
if(k==null)k=$.bt=new V.W(0,0)
k=new U.cR(m,l,new X.a_(!1,!1,!1),k,V.an())
m.scq(0,!0)
m.scg(6.283185307179586)
m.scj(0)
m.sa1(0,0)
m.sci(100)
m.sR(0)
m.sc2(0.5)
j=k.gaK()
m.gt().n(0,j)
l.scq(0,!0)
l.scg(6.283185307179586)
l.scj(0)
l.sa1(0,0)
l.sci(100)
l.sR(0)
l.sc2(0.5)
l.gt().n(0,j)
m=new X.a_(!1,!1,!1)
if(!k.d.q(0,m)){i=k.d
k.d=m
k.K(new D.B(a,i,m))}if(!k.r){k.r=!0
k.K(new D.B("invertY",!1,!0))}k.b6(n)
q.n(0,k)
U.hl()
if($.bt==null)$.bt=new V.W(0,0)
V.an()
m=U.hl()
l=$.bt
if(l==null)l=$.bt=new V.W(0,0)
l=new U.cQ(m,new X.a_(!1,!1,!1),l,V.an())
m.scq(0,!0)
m.scg(6.283185307179586)
m.scj(0)
m.sa1(0,0)
m.sci(100)
m.sR(0)
m.sc2(0.2)
m.gt().n(0,l.gaK())
m=new X.a_(!0,!1,!1)
if(!l.c.q(0,m)){i=l.c
l.c=m
l.K(new D.B(a,i,m))}l.b6(n)
q.n(0,l)
m=new X.a_(!1,!1,!1)
l=new U.cS(m,V.an())
k=new X.a_(!1,!1,!1)
if(!m.q(0,k)){l.b=k
l.K(new D.B(a,m,k))}l.b6(n)
q.n(0,l)
p.sb9(q)
q=r.f
h=q.cf("../resources/diceColor")
n=O.jN()
g=new O.dY(n)
n.bd(g.geC(),g.geE())
n=g.gdw()
n.gt().n(0,g.gcP())
n.gdv().n(0,g.gb1())
n=g.gdw()
f=V.k1()
m=U.kt(V.kB(V.kD(),f,new V.E(1,1,-3)))
l=new V.P(1,1,1)
k=new D.cb(new V.P(1,1,1),V.mC(),V.k1(),V.mB())
i=k.a
k.a=m
m.gt().n(0,k.ge4())
k.ar(new D.B("mover",i,k.a))
if(!k.b.q(0,l)){i=k.b
k.b=l
k.ar(new D.B("color",i,l))}n.n(0,k)
n=g.gbW()
n.saP(0,new V.P(0.2,0.2,0.2))
n=g.gc3()
n.saP(0,new V.P(0.8,0.8,0.8))
n=g.gbe()
n.saP(0,new V.P(0.7,0.7,0.7))
g.gbW().saU(h)
g.gc3().saU(h)
g.gbe().saU(q.cf("../resources/diceSpecular"))
n=g.gbe()
n.bS(new A.ae(!0,!1,n.c.c))
n.cT(10)
g.gd6().saU(q.cf("../resources/diceBumpMap"))
q=O.jN()
n=new M.dF(q)
q.bd(n.geI(),n.geK())
e=X.m5(b)
d=new X.ed(1.0471975511965976,0.1)
d.sb9(b)
m=d.c
$.C().toString
if(!(Math.abs(m-1.0471975511965976)<1e-9)){d.c=1.0471975511965976
d.aG(new D.B("fov",m,1.0471975511965976))}m=d.d
$.C().toString
if(!(Math.abs(m-0.1)<1e-9)){d.d=0.1
d.aG(new D.B("near",m,0.1))}m=d.e
$.C().toString
if(!(Math.abs(m-2000)<1e-9)){d.e=2000
d.aG(new D.B("far",m,2000))}m=n.b
if(m!==d){if(m!=null)m.gt().O(0,n.gaj())
i=n.b
n.b=d
d.gt().n(0,n.gaj())
n.as(new D.B("camera",i,n.b))}m=n.c
if(m!==e){if(m!=null)m.gt().O(0,n.gaj())
i=n.c
n.c=e
e.gt().n(0,n.gaj())
n.as(new D.B("target",i,n.c))}n.sdM(b)
n.sdM(g)
q.n(0,p)
q=n.b
if(q!=null)q.sb9(U.kt(V.aA(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=r.d
if(q!==n){if(q!=null)q.gt().O(0,r.gcA())
r.d=n
n.gt().n(0,r.gcA())
r.cB()}q=r.Q
if(q==null)q=r.Q=D.H()
n=q.b
q=n==null?q.b=[]:n
q.push(new Z.jH(a0,g))
V.og(r)},
jH:function jH(a,b){this.a=a
this.b=b}},D={
H:function(){return new D.bD()},
hj:function hj(){},
bD:function bD(){var _=this
_.c=_.b=_.a=null
_.d=0},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
O:function O(){},
aR:function aR(){},
aS:function aS(){},
B:function B(a,b,c){this.c=a
this.d=b
this.e=c},
cb:function cb(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cp:function cp(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={c7:function c7(a,b){this.a=a
this.b=b},dT:function dT(a,b){this.a=a
this.b=b},hM:function hM(a,b){this.c=a
this.d=b},ct:function ct(a,b,c){this.x=a
this.c=b
this.d=c},hR:function hR(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},bI:function bI(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},i9:function i9(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bJ:function bJ(a,b,c){this.x=a
this.c=b
this.d=c},ei:function ei(){},cO:function cO(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iG:function iG(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eZ:function eZ(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
m5:function(a){var s=new V.bd(0,0,0,1),r=$.kH
if(r==null){r=V.kG(0,0,1,1)
$.kH=r}return new X.hG(s,r)},
hG:function hG(a,b){this.a=a
this.r=b
this.x=null},
ed:function ed(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iv:function iv(){}},V={
ki:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
om:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dP(a-b,s)
return(a<0?a+s:a)+b},
y:function(a,b,c){$.C().toString
return C.b.ae(C.d.cn(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c1:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.n)(a),++p){o=a[p]
$.C().toString
n=C.b.ae(C.d.cn(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.e(l,m)
s=C.b.ae(l[m],q)
r=l.length
if(m>=r)return H.e(l,m)
l[m]=s}return l},
kk:function(a){return C.d.ht(Math.pow(2,C.d.cc(Math.log(a)/Math.log(2))))},
an:function(){var s=$.kC
return s==null?$.kC=V.aA(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aA:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kB:function(a,b,c){var s=c.M(),r=b.b7(s).M(),q=s.b7(r),p=new V.E(a.a,a.b,a.c)
return V.aA(r.a,q.a,s.a,r.aX(0).X(p),r.b,q.b,s.b,q.aX(0).X(p),r.c,q.c,s.c,s.aX(0).X(p),0,0,0,1)},
kD:function(){var s=$.aE
return s==null?$.aE=new V.ab(0,0,0):s},
kG:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ek(a,b,c,d)},
f_:function(){var s=$.kT
return s==null?$.kT=new V.E(0,0,0):s},
mB:function(){var s=$.iW
return s==null?$.iW=new V.E(-1,0,0):s},
k1:function(){var s=$.iX
return s==null?$.iX=new V.E(0,1,0):s},
mC:function(){var s=$.iY
return s==null?$.iY=new V.E(0,0,1):s},
mA:function(a,b,c){return new V.E(a,b,c)},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(){},
cz:function cz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bH:function bH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
eh:function eh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ek:function ek(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
og:function(a){P.mz(C.J,new V.jJ(a))},
mt:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.c(P.d("The html document body was null."))
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
W.X(n,"scroll",new V.ir(s),!1)
return new V.ip(o)},
at:function at(){},
jJ:function jJ(a){this.a=a},
dC:function dC(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dK:function dK(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dM:function dM(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ef:function ef(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ip:function ip(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a},
iq:function iq(a){this.a=a},
is:function is(a){this.a=a}},U={
hl:function(){return new U.hk()},
kt:function(a){var s=V.an(),r=new U.c9(s)
if(!s.q(0,a))r.a=a
return r},
hk:function hk(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
c9:function c9(a){this.a=a
this.b=null},
bE:function bE(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a0:function a0(){},
cQ:function cQ(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cR:function cR(a,b,c,d,e){var _=this
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
cS:function cS(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={dF:function dF(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mf:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+a9.gai(a9)+b0.gai(b0)+b1.gai(b1)+b2.gai(b2)+b3.gai(b3)+"_"
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
b=$.b6()
if(h){s=$.b5()
b=new Z.aY(b.a|s.a)}if(g)b=new Z.aY(b.a|$.b4().a)
if(f)b=new Z.aY(b.a|$.b7().a)
if(e)b=new Z.aY(b.a|$.b3().a)
return new A.hV(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jv:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jw:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jv(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.h8(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
np:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jv(b,r,"emission")
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
nl:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jw(b,r,"ambient")
b.a+="\n"},
nn:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jw(b,r,"diffuse")
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
nq:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jw(b,r,"invDiffuse")
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
nw:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jw(b,r,"specular")
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
ns:function(a,b){var s,r,q
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
nu:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jv(b,r,"reflect")
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
nv:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jv(b,r,"refract")
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
nm:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.h8(r)
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
s=c.a+="   return "+C.a.j(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=[]
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
n=[]
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
s=c.a+="      highLight = intensity*("+C.a.j(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.j(o," + ")+");\n"
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
no:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.h8(r)
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
if(!p.a)p=p.c
else p=!0
if(p)m.push("ambientColor")
if(a.dx){c.a+=u.k
l=[]
p=a.c
if(!p.a)p=p.c
else p=!0
if(p)l.push("diffuse(norm, lit.viewDir)")
p=a.d
if(!p.a)p=p.c
else p=!0
if(p)l.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(!p.a)p=p.c
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
c.a+="      highLight = intensity*("+C.a.j(l," + ")+");\n"}else c.a+="   highLight = "+C.a.j(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.j(m," + ")+");\n"
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
nt:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.h8(r)
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
p=c.a+="   return "+C.a.j(j," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=p
c.a=p+"{\n"
j=[]
p=a.b
if(!p.a)p=p.c
else p=!0
if(p)j.push("ambientColor")
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
p=c.a+="      highLight = intensity*("+C.a.j(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.j(j," + ")+");\n"
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
nx:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.h8(r)
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
if(m){s=$.hy
if(s==null)s=$.hy=new E.ff(E.kV(),E.kW())
p=c.a
if(s.b===C.t){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s=c.a+="   return "+C.a.j(h," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=s
c.a=s+"{\n"
h=[]
s=a.b
if(!s.a)s=s.c
else s=!0
if(s)h.push("ambientColor")
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
s=c.a+="      highLight = intensity*("+C.a.j(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.j(h," + ")+");\n"
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
nr:function(a,b){var s,r
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
s=b.a+="   return "+C.a.j(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
ny:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.aX(""),i=""+"precision mediump float;\n"
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
A.np(a,j)
A.nl(a,j)
A.nn(a,j)
A.nq(a,j)
A.nw(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.nu(a,j)
A.nv(a,j)}A.ns(a,j)
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
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.n)(p),++m)A.nm(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.n)(p),++m)A.no(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.n)(p),++m)A.nt(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.n)(p),++m)A.nx(a,p[m],j)
A.nr(a,j)}p=j.a+="// === Main ===\n"
p+="\n"
j.a=p
p+="void main()\n"
j.a=p
p+="{\n"
j.a=p
p=j.a=p+"   float alpha = alphaValue();\n"
if(s){s=p+"   vec3 norm = normal();\n"
j.a=s}else s=p
i=i?j.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n":s
l=[]
if(q){j.a=i+u.o
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
for(i=a.z,s=i.length,m=0;m<i.length;i.length===s||(0,H.n)(i),++m){q="barLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.b.aq(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.n)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.b.aq(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.n)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.b.aq(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.n)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.b.aq(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
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
i=j.a+="   vec4 objClr = vec4("+C.a.j(l," + ")+", alpha);\n"
if(r)i=j.a=i+"   objClr = colorMat*objClr;\n"
i+="   gl_FragColor = objClr;\n"
j.a=i
i=j.a=i+"}\n"
return i.charCodeAt(0)==0?i:i},
nz:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aQ+"];\n"
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
nB:function(a,b){var s
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
nA:function(a,b){var s
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
nD:function(a,b){var s,r
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
nE:function(a,b){var s,r
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
nC:function(a,b){var s
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
nF:function(a,b){var s
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
h8:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.aq(a,1)},
k0:function(a,b,c,d,e){var s=new A.iM([],a,c,e)
s.f=d
s.e=P.dX(d,0,!1)
return s},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
ae:function ae(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.dq=_.hL=_.dn=_.dm=_.hK=_.dl=_.dk=_.dj=_.hJ=_.di=_.dh=_.dg=_.hI=_.df=_.de=_.hH=_.dd=_.bn=_.bm=_.aQ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.c4=c
_.c5=d
_.c6=e
_.c7=f
_.c8=g
_.c9=h
_.ca=i
_.cb=j
_.hO=_.hN=_.hM=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b9:function b9(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
this.b=b},
hV:function hV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aQ=b5
_.bm=b6
_.bn=b7},
eN:function eN(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eO:function eO(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eR:function eR(a,b,c,d,e,f,g,h,i,j){var _=this
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
eU:function eU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cK:function cK(){},
iL:function iL(){},
iR:function iR(a){this.a=a},
cP:function cP(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eK:function eK(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
eL:function eL(a,b,c){this.a=a
this.c=b
this.d=c},
eM:function eM(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
eP:function eP(a,b,c){this.a=a
this.c=b
this.d=c},
eQ:function eQ(a,b,c){this.a=a
this.c=b
this.d=c},
eS:function eS(a,b,c){this.a=a
this.c=b
this.d=c},
eT:function eT(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jt:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
df:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.E(g,f+a2,e+a3)
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
i.d=h}k=F.jt(h)
j=F.jt(g)
a.h5(F.oi(a0,a1,new F.jp(i,F.jt(f),F.jt(e),j,k,c),b))},
oi:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)throw H.c(P.d("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.d("Must have 1 or more divisions of the height for a surface."))
s=F.kL()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.x(s,[])
if(p<0)n=0
else n=p>1?1:p
m=o.cZ(new V.bd(n,0,0,1),new V.a1(p,1))
c.$3(m,p,0)
r.push(m.c1(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.x(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cZ(new V.bd(h,g,f,1),new V.a1(p,k))
c.$3(m,p,l)
r.push(m.c1(d))}}s.gV().fJ(a+1,b+1,r)
return s},
kL:function(){return new F.im()},
kU:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cT()
h=$.lG()
s=$.b6()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b5().a)!==0)q.r=e
if((r&$.b4().a)!==0)q.x=b
if((r&$.bx().a)!==0)q.y=f
if((r&$.b7().a)!==0)q.z=g
if((r&$.lH().a)!==0)q.Q=c
if((r&$.c3().a)!==0)q.ch=i
if((r&$.b3().a)!==0)q.cx=a
return q},
jp:function jp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aw:function aw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(){this.b=this.a=null},
id:function id(){this.a=null},
im:function im(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
io:function io(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cL:function cL(a,b){this.a=a
this.b=b},
bP:function bP(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b){this.a=a
this.b=b},
cT:function cT(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j3:function j3(a){this.a=a},
j2:function j2(a){this.a=a},
x:function x(a,b){this.a=a
this.b=!1
this.c=b},
iZ:function iZ(a,b,c){this.b=a
this.c=b
this.d=c},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
f0:function f0(a,b){this.b=a
this.c=b},
j1:function j1(a){this.b=a}},T={ix:function ix(){},iy:function iy(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},iz:function iz(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},iA:function iA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jU.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gF:function(a){return H.cH(a)},
i:function(a){return"Instance of '"+H.cI(a)+"'"}}
J.dP.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ia4:1}
J.cn.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.bi.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.ee.prototype={}
J.bs.prototype={}
J.az.prototype={
i:function(a){var s=a[$.lu()]
if(s==null)return this.dX(a)
return"JavaScript function for "+J.dr(s)},
$icj:1}
J.am.prototype={
O:function(a,b){var s
if(!!a.fixed$length)H.f(P.z("remove"))
for(s=0;s<a.length;++s)if(J.U(a[s],b)){a.splice(s,1)
return!0}return!1},
a8:function(a,b){if(!!a.fixed$length)H.f(P.z("addAll"))
this.ec(a,b)
return},
ec:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.au(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.au(a))}},
j:function(a,b){var s,r,q=a.length,p=P.dX(q,"",!1)
for(s=0;s<a.length;++s){r=H.u(a[s])
if(s>=q)return H.e(p,s)
p[s]=r}return p.join(b)},
h3:function(a){return this.j(a,"")},
h0:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.au(a))}throw H.c(H.jR())},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gbp:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.jR())},
d0:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.au(a))}return!1},
aZ:function(a,b){if(!!a.immutable$list)H.f(P.z("sort"))
H.mw(a,b==null?J.nc():b)},
dT:function(a){return this.aZ(a,null)},
w:function(a,b){var s
for(s=0;s<a.length;++s)if(J.U(a[s],b))return!0
return!1},
i:function(a){return P.jQ(a,"[","]")},
gL:function(a){return new J.a9(a,a.length)},
gF:function(a){return H.cH(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.f(P.z("set length"))
if(b>a.length)H.l9(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.c0(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.f(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c0(a,b))
a[b]=c},
$it:1,
$ij:1,
$ih:1,
$im:1}
J.dR.prototype={}
J.a9.prototype={
gB:function(a){return H.V(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.n(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bG.prototype={
aa:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbo(b)
if(this.gbo(a)===s)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
ht:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.z(""+a+".toInt()"))},
cc:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.z(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
cn:function(a,b){var s
if(b>20)throw H.c(P.aW(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+s
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
dP:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cU(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cU(a,b)},
cU:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.z("Result of truncating division is "+H.u(s)+": "+H.u(a)+" ~/ "+b))},
bj:function(a,b){var s
if(a>0)s=this.fA(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fA:function(a,b){return b>31?0:a>>>b},
$iY:1,
$iZ:1}
J.cm.prototype={$il:1}
J.dQ.prototype={}
J.aT.prototype={
c0:function(a,b){if(b<0)throw H.c(H.c0(a,b))
if(b>=a.length)H.f(H.c0(a,b))
return a.charCodeAt(b)},
bh:function(a,b){if(b>=a.length)throw H.c(H.c0(a,b))
return a.charCodeAt(b)},
S:function(a,b){return a+b},
bx:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
bf:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ej(b,null))
if(b>c)throw H.c(P.ej(b,null))
if(c>a.length)throw H.c(P.ej(c,null))
return a.substring(b,c)},
aq:function(a,b){return this.bf(a,b,null)},
hw:function(a){return a.toLowerCase()},
N:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ae:function(a,b){var s=b-a.length
if(s<=0)return a
return this.N(" ",s)+a},
fP:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aW(c,0,s,null,null))
return H.lq(a,b,c)},
w:function(a,b){return this.fP(a,b,0)},
aa:function(a,b){var s
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
gl:function(a){return a.length},
$it:1,
$iv:1}
H.dU.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.o.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.c0(this.a,b)}}
H.j.prototype={}
H.cs.prototype={
gL:function(a){return new H.aV(this,this.gl(this))},
bw:function(a,b){return this.dW(0,b)}}
H.aV.prototype={
gB:function(a){return H.V(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.dm(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.au(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
H.bl.prototype={
gL:function(a){return new H.cv(J.ar(this.a),this.b)},
gl:function(a){return J.b8(this.a)},
C:function(a,b){return this.b.$1(J.h9(this.a,b))}}
H.cf.prototype={$ij:1}
H.cv.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gB(r))
return!0}s.a=null
return!1},
gB:function(a){return H.V(this).Q[1].a(this.a)}}
H.cw.prototype={
gl:function(a){return J.b8(this.a)},
C:function(a,b){return this.b.$1(J.h9(this.a,b))}}
H.bu.prototype={
gL:function(a){return new H.f3(J.ar(this.a),this.b)}}
H.f3.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gB(s)))return!0
return!1},
gB:function(a){var s=this.a
return s.gB(s)}}
H.ch.prototype={}
H.eX.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.bT.prototype={}
H.iJ.prototype={
ad:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cG.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dS.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eW.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ic.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fJ.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bc.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.ls(r==null?"unknown":r)+"'"},
$icj:1,
ghA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eB.prototype={}
H.eu.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.ls(s)+"'"}}
H.bz.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bz))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gF:function(a){var s,r=this.c
if(r==null)s=H.cH(this.a)
else s=typeof r!=="object"?J.ha(r):H.cH(r)
return(s^H.cH(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.u(this.d)+"' of "+("Instance of '"+H.cI(s)+"'")}}
H.em.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.R.prototype={
gl:function(a){return this.a},
ga_:function(a){return new H.aU(this)},
ghz:function(a){return H.me(new H.aU(this),new H.hL(this))},
fQ:function(a,b){var s=this.b
if(s==null)return!1
return this.ej(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bi(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bi(p,b)
q=r==null?n:r.b
return q}else return o.h2(b)},
h2:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cL(q,J.ha(a)&0x3ffffff)
r=this.dr(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cE(s==null?m.b=m.bP():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cE(r==null?m.c=m.bP():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bP()
p=J.ha(b)&0x3ffffff
o=m.cL(q,p)
if(o==null)m.bT(q,p,[m.bQ(b,c)])
else{n=m.dr(o,b)
if(n>=0)o[n].b=c
else o.push(m.bQ(b,c))}}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.au(s))
r=r.c}},
cE:function(a,b,c){var s=this.bi(a,b)
if(s==null)this.bT(a,b,this.bQ(b,c))
else s.b=c},
ev:function(){this.r=this.r+1&67108863},
bQ:function(a,b){var s,r=this,q=new H.hO(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.ev()
return q},
dr:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.U(a[r].a,b))return r
return-1},
i:function(a){return P.kz(this)},
bi:function(a,b){return a[b]},
cL:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
en:function(a,b){delete a[b]},
ej:function(a,b){return this.bi(a,b)!=null},
bP:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bT(r,s,r)
this.en(r,s)
return r}}
H.hL.prototype={
$1:function(a){var s=this.a
return H.V(s).Q[1].a(s.h(0,a))},
$S:function(){return H.V(this.a).ak("2(1)")}}
H.hO.prototype={}
H.aU.prototype={
gl:function(a){return this.a.a},
gL:function(a){var s=this.a,r=new H.dW(s,s.r)
r.c=s.e
return r}}
H.dW.prototype={
gB:function(a){return H.V(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.au(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jD.prototype={
$1:function(a){return this.a(a)},
$S:37}
H.jE.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.jF.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.hK.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cC.prototype={}
H.bK.prototype={
gl:function(a){return a.length},
$it:1,
$iw:1}
H.bm.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cB.prototype={
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.e3.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.e4.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.e5.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.e6.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.e7.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.cD.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.e8.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
H.d1.prototype={}
H.ah.prototype={
ak:function(a){return H.fX(v.typeUniverse,this,a)},
cF:function(a){return H.n0(v.typeUniverse,this,a)}}
H.fl.prototype={}
H.fg.prototype={
i:function(a){return this.a}}
H.da.prototype={}
P.j6.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:33}
P.j5.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:38}
P.j7.prototype={
$0:function(){this.a.$0()},
$S:10}
P.j8.prototype={
$0:function(){this.a.$0()},
$S:10}
P.d9.prototype={
e8:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c_(new P.jl(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
e9:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c_(new P.jk(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$iiD:1}
P.jl.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jk.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dZ(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bX.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.u(this.a)+")"}}
P.bv.prototype={
gB:function(a){var s=this.c
if(s==null)return this.b
return s.gB(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bX){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.ar(s)
if(o instanceof P.bv){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d6.prototype={
gL:function(a){return new P.bv(this.a())}}
P.f4.prototype={}
P.ew.prototype={}
P.ex.prototype={}
P.jo.prototype={}
P.jx.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jd.prototype={
hp:function(a){var s,r,q,p=null
try{if(C.e===$.aq){a.$0()
return}P.nH(p,p,this,a)}catch(q){s=H.aN(q)
r=H.kg(q)
P.lf(p,p,this,s,r)}},
hq:function(a,b){var s,r,q,p=null
try{if(C.e===$.aq){a.$1(b)
return}P.nI(p,p,this,a,b)}catch(q){s=H.aN(q)
r=H.kg(q)
P.lf(p,p,this,s,r)}},
hr:function(a,b){return this.hq(a,b,t.z)},
fM:function(a){return new P.je(this,a)},
d4:function(a,b){return new P.jf(this,a,b)}}
P.je.prototype={
$0:function(){return this.a.hp(this.b)},
$S:2}
P.jf.prototype={
$1:function(a){return this.a.hr(this.b,a)},
$S:function(){return this.c.ak("~(0)")}}
P.cV.prototype={
gL:function(a){var s=new P.cW(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
w:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ei(b)
return r}},
ei:function(a){var s=this.d
if(s==null)return!1
return this.bG(s[this.bD(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cG(s==null?q.b=P.k4():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cG(r==null?q.c=P.k4():r,b)}else return q.eb(0,b)},
eb:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.k4()
s=q.bD(b)
r=p[s]
if(r==null)p[s]=[q.bC(b)]
else{if(q.bG(r,b)>=0)return!1
r.push(q.bC(b))}return!0},
O:function(a,b){if((b&1073741823)===b)return this.fn(this.c,b)
else return this.fm(0,b)},
fm:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bD(b)
r=n[s]
q=o.bG(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cW(p)
return!0},
cG:function(a,b){if(a[b]!=null)return!1
a[b]=this.bC(b)
return!0},
fn:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cW(s)
delete a[b]
return!0},
cH:function(){this.r=this.r+1&1073741823},
bC:function(a){var s,r=this,q=new P.jc(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cH()
return q},
cW:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cH()},
bD:function(a){return J.ha(a)&1073741823},
bG:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.U(a[r].a,b))return r
return-1}}
P.jc.prototype={}
P.cW.prototype={
gB:function(a){return H.V(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.au(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cl.prototype={}
P.cr.prototype={$ij:1,$ih:1,$im:1}
P.D.prototype={
gL:function(a){return new H.aV(a,this.gl(a))},
C:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.au(a))}},
gdt:function(a){return this.gl(a)===0},
hv:function(a,b){var s,r,q,p,o=this
if(o.gdt(a)){s=J.jS(0)
return s}r=o.h(a,0)
q=P.dX(o.gl(a),r,!0)
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s}return q},
hu:function(a){return this.hv(a,!0)},
i:function(a){return P.jQ(a,"[","]")}}
P.cu.prototype={}
P.hS.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.u(a)
r.a=s+": "
r.a+=H.u(b)},
$S:25}
P.T.prototype={
E:function(a,b){var s,r,q
for(s=J.ar(this.ga_(a)),r=H.c2(a).ak("T.V");s.u();){q=s.gB(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.b8(this.ga_(a))},
i:function(a){return P.kz(a)},
$iS:1}
P.eo.prototype={
a8:function(a,b){var s
for(s=J.ar(b);s.u();)this.n(0,s.gB(s))},
i:function(a){return P.jQ(this,"{","}")},
C:function(a,b){var s,r,q,p,o="index"
H.nU(b,o,t.S)
P.kF(b,o)
for(s=P.mL(this,this.r),r=H.V(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.J(b,this,o,null,q))}}
P.d2.prototype={$ij:1,$ih:1}
P.cX.prototype={}
P.de.prototype={}
P.dy.prototype={}
P.dA.prototype={}
P.hx.prototype={}
P.hJ.prototype={
i:function(a){return this.a}}
P.hI.prototype={
ek:function(a,b,c){var s,r,q,p,o,n,m,l=null
for(s=a.length,r=this.a,q=r.e,p=r.d,r=r.c,o=b,n=l;o<c;++o){if(o>=s)return H.e(a,o)
switch(a[o]){case"&":m="&amp;"
break
case'"':m=r?"&quot;":l
break
case"'":m=p?"&#39;":l
break
case"<":m="&lt;"
break
case">":m="&gt;"
break
case"/":m=q?"&#47;":l
break
default:m=l}if(m!=null){if(n==null)n=new P.aX("")
if(o>b)n.a+=C.b.bf(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.b.bf(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.iU.prototype={}
P.iV.prototype={
fR:function(a){var s,r,q,p=P.jX(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jm(r)
if(q.ep(a,0,p)!==p){C.b.c0(a,p-1)
q.bV()}return new Uint8Array(r.subarray(0,H.n4(0,q.b,s)))}}
P.jm.prototype={
bV:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fH:function(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(q>=o)return H.e(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(q>=o)return H.e(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(p>=o)return H.e(r,p)
r[p]=s&63|128
return!0}else{n.bV()
return!1}},
ep:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.c0(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.bh(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fH(p,C.b.bh(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bV()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(o>=r)return H.e(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(m>=r)return H.e(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(o>=r)return H.e(s,o)
s[o]=p&63|128}}}return q}}
P.Q.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.Q&&this.a===b.a&&!0},
aa:function(a,b){return C.c.aa(this.a,b.a)},
gF:function(a){var s=this.a
return(s^C.c.bj(s,30))&1073741823},
i:function(a){var s=this,r=P.m1(H.mn(s)),q=P.dD(H.ml(s)),p=P.dD(H.mh(s)),o=P.dD(H.mi(s)),n=P.dD(H.mk(s)),m=P.dD(H.mm(s)),l=P.m2(H.mj(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bf.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bf&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
aa:function(a,b){return C.c.aa(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hu(),o=this.a
if(o<0)return"-"+new P.bf(0-o).i(0)
s=p.$1(C.c.W(o,6e7)%60)
r=p.$1(C.c.W(o,1e6)%60)
q=new P.ht().$1(o%1e6)
return""+C.c.W(o,36e8)+":"+s+":"+r+"."+q}}
P.ht.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.hu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.G.prototype={}
P.du.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hA(s)
return"Assertion failed"}}
P.eJ.prototype={}
P.e9.prototype={
i:function(a){return"Throw of null."}}
P.ak.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbF()+o+m
if(!q.a)return l
s=q.gbE()
r=P.hA(q.b)
return l+s+": "+r}}
P.cJ.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.u(q):""
else if(q==null)s=": Not greater than or equal to "+H.u(r)
else if(q>r)s=": Not in inclusive range "+H.u(r)+".."+H.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.u(r)
return s}}
P.dN.prototype={
gbF:function(){return"RangeError"},
gbE:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.eY.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eV.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bR.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dz.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hA(s)+"."}}
P.ec.prototype={
i:function(a){return"Out of Memory"},
$iG:1}
P.cM.prototype={
i:function(a){return"Stack Overflow"},
$iG:1}
P.dB.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fi.prototype={
i:function(a){return"Exception: "+this.a}}
P.hF.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.bf(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
bw:function(a,b){return new H.bu(this,b)},
gl:function(a){var s,r=this.gL(this)
for(s=0;r.u();)++s
return s},
gaE:function(a){var s,r=this.gL(this)
if(!r.u())throw H.c(H.jR())
s=r.gB(r)
if(r.u())throw H.c(H.m7())
return s},
C:function(a,b){var s,r,q
P.kF(b,"index")
for(s=this.gL(this),r=0;s.u();){q=s.gB(s)
if(b===r)return q;++r}throw H.c(P.J(b,this,"index",null,r))},
i:function(a){return P.m6(this,"(",")")}}
P.dO.prototype={}
P.ag.prototype={
gF:function(a){return P.M.prototype.gF.call(C.M,this)},
i:function(a){return"null"}}
P.M.prototype={constructor:P.M,$iM:1,
q:function(a,b){return this===b},
gF:function(a){return H.cH(this)},
i:function(a){return"Instance of '"+H.cI(this)+"'"},
toString:function(){return this.i(this)}}
P.aX.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.p.prototype={}
W.hb.prototype={
gl:function(a){return a.length}}
W.ds.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dt.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.by.prototype={$iby:1}
W.dx.prototype={}
W.ba.prototype={$iba:1}
W.bb.prototype={
cr:function(a,b,c){if(c!=null)return a.getContext(b,P.lj(c))
return a.getContext(b)},
dO:function(a,b){return this.cr(a,b,null)},
$ibb:1}
W.c8.prototype={$ic8:1}
W.al.prototype={
gl:function(a){return a.length}}
W.hm.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.ca.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.hn.prototype={}
W.af.prototype={}
W.av.prototype={}
W.ho.prototype={
gl:function(a){return a.length}}
W.hp.prototype={
gl:function(a){return a.length}}
W.hq.prototype={
gl:function(a){return a.length}}
W.cc.prototype={}
W.hr.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cd.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.ce.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.u(r)+", "
s=a.top
s.toString
return r+H.u(s)+") "+H.u(this.gaD(a))+" x "+H.u(this.gax(a))},
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aL(b)
if(s===r.gbq(b)){s=a.top
s.toString
s=s===r.gbu(b)&&this.gaD(a)===r.gaD(b)&&this.gax(a)===r.gax(b)}else s=!1}else s=!1
return s},
gF:function(a){var s,r=a.left
r.toString
r=C.d.gF(r)
s=a.top
s.toString
return W.kZ(r,C.d.gF(s),C.d.gF(this.gaD(a)),C.d.gF(this.gax(a)))},
gd5:function(a){var s=a.bottom
s.toString
return s},
gcM:function(a){return a.height},
gax:function(a){var s=this.gcM(a)
s.toString
return s},
gbq:function(a){var s=a.left
s.toString
return s},
gcm:function(a){var s=a.right
s.toString
return s},
gbu:function(a){var s=a.top
s.toString
return s},
gcX:function(a){return a.width},
gaD:function(a){var s=this.gcX(a)
s.toString
return s},
$ia7:1}
W.dE.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.hs.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.f7.prototype={
gdt:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gL:function(a){var s=this.hu(this)
return new J.a9(s,s.length)}}
W.A.prototype={
ga9:function(a){return new W.fe(a)},
gd7:function(a){var s=a.children
s.toString
return new W.f7(a,s)},
gd8:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.a7(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
ab:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kw
if(s==null){s=[]
r=new W.cF(s)
s.push(W.kY(null))
s.push(W.l2())
$.kw=r
d=r}else d=s
s=$.kv
if(s==null){s=new W.fY(d)
$.kv=s
c=s}else{s.a=d
c=s}}if($.aQ==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aQ=r
r=r.createRange()
r.toString
$.jO=r
r=$.aQ.createElement("base")
t.w.a(r)
s=s.baseURI
s.toString
r.href=s
$.aQ.head.appendChild(r).toString}s=$.aQ
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aQ
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aQ.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.w(C.P,s)}else s=!1
if(s){$.jO.selectNodeContents(q)
s=$.jO
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aQ.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aQ.body)J.ko(q)
c.cs(p)
document.adoptNode(p).toString
return p},
fT:function(a,b,c){return this.ab(a,b,c,null)},
dQ:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ab(a,b,null,null))
s.toString},
gdL:function(a){var s=a.tagName
s.toString
return s},
$iA:1}
W.hv.prototype={
$1:function(a){return t.h.b(a)},
$S:20}
W.i.prototype={$ii:1}
W.b.prototype={
fI:function(a,b,c,d){if(c!=null)this.ed(a,b,c,!1)},
ed:function(a,b,c,d){return a.addEventListener(b,H.c_(c,1),!1)},
$ib:1}
W.ax.prototype={$iax:1}
W.dG.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.dH.prototype={
gl:function(a){return a.length}}
W.dJ.prototype={
gl:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.hH.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.bh.prototype={
gd9:function(a){var s=a.data
s.toString
return s},
$ibh:1}
W.bF.prototype={$ibF:1}
W.bj.prototype={$ibj:1}
W.hQ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.i6.prototype={
gl:function(a){return a.length}}
W.e0.prototype={
h:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
ga_:function(a){var s=[]
this.E(a,new W.i7(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iS:1}
W.i7.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.e1.prototype={
h:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
ga_:function(a){var s=[]
this.E(a,new W.i8(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iS:1}
W.i8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aB.prototype={$iaB:1}
W.e2.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.aa.prototype={$iaa:1}
W.a2.prototype={
gaE:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.jY("No elements"))
if(r>1)throw H.c(P.jY("More than one element"))
s=s.firstChild
s.toString
return s},
a8:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b]).toString},
gL:function(a){var s=this.a.childNodes
return new W.ci(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.r.prototype={
hk:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
hn:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lM(s,b,a)}catch(q){H.aN(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dV(a):s},
fo:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cE.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.aD.prototype={
gl:function(a){return a.length},
$iaD:1}
W.eg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.el.prototype={
h:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
ga_:function(a){var s=[]
this.E(a,new W.il(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iS:1}
W.il.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.en.prototype={
gl:function(a){return a.length}}
W.ao.prototype={$iao:1}
W.eq.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.aF.prototype={$iaF:1}
W.er.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.aG.prototype={
gl:function(a){return a.length},
$iaG:1}
W.ev.prototype={
h:function(a,b){return a.getItem(H.jr(b))},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga_:function(a){var s=[]
this.E(a,new W.it(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iS:1}
W.it.prototype={
$2:function(a,b){return this.a.push(a)},
$S:36}
W.ai.prototype={$iai:1}
W.cN.prototype={
ab:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.by(a,b,c,d)
s=W.m3("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a2(r).a8(0,new W.a2(s))
return r}}
W.ez.prototype={
ab:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.by(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a2(C.v.ab(r,b,c,d))
r=new W.a2(r.gaE(r))
new W.a2(s).a8(0,new W.a2(r.gaE(r)))
return s}}
W.eA.prototype={
ab:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.by(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a2(C.v.ab(r,b,c,d))
new W.a2(s).a8(0,new W.a2(r.gaE(r)))
return s}}
W.bS.prototype={$ibS:1}
W.ap.prototype={$iap:1}
W.ac.prototype={$iac:1}
W.eC.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.eD.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.iC.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.aH.prototype={$iaH:1}
W.bq.prototype={$ibq:1}
W.eH.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.iH.prototype={
gl:function(a){return a.length}}
W.aJ.prototype={}
W.iT.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.f1.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={
gfW:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.z("deltaY is not supported"))},
gfV:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.z("deltaX is not supported"))},
$iaZ:1}
W.bU.prototype={
fp:function(a,b){var s=a.requestAnimationFrame(H.c_(b,1))
s.toString
return s},
eo:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bV.prototype={$ibV:1}
W.f8.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.cU.prototype={
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
q:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aL(b)
if(s===r.gbq(b)){s=a.top
s.toString
if(s===r.gbu(b)){s=a.width
s.toString
if(s===r.gaD(b)){s=a.height
s.toString
r=s===r.gax(b)
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
return W.kZ(p,s,r,C.d.gF(q))},
gcM:function(a){return a.height},
gax:function(a){var s=a.height
s.toString
return s},
gcX:function(a){return a.width},
gaD:function(a){var s=a.width
s.toString
return s}}
W.fm.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.cY.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.fG.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.fN.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.f5.prototype={
E:function(a,b){var s,r,q,p,o
for(s=this.ga_(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
b.$2(o,H.jr(q.getAttribute(o)))}},
ga_:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.e(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.fe.prototype={
h:function(a,b){return this.a.getAttribute(H.jr(b))},
gl:function(a){return this.ga_(this).length}}
W.jP.prototype={}
W.fh.prototype={}
W.j9.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.k3.prototype={}
W.bW.prototype={
e2:function(a){var s
if($.fn.a===0){for(s=0;s<262;++s)$.fn.m(0,C.O[s],W.o4())
for(s=0;s<12;++s)$.fn.m(0,C.j[s],W.o5())}},
aM:function(a){return $.lJ().w(0,W.cg(a))},
al:function(a,b,c){var s=$.fn.h(0,W.cg(a)+"::"+b)
if(s==null)s=$.fn.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaC:1}
W.I.prototype={
gL:function(a){return new W.ci(a,this.gl(a))}}
W.cF.prototype={
aM:function(a){return C.a.d0(this.a,new W.ib(a))},
al:function(a,b,c){return C.a.d0(this.a,new W.ia(a,b,c))},
$iaC:1}
W.ib.prototype={
$1:function(a){return a.aM(this.a)},
$S:19}
W.ia.prototype={
$1:function(a){return a.al(this.a,this.b,this.c)},
$S:19}
W.d3.prototype={
e7:function(a,b,c,d){var s,r,q
this.a.a8(0,c)
s=b.bw(0,new W.jh())
r=b.bw(0,new W.ji())
this.b.a8(0,s)
q=this.c
q.a8(0,C.Q)
q.a8(0,r)},
aM:function(a){return this.a.w(0,W.cg(a))},
al:function(a,b,c){var s=this,r=W.cg(a),q=s.c
if(q.w(0,r+"::"+b))return s.d.fK(c)
else if(q.w(0,"*::"+b))return s.d.fK(c)
else{q=s.b
if(q.w(0,r+"::"+b))return!0
else if(q.w(0,"*::"+b))return!0
else if(q.w(0,r+"::*"))return!0
else if(q.w(0,"*::*"))return!0}return!1},
$iaC:1}
W.jh.prototype={
$1:function(a){return!C.a.w(C.j,a)},
$S:22}
W.ji.prototype={
$1:function(a){return C.a.w(C.j,a)},
$S:22}
W.fP.prototype={
al:function(a,b,c){if(this.dY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.jj.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:46}
W.fO.prototype={
aM:function(a){var s
if(t.s.b(a))return!1
s=t.u.b(a)
if(s&&W.cg(a)==="foreignObject")return!1
if(s)return!0
return!1},
al:function(a,b,c){if(b==="is"||C.b.bx(b,"on"))return!1
return this.aM(a)},
$iaC:1}
W.ci.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lL(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gB:function(a){return H.V(this).c.a(this.d)}}
W.jg.prototype={}
W.fY.prototype={
cs:function(a){var s,r=new W.jn(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
b5:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.ko(a)
else b.removeChild(a).toString},
fu:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.lP(a)
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
o=p}l=o}catch(n){H.aN(n)}r="element unprintable"
try{r=J.dr(a)}catch(n){H.aN(n)}try{q=W.cg(a)
this.ft(a,b,l,r,q,k,j)}catch(n){if(H.aN(n) instanceof P.ak)throw n
else{this.b5(a,b)
p=window
p.toString
p="Removing corrupted element "+H.u(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
ft:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.b5(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aM(a)){m.b5(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.u(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.al(a,"is",g)){m.b5(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.ga_(f).slice(0)
for(p=f.ga_(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.e(q,p)
o=q[p]
r=m.a
n=J.lT(o)
H.jr(o)
if(!r.al(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.u(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.bg.b(a)){s=a.content
s.toString
m.cs(s)}}}
W.jn.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.fu(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.b5(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.jY("Corrupt HTML")
throw H.c(n)}}catch(p){H.aN(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:48}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fD.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fK.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fZ.prototype={}
W.h_.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h7.prototype={}
P.db.prototype={$ibh:1,
gd9:function(a){return this.a}}
P.js.prototype={
$1:function(a){this.a.push(P.lb(a))},
$S:32}
P.jz.prototype={
$2:function(a,b){this.a[a]=P.lb(b)},
$S:31}
P.dI.prototype={
gb3:function(){return new H.bl(new H.bu(this.b,new P.hD()),new P.hE())},
E:function(a,b){C.a.E(P.hP(this.gb3(),!1),b)},
m:function(a,b,c){var s=this.gb3()
J.lS(s.b.$1(J.h9(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.b8(this.gb3().a)},
h:function(a,b){var s=this.gb3()
return s.b.$1(J.h9(s.a,b))},
gL:function(a){var s=P.hP(this.gb3(),!1)
return new J.a9(s,s.length)}}
P.hD.prototype={
$1:function(a){return t.h.b(a)},
$S:20}
P.hE.prototype={
$1:function(a){return t.h.a(a)},
$S:30}
P.fC.prototype={
gcm:function(a){return this.$ti.c.a(this.a+this.c)},
gd5:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
q:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.aL(b)
if(s===r.gbq(b)){q=o.b
if(q===r.gbu(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcm(b)&&p.a(q+o.d)===r.gd5(b)}else s=!1}else s=!1}else s=!1
return s},
gF:function(a){var s=this,r=s.a,q=C.c.gF(r),p=s.b,o=C.c.gF(p),n=s.$ti.c
r=C.c.gF(n.a(r+s.c))
p=C.c.gF(n.a(p+s.d))
return H.mx(H.iu(H.iu(H.iu(H.iu(0,q),o),r),p))}}
P.a7.prototype={
gbq:function(a){return this.a},
gbu:function(a){return this.b},
gaD:function(a){return this.c},
gax:function(a){return this.d}}
P.bk.prototype={$ibk:1}
P.dV.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bn.prototype={$ibn:1}
P.ea.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.ie.prototype={
gl:function(a){return a.length}}
P.bO.prototype={$ibO:1}
P.ey.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gd7:function(a){return new P.dI(a,new W.a2(a))},
ab:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.kY(null))
o.push(W.l2())
o.push(new W.fO())
c=new W.fY(new W.cF(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.l.fT(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a2(q)
p=r.gaE(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ik:1}
P.br.prototype={$ibr:1}
P.eI.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fq.prototype={}
P.fr.prototype={}
P.fy.prototype={}
P.fz.prototype={}
P.fL.prototype={}
P.fM.prototype={}
P.fU.prototype={}
P.fV.prototype={}
P.hf.prototype={
gl:function(a){return a.length}}
P.dv.prototype={
h:function(a,b){return P.b2(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b2(s.value[1]))}},
ga_:function(a){var s=[]
this.E(a,new P.hg(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iS:1}
P.hg.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dw.prototype={
gl:function(a){return a.length}}
P.aP.prototype={}
P.eb.prototype={
gl:function(a){return a.length}}
P.f6.prototype={}
P.bN.prototype={
hs:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.nW(g))
return}if(t.l.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jL("Incorrect number or type of arguments"))},
$ibN:1}
P.es.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.J(b,a,null,null,null))
s=P.b2(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fH.prototype={}
P.fI.prototype={}
K.aO.prototype={
ay:function(a,b){return!0},
i:function(a){return"all"}}
K.dL.prototype={
ay:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)if(s[q].ay(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.a5.prototype={
ay:function(a,b){return!this.dU(0,b)},
i:function(a){return"!["+this.bz(0)+"]"}}
K.ig.prototype={
ay:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.jW(this.a),r=H.jW(this.b)
return s+".."+r}}
K.q.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.d("May not create a Set with zero characters."))
s=new H.R(t.c)
for(r=new H.aV(a,a.gl(a)),q=H.V(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.hP(new H.aU(s),!0)
C.a.dT(p)
this.a=p},
ay:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.jZ(this.a)}}
L.et.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iI(this.a.k(0,b),[])
s.push(p)
return p},
h_:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.ay(0,a))return p}return null},
i:function(a){return this.b},
cV:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.w(0,s==null?null:s.b))l+=" (consume)"
s=m.d
s=s==null?null:new H.aU(s.c)
s=J.ar(s==null?[]:s)
for(;s.u();){r=s.gB(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.w(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.n)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bz(0))}return l.charCodeAt(0)==0?l:l}}
L.eF.prototype={
i:function(a){var s=H.km(this.b,"\n","\\n"),r=H.km(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eG.prototype={
aA:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.n)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.iE.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.et(this,b,[])
s.m(0,b,r)}return r},
J:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eG(a,P.N(s,s))
r.m(0,a,q)}return q},
co:function(a){return this.hx(a)},
hx:function(a){var s=this
return P.nk(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$co(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.V(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a1.length
if(h!==0){if(!!a1.fixed$length)H.f(P.z("removeAt"))
if(0>=h)H.f(P.ej(0,null))
g=a1.splice(0,1)[0]}else{if(!r.u()){q=3
break}g=n.a(r.d)}a0.push(g);++k
h=c==null
f=h?null:c.h_(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.jZ(a0)
throw H.c(P.d("Untokenizable string [state: "+H.u(h?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.f(P.z("removeRange"))
P.jX(0,i,a0.length)
a0.splice(0,i-0)
C.a.a8(a1,a0)
a0=[]
b=[]
c=s.d
q=!m.w(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(g)
c=f.b
h=c.d
if(h!=null){e=P.jZ(b)
h=c.d
if(h==null)l=null
else{d=h.c.h(0,e)
h=new L.eF(d==null?h.b:d,e,k)
l=h}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.w(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mJ()
case 1:return P.mK(o)}}},t.aR)},
i:function(a){var s,r,q=new P.aX(""),p=this.d
if(p!=null)q.a=""+(p.cV()+"\n")
for(p=this.a,p=p.ghz(p),p=new H.cv(J.ar(p.a),p.b),s=H.V(p).Q[1];p.u();){r=s.a(p.a)
if(r!=this.d)q.a+=H.u(r==null?null:r.cV())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iI.prototype={
i:function(a){return this.b.b+": "+this.bz(0)}}
O.bB.prototype={
ct:function(a,b,c){this.b=b
this.c=a},
bd:function(a,b){return this.ct(a,null,b)},
f9:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
e1:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var s=this.a
return new J.a9(s,s.length)},
C:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.f9([b])){s=this.a
r=s.length
s.push(b)
this.e1(r,[b])}},
$ih:1}
O.cA.prototype={
gl:function(a){return this.a.length},
gt:function(){var s=this.b
return s==null?this.b=D.H():s},
aF:function(){var s=this.b
return s==null?null:s.D(null)},
gU:function(a){var s=this.a
if(s.length>0)return C.a.gbp(s)
else return V.an()},
dI:function(a){this.a.push(a)
this.aF()},
cl:function(){var s=this.a
if(s.length>0){s.pop()
this.aF()}}}
E.hh.prototype={}
E.bC.prototype={
scu:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().O(0,s.gdE())
if(b!=null)b.gt().n(0,s.gdE())
s.az(new D.B("shape",r,b))}},
sb9:function(a){var s,r,q=this
if(!J.U(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gt().O(0,q.gdC())
if(a!=null)a.gt().n(0,q.gdC())
r=q.r
q.az(new D.B("mover",s,r))}},
ap:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aW(0,b,q)
if(!J.U(o,q.x)){s=q.x
q.x=o
q.az(new D.B("matrix",s,o))}for(p=q.y.a,p=new J.a9(p,p.length),r=H.V(p).c;p.u();)r.a(p.d).ap(0,b)},
aT:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gU(q))
else o.push(p.N(0,q.gU(q)))
q.aF()
a.dJ(r.f)
s=C.a.gbp(a.dy)
if(r.d!=null)if(s!=null)s.hm(a,r)
for(p=r.y.a,p=new J.a9(p,p.length),o=H.V(p).c;p.u();)o.a(p.d).aT(a)
a.dH()
q.cl()},
az:function(a){var s=this.z
return s==null?null:s.D(a)},
a0:function(){return this.az(null)},
dF:function(a){this.e=null
this.az(a)},
hc:function(){return this.dF(null)},
dD:function(a){return this.az(a)},
hb:function(){return this.dD(null)},
dB:function(a){return this.az(a)},
h8:function(){return this.dB(null)},
h7:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdA(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bD()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a0()},
ha:function(a,b){var s,r
for(s=b.gL(b),r=this.gdA();s.u();)s.gB(s).gt().O(0,r)
this.a0()},
i:function(a){return"Unnamed entity"}}
E.bA.prototype={
i:function(a){return this.b}}
E.bL.prototype={
i:function(a){return this.b}}
E.ff.prototype={}
E.ih.prototype={
e0:function(a,b){var s=this
s.cy.gt().n(0,new E.ii(s))
s.db.gt().n(0,new E.ij(s))
s.dx.gt().n(0,new E.ik(s))},
ghj:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gU(q).N(0,s.gU(s))
q=s}return q},
dJ:function(a){var s=this.dy
return s.push(a==null?C.a.gbp(s):a)},
dH:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.ii.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.ij.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.ik.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.eE.prototype={
cC:function(a){this.dK()},
cB:function(){return this.cC(null)},
gh1:function(){var s,r=this,q=Date.now(),p=C.c.W(P.ku(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Q(q,!1)
return s/p},
cR:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cc(r*o)
r=s.clientHeight
r.toString
p=C.d.cc(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kO(C.i,this.gho())}},
dK:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.x.eo(s)
r=W.lg(new E.iB(this),t.H)
r.toString
C.x.fp(s,r)}},
hl:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cR()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Q(p,!1)
q.y=P.ku(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.aF()
p=q.db
C.a.sl(p.a,0)
p.aF()
p=q.dx
C.a.sl(p.a,0)
p.aF()
p=q.dy
C.a.sl(p,0)
p.push(null)
m.aT(q)}q=n.Q
if(q!=null)q.D(null)}catch(o){s=H.aN(o)
r=H.kg(o)
P.kl("Error: "+H.u(s))
P.kl("Stack: "+H.u(r))
throw H.c(s)}}}
E.iB.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hl()}},
$S:24}
Z.f2.prototype={}
Z.c5.prototype={
bX:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aN(q)
r=P.d('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.u(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.j4.prototype={}
Z.c6.prototype={
aR:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
bX:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.e(r,s)
r[s].bX(a)}},
hy:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aT:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.e(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cI(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.j(m,", ")+"\nAttrs:   "+C.a.j(o,", ")}}
Z.ck.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cI(this.c)+"'")+"]"}}
Z.aY.prototype={
gcv:function(a){var s=this.a,r=(s&$.b6().a)!==0?3:0
if((s&$.b5().a)!==0)r+=3
if((s&$.b4().a)!==0)r+=3
if((s&$.bx().a)!==0)r+=2
if((s&$.b7().a)!==0)r+=3
if((s&$.dp().a)!==0)r+=3
if((s&$.dq().a)!==0)r+=4
if((s&$.c3().a)!==0)++r
return(s&$.b3().a)!==0?r+4:r},
fL:function(a){var s,r=$.b6(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bx()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b7()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dp()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dq()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c3()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b3()
if((q&r.a)!==0)if(s===a)return r
return $.lI()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.b6().a)!==0)s.push("Pos")
if((r&$.b5().a)!==0)s.push("Norm")
if((r&$.b4().a)!==0)s.push("Binm")
if((r&$.bx().a)!==0)s.push("Txt2D")
if((r&$.b7().a)!==0)s.push("TxtCube")
if((r&$.dp().a)!==0)s.push("Clr3")
if((r&$.dq().a)!==0)s.push("Clr4")
if((r&$.c3().a)!==0)s.push("Weight")
if((r&$.b3().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.j(s,"|")}}
D.hj.prototype={}
D.bD.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
O:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.w(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.O(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.w(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.O(p,b)
s=p===!0||s}return s},
D:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.O():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.E(P.hP(p,!0),new D.hB(s))
r=q.b
if(r!=null){q.b=[]
C.a.E(r,new D.hC(s))}return!0},
fY:function(){return this.D(null)},
aB:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.D(s)}}}}
D.hB.prototype={
$1:function(a){a.$1(this.a)},
$S:13}
D.hC.prototype={
$1:function(a){a.$1(this.a)},
$S:13}
D.O.prototype={}
D.aR.prototype={}
D.aS.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.u(this.d)+" => "+H.u(this.e)}}
X.c7.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c7))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dT.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dT))return!1
if(this.a!==b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hM.prototype={}
X.ct.prototype={}
X.hR.prototype={
b2:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a1(o.a+b.a,o.b+b.b)
o=q.a.gaO()
s=$.a6
if(s==null)s=$.a6=new V.a1(0,0)
r=q.x
q.z=new P.Q(p,!1)
q.x=n
return new X.bI(a,s,r,o,n)},
ck:function(a,b){this.r=a.a
return!1},
bb:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
ba:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.b2(a,b))
return!0},
hg:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaO()
r=this.x
Date.now()
q.D(new X.bJ(new V.W(a.a,a.b),s,r))
return!0},
eZ:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.D(new X.ct(c,q.a.gaO(),b))
q.y=new P.Q(s,!1)
s=$.a6
q.x=s==null?$.a6=new V.a1(0,0):s}}
X.a_.prototype={
q:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a_))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.j(s,"+")}}
X.bI.prototype={}
X.i9.prototype={
bH:function(a,b,c){var s=this,r=new P.Q(Date.now(),!1),q=s.a.gaO(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bI(a,p,o,q,b)},
ck:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.D(this.bH(a,b,!0))
return!0},
bb:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.D(r.bH(a,b,!0))
return!0},
ba:function(a,b){var s=this.d
if(s==null)return!1
s.D(this.bH(a,b,!1))
return!0},
hh:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaO()
Date.now()
r.D(new X.bJ(new V.W(a.a,a.b),s,b))
return!0},
gda:function(){var s=this.b
return s==null?this.b=D.H():s},
gcp:function(){var s=this.c
return s==null?this.c=D.H():s},
gdz:function(){var s=this.d
return s==null?this.d=D.H():s}}
X.bJ.prototype={}
X.ei.prototype={}
X.cO.prototype={}
X.iG.prototype={
b2:function(a,b){var s,r,q,p,o=this,n=new P.Q(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a6
if(r==null){r=new V.a1(0,0)
$.a6=r
s=r}else s=r}r=o.a.gaO()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cO(q,p,r,s)},
hf:function(a){var s=this.b
if(s==null)return!1
s.D(this.b2(a,!0))
return!0},
hd:function(a){var s=this.c
if(s==null)return!1
s.D(this.b2(a,!0))
return!0},
he:function(a){var s=this.d
if(s==null)return!1
s.D(this.b2(a,!1))
return!0}}
X.eZ.prototype={
gaS:function(a){var s=this.b
return s==null?this.b=new X.hM(new X.a_(!1,!1,!1),P.cq(t.S)):s},
gY:function(){var s,r=this.c
if(r==null){r=$.a6
if(r==null){r=$.a6=new V.a1(0,0)
s=r}else s=r
r=this.c=new X.i9(this,r,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return r},
gac:function(){var s=this.d
if(s==null){s=$.a6
if(s==null)s=$.a6=new V.a1(0,0)
s=this.d=new X.hR(this,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return s},
gaV:function(){var s,r=this.e
if(r==null){r=$.a6
if(r==null){r=$.a6=new V.a1(0,0)
s=r}else s=r
r=this.e=new X.iG(this,r,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return r},
gaO:function(){var s=this.a
return V.kG(0,0,C.f.gd8(s).c,C.f.gd8(s).d)},
cJ:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dT(p,new X.a_(s,r,q))},
aL:function(a){var s,r,q=this.gaS(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a_(p,s,r)},
bU:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaS(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a_(s,r===!0,q===!0)},
aw:function(a){var s,r,q,p
if(a==null){s=$.a6
return s==null?$.a6=new V.a1(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a1(r-p,q-s)},
b4:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.W(r,s)},
bR:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.ah(n)
m=o.pageY
m.toString
C.d.ah(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.ah(l)
l=o.pageY
l.toString
l=C.d.ah(l)
k=j.top
k.toString
s.push(new V.a1(n-m,l-k))}return s},
at:function(a){var s,r,q,p
if(a==null)return new X.c7(0,new X.a_(!1,!1,!1))
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
return new X.c7(s,new X.a_(r,q,p))},
bI:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eT:function(a){return this.f=!0},
eH:function(a){return this.f=!1},
eN:function(a){if(this.f&&this.bI(a))a.preventDefault()},
eX:function(a){var s,r,q=this
if(!q.f)return
s=q.cJ(a)
r=q.gaS(q)
r.c=s.b
r.d.n(0,s.a)},
eV:function(a){var s,r,q=this
if(!q.f)return
s=q.cJ(a)
r=q.gaS(q)
r.c=s.b
r.d.O(0,s.a)},
f0:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aL(a)
if(p.x){s=p.at(a)
r=p.b4(a)
if(p.gac().ck(s,r))a.preventDefault()
return}s=p.at(a)
q=p.aw(a)
if(p.gY().ck(s,q))a.preventDefault()},
f4:function(a){var s,r,q,p=this
p.aL(a)
s=p.at(a)
if(p.x){r=p.b4(a)
if(p.gac().bb(s,r))a.preventDefault()
return}q=p.aw(a)
if(p.gY().bb(s,q))a.preventDefault()},
eR:function(a){var s,r,q,p=this
if(!p.bI(a)){p.aL(a)
s=p.at(a)
if(p.x){r=p.b4(a)
if(p.gac().bb(s,r))a.preventDefault()
return}q=p.aw(a)
if(p.gY().bb(s,q))a.preventDefault()}},
f2:function(a){var s,r,q,p=this
p.aL(a)
s=p.at(a)
if(p.x){r=p.b4(a)
if(p.gac().ba(s,r))a.preventDefault()
return}q=p.aw(a)
if(p.gY().ba(s,q))a.preventDefault()},
eP:function(a){var s,r,q,p=this
if(!p.bI(a)){p.aL(a)
s=p.at(a)
if(p.x){r=p.b4(a)
if(p.gac().ba(s,r))a.preventDefault()
return}q=p.aw(a)
if(p.gY().ba(s,q))a.preventDefault()}},
f6:function(a){var s,r,q=this
q.aL(a)
s=new V.W(C.w.gfV(a),C.w.gfW(a)).N(0,q.Q)
if(q.x){if(q.gac().hg(s))a.preventDefault()
return}r=q.aw(a)
if(q.gY().hh(s,r))a.preventDefault()},
f8:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.at(q.y)
r=q.aw(q.y)
q.gac().eZ(s,r,p)}},
fl:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bU(a)
s=r.bR(a)
if(r.gaV().hf(s))a.preventDefault()},
fh:function(a){var s
this.bU(a)
s=this.bR(a)
if(this.gaV().hd(s))a.preventDefault()},
fj:function(a){var s
this.bU(a)
s=this.bR(a)
if(this.gaV().he(s))a.preventDefault()}}
D.cb.prototype={
ar:function(a){var s=this.r
return s==null?null:s.D(a)},
e5:function(){return this.ar(null)},
$ico:1}
D.cp.prototype={
gt:function(){var s=this.y
return s==null?this.y=D.H():s},
gdv:function(){var s=this.z
return s==null?this.z=D.H():s},
ar:function(a){var s=this.y
return s==null?null:s.D(a)},
cO:function(a){var s=this.z
return s==null?null:s.D(a)},
eY:function(){return this.cO(null)},
fb:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r)if(this.e3(a[r]))return!1
return!0},
eB:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcN(),q=this.f,p=0;p<b.length;b.length===s||(0,H.n)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.bD()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ar(new D.aR())},
ff:function(a,b){var s,r,q,p
for(s=b.gL(b),r=this.gcN(),q=this.e;s.u();){p=s.gB(s)
C.a.O(q,p)
p.gt().O(0,r)}this.ar(new D.aS())},
e3:function(a){var s=C.a.w(this.f,a)
return s}}
V.P.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.P))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.bd.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bd))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.hz.prototype={}
V.cz.prototype={
a2:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cz))return!1
s=b.a
$.C().toString
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
i:function(a){var s,r,q,p,o=this,n=V.c1([o.a,o.d,o.r],3,0),m=V.c1([o.b,o.e,o.x],3,0),l=V.c1([o.c,o.f,o.y],3,0),k=n.length
if(0>=k)return H.e(n,0)
s="["+n[0]+", "
r=m.length
if(0>=r)return H.e(m,0)
s=s+m[0]+", "
q=l.length
if(0>=q)return H.e(l,0)
s=s+l[0]+",\n"
if(1>=k)return H.e(n,1)
p=" "+n[1]+", "
if(1>=r)return H.e(m,1)
p=p+m[1]+", "
if(1>=q)return H.e(l,1)
p=s+(p+l[1]+",\n")
if(2>=k)return H.e(n,2)
k=" "+n[2]+", "
if(2>=r)return H.e(m,2)
k=k+m[2]+", "
if(2>=q)return H.e(l,2)
return p+(k+l[2]+"]")}}
V.bH.prototype={
a2:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
ds:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.C().toString
if(Math.abs(b3-0)<1e-9)return V.an()
s=1/b3
r=-l
q=-a2
return V.aA((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
N:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aA(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bv:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.E(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bc:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.ab(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bH))return!1
s=b.a
$.C().toString
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
A:function(a){var s,r,q,p,o,n=this,m=V.c1([n.a,n.e,n.y,n.cx],3,0),l=V.c1([n.b,n.f,n.z,n.cy],3,0),k=V.c1([n.c,n.r,n.Q,n.db],3,0),j=V.c1([n.d,n.x,n.ch,n.dx],3,0),i=m.length
if(0>=i)return H.e(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.e(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.e(k,0)
s=s+k[0]+", "
p=j.length
if(0>=p)return H.e(j,0)
s=s+j[0]+",\n"
o=a+" "
if(1>=i)return H.e(m,1)
o=o+m[1]+", "
if(1>=r)return H.e(l,1)
o=o+l[1]+", "
if(1>=q)return H.e(k,1)
o=o+k[1]+", "
if(1>=p)return H.e(j,1)
o=s+(o+j[1]+",\n")
s=a+" "
if(2>=i)return H.e(m,2)
s=s+m[2]+", "
if(2>=r)return H.e(l,2)
s=s+l[2]+", "
if(2>=q)return H.e(k,2)
s=s+k[2]+", "
if(2>=p)return H.e(j,2)
s=o+(s+j[2]+",\n")
o=a+" "
if(3>=i)return H.e(m,3)
o=o+m[3]+", "
if(3>=r)return H.e(l,3)
o=o+l[3]+", "
if(3>=q)return H.e(k,3)
o=o+k[3]+", "
if(3>=p)return H.e(j,3)
return s+(o+j[3]+"]")},
v:function(){return this.A("")}}
V.a1.prototype={
a3:function(a){return new V.W(a.a-this.a,a.b-this.b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"},
v:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.ab.prototype={
b_:function(a,b){return new V.ab(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ab))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
v:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
V.eh.prototype={
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eh))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.ek.prototype={
gao:function(){var s=this.c,r=this.d
return s>r?r:s},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ek))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.y(s.a,3,0)+", "+V.y(s.b,3,0)+", "+V.y(s.c,3,0)+", "+V.y(s.d,3,0)+"]"}}
V.W.prototype={
cd:function(a){return Math.sqrt(this.X(this))},
X:function(a){return this.a*a.a+this.b*a.b},
N:function(a,b){return new V.W(this.a*b,this.b*b)},
a5:function(a,b){var s
$.C().toString
if(Math.abs(b-0)<1e-9){s=$.bt
return s==null?$.bt=new V.W(0,0):s}return new V.W(this.a/b,this.b/b)},
q:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+"]"}}
V.E.prototype={
cd:function(a){return Math.sqrt(this.X(this))},
X:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ce:function(a,b){return new V.E(V.ki(this.a,a.a,b),V.ki(this.b,a.b,b),V.ki(this.c,a.c,b))},
M:function(){var s=this,r=Math.sqrt(s.X(s))
if(r===1)return s
return s.a5(0,r)},
b7:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.E(s*r-q*p,q*o-n*r,n*p-s*o)},
S:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
aX:function(a){return new V.E(-this.a,-this.b,-this.c)},
a5:function(a,b){$.C().toString
if(Math.abs(b-0)<1e-9)return V.f_()
return new V.E(this.a/b,this.b/b,this.c/b)},
du:function(){$.C().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
q:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"},
v:function(){return"["+V.y(this.a,3,0)+", "+V.y(this.b,3,0)+", "+V.y(this.c,3,0)+"]"}}
U.hk.prototype={
bB:function(a){var s=V.om(a,this.c,this.b)
return s},
gt:function(){var s=this.y
return s==null?this.y=D.H():s},
K:function(a){var s=this.y
return s==null?null:s.D(a)},
scq:function(a,b){},
scg:function(a){var s,r=this,q=r.b
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bB(s)}r.K(new D.B("maximumLocation",q,r.b))}},
scj:function(a){var s,r=this,q=r.c
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bB(s)}r.K(new D.B("minimumLocation",q,r.c))}},
sa1:function(a,b){var s,r=this
b=r.bB(b)
s=r.d
$.C().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.K(new D.B("location",s,b))}},
sci:function(a){var s,r,q=this,p=q.e
$.C().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.K(new D.B("maximumVelocity",p,a))}},
sR:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.K(new D.B("velocity",r,a))}},
sc2:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.K(new D.B("dampening",s,a))}},
ap:function(a,b){var s,r,q,p=this,o=p.f
$.C().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa1(0,p.d+s*b)
o=p.x
$.C().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sR(s)}}}
U.c9.prototype={
gt:function(){var s=this.b
return s==null?this.b=D.H():s},
aW:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c9))return!1
return this.a.q(0,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bE.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.H():s},
K:function(a){var s=this.e
return s==null?null:s.D(a)},
Z:function(){return this.K(null)},
ez:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaK(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.gt()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.K(new D.aR())},
fd:function(a,b){var s,r
for(s=b.gL(b),r=this.gaK();s.u();)s.gB(s).gt().O(0,r)
this.K(new D.aS())},
aW:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a9(o,o.length),n=H.V(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.aW(0,b,c)
s=s==null?q:q.N(0,s)}}p.f=s==null?V.an():s
o=p.e
if(o!=null)o.aB(0)}return p.f},
q:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bE))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(p>=q.length)return H.e(q,p)
if(!J.U(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia0:1}
U.a0.prototype={}
U.cQ.prototype={
gt:function(){var s=this.cy
return s==null?this.cy=D.H():s},
K:function(a){var s=this.cy
return s==null?null:s.D(a)},
Z:function(){return this.K(null)},
b6:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gY().gda().n(0,s.gbJ())
a.gY().gdz().n(0,s.gbL())
a.gY().gcp().n(0,s.gbN())
return!0},
bK:function(a){var s=this,r=s.c,q=s.a
if(!r.q(0,q==null?null:q.gaS(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bM:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a3(a.d)
if(s.X(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa1(0,-a.y.a3(r).N(0,2).a5(0,s.gao()).a*2.5+p.z)
q.sR(0)
p.Q=a.z.a3(r).N(0,2).a5(0,s.gao())
p.Z()},
bO:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.X(s)>0.0001){r.b.sR(r.Q.a*10*2.5)
r.Z()}},
aW:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.ap(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.aA(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia0:1}
U.cR.prototype={
gt:function(){var s=this.fx
return s==null?this.fx=D.H():s},
K:function(a){var s=this.fx
return s==null?null:s.D(a)},
Z:function(){return this.K(null)},
b6:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gY().gda().n(0,q.gbJ())
a.gY().gdz().n(0,q.gbL())
a.gY().gcp().n(0,q.gbN())
s=a.gac()
r=s.f
s=r==null?s.f=D.H():r
s.n(0,q.geq())
s=a.gac()
r=s.d
s=r==null?s.d=D.H():r
s.n(0,q.ges())
s=a.gaV()
r=s.b
s=r==null?s.b=D.H():r
s.n(0,q.gfF())
s=a.gaV()
r=s.d
s=r==null?s.d=D.H():r
s.n(0,q.gfD())
s=a.gaV()
r=s.c
s=r==null?s.c=D.H():r
s.n(0,q.gfB())
return!0},
aI:function(a){var s=a.b
if(this.r)s=-s
return new V.W(a.a,s)},
bK:function(a){var s=this
t.Z.a(a)
if(!s.d.q(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bM:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a3(a.d)
if(s.X(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aI(a.y.a3(r).N(0,2).a5(0,s.gao()))
p=n.c
p.sa1(0,-q.a*2.5+n.cy)
o=n.b
o.sa1(0,-q.b*2.5+n.db)
o.sR(0)
p.sR(0)
n.dx=n.aI(a.z.a3(r).N(0,2).a5(0,s.gao()))
n.Z()},
bO:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.X(s)>0.0001){r.c.sR(-r.dx.a*10*2.5)
r.b.sR(-r.dx.b*10*2.5)
r.Z()}},
er:function(a){var s=this
if(t.r.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eu:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.q(0,a.x.b))return
s=a.c
r=a.d
q=n.aI(a.y.a3(r).N(0,2).a5(0,s.gao()))
p=n.c
p.sa1(0,-q.a*2.5+n.cy)
o=n.b
o.sa1(0,-q.b*2.5+n.db)
o.sR(0)
p.sR(0)
n.dx=n.aI(a.z.a3(r).N(0,2).a5(0,s.gao()))
n.Z()},
fG:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fE:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a3(a.d)
if(s.X(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aI(a.y.a3(r).N(0,2).a5(0,s.gao()))
p=n.c
p.sa1(0,-q.a*2.5+n.cy)
o=n.b
o.sa1(0,-q.b*2.5+n.db)
o.sR(0)
p.sR(0)
n.dx=n.aI(a.z.a3(r).N(0,2).a5(0,s.gao()))
n.Z()},
fC:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.X(s)>0.0001){r.c.sR(-r.dx.a*10*2.5)
r.b.sR(-r.dx.b*10*2.5)
r.Z()}},
aW:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ap(0,s)
n=p.b
n.ap(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aA(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.N(0,V.aA(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia0:1}
U.cS.prototype={
gt:function(){var s=this.r
return s==null?this.r=D.H():s},
K:function(a){var s=this.r
return s==null?null:s.D(a)},
b6:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gY()
r=s.e
s=r==null?s.e=D.H():r
r=this.gew()
s.n(0,r)
s=a.gac()
q=s.e;(q==null?s.e=D.H():q).n(0,r)
return!0},
ex:function(a){var s=this,r=s.b,q=s.a
if(!r.q(0,q==null?null:q.gaS(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.K(new D.B("zoom",r,q))}},
aW:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.aA(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$ia0:1}
M.dF.prototype={
as:function(a){var s=this.y
return s==null?null:s.D(a)},
e6:function(){return this.as(null)},
eJ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaj(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bD()
n=o.a;(n==null?o.a=[]:n).push(r)}this.as(new D.aR())},
eL:function(a,b){var s,r
for(s=b.gL(b),r=this.gaj();s.u();)s.gB(s).gt().O(0,r)
this.as(new D.aS())},
sdM:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gt().O(0,r.gaj())
s=r.d
r.d=a
if(a!=null)a.gt().n(0,r.gaj())
r.as(new D.B("technique",s,r.d))}},
gt:function(){var s=this.y
return s==null?this.y=D.H():s},
aT:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dJ(d.d)
s=d.c
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
n=C.d.ah(o.a*q)
m=C.d.ah(o.b*p)
l=C.d.ah(o.c*q)
a.c=l
o=C.d.ah(o.d*p)
a.d=o
r.viewport(n,m,l,o)
r.clearDepth(2000)
s=s.a
r.clearColor(s.a,s.b,s.c,s.d)
r.clear(16640)}s=d.b
if(s!=null){r=a.c
o=a.d
l=s.c
k=s.d
j=s.e
i=j-k
h=1/Math.tan(l*0.5)
g=V.aA(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dI(g)
f=$.lv()
e=s.b
if(e!=null)f=e.a.N(0,f)
a.db.dI(f)}s=d.d
if(s!=null)s.ap(0,a)
for(s=d.e.a,r=new J.a9(s,s.length),o=H.V(r).c;r.u();)o.a(r.d).ap(0,a)
for(s=new J.a9(s,s.length),r=H.V(s).c;s.u();)r.a(s.d).aT(a)
if(d.b!=null){a.cy.cl()
a.db.cl()}a.dH()}}
A.hd.prototype={}
A.he.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fZ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fX:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ae.prototype={
gai:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
q:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.ae))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.dZ.prototype={
e_:function(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9=null,d0=u.C,d1="Required uniform value, ",d2=", was not defined or used in shader.",d3=c8.x,d4=new P.aX(""),d5=d3.fr
if(d5){s=""+"uniform mat4 objMat;\n"
d4.a=s}else s=""
r=d3.fx
s=(r?d4.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
d4.a=s
s+="\n"
d4.a=s
s=d4.a=s+"attribute vec3 posAttr;\n"
q=d3.k4
if(q){s+="attribute vec3 normAttr;\n"
d4.a=s}p=d3.r1
d4.a=(p?d4.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.nz(d3,d4)
A.nB(d3,d4)
A.nA(d3,d4)
A.nD(d3,d4)
A.nE(d3,d4)
A.nC(d3,d4)
A.nF(d3,d4)
s=d4.a+="vec4 getPos()\n"
s+="{\n"
d4.a=s
o=d3.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
d4.a=s
s+="}\n"
d4.a=s
s+="\n"
d4.a=s
s+="void main()\n"
d4.a=s
s=d4.a=s+"{\n"
if(o){s+="   setupBendData();\n"
d4.a=s}if(q){s+="   normalVec = getNorm();\n"
d4.a=s}if(p){s+="   binormalVec = getBinm();\n"
d4.a=s}if(d3.r2){s+="   txt2D = getTxt2D();\n"
d4.a=s}if(d3.rx){s+="   txtCube = getTxtCube();\n"
d4.a=s}if(d3.k2){s+="   objPos = getObjPos();\n"
d4.a=s}s=(d3.k3?d4.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
d4.a=s
s+="}\n"
d4.a=s
s=d4.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.ny(d3)
c8.c=n
c8.d=m
l=c8.cK(n,35633)
k=c8.cK(c8.d,35632)
s=c8.a
q=s.createProgram()
q.toString
c8.e=q
s.attachShader(c8.gau(),l)
s.attachShader(c8.gau(),k)
s.linkProgram(c8.gau())
if(!H.la(s.getProgramParameter(c8.gau(),35714))){j=s.getProgramInfoLog(c8.gau())
if(j==null)j="undefined log error"
s.deleteProgram(c8.e)
H.f(P.d("Failed to link shader: "+j))}c8.fv()
c8.fz()
c8.y=c8.ga9(c8).h(0,"posAttr")
c8.Q=c8.ga9(c8).h(0,"normAttr")
c8.z=c8.ga9(c8).h(0,"binmAttr")
c8.ch=c8.ga9(c8).h(0,"txt2DAttr")
c8.cx=c8.ga9(c8).h(0,"txtCubeAttr")
c8.cy=c8.ga9(c8).h(0,"bendAttr")
if(d3.dy)c8.fy=t.j.a(c8.gH().G(0,"invViewMat"))
if(d5)c8.db=t.j.a(c8.gH().G(0,"objMat"))
if(r)c8.dx=t.j.a(c8.gH().G(0,"viewObjMat"))
d5=t.j
c8.fr=d5.a(c8.gH().G(0,"projViewObjMat"))
if(d3.go)c8.dy=d5.a(c8.gH().G(0,"viewMat"))
if(d3.x1)c8.go=t.Q.a(c8.gH().G(0,"txt2DMat"))
if(d3.x2)c8.id=d5.a(c8.gH().G(0,"txtCubeMat"))
if(d3.y1)c8.k1=d5.a(c8.gH().G(0,"colorMat"))
c8.k3=[]
s=d3.aQ
if(s>0){c8.k2=t.v.a(c8.gH().G(0,"bendMatCount"))
for(i=0;i<s;++i){r=c8.k3
h=c8.r
if(h==null)H.f(P.d(d0))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.f(P.d(d1+q+d2))
r.push(d5.a(g))}}d5=d3.a
if(d5.a)c8.k4=t.g.a(c8.gH().G(0,"emissionClr"))
if(d5.c)c8.r2=t.a.a(c8.gH().G(0,"emissionTxt"))
d5=d3.b
if(d5.a)c8.rx=t.g.a(c8.gH().G(0,"ambientClr"))
if(d5.c)c8.x1=t.a.a(c8.gH().G(0,"ambientTxt"))
d5=d3.c
if(d5.a)c8.x2=t.g.a(c8.gH().G(0,"diffuseClr"))
if(d5.c)c8.y2=t.a.a(c8.gH().G(0,"diffuseTxt"))
d5=d3.d
if(d5.a)c8.aQ=t.g.a(c8.gH().G(0,"invDiffuseClr"))
if(d5.c)c8.bn=t.a.a(c8.gH().G(0,"invDiffuseTxt"))
d5=d3.e
s=d5.a
if(!s)r=d5.c
else r=!0
if(r){c8.df=t.n.a(c8.gH().G(0,"shininess"))
if(s)c8.dd=t.g.a(c8.gH().G(0,"specularClr"))
if(d5.c)c8.de=t.a.a(c8.gH().G(0,"specularTxt"))}if(d3.f.c)c8.dg=t.a.a(c8.gH().G(0,"bumpTxt"))
if(d3.db){d5=t.a
c8.dh=d5.a(c8.gH().G(0,"envSampler"))
s=d3.r
if(s.a)c8.di=t.g.a(c8.gH().G(0,"reflectClr"))
if(s.c)c8.dj=d5.a(c8.gH().G(0,"reflectTxt"))
s=d3.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c8.dk=t.n.a(c8.gH().G(0,"refraction"))
if(r)c8.dl=t.g.a(c8.gH().G(0,"refractClr"))
if(s.c)c8.dm=d5.a(c8.gH().G(0,"refractTxt"))}}d5=d3.y
if(d5.a)c8.dn=t.n.a(c8.gH().G(0,"alpha"))
if(d5.c)c8.dq=t.a.a(c8.gH().G(0,"alphaTxt"))
if(d3.k1){d5=d3.z
s=d5.length
if(s!==0){r=t.S
c8.c4=P.N(r,t.W)
c8.c5=P.N(r,t.J)
for(r=t.v,q=t.g,p=t.n,f=0;f<d5.length;d5.length===s||(0,H.n)(d5),++f){e=d5[f]
d=e.a
c="barLight"+d
b=[]
for(o=e.b,a=(d&4)!==0,i=0;i<o;++i){h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].startPnt"
g=h.h(0,a0)
if(g==null)H.f(P.d(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].endPnt"
a1=h.h(0,a0)
if(a1==null)H.f(P.d(d1+a0+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].color"
a2=h.h(0,a0)
if(a2==null)H.f(P.d(d1+a0+d2))
q.a(a2)
if(a){h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].att0"
a3=h.h(0,a0)
if(a3==null)H.f(P.d(d1+a0+d2))
p.a(a3)
h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].att1"
a4=h.h(0,a0)
if(a4==null)H.f(P.d(d1+a0+d2))
p.a(a4)
h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].att2"
a5=h.h(0,a0)
if(a5==null)H.f(P.d(d1+a0+d2))
p.a(a5)
a6=a5
a7=a4
a8=a3}else{a6=c9
a7=a6
a8=a7}b.push(new A.eN(g,a1,a2,a8,a7,a6))}c8.c5.m(0,d,b)
o=c8.c4
h=c8.r
if(h==null)H.f(P.d(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.d(d1+a+d2))
o.m(0,d,r.a(g))}}d5=d3.Q
s=d5.length
if(s!==0){r=t.S
c8.c6=P.N(r,t.W)
c8.c7=P.N(r,t.L)
for(r=t.v,q=t.g,p=t.G,f=0;f<d5.length;d5.length===s||(0,H.n)(d5),++f){e=d5[f]
d=e.a
c="dirLight"+d
b=[]
for(o=e.b,a=(d&1)!==0,i=0;i<o;++i){if(a){h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].objUp"
g=h.h(0,a0)
if(g==null)H.f(P.d(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].objRight"
a1=h.h(0,a0)
if(a1==null)H.f(P.d(d1+a0+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].objDir"
a2=h.h(0,a0)
if(a2==null)H.f(P.d(d1+a0+d2))
q.a(a2)
a9=a2
b0=a1
b1=g}else{a9=c9
b0=a9
b1=b0}h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].viewDir"
g=h.h(0,a0)
if(g==null)H.f(P.d(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"s["+i+"].color"
a1=h.h(0,a0)
if(a1==null)H.f(P.d(d1+a0+d2))
q.a(a1)
if(a){h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"sTexture2D"+i
a2=h.h(0,a0)
if(a2==null)H.f(P.d(d1+a0+d2))
p.a(a2)
b2=a2}else b2=c9
b.push(new A.eO(b1,b0,a9,g,a1,b2))}c8.c7.m(0,d,b)
o=c8.c6
h=c8.r
if(h==null)H.f(P.d(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.d(d1+a+d2))
o.m(0,d,r.a(g))}}d5=d3.ch
s=d5.length
if(s!==0){r=t.S
c8.c8=P.N(r,t.W)
c8.c9=P.N(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,a=t.F,a0=t.n,f=0;f<d5.length;d5.length===s||(0,H.n)(d5),++f){e=d5[f]
d=e.a
c="pointLight"+d
b=[]
for(b3=e.b,b4=(d&4)!==0,b5=(d&2)!==0,b6=(d&1)!==0,b7=(d&3)!==0,i=0;i<b3;++i){h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"s["+i+"].point"
g=h.h(0,b8)
if(g==null)H.f(P.d(d1+b8+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"s["+i+"].viewPnt"
a1=h.h(0,b8)
if(a1==null)H.f(P.d(d1+b8+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"s["+i+"].color"
a2=h.h(0,b8)
if(a2==null)H.f(P.d(d1+b8+d2))
q.a(a2)
if(b7){h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"s["+i+"].invViewRotMat"
a3=h.h(0,b8)
if(a3==null)H.f(P.d(d1+b8+d2))
p.a(a3)
b9=a3}else b9=c9
if(b6){h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"sTextureCube"+i
a3=h.h(0,b8)
if(a3==null)H.f(P.d(d1+b8+d2))
o.a(a3)
b2=a3}else b2=c9
if(b5){h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"sShadowCube"+i
a3=h.h(0,b8)
if(a3==null)H.f(P.d(d1+b8+d2))
o.a(a3)
h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"s["+i+"].shadowAdj"
a4=h.h(0,b8)
if(a4==null)H.f(P.d(d1+b8+d2))
a.a(a4)
c0=a3
c1=a4}else{c0=c9
c1=c0}if(b4){h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"s["+i+"].att0"
a3=h.h(0,b8)
if(a3==null)H.f(P.d(d1+b8+d2))
a0.a(a3)
h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"s["+i+"].att1"
a4=h.h(0,b8)
if(a4==null)H.f(P.d(d1+b8+d2))
a0.a(a4)
h=c8.r
if(h==null)H.f(P.d(d0))
b8=c+"s["+i+"].att2"
a5=h.h(0,b8)
if(a5==null)H.f(P.d(d1+b8+d2))
a0.a(a5)
a6=a5
a7=a4
a8=a3}else{a6=c9
a7=a6
a8=a7}b.push(new A.eR(g,a1,b9,a2,b2,c0,c1,a8,a7,a6))}c8.c9.m(0,d,b)
b3=c8.c8
h=c8.r
if(h==null)H.f(P.d(d0))
b4=c+"Count"
g=h.h(0,b4)
if(g==null)H.f(P.d(d1+b4+d2))
b3.m(0,d,r.a(g))}}d3=d3.cx
d5=d3.length
if(d5!==0){s=t.S
c8.ca=P.N(s,t.W)
c8.cb=P.N(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,f=0;f<d3.length;d3.length===d5||(0,H.n)(d3),++f){e=d3[f]
d=e.a
c="spotLight"+d
b=[]
for(a=e.b,a0=(d&2)!==0,b3=(d&1)!==0,b4=(d&4)!==0,b5=(d&8)!==0,b6=(d&3)!==0,i=0;i<a;++i){h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].objPnt"
g=h.h(0,b7)
if(g==null)H.f(P.d(d1+b7+d2))
r.a(g)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].objDir"
a1=h.h(0,b7)
if(a1==null)H.f(P.d(d1+b7+d2))
r.a(a1)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].viewPnt"
a2=h.h(0,b7)
if(a2==null)H.f(P.d(d1+b7+d2))
r.a(a2)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].color"
a3=h.h(0,b7)
if(a3==null)H.f(P.d(d1+b7+d2))
r.a(a3)
if(b6){h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].objUp"
a4=h.h(0,b7)
if(a4==null)H.f(P.d(d1+b7+d2))
r.a(a4)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].objRight"
a5=h.h(0,b7)
if(a5==null)H.f(P.d(d1+b7+d2))
r.a(a5)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].tuScalar"
c2=h.h(0,b7)
if(c2==null)H.f(P.d(d1+b7+d2))
q.a(c2)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].tvScalar"
c3=h.h(0,b7)
if(c3==null)H.f(P.d(d1+b7+d2))
q.a(c3)
c4=c3
c5=c2
b0=a5
b1=a4}else{c4=c9
c5=c4
b0=c5
b1=b0}if(a0){h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].shadowAdj"
a4=h.h(0,b7)
if(a4==null)H.f(P.d(d1+b7+d2))
p.a(a4)
c1=a4}else c1=c9
if(b5){h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].cutoff"
a4=h.h(0,b7)
if(a4==null)H.f(P.d(d1+b7+d2))
q.a(a4)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].coneAngle"
a5=h.h(0,b7)
if(a5==null)H.f(P.d(d1+b7+d2))
q.a(a5)
c6=a5
c7=a4}else{c6=c9
c7=c6}if(b4){h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].att0"
a4=h.h(0,b7)
if(a4==null)H.f(P.d(d1+b7+d2))
q.a(a4)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].att1"
a5=h.h(0,b7)
if(a5==null)H.f(P.d(d1+b7+d2))
q.a(a5)
h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"s["+i+"].att2"
c2=h.h(0,b7)
if(c2==null)H.f(P.d(d1+b7+d2))
q.a(c2)
a6=c2
a7=a5
a8=a4}else{a6=c9
a7=a6
a8=a7}if(b3){h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"sTexture2D"+i
a4=h.h(0,b7)
if(a4==null)H.f(P.d(d1+b7+d2))
o.a(a4)
b2=a4}else b2=c9
if(a0){h=c8.r
if(h==null)H.f(P.d(d0))
b7=c+"sShadow2D"+i
a4=h.h(0,b7)
if(a4==null)H.f(P.d(d1+b7+d2))
o.a(a4)
c0=a4}else c0=c9
b.push(new A.eU(g,a1,a2,a3,b1,b0,c5,c4,c1,c7,c6,a8,a7,a6,b2,c0))}c8.cb.m(0,d,b)
a=c8.ca
h=c8.r
if(h==null)H.f(P.d(d0))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.f(P.d(d1+a0+d2))
a.m(0,d,s.a(g))}}}},
a7:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.dR(b)}}
A.b9.prototype={
i:function(a){return"barLight"+this.a}}
A.be.prototype={
i:function(a){return"dirLight"+this.a}}
A.bo.prototype={
i:function(a){return"pointLight"+this.a}}
A.bp.prototype={
i:function(a){return"spotLight"+this.a}}
A.hV.prototype={
i:function(a){return this.bm}}
A.eN.prototype={}
A.eO.prototype={}
A.eR.prototype={}
A.eU.prototype={}
A.cK.prototype={
ga9:function(a){var s=this.f
if(s==null)throw H.c(P.d("Must initialize the shader prior to getting the attributes."))
return s},
gH:function(){var s=this.r
if(s==null)throw H.c(P.d(u.C))
return s},
gau:function(){var s=this.e
if(s==null)throw H.c(P.d(u.F))
return s},
cK:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.la(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.d('Error compiling shader "'+H.u(q)+'": '+s))}return q},
fv:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.jq(l.getProgramParameter(o.gau(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.f(P.d(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.f(P.d(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.hd(l,q,p))}o.f=new A.he(m)},
fz:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.jq(j.getProgramParameter(m.gau(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.f(P.d(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.f(P.d(l))
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
k.push(m.fU(o,n,q,p))}m.r=new A.iR(k)},
aH:function(a,b,c){var s=this.a
if(a===1)return new A.cP(s,b,c)
else return A.k0(s,this.e,b,a,c)},
el:function(a,b,c){var s=this.a
if(a===1)return new A.eS(s,b,c)
else return A.k0(s,this.e,b,a,c)},
em:function(a,b,c){var s=this.a
if(a===1)return new A.eT(s,b,c)
else return A.k0(s,this.e,b,a,c)},
bk:function(a,b){return new P.fi(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
fU:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aH(b,c,d)
case 5121:return s.aH(b,c,d)
case 5122:return s.aH(b,c,d)
case 5123:return s.aH(b,c,d)
case 5124:return s.aH(b,c,d)
case 5125:return s.aH(b,c,d)
case 5126:return new A.eK(s.a,c,d)
case 35664:return new A.iN(s.a,c,d)
case 35665:return new A.eL(s.a,c,d)
case 35666:return new A.eM(s.a,c,d)
case 35667:return new A.iO(s.a,c,d)
case 35668:return new A.iP(s.a,c,d)
case 35669:return new A.iQ(s.a,c,d)
case 35674:return new A.iS(s.a,c,d)
case 35675:return new A.eP(s.a,c,d)
case 35676:return new A.eQ(s.a,c,d)
case 35678:return s.el(b,c,d)
case 35680:return s.em(b,c,d)
case 35670:throw H.c(s.bk("BOOL",c))
case 35671:throw H.c(s.bk("BOOL_VEC2",c))
case 35672:throw H.c(s.bk("BOOL_VEC3",c))
case 35673:throw H.c(s.bk("BOOL_VEC4",c))
default:throw H.c(P.d("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.iL.prototype={}
A.iR.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
G:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.d("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.v()},
v:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cP.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iO.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iP.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iQ.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iM.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.eK.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iN.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eL.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eM.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.iS.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eP.prototype={
ag:function(a){var s=new Float32Array(H.dg(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eQ.prototype={
ag:function(a){var s=new Float32Array(H.dg(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eS.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.eT.prototype={
dR:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jp.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ce(q.b,b).ce(q.d.ce(q.c,b),c)
q=new V.ab(p.a,p.b,p.c)
if(!J.U(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a0()}a.saU(p.M())
q=1-b
s=1-c
s=new V.eh(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.U(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a0()}},
$S:34}
F.aw.prototype={
b0:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.d("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.d("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.gV().b.push(s)
s.b=b
b.gV().c.push(s)
s.c=c
c.gV().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gV().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}},
ef:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.f_()
if(n!=null)q=q.S(0,n)
if(s!=null)q=q.S(0,s)
if(r!=null)q=q.S(0,r)
if(q.du())return p
return q.M()},
eh:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b_(0,n)
q=new V.E(o.a,o.b,o.c).M()
o=r.b_(0,n)
return q.b7(new V.E(o.a,o.b,o.c).M()).M()},
c_:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.ef()
if(s==null){s=q.eh()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
ee:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.f_()
if(n!=null)q=q.S(0,n)
if(s!=null)q=q.S(0,s)
if(r!=null)q=q.S(0,r)
if(q.du())return p
return q.M()},
eg:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.C().toString
if(Math.abs(p-0)<1e-9){j=b.b_(0,e)
o=new V.E(j.a,j.b,j.c).M()
if(q.a-r.a<0)o=o.aX(0)}else{n=(j-s.b)/p
j=b.b_(0,e)
j=new V.ab(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).b_(0,h)
o=new V.E(j.a,j.b,j.c).M()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aX(0)}m=l.d
if(m!=null){m=m.M()
o=m.b7(o).M().b7(m).M()}return o},
bY:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.ee()
if(s==null){s=q.eg()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
A:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gan(p)
p=a+C.b.ae(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gan(o)
p=p+C.b.ae(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gan(o)
s=p+C.b.ae(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.v()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.v()
return s+((p==null?"-":p)+"}")},
v:function(){return this.A("")}}
F.hN.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
A:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gan(s)
s=a+C.b.ae(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gan(r)
return s+C.b.ae(C.c.i(r==null?-1:r),0)},
v:function(){return this.A("")}}
F.id.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
A:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gan(s)
return a+C.b.ae(C.c.i(s),0)},
v:function(){return this.A("")}}
F.im.prototype={
ga4:function(){var s=this.a
return s==null?this.a=new F.x(this,[]):s},
gbs:function(a){var s=this.b
return s==null?this.b=new F.bQ(this,[]):s},
gbr:function(a){var s=this.c
return s==null?this.c=new F.bP(this,[]):s},
gV:function(){var s=this.d
return s==null?this.d=new F.cL(this,[]):s},
gt:function(){var s=this.e
return s==null?this.e=D.H():s},
h5:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.ga4().P()
s=d.ga4().c.length
for(b=a.ga4().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.x(d,[])
o.n(0,p.fS())}d.ga4().P()
for(b=a.gbs(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.x(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bQ(d,[]):m).a
m=o.a;(m==null?o.a=new F.x(o,[]):m).n(0,j)
o=new F.id()
if(j.a==null)H.f(P.d("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.j1([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bQ(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.D(c)}}}for(b=a.gbr(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.x(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.x(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.bP(d,[]):m).a
m=o.a;(m==null?o.a=new F.x(o,[]):m).n(0,h)
m=o.a;(m==null?o.a=new F.x(o,[]):m).n(0,g)
o=new F.hN()
m=h.a
if(m==null)H.f(P.d("May not create a line with a start vertex which is not attached to a shape."))
if(m!=g.a)H.f(P.d("May not create a line with vertices attached to different shapes."))
o.a=h
m=h.c;(m==null?h.c=new F.f0([],[]):m).b.push(o)
o.b=g
m=g.c;(m==null?g.c=new F.f0([],[]):m).c.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.c;(l==null?m.c=new F.bP(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.D(c)}}}for(b=a.gV().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.x(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.x(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.x(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cL(d,[]):m).a
m=o.a;(m==null?o.a=new F.x(o,[]):m).n(0,h)
m=o.a;(m==null?o.a=new F.x(o,[]):m).n(0,g)
m=o.a;(m==null?o.a=new F.x(o,[]):m).n(0,e)
new F.aw().b0(h,g,e)}b=d.e
if(b!=null)b.aB(0)},
aN:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gV().aN()||!1
if(!r.ga4().aN())s=!1
q=r.e
if(q!=null)q.aB(0)
return s},
fN:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=34962,d={},c=g.ga4().c.length,b=a1.a,a=(b&$.b6().a)!==0?1:0
if((b&$.b5().a)!==0)++a
if((b&$.b4().a)!==0)++a
if((b&$.bx().a)!==0)++a
if((b&$.b7().a)!==0)++a
if((b&$.dp().a)!==0)++a
if((b&$.dq().a)!==0)++a
if((b&$.c3().a)!==0)++a
if((b&$.b3().a)!==0)++a
s=a1.gcv(a1)
r=P.dX(c*s,0,!1)
d.a=0
q=P.md(a,new F.io(d,g,a1,s*4,c,s,r))
b=a0.a
p=b.createBuffer()
p.toString
b.bindBuffer(e,p)
b.bufferData(e,new Float32Array(H.dg(r)),35044)
b.bindBuffer(e,f)
o=new Z.c6(new Z.f2(e,p),[],q,a1)
if(g.gbs(g).b.length!==0){n=[]
m=0
while(!0){p=g.b
if(p==null){p=g.b=new F.bQ(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.e(p,m)
p=p[m].a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}p=p.e}n.push(p==null?0:p);++m}j=Z.k2(b,34963,n)
o.b.push(new Z.ck(0,n.length,j))}if(g.gbr(g).b.length!==0){n=[]
m=0
while(!0){p=g.c
if(p==null){p=g.c=new F.bP(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.e(p,m)
i=p[m]
p=i.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}p=p.e}n.push(p==null?0:p)
p=i.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}p=p.e}n.push(p==null?0:p);++m}j=Z.k2(b,34963,n)
o.b.push(new Z.ck(1,n.length,j))}if(g.gV().b.length!==0){n=[]
m=0
while(!0){p=g.d
if(p==null){p=g.d=new F.cL(g,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.e(p,m)
h=p[m]
p=h.a
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}p=p.e}n.push(p==null?0:p)
p=h.b
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}p=p.e}n.push(p==null?0:p)
p=h.c
if(p==null)p=f
else{l=p.a
if(l!=null){k=l.a;(k==null?l.a=new F.x(l,[]):k).P()}p=p.e}n.push(p==null?0:p);++m}j=Z.k2(b,34963,n)
o.b.push(new Z.ck(4,n.length,j))}return o},
i:function(a){var s=this,r="   ",q=[]
if(s.ga4().c.length!==0){q.push("Vertices:")
q.push(s.ga4().A(r))}if(s.gbs(s).b.length!==0){q.push("Points:")
q.push(s.gbs(s).A(r))}if(s.gbr(s).b.length!==0){q.push("Lines:")
q.push(s.gbr(s).A(r))}if(s.gV().b.length!==0){q.push("Faces:")
q.push(s.gV().A(r))}return C.a.j(q,"\n")},
a0:function(){var s=this.e
return s==null?null:s.D(null)}}
F.io.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fL(a),f=g.gcv(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.x(o,[]):m).c
if(n>=m.length)return H.e(m,n)
l=m[n].h4(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.e(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c5(g,f,d*4,h.d)},
$S:47}
F.cL.prototype={
fJ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
for(s=this.a,r=b,q=0,p=!1,o=1;o<a;++o,++q,++r){for(n=p,m=1;m<b;++m,r=i){l=c.length
if(q<0||q>=l)return H.e(c,q)
k=c[q];++q
if(q>=l)return H.e(c,q)
j=c[q]
i=r+1
if(i<0||i>=l)return H.e(c,i)
h=c[i]
if(r<0||r>=l)return H.e(c,r)
g=c[r]
l=s.a
if(n){(l==null?s.a=new F.x(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,h)
f=new F.aw()
f.b0(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,g)
f=new F.aw()
f.b0(k,h,g)
e.push(f)}else{(l==null?s.a=new F.x(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,g)
f=new F.aw()
f.b0(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,g)
l=s.a;(l==null?s.a=new F.x(s,[]):l).n(0,k)
f=new F.aw()
f.b0(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gl:function(a){return this.b.length},
aN:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].c_())q=!1
return q},
bZ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bY())q=!1
return q},
i:function(a){return this.v()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].A(a))
return C.a.j(p,"\n")},
v:function(){return this.A("")}}
F.bP.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.v()},
A:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.e(q,s)
r.push(q[s].A(a+(""+s+". ")))}return C.a.j(r,"\n")},
v:function(){return this.A("")}}
F.bQ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.v()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].A(a))
return C.a.j(p,"\n")},
v:function(){return this.A("")}}
F.cT.prototype={
c1:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kU(s.cx,p,m,r,q,o,n,a,l)},
fS:function(){return this.c1(null)},
gV:function(){var s=this.d
return s==null?this.d=new F.iZ([],[],[]):s},
gan:function(a){var s=this.a
if(s!=null)s.ga4().P()
return this.e},
saU:function(a){var s
if(!J.U(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a0()}},
h4:function(a){var s,r,q,p,o=this,n=null
if(a.q(0,$.b6())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.b5())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.q(0,$.b4())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.q(0,$.bx())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.q(0,$.b7())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.q(0,$.dp())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.q(0,$.dq())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.q(0,$.c3()))return[o.ch]
else if(a.q(0,$.b3())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
c_:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.f_()
p.gV().E(0,new F.j3(o))
p.r=o.a.M()
if(r){s.a0()
o=s.e
if(o!=null)o.aB(0)}return!0},
bY:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.f_()
p.gV().E(0,new F.j2(o))
p.x=o.a.M()
if(r){s.a0()
o=s.e
if(o!=null)o.aB(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
A:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.ae(C.c.i(q.e),0))
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
n.push(V.y(q.ch,3,0))
s=q.cx
s=s==null?p:s.v()
n.push(s==null?o:s)
r=C.a.j(n,", ")
return a+"{"+r+"}"},
v:function(){return this.A("")}}
F.j3.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.S(0,r)}},
$S:7}
F.j2.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.S(0,r)}},
$S:7}
F.x.prototype={
P:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.d("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a0()
return!0},
cZ:function(a,b){var s=null,r=F.kU(s,s,a,s,s,b,s,s,0)
this.n(0,r)
return r},
gl:function(a){return this.c.length},
aN:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].c_()
return!0},
bZ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bY()
return!0},
fO:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.M()
if(!J.U(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.D(null)}}}}}return!0},
i:function(a){return this.v()},
A:function(a){var s,r,q,p
this.P()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p)s.push(r[p].A(a))
return C.a.j(s,"\n")},
v:function(){return this.A("")}}
F.iZ.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
E:function(a,b){var s=this
C.a.E(s.b,b)
C.a.E(s.c,new F.j_(s,b))
C.a.E(s.d,new F.j0(s,b))},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].A(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].A(""))
return C.a.j(p,"\n")}}
F.j_.prototype={
$1:function(a){if(!J.U(a.a,this.a))this.b.$1(a)},
$S:7}
F.j0.prototype={
$1:function(a){var s=this.a
if(!J.U(a.a,s)&&!J.U(a.b,s))this.b.$1(a)},
$S:7}
F.f0.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].A(""))
return C.a.j(p,"\n")}}
F.j1.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].A(""))
return C.a.j(p,"\n")}}
O.dY.prototype={
gt:function(){var s=this.fr
return s==null?this.fr=D.H():s},
T:function(a){var s=this.fr
return s==null?null:s.D(a)},
bA:function(){return this.T(null)},
cQ:function(a){this.a=null
this.T(a)},
fq:function(){return this.cQ(null)},
eD:function(a,b){return this.T(new D.aR())},
eF:function(a,b){return this.T(new D.aS())},
gdw:function(){var s=this,r=s.dx
if(r==null){r=new D.cp([],[],[],[],[])
r.ct(r.geA(),r.gfa(),r.gfe())
r.gt().n(0,s.gcP())
r.gdv().n(0,s.gb1())
s.dx=r}return r},
gbW:function(){var s=this.r
return s==null?this.r=O.e_(this,"ambient"):s},
gc3:function(){var s=this.x
return s==null?this.x=O.e_(this,"diffuse"):s},
gbe:function(){var s=this.z
return s==null?this.z=new O.hY(new V.P(0,0,0),this,"specular",new A.ae(!1,!1,!1)):s},
gd6:function(){var s=this.Q
return s==null?this.Q=new O.hU(this,"bump",new A.ae(!1,!1,!1)):s},
cI:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.R(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){q=a2[r]
p=q.gam()
o=a1.h(0,q.gam())
a1.m(0,p,o==null?1:o)}n=[]
a1.E(0,new O.hZ(b,n))
C.a.aZ(n,new O.i_())
m=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=[]
m.E(0,new O.i0(b,l))
C.a.aZ(l,new O.i1())
k=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){q=a2[r]
p=q.gam()
o=k.h(0,q.gam())
k.m(0,p,o==null?1:o)}j=[]
k.E(0,new O.i2(b,j))
C.a.aZ(j,new O.i3())
i=new H.R(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.n)(a0),++r){q=a0[r]
s=q.gam()
p=i.h(0,q.gam())
i.m(0,s,p==null?1:p)}h=[]
i.E(0,new O.i4(b,h))
C.a.aZ(h,new O.i5())
a0=C.c.W(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hW(new V.bd(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.e_(b,"emission"):a2).c
s=b.gbW().c
p=b.gc3().c
o=b.y
o=(o==null?b.y=O.e_(b,"invDiffuse"):o).c
g=b.gbe().c
f=b.gd6().c
e=b.cx
e=(e==null?b.cx=O.e_(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hX(new V.P(0,0,0),b,"refract",new A.ae(!1,!1,!1)):d).c
c=b.db
return A.mf(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hT(b,"alpha",new A.ae(!1,!1,!1)):c).c,n,l,j,h)},
a6:function(a,b){if(b!=null)if(!C.a.w(a,b)){b.a=a.length
a.push(b)}},
ap:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.ar(m==null?[]:m)
s=H.V(m).c
for(;m.u();){r=s.a(m.d)
q=$.iY
if(q==null)q=$.iY=new V.E(0,0,1)
r.c=q
p=$.iX
r.d=p==null?$.iX=new V.E(0,1,0):p
p=$.iW
r.e=p==null?$.iW=new V.E(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bv(q).M()
r.d=n.bv(r.d).M()
r.e=n.bv(r.e).M()}}},
hm:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.cI()
r=s.bm
q=b0.fr
a9=q.h(0,r)
if(a9==null){p=b0.a
o=t.S
n=t.W
a9=new A.dZ(s,[],P.N(o,n),P.N(o,t.J),P.N(o,n),P.N(o,t.L),P.N(o,n),P.N(o,t.U),P.N(o,n),P.N(o,t.R),p,r)
a9.e_(s,p)
if(r.length===0)H.f(P.d("May not cache a shader with no name."))
if(q.fQ(0,r))H.f(P.d('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,a9)}a9=a7.a=a9
b1.e=null}m=a9.x
l=m.bn
s=b1.e
if(!(s instanceof Z.c6))s=b1.e=null
if(s==null||!s.d.q(0,l)){s=m.k4
if(s){r=b1.d
if(r!=null)r.aN()}r=m.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gV().bZ()
q.ga4().bZ()
q=q.e
if(q!=null)q.aB(0)}}q=m.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga4().fO()
p=p.e
if(p!=null)p.aB(0)}}p=b1.d
k=p==null?a8:p.fN(new Z.j4(b0.a),l)
if(k==null)return
p=k.aR($.b6())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=k.aR($.b5())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=k.aR($.b4())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aR($.bx())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=k.aR($.b7())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aR($.b3())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=k}j=[]
s=b0.a
s.useProgram(a9.e)
a9.ga9(a9).fZ()
if(m.fr){r=b0.dx
r=r.gU(r)
q=a9.db
if(q!=null)q.ag(r.a2(0,!0))}if(m.fx){r=b0.cx
if(r==null){r=b0.db
q=b0.dx
q=b0.cx=r.gU(r).N(0,q.gU(q))
r=q}q=a9.dx
if(q!=null)q.ag(r.a2(0,!0))}r=b0.ch
if(r==null){r=b0.dx
r=b0.ch=b0.ghj().N(0,r.gU(r))}q=a9.fr
if(q!=null)q.ag(r.a2(0,!0))
if(m.go){r=b0.db
r=r.gU(r)
q=a9.dy
if(q!=null)q.ag(r.a2(0,!0))}if(m.x1){r=$.kA
if(r==null){r=new V.cz(1,0,0,0,1,0,0,0,1)
$.kA=r}q=a9.go
if(q!=null)q.ag(r.a2(0,!0))}if(m.x2){r=V.an()
q=a9.id
if(q!=null)q.ag(r.a2(0,!0))}if(m.y1){r=V.an()
q=a9.k1
if(q!=null)q.ag(r.a2(0,!0))}if(m.aQ>0){r=a7.e.a
i=r.length
q=a9.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.e(r,h)
q=r[h]
p=a9.k3
if(h>=p.length)return H.e(p,h)
p=p[h]
g=new Float32Array(H.dg(q.a2(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}r=m.a
if(r.a){q=a7.f
q=q==null?a8:q.f
if(q==null)q=new V.P(0,0,0)
p=a9.k4
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a7.f
a7.a6(j,r==null?a8:r.e)
r=a7.f
r=r==null?a8:r.e
a9.a7(a9.r2,r)}if(m.k1){r=m.b
if(r.a){q=a7.r
q=q==null?a8:q.f
if(q==null)q=new V.P(0,0,0)
p=a9.rx
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a7.r
a7.a6(j,r==null?a8:r.e)
r=a7.r
r=r==null?a8:r.e
a9.a7(a9.x1,r)}r=m.c
if(r.a){q=a7.x
q=q==null?a8:q.f
if(q==null)q=new V.P(0,0,0)
p=a9.x2
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a7.x
a7.a6(j,r==null?a8:r.e)
r=a7.x
r=r==null?a8:r.e
a9.a7(a9.y2,r)}r=m.d
if(r.a){q=a7.y
q=q==null?a8:q.f
if(q==null)q=new V.P(0,0,0)
p=a9.aQ
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a7.y
a7.a6(j,r==null?a8:r.e)
r=a7.y
r=r==null?a8:r.e
a9.a7(a9.bn,r)}r=m.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=a7.z
p=p==null?a8:p.ch
if(p==null)p=100
o=a9.df
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a7.z
q=q==null?a8:q.f
if(q==null)q=new V.P(1,1,1)
p=a9.dd
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a7.z
a7.a6(j,r==null?a8:r.e)
r=a7.z
r=r==null?a8:r.e
a9.a7(a9.de,r)}r=m.z
if(r.length>0){f=new H.R(t.y)
q=a7.dx
q=q==null?a8:q.e
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.n)(q),++e){d=q[e]
c=d.gam()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
o=a9.c5.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.e(o,b)
a=o[b]
o=d.ghB()
n=$.aE
o=o.bc(n==null?$.aE=new V.ab(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghG()
n=$.aE
o=o.bc(n==null?$.aE=new V.ab(0,0,0):n)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaP(d)
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
if(d.gdc()){o=d.gd1()
n=a.e
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gd2()
n=a.f
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gd3()
n=a.r
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.n)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=a9.c4.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b0.db
a0=q.gU(q)
a1=new H.R(t.y)
q=a7.dx
q=q==null?a8:q.f
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.n)(q),++e){d=q[e]
b=a1.h(0,0)
if(b==null)b=0
a1.m(0,0,b+1)
o=a9.c7.h(0,0)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.e(o,b)
a=o[b]
o=a0.bv(d.c).M()
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.b
n=a.f
n.a.uniform3f(n.d,o.a,o.b,o.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.n)(r),++e){p=r[e].a
i=a1.h(0,p)
if(i==null)i=0
p=a9.c6.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b0.db
a0=q.gU(q)
a2=new H.R(t.y)
q=a7.dx
q=q==null?a8:q.r
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.n)(q),++e){d=q[e]
c=d.gam()
b=a2.h(0,c)
if(b==null)b=0
a2.m(0,c,b+1)
o=a9.c9.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.e(o,b)
a=o[b]
a3=a0.N(0,d.gU(d))
o=d.gU(d)
n=$.aE
o=o.bc(n==null?$.aE=new V.ab(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=$.aE
o=a3.bc(o==null?$.aE=new V.ab(0,0,0):o)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaP(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gaC()
o=a3.ds(0)
n=a.d
if(n!=null){g=new Float32Array(H.dg(new V.cz(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).a2(0,!0)))
n.a.uniformMatrix3fv(n.d,!1,g)}d.gaC()
o=d.gaC()
if(!C.a.w(j,o)){o.a=j.length
j.push(o)}o=d.gaC()
n=o.gb8(o)
if(n){n=a.f
if(n!=null){a4=o.d
a5=n.a
n=n.d
if(a4<6)a5.uniform1i(n,0)
else a5.uniform1i(n,o.a)}}d.gaY()
o=d.gdS()
n=a.x
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaY()
if(!C.a.w(j,o)){o.a=j.length
j.push(o)}o=d.gaY()
n=o.gb8(o)
if(n){n=a.r
if(n!=null){a4=o.d
a5=n.a
n=n.d
if(a4<6)a5.uniform1i(n,0)
else a5.uniform1i(n,o.a)}}if(d.gdc()){o=d.gd1()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gd2()
n=a.z
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gd3()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.n)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=a9.c8.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b0.db
a0=q.gU(q)
a6=new H.R(t.y)
q=a7.dx
q=q==null?a8:q.x
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.n)(q),++e){d=q[e]
c=d.gam()
b=a6.h(0,c)
if(b==null)b=0
a6.m(0,c,b+1)
o=a9.cb.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.e(o,b)
a=o[b]
o=d.ghi(d)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghE(d).M()
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=a0.bc(d.ghi(d))
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaP(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gaC()
o=d.gcp()
n=a.f
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gcm(d)
n=a.r
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghP()
n=a.x
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ghQ()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
d.gaC()
o=d.gaC()
if(!C.a.w(j,o)){o.a=j.length
j.push(o)}o=d.gaC()
n=o.gb8(o)
if(n){n=a.dx
if(n!=null){a4=o.gb8(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gan(o))}}d.gaY()
o=d.gdS()
n=a.z
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaY()
if(!C.a.w(j,o)){o.a=j.length
j.push(o)}o=d.gaY()
n=o.gb8(o)
if(n){n=a.dy
if(n!=null){a4=o.gb8(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gan(o))}}if(d.ghF()){o=d.ghD()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ghC()
n=a.ch
if(n!=null)n.a.uniform1f(n.d,o)}if(d.gdc()){o=d.gd1()
n=a.cx
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gd2()
n=a.cy
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gd3()
n=a.db
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.n)(r),++e){p=r[e].a
i=a6.h(0,p)
if(i==null)i=0
p=a9.ca.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.f.c){r=a7.Q
a7.a6(j,r==null?a8:r.e)
r=a7.Q
r=r==null?a8:r.e
a9.a7(a9.dg,r)}if(m.dy){r=b0.Q
if(r==null){r=b0.db
r=b0.Q=r.gU(r).ds(0)}q=a9.fy
if(q!=null)q.ag(r.a2(0,!0))}if(m.db){a7.a6(j,a8)
a9.a7(a9.dh,a8)
r=m.r
if(r.a){q=a7.cx
q=q==null?a8:q.f
if(q==null)q=new V.P(1,1,1)
p=a9.di
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a7.cx
a7.a6(j,r==null?a8:r.e)
r=a7.cx
r=r==null?a8:r.e
a9.a7(a9.dj,r)}r=m.x
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=a7.cy
p=p==null?a8:p.ch
if(p==null)p=0
o=a9.dk
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a7.cy
q=q==null?a8:q.f
if(q==null)q=new V.P(1,1,1)
p=a9.dl
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.c){r=a7.cy
a7.a6(j,r==null?a8:r.e)
r=a7.cy
r=r==null?a8:r.e
a9.a7(a9.dm,r)}}r=m.y
q=r.a
p=!q
if(p)o=r.c
else o=!0
if(o){if(q){q=a7.db
q=q==null?a8:q.f
if(q==null)q=1
o=a9.dn
if(o!=null)o.a.uniform1f(o.d,q)}if(r.c){q=a7.db
a7.a6(j,q==null?a8:q.e)
q=a7.db
q=q==null?a8:q.e
a9.a7(a9.dq,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h){q=j[h]
if(!q.c&&q.d>=6){q.c=!0
s.activeTexture(33984+q.a)
s.bindTexture(34067,q.b)}}q=t.D.a(b1.e)
q.bX(b0)
q.aT(b0)
q.hy(b0)
if(p)r=r.c
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h){r=j[h]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a8)}}s.useProgram(a8)
a9.ga9(a9).fX()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cI().bm}}
O.hZ.prototype={
$2:function(a,b){return this.b.push(new A.b9(a,C.c.W(b+3,4)*4))},
$S:8}
O.i_.prototype={
$2:function(a,b){return C.c.aa(a.a,b.a)},
$S:39}
O.i0.prototype={
$2:function(a,b){return this.b.push(new A.be(a,C.c.W(b+3,4)*4))},
$S:8}
O.i1.prototype={
$2:function(a,b){return C.c.aa(a.a,b.a)},
$S:40}
O.i2.prototype={
$2:function(a,b){return this.b.push(new A.bo(a,C.c.W(b+3,4)*4))},
$S:8}
O.i3.prototype={
$2:function(a,b){return C.c.aa(a.a,b.a)},
$S:41}
O.i4.prototype={
$2:function(a,b){return this.b.push(new A.bp(a,C.c.W(b+3,4)*4))},
$S:8}
O.i5.prototype={
$2:function(a,b){return C.c.aa(a.a,b.a)},
$S:42}
O.hT.prototype={
av:function(){var s,r=this
r.cw()
s=r.f
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.T(new D.B(r.b,s,1))}}}
O.cx.prototype={
T:function(a){return this.a.T(a)},
bA:function(){return this.T(null)},
av:function(){},
bS:function(a){var s,r,q=this
if(!q.c.q(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.av()
s=q.a
s.a=null
s.T(null)}},
saU:function(a){var s,r=this,q=r.c
if(!q.c)r.bS(new A.ae(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gt().O(0,r.gb1())
s=r.e
r.e=a
a.gt().n(0,r.gb1())
r.a.T(new D.B(r.b+".textureCube",s,r.e))}}}
O.hU.prototype={}
O.cy.prototype={
cS:function(a){var s,r=this
if(!r.f.q(0,a)){s=r.f
r.f=a
r.a.T(new D.B(r.b+".color",s,a))}},
av:function(){this.cw()
this.cS(new V.P(1,1,1))},
saP:function(a,b){this.bS(new A.ae(!0,!1,this.c.c))
this.cS(b)}}
O.hW.prototype={}
O.hX.prototype={
av:function(){var s,r=this
r.cz()
s=r.ch
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.T(new D.B(r.b+".refraction",s,1))}}}
O.hY.prototype={
cT:function(a){var s=this,r=s.ch
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.T(new D.B(s.b+".shininess",r,a))}},
av:function(){this.cz()
this.cT(100)}}
O.iw.prototype={}
T.ix.prototype={}
T.iy.prototype={
gt:function(){var s=this.e
return s==null?this.e=D.H():s}}
T.iz.prototype={
cf:function(a){var s,r=this,q=34067,p=a+"/posx.png",o=a+"/posy.png",n=a+"/posz.png",m=a+"/negx.png",l=a+"/negy.png",k=a+"/negz.png",j=r.a,i=j.createTexture()
i.toString
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.iy(i)
r.aJ(s,i,p,34069,!1,!1)
r.aJ(s,i,m,34070,!1,!1)
r.aJ(s,i,o,34071,!1,!1)
r.aJ(s,i,l,34072,!1,!1)
r.aJ(s,i,n,34073,!1,!1)
r.aJ(s,i,k,34074,!1,!1)
return s},
aJ:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.X(s,"load",new T.iA(this,s,!1,b,!1,d,a),!1)},
fs:function(a,b,c){var s,r,q,p,o,n
b=V.kk(b)
s=a.width
r=V.kk(s==null?512:s)
s=a.height
q=V.kk(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.jM()
p.width=r
p.height=q
o=t.b.a(C.f.dO(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.nX(o.getImageData(0,0,s,n==null?512:n))}}}
T.iA.prototype={
$1:function(a){var s=this,r=s.a,q=r.fs(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.U.hs(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.fY()}++r.e},
$S:3}
X.hG.prototype={
gt:function(){var s=this.x
return s==null?this.x=D.H():s}}
X.ed.prototype={
gt:function(){var s=this.f
return s==null?this.f=D.H():s},
aG:function(a){var s=this.f
return s==null?null:s.D(a)},
ea:function(){return this.aG(null)},
sb9:function(a){var s,r,q=this
if(!J.U(q.b,a)){s=q.b
if(s!=null)s.gt().O(0,q.gcD())
r=q.b
q.b=a
if(a!=null)a.gt().n(0,q.gcD())
q.aG(new D.B("mover",r,q.b))}}}
X.iv.prototype={}
V.at.prototype={
bg:function(a){this.b=new P.hI(C.K)
this.c=null
this.d=[]},
I:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.ek(p,0,p.length)
m=n==null?p:n
m=H.km(m," ","&nbsp;")
C.I.dQ(o,m)
m=o.style
m.color=b
C.a.gbp(l.d).push(o)}},
dG:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bl()
if(r!=null)for(q=new H.o(s),q=new P.bv(r.co(new H.aV(q,q.gl(q))).a());q.u();)p.bt(q.gB(q))}}
V.jJ.prototype={
$1:function(a){var s=C.d.cn(this.a.gh1(),2)
if(s!=="0.00")P.kl(s+" fps")},
$S:43}
V.dC.prototype={
bt:function(a){var s=this
switch(a.a){case"Class":s.I(a.b,"#551")
break
case"Comment":s.I(a.b,"#777")
break
case"Id":s.I(a.b,"#111")
break
case"Num":s.I(a.b,"#191")
break
case"Reserved":s.I(a.b,"#119")
break
case"String":s.I(a.b,"#171")
break
case"Symbol":s.I(a.b,"#616")
break
case"Type":s.I(a.b,"#B11")
break
case"Whitespace":s.I(a.b,"#111")
break}},
bl:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.iF()
a2.d=a2.k(0,q)
s=a2.k(0,q).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.K("a","z"))
s.push(K.K("A","Z"))
s=a2.k(0,p).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.K("0","9"))
s.push(K.K("a","z"))
s.push(K.K("A","Z"))
a2.k(0,q).j(0,o).a.push(K.K("0","9"))
a2.k(0,o).j(0,o).a.push(K.K("0","9"))
s=a2.k(0,o).j(0,n)
r=new K.q([])
r.p(new H.o("."))
s.a.push(r)
a2.k(0,n).j(0,m).a.push(K.K("0","9"))
a2.k(0,m).j(0,m).a.push(K.K("0","9"))
r=a2.k(0,q).j(0,l)
s=new K.q([])
s.p(new H.o(k))
r.a.push(s)
s=a2.k(0,l).j(0,l)
r=new K.q([])
r.p(new H.o(k))
s.a.push(r)
r=a2.k(0,q).j(0,j)
s=new K.q([])
s.p(new H.o('"'))
r.a.push(s)
s=a2.k(0,j).j(0,i)
r=new K.q([])
r.p(new H.o('"'))
s.a.push(r)
r=a2.k(0,j).j(0,h)
s=new K.q([])
s.p(new H.o("\\"))
r.a.push(s)
s=a2.k(0,h).j(0,j)
r=new K.q([])
r.p(new H.o('"'))
s.a.push(r)
a2.k(0,j).j(0,j).a.push(new K.aO())
r=a2.k(0,q).j(0,g)
s=new K.q([])
s.p(new H.o("'"))
r.a.push(s)
s=a2.k(0,g).j(0,f)
r=new K.q([])
r.p(new H.o("'"))
s.a.push(r)
r=a2.k(0,g).j(0,e)
s=new K.q([])
s.p(new H.o("\\"))
r.a.push(s)
s=a2.k(0,e).j(0,g)
r=new K.q([])
r.p(new H.o("'"))
s.a.push(r)
a2.k(0,g).j(0,g).a.push(new K.aO())
r=a2.k(0,q).j(0,d)
s=new K.q([])
s.p(new H.o("/"))
r.a.push(s)
s=a2.k(0,d).j(0,c)
r=new K.q([])
r.p(new H.o("/"))
s.a.push(r)
r=a2.k(0,c).j(0,b)
s=new K.q([])
s.p(new H.o("\n"))
r.a.push(s)
s=[]
a2.k(0,c).j(0,c).a.push(new K.a5(s))
r=new K.q([])
r.p(new H.o("\n"))
s.push(r)
r=a2.k(0,d).j(0,a)
s=new K.q([])
s.p(new H.o("*"))
r.a.push(s)
s=a2.k(0,a).j(0,a0)
r=new K.q([])
r.p(new H.o("*"))
s.a.push(r)
r=[]
a2.k(0,a0).j(0,a).a.push(new K.a5(r))
s=new K.q([])
s.p(new H.o("*"))
r.push(s)
s=a2.k(0,a0).j(0,b)
r=new K.q([])
r.p(new H.o("/"))
s.a.push(r)
r=a2.k(0,q).j(0,a1)
s=new K.q([])
s.p(new H.o(" \n\t"))
r.a.push(s)
s=a2.k(0,a1).j(0,a1)
r=new K.q([])
r.p(new H.o(" \n\t"))
s.a.push(r)
r=a2.k(0,o)
r.d=r.a.J("Num")
r=a2.k(0,m)
r.d=r.a.J("Num")
r=a2.k(0,l)
r.d=r.a.J("Symbol")
r=a2.k(0,i)
r.d=r.a.J("String")
r=a2.k(0,f)
r.d=r.a.J("String")
r=a2.k(0,b)
r.d=r.a.J(c)
r=a2.k(0,a1)
r.d=r.a.J(a1)
r=a2.k(0,p)
r=r.d=r.a.J(p)
r.aA(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aA(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aA(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dK.prototype={
bt:function(a){var s=this
switch(a.a){case"Builtin":s.I(a.b,"#411")
break
case"Comment":s.I(a.b,"#777")
break
case"Id":s.I(a.b,"#111")
break
case"Num":s.I(a.b,"#191")
break
case"Preprocess":s.I(a.b,"#737")
break
case"Reserved":s.I(a.b,"#119")
break
case"Symbol":s.I(a.b,"#611")
break
case"Type":s.I(a.b,"#171")
break
case"Whitespace":s.I(a.b,"#111")
break}},
bl:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.iF()
d.d=d.k(0,q)
s=d.k(0,q).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.K("a","z"))
s.push(K.K("A","Z"))
s=d.k(0,p).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.K("0","9"))
s.push(K.K("a","z"))
s.push(K.K("A","Z"))
d.k(0,q).j(0,o).a.push(K.K("0","9"))
d.k(0,o).j(0,o).a.push(K.K("0","9"))
s=d.k(0,o).j(0,n)
r=new K.q([])
r.p(new H.o("."))
s.a.push(r)
d.k(0,n).j(0,m).a.push(K.K("0","9"))
d.k(0,m).j(0,m).a.push(K.K("0","9"))
r=d.k(0,q).j(0,l)
s=new K.q([])
s.p(new H.o(k))
r.a.push(s)
s=d.k(0,l).j(0,l)
r=new K.q([])
r.p(new H.o(k))
s.a.push(r)
r=d.k(0,q).j(0,j)
s=new K.q([])
s.p(new H.o("/"))
r.a.push(s)
s=d.k(0,j).j(0,i)
r=new K.q([])
r.p(new H.o("/"))
s.a.push(r)
d.k(0,j).j(0,l).a.push(new K.aO())
r=d.k(0,i).j(0,h)
s=new K.q([])
s.p(new H.o("\n"))
r.a.push(s)
s=[]
d.k(0,i).j(0,i).a.push(new K.a5(s))
r=new K.q([])
r.p(new H.o("\n"))
s.push(r)
r=d.k(0,q).j(0,g)
s=new K.q([])
s.p(new H.o("#"))
r.a.push(s)
s=[]
d.k(0,g).j(0,g).a.push(new K.a5(s))
r=new K.q([])
r.p(new H.o("\n"))
s.push(r)
r=d.k(0,g).j(0,f)
s=new K.q([])
s.p(new H.o("\n"))
r.a.push(s)
s=d.k(0,q).j(0,e)
r=new K.q([])
r.p(new H.o(" \n\t"))
s.a.push(r)
r=d.k(0,e).j(0,e)
s=new K.q([])
s.p(new H.o(" \n\t"))
r.a.push(s)
s=d.k(0,o)
s.d=s.a.J("Num")
s=d.k(0,m)
s.d=s.a.J("Num")
s=d.k(0,l)
s.d=s.a.J("Symbol")
s=d.k(0,h)
s.d=s.a.J(i)
s=d.k(0,f)
s.d=s.a.J(g)
s=d.k(0,e)
s.d=s.a.J(e)
s=d.k(0,p)
s=s.d=s.a.J(p)
s.aA(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aA(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aA(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dM.prototype={
bt:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.I(a.b,"#911")
s.I("=",r)
break
case"Id":s.I(a.b,r)
break
case"Other":s.I(a.b,r)
break
case"Reserved":s.I(a.b,"#119")
break
case"String":s.I(a.b,"#171")
break
case"Symbol":s.I(a.b,"#616")
break}},
bl:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.iF()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.K("a","z"))
s.push(K.K("A","Z"))
s=j.k(0,p).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.K("0","9"))
s.push(K.K("a","z"))
s.push(K.K("A","Z"))
s=j.k(0,p).j(0,o)
r=new K.q([])
r.p(new H.o("="))
s.a.push(r)
s.c=!0
s=j.k(0,q).j(0,n)
r=new K.q([])
r.p(new H.o("</\\-!>="))
s.a.push(r)
r=j.k(0,n).j(0,n)
s=new K.q([])
s.p(new H.o("</\\-!>="))
r.a.push(s)
s=j.k(0,q).j(0,m)
r=new K.q([])
r.p(new H.o('"'))
s.a.push(r)
r=j.k(0,m).j(0,l)
s=new K.q([])
s.p(new H.o('"'))
r.a.push(s)
s=j.k(0,m).j(0,"EscStr")
r=new K.q([])
r.p(new H.o("\\"))
s.a.push(r)
r=j.k(0,"EscStr").j(0,m)
s=new K.q([])
s.p(new H.o('"'))
r.a.push(s)
j.k(0,m).j(0,m).a.push(new K.aO())
j.k(0,q).j(0,k).a.push(new K.aO())
s=[]
j.k(0,k).j(0,k).a.push(new K.a5(s))
r=new K.q([])
r.p(new H.o('</\\-!>=_"'))
s.push(r)
s.push(K.K("a","z"))
s.push(K.K("A","Z"))
s=j.k(0,n)
s.d=s.a.J("Symbol")
s=j.k(0,l)
s.d=s.a.J("String")
s=j.k(0,p)
r=s.a.J(p)
s.d=r
r.aA(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.k(0,o)
r.d=r.a.J(o)
r=j.k(0,k)
r.d=r.a.J(k)
return j}}
V.ef.prototype={
dG:function(a,b){this.d=[]
this.I(C.a.j(b,"\n"),"#111")},
bt:function(a){},
bl:function(){return null}}
V.ip.prototype={
d_:function(a){var s,r,q,p,o,n,m=this.fw(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.o(C.a.h3(a)),s=new P.bv(m.co(new H.aV(s,s.gl(s))).a());s.u();){r=s.gB(s)
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
if(H.lq(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.l7(C.q,r,C.h,!1)
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
dN:function(a){var s,r,q,p=new V.dC("dart",[])
p.bg("dart")
s=new V.dK("glsl",[])
s.bg("glsl")
r=new V.dM("html",[])
r.bg("html")
q=C.a.h0([p,s,r],new V.is(a))
if(q!=null)return q
p=new V.ef("plain",[])
p.bg("plain")
return p},
cY:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.bx(q,"+")){b2[r]=C.b.aq(q,1)
a8.push(1)
s=!0}else if(C.b.bx(q,"-")){b2[r]=C.b.aq(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dN(b0)
p.dG(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.l7(C.q,a9,C.h,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.kp()
h.href="#"+l
h.textContent=a9
i.appendChild(h).toString
j.appendChild(i).toString
k.appendChild(j).toString
m.appendChild(k).toString
if(s)for(g=b1,f=g,r=0;e=p.d,r<e.length;++r){q=e[r]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className="codeLineNums codeLineLight"
b=o.createElement("td")
b.className=a6
if(r>=a8.length)return H.e(a8,r)
a=a8[r]
if(a===0){++f;++g
c.textContent=""+f
b.textContent=""+g}else if(a>0){d.className="codeTableRow codeLineLightGreen"
c.className="codeLineNums codeLineGreen codeLineCenter"
b.className="codeLineNums codeLineGreen";++g
c.textContent="+"
b.textContent=""+g}else if(a<0){d.className="codeTableRow codeLineLightRed"
c.className="codeLineNums codeLineRed"
b.className="codeLineNums codeLineRed codeLineCenter";++f
c.textContent=""+f
b.textContent="-"}a0=o.createElement("td")
a0.className=a7
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.n)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.n)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gL(q);a4.u();)b.appendChild(a4.gB(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
fw:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.iF()
h.d=h.k(0,q)
s=h.k(0,q).j(0,p)
r=new K.q([])
r.p(new H.o("*"))
s.a.push(r)
s.c=!0
s=[]
h.k(0,p).j(0,p).a.push(new K.a5(s))
r=new K.q([])
r.p(new H.o("*"))
s.push(r)
r=h.k(0,p).j(0,"BoldEnd")
s=new K.q([])
s.p(new H.o("*"))
r.a.push(s)
r.c=!0
r=h.k(0,q).j(0,o)
s=new K.q([])
s.p(new H.o("_"))
r.a.push(s)
r.c=!0
r=[]
h.k(0,o).j(0,o).a.push(new K.a5(r))
s=new K.q([])
s.p(new H.o("_"))
r.push(s)
s=h.k(0,o).j(0,n)
r=new K.q([])
r.p(new H.o("_"))
s.a.push(r)
s.c=!0
s=h.k(0,q).j(0,m)
r=new K.q([])
r.p(new H.o("`"))
s.a.push(r)
s.c=!0
s=[]
h.k(0,m).j(0,m).a.push(new K.a5(s))
r=new K.q([])
r.p(new H.o("`"))
s.push(r)
r=h.k(0,m).j(0,"CodeEnd")
s=new K.q([])
s.p(new H.o("`"))
r.a.push(s)
r.c=!0
r=h.k(0,q).j(0,l)
s=new K.q([])
s.p(new H.o("["))
r.a.push(s)
r.c=!0
r=h.k(0,l).j(0,k)
s=new K.q([])
s.p(new H.o("|"))
r.a.push(s)
s=h.k(0,l).j(0,j)
r=new K.q([])
r.p(new H.o("]"))
s.a.push(r)
s.c=!0
s=[]
h.k(0,l).j(0,l).a.push(new K.a5(s))
r=new K.q([])
r.p(new H.o("|]"))
s.push(r)
r=h.k(0,k).j(0,j)
s=new K.q([])
s.p(new H.o("]"))
r.a.push(s)
r.c=!0
r=[]
h.k(0,k).j(0,k).a.push(new K.a5(r))
s=new K.q([])
s.p(new H.o("|]"))
r.push(s)
h.k(0,q).j(0,i).a.push(new K.aO())
s=[]
h.k(0,i).j(0,i).a.push(new K.a5(s))
r=new K.q([])
r.p(new H.o("*_`["))
s.push(r)
r=h.k(0,"BoldEnd")
r.d=r.a.J(p)
r=h.k(0,n)
r.d=r.a.J(o)
r=h.k(0,"CodeEnd")
r.d=r.a.J(m)
r=h.k(0,j)
r.d=r.a.J("Link")
r=h.k(0,i)
r.d=r.a.J(i)
return this.b=h}}
V.ir.prototype={
$1:function(a){P.kO(C.i,new V.iq(this.a))},
$S:3}
V.iq.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ah(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.u(-0.01*s)+"px"
q.top=r},
$S:2}
V.is.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:44}
Z.jH.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
q=q==null?null:q.c
s.cY("Vertex Shader","glsl",0,(q==null?"":q).split("\n"))
r=r.a
r=r==null?null:r.d
s.cY("Fragment Shader","glsl",0,(r==null?"":r).split("\n"))},
$S:1};(function aliases(){var s=J.a.prototype
s.dV=s.i
s=J.bi.prototype
s.dX=s.i
s=P.h.prototype
s.dW=s.bw
s=W.A.prototype
s.by=s.ab
s=W.d3.prototype
s.dY=s.al
s=K.dL.prototype
s.dU=s.ay
s.bz=s.i
s=O.cx.prototype
s.cw=s.av
s=O.cy.prototype
s.cz=s.av})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"nc","ma",45)
r(P,"nR","mE",9)
r(P,"nS","mF",9)
r(P,"nT","mG",9)
q(P,"li","nM",2)
r(W,"po","hw",35)
p(W,"o4",4,null,["$4"],["mH"],17,0)
p(W,"o5",4,null,["$4"],["mI"],17,0)
var j
o(j=E.bC.prototype,"gdE",0,0,null,["$1","$0"],["dF","hc"],0,0)
o(j,"gdC",0,0,null,["$1","$0"],["dD","hb"],0,0)
o(j,"gdA",0,0,null,["$1","$0"],["dB","h8"],0,0)
n(j,"gh6","h7",6)
n(j,"gh9","ha",6)
o(j=E.eE.prototype,"gcA",0,0,null,["$1","$0"],["cC","cB"],0,0)
m(j,"gho","dK",2)
l(j=X.eZ.prototype,"geS","eT",3)
l(j,"geG","eH",3)
l(j,"geM","eN",4)
l(j,"geW","eX",21)
l(j,"geU","eV",21)
l(j,"gf_","f0",4)
l(j,"gf3","f4",4)
l(j,"geQ","eR",4)
l(j,"gf1","f2",4)
l(j,"geO","eP",4)
l(j,"gf5","f6",27)
l(j,"gf7","f8",3)
l(j,"gfk","fl",11)
l(j,"gfg","fh",11)
l(j,"gfi","fj",11)
o(D.cb.prototype,"ge4",0,0,null,["$1","$0"],["ar","e5"],0,0)
o(j=D.cp.prototype,"gcN",0,0,null,["$1","$0"],["cO","eY"],0,0)
l(j,"gfa","fb",29)
n(j,"geA","eB",14)
n(j,"gfe","ff",14)
k(V.W.prototype,"gl","cd",18)
k(V.E.prototype,"gl","cd",18)
o(j=U.bE.prototype,"gaK",0,0,null,["$1","$0"],["K","Z"],0,0)
n(j,"gey","ez",23)
n(j,"gfc","fd",23)
o(j=U.cQ.prototype,"gaK",0,0,null,["$1","$0"],["K","Z"],0,0)
l(j,"gbJ","bK",12)
l(j,"gbL","bM",12)
l(j,"gbN","bO",12)
o(j=U.cR.prototype,"gaK",0,0,null,["$1","$0"],["K","Z"],0,0)
l(j,"gbJ","bK",1)
l(j,"gbL","bM",1)
l(j,"gbN","bO",1)
l(j,"geq","er",1)
l(j,"ges","eu",1)
l(j,"gfF","fG",1)
l(j,"gfD","fE",1)
l(j,"gfB","fC",1)
l(U.cS.prototype,"gew","ex",1)
o(j=M.dF.prototype,"gaj",0,0,null,["$1","$0"],["as","e6"],0,0)
n(j,"geI","eJ",6)
n(j,"geK","eL",6)
o(j=O.dY.prototype,"gb1",0,0,null,["$1","$0"],["T","bA"],0,0)
o(j,"gcP",0,0,null,["$1","$0"],["cQ","fq"],0,0)
n(j,"geC","eD",16)
n(j,"geE","eF",16)
o(O.cx.prototype,"gb1",0,0,null,["$1","$0"],["T","bA"],0,0)
o(X.ed.prototype,"gcD",0,0,null,["$1","$0"],["aG","ea"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.M,null)
q(P.M,[H.jU,J.a,J.a9,P.G,P.cX,P.h,H.aV,P.dO,H.ch,H.eX,H.iJ,H.ic,H.fJ,H.bc,P.T,H.hO,H.dW,H.hK,H.ah,H.fl,P.d9,P.bX,P.bv,P.f4,P.ew,P.ex,P.jo,P.de,P.jc,P.cW,P.D,P.eo,P.dy,P.hJ,P.jm,P.Q,P.bf,P.ec,P.cM,P.fi,P.hF,P.ag,P.aX,W.hn,W.jP,W.k3,W.bW,W.I,W.cF,W.d3,W.fO,W.ci,W.jg,W.fY,P.db,P.fC,K.aO,K.dL,K.ig,K.q,L.et,L.eF,L.eG,L.iE,O.bB,O.cA,E.hh,E.bC,E.bA,E.bL,E.ff,E.ih,E.eE,Z.f2,Z.j4,Z.c6,Z.ck,Z.aY,D.hj,D.bD,D.O,X.c7,X.dT,X.hM,X.hR,X.a_,X.i9,X.iG,X.eZ,D.cb,V.P,V.bd,V.hz,V.cz,V.bH,V.a1,V.ab,V.eh,V.ek,V.W,V.E,U.cQ,U.cR,U.cS,M.dF,A.hd,A.he,A.ae,A.b9,A.be,A.bo,A.bp,A.hV,A.eN,A.eO,A.eR,A.eU,A.iL,A.iR,F.aw,F.hN,F.id,F.im,F.cL,F.bP,F.bQ,F.cT,F.x,F.iZ,F.f0,F.j1,O.iw,O.cx,O.hW,T.iz,X.iv,X.ed,V.at,V.ip])
q(J.a,[J.dP,J.cn,J.bi,J.am,J.bG,J.aT,H.cC,W.b,W.hb,W.dx,W.c8,W.av,W.F,W.f9,W.af,W.hq,W.hr,W.fa,W.ce,W.fc,W.hs,W.i,W.fj,W.ay,W.hH,W.fo,W.bh,W.hQ,W.i6,W.fs,W.ft,W.aB,W.fu,W.fw,W.aD,W.fA,W.fD,W.aF,W.fE,W.aG,W.fK,W.ai,W.fQ,W.iC,W.aH,W.fS,W.iH,W.iT,W.fZ,W.h0,W.h2,W.h4,W.h6,P.bk,P.fq,P.bn,P.fy,P.ie,P.fL,P.br,P.fU,P.hf,P.f6,P.bN,P.fH])
q(J.bi,[J.ee,J.bs,J.az])
r(J.dR,J.am)
q(J.bG,[J.cm,J.dQ])
q(P.G,[H.dU,P.eJ,H.dS,H.eW,H.em,H.fg,P.du,P.e9,P.ak,P.eY,P.eV,P.bR,P.dz,P.dB])
r(P.cr,P.cX)
q(P.cr,[H.bT,W.f7,W.a2,P.dI])
r(H.o,H.bT)
q(P.h,[H.j,H.bl,H.bu,P.cl])
q(H.j,[H.cs,H.aU])
r(H.cf,H.bl)
q(P.dO,[H.cv,H.f3])
r(H.cw,H.cs)
r(H.cG,P.eJ)
q(H.bc,[H.eB,H.hL,H.jD,H.jE,H.jF,P.j6,P.j5,P.j7,P.j8,P.jl,P.jk,P.jx,P.je,P.jf,P.hS,P.ht,P.hu,W.hv,W.i7,W.i8,W.il,W.it,W.j9,W.ib,W.ia,W.jh,W.ji,W.jj,W.jn,P.js,P.jz,P.hD,P.hE,P.hg,E.ii,E.ij,E.ik,E.iB,D.hB,D.hC,F.jp,F.io,F.j3,F.j2,F.j_,F.j0,O.hZ,O.i_,O.i0,O.i1,O.i2,O.i3,O.i4,O.i5,T.iA,V.jJ,V.ir,V.iq,V.is,Z.jH])
q(H.eB,[H.eu,H.bz])
r(P.cu,P.T)
q(P.cu,[H.R,W.f5])
r(H.bK,H.cC)
q(H.bK,[H.cZ,H.d0])
r(H.d_,H.cZ)
r(H.bm,H.d_)
r(H.d1,H.d0)
r(H.cB,H.d1)
q(H.cB,[H.e3,H.e4,H.e5,H.e6,H.e7,H.cD,H.e8])
r(H.da,H.fg)
r(P.d6,P.cl)
r(P.jd,P.jo)
r(P.d2,P.de)
r(P.cV,P.d2)
r(P.dA,P.ex)
r(P.hx,P.dy)
q(P.dA,[P.hI,P.iV])
r(P.iU,P.hx)
q(P.ak,[P.cJ,P.dN])
q(W.b,[W.r,W.dH,W.ao,W.d4,W.ap,W.ac,W.d7,W.f1,W.bU,P.dw,P.aP])
q(W.r,[W.A,W.al,W.bV])
q(W.A,[W.p,P.k])
q(W.p,[W.ds,W.dt,W.by,W.ba,W.bb,W.cc,W.dJ,W.bF,W.en,W.cN,W.ez,W.eA,W.bS])
r(W.hm,W.av)
r(W.ca,W.f9)
q(W.af,[W.ho,W.hp])
r(W.fb,W.fa)
r(W.cd,W.fb)
r(W.fd,W.fc)
r(W.dE,W.fd)
r(W.ax,W.dx)
r(W.fk,W.fj)
r(W.dG,W.fk)
r(W.fp,W.fo)
r(W.bg,W.fp)
r(W.aJ,W.i)
q(W.aJ,[W.bj,W.aa,W.bq])
r(W.e0,W.fs)
r(W.e1,W.ft)
r(W.fv,W.fu)
r(W.e2,W.fv)
r(W.fx,W.fw)
r(W.cE,W.fx)
r(W.fB,W.fA)
r(W.eg,W.fB)
r(W.el,W.fD)
r(W.d5,W.d4)
r(W.eq,W.d5)
r(W.fF,W.fE)
r(W.er,W.fF)
r(W.ev,W.fK)
r(W.fR,W.fQ)
r(W.eC,W.fR)
r(W.d8,W.d7)
r(W.eD,W.d8)
r(W.fT,W.fS)
r(W.eH,W.fT)
r(W.aZ,W.aa)
r(W.h_,W.fZ)
r(W.f8,W.h_)
r(W.cU,W.ce)
r(W.h1,W.h0)
r(W.fm,W.h1)
r(W.h3,W.h2)
r(W.cY,W.h3)
r(W.h5,W.h4)
r(W.fG,W.h5)
r(W.h7,W.h6)
r(W.fN,W.h7)
r(W.fe,W.f5)
r(W.fh,P.ew)
r(W.fP,W.d3)
r(P.a7,P.fC)
r(P.fr,P.fq)
r(P.dV,P.fr)
r(P.fz,P.fy)
r(P.ea,P.fz)
r(P.bO,P.k)
r(P.fM,P.fL)
r(P.ey,P.fM)
r(P.fV,P.fU)
r(P.eI,P.fV)
r(P.dv,P.f6)
r(P.eb,P.aP)
r(P.fI,P.fH)
r(P.es,P.fI)
q(K.dL,[K.a5,L.iI])
q(E.hh,[Z.c5,A.cK,T.ix])
q(D.O,[D.aR,D.aS,D.B,X.ei])
q(X.ei,[X.ct,X.bI,X.bJ,X.cO])
q(O.bB,[D.cp,U.bE])
q(D.hj,[U.hk,U.a0])
r(U.c9,U.a0)
r(A.dZ,A.cK)
q(A.iL,[A.cP,A.iO,A.iP,A.iQ,A.iM,A.eK,A.iN,A.eL,A.eM,A.iS,A.eP,A.eQ,A.eS,A.eT])
r(O.dY,O.iw)
q(O.cx,[O.hT,O.hU,O.cy])
q(O.cy,[O.hX,O.hY])
r(T.iy,T.ix)
r(X.hG,X.iv)
q(V.at,[V.dC,V.dK,V.dM,V.ef])
s(H.bT,H.eX)
s(H.cZ,P.D)
s(H.d_,H.ch)
s(H.d0,P.D)
s(H.d1,H.ch)
s(P.cX,P.D)
s(P.de,P.eo)
s(W.f9,W.hn)
s(W.fa,P.D)
s(W.fb,W.I)
s(W.fc,P.D)
s(W.fd,W.I)
s(W.fj,P.D)
s(W.fk,W.I)
s(W.fo,P.D)
s(W.fp,W.I)
s(W.fs,P.T)
s(W.ft,P.T)
s(W.fu,P.D)
s(W.fv,W.I)
s(W.fw,P.D)
s(W.fx,W.I)
s(W.fA,P.D)
s(W.fB,W.I)
s(W.fD,P.T)
s(W.d4,P.D)
s(W.d5,W.I)
s(W.fE,P.D)
s(W.fF,W.I)
s(W.fK,P.T)
s(W.fQ,P.D)
s(W.fR,W.I)
s(W.d7,P.D)
s(W.d8,W.I)
s(W.fS,P.D)
s(W.fT,W.I)
s(W.fZ,P.D)
s(W.h_,W.I)
s(W.h0,P.D)
s(W.h1,W.I)
s(W.h2,P.D)
s(W.h3,W.I)
s(W.h4,P.D)
s(W.h5,W.I)
s(W.h6,P.D)
s(W.h7,W.I)
s(P.fq,P.D)
s(P.fr,W.I)
s(P.fy,P.D)
s(P.fz,W.I)
s(P.fL,P.D)
s(P.fM,W.I)
s(P.fU,P.D)
s(P.fV,W.I)
s(P.f6,P.T)
s(P.fH,P.D)
s(P.fI,W.I)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",Y:"double",Z:"num",v:"String",a4:"bool",ag:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([O?])","~(O)","~()","~(i)","~(aa)","~(v,@)","~(l,h<bC>)","~(aw)","~(l,l)","~(~())","ag()","~(bq)","~(O?)","~(~(O))","~(l,h<co>)","v(l)","~(l,h<bH>)","a4(A,v,v,bW)","Y()","a4(aC)","a4(r)","~(bj)","a4(v)","~(l,h<a0?>)","~(Z)","~(M?,M?)","@(v)","~(aZ)","@(@,v)","a4(h<co>)","A(r)","~(@,@)","~(@)","ag(@)","~(cT,Y,Y)","v(b)","~(v,v)","@(@)","ag(~())","l(b9,b9)","l(be,be)","l(bo,bo)","l(bp,bp)","~(iD)","a4(at?)","l(@,@)","v(v)","c5(l)","~(r,r?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.n_(v.typeUniverse,JSON.parse('{"ee":"bi","bs":"bi","az":"bi","oo":"i","oA":"i","oq":"aP","op":"b","oG":"b","oJ":"b","on":"k","oB":"k","or":"p","oE":"p","oC":"r","oz":"r","p6":"ac","ov":"aJ","os":"al","oK":"al","oI":"aa","oD":"bg","ow":"F","ox":"ai","oF":"bm","dP":{"a4":[]},"am":{"m":["1"],"j":["1"],"h":["1"],"t":["1"]},"dR":{"m":["1"],"j":["1"],"h":["1"],"t":["1"]},"bG":{"Y":[],"Z":[]},"cm":{"Y":[],"l":[],"Z":[]},"dQ":{"Y":[],"Z":[]},"aT":{"v":[],"t":["@"]},"dU":{"G":[]},"o":{"m":["l"],"j":["l"],"h":["l"]},"j":{"h":["1"]},"cs":{"j":["1"],"h":["1"]},"bl":{"h":["2"]},"cf":{"j":["2"],"h":["2"]},"cw":{"j":["2"],"h":["2"]},"bu":{"h":["1"]},"bT":{"m":["1"],"j":["1"],"h":["1"]},"cG":{"G":[]},"dS":{"G":[]},"eW":{"G":[]},"bc":{"cj":[]},"eB":{"cj":[]},"eu":{"cj":[]},"bz":{"cj":[]},"em":{"G":[]},"R":{"S":["1","2"],"T.V":"2"},"aU":{"j":["1"],"h":["1"]},"bK":{"w":["1"],"t":["1"]},"bm":{"w":["Y"],"m":["Y"],"j":["Y"],"t":["Y"],"h":["Y"]},"cB":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e3":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e4":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e5":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e6":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e7":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"cD":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"e8":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"fg":{"G":[]},"da":{"G":[]},"d9":{"iD":[]},"d6":{"h":["1"]},"cV":{"j":["1"],"h":["1"]},"cl":{"h":["1"]},"cr":{"m":["1"],"j":["1"],"h":["1"]},"cu":{"S":["1","2"]},"T":{"S":["1","2"]},"d2":{"j":["1"],"h":["1"]},"Y":{"Z":[]},"l":{"Z":[]},"m":{"j":["1"],"h":["1"]},"du":{"G":[]},"eJ":{"G":[]},"e9":{"G":[]},"ak":{"G":[]},"cJ":{"G":[]},"dN":{"G":[]},"eY":{"G":[]},"eV":{"G":[]},"bR":{"G":[]},"dz":{"G":[]},"ec":{"G":[]},"cM":{"G":[]},"dB":{"G":[]},"A":{"r":[],"b":[]},"bj":{"i":[]},"aa":{"i":[]},"r":{"b":[]},"ao":{"b":[]},"ap":{"b":[]},"ac":{"b":[]},"bq":{"i":[]},"aJ":{"i":[]},"aZ":{"aa":[],"i":[]},"bW":{"aC":[]},"p":{"A":[],"r":[],"b":[]},"ds":{"A":[],"r":[],"b":[]},"dt":{"A":[],"r":[],"b":[]},"by":{"A":[],"r":[],"b":[]},"ba":{"A":[],"r":[],"b":[]},"bb":{"A":[],"r":[],"b":[]},"al":{"r":[],"b":[]},"cc":{"A":[],"r":[],"b":[]},"cd":{"m":["a7<Z>"],"w":["a7<Z>"],"j":["a7<Z>"],"h":["a7<Z>"],"t":["a7<Z>"]},"ce":{"a7":["Z"]},"dE":{"m":["v"],"w":["v"],"j":["v"],"h":["v"],"t":["v"]},"f7":{"m":["A"],"j":["A"],"h":["A"]},"dG":{"m":["ax"],"w":["ax"],"j":["ax"],"h":["ax"],"t":["ax"]},"dH":{"b":[]},"dJ":{"A":[],"r":[],"b":[]},"bg":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"bF":{"A":[],"r":[],"b":[]},"e0":{"S":["v","@"],"T.V":"@"},"e1":{"S":["v","@"],"T.V":"@"},"e2":{"m":["aB"],"w":["aB"],"j":["aB"],"h":["aB"],"t":["aB"]},"a2":{"m":["r"],"j":["r"],"h":["r"]},"cE":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"eg":{"m":["aD"],"w":["aD"],"j":["aD"],"h":["aD"],"t":["aD"]},"el":{"S":["v","@"],"T.V":"@"},"en":{"A":[],"r":[],"b":[]},"eq":{"m":["ao"],"w":["ao"],"b":[],"j":["ao"],"h":["ao"],"t":["ao"]},"er":{"m":["aF"],"w":["aF"],"j":["aF"],"h":["aF"],"t":["aF"]},"ev":{"S":["v","v"],"T.V":"v"},"cN":{"A":[],"r":[],"b":[]},"ez":{"A":[],"r":[],"b":[]},"eA":{"A":[],"r":[],"b":[]},"bS":{"A":[],"r":[],"b":[]},"eC":{"m":["ac"],"w":["ac"],"j":["ac"],"h":["ac"],"t":["ac"]},"eD":{"m":["ap"],"w":["ap"],"b":[],"j":["ap"],"h":["ap"],"t":["ap"]},"eH":{"m":["aH"],"w":["aH"],"j":["aH"],"h":["aH"],"t":["aH"]},"f1":{"b":[]},"bU":{"b":[]},"bV":{"r":[],"b":[]},"f8":{"m":["F"],"w":["F"],"j":["F"],"h":["F"],"t":["F"]},"cU":{"a7":["Z"]},"fm":{"m":["ay?"],"w":["ay?"],"j":["ay?"],"h":["ay?"],"t":["ay?"]},"cY":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"fG":{"m":["aG"],"w":["aG"],"j":["aG"],"h":["aG"],"t":["aG"]},"fN":{"m":["ai"],"w":["ai"],"j":["ai"],"h":["ai"],"t":["ai"]},"f5":{"S":["v","v"]},"fe":{"S":["v","v"],"T.V":"v"},"cF":{"aC":[]},"d3":{"aC":[]},"fP":{"aC":[]},"fO":{"aC":[]},"db":{"bh":[]},"dI":{"m":["A"],"j":["A"],"h":["A"]},"a7":{"fC":["1"]},"dV":{"m":["bk"],"j":["bk"],"h":["bk"]},"ea":{"m":["bn"],"j":["bn"],"h":["bn"]},"bO":{"k":[],"A":[],"r":[],"b":[]},"ey":{"m":["v"],"j":["v"],"h":["v"]},"k":{"A":[],"r":[],"b":[]},"eI":{"m":["br"],"j":["br"],"h":["br"]},"dv":{"S":["v","@"],"T.V":"@"},"dw":{"b":[]},"aP":{"b":[]},"eb":{"b":[]},"es":{"m":["S<@,@>"],"j":["S<@,@>"],"h":["S<@,@>"]},"bB":{"h":["1"]},"aR":{"O":[]},"aS":{"O":[]},"B":{"O":[]},"ct":{"O":[]},"bI":{"O":[]},"bJ":{"O":[]},"ei":{"O":[]},"cO":{"O":[]},"cb":{"co":[]},"cp":{"h":["co"]},"c9":{"a0":[]},"bE":{"a0":[],"h":["a0?"]},"cQ":{"a0":[]},"cR":{"a0":[]},"cS":{"a0":[]},"dZ":{"cK":[]},"dC":{"at":[]},"dK":{"at":[]},"dM":{"at":[]},"ef":{"at":[]}}'))
H.mZ(v.typeUniverse,JSON.parse('{"am":1,"dR":1,"a9":1,"j":1,"cs":1,"aV":1,"bl":2,"cf":2,"cv":2,"cw":2,"bu":1,"f3":1,"ch":1,"eX":1,"bT":1,"aU":1,"dW":1,"bK":1,"bv":1,"d6":1,"ew":1,"ex":2,"cW":1,"cl":1,"cr":1,"D":1,"cu":2,"T":2,"eo":1,"d2":1,"cX":1,"de":1,"dy":2,"dA":2,"h":1,"m":1,"dO":1,"fh":1,"I":1,"ci":1,"bB":1,"aR":1,"aS":1,"B":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.o0
return{w:s("by"),t:s("ba"),D:s("c6"),E:s("bb"),b:s("c8"),V:s("j<@>"),h:s("A"),C:s("G"),B:s("i"),Y:s("cj"),I:s("bh"),l:s("bF"),m:s("am<@>"),e:s("t<@>"),T:s("cn"),M:s("az"),p:s("w<@>"),c:s("R<l,a4>"),y:s("R<l,l>"),J:s("m<eN>"),L:s("m<eO>"),U:s("m<eR>"),R:s("m<eU>"),d:s("m<@>"),r:s("ct"),f:s("S<@,@>"),Z:s("bI"),O:s("bJ"),P:s("ag"),K:s("M"),q:s("a7<Z>"),s:s("bO"),k:s("cK"),N:s("v"),u:s("k"),bg:s("bS"),ae:s("iD"),aR:s("eF"),aM:s("cO"),n:s("eK"),v:s("cP"),g:s("eL"),F:s("eM"),Q:s("eP"),j:s("eQ"),G:s("eS"),a:s("eT"),o:s("bs"),x:s("bV"),cB:s("a4"),i:s("Y"),z:s("@"),S:s("l"),A:s("0&*"),_:s("M*"),bc:s("kx<ag>?"),X:s("M?"),ba:s("bN?"),aJ:s("et?"),aX:s("eG?"),W:s("cP?"),H:s("Z")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.ba.prototype
C.f=W.bb.prototype
C.I=W.cc.prototype
C.L=J.a.prototype
C.a=J.am.prototype
C.c=J.cm.prototype
C.M=J.cn.prototype
C.d=J.bG.prototype
C.b=J.aT.prototype
C.N=J.az.prototype
C.u=J.ee.prototype
C.U=P.bN.prototype
C.v=W.cN.prototype
C.k=J.bs.prototype
C.w=W.aZ.prototype
C.x=W.bU.prototype
C.y=new E.bA("Browser.chrome")
C.m=new E.bA("Browser.firefox")
C.n=new E.bA("Browser.edge")
C.z=new E.bA("Browser.other")
C.o=function getTagFallback(o) {
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
C.p=function(hooks) { return hooks; }

C.G=new P.ec()
C.h=new P.iU()
C.H=new P.iV()
C.e=new P.jd()
C.i=new P.bf(0)
C.J=new P.bf(5e6)
C.K=new P.hJ("element",!1,!1,!1)
C.O=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=s([])
C.q=s([0,0,65498,45055,65535,34815,65534,18431])
C.r=s(["bind","if","ref","repeat","syntax"])
C.j=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bL("OperatingSystem.windows")
C.t=new E.bL("OperatingSystem.mac")
C.S=new E.bL("OperatingSystem.linux")
C.T=new E.bL("OperatingSystem.other")
C.V=new P.bX(null,2)})();(function staticFields(){$.ja=null
$.as=0
$.c4=null
$.kq=null
$.lk=null
$.lh=null
$.lo=null
$.jA=null
$.jG=null
$.kh=null
$.bY=null
$.di=null
$.dj=null
$.kc=!1
$.aq=C.e
$.a8=[]
$.aQ=null
$.jO=null
$.kw=null
$.kv=null
$.fn=P.N(t.N,t.Y)
$.hy=null
$.kA=null
$.kC=null
$.a6=null
$.aE=null
$.kH=null
$.bt=null
$.kT=null
$.iW=null
$.iX=null
$.iY=null
$.kS=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"oy","lu",function(){return H.o3("_$dart_dartClosure")})
s($,"oL","lw",function(){return H.aI(H.iK({
toString:function(){return"$receiver$"}}))})
s($,"oM","lx",function(){return H.aI(H.iK({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oN","ly",function(){return H.aI(H.iK(null))})
s($,"oO","lz",function(){return H.aI(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oR","lC",function(){return H.aI(H.iK(void 0))})
s($,"oS","lD",function(){return H.aI(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oQ","lB",function(){return H.aI(H.kQ(null))})
s($,"oP","lA",function(){return H.aI(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"oU","lF",function(){return H.aI(H.kQ(void 0))})
s($,"oT","lE",function(){return H.aI(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"p7","kn",function(){return P.mD()})
s($,"pa","lK",function(){return P.mq("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"p8","lJ",function(){return P.ky(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"p0","lI",function(){return Z.aj(0)})
s($,"oV","lG",function(){return Z.aj(511)})
s($,"p2","b6",function(){return Z.aj(1)})
s($,"p1","b5",function(){return Z.aj(2)})
s($,"oX","b4",function(){return Z.aj(4)})
s($,"p3","bx",function(){return Z.aj(8)})
s($,"p4","b7",function(){return Z.aj(16)})
s($,"oY","dp",function(){return Z.aj(32)})
s($,"oZ","dq",function(){return Z.aj(64)})
s($,"p_","lH",function(){return Z.aj(96)})
s($,"p5","c3",function(){return Z.aj(128)})
s($,"oW","b3",function(){return Z.aj(256)})
s($,"ou","lt",function(){return new V.hz()})
r($,"ot","C",function(){return $.lt()})
r($,"oH","lv",function(){var q=V.kD(),p=V.k1(),o=$.kS
return V.kB(q,p,o==null?$.kS=V.mA(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cC,ArrayBufferView:H.cC,Float32Array:H.bm,Float64Array:H.bm,Int16Array:H.e3,Int32Array:H.e4,Int8Array:H.e5,Uint16Array:H.e6,Uint32Array:H.e7,Uint8ClampedArray:H.cD,CanvasPixelArray:H.cD,Uint8Array:H.e8,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.hb,HTMLAnchorElement:W.ds,HTMLAreaElement:W.dt,HTMLBaseElement:W.by,Blob:W.dx,HTMLBodyElement:W.ba,HTMLCanvasElement:W.bb,CanvasRenderingContext2D:W.c8,CDATASection:W.al,CharacterData:W.al,Comment:W.al,ProcessingInstruction:W.al,Text:W.al,CSSPerspective:W.hm,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.ca,MSStyleCSSProperties:W.ca,CSS2Properties:W.ca,CSSImageValue:W.af,CSSKeywordValue:W.af,CSSNumericValue:W.af,CSSPositionValue:W.af,CSSResourceValue:W.af,CSSUnitValue:W.af,CSSURLImageValue:W.af,CSSStyleValue:W.af,CSSMatrixComponent:W.av,CSSRotation:W.av,CSSScale:W.av,CSSSkew:W.av,CSSTranslation:W.av,CSSTransformComponent:W.av,CSSTransformValue:W.ho,CSSUnparsedValue:W.hp,DataTransferItemList:W.hq,HTMLDivElement:W.cc,DOMException:W.hr,ClientRectList:W.cd,DOMRectList:W.cd,DOMRectReadOnly:W.ce,DOMStringList:W.dE,DOMTokenList:W.hs,Element:W.A,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.ax,FileList:W.dG,FileWriter:W.dH,HTMLFormElement:W.dJ,Gamepad:W.ay,History:W.hH,HTMLCollection:W.bg,HTMLFormControlsCollection:W.bg,HTMLOptionsCollection:W.bg,ImageData:W.bh,HTMLImageElement:W.bF,KeyboardEvent:W.bj,Location:W.hQ,MediaList:W.i6,MIDIInputMap:W.e0,MIDIOutputMap:W.e1,MimeType:W.aB,MimeTypeArray:W.e2,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cE,RadioNodeList:W.cE,Plugin:W.aD,PluginArray:W.eg,RTCStatsReport:W.el,HTMLSelectElement:W.en,SourceBuffer:W.ao,SourceBufferList:W.eq,SpeechGrammar:W.aF,SpeechGrammarList:W.er,SpeechRecognitionResult:W.aG,Storage:W.ev,CSSStyleSheet:W.ai,StyleSheet:W.ai,HTMLTableElement:W.cN,HTMLTableRowElement:W.ez,HTMLTableSectionElement:W.eA,HTMLTemplateElement:W.bS,TextTrack:W.ap,TextTrackCue:W.ac,VTTCue:W.ac,TextTrackCueList:W.eC,TextTrackList:W.eD,TimeRanges:W.iC,Touch:W.aH,TouchEvent:W.bq,TouchList:W.eH,TrackDefaultList:W.iH,CompositionEvent:W.aJ,FocusEvent:W.aJ,TextEvent:W.aJ,UIEvent:W.aJ,URL:W.iT,VideoTrackList:W.f1,WheelEvent:W.aZ,Window:W.bU,DOMWindow:W.bU,Attr:W.bV,CSSRuleList:W.f8,ClientRect:W.cU,DOMRect:W.cU,GamepadList:W.fm,NamedNodeMap:W.cY,MozNamedAttrMap:W.cY,SpeechRecognitionResultList:W.fG,StyleSheetList:W.fN,SVGLength:P.bk,SVGLengthList:P.dV,SVGNumber:P.bn,SVGNumberList:P.ea,SVGPointList:P.ie,SVGScriptElement:P.bO,SVGStringList:P.ey,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.br,SVGTransformList:P.eI,AudioBuffer:P.hf,AudioParamMap:P.dv,AudioTrackList:P.dw,AudioContext:P.aP,webkitAudioContext:P.aP,BaseAudioContext:P.aP,OfflineAudioContext:P.eb,WebGL2RenderingContext:P.bN,SQLResultSetRowList:P.es})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.bm.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
W.d4.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"
W.d8.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=Z.od
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
