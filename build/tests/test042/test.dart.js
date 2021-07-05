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
a[c]=function(){a[c]=function(){H.ob(b)}
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
if(a[b]!==s)H.oc(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k6"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.k6(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={jL:function jL(){},
ir:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mr:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
nN:function(a,b,c){return a},
m6:function(a,b){if(t.d.b(a))return new H.c6(a,b)
return new H.bd(a,b)},
km:function(){return new P.el("No element")},
mq:function(a,b){H.eg(a,0,J.br(a)-1,b)},
eg:function(a,b,c,d){if(c-b<=32)H.mp(a,b,c,d)
else H.mo(a,b,c,d)},
mp:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.fT(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.aq()
o=o>0}else o=!1
if(!o)break
n=p-1
r.l(a,p,r.h(a,n))
p=n}r.l(a,p,q)}},
mo:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a2(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a2(a4+a5,2),f=g-j,e=g+j,d=J.fT(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.aq()
if(a2>0){s=a1
a1=a0
a0=s}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.E(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.eg(a3,a4,r-2,a6)
H.eg(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.E(a6.$2(d.h(a3,r),b),0);)++r
for(;J.E(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.eg(a3,r,q,a6)}else H.eg(a3,r,q,a6)},
dO:function dO(a){this.a=a},
M:function M(a){this.a=a},
j:function j(){},
bA:function bA(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bd:function bd(a,b){this.a=a
this.b=b},
c6:function c6(a,b){this.a=a
this.b=b},
cl:function cl(a,b){this.a=null
this.b=a
this.c=b},
cS:function cS(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
c8:function c8(){},
eK:function eK(){},
bI:function bI(){},
lq:function(a){var s,r=H.lp(a)
if(r!=null)return r
s="minified:"+a
return s},
o2:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
u:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.fY(a)
return s},
cx:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cy:function(a){return H.m9(a)},
m9:function(a){var s,r,q,p
if(a instanceof P.K)return H.a9(H.bU(a),null)
if(J.di(a)===C.J||t.o.b(a)){s=C.n(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.a9(H.bU(a),null)},
kt:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mj:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r){q=a[r]
if(!H.fR(q))throw H.b(H.fS(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bk(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.b(H.fS(q))}return H.kt(p)},
mi:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.fR(q))throw H.b(H.fS(q))
if(q<0)throw H.b(H.fS(q))
if(q>65535)return H.mj(a)}return H.kt(a)},
mh:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.bk(s,10)|55296)>>>0,s&1023|56320)}throw H.b(P.ax(a,0,1114111,null,null))},
bF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mg:function(a){var s=H.bF(a).getFullYear()+0
return s},
me:function(a){var s=H.bF(a).getMonth()+1
return s},
ma:function(a){var s=H.bF(a).getDate()+0
return s},
mb:function(a){var s=H.bF(a).getHours()+0
return s},
md:function(a){var s=H.bF(a).getMinutes()+0
return s},
mf:function(a){var s=H.bF(a).getSeconds()+0
return s},
mc:function(a){var s=H.bF(a).getMilliseconds()+0
return s},
nY:function(a){throw H.b(H.fS(a))},
d:function(a,b){if(a==null)J.br(a)
throw H.b(H.bS(a,b))},
bS:function(a,b){var s,r="index"
if(!H.fR(b))return new P.ap(!0,b,r,null)
s=J.br(a)
if(b<0||b>=s)return P.H(b,a,r,null,s)
return P.e9(b,r)},
nS:function(a,b,c){if(a>c)return P.ax(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.ax(b,a,c,"end",null)
return new P.ap(!0,b,"end",null)},
fS:function(a){return new P.ap(!0,a,null,null)},
b:function(a){var s,r
if(a==null)a=new P.e1()
s=new Error()
s.dartException=a
r=H.od
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
od:function(){return J.fY(this.dartException)},
f:function(a){throw H.b(a)},
o:function(a){throw H.b(P.b4(a))},
aB:function(a){var s,r,q,p,o,n
a=H.ll(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iI(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iJ:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
kG:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
jM:function(a,b){var s=b==null,r=s?null:b.method
return new H.dM(a,r,s?null:b.receiver)},
fW:function(a){if(a==null)return new H.i8(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bq(a,a.dartException)
return H.nJ(a)},
bq:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nJ:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bk(r,16)&8191)===10)switch(q){case 438:return H.bq(a,H.jM(H.u(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.u(s)+" (Error "+q+")"
return H.bq(a,new H.cv(p,e))}}if(a instanceof TypeError){o=$.lu()
n=$.lv()
m=$.lw()
l=$.lx()
k=$.lA()
j=$.lB()
i=$.lz()
$.ly()
h=$.lD()
g=$.lC()
f=o.am(s)
if(f!=null)return H.bq(a,H.jM(s,f))
else{f=n.am(s)
if(f!=null){f.method="call"
return H.bq(a,H.jM(s,f))}else{f=m.am(s)
if(f==null){f=l.am(s)
if(f==null){f=k.am(s)
if(f==null){f=j.am(s)
if(f==null){f=i.am(s)
if(f==null){f=l.am(s)
if(f==null){f=h.am(s)
if(f==null){f=g.am(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bq(a,new H.cv(s,f==null?e:f.method))}}return H.bq(a,new H.eJ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cD()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bq(a,new P.ap(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cD()
return a},
k8:function(a){var s
if(a==null)return new H.ft(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.ft(a)},
nU:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
o1:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.e("Unsupported number of arguments for wrapped closure"))},
bR:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o1)
a.$identity=s
return s},
lW:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ip().constructor.prototype):Object.create(new H.bW(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aq
if(typeof r!=="number")return r.a_()
$.aq=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kf(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.lS(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kf(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
lS:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lh,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
s=c?H.lQ:H.lP
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.b("Error in functionType of tearoff")},
lT:function(a,b,c,d){var s=H.ke
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kf:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.lV(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.lT(r,!p,s,b)
if(r===0){p=$.aq
if(typeof p!=="number")return p.a_()
$.aq=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.bX
return new Function(p+(o==null?$.bX=H.h8("self"):o)+";return "+n+"."+H.u(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aq
if(typeof p!=="number")return p.a_()
$.aq=p+1
m+=p
p="return function("+m+"){return this."
o=$.bX
return new Function(p+(o==null?$.bX=H.h8("self"):o)+"."+H.u(s)+"("+m+");}")()},
lU:function(a,b,c,d){var s=H.ke,r=H.lR
switch(b?-1:a){case 0:throw H.b(new H.ed("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
lV:function(a,b){var s,r,q,p,o,n,m,l=$.bX
if(l==null)l=$.bX=H.h8("self")
s=$.kd
if(s==null)s=$.kd=H.h8("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.lU(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.u(r)+"(this."+s+");"
n=$.aq
if(typeof n!=="number")return n.a_()
$.aq=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.u(r)+"(this."+s+", "+m+");"
n=$.aq
if(typeof n!=="number")return n.a_()
$.aq=n+1
return new Function(o+n+"}")()},
k6:function(a,b,c,d,e,f,g){return H.lW(a,b,c,d,!!e,!!f,g)},
lP:function(a,b){return H.fF(v.typeUniverse,H.bU(a.a),b)},
lQ:function(a,b){return H.fF(v.typeUniverse,H.bU(a.c),b)},
ke:function(a){return a.a},
lR:function(a){return a.c},
h8:function(a){var s,r,q,p=new H.bW("self","target","receiver","name"),o=J.jK(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.b(P.jE("Field name "+a+" not found."))},
ob:function(a){throw H.b(new P.dx(a))},
nX:function(a){return v.getIsolateTag(a)},
oc:function(a){return H.f(new H.dO(a))},
pe:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o4:function(a){var s,r,q,p,o,n=$.lg.$1(a),m=$.jr[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.la.$2(a,n)
if(q!=null){m=$.jr[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jx(s)
$.jr[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jw[n]=s
return s}if(p==="-"){o=H.jx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lj(a,s)
if(p==="*")throw H.b(P.kH(n))
if(v.leafTags[n]===true){o=H.jx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lj(a,s)},
lj:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ka(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jx:function(a){return J.ka(a,!1,null,!!a.$iv)},
o6:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jx(s)
else return J.ka(s,c,null,null)},
o_:function(){if(!0===$.k9)return
$.k9=!0
H.o0()},
o0:function(){var s,r,q,p,o,n,m,l
$.jr=Object.create(null)
$.jw=Object.create(null)
H.nZ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lk.$1(o)
if(n!=null){m=H.o6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
nZ:function(){var s,r,q,p,o,n,m=C.z()
m=H.bQ(C.A,H.bQ(C.B,H.bQ(C.o,H.bQ(C.o,H.bQ(C.C,H.bQ(C.D,H.bQ(C.E(C.n),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lg=new H.jt(p)
$.la=new H.ju(o)
$.lk=new H.jv(n)},
bQ:function(a,b){return a(b)||b},
m3:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.b(new P.hy("Illegal RegExp pattern ("+String(n)+")",a))},
lm:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
nT:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ll:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ln:function(a,b,c){var s=H.oa(a,b,c)
return s},
oa:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ll(b),'g'),H.nT(c))},
iI:function iI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cv:function cv(a,b){this.a=a
this.b=b},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a){this.a=a},
i8:function i8(a){this.a=a},
ft:function ft(a){this.a=a
this.b=null},
bt:function bt(){},
it:function it(){},
ip:function ip(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function ed(a){this.a=a},
U:function U(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hE:function hE(a){this.a=a},
hI:function hI(a,b){this.a=a
this.b=b
this.c=null},
aM:function aM(a){this.a=a},
dQ:function dQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
hD:function hD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bO:function(a){return a},
aE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bS(b,a))},
mY:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.b(H.nS(a,b,c))
return b},
cs:function cs(){},
bD:function bD(){},
bf:function bf(){},
cr:function cr(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
ct:function ct(){},
e0:function e0(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
ky:function(a,b){var s=b.c
return s==null?b.c=H.k_(a,b.z,!0):s},
kx:function(a,b){var s=b.c
return s==null?b.c=H.da(a,"kj",[b.z]):s},
kz:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kz(a.z)
return s===11||s===12},
mm:function(a){return a.cy},
nV:function(a){return H.k0(v.typeUniverse,a,!1)},
aX:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.l_(a,r,!0)
case 7:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.k_(a,r,!0)
case 8:s=b.z
r=H.aX(a,s,a0,a1)
if(r===s)return b
return H.kZ(a,r,!0)
case 9:q=b.Q
p=H.dh(a,q,a0,a1)
if(p===q)return b
return H.da(a,b.z,p)
case 10:o=b.z
n=H.aX(a,o,a0,a1)
m=b.Q
l=H.dh(a,m,a0,a1)
if(n===o&&l===m)return b
return H.jY(a,n,l)
case 11:k=b.z
j=H.aX(a,k,a0,a1)
i=b.Q
h=H.nG(a,i,a0,a1)
if(j===k&&h===i)return b
return H.kY(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dh(a,g,a0,a1)
o=b.z
n=H.aX(a,o,a0,a1)
if(f===g&&n===o)return b
return H.jZ(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.b(P.h0("Attempted to substitute unexpected RTI kind "+c))}},
dh:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.aX(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nH:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.aX(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nG:function(a,b,c,d){var s,r=b.a,q=H.dh(a,r,c,d),p=b.b,o=H.dh(a,p,c,d),n=b.c,m=H.nH(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.f6()
s.a=q
s.b=o
s.c=m
return s},
pg:function(a,b){a[v.arrayRti]=b
return a},
nO:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lh(s)
return a.$S()}return null},
li:function(a,b){var s
if(H.kz(b))if(a instanceof H.bt){s=H.nO(a)
if(s!=null)return s}return H.bU(a)},
bU:function(a){var s
if(a instanceof P.K){s=a.$ti
return s!=null?s:H.k1(a)}if(Array.isArray(a))return H.l2(a)
return H.k1(J.di(a))},
l2:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S:function(a){var s=a.$ti
return s!=null?s:H.k1(a)},
k1:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.n4(a,s)},
n4:function(a,b){var s=a instanceof H.bt?a.__proto__.__proto__.constructor:b,r=H.mT(v.typeUniverse,s.name)
b.$ccache=r
return r},
lh:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.k0(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
n3:function(a){var s,r,q,p=this
if(p===t.K)return H.de(p,a,H.n8)
if(!H.aF(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.de(p,a,H.nb)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.fR
else if(r===t.i||r===t.H)q=H.n7
else if(r===t.N)q=H.n9
else q=r===t.cB?H.k2:null
if(q!=null)return H.de(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.o3)){p.r="$i"+s
return H.de(p,a,H.na)}}else if(s===7)return H.de(p,a,H.n1)
return H.de(p,a,H.n_)},
de:function(a,b,c){a.b=c
return a.b(b)},
n2:function(a){var s,r=this,q=H.mZ
if(!H.aF(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.mX
else if(r===t.K)q=H.mV
else{s=H.dj(r)
if(s)q=H.n0}r.a=q
return r.a(a)},
k5:function(a){var s,r=a.y
if(!H.aF(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.k5(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
n_:function(a){var s=this
if(a==null)return H.k5(s)
return H.J(v.typeUniverse,H.li(a,s),null,s,null)},
n1:function(a){if(a==null)return!0
return this.z.b(a)},
na:function(a){var s,r=this
if(a==null)return H.k5(r)
s=r.r
if(a instanceof P.K)return!!a[s]
return!!J.di(a)[s]},
mZ:function(a){var s,r=this
if(a==null){s=H.dj(r)
if(s)return a}else if(r.b(a))return a
H.l5(a,r)},
n0:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.l5(a,s)},
l5:function(a,b){throw H.b(H.mJ(H.kT(a,H.li(a,b),H.a9(b,null))))},
kT:function(a,b,c){var s=P.hs(a),r=H.a9(b==null?H.bU(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
mJ:function(a){return new H.d8("TypeError: "+a)},
a2:function(a,b){return new H.d8("TypeError: "+H.kT(a,null,b))},
n8:function(a){return a!=null},
mV:function(a){if(a!=null)return a
throw H.b(H.a2(a,"Object"))},
nb:function(a){return!0},
mX:function(a){return a},
k2:function(a){return!0===a||!1===a},
l3:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.b(H.a2(a,"bool"))},
p3:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a2(a,"bool"))},
p2:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.b(H.a2(a,"bool?"))},
p4:function(a){if(typeof a=="number")return a
throw H.b(H.a2(a,"double"))},
p6:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a2(a,"double"))},
p5:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a2(a,"double?"))},
fR:function(a){return typeof a=="number"&&Math.floor(a)===a},
fQ:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.b(H.a2(a,"int"))},
p8:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a2(a,"int"))},
p7:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.a2(a,"int?"))},
n7:function(a){return typeof a=="number"},
p9:function(a){if(typeof a=="number")return a
throw H.b(H.a2(a,"num"))},
pb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a2(a,"num"))},
pa:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.a2(a,"num?"))},
n9:function(a){return typeof a=="string"},
mW:function(a){if(typeof a=="string")return a
throw H.b(H.a2(a,"String"))},
pd:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a2(a,"String"))},
pc:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.a2(a,"String?"))},
nC:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.a9(a[q],b)
return s},
l6:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
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
if(l===9){p=H.nI(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nC(o,b)+">"):p}if(l===11)return H.l6(a,b,null)
if(l===12)return H.l6(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
nI:function(a){var s,r=H.lp(a)
if(r!=null)return r
s="minified:"+a
return s},
l0:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
mT:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.k0(a,b,!1)
else if(typeof m=="number"){s=m
r=H.db(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.da(a,b,q)
n[b]=o
return o}else return m},
mR:function(a,b){return H.l1(a.tR,b)},
mQ:function(a,b){return H.l1(a.eT,b)},
k0:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.kX(H.kV(a,null,b,c))
r.set(b,s)
return s},
fF:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.kX(H.kV(a,b,c,!0))
q.set(c,r)
return r},
mS:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.jY(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aW:function(a,b){b.a=H.n2
b.b=H.n3
return b},
db:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ae(null,null)
s.y=b
s.cy=c
r=H.aW(a,s)
a.eC.set(c,r)
return r},
l_:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.mO(a,b,r,c)
a.eC.set(r,s)
return s},
mO:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aF(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ae(null,null)
q.y=6
q.z=b
q.cy=c
return H.aW(a,q)},
k_:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.mN(a,b,r,c)
a.eC.set(r,s)
return s},
mN:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aF(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dj(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dj(q.z))return q
else return H.ky(a,b)}}p=new H.ae(null,null)
p.y=7
p.z=b
p.cy=c
return H.aW(a,p)},
kZ:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.mL(a,b,r,c)
a.eC.set(r,s)
return s},
mL:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aF(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.da(a,"kj",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ae(null,null)
q.y=8
q.z=b
q.cy=c
return H.aW(a,q)},
mP:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ae(null,null)
s.y=13
s.z=b
s.cy=q
r=H.aW(a,s)
a.eC.set(q,r)
return r},
fE:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
mK:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
da:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fE(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ae(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.aW(a,r)
a.eC.set(p,q)
return q},
jY:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fE(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ae(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.aW(a,o)
a.eC.set(q,n)
return n},
kY:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fE(m)
if(j>0){s=l>0?",":""
r=H.fE(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.mK(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ae(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.aW(a,o)
a.eC.set(q,r)
return r},
jZ:function(a,b,c,d){var s,r=b.cy+("<"+H.fE(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.mM(a,b,c,r,d)
a.eC.set(r,s)
return s},
mM:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.aX(a,b,r,0)
m=H.dh(a,c,r,0)
return H.jZ(a,n,m,c!==m)}}l=new H.ae(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.aW(a,l)},
kV:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
kX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mD(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.kW(a,r,h,g,!1)
else if(q===46)r=H.kW(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.aV(a.u,a.e,g.pop()))
break
case 94:g.push(H.mP(a.u,g.pop()))
break
case 35:g.push(H.db(a.u,5,"#"))
break
case 64:g.push(H.db(a.u,2,"@"))
break
case 126:g.push(H.db(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.jX(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.da(p,n,o))
else{m=H.aV(p,a.e,n)
switch(m.y){case 11:g.push(H.jZ(p,m,o,a.n))
break
default:g.push(H.jY(p,m,o))
break}}break
case 38:H.mE(a,g)
break
case 42:p=a.u
g.push(H.l_(p,H.aV(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.k_(p,H.aV(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.kZ(p,H.aV(p,a.e,g.pop()),a.n))
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
H.jX(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.kY(p,H.aV(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.jX(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.mG(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.aV(a.u,a.e,i)},
mD:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
kW:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.l0(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mm(o)+'"')
d.push(H.fF(s,o,n))}else d.push(p)
return m},
mE:function(a,b){var s=b.pop()
if(0===s){b.push(H.db(a.u,1,"0&"))
return}if(1===s){b.push(H.db(a.u,4,"1&"))
return}throw H.b(P.h0("Unexpected extended operation "+H.u(s)))},
aV:function(a,b,c){if(typeof c=="string")return H.da(a,c,a.sEA)
else if(typeof c=="number")return H.mF(a,b,c)
else return c},
jX:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.aV(a,b,c[s])},
mG:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.aV(a,b,c[s])},
mF:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.b(P.h0("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.b(P.h0("Bad index "+c+" for "+b.i(0)))},
J:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aF(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aF(b))return!1
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
if(p===6){s=H.ky(a,d)
return H.J(a,b,c,s,e)}if(r===8){if(!H.J(a,b.z,c,d,e))return!1
return H.J(a,H.kx(a,b),c,d,e)}if(r===7){s=H.J(a,t.P,c,d,e)
return s&&H.J(a,b.z,c,d,e)}if(p===8){if(H.J(a,b,c,d.z,e))return!0
return H.J(a,b,c,H.kx(a,d),e)}if(p===7){s=H.J(a,b,c,t.P,e)
return s||H.J(a,b,c,d.z,e)}if(q)return!1
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
if(!H.J(a,k,c,j,e)||!H.J(a,j,e,k,c))return!1}return H.l7(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.l7(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.n6(a,b,c,d,e)}return!1},
l7:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
n6:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.J(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.l0(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.J(a,H.fF(a,b,l[p]),c,r[p],e))return!1
return!0},
dj:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aF(a))if(r!==7)if(!(r===6&&H.dj(a.z)))s=r===8&&H.dj(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
o3:function(a){var s
if(!H.aF(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aF:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
l1:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ae:function ae(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
f6:function f6(){this.c=this.b=this.a=null},
f1:function f1(){},
d8:function d8(a){this.a=a},
lp:function(a){return v.mangledGlobalNames[a]},
o7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ka:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
js:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.k9==null){H.o_()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.b(P.kH("Return interceptor for "+H.u(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.j6
if(o==null)o=$.j6=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.o4(a)
if(p!=null)return p
if(typeof a=="function")return C.L
s=Object.getPrototypeOf(a)
if(s==null)return C.t
if(s===Object.prototype)return C.t
if(typeof q=="function"){o=$.j6
if(o==null)o=$.j6=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
m0:function(a){if(a<0||a>4294967295)throw H.b(P.ax(a,0,4294967295,"length",null))
return J.m1(new Array(a))},
jJ:function(a){if(a<0)throw H.b(P.jE("Length must be a non-negative integer: "+a))
return new Array(a)},
m1:function(a){return J.jK(a)},
jK:function(a){a.fixed$length=Array
return a},
m2:function(a,b){return J.lL(a,b)},
di:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ce.prototype
return J.dK.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.cf.prototype
if(typeof a=="boolean")return J.dJ.prototype
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.K)return a
return J.js(a)},
fT:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.K)return a
return J.js(a)},
k7:function(a){if(a==null)return a
if(a.constructor==Array)return J.al.prototype
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.K)return a
return J.js(a)},
nW:function(a){if(typeof a=="number")return J.bz.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bH.prototype
return a},
bp:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.av.prototype
return a}if(a instanceof P.K)return a
return J.js(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.di(a).n(a,b)},
lI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fT(a).h(a,b)},
lJ:function(a,b,c){return J.bp(a).fO(a,b,c)},
lK:function(a,b,c,d){return J.bp(a).h3(a,b,c,d)},
lL:function(a,b){return J.nW(a).aj(a,b)},
jC:function(a,b){return J.k7(a).H(a,b)},
jD:function(a,b){return J.k7(a).K(a,b)},
lM:function(a){return J.bp(a).gdj(a)},
lN:function(a){return J.bp(a).gdm(a)},
fX:function(a){return J.di(a).gI(a)},
aH:function(a){return J.k7(a).gP(a)},
br:function(a){return J.fT(a).gj(a)},
lO:function(a,b){return J.bp(a).hM(a,b)},
fY:function(a){return J.di(a).i(a)},
a:function a(){},
dJ:function dJ(){},
cf:function cf(){},
ba:function ba(){},
e6:function e6(){},
bH:function bH(){},
av:function av(){},
al:function al(){},
dL:function dL(){},
a4:function a4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bz:function bz(){},
ce:function ce(){},
dK:function dK(){},
b9:function b9(){}},P={
mw:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nK()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.bR(new P.j2(q),1)).observe(s,{childList:true})
return new P.j1(q,s,r)}else if(self.setImmediate!=null)return P.nL()
return P.nM()},
mx:function(a){self.scheduleImmediate(H.bR(new P.j3(a),0))},
my:function(a){self.setImmediate(H.bR(new P.j4(a),0))},
mz:function(a){P.jS(C.j,a)},
jS:function(a,b){var s=C.c.a2(a.a,1000)
return P.mH(s<0?0:s,b)},
kF:function(a,b){var s=C.c.a2(a.a,1000)
return P.mI(s<0?0:s,b)},
mH:function(a,b){var s=new P.d7()
s.ep(a,b)
return s},
mI:function(a,b){var s=new P.d7()
s.eq(a,b)
return s},
p0:function(a){return new P.bM(a,1)},
mA:function(){return C.Q},
mB:function(a){return new P.bM(a,3)},
nd:function(a){return new P.d4(a)},
nz:function(){var s,r
for(s=$.bP;s!=null;s=$.bP){$.dg=null
r=s.b
$.bP=r
if(r==null)$.df=null
s.a.$0()}},
nF:function(){$.k3=!0
try{P.nz()}finally{$.dg=null
$.k3=!1
if($.bP!=null)$.kc().$1(P.lb())}},
nD:function(a){var s=new P.eR(a),r=$.df
if(r==null){$.bP=$.df=s
if(!$.k3)$.kc().$1(P.lb())}else $.df=r.b=s},
nE:function(a){var s,r,q,p=$.bP
if(p==null){P.nD(a)
$.dg=$.df
return}s=new P.eR(a)
r=$.dg
if(r==null){s.b=p
$.bP=$.dg=s}else{q=r.b
s.b=q
$.dg=r.b=s
if(q==null)$.df=s}},
kE:function(a,b){var s=$.ao
if(s===C.e)return P.jS(a,b)
return P.jS(a,s.ha(b))},
mu:function(a,b){var s=$.ao
if(s===C.e)return P.kF(a,b)
return P.kF(a,s.dh(b,t.w))},
l8:function(a,b,c,d,e){P.nE(new P.jl(d,e))},
nA:function(a,b,c,d){var s,r=$.ao
if(r===c)return d.$0()
$.ao=c
s=r
try{r=d.$0()
return r}finally{$.ao=s}},
nB:function(a,b,c,d,e){var s,r=$.ao
if(r===c)return d.$1(e)
$.ao=c
s=r
try{r=d.$1(e)
return r}finally{$.ao=s}},
j2:function j2(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
d7:function d7(){this.c=0},
jd:function jd(a,b){this.a=a
this.b=b},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b){this.a=a
this.b=b},
bN:function bN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
d4:function d4(a){this.a=a},
eR:function eR(a){this.a=a
this.b=null},
en:function en(){},
eo:function eo(){},
jf:function jf(){},
jl:function jl(a,b){this.a=a
this.b=b},
j9:function j9(){},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
m4:function(a,b,c){return H.nU(a,new H.U(b.aw("@<0>").cP(c).aw("U<1,2>")))},
P:function(a,b){return new H.U(a.aw("@<0>").cP(b).aw("U<1,2>"))},
kn:function(a){return new P.cU(a.aw("cU<0>"))},
jW:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mC:function(a,b){var s=new P.cV(a,b)
s.c=a.e
return s},
m_:function(a,b,c){var s,r
if(P.k4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a6.push(a)
try{P.nc(a,s)}finally{if(0>=$.a6.length)return H.d($.a6,-1)
$.a6.pop()}r=P.kA(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jI:function(a,b,c){var s,r
if(P.k4(a))return b+"..."+c
s=new P.aS(b)
$.a6.push(a)
try{r=s
r.a=P.kA(r.a,a,", ")}finally{if(0>=$.a6.length)return H.d($.a6,-1)
$.a6.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
k4:function(a){var s,r
for(s=$.a6.length,r=0;r<s;++r)if(a===$.a6[r])return!0
return!1},
nc:function(a,b){var s,r,q,p,o,n,m,l=a.gP(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.u(l.gG(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gG(l);++j
if(!l.t()){if(j<=4){b.push(H.u(p))
return}r=H.u(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gG(l);++j
for(;l.t();p=o,o=n){n=l.gG(l);++j
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
ko:function(a){var s,r={}
if(P.k4(a))return"{...}"
s=new P.aS("")
try{$.a6.push(a)
s.a+="{"
r.a=!0
J.jD(a,new P.hN(r,s))
s.a+="}"}finally{if(0>=$.a6.length)return H.d($.a6,-1)
$.a6.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cU:function cU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j8:function j8(a){this.a=a
this.c=this.b=null},
cV:function cV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function cd(){},
ci:function ci(){},
B:function B(){},
ck:function ck(){},
hN:function hN(a,b){this.a=a
this.b=b},
W:function W(){},
ef:function ef(){},
d1:function d1(){},
cW:function cW(){},
dc:function dc(){},
du:function du(){},
dw:function dw(){},
hp:function hp(){},
iT:function iT(){},
iU:function iU(){},
je:function je(a){this.b=0
this.c=a},
lZ:function(a){if(a instanceof H.bt)return a.i(0)
return"Instance of '"+H.cy(a)+"'"},
hJ:function(a,b,c){var s,r=c?J.jJ(a):J.m0(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hK:function(a,b){var s,r=[]
for(s=J.aH(a);s.t();)r.push(s.gG(s))
if(b)return r
return J.jK(r)},
m5:function(a,b){var s,r,q=J.jJ(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
jQ:function(a){var s=a,r=s.length,q=P.jP(0,null,r)
return H.mi(q<r?s.slice(0,q):s)},
mk:function(a){return new H.hD(a,H.m3(a,!1,!0,!1,!1,!1))},
kA:function(a,b,c){var s=J.aH(b)
if(!s.t())return a
if(c.length===0){do a+=H.u(s.gG(s))
while(s.t())}else{a+=H.u(s.gG(s))
for(;s.t();)a=a+c+H.u(s.gG(s))}return a},
mU:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.p){s=$.lH().b
s=s.test(b)}else s=!1
if(s)return b
r=C.G.hh(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.mh(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
lX:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
lY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dy:function(a){if(a>=10)return""+a
return"0"+a},
kh:function(a){return new P.b6(1000*a)},
hs:function(a){if(typeof a=="number"||H.k2(a)||null==a)return J.fY(a)
if(typeof a=="string")return JSON.stringify(a)
return P.lZ(a)},
h0:function(a){return new P.dq(a)},
jE:function(a){return new P.ap(!1,null,null,a)},
e9:function(a,b){return new P.cz(null,null,!0,a,b,"Value not in range")},
ax:function(a,b,c,d,e){return new P.cz(b,c,!0,a,d,"Invalid value")},
jP:function(a,b,c){if(a>c)throw H.b(P.ax(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.b(P.ax(b,a,c,"end",null))
return b}return c},
ku:function(a,b){if(a<0)throw H.b(P.ax(a,0,null,b,null))
return a},
H:function(a,b,c,d,e){var s=e==null?J.br(b):e
return new P.dH(s,!0,a,c,"Index out of range")},
x:function(a){return new P.eL(a)},
kH:function(a){return new P.eI(a)},
b4:function(a){return new P.dv(a)},
e:function(a){return new P.f3(a)},
kb:function(a){H.o7(a)},
T:function T(a,b){this.a=a
this.b=b},
b6:function b6(a){this.a=a},
hm:function hm(){},
hn:function hn(){},
D:function D(){},
dq:function dq(a){this.a=a},
ey:function ey(){},
e1:function e1(){},
ap:function ap(a,b,c,d){var _=this
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
dH:function dH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eL:function eL(a){this.a=a},
eI:function eI(a){this.a=a},
el:function el(a){this.a=a},
dv:function dv(a){this.a=a},
e4:function e4(){},
cD:function cD(){},
dx:function dx(a){this.a=a},
f3:function f3(a){this.a=a},
hy:function hy(a,b){this.a=a
this.b=b},
h:function h(){},
dI:function dI(){},
ac:function ac(){},
K:function K(){},
aS:function aS(a){this.a=a},
nQ:function(a){var s,r,q,p
if(t.I.b(a)){s=J.lN(a)
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
return new P.d9(r,q,p)},
nP:function(a){if(a instanceof P.d9)return{data:a.a,height:a.b,width:a.c}
return a},
aY:function(a){var s,r,q,p,o
if(a==null)return null
s=P.P(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
s.l(0,o,a[o])}return s},
l4:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.k2(a))return a
if(t.f.b(a))return P.lc(a)
if(t.t.b(a)){s=[]
J.jD(a,new P.jh(s))
a=s}return a},
lc:function(a){var s={}
J.jD(a,new P.jm(s))
return s},
d9:function d9(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a){this.a=a},
jm:function jm(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b},
hw:function hw(){},
hx:function hx(){},
fm:function fm(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
dP:function dP(){},
bg:function bg(){},
e2:function e2(){},
ia:function ia(){},
ep:function ep(){},
k:function k(){},
bm:function bm(){},
ex:function ex(){},
fa:function fa(){},
fb:function fb(){},
fi:function fi(){},
fj:function fj(){},
fv:function fv(){},
fw:function fw(){},
fC:function fC(){},
fD:function fD(){},
h3:function h3(){},
dr:function dr(){},
h4:function h4(a){this.a=a},
ds:function ds(){},
aI:function aI(){},
e3:function e3(){},
eS:function eS(){},
bG:function bG(){},
ej:function ej(){},
fr:function fr(){},
fs:function fs(){}},W={
jF:function(){var s=document.createElement("canvas")
s.toString
return s},
ho:function(a){return"wheel"},
j7:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
kU:function(a,b,c,d){var s=W.j7(W.j7(W.j7(W.j7(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
Z:function(a,b,c,d){var s=W.l9(new W.j5(c),t.B)
if(s!=null&&!0)J.lK(a,b,s,!1)
return new W.f2(a,b,s,!1)},
l9:function(a,b){var s=$.ao
if(s===C.e)return a
return s.dh(a,b)},
l:function l(){},
fZ:function fZ(){},
dn:function dn(){},
dp:function dp(){},
dt:function dt(){},
b3:function b3(){},
c_:function c_(){},
ai:function ai(){},
hf:function hf(){},
C:function C(){},
c3:function c3(){},
hg:function hg(){},
ab:function ab(){},
ar:function ar(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
c4:function c4(){},
c5:function c5(){},
dz:function dz(){},
hl:function hl(){},
eU:function eU(a,b){this.a=a
this.b=b},
I:function I(){},
i:function i(){},
c:function c(){},
aK:function aK(){},
dB:function dB(){},
dC:function dC(){},
dE:function dE(){},
aL:function aL(){},
hB:function hB(){},
b7:function b7(){},
b8:function b8(){},
by:function by(){},
bb:function bb(){},
hL:function hL(){},
i3:function i3(){},
dT:function dT(){},
i4:function i4(a){this.a=a},
dU:function dU(){},
i5:function i5(a){this.a=a},
aN:function aN(){},
dV:function dV(){},
a7:function a7(){},
eT:function eT(a){this.a=a},
w:function w(){},
cu:function cu(){},
aP:function aP(){},
e7:function e7(){},
ec:function ec(){},
ig:function ig(a){this.a=a},
ee:function ee(){},
az:function az(){},
eh:function eh(){},
aQ:function aQ(){},
ei:function ei(){},
aR:function aR(){},
em:function em(){},
iq:function iq(a){this.a=a},
an:function an(){},
aA:function aA(){},
af:function af(){},
eq:function eq(){},
er:function er(){},
iC:function iC(){},
aT:function aT(){},
bl:function bl(){},
ew:function ew(){},
iG:function iG(){},
aC:function aC(){},
iS:function iS(){},
eO:function eO(){},
aU:function aU(){},
bL:function bL(){},
eV:function eV(){},
cT:function cT(){},
f7:function f7(){},
cX:function cX(){},
fq:function fq(){},
fx:function fx(){},
jH:function jH(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j5:function j5(a){this.a=a},
jV:function jV(a){this.$ti=a},
F:function F(){},
c9:function c9(a,b){var _=this
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
d2:function d2(){},
d3:function d3(){},
fo:function fo(){},
fp:function fp(){},
fu:function fu(){},
fy:function fy(){},
fz:function fz(){},
d5:function d5(){},
d6:function d6(){},
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
fP:function fP(){}},K={h_:function h_(){},dG:function dG(){},aO:function aO(a){this.a=a},V:function V(a){this.a=a}},L={ek:function ek(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},ev:function ev(a,b){this.b=a
this.c=b},iE:function iE(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},iH:function iH(a,b){this.b=a
this.c=!1
this.a=b}},O={
ha:function(){return new O.bu([])},
bu:function bu(a){this.a=a
this.c=this.b=null},
cq:function cq(a){this.a=a
this.b=null},
kk:function(a,b){var s,r=V.jN(),q=V.kQ(),p=$.ag
r=new O.dF(r,q,p==null?$.ag=new V.R(0,0):p)
q=V.jN()
r.shS(q)
q=V.kQ()
r.shb(q)
if(a==null){q=$.ag
if(q==null){q=new V.R(0,0)
$.ag=q}}else q=a
if(!r.d.n(0,q)){s=r.d
r.d=q
r.E(new D.p("blurDirection",s,q))}r.sdl(b)
r.sc1(null)
r.shc(0)
return r},
hO:function(){var s=O.ha(),r=new O.dR(s)
s.aK(r.geR(),r.geT())
s=r.gdO()
s.gm().k(0,r.gd1())
s.gdN().k(0,r.ga4())
return r},
dS:function(a,b){return new O.co(new V.N(0,0,0),a,b,new A.aj(!1,!1,!1))},
kC:function(){var s=O.ha(),r=new O.es(new V.a5(0,0,0,0),s,C.i,C.i)
s.aK(r.gf6(),r.gf8())
return r},
jR:function(a,b){var s=a==null?V.a_():a,r=V.eb(),q=V.eb()
return new O.cF(b,s,r,q)},
dF:function dF(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.f=_.e=null
_.r=0
_.x=null},
dR:function dR(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(){},
hX:function hX(a,b){this.a=a
this.b=b},
hY:function hY(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(){},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(){},
hP:function hP(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cn:function cn(){},
hQ:function hQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
co:function co(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hS:function hS(a){this.b=a},
hT:function hT(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
hU:function hU(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
iu:function iu(){},
es:function es(a,b,c,d){var _=this
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
dA:function(){var s=O.ha(),r=new E.bw(s)
s.aK(r.ghv(),r.ghy())
r.saL(0,null)
r.saf(null)
r.saA(null)
return r},
kR:function(){var s=window.navigator.vendor
s.toString
if(C.d.L(s,"Google"))return C.x
s=window.navigator.userAgent
s.toString
if(C.d.L(s,"Firefox"))return C.l
s=window.navigator.appVersion
s.toString
if(C.d.L(s,"Trident")||C.d.L(s,"Edge"))return C.m
s=window.navigator.appName
s.toString
if(C.d.L(s,"Microsoft"))return C.m
return C.y},
kS:function(){var s=window.navigator.appVersion
s.toString
if(C.d.L(s,"Win"))return C.N
if(C.d.L(s,"Mac"))return C.r
if(C.d.L(s,"Linux"))return C.O
return C.P},
ml:function(a,b){var s
Date.now()
s=new E.ib(a,new P.T(Date.now(),!1),new P.T(Date.now(),!1),new O.cq([]),new O.cq([]),new O.cq([]),[null],P.P(t.N,t.k))
s.ek(a,b)
return s},
mt:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kD(a,!0,!0,!0,!1)
s=W.jF()
r=s.style
r.width="100%"
r.height="100%"
J.lM(a).k(0,s)
return E.kD(s,!0,!0,!0,!1)},
kD:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.f.cC(a,"webgl2",P.m4(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.b(P.e("Failed to get the rendering context for WebGL."))
s=E.ml(l,a)
H.fQ(l.getParameter(3379))
m=H.fQ(l.getParameter(34076))
r=[]
q=$.hq
p=new X.eM(a,r,(q==null?$.hq=new E.f0(E.kR(),E.kS()):q).a===C.l?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.Z(o,"contextmenu",p.gf0(),!1))
r.push(W.Z(a,"focus",p.gfa(),!1))
r.push(W.Z(a,"blur",p.geV(),!1))
r.push(W.Z(o,"keyup",p.gfe(),!1))
r.push(W.Z(o,"keydown",p.gfc(),!1))
r.push(W.Z(a,"mousedown",p.gfi(),!1))
r.push(W.Z(a,"mouseup",p.gfm(),!1))
r.push(W.Z(a,n,p.gfk(),!1))
W.ho(a)
W.ho(a)
r.push(W.Z(a,W.ho(a),p.gfo(),!1))
r.push(W.Z(o,n,p.gf2(),!1))
r.push(W.Z(o,"mouseup",p.gf4(),!1))
r.push(W.Z(o,"pointerlockchange",p.gfq(),!1))
r.push(W.Z(a,"touchstart",p.gfJ(),!1))
r.push(W.Z(a,"touchend",p.gfF(),!1))
r.push(W.Z(a,"touchmove",p.gfH(),!1))
m=new E.et(a,s,new T.iz(l,m),p,new P.T(Date.now(),!1))
m.d3()
return m},
h7:function h7(){},
bw:function bw(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bs:function bs(a){this.b=a},
bE:function bE(a){this.b=a},
f0:function f0(a,b){this.a=a
this.b=b},
ib:function ib(a,b,c,d,e,f,g,h){var _=this
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
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
et:function et(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
iB:function iB(a){this.a=a}},Z={
jU:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.bO(c)),35044)
a.bindBuffer(b,null)
return new Z.eP(b,s)},
ah:function(a){return new Z.aD(a)},
eP:function eP(a,b){this.a=a
this.b=b},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cR:function cR(a){this.a=a},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a){this.a=a}},D={
z:function(){return new D.as()},
h9:function h9(){},
as:function as(){var _=this
_.c=_.b=_.a=null
_.d=0},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
O:function O(){},
at:function at(){},
au:function au(){},
p:function p(a,b,c){this.c=a
this.d=b
this.e=c},
ch:function ch(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null},
cw:function cw(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.f=_.e=_.d=null
_.r=1
_.y=_.x=0
_.z=!0
_.Q=null}},X={bZ:function bZ(a,b){this.a=a
this.b=b},dN:function dN(a,b){this.a=a
this.b=b},hF:function hF(a,b){this.c=a
this.d=b},cj:function cj(a,b,c){this.x=a
this.c=b
this.d=c},hM:function hM(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},bB:function bB(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},i6:function i6(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bC:function bC(a,b,c){this.x=a
this.c=b
this.d=c},e8:function e8(){},cG:function cG(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iF:function iF(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},eM:function eM(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
h6:function(a,b,c,d){var s,r,q,p,o=T.kB(null)
o=new X.h5(o,new V.a5(0,0,0,1),V.eb())
o.sap(0,512)
o.sak(0,512)
s=new V.a5(0,0,0,1)
if(!o.cx.n(0,s)){r=o.cx
o.cx=s
o.W(new D.p("color",r,s))}if(o.cy!==d){o.cy=d
o.W(new D.p("clearColor",!d,d))}q=o.db
$.t().toString
if(!(Math.abs(q-2000)<1e-9)){o.db=2000
o.W(new D.p("depth",q,2000))}if(!o.f){o.f=!0
o.W(new D.p("autoResize",!1,!0))}q=o.r
$.t().toString
if(!(Math.abs(q-b)<1e-9)){o.r=b
o.W(new D.p("autoResizeScalarX",q,b))}q=o.x
$.t().toString
if(!(Math.abs(q-c)<1e-9)){o.x=c
o.W(new D.p("autoResizeScalarY",q,c))}p=V.eb()
if(!o.dy.n(0,p)){r=o.dy
o.dy=p
o.W(new D.p("region",r,p))}return o},
ki:function(a){var s=new V.a5(0,0,0,1),r=V.eb()
return new X.hz(s,r)},
h5:function h5(a,b,c){var _=this
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
hz:function hz(a,b){this.a=a
this.r=b
this.x=null},
hC:function hC(){this.b=this.a=null},
e5:function e5(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
is:function is(){}},V={
hb:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a5(s,r,q,1)},
fU:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
jB:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.b.e8(a-b,s)
return(a<0?a+s:a)+b},
q:function(a,b,c){$.t().toString
return C.d.an(C.b.cA(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
bT:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.o)(a),++p){o=a[p]
$.t().toString
n=C.d.an(C.b.cA(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.d.an(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
dk:function(a){return C.b.hT(Math.pow(2,C.b.ck(Math.log(a)/Math.log(2))))},
jN:function(){var s=$.kp
return s==null?$.kp=new V.cp(1,0,0,0,1,0,0,0,1):s},
a_:function(){var s=$.i2
return s==null?$.i2=V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
am:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ks:function(a,b,c,d){return V.am(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
jO:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.am(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
kq:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.am(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
kr:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.am(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)},
m8:function(){var s=$.aw
return s==null?$.aw=new V.Q(0,0,0):s},
eb:function(){var s=$.kw
return s==null?$.kw=V.kv(0,0,1,1):s},
kv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ea(a,b,c,d)},
cO:function(){var s=$.kN
return s==null?$.kN=new V.y(0,0,0):s},
kJ:function(a,b,c){return new V.y(a,b,c)},
mv:function(a){return new V.y(a.a,a.b,a.c)},
kQ:function(){var s=$.kP
return s==null?$.kP=new V.bn(0,0,0,0):s},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(){},
cp:function cp(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
be:function be(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
L:function L(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ea:function ea(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o8:function(a){P.mu(C.I,new V.jy(a))},
mn:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.Z(n,"scroll",new V.im(s),!1)
return new V.ik(o)},
jy:function jy(a){this.a=a},
ik:function ik(a){this.a=a
this.b=null},
im:function im(a){this.a=a},
il:function il(a){this.a=a}},U={
hd:function(){return new U.hc()},
jG:function(a){var s=V.a_(),r=new U.c1(s)
if(!s.n(0,a))r.a=a
return r},
kl:function(){var s=new U.bx(V.a_(),[])
s.aK(s.gen(),s.gfv())
return s},
hc:function hc(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
c1:function c1(a){this.a=a
this.b=null},
bx:function bx(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
Y:function Y(){},
cA:function cA(a){var _=this
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
_.r=null}},M={
kg:function(a){var s=new M.c0([])
s.aK(s.gfB(),s.gfD())
if(a!=null)s.bm(0,a)
return s},
he:function(a,b){var s,r,q,p,o,n,m=null,l=E.dA(),k=new M.c2(l),j=F.ii(),i=j.gR(),h=new V.y(-1,-1,1).J(),g=i.bn(new V.ad(1,2,4,6),V.hb(255,0,0),new V.Q(-1,-1,0),new V.L(0,1),h,m)
h=j.gR()
i=new V.y(1,-1,1).J()
s=h.bn(new V.ad(0,3,4,6),V.hb(0,0,255),new V.Q(1,-1,0),new V.L(1,1),i,m)
i=j.gR()
h=new V.y(1,1,1).J()
r=i.bn(new V.ad(0,2,5,6),V.hb(0,128,0),new V.Q(1,1,0),new V.L(1,0),h,m)
h=j.gR()
i=$.a1
if(i==null)i=$.a1=new V.L(0,0)
q=new V.y(-1,1,1).J()
p=h.bn(new V.ad(0,2,4,7),V.hb(255,255,0),new V.Q(-1,1,0),i,q,m)
j.gN().dc([g,s,r,p])
j.ax()
l.saL(0,j)
o=new X.hC()
n=k.b
k.b=o
o.gm().k(0,k.gS())
k.O(new D.p("camera",n,k.b))
k.saY(0,a)
k.saf(b)
return k},
c0:function c0(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},
c2:function c2(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},
c7:function c7(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null},
ca:function ca(a){var _=this
_.b=null
_.c=a
_.r=_.f=_.e=_.d=null},
o5:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9="testCanvas",c0=null,c1="../resources/StarsCan.png",c2="../resources/Stars.png",c3="modifiers",c4="blurValue",c5="blurAdjust",c6=V.mn("Test 042"),c7=W.jF()
c7.className="pageLargeCanvas"
c7.id=b9
c6.a.appendChild(c7).toString
c6.de(["Test of the Blum effect technique."])
c6.de(["\xab[Back to Tests|../]"])
s=document.getElementById(b9)
if(s==null)H.f(P.e("Failed to find an element with the identifier, testCanvas."))
r=E.mt(s,!0,!0,!0,!1)
q=U.kl()
c6=new U.cA(V.a_())
c6.se6(0)
c6.se0(0,0)
c6.se3(0)
p=c6.d
$.t().toString
if(!(Math.abs(p-0)<1e-9)){c6.d=0
c6.F(new D.p("deltaYaw",p,0))}p=c6.e
$.t().toString
if(!(Math.abs(p-0)<1e-9)){c6.e=0
c6.F(new D.p("deltaPitch",p,0))}p=c6.f
$.t().toString
if(!(Math.abs(p-0.5)<1e-9)){c6.f=0.5
c6.F(new D.p("deltaRoll",p,0.5))}q.k(0,c6)
q.k(0,U.jG(V.jO(1.5707963267948966)))
o=E.dA()
o.saA(q)
o.saL(0,F.o9(0.6))
c6=O.hO()
c6.gdu().saG(0,new V.N(1,1,1))
o.saf(c6)
c6=r.f
n=c6.dP(c1,c1,c1,c1,c1,c1)
m=E.dA()
m.saA(q)
m.saL(0,F.le(1.2,16,1.2))
p=O.hO()
p.gbo().saI(n)
p.gc_(p).saI(n)
m.saf(p)
l=E.dA()
l.saA(q)
p=F.le(1.2,16,1.2)
p.br()
l.saL(0,p)
p=O.hO()
k=p.gc0()
k.saG(0,new V.N(0.6,0.6,0.6))
p.gbo().saI(n)
p.gc_(p).saI(n)
l.saf(p)
j=c6.dP(c2,c2,c2,c2,c2,c2)
i=new D.cw(V.a_(),new V.N(1,1,1))
h=i.b
i.b=q
q.gm().k(0,i.gbz())
i.ac(new D.p("mover",h,i.b))
g=new V.N(1,1,1)
if(!i.c.n(0,g)){h=i.c
i.c=g
i.ac(new D.p("color",h,g))}c6=i.d
if(c6!==j){if(c6!=null)c6.gm().w(0,i.gbz())
h=i.d
i.d=j
j.gm().k(0,i.gbz())
i.ac(new D.p("texture",h,i.d))}f=$.kO
if(f==null){f=new V.bn(1,0.00390625,0.0000152587890625,0)
$.kO=f}if(!J.E(i.f,f)){h=i.f
i.f=f
i.ac(new D.p("shadowAdjust",h,f))}c6=i.r
$.t().toString
if(!(Math.abs(c6-0.5)<1e-9)){i.r=0.5
i.ac(new D.p("attenuation0",c6,0.5))}c6=i.x
$.t().toString
if(!(Math.abs(c6-0.05)<1e-9)){i.x=0.05
i.ac(new D.p("attenuation1",c6,0.05))}c6=i.y
$.t().toString
if(!(Math.abs(c6-0.025)<1e-9)){i.y=0.025
i.ac(new D.p("attenuation2",c6,0.025))}e=E.dA()
e.saA(U.jG(V.ks(10,10,10,1)))
c6=F.ld(1,c0,c0,1)
c6.br()
e.saL(0,c6)
d=U.kl()
c6=r.x
p=U.hd()
k=U.hd()
c=$.ag
if(c==null)c=$.ag=new V.R(0,0)
c=new U.cM(p,k,new X.a0(!1,!1,!1),c,V.a_())
p.scB(0,!0)
p.sco(6.283185307179586)
p.scq(0)
p.sa0(0,0)
p.scp(100)
p.sZ(0)
p.sc8(0.5)
b=c.gaS()
p.gm().k(0,b)
k.scB(0,!0)
k.sco(6.283185307179586)
k.scq(0)
k.sa0(0,0)
k.scp(100)
k.sZ(0)
k.sc8(0.5)
k.gm().k(0,b)
p=new X.a0(!1,!1,!1)
if(!c.d.n(0,p)){h=c.d
c.d=p
c.F(new D.p(c3,h,p))}c.b7(c6)
d.k(0,c)
U.hd()
if($.ag==null)$.ag=new V.R(0,0)
V.a_()
p=U.hd()
k=$.ag
if(k==null)k=$.ag=new V.R(0,0)
k=new U.cL(p,new X.a0(!1,!1,!1),k,V.a_())
p.scB(0,!0)
p.sco(6.283185307179586)
p.scq(0)
p.sa0(0,0)
p.scp(100)
p.sZ(0)
p.sc8(0.2)
p.gm().k(0,k.gaS())
p=new X.a0(!0,!1,!1)
if(!k.c.n(0,p)){h=k.c
k.c=p
k.F(new D.p(c3,h,p))}k.b7(c6)
d.k(0,k)
p=new X.a0(!1,!1,!1)
k=new U.cN(p,V.a_())
c=new X.a0(!1,!1,!1)
if(!p.n(0,c)){k.b=c
k.F(new D.p(c3,p,c))}k.b7(c6)
d.k(0,k)
d.k(0,U.jG(V.am(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=O.hO()
a.gdO().k(0,i)
c6=a.gc0()
c6.saG(0,new V.N(0.05,0.05,0.05))
c6=a.gbo()
c6.saG(0,new V.N(0.7,0.7,0.7))
a0=X.h6(!0,1,1,!0)
c6=O.ha()
a1=new M.c7(c6)
c6.aK(a1.geX(),a1.geZ())
a2=X.ki(c0)
a3=new X.e5(1.0471975511965976,0.1)
a3.saA(c0)
p=a3.c
$.t().toString
if(!(Math.abs(p-1.0471975511965976)<1e-9)){a3.c=1.0471975511965976
a3.W(new D.p("fov",p,1.0471975511965976))}p=a3.d
$.t().toString
if(!(Math.abs(p-0.1)<1e-9)){a3.d=0.1
a3.W(new D.p("near",p,0.1))}p=a3.e
$.t().toString
if(!(Math.abs(p-2000)<1e-9)){a3.e=2000
a3.W(new D.p("far",p,2000))}p=a1.b
if(p!==a3){if(p!=null)p.gm().w(0,a1.gS())
h=a1.b
a1.b=a3
a3.gm().k(0,a1.gS())
a1.O(new D.p("camera",h,a1.b))}a1.saY(0,a2)
a1.saf(c0)
a1.saf(a)
c6.k(0,e)
c6.k(0,o)
c6.k(0,l)
c6.k(0,m)
c6=a1.b
if(c6!=null)c6.saA(d)
a1.saY(0,a0)
a4=X.h6(!0,1,1,!1)
a5=O.kC()
c6=a0.ch
a5.c.k(0,O.jR(V.am(3,3,3,-8,3,3,3,-8,3,3,3,-8,0,0,0,1),c6))
a6=M.he(c0,c0)
a6.saY(0,a4)
a6.saf(a5)
a7=M.kg(c0)
for(p=a4.ch,k=a7.a,a8=a4,a9=0;a9<4;++a9,a8=b0){b0=X.h6(!0,0.25,0.25,!1)
c=new V.bn(10,10,10,1)
b=X.h6(!0,1,1,!1)
b1=new M.ca(b)
b2=O.kk(c0,c0)
b3=b2.x
if(b3==null)b3=b2.x=new D.as()
b4=b1.gS()
b5=b3.a;(b5==null?b3.a=[]:b5).push(b4)
b1.d=b2
b1.e=M.he(b,b2)
b2=$.kI
if(b2==null)b2=$.kI=new V.R(0,1)
b=O.kk(b2,b.ch)
b2=b.x
if(b2==null)b2=b.x=new D.as()
b3=b2.a;(b3==null?b2.a=[]:b3).push(b4)
b1.f=b
b1.r=M.he(c0,b)
b=b1.d
if(b!=null){b2=b.r
$.t().toString
if(!(Math.abs(b2-0)<1e-9)){b.r=0
b=b.x
if(b!=null)b.q(new D.p(c4,b2,0))}}b=b1.f
if(b!=null){b2=b.r
$.t().toString
if(!(Math.abs(b2-0)<1e-9)){b.r=0
b=b.x
if(b!=null)b.q(new D.p(c4,b2,0))}}b=b1.d
if(b!=null)b.sdl(a8.ch)
b=b1.d
if(b!=null)b.sc1(p)
b=b1.f
if(b!=null)b.sc1(p)
b=b1.d
if(b!=null)if(!b.c.n(0,c)){h=b.c
b.c=c
b=b.x
if(b!=null)b.q(new D.p(c5,h,c))}b=b1.f
if(b!=null)if(!b.c.n(0,c)){h=b.c
b.c=c
b=b.x
if(b!=null)b.q(new D.p(c5,h,c))}c=b1.r
if(c!=null)c.saY(0,b0)
if(a7.bQ([b1])){b6=k.length
k.push(b1)
c=a7.c
if(c!=null)c.$2(b6,[b1])}}b7=O.kC()
p=b7.e
if(p!==C.h){b7.e=C.h
b7.E(new D.p("blend",p,C.h))}p=b7.c
p.k(0,O.jR(c0,c6))
p.k(0,O.jR(c0,a8.ch))
b8=M.he(c0,c0)
b8.saf(b7)
p=M.kg([a1,a6,a7,b8])
c6=r.d
if(c6!==p){if(c6!=null)c6.gm().w(0,r.gcK())
r.d=p
p.gm().k(0,r.gcK())
r.cL()}V.o8(r)}},A={
m7:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gav(a5)+a6.gav(a6)+a7.gav(a7)+a8.gav(a8)+a9.gav(a9)+b0.gav(b0)+b1.gav(b1)+b2.gav(b2)+b3.gav(b3)+"_"
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
b=$.aa()
if(h){s=$.b0()
b=new Z.aD(b.a|s.a)}if(g)b=new Z.aD(b.a|$.b_().a)
if(f)b=new Z.aD(b.a|$.b1().a)
if(e)b=new Z.aD(b.a|$.aZ().a)
return new A.hR(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jj:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jk:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jj(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.fV(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
ni:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jj(b,r,"emission")
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
ne:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jk(b,r,"ambient")
b.a+="\n"},
ng:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jk(b,r,"diffuse")
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
nj:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jk(b,r,"invDiffuse")
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
np:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jk(b,r,"specular")
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
nl:function(a,b){var s,r,q
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
nn:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jj(b,r,"reflect")
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
no:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jj(b,r,"refract")
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
nf:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.fV(r)
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
nh:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.fV(r)
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
nm:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.fV(r)
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
nq:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.fV(r)
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
if(m){s=$.hq
if(s==null)s=$.hq=new E.f0(E.kR(),E.kS())
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
nk:function(a,b){var s,r
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
nr:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.aS(""),i=""+"precision mediump float;\n"
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
A.ni(a,j)
A.ne(a,j)
A.ng(a,j)
A.nj(a,j)
A.np(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.nn(a,j)
A.no(a,j)}A.nl(a,j)
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
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nf(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nh(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nm(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.o)(p),++m)A.nq(a,p[m],j)
A.nk(a,j)}p=j.a+="// === Main ===\n"
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
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b3(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b3(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.d(q,0)
j.a+=k+(q[0].toUpperCase()+C.d.b3(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.o)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.d(q,0)
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
i=j.a+="   vec4 objClr = vec4("+C.a.p(l," + ")+", alpha);\n"
if(r)i=j.a=i+"   objClr = colorMat*objClr;\n"
i+="   gl_FragColor = objClr;\n"
j.a=i
i=j.a=i+"}\n"
return i.charCodeAt(0)==0?i:i},
ns:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aV+"];\n"
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
nu:function(a,b){var s
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
nt:function(a,b){var s
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
nw:function(a,b){var s,r
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
nx:function(a,b){var s,r
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
nv:function(a,b){var s
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
ny:function(a,b){var s
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
fV:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.d.b3(a,1)},
ms:function(a,b){var s,r,q,p=""+"precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n"
for(s=0;s<a;++s)p=p+("uniform sampler2D txt"+s+";\n")+("uniform mat4 clrMat"+s+";\n")+("uniform vec2 srcLoc"+s+";\n")+("uniform vec2 srcSize"+s+";\n")+("uniform vec2 destLoc"+s+";\n")+("uniform vec2 destSize"+s+";\n")+("uniform int flip"+s+";\n")
p+="\nvec4 clrAccum;\n"
r=b===C.H
p=(r||b===C.q?p+"float colorCount;\n":p)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.h)p+="      clrAccum += color;\n"
else if(b===C.i)p+="      clrAccum = mix(clrAccum, color, color.a);\n"
else p=r?p+"      clrAccum += color;\n      colorCount += 1.0;\n":p+"      clrAccum = color;\n      colorCount = 1.0;\n"
p+="   }\n}\n\nvoid layoutAll()\n{\n"
q=b===C.q
if(q)for(s=a-1;s>=0;--s)p=p+("   if(txtCount > "+s+")\n")+"   {\n"+("     layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(s=0;s<a;++s)p=p+("   if(txtCount <= "+s+") return;\n")+("   layout(txt"+s+", clrMat"+s+", srcLoc"+s+", srcSize"+s+", destLoc"+s+", destSize"+s+", flip"+s+");\n")
p+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(r)p+="   colorCount = 1.0;\n"
else if(q)p+="   colorCount = 0.0;\n"
p+="   layoutAll();\n"
p=(r?p+"   clrAccum = clrAccum/colorCount;\n":p)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return p.charCodeAt(0)==0?p:p},
jT:function(a,b,c,d,e){var s=new A.iM([],a,c,e)
s.f=d
s.e=P.hJ(d,0,!1)
return s},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a){this.a=a},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a,b,c){var _=this
_.x=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.a=b
_.b=c
_.d=_.c=""
_.r=_.f=_.e=null},
hA:function hA(a,b){this.a=a
this.b=b},
cm:function cm(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.dI=_.i8=_.dH=_.dG=_.i7=_.dF=_.dE=_.dD=_.i6=_.dC=_.dB=_.dA=_.i5=_.dz=_.dw=_.i4=_.dv=_.bq=_.bp=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cb=c
_.cc=d
_.cd=e
_.ce=f
_.cf=g
_.cg=h
_.ci=i
_.cj=j
_.ib=_.ia=_.i9=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
b2:function b2(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
bk:function bk(a,b){this.a=a
this.b=b},
hR:function hR(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aV=b5
_.bp=b6
_.bq=b7},
eC:function eC(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eD:function eD(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eF:function eF(a,b,c,d,e,f,g,h,i,j){var _=this
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
eH:function eH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bv:function bv(a,b){this.a=a
this.b=b},
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
iL:function iL(){},
iQ:function iQ(a){this.a=a},
cH:function cH(a,b,c){this.a=a
this.c=b
this.d=c},
iN:function iN(a,b,c){this.a=a
this.c=b
this.d=c},
iO:function iO(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
ez:function ez(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
eA:function eA(a,b,c){this.a=a
this.c=b
this.d=c},
eB:function eB(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
eE:function eE(a,b,c){this.a=a
this.c=b
this.d=c},
cJ:function cJ(a,b,c){this.a=a
this.c=b
this.d=c},
cK:function cK(a,b,c){this.a=a
this.c=b
this.d=c},
eG:function eG(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ld:function(a,b,c,d){var s=F.ii()
F.dd(s,b,c,d,a,1,0,0,1)
F.dd(s,b,c,d,a,0,1,0,3)
F.dd(s,b,c,d,a,0,0,1,2)
F.dd(s,b,c,d,a,-1,0,0,0)
F.dd(s,b,c,d,a,0,-1,0,0)
F.dd(s,b,c,d,a,0,0,-1,3)
s.ax()
return s},
ji:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dd:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.y(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.y(s+a4,r+a2,q+a3)
o=new V.y(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.y(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.ji(h)
j=F.ji(g)
a.bc(F.lo(a0,a1,new F.jg(i,F.ji(f),F.ji(e),j,k,c),b))},
lf:function(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a0<3)throw H.b(P.e("Must have 3 or more sizes for a disk."))
s=F.ii()
r=b?-1:1
q=-6.283185307179586/a0
p=[]
o=s.gR()
n=new V.y(0,0,r).J()
p.push(o.h5(new V.ad(a,-1,-1,-1),new V.a5(1,1,1,1),new V.Q(0,0,c),new V.y(0,0,r),new V.L(0.5,0.5),n))
for(m=0;m<=a0;++m){l=q*m
k=r*Math.sin(l)
j=Math.cos(l)
i=d.$1(m/a0)
o=s.a
if(o==null)o=s.a=new F.r(s,[])
n=new V.y(k,j,r).J()
if(k<0)h=0
else h=k>1?1:k
g=j<0
if(g)f=0
else f=j>1?1:j
if(g)g=0
else g=j>1?1:j
e=F.eN(new V.ad(a,-1,-1,-1),null,new V.a5(h,f,g,1),new V.Q(k*i,j*i,c),new V.y(0,0,r),new V.L(k*0.5+0.5,j*0.5+0.5),n,null,0)
o.k(0,e)
p.push(e)}s.gN().dc(p)
return s},
le:function(a,b,c){return F.nR(!0,!0,1,new F.jn(a,c),b)},
nR:function(a,b,c,d,e){var s
if(e<3)throw H.b(P.e("Must have 3 or more sizes for a cylindrical shape."))
if(c<1)throw H.b(P.e("Must have 1 or more divisionss for a cylindrical shape."))
s=F.lo(c,e,new F.jo(d),null)
s.ax()
s.df()
s.bc(F.lf(3,!1,1,new F.jp(d),e))
s.bc(F.lf(1,!0,-1,new F.jq(d),e))
return s},
o9:function(a){var s=F.ld(8,null,new F.jz(a,new F.jA()),8)
s.df()
return s},
lo:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.b(P.e("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.b(P.e("Must have 1 or more divisions of the height for a surface."))
s=F.ii()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.r(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.eN(e,e,new V.a5(n,0,0,1),e,e,new V.L(p,1),e,e,0)
o.k(0,m)
c.$3(m,p,0)
r.push(m.c7(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.r(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.eN(e,e,new V.a5(h,g,f,1),e,e,new V.L(p,k),e,e,0)
i.k(0,m)
c.$3(m,p,l)
r.push(m.c7(d))}}s.gN().h4(a+1,b+1,r)
return s},
ii:function(){return new F.ih()},
eN:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cP()
h=$.lE()
s=$.aa()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b0().a)!==0)q.r=e
if((r&$.b_().a)!==0)q.x=b
if((r&$.aG().a)!==0)q.y=f
if((r&$.b1().a)!==0)q.z=g
if((r&$.lF().a)!==0)q.Q=c
if((r&$.bV().a)!==0)q.ch=i
if((r&$.aZ().a)!==0)q.cx=a
return q},
jg:function jg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jA:function jA(){},
jz:function jz(a,b){this.a=a
this.b=b},
ak:function ak(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hv:function hv(){},
io:function io(){},
hG:function hG(){this.b=this.a=null},
hH:function hH(){},
iK:function iK(){},
i9:function i9(){this.a=null},
ih:function ih(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cB:function cB(a,b){this.a=a
this.b=b},
cC:function cC(a,b){this.a=a
this.b=b},
bj:function bj(a,b){this.a=a
this.b=b},
cP:function cP(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a},
r:function r(a,b){this.a=a
this.b=!1
this.c=b},
bJ:function bJ(a,b,c){this.b=a
this.c=b
this.d=c},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.b=a
this.c=b},
iY:function iY(){},
iX:function iX(){},
iZ:function iZ(){},
i7:function i7(){},
cQ:function cQ(a){this.b=a}},T={
kB:function(a){return new T.ix(a)},
iv:function iv(){},
iw:function iw(){},
ix:function ix(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.x=_.r=_.f=_.e=0
_.y=null},
iy:function iy(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},
iz:function iz(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},
iA:function iA(a,b,c,d,e,f,g){var _=this
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
H.jL.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gI:function(a){return H.cx(a)},
i:function(a){return"Instance of '"+H.cy(a)+"'"}}
J.dJ.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ibo:1}
J.cf.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.ba.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.e6.prototype={}
J.bH.prototype={}
J.av.prototype={
i:function(a){var s=a[$.ls()]
if(s==null)return this.eg(a)
return"JavaScript function for "+J.fY(s)}}
J.al.prototype={
cu:function(a,b){if(!!a.fixed$length)H.f(P.x("removeAt"))
if(b<0||b>=a.length)throw H.b(P.e9(b,null))
return a.splice(b,1)[0]},
w:function(a,b){var s
if(!!a.fixed$length)H.f(P.x("remove"))
for(s=0;s<a.length;++s)if(J.E(a[s],b)){a.splice(s,1)
return!0}return!1},
bm:function(a,b){if(!!a.fixed$length)H.f(P.x("addAll"))
this.eu(a,b)
return},
eu:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.b(P.b4(a))
for(s=0;s<r;++s)a.push(b[s])},
K:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.b(P.b4(a))}},
p:function(a,b){var s,r,q=a.length,p=P.hJ(q,"",!1)
for(s=0;s<a.length;++s){r=H.u(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hs:function(a){return this.p(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
cG:function(a,b){var s=a.length
if(b>s)throw H.b(P.ax(b,0,s,"start",null))
if(b===s)return[]
return a.slice(b,s)},
ghp:function(a){if(a.length>0)return a[0]
throw H.b(H.km())},
gcm:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.b(H.km())},
b1:function(a,b){if(!!a.immutable$list)H.f(P.x("sort"))
H.mq(a,b==null?J.n5():b)},
ed:function(a){return this.b1(a,null)},
L:function(a,b){var s
for(s=0;s<a.length;++s)if(J.E(a[s],b))return!0
return!1},
i:function(a){return P.jI(a,"[","]")},
gP:function(a){return new J.a4(a,a.length)},
gI:function(a){return H.cx(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.f(P.x("set length"))
if(b>a.length)H.l2(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.b(H.bS(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.f(P.x("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bS(a,b))
a[b]=c},
$ij:1,
$ih:1,
$im:1}
J.dL.prototype={}
J.a4.prototype={
gG:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.b(H.o(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bz.prototype={
aj:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbs(b)
if(this.gbs(a)===s)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
hT:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.b(P.x(""+a+".toInt()"))},
ck:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.b(P.x(""+a+".floor()"))},
U:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.x(""+a+".round()"))},
cA:function(a,b){var s
if(b>20)throw H.b(P.ax(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+s
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
A:function(a,b){return a*b},
e8:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eh:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d7(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.d7(a,b)},
d7:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.b(P.x("Result of truncating division is "+H.u(s)+": "+H.u(a)+" ~/ "+b))},
bk:function(a,b){var s
if(a>0)s=this.fW(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fW:function(a,b){return b>31?0:a>>>b},
$iG:1,
$ia3:1}
J.ce.prototype={$in:1}
J.dK.prototype={}
J.b9.prototype={
c6:function(a,b){if(b<0)throw H.b(H.bS(a,b))
if(b>=a.length)H.f(H.bS(a,b))
return a.charCodeAt(b)},
cR:function(a,b){if(b>=a.length)throw H.b(H.bS(a,b))
return a.charCodeAt(b)},
a_:function(a,b){return a+b},
cH:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.e9(b,null))
if(b>c)throw H.b(P.e9(b,null))
if(c>a.length)throw H.b(P.e9(c,null))
return a.substring(b,c)},
b3:function(a,b){return this.cH(a,b,null)},
A:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.F)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
an:function(a,b){var s=b-a.length
if(s<=0)return a
return this.A(" ",s)+a},
hf:function(a,b,c){var s=a.length
if(c>s)throw H.b(P.ax(c,0,s,null,null))
return H.lm(a,b,c)},
L:function(a,b){return this.hf(a,b,0)},
aj:function(a,b){var s
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
gj:function(a){return a.length},
$iA:1}
H.dO.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.c6(this.a,b)}}
H.j.prototype={}
H.bA.prototype={
gG:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.fT(q),o=p.gj(q)
if(r.b!==o)throw H.b(P.b4(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.H(q,s);++r.c
return!0}}
H.bd.prototype={
gP:function(a){return new H.cl(J.aH(this.a),this.b)},
gj:function(a){return J.br(this.a)},
H:function(a,b){return this.b.$1(J.jC(this.a,b))}}
H.c6.prototype={$ij:1}
H.cl.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gG(r))
return!0}s.a=null
return!1},
gG:function(a){return H.S(this).Q[1].a(this.a)}}
H.cS.prototype={
gP:function(a){return new H.eQ(J.aH(this.a),this.b)}}
H.eQ.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gG(s)))return!0
return!1},
gG:function(a){var s=this.a
return s.gG(s)}}
H.c8.prototype={}
H.eK.prototype={
l:function(a,b,c){throw H.b(P.x("Cannot modify an unmodifiable list"))}}
H.bI.prototype={}
H.iI.prototype={
am:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.dM.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eJ.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.i8.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ft.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bt.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lq(r==null?"unknown":r)+"'"},
ghY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.it.prototype={}
H.ip.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lq(s)+"'"}}
H.bW.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bW))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gI:function(a){var s,r=this.c
if(r==null)s=H.cx(this.a)
else s=typeof r!=="object"?J.fX(r):H.cx(r)
return(s^H.cx(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.u(this.d)+"' of "+("Instance of '"+H.cy(s)+"'")}}
H.ed.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.U.prototype={
gj:function(a){return this.a},
gaH:function(a){return new H.aM(this)},
ghX:function(a){return H.m6(new H.aM(this),new H.hE(this))},
hg:function(a,b){var s=this.b
if(s==null)return!1
return this.eC(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bj(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bj(p,b)
q=r==null?n:r.b
return q}else return o.hr(b)},
hr:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cW(q,J.fX(a)&0x3ffffff)
r=this.dJ(s,a)
if(r<0)return null
return s[r].b},
l:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cO(s==null?m.b=m.bO():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cO(r==null?m.c=m.bO():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bO()
p=J.fX(b)&0x3ffffff
o=m.cW(q,p)
if(o==null)m.bU(q,p,[m.bP(b,c)])
else{n=m.dJ(o,b)
if(n>=0)o[n].b=c
else o.push(m.bP(b,c))}}},
K:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.b(P.b4(s))
r=r.c}},
cO:function(a,b,c){var s=this.bj(a,b)
if(s==null)this.bU(a,b,this.bP(b,c))
else s.b=c},
bP:function(a,b){var s=this,r=new H.hI(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dJ:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.E(a[r].a,b))return r
return-1},
i:function(a){return P.ko(this)},
bj:function(a,b){return a[b]},
cW:function(a,b){return a[b]},
bU:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
eC:function(a,b){return this.bj(a,b)!=null},
bO:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bU(r,s,r)
this.eF(r,s)
return r}}
H.hE.prototype={
$1:function(a){var s=this.a
return H.S(s).Q[1].a(s.h(0,a))},
$S:function(){return H.S(this.a).aw("2(1)")}}
H.hI.prototype={}
H.aM.prototype={
gj:function(a){return this.a.a},
gP:function(a){var s=this.a,r=new H.dQ(s,s.r)
r.c=s.e
return r}}
H.dQ.prototype={
gG:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.b(P.b4(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jt.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.ju.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.jv.prototype={
$1:function(a){return this.a(a)},
$S:26}
H.hD.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cs.prototype={}
H.bD.prototype={
gj:function(a){return a.length},
$iv:1}
H.bf.prototype={
h:function(a,b){H.aE(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aE(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.cr.prototype={
l:function(a,b,c){H.aE(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$im:1}
H.dW.prototype={
h:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.dX.prototype={
h:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.dY.prototype={
h:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.dZ.prototype={
h:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.e_.prototype={
h:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.ct.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.e0.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aE(b,a,a.length)
return a[b]}}
H.cY.prototype={}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
H.ae.prototype={
aw:function(a){return H.fF(v.typeUniverse,this,a)},
cP:function(a){return H.mS(v.typeUniverse,this,a)}}
H.f6.prototype={}
H.f1.prototype={
i:function(a){return this.a}}
H.d8.prototype={}
P.j2.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:27}
P.j1.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:30}
P.j3.prototype={
$0:function(){this.a.$0()},
$S:10}
P.j4.prototype={
$0:function(){this.a.$0()},
$S:10}
P.d7.prototype={
ep:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bR(new P.jd(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))},
eq:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bR(new P.jc(this,a,Date.now(),b),0),a)
else throw H.b(P.x("Periodic timer."))},
$iiD:1}
P.jd.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jc.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eh(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bM.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.u(this.a)+")"}}
P.bN.prototype={
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
if(r instanceof P.bM){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aH(s)
if(o instanceof P.bN){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.d4.prototype={
gP:function(a){return new P.bN(this.a())}}
P.eR.prototype={}
P.en.prototype={}
P.eo.prototype={}
P.jf.prototype={}
P.jl.prototype={
$0:function(){var s=H.b(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.j9.prototype={
hO:function(a){var s,r,q,p=null
try{if(C.e===$.ao){a.$0()
return}P.nA(p,p,this,a)}catch(q){s=H.fW(q)
r=H.k8(q)
P.l8(p,p,this,s,r)}},
hP:function(a,b){var s,r,q,p=null
try{if(C.e===$.ao){a.$1(b)
return}P.nB(p,p,this,a,b)}catch(q){s=H.fW(q)
r=H.k8(q)
P.l8(p,p,this,s,r)}},
hQ:function(a,b){return this.hP(a,b,t.z)},
ha:function(a){return new P.ja(this,a)},
dh:function(a,b){return new P.jb(this,a,b)}}
P.ja.prototype={
$0:function(){return this.a.hO(this.b)},
$S:2}
P.jb.prototype={
$1:function(a){return this.a.hQ(this.b,a)},
$S:function(){return this.c.aw("~(0)")}}
P.cU.prototype={
gP:function(a){var s=new P.cV(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
L:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.eA(b)
return r}},
eA:function(a){var s=this.d
if(s==null)return!1
return this.bF(s[this.bC(a)],a)>=0},
k:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cS(s==null?q.b=P.jW():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cS(r==null?q.c=P.jW():r,b)}else return q.es(0,b)},
es:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.jW()
s=q.bC(b)
r=p[s]
if(r==null)p[s]=[q.bB(b)]
else{if(q.bF(r,b)>=0)return!1
r.push(q.bB(b))}return!0},
w:function(a,b){if((b&1073741823)===b)return this.fM(this.c,b)
else return this.fL(0,b)},
fL:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bC(b)
r=n[s]
q=o.bF(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d9(p)
return!0},
cS:function(a,b){if(a[b]!=null)return!1
a[b]=this.bB(b)
return!0},
fM:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d9(s)
delete a[b]
return!0},
cY:function(){this.r=this.r+1&1073741823},
bB:function(a){var s,r=this,q=new P.j8(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cY()
return q},
d9:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cY()},
bC:function(a){return J.fX(a)&1073741823},
bF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.E(a[r].a,b))return r
return-1}}
P.j8.prototype={}
P.cV.prototype={
gG:function(a){return H.S(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.b(P.b4(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cd.prototype={}
P.ci.prototype={$ij:1,$ih:1,$im:1}
P.B.prototype={
gP:function(a){return new H.bA(a,this.gj(a))},
H:function(a,b){return this.h(a,b)},
K:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.b(P.b4(a))}},
gdL:function(a){return this.gj(a)===0},
hV:function(a,b){var s,r,q,p,o=this
if(o.gdL(a)){s=J.jJ(0)
return s}r=o.h(a,0)
q=P.hJ(o.gj(a),r,!0)
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
hU:function(a){return this.hV(a,!0)},
i:function(a){return P.jI(a,"[","]")}}
P.ck.prototype={}
P.hN.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.u(a)
r.a=s+": "
r.a+=H.u(b)},
$S:29}
P.W.prototype={
K:function(a,b){var s,r,q
for(s=J.aH(this.gaH(a)),r=H.bU(a).aw("W.V");s.t();){q=s.gG(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.br(this.gaH(a))},
i:function(a){return P.ko(a)},
$iX:1}
P.ef.prototype={
i:function(a){return P.jI(this,"{","}")},
H:function(a,b){var s,r,q,p,o="index"
H.nN(b,o,t.S)
P.ku(b,o)
for(s=P.mC(this,this.r),r=H.S(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.b(P.H(b,this,o,null,q))}}
P.d1.prototype={$ij:1,$ih:1}
P.cW.prototype={}
P.dc.prototype={}
P.du.prototype={}
P.dw.prototype={}
P.hp.prototype={}
P.iT.prototype={}
P.iU.prototype={
hh:function(a){var s,r,q,p=P.jP(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.je(r)
if(q.eH(a,0,p)!==p){C.d.c6(a,p-1)
q.bY()}return new Uint8Array(r.subarray(0,H.mY(0,q.b,s)))}}
P.je.prototype={
bY:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
h2:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.bY()
return!1}},
eH:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.d.c6(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.d.cR(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.h2(p,C.d.cR(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.bY()}else if(p<=2047){o=l.b
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
P.T.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.T&&this.a===b.a&&!0},
aj:function(a,b){return C.c.aj(this.a,b.a)},
gI:function(a){var s=this.a
return(s^C.c.bk(s,30))&1073741823},
i:function(a){var s=this,r=P.lX(H.mg(s)),q=P.dy(H.me(s)),p=P.dy(H.ma(s)),o=P.dy(H.mb(s)),n=P.dy(H.md(s)),m=P.dy(H.mf(s)),l=P.lY(H.mc(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.b6.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aj:function(a,b){return C.c.aj(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hn(),o=this.a
if(o<0)return"-"+new P.b6(0-o).i(0)
s=p.$1(C.c.a2(o,6e7)%60)
r=p.$1(C.c.a2(o,1e6)%60)
q=new P.hm().$1(o%1e6)
return""+C.c.a2(o,36e8)+":"+s+":"+r+"."+q}}
P.hm.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.hn.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.D.prototype={}
P.dq.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hs(s)
return"Assertion failed"}}
P.ey.prototype={}
P.e1.prototype={
i:function(a){return"Throw of null."}}
P.ap.prototype={
gbE:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbD:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbE()+o+m
if(!q.a)return l
s=q.gbD()
r=P.hs(q.b)
return l+s+": "+r}}
P.cz.prototype={
gbE:function(){return"RangeError"},
gbD:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.u(q):""
else if(q==null)s=": Not greater than or equal to "+H.u(r)
else if(q>r)s=": Not in inclusive range "+H.u(r)+".."+H.u(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.u(r)
return s}}
P.dH.prototype={
gbE:function(){return"RangeError"},
gbD:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.eL.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eI.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.el.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dv.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hs(s)+"."}}
P.e4.prototype={
i:function(a){return"Out of Memory"},
$iD:1}
P.cD.prototype={
i:function(a){return"Stack Overflow"},
$iD:1}
P.dx.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.f3.prototype={
i:function(a){return"Exception: "+this.a}}
P.hy.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.d.cH(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
gj:function(a){var s,r=this.gP(this)
for(s=0;r.t();)++s
return s},
H:function(a,b){var s,r,q
P.ku(b,"index")
for(s=this.gP(this),r=0;s.t();){q=s.gG(s)
if(b===r)return q;++r}throw H.b(P.H(b,this,"index",null,r))},
i:function(a){return P.m_(this,"(",")")}}
P.dI.prototype={}
P.ac.prototype={
gI:function(a){return P.K.prototype.gI.call(C.K,this)},
i:function(a){return"null"}}
P.K.prototype={constructor:P.K,$iK:1,
n:function(a,b){return this===b},
gI:function(a){return H.cx(this)},
i:function(a){return"Instance of '"+H.cy(this)+"'"},
toString:function(){return this.i(this)}}
P.aS.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.l.prototype={}
W.fZ.prototype={
gj:function(a){return a.length}}
W.dn.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dp.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dt.prototype={}
W.b3.prototype={
cC:function(a,b,c){if(c!=null)return a.getContext(b,P.lc(c))
return a.getContext(b)},
e7:function(a,b){return this.cC(a,b,null)},
$ib3:1}
W.c_.prototype={$ic_:1}
W.ai.prototype={
gj:function(a){return a.length}}
W.hf.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.c3.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hg.prototype={}
W.ab.prototype={}
W.ar.prototype={}
W.hh.prototype={
gj:function(a){return a.length}}
W.hi.prototype={
gj:function(a){return a.length}}
W.hj.prototype={
gj:function(a){return a.length}}
W.hk.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.c4.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.c5.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.u(r)+", "
s=a.top
s.toString
return r+H.u(s)+") "+H.u(this.gap(a))+" x "+H.u(this.gak(a))},
n:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bp(b)
if(s===r.gbt(b)){s=a.top
s.toString
s=s===r.gbw(b)&&this.gap(a)===r.gap(b)&&this.gak(a)===r.gak(b)}else s=!1}else s=!1
return s},
gI:function(a){var s,r=a.left
r.toString
r=C.b.gI(r)
s=a.top
s.toString
return W.kU(r,C.b.gI(s),C.b.gI(this.gap(a)),C.b.gI(this.gak(a)))},
gdi:function(a){var s=a.bottom
s.toString
return s},
gcX:function(a){return a.height},
gak:function(a){var s=this.gcX(a)
s.toString
return s},
gbt:function(a){var s=a.left
s.toString
return s},
gbv:function(a){var s=a.right
s.toString
return s},
gbw:function(a){var s=a.top
s.toString
return s},
gda:function(a){return a.width},
gap:function(a){var s=this.gda(a)
s.toString
return s},
$ia8:1}
W.dz.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.hl.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.eU.prototype={
gdL:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
l:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
k:function(a,b){this.a.appendChild(b).toString
return b},
gP:function(a){var s=this.hU(this)
return new J.a4(s,s.length)}}
W.I.prototype={
gdj:function(a){var s=a.children
s.toString
return new W.eU(a,s)},
gdk:function(a){var s,r,q,p=a.clientLeft
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
$iI:1}
W.i.prototype={$ii:1}
W.c.prototype={
h3:function(a,b,c,d){if(c!=null)this.ev(a,b,c,!1)},
ev:function(a,b,c,d){return a.addEventListener(b,H.bR(c,1),!1)},
$ic:1}
W.aK.prototype={$iaK:1}
W.dB.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.dC.prototype={
gj:function(a){return a.length}}
W.dE.prototype={
gj:function(a){return a.length}}
W.aL.prototype={$iaL:1}
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.b8.prototype={
gdm:function(a){var s=a.data
s.toString
return s},
$ib8:1}
W.by.prototype={$iby:1}
W.bb.prototype={$ibb:1}
W.hL.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.i3.prototype={
gj:function(a){return a.length}}
W.dT.prototype={
h:function(a,b){return P.aY(a.get(b))},
K:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaH:function(a){var s=[]
this.K(a,new W.i4(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iX:1}
W.i4.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.dU.prototype={
h:function(a,b){return P.aY(a.get(b))},
K:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaH:function(a){var s=[]
this.K(a,new W.i5(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iX:1}
W.i5.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aN.prototype={$iaN:1}
W.dV.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.a7.prototype={$ia7:1}
W.eT.prototype={
l:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gP:function(a){var s=this.a.childNodes
return new W.c9(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.w.prototype={
hM:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lJ(s,b,a)}catch(q){H.fW(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.ef(a):s},
fO:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$iw:1}
W.cu.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.aP.prototype={
gj:function(a){return a.length},
$iaP:1}
W.e7.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.ec.prototype={
h:function(a,b){return P.aY(a.get(b))},
K:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaH:function(a){var s=[]
this.K(a,new W.ig(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iX:1}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.ee.prototype={
gj:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.eh.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.aQ.prototype={$iaQ:1}
W.ei.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.aR.prototype={
gj:function(a){return a.length},
$iaR:1}
W.em.prototype={
h:function(a,b){return a.getItem(H.mW(b))},
K:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaH:function(a){var s=[]
this.K(a,new W.iq(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iX:1}
W.iq.prototype={
$2:function(a,b){return this.a.push(a)},
$S:32}
W.an.prototype={$ian:1}
W.aA.prototype={$iaA:1}
W.af.prototype={$iaf:1}
W.eq.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.er.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.iC.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.aT.prototype={$iaT:1}
W.bl.prototype={$ibl:1}
W.ew.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.iG.prototype={
gj:function(a){return a.length}}
W.aC.prototype={}
W.iS.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.eO.prototype={
gj:function(a){return a.length}}
W.aU.prototype={
ghl:function(a){var s=a.deltaY
if(s!=null)return s
throw H.b(P.x("deltaY is not supported"))},
ghk:function(a){var s=a.deltaX
if(s!=null)return s
throw H.b(P.x("deltaX is not supported"))},
$iaU:1}
W.bL.prototype={
fP:function(a,b){var s=a.requestAnimationFrame(H.bR(b,1))
s.toString
return s},
eG:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.eV.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.cT.prototype={
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
r=J.bp(b)
if(s===r.gbt(b)){s=a.top
s.toString
if(s===r.gbw(b)){s=a.width
s.toString
if(s===r.gap(b)){s=a.height
s.toString
r=s===r.gak(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gI:function(a){var s,r,q,p=a.left
p.toString
p=C.b.gI(p)
s=a.top
s.toString
s=C.b.gI(s)
r=a.width
r.toString
r=C.b.gI(r)
q=a.height
q.toString
return W.kU(p,s,r,C.b.gI(q))},
gcX:function(a){return a.height},
gak:function(a){var s=a.height
s.toString
return s},
gda:function(a){return a.width},
gap:function(a){var s=a.width
s.toString
return s}}
W.f7.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.fq.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.fx.prototype={
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
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$im:1}
W.jH.prototype={}
W.f2.prototype={}
W.j5.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.jV.prototype={}
W.F.prototype={
gP:function(a){return new W.c9(a,this.gj(a))}}
W.c9.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lI(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gG:function(a){return H.S(this).c.a(this.d)}}
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
W.d2.prototype={}
W.d3.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fu.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.d5.prototype={}
W.d6.prototype={}
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
P.d9.prototype={$ib8:1,
gdm:function(a){return this.a}}
P.jh.prototype={
$1:function(a){this.a.push(P.l4(a))},
$S:35}
P.jm.prototype={
$2:function(a,b){this.a[a]=P.l4(b)},
$S:37}
P.dD.prototype={
gb5:function(){return new H.bd(new H.cS(this.b,new P.hw()),new P.hx())},
K:function(a,b){C.a.K(P.hK(this.gb5(),!1),b)},
l:function(a,b,c){var s=this.gb5()
J.lO(s.b.$1(J.jC(s.a,b)),c)},
k:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.br(this.gb5().a)},
h:function(a,b){var s=this.gb5()
return s.b.$1(J.jC(s.a,b))},
gP:function(a){var s=P.hK(this.gb5(),!1)
return new J.a4(s,s.length)}}
P.hw.prototype={
$1:function(a){return t.h.b(a)},
$S:38}
P.hx.prototype={
$1:function(a){return t.h.a(a)},
$S:45}
P.fm.prototype={
gbv:function(a){return this.$ti.c.a(this.a+this.c)},
gdi:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
n:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bp(b)
if(s===r.gbt(b)){q=o.b
if(q===r.gbw(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gbv(b)&&p.a(q+o.d)===r.gdi(b)}else s=!1}else s=!1}else s=!1
return s},
gI:function(a){var s=this,r=s.a,q=C.c.gI(r),p=s.b,o=C.c.gI(p),n=s.$ti.c
r=C.c.gI(n.a(r+s.c))
p=C.c.gI(n.a(p+s.d))
return H.mr(H.ir(H.ir(H.ir(H.ir(0,q),o),r),p))}}
P.a8.prototype={
gbt:function(a){return this.a},
gbw:function(a){return this.b},
gap:function(a){return this.c},
gak:function(a){return this.d}}
P.bc.prototype={$ibc:1}
P.dP.prototype={
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
H:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.bg.prototype={$ibg:1}
P.e2.prototype={
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
H:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.ia.prototype={
gj:function(a){return a.length}}
P.ep.prototype={
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
H:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.k.prototype={
gdj:function(a){return new P.dD(a,new W.eT(a))}}
P.bm.prototype={$ibm:1}
P.ex.prototype={
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
H:function(a,b){return this.h(a,b)},
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
P.h3.prototype={
gj:function(a){return a.length}}
P.dr.prototype={
h:function(a,b){return P.aY(a.get(b))},
K:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.aY(s.value[1]))}},
gaH:function(a){var s=[]
this.K(a,new P.h4(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
$iX:1}
P.h4.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.ds.prototype={
gj:function(a){return a.length}}
P.aI.prototype={}
P.e3.prototype={
gj:function(a){return a.length}}
P.eS.prototype={}
P.bG.prototype={
e4:function(a,b,c,d,e,f,g,h,i,j){var s=i==null
if(!s&&h!=null&&H.fR(g)){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}if(t.I.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,P.nP(g))
return}if(t.l.b(g)&&h==null&&s&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.b(P.jE("Incorrect number or type of arguments"))},
hR:function(a,b,c,d,e,f,g){return this.e4(a,b,c,d,e,f,g,null,null,null)},
$ibG:1}
P.ej.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.b(P.H(b,a,null,null,null))
s=P.aY(a.item(b))
s.toString
return s},
l:function(a,b,c){throw H.b(P.x("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$im:1}
P.fr.prototype={}
P.fs.prototype={}
K.h_.prototype={
aX:function(a,b){return!0},
i:function(a){return"all"}}
K.dG.prototype={
aX:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)if(s[q].aX(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.aO.prototype={
aX:function(a,b){return!this.ee(0,b)},
i:function(a){return"!["+this.by(0)+"]"}}
K.V.prototype={
V:function(a){var s,r,q,p
if(a.a.length<=0)throw H.b(P.e("May not create a Set with zero characters."))
s=new H.U(t.s)
for(r=new H.bA(a,a.gj(a)),q=H.S(r).c;r.t();)s.l(0,q.a(r.d),!0)
p=P.hK(new H.aM(s),!0)
C.a.ed(p)
this.a=p},
aX:function(a,b){return C.a.L(this.a,b)},
i:function(a){return P.jQ(this.a)}}
L.ek.prototype={
p:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iH(this.a.M(0,b),[])
s.push(p)
return p},
ho:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.aX(0,a))return p}return null},
i:function(a){return this.b},
d8:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.L(0,s==null?null:s.b))m+=" (consume)"
s=n.d
s=s==null?null:new H.aM(s.c)
s=J.aH(s==null?[]:s)
for(;s.t();){r=s.gG(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.L(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.o)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.by(0))}return m.charCodeAt(0)==0?m:m}}
L.eu.prototype={
i:function(a){var s=H.ln(this.b,"\n","\\n"),r=H.ln(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.ev.prototype={
i:function(a){return this.b}}
L.iE.prototype={
M:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.ek(this,b,[])
s.l(0,b,r)}return r},
bh:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.ev(a,P.P(s,s))
r.l(0,a,q)}return q},
e5:function(a){return this.hW(a)},
hW:function(a){var s=this
return P.nd(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0
return function $async$e5(a1,a2){if(a1===1){o=a2
q=p}while(true)switch(q){case 0:d=s.d
c=[]
b=[]
a0=[]
n=H.S(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}if(a0.length!==0)h=C.a.cu(a0,0)
else{if(!r.t()){q=3
break}h=n.a(r.d)}b.push(h);++k
g=d==null
f=g?null:d.ho(h)
q=f==null?4:6
break
case 4:if(l==null){e=P.jQ(b)
throw H.b(P.e("Untokenizable string [state: "+H.u(g?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!b.fixed$length)H.f(P.x("removeRange"))
P.jP(0,i,b.length)
b.splice(0,i-0)
C.a.bm(a0,b)
b=[]
c=[]
d=s.d
q=!m.L(0,l.a)?7:8
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
if(g!=null){e=P.jQ(c)
g=d.d
if(g==null)l=null
else{g.c.h(0,e)
g=g.b
g=new L.eu(g,e,k)
l=g}i=b.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.L(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mA()
case 1:return P.mB(o)}}},t.x)},
i:function(a){var s,r,q=new P.aS(""),p=this.d
if(p!=null)q.a=""+(p.d8()+"\n")
for(p=this.a,p=p.ghX(p),p=new H.cl(J.aH(p.a),p.b),s=H.S(p).Q[1];p.t();){r=s.a(p.a)
if(r!=this.d)q.a+=H.u(r==null?null:r.d8())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iH.prototype={
i:function(a){return this.b.b+": "+this.by(0)}}
O.bu.prototype={
cD:function(a,b,c){this.b=b
this.c=a},
aK:function(a,b){return this.cD(a,null,b)},
bQ:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cZ:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gP:function(a){var s=this.a
return new J.a4(s,s.length)},
H:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
k:function(a,b){var s,r
if(this.bQ([b])){s=this.a
r=s.length
s.push(b)
this.cZ(r,[b])}},
bm:function(a,b){var s,r
if(this.bQ(b)){s=this.a
r=s.length
C.a.bm(s,b)
this.cZ(r,b)}},
$ih:1}
O.cq.prototype={
gj:function(a){return this.a.length},
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
aN:function(){var s=this.b
return s==null?null:s.q(null)},
ga9:function(a){var s=this.a
if(s.length>0)return C.a.gcm(s)
else return V.a_()},
bu:function(a){this.a.push(a)
this.aN()},
bg:function(){var s=this.a
if(s.length>0){s.pop()
this.aN()}}}
E.h7.prototype={}
E.bw.prototype={
cQ:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.a4(s,s.length),r=H.S(s).c;s.t();){q=r.a(s.d)
if(q.f==null)q.cQ()}},
saL:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().w(0,s.gdX())
if(b!=null)b.gm().k(0,s.gdX())
s.at(new D.p("shape",r,b))}},
saf:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gm().w(0,s.gdZ())
if(a!=null)a.gm().k(0,s.gdZ())
s.cQ()
s.at(new D.p("technique",r,a))}},
saA:function(a){var s,r,q=this
if(!J.E(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gm().w(0,q.gdV())
if(a!=null)a.gm().k(0,q.gdV())
r=q.r
q.at(new D.p("mover",s,r))}},
ab:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.au(0,b,q)
if(!J.E(o,q.x)){s=q.x
q.x=o
q.at(new D.p("matrix",s,o))}p=q.f
if(p!=null)p.ab(0,b)
for(p=q.y.a,p=new J.a4(p,p.length),r=H.S(p).c;p.t();)r.a(p.d).ab(0,b)},
a1:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.ga9(q))
else o.push(p.A(0,q.ga9(q)))
q.aN()
a.ct(r.f)
s=C.a.gcm(a.dy)
if(r.d!=null)if(s!=null)s.cz(a,r)
for(p=r.y.a,p=new J.a4(p,p.length),o=H.S(p).c;p.t();)o.a(p.d).a1(a)
a.cs()
q.bg()},
at:function(a){var s=this.z
return s==null?null:s.q(a)},
Y:function(){return this.at(null)},
dY:function(a){this.e=null
this.at(a)},
hB:function(){return this.dY(null)},
e_:function(a){return this.at(a)},
hC:function(){return this.e_(null)},
dW:function(a){return this.at(a)},
hA:function(){return this.dW(null)},
dU:function(a){return this.at(a)},
hx:function(){return this.dU(null)},
hw:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdT(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.as()
n=o.a;(n==null?o.a=[]:n).push(r)}this.Y()},
hz:function(a,b){var s,r
for(s=b.gP(b),r=this.gdT();s.t();)s.gG(s).gm().w(0,r)
this.Y()},
i:function(a){return"Unnamed entity"}}
E.bs.prototype={
i:function(a){return this.b}}
E.bE.prototype={
i:function(a){return this.b}}
E.f0.prototype={}
E.ib.prototype={
ek:function(a,b){var s=this
s.cy.gm().k(0,new E.ic(s))
s.db.gm().k(0,new E.id(s))
s.dx.gm().k(0,new E.ie(s))},
ghJ:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.ga9(q).A(0,s.ga9(s))
q=s}return q},
ge1:function(){var s=this,r=s.ch
if(r==null){r=s.dx
r=s.ch=s.ghJ().A(0,r.ga9(r))}return r},
ct:function(a){var s=this.dy
return s.push(a==null?C.a.gcm(s):a)},
cs:function(){var s=this.dy
if(s.length>1)s.pop()},
bZ:function(a){var s,r=a.b
if(r.length===0)throw H.b(P.e("May not cache a shader with no name."))
s=this.fr
if(s.hg(0,r))throw H.b(P.e('Shader cache already contains a shader by the name "'+r+'".'))
s.l(0,r,a)}}
E.ic.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.id.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.ie.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.et.prototype={
cM:function(a){this.e2()},
cL:function(){return this.cM(null)},
ghq:function(){var s,r=this,q=Date.now(),p=C.c.a2(P.kh(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.T(q,!1)
return s/p},
d3:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.b.ck(r*o)
r=s.clientHeight
r.toString
p=C.b.ck(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kE(C.j,this.ghN())}},
e2:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.w.eG(s)
r=W.l9(new E.iB(this),t.H)
r.toString
C.w.fP(s,r)}},
hL:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d3()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.T(p,!1)
q.y=P.kh(p-q.r.a).a*0.000001
p=q.cy
C.a.sj(p.a,0)
p.aN()
p=q.db
C.a.sj(p.a,0)
p.aN()
p=q.dx
C.a.sj(p.a,0)
p.aN()
p=q.dy
C.a.sj(p,0)
p.push(null)
m.a1(q)}}catch(o){s=H.fW(o)
r=H.k8(o)
P.kb("Error: "+H.u(s))
P.kb("Stack: "+H.u(r))
throw H.b(s)}}}
E.iB.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hL()}},
$S:28}
Z.eP.prototype={}
Z.bY.prototype={
X:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.fW(q)
r=P.e('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.u(s))
throw H.b(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.cR.prototype={}
Z.aJ.prototype={
as:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
X:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].X(a)}},
aJ:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a1:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
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
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(m,", ")+"\nAttrs:   "+C.a.p(o,", ")}}
Z.cc.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cy(this.c)+"'")+"]"}}
Z.aD.prototype={
gcF:function(a){var s=this.a,r=(s&$.aa().a)!==0?3:0
if((s&$.b0().a)!==0)r+=3
if((s&$.b_().a)!==0)r+=3
if((s&$.aG().a)!==0)r+=2
if((s&$.b1().a)!==0)r+=3
if((s&$.dl().a)!==0)r+=3
if((s&$.dm().a)!==0)r+=4
if((s&$.bV().a)!==0)++r
return(s&$.aZ().a)!==0?r+4:r},
h6:function(a){var s,r=$.aa(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b0()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b_()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aG()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b1()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dm()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bV()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.aZ()
if((q&r.a)!==0)if(s===a)return r
return $.lG()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aD))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.aa().a)!==0)s.push("Pos")
if((r&$.b0().a)!==0)s.push("Norm")
if((r&$.b_().a)!==0)s.push("Binm")
if((r&$.aG().a)!==0)s.push("Txt2D")
if((r&$.b1().a)!==0)s.push("TxtCube")
if((r&$.dl().a)!==0)s.push("Clr3")
if((r&$.dm().a)!==0)s.push("Clr4")
if((r&$.bV().a)!==0)s.push("Weight")
if((r&$.aZ().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.p(s,"|")}}
D.h9.prototype={}
D.as.prototype={
k:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
w:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.L(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.w(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.L(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.w(p,b)
s=p===!0||s}return s},
q:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.O():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.K(P.hK(p,!0),new D.ht(s))
r=q.b
if(r!=null){q.b=[]
C.a.K(r,new D.hu(s))}return!0},
ca:function(){return this.q(null)},
ao:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.q(s)}}}}
D.ht.prototype={
$1:function(a){a.$1(this.a)},
$S:16}
D.hu.prototype={
$1:function(a){a.$1(this.a)},
$S:16}
D.O.prototype={}
D.at.prototype={}
D.au.prototype={}
D.p.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.u(this.d)+" => "+H.u(this.e)}}
X.bZ.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.bZ))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dN.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
if(this.a!==b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hF.prototype={}
X.cj.prototype={}
X.hM.prototype={
b4:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.L(o.a+b.a,o.b+b.b)
o=q.a.gaU()
s=$.a1
if(s==null)s=$.a1=new V.L(0,0)
r=q.x
q.z=new P.T(p,!1)
q.x=n
return new X.bB(a,s,r,o,n)},
cr:function(a,b){this.r=a.a
return!1},
be:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bd:function(a,b){var s=this.d
if(s==null)return!1
s.q(this.b4(a,b))
return!0},
hG:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaU()
r=this.x
Date.now()
q.q(new X.bC(new V.R(a.a,a.b),s,r))
return!0},
fh:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.q(new X.cj(c,q.a.gaU(),b))
q.y=new P.T(s,!1)
s=$.a1
q.x=s==null?$.a1=new V.L(0,0):s}}
X.a0.prototype={
n:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.a0))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.a.p(s,"+")}}
X.bB.prototype={}
X.i6.prototype={
bG:function(a,b,c){var s=this,r=new P.T(Date.now(),!1),q=s.a.gaU(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bB(a,p,o,q,b)},
cr:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.q(this.bG(a,b,!0))
return!0},
be:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.q(r.bG(a,b,!0))
return!0},
bd:function(a,b){var s=this.d
if(s==null)return!1
s.q(this.bG(a,b,!1))
return!0},
hH:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaU()
Date.now()
r.q(new X.bC(new V.R(a.a,a.b),s,b))
return!0},
gdq:function(){var s=this.b
return s==null?this.b=D.z():s},
gbx:function(){var s=this.c
return s==null?this.c=D.z():s},
gdR:function(){var s=this.d
return s==null?this.d=D.z():s}}
X.bC.prototype={}
X.e8.prototype={}
X.cG.prototype={}
X.iF.prototype={
b4:function(a,b){var s,r,q,p,o=this,n=new P.T(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a1
if(r==null){r=new V.L(0,0)
$.a1=r
s=r}else s=r}r=o.a.gaU()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cG(q,p,r,s)},
hF:function(a){var s=this.b
if(s==null)return!1
s.q(this.b4(a,!0))
return!0},
hD:function(a){var s=this.c
if(s==null)return!1
s.q(this.b4(a,!0))
return!0},
hE:function(a){var s=this.d
if(s==null)return!1
s.q(this.b4(a,!1))
return!0}}
X.eM.prototype={
gaW:function(a){var s=this.b
return s==null?this.b=new X.hF(new X.a0(!1,!1,!1),P.kn(t.S)):s},
gaa:function(){var s,r=this.c
if(r==null){r=$.a1
if(r==null){r=$.a1=new V.L(0,0)
s=r}else s=r
r=this.c=new X.i6(this,r,s,new P.T(Date.now(),!1),new P.T(Date.now(),!1))}return r},
gal:function(){var s=this.d
if(s==null){s=$.a1
if(s==null)s=$.a1=new V.L(0,0)
s=this.d=new X.hM(this,s,new P.T(Date.now(),!1),new P.T(Date.now(),!1))}return s},
gb_:function(){var s,r=this.e
if(r==null){r=$.a1
if(r==null){r=$.a1=new V.L(0,0)
s=r}else s=r
r=this.e=new X.iF(this,r,s,new P.T(Date.now(),!1),new P.T(Date.now(),!1))}return r},
gaU:function(){var s=this.a
return V.kv(0,0,C.f.gdk(s).c,C.f.gdk(s).d)},
cU:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.dN(p,new X.a0(s,r,q))},
aT:function(a){var s,r,q=this.gaW(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.a0(p,s,r)},
bV:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaW(this)
r=a.altKey
q=a.shiftKey
p.c=new X.a0(s,r===!0,q===!0)},
aF:function(a){var s,r,q,p
if(a==null){s=$.a1
return s==null?$.a1=new V.L(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.L(r-p,q-s)},
b6:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.R(r,s)},
bR:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.o)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.b.U(n)
m=o.pageY
m.toString
C.b.U(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.b.U(l)
l=o.pageY
l.toString
l=C.b.U(l)
k=j.top
k.toString
s.push(new V.L(n-m,l-k))}return s},
aC:function(a){var s,r,q,p
if(a==null)return new X.bZ(0,new X.a0(!1,!1,!1))
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
return new X.bZ(s,new X.a0(r,q,p))},
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
fb:function(a){return this.f=!0},
eW:function(a){return this.f=!1},
f1:function(a){if(this.f&&this.bH(a))a.preventDefault()},
ff:function(a){var s,r,q=this
if(!q.f)return
s=q.cU(a)
r=q.gaW(q)
r.c=s.b
r.d.k(0,s.a)},
fd:function(a){var s,r,q=this
if(!q.f)return
s=q.cU(a)
r=q.gaW(q)
r.c=s.b
r.d.w(0,s.a)},
fj:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aT(a)
if(p.x){s=p.aC(a)
r=p.b6(a)
if(p.gal().cr(s,r))a.preventDefault()
return}s=p.aC(a)
q=p.aF(a)
if(p.gaa().cr(s,q))a.preventDefault()},
fn:function(a){var s,r,q,p=this
p.aT(a)
s=p.aC(a)
if(p.x){r=p.b6(a)
if(p.gal().be(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.gaa().be(s,q))a.preventDefault()},
f5:function(a){var s,r,q,p=this
if(!p.bH(a)){p.aT(a)
s=p.aC(a)
if(p.x){r=p.b6(a)
if(p.gal().be(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.gaa().be(s,q))a.preventDefault()}},
fl:function(a){var s,r,q,p=this
p.aT(a)
s=p.aC(a)
if(p.x){r=p.b6(a)
if(p.gal().bd(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.gaa().bd(s,q))a.preventDefault()},
f3:function(a){var s,r,q,p=this
if(!p.bH(a)){p.aT(a)
s=p.aC(a)
if(p.x){r=p.b6(a)
if(p.gal().bd(s,r))a.preventDefault()
return}q=p.aF(a)
if(p.gaa().bd(s,q))a.preventDefault()}},
fp:function(a){var s,r,q=this
q.aT(a)
s=new V.R(C.v.ghk(a),C.v.ghl(a)).A(0,q.Q)
if(q.x){if(q.gal().hG(s))a.preventDefault()
return}r=q.aF(a)
if(q.gaa().hH(s,r))a.preventDefault()},
fs:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.aC(q.y)
r=q.aF(q.y)
q.gal().fh(s,r,p)}},
fK:function(a){var s,r=this
r.a.focus()
r.f=!0
r.bV(a)
s=r.bR(a)
if(r.gb_().hF(s))a.preventDefault()},
fG:function(a){var s
this.bV(a)
s=this.bR(a)
if(this.gb_().hD(s))a.preventDefault()},
fI:function(a){var s
this.bV(a)
s=this.bR(a)
if(this.gb_().hE(s))a.preventDefault()}}
D.ch.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
gdN:function(){var s=this.z
return s==null?this.z=D.z():s},
ac:function(a){var s=this.y
return s==null?null:s.q(a)},
d0:function(a){var s=this.z
return s==null?null:s.q(a)},
fg:function(){return this.d0(null)},
fu:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)if(this.eB(a[r]))return!1
return!0},
eQ:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gd_(),q=this.r,p=0;p<b.length;b.length===s||(0,H.o)(b),++p){o=b[p]
q.push(o)
n=o.Q
if(n==null)n=o.Q=new D.as()
m=n.a;(m==null?n.a=[]:m).push(r)}this.ac(new D.at())},
fA:function(a,b){var s,r,q,p
for(s=b.gP(b),r=this.gd_(),q=this.e;s.t();){p=s.gG(s)
C.a.w(q,p)
p.gm().w(0,r)}this.ac(new D.au())},
eB:function(a){var s=C.a.L(this.r,a)
return s}}
D.cw.prototype={
ac:function(a){var s=this.Q
return s==null?null:s.q(a)},
em:function(){return this.ac(null)},
$icg:1}
V.N.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.N))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
V.a5.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a5))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.hr.prototype={}
V.cp.prototype={
a3:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cp))return!1
s=b.a
$.t().toString
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
V.be.prototype={
a3:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
dK:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.t().toString
if(Math.abs(b3-0)<1e-9)return V.a_()
s=1/b3
r=-l
q=-a2
return V.am((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
A:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.am(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bi:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.Q(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.be))return!1
s=b.a
$.t().toString
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
B:function(a){var s,r,q,p,o,n=this,m=V.bT([n.a,n.e,n.y,n.cx],3,0),l=V.bT([n.b,n.f,n.z,n.cy],3,0),k=V.bT([n.c,n.r,n.Q,n.db],3,0),j=V.bT([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
u:function(){return this.B("")}}
V.L.prototype={
ag:function(a){return new V.R(a.a-this.a,a.b-this.b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"},
u:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"}}
V.Q.prototype={
b2:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Q))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"},
u:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
V.ad.prototype={
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ad))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.ea.prototype={
gaz:function(){var s=this.c,r=this.d
return s>r?r:s},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.ea))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
V.R.prototype={
ba:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){return this.a*a.a+this.b*a.b},
A:function(a,b){return new V.R(this.a*b,this.b*b)},
ah:function(a,b){var s
$.t().toString
if(Math.abs(b-0)<1e-9){s=$.ag
return s==null?$.ag=new V.R(0,0):s}return new V.R(this.a/b,this.b/b)},
n:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+"]"}}
V.y.prototype={
ba:function(a){return Math.sqrt(this.a7(this))},
a7:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){return new V.y(V.fU(this.a,a.a,b),V.fU(this.b,a.b,b),V.fU(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.a7(s))
if(r===1)return s
return s.ah(0,r)},
b8:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.y(s*r-q*p,q*o-n*r,n*p-s*o)},
a_:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
b0:function(a){return new V.y(-this.a,-this.b,-this.c)},
ah:function(a,b){$.t().toString
if(Math.abs(b-0)<1e-9)return V.cO()
return new V.y(this.a/b,this.b/b,this.c/b)},
dM:function(){$.t().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"},
u:function(){return"["+V.q(this.a,3,0)+", "+V.q(this.b,3,0)+", "+V.q(this.c,3,0)+"]"}}
V.bn.prototype={
ba:function(a){var s=this,r=s.a,q=s.b,p=s.c,o=s.d
return Math.sqrt(r*r+q*q+p*p+o*o)},
n:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bn))return!1
s=b.a
$.t().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.q(s.a,3,0)+", "+V.q(s.b,3,0)+", "+V.q(s.c,3,0)+", "+V.q(s.d,3,0)+"]"}}
U.hc.prototype={
bA:function(a){var s=V.jB(a,this.c,this.b)
return s},
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
F:function(a){var s=this.y
return s==null?null:s.q(a)},
scB:function(a,b){},
sco:function(a){var s,r=this,q=r.b
$.t().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bA(s)}r.F(new D.p("maximumLocation",q,r.b))}},
scq:function(a){var s,r=this,q=r.c
$.t().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bA(s)}r.F(new D.p("minimumLocation",q,r.c))}},
sa0:function(a,b){var s,r=this
b=r.bA(b)
s=r.d
$.t().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.F(new D.p("location",s,b))}},
scp:function(a){var s,r,q=this,p=q.e
$.t().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.F(new D.p("maximumVelocity",p,a))}},
sZ:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.t().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.F(new D.p("velocity",r,a))}},
sc8:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.F(new D.p("dampening",s,a))}},
ab:function(a,b){var s,r,q,p=this,o=p.f
$.t().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa0(0,p.d+s*b)
o=p.x
$.t().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sZ(s)}}}
U.c1.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
au:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c1))return!1
return this.a.n(0,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bx.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
F:function(a){var s=this.e
return s==null?null:s.q(a)},
ad:function(){return this.F(null)},
eo:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaS(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
if(p!=null){o=p.gm()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.F(new D.at())},
fw:function(a,b){var s,r
for(s=b.gP(b),r=this.gaS();s.t();)s.gG(s).gm().w(0,r)
this.F(new D.au())},
au:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a4(o,o.length),n=H.S(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.au(0,b,c)
s=s==null?q:q.A(0,s)}}p.f=s==null?V.a_():s
o=p.e
if(o!=null)o.ao(0)}return p.f},
n:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bx))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.E(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iY:1}
U.Y.prototype={}
U.cA.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
F:function(a){var s=this.y
return s==null?null:s.q(a)},
se6:function(a){var s
a=V.jB(a,0,6.283185307179586)
s=this.a
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.F(new D.p("yaw",s,a))}},
se0:function(a,b){var s
b=V.jB(b,0,6.283185307179586)
s=this.b
$.t().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.F(new D.p("pitch",s,b))}},
se3:function(a){var s
a=V.jB(a,0,6.283185307179586)
s=this.c
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.F(new D.p("roll",s,a))}},
au:function(a,b,c){var s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.se6(s.a+s.d*b.y)
s.se0(0,s.b+s.e*b.y)
s.se3(s.c+s.f*b.y)
s.x=V.kr(s.c).A(0,V.kq(s.b)).A(0,V.jO(s.a))
r=s.y
if(r!=null)r.ao(0)}return s.x},
n:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cA))return!1
s=q.a
r=b.a
$.t().toString
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
return s==null?this.cy=D.z():s},
F:function(a){var s=this.cy
return s==null?null:s.q(a)},
ad:function(){return this.F(null)},
b7:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.gaa().gdq().k(0,s.gbI())
a.gaa().gdR().k(0,s.gbK())
a.gaa().gbx().k(0,s.gbM())
return!0},
bJ:function(a){var s=this,r=s.c,q=s.a
if(!r.n(0,q==null?null:q.gaW(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bL:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.ag(a.d)
if(s.a7(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa0(0,-a.y.ag(r).A(0,2).ah(0,s.gaz()).a*2.5+p.z)
q.sZ(0)
p.Q=a.z.ag(r).A(0,2).ah(0,s.gaz())
p.ad()},
bN:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a7(s)>0.0001){r.b.sZ(r.Q.a*10*2.5)
r.ad()}},
au:function(a,b,c){var s=this,r=s.ch,q=b.e
if(r<q){s.ch=q
r=s.b
r.ab(0,b.y)
s.cx=V.kr(r.d)}return s.cx},
$iY:1}
U.cM.prototype={
gm:function(){var s=this.fx
return s==null?this.fx=D.z():s},
F:function(a){var s=this.fx
return s==null?null:s.q(a)},
ad:function(){return this.F(null)},
b7:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.gaa().gdq().k(0,q.gbI())
a.gaa().gdR().k(0,q.gbK())
a.gaa().gbx().k(0,q.gbM())
s=a.gal()
r=s.f
s=r==null?s.f=D.z():r
s.k(0,q.geJ())
s=a.gal()
r=s.d
s=r==null?s.d=D.z():r
s.k(0,q.geL())
s=a.gb_()
r=s.b
s=r==null?s.b=D.z():r
s.k(0,q.gh0())
s=a.gb_()
r=s.d
s=r==null?s.d=D.z():r
s.k(0,q.gfZ())
s=a.gb_()
r=s.c
s=r==null?s.c=D.z():r
s.k(0,q.gfX())
return!0},
aQ:function(a){return new V.R(a.a,a.b)},
bJ:function(a){var s=this
t.Z.a(a)
if(!s.d.n(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bL:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ag(a.d)
if(s.a7(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aQ(a.y.ag(r).A(0,2).ah(0,s.gaz()))
p=n.c
p.sa0(0,-q.a*2.5+n.cy)
o=n.b
o.sa0(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aQ(a.z.ag(r).A(0,2).ah(0,s.gaz()))
n.ad()},
bN:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a7(s)>0.0001){r.c.sZ(-r.dx.a*10*2.5)
r.b.sZ(-r.dx.b*10*2.5)
r.ad()}},
eK:function(a){var s=this
if(t.u.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eM:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.n(0,a.x.b))return
s=a.c
r=a.d
q=n.aQ(a.y.ag(r).A(0,2).ah(0,s.gaz()))
p=n.c
p.sa0(0,-q.a*2.5+n.cy)
o=n.b
o.sa0(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aQ(a.z.ag(r).A(0,2).ah(0,s.gaz()))
n.ad()},
h1:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
h_:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.ag(a.d)
if(s.a7(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aQ(a.y.ag(r).A(0,2).ah(0,s.gaz()))
p=n.c
p.sa0(0,-q.a*2.5+n.cy)
o=n.b
o.sa0(0,-q.b*2.5+n.db)
o.sZ(0)
p.sZ(0)
n.dx=n.aQ(a.z.ag(r).A(0,2).ah(0,s.gaz()))
n.ad()},
fY:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a7(s)>0.0001){r.c.sZ(-r.dx.a*10*2.5)
r.b.sZ(-r.dx.b*10*2.5)
r.ad()}},
au:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.ab(0,s)
p=r.b
p.ab(0,s)
r.fr=V.jO(p.d).A(0,V.kq(q.d))}return r.fr},
$iY:1}
U.cN.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
F:function(a){var s=this.r
return s==null?null:s.q(a)},
b7:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.gaa()
r=s.e
s=r==null?s.e=D.z():r
r=this.geN()
s.k(0,r)
s=a.gal()
q=s.e;(q==null?s.e=D.z():q).k(0,r)
return!0},
eO:function(a){var s=this,r=s.b,q=s.a
if(!r.n(0,q==null?null:q.gaW(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.F(new D.p("zoom",r,q))}},
au:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ks(s,s,s,1)}return r.f},
$iY:1}
M.c0.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
O:function(a){var s=this.r
return s==null?null:s.q(a)},
aB:function(){return this.O(null)},
fC:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gS(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q].gm()
o=p.a;(o==null?p.a=[]:o).push(r)}this.O(new D.at())},
fE:function(a,b){var s,r
for(s=b.gP(b),r=this.gS();s.t();)s.gG(s).gm().w(0,r)
this.O(new D.au())},
a1:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a4(s,s.length),r=H.S(s).c;s.t();)r.a(s.d).a1(a)
q.f=!1},
$iay:1}
M.c2.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
O:function(a){var s=this.r
return s==null?null:s.q(a)},
aB:function(){return this.O(null)},
saY:function(a,b){var s,r,q=this
if(b==null)b=X.ki(null)
s=q.c
if(s!==b){if(s!=null)s.gm().w(0,q.gS())
r=q.c
q.c=b
b.gm().k(0,q.gS())
q.O(new D.p("target",r,q.c))}},
saf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().w(0,r.gS())
s=r.d
r.d=a
if(a!=null)a.gm().k(0,r.gS())
r.O(new D.p("technique",s,r.d))}},
a1:function(a){var s,r,q=this
a.ct(q.d)
s=q.c
if(s!=null)s.X(a)
if(q.b!=null){a.cy.bu(V.a_())
r=V.a_()
a.db.bu(r)}s=q.d
if(s!=null)s.ab(0,a)
s=q.e
s.ab(0,a)
s.a1(a)
if(q.b!=null){a.cy.bg()
a.db.bg()}s=q.c
if(s!=null)s.aJ(a)
a.cs()},
$iay:1}
M.c7.prototype={
O:function(a){var s=this.y
return s==null?null:s.q(a)},
aB:function(){return this.O(null)},
eY:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gS(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.as()
n=o.a;(n==null?o.a=[]:n).push(r)}this.O(new D.at())},
f_:function(a,b){var s,r
for(s=b.gP(b),r=this.gS();s.t();)s.gG(s).gm().w(0,r)
this.O(new D.au())},
saY:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gm().w(0,r.gS())
s=r.c
r.c=b
b.gm().k(0,r.gS())
r.O(new D.p("target",s,r.c))}},
saf:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gm().w(0,r.gS())
s=r.d
r.d=a
if(a!=null)a.gm().k(0,r.gS())
r.O(new D.p("technique",s,r.d))}},
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
a1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
a.ct(h.d)
s=h.c
if(s!=null)s.X(a)
s=h.b
if(s!=null){r=a.c
q=a.d
p=s.c
o=s.d
n=s.e
m=n-o
l=1/Math.tan(p*0.5)
k=V.am(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bu(k)
j=$.lt()
i=s.b
if(i!=null)j=i.au(0,a,s).A(0,j)
a.db.bu(j)}s=h.d
if(s!=null)s.ab(0,a)
for(s=h.e.a,r=new J.a4(s,s.length),q=H.S(r).c;r.t();)q.a(r.d).ab(0,a)
for(s=new J.a4(s,s.length),r=H.S(s).c;s.t();)r.a(s.d).a1(a)
if(h.b!=null){a.cy.bg()
a.db.bg()}s=h.c
if(s!=null)s.aJ(a)
a.cs()},
$iay:1}
M.ca.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.z():s},
O:function(a){var s=this.b
return s==null?null:s.q(a)},
aB:function(){return this.O(null)},
a1:function(a){var s=this.e
if(s!=null)s.a1(a)
s=this.r
if(s!=null)s.a1(a)},
$iay:1}
A.h1.prototype={}
A.h2.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hm:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
c9:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.aj.prototype={
gav:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
n:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.aj))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.cb.prototype={
d6:function(a,b){if(b!=null&&b.d)if(a!=null)a.ea(b)}}
A.hA.prototype={
aO:function(a,b,c,d){var s,r,q,p,o=c.length
if(0>=o)return H.d(c,0)
s=c[0]
$.t().toString
r=Math.abs(s-0)<1e-9
if(r){if(0>=d.length)return H.d(d,0)
q=d[0]
d=C.a.cG(d,1)
c=C.a.cG(c,1);--o}else q=0
s=a.a+="vec4 blur"+b+"()\n"
s+="{\n"
a.a=s
if(r)s=a.a+="  vec4 color = texture2D(colorTxt, txt2D)*"+H.u(q)+";\n"
else s=a.a=s+"  vec4 color = vec4(0.0);\n"
s=a.a=s+"  vec2 offset;\n"
for(p=0;p<o;++p){if(p>=c.length)return H.d(c,p)
a.a+="  offset = blurScale * "+H.u(c[p])+";\n"
if(p>=d.length)return H.d(d,p)
a.a+="  color += texture2D(colorTxt, txt2D + offset) * "+H.u(d[p])+";\n"
if(p>=d.length)return H.d(d,p)
s=a.a+="  color += texture2D(colorTxt, txt2D - offset) * "+H.u(d[p])+";\n"}s+="  return color; \n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i:function(a){return this.b}}
A.cm.prototype={
ej:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.aS(""),d0=c8.fr
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
A.ns(c8,c9)
A.nu(c8,c9)
A.nt(c8,c9)
A.nw(c8,c9)
A.nx(c8,c9)
A.nv(c8,c9)
A.ny(c8,c9)
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
c3.cl(0,s.charCodeAt(0)==0?s:s,A.nr(c8))
c3.y=c3.ga6(c3).h(0,"posAttr")
c3.Q=c3.ga6(c3).h(0,"normAttr")
c3.z=c3.ga6(c3).h(0,"binmAttr")
c3.ch=c3.ga6(c3).h(0,"txt2DAttr")
c3.cx=c3.ga6(c3).h(0,"txtCubeAttr")
c3.cy=c3.ga6(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gv().D(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gv().D(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gv().D(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gv().D(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gv().D(0,"viewMat"))
if(c8.x1)c3.go=t.Q.a(c3.gv().D(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gv().D(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gv().D(0,"colorMat"))
c3.k3=[]
s=c8.aV
if(s>0){c3.k2=t.y.a(c3.gv().D(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.e(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.e(c6+q+c7))
r.push(d0.a(l))}}d0=c8.a
if(d0.a)c3.k4=t.g.a(c3.gv().D(0,"emissionClr"))
if(d0.c)c3.r2=t.a.a(c3.gv().D(0,"emissionTxt"))
d0=c8.b
if(d0.a)c3.rx=t.g.a(c3.gv().D(0,"ambientClr"))
if(d0.c)c3.x1=t.a.a(c3.gv().D(0,"ambientTxt"))
d0=c8.c
if(d0.a)c3.x2=t.g.a(c3.gv().D(0,"diffuseClr"))
if(d0.c)c3.y2=t.a.a(c3.gv().D(0,"diffuseTxt"))
d0=c8.d
if(d0.a)c3.aV=t.g.a(c3.gv().D(0,"invDiffuseClr"))
if(d0.c)c3.bq=t.a.a(c3.gv().D(0,"invDiffuseTxt"))
d0=c8.e
s=d0.a
if(!s)r=d0.c
else r=!0
if(r){c3.dz=t.n.a(c3.gv().D(0,"shininess"))
if(s)c3.dv=t.g.a(c3.gv().D(0,"specularClr"))
if(d0.c)c3.dw=t.a.a(c3.gv().D(0,"specularTxt"))}if(c8.f.c)c3.dA=t.a.a(c3.gv().D(0,"bumpTxt"))
if(c8.db){d0=t.a
c3.dB=d0.a(c3.gv().D(0,"envSampler"))
s=c8.r
if(s.a)c3.dC=t.g.a(c3.gv().D(0,"reflectClr"))
if(s.c)c3.dD=d0.a(c3.gv().D(0,"reflectTxt"))
s=c8.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c3.dE=t.n.a(c3.gv().D(0,"refraction"))
if(r)c3.dF=t.g.a(c3.gv().D(0,"refractClr"))
if(s.c)c3.dG=d0.a(c3.gv().D(0,"refractTxt"))}}d0=c8.y
if(d0.a)c3.dH=t.n.a(c3.gv().D(0,"alpha"))
if(d0.c)c3.dI=t.a.a(c3.gv().D(0,"alphaTxt"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.cb=P.P(r,t.W)
c3.cc=P.P(r,t.J)
for(r=t.y,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.eC(l,d,c,a3,a2,a1))}c3.cc.l(0,i,g)
o=c3.cb
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.l(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.cd=P.P(r,t.W)
c3.ce=P.P(r,t.L)
for(r=t.y,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
g.push(new A.eD(a6,a5,a4,l,d,a7))}c3.ce.l(0,i,g)
o=c3.cd
m=c3.r
if(m==null)H.f(P.e(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.e(c6+f+c7))
o.l(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.cf=P.P(r,t.W)
c3.cg=P.P(r,t.U)
for(r=t.y,q=t.g,p=t.Q,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.o)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.eF(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.cg.l(0,i,g)
a8=c3.cf
m=c3.r
if(m==null)H.f(P.e(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.e(c6+a9+c7))
a8.l(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.ci=P.P(s,t.W)
c3.cj=P.P(s,t.R)
for(s=t.y,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.o)(c8),++k){j=c8[k]
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
g.push(new A.eH(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.cj.l(0,i,g)
f=c3.ci
m=c3.r
if(m==null)H.f(P.e(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.e(c6+e+c7))
f.l(0,i,s.a(l))}}}},
ai:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.eb(b)}}
A.b2.prototype={
i:function(a){return"barLight"+this.a}}
A.b5.prototype={
i:function(a){return"dirLight"+this.a}}
A.bh.prototype={
i:function(a){return"pointLight"+this.a}}
A.bk.prototype={
i:function(a){return"spotLight"+this.a}}
A.hR.prototype={
i:function(a){return this.bp}}
A.eC.prototype={}
A.eD.prototype={}
A.eF.prototype={}
A.eH.prototype={}
A.bi.prototype={
cl:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cV(b,35633)
r=n.cV(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gaD(),s)
q.attachShader(n.gaD(),r)
q.linkProgram(n.gaD())
if(!H.l3(q.getProgramParameter(n.gaD(),35714))){o=q.getProgramInfoLog(n.gaD())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.e("Failed to link shader: "+o))}n.fT()
n.fV()},
ga6:function(a){var s=this.f
if(s==null)throw H.b(P.e("Must initialize the shader prior to getting the attributes."))
return s},
gv:function(){var s=this.r
if(s==null)throw H.b(P.e(u.C))
return s},
gaD:function(){var s=this.e
if(s==null)throw H.b(P.e(u.F))
return s},
X:function(a){a.a.useProgram(this.e)
this.ga6(this).hm()},
cV:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.l3(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.b(P.e('Error compiling shader "'+H.u(q)+'": '+s))}return q},
fT:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.fQ(l.getProgramParameter(o.gaD(),35721))
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
m.push(new A.h1(l,q,p))}o.f=new A.h2(m)},
fV:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.fQ(j.getProgramParameter(m.gaD(),35718))
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
k.push(m.hj(o,n,q,p))}m.r=new A.iQ(k)},
aP:function(a,b,c){var s=this.a
if(a===1)return new A.cH(s,b,c)
else return A.jT(s,this.e,b,a,c)},
eD:function(a,b,c){var s=this.a
if(a===1)return new A.cK(s,b,c)
else return A.jT(s,this.e,b,a,c)},
eE:function(a,b,c){var s=this.a
if(a===1)return new A.eG(s,b,c)
else return A.jT(s,this.e,b,a,c)},
bl:function(a,b){return new P.f3(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
hj:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aP(b,c,d)
case 5121:return s.aP(b,c,d)
case 5122:return s.aP(b,c,d)
case 5123:return s.aP(b,c,d)
case 5124:return s.aP(b,c,d)
case 5125:return s.aP(b,c,d)
case 5126:return new A.ez(s.a,c,d)
case 35664:return new A.cI(s.a,c,d)
case 35665:return new A.eA(s.a,c,d)
case 35666:return new A.eB(s.a,c,d)
case 35667:return new A.iN(s.a,c,d)
case 35668:return new A.iO(s.a,c,d)
case 35669:return new A.iP(s.a,c,d)
case 35674:return new A.iR(s.a,c,d)
case 35675:return new A.eE(s.a,c,d)
case 35676:return new A.cJ(s.a,c,d)
case 35678:return s.eD(b,c,d)
case 35680:return s.eE(b,c,d)
case 35670:throw H.b(s.bl("BOOL",c))
case 35671:throw H.b(s.bl("BOOL_VEC2",c))
case 35672:throw H.b(s.bl("BOOL_VEC3",c))
case 35673:throw H.b(s.bl("BOOL_VEC4",c))
default:throw H.b(P.e("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.bv.prototype={
i:function(a){return this.b}}
A.cE.prototype={
el:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=u.C,b="Required uniform value, ",a=", was not defined or used in shader."
""+"attribute vec3 posAttr;\n"
""+"attribute vec3 posAttr;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n"
""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n"
s=""+"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n"
d.cl(0,s.charCodeAt(0)==0?s:s,A.ms(a0,a1))
d.x=d.ga6(d).h(0,"posAttr")
d.y=t.y.a(d.gv().D(0,"txtCount"))
d.z=t.F.a(d.gv().D(0,"backClr"))
for(s=t.W,r=t.ch,q=d.dy,p=d.dx,o=d.db,n=d.cy,m=t.cj,l=d.cx,k=t.r,j=d.ch,i=d.Q,h=0;h<a0;++h){g=d.r
if(g==null)H.f(P.e(c))
f="txt"+h
e=g.h(0,f)
if(e==null)H.f(P.e(b+f+a))
i.push(k.a(e))
g=d.r
if(g==null)H.f(P.e(c))
f="clrMat"+h
e=g.h(0,f)
if(e==null)H.f(P.e(b+f+a))
j.push(m.a(e))
g=d.r
if(g==null)H.f(P.e(c))
f="srcLoc"+h
e=g.h(0,f)
if(e==null)H.f(P.e(b+f+a))
l.push(r.a(e))
g=d.r
if(g==null)H.f(P.e(c))
f="srcSize"+h
e=g.h(0,f)
if(e==null)H.f(P.e(b+f+a))
n.push(r.a(e))
g=d.r
if(g==null)H.f(P.e(c))
f="destLoc"+h
e=g.h(0,f)
if(e==null)H.f(P.e(b+f+a))
o.push(r.a(e))
g=d.r
if(g==null)H.f(P.e(c))
f="destSize"+h
e=g.h(0,f)
if(e==null)H.f(P.e(b+f+a))
p.push(r.a(e))
g=d.r
if(g==null)H.f(P.e(c))
f="flip"+h
e=g.h(0,f)
if(e==null)H.f(P.e(b+f+a))
q.push(s.a(e))}}}
A.iL.prototype={}
A.iQ.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
D:function(a,b){var s=this.h(0,b)
if(s==null)throw H.b(P.e("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.o)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cH.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iN.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iO.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iP.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iM.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.ez.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.cI.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eA.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eB.prototype={
ec:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
e9:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+this.c}}
A.iR.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eE.prototype={
ae:function(a){var s=new Float32Array(H.bO(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.cJ.prototype={
ae:function(a){var s=new Float32Array(H.bO(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.cK.prototype={
ea:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.eG.prototype={
eb:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jg.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cn(q.b,b).cn(q.d.cn(q.c,b),c)
a.sa0(0,new V.Q(p.a,p.b,p.c))
a.saI(p.J())
q=1-b
s=1-c
a.sdg(new V.ad(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))
q=r.f
if(q!=null)q.$3(a,b,c)},
$S:14}
F.jn.prototype={
$2:function(a,b){return V.fU(this.a,this.b,b)},
$S:21}
F.jo.prototype={
$3:function(a,b,c){var s,r=6.283185307179586*b,q=Math.sin(r),p=Math.cos(r),o=V.fU(-1,1,c),n=this.a.$2(b,c)
q=-q*n
s=p*n
a.sa0(0,new V.Q(q,s,o))
a.saI(new V.y(q,s,o).J())
a.sdg(new V.ad(1-c,2+c,-1,-1))},
$S:14}
F.jp.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:22}
F.jq.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:22}
F.jA.prototype={
$2:function(a,b){return 0},
$S:21}
F.jz.prototype={
$3:function(a,b,c){var s,r,q,p=this.b.$2(b,c)
if(typeof p!=="number")return H.nY(p)
s=this.a+p
r=a.f
if(r!=null)q=new V.y(r.a,r.b,r.c)
else{p=$.kM
if(p==null){p=new V.y(0,0,1)
$.kM=p
q=p}else q=p}p=q.J()
a.sa0(0,new V.Q(p.a*s,p.b*s,p.c*s))},
$S:14}
F.ak.prototype={
aM:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.b(P.e("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.b(P.e("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.bW(a)
s.bX(b)
s.fS(c)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gN().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}},
b9:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null||s.c==null)){if(!q){r=r.a
if(r!=null)C.a.w(r.gN().b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}}s.bS()
s.bT()
s.fN()},
bW:function(a){this.a=a
a.gN().b.push(this)},
bX:function(a){this.b=a
a.gN().c.push(this)},
fS:function(a){this.c=a
a.gN().d.push(this)},
bS:function(){var s=this.a
if(s!=null)C.a.w(s.gN().b,this)
this.a=null},
bT:function(){var s=this.b
if(s!=null)C.a.w(s.gN().c,this)
this.b=null},
fN:function(){var s=this.c
if(s!=null)C.a.w(s.gN().d,this)
this.c=null},
ex:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.cO()
if(n!=null)q=q.a_(0,n)
if(s!=null)q=q.a_(0,s)
if(r!=null)q=q.a_(0,r)
if(q.dM())return p
return q.J()},
ez:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b2(0,n)
q=new V.y(o.a,o.b,o.c).J()
o=r.b2(0,n)
return q.b8(new V.y(o.a,o.b,o.c).J()).J()},
c5:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.ex()
if(s==null){s=q.ez()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Y()}return!0},
ew:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.cO()
if(n!=null)q=q.a_(0,n)
if(s!=null)q=q.a_(0,s)
if(r!=null)q=q.a_(0,r)
if(q.dM())return p
return q.J()},
ey:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.t().toString
if(Math.abs(p-0)<1e-9){j=b.b2(0,e)
o=new V.y(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.b0(0)}else{n=(j-s.b)/p
j=b.b2(0,e)
j=new V.Q(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).b2(0,h)
o=new V.y(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b0(0)}m=l.d
if(m!=null){m=m.J()
o=m.b8(o).J().b8(m).J()}return o},
c3:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.ew()
if(s==null){s=q.ey()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.Y()}return!0},
ghe:function(a){var s=this
if(J.E(s.a,s.b))return!0
if(J.E(s.b,s.c))return!0
if(J.E(s.c,s.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gC(p)
p=a+C.d.an(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gC(o)
p=p+C.d.an(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gC(o)
s=p+C.d.an(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.u()
return s+((p==null?"-":p)+"}")},
u:function(){return this.B("")}}
F.hv.prototype={}
F.io.prototype={
bb:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gC(q)
s=c.a
if(q==(s==null?r:s.gC(s))){q=b.b
q=q==null?r:q.gC(q)
s=c.b
if(q==(s==null?r:s.gC(s))){q=b.c
q=q==null?r:q.gC(q)
s=c.c
q=q==(s==null?r:s.gC(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gC(q)
s=c.b
if(q==(s==null?r:s.gC(s))){q=b.b
q=q==null?r:q.gC(q)
s=c.c
if(q==(s==null?r:s.gC(s))){q=b.c
q=q==null?r:q.gC(q)
s=c.a
q=q==(s==null?r:s.gC(s))}else q=!1
return q}else{q=b.a
q=q==null?r:q.gC(q)
s=c.c
if(q==(s==null?r:s.gC(s))){q=b.b
q=q==null?r:q.gC(q)
s=c.a
if(q==(s==null?r:s.gC(s))){q=b.c
q=q==null?r:q.gC(q)
s=c.b
q=q==(s==null?r:s.gC(s))}else q=!1
return q}else return!1}}}}
F.hG.prototype={
ei:function(a,b){var s=this,r=a.a
if(r==null)throw H.b(P.e("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.b(P.e("May not create a line with vertices attached to different shapes."))
s.bW(a)
s.bX(b)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.ga8(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}},
b9:function(){var s=this,r=s.a,q=r==null
if(!(q||s.b==null)){if(!q){r=r.a
if(r!=null)C.a.w(r.ga8(r).b,s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.Y()}}s.bS()
s.bT()},
bW:function(a){this.a=a
a.ga8(a).b.push(this)},
bX:function(a){this.b=a
a.ga8(a).c.push(this)},
bS:function(){var s=this.a
if(s!=null)C.a.w(s.ga8(s).b,this)
this.a=null},
bT:function(){var s=this.b
if(s!=null)C.a.w(s.ga8(s).c,this)
this.b=null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gC(s)
s=a+C.d.an(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gC(r)
return s+C.d.an(C.c.i(r==null?-1:r),0)},
u:function(){return this.B("")}}
F.hH.prototype={}
F.iK.prototype={
bb:function(a,b,c){var s,r=null,q=b.a
q=q==null?r:q.gC(q)
s=c.a
if(q==(s==null?r:s.gC(s))){q=b.b
q=q==null?r:q.gC(q)
s=c.b
return q==(s==null?r:s.gC(s))}else{q=b.a
q=q==null?r:q.gC(q)
s=c.b
if(q==(s==null?r:s.gC(s))){q=b.b
q=q==null?r:q.gC(q)
s=c.a
return q==(s==null?r:s.gC(s))}else return!1}}}
F.i9.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gC(s)
return a+C.d.an(C.c.i(s),0)},
u:function(){return this.B("")}}
F.ih.prototype={
gR:function(){var s=this.a
return s==null?this.a=new F.r(this,[]):s},
gbf:function(a){var s=this.b
return s==null?this.b=new F.bj(this,[]):s},
ga8:function(a){var s=this.c
return s==null?this.c=new F.cC(this,[]):s},
gN:function(){var s=this.d
return s==null?this.d=new F.cB(this,[]):s},
gm:function(){var s=this.e
return s==null?this.e=D.z():s},
bc:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gR().T()
s=d.gR().c.length
for(b=a.gR().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.r(d,[])
o.k(0,p.hi())}d.gR().T()
for(b=a.gbf(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.r(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).T()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bj(d,[]):m).a
m=o.a;(m==null?o.a=new F.r(o,[]):m).k(0,j)
o=new F.i9()
if(j.a==null)H.f(P.e("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.cQ([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bj(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.q(c)}}}for(b=a.ga8(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.r(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).T()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.r(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).T()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cC(d,[]):m).a
m=o.a;(m==null?o.a=new F.r(o,[]):m).k(0,h)
m=o.a;(m==null?o.a=new F.r(o,[]):m).k(0,g)
new F.hG().ei(h,g)}for(b=a.gN().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.o)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.r(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).T()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.r(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).T()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.r(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.r(l,[]):k).T()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.d(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cB(d,[]):m).a
m=o.a;(m==null?o.a=new F.r(o,[]):m).k(0,h)
m=o.a;(m==null?o.a=new F.r(o,[]):m).k(0,g)
m=o.a;(m==null?o.a=new F.r(o,[]):m).k(0,e)
new F.ak().aM(h,g,e)}b=d.e
if(b!=null)b.ao(0)},
ax:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gN().ax()||!1
if(!r.gR().ax())s=!1
q=r.e
if(q!=null)q.ao(0)
return s},
hu:function(a,b){var s,r,q,p,o,n=this,m=n.e
if(m!=null)++m.d
s=n.gR().c.slice(0)
for(;s.length!==0;){r=C.a.ghp(s)
C.a.cu(s,0)
q=[]
q.push(r)
for(p=s.length-1;p>=0;--p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(a.bb(0,r,o)){q.push(o)
C.a.cu(s,p)}}if(q.length>1)b.bc(q)}n.gR().T()
n.ga8(n).cv()
n.gN().cv()
n.gbf(n).hK()
n.ga8(n).cw(new F.iK())
n.gN().cw(new F.io())
m=n.e
if(m!=null)m.ao(0)},
df:function(){this.hu(new F.iX(),new F.i7())},
br:function(){var s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
o.gN().br()
for(s=o.gR().c.length-1;s>=0;--s){n=o.a
n=(n==null?o.a=new F.r(o,[]):n).c
if(s>=n.length)return H.d(n,s)
r=n[s]
q=r.r
if(q!=null)r.sdS(new V.y(-q.a,-q.b,-q.c))
p=r.x
if(p!=null){p=new V.y(-p.a,-p.b,-p.c).J()
if(!J.E(r.x,p)){r.x=p
n=r.a
if(n!=null){n=n.e
if(n!=null)n.q(null)}}}}n=o.e
if(n!=null)n.ao(0)},
c2:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gR().c.length,c=$.aa(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.b0().a)!==0)++a
if((b&$.b_().a)!==0)++a
if((b&$.aG().a)!==0)++a
if((b&$.b1().a)!==0)++a
if((b&$.dl().a)!==0)++a
if((b&$.dm().a)!==0)++a
if((b&$.bV().a)!==0)++a
if((b&$.aZ().a)!==0)++a
s=a1.gcF(a1)
r=P.hJ(d*s,0,!1)
e.a=0
q=P.m5(a,new F.ij(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.bO(r)),35044)
c.bindBuffer(f,g)
p=new Z.aJ(new Z.eP(f,b),[],q,a1)
if(h.gbf(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.bj(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).T()}b=b.e}o.push(b==null?0:b);++n}k=Z.jU(c,34963,o)
p.b.push(new Z.cc(0,o.length,k))}if(h.ga8(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.cC(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).T()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).T()}b=b.e}o.push(b==null?0:b);++n}k=Z.jU(c,34963,o)
p.b.push(new Z.cc(1,o.length,k))}if(h.gN().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.cB(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.d(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).T()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).T()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.r(m,[]):l).T()}b=b.e}o.push(b==null?0:b);++n}k=Z.jU(c,34963,o)
p.b.push(new Z.cc(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.gR().c.length!==0){q.push("Vertices:")
q.push(s.gR().B(r))}if(s.gbf(s).b.length!==0){q.push("Points:")
q.push(s.gbf(s).B(r))}if(s.ga8(s).b.length!==0){q.push("Lines:")
q.push(s.ga8(s).B(r))}if(s.gN().b.length!==0){q.push("Faces:")
q.push(s.gN().B(r))}return C.a.p(q,"\n")},
Y:function(){var s=this.e
return s==null?null:s.q(null)}}
F.ij.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.h6(a),f=g.gcF(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.r(o,[]):m).c
if(n>=m.length)return H.d(m,n)
l=m[n].ht(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.d(r,k)
r[k]=i;++k}}e.a+=f
return new Z.bY(g,f,d*4,h.d)},
$S:36}
F.cB.prototype={
dc:function(a){var s,r,q,p,o,n,m,l=[],k=a.length
if(k>0){s=a[0]
for(r=this.a,q=2;q<k;++q){p=q-1
o=a.length
if(p>=o)return H.d(a,p)
p=a[p]
if(q>=o)return H.d(a,q)
o=a[q]
n=r.a;(n==null?r.a=new F.r(r,[]):n).k(0,s)
n=r.a;(n==null?r.a=new F.r(r,[]):n).k(0,p)
n=r.a;(n==null?r.a=new F.r(r,[]):n).k(0,o)
m=new F.ak()
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
if(n){(l==null?s.a=new F.r(s,[]):l).k(0,k)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,j)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,h)
f=new F.ak()
f.aM(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,k)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,h)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,g)
f=new F.ak()
f.aM(k,h,g)
e.push(f)}else{(l==null?s.a=new F.r(s,[]):l).k(0,j)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,h)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,g)
f=new F.ak()
f.aM(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,j)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,g)
l=s.a;(l==null?s.a=new F.r(s,[]):l).k(0,k)
f=new F.ak()
f.aM(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gj:function(a){return this.b.length},
cw:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gR().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.r(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.d
if(q==null)q=p.d=new F.bJ([],[],[])
o=q.b.length+q.c.length+q.d.length-1
for(;o>=0;o=m){q=p.d
n=(q==null?p.d=new F.bJ([],[],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.d
if(a.bb(0,n,(q==null?p.d=new F.bJ([],[],[]):q).h(0,l))){n.b9()
break}}}}},
cv:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(q.ghe(q))q.b9()}},
ax:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c5())q=!1
return q},
c4:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.o)(s),++p)if(!s[p].c3())q=!1
return q},
br:function(){var s,r,q,p,o,n,m,l
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
o=p.b
p.b=p.c
p.c=o
n=p.d
if(n!=null)p.d=new V.y(-n.a,-n.b,-n.c)
m=p.e
if(m!=null)p.e=new V.y(-m.a,-m.b,-m.c)
l=p.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.q(null)}}}},
i:function(a){return this.u()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(a))
return C.a.p(p,"\n")},
u:function(){return this.B("")}}
F.cC.prototype={
gj:function(a){return this.b.length},
cw:function(a){var s,r,q,p,o,n,m,l
for(s=this.a,r=s.gR().c.length-1;r>=0;--r){q=s.a
q=(q==null?s.a=new F.r(s,[]):q).c
if(r>=q.length)return H.d(q,r)
p=q[r]
q=p.c
if(q==null)q=p.c=new F.bK([],[])
o=q.b.length+q.c.length-1
for(;o>=0;o=m){q=p.c
n=(q==null?p.c=new F.bK([],[]):q).h(0,o)
for(m=o-1,l=m;l>=0;--l){q=p.c
if(a.bb(0,n,(q==null?p.c=new F.bK([],[]):q).h(0,l))){n.b9()
break}}}}},
cv:function(){var s,r,q
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
if(J.E(q.a,q.b))q.b9()}},
i:function(a){return this.u()},
B:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].B(a+(""+s+". ")))}return C.a.p(r,"\n")},
u:function(){return this.B("")}}
F.bj.prototype={
gj:function(a){return this.b.length},
hK:function(){var s,r,q,p,o,n,m
for(s=this.b,r=s.length-1;r>=0;--r){if(r>=s.length)return H.d(s,r)
q=s[r]
p=q.a
o=p==null
if(o)n=null
else{m=p.b
m=(m==null?p.b=new F.cQ([]):m).b.length
n=m}if((n==null?0:n)>1){if(!o){p=p.a
if(p!=null){o=p.b
C.a.w((o==null?p.b=new F.bj(p,[]):o).b,q)}p=q.a
if(p!=null){p=p.a
if(p!=null){p=p.e
if(p!=null)p.q(null)}}}p=q.a
if(p!=null){o=p.b
C.a.w((o==null?p.b=new F.cQ([]):o).b,q)}q.a=null}}},
i:function(a){return this.u()},
B:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(a))
return C.a.p(p,"\n")},
u:function(){return this.B("")}}
F.cP.prototype={
c7:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.eN(s.cx,p,m,r,q,o,n,a,l)},
hi:function(){return this.c7(null)},
ga8:function(a){var s=this.c
return s==null?this.c=new F.bK([],[]):s},
gN:function(){var s=this.d
return s==null?this.d=new F.bJ([],[],[]):s},
gC:function(a){var s=this.a
if(s!=null)s.gR().T()
return this.e},
sa0:function(a,b){var s
if(!J.E(this.f,b)){this.f=b
s=this.a
if(s!=null)s.Y()}},
sdS:function(a){var s
a=a.J()
if(!J.E(this.r,a)){this.r=a
s=this.a
if(s!=null)s.Y()}},
saI:function(a){var s
if(!J.E(this.z,a)){this.z=a
s=this.a
if(s!=null)s.Y()}},
sdg:function(a){var s
if(!J.E(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.Y()}},
ht:function(a){var s,r,q,p,o=this,n=null
if(a.n(0,$.aa())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.b0())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.n(0,$.b_())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.n(0,$.aG())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.n(0,$.b1())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.n(0,$.dl())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.n(0,$.dm())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.n(0,$.bV()))return[o.ch]
else if(a.n(0,$.aZ())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
c5:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cO()
p.gN().K(0,new F.j0(o))
p.r=o.a.J()
if(r){s.Y()
o=s.e
if(o!=null)o.ao(0)}return!0},
c3:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.cO()
p.gN().K(0,new F.j_(o))
p.x=o.a.J()
if(r){s.Y()
o=s.e
if(o!=null)o.ao(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.d.an(C.c.i(q.e),0))
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
u:function(){return this.B("")}}
F.j0.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.a_(0,r)}},
$S:7}
F.j_.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.a_(0,r)}},
$S:7}
F.r.prototype={
T:function(){var s,r,q
if(this.b){s=this.c
r=s.length
for(q=0;q<r;++q)s[q].e=q
this.b=!1}},
k:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.b(P.e("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.Y()
return!0},
dd:function(a,b,c,d,e,f,g){var s=F.eN(a,null,b,c,d,e,f,g,0)
this.k(0,s)
return s},
bn:function(a,b,c,d,e,f){return this.dd(a,b,c,null,d,e,f)},
h5:function(a,b,c,d,e,f){return this.dd(a,b,c,d,e,f,null)},
gj:function(a){return this.c.length},
ax:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c5()
return!0},
c4:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)s[q].c3()
return!0},
hd:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.J()
if(!J.E(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.q(null)}}}}}return!0},
i:function(a){return this.u()},
B:function(a){var s,r,q,p
this.T()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.o)(r),++p)s.push(r[p].B(a))
return C.a.p(s,"\n")},
u:function(){return this.B("")}}
F.bJ.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
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
K:function(a,b){var s=this
C.a.K(s.b,b)
C.a.K(s.c,new F.iV(s,b))
C.a.K(s.d,new F.iW(s,b))},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
F.iV.prototype={
$1:function(a){if(!J.E(a.a,this.a))this.b.$1(a)},
$S:7}
F.iW.prototype={
$1:function(a){var s=this.a
if(!J.E(a.a,s)&&!J.E(a.b,s))this.b.$1(a)},
$S:7}
F.bK.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var s,r=this.b,q=r.length
if(b>=q){r=this.c
s=b-q
if(s<0||s>=r.length)return H.d(r,s)
return r[s]}else{if(b<0)return H.d(r,b)
return r[b]}},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
F.iY.prototype={}
F.iX.prototype={
bb:function(a,b,c){return J.E(b.f,c.f)}}
F.iZ.prototype={}
F.i7.prototype={
bc:function(a){var s,r,q,p=V.cO()
for(s=a.length,r=0;r<s;++r){q=a[r].r
if(q!=null)p=new V.y(p.a+q.a,p.b+q.b,p.c+q.c)}p=p.J()
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.o)(a),++r)a[r].sdS(p)
return null}}
F.cQ.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.o)(s),++q)p.push(s[q].B(""))
return C.a.p(p,"\n")}}
O.dF.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.z():s},
E:function(a){var s=this.x
return s==null?null:s.q(a)},
ar:function(){return this.E(null)},
shc:function(a){var s=this.r
$.t().toString
if(!(Math.abs(s-a)<1e-9)){this.r=a
this.E(new D.p("blurValue",s,a))}},
sdl:function(a){var s,r=this,q=r.e
if(q!=a){if(q!=null)q.gm().w(0,r.ga4())
s=r.e
r.e=a
if(a!=null)a.gm().k(0,r.ga4())
r.E(new D.p("colorTexture",s,r.e))}},
sc1:function(a){var s,r=this,q=r.f
if(q!=a){if(q!=null)q.gm().w(0,r.ga4())
s=r.f
r.f=a
if(a!=null)a.gm().k(0,r.ga4())
r.E(new D.p("blurTexture",s,r.f))
q=r.f==null
if(!(q&&s!=null))q=!q&&s==null
else q=!0
if(q){r.a=null
r.E(null)}}},
shS:function(a){var s,r=this
if(!r.b.n(0,a)){s=r.b
r.b=a
r.E(new D.p("textureMatrix",s,a))}},
shb:function(a){var s,r=this
if(!r.c.n(0,a)){s=r.c
r.c=a
r.E(new D.p("blurAdjust",s,a))}},
ab:function(a,b){},
a5:function(a,b){if(b!=null)if(!C.a.L(a,b)){b.a=a.length
a.push(b)}},
cz:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=g.a
if(e==null){s=g.f!=null
e=""+"GaussianBlur_"
e+=s?"1":"0"
r=e.charCodeAt(0)==0?e:e
q=new A.hA(s,r)
p=t.D.a(a.fr.h(0,r))
if(p==null){p=new A.cb(q,a.a,r)
e=""+"uniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n\nattribute vec3 posAttr;\nattribute vec2 txtAttr;\n\nvarying vec2 txt2D;\n\nvoid main()\n{\n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy;\n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
o=new P.aS("")
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
q.aO(o,3,[0.75],[0.5])
q.aO(o,6,[0.42857,2.14286],[0.41667,0.08333])
q.aO(o,9,[0,1.8],[0.5122,0.2439])
q.aO(o,12,[0,1.38462,3.23077],[0.22703,0.31622,0.07027])
q.aO(o,15,[0.9375,2.8125],[0.36184,0.13816])
q.aO(o,18,[0.47368,2.36842,4.26316],[0.29916,0.16318,0.03766])
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
p.cl(0,e.charCodeAt(0)==0?e:e,n.charCodeAt(0)==0?n:n)
p.y=p.ga6(p).h(0,"posAttr")
p.z=p.ga6(p).h(0,"txtAttr")
p.Q=t.j.a(p.gv().h(0,"projViewObjMat"))
p.ch=t.Q.a(p.gv().h(0,"txt2DMat"))
n=t.G
p.db=n.a(p.gv().h(0,"colorTxt"))
p.cy=t.V.a(p.gv().h(0,"blurScale"))
if(s){p.dx=n.a(p.gv().h(0,"blurTxt"))
p.cx=t.F.a(p.gv().h(0,"blurAdj"))}else p.dy=t.n.a(p.gv().h(0,"blurValue"))
a.bZ(p)}e=g.a=p
b.e=null}n=b.e
if((!(n instanceof Z.aJ)?b.e=null:n)==null){n=b.d
if(n==null)n=f
else{m=$.aa()
l=$.aG()
l=n.c2(new Z.cR(a.a),new Z.aD(m.a|l.a))
n=l}if(n==null)n=f
else{m=n.as($.aa())
if(m!=null){l=g.a
if(l==null)l=f
else{l=l.y
l=l==null?f:l.c}m.e=l==null?0:l}m=n.as($.aG())
if(m!=null){l=g.a
if(l==null)l=f
else{l=l.z
l=l==null?f:l.c}m.e=l==null?1:l}}b.e=n}k=[]
g.a5(k,g.e)
e=e.x.a
if(e)g.a5(k,g.f)
if(k.length<=0)return
for(j=0;j<k.length;++j)k[j].X(a)
n=g.a
if(n!=null){n.X(a)
m=g.e
n.d6(n.db,m)
m=g.b
l=n.ch
if(l!=null)l.ae(m.a3(0,!0))
m=g.d
l=a.c
i=a.d
h=n.cy
if(h!=null)h.a.uniform2f(h.d,m.a/l,m.b/i)
m=a.ge1()
n=n.Q
if(n!=null)n.ae(m.a3(0,!0))}n=g.a
if(e){if(n!=null){e=g.f
n.d6(n.dx,e)
e=g.c
n=n.cx
if(n!=null)n.ec(e)}}else if(n!=null){e=g.r
n=n.dy
if(n!=null)n.a.uniform1f(n.d,e)}e=b.e
if(e instanceof Z.aJ){e.X(a)
e.a1(a)
e.aJ(a)}else b.e=null
e=g.a
if(e!=null){a.a.useProgram(f)
e.ga6(e).c9()}for(e=a.a,j=0;j<k.length;++j){n=k[j]
if(n.c){n.c=!1
e.activeTexture(33984+n.a)
e.bindTexture(3553,f)}}}}
O.dR.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.z():s},
E:function(a){var s=this.fr
return s==null?null:s.q(a)},
ar:function(){return this.E(null)},
d2:function(a){this.a=null
this.E(a)},
fQ:function(){return this.d2(null)},
eS:function(a,b){return this.E(new D.at())},
eU:function(a,b){return this.E(new D.au())},
gdO:function(){var s=this,r=s.dx
if(r==null){r=new D.ch([],[],[],[],[])
r.cD(r.geP(),r.gft(),r.gfz())
r.gm().k(0,s.gd1())
r.gdN().k(0,s.ga4())
s.dx=r}return r},
gdu:function(){var s=this.f
return s==null?this.f=O.dS(this,"emission"):s},
gc0:function(){var s=this.r
return s==null?this.r=O.dS(this,"ambient"):s},
gbo:function(){var s=this.x
return s==null?this.x=O.dS(this,"diffuse"):s},
gc_:function(a){var s=this.db
return s==null?this.db=new O.hP(this,"alpha",new A.aj(!1,!1,!1)):s},
cT:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a=t.v,a0=new H.U(a),a1=c.dx
a1=a1==null?b:a1.e
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){q=a1[r]
p=q.gay()
o=a0.h(0,q.gay())
a0.l(0,p,o==null?1:o)}n=[]
a0.K(0,new O.hV(c,n))
C.a.b1(n,new O.hW())
m=new H.U(a)
a1=c.dx
a1=a1==null?b:a1.f
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){q=a1[r]
p=q.gay()
o=m.h(0,q.gay())
m.l(0,p,o==null?1:o)}l=[]
m.K(0,new O.hX(c,l))
C.a.b1(l,new O.hY())
k=new H.U(a)
a1=c.dx
a1=a1==null?b:a1.r
if(a1==null)a1=[]
s=a1.length
r=0
for(;r<a1.length;a1.length===s||(0,H.o)(a1),++r){p=a1[r].d!=null
o=p?1:0
p=p?1:0
p=k.h(0,p+4)
if(p==null)p=1
k.l(0,o+4,p)}j=[]
k.K(0,new O.hZ(c,j))
C.a.b1(j,new O.i_())
i=new H.U(a)
a=c.dx
a=a==null?b:a.x
if(a==null)a=[]
a1=a.length
r=0
for(;r<a.length;a.length===a1||(0,H.o)(a),++r){q=a[r]
s=q.gay()
p=i.h(0,q.gay())
i.l(0,s,p==null?1:p)}h=[]
i.K(0,new O.i0(c,h))
C.a.b1(h,new O.i1())
a=C.c.a2(c.e.a.length+3,4)
if(c.dy==null)c.dy=new O.hS(new V.a5(0,0,0,0))
a1=c.gdu().c
s=c.gc0().c
p=c.gbo().c
o=c.y
o=(o==null?c.y=O.dS(c,"invDiffuse"):o).c
g=c.z
g=(g==null?c.z=new O.hU(new V.N(0,0,0),c,"specular",new A.aj(!1,!1,!1)):g).c
f=c.Q
f=(f==null?c.Q=new O.hQ(c,"bump",new A.aj(!1,!1,!1)):f).c
e=c.cx
e=(e==null?c.cx=O.dS(c,"reflect"):e).c
d=c.cy
return A.m7(!1,!1,!1,!1,a*4,a1,s,p,o,g,f,e,(d==null?c.cy=new O.hT(new V.N(0,0,0),c,"refract",new A.aj(!1,!1,!1)):d).c,c.gc_(c).c,n,l,j,h)},
a5:function(a,b){if(b!=null)if(!C.a.L(a,b)){b.a=a.length
a.push(b)}},
ab:function(a,b){var s,r,q,p=this.dx
p=J.aH(p==null?[]:p)
s=H.S(p).c
for(;p.t();){r=s.a(p.d)
q=r.b
q=q==null?null:q.au(0,b,r)
if(q==null){q=$.i2
if(q==null){q=new V.be(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.i2=q}}r.a=q}},
cz:function(b8,b9){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7=b5.a
if(b7==null){s=b5.cT()
r=s.bp
b7=t.d1.a(b8.fr.h(0,r))
if(b7==null){q=b8.a
p=t.S
o=t.W
b7=new A.cm(s,[],P.P(p,o),P.P(p,t.J),P.P(p,o),P.P(p,t.L),P.P(p,o),P.P(p,t.U),P.P(p,o),P.P(p,t.R),q,r)
b7.ej(s,q)
b8.bZ(b7)}b7=b5.a=b7
b9.e=null}n=b7.x
m=n.bq
s=b9.e
if(!(s instanceof Z.aJ))s=b9.e=null
if(s==null||!s.d.n(0,m)){s=n.k4
if(s){r=b9.d
if(r!=null)r.ax()}r=n.r1
if(r){q=b9.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gN().c4()
q.gR().c4()
q=q.e
if(q!=null)q.ao(0)}}q=n.rx
if(q){p=b9.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gR().hd()
p=p.e
if(p!=null)p.ao(0)}}p=b9.d
l=p==null?b6:p.c2(new Z.cR(b8.a),m)
if(l==null)return
p=l.as($.aa())
if(p!=null){o=b7.y
o=o==null?b6:o.c
p.e=o==null?0:o}if(s){s=l.as($.b0())
if(s!=null){p=b7.Q
p=p==null?b6:p.c
s.e=p==null?1:p}}if(r){s=l.as($.b_())
if(s!=null){r=b7.z
r=r==null?b6:r.c
s.e=r==null?2:r}}if(n.r2){s=l.as($.aG())
if(s!=null){r=b7.ch
r=r==null?b6:r.c
s.e=r==null?3:r}}if(q){s=l.as($.b1())
if(s!=null){r=b7.cx
r=r==null?b6:r.c
s.e=r==null?4:r}}if(n.ry){s=l.as($.aZ())
if(s!=null){r=b7.cy
r=r==null?b6:r.c
s.e=r==null?5:r}}b9.e=l}k=[]
b7.X(b8)
if(n.fr){s=b8.dx
s=s.ga9(s)
r=b7.db
if(r!=null)r.ae(s.a3(0,!0))}if(n.fx){s=b8.cx
if(s==null){s=b8.db
r=b8.dx
r=b8.cx=s.ga9(s).A(0,r.ga9(r))
s=r}r=b7.dx
if(r!=null)r.ae(s.a3(0,!0))}s=b8.ge1()
r=b7.fr
if(r!=null)r.ae(s.a3(0,!0))
if(n.go){s=b8.db
s=s.ga9(s)
r=b7.dy
if(r!=null)r.ae(s.a3(0,!0))}if(n.x1){s=V.jN()
r=b7.go
if(r!=null)r.ae(s.a3(0,!0))}if(n.x2){s=V.a_()
r=b7.id
if(r!=null)r.ae(s.a3(0,!0))}if(n.y1){s=V.a_()
r=b7.k1
if(r!=null)r.ae(s.a3(0,!0))}if(n.aV>0){s=b5.e.a
j=s.length
r=b7.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.d(s,i)
r=s[i]
q=b7.k3
if(i>=q.length)return H.d(q,i)
q=q[i]
h=new Float32Array(H.bO(r.a3(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=b5.f
r=r==null?b6:r.f
if(r==null)r=new V.N(0,0,0)
q=b7.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=b5.f
b5.a5(k,s==null?b6:s.e)
s=b5.f
s=s==null?b6:s.e
b7.ai(b7.r2,s)}if(n.k1){s=n.b
if(s.a){r=b5.r
r=r==null?b6:r.f
if(r==null)r=new V.N(0,0,0)
q=b7.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=b5.r
b5.a5(k,s==null?b6:s.e)
s=b5.r
s=s==null?b6:s.e
b7.ai(b7.x1,s)}s=n.c
if(s.a){r=b5.x
r=r==null?b6:r.f
if(r==null)r=new V.N(0,0,0)
q=b7.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=b5.x
b5.a5(k,s==null?b6:s.e)
s=b5.x
s=s==null?b6:s.e
b7.ai(b7.y2,s)}s=n.d
if(s.a){r=b5.y
r=r==null?b6:r.f
if(r==null)r=new V.N(0,0,0)
q=b7.aV
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=b5.y
b5.a5(k,s==null?b6:s.e)
s=b5.y
s=s==null?b6:s.e
b7.ai(b7.bq,s)}s=n.e
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=b5.z
q=q==null?b6:q.ch
if(q==null)q=100
p=b7.dz
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b5.z
r=r==null?b6:r.f
if(r==null)r=new V.N(1,1,1)
q=b7.dv
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=b5.z
b5.a5(k,s==null?b6:s.e)
s=b5.z
s=s==null?b6:s.e
b7.ai(b7.dw,s)}s=n.z
if(s.length>0){g=new H.U(t.v)
r=b5.dx
r=r==null?b6:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gay()
c=g.h(0,d)
if(c==null)c=0
g.l(0,d,c+1)
p=b7.cc.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=e.gi_()
o=$.aw
p=p.bi(o==null?$.aw=new V.Q(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gi3()
o=$.aw
p=p.bi(o==null?$.aw=new V.Q(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaG(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.ghn()){p=e.gh7()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gh8()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gh9()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=b7.cb.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=b8.db
a=r.ga9(r)
a0=new H.U(t.v)
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
d=e.gay()
c=a0.h(0,d)
if(c==null)c=0
a0.l(0,d,c+1)
a8=b7.ce.h(0,d)
if(a8==null)a8=[]
if(c>>>0!==c||c>=a8.length)return H.d(a8,c)
b=a8[c]
a8=e.gdn(e)
a8=new V.y(C.b.A(p,a8.gdr(a8))+C.b.A(o,a8.gds(a8))+C.b.A(a1,a8.gdt()),C.b.A(a2,a8.gdr(a8))+C.b.A(a3,a8.gds(a8))+C.b.A(a4,a8.gdt()),C.b.A(a5,a8.gdr(a8))+C.b.A(a6,a8.gds(a8))+C.b.A(a7,a8.gdt())).J()
a9=b.e
a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gaG(e)
a9=b.f
a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
e.gaZ()
a8=e.gdn(e)
a9=b.d
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gbx()
a9=b.b
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gbv(e)
a9=b.c
if(a9!=null)a9.a.uniform3f(a9.d,a8.a,a8.b,a8.c)
a8=e.gaZ()
if(!C.a.L(k,a8)){a8.a=k.length
k.push(a8)}a8=e.gaZ()
a9=a8.gdQ(a8)
if(a9){a9=b.r
if(a9!=null){b0=a8.d
b1=a9.a
a9=a9.d
if(!b0)b1.uniform1i(a9,0)
else b1.uniform1i(a9,a8.a)}}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=b7.cd.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=b8.db
a=r.ga9(r)
b2=new H.U(t.v)
r=b5.dx
r=r==null?b6:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
p=e.d!=null?1:0
d=p+4
c=b2.h(0,d)
if(c==null)c=0
b2.l(0,d,c+1)
p=b7.cg.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
b3=a.A(0,e.a)
p=e.a
o=$.aw
p=p.bi(o==null?$.aw=new V.Q(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aw
p=b3.bi(p==null?$.aw=new V.Q(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.c
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.d!=null||!1){p=b3.dK(0)
o=b.d
if(o!=null){h=new Float32Array(H.bO(new V.cp(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).a3(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}}p=e.d
if(p!=null){if(!C.a.L(k,p)){p.a=k.length
k.push(p)}p=e.d
if(p!=null&&p.d>=6){o=b.f
if(o!=null){a1=p.d
a2=o.a
o=o.d
if(a1<6)a2.uniform1i(o,0)
else a2.uniform1i(o,p.a)}}}p=e.r
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.x
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.y
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=b2.h(0,q)
if(j==null)j=0
q=b7.cf.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=b8.db
a=r.ga9(r)
b4=new H.U(t.v)
r=b5.dx
r=r==null?b6:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.o)(r),++f){e=r[f]
d=e.gay()
c=b4.h(0,d)
if(c==null)c=0
b4.l(0,d,c+1)
p=b7.cj.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.d(p,c)
b=p[c]
p=e.ghI(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gdn(e).J()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bi(e.ghI(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaG(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaZ()
p=e.gbx()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gbv(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gic()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gie()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaZ()
p=e.gaZ()
if(!C.a.L(k,p)){p.a=k.length
k.push(p)}p=e.gaZ()
o=p.gdQ(p)
if(o){o=b.dx
if(o!=null){a1=p.d
a2=o.a
o=o.d
if(!a1)a2.uniform1i(o,0)
else a2.uniform1i(o,p.a)}}e.gcE()
p=e.ghZ()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gcE()
if(!C.a.L(k,p)){p.a=k.length
k.push(p)}p=e.gcE()
o=p.gdQ(p)
if(o){o=b.dy
if(o!=null){a1=p.d
a2=o.a
o=o.d
if(!a1)a2.uniform1i(o,0)
else a2.uniform1i(o,p.a)}}if(e.gi2()){p=e.gi1()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gi0()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.ghn()){p=e.gh7()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gh8()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gh9()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.o)(s),++f){q=s[f].a
j=b4.h(0,q)
if(j==null)j=0
q=b7.ci.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.c){s=b5.Q
b5.a5(k,s==null?b6:s.e)
s=b5.Q
s=s==null?b6:s.e
b7.ai(b7.dA,s)}if(n.dy){s=b8.Q
if(s==null){s=b8.db
s=b8.Q=s.ga9(s).dK(0)}r=b7.fy
if(r!=null)r.ae(s.a3(0,!0))}if(n.db){b5.a5(k,b6)
b7.ai(b7.dB,b6)
s=n.r
if(s.a){r=b5.cx
r=r==null?b6:r.f
if(r==null)r=new V.N(1,1,1)
q=b7.dC
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=b5.cx
b5.a5(k,s==null?b6:s.e)
s=b5.cx
s=s==null?b6:s.e
b7.ai(b7.dD,s)}s=n.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=b5.cy
q=q==null?b6:q.ch
if(q==null)q=0
p=b7.dE
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=b5.cy
r=r==null?b6:r.f
if(r==null)r=new V.N(1,1,1)
q=b7.dF
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=b5.cy
b5.a5(k,s==null?b6:s.e)
s=b5.cy
s=s==null?b6:s.e
b7.ai(b7.dG,s)}}s=n.y
r=s.a
q=!r
if(q)p=s.c
else p=!0
if(p){if(r){r=b5.db
r=r==null?b6:r.f
if(r==null)r=1
p=b7.dH
if(p!=null)p.a.uniform1f(p.d,r)}if(s.c){r=b5.db
b5.a5(k,r==null?b6:r.e)
r=b5.db
r=r==null?b6:r.e
b7.ai(b7.dI,r)}r=b8.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b8.a,i=0;i<k.length;++i){p=k[i]
if(!p.c&&p.d>=6){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(34067,p.b)}}p=t.c.a(b9.e)
p.X(b8)
p.a1(b8)
p.aJ(b8)
if(q)s=s.c
else s=!0
if(s)r.disable(3042)
for(i=0;i<k.length;++i){s=k[i]
if(s.c){s.c=!1
r.activeTexture(33984+s.a)
r.bindTexture(34067,b6)}}r.useProgram(b6)
b7.ga6(b7).c9()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cT().bp}}
O.hV.prototype={
$2:function(a,b){return this.b.push(new A.b2(a,C.c.a2(b+3,4)*4))},
$S:8}
O.hW.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:39}
O.hX.prototype={
$2:function(a,b){return this.b.push(new A.b5(a,C.c.a2(b+3,4)*4))},
$S:8}
O.hY.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:40}
O.hZ.prototype={
$2:function(a,b){return this.b.push(new A.bh(a,C.c.a2(b+3,4)*4))},
$S:8}
O.i_.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:41}
O.i0.prototype={
$2:function(a,b){return this.b.push(new A.bk(a,C.c.a2(b+3,4)*4))},
$S:8}
O.i1.prototype={
$2:function(a,b){return C.c.aj(a.a,b.a)},
$S:42}
O.hP.prototype={
aE:function(){var s,r=this
r.cI()
s=r.f
$.t().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.E(new D.p(r.b,s,1))}}}
O.cn.prototype={
E:function(a){return this.a.E(a)},
ar:function(){return this.E(null)},
aE:function(){},
d5:function(a){var s,r,q=this
if(!q.c.n(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aE()
s=q.a
s.a=null
s.E(null)}},
saI:function(a){var s,r=this,q=r.c
if(!q.c)r.d5(new A.aj(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gm().w(0,r.ga4())
s=r.e
r.e=a
a.gm().k(0,r.ga4())
r.a.E(new D.p(r.b+".textureCube",s,r.e))}}}
O.hQ.prototype={}
O.co.prototype={
d4:function(a){var s,r=this
if(!r.f.n(0,a)){s=r.f
r.f=a
r.a.E(new D.p(r.b+".color",s,a))}},
aE:function(){this.cI()
this.d4(new V.N(1,1,1))},
saG:function(a,b){this.d5(new A.aj(!0,!1,this.c.c))
this.d4(b)}}
O.hS.prototype={}
O.hT.prototype={
aE:function(){var s,r=this
r.cJ()
s=r.ch
$.t().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.E(new D.p(r.b+".refraction",s,1))}}}
O.hU.prototype={
aE:function(){var s,r=this
r.cJ()
s=r.ch
$.t().toString
if(!(Math.abs(s-100)<1e-9)){r.ch=100
r.a.E(new D.p(r.b+".shininess",s,100))}}}
O.iu.prototype={}
O.es.prototype={
gm:function(){var s=this.r
return s==null?this.r=D.z():s},
E:function(a){var s=this.r
return s==null?null:s.q(a)},
ar:function(){return this.E(null)},
f7:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.ga4(),q=0;q<b.length;b.length===s||(0,H.o)(b),++q){p=b[q]
o=p.f
if(o==null)o=p.f=new D.as()
n=o.a;(n==null?o.a=[]:n).push(r)}this.ar()},
f9:function(a,b){var s,r
for(s=b.gP(b),r=this.ga4();s.t();)s.gG(s).gm().w(0,r)
this.ar()},
ab:function(a,b){},
eI:function(a){a=C.c.a2(a+3,4)*4
if(a<=0)return 4
return a},
cz:function(a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.c.a,a2=a.eI(a1.length)
if(a2!==a.d||a.e!==a.f){a.d=a2
a.f=a.e
a.a=null}s=a.a
if(s==null){r=a.e
q=r.a
s=t.Y.a(a3.fr.h(0,"TextureLayout_"+a2+"_"+C.c.i(q)))
if(s==null){p=a3.a
s=new A.cE([],[],[],[],[],[],[],p,"TextureLayout_"+a2+"_"+C.c.i(q))
s.el(a2,r,p)
a3.bZ(s)}s=a.a=s}if(a4.e==null){r=a4.d
r=r==null?a0:r.c2(new Z.cR(a3.a),$.aa())
if(r==null)r=a0
else{q=r.as($.aa())
if(q!=null){p=s.x
p=p==null?a0:p.c
q.e=p==null?0:p}}a4.e=r}s.X(a3)
o=[]
for(r=s.dy,q=s.dx,p=s.db,n=s.cy,m=s.cx,l=s.ch,k=s.Q,j=0,i=0;i<a1.length;++i){h=a1[i]
g=h.a
if(!C.a.L(o,g)){g.a=o.length
o.push(g)}if(j<0||j>=k.length)return H.d(k,j)
f=k[j]
e=g.d
d=f.a
f=f.d
if(!e)d.uniform1i(f,0)
else d.uniform1i(f,g.a)
f=h.b
if(j>=l.length)return H.d(l,j)
e=l[j]
c=new Float32Array(H.bO(f.a3(0,!0)))
e.a.uniformMatrix4fv(e.d,!1,c)
b=h.c
if(j>=m.length)return H.d(m,j)
f=m[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=n.length)return H.d(n,j)
f=n[j]
f.a.uniform2f(f.d,b.c,b.d)
b=h.d
if(j>=p.length)return H.d(p,j)
f=p[j]
f.a.uniform2f(f.d,b.a,b.b)
if(j>=q.length)return H.d(q,j)
f=q[j]
f.a.uniform2f(f.d,b.c,b.d)
if(j>=r.length)return H.d(r,j)
f=r[j]
f.a.uniform1i(f.d,0);++j}a1=s.y
if(a1!=null)a1.a.uniform1i(a1.d,j)
a1=s.z
if(a1!=null)a1.e9(a.b)
for(i=0;i<o.length;++i)o[i].X(a3)
a1=a4.e
if(a1 instanceof Z.aJ){a1.X(a3)
a1.a1(a3)
a1.aJ(a3)}else a4.e=null
a1=a3.a
a1.useProgram(a0)
s.ga6(s).c9()
for(i=0;i<o.length;++i){r=o[i]
if(r.c){r.c=!1
a1.activeTexture(33984+r.a)
a1.bindTexture(3553,a0)}}}}
O.cF.prototype={}
T.iv.prototype={}
T.iw.prototype={}
T.ix.prototype={
gm:function(){var s=this.y
return s==null?this.y=D.z():s},
X:function(a){var s,r=this
if(!r.c&&r.d){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(3553,r.b)}}}
T.iy.prototype={
gm:function(){var s=this.e
return s==null?this.e=D.z():s}}
T.iz.prototype={
dP:function(a,b,c,d,e,f){var s,r=this,q=34067,p=r.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9729)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null)
s=new T.iy(o)
r.aR(s,o,a,34069,!1,!1)
r.aR(s,o,d,34070,!1,!1)
r.aR(s,o,b,34071,!1,!1)
r.aR(s,o,e,34072,!1,!1)
r.aR(s,o,c,34073,!1,!1)
r.aR(s,o,f,34074,!1,!1)
return s},
aR:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.Z(s,"load",new T.iA(this,s,!1,b,!1,d,a),!1)},
fR:function(a,b,c){var s,r,q,p,o,n
b=V.dk(b)
s=a.width
r=V.dk(s==null?512:s)
s=a.height
q=V.dk(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.jF()
p.width=r
p.height=q
o=t.b.a(C.f.e7(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.nQ(o.getImageData(0,0,s,n==null?512:n))}}}
T.iA.prototype={
$1:function(a){var s=this,r=s.a,q=r.fR(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.u.hR(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.ca()}++r.e},
$S:3}
X.h5.prototype={
gm:function(){var s=this.fr
return s==null?this.fr=D.z():s},
W:function(a){var s=this.fr
return s==null?null:s.q(a)},
sap:function(a,b){var s,r=this
if(b<1)b=1
s=r.a
if(s!==b){r.y=null
r.c=r.a=b
r.W(new D.p("width",s,b))}},
sak:function(a,b){var s,r=this
if(b<1)b=1
s=r.b
if(s!==b){r.y=null
r.d=r.b=b
r.W(new D.p("height",s,b))}},
X:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=3553,d=36161,c=36160
if(g.f){s=a.a
r=s.drawingBufferWidth
if(r==null)r=512
g.sap(0,C.b.U(r*g.r))
s=s.drawingBufferHeight
if(s==null)s=512
g.sak(0,C.b.U(s*g.x))}if(g.y==null){s=a.a
r=g.ch
q=g.a
p=g.b
o=H.fQ(s.getParameter(3379))
n=V.dk(q)
m=V.dk(p)
o=V.dk(o)
n=Math.min(n,o)
m=Math.min(m,o)
l=s.createTexture()
l.toString
s.bindTexture(e,l)
s.texParameteri(e,10242,33071)
s.texParameteri(e,10243,33071)
s.texParameteri(e,10241,9729)
s.texParameteri(e,10240,9729)
C.u.e4(s,e,0,6408,n,m,0,6408,5121,f)
s.bindTexture(e,f)
k=T.kB(l)
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
a.c=C.b.U(r*g.a)
q=j.d
a.d=C.b.U(q*g.b)
p=g.c
i=C.b.U(j.a*p)
l=g.d
s.viewport(i,C.b.U(j.b*l),C.b.U(r*p),C.b.U(q*l))
s.clearDepth(g.db)
if(g.cy){r=g.cx
q=r.a
p=r.b
l=r.c
r=r.d
s.clearColor(q,p,l,r)
h=16640}else h=256
if(h>0)s.clear(h)},
aJ:function(a){a.a.bindFramebuffer(36160,null)}}
X.hz.prototype={
gm:function(){var s=this.x
return s==null?this.x=D.z():s},
X:function(a){var s,r,q,p,o,n,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
s=m.drawingBufferWidth
if(s==null)s=512
r=m.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.b.U(q.a*s)
o=C.b.U(q.b*r)
n=C.b.U(q.c*s)
a.c=n
q=C.b.U(q.d*r)
a.d=q
m.viewport(p,o,n,q)
m.clearDepth(2000)
q=this.a
m.clearColor(q.a,q.b,q.c,q.d)
m.clear(16640)},
aJ:function(a){}}
X.hC.prototype={
gm:function(){var s=this.b
return s==null?this.b=D.z():s}}
X.e5.prototype={
gm:function(){var s=this.f
return s==null?this.f=D.z():s},
W:function(a){var s=this.f
return s==null?null:s.q(a)},
er:function(){return this.W(null)},
saA:function(a){var s,r,q=this
if(!J.E(q.b,a)){s=q.b
if(s!=null)s.gm().w(0,q.gcN())
r=q.b
q.b=a
if(a!=null)a.gm().k(0,q.gcN())
q.W(new D.p("mover",r,q.b))}}}
X.is.prototype={}
V.jy.prototype={
$1:function(a){var s=C.b.cA(this.a.ghq(),2)
if(s!=="0.00")P.kb(s+" fps")},
$S:43}
V.ik.prototype={
de:function(a){var s,r,q,p,o,n,m=this.fU(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.M(C.a.hs(a)),s=new P.bN(m.e5(new H.bA(s,s.gj(s))).a());s.t();){r=s.gG(s)
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
if(H.lm(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.mU(C.M,r,C.p,!1)
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
fU:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
s=t.N
h=new L.iE(P.P(s,t.aJ),P.P(s,t.aX),P.kn(s))
h.d=h.M(0,q)
s=h.M(0,q).p(0,p)
r=new K.V([])
r.V(new H.M("*"))
s.a.push(r)
s.c=!0
s=[]
h.M(0,p).p(0,p).a.push(new K.aO(s))
r=new K.V([])
r.V(new H.M("*"))
s.push(r)
r=h.M(0,p).p(0,"BoldEnd")
s=new K.V([])
s.V(new H.M("*"))
r.a.push(s)
r.c=!0
r=h.M(0,q).p(0,o)
s=new K.V([])
s.V(new H.M("_"))
r.a.push(s)
r.c=!0
r=[]
h.M(0,o).p(0,o).a.push(new K.aO(r))
s=new K.V([])
s.V(new H.M("_"))
r.push(s)
s=h.M(0,o).p(0,n)
r=new K.V([])
r.V(new H.M("_"))
s.a.push(r)
s.c=!0
s=h.M(0,q).p(0,m)
r=new K.V([])
r.V(new H.M("`"))
s.a.push(r)
s.c=!0
s=[]
h.M(0,m).p(0,m).a.push(new K.aO(s))
r=new K.V([])
r.V(new H.M("`"))
s.push(r)
r=h.M(0,m).p(0,"CodeEnd")
s=new K.V([])
s.V(new H.M("`"))
r.a.push(s)
r.c=!0
r=h.M(0,q).p(0,l)
s=new K.V([])
s.V(new H.M("["))
r.a.push(s)
r.c=!0
r=h.M(0,l).p(0,k)
s=new K.V([])
s.V(new H.M("|"))
r.a.push(s)
s=h.M(0,l).p(0,j)
r=new K.V([])
r.V(new H.M("]"))
s.a.push(r)
s.c=!0
s=[]
h.M(0,l).p(0,l).a.push(new K.aO(s))
r=new K.V([])
r.V(new H.M("|]"))
s.push(r)
r=h.M(0,k).p(0,j)
s=new K.V([])
s.V(new H.M("]"))
r.a.push(s)
r.c=!0
r=[]
h.M(0,k).p(0,k).a.push(new K.aO(r))
s=new K.V([])
s.V(new H.M("|]"))
r.push(s)
h.M(0,q).p(0,i).a.push(new K.h_())
s=[]
h.M(0,i).p(0,i).a.push(new K.aO(s))
r=new K.V([])
r.V(new H.M("*_`["))
s.push(r)
r=h.M(0,"BoldEnd")
r.d=r.a.bh(p)
r=h.M(0,n)
r.d=r.a.bh(o)
r=h.M(0,"CodeEnd")
r.d=r.a.bh(m)
r=h.M(0,j)
r.d=r.a.bh("Link")
r=h.M(0,i)
r.d=r.a.bh(i)
return this.b=h}}
V.im.prototype={
$1:function(a){P.kE(C.j,new V.il(this.a))},
$S:3}
V.il.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.b.U(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.u(-0.01*s)+"px"
q.top=r},
$S:2};(function aliases(){var s=J.a.prototype
s.ef=s.i
s=J.ba.prototype
s.eg=s.i
s=K.dG.prototype
s.ee=s.aX
s.by=s.i
s=O.cn.prototype
s.cI=s.aE
s=O.co.prototype
s.cJ=s.aE})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"n5","m2",44)
r(P,"nK","mx",9)
r(P,"nL","my",9)
r(P,"nM","mz",9)
q(P,"lb","nF",2)
r(W,"pf","ho",34)
var k
p(k=E.bw.prototype,"gdX",0,0,null,["$1","$0"],["dY","hB"],0,0)
p(k,"gdZ",0,0,null,["$1","$0"],["e_","hC"],0,0)
p(k,"gdV",0,0,null,["$1","$0"],["dW","hA"],0,0)
p(k,"gdT",0,0,null,["$1","$0"],["dU","hx"],0,0)
o(k,"ghv","hw",6)
o(k,"ghy","hz",6)
p(k=E.et.prototype,"gcK",0,0,null,["$1","$0"],["cM","cL"],0,0)
n(k,"ghN","e2",2)
m(k=X.eM.prototype,"gfa","fb",3)
m(k,"geV","eW",3)
m(k,"gf0","f1",4)
m(k,"gfe","ff",18)
m(k,"gfc","fd",18)
m(k,"gfi","fj",4)
m(k,"gfm","fn",4)
m(k,"gf4","f5",4)
m(k,"gfk","fl",4)
m(k,"gf2","f3",4)
m(k,"gfo","fp",46)
m(k,"gfq","fs",3)
m(k,"gfJ","fK",11)
m(k,"gfF","fG",11)
m(k,"gfH","fI",11)
p(k=D.ch.prototype,"gd_",0,0,null,["$1","$0"],["d0","fg"],0,0)
m(k,"gft","fu",31)
o(k,"geP","eQ",19)
o(k,"gfz","fA",19)
p(D.cw.prototype,"gbz",0,0,null,["$1","$0"],["ac","em"],0,0)
l(V.R.prototype,"gj","ba",12)
l(V.y.prototype,"gj","ba",12)
l(V.bn.prototype,"gj","ba",12)
p(k=U.bx.prototype,"gaS",0,0,null,["$1","$0"],["F","ad"],0,0)
o(k,"gen","eo",20)
o(k,"gfv","fw",20)
p(k=U.cL.prototype,"gaS",0,0,null,["$1","$0"],["F","ad"],0,0)
m(k,"gbI","bJ",13)
m(k,"gbK","bL",13)
m(k,"gbM","bN",13)
p(k=U.cM.prototype,"gaS",0,0,null,["$1","$0"],["F","ad"],0,0)
m(k,"gbI","bJ",1)
m(k,"gbK","bL",1)
m(k,"gbM","bN",1)
m(k,"geJ","eK",1)
m(k,"geL","eM",1)
m(k,"gh0","h1",1)
m(k,"gfZ","h_",1)
m(k,"gfX","fY",1)
m(U.cN.prototype,"geN","eO",1)
p(k=M.c0.prototype,"gS",0,0,null,["$1","$0"],["O","aB"],0,0)
o(k,"gfB","fC",15)
o(k,"gfD","fE",15)
p(M.c2.prototype,"gS",0,0,null,["$1","$0"],["O","aB"],0,0)
p(k=M.c7.prototype,"gS",0,0,null,["$1","$0"],["O","aB"],0,0)
o(k,"geX","eY",6)
o(k,"geZ","f_",6)
p(M.ca.prototype,"gS",0,0,null,["$1","$0"],["O","aB"],0,0)
p(O.dF.prototype,"ga4",0,0,null,["$1","$0"],["E","ar"],0,0)
p(k=O.dR.prototype,"ga4",0,0,null,["$1","$0"],["E","ar"],0,0)
p(k,"gd1",0,0,null,["$1","$0"],["d2","fQ"],0,0)
o(k,"geR","eS",23)
o(k,"geT","eU",23)
p(O.cn.prototype,"ga4",0,0,null,["$1","$0"],["E","ar"],0,0)
p(k=O.es.prototype,"ga4",0,0,null,["$1","$0"],["E","ar"],0,0)
o(k,"gf6","f7",24)
o(k,"gf8","f9",24)
p(X.e5.prototype,"gcN",0,0,null,["$1","$0"],["W","er"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.K,null)
q(P.K,[H.jL,J.a,J.a4,P.D,P.cW,P.h,H.bA,P.dI,H.c8,H.eK,H.iI,H.i8,H.ft,H.bt,P.W,H.hI,H.dQ,H.hD,H.ae,H.f6,P.d7,P.bM,P.bN,P.eR,P.en,P.eo,P.jf,P.dc,P.j8,P.cV,P.B,P.ef,P.du,P.je,P.T,P.b6,P.e4,P.cD,P.f3,P.hy,P.ac,P.aS,W.hg,W.jH,W.jV,W.F,W.c9,P.d9,P.fm,K.h_,K.dG,K.V,L.ek,L.eu,L.ev,L.iE,O.bu,O.cq,E.h7,E.bw,E.bs,E.bE,E.f0,E.ib,E.et,Z.eP,Z.cR,Z.aJ,Z.cc,Z.aD,D.h9,D.as,D.O,X.bZ,X.dN,X.hF,X.hM,X.a0,X.i6,X.iF,X.eM,D.cw,V.N,V.a5,V.hr,V.cp,V.be,V.L,V.Q,V.ad,V.ea,V.R,V.y,V.bn,U.cL,U.cM,U.cN,M.c2,M.c7,M.ca,A.h1,A.h2,A.aj,A.hA,A.b2,A.b5,A.bh,A.bk,A.hR,A.eC,A.eD,A.eF,A.eH,A.bv,A.iL,A.iQ,F.ak,F.hv,F.hG,F.hH,F.i9,F.ih,F.cB,F.cC,F.bj,F.cP,F.r,F.bJ,F.bK,F.iY,F.iZ,F.cQ,O.iu,O.cn,O.hS,O.cF,T.iz,X.is,X.hC,X.e5,V.ik])
q(J.a,[J.dJ,J.cf,J.ba,J.al,J.bz,J.b9,H.cs,W.c,W.fZ,W.dt,W.c_,W.ar,W.C,W.eW,W.ab,W.hj,W.hk,W.eX,W.c5,W.eZ,W.hl,W.i,W.f4,W.aL,W.hB,W.f8,W.b8,W.hL,W.i3,W.fc,W.fd,W.aN,W.fe,W.fg,W.aP,W.fk,W.fn,W.aQ,W.fo,W.aR,W.fu,W.an,W.fy,W.iC,W.aT,W.fA,W.iG,W.iS,W.fG,W.fI,W.fK,W.fM,W.fO,P.bc,P.fa,P.bg,P.fi,P.ia,P.fv,P.bm,P.fC,P.h3,P.eS,P.bG,P.fr])
q(J.ba,[J.e6,J.bH,J.av])
r(J.dL,J.al)
q(J.bz,[J.ce,J.dK])
q(P.D,[H.dO,P.ey,H.dM,H.eJ,H.ed,H.f1,P.dq,P.e1,P.ap,P.eL,P.eI,P.el,P.dv,P.dx])
r(P.ci,P.cW)
q(P.ci,[H.bI,W.eU,W.eT,P.dD])
r(H.M,H.bI)
q(P.h,[H.j,H.bd,H.cS,P.cd])
r(H.c6,H.bd)
q(P.dI,[H.cl,H.eQ])
r(H.cv,P.ey)
q(H.bt,[H.it,H.hE,H.jt,H.ju,H.jv,P.j2,P.j1,P.j3,P.j4,P.jd,P.jc,P.jl,P.ja,P.jb,P.hN,P.hm,P.hn,W.i4,W.i5,W.ig,W.iq,W.j5,P.jh,P.jm,P.hw,P.hx,P.h4,E.ic,E.id,E.ie,E.iB,D.ht,D.hu,F.jg,F.jn,F.jo,F.jp,F.jq,F.jA,F.jz,F.ij,F.j0,F.j_,F.iV,F.iW,O.hV,O.hW,O.hX,O.hY,O.hZ,O.i_,O.i0,O.i1,T.iA,V.jy,V.im,V.il])
q(H.it,[H.ip,H.bW])
r(P.ck,P.W)
r(H.U,P.ck)
r(H.aM,H.j)
r(H.bD,H.cs)
q(H.bD,[H.cY,H.d_])
r(H.cZ,H.cY)
r(H.bf,H.cZ)
r(H.d0,H.d_)
r(H.cr,H.d0)
q(H.cr,[H.dW,H.dX,H.dY,H.dZ,H.e_,H.ct,H.e0])
r(H.d8,H.f1)
r(P.d4,P.cd)
r(P.j9,P.jf)
r(P.d1,P.dc)
r(P.cU,P.d1)
r(P.dw,P.eo)
r(P.hp,P.du)
r(P.iT,P.hp)
r(P.iU,P.dw)
q(P.ap,[P.cz,P.dH])
q(W.c,[W.w,W.dC,W.az,W.d2,W.aA,W.af,W.d5,W.eO,W.bL,P.ds,P.aI])
q(W.w,[W.I,W.ai])
q(W.I,[W.l,P.k])
q(W.l,[W.dn,W.dp,W.b3,W.dE,W.by,W.ee])
r(W.hf,W.ar)
r(W.c3,W.eW)
q(W.ab,[W.hh,W.hi])
r(W.eY,W.eX)
r(W.c4,W.eY)
r(W.f_,W.eZ)
r(W.dz,W.f_)
r(W.aK,W.dt)
r(W.f5,W.f4)
r(W.dB,W.f5)
r(W.f9,W.f8)
r(W.b7,W.f9)
r(W.aC,W.i)
q(W.aC,[W.bb,W.a7,W.bl])
r(W.dT,W.fc)
r(W.dU,W.fd)
r(W.ff,W.fe)
r(W.dV,W.ff)
r(W.fh,W.fg)
r(W.cu,W.fh)
r(W.fl,W.fk)
r(W.e7,W.fl)
r(W.ec,W.fn)
r(W.d3,W.d2)
r(W.eh,W.d3)
r(W.fp,W.fo)
r(W.ei,W.fp)
r(W.em,W.fu)
r(W.fz,W.fy)
r(W.eq,W.fz)
r(W.d6,W.d5)
r(W.er,W.d6)
r(W.fB,W.fA)
r(W.ew,W.fB)
r(W.aU,W.a7)
r(W.fH,W.fG)
r(W.eV,W.fH)
r(W.cT,W.c5)
r(W.fJ,W.fI)
r(W.f7,W.fJ)
r(W.fL,W.fK)
r(W.cX,W.fL)
r(W.fN,W.fM)
r(W.fq,W.fN)
r(W.fP,W.fO)
r(W.fx,W.fP)
r(W.f2,P.en)
r(P.a8,P.fm)
r(P.fb,P.fa)
r(P.dP,P.fb)
r(P.fj,P.fi)
r(P.e2,P.fj)
r(P.fw,P.fv)
r(P.ep,P.fw)
r(P.fD,P.fC)
r(P.ex,P.fD)
r(P.dr,P.eS)
r(P.e3,P.aI)
r(P.fs,P.fr)
r(P.ej,P.fs)
q(K.dG,[K.aO,L.iH])
q(E.h7,[Z.bY,A.bi,T.iv])
q(D.O,[D.at,D.au,D.p,X.e8])
q(X.e8,[X.cj,X.bB,X.bC,X.cG])
q(O.bu,[D.ch,U.bx,M.c0])
q(D.h9,[U.hc,U.Y])
q(U.Y,[U.c1,U.cA])
q(A.bi,[A.cb,A.cm,A.cE])
q(A.iL,[A.cH,A.iN,A.iO,A.iP,A.iM,A.ez,A.cI,A.eA,A.eB,A.iR,A.eE,A.cJ,A.cK,A.eG])
r(F.io,F.hv)
r(F.iK,F.hH)
r(F.iX,F.iY)
r(F.i7,F.iZ)
q(O.iu,[O.dF,O.dR,O.es])
q(O.cn,[O.hP,O.hQ,O.co])
q(O.co,[O.hT,O.hU])
q(T.iv,[T.iw,T.iy])
r(T.ix,T.iw)
q(X.is,[X.h5,X.hz])
s(H.bI,H.eK)
s(H.cY,P.B)
s(H.cZ,H.c8)
s(H.d_,P.B)
s(H.d0,H.c8)
s(P.cW,P.B)
s(P.dc,P.ef)
s(W.eW,W.hg)
s(W.eX,P.B)
s(W.eY,W.F)
s(W.eZ,P.B)
s(W.f_,W.F)
s(W.f4,P.B)
s(W.f5,W.F)
s(W.f8,P.B)
s(W.f9,W.F)
s(W.fc,P.W)
s(W.fd,P.W)
s(W.fe,P.B)
s(W.ff,W.F)
s(W.fg,P.B)
s(W.fh,W.F)
s(W.fk,P.B)
s(W.fl,W.F)
s(W.fn,P.W)
s(W.d2,P.B)
s(W.d3,W.F)
s(W.fo,P.B)
s(W.fp,W.F)
s(W.fu,P.W)
s(W.fy,P.B)
s(W.fz,W.F)
s(W.d5,P.B)
s(W.d6,W.F)
s(W.fA,P.B)
s(W.fB,W.F)
s(W.fG,P.B)
s(W.fH,W.F)
s(W.fI,P.B)
s(W.fJ,W.F)
s(W.fK,P.B)
s(W.fL,W.F)
s(W.fM,P.B)
s(W.fN,W.F)
s(W.fO,P.B)
s(W.fP,W.F)
s(P.fa,P.B)
s(P.fb,W.F)
s(P.fi,P.B)
s(P.fj,W.F)
s(P.fv,P.B)
s(P.fw,W.F)
s(P.fC,P.B)
s(P.fD,W.F)
s(P.eS,P.W)
s(P.fr,P.B)
s(P.fs,W.F)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",G:"double",a3:"num",A:"String",bo:"bool",ac:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([O?])","~(O)","~()","~(i)","~(a7)","~(A,@)","~(n,h<bw>)","~(ak)","~(n,n)","~(~())","ac()","~(bl)","G()","~(O?)","~(cP,G,G)","~(n,h<ay>)","~(~(O))","A(n)","~(bb)","~(n,h<cg>)","~(n,h<Y?>)","G(G,G)","G(G)","~(n,h<be>)","~(n,h<cF>)","@(@)","@(A)","ac(@)","~(a3)","~(K?,K?)","ac(~())","bo(h<cg>)","~(A,A)","@(@,A)","A(c)","~(@)","bY(n)","~(@,@)","bo(w)","n(b2,b2)","n(b5,b5)","n(bh,bh)","n(bk,bk)","~(iD)","n(@,@)","I(w)","~(aU)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.mR(v.typeUniverse,JSON.parse('{"e6":"ba","bH":"ba","av":"ba","of":"i","or":"i","oh":"aI","og":"c","oy":"c","oB":"c","oe":"k","ot":"k","oi":"l","ow":"l","ou":"w","oq":"w","oZ":"af","om":"aC","oj":"ai","oC":"ai","oA":"a7","ov":"b7","on":"C","oo":"an","ox":"bf","dJ":{"bo":[]},"al":{"m":["1"],"j":["1"],"h":["1"]},"dL":{"m":["1"],"j":["1"],"h":["1"]},"bz":{"G":[],"a3":[]},"ce":{"G":[],"n":[],"a3":[]},"dK":{"G":[],"a3":[]},"b9":{"A":[]},"dO":{"D":[]},"M":{"m":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"bd":{"h":["2"]},"c6":{"j":["2"],"h":["2"]},"cS":{"h":["1"]},"bI":{"m":["1"],"j":["1"],"h":["1"]},"cv":{"D":[]},"dM":{"D":[]},"eJ":{"D":[]},"ed":{"D":[]},"U":{"X":["1","2"],"W.V":"2"},"aM":{"j":["1"],"h":["1"]},"bD":{"v":["1"]},"bf":{"v":["G"],"m":["G"],"j":["G"],"h":["G"]},"cr":{"v":["n"],"m":["n"],"j":["n"],"h":["n"]},"dW":{"v":["n"],"m":["n"],"j":["n"],"h":["n"]},"dX":{"v":["n"],"m":["n"],"j":["n"],"h":["n"]},"dY":{"v":["n"],"m":["n"],"j":["n"],"h":["n"]},"dZ":{"v":["n"],"m":["n"],"j":["n"],"h":["n"]},"e_":{"v":["n"],"m":["n"],"j":["n"],"h":["n"]},"ct":{"v":["n"],"m":["n"],"j":["n"],"h":["n"]},"e0":{"v":["n"],"m":["n"],"j":["n"],"h":["n"]},"f1":{"D":[]},"d8":{"D":[]},"d7":{"iD":[]},"d4":{"h":["1"]},"cU":{"j":["1"],"h":["1"]},"cd":{"h":["1"]},"ci":{"m":["1"],"j":["1"],"h":["1"]},"ck":{"X":["1","2"]},"W":{"X":["1","2"]},"d1":{"j":["1"],"h":["1"]},"G":{"a3":[]},"n":{"a3":[]},"m":{"j":["1"],"h":["1"]},"dq":{"D":[]},"ey":{"D":[]},"e1":{"D":[]},"ap":{"D":[]},"cz":{"D":[]},"dH":{"D":[]},"eL":{"D":[]},"eI":{"D":[]},"el":{"D":[]},"dv":{"D":[]},"e4":{"D":[]},"cD":{"D":[]},"dx":{"D":[]},"I":{"w":[],"c":[]},"bb":{"i":[]},"a7":{"i":[]},"w":{"c":[]},"az":{"c":[]},"aA":{"c":[]},"af":{"c":[]},"bl":{"i":[]},"aC":{"i":[]},"aU":{"a7":[],"i":[]},"l":{"I":[],"w":[],"c":[]},"dn":{"I":[],"w":[],"c":[]},"dp":{"I":[],"w":[],"c":[]},"b3":{"I":[],"w":[],"c":[]},"ai":{"w":[],"c":[]},"c4":{"m":["a8<a3>"],"v":["a8<a3>"],"j":["a8<a3>"],"h":["a8<a3>"]},"c5":{"a8":["a3"]},"dz":{"m":["A"],"v":["A"],"j":["A"],"h":["A"]},"eU":{"m":["I"],"j":["I"],"h":["I"]},"dB":{"m":["aK"],"v":["aK"],"j":["aK"],"h":["aK"]},"dC":{"c":[]},"dE":{"I":[],"w":[],"c":[]},"b7":{"m":["w"],"v":["w"],"j":["w"],"h":["w"]},"by":{"I":[],"w":[],"c":[]},"dT":{"X":["A","@"],"W.V":"@"},"dU":{"X":["A","@"],"W.V":"@"},"dV":{"m":["aN"],"v":["aN"],"j":["aN"],"h":["aN"]},"eT":{"m":["w"],"j":["w"],"h":["w"]},"cu":{"m":["w"],"v":["w"],"j":["w"],"h":["w"]},"e7":{"m":["aP"],"v":["aP"],"j":["aP"],"h":["aP"]},"ec":{"X":["A","@"],"W.V":"@"},"ee":{"I":[],"w":[],"c":[]},"eh":{"m":["az"],"v":["az"],"c":[],"j":["az"],"h":["az"]},"ei":{"m":["aQ"],"v":["aQ"],"j":["aQ"],"h":["aQ"]},"em":{"X":["A","A"],"W.V":"A"},"eq":{"m":["af"],"v":["af"],"j":["af"],"h":["af"]},"er":{"m":["aA"],"v":["aA"],"c":[],"j":["aA"],"h":["aA"]},"ew":{"m":["aT"],"v":["aT"],"j":["aT"],"h":["aT"]},"eO":{"c":[]},"bL":{"c":[]},"eV":{"m":["C"],"v":["C"],"j":["C"],"h":["C"]},"cT":{"a8":["a3"]},"f7":{"m":["aL?"],"v":["aL?"],"j":["aL?"],"h":["aL?"]},"cX":{"m":["w"],"v":["w"],"j":["w"],"h":["w"]},"fq":{"m":["aR"],"v":["aR"],"j":["aR"],"h":["aR"]},"fx":{"m":["an"],"v":["an"],"j":["an"],"h":["an"]},"d9":{"b8":[]},"dD":{"m":["I"],"j":["I"],"h":["I"]},"a8":{"fm":["1"]},"dP":{"m":["bc"],"j":["bc"],"h":["bc"]},"e2":{"m":["bg"],"j":["bg"],"h":["bg"]},"ep":{"m":["A"],"j":["A"],"h":["A"]},"k":{"I":[],"w":[],"c":[]},"ex":{"m":["bm"],"j":["bm"],"h":["bm"]},"dr":{"X":["A","@"],"W.V":"@"},"ds":{"c":[]},"aI":{"c":[]},"e3":{"c":[]},"ej":{"m":["X<@,@>"],"j":["X<@,@>"],"h":["X<@,@>"]},"bu":{"h":["1"]},"at":{"O":[]},"au":{"O":[]},"p":{"O":[]},"cj":{"O":[]},"bB":{"O":[]},"bC":{"O":[]},"e8":{"O":[]},"cG":{"O":[]},"ch":{"h":["cg"]},"cw":{"cg":[]},"c1":{"Y":[]},"bx":{"Y":[],"h":["Y?"]},"cA":{"Y":[]},"cL":{"Y":[]},"cM":{"Y":[]},"cN":{"Y":[]},"c0":{"ay":[],"h":["ay"]},"c2":{"ay":[]},"c7":{"ay":[]},"ca":{"ay":[]},"cb":{"bi":[]},"cm":{"bi":[]},"cE":{"bi":[]}}'))
H.mQ(v.typeUniverse,JSON.parse('{"al":1,"dL":1,"a4":1,"j":1,"bA":1,"bd":2,"c6":2,"cl":2,"cS":1,"eQ":1,"c8":1,"eK":1,"bI":1,"aM":1,"dQ":1,"bD":1,"bN":1,"d4":1,"en":1,"eo":2,"cV":1,"cd":1,"ci":1,"B":1,"ck":2,"W":2,"ef":1,"d1":1,"cW":1,"dc":1,"du":2,"dw":2,"h":1,"m":1,"dI":1,"f2":1,"F":1,"c9":1,"bu":1,"at":1,"au":1,"p":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.nV
return{c:s("aJ"),E:s("b3"),b:s("c_"),d:s("j<@>"),h:s("I"),C:s("D"),B:s("i"),e:s("os"),I:s("b8"),l:s("by"),m:s("al<@>"),T:s("cf"),M:s("av"),p:s("v<@>"),s:s("U<n,bo>"),v:s("U<n,n>"),J:s("m<eC>"),L:s("m<eD>"),U:s("m<eF>"),R:s("m<eH>"),t:s("m<@>"),u:s("cj"),f:s("X<@,@>"),Z:s("bB"),O:s("bC"),P:s("ac"),K:s("K"),q:s("a8<a3>"),k:s("bi"),N:s("A"),w:s("iD"),x:s("eu"),aM:s("cG"),n:s("ez"),y:s("cH"),V:s("cI"),g:s("eA"),F:s("eB"),Q:s("eE"),j:s("cJ"),G:s("cK"),a:s("eG"),o:s("bH"),cB:s("bo"),i:s("G"),z:s("@"),S:s("n"),A:s("0&*"),_:s("K*"),bc:s("kj<ac>?"),D:s("cb?"),d1:s("cm?"),X:s("K?"),ba:s("bG?"),aJ:s("ek?"),Y:s("cE?"),aX:s("ev?"),W:s("cH?"),ch:s("cI?"),cj:s("cJ?"),r:s("cK?"),H:s("a3")}})();(function constants(){var s=hunkHelpers.makeConstList
C.f=W.b3.prototype
C.J=J.a.prototype
C.a=J.al.prototype
C.c=J.ce.prototype
C.K=J.cf.prototype
C.b=J.bz.prototype
C.d=J.b9.prototype
C.L=J.av.prototype
C.t=J.e6.prototype
C.u=P.bG.prototype
C.k=J.bH.prototype
C.v=W.aU.prototype
C.w=W.bL.prototype
C.x=new E.bs("Browser.chrome")
C.l=new E.bs("Browser.firefox")
C.m=new E.bs("Browser.edge")
C.y=new E.bs("Browser.other")
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

C.F=new P.e4()
C.p=new P.iT()
C.G=new P.iU()
C.e=new P.j9()
C.q=new A.bv(0,"ColorBlendType.Overwrite")
C.h=new A.bv(1,"ColorBlendType.Additive")
C.H=new A.bv(2,"ColorBlendType.Average")
C.i=new A.bv(3,"ColorBlendType.AlphaBlend")
C.j=new P.b6(0)
C.I=new P.b6(5e6)
C.M=s([0,0,65498,45055,65535,34815,65534,18431])
C.N=new E.bE("OperatingSystem.windows")
C.r=new E.bE("OperatingSystem.mac")
C.O=new E.bE("OperatingSystem.linux")
C.P=new E.bE("OperatingSystem.other")
C.Q=new P.bM(null,2)})();(function staticFields(){$.j6=null
$.aq=0
$.bX=null
$.kd=null
$.lg=null
$.la=null
$.lk=null
$.jr=null
$.jw=null
$.k9=null
$.bP=null
$.df=null
$.dg=null
$.k3=!1
$.ao=C.e
$.a6=[]
$.hq=null
$.kp=null
$.i2=null
$.a1=null
$.aw=null
$.kw=null
$.ag=null
$.kI=null
$.kN=null
$.kL=null
$.kM=null
$.kK=null
$.kP=null
$.kO=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"op","ls",function(){return H.nX("_$dart_dartClosure")})
s($,"oD","lu",function(){return H.aB(H.iJ({
toString:function(){return"$receiver$"}}))})
s($,"oE","lv",function(){return H.aB(H.iJ({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oF","lw",function(){return H.aB(H.iJ(null))})
s($,"oG","lx",function(){return H.aB(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oJ","lA",function(){return H.aB(H.iJ(void 0))})
s($,"oK","lB",function(){return H.aB(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oI","lz",function(){return H.aB(H.kG(null))})
s($,"oH","ly",function(){return H.aB(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"oM","lD",function(){return H.aB(H.kG(void 0))})
s($,"oL","lC",function(){return H.aB(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"p_","kc",function(){return P.mw()})
s($,"p1","lH",function(){return P.mk("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"oT","lG",function(){return Z.ah(0)})
s($,"oN","lE",function(){return Z.ah(511)})
s($,"oV","aa",function(){return Z.ah(1)})
s($,"oU","b0",function(){return Z.ah(2)})
s($,"oP","b_",function(){return Z.ah(4)})
s($,"oW","aG",function(){return Z.ah(8)})
s($,"oX","b1",function(){return Z.ah(16)})
s($,"oQ","dl",function(){return Z.ah(32)})
s($,"oR","dm",function(){return Z.ah(64)})
s($,"oS","lF",function(){return Z.ah(96)})
s($,"oY","bV",function(){return Z.ah(128)})
s($,"oO","aZ",function(){return Z.ah(256)})
s($,"ol","lr",function(){return new V.hr()})
r($,"ok","t",function(){return $.lr()})
r($,"oz","lt",function(){var q,p,o,n,m,l=V.m8(),k=$.kL
if(k==null)k=$.kL=V.kJ(0,1,0)
q=$.kK
p=(q==null?$.kK=V.kJ(0,0,-1):q).J()
o=k.b8(p).J()
n=p.b8(o)
m=V.mv(l)
return V.am(o.a,n.a,p.a,o.b0(0).a7(m),o.b,n.b,p.b,n.b0(0).a7(m),o.c,n.c,p.c,p.b0(0).a7(m),0,0,0,1)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cs,ArrayBufferView:H.cs,Float32Array:H.bf,Float64Array:H.bf,Int16Array:H.dW,Int32Array:H.dX,Int8Array:H.dY,Uint16Array:H.dZ,Uint32Array:H.e_,Uint8ClampedArray:H.ct,CanvasPixelArray:H.ct,Uint8Array:H.e0,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.fZ,HTMLAnchorElement:W.dn,HTMLAreaElement:W.dp,Blob:W.dt,HTMLCanvasElement:W.b3,CanvasRenderingContext2D:W.c_,CDATASection:W.ai,CharacterData:W.ai,Comment:W.ai,ProcessingInstruction:W.ai,Text:W.ai,CSSPerspective:W.hf,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.c3,MSStyleCSSProperties:W.c3,CSS2Properties:W.c3,CSSImageValue:W.ab,CSSKeywordValue:W.ab,CSSNumericValue:W.ab,CSSPositionValue:W.ab,CSSResourceValue:W.ab,CSSUnitValue:W.ab,CSSURLImageValue:W.ab,CSSStyleValue:W.ab,CSSMatrixComponent:W.ar,CSSRotation:W.ar,CSSScale:W.ar,CSSSkew:W.ar,CSSTranslation:W.ar,CSSTransformComponent:W.ar,CSSTransformValue:W.hh,CSSUnparsedValue:W.hi,DataTransferItemList:W.hj,DOMException:W.hk,ClientRectList:W.c4,DOMRectList:W.c4,DOMRectReadOnly:W.c5,DOMStringList:W.dz,DOMTokenList:W.hl,Element:W.I,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.aK,FileList:W.dB,FileWriter:W.dC,HTMLFormElement:W.dE,Gamepad:W.aL,History:W.hB,HTMLCollection:W.b7,HTMLFormControlsCollection:W.b7,HTMLOptionsCollection:W.b7,ImageData:W.b8,HTMLImageElement:W.by,KeyboardEvent:W.bb,Location:W.hL,MediaList:W.i3,MIDIInputMap:W.dT,MIDIOutputMap:W.dU,MimeType:W.aN,MimeTypeArray:W.dV,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,Attr:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cu,RadioNodeList:W.cu,Plugin:W.aP,PluginArray:W.e7,RTCStatsReport:W.ec,HTMLSelectElement:W.ee,SourceBuffer:W.az,SourceBufferList:W.eh,SpeechGrammar:W.aQ,SpeechGrammarList:W.ei,SpeechRecognitionResult:W.aR,Storage:W.em,CSSStyleSheet:W.an,StyleSheet:W.an,TextTrack:W.aA,TextTrackCue:W.af,VTTCue:W.af,TextTrackCueList:W.eq,TextTrackList:W.er,TimeRanges:W.iC,Touch:W.aT,TouchEvent:W.bl,TouchList:W.ew,TrackDefaultList:W.iG,CompositionEvent:W.aC,FocusEvent:W.aC,TextEvent:W.aC,UIEvent:W.aC,URL:W.iS,VideoTrackList:W.eO,WheelEvent:W.aU,Window:W.bL,DOMWindow:W.bL,CSSRuleList:W.eV,ClientRect:W.cT,DOMRect:W.cT,GamepadList:W.f7,NamedNodeMap:W.cX,MozNamedAttrMap:W.cX,SpeechRecognitionResultList:W.fq,StyleSheetList:W.fx,SVGLength:P.bc,SVGLengthList:P.dP,SVGNumber:P.bg,SVGNumberList:P.e2,SVGPointList:P.ia,SVGStringList:P.ep,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bm,SVGTransformList:P.ex,AudioBuffer:P.h3,AudioParamMap:P.dr,AudioTrackList:P.ds,AudioContext:P.aI,webkitAudioContext:P.aI,BaseAudioContext:P.aI,OfflineAudioContext:P.e3,WebGL2RenderingContext:P.bG,SQLResultSetRowList:P.ej})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.bf.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"
W.d5.$nativeSuperclassTag="EventTarget"
W.d6.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=M.o5
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
