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
a[c]=function(){a[c]=function(){H.oq(b)}
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
if(a[b]!==s)H.or(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ko"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ko"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.ko(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={k0:function k0(){},
im:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mH:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
kn:function(a,b,c){return a},
ml:function(a,b){if(t.e.b(a))return new H.c9(a,b)
return new H.bd(a,b)},
me:function(){return new P.cI("No element")},
mG:function(a,b){H.ek(a,0,J.bs(a)-1,b)},
ek:function(a,b,c,d){if(c-b<=32)H.mF(a,b,c,d)
else H.mE(a,b,c,d)},
mF:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.fY(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.am()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
mE:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.a2(a4+a5,2),f=g-j,e=g+j,d=J.fY(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.am()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.W(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.ek(a3,a4,r-2,a6)
H.ek(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.W(a6.$2(d.h(a3,r),b),0);)++r
for(;J.W(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.ek(a3,r,q,a6)}else H.ek(a3,r,q,a6)},
dR:function dR(a){this.a=a},
M:function M(a){this.a=a},
j:function j(){},
bE:function bE(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bd:function bd(a,b){this.a=a
this.b=b},
c9:function c9(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=null
this.b=a
this.c=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b},
cc:function cc(){},
eO:function eO(){},
bN:function bN(){},
lB:function(a){var s,r=H.lA(a)
if(r!=null)return r
s="minified:"+a
return s},
of:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
v:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.h0(a)
return s},
cy:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cz:function(a){return H.mp(a)},
mp:function(a){var s,r,q,p
if(a instanceof P.G)return H.ab(H.bW(a),null)
if(J.dk(a)===C.H||t.o.b(a)){s=C.l(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ab(H.bW(a),null)},
kN:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mz:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.fX(q))throw H.b(H.jB(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.bm(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.jB(q))}return H.kN(p)},
my:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.fX(q))throw H.b(H.jB(q))
if(q<0)throw H.b(H.jB(q))
if(q>65535)return H.mz(a)}return H.kN(a)},
mx:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.bm(s,10)|55296)>>>0,s&1023|56320)}throw H.b(P.aM(a,0,1114111,null,null))},
bJ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mw:function(a){var s=H.bJ(a).getFullYear()+0
return s},
mu:function(a){var s=H.bJ(a).getMonth()+1
return s},
mq:function(a){var s=H.bJ(a).getDate()+0
return s},
mr:function(a){var s=H.bJ(a).getHours()+0
return s},
mt:function(a){var s=H.bJ(a).getMinutes()+0
return s},
mv:function(a){var s=H.bJ(a).getSeconds()+0
return s},
ms:function(a){var s=H.bJ(a).getMilliseconds()+0
return s},
e:function(a,b){if(a==null)J.bs(a)
throw H.b(H.bU(a,b))},
bU:function(a,b){var s,r="index"
if(!H.fX(b))return new P.ai(!0,b,r,null)
s=J.bs(a)
if(b<0||b>=s)return P.H(b,a,r,null,s)
return P.ed(b,r)},
o5:function(a,b,c){if(a>c)return P.aM(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aM(b,a,c,"end",null)
return new P.ai(!0,b,"end",null)},
jB:function(a){return new P.ai(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.e4()
s=new Error()
s.dartException=a
r=H.os
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
os:function(){return J.h0(this.dartException)},
f:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b4(a))},
ay:function(a){var s,r,q,p,o,n
a=H.lx(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iF(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iG:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
l_:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
k1:function(a,b){var s=b==null,r=s?null:b.method
return new H.dP(a,r,s?null:b.receiver)},
aC:function(a){if(a==null)return new H.i5(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bq(a,a.dartException)
return H.nZ(a)},
bq:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nZ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bm(r,16)&8191)===10)switch(q){case 438:return H.bq(a,H.k1(H.v(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.v(s)+" (Error "+q+")"
return H.bq(a,new H.cx(p,e))}}if(a instanceof TypeError){o=$.lF()
n=$.lG()
m=$.lH()
l=$.lI()
k=$.lL()
j=$.lM()
i=$.lK()
$.lJ()
h=$.lO()
g=$.lN()
f=o.ai(s)
if(f!=null)return H.bq(a,H.k1(s,f))
else{f=n.ai(s)
if(f!=null){f.method="call"
return H.bq(a,H.k1(s,f))}else{f=m.ai(s)
if(f==null){f=l.ai(s)
if(f==null){f=k.ai(s)
if(f==null){f=j.ai(s)
if(f==null){f=i.ai(s)
if(f==null){f=l.ai(s)
if(f==null){f=h.ai(s)
if(f==null){f=g.ai(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bq(a,new H.cx(s,f==null?e:f.method))}}return H.bq(a,new H.eN(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cG()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bq(a,new P.ai(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cG()
return a},
aX:function(a){var s
if(a==null)return new H.d4(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.d4(a)},
o7:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
oe:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.d("Unsupported number of arguments for wrapped closure"))},
aV:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oe)
a.$identity=s
return s},
m8:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ik().constructor.prototype):Object.create(new H.bY(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ap
if(typeof r!=="number")return r.X()
$.ap=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.ky(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.m4(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ky(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
m4:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lt,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.m2:H.m1
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
m5:function(a,b,c,d){var s=H.kx
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ky:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.m7(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.m5(r,!p,s,b)
if(r===0){p=$.ap
if(typeof p!=="number")return p.X()
$.ap=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bZ
return new Function(p+(o==null?$.bZ=H.hd("self"):o)+";return "+n+"."+H.v(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ap
if(typeof p!=="number")return p.X()
$.ap=p+1
m+=p
p="return function("+m+"){return this."
o=$.bZ
return new Function(p+(o==null?$.bZ=H.hd("self"):o)+"."+H.v(s)+"("+m+");}")()},
m6:function(a,b,c,d){var s=H.kx,r=H.m3
switch(b?-1:a){case 0:throw H.b(new H.eg("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
m7:function(a,b){var s,r,q,p,o,n,m,l=$.bZ
if(l==null)l=$.bZ=H.hd("self")
s=$.kw
if(s==null)s=$.kw=H.hd("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.m6(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.v(r)+"(this."+s+");"
n=$.ap
if(typeof n!=="number")return n.X()
$.ap=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.v(r)+"(this."+s+", "+m+");"
n=$.ap
if(typeof n!=="number")return n.X()
$.ap=n+1
return new Function(o+n+"}")()},
ko:function(a,b,c,d,e,f,g){return H.m8(a,b,c,d,!!e,!!f,g)},
m1:function(a,b){return H.fL(v.typeUniverse,H.bW(a.a),b)},
m2:function(a,b){return H.fL(v.typeUniverse,H.bW(a.c),b)},
kx:function(a){return a.a},
m3:function(a){return a.c},
hd:function(a){var s,r,q,p=new H.bY("self","target","receiver","name"),o=J.k_(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.jS("Field name "+a+" not found."))},
oq:function(a){throw H.b(new P.dC(a))},
oa:function(a){return v.getIsolateTag(a)},
or:function(a){return H.f(new H.dR(a))},
pt:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oh:function(a){var s,r,q,p,o,n=$.ls.$1(a),m=$.jD[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jI[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lp.$2(a,n)
if(q!=null){m=$.jD[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jI[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jL(s)
$.jD[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jI[n]=s
return s}if(p==="-"){o=H.jL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lv(a,s)
if(p==="*")throw H.b(P.l0(n))
if(v.leafTags[n]===true){o=H.jL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lv(a,s)},
lv:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ks(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jL:function(a){return J.ks(a,!1,null,!!a.$iu)},
oj:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jL(s)
else return J.ks(s,c,null,null)},
oc:function(){if(!0===$.kq)return
$.kq=!0
H.od()},
od:function(){var s,r,q,p,o,n,m,l
$.jD=Object.create(null)
$.jI=Object.create(null)
H.ob()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lw.$1(o)
if(n!=null){m=H.oj(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ob:function(){var s,r,q,p,o,n,m=C.x()
m=H.bT(C.y,H.bT(C.z,H.bT(C.m,H.bT(C.m,H.bT(C.A,H.bT(C.B,H.bT(C.C(C.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.ls=new H.jF(p)
$.lp=new H.jG(o)
$.lw=new H.jH(n)},
bT:function(a,b){return a(b)||b},
mi:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(new P.hz("Illegal RegExp pattern ("+String(n)+")",a))},
ly:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
o6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lx:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lz:function(a,b,c){var s=H.oo(a,b,c)
return s},
oo:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lx(b),'g'),H.o6(c))},
iF:function iF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cx:function cx(a,b){this.a=a
this.b=b},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a){this.a=a},
i5:function i5(a){this.a=a},
d4:function d4(a){this.a=a
this.b=null},
bu:function bu(){},
ip:function ip(){},
ik:function ik(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eg:function eg(a){this.a=a},
S:function S(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hE:function hE(a){this.a=a},
hH:function hH(a,b){this.a=a
this.b=b
this.c=null},
aH:function aH(a){this.a=a},
dT:function dT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
hD:function hD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
df:function(a){return a},
aA:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bU(b,a))},
ne:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.o5(a,b,c))
return b},
cu:function cu(){},
bH:function bH(){},
be:function be(){},
ct:function ct(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
cv:function cv(){},
e3:function e3(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
kS:function(a,b){var s=b.c
return s==null?b.c=H.kg(a,b.z,!0):s},
kR:function(a,b){var s=b.c
return s==null?b.c=H.db(a,"bz",[b.z]):s},
kT:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kT(a.z)
return s===11||s===12},
mC:function(a){return a.cy},
o8:function(a){return H.kh(v.typeUniverse,a,!1)},
aU:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.lc(a,r,!0)
case 7:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.kg(a,r,!0)
case 8:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.lb(a,r,!0)
case 9:q=b.Q
p=H.dj(a,q,a0,a1)
if(p===q)return b
return H.db(a,b.z,p)
case 10:o=b.z
n=H.aU(a,o,a0,a1)
m=b.Q
l=H.dj(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ke(a,n,l)
case 11:k=b.z
j=H.aU(a,k,a0,a1)
i=b.Q
h=H.nW(a,i,a0,a1)
if(j===k&&h===i)return b
return H.la(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dj(a,g,a0,a1)
o=b.z
n=H.aU(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kf(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.h3("Attempted to substitute unexpected RTI kind "+c))}},
dj:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aU(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nX:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aU(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nW:function(a,b,c,d){var s,r=b.a,q=H.dj(a,r,c,d),p=b.b,o=H.dj(a,p,c,d),n=b.c,m=H.nX(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fb()
s.a=q
s.b=o
s.c=m
return s},
pv:function(a,b){a[v.arrayRti]=b
return a},
o2:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lt(s)
return a.$S()}return null},
lu:function(a,b){var s
if(H.kT(b))if(a instanceof H.bu){s=H.o2(a)
if(s!=null)return s}return H.bW(a)},
bW:function(a){var s
if(a instanceof P.G){s=a.$ti
return s!=null?s:H.ki(a)}if(Array.isArray(a))return H.lf(a)
return H.ki(J.dk(a))},
lf:function(a){var s=a[v.arrayRti],r=t.r
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
Q:function(a){var s=a.$ti
return s!=null?s:H.ki(a)},
ki:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.nl(a,s)},
nl:function(a,b){var s=a instanceof H.bu?a.__proto__.__proto__.constructor:b,r=H.n9(v.typeUniverse,s.name)
b.$ccache=r
return r},
lt:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kh(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
nk:function(a){var s,r,q,p=this
if(p===t.K)return H.dg(p,a,H.np)
if(!H.aB(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dg(p,a,H.ns)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.fX
else if(r===t.i||r===t.H)q=H.no
else if(r===t.N)q=H.nq
else q=r===t.cB?H.kj:null
if(q!=null)return H.dg(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.og)){p.r="$i"+s
return H.dg(p,a,H.nr)}}else if(s===7)return H.dg(p,a,H.ni)
return H.dg(p,a,H.ng)},
dg:function(a,b,c){a.b=c
return a.b(b)},
nj:function(a){var s,r=this,q=H.nf
if(!H.aB(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.nd
else if(r===t.K)q=H.nb
else{s=H.dl(r)
if(s)q=H.nh}r.a=q
return r.a(a)},
km:function(a){var s,r=a.y
if(!H.aB(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.km(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ng:function(a){var s=this
if(a==null)return H.km(s)
return H.J(v.typeUniverse,H.lu(a,s),null,s,null)},
ni:function(a){if(a==null)return!0
return this.z.b(a)},
nr:function(a){var s,r=this
if(a==null)return H.km(r)
s=r.r
if(a instanceof P.G)return!!a[s]
return!!J.dk(a)[s]},
nf:function(a){var s,r=this
if(a==null){s=H.dl(r)
if(s)return a}else if(r.b(a))return a
H.li(a,r)},
nh:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.li(a,s)},
li:function(a,b){throw H.b(H.n_(H.l5(a,H.lu(a,b),H.ab(b,null))))},
l5:function(a,b,c){var s=P.hu(a),r=H.ab(b==null?H.bW(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
n_:function(a){return new H.d9("TypeError: "+a)},
a2:function(a,b){return new H.d9("TypeError: "+H.l5(a,null,b))},
np:function(a){return a!=null},
nb:function(a){if(a!=null)return a
throw H.b(H.a2(a,"Object"))},
ns:function(a){return!0},
nd:function(a){return a},
kj:function(a){return!0===a||!1===a},
lg:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a2(a,"bool"))},
pi:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a2(a,"bool"))},
ph:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a2(a,"bool?"))},
pj:function(a){if(typeof a=="number")return a
throw H.b(H.a2(a,"double"))},
pl:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a2(a,"double"))},
pk:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a2(a,"double?"))},
fX:function(a){return typeof a=="number"&&Math.floor(a)===a},
fW:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a2(a,"int"))},
pn:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a2(a,"int"))},
pm:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a2(a,"int?"))},
no:function(a){return typeof a=="number"},
po:function(a){if(typeof a=="number")return a
throw H.b(H.a2(a,"num"))},
pq:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a2(a,"num"))},
pp:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a2(a,"num?"))},
nq:function(a){return typeof a=="string"},
nc:function(a){if(typeof a=="string")return a
throw H.b(H.a2(a,"String"))},
ps:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a2(a,"String"))},
pr:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a2(a,"String?"))},
nT:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ab(a[q],b)
return s},
lj:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.e(a5,j)
m=C.d.X(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.ab(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ab(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ab(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ab(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ab(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ab:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ab(a.z,b)
return s}if(l===7){r=a.z
s=H.ab(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ab(a.z,b)+">"
if(l===9){p=H.nY(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nT(o,b)+">"):p}if(l===11)return H.lj(a,b,null)
if(l===12)return H.lj(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nY:function(a){var s,r=H.lA(a)
if(r!=null)return r
s="minified:"+a
return s},
ld:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
n9:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kh(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dc(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.db(a,b,q)
n[b]=o
return o}else return m},
n7:function(a,b){return H.le(a.tR,b)},
n6:function(a,b){return H.le(a.eT,b)},
kh:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.l9(H.l7(a,null,b,c))
r.set(b,s)
return s},
fL:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.l9(H.l7(a,b,c,!0))
q.set(c,r)
return r},
n8:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ke(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aT:function(a,b){b.a=H.nj
b.b=H.nk
return b},
dc:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.af(null,null)
s.y=b
s.cy=c
r=H.aT(a,s)
a.eC.set(c,r)
return r},
lc:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.n4(a,b,r,c)
a.eC.set(r,s)
return s},
n4:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aB(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.af(null,null)
q.y=6
q.z=b
q.cy=c
return H.aT(a,q)},
kg:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.n3(a,b,r,c)
a.eC.set(r,s)
return s},
n3:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aB(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dl(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dl(q.z))return q
else return H.kS(a,b)}}p=new H.af(null,null)
p.y=7
p.z=b
p.cy=c
return H.aT(a,p)},
lb:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.n1(a,b,r,c)
a.eC.set(r,s)
return s},
n1:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aB(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.db(a,"bz",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.af(null,null)
q.y=8
q.z=b
q.cy=c
return H.aT(a,q)},
n5:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.af(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aT(a,s)
a.eC.set(q,r)
return r},
fK:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
n0:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
db:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fK(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.af(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aT(a,r)
a.eC.set(p,q)
return q},
ke:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fK(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aT(a,o)
a.eC.set(q,n)
return n},
la:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fK(m)
if(j>0){s=l>0?",":""
r=H.fK(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.n0(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aT(a,o)
a.eC.set(q,r)
return r},
kf:function(a,b,c,d){var s,r=b.cy+("<"+H.fK(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.n2(a,b,c,r,d)
a.eC.set(r,s)
return s},
n2:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aU(a,b,r,0)
m=H.dj(a,c,r,0)
return H.kf(a,n,m,c!==m)}}l=new H.af(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aT(a,l)},
l7:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
l9:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mU(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.l8(a,r,h,g,!1)
else if(q===46)r=H.l8(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aS(a.u,a.e,g.pop()))
break
case 94:g.push(H.n5(a.u,g.pop()))
break
case 35:g.push(H.dc(a.u,5,"#"))
break
case 64:g.push(H.dc(a.u,2,"@"))
break
case 126:g.push(H.dc(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kd(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.db(p,n,o))
else{m=H.aS(p,a.e,n)
switch(m.y){case 11:g.push(H.kf(p,m,o,a.n))
break
default:g.push(H.ke(p,m,o))
break}}break
case 38:H.mV(a,g)
break
case 42:p=a.u
g.push(H.lc(p,H.aS(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kg(p,H.aS(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.lb(p,H.aS(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fb()
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
H.kd(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.la(p,H.aS(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kd(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.mX(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aS(a.u,a.e,i)},
mU:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
l8:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.ld(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mC(o)+'"')
d.push(H.fL(s,o,n))}else d.push(p)
return m},
mV:function(a,b){var s=b.pop()
if(0===s){b.push(H.dc(a.u,1,"0&"))
return}if(1===s){b.push(H.dc(a.u,4,"1&"))
return}throw H.b(P.h3("Unexpected extended operation "+H.v(s)))},
aS:function(a,b,c){if(typeof c=="string")return H.db(a,c,a.sEA)
else if(typeof c=="number")return H.mW(a,b,c)
else return c},
kd:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aS(a,b,c[s])},
mX:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aS(a,b,c[s])},
mW:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.h3("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.h3("Bad index "+c+" for "+b.i(0)))},
J:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aB(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aB(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.J(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.J(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.J(a,b.z,c,d,e)
if(r===6)return H.J(a,b.z,c,d,e)
return r!==7}if(r===6)return H.J(a,b.z,c,d,e)
if(p===6){s=H.kS(a,d)
return H.J(a,b,c,s,e)}if(r===8){if(!H.J(a,b.z,c,d,e))return!1
return H.J(a,H.kR(a,b),c,d,e)}if(r===7){s=H.J(a,t.P,c,d,e)
return s&&H.J(a,b.z,c,d,e)}if(p===8){if(H.J(a,b,c,d.z,e))return!0
return H.J(a,b,c,H.kR(a,d),e)}if(p===7){s=H.J(a,b,c,t.P,e)
return s||H.J(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.l)return!0
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
if(!H.J(a,k,c,j,e)||!H.J(a,j,e,k,c))return!1}return H.lk(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.lk(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nn(a,b,c,d,e)}return!1},
lk:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.J(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.J(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.J(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.J(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.J(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
nn:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.J(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.ld(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.J(a,H.fL(a,b,l[p]),c,r[p],e))return!1
return!0},
dl:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aB(a))if(r!==7)if(!(r===6&&H.dl(a.z)))s=r===8&&H.dl(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
og:function(a){var s
if(!H.aB(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aB:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
le:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fb:function fb(){this.c=this.b=this.a=null},
f6:function f6(){},
d9:function d9(a){this.a=a},
lA:function(a){return v.mangledGlobalNames[a]},
ok:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ks:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jE:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kq==null){H.oc()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.l0("Return interceptor for "+H.v(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jk
if(o==null)o=$.jk=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.oh(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){o=$.jk
if(o==null)o=$.jk=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
mf:function(a){if(a<0||a>4294967295)throw H.b(P.aM(a,0,4294967295,"length",null))
return J.mg(new Array(a))},
jZ:function(a){if(a<0)throw H.b(P.jS("Length must be a non-negative integer: "+a))
return new Array(a)},
mg:function(a){return J.k_(a)},
k_:function(a){a.fixed$length=Array
return a},
mh:function(a,b){return J.lW(a,b)},
dk:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cg.prototype
return J.dN.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.bC.prototype
if(typeof a=="boolean")return J.dM.prototype
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.G)return a
return J.jE(a)},
fY:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.G)return a
return J.jE(a)},
kp:function(a){if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.G)return a
return J.jE(a)},
o9:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.G))return J.bM.prototype
return a},
bp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.G)return a
return J.jE(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dk(a).n(a,b)},
lT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.of(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fY(a).h(a,b)},
lU:function(a,b,c){return J.bp(a).h2(a,b,c)},
lV:function(a,b,c,d){return J.bp(a).hh(a,b,c,d)},
lW:function(a,b){return J.o9(a).af(a,b)},
jQ:function(a,b){return J.kp(a).A(a,b)},
jR:function(a,b){return J.kp(a).E(a,b)},
lX:function(a){return J.bp(a).gdq(a)},
lY:function(a){return J.bp(a).gdt(a)},
h_:function(a){return J.dk(a).gB(a)},
aD:function(a){return J.kp(a).gM(a)},
bs:function(a){return J.fY(a).gj(a)},
lZ:function(a,b){return J.bp(a).hV(a,b)},
h0:function(a){return J.dk(a).i(a)},
a:function a(){},
dM:function dM(){},
bC:function bC(){},
ba:function ba(){},
e9:function e9(){},
bM:function bM(){},
at:function at(){},
al:function al(){},
dO:function dO(){},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bD:function bD(){},
cg:function cg(){},
dN:function dN(){},
b9:function b9(){}},P={
mN:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.o_()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.aV(new P.j3(q),1)).observe(s,{childList:true})
return new P.j2(q,s,r)}else if(self.setImmediate!=null)return P.o0()
return P.o1()},
mO:function(a){self.scheduleImmediate(H.aV(new P.j4(a),0))},
mP:function(a){self.setImmediate(H.aV(new P.j5(a),0))},
mQ:function(a){P.k6(C.h,a)},
k6:function(a,b){var s=C.b.a2(a.a,1000)
return P.mY(s<0?0:s,b)},
kZ:function(a,b){var s=C.b.a2(a.a,1000)
return P.mZ(s<0?0:s,b)},
mY:function(a,b){var s=new P.d8()
s.eu(a,b)
return s},
mZ:function(a,b){var s=new P.d8()
s.ev(a,b)
return s},
pf:function(a){return new P.bP(a,1)},
mR:function(){return C.O},
mS:function(a){return new P.bP(a,3)},
nu:function(a){return new P.d5(a)},
h4:function(a,b){var s=H.kn(a,"error",t.K)
return new P.dt(s,b==null?P.kv(a):b)},
kv:function(a){var s
if(t.C.b(a)){s=a.gbh()
if(s!=null)return s}return C.F},
kb:function(a,b){var s,r
for(;s=a.a,s===2;)a=a.c
if(s>=4){r=b.bT()
b.a=a.a
b.c=a.c
P.cT(b,r)}else{r=b.c
b.a=2
b.c=a
a.d6(r)}},
cT:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e={},d=e.a=a
for(s=t.c;!0;){r={}
q=d.a===8
if(b==null){if(q){s=d.c
P.jz(f,f,d.b,s.a,s.b)}return}r.a=b
p=b.a
for(d=b;p!=null;d=p,p=o){d.a=null
P.cT(e.a,d)
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
if(k){P.jz(f,f,n.b,m.a,m.b)
return}i=$.K
if(i!==j)$.K=j
else i=f
d=d.c
if((d&15)===8)new P.jh(r,e,q).$0()
else if(l){if((d&1)!==0)new P.jg(r,m).$0()}else if((d&2)!==0)new P.jf(e,r).$0()
if(i!=null)$.K=i
d=r.c
if(s.b(d)){n=r.a.$ti
n=n.Z("bz<2>").b(d)||!n.Q[1].b(d)}else n=!1
if(n){h=r.a.b
if(d.a>=4){g=h.c
h.c=null
b=h.bl(g)
h.a=d.a
h.c=d.c
e.a=d
continue}else P.kb(d,h)
return}}h=r.a.b
g=h.c
h.c=null
b=h.bl(g)
d=r.b
n=r.c
if(!d){h.a=4
h.c=n}else{h.a=8
h.c=n}e.a=h
d=h}},
nR:function(a,b){if(t.Y.b(a))return a
if(t.b6.b(a))return a
throw H.b(P.m_(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a valid result"))},
nQ:function(){var s,r
for(s=$.bR;s!=null;s=$.bR){$.di=null
r=s.b
$.bR=r
if(r==null)$.dh=null
s.a.$0()}},
nV:function(){$.kk=!0
try{P.nQ()}finally{$.di=null
$.kk=!1
if($.bR!=null)$.ku().$1(P.lq())}},
ln:function(a){var s=new P.eV(a),r=$.dh
if(r==null){$.bR=$.dh=s
if(!$.kk)$.ku().$1(P.lq())}else $.dh=r.b=s},
nU:function(a){var s,r,q,p=$.bR
if(p==null){P.ln(a)
$.di=$.dh
return}s=new P.eV(a)
r=$.di
if(r==null){s.b=p
$.bR=$.di=s}else{q=r.b
s.b=q
$.di=r.b=s
if(q==null)$.dh=s}},
om:function(a){var s=null,r=$.K
if(C.e===r){P.bS(s,s,C.e,a)
return}P.bS(s,s,r,r.c_(a))},
kY:function(a,b){var s=$.K
if(s===C.e)return P.k6(a,b)
return P.k6(a,s.c_(b))},
mJ:function(a,b){var s=$.K
if(s===C.e)return P.kZ(a,b)
return P.kZ(a,s.dl(b,t.w))},
jz:function(a,b,c,d,e){P.nU(new P.jA(d,e))},
ll:function(a,b,c,d){var s,r=$.K
if(r===c)return d.$0()
$.K=c
s=r
try{r=d.$0()
return r}finally{$.K=s}},
lm:function(a,b,c,d,e){var s,r=$.K
if(r===c)return d.$1(e)
$.K=c
s=r
try{r=d.$1(e)
return r}finally{$.K=s}},
nS:function(a,b,c,d,e,f){var s,r=$.K
if(r===c)return d.$2(e,f)
$.K=c
s=r
try{r=d.$2(e,f)
return r}finally{$.K=s}},
bS:function(a,b,c,d){if(C.e!==c)d=c.c_(d)
P.ln(d)},
j3:function j3(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
d8:function d8(){this.c=0},
jr:function jr(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b){this.a=a
this.b=b},
bQ:function bQ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d5:function d5(a){this.a=a},
dt:function dt(a,b){this.a=a
this.b=b},
eZ:function eZ(){},
cR:function cR(a,b){this.a=a
this.$ti=b},
fc:function fc(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ao:function ao(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j7:function j7(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=b},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.b=b},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a){this.a=a},
jg:function jg(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
this.b=b},
eV:function eV(a){this.a=a
this.b=null},
eq:function eq(){},
er:function er(){},
jt:function jt(){},
jA:function jA(a,b){this.a=a
this.b=b},
jn:function jn(){},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
mj:function(a,b,c){return H.o7(a,new H.S(b.Z("@<0>").bH(c).Z("S<1,2>")))},
N:function(a,b){return new H.S(a.Z("@<0>").bH(b).Z("S<1,2>"))},
kD:function(a){return new P.cU(a.Z("cU<0>"))},
kc:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mT:function(a,b){var s=new P.cV(a,b)
s.c=a.e
return s},
md:function(a,b,c){var s,r
if(P.kl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a6.push(a)
try{P.nt(a,s)}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}r=P.kV(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jY:function(a,b,c){var s,r
if(P.kl(a))return b+"..."+c
s=new P.bk(b)
$.a6.push(a)
try{r=s
r.a=P.kV(r.a,a,", ")}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kl:function(a){var s,r
for(s=$.a6.length,r=0;r<s;++r)if(a===$.a6[r])return!0
return!1},
nt:function(a,b){var s,r,q,p,o,n,m,l=a.gM(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.v(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.t()){if(j<=4){b.push(H.v(p))
return}r=H.v(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.t();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.v(p)
r=H.v(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
kE:function(a){var s,r={}
if(P.kl(a))return"{...}"
s=new P.bk("")
try{$.a6.push(a)
s.a+="{"
r.a=!0
J.jR(a,new P.hM(r,s))
s.a+="}"}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cU:function cU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jm:function jm(a){this.a=a
this.c=this.b=null},
cV:function cV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function cf(){},
cj:function cj(){},
C:function C(){},
cl:function cl(){},
hM:function hM(a,b){this.a=a
this.b=b},
U:function U(){},
ei:function ei(){},
d1:function d1(){},
cW:function cW(){},
dd:function dd(){},
dx:function dx(){},
dB:function dB(){},
hr:function hr(){},
iQ:function iQ(){},
iR:function iR(){},
js:function js(a){this.b=0
this.c=a},
mc:function(a){if(a instanceof H.bu)return a.i(0)
return"Instance of '"+H.cz(a)+"'"},
hI:function(a,b,c){var s,r=c?J.jZ(a):J.mf(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hJ:function(a,b){var s,r=[]
for(s=J.aD(a);s.t();)r.push(s.gD(s))
if(b)return r
return J.k_(r)},
mk:function(a,b){var s,r,q=J.jZ(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
k5:function(a){var s=a,r=s.length,q=P.k2(0,null,r)
return H.my(q<r?s.slice(0,q):s)},
mA:function(a){return new H.hD(a,H.mi(a,!1,!0,!1,!1,!1))},
kV:function(a,b,c){var s=J.aD(b)
if(!s.t())return a
if(c.length===0){do a+=H.v(s.gD(s))
while(s.t())}else{a+=H.v(s.gD(s))
for(;s.t();)a=a+c+H.v(s.gD(s))}return a},
na:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.n){s=$.lS().b
s=s.test(b)}else s=!1
if(s)return b
r=C.E.hp(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.mx(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
ma:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dD:function(a){if(a>=10)return""+a
return"0"+a},
kA:function(a){return new P.b6(1000*a)},
hu:function(a){if(typeof a=="number"||H.kj(a)||null==a)return J.h0(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mc(a)},
h3:function(a){return new P.ds(a)},
jS:function(a){return new P.ai(!1,null,null,a)},
m_:function(a,b,c){return new P.ai(!0,a,b,c)},
ed:function(a,b){return new P.cA(null,null,!0,a,b,"Value not in range")},
aM:function(a,b,c,d,e){return new P.cA(b,c,!0,a,d,"Invalid value")},
k2:function(a,b,c){if(a>c)throw H.b(P.aM(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.aM(b,a,c,"end",null))
return b}return c},
kO:function(a,b){if(a<0)throw H.b(P.aM(a,0,null,b,null))
return a},
H:function(a,b,c,d,e){var s=e==null?J.bs(b):e
return new P.dK(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eP(a)},
l0:function(a){return new P.eM(a)},
kU:function(a){return new P.cI(a)},
b4:function(a){return new P.dA(a)},
d:function(a){return new P.f8(a)},
kt:function(a){H.ok(a)},
R:function R(a,b){this.a=a
this.b=b},
b6:function b6(a){this.a=a},
ho:function ho(){},
hp:function hp(){},
B:function B(){},
ds:function ds(a){this.a=a},
eA:function eA(){},
e4:function e4(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cA:function cA(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dK:function dK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eP:function eP(a){this.a=a},
eM:function eM(a){this.a=a},
cI:function cI(a){this.a=a},
dA:function dA(a){this.a=a},
e7:function e7(){},
cG:function cG(){},
dC:function dC(a){this.a=a},
f8:function f8(a){this.a=a},
hz:function hz(a,b){this.a=a
this.b=b},
h:function h(){},
dL:function dL(){},
a0:function a0(){},
G:function G(){},
fC:function fC(){},
bk:function bk(a){this.a=a},
o4:function(a){var s,r,q,p
if(t.I.b(a)){s=J.lY(a)
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
return new P.da(r,q,p)},
o3:function(a){if(a instanceof P.da)return{data:a.a,height:a.b,width:a.c}
return a},
aW:function(a){var s,r,q,p,o
if(a==null)return null
s=P.N(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
lh:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kj(a))return a
if(t.f.b(a))return P.lr(a)
if(t.t.b(a)){s=[]
J.jR(a,new P.jv(s))
a=s}return a},
lr:function(a){var s={}
J.jR(a,new P.jC(s))
return s},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a){this.a=a},
jC:function jC(a){this.a=a},
dH:function dH(a,b){this.a=a
this.b=b},
hx:function hx(){},
hy:function hy(){},
ol:function(a,b){var s=new P.ao($.K,b.Z("ao<0>")),r=new P.cR(s,b.Z("cR<0>"))
a.then(H.aV(new P.jM(r),1),H.aV(new P.jN(r),1))
return s},
i4:function i4(a){this.a=a},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jj:function jj(){},
fs:function fs(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
dS:function dS(){},
bf:function bf(){},
e5:function e5(){},
i7:function i7(){},
es:function es(){},
k:function k(){},
bm:function bm(){},
ez:function ez(){},
fg:function fg(){},
fh:function fh(){},
fo:function fo(){},
fp:function fp(){},
fA:function fA(){},
fB:function fB(){},
fI:function fI(){},
fJ:function fJ(){},
h7:function h7(){},
du:function du(){},
ha:function ha(a){this.a=a},
dv:function dv(){},
aE:function aE(){},
e6:function e6(){},
eW:function eW(){},
bK:function bK(){},
en:function en(){},
fx:function fx(){},
fy:function fy(){}},W={
m0:function(a){var s=new Audio(a)
s.toString
return s},
jT:function(){var s=document.createElement("canvas")
s.toString
return s},
hq:function(a){return"wheel"},
jl:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
l6:function(a,b,c,d){var s=W.jl(W.jl(W.jl(W.jl(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
P:function(a,b,c,d){var s=W.lo(new W.j6(c),t.B)
if(s!=null&&!0)J.lV(a,b,s,!1)
return new W.f7(a,b,s,!1)},
lo:function(a,b){var s=$.K
if(s===C.e)return a
return s.dl(a,b)},
l:function l(){},
h1:function h1(){},
dq:function dq(){},
dr:function dr(){},
dw:function dw(){},
b3:function b3(){},
c1:function c1(){},
aj:function aj(){},
hh:function hh(){},
E:function E(){},
c5:function c5(){},
hi:function hi(){},
ae:function ae(){},
aq:function aq(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
c7:function c7(){},
c8:function c8(){},
dE:function dE(){},
hn:function hn(){},
eY:function eY(a,b){this.a=a
this.b=b},
I:function I(){},
i:function i(){},
c:function c(){},
aF:function aF(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
aG:function aG(){},
hB:function hB(){},
b7:function b7(){},
b8:function b8(){},
bB:function bB(){},
bb:function bb(){},
hK:function hK(){},
i0:function i0(){},
dW:function dW(){},
i1:function i1(a){this.a=a},
dX:function dX(){},
i2:function i2(a){this.a=a},
aI:function aI(){},
dY:function dY(){},
a9:function a9(){},
eX:function eX(a){this.a=a},
w:function w(){},
cw:function cw(){},
aK:function aK(){},
eb:function eb(){},
ef:function ef(){},
ic:function ic(a){this.a=a},
eh:function eh(){},
aw:function aw(){},
el:function el(){},
aN:function aN(){},
em:function em(){},
aO:function aO(){},
ep:function ep(){},
il:function il(a){this.a=a},
an:function an(){},
ax:function ax(){},
ag:function ag(){},
et:function et(){},
eu:function eu(){},
iz:function iz(){},
aP:function aP(){},
bl:function bl(){},
ey:function ey(){},
iD:function iD(){},
az:function az(){},
iP:function iP(){},
eS:function eS(){},
aR:function aR(){},
bO:function bO(){},
f_:function f_(){},
cS:function cS(){},
fd:function fd(){},
cX:function cX(){},
fw:function fw(){},
fD:function fD(){},
jW:function jW(a,b){this.a=a
this.$ti=b},
f7:function f7(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j6:function j6(a){this.a=a},
ka:function ka(a){this.$ti=a},
F:function F(){},
cd:function cd(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f9:function f9(){},
fa:function fa(){},
fe:function fe(){},
ff:function ff(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
ft:function ft(){},
d2:function d2(){},
d3:function d3(){},
fu:function fu(){},
fv:function fv(){},
fz:function fz(){},
fE:function fE(){},
fF:function fF(){},
d6:function d6(){},
d7:function d7(){},
fG:function fG(){},
fH:function fH(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){}},K={h2:function h2(){},dJ:function dJ(){},aJ:function aJ(a){this.a=a},T:function T(a){this.a=a}},L={eo:function eo(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},ex:function ex(a,b){this.b=a
this.c=b},iB:function iB(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},iE:function iE(a,b){this.b=a
this.c=!1
this.a=b}},F={h8:function h8(){this.b=this.a=0},h9:function h9(a,b){this.a=a
this.b=b},ea:function ea(a){this.a=a
this.b=!1},
jw:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
de:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.z(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.z(s+a4,r+a2,q+a3)
o=new V.z(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.z(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jw(h)
j=F.jw(g)
a.hD(F.op(a0,a1,new F.ju(i,F.jw(f),F.jw(e),j,k,c),b))},
op:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.b(P.d("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.b(P.d("Must have 1 or more divisions of the height for a surface."))
s=F.k4()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.t(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.iV(e,e,new V.a7(n,0,0,1),e,e,new V.O(p,1),e,e,0)
o.k(0,m)
c.$3(m,p,0)
r.push(m.c5(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.t(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.iV(e,e,new V.a7(h,g,f,1),e,e,new V.O(p,k),e,e,0)
i.k(0,m)
c.$3(m,p,l)
r.push(m.c5(d))}}s.ga0().hj(a+1,b+1,r)
return s},
k4:function(){return new F.id()},
iV:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cO()
h=$.lP()
s=$.ac()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b_().a)!==0)q.r=e
if((r&$.aZ().a)!==0)q.x=b
if((r&$.br().a)!==0)q.y=f
if((r&$.b0().a)!==0)q.z=g
if((r&$.lQ().a)!==0)q.Q=c
if((r&$.bX().a)!==0)q.ch=i
if((r&$.aY().a)!==0)q.cx=a
return q},
ju:function ju(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ak:function ak(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(){this.b=this.a=null},
i6:function i6(){this.a=null},
id:function id(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cC:function cC(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
bL:function bL(a,b){this.a=a
this.b=b},
cO:function cO(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j1:function j1(a){this.a=a},
j0:function j0(a){this.a=a},
t:function t(a,b){this.a=a
this.b=!1
this.c=b},
iW:function iW(a,b,c){this.b=a
this.c=b
this.d=c},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b){this.b=a
this.c=b},
j_:function j_(a){this.b=a}},O={
jU:function(){return new O.bv([])},
bv:function bv(a){this.a=a
this.c=this.b=null},
cr:function cr(a){this.a=a
this.b=null},
dV:function(a,b){return new O.cp(new V.D(0,0,0),a,b,new A.ad(!1,!1,!1))},
dU:function dU(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(){},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(){},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(){},
hN:function hN(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
co:function co(){},
hO:function hO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cp:function cp(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hQ:function hQ(a){this.b=a},
hR:function hR(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hS:function hS(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
ej:function ej(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
ij:function ij(a){this.a=null
this.b=a
this.c=null},
iq:function iq(){}},E={
ca:function(a){var s=O.jU(),r=new E.bx(s)
s.b0(r.ghE(),r.ghH())
r.scH(0,a)
r.saZ(null)
r.sct(null)
return r},
l3:function(){var s=window.navigator.vendor
s.toString
if(C.d.J(s,"Google"))return C.v
s=window.navigator.userAgent
s.toString
if(C.d.J(s,"Firefox"))return C.j
s=window.navigator.appVersion
s.toString
if(C.d.J(s,"Trident")||C.d.J(s,"Edge"))return C.k
s=window.navigator.appName
s.toString
if(C.d.J(s,"Microsoft"))return C.k
return C.w},
l4:function(){var s=window.navigator.appVersion
s.toString
if(C.d.J(s,"Win"))return C.L
if(C.d.J(s,"Mac"))return C.p
if(C.d.J(s,"Linux"))return C.M
return C.N},
mB:function(a,b){var s
Date.now()
s=new E.i8(a,new P.R(Date.now(),!1),new P.R(Date.now(),!1),new O.cr([]),new O.cr([]),new O.cr([]),[null],P.N(t.N,t.k))
s.eh(a,b)
return s},
mI:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kX(a,!0,!0,!0,!1)
s=W.jT()
r=s.style
r.width="100%"
r.height="100%"
J.lX(a).k(0,s)
return E.kX(s,!0,!0,!0,!1)},
kX:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.f.cE(a,"webgl2",P.mj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.b(P.d("Failed to get the rendering context for WebGL."))
s=E.mB(l,a)
H.fW(l.getParameter(3379))
m=H.fW(l.getParameter(34076))
r=[]
q=$.hs
p=new X.eQ(a,r,(q==null?$.hs=new E.f5(E.l3(),E.l4()):q).a===C.j?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.P(o,"contextmenu",p.gfg(),!1))
r.push(W.P(a,"focus",p.gfq(),!1))
r.push(W.P(a,"blur",p.gfa(),!1))
r.push(W.P(o,"keyup",p.gfv(),!1))
r.push(W.P(o,"keydown",p.gft(),!1))
r.push(W.P(a,"mousedown",p.gfB(),!1))
r.push(W.P(a,"mouseup",p.gfF(),!1))
r.push(W.P(a,n,p.gfD(),!1))
W.hq(a)
W.hq(a)
r.push(W.P(a,W.hq(a),p.gfH(),!1))
r.push(W.P(o,n,p.gfi(),!1))
r.push(W.P(o,"mouseup",p.gfk(),!1))
r.push(W.P(o,"pointerlockchange",p.gfJ(),!1))
r.push(W.P(a,"touchstart",p.gfZ(),!1))
r.push(W.P(a,"touchend",p.gfV(),!1))
r.push(W.P(a,"touchmove",p.gfX(),!1))
m=new E.ev(a,s,new T.iv(l,m),new F.h8(),p,new P.R(Date.now(),!1))
m.d9()
return m},
hc:function hc(){},
bx:function bx(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bt:function bt(a){this.b=a},
bI:function bI(a){this.b=a},
f5:function f5(a,b){this.a=a
this.b=b},
i8:function i8(a,b,c,d,e,f,g,h){var _=this
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
i9:function i9(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ev:function ev(a,b,c,d,e,f){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.r=d
_.x=e
_.z=null
_.cx=!1
_.cy=f
_.db=0},
iy:function iy(a){this.a=a}},Z={
k9:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.df(c)),35044)
a.bindBuffer(b,null)
return new Z.eT(b,s)},
ah:function(a){return new Z.aQ(a)},
eT:function eT(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cP:function cP(a){this.a=a},
b2:function b2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ce:function ce(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a){this.a=a}},D={
y:function(){return new D.by()},
he:function he(){},
by:function by(){var _=this
_.c=_.b=_.a=null
_.d=0},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
L:function L(){},
ar:function ar(){},
as:function as(){},
p:function p(a,b,c){this.c=a
this.d=b
this.e=c},
kz:function(a,b){var s=new D.c6(new V.D(1,1,1),V.mM(),V.k8(),V.mL()),r=s.a
s.a=b
b.gm().k(0,s.gei())
s.ay(new D.p("mover",r,s.a))
if(!s.b.n(0,a)){r=s.b
s.b=a
s.ay(new D.p("color",r,a))}return s},
c6:function c6(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
ci:function ci(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={c0:function c0(a,b){this.a=a
this.b=b},dQ:function dQ(a,b){this.a=a
this.b=b},hF:function hF(a,b){this.c=a
this.d=b},ck:function ck(a,b,c){this.x=a
this.c=b
this.d=c},hL:function hL(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},bF:function bF(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},i3:function i3(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bG:function bG(a,b,c){this.x=a
this.c=b
this.d=c},ec:function ec(){},cJ:function cJ(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iC:function iC(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eQ:function eQ(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
jX:function(a,b){var s=new V.a7(0,0,0,1),r=V.k3()
return new X.hA(s,a,r)},
kL:function(a){var s,r,q=new X.e8(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().k(0,q.gew())
q.Y(new D.p("mover",s,q.b))}r=q.c
$.r().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.Y(new D.p("fov",r,1.0471975511965976))}r=q.d
$.r().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.Y(new D.p("near",r,0.1))}r=q.e
$.r().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.Y(new D.p("far",r,2000))}return q},
hb:function hb(a,b,c){var _=this
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
hA:function hA(a,b,c){var _=this
_.a=a
_.b=b
_.r=c
_.x=null},
hC:function hC(){this.b=null},
e8:function e8(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
io:function io(){}},V={
m9:function(a,b,c){var s,r,q,p,o,n,m,l
a*=6
s=C.c.aU(a)
r=a-s
q=b*(1-c)
p=b*(1-c*r)
o=b*(1-c*(1-r))
switch(s){case 0:n=b>1?1:b
if(o<0)m=0
else m=o>1?1:o
if(q<0)l=0
else l=q>1?1:q
return new V.D(n,m,l)
case 1:if(p<0)n=0
else n=p>1?1:p
m=b>1?1:b
if(q<0)l=0
else l=q>1?1:q
return new V.D(n,m,l)
case 2:if(q<0)n=0
else n=q>1?1:q
m=b>1?1:b
if(o<0)l=0
else l=o>1?1:o
return new V.D(n,m,l)
case 3:if(q<0)n=0
else n=q>1?1:q
if(p<0)m=0
else m=p>1?1:p
l=b>1?1:b
return new V.D(n,m,l)
case 4:if(o<0)n=0
else n=o>1?1:o
if(q<0)m=0
else m=q>1?1:q
l=b>1?1:b
return new V.D(n,m,l)
default:n=b>1?1:b
if(q<0)m=0
else m=q>1?1:q
if(p<0)l=0
else l=p>1?1:p
return new V.D(n,m,l)}},
dy:function(a,b,c,d){var s=a/255,r=b/255,q=c/255,p=d/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
if(p<0)p=0
else if(p>1)p=1
return new V.a7(s,r,q,p)},
kr:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
jP:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.c.e7(a-b,s)
return(a<0?a+s:a)+b},
q:function(a,b,c){$.r().toString
return C.d.aj(C.c.cC(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bV:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.r().toString
n=C.d.aj(C.c.cC(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.e(l,m)
s=C.d.aj(l[m],q)
r=l.length
if(m>=r)return H.e(l,m)
l[m]=s}return l},
dm:function(a){return C.c.i6(Math.pow(2,C.c.aU(Math.log(a)/Math.log(2))))},
a8:function(){var s=$.cs
return s==null?$.cs=V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mo:function(a,b,c){return V.au(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mn:function(a,b,c){return V.au(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kH:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.au(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
kI:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.au(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
kJ:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.au(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
kK:function(a,b,c,d){d=V.k8()
return V.kG(V.kM(),d,new V.z(a,b,c))},
kG:function(a,b,c){var s=c.G(),r=b.ba(s).G(),q=s.ba(r),p=new V.z(a.a,a.b,a.c)
return V.au(r.a,q.a,s.a,r.b_(0).a_(p),r.b,q.b,s.b,q.b_(0).a_(p),r.c,q.c,s.c,s.b_(0).a_(p),0,0,0,1)},
kM:function(){var s=$.av
return s==null?$.av=new V.a_(0,0,0):s},
k3:function(){var s=$.kQ
return s==null?$.kQ=V.kP(0,0,1,1):s},
kP:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ee(a,b,c,d)},
eR:function(){var s=$.l2
return s==null?$.l2=new V.z(0,0,0):s},
mL:function(){var s=$.iS
return s==null?$.iS=new V.z(-1,0,0):s},
k8:function(){var s=$.iT
return s==null?$.iT=new V.z(0,1,0):s},
mM:function(){var s=$.iU
return s==null?$.iU=new V.z(0,0,1):s},
mK:function(a,b,c){return new V.z(a,b,c)},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(){},
cq:function cq(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
am:function am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
O:function O(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
on:function(a){P.mJ(C.G,new V.jO(a))},
mD:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.b(P.d("The html document body was null."))
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
W.P(n,"scroll",new V.ii(s),!1)
return new V.ig(o)},
jO:function jO(a){this.a=a},
ig:function ig(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a},
ih:function ih(a){this.a=a}},U={
hg:function(){return new U.hf()},
jV:function(a){var s=V.a8(),r=new U.bw(s)
if(!s.n(0,a))r.a=a
return r},
kC:function(){var s=new U.bA(V.a8(),[])
s.b0(s.gek(),s.gfN())
return s},
hf:function hf(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
bw:function bw(a){this.a=a
this.b=null},
bA:function bA(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
Z:function Z(){},
cB:function cB(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
cL:function cL(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cM:function cM(a,b,c,d,e){var _=this
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
cN:function cN(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null},
oi:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1="testCanvas",c2=null,c3="modifiers",c4=V.mD("Test 047"),c5=W.jT()
c5.className="pageLargeCanvas"
c5.id=c1
c4.a.appendChild(c5).toString
c4.dh(["Test of the audio player. When you click on a cube it will ","play the same audio at slightly different rate and volume."])
c4.dh(["\xab[Back to Tests|../]"])
s=document.getElementById(c1)
if(s==null)H.f(P.d("Failed to find an element with the identifier, testCanvas."))
r=E.mI(s,!0,!0,!0,!1)
q=U.kC()
c4=r.x
p=U.hg()
o=U.hg()
n=$.bn
if(n==null)n=$.bn=new V.V(0,0)
n=new U.cM(p,o,new X.Y(!1,!1,!1),n,V.a8())
p.scD(0,!0)
p.scq(6.283185307179586)
p.scs(0)
p.saa(0,0)
p.scr(100)
p.sW(0)
p.sc6(0.5)
m=n.gaO()
p.gm().k(0,m)
o.scD(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.saa(0,0)
o.scr(100)
o.sW(0)
o.sc6(0.5)
o.gm().k(0,m)
p=new X.Y(!1,!1,!1)
if(!n.d.n(0,p)){l=n.d
n.d=p
n.F(new D.p(c3,l,p))}n.aE(c4)
q.k(0,n)
U.hg()
if($.bn==null)$.bn=new V.V(0,0)
V.a8()
p=U.hg()
o=$.bn
if(o==null)o=$.bn=new V.V(0,0)
o=new U.cL(p,new X.Y(!1,!1,!1),o,V.a8())
p.scD(0,!0)
p.scq(6.283185307179586)
p.scs(0)
p.saa(0,0)
p.scr(100)
p.sW(0)
p.sc6(0.2)
p.gm().k(0,o.gaO())
p=new X.Y(!0,!1,!1)
if(!o.c.n(0,p)){l=o.c
o.c=p
o.F(new D.p(c3,l,p))}o.aE(c4)
q.k(0,o)
p=new X.Y(!1,!1,!1)
o=new U.cN(p,V.a8())
n=new X.Y(!1,!1,!1)
if(!p.n(0,n)){o.b=n
o.F(new D.p(c3,p,n))}o.aE(c4)
q.k(0,o)
q.k(0,U.jV(V.mo(0,0,5)))
k=X.kL(q)
p=r.f
j=p.dO("../resources/diceColor")
o=O.jU()
i=new O.dU(o)
o.b0(i.gf6(),i.gf8())
o=i.gcp()
o.gm().k(0,i.gd7())
o.gdN().k(0,i.gaz())
o=i.gcp()
n=U.jV(V.kK(-1,-1,-1,c2))
o.k(0,D.kz(new V.D(1,0.9,0.9),n))
o=i.gcp()
n=U.jV(V.kK(1,1,2,c2))
o.k(0,D.kz(new V.D(0.2,0.2,0.35),n))
o=i.gbZ()
o.saS(0,new V.D(0.2,0.2,0.2))
i.gbZ().sbe(j)
o=i.gc7()
o.saS(0,new V.D(0.8,0.8,0.8))
i.gc7().sbe(j)
o=i.gbz()
o.saS(0,new V.D(0.7,0.7,0.7))
o=i.gbz()
o.bU(new A.ad(!0,!1,o.c.c))
o.dc(10)
i.gdn().sbe(p.dO("../resources/diceBumpMap"))
h=r.r.hB("../resources/tink.mp3")
g=[]
f=[]
e=F.k4()
F.de(e,c2,c2,1,1,1,0,0,1)
F.de(e,c2,c2,1,1,0,1,0,3)
F.de(e,c2,c2,1,1,0,0,1,2)
F.de(e,c2,c2,1,1,-1,0,0,0)
F.de(e,c2,c2,1,1,0,-1,0,0)
F.de(e,c2,c2,1,1,0,0,-1,3)
e.aF()
d=E.ca(e)
c=E.ca(c2)
b=E.ca(c2)
for(o=b.y,n=c.y,m=n.a,a=o.a,a0=-1.6;a0<=1.7;a0+=0.8)for(a1=-1.6;a1<=1.7;a1+=0.8)for(a2=-1.6;a2<=1.7;a2+=0.8){a3=new V.am(1,0,0,a0,0,1,0,a1,0,0,1,a2,0,0,0,1).I(0,new V.am(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
a4=$.cs
q=new U.cB(a4==null?$.cs=new V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):a4)
q.se5(0)
q.sdZ(0,0)
q.se1(0)
a4=q.d
$.r().toString
if(!(Math.abs(a4-0)<1e-9)){q.d=0
a5=q.y
if(a5!=null)a5.q(new D.p("deltaYaw",a4,0))}a4=q.e
$.r().toString
if(!(Math.abs(a4-0)<1e-9)){q.e=0
a5=q.y
if(a5!=null)a5.q(new D.p("deltaPitch",a4,0))}a4=q.f
$.r().toString
if(!(Math.abs(a4-0)<1e-9)){q.f=0
a5=q.y
if(a5!=null)a5.q(new D.p("deltaRoll",a4,0))}g.push(q)
a6=U.kC()
if(a6.aq([q])){a4=a6.a
a7=a4.length
a4.push(q)
a4=a6.c
if(a4!=null)a4.$2(a7,[q])}a4=$.cs
a4=new U.bw(a4==null?$.cs=new V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):a4)
a4.sO(0,a3)
if(a6.aq([a4])){a5=a6.a
a7=a5.length
a5.push(a4)
a5=a6.c
if(a5!=null)a5.$2(a7,[a4])}a8=E.ca(c2)
a8.saZ(i)
a8.sct(a6)
a4=a8.y
if(a4.aq([d])){a5=a4.a
a7=a5.length
a5.push(d)
a4=a4.c
if(a4!=null)a4.$2(a7,[d])}if(n.aq([a8])){a7=m.length
m.push(a8)
a4=n.c
if(a4!=null)a4.$2(a7,[a8])}a4=V.m9(f.length/125,1,1)
j=new V.a7(Math.floor(a4.a*255)/255,Math.floor(a4.b*255)/255,Math.floor(a4.c*255)/255,Math.floor(255)/255)
f.push(j)
a9=E.ca(c2)
a9.saZ(new O.ij(j))
a9.sct(a6)
a4=a9.y
if(a4.aq([d])){a5=a4.a
a7=a5.length
a5.push(d)
a4=a4.c
if(a4!=null)a4.$2(a7,[d])}if(o.aq([a9])){a7=a.length
a.push(a9)
a4=o.c
if(a4!=null)a4.$2(a7,[a9])}}o=T.kW(c2)
b0=new X.hb(o,new V.a7(0,0,0,1),V.k3())
b0.sal(0,512)
b0.sag(0,512)
j=new V.a7(0,0,0,1)
if(!b0.cx.n(0,j)){l=b0.cx
b0.cx=j
b0.Y(new D.p("color",l,j))}n=b0.db
$.r().toString
if(!(Math.abs(n-2000)<1e-9)){b0.db=2000
b0.Y(new D.p("depth",n,2000))}if(!b0.f){b0.f=!0
b0.Y(new D.p("autoResize",!1,!0))}n=b0.r
$.r().toString
if(!(Math.abs(n-0.5)<1e-9)){b0.r=0.5
b0.Y(new D.p("autoResizeScalarX",n,0.5))}n=b0.x
$.r().toString
if(!(Math.abs(n-0.5)<1e-9)){b0.x=0.5
b0.Y(new D.p("autoResizeScalarY",n,0.5))}b1=V.k3()
if(!b0.dy.n(0,b1)){l=b0.dy
b0.dy=b1
b0.Y(new D.p("region",l,b1))}b2=M.kB()
b2.e.k(0,b)
b2.saY(0,b0)
b2.saQ(k)
b3=X.jX(!1,c2)
b4=M.kB()
b4.e.k(0,c)
b4.saY(0,b3)
b4.saQ(k)
n=p.dP("../resources/maskonaive",".jpg")
m=E.ca(c2)
b5=new M.c4(m)
e=F.k4()
a=e.ga1()
a4=new V.z(-1,-1,1).G()
b6=a.bp(new V.aL(1,2,4,6),V.dy(255,0,0,255),new V.a_(-1,-1,0),new V.O(0,1),a4,c2)
a4=e.ga1()
a=new V.z(1,-1,1).G()
b7=a4.bp(new V.aL(0,3,4,6),V.dy(0,0,255,255),new V.a_(1,-1,0),new V.O(1,1),a,c2)
a=e.ga1()
a4=new V.z(1,1,1).G()
b8=a.bp(new V.aL(0,2,5,6),V.dy(0,128,0,255),new V.a_(1,1,0),new V.O(1,0),a4,c2)
a4=e.ga1()
a=$.a1
if(a==null)a=$.a1=new V.O(0,0)
a5=new V.z(-1,1,1).G()
b9=a4.bp(new V.aL(0,2,4,7),V.dy(255,255,0,255),new V.a_(-1,1,0),a,a5,c2)
e.ga0().hi([b6,b7,b8,b9])
e.aF()
m.scH(0,e)
b5.saQ(c2)
b5.saY(0,c2)
b5.saZ(c2)
m=new O.ej(new V.D(1,1,1))
l=m.c
m.c=n
n.gm().k(0,m.gaz())
m.N(new D.p("boxTexture",l,m.c))
b5.saZ(m)
b5.saY(0,b3)
b5.saQ(k)
n=r.z
if(n==null)n=r.z=D.y()
n.k(0,new U.jJ(g))
p=new T.dz(p)
c0=new X.Y(!1,!1,!1)
p.c=c0
p.bi(new D.p(c3,c2,c0))
n=p.d
if(n!==o){if(n!=null)n.gm().K(0,p.gcQ())
l=p.d
p.d=o
o.gm().k(0,p.gcQ())
p.bi(new D.p("texture",l,p.d))}p.aE(c4)
c4=p.x
if(c4==null)c4=p.x=D.y()
c4.k(0,new U.jK(f,g,h))
c4=new M.c3([])
c4.b0(c4.gfR(),c4.gfT())
c4.bo(0,[b2,b5,b4])
p=r.d
if(p!==c4){if(p!=null)p.gm().K(0,r.gcN())
r.d=c4
c4.gm().k(0,r.gcN())
r.cO()}V.on(r)},
jJ:function jJ(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c}},M={
kB:function(){var s,r=O.jU(),q=new M.cb(r)
r.b0(q.gfc(),q.gfe())
s=X.jX(!0,null)
q.saQ(null)
q.saY(0,s)
return q},
c3:function c3(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
c4:function c4(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
cb:function cb(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mm:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gap(a5)+a6.gap(a6)+a7.gap(a7)+a8.gap(a8)+a9.gap(a9)+b0.gap(b0)+b1.gap(b1)+b2.gap(b2)+b3.gap(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.o)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.o)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.o)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.o)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.ac()
if(h){s=$.b_()
b=new Z.aQ(b.a|s.a)}if(g)b=new Z.aQ(b.a|$.aZ().a)
if(f)b=new Z.aQ(b.a|$.b0().a)
if(e)b=new Z.aQ(b.a|$.aY().a)
return new A.hP(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jx:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jy:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jx(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fZ(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
nz:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jx(b,r,"emission")
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
nv:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jy(b,r,"ambient")
b.a+="\n"},
nx:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jy(b,r,"diffuse")
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
nA:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jy(b,r,"invDiffuse")
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
nG:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jy(b,r,"specular")
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
nC:function(a,b){var s,r,q
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
nE:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jx(b,r,"reflect")
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
nF:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jx(b,r,"refract")
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
nw:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.fZ(r)
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
s=c.a+="   return "+C.a.p(o," * ")+";\n"
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
ny:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.fZ(r)
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
c.a+="      highLight = intensity*("+C.a.p(l," + ")+");\n"}else c.a+="   highLight = "+C.a.p(l," + ")+";\n"
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
nD:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.fZ(r)
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
p=c.a+="   return "+C.a.p(j," * ")+";\n"
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
nH:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.fZ(r)
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
if(m){s=$.hs
if(s==null)s=$.hs=new E.f5(E.l3(),E.l4())
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
s+=u.v
c.a=s
s+=u.q
c.a=s
c.a=s+"\n"}h=[]
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
s=c.a+="   return "+C.a.p(h," * ")+";\n"
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
nB:function(a,b){var s,r
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
s=b.a+="   return "+C.a.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
nI:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.bk(""),i=""+"precision mediump float;\n"
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
A.nz(a,j)
A.nv(a,j)
A.nx(a,j)
A.nA(a,j)
A.nG(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.nE(a,j)
A.nF(a,j)}A.nC(a,j)
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
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nw(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.ny(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nD(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nH(a,p[m],j)
A.nB(a,j)}p=j.a+="// === Main ===\n"
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
for(i=a.z,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="barLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b4(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b4(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b4(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b4(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
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
nJ:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aT+"];\n"
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
nL:function(a,b){var s
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
nK:function(a,b){var s
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
nN:function(a,b){var s,r
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
nO:function(a,b){var s,r
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
nM:function(a,b){var s
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
nP:function(a,b){var s
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
fZ:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.d.b4(a,1)},
k7:function(a,b,c,d,e){var s=new A.iI([],a,c,e)
s.f=d
s.e=P.hI(d,0,!1)
return s},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a){this.a=a},
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.dJ=_.ir=_.dI=_.dH=_.iq=_.dG=_.dF=_.dE=_.ip=_.dD=_.dC=_.dB=_.io=_.dA=_.dz=_.im=_.dw=_.br=_.bq=_.aT=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cb=c
_.cc=d
_.cd=e
_.ce=f
_.cf=g
_.cg=h
_.ci=i
_.cj=j
_.iu=_.it=_.is=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b1:function b1(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aT=b5
_.bq=b6
_.br=b7},
eE:function eE(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eF:function eF(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eI:function eI(a,b,c,d,e,f,g,h,i,j){var _=this
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
eL:function eL(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bi:function bi(){},
cE:function cE(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cF:function cF(a,b){var _=this
_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
iH:function iH(){},
iN:function iN(a){this.a=a},
cK:function cK(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eB:function eB(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
eC:function eC(a,b,c){this.a=a
this.c=b
this.d=c},
eD:function eD(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
eG:function eG(a,b,c){this.a=a
this.c=b
this.d=c},
eH:function eH(a,b,c){this.a=a
this.c=b
this.d=c},
eJ:function eJ(a,b,c){this.a=a
this.c=b
this.d=c},
eK:function eK(a,b,c){this.a=a
this.c=b
this.d=c}},T={
kW:function(a){return new T.it(a)},
dz:function dz(a){var _=this
_.a=a
_.x=_.d=_.c=_.b=null
_.ch=_.Q=!1},
c2:function c2(a,b){this.c=a
this.d=b},
ir:function ir(){},
is:function is(){},
it:function it(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
iu:function iu(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},
iv:function iv(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},
iw:function iw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ix:function ix(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,F,O,E,Z,D,X,V,U,M,A,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k0.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gB:function(a){return H.cy(a)},
i:function(a){return"Instance of '"+H.cz(a)+"'"}}
J.dM.prototype={
i:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$ibo:1}
J.bC.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gB:function(a){return 0},
$ia0:1}
J.ba.prototype={
gB:function(a){return 0},
i:function(a){return String(a)}}
J.e9.prototype={}
J.bM.prototype={}
J.at.prototype={
i:function(a){var s=a[$.lD()]
if(s==null)return this.ed(a)
return"JavaScript function for "+J.h0(s)}}
J.al.prototype={
K:function(a,b){var s
if(!!a.fixed$length)H.f(P.x("remove"))
for(s=0;s<a.length;++s)if(J.W(a[s],b)){a.splice(s,1)
return!0}return!1},
bo:function(a,b){if(!!a.fixed$length)H.f(P.x("addAll"))
this.ez(a,b)
return},
ez:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.b(P.b4(a))
for(s=0;s<r;++s)a.push(b[s])},
E:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b4(a))}},
p:function(a,b){var s,r,q=a.length,p=P.hI(q,"",!1)
for(s=0;s<a.length;++s){r=H.v(a[s])
if(s>=q)return H.e(p,s)
p[s]=r}return p.join(b)},
hz:function(a){return this.p(a,"")},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gcm:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.me())},
b2:function(a,b){if(!!a.immutable$list)H.f(P.x("sort"))
H.mG(a,b==null?J.nm():b)},
ea:function(a){return this.b2(a,null)},
J:function(a,b){var s
for(s=0;s<a.length;++s)if(J.W(a[s],b))return!0
return!1},
i:function(a){return P.jY(a,"[","]")},
gM:function(a){return new J.a5(a,a.length)},
gB:function(a){return H.cy(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.x("set length"))
if(b>a.length)H.lf(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.bU(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.f(P.x("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bU(a,b))
a[b]=c},
$ij:1,
$ih:1,
$im:1}
J.dO.prototype={}
J.a5.prototype={
gD:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bD.prototype={
af:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbs(b)
if(this.gbs(a)===s)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
i6:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.x(""+a+".toInt()"))},
aU:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.x(""+a+".floor()"))},
R:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.x(""+a+".round()"))},
cC:function(a,b){var s
if(b>20)throw H.b(P.aM(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gB:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
e7:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
ee:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dd(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dd(a,b)},
dd:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.x("Result of truncating division is "+H.v(s)+": "+H.v(a)+" ~/ "+b))},
bm:function(a,b){var s
if(a>0)s=this.h9(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
h9:function(a,b){return b>31?0:a>>>b},
$ia3:1,
$ia4:1}
J.cg.prototype={$in:1}
J.dN.prototype={}
J.b9.prototype={
c4:function(a,b){if(b<0)throw H.b(H.bU(a,b))
if(b>=a.length)H.f(H.bU(a,b))
return a.charCodeAt(b)},
cU:function(a,b){if(b>=a.length)throw H.b(H.bU(a,b))
return a.charCodeAt(b)},
X:function(a,b){return a+b},
cK:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.ed(b,null))
if(b>c)throw H.b(P.ed(b,null))
if(c>a.length)throw H.b(P.ed(c,null))
return a.substring(b,c)},
b4:function(a,b){return this.cK(a,b,null)},
I:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.D)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aj:function(a,b){var s=b-a.length
if(s<=0)return a
return this.I(" ",s)+a},
hn:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.aM(c,0,s,null,null))
return H.ly(a,b,c)},
J:function(a,b){return this.hn(a,b,0)},
af:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gB:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$iA:1}
H.dR.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.c4(this.a,b)}}
H.j.prototype={}
H.bE.prototype={
gD:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.fY(q),o=p.gj(q)
if(r.b!==o)throw H.b(P.b4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.A(q,s);++r.c
return!0}}
H.bd.prototype={
gM:function(a){return new H.cm(J.aD(this.a),this.b)},
gj:function(a){return J.bs(this.a)},
A:function(a,b){return this.b.$1(J.jQ(this.a,b))}}
H.c9.prototype={$ij:1}
H.cm.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){return H.Q(this).Q[1].a(this.a)}}
H.cQ.prototype={
gM:function(a){return new H.eU(J.aD(this.a),this.b)}}
H.eU.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.cc.prototype={}
H.eO.prototype={
l:function(a,b,c){throw H.b(P.x("Cannot modify an unmodifiable list"))}}
H.bN.prototype={}
H.iF.prototype={
ai:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cx.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dP.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eN.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i5.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.d4.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icH:1}
H.bu.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lB(r==null?"unknown":r)+"'"},
gie:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ip.prototype={}
H.ik.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lB(s)+"'"}}
H.bY.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bY))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gB:function(a){var s,r=this.c
if(r==null)s=H.cy(this.a)
else s=typeof r!=="object"?J.h_(r):H.cy(r)
return(s^H.cy(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.v(this.d)+"' of "+("Instance of '"+H.cz(s)+"'")}}
H.eg.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.S.prototype={
gj:function(a){return this.a},
gaG:function(a){return new H.aH(this)},
gib:function(a){return H.ml(new H.aH(this),new H.hE(this))},
ho:function(a,b){var s=this.b
if(s==null)return!1
return this.eM(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bk(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bk(p,b)
q=r==null?n:r.b
return q}else return o.hy(b)},
hy:function(a){var s,r,q=this.d
if(q==null)return null
s=this.d_(q,J.h_(a)&0x3ffffff)
r=this.dK(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cR(s==null?m.b=m.bQ():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cR(r==null?m.c=m.bQ():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bQ()
p=J.h_(b)&0x3ffffff
o=m.d_(q,p)
if(o==null)m.bV(q,p,[m.bR(b,c)])
else{n=m.dK(o,b)
if(n>=0)o[n].b=c
else o.push(m.bR(b,c))}}},
E:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b4(s))
r=r.c}},
cR:function(a,b,c){var s=this.bk(a,b)
if(s==null)this.bV(a,b,this.bR(b,c))
else s.b=c},
bR:function(a,b){var s=this,r=new H.hH(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dK:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1},
i:function(a){return P.kE(this)},
bk:function(a,b){return a[b]},
d_:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
eP:function(a,b){delete a[b]},
eM:function(a,b){return this.bk(a,b)!=null},
bQ:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bV(r,s,r)
this.eP(r,s)
return r}}
H.hE.prototype={
$1:function(a){var s=this.a
return H.Q(s).Q[1].a(s.h(0,a))},
$S:function(){return H.Q(this.a).Z("2(1)")}}
H.hH.prototype={}
H.aH.prototype={
gj:function(a){return this.a.a},
gM:function(a){var s=this.a,r=new H.dT(s,s.r)
r.c=s.e
return r}}
H.dT.prototype={
gD:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jF.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.jG.prototype={
$2:function(a,b){return this.a(a,b)},
$S:44}
H.jH.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.hD.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cu.prototype={}
H.bH.prototype={
gj:function(a){return a.length},
$iu:1}
H.be.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aA(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.ct.prototype={
l:function(a,b,c){H.aA(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dZ.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.e_.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.e0.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.e1.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.e2.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.cv.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.e3.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.cY.prototype={}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
H.af.prototype={
Z:function(a){return H.fL(v.typeUniverse,this,a)},
bH:function(a){return H.n8(v.typeUniverse,this,a)}}
H.fb.prototype={}
H.f6.prototype={
i:function(a){return this.a}}
H.d9.prototype={}
P.j3.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:20}
P.j2.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:37}
P.j4.prototype={
$0:function(){this.a.$0()},
$S:10}
P.j5.prototype={
$0:function(){this.a.$0()},
$S:10}
P.d8.prototype={
eu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aV(new P.jr(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))},
ev:function(a,b){if(self.setTimeout!=null)self.setInterval(H.aV(new P.jq(this,a,Date.now(),b),0),a)
else throw H.b(P.x("Periodic timer."))},
$iiA:1}
P.jr.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jq.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.b.ee(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bP.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.v(this.a)+")"}}
P.bQ.prototype={
gD:function(a){var s=this.c
if(s==null)return this.b
return s.gD(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bP){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aD(s)
if(o instanceof P.bQ){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d5.prototype={
gM:function(a){return new P.bQ(this.a())}}
P.dt.prototype={
i:function(a){return H.v(this.a)},
$iB:1,
gbh:function(){return this.b}}
P.eZ.prototype={
ds:function(a){var s,r
H.kn(a,"error",t.K)
s=this.a
if(s.a!==0)throw H.b(P.kU("Future already completed"))
r=P.kv(a)
s.eC(a,r)}}
P.cR.prototype={
hm:function(a,b){var s=this.a
if(s.a!==0)throw H.b(P.kU("Future already completed"))
s.eB(b)}}
P.fc.prototype={
hC:function(a){if((this.c&15)!==6)return!0
return this.b.b.cB(this.d,a.a)},
hx:function(a){var s=this.e,r=a.a,q=this.b.b
if(t.Y.b(s))return q.hZ(s,r,a.b)
else return q.cB(s,r)}}
P.ao.prototype={
e3:function(a,b,c){var s,r,q=$.K
if(q!==C.e)b=b!=null?P.nR(b,q):b
s=new P.ao(q,c.Z("ao<0>"))
r=b==null?1:3
this.cS(new P.fc(s,r,a,b,this.$ti.Z("@<1>").bH(c).Z("fc<1,2>")))
return s},
i5:function(a,b){return this.e3(a,null,b)},
cS:function(a){var s,r=this,q=r.a
if(q<=1){a.a=r.c
r.c=a}else{if(q===2){q=r.c
s=q.a
if(s<4){q.cS(a)
return}r.a=s
r.c=q.c}P.bS(null,null,r.b,new P.j7(r,a))}},
d6:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=m.c
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){s=m.c
n=s.a
if(n<4){s.d6(a)
return}m.a=n
m.c=s.c}l.a=m.bl(a)
P.bS(null,null,m.b,new P.je(l,m))}},
bT:function(){var s=this.c
this.c=null
return this.bl(s)},
bl:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
eI:function(a){var s,r,q,p=this
p.a=1
try{a.e3(new P.ja(p),new P.jb(p),t.P)}catch(q){s=H.aC(q)
r=H.aX(q)
P.om(new P.jc(p,s,r))}},
cW:function(a){var s=this,r=s.bT()
s.a=4
s.c=a
P.cT(s,r)},
bj:function(a,b){var s=this,r=s.bT(),q=P.h4(a,b)
s.a=8
s.c=q
P.cT(s,r)},
eB:function(a){if(this.$ti.Z("bz<1>").b(a)){this.eJ(a)
return}this.eD(a)},
eD:function(a){this.a=1
P.bS(null,null,this.b,new P.j9(this,a))},
eJ:function(a){var s=this
if(s.$ti.b(a)){if(a.a===8){s.a=1
P.bS(null,null,s.b,new P.jd(s,a))}else P.kb(a,s)
return}s.eI(a)},
eC:function(a,b){this.a=1
P.bS(null,null,this.b,new P.j8(this,a,b))},
$ibz:1}
P.j7.prototype={
$0:function(){P.cT(this.a,this.b)},
$S:2}
P.je.prototype={
$0:function(){P.cT(this.b,this.a.a)},
$S:2}
P.ja.prototype={
$1:function(a){var s,r,q,p=this.a
p.a=0
try{p.cW(p.$ti.c.a(a))}catch(q){s=H.aC(q)
r=H.aX(q)
p.bj(s,r)}},
$S:20}
P.jb.prototype={
$2:function(a,b){this.a.bj(a,b)},
$S:45}
P.jc.prototype={
$0:function(){this.a.bj(this.b,this.c)},
$S:2}
P.j9.prototype={
$0:function(){this.a.cW(this.b)},
$S:2}
P.jd.prototype={
$0:function(){P.kb(this.b,this.a)},
$S:2}
P.j8.prototype={
$0:function(){this.a.bj(this.b,this.c)},
$S:2}
P.jh.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.hX(q.d)}catch(p){s=H.aC(p)
r=H.aX(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=P.h4(s,r)
o.b=!0
return}if(l instanceof P.ao&&l.a>=4){if(l.a===8){q=m.a
q.c=l.c
q.b=!0}return}if(t.c.b(l)){n=m.b.a
q=m.a
q.c=l.i5(new P.ji(n),t.z)
q.b=!1}},
$S:2}
P.ji.prototype={
$1:function(a){return this.a},
$S:27}
P.jg.prototype={
$0:function(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.cB(p.d,this.b)}catch(o){s=H.aC(o)
r=H.aX(o)
q=this.a
q.c=P.h4(s,r)
q.b=!0}},
$S:2}
P.jf.prototype={
$0:function(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.hC(s)&&p.a.e!=null){p.c=p.a.hx(s)
p.b=!1}}catch(o){r=H.aC(o)
q=H.aX(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=P.h4(r,q)
n.b=!0}},
$S:2}
P.eV.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.jt.prototype={}
P.jA.prototype={
$0:function(){var s=H.b(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jn.prototype={
i0:function(a){var s,r,q,p=null
try{if(C.e===$.K){a.$0()
return}P.ll(p,p,this,a)}catch(q){s=H.aC(q)
r=H.aX(q)
P.jz(p,p,this,s,r)}},
i2:function(a,b){var s,r,q,p=null
try{if(C.e===$.K){a.$1(b)
return}P.lm(p,p,this,a,b)}catch(q){s=H.aC(q)
r=H.aX(q)
P.jz(p,p,this,s,r)}},
i3:function(a,b){return this.i2(a,b,t.z)},
c_:function(a){return new P.jo(this,a)},
dl:function(a,b){return new P.jp(this,a,b)},
hY:function(a){if($.K===C.e)return a.$0()
return P.ll(null,null,this,a)},
hX:function(a){return this.hY(a,t.z)},
i1:function(a,b){if($.K===C.e)return a.$1(b)
return P.lm(null,null,this,a,b)},
cB:function(a,b){return this.i1(a,b,t.z,t.z)},
i_:function(a,b,c){if($.K===C.e)return a.$2(b,c)
return P.nS(null,null,this,a,b,c)},
hZ:function(a,b,c){return this.i_(a,b,c,t.z,t.z,t.z)}}
P.jo.prototype={
$0:function(){return this.a.i0(this.b)},
$S:2}
P.jp.prototype={
$1:function(a){return this.a.i3(this.b,a)},
$S:function(){return this.c.Z("~(0)")}}
P.cU.prototype={
gM:function(a){var s=new P.cV(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
J:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eK(b)
return r}},
eK:function(a){var s=this.d
if(s==null)return!1
return this.bN(s[this.bK(a)],a)>=0},
k:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cV(s==null?q.b=P.kc():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cV(r==null?q.c=P.kc():r,b)}else return q.ey(0,b)},
ey:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kc()
s=q.bK(b)
r=p[s]
if(r==null)p[s]=[q.bJ(b)]
else{if(q.bN(r,b)>=0)return!1
r.push(q.bJ(b))}return!0},
K:function(a,b){if((b&1073741823)===b)return this.h1(this.c,b)
else return this.h0(0,b)},
h0:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bK(b)
r=n[s]
q=o.bN(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.df(p)
return!0},
cV:function(a,b){if(a[b]!=null)return!1
a[b]=this.bJ(b)
return!0},
h1:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.df(s)
delete a[b]
return!0},
d1:function(){this.r=this.r+1&1073741823},
bJ:function(a){var s,r=this,q=new P.jm(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.d1()
return q},
df:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.d1()},
bK:function(a){return J.h_(a)&1073741823},
bN:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.W(a[r].a,b))return r
return-1}}
P.jm.prototype={}
P.cV.prototype={
gD:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cf.prototype={}
P.cj.prototype={$ij:1,$ih:1,$im:1}
P.C.prototype={
gM:function(a){return new H.bE(a,this.gj(a))},
A:function(a,b){return this.h(a,b)},
E:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.b(P.b4(a))}},
gdL:function(a){return this.gj(a)===0},
i8:function(a,b){var s,r,q,p,o=this
if(o.gdL(a)){s=J.jZ(0)
return s}r=o.h(a,0)
q=P.hI(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s}return q},
i7:function(a){return this.i8(a,!0)},
i:function(a){return P.jY(a,"[","]")}}
P.cl.prototype={}
P.hM.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.v(a)
r.a=s+": "
r.a+=H.v(b)},
$S:30}
P.U.prototype={
E:function(a,b){var s,r,q
for(s=J.aD(this.gaG(a)),r=H.bW(a).Z("U.V");s.t();){q=s.gD(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.bs(this.gaG(a))},
i:function(a){return P.kE(a)},
$iX:1}
P.ei.prototype={
i:function(a){return P.jY(this,"{","}")},
A:function(a,b){var s,r,q,p,o="index"
H.kn(b,o,t.S)
P.kO(b,o)
for(s=P.mT(this,this.r),r=H.Q(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.b(P.H(b,this,o,null,q))}}
P.d1.prototype={$ij:1,$ih:1}
P.cW.prototype={}
P.dd.prototype={}
P.dx.prototype={}
P.dB.prototype={}
P.hr.prototype={}
P.iQ.prototype={}
P.iR.prototype={
hp:function(a){var s,r,q,p=P.k2(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.js(r)
if(q.eR(a,0,p)!==p){C.d.c4(a,p-1)
q.bX()}return new Uint8Array(r.subarray(0,H.ne(0,q.b,s)))}}
P.js.prototype={
bX:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
hg:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bX()
return!1}},
eR:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.d.c4(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.d.cU(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.hg(p,C.d.cU(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bX()}else if(p<=2047){o=l.b
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
P.R.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.R&&this.a===b.a&&!0},
af:function(a,b){return C.b.af(this.a,b.a)},
gB:function(a){var s=this.a
return(s^C.b.bm(s,30))&1073741823},
i:function(a){var s=this,r=P.ma(H.mw(s)),q=P.dD(H.mu(s)),p=P.dD(H.mq(s)),o=P.dD(H.mr(s)),n=P.dD(H.mt(s)),m=P.dD(H.mv(s)),l=P.mb(H.ms(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b6.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gB:function(a){return C.b.gB(this.a)},
af:function(a,b){return C.b.af(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hp(),o=this.a
if(o<0)return"-"+new P.b6(0-o).i(0)
s=p.$1(C.b.a2(o,6e7)%60)
r=p.$1(C.b.a2(o,1e6)%60)
q=new P.ho().$1(o%1e6)
return""+C.b.a2(o,36e8)+":"+s+":"+r+"."+q}}
P.ho.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.hp.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.B.prototype={
gbh:function(){return H.aX(this.$thrownJsError)}}
P.ds.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hu(s)
return"Assertion failed"}}
P.eA.prototype={}
P.e4.prototype={
i:function(a){return"Throw of null."}}
P.ai.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbM()+o+m
if(!q.a)return l
s=q.gbL()
r=P.hu(q.b)
return l+s+": "+r}}
P.cA.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.v(q):""
else if(q==null)s=": Not greater than or equal to "+H.v(r)
else if(q>r)s=": Not in inclusive range "+H.v(r)+".."+H.v(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.v(r)
return s}}
P.dK.prototype={
gbM:function(){return"RangeError"},
gbL:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.eP.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eM.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.cI.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dA.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hu(s)+"."}}
P.e7.prototype={
i:function(a){return"Out of Memory"},
gbh:function(){return null},
$iB:1}
P.cG.prototype={
i:function(a){return"Stack Overflow"},
gbh:function(){return null},
$iB:1}
P.dC.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f8.prototype={
i:function(a){return"Exception: "+this.a}}
P.hz.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.d.cK(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gj:function(a){var s,r=this.gM(this)
for(s=0;r.t();)++s
return s},
A:function(a,b){var s,r,q
P.kO(b,"index")
for(s=this.gM(this),r=0;s.t();){q=s.gD(s)
if(b===r)return q;++r}throw H.b(P.H(b,this,"index",null,r))},
i:function(a){return P.md(this,"(",")")}}
P.dL.prototype={}
P.a0.prototype={
gB:function(a){return P.G.prototype.gB.call(C.I,this)},
i:function(a){return"null"}}
P.G.prototype={constructor:P.G,$iG:1,
n:function(a,b){return this===b},
gB:function(a){return H.cy(this)},
i:function(a){return"Instance of '"+H.cz(this)+"'"},
toString:function(){return this.i(this)}}
P.fC.prototype={
i:function(a){return""},
$icH:1}
P.bk.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.h1.prototype={
gj:function(a){return a.length}}
W.dq.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dr.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dw.prototype={}
W.b3.prototype={
cE:function(a,b,c){if(c!=null)return a.getContext(b,P.lr(c))
return a.getContext(b)},
e6:function(a,b){return this.cE(a,b,null)},
$ib3:1}
W.c1.prototype={$ic1:1}
W.aj.prototype={
gj:function(a){return a.length}}
W.hh.prototype={
gj:function(a){return a.length}}
W.E.prototype={$iE:1}
W.c5.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hi.prototype={}
W.ae.prototype={}
W.aq.prototype={}
W.hj.prototype={
gj:function(a){return a.length}}
W.hk.prototype={
gj:function(a){return a.length}}
W.hl.prototype={
gj:function(a){return a.length}}
W.hm.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.c7.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.c8.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.v(r)+", "
s=a.top
s.toString
return r+H.v(s)+") "+H.v(this.gal(a))+" x "+H.v(this.gag(a))},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bp(b)
if(s===r.gbt(b)){s=a.top
s.toString
s=s===r.gbw(b)&&this.gal(a)===r.gal(b)&&this.gag(a)===r.gag(b)}else s=!1}else s=!1
return s},
gB:function(a){var s,r=a.left
r.toString
r=C.c.gB(r)
s=a.top
s.toString
return W.l6(r,C.c.gB(s),C.c.gB(this.gal(a)),C.c.gB(this.gag(a)))},
gdm:function(a){var s=a.bottom
s.toString
return s},
gd0:function(a){return a.height},
gag:function(a){var s=this.gd0(a)
s.toString
return s},
gbt:function(a){var s=a.left
s.toString
return s},
gcA:function(a){var s=a.right
s.toString
return s},
gbw:function(a){var s=a.top
s.toString
return s},
gdg:function(a){return a.width},
gal:function(a){var s=this.gdg(a)
s.toString
return s},
$iaa:1}
W.dE.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.hn.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.eY.prototype={
gdL:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b]).toString},
k:function(a,b){this.a.appendChild(b).toString
return b},
gM:function(a){var s=this.i7(this)
return new J.a5(s,s.length)}}
W.I.prototype={
gdq:function(a){var s=a.children
s.toString
return new W.eY(a,s)},
gdr:function(a){var s,r,q,p=a.clientLeft
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
$iI:1}
W.i.prototype={$ii:1}
W.c.prototype={
hh:function(a,b,c,d){if(c!=null)this.eA(a,b,c,!1)},
eA:function(a,b,c,d){return a.addEventListener(b,H.aV(c,1),!1)},
$ic:1}
W.aF.prototype={$iaF:1}
W.dF.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.dG.prototype={
gj:function(a){return a.length}}
W.dI.prototype={
gj:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.hB.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.b7.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.b8.prototype={
gdt:function(a){var s=a.data
s.toString
return s},
$ib8:1}
W.bB.prototype={$ibB:1}
W.bb.prototype={$ibb:1}
W.hK.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.i0.prototype={
gj:function(a){return a.length}}
W.dW.prototype={
h:function(a,b){return P.aW(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aW(s.value[1]))}},
gaG:function(a){var s=[]
this.E(a,new W.i1(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iX:1}
W.i1.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dX.prototype={
h:function(a,b){return P.aW(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aW(s.value[1]))}},
gaG:function(a){var s=[]
this.E(a,new W.i2(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iX:1}
W.i2.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aI.prototype={$iaI:1}
W.dY.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.a9.prototype={$ia9:1}
W.eX.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b]).toString},
gM:function(a){var s=this.a.childNodes
return new W.cd(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.w.prototype={
hV:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lU(s,b,a)}catch(q){H.aC(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ec(a):s},
h2:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iw:1}
W.cw.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.aK.prototype={
gj:function(a){return a.length},
$iaK:1}
W.eb.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.ef.prototype={
h:function(a,b){return P.aW(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aW(s.value[1]))}},
gaG:function(a){var s=[]
this.E(a,new W.ic(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iX:1}
W.ic.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eh.prototype={
gj:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.el.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.aN.prototype={$iaN:1}
W.em.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.aO.prototype={
gj:function(a){return a.length},
$iaO:1}
W.ep.prototype={
h:function(a,b){return a.getItem(H.nc(b))},
E:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaG:function(a){var s=[]
this.E(a,new W.il(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iX:1}
W.il.prototype={
$2:function(a,b){return this.a.push(a)},
$S:36}
W.an.prototype={$ian:1}
W.ax.prototype={$iax:1}
W.ag.prototype={$iag:1}
W.et.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.eu.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.iz.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aP.prototype={$iaP:1}
W.bl.prototype={$ibl:1}
W.ey.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.iD.prototype={
gj:function(a){return a.length}}
W.az.prototype={}
W.iP.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eS.prototype={
gj:function(a){return a.length}}
W.aR.prototype={
ght:function(a){var s=a.deltaY
if(s!=null)return s
throw H.b(P.x("deltaY is not supported"))},
ghs:function(a){var s=a.deltaX
if(s!=null)return s
throw H.b(P.x("deltaX is not supported"))},
$iaR:1}
W.bO.prototype={
h3:function(a,b){var s=a.requestAnimationFrame(H.aV(b,1))
s.toString
return s},
eQ:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.f_.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.cS.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.v(r)+", "
s=a.top
s.toString
s=r+H.v(s)+") "
r=a.width
r.toString
r=s+H.v(r)+" x "
s=a.height
s.toString
return r+H.v(s)},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bp(b)
if(s===r.gbt(b)){s=a.top
s.toString
if(s===r.gbw(b)){s=a.width
s.toString
if(s===r.gal(b)){s=a.height
s.toString
r=s===r.gag(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gB:function(a){var s,r,q,p=a.left
p.toString
p=C.c.gB(p)
s=a.top
s.toString
s=C.c.gB(s)
r=a.width
r.toString
r=C.c.gB(r)
q=a.height
q.toString
return W.l6(p,s,r,C.c.gB(q))},
gd0:function(a){return a.height},
gag:function(a){var s=a.height
s.toString
return s},
gdg:function(a){return a.width},
gal:function(a){var s=a.width
s.toString
return s}}
W.fd.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.cX.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.fw.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.fD.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iu:1,
$ih:1,
$im:1}
W.jW.prototype={}
W.f7.prototype={}
W.j6.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.ka.prototype={}
W.F.prototype={
gM:function(a){return new W.cd(a,this.gj(a))}}
W.cd.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lT(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return H.Q(this).c.a(this.d)}}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.ft.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fz.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
P.da.prototype={$ib8:1,
gdt:function(a){return this.a}}
P.jv.prototype={
$1:function(a){this.a.push(P.lh(a))},
$S:11}
P.jC.prototype={
$2:function(a,b){this.a[a]=P.lh(b)},
$S:29}
P.dH.prototype={
gb8:function(){return new H.bd(new H.cQ(this.b,new P.hx()),new P.hy())},
E:function(a,b){C.a.E(P.hJ(this.gb8(),!1),b)},
l:function(a,b,c){var s=this.gb8()
J.lZ(s.b.$1(J.jQ(s.a,b)),c)},
k:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.bs(this.gb8().a)},
h:function(a,b){var s=this.gb8()
return s.b.$1(J.jQ(s.a,b))},
gM:function(a){var s=P.hJ(this.gb8(),!1)
return new J.a5(s,s.length)}}
P.hx.prototype={
$1:function(a){return t.h.b(a)},
$S:24}
P.hy.prototype={
$1:function(a){return t.h.a(a)},
$S:25}
P.i4.prototype={
i:function(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
P.jM.prototype={
$1:function(a){return this.a.hm(0,a)},
$S:11}
P.jN.prototype={
$1:function(a){if(a==null)return this.a.ds(new P.i4(a===undefined))
return this.a.ds(a)},
$S:11}
P.jj.prototype={
dQ:function(){return Math.random()}}
P.fs.prototype={
gcA:function(a){return this.$ti.c.a(this.a+this.c)},
gdm:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
n:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bp(b)
if(s===r.gbt(b)){q=o.b
if(q===r.gbw(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcA(b)&&p.a(q+o.d)===r.gdm(b)}else s=!1}else s=!1}else s=!1
return s},
gB:function(a){var s=this,r=s.a,q=C.b.gB(r),p=s.b,o=C.b.gB(p),n=s.$ti.c
r=C.b.gB(n.a(r+s.c))
p=C.b.gB(n.a(p+s.d))
return H.mH(H.im(H.im(H.im(H.im(0,q),o),r),p))}}
P.aa.prototype={
gbt:function(a){return this.a},
gbw:function(a){return this.b},
gal:function(a){return this.c},
gag:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.dS.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bf.prototype={$ibf:1}
P.e5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.i7.prototype={
gj:function(a){return a.length}}
P.es.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gdq:function(a){return new P.dH(a,new W.eX(a))}}
P.bm.prototype={$ibm:1}
P.ez.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fg.prototype={}
P.fh.prototype={}
P.fo.prototype={}
P.fp.prototype={}
P.fA.prototype={}
P.fB.prototype={}
P.fI.prototype={}
P.fJ.prototype={}
P.h7.prototype={
gj:function(a){return a.length}}
P.du.prototype={
h:function(a,b){return P.aW(a.get(b))},
E:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aW(s.value[1]))}},
gaG:function(a){var s=[]
this.E(a,new P.ha(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iX:1}
P.ha.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dv.prototype={
gj:function(a){return a.length}}
P.aE.prototype={}
P.e6.prototype={
gj:function(a){return a.length}}
P.eW.prototype={}
P.bK.prototype={
e2:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.fX(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.I.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.o3(g))
return}if(t.m.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.jS("Incorrect number or type of arguments"))},
i4:function(a,b,c,d,e,f,g){return this.e2(a,b,c,d,e,f,g,null,null,null)},
$ibK:1}
P.en.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=P.aW(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fx.prototype={}
P.fy.prototype={}
K.h2.prototype={
aW:function(a,b){return!0},
i:function(a){return"all"}}
K.dJ.prototype={
aW:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aW(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aJ.prototype={
aW:function(a,b){return!this.eb(0,b)},
i:function(a){return"!["+this.bA(0)+"]"}}
K.T.prototype={
S:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.d("May not create a Set with zero characters."))
s=new H.S(t.s)
for(r=new H.bE(a,a.gj(a)),q=H.Q(r).c;r.t();)s.l(0,q.a(r.d),!0)
p=P.hJ(new H.aH(s),!0)
C.a.ea(p)
this.a=p},
aW:function(a,b){return C.a.J(this.a,b)},
i:function(a){return P.k5(this.a)}}
L.eo.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iE(this.a.H(0,b),[])
s.push(p)
return p},
hv:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aW(0,a))return p}return null},
i:function(a){return this.b},
de:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.J(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.aH(s.c)
s=J.aD(s==null?[]:s)
for(;s.t();){r=s.gD(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.J(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bA(0))}return m.charCodeAt(0)==0?m:m}}
L.ew.prototype={
i:function(a){var s=H.lz(this.b,"\n","\\n"),r=H.lz(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ex.prototype={
i:function(a){return this.b}}
L.iB.prototype={
H:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eo(this,b,[])
s.l(0,b,r)}return r},
bf:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.ex(a,P.N(s,s))
r.l(0,a,q)}return q},
e4:function(a){return this.i9(a)},
i9:function(a){var s=this
return P.nu(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$e4(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.Q(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a0.length
if(h!==0){if(!!a0.fixed$length)H.f(P.x("removeAt"))
if(0>=h)H.f(P.ed(0,null))
g=a0.splice(0,1)[0]}else{if(!r.t()){q=3
break}g=n.a(r.d)}b.push(g);++k
h=d==null
f=h?null:d.hv(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.k5(b)
throw H.b(P.d("Untokenizable string [state: "+H.v(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.x("removeRange"))
P.k2(0,i,b.length)
b.splice(0,i-0)
C.a.bo(a0,b)
b=[]
c=[]
d=s.d
q=!m.J(0,l.a)?7:8
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
if(h!=null){e=P.k5(c)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.ew(h,e,k)
l=h}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.J(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mR()
case 1:return P.mS(o)}}},t.aR)},
i:function(a){var s,r,q=new P.bk(""),p=this.d
if(p!=null)q.a=""+(p.de()+"\n")
for(p=this.a,p=p.gib(p),p=new H.cm(J.aD(p.a),p.b),s=H.Q(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.v(r==null?null:r.de())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iE.prototype={
i:function(a){return this.b.b+": "+this.bA(0)}}
F.h8.prototype={
hB:function(a){var s,r=W.m0(a)
r.autoplay=!1
r.preload="auto";++this.a
s=new F.ea(r)
W.P(r,"playing",s.gfo(),!1)
W.P(r,"pause",s.gfm(),!1)
W.P(r,"load",new F.h9(this,s),!1)
return s}}
F.h9.prototype={
$1:function(a){var s=this.b
if(!s.b)s.b=!0;--this.a.b},
$S:3}
F.ea.prototype={
fp:function(a){return null},
fn:function(a){return null},
sic:function(a,b){var s,r
if(b<0)b=0
else if(b>1)b=1
s=this.a
r=s.volume
r.toString
$.r().toString
if(!(Math.abs(r-b)<1e-9))s.volume=b},
shT:function(a,b){var s,r
if(b<0.001)b=0.001
else if(b>100)b=100
s=this.a
r=s.playbackRate
r.toString
$.r().toString
if(!(Math.abs(r-b)<1e-9))s.playbackRate=b}}
O.bv.prototype={
cF:function(a,b,c){this.b=b
this.c=a},
b0:function(a,b){return this.cF(a,null,b)},
aq:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
d2:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gM:function(a){var s=this.a
return new J.a5(s,s.length)},
A:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
k:function(a,b){var s,r
if(this.aq([b])){s=this.a
r=s.length
s.push(b)
this.d2(r,[b])}},
bo:function(a,b){var s,r
if(this.aq(b)){s=this.a
r=s.length
C.a.bo(s,b)
this.d2(r,b)}},
$ih:1}
O.cr.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
aK:function(){var s=this.b
return s==null?null:s.q(null)},
gO:function(a){var s=this.a
if(s.length>0)return C.a.gcm(s)
else return V.a8()},
bv:function(a){this.a.push(a)
this.aK()},
aH:function(){var s=this.a
if(s.length>0){s.pop()
this.aK()}}}
E.hc.prototype={}
E.bx.prototype={
cT:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.a5(s,s.length),r=H.Q(s).c;s.t();){q=r.a(s.d)
if(q.f==null)q.cT()}},
scH:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().K(0,s.gdV())
if(b!=null)b.gm().k(0,s.gdV())
s.an(new D.p("shape",r,b))}},
saZ:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gm().K(0,s.gdX())
if(a!=null)a.gm().k(0,s.gdX())
s.cT()
s.an(new D.p("technique",r,a))}},
sct:function(a){var s,r,q=this
if(!J.W(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gm().K(0,q.gdT())
if(a!=null)a.gm().k(0,q.gdT())
r=q.r
q.an(new D.p("mover",s,r))}},
ak:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.ax(0,b,q)
if(!J.W(o,q.x)){s=q.x
q.x=o
q.an(new D.p("matrix",s,o))}p=q.f
if(p!=null)p.ak(0,b)
for(p=q.y.a,p=new J.a5(p,p.length),r=H.Q(p).c;p.t();)r.a(p.d).ak(0,b)},
a8:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gO(q))
else o.push(p.I(0,q.gO(q)))
q.aK()
a.cw(r.f)
s=C.a.gcm(a.dy)
if(r.d!=null)if(s!=null)s.cz(a,r)
for(p=r.y.a,p=new J.a5(p,p.length),o=H.Q(p).c;p.t();)o.a(p.d).a8(a)
a.cv()
q.aH()},
an:function(a){var s=this.z
return s==null?null:s.q(a)},
a3:function(){return this.an(null)},
dW:function(a){this.e=null
this.an(a)},
hK:function(){return this.dW(null)},
dY:function(a){return this.an(a)},
hL:function(){return this.dY(null)},
dU:function(a){return this.an(a)},
hJ:function(){return this.dU(null)},
dS:function(a){return this.an(a)},
hG:function(){return this.dS(null)},
hF:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdR(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.by()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a3()},
hI:function(a,b){var s,r
for(s=b.gM(b),r=this.gdR();s.t();)s.gD(s).gm().K(0,r)
this.a3()},
i:function(a){return"Unnamed entity"}}
E.bt.prototype={
i:function(a){return this.b}}
E.bI.prototype={
i:function(a){return this.b}}
E.f5.prototype={}
E.i8.prototype={
eh:function(a,b){var s=this
s.cy.gm().k(0,new E.i9(s))
s.db.gm().k(0,new E.ia(s))
s.dx.gm().k(0,new E.ib(s))},
ghS:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gO(q).I(0,s.gO(s))
q=s}return q},
ge_:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.ghS().I(0,r.gO(r))}return r},
cw:function(a){var s=this.dy
return s.push(a==null?C.a.gcm(s):a)},
cv:function(){var s=this.dy
if(s.length>1)s.pop()},
bY:function(a){var s,r=a.b
if(r.length===0)throw H.b(P.d("May not cache a shader with no name."))
s=this.fr
if(s.ho(0,r))throw H.b(P.d('Shader cache already contains a shader by the name "'+r+'".'))
s.l(0,r,a)}}
E.i9.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:0}
E.ia.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:0}
E.ib.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:0}
E.ev.prototype={
cP:function(a){this.e0()},
cO:function(){return this.cP(null)},
ghw:function(){var s,r=this,q=Date.now(),p=C.b.a2(P.kA(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.R(q,!1)
return s/p},
d9:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.c.aU(r*o)
r=s.clientHeight
r.toString
p=C.c.aU(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kY(C.h,this.ghW())}},
e0:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.u.eQ(s)
r=W.lo(new E.iy(this),t.H)
r.toString
C.u.h3(s,r)}},
hU:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d9()
q=n.z
if(q!=null)q.q(null)
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.R(p,!1)
q.y=P.kA(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aK()
p=q.db
C.a.sj(p.a,0)
p.aK()
p=q.dx
C.a.sj(p.a,0)
p.aK()
p=q.dy
C.a.sj(p,0)
p.push(null)
m.a8(q)}}catch(o){s=H.aC(o)
r=H.aX(o)
P.kt("Error: "+H.v(s))
P.kt("Stack: "+H.v(r))
throw H.b(s)}}}
E.iy.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hU()}},
$S:28}
Z.eT.prototype={}
Z.c_.prototype={
L:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aC(q)
r=P.d('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.v(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.cP.prototype={}
Z.b2.prototype={
as:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
L:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.e(r,s)
r[s].L(a)}},
ab:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a8:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.e(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cz(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(m,", ")+"\nAttrs:   "+C.a.p(o,", ")}}
Z.ce.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cz(this.c)+"'")+"]"}}
Z.aQ.prototype={
gcI:function(a){var s=this.a,r=(s&$.ac().a)!==0?3:0
if((s&$.b_().a)!==0)r+=3
if((s&$.aZ().a)!==0)r+=3
if((s&$.br().a)!==0)r+=2
if((s&$.b0().a)!==0)r+=3
if((s&$.dn().a)!==0)r+=3
if((s&$.dp().a)!==0)r+=4
if((s&$.bX().a)!==0)++r
return(s&$.aY().a)!==0?r+4:r},
hk:function(a){var s,r=$.ac(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b_()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aZ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dn()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dp()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bX()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aY()
if((q&r.a)!==0)if(s===a)return r
return $.lR()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aQ))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ac().a)!==0)s.push("Pos")
if((r&$.b_().a)!==0)s.push("Norm")
if((r&$.aZ().a)!==0)s.push("Binm")
if((r&$.br().a)!==0)s.push("Txt2D")
if((r&$.b0().a)!==0)s.push("TxtCube")
if((r&$.dn().a)!==0)s.push("Clr3")
if((r&$.dp().a)!==0)s.push("Clr4")
if((r&$.bX().a)!==0)s.push("Weight")
if((r&$.aY().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.he.prototype={}
D.by.prototype={
k:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
K:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.J(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.K(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.J(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.K(p,b)
s=p===!0||s}return s},
q:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.L():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.E(P.hJ(p,!0),new D.hv(s))
r=q.b
if(r!=null){q.b=[]
C.a.E(r,new D.hw(s))}return!0},
ca:function(){return this.q(null)},
aw:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.q(s)}}}}
D.hv.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.hw.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.L.prototype={}
D.ar.prototype={}
D.as.prototype={}
D.p.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.v(this.d)+" => "+H.v(this.e)}}
X.c0.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c0))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dQ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dQ))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hF.prototype={}
X.ck.prototype={}
X.hL.prototype={
b7:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.O(o.a+b.a,o.b+b.b)
o=q.a.gaR()
s=$.a1
if(s==null)s=$.a1=new V.O(0,0)
r=q.x
q.z=new P.R(p,!1)
q.x=n
return new X.bF(a,s,r,o,n)},
cu:function(a,b){this.r=a.a
return!1},
bd:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.q(this.b7(a,b))
return!0},
hP:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaR()
r=this.x
Date.now()
q.q(new X.bG(new V.V(a.a,a.b),s,r))
return!0},
fA:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.q(new X.ck(c,q.a.gaR(),b))
q.y=new P.R(s,!1)
s=$.a1
q.x=s==null?$.a1=new V.O(0,0):s}}
X.Y.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.Y))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.p(s,"+")}}
X.bF.prototype={}
X.i3.prototype={
bO:function(a,b,c){var s=this,r=new P.R(Date.now(),!1),q=s.a.gaR(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bF(a,p,o,q,b)},
cu:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.q(this.bO(a,b,!0))
return!0},
bd:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.q(r.bO(a,b,!0))
return!0},
bc:function(a,b){var s=this.d
if(s==null)return!1
s.q(this.bO(a,b,!1))
return!0},
hQ:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaR()
Date.now()
r.q(new X.bG(new V.V(a.a,a.b),s,b))
return!0},
gc9:function(){var s=this.b
return s==null?this.b=D.y():s},
gby:function(){var s=this.c
return s==null?this.c=D.y():s},
gaX:function(){var s=this.d
return s==null?this.d=D.y():s}}
X.bG.prototype={}
X.ec.prototype={}
X.cJ.prototype={}
X.iC.prototype={
b7:function(a,b){var s,r,q,p,o=this,n=new P.R(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a1
if(r==null){r=new V.O(0,0)
$.a1=r
s=r}else s=r}r=o.a.gaR()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cJ(q,p,r,s)},
hO:function(a){var s=this.b
if(s==null)return!1
s.q(this.b7(a,!0))
return!0},
hM:function(a){var s=this.c
if(s==null)return!1
s.q(this.b7(a,!0))
return!0},
hN:function(a){var s=this.d
if(s==null)return!1
s.q(this.b7(a,!1))
return!0},
gcJ:function(a){var s=this.b
return s==null?this.b=D.y():s},
gdv:function(a){var s=this.c
return s==null?this.c=D.y():s},
gaX:function(){var s=this.d
return s==null?this.d=D.y():s}}
X.eQ.prototype={
gaV:function(a){var s=this.b
return s==null?this.b=new X.hF(new X.Y(!1,!1,!1),P.kD(t.S)):s},
gV:function(){var s,r=this.c
if(r==null){r=$.a1
if(r==null){r=$.a1=new V.O(0,0)
s=r}else s=r
r=this.c=new X.i3(this,r,s,new P.R(Date.now(),!1),new P.R(Date.now(),!1))}return r},
gah:function(){var s=this.d
if(s==null){s=$.a1
if(s==null)s=$.a1=new V.O(0,0)
s=this.d=new X.hL(this,s,new P.R(Date.now(),!1),new P.R(Date.now(),!1))}return s},
gao:function(){var s,r=this.e
if(r==null){r=$.a1
if(r==null){r=$.a1=new V.O(0,0)
s=r}else s=r
r=this.e=new X.iC(this,r,s,new P.R(Date.now(),!1),new P.R(Date.now(),!1))}return r},
gaR:function(){var s=this.a
return V.kP(0,0,C.f.gdr(s).c,C.f.gdr(s).d)},
cY:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dQ(p,new X.Y(s,r,q))},
aP:function(a){var s,r,q=this.gaV(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.Y(p,s,r)},
bW:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaV(this)
r=a.altKey
q=a.shiftKey
p.c=new X.Y(s,r===!0,q===!0)},
aD:function(a){var s,r,q,p
if(a==null){s=$.a1
return s==null?$.a1=new V.O(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.O(r-p,q-s)},
b9:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.V(r,s)},
bS:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.c.R(n)
m=o.pageY
m.toString
C.c.R(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.c.R(l)
l=o.pageY
l.toString
l=C.c.R(l)
k=j.top
k.toString
s.push(new V.O(n-m,l-k))}return s},
aA:function(a){var s,r,q,p
if(a==null)return new X.c0(0,new X.Y(!1,!1,!1))
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
return new X.c0(s,new X.Y(r,q,p))},
bP:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
fs:function(a){return this.f=!0},
fb:function(a){return this.f=!1},
fh:function(a){if(this.f&&this.bP(a))a.preventDefault()},
fw:function(a){var s,r,q=this
if(!q.f)return
s=q.cY(a)
r=q.gaV(q)
r.c=s.b
r.d.k(0,s.a)},
fu:function(a){var s,r,q=this
if(!q.f)return
s=q.cY(a)
r=q.gaV(q)
r.c=s.b
r.d.K(0,s.a)},
fC:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aP(a)
if(p.x){s=p.aA(a)
r=p.b9(a)
if(p.gah().cu(s,r))a.preventDefault()
return}s=p.aA(a)
q=p.aD(a)
if(p.gV().cu(s,q))a.preventDefault()},
fG:function(a){var s,r,q,p=this
p.aP(a)
s=p.aA(a)
if(p.x){r=p.b9(a)
if(p.gah().bd(s,r))a.preventDefault()
return}q=p.aD(a)
if(p.gV().bd(s,q))a.preventDefault()},
fl:function(a){var s,r,q,p=this
if(!p.bP(a)){p.aP(a)
s=p.aA(a)
if(p.x){r=p.b9(a)
if(p.gah().bd(s,r))a.preventDefault()
return}q=p.aD(a)
if(p.gV().bd(s,q))a.preventDefault()}},
fE:function(a){var s,r,q,p=this
p.aP(a)
s=p.aA(a)
if(p.x){r=p.b9(a)
if(p.gah().bc(s,r))a.preventDefault()
return}q=p.aD(a)
if(p.gV().bc(s,q))a.preventDefault()},
fj:function(a){var s,r,q,p=this
if(!p.bP(a)){p.aP(a)
s=p.aA(a)
if(p.x){r=p.b9(a)
if(p.gah().bc(s,r))a.preventDefault()
return}q=p.aD(a)
if(p.gV().bc(s,q))a.preventDefault()}},
fI:function(a){var s,r,q=this
q.aP(a)
s=new V.V(C.t.ghs(a),C.t.ght(a)).I(0,q.Q)
if(q.x){if(q.gah().hP(s))a.preventDefault()
return}r=q.aD(a)
if(q.gV().hQ(s,r))a.preventDefault()},
fK:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aA(q.y)
r=q.aD(q.y)
q.gah().fA(s,r,p)}},
h_:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bW(a)
s=r.bS(a)
if(r.gao().hO(s))a.preventDefault()},
fW:function(a){var s
this.bW(a)
s=this.bS(a)
if(this.gao().hM(s))a.preventDefault()},
fY:function(a){var s
this.bW(a)
s=this.bS(a)
if(this.gao().hN(s))a.preventDefault()}}
D.c6.prototype={
ay:function(a){var s=this.r
return s==null?null:s.q(a)},
ej:function(){return this.ay(null)},
$ich:1}
D.ci.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
gdN:function(){var s=this.z
return s==null?this.z=D.y():s},
ay:function(a){var s=this.y
return s==null?null:s.q(a)},
d4:function(a){var s=this.z
return s==null?null:s.q(a)},
fz:function(){return this.d4(null)},
fM:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.eL(a[r]))return!1
return!0},
f5:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gd3(),q=this.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.by()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ay(new D.ar())},
fQ:function(a,b){var s,r,q,p
for(s=b.gM(b),r=this.gd3(),q=this.e;s.t();){p=s.gD(s)
C.a.K(q,p)
p.gm().K(0,r)}this.ay(new D.as())},
eL:function(a){var s=C.a.J(this.f,a)
return s}}
V.D.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
V.a7.prototype={
ia:function(){var s=this
return new V.a7(Math.floor(s.a*255)/255,Math.floor(s.b*255)/255,Math.floor(s.c*255)/255,Math.floor(s.d*255)/255)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a7))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.ht.prototype={}
V.cq.prototype={
a4:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cq))return!1
s=b.a
$.r().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bV([o.a,o.d,o.r],3,0),m=V.bV([o.b,o.e,o.x],3,0),l=V.bV([o.c,o.f,o.y],3,0),k=n.length
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
V.am.prototype={
a4:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cl:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.r().toString
if(Math.abs(b3-0)<1e-9)return V.a8()
s=1/b3
r=-l
q=-a2
return V.au((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
I:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.au(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bx:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.z(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bg:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a_(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.am))return!1
s=b.a
$.r().toString
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
w:function(a){var s,r,q,p,o,n=this,m=V.bV([n.a,n.e,n.y,n.cx],3,0),l=V.bV([n.b,n.f,n.z,n.cy],3,0),k=V.bV([n.c,n.r,n.Q,n.db],3,0),j=V.bV([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
u:function(){return this.w("")}}
V.O.prototype={
a5:function(a){return new V.V(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"},
u:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"}}
V.a_.prototype={
b3:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a_))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"},
u:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
V.aL.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aL))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.ee.prototype={
gav:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ee))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.V.prototype={
cn:function(a){return Math.sqrt(this.a_(this))},
a_:function(a){return this.a*a.a+this.b*a.b},
I:function(a,b){return new V.V(this.a*b,this.b*b)},
ac:function(a,b){var s
$.r().toString
if(Math.abs(b-0)<1e-9){s=$.bn
return s==null?$.bn=new V.V(0,0):s}return new V.V(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"}}
V.z.prototype={
cn:function(a){return Math.sqrt(this.a_(this))},
a_:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
co:function(a,b){return new V.z(V.kr(this.a,a.a,b),V.kr(this.b,a.b,b),V.kr(this.c,a.c,b))},
G:function(){var s=this,r=Math.sqrt(s.a_(s))
if(r===1)return s
return s.ac(0,r)},
ba:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.z(s*r-q*p,q*o-n*r,n*p-s*o)},
X:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
b_:function(a){return new V.z(-this.a,-this.b,-this.c)},
ac:function(a,b){$.r().toString
if(Math.abs(b-0)<1e-9)return V.eR()
return new V.z(this.a/b,this.b/b,this.c/b)},
dM:function(){$.r().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.z))return!1
s=b.a
$.r().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"},
u:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
U.hf.prototype={
bI:function(a){var s=V.jP(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
F:function(a){var s=this.y
return s==null?null:s.q(a)},
scD:function(a,b){},
scq:function(a){var s,r=this,q=r.b
$.r().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bI(s)}r.F(new D.p("maximumLocation",q,r.b))}},
scs:function(a){var s,r=this,q=r.c
$.r().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bI(s)}r.F(new D.p("minimumLocation",q,r.c))}},
saa:function(a,b){var s,r=this
b=r.bI(b)
s=r.d
$.r().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.F(new D.p("location",s,b))}},
scr:function(a){var s,r,q=this,p=q.e
$.r().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.F(new D.p("maximumVelocity",p,a))}},
sW:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.r().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.F(new D.p("velocity",r,a))}},
sc6:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.r().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.F(new D.p("dampening",s,a))}},
ak:function(a,b){var s,r,q,p=this,o=p.f
$.r().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.saa(0,p.d+s*b)
o=p.x
$.r().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sW(s)}}}
U.bw.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
sO:function(a,b){var s,r,q=this
if(!q.a.n(0,b)){s=q.a
q.a=b
r=q.b
if(r!=null)r.q(new D.p("matrix",s,b))}},
ax:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bw))return!1
return this.a.n(0,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.bA.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
F:function(a){var s=this.e
return s==null?null:s.q(a)},
a6:function(){return this.F(null)},
el:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaO(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.F(new D.ar())},
fO:function(a,b){var s,r
for(s=b.gM(b),r=this.gaO();s.t();)s.gD(s).gm().K(0,r)
this.F(new D.as())},
ax:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a5(o,o.length),n=H.Q(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.ax(0,b,c)
s=s==null?q:q.I(0,s)}}p.f=s==null?V.a8():s
o=p.e
if(o!=null)o.aw(0)}return p.f},
n:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bA))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(p>=q.length)return H.e(q,p)
if(!J.W(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.cB.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
F:function(a){var s=this.y
return s==null?null:s.q(a)},
se5:function(a){var s
a=V.jP(a,0,6.283185307179586)
s=this.a
$.r().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.F(new D.p("yaw",s,a))}},
sdZ:function(a,b){var s
b=V.jP(b,0,6.283185307179586)
s=this.b
$.r().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.F(new D.p("pitch",s,b))}},
se1:function(a){var s
a=V.jP(a,0,6.283185307179586)
s=this.c
$.r().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.F(new D.p("roll",s,a))}},
ax:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.se5(s.a+s.d*b.y)
s.sdZ(0,s.b+s.e*b.y)
s.se1(s.c+s.f*b.y)
s.x=V.kJ(s.c).I(0,V.kI(s.b)).I(0,V.kH(s.a))
r=s.y
if(r!=null)r.aw(0)}return s.x},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cB))return!1
s=q.a
r=b.a
$.r().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+"], ["+V.q(s.d,3,0)+", "+V.q(s.e,3,0)+", "+V.q(s.f,3,0)+"]"}}
U.cL.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.y():s},
F:function(a){var s=this.cy
return s==null?null:s.q(a)},
a6:function(){return this.F(null)},
aE:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gV().gc9().k(0,s.gbB())
a.gV().gaX().k(0,s.gbD())
a.gV().gby().k(0,s.gbF())
return!0},
bC:function(a){var s=this,r=s.c,q=s.a
if(!r.n(0,q==null?null:q.gaV(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bE:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a5(a.d)
if(s.a_(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.saa(0,-a.y.a5(r).I(0,2).ac(0,s.gav()).a*2.5+p.z)
q.sW(0)
p.Q=a.z.a5(r).I(0,2).ac(0,s.gav())
p.a6()},
bG:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a_(s)>0.0001){r.b.sW(r.Q.a*10*2.5)
r.a6()}},
ax:function(a,b,c){var s=this,r=s.ch,q=b.e
if(r<q){s.ch=q
r=s.b
r.ak(0,b.y)
s.cx=V.kJ(r.d)}return s.cx},
$iZ:1}
U.cM.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.y():s},
F:function(a){var s=this.fx
return s==null?null:s.q(a)},
a6:function(){return this.F(null)},
aE:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gV().gc9().k(0,q.gbB())
a.gV().gaX().k(0,q.gbD())
a.gV().gby().k(0,q.gbF())
s=a.gah()
r=s.f
s=r==null?s.f=D.y():r
s.k(0,q.geT())
s=a.gah()
r=s.d
s=r==null?s.d=D.y():r
s.k(0,q.geV())
s=a.gao()
s.gcJ(s).k(0,q.geq())
a.gao().gaX().k(0,q.geo())
s=a.gao()
s.gdv(s).k(0,q.gem())
return!0},
aM:function(a){return new V.V(a.a,a.b)},
bC:function(a){var s=this
t.Z.a(a)
if(!s.d.n(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bE:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a5(a.d)
if(s.a_(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.a5(r).I(0,2).ac(0,s.gav()))
p=n.c
p.saa(0,-q.a*2.5+n.cy)
o=n.b
o.saa(0,-q.b*2.5+n.db)
o.sW(0)
p.sW(0)
n.dx=n.aM(a.z.a5(r).I(0,2).ac(0,s.gav()))
n.a6()},
bG:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a_(s)>0.0001){r.c.sW(-r.dx.a*10*2.5)
r.b.sW(-r.dx.b*10*2.5)
r.a6()}},
eU:function(a){var s=this
if(t.u.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eW:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.n(0,a.x.b))return
s=a.c
r=a.d
q=n.aM(a.y.a5(r).I(0,2).ac(0,s.gav()))
p=n.c
p.saa(0,-q.a*2.5+n.cy)
o=n.b
o.saa(0,-q.b*2.5+n.db)
o.sW(0)
p.sW(0)
n.dx=n.aM(a.z.a5(r).I(0,2).ac(0,s.gav()))
n.a6()},
er:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ep:function(a){var s,r,q,p,o,n=this
t.Q.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a5(a.d)
if(s.a_(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.a5(r).I(0,2).ac(0,s.gav()))
p=n.c
p.saa(0,-q.a*2.5+n.cy)
o=n.b
o.saa(0,-q.b*2.5+n.db)
o.sW(0)
p.sW(0)
n.dx=n.aM(a.z.a5(r).I(0,2).ac(0,s.gav()))
n.a6()},
en:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a_(s)>0.0001){r.c.sW(-r.dx.a*10*2.5)
r.b.sW(-r.dx.b*10*2.5)
r.a6()}},
ax:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.ak(0,s)
p=r.b
p.ak(0,s)
r.fr=V.kH(p.d).I(0,V.kI(q.d))}return r.fr},
$iZ:1}
U.cN.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
F:function(a){var s=this.r
return s==null?null:s.q(a)},
aE:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gV()
r=s.e
s=r==null?s.e=D.y():r
r=this.gf2()
s.k(0,r)
s=a.gah()
q=s.e;(q==null?s.e=D.y():q).k(0,r)
return!0},
f3:function(a){var s=this,r=s.b,q=s.a
if(!r.n(0,q==null?null:q.gaV(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.F(new D.p("zoom",r,q))}},
ax:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.mn(s,s,s)}return r.f},
$iZ:1}
M.c3.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
P:function(a){var s=this.r
return s==null?null:s.q(a)},
b5:function(){return this.P(null)},
fS:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gT(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q].gm()
o=p.a;(o==null?p.a=[]:o).push(r)}this.P(new D.ar())},
fU:function(a,b){var s,r
for(s=b.gM(b),r=this.gT();s.t();)s.gD(s).gm().K(0,r)
this.P(new D.as())},
a8:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a5(s,s.length),r=H.Q(s).c;s.t();)r.a(s.d).a8(a)
q.f=!1},
$ibh:1}
M.c4.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
P:function(a){var s=this.r
return s==null?null:s.q(a)},
b5:function(){return this.P(null)},
saQ:function(a){var s,r,q=this
if(a==null)a=new X.hC()
s=q.b
if(s!==a){if(s!=null)s.gm().K(0,q.gT())
r=q.b
q.b=a
a.gm().k(0,q.gT())
q.P(new D.p("camera",r,q.b))}},
saY:function(a,b){var s,r,q=this
if(b==null)b=X.jX(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gm().K(0,q.gT())
r=q.c
q.c=b
b.gm().k(0,q.gT())
q.P(new D.p("target",r,q.c))}},
saZ:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().K(0,r.gT())
s=r.d
r.d=a
if(a!=null)a.gm().k(0,r.gT())
r.P(new D.p("technique",s,r.d))}},
a8:function(a){var s,r=this
a.cw(r.d)
s=r.c
if(s!=null)s.L(a)
s=r.b
if(s!=null)s.L(a)
s=r.e
s.ak(0,a)
s.a8(a)
s=r.b
if(s!=null)s.ab(a)
a.cv()},
$ibh:1}
M.cb.prototype={
P:function(a){var s=this.y
return s==null?null:s.q(a)},
b5:function(){return this.P(null)},
fd:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gT(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.by()
n=o.a;(n==null?o.a=[]:n).push(r)}this.P(new D.ar())},
ff:function(a,b){var s,r
for(s=b.gM(b),r=this.gT();s.t();)s.gD(s).gm().K(0,r)
this.P(new D.as())},
saQ:function(a){var s,r,q=this
if(a==null)a=X.kL(null)
s=q.b
if(s!==a){if(s!=null)s.gm().K(0,q.gT())
r=q.b
q.b=a
a.gm().k(0,q.gT())
q.P(new D.p("camera",r,q.b))}},
saY:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().K(0,r.gT())
s=r.c
r.c=b
b.gm().k(0,r.gT())
r.P(new D.p("target",s,r.c))}},
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
a8:function(a){var s,r,q,p=this
a.cw(p.d)
s=p.c
if(s!=null)s.L(a)
s=p.b
if(s!=null)s.L(a)
for(s=p.e.a,r=new J.a5(s,s.length),q=H.Q(r).c;r.t();)q.a(r.d).ak(0,a)
for(s=new J.a5(s,s.length),r=H.Q(s).c;s.t();)r.a(s.d).a8(a)
if(p.b!=null){a.cy.aH()
a.db.aH()}s=p.c
if(s!=null)s.ab(a)
a.cv()},
$ibh:1}
A.h5.prototype={}
A.h6.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hu:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
c8:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ad.prototype={
gap:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.ad))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.cn.prototype={
eg:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.bk(""),d0=c8.fr
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
A.nJ(c8,c9)
A.nL(c8,c9)
A.nK(c8,c9)
A.nN(c8,c9)
A.nO(c8,c9)
A.nM(c8,c9)
A.nP(c8,c9)
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
c3.ck(0,s.charCodeAt(0)==0?s:s,A.nI(c8))
c3.y=c3.ga7(c3).h(0,"posAttr")
c3.Q=c3.ga7(c3).h(0,"normAttr")
c3.z=c3.ga7(c3).h(0,"binmAttr")
c3.ch=c3.ga7(c3).h(0,"txt2DAttr")
c3.cx=c3.ga7(c3).h(0,"txtCubeAttr")
c3.cy=c3.ga7(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gv().C(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gv().C(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gv().C(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gv().C(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gv().C(0,"viewMat"))
if(c8.x1)c3.go=t.V.a(c3.gv().C(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gv().C(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gv().C(0,"colorMat"))
c3.k3=[]
s=c8.aT
if(s>0){c3.k2=t.v.a(c3.gv().C(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.d(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.d(c6+q+c7))
r.push(d0.a(l))}}d0=c8.a
if(d0.a)c3.k4=t.g.a(c3.gv().C(0,"emissionClr"))
if(d0.c)c3.r2=t.a.a(c3.gv().C(0,"emissionTxt"))
d0=c8.b
if(d0.a)c3.rx=t.g.a(c3.gv().C(0,"ambientClr"))
if(d0.c)c3.x1=t.a.a(c3.gv().C(0,"ambientTxt"))
d0=c8.c
if(d0.a)c3.x2=t.g.a(c3.gv().C(0,"diffuseClr"))
if(d0.c)c3.y2=t.a.a(c3.gv().C(0,"diffuseTxt"))
d0=c8.d
if(d0.a)c3.aT=t.g.a(c3.gv().C(0,"invDiffuseClr"))
if(d0.c)c3.br=t.a.a(c3.gv().C(0,"invDiffuseTxt"))
d0=c8.e
s=d0.a
if(!s)r=d0.c
else r=!0
if(r){c3.dA=t.n.a(c3.gv().C(0,"shininess"))
if(s)c3.dw=t.g.a(c3.gv().C(0,"specularClr"))
if(d0.c)c3.dz=t.a.a(c3.gv().C(0,"specularTxt"))}if(c8.f.c)c3.dB=t.a.a(c3.gv().C(0,"bumpTxt"))
if(c8.db){d0=t.a
c3.dC=d0.a(c3.gv().C(0,"envSampler"))
s=c8.r
if(s.a)c3.dD=t.g.a(c3.gv().C(0,"reflectClr"))
if(s.c)c3.dE=d0.a(c3.gv().C(0,"reflectTxt"))
s=c8.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c3.dF=t.n.a(c3.gv().C(0,"refraction"))
if(r)c3.dG=t.g.a(c3.gv().C(0,"refractClr"))
if(s.c)c3.dH=d0.a(c3.gv().C(0,"refractTxt"))}}d0=c8.y
if(d0.a)c3.dI=t.n.a(c3.gv().C(0,"alpha"))
if(d0.c)c3.dJ=t.a.a(c3.gv().C(0,"alphaTxt"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.cb=P.N(r,t.W)
c3.cc=P.N(r,t.J)
for(r=t.v,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
i=j.a
h="barLight"+i
g=[]
for(o=j.b,f=(i&4)!==0,n=0;n<o;++n){m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].startPnt"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].endPnt"
d=m.h(0,e)
if(d==null)H.f(P.d(c6+e+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].color"
c=m.h(0,e)
if(c==null)H.f(P.d(c6+e+c7))
q.a(c)
if(f){m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].att0"
b=m.h(0,e)
if(b==null)H.f(P.d(c6+e+c7))
p.a(b)
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].att1"
a=m.h(0,e)
if(a==null)H.f(P.d(c6+e+c7))
p.a(a)
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].att2"
a0=m.h(0,e)
if(a0==null)H.f(P.d(c6+e+c7))
p.a(a0)
a1=a0
a2=a
a3=b}else{a1=c4
a2=a1
a3=a2}g.push(new A.eE(l,d,c,a3,a2,a1))}c3.cc.l(0,i,g)
o=c3.cb
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.l(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.cd=P.N(r,t.W)
c3.ce=P.N(r,t.L)
for(r=t.v,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
i=j.a
h="dirLight"+i
g=[]
for(o=j.b,f=(i&1)!==0,n=0;n<o;++n){if(f){m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].objUp"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].objRight"
d=m.h(0,e)
if(d==null)H.f(P.d(c6+e+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].objDir"
c=m.h(0,e)
if(c==null)H.f(P.d(c6+e+c7))
q.a(c)
a4=c
a5=d
a6=l}else{a4=c4
a5=a4
a6=a5}m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].viewDir"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"s["+n+"].color"
d=m.h(0,e)
if(d==null)H.f(P.d(c6+e+c7))
q.a(d)
if(f){m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"sTexture2D"+n
c=m.h(0,e)
if(c==null)H.f(P.d(c6+e+c7))
p.a(c)
a7=c}else a7=c4
g.push(new A.eF(a6,a5,a4,l,d,a7))}c3.ce.l(0,i,g)
o=c3.cd
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.l(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.cf=P.N(r,t.W)
c3.cg=P.N(r,t.U)
for(r=t.v,q=t.g,p=t.V,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
i=j.a
h="pointLight"+i
g=[]
for(a8=j.b,a9=(i&4)!==0,b0=(i&2)!==0,b1=(i&1)!==0,b2=(i&3)!==0,n=0;n<a8;++n){m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"s["+n+"].point"
l=m.h(0,b3)
if(l==null)H.f(P.d(c6+b3+c7))
q.a(l)
m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"s["+n+"].viewPnt"
d=m.h(0,b3)
if(d==null)H.f(P.d(c6+b3+c7))
q.a(d)
m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"s["+n+"].color"
c=m.h(0,b3)
if(c==null)H.f(P.d(c6+b3+c7))
q.a(c)
if(b2){m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"s["+n+"].invViewRotMat"
b=m.h(0,b3)
if(b==null)H.f(P.d(c6+b3+c7))
p.a(b)
b4=b}else b4=c4
if(b1){m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"sTextureCube"+n
b=m.h(0,b3)
if(b==null)H.f(P.d(c6+b3+c7))
o.a(b)
a7=b}else a7=c4
if(b0){m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"sShadowCube"+n
b=m.h(0,b3)
if(b==null)H.f(P.d(c6+b3+c7))
o.a(b)
m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"s["+n+"].shadowAdj"
a=m.h(0,b3)
if(a==null)H.f(P.d(c6+b3+c7))
f.a(a)
b5=b
b6=a}else{b5=c4
b6=b5}if(a9){m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"s["+n+"].att0"
b=m.h(0,b3)
if(b==null)H.f(P.d(c6+b3+c7))
e.a(b)
m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"s["+n+"].att1"
a=m.h(0,b3)
if(a==null)H.f(P.d(c6+b3+c7))
e.a(a)
m=c3.r
if(m==null)H.f(P.d(c5))
b3=h+"s["+n+"].att2"
a0=m.h(0,b3)
if(a0==null)H.f(P.d(c6+b3+c7))
e.a(a0)
a1=a0
a2=a
a3=b}else{a1=c4
a2=a1
a3=a2}g.push(new A.eI(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.cg.l(0,i,g)
a8=c3.cf
m=c3.r
if(m==null)H.f(P.d(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.d(c6+a9+c7))
a8.l(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.ci=P.N(s,t.W)
c3.cj=P.N(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.o)(c8),++k){j=c8[k]
i=j.a
h="spotLight"+i
g=[]
for(f=j.b,e=(i&2)!==0,a8=(i&1)!==0,a9=(i&4)!==0,b0=(i&8)!==0,b1=(i&3)!==0,n=0;n<f;++n){m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].objPnt"
l=m.h(0,b2)
if(l==null)H.f(P.d(c6+b2+c7))
r.a(l)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].objDir"
d=m.h(0,b2)
if(d==null)H.f(P.d(c6+b2+c7))
r.a(d)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].viewPnt"
c=m.h(0,b2)
if(c==null)H.f(P.d(c6+b2+c7))
r.a(c)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].color"
b=m.h(0,b2)
if(b==null)H.f(P.d(c6+b2+c7))
r.a(b)
if(b1){m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].objUp"
a=m.h(0,b2)
if(a==null)H.f(P.d(c6+b2+c7))
r.a(a)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].objRight"
a0=m.h(0,b2)
if(a0==null)H.f(P.d(c6+b2+c7))
r.a(a0)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].tuScalar"
b7=m.h(0,b2)
if(b7==null)H.f(P.d(c6+b2+c7))
q.a(b7)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].tvScalar"
b8=m.h(0,b2)
if(b8==null)H.f(P.d(c6+b2+c7))
q.a(b8)
b9=b8
c0=b7
a5=a0
a6=a}else{b9=c4
c0=b9
a5=c0
a6=a5}if(e){m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].shadowAdj"
a=m.h(0,b2)
if(a==null)H.f(P.d(c6+b2+c7))
p.a(a)
b6=a}else b6=c4
if(b0){m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].cutoff"
a=m.h(0,b2)
if(a==null)H.f(P.d(c6+b2+c7))
q.a(a)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].coneAngle"
a0=m.h(0,b2)
if(a0==null)H.f(P.d(c6+b2+c7))
q.a(a0)
c1=a0
c2=a}else{c1=c4
c2=c1}if(a9){m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].att0"
a=m.h(0,b2)
if(a==null)H.f(P.d(c6+b2+c7))
q.a(a)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].att1"
a0=m.h(0,b2)
if(a0==null)H.f(P.d(c6+b2+c7))
q.a(a0)
m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"s["+n+"].att2"
b7=m.h(0,b2)
if(b7==null)H.f(P.d(c6+b2+c7))
q.a(b7)
a1=b7
a2=a0
a3=a}else{a1=c4
a2=a1
a3=a2}if(a8){m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"sTexture2D"+n
a=m.h(0,b2)
if(a==null)H.f(P.d(c6+b2+c7))
o.a(a)
a7=a}else a7=c4
if(e){m=c3.r
if(m==null)H.f(P.d(c5))
b2=h+"sShadow2D"+n
a=m.h(0,b2)
if(a==null)H.f(P.d(c6+b2+c7))
o.a(a)
b5=a}else b5=c4
g.push(new A.eL(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.cj.l(0,i,g)
f=c3.ci
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
f.l(0,i,s.a(l))}}}},
ae:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.cG(b)}}
A.b1.prototype={
i:function(a){return"barLight"+this.a}}
A.b5.prototype={
i:function(a){return"dirLight"+this.a}}
A.bg.prototype={
i:function(a){return"pointLight"+this.a}}
A.bj.prototype={
i:function(a){return"spotLight"+this.a}}
A.hP.prototype={
i:function(a){return this.bq}}
A.eE.prototype={}
A.eF.prototype={}
A.eI.prototype={}
A.eL.prototype={}
A.bi.prototype={
ck:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cZ(b,35633)
r=n.cZ(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaB(),s)
q.attachShader(n.gaB(),r)
q.linkProgram(n.gaB())
if(!H.lg(q.getProgramParameter(n.gaB(),35714))){o=q.getProgramInfoLog(n.gaB())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.d("Failed to link shader: "+o))}n.h6()
n.h8()},
ga7:function(a){var s=this.f
if(s==null)throw H.b(P.d("Must initialize the shader prior to getting the attributes."))
return s},
gv:function(){var s=this.r
if(s==null)throw H.b(P.d(u.C))
return s},
gaB:function(){var s=this.e
if(s==null)throw H.b(P.d(u.F))
return s},
L:function(a){a.a.useProgram(this.e)
this.ga7(this).hu()},
cZ:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.lg(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.b(P.d('Error compiling shader "'+H.v(q)+'": '+s))}return q},
h6:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.fW(l.getProgramParameter(o.gaB(),35721))
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
m.push(new A.h5(l,q,p))}o.f=new A.h6(m)},
h8:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.fW(j.getProgramParameter(m.gaB(),35718))
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
k.push(m.hr(o,n,q,p))}m.r=new A.iN(k)},
aL:function(a,b,c){var s=this.a
if(a===1)return new A.cK(s,b,c)
else return A.k7(s,this.e,b,a,c)},
eN:function(a,b,c){var s=this.a
if(a===1)return new A.eJ(s,b,c)
else return A.k7(s,this.e,b,a,c)},
eO:function(a,b,c){var s=this.a
if(a===1)return new A.eK(s,b,c)
else return A.k7(s,this.e,b,a,c)},
bn:function(a,b){return new P.f8(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hr:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aL(b,c,d)
case 5121:return s.aL(b,c,d)
case 5122:return s.aL(b,c,d)
case 5123:return s.aL(b,c,d)
case 5124:return s.aL(b,c,d)
case 5125:return s.aL(b,c,d)
case 5126:return new A.eB(s.a,c,d)
case 35664:return new A.iJ(s.a,c,d)
case 35665:return new A.eC(s.a,c,d)
case 35666:return new A.eD(s.a,c,d)
case 35667:return new A.iK(s.a,c,d)
case 35668:return new A.iL(s.a,c,d)
case 35669:return new A.iM(s.a,c,d)
case 35674:return new A.iO(s.a,c,d)
case 35675:return new A.eG(s.a,c,d)
case 35676:return new A.eH(s.a,c,d)
case 35678:return s.eN(b,c,d)
case 35680:return s.eO(b,c,d)
case 35670:throw H.b(s.bn("BOOL",c))
case 35671:throw H.b(s.bn("BOOL_VEC2",c))
case 35672:throw H.b(s.bn("BOOL_VEC3",c))
case 35673:throw H.b(s.bn("BOOL_VEC4",c))
default:throw H.b(P.d("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.cE.prototype={}
A.cF.prototype={}
A.iH.prototype={}
A.iN.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
C:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.d("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cK.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iK.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iL.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iM.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iI.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.eB.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iJ.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eC.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eD.prototype={
e8:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.iO.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eG.prototype={
a9:function(a){var s=new Float32Array(H.df(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eH.prototype={
a9:function(a){var s=new Float32Array(H.df(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eJ.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.eK.prototype={
cG:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.ju.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.co(q.b,b).co(q.d.co(q.c,b),c)
q=new V.a_(p.a,p.b,p.c)
if(!J.W(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a3()}a.sbe(p.G())
q=1-b
s=1-c
s=new V.aL(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.W(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a3()}},
$S:34}
F.ak.prototype={
aJ:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.b(P.d("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.b(P.d("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.ga0().b.push(s)
s.b=b
b.ga0().c.push(s)
s.c=c
c.ga0().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga0().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a3()}},
eF:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.eR()
if(n!=null)q=q.X(0,n)
if(s!=null)q=q.X(0,s)
if(r!=null)q=q.X(0,r)
if(q.dM())return p
return q.G()},
eH:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b3(0,n)
q=new V.z(o.a,o.b,o.c).G()
o=r.b3(0,n)
return q.ba(new V.z(o.a,o.b,o.c).G()).G()},
c3:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eF()
if(s==null){s=q.eH()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a3()}return!0},
eE:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.eR()
if(n!=null)q=q.X(0,n)
if(s!=null)q=q.X(0,s)
if(r!=null)q=q.X(0,r)
if(q.dM())return p
return q.G()},
eG:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.r().toString
if(Math.abs(p-0)<1e-9){j=b.b3(0,e)
o=new V.z(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.b_(0)}else{n=(j-s.b)/p
j=b.b3(0,e)
j=new V.a_(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).b3(0,h)
o=new V.z(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b_(0)}m=l.d
if(m!=null){m=m.G()
o=m.ba(o).G().ba(m).G()}return o},
c1:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eE()
if(s==null){s=q.eG()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a3()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
w:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gat(p)
p=a+C.d.aj(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gat(o)
p=p+C.d.aj(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gat(o)
s=p+C.d.aj(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.u()
return s+((p==null?"-":p)+"}")},
u:function(){return this.w("")}}
F.hG.prototype={
ef:function(a,b){var s=this,r=a.a
if(r==null)throw H.b(P.d("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.b(P.d("May not create a line with vertices attached to different shapes."))
s.a=a
a.gau(a).b.push(s)
s.b=b
b.gau(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gau(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a3()}},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
w:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gat(s)
s=a+C.d.aj(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gat(r)
return s+C.d.aj(C.b.i(r==null?-1:r),0)},
u:function(){return this.w("")}}
F.i6.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
w:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gat(s)
return a+C.d.aj(C.b.i(s),0)},
u:function(){return this.w("")}}
F.id.prototype={
ga1:function(){var s=this.a
return s==null?this.a=new F.t(this,[]):s},
gbu:function(a){var s=this.b
return s==null?this.b=new F.bL(this,[]):s},
gau:function(a){var s=this.c
return s==null?this.c=new F.cD(this,[]):s},
ga0:function(){var s=this.d
return s==null?this.d=new F.cC(this,[]):s},
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
hD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.ga1().U()
s=d.ga1().c.length
for(b=a.ga1().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.t(d,[])
o.k(0,p.hq())}d.ga1().U()
for(b=a.gbu(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.t(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.t(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bL(d,[]):m).a
m=o.a;(m==null?o.a=new F.t(o,[]):m).k(0,j)
o=new F.i6()
if(j.a==null)H.f(P.d("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.j_([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bL(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.q(c)}}}for(b=a.gau(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.t(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.t(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.t(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.t(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cD(d,[]):m).a
m=o.a;(m==null?o.a=new F.t(o,[]):m).k(0,h)
m=o.a;(m==null?o.a=new F.t(o,[]):m).k(0,g)
new F.hG().ef(h,g)}for(b=a.ga0().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.t(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.t(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.t(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.t(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.t(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.t(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cC(d,[]):m).a
m=o.a;(m==null?o.a=new F.t(o,[]):m).k(0,h)
m=o.a;(m==null?o.a=new F.t(o,[]):m).k(0,g)
m=o.a;(m==null?o.a=new F.t(o,[]):m).k(0,e)
new F.ak().aJ(h,g,e)}b=d.e
if(b!=null)b.aw(0)},
aF:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.ga0().aF()||!1
if(!r.ga1().aF())s=!1
q=r.e
if(q!=null)q.aw(0)
return s},
c0:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.ga1().c.length,c=$.ac(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.b_().a)!==0)++a
if((b&$.aZ().a)!==0)++a
if((b&$.br().a)!==0)++a
if((b&$.b0().a)!==0)++a
if((b&$.dn().a)!==0)++a
if((b&$.dp().a)!==0)++a
if((b&$.bX().a)!==0)++a
if((b&$.aY().a)!==0)++a
s=a1.gcI(a1)
r=P.hI(d*s,0,!1)
e.a=0
q=P.mk(a,new F.ie(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.df(r)),35044)
c.bindBuffer(f,g)
p=new Z.b2(new Z.eT(f,b),[],q,a1)
if(h.gbu(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.bL(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.t(m,[]):l).U()}b=b.e}o.push(b==null?0:b);++n}k=Z.k9(c,34963,o)
p.b.push(new Z.ce(0,o.length,k))}if(h.gau(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.cD(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.t(m,[]):l).U()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.t(m,[]):l).U()}b=b.e}o.push(b==null?0:b);++n}k=Z.k9(c,34963,o)
p.b.push(new Z.ce(1,o.length,k))}if(h.ga0().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.cC(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.t(m,[]):l).U()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.t(m,[]):l).U()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.t(m,[]):l).U()}b=b.e}o.push(b==null?0:b);++n}k=Z.k9(c,34963,o)
p.b.push(new Z.ce(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.ga1().c.length!==0){q.push("Vertices:")
q.push(s.ga1().w(r))}if(s.gbu(s).b.length!==0){q.push("Points:")
q.push(s.gbu(s).w(r))}if(s.gau(s).b.length!==0){q.push("Lines:")
q.push(s.gau(s).w(r))}if(s.ga0().b.length!==0){q.push("Faces:")
q.push(s.ga0().w(r))}return C.a.p(q,"\n")},
a3:function(){var s=this.e
return s==null?null:s.q(null)}}
F.ie.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.hk(a),f=g.gcI(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.t(o,[]):m).c
if(n>=m.length)return H.e(m,n)
l=m[n].hA(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.e(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c_(g,f,d*4,h.d)},
$S:35}
F.cC.prototype={
hi:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.t(s,[]):o).k(0,l)
o=s.a;(o==null?s.a=new F.t(s,[]):o).k(0,q)
o=s.a;(o==null?s.a=new F.t(s,[]):o).k(0,p)
n=new F.ak()
n.aJ(l,q,p)
m.push(n)}return m},
hj:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.t(s,[]):l).k(0,k)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,j)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,h)
f=new F.ak()
f.aJ(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,k)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,h)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,g)
f=new F.ak()
f.aJ(k,h,g)
e.push(f)}else{(l==null?s.a=new F.t(s,[]):l).k(0,j)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,h)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,g)
f=new F.ak()
f.aJ(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,j)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,g)
l=s.a;(l==null?s.a=new F.t(s,[]):l).k(0,k)
f=new F.ak()
f.aJ(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gj:function(a){return this.b.length},
aF:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c3())q=!1
return q},
c2:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c1())q=!1
return q},
i:function(a){return this.u()},
w:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].w(a))
return C.a.p(p,"\n")},
u:function(){return this.w("")}}
F.cD.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
w:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.e(q,s)
r.push(q[s].w(a+(""+s+". ")))}return C.a.p(r,"\n")},
u:function(){return this.w("")}}
F.bL.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
w:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].w(a))
return C.a.p(p,"\n")},
u:function(){return this.w("")}}
F.cO.prototype={
c5:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iV(s.cx,p,m,r,q,o,n,a,l)},
hq:function(){return this.c5(null)},
gau:function(a){var s=this.c
return s==null?this.c=new F.iZ([],[]):s},
ga0:function(){var s=this.d
return s==null?this.d=new F.iW([],[],[]):s},
gat:function(a){var s=this.a
if(s!=null)s.ga1().U()
return this.e},
sbe:function(a){var s
if(!J.W(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a3()}},
hA:function(a){var s,r,q,p,o=this,n=null
if(a.n(0,$.ac())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.b_())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.n(0,$.aZ())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.n(0,$.br())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.n(0,$.b0())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.dn())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.n(0,$.dp())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.n(0,$.bX()))return[o.ch]
else if(a.n(0,$.aY())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
c3:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.eR()
p.ga0().E(0,new F.j1(o))
p.r=o.a.G()
if(r){s.a3()
o=s.e
if(o!=null)o.aw(0)}return!0},
c1:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.eR()
p.ga0().E(0,new F.j0(o))
p.x=o.a.G()
if(r){s.a3()
o=s.e
if(o!=null)o.aw(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
w:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.d.aj(C.b.i(q.e),0))
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
n.push(V.q(q.ch,3,0))
s=q.cx
s=s==null?p:s.u()
n.push(s==null?o:s)
r=C.a.p(n,", ")
return a+"{"+r+"}"},
u:function(){return this.w("")}}
F.j1.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.X(0,r)}},
$S:7}
F.j0.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.X(0,r)}},
$S:7}
F.t.prototype={
U:function(){},
k:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.d("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a3()
return!0},
bp:function(a,b,c,d,e,f){var s=F.iV(a,null,b,c,null,d,e,f,0)
this.k(0,s)
return s},
gj:function(a){return this.c.length},
aF:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c3()
return!0},
c2:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c1()
return!0},
hl:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.G()
if(!J.W(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.q(null)}}}}}return!0},
i:function(a){return this.u()},
w:function(a){var s,r,q,p
this.U()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].w(a))
return C.a.p(s,"\n")},
u:function(){return this.w("")}}
F.iW.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
E:function(a,b){var s=this
C.a.E(s.b,b)
C.a.E(s.c,new F.iX(s,b))
C.a.E(s.d,new F.iY(s,b))},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].w(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].w(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
F.iX.prototype={
$1:function(a){if(!J.W(a.a,this.a))this.b.$1(a)},
$S:7}
F.iY.prototype={
$1:function(a){var s=this.a
if(!J.W(a.a,s)&&!J.W(a.b,s))this.b.$1(a)},
$S:7}
F.iZ.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].w(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
F.j_.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
O.dU.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.y():s},
N:function(a){var s=this.fr
return s==null?null:s.q(a)},
b6:function(){return this.N(null)},
d8:function(a){this.a=null
this.N(a)},
h4:function(){return this.d8(null)},
f7:function(a,b){return this.N(new D.ar())},
f9:function(a,b){return this.N(new D.as())},
gcp:function(){var s=this,r=s.dx
if(r==null){r=new D.ci([],[],[],[],[])
r.cF(r.gf4(),r.gfL(),r.gfP())
r.gm().k(0,s.gd7())
r.gdN().k(0,s.gaz())
s.dx=r}return r},
gbZ:function(){var s=this.r
return s==null?this.r=O.dV(this,"ambient"):s},
gc7:function(){var s=this.x
return s==null?this.x=O.dV(this,"diffuse"):s},
gbz:function(){var s=this.z
return s==null?this.z=new O.hS(new V.D(0,0,0),this,"specular",new A.ad(!1,!1,!1)):s},
gdn:function(){var s=this.Q
return s==null?this.Q=new O.hO(this,"bump",new A.ad(!1,!1,!1)):s},
cX:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.S(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gar()
o=a1.h(0,q.gar())
a1.l(0,p,o==null?1:o)}n=[]
a1.E(0,new O.hT(b,n))
C.a.b2(n,new O.hU())
m=new H.S(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=[]
m.E(0,new O.hV(b,l))
C.a.b2(l,new O.hW())
k=new H.S(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gar()
o=k.h(0,q.gar())
k.l(0,p,o==null?1:o)}j=[]
k.E(0,new O.hX(b,j))
C.a.b2(j,new O.hY())
i=new H.S(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.o)(a0),++r){q=a0[r]
s=q.gar()
p=i.h(0,q.gar())
i.l(0,s,p==null?1:p)}h=[]
i.E(0,new O.hZ(b,h))
C.a.b2(h,new O.i_())
a0=C.b.a2(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hQ(new V.a7(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.dV(b,"emission"):a2).c
s=b.gbZ().c
p=b.gc7().c
o=b.y
o=(o==null?b.y=O.dV(b,"invDiffuse"):o).c
g=b.gbz().c
f=b.gdn().c
e=b.cx
e=(e==null?b.cx=O.dV(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hR(new V.D(0,0,0),b,"refract",new A.ad(!1,!1,!1)):d).c
c=b.db
return A.mm(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hN(b,"alpha",new A.ad(!1,!1,!1)):c).c,n,l,j,h)},
ad:function(a,b){if(b!=null)if(!C.a.J(a,b)){b.a=a.length
a.push(b)}},
ak:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aD(m==null?[]:m)
s=H.Q(m).c
for(;m.t();){r=s.a(m.d)
q=$.iU
if(q==null)q=$.iU=new V.z(0,0,1)
r.c=q
p=$.iT
r.d=p==null?$.iT=new V.z(0,1,0):p
p=$.iS
r.e=p==null?$.iS=new V.z(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bx(q).G()
r.d=n.bx(r.d).G()
r.e=n.bx(r.e).G()}}},
cz:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null){s=a6.cX()
r=s.bq
a8=t.d1.a(a9.fr.h(0,r))
if(a8==null){q=a9.a
p=t.S
o=t.W
a8=new A.cn(s,[],P.N(p,o),P.N(p,t.J),P.N(p,o),P.N(p,t.L),P.N(p,o),P.N(p,t.U),P.N(p,o),P.N(p,t.R),q,r)
a8.eg(s,q)
a9.bY(a8)}a8=a6.a=a8
b0.e=null}n=a8.x
m=n.br
s=b0.e
if(!(s instanceof Z.b2))s=b0.e=null
if(s==null||!s.d.n(0,m)){s=n.k4
if(s){r=b0.d
if(r!=null)r.aF()}r=n.r1
if(r){q=b0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.ga0().c2()
q.ga1().c2()
q=q.e
if(q!=null)q.aw(0)}}q=n.rx
if(q){p=b0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga1().hl()
p=p.e
if(p!=null)p.aw(0)}}p=b0.d
l=p==null?a7:p.c0(new Z.cP(a9.a),m)
if(l==null)return
p=l.as($.ac())
if(p!=null){o=a8.y
o=o==null?a7:o.c
p.e=o==null?0:o}if(s){s=l.as($.b_())
if(s!=null){p=a8.Q
p=p==null?a7:p.c
s.e=p==null?1:p}}if(r){s=l.as($.aZ())
if(s!=null){r=a8.z
r=r==null?a7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.as($.br())
if(s!=null){r=a8.ch
r=r==null?a7:r.c
s.e=r==null?3:r}}if(q){s=l.as($.b0())
if(s!=null){r=a8.cx
r=r==null?a7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.as($.aY())
if(s!=null){r=a8.cy
r=r==null?a7:r.c
s.e=r==null?5:r}}b0.e=l}k=[]
a8.L(a9)
if(n.fr){s=a9.dx
s=s.gO(s)
r=a8.db
if(r!=null)r.a9(s.a4(0,!0))}if(n.fx){s=a9.cx
if(s==null){s=a9.db
r=a9.dx
r=a9.cx=s.gO(s).I(0,r.gO(r))
s=r}r=a8.dx
if(r!=null)r.a9(s.a4(0,!0))}s=a9.ge_()
r=a8.fr
if(r!=null)r.a9(s.a4(0,!0))
if(n.go){s=a9.db
s=s.gO(s)
r=a8.dy
if(r!=null)r.a9(s.a4(0,!0))}if(n.x1){s=$.kF
if(s==null){s=new V.cq(1,0,0,0,1,0,0,0,1)
$.kF=s}r=a8.go
if(r!=null)r.a9(s.a4(0,!0))}if(n.x2){s=V.a8()
r=a8.id
if(r!=null)r.a9(s.a4(0,!0))}if(n.y1){s=V.a8()
r=a8.k1
if(r!=null)r.a9(s.a4(0,!0))}if(n.aT>0){s=a6.e.a
j=s.length
r=a8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.e(s,i)
r=s[i]
q=a8.k3
if(i>=q.length)return H.e(q,i)
q=q[i]
h=new Float32Array(H.df(r.a4(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a6.f
r=r==null?a7:r.f
if(r==null)r=new V.D(0,0,0)
q=a8.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.f
a6.ad(k,s==null?a7:s.e)
s=a6.f
s=s==null?a7:s.e
a8.ae(a8.r2,s)}if(n.k1){s=n.b
if(s.a){r=a6.r
r=r==null?a7:r.f
if(r==null)r=new V.D(0,0,0)
q=a8.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.r
a6.ad(k,s==null?a7:s.e)
s=a6.r
s=s==null?a7:s.e
a8.ae(a8.x1,s)}s=n.c
if(s.a){r=a6.x
r=r==null?a7:r.f
if(r==null)r=new V.D(0,0,0)
q=a8.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.x
a6.ad(k,s==null?a7:s.e)
s=a6.x
s=s==null?a7:s.e
a8.ae(a8.y2,s)}s=n.d
if(s.a){r=a6.y
r=r==null?a7:r.f
if(r==null)r=new V.D(0,0,0)
q=a8.aT
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.y
a6.ad(k,s==null?a7:s.e)
s=a6.y
s=s==null?a7:s.e
a8.ae(a8.br,s)}s=n.e
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.z
q=q==null?a7:q.ch
if(q==null)q=100
p=a8.dA
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.z
r=r==null?a7:r.f
if(r==null)r=new V.D(1,1,1)
q=a8.dw
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.z
a6.ad(k,s==null?a7:s.e)
s=a6.z
s=s==null?a7:s.e
a8.ae(a8.dz,s)}s=n.z
if(s.length>0){g=new H.S(t.y)
r=a6.dx
r=r==null?a7:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gar()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
p=a8.cc.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.gig()
o=$.av
p=p.bg(o==null?$.av=new V.a_(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gil()
o=$.av
p=p.bg(o==null?$.av=new V.a_(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gdu()){p=e.gdi()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdj()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdk()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a8.cb.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=a9.db
a=r.gO(r)
a0=new H.S(t.y)
r=a6.dx
r=r==null?a7:r.f
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
c=a0.h(0,0)
if(c==null)c=0
a0.l(0,0,c+1)
p=a8.ce.h(0,0)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=a.bx(e.c).G()
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.b
o=b.f
o.a.uniform3f(o.d,p.a,p.b,p.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=a8.cd.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=a9.db
a=r.gO(r)
a1=new H.S(t.y)
r=a6.dx
r=r==null?a7:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gar()
c=a1.h(0,d)
if(c==null)c=0
a1.l(0,d,c+1)
p=a8.cg.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
a2=a.I(0,e.gO(e))
p=e.gO(e)
o=$.av
p=p.bg(o==null?$.av=new V.a_(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.av
p=a2.bg(p==null?$.av=new V.a_(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaI()
p=a2.cl(0)
o=b.d
if(o!=null){h=new Float32Array(H.df(new V.cq(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).a4(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gaI()
p=e.gaI()
if(!C.a.J(k,p)){p.a=k.length
k.push(p)}p=e.gaI()
o=p.gbb(p)
if(o){o=b.f
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gb1()
p=e.ge9()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb1()
if(!C.a.J(k,p)){p.a=k.length
k.push(p)}p=e.gb1()
o=p.gbb(p)
if(o){o=b.r
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.gdu()){p=e.gdi()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdj()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdk()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a8.cf.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=a9.db
a=r.gO(r)
a5=new H.S(t.y)
r=a6.dx
r=r==null?a7:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gar()
c=a5.h(0,d)
if(c==null)c=0
a5.l(0,d,c+1)
p=a8.cj.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ghR(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gij(e).G()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bg(e.ghR(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaI()
p=e.gby()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gcA(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.giv()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.giw()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaI()
p=e.gaI()
if(!C.a.J(k,p)){p.a=k.length
k.push(p)}p=e.gaI()
o=p.gbb(p)
if(o){o=b.dx
if(o!=null){a3=p.gbb(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gat(p))}}e.gb1()
p=e.ge9()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb1()
if(!C.a.J(k,p)){p.a=k.length
k.push(p)}p=e.gb1()
o=p.gbb(p)
if(o){o=b.dy
if(o!=null){a3=p.gbb(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gat(p))}}if(e.gik()){p=e.gii()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gih()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gdu()){p=e.gdi()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdj()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdk()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a5.h(0,q)
if(j==null)j=0
q=a8.ci.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.c){s=a6.Q
a6.ad(k,s==null?a7:s.e)
s=a6.Q
s=s==null?a7:s.e
a8.ae(a8.dB,s)}if(n.dy){s=a9.Q
if(s==null){s=a9.db
s=a9.Q=s.gO(s).cl(0)}r=a8.fy
if(r!=null)r.a9(s.a4(0,!0))}if(n.db){a6.ad(k,a7)
a8.ae(a8.dC,a7)
s=n.r
if(s.a){r=a6.cx
r=r==null?a7:r.f
if(r==null)r=new V.D(1,1,1)
q=a8.dD
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.cx
a6.ad(k,s==null?a7:s.e)
s=a6.cx
s=s==null?a7:s.e
a8.ae(a8.dE,s)}s=n.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.cy
q=q==null?a7:q.ch
if(q==null)q=0
p=a8.dF
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.cy
r=r==null?a7:r.f
if(r==null)r=new V.D(1,1,1)
q=a8.dG
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.cy
a6.ad(k,s==null?a7:s.e)
s=a6.cy
s=s==null?a7:s.e
a8.ae(a8.dH,s)}}s=n.y
r=s.a
q=!r
if(q)p=s.c
else p=!0
if(p){if(r){r=a6.db
r=r==null?a7:r.f
if(r==null)r=1
p=a8.dI
if(p!=null)p.a.uniform1f(p.d,r)}if(s.c){r=a6.db
a6.ad(k,r==null?a7:r.e)
r=a6.db
r=r==null?a7:r.e
a8.ae(a8.dJ,r)}r=a9.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].L(a9)
r=t.D.a(b0.e)
r.L(a9)
r.a8(a9)
r.ab(a9)
if(q)s=s.c
else s=!0
if(s)a9.a.disable(3042)
for(s=a9.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a7)}}s.useProgram(a7)
a8.ga7(a8).c8()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cX().bq}}
O.hT.prototype={
$2:function(a,b){return this.b.push(new A.b1(a,C.b.a2(b+3,4)*4))},
$S:8}
O.hU.prototype={
$2:function(a,b){return C.b.af(a.a,b.a)},
$S:38}
O.hV.prototype={
$2:function(a,b){return this.b.push(new A.b5(a,C.b.a2(b+3,4)*4))},
$S:8}
O.hW.prototype={
$2:function(a,b){return C.b.af(a.a,b.a)},
$S:39}
O.hX.prototype={
$2:function(a,b){return this.b.push(new A.bg(a,C.b.a2(b+3,4)*4))},
$S:8}
O.hY.prototype={
$2:function(a,b){return C.b.af(a.a,b.a)},
$S:40}
O.hZ.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.b.a2(b+3,4)*4))},
$S:8}
O.i_.prototype={
$2:function(a,b){return C.b.af(a.a,b.a)},
$S:41}
O.hN.prototype={
aC:function(){var s,r=this
r.cL()
s=r.f
$.r().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.N(new D.p(r.b,s,1))}}}
O.co.prototype={
N:function(a){return this.a.N(a)},
b6:function(){return this.N(null)},
aC:function(){},
bU:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aC()
s=q.a
s.a=null
s.N(null)}},
sbe:function(a){var s,r=this,q=r.c
if(!q.c)r.bU(new A.ad(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().K(0,r.gaz())
s=r.e
r.e=a
a.gm().k(0,r.gaz())
r.a.N(new D.p(r.b+".textureCube",s,r.e))}}}
O.hO.prototype={}
O.cp.prototype={
da:function(a){var s,r=this
if(!r.f.n(0,a)){s=r.f
r.f=a
r.a.N(new D.p(r.b+".color",s,a))}},
aC:function(){this.cL()
this.da(new V.D(1,1,1))},
saS:function(a,b){this.bU(new A.ad(!0,!1,this.c.c))
this.da(b)}}
O.hQ.prototype={}
O.hR.prototype={
aC:function(){var s,r=this
r.cM()
s=r.ch
$.r().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.N(new D.p(r.b+".refraction",s,1))}}}
O.hS.prototype={
dc:function(a){var s=this,r=s.ch
$.r().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.N(new D.p(s.b+".shininess",r,a))}},
aC:function(){this.cM()
this.dc(100)}}
O.ej.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
N:function(a){var s=this.e
return s==null?null:s.q(a)},
b6:function(){return this.N(null)},
cz:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.x.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.cE(a.a,"Skybox")
s.ck(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.ga7(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gv().h(0,"fov"))
s.z=r.a(s.gv().h(0,"ratio"))
s.Q=t.g.a(s.gv().h(0,"boxClr"))
s.ch=t.a.a(s.gv().h(0,"boxTxt"))
s.cx=t.j.a(s.gv().h(0,"viewMat"))
a.bY(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.c0(new Z.cP(a.a),$.ac())
if(r==null)r=l
else{q=r.as($.ac())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.L(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.L(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.cG(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.gO(r).cl(0)
p=p.cx
if(p!=null)p.a9(r.a4(0,!0))}r=b.e
if(r instanceof Z.b2){r.L(a)
r.a8(a)
r.ab(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.ga7(r).c8()}o.ab(a)}}
O.ij.prototype={
gm:function(){var s=this.c
return s==null?this.c=D.y():s},
ak:function(a,b){},
cz:function(a,b){var s,r,q,p,o=this,n=null,m="SolidColor"
if(o.a==null){s=t.cH.a(a.fr.h(0,m))
if(s==null){s=new A.cF(a.a,m)
s.ck(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
s.x=s.ga7(s).h(0,"posAttr")
s.y=t.F.a(s.gv().h(0,"color"))
s.z=t.j.a(s.gv().h(0,"projViewObjMat"))
a.bY(s)}o.a=s}r=b.e
if((!(r instanceof Z.b2)?b.e=null:r)==null){r=b.d
r=r==null?n:r.c0(new Z.cP(a.a),$.ac())
if(r==null)r=n
else{q=r.as($.ac())
if(q!=null){p=o.a
if(p==null)p=n
else{p=p.x
p=p==null?n:p.c}q.e=p==null?0:p}}b.e=r}r=o.a
if(r!=null){r.L(a)
q=r.y
if(q!=null)q.e8(o.b)
q=a.ge_()
r=r.z
if(r!=null)r.a9(q.a4(0,!0))}r=t.D.a(b.e)
r.L(a)
r.a8(a)
r.ab(a)
r=o.a
if(r!=null){a.a.useProgram(n)
r.ga7(r).c8()}}}
O.iq.prototype={}
T.dz.prototype={
bi:function(a){return null},
es:function(){return this.bi(null)},
aE:function(a){var s,r=this
if(r.b!=null)return!1
r.b=a
a.gV().gc9().k(0,r.geX())
a.gV().gaX().k(0,r.geZ())
a.gV().gby().k(0,r.gf0())
s=a.gao()
s.gcJ(s).k(0,r.ghe())
a.gao().gaX().k(0,r.ghc())
s=a.gao()
s.gdv(s).k(0,r.gha())
return!0},
eY:function(a){if(!t.Z.a(a).x.b.n(0,this.c))return
this.ch=this.Q=!0},
f_:function(a){var s
if(!this.Q)return
if(this.ch){t.Z.a(a)
s=a.y.a5(a.d)
if(s.a_(s)<4)return
this.ch=!1}},
f1:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.d5(a)},
hf:function(a){this.ch=this.Q=!0},
hd:function(a){var s
if(!this.Q)return
if(this.ch){t.Q.a(a)
s=a.y.a5(a.d)
if(s.a_(s)<4)return
this.ch=!1}},
hb:function(a){var s=this
if(!s.Q)return
s.Q=!1
if(!s.ch)return
s.d5(a)},
d5:function(a){var s,r,q,p,o,n,m,l,k,j=this.d
if(j==null)return
t.Z.a(a)
s=a.d
r=a.c
q=s.a/r.c
p=s.b/r.d
o=C.c.aU(q*(j.r-1))
n=C.c.aU(p*(j.x-1))
r=this.a.a
s=j.x
m=r.createFramebuffer()
m.toString
r.bindFramebuffer(36160,m)
r.readBuffer(36064)
r.framebufferTexture2D(36160,36064,3553,j.b,0)
l=new Uint8Array(4)
r.readPixels(o,s-1-n,1,1,6408,5121,l)
r.bindFramebuffer(36160,null)
new T.ix(l,1,1).eS()
k=V.dy(l[0],l[1],l[2],l[3])
s=this.x
if(s!=null)s.q(new T.c2(new V.V(q,p),k))}}
T.c2.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.ir.prototype={}
T.is.prototype={}
T.it.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.y():s}}
T.iu.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
L:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
ab:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.iv.prototype={
dP:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
i.toString
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.iu(i)
r.aN(s,i,p,34069,!1,!1)
r.aN(s,i,m,34070,!1,!1)
r.aN(s,i,o,34071,!1,!1)
r.aN(s,i,l,34072,!1,!1)
r.aN(s,i,n,34073,!1,!1)
r.aN(s,i,k,34074,!1,!1)
return s},
dO:function(a){return this.dP(a,".png")},
aN:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.P(s,"load",new T.iw(this,s,!1,b,!1,d,a),!1)},
h5:function(a,b,c){var s,r,q,p,o,n
b=V.dm(b)
s=a.width
r=V.dm(s==null?512:s)
s=a.height
q=V.dm(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.jT()
p.width=r
p.height=q
o=t.b.a(C.f.e6(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.o4(o.getImageData(0,0,s,n==null?512:n))}}}
T.iw.prototype={
$1:function(a){var s=this,r=s.a,q=r.h5(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.r.i4(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.ca()}++r.e},
$S:3}
T.ix.prototype={
eS:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(s=this.c,r=C.b.a2(s,2),q=this.b,p=this.a,o=p.length,n=q*4,--s;r>=0;--r){m=n*r
l=n*(s-r)
for(k=0;k<q;++k){j=4*k
i=m+j
h=l+j
for(g=0;g<4;++g){f=i+g
e=h+g
if(f<0||f>=o)return H.e(p,f)
d=p[f]
if(e<0||e>=o)return H.e(p,e)
p[f]=p[e]
p[e]=d}}}}}
X.hb.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.y():s},
Y:function(a){var s=this.fr
return s==null?null:s.q(a)},
sal:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.Y(new D.p("width",s,b))}},
sag:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.Y(new D.p("height",s,b))}},
L:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
h.sal(0,C.c.R(r*h.r))
s=s.drawingBufferHeight
if(s==null)s=512
h.sag(0,C.c.R(s*h.x))}if(h.y==null){s=a.a
r=h.ch
q=h.a
p=h.b
o=H.fW(s.getParameter(3379))
n=V.dm(q)
m=V.dm(p)
o=V.dm(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(f,l)
s.texParameteri(f,10242,33071)
s.texParameteri(f,10243,33071)
s.texParameteri(f,10241,9729)
s.texParameteri(f,10240,9729)
C.r.e2(s,f,0,6408,n,m,0,6408,5121,g)
s.bindTexture(f,g)
k=T.kW(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.ca()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.ca()
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
a.c=C.c.R(r*h.a)
q=j.d
a.d=C.c.R(q*h.b)
p=h.c
i=C.c.R(j.a*p)
l=h.d
s.viewport(i,C.c.R(j.b*l),C.c.R(r*p),C.c.R(q*l))
s.clearDepth(h.db)
r=h.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
if(16640>0)s.clear(16640)},
ab:function(a){a.a.bindFramebuffer(36160,null)}}
X.hA.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.y():s},
L:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.c.R(q.a*s)
o=C.c.R(q.b*r)
n=C.c.R(q.c*s)
a.c=n
q=C.c.R(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)},
ab:function(a){}}
X.hC.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
L:function(a){var s
a.cy.bv(V.a8())
s=V.a8()
a.db.bv(s)},
ab:function(a){a.cy.aH()
a.db.aH()}}
X.e8.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.y():s},
Y:function(a){var s=this.f
return s==null?null:s.q(a)},
ex:function(){return this.Y(null)},
L:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.au(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bv(i)
s=$.lE()
r=q.b
if(r!=null)s=r.ax(0,a,q).I(0,s)
a.db.bv(s)},
ab:function(a){a.cy.aH()
a.db.aH()}}
X.io.prototype={}
V.jO.prototype={
$1:function(a){var s=C.c.cC(this.a.ghw(),2)
if(s!=="0.00")P.kt(s+" fps")},
$S:42}
V.ig.prototype={
dh:function(a){var s,r,q,p,o,n,m=this.h7(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.M(C.a.hz(a)),s=new P.bQ(m.e4(new H.bE(s,s.gj(s))).a());s.t();){r=s.gD(s)
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
if(H.ly(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.na(C.K,r,C.n,!1)
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
h7:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.iB(P.N(s,t.aJ),P.N(s,t.aX),P.kD(s))
h.d=h.H(0,q)
s=h.H(0,q).p(0,p)
r=new K.T([])
r.S(new H.M("*"))
s.a.push(r)
s.c=!0
s=[]
h.H(0,p).p(0,p).a.push(new K.aJ(s))
r=new K.T([])
r.S(new H.M("*"))
s.push(r)
r=h.H(0,p).p(0,"BoldEnd")
s=new K.T([])
s.S(new H.M("*"))
r.a.push(s)
r.c=!0
r=h.H(0,q).p(0,o)
s=new K.T([])
s.S(new H.M("_"))
r.a.push(s)
r.c=!0
r=[]
h.H(0,o).p(0,o).a.push(new K.aJ(r))
s=new K.T([])
s.S(new H.M("_"))
r.push(s)
s=h.H(0,o).p(0,n)
r=new K.T([])
r.S(new H.M("_"))
s.a.push(r)
s.c=!0
s=h.H(0,q).p(0,m)
r=new K.T([])
r.S(new H.M("`"))
s.a.push(r)
s.c=!0
s=[]
h.H(0,m).p(0,m).a.push(new K.aJ(s))
r=new K.T([])
r.S(new H.M("`"))
s.push(r)
r=h.H(0,m).p(0,"CodeEnd")
s=new K.T([])
s.S(new H.M("`"))
r.a.push(s)
r.c=!0
r=h.H(0,q).p(0,l)
s=new K.T([])
s.S(new H.M("["))
r.a.push(s)
r.c=!0
r=h.H(0,l).p(0,k)
s=new K.T([])
s.S(new H.M("|"))
r.a.push(s)
s=h.H(0,l).p(0,j)
r=new K.T([])
r.S(new H.M("]"))
s.a.push(r)
s.c=!0
s=[]
h.H(0,l).p(0,l).a.push(new K.aJ(s))
r=new K.T([])
r.S(new H.M("|]"))
s.push(r)
r=h.H(0,k).p(0,j)
s=new K.T([])
s.S(new H.M("]"))
r.a.push(s)
r.c=!0
r=[]
h.H(0,k).p(0,k).a.push(new K.aJ(r))
s=new K.T([])
s.S(new H.M("|]"))
r.push(s)
h.H(0,q).p(0,i).a.push(new K.h2())
s=[]
h.H(0,i).p(0,i).a.push(new K.aJ(s))
r=new K.T([])
r.S(new H.M("*_`["))
s.push(r)
r=h.H(0,"BoldEnd")
r.d=r.a.bf(p)
r=h.H(0,n)
r.d=r.a.bf(o)
r=h.H(0,"CodeEnd")
r.d=r.a.bf(m)
r=h.H(0,j)
r.d=r.a.bf("Link")
r=h.H(0,i)
r.d=r.a.bf(i)
return this.b=h}}
V.ii.prototype={
$1:function(a){P.kY(C.h,new V.ih(this.a))},
$S:3}
V.ih.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.c.R(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.v(-0.01*s)+"px"
q.top=r},
$S:2}
U.jJ.prototype={
$1:function(a){var s,r,q,p,o,n
for(s=this.a,r=0;r<s.length;++r){q=s[r]
p=q.e
o=0.99*p
$.r().toString
if(!(Math.abs(p-o)<1e-9)){q.e=o
n=q.y
if(n!=null)n.q(new D.p("deltaPitch",p,o))}p=q.f
o=0.99*p
$.r().toString
if(!(Math.abs(p-o)<1e-9)){q.f=o
n=q.y
if(n!=null)n.q(new D.p("deltaRoll",p,o))}}},
$S:0}
U.jK.prototype={
$1:function(a){var s,r,q,p,o=t.d.a(a).d.ia()
for(s=this.a,r=0;r<s.length;++r)if(s[r].n(0,o)){s=this.b
if(r>=s.length)return H.e(s,r)
q=s[r]
s=q.e
$.r().toString
if(!(Math.abs(s-1.21)<1e-9)){q.e=1.21
p=q.y
if(p!=null)p.q(new D.p("deltaPitch",s,1.21))}s=q.f
$.r().toString
if(!(Math.abs(s-1.31)<1e-9)){q.f=1.31
p=q.y
if(p!=null)p.q(new D.p("deltaRoll",s,1.31))}s=this.c
s.shT(0,C.o.dQ()*2.8+0.2)
s.sic(0,C.o.dQ()*0.8+0.2)
s=s.a.play()
s.toString
P.ol(s,t.z)
break}},
$S:0};(function aliases(){var s=J.a.prototype
s.ec=s.i
s=J.ba.prototype
s.ed=s.i
s=K.dJ.prototype
s.eb=s.aW
s.bA=s.i
s=O.co.prototype
s.cL=s.aC
s=O.cp.prototype
s.cM=s.aC})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers._instance_1u,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_0i
s(J,"nm","mh",43)
r(P,"o_","mO",9)
r(P,"o0","mP",9)
r(P,"o1","mQ",9)
q(P,"lq","nV",2)
r(W,"pu","hq",33)
var k
p(k=F.ea.prototype,"gfo","fp",3)
p(k,"gfm","fn",3)
o(k=E.bx.prototype,"gdV",0,0,null,["$1","$0"],["dW","hK"],1,0)
o(k,"gdX",0,0,null,["$1","$0"],["dY","hL"],1,0)
o(k,"gdT",0,0,null,["$1","$0"],["dU","hJ"],1,0)
o(k,"gdR",0,0,null,["$1","$0"],["dS","hG"],1,0)
n(k,"ghE","hF",6)
n(k,"ghH","hI",6)
o(k=E.ev.prototype,"gcN",0,0,null,["$1","$0"],["cP","cO"],1,0)
m(k,"ghW","e0",2)
p(k=X.eQ.prototype,"gfq","fs",3)
p(k,"gfa","fb",3)
p(k,"gfg","fh",4)
p(k,"gfv","fw",16)
p(k,"gft","fu",16)
p(k,"gfB","fC",4)
p(k,"gfF","fG",4)
p(k,"gfk","fl",4)
p(k,"gfD","fE",4)
p(k,"gfi","fj",4)
p(k,"gfH","fI",31)
p(k,"gfJ","fK",3)
p(k,"gfZ","h_",12)
p(k,"gfV","fW",12)
p(k,"gfX","fY",12)
o(D.c6.prototype,"gei",0,0,null,["$1","$0"],["ay","ej"],1,0)
o(k=D.ci.prototype,"gd3",0,0,null,["$1","$0"],["d4","fz"],1,0)
p(k,"gfL","fM",32)
n(k,"gf4","f5",18)
n(k,"gfP","fQ",18)
l(V.V.prototype,"gj","cn",14)
l(V.z.prototype,"gj","cn",14)
o(k=U.bA.prototype,"gaO",0,0,null,["$1","$0"],["F","a6"],1,0)
n(k,"gek","el",19)
n(k,"gfN","fO",19)
o(k=U.cL.prototype,"gaO",0,0,null,["$1","$0"],["F","a6"],1,0)
p(k,"gbB","bC",13)
p(k,"gbD","bE",13)
p(k,"gbF","bG",13)
o(k=U.cM.prototype,"gaO",0,0,null,["$1","$0"],["F","a6"],1,0)
p(k,"gbB","bC",0)
p(k,"gbD","bE",0)
p(k,"gbF","bG",0)
p(k,"geT","eU",0)
p(k,"geV","eW",0)
p(k,"geq","er",0)
p(k,"geo","ep",0)
p(k,"gem","en",0)
p(U.cN.prototype,"gf2","f3",0)
o(k=M.c3.prototype,"gT",0,0,null,["$1","$0"],["P","b5"],1,0)
n(k,"gfR","fS",21)
n(k,"gfT","fU",21)
o(M.c4.prototype,"gT",0,0,null,["$1","$0"],["P","b5"],1,0)
o(k=M.cb.prototype,"gT",0,0,null,["$1","$0"],["P","b5"],1,0)
n(k,"gfc","fd",6)
n(k,"gfe","ff",6)
o(k=O.dU.prototype,"gaz",0,0,null,["$1","$0"],["N","b6"],1,0)
o(k,"gd7",0,0,null,["$1","$0"],["d8","h4"],1,0)
n(k,"gf6","f7",22)
n(k,"gf8","f9",22)
o(O.co.prototype,"gaz",0,0,null,["$1","$0"],["N","b6"],1,0)
o(O.ej.prototype,"gaz",0,0,null,["$1","$0"],["N","b6"],1,0)
o(k=T.dz.prototype,"gcQ",0,0,null,["$1","$0"],["bi","es"],1,0)
p(k,"geX","eY",0)
p(k,"geZ","f_",0)
p(k,"gf0","f1",0)
p(k,"ghe","hf",0)
p(k,"ghc","hd",0)
p(k,"gha","hb",0)
o(X.e8.prototype,"gew",0,0,null,["$1","$0"],["Y","ex"],1,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.G,null)
q(P.G,[H.k0,J.a,J.a5,P.B,P.cW,P.h,H.bE,P.dL,H.cc,H.eO,H.iF,H.i5,H.d4,H.bu,P.U,H.hH,H.dT,H.hD,H.af,H.fb,P.d8,P.bP,P.bQ,P.dt,P.eZ,P.fc,P.ao,P.eV,P.eq,P.er,P.jt,P.dd,P.jm,P.cV,P.C,P.ei,P.dx,P.js,P.R,P.b6,P.e7,P.cG,P.f8,P.hz,P.a0,P.fC,P.bk,W.hi,W.jW,W.ka,W.F,W.cd,P.da,P.i4,P.jj,P.fs,K.h2,K.dJ,K.T,L.eo,L.ew,L.ex,L.iB,F.h8,F.ea,O.bv,O.cr,E.hc,E.bx,E.bt,E.bI,E.f5,E.i8,E.ev,Z.eT,Z.cP,Z.b2,Z.ce,Z.aQ,D.he,D.by,D.L,X.c0,X.dQ,X.hF,X.hL,X.Y,X.i3,X.iC,X.eQ,D.c6,V.D,V.a7,V.ht,V.cq,V.am,V.O,V.a_,V.aL,V.ee,V.V,V.z,U.cL,U.cM,U.cN,M.c4,M.cb,A.h5,A.h6,A.ad,A.b1,A.b5,A.bg,A.bj,A.hP,A.eE,A.eF,A.eI,A.eL,A.iH,A.iN,F.ak,F.hG,F.i6,F.id,F.cC,F.cD,F.bL,F.cO,F.t,F.iW,F.iZ,F.j_,O.iq,O.co,O.hQ,T.dz,T.iv,T.ix,X.io,X.hC,X.e8,V.ig])
q(J.a,[J.dM,J.bC,J.ba,J.al,J.bD,J.b9,H.cu,W.c,W.h1,W.dw,W.c1,W.aq,W.E,W.f0,W.ae,W.hl,W.hm,W.f1,W.c8,W.f3,W.hn,W.i,W.f9,W.aG,W.hB,W.fe,W.b8,W.hK,W.i0,W.fi,W.fj,W.aI,W.fk,W.fm,W.aK,W.fq,W.ft,W.aN,W.fu,W.aO,W.fz,W.an,W.fE,W.iz,W.aP,W.fG,W.iD,W.iP,W.fM,W.fO,W.fQ,W.fS,W.fU,P.bc,P.fg,P.bf,P.fo,P.i7,P.fA,P.bm,P.fI,P.h7,P.eW,P.bK,P.fx])
q(J.ba,[J.e9,J.bM,J.at])
r(J.dO,J.al)
q(J.bD,[J.cg,J.dN])
q(P.B,[H.dR,P.eA,H.dP,H.eN,H.eg,H.f6,P.ds,P.e4,P.ai,P.eP,P.eM,P.cI,P.dA,P.dC])
r(P.cj,P.cW)
q(P.cj,[H.bN,W.eY,W.eX,P.dH])
r(H.M,H.bN)
q(P.h,[H.j,H.bd,H.cQ,P.cf])
r(H.c9,H.bd)
q(P.dL,[H.cm,H.eU])
r(H.cx,P.eA)
q(H.bu,[H.ip,H.hE,H.jF,H.jG,H.jH,P.j3,P.j2,P.j4,P.j5,P.jr,P.jq,P.j7,P.je,P.ja,P.jb,P.jc,P.j9,P.jd,P.j8,P.jh,P.ji,P.jg,P.jf,P.jA,P.jo,P.jp,P.hM,P.ho,P.hp,W.i1,W.i2,W.ic,W.il,W.j6,P.jv,P.jC,P.hx,P.hy,P.jM,P.jN,P.ha,F.h9,E.i9,E.ia,E.ib,E.iy,D.hv,D.hw,F.ju,F.ie,F.j1,F.j0,F.iX,F.iY,O.hT,O.hU,O.hV,O.hW,O.hX,O.hY,O.hZ,O.i_,T.iw,V.jO,V.ii,V.ih,U.jJ,U.jK])
q(H.ip,[H.ik,H.bY])
r(P.cl,P.U)
r(H.S,P.cl)
r(H.aH,H.j)
r(H.bH,H.cu)
q(H.bH,[H.cY,H.d_])
r(H.cZ,H.cY)
r(H.be,H.cZ)
r(H.d0,H.d_)
r(H.ct,H.d0)
q(H.ct,[H.dZ,H.e_,H.e0,H.e1,H.e2,H.cv,H.e3])
r(H.d9,H.f6)
r(P.d5,P.cf)
r(P.cR,P.eZ)
r(P.jn,P.jt)
r(P.d1,P.dd)
r(P.cU,P.d1)
r(P.dB,P.er)
r(P.hr,P.dx)
r(P.iQ,P.hr)
r(P.iR,P.dB)
q(P.ai,[P.cA,P.dK])
q(W.c,[W.w,W.dG,W.aw,W.d2,W.ax,W.ag,W.d6,W.eS,W.bO,P.dv,P.aE])
q(W.w,[W.I,W.aj])
q(W.I,[W.l,P.k])
q(W.l,[W.dq,W.dr,W.b3,W.dI,W.bB,W.eh])
r(W.hh,W.aq)
r(W.c5,W.f0)
q(W.ae,[W.hj,W.hk])
r(W.f2,W.f1)
r(W.c7,W.f2)
r(W.f4,W.f3)
r(W.dE,W.f4)
r(W.aF,W.dw)
r(W.fa,W.f9)
r(W.dF,W.fa)
r(W.ff,W.fe)
r(W.b7,W.ff)
r(W.az,W.i)
q(W.az,[W.bb,W.a9,W.bl])
r(W.dW,W.fi)
r(W.dX,W.fj)
r(W.fl,W.fk)
r(W.dY,W.fl)
r(W.fn,W.fm)
r(W.cw,W.fn)
r(W.fr,W.fq)
r(W.eb,W.fr)
r(W.ef,W.ft)
r(W.d3,W.d2)
r(W.el,W.d3)
r(W.fv,W.fu)
r(W.em,W.fv)
r(W.ep,W.fz)
r(W.fF,W.fE)
r(W.et,W.fF)
r(W.d7,W.d6)
r(W.eu,W.d7)
r(W.fH,W.fG)
r(W.ey,W.fH)
r(W.aR,W.a9)
r(W.fN,W.fM)
r(W.f_,W.fN)
r(W.cS,W.c8)
r(W.fP,W.fO)
r(W.fd,W.fP)
r(W.fR,W.fQ)
r(W.cX,W.fR)
r(W.fT,W.fS)
r(W.fw,W.fT)
r(W.fV,W.fU)
r(W.fD,W.fV)
r(W.f7,P.eq)
r(P.aa,P.fs)
r(P.fh,P.fg)
r(P.dS,P.fh)
r(P.fp,P.fo)
r(P.e5,P.fp)
r(P.fB,P.fA)
r(P.es,P.fB)
r(P.fJ,P.fI)
r(P.ez,P.fJ)
r(P.du,P.eW)
r(P.e6,P.aE)
r(P.fy,P.fx)
r(P.en,P.fy)
q(K.dJ,[K.aJ,L.iE])
q(E.hc,[Z.c_,A.bi,T.ir])
q(D.L,[D.ar,D.as,D.p,X.ec,T.c2])
q(X.ec,[X.ck,X.bF,X.bG,X.cJ])
q(O.bv,[D.ci,U.bA,M.c3])
q(D.he,[U.hf,U.Z])
q(U.Z,[U.bw,U.cB])
q(A.bi,[A.cn,A.cE,A.cF])
q(A.iH,[A.cK,A.iK,A.iL,A.iM,A.iI,A.eB,A.iJ,A.eC,A.eD,A.iO,A.eG,A.eH,A.eJ,A.eK])
q(O.iq,[O.dU,O.ej,O.ij])
q(O.co,[O.hN,O.hO,O.cp])
q(O.cp,[O.hR,O.hS])
q(T.ir,[T.is,T.iu])
r(T.it,T.is)
q(X.io,[X.hb,X.hA])
s(H.bN,H.eO)
s(H.cY,P.C)
s(H.cZ,H.cc)
s(H.d_,P.C)
s(H.d0,H.cc)
s(P.cW,P.C)
s(P.dd,P.ei)
s(W.f0,W.hi)
s(W.f1,P.C)
s(W.f2,W.F)
s(W.f3,P.C)
s(W.f4,W.F)
s(W.f9,P.C)
s(W.fa,W.F)
s(W.fe,P.C)
s(W.ff,W.F)
s(W.fi,P.U)
s(W.fj,P.U)
s(W.fk,P.C)
s(W.fl,W.F)
s(W.fm,P.C)
s(W.fn,W.F)
s(W.fq,P.C)
s(W.fr,W.F)
s(W.ft,P.U)
s(W.d2,P.C)
s(W.d3,W.F)
s(W.fu,P.C)
s(W.fv,W.F)
s(W.fz,P.U)
s(W.fE,P.C)
s(W.fF,W.F)
s(W.d6,P.C)
s(W.d7,W.F)
s(W.fG,P.C)
s(W.fH,W.F)
s(W.fM,P.C)
s(W.fN,W.F)
s(W.fO,P.C)
s(W.fP,W.F)
s(W.fQ,P.C)
s(W.fR,W.F)
s(W.fS,P.C)
s(W.fT,W.F)
s(W.fU,P.C)
s(W.fV,W.F)
s(P.fg,P.C)
s(P.fh,W.F)
s(P.fo,P.C)
s(P.fp,W.F)
s(P.fA,P.C)
s(P.fB,W.F)
s(P.fI,P.C)
s(P.fJ,W.F)
s(P.eW,P.U)
s(P.fx,P.C)
s(P.fy,W.F)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",a3:"double",a4:"num",A:"String",bo:"bool",a0:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~(L)","~([L?])","~()","~(i)","~(a9)","~(A,@)","~(n,h<bx>)","~(ak)","~(n,n)","~(~())","a0()","~(@)","~(bl)","~(L?)","a3()","~(~(L))","~(bb)","A(n)","~(n,h<ch>)","~(n,h<Z?>)","a0(@)","~(n,h<bh>)","~(n,h<am>)","@(@)","bo(w)","I(w)","@(A)","ao<@>(@)","~(a4)","~(@,@)","~(G?,G?)","~(aR)","bo(h<ch>)","A(c)","~(cO,a3,a3)","c_(n)","~(A,A)","a0(~())","n(b1,b1)","n(b5,b5)","n(bg,bg)","n(bj,bj)","~(iA)","n(@,@)","@(@,A)","a0(G,cH)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.n7(v.typeUniverse,JSON.parse('{"e9":"ba","bM":"ba","at":"ba","ou":"i","oG":"i","ow":"aE","ov":"c","oN":"c","oQ":"c","ot":"k","oI":"k","ox":"l","oL":"l","oJ":"w","oF":"w","pd":"ag","oB":"az","oy":"aj","oR":"aj","oP":"a9","oK":"b7","oC":"E","oD":"an","oM":"be","dM":{"bo":[]},"bC":{"a0":[]},"al":{"m":["1"],"j":["1"],"h":["1"]},"dO":{"m":["1"],"j":["1"],"h":["1"]},"bD":{"a3":[],"a4":[]},"cg":{"a3":[],"n":[],"a4":[]},"dN":{"a3":[],"a4":[]},"b9":{"A":[]},"dR":{"B":[]},"M":{"m":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"bd":{"h":["2"]},"c9":{"j":["2"],"h":["2"]},"cQ":{"h":["1"]},"bN":{"m":["1"],"j":["1"],"h":["1"]},"cx":{"B":[]},"dP":{"B":[]},"eN":{"B":[]},"d4":{"cH":[]},"eg":{"B":[]},"S":{"X":["1","2"],"U.V":"2"},"aH":{"j":["1"],"h":["1"]},"bH":{"u":["1"]},"be":{"u":["a3"],"m":["a3"],"j":["a3"],"h":["a3"]},"ct":{"u":["n"],"m":["n"],"j":["n"],"h":["n"]},"dZ":{"u":["n"],"m":["n"],"j":["n"],"h":["n"]},"e_":{"u":["n"],"m":["n"],"j":["n"],"h":["n"]},"e0":{"u":["n"],"m":["n"],"j":["n"],"h":["n"]},"e1":{"u":["n"],"m":["n"],"j":["n"],"h":["n"]},"e2":{"u":["n"],"m":["n"],"j":["n"],"h":["n"]},"cv":{"u":["n"],"m":["n"],"j":["n"],"h":["n"]},"e3":{"u":["n"],"m":["n"],"j":["n"],"h":["n"]},"f6":{"B":[]},"d9":{"B":[]},"ao":{"bz":["1"]},"d8":{"iA":[]},"d5":{"h":["1"]},"dt":{"B":[]},"cR":{"eZ":["1"]},"cU":{"j":["1"],"h":["1"]},"cf":{"h":["1"]},"cj":{"m":["1"],"j":["1"],"h":["1"]},"cl":{"X":["1","2"]},"U":{"X":["1","2"]},"d1":{"j":["1"],"h":["1"]},"a3":{"a4":[]},"n":{"a4":[]},"m":{"j":["1"],"h":["1"]},"ds":{"B":[]},"eA":{"B":[]},"e4":{"B":[]},"ai":{"B":[]},"cA":{"B":[]},"dK":{"B":[]},"eP":{"B":[]},"eM":{"B":[]},"cI":{"B":[]},"dA":{"B":[]},"e7":{"B":[]},"cG":{"B":[]},"dC":{"B":[]},"fC":{"cH":[]},"I":{"w":[],"c":[]},"bb":{"i":[]},"a9":{"i":[]},"w":{"c":[]},"aw":{"c":[]},"ax":{"c":[]},"ag":{"c":[]},"bl":{"i":[]},"az":{"i":[]},"aR":{"a9":[],"i":[]},"l":{"I":[],"w":[],"c":[]},"dq":{"I":[],"w":[],"c":[]},"dr":{"I":[],"w":[],"c":[]},"b3":{"I":[],"w":[],"c":[]},"aj":{"w":[],"c":[]},"c7":{"m":["aa<a4>"],"u":["aa<a4>"],"j":["aa<a4>"],"h":["aa<a4>"]},"c8":{"aa":["a4"]},"dE":{"m":["A"],"u":["A"],"j":["A"],"h":["A"]},"eY":{"m":["I"],"j":["I"],"h":["I"]},"dF":{"m":["aF"],"u":["aF"],"j":["aF"],"h":["aF"]},"dG":{"c":[]},"dI":{"I":[],"w":[],"c":[]},"b7":{"m":["w"],"u":["w"],"j":["w"],"h":["w"]},"bB":{"I":[],"w":[],"c":[]},"dW":{"X":["A","@"],"U.V":"@"},"dX":{"X":["A","@"],"U.V":"@"},"dY":{"m":["aI"],"u":["aI"],"j":["aI"],"h":["aI"]},"eX":{"m":["w"],"j":["w"],"h":["w"]},"cw":{"m":["w"],"u":["w"],"j":["w"],"h":["w"]},"eb":{"m":["aK"],"u":["aK"],"j":["aK"],"h":["aK"]},"ef":{"X":["A","@"],"U.V":"@"},"eh":{"I":[],"w":[],"c":[]},"el":{"m":["aw"],"u":["aw"],"c":[],"j":["aw"],"h":["aw"]},"em":{"m":["aN"],"u":["aN"],"j":["aN"],"h":["aN"]},"ep":{"X":["A","A"],"U.V":"A"},"et":{"m":["ag"],"u":["ag"],"j":["ag"],"h":["ag"]},"eu":{"m":["ax"],"u":["ax"],"c":[],"j":["ax"],"h":["ax"]},"ey":{"m":["aP"],"u":["aP"],"j":["aP"],"h":["aP"]},"eS":{"c":[]},"bO":{"c":[]},"f_":{"m":["E"],"u":["E"],"j":["E"],"h":["E"]},"cS":{"aa":["a4"]},"fd":{"m":["aG?"],"u":["aG?"],"j":["aG?"],"h":["aG?"]},"cX":{"m":["w"],"u":["w"],"j":["w"],"h":["w"]},"fw":{"m":["aO"],"u":["aO"],"j":["aO"],"h":["aO"]},"fD":{"m":["an"],"u":["an"],"j":["an"],"h":["an"]},"da":{"b8":[]},"dH":{"m":["I"],"j":["I"],"h":["I"]},"aa":{"fs":["1"]},"dS":{"m":["bc"],"j":["bc"],"h":["bc"]},"e5":{"m":["bf"],"j":["bf"],"h":["bf"]},"es":{"m":["A"],"j":["A"],"h":["A"]},"k":{"I":[],"w":[],"c":[]},"ez":{"m":["bm"],"j":["bm"],"h":["bm"]},"du":{"X":["A","@"],"U.V":"@"},"dv":{"c":[]},"aE":{"c":[]},"e6":{"c":[]},"en":{"m":["X<@,@>"],"j":["X<@,@>"],"h":["X<@,@>"]},"bv":{"h":["1"]},"ar":{"L":[]},"as":{"L":[]},"p":{"L":[]},"ck":{"L":[]},"bF":{"L":[]},"bG":{"L":[]},"ec":{"L":[]},"cJ":{"L":[]},"c6":{"ch":[]},"ci":{"h":["ch"]},"bw":{"Z":[]},"bA":{"Z":[],"h":["Z?"]},"cB":{"Z":[]},"cL":{"Z":[]},"cM":{"Z":[]},"cN":{"Z":[]},"c3":{"bh":[],"h":["bh"]},"c4":{"bh":[]},"cb":{"bh":[]},"cn":{"bi":[]},"cE":{"bi":[]},"cF":{"bi":[]},"c2":{"L":[]}}'))
H.n6(v.typeUniverse,JSON.parse('{"al":1,"dO":1,"a5":1,"j":1,"bE":1,"bd":2,"c9":2,"cm":2,"cQ":1,"eU":1,"cc":1,"eO":1,"bN":1,"aH":1,"dT":1,"bH":1,"bQ":1,"d5":1,"eq":1,"er":2,"cV":1,"cf":1,"cj":1,"C":1,"cl":2,"U":2,"ei":1,"d1":1,"cW":1,"dd":1,"dx":2,"dB":2,"h":1,"m":1,"dL":1,"f7":1,"F":1,"cd":1,"bv":1,"ar":1,"as":1,"p":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.o8
return{D:s("b2"),E:s("b3"),b:s("c1"),d:s("c2"),e:s("j<@>"),h:s("I"),C:s("B"),B:s("i"),l:s("oH"),c:s("bz<@>"),I:s("b8"),m:s("bB"),r:s("al<@>"),T:s("bC"),M:s("at"),p:s("u<@>"),s:s("S<n,bo>"),y:s("S<n,n>"),J:s("m<eE>"),L:s("m<eF>"),U:s("m<eI>"),R:s("m<eL>"),t:s("m<@>"),u:s("ck"),f:s("X<@,@>"),Z:s("bF"),O:s("bG"),P:s("a0"),K:s("G"),q:s("aa<a4>"),k:s("bi"),N:s("A"),w:s("iA"),aR:s("ew"),Q:s("cJ"),n:s("eB"),v:s("cK"),g:s("eC"),F:s("eD"),V:s("eG"),j:s("eH"),G:s("eJ"),a:s("eK"),o:s("bM"),cB:s("bo"),i:s("a3"),z:s("@"),b6:s("@(G)"),Y:s("@(G,cH)"),S:s("n"),A:s("0&*"),_:s("G*"),bc:s("bz<a0>?"),d1:s("cn?"),X:s("G?"),ba:s("bK?"),x:s("cE?"),cH:s("cF?"),aJ:s("eo?"),aX:s("ex?"),W:s("cK?"),H:s("a4")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.b3.prototype
C.H=J.a.prototype
C.a=J.al.prototype
C.b=J.cg.prototype
C.I=J.bC.prototype
C.c=J.bD.prototype
C.d=J.b9.prototype
C.J=J.at.prototype
C.q=J.e9.prototype
C.r=P.bK.prototype
C.i=J.bM.prototype
C.t=W.aR.prototype
C.u=W.bO.prototype
C.v=new E.bt("Browser.chrome")
C.j=new E.bt("Browser.firefox")
C.k=new E.bt("Browser.edge")
C.w=new E.bt("Browser.other")
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.D=new P.e7()
C.n=new P.iQ()
C.E=new P.iR()
C.o=new P.jj()
C.e=new P.jn()
C.F=new P.fC()
C.h=new P.b6(0)
C.G=new P.b6(5e6)
C.K=s([0,0,65498,45055,65535,34815,65534,18431])
C.L=new E.bI("OperatingSystem.windows")
C.p=new E.bI("OperatingSystem.mac")
C.M=new E.bI("OperatingSystem.linux")
C.N=new E.bI("OperatingSystem.other")
C.O=new P.bP(null,2)})();(function staticFields(){$.jk=null
$.ap=0
$.bZ=null
$.kw=null
$.ls=null
$.lp=null
$.lw=null
$.jD=null
$.jI=null
$.kq=null
$.bR=null
$.dh=null
$.di=null
$.kk=!1
$.K=C.e
$.a6=[]
$.hs=null
$.kF=null
$.cs=null
$.a1=null
$.av=null
$.kQ=null
$.bn=null
$.l2=null
$.iS=null
$.iT=null
$.iU=null
$.l1=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"oE","lD",function(){return H.oa("_$dart_dartClosure")})
s($,"oS","lF",function(){return H.ay(H.iG({
toString:function(){return"$receiver$"}}))})
s($,"oT","lG",function(){return H.ay(H.iG({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oU","lH",function(){return H.ay(H.iG(null))})
s($,"oV","lI",function(){return H.ay(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oY","lL",function(){return H.ay(H.iG(void 0))})
s($,"oZ","lM",function(){return H.ay(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oX","lK",function(){return H.ay(H.l_(null))})
s($,"oW","lJ",function(){return H.ay(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"p0","lO",function(){return H.ay(H.l_(void 0))})
s($,"p_","lN",function(){return H.ay(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"pe","ku",function(){return P.mN()})
s($,"pg","lS",function(){return P.mA("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"p7","lR",function(){return Z.ah(0)})
s($,"p1","lP",function(){return Z.ah(511)})
s($,"p9","ac",function(){return Z.ah(1)})
s($,"p8","b_",function(){return Z.ah(2)})
s($,"p3","aZ",function(){return Z.ah(4)})
s($,"pa","br",function(){return Z.ah(8)})
s($,"pb","b0",function(){return Z.ah(16)})
s($,"p4","dn",function(){return Z.ah(32)})
s($,"p5","dp",function(){return Z.ah(64)})
s($,"p6","lQ",function(){return Z.ah(96)})
s($,"pc","bX",function(){return Z.ah(128)})
s($,"p2","aY",function(){return Z.ah(256)})
s($,"oA","lC",function(){return new V.ht()})
r($,"oz","r",function(){return $.lC()})
r($,"oO","lE",function(){var q=V.kM(),p=V.k8(),o=$.l1
return V.kG(q,p,o==null?$.l1=V.mK(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cu,ArrayBufferView:H.cu,Float32Array:H.be,Float64Array:H.be,Int16Array:H.dZ,Int32Array:H.e_,Int8Array:H.e0,Uint16Array:H.e1,Uint32Array:H.e2,Uint8ClampedArray:H.cv,CanvasPixelArray:H.cv,Uint8Array:H.e3,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.h1,HTMLAnchorElement:W.dq,HTMLAreaElement:W.dr,Blob:W.dw,HTMLCanvasElement:W.b3,CanvasRenderingContext2D:W.c1,CDATASection:W.aj,CharacterData:W.aj,Comment:W.aj,ProcessingInstruction:W.aj,Text:W.aj,CSSPerspective:W.hh,CSSCharsetRule:W.E,CSSConditionRule:W.E,CSSFontFaceRule:W.E,CSSGroupingRule:W.E,CSSImportRule:W.E,CSSKeyframeRule:W.E,MozCSSKeyframeRule:W.E,WebKitCSSKeyframeRule:W.E,CSSKeyframesRule:W.E,MozCSSKeyframesRule:W.E,WebKitCSSKeyframesRule:W.E,CSSMediaRule:W.E,CSSNamespaceRule:W.E,CSSPageRule:W.E,CSSRule:W.E,CSSStyleRule:W.E,CSSSupportsRule:W.E,CSSViewportRule:W.E,CSSStyleDeclaration:W.c5,MSStyleCSSProperties:W.c5,CSS2Properties:W.c5,CSSImageValue:W.ae,CSSKeywordValue:W.ae,CSSNumericValue:W.ae,CSSPositionValue:W.ae,CSSResourceValue:W.ae,CSSUnitValue:W.ae,CSSURLImageValue:W.ae,CSSStyleValue:W.ae,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.hj,CSSUnparsedValue:W.hk,DataTransferItemList:W.hl,DOMException:W.hm,ClientRectList:W.c7,DOMRectList:W.c7,DOMRectReadOnly:W.c8,DOMStringList:W.dE,DOMTokenList:W.hn,Element:W.I,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.aF,FileList:W.dF,FileWriter:W.dG,HTMLFormElement:W.dI,Gamepad:W.aG,History:W.hB,HTMLCollection:W.b7,HTMLFormControlsCollection:W.b7,HTMLOptionsCollection:W.b7,ImageData:W.b8,HTMLImageElement:W.bB,KeyboardEvent:W.bb,Location:W.hK,MediaList:W.i0,MIDIInputMap:W.dW,MIDIOutputMap:W.dX,MimeType:W.aI,MimeTypeArray:W.dY,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cw,RadioNodeList:W.cw,Plugin:W.aK,PluginArray:W.eb,RTCStatsReport:W.ef,HTMLSelectElement:W.eh,SourceBuffer:W.aw,SourceBufferList:W.el,SpeechGrammar:W.aN,SpeechGrammarList:W.em,SpeechRecognitionResult:W.aO,Storage:W.ep,CSSStyleSheet:W.an,StyleSheet:W.an,TextTrack:W.ax,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.et,TextTrackList:W.eu,TimeRanges:W.iz,Touch:W.aP,TouchEvent:W.bl,TouchList:W.ey,TrackDefaultList:W.iD,CompositionEvent:W.az,FocusEvent:W.az,TextEvent:W.az,UIEvent:W.az,URL:W.iP,VideoTrackList:W.eS,WheelEvent:W.aR,Window:W.bO,DOMWindow:W.bO,CSSRuleList:W.f_,ClientRect:W.cS,DOMRect:W.cS,GamepadList:W.fd,NamedNodeMap:W.cX,MozNamedAttrMap:W.cX,SpeechRecognitionResultList:W.fw,StyleSheetList:W.fD,SVGLength:P.bc,SVGLengthList:P.dS,SVGNumber:P.bf,SVGNumberList:P.e5,SVGPointList:P.i7,SVGStringList:P.es,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bm,SVGTransformList:P.ez,AudioBuffer:P.h7,AudioParamMap:P.du,AudioTrackList:P.dv,AudioContext:P.aE,webkitAudioContext:P.aE,BaseAudioContext:P.aE,OfflineAudioContext:P.e6,WebGL2RenderingContext:P.bK,SQLResultSetRowList:P.en})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.be.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"
W.d7.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=U.oi
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
