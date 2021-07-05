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
a[c]=function(){a[c]=function(){H.o_(b)}
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
if(a[b]!==s)H.o0(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jW"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.jW(this,a,b,c,true,false,e).prototype
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
nC:function(a,b,c){return a},
lX:function(a,b){if(t.O.b(a))return new H.c4(a,b)
return new H.bd(a,b)},
hs:function(){return new P.bG("No element")},
lQ:function(){return new P.bG("Too many elements")},
mf:function(a,b){H.e9(a,0,J.b_(a)-1,b)},
e9:function(a,b,c,d){if(c-b<=32)H.me(a,b,c,d)
else H.md(a,b,c,d)},
me:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.d4(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.a3()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
md:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.T(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.T(a4+a5,2),f=g-j,e=g+j,d=J.d4(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a3()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.N(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.e9(a3,a4,r-2,a6)
H.e9(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.N(a6.$2(d.h(a3,r),b),0);)++r
for(;J.N(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.e9(a3,r,q,a6)}else H.e9(a3,r,q,a6)},
dD:function dD(a){this.a=a},
o:function o(a){this.a=a},
j:function j(){},
cg:function cg(){},
aM:function aM(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bd:function bd(a,b){this.a=a
this.b=b},
c4:function c4(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=null
this.b=a
this.c=b},
cj:function cj(a,b){this.a=a
this.b=b},
bn:function bn(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
c6:function c6(){},
eH:function eH(){},
bI:function bI(){},
lb:function(a){var s,r=H.la(a)
if(r!=null)return r
s="minified:"+a
return s},
nR:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
u:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.d8(a)
return s},
cu:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cv:function(a){return H.lZ(a)},
lZ:function(a){var s,r,q,p
if(a instanceof P.L)return H.a5(H.bU(a),null)
if(J.d3(a)===C.L||t.o.b(a)){s=C.n(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a5(H.bU(a),null)},
km:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
m7:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){q=a[r]
if(!H.jc(q))throw H.c(H.jg(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aY(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.jg(q))}return H.km(p)},
m6:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jc(q))throw H.c(H.jg(q))
if(q<0)throw H.c(H.jg(q))
if(q>65535)return H.m7(a)}return H.km(a)},
jD:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aY(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aO(a,0,1114111,null,null))},
bE:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m5:function(a){var s=H.bE(a).getFullYear()+0
return s},
m3:function(a){var s=H.bE(a).getMonth()+1
return s},
m_:function(a){var s=H.bE(a).getDate()+0
return s},
m0:function(a){var s=H.bE(a).getHours()+0
return s},
m2:function(a){var s=H.bE(a).getMinutes()+0
return s},
m4:function(a){var s=H.bE(a).getSeconds()+0
return s},
m1:function(a){var s=H.bE(a).getMilliseconds()+0
return s},
d:function(a,b){if(a==null)J.b_(a)
throw H.c(H.bS(a,b))},
bS:function(a,b){var s,r="index"
if(!H.jc(b))return new P.ad(!0,b,r,null)
s=J.b_(a)
if(b<0||b>=s)return P.H(b,a,r,null,s)
return P.e1(b,r)},
nF:function(a,b,c){if(a>c)return P.aO(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aO(b,a,c,"end",null)
return new P.ad(!0,b,"end",null)},
jg:function(a){return new P.ad(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.dU()
s=new Error()
s.dartException=a
r=H.o1
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
o1:function(){return J.d8(this.dartException)},
f:function(a){throw H.c(a)},
q:function(a){throw H.c(P.ao(a))},
aA:function(a){var s,r,q,p,o,n
a=H.l8(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.ir(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
is:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kw:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jC:function(a,b){var s=b==null,r=s?null:b.method
return new H.dB(a,r,s?null:b.receiver)},
aF:function(a){if(a==null)return new H.hY(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bq(a,a.dartException)
return H.ny(a)},
bq:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
ny:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aY(r,16)&8191)===10)switch(q){case 438:return H.bq(a,H.jC(H.u(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.u(s)+" (Error "+q+")"
return H.bq(a,new H.ct(p,e))}}if(a instanceof TypeError){o=$.lf()
n=$.lg()
m=$.lh()
l=$.li()
k=$.ll()
j=$.lm()
i=$.lk()
$.lj()
h=$.lo()
g=$.ln()
f=o.a2(s)
if(f!=null)return H.bq(a,H.jC(s,f))
else{f=n.a2(s)
if(f!=null){f.method="call"
return H.bq(a,H.jC(s,f))}else{f=m.a2(s)
if(f==null){f=l.a2(s)
if(f==null){f=k.a2(s)
if(f==null){f=j.a2(s)
if(f==null){f=i.a2(s)
if(f==null){f=l.a2(s)
if(f==null){f=h.a2(s)
if(f==null){f=g.a2(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bq(a,new H.ct(s,f==null?e:f.method))}}return H.bq(a,new H.eG(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cz()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bq(a,new P.ad(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cz()
return a},
jX:function(a){var s
if(a==null)return new H.fr(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fr(a)},
nH:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
nQ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.e("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nQ)
a.$identity=s
return s},
lJ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ee().constructor.prototype):Object.create(new H.bu(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.am
if(typeof r!=="number")return r.O()
$.am=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.ka(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lF(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ka(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lF:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.l4,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.lD:H.lC
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
lG:function(a,b,c,d){var s=H.k8
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
ka:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lI(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lG(r,!p,s,b)
if(r===0){p=$.am
if(typeof p!=="number")return p.O()
$.am=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bW
return new Function(p+(o==null?$.bW=H.h0("self"):o)+";return "+n+"."+H.u(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.am
if(typeof p!=="number")return p.O()
$.am=p+1
m+=p
p="return function("+m+"){return this."
o=$.bW
return new Function(p+(o==null?$.bW=H.h0("self"):o)+"."+H.u(s)+"("+m+");}")()},
lH:function(a,b,c,d){var s=H.k8,r=H.lE
switch(b?-1:a){case 0:throw H.c(new H.e5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lI:function(a,b){var s,r,q,p,o,n,m,l=$.bW
if(l==null)l=$.bW=H.h0("self")
s=$.k7
if(s==null)s=$.k7=H.h0("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lH(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.u(r)+"(this."+s+");"
n=$.am
if(typeof n!=="number")return n.O()
$.am=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.u(r)+"(this."+s+", "+m+");"
n=$.am
if(typeof n!=="number")return n.O()
$.am=n+1
return new Function(o+n+"}")()},
jW:function(a,b,c,d,e,f,g){return H.lJ(a,b,c,d,!!e,!!f,g)},
lC:function(a,b){return H.fF(v.typeUniverse,H.bU(a.a),b)},
lD:function(a,b){return H.fF(v.typeUniverse,H.bU(a.c),b)},
k8:function(a){return a.a},
lE:function(a){return a.c},
h0:function(a){var s,r,q,p=new H.bu("self","target","receiver","name"),o=J.jA(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.k6("Field name "+a+" not found."))},
o_:function(a){throw H.c(new P.dj(a))},
nK:function(a){return v.getIsolateTag(a)},
o0:function(a){return H.f(new H.dD(a))},
p4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nT:function(a){var s,r,q,p,o,n=$.l3.$1(a),m=$.jj[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jp[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.l_.$2(a,n)
if(q!=null){m=$.jj[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jp[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jr(s)
$.jj[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jp[n]=s
return s}if(p==="-"){o=H.jr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l6(a,s)
if(p==="*")throw H.c(P.kx(n))
if(v.leafTags[n]===true){o=H.jr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l6(a,s)},
l6:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.jZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jr:function(a){return J.jZ(a,!1,null,!!a.$iw)},
nV:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jr(s)
else return J.jZ(s,c,null,null)},
nO:function(){if(!0===$.jY)return
$.jY=!0
H.nP()},
nP:function(){var s,r,q,p,o,n,m,l
$.jj=Object.create(null)
$.jp=Object.create(null)
H.nN()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.l7.$1(o)
if(n!=null){m=H.nV(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nN:function(){var s,r,q,p,o,n,m=C.z()
m=H.bQ(C.A,H.bQ(C.B,H.bQ(C.o,H.bQ(C.o,H.bQ(C.C,H.bQ(C.D,H.bQ(C.E(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.l3=new H.jm(p)
$.l_=new H.jn(o)
$.l7=new H.jo(n)},
bQ:function(a,b){return a(b)||b},
lU:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hm("Illegal RegExp pattern ("+String(n)+")",a))},
l9:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nG:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l8:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k0:function(a,b,c){var s=H.nY(a,b,c)
return s},
nY:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l8(b),'g'),H.nG(c))},
ir:function ir(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ct:function ct(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a){this.a=a},
hY:function hY(a){this.a=a},
fr:function fr(a){this.a=a
this.b=null},
b3:function b3(){},
el:function el(){},
ee:function ee(){},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e5:function e5(a){this.a=a},
P:function P(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hu:function hu(a){this.a=a},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aL:function aL(a){this.a=a},
dF:function dF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jm:function jm(a){this.a=a},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cZ:function(a){var s,r,q,p,o
if(t.e.b(a))return a
s=J.d4(a)
r=s.gl(a)
q=P.dG(r,null,!1)
for(p=0;p<s.gl(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bS(b,a))},
mN:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.nF(a,b,c))
return b},
cp:function cp(){},
bC:function bC(){},
be:function be(){},
co:function co(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
cq:function cq(){},
dT:function dT(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
kq:function(a,b){var s=b.c
return s==null?b.c=H.jP(a,b.z,!0):s},
kp:function(a,b){var s=b.c
return s==null?b.c=H.cW(a,"kf",[b.z]):s},
kr:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kr(a.z)
return s===11||s===12},
mb:function(a){return a.cy},
nI:function(a){return H.jQ(v.typeUniverse,a,!1)},
aU:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.kO(a,r,!0)
case 7:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.jP(a,r,!0)
case 8:s=b.z
r=H.aU(a,s,a0,a1)
if(r===s)return b
return H.kN(a,r,!0)
case 9:q=b.Q
p=H.d2(a,q,a0,a1)
if(p===q)return b
return H.cW(a,b.z,p)
case 10:o=b.z
n=H.aU(a,o,a0,a1)
m=b.Q
l=H.d2(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jN(a,n,l)
case 11:k=b.z
j=H.aU(a,k,a0,a1)
i=b.Q
h=H.nv(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kM(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.d2(a,g,a0,a1)
o=b.z
n=H.aU(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jO(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.fV("Attempted to substitute unexpected RTI kind "+c))}},
d2:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aU(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nw:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aU(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nv:function(a,b,c,d){var s,r=b.a,q=H.d2(a,r,c,d),p=b.b,o=H.d2(a,p,c,d),n=b.c,m=H.nw(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.f4()
s.a=q
s.b=o
s.c=m
return s},
p6:function(a,b){a[v.arrayRti]=b
return a},
nD:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.l4(s)
return a.$S()}return null},
l5:function(a,b){var s
if(H.kr(b))if(a instanceof H.b3){s=H.nD(a)
if(s!=null)return s}return H.bU(a)},
bU:function(a){var s
if(a instanceof P.L){s=a.$ti
return s!=null?s:H.jR(a)}if(Array.isArray(a))return H.kS(a)
return H.jR(J.d3(a))},
kS:function(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
U:function(a){var s=a.$ti
return s!=null?s:H.jR(a)},
jR:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mU(a,s)},
mU:function(a,b){var s=a instanceof H.b3?a.__proto__.__proto__.constructor:b,r=H.mK(v.typeUniverse,s.name)
b.$ccache=r
return r},
l4:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jQ(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mT:function(a){var s,r,q,p=this
if(p===t.K)return H.d_(p,a,H.mY)
if(!H.aE(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.d_(p,a,H.n0)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jc
else if(r===t.i||r===t.H)q=H.mX
else if(r===t.N)q=H.mZ
else q=r===t.m?H.jS:null
if(q!=null)return H.d_(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.nS)){p.r="$i"+s
return H.d_(p,a,H.n_)}}else if(s===7)return H.d_(p,a,H.mR)
return H.d_(p,a,H.mP)},
d_:function(a,b,c){a.b=c
return a.b(b)},
mS:function(a){var s,r=this,q=H.mO
if(!H.aE(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.mM
else if(r===t.K)q=H.mL
else{s=H.d5(r)
if(s)q=H.mQ}r.a=q
return r.a(a)},
jV:function(a){var s,r=a.y
if(!H.aE(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.jV(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mP:function(a){var s=this
if(a==null)return H.jV(s)
return H.K(v.typeUniverse,H.l5(a,s),null,s,null)},
mR:function(a){if(a==null)return!0
return this.z.b(a)},
n_:function(a){var s,r=this
if(a==null)return H.jV(r)
s=r.r
if(a instanceof P.L)return!!a[s]
return!!J.d3(a)[s]},
mO:function(a){var s,r=this
if(a==null){s=H.d5(r)
if(s)return a}else if(r.b(a))return a
H.kV(a,r)},
mQ:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.kV(a,s)},
kV:function(a,b){throw H.c(H.mA(H.kF(a,H.l5(a,b),H.a5(b,null))))},
kF:function(a,b,c){var s=P.hg(a),r=H.a5(b==null?H.bU(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
mA:function(a){return new H.cV("TypeError: "+a)},
Y:function(a,b){return new H.cV("TypeError: "+H.kF(a,null,b))},
mY:function(a){return a!=null},
mL:function(a){if(a!=null)return a
throw H.c(H.Y(a,"Object"))},
n0:function(a){return!0},
mM:function(a){return a},
jS:function(a){return!0===a||!1===a},
kT:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.Y(a,"bool"))},
oU:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.Y(a,"bool"))},
oT:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.Y(a,"bool?"))},
oV:function(a){if(typeof a=="number")return a
throw H.c(H.Y(a,"double"))},
oX:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.Y(a,"double"))},
oW:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.Y(a,"double?"))},
jc:function(a){return typeof a=="number"&&Math.floor(a)===a},
j9:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.Y(a,"int"))},
oZ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.Y(a,"int"))},
oY:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.Y(a,"int?"))},
mX:function(a){return typeof a=="number"},
p_:function(a){if(typeof a=="number")return a
throw H.c(H.Y(a,"num"))},
p1:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.Y(a,"num"))},
p0:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.Y(a,"num?"))},
mZ:function(a){return typeof a=="string"},
ja:function(a){if(typeof a=="string")return a
throw H.c(H.Y(a,"String"))},
p3:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.Y(a,"String"))},
p2:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.Y(a,"String?"))},
nr:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a5(a[q],b)
return s},
kW:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.b.O(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.a5(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.a5(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.a5(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.a5(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.a5(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
a5:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.a5(a.z,b)
return s}if(l===7){r=a.z
s=H.a5(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.a5(a.z,b)+">"
if(l===9){p=H.nx(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nr(o,b)+">"):p}if(l===11)return H.kW(a,b,null)
if(l===12)return H.kW(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
nx:function(a){var s,r=H.la(a)
if(r!=null)return r
s="minified:"+a
return s},
kP:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mK:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jQ(a,b,!1)
else if(typeof m=="number"){s=m
r=H.cX(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.cW(a,b,q)
n[b]=o
return o}else return m},
mI:function(a,b){return H.kR(a.tR,b)},
mH:function(a,b){return H.kR(a.eT,b)},
jQ:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kK(H.kI(a,null,b,c))
r.set(b,s)
return s},
fF:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kK(H.kI(a,b,c,!0))
q.set(c,r)
return r},
mJ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jN(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aT:function(a,b){b.a=H.mS
b.b=H.mT
return b},
cX:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aa(null,null)
s.y=b
s.cy=c
r=H.aT(a,s)
a.eC.set(c,r)
return r},
kO:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mF(a,b,r,c)
a.eC.set(r,s)
return s},
mF:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aE(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aa(null,null)
q.y=6
q.z=b
q.cy=c
return H.aT(a,q)},
jP:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mE(a,b,r,c)
a.eC.set(r,s)
return s},
mE:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aE(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.d5(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.d5(q.z))return q
else return H.kq(a,b)}}p=new H.aa(null,null)
p.y=7
p.z=b
p.cy=c
return H.aT(a,p)},
kN:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mC(a,b,r,c)
a.eC.set(r,s)
return s},
mC:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aE(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.cW(a,"kf",[b])
else if(b===t.P||b===t.T)return t.r}q=new H.aa(null,null)
q.y=8
q.z=b
q.cy=c
return H.aT(a,q)},
mG:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aa(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aT(a,s)
a.eC.set(q,r)
return r},
fE:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mB:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cW:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fE(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aa(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aT(a,r)
a.eC.set(p,q)
return q},
jN:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fE(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aa(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aT(a,o)
a.eC.set(q,n)
return n},
kM:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fE(m)
if(j>0){s=l>0?",":""
r=H.fE(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mB(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aa(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aT(a,o)
a.eC.set(q,r)
return r},
jO:function(a,b,c,d){var s,r=b.cy+("<"+H.fE(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mD(a,b,c,r,d)
a.eC.set(r,s)
return s},
mD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aU(a,b,r,0)
m=H.d2(a,c,r,0)
return H.jO(a,n,m,c!==m)}}l=new H.aa(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aT(a,l)},
kI:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kK:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mu(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kJ(a,r,h,g,!1)
else if(q===46)r=H.kJ(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aS(a.u,a.e,g.pop()))
break
case 94:g.push(H.mG(a.u,g.pop()))
break
case 35:g.push(H.cX(a.u,5,"#"))
break
case 64:g.push(H.cX(a.u,2,"@"))
break
case 126:g.push(H.cX(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.jM(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.cW(p,n,o))
else{m=H.aS(p,a.e,n)
switch(m.y){case 11:g.push(H.jO(p,m,o,a.n))
break
default:g.push(H.jN(p,m,o))
break}}break
case 38:H.mv(a,g)
break
case 42:p=a.u
g.push(H.kO(p,H.aS(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.jP(p,H.aS(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.kN(p,H.aS(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.f4()
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
H.jM(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.kM(p,H.aS(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.jM(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.mx(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aS(a.u,a.e,i)},
mu:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kJ:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kP(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mb(o)+'"')
d.push(H.fF(s,o,n))}else d.push(p)
return m},
mv:function(a,b){var s=b.pop()
if(0===s){b.push(H.cX(a.u,1,"0&"))
return}if(1===s){b.push(H.cX(a.u,4,"1&"))
return}throw H.c(P.fV("Unexpected extended operation "+H.u(s)))},
aS:function(a,b,c){if(typeof c=="string")return H.cW(a,c,a.sEA)
else if(typeof c=="number")return H.mw(a,b,c)
else return c},
jM:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aS(a,b,c[s])},
mx:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aS(a,b,c[s])},
mw:function(a,b,c){var s,r,q=b.y
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
K:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aE(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aE(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.K(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.K(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.K(a,b.z,c,d,e)
if(r===6)return H.K(a,b.z,c,d,e)
return r!==7}if(r===6)return H.K(a,b.z,c,d,e)
if(p===6){s=H.kq(a,d)
return H.K(a,b,c,s,e)}if(r===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.kp(a,b),c,d,e)}if(r===7){s=H.K(a,t.P,c,d,e)
return s&&H.K(a,b.z,c,d,e)}if(p===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.kp(a,d),e)}if(p===7){s=H.K(a,b,c,t.P,e)
return s||H.K(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.Z)return!0
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
if(!H.K(a,k,c,j,e)||!H.K(a,j,e,k,c))return!1}return H.kX(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.kX(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.mW(a,b,c,d,e)}return!1},
kX:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.K(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.K(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.K(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.K(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.K(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
mW:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.K(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kP(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.K(a,H.fF(a,b,l[p]),c,r[p],e))return!1
return!0},
d5:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aE(a))if(r!==7)if(!(r===6&&H.d5(a.z)))s=r===8&&H.d5(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nS:function(a){var s
if(!H.aE(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aE:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kR:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f4:function f4(){this.c=this.b=this.a=null},
f_:function f_(){},
cV:function cV(a){this.a=a},
la:function(a){return v.mangledGlobalNames[a]},
nW:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jl:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.jY==null){H.nO()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.kx("Return interceptor for "+H.u(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.iV
if(o==null)o=$.iV=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.nT(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.t
if(s===Object.prototype)return C.t
if(typeof q=="function"){o=$.iV
if(o==null)o=$.iV=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.j,enumerable:false,writable:true,configurable:true})
return C.j}return C.j},
lR:function(a){if(a<0||a>4294967295)throw H.c(P.aO(a,0,4294967295,"length",null))
return J.lS(new Array(a))},
jz:function(a){if(a<0)throw H.c(P.k6("Length must be a non-negative integer: "+a))
return new Array(a)},
lS:function(a){return J.jA(a)},
jA:function(a){a.fixed$length=Array
return a},
lT:function(a,b){return J.lx(a,b)},
d3:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ca.prototype
return J.dz.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.cb.prototype
if(typeof a=="boolean")return J.dy.prototype
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.jl(a)},
d4:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.jl(a)},
jk:function(a){if(a==null)return a
if(a.constructor==Array)return J.ah.prototype
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.jl(a)},
l2:function(a){if(typeof a=="number")return J.bz.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bl.prototype
return a},
nJ:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bl.prototype
return a},
bp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.as.prototype
return a}if(a instanceof P.L)return a
return J.jl(a)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.d3(a).p(a,b)},
k3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l2(a).P(a,b)},
lu:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.d4(a).h(a,b)},
lv:function(a,b,c){return J.bp(a).eK(a,b,c)},
lw:function(a,b,c,d){return J.bp(a).eY(a,b,c,d)},
lx:function(a,b){return J.l2(a).a0(a,b)},
fS:function(a,b){return J.jk(a).B(a,b)},
ju:function(a,b){return J.jk(a).C(a,b)},
ly:function(a){return J.bp(a).ga_(a)},
lz:function(a){return J.bp(a).gcu(a)},
fT:function(a){return J.d3(a).gI(a)},
al:function(a){return J.jk(a).gJ(a)},
b_:function(a){return J.d4(a).gl(a)},
k4:function(a){return J.jk(a).fD(a)},
lA:function(a,b){return J.bp(a).fH(a,b)},
lB:function(a){return J.nJ(a).fO(a)},
d8:function(a){return J.d3(a).i(a)},
a:function a(){},
dy:function dy(){},
cb:function cb(){},
ba:function ba(){},
dZ:function dZ(){},
bl:function bl(){},
as:function as(){},
ah:function ah(){},
dA:function dA(){},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bz:function bz(){},
ca:function ca(){},
dz:function dz(){},
aK:function aK(){}},P={
ml:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nz()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bR(new P.iR(q),1)).observe(s,{childList:true})
return new P.iQ(q,s,r)}else if(self.setImmediate!=null)return P.nA()
return P.nB()},
mm:function(a){self.scheduleImmediate(H.bR(new P.iS(a),0))},
mn:function(a){self.setImmediate(H.bR(new P.iT(a),0))},
mo:function(a){P.jH(C.h,a)},
jH:function(a,b){var s=C.c.T(a.a,1000)
return P.my(s<0?0:s,b)},
kv:function(a,b){var s=C.c.T(a.a,1000)
return P.mz(s<0?0:s,b)},
my:function(a,b){var s=new P.cU()
s.dz(a,b)
return s},
mz:function(a,b){var s=new P.cU()
s.dA(a,b)
return s},
oQ:function(a){return new P.bO(a,1)},
mr:function(){return C.U},
ms:function(a){return new P.bO(a,3)},
n2:function(a){return new P.cR(a)},
no:function(){var s,r
for(s=$.bP;s!=null;s=$.bP){$.d1=null
r=s.b
$.bP=r
if(r==null)$.d0=null
s.a.$0()}},
nu:function(){$.jT=!0
try{P.no()}finally{$.d1=null
$.jT=!1
if($.bP!=null)$.k2().$1(P.l0())}},
ns:function(a){var s=new P.eO(a),r=$.d0
if(r==null){$.bP=$.d0=s
if(!$.jT)$.k2().$1(P.l0())}else $.d0=r.b=s},
nt:function(a){var s,r,q,p=$.bP
if(p==null){P.ns(a)
$.d1=$.d0
return}s=new P.eO(a)
r=$.d1
if(r==null){s.b=p
$.bP=$.d1=s}else{q=r.b
s.b=q
$.d1=r.b=s
if(q==null)$.d0=s}},
ku:function(a,b){var s=$.ak
if(s===C.e)return P.jH(a,b)
return P.jH(a,s.f1(b))},
mh:function(a,b){var s=$.ak
if(s===C.e)return P.kv(a,b)
return P.kv(a,s.ct(b,t.d))},
kY:function(a,b,c,d,e){P.nt(new P.jf(d,e))},
np:function(a,b,c,d){var s,r=$.ak
if(r===c)return d.$0()
$.ak=c
s=r
try{r=d.$0()
return r}finally{$.ak=s}},
nq:function(a,b,c,d,e){var s,r=$.ak
if(r===c)return d.$1(e)
$.ak=c
s=r
try{r=d.$1(e)
return r}finally{$.ak=s}},
iR:function iR(a){this.a=a},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
cU:function cU(){this.c=0},
j5:function j5(a,b){this.a=a
this.b=b},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b){this.a=a
this.b=b},
bo:function bo(a){var _=this
_.a=a
_.d=_.c=_.b=null},
cR:function cR(a){this.a=a},
eO:function eO(a){this.a=a
this.b=null},
eg:function eg(){},
eh:function eh(){},
j8:function j8(){},
jf:function jf(a,b){this.a=a
this.b=b},
iY:function iY(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
lV:function(a,b,c){return H.nH(a,new H.P(b.a8("@<0>").c0(c).a8("P<1,2>")))},
M:function(a,b){return new H.P(a.a8("@<0>").c0(b).a8("P<1,2>"))},
ce:function(a){return new P.cF(a.a8("cF<0>"))},
jL:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mt:function(a,b){var s=new P.cG(a,b)
s.c=a.e
return s},
lP:function(a,b,c){var s,r
if(P.jU(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a2.push(a)
try{P.n1(a,s)}finally{if(0>=$.a2.length)return H.d($.a2,-1)
$.a2.pop()}r=P.ks(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jy:function(a,b,c){var s,r
if(P.jU(a))return b+"..."+c
s=new P.aQ(b)
$.a2.push(a)
try{r=s
r.a=P.ks(r.a,a,", ")}finally{if(0>=$.a2.length)return H.d($.a2,-1)
$.a2.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jU:function(a){var s,r
for(s=$.a2.length,r=0;r<s;++r)if(a===$.a2[r])return!0
return!1},
n1:function(a,b){var s,r,q,p,o,n,m,l=a.gJ(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.q())return
s=H.u(l.gA(l))
b.push(s)
k+=s.length+2;++j}if(!l.q()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gA(l);++j
if(!l.q()){if(j<=4){b.push(H.u(p))
return}r=H.u(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gA(l);++j
for(;l.q();p=o,o=n){n=l.gA(l);++j
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
kg:function(a,b){var s,r,q=P.ce(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)q.t(0,b.a(a[r]))
return q},
kh:function(a){var s,r={}
if(P.jU(a))return"{...}"
s=new P.aQ("")
try{$.a2.push(a)
s.a+="{"
r.a=!0
J.ju(a,new P.hB(r,s))
s.a+="}"}finally{if(0>=$.a2.length)return H.d($.a2,-1)
$.a2.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cF:function cF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iX:function iX(a){this.a=a
this.c=this.b=null},
cG:function cG(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c9:function c9(){},
cf:function cf(){},
A:function A(){},
ch:function ch(){},
hB:function hB(a,b){this.a=a
this.b=b},
R:function R(){},
e7:function e7(){},
cN:function cN(){},
cH:function cH(){},
cY:function cY(){},
df:function df(){},
di:function di(){},
hd:function hd(){},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hp:function hp(a){this.a=a},
iD:function iD(){},
iE:function iE(){},
j6:function j6(a){this.b=0
this.c=a},
lN:function(a){if(a instanceof H.b3)return a.i(0)
return"Instance of '"+H.cv(a)+"'"},
dG:function(a,b,c){var s,r=c?J.jz(a):J.lR(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hy:function(a,b){var s,r=[]
for(s=J.al(a);s.q();)r.push(s.gA(s))
if(b)return r
return J.jA(r)},
lW:function(a,b){var s,r,q=J.jz(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
jG:function(a){var s=a,r=s.length,q=P.jE(0,null,r)
return H.m6(q<r?s.slice(0,q):s)},
m8:function(a){return new H.ht(a,H.lU(a,!1,!0,!1,!1,!1))},
ks:function(a,b,c){var s=J.al(b)
if(!s.q())return a
if(c.length===0){do a+=H.u(s.gA(s))
while(s.q())}else{a+=H.u(s.gA(s))
for(;s.q();)a=a+c+H.u(s.gA(s))}return a},
kQ:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.f){s=$.lt().b
s=s.test(b)}else s=!1
if(s)return b
r=C.G.f6(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.jD(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lK:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dl:function(a){if(a>=10)return""+a
return"0"+a},
kc:function(a){return new P.b6(1000*a)},
hg:function(a){if(typeof a=="number"||H.jS(a)||null==a)return J.d8(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lN(a)},
fV:function(a){return new P.db(a)},
k6:function(a){return new P.ad(!1,null,null,a)},
e1:function(a,b){return new P.cw(null,null,!0,a,b,"Value not in range")},
aO:function(a,b,c,d,e){return new P.cw(b,c,!0,a,d,"Invalid value")},
jE:function(a,b,c){if(a>c)throw H.c(P.aO(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aO(b,a,c,"end",null))
return b}return c},
kn:function(a,b){if(a<0)throw H.c(P.aO(a,0,null,b,null))
return a},
H:function(a,b,c,d,e){var s=e==null?J.b_(b):e
return new P.dw(s,!0,a,c,"Index out of range")},
y:function(a){return new P.eI(a)},
kx:function(a){return new P.eF(a)},
jF:function(a){return new P.bG(a)},
ao:function(a){return new P.dg(a)},
e:function(a){return new P.f1(a)},
k_:function(a){H.nW(a)},
a_:function a_(a,b){this.a=a
this.b=b},
b6:function b6(a){this.a=a},
h9:function h9(){},
ha:function ha(){},
E:function E(){},
db:function db(a){this.a=a},
et:function et(){},
dU:function dU(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dw:function dw(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eI:function eI(a){this.a=a},
eF:function eF(a){this.a=a},
bG:function bG(a){this.a=a},
dg:function dg(a){this.a=a},
dX:function dX(){},
cz:function cz(){},
dj:function dj(a){this.a=a},
f1:function f1(a){this.a=a},
hm:function hm(a,b){this.a=a
this.b=b},
h:function h(){},
dx:function dx(){},
a8:function a8(){},
L:function L(){},
aQ:function aQ(a){this.a=a},
aV:function(a){var s,r,q,p,o
if(a==null)return null
s=P.M(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
kU:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jS(a))return a
if(t.f.b(a))return P.l1(a)
if(t.c.b(a)){s=[]
J.ju(a,new P.jb(s))
a=s}return a},
l1:function(a){var s={}
J.ju(a,new P.jh(s))
return s},
jb:function jb(a){this.a=a},
jh:function jh(a){this.a=a},
dr:function dr(a,b){this.a=a
this.b=b},
hk:function hk(){},
hl:function hl(){},
bc:function bc(){},
dE:function dE(){},
bf:function bf(){},
dV:function dV(){},
hZ:function hZ(){},
bF:function bF(){},
ei:function ei(){},
k:function k(){},
bk:function bk(){},
es:function es(){},
f9:function f9(){},
fa:function fa(){},
fh:function fh(){},
fi:function fi(){},
ft:function ft(){},
fu:function fu(){},
fC:function fC(){},
fD:function fD(){},
fY:function fY(){},
dc:function dc(){},
fZ:function fZ(a){this.a=a},
dd:function dd(){},
aH:function aH(){},
dW:function dW(){},
eQ:function eQ(){},
cx:function cx(){},
ec:function ec(){},
fp:function fp(){},
fq:function fq(){}},W={
k5:function(){var s=document.createElement("a")
s.toString
return s},
k9:function(){var s=document.createElement("canvas")
s.toString
return s},
lM:function(a,b,c){var s=document.body
s.toString
s=new H.bn(new W.W(C.k.a1(s,a,b,c)),new W.hb())
return t.h.a(s.gar(s))},
hc:function(a){return"wheel"},
c5:function(a){var s,r,q="element tag unavailable"
try{s=J.bp(a)
s.gd3(a)
q=s.gd3(a)}catch(r){H.aF(r)}return q},
iW:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kH:function(a,b,c,d){var s=W.iW(W.iW(W.iW(W.iW(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
X:function(a,b,c,d){var s=W.kZ(new W.iU(c),t.B)
if(s!=null&&!0)J.lw(a,b,s,!1)
return new W.f0(a,b,s,!1)},
kG:function(a){var s=W.k5(),r=window
s=new W.bN(new W.j0(s,r.location))
s.dq(a)
return s},
mp:function(a,b,c,d){return!0},
mq:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
kL:function(){var s=t.N
s=new W.fx(P.kg(C.q,s),P.ce(s),P.ce(s),P.ce(s),null)
s.dv(null,new H.cj(C.q,new W.j3()),["TEMPLATE"],null)
return s},
kZ:function(a,b){var s=$.ak
if(s===C.e)return a
return s.ct(a,b)},
n:function n(){},
fU:function fU(){},
d9:function d9(){},
da:function da(){},
bt:function bt(){},
de:function de(){},
b1:function b1(){},
b2:function b2(){},
ae:function ae(){},
h2:function h2(){},
C:function C(){},
c_:function c_(){},
h3:function h3(){},
a7:function a7(){},
ap:function ap(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
c1:function c1(){},
h7:function h7(){},
c2:function c2(){},
c3:function c3(){},
dm:function dm(){},
h8:function h8(){},
eR:function eR(a,b){this.a=a
this.b=b},
z:function z(){},
hb:function hb(){},
i:function i(){},
b:function b(){},
aq:function aq(){},
dp:function dp(){},
dq:function dq(){},
ds:function ds(){},
ar:function ar(){},
ho:function ho(){},
b7:function b7(){},
bb:function bb(){},
hz:function hz(){},
hQ:function hQ(){},
dL:function dL(){},
hR:function hR(a){this.a=a},
dM:function dM(){},
hS:function hS(a){this.a=a},
at:function at(){},
dN:function dN(){},
a3:function a3(){},
W:function W(a){this.a=a},
r:function r(){},
cr:function cr(){},
av:function av(){},
e0:function e0(){},
e4:function e4(){},
i4:function i4(a){this.a=a},
e6:function e6(){},
ai:function ai(){},
ea:function ea(){},
ax:function ax(){},
eb:function eb(){},
ay:function ay(){},
ef:function ef(){},
ie:function ie(a){this.a=a},
ab:function ab(){},
cA:function cA(){},
ej:function ej(){},
ek:function ek(){},
bH:function bH(){},
aj:function aj(){},
a4:function a4(){},
em:function em(){},
en:function en(){},
ij:function ij(){},
az:function az(){},
bj:function bj(){},
er:function er(){},
ip:function ip(){},
aB:function aB(){},
iC:function iC(){},
eL:function eL(){},
aR:function aR(){},
bL:function bL(){},
bM:function bM(){},
eS:function eS(){},
cE:function cE(){},
f5:function f5(){},
cI:function cI(){},
fo:function fo(){},
fv:function fv(){},
eP:function eP(){},
eY:function eY(a){this.a=a},
jx:function jx(a,b){this.a=a
this.$ti=b},
f0:function f0(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iU:function iU(a){this.a=a},
jK:function jK(a){this.$ti=a},
bN:function bN(a){this.a=a},
G:function G(){},
cs:function cs(a){this.a=a},
hW:function hW(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(){},
j1:function j1(){},
j2:function j2(){},
fx:function fx(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j3:function j3(){},
fw:function fw(){},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
j0:function j0(a,b){this.a=a
this.b=b},
fG:function fG(a){this.a=a
this.b=0},
j7:function j7(a){this.a=a},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
f2:function f2(){},
f3:function f3(){},
f7:function f7(){},
f8:function f8(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
cP:function cP(){},
cQ:function cQ(){},
fm:function fm(){},
fn:function fn(){},
fs:function fs(){},
fy:function fy(){},
fz:function fz(){},
cS:function cS(){},
cT:function cT(){},
fA:function fA(){},
fB:function fB(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){}},K={
I:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.e("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.aW(a,0)
r=C.b.aW(b,0)
if(s>r){q=r
r=s
s=q}return new K.i_(s,r)},
aG:function aG(){},
du:function du(){},
a1:function a1(a){this.a=a},
i_:function i_(a,b){this.a=a
this.b=b},
p:function p(a){this.a=a}},L={
im:function(){var s=t.N
return new L.il(P.M(s,t.aJ),P.M(s,t.aX),P.ce(s))},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a,b){this.b=a
this.c=b},
il:function il(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iq:function iq(a,b){this.b=a
this.c=!1
this.a=b}},O={
jv:function(){return new O.bw([])},
bw:function bw(a){this.a=a
this.c=this.b=null},
cm:function cm(a){this.a=a
this.b=null},
dK:function(a,b){return new O.ck(new V.O(0,0,0),a,b,new A.af(!1,!1,!1))},
dH:function dH(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(){},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(){},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(){},
hC:function hC(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
dJ:function dJ(){},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
hF:function hF(a){this.b=a},
hG:function hG(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
hH:function hH(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
ih:function ih(){}},E={
kD:function(){var s=window.navigator.vendor
s.toString
if(C.b.u(s,"Google"))return C.x
s=window.navigator.userAgent
s.toString
if(C.b.u(s,"Firefox"))return C.l
s=window.navigator.appVersion
s.toString
if(C.b.u(s,"Trident")||C.b.u(s,"Edge"))return C.m
s=window.navigator.appName
s.toString
if(C.b.u(s,"Microsoft"))return C.m
return C.y},
kE:function(){var s=window.navigator.appVersion
s.toString
if(C.b.u(s,"Win"))return C.R
if(C.b.u(s,"Mac"))return C.r
if(C.b.u(s,"Linux"))return C.S
return C.T},
ma:function(a,b){var s
Date.now()
s=new E.i0(a,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1),new O.cm([]),new O.cm([]),new O.cm([]),[null],P.M(t.N,t.k))
s.dn(a,b)
return s},
mg:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kt(a,!0,!0,!0,!1)
s=W.k9()
r=s.style
r.width="100%"
r.height="100%"
J.lz(a).t(0,s)
return E.kt(s,!0,!0,!0,!1)},
kt:function(a,b,c,d,e){var s,r,q,p,o="mousemove",n=t.z,m=t.s.a(C.H.da(a,"webgl2",P.lV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],n,n)))
if(m==null)throw H.c(P.e("Failed to get the rendering context for WebGL."))
s=E.ma(m,a)
H.j9(m.getParameter(3379))
H.j9(m.getParameter(34076))
n=[]
r=$.he
q=new X.eJ(a,n,(r==null?$.he=new E.eZ(E.kD(),E.kE()):r).a===C.l?0.16666666666666666:0.005555555555555556)
p=document
p.toString
n.push(W.X(p,"contextmenu",q.ge5(),!1))
n.push(W.X(a,"focus",q.geb(),!1))
n.push(W.X(a,"blur",q.ge_(),!1))
n.push(W.X(p,"keyup",q.gef(),!1))
n.push(W.X(p,"keydown",q.ged(),!1))
n.push(W.X(a,"mousedown",q.gej(),!1))
n.push(W.X(a,"mouseup",q.gen(),!1))
n.push(W.X(a,o,q.gel(),!1))
W.hc(a)
W.hc(a)
n.push(W.X(a,W.hc(a),q.gep(),!1))
n.push(W.X(p,o,q.ge7(),!1))
n.push(W.X(p,"mouseup",q.ge9(),!1))
n.push(W.X(p,"pointerlockchange",q.ger(),!1))
n.push(W.X(a,"touchstart",q.geD(),!1))
n.push(W.X(a,"touchend",q.gez(),!1))
n.push(W.X(a,"touchmove",q.geB(),!1))
n=new E.eo(a,s,new P.a_(Date.now(),!1))
n.cc()
return n},
h_:function h_(){},
bx:function bx(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bv:function bv(a){this.b=a},
bD:function bD(a){this.b=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
i0:function i0(a,b,c,d,e,f,g,h){var _=this
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
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
eo:function eo(a,b,c){var _=this
_.b=a
_.d=null
_.e=b
_.Q=null
_.cx=!1
_.cy=c
_.db=0},
ii:function ii(a){this.a=a}},Z={
mk:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cZ(c)),35044)
a.bindBuffer(b,null)
return new Z.eM(b,s)},
ac:function(a){return new Z.bm(a)},
eM:function eM(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iP:function iP(a){this.a=a},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a){this.a=a}},D={
ag:function(){return new D.by()},
h1:function h1(){},
by:function by(){var _=this
_.c=_.b=_.a=null
_.d=0},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
a0:function a0(){},
b8:function b8(){},
b9:function b9(){},
F:function F(a,b,c){this.c=a
this.d=b
this.e=c},
c0:function c0(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cd:function cd(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={bZ:function bZ(a,b){this.a=a
this.b=b},dC:function dC(a,b){this.a=a
this.b=b},hv:function hv(a){this.d=a},hA:function hA(a,b,c,d){var _=this
_.a=a
_.r=0
_.x=b
_.y=c
_.z=d},bB:function bB(a,b,c){this.a=a
this.b=b
this.c=c},hT:function hT(a,b,c,d,e){var _=this
_.a=a
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},io:function io(a,b,c,d,e){var _=this
_.a=a
_.e=b
_.f=c
_.r=d
_.x=e},eJ:function eJ(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
lO:function(a){var s=V.aD(1),r=$.ko
if(r==null){r=V.m9(0,0,1,1)
$.ko=r}return new X.hn(new V.b4(0,0,0,s),r)},
hn:function hn(a,b){this.a=a
this.r=b
this.x=null},
dY:function dY(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
ig:function ig(){},
nU:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d=V.mc("Test 003"),c=W.k9()
c.className="pageLargeCanvas"
c.id=f
d.a.appendChild(c).toString
d.cn(["A test of the Material Light Shader with a solid color directional lighting."])
d.cn(["\xab[Back to Tests|../]"])
s=O.jv()
r=new E.bx(s)
s.bb(r.gfm(),r.gfp())
r.sbR(0,e)
r.saP(e)
r.sbR(0,F.o2())
s=new U.e3(V.cn())
s.sd7(0)
s.scY(0,0)
s.sd2(0)
q=s.d
$.B().toString
if(!(Math.abs(q-0.1)<1e-9)){s.d=0.1
s.aw(new D.F("deltaYaw",q,0.1))}q=s.e
$.B().toString
if(!(Math.abs(q-0.21)<1e-9)){s.e=0.21
s.aw(new D.F("deltaPitch",q,0.21))}q=s.f
$.B().toString
if(!(Math.abs(q-0.32)<1e-9)){s.f=0.32
s.aw(new D.F("deltaRoll",q,0.32))}r.saP(s)
s=O.jv()
p=new O.dH(s)
s.bb(p.gdW(),p.gdY())
s=p.gcQ()
s.gv().t(0,p.gca())
s.gcP().t(0,p.gbY())
s=p.gcQ()
o=V.jJ()
q=U.kb(V.kj(V.kl(),o,new V.D(1,1,-3)))
n=new V.O(1,1,1)
m=new D.c0(new V.O(1,1,1),V.kB(),V.jJ(),V.mj())
l=m.a
m.a=q
q.gv().t(0,m.gds())
m.ac(new D.F("mover",l,m.a))
if(!m.b.p(0,n)){l=m.b
m.b=n
m.ac(new D.F("color",l,n))}s.t(0,m)
p.gco().saB(0,new V.O(V.aD(0),V.aD(0),V.aD(1)))
p.gcz().saB(0,new V.O(V.aD(0),V.aD(1),V.aD(0)))
p.gbc().saB(0,new V.O(V.aD(1),V.aD(0),V.aD(0)))
s=p.gbc()
s.ce(new A.af(!0,!1,!1))
s.cf(10)
s=O.jv()
k=new M.dn(s)
s.bb(k.ge1(),k.ge3())
j=X.lO(e)
i=new X.dY(1.0471975511965976,0.1)
i.saP(e)
q=i.c
$.B().toString
if(!(Math.abs(q-1.0471975511965976)<1e-9)){i.c=1.0471975511965976
i.au(new D.F("fov",q,1.0471975511965976))}q=i.d
$.B().toString
if(!(Math.abs(q-0.1)<1e-9)){i.d=0.1
i.au(new D.F("near",q,0.1))}q=i.e
$.B().toString
if(!(Math.abs(q-2000)<1e-9)){i.e=2000
i.au(new D.F("far",q,2000))}q=k.b
if(q!==i){if(q!=null)q.gv().K(0,k.ga7())
l=k.b
k.b=i
i.gv().t(0,k.ga7())
k.ad(new D.F("camera",l,k.b))}q=k.c
if(q!==j){if(q!=null)q.gv().K(0,k.ga7())
l=k.c
k.c=j
j.gv().t(0,k.ga7())
k.ad(new D.F("target",l,k.c))}k.sd4(e)
k.sd4(p)
s.t(0,r)
s=k.b
if(s!=null)s.saP(U.kb(V.aN(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
h=document.getElementById(f)
if(h==null)H.f(P.e("Failed to find an element with the identifier, testCanvas."))
g=E.mg(h,!0,!0,!0,!1)
s=g.d
if(s!==k){if(s!=null)s.gv().K(0,g.gbV())
g.d=k
k.gv().t(0,g.gbV())
g.bW()}s=g.Q
if(s==null)s=g.Q=D.ag()
q=s.b
s=q==null?s.b=[]:q
s.push(new X.jq(d,p))
V.nX(g)},
jq:function jq(a,b){this.a=a
this.b=b}},V={
aD:function(a){var s
if(a<0)s=0
else s=a>1?1:a
return s},
k1:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.dc(a-b,s)
return(a<0?a+s:a)+b},
x:function(a,b,c){$.B().toString
return C.b.an(C.d.bM(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bT:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.q)(a),++p){o=a[p]
$.B().toString
n=C.b.an(C.d.bM(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.b.an(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
cn:function(){var s=$.kk
return s==null?$.kk=V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kj:function(a,b,c){var s=c.G(),r=b.ai(s).G(),q=s.ai(r),p=new V.D(a.a,a.b,a.c)
return V.aN(r.a,q.a,s.a,r.aI(0).aO(p),r.b,q.b,s.b,q.aI(0).aO(p),r.c,q.c,s.c,s.aI(0).aO(p),0,0,0,1)},
kl:function(){var s=$.aw
return s==null?$.aw=new V.T(0,0,0):s},
m9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e2(a,b,c,d)},
cC:function(){var s=$.kA
return s==null?$.kA=new V.D(0,0,0):s},
mj:function(){var s=$.iF
return s==null?$.iF=new V.D(-1,0,0):s},
jJ:function(){var s=$.iG
return s==null?$.iG=new V.D(0,1,0):s},
kB:function(){var s=$.iH
return s==null?$.iH=new V.D(0,0,1):s},
mi:function(a,b,c){return new V.D(a,b,c)},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hf:function hf(){},
cl:function cl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bA:function bA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bJ:function bJ(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function(a){P.mh(C.J,new V.js(a))},
mc:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.X(n,"scroll",new V.ib(s),!1)
return new V.i9(o)},
an:function an(){},
js:function js(a){this.a=a},
dk:function dk(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dt:function dt(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dv:function dv(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
e_:function e_(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
i9:function i9(a){this.a=a
this.b=null},
ib:function ib(a){this.a=a},
ia:function ia(a){this.a=a},
ic:function ic(a){this.a=a}},U={
kb:function(a){var s=V.cn(),r=new U.dh(s)
if(!s.p(0,a))r.a=a
return r},
dh:function dh(a){this.a=a
this.b=null},
hU:function hU(){},
e3:function e3(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null}},M={dn:function dn(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
lY:function(a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=""+"MaterialLight_"+a4.ga6(a4)+a5.ga6(a5)+a6.ga6(a6)+a7.ga6(a7)+a8.ga6(a8)+a9.ga6(a9)+b0.ga6(b0)+b1.ga6(b1)+b2.ga6(b2)+"_"
b+=a?"1":"0"
b+=a0?"1":"0"
b+=a1?"1":"0"
b=b+"0_"+a3
s=b3.length
if(s>0){b+="_Bar"
for(r=0;r<b3.length;b3.length===s||(0,H.q)(b3),++r)b+="_"+b3[r].a}s=b4.length
if(s>0){b+="_Dir"
for(r=0;r<b4.length;b4.length===s||(0,H.q)(b4),++r)b+="_"+b4[r].a}s=b5.length
if(s>0){b+="_Point"
for(r=0;r<b5.length;b5.length===s||(0,H.q)(b5),++r)b+="_"+b5[r].a}s=b6.length
if(s>0){b+="_Spot"
for(r=0;r<b6.length;b6.length===s||(0,H.q)(b6),++r)b+="_"+b6[r].a}for(s=b3.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b3[r].b
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
c=$.aZ()
if(h){s=$.aY()
c=new Z.bm(c.a|s.a)}if(g)c=new Z.bm(c.a|$.aX().a)
if(f)c=new Z.bm(c.a|$.aW().a)
return new A.hE(a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,q,m,i,m,p,e,!0,d,!1,k,p,j,h,g,!1,!1,f,!1,!1,a1,!1,a3,b.charCodeAt(0)==0?b:b,c)},
jd:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
je:function(a,b,c){var s
A.jd(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fR(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a){s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}a.a=s+"}\n"},
n7:function(a,b){var s,r=a.a,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jd(b,r,"emission")
r=b.a+="\n"
r+="vec3 emissionColor()\n"
b.a=r
r=b.a=r+"{\n"
if(q){r+="   return emissionClr;\n"
b.a=r}r+="}\n"
b.a=r
b.a=r+"\n"},
n3:function(a,b){var s,r=a.b
if(!r.a)s=!1
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.je(b,r,"ambient")
b.a+="\n"},
n5:function(a,b){var s,r=a.c
if(!r.a)s=!1
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
n8:function(a,b){var s,r=a.d
if(!r.a)s=!1
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
ne:function(a,b){var s,r=a.e
if(!r.a)s=!1
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
na:function(a,b){var s,r,q
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
nc:function(a,b){var s,r=a.r,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jd(b,r,"reflect")
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
nd:function(a,b){var s,r=a.x,q=r.a
if(!q)s=!1
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jd(b,r,"refract")
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
n4:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.fR(r)
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
s=c.a+="   return "+C.a.k(o," * ")+";\n"
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
if(!a.c.a)s=!1
else s=!0
if(s)n.push("diffuse(norm, normDir)")
if(!a.d.a)s=!1
else s=!0
if(s)n.push("invDiffuse(norm, normDir)")
if(!a.e.a)s=!1
else s=!0
if(s)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.a.k(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.k(o," + ")+");\n"
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
n6:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.fR(r)
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
if(a.dx){c.a+=u.k
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
c.a+="      highLight = intensity*("+C.a.k(l," + ")+");\n"}else c.a+="   highLight = "+C.a.k(l," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.a.k(m," + ")+");\n"
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
nb:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.fR(r)
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
p=c.a+="   return "+C.a.k(j," * ")+";\n"
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
if(a.dx){c.a+=u.k
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
p=c.a+="      highLight = intensity*("+C.a.k(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.a.k(j," + ")+");\n"
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
nf:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.fR(r)
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
if(m){s=$.he
if(s==null)s=$.he=new E.eZ(E.kD(),E.kE())
p=c.a
if(s.b===C.r){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
s=c.a+="   return "+C.a.k(h," * ")+";\n"
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
if(a.dx){c.a+=u.k
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
s=c.a+="      highLight = intensity*("+C.a.k(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.a.k(h," + ")+");\n"
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
n9:function(a,b){var s,r
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
s=b.a+="   return "+C.a.k(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
ng:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.aQ(""),j=""+"precision mediump float;\n"
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
A.n7(a,k)
A.n3(a,k)
A.n5(a,k)
A.n8(a,k)
A.ne(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.nc(a,k)
A.nd(a,k)}A.na(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.n4(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.n6(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.nb(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.q)(p),++n)A.nf(a,p[n],k)
A.n9(a,k)}p=k.a+="// === Main ===\n"
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
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ab(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ab(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ab(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.q)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.b.ab(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)j=!1
else j=!0
if(j)m.push("emissionColor()")
if(!a.r.a)j=!1
else j=!0
if(j)m.push("reflect(refl)")
if(!a.x.a)j=!1
else j=!0
if(j)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.a.k(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
nh:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aC+"];\n"
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
nj:function(a,b){var s
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
ni:function(a,b){var s
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
nl:function(a,b){var s,r
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
nm:function(a,b){var s,r
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
nk:function(a,b){var s
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
nn:function(a,b){var s
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
fR:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.ab(a,1)},
jI:function(a,b,c,d,e){var s=new A.iv([],a,c,e)
s.f=d
s.e=P.dG(d,0,!1)
return s},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.h6=_.h5=_.cI=_.h4=_.h3=_.cH=_.cG=_.h2=_.h1=_.cF=_.cE=_.h0=_.h_=_.cD=_.fZ=_.fY=_.cC=_.cB=_.b1=_.aC=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.bx=c
_.by=d
_.bz=e
_.bA=f
_.bB=g
_.bC=h
_.bD=i
_.bE=j
_.h9=_.h8=_.h7=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b0:function b0(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
hE:function hE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aC=b5
_.b1=b6
_.cB=b7},
ex:function ex(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ey:function ey(a,b,c,d,e,f){var _=this
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
eE:function eE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
cy:function cy(){},
iu:function iu(){},
iA:function iA(a){this.a=a},
cB:function cB(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
iy:function iy(a,b,c){this.a=a
this.c=b
this.d=c},
iz:function iz(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eu:function eu(a,b,c){this.a=a
this.c=b
this.d=c},
iw:function iw(a,b,c){this.a=a
this.c=b
this.d=c},
ev:function ev(a,b,c){this.a=a
this.c=b
this.d=c},
ew:function ew(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){this.a=a
this.c=b
this.d=c},
ez:function ez(a,b,c){this.a=a
this.c=b
this.d=c},
eA:function eA(a,b,c){this.a=a
this.c=b
this.d=c},
eC:function eC(a,b,c){this.a=a
this.c=b
this.d=c},
eD:function eD(a,b,c){this.a=a
this.c=b
this.d=c}},F={
o2:function(){return F.nE(15,30,0.5,1,new F.jt())},
nE:function(a,b,c,d,e){var s=F.nZ(a,b,new F.ji(e,d,b,c))
s.aA()
s.fl(new F.iK(),new F.hX())
return s},
nZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(a<1)throw H.c(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.e("Must have 1 or more divisions of the height for a surface."))
s=new F.i5()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.J(s,[])
if(p<0)n=0
else n=p>1?1:p
m=o.cm(new V.b4(n,0,0,1),new V.a9(p,1))
c.$3(m,p,0)
r.push(m.cw(null))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.J(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=i.cm(new V.b4(h,g,f,1),new V.a9(p,k))
c.$3(m,p,l)
r.push(m.cw(null))}}s.gN().eZ(a+1,b+1,r)
return s},
kC:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cD()
h=$.lp()
s=$.aZ()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.aY().a)!==0)q.r=e
if((r&$.aX().a)!==0)q.x=b
if((r&$.br().a)!==0)q.y=f
if((r&$.bs().a)!==0)q.z=g
if((r&$.lq().a)!==0)q.Q=c
if((r&$.bV().a)!==0)q.ch=i
if((r&$.aW().a)!==0)q.cx=a
return q},
jt:function jt(){},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aJ:function aJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(){},
id:function id(){},
hw:function hw(){},
it:function it(){},
i5:function i5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i8:function i8(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
e8:function e8(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(a){this.b=a},
cD:function cD(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
iO:function iO(a){this.a=a},
iN:function iN(a){this.a=a},
J:function J(a,b){this.a=a
this.b=!1
this.c=b},
bK:function bK(a,b,c){this.b=a
this.c=b
this.d=c},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.b=a
this.c=b},
iL:function iL(){},
iK:function iK(){},
iM:function iM(){},
hX:function hX(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jB.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.cu(a)},
i:function(a){return"Instance of '"+H.cv(a)+"'"}}
J.dy.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iZ:1}
J.cb.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.ba.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.dZ.prototype={}
J.bl.prototype={}
J.as.prototype={
i:function(a){var s=a[$.ld()]
if(s==null)return this.dj(a)
return"JavaScript function for "+J.d8(s)},
$ic8:1}
J.ah.prototype={
bJ:function(a,b){if(!!a.fixed$length)H.f(P.y("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e1(b,null))
return a.splice(b,1)[0]},
K:function(a,b){var s
if(!!a.fixed$length)H.f(P.y("remove"))
for(s=0;s<a.length;++s)if(J.N(a[s],b)){a.splice(s,1)
return!0}return!1},
Z:function(a,b){if(!!a.fixed$length)H.f(P.y("addAll"))
this.dD(a,b)
return},
dD:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.ao(a))
for(s=0;s<r;++s)a.push(b[s])},
C:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.ao(a))}},
k:function(a,b){var s,r,q=a.length,p=P.dG(q,"",!1)
for(s=0;s<a.length;++s){r=H.u(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
fi:function(a){return this.k(a,"")},
ff:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.ao(a))}throw H.c(H.hs())},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gfe:function(a){if(a.length>0)return a[0]
throw H.c(H.hs())},
gb4:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.hs())},
cp:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.ao(a))}return!1},
aK:function(a,b){if(!!a.immutable$list)H.f(P.y("sort"))
H.mf(a,b==null?J.mV():b)},
df:function(a){return this.aK(a,null)},
u:function(a,b){var s
for(s=0;s<a.length;++s)if(J.N(a[s],b))return!0
return!1},
i:function(a){return P.jy(a,"[","]")},
gJ:function(a){return new J.a6(a,a.length)},
gI:function(a){return H.cu(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.f(P.y("set length"))
if(b>a.length)H.kS(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bS(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.f(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bS(a,b))
a[b]=c},
$it:1,
$ij:1,
$ih:1,
$im:1}
J.dA.prototype={}
J.a6.prototype={
gA:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.q(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bz.prototype={
a0:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gb2(b)
if(this.gb2(a)===s)return 0
if(this.gb2(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb2:function(a){return a===0?1/a<0:a<0},
cJ:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.y(""+a+".floor()"))},
a5:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
bM:function(a,b){var s
if(b>20)throw H.c(P.aO(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gb2(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dc:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
dl:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cg(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.cg(a,b)},
cg:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.y("Result of truncating division is "+H.u(s)+": "+H.u(a)+" ~/ "+b))},
aY:function(a,b){var s
if(a>0)s=this.eW(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
eW:function(a,b){return b>31?0:a>>>b},
$iS:1,
$iV:1}
J.ca.prototype={$il:1}
J.dz.prototype={}
J.aK.prototype={
bv:function(a,b){if(b<0)throw H.c(H.bS(a,b))
if(b>=a.length)H.f(H.bS(a,b))
return a.charCodeAt(b)},
aW:function(a,b){if(b>=a.length)throw H.c(H.bS(a,b))
return a.charCodeAt(b)},
O:function(a,b){return a+b},
bd:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
aT:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.e1(b,null))
if(b>c)throw H.c(P.e1(b,null))
if(c>a.length)throw H.c(P.e1(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.aT(a,b,null)},
fO:function(a){return a.toLowerCase()},
P:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
an:function(a,b){var s=b-a.length
if(s<=0)return a
return this.P(" ",s)+a},
f4:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aO(c,0,s,null,null))
return H.l9(a,b,c)},
u:function(a,b){return this.f4(a,b,0)},
a0:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gI:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gl:function(a){return a.length},
$it:1,
$iv:1}
H.dD.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.o.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bv(this.a,b)}}
H.j.prototype={}
H.cg.prototype={
gJ:function(a){return new H.aM(this,this.gl(this))},
ba:function(a,b){return this.di(0,b)}}
H.aM.prototype={
gA:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a,p=J.d4(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.ao(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.B(q,s);++r.c
return!0}}
H.bd.prototype={
gJ:function(a){return new H.ci(J.al(this.a),this.b)},
gl:function(a){return J.b_(this.a)},
B:function(a,b){return this.b.$1(J.fS(this.a,b))}}
H.c4.prototype={$ij:1}
H.ci.prototype={
q:function(){var s=this,r=s.b
if(r.q()){s.a=s.c.$1(r.gA(r))
return!0}s.a=null
return!1},
gA:function(a){return H.U(this).Q[1].a(this.a)}}
H.cj.prototype={
gl:function(a){return J.b_(this.a)},
B:function(a,b){return this.b.$1(J.fS(this.a,b))}}
H.bn.prototype={
gJ:function(a){return new H.eN(J.al(this.a),this.b)}}
H.eN.prototype={
q:function(){var s,r
for(s=this.a,r=this.b;s.q();)if(r.$1(s.gA(s)))return!0
return!1},
gA:function(a){var s=this.a
return s.gA(s)}}
H.c6.prototype={}
H.eH.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.bI.prototype={}
H.ir.prototype={
a2:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.ct.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dB.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eG.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hY.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fr.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.b3.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lb(r==null?"unknown":r)+"'"},
$ic8:1,
gfR:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.el.prototype={}
H.ee.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lb(s)+"'"}}
H.bu.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bu))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gI:function(a){var s,r=this.c
if(r==null)s=H.cu(this.a)
else s=typeof r!=="object"?J.fT(r):H.cu(r)
return(s^H.cu(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.u(this.d)+"' of "+("Instance of '"+H.cv(s)+"'")}}
H.e5.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.P.prototype={
gl:function(a){return this.a},
gU:function(a){return new H.aL(this)},
gfQ:function(a){return H.lX(new H.aL(this),new H.hu(this))},
f5:function(a,b){var s=this.b
if(s==null)return!1
return this.dL(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aX(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aX(p,b)
q=r==null?n:r.b
return q}else return o.fh(b)},
fh:function(a){var s,r,q=this.d
if(q==null)return null
s=this.c6(q,J.fT(a)&0x3ffffff)
r=this.cK(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.c_(s==null?m.b=m.bm():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.c_(r==null?m.c=m.bm():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bm()
p=J.fT(b)&0x3ffffff
o=m.c6(q,p)
if(o==null)m.bp(q,p,[m.bn(b,c)])
else{n=m.cK(o,b)
if(n>=0)o[n].b=c
else o.push(m.bn(b,c))}}},
C:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.ao(s))
r=r.c}},
c_:function(a,b,c){var s=this.aX(a,b)
if(s==null)this.bp(a,b,this.bn(b,c))
else s.b=c},
dS:function(){this.r=this.r+1&67108863},
bn:function(a,b){var s,r=this,q=new H.hx(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.dS()
return q},
cK:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.N(a[r].a,b))return r
return-1},
i:function(a){return P.kh(this)},
aX:function(a,b){return a[b]},
c6:function(a,b){return a[b]},
bp:function(a,b,c){a[b]=c},
dP:function(a,b){delete a[b]},
dL:function(a,b){return this.aX(a,b)!=null},
bm:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bp(r,s,r)
this.dP(r,s)
return r}}
H.hu.prototype={
$1:function(a){var s=this.a
return H.U(s).Q[1].a(s.h(0,a))},
$S:function(){return H.U(this.a).a8("2(1)")}}
H.hx.prototype={}
H.aL.prototype={
gl:function(a){return this.a.a},
gJ:function(a){var s=this.a,r=new H.dF(s,s.r)
r.c=s.e
return r}}
H.dF.prototype={
gA:function(a){return H.U(this).c.a(this.d)},
q:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jm.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.jn.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.jo.prototype={
$1:function(a){return this.a(a)},
$S:31}
H.ht.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cp.prototype={}
H.bC.prototype={
gl:function(a){return a.length},
$it:1,
$iw:1}
H.be.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.co.prototype={
m:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dO.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.dP.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.dQ.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.dR.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.dS.prototype={
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.cq.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.dT.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.cJ.prototype={}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
H.aa.prototype={
a8:function(a){return H.fF(v.typeUniverse,this,a)},
c0:function(a){return H.mJ(v.typeUniverse,this,a)}}
H.f4.prototype={}
H.f_.prototype={
i:function(a){return this.a}}
H.cV.prototype={}
P.iR.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:35}
P.iQ.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:45}
P.iS.prototype={
$0:function(){this.a.$0()},
$S:10}
P.iT.prototype={
$0:function(){this.a.$0()},
$S:10}
P.cU.prototype={
dz:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bR(new P.j5(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
dA:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bR(new P.j4(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$iik:1}
P.j5.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:1}
P.j4.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.dl(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bO.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.u(this.a)+")"}}
P.bo.prototype={
gA:function(a){var s=this.c
if(s==null)return this.b
return s.gA(s)},
q:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.q())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bO){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.al(s)
if(o instanceof P.bo){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.cR.prototype={
gJ:function(a){return new P.bo(this.a())}}
P.eO.prototype={}
P.eg.prototype={}
P.eh.prototype={}
P.j8.prototype={}
P.jf.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:1}
P.iY.prototype={
fJ:function(a){var s,r,q,p=null
try{if(C.e===$.ak){a.$0()
return}P.np(p,p,this,a)}catch(q){s=H.aF(q)
r=H.jX(q)
P.kY(p,p,this,s,r)}},
fK:function(a,b){var s,r,q,p=null
try{if(C.e===$.ak){a.$1(b)
return}P.nq(p,p,this,a,b)}catch(q){s=H.aF(q)
r=H.jX(q)
P.kY(p,p,this,s,r)}},
fL:function(a,b){return this.fK(a,b,t.z)},
f1:function(a){return new P.iZ(this,a)},
ct:function(a,b){return new P.j_(this,a,b)}}
P.iZ.prototype={
$0:function(){return this.a.fJ(this.b)},
$S:1}
P.j_.prototype={
$1:function(a){return this.a.fL(this.b,a)},
$S:function(){return this.c.a8("~(0)")}}
P.cF.prototype={
gJ:function(a){var s=new P.cG(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
u:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.dK(b)
return r}},
dK:function(a){var s=this.d
if(s==null)return!1
return this.bk(s[this.bh(a)],a)>=0},
t:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.c1(s==null?q.b=P.jL():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.c1(r==null?q.c=P.jL():r,b)}else return q.dC(0,b)},
dC:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jL()
s=q.bh(b)
r=p[s]
if(r==null)p[s]=[q.bg(b)]
else{if(q.bk(r,b)>=0)return!1
r.push(q.bg(b))}return!0},
K:function(a,b){if((b&1073741823)===b)return this.eG(this.c,b)
else return this.eF(0,b)},
eF:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bh(b)
r=n[s]
q=o.bk(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cj(p)
return!0},
c1:function(a,b){if(a[b]!=null)return!1
a[b]=this.bg(b)
return!0},
eG:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cj(s)
delete a[b]
return!0},
c2:function(){this.r=this.r+1&1073741823},
bg:function(a){var s,r=this,q=new P.iX(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.c2()
return q},
cj:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.c2()},
bh:function(a){return J.fT(a)&1073741823},
bk:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.N(a[r].a,b))return r
return-1}}
P.iX.prototype={}
P.cG.prototype={
gA:function(a){return H.U(this).c.a(this.d)},
q:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.ao(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.c9.prototype={}
P.cf.prototype={$ij:1,$ih:1,$im:1}
P.A.prototype={
gJ:function(a){return new H.aM(a,this.gl(a))},
B:function(a,b){return this.h(a,b)},
C:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.ao(a))}},
gcM:function(a){return this.gl(a)===0},
fN:function(a,b){var s,r,q,p,o=this
if(o.gcM(a)){s=J.jz(0)
return s}r=o.h(a,0)
q=P.dG(o.gl(a),r,!0)
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
fM:function(a){return this.fN(a,!0)},
i:function(a){return P.jy(a,"[","]")}}
P.ch.prototype={}
P.hB.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.u(a)
r.a=s+": "
r.a+=H.u(b)},
$S:36}
P.R.prototype={
C:function(a,b){var s,r,q
for(s=J.al(this.gU(a)),r=H.bU(a).a8("R.V");s.q();){q=s.gA(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.b_(this.gU(a))},
i:function(a){return P.kh(a)},
$iQ:1}
P.e7.prototype={
Z:function(a,b){var s
for(s=J.al(b);s.q();)this.t(0,s.gA(s))},
i:function(a){return P.jy(this,"{","}")},
B:function(a,b){var s,r,q,p,o="index"
H.nC(b,o,t.S)
P.kn(b,o)
for(s=P.mt(this,this.r),r=H.U(s).c,q=0;s.q();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.H(b,this,o,null,q))}}
P.cN.prototype={$ij:1,$ih:1}
P.cH.prototype={}
P.cY.prototype={}
P.df.prototype={}
P.di.prototype={}
P.hd.prototype={}
P.hq.prototype={
i:function(a){return this.a}}
P.hp.prototype={
dM:function(a,b,c){var s,r,q,p,o,n,m,l=null
for(s=a.length,r=this.a,q=r.e,p=r.d,r=r.c,o=b,n=l;o<c;++o){if(o>=s)return H.d(a,o)
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
default:m=l}if(m!=null){if(n==null)n=new P.aQ("")
if(o>b)n.a+=C.b.aT(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.b.aT(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.iD.prototype={}
P.iE.prototype={
f6:function(a){var s,r,q,p=P.jE(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.j6(r)
if(q.dR(a,0,p)!==p){C.b.bv(a,p-1)
q.br()}return new Uint8Array(r.subarray(0,H.mN(0,q.b,s)))}}
P.j6.prototype={
br:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
eX:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.br()
return!1}},
dR:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.bv(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.aW(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.eX(p,C.b.aW(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.br()}else if(p<=2047){o=l.b
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
P.a_.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a_&&this.a===b.a&&!0},
a0:function(a,b){return C.c.a0(this.a,b.a)},
gI:function(a){var s=this.a
return(s^C.c.aY(s,30))&1073741823},
i:function(a){var s=this,r=P.lK(H.m5(s)),q=P.dl(H.m3(s)),p=P.dl(H.m_(s)),o=P.dl(H.m0(s)),n=P.dl(H.m2(s)),m=P.dl(H.m4(s)),l=P.lL(H.m1(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b6.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
a0:function(a,b){return C.c.a0(this.a,b.a)},
i:function(a){var s,r,q,p=new P.ha(),o=this.a
if(o<0)return"-"+new P.b6(0-o).i(0)
s=p.$1(C.c.T(o,6e7)%60)
r=p.$1(C.c.T(o,1e6)%60)
q=new P.h9().$1(o%1e6)
return""+C.c.T(o,36e8)+":"+s+":"+r+"."+q}}
P.h9.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.ha.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.E.prototype={}
P.db.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hg(s)
return"Assertion failed"}}
P.et.prototype={}
P.dU.prototype={
i:function(a){return"Throw of null."}}
P.ad.prototype={
gbj:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbi:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbj()+o+m
if(!q.a)return l
s=q.gbi()
r=P.hg(q.b)
return l+s+": "+r}}
P.cw.prototype={
gbj:function(){return"RangeError"},
gbi:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.u(q):""
else if(q==null)s=": Not greater than or equal to "+H.u(r)
else if(q>r)s=": Not in inclusive range "+H.u(r)+".."+H.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.u(r)
return s}}
P.dw.prototype={
gbj:function(){return"RangeError"},
gbi:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.eI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eF.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bG.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dg.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hg(s)+"."}}
P.dX.prototype={
i:function(a){return"Out of Memory"},
$iE:1}
P.cz.prototype={
i:function(a){return"Stack Overflow"},
$iE:1}
P.dj.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f1.prototype={
i:function(a){return"Exception: "+this.a}}
P.hm.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.aT(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
ba:function(a,b){return new H.bn(this,b)},
gl:function(a){var s,r=this.gJ(this)
for(s=0;r.q();)++s
return s},
gar:function(a){var s,r=this.gJ(this)
if(!r.q())throw H.c(H.hs())
s=r.gA(r)
if(r.q())throw H.c(H.lQ())
return s},
B:function(a,b){var s,r,q
P.kn(b,"index")
for(s=this.gJ(this),r=0;s.q();){q=s.gA(s)
if(b===r)return q;++r}throw H.c(P.H(b,this,"index",null,r))},
i:function(a){return P.lP(this,"(",")")}}
P.dx.prototype={}
P.a8.prototype={
gI:function(a){return P.L.prototype.gI.call(C.M,this)},
i:function(a){return"null"}}
P.L.prototype={constructor:P.L,$iL:1,
p:function(a,b){return this===b},
gI:function(a){return H.cu(this)},
i:function(a){return"Instance of '"+H.cv(this)+"'"},
toString:function(){return this.i(this)}}
P.aQ.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.n.prototype={}
W.fU.prototype={
gl:function(a){return a.length}}
W.d9.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.da.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bt.prototype={$ibt:1}
W.de.prototype={}
W.b1.prototype={$ib1:1}
W.b2.prototype={
da:function(a,b,c){var s=a.getContext(b,P.l1(c))
return s},
$ib2:1}
W.ae.prototype={
gl:function(a){return a.length}}
W.h2.prototype={
gl:function(a){return a.length}}
W.C.prototype={$iC:1}
W.c_.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.h3.prototype={}
W.a7.prototype={}
W.ap.prototype={}
W.h4.prototype={
gl:function(a){return a.length}}
W.h5.prototype={
gl:function(a){return a.length}}
W.h6.prototype={
gl:function(a){return a.length}}
W.c1.prototype={}
W.h7.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.c2.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.c3.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.u(r)+", "
s=a.top
s.toString
return r+H.u(s)+") "+H.u(this.gaH(a))+" x "+H.u(this.gaE(a))},
p:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.bp(b)
if(s===r.gcO(b)){s=a.top
s.toString
s=s===r.gd5(b)&&this.gaH(a)===r.gaH(b)&&this.gaE(a)===r.gaE(b)}else s=!1}else s=!1
return s},
gI:function(a){var s,r=a.left
r.toString
r=C.d.gI(r)
s=a.top
s.toString
return W.kH(r,C.d.gI(s),C.d.gI(this.gaH(a)),C.d.gI(this.gaE(a)))},
gc7:function(a){return a.height},
gaE:function(a){var s=this.gc7(a)
s.toString
return s},
gcO:function(a){var s=a.left
s.toString
return s},
gd5:function(a){var s=a.top
s.toString
return s},
gck:function(a){return a.width},
gaH:function(a){var s=this.gck(a)
s.toString
return s},
$iaP:1}
W.dm.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.h8.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.eR.prototype={
gcM:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
t:function(a,b){this.a.appendChild(b).toString
return b},
gJ:function(a){var s=this.fM(this)
return new J.a6(s,s.length)}}
W.z.prototype={
ga_:function(a){return new W.eY(a)},
gcu:function(a){var s=a.children
s.toString
return new W.eR(a,s)},
i:function(a){var s=a.localName
s.toString
return s},
a1:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.ke
if(s==null){s=[]
r=new W.cs(s)
s.push(W.kG(null))
s.push(W.kL())
$.ke=r
d=r}else d=s
s=$.kd
if(s==null){s=new W.fG(d)
$.kd=s
c=s}else{s.a=d
c=s}}if($.aI==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aI=r
r=r.createRange()
r.toString
$.jw=r
r=$.aI.createElement("base")
t.w.a(r)
s=s.baseURI
s.toString
r.href=s
$.aI.head.appendChild(r).toString}s=$.aI
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aI
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aI.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.u(C.P,s)}else s=!1
if(s){$.jw.selectNodeContents(q)
s=$.jw
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aI.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aI.body)J.k4(q)
c.bP(p)
document.adoptNode(p).toString
return p},
f7:function(a,b,c){return this.a1(a,b,c,null)},
dd:function(a,b){var s
a.textContent=null
s=a.appendChild(this.a1(a,b,null,null))
s.toString},
gd3:function(a){var s=a.tagName
s.toString
return s},
$iz:1}
W.hb.prototype={
$1:function(a){return t.h.b(a)},
$S:19}
W.i.prototype={$ii:1}
W.b.prototype={
eY:function(a,b,c,d){if(c!=null)this.dE(a,b,c,!1)},
dE:function(a,b,c,d){return a.addEventListener(b,H.bR(c,1),!1)},
$ib:1}
W.aq.prototype={$iaq:1}
W.dp.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.dq.prototype={
gl:function(a){return a.length}}
W.ds.prototype={
gl:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.ho.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.b7.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.bb.prototype={$ibb:1}
W.hz.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.hQ.prototype={
gl:function(a){return a.length}}
W.dL.prototype={
h:function(a,b){return P.aV(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aV(s.value[1]))}},
gU:function(a){var s=[]
this.C(a,new W.hR(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.hR.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.dM.prototype={
h:function(a,b){return P.aV(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aV(s.value[1]))}},
gU:function(a){var s=[]
this.C(a,new W.hS(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.hS.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.at.prototype={$iat:1}
W.dN.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.a3.prototype={$ia3:1}
W.W.prototype={
gar:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.jF("No elements"))
if(r>1)throw H.c(P.jF("More than one element"))
s=s.firstChild
s.toString
return s},
Z:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gJ:function(a){var s=this.a.childNodes
return new W.c7(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.r.prototype={
fD:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
fH:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lv(s,b,a)}catch(q){H.aF(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dh(a):s},
eK:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cr.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.av.prototype={
gl:function(a){return a.length},
$iav:1}
W.e0.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.e4.prototype={
h:function(a,b){return P.aV(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aV(s.value[1]))}},
gU:function(a){var s=[]
this.C(a,new W.i4(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iQ:1}
W.i4.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
W.e6.prototype={
gl:function(a){return a.length}}
W.ai.prototype={$iai:1}
W.ea.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.ax.prototype={$iax:1}
W.eb.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.ay.prototype={
gl:function(a){return a.length},
$iay:1}
W.ef.prototype={
h:function(a,b){return a.getItem(H.ja(b))},
C:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gU:function(a){var s=[]
this.C(a,new W.ie(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iQ:1}
W.ie.prototype={
$2:function(a,b){return this.a.push(a)},
$S:37}
W.ab.prototype={$iab:1}
W.cA.prototype={
a1:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.be(a,b,c,d)
s=W.lM("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.W(r).Z(0,new W.W(s))
return r}}
W.ej.prototype={
a1:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.be(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.W(C.u.a1(r,b,c,d))
r=new W.W(r.gar(r))
new W.W(s).Z(0,new W.W(r.gar(r)))
return s}}
W.ek.prototype={
a1:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.be(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.W(C.u.a1(r,b,c,d))
new W.W(s).Z(0,new W.W(r.gar(r)))
return s}}
W.bH.prototype={$ibH:1}
W.aj.prototype={$iaj:1}
W.a4.prototype={$ia4:1}
W.em.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.en.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.ij.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.az.prototype={$iaz:1}
W.bj.prototype={$ibj:1}
W.er.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.ip.prototype={
gl:function(a){return a.length}}
W.aB.prototype={}
W.iC.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eL.prototype={
gl:function(a){return a.length}}
W.aR.prototype={
gfa:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.y("deltaY is not supported"))},
gf9:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.y("deltaX is not supported"))},
$iaR:1}
W.bL.prototype={
eL:function(a,b){var s=a.requestAnimationFrame(H.bR(b,1))
s.toString
return s},
dQ:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bM.prototype={$ibM:1}
W.eS.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.cE.prototype={
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
p:function(a,b){var s,r
if(b==null)return!1
if(t.I.b(b)){s=a.left
s.toString
r=J.bp(b)
if(s===r.gcO(b)){s=a.top
s.toString
if(s===r.gd5(b)){s=a.width
s.toString
if(s===r.gaH(b)){s=a.height
s.toString
r=s===r.gaE(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gI:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gI(p)
s=a.top
s.toString
s=C.d.gI(s)
r=a.width
r.toString
r=C.d.gI(r)
q=a.height
q.toString
return W.kH(p,s,r,C.d.gI(q))},
gc7:function(a){return a.height},
gaE:function(a){var s=a.height
s.toString
return s},
gck:function(a){return a.width},
gaH:function(a){var s=a.width
s.toString
return s}}
W.f5.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.cI.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.fo.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.fv.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$ij:1,
$iw:1,
$ih:1,
$im:1}
W.eP.prototype={
C:function(a,b){var s,r,q,p,o
for(s=this.gU(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
b.$2(o,H.ja(q.getAttribute(o)))}},
gU:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.d(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.eY.prototype={
h:function(a,b){return this.a.getAttribute(H.ja(b))},
gl:function(a){return this.gU(this).length}}
W.jx.prototype={}
W.f0.prototype={}
W.iU.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.jK.prototype={}
W.bN.prototype={
dq:function(a){var s
if($.f6.a===0){for(s=0;s<262;++s)$.f6.m(0,C.O[s],W.nL())
for(s=0;s<12;++s)$.f6.m(0,C.i[s],W.nM())}},
az:function(a){return $.ls().u(0,W.c5(a))},
a9:function(a,b,c){var s=$.f6.h(0,W.c5(a)+"::"+b)
if(s==null)s=$.f6.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iau:1}
W.G.prototype={
gJ:function(a){return new W.c7(a,this.gl(a))}}
W.cs.prototype={
az:function(a){return C.a.cp(this.a,new W.hW(a))},
a9:function(a,b,c){return C.a.cp(this.a,new W.hV(a,b,c))},
$iau:1}
W.hW.prototype={
$1:function(a){return a.az(this.a)},
$S:16}
W.hV.prototype={
$1:function(a){return a.a9(this.a,this.b,this.c)},
$S:16}
W.cO.prototype={
dv:function(a,b,c,d){var s,r,q
this.a.Z(0,c)
s=b.ba(0,new W.j1())
r=b.ba(0,new W.j2())
this.b.Z(0,s)
q=this.c
q.Z(0,C.Q)
q.Z(0,r)},
az:function(a){return this.a.u(0,W.c5(a))},
a9:function(a,b,c){var s=this,r=W.c5(a),q=s.c
if(q.u(0,r+"::"+b))return s.d.f_(c)
else if(q.u(0,"*::"+b))return s.d.f_(c)
else{q=s.b
if(q.u(0,r+"::"+b))return!0
else if(q.u(0,"*::"+b))return!0
else if(q.u(0,r+"::*"))return!0
else if(q.u(0,"*::*"))return!0}return!1},
$iau:1}
W.j1.prototype={
$1:function(a){return!C.a.u(C.i,a)},
$S:14}
W.j2.prototype={
$1:function(a){return C.a.u(C.i,a)},
$S:14}
W.fx.prototype={
a9:function(a,b,c){if(this.dk(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.u(0,b)
return!1}}
W.j3.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:23}
W.fw.prototype={
az:function(a){var s
if(t.Y.b(a))return!1
s=t.u.b(a)
if(s&&W.c5(a)==="foreignObject")return!1
if(s)return!0
return!1},
a9:function(a,b,c){if(b==="is"||C.b.bd(b,"on"))return!1
return this.az(a)},
$iau:1}
W.c7.prototype={
q:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lu(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gA:function(a){return H.U(this).c.a(this.d)}}
W.j0.prototype={}
W.fG.prototype={
bP:function(a){var s,r=new W.j7(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
aN:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.k4(a)
else b.removeChild(a).toString},
eO:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.ly(a)
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
o=p}l=o}catch(n){H.aF(n)}r="element unprintable"
try{r=J.d8(a)}catch(n){H.aF(n)}try{q=W.c5(a)
this.eN(a,b,l,r,q,k,j)}catch(n){if(H.aF(n) instanceof P.ad)throw n
else{this.aN(a,b)
p=window
p.toString
p="Removing corrupted element "+H.u(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
eN:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aN(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.az(a)){m.aN(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.u(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.a9(a,"is",g)){m.aN(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.gU(f).slice(0)
for(p=f.gU(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.d(q,p)
o=q[p]
r=m.a
n=J.lB(o)
H.ja(o)
if(!r.a9(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.u(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.V.b(a)){s=a.content
s.toString
m.bP(s)}}}
W.j7.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.eO(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.aN(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.jF("Corrupt HTML")
throw H.c(n)}}catch(p){H.aF(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:24}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fs.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fQ.prototype={}
P.jb.prototype={
$1:function(a){this.a.push(P.kU(a))},
$S:25}
P.jh.prototype={
$2:function(a,b){this.a[a]=P.kU(b)},
$S:22}
P.dr.prototype={
gaL:function(){return new H.bd(new H.bn(this.b,new P.hk()),new P.hl())},
C:function(a,b){C.a.C(P.hy(this.gaL(),!1),b)},
m:function(a,b,c){var s=this.gaL()
J.lA(s.b.$1(J.fS(s.a,b)),c)},
t:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.b_(this.gaL().a)},
h:function(a,b){var s=this.gaL()
return s.b.$1(J.fS(s.a,b))},
gJ:function(a){var s=P.hy(this.gaL(),!1)
return new J.a6(s,s.length)}}
P.hk.prototype={
$1:function(a){return t.h.b(a)},
$S:19}
P.hl.prototype={
$1:function(a){return t.h.a(a)},
$S:28}
P.bc.prototype={$ibc:1}
P.dE.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bf.prototype={$ibf:1}
P.dV.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.hZ.prototype={
gl:function(a){return a.length}}
P.bF.prototype={$ibF:1}
P.ei.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gcu:function(a){return new P.dr(a,new W.W(a))},
a1:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.kG(null))
o.push(W.kL())
o.push(new W.fw())
c=new W.fG(new W.cs(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.k.f7(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.W(q)
p=r.gar(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ik:1}
P.bk.prototype={$ibk:1}
P.es.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.f9.prototype={}
P.fa.prototype={}
P.fh.prototype={}
P.fi.prototype={}
P.ft.prototype={}
P.fu.prototype={}
P.fC.prototype={}
P.fD.prototype={}
P.fY.prototype={
gl:function(a){return a.length}}
P.dc.prototype={
h:function(a,b){return P.aV(a.get(b))},
C:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aV(s.value[1]))}},
gU:function(a){var s=[]
this.C(a,new P.fZ(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iQ:1}
P.fZ.prototype={
$2:function(a,b){return this.a.push(a)},
$S:4}
P.dd.prototype={
gl:function(a){return a.length}}
P.aH.prototype={}
P.dW.prototype={
gl:function(a){return a.length}}
P.eQ.prototype={}
P.cx.prototype={$icx:1}
P.ec.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.H(b,a,null,null,null))
s=P.aV(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fp.prototype={}
P.fq.prototype={}
K.aG.prototype={
al:function(a,b){return!0},
i:function(a){return"all"}}
K.du.prototype={
al:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)if(s[q].al(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.a1.prototype={
al:function(a,b){return!this.dg(0,b)},
i:function(a){return"!["+this.bf(0)+"]"}}
K.i_.prototype={
al:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.jD(this.a),r=H.jD(this.b)
return s+".."+r}}
K.p.prototype={
n:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.e("May not create a Set with zero characters."))
s=new H.P(t.J)
for(r=new H.aM(a,a.gl(a)),q=H.U(r).c;r.q();)s.m(0,q.a(r.d),!0)
p=P.hy(new H.aL(s),!0)
C.a.df(p)
this.a=p},
al:function(a,b){return C.a.u(this.a,b)},
i:function(a){return P.jG(this.a)}}
L.ed.prototype={
k:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iq(this.a.j(0,b),[])
s.push(p)
return p},
fd:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.al(0,a))return p}return null},
i:function(a){return this.b},
ci:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.u(0,s==null?null:s.b))l+=" (consume)"
s=m.d
s=s==null?null:new H.aL(s.c)
s=J.al(s==null?[]:s)
for(;s.q();){r=s.gA(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.u(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.q)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bf(0))}return l.charCodeAt(0)==0?l:l}}
L.ep.prototype={
i:function(a){var s=H.k0(this.b,"\n","\\n"),r=H.k0(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eq.prototype={
ao:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.q)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.il.prototype={
j:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.ed(this,b,[])
s.m(0,b,r)}return r},
H:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eq(a,P.M(s,s))
r.m(0,a,q)}return q},
bN:function(a){return this.fP(a)},
fP:function(a){var s=this
return P.n2(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$bN(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.U(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a1.length!==0)h=C.a.bJ(a1,0)
else{if(!r.q()){q=3
break}h=n.a(r.d)}a0.push(h);++k
g=c==null
f=g?null:c.fd(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.jG(a0)
throw H.c(P.e("Untokenizable string [state: "+H.u(g?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.f(P.y("removeRange"))
P.jE(0,i,a0.length)
a0.splice(0,i-0)
C.a.Z(a1,a0)
a0=[]
b=[]
c=s.d
q=!m.u(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(h)
c=f.b
g=c.d
if(g!=null){e=P.jG(b)
g=c.d
if(g==null)l=null
else{d=g.c.h(0,e)
g=new L.ep(d==null?g.b:d,e,k)
l=g}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.u(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mr()
case 1:return P.ms(o)}}},t.l)},
i:function(a){var s,r,q=new P.aQ(""),p=this.d
if(p!=null)q.a=""+(p.ci()+"\n")
for(p=this.a,p=p.gfQ(p),p=new H.ci(J.al(p.a),p.b),s=H.U(p).Q[1];p.q();){r=s.a(p.a)
if(r!=this.d)q.a+=H.u(r==null?null:r.ci())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iq.prototype={
i:function(a){return this.b.b+": "+this.bf(0)}}
O.bw.prototype={
bQ:function(a,b,c){this.b=b
this.c=a},
bb:function(a,b){return this.bQ(a,null,b)},
eu:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
dT:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gJ:function(a){var s=this.a
return new J.a6(s,s.length)},
B:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
t:function(a,b){var s,r
if(this.eu([b])){s=this.a
r=s.length
s.push(b)
this.dT(r,[b])}},
$ih:1}
O.cm.prototype={
gl:function(a){return this.a.length},
gv:function(){var s=this.b
return s==null?this.b=D.ag():s},
at:function(){var s=this.b
return s==null?null:s.S(null)},
gR:function(a){var s=this.a
if(s.length>0)return C.a.gb4(s)
else return V.cn()},
d_:function(a){this.a.push(a)
this.at()},
bI:function(){var s=this.a
if(s.length>0){s.pop()
this.at()}}}
E.h_.prototype={}
E.bx.prototype={
sbR:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().K(0,s.gcV())
if(b!=null)b.gv().t(0,s.gcV())
s.am(new D.F("shape",r,b))}},
saP:function(a){var s,r,q=this
if(!J.N(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gv().K(0,q.gcT())
if(a!=null)a.gv().t(0,q.gcT())
r=q.r
q.am(new D.F("mover",s,r))}},
b9:function(a,b){var s,r,q,p,o,n,m=this,l=m.r
if(l==null)s=null
else{r=l.r
q=b.e
if(r<q){l.r=q
r=l.y
if(r!=null)++r.d
l.sd7(l.a+l.d*b.y)
l.scY(0,l.b+l.e*b.y)
l.sd2(l.c+l.f*b.y)
r=l.c
p=Math.cos(r)
o=Math.sin(r)
r=V.aN(p,-o,0,0,o,p,0,0,0,0,1,0,0,0,0,1)
q=l.b
p=Math.cos(q)
o=Math.sin(q)
r=r.P(0,V.aN(p,0,-o,0,0,1,0,0,o,0,p,0,0,0,0,1))
q=l.a
p=Math.cos(q)
o=Math.sin(q)
l.x=r.P(0,V.aN(1,0,0,0,0,p,-o,0,0,o,p,0,0,0,0,1))
r=l.y
if(r!=null)r.ap(0)}s=l.x}if(!J.N(s,m.x)){n=m.x
m.x=s
m.am(new D.F("matrix",n,s))}for(l=m.y.a,l=new J.a6(l,l.length),r=H.U(l).c;l.q();)r.a(l.d).b9(0,b)},
aG:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gR(q))
else o.push(p.P(0,q.gR(q)))
q.at()
a.d0(r.f)
s=C.a.gb4(a.dy)
if(r.d!=null)if(s!=null)s.fG(a,r)
for(p=r.y.a,p=new J.a6(p,p.length),o=H.U(p).c;p.q();)o.a(p.d).aG(a)
a.cZ()
q.bI()},
am:function(a){var s=this.z
return s==null?null:s.S(a)},
V:function(){return this.am(null)},
cW:function(a){this.e=null
this.am(a)},
ft:function(){return this.cW(null)},
cU:function(a){return this.am(a)},
fs:function(){return this.cU(null)},
cS:function(a){return this.am(a)},
fo:function(){return this.cS(null)},
fn:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gcR(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.by()
n=o.a;(n==null?o.a=[]:n).push(r)}this.V()},
fq:function(a,b){var s,r
for(s=b.gJ(b),r=this.gcR();s.q();)s.gA(s).gv().K(0,r)
this.V()},
i:function(a){return"Unnamed entity"}}
E.bv.prototype={
i:function(a){return this.b}}
E.bD.prototype={
i:function(a){return this.b}}
E.eZ.prototype={}
E.i0.prototype={
dn:function(a,b){var s=this
s.cy.gv().t(0,new E.i1(s))
s.db.gv().t(0,new E.i2(s))
s.dx.gv().t(0,new E.i3(s))},
gfC:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gR(q).P(0,s.gR(s))
q=s}return q},
d0:function(a){var s=this.dy
return s.push(a==null?C.a.gb4(s):a)},
cZ:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.i1.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:6}
E.i2.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:6}
E.i3.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:6}
E.eo.prototype={
bX:function(a){this.d1()},
bW:function(){return this.bX(null)},
gfg:function(){var s,r=this,q=Date.now(),p=C.c.T(P.kc(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.a_(q,!1)
return s/p},
cc:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cJ(r*o)
r=s.clientHeight
r.toString
p=C.d.cJ(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.ku(C.h,this.gfI())}},
d1:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.w.dQ(s)
r=W.kZ(new E.ii(this),t.H)
r.toString
C.w.eL(s,r)}},
fF:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cc()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.a_(p,!1)
q.y=P.kc(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.at()
p=q.db
C.a.sl(p.a,0)
p.at()
p=q.dx
C.a.sl(p.a,0)
p.at()
p=q.dy
C.a.sl(p,0)
p.push(null)
m.aG(q)}q=n.Q
if(q!=null)q.S(null)}catch(o){s=H.aF(o)
r=H.jX(o)
P.k_("Error: "+H.u(s))
P.k_("Stack: "+H.u(r))
throw H.c(s)}}}
E.ii.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.fF()}},
$S:47}
Z.eM.prototype={}
Z.bX.prototype={
b_:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aF(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.u(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.iP.prototype={}
Z.bY.prototype={
aD:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
b_:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].b_(a)}},
d6:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aG:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cv(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(m,", ")+"\nAttrs:   "+C.a.k(o,", ")}}
Z.hr.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cv(this.c)+"'")+"]"}}
Z.bm.prototype={
gbS:function(a){var s=this.a,r=(s&$.aZ().a)!==0?3:0
if((s&$.aY().a)!==0)r+=3
if((s&$.aX().a)!==0)r+=3
if((s&$.br().a)!==0)r+=2
if((s&$.bs().a)!==0)r+=3
if((s&$.d6().a)!==0)r+=3
if((s&$.d7().a)!==0)r+=4
if((s&$.bV().a)!==0)++r
return(s&$.aW().a)!==0?r+4:r},
f0:function(a){var s,r=$.aZ(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.aY()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aX()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.br()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bs()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d6()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.d7()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aW()
if((q&r.a)!==0)if(s===a)return r
return $.lr()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bm))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aZ().a)!==0)s.push("Pos")
if((r&$.aY().a)!==0)s.push("Norm")
if((r&$.aX().a)!==0)s.push("Binm")
if((r&$.br().a)!==0)s.push("Txt2D")
if((r&$.bs().a)!==0)s.push("TxtCube")
if((r&$.d6().a)!==0)s.push("Clr3")
if((r&$.d7().a)!==0)s.push("Clr4")
if((r&$.bV().a)!==0)s.push("Weight")
if((r&$.aW().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.k(s,"|")}}
D.h1.prototype={}
D.by.prototype={
t:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
K:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.u(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.K(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.u(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.K(p,b)
s=p===!0||s}return s},
S:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.a0():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.C(P.hy(p,!0),new D.hh(s))
r=q.b
if(r!=null){q.b=[]
C.a.C(r,new D.hi(s))}return!0},
ap:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.S(s)}}}}
D.hh.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.hi.prototype={
$1:function(a){a.$1(this.a)},
$S:15}
D.a0.prototype={}
D.b8.prototype={}
D.b9.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.u(this.d)+" => "+H.u(this.e)}}
X.bZ.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bZ))return!1
if(this.a!==b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dC.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dC))return!1
if(this.a!==b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hv.prototype={}
X.hA.prototype={
bH:function(a,b){this.r=a.a
return!1},
aR:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
aQ:function(a,b){return!1},
fz:function(a){return!1},
ei:function(a,b,c){return}}
X.bB.prototype={
p:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.bB))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.k(s,"+")}}
X.hT.prototype={
bH:function(a,b){this.f=a.a
return!1},
aR:function(a,b){this.f=(this.f&~a.a)>>>0
return!1},
aQ:function(a,b){return!1},
fA:function(a,b){return!1}}
X.io.prototype={
fw:function(a){return!1},
fu:function(a){return!1},
fv:function(a){return!1}}
X.eJ.prototype={
gb3:function(a){var s=this.b
return s==null?this.b=new X.hv(P.ce(t.S)):s},
gaF:function(){var s,r=this.c
if(r==null){r=$.bg
if(r==null){r=$.bg=new V.a9(0,0)
s=r}else s=r
r=this.c=new X.hT(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
gak:function(){var s=this.d
if(s==null){s=$.bg
if(s==null)s=$.bg=new V.a9(0,0)
s=this.d=new X.hA(this,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return s},
gbO:function(){var s,r=this.e
if(r==null){r=$.bg
if(r==null){r=$.bg=new V.a9(0,0)
s=r}else s=r
r=this.e=new X.io(this,r,s,new P.a_(Date.now(),!1),new P.a_(Date.now(),!1))}return r},
c4:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dC(p,new X.bB(s,r,q))},
ax:function(a){var s
this.gb3(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
bq:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gb3(this)
a.altKey
a.shiftKey},
ah:function(a){var s,r,q,p
if(a==null){s=$.bg
return s==null?$.bg=new V.a9(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a9(r-p,q-s)},
aM:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.bJ(r,s)},
bo:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.q)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.a5(n)
m=o.pageY
m.toString
C.d.a5(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.a5(l)
l=o.pageY
l.toString
l=C.d.a5(l)
k=j.top
k.toString
s.push(new V.a9(n-m,l-k))}return s},
ae:function(a){var s,r,q,p
if(a==null)return new X.bZ(0,new X.bB(!1,!1,!1))
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
return new X.bZ(s,new X.bB(r,q,p))},
bl:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
ec:function(a){return this.f=!0},
e0:function(a){return this.f=!1},
e6:function(a){if(this.f&&this.bl(a))a.preventDefault()},
eg:function(a){var s,r=this
if(!r.f)return
s=r.c4(a)
r.gb3(r).d.t(0,s.a)},
ee:function(a){var s,r=this
if(!r.f)return
s=r.c4(a)
r.gb3(r).d.K(0,s.a)},
ek:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.ax(a)
if(p.x){s=p.ae(a)
r=p.aM(a)
if(p.gak().bH(s,r))a.preventDefault()
return}s=p.ae(a)
q=p.ah(a)
if(p.gaF().bH(s,q))a.preventDefault()},
eo:function(a){var s,r,q,p=this
p.ax(a)
s=p.ae(a)
if(p.x){r=p.aM(a)
if(p.gak().aR(s,r))a.preventDefault()
return}q=p.ah(a)
if(p.gaF().aR(s,q))a.preventDefault()},
ea:function(a){var s,r,q,p=this
if(!p.bl(a)){p.ax(a)
s=p.ae(a)
if(p.x){r=p.aM(a)
if(p.gak().aR(s,r))a.preventDefault()
return}q=p.ah(a)
if(p.gaF().aR(s,q))a.preventDefault()}},
em:function(a){var s,r,q,p=this
p.ax(a)
s=p.ae(a)
if(p.x){r=p.aM(a)
if(p.gak().aQ(s,r))a.preventDefault()
return}q=p.ah(a)
if(p.gaF().aQ(s,q))a.preventDefault()},
e8:function(a){var s,r,q,p=this
if(!p.bl(a)){p.ax(a)
s=p.ae(a)
if(p.x){r=p.aM(a)
if(p.gak().aQ(s,r))a.preventDefault()
return}q=p.ah(a)
if(p.gaF().aQ(s,q))a.preventDefault()}},
eq:function(a){var s,r,q,p=this
p.ax(a)
s=p.Q
r=new V.bJ(C.v.gf9(a)*s,C.v.gfa(a)*s)
if(p.x){if(p.gak().fz(r))a.preventDefault()
return}q=p.ah(a)
if(p.gaF().fA(r,q))a.preventDefault()},
es:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ae(q.y)
r=q.ah(q.y)
q.gak().ei(s,r,p)}},
eE:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bq(a)
s=r.bo(a)
if(r.gbO().fw(s))a.preventDefault()},
eA:function(a){var s
this.bq(a)
s=this.bo(a)
if(this.gbO().fu(s))a.preventDefault()},
eC:function(a){var s
this.bq(a)
s=this.bo(a)
if(this.gbO().fv(s))a.preventDefault()}}
D.c0.prototype={
ac:function(a){var s=this.r
return s==null?null:s.S(a)},
dt:function(){return this.ac(null)},
$icc:1}
D.cd.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.ag():s},
gcP:function(){var s=this.z
return s==null?this.z=D.ag():s},
ac:function(a){var s=this.y
return s==null?null:s.S(a)},
c9:function(a){var s=this.z
return s==null?null:s.S(a)},
eh:function(){return this.c9(null)},
ew:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r)if(this.dr(a[r]))return!1
return!0},
dV:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gc8(),q=this.f,p=0;p<b.length;b.length===s||(0,H.q)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.by()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ac(new D.b8())},
ey:function(a,b){var s,r,q,p
for(s=b.gJ(b),r=this.gc8(),q=this.e;s.q();){p=s.gA(s)
C.a.K(q,p)
p.gv().K(0,r)}this.ac(new D.b9())},
dr:function(a){var s=C.a.u(this.f,a)
return s}}
V.O.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.b4.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b4))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
w:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.hf.prototype={}
V.cl.prototype={
W:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cl))return!1
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
i:function(a){var s,r,q,p,o=this,n=V.bT([o.a,o.d,o.r],3,0),m=V.bT([o.b,o.e,o.x],3,0),l=V.bT([o.c,o.f,o.y],3,0),k=n.length
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
V.bA.prototype={
W:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cL:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.B().toString
if(Math.abs(b3-0)<1e-9)return V.cn()
s=1/b3
r=-l
q=-a2
return V.aN((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
P:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aN(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
b8:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
aS:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.T(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bA))return!1
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
i:function(a){return this.w()},
F:function(a){var s,r,q,p,o,n=this,m=V.bT([n.a,n.e,n.y,n.cx],3,0),l=V.bT([n.b,n.f,n.z,n.cy],3,0),k=V.bT([n.c,n.r,n.Q,n.db],3,0),j=V.bT([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
w:function(){return this.F("")}}
V.a9.prototype={
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
w:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.T.prototype={
O:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
as:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
P:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.T))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
w:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.e2.prototype={
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e2))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.bJ.prototype={
bF:function(a){var s=this.a,r=this.b
return Math.sqrt(s*s+r*r)},
p:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bJ))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.D.prototype={
bF:function(a){return Math.sqrt(this.aO(this))},
aO:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
G:function(){var s=this,r=Math.sqrt(s.aO(s))
if(r===1)return s
return s.d8(0,r)},
ai:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.D(s*r-q*p,q*o-n*r,n*p-s*o)},
O:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
aI:function(a){return new V.D(-this.a,-this.b,-this.c)},
P:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
d8:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.cC()
return new V.D(this.a/b,this.b/b,this.c/b)},
cN:function(){$.B().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
p:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.D))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
w:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
U.dh.prototype={
gv:function(){var s=this.b
return s==null?this.b=D.ag():s},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dh))return!1
return this.a.p(0,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.hU.prototype={}
U.e3.prototype={
gv:function(){var s=this.y
return s==null?this.y=D.ag():s},
aw:function(a){var s=this.y
return s==null?null:s.S(a)},
sd7:function(a){var s
a=V.k1(a,0,6.283185307179586)
s=this.a
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.aw(new D.F("yaw",s,a))}},
scY:function(a,b){var s
b=V.k1(b,0,6.283185307179586)
s=this.b
$.B().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.aw(new D.F("pitch",s,b))}},
sd2:function(a){var s
a=V.k1(a,0,6.283185307179586)
s=this.c
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.aw(new D.F("roll",s,a))}},
p:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.e3))return!1
s=q.a
r=b.a
$.B().toString
if(!(Math.abs(s-r)<1e-9))return!1
if(!(Math.abs(q.b-b.b)<1e-9))return!1
if(!(Math.abs(q.c-b.c)<1e-9))return!1
if(!(Math.abs(q.d-b.d)<1e-9))return!1
if(!(Math.abs(q.e-b.e)<1e-9))return!1
if(!(Math.abs(q.f-b.f)<1e-9))return!1
return!0},
i:function(a){var s=this
return"Rotator: ["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+"], ["+V.x(s.d,3,0)+", "+V.x(s.e,3,0)+", "+V.x(s.f,3,0)+"]"}}
M.dn.prototype={
ad:function(a){var s=this.y
return s==null?null:s.S(a)},
du:function(){return this.ad(null)},
e2:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga7(),q=0;q<b.length;b.length===s||(0,H.q)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.by()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ad(new D.b8())},
e4:function(a,b){var s,r
for(s=b.gJ(b),r=this.ga7();s.q();)s.gA(s).gv().K(0,r)
this.ad(new D.b9())},
sd4:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gv().K(0,r.ga7())
s=r.d
r.d=a
if(a!=null)a.gv().t(0,r.ga7())
r.ad(new D.F("technique",s,r.d))}},
gv:function(){var s=this.y
return s==null?this.y=D.ag():s},
aG:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.d0(d.d)
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
n=C.d.a5(o.a*q)
m=C.d.a5(o.b*p)
l=C.d.a5(o.c*q)
a.c=l
o=C.d.a5(o.d*p)
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
g=V.aN(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.d_(g)
f=$.le()
e=s.b
if(e!=null)f=e.a.P(0,f)
a.db.d_(f)}s=d.d
if(s!=null)s.b9(0,a)
for(s=d.e.a,r=new J.a6(s,s.length),o=H.U(r).c;r.q();)o.a(r.d).b9(0,a)
for(s=new J.a6(s,s.length),r=H.U(s).c;s.q();)r.a(s.d).aG(a)
if(d.b!=null){a.cy.bI()
a.db.bI()}a.cZ()}}
A.fW.prototype={}
A.fX.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
fc:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
fb:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.af.prototype={
ga6:function(a){var s=this.a?1:0
return s|0},
i:function(a){var s=this.a?1:0
return""+(s|0)},
p:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.af))return!1
if(this.a===b.a)s=!0
else s=!1
return s}}
A.dI.prototype={
dm:function(d6,d7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8=this,c9=null,d0=u.C,d1="Required uniform value, ",d2=", was not defined or used in shader.",d3=c8.x,d4=new P.aQ(""),d5=d3.fr
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
A.nh(d3,d4)
A.nj(d3,d4)
A.ni(d3,d4)
A.nl(d3,d4)
A.nm(d3,d4)
A.nk(d3,d4)
A.nn(d3,d4)
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
m=A.ng(d3)
c8.c=n
c8.d=m
l=c8.c5(n,35633)
k=c8.c5(c8.d,35632)
s=c8.a
q=s.createProgram()
q.toString
c8.e=q
s.attachShader(c8.gaf(),l)
s.attachShader(c8.gaf(),k)
s.linkProgram(c8.gaf())
if(!H.kT(s.getProgramParameter(c8.gaf(),35714))){j=s.getProgramInfoLog(c8.gaf())
if(j==null)j="undefined log error"
s.deleteProgram(c8.e)
H.f(P.e("Failed to link shader: "+j))}c8.eT()
c8.eV()
c8.y=c8.ga_(c8).h(0,"posAttr")
c8.Q=c8.ga_(c8).h(0,"normAttr")
c8.z=c8.ga_(c8).h(0,"binmAttr")
c8.ch=c8.ga_(c8).h(0,"txt2DAttr")
c8.cx=c8.ga_(c8).h(0,"txtCubeAttr")
c8.cy=c8.ga_(c8).h(0,"bendAttr")
if(d3.dy)c8.fy=t.j.a(c8.gM().L(0,"invViewMat"))
if(d5)c8.db=t.j.a(c8.gM().L(0,"objMat"))
if(r)c8.dx=t.j.a(c8.gM().L(0,"viewObjMat"))
d5=t.j
c8.fr=d5.a(c8.gM().L(0,"projViewObjMat"))
if(d3.go)c8.dy=d5.a(c8.gM().L(0,"viewMat"))
if(d3.x1)c8.go=t.Q.a(c8.gM().L(0,"txt2DMat"))
if(d3.x2)c8.id=d5.a(c8.gM().L(0,"txtCubeMat"))
if(d3.y1)c8.k1=d5.a(c8.gM().L(0,"colorMat"))
c8.k3=[]
s=d3.aC
if(s>0){c8.k2=t.v.a(c8.gM().L(0,"bendMatCount"))
for(i=0;i<s;++i){r=c8.k3
h=c8.r
if(h==null)H.f(P.e(d0))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.f(P.e(d1+q+d2))
r.push(d5.a(g))}}if(d3.a.a)c8.k4=t.g.a(c8.gM().L(0,"emissionClr"))
if(d3.b.a)c8.rx=t.g.a(c8.gM().L(0,"ambientClr"))
if(d3.c.a)c8.x2=t.g.a(c8.gM().L(0,"diffuseClr"))
if(d3.d.a)c8.aC=t.g.a(c8.gM().L(0,"invDiffuseClr"))
d5=d3.e.a
if(!d5)s=!1
else s=!0
if(s){c8.cD=t.n.a(c8.gM().L(0,"shininess"))
if(d5)c8.cC=t.g.a(c8.gM().L(0,"specularClr"))}if(d3.db){c8.cE=t.a.a(c8.gM().L(0,"envSampler"))
if(d3.r.a)c8.cF=t.g.a(c8.gM().L(0,"reflectClr"))
d5=d3.x.a
if(!d5)s=!1
else s=!0
if(s){c8.cG=t.n.a(c8.gM().L(0,"refraction"))
if(d5)c8.cH=t.g.a(c8.gM().L(0,"refractClr"))}}if(d3.y.a)c8.cI=t.n.a(c8.gM().L(0,"alpha"))
if(d3.k1){d5=d3.z
s=d5.length
if(s!==0){r=t.S
c8.bx=P.M(r,t.W)
c8.by=P.M(r,t.q)
for(r=t.v,q=t.g,p=t.n,f=0;f<d5.length;d5.length===s||(0,H.q)(d5),++f){e=d5[f]
d=e.a
c="barLight"+d
b=[]
for(o=e.b,a=(d&4)!==0,i=0;i<o;++i){h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].startPnt"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].endPnt"
a1=h.h(0,a0)
if(a1==null)H.f(P.e(d1+a0+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].color"
a2=h.h(0,a0)
if(a2==null)H.f(P.e(d1+a0+d2))
q.a(a2)
if(a){h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].att0"
a3=h.h(0,a0)
if(a3==null)H.f(P.e(d1+a0+d2))
p.a(a3)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].att1"
a4=h.h(0,a0)
if(a4==null)H.f(P.e(d1+a0+d2))
p.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].att2"
a5=h.h(0,a0)
if(a5==null)H.f(P.e(d1+a0+d2))
p.a(a5)
a6=a5
a7=a4
a8=a3}else{a6=c9
a7=a6
a8=a7}b.push(new A.ex(g,a1,a2,a8,a7,a6))}c8.by.m(0,d,b)
o=c8.bx
h=c8.r
if(h==null)H.f(P.e(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.e(d1+a+d2))
o.m(0,d,r.a(g))}}d5=d3.Q
s=d5.length
if(s!==0){r=t.S
c8.bz=P.M(r,t.W)
c8.bA=P.M(r,t.L)
for(r=t.v,q=t.g,p=t.G,f=0;f<d5.length;d5.length===s||(0,H.q)(d5),++f){e=d5[f]
d=e.a
c="dirLight"+d
b=[]
for(o=e.b,a=(d&1)!==0,i=0;i<o;++i){if(a){h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].objUp"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].objRight"
a1=h.h(0,a0)
if(a1==null)H.f(P.e(d1+a0+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].objDir"
a2=h.h(0,a0)
if(a2==null)H.f(P.e(d1+a0+d2))
q.a(a2)
a9=a2
b0=a1
b1=g}else{a9=c9
b0=a9
b1=b0}h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].viewDir"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"s["+i+"].color"
a1=h.h(0,a0)
if(a1==null)H.f(P.e(d1+a0+d2))
q.a(a1)
if(a){h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"sTexture2D"+i
a2=h.h(0,a0)
if(a2==null)H.f(P.e(d1+a0+d2))
p.a(a2)
b2=a2}else b2=c9
b.push(new A.ey(b1,b0,a9,g,a1,b2))}c8.bA.m(0,d,b)
o=c8.bz
h=c8.r
if(h==null)H.f(P.e(d0))
a=c+"Count"
g=h.h(0,a)
if(g==null)H.f(P.e(d1+a+d2))
o.m(0,d,r.a(g))}}d5=d3.ch
s=d5.length
if(s!==0){r=t.S
c8.bB=P.M(r,t.W)
c8.bC=P.M(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,a=t.F,a0=t.n,f=0;f<d5.length;d5.length===s||(0,H.q)(d5),++f){e=d5[f]
d=e.a
c="pointLight"+d
b=[]
for(b3=e.b,b4=(d&4)!==0,b5=(d&2)!==0,b6=(d&1)!==0,b7=(d&3)!==0,i=0;i<b3;++i){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].point"
g=h.h(0,b8)
if(g==null)H.f(P.e(d1+b8+d2))
q.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].viewPnt"
a1=h.h(0,b8)
if(a1==null)H.f(P.e(d1+b8+d2))
q.a(a1)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].color"
a2=h.h(0,b8)
if(a2==null)H.f(P.e(d1+b8+d2))
q.a(a2)
if(b7){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].invViewRotMat"
a3=h.h(0,b8)
if(a3==null)H.f(P.e(d1+b8+d2))
p.a(a3)
b9=a3}else b9=c9
if(b6){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"sTextureCube"+i
a3=h.h(0,b8)
if(a3==null)H.f(P.e(d1+b8+d2))
o.a(a3)
b2=a3}else b2=c9
if(b5){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"sShadowCube"+i
a3=h.h(0,b8)
if(a3==null)H.f(P.e(d1+b8+d2))
o.a(a3)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].shadowAdj"
a4=h.h(0,b8)
if(a4==null)H.f(P.e(d1+b8+d2))
a.a(a4)
c0=a3
c1=a4}else{c0=c9
c1=c0}if(b4){h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].att0"
a3=h.h(0,b8)
if(a3==null)H.f(P.e(d1+b8+d2))
a0.a(a3)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].att1"
a4=h.h(0,b8)
if(a4==null)H.f(P.e(d1+b8+d2))
a0.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
b8=c+"s["+i+"].att2"
a5=h.h(0,b8)
if(a5==null)H.f(P.e(d1+b8+d2))
a0.a(a5)
a6=a5
a7=a4
a8=a3}else{a6=c9
a7=a6
a8=a7}b.push(new A.eB(g,a1,b9,a2,b2,c0,c1,a8,a7,a6))}c8.bC.m(0,d,b)
b3=c8.bB
h=c8.r
if(h==null)H.f(P.e(d0))
b4=c+"Count"
g=h.h(0,b4)
if(g==null)H.f(P.e(d1+b4+d2))
b3.m(0,d,r.a(g))}}d3=d3.cx
d5=d3.length
if(d5!==0){s=t.S
c8.bD=P.M(s,t.W)
c8.bE=P.M(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,f=0;f<d3.length;d3.length===d5||(0,H.q)(d3),++f){e=d3[f]
d=e.a
c="spotLight"+d
b=[]
for(a=e.b,a0=(d&2)!==0,b3=(d&1)!==0,b4=(d&4)!==0,b5=(d&8)!==0,b6=(d&3)!==0,i=0;i<a;++i){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].objPnt"
g=h.h(0,b7)
if(g==null)H.f(P.e(d1+b7+d2))
r.a(g)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].objDir"
a1=h.h(0,b7)
if(a1==null)H.f(P.e(d1+b7+d2))
r.a(a1)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].viewPnt"
a2=h.h(0,b7)
if(a2==null)H.f(P.e(d1+b7+d2))
r.a(a2)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].color"
a3=h.h(0,b7)
if(a3==null)H.f(P.e(d1+b7+d2))
r.a(a3)
if(b6){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].objUp"
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
r.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].objRight"
a5=h.h(0,b7)
if(a5==null)H.f(P.e(d1+b7+d2))
r.a(a5)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].tuScalar"
c2=h.h(0,b7)
if(c2==null)H.f(P.e(d1+b7+d2))
q.a(c2)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].tvScalar"
c3=h.h(0,b7)
if(c3==null)H.f(P.e(d1+b7+d2))
q.a(c3)
c4=c3
c5=c2
b0=a5
b1=a4}else{c4=c9
c5=c4
b0=c5
b1=b0}if(a0){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].shadowAdj"
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
p.a(a4)
c1=a4}else c1=c9
if(b5){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].cutoff"
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
q.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].coneAngle"
a5=h.h(0,b7)
if(a5==null)H.f(P.e(d1+b7+d2))
q.a(a5)
c6=a5
c7=a4}else{c6=c9
c7=c6}if(b4){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].att0"
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
q.a(a4)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].att1"
a5=h.h(0,b7)
if(a5==null)H.f(P.e(d1+b7+d2))
q.a(a5)
h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"s["+i+"].att2"
c2=h.h(0,b7)
if(c2==null)H.f(P.e(d1+b7+d2))
q.a(c2)
a6=c2
a7=a5
a8=a4}else{a6=c9
a7=a6
a8=a7}if(b3){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"sTexture2D"+i
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
o.a(a4)
b2=a4}else b2=c9
if(a0){h=c8.r
if(h==null)H.f(P.e(d0))
b7=c+"sShadow2D"+i
a4=h.h(0,b7)
if(a4==null)H.f(P.e(d1+b7+d2))
o.a(a4)
c0=a4}else c0=c9
b.push(new A.eE(g,a1,a2,a3,b1,b0,c5,c4,c1,c7,c6,a8,a7,a6,b2,c0))}c8.bE.m(0,d,b)
a=c8.bD
h=c8.r
if(h==null)H.f(P.e(d0))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.f(P.e(d1+a0+d2))
a.m(0,d,s.a(g))}}}},
eP:function(a,b){}}
A.b0.prototype={
i:function(a){return"barLight"+this.a}}
A.b5.prototype={
i:function(a){return"dirLight"+this.a}}
A.bh.prototype={
i:function(a){return"pointLight"+this.a}}
A.bi.prototype={
i:function(a){return"spotLight"+this.a}}
A.hE.prototype={
i:function(a){return this.b1}}
A.ex.prototype={}
A.ey.prototype={}
A.eB.prototype={}
A.eE.prototype={}
A.cy.prototype={
ga_:function(a){var s=this.f
if(s==null)throw H.c(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gM:function(){var s=this.r
if(s==null)throw H.c(P.e(u.C))
return s},
gaf:function(){var s=this.e
if(s==null)throw H.c(P.e(u.F))
return s},
c5:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.kT(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.e('Error compiling shader "'+H.u(q)+'": '+s))}return q},
eT:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.j9(l.getProgramParameter(o.gaf(),35721))
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
m.push(new A.fW(l,q,p))}o.f=new A.fX(m)},
eV:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.j9(j.getProgramParameter(m.gaf(),35718))
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
k.push(m.f8(o,n,q,p))}m.r=new A.iA(k)},
av:function(a,b,c){var s=this.a
if(a===1)return new A.cB(s,b,c)
else return A.jI(s,this.e,b,a,c)},
dN:function(a,b,c){var s=this.a
if(a===1)return new A.eC(s,b,c)
else return A.jI(s,this.e,b,a,c)},
dO:function(a,b,c){var s=this.a
if(a===1)return new A.eD(s,b,c)
else return A.jI(s,this.e,b,a,c)},
aZ:function(a,b){return new P.f1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
f8:function(a,b,c,d){var s=this
switch(a){case 5120:return s.av(b,c,d)
case 5121:return s.av(b,c,d)
case 5122:return s.av(b,c,d)
case 5123:return s.av(b,c,d)
case 5124:return s.av(b,c,d)
case 5125:return s.av(b,c,d)
case 5126:return new A.eu(s.a,c,d)
case 35664:return new A.iw(s.a,c,d)
case 35665:return new A.ev(s.a,c,d)
case 35666:return new A.ew(s.a,c,d)
case 35667:return new A.ix(s.a,c,d)
case 35668:return new A.iy(s.a,c,d)
case 35669:return new A.iz(s.a,c,d)
case 35674:return new A.iB(s.a,c,d)
case 35675:return new A.ez(s.a,c,d)
case 35676:return new A.eA(s.a,c,d)
case 35678:return s.dN(b,c,d)
case 35680:return s.dO(b,c,d)
case 35670:throw H.c(s.aZ("BOOL",c))
case 35671:throw H.c(s.aZ("BOOL_VEC2",c))
case 35672:throw H.c(s.aZ("BOOL_VEC3",c))
case 35673:throw H.c(s.aZ("BOOL_VEC4",c))
default:throw H.c(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.iu.prototype={}
A.iA.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
L:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.w()},
w:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.q)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cB.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.ix.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iy.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iz.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iv.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.eu.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iw.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.ev.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.ew.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.iB.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.ez.prototype={
a4:function(a){var s=new Float32Array(H.cZ(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eA.prototype={
a4:function(a){var s=new Float32Array(H.cZ(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eC.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.eD.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jt.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)},
$S:32}
F.ji.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.k3(l.$1(m),k)
k=J.k3(l.$1(m+3.141592653589793/n.c),k).as(0,j)
s=new V.D(k.a,k.b,k.c).G()
r=$.kz
if(r==null){r=new V.D(1,0,0)
$.kz=r}q=s.ai(!s.p(0,r)?V.kB():r).G()
r=q.ai(s).G()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.P(0,l*k)
k=q.P(0,o*k)
k=j.O(0,new V.T(l.a-k.a,l.b-k.b,l.c-k.c))
if(!J.N(a.f,k)){a.f=k
l=a.a
if(l!=null)l.V()}},
$S:33}
F.aJ.prototype={
aV:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.e("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.eQ(a)
s.eR(b)
s.eS(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gN().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.V()}},
bw:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.K(r.gN().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.V()}}s.eH()
s.eI()
s.eJ()},
eQ:function(a){this.a=a
a.gN().b.push(this)},
eR:function(a){this.b=a
a.gN().c.push(this)},
eS:function(a){this.c=a
a.gN().d.push(this)},
eH:function(){var s=this.a
if(s!=null)C.a.K(s.gN().b,this)
this.a=null},
eI:function(){var s=this.b
if(s!=null)C.a.K(s.gN().c,this)
this.b=null},
eJ:function(){var s=this.c
if(s!=null)C.a.K(s.gN().d,this)
this.c=null},
dH:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cC()
if(n!=null)q=q.O(0,n)
if(s!=null)q=q.O(0,s)
if(r!=null)q=q.O(0,r)
if(q.cN())return p
return q.G()},
dJ:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.as(0,n)
q=new V.D(o.a,o.b,o.c).G()
o=r.as(0,n)
return q.ai(new V.D(o.a,o.b,o.c).G()).G()},
bu:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.dH()
if(s==null){s=q.dJ()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.V()}return!0},
dG:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cC()
if(n!=null)q=q.O(0,n)
if(s!=null)q=q.O(0,s)
if(r!=null)q=q.O(0,r)
if(q.cN())return p
return q.G()},
dI:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.as(0,e)
o=new V.D(j.a,j.b,j.c).G()
if(q.a-r.a<0)o=o.aI(0)}else{n=(j-s.b)/p
j=b.as(0,e).P(0,n).O(0,e).as(0,h)
o=new V.D(j.a,j.b,j.c).G()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aI(0)}m=l.d
if(m!=null){m=m.G()
o=m.ai(o).G().ai(m).G()}return o},
bs:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.dG()
if(s==null){s=q.dI()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.V()}return!0},
gcv:function(a){var s=this
if(J.N(s.a,s.b))return!0
if(J.N(s.b,s.c))return!0
if(J.N(s.c,s.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
F:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gD(p)
p=a+C.b.an(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gD(o)
p=p+C.b.an(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gD(o)
s=p+C.b.an(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.w()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.w()
return s+((p==null?"-":p)+"}")},
w:function(){return this.F("")}}
F.hj.prototype={}
F.id.prototype={
bG:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gD(q)
s=c.a
if(q==(s==null?r:s.gD(s))){q=b.b
q=q==null?r:q.gD(q)
s=c.b
if(q==(s==null?r:s.gD(s))){q=b.c
q=q==null?r:q.gD(q)
s=c.c
q=q==(s==null?r:s.gD(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gD(q)
s=c.b
if(q==(s==null?r:s.gD(s))){q=b.b
q=q==null?r:q.gD(q)
s=c.c
if(q==(s==null?r:s.gD(s))){q=b.c
q=q==null?r:q.gD(q)
s=c.a
q=q==(s==null?r:s.gD(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gD(q)
s=c.c
if(q==(s==null?r:s.gD(s))){q=b.b
q=q==null?r:q.gD(q)
s=c.a
if(q==(s==null?r:s.gD(s))){q=b.c
q=q==null?r:q.gD(q)
s=c.b
q=q==(s==null?r:s.gD(s))}else q=!1
return q}else return!1}}}}
F.hw.prototype={}
F.it.prototype={}
F.i5.prototype={
gX:function(){var s=this.a
return s==null?this.a=new F.J(this,[]):s},
gb6:function(a){var s=this.b
return s==null?this.b=new F.i7([]):s},
gb5:function(a){var s=this.c
return s==null?this.c=new F.i6(this,[]):s},
gN:function(){var s=this.d
return s==null?this.d=new F.e8(this,[]):s},
gv:function(){var s=this.e
return s==null?this.e=D.ag():s},
aA:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gN().aA()||!1
if(!r.gX().aA())s=!1
q=r.e
if(q!=null)q.ap(0)
return s},
fl:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.gX().c.slice(0)
for(;s.length!==0;){r=C.a.gfe(s)
C.a.bJ(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bG(0,r,o)){q.push(o)
C.a.bJ(s,p)}}if(q.length>1)b.fk(q)}n.gX().ay()
n.gb5(n).bK()
n.gN().bK()
n.gb6(n).fE()
n.gb5(n).bL(new F.it())
n.gN().bL(new F.id())
m=n.e
if(m!=null)m.ap(0)},
f2:function(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gX().c.length,c=a0.a,b=(c&$.aZ().a)!==0?1:0
if((c&$.aY().a)!==0)++b
if((c&$.aX().a)!==0)++b
if((c&$.br().a)!==0)++b
if((c&$.bs().a)!==0)++b
if((c&$.d6().a)!==0)++b
if((c&$.d7().a)!==0)++b
if((c&$.bV().a)!==0)++b
if((c&$.aW().a)!==0)++b
s=a0.gbS(a0)
r=P.dG(d*s,0,!1)
e.a=0
q=P.lW(b,new F.i8(e,h,a0,s*4,d,s,r))
c=a.a
p=c.createBuffer()
p.toString
c.bindBuffer(f,p)
c.bufferData(f,new Float32Array(H.cZ(r)),35044)
c.bindBuffer(f,g)
o=new Z.bY(new Z.eM(f,p),[],q,a0)
h.gb6(h)
h.gb5(h)
if(h.gN().b.length!==0){n=[]
m=0
while(!0){p=h.d
if(p==null){p=h.d=new F.e8(h,[])
l=p}else l=p
if(!(m<p.b.length))break
p=l.b
if(m>=p.length)return H.d(p,m)
k=p[m]
p=k.a
if(p==null)p=g
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.J(l,[]):j).ay()}p=p.e}n.push(p==null?0:p)
p=k.b
if(p==null)p=g
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.J(l,[]):j).ay()}p=p.e}n.push(p==null?0:p)
p=k.c
if(p==null)p=g
else{l=p.a
if(l!=null){j=l.a;(j==null?l.a=new F.J(l,[]):j).ay()}p=p.e}n.push(p==null?0:p);++m}i=Z.mk(c,34963,n)
o.b.push(new Z.hr(4,n.length,i))}return o},
i:function(a){var s=this,r=[]
if(s.gX().c.length!==0){r.push("Vertices:")
r.push(s.gX().F("   "))}s.gb6(s)
s.gb5(s)
if(s.gN().b.length!==0){r.push("Faces:")
r.push(s.gN().F("   "))}return C.a.k(r,"\n")},
V:function(){var s=this.e
return s==null?null:s.S(null)}}
F.i8.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.f0(a),f=g.gbS(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.J(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].fj(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.bX(g,f,d*4,h.d)},
$S:46}
F.e8.prototype={
eZ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.J(s,[]):l).t(0,k)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,j)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,h)
f=new F.aJ()
f.aV(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,k)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,h)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,g)
f=new F.aJ()
f.aV(k,h,g)
e.push(f)}else{(l==null?s.a=new F.J(s,[]):l).t(0,j)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,h)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,g)
f=new F.aJ()
f.aV(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,j)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,g)
l=s.a;(l==null?s.a=new F.J(s,[]):l).t(0,k)
f=new F.aJ()
f.aV(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gl:function(a){return this.b.length},
bL:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gX().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.J(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bK([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bK([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.bG(0,n,(q==null?p.d=new F.bK([],[],[]):q).h(0,l))){n.bw()
break}}}}},
bK:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.gcv(q))q.bw()}},
aA:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].bu())q=!1
return q},
bt:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.q)(s),++p)if(!s[p].bs())q=!1
return q},
i:function(a){return this.w()},
F:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].F(a))
return C.a.k(p,"\n")},
w:function(){return this.F("")}}
F.i6.prototype={
gl:function(a){return 0},
bL:function(a){var s,r,q,p,o
for(s=this.a,r=s.gX().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.J(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
if(p.c==null)p.c=new F.eK([],[])
o=-1
for(;!1;--o){q=p.c;(q==null?p.c=new F.eK([],[]):q).h(0,o)}}},
bK:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r]
if(q.gcv(q))q.bw()}},
i:function(a){return this.w()},
F:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r){if(r>=0)return H.d(s,r)
q.push(s[r].F(a+(""+r+". ")))}return C.a.k(q,"\n")},
w:function(){return this.F("")}}
F.i7.prototype={
gl:function(a){return 0},
fE:function(){var s,r,q
for(s=this.b,r=-1;!1;--r){return H.d(s,r)
q=s[r].ghe()
q=q.gb6(q)
q.gl(q)}},
i:function(a){return this.w()},
F:function(a){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].F(a))
return C.a.k(q,"\n")},
w:function(){return this.F("")}}
F.cD.prototype={
cw:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.kC(s.cx,p,m,r,q,o,n,a,l)},
gN:function(){var s=this.d
return s==null?this.d=new F.bK([],[],[]):s},
gD:function(a){var s=this.a
if(s!=null)s.gX().ay()
return this.e},
fj:function(a){var s,r,q,p,o=this,n=null
if(a.p(0,$.aZ())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.p(0,$.aY())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.p(0,$.aX())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.p(0,$.br())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.p(0,$.bs())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.p(0,$.d6())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.p(0,$.d7())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.p(0,$.bV()))return[o.ch]
else if(a.p(0,$.aW()))return[-1,-1,-1,-1]
else return[]},
bu:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cC()
p.gN().C(0,new F.iO(o))
p.r=o.a.G()
if(r){s.V()
o=s.e
if(o!=null)o.ap(0)}return!0},
bs:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cC()
p.gN().C(0,new F.iN(o))
p.x=o.a.G()
if(r){s.V()
o=s.e
if(o!=null)o.ap(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.w()},
F:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.an(C.c.i(q.e),0))
s=q.f
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.r
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.x
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.y
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.z
s=s==null?p:s.w()
n.push(s==null?o:s)
s=q.Q
s=s==null?p:s.w()
n.push(s==null?o:s)
n.push(V.x(q.ch,3,0))
n.push(o)
r=C.a.k(n,", ")
return a+"{"+r+"}"},
w:function(){return this.F("")}}
F.iO.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.O(0,r)}},
$S:7}
F.iN.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.O(0,r)}},
$S:7}
F.J.prototype={
ay:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
t:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.e("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.V()
return!0},
cm:function(a,b){var s=null,r=F.kC(s,s,a,s,s,b,s,s,0)
this.t(0,r)
return r},
gl:function(a){return this.c.length},
aA:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].bu()
return!0},
bt:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)s[q].bs()
return!0},
f3:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.G()
if(!J.N(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.S(null)}}}}}return!0},
i:function(a){return this.w()},
F:function(a){var s,r,q,p
this.ay()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.q)(r),++p)s.push(r[p].F(a))
return C.a.k(s,"\n")},
w:function(){return this.F("")}}
F.bK.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
C:function(a,b){var s=this
C.a.C(s.b,b)
C.a.C(s.c,new F.iI(s,b))
C.a.C(s.d,new F.iJ(s,b))},
i:function(a){return this.w()},
w:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].F(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].F(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.q)(s),++q)p.push(s[q].F(""))
return C.a.k(p,"\n")}}
F.iI.prototype={
$1:function(a){if(!J.N(a.a,this.a))this.b.$1(a)},
$S:7}
F.iJ.prototype={
$1:function(a){var s=this.a
if(!J.N(a.a,s)&&!J.N(a.b,s))this.b.$1(a)},
$S:7}
F.eK.prototype={
gl:function(a){return 0},
h:function(a,b){var s,r
if(b>=0){s=this.c
r=b-0
if(r>=0)return H.d(s,r)
return s[r]}else{s=this.b
return H.d(s,b)
return s[b]}},
i:function(a){return this.w()},
w:function(){var s,r,q=[]
for(s=this.b,r=0;!1;++r)q.push(s[r].F(""))
for(s=this.c,r=0;!1;++r)q.push(s[r].F(""))
return C.a.k(q,"\n")}}
F.iL.prototype={}
F.iK.prototype={
bG:function(a,b,c){return J.N(b.f,c.f)}}
F.iM.prototype={}
F.hX.prototype={
fk:function(a){var s,r,q,p,o,n=V.cC()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.D(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.G()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.q)(a),++r){p=a[r]
q=n.G()
if(!J.N(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.S(null)}}}return null}}
O.dH.prototype={
gv:function(){var s=this.fr
return s==null?this.fr=D.ag():s},
Y:function(a){var s=this.fr
return s==null?null:s.S(a)},
dw:function(){return this.Y(null)},
cb:function(a){this.a=null
this.Y(a)},
eM:function(){return this.cb(null)},
dX:function(a,b){return this.Y(new D.b8())},
dZ:function(a,b){return this.Y(new D.b9())},
gcQ:function(){var s=this,r=s.dx
if(r==null){r=new D.cd([],[],[],[],[])
r.bQ(r.gdU(),r.gev(),r.gex())
r.gv().t(0,s.gca())
r.gcP().t(0,s.gbY())
s.dx=r}return r},
gco:function(){var s=this.r
return s==null?this.r=O.dK(this,"ambient"):s},
gcz:function(){var s=this.x
return s==null?this.x=O.dK(this,"diffuse"):s},
gbc:function(){var s=this.z
return s==null?this.z=new O.hH(new V.O(0,0,0),this,"specular",new A.af(!1,!1,!1)):s},
c3:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.P(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaa()
o=a1.h(0,q.gaa())
a1.m(0,p,o==null?1:o)}n=[]
a1.C(0,new O.hI(b,n))
C.a.aK(n,new O.hJ())
m=new H.P(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=[]
m.C(0,new O.hK(b,l))
C.a.aK(l,new O.hL())
k=new H.P(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.q)(a2),++r){q=a2[r]
p=q.gaa()
o=k.h(0,q.gaa())
k.m(0,p,o==null?1:o)}j=[]
k.C(0,new O.hM(b,j))
C.a.aK(j,new O.hN())
i=new H.P(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.q)(a0),++r){q=a0[r]
s=q.gaa()
p=i.h(0,q.gaa())
i.m(0,s,p==null?1:p)}h=[]
i.C(0,new O.hO(b,h))
C.a.aK(h,new O.hP())
a0=C.c.T(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hF(new V.b4(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.dK(b,"emission"):a2).c
s=b.gco().c
p=b.gcz().c
o=b.y
o=(o==null?b.y=O.dK(b,"invDiffuse"):o).c
g=b.gbc().c
f=b.Q
f=(f==null?b.Q=new O.hD(b,"bump",new A.af(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.dK(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hG(new V.O(0,0,0),b,"refract",new A.af(!1,!1,!1)):d).c
c=b.db
return A.lY(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hC(b,"alpha",new A.af(!1,!1,!1)):c).c,n,l,j,h)},
dF:function(a,b){},
b9:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.al(m==null?[]:m)
s=H.U(m).c
for(;m.q();){r=s.a(m.d)
q=$.iH
if(q==null)q=$.iH=new V.D(0,0,1)
r.c=q
p=$.iG
r.d=p==null?$.iG=new V.D(0,1,0):p
p=$.iF
r.e=p==null?$.iF=new V.D(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.b8(q).G()
r.d=n.b8(r.d).G()
r.e=n.b8(r.e).G()}}},
fG:function(b0,b1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a
if(a9==null){s=a7.c3()
r=s.b1
q=b0.fr
a9=q.h(0,r)
if(a9==null){p=b0.a
o=t.S
n=t.W
a9=new A.dI(s,[],P.M(o,n),P.M(o,t.q),P.M(o,n),P.M(o,t.L),P.M(o,n),P.M(o,t.U),P.M(o,n),P.M(o,t.R),p,r)
a9.dm(s,p)
if(r.length===0)H.f(P.e("May not cache a shader with no name."))
if(q.f5(0,r))H.f(P.e('Shader cache already contains a shader by the name "'+r+'".'))
q.m(0,r,a9)}a9=a7.a=a9
b1.e=null}m=a9.x
l=m.cB
s=b1.e
if(!(s instanceof Z.bY))s=b1.e=null
if(s==null||!s.d.p(0,l)){s=m.k4
if(s){r=b1.d
if(r!=null)r.aA()}r=m.r1
if(r){q=b1.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gN().bt()
q.gX().bt()
q=q.e
if(q!=null)q.ap(0)}}q=m.rx
if(q){p=b1.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gX().f3()
p=p.e
if(p!=null)p.ap(0)}}p=b1.d
k=p==null?a8:p.f2(new Z.iP(b0.a),l)
if(k==null)return
p=k.aD($.aZ())
if(p!=null){o=a9.y
o=o==null?a8:o.c
p.e=o==null?0:o}if(s){s=k.aD($.aY())
if(s!=null){p=a9.Q
p=p==null?a8:p.c
s.e=p==null?1:p}}if(r){s=k.aD($.aX())
if(s!=null){r=a9.z
r=r==null?a8:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aD($.br())
if(s!=null){r=a9.ch
r=r==null?a8:r.c
s.e=r==null?3:r}}if(q){s=k.aD($.bs())
if(s!=null){r=a9.cx
r=r==null?a8:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aD($.aW())
if(s!=null){r=a9.cy
r=r==null?a8:r.c
s.e=r==null?5:r}}b1.e=k}j=[]
s=b0.a
s.useProgram(a9.e)
a9.ga_(a9).fc()
if(m.fr){r=b0.dx
r=r.gR(r)
q=a9.db
if(q!=null)q.a4(r.W(0,!0))}if(m.fx){r=b0.cx
if(r==null){r=b0.db
q=b0.dx
q=b0.cx=r.gR(r).P(0,q.gR(q))
r=q}q=a9.dx
if(q!=null)q.a4(r.W(0,!0))}r=b0.ch
if(r==null){r=b0.dx
r=b0.ch=b0.gfC().P(0,r.gR(r))}q=a9.fr
if(q!=null)q.a4(r.W(0,!0))
if(m.go){r=b0.db
r=r.gR(r)
q=a9.dy
if(q!=null)q.a4(r.W(0,!0))}if(m.x1){r=$.ki
if(r==null){r=new V.cl(1,0,0,0,1,0,0,0,1)
$.ki=r}q=a9.go
if(q!=null)q.a4(r.W(0,!0))}if(m.x2){r=V.cn()
q=a9.id
if(q!=null)q.a4(r.W(0,!0))}if(m.y1){r=V.cn()
q=a9.k1
if(q!=null)q.a4(r.W(0,!0))}if(m.aC>0){r=a7.e.a
i=r.length
q=a9.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=a9.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cZ(q.W(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}if(m.a.a){r=a7.f
r=r==null?a8:r.f
if(r==null)r=new V.O(0,0,0)
q=a9.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.k1){if(m.b.a){r=a7.r
r=r==null?a8:r.f
if(r==null)r=new V.O(0,0,0)
q=a9.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.c.a){r=a7.x
r=r==null?a8:r.f
if(r==null)r=new V.O(0,0,0)
q=a9.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(m.d.a){r=a7.y
r=r==null?a8:r.f
if(r==null)r=new V.O(0,0,0)
q=a9.aC
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.e.a
if(!r)q=!1
else q=!0
if(q){q=a7.z
q=q==null?a8:q.ch
if(q==null)q=100
p=a9.cD
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.z
r=r==null?a8:r.f
if(r==null)r=new V.O(1,1,1)
q=a9.cC
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.z
if(r.length>0){f=new H.P(t.y)
q=a7.dx
q=q==null?a8:q.e
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaa()
b=f.h(0,c)
if(b==null)b=0
f.m(0,c,b+1)
o=a9.by.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=d.gfS()
n=$.aw
o=o.aS(n==null?$.aw=new V.T(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gfX()
n=$.aw
o=o.aS(n==null?$.aw=new V.T(0,0,0):n)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaB(d)
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
if(d.gcA()){o=d.gcq()
n=a.e
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcr()
n=a.f
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcs()
n=a.r
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=a9.bx.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b0.db
a0=q.gR(q)
a1=new H.P(t.y)
q=a7.dx
q=q==null?a8:q.f
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
b=a1.h(0,0)
if(b==null)b=0
a1.m(0,0,b+1)
o=a9.bA.h(0,0)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=a0.b8(d.c).G()
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.b
n=a.f
n.a.uniform3f(n.d,o.a,o.b,o.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a1.h(0,p)
if(i==null)i=0
p=a9.bz.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b0.db
a0=q.gR(q)
a2=new H.P(t.y)
q=a7.dx
q=q==null?a8:q.r
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaa()
b=a2.h(0,c)
if(b==null)b=0
a2.m(0,c,b+1)
o=a9.bC.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
a3=a0.P(0,d.gR(d))
o=d.gR(d)
n=$.aw
o=o.aS(n==null?$.aw=new V.T(0,0,0):n)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=$.aw
o=a3.aS(o==null?$.aw=new V.T(0,0,0):o)
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaB(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gaq()
o=a3.cL(0)
n=a.d
if(n!=null){g=new Float32Array(H.cZ(new V.cl(o.a,o.b,o.c,o.e,o.f,o.r,o.y,o.z,o.Q).W(0,!0)))
n.a.uniformMatrix3fv(n.d,!1,g)}d.gaq()
o=d.gaq()
if(!C.a.u(j,o)){o.sD(0,j.length)
j.push(o)}o=d.gaq()
n=o.gaj(o)
if(n){n=a.f
if(n!=null){a4=o.gaj(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gD(o))}}d.gaJ()
o=d.gde()
n=a.x
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaJ()
if(!C.a.u(j,o)){o.sD(0,j.length)
j.push(o)}o=d.gaJ()
n=o.gaj(o)
if(n){n=a.r
if(n!=null){a4=o.gaj(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gD(o))}}if(d.gcA()){o=d.gcq()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcr()
n=a.z
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcs()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=a9.bB.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b0.db
a0=q.gR(q)
a6=new H.P(t.y)
q=a7.dx
q=q==null?a8:q.x
if(q==null)q=[]
p=q.length
e=0
for(;e<q.length;q.length===p||(0,H.q)(q),++e){d=q[e]
c=d.gaa()
b=a6.h(0,c)
if(b==null)b=0
a6.m(0,c,b+1)
o=a9.bE.h(0,c)
if(o==null)o=[]
if(b>>>0!==b||b>=o.length)return H.d(o,b)
a=o[b]
o=d.gfB(d)
n=a.b
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gfV(d).G()
n=a.c
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=a0.aS(d.gfB(d))
n=a.d
n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gaB(d)
n=a.e
n.a.uniform3f(n.d,o.a,o.b,o.c)
d.gaq()
o=d.ghd()
n=a.f
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.gha(d)
n=a.r
if(n!=null)n.a.uniform3f(n.d,o.a,o.b,o.c)
o=d.ghb()
n=a.x
if(n!=null)n.a.uniform1f(n.d,o)
o=d.ghc()
n=a.y
if(n!=null)n.a.uniform1f(n.d,o)
d.gaq()
o=d.gaq()
if(!C.a.u(j,o)){o.sD(0,j.length)
j.push(o)}o=d.gaq()
n=o.gaj(o)
if(n){n=a.dx
if(n!=null){a4=o.gaj(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gD(o))}}d.gaJ()
o=d.gde()
n=a.z
if(n!=null)n.a.uniform4f(n.d,o.a,o.b,o.c,o.d)
o=d.gaJ()
if(!C.a.u(j,o)){o.sD(0,j.length)
j.push(o)}o=d.gaJ()
n=o.gaj(o)
if(n){n=a.dy
if(n!=null){a4=o.gaj(o)
a5=n.a
n=n.d
if(!a4)a5.uniform1i(n,0)
else a5.uniform1i(n,o.gD(o))}}if(d.gfW()){o=d.gfU()
n=a.Q
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gfT()
n=a.ch
if(n!=null)n.a.uniform1f(n.d,o)}if(d.gcA()){o=d.gcq()
n=a.cx
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcr()
n=a.cy
if(n!=null)n.a.uniform1f(n.d,o)
o=d.gcs()
n=a.db
if(n!=null)n.a.uniform1f(n.d,o)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.q)(r),++e){p=r[e].a
i=a6.h(0,p)
if(i==null)i=0
p=a9.bD.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.dy){r=b0.Q
if(r==null){r=b0.db
r=b0.Q=r.gR(r).cL(0)}q=a9.fy
if(q!=null)q.a4(r.W(0,!0))}if(m.db){a7.dF(j,a8)
a9.eP(a9.cE,a8)
if(m.r.a){r=a7.cx
r=r==null?a8:r.f
if(r==null)r=new V.O(1,1,1)
q=a9.cF
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}r=m.x.a
if(!r)q=!1
else q=!0
if(q){q=a7.cy
q=q==null?a8:q.ch
if(q==null)q=0
p=a9.cG
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a7.cy
r=r==null?a8:r.f
if(r==null)r=new V.O(1,1,1)
q=a9.cH
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}}r=m.y.a
q=!r
if(q)p=!1
else p=!0
if(p){if(r){r=a7.db
r=r==null?a8:r.f
if(r==null)r=1
p=a9.cI
if(p!=null)p.a.uniform1f(p.d,r)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h)j[h].b_(b0)
r=t.D.a(b1.e)
r.b_(b0)
r.aG(b0)
r.d6(b0)
if(q)r=!1
else r=!0
if(r)s.disable(3042)
for(h=0;h<j.length;++h)j[h].d6(b0)
s.useProgram(a8)
a9.ga_(a9).fb()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.c3().b1}}
O.hI.prototype={
$2:function(a,b){return this.b.push(new A.b0(a,C.c.T(b+3,4)*4))},
$S:8}
O.hJ.prototype={
$2:function(a,b){return C.c.a0(a.a,b.a)},
$S:38}
O.hK.prototype={
$2:function(a,b){return this.b.push(new A.b5(a,C.c.T(b+3,4)*4))},
$S:8}
O.hL.prototype={
$2:function(a,b){return C.c.a0(a.a,b.a)},
$S:39}
O.hM.prototype={
$2:function(a,b){return this.b.push(new A.bh(a,C.c.T(b+3,4)*4))},
$S:8}
O.hN.prototype={
$2:function(a,b){return C.c.a0(a.a,b.a)},
$S:40}
O.hO.prototype={
$2:function(a,b){return this.b.push(new A.bi(a,C.c.T(b+3,4)*4))},
$S:8}
O.hP.prototype={
$2:function(a,b){return C.c.a0(a.a,b.a)},
$S:41}
O.hC.prototype={
ag:function(){var s,r=this
r.bT()
s=r.f
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.Y(new D.F(r.b,s,1))}}}
O.dJ.prototype={
ag:function(){},
ce:function(a){var s,r,q=this
if(!q.c.p(0,a)){if(!q.c.a)s=!1
else s=!0
if(s){if(!a.a)s=!1
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.ag()
s=q.a
s.a=null
s.Y(null)}}}
O.hD.prototype={}
O.ck.prototype={
cd:function(a){var s,r=this
if(!r.f.p(0,a)){s=r.f
r.f=a
r.a.Y(new D.F(r.b+".color",s,a))}},
ag:function(){this.bT()
this.cd(new V.O(1,1,1))},
saB:function(a,b){this.ce(new A.af(!0,!1,!1))
this.cd(b)}}
O.hF.prototype={}
O.hG.prototype={
ag:function(){var s,r=this
r.bU()
s=r.ch
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.Y(new D.F(r.b+".refraction",s,1))}}}
O.hH.prototype={
cf:function(a){var s=this,r=s.ch
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.Y(new D.F(s.b+".shininess",r,a))}},
ag:function(){this.bU()
this.cf(100)}}
O.ih.prototype={}
X.hn.prototype={
gv:function(){var s=this.x
return s==null?this.x=D.ag():s}}
X.dY.prototype={
gv:function(){var s=this.f
return s==null?this.f=D.ag():s},
au:function(a){var s=this.f
return s==null?null:s.S(a)},
dB:function(){return this.au(null)},
saP:function(a){var s,r,q=this
if(!J.N(q.b,a)){s=q.b
if(s!=null)s.gv().K(0,q.gbZ())
r=q.b
q.b=a
if(a!=null)a.gv().t(0,q.gbZ())
q.au(new D.F("mover",r,q.b))}}}
X.ig.prototype={}
V.an.prototype={
aU:function(a){this.b=new P.hp(C.K)
this.c=null
this.d=[]},
E:function(a,b){var s,r,q,p,o,n,m,l=this,k=l.d
if(k.length===0)k.push([])
s=a.split("\n")
for(k=s.length,r=!0,q=0;q<k;++q){p=s[q]
if(r)r=!1
else l.d.push([])
o=document.createElement("div")
o.className="codePart"
n=l.b.dM(p,0,p.length)
m=n==null?p:n
m=H.k0(m," ","&nbsp;")
C.I.dd(o,m)
m=o.style
m.color=b
C.a.gb4(l.d).push(o)}},
cX:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.k(b,"\n")
r=p.c
if(r==null)r=p.c=p.b0()
if(r!=null)for(q=new H.o(s),q=new P.bo(r.bN(new H.aM(q,q.gl(q))).a());q.q();)p.b7(q.gA(q))}}
V.js.prototype={
$1:function(a){var s=C.d.bM(this.a.gfg(),2)
if(s!=="0.00")P.k_(s+" fps")},
$S:42}
V.dk.prototype={
b7:function(a){var s=this
switch(a.a){case"Class":s.E(a.b,"#551")
break
case"Comment":s.E(a.b,"#777")
break
case"Id":s.E(a.b,"#111")
break
case"Num":s.E(a.b,"#191")
break
case"Reserved":s.E(a.b,"#119")
break
case"String":s.E(a.b,"#171")
break
case"Symbol":s.E(a.b,"#616")
break
case"Type":s.E(a.b,"#B11")
break
case"Whitespace":s.E(a.b,"#111")
break}},
b0:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.im()
a2.d=a2.j(0,q)
s=a2.j(0,q).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.I("a","z"))
s.push(K.I("A","Z"))
s=a2.j(0,p).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.I("0","9"))
s.push(K.I("a","z"))
s.push(K.I("A","Z"))
a2.j(0,q).k(0,o).a.push(K.I("0","9"))
a2.j(0,o).k(0,o).a.push(K.I("0","9"))
s=a2.j(0,o).k(0,n)
r=new K.p([])
r.n(new H.o("."))
s.a.push(r)
a2.j(0,n).k(0,m).a.push(K.I("0","9"))
a2.j(0,m).k(0,m).a.push(K.I("0","9"))
r=a2.j(0,q).k(0,l)
s=new K.p([])
s.n(new H.o(k))
r.a.push(s)
s=a2.j(0,l).k(0,l)
r=new K.p([])
r.n(new H.o(k))
s.a.push(r)
r=a2.j(0,q).k(0,j)
s=new K.p([])
s.n(new H.o('"'))
r.a.push(s)
s=a2.j(0,j).k(0,i)
r=new K.p([])
r.n(new H.o('"'))
s.a.push(r)
r=a2.j(0,j).k(0,h)
s=new K.p([])
s.n(new H.o("\\"))
r.a.push(s)
s=a2.j(0,h).k(0,j)
r=new K.p([])
r.n(new H.o('"'))
s.a.push(r)
a2.j(0,j).k(0,j).a.push(new K.aG())
r=a2.j(0,q).k(0,g)
s=new K.p([])
s.n(new H.o("'"))
r.a.push(s)
s=a2.j(0,g).k(0,f)
r=new K.p([])
r.n(new H.o("'"))
s.a.push(r)
r=a2.j(0,g).k(0,e)
s=new K.p([])
s.n(new H.o("\\"))
r.a.push(s)
s=a2.j(0,e).k(0,g)
r=new K.p([])
r.n(new H.o("'"))
s.a.push(r)
a2.j(0,g).k(0,g).a.push(new K.aG())
r=a2.j(0,q).k(0,d)
s=new K.p([])
s.n(new H.o("/"))
r.a.push(s)
s=a2.j(0,d).k(0,c)
r=new K.p([])
r.n(new H.o("/"))
s.a.push(r)
r=a2.j(0,c).k(0,b)
s=new K.p([])
s.n(new H.o("\n"))
r.a.push(s)
s=[]
a2.j(0,c).k(0,c).a.push(new K.a1(s))
r=new K.p([])
r.n(new H.o("\n"))
s.push(r)
r=a2.j(0,d).k(0,a)
s=new K.p([])
s.n(new H.o("*"))
r.a.push(s)
s=a2.j(0,a).k(0,a0)
r=new K.p([])
r.n(new H.o("*"))
s.a.push(r)
r=[]
a2.j(0,a0).k(0,a).a.push(new K.a1(r))
s=new K.p([])
s.n(new H.o("*"))
r.push(s)
s=a2.j(0,a0).k(0,b)
r=new K.p([])
r.n(new H.o("/"))
s.a.push(r)
r=a2.j(0,q).k(0,a1)
s=new K.p([])
s.n(new H.o(" \n\t"))
r.a.push(s)
s=a2.j(0,a1).k(0,a1)
r=new K.p([])
r.n(new H.o(" \n\t"))
s.a.push(r)
r=a2.j(0,o)
r.d=r.a.H("Num")
r=a2.j(0,m)
r.d=r.a.H("Num")
r=a2.j(0,l)
r.d=r.a.H("Symbol")
r=a2.j(0,i)
r.d=r.a.H("String")
r=a2.j(0,f)
r.d=r.a.H("String")
r=a2.j(0,b)
r.d=r.a.H(c)
r=a2.j(0,a1)
r.d=r.a.H(a1)
r=a2.j(0,p)
r=r.d=r.a.H(p)
r.ao(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.ao(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.ao(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dt.prototype={
b7:function(a){var s=this
switch(a.a){case"Builtin":s.E(a.b,"#411")
break
case"Comment":s.E(a.b,"#777")
break
case"Id":s.E(a.b,"#111")
break
case"Num":s.E(a.b,"#191")
break
case"Preprocess":s.E(a.b,"#737")
break
case"Reserved":s.E(a.b,"#119")
break
case"Symbol":s.E(a.b,"#611")
break
case"Type":s.E(a.b,"#171")
break
case"Whitespace":s.E(a.b,"#111")
break}},
b0:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.im()
d.d=d.j(0,q)
s=d.j(0,q).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.I("a","z"))
s.push(K.I("A","Z"))
s=d.j(0,p).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.I("0","9"))
s.push(K.I("a","z"))
s.push(K.I("A","Z"))
d.j(0,q).k(0,o).a.push(K.I("0","9"))
d.j(0,o).k(0,o).a.push(K.I("0","9"))
s=d.j(0,o).k(0,n)
r=new K.p([])
r.n(new H.o("."))
s.a.push(r)
d.j(0,n).k(0,m).a.push(K.I("0","9"))
d.j(0,m).k(0,m).a.push(K.I("0","9"))
r=d.j(0,q).k(0,l)
s=new K.p([])
s.n(new H.o(k))
r.a.push(s)
s=d.j(0,l).k(0,l)
r=new K.p([])
r.n(new H.o(k))
s.a.push(r)
r=d.j(0,q).k(0,j)
s=new K.p([])
s.n(new H.o("/"))
r.a.push(s)
s=d.j(0,j).k(0,i)
r=new K.p([])
r.n(new H.o("/"))
s.a.push(r)
d.j(0,j).k(0,l).a.push(new K.aG())
r=d.j(0,i).k(0,h)
s=new K.p([])
s.n(new H.o("\n"))
r.a.push(s)
s=[]
d.j(0,i).k(0,i).a.push(new K.a1(s))
r=new K.p([])
r.n(new H.o("\n"))
s.push(r)
r=d.j(0,q).k(0,g)
s=new K.p([])
s.n(new H.o("#"))
r.a.push(s)
s=[]
d.j(0,g).k(0,g).a.push(new K.a1(s))
r=new K.p([])
r.n(new H.o("\n"))
s.push(r)
r=d.j(0,g).k(0,f)
s=new K.p([])
s.n(new H.o("\n"))
r.a.push(s)
s=d.j(0,q).k(0,e)
r=new K.p([])
r.n(new H.o(" \n\t"))
s.a.push(r)
r=d.j(0,e).k(0,e)
s=new K.p([])
s.n(new H.o(" \n\t"))
r.a.push(s)
s=d.j(0,o)
s.d=s.a.H("Num")
s=d.j(0,m)
s.d=s.a.H("Num")
s=d.j(0,l)
s.d=s.a.H("Symbol")
s=d.j(0,h)
s.d=s.a.H(i)
s=d.j(0,f)
s.d=s.a.H(g)
s=d.j(0,e)
s.d=s.a.H(e)
s=d.j(0,p)
s=s.d=s.a.H(p)
s.ao(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.ao(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.ao(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dv.prototype={
b7:function(a){var s=this,r="#111"
switch(a.a){case"Attr":s.E(a.b,"#911")
s.E("=",r)
break
case"Id":s.E(a.b,r)
break
case"Other":s.E(a.b,r)
break
case"Reserved":s.E(a.b,"#119")
break
case"String":s.E(a.b,"#171")
break
case"Symbol":s.E(a.b,"#616")
break}},
b0:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.im()
j.d=j.j(0,q)
s=j.j(0,q).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.I("a","z"))
s.push(K.I("A","Z"))
s=j.j(0,p).k(0,p)
r=new K.p([])
r.n(new H.o("_"))
s=s.a
s.push(r)
s.push(K.I("0","9"))
s.push(K.I("a","z"))
s.push(K.I("A","Z"))
s=j.j(0,p).k(0,o)
r=new K.p([])
r.n(new H.o("="))
s.a.push(r)
s.c=!0
s=j.j(0,q).k(0,n)
r=new K.p([])
r.n(new H.o("</\\-!>="))
s.a.push(r)
r=j.j(0,n).k(0,n)
s=new K.p([])
s.n(new H.o("</\\-!>="))
r.a.push(s)
s=j.j(0,q).k(0,m)
r=new K.p([])
r.n(new H.o('"'))
s.a.push(r)
r=j.j(0,m).k(0,l)
s=new K.p([])
s.n(new H.o('"'))
r.a.push(s)
s=j.j(0,m).k(0,"EscStr")
r=new K.p([])
r.n(new H.o("\\"))
s.a.push(r)
r=j.j(0,"EscStr").k(0,m)
s=new K.p([])
s.n(new H.o('"'))
r.a.push(s)
j.j(0,m).k(0,m).a.push(new K.aG())
j.j(0,q).k(0,k).a.push(new K.aG())
s=[]
j.j(0,k).k(0,k).a.push(new K.a1(s))
r=new K.p([])
r.n(new H.o('</\\-!>=_"'))
s.push(r)
s.push(K.I("a","z"))
s.push(K.I("A","Z"))
s=j.j(0,n)
s.d=s.a.H("Symbol")
s=j.j(0,l)
s.d=s.a.H("String")
s=j.j(0,p)
r=s.a.H(p)
s.d=r
r.ao(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.j(0,o)
r.d=r.a.H(o)
r=j.j(0,k)
r.d=r.a.H(k)
return j}}
V.e_.prototype={
cX:function(a,b){this.d=[]
this.E(C.a.k(b,"\n"),"#111")},
b7:function(a){},
b0:function(){return null}}
V.i9.prototype={
cn:function(a){var s,r,q,p,o,n,m=this.eU(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.o(C.a.fi(a)),s=new P.bo(m.bN(new H.aM(s,s.gl(s))).a());s.q();){r=s.gA(s)
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
if(H.l9(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kQ(C.p,r,C.f,!1)
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
d9:function(a){var s,r,q,p=new V.dk("dart",[])
p.aU("dart")
s=new V.dt("glsl",[])
s.aU("glsl")
r=new V.dv("html",[])
r.aU("html")
q=C.a.ff([p,s,r],new V.ic(a))
if(q!=null)return q
p=new V.e_("plain",[])
p.aU("plain")
return p},
cl:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.bd(q,"+")){b2[r]=C.b.ab(q,1)
a8.push(1)
s=!0}else if(C.b.bd(q,"-")){b2[r]=C.b.ab(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.d9(b0)
p.cX(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.kQ(C.p,a9,C.f,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.k5()
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
if(r>=a8.length)return H.d(a8,r)
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.q)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.q)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gJ(q);a4.q();)b.appendChild(a4.gA(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
eU:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.im()
h.d=h.j(0,q)
s=h.j(0,q).k(0,p)
r=new K.p([])
r.n(new H.o("*"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,p).k(0,p).a.push(new K.a1(s))
r=new K.p([])
r.n(new H.o("*"))
s.push(r)
r=h.j(0,p).k(0,"BoldEnd")
s=new K.p([])
s.n(new H.o("*"))
r.a.push(s)
r.c=!0
r=h.j(0,q).k(0,o)
s=new K.p([])
s.n(new H.o("_"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,o).k(0,o).a.push(new K.a1(r))
s=new K.p([])
s.n(new H.o("_"))
r.push(s)
s=h.j(0,o).k(0,n)
r=new K.p([])
r.n(new H.o("_"))
s.a.push(r)
s.c=!0
s=h.j(0,q).k(0,m)
r=new K.p([])
r.n(new H.o("`"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,m).k(0,m).a.push(new K.a1(s))
r=new K.p([])
r.n(new H.o("`"))
s.push(r)
r=h.j(0,m).k(0,"CodeEnd")
s=new K.p([])
s.n(new H.o("`"))
r.a.push(s)
r.c=!0
r=h.j(0,q).k(0,l)
s=new K.p([])
s.n(new H.o("["))
r.a.push(s)
r.c=!0
r=h.j(0,l).k(0,k)
s=new K.p([])
s.n(new H.o("|"))
r.a.push(s)
s=h.j(0,l).k(0,j)
r=new K.p([])
r.n(new H.o("]"))
s.a.push(r)
s.c=!0
s=[]
h.j(0,l).k(0,l).a.push(new K.a1(s))
r=new K.p([])
r.n(new H.o("|]"))
s.push(r)
r=h.j(0,k).k(0,j)
s=new K.p([])
s.n(new H.o("]"))
r.a.push(s)
r.c=!0
r=[]
h.j(0,k).k(0,k).a.push(new K.a1(r))
s=new K.p([])
s.n(new H.o("|]"))
r.push(s)
h.j(0,q).k(0,i).a.push(new K.aG())
s=[]
h.j(0,i).k(0,i).a.push(new K.a1(s))
r=new K.p([])
r.n(new H.o("*_`["))
s.push(r)
r=h.j(0,"BoldEnd")
r.d=r.a.H(p)
r=h.j(0,n)
r.d=r.a.H(o)
r=h.j(0,"CodeEnd")
r.d=r.a.H(m)
r=h.j(0,j)
r.d=r.a.H("Link")
r=h.j(0,i)
r.d=r.a.H(i)
return this.b=h}}
V.ib.prototype={
$1:function(a){P.ku(C.h,new V.ia(this.a))},
$S:3}
V.ia.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.a5(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.u(-0.01*s)+"px"
q.top=r},
$S:1}
V.ic.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:43}
X.jq.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
q=q==null?null:q.c
s.cl("Vertex Shader","glsl",0,(q==null?"":q).split("\n"))
r=r.a
r=r==null?null:r.d
s.cl("Fragment Shader","glsl",0,(r==null?"":r).split("\n"))},
$S:6};(function aliases(){var s=J.a.prototype
s.dh=s.i
s=J.ba.prototype
s.dj=s.i
s=P.h.prototype
s.di=s.ba
s=W.z.prototype
s.be=s.a1
s=W.cO.prototype
s.dk=s.a9
s=K.du.prototype
s.dg=s.al
s.bf=s.i
s=O.dJ.prototype
s.bT=s.ag
s=O.ck.prototype
s.bU=s.ag})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"mV","lT",44)
r(P,"nz","mm",9)
r(P,"nA","mn",9)
r(P,"nB","mo",9)
q(P,"l0","nu",1)
r(W,"p5","hc",34)
p(W,"nL",4,null,["$4"],["mp"],21,0)
p(W,"nM",4,null,["$4"],["mq"],21,0)
var j
o(j=E.bx.prototype,"gcV",0,0,null,["$1","$0"],["cW","ft"],0,0)
o(j,"gcT",0,0,null,["$1","$0"],["cU","fs"],0,0)
o(j,"gcR",0,0,null,["$1","$0"],["cS","fo"],0,0)
n(j,"gfm","fn",5)
n(j,"gfp","fq",5)
o(j=E.eo.prototype,"gbV",0,0,null,["$1","$0"],["bX","bW"],0,0)
m(j,"gfI","d1",1)
l(j=X.eJ.prototype,"geb","ec",3)
l(j,"ge_","e0",3)
l(j,"ge5","e6",2)
l(j,"gef","eg",18)
l(j,"ged","ee",18)
l(j,"gej","ek",2)
l(j,"gen","eo",2)
l(j,"ge9","ea",2)
l(j,"gel","em",2)
l(j,"ge7","e8",2)
l(j,"gep","eq",27)
l(j,"ger","es",3)
l(j,"geD","eE",11)
l(j,"gez","eA",11)
l(j,"geB","eC",11)
o(D.c0.prototype,"gds",0,0,null,["$1","$0"],["ac","dt"],0,0)
o(j=D.cd.prototype,"gc8",0,0,null,["$1","$0"],["c9","eh"],0,0)
l(j,"gev","ew",29)
n(j,"gdU","dV",20)
n(j,"gex","ey",20)
k(V.bJ.prototype,"gl","bF",12)
k(V.D.prototype,"gl","bF",12)
o(j=M.dn.prototype,"ga7",0,0,null,["$1","$0"],["ad","du"],0,0)
n(j,"ge1","e2",5)
n(j,"ge3","e4",5)
o(j=O.dH.prototype,"gbY",0,0,null,["$1","$0"],["Y","dw"],0,0)
o(j,"gca",0,0,null,["$1","$0"],["cb","eM"],0,0)
n(j,"gdW","dX",13)
n(j,"gdY","dZ",13)
o(X.dY.prototype,"gbZ",0,0,null,["$1","$0"],["au","dB"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.L,null)
q(P.L,[H.jB,J.a,J.a6,P.E,P.cH,P.h,H.aM,P.dx,H.c6,H.eH,H.ir,H.hY,H.fr,H.b3,P.R,H.hx,H.dF,H.ht,H.aa,H.f4,P.cU,P.bO,P.bo,P.eO,P.eg,P.eh,P.j8,P.cY,P.iX,P.cG,P.A,P.e7,P.df,P.hq,P.j6,P.a_,P.b6,P.dX,P.cz,P.f1,P.hm,P.a8,P.aQ,W.h3,W.jx,W.jK,W.bN,W.G,W.cs,W.cO,W.fw,W.c7,W.j0,W.fG,K.aG,K.du,K.i_,K.p,L.ed,L.ep,L.eq,L.il,O.bw,O.cm,E.h_,E.bx,E.bv,E.bD,E.eZ,E.i0,E.eo,Z.eM,Z.iP,Z.bY,Z.hr,Z.bm,D.h1,D.by,D.a0,X.bZ,X.dC,X.hv,X.hA,X.bB,X.hT,X.io,X.eJ,D.c0,V.O,V.b4,V.hf,V.cl,V.bA,V.a9,V.T,V.e2,V.bJ,V.D,M.dn,A.fW,A.fX,A.af,A.b0,A.b5,A.bh,A.bi,A.hE,A.ex,A.ey,A.eB,A.eE,A.iu,A.iA,F.aJ,F.hj,F.hw,F.i5,F.e8,F.i6,F.i7,F.cD,F.J,F.bK,F.eK,F.iL,F.iM,O.ih,O.dJ,O.hF,X.ig,X.dY,V.an,V.i9])
q(J.a,[J.dy,J.cb,J.ba,J.ah,J.bz,J.aK,H.cp,W.b,W.fU,W.de,W.ap,W.C,W.eT,W.a7,W.h6,W.h7,W.eU,W.c3,W.eW,W.h8,W.i,W.f2,W.ar,W.ho,W.f7,W.hz,W.hQ,W.fb,W.fc,W.at,W.fd,W.ff,W.av,W.fj,W.fl,W.ax,W.fm,W.ay,W.fs,W.ab,W.fy,W.ij,W.az,W.fA,W.ip,W.iC,W.fH,W.fJ,W.fL,W.fN,W.fP,P.bc,P.f9,P.bf,P.fh,P.hZ,P.ft,P.bk,P.fC,P.fY,P.eQ,P.cx,P.fp])
q(J.ba,[J.dZ,J.bl,J.as])
r(J.dA,J.ah)
q(J.bz,[J.ca,J.dz])
q(P.E,[H.dD,P.et,H.dB,H.eG,H.e5,H.f_,P.db,P.dU,P.ad,P.eI,P.eF,P.bG,P.dg,P.dj])
r(P.cf,P.cH)
q(P.cf,[H.bI,W.eR,W.W,P.dr])
r(H.o,H.bI)
q(P.h,[H.j,H.bd,H.bn,P.c9])
q(H.j,[H.cg,H.aL])
r(H.c4,H.bd)
q(P.dx,[H.ci,H.eN])
r(H.cj,H.cg)
r(H.ct,P.et)
q(H.b3,[H.el,H.hu,H.jm,H.jn,H.jo,P.iR,P.iQ,P.iS,P.iT,P.j5,P.j4,P.jf,P.iZ,P.j_,P.hB,P.h9,P.ha,W.hb,W.hR,W.hS,W.i4,W.ie,W.iU,W.hW,W.hV,W.j1,W.j2,W.j3,W.j7,P.jb,P.jh,P.hk,P.hl,P.fZ,E.i1,E.i2,E.i3,E.ii,D.hh,D.hi,F.jt,F.ji,F.i8,F.iO,F.iN,F.iI,F.iJ,O.hI,O.hJ,O.hK,O.hL,O.hM,O.hN,O.hO,O.hP,V.js,V.ib,V.ia,V.ic,X.jq])
q(H.el,[H.ee,H.bu])
r(P.ch,P.R)
q(P.ch,[H.P,W.eP])
r(H.bC,H.cp)
q(H.bC,[H.cJ,H.cL])
r(H.cK,H.cJ)
r(H.be,H.cK)
r(H.cM,H.cL)
r(H.co,H.cM)
q(H.co,[H.dO,H.dP,H.dQ,H.dR,H.dS,H.cq,H.dT])
r(H.cV,H.f_)
r(P.cR,P.c9)
r(P.iY,P.j8)
r(P.cN,P.cY)
r(P.cF,P.cN)
r(P.di,P.eh)
r(P.hd,P.df)
q(P.di,[P.hp,P.iE])
r(P.iD,P.hd)
q(P.ad,[P.cw,P.dw])
q(W.b,[W.r,W.dq,W.ai,W.cP,W.aj,W.a4,W.cS,W.eL,W.bL,P.dd,P.aH])
q(W.r,[W.z,W.ae,W.bM])
q(W.z,[W.n,P.k])
q(W.n,[W.d9,W.da,W.bt,W.b1,W.b2,W.c1,W.ds,W.e6,W.cA,W.ej,W.ek,W.bH])
r(W.h2,W.ap)
r(W.c_,W.eT)
q(W.a7,[W.h4,W.h5])
r(W.eV,W.eU)
r(W.c2,W.eV)
r(W.eX,W.eW)
r(W.dm,W.eX)
r(W.aq,W.de)
r(W.f3,W.f2)
r(W.dp,W.f3)
r(W.f8,W.f7)
r(W.b7,W.f8)
r(W.aB,W.i)
q(W.aB,[W.bb,W.a3,W.bj])
r(W.dL,W.fb)
r(W.dM,W.fc)
r(W.fe,W.fd)
r(W.dN,W.fe)
r(W.fg,W.ff)
r(W.cr,W.fg)
r(W.fk,W.fj)
r(W.e0,W.fk)
r(W.e4,W.fl)
r(W.cQ,W.cP)
r(W.ea,W.cQ)
r(W.fn,W.fm)
r(W.eb,W.fn)
r(W.ef,W.fs)
r(W.fz,W.fy)
r(W.em,W.fz)
r(W.cT,W.cS)
r(W.en,W.cT)
r(W.fB,W.fA)
r(W.er,W.fB)
r(W.aR,W.a3)
r(W.fI,W.fH)
r(W.eS,W.fI)
r(W.cE,W.c3)
r(W.fK,W.fJ)
r(W.f5,W.fK)
r(W.fM,W.fL)
r(W.cI,W.fM)
r(W.fO,W.fN)
r(W.fo,W.fO)
r(W.fQ,W.fP)
r(W.fv,W.fQ)
r(W.eY,W.eP)
r(W.f0,P.eg)
r(W.fx,W.cO)
r(P.fa,P.f9)
r(P.dE,P.fa)
r(P.fi,P.fh)
r(P.dV,P.fi)
r(P.bF,P.k)
r(P.fu,P.ft)
r(P.ei,P.fu)
r(P.fD,P.fC)
r(P.es,P.fD)
r(P.dc,P.eQ)
r(P.dW,P.aH)
r(P.fq,P.fp)
r(P.ec,P.fq)
q(K.du,[K.a1,L.iq])
q(E.h_,[Z.bX,A.cy])
q(D.a0,[D.b8,D.b9,D.F])
r(D.cd,O.bw)
r(U.hU,D.h1)
q(U.hU,[U.dh,U.e3])
r(A.dI,A.cy)
q(A.iu,[A.cB,A.ix,A.iy,A.iz,A.iv,A.eu,A.iw,A.ev,A.ew,A.iB,A.ez,A.eA,A.eC,A.eD])
r(F.id,F.hj)
r(F.it,F.hw)
r(F.iK,F.iL)
r(F.hX,F.iM)
r(O.dH,O.ih)
q(O.dJ,[O.hC,O.hD,O.ck])
q(O.ck,[O.hG,O.hH])
r(X.hn,X.ig)
q(V.an,[V.dk,V.dt,V.dv,V.e_])
s(H.bI,H.eH)
s(H.cJ,P.A)
s(H.cK,H.c6)
s(H.cL,P.A)
s(H.cM,H.c6)
s(P.cH,P.A)
s(P.cY,P.e7)
s(W.eT,W.h3)
s(W.eU,P.A)
s(W.eV,W.G)
s(W.eW,P.A)
s(W.eX,W.G)
s(W.f2,P.A)
s(W.f3,W.G)
s(W.f7,P.A)
s(W.f8,W.G)
s(W.fb,P.R)
s(W.fc,P.R)
s(W.fd,P.A)
s(W.fe,W.G)
s(W.ff,P.A)
s(W.fg,W.G)
s(W.fj,P.A)
s(W.fk,W.G)
s(W.fl,P.R)
s(W.cP,P.A)
s(W.cQ,W.G)
s(W.fm,P.A)
s(W.fn,W.G)
s(W.fs,P.R)
s(W.fy,P.A)
s(W.fz,W.G)
s(W.cS,P.A)
s(W.cT,W.G)
s(W.fA,P.A)
s(W.fB,W.G)
s(W.fH,P.A)
s(W.fI,W.G)
s(W.fJ,P.A)
s(W.fK,W.G)
s(W.fL,P.A)
s(W.fM,W.G)
s(W.fN,P.A)
s(W.fO,W.G)
s(W.fP,P.A)
s(W.fQ,W.G)
s(P.f9,P.A)
s(P.fa,W.G)
s(P.fh,P.A)
s(P.fi,W.G)
s(P.ft,P.A)
s(P.fu,W.G)
s(P.fC,P.A)
s(P.fD,W.G)
s(P.eQ,P.R)
s(P.fp,P.A)
s(P.fq,W.G)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{l:"int",S:"double",V:"num",v:"String",Z:"bool",a8:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([a0?])","~()","~(a3)","~(i)","~(v,@)","~(l,h<bx>)","~(a0)","~(aJ)","~(l,l)","~(~())","a8()","~(bj)","S()","~(l,h<bA>)","Z(v)","~(~(a0))","Z(au)","v(l)","~(bb)","Z(r)","~(l,h<cc>)","Z(z,v,v,bN)","~(@,@)","v(v)","~(r,r?)","~(@)","@(@)","~(aR)","z(r)","Z(h<cc>)","@(@,v)","@(v)","T(S)","~(cD,S,S)","v(b)","a8(@)","~(L?,L?)","~(v,v)","l(b0,b0)","l(b5,b5)","l(bh,bh)","l(bi,bi)","~(ik)","Z(an?)","l(@,@)","a8(~())","bX(l)","~(V)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mI(v.typeUniverse,JSON.parse('{"dZ":"ba","bl":"ba","as":"ba","o4":"i","og":"i","o6":"aH","o5":"b","om":"b","op":"b","o3":"k","oh":"k","o7":"n","ok":"n","oi":"r","of":"r","oN":"a4","ob":"aB","o8":"ae","oq":"ae","oo":"a3","oj":"b7","oc":"C","od":"ab","ol":"be","dy":{"Z":[]},"ah":{"m":["1"],"j":["1"],"h":["1"],"t":["1"]},"dA":{"m":["1"],"j":["1"],"h":["1"],"t":["1"]},"bz":{"S":[],"V":[]},"ca":{"S":[],"l":[],"V":[]},"dz":{"S":[],"V":[]},"aK":{"v":[],"t":["@"]},"dD":{"E":[]},"o":{"m":["l"],"j":["l"],"h":["l"]},"j":{"h":["1"]},"cg":{"j":["1"],"h":["1"]},"bd":{"h":["2"]},"c4":{"j":["2"],"h":["2"]},"cj":{"j":["2"],"h":["2"]},"bn":{"h":["1"]},"bI":{"m":["1"],"j":["1"],"h":["1"]},"ct":{"E":[]},"dB":{"E":[]},"eG":{"E":[]},"b3":{"c8":[]},"el":{"c8":[]},"ee":{"c8":[]},"bu":{"c8":[]},"e5":{"E":[]},"P":{"Q":["1","2"],"R.V":"2"},"aL":{"j":["1"],"h":["1"]},"bC":{"w":["1"],"t":["1"]},"be":{"w":["S"],"m":["S"],"j":["S"],"t":["S"],"h":["S"]},"co":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dO":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dP":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dQ":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dR":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dS":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"cq":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"dT":{"w":["l"],"m":["l"],"j":["l"],"t":["l"],"h":["l"]},"f_":{"E":[]},"cV":{"E":[]},"cU":{"ik":[]},"cR":{"h":["1"]},"cF":{"j":["1"],"h":["1"]},"c9":{"h":["1"]},"cf":{"m":["1"],"j":["1"],"h":["1"]},"ch":{"Q":["1","2"]},"R":{"Q":["1","2"]},"cN":{"j":["1"],"h":["1"]},"S":{"V":[]},"l":{"V":[]},"m":{"j":["1"],"h":["1"]},"db":{"E":[]},"et":{"E":[]},"dU":{"E":[]},"ad":{"E":[]},"cw":{"E":[]},"dw":{"E":[]},"eI":{"E":[]},"eF":{"E":[]},"bG":{"E":[]},"dg":{"E":[]},"dX":{"E":[]},"cz":{"E":[]},"dj":{"E":[]},"z":{"r":[],"b":[]},"bb":{"i":[]},"a3":{"i":[]},"r":{"b":[]},"ai":{"b":[]},"aj":{"b":[]},"a4":{"b":[]},"bj":{"i":[]},"aB":{"i":[]},"aR":{"a3":[],"i":[]},"bN":{"au":[]},"n":{"z":[],"r":[],"b":[]},"d9":{"z":[],"r":[],"b":[]},"da":{"z":[],"r":[],"b":[]},"bt":{"z":[],"r":[],"b":[]},"b1":{"z":[],"r":[],"b":[]},"b2":{"z":[],"r":[],"b":[]},"ae":{"r":[],"b":[]},"c1":{"z":[],"r":[],"b":[]},"c2":{"m":["aP<V>"],"w":["aP<V>"],"j":["aP<V>"],"h":["aP<V>"],"t":["aP<V>"]},"c3":{"aP":["V"]},"dm":{"m":["v"],"w":["v"],"j":["v"],"h":["v"],"t":["v"]},"eR":{"m":["z"],"j":["z"],"h":["z"]},"dp":{"m":["aq"],"w":["aq"],"j":["aq"],"h":["aq"],"t":["aq"]},"dq":{"b":[]},"ds":{"z":[],"r":[],"b":[]},"b7":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"dL":{"Q":["v","@"],"R.V":"@"},"dM":{"Q":["v","@"],"R.V":"@"},"dN":{"m":["at"],"w":["at"],"j":["at"],"h":["at"],"t":["at"]},"W":{"m":["r"],"j":["r"],"h":["r"]},"cr":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"e0":{"m":["av"],"w":["av"],"j":["av"],"h":["av"],"t":["av"]},"e4":{"Q":["v","@"],"R.V":"@"},"e6":{"z":[],"r":[],"b":[]},"ea":{"m":["ai"],"w":["ai"],"b":[],"j":["ai"],"h":["ai"],"t":["ai"]},"eb":{"m":["ax"],"w":["ax"],"j":["ax"],"h":["ax"],"t":["ax"]},"ef":{"Q":["v","v"],"R.V":"v"},"cA":{"z":[],"r":[],"b":[]},"ej":{"z":[],"r":[],"b":[]},"ek":{"z":[],"r":[],"b":[]},"bH":{"z":[],"r":[],"b":[]},"em":{"m":["a4"],"w":["a4"],"j":["a4"],"h":["a4"],"t":["a4"]},"en":{"m":["aj"],"w":["aj"],"b":[],"j":["aj"],"h":["aj"],"t":["aj"]},"er":{"m":["az"],"w":["az"],"j":["az"],"h":["az"],"t":["az"]},"eL":{"b":[]},"bL":{"b":[]},"bM":{"r":[],"b":[]},"eS":{"m":["C"],"w":["C"],"j":["C"],"h":["C"],"t":["C"]},"cE":{"aP":["V"]},"f5":{"m":["ar?"],"w":["ar?"],"j":["ar?"],"h":["ar?"],"t":["ar?"]},"cI":{"m":["r"],"w":["r"],"j":["r"],"h":["r"],"t":["r"]},"fo":{"m":["ay"],"w":["ay"],"j":["ay"],"h":["ay"],"t":["ay"]},"fv":{"m":["ab"],"w":["ab"],"j":["ab"],"h":["ab"],"t":["ab"]},"eP":{"Q":["v","v"]},"eY":{"Q":["v","v"],"R.V":"v"},"cs":{"au":[]},"cO":{"au":[]},"fx":{"au":[]},"fw":{"au":[]},"dr":{"m":["z"],"j":["z"],"h":["z"]},"dE":{"m":["bc"],"j":["bc"],"h":["bc"]},"dV":{"m":["bf"],"j":["bf"],"h":["bf"]},"bF":{"k":[],"z":[],"r":[],"b":[]},"ei":{"m":["v"],"j":["v"],"h":["v"]},"k":{"z":[],"r":[],"b":[]},"es":{"m":["bk"],"j":["bk"],"h":["bk"]},"dc":{"Q":["v","@"],"R.V":"@"},"dd":{"b":[]},"aH":{"b":[]},"dW":{"b":[]},"ec":{"m":["Q<@,@>"],"j":["Q<@,@>"],"h":["Q<@,@>"]},"bw":{"h":["1"]},"b8":{"a0":[]},"b9":{"a0":[]},"F":{"a0":[]},"c0":{"cc":[]},"cd":{"h":["cc"]},"dI":{"cy":[]},"dk":{"an":[]},"dt":{"an":[]},"dv":{"an":[]},"e_":{"an":[]},"aP":{"oR":["1"]}}'))
H.mH(v.typeUniverse,JSON.parse('{"ah":1,"dA":1,"a6":1,"j":1,"cg":1,"aM":1,"bd":2,"c4":2,"ci":2,"cj":2,"bn":1,"eN":1,"c6":1,"eH":1,"bI":1,"aL":1,"dF":1,"bC":1,"bo":1,"cR":1,"eg":1,"eh":2,"cG":1,"c9":1,"cf":1,"A":1,"ch":2,"R":2,"e7":1,"cN":1,"cH":1,"cY":1,"df":2,"di":2,"h":1,"m":1,"dx":1,"f0":1,"G":1,"c7":1,"bw":1,"b8":1,"b9":1,"F":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.nI
return{w:s("bt"),t:s("b1"),D:s("bY"),E:s("b2"),O:s("j<@>"),h:s("z"),C:s("E"),B:s("i"),Z:s("c8"),b:s("ah<@>"),e:s("t<@>"),T:s("cb"),M:s("as"),p:s("w<@>"),J:s("P<l,Z>"),y:s("P<l,l>"),q:s("m<ex>"),L:s("m<ey>"),U:s("m<eB>"),R:s("m<eE>"),c:s("m<@>"),f:s("Q<@,@>"),P:s("a8"),K:s("L"),I:s("aP<V>"),Y:s("bF"),k:s("cy"),N:s("v"),u:s("k"),V:s("bH"),d:s("ik"),l:s("ep"),n:s("eu"),v:s("cB"),g:s("ev"),F:s("ew"),Q:s("ez"),j:s("eA"),G:s("eC"),a:s("eD"),o:s("bl"),x:s("bM"),m:s("Z"),i:s("S"),z:s("@"),S:s("l"),A:s("0&*"),_:s("L*"),r:s("kf<a8>?"),X:s("L?"),s:s("cx?"),aJ:s("ed?"),aX:s("eq?"),W:s("cB?"),H:s("V")}})();(function constants(){var s=hunkHelpers.makeConstList
C.k=W.b1.prototype
C.H=W.b2.prototype
C.I=W.c1.prototype
C.L=J.a.prototype
C.a=J.ah.prototype
C.c=J.ca.prototype
C.M=J.cb.prototype
C.d=J.bz.prototype
C.b=J.aK.prototype
C.N=J.as.prototype
C.t=J.dZ.prototype
C.u=W.cA.prototype
C.j=J.bl.prototype
C.v=W.aR.prototype
C.w=W.bL.prototype
C.x=new E.bv("Browser.chrome")
C.l=new E.bv("Browser.firefox")
C.m=new E.bv("Browser.edge")
C.y=new E.bv("Browser.other")
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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

C.F=new P.dX()
C.f=new P.iD()
C.G=new P.iE()
C.e=new P.iY()
C.h=new P.b6(0)
C.J=new P.b6(5e6)
C.K=new P.hq("element",!1,!1,!1)
C.O=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=s([])
C.p=s([0,0,65498,45055,65535,34815,65534,18431])
C.q=s(["bind","if","ref","repeat","syntax"])
C.i=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bD("OperatingSystem.windows")
C.r=new E.bD("OperatingSystem.mac")
C.S=new E.bD("OperatingSystem.linux")
C.T=new E.bD("OperatingSystem.other")
C.U=new P.bO(null,2)})();(function staticFields(){$.iV=null
$.am=0
$.bW=null
$.k7=null
$.l3=null
$.l_=null
$.l7=null
$.jj=null
$.jp=null
$.jY=null
$.bP=null
$.d0=null
$.d1=null
$.jT=!1
$.ak=C.e
$.a2=[]
$.aI=null
$.jw=null
$.ke=null
$.kd=null
$.f6=P.M(t.N,t.Z)
$.he=null
$.ki=null
$.kk=null
$.bg=null
$.aw=null
$.ko=null
$.kA=null
$.kz=null
$.iF=null
$.iG=null
$.iH=null
$.ky=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"oe","ld",function(){return H.nK("_$dart_dartClosure")})
s($,"or","lf",function(){return H.aA(H.is({
toString:function(){return"$receiver$"}}))})
s($,"os","lg",function(){return H.aA(H.is({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"ot","lh",function(){return H.aA(H.is(null))})
s($,"ou","li",function(){return H.aA(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ox","ll",function(){return H.aA(H.is(void 0))})
s($,"oy","lm",function(){return H.aA(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"ow","lk",function(){return H.aA(H.kw(null))})
s($,"ov","lj",function(){return H.aA(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"oA","lo",function(){return H.aA(H.kw(void 0))})
s($,"oz","ln",function(){return H.aA(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"oO","k2",function(){return P.ml()})
s($,"oS","lt",function(){return P.m8("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oP","ls",function(){return P.kg(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"oH","lr",function(){return Z.ac(0)})
s($,"oB","lp",function(){return Z.ac(511)})
s($,"oJ","aZ",function(){return Z.ac(1)})
s($,"oI","aY",function(){return Z.ac(2)})
s($,"oD","aX",function(){return Z.ac(4)})
s($,"oK","br",function(){return Z.ac(8)})
s($,"oL","bs",function(){return Z.ac(16)})
s($,"oE","d6",function(){return Z.ac(32)})
s($,"oF","d7",function(){return Z.ac(64)})
s($,"oG","lq",function(){return Z.ac(96)})
s($,"oM","bV",function(){return Z.ac(128)})
s($,"oC","aW",function(){return Z.ac(256)})
s($,"oa","lc",function(){return new V.hf()})
r($,"o9","B",function(){return $.lc()})
r($,"on","le",function(){var q=V.kl(),p=V.jJ(),o=$.ky
return V.kj(q,p,o==null?$.ky=V.mi(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cp,ArrayBufferView:H.cp,Float32Array:H.be,Float64Array:H.be,Int16Array:H.dO,Int32Array:H.dP,Int8Array:H.dQ,Uint16Array:H.dR,Uint32Array:H.dS,Uint8ClampedArray:H.cq,CanvasPixelArray:H.cq,Uint8Array:H.dT,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.fU,HTMLAnchorElement:W.d9,HTMLAreaElement:W.da,HTMLBaseElement:W.bt,Blob:W.de,HTMLBodyElement:W.b1,HTMLCanvasElement:W.b2,CDATASection:W.ae,CharacterData:W.ae,Comment:W.ae,ProcessingInstruction:W.ae,Text:W.ae,CSSPerspective:W.h2,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.c_,MSStyleCSSProperties:W.c_,CSS2Properties:W.c_,CSSImageValue:W.a7,CSSKeywordValue:W.a7,CSSNumericValue:W.a7,CSSPositionValue:W.a7,CSSResourceValue:W.a7,CSSUnitValue:W.a7,CSSURLImageValue:W.a7,CSSStyleValue:W.a7,CSSMatrixComponent:W.ap,CSSRotation:W.ap,CSSScale:W.ap,CSSSkew:W.ap,CSSTranslation:W.ap,CSSTransformComponent:W.ap,CSSTransformValue:W.h4,CSSUnparsedValue:W.h5,DataTransferItemList:W.h6,HTMLDivElement:W.c1,DOMException:W.h7,ClientRectList:W.c2,DOMRectList:W.c2,DOMRectReadOnly:W.c3,DOMStringList:W.dm,DOMTokenList:W.h8,Element:W.z,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aq,FileList:W.dp,FileWriter:W.dq,HTMLFormElement:W.ds,Gamepad:W.ar,History:W.ho,HTMLCollection:W.b7,HTMLFormControlsCollection:W.b7,HTMLOptionsCollection:W.b7,KeyboardEvent:W.bb,Location:W.hz,MediaList:W.hQ,MIDIInputMap:W.dL,MIDIOutputMap:W.dM,MimeType:W.at,MimeTypeArray:W.dN,PointerEvent:W.a3,MouseEvent:W.a3,DragEvent:W.a3,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cr,RadioNodeList:W.cr,Plugin:W.av,PluginArray:W.e0,RTCStatsReport:W.e4,HTMLSelectElement:W.e6,SourceBuffer:W.ai,SourceBufferList:W.ea,SpeechGrammar:W.ax,SpeechGrammarList:W.eb,SpeechRecognitionResult:W.ay,Storage:W.ef,CSSStyleSheet:W.ab,StyleSheet:W.ab,HTMLTableElement:W.cA,HTMLTableRowElement:W.ej,HTMLTableSectionElement:W.ek,HTMLTemplateElement:W.bH,TextTrack:W.aj,TextTrackCue:W.a4,VTTCue:W.a4,TextTrackCueList:W.em,TextTrackList:W.en,TimeRanges:W.ij,Touch:W.az,TouchEvent:W.bj,TouchList:W.er,TrackDefaultList:W.ip,CompositionEvent:W.aB,FocusEvent:W.aB,TextEvent:W.aB,UIEvent:W.aB,URL:W.iC,VideoTrackList:W.eL,WheelEvent:W.aR,Window:W.bL,DOMWindow:W.bL,Attr:W.bM,CSSRuleList:W.eS,ClientRect:W.cE,DOMRect:W.cE,GamepadList:W.f5,NamedNodeMap:W.cI,MozNamedAttrMap:W.cI,SpeechRecognitionResultList:W.fo,StyleSheetList:W.fv,SVGLength:P.bc,SVGLengthList:P.dE,SVGNumber:P.bf,SVGNumberList:P.dV,SVGPointList:P.hZ,SVGScriptElement:P.bF,SVGStringList:P.ei,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bk,SVGTransformList:P.es,AudioBuffer:P.fY,AudioParamMap:P.dc,AudioTrackList:P.dd,AudioContext:P.aH,webkitAudioContext:P.aH,BaseAudioContext:P.aH,OfflineAudioContext:P.dW,WebGL2RenderingContext:P.cx,SQLResultSetRowList:P.ec})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.be.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
W.cP.$nativeSuperclassTag="EventTarget"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=X.nU
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
