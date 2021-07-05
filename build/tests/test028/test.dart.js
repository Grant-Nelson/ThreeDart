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
a[c]=function(){a[c]=function(){H.nV(b)}
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
if(a[b]!==s)H.nW(b)
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
ih:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ma:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ny:function(a,b,c){return a},
lP:function(a,b){if(t.c.b(a))return new H.c7(a,b)
return new H.bf(a,b)},
lI:function(){return new P.eh("No element")},
m9:function(a,b){H.ec(a,0,J.bq(a)-1,b)},
ec:function(a,b,c,d){if(c-b<=32)H.m8(a,b,c,d)
else H.m7(a,b,c,d)},
m8:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.fO(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ao()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
m7:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.a4(a4+a5,2),f=g-j,e=g+j,d=J.fO(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.U(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
n=a6.$2(o,b)
if(n===0)continue
if(n<0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else for(;!0;){n=a6.$2(d.h(a3,q),b)
if(n>0){--q
continue}else{m=q-1
if(n<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
q=m
r=l
break}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)<0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)>0)for(;!0;)if(a6.$2(d.h(a3,q),a0)>0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)}q=m
break}}k=!1}a2=r-1
d.k(a3,a4,d.h(a3,a2))
d.k(a3,a2,b)
a2=q+1
d.k(a3,a5,d.h(a3,a2))
d.k(a3,a2,a0)
H.ec(a3,a4,r-2,a6)
H.ec(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.U(a6.$2(d.h(a3,r),b),0);)++r
for(;J.U(a6.$2(d.h(a3,q),a0),0);)--q
for(p=r;p<=q;++p){o=d.h(a3,p)
if(a6.$2(o,b)===0){if(p!==r){d.k(a3,p,d.h(a3,r))
d.k(a3,r,o)}++r}else if(a6.$2(o,a0)===0)for(;!0;)if(a6.$2(d.h(a3,q),a0)===0){--q
if(q<p)break
continue}else{m=q-1
if(a6.$2(d.h(a3,q),b)<0){d.k(a3,p,d.h(a3,r))
l=r+1
d.k(a3,r,d.h(a3,q))
d.k(a3,q,o)
r=l}else{d.k(a3,p,d.h(a3,q))
d.k(a3,q,o)}q=m
break}}H.ec(a3,r,q,a6)}else H.ec(a3,r,q,a6)},
dK:function dK(a){this.a=a},
K:function K(a){this.a=a},
j:function j(){},
bA:function bA(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bf:function bf(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=null
this.b=a
this.c=b},
cP:function cP(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
c9:function c9(){},
eG:function eG(){},
bJ:function bJ(){},
l7:function(a){var s,r=H.l6(a)
if(r!=null)return r
s="minified:"+a
return s},
nM:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
q:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.fS(a)
return s},
cx:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cy:function(a){return H.lT(a)},
lT:function(a){var s,r,q,p
if(a instanceof P.J)return H.a9(H.bU(a),null)
if(J.df(a)===C.J||t.o.b(a)){s=C.n(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a9(H.bU(a),null)},
kj:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
m2:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.fN(q))throw H.c(H.jg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.bm(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.jg(q))}return H.kj(p)},
m1:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.fN(q))throw H.c(H.jg(q))
if(q<0)throw H.c(H.jg(q))
if(q>65535)return H.m2(a)}return H.kj(a)},
m0:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.bm(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.ax(a,0,1114111,null,null))},
bF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m_:function(a){var s=H.bF(a).getFullYear()+0
return s},
lY:function(a){var s=H.bF(a).getMonth()+1
return s},
lU:function(a){var s=H.bF(a).getDate()+0
return s},
lV:function(a){var s=H.bF(a).getHours()+0
return s},
lX:function(a){var s=H.bF(a).getMinutes()+0
return s},
lZ:function(a){var s=H.bF(a).getSeconds()+0
return s},
lW:function(a){var s=H.bF(a).getMilliseconds()+0
return s},
e:function(a,b){if(a==null)J.bq(a)
throw H.c(H.bS(a,b))},
bS:function(a,b){var s,r="index"
if(!H.fN(b))return new P.ao(!0,b,r,null)
s=J.bq(a)
if(b<0||b>=s)return P.F(b,a,r,null,s)
return P.e5(b,r)},
nC:function(a,b,c){if(a>c)return P.ax(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ax(b,a,c,"end",null)
return new P.ao(!0,b,"end",null)},
jg:function(a){return new P.ao(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dY()
s=new Error()
s.dartException=a
r=H.nX
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nX:function(){return J.fS(this.dartException)},
f:function(a){throw H.c(a)},
o:function(a){throw H.c(P.b5(a))},
aC:function(a){var s,r,q,p,o,n
a=H.l3(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iz(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iA:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kv:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jC:function(a,b){var s=b==null,r=s?null:b.method
return new H.dI(a,r,s?null:b.receiver)},
fQ:function(a){if(a==null)return new H.i_(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bp(a,a.dartException)
return H.nu(a)},
bp:function(a,b){if(t.d.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nu:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bm(r,16)&8191)===10)switch(q){case 438:return H.bp(a,H.jC(H.q(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.q(s)+" (Error "+q+")"
return H.bp(a,new H.cw(p,e))}}if(a instanceof TypeError){o=$.lb()
n=$.lc()
m=$.ld()
l=$.le()
k=$.lh()
j=$.li()
i=$.lg()
$.lf()
h=$.lk()
g=$.lj()
f=o.al(s)
if(f!=null)return H.bp(a,H.jC(s,f))
else{f=n.al(s)
if(f!=null){f.method="call"
return H.bp(a,H.jC(s,f))}else{f=m.al(s)
if(f==null){f=l.al(s)
if(f==null){f=k.al(s)
if(f==null){f=j.al(s)
if(f==null){f=i.al(s)
if(f==null){f=l.al(s)
if(f==null){f=h.al(s)
if(f==null){f=g.al(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bp(a,new H.cw(s,f==null?e:f.method))}}return H.bp(a,new H.eF(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cD()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bp(a,new P.ao(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cD()
return a},
jZ:function(a){var s
if(a==null)return new H.fp(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fp(a)},
nE:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nL:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nL)
a.$identity=s
return s},
lD:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ie().constructor.prototype):Object.create(new H.bW(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ap
if(typeof r!=="number")return r.a_()
$.ap=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.k6(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lz(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.k6(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lz:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.l_,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lx:H.lw
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lA:function(a,b,c,d){var s=H.k5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
k6:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lC(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lA(r,!p,s,b)
if(r===0){p=$.ap
if(typeof p!=="number")return p.a_()
$.ap=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bX
return new Function(p+(o==null?$.bX=H.h1("self"):o)+";return "+n+"."+H.q(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ap
if(typeof p!=="number")return p.a_()
$.ap=p+1
m+=p
p="return function("+m+"){return this."
o=$.bX
return new Function(p+(o==null?$.bX=H.h1("self"):o)+"."+H.q(s)+"("+m+");}")()},
lB:function(a,b,c,d){var s=H.k5,r=H.ly
switch(b?-1:a){case 0:throw H.c(new H.e8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lC:function(a,b){var s,r,q,p,o,n,m,l=$.bX
if(l==null)l=$.bX=H.h1("self")
s=$.k4
if(s==null)s=$.k4=H.h1("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lB(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.q(r)+"(this."+s+");"
n=$.ap
if(typeof n!=="number")return n.a_()
$.ap=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.q(r)+"(this."+s+", "+m+");"
n=$.ap
if(typeof n!=="number")return n.a_()
$.ap=n+1
return new Function(o+n+"}")()},
jX:function(a,b,c,d,e,f,g){return H.lD(a,b,c,d,!!e,!!f,g)},
lw:function(a,b){return H.fB(v.typeUniverse,H.bU(a.a),b)},
lx:function(a,b){return H.fB(v.typeUniverse,H.bU(a.c),b)},
k5:function(a){return a.a},
ly:function(a){return a.c},
h1:function(a){var s,r,q,p=new H.bW("self","target","receiver","name"),o=J.jA(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.js("Field name "+a+" not found."))},
nV:function(a){throw H.c(new P.du(a))},
nH:function(a){return v.getIsolateTag(a)},
nW:function(a){return H.f(new H.dK(a))},
oZ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nO:function(a){var s,r,q,p,o,n=$.kZ.$1(a),m=$.ji[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jn[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kW.$2(a,n)
if(q!=null){m=$.ji[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jn[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jo(s)
$.ji[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jn[n]=s
return s}if(p==="-"){o=H.jo(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l1(a,s)
if(p==="*")throw H.c(P.kw(n))
if(v.leafTags[n]===true){o=H.jo(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l1(a,s)},
l1:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k1(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jo:function(a){return J.k1(a,!1,null,!!a.$it)},
nQ:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jo(s)
else return J.k1(s,c,null,null)},
nJ:function(){if(!0===$.k_)return
$.k_=!0
H.nK()},
nK:function(){var s,r,q,p,o,n,m,l
$.ji=Object.create(null)
$.jn=Object.create(null)
H.nI()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l2.$1(o)
if(n!=null){m=H.nQ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nI:function(){var s,r,q,p,o,n,m=C.y()
m=H.bQ(C.z,H.bQ(C.A,H.bQ(C.o,H.bQ(C.o,H.bQ(C.B,H.bQ(C.C,H.bQ(C.D(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kZ=new H.jk(p)
$.kW=new H.jl(o)
$.l2=new H.jm(n)},
bQ:function(a,b){return a(b)||b},
lM:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hs("Illegal RegExp pattern ("+String(n)+")",a))},
l4:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nD:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l5:function(a,b,c){var s=H.nT(a,b,c)
return s},
nT:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l3(b),'g'),H.nD(c))},
iz:function iz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cw:function cw(a,b){this.a=a
this.b=b},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
i_:function i_(a){this.a=a},
fp:function fp(a){this.a=a
this.b=null},
bs:function bs(){},
ij:function ij(){},
ie:function ie(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e8:function e8(a){this.a=a},
Q:function Q(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hy:function hy(a){this.a=a},
hB:function hB(a,b){this.a=a
this.b=b
this.c=null},
aM:function aM(a){this.a=a},
dM:function dM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bO:function(a){return a},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bS(b,a))},
mJ:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nC(a,b,c))
return b},
ct:function ct(){},
bD:function bD(){},
bg:function bg(){},
cs:function cs(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
cu:function cu(){},
dX:function dX(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
kn:function(a,b){var s=b.c
return s==null?b.c=H.jQ(a,b.z,!0):s},
km:function(a,b){var s=b.c
return s==null?b.c=H.d7(a,"ka",[b.z]):s},
ko:function(a){var s=a.y
if(s===6||s===7||s===8)return H.ko(a.z)
return s===11||s===12},
m5:function(a){return a.cy},
nF:function(a){return H.jR(v.typeUniverse,a,!1)},
aY:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aY(a,s,a0,a1)
if(r===s)return b
return H.kL(a,r,!0)
case 7:s=b.z
r=H.aY(a,s,a0,a1)
if(r===s)return b
return H.jQ(a,r,!0)
case 8:s=b.z
r=H.aY(a,s,a0,a1)
if(r===s)return b
return H.kK(a,r,!0)
case 9:q=b.Q
p=H.de(a,q,a0,a1)
if(p===q)return b
return H.d7(a,b.z,p)
case 10:o=b.z
n=H.aY(a,o,a0,a1)
m=b.Q
l=H.de(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jO(a,n,l)
case 11:k=b.z
j=H.aY(a,k,a0,a1)
i=b.Q
h=H.nr(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kJ(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.de(a,g,a0,a1)
o=b.z
n=H.aY(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jP(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fV("Attempted to substitute unexpected RTI kind "+c))}},
de:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aY(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
ns:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aY(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nr:function(a,b,c,d){var s,r=b.a,q=H.de(a,r,c,d),p=b.b,o=H.de(a,p,c,d),n=b.c,m=H.ns(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.f2()
s.a=q
s.b=o
s.c=m
return s},
p0:function(a,b){a[v.arrayRti]=b
return a},
nz:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.l_(s)
return a.$S()}return null},
l0:function(a,b){var s
if(H.ko(b))if(a instanceof H.bs){s=H.nz(a)
if(s!=null)return s}return H.bU(a)},
bU:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.jS(a)}if(Array.isArray(a))return H.kO(a)
return H.jS(J.df(a))},
kO:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S:function(a){var s=a.$ti
return s!=null?s:H.jS(a)},
jS:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mQ(a,s)},
mQ:function(a,b){var s=a instanceof H.bs?a.__proto__.__proto__.constructor:b,r=H.mE(v.typeUniverse,s.name)
b.$ccache=r
return r},
l_:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jR(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mP:function(a){var s,r,q,p=this
if(p===t.K)return H.db(p,a,H.mU)
if(!H.aG(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.db(p,a,H.mX)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.fN
else if(r===t.i||r===t.H)q=H.mT
else if(r===t.N)q=H.mV
else q=r===t.cB?H.jT:null
if(q!=null)return H.db(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.nN)){p.r="$i"+s
return H.db(p,a,H.mW)}}else if(s===7)return H.db(p,a,H.mN)
return H.db(p,a,H.mL)},
db:function(a,b,c){a.b=c
return a.b(b)},
mO:function(a){var s,r=this,q=H.mK
if(!H.aG(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.mI
else if(r===t.K)q=H.mG
else{s=H.dg(r)
if(s)q=H.mM}r.a=q
return r.a(a)},
jW:function(a){var s,r=a.y
if(!H.aG(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.jW(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mL:function(a){var s=this
if(a==null)return H.jW(s)
return H.H(v.typeUniverse,H.l0(a,s),null,s,null)},
mN:function(a){if(a==null)return!0
return this.z.b(a)},
mW:function(a){var s,r=this
if(a==null)return H.jW(r)
s=r.r
if(a instanceof P.J)return!!a[s]
return!!J.df(a)[s]},
mK:function(a){var s,r=this
if(a==null){s=H.dg(r)
if(s)return a}else if(r.b(a))return a
H.kR(a,r)},
mM:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kR(a,s)},
kR:function(a,b){throw H.c(H.mu(H.kE(a,H.l0(a,b),H.a9(b,null))))},
kE:function(a,b,c){var s=P.hn(a),r=H.a9(b==null?H.bU(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
mu:function(a){return new H.d5("TypeError: "+a)},
a1:function(a,b){return new H.d5("TypeError: "+H.kE(a,null,b))},
mU:function(a){return a!=null},
mG:function(a){if(a!=null)return a
throw H.c(H.a1(a,"Object"))},
mX:function(a){return!0},
mI:function(a){return a},
jT:function(a){return!0===a||!1===a},
kP:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a1(a,"bool"))},
oO:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a1(a,"bool"))},
oN:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a1(a,"bool?"))},
oP:function(a){if(typeof a=="number")return a
throw H.c(H.a1(a,"double"))},
oR:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a1(a,"double"))},
oQ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a1(a,"double?"))},
fN:function(a){return typeof a=="number"&&Math.floor(a)===a},
fM:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a1(a,"int"))},
oT:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a1(a,"int"))},
oS:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a1(a,"int?"))},
mT:function(a){return typeof a=="number"},
oU:function(a){if(typeof a=="number")return a
throw H.c(H.a1(a,"num"))},
oW:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a1(a,"num"))},
oV:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a1(a,"num?"))},
mV:function(a){return typeof a=="string"},
mH:function(a){if(typeof a=="string")return a
throw H.c(H.a1(a,"String"))},
oY:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a1(a,"String"))},
oX:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a1(a,"String?"))},
nn:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a9(a[q],b)
return s},
kS:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.e(a5,j)
m=C.d.a_(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a9(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a9(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a9(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a9(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a9(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a9:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a9(a.z,b)
return s}if(l===7){r=a.z
s=H.a9(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a9(a.z,b)+">"
if(l===9){p=H.nt(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nn(o,b)+">"):p}if(l===11)return H.kS(a,b,null)
if(l===12)return H.kS(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nt:function(a){var s,r=H.l6(a)
if(r!=null)return r
s="minified:"+a
return s},
kM:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mE:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jR(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d8(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d7(a,b,q)
n[b]=o
return o}else return m},
mC:function(a,b){return H.kN(a.tR,b)},
mB:function(a,b){return H.kN(a.eT,b)},
jR:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kI(H.kG(a,null,b,c))
r.set(b,s)
return s},
fB:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kI(H.kG(a,b,c,!0))
q.set(c,r)
return r},
mD:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jO(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aX:function(a,b){b.a=H.mO
b.b=H.mP
return b},
d8:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ae(null,null)
s.y=b
s.cy=c
r=H.aX(a,s)
a.eC.set(c,r)
return r},
kL:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mz(a,b,r,c)
a.eC.set(r,s)
return s},
mz:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aG(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ae(null,null)
q.y=6
q.z=b
q.cy=c
return H.aX(a,q)},
jQ:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.my(a,b,r,c)
a.eC.set(r,s)
return s},
my:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aG(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dg(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dg(q.z))return q
else return H.kn(a,b)}}p=new H.ae(null,null)
p.y=7
p.z=b
p.cy=c
return H.aX(a,p)},
kK:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mw(a,b,r,c)
a.eC.set(r,s)
return s},
mw:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aG(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d7(a,"ka",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ae(null,null)
q.y=8
q.z=b
q.cy=c
return H.aX(a,q)},
mA:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ae(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aX(a,s)
a.eC.set(q,r)
return r},
fA:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mv:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d7:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fA(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ae(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aX(a,r)
a.eC.set(p,q)
return q},
jO:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fA(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ae(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aX(a,o)
a.eC.set(q,n)
return n},
kJ:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fA(m)
if(j>0){s=l>0?",":""
r=H.fA(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mv(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ae(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aX(a,o)
a.eC.set(q,r)
return r},
jP:function(a,b,c,d){var s,r=b.cy+("<"+H.fA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mx(a,b,c,r,d)
a.eC.set(r,s)
return s},
mx:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aY(a,b,r,0)
m=H.de(a,c,r,0)
return H.jP(a,n,m,c!==m)}}l=new H.ae(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aX(a,l)},
kG:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kI:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mo(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kH(a,r,h,g,!1)
else if(q===46)r=H.kH(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aW(a.u,a.e,g.pop()))
break
case 94:g.push(H.mA(a.u,g.pop()))
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
else{m=H.aW(p,a.e,n)
switch(m.y){case 11:g.push(H.jP(p,m,o,a.n))
break
default:g.push(H.jO(p,m,o))
break}}break
case 38:H.mp(a,g)
break
case 42:p=a.u
g.push(H.kL(p,H.aW(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.jQ(p,H.aW(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.kK(p,H.aW(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.f2()
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
g.push(H.kJ(p,H.aW(p,a.e,g.pop()),l))
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
H.mr(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aW(a.u,a.e,i)},
mo:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kH:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kM(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.m5(o)+'"')
d.push(H.fB(s,o,n))}else d.push(p)
return m},
mp:function(a,b){var s=b.pop()
if(0===s){b.push(H.d8(a.u,1,"0&"))
return}if(1===s){b.push(H.d8(a.u,4,"1&"))
return}throw H.c(P.fV("Unexpected extended operation "+H.q(s)))},
aW:function(a,b,c){if(typeof c=="string")return H.d7(a,c,a.sEA)
else if(typeof c=="number")return H.mq(a,b,c)
else return c},
jN:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aW(a,b,c[s])},
mr:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aW(a,b,c[s])},
mq:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fV("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fV("Bad index "+c+" for "+b.i(0)))},
H:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aG(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aG(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.H(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.H(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.H(a,b.z,c,d,e)
if(r===6)return H.H(a,b.z,c,d,e)
return r!==7}if(r===6)return H.H(a,b.z,c,d,e)
if(p===6){s=H.kn(a,d)
return H.H(a,b,c,s,e)}if(r===8){if(!H.H(a,b.z,c,d,e))return!1
return H.H(a,H.km(a,b),c,d,e)}if(r===7){s=H.H(a,t.P,c,d,e)
return s&&H.H(a,b.z,c,d,e)}if(p===8){if(H.H(a,b,c,d.z,e))return!0
return H.H(a,b,c,H.km(a,d),e)}if(p===7){s=H.H(a,b,c,t.P,e)
return s||H.H(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.e)return!0
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
if(!H.H(a,k,c,j,e)||!H.H(a,j,e,k,c))return!1}return H.kT(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.kT(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mS(a,b,c,d,e)}return!1},
kT:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.H(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.H(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.H(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.H(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.H(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mS:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.H(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kM(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.H(a,H.fB(a,b,l[p]),c,r[p],e))return!1
return!0},
dg:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aG(a))if(r!==7)if(!(r===6&&H.dg(a.z)))s=r===8&&H.dg(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nN:function(a){var s
if(!H.aG(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aG:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kN:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ae:function ae(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f2:function f2(){this.c=this.b=this.a=null},
eY:function eY(){},
d5:function d5(a){this.a=a},
l6:function(a){return v.mangledGlobalNames[a]},
nR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jj:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.k_==null){H.nJ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.kw("Return interceptor for "+H.q(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.j0
if(o==null)o=$.j0=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.nO(a)
if(p!=null)return p
if(typeof a=="function")return C.L
s=Object.getPrototypeOf(a)
if(s==null)return C.r
if(s===Object.prototype)return C.r
if(typeof q=="function"){o=$.j0
if(o==null)o=$.j0=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lJ:function(a){if(a<0||a>4294967295)throw H.c(P.ax(a,0,4294967295,"length",null))
return J.lK(new Array(a))},
jz:function(a){if(a<0)throw H.c(P.js("Length must be a non-negative integer: "+a))
return new Array(a)},
lK:function(a){return J.jA(a)},
jA:function(a){a.fixed$length=Array
return a},
lL:function(a,b){return J.ls(a,b)},
df:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cf.prototype
return J.dG.prototype}if(typeof a=="string")return J.bb.prototype
if(a==null)return J.cg.prototype
if(typeof a=="boolean")return J.dF.prototype
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.J)return a
return J.jj(a)},
fO:function(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.J)return a
return J.jj(a)},
jY:function(a){if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.J)return a
return J.jj(a)},
nG:function(a){if(typeof a=="number")return J.bz.prototype
if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bI.prototype
return a},
bo:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.at.prototype
return a}if(a instanceof P.J)return a
return J.jj(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.df(a).n(a,b)},
lp:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nM(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fO(a).h(a,b)},
lq:function(a,b,c){return J.bo(a).fz(a,b,c)},
lr:function(a,b,c,d){return J.bo(a).fO(a,b,c,d)},
ls:function(a,b){return J.nG(a).ai(a,b)},
jq:function(a,b){return J.jY(a).D(a,b)},
jr:function(a,b){return J.jY(a).F(a,b)},
lt:function(a){return J.bo(a).gdd(a)},
lu:function(a){return J.bo(a).gdg(a)},
fR:function(a){return J.df(a).gE(a)},
aI:function(a){return J.jY(a).gO(a)},
bq:function(a){return J.fO(a).gj(a)},
lv:function(a,b){return J.bo(a).hm(a,b)},
fS:function(a){return J.df(a).i(a)},
a:function a(){},
dF:function dF(){},
cg:function cg(){},
bc:function bc(){},
e2:function e2(){},
bI:function bI(){},
at:function at(){},
al:function al(){},
dH:function dH(){},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bz:function bz(){},
cf:function cf(){},
dG:function dG(){},
bb:function bb(){}},P={
mh:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nv()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bR(new P.iX(q),1)).observe(s,{childList:true})
return new P.iW(q,s,r)}else if(self.setImmediate!=null)return P.nw()
return P.nx()},
mi:function(a){self.scheduleImmediate(H.bR(new P.iY(a),0))},
mj:function(a){self.setImmediate(H.bR(new P.iZ(a),0))},
mk:function(a){P.jH(C.j,a)},
jH:function(a,b){var s=C.b.a4(a.a,1000)
return P.ms(s<0?0:s,b)},
ku:function(a,b){var s=C.b.a4(a.a,1000)
return P.mt(s<0?0:s,b)},
ms:function(a,b){var s=new P.d4()
s.e8(a,b)
return s},
mt:function(a,b){var s=new P.d4()
s.e9(a,b)
return s},
oL:function(a){return new P.bM(a,1)},
ml:function(){return C.Q},
mm:function(a){return new P.bM(a,3)},
mZ:function(a){return new P.d1(a)},
nk:function(){var s,r
for(s=$.bP;s!=null;s=$.bP){$.dd=null
r=s.b
$.bP=r
if(r==null)$.dc=null
s.a.$0()}},
nq:function(){$.jU=!0
try{P.nk()}finally{$.dd=null
$.jU=!1
if($.bP!=null)$.k3().$1(P.kX())}},
no:function(a){var s=new P.eN(a),r=$.dc
if(r==null){$.bP=$.dc=s
if(!$.jU)$.k3().$1(P.kX())}else $.dc=r.b=s},
np:function(a){var s,r,q,p=$.bP
if(p==null){P.no(a)
$.dd=$.dc
return}s=new P.eN(a)
r=$.dd
if(r==null){s.b=p
$.bP=$.dd=s}else{q=r.b
s.b=q
$.dd=r.b=s
if(q==null)$.dc=s}},
kt:function(a,b){var s=$.an
if(s===C.e)return P.jH(a,b)
return P.jH(a,s.fS(b))},
md:function(a,b){var s=$.an
if(s===C.e)return P.ku(a,b)
return P.ku(a,s.d9(b,t.w))},
kU:function(a,b,c,d,e){P.np(new P.jf(d,e))},
nl:function(a,b,c,d){var s,r=$.an
if(r===c)return d.$0()
$.an=c
s=r
try{r=d.$0()
return r}finally{$.an=s}},
nm:function(a,b,c,d,e){var s,r=$.an
if(r===c)return d.$1(e)
$.an=c
s=r
try{r=d.$1(e)
return r}finally{$.an=s}},
iX:function iX(a){this.a=a},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
d4:function d4(){this.c=0},
j7:function j7(a,b){this.a=a
this.b=b},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b){this.a=a
this.b=b},
bN:function bN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d1:function d1(a){this.a=a},
eN:function eN(a){this.a=a
this.b=null},
ej:function ej(){},
ek:function ek(){},
j9:function j9(){},
jf:function jf(a,b){this.a=a
this.b=b},
j3:function j3(){},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function(a,b,c){return H.nE(a,new H.Q(b.aq("@<0>").cL(c).aq("Q<1,2>")))},
M:function(a,b){return new H.Q(a.aq("@<0>").cL(b).aq("Q<1,2>"))},
kc:function(a){return new P.cR(a.aq("cR<0>"))},
jM:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mn:function(a,b){var s=new P.cS(a,b)
s.c=a.e
return s},
lH:function(a,b,c){var s,r
if(P.jV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a6.push(a)
try{P.mY(a,s)}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}r=P.kp(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jy:function(a,b,c){var s,r
if(P.jV(a))return b+"..."+c
s=new P.aT(b)
$.a6.push(a)
try{r=s
r.a=P.kp(r.a,a,", ")}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jV:function(a){var s,r
for(s=$.a6.length,r=0;r<s;++r)if(a===$.a6[r])return!0
return!1},
mY:function(a,b){var s,r,q,p,o,n,m,l=a.gO(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.q(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.t()){if(j<=4){b.push(H.q(p))
return}r=H.q(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.t();p=o,o=n){n=l.gC(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.q(p)
r=H.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
kd:function(a){var s,r={}
if(P.jV(a))return"{...}"
s=new P.aT("")
try{$.a6.push(a)
s.a+="{"
r.a=!0
J.jr(a,new P.hG(r,s))
s.a+="}"}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cR:function cR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j2:function j2(a){this.a=a
this.c=this.b=null},
cS:function cS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ce:function ce(){},
cj:function cj(){},
B:function B(){},
cl:function cl(){},
hG:function hG(a,b){this.a=a
this.b=b},
T:function T(){},
ea:function ea(){},
cZ:function cZ(){},
cT:function cT(){},
d9:function d9(){},
dr:function dr(){},
dt:function dt(){},
hj:function hj(){},
iJ:function iJ(){},
iK:function iK(){},
j8:function j8(a){this.b=0
this.c=a},
lG:function(a){if(a instanceof H.bs)return a.i(0)
return"Instance of '"+H.cy(a)+"'"},
hC:function(a,b,c){var s,r=c?J.jz(a):J.lJ(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hD:function(a,b){var s,r=[]
for(s=J.aI(a);s.t();)r.push(s.gC(s))
if(b)return r
return J.jA(r)},
lO:function(a,b){var s,r,q=J.jz(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
jG:function(a){var s=a,r=s.length,q=P.jE(0,null,r)
return H.m1(q<r?s.slice(0,q):s)},
m3:function(a){return new H.hx(a,H.lM(a,!1,!0,!1,!1,!1))},
kp:function(a,b,c){var s=J.aI(b)
if(!s.t())return a
if(c.length===0){do a+=H.q(s.gC(s))
while(s.t())}else{a+=H.q(s.gC(s))
for(;s.t();)a=a+c+H.q(s.gC(s))}return a},
mF:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.p){s=$.lo().b
s=s.test(b)}else s=!1
if(s)return b
r=C.F.fW(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.m0(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lE:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dv:function(a){if(a>=10)return""+a
return"0"+a},
k8:function(a){return new P.b7(1000*a)},
hn:function(a){if(typeof a=="number"||H.jT(a)||null==a)return J.fS(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lG(a)},
fV:function(a){return new P.dm(a)},
js:function(a){return new P.ao(!1,null,null,a)},
e5:function(a,b){return new P.cz(null,null,!0,a,b,"Value not in range")},
ax:function(a,b,c,d,e){return new P.cz(b,c,!0,a,d,"Invalid value")},
jE:function(a,b,c){if(a>c)throw H.c(P.ax(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ax(b,a,c,"end",null))
return b}return c},
kk:function(a,b){if(a<0)throw H.c(P.ax(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bq(b):e
return new P.dD(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eH(a)},
kw:function(a){return new P.eE(a)},
b5:function(a){return new P.ds(a)},
d:function(a){return new P.f_(a)},
k2:function(a){H.nR(a)},
P:function P(a,b){this.a=a
this.b=b},
b7:function b7(a){this.a=a},
hg:function hg(){},
hh:function hh(){},
D:function D(){},
dm:function dm(a){this.a=a},
eu:function eu(){},
dY:function dY(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function cz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dD:function dD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eH:function eH(a){this.a=a},
eE:function eE(a){this.a=a},
eh:function eh(a){this.a=a},
ds:function ds(a){this.a=a},
e0:function e0(){},
cD:function cD(){},
du:function du(a){this.a=a},
f_:function f_(a){this.a=a},
hs:function hs(a,b){this.a=a
this.b=b},
h:function h(){},
dE:function dE(){},
ad:function ad(){},
J:function J(){},
aT:function aT(a){this.a=a},
nB:function(a){var s,r,q,p
if(t.I.b(a)){s=J.lu(a)
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
return new P.d6(r,q,p)},
nA:function(a){if(a instanceof P.d6)return{data:a.a,height:a.b,width:a.c}
return a},
aZ:function(a){var s,r,q,p,o
if(a==null)return null
s=P.M(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
kQ:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jT(a))return a
if(t.f.b(a))return P.kY(a)
if(t.t.b(a)){s=[]
J.jr(a,new P.jb(s))
a=s}return a},
kY:function(a){var s={}
J.jr(a,new P.jh(s))
return s},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
jh:function jh(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
hq:function hq(){},
hr:function hr(){},
fi:function fi(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
dL:function dL(){},
bh:function bh(){},
dZ:function dZ(){},
i1:function i1(){},
el:function el(){},
k:function k(){},
bl:function bl(){},
et:function et(){},
f6:function f6(){},
f7:function f7(){},
fe:function fe(){},
ff:function ff(){},
fr:function fr(){},
fs:function fs(){},
fy:function fy(){},
fz:function fz(){},
fY:function fY(){},
dn:function dn(){},
fZ:function fZ(a){this.a=a},
dp:function dp(){},
aJ:function aJ(){},
e_:function e_(){},
eO:function eO(){},
bG:function bG(){},
ef:function ef(){},
fn:function fn(){},
fo:function fo(){}},W={
ju:function(){var s=document.createElement("canvas")
s.toString
return s},
hi:function(a){return"wheel"},
j1:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kF:function(a,b,c,d){var s=W.j1(W.j1(W.j1(W.j1(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
X:function(a,b,c,d){var s=W.kV(new W.j_(c),t.B)
if(s!=null&&!0)J.lr(a,b,s,!1)
return new W.eZ(a,b,s,!1)},
kV:function(a,b){var s=$.an
if(s===C.e)return a
return s.d9(a,b)},
l:function l(){},
fT:function fT(){},
dk:function dk(){},
dl:function dl(){},
dq:function dq(){},
b4:function b4(){},
c_:function c_(){},
aj:function aj(){},
h8:function h8(){},
C:function C(){},
c2:function c2(){},
h9:function h9(){},
ac:function ac(){},
aq:function aq(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
he:function he(){},
c5:function c5(){},
c6:function c6(){},
dw:function dw(){},
hf:function hf(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
G:function G(){},
i:function i(){},
b:function b(){},
aK:function aK(){},
dx:function dx(){},
dy:function dy(){},
dA:function dA(){},
aL:function aL(){},
hv:function hv(){},
b9:function b9(){},
ba:function ba(){},
by:function by(){},
bd:function bd(){},
hE:function hE(){},
hW:function hW(){},
dP:function dP(){},
hX:function hX(a){this.a=a},
dQ:function dQ(){},
hY:function hY(a){this.a=a},
aN:function aN(){},
dR:function dR(){},
a7:function a7(){},
eP:function eP(a){this.a=a},
v:function v(){},
cv:function cv(){},
aP:function aP(){},
e3:function e3(){},
e7:function e7(){},
i8:function i8(a){this.a=a},
e9:function e9(){},
aA:function aA(){},
ed:function ed(){},
aR:function aR(){},
ee:function ee(){},
aS:function aS(){},
ei:function ei(){},
ig:function ig(a){this.a=a},
am:function am(){},
aB:function aB(){},
af:function af(){},
em:function em(){},
en:function en(){},
it:function it(){},
aU:function aU(){},
bk:function bk(){},
es:function es(){},
ix:function ix(){},
aD:function aD(){},
iI:function iI(){},
eK:function eK(){},
aV:function aV(){},
bL:function bL(){},
eR:function eR(){},
cQ:function cQ(){},
f3:function f3(){},
cU:function cU(){},
fm:function fm(){},
ft:function ft(){},
jw:function jw(a,b){this.a=a
this.$ti=b},
eZ:function eZ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j_:function j_(a){this.a=a},
jL:function jL(a){this.$ti=a},
E:function E(){},
ca:function ca(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
f0:function f0(){},
f1:function f1(){},
f4:function f4(){},
f5:function f5(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fg:function fg(){},
fh:function fh(){},
fj:function fj(){},
d_:function d_(){},
d0:function d0(){},
fk:function fk(){},
fl:function fl(){},
fq:function fq(){},
fu:function fu(){},
fv:function fv(){},
d2:function d2(){},
d3:function d3(){},
fw:function fw(){},
fx:function fx(){},
fC:function fC(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){}},K={fU:function fU(){},dC:function dC(){},aO:function aO(a){this.a=a},R:function R(a){this.a=a}},L={eg:function eg(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},er:function er(a,b){this.b=a
this.c=b},iv:function iv(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},iy:function iy(a,b){this.b=a
this.c=!1
this.a=b}},O={
h3:function(){return new O.bt([])},
bt:function bt(a){this.a=a
this.c=this.b=null},
cr:function cr(a){this.a=a
this.b=null},
kb:function(a,b){var s,r=V.jD(),q=V.kB(),p=$.ag
r=new O.dB(r,q,p==null?$.ag=new V.O(0,0):p)
q=V.jD()
r.shs(q)
q=V.kB()
r.sbW(q)
if(a==null){q=$.ag
if(q==null){q=new V.O(0,0)
$.ag=q}}else q=a
if(!r.d.n(0,q)){s=r.d
r.d=q
r.w(new D.p("blurDirection",s,q))}r.sdf(b)
r.sbX(null)
r.sbY(0)
return r},
dO:function(a,b){return new O.cp(new V.I(0,0,0),a,b,new A.ab(!1,!1,!1))},
kr:function(a,b){var s=V.a5(),r=V.i3()
return new O.cF(b,s,r,a)},
hd:function hd(){var _=this
_.a=null
_.b=1
_.c=10
_.f=_.e=_.d=!1
_.r=null},
dB:function dB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.f=_.e=null
_.r=0
_.x=null},
dN:function dN(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){},
hT:function hT(a,b){this.a=a
this.b=b},
hU:function hU(){},
hH:function hH(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
co:function co(){},
hI:function hI(a,b,c){var _=this
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
hK:function hK(a){this.b=a},
hL:function hL(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hM:function hM(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
eb:function eb(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
ik:function ik(){},
eo:function eo(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=0
_.e=c
_.f=d
_.r=null},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.f=null}},E={
hk:function(a){var s=O.h3(),r=new E.bw(s)
s.aI(r.gh7(),r.gha())
r.scA(0,a)
r.sdG(null)
return r},
kC:function(){var s=window.navigator.vendor
s.toString
if(C.d.H(s,"Google"))return C.w
s=window.navigator.userAgent
s.toString
if(C.d.H(s,"Firefox"))return C.l
s=window.navigator.appVersion
s.toString
if(C.d.H(s,"Trident")||C.d.H(s,"Edge"))return C.m
s=window.navigator.appName
s.toString
if(C.d.H(s,"Microsoft"))return C.m
return C.x},
kD:function(){var s=window.navigator.appVersion
s.toString
if(C.d.H(s,"Win"))return C.N
if(C.d.H(s,"Mac"))return C.q
if(C.d.H(s,"Linux"))return C.O
return C.P},
m4:function(a,b){var s
Date.now()
s=new E.i4(a,new P.P(Date.now(),!1),new P.P(Date.now(),!1),new O.cr([]),new O.cr([]),new O.cr([]),[null],P.M(t.N,t.k))
s.e4(a,b)
return s},
mc:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.ks(a,!0,!0,!0,!1)
s=W.ju()
r=s.style
r.width="100%"
r.height="100%"
J.lt(a).l(0,s)
return E.ks(s,!0,!0,!0,!1)},
ks:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.h.cv(a,"webgl2",P.lN(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.d("Failed to get the rendering context for WebGL."))
s=E.m4(l,a)
H.fM(l.getParameter(3379))
m=H.fM(l.getParameter(34076))
r=[]
q=$.hl
p=new X.eI(a,r,(q==null?$.hl=new E.eX(E.kC(),E.kD()):q).a===C.l?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.X(o,"contextmenu",p.geN(),!1))
r.push(W.X(a,"focus",p.geX(),!1))
r.push(W.X(a,"blur",p.geH(),!1))
r.push(W.X(o,"keyup",p.gf0(),!1))
r.push(W.X(o,"keydown",p.geZ(),!1))
r.push(W.X(a,"mousedown",p.gf4(),!1))
r.push(W.X(a,"mouseup",p.gf8(),!1))
r.push(W.X(a,n,p.gf6(),!1))
W.hi(a)
W.hi(a)
r.push(W.X(a,W.hi(a),p.gfa(),!1))
r.push(W.X(o,n,p.geP(),!1))
r.push(W.X(o,"mouseup",p.geR(),!1))
r.push(W.X(o,"pointerlockchange",p.gfc(),!1))
r.push(W.X(a,"touchstart",p.gft(),!1))
r.push(W.X(a,"touchend",p.gfo(),!1))
r.push(W.X(a,"touchmove",p.gfq(),!1))
m=new E.ep(a,s,new T.iq(l,m),p,new P.P(Date.now(),!1))
m.cY()
return m},
h0:function h0(){},
bw:function bw(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
br:function br(a){this.b=a},
bE:function bE(a){this.b=a},
eX:function eX(a,b){this.a=a
this.b=b},
i4:function i4(a,b,c,d,e,f,g,h){var _=this
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
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
ep:function ep(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
is:function is(a){this.a=a}},Z={
jK:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bO(c)),35044)
a.bindBuffer(b,null)
return new Z.eL(b,s)},
ah:function(a){return new Z.aE(a)},
eL:function eL(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bm:function bm(a){this.a=a},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a){this.a=a}},D={
y:function(){return new D.b8()},
h2:function h2(){},
b8:function b8(){var _=this
_.c=_.b=_.a=null
_.d=0},
ho:function ho(a){this.a=a},
hp:function hp(a){this.a=a},
L:function L(){},
ar:function ar(){},
as:function as(){},
p:function p(a,b,c){this.c=a
this.d=b
this.e=c},
k7:function(a,b){var s=new D.c4(new V.I(1,1,1),V.mg(),V.jJ(),V.mf()),r=s.a
s.a=b
b.gm().l(0,s.ge6())
s.av(new D.p("mover",r,s.a))
if(!s.b.n(0,a)){r=s.b
s.b=a
s.av(new D.p("color",r,a))}return s},
c4:function c4(a,b,c,d){var _=this
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
_.c=_.b=null}},X={bZ:function bZ(a,b){this.a=a
this.b=b},dJ:function dJ(a,b){this.a=a
this.b=b},hz:function hz(a,b){this.c=a
this.d=b},ck:function ck(a,b,c){this.x=a
this.c=b
this.d=c},hF:function hF(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},bB:function bB(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},hZ:function hZ(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bC:function bC(a,b,c){this.x=a
this.c=b
this.d=c},e4:function e4(){},cG:function cG(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iw:function iw(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eI:function eI(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
jt:function(a,b,c,d){var s,r,q,p,o=T.kq(null)
o=new X.h_(o,new V.aa(0,0,0,1),V.i3())
o.san(0,512)
o.saj(0,512)
s=new V.aa(0,0,0,1)
if(!o.cx.n(0,s)){r=o.cx
o.cx=s
o.X(new D.p("color",r,s))}if(o.cy!==d){o.cy=d
o.X(new D.p("clearColor",!d,d))}q=o.db
$.w().toString
if(!(Math.abs(q-2000)<1e-9)){o.db=2000
o.X(new D.p("depth",q,2000))}if(!o.f){o.f=!0
o.X(new D.p("autoResize",!1,!0))}q=o.r
$.w().toString
if(!(Math.abs(q-b)<1e-9)){o.r=b
o.X(new D.p("autoResizeScalarX",q,b))}q=o.x
$.w().toString
if(!(Math.abs(q-c)<1e-9)){o.x=c
o.X(new D.p("autoResizeScalarY",q,c))}p=V.i3()
if(!o.dy.n(0,p)){r=o.dy
o.dy=p
o.X(new D.p("region",r,p))}return o},
jx:function(a,b){var s=new V.aa(0,0,0,1),r=V.i3()
return new X.ht(s,a,r)},
kh:function(a){var s,r,q=new X.e1(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().l(0,q.gea())
q.X(new D.p("mover",s,q.b))}r=q.c
$.w().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.X(new D.p("fov",r,1.0471975511965976))}r=q.d
$.w().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.X(new D.p("near",r,0.1))}r=q.e
$.w().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.X(new D.p("far",r,2000))}return q},
h_:function h_(a,b,c){var _=this
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
ht:function ht(a,b,c){var _=this
_.a=a
_.b=b
_.r=c
_.x=null},
hw:function hw(){this.b=null},
e1:function e1(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
ii:function ii(){}},V={
h4:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aa(s,r,q,1)},
k0:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
nY:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.c.dT(a-b,s)
return(a<0?a+s:a)+b},
u:function(a,b,c){$.w().toString
return C.d.am(C.c.cs(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bT:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.w().toString
n=C.d.am(C.c.cs(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.e(l,m)
s=C.d.am(l[m],q)
r=l.length
if(m>=r)return H.e(l,m)
l[m]=s}return l},
dh:function(a){return C.c.ht(Math.pow(2,C.c.ce(Math.log(a)/Math.log(2))))},
jD:function(){var s=$.ke
return s==null?$.ke=new V.cq(1,0,0,0,1,0,0,0,1):s},
a5:function(){var s=$.hV
return s==null?$.hV=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lS:function(a,b,c){return V.av(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lR:function(a,b,c){return V.av(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kg:function(a,b,c,d){d=V.jJ()
return V.kf(V.ki(),d,new V.z(a,b,c))},
kf:function(a,b,c){var s=c.I(),r=b.ba(s).I(),q=s.ba(r),p=new V.z(a.a,a.b,a.c)
return V.av(r.a,q.a,s.a,r.b_(0).a8(p),r.b,q.b,s.b,q.b_(0).a8(p),r.c,q.c,s.c,s.b_(0).a8(p),0,0,0,1)},
ki:function(){var s=$.aw
return s==null?$.aw=new V.W(0,0,0):s},
i3:function(){var s=$.kl
return s==null?$.kl=V.i2(0,0,1,1):s},
i2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e6(a,b,c,d)},
eJ:function(){var s=$.kz
return s==null?$.kz=new V.z(0,0,0):s},
mf:function(){var s=$.iL
return s==null?$.iL=new V.z(-1,0,0):s},
jJ:function(){var s=$.iM
return s==null?$.iM=new V.z(0,1,0):s},
mg:function(){var s=$.iN
return s==null?$.iN=new V.z(0,0,1):s},
me:function(a,b,c){return new V.z(a,b,c)},
kB:function(){var s=$.kA
return s==null?$.kA=new V.bK(0,0,0,0):s},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(){},
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
au:function au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
N:function N(a,b){this.a=a
this.b=b},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nS:function(a){P.md(C.I,new V.jp(a))},
m6:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.X(n,"scroll",new V.id(s),!1)
return new V.ib(o)},
jp:function jp(a){this.a=a},
ib:function ib(a){this.a=a
this.b=null},
id:function id(a){this.a=a},
ic:function ic(a){this.a=a}},U={
h6:function(){return new U.h5()},
jv:function(a){var s=V.a5(),r=new U.bv(s)
if(!s.n(0,a))r.a=a
return r},
h5:function h5(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
bv:function bv(a){this.a=a
this.b=null},
bx:function bx(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a_:function a_(){},
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
_.r=null}},M={
h7:function(a,b){var s,r,q,p,o=null,n=E.hk(o),m=new M.c1(n),l=F.jF(),k=l.ga2(),j=new V.z(-1,-1,1).I(),i=k.bp(new V.aQ(1,2,4,6),V.h4(255,0,0),new V.W(-1,-1,0),new V.N(0,1),j,o)
j=l.ga2()
k=new V.z(1,-1,1).I()
s=j.bp(new V.aQ(0,3,4,6),V.h4(0,0,255),new V.W(1,-1,0),new V.N(1,1),k,o)
k=l.ga2()
j=new V.z(1,1,1).I()
r=k.bp(new V.aQ(0,2,5,6),V.h4(0,128,0),new V.W(1,1,0),new V.N(1,0),j,o)
j=l.ga2()
k=$.a0
if(k==null)k=$.a0=new V.N(0,0)
q=new V.z(-1,1,1).I()
p=j.bp(new V.aQ(0,2,4,7),V.h4(255,255,0),new V.W(-1,1,0),k,q,o)
l.ga1().fP([i,s,r,p])
l.aB()
n.scA(0,l)
m.saR(o)
m.sau(0,a)
m.saG(b)
return m},
k9:function(){var s,r=O.h3(),q=new M.c8(r)
r.aI(q.geJ(),q.geL())
s=X.jx(!0,null)
q.saR(null)
q.sau(0,s)
q.saG(null)
return q},
c0:function c0(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
c1:function c1(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
c8:function c8(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},
cb:function cb(a){var _=this
_.b=null
_.c=a
_.r=_.f=_.e=_.d=null}},A={
lQ:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gap(a5)+a6.gap(a6)+a7.gap(a7)+a8.gap(a8)+a9.gap(a9)+b0.gap(b0)+b1.gap(b1)+b2.gap(b2)+b3.gap(b3)+"_"
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
b=$.Y()
if(h){s=$.b1()
b=new Z.aE(b.a|s.a)}if(g)b=new Z.aE(b.a|$.b0().a)
if(f)b=new Z.aE(b.a|$.b2().a)
if(e)b=new Z.aE(b.a|$.b_().a)
return new A.hJ(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jd:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
je:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jd(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fP(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
n3:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jd(b,r,"emission")
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
n_:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.je(b,r,"ambient")
b.a+="\n"},
n1:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.je(b,r,"diffuse")
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
n4:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.je(b,r,"invDiffuse")
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
na:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.je(b,r,"specular")
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
n6:function(a,b){var s,r,q
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
n8:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jd(b,r,"reflect")
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
n9:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jd(b,r,"refract")
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
n0:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.fP(r)
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
n2:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.fP(r)
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
n7:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.fP(r)
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
nb:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.fP(r)
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
if(m){s=$.hl
if(s==null)s=$.hl=new E.eX(E.kC(),E.kD())
p=c.a
if(s.b===C.q){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
n5:function(a,b){var s,r
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
s=b.a+="   return "+C.a.q(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
nc:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.aT(""),i=""+"precision mediump float;\n"
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
A.n3(a,j)
A.n_(a,j)
A.n1(a,j)
A.n4(a,j)
A.na(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.n8(a,j)
A.n9(a,j)}A.n6(a,j)
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
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.n0(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.n2(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.n7(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nb(a,p[m],j)
A.n5(a,j)}p=j.a+="// === Main ===\n"
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
j.a+=k+(q[0].toUpperCase()+C.d.b3(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b3(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b3(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b3(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
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
i=j.a+="   vec4 objClr = vec4("+C.a.q(l," + ")+", alpha);\n"
if(r)i=j.a=i+"   objClr = colorMat*objClr;\n"
i+="   gl_FragColor = objClr;\n"
j.a=i
i=j.a=i+"}\n"
return i.charCodeAt(0)==0?i:i},
nd:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aU+"];\n"
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
nf:function(a,b){var s
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
ne:function(a,b){var s
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
nh:function(a,b){var s,r
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
ni:function(a,b){var s,r
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
ng:function(a,b){var s
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
nj:function(a,b){var s
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
fP:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.d.b3(a,1)},
mb:function(a,b){var s,r,q,p=""+"precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n"
for(s=0;s<a;++s)p=p+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
p+="\nvec4 clrAccum;\n"
r=b===C.H
p=(r||b===C.f?p+"float colorCount;\n":p)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.G)p+="      clrAccum += color;\n"
else if(b===C.i)p+="      clrAccum = mix(clrAccum, color, color.a);\n"
else p=r?p+"      clrAccum += color;\n      colorCount += 1.0;\n":p+"      clrAccum = color;\n      colorCount = 1.0;\n"
p+="   }\n}\n\nvoid layoutAll()\n{\n"
q=b===C.f
if(q)for(s=a-1;s>=0;--s)p=p+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)p=p+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
p+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(r)p+="   colorCount = 1.0;\n"
else if(q)p+="   colorCount = 0.0;\n"
p+="   layoutAll();\n"
p=(r?p+"   clrAccum = clrAccum/colorCount;\n":p)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return p.charCodeAt(0)==0?p:p},
jI:function(a,b,c,d,e){var s=new A.iC([],a,c,e)
s.f=d
s.e=P.hC(d,0,!1)
return s},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a,b){var _=this
_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cc:function cc(a,b,c){var _=this
_.x=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.a=b
_.b=c
_.d=_.c=""
_.r=_.f=_.e=null},
hu:function hu(a,b){this.a=a
this.b=b},
cn:function cn(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.dw=_.hJ=_.dv=_.du=_.hI=_.dt=_.ds=_.dr=_.hH=_.dq=_.dn=_.dm=_.hG=_.dl=_.dk=_.hF=_.dj=_.br=_.bq=_.aU=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.c6=c
_.c7=d
_.c8=e
_.c9=f
_.ca=g
_.cb=h
_.cc=i
_.cd=j
_.hM=_.hL=_.hK=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b3:function b3(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aU=b5
_.bq=b6
_.br=b7},
ey:function ey(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ez:function ez(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eB:function eB(a,b,c,d,e,f,g,h,i,j){var _=this
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
eD:function eD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
az:function az(){},
bu:function bu(a,b){this.a=a
this.b=b},
cC:function cC(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cE:function cE(a,b,c,d,e,f,g,h,i){var _=this
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
iB:function iB(){},
iG:function iG(a){this.a=a},
cH:function cH(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ev:function ev(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
ew:function ew(a,b,c){this.a=a
this.c=b
this.d=c},
ex:function ex(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
eA:function eA(a,b,c){this.a=a
this.c=b
this.d=c},
cJ:function cJ(a,b,c){this.a=a
this.c=b
this.d=c},
cK:function cK(a,b,c){this.a=a
this.c=b
this.d=c},
eC:function eC(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jc:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
da:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.z(g,f+a2,e+a3)
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
i.d=h}k=F.jc(h)
j=F.jc(g)
a.h6(F.nU(a0,a1,new F.ja(i,F.jc(f),F.jc(e),j,k,c),b))},
nU:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.c(P.d("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.d("Must have 1 or more divisions of the height for a surface."))
s=F.jF()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.r(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.iO(e,e,new V.aa(n,0,0,1),e,e,new V.N(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.c2(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.r(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.iO(e,e,new V.aa(h,g,f,1),e,e,new V.N(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.c2(d))}}s.ga1().fQ(a+1,b+1,r)
return s},
jF:function(){return new F.i9()},
iO:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cO()
h=$.ll()
s=$.Y()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b1().a)!==0)q.r=e
if((r&$.b0().a)!==0)q.x=b
if((r&$.aH().a)!==0)q.y=f
if((r&$.b2().a)!==0)q.z=g
if((r&$.lm().a)!==0)q.Q=c
if((r&$.bV().a)!==0)q.ch=i
if((r&$.b_().a)!==0)q.cx=a
return q},
ja:function ja(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ak:function ak(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(){this.b=this.a=null},
i0:function i0(){this.a=null},
i9:function i9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cA:function cA(a,b){this.a=a
this.b=b},
cB:function cB(a,b){this.a=a
this.b=b},
bH:function bH(a,b){this.a=a
this.b=b},
cO:function cO(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
iV:function iV(a){this.a=a},
iU:function iU(a){this.a=a},
r:function r(a,b){this.a=a
this.b=!1
this.c=b},
iP:function iP(a,b,c){this.b=a
this.c=b
this.d=c},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.b=a
this.c=b},
iT:function iT(a){this.b=a}},T={
kq:function(a){return new T.io(a)},
il:function il(){},
im:function im(){},
io:function io(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
ip:function ip(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},
iq:function iq(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},
ir:function ir(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
nP:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2="modifiers",b3=V.m6("Test 028"),b4=W.ju()
b4.className="pageLargeCanvas"
b4.id=b0
b3.a.appendChild(b4).toString
b3.d5(["Test of a Gaussian blur cover pass. ","Notice the depth of field causing things further away to be blurry."])
b3.d5(["\xab[Back to Tests|../]"])
s=document.getElementById(b0)
if(s==null)H.f(P.d("Failed to find an element with the identifier, testCanvas."))
r=E.mc(s,!0,!0,!0,!1)
q=new U.bx(V.a5(),[])
q.aI(q.gez(),q.gfg())
b3=r.x
p=U.h6()
o=U.h6()
n=$.ag
if(n==null)n=$.ag=new V.O(0,0)
n=new U.cM(p,o,new X.Z(!1,!1,!1),n,V.a5())
p.scu(0,!0)
p.scl(6.283185307179586)
p.scn(0)
p.sae(0,0)
p.scm(100)
p.sZ(0)
p.sc3(0.5)
m=n.gaP()
p.gm().l(0,m)
o.scu(0,!0)
o.scl(6.283185307179586)
o.scn(0)
o.sae(0,0)
o.scm(100)
o.sZ(0)
o.sc3(0.5)
o.gm().l(0,m)
p=new X.Z(!1,!1,!1)
if(!n.d.n(0,p)){l=n.d
n.d=p
n.L(new D.p(b2,l,p))}n.b8(b3)
q.l(0,n)
U.h6()
if($.ag==null)$.ag=new V.O(0,0)
V.a5()
p=U.h6()
o=$.ag
if(o==null)o=$.ag=new V.O(0,0)
o=new U.cL(p,new X.Z(!1,!1,!1),o,V.a5())
p.scu(0,!0)
p.scl(6.283185307179586)
p.scn(0)
p.sae(0,0)
p.scm(100)
p.sZ(0)
p.sc3(0.2)
p.gm().l(0,o.gaP())
p=new X.Z(!0,!1,!1)
if(!o.c.n(0,p)){l=o.c
o.c=p
o.L(new D.p(b2,l,p))}o.b8(b3)
q.l(0,o)
p=new X.Z(!1,!1,!1)
o=new U.cN(p,V.a5())
n=new X.Z(!1,!1,!1)
if(!p.n(0,n)){o.b=n
o.L(new D.p(b2,p,n))}o.b8(b3)
q.l(0,o)
q.l(0,U.jv(V.lS(0,0,5)))
k=X.kh(q)
j=F.jF()
F.da(j,b1,b1,1,1,1,0,0,1)
F.da(j,b1,b1,1,1,0,1,0,3)
F.da(j,b1,b1,1,1,0,0,1,2)
F.da(j,b1,b1,1,1,-1,0,0,0)
F.da(j,b1,b1,1,1,0,-1,0,0)
F.da(j,b1,b1,1,1,0,0,-1,3)
j.aB()
i=E.hk(j)
h=E.hk(b1)
for(b3=h.y,p=b3.a,g=-1.6;g<=1.7;g+=0.8)for(f=-1.6;f<=1.7;f+=0.8)for(e=-1.6;e<=1.7;e+=0.8){d=new V.au(1,0,0,g,0,1,0,f,0,0,1,e,0,0,0,1).M(0,new V.au(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
c=E.hk(b1)
o=$.hV
o=new U.bv(o==null?$.hV=new V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):o)
o.sR(0,d)
c.sdG(o)
o=c.y
if(o.bl([i])){n=o.a
b=n.length
n.push(i)
o=o.c
if(o!=null)o.$2(b,[i])}if(b3.bl([c])){b=p.length
p.push(c)
o=b3.c
if(o!=null)o.$2(b,[c])}}b3=r.f
a=b3.dD("../resources/diceColor")
p=O.h3()
a0=new O.dN(p)
p.aI(a0.geD(),a0.geF())
p=a0.gcj()
p.gm().l(0,a0.gcW())
p.gdC().l(0,a0.ga0())
p=a0.gcj()
o=U.jv(V.kg(-1,-1,-1,b1))
p.l(0,D.k7(new V.I(1,0.9,0.9),o))
p=a0.gcj()
o=U.jv(V.kg(1,1,2,b1))
p.l(0,D.k7(new V.I(0.2,0.2,0.35),o))
p=a0.gbV()
p.saT(0,new V.I(0.2,0.2,0.2))
a0.gbV().sbh(a)
p=a0.gc4()
p.saT(0,new V.I(0.8,0.8,0.8))
a0.gc4().sbh(a)
p=a0.gby()
p.saT(0,new V.I(0.7,0.7,0.7))
p=a0.gby()
p.bR(new A.ab(!0,!1,p.c.c))
p.d_(10)
a0.gdc().sbh(b3.dD("../resources/diceBumpMap"))
a1=X.jt(!0,1,1,!1)
b3=b3.dE("../resources/maskonaive",".jpg")
a2=M.h7(b1,b1)
p=new O.eb(new V.I(1,1,1))
l=p.c
p.c=b3
b3.gm().l(0,p.ga0())
p.w(new D.p("boxTexture",l,p.c))
a2.saG(p)
a2.saR(k)
a2.sau(0,a1)
a3=M.k9()
a3.saR(k)
a3.sau(0,a1)
a3.saG(a0)
a3.e.l(0,h)
a4=X.jt(!0,0.5,0.5,!0)
a5=M.k9()
a5.saR(k)
a5.sau(0,a4)
b3=new O.hd()
$.w().toString
if(!(Math.abs(-2.5)<1e-9)){b3.b=3.5
b3.w(new D.p("start",1,3.5))}p=b3.c
$.w().toString
if(!(Math.abs(p-5.5)<1e-9)){b3.c=5.5
b3.w(new D.p("stop",p,5.5))}a5.saG(b3)
a5.e.l(0,h)
b3=new V.bK(-1,0,0,1)
p=a1.ch
o=a4.ch
n=X.jt(!0,1,1,!1)
a6=new M.cb(n)
m=O.kb(b1,b1)
a7=a6.gP()
m.gm().l(0,a7)
a6.d=m
a6.e=M.h7(n,m)
m=$.kx
if(m==null)m=$.kx=new V.O(0,1)
n=O.kb(m,n.ch)
n.gm().l(0,a7)
a6.f=n
a6.r=M.h7(b1,n)
n=a6.d
if(n!=null)n.sbY(0)
n=a6.f
if(n!=null)n.sbY(0)
n=a6.d
if(n!=null)n.sdf(p)
n=a6.d
if(n!=null)n.sbX(o)
n=a6.f
if(n!=null)n.sbX(o)
n=a6.d
if(n!=null)n.sbW(b3)
n=a6.f
if(n!=null)n.sbW(b3)
b3=a6.r
if(b3!=null)b3.sau(0,b1)
b3=O.h3()
a8=new O.eo(new V.aa(0,0,0,0),b3,C.i,C.i)
b3.aI(a8.geT(),a8.geV())
n=a8.e
if(n!==C.f){a8.e=C.f
a8.w(new D.p("blend",n,C.f))}b3.l(0,O.kr(V.i2(0,0.8,0.2,0.2),o))
b3.l(0,O.kr(V.i2(0,0.6,0.2,0.2),p))
a9=M.h7(b1,b1)
a9.sau(0,X.jx(!1,b1))
a9.saG(a8)
b3=new M.c0([])
b3.aI(b3.gfk(),b3.gfm())
b3.bo(0,[a2,a3,a5,a6,a9])
p=r.d
if(p!==b3){if(p!=null)p.gm().K(0,r.gcH())
r.d=b3
b3.gm().l(0,r.gcH())
r.cI()}V.nS(r)}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jB.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gE:function(a){return H.cx(a)},
i:function(a){return"Instance of '"+H.cy(a)+"'"}}
J.dF.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$ibn:1}
J.cg.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0}}
J.bc.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.e2.prototype={}
J.bI.prototype={}
J.at.prototype={
i:function(a){var s=a[$.l9()]
if(s==null)return this.e0(a)
return"JavaScript function for "+J.fS(s)}}
J.al.prototype={
K:function(a,b){var s
if(!!a.fixed$length)H.f(P.x("remove"))
for(s=0;s<a.length;++s)if(J.U(a[s],b)){a.splice(s,1)
return!0}return!1},
bo:function(a,b){if(!!a.fixed$length)H.f(P.x("addAll"))
this.ed(a,b)
return},
ed:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.b5(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b5(a))}},
q:function(a,b){var s,r,q=a.length,p=P.hC(q,"",!1)
for(s=0;s<a.length;++s){r=H.q(a[s])
if(s>=q)return H.e(p,s)
p[s]=r}return p.join(b)},
h4:function(a){return this.q(a,"")},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cC:function(a,b){var s=a.length
if(b>s)throw H.c(P.ax(b,0,s,"start",null))
if(b===s)return[]
return a.slice(b,s)},
gcg:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lI())},
b1:function(a,b){if(!!a.immutable$list)H.f(P.x("sort"))
H.m9(a,b==null?J.mR():b)},
dY:function(a){return this.b1(a,null)},
H:function(a,b){var s
for(s=0;s<a.length;++s)if(J.U(a[s],b))return!0
return!1},
i:function(a){return P.jy(a,"[","]")},
gO:function(a){return new J.a4(a,a.length)},
gE:function(a){return H.cx(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.x("set length"))
if(b>a.length)H.kO(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bS(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.f(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bS(a,b))
a[b]=c},
$ij:1,
$ih:1,
$im:1}
J.dH.prototype={}
J.a4.prototype={
gC:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bz.prototype={
ai:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbs(b)
if(this.gbs(a)===s)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
ht:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.x(""+a+".toInt()"))},
ce:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.x(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
cs:function(a,b){var s
if(b>20)throw H.c(P.ax(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dT:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d1(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.d1(a,b)},
d1:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.x("Result of truncating division is "+H.q(s)+": "+H.q(a)+" ~/ "+b))},
bm:function(a,b){var s
if(a>0)s=this.fG(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fG:function(a,b){return b>31?0:a>>>b},
$ia2:1,
$ia3:1}
J.cf.prototype={$in:1}
J.dG.prototype={}
J.bb.prototype={
c1:function(a,b){if(b<0)throw H.c(H.bS(a,b))
if(b>=a.length)H.f(H.bS(a,b))
return a.charCodeAt(b)},
cM:function(a,b){if(b>=a.length)throw H.c(H.bS(a,b))
return a.charCodeAt(b)},
a_:function(a,b){return a+b},
cD:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.e5(b,null))
if(b>c)throw H.c(P.e5(b,null))
if(c>a.length)throw H.c(P.e5(c,null))
return a.substring(b,c)},
b3:function(a,b){return this.cD(a,b,null)},
M:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
am:function(a,b){var s=b-a.length
if(s<=0)return a
return this.M(" ",s)+a},
fU:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.ax(c,0,s,null,null))
return H.l4(a,b,c)},
H:function(a,b){return this.fU(a,b,0)},
ai:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gE:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$iA:1}
H.dK.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.K.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.c1(this.a,b)}}
H.j.prototype={}
H.bA.prototype={
gC:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.fO(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.b5(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.D(q,s);++r.c
return!0}}
H.bf.prototype={
gO:function(a){return new H.cm(J.aI(this.a),this.b)},
gj:function(a){return J.bq(this.a)},
D:function(a,b){return this.b.$1(J.jq(this.a,b))}}
H.c7.prototype={$ij:1}
H.cm.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.S(this).Q[1].a(this.a)}}
H.cP.prototype={
gO:function(a){return new H.eM(J.aI(this.a),this.b)}}
H.eM.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.c9.prototype={}
H.eG.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.bJ.prototype={}
H.iz.prototype={
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
H.cw.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dI.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eF.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i_.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fp.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bs.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.l7(r==null?"unknown":r)+"'"},
ghy:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ij.prototype={}
H.ie.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.l7(s)+"'"}}
H.bW.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bW))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gE:function(a){var s,r=this.c
if(r==null)s=H.cx(this.a)
else s=typeof r!=="object"?J.fR(r):H.cx(r)
return(s^H.cx(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.q(this.d)+"' of "+("Instance of '"+H.cy(s)+"'")}}
H.e8.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.Q.prototype={
gj:function(a){return this.a},
gaC:function(a){return new H.aM(this)},
ghx:function(a){return H.lP(new H.aM(this),new H.hy(this))},
fV:function(a,b){var s=this.b
if(s==null)return!1
return this.el(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bk(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bk(p,b)
q=r==null?n:r.b
return q}else return o.h3(b)},
h3:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cR(q,J.fR(a)&0x3ffffff)
r=this.dz(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cK(s==null?m.b=m.bO():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cK(r==null?m.c=m.bO():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bO()
p=J.fR(b)&0x3ffffff
o=m.cR(q,p)
if(o==null)m.bS(q,p,[m.bP(b,c)])
else{n=m.dz(o,b)
if(n>=0)o[n].b=c
else o.push(m.bP(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b5(s))
r=r.c}},
cK:function(a,b,c){var s=this.bk(a,b)
if(s==null)this.bS(a,b,this.bP(b,c))
else s.b=c},
bP:function(a,b){var s=this,r=new H.hB(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dz:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.U(a[r].a,b))return r
return-1},
i:function(a){return P.kd(this)},
bk:function(a,b){return a[b]},
cR:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
eo:function(a,b){delete a[b]},
el:function(a,b){return this.bk(a,b)!=null},
bO:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bS(r,s,r)
this.eo(r,s)
return r}}
H.hy.prototype={
$1:function(a){var s=this.a
return H.S(s).Q[1].a(s.h(0,a))},
$S:function(){return H.S(this.a).aq("2(1)")}}
H.hB.prototype={}
H.aM.prototype={
gj:function(a){return this.a.a},
gO:function(a){var s=this.a,r=new H.dM(s,s.r)
r.c=s.e
return r}}
H.dM.prototype={
gC:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b5(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jk.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.jl.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.jm.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.hx.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ct.prototype={}
H.bD.prototype={
gj:function(a){return a.length},
$it:1}
H.bg.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cs.prototype={
k:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dS.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dT.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dU.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dV.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dW.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cu.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.dX.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cV.prototype={}
H.cW.prototype={}
H.cX.prototype={}
H.cY.prototype={}
H.ae.prototype={
aq:function(a){return H.fB(v.typeUniverse,this,a)},
cL:function(a){return H.mD(v.typeUniverse,this,a)}}
H.f2.prototype={}
H.eY.prototype={
i:function(a){return this.a}}
H.d5.prototype={}
P.iX.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:24}
P.iW.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:26}
P.iY.prototype={
$0:function(){this.a.$0()},
$S:10}
P.iZ.prototype={
$0:function(){this.a.$0()},
$S:10}
P.d4.prototype={
e8:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bR(new P.j7(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
e9:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bR(new P.j6(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$iiu:1}
P.j7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.j6.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.b.e1(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bM.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.q(this.a)+")"}}
P.bN.prototype={
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
if(r instanceof P.bM){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aI(s)
if(o instanceof P.bN){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d1.prototype={
gO:function(a){return new P.bN(this.a())}}
P.eN.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.j9.prototype={}
P.jf.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.j3.prototype={
ho:function(a){var s,r,q,p=null
try{if(C.e===$.an){a.$0()
return}P.nl(p,p,this,a)}catch(q){s=H.fQ(q)
r=H.jZ(q)
P.kU(p,p,this,s,r)}},
hp:function(a,b){var s,r,q,p=null
try{if(C.e===$.an){a.$1(b)
return}P.nm(p,p,this,a,b)}catch(q){s=H.fQ(q)
r=H.jZ(q)
P.kU(p,p,this,s,r)}},
hq:function(a,b){return this.hp(a,b,t.z)},
fS:function(a){return new P.j4(this,a)},
d9:function(a,b){return new P.j5(this,a,b)}}
P.j4.prototype={
$0:function(){return this.a.ho(this.b)},
$S:2}
P.j5.prototype={
$1:function(a){return this.a.hq(this.b,a)},
$S:function(){return this.c.aq("~(0)")}}
P.cR.prototype={
gO:function(a){var s=new P.cS(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
H:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ej(b)
return r}},
ej:function(a){var s=this.d
if(s==null)return!1
return this.bF(s[this.bC(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cN(s==null?q.b=P.jM():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cN(r==null?q.c=P.jM():r,b)}else return q.ec(0,b)},
ec:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jM()
s=q.bC(b)
r=p[s]
if(r==null)p[s]=[q.bB(b)]
else{if(q.bF(r,b)>=0)return!1
r.push(q.bB(b))}return!0},
K:function(a,b){if((b&1073741823)===b)return this.fw(this.c,b)
else return this.fv(0,b)},
fv:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bC(b)
r=n[s]
q=o.bF(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d3(p)
return!0},
cN:function(a,b){if(a[b]!=null)return!1
a[b]=this.bB(b)
return!0},
fw:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d3(s)
delete a[b]
return!0},
cT:function(){this.r=this.r+1&1073741823},
bB:function(a){var s,r=this,q=new P.j2(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cT()
return q},
d3:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cT()},
bC:function(a){return J.fR(a)&1073741823},
bF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.U(a[r].a,b))return r
return-1}}
P.j2.prototype={}
P.cS.prototype={
gC:function(a){return H.S(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b5(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.ce.prototype={}
P.cj.prototype={$ij:1,$ih:1,$im:1}
P.B.prototype={
gO:function(a){return new H.bA(a,this.gj(a))},
D:function(a,b){return this.h(a,b)},
F:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.b5(a))}},
gdA:function(a){return this.gj(a)===0},
hv:function(a,b){var s,r,q,p,o=this
if(o.gdA(a)){s=J.jz(0)
return s}r=o.h(a,0)
q=P.hC(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s}return q},
hu:function(a){return this.hv(a,!0)},
i:function(a){return P.jy(a,"[","]")}}
P.cl.prototype={}
P.hG.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.q(a)
r.a=s+": "
r.a+=H.q(b)},
$S:44}
P.T.prototype={
F:function(a,b){var s,r,q
for(s=J.aI(this.gaC(a)),r=H.bU(a).aq("T.V");s.t();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.bq(this.gaC(a))},
i:function(a){return P.kd(a)},
$iV:1}
P.ea.prototype={
i:function(a){return P.jy(this,"{","}")},
D:function(a,b){var s,r,q,p,o="index"
H.ny(b,o,t.S)
P.kk(b,o)
for(s=P.mn(this,this.r),r=H.S(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.F(b,this,o,null,q))}}
P.cZ.prototype={$ij:1,$ih:1}
P.cT.prototype={}
P.d9.prototype={}
P.dr.prototype={}
P.dt.prototype={}
P.hj.prototype={}
P.iJ.prototype={}
P.iK.prototype={
fW:function(a){var s,r,q,p=P.jE(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.j8(r)
if(q.eq(a,0,p)!==p){C.d.c1(a,p-1)
q.bU()}return new Uint8Array(r.subarray(0,H.mJ(0,q.b,s)))}}
P.j8.prototype={
bU:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fN:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bU()
return!1}},
eq:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.d.c1(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.d.cM(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fN(p,C.d.cM(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bU()}else if(p<=2047){o=l.b
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
P.P.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.P&&this.a===b.a&&!0},
ai:function(a,b){return C.b.ai(this.a,b.a)},
gE:function(a){var s=this.a
return(s^C.b.bm(s,30))&1073741823},
i:function(a){var s=this,r=P.lE(H.m_(s)),q=P.dv(H.lY(s)),p=P.dv(H.lU(s)),o=P.dv(H.lV(s)),n=P.dv(H.lX(s)),m=P.dv(H.lZ(s)),l=P.lF(H.lW(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b7.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gE:function(a){return C.b.gE(this.a)},
ai:function(a,b){return C.b.ai(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hh(),o=this.a
if(o<0)return"-"+new P.b7(0-o).i(0)
s=p.$1(C.b.a4(o,6e7)%60)
r=p.$1(C.b.a4(o,1e6)%60)
q=new P.hg().$1(o%1e6)
return""+C.b.a4(o,36e8)+":"+s+":"+r+"."+q}}
P.hg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.hh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.D.prototype={}
P.dm.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hn(s)
return"Assertion failed"}}
P.eu.prototype={}
P.dY.prototype={
i:function(a){return"Throw of null."}}
P.ao.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbE()+o+m
if(!q.a)return l
s=q.gbD()
r=P.hn(q.b)
return l+s+": "+r}}
P.cz.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.q(q):""
else if(q==null)s=": Not greater than or equal to "+H.q(r)
else if(q>r)s=": Not in inclusive range "+H.q(r)+".."+H.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.q(r)
return s}}
P.dD.prototype={
gbE:function(){return"RangeError"},
gbD:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.eH.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eE.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eh.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ds.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hn(s)+"."}}
P.e0.prototype={
i:function(a){return"Out of Memory"},
$iD:1}
P.cD.prototype={
i:function(a){return"Stack Overflow"},
$iD:1}
P.du.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f_.prototype={
i:function(a){return"Exception: "+this.a}}
P.hs.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.d.cD(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gj:function(a){var s,r=this.gO(this)
for(s=0;r.t();)++s
return s},
D:function(a,b){var s,r,q
P.kk(b,"index")
for(s=this.gO(this),r=0;s.t();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.lH(this,"(",")")}}
P.dE.prototype={}
P.ad.prototype={
gE:function(a){return P.J.prototype.gE.call(C.K,this)},
i:function(a){return"null"}}
P.J.prototype={constructor:P.J,$iJ:1,
n:function(a,b){return this===b},
gE:function(a){return H.cx(this)},
i:function(a){return"Instance of '"+H.cy(this)+"'"},
toString:function(){return this.i(this)}}
P.aT.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fT.prototype={
gj:function(a){return a.length}}
W.dk.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dl.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dq.prototype={}
W.b4.prototype={
cv:function(a,b,c){if(c!=null)return a.getContext(b,P.kY(c))
return a.getContext(b)},
dS:function(a,b){return this.cv(a,b,null)},
$ib4:1}
W.c_.prototype={$ic_:1}
W.aj.prototype={
gj:function(a){return a.length}}
W.h8.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.c2.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.h9.prototype={}
W.ac.prototype={}
W.aq.prototype={}
W.ha.prototype={
gj:function(a){return a.length}}
W.hb.prototype={
gj:function(a){return a.length}}
W.hc.prototype={
gj:function(a){return a.length}}
W.he.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.c5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.c6.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.q(r)+", "
s=a.top
s.toString
return r+H.q(s)+") "+H.q(this.gan(a))+" x "+H.q(this.gaj(a))},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bo(b)
if(s===r.gbt(b)){s=a.top
s.toString
s=s===r.gbw(b)&&this.gan(a)===r.gan(b)&&this.gaj(a)===r.gaj(b)}else s=!1}else s=!1
return s},
gE:function(a){var s,r=a.left
r.toString
r=C.c.gE(r)
s=a.top
s.toString
return W.kF(r,C.c.gE(s),C.c.gE(this.gan(a)),C.c.gE(this.gaj(a)))},
gda:function(a){var s=a.bottom
s.toString
return s},
gcS:function(a){return a.height},
gaj:function(a){var s=this.gcS(a)
s.toString
return s},
gbt:function(a){var s=a.left
s.toString
return s},
gcr:function(a){var s=a.right
s.toString
return s},
gbw:function(a){var s=a.top
s.toString
return s},
gd4:function(a){return a.width},
gan:function(a){var s=this.gd4(a)
s.toString
return s},
$ia8:1}
W.dw.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.hf.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.eQ.prototype={
gdA:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gO:function(a){var s=this.hu(this)
return new J.a4(s,s.length)}}
W.G.prototype={
gdd:function(a){var s=a.children
s.toString
return new W.eQ(a,s)},
gde:function(a){var s,r,q,p=a.clientLeft
p.toString
s=a.clientTop
s.toString
r=a.clientWidth
r.toString
q=a.clientHeight
q.toString
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.a8(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
$iG:1}
W.i.prototype={$ii:1}
W.b.prototype={
fO:function(a,b,c,d){if(c!=null)this.ee(a,b,c,!1)},
ee:function(a,b,c,d){return a.addEventListener(b,H.bR(c,1),!1)},
$ib:1}
W.aK.prototype={$iaK:1}
W.dx.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.dy.prototype={
gj:function(a){return a.length}}
W.dA.prototype={
gj:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.hv.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.b9.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.ba.prototype={
gdg:function(a){var s=a.data
s.toString
return s},
$iba:1}
W.by.prototype={$iby:1}
W.bd.prototype={$ibd:1}
W.hE.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.hW.prototype={
gj:function(a){return a.length}}
W.dP.prototype={
h:function(a,b){return P.aZ(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aZ(s.value[1]))}},
gaC:function(a){var s=[]
this.F(a,new W.hX(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iV:1}
W.hX.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dQ.prototype={
h:function(a,b){return P.aZ(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aZ(s.value[1]))}},
gaC:function(a){var s=[]
this.F(a,new W.hY(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iV:1}
W.hY.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aN.prototype={$iaN:1}
W.dR.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.a7.prototype={$ia7:1}
W.eP.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b]).toString},
gO:function(a){var s=this.a.childNodes
return new W.ca(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.v.prototype={
hm:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lq(s,b,a)}catch(q){H.fQ(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e_(a):s},
fz:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iv:1}
W.cv.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.aP.prototype={
gj:function(a){return a.length},
$iaP:1}
W.e3.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.e7.prototype={
h:function(a,b){return P.aZ(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aZ(s.value[1]))}},
gaC:function(a){var s=[]
this.F(a,new W.i8(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iV:1}
W.i8.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.e9.prototype={
gj:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.ed.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.aR.prototype={$iaR:1}
W.ee.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.aS.prototype={
gj:function(a){return a.length},
$iaS:1}
W.ei.prototype={
h:function(a,b){return a.getItem(H.mH(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaC:function(a){var s=[]
this.F(a,new W.ig(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iV:1}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)},
$S:29}
W.am.prototype={$iam:1}
W.aB.prototype={$iaB:1}
W.af.prototype={$iaf:1}
W.em.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.en.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.it.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aU.prototype={$iaU:1}
W.bk.prototype={$ibk:1}
W.es.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.ix.prototype={
gj:function(a){return a.length}}
W.aD.prototype={}
W.iI.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eK.prototype={
gj:function(a){return a.length}}
W.aV.prototype={
gh_:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.x("deltaY is not supported"))},
gfZ:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.x("deltaX is not supported"))},
$iaV:1}
W.bL.prototype={
fA:function(a,b){var s=a.requestAnimationFrame(H.bR(b,1))
s.toString
return s},
ep:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eR.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.cQ.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.q(r)+", "
s=a.top
s.toString
s=r+H.q(s)+") "
r=a.width
r.toString
r=s+H.q(r)+" x "
s=a.height
s.toString
return r+H.q(s)},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bo(b)
if(s===r.gbt(b)){s=a.top
s.toString
if(s===r.gbw(b)){s=a.width
s.toString
if(s===r.gan(b)){s=a.height
s.toString
r=s===r.gaj(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gE:function(a){var s,r,q,p=a.left
p.toString
p=C.c.gE(p)
s=a.top
s.toString
s=C.c.gE(s)
r=a.width
r.toString
r=C.c.gE(r)
q=a.height
q.toString
return W.kF(p,s,r,C.c.gE(q))},
gcS:function(a){return a.height},
gaj:function(a){var s=a.height
s.toString
return s},
gd4:function(a){return a.width},
gan:function(a){var s=a.width
s.toString
return s}}
W.f3.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.cU.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.fm.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.ft.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$it:1,
$ih:1,
$im:1}
W.jw.prototype={}
W.eZ.prototype={}
W.j_.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.jL.prototype={}
W.E.prototype={
gO:function(a){return new W.ca(a,this.gj(a))}}
W.ca.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lp(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.S(this).c.a(this.d)}}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fj.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fq.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fL.prototype={}
P.d6.prototype={$iba:1,
gdg:function(a){return this.a}}
P.jb.prototype={
$1:function(a){this.a.push(P.kQ(a))},
$S:35}
P.jh.prototype={
$2:function(a,b){this.a[a]=P.kQ(b)},
$S:36}
P.dz.prototype={
gb5:function(){return new H.bf(new H.cP(this.b,new P.hq()),new P.hr())},
F:function(a,b){C.a.F(P.hD(this.gb5(),!1),b)},
k:function(a,b,c){var s=this.gb5()
J.lv(s.b.$1(J.jq(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.bq(this.gb5().a)},
h:function(a,b){var s=this.gb5()
return s.b.$1(J.jq(s.a,b))},
gO:function(a){var s=P.hD(this.gb5(),!1)
return new J.a4(s,s.length)}}
P.hq.prototype={
$1:function(a){return t.h.b(a)},
$S:43}
P.hr.prototype={
$1:function(a){return t.h.a(a)},
$S:27}
P.fi.prototype={
gcr:function(a){return this.$ti.c.a(this.a+this.c)},
gda:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
n:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bo(b)
if(s===r.gbt(b)){q=o.b
if(q===r.gbw(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcr(b)&&p.a(q+o.d)===r.gda(b)}else s=!1}else s=!1}else s=!1
return s},
gE:function(a){var s=this,r=s.a,q=C.b.gE(r),p=s.b,o=C.b.gE(p),n=s.$ti.c
r=C.b.gE(n.a(r+s.c))
p=C.b.gE(n.a(p+s.d))
return H.ma(H.ih(H.ih(H.ih(H.ih(0,q),o),r),p))}}
P.a8.prototype={
gbt:function(a){return this.a},
gbw:function(a){return this.b},
gan:function(a){return this.c},
gaj:function(a){return this.d}}
P.be.prototype={$ibe:1}
P.dL.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bh.prototype={$ibh:1}
P.dZ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.i1.prototype={
gj:function(a){return a.length}}
P.el.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gdd:function(a){return new P.dz(a,new W.eP(a))}}
P.bl.prototype={$ibl:1}
P.et.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.f6.prototype={}
P.f7.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.fr.prototype={}
P.fs.prototype={}
P.fy.prototype={}
P.fz.prototype={}
P.fY.prototype={
gj:function(a){return a.length}}
P.dn.prototype={
h:function(a,b){return P.aZ(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aZ(s.value[1]))}},
gaC:function(a){var s=[]
this.F(a,new P.fZ(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iV:1}
P.fZ.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dp.prototype={
gj:function(a){return a.length}}
P.aJ.prototype={}
P.e_.prototype={
gj:function(a){return a.length}}
P.eO.prototype={}
P.bG.prototype={
dP:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.fN(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.I.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.nA(g))
return}if(t.l.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.js("Incorrect number or type of arguments"))},
hr:function(a,b,c,d,e,f,g){return this.dP(a,b,c,d,e,f,g,null,null,null)},
$ibG:1}
P.ef.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=P.aZ(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fn.prototype={}
P.fo.prototype={}
K.fU.prototype={
aX:function(a,b){return!0},
i:function(a){return"all"}}
K.dC.prototype={
aX:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aX(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aO.prototype={
aX:function(a,b){return!this.dZ(0,b)},
i:function(a){return"!["+this.bz(0)+"]"}}
K.R.prototype={
W:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.d("May not create a Set with zero characters."))
s=new H.Q(t.s)
for(r=new H.bA(a,a.gj(a)),q=H.S(r).c;r.t();)s.k(0,q.a(r.d),!0)
p=P.hD(new H.aM(s),!0)
C.a.dY(p)
this.a=p},
aX:function(a,b){return C.a.H(this.a,b)},
i:function(a){return P.jG(this.a)}}
L.eg.prototype={
q:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iy(this.a.J(0,b),[])
s.push(p)
return p},
h1:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aX(0,a))return p}return null},
i:function(a){return this.b},
d2:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.H(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.aM(s.c)
s=J.aI(s==null?[]:s)
for(;s.t();){r=s.gC(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.H(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bz(0))}return m.charCodeAt(0)==0?m:m}}
L.eq.prototype={
i:function(a){var s=H.l5(this.b,"\n","\\n"),r=H.l5(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.er.prototype={
i:function(a){return this.b}}
L.iv.prototype={
J:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eg(this,b,[])
s.k(0,b,r)}return r},
bi:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.er(a,P.M(s,s))
r.k(0,a,q)}return q},
dQ:function(a){return this.hw(a)},
hw:function(a){var s=this
return P.mZ(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dQ(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.S(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a0.length
if(h!==0){if(!!a0.fixed$length)H.f(P.x("removeAt"))
if(0>=h)H.f(P.e5(0,null))
g=a0.splice(0,1)[0]}else{if(!r.t()){q=3
break}g=n.a(r.d)}b.push(g);++k
h=d==null
f=h?null:d.h1(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.jG(b)
throw H.c(P.d("Untokenizable string [state: "+H.q(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.x("removeRange"))
P.jE(0,i,b.length)
b.splice(0,i-0)
C.a.bo(a0,b)
b=[]
c=[]
d=s.d
q=!m.H(0,l.a)?7:8
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
if(h!=null){e=P.jG(c)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.eq(h,e,k)
l=h}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.H(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.ml()
case 1:return P.mm(o)}}},t.aR)},
i:function(a){var s,r,q=new P.aT(""),p=this.d
if(p!=null)q.a=""+(p.d2()+"\n")
for(p=this.a,p=p.ghx(p),p=new H.cm(J.aI(p.a),p.b),s=H.S(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.q(r==null?null:r.d2())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iy.prototype={
i:function(a){return this.b.b+": "+this.bz(0)}}
O.bt.prototype={
cw:function(a,b,c){this.b=b
this.c=a},
aI:function(a,b){return this.cw(a,null,b)},
bl:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cG:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gO:function(a){var s=this.a
return new J.a4(s,s.length)},
D:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.bl([b])){s=this.a
r=s.length
s.push(b)
this.cG(r,[b])}},
bo:function(a,b){var s,r
if(this.bl(b)){s=this.a
r=s.length
C.a.bo(s,b)
this.cG(r,b)}},
$ih:1}
O.cr.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
aK:function(){var s=this.b
return s==null?null:s.v(null)},
gR:function(a){var s=this.a
if(s.length>0)return C.a.gcg(s)
else return V.a5()},
bv:function(a){this.a.push(a)
this.aK()},
aE:function(){var s=this.a
if(s.length>0){s.pop()
this.aK()}}}
E.h0.prototype={}
E.bw.prototype={
scA:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().K(0,s.gdL())
if(b!=null)b.gm().l(0,s.gdL())
s.aD(new D.p("shape",r,b))}},
sdG:function(a){var s,r,q=this
if(!J.U(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gm().K(0,q.gdJ())
if(a!=null)a.gm().l(0,q.gdJ())
r=q.r
q.aD(new D.p("mover",s,r))}},
a6:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.a
if(!J.U(o,q.x)){s=q.x
q.x=o
q.aD(new D.p("matrix",s,o))}for(p=q.y.a,p=new J.a4(p,p.length),r=H.S(p).c;p.t();)r.a(p.d).a6(0,b)},
T:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gR(q))
else o.push(p.M(0,q.gR(q)))
q.aK()
a.cq(r.f)
s=C.a.gcg(a.dy)
if(r.d!=null)if(s!=null)s.bg(a,r)
for(p=r.y.a,p=new J.a4(p,p.length),o=H.S(p).c;p.t();)o.a(p.d).T(a)
a.cp()
q.aE()},
aD:function(a){var s=this.z
return s==null?null:s.v(a)},
aa:function(){return this.aD(null)},
dM:function(a){this.e=null
this.aD(a)},
hd:function(){return this.dM(null)},
dK:function(a){return this.aD(a)},
hc:function(){return this.dK(null)},
dI:function(a){return this.aD(a)},
h9:function(){return this.dI(null)},
h8:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdH(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.b8()
n=o.a;(n==null?o.a=[]:n).push(r)}this.aa()},
hb:function(a,b){var s,r
for(s=b.gO(b),r=this.gdH();s.t();)s.gC(s).gm().K(0,r)
this.aa()},
i:function(a){return"Unnamed entity"}}
E.br.prototype={
i:function(a){return this.b}}
E.bE.prototype={
i:function(a){return this.b}}
E.eX.prototype={}
E.i4.prototype={
e4:function(a,b){var s=this
s.cy.gm().l(0,new E.i5(s))
s.db.gm().l(0,new E.i6(s))
s.dx.gm().l(0,new E.i7(s))},
ghk:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gR(q).M(0,s.gR(s))
q=s}return q},
gdN:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.ghk().M(0,r.gR(r))}return r},
gdR:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
s=r.dx
s=r.cx=q.gR(q).M(0,s.gR(s))
q=s}return q},
cq:function(a){var s=this.dy
return s.push(a==null?C.a.gcg(s):a)},
cp:function(){var s=this.dy
if(s.length>1)s.pop()},
b7:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.d("May not cache a shader with no name."))
s=this.fr
if(s.fV(0,r))throw H.c(P.d('Shader cache already contains a shader by the name "'+r+'".'))
s.k(0,r,a)}}
E.i5.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.i6.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.i7.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.ep.prototype={
cJ:function(a){this.dO()},
cI:function(){return this.cJ(null)},
gh2:function(){var s,r=this,q=Date.now(),p=C.b.a4(P.k8(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.P(q,!1)
return s/p},
cY:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.c.ce(r*o)
r=s.clientHeight
r.toString
p=C.c.ce(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kt(C.j,this.ghn())}},
dO:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.v.ep(s)
r=W.kV(new E.is(this),t.H)
r.toString
C.v.fA(s,r)}},
hl:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cY()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.P(p,!1)
q.y=P.k8(p-q.r.a).a*0.000001
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
m.T(q)}}catch(o){s=H.fQ(o)
r=H.jZ(o)
P.k2("Error: "+H.q(s))
P.k2("Stack: "+H.q(r))
throw H.c(s)}}}
E.is.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hl()}},
$S:25}
Z.eL.prototype={}
Z.bY.prototype={
G:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fQ(q)
r=P.d('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.q(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.bm.prototype={}
Z.ai.prototype={
ad:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
G:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.e(r,s)
r[s].G(a)}},
a5:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
T:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.e(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cy(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(m,", ")+"\nAttrs:   "+C.a.q(o,", ")}}
Z.cd.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cy(this.c)+"'")+"]"}}
Z.aE.prototype={
gcB:function(a){var s=this.a,r=(s&$.Y().a)!==0?3:0
if((s&$.b1().a)!==0)r+=3
if((s&$.b0().a)!==0)r+=3
if((s&$.aH().a)!==0)r+=2
if((s&$.b2().a)!==0)r+=3
if((s&$.di().a)!==0)r+=3
if((s&$.dj().a)!==0)r+=4
if((s&$.bV().a)!==0)++r
return(s&$.b_().a)!==0?r+4:r},
fR:function(a){var s,r=$.Y(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b1()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aH()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b2()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.di()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b_()
if((q&r.a)!==0)if(s===a)return r
return $.ln()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aE))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.Y().a)!==0)s.push("Pos")
if((r&$.b1().a)!==0)s.push("Norm")
if((r&$.b0().a)!==0)s.push("Binm")
if((r&$.aH().a)!==0)s.push("Txt2D")
if((r&$.b2().a)!==0)s.push("TxtCube")
if((r&$.di().a)!==0)s.push("Clr3")
if((r&$.dj().a)!==0)s.push("Clr4")
if((r&$.bV().a)!==0)s.push("Weight")
if((r&$.b_().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.q(s,"|")}}
D.h2.prototype={}
D.b8.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
K:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.H(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.K(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.H(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.K(p,b)
s=p===!0||s}return s},
v:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.L():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.F(P.hD(p,!0),new D.ho(s))
r=q.b
if(r!=null){q.b=[]
C.a.F(r,new D.hp(s))}return!0},
c5:function(){return this.v(null)},
aF:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.v(s)}}}}
D.ho.prototype={
$1:function(a){a.$1(this.a)},
$S:16}
D.hp.prototype={
$1:function(a){a.$1(this.a)},
$S:16}
D.L.prototype={}
D.ar.prototype={}
D.as.prototype={}
D.p.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.q(this.d)+" => "+H.q(this.e)}}
X.bZ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bZ))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dJ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dJ))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hz.prototype={}
X.ck.prototype={}
X.hF.prototype={
b4:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.N(o.a+b.a,o.b+b.b)
o=q.a.gaS()
s=$.a0
if(s==null)s=$.a0=new V.N(0,0)
r=q.x
q.z=new P.P(p,!1)
q.x=n
return new X.bB(a,s,r,o,n)},
co:function(a,b){this.r=a.a
return!1},
bf:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
be:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.b4(a,b))
return!0},
hh:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaS()
r=this.x
Date.now()
q.v(new X.bC(new V.O(a.a,a.b),s,r))
return!0},
f3:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.v(new X.ck(c,q.a.gaS(),b))
q.y=new P.P(s,!1)
s=$.a0
q.x=s==null?$.a0=new V.N(0,0):s}}
X.Z.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.Z))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.q(s,"+")}}
X.bB.prototype={}
X.hZ.prototype={
bG:function(a,b,c){var s=this,r=new P.P(Date.now(),!1),q=s.a.gaS(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bB(a,p,o,q,b)},
co:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.v(this.bG(a,b,!0))
return!0},
bf:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.v(r.bG(a,b,!0))
return!0},
be:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.bG(a,b,!1))
return!0},
hi:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaS()
Date.now()
r.v(new X.bC(new V.O(a.a,a.b),s,b))
return!0},
gdh:function(){var s=this.b
return s==null?this.b=D.y():s},
gct:function(){var s=this.c
return s==null?this.c=D.y():s},
gdF:function(){var s=this.d
return s==null?this.d=D.y():s}}
X.bC.prototype={}
X.e4.prototype={}
X.cG.prototype={}
X.iw.prototype={
b4:function(a,b){var s,r,q,p,o=this,n=new P.P(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a0
if(r==null){r=new V.N(0,0)
$.a0=r
s=r}else s=r}r=o.a.gaS()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cG(q,p,r,s)},
hg:function(a){var s=this.b
if(s==null)return!1
s.v(this.b4(a,!0))
return!0},
he:function(a){var s=this.c
if(s==null)return!1
s.v(this.b4(a,!0))
return!0},
hf:function(a){var s=this.d
if(s==null)return!1
s.v(this.b4(a,!1))
return!0}}
X.eI.prototype={
gaW:function(a){var s=this.b
return s==null?this.b=new X.hz(new X.Z(!1,!1,!1),P.kc(t.S)):s},
ga9:function(){var s,r=this.c
if(r==null){r=$.a0
if(r==null){r=$.a0=new V.N(0,0)
s=r}else s=r
r=this.c=new X.hZ(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gak:function(){var s=this.d
if(s==null){s=$.a0
if(s==null)s=$.a0=new V.N(0,0)
s=this.d=new X.hF(this,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return s},
gaY:function(){var s,r=this.e
if(r==null){r=$.a0
if(r==null){r=$.a0=new V.N(0,0)
s=r}else s=r
r=this.e=new X.iw(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gaS:function(){var s=this.a
return V.i2(0,0,C.h.gde(s).c,C.h.gde(s).d)},
cP:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dJ(p,new X.Z(s,r,q))},
aQ:function(a){var s,r,q=this.gaW(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.Z(p,s,r)},
bT:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaW(this)
r=a.altKey
q=a.shiftKey
p.c=new X.Z(s,r===!0,q===!0)},
aA:function(a){var s,r,q,p
if(a==null){s=$.a0
return s==null?$.a0=new V.N(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.N(r-p,q-s)},
b6:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.O(r,s)},
bQ:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.c.U(n)
m=o.pageY
m.toString
C.c.U(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.c.U(l)
l=o.pageY
l.toString
l=C.c.U(l)
k=j.top
k.toString
s.push(new V.N(n-m,l-k))}return s},
ax:function(a){var s,r,q,p
if(a==null)return new X.bZ(0,new X.Z(!1,!1,!1))
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
return new X.bZ(s,new X.Z(r,q,p))},
bH:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eY:function(a){return this.f=!0},
eI:function(a){return this.f=!1},
eO:function(a){if(this.f&&this.bH(a))a.preventDefault()},
f1:function(a){var s,r,q=this
if(!q.f)return
s=q.cP(a)
r=q.gaW(q)
r.c=s.b
r.d.l(0,s.a)},
f_:function(a){var s,r,q=this
if(!q.f)return
s=q.cP(a)
r=q.gaW(q)
r.c=s.b
r.d.K(0,s.a)},
f5:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aQ(a)
if(p.x){s=p.ax(a)
r=p.b6(a)
if(p.gak().co(s,r))a.preventDefault()
return}s=p.ax(a)
q=p.aA(a)
if(p.ga9().co(s,q))a.preventDefault()},
f9:function(a){var s,r,q,p=this
p.aQ(a)
s=p.ax(a)
if(p.x){r=p.b6(a)
if(p.gak().bf(s,r))a.preventDefault()
return}q=p.aA(a)
if(p.ga9().bf(s,q))a.preventDefault()},
eS:function(a){var s,r,q,p=this
if(!p.bH(a)){p.aQ(a)
s=p.ax(a)
if(p.x){r=p.b6(a)
if(p.gak().bf(s,r))a.preventDefault()
return}q=p.aA(a)
if(p.ga9().bf(s,q))a.preventDefault()}},
f7:function(a){var s,r,q,p=this
p.aQ(a)
s=p.ax(a)
if(p.x){r=p.b6(a)
if(p.gak().be(s,r))a.preventDefault()
return}q=p.aA(a)
if(p.ga9().be(s,q))a.preventDefault()},
eQ:function(a){var s,r,q,p=this
if(!p.bH(a)){p.aQ(a)
s=p.ax(a)
if(p.x){r=p.b6(a)
if(p.gak().be(s,r))a.preventDefault()
return}q=p.aA(a)
if(p.ga9().be(s,q))a.preventDefault()}},
fb:function(a){var s,r,q=this
q.aQ(a)
s=new V.O(C.u.gfZ(a),C.u.gh_(a)).M(0,q.Q)
if(q.x){if(q.gak().hh(s))a.preventDefault()
return}r=q.aA(a)
if(q.ga9().hi(s,r))a.preventDefault()},
fd:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ax(q.y)
r=q.aA(q.y)
q.gak().f3(s,r,p)}},
fu:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bT(a)
s=r.bQ(a)
if(r.gaY().hg(s))a.preventDefault()},
fp:function(a){var s
this.bT(a)
s=this.bQ(a)
if(this.gaY().he(s))a.preventDefault()},
fs:function(a){var s
this.bT(a)
s=this.bQ(a)
if(this.gaY().hf(s))a.preventDefault()}}
D.c4.prototype={
av:function(a){var s=this.r
return s==null?null:s.v(a)},
e7:function(){return this.av(null)},
$ich:1}
D.ci.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
gdC:function(){var s=this.z
return s==null?this.z=D.y():s},
av:function(a){var s=this.y
return s==null?null:s.v(a)},
cV:function(a){var s=this.z
return s==null?null:s.v(a)},
f2:function(){return this.cV(null)},
ff:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.ek(a[r]))return!1
return!0},
eC:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcU(),q=this.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.b8()
m=n.a;(m==null?n.a=[]:m).push(r)}this.av(new D.ar())},
fj:function(a,b){var s,r,q,p
for(s=b.gO(b),r=this.gcU(),q=this.e;s.t();){p=s.gC(s)
C.a.K(q,p)
p.gm().K(0,r)}this.av(new D.as())},
ek:function(a){var s=C.a.H(this.f,a)
return s}}
V.I.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.I))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aa.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aa))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.hm.prototype={}
V.cq.prototype={
V:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cq))return!1
s=b.a
$.w().toString
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
i:function(a){var s,r,q,p,o=this,n=V.bT([o.a,o.d,o.r],3,0),m=V.bT([o.b,o.e,o.x],3,0),l=V.bT([o.c,o.f,o.y],3,0),k=n.length
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
V.au.prototype={
V:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cf:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.w().toString
if(Math.abs(b3-0)<1e-9)return V.a5()
s=1/b3
r=-l
q=-a2
return V.av((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
M:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.av(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bx:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.z(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bj:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.W(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.au))return!1
s=b.a
$.w().toString
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
A:function(a){var s,r,q,p,o,n=this,m=V.bT([n.a,n.e,n.y,n.cx],3,0),l=V.bT([n.b,n.f,n.z,n.cy],3,0),k=V.bT([n.c,n.r,n.Q,n.db],3,0),j=V.bT([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
u:function(){return this.A("")}}
V.N.prototype={
af:function(a){return new V.O(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"},
u:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.W.prototype={
b2:function(a,b){return new V.W(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
u:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aQ.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aQ))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.e6.prototype={
gat:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e6))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.O.prototype={
bd:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b},
M:function(a,b){return new V.O(this.a*b,this.b*b)},
ag:function(a,b){var s
$.w().toString
if(Math.abs(b-0)<1e-9){s=$.ag
return s==null?$.ag=new V.O(0,0):s}return new V.O(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.z.prototype={
bd:function(a){return Math.sqrt(this.a8(this))},
a8:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){return new V.z(V.k0(this.a,a.a,b),V.k0(this.b,a.b,b),V.k0(this.c,a.c,b))},
I:function(){var s=this,r=Math.sqrt(s.a8(s))
if(r===1)return s
return s.ag(0,r)},
ba:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.z(s*r-q*p,q*o-n*r,n*p-s*o)},
a_:function(a,b){return new V.z(this.a+b.a,this.b+b.b,this.c+b.c)},
b_:function(a){return new V.z(-this.a,-this.b,-this.c)},
ag:function(a,b){$.w().toString
if(Math.abs(b-0)<1e-9)return V.eJ()
return new V.z(this.a/b,this.b/b,this.c/b)},
dB:function(){$.w().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.z))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
u:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.bK.prototype={
bd:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bK))return!1
s=b.a
$.w().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
U.h5.prototype={
bA:function(a){var s=V.nY(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
L:function(a){var s=this.y
return s==null?null:s.v(a)},
scu:function(a,b){},
scl:function(a){var s,r=this,q=r.b
$.w().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bA(s)}r.L(new D.p("maximumLocation",q,r.b))}},
scn:function(a){var s,r=this,q=r.c
$.w().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bA(s)}r.L(new D.p("minimumLocation",q,r.c))}},
sae:function(a,b){var s,r=this
b=r.bA(b)
s=r.d
$.w().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.L(new D.p("location",s,b))}},
scm:function(a){var s,r,q=this,p=q.e
$.w().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.L(new D.p("maximumVelocity",p,a))}},
sZ:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.w().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.L(new D.p("velocity",r,a))}},
sc3:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.w().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.L(new D.p("dampening",s,a))}},
a6:function(a,b){var s,r,q,p=this,o=p.f
$.w().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sae(0,p.d+s*b)
o=p.x
$.w().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sZ(s)}}}
U.bv.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
sR:function(a,b){var s,r,q=this
if(!q.a.n(0,b)){s=q.a
q.a=b
r=q.b
if(r!=null)r.v(new D.p("matrix",s,b))}},
aZ:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bv))return!1
return this.a.n(0,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bx.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
L:function(a){var s=this.e
return s==null?null:s.v(a)},
ab:function(){return this.L(null)},
eA:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaP(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.L(new D.ar())},
fh:function(a,b){var s,r
for(s=b.gO(b),r=this.gaP();s.t();)s.gC(s).gm().K(0,r)
this.L(new D.as())},
aZ:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a4(o,o.length),n=H.S(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aZ(0,b,c)
s=s==null?q:q.M(0,s)}}p.f=s==null?V.a5():s
o=p.e
if(o!=null)o.aF(0)}return p.f},
n:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bx))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(p>=q.length)return H.e(q,p)
if(!J.U(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia_:1}
U.a_.prototype={}
U.cL.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.y():s},
L:function(a){var s=this.cy
return s==null?null:s.v(a)},
ab:function(){return this.L(null)},
b8:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga9().gdh().l(0,s.gbI())
a.ga9().gdF().l(0,s.gbK())
a.ga9().gct().l(0,s.gbM())
return!0},
bJ:function(a){var s=this,r=s.c,q=s.a
if(!r.n(0,q==null?null:q.gaW(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bL:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.af(a.d)
if(s.a8(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sae(0,-a.y.af(r).M(0,2).ag(0,s.gat()).a*2.5+p.z)
q.sZ(0)
p.Q=a.z.af(r).M(0,2).ag(0,s.gat())
p.ab()},
bN:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a8(s)>0.0001){r.b.sZ(r.Q.a*10*2.5)
r.ab()}},
aZ:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.a6(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.av(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$ia_:1}
U.cM.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.y():s},
L:function(a){var s=this.fx
return s==null?null:s.v(a)},
ab:function(){return this.L(null)},
b8:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga9().gdh().l(0,q.gbI())
a.ga9().gdF().l(0,q.gbK())
a.ga9().gct().l(0,q.gbM())
s=a.gak()
r=s.f
s=r==null?s.f=D.y():r
s.l(0,q.ges())
s=a.gak()
r=s.d
s=r==null?s.d=D.y():r
s.l(0,q.gev())
s=a.gaY()
r=s.b
s=r==null?s.b=D.y():r
s.l(0,q.gfL())
s=a.gaY()
r=s.d
s=r==null?s.d=D.y():r
s.l(0,q.gfJ())
s=a.gaY()
r=s.c
s=r==null?s.c=D.y():r
s.l(0,q.gfH())
return!0},
aN:function(a){return new V.O(a.a,a.b)},
bJ:function(a){var s=this
t.Z.a(a)
if(!s.d.n(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bL:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.af(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aN(a.y.af(r).M(0,2).ag(0,s.gat()))
p=n.c
p.sae(0,-q.a*2.5+n.cy)
o=n.b
o.sae(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aN(a.z.af(r).M(0,2).ag(0,s.gat()))
n.ab()},
bN:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sZ(-r.dx.a*10*2.5)
r.b.sZ(-r.dx.b*10*2.5)
r.ab()}},
eu:function(a){var s=this
if(t.u.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ew:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.n(0,a.x.b))return
s=a.c
r=a.d
q=n.aN(a.y.af(r).M(0,2).ag(0,s.gat()))
p=n.c
p.sae(0,-q.a*2.5+n.cy)
o=n.b
o.sae(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aN(a.z.af(r).M(0,2).ag(0,s.gat()))
n.ab()},
fM:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fK:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.af(a.d)
if(s.a8(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aN(a.y.af(r).M(0,2).ag(0,s.gat()))
p=n.c
p.sae(0,-q.a*2.5+n.cy)
o=n.b
o.sae(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aN(a.z.af(r).M(0,2).ag(0,s.gat()))
n.ab()},
fI:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a8(s)>0.0001){r.c.sZ(-r.dx.a*10*2.5)
r.b.sZ(-r.dx.b*10*2.5)
r.ab()}},
aZ:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.a6(0,s)
n=p.b
n.a6(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.av(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.M(0,V.av(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia_:1}
U.cN.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
L:function(a){var s=this.r
return s==null?null:s.v(a)},
b8:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga9()
r=s.e
s=r==null?s.e=D.y():r
r=this.gex()
s.l(0,r)
s=a.gak()
q=s.e;(q==null?s.e=D.y():q).l(0,r)
return!0},
ey:function(a){var s=this,r=s.b,q=s.a
if(!r.n(0,q==null?null:q.gaW(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.L(new D.p("zoom",r,q))}},
aZ:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.lR(s,s,s)}return r.f},
$ia_:1}
M.c0.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
N:function(a){var s=this.r
return s==null?null:s.v(a)},
aw:function(){return this.N(null)},
fl:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gP(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q].gm()
o=p.a;(o==null?p.a=[]:o).push(r)}this.N(new D.ar())},
fn:function(a,b){var s,r
for(s=b.gO(b),r=this.gP();s.t();)s.gC(s).gm().K(0,r)
this.N(new D.as())},
T:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a4(s,s.length),r=H.S(s).c;s.t();)r.a(s.d).T(a)
q.f=!1},
$iay:1}
M.c1.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
N:function(a){var s=this.r
return s==null?null:s.v(a)},
aw:function(){return this.N(null)},
saR:function(a){var s,r,q=this
if(a==null)a=new X.hw()
s=q.b
if(s!==a){if(s!=null)s.gm().K(0,q.gP())
r=q.b
q.b=a
a.gm().l(0,q.gP())
q.N(new D.p("camera",r,q.b))}},
sau:function(a,b){var s,r,q=this
if(b==null)b=X.jx(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gm().K(0,q.gP())
r=q.c
q.c=b
b.gm().l(0,q.gP())
q.N(new D.p("target",r,q.c))}},
saG:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().K(0,r.gP())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gP())
r.N(new D.p("technique",s,r.d))}},
T:function(a){var s,r=this
a.cq(r.d)
s=r.c
if(s!=null)s.G(a)
s=r.b
if(s!=null)s.G(a)
s=r.d
if(s!=null)s.a6(0,a)
s=r.e
s.a6(0,a)
s.T(a)
s=r.b
if(s!=null)s.a5(a)
s=r.c
if(s!=null)s.a5(a)
a.cp()},
$iay:1}
M.c8.prototype={
N:function(a){var s=this.y
return s==null?null:s.v(a)},
aw:function(){return this.N(null)},
eK:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gP(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.b8()
n=o.a;(n==null?o.a=[]:n).push(r)}this.N(new D.ar())},
eM:function(a,b){var s,r
for(s=b.gO(b),r=this.gP();s.t();)s.gC(s).gm().K(0,r)
this.N(new D.as())},
saR:function(a){var s,r,q=this
if(a==null)a=X.kh(null)
s=q.b
if(s!==a){if(s!=null)s.gm().K(0,q.gP())
r=q.b
q.b=a
a.gm().l(0,q.gP())
q.N(new D.p("camera",r,q.b))}},
sau:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().K(0,r.gP())
s=r.c
r.c=b
b.gm().l(0,r.gP())
r.N(new D.p("target",s,r.c))}},
saG:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().K(0,r.gP())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gP())
r.N(new D.p("technique",s,r.d))}},
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
T:function(a){var s,r,q,p=this
a.cq(p.d)
s=p.c
if(s!=null)s.G(a)
s=p.b
if(s!=null)s.G(a)
s=p.d
if(s!=null)s.a6(0,a)
for(s=p.e.a,r=new J.a4(s,s.length),q=H.S(r).c;r.t();)q.a(r.d).a6(0,a)
for(s=new J.a4(s,s.length),r=H.S(s).c;s.t();)r.a(s.d).T(a)
if(p.b!=null){a.cy.aE()
a.db.aE()}s=p.c
if(s!=null)s.a5(a)
a.cp()},
$iay:1}
M.cb.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
N:function(a){var s=this.b
return s==null?null:s.v(a)},
aw:function(){return this.N(null)},
T:function(a){var s=this.e
if(s!=null)s.T(a)
s=this.r
if(s!=null)s.T(a)},
$iay:1}
A.fW.prototype={}
A.fX.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h0:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
bb:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ab.prototype={
gap:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.ab))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.c3.prototype={}
A.cc.prototype={
d0:function(a,b){if(b!=null&&b.d)if(a!=null)a.dV(b)}}
A.hu.prototype={
aL:function(a,b,c,d){var s,r,q,p,o=c.length
if(0>=o)return H.e(c,0)
s=c[0]
$.w().toString
r=Math.abs(s-0)<1e-9
if(r){if(0>=d.length)return H.e(d,0)
q=d[0]
d=C.a.cC(d,1)
c=C.a.cC(c,1);--o}else q=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(r)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.q(q)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(p=0;p<o;++p){if(p>=c.length)return H.e(c,p)
a.a+="  offset = blurScale * "+H.q(c[p])+";\n"
if(p>=d.length)return H.e(d,p)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.q(d[p])+";\n"
if(p>=d.length)return H.e(d,p)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.q(d[p])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.cn.prototype={
e3:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.aT(""),d0=c8.fr
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
A.nd(c8,c9)
A.nf(c8,c9)
A.ne(c8,c9)
A.nh(c8,c9)
A.ni(c8,c9)
A.ng(c8,c9)
A.nj(c8,c9)
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
c3.bc(0,s.charCodeAt(0)==0?s:s,A.nc(c8))
c3.y=c3.gS(c3).h(0,"posAttr")
c3.Q=c3.gS(c3).h(0,"normAttr")
c3.z=c3.gS(c3).h(0,"binmAttr")
c3.ch=c3.gS(c3).h(0,"txt2DAttr")
c3.cx=c3.gS(c3).h(0,"txtCubeAttr")
c3.cy=c3.gS(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gp().B(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gp().B(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gp().B(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gp().B(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gp().B(0,"viewMat"))
if(c8.x1)c3.go=t.Q.a(c3.gp().B(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gp().B(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gp().B(0,"colorMat"))
c3.k3=[]
s=c8.aU
if(s>0){c3.k2=t.y.a(c3.gp().B(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.d(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.d(c6+q+c7))
r.push(d0.a(l))}}d0=c8.a
if(d0.a)c3.k4=t.g.a(c3.gp().B(0,"emissionClr"))
if(d0.c)c3.r2=t.a.a(c3.gp().B(0,"emissionTxt"))
d0=c8.b
if(d0.a)c3.rx=t.g.a(c3.gp().B(0,"ambientClr"))
if(d0.c)c3.x1=t.a.a(c3.gp().B(0,"ambientTxt"))
d0=c8.c
if(d0.a)c3.x2=t.g.a(c3.gp().B(0,"diffuseClr"))
if(d0.c)c3.y2=t.a.a(c3.gp().B(0,"diffuseTxt"))
d0=c8.d
if(d0.a)c3.aU=t.g.a(c3.gp().B(0,"invDiffuseClr"))
if(d0.c)c3.br=t.a.a(c3.gp().B(0,"invDiffuseTxt"))
d0=c8.e
s=d0.a
if(!s)r=d0.c
else r=!0
if(r){c3.dl=t.n.a(c3.gp().B(0,"shininess"))
if(s)c3.dj=t.g.a(c3.gp().B(0,"specularClr"))
if(d0.c)c3.dk=t.a.a(c3.gp().B(0,"specularTxt"))}if(c8.f.c)c3.dm=t.a.a(c3.gp().B(0,"bumpTxt"))
if(c8.db){d0=t.a
c3.dn=d0.a(c3.gp().B(0,"envSampler"))
s=c8.r
if(s.a)c3.dq=t.g.a(c3.gp().B(0,"reflectClr"))
if(s.c)c3.dr=d0.a(c3.gp().B(0,"reflectTxt"))
s=c8.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c3.ds=t.n.a(c3.gp().B(0,"refraction"))
if(r)c3.dt=t.g.a(c3.gp().B(0,"refractClr"))
if(s.c)c3.du=d0.a(c3.gp().B(0,"refractTxt"))}}d0=c8.y
if(d0.a)c3.dv=t.n.a(c3.gp().B(0,"alpha"))
if(d0.c)c3.dw=t.a.a(c3.gp().B(0,"alphaTxt"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.c6=P.M(r,t.W)
c3.c7=P.M(r,t.J)
for(r=t.y,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.ey(l,d,c,a3,a2,a1))}c3.c7.k(0,i,g)
o=c3.c6
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.c8=P.M(r,t.W)
c3.c9=P.M(r,t.L)
for(r=t.y,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
g.push(new A.ez(a6,a5,a4,l,d,a7))}c3.c9.k(0,i,g)
o=c3.c8
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.ca=P.M(r,t.W)
c3.cb=P.M(r,t.U)
for(r=t.y,q=t.g,p=t.Q,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.eB(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.cb.k(0,i,g)
a8=c3.ca
m=c3.r
if(m==null)H.f(P.d(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.d(c6+a9+c7))
a8.k(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.cc=P.M(s,t.W)
c3.cd=P.M(s,t.R)
for(s=t.y,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.o)(c8),++k){j=c8[k]
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
g.push(new A.eD(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.cd.k(0,i,g)
f=c3.cc
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
f.k(0,i,s.a(l))}}}},
ah:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.cz(b)}}
A.b3.prototype={
i:function(a){return"barLight"+this.a}}
A.b6.prototype={
i:function(a){return"dirLight"+this.a}}
A.bi.prototype={
i:function(a){return"pointLight"+this.a}}
A.bj.prototype={
i:function(a){return"spotLight"+this.a}}
A.hJ.prototype={
i:function(a){return this.bq}}
A.ey.prototype={}
A.ez.prototype={}
A.eB.prototype={}
A.eD.prototype={}
A.az.prototype={
bc:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cQ(b,35633)
r=n.cQ(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gay(),s)
q.attachShader(n.gay(),r)
q.linkProgram(n.gay())
if(!H.kP(q.getProgramParameter(n.gay(),35714))){o=q.getProgramInfoLog(n.gay())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.d("Failed to link shader: "+o))}n.fD()
n.fF()},
gS:function(a){var s=this.f
if(s==null)throw H.c(P.d("Must initialize the shader prior to getting the attributes."))
return s},
gp:function(){var s=this.r
if(s==null)throw H.c(P.d(u.C))
return s},
gay:function(){var s=this.e
if(s==null)throw H.c(P.d(u.F))
return s},
G:function(a){a.a.useProgram(this.e)
this.gS(this).h0()},
cQ:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.kP(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.d('Error compiling shader "'+H.q(q)+'": '+s))}return q},
fD:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.fM(l.getProgramParameter(o.gay(),35721))
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
m.push(new A.fW(l,q,p))}o.f=new A.fX(m)},
fF:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.fM(j.getProgramParameter(m.gay(),35718))
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
k.push(m.fY(o,n,q,p))}m.r=new A.iG(k)},
aM:function(a,b,c){var s=this.a
if(a===1)return new A.cH(s,b,c)
else return A.jI(s,this.e,b,a,c)},
em:function(a,b,c){var s=this.a
if(a===1)return new A.cK(s,b,c)
else return A.jI(s,this.e,b,a,c)},
en:function(a,b,c){var s=this.a
if(a===1)return new A.eC(s,b,c)
else return A.jI(s,this.e,b,a,c)},
bn:function(a,b){return new P.f_(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
fY:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aM(b,c,d)
case 5121:return s.aM(b,c,d)
case 5122:return s.aM(b,c,d)
case 5123:return s.aM(b,c,d)
case 5124:return s.aM(b,c,d)
case 5125:return s.aM(b,c,d)
case 5126:return new A.ev(s.a,c,d)
case 35664:return new A.cI(s.a,c,d)
case 35665:return new A.ew(s.a,c,d)
case 35666:return new A.ex(s.a,c,d)
case 35667:return new A.iD(s.a,c,d)
case 35668:return new A.iE(s.a,c,d)
case 35669:return new A.iF(s.a,c,d)
case 35674:return new A.iH(s.a,c,d)
case 35675:return new A.eA(s.a,c,d)
case 35676:return new A.cJ(s.a,c,d)
case 35678:return s.em(b,c,d)
case 35680:return s.en(b,c,d)
case 35670:throw H.c(s.bn("BOOL",c))
case 35671:throw H.c(s.bn("BOOL_VEC2",c))
case 35672:throw H.c(s.bn("BOOL_VEC3",c))
case 35673:throw H.c(s.bn("BOOL_VEC4",c))
default:throw H.c(P.d("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.bu.prototype={
i:function(a){return this.b}}
A.cC.prototype={}
A.cE.prototype={
e5:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.C,b="Required uniform value, ",a=", was not defined or used in shader."
""+"attribute vec3 posAttr;\n"
""+"attribute vec3 posAttr;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n"
s=""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n"
d.bc(0,s.charCodeAt(0)==0?s:s,A.mb(a0,a1))
d.x=d.gS(d).h(0,"posAttr")
d.y=t.y.a(d.gp().B(0,"txtCount"))
d.z=t.F.a(d.gp().B(0,"backClr"))
for(s=t.W,r=t.ch,q=d.dy,p=d.dx,o=d.db,n=d.cy,m=t.cj,l=d.cx,k=t.r,j=d.ch,i=d.Q,h=0;h<a0;++h){g=d.r
if(g==null)H.f(P.d(c))
f="txt"+h
e=g.h(0,f)
if(e==null)H.f(P.d(b+f+a))
i.push(k.a(e))
g=d.r
if(g==null)H.f(P.d(c))
f="clrMat"+h
e=g.h(0,f)
if(e==null)H.f(P.d(b+f+a))
j.push(m.a(e))
g=d.r
if(g==null)H.f(P.d(c))
f="srcLoc"+h
e=g.h(0,f)
if(e==null)H.f(P.d(b+f+a))
l.push(r.a(e))
g=d.r
if(g==null)H.f(P.d(c))
f="srcSize"+h
e=g.h(0,f)
if(e==null)H.f(P.d(b+f+a))
n.push(r.a(e))
g=d.r
if(g==null)H.f(P.d(c))
f="destLoc"+h
e=g.h(0,f)
if(e==null)H.f(P.d(b+f+a))
o.push(r.a(e))
g=d.r
if(g==null)H.f(P.d(c))
f="destSize"+h
e=g.h(0,f)
if(e==null)H.f(P.d(b+f+a))
p.push(r.a(e))
g=d.r
if(g==null)H.f(P.d(c))
f="flip"+h
e=g.h(0,f)
if(e==null)H.f(P.d(b+f+a))
q.push(s.a(e))}}}
A.iB.prototype={}
A.iG.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
B:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.d("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cH.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iD.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iE.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iF.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iC.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.ev.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.cI.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.ew.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.ex.prototype={
dW:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
dU:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.iH.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eA.prototype={
a3:function(a){var s=new Float32Array(H.bO(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cJ.prototype={
a3:function(a){var s=new Float32Array(H.bO(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.cK.prototype={
dV:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.eC.prototype={
cz:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.ja.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ci(q.b,b).ci(q.d.ci(q.c,b),c)
q=new V.W(p.a,p.b,p.c)
if(!J.U(a.f,q)){a.f=q
q=a.a
if(q!=null)q.aa()}a.sbh(p.I())
q=1-b
s=1-c
s=new V.aQ(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.U(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.aa()}},
$S:33}
F.ak.prototype={
aJ:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.d("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.d("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.ga1().b.push(s)
s.b=b
b.ga1().c.push(s)
s.c=c
c.ga1().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga1().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.aa()}},
eg:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.eJ()
if(n!=null)q=q.a_(0,n)
if(s!=null)q=q.a_(0,s)
if(r!=null)q=q.a_(0,r)
if(q.dB())return p
return q.I()},
ei:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b2(0,n)
q=new V.z(o.a,o.b,o.c).I()
o=r.b2(0,n)
return q.ba(new V.z(o.a,o.b,o.c).I()).I()},
c0:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.eg()
if(s==null){s=q.ei()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.aa()}return!0},
ef:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.eJ()
if(n!=null)q=q.a_(0,n)
if(s!=null)q=q.a_(0,s)
if(r!=null)q=q.a_(0,r)
if(q.dB())return p
return q.I()},
eh:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.w().toString
if(Math.abs(p-0)<1e-9){j=b.b2(0,e)
o=new V.z(j.a,j.b,j.c).I()
if(q.a-r.a<0)o=o.b_(0)}else{n=(j-s.b)/p
j=b.b2(0,e)
j=new V.W(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).b2(0,h)
o=new V.z(j.a,j.b,j.c).I()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b_(0)}m=l.d
if(m!=null){m=m.I()
o=m.ba(o).I().ba(m).I()}return o},
bZ:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.ef()
if(s==null){s=q.eh()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.aa()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
A:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gaV(p)
p=a+C.d.am(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gaV(o)
p=p+C.d.am(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gaV(o)
s=p+C.d.am(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.u()
return s+((p==null?"-":p)+"}")},
u:function(){return this.A("")}}
F.hA.prototype={
e2:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.d("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.d("May not create a line with vertices attached to different shapes."))
s.a=a
a.gas(a).b.push(s)
s.b=b
b.gas(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gas(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.aa()}},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
A:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gaV(s)
s=a+C.d.am(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gaV(r)
return s+C.d.am(C.b.i(r==null?-1:r),0)},
u:function(){return this.A("")}}
F.i0.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
A:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gaV(s)
return a+C.d.am(C.b.i(s),0)},
u:function(){return this.A("")}}
F.i9.prototype={
ga2:function(){var s=this.a
return s==null?this.a=new F.r(this,[]):s},
gbu:function(a){var s=this.b
return s==null?this.b=new F.bH(this,[]):s},
gas:function(a){var s=this.c
return s==null?this.c=new F.cB(this,[]):s},
ga1:function(){var s=this.d
return s==null?this.d=new F.cA(this,[]):s},
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
h6:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.ga2().Y()
s=d.ga2().c.length
for(b=a.ga2().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.r(d,[])
o.l(0,p.fX())}d.ga2().Y()
for(b=a.gbu(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.r(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bH(d,[]):m).a
m=o.a;(m==null?o.a=new F.r(o,[]):m).l(0,j)
o=new F.i0()
if(j.a==null)H.f(P.d("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.iT([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bH(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.v(c)}}}for(b=a.gas(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.r(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.r(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cB(d,[]):m).a
m=o.a;(m==null?o.a=new F.r(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.r(o,[]):m).l(0,g)
new F.hA().e2(h,g)}for(b=a.ga1().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.r(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.r(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.r(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cA(d,[]):m).a
m=o.a;(m==null?o.a=new F.r(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.r(o,[]):m).l(0,g)
m=o.a;(m==null?o.a=new F.r(o,[]):m).l(0,e)
new F.ak().aJ(h,g,e)}b=d.e
if(b!=null)b.aF(0)},
aB:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.ga1().aB()||!1
if(!r.ga2().aB())s=!1
q=r.e
if(q!=null)q.aF(0)
return s},
b9:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.ga2().c.length,c=$.Y(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.b1().a)!==0)++a
if((b&$.b0().a)!==0)++a
if((b&$.aH().a)!==0)++a
if((b&$.b2().a)!==0)++a
if((b&$.di().a)!==0)++a
if((b&$.dj().a)!==0)++a
if((b&$.bV().a)!==0)++a
if((b&$.b_().a)!==0)++a
s=a1.gcB(a1)
r=P.hC(d*s,0,!1)
e.a=0
q=P.lO(a,new F.ia(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.bO(r)),35044)
c.bindBuffer(f,g)
p=new Z.ai(new Z.eL(f,b),[],q,a1)
if(h.gbu(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.bH(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).Y()}b=b.e}o.push(b==null?0:b);++n}k=Z.jK(c,34963,o)
p.b.push(new Z.cd(0,o.length,k))}if(h.gas(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.cB(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).Y()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).Y()}b=b.e}o.push(b==null?0:b);++n}k=Z.jK(c,34963,o)
p.b.push(new Z.cd(1,o.length,k))}if(h.ga1().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.cA(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).Y()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).Y()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).Y()}b=b.e}o.push(b==null?0:b);++n}k=Z.jK(c,34963,o)
p.b.push(new Z.cd(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.ga2().c.length!==0){q.push("Vertices:")
q.push(s.ga2().A(r))}if(s.gbu(s).b.length!==0){q.push("Points:")
q.push(s.gbu(s).A(r))}if(s.gas(s).b.length!==0){q.push("Lines:")
q.push(s.gas(s).A(r))}if(s.ga1().b.length!==0){q.push("Faces:")
q.push(s.ga1().A(r))}return C.a.q(q,"\n")},
aa:function(){var s=this.e
return s==null?null:s.v(null)}}
F.ia.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fR(a),f=g.gcB(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.r(o,[]):m).c
if(n>=m.length)return H.e(m,n)
l=m[n].h5(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.e(r,k)
r[k]=i;++k}}e.a+=f
return new Z.bY(g,f,d*4,h.d)},
$S:34}
F.cA.prototype={
fP:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.r(s,[]):o).l(0,l)
o=s.a;(o==null?s.a=new F.r(s,[]):o).l(0,q)
o=s.a;(o==null?s.a=new F.r(s,[]):o).l(0,p)
n=new F.ak()
n.aJ(l,q,p)
m.push(n)}return m},
fQ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.r(s,[]):l).l(0,k)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,h)
f=new F.ak()
f.aJ(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,k)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,g)
f=new F.ak()
f.aJ(k,h,g)
e.push(f)}else{(l==null?s.a=new F.r(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,g)
f=new F.ak()
f.aJ(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,g)
l=s.a;(l==null?s.a=new F.r(s,[]):l).l(0,k)
f=new F.ak()
f.aJ(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gj:function(a){return this.b.length},
aB:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c0())q=!1
return q},
c_:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bZ())q=!1
return q},
i:function(a){return this.u()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(a))
return C.a.q(p,"\n")},
u:function(){return this.A("")}}
F.cB.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
A:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.e(q,s)
r.push(q[s].A(a+(""+s+". ")))}return C.a.q(r,"\n")},
u:function(){return this.A("")}}
F.bH.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
A:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(a))
return C.a.q(p,"\n")},
u:function(){return this.A("")}}
F.cO.prototype={
c2:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iO(s.cx,p,m,r,q,o,n,a,l)},
fX:function(){return this.c2(null)},
gas:function(a){var s=this.c
return s==null?this.c=new F.iS([],[]):s},
ga1:function(){var s=this.d
return s==null?this.d=new F.iP([],[],[]):s},
gaV:function(a){var s=this.a
if(s!=null)s.ga2().Y()
return this.e},
sbh:function(a){var s
if(!J.U(this.z,a)){this.z=a
s=this.a
if(s!=null)s.aa()}},
h5:function(a){var s,r,q,p,o=this,n=null
if(a.n(0,$.Y())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.b1())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.n(0,$.b0())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.n(0,$.aH())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.n(0,$.b2())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.di())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.n(0,$.dj())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.n(0,$.bV()))return[o.ch]
else if(a.n(0,$.b_())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
c0:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.eJ()
p.ga1().F(0,new F.iV(o))
p.r=o.a.I()
if(r){s.aa()
o=s.e
if(o!=null)o.aF(0)}return!0},
bZ:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.eJ()
p.ga1().F(0,new F.iU(o))
p.x=o.a.I()
if(r){s.aa()
o=s.e
if(o!=null)o.aF(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
A:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.d.am(C.b.i(q.e),0))
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
n.push(V.u(q.ch,3,0))
s=q.cx
s=s==null?p:s.u()
n.push(s==null?o:s)
r=C.a.q(n,", ")
return a+"{"+r+"}"},
u:function(){return this.A("")}}
F.iV.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.a_(0,r)}},
$S:7}
F.iU.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.a_(0,r)}},
$S:7}
F.r.prototype={
Y:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.d("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.aa()
return!0},
bp:function(a,b,c,d,e,f){var s=F.iO(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
aB:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c0()
return!0},
c_:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bZ()
return!0},
fT:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.I()
if(!J.U(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.v(null)}}}}}return!0},
i:function(a){return this.u()},
A:function(a){var s,r,q,p
this.Y()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].A(a))
return C.a.q(s,"\n")},
u:function(){return this.A("")}}
F.iP.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.iQ(s,b))
C.a.F(s.d,new F.iR(s,b))},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
return C.a.q(p,"\n")}}
F.iQ.prototype={
$1:function(a){if(!J.U(a.a,this.a))this.b.$1(a)},
$S:7}
F.iR.prototype={
$1:function(a){var s=this.a
if(!J.U(a.a,s)&&!J.U(a.b,s))this.b.$1(a)},
$S:7}
F.iS.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
return C.a.q(p,"\n")}}
F.iT.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].A(""))
return C.a.q(p,"\n")}}
O.hd.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
w:function(a){var s=this.r
return s==null?null:s.v(a)},
a6:function(a,b){},
bg:function(a,b){var s,r,q,p=this,o=null,n="GreyViewDepth",m=p.a
if(m==null){m=t.c_.a(a.fr.h(0,n))
if(m==null){m=new A.c3(a.a,n)
""+"uniform mat4 viewObjMat;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n"
""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n"
s=""+"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
""+"precision mediump float;\n"
""+"precision mediump float;\n\n"
""+"precision mediump float;\n\nuniform float width;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n"
""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n"
r=""+"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n  gl_FragColor = vec4(clr, 1.0);\n}\n"
m.bc(0,s.charCodeAt(0)==0?s:s,r.charCodeAt(0)==0?r:r)
m.x=m.gS(m).h(0,"posAttr")
r=t.n
m.y=r.a(m.gp().h(0,"width"))
m.z=r.a(m.gp().h(0,"stop"))
r=t.j
m.Q=r.a(m.gp().h(0,"viewObjMat"))
m.ch=r.a(m.gp().h(0,"projMat"))
a.b7(m)}m=p.a=m}s=b.e
if((!(s instanceof Z.ai)?b.e=null:s)==null){s=b.d
s=s==null?o:s.b9(new Z.bm(a.a),$.Y())
if(s==null)s=o
else{r=s.ad($.Y())
if(r!=null){q=m.x
q=q==null?o:q.c
r.e=q==null?0:q}}b.e=s}m.G(a)
s=p.b
r=p.c
q=m.y
if(q!=null)q.a.uniform1f(q.d,s-r)
s=p.c
r=m.z
if(r!=null)r.a.uniform1f(r.d,s)
s=a.cy
s=s.gR(s)
r=m.ch
if(r!=null)r.a3(s.V(0,!0))
s=a.gdR()
r=m.Q
if(r!=null)r.a3(s.V(0,!0))
s=t.C.a(b.e)
s.G(a)
s.T(a)
s.a5(a)
a.a.useProgram(o)
m.gS(m).bb()}}
O.dB.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.y():s},
w:function(a){var s=this.x
return s==null?null:s.v(a)},
ac:function(){return this.w(null)},
sbY:function(a){var s=this.r
$.w().toString
if(!(Math.abs(s-a)<1e-9)){this.r=a
this.w(new D.p("blurValue",s,a))}},
sdf:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gm().K(0,r.ga0())
s=r.e
r.e=a
if(a!=null)a.gm().l(0,r.ga0())
r.w(new D.p("colorTexture",s,r.e))}},
sbX:function(a){var s,r=this,q=r.f
if(q!=a){if(q!=null)q.gm().K(0,r.ga0())
s=r.f
r.f=a
if(a!=null)a.gm().l(0,r.ga0())
r.w(new D.p("blurTexture",s,r.f))
q=r.f==null
if(!(q&&s!=null))q=!q&&s==null
else q=!0
if(q){r.a=null
r.w(null)}}},
shs:function(a){var s,r=this
if(!r.b.n(0,a)){s=r.b
r.b=a
r.w(new D.p("textureMatrix",s,a))}},
sbW:function(a){var s,r=this
if(!r.c.n(0,a)){s=r.c
r.c=a
r.w(new D.p("blurAdjust",s,a))}},
a6:function(a,b){},
a7:function(a,b){if(b!=null)if(!C.a.H(a,b)){b.a=a.length
a.push(b)}},
bg:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a
if(e==null){s=g.f!=null
e=""+"GaussianBlur_"
e+=s?"1":"0"
r=e.charCodeAt(0)==0?e:e
q=new A.hu(s,r)
p=t.D.a(a.fr.h(0,r))
if(p==null){p=new A.cc(q,a.a,r)
e=""+"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
o=new P.aT("")
n=""+"precision mediump float;\n"
o.a=n
n+="\n"
o.a=n
n=o.a=n+"uniform sampler2D colorTxt;\n"
if(s){n+="uniform sampler2D blurTxt;\n"
o.a=n
n=o.a=n+"uniform vec4 blurAdj;\n"}else n=o.a=n+"uniform float blurValue;\n"
n+="uniform vec2 blurScale;\n"
o.a=n
n+="\n"
o.a=n
n+="varying vec2 txt2D;\n"
o.a=n
o.a=n+"\n"
q.aL(o,3,[0.75],[0.5])
q.aL(o,6,[0.42857,2.14286],[0.41667,0.08333])
q.aL(o,9,[0,1.8],[0.5122,0.2439])
q.aL(o,12,[0,1.38462,3.23077],[0.22703,0.31622,0.07027])
q.aL(o,15,[0.9375,2.8125],[0.36184,0.13816])
q.aL(o,18,[0.47368,2.36842,4.26316],[0.29916,0.16318,0.03766])
n=o.a+="void main()\n"
n=o.a=n+"{\n"
n=(s?o.a=n+"   float blurValue = dot(texture2D(blurTxt, txt2D), blurAdj);\n":n)+"   float blurOffset = abs(blurValue);\n"
o.a=n
n+="\n"
o.a=n
n+="   if     (blurOffset < 0.15) gl_FragColor = texture2D(colorTxt, txt2D);\n"
o.a=n
n+="   else if(blurOffset < 0.3)  gl_FragColor = blur3();\n"
o.a=n
n+="   else if(blurOffset < 0.45) gl_FragColor = blur6();\n"
o.a=n
n+="   else if(blurOffset < 0.6)  gl_FragColor = blur9();\n"
o.a=n
n+="   else if(blurOffset < 0.75) gl_FragColor = blur12();\n"
o.a=n
n+="   else if(blurOffset < 0.9)  gl_FragColor = blur15();\n"
o.a=n
n+="   else                       gl_FragColor = blur18();\n"
o.a=n
n=o.a=n+"}\n"
p.bc(0,e.charCodeAt(0)==0?e:e,n.charCodeAt(0)==0?n:n)
p.y=p.gS(p).h(0,"posAttr")
p.z=p.gS(p).h(0,"txtAttr")
p.Q=t.j.a(p.gp().h(0,"projViewObjMat"))
p.ch=t.Q.a(p.gp().h(0,"txt2DMat"))
n=t.G
p.db=n.a(p.gp().h(0,"colorTxt"))
p.cy=t.V.a(p.gp().h(0,"blurScale"))
if(s){p.dx=n.a(p.gp().h(0,"blurTxt"))
p.cx=t.F.a(p.gp().h(0,"blurAdj"))}else p.dy=t.n.a(p.gp().h(0,"blurValue"))
a.b7(p)}e=g.a=p
b.e=null}n=b.e
if((!(n instanceof Z.ai)?b.e=null:n)==null){n=b.d
if(n==null)n=f
else{m=$.Y()
l=$.aH()
l=n.b9(new Z.bm(a.a),new Z.aE(m.a|l.a))
n=l}if(n==null)n=f
else{m=n.ad($.Y())
if(m!=null){l=g.a
if(l==null)l=f
else{l=l.y
l=l==null?f:l.c}m.e=l==null?0:l}m=n.ad($.aH())
if(m!=null){l=g.a
if(l==null)l=f
else{l=l.z
l=l==null?f:l.c}m.e=l==null?1:l}}b.e=n}k=[]
g.a7(k,g.e)
e=e.x.a
if(e)g.a7(k,g.f)
if(k.length<=0)return
for(j=0;j<k.length;++j)k[j].G(a)
n=g.a
if(n!=null){n.G(a)
m=g.e
n.d0(n.db,m)
m=g.b
l=n.ch
if(l!=null)l.a3(m.V(0,!0))
m=g.d
l=a.c
i=a.d
h=n.cy
if(h!=null)h.a.uniform2f(h.d,m.a/l,m.b/i)
m=a.gdN()
n=n.Q
if(n!=null)n.a3(m.V(0,!0))}n=g.a
if(e){if(n!=null){e=g.f
n.d0(n.dx,e)
e=g.c
n=n.cx
if(n!=null)n.dW(e)}}else if(n!=null){e=g.r
n=n.dy
if(n!=null)n.a.uniform1f(n.d,e)}e=b.e
if(e instanceof Z.ai){e.G(a)
e.T(a)
e.a5(a)}else b.e=null
e=g.a
if(e!=null){a.a.useProgram(f)
e.gS(e).bb()}for(e=a.a,j=0;j<k.length;++j){n=k[j]
if(n.c){n.c=!1
e.activeTexture(33984+n.a)
e.bindTexture(3553,f)}}}}
O.dN.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.y():s},
w:function(a){var s=this.fr
return s==null?null:s.v(a)},
ac:function(){return this.w(null)},
cX:function(a){this.a=null
this.w(a)},
fB:function(){return this.cX(null)},
eE:function(a,b){return this.w(new D.ar())},
eG:function(a,b){return this.w(new D.as())},
gcj:function(){var s=this,r=s.dx
if(r==null){r=new D.ci([],[],[],[],[])
r.cw(r.geB(),r.gfe(),r.gfi())
r.gm().l(0,s.gcW())
r.gdC().l(0,s.ga0())
s.dx=r}return r},
gbV:function(){var s=this.r
return s==null?this.r=O.dO(this,"ambient"):s},
gc4:function(){var s=this.x
return s==null?this.x=O.dO(this,"diffuse"):s},
gby:function(){var s=this.z
return s==null?this.z=new O.hM(new V.I(0,0,0),this,"specular",new A.ab(!1,!1,!1)):s},
gdc:function(){var s=this.Q
return s==null?this.Q=new O.hI(this,"bump",new A.ab(!1,!1,!1)):s},
cO:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.v,a1=new H.Q(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gar()
o=a1.h(0,q.gar())
a1.k(0,p,o==null?1:o)}n=[]
a1.F(0,new O.hN(b,n))
C.a.b1(n,new O.hO())
m=new H.Q(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=[]
m.F(0,new O.hP(b,l))
C.a.b1(l,new O.hQ())
k=new H.Q(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gar()
o=k.h(0,q.gar())
k.k(0,p,o==null?1:o)}j=[]
k.F(0,new O.hR(b,j))
C.a.b1(j,new O.hS())
i=new H.Q(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.o)(a0),++r){q=a0[r]
s=q.gar()
p=i.h(0,q.gar())
i.k(0,s,p==null?1:p)}h=[]
i.F(0,new O.hT(b,h))
C.a.b1(h,new O.hU())
a0=C.b.a4(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hK(new V.aa(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.dO(b,"emission"):a2).c
s=b.gbV().c
p=b.gc4().c
o=b.y
o=(o==null?b.y=O.dO(b,"invDiffuse"):o).c
g=b.gby().c
f=b.gdc().c
e=b.cx
e=(e==null?b.cx=O.dO(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hL(new V.I(0,0,0),b,"refract",new A.ab(!1,!1,!1)):d).c
c=b.db
return A.lQ(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hH(b,"alpha",new A.ab(!1,!1,!1)):c).c,n,l,j,h)},
a7:function(a,b){if(b!=null)if(!C.a.H(a,b)){b.a=a.length
a.push(b)}},
a6:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aI(m==null?[]:m)
s=H.S(m).c
for(;m.t();){r=s.a(m.d)
q=$.iN
if(q==null)q=$.iN=new V.z(0,0,1)
r.c=q
p=$.iM
r.d=p==null?$.iM=new V.z(0,1,0):p
p=$.iL
r.e=p==null?$.iL=new V.z(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bx(q).I()
r.d=n.bx(r.d).I()
r.e=n.bx(r.e).I()}}},
bg:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null){s=a6.cO()
r=s.bq
a8=t.d1.a(a9.fr.h(0,r))
if(a8==null){q=a9.a
p=t.S
o=t.W
a8=new A.cn(s,[],P.M(p,o),P.M(p,t.J),P.M(p,o),P.M(p,t.L),P.M(p,o),P.M(p,t.U),P.M(p,o),P.M(p,t.R),q,r)
a8.e3(s,q)
a9.b7(a8)}a8=a6.a=a8
b0.e=null}n=a8.x
m=n.br
s=b0.e
if(!(s instanceof Z.ai))s=b0.e=null
if(s==null||!s.d.n(0,m)){s=n.k4
if(s){r=b0.d
if(r!=null)r.aB()}r=n.r1
if(r){q=b0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.ga1().c_()
q.ga2().c_()
q=q.e
if(q!=null)q.aF(0)}}q=n.rx
if(q){p=b0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga2().fT()
p=p.e
if(p!=null)p.aF(0)}}p=b0.d
l=p==null?a7:p.b9(new Z.bm(a9.a),m)
if(l==null)return
p=l.ad($.Y())
if(p!=null){o=a8.y
o=o==null?a7:o.c
p.e=o==null?0:o}if(s){s=l.ad($.b1())
if(s!=null){p=a8.Q
p=p==null?a7:p.c
s.e=p==null?1:p}}if(r){s=l.ad($.b0())
if(s!=null){r=a8.z
r=r==null?a7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.ad($.aH())
if(s!=null){r=a8.ch
r=r==null?a7:r.c
s.e=r==null?3:r}}if(q){s=l.ad($.b2())
if(s!=null){r=a8.cx
r=r==null?a7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.ad($.b_())
if(s!=null){r=a8.cy
r=r==null?a7:r.c
s.e=r==null?5:r}}b0.e=l}k=[]
a8.G(a9)
if(n.fr){s=a9.dx
s=s.gR(s)
r=a8.db
if(r!=null)r.a3(s.V(0,!0))}if(n.fx){s=a9.gdR()
r=a8.dx
if(r!=null)r.a3(s.V(0,!0))}s=a9.gdN()
r=a8.fr
if(r!=null)r.a3(s.V(0,!0))
if(n.go){s=a9.db
s=s.gR(s)
r=a8.dy
if(r!=null)r.a3(s.V(0,!0))}if(n.x1){s=V.jD()
r=a8.go
if(r!=null)r.a3(s.V(0,!0))}if(n.x2){s=V.a5()
r=a8.id
if(r!=null)r.a3(s.V(0,!0))}if(n.y1){s=V.a5()
r=a8.k1
if(r!=null)r.a3(s.V(0,!0))}if(n.aU>0){s=a6.e.a
j=s.length
r=a8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.e(s,i)
r=s[i]
q=a8.k3
if(i>=q.length)return H.e(q,i)
q=q[i]
h=new Float32Array(H.bO(r.V(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a6.f
r=r==null?a7:r.f
if(r==null)r=new V.I(0,0,0)
q=a8.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.f
a6.a7(k,s==null?a7:s.e)
s=a6.f
s=s==null?a7:s.e
a8.ah(a8.r2,s)}if(n.k1){s=n.b
if(s.a){r=a6.r
r=r==null?a7:r.f
if(r==null)r=new V.I(0,0,0)
q=a8.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.r
a6.a7(k,s==null?a7:s.e)
s=a6.r
s=s==null?a7:s.e
a8.ah(a8.x1,s)}s=n.c
if(s.a){r=a6.x
r=r==null?a7:r.f
if(r==null)r=new V.I(0,0,0)
q=a8.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.x
a6.a7(k,s==null?a7:s.e)
s=a6.x
s=s==null?a7:s.e
a8.ah(a8.y2,s)}s=n.d
if(s.a){r=a6.y
r=r==null?a7:r.f
if(r==null)r=new V.I(0,0,0)
q=a8.aU
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.y
a6.a7(k,s==null?a7:s.e)
s=a6.y
s=s==null?a7:s.e
a8.ah(a8.br,s)}s=n.e
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.z
q=q==null?a7:q.ch
if(q==null)q=100
p=a8.dl
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.z
r=r==null?a7:r.f
if(r==null)r=new V.I(1,1,1)
q=a8.dj
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.z
a6.a7(k,s==null?a7:s.e)
s=a6.z
s=s==null?a7:s.e
a8.ah(a8.dk,s)}s=n.z
if(s.length>0){g=new H.Q(t.v)
r=a6.dx
r=r==null?a7:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gar()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
p=a8.c7.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ghz()
o=$.aw
p=p.bj(o==null?$.aw=new V.W(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghE()
o=$.aw
p=p.bj(o==null?$.aw=new V.W(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaT(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gdi()){p=e.gd6()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd7()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd8()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a8.c6.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=a9.db
a=r.gR(r)
a0=new H.Q(t.v)
r=a6.dx
r=r==null?a7:r.f
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
c=a0.h(0,0)
if(c==null)c=0
a0.k(0,0,c+1)
p=a8.c9.h(0,0)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=a.bx(e.c).I()
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.b
o=b.f
o.a.uniform3f(o.d,p.a,p.b,p.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=a8.c8.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=a9.db
a=r.gR(r)
a1=new H.Q(t.v)
r=a6.dx
r=r==null?a7:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gar()
c=a1.h(0,d)
if(c==null)c=0
a1.k(0,d,c+1)
p=a8.cb.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
a2=a.M(0,e.gR(e))
p=e.gR(e)
o=$.aw
p=p.bj(o==null?$.aw=new V.W(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aw
p=a2.bj(p==null?$.aw=new V.W(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaT(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaH()
p=a2.cf(0)
o=b.d
if(o!=null){h=new Float32Array(H.bO(new V.cq(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).V(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gaH()
p=e.gaH()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaH()
o=p.gck(p)
if(o){o=b.f
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gb0()
p=e.gdX()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb0()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gb0()
o=p.gck(p)
if(o){o=b.r
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.gdi()){p=e.gd6()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd7()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd8()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a8.ca.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=a9.db
a=r.gR(r)
a5=new H.Q(t.v)
r=a6.dx
r=r==null?a7:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gar()
c=a5.h(0,d)
if(c==null)c=0
a5.k(0,d,c+1)
p=a8.cd.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ghj(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghC(e).I()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bj(e.ghj(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaT(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaH()
p=e.gct()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gcr(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghN()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghO()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaH()
p=e.gaH()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaH()
o=p.gck(p)
if(o){o=b.dx
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gb0()
p=e.gdX()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb0()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gb0()
o=p.gck(p)
if(o){o=b.dy
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.ghD()){p=e.ghB()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghA()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gdi()){p=e.gd6()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd7()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd8()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a5.h(0,q)
if(j==null)j=0
q=a8.cc.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.c){s=a6.Q
a6.a7(k,s==null?a7:s.e)
s=a6.Q
s=s==null?a7:s.e
a8.ah(a8.dm,s)}if(n.dy){s=a9.Q
if(s==null){s=a9.db
s=a9.Q=s.gR(s).cf(0)}r=a8.fy
if(r!=null)r.a3(s.V(0,!0))}if(n.db){a6.a7(k,a7)
a8.ah(a8.dn,a7)
s=n.r
if(s.a){r=a6.cx
r=r==null?a7:r.f
if(r==null)r=new V.I(1,1,1)
q=a8.dq
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.cx
a6.a7(k,s==null?a7:s.e)
s=a6.cx
s=s==null?a7:s.e
a8.ah(a8.dr,s)}s=n.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.cy
q=q==null?a7:q.ch
if(q==null)q=0
p=a8.ds
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.cy
r=r==null?a7:r.f
if(r==null)r=new V.I(1,1,1)
q=a8.dt
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.cy
a6.a7(k,s==null?a7:s.e)
s=a6.cy
s=s==null?a7:s.e
a8.ah(a8.du,s)}}s=n.y
r=s.a
q=!r
if(q)p=s.c
else p=!0
if(p){if(r){r=a6.db
r=r==null?a7:r.f
if(r==null)r=1
p=a8.dv
if(p!=null)p.a.uniform1f(p.d,r)}if(s.c){r=a6.db
a6.a7(k,r==null?a7:r.e)
r=a6.db
r=r==null?a7:r.e
a8.ah(a8.dw,r)}r=a9.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].G(a9)
r=t.C.a(b0.e)
r.G(a9)
r.T(a9)
r.a5(a9)
if(q)s=s.c
else s=!0
if(s)a9.a.disable(3042)
for(s=a9.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a7)}}s.useProgram(a7)
a8.gS(a8).bb()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cO().bq}}
O.hN.prototype={
$2:function(a,b){return this.b.push(new A.b3(a,C.b.a4(b+3,4)*4))},
$S:8}
O.hO.prototype={
$2:function(a,b){return C.b.ai(a.a,b.a)},
$S:37}
O.hP.prototype={
$2:function(a,b){return this.b.push(new A.b6(a,C.b.a4(b+3,4)*4))},
$S:8}
O.hQ.prototype={
$2:function(a,b){return C.b.ai(a.a,b.a)},
$S:38}
O.hR.prototype={
$2:function(a,b){return this.b.push(new A.bi(a,C.b.a4(b+3,4)*4))},
$S:8}
O.hS.prototype={
$2:function(a,b){return C.b.ai(a.a,b.a)},
$S:39}
O.hT.prototype={
$2:function(a,b){return this.b.push(new A.bj(a,C.b.a4(b+3,4)*4))},
$S:8}
O.hU.prototype={
$2:function(a,b){return C.b.ai(a.a,b.a)},
$S:40}
O.hH.prototype={
az:function(){var s,r=this
r.cE()
s=r.f
$.w().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.w(new D.p(r.b,s,1))}}}
O.co.prototype={
w:function(a){return this.a.w(a)},
ac:function(){return this.w(null)},
az:function(){},
bR:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.az()
s=q.a
s.a=null
s.w(null)}},
sbh:function(a){var s,r=this,q=r.c
if(!q.c)r.bR(new A.ab(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().K(0,r.ga0())
s=r.e
r.e=a
a.gm().l(0,r.ga0())
r.a.w(new D.p(r.b+".textureCube",s,r.e))}}}
O.hI.prototype={}
O.cp.prototype={
cZ:function(a){var s,r=this
if(!r.f.n(0,a)){s=r.f
r.f=a
r.a.w(new D.p(r.b+".color",s,a))}},
az:function(){this.cE()
this.cZ(new V.I(1,1,1))},
saT:function(a,b){this.bR(new A.ab(!0,!1,this.c.c))
this.cZ(b)}}
O.hK.prototype={}
O.hL.prototype={
az:function(){var s,r=this
r.cF()
s=r.ch
$.w().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.w(new D.p(r.b+".refraction",s,1))}}}
O.hM.prototype={
d_:function(a){var s=this,r=s.ch
$.w().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.w(new D.p(s.b+".shininess",r,a))}},
az:function(){this.cF()
this.d_(100)}}
O.eb.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
w:function(a){var s=this.e
return s==null?null:s.v(a)},
ac:function(){return this.w(null)},
a6:function(a,b){},
bg:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.x.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.cC(a.a,"Skybox")
s.bc(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gS(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gp().h(0,"fov"))
s.z=r.a(s.gp().h(0,"ratio"))
s.Q=t.g.a(s.gp().h(0,"boxClr"))
s.ch=t.a.a(s.gp().h(0,"boxTxt"))
s.cx=t.j.a(s.gp().h(0,"viewMat"))
a.b7(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.b9(new Z.bm(a.a),$.Y())
if(r==null)r=l
else{q=r.ad($.Y())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.G(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.G(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.cz(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.gR(r).cf(0)
p=p.cx
if(p!=null)p.a3(r.V(0,!0))}r=b.e
if(r instanceof Z.ai){r.G(a)
r.T(a)
r.a5(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gS(r).bb()}o.a5(a)}}
O.ik.prototype={}
O.eo.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.y():s},
w:function(a){var s=this.r
return s==null?null:s.v(a)},
ac:function(){return this.w(null)},
eU:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga0(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.f
if(o==null)o=p.f=new D.b8()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ac()},
eW:function(a,b){var s,r
for(s=b.gO(b),r=this.ga0();s.t();)s.gC(s).gm().K(0,r)
this.ac()},
a6:function(a,b){},
er:function(a){a=C.b.a4(a+3,4)*4
if(a<=0)return 4
return a},
bg:function(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.c.a,a2=a.er(a1.length)
if(a2!==a.d||a.e!==a.f){a.d=a2
a.f=a.e
a.a=null}s=a.a
if(s==null){r=a.e
q=r.a
s=t.Y.a(a3.fr.h(0,"TextureLayout_"+a2+"_"+C.b.i(q)))
if(s==null){p=a3.a
s=new A.cE([],[],[],[],[],[],[],p,"TextureLayout_"+a2+"_"+C.b.i(q))
s.e5(a2,r,p)
a3.b7(s)}s=a.a=s}if(a4.e==null){r=a4.d
r=r==null?a0:r.b9(new Z.bm(a3.a),$.Y())
if(r==null)r=a0
else{q=r.ad($.Y())
if(q!=null){p=s.x
p=p==null?a0:p.c
q.e=p==null?0:p}}a4.e=r}s.G(a3)
o=[]
for(r=s.dy,q=s.dx,p=s.db,n=s.cy,m=s.cx,l=s.ch,k=s.Q,j=0,i=0;i<a1.length;++i){h=a1[i]
g=h.a
if(!C.a.H(o,g)){g.a=o.length
o.push(g)}if(j<0||j>=k.length)return H.e(k,j)
f=k[j]
e=g.d
d=f.a
f=f.d
if(!e)d.uniform1i(f,0)
else d.uniform1i(f,g.a)
f=h.b
if(j>=l.length)return H.e(l,j)
e=l[j]
c=new Float32Array(H.bO(f.V(0,!0)))
e.a.uniformMatrix4fv(e.d,!1,c)
b=h.c
if(j>=m.length)return H.e(m,j)
f=m[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=n.length)return H.e(n,j)
f=n[j]
f.a.uniform2f(f.d,b.c,b.d)
b=h.d
if(j>=p.length)return H.e(p,j)
f=p[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=q.length)return H.e(q,j)
f=q[j]
f.a.uniform2f(f.d,b.c,b.d)
if(j>=r.length)return H.e(r,j)
f=r[j]
f.a.uniform1i(f.d,0);++j}a1=s.y
if(a1!=null)a1.a.uniform1i(a1.d,j)
a1=s.z
if(a1!=null)a1.dU(a.b)
for(i=0;i<o.length;++i)o[i].G(a3)
a1=a4.e
if(a1 instanceof Z.ai){a1.G(a3)
a1.T(a3)
a1.a5(a3)}else a4.e=null
a1=a3.a
a1.useProgram(a0)
s.gS(s).bb()
for(i=0;i<o.length;++i){r=o[i]
if(r.c){r.c=!1
a1.activeTexture(33984+r.a)
a1.bindTexture(3553,a0)}}}}
O.cF.prototype={}
T.il.prototype={}
T.im.prototype={}
T.io.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.y():s},
G:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.ip.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.y():s},
G:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
a5:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.iq.prototype={
dE:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
i.toString
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.ip(i)
r.aO(s,i,p,34069,!1,!1)
r.aO(s,i,m,34070,!1,!1)
r.aO(s,i,o,34071,!1,!1)
r.aO(s,i,l,34072,!1,!1)
r.aO(s,i,n,34073,!1,!1)
r.aO(s,i,k,34074,!1,!1)
return s},
dD:function(a){return this.dE(a,".png")},
aO:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.X(s,"load",new T.ir(this,s,!1,b,!1,d,a),!1)},
fC:function(a,b,c){var s,r,q,p,o,n
b=V.dh(b)
s=a.width
r=V.dh(s==null?512:s)
s=a.height
q=V.dh(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.ju()
p.width=r
p.height=q
o=t.b.a(C.h.dS(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.nB(o.getImageData(0,0,s,n==null?512:n))}}}
T.ir.prototype={
$1:function(a){var s=this,r=s.a,q=r.fC(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.t.hr(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.c5()}++r.e},
$S:3}
X.h_.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.y():s},
X:function(a){var s=this.fr
return s==null?null:s.v(a)},
san:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.X(new D.p("width",s,b))}},
saj:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.X(new D.p("height",s,b))}},
G:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
g.san(0,C.c.U(r*g.r))
s=s.drawingBufferHeight
if(s==null)s=512
g.saj(0,C.c.U(s*g.x))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=H.fM(s.getParameter(3379))
n=V.dh(q)
m=V.dh(p)
o=V.dh(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.t.dP(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.kq(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.c5()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.c5()
q=r.b
g.z=q
g.c=r.r
g.d=r.x
s.bindTexture(e,q)
r=s.createRenderbuffer()
r.toString
g.Q=r
s.bindRenderbuffer(d,r)
s.renderbufferStorage(d,33189,g.c,g.d)
r=s.createFramebuffer()
r.toString
g.y=r
s.bindFramebuffer(c,r)
s.framebufferTexture2D(c,36064,e,g.z,0)
s.framebufferRenderbuffer(c,36096,d,g.Q)
s.bindTexture(e,f)
s.bindRenderbuffer(d,f)
s.bindFramebuffer(c,f)}s=a.a
s.bindFramebuffer(c,g.y)
s.enable(2884)
s.enable(2929)
s.depthFunc(513)
j=g.dy
r=j.c
a.c=C.c.U(r*g.a)
q=j.d
a.d=C.c.U(q*g.b)
p=g.c
i=C.c.U(j.a*p)
l=g.d
s.viewport(i,C.c.U(j.b*l),C.c.U(r*p),C.c.U(q*l))
s.clearDepth(g.db)
if(g.cy){r=g.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
h=16640}else h=256
if(h>0)s.clear(h)},
a5:function(a){a.a.bindFramebuffer(36160,null)}}
X.ht.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.y():s},
G:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.c.U(q.a*s)
o=C.c.U(q.b*r)
n=C.c.U(q.c*s)
a.c=n
q=C.c.U(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)},
a5:function(a){}}
X.hw.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.y():s},
G:function(a){var s
a.cy.bv(V.a5())
s=V.a5()
a.db.bv(s)},
a5:function(a){a.cy.aE()
a.db.aE()}}
X.e1.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.y():s},
X:function(a){var s=this.f
return s==null?null:s.v(a)},
eb:function(){return this.X(null)},
G:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.av(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bv(i)
s=$.la()
r=q.b
if(r!=null)s=r.aZ(0,a,q).M(0,s)
a.db.bv(s)},
a5:function(a){a.cy.aE()
a.db.aE()}}
X.ii.prototype={}
V.jp.prototype={
$1:function(a){var s=C.c.cs(this.a.gh2(),2)
if(s!=="0.00")P.k2(s+" fps")},
$S:41}
V.ib.prototype={
d5:function(a){var s,r,q,p,o,n,m=this.fE(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.K(C.a.h4(a)),s=new P.bN(m.dQ(new H.bA(s,s.gj(s))).a());s.t();){r=s.gC(s)
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
if(H.l4(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.mF(C.M,r,C.p,!1)
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
fE:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.iv(P.M(s,t.aJ),P.M(s,t.aX),P.kc(s))
h.d=h.J(0,q)
s=h.J(0,q).q(0,p)
r=new K.R([])
r.W(new H.K("*"))
s.a.push(r)
s.c=!0
s=[]
h.J(0,p).q(0,p).a.push(new K.aO(s))
r=new K.R([])
r.W(new H.K("*"))
s.push(r)
r=h.J(0,p).q(0,"BoldEnd")
s=new K.R([])
s.W(new H.K("*"))
r.a.push(s)
r.c=!0
r=h.J(0,q).q(0,o)
s=new K.R([])
s.W(new H.K("_"))
r.a.push(s)
r.c=!0
r=[]
h.J(0,o).q(0,o).a.push(new K.aO(r))
s=new K.R([])
s.W(new H.K("_"))
r.push(s)
s=h.J(0,o).q(0,n)
r=new K.R([])
r.W(new H.K("_"))
s.a.push(r)
s.c=!0
s=h.J(0,q).q(0,m)
r=new K.R([])
r.W(new H.K("`"))
s.a.push(r)
s.c=!0
s=[]
h.J(0,m).q(0,m).a.push(new K.aO(s))
r=new K.R([])
r.W(new H.K("`"))
s.push(r)
r=h.J(0,m).q(0,"CodeEnd")
s=new K.R([])
s.W(new H.K("`"))
r.a.push(s)
r.c=!0
r=h.J(0,q).q(0,l)
s=new K.R([])
s.W(new H.K("["))
r.a.push(s)
r.c=!0
r=h.J(0,l).q(0,k)
s=new K.R([])
s.W(new H.K("|"))
r.a.push(s)
s=h.J(0,l).q(0,j)
r=new K.R([])
r.W(new H.K("]"))
s.a.push(r)
s.c=!0
s=[]
h.J(0,l).q(0,l).a.push(new K.aO(s))
r=new K.R([])
r.W(new H.K("|]"))
s.push(r)
r=h.J(0,k).q(0,j)
s=new K.R([])
s.W(new H.K("]"))
r.a.push(s)
r.c=!0
r=[]
h.J(0,k).q(0,k).a.push(new K.aO(r))
s=new K.R([])
s.W(new H.K("|]"))
r.push(s)
h.J(0,q).q(0,i).a.push(new K.fU())
s=[]
h.J(0,i).q(0,i).a.push(new K.aO(s))
r=new K.R([])
r.W(new H.K("*_`["))
s.push(r)
r=h.J(0,"BoldEnd")
r.d=r.a.bi(p)
r=h.J(0,n)
r.d=r.a.bi(o)
r=h.J(0,"CodeEnd")
r.d=r.a.bi(m)
r=h.J(0,j)
r.d=r.a.bi("Link")
r=h.J(0,i)
r.d=r.a.bi(i)
return this.b=h}}
V.id.prototype={
$1:function(a){P.kt(C.j,new V.ic(this.a))},
$S:3}
V.ic.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.c.U(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.q(-0.01*s)+"px"
q.top=r},
$S:2};(function aliases(){var s=J.a.prototype
s.e_=s.i
s=J.bc.prototype
s.e0=s.i
s=K.dC.prototype
s.dZ=s.aX
s.bz=s.i
s=O.co.prototype
s.cE=s.az
s=O.cp.prototype
s.cF=s.az})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mR","lL",42)
r(P,"nv","mi",9)
r(P,"nw","mj",9)
r(P,"nx","mk",9)
q(P,"kX","nq",2)
r(W,"p_","hi",32)
var k
p(k=E.bw.prototype,"gdL",0,0,null,["$1","$0"],["dM","hd"],0,0)
p(k,"gdJ",0,0,null,["$1","$0"],["dK","hc"],0,0)
p(k,"gdH",0,0,null,["$1","$0"],["dI","h9"],0,0)
o(k,"gh7","h8",6)
o(k,"gha","hb",6)
p(k=E.ep.prototype,"gcH",0,0,null,["$1","$0"],["cJ","cI"],0,0)
n(k,"ghn","dO",2)
m(k=X.eI.prototype,"geX","eY",3)
m(k,"geH","eI",3)
m(k,"geN","eO",4)
m(k,"gf0","f1",14)
m(k,"geZ","f_",14)
m(k,"gf4","f5",4)
m(k,"gf8","f9",4)
m(k,"geR","eS",4)
m(k,"gf6","f7",4)
m(k,"geP","eQ",4)
m(k,"gfa","fb",28)
m(k,"gfc","fd",3)
m(k,"gft","fu",12)
m(k,"gfo","fp",12)
m(k,"gfq","fs",12)
p(D.c4.prototype,"ge6",0,0,null,["$1","$0"],["av","e7"],0,0)
p(k=D.ci.prototype,"gcU",0,0,null,["$1","$0"],["cV","f2"],0,0)
m(k,"gfe","ff",30)
o(k,"geB","eC",17)
o(k,"gfi","fj",17)
l(V.O.prototype,"gj","bd",13)
l(V.z.prototype,"gj","bd",13)
l(V.bK.prototype,"gj","bd",13)
p(k=U.bx.prototype,"gaP",0,0,null,["$1","$0"],["L","ab"],0,0)
o(k,"gez","eA",18)
o(k,"gfg","fh",18)
p(k=U.cL.prototype,"gaP",0,0,null,["$1","$0"],["L","ab"],0,0)
m(k,"gbI","bJ",11)
m(k,"gbK","bL",11)
m(k,"gbM","bN",11)
p(k=U.cM.prototype,"gaP",0,0,null,["$1","$0"],["L","ab"],0,0)
m(k,"gbI","bJ",1)
m(k,"gbK","bL",1)
m(k,"gbM","bN",1)
m(k,"ges","eu",1)
m(k,"gev","ew",1)
m(k,"gfL","fM",1)
m(k,"gfJ","fK",1)
m(k,"gfH","fI",1)
m(U.cN.prototype,"gex","ey",1)
p(k=M.c0.prototype,"gP",0,0,null,["$1","$0"],["N","aw"],0,0)
o(k,"gfk","fl",19)
o(k,"gfm","fn",19)
p(M.c1.prototype,"gP",0,0,null,["$1","$0"],["N","aw"],0,0)
p(k=M.c8.prototype,"gP",0,0,null,["$1","$0"],["N","aw"],0,0)
o(k,"geJ","eK",6)
o(k,"geL","eM",6)
p(M.cb.prototype,"gP",0,0,null,["$1","$0"],["N","aw"],0,0)
p(O.dB.prototype,"ga0",0,0,null,["$1","$0"],["w","ac"],0,0)
p(k=O.dN.prototype,"ga0",0,0,null,["$1","$0"],["w","ac"],0,0)
p(k,"gcW",0,0,null,["$1","$0"],["cX","fB"],0,0)
o(k,"geD","eE",20)
o(k,"geF","eG",20)
p(O.co.prototype,"ga0",0,0,null,["$1","$0"],["w","ac"],0,0)
p(O.eb.prototype,"ga0",0,0,null,["$1","$0"],["w","ac"],0,0)
p(k=O.eo.prototype,"ga0",0,0,null,["$1","$0"],["w","ac"],0,0)
o(k,"geT","eU",21)
o(k,"geV","eW",21)
p(X.e1.prototype,"gea",0,0,null,["$1","$0"],["X","eb"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.jB,J.a,J.a4,P.D,P.cT,P.h,H.bA,P.dE,H.c9,H.eG,H.iz,H.i_,H.fp,H.bs,P.T,H.hB,H.dM,H.hx,H.ae,H.f2,P.d4,P.bM,P.bN,P.eN,P.ej,P.ek,P.j9,P.d9,P.j2,P.cS,P.B,P.ea,P.dr,P.j8,P.P,P.b7,P.e0,P.cD,P.f_,P.hs,P.ad,P.aT,W.h9,W.jw,W.jL,W.E,W.ca,P.d6,P.fi,K.fU,K.dC,K.R,L.eg,L.eq,L.er,L.iv,O.bt,O.cr,E.h0,E.bw,E.br,E.bE,E.eX,E.i4,E.ep,Z.eL,Z.bm,Z.ai,Z.cd,Z.aE,D.h2,D.b8,D.L,X.bZ,X.dJ,X.hz,X.hF,X.Z,X.hZ,X.iw,X.eI,D.c4,V.I,V.aa,V.hm,V.cq,V.au,V.N,V.W,V.aQ,V.e6,V.O,V.z,V.bK,U.cL,U.cM,U.cN,M.c1,M.c8,M.cb,A.fW,A.fX,A.ab,A.hu,A.b3,A.b6,A.bi,A.bj,A.hJ,A.ey,A.ez,A.eB,A.eD,A.bu,A.iB,A.iG,F.ak,F.hA,F.i0,F.i9,F.cA,F.cB,F.bH,F.cO,F.r,F.iP,F.iS,F.iT,O.ik,O.co,O.hK,O.cF,T.iq,X.ii,X.hw,X.e1,V.ib])
q(J.a,[J.dF,J.cg,J.bc,J.al,J.bz,J.bb,H.ct,W.b,W.fT,W.dq,W.c_,W.aq,W.C,W.eS,W.ac,W.hc,W.he,W.eT,W.c6,W.eV,W.hf,W.i,W.f0,W.aL,W.hv,W.f4,W.ba,W.hE,W.hW,W.f8,W.f9,W.aN,W.fa,W.fc,W.aP,W.fg,W.fj,W.aR,W.fk,W.aS,W.fq,W.am,W.fu,W.it,W.aU,W.fw,W.ix,W.iI,W.fC,W.fE,W.fG,W.fI,W.fK,P.be,P.f6,P.bh,P.fe,P.i1,P.fr,P.bl,P.fy,P.fY,P.eO,P.bG,P.fn])
q(J.bc,[J.e2,J.bI,J.at])
r(J.dH,J.al)
q(J.bz,[J.cf,J.dG])
q(P.D,[H.dK,P.eu,H.dI,H.eF,H.e8,H.eY,P.dm,P.dY,P.ao,P.eH,P.eE,P.eh,P.ds,P.du])
r(P.cj,P.cT)
q(P.cj,[H.bJ,W.eQ,W.eP,P.dz])
r(H.K,H.bJ)
q(P.h,[H.j,H.bf,H.cP,P.ce])
r(H.c7,H.bf)
q(P.dE,[H.cm,H.eM])
r(H.cw,P.eu)
q(H.bs,[H.ij,H.hy,H.jk,H.jl,H.jm,P.iX,P.iW,P.iY,P.iZ,P.j7,P.j6,P.jf,P.j4,P.j5,P.hG,P.hg,P.hh,W.hX,W.hY,W.i8,W.ig,W.j_,P.jb,P.jh,P.hq,P.hr,P.fZ,E.i5,E.i6,E.i7,E.is,D.ho,D.hp,F.ja,F.ia,F.iV,F.iU,F.iQ,F.iR,O.hN,O.hO,O.hP,O.hQ,O.hR,O.hS,O.hT,O.hU,T.ir,V.jp,V.id,V.ic])
q(H.ij,[H.ie,H.bW])
r(P.cl,P.T)
r(H.Q,P.cl)
r(H.aM,H.j)
r(H.bD,H.ct)
q(H.bD,[H.cV,H.cX])
r(H.cW,H.cV)
r(H.bg,H.cW)
r(H.cY,H.cX)
r(H.cs,H.cY)
q(H.cs,[H.dS,H.dT,H.dU,H.dV,H.dW,H.cu,H.dX])
r(H.d5,H.eY)
r(P.d1,P.ce)
r(P.j3,P.j9)
r(P.cZ,P.d9)
r(P.cR,P.cZ)
r(P.dt,P.ek)
r(P.hj,P.dr)
r(P.iJ,P.hj)
r(P.iK,P.dt)
q(P.ao,[P.cz,P.dD])
q(W.b,[W.v,W.dy,W.aA,W.d_,W.aB,W.af,W.d2,W.eK,W.bL,P.dp,P.aJ])
q(W.v,[W.G,W.aj])
q(W.G,[W.l,P.k])
q(W.l,[W.dk,W.dl,W.b4,W.dA,W.by,W.e9])
r(W.h8,W.aq)
r(W.c2,W.eS)
q(W.ac,[W.ha,W.hb])
r(W.eU,W.eT)
r(W.c5,W.eU)
r(W.eW,W.eV)
r(W.dw,W.eW)
r(W.aK,W.dq)
r(W.f1,W.f0)
r(W.dx,W.f1)
r(W.f5,W.f4)
r(W.b9,W.f5)
r(W.aD,W.i)
q(W.aD,[W.bd,W.a7,W.bk])
r(W.dP,W.f8)
r(W.dQ,W.f9)
r(W.fb,W.fa)
r(W.dR,W.fb)
r(W.fd,W.fc)
r(W.cv,W.fd)
r(W.fh,W.fg)
r(W.e3,W.fh)
r(W.e7,W.fj)
r(W.d0,W.d_)
r(W.ed,W.d0)
r(W.fl,W.fk)
r(W.ee,W.fl)
r(W.ei,W.fq)
r(W.fv,W.fu)
r(W.em,W.fv)
r(W.d3,W.d2)
r(W.en,W.d3)
r(W.fx,W.fw)
r(W.es,W.fx)
r(W.aV,W.a7)
r(W.fD,W.fC)
r(W.eR,W.fD)
r(W.cQ,W.c6)
r(W.fF,W.fE)
r(W.f3,W.fF)
r(W.fH,W.fG)
r(W.cU,W.fH)
r(W.fJ,W.fI)
r(W.fm,W.fJ)
r(W.fL,W.fK)
r(W.ft,W.fL)
r(W.eZ,P.ej)
r(P.a8,P.fi)
r(P.f7,P.f6)
r(P.dL,P.f7)
r(P.ff,P.fe)
r(P.dZ,P.ff)
r(P.fs,P.fr)
r(P.el,P.fs)
r(P.fz,P.fy)
r(P.et,P.fz)
r(P.dn,P.eO)
r(P.e_,P.aJ)
r(P.fo,P.fn)
r(P.ef,P.fo)
q(K.dC,[K.aO,L.iy])
q(E.h0,[Z.bY,A.az,T.il])
q(D.L,[D.ar,D.as,D.p,X.e4])
q(X.e4,[X.ck,X.bB,X.bC,X.cG])
q(O.bt,[D.ci,U.bx,M.c0])
q(D.h2,[U.h5,U.a_])
r(U.bv,U.a_)
q(A.az,[A.c3,A.cc,A.cn,A.cC,A.cE])
q(A.iB,[A.cH,A.iD,A.iE,A.iF,A.iC,A.ev,A.cI,A.ew,A.ex,A.iH,A.eA,A.cJ,A.cK,A.eC])
q(O.ik,[O.hd,O.dB,O.dN,O.eb,O.eo])
q(O.co,[O.hH,O.hI,O.cp])
q(O.cp,[O.hL,O.hM])
q(T.il,[T.im,T.ip])
r(T.io,T.im)
q(X.ii,[X.h_,X.ht])
s(H.bJ,H.eG)
s(H.cV,P.B)
s(H.cW,H.c9)
s(H.cX,P.B)
s(H.cY,H.c9)
s(P.cT,P.B)
s(P.d9,P.ea)
s(W.eS,W.h9)
s(W.eT,P.B)
s(W.eU,W.E)
s(W.eV,P.B)
s(W.eW,W.E)
s(W.f0,P.B)
s(W.f1,W.E)
s(W.f4,P.B)
s(W.f5,W.E)
s(W.f8,P.T)
s(W.f9,P.T)
s(W.fa,P.B)
s(W.fb,W.E)
s(W.fc,P.B)
s(W.fd,W.E)
s(W.fg,P.B)
s(W.fh,W.E)
s(W.fj,P.T)
s(W.d_,P.B)
s(W.d0,W.E)
s(W.fk,P.B)
s(W.fl,W.E)
s(W.fq,P.T)
s(W.fu,P.B)
s(W.fv,W.E)
s(W.d2,P.B)
s(W.d3,W.E)
s(W.fw,P.B)
s(W.fx,W.E)
s(W.fC,P.B)
s(W.fD,W.E)
s(W.fE,P.B)
s(W.fF,W.E)
s(W.fG,P.B)
s(W.fH,W.E)
s(W.fI,P.B)
s(W.fJ,W.E)
s(W.fK,P.B)
s(W.fL,W.E)
s(P.f6,P.B)
s(P.f7,W.E)
s(P.fe,P.B)
s(P.ff,W.E)
s(P.fr,P.B)
s(P.fs,W.E)
s(P.fy,P.B)
s(P.fz,W.E)
s(P.eO,P.T)
s(P.fn,P.B)
s(P.fo,W.E)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",a2:"double",a3:"num",A:"String",bn:"bool",ad:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([L?])","~(L)","~()","~(i)","~(a7)","~(A,@)","~(n,h<bw>)","~(ak)","~(n,n)","~(~())","ad()","~(L?)","~(bk)","a2()","~(bd)","A(n)","~(~(L))","~(n,h<ch>)","~(n,h<a_?>)","~(n,h<ay>)","~(n,h<au>)","~(n,h<cF>)","@(@)","@(A)","ad(@)","~(a3)","ad(~())","G(v)","~(aV)","~(A,A)","bn(h<ch>)","@(@,A)","A(b)","~(cO,a2,a2)","bY(n)","~(@)","~(@,@)","n(b3,b3)","n(b6,b6)","n(bi,bi)","n(bj,bj)","~(iu)","n(@,@)","bn(v)","~(J?,J?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mC(v.typeUniverse,JSON.parse('{"e2":"bc","bI":"bc","at":"bc","o_":"i","ob":"i","o1":"aJ","o0":"b","oi":"b","ol":"b","nZ":"k","od":"k","o2":"l","og":"l","oe":"v","oa":"v","oJ":"af","o6":"aD","o3":"aj","om":"aj","ok":"a7","of":"b9","o7":"C","o8":"am","oh":"bg","dF":{"bn":[]},"al":{"m":["1"],"j":["1"],"h":["1"]},"dH":{"m":["1"],"j":["1"],"h":["1"]},"bz":{"a2":[],"a3":[]},"cf":{"a2":[],"n":[],"a3":[]},"dG":{"a2":[],"a3":[]},"bb":{"A":[]},"dK":{"D":[]},"K":{"m":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"bf":{"h":["2"]},"c7":{"j":["2"],"h":["2"]},"cP":{"h":["1"]},"bJ":{"m":["1"],"j":["1"],"h":["1"]},"cw":{"D":[]},"dI":{"D":[]},"eF":{"D":[]},"e8":{"D":[]},"Q":{"V":["1","2"],"T.V":"2"},"aM":{"j":["1"],"h":["1"]},"bD":{"t":["1"]},"bg":{"t":["a2"],"m":["a2"],"j":["a2"],"h":["a2"]},"cs":{"t":["n"],"m":["n"],"j":["n"],"h":["n"]},"dS":{"t":["n"],"m":["n"],"j":["n"],"h":["n"]},"dT":{"t":["n"],"m":["n"],"j":["n"],"h":["n"]},"dU":{"t":["n"],"m":["n"],"j":["n"],"h":["n"]},"dV":{"t":["n"],"m":["n"],"j":["n"],"h":["n"]},"dW":{"t":["n"],"m":["n"],"j":["n"],"h":["n"]},"cu":{"t":["n"],"m":["n"],"j":["n"],"h":["n"]},"dX":{"t":["n"],"m":["n"],"j":["n"],"h":["n"]},"eY":{"D":[]},"d5":{"D":[]},"d4":{"iu":[]},"d1":{"h":["1"]},"cR":{"j":["1"],"h":["1"]},"ce":{"h":["1"]},"cj":{"m":["1"],"j":["1"],"h":["1"]},"cl":{"V":["1","2"]},"T":{"V":["1","2"]},"cZ":{"j":["1"],"h":["1"]},"a2":{"a3":[]},"n":{"a3":[]},"m":{"j":["1"],"h":["1"]},"dm":{"D":[]},"eu":{"D":[]},"dY":{"D":[]},"ao":{"D":[]},"cz":{"D":[]},"dD":{"D":[]},"eH":{"D":[]},"eE":{"D":[]},"eh":{"D":[]},"ds":{"D":[]},"e0":{"D":[]},"cD":{"D":[]},"du":{"D":[]},"G":{"v":[],"b":[]},"bd":{"i":[]},"a7":{"i":[]},"v":{"b":[]},"aA":{"b":[]},"aB":{"b":[]},"af":{"b":[]},"bk":{"i":[]},"aD":{"i":[]},"aV":{"a7":[],"i":[]},"l":{"G":[],"v":[],"b":[]},"dk":{"G":[],"v":[],"b":[]},"dl":{"G":[],"v":[],"b":[]},"b4":{"G":[],"v":[],"b":[]},"aj":{"v":[],"b":[]},"c5":{"m":["a8<a3>"],"t":["a8<a3>"],"j":["a8<a3>"],"h":["a8<a3>"]},"c6":{"a8":["a3"]},"dw":{"m":["A"],"t":["A"],"j":["A"],"h":["A"]},"eQ":{"m":["G"],"j":["G"],"h":["G"]},"dx":{"m":["aK"],"t":["aK"],"j":["aK"],"h":["aK"]},"dy":{"b":[]},"dA":{"G":[],"v":[],"b":[]},"b9":{"m":["v"],"t":["v"],"j":["v"],"h":["v"]},"by":{"G":[],"v":[],"b":[]},"dP":{"V":["A","@"],"T.V":"@"},"dQ":{"V":["A","@"],"T.V":"@"},"dR":{"m":["aN"],"t":["aN"],"j":["aN"],"h":["aN"]},"eP":{"m":["v"],"j":["v"],"h":["v"]},"cv":{"m":["v"],"t":["v"],"j":["v"],"h":["v"]},"e3":{"m":["aP"],"t":["aP"],"j":["aP"],"h":["aP"]},"e7":{"V":["A","@"],"T.V":"@"},"e9":{"G":[],"v":[],"b":[]},"ed":{"m":["aA"],"t":["aA"],"b":[],"j":["aA"],"h":["aA"]},"ee":{"m":["aR"],"t":["aR"],"j":["aR"],"h":["aR"]},"ei":{"V":["A","A"],"T.V":"A"},"em":{"m":["af"],"t":["af"],"j":["af"],"h":["af"]},"en":{"m":["aB"],"t":["aB"],"b":[],"j":["aB"],"h":["aB"]},"es":{"m":["aU"],"t":["aU"],"j":["aU"],"h":["aU"]},"eK":{"b":[]},"bL":{"b":[]},"eR":{"m":["C"],"t":["C"],"j":["C"],"h":["C"]},"cQ":{"a8":["a3"]},"f3":{"m":["aL?"],"t":["aL?"],"j":["aL?"],"h":["aL?"]},"cU":{"m":["v"],"t":["v"],"j":["v"],"h":["v"]},"fm":{"m":["aS"],"t":["aS"],"j":["aS"],"h":["aS"]},"ft":{"m":["am"],"t":["am"],"j":["am"],"h":["am"]},"d6":{"ba":[]},"dz":{"m":["G"],"j":["G"],"h":["G"]},"a8":{"fi":["1"]},"dL":{"m":["be"],"j":["be"],"h":["be"]},"dZ":{"m":["bh"],"j":["bh"],"h":["bh"]},"el":{"m":["A"],"j":["A"],"h":["A"]},"k":{"G":[],"v":[],"b":[]},"et":{"m":["bl"],"j":["bl"],"h":["bl"]},"dn":{"V":["A","@"],"T.V":"@"},"dp":{"b":[]},"aJ":{"b":[]},"e_":{"b":[]},"ef":{"m":["V<@,@>"],"j":["V<@,@>"],"h":["V<@,@>"]},"bt":{"h":["1"]},"ar":{"L":[]},"as":{"L":[]},"p":{"L":[]},"ck":{"L":[]},"bB":{"L":[]},"bC":{"L":[]},"e4":{"L":[]},"cG":{"L":[]},"c4":{"ch":[]},"ci":{"h":["ch"]},"bv":{"a_":[]},"bx":{"a_":[],"h":["a_?"]},"cL":{"a_":[]},"cM":{"a_":[]},"cN":{"a_":[]},"c0":{"ay":[],"h":["ay"]},"c1":{"ay":[]},"c8":{"ay":[]},"cb":{"ay":[]},"c3":{"az":[]},"cc":{"az":[]},"cn":{"az":[]},"cC":{"az":[]},"cE":{"az":[]}}'))
H.mB(v.typeUniverse,JSON.parse('{"al":1,"dH":1,"a4":1,"j":1,"bA":1,"bf":2,"c7":2,"cm":2,"cP":1,"eM":1,"c9":1,"eG":1,"bJ":1,"aM":1,"dM":1,"bD":1,"bN":1,"d1":1,"ej":1,"ek":2,"cS":1,"ce":1,"cj":1,"B":1,"cl":2,"T":2,"ea":1,"cZ":1,"cT":1,"d9":1,"dr":2,"dt":2,"h":1,"m":1,"dE":1,"eZ":1,"E":1,"ca":1,"bt":1,"ar":1,"as":1,"p":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.nF
return{C:s("ai"),E:s("b4"),b:s("c_"),c:s("j<@>"),h:s("G"),d:s("D"),B:s("i"),e:s("oc"),I:s("ba"),l:s("by"),m:s("al<@>"),T:s("cg"),M:s("at"),p:s("t<@>"),s:s("Q<n,bn>"),v:s("Q<n,n>"),J:s("m<ey>"),L:s("m<ez>"),U:s("m<eB>"),R:s("m<eD>"),t:s("m<@>"),u:s("ck"),f:s("V<@,@>"),Z:s("bB"),O:s("bC"),P:s("ad"),K:s("J"),q:s("a8<a3>"),k:s("az"),N:s("A"),w:s("iu"),aR:s("eq"),aM:s("cG"),n:s("ev"),y:s("cH"),V:s("cI"),g:s("ew"),F:s("ex"),Q:s("eA"),j:s("cJ"),G:s("cK"),a:s("eC"),o:s("bI"),cB:s("bn"),i:s("a2"),z:s("@"),S:s("n"),A:s("0&*"),_:s("J*"),c_:s("c3?"),bc:s("ka<ad>?"),D:s("cc?"),d1:s("cn?"),X:s("J?"),ba:s("bG?"),x:s("cC?"),aJ:s("eg?"),Y:s("cE?"),aX:s("er?"),W:s("cH?"),ch:s("cI?"),cj:s("cJ?"),r:s("cK?"),H:s("a3")}})();(function constants(){var s=hunkHelpers.makeConstList
C.h=W.b4.prototype
C.J=J.a.prototype
C.a=J.al.prototype
C.b=J.cf.prototype
C.K=J.cg.prototype
C.c=J.bz.prototype
C.d=J.bb.prototype
C.L=J.at.prototype
C.r=J.e2.prototype
C.t=P.bG.prototype
C.k=J.bI.prototype
C.u=W.aV.prototype
C.v=W.bL.prototype
C.w=new E.br("Browser.chrome")
C.l=new E.br("Browser.firefox")
C.m=new E.br("Browser.edge")
C.x=new E.br("Browser.other")
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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

C.E=new P.e0()
C.p=new P.iJ()
C.F=new P.iK()
C.e=new P.j3()
C.f=new A.bu(0,"ColorBlendType.Overwrite")
C.G=new A.bu(1,"ColorBlendType.Additive")
C.H=new A.bu(2,"ColorBlendType.Average")
C.i=new A.bu(3,"ColorBlendType.AlphaBlend")
C.j=new P.b7(0)
C.I=new P.b7(5e6)
C.M=s([0,0,65498,45055,65535,34815,65534,18431])
C.N=new E.bE("OperatingSystem.windows")
C.q=new E.bE("OperatingSystem.mac")
C.O=new E.bE("OperatingSystem.linux")
C.P=new E.bE("OperatingSystem.other")
C.Q=new P.bM(null,2)})();(function staticFields(){$.j0=null
$.ap=0
$.bX=null
$.k4=null
$.kZ=null
$.kW=null
$.l2=null
$.ji=null
$.jn=null
$.k_=null
$.bP=null
$.dc=null
$.dd=null
$.jU=!1
$.an=C.e
$.a6=[]
$.hl=null
$.ke=null
$.hV=null
$.a0=null
$.aw=null
$.kl=null
$.ag=null
$.kx=null
$.kz=null
$.iL=null
$.iM=null
$.iN=null
$.ky=null
$.kA=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"o9","l9",function(){return H.nH("_$dart_dartClosure")})
s($,"on","lb",function(){return H.aC(H.iA({
toString:function(){return"$receiver$"}}))})
s($,"oo","lc",function(){return H.aC(H.iA({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"op","ld",function(){return H.aC(H.iA(null))})
s($,"oq","le",function(){return H.aC(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ot","lh",function(){return H.aC(H.iA(void 0))})
s($,"ou","li",function(){return H.aC(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"os","lg",function(){return H.aC(H.kv(null))})
s($,"or","lf",function(){return H.aC(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"ow","lk",function(){return H.aC(H.kv(void 0))})
s($,"ov","lj",function(){return H.aC(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"oK","k3",function(){return P.mh()})
s($,"oM","lo",function(){return P.m3("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oD","ln",function(){return Z.ah(0)})
s($,"ox","ll",function(){return Z.ah(511)})
s($,"oF","Y",function(){return Z.ah(1)})
s($,"oE","b1",function(){return Z.ah(2)})
s($,"oz","b0",function(){return Z.ah(4)})
s($,"oG","aH",function(){return Z.ah(8)})
s($,"oH","b2",function(){return Z.ah(16)})
s($,"oA","di",function(){return Z.ah(32)})
s($,"oB","dj",function(){return Z.ah(64)})
s($,"oC","lm",function(){return Z.ah(96)})
s($,"oI","bV",function(){return Z.ah(128)})
s($,"oy","b_",function(){return Z.ah(256)})
s($,"o5","l8",function(){return new V.hm()})
r($,"o4","w",function(){return $.l8()})
r($,"oj","la",function(){var q=V.ki(),p=V.jJ(),o=$.ky
return V.kf(q,p,o==null?$.ky=V.me(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ct,ArrayBufferView:H.ct,Float32Array:H.bg,Float64Array:H.bg,Int16Array:H.dS,Int32Array:H.dT,Int8Array:H.dU,Uint16Array:H.dV,Uint32Array:H.dW,Uint8ClampedArray:H.cu,CanvasPixelArray:H.cu,Uint8Array:H.dX,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fT,HTMLAnchorElement:W.dk,HTMLAreaElement:W.dl,Blob:W.dq,HTMLCanvasElement:W.b4,CanvasRenderingContext2D:W.c_,CDATASection:W.aj,CharacterData:W.aj,Comment:W.aj,ProcessingInstruction:W.aj,Text:W.aj,CSSPerspective:W.h8,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.c2,MSStyleCSSProperties:W.c2,CSS2Properties:W.c2,CSSImageValue:W.ac,CSSKeywordValue:W.ac,CSSNumericValue:W.ac,CSSPositionValue:W.ac,CSSResourceValue:W.ac,CSSUnitValue:W.ac,CSSURLImageValue:W.ac,CSSStyleValue:W.ac,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.ha,CSSUnparsedValue:W.hb,DataTransferItemList:W.hc,DOMException:W.he,ClientRectList:W.c5,DOMRectList:W.c5,DOMRectReadOnly:W.c6,DOMStringList:W.dw,DOMTokenList:W.hf,Element:W.G,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aK,FileList:W.dx,FileWriter:W.dy,HTMLFormElement:W.dA,Gamepad:W.aL,History:W.hv,HTMLCollection:W.b9,HTMLFormControlsCollection:W.b9,HTMLOptionsCollection:W.b9,ImageData:W.ba,HTMLImageElement:W.by,KeyboardEvent:W.bd,Location:W.hE,MediaList:W.hW,MIDIInputMap:W.dP,MIDIOutputMap:W.dQ,MimeType:W.aN,MimeTypeArray:W.dR,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.v,DocumentFragment:W.v,HTMLDocument:W.v,ShadowRoot:W.v,XMLDocument:W.v,Attr:W.v,DocumentType:W.v,Node:W.v,NodeList:W.cv,RadioNodeList:W.cv,Plugin:W.aP,PluginArray:W.e3,RTCStatsReport:W.e7,HTMLSelectElement:W.e9,SourceBuffer:W.aA,SourceBufferList:W.ed,SpeechGrammar:W.aR,SpeechGrammarList:W.ee,SpeechRecognitionResult:W.aS,Storage:W.ei,CSSStyleSheet:W.am,StyleSheet:W.am,TextTrack:W.aB,TextTrackCue:W.af,VTTCue:W.af,TextTrackCueList:W.em,TextTrackList:W.en,TimeRanges:W.it,Touch:W.aU,TouchEvent:W.bk,TouchList:W.es,TrackDefaultList:W.ix,CompositionEvent:W.aD,FocusEvent:W.aD,TextEvent:W.aD,UIEvent:W.aD,URL:W.iI,VideoTrackList:W.eK,WheelEvent:W.aV,Window:W.bL,DOMWindow:W.bL,CSSRuleList:W.eR,ClientRect:W.cQ,DOMRect:W.cQ,GamepadList:W.f3,NamedNodeMap:W.cU,MozNamedAttrMap:W.cU,SpeechRecognitionResultList:W.fm,StyleSheetList:W.ft,SVGLength:P.be,SVGLengthList:P.dL,SVGNumber:P.bh,SVGNumberList:P.dZ,SVGPointList:P.i1,SVGStringList:P.el,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bl,SVGTransformList:P.et,AudioBuffer:P.fY,AudioParamMap:P.dn,AudioTrackList:P.dp,AudioContext:P.aJ,webkitAudioContext:P.aJ,BaseAudioContext:P.aJ,OfflineAudioContext:P.e_,WebGL2RenderingContext:P.bG,SQLResultSetRowList:P.ef})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.bg.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cs.$nativeSuperclassTag="ArrayBufferView"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=N.nP
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
