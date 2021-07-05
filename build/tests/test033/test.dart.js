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
a[c]=function(){a[c]=function(){H.ny(b)}
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
if(a[b]!==s)H.nz(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jI(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jk:function jk(){},
i0:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lP:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nb:function(a,b,c){return a},
lt:function(a,b){if(t.V.b(a))return new H.c0(a,b)
return new H.b9(a,b)},
lm:function(){return new P.e4("No element")},
lO:function(a,b){H.e_(a,0,J.bm(a)-1,b)},
e_:function(a,b,c,d){if(c-b<=32)H.lN(a,b,c,d)
else H.lM(a,b,c,d)},
lN:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.fC(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.af()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
lM:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.Y(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.Y(a4+a5,2),f=g-j,e=g+j,d=J.fC(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.P(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.e_(a3,a4,r-2,a6)
H.e_(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.P(a6.$2(d.h(a3,r),b),0);)++r
for(;J.P(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.e_(a3,r,q,a6)}else H.e_(a3,r,q,a6)},
dw:function dw(a){this.a=a},
K:function K(a){this.a=a},
j:function j(){},
bw:function bw(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b9:function b9(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=null
this.b=a
this.c=b},
cB:function cB(a,b){this.a=a
this.b=b},
eC:function eC(a,b){this.a=a
this.b=b},
c2:function c2(){},
ev:function ev(){},
bG:function bG(){},
kM:function(a){var s,r=H.kL(a)
if(r!=null)return r
s="minified:"+a
return s},
np:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
t:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.fG(a)
return s},
co:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cp:function(a){return H.lw(a)},
lw:function(a){var s,r,q,p
if(a instanceof P.J)return H.a8(H.bP(a),null)
if(J.d2(a)===C.E||t.o.b(a)){s=C.l(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a8(H.bP(a),null)},
k2:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lG:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r){q=a[r]
if(!H.iY(q))throw H.c(H.j1(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.bh(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.j1(q))}return H.k2(p)},
lF:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.iY(q))throw H.c(H.j1(q))
if(q<0)throw H.c(H.j1(q))
if(q>65535)return H.lG(a)}return H.k2(a)},
lE:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.bh(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aL(a,0,1114111,null,null))},
bB:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lD:function(a){var s=H.bB(a).getFullYear()+0
return s},
lB:function(a){var s=H.bB(a).getMonth()+1
return s},
lx:function(a){var s=H.bB(a).getDate()+0
return s},
ly:function(a){var s=H.bB(a).getHours()+0
return s},
lA:function(a){var s=H.bB(a).getMinutes()+0
return s},
lC:function(a){var s=H.bB(a).getSeconds()+0
return s},
lz:function(a){var s=H.bB(a).getMilliseconds()+0
return s},
e:function(a,b){if(a==null)J.bm(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var s,r="index"
if(!H.iY(b))return new P.al(!0,b,r,null)
s=J.bm(a)
if(b<0||b>=s)return P.F(b,a,r,null,s)
return P.dS(b,r)},
nf:function(a,b,c){if(a>c)return P.aL(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aL(b,a,c,"end",null)
return new P.al(!0,b,"end",null)},
j1:function(a){return new P.al(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dK()
s=new Error()
s.dartException=a
r=H.nA
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nA:function(){return J.fG(this.dartException)},
f:function(a){throw H.c(a)},
n:function(a){throw H.c(P.b0(a))},
ax:function(a){var s,r,q,p,o,n
a=H.kI(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ig(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ih:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kc:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jl:function(a,b){var s=b==null,r=s?null:b.method
return new H.du(a,r,s?null:b.receiver)},
fE:function(a){if(a==null)return new H.hL(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bk(a,a.dartException)
return H.n7(a)},
bk:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
n7:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bh(r,16)&8191)===10)switch(q){case 438:return H.bk(a,H.jl(H.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return H.bk(a,new H.cn(p,e))}}if(a instanceof TypeError){o=$.kQ()
n=$.kR()
m=$.kS()
l=$.kT()
k=$.kW()
j=$.kX()
i=$.kV()
$.kU()
h=$.kZ()
g=$.kY()
f=o.ad(s)
if(f!=null)return H.bk(a,H.jl(s,f))
else{f=n.ad(s)
if(f!=null){f.method="call"
return H.bk(a,H.jl(s,f))}else{f=m.ad(s)
if(f==null){f=l.ad(s)
if(f==null){f=k.ad(s)
if(f==null){f=j.ad(s)
if(f==null){f=i.ad(s)
if(f==null){f=l.ad(s)
if(f==null){f=h.ad(s)
if(f==null){f=g.ad(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bk(a,new H.cn(s,f==null?e:f.method))}}return H.bk(a,new H.eu(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cu()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bk(a,new P.al(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cu()
return a},
jK:function(a){var s
if(a==null)return new H.ff(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.ff(a)},
nh:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
no:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.no)
a.$identity=s
return s},
lh:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hZ().constructor.prototype):Object.create(new H.bR(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.am
if(typeof r!=="number")return r.U()
$.am=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jT(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.ld(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jT(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ld:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kE,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lb:H.la
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
le:function(a,b,c,d){var s=H.jS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jT:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lg(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.le(r,!p,s,b)
if(r===0){p=$.am
if(typeof p!=="number")return p.U()
$.am=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bS
return new Function(p+(o==null?$.bS=H.fP("self"):o)+";return "+n+"."+H.t(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.am
if(typeof p!=="number")return p.U()
$.am=p+1
m+=p
p="return function("+m+"){return this."
o=$.bS
return new Function(p+(o==null?$.bS=H.fP("self"):o)+"."+H.t(s)+"("+m+");}")()},
lf:function(a,b,c,d){var s=H.jS,r=H.lc
switch(b?-1:a){case 0:throw H.c(new H.dW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lg:function(a,b){var s,r,q,p,o,n,m,l=$.bS
if(l==null)l=$.bS=H.fP("self")
s=$.jR
if(s==null)s=$.jR=H.fP("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lf(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.t(r)+"(this."+s+");"
n=$.am
if(typeof n!=="number")return n.U()
$.am=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.t(r)+"(this."+s+", "+m+");"
n=$.am
if(typeof n!=="number")return n.U()
$.am=n+1
return new Function(o+n+"}")()},
jI:function(a,b,c,d,e,f,g){return H.lh(a,b,c,d,!!e,!!f,g)},
la:function(a,b){return H.fr(v.typeUniverse,H.bP(a.a),b)},
lb:function(a,b){return H.fr(v.typeUniverse,H.bP(a.c),b)},
jS:function(a){return a.a},
lc:function(a){return a.c},
fP:function(a){var s,r,q,p=new H.bR("self","target","receiver","name"),o=J.jj(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jd("Field name "+a+" not found."))},
ny:function(a){throw H.c(new P.dg(a))},
nk:function(a){return v.getIsolateTag(a)},
nz:function(a){return H.f(new H.dw(a))},
oC:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nr:function(a){var s,r,q,p,o,n=$.kD.$1(a),m=$.j3[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j8[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kA.$2(a,n)
if(q!=null){m=$.j3[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j8[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.j9(s)
$.j3[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j8[n]=s
return s}if(p==="-"){o=H.j9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kG(a,s)
if(p==="*")throw H.c(P.kd(n))
if(v.leafTags[n]===true){o=H.j9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kG(a,s)},
kG:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jN(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j9:function(a){return J.jN(a,!1,null,!!a.$iq)},
nt:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.j9(s)
else return J.jN(s,c,null,null)},
nm:function(){if(!0===$.jL)return
$.jL=!0
H.nn()},
nn:function(){var s,r,q,p,o,n,m,l
$.j3=Object.create(null)
$.j8=Object.create(null)
H.nl()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kH.$1(o)
if(n!=null){m=H.nt(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nl:function(){var s,r,q,p,o,n,m=C.v()
m=H.bL(C.w,H.bL(C.x,H.bL(C.m,H.bL(C.m,H.bL(C.y,H.bL(C.z,H.bL(C.A(C.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kD=new H.j5(p)
$.kA=new H.j6(o)
$.kH=new H.j7(n)},
bL:function(a,b){return a(b)||b},
lq:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hd("Illegal RegExp pattern ("+String(n)+")",a))},
kJ:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
ng:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kI:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kK:function(a,b,c){var s=H.nw(a,b,c)
return s},
nw:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kI(b),'g'),H.ng(c))},
ig:function ig(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cn:function cn(a,b){this.a=a
this.b=b},
du:function du(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a},
hL:function hL(a){this.a=a},
ff:function ff(a){this.a=a
this.b=null},
bp:function bp(){},
i2:function i2(){},
hZ:function hZ(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dW:function dW(a){this.a=a},
R:function R(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hj:function hj(a){this.a=a},
hm:function hm(a,b){this.a=a
this.b=b
this.c=null},
aG:function aG(a){this.a=a},
dy:function dy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cY:function(a){return a},
az:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
mm:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nf(a,b,c))
return b},
ck:function ck(){},
bz:function bz(){},
ba:function ba(){},
cj:function cj(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
cl:function cl(){},
dJ:function dJ(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
k6:function(a,b){var s=b.c
return s==null?b.c=H.jB(a,b.z,!0):s},
k5:function(a,b){var s=b.c
return s==null?b.c=H.cU(a,"jW",[b.z]):s},
k7:function(a){var s=a.y
if(s===6||s===7||s===8)return H.k7(a.z)
return s===11||s===12},
lK:function(a){return a.cy},
ni:function(a){return H.jC(v.typeUniverse,a,!1)},
aT:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aT(a,s,a0,a1)
if(r===s)return b
return H.kp(a,r,!0)
case 7:s=b.z
r=H.aT(a,s,a0,a1)
if(r===s)return b
return H.jB(a,r,!0)
case 8:s=b.z
r=H.aT(a,s,a0,a1)
if(r===s)return b
return H.ko(a,r,!0)
case 9:q=b.Q
p=H.d1(a,q,a0,a1)
if(p===q)return b
return H.cU(a,b.z,p)
case 10:o=b.z
n=H.aT(a,o,a0,a1)
m=b.Q
l=H.d1(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jz(a,n,l)
case 11:k=b.z
j=H.aT(a,k,a0,a1)
i=b.Q
h=H.n4(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kn(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.d1(a,g,a0,a1)
o=b.z
n=H.aT(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jA(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fJ("Attempted to substitute unexpected RTI kind "+c))}},
d1:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aT(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
n5:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aT(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
n4:function(a,b,c,d){var s,r=b.a,q=H.d1(a,r,c,d),p=b.b,o=H.d1(a,p,c,d),n=b.c,m=H.n5(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eT()
s.a=q
s.b=o
s.c=m
return s},
oE:function(a,b){a[v.arrayRti]=b
return a},
nc:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kE(s)
return a.$S()}return null},
kF:function(a,b){var s
if(H.k7(b))if(a instanceof H.bp){s=H.nc(a)
if(s!=null)return s}return H.bP(a)},
bP:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.jD(a)}if(Array.isArray(a))return H.ks(a)
return H.jD(J.d2(a))},
ks:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
O:function(a){var s=a.$ti
return s!=null?s:H.jD(a)},
jD:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mt(a,s)},
mt:function(a,b){var s=a instanceof H.bp?a.__proto__.__proto__.constructor:b,r=H.mh(v.typeUniverse,s.name)
b.$ccache=r
return r},
kE:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jC(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ms:function(a){var s,r,q,p=this
if(p===t.K)return H.cZ(p,a,H.mx)
if(!H.aA(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cZ(p,a,H.mA)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.iY
else if(r===t.i||r===t.H)q=H.mw
else if(r===t.N)q=H.my
else q=r===t.w?H.jE:null
if(q!=null)return H.cZ(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.nq)){p.r="$i"+s
return H.cZ(p,a,H.mz)}}else if(s===7)return H.cZ(p,a,H.mq)
return H.cZ(p,a,H.mo)},
cZ:function(a,b,c){a.b=c
return a.b(b)},
mr:function(a){var s,r=this,q=H.mn
if(!H.aA(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.ml
else if(r===t.K)q=H.mj
else{s=H.d3(r)
if(s)q=H.mp}r.a=q
return r.a(a)},
jH:function(a){var s,r=a.y
if(!H.aA(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.jH(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mo:function(a){var s=this
if(a==null)return H.jH(s)
return H.H(v.typeUniverse,H.kF(a,s),null,s,null)},
mq:function(a){if(a==null)return!0
return this.z.b(a)},
mz:function(a){var s,r=this
if(a==null)return H.jH(r)
s=r.r
if(a instanceof P.J)return!!a[s]
return!!J.d2(a)[s]},
mn:function(a){var s,r=this
if(a==null){s=H.d3(r)
if(s)return a}else if(r.b(a))return a
H.kv(a,r)},
mp:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kv(a,s)},
kv:function(a,b){throw H.c(H.m7(H.ki(a,H.kF(a,b),H.a8(b,null))))},
ki:function(a,b,c){var s=P.h8(a),r=H.a8(b==null?H.bP(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
m7:function(a){return new H.cS("TypeError: "+a)},
a0:function(a,b){return new H.cS("TypeError: "+H.ki(a,null,b))},
mx:function(a){return a!=null},
mj:function(a){if(a!=null)return a
throw H.c(H.a0(a,"Object"))},
mA:function(a){return!0},
ml:function(a){return a},
jE:function(a){return!0===a||!1===a},
kt:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a0(a,"bool"))},
or:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a0(a,"bool"))},
oq:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a0(a,"bool?"))},
os:function(a){if(typeof a=="number")return a
throw H.c(H.a0(a,"double"))},
ou:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a0(a,"double"))},
ot:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a0(a,"double?"))},
iY:function(a){return typeof a=="number"&&Math.floor(a)===a},
iV:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a0(a,"int"))},
ow:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a0(a,"int"))},
ov:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a0(a,"int?"))},
mw:function(a){return typeof a=="number"},
ox:function(a){if(typeof a=="number")return a
throw H.c(H.a0(a,"num"))},
oz:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a0(a,"num"))},
oy:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a0(a,"num?"))},
my:function(a){return typeof a=="string"},
mk:function(a){if(typeof a=="string")return a
throw H.c(H.a0(a,"String"))},
oB:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a0(a,"String"))},
oA:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a0(a,"String?"))},
n0:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a8(a[q],b)
return s},
kw:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.e(a5,j)
m=C.c.U(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a8(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a8(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a8(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a8(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a8(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a8:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a8(a.z,b)
return s}if(l===7){r=a.z
s=H.a8(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a8(a.z,b)+">"
if(l===9){p=H.n6(a.z)
o=a.Q
return o.length!==0?p+("<"+H.n0(o,b)+">"):p}if(l===11)return H.kw(a,b,null)
if(l===12)return H.kw(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
n6:function(a){var s,r=H.kL(a)
if(r!=null)return r
s="minified:"+a
return s},
kq:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mh:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jC(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cV(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cU(a,b,q)
n[b]=o
return o}else return m},
mf:function(a,b){return H.kr(a.tR,b)},
me:function(a,b){return H.kr(a.eT,b)},
jC:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.km(H.kk(a,null,b,c))
r.set(b,s)
return s},
fr:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.km(H.kk(a,b,c,!0))
q.set(c,r)
return r},
mg:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jz(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aS:function(a,b){b.a=H.mr
b.b=H.ms
return b},
cV:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ac(null,null)
s.y=b
s.cy=c
r=H.aS(a,s)
a.eC.set(c,r)
return r},
kp:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mc(a,b,r,c)
a.eC.set(r,s)
return s},
mc:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aA(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ac(null,null)
q.y=6
q.z=b
q.cy=c
return H.aS(a,q)},
jB:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mb(a,b,r,c)
a.eC.set(r,s)
return s},
mb:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aA(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.d3(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.d3(q.z))return q
else return H.k6(a,b)}}p=new H.ac(null,null)
p.y=7
p.z=b
p.cy=c
return H.aS(a,p)},
ko:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.m9(a,b,r,c)
a.eC.set(r,s)
return s},
m9:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aA(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cU(a,"jW",[b])
else if(b===t.P||b===t.T)return t.u}q=new H.ac(null,null)
q.y=8
q.z=b
q.cy=c
return H.aS(a,q)},
md:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ac(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aS(a,s)
a.eC.set(q,r)
return r},
fq:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
m8:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cU:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fq(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ac(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aS(a,r)
a.eC.set(p,q)
return q},
jz:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fq(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aS(a,o)
a.eC.set(q,n)
return n},
kn:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fq(m)
if(j>0){s=l>0?",":""
r=H.fq(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.m8(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ac(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aS(a,o)
a.eC.set(q,r)
return r},
jA:function(a,b,c,d){var s,r=b.cy+("<"+H.fq(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.ma(a,b,c,r,d)
a.eC.set(r,s)
return s},
ma:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aT(a,b,r,0)
m=H.d1(a,c,r,0)
return H.jA(a,n,m,c!==m)}}l=new H.ac(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aS(a,l)},
kk:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
km:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.m1(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kl(a,r,h,g,!1)
else if(q===46)r=H.kl(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aR(a.u,a.e,g.pop()))
break
case 94:g.push(H.md(a.u,g.pop()))
break
case 35:g.push(H.cV(a.u,5,"#"))
break
case 64:g.push(H.cV(a.u,2,"@"))
break
case 126:g.push(H.cV(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.jy(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cU(p,n,o))
else{m=H.aR(p,a.e,n)
switch(m.y){case 11:g.push(H.jA(p,m,o,a.n))
break
default:g.push(H.jz(p,m,o))
break}}break
case 38:H.m2(a,g)
break
case 42:p=a.u
g.push(H.kp(p,H.aR(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.jB(p,H.aR(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.ko(p,H.aR(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.eT()
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
H.jy(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.kn(p,H.aR(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.jy(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.m4(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aR(a.u,a.e,i)},
m1:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kl:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kq(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.lK(o)+'"')
d.push(H.fr(s,o,n))}else d.push(p)
return m},
m2:function(a,b){var s=b.pop()
if(0===s){b.push(H.cV(a.u,1,"0&"))
return}if(1===s){b.push(H.cV(a.u,4,"1&"))
return}throw H.c(P.fJ("Unexpected extended operation "+H.t(s)))},
aR:function(a,b,c){if(typeof c=="string")return H.cU(a,c,a.sEA)
else if(typeof c=="number")return H.m3(a,b,c)
else return c},
jy:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aR(a,b,c[s])},
m4:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aR(a,b,c[s])},
m3:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fJ("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fJ("Bad index "+c+" for "+b.i(0)))},
H:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aA(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aA(b))return!1
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
if(p===6){s=H.k6(a,d)
return H.H(a,b,c,s,e)}if(r===8){if(!H.H(a,b.z,c,d,e))return!1
return H.H(a,H.k5(a,b),c,d,e)}if(r===7){s=H.H(a,t.P,c,d,e)
return s&&H.H(a,b.z,c,d,e)}if(p===8){if(H.H(a,b,c,d.z,e))return!0
return H.H(a,b,c,H.k5(a,d),e)}if(p===7){s=H.H(a,b,c,t.P,e)
return s||H.H(a,b,c,d.z,e)}if(q)return!1
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
if(!H.H(a,k,c,j,e)||!H.H(a,j,e,k,c))return!1}return H.kx(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.kx(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mv(a,b,c,d,e)}return!1},
kx:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
mv:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.H(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kq(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.H(a,H.fr(a,b,l[p]),c,r[p],e))return!1
return!0},
d3:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aA(a))if(r!==7)if(!(r===6&&H.d3(a.z)))s=r===8&&H.d3(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nq:function(a){var s
if(!H.aA(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aA:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kr:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ac:function ac(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eT:function eT(){this.c=this.b=this.a=null},
eO:function eO(){},
cS:function cS(a){this.a=a},
kL:function(a){return v.mangledGlobalNames[a]},
nu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j4:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jL==null){H.nm()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.kd("Return interceptor for "+H.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iK
if(o==null)o=$.iK=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.nr(a)
if(p!=null)return p
if(typeof a=="function")return C.G
s=Object.getPrototypeOf(a)
if(s==null)return C.p
if(s===Object.prototype)return C.p
if(typeof q=="function"){o=$.iK
if(o==null)o=$.iK=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
ln:function(a){if(a<0||a>4294967295)throw H.c(P.aL(a,0,4294967295,"length",null))
return J.lo(new Array(a))},
ji:function(a){if(a<0)throw H.c(P.jd("Length must be a non-negative integer: "+a))
return new Array(a)},
lo:function(a){return J.jj(a)},
jj:function(a){a.fixed$length=Array
return a},
lp:function(a,b){return J.l6(a,b)},
d2:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c6.prototype
return J.ds.prototype}if(typeof a=="string")return J.b5.prototype
if(a==null)return J.c7.prototype
if(typeof a=="boolean")return J.dr.prototype
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.j4(a)},
fC:function(a){if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.j4(a)},
jJ:function(a){if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.j4(a)},
nj:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bF.prototype
return a},
bj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ar.prototype
return a}if(a instanceof P.J)return a
return J.j4(a)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d2(a).m(a,b)},
l3:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.np(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fC(a).h(a,b)},
l4:function(a,b,c){return J.bj(a).fd(a,b,c)},
l5:function(a,b,c,d){return J.bj(a).ft(a,b,c,d)},
l6:function(a,b){return J.nj(a).ab(a,b)},
jb:function(a,b){return J.jJ(a).A(a,b)},
jc:function(a,b){return J.jJ(a).D(a,b)},
l7:function(a){return J.bj(a).gd2(a)},
l8:function(a){return J.bj(a).gd4(a)},
fF:function(a){return J.d2(a).gB(a)},
aB:function(a){return J.jJ(a).gW(a)},
bm:function(a){return J.fC(a).gj(a)},
l9:function(a,b){return J.bj(a).h4(a,b)},
fG:function(a){return J.d2(a).i(a)},
a:function a(){},
dr:function dr(){},
c7:function c7(){},
b6:function b6(){},
dP:function dP(){},
bF:function bF(){},
ar:function ar(){},
ah:function ah(){},
dt:function dt(){},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bv:function bv(){},
c6:function c6(){},
ds:function ds(){},
b5:function b5(){}},P={
lV:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.n8()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bM(new P.iG(q),1)).observe(s,{childList:true})
return new P.iF(q,s,r)}else if(self.setImmediate!=null)return P.n9()
return P.na()},
lW:function(a){self.scheduleImmediate(H.bM(new P.iH(a),0))},
lX:function(a){self.setImmediate(H.bM(new P.iI(a),0))},
lY:function(a){P.js(C.h,a)},
js:function(a,b){var s=C.b.Y(a.a,1000)
return P.m5(s<0?0:s,b)},
kb:function(a,b){var s=C.b.Y(a.a,1000)
return P.m6(s<0?0:s,b)},
m5:function(a,b){var s=new P.cR()
s.dX(a,b)
return s},
m6:function(a,b){var s=new P.cR()
s.dY(a,b)
return s},
oo:function(a){return new P.bI(a,1)},
lZ:function(){return C.M},
m_:function(a){return new P.bI(a,3)},
mC:function(a){return new P.cO(a)},
mY:function(){var s,r
for(s=$.bK;s!=null;s=$.bK){$.d0=null
r=s.b
$.bK=r
if(r==null)$.d_=null
s.a.$0()}},
n3:function(){$.jF=!0
try{P.mY()}finally{$.d0=null
$.jF=!1
if($.bK!=null)$.jQ().$1(P.kB())}},
n1:function(a){var s=new P.eD(a),r=$.d_
if(r==null){$.bK=$.d_=s
if(!$.jF)$.jQ().$1(P.kB())}else $.d_=r.b=s},
n2:function(a){var s,r,q,p=$.bK
if(p==null){P.n1(a)
$.d0=$.d_
return}s=new P.eD(a)
r=$.d0
if(r==null){s.b=p
$.bK=$.d0=s}else{q=r.b
s.b=q
$.d0=r.b=s
if(q==null)$.d_=s}},
ka:function(a,b){var s=$.aj
if(s===C.e)return P.js(a,b)
return P.js(a,s.fz(b))},
lR:function(a,b){var s=$.aj
if(s===C.e)return P.kb(a,b)
return P.kb(a,s.cZ(b,t.r))},
ky:function(a,b,c,d,e){P.n2(new P.j0(d,e))},
mZ:function(a,b,c,d){var s,r=$.aj
if(r===c)return d.$0()
$.aj=c
s=r
try{r=d.$0()
return r}finally{$.aj=s}},
n_:function(a,b,c,d,e){var s,r=$.aj
if(r===c)return d.$1(e)
$.aj=c
s=r
try{r=d.$1(e)
return r}finally{$.aj=s}},
iG:function iG(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
iI:function iI(a){this.a=a},
cR:function cR(){this.c=0},
iR:function iR(a,b){this.a=a
this.b=b},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b){this.a=a
this.b=b},
bJ:function bJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cO:function cO(a){this.a=a},
eD:function eD(a){this.a=a
this.b=null},
e7:function e7(){},
e8:function e8(){},
iT:function iT(){},
j0:function j0(a,b){this.a=a
this.b=b},
iN:function iN(){},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
lr:function(a,b,c){return H.nh(a,new H.R(b.ak("@<0>").cA(c).ak("R<1,2>")))},
M:function(a,b){return new H.R(a.ak("@<0>").cA(b).ak("R<1,2>"))},
jX:function(a){return new P.cD(a.ak("cD<0>"))},
jx:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
m0:function(a,b){var s=new P.cE(a,b)
s.c=a.e
return s},
ll:function(a,b,c){var s,r
if(P.jG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a5.push(a)
try{P.mB(a,s)}finally{if(0>=$.a5.length)return H.e($.a5,-1)
$.a5.pop()}r=P.k8(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jh:function(a,b,c){var s,r
if(P.jG(a))return b+"..."+c
s=new P.be(b)
$.a5.push(a)
try{r=s
r.a=P.k8(r.a,a,", ")}finally{if(0>=$.a5.length)return H.e($.a5,-1)
$.a5.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jG:function(a){var s,r
for(s=$.a5.length,r=0;r<s;++r)if(a===$.a5[r])return!0
return!1},
mB:function(a,b){var s,r,q,p,o,n,m,l=a.gW(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.t(l.gI(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gI(l);++j
if(!l.t()){if(j<=4){b.push(H.t(p))
return}r=H.t(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gI(l);++j
for(;l.t();p=o,o=n){n=l.gI(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.t(p)
r=H.t(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
jY:function(a){var s,r={}
if(P.jG(a))return"{...}"
s=new P.be("")
try{$.a5.push(a)
s.a+="{"
r.a=!0
J.jc(a,new P.hr(r,s))
s.a+="}"}finally{if(0>=$.a5.length)return H.e($.a5,-1)
$.a5.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cD:function cD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iM:function iM(a){this.a=a
this.c=this.b=null},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c5:function c5(){},
ca:function ca(){},
B:function B(){},
cc:function cc(){},
hr:function hr(a,b){this.a=a
this.b=b},
T:function T(){},
dY:function dY(){},
cL:function cL(){},
cF:function cF(){},
cW:function cW(){},
dc:function dc(){},
df:function df(){},
h4:function h4(){},
is:function is(){},
it:function it(){},
iS:function iS(a){this.b=0
this.c=a},
lk:function(a){if(a instanceof H.bp)return a.i(0)
return"Instance of '"+H.cp(a)+"'"},
hn:function(a,b,c){var s,r=c?J.ji(a):J.ln(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
ho:function(a,b){var s,r=[]
for(s=J.aB(a);s.t();)r.push(s.gI(s))
if(b)return r
return J.jj(r)},
ls:function(a,b){var s,r,q=J.ji(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
jr:function(a){var s=a,r=s.length,q=P.jp(0,null,r)
return H.lF(q<r?s.slice(0,q):s)},
lH:function(a){return new H.hi(a,H.lq(a,!1,!0,!1,!1,!1))},
k8:function(a,b,c){var s=J.aB(b)
if(!s.t())return a
if(c.length===0){do a+=H.t(s.gI(s))
while(s.t())}else{a+=H.t(s.gI(s))
for(;s.t();)a=a+c+H.t(s.gI(s))}return a},
mi:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.n){s=$.l2().b
s=s.test(b)}else s=!1
if(s)return b
r=C.C.fD(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.lE(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
li:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lj:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dh:function(a){if(a>=10)return""+a
return"0"+a},
jV:function(a){return new P.b2(1000*a)},
h8:function(a){if(typeof a=="number"||H.jE(a)||null==a)return J.fG(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lk(a)},
fJ:function(a){return new P.d8(a)},
jd:function(a){return new P.al(!1,null,null,a)},
dS:function(a,b){return new P.cq(null,null,!0,a,b,"Value not in range")},
aL:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
jp:function(a,b,c){if(a>c)throw H.c(P.aL(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aL(b,a,c,"end",null))
return b}return c},
k3:function(a,b){if(a<0)throw H.c(P.aL(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bm(b):e
return new P.dp(s,!0,a,c,"Index out of range")},
w:function(a){return new P.ew(a)},
kd:function(a){return new P.et(a)},
b0:function(a){return new P.dd(a)},
d:function(a){return new P.eQ(a)},
jP:function(a){H.nu(a)},
Q:function Q(a,b){this.a=a
this.b=b},
b2:function b2(a){this.a=a},
h1:function h1(){},
h2:function h2(){},
D:function D(){},
d8:function d8(a){this.a=a},
eh:function eh(){},
dK:function dK(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cq:function cq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dp:function dp(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ew:function ew(a){this.a=a},
et:function et(a){this.a=a},
e4:function e4(a){this.a=a},
dd:function dd(a){this.a=a},
dN:function dN(){},
cu:function cu(){},
dg:function dg(a){this.a=a},
eQ:function eQ(a){this.a=a},
hd:function hd(a,b){this.a=a
this.b=b},
h:function h(){},
dq:function dq(){},
ab:function ab(){},
J:function J(){},
be:function be(a){this.a=a},
ne:function(a){var s,r,q,p
if(t.I.b(a)){s=J.l8(a)
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
return new P.cT(r,q,p)},
nd:function(a){if(a instanceof P.cT)return{data:a.a,height:a.b,width:a.c}
return a},
aU:function(a){var s,r,q,p,o
if(a==null)return null
s=P.M(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
ku:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jE(a))return a
if(t.f.b(a))return P.kC(a)
if(t.d.b(a)){s=[]
J.jc(a,new P.iW(s))
a=s}return a},
kC:function(a){var s={}
J.jc(a,new P.j2(s))
return s},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a){this.a=a},
j2:function j2(a){this.a=a},
dl:function dl(a,b){this.a=a
this.b=b},
hb:function hb(){},
hc:function hc(){},
f8:function f8(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
dx:function dx(){},
bb:function bb(){},
dL:function dL(){},
hN:function hN(){},
e9:function e9(){},
k:function k(){},
bg:function bg(){},
eg:function eg(){},
eX:function eX(){},
eY:function eY(){},
f4:function f4(){},
f5:function f5(){},
fh:function fh(){},
fi:function fi(){},
fo:function fo(){},
fp:function fp(){},
fM:function fM(){},
d9:function d9(){},
fN:function fN(a){this.a=a},
da:function da(){},
aC:function aC(){},
dM:function dM(){},
eE:function eE(){},
bC:function bC(){},
e2:function e2(){},
fd:function fd(){},
fe:function fe(){}},W={
je:function(){var s=document.createElement("canvas")
s.toString
return s},
h3:function(a){return"wheel"},
iL:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kj:function(a,b,c,d){var s=W.iL(W.iL(W.iL(W.iL(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
X:function(a,b,c,d){var s=W.kz(new W.iJ(c),t.B)
if(s!=null&&!0)J.l5(a,b,s,!1)
return new W.eP(a,b,s,!1)},
kz:function(a,b){var s=$.aj
if(s===C.e)return a
return s.cZ(a,b)},
l:function l(){},
fH:function fH(){},
d6:function d6(){},
d7:function d7(){},
db:function db(){},
b_:function b_(){},
bV:function bV(){},
af:function af(){},
fV:function fV(){},
C:function C(){},
bX:function bX(){},
fW:function fW(){},
aa:function aa(){},
an:function an(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
bZ:function bZ(){},
c_:function c_(){},
di:function di(){},
h0:function h0(){},
eG:function eG(a,b){this.a=a
this.b=b},
G:function G(){},
i:function i(){},
b:function b(){},
aE:function aE(){},
dj:function dj(){},
dk:function dk(){},
dm:function dm(){},
aF:function aF(){},
hg:function hg(){},
b3:function b3(){},
b4:function b4(){},
bu:function bu(){},
b7:function b7(){},
hp:function hp(){},
hH:function hH(){},
dB:function dB(){},
hI:function hI(a){this.a=a},
dC:function dC(){},
hJ:function hJ(a){this.a=a},
aH:function aH(){},
dD:function dD(){},
a6:function a6(){},
eF:function eF(a){this.a=a},
r:function r(){},
cm:function cm(){},
aJ:function aJ(){},
dQ:function dQ(){},
dV:function dV(){},
hT:function hT(a){this.a=a},
dX:function dX(){},
av:function av(){},
e0:function e0(){},
aM:function aM(){},
e1:function e1(){},
aN:function aN(){},
e6:function e6(){},
i_:function i_(a){this.a=a},
ai:function ai(){},
aw:function aw(){},
ad:function ad(){},
ea:function ea(){},
eb:function eb(){},
i9:function i9(){},
aO:function aO(){},
bf:function bf(){},
ef:function ef(){},
id:function id(){},
ay:function ay(){},
ir:function ir(){},
ez:function ez(){},
aQ:function aQ(){},
bH:function bH(){},
eH:function eH(){},
cC:function cC(){},
eU:function eU(){},
cG:function cG(){},
fc:function fc(){},
fj:function fj(){},
jf:function jf(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iJ:function iJ(a){this.a=a},
jw:function jw(a){this.$ti=a},
E:function E(){},
c3:function c3(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eR:function eR(){},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f6:function f6(){},
f7:function f7(){},
f9:function f9(){},
cM:function cM(){},
cN:function cN(){},
fa:function fa(){},
fb:function fb(){},
fg:function fg(){},
fk:function fk(){},
fl:function fl(){},
cP:function cP(){},
cQ:function cQ(){},
fm:function fm(){},
fn:function fn(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){}},K={fI:function fI(){},dn:function dn(){},aI:function aI(a){this.a=a},S:function S(a){this.a=a},
ns:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="testCanvas",b3=null,b4="modifiers",b5=V.lL("Test 033"),b6=W.je()
b6.className="pageLargeCanvas"
b6.id=b2
b5.a.appendChild(b6).toString
b5.cU(["Test of a Stereoscopic scene."])
b5.cU(["\xab[Back to Tests|../]"])
s=document.getElementById(b2)
if(s==null)H.f(P.d("Failed to find an element with the identifier, testCanvas."))
r=E.lQ(s,!0,!0,!0,!1)
q=F.jq()
F.cX(q,b3,b3,1,1,1,0,0,1)
F.cX(q,b3,b3,1,1,0,1,0,3)
F.cX(q,b3,b3,1,1,0,0,1,2)
F.cX(q,b3,b3,1,1,-1,0,0,0)
F.cX(q,b3,b3,1,1,0,-1,0,0)
F.cX(q,b3,b3,1,1,0,0,-1,3)
q.av()
p=E.h5(q)
o=E.h5(b3)
for(b5=o.y,n=b5.a,m=-1.6;m<=1.7;m+=0.8)for(l=-1.6;l<=1.7;l+=0.8)for(k=-1.6;k<=1.7;k+=0.8){j=new V.as(1,0,0,m,0,1,0,l,0,0,1,k,0,0,0,1).G(0,new V.as(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
i=E.h5(b3)
h=$.hG
h=new U.br(h==null?$.hG=new V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):h)
h.sL(0,j)
i.sdv(h)
h=i.y
if(h.b3([p])){g=h.a
f=g.length
g.push(p)
h=h.c
if(h!=null)h.$2(f,[p])}if(b5.b3([i])){f=n.length
n.push(i)
h=b5.c
if(h!=null)h.$2(f,[i])}}b5=r.f
e=b5.ds("../resources/diceColor")
n=O.fR()
d=new O.dz(n)
n.aV(d.gep(),d.ger())
n=d.gca()
n.gn().l(0,d.gcL())
n.gdr().l(0,d.gas())
n=d.gca()
h=U.de(V.k0(-1,-1,-1,b3))
n.l(0,D.jU(new V.I(1,0.9,0.9),h))
n=d.gca()
h=U.de(V.k0(1,1,2,b3))
n.l(0,D.jU(new V.I(0.2,0.2,0.35),h))
n=d.gbQ()
n.saO(0,new V.I(0.2,0.2,0.2))
d.gbQ().sbd(e)
n=d.gbX()
n.saO(0,new V.I(0.8,0.8,0.8))
d.gbX().sbd(e)
n=d.gbs()
n.saO(0,new V.I(0.7,0.7,0.7))
n=d.gbs()
n.bM(new A.a9(!0,!1,n.c.c))
n.cP(10)
d.gd1().sbd(b5.ds("../resources/diceBumpMap"))
c=U.jg(b3)
n=r.x
h=U.fU()
g=U.fU()
b=$.bh
if(b==null)b=$.bh=new V.W(0,0)
b=new U.cy(h,g,new X.Y(!1,!1,!1),b,V.a4())
h.scl(0,!0)
h.scb(6.283185307179586)
h.scd(0)
h.sa4(0,0)
h.scc(100)
h.sT(0)
h.sbW(0.5)
a=b.gaH()
h.gn().l(0,a)
g.scl(0,!0)
g.scb(6.283185307179586)
g.scd(0)
g.sa4(0,0)
g.scc(100)
g.sT(0)
g.sbW(0.5)
g.gn().l(0,a)
h=new X.Y(!1,!1,!1)
if(!b.d.m(0,h)){a0=b.d
b.d=h
b.J(new D.v(b4,a0,h))}b.b5(n)
c.l(0,b)
U.fU()
if($.bh==null)$.bh=new V.W(0,0)
V.a4()
h=U.fU()
g=$.bh
if(g==null)g=$.bh=new V.W(0,0)
g=new U.cx(h,new X.Y(!1,!1,!1),g,V.a4())
h.scl(0,!0)
h.scb(6.283185307179586)
h.scd(0)
h.sa4(0,0)
h.scc(100)
h.sT(0)
h.sbW(0.2)
h.gn().l(0,g.gaH())
h=new X.Y(!0,!1,!1)
if(!g.c.m(0,h)){a0=g.c
g.c=h
g.J(new D.v(b4,a0,h))}g.b5(n)
c.l(0,g)
h=new X.Y(!1,!1,!1)
g=new U.cz(h,V.a4())
b=new X.Y(!1,!1,!1)
if(!h.m(0,b)){g.b=b
g.J(new D.v(b4,h,b))}g.b5(n)
c.l(0,g)
c.l(0,U.de(V.jn(0,0,6)))
a1=X.hf(b3)
if(a1.b){a1.b=!1
a1.ag(new D.v("clearColor",!0,!1))}b5=b5.dt("../resources/maskonaive",".jpg")
n=E.h5(b3)
a2=new M.bW(n)
q=F.jq()
h=q.gX()
g=new V.x(-1,-1,1).E()
a3=h.bj(new V.aK(1,2,4,6),V.fS(255,0,0),new V.V(-1,-1,0),new V.N(0,1),g,b3)
g=q.gX()
h=new V.x(1,-1,1).E()
a4=g.bj(new V.aK(0,3,4,6),V.fS(0,0,255),new V.V(1,-1,0),new V.N(1,1),h,b3)
h=q.gX()
g=new V.x(1,1,1).E()
a5=h.bj(new V.aK(0,2,5,6),V.fS(0,128,0),new V.V(1,1,0),new V.N(1,0),g,b3)
g=q.gX()
h=$.a_
if(h==null)h=$.a_=new V.N(0,0)
b=new V.x(-1,1,1).E()
a6=g.bj(new V.aK(0,2,4,7),V.fS(255,255,0),new V.V(-1,1,0),h,b,b3)
q.gV().fu([a3,a4,a5,a6])
q.av()
n.scp(0,q)
a2.sb6(b3)
a2.sbb(0,b3)
a2.sbc(b3)
n=new O.dZ(new V.I(1,1,1))
a0=n.c
n.c=b5
b5.gn().l(0,n.gas())
n.O(new D.v("boxTexture",a0,n.c))
a2.sbc(n)
b5=O.fR()
a7=new M.c1(b5)
b5.aV(a7.gew(),a7.gey())
a8=X.hf(b3)
a7.sb6(b3)
a7.sbb(0,a8)
a7.sbc(b3)
a7.sbc(d)
b5.l(0,o)
b5=[a2,a7]
n=U.de(b3)
h=U.de(b3)
g=V.hO(0,0,0.5,1)
b=V.hO(0.5,0,0.5,1)
a=O.fR()
b=new M.e5(n,h,g,b,a)
g=U.jg([null,n])
b.d=g
a9=U.jg([null,h])
b.e=a9
b.f=X.jo(g)
b.r=X.jo(a9)
a.aV(b.gen(),b.gf3())
a.aM(0,b5)
g=b.d
if(g==null)g=b3
else{g=g.a
if(0>=g.length)return H.e(g,0)
g=g[0]}if(!J.P(g,c)){g=b.d
a9=g==null
if(a9)a0=b3
else{b0=g.a
if(0>=b0.length)return H.e(b0,0)
a0=b0[0]}if(!a9)g.k(0,0,c)
g=b.e
if(g!=null)g.k(0,0,c)
b.N(new D.v("cameraMover",a0,c))}g=b.z
if(g!==a1){if(g!=null)g.gn().K(0,b.gM())
a0=b.z
b.z=a1
a1.gn().l(0,b.gM())
b.N(new D.v("target",a0,b.z))}a.aM(0,b5)
b1=Math.atan2(0.1,12)
n.sL(0,V.jn(-0.1,0,0).G(0,V.jm(b1)))
h.sL(0,V.jn(0.1,0,0).G(0,V.jm(-b1)))
b5=r.d
if(b5!==b){if(b5!=null)b5.gn().K(0,r.gcu())
r.d=b
b.gn().l(0,r.gcu())
r.cv()}V.nv(r)}},L={e3:function e3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},ee:function ee(a,b){this.b=a
this.c=b},ib:function ib(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},ie:function ie(a,b){this.b=a
this.c=!1
this.a=b}},O={
fR:function(){return new O.bq([])},
bq:function bq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ci:function ci(a){this.a=a
this.b=null},
dA:function(a,b){return new O.cg(new V.I(0,0,0),a,b,new A.a9(!1,!1,!1))},
dz:function dz(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(){},
hE:function hE(a,b){this.a=a
this.b=b},
hF:function hF(){},
hs:function hs(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cf:function cf(){},
ht:function ht(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cg:function cg(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hv:function hv(a){this.b=a},
hw:function hw(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hx:function hx(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
dZ:function dZ(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
i3:function i3(){}},E={
h5:function(a){var s=O.fR(),r=new E.bs(s)
s.aV(r.gfQ(),r.gfT())
r.scp(0,a)
r.sdv(null)
return r},
kg:function(){var s=window.navigator.vendor
s.toString
if(C.c.H(s,"Google"))return C.t
s=window.navigator.userAgent
s.toString
if(C.c.H(s,"Firefox"))return C.j
s=window.navigator.appVersion
s.toString
if(C.c.H(s,"Trident")||C.c.H(s,"Edge"))return C.k
s=window.navigator.appName
s.toString
if(C.c.H(s,"Microsoft"))return C.k
return C.u},
kh:function(){var s=window.navigator.appVersion
s.toString
if(C.c.H(s,"Win"))return C.I
if(C.c.H(s,"Mac"))return C.o
if(C.c.H(s,"Linux"))return C.J
return C.K},
lJ:function(a,b){var s
Date.now()
s=new E.hP(a,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1),new O.ci([]),new O.ci([]),new O.ci([]),[null],P.M(t.N,t.k))
s.dS(a,b)
return s},
lQ:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.k9(a,!0,!0,!0,!1)
s=W.je()
r=s.style
r.width="100%"
r.height="100%"
J.l7(a).l(0,s)
return E.k9(s,!0,!0,!0,!1)},
k9:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.f.cm(a,"webgl2",P.lr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.d("Failed to get the rendering context for WebGL."))
s=E.lJ(l,a)
H.iV(l.getParameter(3379))
m=H.iV(l.getParameter(34076))
r=[]
q=$.h6
p=new X.ex(a,r,(q==null?$.h6=new E.eN(E.kg(),E.kh()):q).a===C.j?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.X(o,"contextmenu",p.geA(),!1))
r.push(W.X(a,"focus",p.geG(),!1))
r.push(W.X(a,"blur",p.geu(),!1))
r.push(W.X(o,"keyup",p.geK(),!1))
r.push(W.X(o,"keydown",p.geI(),!1))
r.push(W.X(a,"mousedown",p.geO(),!1))
r.push(W.X(a,"mouseup",p.geS(),!1))
r.push(W.X(a,n,p.geQ(),!1))
W.h3(a)
W.h3(a)
r.push(W.X(a,W.h3(a),p.geU(),!1))
r.push(W.X(o,n,p.geC(),!1))
r.push(W.X(o,"mouseup",p.geE(),!1))
r.push(W.X(o,"pointerlockchange",p.geW(),!1))
r.push(W.X(a,"touchstart",p.gf9(),!1))
r.push(W.X(a,"touchend",p.gf5(),!1))
r.push(W.X(a,"touchmove",p.gf7(),!1))
m=new E.ec(a,s,new T.i6(l,m),p,new P.Q(Date.now(),!1))
m.cN()
return m},
fO:function fO(){},
bs:function bs(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bn:function bn(a){this.b=a},
bA:function bA(a){this.b=a},
eN:function eN(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c,d,e,f,g,h){var _=this
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
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
ec:function ec(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
i8:function i8(a){this.a=a}},Z={
jv:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cY(c)),35044)
a.bindBuffer(b,null)
return new Z.eA(b,s)},
ae:function(a){return new Z.aP(a)},
eA:function eA(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eB:function eB(a){this.a=a},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c4:function c4(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a){this.a=a}},D={
A:function(){return new D.ao()},
fQ:function fQ(){},
ao:function ao(){var _=this
_.c=_.b=_.a=null
_.d=0},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
L:function L(){},
ap:function ap(){},
aq:function aq(){},
v:function v(a,b,c){this.c=a
this.d=b
this.e=c},
jU:function(a,b){var s=new D.bY(new V.I(1,1,1),V.lU(),V.ju(),V.lT()),r=s.a
s.a=b
b.gn().l(0,s.gdT())
s.ap(new D.v("mover",r,s.a))
if(!s.b.m(0,a)){r=s.b
s.b=a
s.ap(new D.v("color",r,a))}return s},
bY:function bY(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
c9:function c9(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.d=_.c=_.b=null}},X={bU:function bU(a,b){this.a=a
this.b=b},dv:function dv(a,b){this.a=a
this.b=b},hk:function hk(a,b){this.c=a
this.d=b},cb:function cb(a,b,c){this.x=a
this.c=b
this.d=c},hq:function hq(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},bx:function bx(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},hK:function hK(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},by:function by(a,b,c){this.x=a
this.c=b
this.d=c},dR:function dR(){},cv:function cv(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},ic:function ic(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},ex:function ex(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
hf:function(a){var s=new V.aD(0,0,0,1),r=V.lI()
return new X.he(s,r)},
jo:function(a){var s,r,q=new X.dO(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gn().l(0,q.gdZ())
q.ag(new D.v("mover",s,q.b))}r=q.c
$.y().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.ag(new D.v("fov",r,1.0471975511965976))}r=q.d
$.y().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.ag(new D.v("near",r,0.1))}r=q.e
$.y().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.ag(new D.v("far",r,2000))}return q},
he:function he(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
hh:function hh(){this.b=null},
dO:function dO(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
i1:function i1(){}},V={
fS:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aD(s,r,q,1)},
jM:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
nB:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dJ(a-b,s)
return(a<0?a+s:a)+b},
u:function(a,b,c){$.y().toString
return C.c.ae(C.d.cj(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bO:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.n)(a),++p){o=a[p]
$.y().toString
n=C.c.ae(C.d.cj(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.e(l,m)
s=C.c.ae(l[m],q)
r=l.length
if(m>=r)return H.e(l,m)
l[m]=s}return l},
jO:function(a){return C.d.ha(Math.pow(2,C.d.c5(Math.log(a)/Math.log(2))))},
a4:function(){var s=$.hG
return s==null?$.hG=V.at(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
at:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jn:function(a,b,c){return V.at(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lv:function(a,b,c){return V.at(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
jm:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.at(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
k0:function(a,b,c,d){d=V.ju()
return V.k_(V.k1(),d,new V.x(a,b,c))},
k_:function(a,b,c){var s=c.E(),r=b.b7(s).E(),q=s.b7(r),p=new V.x(a.a,a.b,a.c)
return V.at(r.a,q.a,s.a,r.aU(0).Z(p),r.b,q.b,s.b,q.aU(0).Z(p),r.c,q.c,s.c,s.aU(0).Z(p),0,0,0,1)},
k1:function(){var s=$.au
return s==null?$.au=new V.V(0,0,0):s},
lI:function(){var s=$.k4
return s==null?$.k4=V.hO(0,0,1,1):s},
hO:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dT(a,b,c,d)},
ey:function(){var s=$.kf
return s==null?$.kf=new V.x(0,0,0):s},
lT:function(){var s=$.iu
return s==null?$.iu=new V.x(-1,0,0):s},
ju:function(){var s=$.iv
return s==null?$.iv=new V.x(0,1,0):s},
lU:function(){var s=$.iw
return s==null?$.iw=new V.x(0,0,1):s},
lS:function(a,b,c){return new V.x(a,b,c)},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(){},
ch:function ch(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
as:function as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
nv:function(a){P.lR(C.D,new V.ja(a))},
lL:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.X(n,"scroll",new V.hY(s),!1)
return new V.hW(o)},
ja:function ja(a){this.a=a},
hW:function hW(a){this.a=a
this.b=null},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a}},U={
fU:function(){return new U.fT()},
de:function(a){var s=new U.br(V.a4())
s.sL(0,a)
return s},
jg:function(a){var s=new U.bt(V.a4(),[])
s.aV(s.gdV(),s.gf_())
if(a!=null)s.aM(0,a)
return s},
fT:function fT(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
br:function br(a){this.a=a
this.b=null},
bt:function bt(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.d=_.c=_.b=null},
Z:function Z(){},
cx:function cx(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cy:function cy(a,b,c,d,e){var _=this
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
cz:function cz(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={bW:function bW(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},c1:function c1(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},e5:function e5(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.r=_.f=_.e=_.d=null
_.x=c
_.y=d
_.z=null
_.Q=e
_.db=null}},A={
lu:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+a9.gaj(a9)+b0.gaj(b0)+b1.gaj(b1)+b2.gaj(b2)+b3.gaj(b3)+"_"
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
b=$.ak()
if(h){s=$.aX()
b=new Z.aP(b.a|s.a)}if(g)b=new Z.aP(b.a|$.aW().a)
if(f)b=new Z.aP(b.a|$.aY().a)
if(e)b=new Z.aP(b.a|$.aV().a)
return new A.hu(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
iZ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
j_:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.iZ(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fD(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
mH:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.iZ(b,r,"emission")
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
mD:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.j_(b,r,"ambient")
b.a+="\n"},
mF:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.j_(b,r,"diffuse")
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
mI:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.j_(b,r,"invDiffuse")
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
mO:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.j_(b,r,"specular")
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
mK:function(a,b){var s,r,q
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
mM:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.iZ(b,r,"reflect")
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
mN:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.iZ(b,r,"refract")
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
mE:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.fD(r)
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
mG:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.fD(r)
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
mL:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.fD(r)
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
mP:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.fD(r)
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
if(m){s=$.h6
if(s==null)s=$.h6=new E.eN(E.kg(),E.kh())
p=c.a
if(s.b===C.o){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
mJ:function(a,b){var s,r
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
mQ:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.be(""),i=""+"precision mediump float;\n"
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
A.mH(a,j)
A.mD(a,j)
A.mF(a,j)
A.mI(a,j)
A.mO(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.mM(a,j)
A.mN(a,j)}A.mK(a,j)
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
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.n)(p),++m)A.mE(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.n)(p),++m)A.mG(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.n)(p),++m)A.mL(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.n)(p),++m)A.mP(a,p[m],j)
A.mJ(a,j)}p=j.a+="// === Main ===\n"
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
j.a+=k+(q[0].toUpperCase()+C.c.aZ(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.n)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.c.aZ(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.n)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.c.aZ(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.n)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.c.aZ(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
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
mR:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aP+"];\n"
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
mT:function(a,b){var s
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
mS:function(a,b){var s
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
mV:function(a,b){var s,r
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
mW:function(a,b){var s,r
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
mU:function(a,b){var s
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
mX:function(a,b){var s
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
fD:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.c.aZ(a,1)},
jt:function(a,b,c,d,e){var s=new A.ij([],a,c,e)
s.f=d
s.e=P.hn(d,0,!1)
return s},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(a){this.a=a},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.dk=_.hq=_.dj=_.di=_.hp=_.dh=_.dg=_.df=_.ho=_.de=_.dd=_.dc=_.hn=_.da=_.d9=_.hm=_.d8=_.bl=_.bk=_.aP=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.bY=c
_.bZ=d
_.c_=e
_.c0=f
_.c1=g
_.c2=h
_.c3=i
_.c4=j
_.ht=_.hs=_.hr=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
aZ:function aZ(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
bd:function bd(a,b){this.a=a
this.b=b},
hu:function hu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aP=b5
_.bk=b6
_.bl=b7},
el:function el(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
em:function em(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ep:function ep(a,b,c,d,e,f,g,h,i,j){var _=this
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
es:function es(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bD:function bD(){},
ct:function ct(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
ii:function ii(){},
ip:function ip(a){this.a=a},
cw:function cw(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ei:function ei(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
ej:function ej(a,b,c){this.a=a
this.c=b
this.d=c},
ek:function ek(a,b,c){this.a=a
this.c=b
this.d=c},
iq:function iq(a,b,c){this.a=a
this.c=b
this.d=c},
en:function en(a,b,c){this.a=a
this.c=b
this.d=c},
eo:function eo(a,b,c){this.a=a
this.c=b
this.d=c},
eq:function eq(a,b,c){this.a=a
this.c=b
this.d=c},
er:function er(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iX:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cX:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.x(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.x(s+a4,r+a2,q+a3)
o=new V.x(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.x(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.iX(h)
j=F.iX(g)
a.fP(F.nx(a0,a1,new F.iU(i,F.iX(f),F.iX(e),j,k,c),b))},
nx:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.c(P.d("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.d("Must have 1 or more divisions of the height for a surface."))
s=F.jq()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.p(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.ix(e,e,new V.aD(n,0,0,1),e,e,new V.N(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bV(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.p(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.ix(e,e,new V.aD(h,g,f,1),e,e,new V.N(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bV(d))}}s.gV().fv(a+1,b+1,r)
return s},
jq:function(){return new F.hU()},
ix:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cA()
h=$.l_()
s=$.ak()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.aX().a)!==0)q.r=e
if((r&$.aW().a)!==0)q.x=b
if((r&$.bl().a)!==0)q.y=f
if((r&$.aY().a)!==0)q.z=g
if((r&$.l0().a)!==0)q.Q=c
if((r&$.bQ().a)!==0)q.ch=i
if((r&$.aV().a)!==0)q.cx=a
return q},
iU:function iU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hl:function hl(){this.b=this.a=null},
hM:function hM(){this.a=null},
hU:function hU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hV:function hV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cr:function cr(a,b){this.a=a
this.b=b},
cs:function cs(a,b){this.a=a
this.b=b},
bE:function bE(a,b){this.a=a
this.b=b},
cA:function cA(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
iE:function iE(a){this.a=a},
iD:function iD(a){this.a=a},
p:function p(a,b){this.a=a
this.b=!1
this.c=b},
iy:function iy(a,b,c){this.b=a
this.c=b
this.d=c},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.b=a
this.c=b},
iC:function iC(a){this.b=a}},T={i4:function i4(){},i5:function i5(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},i6:function i6(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},i7:function i7(a,b,c,d,e,f,g){var _=this
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
H.jk.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gB:function(a){return H.co(a)},
i:function(a){return"Instance of '"+H.cp(a)+"'"}}
J.dr.prototype={
i:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$ibi:1}
J.c7.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gB:function(a){return 0}}
J.b6.prototype={
gB:function(a){return 0},
i:function(a){return String(a)}}
J.dP.prototype={}
J.bF.prototype={}
J.ar.prototype={
i:function(a){var s=a[$.kO()]
if(s==null)return this.dO(a)
return"JavaScript function for "+J.fG(s)}}
J.ah.prototype={
K:function(a,b){var s
if(!!a.fixed$length)H.f(P.w("remove"))
for(s=0;s<a.length;++s)if(J.P(a[s],b)){a.splice(s,1)
return!0}return!1},
aM:function(a,b){if(!!a.fixed$length)H.f(P.w("addAll"))
this.e1(a,b)
return},
e1:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.b0(a))
for(s=0;s<r;++s)a.push(b[s])},
D:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b0(a))}},
p:function(a,b){var s,r,q=a.length,p=P.hn(q,"",!1)
for(s=0;s<a.length;++s){r=H.t(a[s])
if(s>=q)return H.e(p,s)
p[s]=r}return p.join(b)},
fN:function(a){return this.p(a,"")},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gc7:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lm())},
aX:function(a,b){if(!!a.immutable$list)H.f(P.w("sort"))
H.lO(a,b==null?J.mu():b)},
dL:function(a){return this.aX(a,null)},
H:function(a,b){var s
for(s=0;s<a.length;++s)if(J.P(a[s],b))return!0
return!1},
i:function(a){return P.jh(a,"[","]")},
gW:function(a){return new J.a3(a,a.length)},
gB:function(a){return H.co(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.w("set length"))
if(b>a.length)H.ks(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.f(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$ij:1,
$ih:1,
$im:1}
J.dt.prototype={}
J.a3.prototype={
gI:function(a){return H.O(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.n(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bv.prototype={
ab:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbm(b)
if(this.gbm(a)===s)return 0
if(this.gbm(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbm:function(a){return a===0?1/a<0:a<0},
ha:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.w(""+a+".toInt()"))},
c5:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.w(""+a+".floor()"))},
ah:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
cj:function(a,b){var s
if(b>20)throw H.c(P.aL(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbm(a))return"-"+s
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
dJ:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dP:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cQ(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cQ(a,b)},
cQ:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.w("Result of truncating division is "+H.t(s)+": "+H.t(a)+" ~/ "+b))},
bh:function(a,b){var s
if(a>0)s=this.fk(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fk:function(a,b){return b>31?0:a>>>b},
$ia1:1,
$ia2:1}
J.c6.prototype={$io:1}
J.ds.prototype={}
J.b5.prototype={
bU:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.f(H.bN(a,b))
return a.charCodeAt(b)},
cB:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
U:function(a,b){return a+b},
cr:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dS(b,null))
if(b>c)throw H.c(P.dS(b,null))
if(c>a.length)throw H.c(P.dS(c,null))
return a.substring(b,c)},
aZ:function(a,b){return this.cr(a,b,null)},
G:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.B)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ae:function(a,b){var s=b-a.length
if(s<=0)return a
return this.G(" ",s)+a},
fB:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aL(c,0,s,null,null))
return H.kJ(a,b,c)},
H:function(a,b){return this.fB(a,b,0)},
ab:function(a,b){var s
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
$iz:1}
H.dw.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.K.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.c.bU(this.a,b)}}
H.j.prototype={}
H.bw.prototype={
gI:function(a){return H.O(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.fC(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.b0(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.A(q,s);++r.c
return!0}}
H.b9.prototype={
gW:function(a){return new H.cd(J.aB(this.a),this.b)},
gj:function(a){return J.bm(this.a)},
A:function(a,b){return this.b.$1(J.jb(this.a,b))}}
H.c0.prototype={$ij:1}
H.cd.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gI(r))
return!0}s.a=null
return!1},
gI:function(a){return H.O(this).Q[1].a(this.a)}}
H.cB.prototype={
gW:function(a){return new H.eC(J.aB(this.a),this.b)}}
H.eC.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gI(s)))return!0
return!1},
gI:function(a){var s=this.a
return s.gI(s)}}
H.c2.prototype={}
H.ev.prototype={
k:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.bG.prototype={}
H.ig.prototype={
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
H.cn.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.du.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eu.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hL.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ff.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bp.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kM(r==null?"unknown":r)+"'"},
ghf:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i2.prototype={}
H.hZ.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kM(s)+"'"}}
H.bR.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bR))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gB:function(a){var s,r=this.c
if(r==null)s=H.co(this.a)
else s=typeof r!=="object"?J.fF(r):H.co(r)
return(s^H.co(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.cp(s)+"'")}}
H.dW.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.R.prototype={
gj:function(a){return this.a},
gay:function(a){return new H.aG(this)},
ghe:function(a){return H.lt(new H.aG(this),new H.hj(this))},
fC:function(a,b){var s=this.b
if(s==null)return!1
return this.e9(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bg(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bg(p,b)
q=r==null?n:r.b
return q}else return o.fM(b)},
fM:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cG(q,J.fF(a)&0x3ffffff)
r=this.dm(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cz(s==null?m.b=m.bI():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cz(r==null?m.c=m.bI():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bI()
p=J.fF(b)&0x3ffffff
o=m.cG(q,p)
if(o==null)m.bN(q,p,[m.bJ(b,c)])
else{n=m.dm(o,b)
if(n>=0)o[n].b=c
else o.push(m.bJ(b,c))}}},
D:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b0(s))
r=r.c}},
cz:function(a,b,c){var s=this.bg(a,b)
if(s==null)this.bN(a,b,this.bJ(b,c))
else s.b=c},
bJ:function(a,b){var s=this,r=new H.hm(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dm:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.P(a[r].a,b))return r
return-1},
i:function(a){return P.jY(this)},
bg:function(a,b){return a[b]},
cG:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
ec:function(a,b){delete a[b]},
e9:function(a,b){return this.bg(a,b)!=null},
bI:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bN(r,s,r)
this.ec(r,s)
return r}}
H.hj.prototype={
$1:function(a){var s=this.a
return H.O(s).Q[1].a(s.h(0,a))},
$S:function(){return H.O(this.a).ak("2(1)")}}
H.hm.prototype={}
H.aG.prototype={
gj:function(a){return this.a.a},
gW:function(a){var s=this.a,r=new H.dy(s,s.r)
r.c=s.e
return r}}
H.dy.prototype={
gI:function(a){return H.O(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.j5.prototype={
$1:function(a){return this.a(a)},
$S:21}
H.j6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.j7.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.hi.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ck.prototype={}
H.bz.prototype={
gj:function(a){return a.length},
$iq:1}
H.ba.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]},
k:function(a,b,c){H.az(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cj.prototype={
k:function(a,b,c){H.az(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dE.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.dF.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.dG.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.dH.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.dI.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.cl.prototype={
gj:function(a){return a.length},
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.dJ.prototype={
gj:function(a){return a.length},
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.cH.prototype={}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
H.ac.prototype={
ak:function(a){return H.fr(v.typeUniverse,this,a)},
cA:function(a){return H.mg(v.typeUniverse,this,a)}}
H.eT.prototype={}
H.eO.prototype={
i:function(a){return this.a}}
H.cS.prototype={}
P.iG.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:24}
P.iF.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:28}
P.iH.prototype={
$0:function(){this.a.$0()},
$S:10}
P.iI.prototype={
$0:function(){this.a.$0()},
$S:10}
P.cR.prototype={
dX:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bM(new P.iR(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dY:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bM(new P.iQ(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$iia:1}
P.iR.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.iQ.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.b.dP(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bI.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.bJ.prototype={
gI:function(a){var s=this.c
if(s==null)return this.b
return s.gI(s)},
t:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.t())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bI){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aB(s)
if(o instanceof P.bJ){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cO.prototype={
gW:function(a){return new P.bJ(this.a())}}
P.eD.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.iT.prototype={}
P.j0.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.iN.prototype={
h6:function(a){var s,r,q,p=null
try{if(C.e===$.aj){a.$0()
return}P.mZ(p,p,this,a)}catch(q){s=H.fE(q)
r=H.jK(q)
P.ky(p,p,this,s,r)}},
h7:function(a,b){var s,r,q,p=null
try{if(C.e===$.aj){a.$1(b)
return}P.n_(p,p,this,a,b)}catch(q){s=H.fE(q)
r=H.jK(q)
P.ky(p,p,this,s,r)}},
h8:function(a,b){return this.h7(a,b,t.z)},
fz:function(a){return new P.iO(this,a)},
cZ:function(a,b){return new P.iP(this,a,b)}}
P.iO.prototype={
$0:function(){return this.a.h6(this.b)},
$S:2}
P.iP.prototype={
$1:function(a){return this.a.h8(this.b,a)},
$S:function(){return this.c.ak("~(0)")}}
P.cD.prototype={
gW:function(a){var s=new P.cE(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
H:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e7(b)
return r}},
e7:function(a){var s=this.d
if(s==null)return!1
return this.bz(s[this.bw(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cC(s==null?q.b=P.jx():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cC(r==null?q.c=P.jx():r,b)}else return q.e0(0,b)},
e0:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jx()
s=q.bw(b)
r=p[s]
if(r==null)p[s]=[q.bv(b)]
else{if(q.bz(r,b)>=0)return!1
r.push(q.bv(b))}return!0},
K:function(a,b){if((b&1073741823)===b)return this.fc(this.c,b)
else return this.fb(0,b)},
fb:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bw(b)
r=n[s]
q=o.bz(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cS(p)
return!0},
cC:function(a,b){if(a[b]!=null)return!1
a[b]=this.bv(b)
return!0},
fc:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cS(s)
delete a[b]
return!0},
cI:function(){this.r=this.r+1&1073741823},
bv:function(a){var s,r=this,q=new P.iM(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cI()
return q},
cS:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cI()},
bw:function(a){return J.fF(a)&1073741823},
bz:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.P(a[r].a,b))return r
return-1}}
P.iM.prototype={}
P.cE.prototype={
gI:function(a){return H.O(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b0(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c5.prototype={}
P.ca.prototype={$ij:1,$ih:1,$im:1}
P.B.prototype={
gW:function(a){return new H.bw(a,this.gj(a))},
A:function(a,b){return this.h(a,b)},
D:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.b0(a))}},
gdn:function(a){return this.gj(a)===0},
hc:function(a,b){var s,r,q,p,o=this
if(o.gdn(a)){s=J.ji(0)
return s}r=o.h(a,0)
q=P.hn(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s}return q},
hb:function(a){return this.hc(a,!0)},
i:function(a){return P.jh(a,"[","]")}}
P.cc.prototype={}
P.hr.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.t(a)
r.a=s+": "
r.a+=H.t(b)},
$S:43}
P.T.prototype={
D:function(a,b){var s,r,q
for(s=J.aB(this.gay(a)),r=H.bP(a).ak("T.V");s.t();){q=s.gI(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.bm(this.gay(a))},
i:function(a){return P.jY(a)},
$iU:1}
P.dY.prototype={
i:function(a){return P.jh(this,"{","}")},
A:function(a,b){var s,r,q,p,o="index"
H.nb(b,o,t.S)
P.k3(b,o)
for(s=P.m0(this,this.r),r=H.O(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.F(b,this,o,null,q))}}
P.cL.prototype={$ij:1,$ih:1}
P.cF.prototype={}
P.cW.prototype={}
P.dc.prototype={}
P.df.prototype={}
P.h4.prototype={}
P.is.prototype={}
P.it.prototype={
fD:function(a){var s,r,q,p=P.jp(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.iS(r)
if(q.ee(a,0,p)!==p){C.c.bU(a,p-1)
q.bP()}return new Uint8Array(r.subarray(0,H.mm(0,q.b,s)))}}
P.iS.prototype={
bP:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fs:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bP()
return!1}},
ee:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.c.bU(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.c.cB(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fs(p,C.c.cB(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bP()}else if(p<=2047){o=l.b
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
m:function(a,b){if(b==null)return!1
return b instanceof P.Q&&this.a===b.a&&!0},
ab:function(a,b){return C.b.ab(this.a,b.a)},
gB:function(a){var s=this.a
return(s^C.b.bh(s,30))&1073741823},
i:function(a){var s=this,r=P.li(H.lD(s)),q=P.dh(H.lB(s)),p=P.dh(H.lx(s)),o=P.dh(H.ly(s)),n=P.dh(H.lA(s)),m=P.dh(H.lC(s)),l=P.lj(H.lz(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b2.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gB:function(a){return C.b.gB(this.a)},
ab:function(a,b){return C.b.ab(this.a,b.a)},
i:function(a){var s,r,q,p=new P.h2(),o=this.a
if(o<0)return"-"+new P.b2(0-o).i(0)
s=p.$1(C.b.Y(o,6e7)%60)
r=p.$1(C.b.Y(o,1e6)%60)
q=new P.h1().$1(o%1e6)
return""+C.b.Y(o,36e8)+":"+s+":"+r+"."+q}}
P.h1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.h2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.D.prototype={}
P.d8.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h8(s)
return"Assertion failed"}}
P.eh.prototype={}
P.dK.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gby:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbx:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gby()+o+m
if(!q.a)return l
s=q.gbx()
r=P.h8(q.b)
return l+s+": "+r}}
P.cq.prototype={
gby:function(){return"RangeError"},
gbx:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.t(q):""
else if(q==null)s=": Not greater than or equal to "+H.t(r)
else if(q>r)s=": Not in inclusive range "+H.t(r)+".."+H.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.t(r)
return s}}
P.dp.prototype={
gby:function(){return"RangeError"},
gbx:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.ew.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.et.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.e4.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dd.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h8(s)+"."}}
P.dN.prototype={
i:function(a){return"Out of Memory"},
$iD:1}
P.cu.prototype={
i:function(a){return"Stack Overflow"},
$iD:1}
P.dg.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.eQ.prototype={
i:function(a){return"Exception: "+this.a}}
P.hd.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.c.cr(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gj:function(a){var s,r=this.gW(this)
for(s=0;r.t();)++s
return s},
A:function(a,b){var s,r,q
P.k3(b,"index")
for(s=this.gW(this),r=0;s.t();){q=s.gI(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.ll(this,"(",")")}}
P.dq.prototype={}
P.ab.prototype={
gB:function(a){return P.J.prototype.gB.call(C.F,this)},
i:function(a){return"null"}}
P.J.prototype={constructor:P.J,$iJ:1,
m:function(a,b){return this===b},
gB:function(a){return H.co(this)},
i:function(a){return"Instance of '"+H.cp(this)+"'"},
toString:function(){return this.i(this)}}
P.be.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fH.prototype={
gj:function(a){return a.length}}
W.d6.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.d7.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.db.prototype={}
W.b_.prototype={
cm:function(a,b,c){if(c!=null)return a.getContext(b,P.kC(c))
return a.getContext(b)},
dI:function(a,b){return this.cm(a,b,null)},
$ib_:1}
W.bV.prototype={$ibV:1}
W.af.prototype={
gj:function(a){return a.length}}
W.fV.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.bX.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fW.prototype={}
W.aa.prototype={}
W.an.prototype={}
W.fX.prototype={
gj:function(a){return a.length}}
W.fY.prototype={
gj:function(a){return a.length}}
W.fZ.prototype={
gj:function(a){return a.length}}
W.h_.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bZ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.c_.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
return r+H.t(s)+") "+H.t(this.gaE(a))+" x "+H.t(this.gax(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bj(b)
if(s===r.gbn(b)){s=a.top
s.toString
s=s===r.gbq(b)&&this.gaE(a)===r.gaE(b)&&this.gax(a)===r.gax(b)}else s=!1}else s=!1
return s},
gB:function(a){var s,r=a.left
r.toString
r=C.d.gB(r)
s=a.top
s.toString
return W.kj(r,C.d.gB(s),C.d.gB(this.gaE(a)),C.d.gB(this.gax(a)))},
gd_:function(a){var s=a.bottom
s.toString
return s},
gcH:function(a){return a.height},
gax:function(a){var s=this.gcH(a)
s.toString
return s},
gbn:function(a){var s=a.left
s.toString
return s},
gci:function(a){var s=a.right
s.toString
return s},
gbq:function(a){var s=a.top
s.toString
return s},
gcT:function(a){return a.width},
gaE:function(a){var s=this.gcT(a)
s.toString
return s},
$ia7:1}
W.di.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.h0.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.eG.prototype={
gdn:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gW:function(a){var s=this.hb(this)
return new J.a3(s,s.length)}}
W.G.prototype={
gd2:function(a){var s=a.children
s.toString
return new W.eG(a,s)},
gd3:function(a){var s,r,q,p=a.clientLeft
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
$iG:1}
W.i.prototype={$ii:1}
W.b.prototype={
ft:function(a,b,c,d){if(c!=null)this.e2(a,b,c,!1)},
e2:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)},
$ib:1}
W.aE.prototype={$iaE:1}
W.dj.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.dk.prototype={
gj:function(a){return a.length}}
W.dm.prototype={
gj:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.hg.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.b3.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.b4.prototype={
gd4:function(a){var s=a.data
s.toString
return s},
$ib4:1}
W.bu.prototype={$ibu:1}
W.b7.prototype={$ib7:1}
W.hp.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.hH.prototype={
gj:function(a){return a.length}}
W.dB.prototype={
h:function(a,b){return P.aU(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aU(s.value[1]))}},
gay:function(a){var s=[]
this.D(a,new W.hI(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.hI.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dC.prototype={
h:function(a,b){return P.aU(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aU(s.value[1]))}},
gay:function(a){var s=[]
this.D(a,new W.hJ(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.hJ.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aH.prototype={$iaH:1}
W.dD.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.a6.prototype={$ia6:1}
W.eF.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b]).toString},
gW:function(a){var s=this.a.childNodes
return new W.c3(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.r.prototype={
h4:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.l4(s,b,a)}catch(q){H.fE(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dN(a):s},
fd:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cm.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aJ.prototype={
gj:function(a){return a.length},
$iaJ:1}
W.dQ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.dV.prototype={
h:function(a,b){return P.aU(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aU(s.value[1]))}},
gay:function(a){var s=[]
this.D(a,new W.hT(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.hT.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dX.prototype={
gj:function(a){return a.length}}
W.av.prototype={$iav:1}
W.e0.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aM.prototype={$iaM:1}
W.e1.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aN.prototype={
gj:function(a){return a.length},
$iaN:1}
W.e6.prototype={
h:function(a,b){return a.getItem(H.mk(b))},
D:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gay:function(a){var s=[]
this.D(a,new W.i_(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iU:1}
W.i_.prototype={
$2:function(a,b){return this.a.push(a)},
$S:31}
W.ai.prototype={$iai:1}
W.aw.prototype={$iaw:1}
W.ad.prototype={$iad:1}
W.ea.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.eb.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.i9.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aO.prototype={$iaO:1}
W.bf.prototype={$ibf:1}
W.ef.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.id.prototype={
gj:function(a){return a.length}}
W.ay.prototype={}
W.ir.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ez.prototype={
gj:function(a){return a.length}}
W.aQ.prototype={
gfH:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.w("deltaY is not supported"))},
gfG:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.w("deltaX is not supported"))},
$iaQ:1}
W.bH.prototype={
fe:function(a,b){var s=a.requestAnimationFrame(H.bM(b,1))
s.toString
return s},
ed:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eH.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.cC.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
s=r+H.t(s)+") "
r=a.width
r.toString
r=s+H.t(r)+" x "
s=a.height
s.toString
return r+H.t(s)},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bj(b)
if(s===r.gbn(b)){s=a.top
s.toString
if(s===r.gbq(b)){s=a.width
s.toString
if(s===r.gaE(b)){s=a.height
s.toString
r=s===r.gax(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gB:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gB(p)
s=a.top
s.toString
s=C.d.gB(s)
r=a.width
r.toString
r=C.d.gB(r)
q=a.height
q.toString
return W.kj(p,s,r,C.d.gB(q))},
gcH:function(a){return a.height},
gax:function(a){var s=a.height
s.toString
return s},
gcT:function(a){return a.width},
gaE:function(a){var s=a.width
s.toString
return s}}
W.eU.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.cG.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.fc.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.fj.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.jf.prototype={}
W.eP.prototype={}
W.iJ.prototype={
$1:function(a){return this.a.$1(a)},
$S:4}
W.jw.prototype={}
W.E.prototype={
gW:function(a){return new W.c3(a,this.gj(a))}}
W.c3.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.l3(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gI:function(a){return H.O(this).c.a(this.d)}}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f9.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fg.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fB.prototype={}
P.cT.prototype={$ib4:1,
gd4:function(a){return this.a}}
P.iW.prototype={
$1:function(a){this.a.push(P.ku(a))},
$S:35}
P.j2.prototype={
$2:function(a,b){this.a[a]=P.ku(b)},
$S:42}
P.dl.prototype={
gb1:function(){return new H.b9(new H.cB(this.b,new P.hb()),new P.hc())},
D:function(a,b){C.a.D(P.ho(this.gb1(),!1),b)},
k:function(a,b,c){var s=this.gb1()
J.l9(s.b.$1(J.jb(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.bm(this.gb1().a)},
h:function(a,b){var s=this.gb1()
return s.b.$1(J.jb(s.a,b))},
gW:function(a){var s=P.ho(this.gb1(),!1)
return new J.a3(s,s.length)}}
P.hb.prototype={
$1:function(a){return t.h.b(a)},
$S:26}
P.hc.prototype={
$1:function(a){return t.h.a(a)},
$S:22}
P.f8.prototype={
gci:function(a){return this.$ti.c.a(this.a+this.c)},
gd_:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bj(b)
if(s===r.gbn(b)){q=o.b
if(q===r.gbq(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gci(b)&&p.a(q+o.d)===r.gd_(b)}else s=!1}else s=!1}else s=!1
return s},
gB:function(a){var s=this,r=s.a,q=C.b.gB(r),p=s.b,o=C.b.gB(p),n=s.$ti.c
r=C.b.gB(n.a(r+s.c))
p=C.b.gB(n.a(p+s.d))
return H.lP(H.i0(H.i0(H.i0(H.i0(0,q),o),r),p))}}
P.a7.prototype={
gbn:function(a){return this.a},
gbq:function(a){return this.b},
gaE:function(a){return this.c},
gax:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.dx.prototype={
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
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bb.prototype={$ibb:1}
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
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.hN.prototype={
gj:function(a){return a.length}}
P.e9.prototype={
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
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gd2:function(a){return new P.dl(a,new W.eF(a))}}
P.bg.prototype={$ibg:1}
P.eg.prototype={
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
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.eX.prototype={}
P.eY.prototype={}
P.f4.prototype={}
P.f5.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.fo.prototype={}
P.fp.prototype={}
P.fM.prototype={
gj:function(a){return a.length}}
P.d9.prototype={
h:function(a,b){return P.aU(a.get(b))},
D:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aU(s.value[1]))}},
gay:function(a){var s=[]
this.D(a,new P.fN(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iU:1}
P.fN.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.da.prototype={
gj:function(a){return a.length}}
P.aC.prototype={}
P.dM.prototype={
gj:function(a){return a.length}}
P.eE.prototype={}
P.bC.prototype={
h9:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.nd(g))
return}if(t.l.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jd("Incorrect number or type of arguments"))},
$ibC:1}
P.e2.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=P.aU(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
A:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fd.prototype={}
P.fe.prototype={}
K.fI.prototype={
aR:function(a,b){return!0},
i:function(a){return"all"}}
K.dn.prototype={
aR:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)if(s[q].aR(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aI.prototype={
aR:function(a,b){return!this.dM(0,b)},
i:function(a){return"!["+this.bt(0)+"]"}}
K.S.prototype={
R:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.d("May not create a Set with zero characters."))
s=new H.R(t.c)
for(r=new H.bw(a,a.gj(a)),q=H.O(r).c;r.t();)s.k(0,q.a(r.d),!0)
p=P.ho(new H.aG(s),!0)
C.a.dL(p)
this.a=p},
aR:function(a,b){return C.a.H(this.a,b)},
i:function(a){return P.jr(this.a)}}
L.e3.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ie(this.a.F(0,b),[])
s.push(p)
return p},
fK:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.aR(0,a))return p}return null},
i:function(a){return this.b},
cR:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.H(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.aG(s.c)
s=J.aB(s==null?[]:s)
for(;s.t();){r=s.gI(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.H(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.n)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bt(0))}return m.charCodeAt(0)==0?m:m}}
L.ed.prototype={
i:function(a){var s=H.kK(this.b,"\n","\\n"),r=H.kK(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ee.prototype={
i:function(a){return this.b}}
L.ib.prototype={
F:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.e3(this,b,[])
s.k(0,b,r)}return r},
be:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.ee(a,P.M(s,s))
r.k(0,a,q)}return q},
dH:function(a){return this.hd(a)},
hd:function(a){var s=this
return P.mC(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dH(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.O(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a0.length
if(h!==0){if(!!a0.fixed$length)H.f(P.w("removeAt"))
if(0>=h)H.f(P.dS(0,null))
g=a0.splice(0,1)[0]}else{if(!r.t()){q=3
break}g=n.a(r.d)}b.push(g);++k
h=d==null
f=h?null:d.fK(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.jr(b)
throw H.c(P.d("Untokenizable string [state: "+H.t(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.w("removeRange"))
P.jp(0,i,b.length)
b.splice(0,i-0)
C.a.aM(a0,b)
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
if(h!=null){e=P.jr(c)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.ed(h,e,k)
l=h}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.H(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.lZ()
case 1:return P.m_(o)}}},t.s)},
i:function(a){var s,r,q=new P.be(""),p=this.d
if(p!=null)q.a=""+(p.cR()+"\n")
for(p=this.a,p=p.ghe(p),p=new H.cd(J.aB(p.a),p.b),s=H.O(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.t(r==null?null:r.cR())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.ie.prototype={
i:function(a){return this.b.b+": "+this.bt(0)}}
O.bq.prototype={
cn:function(a,b,c){this.b=b
this.c=a
this.d=c},
aV:function(a,b){return this.cn(a,null,b)},
b3:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
bK:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gW:function(a){var s=this.a
return new J.a3(s,s.length)},
A:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.b3([b])){s=this.a
r=s.length
s.push(b)
this.bK(r,[b])}},
aM:function(a,b){var s,r
if(this.b3(b)){s=this.a
r=s.length
C.a.aM(s,b)
this.bK(r,b)}},
k:function(a,b,c){var s,r=this,q=r.a
if(b>=q.length)return H.e(q,b)
s=q[b]
if(!J.P(s,c)&&r.b3([c])){if(b>=q.length)return H.e(q,b)
q[b]=c
q=r.d
if(q!=null)q.$2(b,[s])
r.bK(b,[c])}},
$ih:1}
O.ci.prototype={
gj:function(a){return this.a.length},
gn:function(){var s=this.b
return s==null?this.b=D.A():s},
aG:function(){var s=this.b
return s==null?null:s.v(null)},
gL:function(a){var s=this.a
if(s.length>0)return C.a.gc7(s)
else return V.a4()},
bp:function(a){this.a.push(a)
this.aG()},
aA:function(){var s=this.a
if(s.length>0){s.pop()
this.aG()}}}
E.fO.prototype={}
E.bs.prototype={
scp:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().K(0,s.gdC())
if(b!=null)b.gn().l(0,s.gdC())
s.az(new D.v("shape",r,b))}},
sdv:function(a){var s,r,q=this
if(!J.P(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gn().K(0,q.gdA())
if(a!=null)a.gn().l(0,q.gdA())
r=q.r
q.az(new D.v("mover",s,r))}},
ai:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.a
if(!J.P(o,q.x)){s=q.x
q.x=o
q.az(new D.v("matrix",s,o))}for(p=q.y.a,p=new J.a3(p,p.length),r=H.O(p).c;p.t();)r.a(p.d).ai(0,b)},
a2:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gL(q))
else o.push(p.G(0,q.gL(q)))
q.aG()
a.cg(r.f)
s=C.a.gc7(a.dy)
if(r.d!=null)if(s!=null)s.dF(a,r)
for(p=r.y.a,p=new J.a3(p,p.length),o=H.O(p).c;p.t();)o.a(p.d).a2(a)
a.cf()
q.aA()},
az:function(a){var s=this.z
return s==null?null:s.v(a)},
a0:function(){return this.az(null)},
dD:function(a){this.e=null
this.az(a)},
fW:function(){return this.dD(null)},
dB:function(a){return this.az(a)},
fV:function(){return this.dB(null)},
dz:function(a){return this.az(a)},
fS:function(){return this.dz(null)},
fR:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdw(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.ao()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a0()},
fU:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gdw(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z;(o==null?p.z=new D.ao():o).K(0,r)}this.a0()},
i:function(a){return"Unnamed entity"}}
E.bn.prototype={
i:function(a){return this.b}}
E.bA.prototype={
i:function(a){return this.b}}
E.eN.prototype={}
E.hP.prototype={
dS:function(a,b){var s=this
s.cy.gn().l(0,new E.hQ(s))
s.db.gn().l(0,new E.hR(s))
s.dx.gn().l(0,new E.hS(s))},
gh2:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gL(q).G(0,s.gL(s))
q=s}return q},
cg:function(a){var s=this.dy
return s.push(a==null?C.a.gc7(s):a)},
cf:function(){var s=this.dy
if(s.length>1)s.pop()},
cV:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.d("May not cache a shader with no name."))
s=this.fr
if(s.fC(0,r))throw H.c(P.d('Shader cache already contains a shader by the name "'+r+'".'))
s.k(0,r,a)}}
E.hQ.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.hR.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.hS.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.ec.prototype={
cw:function(a){this.dG()},
cv:function(){return this.cw(null)},
gfL:function(){var s,r=this,q=Date.now(),p=C.b.Y(P.jV(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Q(q,!1)
return s/p},
cN:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.c5(r*o)
r=s.clientHeight
r.toString
p=C.d.c5(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.ka(C.h,this.gh5())}},
dG:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.r.ed(s)
r=W.kz(new E.i8(this),t.H)
r.toString
C.r.fe(s,r)}},
h3:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cN()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Q(p,!1)
q.y=P.jV(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aG()
p=q.db
C.a.sj(p.a,0)
p.aG()
p=q.dx
C.a.sj(p.a,0)
p.aG()
p=q.dy
C.a.sj(p,0)
p.push(null)
m.a2(q)}}catch(o){s=H.fE(o)
r=H.jK(o)
P.jP("Error: "+H.t(s))
P.jP("Stack: "+H.t(r))
throw H.c(s)}}}
E.i8.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.h3()}},
$S:25}
Z.eA.prototype={}
Z.bT.prototype={
P:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fE(q)
r=P.d('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.t(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.eB.prototype={}
Z.bo.prototype={
aw:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
P:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.e(r,s)
r[s].P(a)}},
aD:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a2:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.e(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cp(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(m,", ")+"\nAttrs:   "+C.a.p(o,", ")}}
Z.c4.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cp(this.c)+"'")+"]"}}
Z.aP.prototype={
gcq:function(a){var s=this.a,r=(s&$.ak().a)!==0?3:0
if((s&$.aX().a)!==0)r+=3
if((s&$.aW().a)!==0)r+=3
if((s&$.bl().a)!==0)r+=2
if((s&$.aY().a)!==0)r+=3
if((s&$.d4().a)!==0)r+=3
if((s&$.d5().a)!==0)r+=4
if((s&$.bQ().a)!==0)++r
return(s&$.aV().a)!==0?r+4:r},
fw:function(a){var s,r=$.ak(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aX()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aY()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aV()
if((q&r.a)!==0)if(s===a)return r
return $.l1()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aP))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ak().a)!==0)s.push("Pos")
if((r&$.aX().a)!==0)s.push("Norm")
if((r&$.aW().a)!==0)s.push("Binm")
if((r&$.bl().a)!==0)s.push("Txt2D")
if((r&$.aY().a)!==0)s.push("TxtCube")
if((r&$.d4().a)!==0)s.push("Clr3")
if((r&$.d5().a)!==0)s.push("Clr4")
if((r&$.bQ().a)!==0)s.push("Weight")
if((r&$.aV().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.fQ.prototype={}
D.ao.prototype={
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
return!0}if(!o)C.a.D(P.ho(p,!0),new D.h9(s))
r=q.b
if(r!=null){q.b=[]
C.a.D(r,new D.ha(s))}return!0},
fI:function(){return this.v(null)},
aB:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.v(s)}}}}
D.h9.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.ha.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.L.prototype={}
D.ap.prototype={}
D.aq.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.t(this.d)+" => "+H.t(this.e)}}
X.bU.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bU))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dv.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hk.prototype={}
X.cb.prototype={}
X.hq.prototype={
b0:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.N(o.a+b.a,o.b+b.b)
o=q.a.gaN()
s=$.a_
if(s==null)s=$.a_=new V.N(0,0)
r=q.x
q.z=new P.Q(p,!1)
q.x=n
return new X.bx(a,s,r,o,n)},
ce:function(a,b){this.r=a.a
return!1},
ba:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
b9:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.b0(a,b))
return!0},
h_:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaN()
r=this.x
Date.now()
q.v(new X.by(new V.W(a.a,a.b),s,r))
return!0},
eN:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.v(new X.cb(c,q.a.gaN(),b))
q.y=new P.Q(s,!1)
s=$.a_
q.x=s==null?$.a_=new V.N(0,0):s}}
X.Y.prototype={
m:function(a,b){var s=this
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
X.bx.prototype={}
X.hK.prototype={
bA:function(a,b,c){var s=this,r=new P.Q(Date.now(),!1),q=s.a.gaN(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bx(a,p,o,q,b)},
ce:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.v(this.bA(a,b,!0))
return!0},
ba:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.v(r.bA(a,b,!0))
return!0},
b9:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.bA(a,b,!1))
return!0},
h0:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaN()
Date.now()
r.v(new X.by(new V.W(a.a,a.b),s,b))
return!0},
gd6:function(){var s=this.b
return s==null?this.b=D.A():s},
gck:function(){var s=this.c
return s==null?this.c=D.A():s},
gdu:function(){var s=this.d
return s==null?this.d=D.A():s}}
X.by.prototype={}
X.dR.prototype={}
X.cv.prototype={}
X.ic.prototype={
b0:function(a,b){var s,r,q,p,o=this,n=new P.Q(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a_
if(r==null){r=new V.N(0,0)
$.a_=r
s=r}else s=r}r=o.a.gaN()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cv(q,p,r,s)},
fZ:function(a){var s=this.b
if(s==null)return!1
s.v(this.b0(a,!0))
return!0},
fX:function(a){var s=this.c
if(s==null)return!1
s.v(this.b0(a,!0))
return!0},
fY:function(a){var s=this.d
if(s==null)return!1
s.v(this.b0(a,!1))
return!0}}
X.ex.prototype={
gaQ:function(a){var s=this.b
return s==null?this.b=new X.hk(new X.Y(!1,!1,!1),P.jX(t.S)):s},
ga_:function(){var s,r=this.c
if(r==null){r=$.a_
if(r==null){r=$.a_=new V.N(0,0)
s=r}else s=r
r=this.c=new X.hK(this,r,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return r},
gac:function(){var s=this.d
if(s==null){s=$.a_
if(s==null)s=$.a_=new V.N(0,0)
s=this.d=new X.hq(this,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return s},
gaS:function(){var s,r=this.e
if(r==null){r=$.a_
if(r==null){r=$.a_=new V.N(0,0)
s=r}else s=r
r=this.e=new X.ic(this,r,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return r},
gaN:function(){var s=this.a
return V.hO(0,0,C.f.gd3(s).c,C.f.gd3(s).d)},
cE:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dv(p,new X.Y(s,r,q))},
aL:function(a){var s,r,q=this.gaQ(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.Y(p,s,r)},
bO:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaQ(this)
r=a.altKey
q=a.shiftKey
p.c=new X.Y(s,r===!0,q===!0)},
au:function(a){var s,r,q,p
if(a==null){s=$.a_
return s==null?$.a_=new V.N(0,0):s}s=this.a.getBoundingClientRect()
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
b4:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.W(r,s)},
bL:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
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
s.push(new V.N(n-m,l-k))}return s},
aq:function(a){var s,r,q,p
if(a==null)return new X.bU(0,new X.Y(!1,!1,!1))
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
return new X.bU(s,new X.Y(r,q,p))},
bB:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eH:function(a){return this.f=!0},
ev:function(a){return this.f=!1},
eB:function(a){if(this.f&&this.bB(a))a.preventDefault()},
eL:function(a){var s,r,q=this
if(!q.f)return
s=q.cE(a)
r=q.gaQ(q)
r.c=s.b
r.d.l(0,s.a)},
eJ:function(a){var s,r,q=this
if(!q.f)return
s=q.cE(a)
r=q.gaQ(q)
r.c=s.b
r.d.K(0,s.a)},
eP:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aL(a)
if(p.x){s=p.aq(a)
r=p.b4(a)
if(p.gac().ce(s,r))a.preventDefault()
return}s=p.aq(a)
q=p.au(a)
if(p.ga_().ce(s,q))a.preventDefault()},
eT:function(a){var s,r,q,p=this
p.aL(a)
s=p.aq(a)
if(p.x){r=p.b4(a)
if(p.gac().ba(s,r))a.preventDefault()
return}q=p.au(a)
if(p.ga_().ba(s,q))a.preventDefault()},
eF:function(a){var s,r,q,p=this
if(!p.bB(a)){p.aL(a)
s=p.aq(a)
if(p.x){r=p.b4(a)
if(p.gac().ba(s,r))a.preventDefault()
return}q=p.au(a)
if(p.ga_().ba(s,q))a.preventDefault()}},
eR:function(a){var s,r,q,p=this
p.aL(a)
s=p.aq(a)
if(p.x){r=p.b4(a)
if(p.gac().b9(s,r))a.preventDefault()
return}q=p.au(a)
if(p.ga_().b9(s,q))a.preventDefault()},
eD:function(a){var s,r,q,p=this
if(!p.bB(a)){p.aL(a)
s=p.aq(a)
if(p.x){r=p.b4(a)
if(p.gac().b9(s,r))a.preventDefault()
return}q=p.au(a)
if(p.ga_().b9(s,q))a.preventDefault()}},
eV:function(a){var s,r,q=this
q.aL(a)
s=new V.W(C.q.gfG(a),C.q.gfH(a)).G(0,q.Q)
if(q.x){if(q.gac().h_(s))a.preventDefault()
return}r=q.au(a)
if(q.ga_().h0(s,r))a.preventDefault()},
eX:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aq(q.y)
r=q.au(q.y)
q.gac().eN(s,r,p)}},
fa:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bO(a)
s=r.bL(a)
if(r.gaS().fZ(s))a.preventDefault()},
f6:function(a){var s
this.bO(a)
s=this.bL(a)
if(this.gaS().fX(s))a.preventDefault()},
f8:function(a){var s
this.bO(a)
s=this.bL(a)
if(this.gaS().fY(s))a.preventDefault()}}
D.bY.prototype={
ap:function(a){var s=this.r
return s==null?null:s.v(a)},
dU:function(){return this.ap(null)},
$ic8:1}
D.c9.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.A():s},
gdr:function(){var s=this.z
return s==null?this.z=D.A():s},
ap:function(a){var s=this.y
return s==null?null:s.v(a)},
cK:function(a){var s=this.z
return s==null?null:s.v(a)},
eM:function(){return this.cK(null)},
eZ:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.n)(a),++r)if(this.e8(a[r]))return!1
return!0},
em:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcJ(),q=this.f,p=0;p<b.length;b.length===s||(0,H.n)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.ao()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ap(new D.ap())},
f2:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcJ(),q=this.f,p=0;p<b.length;b.length===s||(0,H.n)(b),++p){o=b[p]
C.a.K(q,o)
n=o.r;(n==null?o.r=new D.ao():n).K(0,r)}this.ap(new D.aq())},
e8:function(a){var s=C.a.H(this.f,a)
return s}}
V.I.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.I))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aD.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aD))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
q:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.h7.prototype={}
V.ch.prototype={
a3:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ch))return!1
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
i:function(a){var s,r,q,p,o=this,n=V.bO([o.a,o.d,o.r],3,0),m=V.bO([o.b,o.e,o.x],3,0),l=V.bO([o.c,o.f,o.y],3,0),k=n.length
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
V.as.prototype={
a3:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
c6:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.y().toString
if(Math.abs(b3-0)<1e-9)return V.a4()
s=1/b3
r=-l
q=-a2
return V.at((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
G:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.at(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
br:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.x(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bf:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.V(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.as))return!1
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
i:function(a){return this.q()},
w:function(a){var s,r,q,p,o,n=this,m=V.bO([n.a,n.e,n.y,n.cx],3,0),l=V.bO([n.b,n.f,n.z,n.cy],3,0),k=V.bO([n.c,n.r,n.Q,n.db],3,0),j=V.bO([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
q:function(){return this.w("")}}
V.N.prototype={
a5:function(a){return new V.W(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"},
q:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.V.prototype={
aY:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
q:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aK.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aK))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
q:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.dT.prototype={
gao:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dT))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.W.prototype={
c8:function(a){return Math.sqrt(this.Z(this))},
Z:function(a){return this.a*a.a+this.b*a.b},
G:function(a,b){return new V.W(this.a*b,this.b*b)},
a6:function(a,b){var s
$.y().toString
if(Math.abs(b-0)<1e-9){s=$.bh
return s==null?$.bh=new V.W(0,0):s}return new V.W(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.x.prototype={
c8:function(a){return Math.sqrt(this.Z(this))},
Z:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c9:function(a,b){return new V.x(V.jM(this.a,a.a,b),V.jM(this.b,a.b,b),V.jM(this.c,a.c,b))},
E:function(){var s=this,r=Math.sqrt(s.Z(s))
if(r===1)return s
return s.a6(0,r)},
b7:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.x(s*r-q*p,q*o-n*r,n*p-s*o)},
U:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
aU:function(a){return new V.x(-this.a,-this.b,-this.c)},
a6:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.ey()
return new V.x(this.a/b,this.b/b,this.c/b)},
dq:function(){$.y().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.x))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
q:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
U.fT.prototype={
bu:function(a){var s=V.nB(a,this.c,this.b)
return s},
gn:function(){var s=this.y
return s==null?this.y=D.A():s},
J:function(a){var s=this.y
return s==null?null:s.v(a)},
scl:function(a,b){},
scb:function(a){var s,r=this,q=r.b
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bu(s)}r.J(new D.v("maximumLocation",q,r.b))}},
scd:function(a){var s,r=this,q=r.c
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bu(s)}r.J(new D.v("minimumLocation",q,r.c))}},
sa4:function(a,b){var s,r=this
b=r.bu(b)
s=r.d
$.y().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.J(new D.v("location",s,b))}},
scc:function(a){var s,r,q=this,p=q.e
$.y().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.J(new D.v("maximumVelocity",p,a))}},
sT:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.J(new D.v("velocity",r,a))}},
sbW:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.y().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.J(new D.v("dampening",s,a))}},
ai:function(a,b){var s,r,q,p=this,o=p.f
$.y().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa4(0,p.d+s*b)
o=p.x
$.y().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sT(s)}}}
U.br.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.A():s},
sL:function(a,b){var s,r,q=this
if(b==null)b=V.a4()
if(!q.a.m(0,b)){s=q.a
q.a=b
r=q.b
if(r!=null)r.v(new D.v("matrix",s,b))}},
aT:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.br))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.bt.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.A():s},
J:function(a){var s=this.e
return s==null?null:s.v(a)},
a1:function(){return this.J(null)},
dW:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaH(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null){o=p.gn()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.J(new D.ap())},
f0:function(a,b){var s,r,q,p
for(s=b.length,r=this.gaH(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
if(p!=null)p.gn().K(0,r)}this.J(new D.aq())},
aT:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a3(o,o.length),n=H.O(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aT(0,b,c)
s=s==null?q:q.G(0,s)}}p.f=s==null?V.a4():s
o=p.e
if(o!=null)o.aB(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bt))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(p>=q.length)return H.e(q,p)
if(!J.P(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.cx.prototype={
gn:function(){var s=this.cy
return s==null?this.cy=D.A():s},
J:function(a){var s=this.cy
return s==null?null:s.v(a)},
a1:function(){return this.J(null)},
b5:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga_().gd6().l(0,s.gbC())
a.ga_().gdu().l(0,s.gbE())
a.ga_().gck().l(0,s.gbG())
return!0},
bD:function(a){var s=this,r=s.c,q=s.a
if(!r.m(0,q==null?null:q.gaQ(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bF:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a5(a.d)
if(s.Z(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa4(0,-a.y.a5(r).G(0,2).a6(0,s.gao()).a*2.5+p.z)
q.sT(0)
p.Q=a.z.a5(r).G(0,2).a6(0,s.gao())
p.a1()},
bH:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.Z(s)>0.0001){r.b.sT(r.Q.a*10*2.5)
r.a1()}},
aT:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.ai(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.at(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$iZ:1}
U.cy.prototype={
gn:function(){var s=this.fx
return s==null?this.fx=D.A():s},
J:function(a){var s=this.fx
return s==null?null:s.v(a)},
a1:function(){return this.J(null)},
b5:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga_().gd6().l(0,q.gbC())
a.ga_().gdu().l(0,q.gbE())
a.ga_().gck().l(0,q.gbG())
s=a.gac()
r=s.f
s=r==null?s.f=D.A():r
s.l(0,q.gef())
s=a.gac()
r=s.d
s=r==null?s.d=D.A():r
s.l(0,q.geh())
s=a.gaS()
r=s.b
s=r==null?s.b=D.A():r
s.l(0,q.gfp())
s=a.gaS()
r=s.d
s=r==null?s.d=D.A():r
s.l(0,q.gfn())
s=a.gaS()
r=s.c
s=r==null?s.c=D.A():r
s.l(0,q.gfl())
return!0},
aJ:function(a){return new V.W(a.a,a.b)},
bD:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bF:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a5(a.d)
if(s.Z(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aJ(a.y.a5(r).G(0,2).a6(0,s.gao()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sT(0)
p.sT(0)
n.dx=n.aJ(a.z.a5(r).G(0,2).a6(0,s.gao()))
n.a1()},
bH:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.Z(s)>0.0001){r.c.sT(-r.dx.a*10*2.5)
r.b.sT(-r.dx.b*10*2.5)
r.a1()}},
eg:function(a){var s=this
if(t.e.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ei:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.aJ(a.y.a5(r).G(0,2).a6(0,s.gao()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sT(0)
p.sT(0)
n.dx=n.aJ(a.z.a5(r).G(0,2).a6(0,s.gao()))
n.a1()},
fq:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fo:function(a){var s,r,q,p,o,n=this
t.t.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a5(a.d)
if(s.Z(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aJ(a.y.a5(r).G(0,2).a6(0,s.gao()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sT(0)
p.sT(0)
n.dx=n.aJ(a.z.a5(r).G(0,2).a6(0,s.gao()))
n.a1()},
fm:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.Z(s)>0.0001){r.c.sT(-r.dx.a*10*2.5)
r.b.sT(-r.dx.b*10*2.5)
r.a1()}},
aT:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ai(0,s)
n=p.b
n.ai(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
p.fr=V.at(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1).G(0,V.jm(o.d))}return p.fr},
$iZ:1}
U.cz.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.A():s},
J:function(a){var s=this.r
return s==null?null:s.v(a)},
b5:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga_()
r=s.e
s=r==null?s.e=D.A():r
r=this.gej()
s.l(0,r)
s=a.gac()
q=s.e;(q==null?s.e=D.A():q).l(0,r)
return!0},
ek:function(a){var s=this,r=s.b,q=s.a
if(!r.m(0,q==null?null:q.gaQ(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.J(new D.v("zoom",r,q))}},
aT:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.lv(s,s,s)}return r.f},
$iZ:1}
M.bW.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.A():s},
N:function(a){var s=this.r
return s==null?null:s.v(a)},
b_:function(){return this.N(null)},
sb6:function(a){var s,r,q=this
if(a==null)a=new X.hh()
s=q.b
if(s!==a){if(s!=null)s.gn().K(0,q.gM())
r=q.b
q.b=a
a.gn().l(0,q.gM())
q.N(new D.v("camera",r,q.b))}},
sbb:function(a,b){var s,r,q=this
if(b==null)b=X.hf(null)
s=q.c
if(s!==b){if(s!=null)s.gn().K(0,q.gM())
r=q.c
q.c=b
b.gn().l(0,q.gM())
q.N(new D.v("target",r,q.c))}},
sbc:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().K(0,r.gM())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gM())
r.N(new D.v("technique",s,r.d))}},
a2:function(a){var s,r=this
a.cg(r.d)
s=r.c
if(s!=null)s.P(a)
s=r.b
if(s!=null)s.P(a)
s=r.e
s.ai(0,a)
s.a2(a)
s=r.b
if(s!=null)s.aD(a)
a.cf()},
$idU:1}
M.c1.prototype={
N:function(a){var s=this.y
return s==null?null:s.v(a)},
b_:function(){return this.N(null)},
ex:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gM(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.ao()
n=o.a;(n==null?o.a=[]:n).push(r)}this.N(new D.ap())},
ez:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gM(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q]
o=p.z;(o==null?p.z=new D.ao():o).K(0,r)}this.N(new D.aq())},
sb6:function(a){var s,r,q=this
if(a==null)a=X.jo(null)
s=q.b
if(s!==a){if(s!=null)s.gn().K(0,q.gM())
r=q.b
q.b=a
a.gn().l(0,q.gM())
q.N(new D.v("camera",r,q.b))}},
sbb:function(a,b){var s,r,q=this
if(b==null)b=X.hf(null)
s=q.c
if(s!==b){if(s!=null)s.gn().K(0,q.gM())
r=q.c
q.c=b
b.gn().l(0,q.gM())
q.N(new D.v("target",r,q.c))}},
sbc:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().K(0,r.gM())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gM())
r.N(new D.v("technique",s,r.d))}},
gn:function(){var s=this.y
return s==null?this.y=D.A():s},
a2:function(a){var s,r,q,p=this
a.cg(p.d)
s=p.c
if(s!=null)s.P(a)
s=p.b
if(s!=null)s.P(a)
s=p.d
if(s!=null)s.ai(0,a)
for(s=p.e.a,r=new J.a3(s,s.length),q=H.O(r).c;r.t();)q.a(r.d).ai(0,a)
for(s=new J.a3(s,s.length),r=H.O(s).c;s.t();)r.a(s.d).a2(a)
if(p.b!=null){a.cy.aA()
a.db.aA()}a.cf()},
$idU:1}
M.e5.prototype={
gn:function(){var s=this.db
return s==null?this.db=D.A():s},
N:function(a){var s=this.db
return s==null?null:s.v(a)},
b_:function(){return this.N(null)},
eo:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gM(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q){p=b[q].gn()
o=p.a;(o==null?p.a=[]:o).push(r)}this.N(new D.ap())},
f4:function(a,b){var s,r,q
for(s=b.length,r=this.gM(),q=0;q<b.length;b.length===s||(0,H.n)(b),++q)b[q].gn().K(0,r)
this.N(new D.aq())},
a2:function(a){var s,r,q,p=this,o=p.z
if(o!=null)o.sdE(0,p.x)
for(o=p.Q.a,s=new J.a3(o,o.length),r=H.O(s).c;s.t();){q=r.a(s.d)
q.sbb(0,p.z)
q.sb6(p.f)
q.a2(a)}s=p.z
if(s!=null)s.sdE(0,p.y)
for(o=new J.a3(o,o.length),s=H.O(o).c;o.t();){r=s.a(o.d)
r.sbb(0,p.z)
r.sb6(p.r)
r.a2(a)}}}
A.fK.prototype={}
A.fL.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fJ:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
d5:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a9.prototype={
gaj:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
m:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a9))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.ce.prototype={
dR:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.be(""),d0=c8.fr
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
A.mR(c8,c9)
A.mT(c8,c9)
A.mS(c8,c9)
A.mV(c8,c9)
A.mW(c8,c9)
A.mU(c8,c9)
A.mX(c8,c9)
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
c3.dl(0,s.charCodeAt(0)==0?s:s,A.mQ(c8))
c3.y=c3.gaa(c3).h(0,"posAttr")
c3.Q=c3.gaa(c3).h(0,"normAttr")
c3.z=c3.gaa(c3).h(0,"binmAttr")
c3.ch=c3.gaa(c3).h(0,"txt2DAttr")
c3.cx=c3.gaa(c3).h(0,"txtCubeAttr")
c3.cy=c3.gaa(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gu().C(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gu().C(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gu().C(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gu().C(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gu().C(0,"viewMat"))
if(c8.x1)c3.go=t.Q.a(c3.gu().C(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gu().C(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gu().C(0,"colorMat"))
c3.k3=[]
s=c8.aP
if(s>0){c3.k2=t.v.a(c3.gu().C(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.d(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.d(c6+q+c7))
r.push(d0.a(l))}}d0=c8.a
if(d0.a)c3.k4=t.g.a(c3.gu().C(0,"emissionClr"))
if(d0.c)c3.r2=t.a.a(c3.gu().C(0,"emissionTxt"))
d0=c8.b
if(d0.a)c3.rx=t.g.a(c3.gu().C(0,"ambientClr"))
if(d0.c)c3.x1=t.a.a(c3.gu().C(0,"ambientTxt"))
d0=c8.c
if(d0.a)c3.x2=t.g.a(c3.gu().C(0,"diffuseClr"))
if(d0.c)c3.y2=t.a.a(c3.gu().C(0,"diffuseTxt"))
d0=c8.d
if(d0.a)c3.aP=t.g.a(c3.gu().C(0,"invDiffuseClr"))
if(d0.c)c3.bl=t.a.a(c3.gu().C(0,"invDiffuseTxt"))
d0=c8.e
s=d0.a
if(!s)r=d0.c
else r=!0
if(r){c3.da=t.n.a(c3.gu().C(0,"shininess"))
if(s)c3.d8=t.g.a(c3.gu().C(0,"specularClr"))
if(d0.c)c3.d9=t.a.a(c3.gu().C(0,"specularTxt"))}if(c8.f.c)c3.dc=t.a.a(c3.gu().C(0,"bumpTxt"))
if(c8.db){d0=t.a
c3.dd=d0.a(c3.gu().C(0,"envSampler"))
s=c8.r
if(s.a)c3.de=t.g.a(c3.gu().C(0,"reflectClr"))
if(s.c)c3.df=d0.a(c3.gu().C(0,"reflectTxt"))
s=c8.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c3.dg=t.n.a(c3.gu().C(0,"refraction"))
if(r)c3.dh=t.g.a(c3.gu().C(0,"refractClr"))
if(s.c)c3.di=d0.a(c3.gu().C(0,"refractTxt"))}}d0=c8.y
if(d0.a)c3.dj=t.n.a(c3.gu().C(0,"alpha"))
if(d0.c)c3.dk=t.a.a(c3.gu().C(0,"alphaTxt"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.bY=P.M(r,t.W)
c3.bZ=P.M(r,t.J)
for(r=t.v,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.n)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.el(l,d,c,a3,a2,a1))}c3.bZ.k(0,i,g)
o=c3.bY
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.c_=P.M(r,t.W)
c3.c0=P.M(r,t.L)
for(r=t.v,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.n)(d0),++k){j=d0[k]
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
g.push(new A.em(a6,a5,a4,l,d,a7))}c3.c0.k(0,i,g)
o=c3.c_
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.c1=P.M(r,t.W)
c3.c2=P.M(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.n)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.ep(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.c2.k(0,i,g)
a8=c3.c1
m=c3.r
if(m==null)H.f(P.d(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.d(c6+a9+c7))
a8.k(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.c3=P.M(s,t.W)
c3.c4=P.M(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.n)(c8),++k){j=c8[k]
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
g.push(new A.es(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.c4.k(0,i,g)
f=c3.c3
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
f.k(0,i,s.a(l))}}}},
a9:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.co(b)}}
A.aZ.prototype={
i:function(a){return"barLight"+this.a}}
A.b1.prototype={
i:function(a){return"dirLight"+this.a}}
A.bc.prototype={
i:function(a){return"pointLight"+this.a}}
A.bd.prototype={
i:function(a){return"spotLight"+this.a}}
A.hu.prototype={
i:function(a){return this.bk}}
A.el.prototype={}
A.em.prototype={}
A.ep.prototype={}
A.es.prototype={}
A.bD.prototype={
dl:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cF(b,35633)
r=n.cF(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gar(),s)
q.attachShader(n.gar(),r)
q.linkProgram(n.gar())
if(!H.kt(q.getProgramParameter(n.gar(),35714))){o=q.getProgramInfoLog(n.gar())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.d("Failed to link shader: "+o))}n.fh()
n.fj()},
gaa:function(a){var s=this.f
if(s==null)throw H.c(P.d("Must initialize the shader prior to getting the attributes."))
return s},
gu:function(){var s=this.r
if(s==null)throw H.c(P.d(u.C))
return s},
gar:function(){var s=this.e
if(s==null)throw H.c(P.d(u.F))
return s},
P:function(a){a.a.useProgram(this.e)
this.gaa(this).fJ()},
cF:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.kt(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.d('Error compiling shader "'+H.t(q)+'": '+s))}return q},
fh:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.iV(l.getProgramParameter(o.gar(),35721))
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
m.push(new A.fK(l,q,p))}o.f=new A.fL(m)},
fj:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.iV(j.getProgramParameter(m.gar(),35718))
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
k.push(m.fF(o,n,q,p))}m.r=new A.ip(k)},
aI:function(a,b,c){var s=this.a
if(a===1)return new A.cw(s,b,c)
else return A.jt(s,this.e,b,a,c)},
ea:function(a,b,c){var s=this.a
if(a===1)return new A.eq(s,b,c)
else return A.jt(s,this.e,b,a,c)},
eb:function(a,b,c){var s=this.a
if(a===1)return new A.er(s,b,c)
else return A.jt(s,this.e,b,a,c)},
bi:function(a,b){return new P.eQ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
fF:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aI(b,c,d)
case 5121:return s.aI(b,c,d)
case 5122:return s.aI(b,c,d)
case 5123:return s.aI(b,c,d)
case 5124:return s.aI(b,c,d)
case 5125:return s.aI(b,c,d)
case 5126:return new A.ei(s.a,c,d)
case 35664:return new A.ik(s.a,c,d)
case 35665:return new A.ej(s.a,c,d)
case 35666:return new A.ek(s.a,c,d)
case 35667:return new A.il(s.a,c,d)
case 35668:return new A.im(s.a,c,d)
case 35669:return new A.io(s.a,c,d)
case 35674:return new A.iq(s.a,c,d)
case 35675:return new A.en(s.a,c,d)
case 35676:return new A.eo(s.a,c,d)
case 35678:return s.ea(b,c,d)
case 35680:return s.eb(b,c,d)
case 35670:throw H.c(s.bi("BOOL",c))
case 35671:throw H.c(s.bi("BOOL_VEC2",c))
case 35672:throw H.c(s.bi("BOOL_VEC3",c))
case 35673:throw H.c(s.bi("BOOL_VEC4",c))
default:throw H.c(P.d("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.ct.prototype={}
A.ii.prototype={}
A.ip.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
C:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.d("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.q()},
q:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.n)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cw.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.il.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.im.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.io.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.ij.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.ei.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.ik.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.ej.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.ek.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.iq.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.en.prototype={
a7:function(a){var s=new Float32Array(H.cY(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eo.prototype={
a7:function(a){var s=new Float32Array(H.cY(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eq.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.er.prototype={
co:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.iU.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c9(q.b,b).c9(q.d.c9(q.c,b),c)
q=new V.V(p.a,p.b,p.c)
if(!J.P(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a0()}a.sbd(p.E())
q=1-b
s=1-c
s=new V.aK(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.P(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a0()}},
$S:32}
F.ag.prototype={
aF:function(a,b,c){var s=this,r=a.a
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
e4:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.ey()
if(n!=null)q=q.U(0,n)
if(s!=null)q=q.U(0,s)
if(r!=null)q=q.U(0,r)
if(q.dq())return p
return q.E()},
e6:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aY(0,n)
q=new V.x(o.a,o.b,o.c).E()
o=r.aY(0,n)
return q.b7(new V.x(o.a,o.b,o.c).E()).E()},
bT:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.e4()
if(s==null){s=q.e6()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
e3:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.ey()
if(n!=null)q=q.U(0,n)
if(s!=null)q=q.U(0,s)
if(r!=null)q=q.U(0,r)
if(q.dq())return p
return q.E()},
e5:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.y().toString
if(Math.abs(p-0)<1e-9){j=b.aY(0,e)
o=new V.x(j.a,j.b,j.c).E()
if(q.a-r.a<0)o=o.aU(0)}else{n=(j-s.b)/p
j=b.aY(0,e)
j=new V.V(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aY(0,h)
o=new V.x(j.a,j.b,j.c).E()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aU(0)}m=l.d
if(m!=null){m=m.E()
o=m.b7(o).E().b7(m).E()}return o},
bR:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.e3()
if(s==null){s=q.e5()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.q()},
w:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gam(p)
p=a+C.c.ae(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gam(o)
p=p+C.c.ae(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gam(o)
s=p+C.c.ae(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.q()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.q()
return s+((p==null?"-":p)+"}")},
q:function(){return this.w("")}}
F.hl.prototype={
dQ:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.d("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.d("May not create a line with vertices attached to different shapes."))
s.a=a
a.gan(a).b.push(s)
s.b=b
b.gan(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gan(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.q()},
w:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gam(s)
s=a+C.c.ae(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gam(r)
return s+C.c.ae(C.b.i(r==null?-1:r),0)},
q:function(){return this.w("")}}
F.hM.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.q()},
w:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gam(s)
return a+C.c.ae(C.b.i(s),0)},
q:function(){return this.w("")}}
F.hU.prototype={
gX:function(){var s=this.a
return s==null?this.a=new F.p(this,[]):s},
gbo:function(a){var s=this.b
return s==null?this.b=new F.bE(this,[]):s},
gan:function(a){var s=this.c
return s==null?this.c=new F.cs(this,[]):s},
gV:function(){var s=this.d
return s==null?this.d=new F.cr(this,[]):s},
gn:function(){var s=this.e
return s==null?this.e=D.A():s},
fP:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gX().S()
s=d.gX().c.length
for(b=a.gX().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
o.l(0,p.fE())}d.gX().S()
for(b=a.gbo(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bE(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,j)
o=new F.hM()
if(j.a==null)H.f(P.d("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.iC([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bE(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.v(c)}}}for(b=a.gan(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cs(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,g)
new F.hl().dQ(h,g)}for(b=a.gV().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.n)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).S()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cr(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,g)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,e)
new F.ag().aF(h,g,e)}b=d.e
if(b!=null)b.aB(0)},
av:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gV().av()||!1
if(!r.gX().av())s=!1
q=r.e
if(q!=null)q.aB(0)
return s},
d0:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gX().c.length,c=$.ak(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.aX().a)!==0)++a
if((b&$.aW().a)!==0)++a
if((b&$.bl().a)!==0)++a
if((b&$.aY().a)!==0)++a
if((b&$.d4().a)!==0)++a
if((b&$.d5().a)!==0)++a
if((b&$.bQ().a)!==0)++a
if((b&$.aV().a)!==0)++a
s=a1.gcq(a1)
r=P.hn(d*s,0,!1)
e.a=0
q=P.ls(a,new F.hV(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.cY(r)),35044)
c.bindBuffer(f,g)
p=new Z.bo(new Z.eA(f,b),[],q,a1)
if(h.gbo(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.bE(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).S()}b=b.e}o.push(b==null?0:b);++n}k=Z.jv(c,34963,o)
p.b.push(new Z.c4(0,o.length,k))}if(h.gan(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.cs(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).S()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).S()}b=b.e}o.push(b==null?0:b);++n}k=Z.jv(c,34963,o)
p.b.push(new Z.c4(1,o.length,k))}if(h.gV().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.cr(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).S()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).S()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).S()}b=b.e}o.push(b==null?0:b);++n}k=Z.jv(c,34963,o)
p.b.push(new Z.c4(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.gX().c.length!==0){q.push("Vertices:")
q.push(s.gX().w(r))}if(s.gbo(s).b.length!==0){q.push("Points:")
q.push(s.gbo(s).w(r))}if(s.gan(s).b.length!==0){q.push("Lines:")
q.push(s.gan(s).w(r))}if(s.gV().b.length!==0){q.push("Faces:")
q.push(s.gV().w(r))}return C.a.p(q,"\n")},
a0:function(){var s=this.e
return s==null?null:s.v(null)}}
F.hV.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fw(a),f=g.gcq(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.p(o,[]):m).c
if(n>=m.length)return H.e(m,n)
l=m[n].fO(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.e(r,k)
r[k]=i;++k}}e.a+=f
return new Z.bT(g,f,d*4,h.d)},
$S:33}
F.cr.prototype={
fu:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.p(s,[]):o).l(0,l)
o=s.a;(o==null?s.a=new F.p(s,[]):o).l(0,q)
o=s.a;(o==null?s.a=new F.p(s,[]):o).l(0,p)
n=new F.ag()
n.aF(l,q,p)
m.push(n)}return m},
fv:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.p(s,[]):l).l(0,k)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,h)
f=new F.ag()
f.aF(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,k)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
f=new F.ag()
f.aF(k,h,g)
e.push(f)}else{(l==null?s.a=new F.p(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
f=new F.ag()
f.aF(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,k)
f=new F.ag()
f.aF(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gj:function(a){return this.b.length},
av:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bT())q=!1
return q},
bS:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.n)(s),++p)if(!s[p].bR())q=!1
return q},
i:function(a){return this.q()},
w:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].w(a))
return C.a.p(p,"\n")},
q:function(){return this.w("")}}
F.cs.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.q()},
w:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.e(q,s)
r.push(q[s].w(a+(""+s+". ")))}return C.a.p(r,"\n")},
q:function(){return this.w("")}}
F.bE.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.q()},
w:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].w(a))
return C.a.p(p,"\n")},
q:function(){return this.w("")}}
F.cA.prototype={
bV:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.ix(s.cx,p,m,r,q,o,n,a,l)},
fE:function(){return this.bV(null)},
gan:function(a){var s=this.c
return s==null?this.c=new F.iB([],[]):s},
gV:function(){var s=this.d
return s==null?this.d=new F.iy([],[],[]):s},
gam:function(a){var s=this.a
if(s!=null)s.gX().S()
return this.e},
sbd:function(a){var s
if(!J.P(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a0()}},
fO:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.ak())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.m(0,$.aX())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.m(0,$.aW())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.m(0,$.bl())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.m(0,$.aY())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.m(0,$.d4())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.m(0,$.d5())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.m(0,$.bQ()))return[o.ch]
else if(a.m(0,$.aV())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
bT:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.ey()
p.gV().D(0,new F.iE(o))
p.r=o.a.E()
if(r){s.a0()
o=s.e
if(o!=null)o.aB(0)}return!0},
bR:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.ey()
p.gV().D(0,new F.iD(o))
p.x=o.a.E()
if(r){s.a0()
o=s.e
if(o!=null)o.aB(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.q()},
w:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.c.ae(C.b.i(q.e),0))
s=q.f
s=s==null?p:s.q()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.q()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.q()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.q()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.q()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.q()
n.push(s==null?o:s)
n.push(V.u(q.ch,3,0))
s=q.cx
s=s==null?p:s.q()
n.push(s==null?o:s)
r=C.a.p(n,", ")
return a+"{"+r+"}"},
q:function(){return this.w("")}}
F.iE.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.U(0,r)}},
$S:7}
F.iD.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.U(0,r)}},
$S:7}
F.p.prototype={
S:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.d("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a0()
return!0},
bj:function(a,b,c,d,e,f){var s=F.ix(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
av:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bT()
return!0},
bS:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)s[q].bR()
return!0},
fA:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.E()
if(!J.P(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.v(null)}}}}}return!0},
i:function(a){return this.q()},
w:function(a){var s,r,q,p
this.S()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.n)(r),++p)s.push(r[p].w(a))
return C.a.p(s,"\n")},
q:function(){return this.w("")}}
F.iy.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
D:function(a,b){var s=this
C.a.D(s.b,b)
C.a.D(s.c,new F.iz(s,b))
C.a.D(s.d,new F.iA(s,b))},
i:function(a){return this.q()},
q:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].w(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].w(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
F.iz.prototype={
$1:function(a){if(!J.P(a.a,this.a))this.b.$1(a)},
$S:7}
F.iA.prototype={
$1:function(a){var s=this.a
if(!J.P(a.a,s)&&!J.P(a.b,s))this.b.$1(a)},
$S:7}
F.iB.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.q()},
q:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].w(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
F.iC.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.q()},
q:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q)p.push(s[q].w(""))
return C.a.p(p,"\n")}}
O.dz.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.A():s},
O:function(a){var s=this.fr
return s==null?null:s.v(a)},
b2:function(){return this.O(null)},
cM:function(a){this.a=null
this.O(a)},
ff:function(){return this.cM(null)},
eq:function(a,b){return this.O(new D.ap())},
es:function(a,b){return this.O(new D.aq())},
gca:function(){var s=this,r=s.dx
if(r==null){r=new D.c9([],[],[],[],[])
r.cn(r.gel(),r.geY(),r.gf1())
r.gn().l(0,s.gcL())
r.gdr().l(0,s.gas())
s.dx=r}return r},
gbQ:function(){var s=this.r
return s==null?this.r=O.dA(this,"ambient"):s},
gbX:function(){var s=this.x
return s==null?this.x=O.dA(this,"diffuse"):s},
gbs:function(){var s=this.z
return s==null?this.z=new O.hx(new V.I(0,0,0),this,"specular",new A.a9(!1,!1,!1)):s},
gd1:function(){var s=this.Q
return s==null?this.Q=new O.ht(this,"bump",new A.a9(!1,!1,!1)):s},
cD:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.R(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){q=a2[r]
p=q.gal()
o=a1.h(0,q.gal())
a1.k(0,p,o==null?1:o)}n=[]
a1.D(0,new O.hy(b,n))
C.a.aX(n,new O.hz())
m=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=[]
m.D(0,new O.hA(b,l))
C.a.aX(l,new O.hB())
k=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.n)(a2),++r){q=a2[r]
p=q.gal()
o=k.h(0,q.gal())
k.k(0,p,o==null?1:o)}j=[]
k.D(0,new O.hC(b,j))
C.a.aX(j,new O.hD())
i=new H.R(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.n)(a0),++r){q=a0[r]
s=q.gal()
p=i.h(0,q.gal())
i.k(0,s,p==null?1:p)}h=[]
i.D(0,new O.hE(b,h))
C.a.aX(h,new O.hF())
a0=C.b.Y(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hv(new V.aD(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.dA(b,"emission"):a2).c
s=b.gbQ().c
p=b.gbX().c
o=b.y
o=(o==null?b.y=O.dA(b,"invDiffuse"):o).c
g=b.gbs().c
f=b.gd1().c
e=b.cx
e=(e==null?b.cx=O.dA(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hw(new V.I(0,0,0),b,"refract",new A.a9(!1,!1,!1)):d).c
c=b.db
return A.lu(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hs(b,"alpha",new A.a9(!1,!1,!1)):c).c,n,l,j,h)},
a8:function(a,b){if(b!=null)if(!C.a.H(a,b)){b.a=a.length
a.push(b)}},
ai:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aB(m==null?[]:m)
s=H.O(m).c
for(;m.t();){r=s.a(m.d)
q=$.iw
if(q==null)q=$.iw=new V.x(0,0,1)
r.c=q
p=$.iv
r.d=p==null?$.iv=new V.x(0,1,0):p
p=$.iu
r.e=p==null?$.iu=new V.x(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.br(q).E()
r.d=n.br(r.d).E()
r.e=n.br(r.e).E()}}},
dF:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null){s=a6.cD()
r=s.bk
a8=t.d1.a(a9.fr.h(0,r))
if(a8==null){q=a9.a
p=t.S
o=t.W
a8=new A.ce(s,[],P.M(p,o),P.M(p,t.J),P.M(p,o),P.M(p,t.L),P.M(p,o),P.M(p,t.U),P.M(p,o),P.M(p,t.R),q,r)
a8.dR(s,q)
a9.cV(a8)}a8=a6.a=a8
b0.e=null}n=a8.x
m=n.bl
s=b0.e
if(!(s instanceof Z.bo))s=b0.e=null
if(s==null||!s.d.m(0,m)){s=n.k4
if(s){r=b0.d
if(r!=null)r.av()}r=n.r1
if(r){q=b0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gV().bS()
q.gX().bS()
q=q.e
if(q!=null)q.aB(0)}}q=n.rx
if(q){p=b0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gX().fA()
p=p.e
if(p!=null)p.aB(0)}}p=b0.d
l=p==null?a7:p.d0(new Z.eB(a9.a),m)
if(l==null)return
p=l.aw($.ak())
if(p!=null){o=a8.y
o=o==null?a7:o.c
p.e=o==null?0:o}if(s){s=l.aw($.aX())
if(s!=null){p=a8.Q
p=p==null?a7:p.c
s.e=p==null?1:p}}if(r){s=l.aw($.aW())
if(s!=null){r=a8.z
r=r==null?a7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aw($.bl())
if(s!=null){r=a8.ch
r=r==null?a7:r.c
s.e=r==null?3:r}}if(q){s=l.aw($.aY())
if(s!=null){r=a8.cx
r=r==null?a7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aw($.aV())
if(s!=null){r=a8.cy
r=r==null?a7:r.c
s.e=r==null?5:r}}b0.e=l}k=[]
a8.P(a9)
if(n.fr){s=a9.dx
s=s.gL(s)
r=a8.db
if(r!=null)r.a7(s.a3(0,!0))}if(n.fx){s=a9.cx
if(s==null){s=a9.db
r=a9.dx
r=a9.cx=s.gL(s).G(0,r.gL(r))
s=r}r=a8.dx
if(r!=null)r.a7(s.a3(0,!0))}s=a9.ch
if(s==null){s=a9.dx
s=a9.ch=a9.gh2().G(0,s.gL(s))}r=a8.fr
if(r!=null)r.a7(s.a3(0,!0))
if(n.go){s=a9.db
s=s.gL(s)
r=a8.dy
if(r!=null)r.a7(s.a3(0,!0))}if(n.x1){s=$.jZ
if(s==null){s=new V.ch(1,0,0,0,1,0,0,0,1)
$.jZ=s}r=a8.go
if(r!=null)r.a7(s.a3(0,!0))}if(n.x2){s=V.a4()
r=a8.id
if(r!=null)r.a7(s.a3(0,!0))}if(n.y1){s=V.a4()
r=a8.k1
if(r!=null)r.a7(s.a3(0,!0))}if(n.aP>0){s=a6.e.a
j=s.length
r=a8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.e(s,i)
r=s[i]
q=a8.k3
if(i>=q.length)return H.e(q,i)
q=q[i]
h=new Float32Array(H.cY(r.a3(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a6.f
r=r==null?a7:r.f
if(r==null)r=new V.I(0,0,0)
q=a8.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.f
a6.a8(k,s==null?a7:s.e)
s=a6.f
s=s==null?a7:s.e
a8.a9(a8.r2,s)}if(n.k1){s=n.b
if(s.a){r=a6.r
r=r==null?a7:r.f
if(r==null)r=new V.I(0,0,0)
q=a8.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.r
a6.a8(k,s==null?a7:s.e)
s=a6.r
s=s==null?a7:s.e
a8.a9(a8.x1,s)}s=n.c
if(s.a){r=a6.x
r=r==null?a7:r.f
if(r==null)r=new V.I(0,0,0)
q=a8.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.x
a6.a8(k,s==null?a7:s.e)
s=a6.x
s=s==null?a7:s.e
a8.a9(a8.y2,s)}s=n.d
if(s.a){r=a6.y
r=r==null?a7:r.f
if(r==null)r=new V.I(0,0,0)
q=a8.aP
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.y
a6.a8(k,s==null?a7:s.e)
s=a6.y
s=s==null?a7:s.e
a8.a9(a8.bl,s)}s=n.e
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.z
q=q==null?a7:q.ch
if(q==null)q=100
p=a8.da
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.z
r=r==null?a7:r.f
if(r==null)r=new V.I(1,1,1)
q=a8.d8
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.z
a6.a8(k,s==null?a7:s.e)
s=a6.z
s=s==null?a7:s.e
a8.a9(a8.d9,s)}s=n.z
if(s.length>0){g=new H.R(t.y)
r=a6.dx
r=r==null?a7:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.n)(r),++f){e=r[f]
d=e.gal()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
p=a8.bZ.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ghg()
o=$.au
p=p.bf(o==null?$.au=new V.V(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghl()
o=$.au
p=p.bf(o==null?$.au=new V.V(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaO(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gd7()){p=e.gcW()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcX()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcY()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.n)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a8.bY.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=a9.db
a=r.gL(r)
a0=new H.R(t.y)
r=a6.dx
r=r==null?a7:r.f
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.n)(r),++f){e=r[f]
c=a0.h(0,0)
if(c==null)c=0
a0.k(0,0,c+1)
p=a8.c0.h(0,0)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=a.br(e.c).E()
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.b
o=b.f
o.a.uniform3f(o.d,p.a,p.b,p.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.n)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=a8.c_.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=a9.db
a=r.gL(r)
a1=new H.R(t.y)
r=a6.dx
r=r==null?a7:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.n)(r),++f){e=r[f]
d=e.gal()
c=a1.h(0,d)
if(c==null)c=0
a1.k(0,d,c+1)
p=a8.c2.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
a2=a.G(0,e.gL(e))
p=e.gL(e)
o=$.au
p=p.bf(o==null?$.au=new V.V(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.au
p=a2.bf(p==null?$.au=new V.V(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaO(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaC()
p=a2.c6(0)
o=b.d
if(o!=null){h=new Float32Array(H.cY(new V.ch(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).a3(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gaC()
p=e.gaC()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaC()
o=p.gb8(p)
if(o){o=b.f
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gaW()
p=e.gdK()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gaW()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaW()
o=p.gb8(p)
if(o){o=b.r
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.gd7()){p=e.gcW()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcX()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcY()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.n)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a8.c1.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=a9.db
a=r.gL(r)
a5=new H.R(t.y)
r=a6.dx
r=r==null?a7:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.n)(r),++f){e=r[f]
d=e.gal()
c=a5.h(0,d)
if(c==null)c=0
a5.k(0,d,c+1)
p=a8.c4.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.gh1(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghj(e).E()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bf(e.gh1(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaO(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaC()
p=e.gck()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gci(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghu()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghv()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaC()
p=e.gaC()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaC()
o=p.gb8(p)
if(o){o=b.dx
if(o!=null){a3=p.gb8(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gam(p))}}e.gaW()
p=e.gdK()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gaW()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaW()
o=p.gb8(p)
if(o){o=b.dy
if(o!=null){a3=p.gb8(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gam(p))}}if(e.ghk()){p=e.ghi()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghh()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gd7()){p=e.gcW()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcX()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcY()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.n)(s),++f){q=s[f].a
j=a5.h(0,q)
if(j==null)j=0
q=a8.c3.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.c){s=a6.Q
a6.a8(k,s==null?a7:s.e)
s=a6.Q
s=s==null?a7:s.e
a8.a9(a8.dc,s)}if(n.dy){s=a9.Q
if(s==null){s=a9.db
s=a9.Q=s.gL(s).c6(0)}r=a8.fy
if(r!=null)r.a7(s.a3(0,!0))}if(n.db){a6.a8(k,a7)
a8.a9(a8.dd,a7)
s=n.r
if(s.a){r=a6.cx
r=r==null?a7:r.f
if(r==null)r=new V.I(1,1,1)
q=a8.de
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.cx
a6.a8(k,s==null?a7:s.e)
s=a6.cx
s=s==null?a7:s.e
a8.a9(a8.df,s)}s=n.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.cy
q=q==null?a7:q.ch
if(q==null)q=0
p=a8.dg
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.cy
r=r==null?a7:r.f
if(r==null)r=new V.I(1,1,1)
q=a8.dh
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.cy
a6.a8(k,s==null?a7:s.e)
s=a6.cy
s=s==null?a7:s.e
a8.a9(a8.di,s)}}s=n.y
r=s.a
q=!r
if(q)p=s.c
else p=!0
if(p){if(r){r=a6.db
r=r==null?a7:r.f
if(r==null)r=1
p=a8.dj
if(p!=null)p.a.uniform1f(p.d,r)}if(s.c){r=a6.db
a6.a8(k,r==null?a7:r.e)
r=a6.db
r=r==null?a7:r.e
a8.a9(a8.dk,r)}r=a9.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].P(a9)
r=t.D.a(b0.e)
r.P(a9)
r.a2(a9)
r.aD(a9)
if(q)s=s.c
else s=!0
if(s)a9.a.disable(3042)
for(s=a9.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a7)}}s.useProgram(a7)
a8.gaa(a8).d5()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cD().bk}}
O.hy.prototype={
$2:function(a,b){return this.b.push(new A.aZ(a,C.b.Y(b+3,4)*4))},
$S:8}
O.hz.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:36}
O.hA.prototype={
$2:function(a,b){return this.b.push(new A.b1(a,C.b.Y(b+3,4)*4))},
$S:8}
O.hB.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:37}
O.hC.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.b.Y(b+3,4)*4))},
$S:8}
O.hD.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:38}
O.hE.prototype={
$2:function(a,b){return this.b.push(new A.bd(a,C.b.Y(b+3,4)*4))},
$S:8}
O.hF.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:39}
O.hs.prototype={
at:function(){var s,r=this
r.cs()
s=r.f
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.O(new D.v(r.b,s,1))}}}
O.cf.prototype={
O:function(a){return this.a.O(a)},
b2:function(){return this.O(null)},
at:function(){},
bM:function(a){var s,r,q=this
if(!q.c.m(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.at()
s=q.a
s.a=null
s.O(null)}},
sbd:function(a){var s,r=this,q=r.c
if(!q.c)r.bM(new A.a9(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gn().K(0,r.gas())
s=r.e
r.e=a
a.gn().l(0,r.gas())
r.a.O(new D.v(r.b+".textureCube",s,r.e))}}}
O.ht.prototype={}
O.cg.prototype={
cO:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.O(new D.v(r.b+".color",s,a))}},
at:function(){this.cs()
this.cO(new V.I(1,1,1))},
saO:function(a,b){this.bM(new A.a9(!0,!1,this.c.c))
this.cO(b)}}
O.hv.prototype={}
O.hw.prototype={
at:function(){var s,r=this
r.ct()
s=r.ch
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.O(new D.v(r.b+".refraction",s,1))}}}
O.hx.prototype={
cP:function(a){var s=this,r=s.ch
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.O(new D.v(s.b+".shininess",r,a))}},
at:function(){this.ct()
this.cP(100)}}
O.dZ.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.A():s},
O:function(a){var s=this.e
return s==null?null:s.v(a)},
b2:function(){return this.O(null)},
dF:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.x.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.ct(a.a,"Skybox")
s.dl(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gaa(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gu().h(0,"fov"))
s.z=r.a(s.gu().h(0,"ratio"))
s.Q=t.g.a(s.gu().h(0,"boxClr"))
s.ch=t.a.a(s.gu().h(0,"boxTxt"))
s.cx=t.j.a(s.gu().h(0,"viewMat"))
a.cV(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.d0(new Z.eB(a.a),$.ak())
if(r==null)r=l
else{q=r.aw($.ak())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.P(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.P(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.co(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.gL(r).c6(0)
p=p.cx
if(p!=null)p.a7(r.a3(0,!0))}r=b.e
if(r instanceof Z.bo){r.P(a)
r.a2(a)
r.aD(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gaa(r).d5()}o.aD(a)}}
O.i3.prototype={}
T.i4.prototype={}
T.i5.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.A():s},
P:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aD:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.i6.prototype={
dt:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
i.toString
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.i5(i)
r.aK(s,i,p,34069,!1,!1)
r.aK(s,i,m,34070,!1,!1)
r.aK(s,i,o,34071,!1,!1)
r.aK(s,i,l,34072,!1,!1)
r.aK(s,i,n,34073,!1,!1)
r.aK(s,i,k,34074,!1,!1)
return s},
ds:function(a){return this.dt(a,".png")},
aK:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.X(s,"load",new T.i7(this,s,!1,b,!1,d,a),!1)},
fg:function(a,b,c){var s,r,q,p,o,n
b=V.jO(b)
s=a.width
r=V.jO(s==null?512:s)
s=a.height
q=V.jO(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.je()
p.width=r
p.height=q
o=t.b.a(C.f.dI(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.ne(o.getImageData(0,0,s,n==null?512:n))}}}
T.i7.prototype={
$1:function(a){var s=this,r=s.a,q=r.fg(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.L.h9(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.fI()}++r.e},
$S:4}
X.he.prototype={
gn:function(){var s=this.x
return s==null?this.x=D.A():s},
ag:function(a){var s=this.x
return s==null?null:s.v(a)},
sdE:function(a,b){var s,r=this
if(!r.r.m(0,b)){s=r.r
r.r=b
r.ag(new D.v("region",s,b))}},
P:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.ah(q.a*s)
o=C.d.ah(q.b*r)
n=C.d.ah(q.c*s)
a.c=n
q=C.d.ah(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
l.clear(m)}}
X.hh.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.A():s},
P:function(a){var s
a.cy.bp(V.a4())
s=V.a4()
a.db.bp(s)},
aD:function(a){a.cy.aA()
a.db.aA()}}
X.dO.prototype={
gn:function(){var s=this.f
return s==null?this.f=D.A():s},
ag:function(a){var s=this.f
return s==null?null:s.v(a)},
e_:function(){return this.ag(null)},
P:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.at(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bp(i)
s=$.kP()
r=q.b
if(r!=null)s=r.aT(0,a,q).G(0,s)
a.db.bp(s)},
aD:function(a){a.cy.aA()
a.db.aA()}}
X.i1.prototype={}
V.ja.prototype={
$1:function(a){var s=C.d.cj(this.a.gfL(),2)
if(s!=="0.00")P.jP(s+" fps")},
$S:40}
V.hW.prototype={
cU:function(a){var s,r,q,p,o,n,m=this.fi(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.K(C.a.fN(a)),s=new P.bJ(m.dH(new H.bw(s,s.gj(s))).a());s.t();){r=s.gI(s)
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
if(H.kJ(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.mi(C.H,r,C.n,!1)
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
fi:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.ib(P.M(s,t.aJ),P.M(s,t.aX),P.jX(s))
h.d=h.F(0,q)
s=h.F(0,q).p(0,p)
r=new K.S([])
r.R(new H.K("*"))
s.a.push(r)
s.c=!0
s=[]
h.F(0,p).p(0,p).a.push(new K.aI(s))
r=new K.S([])
r.R(new H.K("*"))
s.push(r)
r=h.F(0,p).p(0,"BoldEnd")
s=new K.S([])
s.R(new H.K("*"))
r.a.push(s)
r.c=!0
r=h.F(0,q).p(0,o)
s=new K.S([])
s.R(new H.K("_"))
r.a.push(s)
r.c=!0
r=[]
h.F(0,o).p(0,o).a.push(new K.aI(r))
s=new K.S([])
s.R(new H.K("_"))
r.push(s)
s=h.F(0,o).p(0,n)
r=new K.S([])
r.R(new H.K("_"))
s.a.push(r)
s.c=!0
s=h.F(0,q).p(0,m)
r=new K.S([])
r.R(new H.K("`"))
s.a.push(r)
s.c=!0
s=[]
h.F(0,m).p(0,m).a.push(new K.aI(s))
r=new K.S([])
r.R(new H.K("`"))
s.push(r)
r=h.F(0,m).p(0,"CodeEnd")
s=new K.S([])
s.R(new H.K("`"))
r.a.push(s)
r.c=!0
r=h.F(0,q).p(0,l)
s=new K.S([])
s.R(new H.K("["))
r.a.push(s)
r.c=!0
r=h.F(0,l).p(0,k)
s=new K.S([])
s.R(new H.K("|"))
r.a.push(s)
s=h.F(0,l).p(0,j)
r=new K.S([])
r.R(new H.K("]"))
s.a.push(r)
s.c=!0
s=[]
h.F(0,l).p(0,l).a.push(new K.aI(s))
r=new K.S([])
r.R(new H.K("|]"))
s.push(r)
r=h.F(0,k).p(0,j)
s=new K.S([])
s.R(new H.K("]"))
r.a.push(s)
r.c=!0
r=[]
h.F(0,k).p(0,k).a.push(new K.aI(r))
s=new K.S([])
s.R(new H.K("|]"))
r.push(s)
h.F(0,q).p(0,i).a.push(new K.fI())
s=[]
h.F(0,i).p(0,i).a.push(new K.aI(s))
r=new K.S([])
r.R(new H.K("*_`["))
s.push(r)
r=h.F(0,"BoldEnd")
r.d=r.a.be(p)
r=h.F(0,n)
r.d=r.a.be(o)
r=h.F(0,"CodeEnd")
r.d=r.a.be(m)
r=h.F(0,j)
r.d=r.a.be("Link")
r=h.F(0,i)
r.d=r.a.be(i)
return this.b=h}}
V.hY.prototype={
$1:function(a){P.ka(C.h,new V.hX(this.a))},
$S:4}
V.hX.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ah(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.t(-0.01*s)+"px"
q.top=r},
$S:2};(function aliases(){var s=J.a.prototype
s.dN=s.i
s=J.b6.prototype
s.dO=s.i
s=K.dn.prototype
s.dM=s.aR
s.bt=s.i
s=O.cf.prototype
s.cs=s.at
s=O.cg.prototype
s.ct=s.at})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mu","lp",41)
r(P,"n8","lW",9)
r(P,"n9","lX",9)
r(P,"na","lY",9)
q(P,"kB","n3",2)
r(W,"oD","h3",30)
var k
p(k=E.bs.prototype,"gdC",0,0,null,["$1","$0"],["dD","fW"],0,0)
p(k,"gdA",0,0,null,["$1","$0"],["dB","fV"],0,0)
p(k,"gdw",0,0,null,["$1","$0"],["dz","fS"],0,0)
o(k,"gfQ","fR",6)
o(k,"gfT","fU",6)
p(k=E.ec.prototype,"gcu",0,0,null,["$1","$0"],["cw","cv"],0,0)
n(k,"gh5","dG",2)
m(k=X.ex.prototype,"geG","eH",4)
m(k,"geu","ev",4)
m(k,"geA","eB",3)
m(k,"geK","eL",16)
m(k,"geI","eJ",16)
m(k,"geO","eP",3)
m(k,"geS","eT",3)
m(k,"geE","eF",3)
m(k,"geQ","eR",3)
m(k,"geC","eD",3)
m(k,"geU","eV",27)
m(k,"geW","eX",4)
m(k,"gf9","fa",11)
m(k,"gf5","f6",11)
m(k,"gf7","f8",11)
p(D.bY.prototype,"gdT",0,0,null,["$1","$0"],["ap","dU"],0,0)
p(k=D.c9.prototype,"gcJ",0,0,null,["$1","$0"],["cK","eM"],0,0)
m(k,"geY","eZ",29)
o(k,"gel","em",17)
o(k,"gf1","f2",17)
l(V.W.prototype,"gj","c8",18)
l(V.x.prototype,"gj","c8",18)
p(k=U.bt.prototype,"gaH",0,0,null,["$1","$0"],["J","a1"],0,0)
o(k,"gdV","dW",13)
o(k,"gf_","f0",13)
p(k=U.cx.prototype,"gaH",0,0,null,["$1","$0"],["J","a1"],0,0)
m(k,"gbC","bD",12)
m(k,"gbE","bF",12)
m(k,"gbG","bH",12)
p(k=U.cy.prototype,"gaH",0,0,null,["$1","$0"],["J","a1"],0,0)
m(k,"gbC","bD",1)
m(k,"gbE","bF",1)
m(k,"gbG","bH",1)
m(k,"gef","eg",1)
m(k,"geh","ei",1)
m(k,"gfp","fq",1)
m(k,"gfn","fo",1)
m(k,"gfl","fm",1)
m(U.cz.prototype,"gej","ek",1)
p(M.bW.prototype,"gM",0,0,null,["$1","$0"],["N","b_"],0,0)
p(k=M.c1.prototype,"gM",0,0,null,["$1","$0"],["N","b_"],0,0)
o(k,"gew","ex",6)
o(k,"gey","ez",6)
p(k=M.e5.prototype,"gM",0,0,null,["$1","$0"],["N","b_"],0,0)
o(k,"gen","eo",19)
o(k,"gf3","f4",19)
p(k=O.dz.prototype,"gas",0,0,null,["$1","$0"],["O","b2"],0,0)
p(k,"gcL",0,0,null,["$1","$0"],["cM","ff"],0,0)
o(k,"gep","eq",20)
o(k,"ger","es",20)
p(O.cf.prototype,"gas",0,0,null,["$1","$0"],["O","b2"],0,0)
p(O.dZ.prototype,"gas",0,0,null,["$1","$0"],["O","b2"],0,0)
p(X.dO.prototype,"gdZ",0,0,null,["$1","$0"],["ag","e_"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.jk,J.a,J.a3,P.D,P.cF,P.h,H.bw,P.dq,H.c2,H.ev,H.ig,H.hL,H.ff,H.bp,P.T,H.hm,H.dy,H.hi,H.ac,H.eT,P.cR,P.bI,P.bJ,P.eD,P.e7,P.e8,P.iT,P.cW,P.iM,P.cE,P.B,P.dY,P.dc,P.iS,P.Q,P.b2,P.dN,P.cu,P.eQ,P.hd,P.ab,P.be,W.fW,W.jf,W.jw,W.E,W.c3,P.cT,P.f8,K.fI,K.dn,K.S,L.e3,L.ed,L.ee,L.ib,O.bq,O.ci,E.fO,E.bs,E.bn,E.bA,E.eN,E.hP,E.ec,Z.eA,Z.eB,Z.bo,Z.c4,Z.aP,D.fQ,D.ao,D.L,X.bU,X.dv,X.hk,X.hq,X.Y,X.hK,X.ic,X.ex,D.bY,V.I,V.aD,V.h7,V.ch,V.as,V.N,V.V,V.aK,V.dT,V.W,V.x,U.cx,U.cy,U.cz,M.bW,M.c1,M.e5,A.fK,A.fL,A.a9,A.aZ,A.b1,A.bc,A.bd,A.hu,A.el,A.em,A.ep,A.es,A.ii,A.ip,F.ag,F.hl,F.hM,F.hU,F.cr,F.cs,F.bE,F.cA,F.p,F.iy,F.iB,F.iC,O.i3,O.cf,O.hv,T.i6,X.i1,X.hh,X.dO,V.hW])
q(J.a,[J.dr,J.c7,J.b6,J.ah,J.bv,J.b5,H.ck,W.b,W.fH,W.db,W.bV,W.an,W.C,W.eI,W.aa,W.fZ,W.h_,W.eJ,W.c_,W.eL,W.h0,W.i,W.eR,W.aF,W.hg,W.eV,W.b4,W.hp,W.hH,W.eZ,W.f_,W.aH,W.f0,W.f2,W.aJ,W.f6,W.f9,W.aM,W.fa,W.aN,W.fg,W.ai,W.fk,W.i9,W.aO,W.fm,W.id,W.ir,W.fs,W.fu,W.fw,W.fy,W.fA,P.b8,P.eX,P.bb,P.f4,P.hN,P.fh,P.bg,P.fo,P.fM,P.eE,P.bC,P.fd])
q(J.b6,[J.dP,J.bF,J.ar])
r(J.dt,J.ah)
q(J.bv,[J.c6,J.ds])
q(P.D,[H.dw,P.eh,H.du,H.eu,H.dW,H.eO,P.d8,P.dK,P.al,P.ew,P.et,P.e4,P.dd,P.dg])
r(P.ca,P.cF)
q(P.ca,[H.bG,W.eG,W.eF,P.dl])
r(H.K,H.bG)
q(P.h,[H.j,H.b9,H.cB,P.c5])
r(H.c0,H.b9)
q(P.dq,[H.cd,H.eC])
r(H.cn,P.eh)
q(H.bp,[H.i2,H.hj,H.j5,H.j6,H.j7,P.iG,P.iF,P.iH,P.iI,P.iR,P.iQ,P.j0,P.iO,P.iP,P.hr,P.h1,P.h2,W.hI,W.hJ,W.hT,W.i_,W.iJ,P.iW,P.j2,P.hb,P.hc,P.fN,E.hQ,E.hR,E.hS,E.i8,D.h9,D.ha,F.iU,F.hV,F.iE,F.iD,F.iz,F.iA,O.hy,O.hz,O.hA,O.hB,O.hC,O.hD,O.hE,O.hF,T.i7,V.ja,V.hY,V.hX])
q(H.i2,[H.hZ,H.bR])
r(P.cc,P.T)
r(H.R,P.cc)
r(H.aG,H.j)
r(H.bz,H.ck)
q(H.bz,[H.cH,H.cJ])
r(H.cI,H.cH)
r(H.ba,H.cI)
r(H.cK,H.cJ)
r(H.cj,H.cK)
q(H.cj,[H.dE,H.dF,H.dG,H.dH,H.dI,H.cl,H.dJ])
r(H.cS,H.eO)
r(P.cO,P.c5)
r(P.iN,P.iT)
r(P.cL,P.cW)
r(P.cD,P.cL)
r(P.df,P.e8)
r(P.h4,P.dc)
r(P.is,P.h4)
r(P.it,P.df)
q(P.al,[P.cq,P.dp])
q(W.b,[W.r,W.dk,W.av,W.cM,W.aw,W.ad,W.cP,W.ez,W.bH,P.da,P.aC])
q(W.r,[W.G,W.af])
q(W.G,[W.l,P.k])
q(W.l,[W.d6,W.d7,W.b_,W.dm,W.bu,W.dX])
r(W.fV,W.an)
r(W.bX,W.eI)
q(W.aa,[W.fX,W.fY])
r(W.eK,W.eJ)
r(W.bZ,W.eK)
r(W.eM,W.eL)
r(W.di,W.eM)
r(W.aE,W.db)
r(W.eS,W.eR)
r(W.dj,W.eS)
r(W.eW,W.eV)
r(W.b3,W.eW)
r(W.ay,W.i)
q(W.ay,[W.b7,W.a6,W.bf])
r(W.dB,W.eZ)
r(W.dC,W.f_)
r(W.f1,W.f0)
r(W.dD,W.f1)
r(W.f3,W.f2)
r(W.cm,W.f3)
r(W.f7,W.f6)
r(W.dQ,W.f7)
r(W.dV,W.f9)
r(W.cN,W.cM)
r(W.e0,W.cN)
r(W.fb,W.fa)
r(W.e1,W.fb)
r(W.e6,W.fg)
r(W.fl,W.fk)
r(W.ea,W.fl)
r(W.cQ,W.cP)
r(W.eb,W.cQ)
r(W.fn,W.fm)
r(W.ef,W.fn)
r(W.aQ,W.a6)
r(W.ft,W.fs)
r(W.eH,W.ft)
r(W.cC,W.c_)
r(W.fv,W.fu)
r(W.eU,W.fv)
r(W.fx,W.fw)
r(W.cG,W.fx)
r(W.fz,W.fy)
r(W.fc,W.fz)
r(W.fB,W.fA)
r(W.fj,W.fB)
r(W.eP,P.e7)
r(P.a7,P.f8)
r(P.eY,P.eX)
r(P.dx,P.eY)
r(P.f5,P.f4)
r(P.dL,P.f5)
r(P.fi,P.fh)
r(P.e9,P.fi)
r(P.fp,P.fo)
r(P.eg,P.fp)
r(P.d9,P.eE)
r(P.dM,P.aC)
r(P.fe,P.fd)
r(P.e2,P.fe)
q(K.dn,[K.aI,L.ie])
q(E.fO,[Z.bT,A.bD,T.i4])
q(D.L,[D.ap,D.aq,D.v,X.dR])
q(X.dR,[X.cb,X.bx,X.by,X.cv])
q(O.bq,[D.c9,U.bt])
q(D.fQ,[U.fT,U.Z])
r(U.br,U.Z)
q(A.bD,[A.ce,A.ct])
q(A.ii,[A.cw,A.il,A.im,A.io,A.ij,A.ei,A.ik,A.ej,A.ek,A.iq,A.en,A.eo,A.eq,A.er])
q(O.i3,[O.dz,O.dZ])
q(O.cf,[O.hs,O.ht,O.cg])
q(O.cg,[O.hw,O.hx])
r(T.i5,T.i4)
r(X.he,X.i1)
s(H.bG,H.ev)
s(H.cH,P.B)
s(H.cI,H.c2)
s(H.cJ,P.B)
s(H.cK,H.c2)
s(P.cF,P.B)
s(P.cW,P.dY)
s(W.eI,W.fW)
s(W.eJ,P.B)
s(W.eK,W.E)
s(W.eL,P.B)
s(W.eM,W.E)
s(W.eR,P.B)
s(W.eS,W.E)
s(W.eV,P.B)
s(W.eW,W.E)
s(W.eZ,P.T)
s(W.f_,P.T)
s(W.f0,P.B)
s(W.f1,W.E)
s(W.f2,P.B)
s(W.f3,W.E)
s(W.f6,P.B)
s(W.f7,W.E)
s(W.f9,P.T)
s(W.cM,P.B)
s(W.cN,W.E)
s(W.fa,P.B)
s(W.fb,W.E)
s(W.fg,P.T)
s(W.fk,P.B)
s(W.fl,W.E)
s(W.cP,P.B)
s(W.cQ,W.E)
s(W.fm,P.B)
s(W.fn,W.E)
s(W.fs,P.B)
s(W.ft,W.E)
s(W.fu,P.B)
s(W.fv,W.E)
s(W.fw,P.B)
s(W.fx,W.E)
s(W.fy,P.B)
s(W.fz,W.E)
s(W.fA,P.B)
s(W.fB,W.E)
s(P.eX,P.B)
s(P.eY,W.E)
s(P.f4,P.B)
s(P.f5,W.E)
s(P.fh,P.B)
s(P.fi,W.E)
s(P.fo,P.B)
s(P.fp,W.E)
s(P.eE,P.T)
s(P.fd,P.B)
s(P.fe,W.E)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{o:"int",a1:"double",a2:"num",z:"String",bi:"bool",ab:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([L?])","~(L)","~()","~(a6)","~(i)","~(z,@)","~(o,h<bs>)","~(ag)","~(o,o)","~(~())","ab()","~(bf)","~(L?)","~(o,h<Z?>)","z(o)","~(~(L))","~(b7)","~(o,h<c8>)","a1()","~(o,h<dU>)","~(o,h<as>)","@(@)","G(r)","@(z)","ab(@)","~(a2)","bi(r)","~(aQ)","ab(~())","bi(h<c8>)","z(b)","~(z,z)","~(cA,a1,a1)","bT(o)","@(@,z)","~(@)","o(aZ,aZ)","o(b1,b1)","o(bc,bc)","o(bd,bd)","~(ia)","o(@,@)","~(@,@)","~(J?,J?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mf(v.typeUniverse,JSON.parse('{"dP":"b6","bF":"b6","ar":"b6","nD":"i","nP":"i","nF":"aC","nE":"b","nW":"b","nZ":"b","nC":"k","nR":"k","nG":"l","nU":"l","nS":"r","nO":"r","om":"ad","nK":"ay","nH":"af","o_":"af","nY":"a6","nT":"b3","nL":"C","nM":"ai","nV":"ba","dr":{"bi":[]},"ah":{"m":["1"],"j":["1"],"h":["1"]},"dt":{"m":["1"],"j":["1"],"h":["1"]},"bv":{"a1":[],"a2":[]},"c6":{"a1":[],"o":[],"a2":[]},"ds":{"a1":[],"a2":[]},"b5":{"z":[]},"dw":{"D":[]},"K":{"m":["o"],"j":["o"],"h":["o"]},"j":{"h":["1"]},"b9":{"h":["2"]},"c0":{"j":["2"],"h":["2"]},"cB":{"h":["1"]},"bG":{"m":["1"],"j":["1"],"h":["1"]},"cn":{"D":[]},"du":{"D":[]},"eu":{"D":[]},"dW":{"D":[]},"R":{"U":["1","2"],"T.V":"2"},"aG":{"j":["1"],"h":["1"]},"bz":{"q":["1"]},"ba":{"q":["a1"],"m":["a1"],"j":["a1"],"h":["a1"]},"cj":{"q":["o"],"m":["o"],"j":["o"],"h":["o"]},"dE":{"q":["o"],"m":["o"],"j":["o"],"h":["o"]},"dF":{"q":["o"],"m":["o"],"j":["o"],"h":["o"]},"dG":{"q":["o"],"m":["o"],"j":["o"],"h":["o"]},"dH":{"q":["o"],"m":["o"],"j":["o"],"h":["o"]},"dI":{"q":["o"],"m":["o"],"j":["o"],"h":["o"]},"cl":{"q":["o"],"m":["o"],"j":["o"],"h":["o"]},"dJ":{"q":["o"],"m":["o"],"j":["o"],"h":["o"]},"eO":{"D":[]},"cS":{"D":[]},"cR":{"ia":[]},"cO":{"h":["1"]},"cD":{"j":["1"],"h":["1"]},"c5":{"h":["1"]},"ca":{"m":["1"],"j":["1"],"h":["1"]},"cc":{"U":["1","2"]},"T":{"U":["1","2"]},"cL":{"j":["1"],"h":["1"]},"a1":{"a2":[]},"o":{"a2":[]},"m":{"j":["1"],"h":["1"]},"d8":{"D":[]},"eh":{"D":[]},"dK":{"D":[]},"al":{"D":[]},"cq":{"D":[]},"dp":{"D":[]},"ew":{"D":[]},"et":{"D":[]},"e4":{"D":[]},"dd":{"D":[]},"dN":{"D":[]},"cu":{"D":[]},"dg":{"D":[]},"G":{"r":[],"b":[]},"b7":{"i":[]},"a6":{"i":[]},"r":{"b":[]},"av":{"b":[]},"aw":{"b":[]},"ad":{"b":[]},"bf":{"i":[]},"ay":{"i":[]},"aQ":{"a6":[],"i":[]},"l":{"G":[],"r":[],"b":[]},"d6":{"G":[],"r":[],"b":[]},"d7":{"G":[],"r":[],"b":[]},"b_":{"G":[],"r":[],"b":[]},"af":{"r":[],"b":[]},"bZ":{"m":["a7<a2>"],"q":["a7<a2>"],"j":["a7<a2>"],"h":["a7<a2>"]},"c_":{"a7":["a2"]},"di":{"m":["z"],"q":["z"],"j":["z"],"h":["z"]},"eG":{"m":["G"],"j":["G"],"h":["G"]},"dj":{"m":["aE"],"q":["aE"],"j":["aE"],"h":["aE"]},"dk":{"b":[]},"dm":{"G":[],"r":[],"b":[]},"b3":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"bu":{"G":[],"r":[],"b":[]},"dB":{"U":["z","@"],"T.V":"@"},"dC":{"U":["z","@"],"T.V":"@"},"dD":{"m":["aH"],"q":["aH"],"j":["aH"],"h":["aH"]},"eF":{"m":["r"],"j":["r"],"h":["r"]},"cm":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"dQ":{"m":["aJ"],"q":["aJ"],"j":["aJ"],"h":["aJ"]},"dV":{"U":["z","@"],"T.V":"@"},"dX":{"G":[],"r":[],"b":[]},"e0":{"m":["av"],"q":["av"],"b":[],"j":["av"],"h":["av"]},"e1":{"m":["aM"],"q":["aM"],"j":["aM"],"h":["aM"]},"e6":{"U":["z","z"],"T.V":"z"},"ea":{"m":["ad"],"q":["ad"],"j":["ad"],"h":["ad"]},"eb":{"m":["aw"],"q":["aw"],"b":[],"j":["aw"],"h":["aw"]},"ef":{"m":["aO"],"q":["aO"],"j":["aO"],"h":["aO"]},"ez":{"b":[]},"bH":{"b":[]},"eH":{"m":["C"],"q":["C"],"j":["C"],"h":["C"]},"cC":{"a7":["a2"]},"eU":{"m":["aF?"],"q":["aF?"],"j":["aF?"],"h":["aF?"]},"cG":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"fc":{"m":["aN"],"q":["aN"],"j":["aN"],"h":["aN"]},"fj":{"m":["ai"],"q":["ai"],"j":["ai"],"h":["ai"]},"cT":{"b4":[]},"dl":{"m":["G"],"j":["G"],"h":["G"]},"a7":{"f8":["1"]},"dx":{"m":["b8"],"j":["b8"],"h":["b8"]},"dL":{"m":["bb"],"j":["bb"],"h":["bb"]},"e9":{"m":["z"],"j":["z"],"h":["z"]},"k":{"G":[],"r":[],"b":[]},"eg":{"m":["bg"],"j":["bg"],"h":["bg"]},"d9":{"U":["z","@"],"T.V":"@"},"da":{"b":[]},"aC":{"b":[]},"dM":{"b":[]},"e2":{"m":["U<@,@>"],"j":["U<@,@>"],"h":["U<@,@>"]},"bq":{"h":["1"]},"ap":{"L":[]},"aq":{"L":[]},"v":{"L":[]},"cb":{"L":[]},"bx":{"L":[]},"by":{"L":[]},"dR":{"L":[]},"cv":{"L":[]},"bY":{"c8":[]},"c9":{"h":["c8"]},"br":{"Z":[]},"bt":{"Z":[],"h":["Z?"]},"cx":{"Z":[]},"cy":{"Z":[]},"cz":{"Z":[]},"bW":{"dU":[]},"c1":{"dU":[]},"ce":{"bD":[]},"ct":{"bD":[]}}'))
H.me(v.typeUniverse,JSON.parse('{"ah":1,"dt":1,"a3":1,"j":1,"bw":1,"b9":2,"c0":2,"cd":2,"cB":1,"eC":1,"c2":1,"ev":1,"bG":1,"aG":1,"dy":1,"bz":1,"bJ":1,"cO":1,"e7":1,"e8":2,"cE":1,"c5":1,"ca":1,"B":1,"cc":2,"T":2,"dY":1,"cL":1,"cF":1,"cW":1,"dc":2,"df":2,"h":1,"m":1,"dq":1,"eP":1,"E":1,"c3":1,"bq":1,"ap":1,"aq":1,"v":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.ni
return{D:s("bo"),E:s("b_"),b:s("bV"),V:s("j<@>"),h:s("G"),C:s("D"),B:s("i"),Y:s("nQ"),I:s("b4"),l:s("bu"),m:s("ah<@>"),T:s("c7"),M:s("ar"),p:s("q<@>"),c:s("R<o,bi>"),y:s("R<o,o>"),J:s("m<el>"),L:s("m<em>"),U:s("m<ep>"),R:s("m<es>"),d:s("m<@>"),e:s("cb"),f:s("U<@,@>"),Z:s("bx"),O:s("by"),P:s("ab"),K:s("J"),q:s("a7<a2>"),k:s("bD"),N:s("z"),r:s("ia"),s:s("ed"),t:s("cv"),n:s("ei"),v:s("cw"),g:s("ej"),F:s("ek"),Q:s("en"),j:s("eo"),G:s("eq"),a:s("er"),o:s("bF"),w:s("bi"),i:s("a1"),z:s("@"),S:s("o"),A:s("0&*"),_:s("J*"),u:s("jW<ab>?"),d1:s("ce?"),X:s("J?"),ba:s("bC?"),x:s("ct?"),aJ:s("e3?"),aX:s("ee?"),W:s("cw?"),H:s("a2")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.b_.prototype
C.E=J.a.prototype
C.a=J.ah.prototype
C.b=J.c6.prototype
C.F=J.c7.prototype
C.d=J.bv.prototype
C.c=J.b5.prototype
C.G=J.ar.prototype
C.p=J.dP.prototype
C.L=P.bC.prototype
C.i=J.bF.prototype
C.q=W.aQ.prototype
C.r=W.bH.prototype
C.t=new E.bn("Browser.chrome")
C.j=new E.bn("Browser.firefox")
C.k=new E.bn("Browser.edge")
C.u=new E.bn("Browser.other")
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.v=function() {
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
C.A=function(getTagFallback) {
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
C.w=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.x=function(hooks) {
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
C.z=function(hooks) {
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
C.y=function(hooks) {
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

C.B=new P.dN()
C.n=new P.is()
C.C=new P.it()
C.e=new P.iN()
C.h=new P.b2(0)
C.D=new P.b2(5e6)
C.H=s([0,0,65498,45055,65535,34815,65534,18431])
C.I=new E.bA("OperatingSystem.windows")
C.o=new E.bA("OperatingSystem.mac")
C.J=new E.bA("OperatingSystem.linux")
C.K=new E.bA("OperatingSystem.other")
C.M=new P.bI(null,2)})();(function staticFields(){$.iK=null
$.am=0
$.bS=null
$.jR=null
$.kD=null
$.kA=null
$.kH=null
$.j3=null
$.j8=null
$.jL=null
$.bK=null
$.d_=null
$.d0=null
$.jF=!1
$.aj=C.e
$.a5=[]
$.h6=null
$.jZ=null
$.hG=null
$.a_=null
$.au=null
$.k4=null
$.bh=null
$.kf=null
$.iu=null
$.iv=null
$.iw=null
$.ke=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"nN","kO",function(){return H.nk("_$dart_dartClosure")})
s($,"o0","kQ",function(){return H.ax(H.ih({
toString:function(){return"$receiver$"}}))})
s($,"o1","kR",function(){return H.ax(H.ih({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"o2","kS",function(){return H.ax(H.ih(null))})
s($,"o3","kT",function(){return H.ax(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"o6","kW",function(){return H.ax(H.ih(void 0))})
s($,"o7","kX",function(){return H.ax(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"o5","kV",function(){return H.ax(H.kc(null))})
s($,"o4","kU",function(){return H.ax(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"o9","kZ",function(){return H.ax(H.kc(void 0))})
s($,"o8","kY",function(){return H.ax(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"on","jQ",function(){return P.lV()})
s($,"op","l2",function(){return P.lH("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"og","l1",function(){return Z.ae(0)})
s($,"oa","l_",function(){return Z.ae(511)})
s($,"oi","ak",function(){return Z.ae(1)})
s($,"oh","aX",function(){return Z.ae(2)})
s($,"oc","aW",function(){return Z.ae(4)})
s($,"oj","bl",function(){return Z.ae(8)})
s($,"ok","aY",function(){return Z.ae(16)})
s($,"od","d4",function(){return Z.ae(32)})
s($,"oe","d5",function(){return Z.ae(64)})
s($,"of","l0",function(){return Z.ae(96)})
s($,"ol","bQ",function(){return Z.ae(128)})
s($,"ob","aV",function(){return Z.ae(256)})
s($,"nJ","kN",function(){return new V.h7()})
r($,"nI","y",function(){return $.kN()})
r($,"nX","kP",function(){var q=V.k1(),p=V.ju(),o=$.ke
return V.k_(q,p,o==null?$.ke=V.lS(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ck,ArrayBufferView:H.ck,Float32Array:H.ba,Float64Array:H.ba,Int16Array:H.dE,Int32Array:H.dF,Int8Array:H.dG,Uint16Array:H.dH,Uint32Array:H.dI,Uint8ClampedArray:H.cl,CanvasPixelArray:H.cl,Uint8Array:H.dJ,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fH,HTMLAnchorElement:W.d6,HTMLAreaElement:W.d7,Blob:W.db,HTMLCanvasElement:W.b_,CanvasRenderingContext2D:W.bV,CDATASection:W.af,CharacterData:W.af,Comment:W.af,ProcessingInstruction:W.af,Text:W.af,CSSPerspective:W.fV,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.bX,MSStyleCSSProperties:W.bX,CSS2Properties:W.bX,CSSImageValue:W.aa,CSSKeywordValue:W.aa,CSSNumericValue:W.aa,CSSPositionValue:W.aa,CSSResourceValue:W.aa,CSSUnitValue:W.aa,CSSURLImageValue:W.aa,CSSStyleValue:W.aa,CSSMatrixComponent:W.an,CSSRotation:W.an,CSSScale:W.an,CSSSkew:W.an,CSSTranslation:W.an,CSSTransformComponent:W.an,CSSTransformValue:W.fX,CSSUnparsedValue:W.fY,DataTransferItemList:W.fZ,DOMException:W.h_,ClientRectList:W.bZ,DOMRectList:W.bZ,DOMRectReadOnly:W.c_,DOMStringList:W.di,DOMTokenList:W.h0,Element:W.G,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aE,FileList:W.dj,FileWriter:W.dk,HTMLFormElement:W.dm,Gamepad:W.aF,History:W.hg,HTMLCollection:W.b3,HTMLFormControlsCollection:W.b3,HTMLOptionsCollection:W.b3,ImageData:W.b4,HTMLImageElement:W.bu,KeyboardEvent:W.b7,Location:W.hp,MediaList:W.hH,MIDIInputMap:W.dB,MIDIOutputMap:W.dC,MimeType:W.aH,MimeTypeArray:W.dD,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cm,RadioNodeList:W.cm,Plugin:W.aJ,PluginArray:W.dQ,RTCStatsReport:W.dV,HTMLSelectElement:W.dX,SourceBuffer:W.av,SourceBufferList:W.e0,SpeechGrammar:W.aM,SpeechGrammarList:W.e1,SpeechRecognitionResult:W.aN,Storage:W.e6,CSSStyleSheet:W.ai,StyleSheet:W.ai,TextTrack:W.aw,TextTrackCue:W.ad,VTTCue:W.ad,TextTrackCueList:W.ea,TextTrackList:W.eb,TimeRanges:W.i9,Touch:W.aO,TouchEvent:W.bf,TouchList:W.ef,TrackDefaultList:W.id,CompositionEvent:W.ay,FocusEvent:W.ay,TextEvent:W.ay,UIEvent:W.ay,URL:W.ir,VideoTrackList:W.ez,WheelEvent:W.aQ,Window:W.bH,DOMWindow:W.bH,CSSRuleList:W.eH,ClientRect:W.cC,DOMRect:W.cC,GamepadList:W.eU,NamedNodeMap:W.cG,MozNamedAttrMap:W.cG,SpeechRecognitionResultList:W.fc,StyleSheetList:W.fj,SVGLength:P.b8,SVGLengthList:P.dx,SVGNumber:P.bb,SVGNumberList:P.dL,SVGPointList:P.hN,SVGStringList:P.e9,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bg,SVGTransformList:P.eg,AudioBuffer:P.fM,AudioParamMap:P.d9,AudioTrackList:P.da,AudioContext:P.aC,webkitAudioContext:P.aC,BaseAudioContext:P.aC,OfflineAudioContext:P.dM,WebGL2RenderingContext:P.bC,SQLResultSetRowList:P.e2})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.ba.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
W.cM.$nativeSuperclassTag="EventTarget"
W.cN.$nativeSuperclassTag="EventTarget"
W.cP.$nativeSuperclassTag="EventTarget"
W.cQ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=K.ns
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
