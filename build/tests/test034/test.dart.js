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
a[c]=function(){a[c]=function(){H.nv(b)}
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
if(a[b]!==s)H.nw(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jz"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jz(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jf:function jf(){},
hU:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lO:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
n8:function(a,b,c){return a},
lt:function(a,b){if(t.V.b(a))return new H.c0(a,b)
return new H.b7(a,b)},
lm:function(){return new P.e2("No element")},
lN:function(a,b){H.dY(a,0,J.bl(a)-1,b)},
dY:function(a,b,c,d){if(c-b<=32)H.lM(a,b,c,d)
else H.lL(a,b,c,d)},
lM:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.fz(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ah()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
lL:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.Y(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.Y(a4+a5,2),f=g-j,e=g+j,d=J.fz(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.a2(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.dY(a3,a4,r-2,a6)
H.dY(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.a2(a6.$2(d.h(a3,r),b),0);)++r
for(;J.a2(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.dY(a3,r,q,a6)}else H.dY(a3,r,q,a6)},
dv:function dv(a){this.a=a},
J:function J(a){this.a=a},
j:function j(){},
bv:function bv(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
b7:function b7(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=b},
cd:function cd(a,b){this.a=null
this.b=a
this.c=b},
cB:function cB(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
c3:function c3(){},
es:function es(){},
bG:function bG(){},
kI:function(a){var s,r=H.kH(a)
if(r!=null)return r
s="minified:"+a
return s},
nm:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
t:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.fD(a)
return s},
co:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cp:function(a){return H.lw(a)},
lw:function(a){var s,r,q,p
if(a instanceof P.I)return H.a8(H.bP(a),null)
if(J.d2(a)===C.G||t.o.b(a)){s=C.l(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a8(H.bP(a),null)},
jW:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
lG:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.iR(q))throw H.c(H.iV(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.bc(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.iV(q))}return H.jW(p)},
lF:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.iR(q))throw H.c(H.iV(q))
if(q<0)throw H.c(H.iV(q))
if(q>65535)return H.lG(a)}return H.jW(a)},
lE:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.bc(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aJ(a,0,1114111,null,null))},
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
e:function(a,b){if(a==null)J.bl(a)
throw H.c(H.bN(a,b))},
bN:function(a,b){var s,r="index"
if(!H.iR(b))return new P.al(!0,b,r,null)
s=J.bl(a)
if(b<0||b>=s)return P.F(b,a,r,null,s)
return P.dR(b,r)},
nc:function(a,b,c){if(a>c)return P.aJ(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aJ(b,a,c,"end",null)
return new P.al(!0,b,"end",null)},
iV:function(a){return new P.al(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dJ()
s=new Error()
s.dartException=a
r=H.nx
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
nx:function(){return J.fD(this.dartException)},
f:function(a){throw H.c(a)},
o:function(a){throw H.c(P.aZ(a))},
av:function(a){var s,r,q,p,o,n
a=H.kE(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ib(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
ic:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
k6:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jg:function(a,b){var s=b==null,r=s?null:b.method
return new H.dt(a,r,s?null:b.receiver)},
fB:function(a){if(a==null)return new H.hF(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bj(a,a.dartException)
return H.n4(a)},
bj:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
n4:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bc(r,16)&8191)===10)switch(q){case 438:return H.bj(a,H.jg(H.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return H.bj(a,new H.cn(p,e))}}if(a instanceof TypeError){o=$.kR()
n=$.kS()
m=$.kT()
l=$.kU()
k=$.kX()
j=$.kY()
i=$.kW()
$.kV()
h=$.l_()
g=$.kZ()
f=o.ad(s)
if(f!=null)return H.bj(a,H.jg(s,f))
else{f=n.ad(s)
if(f!=null){f.method="call"
return H.bj(a,H.jg(s,f))}else{f=m.ad(s)
if(f==null){f=l.ad(s)
if(f==null){f=k.ad(s)
if(f==null){f=j.ad(s)
if(f==null){f=i.ad(s)
if(f==null){f=l.ad(s)
if(f==null){f=h.ad(s)
if(f==null){f=g.ad(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bj(a,new H.cn(s,f==null?e:f.method))}}return H.bj(a,new H.er(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cu()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bj(a,new P.al(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cu()
return a},
jB:function(a){var s
if(a==null)return new H.fc(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fc(a)},
ne:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nl:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nl)
a.$identity=s
return s},
lh:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.hS().constructor.prototype):Object.create(new H.bR(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.am
if(typeof r!=="number")return r.T()
$.am=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.jM(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.ld(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.jM(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
ld:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.kA,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lb:H.la
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
le:function(a,b,c,d){var s=H.jL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
jM:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lg(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.le(r,!p,s,b)
if(r===0){p=$.am
if(typeof p!=="number")return p.T()
$.am=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bS
return new Function(p+(o==null?$.bS=H.fM("self"):o)+";return "+n+"."+H.t(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.am
if(typeof p!=="number")return p.T()
$.am=p+1
m+=p
p="return function("+m+"){return this."
o=$.bS
return new Function(p+(o==null?$.bS=H.fM("self"):o)+"."+H.t(s)+"("+m+");}")()},
lf:function(a,b,c,d){var s=H.jL,r=H.lc
switch(b?-1:a){case 0:throw H.c(new H.dU("Intercepted function with no arguments."))
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
if(l==null)l=$.bS=H.fM("self")
s=$.jK
if(s==null)s=$.jK=H.fM("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lf(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.t(r)+"(this."+s+");"
n=$.am
if(typeof n!=="number")return n.T()
$.am=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.t(r)+"(this."+s+", "+m+");"
n=$.am
if(typeof n!=="number")return n.T()
$.am=n+1
return new Function(o+n+"}")()},
jz:function(a,b,c,d,e,f,g){return H.lh(a,b,c,d,!!e,!!f,g)},
la:function(a,b){return H.fo(v.typeUniverse,H.bP(a.a),b)},
lb:function(a,b){return H.fo(v.typeUniverse,H.bP(a.c),b)},
jL:function(a){return a.a},
lc:function(a){return a.c},
fM:function(a){var s,r,q,p=new H.bR("self","target","receiver","name"),o=J.je(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.j6("Field name "+a+" not found."))},
nv:function(a){throw H.c(new P.df(a))},
nh:function(a){return v.getIsolateTag(a)},
nw:function(a){return H.f(new H.dv(a))},
oF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
no:function(a){var s,r,q,p,o,n=$.kz.$1(a),m=$.iX[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j1[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.kw.$2(a,n)
if(q!=null){m=$.iX[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.j1[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.j2(s)
$.iX[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.j1[n]=s
return s}if(p==="-"){o=H.j2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kC(a,s)
if(p==="*")throw H.c(P.k7(n))
if(v.leafTags[n]===true){o=H.j2(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kC(a,s)},
kC:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jE(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
j2:function(a){return J.jE(a,!1,null,!!a.$iq)},
nq:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.j2(s)
else return J.jE(s,c,null,null)},
nj:function(){if(!0===$.jC)return
$.jC=!0
H.nk()},
nk:function(){var s,r,q,p,o,n,m,l
$.iX=Object.create(null)
$.j1=Object.create(null)
H.ni()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.kD.$1(o)
if(n!=null){m=H.nq(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ni:function(){var s,r,q,p,o,n,m=C.x()
m=H.bL(C.y,H.bL(C.z,H.bL(C.m,H.bL(C.m,H.bL(C.A,H.bL(C.B,H.bL(C.C(C.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.kz=new H.iZ(p)
$.kw=new H.j_(o)
$.kD=new H.j0(n)},
bL:function(a,b){return a(b)||b},
lq:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.h8("Illegal RegExp pattern ("+String(n)+")",a))},
kF:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nd:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kE:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kG:function(a,b,c){var s=H.nt(a,b,c)
return s},
nt:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kE(b),'g'),H.nd(c))},
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cn:function cn(a,b){this.a=a
this.b=b},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a){this.a=a},
hF:function hF(a){this.a=a},
fc:function fc(a){this.a=a
this.b=null},
bo:function bo(){},
hW:function hW(){},
hS:function hS(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dU:function dU(a){this.a=a},
O:function O(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hd:function hd(a){this.a=a},
hh:function hh(a,b){this.a=a
this.b=b
this.c=null},
aE:function aE(a){this.a=a},
dx:function dx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
hc:function hc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cY:function(a){return a},
ax:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bN(b,a))},
mj:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nc(a,b,c))
return b},
ck:function ck(){},
bz:function bz(){},
b8:function b8(){},
cj:function cj(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
cl:function cl(){},
dI:function dI(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
k0:function(a,b){var s=b.c
return s==null?b.c=H.js(a,b.z,!0):s},
k_:function(a,b){var s=b.c
return s==null?b.c=H.cU(a,"jP",[b.z]):s},
k1:function(a){var s=a.y
if(s===6||s===7||s===8)return H.k1(a.z)
return s===11||s===12},
lJ:function(a){return a.cy},
nf:function(a){return H.jt(v.typeUniverse,a,!1)},
aR:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aR(a,s,a0,a1)
if(r===s)return b
return H.kl(a,r,!0)
case 7:s=b.z
r=H.aR(a,s,a0,a1)
if(r===s)return b
return H.js(a,r,!0)
case 8:s=b.z
r=H.aR(a,s,a0,a1)
if(r===s)return b
return H.kk(a,r,!0)
case 9:q=b.Q
p=H.d1(a,q,a0,a1)
if(p===q)return b
return H.cU(a,b.z,p)
case 10:o=b.z
n=H.aR(a,o,a0,a1)
m=b.Q
l=H.d1(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jq(a,n,l)
case 11:k=b.z
j=H.aR(a,k,a0,a1)
i=b.Q
h=H.n1(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kj(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.d1(a,g,a0,a1)
o=b.z
n=H.aR(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jr(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fG("Attempted to substitute unexpected RTI kind "+c))}},
d1:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aR(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
n2:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aR(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
n1:function(a,b,c,d){var s,r=b.a,q=H.d1(a,r,c,d),p=b.b,o=H.d1(a,p,c,d),n=b.c,m=H.n2(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.eQ()
s.a=q
s.b=o
s.c=m
return s},
oH:function(a,b){a[v.arrayRti]=b
return a},
n9:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.kA(s)
return a.$S()}return null},
kB:function(a,b){var s
if(H.k1(b))if(a instanceof H.bo){s=H.n9(a)
if(s!=null)return s}return H.bP(a)},
bP:function(a){var s
if(a instanceof P.I){s=a.$ti
return s!=null?s:H.ju(a)}if(Array.isArray(a))return H.ko(a)
return H.ju(J.d2(a))},
ko:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
Q:function(a){var s=a.$ti
return s!=null?s:H.ju(a)},
ju:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mq(a,s)},
mq:function(a,b){var s=a instanceof H.bo?a.__proto__.__proto__.constructor:b,r=H.me(v.typeUniverse,s.name)
b.$ccache=r
return r},
kA:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jt(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mp:function(a){var s,r,q,p=this
if(p===t.K)return H.cZ(p,a,H.mu)
if(!H.ay(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.cZ(p,a,H.mx)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.iR
else if(r===t.i||r===t.H)q=H.mt
else if(r===t.N)q=H.mv
else q=r===t.w?H.jv:null
if(q!=null)return H.cZ(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.nn)){p.r="$i"+s
return H.cZ(p,a,H.mw)}}else if(s===7)return H.cZ(p,a,H.mn)
return H.cZ(p,a,H.ml)},
cZ:function(a,b,c){a.b=c
return a.b(b)},
mo:function(a){var s,r=this,q=H.mk
if(!H.ay(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.mi
else if(r===t.K)q=H.mg
else{s=H.d3(r)
if(s)q=H.mm}r.a=q
return r.a(a)},
jy:function(a){var s,r=a.y
if(!H.ay(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.jy(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ml:function(a){var s=this
if(a==null)return H.jy(s)
return H.H(v.typeUniverse,H.kB(a,s),null,s,null)},
mn:function(a){if(a==null)return!0
return this.z.b(a)},
mw:function(a){var s,r=this
if(a==null)return H.jy(r)
s=r.r
if(a instanceof P.I)return!!a[s]
return!!J.d2(a)[s]},
mk:function(a){var s,r=this
if(a==null){s=H.d3(r)
if(s)return a}else if(r.b(a))return a
H.kr(a,r)},
mm:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kr(a,s)},
kr:function(a,b){throw H.c(H.m4(H.ke(a,H.kB(a,b),H.a8(b,null))))},
ke:function(a,b,c){var s=P.h3(a),r=H.a8(b==null?H.bP(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
m4:function(a){return new H.cS("TypeError: "+a)},
a_:function(a,b){return new H.cS("TypeError: "+H.ke(a,null,b))},
mu:function(a){return a!=null},
mg:function(a){if(a!=null)return a
throw H.c(H.a_(a,"Object"))},
mx:function(a){return!0},
mi:function(a){return a},
jv:function(a){return!0===a||!1===a},
kp:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a_(a,"bool"))},
ou:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a_(a,"bool"))},
ot:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a_(a,"bool?"))},
ov:function(a){if(typeof a=="number")return a
throw H.c(H.a_(a,"double"))},
ox:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a_(a,"double"))},
ow:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a_(a,"double?"))},
iR:function(a){return typeof a=="number"&&Math.floor(a)===a},
iO:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a_(a,"int"))},
oz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a_(a,"int"))},
oy:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a_(a,"int?"))},
mt:function(a){return typeof a=="number"},
oA:function(a){if(typeof a=="number")return a
throw H.c(H.a_(a,"num"))},
oC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a_(a,"num"))},
oB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a_(a,"num?"))},
mv:function(a){return typeof a=="string"},
mh:function(a){if(typeof a=="string")return a
throw H.c(H.a_(a,"String"))},
oE:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a_(a,"String"))},
oD:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a_(a,"String?"))},
mY:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a8(a[q],b)
return s},
ks:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.e(a5,j)
m=C.d.T(m,a5[j])
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
if(l===9){p=H.n3(a.z)
o=a.Q
return o.length!==0?p+("<"+H.mY(o,b)+">"):p}if(l===11)return H.ks(a,b,null)
if(l===12)return H.ks(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
n3:function(a){var s,r=H.kH(a)
if(r!=null)return r
s="minified:"+a
return s},
km:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
me:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jt(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cV(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cU(a,b,q)
n[b]=o
return o}else return m},
mc:function(a,b){return H.kn(a.tR,b)},
mb:function(a,b){return H.kn(a.eT,b)},
jt:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.ki(H.kg(a,null,b,c))
r.set(b,s)
return s},
fo:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.ki(H.kg(a,b,c,!0))
q.set(c,r)
return r},
md:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jq(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aQ:function(a,b){b.a=H.mo
b.b=H.mp
return b},
cV:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ab(null,null)
s.y=b
s.cy=c
r=H.aQ(a,s)
a.eC.set(c,r)
return r},
kl:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.m9(a,b,r,c)
a.eC.set(r,s)
return s},
m9:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ay(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ab(null,null)
q.y=6
q.z=b
q.cy=c
return H.aQ(a,q)},
js:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.m8(a,b,r,c)
a.eC.set(r,s)
return s},
m8:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.ay(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.d3(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.d3(q.z))return q
else return H.k0(a,b)}}p=new H.ab(null,null)
p.y=7
p.z=b
p.cy=c
return H.aQ(a,p)},
kk:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.m6(a,b,r,c)
a.eC.set(r,s)
return s},
m6:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.ay(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cU(a,"jP",[b])
else if(b===t.P||b===t.T)return t.u}q=new H.ab(null,null)
q.y=8
q.z=b
q.cy=c
return H.aQ(a,q)},
ma:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ab(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aQ(a,s)
a.eC.set(q,r)
return r},
fn:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
m5:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cU:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fn(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ab(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aQ(a,r)
a.eC.set(p,q)
return q},
jq:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fn(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ab(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aQ(a,o)
a.eC.set(q,n)
return n},
kj:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fn(m)
if(j>0){s=l>0?",":""
r=H.fn(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.m5(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ab(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aQ(a,o)
a.eC.set(q,r)
return r},
jr:function(a,b,c,d){var s,r=b.cy+("<"+H.fn(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.m7(a,b,c,r,d)
a.eC.set(r,s)
return s},
m7:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aR(a,b,r,0)
m=H.d1(a,c,r,0)
return H.jr(a,n,m,c!==m)}}l=new H.ab(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aQ(a,l)},
kg:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ki:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.lZ(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kh(a,r,h,g,!1)
else if(q===46)r=H.kh(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aP(a.u,a.e,g.pop()))
break
case 94:g.push(H.ma(a.u,g.pop()))
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
H.jp(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cU(p,n,o))
else{m=H.aP(p,a.e,n)
switch(m.y){case 11:g.push(H.jr(p,m,o,a.n))
break
default:g.push(H.jq(p,m,o))
break}}break
case 38:H.m_(a,g)
break
case 42:p=a.u
g.push(H.kl(p,H.aP(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.js(p,H.aP(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.kk(p,H.aP(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.eQ()
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
H.jp(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.kj(p,H.aP(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.jp(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.m1(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aP(a.u,a.e,i)},
lZ:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kh:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.km(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.lJ(o)+'"')
d.push(H.fo(s,o,n))}else d.push(p)
return m},
m_:function(a,b){var s=b.pop()
if(0===s){b.push(H.cV(a.u,1,"0&"))
return}if(1===s){b.push(H.cV(a.u,4,"1&"))
return}throw H.c(P.fG("Unexpected extended operation "+H.t(s)))},
aP:function(a,b,c){if(typeof c=="string")return H.cU(a,c,a.sEA)
else if(typeof c=="number")return H.m0(a,b,c)
else return c},
jp:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aP(a,b,c[s])},
m1:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aP(a,b,c[s])},
m0:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.fG("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.fG("Bad index "+c+" for "+b.i(0)))},
H:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.ay(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.ay(b))return!1
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
if(p===6){s=H.k0(a,d)
return H.H(a,b,c,s,e)}if(r===8){if(!H.H(a,b.z,c,d,e))return!1
return H.H(a,H.k_(a,b),c,d,e)}if(r===7){s=H.H(a,t.P,c,d,e)
return s&&H.H(a,b.z,c,d,e)}if(p===8){if(H.H(a,b,c,d.z,e))return!0
return H.H(a,b,c,H.k_(a,d),e)}if(p===7){s=H.H(a,b,c,t.P,e)
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
if(!H.H(a,k,c,j,e)||!H.H(a,j,e,k,c))return!1}return H.kt(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.kt(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.ms(a,b,c,d,e)}return!1},
kt:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
ms:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.H(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.km(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.H(a,H.fo(a,b,l[p]),c,r[p],e))return!1
return!0},
d3:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.ay(a))if(r!==7)if(!(r===6&&H.d3(a.z)))s=r===8&&H.d3(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nn:function(a){var s
if(!H.ay(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ay:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kn:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
eQ:function eQ(){this.c=this.b=this.a=null},
eL:function eL(){},
cS:function cS(a){this.a=a},
kH:function(a){return v.mangledGlobalNames[a]},
nr:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iY:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jC==null){H.nj()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.k7("Return interceptor for "+H.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iD
if(o==null)o=$.iD=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.no(a)
if(p!=null)return p
if(typeof a=="function")return C.I
s=Object.getPrototypeOf(a)
if(s==null)return C.q
if(s===Object.prototype)return C.q
if(typeof q=="function"){o=$.iD
if(o==null)o=$.iD=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.i,enumerable:false,writable:true,configurable:true})
return C.i}return C.i},
ln:function(a){if(a<0||a>4294967295)throw H.c(P.aJ(a,0,4294967295,"length",null))
return J.lo(new Array(a))},
jd:function(a){if(a<0)throw H.c(P.j6("Length must be a non-negative integer: "+a))
return new Array(a)},
lo:function(a){return J.je(a)},
je:function(a){a.fixed$length=Array
return a},
lp:function(a,b){return J.l7(a,b)},
d2:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c7.prototype
return J.dr.prototype}if(typeof a=="string")return J.b3.prototype
if(a==null)return J.c8.prototype
if(typeof a=="boolean")return J.dq.prototype
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.I)return a
return J.iY(a)},
fz:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.I)return a
return J.iY(a)},
jA:function(a){if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.I)return a
return J.iY(a)},
ng:function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.I))return J.bF.prototype
return a},
bi:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aq.prototype
return a}if(a instanceof P.I)return a
return J.iY(a)},
a2:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d2(a).n(a,b)},
l4:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nm(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fz(a).h(a,b)},
l5:function(a,b,c){return J.bi(a).fb(a,b,c)},
l6:function(a,b,c,d){return J.bi(a).ft(a,b,c,d)},
l7:function(a,b){return J.ng(a).ab(a,b)},
j4:function(a,b){return J.jA(a).B(a,b)},
j5:function(a,b){return J.jA(a).F(a,b)},
l8:function(a){return J.bi(a).gcZ(a)},
l9:function(a){return J.bi(a).gd0(a)},
fC:function(a){return J.d2(a).gC(a)},
az:function(a){return J.jA(a).gK(a)},
bl:function(a){return J.fz(a).gj(a)},
jJ:function(a,b){return J.bi(a).h2(a,b)},
fD:function(a){return J.d2(a).i(a)},
a:function a(){},
dq:function dq(){},
c8:function c8(){},
b4:function b4(){},
dO:function dO(){},
bF:function bF(){},
aq:function aq(){},
ah:function ah(){},
ds:function ds(){},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bu:function bu(){},
c7:function c7(){},
dr:function dr(){},
b3:function b3(){}},P={
lS:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.n5()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bM(new P.iz(q),1)).observe(s,{childList:true})
return new P.iy(q,s,r)}else if(self.setImmediate!=null)return P.n6()
return P.n7()},
lT:function(a){self.scheduleImmediate(H.bM(new P.iA(a),0))},
lU:function(a){self.setImmediate(H.bM(new P.iB(a),0))},
lV:function(a){P.jk(C.h,a)},
jk:function(a,b){var s=C.b.Y(a.a,1000)
return P.m2(s<0?0:s,b)},
k5:function(a,b){var s=C.b.Y(a.a,1000)
return P.m3(s<0?0:s,b)},
m2:function(a,b){var s=new P.cR()
s.dS(a,b)
return s},
m3:function(a,b){var s=new P.cR()
s.dT(a,b)
return s},
or:function(a){return new P.bI(a,1)},
lW:function(){return C.N},
lX:function(a){return new P.bI(a,3)},
mz:function(a){return new P.cO(a)},
mV:function(){var s,r
for(s=$.bK;s!=null;s=$.bK){$.d0=null
r=s.b
$.bK=r
if(r==null)$.d_=null
s.a.$0()}},
n0:function(){$.jw=!0
try{P.mV()}finally{$.d0=null
$.jw=!1
if($.bK!=null)$.jI().$1(P.kx())}},
mZ:function(a){var s=new P.eA(a),r=$.d_
if(r==null){$.bK=$.d_=s
if(!$.jw)$.jI().$1(P.kx())}else $.d_=r.b=s},
n_:function(a){var s,r,q,p=$.bK
if(p==null){P.mZ(a)
$.d0=$.d_
return}s=new P.eA(a)
r=$.d0
if(r==null){s.b=p
$.bK=$.d0=s}else{q=r.b
s.b=q
$.d0=r.b=s
if(q==null)$.d_=s}},
k4:function(a,b){var s=$.aj
if(s===C.e)return P.jk(a,b)
return P.jk(a,s.fz(b))},
lQ:function(a,b){var s=$.aj
if(s===C.e)return P.k5(a,b)
return P.k5(a,s.cW(b,t.r))},
ku:function(a,b,c,d,e){P.n_(new P.iU(d,e))},
mW:function(a,b,c,d){var s,r=$.aj
if(r===c)return d.$0()
$.aj=c
s=r
try{r=d.$0()
return r}finally{$.aj=s}},
mX:function(a,b,c,d,e){var s,r=$.aj
if(r===c)return d.$1(e)
$.aj=c
s=r
try{r=d.$1(e)
return r}finally{$.aj=s}},
iz:function iz(a){this.a=a},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
cR:function cR(){this.c=0},
iK:function iK(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c,d){var _=this
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
eA:function eA(a){this.a=a
this.b=null},
e4:function e4(){},
e5:function e5(){},
iM:function iM(){},
iU:function iU(a,b){this.a=a
this.b=b},
iG:function iG(){},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
lr:function(a,b,c){return H.ne(a,new H.O(b.am("@<0>").cq(c).am("O<1,2>")))},
L:function(a,b){return new H.O(a.am("@<0>").cq(b).am("O<1,2>"))},
jR:function(a){return new P.cD(a.am("cD<0>"))},
jo:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
lY:function(a,b){var s=new P.cE(a,b)
s.c=a.e
return s},
ll:function(a,b,c){var s,r
if(P.jx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a4.push(a)
try{P.my(a,s)}finally{if(0>=$.a4.length)return H.e($.a4,-1)
$.a4.pop()}r=P.k2(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jc:function(a,b,c){var s,r
if(P.jx(a))return b+"..."+c
s=new P.bd(b)
$.a4.push(a)
try{r=s
r.a=P.k2(r.a,a,", ")}finally{if(0>=$.a4.length)return H.e($.a4,-1)
$.a4.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jx:function(a){var s,r
for(s=$.a4.length,r=0;r<s;++r)if(a===$.a4[r])return!0
return!1},
my:function(a,b){var s,r,q,p,o,n,m,l=a.gK(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.t(l.gE(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gE(l);++j
if(!l.t()){if(j<=4){b.push(H.t(p))
return}r=H.t(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE(l);++j
for(;l.t();p=o,o=n){n=l.gE(l);++j
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
jS:function(a){var s,r={}
if(P.jx(a))return"{...}"
s=new P.bd("")
try{$.a4.push(a)
s.a+="{"
r.a=!0
J.j5(a,new P.hm(r,s))
s.a+="}"}finally{if(0>=$.a4.length)return H.e($.a4,-1)
$.a4.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cD:function cD(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iF:function iF(a){this.a=a
this.c=this.b=null},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c6:function c6(){},
ca:function ca(){},
A:function A(){},
cc:function cc(){},
hm:function hm(a,b){this.a=a
this.b=b},
S:function S(){},
dW:function dW(){},
cL:function cL(){},
cF:function cF(){},
cW:function cW(){},
dc:function dc(){},
de:function de(){},
h0:function h0(){},
io:function io(){},
ip:function ip(){},
iL:function iL(a){this.b=0
this.c=a},
lk:function(a){if(a instanceof H.bo)return a.i(0)
return"Instance of '"+H.cp(a)+"'"},
hi:function(a,b,c){var s,r=c?J.jd(a):J.ln(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hj:function(a,b){var s,r=[]
for(s=J.az(a);s.t();)r.push(s.gE(s))
if(b)return r
return J.je(r)},
ls:function(a,b){var s,r,q=J.jd(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
jj:function(a){var s=a,r=s.length,q=P.jh(0,null,r)
return H.lF(q<r?s.slice(0,q):s)},
lH:function(a){return new H.hc(a,H.lq(a,!1,!0,!1,!1,!1))},
k2:function(a,b,c){var s=J.az(b)
if(!s.t())return a
if(c.length===0){do a+=H.t(s.gE(s))
while(s.t())}else{a+=H.t(s.gE(s))
for(;s.t();)a=a+c+H.t(s.gE(s))}return a},
mf:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.n){s=$.l3().b
s=s.test(b)}else s=!1
if(s)return b
r=C.E.fC(b)
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
dg:function(a){if(a>=10)return""+a
return"0"+a},
jN:function(a){return new P.b0(1000*a)},
h3:function(a){if(typeof a=="number"||H.jv(a)||null==a)return J.fD(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lk(a)},
fG:function(a){return new P.d8(a)},
j6:function(a){return new P.al(!1,null,null,a)},
dR:function(a,b){return new P.cq(null,null,!0,a,b,"Value not in range")},
aJ:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
jh:function(a,b,c){if(a>c)throw H.c(P.aJ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aJ(b,a,c,"end",null))
return b}return c},
jX:function(a,b){if(a<0)throw H.c(P.aJ(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bl(b):e
return new P.dn(s,!0,a,c,"Index out of range")},
v:function(a){return new P.et(a)},
k7:function(a){return new P.eq(a)},
aZ:function(a){return new P.dd(a)},
d:function(a){return new P.eN(a)},
jG:function(a){H.nr(a)},
N:function N(a,b){this.a=a
this.b=b},
b0:function b0(a){this.a=a},
fY:function fY(){},
fZ:function fZ(){},
C:function C(){},
d8:function d8(a){this.a=a},
ee:function ee(){},
dJ:function dJ(){},
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
dn:function dn(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
et:function et(a){this.a=a},
eq:function eq(a){this.a=a},
e2:function e2(a){this.a=a},
dd:function dd(a){this.a=a},
dM:function dM(){},
cu:function cu(){},
df:function df(a){this.a=a},
eN:function eN(a){this.a=a},
h8:function h8(a,b){this.a=a
this.b=b},
h:function h(){},
dp:function dp(){},
aa:function aa(){},
I:function I(){},
bd:function bd(a){this.a=a},
nb:function(a){var s,r,q,p
if(t.I.b(a)){s=J.l9(a)
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
na:function(a){if(a instanceof P.cT)return{data:a.a,height:a.b,width:a.c}
return a},
aS:function(a){var s,r,q,p,o
if(a==null)return null
s=P.L(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
kq:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jv(a))return a
if(t.f.b(a))return P.ky(a)
if(t.d.b(a)){s=[]
J.j5(a,new P.iP(s))
a=s}return a},
ky:function(a){var s={}
J.j5(a,new P.iW(s))
return s},
j9:function(){var s=window.navigator.userAgent
s.toString
return s},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
iW:function iW(a){this.a=a},
dk:function dk(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(){},
f5:function f5(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b6:function b6(){},
dw:function dw(){},
b9:function b9(){},
dK:function dK(){},
hH:function hH(){},
e6:function e6(){},
k:function k(){},
bf:function bf(){},
ed:function ed(){},
eU:function eU(){},
eV:function eV(){},
f1:function f1(){},
f2:function f2(){},
fe:function fe(){},
ff:function ff(){},
fl:function fl(){},
fm:function fm(){},
fJ:function fJ(){},
d9:function d9(){},
fK:function fK(a){this.a=a},
da:function da(){},
aA:function aA(){},
dL:function dL(){},
eB:function eB(){},
bC:function bC(){},
e0:function e0(){},
fa:function fa(){},
fb:function fb(){}},W={
j7:function(){var s=document.createElement("canvas")
s.toString
return s},
h_:function(a){return"wheel"},
jQ:function(a){var s=document.createElement("img")
s.src=a
return s},
iE:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kf:function(a,b,c,d){var s=W.iE(W.iE(W.iE(W.iE(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
T:function(a,b,c,d){var s=W.kv(new W.iC(c),t.B)
if(s!=null&&!0)J.l6(a,b,s,!1)
return new W.eM(a,b,s,!1)},
kv:function(a,b){var s=$.aj
if(s===C.e)return a
return s.cW(a,b)},
l:function l(){},
fE:function fE(){},
d6:function d6(){},
d7:function d7(){},
db:function db(){},
aY:function aY(){},
bV:function bV(){},
ae:function ae(){},
fR:function fR(){},
B:function B(){},
bq:function bq(){},
fS:function fS(){},
a9:function a9(){},
an:function an(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
bZ:function bZ(){},
c_:function c_(){},
dh:function dh(){},
fX:function fX(){},
eD:function eD(a,b){this.a=a
this.b=b},
G:function G(){},
i:function i(){},
b:function b(){},
aC:function aC(){},
di:function di(){},
dj:function dj(){},
dl:function dl(){},
aD:function aD(){},
ha:function ha(){},
b1:function b1(){},
b2:function b2(){},
bt:function bt(){},
b5:function b5(){},
hk:function hk(){},
hB:function hB(){},
dA:function dA(){},
hC:function hC(a){this.a=a},
dB:function dB(){},
hD:function hD(a){this.a=a},
aF:function aF(){},
dC:function dC(){},
a6:function a6(){},
eC:function eC(a){this.a=a},
r:function r(){},
cm:function cm(){},
aH:function aH(){},
dP:function dP(){},
dT:function dT(){},
hM:function hM(a){this.a=a},
dV:function dV(){},
at:function at(){},
dZ:function dZ(){},
aK:function aK(){},
e_:function e_(){},
aL:function aL(){},
e3:function e3(){},
hT:function hT(a){this.a=a},
ai:function ai(){},
au:function au(){},
ac:function ac(){},
e7:function e7(){},
e8:function e8(){},
i5:function i5(){},
aM:function aM(){},
be:function be(){},
ec:function ec(){},
i9:function i9(){},
aw:function aw(){},
im:function im(){},
ew:function ew(){},
aO:function aO(){},
bH:function bH(){},
eE:function eE(){},
cC:function cC(){},
eR:function eR(){},
cG:function cG(){},
f9:function f9(){},
fg:function fg(){},
ja:function ja(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iC:function iC(a){this.a=a},
jn:function jn(a){this.$ti=a},
D:function D(){},
c4:function c4(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eO:function eO(){},
eP:function eP(){},
eS:function eS(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f3:function f3(){},
f4:function f4(){},
f6:function f6(){},
cM:function cM(){},
cN:function cN(){},
f7:function f7(){},
f8:function f8(){},
fd:function fd(){},
fh:function fh(){},
fi:function fi(){},
cP:function cP(){},
cQ:function cQ(){},
fj:function fj(){},
fk:function fk(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){}},K={fF:function fF(){},dm:function dm(){},aG:function aG(a){this.a=a},P:function P(a){this.a=a}},L={e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},eb:function eb(a,b){this.b=a
this.c=b},i7:function i7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},ia:function ia(a,b){this.b=a
this.c=!1
this.a=b}},O={
j8:function(){return new O.bp([])},
bp:function bp(a){this.a=a
this.c=this.b=null},
ci:function ci(a){this.a=a
this.b=null},
dz:function(a,b){return new O.cg(new V.R(0,0,0),a,b,new A.af(!1,!1,!1))},
dy:function dy(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(){},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(){},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(){},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(){},
hn:function hn(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cf:function cf(){},
ho:function ho(a,b,c){var _=this
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
hq:function hq(a){this.b=a},
hr:function hr(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hs:function hs(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
dX:function dX(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
hX:function hX(){}},E={
jO:function(){var s=O.j8(),r=new E.br(s)
s.aS(r.gfP(),r.gfS())
r.sbq(0,null)
return r},
kc:function(){var s=window.navigator.vendor
s.toString
if(C.d.H(s,"Google"))return C.v
s=window.navigator.userAgent
s.toString
if(C.d.H(s,"Firefox"))return C.j
s=window.navigator.appVersion
s.toString
if(C.d.H(s,"Trident")||C.d.H(s,"Edge"))return C.k
s=window.navigator.appName
s.toString
if(C.d.H(s,"Microsoft"))return C.k
return C.w},
kd:function(){var s=window.navigator.appVersion
s.toString
if(C.d.H(s,"Win"))return C.K
if(C.d.H(s,"Mac"))return C.p
if(C.d.H(s,"Linux"))return C.L
return C.M},
lI:function(a,b){var s
Date.now()
s=new E.hI(a,new P.N(Date.now(),!1),new P.N(Date.now(),!1),new O.ci([]),new O.ci([]),new O.ci([]),[null],P.L(t.N,t.k))
s.dR(a,b)
return s},
lP:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.k3(a,!0,!0,!0,!1)
s=W.j7()
r=s.style
r.width="100%"
r.height="100%"
J.l8(a).l(0,s)
return E.k3(s,!0,!0,!0,!1)},
k3:function(a,b,c,d,e){var s,r,q,p,o,n,m="mousemove",l=t.z,k=t.ba.a(C.f.cd(a,"webgl2",P.lr(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],l,l)))
if(k==null)throw H.c(P.d("Failed to get the rendering context for WebGL."))
s=E.lI(k,a)
l=H.iO(k.getParameter(3379))
r=H.iO(k.getParameter(34076))
q=[]
p=$.h1
o=new X.eu(a,q,(p==null?$.h1=new E.eK(E.kc(),E.kd()):p).a===C.j?0.16666666666666666:0.005555555555555556)
n=document
n.toString
q.push(W.T(n,"contextmenu",o.gew(),!1))
q.push(W.T(a,"focus",o.geC(),!1))
q.push(W.T(a,"blur",o.gep(),!1))
q.push(W.T(n,"keyup",o.geG(),!1))
q.push(W.T(n,"keydown",o.geE(),!1))
q.push(W.T(a,"mousedown",o.geK(),!1))
q.push(W.T(a,"mouseup",o.geO(),!1))
q.push(W.T(a,m,o.geM(),!1))
W.h_(a)
W.h_(a)
q.push(W.T(a,W.h_(a),o.geQ(),!1))
q.push(W.T(n,m,o.gey(),!1))
q.push(W.T(n,"mouseup",o.geA(),!1))
q.push(W.T(n,"pointerlockchange",o.geS(),!1))
q.push(W.T(a,"touchstart",o.gf7(),!1))
q.push(W.T(a,"touchend",o.gf3(),!1))
q.push(W.T(a,"touchmove",o.gf5(),!1))
r=new E.e9(a,s,new T.i1(k,l,r),o,new P.N(Date.now(),!1))
r.cI()
return r},
fL:function fL(){},
br:function br(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bm:function bm(a){this.b=a},
bA:function bA(a){this.b=a},
eK:function eK(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c,d,e,f,g,h){var _=this
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
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
e9:function e9(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
i4:function i4(a){this.a=a}},Z={
jm:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cY(c)),35044)
a.bindBuffer(b,null)
return new Z.ex(b,s)},
ad:function(a){return new Z.aN(a)},
ex:function ex(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ey:function ey(a){this.a=a},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c5:function c5(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a){this.a=a}},D={
z:function(){return new D.c2()},
fN:function fN(){},
c2:function c2(){var _=this
_.c=_.b=_.a=null
_.d=0},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
K:function K(){},
ao:function ao(){},
ap:function ap(){},
w:function w(a,b,c){this.c=a
this.d=b
this.e=c},
c9:function c9(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={bU:function bU(a,b){this.a=a
this.b=b},du:function du(a,b){this.a=a
this.b=b},he:function he(a,b){this.c=a
this.d=b},cb:function cb(a,b,c){this.x=a
this.c=b
this.d=c},hl:function hl(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},X:function X(a,b,c){this.a=a
this.b=b
this.c=c},bx:function bx(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},hE:function hE(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},by:function by(a,b,c){this.x=a
this.c=b
this.d=c},dQ:function dQ(){},cv:function cv(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},i8:function i8(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eu:function eu(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
jb:function(a){var s=new V.aB(0,0,0,1),r=$.jZ
if(r==null){r=V.jY(0,0,1,1)
$.jZ=r}return new X.h9(s,r)},
jV:function(a){var s,r,q=new X.dN(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gm().l(0,q.gdU())
q.al(new D.w("mover",s,q.b))}r=q.c
$.x().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.al(new D.w("fov",r,1.0471975511965976))}r=q.d
$.x().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.al(new D.w("near",r,0.1))}r=q.e
$.x().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.al(new D.w("far",r,2000))}return q},
h9:function h9(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
hb:function hb(){this.b=null},
dN:function dN(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
hV:function hV(){}},V={
fO:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aB(s,r,q,1)},
jD:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
ny:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.c.dG(a-b,s)
return(a<0?a+s:a)+b},
u:function(a,b,c){$.x().toString
return C.d.ae(C.c.cb(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bO:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.x().toString
n=C.d.ae(C.c.cb(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.e(l,m)
s=C.d.ae(l[m],q)
r=l.length
if(m>=r)return H.e(l,m)
l[m]=s}return l},
jF:function(a){return C.c.h8(Math.pow(2,C.c.c0(Math.log(a)/Math.log(2))))},
a5:function(){var s=$.jU
return s==null?$.jU=V.ar(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ar:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lv:function(){var s=$.as
return s==null?$.as=new V.V(0,0,0):s},
jY:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dS(a,b,c,d)},
ev:function(){var s=$.kb
return s==null?$.kb=new V.E(0,0,0):s},
k8:function(a,b,c){return new V.E(a,b,c)},
lR:function(a){return new V.E(a.a,a.b,a.c)},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(){},
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
bw:function bw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
M:function M(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function(a){P.lQ(C.F,new V.j3(a))},
lK:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.T(n,"scroll",new V.hR(s),!1)
return new V.hP(o)},
j3:function j3(a){this.a=a},
hP:function hP(a){this.a=a
this.b=null},
hR:function hR(a){this.a=a},
hQ:function hQ(a){this.a=a}},U={
fQ:function(){return new U.fP()},
fP:function fP(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
bX:function bX(a){this.a=a
this.b=null},
bs:function bs(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
Y:function Y(){},
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
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},bY:function bY(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},c1:function c1(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},
np:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="modifiers",a7=34067,a8=V.lK("Test 034"),a9=W.j7()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9).toString
a8.cQ(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."])
a8.cQ(["\xab[Back to Tests|../]"])
a8=document
a9=a8.getElementById(a4)
if(a9==null)throw H.c(P.d("Failed to find test canvas"))
s=a9.style
s.width="100%"
s.height="100%"
s.margin="-4px"
r=a8.createElement("div")
s=r.style
s.border="2px solid"
s.padding="10px"
C.o.fe(s,C.o.e0(s,"resize"),"both","")
s.overflow="auto"
J.jJ(a9,r)
r.children.toString
r.appendChild(a9).toString
q=a8.getElementById(a4)
if(q==null)H.f(P.d("Failed to find an element with the identifier, testCanvas."))
p=E.lP(q,!0,!0,!0,!1)
o=new U.bs(V.a5(),[])
o.aS(o.geh(),o.geW())
a8=p.x
s=U.fQ()
n=U.fQ()
m=$.bg
if(m==null)m=$.bg=new V.W(0,0)
m=new U.cy(s,n,new X.X(!1,!1,!1),m,V.a5())
s.scc(0,!0)
s.sc5(6.283185307179586)
s.sc7(0)
s.sa4(0,0)
s.sc6(100)
s.sS(0)
s.sbR(0.5)
l=m.gaG()
s.gm().l(0,l)
n.scc(0,!0)
n.sc5(6.283185307179586)
n.sc7(0)
n.sa4(0,0)
n.sc6(100)
n.sS(0)
n.sbR(0.5)
n.gm().l(0,l)
s=new X.X(!1,!1,!1)
if(!m.d.n(0,s)){k=m.d
m.d=s
m.I(new D.w(a6,k,s))}m.b1(a8)
o.l(0,m)
U.fQ()
if($.bg==null)$.bg=new V.W(0,0)
V.a5()
s=U.fQ()
n=$.bg
if(n==null)n=$.bg=new V.W(0,0)
n=new U.cx(s,new X.X(!1,!1,!1),n,V.a5())
s.scc(0,!0)
s.sc5(6.283185307179586)
s.sc7(0)
s.sa4(0,0)
s.sc6(100)
s.sS(0)
s.sbR(0.2)
s.gm().l(0,n.gaG())
s=new X.X(!0,!1,!1)
if(!n.c.n(0,s)){k=n.c
n.c=s
n.I(new D.w(a6,k,s))}n.b1(a8)
o.l(0,n)
s=new X.X(!1,!1,!1)
n=new U.cz(s,V.a5())
m=new X.X(!1,!1,!1)
if(!s.n(0,m)){n.b=m
n.I(new D.w(a6,s,m))}n.b1(a8)
o.l(0,n)
j=V.ar(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
a8=V.a5()
s=new U.bX(a8)
if(!a8.n(0,j))s.a=j
o.l(0,s)
i=X.jV(o)
a8=O.j8()
h=new O.dy(a8)
a8.aS(h.gel(),h.gen())
a8=h.dx
if(a8==null){a8=new D.c9([],[],[],[],[])
a8.ce(a8.gej(),a8.geU(),a8.geY())
a8.gm().l(0,h.gcG())
a8.gdt().l(0,h.gap())
h.dx=a8}a8.gm().l(0,h.gcG())
a8.gdt().l(0,h.gap())
a8=h.gcS()
a8.saJ(0,new V.R(0.3,0.3,0.3))
a8=h.gbS()
a8.saJ(0,new V.R(0.8,0.8,0.8))
a8=h.gbS()
s=p.f
n=s.fN("../resources/Test.png")
m=a8.c
if(!m.b)a8.cL(new A.af(m.a,!0,!1))
m=a8.d
if(m!==n){if(m!=null)m.gm().L(0,a8.gap())
k=a8.d
a8.d=n
n.gm().l(0,a8.gap())
a8.a.M(new D.w(a8.b+".texture2D",k,a8.d))}g=X.jb(a5)
if(g.b){g.b=!1
g.al(new D.w("clearColor",!0,!1))}f=E.jO()
e=F.ji()
F.cX(e,a5,a5,1,1,1,0,0,1)
F.cX(e,a5,a5,1,1,0,1,0,3)
F.cX(e,a5,a5,1,1,0,0,1,2)
F.cX(e,a5,a5,1,1,-1,0,0,0)
F.cX(e,a5,a5,1,1,0,-1,0,0)
F.cX(e,a5,a5,1,1,0,0,-1,3)
e.au()
f.sbq(0,e)
a8=O.j8()
d=new M.c1(a8)
a8.aS(d.ger(),d.geu())
c=X.jb(a5)
d.sb2(a5)
d.sb6(0,c)
d.sb7(a5)
a8.l(0,f)
d.sb7(h)
d.sb6(0,g)
d.sb2(i)
a8=s.a
n=a8.createTexture()
n.toString
a8.bindTexture(a7,n)
a8.texParameteri(a7,10242,10497)
a8.texParameteri(a7,10243,10497)
a8.texParameteri(a7,10241,9729)
a8.texParameteri(a7,10240,9729)
a8.bindTexture(a7,a5)
b=new T.i0(n)
s.aF(b,n,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.aF(b,n,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.aF(b,n,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.aF(b,n,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.aF(b,n,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.aF(b,n,"../resources/maskonaive/negz.jpg",34074,!1,!1)
n=E.jO()
a=new M.bY(n)
e=F.ji()
s=e.gW()
a8=new V.E(-1,-1,1).J()
a0=s.bf(new V.aI(1,2,4,6),V.fO(255,0,0),new V.V(-1,-1,0),new V.M(0,1),a8,a5)
a8=e.gW()
s=new V.E(1,-1,1).J()
a1=a8.bf(new V.aI(0,3,4,6),V.fO(0,0,255),new V.V(1,-1,0),new V.M(1,1),s,a5)
s=e.gW()
a8=new V.E(1,1,1).J()
a2=s.bf(new V.aI(0,2,5,6),V.fO(0,128,0),new V.V(1,1,0),new V.M(1,0),a8,a5)
a8=e.gW()
s=$.Z
if(s==null)s=$.Z=new V.M(0,0)
m=new V.E(-1,1,1).J()
a3=a8.bf(new V.aI(0,2,4,7),V.fO(255,255,0),new V.V(-1,1,0),s,m,a5)
e.gU().fu([a0,a1,a2,a3])
e.au()
n.sbq(0,e)
a.sb2(a5)
a.sb6(0,a5)
a.sb7(a5)
a8=new O.dX(new V.R(1,1,1))
k=a8.c
a8.c=b
b.gm().l(0,a8.gap())
a8.M(new D.w("boxTexture",k,a8.c))
a.sb7(a8)
a.sb6(0,g)
a.sb2(i)
a8=new M.bW([])
a8.aS(a8.gf_(),a8.gf1())
a8.be(0,[a,d])
s=p.d
if(s!==a8){if(s!=null)s.gm().L(0,p.gcl())
p.d=a8
a8.gm().l(0,p.gcl())
p.cm()}V.ns(p)}},A={
lu:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gak(a5)+a6.gak(a6)+a7.gak(a7)+a8.gak(a8)+a9.gak(a9)+b0.gak(b0)+b1.gak(b1)+b2.gak(b2)+b3.gak(b3)+"_"
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
b=$.ak()
if(h){s=$.aV()
b=new Z.aN(b.a|s.a)}if(g)b=new Z.aN(b.a|$.aU().a)
if(f)b=new Z.aN(b.a|$.aW().a)
if(e)b=new Z.aN(b.a|$.aT().a)
return new A.hp(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
iS:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
iT:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.iS(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fA(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
mE:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.iS(b,r,"emission")
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
mA:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.iT(b,r,"ambient")
b.a+="\n"},
mC:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.iT(b,r,"diffuse")
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
mF:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.iT(b,r,"invDiffuse")
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
mL:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.iT(b,r,"specular")
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
mH:function(a,b){var s,r,q
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
mJ:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.iS(b,r,"reflect")
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
mK:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.iS(b,r,"refract")
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
mB:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.fA(r)
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
mD:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.fA(r)
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
mI:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.fA(r)
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
mM:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.fA(r)
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
if(m){s=$.h1
if(s==null)s=$.h1=new E.eK(E.kc(),E.kd())
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
mG:function(a,b){var s,r
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
s=b.a+="   return "+C.a.p(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
mN:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.bd(""),j=""+"precision mediump float;\n"
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
A.mE(a,k)
A.mA(a,k)
A.mC(a,k)
A.mF(a,k)
A.mL(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.mJ(a,k)
A.mK(a,k)}A.mH(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mB(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mD(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mI(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.o)(p),++n)A.mM(a,p[n],k)
A.mG(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.e(q,0)
k.a+=l+(q[0].toUpperCase()+C.d.aW(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.e(q,0)
k.a+=l+(q[0].toUpperCase()+C.d.aW(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.e(q,0)
k.a+=l+(q[0].toUpperCase()+C.d.aW(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.o)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.e(q,0)
k.a+=l+(q[0].toUpperCase()+C.d.aW(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.a.p(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
mO:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aK+"];\n"
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
mQ:function(a,b){var s
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
mP:function(a,b){var s
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
mS:function(a,b){var s,r
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
mT:function(a,b){var s,r
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
mR:function(a,b){var s
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
mU:function(a,b){var s
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
fA:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.d.aW(a,1)},
jl:function(a,b,c,d,e){var s=new A.ie([],a,c,e)
s.f=d
s.e=P.hi(d,0,!1)
return s},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.hn=_.dm=_.dl=_.hm=_.dk=_.dj=_.di=_.hl=_.dh=_.dg=_.df=_.hk=_.de=_.dd=_.hj=_.dc=_.da=_.d9=_.aL=_.aK=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.bT=c
_.bU=d
_.bV=e
_.bW=f
_.bX=g
_.bY=h
_.bZ=i
_.c_=j
_.hq=_.hp=_.ho=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
aX:function aX(a,b){this.a=a
this.b=b},
b_:function b_(a,b){this.a=a
this.b=b},
ba:function ba(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
hp:function hp(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aK=b5
_.aL=b6
_.d9=b7},
ei:function ei(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ej:function ej(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
em:function em(a,b,c,d,e,f,g,h,i,j){var _=this
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
ep:function ep(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
id:function id(){},
ik:function ik(a){this.a=a},
cw:function cw(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ef:function ef(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
eg:function eg(a,b,c){this.a=a
this.c=b
this.d=c},
eh:function eh(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){this.a=a
this.c=b
this.d=c},
ek:function ek(a,b,c){this.a=a
this.c=b
this.d=c},
el:function el(a,b,c){this.a=a
this.c=b
this.d=c},
en:function en(a,b,c){this.a=a
this.c=b
this.d=c},
eo:function eo(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iQ:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
cX:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.E(g,f+a2,e+a3)
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
i.d=h}k=F.iQ(h)
j=F.iQ(g)
a.fO(F.nu(a0,a1,new F.iN(i,F.iQ(f),F.iQ(e),j,k,c),b))},
nu:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.c(P.d("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.d("Must have 1 or more divisions of the height for a surface."))
s=F.ji()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.p(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.iq(e,e,new V.aB(n,0,0,1),e,e,new V.M(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bQ(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.p(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.iq(e,e,new V.aB(h,g,f,1),e,e,new V.M(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bQ(d))}}s.gU().fv(a+1,b+1,r)
return s},
ji:function(){return new F.hN()},
iq:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cA()
h=$.l0()
s=$.ak()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.aV().a)!==0)q.r=e
if((r&$.aU().a)!==0)q.x=b
if((r&$.aW().a)!==0)q.y=f
if((r&$.bk().a)!==0)q.z=g
if((r&$.l1().a)!==0)q.Q=c
if((r&$.bQ().a)!==0)q.ch=i
if((r&$.aT().a)!==0)q.cx=a
return q},
iN:function iN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(){this.b=this.a=null},
hG:function hG(){this.a=null},
hN:function hN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a,b,c,d,e,f,g){var _=this
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
ix:function ix(a){this.a=a},
iw:function iw(a){this.a=a},
p:function p(a,b){this.a=a
this.b=!1
this.c=b},
ir:function ir(a,b,c){this.b=a
this.c=b
this.d=c},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.b=a
this.c=b},
iv:function iv(a){this.b=a}},T={hY:function hY(){},hZ:function hZ(){},i_:function i_(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},i0:function i0(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},i1:function i1(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=0},i3:function i3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},i2:function i2(a,b,c,d,e,f,g){var _=this
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
H.jf.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gC:function(a){return H.co(a)},
i:function(a){return"Instance of '"+H.cp(a)+"'"}}
J.dq.prototype={
i:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$ibh:1}
J.c8.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gC:function(a){return 0}}
J.b4.prototype={
gC:function(a){return 0},
i:function(a){return String(a)}}
J.dO.prototype={}
J.bF.prototype={}
J.aq.prototype={
i:function(a){var s=a[$.kL()]
if(s==null)return this.dN(a)
return"JavaScript function for "+J.fD(s)}}
J.ah.prototype={
L:function(a,b){var s
if(!!a.fixed$length)H.f(P.v("remove"))
for(s=0;s<a.length;++s)if(J.a2(a[s],b)){a.splice(s,1)
return!0}return!1},
be:function(a,b){if(!!a.fixed$length)H.f(P.v("addAll"))
this.dX(a,b)
return},
dX:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.aZ(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.aZ(a))}},
p:function(a,b){var s,r,q=a.length,p=P.hi(q,"",!1)
for(s=0;s<a.length;++s){r=H.t(a[s])
if(s>=q)return H.e(p,s)
p[s]=r}return p.join(b)},
fL:function(a){return this.p(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gc2:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.lm())},
aU:function(a,b){if(!!a.immutable$list)H.f(P.v("sort"))
H.lN(a,b==null?J.mr():b)},
dK:function(a){return this.aU(a,null)},
H:function(a,b){var s
for(s=0;s<a.length;++s)if(J.a2(a[s],b))return!0
return!1},
i:function(a){return P.jc(a,"[","]")},
gK:function(a){return new J.a3(a,a.length)},
gC:function(a){return H.co(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.v("set length"))
if(b>a.length)H.ko(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bN(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.f(P.v("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bN(a,b))
a[b]=c},
$ij:1,
$ih:1,
$im:1}
J.ds.prototype={}
J.a3.prototype={
gE:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bu.prototype={
ab:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbh(b)
if(this.gbh(a)===s)return 0
if(this.gbh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbh:function(a){return a===0?1/a<0:a<0},
h8:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.v(""+a+".toInt()"))},
c0:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.v(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.v(""+a+".round()"))},
cb:function(a,b){var s
if(b>20)throw H.c(P.aJ(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbh(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
A:function(a,b){return a*b},
dG:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cM(a,b)},
Y:function(a,b){return(a|0)===a?a/b|0:this.cM(a,b)},
cM:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.v("Result of truncating division is "+H.t(s)+": "+H.t(a)+" ~/ "+b))},
bc:function(a,b){var s
if(a>0)s=this.fj(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fj:function(a,b){return b>31?0:a>>>b},
$ia0:1,
$ia1:1}
J.c7.prototype={$in:1}
J.dr.prototype={}
J.b3.prototype={
bP:function(a,b){if(b<0)throw H.c(H.bN(a,b))
if(b>=a.length)H.f(H.bN(a,b))
return a.charCodeAt(b)},
cr:function(a,b){if(b>=a.length)throw H.c(H.bN(a,b))
return a.charCodeAt(b)},
T:function(a,b){return a+b},
cg:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.dR(b,null))
if(b>c)throw H.c(P.dR(b,null))
if(c>a.length)throw H.c(P.dR(c,null))
return a.substring(b,c)},
aW:function(a,b){return this.cg(a,b,null)},
A:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.D)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ae:function(a,b){var s=b-a.length
if(s<=0)return a
return this.A(" ",s)+a},
bg:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aJ(c,0,s,null,null))
return H.kF(a,b,c)},
H:function(a,b){return this.bg(a,b,0)},
ab:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gC:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$iy:1}
H.dv.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.J.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.bP(this.a,b)}}
H.j.prototype={}
H.bv.prototype={
gE:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.fz(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.aZ(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
H.b7.prototype={
gK:function(a){return new H.cd(J.az(this.a),this.b)},
gj:function(a){return J.bl(this.a)},
B:function(a,b){return this.b.$1(J.j4(this.a,b))}}
H.c0.prototype={$ij:1}
H.cd.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gE(r))
return!0}s.a=null
return!1},
gE:function(a){return H.Q(this).Q[1].a(this.a)}}
H.cB.prototype={
gK:function(a){return new H.ez(J.az(this.a),this.b)}}
H.ez.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gE(s)))return!0
return!1},
gE:function(a){var s=this.a
return s.gE(s)}}
H.c3.prototype={}
H.es.prototype={
k:function(a,b,c){throw H.c(P.v("Cannot modify an unmodifiable list"))}}
H.bG.prototype={}
H.ib.prototype={
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
H.dt.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.er.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hF.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fc.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bo.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.kI(r==null?"unknown":r)+"'"},
ghd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hW.prototype={}
H.hS.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.kI(s)+"'"}}
H.bR.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bR))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gC:function(a){var s,r=this.c
if(r==null)s=H.co(this.a)
else s=typeof r!=="object"?J.fC(r):H.co(r)
return(s^H.co(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.cp(s)+"'")}}
H.dU.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.O.prototype={
gj:function(a){return this.a},
gax:function(a){return new H.aE(this)},
ghc:function(a){return H.lt(new H.aE(this),new H.hd(this))},
fB:function(a,b){var s=this.b
if(s==null)return!1
return this.e5(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bb(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bb(p,b)
q=r==null?n:r.b
return q}else return o.fK(b)},
fK:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cz(q,J.fC(a)&0x3ffffff)
r=this.dq(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cp(s==null?m.b=m.bG():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cp(r==null?m.c=m.bG():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bG()
p=J.fC(b)&0x3ffffff
o=m.cz(q,p)
if(o==null)m.bJ(q,p,[m.bH(b,c)])
else{n=m.dq(o,b)
if(n>=0)o[n].b=c
else o.push(m.bH(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.aZ(s))
r=r.c}},
cp:function(a,b,c){var s=this.bb(a,b)
if(s==null)this.bJ(a,b,this.bH(b,c))
else s.b=c},
bH:function(a,b){var s=this,r=new H.hh(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dq:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1},
i:function(a){return P.jS(this)},
bb:function(a,b){return a[b]},
cz:function(a,b){return a[b]},
bJ:function(a,b,c){a[b]=c},
e8:function(a,b){delete a[b]},
e5:function(a,b){return this.bb(a,b)!=null},
bG:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bJ(r,s,r)
this.e8(r,s)
return r}}
H.hd.prototype={
$1:function(a){var s=this.a
return H.Q(s).Q[1].a(s.h(0,a))},
$S:function(){return H.Q(this.a).am("2(1)")}}
H.hh.prototype={}
H.aE.prototype={
gj:function(a){return this.a.a},
gK:function(a){var s=this.a,r=new H.dx(s,s.r)
r.c=s.e
return r}}
H.dx.prototype={
gE:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.aZ(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.iZ.prototype={
$1:function(a){return this.a(a)},
$S:21}
H.j_.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.j0.prototype={
$1:function(a){return this.a(a)},
$S:23}
H.hc.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.ck.prototype={}
H.bz.prototype={
gj:function(a){return a.length},
$iq:1}
H.b8.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]},
k:function(a,b,c){H.ax(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cj.prototype={
k:function(a,b,c){H.ax(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dD.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.dE.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.dF.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.dG.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.dH.prototype={
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.cl.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.dI.prototype={
gj:function(a){return a.length},
h:function(a,b){H.ax(b,a,a.length)
return a[b]}}
H.cH.prototype={}
H.cI.prototype={}
H.cJ.prototype={}
H.cK.prototype={}
H.ab.prototype={
am:function(a){return H.fo(v.typeUniverse,this,a)},
cq:function(a){return H.md(v.typeUniverse,this,a)}}
H.eQ.prototype={}
H.eL.prototype={
i:function(a){return this.a}}
H.cS.prototype={}
P.iz.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:24}
P.iy.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:28}
P.iA.prototype={
$0:function(){this.a.$0()},
$S:10}
P.iB.prototype={
$0:function(){this.a.$0()},
$S:10}
P.cR.prototype={
dS:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bM(new P.iK(this,b),0),a)
else throw H.c(P.v("`setTimeout()` not found."))},
dT:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bM(new P.iJ(this,a,Date.now(),b),0),a)
else throw H.c(P.v("Periodic timer."))},
$ii6:1}
P.iK.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.iJ.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.b.dO(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bI.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.bJ.prototype={
gE:function(a){var s=this.c
if(s==null)return this.b
return s.gE(s)},
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
else{o=J.az(s)
if(o instanceof P.bJ){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cO.prototype={
gK:function(a){return new P.bJ(this.a())}}
P.eA.prototype={}
P.e4.prototype={}
P.e5.prototype={}
P.iM.prototype={}
P.iU.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:3}
P.iG.prototype={
h4:function(a){var s,r,q,p=null
try{if(C.e===$.aj){a.$0()
return}P.mW(p,p,this,a)}catch(q){s=H.fB(q)
r=H.jB(q)
P.ku(p,p,this,s,r)}},
h5:function(a,b){var s,r,q,p=null
try{if(C.e===$.aj){a.$1(b)
return}P.mX(p,p,this,a,b)}catch(q){s=H.fB(q)
r=H.jB(q)
P.ku(p,p,this,s,r)}},
h6:function(a,b){return this.h5(a,b,t.z)},
fz:function(a){return new P.iH(this,a)},
cW:function(a,b){return new P.iI(this,a,b)}}
P.iH.prototype={
$0:function(){return this.a.h4(this.b)},
$S:3}
P.iI.prototype={
$1:function(a){return this.a.h6(this.b,a)},
$S:function(){return this.c.am("~(0)")}}
P.cD.prototype={
gK:function(a){var s=new P.cE(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
H:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.e3(b)
return r}},
e3:function(a){var s=this.d
if(s==null)return!1
return this.bx(s[this.bu(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cs(s==null?q.b=P.jo():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cs(r==null?q.c=P.jo():r,b)}else return q.dW(0,b)},
dW:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jo()
s=q.bu(b)
r=p[s]
if(r==null)p[s]=[q.bt(b)]
else{if(q.bx(r,b)>=0)return!1
r.push(q.bt(b))}return!0},
L:function(a,b){if((b&1073741823)===b)return this.fa(this.c,b)
else return this.f9(0,b)},
f9:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bu(b)
r=n[s]
q=o.bx(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cO(p)
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.bt(b)
return!0},
fa:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cO(s)
delete a[b]
return!0},
cC:function(){this.r=this.r+1&1073741823},
bt:function(a){var s,r=this,q=new P.iF(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cC()
return q},
cO:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cC()},
bu:function(a){return J.fC(a)&1073741823},
bx:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a2(a[r].a,b))return r
return-1}}
P.iF.prototype={}
P.cE.prototype={
gE:function(a){return H.Q(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.aZ(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c6.prototype={}
P.ca.prototype={$ij:1,$ih:1,$im:1}
P.A.prototype={
gK:function(a){return new H.bv(a,this.gj(a))},
B:function(a,b){return this.h(a,b)},
F:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.aZ(a))}},
gdr:function(a){return this.gj(a)===0},
ha:function(a,b){var s,r,q,p,o=this
if(o.gdr(a)){s=J.jd(0)
return s}r=o.h(a,0)
q=P.hi(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s}return q},
h9:function(a){return this.ha(a,!0)},
i:function(a){return P.jc(a,"[","]")}}
P.cc.prototype={}
P.hm.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.t(a)
r.a=s+": "
r.a+=H.t(b)},
$S:43}
P.S.prototype={
F:function(a,b){var s,r,q
for(s=J.az(this.gax(a)),r=H.bP(a).am("S.V");s.t();){q=s.gE(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.bl(this.gax(a))},
i:function(a){return P.jS(a)},
$iU:1}
P.dW.prototype={
i:function(a){return P.jc(this,"{","}")},
B:function(a,b){var s,r,q,p,o="index"
H.n8(b,o,t.S)
P.jX(b,o)
for(s=P.lY(this,this.r),r=H.Q(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.F(b,this,o,null,q))}}
P.cL.prototype={$ij:1,$ih:1}
P.cF.prototype={}
P.cW.prototype={}
P.dc.prototype={}
P.de.prototype={}
P.h0.prototype={}
P.io.prototype={}
P.ip.prototype={
fC:function(a){var s,r,q,p=P.jh(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.iL(r)
if(q.ea(a,0,p)!==p){C.d.bP(a,p-1)
q.bL()}return new Uint8Array(r.subarray(0,H.mj(0,q.b,s)))}}
P.iL.prototype={
bL:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
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
return!0}else{n.bL()
return!1}},
ea:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.d.bP(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.d.cr(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fs(p,C.d.cr(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bL()}else if(p<=2047){o=l.b
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
P.N.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.N&&this.a===b.a&&!0},
ab:function(a,b){return C.b.ab(this.a,b.a)},
gC:function(a){var s=this.a
return(s^C.b.bc(s,30))&1073741823},
i:function(a){var s=this,r=P.li(H.lD(s)),q=P.dg(H.lB(s)),p=P.dg(H.lx(s)),o=P.dg(H.ly(s)),n=P.dg(H.lA(s)),m=P.dg(H.lC(s)),l=P.lj(H.lz(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b0.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b0&&this.a===b.a},
gC:function(a){return C.b.gC(this.a)},
ab:function(a,b){return C.b.ab(this.a,b.a)},
i:function(a){var s,r,q,p=new P.fZ(),o=this.a
if(o<0)return"-"+new P.b0(0-o).i(0)
s=p.$1(C.b.Y(o,6e7)%60)
r=p.$1(C.b.Y(o,1e6)%60)
q=new P.fY().$1(o%1e6)
return""+C.b.Y(o,36e8)+":"+s+":"+r+"."+q}}
P.fY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.C.prototype={}
P.d8.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.h3(s)
return"Assertion failed"}}
P.ee.prototype={}
P.dJ.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbw()+o+m
if(!q.a)return l
s=q.gbv()
r=P.h3(q.b)
return l+s+": "+r}}
P.cq.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.t(q):""
else if(q==null)s=": Not greater than or equal to "+H.t(r)
else if(q>r)s=": Not in inclusive range "+H.t(r)+".."+H.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.t(r)
return s}}
P.dn.prototype={
gbw:function(){return"RangeError"},
gbv:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.et.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eq.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.e2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dd.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h3(s)+"."}}
P.dM.prototype={
i:function(a){return"Out of Memory"},
$iC:1}
P.cu.prototype={
i:function(a){return"Stack Overflow"},
$iC:1}
P.df.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.eN.prototype={
i:function(a){return"Exception: "+this.a}}
P.h8.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.d.cg(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gj:function(a){var s,r=this.gK(this)
for(s=0;r.t();)++s
return s},
B:function(a,b){var s,r,q
P.jX(b,"index")
for(s=this.gK(this),r=0;s.t();){q=s.gE(s)
if(b===r)return q;++r}throw H.c(P.F(b,this,"index",null,r))},
i:function(a){return P.ll(this,"(",")")}}
P.dp.prototype={}
P.aa.prototype={
gC:function(a){return P.I.prototype.gC.call(C.H,this)},
i:function(a){return"null"}}
P.I.prototype={constructor:P.I,$iI:1,
n:function(a,b){return this===b},
gC:function(a){return H.co(this)},
i:function(a){return"Instance of '"+H.cp(this)+"'"},
toString:function(){return this.i(this)}}
P.bd.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fE.prototype={
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
W.aY.prototype={
cd:function(a,b,c){if(c!=null)return a.getContext(b,P.ky(c))
return a.getContext(b)},
dF:function(a,b){return this.cd(a,b,null)},
$iaY:1}
W.bV.prototype={$ibV:1}
W.ae.prototype={
gj:function(a){return a.length}}
W.fR.prototype={
gj:function(a){return a.length}}
W.B.prototype={$iB:1}
W.bq.prototype={
e0:function(a,b){var s=$.kK(),r=s[b]
if(typeof r=="string")return r
r=this.fk(a,b)
s[b]=r
return r},
fk:function(a,b){var s,r=b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()})
r.toString
r=r in a
r.toString
if(r)return b
s=$.kM()+b
r=s in a
r.toString
if(r)return s
return b},
fe:function(a,b,c,d){a.setProperty(b,c,d)},
gj:function(a){var s=a.length
s.toString
return s}}
W.fS.prototype={}
W.a9.prototype={}
W.an.prototype={}
W.fT.prototype={
gj:function(a){return a.length}}
W.fU.prototype={
gj:function(a){return a.length}}
W.fV.prototype={
gj:function(a){return a.length}}
W.fW.prototype={
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
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
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
return r+H.t(s)+") "+H.t(this.gaA(a))+" x "+H.t(this.gaw(a))},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bi(b)
if(s===r.gbi(b)){s=a.top
s.toString
s=s===r.gbo(b)&&this.gaA(a)===r.gaA(b)&&this.gaw(a)===r.gaw(b)}else s=!1}else s=!1
return s},
gC:function(a){var s,r=a.left
r.toString
r=C.c.gC(r)
s=a.top
s.toString
return W.kf(r,C.c.gC(s),C.c.gC(this.gaA(a)),C.c.gC(this.gaw(a)))},
gcX:function(a){var s=a.bottom
s.toString
return s},
gcA:function(a){return a.height},
gaw:function(a){var s=this.gcA(a)
s.toString
return s},
gbi:function(a){var s=a.left
s.toString
return s},
gbn:function(a){var s=a.right
s.toString
return s},
gbo:function(a){var s=a.top
s.toString
return s},
gcP:function(a){return a.width},
gaA:function(a){var s=this.gcP(a)
s.toString
return s},
$ia7:1}
W.dh.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.fX.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.eD.prototype={
gdr:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gK:function(a){var s=this.h9(this)
return new J.a3(s,s.length)}}
W.G.prototype={
gcZ:function(a){var s=a.children
s.toString
return new W.eD(a,s)},
gd_:function(a){var s,r,q,p=a.clientLeft
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
ft:function(a,b,c,d){if(c!=null)this.dY(a,b,c,!1)},
dY:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)},
$ib:1}
W.aC.prototype={$iaC:1}
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
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.dj.prototype={
gj:function(a){return a.length}}
W.dl.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.ha.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.b1.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.b2.prototype={
gd0:function(a){var s=a.data
s.toString
return s},
$ib2:1}
W.bt.prototype={$ibt:1}
W.b5.prototype={$ib5:1}
W.hk.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.hB.prototype={
gj:function(a){return a.length}}
W.dA.prototype={
h:function(a,b){return P.aS(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aS(s.value[1]))}},
gax:function(a){var s=[]
this.F(a,new W.hC(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.hC.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dB.prototype={
h:function(a,b){return P.aS(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aS(s.value[1]))}},
gax:function(a){var s=[]
this.F(a,new W.hD(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.hD.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aF.prototype={$iaF:1}
W.dC.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.a6.prototype={$ia6:1}
W.eC.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b]).toString},
gK:function(a){var s=this.a.childNodes
return new W.c4(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.r.prototype={
h2:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.l5(s,b,a)}catch(q){H.fB(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dM(a):s},
fb:function(a,b,c){var s=a.replaceChild(b,c)
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
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aH.prototype={
gj:function(a){return a.length},
$iaH:1}
W.dP.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.dT.prototype={
h:function(a,b){return P.aS(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aS(s.value[1]))}},
gax:function(a){var s=[]
this.F(a,new W.hM(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iU:1}
W.hM.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dV.prototype={
gj:function(a){return a.length}}
W.at.prototype={$iat:1}
W.dZ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aK.prototype={$iaK:1}
W.e_.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aL.prototype={
gj:function(a){return a.length},
$iaL:1}
W.e3.prototype={
h:function(a,b){return a.getItem(H.mh(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gax:function(a){var s=[]
this.F(a,new W.hT(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iU:1}
W.hT.prototype={
$2:function(a,b){return this.a.push(a)},
$S:31}
W.ai.prototype={$iai:1}
W.au.prototype={$iau:1}
W.ac.prototype={$iac:1}
W.e7.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.e8.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.i5.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aM.prototype={$iaM:1}
W.be.prototype={$ibe:1}
W.ec.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.i9.prototype={
gj:function(a){return a.length}}
W.aw.prototype={}
W.im.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ew.prototype={
gj:function(a){return a.length}}
W.aO.prototype={
gfG:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.v("deltaY is not supported"))},
gfF:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.v("deltaX is not supported"))},
$iaO:1}
W.bH.prototype={
fc:function(a,b){var s=a.requestAnimationFrame(H.bM(b,1))
s.toString
return s},
e9:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eE.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
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
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bi(b)
if(s===r.gbi(b)){s=a.top
s.toString
if(s===r.gbo(b)){s=a.width
s.toString
if(s===r.gaA(b)){s=a.height
s.toString
r=s===r.gaw(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gC:function(a){var s,r,q,p=a.left
p.toString
p=C.c.gC(p)
s=a.top
s.toString
s=C.c.gC(s)
r=a.width
r.toString
r=C.c.gC(r)
q=a.height
q.toString
return W.kf(p,s,r,C.c.gC(q))},
gcA:function(a){return a.height},
gaw:function(a){var s=a.height
s.toString
return s},
gcP:function(a){return a.width},
gaA:function(a){var s=a.width
s.toString
return s}}
W.eR.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
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
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.f9.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.fg.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.ja.prototype={}
W.eM.prototype={}
W.iC.prototype={
$1:function(a){return this.a.$1(a)},
$S:2}
W.jn.prototype={}
W.D.prototype={
gK:function(a){return new W.c4(a,this.gj(a))}}
W.c4.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.l4(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gE:function(a){return H.Q(this).c.a(this.d)}}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f6.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fd.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
P.cT.prototype={$ib2:1,
gd0:function(a){return this.a}}
P.iP.prototype={
$1:function(a){this.a.push(P.kq(a))},
$S:35}
P.iW.prototype={
$2:function(a,b){this.a[a]=P.kq(b)},
$S:42}
P.dk.prototype={
gb_:function(){return new H.b7(new H.cB(this.b,new P.h6()),new P.h7())},
F:function(a,b){C.a.F(P.hj(this.gb_(),!1),b)},
k:function(a,b,c){var s=this.gb_()
J.jJ(s.b.$1(J.j4(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.bl(this.gb_().a)},
h:function(a,b){var s=this.gb_()
return s.b.$1(J.j4(s.a,b))},
gK:function(a){var s=P.hj(this.gb_(),!1)
return new J.a3(s,s.length)}}
P.h6.prototype={
$1:function(a){return t.h.b(a)},
$S:26}
P.h7.prototype={
$1:function(a){return t.h.a(a)},
$S:22}
P.f5.prototype={
gbn:function(a){return this.$ti.c.a(this.a+this.c)},
gcX:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
n:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bi(b)
if(s===r.gbi(b)){q=o.b
if(q===r.gbo(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbn(b)&&p.a(q+o.d)===r.gcX(b)}else s=!1}else s=!1}else s=!1
return s},
gC:function(a){var s=this,r=s.a,q=C.b.gC(r),p=s.b,o=C.b.gC(p),n=s.$ti.c
r=C.b.gC(n.a(r+s.c))
p=C.b.gC(n.a(p+s.d))
return H.lO(H.hU(H.hU(H.hU(H.hU(0,q),o),r),p))}}
P.a7.prototype={
gbi:function(a){return this.a},
gbo:function(a){return this.b},
gaA:function(a){return this.c},
gaw:function(a){return this.d}}
P.b6.prototype={$ib6:1}
P.dw.prototype={
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
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.b9.prototype={$ib9:1}
P.dK.prototype={
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
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.hH.prototype={
gj:function(a){return a.length}}
P.e6.prototype={
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
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gcZ:function(a){return new P.dk(a,new W.eC(a))}}
P.bf.prototype={$ibf:1}
P.ed.prototype={
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
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.eU.prototype={}
P.eV.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fe.prototype={}
P.ff.prototype={}
P.fl.prototype={}
P.fm.prototype={}
P.fJ.prototype={
gj:function(a){return a.length}}
P.d9.prototype={
h:function(a,b){return P.aS(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aS(s.value[1]))}},
gax:function(a){var s=[]
this.F(a,new P.fK(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iU:1}
P.fK.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.da.prototype={
gj:function(a){return a.length}}
P.aA.prototype={}
P.dL.prototype={
gj:function(a){return a.length}}
P.eB.prototype={}
P.bC.prototype={
dD:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.na(g))
return}if(t.l.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.j6("Incorrect number or type of arguments"))},
$ibC:1}
P.e0.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.F(b,a,null,null,null))
s=P.aS(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.v("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fa.prototype={}
P.fb.prototype={}
K.fF.prototype={
aO:function(a,b){return!0},
i:function(a){return"all"}}
K.dm.prototype={
aO:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aO(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aG.prototype={
aO:function(a,b){return!this.dL(0,b)},
i:function(a){return"!["+this.br(0)+"]"}}
K.P.prototype={
P:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.d("May not create a Set with zero characters."))
s=new H.O(t.c)
for(r=new H.bv(a,a.gj(a)),q=H.Q(r).c;r.t();)s.k(0,q.a(r.d),!0)
p=P.hj(new H.aE(s),!0)
C.a.dK(p)
this.a=p},
aO:function(a,b){return C.a.H(this.a,b)},
i:function(a){return P.jj(this.a)}}
L.e1.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.ia(this.a.G(0,b),[])
s.push(p)
return p},
fI:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aO(0,a))return p}return null},
i:function(a){return this.b},
cN:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.H(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.aE(s.c)
s=J.az(s==null?[]:s)
for(;s.t();){r=s.gE(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.H(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.br(0))}return m.charCodeAt(0)==0?m:m}}
L.ea.prototype={
i:function(a){var s=H.kG(this.b,"\n","\\n"),r=H.kG(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eb.prototype={
i:function(a){return this.b}}
L.i7.prototype={
G:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.e1(this,b,[])
s.k(0,b,r)}return r},
b8:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eb(a,P.L(s,s))
r.k(0,a,q)}return q},
dE:function(a){return this.hb(a)},
hb:function(a){var s=this
return P.mz(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dE(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.Q(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a0.length
if(h!==0){if(!!a0.fixed$length)H.f(P.v("removeAt"))
if(0>=h)H.f(P.dR(0,null))
g=a0.splice(0,1)[0]}else{if(!r.t()){q=3
break}g=n.a(r.d)}b.push(g);++k
h=d==null
f=h?null:d.fI(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.jj(b)
throw H.c(P.d("Untokenizable string [state: "+H.t(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.v("removeRange"))
P.jh(0,i,b.length)
b.splice(0,i-0)
C.a.be(a0,b)
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
if(h!=null){e=P.jj(c)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.ea(h,e,k)
l=h}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.H(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.lW()
case 1:return P.lX(o)}}},t.s)},
i:function(a){var s,r,q=new P.bd(""),p=this.d
if(p!=null)q.a=""+(p.cN()+"\n")
for(p=this.a,p=p.ghc(p),p=new H.cd(J.az(p.a),p.b),s=H.Q(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.t(r==null?null:r.cN())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.ia.prototype={
i:function(a){return this.b.b+": "+this.br(0)}}
O.bp.prototype={
ce:function(a,b,c){this.b=b
this.c=a},
aS:function(a,b){return this.ce(a,null,b)},
cF:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
ck:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gK:function(a){var s=this.a
return new J.a3(s,s.length)},
B:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.cF([b])){s=this.a
r=s.length
s.push(b)
this.ck(r,[b])}},
be:function(a,b){var s,r
if(this.cF(b)){s=this.a
r=s.length
C.a.be(s,b)
this.ck(r,b)}},
$ih:1}
O.ci.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
aC:function(){var s=this.b
return s==null?null:s.w(null)},
gV:function(a){var s=this.a
if(s.length>0)return C.a.gc2(s)
else return V.a5()},
bm:function(a){this.a.push(a)
this.aC()},
ay:function(){var s=this.a
if(s.length>0){s.pop()
this.aC()}}}
E.fL.prototype={}
E.br.prototype={
sbq:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().L(0,s.gdz())
if(b!=null)b.gm().l(0,s.gdz())
s.bk(new D.w("shape",r,b))}},
ag:function(a,b){var s,r
for(s=this.y.a,s=new J.a3(s,s.length),r=H.Q(s).c;s.t();)r.a(s.d).ag(0,b)},
a5:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.gV(o))
o.aC()
a.ca(p.f)
s=C.a.gc2(a.dy)
if(p.d!=null)if(s!=null)s.dB(a,p)
for(r=p.y.a,r=new J.a3(r,r.length),q=H.Q(r).c;r.t();)q.a(r.d).a5(a)
a.c9()
o.ay()},
bk:function(a){var s=this.z
return s==null?null:s.w(a)},
a0:function(){return this.bk(null)},
dA:function(a){this.e=null
this.bk(a)},
fU:function(){return this.dA(null)},
dw:function(a){return this.bk(a)},
fR:function(){return this.dw(null)},
fQ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdv(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.c2()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a0()},
fT:function(a,b){var s,r
for(s=b.gK(b),r=this.gdv();s.t();)s.gE(s).gm().L(0,r)
this.a0()},
i:function(a){return"Unnamed entity"}}
E.bm.prototype={
i:function(a){return this.b}}
E.bA.prototype={
i:function(a){return this.b}}
E.eK.prototype={}
E.hI.prototype={
dR:function(a,b){var s=this
s.cy.gm().l(0,new E.hJ(s))
s.db.gm().l(0,new E.hK(s))
s.dx.gm().l(0,new E.hL(s))},
gh0:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gV(q).A(0,s.gV(s))
q=s}return q},
ca:function(a){var s=this.dy
return s.push(a==null?C.a.gc2(s):a)},
c9:function(){var s=this.dy
if(s.length>1)s.pop()},
cR:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.d("May not cache a shader with no name."))
s=this.fr
if(s.fB(0,r))throw H.c(P.d('Shader cache already contains a shader by the name "'+r+'".'))
s.k(0,r,a)}}
E.hJ.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.hK.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.hL.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.e9.prototype={
cn:function(a){this.dC()},
cm:function(){return this.cn(null)},
gfJ:function(){var s,r=this,q=Date.now(),p=C.b.Y(P.jN(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.N(q,!1)
return s/p},
cI:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.c.c0(r*o)
r=s.clientHeight
r.toString
p=C.c.c0(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.k4(C.h,this.gh3())}},
dC:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.u.e9(s)
r=W.kv(new E.i4(this),t.H)
r.toString
C.u.fc(s,r)}},
h1:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cI()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.N(p,!1)
q.y=P.jN(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aC()
p=q.db
C.a.sj(p.a,0)
p.aC()
p=q.dx
C.a.sj(p.a,0)
p.aC()
p=q.dy
C.a.sj(p,0)
p.push(null)
m.a5(q)}}catch(o){s=H.fB(o)
r=H.jB(o)
P.jG("Error: "+H.t(s))
P.jG("Stack: "+H.t(r))
throw H.c(s)}}}
E.i4.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.h1()}},
$S:25}
Z.ex.prototype={}
Z.bT.prototype={
X:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fB(q)
r=P.d('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.t(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.ey.prototype={}
Z.bn.prototype={
av:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
X:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.e(r,s)
r[s].X(a)}},
ba:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a5:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.e(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cp(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(m,", ")+"\nAttrs:   "+C.a.p(o,", ")}}
Z.c5.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cp(this.c)+"'")+"]"}}
Z.aN.prototype={
gcf:function(a){var s=this.a,r=(s&$.ak().a)!==0?3:0
if((s&$.aV().a)!==0)r+=3
if((s&$.aU().a)!==0)r+=3
if((s&$.aW().a)!==0)r+=2
if((s&$.bk().a)!==0)r+=3
if((s&$.d4().a)!==0)r+=3
if((s&$.d5().a)!==0)r+=4
if((s&$.bQ().a)!==0)++r
return(s&$.aT().a)!==0?r+4:r},
fw:function(a){var s,r=$.ak(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aW()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bk()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d4()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aT()
if((q&r.a)!==0)if(s===a)return r
return $.l2()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aN))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ak().a)!==0)s.push("Pos")
if((r&$.aV().a)!==0)s.push("Norm")
if((r&$.aU().a)!==0)s.push("Binm")
if((r&$.aW().a)!==0)s.push("Txt2D")
if((r&$.bk().a)!==0)s.push("TxtCube")
if((r&$.d4().a)!==0)s.push("Clr3")
if((r&$.d5().a)!==0)s.push("Clr4")
if((r&$.bQ().a)!==0)s.push("Weight")
if((r&$.aT().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.fN.prototype={}
D.c2.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
L:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.H(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.L(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.H(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.L(p,b)
s=p===!0||s}return s},
w:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.K():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.F(P.hj(p,!0),new D.h4(s))
r=q.b
if(r!=null){q.b=[]
C.a.F(r,new D.h5(s))}return!0},
d7:function(){return this.w(null)},
az:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.w(s)}}}}
D.h4.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.h5.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.K.prototype={}
D.ao.prototype={}
D.ap.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.t(this.d)+" => "+H.t(this.e)}}
X.bU.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bU))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.du.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.he.prototype={}
X.cb.prototype={}
X.hl.prototype={
aZ:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.M(o.a+b.a,o.b+b.b)
o=q.a.gaI()
s=$.Z
if(s==null)s=$.Z=new V.M(0,0)
r=q.x
q.z=new P.N(p,!1)
q.x=n
return new X.bx(a,s,r,o,n)},
c8:function(a,b){this.r=a.a
return!1},
b5:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
b4:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.aZ(a,b))
return!0},
fY:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaI()
r=this.x
Date.now()
q.w(new X.by(new V.W(a.a,a.b),s,r))
return!0},
eJ:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.w(new X.cb(c,q.a.gaI(),b))
q.y=new P.N(s,!1)
s=$.Z
q.x=s==null?$.Z=new V.M(0,0):s}}
X.X.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.X))return!1
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
X.hE.prototype={
by:function(a,b,c){var s=this,r=new P.N(Date.now(),!1),q=s.a.gaI(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bx(a,p,o,q,b)},
c8:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.w(this.by(a,b,!0))
return!0},
b5:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.w(r.by(a,b,!0))
return!0},
b4:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.by(a,b,!1))
return!0},
fZ:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaI()
Date.now()
r.w(new X.by(new V.W(a.a,a.b),s,b))
return!0},
gd3:function(){var s=this.b
return s==null?this.b=D.z():s},
gbp:function(){var s=this.c
return s==null?this.c=D.z():s},
gdu:function(){var s=this.d
return s==null?this.d=D.z():s}}
X.by.prototype={}
X.dQ.prototype={}
X.cv.prototype={}
X.i8.prototype={
aZ:function(a,b){var s,r,q,p,o=this,n=new P.N(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.Z
if(r==null){r=new V.M(0,0)
$.Z=r
s=r}else s=r}r=o.a.gaI()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cv(q,p,r,s)},
fX:function(a){var s=this.b
if(s==null)return!1
s.w(this.aZ(a,!0))
return!0},
fV:function(a){var s=this.c
if(s==null)return!1
s.w(this.aZ(a,!0))
return!0},
fW:function(a){var s=this.d
if(s==null)return!1
s.w(this.aZ(a,!1))
return!0}}
X.eu.prototype={
gaN:function(a){var s=this.b
return s==null?this.b=new X.he(new X.X(!1,!1,!1),P.jR(t.S)):s},
ga_:function(){var s,r=this.c
if(r==null){r=$.Z
if(r==null){r=$.Z=new V.M(0,0)
s=r}else s=r
r=this.c=new X.hE(this,r,s,new P.N(Date.now(),!1),new P.N(Date.now(),!1))}return r},
gac:function(){var s=this.d
if(s==null){s=$.Z
if(s==null)s=$.Z=new V.M(0,0)
s=this.d=new X.hl(this,s,new P.N(Date.now(),!1),new P.N(Date.now(),!1))}return s},
gaP:function(){var s,r=this.e
if(r==null){r=$.Z
if(r==null){r=$.Z=new V.M(0,0)
s=r}else s=r
r=this.e=new X.i8(this,r,s,new P.N(Date.now(),!1),new P.N(Date.now(),!1))}return r},
gaI:function(){var s=this.a
return V.jY(0,0,C.f.gd_(s).c,C.f.gd_(s).d)},
cu:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.du(p,new X.X(s,r,q))},
aH:function(a){var s,r,q=this.gaN(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.X(p,s,r)},
bK:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaN(this)
r=a.altKey
q=a.shiftKey
p.c=new X.X(s,r===!0,q===!0)},
at:function(a){var s,r,q,p
if(a==null){s=$.Z
return s==null?$.Z=new V.M(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.M(r-p,q-s)},
b0:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.W(r,s)},
bI:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.c.aj(n)
m=o.pageY
m.toString
C.c.aj(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.c.aj(l)
l=o.pageY
l.toString
l=C.c.aj(l)
k=j.top
k.toString
s.push(new V.M(n-m,l-k))}return s},
aq:function(a){var s,r,q,p
if(a==null)return new X.bU(0,new X.X(!1,!1,!1))
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
return new X.bU(s,new X.X(r,q,p))},
bz:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eD:function(a){return this.f=!0},
eq:function(a){return this.f=!1},
ex:function(a){if(this.f&&this.bz(a))a.preventDefault()},
eH:function(a){var s,r,q=this
if(!q.f)return
s=q.cu(a)
r=q.gaN(q)
r.c=s.b
r.d.l(0,s.a)},
eF:function(a){var s,r,q=this
if(!q.f)return
s=q.cu(a)
r=q.gaN(q)
r.c=s.b
r.d.L(0,s.a)},
eL:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aH(a)
if(p.x){s=p.aq(a)
r=p.b0(a)
if(p.gac().c8(s,r))a.preventDefault()
return}s=p.aq(a)
q=p.at(a)
if(p.ga_().c8(s,q))a.preventDefault()},
eP:function(a){var s,r,q,p=this
p.aH(a)
s=p.aq(a)
if(p.x){r=p.b0(a)
if(p.gac().b5(s,r))a.preventDefault()
return}q=p.at(a)
if(p.ga_().b5(s,q))a.preventDefault()},
eB:function(a){var s,r,q,p=this
if(!p.bz(a)){p.aH(a)
s=p.aq(a)
if(p.x){r=p.b0(a)
if(p.gac().b5(s,r))a.preventDefault()
return}q=p.at(a)
if(p.ga_().b5(s,q))a.preventDefault()}},
eN:function(a){var s,r,q,p=this
p.aH(a)
s=p.aq(a)
if(p.x){r=p.b0(a)
if(p.gac().b4(s,r))a.preventDefault()
return}q=p.at(a)
if(p.ga_().b4(s,q))a.preventDefault()},
ez:function(a){var s,r,q,p=this
if(!p.bz(a)){p.aH(a)
s=p.aq(a)
if(p.x){r=p.b0(a)
if(p.gac().b4(s,r))a.preventDefault()
return}q=p.at(a)
if(p.ga_().b4(s,q))a.preventDefault()}},
eR:function(a){var s,r,q=this
q.aH(a)
s=new V.W(C.t.gfF(a),C.t.gfG(a)).A(0,q.Q)
if(q.x){if(q.gac().fY(s))a.preventDefault()
return}r=q.at(a)
if(q.ga_().fZ(s,r))a.preventDefault()},
eT:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aq(q.y)
r=q.at(q.y)
q.gac().eJ(s,r,p)}},
f8:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bK(a)
s=r.bI(a)
if(r.gaP().fX(s))a.preventDefault()},
f4:function(a){var s
this.bK(a)
s=this.bI(a)
if(this.gaP().fV(s))a.preventDefault()},
f6:function(a){var s
this.bK(a)
s=this.bI(a)
if(this.gaP().fW(s))a.preventDefault()}}
D.c9.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
gdt:function(){var s=this.z
return s==null?this.z=D.z():s},
co:function(a){var s=this.y
return s==null?null:s.w(a)},
cE:function(a){var s=this.z
return s==null?null:s.w(a)},
eI:function(){return this.cE(null)},
eV:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.e4(a[r]))return!1
return!0},
ek:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gcD(),q=this.e,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
o.gm().l(0,r)}this.co(new D.ao())},
eZ:function(a,b){var s,r,q,p
for(s=b.gK(b),r=this.gcD(),q=this.e;s.t();){p=s.gE(s)
C.a.L(q,p)
p.gm().L(0,r)}this.co(new D.ap())},
e4:function(a){var s=C.a.H(this.e,a)
return s}}
V.R.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.R))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aB.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aB))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
q:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.h2.prototype={}
V.ch.prototype={
a2:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ch))return!1
s=b.a
$.x().toString
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
V.bw.prototype={
a2:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
c1:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.x().toString
if(Math.abs(b3-0)<1e-9)return V.a5()
s=1/b3
r=-l
q=-a2
return V.ar((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
A:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ar(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
b9:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.V(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bw))return!1
s=b.a
$.x().toString
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
v:function(a){var s,r,q,p,o,n=this,m=V.bO([n.a,n.e,n.y,n.cx],3,0),l=V.bO([n.b,n.f,n.z,n.cy],3,0),k=V.bO([n.c,n.r,n.Q,n.db],3,0),j=V.bO([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
q:function(){return this.v("")}}
V.M.prototype={
a6:function(a){return new V.W(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"},
q:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.V.prototype={
aV:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
q:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
V.aI.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aI))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"},
q:function(){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.dS.prototype={
gao:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dS))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.u(s.a,3,0)+", "+V.u(s.b,3,0)+", "+V.u(s.c,3,0)+", "+V.u(s.d,3,0)+"]"}}
V.W.prototype={
c3:function(a){return Math.sqrt(this.Z(this))},
Z:function(a){return this.a*a.a+this.b*a.b},
A:function(a,b){return new V.W(this.a*b,this.b*b)},
a7:function(a,b){var s
$.x().toString
if(Math.abs(b-0)<1e-9){s=$.bg
return s==null?$.bg=new V.W(0,0):s}return new V.W(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+"]"}}
V.E.prototype={
c3:function(a){return Math.sqrt(this.Z(this))},
Z:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c4:function(a,b){return new V.E(V.jD(this.a,a.a,b),V.jD(this.b,a.b,b),V.jD(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.Z(s))
if(r===1)return s
return s.a7(0,r)},
b3:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.E(s*r-q*p,q*o-n*r,n*p-s*o)},
T:function(a,b){return new V.E(this.a+b.a,this.b+b.b,this.c+b.c)},
aR:function(a){return new V.E(-this.a,-this.b,-this.c)},
a7:function(a,b){$.x().toString
if(Math.abs(b-0)<1e-9)return V.ev()
return new V.E(this.a/b,this.b/b,this.c/b)},
ds:function(){$.x().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.E))return!1
s=b.a
$.x().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"},
q:function(){return"["+V.u(this.a,3,0)+", "+V.u(this.b,3,0)+", "+V.u(this.c,3,0)+"]"}}
U.fP.prototype={
bs:function(a){var s=V.ny(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
I:function(a){var s=this.y
return s==null?null:s.w(a)},
scc:function(a,b){},
sc5:function(a){var s,r=this,q=r.b
$.x().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bs(s)}r.I(new D.w("maximumLocation",q,r.b))}},
sc7:function(a){var s,r=this,q=r.c
$.x().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bs(s)}r.I(new D.w("minimumLocation",q,r.c))}},
sa4:function(a,b){var s,r=this
b=r.bs(b)
s=r.d
$.x().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.I(new D.w("location",s,b))}},
sc6:function(a){var s,r,q=this,p=q.e
$.x().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.I(new D.w("maximumVelocity",p,a))}},
sS:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.x().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.I(new D.w("velocity",r,a))}},
sbR:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.x().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.I(new D.w("dampening",s,a))}},
ag:function(a,b){var s,r,q,p=this,o=p.f
$.x().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa4(0,p.d+s*b)
o=p.x
$.x().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sS(s)}}}
U.bX.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
aQ:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
return this.a.n(0,b.a)},
i:function(a){return"Constant: "+this.a.v("          ")}}
U.bs.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
I:function(a){var s=this.e
return s==null?null:s.w(a)},
a1:function(){return this.I(null)},
ei:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaG(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.I(new D.ao())},
eX:function(a,b){var s,r
for(s=b.gK(b),r=this.gaG();s.t();)s.gE(s).gm().L(0,r)
this.I(new D.ap())},
aQ:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a3(o,o.length),n=H.Q(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aQ(0,b,c)
s=s==null?q:q.A(0,s)}}p.f=s==null?V.a5():s
o=p.e
if(o!=null)o.az(0)}return p.f},
n:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bs))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(p>=q.length)return H.e(q,p)
if(!J.a2(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iY:1}
U.Y.prototype={}
U.cx.prototype={
gm:function(){var s=this.cy
return s==null?this.cy=D.z():s},
I:function(a){var s=this.cy
return s==null?null:s.w(a)},
a1:function(){return this.I(null)},
b1:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga_().gd3().l(0,s.gbA())
a.ga_().gdu().l(0,s.gbC())
a.ga_().gbp().l(0,s.gbE())
return!0},
bB:function(a){var s=this,r=s.c,q=s.a
if(!r.n(0,q==null?null:q.gaN(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bD:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.a6(a.d)
if(s.Z(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa4(0,-a.y.a6(r).A(0,2).a7(0,s.gao()).a*2.5+p.z)
q.sS(0)
p.Q=a.z.a6(r).A(0,2).a7(0,s.gao())
p.a1()},
bF:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.Z(s)>0.0001){r.b.sS(r.Q.a*10*2.5)
r.a1()}},
aQ:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.ag(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.ar(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$iY:1}
U.cy.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.z():s},
I:function(a){var s=this.fx
return s==null?null:s.w(a)},
a1:function(){return this.I(null)},
b1:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga_().gd3().l(0,q.gbA())
a.ga_().gdu().l(0,q.gbC())
a.ga_().gbp().l(0,q.gbE())
s=a.gac()
r=s.f
s=r==null?s.f=D.z():r
s.l(0,q.geb())
s=a.gac()
r=s.d
s=r==null?s.d=D.z():r
s.l(0,q.ged())
s=a.gaP()
r=s.b
s=r==null?s.b=D.z():r
s.l(0,q.gfp())
s=a.gaP()
r=s.d
s=r==null?s.d=D.z():r
s.l(0,q.gfn())
s=a.gaP()
r=s.c
s=r==null?s.c=D.z():r
s.l(0,q.gfl())
return!0},
aE:function(a){return new V.W(a.a,a.b)},
bB:function(a){var s=this
t.Z.a(a)
if(!s.d.n(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bD:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a6(a.d)
if(s.Z(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aE(a.y.a6(r).A(0,2).a7(0,s.gao()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sS(0)
p.sS(0)
n.dx=n.aE(a.z.a6(r).A(0,2).a7(0,s.gao()))
n.a1()},
bF:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.Z(s)>0.0001){r.c.sS(-r.dx.a*10*2.5)
r.b.sS(-r.dx.b*10*2.5)
r.a1()}},
ec:function(a){var s=this
if(t.e.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ee:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.n(0,a.x.b))return
s=a.c
r=a.d
q=n.aE(a.y.a6(r).A(0,2).a7(0,s.gao()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sS(0)
p.sS(0)
n.dx=n.aE(a.z.a6(r).A(0,2).a7(0,s.gao()))
n.a1()},
fq:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fo:function(a){var s,r,q,p,o,n=this
t.t.a(a)
if(!n.cx)return
if(n.ch){s=a.y.a6(a.d)
if(s.Z(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aE(a.y.a6(r).A(0,2).a7(0,s.gao()))
p=n.c
p.sa4(0,-q.a*2.5+n.cy)
o=n.b
o.sa4(0,-q.b*2.5+n.db)
o.sS(0)
p.sS(0)
n.dx=n.aE(a.z.a6(r).A(0,2).a7(0,s.gao()))
n.a1()},
fm:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.Z(s)>0.0001){r.c.sS(-r.dx.a*10*2.5)
r.b.sS(-r.dx.b*10*2.5)
r.a1()}},
aQ:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.ag(0,s)
n=p.b
n.ag(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.ar(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.A(0,V.ar(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iY:1}
U.cz.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
I:function(a){var s=this.r
return s==null?null:s.w(a)},
b1:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga_()
r=s.e
s=r==null?s.e=D.z():r
r=this.gef()
s.l(0,r)
s=a.gac()
q=s.e;(q==null?s.e=D.z():q).l(0,r)
return!0},
eg:function(a){var s=this,r=s.b,q=s.a
if(!r.n(0,q==null?null:q.gaN(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.I(new D.w("zoom",r,q))}},
aQ:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ar(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iY:1}
M.bW.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
O:function(a){var s=this.r
return s==null?null:s.w(a)},
aX:function(){return this.O(null)},
f0:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gN(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q].gm()
o=p.a;(o==null?p.a=[]:o).push(r)}this.O(new D.ao())},
f2:function(a,b){var s,r
for(s=b.gK(b),r=this.gN();s.t();)s.gE(s).gm().L(0,r)
this.O(new D.ap())},
a5:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a3(s,s.length),r=H.Q(s).c;s.t();)r.a(s.d).a5(a)
q.f=!1},
$ibb:1}
M.bY.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
O:function(a){var s=this.r
return s==null?null:s.w(a)},
aX:function(){return this.O(null)},
sb2:function(a){var s,r,q=this
if(a==null)a=new X.hb()
s=q.b
if(s!==a){if(s!=null)s.gm().L(0,q.gN())
r=q.b
q.b=a
a.gm().l(0,q.gN())
q.O(new D.w("camera",r,q.b))}},
sb6:function(a,b){var s,r,q=this
if(b==null)b=X.jb(null)
s=q.c
if(s!==b){if(s!=null)s.gm().L(0,q.gN())
r=q.c
q.c=b
b.gm().l(0,q.gN())
q.O(new D.w("target",r,q.c))}},
sb7:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().L(0,r.gN())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gN())
r.O(new D.w("technique",s,r.d))}},
a5:function(a){var s,r=this
a.ca(r.d)
s=r.c
if(s!=null)s.X(a)
s=r.b
if(s!=null)s.X(a)
s=r.e
s.ag(0,a)
s.a5(a)
s=r.b
if(s!=null)s.ba(a)
a.c9()},
$ibb:1}
M.c1.prototype={
O:function(a){var s=this.y
return s==null?null:s.w(a)},
aX:function(){return this.O(null)},
es:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gN(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.c2()
n=o.a;(n==null?o.a=[]:n).push(r)}this.O(new D.ao())},
ev:function(a,b){var s,r
for(s=b.gK(b),r=this.gN();s.t();)s.gE(s).gm().L(0,r)
this.O(new D.ap())},
sb2:function(a){var s,r,q=this
if(a==null)a=X.jV(null)
s=q.b
if(s!==a){if(s!=null)s.gm().L(0,q.gN())
r=q.b
q.b=a
a.gm().l(0,q.gN())
q.O(new D.w("camera",r,q.b))}},
sb6:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().L(0,r.gN())
s=r.c
r.c=b
b.gm().l(0,r.gN())
r.O(new D.w("target",s,r.c))}},
sb7:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().L(0,r.gN())
s=r.d
r.d=a
if(a!=null)a.gm().l(0,r.gN())
r.O(new D.w("technique",s,r.d))}},
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
a5:function(a){var s,r,q,p=this
a.ca(p.d)
s=p.c
if(s!=null)s.X(a)
s=p.b
if(s!=null)s.X(a)
s=p.d
if(s!=null)s.ag(0,a)
for(s=p.e.a,r=new J.a3(s,s.length),q=H.Q(r).c;r.t();)q.a(r.d).ag(0,a)
for(s=new J.a3(s,s.length),r=H.Q(s).c;s.t();)r.a(s.d).a5(a)
if(p.b!=null){a.cy.ay()
a.db.ay()}a.c9()},
$ibb:1}
A.fH.prototype={}
A.fI.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fH:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
d2:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.af.prototype={
gak:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.af))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.ce.prototype={
dQ:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.bd(""),d0=c8.fr
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
A.mO(c8,c9)
A.mQ(c8,c9)
A.mP(c8,c9)
A.mS(c8,c9)
A.mT(c8,c9)
A.mR(c8,c9)
A.mU(c8,c9)
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
c3.dn(0,s.charCodeAt(0)==0?s:s,A.mN(c8))
c3.y=c3.gaa(c3).h(0,"posAttr")
c3.Q=c3.gaa(c3).h(0,"normAttr")
c3.z=c3.gaa(c3).h(0,"binmAttr")
c3.ch=c3.gaa(c3).h(0,"txt2DAttr")
c3.cx=c3.gaa(c3).h(0,"txtCubeAttr")
c3.cy=c3.gaa(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gu().D(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gu().D(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gu().D(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gu().D(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gu().D(0,"viewMat"))
if(c8.x1)c3.go=t.Q.a(c3.gu().D(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gu().D(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gu().D(0,"colorMat"))
c3.k3=[]
s=c8.aK
if(s>0){c3.k2=t.v.a(c3.gu().D(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.d(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.d(c6+q+c7))
r.push(d0.a(l))}}d0=c8.a
if(d0.a)c3.k4=t.g.a(c3.gu().D(0,"emissionClr"))
if(d0.b)c3.r1=t.G.a(c3.gu().D(0,"emissionTxt"))
d0=c8.b
if(d0.a)c3.rx=t.g.a(c3.gu().D(0,"ambientClr"))
if(d0.b)c3.ry=t.G.a(c3.gu().D(0,"ambientTxt"))
d0=c8.c
if(d0.a)c3.x2=t.g.a(c3.gu().D(0,"diffuseClr"))
if(d0.b)c3.y1=t.G.a(c3.gu().D(0,"diffuseTxt"))
d0=c8.d
if(d0.a)c3.aK=t.g.a(c3.gu().D(0,"invDiffuseClr"))
if(d0.b)c3.aL=t.G.a(c3.gu().D(0,"invDiffuseTxt"))
d0=c8.e
s=d0.a
if(s||d0.b||!1){c3.dd=t.n.a(c3.gu().D(0,"shininess"))
if(s)c3.da=t.g.a(c3.gu().D(0,"specularClr"))
if(d0.b)c3.dc=t.G.a(c3.gu().D(0,"specularTxt"))}if(c8.f.b)c3.de=t.G.a(c3.gu().D(0,"bumpTxt"))
if(c8.db){c3.df=t.a.a(c3.gu().D(0,"envSampler"))
d0=c8.r
if(d0.a)c3.dg=t.g.a(c3.gu().D(0,"reflectClr"))
if(d0.b)c3.dh=t.G.a(c3.gu().D(0,"reflectTxt"))
d0=c8.x
s=d0.a
if(s||d0.b||!1){c3.di=t.n.a(c3.gu().D(0,"refraction"))
if(s)c3.dj=t.g.a(c3.gu().D(0,"refractClr"))
if(d0.b)c3.dk=t.G.a(c3.gu().D(0,"refractTxt"))}}d0=c8.y
if(d0.a)c3.dl=t.n.a(c3.gu().D(0,"alpha"))
if(d0.b)c3.dm=t.G.a(c3.gu().D(0,"alphaTxt"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.bT=P.L(r,t.W)
c3.bU=P.L(r,t.J)
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
a3=a2}g.push(new A.ei(l,d,c,a3,a2,a1))}c3.bU.k(0,i,g)
o=c3.bT
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.bV=P.L(r,t.W)
c3.bW=P.L(r,t.L)
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
g.push(new A.ej(a6,a5,a4,l,d,a7))}c3.bW.k(0,i,g)
o=c3.bV
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.bX=P.L(r,t.W)
c3.bY=P.L(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.em(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.bY.k(0,i,g)
a8=c3.bX
m=c3.r
if(m==null)H.f(P.d(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.d(c6+a9+c7))
a8.k(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.bZ=P.L(s,t.W)
c3.c_=P.L(s,t.R)
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
g.push(new A.ep(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.c_.k(0,i,g)
f=c3.bZ
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
f.k(0,i,s.a(l))}}}},
ai:function(a,b){if(b!=null&&b.d)if(a!=null)a.dH(b)},
ff:function(a,b){}}
A.aX.prototype={
i:function(a){return"barLight"+this.a}}
A.b_.prototype={
i:function(a){return"dirLight"+this.a}}
A.ba.prototype={
i:function(a){return"pointLight"+this.a}}
A.bc.prototype={
i:function(a){return"spotLight"+this.a}}
A.hp.prototype={
i:function(a){return this.aL}}
A.ei.prototype={}
A.ej.prototype={}
A.em.prototype={}
A.ep.prototype={}
A.bD.prototype={
dn:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cv(b,35633)
r=n.cv(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gar(),s)
q.attachShader(n.gar(),r)
q.linkProgram(n.gar())
if(!H.kp(q.getProgramParameter(n.gar(),35714))){o=q.getProgramInfoLog(n.gar())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.d("Failed to link shader: "+o))}n.fg()
n.fi()},
gaa:function(a){var s=this.f
if(s==null)throw H.c(P.d("Must initialize the shader prior to getting the attributes."))
return s},
gu:function(){var s=this.r
if(s==null)throw H.c(P.d(u.C))
return s},
gar:function(){var s=this.e
if(s==null)throw H.c(P.d(u.F))
return s},
X:function(a){a.a.useProgram(this.e)
this.gaa(this).fH()},
cv:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.kp(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.d('Error compiling shader "'+H.t(q)+'": '+s))}return q},
fg:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.iO(l.getProgramParameter(o.gar(),35721))
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
m.push(new A.fH(l,q,p))}o.f=new A.fI(m)},
fi:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.iO(j.getProgramParameter(m.gar(),35718))
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
k.push(m.fE(o,n,q,p))}m.r=new A.ik(k)},
aD:function(a,b,c){var s=this.a
if(a===1)return new A.cw(s,b,c)
else return A.jl(s,this.e,b,a,c)},
e6:function(a,b,c){var s=this.a
if(a===1)return new A.en(s,b,c)
else return A.jl(s,this.e,b,a,c)},
e7:function(a,b,c){var s=this.a
if(a===1)return new A.eo(s,b,c)
else return A.jl(s,this.e,b,a,c)},
bd:function(a,b){return new P.eN(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
fE:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aD(b,c,d)
case 5121:return s.aD(b,c,d)
case 5122:return s.aD(b,c,d)
case 5123:return s.aD(b,c,d)
case 5124:return s.aD(b,c,d)
case 5125:return s.aD(b,c,d)
case 5126:return new A.ef(s.a,c,d)
case 35664:return new A.ig(s.a,c,d)
case 35665:return new A.eg(s.a,c,d)
case 35666:return new A.eh(s.a,c,d)
case 35667:return new A.ih(s.a,c,d)
case 35668:return new A.ii(s.a,c,d)
case 35669:return new A.ij(s.a,c,d)
case 35674:return new A.il(s.a,c,d)
case 35675:return new A.ek(s.a,c,d)
case 35676:return new A.el(s.a,c,d)
case 35678:return s.e6(b,c,d)
case 35680:return s.e7(b,c,d)
case 35670:throw H.c(s.bd("BOOL",c))
case 35671:throw H.c(s.bd("BOOL_VEC2",c))
case 35672:throw H.c(s.bd("BOOL_VEC3",c))
case 35673:throw H.c(s.bd("BOOL_VEC4",c))
default:throw H.c(P.d("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.ct.prototype={}
A.id.prototype={}
A.ik.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
D:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.d("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.q()},
q:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cw.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.ih.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.ii.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.ij.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.ie.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.ef.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.ig.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eg.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eh.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.il.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.ek.prototype={
a8:function(a){var s=new Float32Array(H.cY(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.el.prototype={
a8:function(a){var s=new Float32Array(H.cY(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.en.prototype={
dH:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.eo.prototype={
dI:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.iN.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.c4(q.b,b).c4(q.d.c4(q.c,b),c)
q=new V.V(p.a,p.b,p.c)
if(!J.a2(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a0()}a.sh7(p.J())
q=1-b
s=1-c
s=new V.aI(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.a2(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a0()}},
$S:32}
F.ag.prototype={
aB:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.d("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.d("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.gU().b.push(s)
s.b=b
b.gU().c.push(s)
s.c=c
c.gU().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gU().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a0()}},
e_:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.ev()
if(n!=null)q=q.T(0,n)
if(s!=null)q=q.T(0,s)
if(r!=null)q=q.T(0,r)
if(q.ds())return p
return q.J()},
e2:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aV(0,n)
q=new V.E(o.a,o.b,o.c).J()
o=r.aV(0,n)
return q.b3(new V.E(o.a,o.b,o.c).J()).J()},
bO:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.e_()
if(s==null){s=q.e2()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
dZ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.ev()
if(n!=null)q=q.T(0,n)
if(s!=null)q=q.T(0,s)
if(r!=null)q=q.T(0,r)
if(q.ds())return p
return q.J()},
e1:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.x().toString
if(Math.abs(p-0)<1e-9){j=b.aV(0,e)
o=new V.E(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.aR(0)}else{n=(j-s.b)/p
j=b.aV(0,e)
j=new V.V(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).aV(0,h)
o=new V.E(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aR(0)}m=l.d
if(m!=null){m=m.J()
o=m.b3(o).J().b3(m).J()}return o},
bM:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.dZ()
if(s==null){s=q.e1()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a0()}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.q()},
v:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gaM(p)
p=a+C.d.ae(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gaM(o)
p=p+C.d.ae(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gaM(o)
s=p+C.d.ae(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.q()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.q()
return s+((p==null?"-":p)+"}")},
q:function(){return this.v("")}}
F.hg.prototype={
dP:function(a,b){var s=this,r=a.a
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
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.q()},
v:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gaM(s)
s=a+C.d.ae(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gaM(r)
return s+C.d.ae(C.b.i(r==null?-1:r),0)},
q:function(){return this.v("")}}
F.hG.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.q()},
v:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gaM(s)
return a+C.d.ae(C.b.i(s),0)},
q:function(){return this.v("")}}
F.hN.prototype={
gW:function(){var s=this.a
return s==null?this.a=new F.p(this,[]):s},
gbl:function(a){var s=this.b
return s==null?this.b=new F.bE(this,[]):s},
gan:function(a){var s=this.c
return s==null?this.c=new F.cs(this,[]):s},
gU:function(){var s=this.d
return s==null?this.d=new F.cr(this,[]):s},
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
fO:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gW().R()
s=d.gW().c.length
for(b=a.gW().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
o.l(0,p.fD())}d.gW().R()
for(b=a.gbl(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).R()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bE(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,j)
o=new F.hG()
if(j.a==null)H.f(P.d("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.iv([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bE(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.w(c)}}}for(b=a.gan(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).R()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).R()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cs(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,g)
new F.hg().dP(h,g)}for(b=a.gU().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).R()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).R()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).R()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cr(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,g)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,e)
new F.ag().aB(h,g,e)}b=d.e
if(b!=null)b.az(0)},
au:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gU().au()||!1
if(!r.gW().au())s=!1
q=r.e
if(q!=null)q.az(0)
return s},
cY:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gW().c.length,c=$.ak(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.aV().a)!==0)++a
if((b&$.aU().a)!==0)++a
if((b&$.aW().a)!==0)++a
if((b&$.bk().a)!==0)++a
if((b&$.d4().a)!==0)++a
if((b&$.d5().a)!==0)++a
if((b&$.bQ().a)!==0)++a
if((b&$.aT().a)!==0)++a
s=a1.gcf(a1)
r=P.hi(d*s,0,!1)
e.a=0
q=P.ls(a,new F.hO(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.cY(r)),35044)
c.bindBuffer(f,g)
p=new Z.bn(new Z.ex(f,b),[],q,a1)
if(h.gbl(h).b.length!==0){o=[]
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
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).R()}b=b.e}o.push(b==null?0:b);++n}k=Z.jm(c,34963,o)
p.b.push(new Z.c5(0,o.length,k))}if(h.gan(h).b.length!==0){o=[]
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
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).R()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).R()}b=b.e}o.push(b==null?0:b);++n}k=Z.jm(c,34963,o)
p.b.push(new Z.c5(1,o.length,k))}if(h.gU().b.length!==0){o=[]
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
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).R()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).R()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).R()}b=b.e}o.push(b==null?0:b);++n}k=Z.jm(c,34963,o)
p.b.push(new Z.c5(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.gW().c.length!==0){q.push("Vertices:")
q.push(s.gW().v(r))}if(s.gbl(s).b.length!==0){q.push("Points:")
q.push(s.gbl(s).v(r))}if(s.gan(s).b.length!==0){q.push("Lines:")
q.push(s.gan(s).v(r))}if(s.gU().b.length!==0){q.push("Faces:")
q.push(s.gU().v(r))}return C.a.p(q,"\n")},
a0:function(){var s=this.e
return s==null?null:s.w(null)}}
F.hO.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fw(a),f=g.gcf(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.p(o,[]):m).c
if(n>=m.length)return H.e(m,n)
l=m[n].fM(g)
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
n.aB(l,q,p)
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
f.aB(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,k)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
f=new F.ag()
f.aB(k,h,g)
e.push(f)}else{(l==null?s.a=new F.p(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
f=new F.ag()
f.aB(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,k)
f=new F.ag()
f.aB(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gj:function(a){return this.b.length},
au:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bO())q=!1
return q},
bN:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bM())q=!1
return q},
i:function(a){return this.q()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(a))
return C.a.p(p,"\n")},
q:function(){return this.v("")}}
F.cs.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.q()},
v:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.e(q,s)
r.push(q[s].v(a+(""+s+". ")))}return C.a.p(r,"\n")},
q:function(){return this.v("")}}
F.bE.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.q()},
v:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(a))
return C.a.p(p,"\n")},
q:function(){return this.v("")}}
F.cA.prototype={
bQ:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iq(s.cx,p,m,r,q,o,n,a,l)},
fD:function(){return this.bQ(null)},
gan:function(a){var s=this.c
return s==null?this.c=new F.iu([],[]):s},
gU:function(){var s=this.d
return s==null?this.d=new F.ir([],[],[]):s},
gaM:function(a){var s=this.a
if(s!=null)s.gW().R()
return this.e},
sh7:function(a){var s
if(!J.a2(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a0()}},
fM:function(a){var s,r,q,p,o=this,n=null
if(a.n(0,$.ak())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.aV())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.n(0,$.aU())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.n(0,$.aW())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.n(0,$.bk())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.d4())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.n(0,$.d5())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.n(0,$.bQ()))return[o.ch]
else if(a.n(0,$.aT())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
bO:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.ev()
p.gU().F(0,new F.ix(o))
p.r=o.a.J()
if(r){s.a0()
o=s.e
if(o!=null)o.az(0)}return!0},
bM:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.ev()
p.gU().F(0,new F.iw(o))
p.x=o.a.J()
if(r){s.a0()
o=s.e
if(o!=null)o.az(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.q()},
v:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.d.ae(C.b.i(q.e),0))
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
q:function(){return this.v("")}}
F.ix.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.T(0,r)}},
$S:7}
F.iw.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.T(0,r)}},
$S:7}
F.p.prototype={
R:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.d("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a0()
return!0},
bf:function(a,b,c,d,e,f){var s=F.iq(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
au:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bO()
return!0},
bN:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bM()
return!0},
fA:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.J()
if(!J.a2(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.w(null)}}}}}return!0},
i:function(a){return this.q()},
v:function(a){var s,r,q,p
this.R()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].v(a))
return C.a.p(s,"\n")},
q:function(){return this.v("")}}
F.ir.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.is(s,b))
C.a.F(s.d,new F.it(s,b))},
i:function(a){return this.q()},
q:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
return C.a.p(p,"\n")}}
F.is.prototype={
$1:function(a){if(!J.a2(a.a,this.a))this.b.$1(a)},
$S:7}
F.it.prototype={
$1:function(a){var s=this.a
if(!J.a2(a.a,s)&&!J.a2(a.b,s))this.b.$1(a)},
$S:7}
F.iu.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.q()},
q:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
return C.a.p(p,"\n")}}
F.iv.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.q()},
q:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].v(""))
return C.a.p(p,"\n")}}
O.dy.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.z():s},
M:function(a){var s=this.fr
return s==null?null:s.w(a)},
aY:function(){return this.M(null)},
cH:function(a){this.a=null
this.M(a)},
fd:function(){return this.cH(null)},
em:function(a,b){return this.M(new D.ao())},
eo:function(a,b){return this.M(new D.ap())},
gcS:function(){var s=this.r
return s==null?this.r=O.dz(this,"ambient"):s},
gbS:function(){var s=this.x
return s==null?this.x=O.dz(this,"diffuse"):s},
ct:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.O(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.ga3()
o=a1.h(0,q.ga3())
a1.k(0,p,o==null?1:o)}n=[]
a1.F(0,new O.ht(b,n))
C.a.aU(n,new O.hu())
m=new H.O(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.ga3()
o=m.h(0,q.ga3())
m.k(0,p,o==null?1:o)}l=[]
m.F(0,new O.hv(b,l))
C.a.aU(l,new O.hw())
k=new H.O(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.ga3()
o=k.h(0,q.ga3())
k.k(0,p,o==null?1:o)}j=[]
k.F(0,new O.hx(b,j))
C.a.aU(j,new O.hy())
i=new H.O(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.o)(a0),++r){q=a0[r]
s=q.ga3()
p=i.h(0,q.ga3())
i.k(0,s,p==null?1:p)}h=[]
i.F(0,new O.hz(b,h))
C.a.aU(h,new O.hA())
a0=C.b.Y(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hq(new V.aB(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.dz(b,"emission"):a2).c
s=b.gcS().c
p=b.gbS().c
o=b.y
o=(o==null?b.y=O.dz(b,"invDiffuse"):o).c
g=b.z
g=(g==null?b.z=new O.hs(new V.R(0,0,0),b,"specular",new A.af(!1,!1,!1)):g).c
f=b.Q
f=(f==null?b.Q=new O.ho(b,"bump",new A.af(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.dz(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hr(new V.R(0,0,0),b,"refract",new A.af(!1,!1,!1)):d).c
c=b.db
return A.lu(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hn(b,"alpha",new A.af(!1,!1,!1)):c).c,n,l,j,h)},
a9:function(a,b){if(b!=null)if(!C.a.H(a,b)){b.a=a.length
a.push(b)}},
ag:function(a,b){var s,r=this.dx
r=J.az(r==null?[]:r)
s=H.Q(r).c
for(;r.t();)s.a(r.d).ag(0,b)},
dB:function(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=b5.a
if(b7==null){s=b5.ct()
r=s.aL
b7=t.d1.a(b8.fr.h(0,r))
if(b7==null){q=b8.a
p=t.S
o=t.W
b7=new A.ce(s,[],P.L(p,o),P.L(p,t.J),P.L(p,o),P.L(p,t.L),P.L(p,o),P.L(p,t.U),P.L(p,o),P.L(p,t.R),q,r)
b7.dQ(s,q)
b8.cR(b7)}b7=b5.a=b7
b9.e=null}n=b7.x
m=n.d9
s=b9.e
if(!(s instanceof Z.bn))s=b9.e=null
if(s==null||!s.d.n(0,m)){s=n.k4
if(s){r=b9.d
if(r!=null)r.au()}r=n.r1
if(r){q=b9.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gU().bN()
q.gW().bN()
q=q.e
if(q!=null)q.az(0)}}q=n.rx
if(q){p=b9.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gW().fA()
p=p.e
if(p!=null)p.az(0)}}p=b9.d
l=p==null?b6:p.cY(new Z.ey(b8.a),m)
if(l==null)return
p=l.av($.ak())
if(p!=null){o=b7.y
o=o==null?b6:o.c
p.e=o==null?0:o}if(s){s=l.av($.aV())
if(s!=null){p=b7.Q
p=p==null?b6:p.c
s.e=p==null?1:p}}if(r){s=l.av($.aU())
if(s!=null){r=b7.z
r=r==null?b6:r.c
s.e=r==null?2:r}}if(n.r2){s=l.av($.aW())
if(s!=null){r=b7.ch
r=r==null?b6:r.c
s.e=r==null?3:r}}if(q){s=l.av($.bk())
if(s!=null){r=b7.cx
r=r==null?b6:r.c
s.e=r==null?4:r}}if(n.ry){s=l.av($.aT())
if(s!=null){r=b7.cy
r=r==null?b6:r.c
s.e=r==null?5:r}}b9.e=l}k=[]
b7.X(b8)
if(n.fr){s=b8.dx
s=s.gV(s)
r=b7.db
if(r!=null)r.a8(s.a2(0,!0))}if(n.fx){s=b8.cx
if(s==null){s=b8.db
r=b8.dx
r=b8.cx=s.gV(s).A(0,r.gV(r))
s=r}r=b7.dx
if(r!=null)r.a8(s.a2(0,!0))}s=b8.ch
if(s==null){s=b8.dx
s=b8.ch=b8.gh0().A(0,s.gV(s))}r=b7.fr
if(r!=null)r.a8(s.a2(0,!0))
if(n.go){s=b8.db
s=s.gV(s)
r=b7.dy
if(r!=null)r.a8(s.a2(0,!0))}if(n.x1){s=$.jT
if(s==null){s=new V.ch(1,0,0,0,1,0,0,0,1)
$.jT=s}r=b7.go
if(r!=null)r.a8(s.a2(0,!0))}if(n.x2){s=V.a5()
r=b7.id
if(r!=null)r.a8(s.a2(0,!0))}if(n.y1){s=V.a5()
r=b7.k1
if(r!=null)r.a8(s.a2(0,!0))}if(n.aK>0){s=b5.e.a
j=s.length
r=b7.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.e(s,i)
r=s[i]
q=b7.k3
if(i>=q.length)return H.e(q,i)
q=q[i]
h=new Float32Array(H.cY(r.a2(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=b5.f
r=r==null?b6:r.f
if(r==null)r=new V.R(0,0,0)
q=b7.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b5.f
b5.a9(k,s==null?b6:s.d)
s=b5.f
s=s==null?b6:s.d
b7.ai(b7.r1,s)}if(n.k1){s=n.b
if(s.a){r=b5.r
r=r==null?b6:r.f
if(r==null)r=new V.R(0,0,0)
q=b7.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b5.r
b5.a9(k,s==null?b6:s.d)
s=b5.r
s=s==null?b6:s.d
b7.ai(b7.ry,s)}s=n.c
if(s.a){r=b5.x
r=r==null?b6:r.f
if(r==null)r=new V.R(0,0,0)
q=b7.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b5.x
b5.a9(k,s==null?b6:s.d)
s=b5.x
s=s==null?b6:s.d
b7.ai(b7.y1,s)}s=n.d
if(s.a){r=b5.y
r=r==null?b6:r.f
if(r==null)r=new V.R(0,0,0)
q=b7.aK
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b5.y
b5.a9(k,s==null?b6:s.d)
s=b5.y
s=s==null?b6:s.d
b7.ai(b7.aL,s)}s=n.e
r=s.a
if(r||s.b||!1){q=b5.z
q=q==null?b6:q.ch
if(q==null)q=100
p=b7.dd
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b5.z
r=r==null?b6:r.f
if(r==null)r=new V.R(1,1,1)
q=b7.da
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b5.z
b5.a9(k,s==null?b6:s.d)
s=b5.z
s=s==null?b6:s.d
b7.ai(b7.dc,s)}s=n.z
if(s.length>0){g=new H.O(t.y)
r=b5.dx
r=r==null?b6:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.ga3()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
p=b7.bU.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ghe()
o=$.as
p=p.b9(o==null?$.as=new V.V(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghi()
o=$.as
p=p.b9(o==null?$.as=new V.V(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaJ(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gd8()){p=e.gcT()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcU()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcV()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=b7.bT.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b8.db
a=r.gV(r)
a0=new H.O(t.y)
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
d=e.ga3()
c=a0.h(0,d)
if(c==null)c=0
a0.k(0,d,c+1)
a8=b7.bW.h(0,d)
if(a8==null)a8=[]
if(c>>>0!==c||c>=a8.length)return H.e(a8,c)
b=a8[c]
a8=e.gd1(e)
a8=new V.E(C.c.A(p,a8.gd4(a8))+C.c.A(o,a8.gd5(a8))+C.c.A(a1,a8.gd6()),C.c.A(a2,a8.gd4(a8))+C.c.A(a3,a8.gd5(a8))+C.c.A(a4,a8.gd6()),C.c.A(a5,a8.gd4(a8))+C.c.A(a6,a8.gd5(a8))+C.c.A(a7,a8.gd6())).J()
a9=b.e
a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gaJ(e)
a9=b.f
a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
e.gaf()
a8=e.gd1(e)
a9=b.d
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gbp()
a9=b.b
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gbn(e)
a9=b.c
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gaf()
if(!C.a.H(k,a8)){a8.a=k.length
k.push(a8)}a8=e.gaf()
a9=a8.gbj(a8)
if(a9){a9=b.r
if(a9!=null){b0=a8.d
b1=a9.a
a9=a9.d
if(!b0)b1.uniform1i(a9,0)
else b1.uniform1i(a9,a8.a)}}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=b7.bV.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b8.db
a=r.gV(r)
b2=new H.O(t.y)
r=b5.dx
r=r==null?b6:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.ga3()
c=b2.h(0,d)
if(c==null)c=0
b2.k(0,d,c+1)
p=b7.bY.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
b3=a.A(0,e.gV(e))
p=e.gV(e)
o=$.as
p=p.b9(o==null?$.as=new V.V(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.as
p=b3.b9(p==null?$.as=new V.V(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaJ(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaf()
p=b3.c1(0)
o=b.d
if(o!=null){h=new Float32Array(H.cY(new V.ch(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).a2(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gaf()
p=e.gaf()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaf()
o=p.gbj(p)
if(o){o=b.f
if(o!=null){a1=p.d
a2=o.a
o=o.d
if(a1<6)a2.uniform1i(o,0)
else a2.uniform1i(o,p.a)}}e.gaT()
p=e.gdJ()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gaT()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaT()
o=p.gbj(p)
if(o){o=b.r
if(o!=null){a1=p.d
a2=o.a
o=o.d
if(a1<6)a2.uniform1i(o,0)
else a2.uniform1i(o,p.a)}}if(e.gd8()){p=e.gcT()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcU()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcV()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=b2.h(0,q)
if(j==null)j=0
q=b7.bX.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b8.db
a=r.gV(r)
b4=new H.O(t.y)
r=b5.dx
r=r==null?b6:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.ga3()
c=b4.h(0,d)
if(c==null)c=0
b4.k(0,d,c+1)
p=b7.c_.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.gh_(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gd1(e).J()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.b9(e.gh_(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaJ(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaf()
p=e.gbp()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gbn(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghr()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghs()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaf()
p=e.gaf()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaf()
o=p.gbj(p)
if(o){o=b.dx
if(o!=null){a1=p.d
a2=o.a
o=o.d
if(!a1)a2.uniform1i(o,0)
else a2.uniform1i(o,p.a)}}e.gaT()
p=e.gdJ()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gaT()
if(!C.a.H(k,p)){p.a=k.length
k.push(p)}p=e.gaT()
o=p.gbj(p)
if(o){o=b.dy
if(o!=null){a1=p.d
a2=o.a
o=o.d
if(!a1)a2.uniform1i(o,0)
else a2.uniform1i(o,p.a)}}if(e.ghh()){p=e.ghg()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghf()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gd8()){p=e.gcT()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcU()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gcV()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=b4.h(0,q)
if(j==null)j=0
q=b7.bZ.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.b){s=b5.Q
b5.a9(k,s==null?b6:s.d)
s=b5.Q
s=s==null?b6:s.d
b7.ai(b7.de,s)}if(n.dy){s=b8.Q
if(s==null){s=b8.db
s=b8.Q=s.gV(s).c1(0)}r=b7.fy
if(r!=null)r.a8(s.a2(0,!0))}if(n.db){b5.a9(k,b6)
b7.ff(b7.df,b6)
s=n.r
if(s.a){r=b5.cx
r=r==null?b6:r.f
if(r==null)r=new V.R(1,1,1)
q=b7.dg
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b5.cx
b5.a9(k,s==null?b6:s.d)
s=b5.cx
s=s==null?b6:s.d
b7.ai(b7.dh,s)}s=n.x
r=s.a
if(r||s.b||!1){q=b5.cy
q=q==null?b6:q.ch
if(q==null)q=0
p=b7.di
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b5.cy
r=r==null?b6:r.f
if(r==null)r=new V.R(1,1,1)
q=b7.dj
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.b){s=b5.cy
b5.a9(k,s==null?b6:s.d)
s=b5.cy
s=s==null?b6:s.d
b7.ai(b7.dk,s)}}s=n.y
r=s.a
q=!r
if(!q||s.b||!1){if(r){r=b5.db
r=r==null?b6:r.f
if(r==null)r=1
p=b7.dl
if(p!=null)p.a.uniform1f(p.d,r)}if(s.b){r=b5.db
b5.a9(k,r==null?b6:r.d)
r=b5.db
r=r==null?b6:r.d
b7.ai(b7.dm,r)}r=b8.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b8.a,i=0;i<k.length;++i){p=k[i]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=t.D.a(b9.e)
p.X(b8)
p.a5(b8)
p.ba(b8)
if(!q||s.b||!1)r.disable(3042)
for(i=0;i<k.length;++i){s=k[i]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(3553,b6)}}r.useProgram(b6)
b7.gaa(b7).d2()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.ct().aL}}
O.ht.prototype={
$2:function(a,b){return this.b.push(new A.aX(a,C.b.Y(b+3,4)*4))},
$S:8}
O.hu.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:36}
O.hv.prototype={
$2:function(a,b){return this.b.push(new A.b_(a,C.b.Y(b+3,4)*4))},
$S:8}
O.hw.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:37}
O.hx.prototype={
$2:function(a,b){return this.b.push(new A.ba(a,C.b.Y(b+3,4)*4))},
$S:8}
O.hy.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:38}
O.hz.prototype={
$2:function(a,b){return this.b.push(new A.bc(a,C.b.Y(b+3,4)*4))},
$S:8}
O.hA.prototype={
$2:function(a,b){return C.b.ab(a.a,b.a)},
$S:39}
O.hn.prototype={
as:function(){var s,r=this
r.ci()
s=r.f
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.M(new D.w(r.b,s,1))}}}
O.cf.prototype={
M:function(a){return this.a.M(a)},
aY:function(){return this.M(null)},
as:function(){},
cL:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.as()
s=q.a
s.a=null
s.M(null)}}}
O.ho.prototype={}
O.cg.prototype={
cK:function(a){var s,r=this
if(!r.f.n(0,a)){s=r.f
r.f=a
r.a.M(new D.w(r.b+".color",s,a))}},
as:function(){this.ci()
this.cK(new V.R(1,1,1))},
saJ:function(a,b){this.cL(new A.af(!0,this.c.b,!1))
this.cK(b)}}
O.hq.prototype={}
O.hr.prototype={
as:function(){var s,r=this
r.cj()
s=r.ch
$.x().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.M(new D.w(r.b+".refraction",s,1))}}}
O.hs.prototype={
as:function(){var s,r=this
r.cj()
s=r.ch
$.x().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
r.a.M(new D.w(r.b+".shininess",s,100))}}}
O.dX.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
M:function(a){var s=this.e
return s==null?null:s.w(a)},
aY:function(){return this.M(null)},
dB:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.x.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.ct(a.a,"Skybox")
s.dn(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gaa(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gu().h(0,"fov"))
s.z=r.a(s.gu().h(0,"ratio"))
s.Q=t.g.a(s.gu().h(0,"boxClr"))
s.ch=t.a.a(s.gu().h(0,"boxTxt"))
s.cx=t.j.a(s.gu().h(0,"viewMat"))
a.cR(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.cY(new Z.ey(a.a),$.ak())
if(r==null)r=l
else{q=r.av($.ak())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
if(!o.c&&o.d>=6){o.c=!0
r=a.a
r.activeTexture(33985)
r.bindTexture(34067,o.b)}r=a.d
q=a.c
p=m.a
if(p!=null){p.X(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.dI(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.gV(r).c1(0)
p=p.cx
if(p!=null)p.a8(r.a2(0,!0))}r=b.e
if(r instanceof Z.bn){r.X(a)
r.a5(a)
r.ba(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gaa(r).d2()}if(o.c){o.c=!1
r=a.a
r.activeTexture(33984+o.a)
r.bindTexture(34067,l)}}}
O.hX.prototype={}
T.hY.prototype={}
T.hZ.prototype={}
T.i_.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.z():s}}
T.i0.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s}}
T.i1.prototype={
fN:function(a){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,33071)
p.texParameteri(q,10243,33071)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null)
this.cB()
s=W.jQ(a)
r=new T.i_(o)
W.T(s,"load",new T.i3(this,r,s,!1,o,!1,!1),!1)
return r},
aF:function(a,b,c,d,e,f){var s=W.jQ(c)
this.cB()
W.T(s,"load",new T.i2(this,s,!1,b,!1,d,a),!1)},
cJ:function(a,b,c){var s,r,q,p,o,n
b=V.jF(b)
s=a.width
r=V.jF(s==null?512:s)
s=a.height
q=V.jF(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.j7()
p.width=r
p.height=q
o=t.b.a(C.f.dF(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.nb(o.getImageData(0,0,s,n==null?512:n))}},
cB:function(){return this.d++},
cw:function(){return this.e++}}
T.i3.prototype={
$1:function(a){var s,r,q=this,p=q.c
p.width
p.height
s=q.a
r=s.cJ(p,s.b,q.d)
p.width
p.height
p=s.a
p.bindTexture(3553,q.e)
p.pixelStorei(37440,0)
C.r.dD(p,3553,0,6408,6408,5121,r)
p.bindTexture(3553,null)
p=q.b
if(!p.d){p.d=!0
p=p.y
if(p!=null)p.d7()}s.cw()},
$S:2}
T.i2.prototype={
$1:function(a){var s=this,r=s.a,q=r.cJ(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.r.dD(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.d7()}r.cw()},
$S:2}
X.h9.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.z():s},
al:function(a){var s=this.x
return s==null?null:s.w(a)},
X:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.c.aj(q.a*s)
o=C.c.aj(q.b*r)
n=C.c.aj(q.c*s)
a.c=n
q=C.c.aj(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)}}
X.hb.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
X:function(a){var s
a.cy.bm(V.a5())
s=V.a5()
a.db.bm(s)},
ba:function(a){a.cy.ay()
a.db.ay()}}
X.dN.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.z():s},
al:function(a){var s=this.f
return s==null?null:s.w(a)},
dV:function(){return this.al(null)},
X:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.ar(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bm(i)
s=$.kQ()
r=q.b
if(r!=null)s=r.aQ(0,a,q).A(0,s)
a.db.bm(s)},
ba:function(a){a.cy.ay()
a.db.ay()}}
X.hV.prototype={}
V.j3.prototype={
$1:function(a){var s=C.c.cb(this.a.gfJ(),2)
if(s!=="0.00")P.jG(s+" fps")},
$S:40}
V.hP.prototype={
cQ:function(a){var s,r,q,p,o,n,m=this.fh(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.J(C.a.fL(a)),s=new P.bJ(m.dE(new H.bv(s,s.gj(s))).a());s.t();){r=s.gE(s)
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
if(H.kF(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.mf(C.J,r,C.n,!1)
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
fh:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.i7(P.L(s,t.aJ),P.L(s,t.aX),P.jR(s))
h.d=h.G(0,q)
s=h.G(0,q).p(0,p)
r=new K.P([])
r.P(new H.J("*"))
s.a.push(r)
s.c=!0
s=[]
h.G(0,p).p(0,p).a.push(new K.aG(s))
r=new K.P([])
r.P(new H.J("*"))
s.push(r)
r=h.G(0,p).p(0,"BoldEnd")
s=new K.P([])
s.P(new H.J("*"))
r.a.push(s)
r.c=!0
r=h.G(0,q).p(0,o)
s=new K.P([])
s.P(new H.J("_"))
r.a.push(s)
r.c=!0
r=[]
h.G(0,o).p(0,o).a.push(new K.aG(r))
s=new K.P([])
s.P(new H.J("_"))
r.push(s)
s=h.G(0,o).p(0,n)
r=new K.P([])
r.P(new H.J("_"))
s.a.push(r)
s.c=!0
s=h.G(0,q).p(0,m)
r=new K.P([])
r.P(new H.J("`"))
s.a.push(r)
s.c=!0
s=[]
h.G(0,m).p(0,m).a.push(new K.aG(s))
r=new K.P([])
r.P(new H.J("`"))
s.push(r)
r=h.G(0,m).p(0,"CodeEnd")
s=new K.P([])
s.P(new H.J("`"))
r.a.push(s)
r.c=!0
r=h.G(0,q).p(0,l)
s=new K.P([])
s.P(new H.J("["))
r.a.push(s)
r.c=!0
r=h.G(0,l).p(0,k)
s=new K.P([])
s.P(new H.J("|"))
r.a.push(s)
s=h.G(0,l).p(0,j)
r=new K.P([])
r.P(new H.J("]"))
s.a.push(r)
s.c=!0
s=[]
h.G(0,l).p(0,l).a.push(new K.aG(s))
r=new K.P([])
r.P(new H.J("|]"))
s.push(r)
r=h.G(0,k).p(0,j)
s=new K.P([])
s.P(new H.J("]"))
r.a.push(s)
r.c=!0
r=[]
h.G(0,k).p(0,k).a.push(new K.aG(r))
s=new K.P([])
s.P(new H.J("|]"))
r.push(s)
h.G(0,q).p(0,i).a.push(new K.fF())
s=[]
h.G(0,i).p(0,i).a.push(new K.aG(s))
r=new K.P([])
r.P(new H.J("*_`["))
s.push(r)
r=h.G(0,"BoldEnd")
r.d=r.a.b8(p)
r=h.G(0,n)
r.d=r.a.b8(o)
r=h.G(0,"CodeEnd")
r.d=r.a.b8(m)
r=h.G(0,j)
r.d=r.a.b8("Link")
r=h.G(0,i)
r.d=r.a.b8(i)
return this.b=h}}
V.hR.prototype={
$1:function(a){P.k4(C.h,new V.hQ(this.a))},
$S:2}
V.hQ.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.c.aj(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.t(-0.01*s)+"px"
q.top=r},
$S:3};(function aliases(){var s=J.a.prototype
s.dM=s.i
s=J.b4.prototype
s.dN=s.i
s=K.dm.prototype
s.dL=s.aO
s.br=s.i
s=O.cf.prototype
s.ci=s.as
s=O.cg.prototype
s.cj=s.as})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"mr","lp",41)
r(P,"n5","lT",9)
r(P,"n6","lU",9)
r(P,"n7","lV",9)
q(P,"kx","n0",3)
r(W,"oG","h_",30)
var k
p(k=E.br.prototype,"gdz",0,0,null,["$1","$0"],["dA","fU"],0,0)
p(k,"gdv",0,0,null,["$1","$0"],["dw","fR"],0,0)
o(k,"gfP","fQ",6)
o(k,"gfS","fT",6)
p(k=E.e9.prototype,"gcl",0,0,null,["$1","$0"],["cn","cm"],0,0)
n(k,"gh3","dC",3)
m(k=X.eu.prototype,"geC","eD",2)
m(k,"gep","eq",2)
m(k,"gew","ex",4)
m(k,"geG","eH",16)
m(k,"geE","eF",16)
m(k,"geK","eL",4)
m(k,"geO","eP",4)
m(k,"geA","eB",4)
m(k,"geM","eN",4)
m(k,"gey","ez",4)
m(k,"geQ","eR",27)
m(k,"geS","eT",2)
m(k,"gf7","f8",11)
m(k,"gf3","f4",11)
m(k,"gf5","f6",11)
p(k=D.c9.prototype,"gcD",0,0,null,["$1","$0"],["cE","eI"],0,0)
m(k,"geU","eV",29)
o(k,"gej","ek",17)
o(k,"geY","eZ",17)
l(V.W.prototype,"gj","c3",18)
l(V.E.prototype,"gj","c3",18)
p(k=U.bs.prototype,"gaG",0,0,null,["$1","$0"],["I","a1"],0,0)
o(k,"geh","ei",13)
o(k,"geW","eX",13)
p(k=U.cx.prototype,"gaG",0,0,null,["$1","$0"],["I","a1"],0,0)
m(k,"gbA","bB",12)
m(k,"gbC","bD",12)
m(k,"gbE","bF",12)
p(k=U.cy.prototype,"gaG",0,0,null,["$1","$0"],["I","a1"],0,0)
m(k,"gbA","bB",1)
m(k,"gbC","bD",1)
m(k,"gbE","bF",1)
m(k,"geb","ec",1)
m(k,"ged","ee",1)
m(k,"gfp","fq",1)
m(k,"gfn","fo",1)
m(k,"gfl","fm",1)
m(U.cz.prototype,"gef","eg",1)
p(k=M.bW.prototype,"gN",0,0,null,["$1","$0"],["O","aX"],0,0)
o(k,"gf_","f0",19)
o(k,"gf1","f2",19)
p(M.bY.prototype,"gN",0,0,null,["$1","$0"],["O","aX"],0,0)
p(k=M.c1.prototype,"gN",0,0,null,["$1","$0"],["O","aX"],0,0)
o(k,"ger","es",6)
o(k,"geu","ev",6)
p(k=O.dy.prototype,"gap",0,0,null,["$1","$0"],["M","aY"],0,0)
p(k,"gcG",0,0,null,["$1","$0"],["cH","fd"],0,0)
o(k,"gel","em",20)
o(k,"gen","eo",20)
p(O.cf.prototype,"gap",0,0,null,["$1","$0"],["M","aY"],0,0)
p(O.dX.prototype,"gap",0,0,null,["$1","$0"],["M","aY"],0,0)
p(X.dN.prototype,"gdU",0,0,null,["$1","$0"],["al","dV"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.I,null)
q(P.I,[H.jf,J.a,J.a3,P.C,P.cF,P.h,H.bv,P.dp,H.c3,H.es,H.ib,H.hF,H.fc,H.bo,P.S,H.hh,H.dx,H.hc,H.ab,H.eQ,P.cR,P.bI,P.bJ,P.eA,P.e4,P.e5,P.iM,P.cW,P.iF,P.cE,P.A,P.dW,P.dc,P.iL,P.N,P.b0,P.dM,P.cu,P.eN,P.h8,P.aa,P.bd,W.fS,W.ja,W.jn,W.D,W.c4,P.cT,P.f5,K.fF,K.dm,K.P,L.e1,L.ea,L.eb,L.i7,O.bp,O.ci,E.fL,E.br,E.bm,E.bA,E.eK,E.hI,E.e9,Z.ex,Z.ey,Z.bn,Z.c5,Z.aN,D.fN,D.c2,D.K,X.bU,X.du,X.he,X.hl,X.X,X.hE,X.i8,X.eu,V.R,V.aB,V.h2,V.ch,V.bw,V.M,V.V,V.aI,V.dS,V.W,V.E,U.cx,U.cy,U.cz,M.bY,M.c1,A.fH,A.fI,A.af,A.aX,A.b_,A.ba,A.bc,A.hp,A.ei,A.ej,A.em,A.ep,A.id,A.ik,F.ag,F.hg,F.hG,F.hN,F.cr,F.cs,F.bE,F.cA,F.p,F.ir,F.iu,F.iv,O.hX,O.cf,O.hq,T.i1,X.hV,X.hb,X.dN,V.hP])
q(J.a,[J.dq,J.c8,J.b4,J.ah,J.bu,J.b3,H.ck,W.b,W.fE,W.db,W.bV,W.an,W.B,W.eF,W.a9,W.fV,W.fW,W.eG,W.c_,W.eI,W.fX,W.i,W.eO,W.aD,W.ha,W.eS,W.b2,W.hk,W.hB,W.eW,W.eX,W.aF,W.eY,W.f_,W.aH,W.f3,W.f6,W.aK,W.f7,W.aL,W.fd,W.ai,W.fh,W.i5,W.aM,W.fj,W.i9,W.im,W.fp,W.fr,W.ft,W.fv,W.fx,P.b6,P.eU,P.b9,P.f1,P.hH,P.fe,P.bf,P.fl,P.fJ,P.eB,P.bC,P.fa])
q(J.b4,[J.dO,J.bF,J.aq])
r(J.ds,J.ah)
q(J.bu,[J.c7,J.dr])
q(P.C,[H.dv,P.ee,H.dt,H.er,H.dU,H.eL,P.d8,P.dJ,P.al,P.et,P.eq,P.e2,P.dd,P.df])
r(P.ca,P.cF)
q(P.ca,[H.bG,W.eD,W.eC,P.dk])
r(H.J,H.bG)
q(P.h,[H.j,H.b7,H.cB,P.c6])
r(H.c0,H.b7)
q(P.dp,[H.cd,H.ez])
r(H.cn,P.ee)
q(H.bo,[H.hW,H.hd,H.iZ,H.j_,H.j0,P.iz,P.iy,P.iA,P.iB,P.iK,P.iJ,P.iU,P.iH,P.iI,P.hm,P.fY,P.fZ,W.hC,W.hD,W.hM,W.hT,W.iC,P.iP,P.iW,P.h6,P.h7,P.fK,E.hJ,E.hK,E.hL,E.i4,D.h4,D.h5,F.iN,F.hO,F.ix,F.iw,F.is,F.it,O.ht,O.hu,O.hv,O.hw,O.hx,O.hy,O.hz,O.hA,T.i3,T.i2,V.j3,V.hR,V.hQ])
q(H.hW,[H.hS,H.bR])
r(P.cc,P.S)
r(H.O,P.cc)
r(H.aE,H.j)
r(H.bz,H.ck)
q(H.bz,[H.cH,H.cJ])
r(H.cI,H.cH)
r(H.b8,H.cI)
r(H.cK,H.cJ)
r(H.cj,H.cK)
q(H.cj,[H.dD,H.dE,H.dF,H.dG,H.dH,H.cl,H.dI])
r(H.cS,H.eL)
r(P.cO,P.c6)
r(P.iG,P.iM)
r(P.cL,P.cW)
r(P.cD,P.cL)
r(P.de,P.e5)
r(P.h0,P.dc)
r(P.io,P.h0)
r(P.ip,P.de)
q(P.al,[P.cq,P.dn])
q(W.b,[W.r,W.dj,W.at,W.cM,W.au,W.ac,W.cP,W.ew,W.bH,P.da,P.aA])
q(W.r,[W.G,W.ae])
q(W.G,[W.l,P.k])
q(W.l,[W.d6,W.d7,W.aY,W.dl,W.bt,W.dV])
r(W.fR,W.an)
r(W.bq,W.eF)
q(W.a9,[W.fT,W.fU])
r(W.eH,W.eG)
r(W.bZ,W.eH)
r(W.eJ,W.eI)
r(W.dh,W.eJ)
r(W.aC,W.db)
r(W.eP,W.eO)
r(W.di,W.eP)
r(W.eT,W.eS)
r(W.b1,W.eT)
r(W.aw,W.i)
q(W.aw,[W.b5,W.a6,W.be])
r(W.dA,W.eW)
r(W.dB,W.eX)
r(W.eZ,W.eY)
r(W.dC,W.eZ)
r(W.f0,W.f_)
r(W.cm,W.f0)
r(W.f4,W.f3)
r(W.dP,W.f4)
r(W.dT,W.f6)
r(W.cN,W.cM)
r(W.dZ,W.cN)
r(W.f8,W.f7)
r(W.e_,W.f8)
r(W.e3,W.fd)
r(W.fi,W.fh)
r(W.e7,W.fi)
r(W.cQ,W.cP)
r(W.e8,W.cQ)
r(W.fk,W.fj)
r(W.ec,W.fk)
r(W.aO,W.a6)
r(W.fq,W.fp)
r(W.eE,W.fq)
r(W.cC,W.c_)
r(W.fs,W.fr)
r(W.eR,W.fs)
r(W.fu,W.ft)
r(W.cG,W.fu)
r(W.fw,W.fv)
r(W.f9,W.fw)
r(W.fy,W.fx)
r(W.fg,W.fy)
r(W.eM,P.e4)
r(P.a7,P.f5)
r(P.eV,P.eU)
r(P.dw,P.eV)
r(P.f2,P.f1)
r(P.dK,P.f2)
r(P.ff,P.fe)
r(P.e6,P.ff)
r(P.fm,P.fl)
r(P.ed,P.fm)
r(P.d9,P.eB)
r(P.dL,P.aA)
r(P.fb,P.fa)
r(P.e0,P.fb)
q(K.dm,[K.aG,L.ia])
q(E.fL,[Z.bT,A.bD,T.hY])
q(D.K,[D.ao,D.ap,D.w,X.dQ])
q(X.dQ,[X.cb,X.bx,X.by,X.cv])
q(O.bp,[D.c9,U.bs,M.bW])
q(D.fN,[U.fP,U.Y])
r(U.bX,U.Y)
q(A.bD,[A.ce,A.ct])
q(A.id,[A.cw,A.ih,A.ii,A.ij,A.ie,A.ef,A.ig,A.eg,A.eh,A.il,A.ek,A.el,A.en,A.eo])
q(O.hX,[O.dy,O.dX])
q(O.cf,[O.hn,O.ho,O.cg])
q(O.cg,[O.hr,O.hs])
q(T.hY,[T.hZ,T.i0])
r(T.i_,T.hZ)
r(X.h9,X.hV)
s(H.bG,H.es)
s(H.cH,P.A)
s(H.cI,H.c3)
s(H.cJ,P.A)
s(H.cK,H.c3)
s(P.cF,P.A)
s(P.cW,P.dW)
s(W.eF,W.fS)
s(W.eG,P.A)
s(W.eH,W.D)
s(W.eI,P.A)
s(W.eJ,W.D)
s(W.eO,P.A)
s(W.eP,W.D)
s(W.eS,P.A)
s(W.eT,W.D)
s(W.eW,P.S)
s(W.eX,P.S)
s(W.eY,P.A)
s(W.eZ,W.D)
s(W.f_,P.A)
s(W.f0,W.D)
s(W.f3,P.A)
s(W.f4,W.D)
s(W.f6,P.S)
s(W.cM,P.A)
s(W.cN,W.D)
s(W.f7,P.A)
s(W.f8,W.D)
s(W.fd,P.S)
s(W.fh,P.A)
s(W.fi,W.D)
s(W.cP,P.A)
s(W.cQ,W.D)
s(W.fj,P.A)
s(W.fk,W.D)
s(W.fp,P.A)
s(W.fq,W.D)
s(W.fr,P.A)
s(W.fs,W.D)
s(W.ft,P.A)
s(W.fu,W.D)
s(W.fv,P.A)
s(W.fw,W.D)
s(W.fx,P.A)
s(W.fy,W.D)
s(P.eU,P.A)
s(P.eV,W.D)
s(P.f1,P.A)
s(P.f2,W.D)
s(P.fe,P.A)
s(P.ff,W.D)
s(P.fl,P.A)
s(P.fm,W.D)
s(P.eB,P.S)
s(P.fa,P.A)
s(P.fb,W.D)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",a0:"double",a1:"num",y:"String",bh:"bool",aa:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([K?])","~(K)","~(i)","~()","~(a6)","~(y,@)","~(n,h<br>)","~(ag)","~(n,n)","~(~())","aa()","~(be)","~(K?)","~(n,h<Y?>)","y(n)","~(~(K))","~(b5)","~(n,h<hf>)","a0()","~(n,h<bb>)","~(n,h<bw>)","@(@)","G(r)","@(y)","aa(@)","~(a1)","bh(r)","~(aO)","aa(~())","bh(h<hf>)","y(b)","~(y,y)","~(cA,a0,a0)","bT(n)","@(@,y)","~(@)","n(aX,aX)","n(b_,b_)","n(ba,ba)","n(bc,bc)","~(i6)","n(@,@)","~(@,@)","~(I?,I?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mc(v.typeUniverse,JSON.parse('{"dO":"b4","bF":"b4","aq":"b4","nA":"i","nS":"i","nC":"aA","nB":"b","nZ":"b","o1":"b","nz":"k","nU":"k","nD":"l","nX":"l","nV":"r","nR":"r","op":"ac","nH":"aw","nE":"ae","o2":"ae","o0":"a6","nW":"b1","nI":"B","nK":"ai","nY":"b8","dq":{"bh":[]},"ah":{"m":["1"],"j":["1"],"h":["1"]},"ds":{"m":["1"],"j":["1"],"h":["1"]},"bu":{"a0":[],"a1":[]},"c7":{"a0":[],"n":[],"a1":[]},"dr":{"a0":[],"a1":[]},"b3":{"y":[]},"dv":{"C":[]},"J":{"m":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"b7":{"h":["2"]},"c0":{"j":["2"],"h":["2"]},"cB":{"h":["1"]},"bG":{"m":["1"],"j":["1"],"h":["1"]},"cn":{"C":[]},"dt":{"C":[]},"er":{"C":[]},"dU":{"C":[]},"O":{"U":["1","2"],"S.V":"2"},"aE":{"j":["1"],"h":["1"]},"bz":{"q":["1"]},"b8":{"q":["a0"],"m":["a0"],"j":["a0"],"h":["a0"]},"cj":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dD":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dE":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dF":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dG":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dH":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"cl":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dI":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"eL":{"C":[]},"cS":{"C":[]},"cR":{"i6":[]},"cO":{"h":["1"]},"cD":{"j":["1"],"h":["1"]},"c6":{"h":["1"]},"ca":{"m":["1"],"j":["1"],"h":["1"]},"cc":{"U":["1","2"]},"S":{"U":["1","2"]},"cL":{"j":["1"],"h":["1"]},"a0":{"a1":[]},"n":{"a1":[]},"m":{"j":["1"],"h":["1"]},"d8":{"C":[]},"ee":{"C":[]},"dJ":{"C":[]},"al":{"C":[]},"cq":{"C":[]},"dn":{"C":[]},"et":{"C":[]},"eq":{"C":[]},"e2":{"C":[]},"dd":{"C":[]},"dM":{"C":[]},"cu":{"C":[]},"df":{"C":[]},"G":{"r":[],"b":[]},"b5":{"i":[]},"a6":{"i":[]},"r":{"b":[]},"at":{"b":[]},"au":{"b":[]},"ac":{"b":[]},"be":{"i":[]},"aw":{"i":[]},"aO":{"a6":[],"i":[]},"l":{"G":[],"r":[],"b":[]},"d6":{"G":[],"r":[],"b":[]},"d7":{"G":[],"r":[],"b":[]},"aY":{"G":[],"r":[],"b":[]},"ae":{"r":[],"b":[]},"bZ":{"m":["a7<a1>"],"q":["a7<a1>"],"j":["a7<a1>"],"h":["a7<a1>"]},"c_":{"a7":["a1"]},"dh":{"m":["y"],"q":["y"],"j":["y"],"h":["y"]},"eD":{"m":["G"],"j":["G"],"h":["G"]},"di":{"m":["aC"],"q":["aC"],"j":["aC"],"h":["aC"]},"dj":{"b":[]},"dl":{"G":[],"r":[],"b":[]},"b1":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"bt":{"G":[],"r":[],"b":[]},"dA":{"U":["y","@"],"S.V":"@"},"dB":{"U":["y","@"],"S.V":"@"},"dC":{"m":["aF"],"q":["aF"],"j":["aF"],"h":["aF"]},"eC":{"m":["r"],"j":["r"],"h":["r"]},"cm":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"dP":{"m":["aH"],"q":["aH"],"j":["aH"],"h":["aH"]},"dT":{"U":["y","@"],"S.V":"@"},"dV":{"G":[],"r":[],"b":[]},"dZ":{"m":["at"],"q":["at"],"b":[],"j":["at"],"h":["at"]},"e_":{"m":["aK"],"q":["aK"],"j":["aK"],"h":["aK"]},"e3":{"U":["y","y"],"S.V":"y"},"e7":{"m":["ac"],"q":["ac"],"j":["ac"],"h":["ac"]},"e8":{"m":["au"],"q":["au"],"b":[],"j":["au"],"h":["au"]},"ec":{"m":["aM"],"q":["aM"],"j":["aM"],"h":["aM"]},"ew":{"b":[]},"bH":{"b":[]},"eE":{"m":["B"],"q":["B"],"j":["B"],"h":["B"]},"cC":{"a7":["a1"]},"eR":{"m":["aD?"],"q":["aD?"],"j":["aD?"],"h":["aD?"]},"cG":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"f9":{"m":["aL"],"q":["aL"],"j":["aL"],"h":["aL"]},"fg":{"m":["ai"],"q":["ai"],"j":["ai"],"h":["ai"]},"cT":{"b2":[]},"dk":{"m":["G"],"j":["G"],"h":["G"]},"a7":{"f5":["1"]},"dw":{"m":["b6"],"j":["b6"],"h":["b6"]},"dK":{"m":["b9"],"j":["b9"],"h":["b9"]},"e6":{"m":["y"],"j":["y"],"h":["y"]},"k":{"G":[],"r":[],"b":[]},"ed":{"m":["bf"],"j":["bf"],"h":["bf"]},"d9":{"U":["y","@"],"S.V":"@"},"da":{"b":[]},"aA":{"b":[]},"dL":{"b":[]},"e0":{"m":["U<@,@>"],"j":["U<@,@>"],"h":["U<@,@>"]},"bp":{"h":["1"]},"ao":{"K":[]},"ap":{"K":[]},"w":{"K":[]},"cb":{"K":[]},"bx":{"K":[]},"by":{"K":[]},"dQ":{"K":[]},"cv":{"K":[]},"c9":{"h":["hf"]},"bX":{"Y":[]},"bs":{"Y":[],"h":["Y?"]},"cx":{"Y":[]},"cy":{"Y":[]},"cz":{"Y":[]},"bW":{"bb":[],"h":["bb"]},"bY":{"bb":[]},"c1":{"bb":[]},"ce":{"bD":[]},"ct":{"bD":[]}}'))
H.mb(v.typeUniverse,JSON.parse('{"ah":1,"ds":1,"a3":1,"j":1,"bv":1,"b7":2,"c0":2,"cd":2,"cB":1,"ez":1,"c3":1,"es":1,"bG":1,"aE":1,"dx":1,"bz":1,"bJ":1,"cO":1,"e4":1,"e5":2,"cE":1,"c6":1,"ca":1,"A":1,"cc":2,"S":2,"dW":1,"cL":1,"cF":1,"cW":1,"dc":2,"de":2,"h":1,"m":1,"dp":1,"eM":1,"D":1,"c4":1,"bp":1,"ao":1,"ap":1,"w":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.nf
return{D:s("bn"),E:s("aY"),b:s("bV"),V:s("j<@>"),h:s("G"),C:s("C"),B:s("i"),Y:s("nT"),I:s("b2"),l:s("bt"),m:s("ah<@>"),T:s("c8"),M:s("aq"),p:s("q<@>"),c:s("O<n,bh>"),y:s("O<n,n>"),J:s("m<ei>"),L:s("m<ej>"),U:s("m<em>"),R:s("m<ep>"),d:s("m<@>"),e:s("cb"),f:s("U<@,@>"),Z:s("bx"),O:s("by"),P:s("aa"),K:s("I"),q:s("a7<a1>"),k:s("bD"),N:s("y"),r:s("i6"),s:s("ea"),t:s("cv"),n:s("ef"),v:s("cw"),g:s("eg"),F:s("eh"),Q:s("ek"),j:s("el"),G:s("en"),a:s("eo"),o:s("bF"),w:s("bh"),i:s("a0"),z:s("@"),S:s("n"),A:s("0&*"),_:s("I*"),u:s("jP<aa>?"),d1:s("ce?"),X:s("I?"),ba:s("bC?"),x:s("ct?"),aJ:s("e1?"),aX:s("eb?"),W:s("cw?"),H:s("a1")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.aY.prototype
C.o=W.bq.prototype
C.G=J.a.prototype
C.a=J.ah.prototype
C.b=J.c7.prototype
C.H=J.c8.prototype
C.c=J.bu.prototype
C.d=J.b3.prototype
C.I=J.aq.prototype
C.q=J.dO.prototype
C.r=P.bC.prototype
C.i=J.bF.prototype
C.t=W.aO.prototype
C.u=W.bH.prototype
C.v=new E.bm("Browser.chrome")
C.j=new E.bm("Browser.firefox")
C.k=new E.bm("Browser.edge")
C.w=new E.bm("Browser.other")
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

C.D=new P.dM()
C.n=new P.io()
C.E=new P.ip()
C.e=new P.iG()
C.h=new P.b0(0)
C.F=new P.b0(5e6)
C.J=s([0,0,65498,45055,65535,34815,65534,18431])
C.K=new E.bA("OperatingSystem.windows")
C.p=new E.bA("OperatingSystem.mac")
C.L=new E.bA("OperatingSystem.linux")
C.M=new E.bA("OperatingSystem.other")
C.N=new P.bI(null,2)})();(function staticFields(){$.iD=null
$.am=0
$.bS=null
$.jK=null
$.kz=null
$.kw=null
$.kD=null
$.iX=null
$.j1=null
$.jC=null
$.bK=null
$.d_=null
$.d0=null
$.jw=!1
$.aj=C.e
$.a4=[]
$.h1=null
$.jT=null
$.jU=null
$.Z=null
$.as=null
$.jZ=null
$.bg=null
$.kb=null
$.ka=null
$.k9=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"nL","kL",function(){return H.nh("_$dart_dartClosure")})
s($,"o3","kR",function(){return H.av(H.ic({
toString:function(){return"$receiver$"}}))})
s($,"o4","kS",function(){return H.av(H.ic({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"o5","kT",function(){return H.av(H.ic(null))})
s($,"o6","kU",function(){return H.av(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"o9","kX",function(){return H.av(H.ic(void 0))})
s($,"oa","kY",function(){return H.av(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"o8","kW",function(){return H.av(H.k6(null))})
s($,"o7","kV",function(){return H.av(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"oc","l_",function(){return H.av(H.k6(void 0))})
s($,"ob","kZ",function(){return H.av(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"oq","jI",function(){return P.lS()})
s($,"os","l3",function(){return P.lH("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"nJ","kK",function(){return{}})
s($,"nP","jH",function(){return C.d.bg(P.j9(),"Opera",0)})
s($,"nO","kO",function(){return!$.jH()&&C.d.bg(P.j9(),"Trident/",0)})
s($,"nN","kN",function(){return C.d.bg(P.j9(),"Firefox",0)})
s($,"nM","kM",function(){return"-"+$.kP()+"-"})
s($,"nQ","kP",function(){if($.kN())var q="moz"
else if($.kO())q="ms"
else q=$.jH()?"o":"webkit"
return q})
s($,"oj","l2",function(){return Z.ad(0)})
s($,"od","l0",function(){return Z.ad(511)})
s($,"ol","ak",function(){return Z.ad(1)})
s($,"ok","aV",function(){return Z.ad(2)})
s($,"of","aU",function(){return Z.ad(4)})
s($,"om","aW",function(){return Z.ad(8)})
s($,"on","bk",function(){return Z.ad(16)})
s($,"og","d4",function(){return Z.ad(32)})
s($,"oh","d5",function(){return Z.ad(64)})
s($,"oi","l1",function(){return Z.ad(96)})
s($,"oo","bQ",function(){return Z.ad(128)})
s($,"oe","aT",function(){return Z.ad(256)})
s($,"nG","kJ",function(){return new V.h2()})
r($,"nF","x",function(){return $.kJ()})
r($,"o_","kQ",function(){var q,p,o,n,m,l=V.lv(),k=$.ka
if(k==null)k=$.ka=V.k8(0,1,0)
q=$.k9
p=(q==null?$.k9=V.k8(0,0,-1):q).J()
o=k.b3(p).J()
n=p.b3(o)
m=V.lR(l)
return V.ar(o.a,n.a,p.a,o.aR(0).Z(m),o.b,n.b,p.b,n.aR(0).Z(m),o.c,n.c,p.c,p.aR(0).Z(m),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ck,ArrayBufferView:H.ck,Float32Array:H.b8,Float64Array:H.b8,Int16Array:H.dD,Int32Array:H.dE,Int8Array:H.dF,Uint16Array:H.dG,Uint32Array:H.dH,Uint8ClampedArray:H.cl,CanvasPixelArray:H.cl,Uint8Array:H.dI,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fE,HTMLAnchorElement:W.d6,HTMLAreaElement:W.d7,Blob:W.db,HTMLCanvasElement:W.aY,CanvasRenderingContext2D:W.bV,CDATASection:W.ae,CharacterData:W.ae,Comment:W.ae,ProcessingInstruction:W.ae,Text:W.ae,CSSPerspective:W.fR,CSSCharsetRule:W.B,CSSConditionRule:W.B,CSSFontFaceRule:W.B,CSSGroupingRule:W.B,CSSImportRule:W.B,CSSKeyframeRule:W.B,MozCSSKeyframeRule:W.B,WebKitCSSKeyframeRule:W.B,CSSKeyframesRule:W.B,MozCSSKeyframesRule:W.B,WebKitCSSKeyframesRule:W.B,CSSMediaRule:W.B,CSSNamespaceRule:W.B,CSSPageRule:W.B,CSSRule:W.B,CSSStyleRule:W.B,CSSSupportsRule:W.B,CSSViewportRule:W.B,CSSStyleDeclaration:W.bq,MSStyleCSSProperties:W.bq,CSS2Properties:W.bq,CSSImageValue:W.a9,CSSKeywordValue:W.a9,CSSNumericValue:W.a9,CSSPositionValue:W.a9,CSSResourceValue:W.a9,CSSUnitValue:W.a9,CSSURLImageValue:W.a9,CSSStyleValue:W.a9,CSSMatrixComponent:W.an,CSSRotation:W.an,CSSScale:W.an,CSSSkew:W.an,CSSTranslation:W.an,CSSTransformComponent:W.an,CSSTransformValue:W.fT,CSSUnparsedValue:W.fU,DataTransferItemList:W.fV,DOMException:W.fW,ClientRectList:W.bZ,DOMRectList:W.bZ,DOMRectReadOnly:W.c_,DOMStringList:W.dh,DOMTokenList:W.fX,Element:W.G,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aC,FileList:W.di,FileWriter:W.dj,HTMLFormElement:W.dl,Gamepad:W.aD,History:W.ha,HTMLCollection:W.b1,HTMLFormControlsCollection:W.b1,HTMLOptionsCollection:W.b1,ImageData:W.b2,HTMLImageElement:W.bt,KeyboardEvent:W.b5,Location:W.hk,MediaList:W.hB,MIDIInputMap:W.dA,MIDIOutputMap:W.dB,MimeType:W.aF,MimeTypeArray:W.dC,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cm,RadioNodeList:W.cm,Plugin:W.aH,PluginArray:W.dP,RTCStatsReport:W.dT,HTMLSelectElement:W.dV,SourceBuffer:W.at,SourceBufferList:W.dZ,SpeechGrammar:W.aK,SpeechGrammarList:W.e_,SpeechRecognitionResult:W.aL,Storage:W.e3,CSSStyleSheet:W.ai,StyleSheet:W.ai,TextTrack:W.au,TextTrackCue:W.ac,VTTCue:W.ac,TextTrackCueList:W.e7,TextTrackList:W.e8,TimeRanges:W.i5,Touch:W.aM,TouchEvent:W.be,TouchList:W.ec,TrackDefaultList:W.i9,CompositionEvent:W.aw,FocusEvent:W.aw,TextEvent:W.aw,UIEvent:W.aw,URL:W.im,VideoTrackList:W.ew,WheelEvent:W.aO,Window:W.bH,DOMWindow:W.bH,CSSRuleList:W.eE,ClientRect:W.cC,DOMRect:W.cC,GamepadList:W.eR,NamedNodeMap:W.cG,MozNamedAttrMap:W.cG,SpeechRecognitionResultList:W.f9,StyleSheetList:W.fg,SVGLength:P.b6,SVGLengthList:P.dw,SVGNumber:P.b9,SVGNumberList:P.dK,SVGPointList:P.hH,SVGStringList:P.e6,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bf,SVGTransformList:P.ed,AudioBuffer:P.fJ,AudioParamMap:P.d9,AudioTrackList:P.da,AudioContext:P.aA,webkitAudioContext:P.aA,BaseAudioContext:P.aA,OfflineAudioContext:P.dL,WebGL2RenderingContext:P.bC,SQLResultSetRowList:P.e0})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.b8.$nativeSuperclassTag="ArrayBufferView"
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
var s=M.np
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
