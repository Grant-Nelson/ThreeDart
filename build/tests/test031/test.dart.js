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
a[c]=function(){a[c]=function(){H.o2(b)}
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
if(a[b]!==s)H.o3(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k0"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.k0(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jG:function jG(){},
ih:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mk:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nH:function(a,b,c){return a},
m0:function(a,b){if(t.V.b(a))return new H.c7(a,b)
return new H.bb(a,b)},
ki:function(){return new P.eh("No element")},
mj:function(a,b){H.ec(a,0,J.bp(a)-1,b)},
ec:function(a,b,c,d){if(c-b<=32)H.mi(a,b,c,d)
else H.mh(a,b,c,d)},
mi:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.fO(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ao()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
mh:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.b.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.b.a6(a4+a5,2),f=g-j,e=g+j,d=J.fO(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.G(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
if(r<i&&q>h){for(;J.G(a6.$2(d.h(a3,r),b),0);)++r
for(;J.G(a6.$2(d.h(a3,q),a0),0);)--q
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
dI:function dI(a){this.a=a},
L:function L(a){this.a=a},
j:function j(){},
by:function by(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bb:function bb(a,b){this.a=a
this.b=b},
c7:function c7(a,b){this.a=a
this.b=b},
ck:function ck(a,b){this.a=null
this.b=a
this.c=b},
cO:function cO(a,b){this.a=a
this.b=b},
eM:function eM(a,b){this.a=a
this.b=b},
c9:function c9(){},
eH:function eH(){},
bH:function bH(){},
lk:function(a){var s,r=H.lj(a)
if(r!=null)return r
s="minified:"+a
return s},
nV:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
t:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.fS(a)
return s},
cw:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cx:function(a){return H.m2(a)},
m2:function(a){var s,r,q,p
if(a instanceof P.J)return H.ac(H.bT(a),null)
if(J.de(a)===C.J||t.o.b(a)){s=C.n(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ac(H.bT(a),null)},
kt:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mc:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.fN(q))throw H.b(H.ji(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.b.bn(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.ji(q))}return H.kt(p)},
mb:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.fN(q))throw H.b(H.ji(q))
if(q<0)throw H.b(H.ji(q))
if(q>65535)return H.mc(a)}return H.kt(a)},
ma:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.b.bn(s,10)|55296)>>>0,s&1023|56320)}throw H.b(P.aQ(a,0,1114111,null,null))},
bE:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m9:function(a){var s=H.bE(a).getFullYear()+0
return s},
m7:function(a){var s=H.bE(a).getMonth()+1
return s},
m3:function(a){var s=H.bE(a).getDate()+0
return s},
m4:function(a){var s=H.bE(a).getHours()+0
return s},
m6:function(a){var s=H.bE(a).getMinutes()+0
return s},
m8:function(a){var s=H.bE(a).getSeconds()+0
return s},
m5:function(a){var s=H.bE(a).getMilliseconds()+0
return s},
e:function(a,b){if(a==null)J.bp(a)
throw H.b(H.bR(a,b))},
bR:function(a,b){var s,r="index"
if(!H.fN(b))return new P.aq(!0,b,r,null)
s=J.bp(a)
if(b<0||b>=s)return P.F(b,a,r,null,s)
return P.e5(b,r)},
nM:function(a,b,c){if(a>c)return P.aQ(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aQ(b,a,c,"end",null)
return new P.aq(!0,b,"end",null)},
ji:function(a){return new P.aq(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.dY()
s=new Error()
s.dartException=a
r=H.o4
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
o4:function(){return J.fS(this.dartException)},
f:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b1(a))},
aB:function(a){var s,r,q,p,o,n
a=H.lf(a.replace(String({}),"$receiver$"))
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
kF:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jH:function(a,b){var s=b==null,r=s?null:b.method
return new H.dG(a,r,s?null:b.receiver)},
fQ:function(a){if(a==null)return new H.hZ(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bo(a,a.dartException)
return H.nD(a)},
bo:function(a,b){if(t.c.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nD:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.bn(r,16)&8191)===10)switch(q){case 438:return H.bo(a,H.jH(H.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return H.bo(a,new H.cv(p,e))}}if(a instanceof TypeError){o=$.lo()
n=$.lp()
m=$.lq()
l=$.lr()
k=$.lu()
j=$.lv()
i=$.lt()
$.ls()
h=$.lx()
g=$.lw()
f=o.aj(s)
if(f!=null)return H.bo(a,H.jH(s,f))
else{f=n.aj(s)
if(f!=null){f.method="call"
return H.bo(a,H.jH(s,f))}else{f=m.aj(s)
if(f==null){f=l.aj(s)
if(f==null){f=k.aj(s)
if(f==null){f=j.aj(s)
if(f==null){f=i.aj(s)
if(f==null){f=l.aj(s)
if(f==null){f=h.aj(s)
if(f==null){f=g.aj(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bo(a,new H.cv(s,f==null?e:f.method))}}return H.bo(a,new H.eG(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cC()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bo(a,new P.aq(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cC()
return a},
k2:function(a){var s
if(a==null)return new H.fp(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fp(a)},
nO:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
nU:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.d("Unsupported number of arguments for wrapped closure"))},
bQ:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nU)
a.$identity=s
return s},
lQ:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ie().constructor.prototype):Object.create(new H.bV(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.as
if(typeof r!=="number")return r.T()
$.as=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kc(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lM(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kc(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lM:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lb,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.lK:H.lJ
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
lN:function(a,b,c,d){var s=H.kb
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kc:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lP(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lN(r,!p,s,b)
if(r===0){p=$.as
if(typeof p!=="number")return p.T()
$.as=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bW
return new Function(p+(o==null?$.bW=H.h1("self"):o)+";return "+n+"."+H.t(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.as
if(typeof p!=="number")return p.T()
$.as=p+1
m+=p
p="return function("+m+"){return this."
o=$.bW
return new Function(p+(o==null?$.bW=H.h1("self"):o)+"."+H.t(s)+"("+m+");}")()},
lO:function(a,b,c,d){var s=H.kb,r=H.lL
switch(b?-1:a){case 0:throw H.b(new H.e8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lP:function(a,b){var s,r,q,p,o,n,m,l=$.bW
if(l==null)l=$.bW=H.h1("self")
s=$.ka
if(s==null)s=$.ka=H.h1("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lO(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.t(r)+"(this."+s+");"
n=$.as
if(typeof n!=="number")return n.T()
$.as=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.t(r)+"(this."+s+", "+m+");"
n=$.as
if(typeof n!=="number")return n.T()
$.as=n+1
return new Function(o+n+"}")()},
k0:function(a,b,c,d,e,f,g){return H.lQ(a,b,c,d,!!e,!!f,g)},
lJ:function(a,b){return H.fB(v.typeUniverse,H.bT(a.a),b)},
lK:function(a,b){return H.fB(v.typeUniverse,H.bT(a.c),b)},
kb:function(a){return a.a},
lL:function(a){return a.c},
h1:function(a){var s,r,q,p=new H.bV("self","target","receiver","name"),o=J.jF(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.jw("Field name "+a+" not found."))},
o2:function(a){throw H.b(new P.dt(a))},
nQ:function(a){return v.getIsolateTag(a)},
o3:function(a){return H.f(new H.dI(a))},
p7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nX:function(a){var s,r,q,p,o,n=$.la.$1(a),m=$.jl[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jq[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.l6.$2(a,n)
if(q!=null){m=$.jl[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jq[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jr(s)
$.jl[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jq[n]=s
return s}if(p==="-"){o=H.jr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ld(a,s)
if(p==="*")throw H.b(P.kG(n))
if(v.leafTags[n]===true){o=H.jr(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ld(a,s)},
ld:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.k5(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jr:function(a){return J.k5(a,!1,null,!!a.$iq)},
nZ:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jr(s)
else return J.k5(s,c,null,null)},
nS:function(){if(!0===$.k3)return
$.k3=!0
H.nT()},
nT:function(){var s,r,q,p,o,n,m,l
$.jl=Object.create(null)
$.jq=Object.create(null)
H.nR()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.le.$1(o)
if(n!=null){m=H.nZ(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nR:function(){var s,r,q,p,o,n,m=C.y()
m=H.bP(C.z,H.bP(C.A,H.bP(C.o,H.bP(C.o,H.bP(C.B,H.bP(C.C,H.bP(C.D(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.la=new H.jn(p)
$.l6=new H.jo(o)
$.le=new H.jp(n)},
bP:function(a,b){return a(b)||b},
lY:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(new P.hq("Illegal RegExp pattern ("+String(n)+")",a))},
lg:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nN:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lh:function(a,b,c){var s=H.o1(a,b,c)
return s},
o1:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lf(b),'g'),H.nN(c))},
iz:function iz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cv:function cv(a,b){this.a=a
this.b=b},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a){this.a=a},
hZ:function hZ(a){this.a=a},
fp:function fp(a){this.a=a
this.b=null},
br:function br(){},
ij:function ij(){},
ie:function ie(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e8:function e8(a){this.a=a},
R:function R(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hv:function hv(a){this.a=a},
hz:function hz(a,b){this.a=a
this.b=b
this.c=null},
aK:function aK(a){this.a=a},
dK:function dK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
hu:function hu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bN:function(a){return a},
aD:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bR(b,a))},
mS:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.nM(a,b,c))
return b},
cr:function cr(){},
bC:function bC(){},
bc:function bc(){},
cq:function cq(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
cs:function cs(){},
dW:function dW(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
kx:function(a,b){var s=b.c
return s==null?b.c=H.jU(a,b.z,!0):s},
kw:function(a,b){var s=b.c
return s==null?b.c=H.d6(a,"kg",[b.z]):s},
ky:function(a){var s=a.y
if(s===6||s===7||s===8)return H.ky(a.z)
return s===11||s===12},
mf:function(a){return a.cy},
nP:function(a){return H.jV(v.typeUniverse,a,!1)},
aX:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.kW(a,r,!0)
case 7:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.jU(a,r,!0)
case 8:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.kV(a,r,!0)
case 9:q=b.Q
p=H.dd(a,q,a0,a1)
if(p===q)return b
return H.d6(a,b.z,p)
case 10:o=b.z
n=H.aX(a,o,a0,a1)
m=b.Q
l=H.dd(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jS(a,n,l)
case 11:k=b.z
j=H.aX(a,k,a0,a1)
i=b.Q
h=H.nA(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kU(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dd(a,g,a0,a1)
o=b.z
n=H.aX(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jT(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.fV("Attempted to substitute unexpected RTI kind "+c))}},
dd:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aX(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nB:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aX(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nA:function(a,b,c,d){var s,r=b.a,q=H.dd(a,r,c,d),p=b.b,o=H.dd(a,p,c,d),n=b.c,m=H.nB(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.f2()
s.a=q
s.b=o
s.c=m
return s},
p9:function(a,b){a[v.arrayRti]=b
return a},
nI:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lb(s)
return a.$S()}return null},
lc:function(a,b){var s
if(H.ky(b))if(a instanceof H.br){s=H.nI(a)
if(s!=null)return s}return H.bT(a)},
bT:function(a){var s
if(a instanceof P.J){s=a.$ti
return s!=null?s:H.jW(a)}if(Array.isArray(a))return H.kZ(a)
return H.jW(J.de(a))},
kZ:function(a){var s=a[v.arrayRti],r=t.s
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
T:function(a){var s=a.$ti
return s!=null?s:H.jW(a)},
jW:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.mZ(a,s)},
mZ:function(a,b){var s=a instanceof H.br?a.__proto__.__proto__.constructor:b,r=H.mN(v.typeUniverse,s.name)
b.$ccache=r
return r},
lb:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.jV(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
mY:function(a){var s,r,q,p=this
if(p===t.K)return H.da(p,a,H.n2)
if(!H.aE(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.da(p,a,H.n5)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.fN
else if(r===t.i||r===t.H)q=H.n1
else if(r===t.N)q=H.n3
else q=r===t.cB?H.jX:null
if(q!=null)return H.da(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.nW)){p.r="$i"+s
return H.da(p,a,H.n4)}}else if(s===7)return H.da(p,a,H.mW)
return H.da(p,a,H.mU)},
da:function(a,b,c){a.b=c
return a.b(b)},
mX:function(a){var s,r=this,q=H.mT
if(!H.aE(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.mR
else if(r===t.K)q=H.mP
else{s=H.df(r)
if(s)q=H.mV}r.a=q
return r.a(a)},
k_:function(a){var s,r=a.y
if(!H.aE(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.k_(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
mU:function(a){var s=this
if(a==null)return H.k_(s)
return H.I(v.typeUniverse,H.lc(a,s),null,s,null)},
mW:function(a){if(a==null)return!0
return this.z.b(a)},
n4:function(a){var s,r=this
if(a==null)return H.k_(r)
s=r.r
if(a instanceof P.J)return!!a[s]
return!!J.de(a)[s]},
mT:function(a){var s,r=this
if(a==null){s=H.df(r)
if(s)return a}else if(r.b(a))return a
H.l1(a,r)},
mV:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l1(a,s)},
l1:function(a,b){throw H.b(H.mD(H.kP(a,H.lc(a,b),H.ac(b,null))))},
kP:function(a,b,c){var s=P.hk(a),r=H.ac(b==null?H.bT(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
mD:function(a){return new H.d4("TypeError: "+a)},
a_:function(a,b){return new H.d4("TypeError: "+H.kP(a,null,b))},
n2:function(a){return a!=null},
mP:function(a){if(a!=null)return a
throw H.b(H.a_(a,"Object"))},
n5:function(a){return!0},
mR:function(a){return a},
jX:function(a){return!0===a||!1===a},
l_:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a_(a,"bool"))},
oX:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a_(a,"bool"))},
oW:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a_(a,"bool?"))},
oY:function(a){if(typeof a=="number")return a
throw H.b(H.a_(a,"double"))},
p_:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a_(a,"double"))},
oZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a_(a,"double?"))},
fN:function(a){return typeof a=="number"&&Math.floor(a)===a},
fM:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a_(a,"int"))},
p1:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a_(a,"int"))},
p0:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a_(a,"int?"))},
n1:function(a){return typeof a=="number"},
p2:function(a){if(typeof a=="number")return a
throw H.b(H.a_(a,"num"))},
p4:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a_(a,"num"))},
p3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a_(a,"num?"))},
n3:function(a){return typeof a=="string"},
mQ:function(a){if(typeof a=="string")return a
throw H.b(H.a_(a,"String"))},
p6:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a_(a,"String"))},
p5:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a_(a,"String?"))},
nw:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ac(a[q],b)
return s},
l2:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
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
if(!k)m+=" extends "+H.ac(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.ac(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.ac(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.ac(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.ac(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
ac:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.ac(a.z,b)
return s}if(l===7){r=a.z
s=H.ac(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.ac(a.z,b)+">"
if(l===9){p=H.nC(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nw(o,b)+">"):p}if(l===11)return H.l2(a,b,null)
if(l===12)return H.l2(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nC:function(a){var s,r=H.lj(a)
if(r!=null)return r
s="minified:"+a
return s},
kX:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mN:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.jV(a,b,!1)
else if(typeof m=="number"){s=m
r=H.d7(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.d6(a,b,q)
n[b]=o
return o}else return m},
mL:function(a,b){return H.kY(a.tR,b)},
mK:function(a,b){return H.kY(a.eT,b)},
jV:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kT(H.kR(a,null,b,c))
r.set(b,s)
return s},
fB:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kT(H.kR(a,b,c,!0))
q.set(c,r)
return r},
mM:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jS(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aW:function(a,b){b.a=H.mX
b.b=H.mY
return b},
d7:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.af(null,null)
s.y=b
s.cy=c
r=H.aW(a,s)
a.eC.set(c,r)
return r},
kW:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mI(a,b,r,c)
a.eC.set(r,s)
return s},
mI:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aE(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.af(null,null)
q.y=6
q.z=b
q.cy=c
return H.aW(a,q)},
jU:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mH(a,b,r,c)
a.eC.set(r,s)
return s},
mH:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aE(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.df(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.df(q.z))return q
else return H.kx(a,b)}}p=new H.af(null,null)
p.y=7
p.z=b
p.cy=c
return H.aW(a,p)},
kV:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mF(a,b,r,c)
a.eC.set(r,s)
return s},
mF:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aE(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.d6(a,"kg",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.af(null,null)
q.y=8
q.z=b
q.cy=c
return H.aW(a,q)},
mJ:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.af(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aW(a,s)
a.eC.set(q,r)
return r},
fA:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mE:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
d6:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fA(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.af(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aW(a,r)
a.eC.set(p,q)
return q},
jS:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fA(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aW(a,o)
a.eC.set(q,n)
return n},
kU:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fA(m)
if(j>0){s=l>0?",":""
r=H.fA(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mE(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.af(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aW(a,o)
a.eC.set(q,r)
return r},
jT:function(a,b,c,d){var s,r=b.cy+("<"+H.fA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mG(a,b,c,r,d)
a.eC.set(r,s)
return s},
mG:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aX(a,b,r,0)
m=H.dd(a,c,r,0)
return H.jT(a,n,m,c!==m)}}l=new H.af(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aW(a,l)},
kR:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kT:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mx(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kS(a,r,h,g,!1)
else if(q===46)r=H.kS(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aV(a.u,a.e,g.pop()))
break
case 94:g.push(H.mJ(a.u,g.pop()))
break
case 35:g.push(H.d7(a.u,5,"#"))
break
case 64:g.push(H.d7(a.u,2,"@"))
break
case 126:g.push(H.d7(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.jR(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.d6(p,n,o))
else{m=H.aV(p,a.e,n)
switch(m.y){case 11:g.push(H.jT(p,m,o,a.n))
break
default:g.push(H.jS(p,m,o))
break}}break
case 38:H.my(a,g)
break
case 42:p=a.u
g.push(H.kW(p,H.aV(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.jU(p,H.aV(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.kV(p,H.aV(p,a.e,g.pop()),a.n))
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
H.jR(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.kU(p,H.aV(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.jR(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.mA(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aV(a.u,a.e,i)},
mx:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kS:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.kX(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mf(o)+'"')
d.push(H.fB(s,o,n))}else d.push(p)
return m},
my:function(a,b){var s=b.pop()
if(0===s){b.push(H.d7(a.u,1,"0&"))
return}if(1===s){b.push(H.d7(a.u,4,"1&"))
return}throw H.b(P.fV("Unexpected extended operation "+H.t(s)))},
aV:function(a,b,c){if(typeof c=="string")return H.d6(a,c,a.sEA)
else if(typeof c=="number")return H.mz(a,b,c)
else return c},
jR:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aV(a,b,c[s])},
mA:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aV(a,b,c[s])},
mz:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.fV("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.fV("Bad index "+c+" for "+b.i(0)))},
I:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
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
if(q)if(H.I(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.I(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.I(a,b.z,c,d,e)
if(r===6)return H.I(a,b.z,c,d,e)
return r!==7}if(r===6)return H.I(a,b.z,c,d,e)
if(p===6){s=H.kx(a,d)
return H.I(a,b,c,s,e)}if(r===8){if(!H.I(a,b.z,c,d,e))return!1
return H.I(a,H.kw(a,b),c,d,e)}if(r===7){s=H.I(a,t.P,c,d,e)
return s&&H.I(a,b.z,c,d,e)}if(p===8){if(H.I(a,b,c,d.z,e))return!0
return H.I(a,b,c,H.kw(a,d),e)}if(p===7){s=H.I(a,b,c,t.P,e)
return s||H.I(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.d)return!0
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
if(!H.I(a,k,c,j,e)||!H.I(a,j,e,k,c))return!1}return H.l3(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.l3(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.n0(a,b,c,d,e)}return!1},
l3:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.I(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.I(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.I(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.I(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.I(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
n0:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.I(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.kX(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.I(a,H.fB(a,b,l[p]),c,r[p],e))return!1
return!0},
df:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aE(a))if(r!==7)if(!(r===6&&H.df(a.z)))s=r===8&&H.df(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
nW:function(a){var s
if(!H.aE(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aE:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
kY:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
af:function af(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f2:function f2(){this.c=this.b=this.a=null},
eY:function eY(){},
d4:function d4(a){this.a=a},
lj:function(a){return v.mangledGlobalNames[a]},
o_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jm:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.k3==null){H.nS()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.kG("Return interceptor for "+H.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.j2
if(o==null)o=$.j2=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.nX(a)
if(p!=null)return p
if(typeof a=="function")return C.L
s=Object.getPrototypeOf(a)
if(s==null)return C.r
if(s===Object.prototype)return C.r
if(typeof q=="function"){o=$.j2
if(o==null)o=$.j2=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lV:function(a){if(a<0||a>4294967295)throw H.b(P.aQ(a,0,4294967295,"length",null))
return J.lW(new Array(a))},
jE:function(a){if(a<0)throw H.b(P.jw("Length must be a non-negative integer: "+a))
return new Array(a)},
lW:function(a){return J.jF(a)},
jF:function(a){a.fixed$length=Array
return a},
lX:function(a,b){return J.lF(a,b)},
de:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cd.prototype
return J.dE.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.ce.prototype
if(typeof a=="boolean")return J.dD.prototype
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.J)return a
return J.jm(a)},
fO:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.J)return a
return J.jm(a)},
k1:function(a){if(a==null)return a
if(a.constructor==Array)return J.ak.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.J)return a
return J.jm(a)},
l9:function(a){if(typeof a=="number")return J.bx.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.J))return J.bG.prototype
return a},
bn:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.J)return a
return J.jm(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.de(a).m(a,b)},
k8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l9(a).K(a,b)},
lC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nV(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fO(a).h(a,b)},
lD:function(a,b,c){return J.bn(a).fD(a,b,c)},
lE:function(a,b,c,d){return J.bn(a).fT(a,b,c,d)},
lF:function(a,b){return J.l9(a).ag(a,b)},
ju:function(a,b){return J.k1(a).F(a,b)},
jv:function(a,b){return J.k1(a).I(a,b)},
lG:function(a){return J.bn(a).gd9(a)},
lH:function(a){return J.bn(a).gde(a)},
fR:function(a){return J.de(a).gG(a)},
aG:function(a){return J.k1(a).gP(a)},
bp:function(a){return J.fO(a).gj(a)},
lI:function(a,b){return J.bn(a).hu(a,b)},
fS:function(a){return J.de(a).i(a)},
a:function a(){},
dD:function dD(){},
ce:function ce(){},
b8:function b8(){},
e2:function e2(){},
bG:function bG(){},
aw:function aw(){},
ak:function ak(){},
dF:function dF(){},
a3:function a3(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bx:function bx(){},
cd:function cd(){},
dE:function dE(){},
b7:function b7(){}},P={
mq:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nE()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bQ(new P.iZ(q),1)).observe(s,{childList:true})
return new P.iY(q,s,r)}else if(self.setImmediate!=null)return P.nF()
return P.nG()},
mr:function(a){self.scheduleImmediate(H.bQ(new P.j_(a),0))},
ms:function(a){self.setImmediate(H.bQ(new P.j0(a),0))},
mt:function(a){P.jL(C.j,a)},
jL:function(a,b){var s=C.b.a6(a.a,1000)
return P.mB(s<0?0:s,b)},
kE:function(a,b){var s=C.b.a6(a.a,1000)
return P.mC(s<0?0:s,b)},
mB:function(a,b){var s=new P.d3()
s.e8(a,b)
return s},
mC:function(a,b){var s=new P.d3()
s.e9(a,b)
return s},
oU:function(a){return new P.bL(a,1)},
mu:function(){return C.Q},
mv:function(a){return new P.bL(a,3)},
n7:function(a){return new P.d0(a)},
nt:function(){var s,r
for(s=$.bO;s!=null;s=$.bO){$.dc=null
r=s.b
$.bO=r
if(r==null)$.db=null
s.a.$0()}},
nz:function(){$.jY=!0
try{P.nt()}finally{$.dc=null
$.jY=!1
if($.bO!=null)$.k7().$1(P.l7())}},
nx:function(a){var s=new P.eN(a),r=$.db
if(r==null){$.bO=$.db=s
if(!$.jY)$.k7().$1(P.l7())}else $.db=r.b=s},
ny:function(a){var s,r,q,p=$.bO
if(p==null){P.nx(a)
$.dc=$.db
return}s=new P.eN(a)
r=$.dc
if(r==null){s.b=p
$.bO=$.dc=s}else{q=r.b
s.b=q
$.dc=r.b=s
if(q==null)$.db=s}},
kD:function(a,b){var s=$.am
if(s===C.e)return P.jL(a,b)
return P.jL(a,s.fX(b))},
mn:function(a,b){var s=$.am
if(s===C.e)return P.kE(a,b)
return P.kE(a,s.d5(b,t.u))},
l4:function(a,b,c,d,e){P.ny(new P.jh(d,e))},
nu:function(a,b,c,d){var s,r=$.am
if(r===c)return d.$0()
$.am=c
s=r
try{r=d.$0()
return r}finally{$.am=s}},
nv:function(a,b,c,d,e){var s,r=$.am
if(r===c)return d.$1(e)
$.am=c
s=r
try{r=d.$1(e)
return r}finally{$.am=s}},
iZ:function iZ(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
d3:function d3(){this.c=0},
j9:function j9(a,b){this.a=a
this.b=b},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=b},
bM:function bM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d0:function d0(a){this.a=a},
eN:function eN(a){this.a=a
this.b=null},
ej:function ej(){},
ek:function ek(){},
jb:function jb(){},
jh:function jh(a,b){this.a=a
this.b=b},
j5:function j5(){},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function(a,b,c){return H.nO(a,new H.R(b.as("@<0>").cB(c).as("R<1,2>")))},
N:function(a,b){return new H.R(a.as("@<0>").cB(b).as("R<1,2>"))},
kj:function(a){return new P.cQ(a.as("cQ<0>"))},
jQ:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mw:function(a,b){var s=new P.cR(a,b)
s.c=a.e
return s},
lU:function(a,b,c){var s,r
if(P.jZ(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a6.push(a)
try{P.n6(a,s)}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}r=P.kz(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jD:function(a,b,c){var s,r
if(P.jZ(a))return b+"..."+c
s=new P.bi(b)
$.a6.push(a)
try{r=s
r.a=P.kz(r.a,a,", ")}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jZ:function(a){var s,r
for(s=$.a6.length,r=0;r<s;++r)if(a===$.a6[r])return!0
return!1},
n6:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.t(l.gE(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gE(l);++j
if(!l.u()){if(j<=4){b.push(H.t(p))
return}r=H.t(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gE(l);++j
for(;l.u();p=o,o=n){n=l.gE(l);++j
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
kk:function(a){var s,r={}
if(P.jZ(a))return"{...}"
s=new P.bi("")
try{$.a6.push(a)
s.a+="{"
r.a=!0
J.jv(a,new P.hE(r,s))
s.a+="}"}finally{if(0>=$.a6.length)return H.e($.a6,-1)
$.a6.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cQ:function cQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j4:function j4(a){this.a=a
this.c=this.b=null},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function cc(){},
ch:function ch(){},
B:function B(){},
cj:function cj(){},
hE:function hE(a,b){this.a=a
this.b=b},
U:function U(){},
ea:function ea(){},
cY:function cY(){},
cS:function cS(){},
d8:function d8(){},
dq:function dq(){},
ds:function ds(){},
hh:function hh(){},
iK:function iK(){},
iL:function iL(){},
ja:function ja(a){this.b=0
this.c=a},
lT:function(a){if(a instanceof H.br)return a.i(0)
return"Instance of '"+H.cx(a)+"'"},
hA:function(a,b,c){var s,r=c?J.jE(a):J.lV(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hB:function(a,b){var s,r=[]
for(s=J.aG(a);s.u();)r.push(s.gE(s))
if(b)return r
return J.jF(r)},
m_:function(a,b){var s,r,q=J.jE(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
jK:function(a){var s=a,r=s.length,q=P.jI(0,null,r)
return H.mb(q<r?s.slice(0,q):s)},
md:function(a){return new H.hu(a,H.lY(a,!1,!0,!1,!1,!1))},
kz:function(a,b,c){var s=J.aG(b)
if(!s.u())return a
if(c.length===0){do a+=H.t(s.gE(s))
while(s.u())}else{a+=H.t(s.gE(s))
for(;s.u();)a=a+c+H.t(s.gE(s))}return a},
mO:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.p){s=$.lB().b
s=s.test(b)}else s=!1
if(s)return b
r=C.F.h0(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.ma(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lR:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
du:function(a){if(a>=10)return""+a
return"0"+a},
ke:function(a){return new P.b3(1000*a)},
hk:function(a){if(typeof a=="number"||H.jX(a)||null==a)return J.fS(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lT(a)},
fV:function(a){return new P.dl(a)},
jw:function(a){return new P.aq(!1,null,null,a)},
e5:function(a,b){return new P.cy(null,null,!0,a,b,"Value not in range")},
aQ:function(a,b,c,d,e){return new P.cy(b,c,!0,a,d,"Invalid value")},
jI:function(a,b,c){if(a>c)throw H.b(P.aQ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.aQ(b,a,c,"end",null))
return b}return c},
ku:function(a,b){if(a<0)throw H.b(P.aQ(a,0,null,b,null))
return a},
F:function(a,b,c,d,e){var s=e==null?J.bp(b):e
return new P.dB(s,!0,a,c,"Index out of range")},
w:function(a){return new P.eI(a)},
kG:function(a){return new P.eF(a)},
b1:function(a){return new P.dr(a)},
d:function(a){return new P.f_(a)},
k6:function(a){H.o_(a)},
P:function P(a,b){this.a=a
this.b=b},
b3:function b3(a){this.a=a},
he:function he(){},
hf:function hf(){},
D:function D(){},
dl:function dl(a){this.a=a},
eu:function eu(){},
dY:function dY(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cy:function cy(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dB:function dB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eI:function eI(a){this.a=a},
eF:function eF(a){this.a=a},
eh:function eh(a){this.a=a},
dr:function dr(a){this.a=a},
e0:function e0(){},
cC:function cC(){},
dt:function dt(a){this.a=a},
f_:function f_(a){this.a=a},
hq:function hq(a,b){this.a=a
this.b=b},
h:function h(){},
dC:function dC(){},
ae:function ae(){},
J:function J(){},
bi:function bi(a){this.a=a},
nK:function(a){var s,r,q,p
if(t.I.b(a)){s=J.lH(a)
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
return new P.d5(r,q,p)},
nJ:function(a){if(a instanceof P.d5)return{data:a.a,height:a.b,width:a.c}
return a},
aY:function(a){var s,r,q,p,o
if(a==null)return null
s=P.N(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
l0:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jX(a))return a
if(t.f.b(a))return P.l8(a)
if(t.t.b(a)){s=[]
J.jv(a,new P.jd(s))
a=s}return a},
l8:function(a){var s={}
J.jv(a,new P.jj(s))
return s},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
jj:function jj(a){this.a=a},
dy:function dy(a,b){this.a=a
this.b=b},
ho:function ho(){},
hp:function hp(){},
fi:function fi(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
dJ:function dJ(){},
bd:function bd(){},
dZ:function dZ(){},
i0:function i0(){},
el:function el(){},
k:function k(){},
bk:function bk(){},
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
dm:function dm(){},
fZ:function fZ(a){this.a=a},
dn:function dn(){},
aH:function aH(){},
e_:function e_(){},
eO:function eO(){},
bF:function bF(){},
ef:function ef(){},
fn:function fn(){},
fo:function fo(){}},W={
jx:function(){var s=document.createElement("canvas")
s.toString
return s},
hg:function(a){return"wheel"},
j3:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kQ:function(a,b,c,d){var s=W.j3(W.j3(W.j3(W.j3(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
X:function(a,b,c,d){var s=W.l5(new W.j1(c),t.B)
if(s!=null&&!0)J.lE(a,b,s,!1)
return new W.eZ(a,b,s,!1)},
l5:function(a,b){var s=$.am
if(s===C.e)return a
return s.d5(a,b)},
l:function l(){},
fT:function fT(){},
dj:function dj(){},
dk:function dk(){},
dp:function dp(){},
b0:function b0(){},
bZ:function bZ(){},
ai:function ai(){},
h6:function h6(){},
C:function C(){},
c2:function c2(){},
h7:function h7(){},
ad:function ad(){},
at:function at(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
hc:function hc(){},
c5:function c5(){},
c6:function c6(){},
dv:function dv(){},
hd:function hd(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
H:function H(){},
i:function i(){},
c:function c(){},
aI:function aI(){},
dw:function dw(){},
dx:function dx(){},
dz:function dz(){},
aJ:function aJ(){},
hs:function hs(){},
b5:function b5(){},
b6:function b6(){},
bw:function bw(){},
b9:function b9(){},
hC:function hC(){},
hT:function hT(){},
dO:function dO(){},
hU:function hU(a){this.a=a},
dP:function dP(){},
hV:function hV(a){this.a=a},
aM:function aM(){},
dQ:function dQ(){},
a9:function a9(){},
eP:function eP(a){this.a=a},
r:function r(){},
ct:function ct(){},
aO:function aO(){},
e3:function e3(){},
e7:function e7(){},
i7:function i7(a){this.a=a},
e9:function e9(){},
az:function az(){},
ed:function ed(){},
aR:function aR(){},
ee:function ee(){},
aS:function aS(){},
ei:function ei(){},
ig:function ig(a){this.a=a},
al:function al(){},
aA:function aA(){},
ag:function ag(){},
em:function em(){},
en:function en(){},
it:function it(){},
aT:function aT(){},
bj:function bj(){},
es:function es(){},
ix:function ix(){},
aC:function aC(){},
iJ:function iJ(){},
eK:function eK(){},
aU:function aU(){},
bK:function bK(){},
eR:function eR(){},
cP:function cP(){},
f3:function f3(){},
cT:function cT(){},
fm:function fm(){},
ft:function ft(){},
jB:function jB(a,b){this.a=a
this.$ti=b},
eZ:function eZ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j1:function j1(a){this.a=a},
jP:function jP(a){this.$ti=a},
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
cZ:function cZ(){},
d_:function d_(){},
fk:function fk(){},
fl:function fl(){},
fq:function fq(){},
fu:function fu(){},
fv:function fv(){},
d1:function d1(){},
d2:function d2(){},
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
fL:function fL(){}},K={fU:function fU(){},dA:function dA(){},aN:function aN(a){this.a=a},S:function S(a){this.a=a}},L={eg:function eg(a,b,c){var _=this
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
h3:function(){return new O.bs([])},
bs:function bs(a){this.a=a
this.c=this.b=null},
cp:function cp(a){this.a=a
this.b=null},
dN:function(a,b){return new O.cm(new V.M(0,0,0),a,b,new A.a8(!1,!1,!1))},
kB:function(a,b,c){var s=V.a1(),r=V.i2()
return new O.cE(c,s,r,a,b)},
hb:function hb(a,b,c){var _=this
_.c=_.b=_.a=null
_.d=a
_.e=b
_.f=c
_.r=null},
dL:function dL(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(){},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(){},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(){},
hF:function hF(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c},
dM:function dM(){},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d},
hI:function hI(a){this.b=a},
hJ:function hJ(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d},
hK:function hK(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d},
dX:function dX(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.r=_.f=_.e=null},
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
cE:function cE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null}},E={
jA:function(){var s=O.h3(),r=new E.bu(s)
s.aI(r.ghe(),r.ghh())
r.sbk(0,null)
r.sbd(null)
return r},
kN:function(){var s=window.navigator.vendor
s.toString
if(C.d.J(s,"Google"))return C.w
s=window.navigator.userAgent
s.toString
if(C.d.J(s,"Firefox"))return C.l
s=window.navigator.appVersion
s.toString
if(C.d.J(s,"Trident")||C.d.J(s,"Edge"))return C.m
s=window.navigator.appName
s.toString
if(C.d.J(s,"Microsoft"))return C.m
return C.x},
kO:function(){var s=window.navigator.appVersion
s.toString
if(C.d.J(s,"Win"))return C.N
if(C.d.J(s,"Mac"))return C.q
if(C.d.J(s,"Linux"))return C.O
return C.P},
me:function(a,b){var s
Date.now()
s=new E.i3(a,new P.P(Date.now(),!1),new P.P(Date.now(),!1),new O.cp([]),new O.cp([]),new O.cp([]),[null],P.N(t.N,t.k))
s.e2(a,b)
return s},
mm:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kC(a,!0,!0,!0,!1)
s=W.jx()
r=s.style
r.width="100%"
r.height="100%"
J.lG(a).l(0,s)
return E.kC(s,!0,!0,!0,!1)},
kC:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.h.cn(a,"webgl2",P.lZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.b(P.d("Failed to get the rendering context for WebGL."))
s=E.me(l,a)
H.fM(l.getParameter(3379))
m=H.fM(l.getParameter(34076))
r=[]
q=$.hi
p=new X.eJ(a,r,(q==null?$.hi=new E.eX(E.kN(),E.kO()):q).a===C.l?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.X(o,"contextmenu",p.geQ(),!1))
r.push(W.X(a,"focus",p.gf_(),!1))
r.push(W.X(a,"blur",p.geK(),!1))
r.push(W.X(o,"keyup",p.gf3(),!1))
r.push(W.X(o,"keydown",p.gf1(),!1))
r.push(W.X(a,"mousedown",p.gf7(),!1))
r.push(W.X(a,"mouseup",p.gfb(),!1))
r.push(W.X(a,n,p.gf9(),!1))
W.hg(a)
W.hg(a)
r.push(W.X(a,W.hg(a),p.gfd(),!1))
r.push(W.X(o,n,p.geS(),!1))
r.push(W.X(o,"mouseup",p.geU(),!1))
r.push(W.X(o,"pointerlockchange",p.gff(),!1))
r.push(W.X(a,"touchstart",p.gfw(),!1))
r.push(W.X(a,"touchend",p.gfs(),!1))
r.push(W.X(a,"touchmove",p.gfu(),!1))
m=new E.ep(a,s,new T.iq(l,m),p,new P.P(Date.now(),!1))
m.cQ()
return m},
h0:function h0(){},
bu:function bu(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bq:function bq(a){this.b=a},
bD:function bD(a){this.b=a},
eX:function eX(a,b){this.a=a
this.b=b},
i3:function i3(a,b,c,d,e,f,g,h){var _=this
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
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
i6:function i6(a){this.a=a},
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
jO:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bN(c)),35044)
a.bindBuffer(b,null)
return new Z.eL(b,s)},
ah:function(a){return new Z.ab(a)},
eL:function eL(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bl:function bl(a){this.a=a},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cb:function cb(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function ab(a){this.a=a}},D={
z:function(){return new D.b4()},
h2:function h2(){},
b4:function b4(){var _=this
_.c=_.b=_.a=null
_.d=0},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
Q:function Q(){},
au:function au(){},
av:function av(){},
u:function u(a,b,c){this.c=a
this.d=b
this.e=c},
c3:function c3(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cg:function cg(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={bY:function bY(a,b){this.a=a
this.b=b},dH:function dH(a,b){this.a=a
this.b=b},hw:function hw(a,b){this.c=a
this.d=b},ci:function ci(a,b,c){this.x=a
this.c=b
this.d=c},hD:function hD(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},bA:function bA(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},hW:function hW(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bB:function bB(a,b,c){this.x=a
this.c=b
this.d=c},e4:function e4(){},cF:function cF(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iw:function iw(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
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
k9:function(a,b,c){var s,r,q,p=T.kA(null)
p=new X.h_(p,new V.a7(0,0,0,1),V.i2())
p.san(0,512)
p.sah(0,512)
if(c==null)c=new V.a7(0,0,0,1)
if(!p.cx.m(0,c)){s=p.cx
p.cx=c
p.a0(new D.u("color",s,c))}if(p.cy!==b){p.cy=b
p.a0(new D.u("clearColor",!b,b))}r=p.db
$.y().toString
if(!(Math.abs(r-2000)<1e-9)){p.db=2000
p.a0(new D.u("depth",r,2000))}if(!p.f){p.f=!0
p.a0(new D.u("autoResize",!1,!0))}r=p.r
$.y().toString
if(!(Math.abs(r-1)<1e-9)){p.r=1
p.a0(new D.u("autoResizeScalarX",r,1))}r=p.x
$.y().toString
if(!(Math.abs(r-1)<1e-9)){p.x=1
p.a0(new D.u("autoResizeScalarY",r,1))}q=V.i2()
if(!p.dy.m(0,q)){s=p.dy
p.dy=q
p.a0(new D.u("region",s,q))}return p},
jC:function(a,b){var s=new V.a7(0,0,0,1),r=V.i2()
return new X.hr(s,a,r)},
kr:function(a){var s,r=new X.e1(1.0471975511965976,0.1)
r.sbd(a)
s=r.c
$.y().toString
if(!(Math.abs(s-1.0471975511965976)<1e-9)){r.c=1.0471975511965976
r.a0(new D.u("fov",s,1.0471975511965976))}s=r.d
$.y().toString
if(!(Math.abs(s-0.1)<1e-9)){r.d=0.1
r.a0(new D.u("near",s,0.1))}s=r.e
$.y().toString
if(!(Math.abs(s-2000)<1e-9)){r.e=2000
r.a0(new D.u("far",s,2000))}return r},
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
hr:function hr(a,b,c){var _=this
_.a=a
_.b=b
_.r=c
_.x=null},
ht:function ht(){this.b=this.a=null},
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
return new V.a7(s,r,q,1)},
k4:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
o6:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.c.dS(a-b,s)
return(a<0?a+s:a)+b},
v:function(a,b,c){$.y().toString
return C.d.al(C.c.cm(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bS:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.y().toString
n=C.d.al(C.c.cm(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.e(l,m)
s=C.d.al(l[m],q)
r=l.length
if(m>=r)return H.e(l,m)
l[m]=s}return l},
dg:function(a){return C.c.hB(Math.pow(2,C.c.c6(Math.log(a)/Math.log(2))))},
co:function(){var s=$.kl
return s==null?$.kl=new V.cn(1,0,0,0,1,0,0,0,1):s},
a1:function(){var s=$.kp
return s==null?$.kp=V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ko:function(a,b,c){return V.aL(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kn:function(a,b,c){return V.aL(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
km:function(a,b,c){var s=c.D(),r=b.aC(s).D(),q=s.aC(r),p=new V.x(a.a,a.b,a.c)
return V.aL(r.a,q.a,s.a,r.aY(0).ad(p),r.b,q.b,s.b,q.aY(0).ad(p),r.c,q.c,s.c,s.aY(0).ad(p),0,0,0,1)},
ks:function(){var s=$.ax
return s==null?$.ax=new V.K(0,0,0):s},
i2:function(){var s=$.kv
return s==null?$.kv=V.i1(0,0,1,1):s},
i1:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e6(a,b,c,d)},
cL:function(){var s=$.kL
return s==null?$.kL=new V.x(0,0,0):s},
mp:function(){var s=$.iN
return s==null?$.iN=new V.x(-1,0,0):s},
jN:function(){var s=$.iO
return s==null?$.iO=new V.x(0,1,0):s},
kM:function(){var s=$.iP
return s==null?$.iP=new V.x(0,0,1):s},
mo:function(a,b,c){return new V.x(a,b,c)},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hj:function hj(){},
cn:function cn(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bz:function bz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e6:function e6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function(a){P.mn(C.I,new V.js(a))},
mg:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.X(n,"scroll",new V.ic(s),!1)
return new V.ia(o)},
js:function js(a){this.a=a},
ia:function ia(a){this.a=a
this.b=null},
ic:function ic(a){this.a=a},
ib:function ib(a){this.a=a}},U={
kd:function(){return new U.h5()},
jy:function(a){var s=V.a1(),r=new U.c0(s)
if(!s.m(0,a))r.a=a
return r},
kh:function(){var s=new U.bv(V.a1(),[])
s.aI(s.ge6(),s.gfj())
return s},
kH:function(a,b){var s,r,q=U.kd(),p=U.kd(),o=$.iM
if(o==null)o=$.iM=new V.a2(0,0)
o=new U.cJ(q,p,new X.a4(!1,!1,!1),o,V.a1())
q.sdQ(0,!0)
q.sdD(6.283185307179586)
q.sdF(0)
q.sac(0,0)
q.sdE(100)
q.sab(0)
q.sdd(0.5)
s=o.gbl()
q.gn().l(0,s)
p.sdQ(0,!0)
p.sdD(6.283185307179586)
p.sdF(0)
p.sac(0,0)
p.sdE(100)
p.sab(0)
p.sdd(0.5)
p.gn().l(0,s)
q=new X.a4(a,!1,!1)
if(!o.d.m(0,q)){r=o.d
o.d=q
o.U(new D.u("modifiers",r,q))}o.bT(b)
return o},
kI:function(a,b){var s=new X.a4(!1,!1,!1),r=new U.cK(s,V.a1()),q=new X.a4(a,!1,!1)
if(!s.m(0,q)){r.b=q
r.U(new D.u("modifiers",s,q))}r.bT(b)
return r},
h5:function h5(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
c0:function c0(a){this.a=a
this.b=null},
bv:function bv(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a5:function a5(){},
cJ:function cJ(a,b,c,d,e){var _=this
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
cK:function cK(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={
jz:function(){var s,r,q,p,o=null,n=E.jA(),m=new M.c1(n),l=F.jJ(),k=l.gS(),j=new V.x(-1,-1,1).D(),i=k.bq(new V.aP(1,2,4,6),V.h4(255,0,0),new V.K(-1,-1,0),new V.O(0,1),j,o)
j=l.gS()
k=new V.x(1,-1,1).D()
s=j.bq(new V.aP(0,3,4,6),V.h4(0,0,255),new V.K(1,-1,0),new V.O(1,1),k,o)
k=l.gS()
j=new V.x(1,1,1).D()
r=k.bq(new V.aP(0,2,5,6),V.h4(0,128,0),new V.K(1,1,0),new V.O(1,0),j,o)
j=l.gS()
k=$.Z
if(k==null)k=$.Z=new V.O(0,0)
q=new V.x(-1,1,1).D()
p=j.bq(new V.aP(0,2,4,7),V.h4(255,255,0),new V.K(-1,1,0),k,q,o)
l.gO().fU([i,s,r,p])
l.ap()
n.sbk(0,l)
m.sb7(o)
m.saG(0,o)
m.sav(o)
return m},
kf:function(){var s,r=O.h3(),q=new M.c8(r)
r.aI(q.geM(),q.geO())
s=X.jC(!0,null)
q.sb7(null)
q.saG(0,s)
q.sav(null)
return q},
c_:function c_(a){var _=this
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
_.y=null}},A={
m1:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gam(a5)+a6.gam(a6)+a7.gam(a7)+a8.gam(a8)+a9.gam(a9)+b0.gam(b0)+b1.gam(b1)+b2.gam(b2)+b3.gam(b3)+"_"
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
if(h){s=$.ao()
b=new Z.ab(b.a|s.a)}if(g)b=new Z.ab(b.a|$.an().a)
if(f)b=new Z.ab(b.a|$.ap().a)
if(e)b=new Z.ab(b.a|$.aZ().a)
return new A.hH(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jf:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jg:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jf(a,b,c)
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
nc:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jf(b,r,"emission")
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
n8:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jg(b,r,"ambient")
b.a+="\n"},
na:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jg(b,r,"diffuse")
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
nd:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jg(b,r,"invDiffuse")
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
nj:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jg(b,r,"specular")
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
nf:function(a,b){var s,r,q
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
nh:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jf(b,r,"reflect")
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
ni:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jf(b,r,"refract")
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
n9:function(a,b,c){var s,r,q,p,o,n,m=b.b
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
nb:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
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
ng:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
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
nk:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
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
if(m){s=$.hi
if(s==null)s=$.hi=new E.eX(E.kN(),E.kO())
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
ne:function(a,b){var s,r
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
nl:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.bi(""),i=""+"precision mediump float;\n"
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
A.nc(a,j)
A.n8(a,j)
A.na(a,j)
A.nd(a,j)
A.nj(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.nh(a,j)
A.ni(a,j)}A.nf(a,j)
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
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.n9(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nb(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.ng(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nk(a,p[m],j)
A.ne(a,j)}p=j.a+="// === Main ===\n"
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
j.a+=k+(q[0].toUpperCase()+C.d.b0(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b0(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b0(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b0(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
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
nm:function(a,b){var s,r,q
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
no:function(a,b){var s
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
nn:function(a,b){var s
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
nq:function(a,b){var s,r
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
nr:function(a,b){var s,r
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
np:function(a,b){var s
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
ns:function(a,b){var s
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
kq:function(a){var s,r,q,p,o,n
if(!a.a)s=a.c
else s=!0
r=a.c
q="Normal_"+a.gam(a)
p=$.Y()
o=$.ao()
o=p.a|o.a
n=new Z.ab(o)
if(s)n=new Z.ab(o|$.an().a)
return new A.hY(a,s,!1,r,q,r?new Z.ab(n.a|$.ap().a):n)},
fP:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.d.b0(a,1)},
ml:function(a,b){var s,r,q,p=""+"precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n"
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
jM:function(a,b,c,d,e){var s=new A.iD([],a,c,e)
s.f=d
s.e=P.hA(d,0,!1)
return s},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cl:function cl(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.du=_.hR=_.dt=_.ds=_.hQ=_.dr=_.dq=_.dn=_.hP=_.dm=_.dl=_.dk=_.hO=_.dj=_.di=_.hN=_.dh=_.bt=_.bs=_.aT=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.bZ=c
_.c_=d
_.c0=e
_.c1=f
_.c2=g
_.c3=h
_.c4=i
_.c5=j
_.hU=_.hT=_.hS=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b_:function b_(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.bs=b6
_.bt=b7},
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
eC:function eC(a,b,c,d,e,f,g,h,i,j){var _=this
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
cu:function cu(a,b,c){var _=this
_.x=a
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.a=b
_.b=c
_.d=_.c=""
_.r=_.f=_.e=null},
hY:function hY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ay:function ay(){},
bt:function bt(a,b){this.a=a
this.b=b},
cB:function cB(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
cD:function cD(a,b,c,d,e,f,g,h,i){var _=this
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
iC:function iC(){},
iH:function iH(a){this.a=a},
cG:function cG(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ev:function ev(a,b,c){this.a=a
this.c=b
this.d=c},
ew:function ew(a,b,c){this.a=a
this.c=b
this.d=c},
ex:function ex(a,b,c){this.a=a
this.c=b
this.d=c},
ey:function ey(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
eB:function eB(a,b,c){this.a=a
this.c=b
this.d=c},
cH:function cH(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
eD:function eD(a,b,c){this.a=a
this.c=b
this.d=c}},F={
je:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
d9:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.x(g,f+a2,e+a3)
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
i.d=h}k=F.je(h)
j=F.je(g)
a.cc(F.li(a0,a1,new F.jc(i,F.je(f),F.je(e),j,k,c),b))},
o5:function(){return F.nL(15,30,0.5,1,new F.jt())},
nL:function(a,b,c,d,e){var s=F.li(a,b,new F.jk(e,d,b,c),null)
s.ap()
s.hd(new F.iT(),new F.hX())
return s},
li:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.b(P.d("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.b(P.d("Must have 1 or more divisions of the height for a surface."))
s=F.jJ()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.p(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.iQ(e,e,new V.a7(n,0,0,1),e,e,new V.O(p,1),e,e,0)
o.l(0,m)
c.$3(m,p,0)
r.push(m.bX(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.p(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.iQ(e,e,new V.a7(h,g,f,1),e,e,new V.O(p,k),e,e,0)
i.l(0,m)
c.$3(m,p,l)
r.push(m.bX(d))}}s.gO().fV(a+1,b+1,r)
return s},
jJ:function(){return new F.i8()},
iQ:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cM()
h=$.ly()
s=$.Y()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.ao().a)!==0)q.r=e
if((r&$.an().a)!==0)q.x=b
if((r&$.aF().a)!==0)q.y=f
if((r&$.ap().a)!==0)q.z=g
if((r&$.lz().a)!==0)q.Q=c
if((r&$.bU().a)!==0)q.ch=i
if((r&$.aZ().a)!==0)q.cx=a
return q},
jc:function jc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jt:function jt(){},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(){},
id:function id(){},
hx:function hx(){this.b=this.a=null},
hy:function hy(){},
iB:function iB(){},
i_:function i_(){this.a=null},
i8:function i8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i9:function i9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cz:function cz(a,b){this.a=a
this.b=b},
cA:function cA(a,b){this.a=a
this.b=b},
bg:function bg(a,b){this.a=a
this.b=b},
cM:function cM(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
iX:function iX(a){this.a=a},
iW:function iW(a){this.a=a},
p:function p(a,b){this.a=a
this.b=!1
this.c=b},
bI:function bI(a,b,c){this.b=a
this.c=b
this.d=c},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.b=a
this.c=b},
iU:function iU(){},
iT:function iT(){},
iV:function iV(){},
hX:function hX(){},
cN:function cN(a){this.b=a}},T={
kA:function(a){return new T.io(a)},
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
_.r=g}},S={
nY:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=V.mg("Test 031"),a8=W.jx()
a8.className="pageLargeCanvas"
a8.id=a5
a7.a.appendChild(a8).toString
a7.d0(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."])
a7.d0(["\xab[Back to Tests|../]"])
s=document.getElementById(a5)
if(s==null)H.f(P.d("Failed to find an element with the identifier, testCanvas."))
r=E.mm(s,!0,!0,!0,!1)
q=E.jA()
p=F.jJ()
F.d9(p,a6,a6,1,1,1,0,0,1)
F.d9(p,a6,a6,1,1,0,1,0,3)
F.d9(p,a6,a6,1,1,0,0,1,2)
F.d9(p,a6,a6,1,1,-1,0,0,0)
F.d9(p,a6,a6,1,1,0,-1,0,0)
F.d9(p,a6,a6,1,1,0,0,-1,3)
p.ap()
q.sbk(0,p)
a7=U.kh()
o=r.x
a7.l(0,U.kH(!1,o))
a7.l(0,U.kI(!1,o))
q.sbd(a7)
n=new O.dX(V.co(),V.a1(),new A.a8(!1,!1,!1))
n.cR(a6)
n.cS(a6)
n.a1()
a7=r.f
m=a7.hc("../resources/diceBumpMap")
l=n.d
if(!l.c){n.d=new A.a8(l.a,!1,!0)
n.cR(a6)
n.a=null}n.cS(m)
k=X.k9(!0,!0,new V.a7(0.5,0.5,1,1))
j=M.kf()
j.sav(n)
j.saG(0,k)
j.e.l(0,q)
m=j.b
if(m!=null)m.sbd(U.jy(V.ko(0,0,5)))
i=U.kh()
i.l(0,U.kH(!0,o))
i.l(0,U.kI(!0,o))
i.l(0,U.jy(V.ko(0,0,5)))
h=X.kr(i)
g=X.k9(!0,!1,a6)
f=E.jA()
f.sbk(0,F.o5())
o=O.h3()
e=new O.dL(o)
o.aI(e.geG(),e.geI())
o=e.gdB()
o.gn().l(0,e.gcO())
o.gdA().l(0,e.gae())
o=e.gdB()
d=V.jN()
m=U.jy(V.km(V.ks(),d,new V.x(0,-1,-1)))
l=new V.M(1,1,1)
c=new D.c3(new V.M(1,1,1),V.kM(),V.jN(),V.mp())
b=c.a
c.a=m
m.gn().l(0,c.ge4())
c.ax(new D.u("mover",b,c.a))
if(!c.b.m(0,l)){b=c.b
c.b=l
c.ax(new D.u("color",b,l))}o.l(0,c)
o=e.gd1()
o.saS(0,new V.M(0,0,1))
o=e.gdf()
o.saS(0,new V.M(0,1,0))
o=e.gbz()
o.saS(0,new V.M(1,0,0))
o=e.gbz()
o.cU(new A.a8(!0,!1,o.c.c))
o.cV(10)
a7=a7.dC("../resources/maskonaive",".jpg")
a=M.jz()
o=new O.eb(new V.M(1,1,1))
b=o.c
o.c=a7
a7.gn().l(0,o.gae())
o.M(new D.u("boxTexture",b,o.c))
a.sav(o)
a.saG(0,g)
a.sb7(h)
a0=M.kf()
a0.sb7(h)
a0.sav(e)
a0.saG(0,g)
a0.e.l(0,f)
a1=new O.hb(V.co(),V.co(),V.a1())
a1.sdc(a6)
a1.sd8(a6)
a7=V.co()
if(!a1.d.m(0,a7)){a1.d=a7
a1.a1()}a7=V.co()
if(!a1.e.m(0,a7)){a1.e=a7
a1.a1()}a7=V.a1()
a1.sd7(a7)
a7=g.ch
a1.sdc(a7)
o=k.ch
a1.sd8(o)
a1.sd7(V.kn(0.05,0.05,0.05))
a2=M.jz()
a2.sav(a1)
m=O.h3()
a3=new O.eo(new V.a7(0,0,0,0),m,C.i,C.i)
m.aI(a3.geW(),a3.geY())
l=a3.e
if(l!==C.f){a3.e=C.f
a3.M(new D.u("blend",l,C.f))}m.l(0,O.kB(V.i1(0,0.8,0.2,0.2),!0,o))
m.l(0,O.kB(V.i1(0,0.6,0.2,0.2),!1,a7))
a4=M.jz()
a4.saG(0,X.jC(!1,a6))
a4.sav(a3)
a7=new M.c_([])
a7.aI(a7.gfn(),a7.gfp())
a7.bp(0,[a,a0,j,a2,a4])
o=r.d
if(o!==a7){if(o!=null)o.gn().C(0,r.gcu())
r.d=a7
a7.gn().l(0,r.gcu())
r.cv()}V.o0(r)}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jG.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gG:function(a){return H.cw(a)},
i:function(a){return"Instance of '"+H.cx(a)+"'"}}
J.dD.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ibm:1}
J.ce.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.b8.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.e2.prototype={}
J.bG.prototype={}
J.aw.prototype={
i:function(a){var s=a[$.lm()]
if(s==null)return this.dZ(a)
return"JavaScript function for "+J.fS(s)}}
J.ak.prototype={
ci:function(a,b){if(!!a.fixed$length)H.f(P.w("removeAt"))
if(b<0||b>=a.length)throw H.b(P.e5(b,null))
return a.splice(b,1)[0]},
C:function(a,b){var s
if(!!a.fixed$length)H.f(P.w("remove"))
for(s=0;s<a.length;++s)if(J.G(a[s],b)){a.splice(s,1)
return!0}return!1},
bp:function(a,b){if(!!a.fixed$length)H.f(P.w("addAll"))
this.ec(a,b)
return},
ec:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.b(P.b1(a))
for(s=0;s<r;++s)a.push(b[s])},
I:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b1(a))}},
p:function(a,b){var s,r,q=a.length,p=P.hA(q,"",!1)
for(s=0;s<a.length;++s){r=H.t(a[s])
if(s>=q)return H.e(p,s)
p[s]=r}return p.join(b)},
ha:function(a){return this.p(a,"")},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gh7:function(a){if(a.length>0)return a[0]
throw H.b(H.ki())},
gc8:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.ki())},
b_:function(a,b){if(!!a.immutable$list)H.f(P.w("sort"))
H.mj(a,b==null?J.n_():b)},
dW:function(a){return this.b_(a,null)},
J:function(a,b){var s
for(s=0;s<a.length;++s)if(J.G(a[s],b))return!0
return!1},
i:function(a){return P.jD(a,"[","]")},
gP:function(a){return new J.a3(a,a.length)},
gG:function(a){return H.cw(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.w("set length"))
if(b>a.length)H.kZ(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.bR(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.f(P.w("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bR(a,b))
a[b]=c},
$ij:1,
$ih:1,
$im:1}
J.dF.prototype={}
J.a3.prototype={
gE:function(a){return H.T(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bx.prototype={
ag:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbu(b)
if(this.gbu(a)===s)return 0
if(this.gbu(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbu:function(a){return a===0?1/a<0:a<0},
hB:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.w(""+a+".toInt()"))},
c6:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.w(""+a+".floor()"))},
Z:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.w(""+a+".round()"))},
cm:function(a,b){var s
if(b>20)throw H.b(P.aQ(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbu(a))return"-"+s
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
dS:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cX(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.cX(a,b)},
cX:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.w("Result of truncating division is "+H.t(s)+": "+H.t(a)+" ~/ "+b))},
bn:function(a,b){var s
if(a>0)s=this.fL(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fL:function(a,b){return b>31?0:a>>>b},
$iV:1,
$ia0:1}
J.cd.prototype={$in:1}
J.dE.prototype={}
J.b7.prototype={
bW:function(a,b){if(b<0)throw H.b(H.bR(a,b))
if(b>=a.length)H.f(H.bR(a,b))
return a.charCodeAt(b)},
cC:function(a,b){if(b>=a.length)throw H.b(H.bR(a,b))
return a.charCodeAt(b)},
T:function(a,b){return a+b},
cr:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.e5(b,null))
if(b>c)throw H.b(P.e5(b,null))
if(c>a.length)throw H.b(P.e5(c,null))
return a.substring(b,c)},
b0:function(a,b){return this.cr(a,b,null)},
K:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.E)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
al:function(a,b){var s=b-a.length
if(s<=0)return a
return this.K(" ",s)+a},
fZ:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.aQ(c,0,s,null,null))
return H.lg(a,b,c)},
J:function(a,b){return this.fZ(a,b,0)},
ag:function(a,b){var s
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
$iA:1}
H.dI.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.L.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.bW(this.a,b)}}
H.j.prototype={}
H.by.prototype={
gE:function(a){return H.T(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.fO(q),o=p.gj(q)
if(r.b!==o)throw H.b(P.b1(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.F(q,s);++r.c
return!0}}
H.bb.prototype={
gP:function(a){return new H.ck(J.aG(this.a),this.b)},
gj:function(a){return J.bp(this.a)},
F:function(a,b){return this.b.$1(J.ju(this.a,b))}}
H.c7.prototype={$ij:1}
H.ck.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gE(r))
return!0}s.a=null
return!1},
gE:function(a){return H.T(this).Q[1].a(this.a)}}
H.cO.prototype={
gP:function(a){return new H.eM(J.aG(this.a),this.b)}}
H.eM.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gE(s)))return!0
return!1},
gE:function(a){var s=this.a
return s.gE(s)}}
H.c9.prototype={}
H.eH.prototype={
k:function(a,b,c){throw H.b(P.w("Cannot modify an unmodifiable list"))}}
H.bH.prototype={}
H.iz.prototype={
aj:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cv.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dG.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eG.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.hZ.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fp.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.br.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lk(r==null?"unknown":r)+"'"},
ghG:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ij.prototype={}
H.ie.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lk(s)+"'"}}
H.bV.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bV))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.cw(this.a)
else s=typeof r!=="object"?J.fR(r):H.cw(r)
return(s^H.cw(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.cx(s)+"'")}}
H.e8.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.R.prototype={
gj:function(a){return this.a},
gaD:function(a){return new H.aK(this)},
ghF:function(a){return H.m0(new H.aK(this),new H.hv(this))},
h_:function(a,b){var s=this.b
if(s==null)return!1
return this.ek(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bm(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bm(p,b)
q=r==null?n:r.b
return q}else return o.h9(b)},
h9:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cH(q,J.fR(a)&0x3ffffff)
r=this.dv(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cA(s==null?m.b=m.bJ():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cA(r==null?m.c=m.bJ():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bJ()
p=J.fR(b)&0x3ffffff
o=m.cH(q,p)
if(o==null)m.bO(q,p,[m.bK(b,c)])
else{n=m.dv(o,b)
if(n>=0)o[n].b=c
else o.push(m.bK(b,c))}}},
I:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b1(s))
r=r.c}},
cA:function(a,b,c){var s=this.bm(a,b)
if(s==null)this.bO(a,b,this.bK(b,c))
else s.b=c},
bK:function(a,b){var s=this,r=new H.hz(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dv:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1},
i:function(a){return P.kk(this)},
bm:function(a,b){return a[b]},
cH:function(a,b){return a[b]},
bO:function(a,b,c){a[b]=c},
en:function(a,b){delete a[b]},
ek:function(a,b){return this.bm(a,b)!=null},
bJ:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bO(r,s,r)
this.en(r,s)
return r}}
H.hv.prototype={
$1:function(a){var s=this.a
return H.T(s).Q[1].a(s.h(0,a))},
$S:function(){return H.T(this.a).as("2(1)")}}
H.hz.prototype={}
H.aK.prototype={
gj:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.dK(s,s.r)
r.c=s.e
return r}}
H.dK.prototype={
gE:function(a){return H.T(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b1(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jn.prototype={
$1:function(a){return this.a(a)},
$S:24}
H.jo.prototype={
$2:function(a,b){return this.a(a,b)},
$S:25}
H.jp.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.hu.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cr.prototype={}
H.bC.prototype={
gj:function(a){return a.length},
$iq:1}
H.bc.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aD(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cq.prototype={
k:function(a,b,c){H.aD(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dR.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.dS.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.dT.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.dU.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.dV.prototype={
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.cs.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.dW.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aD(b,a,a.length)
return a[b]}}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
H.cX.prototype={}
H.af.prototype={
as:function(a){return H.fB(v.typeUniverse,this,a)},
cB:function(a){return H.mM(v.typeUniverse,this,a)}}
H.f2.prototype={}
H.eY.prototype={
i:function(a){return this.a}}
H.d4.prototype={}
P.iZ.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:30}
P.iY.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:36}
P.j_.prototype={
$0:function(){this.a.$0()},
$S:10}
P.j0.prototype={
$0:function(){this.a.$0()},
$S:10}
P.d3.prototype={
e8:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bQ(new P.j9(this,b),0),a)
else throw H.b(P.w("`setTimeout()` not found."))},
e9:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bQ(new P.j8(this,a,Date.now(),b),0),a)
else throw H.b(P.w("Periodic timer."))},
$iiu:1}
P.j9.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.j8.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.b.e_(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bL.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.bM.prototype={
gE:function(a){var s=this.c
if(s==null)return this.b
return s.gE(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bL){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aG(s)
if(o instanceof P.bM){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d0.prototype={
gP:function(a){return new P.bM(this.a())}}
P.eN.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.jb.prototype={}
P.jh.prototype={
$0:function(){var s=H.b(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.j5.prototype={
hw:function(a){var s,r,q,p=null
try{if(C.e===$.am){a.$0()
return}P.nu(p,p,this,a)}catch(q){s=H.fQ(q)
r=H.k2(q)
P.l4(p,p,this,s,r)}},
hx:function(a,b){var s,r,q,p=null
try{if(C.e===$.am){a.$1(b)
return}P.nv(p,p,this,a,b)}catch(q){s=H.fQ(q)
r=H.k2(q)
P.l4(p,p,this,s,r)}},
hy:function(a,b){return this.hx(a,b,t.z)},
fX:function(a){return new P.j6(this,a)},
d5:function(a,b){return new P.j7(this,a,b)}}
P.j6.prototype={
$0:function(){return this.a.hw(this.b)},
$S:2}
P.j7.prototype={
$1:function(a){return this.a.hy(this.b,a)},
$S:function(){return this.c.as("~(0)")}}
P.cQ.prototype={
gP:function(a){var s=new P.cR(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
J:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ei(b)
return r}},
ei:function(a){var s=this.d
if(s==null)return!1
return this.bG(s[this.bD(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cD(s==null?q.b=P.jQ():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cD(r==null?q.c=P.jQ():r,b)}else return q.eb(0,b)},
eb:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jQ()
s=q.bD(b)
r=p[s]
if(r==null)p[s]=[q.bC(b)]
else{if(q.bG(r,b)>=0)return!1
r.push(q.bC(b))}return!0},
C:function(a,b){if((b&1073741823)===b)return this.fB(this.c,b)
else return this.fA(0,b)},
fA:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bD(b)
r=n[s]
q=o.bG(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.cZ(p)
return!0},
cD:function(a,b){if(a[b]!=null)return!1
a[b]=this.bC(b)
return!0},
fB:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.cZ(s)
delete a[b]
return!0},
cJ:function(){this.r=this.r+1&1073741823},
bC:function(a){var s,r=this,q=new P.j4(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cJ()
return q},
cZ:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cJ()},
bD:function(a){return J.fR(a)&1073741823},
bG:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.G(a[r].a,b))return r
return-1}}
P.j4.prototype={}
P.cR.prototype={
gE:function(a){return H.T(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b1(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cc.prototype={}
P.ch.prototype={$ij:1,$ih:1,$im:1}
P.B.prototype={
gP:function(a){return new H.by(a,this.gj(a))},
F:function(a,b){return this.h(a,b)},
I:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.b(P.b1(a))}},
gdw:function(a){return this.gj(a)===0},
hD:function(a,b){var s,r,q,p,o=this
if(o.gdw(a)){s=J.jE(0)
return s}r=o.h(a,0)
q=P.hA(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s}return q},
hC:function(a){return this.hD(a,!0)},
i:function(a){return P.jD(a,"[","]")}}
P.cj.prototype={}
P.hE.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.t(a)
r.a=s+": "
r.a+=H.t(b)},
$S:44}
P.U.prototype={
I:function(a,b){var s,r,q
for(s=J.aG(this.gaD(a)),r=H.bT(a).as("U.V");s.u();){q=s.gE(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.bp(this.gaD(a))},
i:function(a){return P.kk(a)},
$iW:1}
P.ea.prototype={
i:function(a){return P.jD(this,"{","}")},
F:function(a,b){var s,r,q,p,o="index"
H.nH(b,o,t.S)
P.ku(b,o)
for(s=P.mw(this,this.r),r=H.T(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.b(P.F(b,this,o,null,q))}}
P.cY.prototype={$ij:1,$ih:1}
P.cS.prototype={}
P.d8.prototype={}
P.dq.prototype={}
P.ds.prototype={}
P.hh.prototype={}
P.iK.prototype={}
P.iL.prototype={
h0:function(a){var s,r,q,p=P.jI(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.ja(r)
if(q.ep(a,0,p)!==p){C.d.bW(a,p-1)
q.bS()}return new Uint8Array(r.subarray(0,H.mS(0,q.b,s)))}}
P.ja.prototype={
bS:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fS:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bS()
return!1}},
ep:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.d.bW(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.d.cC(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fS(p,C.d.cC(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bS()}else if(p<=2047){o=l.b
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
m:function(a,b){if(b==null)return!1
return b instanceof P.P&&this.a===b.a&&!0},
ag:function(a,b){return C.b.ag(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.b.bn(s,30))&1073741823},
i:function(a){var s=this,r=P.lR(H.m9(s)),q=P.du(H.m7(s)),p=P.du(H.m3(s)),o=P.du(H.m4(s)),n=P.du(H.m6(s)),m=P.du(H.m8(s)),l=P.lS(H.m5(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b3.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a},
gG:function(a){return C.b.gG(this.a)},
ag:function(a,b){return C.b.ag(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hf(),o=this.a
if(o<0)return"-"+new P.b3(0-o).i(0)
s=p.$1(C.b.a6(o,6e7)%60)
r=p.$1(C.b.a6(o,1e6)%60)
q=new P.he().$1(o%1e6)
return""+C.b.a6(o,36e8)+":"+s+":"+r+"."+q}}
P.he.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.hf.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.D.prototype={}
P.dl.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hk(s)
return"Assertion failed"}}
P.eu.prototype={}
P.dY.prototype={
i:function(a){return"Throw of null."}}
P.aq.prototype={
gbF:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbE:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbF()+o+m
if(!q.a)return l
s=q.gbE()
r=P.hk(q.b)
return l+s+": "+r}}
P.cy.prototype={
gbF:function(){return"RangeError"},
gbE:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.t(q):""
else if(q==null)s=": Not greater than or equal to "+H.t(r)
else if(q>r)s=": Not in inclusive range "+H.t(r)+".."+H.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.t(r)
return s}}
P.dB.prototype={
gbF:function(){return"RangeError"},
gbE:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.eI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eF.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eh.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dr.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hk(s)+"."}}
P.e0.prototype={
i:function(a){return"Out of Memory"},
$iD:1}
P.cC.prototype={
i:function(a){return"Stack Overflow"},
$iD:1}
P.dt.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f_.prototype={
i:function(a){return"Exception: "+this.a}}
P.hq.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.d.cr(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gj:function(a){var s,r=this.gP(this)
for(s=0;r.u();)++s
return s},
F:function(a,b){var s,r,q
P.ku(b,"index")
for(s=this.gP(this),r=0;s.u();){q=s.gE(s)
if(b===r)return q;++r}throw H.b(P.F(b,this,"index",null,r))},
i:function(a){return P.lU(this,"(",")")}}
P.dC.prototype={}
P.ae.prototype={
gG:function(a){return P.J.prototype.gG.call(C.K,this)},
i:function(a){return"null"}}
P.J.prototype={constructor:P.J,$iJ:1,
m:function(a,b){return this===b},
gG:function(a){return H.cw(this)},
i:function(a){return"Instance of '"+H.cx(this)+"'"},
toString:function(){return this.i(this)}}
P.bi.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fT.prototype={
gj:function(a){return a.length}}
W.dj.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dk.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dp.prototype={}
W.b0.prototype={
cn:function(a,b,c){if(c!=null)return a.getContext(b,P.l8(c))
return a.getContext(b)},
dR:function(a,b){return this.cn(a,b,null)},
$ib0:1}
W.bZ.prototype={$ibZ:1}
W.ai.prototype={
gj:function(a){return a.length}}
W.h6.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.c2.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.h7.prototype={}
W.ad.prototype={}
W.at.prototype={}
W.h8.prototype={
gj:function(a){return a.length}}
W.h9.prototype={
gj:function(a){return a.length}}
W.ha.prototype={
gj:function(a){return a.length}}
W.hc.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.c5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.c6.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
return r+H.t(s)+") "+H.t(this.gan(a))+" x "+H.t(this.gah(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bn(b)
if(s===r.gbv(b)){s=a.top
s.toString
s=s===r.gbx(b)&&this.gan(a)===r.gan(b)&&this.gah(a)===r.gah(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.c.gG(r)
s=a.top
s.toString
return W.kQ(r,C.c.gG(s),C.c.gG(this.gan(a)),C.c.gG(this.gah(a)))},
gd6:function(a){var s=a.bottom
s.toString
return s},
gcI:function(a){return a.height},
gah:function(a){var s=this.gcI(a)
s.toString
return s},
gbv:function(a){var s=a.left
s.toString
return s},
gcl:function(a){var s=a.right
s.toString
return s},
gbx:function(a){var s=a.top
s.toString
return s},
gd_:function(a){return a.width},
gan:function(a){var s=this.gd_(a)
s.toString
return s},
$iaa:1}
W.dv.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.hd.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.eQ.prototype={
gdw:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gP:function(a){var s=this.hC(this)
return new J.a3(s,s.length)}}
W.H.prototype={
gd9:function(a){var s=a.children
s.toString
return new W.eQ(a,s)},
gda:function(a){var s,r,q,p=a.clientLeft
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
$iH:1}
W.i.prototype={$ii:1}
W.c.prototype={
fT:function(a,b,c,d){if(c!=null)this.ed(a,b,c,!1)},
ed:function(a,b,c,d){return a.addEventListener(b,H.bQ(c,1),!1)},
$ic:1}
W.aI.prototype={$iaI:1}
W.dw.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.dx.prototype={
gj:function(a){return a.length}}
W.dz.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.hs.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.b5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.b6.prototype={
gde:function(a){var s=a.data
s.toString
return s},
$ib6:1}
W.bw.prototype={$ibw:1}
W.b9.prototype={$ib9:1}
W.hC.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.hT.prototype={
gj:function(a){return a.length}}
W.dO.prototype={
h:function(a,b){return P.aY(a.get(b))},
I:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaD:function(a){var s=[]
this.I(a,new W.hU(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iW:1}
W.hU.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dP.prototype={
h:function(a,b){return P.aY(a.get(b))},
I:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaD:function(a){var s=[]
this.I(a,new W.hV(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iW:1}
W.hV.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aM.prototype={$iaM:1}
W.dQ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.a9.prototype={$ia9:1}
W.eP.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b]).toString},
gP:function(a){var s=this.a.childNodes
return new W.ca(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.r.prototype={
hu:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lD(s,b,a)}catch(q){H.fQ(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.dY(a):s},
fD:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.ct.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aO.prototype={
gj:function(a){return a.length},
$iaO:1}
W.e3.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.e7.prototype={
h:function(a,b){return P.aY(a.get(b))},
I:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaD:function(a){var s=[]
this.I(a,new W.i7(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iW:1}
W.i7.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.e9.prototype={
gj:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.ed.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aR.prototype={$iaR:1}
W.ee.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.aS.prototype={
gj:function(a){return a.length},
$iaS:1}
W.ei.prototype={
h:function(a,b){return a.getItem(H.mQ(b))},
I:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaD:function(a){var s=[]
this.I(a,new W.ig(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iW:1}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)},
$S:35}
W.al.prototype={$ial:1}
W.aA.prototype={$iaA:1}
W.ag.prototype={$iag:1}
W.em.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.en.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.it.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aT.prototype={$iaT:1}
W.bj.prototype={$ibj:1}
W.es.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.ix.prototype={
gj:function(a){return a.length}}
W.aC.prototype={}
W.iJ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eK.prototype={
gj:function(a){return a.length}}
W.aU.prototype={
gh4:function(a){var s=a.deltaY
if(s!=null)return s
throw H.b(P.w("deltaY is not supported"))},
gh3:function(a){var s=a.deltaX
if(s!=null)return s
throw H.b(P.w("deltaX is not supported"))},
$iaU:1}
W.bK.prototype={
fE:function(a,b){var s=a.requestAnimationFrame(H.bQ(b,1))
s.toString
return s},
eo:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
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
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.cP.prototype={
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
r=J.bn(b)
if(s===r.gbv(b)){s=a.top
s.toString
if(s===r.gbx(b)){s=a.width
s.toString
if(s===r.gan(b)){s=a.height
s.toString
r=s===r.gah(b)
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
return W.kQ(p,s,r,C.c.gG(q))},
gcI:function(a){return a.height},
gah:function(a){var s=a.height
s.toString
return s},
gd_:function(a){return a.width},
gan:function(a){var s=a.width
s.toString
return s}}
W.f3.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.cT.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.fm.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.ft.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iq:1,
$ih:1,
$im:1}
W.jB.prototype={}
W.eZ.prototype={}
W.j1.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.jP.prototype={}
W.E.prototype={
gP:function(a){return new W.ca(a,this.gj(a))}}
W.ca.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lC(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gE:function(a){return H.T(this).c.a(this.d)}}
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
W.cZ.prototype={}
W.d_.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fq.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.d1.prototype={}
W.d2.prototype={}
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
P.d5.prototype={$ib6:1,
gde:function(a){return this.a}}
P.jd.prototype={
$1:function(a){this.a.push(P.l0(a))},
$S:43}
P.jj.prototype={
$2:function(a,b){this.a[a]=P.l0(b)},
$S:22}
P.dy.prototype={
gb3:function(){return new H.bb(new H.cO(this.b,new P.ho()),new P.hp())},
I:function(a,b){C.a.I(P.hB(this.gb3(),!1),b)},
k:function(a,b,c){var s=this.gb3()
J.lI(s.b.$1(J.ju(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.bp(this.gb3().a)},
h:function(a,b){var s=this.gb3()
return s.b.$1(J.ju(s.a,b))},
gP:function(a){var s=P.hB(this.gb3(),!1)
return new J.a3(s,s.length)}}
P.ho.prototype={
$1:function(a){return t.h.b(a)},
$S:23}
P.hp.prototype={
$1:function(a){return t.h.a(a)},
$S:28}
P.fi.prototype={
gcl:function(a){return this.$ti.c.a(this.a+this.c)},
gd6:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bn(b)
if(s===r.gbv(b)){q=o.b
if(q===r.gbx(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcl(b)&&p.a(q+o.d)===r.gd6(b)}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s=this,r=s.a,q=C.b.gG(r),p=s.b,o=C.b.gG(p),n=s.$ti.c
r=C.b.gG(n.a(r+s.c))
p=C.b.gG(n.a(p+s.d))
return H.mk(H.ih(H.ih(H.ih(H.ih(0,q),o),r),p))}}
P.aa.prototype={
gbv:function(a){return this.a},
gbx:function(a){return this.b},
gan:function(a){return this.c},
gah:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.dJ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bd.prototype={$ibd:1}
P.dZ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.i0.prototype={
gj:function(a){return a.length}}
P.el.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gd9:function(a){return new P.dy(a,new W.eP(a))}}
P.bk.prototype={$ibk:1}
P.et.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
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
P.dm.prototype={
h:function(a,b){return P.aY(a.get(b))},
I:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaD:function(a){var s=[]
this.I(a,new P.fZ(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iW:1}
P.fZ.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dn.prototype={
gj:function(a){return a.length}}
P.aH.prototype={}
P.e_.prototype={
gj:function(a){return a.length}}
P.eO.prototype={}
P.bF.prototype={
dN:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.fN(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.I.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.nJ(g))
return}if(t.l.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.jw("Incorrect number or type of arguments"))},
hz:function(a,b,c,d,e,f,g){return this.dN(a,b,c,d,e,f,g,null,null,null)},
$ibF:1}
P.ef.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.F(b,a,null,null,null))
s=P.aY(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.b(P.w("Cannot assign element of immutable List."))},
F:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fn.prototype={}
P.fo.prototype={}
K.fU.prototype={
aU:function(a,b){return!0},
i:function(a){return"all"}}
K.dA.prototype={
aU:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aU(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aN.prototype={
aU:function(a,b){return!this.dX(0,b)},
i:function(a){return"!["+this.bA(0)+"]"}}
K.S.prototype={
a_:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.d("May not create a Set with zero characters."))
s=new H.R(t.e)
for(r=new H.by(a,a.gj(a)),q=H.T(r).c;r.u();)s.k(0,q.a(r.d),!0)
p=P.hB(new H.aK(s),!0)
C.a.dW(p)
this.a=p},
aU:function(a,b){return C.a.J(this.a,b)},
i:function(a){return P.jK(this.a)}}
L.eg.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iy(this.a.L(0,b),[])
s.push(p)
return p},
h6:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aU(0,a))return p}return null},
i:function(a){return this.b},
cY:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.J(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.aK(s.c)
s=J.aG(s==null?[]:s)
for(;s.u();){r=s.gE(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.J(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bA(0))}return m.charCodeAt(0)==0?m:m}}
L.eq.prototype={
i:function(a){var s=H.lh(this.b,"\n","\\n"),r=H.lh(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.er.prototype={
i:function(a){return this.b}}
L.iv.prototype={
L:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eg(this,b,[])
s.k(0,b,r)}return r},
bi:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.er(a,P.N(s,s))
r.k(0,a,q)}return q},
dO:function(a){return this.hE(a)},
hE:function(a){var s=this
return P.n7(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$dO(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.T(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a0.length!==0)h=C.a.ci(a0,0)
else{if(!r.u()){q=3
break}h=n.a(r.d)}b.push(h);++k
g=d==null
f=g?null:d.h6(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.jK(b)
throw H.b(P.d("Untokenizable string [state: "+H.t(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.w("removeRange"))
P.jI(0,i,b.length)
b.splice(0,i-0)
C.a.bp(a0,b)
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
case 6:if(!f.c)c.push(h)
d=f.b
g=d.d
if(g!=null){e=P.jK(c)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.eq(g,e,k)
l=g}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.J(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mu()
case 1:return P.mv(o)}}},t.w)},
i:function(a){var s,r,q=new P.bi(""),p=this.d
if(p!=null)q.a=""+(p.cY()+"\n")
for(p=this.a,p=p.ghF(p),p=new H.ck(J.aG(p.a),p.b),s=H.T(p).Q[1];p.u();){r=s.a(p.a)
if(r!=this.d)q.a+=H.t(r==null?null:r.cY())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iy.prototype={
i:function(a){return this.b.b+": "+this.bA(0)}}
O.bs.prototype={
co:function(a,b,c){this.b=b
this.c=a},
aI:function(a,b){return this.co(a,null,b)},
cN:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cK:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.a3(s,s.length)},
F:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
l:function(a,b){var s,r
if(this.cN([b])){s=this.a
r=s.length
s.push(b)
this.cK(r,[b])}},
bp:function(a,b){var s,r
if(this.cN(b)){s=this.a
r=s.length
C.a.bp(s,b)
this.cK(r,b)}},
$ih:1}
O.cp.prototype={
gj:function(a){return this.a.length},
gn:function(){var s=this.b
return s==null?this.b=D.z():s},
aL:function(){var s=this.b
return s==null?null:s.w(null)},
ga2:function(a){var s=this.a
if(s.length>0)return C.a.gc8(s)
else return V.a1()},
bw:function(a){this.a.push(a)
this.aL()},
aF:function(){var s=this.a
if(s.length>0){s.pop()
this.aL()}}}
E.h0.prototype={}
E.bu.prototype={
sbk:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gn().C(0,s.gdK())
if(b!=null)b.gn().l(0,s.gdK())
s.aE(new D.u("shape",r,b))}},
sbd:function(a){var s,r,q=this
if(!J.G(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gn().C(0,q.gdI())
if(a!=null)a.gn().l(0,q.gdI())
r=q.r
q.aE(new D.u("mover",s,r))}},
aa:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aX(0,b,q)
if(!J.G(o,q.x)){s=q.x
q.x=o
q.aE(new D.u("matrix",s,o))}for(p=q.y.a,p=new J.a3(p,p.length),r=H.T(p).c;p.u();)r.a(p.d).aa(0,b)},
a8:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga2(q))
else o.push(p.K(0,q.ga2(q)))
q.aL()
a.cg(r.f)
s=C.a.gc8(a.dy)
if(r.d!=null)if(s!=null)s.bh(a,r)
for(p=r.y.a,p=new J.a3(p,p.length),o=H.T(p).c;p.u();)o.a(p.d).a8(a)
a.ce()
q.aF()},
aE:function(a){var s=this.z
return s==null?null:s.w(a)},
a4:function(){return this.aE(null)},
dL:function(a){this.e=null
this.aE(a)},
hk:function(){return this.dL(null)},
dJ:function(a){return this.aE(a)},
hj:function(){return this.dJ(null)},
dH:function(a){return this.aE(a)},
hg:function(){return this.dH(null)},
hf:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdG(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.b4()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a4()},
hi:function(a,b){var s,r
for(s=b.gP(b),r=this.gdG();s.u();)s.gE(s).gn().C(0,r)
this.a4()},
i:function(a){return"Unnamed entity"}}
E.bq.prototype={
i:function(a){return this.b}}
E.bD.prototype={
i:function(a){return this.b}}
E.eX.prototype={}
E.i3.prototype={
e2:function(a,b){var s=this
s.cy.gn().l(0,new E.i4(s))
s.db.gn().l(0,new E.i5(s))
s.dx.gn().l(0,new E.i6(s))},
ghr:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga2(q).K(0,s.ga2(s))
q=s}return q},
gcf:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.ghr().K(0,r.ga2(r))}return r},
gdP:function(){var s,r=this,q=r.cx
if(q==null){q=r.db
s=r.dx
s=r.cx=q.ga2(q).K(0,s.ga2(s))
q=s}return q},
cg:function(a){var s=this.dy
return s.push(a==null?C.a.gc8(s):a)},
ce:function(){var s=this.dy
if(s.length>1)s.pop()},
b5:function(a){var s,r=a.b
if(r.length===0)throw H.b(P.d("May not cache a shader with no name."))
s=this.fr
if(s.h_(0,r))throw H.b(P.d('Shader cache already contains a shader by the name "'+r+'".'))
s.k(0,r,a)}}
E.i4.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.i5.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.i6.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.ep.prototype={
cw:function(a){this.dM()},
cv:function(){return this.cw(null)},
gh8:function(){var s,r=this,q=Date.now(),p=C.b.a6(P.ke(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.P(q,!1)
return s/p},
cQ:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.c.c6(r*o)
r=s.clientHeight
r.toString
p=C.c.c6(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kD(C.j,this.ghv())}},
dM:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.v.eo(s)
r=W.l5(new E.is(this),t.H)
r.toString
C.v.fE(s,r)}},
ht:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cQ()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.P(p,!1)
q.y=P.ke(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aL()
p=q.db
C.a.sj(p.a,0)
p.aL()
p=q.dx
C.a.sj(p.a,0)
p.aL()
p=q.dy
C.a.sj(p,0)
p.push(null)
m.a8(q)}}catch(o){s=H.fQ(o)
r=H.k2(o)
P.k6("Error: "+H.t(s))
P.k6("Stack: "+H.t(r))
throw H.b(s)}}}
E.is.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.ht()}},
$S:27}
Z.eL.prototype={}
Z.bX.prototype={
H:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fQ(q)
r=P.d('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.t(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.bl.prototype={}
Z.ar.prototype={
a7:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
H:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.e(r,s)
r[s].H(a)}},
a5:function(a){var s,r,q
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
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cx(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(m,", ")+"\nAttrs:   "+C.a.p(o,", ")}}
Z.cb.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cx(this.c)+"'")+"]"}}
Z.ab.prototype={
gcq:function(a){var s=this.a,r=(s&$.Y().a)!==0?3:0
if((s&$.ao().a)!==0)r+=3
if((s&$.an().a)!==0)r+=3
if((s&$.aF().a)!==0)r+=2
if((s&$.ap().a)!==0)r+=3
if((s&$.dh().a)!==0)r+=3
if((s&$.di().a)!==0)r+=4
if((s&$.bU().a)!==0)++r
return(s&$.aZ().a)!==0?r+4:r},
fW:function(a){var s,r=$.Y(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.ao()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.an()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aF()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ap()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dh()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.di()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bU()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aZ()
if((q&r.a)!==0)if(s===a)return r
return $.lA()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ab))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.Y().a)!==0)s.push("Pos")
if((r&$.ao().a)!==0)s.push("Norm")
if((r&$.an().a)!==0)s.push("Binm")
if((r&$.aF().a)!==0)s.push("Txt2D")
if((r&$.ap().a)!==0)s.push("TxtCube")
if((r&$.dh().a)!==0)s.push("Clr3")
if((r&$.di().a)!==0)s.push("Clr4")
if((r&$.bU().a)!==0)s.push("Weight")
if((r&$.aZ().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.h2.prototype={}
D.b4.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
C:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.J(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.C(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.J(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.C(p,b)
s=p===!0||s}return s},
w:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.Q():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.I(P.hB(p,!0),new D.hl(s))
r=q.b
if(r!=null){q.b=[]
C.a.I(r,new D.hm(s))}return!0},
bY:function(){return this.w(null)},
au:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.w(s)}}}}
D.hl.prototype={
$1:function(a){a.$1(this.a)},
$S:14}
D.hm.prototype={
$1:function(a){a.$1(this.a)},
$S:14}
D.Q.prototype={}
D.au.prototype={}
D.av.prototype={}
D.u.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.t(this.d)+" => "+H.t(this.e)}}
X.bY.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bY))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dH.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dH))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hw.prototype={}
X.ci.prototype={}
X.hD.prototype={
b2:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.O(o.a+b.a,o.b+b.b)
o=q.a.gaR()
s=$.Z
if(s==null)s=$.Z=new V.O(0,0)
r=q.x
q.z=new P.P(p,!1)
q.x=n
return new X.bA(a,s,r,o,n)},
cd:function(a,b){this.r=a.a
return!1},
bf:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
be:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.b2(a,b))
return!0},
ho:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaR()
r=this.x
Date.now()
q.w(new X.bB(new V.a2(a.a,a.b),s,r))
return!0},
f6:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.w(new X.ci(c,q.a.gaR(),b))
q.y=new P.P(s,!1)
s=$.Z
q.x=s==null?$.Z=new V.O(0,0):s}}
X.a4.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a4))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.p(s,"+")}}
X.bA.prototype={}
X.hW.prototype={
bH:function(a,b,c){var s=this,r=new P.P(Date.now(),!1),q=s.a.gaR(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bA(a,p,o,q,b)},
cd:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.w(this.bH(a,b,!0))
return!0},
bf:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.w(r.bH(a,b,!0))
return!0},
be:function(a,b){var s=this.d
if(s==null)return!1
s.w(this.bH(a,b,!1))
return!0},
hp:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaR()
Date.now()
r.w(new X.bB(new V.a2(a.a,a.b),s,b))
return!0}}
X.bB.prototype={}
X.e4.prototype={}
X.cF.prototype={}
X.iw.prototype={
b2:function(a,b){var s,r,q,p,o=this,n=new P.P(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.Z
if(r==null){r=new V.O(0,0)
$.Z=r
s=r}else s=r}r=o.a.gaR()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cF(q,p,r,s)},
hn:function(a){var s=this.b
if(s==null)return!1
s.w(this.b2(a,!0))
return!0},
hl:function(a){var s=this.c
if(s==null)return!1
s.w(this.b2(a,!0))
return!0},
hm:function(a){var s=this.d
if(s==null)return!1
s.w(this.b2(a,!1))
return!0}}
X.eJ.prototype={
gbb:function(a){var s=this.b
return s==null?this.b=new X.hw(new X.a4(!1,!1,!1),P.kj(t.S)):s},
gak:function(){var s,r=this.c
if(r==null){r=$.Z
if(r==null){r=$.Z=new V.O(0,0)
s=r}else s=r
r=this.c=new X.hW(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gai:function(){var s=this.d
if(s==null){s=$.Z
if(s==null)s=$.Z=new V.O(0,0)
s=this.d=new X.hD(this,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return s},
gaW:function(){var s,r=this.e
if(r==null){r=$.Z
if(r==null){r=$.Z=new V.O(0,0)
s=r}else s=r
r=this.e=new X.iw(this,r,s,new P.P(Date.now(),!1),new P.P(Date.now(),!1))}return r},
gaR:function(){var s=this.a
return V.i1(0,0,C.h.gda(s).c,C.h.gda(s).d)},
cF:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dH(p,new X.a4(s,r,q))},
aP:function(a){var s,r,q=this.gbb(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a4(p,s,r)},
bP:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gbb(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a4(s,r===!0,q===!0)},
aB:function(a){var s,r,q,p
if(a==null){s=$.Z
return s==null?$.Z=new V.O(0,0):s}s=this.a.getBoundingClientRect()
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
b4:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.a2(r,s)},
bL:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.c.Z(n)
m=o.pageY
m.toString
C.c.Z(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.c.Z(l)
l=o.pageY
l.toString
l=C.c.Z(l)
k=j.top
k.toString
s.push(new V.O(n-m,l-k))}return s},
ay:function(a){var s,r,q,p
if(a==null)return new X.bY(0,new X.a4(!1,!1,!1))
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
return new X.bY(s,new X.a4(r,q,p))},
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
f0:function(a){return this.f=!0},
eL:function(a){return this.f=!1},
eR:function(a){if(this.f&&this.bI(a))a.preventDefault()},
f4:function(a){var s,r,q=this
if(!q.f)return
s=q.cF(a)
r=q.gbb(q)
r.c=s.b
r.d.l(0,s.a)},
f2:function(a){var s,r,q=this
if(!q.f)return
s=q.cF(a)
r=q.gbb(q)
r.c=s.b
r.d.C(0,s.a)},
f8:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aP(a)
if(p.x){s=p.ay(a)
r=p.b4(a)
if(p.gai().cd(s,r))a.preventDefault()
return}s=p.ay(a)
q=p.aB(a)
if(p.gak().cd(s,q))a.preventDefault()},
fc:function(a){var s,r,q,p=this
p.aP(a)
s=p.ay(a)
if(p.x){r=p.b4(a)
if(p.gai().bf(s,r))a.preventDefault()
return}q=p.aB(a)
if(p.gak().bf(s,q))a.preventDefault()},
eV:function(a){var s,r,q,p=this
if(!p.bI(a)){p.aP(a)
s=p.ay(a)
if(p.x){r=p.b4(a)
if(p.gai().bf(s,r))a.preventDefault()
return}q=p.aB(a)
if(p.gak().bf(s,q))a.preventDefault()}},
fa:function(a){var s,r,q,p=this
p.aP(a)
s=p.ay(a)
if(p.x){r=p.b4(a)
if(p.gai().be(s,r))a.preventDefault()
return}q=p.aB(a)
if(p.gak().be(s,q))a.preventDefault()},
eT:function(a){var s,r,q,p=this
if(!p.bI(a)){p.aP(a)
s=p.ay(a)
if(p.x){r=p.b4(a)
if(p.gai().be(s,r))a.preventDefault()
return}q=p.aB(a)
if(p.gak().be(s,q))a.preventDefault()}},
fe:function(a){var s,r,q=this
q.aP(a)
s=new V.a2(C.u.gh3(a),C.u.gh4(a)).K(0,q.Q)
if(q.x){if(q.gai().ho(s))a.preventDefault()
return}r=q.aB(a)
if(q.gak().hp(s,r))a.preventDefault()},
fg:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ay(q.y)
r=q.aB(q.y)
q.gai().f6(s,r,p)}},
fz:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bP(a)
s=r.bL(a)
if(r.gaW().hn(s))a.preventDefault()},
ft:function(a){var s
this.bP(a)
s=this.bL(a)
if(this.gaW().hl(s))a.preventDefault()},
fv:function(a){var s
this.bP(a)
s=this.bL(a)
if(this.gaW().hm(s))a.preventDefault()}}
D.c3.prototype={
ax:function(a){var s=this.r
return s==null?null:s.w(a)},
e5:function(){return this.ax(null)},
$icf:1}
D.cg.prototype={
gn:function(){var s=this.y
return s==null?this.y=D.z():s},
gdA:function(){var s=this.z
return s==null?this.z=D.z():s},
ax:function(a){var s=this.y
return s==null?null:s.w(a)},
cM:function(a){var s=this.z
return s==null?null:s.w(a)},
f5:function(){return this.cM(null)},
fi:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.ej(a[r]))return!1
return!0},
eF:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcL(),q=this.f,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.b4()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ax(new D.au())},
fm:function(a,b){var s,r,q,p
for(s=b.gP(b),r=this.gcL(),q=this.e;s.u();){p=s.gE(s)
C.a.C(q,p)
p.gn().C(0,r)}this.ax(new D.av())},
ej:function(a){var s=C.a.J(this.f,a)
return s}}
V.M.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.a7.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a7))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"}}
V.hj.prototype={}
V.cn.prototype={
R:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cn))return!1
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
i:function(a){var s,r,q,p,o=this,n=V.bS([o.a,o.d,o.r],3,0),m=V.bS([o.b,o.e,o.x],3,0),l=V.bS([o.c,o.f,o.y],3,0),k=n.length
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
V.bz.prototype={
R:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
c7:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.y().toString
if(Math.abs(b3-0)<1e-9)return V.a1()
s=1/b3
r=-l
q=-a2
return V.aL((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
K:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aL(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
by:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.x(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bj:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.K(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bz))return!1
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
B:function(a){var s,r,q,p,o,n=this,m=V.bS([n.a,n.e,n.y,n.cx],3,0),l=V.bS([n.b,n.f,n.z,n.cy],3,0),k=V.bS([n.c,n.r,n.Q,n.db],3,0),j=V.bS([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
v:function(){return this.B("")}}
V.O.prototype={
aw:function(a){return new V.a2(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"},
v:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.K.prototype={
T:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
aJ:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
K:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.K))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"},
v:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
V.aP.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aP))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"}}
V.e6.prototype={
gaV:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.e6))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.v(s.a,3,0)+", "+V.v(s.b,3,0)+", "+V.v(s.c,3,0)+", "+V.v(s.d,3,0)+"]"}}
V.a2.prototype={
c9:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b},
K:function(a,b){return new V.a2(this.a*b,this.b*b)},
aq:function(a,b){var s
$.y().toString
if(Math.abs(b-0)<1e-9){s=$.iM
return s==null?$.iM=new V.a2(0,0):s}return new V.a2(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
s=b.a
$.y().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+"]"}}
V.x.prototype={
c9:function(a){return Math.sqrt(this.ad(this))},
ad:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ca:function(a,b){return new V.x(V.k4(this.a,a.a,b),V.k4(this.b,a.b,b),V.k4(this.c,a.c,b))},
D:function(){var s=this,r=Math.sqrt(s.ad(s))
if(r===1)return s
return s.aq(0,r)},
aC:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.x(s*r-q*p,q*o-n*r,n*p-s*o)},
T:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
aY:function(a){return new V.x(-this.a,-this.b,-this.c)},
K:function(a,b){return new V.x(this.a*b,this.b*b,this.c*b)},
aq:function(a,b){$.y().toString
if(Math.abs(b-0)<1e-9)return V.cL()
return new V.x(this.a/b,this.b/b,this.c/b)},
dz:function(){$.y().toString
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
i:function(a){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"},
v:function(){return"["+V.v(this.a,3,0)+", "+V.v(this.b,3,0)+", "+V.v(this.c,3,0)+"]"}}
U.h5.prototype={
bB:function(a){var s=V.o6(a,this.c,this.b)
return s},
gn:function(){var s=this.y
return s==null?this.y=D.z():s},
U:function(a){var s=this.y
return s==null?null:s.w(a)},
sdQ:function(a,b){},
sdD:function(a){var s,r=this,q=r.b
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bB(s)}r.U(new D.u("maximumLocation",q,r.b))}},
sdF:function(a){var s,r=this,q=r.c
$.y().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bB(s)}r.U(new D.u("minimumLocation",q,r.c))}},
sac:function(a,b){var s,r=this
b=r.bB(b)
s=r.d
$.y().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.U(new D.u("location",s,b))}},
sdE:function(a){var s,r,q=this,p=q.e
$.y().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.U(new D.u("maximumVelocity",p,a))}},
sab:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.U(new D.u("velocity",r,a))}},
sdd:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.y().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.U(new D.u("dampening",s,a))}},
aa:function(a,b){var s,r,q,p=this,o=p.f
$.y().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sac(0,p.d+s*b)
o=p.x
$.y().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sab(s)}}}
U.c0.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.z():s},
aX:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c0))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bv.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.z():s},
U:function(a){var s=this.e
return s==null?null:s.w(a)},
ar:function(){return this.U(null)},
e7:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gbl(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gn()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.U(new D.au())},
fk:function(a,b){var s,r
for(s=b.gP(b),r=this.gbl();s.u();)s.gE(s).gn().C(0,r)
this.U(new D.av())},
aX:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a3(o,o.length),n=H.T(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.aX(0,b,c)
s=s==null?q:q.K(0,s)}}p.f=s==null?V.a1():s
o=p.e
if(o!=null)o.au(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bv))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(p>=q.length)return H.e(q,p)
if(!J.G(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia5:1}
U.a5.prototype={}
U.cJ.prototype={
gn:function(){var s=this.fx
return s==null?this.fx=D.z():s},
U:function(a){var s=this.fx
return s==null?null:s.w(a)},
ar:function(){return this.U(null)},
bT:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gak()
r=s.b
s=r==null?s.b=D.z():r
s.l(0,q.gew())
s=a.gak()
r=s.d
s=r==null?s.d=D.z():r
s.l(0,q.gey())
s=a.gak()
r=s.c
s=r==null?s.c=D.z():r
s.l(0,q.geA())
s=a.gai()
r=s.f
s=r==null?s.f=D.z():r
s.l(0,q.ger())
s=a.gai()
r=s.d
s=r==null?s.d=D.z():r
s.l(0,q.geu())
s=a.gaW()
r=s.b
s=r==null?s.b=D.z():r
s.l(0,q.gfQ())
s=a.gaW()
r=s.d
s=r==null?s.d=D.z():r
s.l(0,q.gfO())
s=a.gaW()
r=s.c
s=r==null?s.c=D.z():r
s.l(0,q.gfM())
return!0},
aN:function(a){return new V.a2(a.a,a.b)},
ex:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
ez:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aw(a.d)
if(s.ad(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aN(a.y.aw(r).K(0,2).aq(0,s.gaV()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sab(0)
p.sab(0)
n.dx=n.aN(a.z.aw(r).K(0,2).aq(0,s.gaV()))
n.ar()},
eB:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ad(s)>0.0001){r.c.sab(-r.dx.a*10*2.5)
r.b.sab(-r.dx.b*10*2.5)
r.ar()}},
es:function(a){var s=this
if(t.D.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
ev:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.aN(a.y.aw(r).K(0,2).aq(0,s.gaV()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sab(0)
p.sab(0)
n.dx=n.aN(a.z.aw(r).K(0,2).aq(0,s.gaV()))
n.ar()},
fR:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fP:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aw(a.d)
if(s.ad(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aN(a.y.aw(r).K(0,2).aq(0,s.gaV()))
p=n.c
p.sac(0,-q.a*2.5+n.cy)
o=n.b
o.sac(0,-q.b*2.5+n.db)
o.sab(0)
p.sab(0)
n.dx=n.aN(a.z.aw(r).K(0,2).aq(0,s.gaV()))
n.ar()},
fN:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.ad(s)>0.0001){r.c.sab(-r.dx.a*10*2.5)
r.b.sab(-r.dx.b*10*2.5)
r.ar()}},
aX:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.aa(0,s)
n=p.b
n.aa(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.aL(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.K(0,V.aL(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$ia5:1}
U.cK.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.z():s},
U:function(a){var s=this.r
return s==null?null:s.w(a)},
bT:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gak()
r=s.e
s=r==null?s.e=D.z():r
r=this.geC()
s.l(0,r)
s=a.gai()
q=s.e;(q==null?s.e=D.z():q).l(0,r)
return!0},
eD:function(a){var s=this,r=s.b,q=s.a
if(!r.m(0,q==null?null:q.gbb(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.U(new D.u("zoom",r,q))}},
aX:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.kn(s,s,s)}return r.f},
$ia5:1}
M.c_.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.z():s},
W:function(a){var s=this.r
return s==null?null:s.w(a)},
b1:function(){return this.W(null)},
fo:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gV(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q].gn()
o=p.a;(o==null?p.a=[]:o).push(r)}this.W(new D.au())},
fq:function(a,b){var s,r
for(s=b.gP(b),r=this.gV();s.u();)s.gE(s).gn().C(0,r)
this.W(new D.av())},
a8:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a3(s,s.length),r=H.T(s).c;s.u();)r.a(s.d).a8(a)
q.f=!1},
$ibf:1}
M.c1.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.z():s},
W:function(a){var s=this.r
return s==null?null:s.w(a)},
b1:function(){return this.W(null)},
sb7:function(a){var s,r,q=this
if(a==null)a=new X.ht()
s=q.b
if(s!==a){if(s!=null)s.gn().C(0,q.gV())
r=q.b
q.b=a
a.gn().l(0,q.gV())
q.W(new D.u("camera",r,q.b))}},
saG:function(a,b){var s,r,q=this
if(b==null)b=X.jC(!0,null)
s=q.c
if(s!==b){if(s!=null)s.gn().C(0,q.gV())
r=q.c
q.c=b
b.gn().l(0,q.gV())
q.W(new D.u("target",r,q.c))}},
sav:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().C(0,r.gV())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gV())
r.W(new D.u("technique",s,r.d))}},
a8:function(a){var s,r=this
a.cg(r.d)
s=r.c
if(s!=null)s.H(a)
s=r.b
if(s!=null)s.H(a)
s=r.d
if(s!=null)s.aa(0,a)
s=r.e
s.aa(0,a)
s.a8(a)
s=r.b
if(s!=null)s.a5(a)
s=r.c
if(s!=null)s.a5(a)
a.ce()},
$ibf:1}
M.c8.prototype={
W:function(a){var s=this.y
return s==null?null:s.w(a)},
b1:function(){return this.W(null)},
eN:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gV(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.b4()
n=o.a;(n==null?o.a=[]:n).push(r)}this.W(new D.au())},
eP:function(a,b){var s,r
for(s=b.gP(b),r=this.gV();s.u();)s.gE(s).gn().C(0,r)
this.W(new D.av())},
sb7:function(a){var s,r,q=this
if(a==null)a=X.kr(null)
s=q.b
if(s!==a){if(s!=null)s.gn().C(0,q.gV())
r=q.b
q.b=a
a.gn().l(0,q.gV())
q.W(new D.u("camera",r,q.b))}},
saG:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gn().C(0,r.gV())
s=r.c
r.c=b
b.gn().l(0,r.gV())
r.W(new D.u("target",s,r.c))}},
sav:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gn().C(0,r.gV())
s=r.d
r.d=a
if(a!=null)a.gn().l(0,r.gV())
r.W(new D.u("technique",s,r.d))}},
gn:function(){var s=this.y
return s==null?this.y=D.z():s},
a8:function(a){var s,r,q,p=this
a.cg(p.d)
s=p.c
if(s!=null)s.H(a)
s=p.b
if(s!=null)s.H(a)
s=p.d
if(s!=null)s.aa(0,a)
for(s=p.e.a,r=new J.a3(s,s.length),q=H.T(r).c;r.u();)q.a(r.d).aa(0,a)
for(s=new J.a3(s,s.length),r=H.T(s).c;s.u();)r.a(s.d).a8(a)
if(p.b!=null){a.cy.aF()
a.db.aF()}s=p.c
if(s!=null)s.a5(a)
a.ce()},
$ibf:1}
A.fW.prototype={}
A.fX.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
h5:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
b8:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.a8.prototype={
gam:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
m:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.a8))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.c4.prototype={
cW:function(a,b){if(b!=null&&b.d)if(a!=null)a.dU(b)}}
A.cl.prototype={
e1:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.bi(""),d0=c8.fr
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
A.nm(c8,c9)
A.no(c8,c9)
A.nn(c8,c9)
A.nq(c8,c9)
A.nr(c8,c9)
A.np(c8,c9)
A.ns(c8,c9)
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
c3.ba(0,s.charCodeAt(0)==0?s:s,A.nl(c8))
c3.y=c3.gN(c3).h(0,"posAttr")
c3.Q=c3.gN(c3).h(0,"normAttr")
c3.z=c3.gN(c3).h(0,"binmAttr")
c3.ch=c3.gN(c3).h(0,"txt2DAttr")
c3.cx=c3.gN(c3).h(0,"txtCubeAttr")
c3.cy=c3.gN(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gq().t(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gq().t(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gq().t(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gq().t(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gq().t(0,"viewMat"))
if(c8.x1)c3.go=t.Q.a(c3.gq().t(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gq().t(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gq().t(0,"colorMat"))
c3.k3=[]
s=c8.aT
if(s>0){c3.k2=t.y.a(c3.gq().t(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.d(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.d(c6+q+c7))
r.push(d0.a(l))}}d0=c8.a
if(d0.a)c3.k4=t.g.a(c3.gq().t(0,"emissionClr"))
if(d0.c)c3.r2=t.a.a(c3.gq().t(0,"emissionTxt"))
d0=c8.b
if(d0.a)c3.rx=t.g.a(c3.gq().t(0,"ambientClr"))
if(d0.c)c3.x1=t.a.a(c3.gq().t(0,"ambientTxt"))
d0=c8.c
if(d0.a)c3.x2=t.g.a(c3.gq().t(0,"diffuseClr"))
if(d0.c)c3.y2=t.a.a(c3.gq().t(0,"diffuseTxt"))
d0=c8.d
if(d0.a)c3.aT=t.g.a(c3.gq().t(0,"invDiffuseClr"))
if(d0.c)c3.bt=t.a.a(c3.gq().t(0,"invDiffuseTxt"))
d0=c8.e
s=d0.a
if(!s)r=d0.c
else r=!0
if(r){c3.dj=t.n.a(c3.gq().t(0,"shininess"))
if(s)c3.dh=t.g.a(c3.gq().t(0,"specularClr"))
if(d0.c)c3.di=t.a.a(c3.gq().t(0,"specularTxt"))}if(c8.f.c)c3.dk=t.a.a(c3.gq().t(0,"bumpTxt"))
if(c8.db){d0=t.a
c3.dl=d0.a(c3.gq().t(0,"envSampler"))
s=c8.r
if(s.a)c3.dm=t.g.a(c3.gq().t(0,"reflectClr"))
if(s.c)c3.dn=d0.a(c3.gq().t(0,"reflectTxt"))
s=c8.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c3.dq=t.n.a(c3.gq().t(0,"refraction"))
if(r)c3.dr=t.g.a(c3.gq().t(0,"refractClr"))
if(s.c)c3.ds=d0.a(c3.gq().t(0,"refractTxt"))}}d0=c8.y
if(d0.a)c3.dt=t.n.a(c3.gq().t(0,"alpha"))
if(d0.c)c3.du=t.a.a(c3.gq().t(0,"alphaTxt"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.bZ=P.N(r,t.W)
c3.c_=P.N(r,t.J)
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
a3=a2}g.push(new A.ez(l,d,c,a3,a2,a1))}c3.c_.k(0,i,g)
o=c3.bZ
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.c0=P.N(r,t.W)
c3.c1=P.N(r,t.L)
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
g.push(new A.eA(a6,a5,a4,l,d,a7))}c3.c1.k(0,i,g)
o=c3.c0
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.k(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.c2=P.N(r,t.W)
c3.c3=P.N(r,t.U)
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
a3=a2}g.push(new A.eC(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.c3.k(0,i,g)
a8=c3.c2
m=c3.r
if(m==null)H.f(P.d(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.d(c6+a9+c7))
a8.k(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.c4=P.N(s,t.W)
c3.c5=P.N(s,t.R)
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
g.push(new A.eE(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.c5.k(0,i,g)
f=c3.c4
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
f.k(0,i,s.a(l))}}}},
af:function(a,b){}}
A.b_.prototype={
i:function(a){return"barLight"+this.a}}
A.b2.prototype={
i:function(a){return"dirLight"+this.a}}
A.be.prototype={
i:function(a){return"pointLight"+this.a}}
A.bh.prototype={
i:function(a){return"spotLight"+this.a}}
A.hH.prototype={
i:function(a){return this.bs}}
A.ez.prototype={}
A.eA.prototype={}
A.eC.prototype={}
A.eE.prototype={}
A.cu.prototype={}
A.hY.prototype={
i:function(a){return this.e}}
A.ay.prototype={
ba:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cG(b,35633)
r=n.cG(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaz(),s)
q.attachShader(n.gaz(),r)
q.linkProgram(n.gaz())
if(!H.l_(q.getProgramParameter(n.gaz(),35714))){o=q.getProgramInfoLog(n.gaz())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.d("Failed to link shader: "+o))}n.fI()
n.fK()},
gN:function(a){var s=this.f
if(s==null)throw H.b(P.d("Must initialize the shader prior to getting the attributes."))
return s},
gq:function(){var s=this.r
if(s==null)throw H.b(P.d(u.C))
return s},
gaz:function(){var s=this.e
if(s==null)throw H.b(P.d(u.F))
return s},
H:function(a){a.a.useProgram(this.e)
this.gN(this).h5()},
cG:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.l_(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.b(P.d('Error compiling shader "'+H.t(q)+'": '+s))}return q},
fI:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.fM(l.getProgramParameter(o.gaz(),35721))
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
fK:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.fM(j.getProgramParameter(m.gaz(),35718))
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
k.push(m.h2(o,n,q,p))}m.r=new A.iH(k)},
aM:function(a,b,c){var s=this.a
if(a===1)return new A.cG(s,b,c)
else return A.jM(s,this.e,b,a,c)},
el:function(a,b,c){var s=this.a
if(a===1)return new A.cI(s,b,c)
else return A.jM(s,this.e,b,a,c)},
em:function(a,b,c){var s=this.a
if(a===1)return new A.eD(s,b,c)
else return A.jM(s,this.e,b,a,c)},
bo:function(a,b){return new P.f_(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
h2:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aM(b,c,d)
case 5121:return s.aM(b,c,d)
case 5122:return s.aM(b,c,d)
case 5123:return s.aM(b,c,d)
case 5124:return s.aM(b,c,d)
case 5125:return s.aM(b,c,d)
case 5126:return new A.ev(s.a,c,d)
case 35664:return new A.ew(s.a,c,d)
case 35665:return new A.ex(s.a,c,d)
case 35666:return new A.ey(s.a,c,d)
case 35667:return new A.iE(s.a,c,d)
case 35668:return new A.iF(s.a,c,d)
case 35669:return new A.iG(s.a,c,d)
case 35674:return new A.iI(s.a,c,d)
case 35675:return new A.eB(s.a,c,d)
case 35676:return new A.cH(s.a,c,d)
case 35678:return s.el(b,c,d)
case 35680:return s.em(b,c,d)
case 35670:throw H.b(s.bo("BOOL",c))
case 35671:throw H.b(s.bo("BOOL_VEC2",c))
case 35672:throw H.b(s.bo("BOOL_VEC3",c))
case 35673:throw H.b(s.bo("BOOL_VEC4",c))
default:throw H.b(P.d("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.bt.prototype={
i:function(a){return this.b}}
A.cB.prototype={}
A.cD.prototype={
e3:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.C,b="Required uniform value, ",a=", was not defined or used in shader."
""+"attribute vec3 posAttr;\n"
""+"attribute vec3 posAttr;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n"
s=""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n"
d.ba(0,s.charCodeAt(0)==0?s:s,A.ml(a0,a1))
d.x=d.gN(d).h(0,"posAttr")
d.y=t.y.a(d.gq().t(0,"txtCount"))
d.z=t.F.a(d.gq().t(0,"backClr"))
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
A.iC.prototype={}
A.iH.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
t:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.d("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.v()},
v:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cG.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iE.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iF.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iG.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iD.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.ev.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.ew.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.ex.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.ey.prototype={
dT:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.iI.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eB.prototype={
X:function(a){var s=new Float32Array(H.bN(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cH.prototype={
X:function(a){var s=new Float32Array(H.bN(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.cI.prototype={
dU:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.eD.prototype={
cp:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jc.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.ca(q.b,b).ca(q.d.ca(q.c,b),c)
a.sac(0,new V.K(p.a,p.b,p.c))
a.shA(p.D())
q=1-b
s=1-c
s=new V.aP(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.G(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a4()}},
$S:19}
F.jt.prototype={
$1:function(a){return new V.K(Math.cos(a),Math.sin(a),0)},
$S:33}
F.jk.prototype={
$3:function(a,b,c){var s,r,q,p,o,n=this,m=b*6.283185307179586,l=n.a,k=n.b,j=J.k8(l.$1(m),k)
k=J.k8(l.$1(m+3.141592653589793/n.c),k).aJ(0,j)
s=new V.x(k.a,k.b,k.c).D()
r=$.kK
if(r==null){r=new V.x(1,0,0)
$.kK=r}q=s.aC(!s.m(0,r)?V.kM():r).D()
r=q.aC(s).D()
p=c*6.283185307179586
l=Math.cos(p)
k=n.d
o=Math.sin(p)
l=r.K(0,l*k)
k=q.K(0,o*k)
a.sac(0,j.T(0,new V.K(l.a-k.a,l.b-k.b,l.c-k.c)))},
$S:19}
F.aj.prototype={
aK:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.b(P.d("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.b(P.d("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.bQ(a)
s.bR(b)
s.fH(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gO().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a4()}},
b9:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.C(r.gO().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a4()}}s.bM()
s.bN()
s.fC()},
bQ:function(a){this.a=a
a.gO().b.push(this)},
bR:function(a){this.b=a
a.gO().c.push(this)},
fH:function(a){this.c=a
a.gO().d.push(this)},
bM:function(){var s=this.a
if(s!=null)C.a.C(s.gO().b,this)
this.a=null},
bN:function(){var s=this.b
if(s!=null)C.a.C(s.gO().c,this)
this.b=null},
fC:function(){var s=this.c
if(s!=null)C.a.C(s.gO().d,this)
this.c=null},
ef:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cL()
if(n!=null)q=q.T(0,n)
if(s!=null)q=q.T(0,s)
if(r!=null)q=q.T(0,r)
if(q.dz())return p
return q.D()},
eh:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.aJ(0,n)
q=new V.x(o.a,o.b,o.c).D()
o=r.aJ(0,n)
return q.aC(new V.x(o.a,o.b,o.c).D()).D()},
bV:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.ef()
if(s==null){s=q.eh()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a4()}return!0},
ee:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cL()
if(n!=null)q=q.T(0,n)
if(s!=null)q=q.T(0,s)
if(r!=null)q=q.T(0,r)
if(q.dz())return p
return q.D()},
eg:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.y().toString
if(Math.abs(p-0)<1e-9){j=b.aJ(0,e)
o=new V.x(j.a,j.b,j.c).D()
if(q.a-r.a<0)o=o.aY(0)}else{n=(j-s.b)/p
j=b.aJ(0,e).K(0,n).T(0,e).aJ(0,h)
o=new V.x(j.a,j.b,j.c).D()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.aY(0)}m=l.d
if(m!=null){m=m.D()
o=m.aC(o).D().aC(m).D()}return o},
bU:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.ee()
if(s==null){s=q.eg()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a4()}return!0},
gfY:function(a){var s=this
if(J.G(s.a,s.b))return!0
if(J.G(s.b,s.c))return!0
if(J.G(s.c,s.a))return!0
return!1},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
B:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gA(p)
p=a+C.d.al(C.b.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gA(o)
p=p+C.d.al(C.b.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gA(o)
s=p+C.d.al(C.b.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.v()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.v()
return s+((p==null?"-":p)+"}")},
v:function(){return this.B("")}}
F.hn.prototype={}
F.id.prototype={
bc:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.c
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.c
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.a
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gA(q)
s=c.c
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.c
q=q==null?r:q.gA(q)
s=c.b
q=q==(s==null?r:s.gA(s))}else q=!1
return q}else return!1}}}}
F.hx.prototype={
e0:function(a,b){var s=this,r=a.a
if(r==null)throw H.b(P.d("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.b(P.d("May not create a line with vertices attached to different shapes."))
s.bQ(a)
s.bR(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga9(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a4()}},
b9:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.a.C(r.ga9(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a4()}}s.bM()
s.bN()},
bQ:function(a){this.a=a
a.ga9(a).b.push(this)},
bR:function(a){this.b=a
a.ga9(a).c.push(this)},
bM:function(){var s=this.a
if(s!=null)C.a.C(s.ga9(s).b,this)
this.a=null},
bN:function(){var s=this.b
if(s!=null)C.a.C(s.ga9(s).c,this)
this.b=null},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
B:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gA(s)
s=a+C.d.al(C.b.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gA(r)
return s+C.d.al(C.b.i(r==null?-1:r),0)},
v:function(){return this.B("")}}
F.hy.prototype={}
F.iB.prototype={
bc:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gA(q)
s=c.a
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.b
return q==(s==null?r:s.gA(s))}else{q=b.a
q=q==null?r:q.gA(q)
s=c.b
if(q==(s==null?r:s.gA(s))){q=b.b
q=q==null?r:q.gA(q)
s=c.a
return q==(s==null?r:s.gA(s))}else return!1}}}
F.i_.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gA(s)
return a+C.d.al(C.b.i(s),0)},
v:function(){return this.B("")}}
F.i8.prototype={
gS:function(){var s=this.a
return s==null?this.a=new F.p(this,[]):s},
gbg:function(a){var s=this.b
return s==null?this.b=new F.bg(this,[]):s},
ga9:function(a){var s=this.c
return s==null?this.c=new F.cA(this,[]):s},
gO:function(){var s=this.d
return s==null?this.d=new F.cz(this,[]):s},
gn:function(){var s=this.e
return s==null?this.e=D.z():s},
cc:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gS().Y()
s=d.gS().c.length
for(b=a.gS().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
o.l(0,p.h1())}d.gS().Y()
for(b=a.gbg(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bg(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,j)
o=new F.i_()
if(j.a==null)H.f(P.d("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.cN([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bg(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.w(c)}}}for(b=a.ga9(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cA(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,g)
new F.hx().e0(h,g)}for(b=a.gO().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.p(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.p(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.p(l,[]):k).Y()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cz(d,[]):m).a
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,h)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,g)
m=o.a;(m==null?o.a=new F.p(o,[]):m).l(0,e)
new F.aj().aK(h,g,e)}b=d.e
if(b!=null)b.au(0)},
ap:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gO().ap()||!1
if(!r.gS().ap())s=!1
q=r.e
if(q!=null)q.au(0)
return s},
aQ:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gO().aQ()||!1
if(!r.gS().aQ())s=!1
q=r.e
if(q!=null)q.au(0)
return s},
br:function(){var s=this.e
if(s!=null)++s.d
this.gS().br()
s=this.e
if(s!=null)s.au(0)
return!0},
hd:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.gS().c.slice(0)
for(;s.length!==0;){r=C.a.gh7(s)
C.a.ci(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(a.bc(0,r,o)){q.push(o)
C.a.ci(s,p)}}if(q.length>1)b.cc(q)}n.gS().Y()
n.ga9(n).cj()
n.gO().cj()
n.gbg(n).hs()
n.ga9(n).ck(new F.iB())
n.gO().ck(new F.id())
m=n.e
if(m!=null)m.au(0)},
b6:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gS().c.length,c=$.Y(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.ao().a)!==0)++a
if((b&$.an().a)!==0)++a
if((b&$.aF().a)!==0)++a
if((b&$.ap().a)!==0)++a
if((b&$.dh().a)!==0)++a
if((b&$.di().a)!==0)++a
if((b&$.bU().a)!==0)++a
if((b&$.aZ().a)!==0)++a
s=a1.gcq(a1)
r=P.hA(d*s,0,!1)
e.a=0
q=P.m_(a,new F.i9(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.bN(r)),35044)
c.bindBuffer(f,g)
p=new Z.ar(new Z.eL(f,b),[],q,a1)
if(h.gbg(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.bg(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).Y()}b=b.e}o.push(b==null?0:b);++n}k=Z.jO(c,34963,o)
p.b.push(new Z.cb(0,o.length,k))}if(h.ga9(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.cA(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).Y()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).Y()}b=b.e}o.push(b==null?0:b);++n}k=Z.jO(c,34963,o)
p.b.push(new Z.cb(1,o.length,k))}if(h.gO().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.cz(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).Y()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).Y()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.p(m,[]):l).Y()}b=b.e}o.push(b==null?0:b);++n}k=Z.jO(c,34963,o)
p.b.push(new Z.cb(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.gS().c.length!==0){q.push("Vertices:")
q.push(s.gS().B(r))}if(s.gbg(s).b.length!==0){q.push("Points:")
q.push(s.gbg(s).B(r))}if(s.ga9(s).b.length!==0){q.push("Lines:")
q.push(s.ga9(s).B(r))}if(s.gO().b.length!==0){q.push("Faces:")
q.push(s.gO().B(r))}return C.a.p(q,"\n")},
a4:function(){var s=this.e
return s==null?null:s.w(null)}}
F.i9.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fW(a),f=g.gcq(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.p(o,[]):m).c
if(n>=m.length)return H.e(m,n)
l=m[n].hb(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.e(r,k)
r[k]=i;++k}}e.a+=f
return new Z.bX(g,f,d*4,h.d)},
$S:34}
F.cz.prototype={
fU:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.p(s,[]):o).l(0,l)
o=s.a;(o==null?s.a=new F.p(s,[]):o).l(0,q)
o=s.a;(o==null?s.a=new F.p(s,[]):o).l(0,p)
n=new F.aj()
n.aK(l,q,p)
m.push(n)}return m},
fV:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
f=new F.aj()
f.aK(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,k)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
f=new F.aj()
f.aK(k,h,g)
e.push(f)}else{(l==null?s.a=new F.p(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,h)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
f=new F.aj()
f.aK(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,j)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,g)
l=s.a;(l==null?s.a=new F.p(s,[]):l).l(0,k)
f=new F.aj()
f.aK(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gj:function(a){return this.b.length},
ck:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gS().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.p(s,[]):q).c
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bI([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bI([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.bc(0,n,(q==null?p.d=new F.bI([],[],[]):q).h(0,l))){n.b9()
break}}}}},
cj:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.e(s,r)
q=s[r]
if(q.gfY(q))q.b9()}},
ap:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bV())q=!1
return q},
aQ:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].bU())q=!1
return q},
i:function(a){return this.v()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(a))
return C.a.p(p,"\n")},
v:function(){return this.B("")}}
F.cA.prototype={
gj:function(a){return this.b.length},
ck:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gS().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.p(s,[]):q).c
if(r>=q.length)return H.e(q,r)
p=q[r]
q=p.c
if(q==null)q=p.c=new F.bJ([],[])
o=q.b.length+q.c.length-1
for(;o>=0;o=m){q=p.c
n=(q==null?p.c=new F.bJ([],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.c
if(a.bc(0,n,(q==null?p.c=new F.bJ([],[]):q).h(0,l))){n.b9()
break}}}}},
cj:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.e(s,r)
q=s[r]
if(J.G(q.a,q.b))q.b9()}},
i:function(a){return this.v()},
B:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.e(q,s)
r.push(q[s].B(a+(""+s+". ")))}return C.a.p(r,"\n")},
v:function(){return this.B("")}}
F.bg.prototype={
gj:function(a){return this.b.length},
hs:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.e(s,r)
q=s[r]
p=q.a
o=p==null
if(o)n=null
else{m=p.b
m=(m==null?p.b=new F.cN([]):m).b.length
n=m}if((n==null?0:n)>1){if(!o){p=p.a
if(p!=null){o=p.b
C.a.C((o==null?p.b=new F.bg(p,[]):o).b,q)}p=q.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.w(null)}}}p=q.a
if(p!=null){o=p.b
C.a.C((o==null?p.b=new F.cN([]):o).b,q)}q.a=null}}},
i:function(a){return this.v()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(a))
return C.a.p(p,"\n")},
v:function(){return this.B("")}}
F.cM.prototype={
bX:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.iQ(s.cx,p,m,r,q,o,n,a,l)},
h1:function(){return this.bX(null)},
ga9:function(a){var s=this.c
return s==null?this.c=new F.bJ([],[]):s},
gO:function(){var s=this.d
return s==null?this.d=new F.bI([],[],[]):s},
gA:function(a){var s=this.a
if(s!=null)s.gS().Y()
return this.e},
sac:function(a,b){var s
if(!J.G(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a4()}},
shA:function(a){var s
if(!J.G(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a4()}},
hb:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.Y())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.m(0,$.ao())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.m(0,$.an())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.m(0,$.aF())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.m(0,$.ap())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.m(0,$.dh())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.m(0,$.di())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.m(0,$.bU()))return[o.ch]
else if(a.m(0,$.aZ())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
bV:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cL()
p.gO().I(0,new F.iX(o))
p.r=o.a.D()
if(r){s.a4()
o=s.e
if(o!=null)o.au(0)}return!0},
bU:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cL()
p.gO().I(0,new F.iW(o))
p.x=o.a.D()
if(r){s.a4()
o=s.e
if(o!=null)o.au(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
B:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.d.al(C.b.i(q.e),0))
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
n.push(V.v(q.ch,3,0))
s=q.cx
s=s==null?p:s.v()
n.push(s==null?o:s)
r=C.a.p(n,", ")
return a+"{"+r+"}"},
v:function(){return this.B("")}}
F.iX.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.T(0,r)}},
$S:7}
F.iW.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.T(0,r)}},
$S:7}
F.p.prototype={
Y:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.d("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a4()
return!0},
bq:function(a,b,c,d,e,f){var s=F.iQ(a,null,b,c,null,d,e,f,0)
this.l(0,s)
return s},
gj:function(a){return this.c.length},
ap:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bV()
return!0},
aQ:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].bU()
return!0},
br:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.D()
if(!J.G(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.w(null)}}}}}return!0},
i:function(a){return this.v()},
B:function(a){var s,r,q,p
this.Y()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].B(a))
return C.a.p(s,"\n")},
v:function(){return this.B("")}}
F.bI.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b<q){if(b<0)return H.e(r,b)
return r[b]}b-=q
r=this.c
s=r.length
if(b<s){if(b<0)return H.e(r,b)
return r[b]}b-=s
r=this.d
if(b<0||b>=r.length)return H.e(r,b)
return r[b]},
I:function(a,b){var s=this
C.a.I(s.b,b)
C.a.I(s.c,new F.iR(s,b))
C.a.I(s.d,new F.iS(s,b))},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
F.iR.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)},
$S:7}
F.iS.prototype={
$1:function(a){var s=this.a
if(!J.G(a.a,s)&&!J.G(a.b,s))this.b.$1(a)},
$S:7}
F.bJ.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.e(r,s)
return r[s]}else{if(b<0)return H.e(r,b)
return r[b]}},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
F.iU.prototype={}
F.iT.prototype={
bc:function(a,b,c){return J.G(b.f,c.f)}}
F.iV.prototype={}
F.hX.prototype={
cc:function(a){var s,r,q,p,o,n=V.cL()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)n=new V.x(n.a+q.a,n.b+q.b,n.c+q.c)}n=n.D()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){p=a[r]
q=n.D()
if(!J.G(p.r,q)){p.r=q
o=p.a
if(o!=null){o=o.e
if(o!=null)o.w(null)}}}return null}}
F.cN.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
O.hb.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.z():s},
a1:function(){var s=this.r
return s==null?null:s.w(null)},
sdc:function(a){if(this.b!=a){this.b=a
this.a1()}},
sd8:function(a){if(this.c!=a){this.c=a
this.a1()}},
sd7:function(a){if(!this.f.m(0,a)){this.f=a
this.a1()}},
aa:function(a,b){},
a3:function(a,b){if(b!=null)if(!C.a.J(a,b)){b.a=a.length
a.push(b)}},
bh:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.m.a(a.fr.h(0,"Distort"))
if(s==null){s=new A.c4(a.a,"Distort")
s.ba(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
s.x=s.gN(s).h(0,"posAttr")
s.y=s.gN(s).h(0,"txt2DAttr")
r=t.j
s.z=r.a(s.gq().t(0,"projViewObjMat"))
q=t.Q
s.Q=q.a(s.gq().t(0,"colorTxt2DMat"))
s.ch=q.a(s.gq().t(0,"bumpTxt2DMat"))
q=t.G
s.cx=q.a(s.gq().t(0,"colorTxt"))
s.cy=q.a(s.gq().t(0,"bumpTxt"))
s.db=r.a(s.gq().t(0,"bumpMat"))
a.b5(s)}m.a=s}if(b.e==null){r=b.d
if(r==null)r=l
else{q=$.Y()
p=$.aF()
p=r.b6(new Z.bl(a.a),new Z.ab(q.a|p.a))
r=p}if(r==null)r=l
else{q=r.a7($.Y())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}q=r.a7($.aF())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.y
p=p==null?l:p.c}q.e=p==null?1:p}}b.e=r}o=[]
m.a3(o,m.b)
m.a3(o,m.c)
if(o.length<=0)return
for(n=0;n<o.length;++n)o[n].H(a)
r=m.a
if(r!=null){r.H(a)
q=m.b
r.cW(r.cx,q)
q=m.c
r.cW(r.cy,q)
q=a.gcf()
p=r.z
if(p!=null)p.X(q.R(0,!0))
q=m.d
p=r.Q
if(p!=null)p.X(q.R(0,!0))
q=m.e
p=r.ch
if(p!=null)p.X(q.R(0,!0))
q=m.f
r=r.db
if(r!=null)r.X(q.R(0,!0))}r=b.e
if(r instanceof Z.ar){r.H(a)
r.a8(a)
r.a5(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gN(r).b8()}for(r=a.a,n=0;n<o.length;++n){q=o[n]
if(q.c){q.c=!1
r.activeTexture(33984+q.a)
r.bindTexture(3553,l)}}}}
O.dL.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.z():s},
M:function(a){var s=this.fr
return s==null?null:s.w(a)},
a1:function(){return this.M(null)},
cP:function(a){this.a=null
this.M(a)},
fF:function(){return this.cP(null)},
eH:function(a,b){return this.M(new D.au())},
eJ:function(a,b){return this.M(new D.av())},
gdB:function(){var s=this,r=s.dx
if(r==null){r=new D.cg([],[],[],[],[])
r.co(r.geE(),r.gfh(),r.gfl())
r.gn().l(0,s.gcO())
r.gdA().l(0,s.gae())
s.dx=r}return r},
gd1:function(){var s=this.r
return s==null?this.r=O.dN(this,"ambient"):s},
gdf:function(){var s=this.x
return s==null?this.x=O.dN(this,"diffuse"):s},
gbz:function(){var s=this.z
return s==null?this.z=new O.hK(new V.M(0,0,0),this,"specular",new A.a8(!1,!1,!1)):s},
cE:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.v,a1=new H.R(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gat()
o=a1.h(0,q.gat())
a1.k(0,p,o==null?1:o)}n=[]
a1.I(0,new O.hL(b,n))
C.a.b_(n,new O.hM())
m=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=[]
m.I(0,new O.hN(b,l))
C.a.b_(l,new O.hO())
k=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.o)(a2),++r){q=a2[r]
p=q.gat()
o=k.h(0,q.gat())
k.k(0,p,o==null?1:o)}j=[]
k.I(0,new O.hP(b,j))
C.a.b_(j,new O.hQ())
i=new H.R(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.o)(a0),++r){q=a0[r]
s=q.gat()
p=i.h(0,q.gat())
i.k(0,s,p==null?1:p)}h=[]
i.I(0,new O.hR(b,h))
C.a.b_(h,new O.hS())
a0=C.b.a6(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.hI(new V.a7(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.dN(b,"emission"):a2).c
s=b.gd1().c
p=b.gdf().c
o=b.y
o=(o==null?b.y=O.dN(b,"invDiffuse"):o).c
g=b.gbz().c
f=b.Q
f=(f==null?b.Q=new O.hG(b,"bump",new A.a8(!1,!1,!1)):f).c
e=b.cx
e=(e==null?b.cx=O.dN(b,"reflect"):e).c
d=b.cy
d=(d==null?b.cy=new O.hJ(new V.M(0,0,0),b,"refract",new A.a8(!1,!1,!1)):d).c
c=b.db
return A.m1(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hF(b,"alpha",new A.a8(!1,!1,!1)):c).c,n,l,j,h)},
a3:function(a,b){},
aa:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aG(m==null?[]:m)
s=H.T(m).c
for(;m.u();){r=s.a(m.d)
q=$.iP
if(q==null)q=$.iP=new V.x(0,0,1)
r.c=q
p=$.iO
r.d=p==null?$.iO=new V.x(0,1,0):p
p=$.iN
r.e=p==null?$.iN=new V.x(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.by(q).D()
r.d=n.by(r.d).D()
r.e=n.by(r.e).D()}}},
bh:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null){s=a6.cE()
r=s.bs
a8=t.d1.a(a9.fr.h(0,r))
if(a8==null){q=a9.a
p=t.S
o=t.W
a8=new A.cl(s,[],P.N(p,o),P.N(p,t.J),P.N(p,o),P.N(p,t.L),P.N(p,o),P.N(p,t.U),P.N(p,o),P.N(p,t.R),q,r)
a8.e1(s,q)
a9.b5(a8)}a8=a6.a=a8
b0.e=null}n=a8.x
m=n.bt
s=b0.e
if(!(s instanceof Z.ar))s=b0.e=null
if(s==null||!s.d.m(0,m)){s=n.k4
if(s){r=b0.d
if(r!=null)r.ap()}r=n.r1
if(r){q=b0.d
if(q!=null)q.aQ()}q=n.rx
if(q){p=b0.d
if(p!=null)p.br()}p=b0.d
l=p==null?a7:p.b6(new Z.bl(a9.a),m)
if(l==null)return
p=l.a7($.Y())
if(p!=null){o=a8.y
o=o==null?a7:o.c
p.e=o==null?0:o}if(s){s=l.a7($.ao())
if(s!=null){p=a8.Q
p=p==null?a7:p.c
s.e=p==null?1:p}}if(r){s=l.a7($.an())
if(s!=null){r=a8.z
r=r==null?a7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.a7($.aF())
if(s!=null){r=a8.ch
r=r==null?a7:r.c
s.e=r==null?3:r}}if(q){s=l.a7($.ap())
if(s!=null){r=a8.cx
r=r==null?a7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.a7($.aZ())
if(s!=null){r=a8.cy
r=r==null?a7:r.c
s.e=r==null?5:r}}b0.e=l}k=[]
a8.H(a9)
if(n.fr){s=a9.dx
s=s.ga2(s)
r=a8.db
if(r!=null)r.X(s.R(0,!0))}if(n.fx){s=a9.gdP()
r=a8.dx
if(r!=null)r.X(s.R(0,!0))}s=a9.gcf()
r=a8.fr
if(r!=null)r.X(s.R(0,!0))
if(n.go){s=a9.db
s=s.ga2(s)
r=a8.dy
if(r!=null)r.X(s.R(0,!0))}if(n.x1){s=V.co()
r=a8.go
if(r!=null)r.X(s.R(0,!0))}if(n.x2){s=V.a1()
r=a8.id
if(r!=null)r.X(s.R(0,!0))}if(n.y1){s=V.a1()
r=a8.k1
if(r!=null)r.X(s.R(0,!0))}if(n.aT>0){s=a6.e.a
j=s.length
r=a8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.e(s,i)
r=s[i]
q=a8.k3
if(i>=q.length)return H.e(q,i)
q=q[i]
h=new Float32Array(H.bN(r.R(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a6.f
r=r==null?a7:r.f
if(r==null)r=new V.M(0,0,0)
q=a8.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){a6.a3(k,a7)
a8.af(a8.r2,a7)}if(n.k1){s=n.b
if(s.a){r=a6.r
r=r==null?a7:r.f
if(r==null)r=new V.M(0,0,0)
q=a8.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){a6.a3(k,a7)
a8.af(a8.x1,a7)}s=n.c
if(s.a){r=a6.x
r=r==null?a7:r.f
if(r==null)r=new V.M(0,0,0)
q=a8.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){a6.a3(k,a7)
a8.af(a8.y2,a7)}s=n.d
if(s.a){r=a6.y
r=r==null?a7:r.f
if(r==null)r=new V.M(0,0,0)
q=a8.aT
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){a6.a3(k,a7)
a8.af(a8.bt,a7)}s=n.e
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.z
q=q==null?a7:q.ch
if(q==null)q=100
p=a8.dj
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.z
r=r==null?a7:r.f
if(r==null)r=new V.M(1,1,1)
q=a8.dh
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){a6.a3(k,a7)
a8.af(a8.di,a7)}s=n.z
if(s.length>0){g=new H.R(t.v)
r=a6.dx
r=r==null?a7:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gat()
c=g.h(0,d)
if(c==null)c=0
g.k(0,d,c+1)
p=a8.c_.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ghH()
o=$.ax
p=p.bj(o==null?$.ax=new V.K(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghM()
o=$.ax
p=p.bj(o==null?$.ax=new V.K(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gdg()){p=e.gd2()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd3()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd4()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a8.bZ.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=a9.db
a=r.ga2(r)
a0=new H.R(t.v)
r=a6.dx
r=r==null?a7:r.f
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
c=a0.h(0,0)
if(c==null)c=0
a0.k(0,0,c+1)
p=a8.c1.h(0,0)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=a.by(e.c).D()
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.b
o=b.f
o.a.uniform3f(o.d,p.a,p.b,p.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=a8.c0.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=a9.db
a=r.ga2(r)
a1=new H.R(t.v)
r=a6.dx
r=r==null?a7:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gat()
c=a1.h(0,d)
if(c==null)c=0
a1.k(0,d,c+1)
p=a8.c3.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
a2=a.K(0,e.ga2(e))
p=e.ga2(e)
o=$.ax
p=p.bj(o==null?$.ax=new V.K(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ax
p=a2.bj(p==null?$.ax=new V.K(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaH()
p=a2.c7(0)
o=b.d
if(o!=null){h=new Float32Array(H.bN(new V.cn(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).R(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gaH()
p=e.gaH()
if(!C.a.J(k,p)){p.sA(0,k.length)
k.push(p)}p=e.gaH()
o=p.gcb(p)
if(o){o=b.f
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gaZ()
p=e.gdV()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gaZ()
if(!C.a.J(k,p)){p.sA(0,k.length)
k.push(p)}p=e.gaZ()
o=p.gcb(p)
if(o){o=b.r
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.gdg()){p=e.gd2()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd3()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd4()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a8.c2.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=a9.db
a=r.ga2(r)
a5=new H.R(t.v)
r=a6.dx
r=r==null?a7:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gat()
c=a5.h(0,d)
if(c==null)c=0
a5.k(0,d,c+1)
p=a8.c5.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ghq(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghK(e).D()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bj(e.ghq(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaS(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaH()
p=e.ghX()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gcl(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghV()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghW()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaH()
p=e.gaH()
if(!C.a.J(k,p)){p.sA(0,k.length)
k.push(p)}p=e.gaH()
o=p.gcb(p)
if(o){o=b.dx
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gaZ()
p=e.gdV()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gaZ()
if(!C.a.J(k,p)){p.sA(0,k.length)
k.push(p)}p=e.gaZ()
o=p.gcb(p)
if(o){o=b.dy
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.ghL()){p=e.ghJ()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghI()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gdg()){p=e.gd2()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd3()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gd4()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a5.h(0,q)
if(j==null)j=0
q=a8.c4.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.c){a6.a3(k,a7)
a8.af(a8.dk,a7)}if(n.dy){s=a9.Q
if(s==null){s=a9.db
s=a9.Q=s.ga2(s).c7(0)}r=a8.fy
if(r!=null)r.X(s.R(0,!0))}if(n.db){a6.a3(k,a7)
a8.af(a8.dl,a7)
s=n.r
if(s.a){r=a6.cx
r=r==null?a7:r.f
if(r==null)r=new V.M(1,1,1)
q=a8.dm
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){a6.a3(k,a7)
a8.af(a8.dn,a7)}s=n.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.cy
q=q==null?a7:q.ch
if(q==null)q=0
p=a8.dq
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.cy
r=r==null?a7:r.f
if(r==null)r=new V.M(1,1,1)
q=a8.dr
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){a6.a3(k,a7)
a8.af(a8.ds,a7)}}s=n.y
r=s.a
q=!r
if(q)p=s.c
else p=!0
if(p){if(r){r=a6.db
r=r==null?a7:r.f
if(r==null)r=1
p=a8.dt
if(p!=null)p.a.uniform1f(p.d,r)}if(s.c){a6.a3(k,a7)
a8.af(a8.du,a7)}r=a9.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].H(a9)
r=t.C.a(b0.e)
r.H(a9)
r.a8(a9)
r.a5(a9)
if(q)s=s.c
else s=!0
if(s)a9.a.disable(3042)
for(i=0;i<k.length;++i)k[i].a5(a9)
a9.a.useProgram(a7)
a8.gN(a8).b8()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cE().bs}}
O.hL.prototype={
$2:function(a,b){return this.b.push(new A.b_(a,C.b.a6(b+3,4)*4))},
$S:8}
O.hM.prototype={
$2:function(a,b){return C.b.ag(a.a,b.a)},
$S:37}
O.hN.prototype={
$2:function(a,b){return this.b.push(new A.b2(a,C.b.a6(b+3,4)*4))},
$S:8}
O.hO.prototype={
$2:function(a,b){return C.b.ag(a.a,b.a)},
$S:38}
O.hP.prototype={
$2:function(a,b){return this.b.push(new A.be(a,C.b.a6(b+3,4)*4))},
$S:8}
O.hQ.prototype={
$2:function(a,b){return C.b.ag(a.a,b.a)},
$S:39}
O.hR.prototype={
$2:function(a,b){return this.b.push(new A.bh(a,C.b.a6(b+3,4)*4))},
$S:8}
O.hS.prototype={
$2:function(a,b){return C.b.ag(a.a,b.a)},
$S:40}
O.hF.prototype={
aA:function(){var s,r=this
r.cs()
s=r.f
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.M(new D.u(r.b,s,1))}}}
O.dM.prototype={
aA:function(){},
cU:function(a){var s,r,q=this
if(!q.c.m(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aA()
s=q.a
s.a=null
s.M(null)}}}
O.hG.prototype={}
O.cm.prototype={
cT:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.M(new D.u(r.b+".color",s,a))}},
aA:function(){this.cs()
this.cT(new V.M(1,1,1))},
saS:function(a,b){this.cU(new A.a8(!0,!1,this.c.c))
this.cT(b)}}
O.hI.prototype={}
O.hJ.prototype={
aA:function(){var s,r=this
r.ct()
s=r.ch
$.y().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.M(new D.u(r.b+".refraction",s,1))}}}
O.hK.prototype={
cV:function(a){var s=this,r=s.ch
$.y().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.M(new D.u(s.b+".shininess",r,a))}},
aA:function(){this.ct()
this.cV(100)}}
O.dX.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.z():s},
M:function(a){var s=this.r
return s==null?null:s.w(a)},
a1:function(){return this.M(null)},
cR:function(a){},
cS:function(a){var s,r=this,q=r.f
if(q!=a){if(q!=null)q.gn().C(0,r.gae())
s=r.f
r.f=a
if(a!=null)a.gn().l(0,r.gae())
r.M(new D.u("bumpyTextureCube",s,r.f))}},
a3:function(a,b){if(!C.a.J(a,b)){b.a=a.length
a.push(b)}},
aa:function(a,b){},
bh:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e="varying vec3 binormalVec;\n",d="varying vec3 txtCube;\n",c=g.a
if(c==null){s=A.kq(g.d)
r=s.e
c=t.bh.a(a.fr.h(0,r))
if(c==null){c=new A.cu(s,a.a,r)
r=""+"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
q=s.d
r=(q?r+"uniform mat4 txtCubeMat;\n":r)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
p=s.b
if(p)r+="attribute vec3 binmAttr;\n"
r=(q?r+"attribute vec3 txtCubeAttr;\n":r)+"\nvarying vec3 normalVec;\n"
if(p)r+=e
r=(q?r+d:r)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(p)r+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
r=(q?r+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":r)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
o=""+"precision mediump float;\n\nvarying vec3 normalVec;\n"
p=p?o+e:o
p=(q?p+d:p)+"\n"
if(s.a.c)p+="uniform samplerCube bumpTxt;\n"
p+="\nvec3 normal()\n{\n"
s=s.a
o=s.a
if(!o)n=s.c
else n=!0
if(!n||o)p+="   return normalize(normalVec);\n"
else p+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"
p+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
c.ba(0,r.charCodeAt(0)==0?r:r,p.charCodeAt(0)==0?p:p)
c.y=c.gN(c).h(0,"posAttr")
c.Q=c.gN(c).h(0,"normAttr")
c.z=c.gN(c).h(0,"binmAttr")
c.ch=c.gN(c).h(0,"txt2DAttr")
c.cx=c.gN(c).h(0,"txtCubeAttr")
p=t.j
c.cy=p.a(c.gq().t(0,"viewObjMat"))
c.db=p.a(c.gq().t(0,"projViewObjMat"))
if(q)c.dy=p.a(c.gq().t(0,"txtCubeMat"))
if(s.c)c.fx=t.a.a(c.gq().t(0,"bumpTxt"))
a.b5(c)}c=g.a=c
b.e=null}m=c.x
l=m.f
s=b.e
if(!(s instanceof Z.ar))s=b.e=null
if(s==null||!s.d.m(0,l)){s=b.d
if(s!=null)s.ap()
s=m.b
if(s){r=b.d
if(r!=null)r.aQ()}r=m.d
if(r){q=b.d
if(q!=null)q.br()}q=b.d
k=q==null?f:q.b6(new Z.bl(a.a),l)
if(k==null)return
q=k.a7($.Y())
if(q!=null){p=c.y
p=p==null?f:p.c
q.e=p==null?0:p}q=k.a7($.ao())
if(q!=null){p=c.Q
p=p==null?f:p.c
q.e=p==null?1:p}if(s){s=k.a7($.an())
if(s!=null){q=c.z
q=q==null?f:q.c
s.e=q==null?2:q}}if(r){s=k.a7($.ap())
if(s!=null){r=c.cx
r=r==null?f:r.c
s.e=r==null?4:r}}b.e=k}j=[]
c.H(a)
s=a.gdP()
r=c.cy
if(r!=null)r.X(s.R(0,!0))
s=a.gcf()
r=c.db
if(r!=null)r.X(s.R(0,!0))
if(m.d){s=c.dy
if(s!=null)s.X(g.c.R(0,!0))}if(m.a.c){i=g.f
if(i!=null){g.a3(j,i)
s=c.fx
r=i.d
if(r>=6)if(s!=null)s.cp(i)}}for(h=0;h<j.length;++h)j[h].H(a)
s=t.C.a(b.e)
s.H(a)
s.a8(a)
s.a5(a)
for(s=a.a,h=0;h<j.length;++h){r=j[h]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,f)}}s.useProgram(f)
c.gN(c).b8()},
i:function(a){var s=this.a
s=s==null?null:s.b
return s==null?A.kq(this.d).e:s}}
O.eb.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.z():s},
M:function(a){var s=this.e
return s==null?null:s.w(a)},
a1:function(){return this.M(null)},
aa:function(a,b){},
bh:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.x.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.cB(a.a,"Skybox")
s.ba(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.gN(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gq().h(0,"fov"))
s.z=r.a(s.gq().h(0,"ratio"))
s.Q=t.g.a(s.gq().h(0,"boxClr"))
s.ch=t.a.a(s.gq().h(0,"boxTxt"))
s.cx=t.j.a(s.gq().h(0,"viewMat"))
a.b5(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.b6(new Z.bl(a.a),$.Y())
if(r==null)r=l
else{q=r.a7($.Y())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.H(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.H(a)
n=p.y
if(n!=null)n.a.uniform1f(n.d,1.0471975511965976)
n=p.z
if(n!=null)n.a.uniform1f(n.d,r/q)
r=p.ch
if(r!=null)r.cp(o)
r=m.d
q=p.Q
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)
r=a.db
r=r.ga2(r).c7(0)
p=p.cx
if(p!=null)p.X(r.R(0,!0))}r=b.e
if(r instanceof Z.ar){r.H(a)
r.a8(a)
r.a5(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.gN(r).b8()}o.a5(a)}}
O.ik.prototype={}
O.eo.prototype={
gn:function(){var s=this.r
return s==null?this.r=D.z():s},
M:function(a){var s=this.r
return s==null?null:s.w(a)},
a1:function(){return this.M(null)},
eX:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gae(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.f
if(o==null)o=p.f=new D.b4()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a1()},
eZ:function(a,b){var s,r
for(s=b.gP(b),r=this.gae();s.u();)s.gE(s).gn().C(0,r)
this.a1()},
aa:function(a,b){},
eq:function(a){a=C.b.a6(a+3,4)*4
if(a<=0)return 4
return a},
bh:function(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.c.a,a2=a.eq(a1.length)
if(a2!==a.d||a.e!==a.f){a.d=a2
a.f=a.e
a.a=null}s=a.a
if(s==null){r=a.e
q=r.a
s=t.Y.a(a3.fr.h(0,"TextureLayout_"+a2+"_"+C.b.i(q)))
if(s==null){p=a3.a
s=new A.cD([],[],[],[],[],[],[],p,"TextureLayout_"+a2+"_"+C.b.i(q))
s.e3(a2,r,p)
a3.b5(s)}s=a.a=s}if(a4.e==null){r=a4.d
r=r==null?a0:r.b6(new Z.bl(a3.a),$.Y())
if(r==null)r=a0
else{q=r.a7($.Y())
if(q!=null){p=s.x
p=p==null?a0:p.c
q.e=p==null?0:p}}a4.e=r}s.H(a3)
o=[]
for(r=s.dy,q=s.dx,p=s.db,n=s.cy,m=s.cx,l=s.ch,k=s.Q,j=0,i=0;i<a1.length;++i){h=a1[i]
g=h.a
if(!C.a.J(o,g)){g.a=o.length
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
c=new Float32Array(H.bN(f.R(0,!0)))
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
f=h.e
if(j>=r.length)return H.e(r,j)
e=r[j]
f=f?1:0
e.a.uniform1i(e.d,f);++j}a1=s.y
if(a1!=null)a1.a.uniform1i(a1.d,j)
a1=s.z
if(a1!=null)a1.dT(a.b)
for(i=0;i<o.length;++i)o[i].H(a3)
a1=a4.e
if(a1 instanceof Z.ar){a1.H(a3)
a1.a8(a3)
a1.a5(a3)}else a4.e=null
a1=a3.a
a1.useProgram(a0)
s.gN(s).b8()
for(i=0;i<o.length;++i){r=o[i]
if(r.c){r.c=!1
a1.activeTexture(33984+r.a)
a1.bindTexture(3553,a0)}}}}
O.cE.prototype={}
T.il.prototype={}
T.im.prototype={}
T.io.prototype={
H:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.ip.prototype={
gn:function(){var s=this.e
return s==null?this.e=D.z():s},
H:function(a){var s,r=this
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
dC:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
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
hc:function(a){return this.dC(a,".png")},
aO:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.X(s,"load",new T.ir(this,s,!1,b,!1,d,a),!1)},
fG:function(a,b,c){var s,r,q,p,o,n
b=V.dg(b)
s=a.width
r=V.dg(s==null?512:s)
s=a.height
q=V.dg(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.jx()
p.width=r
p.height=q
o=t.b.a(C.h.dR(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.nK(o.getImageData(0,0,s,n==null?512:n))}}}
T.ir.prototype={
$1:function(a){var s=this,r=s.a,q=r.fG(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.t.hz(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.bY()}++r.e},
$S:3}
X.h_.prototype={
gn:function(){var s=this.fr
return s==null?this.fr=D.z():s},
a0:function(a){var s=this.fr
return s==null?null:s.w(a)},
san:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.a0(new D.u("width",s,b))}},
sah:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.a0(new D.u("height",s,b))}},
H:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
g.san(0,C.b.Z(r*g.r))
s=s.drawingBufferHeight
if(s==null)s=512
g.sah(0,C.b.Z(s*g.x))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=H.fM(s.getParameter(3379))
n=V.dg(q)
m=V.dg(p)
o=V.dg(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.t.dN(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.kA(l)
k.e=q
k.f=p
k.r=n
k.x=m
if(!k.d){k.d=!0
q=k.y
if(q!=null)q.bY()}r.b=k.b
r.c=k.c
r.d=k.d
r.e=k.e
r.f=k.f
r.r=k.r
r.x=k.x
q=r.y
if(q!=null)q.bY()
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
a.c=C.c.Z(r*g.a)
q=j.d
a.d=C.c.Z(q*g.b)
p=g.c
i=C.c.Z(j.a*p)
l=g.d
s.viewport(i,C.c.Z(j.b*l),C.c.Z(r*p),C.c.Z(q*l))
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
X.hr.prototype={
gn:function(){var s=this.x
return s==null?this.x=D.z():s},
H:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.c.Z(q.a*s)
o=C.c.Z(q.b*r)
n=C.c.Z(q.c*s)
a.c=n
q=C.c.Z(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)},
a5:function(a){}}
X.ht.prototype={
gn:function(){var s=this.b
return s==null?this.b=D.z():s},
H:function(a){var s
a.cy.bw(V.a1())
s=V.a1()
a.db.bw(s)},
a5:function(a){a.cy.aF()
a.db.aF()}}
X.e1.prototype={
gn:function(){var s=this.f
return s==null?this.f=D.z():s},
a0:function(a){var s=this.f
return s==null?null:s.w(a)},
ea:function(){return this.a0(null)},
sbd:function(a){var s,r,q=this
if(!J.G(q.b,a)){s=q.b
if(s!=null)s.gn().C(0,q.gcz())
r=q.b
q.b=a
if(a!=null)a.gn().l(0,q.gcz())
q.a0(new D.u("mover",r,q.b))}},
H:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.aL(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bw(i)
s=$.ln()
r=q.b
if(r!=null)s=r.aX(0,a,q).K(0,s)
a.db.bw(s)},
a5:function(a){a.cy.aF()
a.db.aF()}}
X.ii.prototype={}
V.js.prototype={
$1:function(a){var s=C.c.cm(this.a.gh8(),2)
if(s!=="0.00")P.k6(s+" fps")},
$S:41}
V.ia.prototype={
d0:function(a){var s,r,q,p,o,n,m=this.fJ(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.L(C.a.ha(a)),s=new P.bM(m.dO(new H.by(s,s.gj(s))).a());s.u();){r=s.gE(s)
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
if(H.lg(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.mO(C.M,r,C.p,!1)
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
fJ:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.iv(P.N(s,t.aJ),P.N(s,t.aX),P.kj(s))
h.d=h.L(0,q)
s=h.L(0,q).p(0,p)
r=new K.S([])
r.a_(new H.L("*"))
s.a.push(r)
s.c=!0
s=[]
h.L(0,p).p(0,p).a.push(new K.aN(s))
r=new K.S([])
r.a_(new H.L("*"))
s.push(r)
r=h.L(0,p).p(0,"BoldEnd")
s=new K.S([])
s.a_(new H.L("*"))
r.a.push(s)
r.c=!0
r=h.L(0,q).p(0,o)
s=new K.S([])
s.a_(new H.L("_"))
r.a.push(s)
r.c=!0
r=[]
h.L(0,o).p(0,o).a.push(new K.aN(r))
s=new K.S([])
s.a_(new H.L("_"))
r.push(s)
s=h.L(0,o).p(0,n)
r=new K.S([])
r.a_(new H.L("_"))
s.a.push(r)
s.c=!0
s=h.L(0,q).p(0,m)
r=new K.S([])
r.a_(new H.L("`"))
s.a.push(r)
s.c=!0
s=[]
h.L(0,m).p(0,m).a.push(new K.aN(s))
r=new K.S([])
r.a_(new H.L("`"))
s.push(r)
r=h.L(0,m).p(0,"CodeEnd")
s=new K.S([])
s.a_(new H.L("`"))
r.a.push(s)
r.c=!0
r=h.L(0,q).p(0,l)
s=new K.S([])
s.a_(new H.L("["))
r.a.push(s)
r.c=!0
r=h.L(0,l).p(0,k)
s=new K.S([])
s.a_(new H.L("|"))
r.a.push(s)
s=h.L(0,l).p(0,j)
r=new K.S([])
r.a_(new H.L("]"))
s.a.push(r)
s.c=!0
s=[]
h.L(0,l).p(0,l).a.push(new K.aN(s))
r=new K.S([])
r.a_(new H.L("|]"))
s.push(r)
r=h.L(0,k).p(0,j)
s=new K.S([])
s.a_(new H.L("]"))
r.a.push(s)
r.c=!0
r=[]
h.L(0,k).p(0,k).a.push(new K.aN(r))
s=new K.S([])
s.a_(new H.L("|]"))
r.push(s)
h.L(0,q).p(0,i).a.push(new K.fU())
s=[]
h.L(0,i).p(0,i).a.push(new K.aN(s))
r=new K.S([])
r.a_(new H.L("*_`["))
s.push(r)
r=h.L(0,"BoldEnd")
r.d=r.a.bi(p)
r=h.L(0,n)
r.d=r.a.bi(o)
r=h.L(0,"CodeEnd")
r.d=r.a.bi(m)
r=h.L(0,j)
r.d=r.a.bi("Link")
r=h.L(0,i)
r.d=r.a.bi(i)
return this.b=h}}
V.ic.prototype={
$1:function(a){P.kD(C.j,new V.ib(this.a))},
$S:3}
V.ib.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.c.Z(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.t(-0.01*s)+"px"
q.top=r},
$S:2};(function aliases(){var s=J.a.prototype
s.dY=s.i
s=J.b8.prototype
s.dZ=s.i
s=K.dA.prototype
s.dX=s.aU
s.bA=s.i
s=O.dM.prototype
s.cs=s.aA
s=O.cm.prototype
s.ct=s.aA})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"n_","lX",42)
r(P,"nE","mr",9)
r(P,"nF","ms",9)
r(P,"nG","mt",9)
q(P,"l7","nz",2)
r(W,"p8","hg",32)
var k
p(k=E.bu.prototype,"gdK",0,0,null,["$1","$0"],["dL","hk"],0,0)
p(k,"gdI",0,0,null,["$1","$0"],["dJ","hj"],0,0)
p(k,"gdG",0,0,null,["$1","$0"],["dH","hg"],0,0)
o(k,"ghe","hf",6)
o(k,"ghh","hi",6)
p(k=E.ep.prototype,"gcu",0,0,null,["$1","$0"],["cw","cv"],0,0)
n(k,"ghv","dM",2)
m(k=X.eJ.prototype,"gf_","f0",3)
m(k,"geK","eL",3)
m(k,"geQ","eR",4)
m(k,"gf3","f4",13)
m(k,"gf1","f2",13)
m(k,"gf7","f8",4)
m(k,"gfb","fc",4)
m(k,"geU","eV",4)
m(k,"gf9","fa",4)
m(k,"geS","eT",4)
m(k,"gfd","fe",29)
m(k,"gff","fg",3)
m(k,"gfw","fz",11)
m(k,"gfs","ft",11)
m(k,"gfu","fv",11)
p(D.c3.prototype,"ge4",0,0,null,["$1","$0"],["ax","e5"],0,0)
p(k=D.cg.prototype,"gcL",0,0,null,["$1","$0"],["cM","f5"],0,0)
m(k,"gfh","fi",31)
o(k,"geE","eF",16)
o(k,"gfl","fm",16)
l(V.a2.prototype,"gj","c9",17)
l(V.x.prototype,"gj","c9",17)
p(k=U.bv.prototype,"gbl",0,0,null,["$1","$0"],["U","ar"],0,0)
o(k,"ge6","e7",18)
o(k,"gfj","fk",18)
p(k=U.cJ.prototype,"gbl",0,0,null,["$1","$0"],["U","ar"],0,0)
m(k,"gew","ex",1)
m(k,"gey","ez",1)
m(k,"geA","eB",1)
m(k,"ger","es",1)
m(k,"geu","ev",1)
m(k,"gfQ","fR",1)
m(k,"gfO","fP",1)
m(k,"gfM","fN",1)
m(U.cK.prototype,"geC","eD",1)
p(k=M.c_.prototype,"gV",0,0,null,["$1","$0"],["W","b1"],0,0)
o(k,"gfn","fo",12)
o(k,"gfp","fq",12)
p(M.c1.prototype,"gV",0,0,null,["$1","$0"],["W","b1"],0,0)
p(k=M.c8.prototype,"gV",0,0,null,["$1","$0"],["W","b1"],0,0)
o(k,"geM","eN",6)
o(k,"geO","eP",6)
p(k=O.dL.prototype,"gae",0,0,null,["$1","$0"],["M","a1"],0,0)
p(k,"gcO",0,0,null,["$1","$0"],["cP","fF"],0,0)
o(k,"geG","eH",20)
o(k,"geI","eJ",20)
p(O.dX.prototype,"gae",0,0,null,["$1","$0"],["M","a1"],0,0)
p(O.eb.prototype,"gae",0,0,null,["$1","$0"],["M","a1"],0,0)
p(k=O.eo.prototype,"gae",0,0,null,["$1","$0"],["M","a1"],0,0)
o(k,"geW","eX",21)
o(k,"geY","eZ",21)
p(X.e1.prototype,"gcz",0,0,null,["$1","$0"],["a0","ea"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.J,null)
q(P.J,[H.jG,J.a,J.a3,P.D,P.cS,P.h,H.by,P.dC,H.c9,H.eH,H.iz,H.hZ,H.fp,H.br,P.U,H.hz,H.dK,H.hu,H.af,H.f2,P.d3,P.bL,P.bM,P.eN,P.ej,P.ek,P.jb,P.d8,P.j4,P.cR,P.B,P.ea,P.dq,P.ja,P.P,P.b3,P.e0,P.cC,P.f_,P.hq,P.ae,P.bi,W.h7,W.jB,W.jP,W.E,W.ca,P.d5,P.fi,K.fU,K.dA,K.S,L.eg,L.eq,L.er,L.iv,O.bs,O.cp,E.h0,E.bu,E.bq,E.bD,E.eX,E.i3,E.ep,Z.eL,Z.bl,Z.ar,Z.cb,Z.ab,D.h2,D.b4,D.Q,X.bY,X.dH,X.hw,X.hD,X.a4,X.hW,X.iw,X.eJ,D.c3,V.M,V.a7,V.hj,V.cn,V.bz,V.O,V.K,V.aP,V.e6,V.a2,V.x,U.cJ,U.cK,M.c1,M.c8,A.fW,A.fX,A.a8,A.b_,A.b2,A.be,A.bh,A.hH,A.ez,A.eA,A.eC,A.eE,A.hY,A.bt,A.iC,A.iH,F.aj,F.hn,F.hx,F.hy,F.i_,F.i8,F.cz,F.cA,F.bg,F.cM,F.p,F.bI,F.bJ,F.iU,F.iV,F.cN,O.ik,O.dM,O.hI,O.cE,T.iq,X.ii,X.ht,X.e1,V.ia])
q(J.a,[J.dD,J.ce,J.b8,J.ak,J.bx,J.b7,H.cr,W.c,W.fT,W.dp,W.bZ,W.at,W.C,W.eS,W.ad,W.ha,W.hc,W.eT,W.c6,W.eV,W.hd,W.i,W.f0,W.aJ,W.hs,W.f4,W.b6,W.hC,W.hT,W.f8,W.f9,W.aM,W.fa,W.fc,W.aO,W.fg,W.fj,W.aR,W.fk,W.aS,W.fq,W.al,W.fu,W.it,W.aT,W.fw,W.ix,W.iJ,W.fC,W.fE,W.fG,W.fI,W.fK,P.ba,P.f6,P.bd,P.fe,P.i0,P.fr,P.bk,P.fy,P.fY,P.eO,P.bF,P.fn])
q(J.b8,[J.e2,J.bG,J.aw])
r(J.dF,J.ak)
q(J.bx,[J.cd,J.dE])
q(P.D,[H.dI,P.eu,H.dG,H.eG,H.e8,H.eY,P.dl,P.dY,P.aq,P.eI,P.eF,P.eh,P.dr,P.dt])
r(P.ch,P.cS)
q(P.ch,[H.bH,W.eQ,W.eP,P.dy])
r(H.L,H.bH)
q(P.h,[H.j,H.bb,H.cO,P.cc])
r(H.c7,H.bb)
q(P.dC,[H.ck,H.eM])
r(H.cv,P.eu)
q(H.br,[H.ij,H.hv,H.jn,H.jo,H.jp,P.iZ,P.iY,P.j_,P.j0,P.j9,P.j8,P.jh,P.j6,P.j7,P.hE,P.he,P.hf,W.hU,W.hV,W.i7,W.ig,W.j1,P.jd,P.jj,P.ho,P.hp,P.fZ,E.i4,E.i5,E.i6,E.is,D.hl,D.hm,F.jc,F.jt,F.jk,F.i9,F.iX,F.iW,F.iR,F.iS,O.hL,O.hM,O.hN,O.hO,O.hP,O.hQ,O.hR,O.hS,T.ir,V.js,V.ic,V.ib])
q(H.ij,[H.ie,H.bV])
r(P.cj,P.U)
r(H.R,P.cj)
r(H.aK,H.j)
r(H.bC,H.cr)
q(H.bC,[H.cU,H.cW])
r(H.cV,H.cU)
r(H.bc,H.cV)
r(H.cX,H.cW)
r(H.cq,H.cX)
q(H.cq,[H.dR,H.dS,H.dT,H.dU,H.dV,H.cs,H.dW])
r(H.d4,H.eY)
r(P.d0,P.cc)
r(P.j5,P.jb)
r(P.cY,P.d8)
r(P.cQ,P.cY)
r(P.ds,P.ek)
r(P.hh,P.dq)
r(P.iK,P.hh)
r(P.iL,P.ds)
q(P.aq,[P.cy,P.dB])
q(W.c,[W.r,W.dx,W.az,W.cZ,W.aA,W.ag,W.d1,W.eK,W.bK,P.dn,P.aH])
q(W.r,[W.H,W.ai])
q(W.H,[W.l,P.k])
q(W.l,[W.dj,W.dk,W.b0,W.dz,W.bw,W.e9])
r(W.h6,W.at)
r(W.c2,W.eS)
q(W.ad,[W.h8,W.h9])
r(W.eU,W.eT)
r(W.c5,W.eU)
r(W.eW,W.eV)
r(W.dv,W.eW)
r(W.aI,W.dp)
r(W.f1,W.f0)
r(W.dw,W.f1)
r(W.f5,W.f4)
r(W.b5,W.f5)
r(W.aC,W.i)
q(W.aC,[W.b9,W.a9,W.bj])
r(W.dO,W.f8)
r(W.dP,W.f9)
r(W.fb,W.fa)
r(W.dQ,W.fb)
r(W.fd,W.fc)
r(W.ct,W.fd)
r(W.fh,W.fg)
r(W.e3,W.fh)
r(W.e7,W.fj)
r(W.d_,W.cZ)
r(W.ed,W.d_)
r(W.fl,W.fk)
r(W.ee,W.fl)
r(W.ei,W.fq)
r(W.fv,W.fu)
r(W.em,W.fv)
r(W.d2,W.d1)
r(W.en,W.d2)
r(W.fx,W.fw)
r(W.es,W.fx)
r(W.aU,W.a9)
r(W.fD,W.fC)
r(W.eR,W.fD)
r(W.cP,W.c6)
r(W.fF,W.fE)
r(W.f3,W.fF)
r(W.fH,W.fG)
r(W.cT,W.fH)
r(W.fJ,W.fI)
r(W.fm,W.fJ)
r(W.fL,W.fK)
r(W.ft,W.fL)
r(W.eZ,P.ej)
r(P.aa,P.fi)
r(P.f7,P.f6)
r(P.dJ,P.f7)
r(P.ff,P.fe)
r(P.dZ,P.ff)
r(P.fs,P.fr)
r(P.el,P.fs)
r(P.fz,P.fy)
r(P.et,P.fz)
r(P.dm,P.eO)
r(P.e_,P.aH)
r(P.fo,P.fn)
r(P.ef,P.fo)
q(K.dA,[K.aN,L.iy])
q(E.h0,[Z.bX,A.ay,T.il])
q(D.Q,[D.au,D.av,D.u,X.e4])
q(X.e4,[X.ci,X.bA,X.bB,X.cF])
q(O.bs,[D.cg,U.bv,M.c_])
q(D.h2,[U.h5,U.a5])
r(U.c0,U.a5)
q(A.ay,[A.c4,A.cl,A.cu,A.cB,A.cD])
q(A.iC,[A.cG,A.iE,A.iF,A.iG,A.iD,A.ev,A.ew,A.ex,A.ey,A.iI,A.eB,A.cH,A.cI,A.eD])
r(F.id,F.hn)
r(F.iB,F.hy)
r(F.iT,F.iU)
r(F.hX,F.iV)
q(O.ik,[O.hb,O.dL,O.dX,O.eb,O.eo])
q(O.dM,[O.hF,O.hG,O.cm])
q(O.cm,[O.hJ,O.hK])
q(T.il,[T.im,T.ip])
r(T.io,T.im)
q(X.ii,[X.h_,X.hr])
s(H.bH,H.eH)
s(H.cU,P.B)
s(H.cV,H.c9)
s(H.cW,P.B)
s(H.cX,H.c9)
s(P.cS,P.B)
s(P.d8,P.ea)
s(W.eS,W.h7)
s(W.eT,P.B)
s(W.eU,W.E)
s(W.eV,P.B)
s(W.eW,W.E)
s(W.f0,P.B)
s(W.f1,W.E)
s(W.f4,P.B)
s(W.f5,W.E)
s(W.f8,P.U)
s(W.f9,P.U)
s(W.fa,P.B)
s(W.fb,W.E)
s(W.fc,P.B)
s(W.fd,W.E)
s(W.fg,P.B)
s(W.fh,W.E)
s(W.fj,P.U)
s(W.cZ,P.B)
s(W.d_,W.E)
s(W.fk,P.B)
s(W.fl,W.E)
s(W.fq,P.U)
s(W.fu,P.B)
s(W.fv,W.E)
s(W.d1,P.B)
s(W.d2,W.E)
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
s(P.eO,P.U)
s(P.fn,P.B)
s(P.fo,W.E)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",V:"double",a0:"num",A:"String",bm:"bool",ae:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([Q?])","~(Q)","~()","~(i)","~(a9)","~(A,@)","~(n,h<bu>)","~(aj)","~(n,n)","~(~())","ae()","~(bj)","~(n,h<bf>)","~(b9)","~(~(Q))","A(n)","~(n,h<cf>)","V()","~(n,h<a5?>)","~(cM,V,V)","~(n,h<bz>)","~(n,h<cE>)","~(@,@)","bm(r)","@(@)","@(@,A)","@(A)","~(a0)","H(r)","~(aU)","ae(@)","bm(h<cf>)","A(c)","K(V)","bX(n)","~(A,A)","ae(~())","n(b_,b_)","n(b2,b2)","n(be,be)","n(bh,bh)","~(iu)","n(@,@)","~(@)","~(J?,J?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mL(v.typeUniverse,JSON.parse('{"e2":"b8","bG":"b8","aw":"b8","o8":"i","ok":"i","oa":"aH","o9":"c","or":"c","ou":"c","o7":"k","om":"k","ob":"l","op":"l","on":"r","oj":"r","oS":"ag","of":"aC","oc":"ai","ov":"ai","ot":"a9","oo":"b5","og":"C","oh":"al","oq":"bc","dD":{"bm":[]},"ak":{"m":["1"],"j":["1"],"h":["1"]},"dF":{"m":["1"],"j":["1"],"h":["1"]},"bx":{"V":[],"a0":[]},"cd":{"V":[],"n":[],"a0":[]},"dE":{"V":[],"a0":[]},"b7":{"A":[]},"dI":{"D":[]},"L":{"m":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"bb":{"h":["2"]},"c7":{"j":["2"],"h":["2"]},"cO":{"h":["1"]},"bH":{"m":["1"],"j":["1"],"h":["1"]},"cv":{"D":[]},"dG":{"D":[]},"eG":{"D":[]},"e8":{"D":[]},"R":{"W":["1","2"],"U.V":"2"},"aK":{"j":["1"],"h":["1"]},"bC":{"q":["1"]},"bc":{"q":["V"],"m":["V"],"j":["V"],"h":["V"]},"cq":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dR":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dS":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dT":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dU":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dV":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"cs":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"dW":{"q":["n"],"m":["n"],"j":["n"],"h":["n"]},"eY":{"D":[]},"d4":{"D":[]},"d3":{"iu":[]},"d0":{"h":["1"]},"cQ":{"j":["1"],"h":["1"]},"cc":{"h":["1"]},"ch":{"m":["1"],"j":["1"],"h":["1"]},"cj":{"W":["1","2"]},"U":{"W":["1","2"]},"cY":{"j":["1"],"h":["1"]},"V":{"a0":[]},"n":{"a0":[]},"m":{"j":["1"],"h":["1"]},"dl":{"D":[]},"eu":{"D":[]},"dY":{"D":[]},"aq":{"D":[]},"cy":{"D":[]},"dB":{"D":[]},"eI":{"D":[]},"eF":{"D":[]},"eh":{"D":[]},"dr":{"D":[]},"e0":{"D":[]},"cC":{"D":[]},"dt":{"D":[]},"H":{"r":[],"c":[]},"b9":{"i":[]},"a9":{"i":[]},"r":{"c":[]},"az":{"c":[]},"aA":{"c":[]},"ag":{"c":[]},"bj":{"i":[]},"aC":{"i":[]},"aU":{"a9":[],"i":[]},"l":{"H":[],"r":[],"c":[]},"dj":{"H":[],"r":[],"c":[]},"dk":{"H":[],"r":[],"c":[]},"b0":{"H":[],"r":[],"c":[]},"ai":{"r":[],"c":[]},"c5":{"m":["aa<a0>"],"q":["aa<a0>"],"j":["aa<a0>"],"h":["aa<a0>"]},"c6":{"aa":["a0"]},"dv":{"m":["A"],"q":["A"],"j":["A"],"h":["A"]},"eQ":{"m":["H"],"j":["H"],"h":["H"]},"dw":{"m":["aI"],"q":["aI"],"j":["aI"],"h":["aI"]},"dx":{"c":[]},"dz":{"H":[],"r":[],"c":[]},"b5":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"bw":{"H":[],"r":[],"c":[]},"dO":{"W":["A","@"],"U.V":"@"},"dP":{"W":["A","@"],"U.V":"@"},"dQ":{"m":["aM"],"q":["aM"],"j":["aM"],"h":["aM"]},"eP":{"m":["r"],"j":["r"],"h":["r"]},"ct":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"e3":{"m":["aO"],"q":["aO"],"j":["aO"],"h":["aO"]},"e7":{"W":["A","@"],"U.V":"@"},"e9":{"H":[],"r":[],"c":[]},"ed":{"m":["az"],"q":["az"],"c":[],"j":["az"],"h":["az"]},"ee":{"m":["aR"],"q":["aR"],"j":["aR"],"h":["aR"]},"ei":{"W":["A","A"],"U.V":"A"},"em":{"m":["ag"],"q":["ag"],"j":["ag"],"h":["ag"]},"en":{"m":["aA"],"q":["aA"],"c":[],"j":["aA"],"h":["aA"]},"es":{"m":["aT"],"q":["aT"],"j":["aT"],"h":["aT"]},"eK":{"c":[]},"bK":{"c":[]},"eR":{"m":["C"],"q":["C"],"j":["C"],"h":["C"]},"cP":{"aa":["a0"]},"f3":{"m":["aJ?"],"q":["aJ?"],"j":["aJ?"],"h":["aJ?"]},"cT":{"m":["r"],"q":["r"],"j":["r"],"h":["r"]},"fm":{"m":["aS"],"q":["aS"],"j":["aS"],"h":["aS"]},"ft":{"m":["al"],"q":["al"],"j":["al"],"h":["al"]},"d5":{"b6":[]},"dy":{"m":["H"],"j":["H"],"h":["H"]},"aa":{"fi":["1"]},"dJ":{"m":["ba"],"j":["ba"],"h":["ba"]},"dZ":{"m":["bd"],"j":["bd"],"h":["bd"]},"el":{"m":["A"],"j":["A"],"h":["A"]},"k":{"H":[],"r":[],"c":[]},"et":{"m":["bk"],"j":["bk"],"h":["bk"]},"dm":{"W":["A","@"],"U.V":"@"},"dn":{"c":[]},"aH":{"c":[]},"e_":{"c":[]},"ef":{"m":["W<@,@>"],"j":["W<@,@>"],"h":["W<@,@>"]},"bs":{"h":["1"]},"au":{"Q":[]},"av":{"Q":[]},"u":{"Q":[]},"ci":{"Q":[]},"bA":{"Q":[]},"bB":{"Q":[]},"e4":{"Q":[]},"cF":{"Q":[]},"c3":{"cf":[]},"cg":{"h":["cf"]},"c0":{"a5":[]},"bv":{"a5":[],"h":["a5?"]},"cJ":{"a5":[]},"cK":{"a5":[]},"c_":{"bf":[],"h":["bf"]},"c1":{"bf":[]},"c8":{"bf":[]},"c4":{"ay":[]},"cl":{"ay":[]},"cu":{"ay":[]},"cB":{"ay":[]},"cD":{"ay":[]}}'))
H.mK(v.typeUniverse,JSON.parse('{"ak":1,"dF":1,"a3":1,"j":1,"by":1,"bb":2,"c7":2,"ck":2,"cO":1,"eM":1,"c9":1,"eH":1,"bH":1,"aK":1,"dK":1,"bC":1,"bM":1,"d0":1,"ej":1,"ek":2,"cR":1,"cc":1,"ch":1,"B":1,"cj":2,"U":2,"ea":1,"cY":1,"cS":1,"d8":1,"dq":2,"ds":2,"h":1,"m":1,"dC":1,"eZ":1,"E":1,"ca":1,"bs":1,"au":1,"av":1,"u":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.nP
return{C:s("ar"),E:s("b0"),b:s("bZ"),V:s("j<@>"),h:s("H"),c:s("D"),B:s("i"),d:s("ol"),I:s("b6"),l:s("bw"),s:s("ak<@>"),T:s("ce"),M:s("aw"),p:s("q<@>"),e:s("R<n,bm>"),v:s("R<n,n>"),J:s("m<ez>"),L:s("m<eA>"),U:s("m<eC>"),R:s("m<eE>"),t:s("m<@>"),D:s("ci"),f:s("W<@,@>"),Z:s("bA"),O:s("bB"),P:s("ae"),K:s("J"),q:s("aa<a0>"),k:s("ay"),N:s("A"),u:s("iu"),w:s("eq"),aM:s("cF"),n:s("ev"),y:s("cG"),g:s("ex"),F:s("ey"),Q:s("eB"),j:s("cH"),G:s("cI"),a:s("eD"),o:s("bG"),cB:s("bm"),i:s("V"),z:s("@"),S:s("n"),A:s("0&*"),_:s("J*"),m:s("c4?"),bc:s("kg<ae>?"),d1:s("cl?"),bh:s("cu?"),X:s("J?"),ba:s("bF?"),x:s("cB?"),aJ:s("eg?"),Y:s("cD?"),aX:s("er?"),W:s("cG?"),ch:s("ew?"),cj:s("cH?"),r:s("cI?"),H:s("a0")}})();(function constants(){var s=hunkHelpers.makeConstList
C.h=W.b0.prototype
C.J=J.a.prototype
C.a=J.ak.prototype
C.b=J.cd.prototype
C.K=J.ce.prototype
C.c=J.bx.prototype
C.d=J.b7.prototype
C.L=J.aw.prototype
C.r=J.e2.prototype
C.t=P.bF.prototype
C.k=J.bG.prototype
C.u=W.aU.prototype
C.v=W.bK.prototype
C.w=new E.bq("Browser.chrome")
C.l=new E.bq("Browser.firefox")
C.m=new E.bq("Browser.edge")
C.x=new E.bq("Browser.other")
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
C.p=new P.iK()
C.F=new P.iL()
C.e=new P.j5()
C.f=new A.bt(0,"ColorBlendType.Overwrite")
C.G=new A.bt(1,"ColorBlendType.Additive")
C.H=new A.bt(2,"ColorBlendType.Average")
C.i=new A.bt(3,"ColorBlendType.AlphaBlend")
C.j=new P.b3(0)
C.I=new P.b3(5e6)
C.M=s([0,0,65498,45055,65535,34815,65534,18431])
C.N=new E.bD("OperatingSystem.windows")
C.q=new E.bD("OperatingSystem.mac")
C.O=new E.bD("OperatingSystem.linux")
C.P=new E.bD("OperatingSystem.other")
C.Q=new P.bL(null,2)})();(function staticFields(){$.j2=null
$.as=0
$.bW=null
$.ka=null
$.la=null
$.l6=null
$.le=null
$.jl=null
$.jq=null
$.k3=null
$.bO=null
$.db=null
$.dc=null
$.jY=!1
$.am=C.e
$.a6=[]
$.hi=null
$.kl=null
$.kp=null
$.Z=null
$.ax=null
$.kv=null
$.iM=null
$.kL=null
$.kK=null
$.iN=null
$.iO=null
$.iP=null
$.kJ=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"oi","lm",function(){return H.nQ("_$dart_dartClosure")})
s($,"ow","lo",function(){return H.aB(H.iA({
toString:function(){return"$receiver$"}}))})
s($,"ox","lp",function(){return H.aB(H.iA({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oy","lq",function(){return H.aB(H.iA(null))})
s($,"oz","lr",function(){return H.aB(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oC","lu",function(){return H.aB(H.iA(void 0))})
s($,"oD","lv",function(){return H.aB(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oB","lt",function(){return H.aB(H.kF(null))})
s($,"oA","ls",function(){return H.aB(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"oF","lx",function(){return H.aB(H.kF(void 0))})
s($,"oE","lw",function(){return H.aB(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"oT","k7",function(){return P.mq()})
s($,"oV","lB",function(){return P.md("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oM","lA",function(){return Z.ah(0)})
s($,"oG","ly",function(){return Z.ah(511)})
s($,"oO","Y",function(){return Z.ah(1)})
s($,"oN","ao",function(){return Z.ah(2)})
s($,"oI","an",function(){return Z.ah(4)})
s($,"oP","aF",function(){return Z.ah(8)})
s($,"oQ","ap",function(){return Z.ah(16)})
s($,"oJ","dh",function(){return Z.ah(32)})
s($,"oK","di",function(){return Z.ah(64)})
s($,"oL","lz",function(){return Z.ah(96)})
s($,"oR","bU",function(){return Z.ah(128)})
s($,"oH","aZ",function(){return Z.ah(256)})
s($,"oe","ll",function(){return new V.hj()})
r($,"od","y",function(){return $.ll()})
r($,"os","ln",function(){var q=V.ks(),p=V.jN(),o=$.kJ
return V.km(q,p,o==null?$.kJ=V.mo(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cr,ArrayBufferView:H.cr,Float32Array:H.bc,Float64Array:H.bc,Int16Array:H.dR,Int32Array:H.dS,Int8Array:H.dT,Uint16Array:H.dU,Uint32Array:H.dV,Uint8ClampedArray:H.cs,CanvasPixelArray:H.cs,Uint8Array:H.dW,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fT,HTMLAnchorElement:W.dj,HTMLAreaElement:W.dk,Blob:W.dp,HTMLCanvasElement:W.b0,CanvasRenderingContext2D:W.bZ,CDATASection:W.ai,CharacterData:W.ai,Comment:W.ai,ProcessingInstruction:W.ai,Text:W.ai,CSSPerspective:W.h6,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.c2,MSStyleCSSProperties:W.c2,CSS2Properties:W.c2,CSSImageValue:W.ad,CSSKeywordValue:W.ad,CSSNumericValue:W.ad,CSSPositionValue:W.ad,CSSResourceValue:W.ad,CSSUnitValue:W.ad,CSSURLImageValue:W.ad,CSSStyleValue:W.ad,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.h8,CSSUnparsedValue:W.h9,DataTransferItemList:W.ha,DOMException:W.hc,ClientRectList:W.c5,DOMRectList:W.c5,DOMRectReadOnly:W.c6,DOMStringList:W.dv,DOMTokenList:W.hd,Element:W.H,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.aI,FileList:W.dw,FileWriter:W.dx,HTMLFormElement:W.dz,Gamepad:W.aJ,History:W.hs,HTMLCollection:W.b5,HTMLFormControlsCollection:W.b5,HTMLOptionsCollection:W.b5,ImageData:W.b6,HTMLImageElement:W.bw,KeyboardEvent:W.b9,Location:W.hC,MediaList:W.hT,MIDIInputMap:W.dO,MIDIOutputMap:W.dP,MimeType:W.aM,MimeTypeArray:W.dQ,PointerEvent:W.a9,MouseEvent:W.a9,DragEvent:W.a9,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeList:W.ct,RadioNodeList:W.ct,Plugin:W.aO,PluginArray:W.e3,RTCStatsReport:W.e7,HTMLSelectElement:W.e9,SourceBuffer:W.az,SourceBufferList:W.ed,SpeechGrammar:W.aR,SpeechGrammarList:W.ee,SpeechRecognitionResult:W.aS,Storage:W.ei,CSSStyleSheet:W.al,StyleSheet:W.al,TextTrack:W.aA,TextTrackCue:W.ag,VTTCue:W.ag,TextTrackCueList:W.em,TextTrackList:W.en,TimeRanges:W.it,Touch:W.aT,TouchEvent:W.bj,TouchList:W.es,TrackDefaultList:W.ix,CompositionEvent:W.aC,FocusEvent:W.aC,TextEvent:W.aC,UIEvent:W.aC,URL:W.iJ,VideoTrackList:W.eK,WheelEvent:W.aU,Window:W.bK,DOMWindow:W.bK,CSSRuleList:W.eR,ClientRect:W.cP,DOMRect:W.cP,GamepadList:W.f3,NamedNodeMap:W.cT,MozNamedAttrMap:W.cT,SpeechRecognitionResultList:W.fm,StyleSheetList:W.ft,SVGLength:P.ba,SVGLengthList:P.dJ,SVGNumber:P.bd,SVGNumberList:P.dZ,SVGPointList:P.i0,SVGStringList:P.el,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bk,SVGTransformList:P.et,AudioBuffer:P.fY,AudioParamMap:P.dm,AudioTrackList:P.dn,AudioContext:P.aH,webkitAudioContext:P.aH,BaseAudioContext:P.aH,OfflineAudioContext:P.e_,WebGL2RenderingContext:P.bF,SQLResultSetRowList:P.ef})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.bc.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
W.cZ.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=S.nY
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
