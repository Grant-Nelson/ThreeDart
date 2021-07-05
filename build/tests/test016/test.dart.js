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
a[c]=function(){a[c]=function(){H.or(b)}
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
if(a[b]!==s)H.os(b)
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
if(w[s][a])return w[s][a]}}var C={},H={k1:function k1(){},
iA:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
mF:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
o1:function(a,b,c){return a},
mm:function(a,b){if(t.V.b(a))return new H.ci(a,b)
return new H.bl(a,b)},
jZ:function(){return new P.bT("No element")},
mf:function(){return new P.bT("Too many elements")},
mE:function(a,b){H.es(a,0,J.b9(a)-1,b)},
es:function(a,b,c,d){if(c-b<=32)H.mD(a,b,c,d)
else H.mC(a,b,c,d)},
mD:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.hb(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ak()
o=o>0}else o=!1
if(!o)break
n=p-1
r.m(a,p,r.h(a,n))
p=n}r.m(a,p,q)}},
mC:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.a_(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a_(a4+a5,2),f=g-j,e=g+j,d=J.hb(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ak()
if(a2>0){s=a1
a1=a0
a0=s}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.a5(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.es(a3,a4,r-2,a6)
H.es(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.a5(a6.$2(d.h(a3,r),b),0);)++r
for(;J.a5(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.es(a3,r,q,a6)}else H.es(a3,r,q,a6)},
dZ:function dZ(a){this.a=a},
o:function o(a){this.a=a},
j:function j(){},
cw:function cw(){},
aR:function aR(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bl:function bl(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
cz:function cz(a,b){this.a=null
this.b=a
this.c=b},
cA:function cA(a,b){this.a=a
this.b=b},
bv:function bv(a,b){this.a=a
this.b=b},
f6:function f6(a,b){this.a=a
this.b=b},
cl:function cl(){},
f_:function f_(){},
bV:function bV(){},
lB:function(a){var s,r=H.lA(a)
if(r!=null)return r
s="minified:"+a
return s},
oi:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
t:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dw(a)
return s},
cM:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
cN:function(a){return H.mo(a)},
mo:function(a){var s,r,q,p
if(a instanceof P.L)return H.ac(H.c4(a),null)
if(J.ds(a)===C.L||t.o.b(a)){s=C.o(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.ac(H.c4(a),null)},
kP:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
mx:function(a){var s,r,q,p=[]
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r){q=a[r]
if(!H.jB(q))throw H.c(H.jF(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.bq(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.jF(q))}return H.kP(p)},
mw:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jB(q))throw H.c(H.jF(q))
if(q<0)throw H.c(H.jF(q))
if(q>65535)return H.mx(a)}return H.kP(a)},
k3:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.bq(s,10)|55296)>>>0,s&1023|56320)}throw H.c(P.aV(a,0,1114111,null,null))},
bO:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mv:function(a){var s=H.bO(a).getFullYear()+0
return s},
mt:function(a){var s=H.bO(a).getMonth()+1
return s},
mp:function(a){var s=H.bO(a).getDate()+0
return s},
mq:function(a){var s=H.bO(a).getHours()+0
return s},
ms:function(a){var s=H.bO(a).getMinutes()+0
return s},
mu:function(a){var s=H.bO(a).getSeconds()+0
return s},
mr:function(a){var s=H.bO(a).getMilliseconds()+0
return s},
e:function(a,b){if(a==null)J.b9(a)
throw H.c(H.c2(a,b))},
c2:function(a,b){var s,r="index"
if(!H.jB(b))return new P.aj(!0,b,r,null)
s=J.b9(a)
if(b<0||b>=s)return P.I(b,a,r,null,s)
return P.el(b,r)},
o5:function(a,b,c){if(a>c)return P.aV(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.aV(b,a,c,"end",null)
return new P.aj(!0,b,"end",null)},
jF:function(a){return new P.aj(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.ec()
s=new Error()
s.dartException=a
r=H.ot
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
ot:function(){return J.dw(this.dartException)},
f:function(a){throw H.c(a)},
m:function(a){throw H.c(P.at(a))},
aD:function(a){var s,r,q,p,o,n
a=H.ly(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=[]
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iP(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iQ:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
l_:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
k2:function(a,b){var s=b==null,r=s?null:b.method
return new H.dX(a,r,s?null:b.receiver)},
aI:function(a){if(a==null)return new H.ij(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bx(a,a.dartException)
return H.nY(a)},
bx:function(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
nY:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.bq(r,16)&8191)===10)switch(q){case 438:return H.bx(a,H.k2(H.t(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.t(s)+" (Error "+q+")"
return H.bx(a,new H.cL(p,e))}}if(a instanceof TypeError){o=$.lF()
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
if(f!=null)return H.bx(a,H.k2(s,f))
else{f=n.ai(s)
if(f!=null){f.method="call"
return H.bx(a,H.k2(s,f))}else{f=m.ai(s)
if(f==null){f=l.ai(s)
if(f==null){f=k.ai(s)
if(f==null){f=j.ai(s)
if(f==null){f=i.ai(s)
if(f==null){f=l.ai(s)
if(f==null){f=h.ai(s)
if(f==null){f=g.ai(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bx(a,new H.cL(s,f==null?e:f.method))}}return H.bx(a,new H.eZ(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.cS()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bx(a,new P.aj(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.cS()
return a},
kp:function(a){var s
if(a==null)return new H.fM(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fM(a)},
o7:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.m(0,a[s],a[r])}return b},
oh:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.d("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oh)
a.$identity=s
return s},
m9:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.ex().constructor.prototype):Object.create(new H.bA(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.ar
if(typeof r!=="number")return r.W()
$.ar=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kB(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.m5(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kB(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
m5:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lu,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.m3:H.m2
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
m6:function(a,b,c,d){var s=H.kA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kB:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.m8(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.m6(r,!p,s,b)
if(r===0){p=$.ar
if(typeof p!=="number")return p.W()
$.ar=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.c6
return new Function(p+(o==null?$.c6=H.hm("self"):o)+";return "+n+"."+H.t(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.ar
if(typeof p!=="number")return p.W()
$.ar=p+1
m+=p
p="return function("+m+"){return this."
o=$.c6
return new Function(p+(o==null?$.c6=H.hm("self"):o)+"."+H.t(s)+"("+m+");}")()},
m7:function(a,b,c,d){var s=H.kA,r=H.m4
switch(b?-1:a){case 0:throw H.c(new H.eo("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
m8:function(a,b){var s,r,q,p,o,n,m,l=$.c6
if(l==null)l=$.c6=H.hm("self")
s=$.kz
if(s==null)s=$.kz=H.hm("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.m7(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.t(r)+"(this."+s+");"
n=$.ar
if(typeof n!=="number")return n.W()
$.ar=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.t(r)+"(this."+s+", "+m+");"
n=$.ar
if(typeof n!=="number")return n.W()
$.ar=n+1
return new Function(o+n+"}")()},
ko:function(a,b,c,d,e,f,g){return H.m9(a,b,c,d,!!e,!!f,g)},
m2:function(a,b){return H.h_(v.typeUniverse,H.c4(a.a),b)},
m3:function(a,b){return H.h_(v.typeUniverse,H.c4(a.c),b)},
kA:function(a){return a.a},
m4:function(a){return a.c},
hm:function(a){var s,r,q,p=new H.bA("self","target","receiver","name"),o=J.k0(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.jS("Field name "+a+" not found."))},
or:function(a){throw H.c(new P.dG(a))},
ob:function(a){return v.getIsolateTag(a)},
os:function(a){return H.f(new H.dZ(a))},
pv:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ok:function(a){var s,r,q,p,o,n=$.lt.$1(a),m=$.jH[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jN[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lq.$2(a,n)
if(q!=null){m=$.jH[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jN[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jP(s)
$.jH[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jN[n]=s
return s}if(p==="-"){o=H.jP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lw(a,s)
if(p==="*")throw H.c(P.l0(n))
if(v.leafTags[n]===true){o=H.jP(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lw(a,s)},
lw:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ks(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jP:function(a){return J.ks(a,!1,null,!!a.$iv)},
om:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jP(s)
else return J.ks(s,c,null,null)},
of:function(){if(!0===$.kq)return
$.kq=!0
H.og()},
og:function(){var s,r,q,p,o,n,m,l
$.jH=Object.create(null)
$.jN=Object.create(null)
H.oe()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lx.$1(o)
if(n!=null){m=H.om(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
oe:function(){var s,r,q,p,o,n,m=C.A()
m=H.c0(C.B,H.c0(C.C,H.c0(C.p,H.c0(C.p,H.c0(C.D,H.c0(C.E,H.c0(C.F(C.o),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lt=new H.jK(p)
$.lq=new H.jL(o)
$.lx=new H.jM(n)},
c0:function(a,b){return a(b)||b},
mj:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(new P.hK("Illegal RegExp pattern ("+String(n)+")",a))},
lz:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
o6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
ly:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kv:function(a,b,c){var s=H.op(a,b,c)
return s},
op:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.ly(b),'g'),H.o6(c))},
iP:function iP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cL:function cL(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
ij:function ij(a){this.a=a},
fM:function fM(a){this.a=a
this.b=null},
bd:function bd(){},
eE:function eE(){},
ex:function ex(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eo:function eo(a){this.a=a},
R:function R(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hQ:function hQ(a){this.a=a},
hT:function hT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aQ:function aQ(a){this.a=a},
e0:function e0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
hP:function hP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dm:function(a){return a},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c2(b,a))},
nc:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.o5(a,b,c))
return b},
cH:function cH(){},
bM:function bM(){},
bm:function bm(){},
cG:function cG(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
cI:function cI(){},
eb:function eb(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
kU:function(a,b){var s=b.c
return s==null?b.c=H.kh(a,b.z,!0):s},
kT:function(a,b){var s=b.c
return s==null?b.c=H.di(a,"kH",[b.z]):s},
kV:function(a){var s=a.y
if(s===6||s===7||s===8)return H.kV(a.z)
return s===11||s===12},
mA:function(a){return a.cy},
o8:function(a){return H.ki(v.typeUniverse,a,!1)},
b3:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.b3(a,s,a0,a1)
if(r===s)return b
return H.le(a,r,!0)
case 7:s=b.z
r=H.b3(a,s,a0,a1)
if(r===s)return b
return H.kh(a,r,!0)
case 8:s=b.z
r=H.b3(a,s,a0,a1)
if(r===s)return b
return H.ld(a,r,!0)
case 9:q=b.Q
p=H.dr(a,q,a0,a1)
if(p===q)return b
return H.di(a,b.z,p)
case 10:o=b.z
n=H.b3(a,o,a0,a1)
m=b.Q
l=H.dr(a,m,a0,a1)
if(n===o&&l===m)return b
return H.kf(a,n,l)
case 11:k=b.z
j=H.b3(a,k,a0,a1)
i=b.Q
h=H.nV(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lc(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dr(a,g,a0,a1)
o=b.z
n=H.b3(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kg(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hg("Attempted to substitute unexpected RTI kind "+c))}},
dr:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.b3(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
nW:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.b3(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
nV:function(a,b,c,d){var s,r=b.a,q=H.dr(a,r,c,d),p=b.b,o=H.dr(a,p,c,d),n=b.c,m=H.nW(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fo()
s.a=q
s.b=o
s.c=m
return s},
px:function(a,b){a[v.arrayRti]=b
return a},
o2:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lu(s)
return a.$S()}return null},
lv:function(a,b){var s
if(H.kV(b))if(a instanceof H.bd){s=H.o2(a)
if(s!=null)return s}return H.c4(a)},
c4:function(a){var s
if(a instanceof P.L){s=a.$ti
return s!=null?s:H.kj(a)}if(Array.isArray(a))return H.li(a)
return H.kj(J.ds(a))},
li:function(a){var s=a[v.arrayRti],r=t.m
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
U:function(a){var s=a.$ti
return s!=null?s:H.kj(a)},
kj:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.nj(a,s)},
nj:function(a,b){var s=a instanceof H.bd?a.__proto__.__proto__.constructor:b,r=H.n9(v.typeUniverse,s.name)
b.$ccache=r
return r},
lu:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.ki(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ni:function(a){var s,r,q,p=this
if(p===t.K)return H.dn(p,a,H.nn)
if(!H.aH(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dn(p,a,H.nq)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jB
else if(r===t.i||r===t.H)q=H.nm
else if(r===t.N)q=H.no
else q=r===t.cB?H.kk:null
if(q!=null)return H.dn(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.oj)){p.r="$i"+s
return H.dn(p,a,H.np)}}else if(s===7)return H.dn(p,a,H.ng)
return H.dn(p,a,H.ne)},
dn:function(a,b,c){a.b=c
return a.b(b)},
nh:function(a){var s,r=this,q=H.nd
if(!H.aH(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.nb
else if(r===t.K)q=H.na
else{s=H.dt(r)
if(s)q=H.nf}r.a=q
return r.a(a)},
kn:function(a){var s,r=a.y
if(!H.aH(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kn(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
ne:function(a){var s=this
if(a==null)return H.kn(s)
return H.K(v.typeUniverse,H.lv(a,s),null,s,null)},
ng:function(a){if(a==null)return!0
return this.z.b(a)},
np:function(a){var s,r=this
if(a==null)return H.kn(r)
s=r.r
if(a instanceof P.L)return!!a[s]
return!!J.ds(a)[s]},
nd:function(a){var s,r=this
if(a==null){s=H.dt(r)
if(s)return a}else if(r.b(a))return a
H.ll(a,r)},
nf:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.ll(a,s)},
ll:function(a,b){throw H.c(H.n_(H.l5(a,H.lv(a,b),H.ac(b,null))))},
l5:function(a,b,c){var s=P.hF(a),r=H.ac(b==null?H.c4(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
n_:function(a){return new H.dg("TypeError: "+a)},
a1:function(a,b){return new H.dg("TypeError: "+H.l5(a,null,b))},
nn:function(a){return a!=null},
na:function(a){if(a!=null)return a
throw H.c(H.a1(a,"Object"))},
nq:function(a){return!0},
nb:function(a){return a},
kk:function(a){return!0===a||!1===a},
lj:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a1(a,"bool"))},
pk:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a1(a,"bool"))},
pj:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a1(a,"bool?"))},
pl:function(a){if(typeof a=="number")return a
throw H.c(H.a1(a,"double"))},
pn:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a1(a,"double"))},
pm:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a1(a,"double?"))},
jB:function(a){return typeof a=="number"&&Math.floor(a)===a},
jx:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a1(a,"int"))},
pp:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a1(a,"int"))},
po:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a1(a,"int?"))},
nm:function(a){return typeof a=="number"},
pq:function(a){if(typeof a=="number")return a
throw H.c(H.a1(a,"num"))},
ps:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a1(a,"num"))},
pr:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a1(a,"num?"))},
no:function(a){return typeof a=="string"},
jy:function(a){if(typeof a=="string")return a
throw H.c(H.a1(a,"String"))},
pu:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a1(a,"String"))},
pt:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a1(a,"String?"))},
nR:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.ac(a[q],b)
return s},
lm:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=[]
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.e(a5,j)
m=C.b.W(m,a5[j])
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
if(l===9){p=H.nX(a.z)
o=a.Q
return o.length!==0?p+("<"+H.nR(o,b)+">"):p}if(l===11)return H.lm(a,b,null)
if(l===12)return H.lm(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.e(b,n)
return b[n]}return"?"},
nX:function(a){var s,r=H.lA(a)
if(r!=null)return r
s="minified:"+a
return s},
lf:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
n9:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ki(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dj(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.di(a,b,q)
n[b]=o
return o}else return m},
n7:function(a,b){return H.lh(a.tR,b)},
n6:function(a,b){return H.lh(a.eT,b)},
ki:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.la(H.l8(a,null,b,c))
r.set(b,s)
return s},
h_:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.la(H.l8(a,b,c,!0))
q.set(c,r)
return r},
n8:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.kf(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
b2:function(a,b){b.a=H.nh
b.b=H.ni
return b},
dj:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.ag(null,null)
s.y=b
s.cy=c
r=H.b2(a,s)
a.eC.set(c,r)
return r},
le:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.n4(a,b,r,c)
a.eC.set(r,s)
return s},
n4:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aH(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.ag(null,null)
q.y=6
q.z=b
q.cy=c
return H.b2(a,q)},
kh:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.n3(a,b,r,c)
a.eC.set(r,s)
return s},
n3:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aH(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dt(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dt(q.z))return q
else return H.kU(a,b)}}p=new H.ag(null,null)
p.y=7
p.z=b
p.cy=c
return H.b2(a,p)},
ld:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.n1(a,b,r,c)
a.eC.set(r,s)
return s},
n1:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aH(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.di(a,"kH",[b])
else if(b===t.P||b===t.T)return t.bc}q=new H.ag(null,null)
q.y=8
q.z=b
q.cy=c
return H.b2(a,q)},
n5:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.ag(null,null)
s.y=13
s.z=b
s.cy=q
r=H.b2(a,s)
a.eC.set(q,r)
return r},
fZ:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
n0:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
di:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.fZ(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.ag(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.b2(a,r)
a.eC.set(p,q)
return q},
kf:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.fZ(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ag(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.b2(a,o)
a.eC.set(q,n)
return n},
lc:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.fZ(m)
if(j>0){s=l>0?",":""
r=H.fZ(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.n0(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.ag(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.b2(a,o)
a.eC.set(q,r)
return r},
kg:function(a,b,c,d){var s,r=b.cy+("<"+H.fZ(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.n2(a,b,c,r,d)
a.eC.set(r,s)
return s},
n2:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.b3(a,b,r,0)
m=H.dr(a,c,r,0)
return H.kg(a,n,m,c!==m)}}l=new H.ag(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.b2(a,l)},
l8:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
la:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.mU(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.l9(a,r,h,g,!1)
else if(q===46)r=H.l9(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.b1(a.u,a.e,g.pop()))
break
case 94:g.push(H.n5(a.u,g.pop()))
break
case 35:g.push(H.dj(a.u,5,"#"))
break
case 64:g.push(H.dj(a.u,2,"@"))
break
case 126:g.push(H.dj(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.ke(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.di(p,n,o))
else{m=H.b1(p,a.e,n)
switch(m.y){case 11:g.push(H.kg(p,m,o,a.n))
break
default:g.push(H.kf(p,m,o))
break}}break
case 38:H.mV(a,g)
break
case 42:p=a.u
g.push(H.le(p,H.b1(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kh(p,H.b1(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.ld(p,H.b1(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fo()
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
H.ke(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.lc(p,H.b1(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.ke(a.u,a.e,o)
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
return H.b1(a.u,a.e,i)},
mU:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
l9:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lf(s,o.z)[p]
if(n==null)H.f('No "'+p+'" in "'+H.mA(o)+'"')
d.push(H.h_(s,o,n))}else d.push(p)
return m},
mV:function(a,b){var s=b.pop()
if(0===s){b.push(H.dj(a.u,1,"0&"))
return}if(1===s){b.push(H.dj(a.u,4,"1&"))
return}throw H.c(P.hg("Unexpected extended operation "+H.t(s)))},
b1:function(a,b,c){if(typeof c=="string")return H.di(a,c,a.sEA)
else if(typeof c=="number")return H.mW(a,b,c)
else return c},
ke:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.b1(a,b,c[s])},
mX:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.b1(a,b,c[s])},
mW:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hg("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hg("Bad index "+c+" for "+b.i(0)))},
K:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aH(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aH(b))return!1
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
if(p===6){s=H.kU(a,d)
return H.K(a,b,c,s,e)}if(r===8){if(!H.K(a,b.z,c,d,e))return!1
return H.K(a,H.kT(a,b),c,d,e)}if(r===7){s=H.K(a,t.P,c,d,e)
return s&&H.K(a,b.z,c,d,e)}if(p===8){if(H.K(a,b,c,d.z,e))return!0
return H.K(a,b,c,H.kT(a,d),e)}if(p===7){s=H.K(a,b,c,t.P,e)
return s||H.K(a,b,c,d.z,e)}if(q)return!1
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
if(!H.K(a,k,c,j,e)||!H.K(a,j,e,k,c))return!1}return H.ln(a,b.z,c,d.z,e)}if(p===11){if(b===t.M)return!0
if(s)return!1
return H.ln(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.nl(a,b,c,d,e)}return!1},
ln:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
nl:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.K(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lf(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.K(a,H.h_(a,b,l[p]),c,r[p],e))return!1
return!0},
dt:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aH(a))if(r!==7)if(!(r===6&&H.dt(a.z)))s=r===8&&H.dt(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
oj:function(a){var s
if(!H.aH(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aH:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lh:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
ag:function ag(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fo:function fo(){this.c=this.b=this.a=null},
fj:function fj(){},
dg:function dg(a){this.a=a},
lA:function(a){return v.mangledGlobalNames[a]},
on:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ks:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jJ:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kq==null){H.of()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.l0("Return interceptor for "+H.t(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jh
if(o==null)o=$.jh=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.ok(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){o=$.jh
if(o==null)o=$.jh=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
mg:function(a){if(a<0||a>4294967295)throw H.c(P.aV(a,0,4294967295,"length",null))
return J.mh(new Array(a))},
k_:function(a){if(a<0)throw H.c(P.jS("Length must be a non-negative integer: "+a))
return new Array(a)},
mh:function(a){return J.k0(a)},
k0:function(a){a.fixed$length=Array
return a},
mi:function(a,b){return J.lX(a,b)},
ds:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cq.prototype
return J.dV.prototype}if(typeof a=="string")return J.aP.prototype
if(a==null)return J.cr.prototype
if(typeof a=="boolean")return J.dU.prototype
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.L)return a
return J.jJ(a)},
hb:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.L)return a
return J.jJ(a)},
jI:function(a){if(a==null)return a
if(a.constructor==Array)return J.am.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.L)return a
return J.jJ(a)},
o9:function(a){if(typeof a=="number")return J.bI.prototype
if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bt.prototype
return a},
oa:function(a){if(typeof a=="string")return J.aP.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bt.prototype
return a},
aG:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.L)return a
return J.jJ(a)},
a5:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ds(a).t(a,b)},
lU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oi(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hb(a).h(a,b)},
lV:function(a,b,c){return J.aG(a).fE(a,b,c)},
lW:function(a,b,c,d){return J.aG(a).fV(a,b,c,d)},
lX:function(a,b){return J.o9(a).af(a,b)},
hd:function(a,b){return J.jI(a).E(a,b)},
jR:function(a,b){return J.jI(a).F(a,b)},
lY:function(a){return J.aG(a).ga5(a)},
lZ:function(a){return J.aG(a).gdk(a)},
m_:function(a){return J.aG(a).gdn(a)},
he:function(a){return J.ds(a).gG(a)},
aq:function(a){return J.jI(a).gL(a)},
b9:function(a){return J.hb(a).gl(a)},
kx:function(a){return J.jI(a).hv(a)},
m0:function(a,b){return J.aG(a).hx(a,b)},
m1:function(a){return J.oa(a).hG(a)},
dw:function(a){return J.ds(a).i(a)},
a:function a(){},
dU:function dU(){},
cr:function cr(){},
bi:function bi(){},
eh:function eh(){},
bt:function bt(){},
ax:function ax(){},
am:function am(){},
dW:function dW(){},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bI:function bI(){},
cq:function cq(){},
dV:function dV(){},
aP:function aP(){}},P={
mL:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.nZ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.c1(new P.jd(q),1)).observe(s,{childList:true})
return new P.jc(q,s,r)}else if(self.setImmediate!=null)return P.o_()
return P.o0()},
mM:function(a){self.scheduleImmediate(H.c1(new P.je(a),0))},
mN:function(a){self.setImmediate(H.c1(new P.jf(a),0))},
mO:function(a){P.k8(C.i,a)},
k8:function(a,b){var s=C.c.a_(a.a,1000)
return P.mY(s<0?0:s,b)},
kZ:function(a,b){var s=C.c.a_(a.a,1000)
return P.mZ(s<0?0:s,b)},
mY:function(a,b){var s=new P.df()
s.eh(a,b)
return s},
mZ:function(a,b){var s=new P.df()
s.ei(a,b)
return s},
ph:function(a){return new P.bZ(a,1)},
mR:function(){return C.V},
mS:function(a){return new P.bZ(a,3)},
ns:function(a){return new P.dc(a)},
nO:function(){var s,r
for(s=$.c_;s!=null;s=$.c_){$.dq=null
r=s.b
$.c_=r
if(r==null)$.dp=null
s.a.$0()}},
nU:function(){$.kl=!0
try{P.nO()}finally{$.dq=null
$.kl=!1
if($.c_!=null)$.kw().$1(P.lr())}},
nS:function(a){var s=new P.f7(a),r=$.dp
if(r==null){$.c_=$.dp=s
if(!$.kl)$.kw().$1(P.lr())}else $.dp=r.b=s},
nT:function(a){var s,r,q,p=$.c_
if(p==null){P.nS(a)
$.dq=$.dp
return}s=new P.f7(a)
r=$.dq
if(r==null){s.b=p
$.c_=$.dq=s}else{q=r.b
s.b=q
$.dq=r.b=s
if(q==null)$.dp=s}},
kY:function(a,b){var s=$.ao
if(s===C.e)return P.k8(a,b)
return P.k8(a,s.h_(b))},
mH:function(a,b){var s=$.ao
if(s===C.e)return P.kZ(a,b)
return P.kZ(a,s.dg(b,t.ae))},
lo:function(a,b,c,d,e){P.nT(new P.jE(d,e))},
nP:function(a,b,c,d){var s,r=$.ao
if(r===c)return d.$0()
$.ao=c
s=r
try{r=d.$0()
return r}finally{$.ao=s}},
nQ:function(a,b,c,d,e){var s,r=$.ao
if(r===c)return d.$1(e)
$.ao=c
s=r
try{r=d.$1(e)
return r}finally{$.ao=s}},
jd:function jd(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
df:function df(){this.c=0},
js:function js(a,b){this.a=a
this.b=b},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(a,b){this.a=a
this.b=b},
bw:function bw(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dc:function dc(a){this.a=a},
f7:function f7(a){this.a=a
this.b=null},
ez:function ez(){},
eA:function eA(){},
jv:function jv(){},
jE:function jE(a,b){this.a=a
this.b=b},
jk:function jk(){},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function(a,b,c){return H.o7(a,new H.R(b.ap("@<0>").cP(c).ap("R<1,2>")))},
N:function(a,b){return new H.R(a.ap("@<0>").cP(b).ap("R<1,2>"))},
cu:function(a){return new P.d0(a.ap("d0<0>"))},
kd:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
mT:function(a,b){var s=new P.d1(a,b)
s.c=a.e
return s},
me:function(a,b,c){var s,r
if(P.km(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=[]
$.a8.push(a)
try{P.nr(a,s)}finally{if(0>=$.a8.length)return H.e($.a8,-1)
$.a8.pop()}r=P.kW(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
jY:function(a,b,c){var s,r
if(P.km(a))return b+"..."+c
s=new P.aY(b)
$.a8.push(a)
try{r=s
r.a=P.kW(r.a,a,", ")}finally{if(0>=$.a8.length)return H.e($.a8,-1)
$.a8.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
km:function(a){var s,r
for(s=$.a8.length,r=0;r<s;++r)if(a===$.a8[r])return!0
return!1},
nr:function(a,b){var s,r,q,p,o,n,m,l=a.gL(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.u())return
s=H.t(l.gC(l))
b.push(s)
k+=s.length+2;++j}if(!l.u()){if(j<=5)return
if(0>=b.length)return H.e(b,-1)
r=b.pop()
if(0>=b.length)return H.e(b,-1)
q=b.pop()}else{p=l.gC(l);++j
if(!l.u()){if(j<=4){b.push(H.t(p))
return}r=H.t(p)
if(0>=b.length)return H.e(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gC(l);++j
for(;l.u();p=o,o=n){n=l.gC(l);++j
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
kI:function(a,b){var s,r,q=P.cu(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r)q.n(0,b.a(a[r]))
return q},
kJ:function(a){var s,r={}
if(P.km(a))return"{...}"
s=new P.aY("")
try{$.a8.push(a)
s.a+="{"
r.a=!0
J.jR(a,new P.hY(r,s))
s.a+="}"}finally{if(0>=$.a8.length)return H.e($.a8,-1)
$.a8.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
d0:function d0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jj:function jj(a){this.a=a
this.c=this.b=null},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cp:function cp(){},
cv:function cv(){},
E:function E(){},
cy:function cy(){},
hY:function hY(a,b){this.a=a
this.b=b},
T:function T(){},
eq:function eq(){},
d8:function d8(){},
d2:function d2(){},
dk:function dk(){},
dD:function dD(){},
dF:function dF(){},
hC:function hC(){},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
hM:function hM(a){this.a=a},
j_:function j_(){},
j0:function j0(){},
jt:function jt(a){this.b=0
this.c=a},
md:function(a){if(a instanceof H.bd)return a.i(0)
return"Instance of '"+H.cN(a)+"'"},
hU:function(a,b,c){var s,r=c?J.k_(a):J.mg(a)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hV:function(a,b){var s,r=[]
for(s=J.aq(a);s.u();)r.push(s.gC(s))
if(b)return r
return J.k0(r)},
ml:function(a,b){var s,r,q=J.k_(a)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.e(q,s)
q[s]=r}return q},
k7:function(a){var s=a,r=s.length,q=P.k4(0,null,r)
return H.mw(q<r?s.slice(0,q):s)},
my:function(a){return new H.hP(a,H.mj(a,!1,!0,!1,!1,!1))},
kW:function(a,b,c){var s=J.aq(b)
if(!s.u())return a
if(c.length===0){do a+=H.t(s.gC(s))
while(s.u())}else{a+=H.t(s.gC(s))
for(;s.u();)a=a+c+H.t(s.gC(s))}return a},
lg:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.h){s=$.lT().b
s=s.test(b)}else s=!1
if(s)return b
r=C.H.h3(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.e(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.k3(o)
else p=p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
ma:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dI:function(a){if(a>=10)return""+a
return"0"+a},
kD:function(a){return new P.bf(1000*a)},
hF:function(a){if(typeof a=="number"||H.kk(a)||null==a)return J.dw(a)
if(typeof a=="string")return JSON.stringify(a)
return P.md(a)},
hg:function(a){return new P.dz(a)},
jS:function(a){return new P.aj(!1,null,null,a)},
el:function(a,b){return new P.cO(null,null,!0,a,b,"Value not in range")},
aV:function(a,b,c,d,e){return new P.cO(b,c,!0,a,d,"Invalid value")},
k4:function(a,b,c){if(a>c)throw H.c(P.aV(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.aV(b,a,c,"end",null))
return b}return c},
kQ:function(a,b){if(a<0)throw H.c(P.aV(a,0,null,b,null))
return a},
I:function(a,b,c,d,e){var s=e==null?J.b9(b):e
return new P.dS(s,!0,a,c,"Index out of range")},
y:function(a){return new P.f0(a)},
l0:function(a){return new P.eY(a)},
k6:function(a){return new P.bT(a)},
at:function(a){return new P.dE(a)},
d:function(a){return new P.fl(a)},
ku:function(a){H.on(a)},
Q:function Q(a,b){this.a=a
this.b=b},
bf:function bf(a){this.a=a},
hy:function hy(){},
hz:function hz(){},
G:function G(){},
dz:function dz(a){this.a=a},
eM:function eM(){},
ec:function ec(){},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cO:function cO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
dS:function dS(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f0:function f0(a){this.a=a},
eY:function eY(a){this.a=a},
bT:function bT(a){this.a=a},
dE:function dE(a){this.a=a},
ef:function ef(){},
cS:function cS(){},
dG:function dG(a){this.a=a},
fl:function fl(a){this.a=a},
hK:function hK(a,b){this.a=a
this.b=b},
h:function h(){},
dT:function dT(){},
af:function af(){},
L:function L(){},
aY:function aY(a){this.a=a},
o4:function(a){var s,r,q,p
if(t.I.b(a)){s=J.m_(a)
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
return new P.dh(r,q,p)},
o3:function(a){if(a instanceof P.dh)return{data:a.a,height:a.b,width:a.c}
return a},
b4:function(a){var s,r,q,p,o
if(a==null)return null
s=P.N(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p){o=r[p]
s.m(0,o,a[o])}return s},
lk:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.kk(a))return a
if(t.f.b(a))return P.ls(a)
if(t.e.b(a)){s=[]
J.jR(a,new P.jz(s))
a=s}return a},
ls:function(a){var s={}
J.jR(a,new P.jG(s))
return s},
dh:function dh(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
jG:function jG(a){this.a=a},
dM:function dM(a,b){this.a=a
this.b=b},
hI:function hI(){},
hJ:function hJ(){},
fF:function fF(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bk:function bk(){},
e_:function e_(){},
bn:function bn(){},
ed:function ed(){},
il:function il(){},
bQ:function bQ(){},
eB:function eB(){},
k:function k(){},
bs:function bs(){},
eL:function eL(){},
ft:function ft(){},
fu:function fu(){},
fB:function fB(){},
fC:function fC(){},
fO:function fO(){},
fP:function fP(){},
fX:function fX(){},
fY:function fY(){},
hj:function hj(){},
dA:function dA(){},
hk:function hk(a){this.a=a},
dB:function dB(){},
aK:function aK(){},
ee:function ee(){},
f9:function f9(){},
bP:function bP(){},
ev:function ev(){},
fK:function fK(){},
fL:function fL(){}},W={
ky:function(){var s=document.createElement("a")
s.toString
return s},
jT:function(){var s=document.createElement("canvas")
s.toString
return s},
mc:function(a,b,c){var s=document.body
s.toString
s=new H.bv(new W.a0(C.l.ag(s,a,b,c)),new W.hA())
return t.h.a(s.gaN(s))},
hB:function(a){return"wheel"},
cj:function(a){var s,r,q="element tag unavailable"
try{s=J.aG(a)
s.gdX(a)
q=s.gdX(a)}catch(r){H.aI(r)}return q},
ji:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
l7:function(a,b,c,d){var s=W.ji(W.ji(W.ji(W.ji(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
X:function(a,b,c,d){var s=W.lp(new W.jg(c),t.c)
if(s!=null&&!0)J.lW(a,b,s,!1)
return new W.fk(a,b,s,!1)},
l6:function(a){var s=W.ky(),r=window
s=new W.bY(new W.jn(s,r.location))
s.ec(a)
return s},
mP:function(a,b,c,d){return!0},
mQ:function(a,b,c,d){var s,r,q,p=d.a,o=p.a
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
lb:function(){var s=t.N
s=new W.fS(P.kI(C.r,s),P.cu(s),P.cu(s),P.cu(s),null)
s.eg(null,new H.cA(C.r,new W.jq()),["TEMPLATE"],null)
return s},
lp:function(a,b){var s=$.ao
if(s===C.e)return a
return s.dg(a,b)},
p:function p(){},
hf:function hf(){},
dx:function dx(){},
dy:function dy(){},
bz:function bz(){},
dC:function dC(){},
bb:function bb(){},
bc:function bc(){},
c9:function c9(){},
ak:function ak(){},
hr:function hr(){},
F:function F(){},
cd:function cd(){},
hs:function hs(){},
ae:function ae(){},
au:function au(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
cf:function cf(){},
hw:function hw(){},
cg:function cg(){},
ch:function ch(){},
dJ:function dJ(){},
hx:function hx(){},
fa:function fa(a,b){this.a=a
this.b=b},
A:function A(){},
hA:function hA(){},
i:function i(){},
b:function b(){},
aN:function aN(){},
dK:function dK(){},
dL:function dL(){},
dN:function dN(){},
aO:function aO(){},
hL:function hL(){},
bg:function bg(){},
bh:function bh(){},
bH:function bH(){},
bj:function bj(){},
hW:function hW(){},
ic:function ic(){},
e3:function e3(){},
id:function id(a){this.a=a},
e4:function e4(){},
ie:function ie(a){this.a=a},
aS:function aS(){},
e5:function e5(){},
aa:function aa(){},
a0:function a0(a){this.a=a},
r:function r(){},
cJ:function cJ(){},
aT:function aT(){},
ej:function ej(){},
en:function en(){},
is:function is(a){this.a=a},
ep:function ep(){},
aB:function aB(){},
et:function et(){},
aW:function aW(){},
eu:function eu(){},
aX:function aX(){},
ey:function ey(){},
iz:function iz(a){this.a=a},
an:function an(){},
cT:function cT(){},
eC:function eC(){},
eD:function eD(){},
bU:function bU(){},
aC:function aC(){},
ah:function ah(){},
eF:function eF(){},
eG:function eG(){},
iI:function iI(){},
aZ:function aZ(){},
br:function br(){},
eK:function eK(){},
iN:function iN(){},
aE:function aE(){},
iZ:function iZ(){},
f3:function f3(){},
b0:function b0(){},
bW:function bW(){},
bX:function bX(){},
fb:function fb(){},
d_:function d_(){},
fp:function fp(){},
d3:function d3(){},
fJ:function fJ(){},
fQ:function fQ(){},
f8:function f8(){},
fh:function fh(a){this.a=a},
jW:function jW(a,b){this.a=a
this.$ti=b},
fk:function fk(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jg:function jg(a){this.a=a},
kc:function kc(a){this.$ti=a},
bY:function bY(a){this.a=a},
H:function H(){},
cK:function cK(a){this.a=a},
ii:function ii(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(){},
jo:function jo(){},
jp:function jp(){},
fS:function fS(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jq:function jq(){},
fR:function fR(){},
cm:function cm(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
jn:function jn(a,b){this.a=a
this.b=b},
h0:function h0(a){this.a=a
this.b=0},
ju:function ju(a){this.a=a},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fm:function fm(){},
fn:function fn(){},
fr:function fr(){},
fs:function fs(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fD:function fD(){},
fE:function fE(){},
fG:function fG(){},
da:function da(){},
db:function db(){},
fH:function fH(){},
fI:function fI(){},
fN:function fN(){},
fT:function fT(){},
fU:function fU(){},
dd:function dd(){},
de:function de(){},
fV:function fV(){},
fW:function fW(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){}},K={
J:function(a,b){var s,r,q
if(a.length!==1||b.length!==1)throw H.c(P.d("The given low and high character strings for a Range must have one and only one characters."))
s=C.b.bo(a,0)
r=C.b.bo(b,0)
if(s>r){q=r
r=s
s=q}return new K.im(s,r)},
aJ:function aJ(){},
dQ:function dQ(){},
a7:function a7(a){this.a=a},
im:function im(a,b){this.a=a
this.b=b},
q:function q(a){this.a=a}},L={
iL:function(){var s=t.N
return new L.iK(P.N(s,t.aJ),P.N(s,t.aX),P.cu(s))},
ew:function ew(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b){this.b=a
this.c=b},
iK:function iK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iO:function iO(a,b){this.b=a
this.c=!1
this.a=b}},O={
jU:function(){return new O.bD([])},
bD:function bD(a){this.a=a
this.c=this.b=null},
cF:function cF(a){this.a=a
this.b=null},
e2:function(a,b){return new O.cD(new V.M(0,0,0),a,b,new A.ad(!1,!1,!1))},
e1:function e1(a){var _=this
_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=null},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(){},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(){},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(){},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){},
hZ:function hZ(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cC:function cC(){},
i_:function i_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cD:function cD(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
i1:function i1(a){this.b=a},
i2:function i2(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
i3:function i3(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
er:function er(a){var _=this
_.c=_.a=null
_.d=a
_.e=null},
iC:function iC(){}},E={
kG:function(){var s=O.jU(),r=new E.bE(s)
s.b2(r.ghi(),r.ghl())
r.sbG(0,null)
return r},
l3:function(){var s=window.navigator.vendor
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
l4:function(){var s=window.navigator.appVersion
s.toString
if(C.b.w(s,"Win"))return C.R
if(C.b.w(s,"Mac"))return C.t
if(C.b.w(s,"Linux"))return C.S
return C.T},
mz:function(a,b){var s
Date.now()
s=new E.io(a,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1),new O.cF([]),new O.cF([]),new O.cF([]),[null],P.N(t.N,t.k))
s.eb(a,b)
return s},
mG:function(a,b,c,d,e){var s,r
if(t.E.b(a))return E.kX(a,!0,!0,!0,!1)
s=W.jT()
r=s.style
r.width="100%"
r.height="100%"
J.lZ(a).n(0,s)
return E.kX(s,!0,!0,!0,!1)},
kX:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.ba.a(C.f.cD(a,"webgl2",P.mk(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.d("Failed to get the rendering context for WebGL."))
s=E.mz(l,a)
H.jx(l.getParameter(3379))
m=H.jx(l.getParameter(34076))
r=[]
q=$.hD
p=new X.f1(a,r,(q==null?$.hD=new E.fi(E.l3(),E.l4()):q).a===C.m?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.X(o,"contextmenu",p.geW(),!1))
r.push(W.X(a,"focus",p.gf1(),!1))
r.push(W.X(a,"blur",p.geQ(),!1))
r.push(W.X(o,"keyup",p.gf5(),!1))
r.push(W.X(o,"keydown",p.gf3(),!1))
r.push(W.X(a,"mousedown",p.gf9(),!1))
r.push(W.X(a,"mouseup",p.gfd(),!1))
r.push(W.X(a,n,p.gfb(),!1))
W.hB(a)
W.hB(a)
r.push(W.X(a,W.hB(a),p.gff(),!1))
r.push(W.X(o,n,p.geY(),!1))
r.push(W.X(o,"mouseup",p.gf_(),!1))
r.push(W.X(o,"pointerlockchange",p.gfh(),!1))
r.push(W.X(a,"touchstart",p.gfA(),!1))
r.push(W.X(a,"touchend",p.gfu(),!1))
r.push(W.X(a,"touchmove",p.gfw(),!1))
m=new E.eH(a,s,new T.iF(l,m),p,new P.Q(Date.now(),!1))
m.d1()
return m},
hl:function hl(){},
bE:function bE(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bB:function bB(a){this.b=a},
bN:function bN(a){this.b=a},
fi:function fi(a,b){this.a=a
this.b=b},
io:function io(a,b,c,d,e,f,g,h){var _=this
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
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
eH:function eH(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.Q=null
_.cx=!1
_.cy=e
_.db=0},
iH:function iH(a){this.a=a}},Z={
kb:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.dm(c)),35044)
a.bindBuffer(b,null)
return new Z.f4(b,s)},
ai:function(a){return new Z.b_(a)},
f4:function f4(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
f5:function f5(a){this.a=a},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
b_:function b_(a){this.a=a}},D={
D:function(){return new D.bF()},
hn:function hn(){},
bF:function bF(){var _=this
_.c=_.b=_.a=null
_.d=0},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
O:function O(){},
av:function av(){},
aw:function aw(){},
z:function z(a,b,c){this.c=a
this.d=b
this.e=c},
ce:function ce(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
ct:function ct(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={c8:function c8(a,b){this.a=a
this.b=b},dY:function dY(a,b){this.a=a
this.b=b},hR:function hR(a,b){this.c=a
this.d=b},cx:function cx(a,b,c){this.x=a
this.c=b
this.d=c},hX:function hX(a,b,c,d){var _=this
_.a=a
_.f=_.e=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},bK:function bK(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},ig:function ig(a,b,c,d,e){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},bL:function bL(a,b,c){this.x=a
this.c=b
this.d=c},ek:function ek(){},cU:function cU(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},iM:function iM(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},f1:function f1(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.f=!1
_.y=null
_.z=b
_.Q=c},
jX:function(a){var s=new V.aL(0,0,0,1),r=$.kS
if(r==null){r=V.kR(0,0,1,1)
$.kS=r}return new X.dO(s,r)},
kN:function(a){var s,r,q=new X.eg(1.0471975511965976,0.1)
if(null!=a){s=q.b
q.b=a
if(a!=null)a.gq().n(0,q.gej())
q.ao(new D.z("mover",s,q.b))}r=q.c
$.C().toString
if(!(Math.abs(r-1.0471975511965976)<1e-9)){q.c=1.0471975511965976
q.ao(new D.z("fov",r,1.0471975511965976))}r=q.d
$.C().toString
if(!(Math.abs(r-0.1)<1e-9)){q.d=0.1
q.ao(new D.z("near",r,0.1))}r=q.e
$.C().toString
if(!(Math.abs(r-2000)<1e-9)){q.e=2000
q.ao(new D.z("far",r,2000))}return q},
dO:function dO(a,b){var _=this
_.a=a
_.b=!0
_.r=b
_.x=null},
hO:function hO(){this.b=null},
eg:function eg(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iB:function iB(){},
ol:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="modifiers",a9=V.mB("Test 016"),b0=W.jT()
b0.className="pageLargeCanvas"
b0.id=a6
a9.a.appendChild(b0).toString
a9.d9(["A test of the Material Lighting shader with cube texturing, ","bump mapping, and a color directional light."])
a9.d9(["\xab[Back to Tests|../]"])
s=document.getElementById(a6)
if(s==null)H.f(P.d("Failed to find an element with the identifier, testCanvas."))
r=E.mG(s,!0,!0,!0,!1)
q=X.jX(a7)
q.sdl(0,!1)
p=E.kG()
o=F.k5()
F.dl(o,a7,a7,1,1,1,0,0,1)
F.dl(o,a7,a7,1,1,0,1,0,3)
F.dl(o,a7,a7,1,1,0,0,1,2)
F.dl(o,a7,a7,1,1,-1,0,0,0)
F.dl(o,a7,a7,1,1,0,-1,0,0)
F.dl(o,a7,a7,1,1,0,0,-1,3)
o.aC()
p.sbG(0,o)
n=r.f
m=n.dN("../resources/maskonaive",".jpg")
l=n.cp("../resources/diceColor")
k=O.jU()
j=new O.e1(k)
k.b2(j.geM(),j.geO())
k=j.gdM()
k.gq().n(0,j.gd_())
i=j.gaz()
k.gdL().n(0,i)
k=j.gdM()
h=V.ka()
g=U.kC(V.kL(V.kO(),h,new V.B(1,-1,-3)))
f=new V.M(1,1,1)
e=new D.ce(new V.M(1,1,1),V.mK(),V.ka(),V.mJ())
d=e.a
e.a=g
g.gq().n(0,e.gee())
e.aw(new D.z("mover",d,e.a))
if(!e.b.t(0,f)){d=e.b
e.b=f
e.aw(new D.z("color",d,f))}k.n(0,e)
k=j.gc4()
k.saD(0,new V.M(0.2,0.2,0.2))
k=j.gcb()
k.saD(0,new V.M(0.7,0.7,0.7))
k=j.gbl()
k.saD(0,new V.M(0.7,0.7,0.7))
j.gc4().saZ(l)
j.gcb().saZ(l)
j.gbl().saZ(n.cp("../resources/diceSpecular"))
k=j.gbl()
k.c0(new A.ad(!0,!1,k.c.c))
k.d3(10)
j.gdj().saZ(n.cp("../resources/diceBumpMap"))
n=j.ch
if(n!==m){if(n!=null)n.gq().N(0,i)
d=j.ch
j.ch=m
m.gq().n(0,i)
j.O(new D.z("environment",d,j.ch))}n=j.gdU()
n.saD(0,new V.M(0.3,0.3,0.3))
c=new U.bG(V.a9(),[])
c.b2(c.geI(),c.gfl())
n=r.x
k=U.hq()
i=U.hq()
g=$.bu
if(g==null)g=$.bu=new V.W(0,0)
g=new U.cX(k,i,new X.Y(!1,!1,!1),g,V.a9())
k.scC(0,!0)
k.scq(6.283185307179586)
k.scs(0)
k.sa8(0,0)
k.scr(100)
k.sV(0)
k.sca(0.5)
f=g.gaQ()
k.gq().n(0,f)
i.scC(0,!0)
i.scq(6.283185307179586)
i.scs(0)
i.sa8(0,0)
i.scr(100)
i.sV(0)
i.sca(0.5)
i.gq().n(0,f)
k=new X.Y(!1,!1,!1)
if(!g.d.t(0,k)){d=g.d
g.d=k
g.M(new D.z(a8,d,k))}g.bc(n)
c.n(0,g)
U.hq()
if($.bu==null)$.bu=new V.W(0,0)
V.a9()
k=U.hq()
i=$.bu
if(i==null)i=$.bu=new V.W(0,0)
i=new U.cW(k,new X.Y(!1,!1,!1),i,V.a9())
k.scC(0,!0)
k.scq(6.283185307179586)
k.scs(0)
k.sa8(0,0)
k.scr(100)
k.sV(0)
k.sca(0.2)
k.gq().n(0,i.gaQ())
k=new X.Y(!0,!1,!1)
if(!i.c.t(0,k)){d=i.c
i.c=k
i.M(new D.z(a8,d,k))}i.bc(n)
c.n(0,i)
k=new X.Y(!1,!1,!1)
i=new U.cY(k,V.a9())
g=new X.Y(!1,!1,!1)
if(!k.t(0,g)){i.b=g
i.M(new D.z(a8,k,g))}i.bc(n)
c.n(0,i)
c.n(0,U.kC(V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
b=X.kN(c)
n=E.kG()
a=new M.cc(n)
o=F.k5()
k=o.gZ()
i=new V.B(-1,-1,1).J()
a0=k.bs(new V.aU(1,2,4,6),V.ho(255,0,0),new V.V(-1,-1,0),new V.P(0,1),i,a7)
i=o.gZ()
k=new V.B(1,-1,1).J()
a1=i.bs(new V.aU(0,3,4,6),V.ho(0,0,255),new V.V(1,-1,0),new V.P(1,1),k,a7)
k=o.gZ()
i=new V.B(1,1,1).J()
a2=k.bs(new V.aU(0,2,5,6),V.ho(0,128,0),new V.V(1,1,0),new V.P(1,0),i,a7)
i=o.gZ()
k=$.a_
if(k==null)k=$.a_=new V.P(0,0)
g=new V.B(-1,1,1).J()
a3=i.bs(new V.aU(0,2,4,7),V.ho(255,255,0),new V.V(-1,1,0),k,g,a7)
o.gX().fW([a0,a1,a2,a3])
o.aC()
n.sbG(0,o)
a.sbd(a7)
a.sbi(0,a7)
a.sbj(a7)
n=new O.er(new V.M(1,1,1))
d=n.c
n.c=m
m.gq().n(0,n.gaz())
n.O(new D.z("boxTexture",d,n.c))
a.sbj(n)
a.sbi(0,q)
a.sbd(b)
n=O.jU()
a4=new M.ck(n)
n.b2(a4.geS(),a4.geU())
a5=X.jX(a7)
a4.sbd(a7)
a4.sbi(0,a5)
a4.sbj(a7)
a4.sbd(b)
a4.sbj(j)
a4.sbi(0,q)
n.n(0,p)
t.w.a(a4.c).sdl(0,!1)
n=new M.ca([])
n.b2(n.gfp(),n.gfs())
n.a0(0,[a,a4])
k=r.d
if(k!==n){if(k!=null)k.gq().N(0,r.gcL())
r.d=n
n.gq().n(0,r.gcL())
r.cM()}n=r.Q
if(n==null)n=r.Q=D.D()
k=n.b
n=k==null?n.b=[]:k
n.push(new X.jO(a9,j))
V.oo(r)},
jO:function jO(a,b){this.a=a
this.b=b}},V={
ho:function(a,b,c){var s=a/255,r=b/255,q=c/255
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aL(s,r,q,1)},
kr:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
ou:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.e_(a-b,s)
return(a<0?a+s:a)+b},
x:function(a,b,c){$.C().toString
return C.b.aj(C.d.cz(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
c3:function(a,b,c){var s,r,q,p,o,n,m,l=[]
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.m)(a),++p){o=a[p]
$.C().toString
n=C.b.aj(C.d.cz(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.e(l,m)
s=C.b.aj(l[m],q)
r=l.length
if(m>=r)return H.e(l,m)
l[m]=s}return l},
kt:function(a){return C.d.hD(Math.pow(2,C.d.cl(Math.log(a)/Math.log(2))))},
a9:function(){var s=$.kM
return s==null?$.kM=V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kL:function(a,b,c){var s=c.J(),r=b.be(s).J(),q=s.be(r),p=new V.B(a.a,a.b,a.c)
return V.ay(r.a,q.a,s.a,r.b1(0).a1(p),r.b,q.b,s.b,q.b1(0).a1(p),r.c,q.c,s.c,s.b1(0).a1(p),0,0,0,1)},
kO:function(){var s=$.aA
return s==null?$.aA=new V.V(0,0,0):s},
kR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.em(a,b,c,d)},
f2:function(){var s=$.l2
return s==null?$.l2=new V.B(0,0,0):s},
mJ:function(){var s=$.j1
return s==null?$.j1=new V.B(-1,0,0):s},
ka:function(){var s=$.j2
return s==null?$.j2=new V.B(0,1,0):s},
mK:function(){var s=$.j3
return s==null?$.j3=new V.B(0,0,1):s},
mI:function(a,b,c){return new V.B(a,b,c)},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(){},
cE:function cE(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bJ:function bJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
P:function P(a,b){this.a=a
this.b=b},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
em:function em(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
oo:function(a){P.mH(C.J,new V.jQ(a))},
mB:function(a){var s,r,q,p,o,n=document,m=n.body
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
W.X(n,"scroll",new V.ix(s),!1)
return new V.iv(o)},
as:function as(){},
jQ:function jQ(a){this.a=a},
dH:function dH(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dP:function dP(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
dR:function dR(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
ei:function ei(a,b){var _=this
_.a=a
_.c=_.b=null
_.d=b},
iv:function iv(a){this.a=a
this.b=null},
ix:function ix(a){this.a=a},
iw:function iw(a){this.a=a},
iy:function iy(a){this.a=a}},U={
hq:function(){return new U.hp()},
kC:function(a){var s=V.a9(),r=new U.cb(s)
if(!s.t(0,a))r.a=a
return r},
hp:function hp(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
cb:function cb(a){this.a=a
this.b=null},
bG:function bG(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
Z:function Z(){},
cW:function cW(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.y=_.x=!1
_.z=0
_.Q=c
_.ch=0
_.cx=d
_.cy=null},
cX:function cX(a,b,c,d,e){var _=this
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
cY:function cY(a,b){var _=this
_.a=null
_.b=a
_.e=_.d=0
_.f=b
_.r=null}},M={ca:function ca(a){var _=this
_.f=!1
_.r=null
_.a=a
_.c=_.b=null},cc:function cc(a){var _=this
_.d=_.c=_.b=null
_.e=a
_.r=null},ck:function ck(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mn:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gan(a5)+a6.gan(a6)+a7.gan(a7)+a8.gan(a8)+a9.gan(a9)+b0.gan(b0)+b1.gan(b1)+b2.gan(b2)+b3.gan(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.m)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.m)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.m)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.m)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.ap()
if(h){s=$.b7()
b=new Z.b_(b.a|s.a)}if(g)b=new Z.b_(b.a|$.b6().a)
if(f)b=new Z.b_(b.a|$.b8().a)
if(e)b=new Z.b_(b.a|$.b5().a)
return new A.i0(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,!1,f,e,!1,a1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jC:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jD:function(a,b,c){var s,r="Txt, txtCube).rgb;\n"
A.jC(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hc(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.c){s+="   "+c+"Color = "+c+"Clr*textureCube("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.c){s+="   "+c+"Color = textureCube("+c+r
a.a=s}a.a=s+"}\n"},
nx:function(a,b){var s,r=a.a,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jC(b,r,"emission")
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
nt:function(a,b){var s,r=a.b
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jD(b,r,"ambient")
b.a+="\n"},
nv:function(a,b){var s,r=a.c
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jD(b,r,"diffuse")
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
ny:function(a,b){var s,r=a.d
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jD(b,r,"invDiffuse")
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
nE:function(a,b){var s,r=a.e
if(!r.a)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jD(b,r,"specular")
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
nA:function(a,b){var s,r,q
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
nC:function(a,b){var s,r=a.r,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jC(b,r,"reflect")
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
nD:function(a,b){var s,r=a.x,q=r.a
if(!q)s=r.c
else s=!0
if(!s)return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jC(b,r,"refract")
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
nu:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hc(r)
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
nw:function(a,b,c){var s,r,q,p,o,n,m,l,k=b.b
if(k<=0)return
s=b.a
r="dirLight"+s
q=A.hc(r)
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
nB:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hc(r)
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
nF:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hc(r)
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
if(m){s=$.hD
if(s==null)s=$.hD=new E.fi(E.l3(),E.l4())
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
nz:function(a,b){var s,r
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
nG:function(a){var s,r,q,p,o,n,m,l,k="   lightAccum += all",j=new P.aY(""),i=""+"precision mediump float;\n"
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
A.nx(a,j)
A.nt(a,j)
A.nv(a,j)
A.ny(a,j)
A.nE(a,j)
i=a.db
if(i){q=j.a+="// === Environmental ===\n"
q+="\n"
j.a=q
q+="uniform samplerCube envSampler;\n"
j.a=q
j.a=q+"\n"
A.nC(a,j)
A.nD(a,j)}A.nA(a,j)
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
if(q){for(p=a.z,o=p.length,m=0;m<p.length;p.length===o||(0,H.m)(p),++m)A.nu(a,p[m],j)
for(p=a.Q,o=p.length,m=0;m<p.length;p.length===o||(0,H.m)(p),++m)A.nw(a,p[m],j)
for(p=a.ch,o=p.length,m=0;m<p.length;p.length===o||(0,H.m)(p),++m)A.nB(a,p[m],j)
for(p=a.cx,o=p.length,m=0;m<p.length;p.length===o||(0,H.m)(p),++m)A.nF(a,p[m],j)
A.nz(a,j)}p=j.a+="// === Main ===\n"
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
for(i=a.z,s=i.length,m=0;m<i.length;i.length===s||(0,H.m)(i),++m){q="barLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.b.av(q,1))+"Values(norm);\n"}for(i=a.Q,s=i.length,m=0;m<i.length;i.length===s||(0,H.m)(i),++m){q="dirLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.b.av(q,1))+"Values(norm);\n"}for(i=a.ch,s=i.length,m=0;m<i.length;i.length===s||(0,H.m)(i),++m){q="pointLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.b.av(q,1))+"Values(norm);\n"}for(i=a.cx,s=i.length,m=0;m<i.length;i.length===s||(0,H.m)(i),++m){q="spotLight"+i[m].a
if(0>=q.length)return H.e(q,0)
j.a+=k+(q[0].toUpperCase()+C.b.av(q,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}i=a.a
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
nH:function(a,b){var s,r,q
if(!a.ry)return
s=b.a+="struct BendingValue\n"
s+="{\n"
b.a=s
s+="   mat4 mat;\n"
b.a=s
s+="};\n"
b.a=s
b.a=s+"uniform int bendMatCount;\n"
s=b.a+="uniform BendingValue bendValues["+a.aX+"];\n"
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
nJ:function(a,b){var s
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
nI:function(a,b){var s
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
nL:function(a,b){var s,r
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
nM:function(a,b){var s,r
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
nK:function(a,b){var s
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
nN:function(a,b){var s
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
hc:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.b.av(a,1)},
k9:function(a,b,c,d,e){var s=new A.iS([],a,c,e)
s.f=d
s.e=P.hU(d,0,!1)
return s},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a){this.a=a},
ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.dG=_.hU=_.dF=_.dE=_.hT=_.dD=_.dC=_.dB=_.hS=_.dA=_.dz=_.dw=_.hR=_.dv=_.du=_.hQ=_.dt=_.bv=_.bu=_.aX=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.cc=c
_.cd=d
_.ce=e
_.cf=f
_.cg=g
_.ci=h
_.cj=i
_.ck=j
_.hX=_.hW=_.hV=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
ba:function ba(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
bo:function bo(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
i0:function i0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aX=b5
_.bu=b6
_.bv=b7},
eQ:function eQ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eR:function eR(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eU:function eU(a,b,c,d,e,f,g,h,i,j){var _=this
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
eX:function eX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bR:function bR(){},
cR:function cR(a,b){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.a=a
_.b=b
_.d=_.c=""
_.r=_.f=_.e=null},
iR:function iR(){},
iX:function iX(a){this.a=a},
cV:function cV(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
eN:function eN(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
eO:function eO(a,b,c){this.a=a
this.c=b
this.d=c},
eP:function eP(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
eS:function eS(a,b,c){this.a=a
this.c=b
this.d=c},
eT:function eT(a,b,c){this.a=a
this.c=b
this.d=c},
eV:function eV(a,b,c){this.a=a
this.c=b
this.d=c},
eW:function eW(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jA:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dl:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.B(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.B(s+a4,r+a2,q+a3)
o=new V.B(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.B(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jA(h)
j=F.jA(g)
a.hh(F.oq(a0,a1,new F.jw(i,F.jA(f),F.jA(e),j,k,c),b))},
oq:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(a<1)throw H.c(P.d("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.d("Must have 1 or more divisions of the height for a surface."))
s=F.k5()
r=[]
for(q=0;q<=b;++q){p=q/b
o=s.a
if(o==null)o=s.a=new F.u(s,[])
if(p<0)n=0
else n=p>1?1:p
m=F.j4(e,e,new V.aL(n,0,0,1),e,e,new V.P(p,1),e,e,0)
o.n(0,m)
c.$3(m,p,0)
r.push(m.c9(d))}for(q=1;q<=a;++q){l=q/a
for(o=l>1,n=l<0,k=1-l,j=0;j<=b;++j){p=j/b
i=s.a
if(i==null)i=s.a=new F.u(s,[])
if(p<0)h=0
else h=p>1?1:p
if(n)g=0
else g=o?1:l
if(n)f=0
else f=o?1:l
m=F.j4(e,e,new V.aL(h,g,f,1),e,e,new V.P(p,k),e,e,0)
i.n(0,m)
c.$3(m,p,l)
r.push(m.c9(d))}}s.gX().fX(a+1,b+1,r)
return s},
k5:function(){return new F.it()},
j4:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.cZ()
h=$.lP()
s=$.ap()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.b7().a)!==0)q.r=e
if((r&$.b6().a)!==0)q.x=b
if((r&$.by().a)!==0)q.y=f
if((r&$.b8().a)!==0)q.z=g
if((r&$.lQ().a)!==0)q.Q=c
if((r&$.c5().a)!==0)q.ch=i
if((r&$.b5().a)!==0)q.cx=a
return q},
jw:function jw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
al:function al(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(){this.b=this.a=null},
ik:function ik(){this.a=null},
it:function it(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iu:function iu(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cP:function cP(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b){this.a=a
this.b=b},
bS:function bS(a,b){this.a=a
this.b=b},
cZ:function cZ(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
jb:function jb(a){this.a=a},
ja:function ja(a){this.a=a},
u:function u(a,b){this.a=a
this.b=!1
this.c=b},
j5:function j5(a,b,c){this.b=a
this.c=b
this.d=c},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(a,b){this.b=a
this.c=b},
j9:function j9(a){this.b=a}},T={iD:function iD(){},iE:function iE(a){var _=this
_.a=0
_.b=a
_.c=!1
_.d=0
_.e=null},iF:function iF(a,b){var _=this
_.a=a
_.c=b
_.e=_.d=0},iG:function iG(a,b,c,d,e,f,g){var _=this
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
H.k1.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cM(a)},
i:function(a){return"Instance of '"+H.cN(a)+"'"}}
J.dU.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ia2:1}
J.cr.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.bi.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.eh.prototype={}
J.bt.prototype={}
J.ax.prototype={
i:function(a){var s=a[$.lD()]
if(s==null)return this.e6(a)
return"JavaScript function for "+J.dw(s)},
$icn:1}
J.am.prototype={
N:function(a,b){var s
if(!!a.fixed$length)H.f(P.y("remove"))
for(s=0;s<a.length;++s)if(J.a5(a[s],b)){a.splice(s,1)
return!0}return!1},
a0:function(a,b){if(!!a.fixed$length)H.f(P.y("addAll"))
this.em(a,b)
return},
em:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.at(a))
for(s=0;s<r;++s)a.push(b[s])},
F:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.at(a))}},
j:function(a,b){var s,r,q=a.length,p=P.hU(q,"",!1)
for(s=0;s<a.length;++s){r=H.t(a[s])
if(s>=q)return H.e(p,s)
p[s]=r}return p.join(b)},
hf:function(a){return this.j(a,"")},
hc:function(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw H.c(P.at(a))}throw H.c(H.jZ())},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
gbx:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.jZ())},
dc:function(a,b){var s,r=a.length
for(s=0;s<r;++s){if(b.$1(a[s]))return!0
if(a.length!==r)throw H.c(P.at(a))}return!1},
b4:function(a,b){if(!!a.immutable$list)H.f(P.y("sort"))
H.mE(a,b==null?J.nk():b)},
e2:function(a){return this.b4(a,null)},
w:function(a,b){var s
for(s=0;s<a.length;++s)if(J.a5(a[s],b))return!0
return!1},
i:function(a){return P.jY(a,"[","]")},
gL:function(a){return new J.a6(a,a.length)},
gG:function(a){return H.cM(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.f(P.y("set length"))
if(b>a.length)H.li(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.c2(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.f(P.y("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c2(a,b))
a[b]=c},
$ij:1,
$ih:1,
$il:1}
J.dW.prototype={}
J.a6.prototype={
gC:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.m(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bI.prototype={
af:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbw(b)
if(this.gbw(a)===s)return 0
if(this.gbw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbw:function(a){return a===0?1/a<0:a<0},
hD:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.y(""+a+".toInt()"))},
cl:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.y(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.y(""+a+".round()"))},
cz:function(a,b){var s
if(b>20)throw H.c(P.aV(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbw(a))return"-"+s
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
e_:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
e8:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d4(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.d4(a,b)},
d4:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.y("Result of truncating division is "+H.t(s)+": "+H.t(a)+" ~/ "+b))},
bq:function(a,b){var s
if(a>0)s=this.fN(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fN:function(a,b){return b>31?0:a>>>b},
$ia3:1,
$ia4:1}
J.cq.prototype={$in:1}
J.dV.prototype={}
J.aP.prototype={
c8:function(a,b){if(b<0)throw H.c(H.c2(a,b))
if(b>=a.length)H.f(H.c2(a,b))
return a.charCodeAt(b)},
bo:function(a,b){if(b>=a.length)throw H.c(H.c2(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
bH:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
bm:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.el(b,null))
if(b>c)throw H.c(P.el(b,null))
if(c>a.length)throw H.c(P.el(c,null))
return a.substring(b,c)},
av:function(a,b){return this.bm(a,b,null)},
hG:function(a){return a.toLowerCase()},
P:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
aj:function(a,b){var s=b-a.length
if(s<=0)return a
return this.P(" ",s)+a},
h1:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.aV(c,0,s,null,null))
return H.lz(a,b,c)},
w:function(a,b){return this.h1(a,b,0)},
af:function(a,b){var s
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
gl:function(a){return a.length},
$iw:1}
H.dZ.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.o.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.c8(this.a,b)}}
H.j.prototype={}
H.cw.prototype={
gL:function(a){return new H.aR(this,this.gl(this))},
bF:function(a,b){return this.e5(0,b)}}
H.aR.prototype={
gC:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a,p=J.hb(q),o=p.gl(q)
if(r.b!==o)throw H.c(P.at(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.E(q,s);++r.c
return!0}}
H.bl.prototype={
gL:function(a){return new H.cz(J.aq(this.a),this.b)},
gl:function(a){return J.b9(this.a)},
E:function(a,b){return this.b.$1(J.hd(this.a,b))}}
H.ci.prototype={$ij:1}
H.cz.prototype={
u:function(){var s=this,r=s.b
if(r.u()){s.a=s.c.$1(r.gC(r))
return!0}s.a=null
return!1},
gC:function(a){return H.U(this).Q[1].a(this.a)}}
H.cA.prototype={
gl:function(a){return J.b9(this.a)},
E:function(a,b){return this.b.$1(J.hd(this.a,b))}}
H.bv.prototype={
gL:function(a){return new H.f6(J.aq(this.a),this.b)}}
H.f6.prototype={
u:function(){var s,r
for(s=this.a,r=this.b;s.u();)if(r.$1(s.gC(s)))return!0
return!1},
gC:function(a){var s=this.a
return s.gC(s)}}
H.cl.prototype={}
H.f_.prototype={
m:function(a,b,c){throw H.c(P.y("Cannot modify an unmodifiable list"))}}
H.bV.prototype={}
H.iP.prototype={
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
H.cL.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.dX.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.eZ.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.ij.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fM.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bd.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.lB(r==null?"unknown":r)+"'"},
$icn:1,
ghJ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eE.prototype={}
H.ex.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.lB(s)+"'"}}
H.bA.prototype={
t:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.bA))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gG:function(a){var s,r=this.c
if(r==null)s=H.cM(this.a)
else s=typeof r!=="object"?J.he(r):H.cM(r)
return(s^H.cM(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.t(this.d)+"' of "+("Instance of '"+H.cN(s)+"'")}}
H.eo.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.R.prototype={
gl:function(a){return this.a},
ga6:function(a){return new H.aQ(this)},
ghI:function(a){return H.mm(new H.aQ(this),new H.hQ(this))},
h2:function(a,b){var s=this.b
if(s==null)return!1
return this.eu(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bp(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bp(p,b)
q=r==null?n:r.b
return q}else return o.he(b)},
he:function(a){var s,r,q=this.d
if(q==null)return null
s=this.cV(q,J.he(a)&0x3ffffff)
r=this.dI(s,a)
if(r<0)return null
return s[r].b},
m:function(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.cO(s==null?m.b=m.bY():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cO(r==null?m.c=m.bY():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bY()
p=J.he(b)&0x3ffffff
o=m.cV(q,p)
if(o==null)m.c1(q,p,[m.bZ(b,c)])
else{n=m.dI(o,b)
if(n>=0)o[n].b=c
else o.push(m.bZ(b,c))}}},
F:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.at(s))
r=r.c}},
cO:function(a,b,c){var s=this.bp(a,b)
if(s==null)this.c1(a,b,this.bZ(b,c))
else s.b=c},
eF:function(){this.r=this.r+1&67108863},
bZ:function(a,b){var s,r=this,q=new H.hT(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.eF()
return q},
dI:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a5(a[r].a,b))return r
return-1},
i:function(a){return P.kJ(this)},
bp:function(a,b){return a[b]},
cV:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
ey:function(a,b){delete a[b]},
eu:function(a,b){return this.bp(a,b)!=null},
bY:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c1(r,s,r)
this.ey(r,s)
return r}}
H.hQ.prototype={
$1:function(a){var s=this.a
return H.U(s).Q[1].a(s.h(0,a))},
$S:function(){return H.U(this.a).ap("2(1)")}}
H.hT.prototype={}
H.aQ.prototype={
gl:function(a){return this.a.a},
gL:function(a){var s=this.a,r=new H.e0(s,s.r)
r.c=s.e
return r}}
H.e0.prototype={
gC:function(a){return H.U(this).c.a(this.d)},
u:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.at(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jK.prototype={
$1:function(a){return this.a(a)},
$S:38}
H.jL.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.jM.prototype={
$1:function(a){return this.a(a)},
$S:28}
H.hP.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.cH.prototype={}
H.bM.prototype={
gl:function(a){return a.length},
$iv:1}
H.bm.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$il:1}
H.cG.prototype={
m:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$ij:1,
$ih:1,
$il:1}
H.e6.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.e7.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.e8.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.e9.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.ea.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cI.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.eb.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.d4.prototype={}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
H.ag.prototype={
ap:function(a){return H.h_(v.typeUniverse,this,a)},
cP:function(a){return H.n8(v.typeUniverse,this,a)}}
H.fo.prototype={}
H.fj.prototype={
i:function(a){return this.a}}
H.dg.prototype={}
P.jd.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:33}
P.jc.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:39}
P.je.prototype={
$0:function(){this.a.$0()},
$S:10}
P.jf.prototype={
$0:function(){this.a.$0()},
$S:10}
P.df.prototype={
eh:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c1(new P.js(this,b),0),a)
else throw H.c(P.y("`setTimeout()` not found."))},
ei:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c1(new P.jr(this,a,Date.now(),b),0),a)
else throw H.c(P.y("Periodic timer."))},
$iiJ:1}
P.js.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:2}
P.jr.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.e8(s,o)}q.c=p
r.d.$1(q)},
$S:10}
P.bZ.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.t(this.a)+")"}}
P.bw.prototype={
gC:function(a){var s=this.c
if(s==null)return this.b
return s.gC(s)},
u:function(){var s,r,q,p,o,n=this
for(;!0;){s=n.c
if(s!=null)if(s.u())return!0
else n.c=null
r=function(a,b,c){var m,l=b
while(true)try{return a(l,m)}catch(k){m=k
l=c}}(n.a,0,1)
if(r instanceof P.bZ){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.e(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aq(s)
if(o instanceof P.bw){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dc.prototype={
gL:function(a){return new P.bw(this.a())}}
P.f7.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.jv.prototype={}
P.jE.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:2}
P.jk.prototype={
hz:function(a){var s,r,q,p=null
try{if(C.e===$.ao){a.$0()
return}P.nP(p,p,this,a)}catch(q){s=H.aI(q)
r=H.kp(q)
P.lo(p,p,this,s,r)}},
hA:function(a,b){var s,r,q,p=null
try{if(C.e===$.ao){a.$1(b)
return}P.nQ(p,p,this,a,b)}catch(q){s=H.aI(q)
r=H.kp(q)
P.lo(p,p,this,s,r)}},
hB:function(a,b){return this.hA(a,b,t.z)},
h_:function(a){return new P.jl(this,a)},
dg:function(a,b){return new P.jm(this,a,b)}}
P.jl.prototype={
$0:function(){return this.a.hz(this.b)},
$S:2}
P.jm.prototype={
$1:function(a){return this.a.hB(this.b,a)},
$S:function(){return this.c.ap("~(0)")}}
P.d0.prototype={
gL:function(a){var s=new P.d1(this,this.r)
s.c=this.e
return s},
gl:function(a){return this.a},
w:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.es(b)
return r}},
es:function(a){var s=this.d
if(s==null)return!1
return this.bP(s[this.bM(a)],a)>=0},
n:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cQ(s==null?q.b=P.kd():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cQ(r==null?q.c=P.kd():r,b)}else return q.el(0,b)},
el:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.kd()
s=q.bM(b)
r=p[s]
if(r==null)p[s]=[q.bL(b)]
else{if(q.bP(r,b)>=0)return!1
r.push(q.bL(b))}return!0},
N:function(a,b){if((b&1073741823)===b)return this.fD(this.c,b)
else return this.fC(0,b)},
fC:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bM(b)
r=n[s]
q=o.bP(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d6(p)
return!0},
cQ:function(a,b){if(a[b]!=null)return!1
a[b]=this.bL(b)
return!0},
fD:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d6(s)
delete a[b]
return!0},
cR:function(){this.r=this.r+1&1073741823},
bL:function(a){var s,r=this,q=new P.jj(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cR()
return q},
d6:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cR()},
bM:function(a){return J.he(a)&1073741823},
bP:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a5(a[r].a,b))return r
return-1}}
P.jj.prototype={}
P.d1.prototype={
gC:function(a){return H.U(this).c.a(this.d)},
u:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.at(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cp.prototype={}
P.cv.prototype={$ij:1,$ih:1,$il:1}
P.E.prototype={
gL:function(a){return new H.aR(a,this.gl(a))},
E:function(a,b){return this.h(a,b)},
F:function(a,b){var s,r=this.gl(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gl(a))throw H.c(P.at(a))}},
gdJ:function(a){return this.gl(a)===0},
hF:function(a,b){var s,r,q,p,o=this
if(o.gdJ(a)){s=J.k_(0)
return s}r=o.h(a,0)
q=P.hU(o.gl(a),r,!0)
for(p=1;p<o.gl(a);++p){s=o.h(a,p)
if(p>=q.length)return H.e(q,p)
q[p]=s}return q},
hE:function(a){return this.hF(a,!0)},
i:function(a){return P.jY(a,"[","]")}}
P.cy.prototype={}
P.hY.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.t(a)
r.a=s+": "
r.a+=H.t(b)},
$S:26}
P.T.prototype={
F:function(a,b){var s,r,q
for(s=J.aq(this.ga6(a)),r=H.c4(a).ap("T.V");s.u();){q=s.gC(s)
b.$2(q,r.a(this.h(a,q)))}},
gl:function(a){return J.b9(this.ga6(a))},
i:function(a){return P.kJ(a)},
$iS:1}
P.eq.prototype={
a0:function(a,b){var s
for(s=J.aq(b);s.u();)this.n(0,s.gC(s))},
i:function(a){return P.jY(this,"{","}")},
E:function(a,b){var s,r,q,p,o="index"
H.o1(b,o,t.S)
P.kQ(b,o)
for(s=P.mT(this,this.r),r=H.U(s).c,q=0;s.u();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.I(b,this,o,null,q))}}
P.d8.prototype={$ij:1,$ih:1}
P.d2.prototype={}
P.dk.prototype={}
P.dD.prototype={}
P.dF.prototype={}
P.hC.prototype={}
P.hN.prototype={
i:function(a){return this.a}}
P.hM.prototype={
ev:function(a,b,c){var s,r,q,p,o,n,m,l=null
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
default:m=l}if(m!=null){if(n==null)n=new P.aY("")
if(o>b)n.a+=C.b.bm(a,b,o)
n.a+=m
b=o+1}}if(n==null)return l
if(c>b)n.a+=C.b.bm(a,b,c)
s=n.a
return s.charCodeAt(0)==0?s:s}}
P.j_.prototype={}
P.j0.prototype={
h3:function(a){var s,r,q,p=P.k4(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jt(r)
if(q.eA(a,0,p)!==p){C.b.c8(a,p-1)
q.c3()}return new Uint8Array(r.subarray(0,H.nc(0,q.b,s)))}}
P.jt.prototype={
c3:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.e(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.e(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.e(r,q)
r[q]=189},
fU:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c3()
return!1}},
eA:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.b.c8(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.b.bo(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fU(p,C.b.bo(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c3()}else if(p<=2047){o=l.b
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
t:function(a,b){if(b==null)return!1
return b instanceof P.Q&&this.a===b.a&&!0},
af:function(a,b){return C.c.af(this.a,b.a)},
gG:function(a){var s=this.a
return(s^C.c.bq(s,30))&1073741823},
i:function(a){var s=this,r=P.ma(H.mv(s)),q=P.dI(H.mt(s)),p=P.dI(H.mp(s)),o=P.dI(H.mq(s)),n=P.dI(H.ms(s)),m=P.dI(H.mu(s)),l=P.mb(H.mr(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bf.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bf&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
af:function(a,b){return C.c.af(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hz(),o=this.a
if(o<0)return"-"+new P.bf(0-o).i(0)
s=p.$1(C.c.a_(o,6e7)%60)
r=p.$1(C.c.a_(o,1e6)%60)
q=new P.hy().$1(o%1e6)
return""+C.c.a_(o,36e8)+":"+s+":"+r+"."+q}}
P.hy.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.hz.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.G.prototype={}
P.dz.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hF(s)
return"Assertion failed"}}
P.eM.prototype={}
P.ec.prototype={
i:function(a){return"Throw of null."}}
P.aj.prototype={
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbO()+o+m
if(!q.a)return l
s=q.gbN()
r=P.hF(q.b)
return l+s+": "+r}}
P.cO.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.t(q):""
else if(q==null)s=": Not greater than or equal to "+H.t(r)
else if(q>r)s=": Not in inclusive range "+H.t(r)+".."+H.t(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.t(r)
return s}}
P.dS.prototype={
gbO:function(){return"RangeError"},
gbN:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl:function(a){return this.f}}
P.f0.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.eY.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.bT.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dE.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hF(s)+"."}}
P.ef.prototype={
i:function(a){return"Out of Memory"},
$iG:1}
P.cS.prototype={
i:function(a){return"Stack Overflow"},
$iG:1}
P.dG.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fl.prototype={
i:function(a){return"Exception: "+this.a}}
P.hK.prototype={
i:function(a){var s=this.a,r=""!==s?"FormatException: "+s:"FormatException",q=this.b
if(q.length>78)q=C.b.bm(q,0,75)+"..."
return r+"\n"+q}}
P.h.prototype={
bF:function(a,b){return new H.bv(this,b)},
gl:function(a){var s,r=this.gL(this)
for(s=0;r.u();)++s
return s},
gaN:function(a){var s,r=this.gL(this)
if(!r.u())throw H.c(H.jZ())
s=r.gC(r)
if(r.u())throw H.c(H.mf())
return s},
E:function(a,b){var s,r,q
P.kQ(b,"index")
for(s=this.gL(this),r=0;s.u();){q=s.gC(s)
if(b===r)return q;++r}throw H.c(P.I(b,this,"index",null,r))},
i:function(a){return P.me(this,"(",")")}}
P.dT.prototype={}
P.af.prototype={
gG:function(a){return P.L.prototype.gG.call(C.M,this)},
i:function(a){return"null"}}
P.L.prototype={constructor:P.L,$iL:1,
t:function(a,b){return this===b},
gG:function(a){return H.cM(this)},
i:function(a){return"Instance of '"+H.cN(this)+"'"},
toString:function(){return this.i(this)}}
P.aY.prototype={
gl:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
W.p.prototype={}
W.hf.prototype={
gl:function(a){return a.length}}
W.dx.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dy.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bz.prototype={$ibz:1}
W.dC.prototype={}
W.bb.prototype={$ibb:1}
W.bc.prototype={
cD:function(a,b,c){if(c!=null)return a.getContext(b,P.ls(c))
return a.getContext(b)},
dZ:function(a,b){return this.cD(a,b,null)},
$ibc:1}
W.c9.prototype={$ic9:1}
W.ak.prototype={
gl:function(a){return a.length}}
W.hr.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.cd.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.hs.prototype={}
W.ae.prototype={}
W.au.prototype={}
W.ht.prototype={
gl:function(a){return a.length}}
W.hu.prototype={
gl:function(a){return a.length}}
W.hv.prototype={
gl:function(a){return a.length}}
W.cf.prototype={}
W.hw.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.ch.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.t(r)+", "
s=a.top
s.toString
return r+H.t(s)+") "+H.t(this.gaM(a))+" x "+H.t(this.gaF(a))},
t:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aG(b)
if(s===r.gby(b)){s=a.top
s.toString
s=s===r.gbD(b)&&this.gaM(a)===r.gaM(b)&&this.gaF(a)===r.gaF(b)}else s=!1}else s=!1
return s},
gG:function(a){var s,r=a.left
r.toString
r=C.d.gG(r)
s=a.top
s.toString
return W.l7(r,C.d.gG(s),C.d.gG(this.gaM(a)),C.d.gG(this.gaF(a)))},
gdh:function(a){var s=a.bottom
s.toString
return s},
gcW:function(a){return a.height},
gaF:function(a){var s=this.gcW(a)
s.toString
return s},
gby:function(a){var s=a.left
s.toString
return s},
gcw:function(a){var s=a.right
s.toString
return s},
gbD:function(a){var s=a.top
s.toString
return s},
gd7:function(a){return a.width},
gaM:function(a){var s=this.gd7(a)
s.toString
return s},
$iab:1}
W.dJ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.hx.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.fa.prototype={
gdJ:function(a){return this.a.firstElementChild==null},
gl:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
return t.h.a(s[b])},
m:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.e(s,b)
this.a.replaceChild(c,s[b]).toString},
n:function(a,b){this.a.appendChild(b).toString
return b},
gL:function(a){var s=this.hE(this)
return new J.a6(s,s.length)}}
W.A.prototype={
ga5:function(a){return new W.fh(a)},
gdk:function(a){var s=a.children
s.toString
return new W.fa(a,s)},
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
return new P.ab(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
ag:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.kF
if(s==null){s=[]
r=new W.cK(s)
s.push(W.l6(null))
s.push(W.lb())
$.kF=r
d=r}else d=s
s=$.kE
if(s==null){s=new W.h0(d)
$.kE=s
c=s}else{s.a=d
c=s}}if($.aM==null){s=document
r=s.implementation.createHTMLDocument("")
r.toString
$.aM=r
r=r.createRange()
r.toString
$.jV=r
r=$.aM.createElement("base")
t.B.a(r)
s=s.baseURI
s.toString
r.href=s
$.aM.head.appendChild(r).toString}s=$.aM
if(s.body==null){r=s.createElement("body")
s.body=t.t.a(r)}s=$.aM
if(t.t.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.aM.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!C.a.w(C.P,s)}else s=!1
if(s){$.jV.selectNodeContents(q)
s=$.jV
s=s.createContextualFragment(b)
s.toString
p=s}else{q.innerHTML=b
s=$.aM.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.aM.body)J.kx(q)
c.cE(p)
document.adoptNode(p).toString
return p},
h5:function(a,b,c){return this.ag(a,b,c,null)},
e0:function(a,b){var s
a.textContent=null
s=a.appendChild(this.ag(a,b,null,null))
s.toString},
gdX:function(a){var s=a.tagName
s.toString
return s},
$iA:1}
W.hA.prototype={
$1:function(a){return t.h.b(a)},
$S:21}
W.i.prototype={$ii:1}
W.b.prototype={
fV:function(a,b,c,d){if(c!=null)this.en(a,b,c,!1)},
en:function(a,b,c,d){return a.addEventListener(b,H.c1(c,1),!1)},
$ib:1}
W.aN.prototype={$iaN:1}
W.dK.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.dL.prototype={
gl:function(a){return a.length}}
W.dN.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hL.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.bg.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.bh.prototype={
gdn:function(a){var s=a.data
s.toString
return s},
$ibh:1}
W.bH.prototype={$ibH:1}
W.bj.prototype={$ibj:1}
W.hW.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ic.prototype={
gl:function(a){return a.length}}
W.e3.prototype={
h:function(a,b){return P.b4(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b4(s.value[1]))}},
ga6:function(a){var s=[]
this.F(a,new W.id(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iS:1}
W.id.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.e4.prototype={
h:function(a,b){return P.b4(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b4(s.value[1]))}},
ga6:function(a){var s=[]
this.F(a,new W.ie(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iS:1}
W.ie.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.aS.prototype={$iaS:1}
W.e5.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.aa.prototype={$iaa:1}
W.a0.prototype={
gaN:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.c(P.k6("No elements"))
if(r>1)throw H.c(P.k6("More than one element"))
s=s.firstChild
s.toString
return s},
a0:function(a,b){var s,r,q,p=b.a,o=this.a
if(p!==o)for(s=p.childNodes.length,r=0;r<s;++r){q=p.firstChild
q.toString
o.appendChild(q).toString}return},
m:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.e(r,b)
s.replaceChild(c,r[b]).toString},
gL:function(a){var s=this.a.childNodes
return new W.cm(s,s.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.e(s,b)
return s[b]}}
W.r.prototype={
hv:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
hx:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.lV(s,b,a)}catch(q){H.aI(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e4(a):s},
fE:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$ir:1}
W.cJ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.aT.prototype={
gl:function(a){return a.length},
$iaT:1}
W.ej.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.en.prototype={
h:function(a,b){return P.b4(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b4(s.value[1]))}},
ga6:function(a){var s=[]
this.F(a,new W.is(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iS:1}
W.is.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.ep.prototype={
gl:function(a){return a.length}}
W.aB.prototype={$iaB:1}
W.et.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.aW.prototype={$iaW:1}
W.eu.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.aX.prototype={
gl:function(a){return a.length},
$iaX:1}
W.ey.prototype={
h:function(a,b){return a.getItem(H.jy(b))},
F:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
ga6:function(a){var s=[]
this.F(a,new W.iz(s))
return s},
gl:function(a){var s=a.length
s.toString
return s},
$iS:1}
W.iz.prototype={
$2:function(a,b){return this.a.push(a)},
$S:37}
W.an.prototype={$ian:1}
W.cT.prototype={
ag:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bI(a,b,c,d)
s=W.mc("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new W.a0(r).a0(0,new W.a0(s))
return r}}
W.eC.prototype={
ag:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bI(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a0(C.v.ag(r,b,c,d))
r=new W.a0(r.gaN(r))
new W.a0(s).a0(0,new W.a0(r.gaN(r)))
return s}}
W.eD.prototype={
ag:function(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.bI(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new W.a0(C.v.ag(r,b,c,d))
new W.a0(s).a0(0,new W.a0(r.gaN(r)))
return s}}
W.bU.prototype={$ibU:1}
W.aC.prototype={$iaC:1}
W.ah.prototype={$iah:1}
W.eF.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.eG.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.iI.prototype={
gl:function(a){var s=a.length
s.toString
return s}}
W.aZ.prototype={$iaZ:1}
W.br.prototype={$ibr:1}
W.eK.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.iN.prototype={
gl:function(a){return a.length}}
W.aE.prototype={}
W.iZ.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.f3.prototype={
gl:function(a){return a.length}}
W.b0.prototype={
gh8:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.y("deltaY is not supported"))},
gh7:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.y("deltaX is not supported"))},
$ib0:1}
W.bW.prototype={
fF:function(a,b){var s=a.requestAnimationFrame(H.c1(b,1))
s.toString
return s},
ez:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.bX.prototype={$ibX:1}
W.fb.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.d_.prototype={
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
t:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.aG(b)
if(s===r.gby(b)){s=a.top
s.toString
if(s===r.gbD(b)){s=a.width
s.toString
if(s===r.gaM(b)){s=a.height
s.toString
r=s===r.gaF(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gG(p)
s=a.top
s.toString
s=C.d.gG(s)
r=a.width
r.toString
r=C.d.gG(r)
q=a.height
q.toString
return W.l7(p,s,r,C.d.gG(q))},
gcW:function(a){return a.height},
gaF:function(a){var s=a.height
s.toString
return s},
gd7:function(a){return a.width},
gaM:function(a){var s=a.width
s.toString
return s}}
W.fp.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.d3.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.fJ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.fQ.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a[b]
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$ij:1,
$iv:1,
$ih:1,
$il:1}
W.f8.prototype={
F:function(a,b){var s,r,q,p,o
for(s=this.ga6(this),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.m)(s),++p){o=s[p]
b.$2(o,H.jy(q.getAttribute(o)))}},
ga6:function(a){var s,r,q,p,o,n=this.a.attributes,m=[]
for(s=n.length,r=t.x,q=0;q<s;++q){if(q>=n.length)return H.e(n,q)
p=r.a(n[q])
if(p.namespaceURI==null){o=p.name
o.toString
m.push(o)}}return m}}
W.fh.prototype={
h:function(a,b){return this.a.getAttribute(H.jy(b))},
gl:function(a){return this.ga6(this).length}}
W.jW.prototype={}
W.fk.prototype={}
W.jg.prototype={
$1:function(a){return this.a.$1(a)},
$S:3}
W.kc.prototype={}
W.bY.prototype={
ec:function(a){var s
if($.fq.a===0){for(s=0;s<262;++s)$.fq.m(0,C.O[s],W.oc())
for(s=0;s<12;++s)$.fq.m(0,C.j[s],W.od())}},
aV:function(a){return $.lS().w(0,W.cj(a))},
aq:function(a,b,c){var s=$.fq.h(0,W.cj(a)+"::"+b)
if(s==null)s=$.fq.h(0,"*::"+b)
if(s==null)return!1
return s.$4(a,b,c,this)},
$iaz:1}
W.H.prototype={
gL:function(a){return new W.cm(a,this.gl(a))}}
W.cK.prototype={
aV:function(a){return C.a.dc(this.a,new W.ii(a))},
aq:function(a,b,c){return C.a.dc(this.a,new W.ih(a,b,c))},
$iaz:1}
W.ii.prototype={
$1:function(a){return a.aV(this.a)},
$S:19}
W.ih.prototype={
$1:function(a){return a.aq(this.a,this.b,this.c)},
$S:19}
W.d9.prototype={
eg:function(a,b,c,d){var s,r,q
this.a.a0(0,c)
s=b.bF(0,new W.jo())
r=b.bF(0,new W.jp())
this.b.a0(0,s)
q=this.c
q.a0(0,C.Q)
q.a0(0,r)},
aV:function(a){return this.a.w(0,W.cj(a))},
aq:function(a,b,c){var s=this,r=W.cj(a),q=s.c
if(q.w(0,r+"::"+b))return s.d.fY(c)
else if(q.w(0,"*::"+b))return s.d.fY(c)
else{q=s.b
if(q.w(0,r+"::"+b))return!0
else if(q.w(0,"*::"+b))return!0
else if(q.w(0,r+"::*"))return!0
else if(q.w(0,"*::*"))return!0}return!1},
$iaz:1}
W.jo.prototype={
$1:function(a){return!C.a.w(C.j,a)},
$S:22}
W.jp.prototype={
$1:function(a){return C.a.w(C.j,a)},
$S:22}
W.fS.prototype={
aq:function(a,b,c){if(this.e7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.jq.prototype={
$1:function(a){return"TEMPLATE::"+a},
$S:47}
W.fR.prototype={
aV:function(a){var s
if(t.s.b(a))return!1
s=t.u.b(a)
if(s&&W.cj(a)==="foreignObject")return!1
if(s)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.b.bH(b,"on"))return!1
return this.aV(a)},
$iaz:1}
W.cm.prototype={
u:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.lU(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gC:function(a){return H.U(this).c.a(this.d)}}
W.jn.prototype={}
W.h0.prototype={
cE:function(a){var s,r=new W.ju(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
bb:function(a,b){++this.b
if(b==null||b!==a.parentNode)J.kx(a)
else b.removeChild(a).toString},
fJ:function(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.lY(a)
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
o=p}l=o}catch(n){H.aI(n)}r="element unprintable"
try{r=J.dw(a)}catch(n){H.aI(n)}try{q=W.cj(a)
this.fI(a,b,l,r,q,k,j)}catch(n){if(H.aI(n) instanceof P.aj)throw n
else{this.bb(a,b)
p=window
p.toString
p="Removing corrupted element "+H.t(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(p)}}},
fI:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.bb(a,b)
window.toString
s="Removing element due to corrupted attributes on <"+d+">"
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(!m.a.aV(a)){m.bb(a,b)
window.toString
s="Removing disallowed element <"+e+"> from "+H.t(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}if(g!=null)if(!m.a.aq(a,"is",g)){m.bb(a,b)
window.toString
s="Removing disallowed type extension <"+e+' is="'+g+'">'
r=typeof console!="undefined"
r.toString
if(r)window.console.warn(s)
return}q=f.ga6(f).slice(0)
for(p=f.ga6(f).length-1,s=f.a;p>=0;--p){if(p>=q.length)return H.e(q,p)
o=q[p]
r=m.a
n=J.m1(o)
H.jy(o)
if(!r.aq(a,n,s.getAttribute(o))){window.toString
r="Removing disallowed attribute <"+e+" "+o+'="'+H.t(s.getAttribute(o))+'">'
n=typeof console!="undefined"
n.toString
if(n)window.console.warn(r)
s.removeAttribute(o)}}if(t.bg.b(a)){s=a.content
s.toString
m.cE(s)}}}
W.ju.prototype={
$2:function(a,b){var s,r,q,p,o=this.a,n=a.nodeType
n.toString
switch(n){case 1:o.fJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:o.bb(a,b)}s=a.lastChild
for(;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){n=r.nextSibling
q=s
q=n==null?q!=null:n!==q
n=q}else n=!1
if(n){n=P.k6("Corrupt HTML")
throw H.c(n)}}catch(p){H.aI(p)
n=s;++o.b
q=n.parentNode
if(a!==q){if(q!=null)q.removeChild(n).toString}else a.removeChild(n).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:49}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fG.prototype={}
W.da.prototype={}
W.db.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fN.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
W.h5.prototype={}
W.h6.prototype={}
W.h7.prototype={}
W.h8.prototype={}
W.h9.prototype={}
W.ha.prototype={}
P.dh.prototype={$ibh:1,
gdn:function(a){return this.a}}
P.jz.prototype={
$1:function(a){this.a.push(P.lk(a))},
$S:34}
P.jG.prototype={
$2:function(a,b){this.a[a]=P.lk(b)},
$S:32}
P.dM.prototype={
gb8:function(){return new H.bl(new H.bv(this.b,new P.hI()),new P.hJ())},
F:function(a,b){C.a.F(P.hV(this.gb8(),!1),b)},
m:function(a,b,c){var s=this.gb8()
J.m0(s.b.$1(J.hd(s.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b).toString},
gl:function(a){return J.b9(this.gb8().a)},
h:function(a,b){var s=this.gb8()
return s.b.$1(J.hd(s.a,b))},
gL:function(a){var s=P.hV(this.gb8(),!1)
return new J.a6(s,s.length)}}
P.hI.prototype={
$1:function(a){return t.h.b(a)},
$S:21}
P.hJ.prototype={
$1:function(a){return t.h.a(a)},
$S:31}
P.fF.prototype={
gcw:function(a){return this.$ti.c.a(this.a+this.c)},
gdh:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
t:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.aG(b)
if(s===r.gby(b)){q=o.b
if(q===r.gbD(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gcw(b)&&p.a(q+o.d)===r.gdh(b)}else s=!1}else s=!1}else s=!1
return s},
gG:function(a){var s=this,r=s.a,q=C.c.gG(r),p=s.b,o=C.c.gG(p),n=s.$ti.c
r=C.c.gG(n.a(r+s.c))
p=C.c.gG(n.a(p+s.d))
return H.mF(H.iA(H.iA(H.iA(H.iA(0,q),o),r),p))}}
P.ab.prototype={
gby:function(a){return this.a},
gbD:function(a){return this.b},
gaM:function(a){return this.c},
gaF:function(a){return this.d}}
P.bk.prototype={$ibk:1}
P.e_.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.bn.prototype={$ibn:1}
P.ed.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.il.prototype={
gl:function(a){return a.length}}
P.bQ.prototype={$ibQ:1}
P.eB.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.k.prototype={
gdk:function(a){return new P.dM(a,new W.a0(a))},
ag:function(a,b,c,d){var s,r,q,p,o=[]
o.push(W.l6(null))
o.push(W.lb())
o.push(new W.fR())
c=new W.h0(new W.cK(o))
s='<svg version="1.1">'+b+"</svg>"
o=document
r=o.body
r.toString
q=C.l.h5(r,s,c)
o=o.createDocumentFragment()
o.toString
r=new W.a0(q)
p=r.gaN(r)
for(;r=p.firstChild,r!=null;)o.appendChild(r).toString
return o},
$ik:1}
P.bs.prototype={$ibs:1}
P.eL.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.ft.prototype={}
P.fu.prototype={}
P.fB.prototype={}
P.fC.prototype={}
P.fO.prototype={}
P.fP.prototype={}
P.fX.prototype={}
P.fY.prototype={}
P.hj.prototype={
gl:function(a){return a.length}}
P.dA.prototype={
h:function(a,b){return P.b4(a.get(b))},
F:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.b4(s.value[1]))}},
ga6:function(a){var s=[]
this.F(a,new P.hk(s))
return s},
gl:function(a){var s=a.size
s.toString
return s},
$iS:1}
P.hk.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dB.prototype={
gl:function(a){return a.length}}
P.aK.prototype={}
P.ee.prototype={
gl:function(a){return a.length}}
P.f9.prototype={}
P.bP.prototype={
hC:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.o3(g))
return}if(t.l.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.jS("Incorrect number or type of arguments"))},
$ibP:1}
P.ev.prototype={
gl:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.I(b,a,null,null,null))
s=P.b4(a.item(b))
s.toString
return s},
m:function(a,b,c){throw H.c(P.y("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ij:1,
$ih:1,
$il:1}
P.fK.prototype={}
P.fL.prototype={}
K.aJ.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"}}
K.dQ.prototype={
aG:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)if(s[q].aG(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q}}
K.a7.prototype={
aG:function(a,b){return!this.e3(0,b)},
i:function(a){return"!["+this.bJ(0)+"]"}}
K.im.prototype={
aG:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var s=H.k3(this.a),r=H.k3(this.b)
return s+".."+r}}
K.q.prototype={
p:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.d("May not create a Set with zero characters."))
s=new H.R(t.d)
for(r=new H.aR(a,a.gl(a)),q=H.U(r).c;r.u();)s.m(0,q.a(r.d),!0)
p=P.hV(new H.aQ(s),!0)
C.a.e2(p)
this.a=p},
aG:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.k7(this.a)}}
L.ew.prototype={
j:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.iO(this.a.k(0,b),[])
s.push(p)
return p},
hb:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.aG(0,a))return p}return null},
i:function(a){return this.b},
d5:function(){var s,r,q,p,o,n,m=this,l=""+("("+m.b+")"),k=m.d
if(k!=null){l+=" => ["+k.b+"]"
k=m.a.c
s=m.d
if(k.w(0,s==null?null:s.b))l+=" (consume)"
s=m.d
s=s==null?null:new H.aQ(s.c)
s=J.aq(s==null?[]:s)
for(;s.u();){r=s.gC(s)
l+="\n"
q=m.d
p=q==null?null:q.c.h(0,r)
if(p==null)p=""
l+="  -- "+r+" => ["+p+"]"
if(k.w(0,p))l+=" (consume)"}}for(k=m.c,s=k.length,o=0;o<k.length;k.length===s||(0,H.m)(k),++o){n=k[o]
l+="\n"
l+="  -- "+(n.b.b+": "+n.bJ(0))}return l.charCodeAt(0)==0?l:l}}
L.eI.prototype={
i:function(a){var s=H.kv(this.b,"\n","\\n"),r=H.kv(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eJ.prototype={
aI:function(a,b,c){var s,r,q
for(s=c.length,r=this.c,q=0;q<c.length;c.length===s||(0,H.m)(c),++q)r.m(0,c[q],b)},
i:function(a){return this.b}}
L.iK.prototype={
k:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.ew(this,b,[])
s.m(0,b,r)}return r},
K:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eJ(a,P.N(s,s))
r.m(0,a,q)}return q},
cA:function(a){return this.hH(a)},
hH:function(a){var s=this
return P.ns(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$cA(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:c=s.d
b=[]
a0=[]
a1=[]
n=H.U(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a1.length
if(h!==0){if(!!a1.fixed$length)H.f(P.y("removeAt"))
if(0>=h)H.f(P.el(0,null))
g=a1.splice(0,1)[0]}else{if(!r.u()){q=3
break}g=n.a(r.d)}a0.push(g);++k
h=c==null
f=h?null:c.hb(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.k7(a0)
throw H.c(P.d("Untokenizable string [state: "+H.t(h?null:c.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.f(P.y("removeRange"))
P.k4(0,i,a0.length)
a0.splice(0,i-0)
C.a.a0(a1,a0)
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
if(h!=null){e=P.k7(b)
h=c.d
if(h==null)l=null
else{d=h.c.h(0,e)
h=new L.eI(d==null?h.b:d,e,k)
l=h}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.w(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.mR()
case 1:return P.mS(o)}}},t.aR)},
i:function(a){var s,r,q=new P.aY(""),p=this.d
if(p!=null)q.a=""+(p.d5()+"\n")
for(p=this.a,p=p.ghI(p),p=new H.cz(J.aq(p.a),p.b),s=H.U(p).Q[1];p.u();){r=s.a(p.a)
if(r!=this.d)q.a+=H.t(r==null?null:r.d5())+"\n"}p=q.a
return p.charCodeAt(0)==0?p:p}}
L.iO.prototype={
i:function(a){return this.b.b+": "+this.bJ(0)}}
O.bD.prototype={
cF:function(a,b,c){this.b=b
this.c=a},
b2:function(a,b){return this.cF(a,null,b)},
cZ:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cK:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var s=this.a
return new J.a6(s,s.length)},
E:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.e(s,b)
return s[b]},
n:function(a,b){var s,r
if(this.cZ([b])){s=this.a
r=s.length
s.push(b)
this.cK(r,[b])}},
a0:function(a,b){var s,r
if(this.cZ(b)){s=this.a
r=s.length
C.a.a0(s,b)
this.cK(r,b)}},
$ih:1}
O.cF.prototype={
gl:function(a){return this.a.length},
gq:function(){var s=this.b
return s==null?this.b=D.D():s},
aP:function(){var s=this.b
return s==null?null:s.B(null)},
gY:function(a){var s=this.a
if(s.length>0)return C.a.gbx(s)
else return V.a9()},
bC:function(a){this.a.push(a)
this.aP()},
aH:function(){var s=this.a
if(s.length>0){s.pop()
this.aP()}}}
E.hl.prototype={}
E.bE.prototype={
sbG:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().N(0,s.gdR())
if(b!=null)b.gq().n(0,s.gdR())
s.bz(new D.z("shape",r,b))}},
am:function(a,b){var s,r
for(s=this.y.a,s=new J.a6(s,s.length),r=H.U(s).c;s.u();)r.a(s.d).am(0,b)},
a9:function(a){var s,r,q,p=this,o=a.dx
o.a.push(o.gY(o))
o.aP()
a.cv(p.f)
s=C.a.gbx(a.dy)
if(p.d!=null)if(s!=null)s.dV(a,p)
for(r=p.y.a,r=new J.a6(r,r.length),q=H.U(r).c;r.u();)q.a(r.d).a9(a)
a.cu()
o.aH()},
bz:function(a){var s=this.z
return s==null?null:s.B(a)},
a3:function(){return this.bz(null)},
dS:function(a){this.e=null
this.bz(a)},
hn:function(){return this.dS(null)},
dQ:function(a){return this.bz(a)},
hk:function(){return this.dQ(null)},
hj:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gdP(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bF()
n=o.a;(n==null?o.a=[]:n).push(r)}this.a3()},
hm:function(a,b){var s,r
for(s=b.gL(b),r=this.gdP();s.u();)s.gC(s).gq().N(0,r)
this.a3()},
i:function(a){return"Unnamed entity"}}
E.bB.prototype={
i:function(a){return this.b}}
E.bN.prototype={
i:function(a){return this.b}}
E.fi.prototype={}
E.io.prototype={
eb:function(a,b){var s=this
s.cy.gq().n(0,new E.ip(s))
s.db.gq().n(0,new E.iq(s))
s.dx.gq().n(0,new E.ir(s))},
ghu:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gY(q).P(0,s.gY(s))
q=s}return q},
cv:function(a){var s=this.dy
return s.push(a==null?C.a.gbx(s):a)},
cu:function(){var s=this.dy
if(s.length>1)s.pop()},
da:function(a){var s,r=a.b
if(r.length===0)throw H.c(P.d("May not cache a shader with no name."))
s=this.fr
if(s.h2(0,r))throw H.c(P.d('Shader cache already contains a shader by the name "'+r+'".'))
s.m(0,r,a)}}
E.ip.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.iq.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.ir.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.eH.prototype={
cN:function(a){this.dW()},
cM:function(){return this.cN(null)},
ghd:function(){var s,r=this,q=Date.now(),p=C.c.a_(P.kD(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.Q(q,!1)
return s/p},
d1:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.cl(r*o)
r=s.clientHeight
r.toString
p=C.d.cl(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.kY(C.i,this.ghy())}},
dW:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.x.ez(s)
r=W.lp(new E.iH(this),t.H)
r.toString
C.x.fF(s,r)}},
hw:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.d1()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.Q(p,!1)
q.y=P.kD(p-q.r.a).a*0.000001
p=q.cy
C.a.sl(p.a,0)
p.aP()
p=q.db
C.a.sl(p.a,0)
p.aP()
p=q.dx
C.a.sl(p.a,0)
p.aP()
p=q.dy
C.a.sl(p,0)
p.push(null)
m.a9(q)}q=n.Q
if(q!=null)q.B(null)}catch(o){s=H.aI(o)
r=H.kp(o)
P.ku("Error: "+H.t(s))
P.ku("Stack: "+H.t(r))
throw H.c(s)}}}
E.iH.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hw()}},
$S:25}
Z.f4.prototype={}
Z.c7.prototype={
T:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.aI(q)
r=P.d('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.t(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.f5.prototype={}
Z.bC.prototype={
aE:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
T:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.e(r,s)
r[s].T(a)}},
aL:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.e(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
a9:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.e(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
m.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cN(p.c)+"'")+"]")}o=[]
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){n=s[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.j(m,", ")+"\nAttrs:   "+C.a.j(o,", ")}}
Z.co.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cN(this.c)+"'")+"]"}}
Z.b_.prototype={
gcH:function(a){var s=this.a,r=(s&$.ap().a)!==0?3:0
if((s&$.b7().a)!==0)r+=3
if((s&$.b6().a)!==0)r+=3
if((s&$.by().a)!==0)r+=2
if((s&$.b8().a)!==0)r+=3
if((s&$.du().a)!==0)r+=3
if((s&$.dv().a)!==0)r+=4
if((s&$.c5().a)!==0)++r
return(s&$.b5().a)!==0?r+4:r},
fZ:function(a){var s,r=$.ap(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.b7()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b6()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.by()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b8()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.du()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dv()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.c5()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.b5()
if((q&r.a)!==0)if(s===a)return r
return $.lR()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b_))return!1
return this.a===b.a},
i:function(a){var s=[],r=this.a
if((r&$.ap().a)!==0)s.push("Pos")
if((r&$.b7().a)!==0)s.push("Norm")
if((r&$.b6().a)!==0)s.push("Binm")
if((r&$.by().a)!==0)s.push("Txt2D")
if((r&$.b8().a)!==0)s.push("TxtCube")
if((r&$.du().a)!==0)s.push("Clr3")
if((r&$.dv().a)!==0)s.push("Clr4")
if((r&$.c5().a)!==0)s.push("Weight")
if((r&$.b5().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.a.j(s,"|")}}
D.hn.prototype={}
D.bF.prototype={
n:function(a,b){var s=this.a
return(s==null?this.a=[]:s).push(b)},
N:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.a.w(p,b)
if(p===!0){p=r.a
p=p==null?q:C.a.N(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.a.w(p,b)
if(p===!0){p=r.b
p=p==null?q:C.a.N(p,b)
s=p===!0||s}return s},
B:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.O():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.a.F(P.hV(p,!0),new D.hG(s))
r=q.b
if(r!=null){q.b=[]
C.a.F(r,new D.hH(s))}return!0},
h9:function(){return this.B(null)},
aJ:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.B(s)}}}}
D.hG.prototype={
$1:function(a){a.$1(this.a)},
$S:13}
D.hH.prototype={
$1:function(a){a.$1(this.a)},
$S:13}
D.O.prototype={}
D.av.prototype={}
D.aw.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.t(this.d)+" => "+H.t(this.e)}}
X.c8.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c8))return!1
if(this.a!==b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.dY.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dY))return!1
if(this.a!==b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.hR.prototype={}
X.cx.prototype={}
X.hX.prototype={
b7:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.P(o.a+b.a,o.b+b.b)
o=q.a.gaW()
s=$.a_
if(s==null)s=$.a_=new V.P(0,0)
r=q.x
q.z=new P.Q(p,!1)
q.x=n
return new X.bK(a,s,r,o,n)},
ct:function(a,b){this.r=a.a
return!1},
bh:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bg:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.b7(a,b))
return!0},
hr:function(a){var s,r,q=this.e
if(q==null)return!1
s=this.a.gaW()
r=this.x
Date.now()
q.B(new X.bL(new V.W(a.a,a.b),s,r))
return!0},
f8:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.B(new X.cx(c,q.a.gaW(),b))
q.y=new P.Q(s,!1)
s=$.a_
q.x=s==null?$.a_=new V.P(0,0):s}}
X.Y.prototype={
t:function(a,b){var s=this
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
return C.a.j(s,"+")}}
X.bK.prototype={}
X.ig.prototype={
bQ:function(a,b,c){var s=this,r=new P.Q(Date.now(),!1),q=s.a.gaW(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bK(a,p,o,q,b)},
ct:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.B(this.bQ(a,b,!0))
return!0},
bh:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.B(r.bQ(a,b,!0))
return!0},
bg:function(a,b){var s=this.d
if(s==null)return!1
s.B(this.bQ(a,b,!1))
return!0},
hs:function(a,b){var s,r=this.e
if(r==null)return!1
s=this.a.gaW()
Date.now()
r.B(new X.bL(new V.W(a.a,a.b),s,b))
return!0},
gdr:function(){var s=this.b
return s==null?this.b=D.D():s},
gcB:function(){var s=this.c
return s==null?this.c=D.D():s},
gdO:function(){var s=this.d
return s==null?this.d=D.D():s}}
X.bL.prototype={}
X.ek.prototype={}
X.cU.prototype={}
X.iM.prototype={
b7:function(a,b){var s,r,q,p,o=this,n=new P.Q(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.a_
if(r==null){r=new V.P(0,0)
$.a_=r
s=r}else s=r}r=o.a.gaW()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.cU(q,p,r,s)},
hq:function(a){var s=this.b
if(s==null)return!1
s.B(this.b7(a,!0))
return!0},
ho:function(a){var s=this.c
if(s==null)return!1
s.B(this.b7(a,!0))
return!0},
hp:function(a){var s=this.d
if(s==null)return!1
s.B(this.b7(a,!1))
return!0}}
X.f1.prototype={
gaY:function(a){var s=this.b
return s==null?this.b=new X.hR(new X.Y(!1,!1,!1),P.cu(t.S)):s},
ga2:function(){var s,r=this.c
if(r==null){r=$.a_
if(r==null){r=$.a_=new V.P(0,0)
s=r}else s=r
r=this.c=new X.ig(this,r,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return r},
gah:function(){var s=this.d
if(s==null){s=$.a_
if(s==null)s=$.a_=new V.P(0,0)
s=this.d=new X.hX(this,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return s},
gb_:function(){var s,r=this.e
if(r==null){r=$.a_
if(r==null){r=$.a_=new V.P(0,0)
s=r}else s=r
r=this.e=new X.iM(this,r,s,new P.Q(Date.now(),!1),new P.Q(Date.now(),!1))}return r},
gaW:function(){var s=this.a
return V.kR(0,0,C.f.gdm(s).c,C.f.gdm(s).d)},
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
return new X.dY(p,new X.Y(s,r,q))},
aU:function(a){var s,r,q=this.gaY(this),p=a.ctrlKey
p.toString
if(!p){p=a.metaKey
p.toString}else p=!0
s=a.altKey
s.toString
r=a.shiftKey
r.toString
q.c=new X.Y(p,s,r)},
c2:function(a){var s,r,q,p=a.ctrlKey
if(p!==!0){p=a.metaKey
s=p===!0}else s=!0
p=this.gaY(this)
r=a.altKey
q=a.shiftKey
p.c=new X.Y(s,r===!0,q===!0)},
aB:function(a){var s,r,q,p
if(a==null){s=$.a_
return s==null?$.a_=new V.P(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.P(r-p,q-s)},
ba:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.W(r,s)},
c_:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=[]
r=a.touches
if(r==null)r=[]
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.m)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.al(n)
m=o.pageY
m.toString
C.d.al(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.al(l)
l=o.pageY
l.toString
l=C.d.al(l)
k=j.top
k.toString
s.push(new V.P(n-m,l-k))}return s},
ax:function(a){var s,r,q,p
if(a==null)return new X.c8(0,new X.Y(!1,!1,!1))
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
return new X.c8(s,new X.Y(r,q,p))},
bR:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
eX:function(a){if(this.f&&this.bR(a))a.preventDefault()},
f6:function(a){var s,r,q=this
if(!q.f)return
s=q.cT(a)
r=q.gaY(q)
r.c=s.b
r.d.n(0,s.a)},
f4:function(a){var s,r,q=this
if(!q.f)return
s=q.cT(a)
r=q.gaY(q)
r.c=s.b
r.d.N(0,s.a)},
fa:function(a){var s,r,q,p=this
p.a.focus()
p.f=!0
p.aU(a)
if(p.x){s=p.ax(a)
r=p.ba(a)
if(p.gah().ct(s,r))a.preventDefault()
return}s=p.ax(a)
q=p.aB(a)
if(p.ga2().ct(s,q))a.preventDefault()},
fe:function(a){var s,r,q,p=this
p.aU(a)
s=p.ax(a)
if(p.x){r=p.ba(a)
if(p.gah().bh(s,r))a.preventDefault()
return}q=p.aB(a)
if(p.ga2().bh(s,q))a.preventDefault()},
f0:function(a){var s,r,q,p=this
if(!p.bR(a)){p.aU(a)
s=p.ax(a)
if(p.x){r=p.ba(a)
if(p.gah().bh(s,r))a.preventDefault()
return}q=p.aB(a)
if(p.ga2().bh(s,q))a.preventDefault()}},
fc:function(a){var s,r,q,p=this
p.aU(a)
s=p.ax(a)
if(p.x){r=p.ba(a)
if(p.gah().bg(s,r))a.preventDefault()
return}q=p.aB(a)
if(p.ga2().bg(s,q))a.preventDefault()},
eZ:function(a){var s,r,q,p=this
if(!p.bR(a)){p.aU(a)
s=p.ax(a)
if(p.x){r=p.ba(a)
if(p.gah().bg(s,r))a.preventDefault()
return}q=p.aB(a)
if(p.ga2().bg(s,q))a.preventDefault()}},
fg:function(a){var s,r,q=this
q.aU(a)
s=new V.W(C.w.gh7(a),C.w.gh8(a)).P(0,q.Q)
if(q.x){if(q.gah().hr(s))a.preventDefault()
return}r=q.aB(a)
if(q.ga2().hs(s,r))a.preventDefault()},
fi:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.ax(q.y)
r=q.aB(q.y)
q.gah().f8(s,r,p)}},
fB:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c2(a)
s=r.c_(a)
if(r.gb_().hq(s))a.preventDefault()},
fv:function(a){var s
this.c2(a)
s=this.c_(a)
if(this.gb_().ho(s))a.preventDefault()},
fz:function(a){var s
this.c2(a)
s=this.c_(a)
if(this.gb_().hp(s))a.preventDefault()}}
D.ce.prototype={
aw:function(a){var s=this.r
return s==null?null:s.B(a)},
ef:function(){return this.aw(null)},
$ics:1}
D.ct.prototype={
gq:function(){var s=this.y
return s==null?this.y=D.D():s},
gdL:function(){var s=this.z
return s==null?this.z=D.D():s},
aw:function(a){var s=this.y
return s==null?null:s.B(a)},
cY:function(a){var s=this.z
return s==null?null:s.B(a)},
f7:function(){return this.cY(null)},
fk:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.m)(a),++r)if(this.ed(a[r]))return!1
return!0},
eL:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gcX(),q=this.f,p=0;p<b.length;b.length===s||(0,H.m)(b),++p){o=b[p]
q.push(o)
n=o.r
if(n==null)n=o.r=new D.bF()
m=n.a;(m==null?n.a=[]:m).push(r)}this.aw(new D.av())},
fo:function(a,b){var s,r,q,p
for(s=b.gL(b),r=this.gcX(),q=this.e;s.u();){p=s.gC(s)
C.a.N(q,p)
p.gq().N(0,r)}this.aw(new D.aw())},
ed:function(a){var s=C.a.w(this.f,a)
return s}}
V.M.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.aL.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aL))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.hE.prototype={}
V.cE.prototype={
a7:function(a,b){var s=this
return[s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y]},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cE))return!1
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
i:function(a){var s,r,q,p,o=this,n=V.c3([o.a,o.d,o.r],3,0),m=V.c3([o.b,o.e,o.x],3,0),l=V.c3([o.c,o.f,o.y],3,0),k=n.length
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
V.bJ.prototype={
a7:function(a,b){var s=this
return[s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx]},
cm:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.C().toString
if(Math.abs(b3-0)<1e-9)return V.a9()
s=1/b3
r=-l
q=-a2
return V.ay((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
P:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.ay(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
bE:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.B(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bk:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.V(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bJ))return!1
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
D:function(a){var s,r,q,p,o,n=this,m=V.c3([n.a,n.e,n.y,n.cx],3,0),l=V.c3([n.b,n.f,n.z,n.cy],3,0),k=V.c3([n.c,n.r,n.Q,n.db],3,0),j=V.c3([n.d,n.x,n.ch,n.dx],3,0),i=m.length
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
v:function(){return this.D("")}}
V.P.prototype={
aa:function(a){return new V.W(a.a-this.a,a.b-this.b)},
t:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
v:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.V.prototype={
b5:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.V))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
v:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.aU.prototype={
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.aU))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
v:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.em.prototype={
gau:function(){var s=this.c,r=this.d
return s>r?r:s},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.em))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.W.prototype={
cn:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b},
P:function(a,b){return new V.W(this.a*b,this.b*b)},
ab:function(a,b){var s
$.C().toString
if(Math.abs(b-0)<1e-9){s=$.bu
return s==null?$.bu=new V.W(0,0):s}return new V.W(this.a/b,this.b/b)},
t:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.B.prototype={
cn:function(a){return Math.sqrt(this.a1(this))},
a1:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
co:function(a,b){return new V.B(V.kr(this.a,a.a,b),V.kr(this.b,a.b,b),V.kr(this.c,a.c,b))},
J:function(){var s=this,r=Math.sqrt(s.a1(s))
if(r===1)return s
return s.ab(0,r)},
be:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.B(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
b1:function(a){return new V.B(-this.a,-this.b,-this.c)},
ab:function(a,b){$.C().toString
if(Math.abs(b-0)<1e-9)return V.f2()
return new V.B(this.a/b,this.b/b,this.c/b)},
dK:function(){$.C().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
t:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.B))return!1
s=b.a
$.C().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
v:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
U.hp.prototype={
bK:function(a){var s=V.ou(a,this.c,this.b)
return s},
gq:function(){var s=this.y
return s==null?this.y=D.D():s},
M:function(a){var s=this.y
return s==null?null:s.B(a)},
scC:function(a,b){},
scq:function(a){var s,r=this,q=r.b
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bK(s)}r.M(new D.z("maximumLocation",q,r.b))}},
scs:function(a){var s,r=this,q=r.c
$.C().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bK(s)}r.M(new D.z("minimumLocation",q,r.c))}},
sa8:function(a,b){var s,r=this
b=r.bK(b)
s=r.d
$.C().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.M(new D.z("location",s,b))}},
scr:function(a){var s,r,q=this,p=q.e
$.C().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.M(new D.z("maximumVelocity",p,a))}},
sV:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.M(new D.z("velocity",r,a))}},
sca:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.C().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.M(new D.z("dampening",s,a))}},
am:function(a,b){var s,r,q,p=this,o=p.f
$.C().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sa8(0,p.d+s*b)
o=p.x
$.C().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sV(s)}}}
U.cb.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.D():s},
b0:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cb))return!1
return this.a.t(0,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bG.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.D():s},
M:function(a){var s=this.e
return s==null?null:s.B(a)},
a4:function(){return this.M(null)},
eJ:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gaQ(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
if(p!=null){o=p.gq()
n=o.a;(n==null?o.a=[]:n).push(r)}}this.M(new D.av())},
fm:function(a,b){var s,r
for(s=b.gL(b),r=this.gaQ();s.u();)s.gC(s).gq().N(0,r)
this.M(new D.aw())},
b0:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.a6(o,o.length),n=H.U(o).c,s=null;o.u();){r=n.a(o.d)
if(r!=null){q=r.b0(0,b,c)
s=s==null?q:q.P(0,s)}}p.f=s==null?V.a9():s
o=p.e
if(o!=null)o.aJ(0)}return p.f},
t:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.e(s,p)
o=s[p]
if(p>=q.length)return H.e(q,p)
if(!J.a5(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$iZ:1}
U.Z.prototype={}
U.cW.prototype={
gq:function(){var s=this.cy
return s==null?this.cy=D.D():s},
M:function(a){var s=this.cy
return s==null?null:s.B(a)},
a4:function(){return this.M(null)},
bc:function(a){var s=this
if(s.a!=null)return!1
s.a=a
a.ga2().gdr().n(0,s.gbS())
a.ga2().gdO().n(0,s.gbU())
a.ga2().gcB().n(0,s.gbW())
return!0},
bT:function(a){var s=this,r=s.c,q=s.a
if(!r.t(0,q==null?null:q.gaY(q).c))return
s.x=s.y=!0
s.z=s.b.d},
bV:function(a){var s,r,q,p=this
t.Z.a(a)
if(!p.y)return
if(p.x){s=a.y.aa(a.d)
if(s.a1(s)<4)return
p.x=!1}s=a.c
r=a.d
q=p.b
q.sa8(0,-a.y.aa(r).P(0,2).ab(0,s.gau()).a*2.5+p.z)
q.sV(0)
p.Q=a.z.aa(r).P(0,2).ab(0,s.gau())
p.a4()},
bX:function(a){var s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
s=r.Q
if(s.a1(s)>0.0001){r.b.sV(r.Q.a*10*2.5)
r.a4()}},
b0:function(a,b,c){var s,r,q=this,p=q.ch,o=b.e
if(p<o){q.ch=o
p=q.b
p.am(0,b.y)
p=p.d
s=Math.cos(p)
r=Math.sin(p)
q.cx=V.ay(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}return q.cx},
$iZ:1}
U.cX.prototype={
gq:function(){var s=this.fx
return s==null?this.fx=D.D():s},
M:function(a){var s=this.fx
return s==null?null:s.B(a)},
a4:function(){return this.M(null)},
bc:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
a.ga2().gdr().n(0,q.gbS())
a.ga2().gdO().n(0,q.gbU())
a.ga2().gcB().n(0,q.gbW())
s=a.gah()
r=s.f
s=r==null?s.f=D.D():r
s.n(0,q.geB())
s=a.gah()
r=s.d
s=r==null?s.d=D.D():r
s.n(0,q.geD())
s=a.gb_()
r=s.b
s=r==null?s.b=D.D():r
s.n(0,q.gfS())
s=a.gb_()
r=s.d
s=r==null?s.d=D.D():r
s.n(0,q.gfQ())
s=a.gb_()
r=s.c
s=r==null?s.c=D.D():r
s.n(0,q.gfO())
return!0},
aS:function(a){return new V.W(a.a,a.b)},
bT:function(a){var s=this
t.Z.a(a)
if(!s.d.t(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
bV:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aa(a.d)
if(s.a1(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aS(a.y.aa(r).P(0,2).ab(0,s.gau()))
p=n.c
p.sa8(0,-q.a*2.5+n.cy)
o=n.b
o.sa8(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aS(a.z.aa(r).P(0,2).ab(0,s.gau()))
n.a4()},
bX:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a1(s)>0.0001){r.c.sV(-r.dx.a*10*2.5)
r.b.sV(-r.dx.b*10*2.5)
r.a4()}},
eC:function(a){var s=this
if(t.r.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eE:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.t(0,a.x.b))return
s=a.c
r=a.d
q=n.aS(a.y.aa(r).P(0,2).ab(0,s.gau()))
p=n.c
p.sa8(0,-q.a*2.5+n.cy)
o=n.b
o.sa8(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aS(a.z.aa(r).P(0,2).ab(0,s.gau()))
n.a4()},
fT:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fR:function(a){var s,r,q,p,o,n=this
t.aM.a(a)
if(!n.cx)return
if(n.ch){s=a.y.aa(a.d)
if(s.a1(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aS(a.y.aa(r).P(0,2).ab(0,s.gau()))
p=n.c
p.sa8(0,-q.a*2.5+n.cy)
o=n.b
o.sa8(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aS(a.z.aa(r).P(0,2).ab(0,s.gau()))
n.a4()},
fP:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a1(s)>0.0001){r.c.sV(-r.dx.a*10*2.5)
r.b.sV(-r.dx.b*10*2.5)
r.a4()}},
b0:function(a,b,c){var s,r,q,p=this,o=p.dy,n=b.e
if(o<n){p.dy=n
s=b.y
o=p.c
o.am(0,s)
n=p.b
n.am(0,s)
n=n.d
r=Math.cos(n)
q=Math.sin(n)
n=V.ay(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
o=o.d
r=Math.cos(o)
q=Math.sin(o)
p.fr=n.P(0,V.ay(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return p.fr},
$iZ:1}
U.cY.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.D():s},
M:function(a){var s=this.r
return s==null?null:s.B(a)},
bc:function(a){var s,r,q
if(this.a!=null)return!1
this.a=a
s=a.ga2()
r=s.e
s=r==null?s.e=D.D():r
r=this.geG()
s.n(0,r)
s=a.gah()
q=s.e;(q==null?s.e=D.D():q).n(0,r)
return!0},
eH:function(a){var s=this,r=s.b,q=s.a
if(!r.t(0,q==null?null:q.gaY(q).c))return
t.O.a(a)
r=s.d
q=r+a.x.b*0.01
if(r!==q){s.d=q
s.M(new D.z("zoom",r,q))}},
b0:function(a,b,c){var s,r=this,q=r.e,p=b.e
if(q<p){r.e=p
s=Math.pow(10,r.d)
r.f=V.ay(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return r.f},
$iZ:1}
M.ca.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.D():s},
S:function(a){var s=this.r
return s==null?null:s.B(a)},
b6:function(){return this.S(null)},
fq:function(a,b){var s,r,q,p,o
for(s=b.length,r=this.gR(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q].gq()
o=p.a;(o==null?p.a=[]:o).push(r)}this.S(new D.av())},
ft:function(a,b){var s,r
for(s=b.gL(b),r=this.gR();s.u();)s.gC(s).gq().N(0,r)
this.S(new D.aw())},
a9:function(a){var s,r,q=this
if(q.f)return
q.f=!0
for(s=q.a,s=new J.a6(s,s.length),r=H.U(s).c;s.u();)r.a(s.d).a9(a)
q.f=!1},
$ibp:1}
M.cc.prototype={
gq:function(){var s=this.r
return s==null?this.r=D.D():s},
S:function(a){var s=this.r
return s==null?null:s.B(a)},
b6:function(){return this.S(null)},
sbd:function(a){var s,r,q=this
if(a==null)a=new X.hO()
s=q.b
if(s!==a){if(s!=null)s.gq().N(0,q.gR())
r=q.b
q.b=a
a.gq().n(0,q.gR())
q.S(new D.z("camera",r,q.b))}},
sbi:function(a,b){var s,r,q=this
if(b==null)b=X.jX(null)
s=q.c
if(s!==b){if(s!=null)s.gq().N(0,q.gR())
r=q.c
q.c=b
b.gq().n(0,q.gR())
q.S(new D.z("target",r,q.c))}},
sbj:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gq().N(0,r.gR())
s=r.d
r.d=a
if(a!=null)a.gq().n(0,r.gR())
r.S(new D.z("technique",s,r.d))}},
a9:function(a){var s,r=this
a.cv(r.d)
s=r.c
if(s!=null)s.T(a)
s=r.b
if(s!=null)s.T(a)
s=r.e
s.am(0,a)
s.a9(a)
s=r.b
if(s!=null)s.aL(a)
a.cu()},
$ibp:1}
M.ck.prototype={
S:function(a){var s=this.y
return s==null?null:s.B(a)},
b6:function(){return this.S(null)},
eT:function(a,b){var s,r,q,p,o,n
for(s=b.length,r=this.gR(),q=0;q<b.length;b.length===s||(0,H.m)(b),++q){p=b[q]
o=p.z
if(o==null)o=p.z=new D.bF()
n=o.a;(n==null?o.a=[]:n).push(r)}this.S(new D.av())},
eV:function(a,b){var s,r
for(s=b.gL(b),r=this.gR();s.u();)s.gC(s).gq().N(0,r)
this.S(new D.aw())},
sbd:function(a){var s,r,q=this
if(a==null)a=X.kN(null)
s=q.b
if(s!==a){if(s!=null)s.gq().N(0,q.gR())
r=q.b
q.b=a
a.gq().n(0,q.gR())
q.S(new D.z("camera",r,q.b))}},
sbi:function(a,b){var s,r=this,q=r.c
if(q!==b){if(q!=null)q.gq().N(0,r.gR())
s=r.c
r.c=b
b.gq().n(0,r.gR())
r.S(new D.z("target",s,r.c))}},
sbj:function(a){var s,r=this,q=r.d
if(q!=a){if(q!=null)q.gq().N(0,r.gR())
s=r.d
r.d=a
if(a!=null)a.gq().n(0,r.gR())
r.S(new D.z("technique",s,r.d))}},
gq:function(){var s=this.y
return s==null?this.y=D.D():s},
a9:function(a){var s,r,q,p=this
a.cv(p.d)
s=p.c
if(s!=null)s.T(a)
s=p.b
if(s!=null)s.T(a)
s=p.d
if(s!=null)s.am(0,a)
for(s=p.e.a,r=new J.a6(s,s.length),q=H.U(r).c;r.u();)q.a(r.d).am(0,a)
for(s=new J.a6(s,s.length),r=H.U(s).c;s.u();)r.a(s.d).a9(a)
if(p.b!=null){a.cy.aH()
a.db.aH()}a.cu()},
$ibp:1}
A.hh.prototype={}
A.hi.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
ha:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
dq:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ad.prototype={
gan:function(a){var s=this.a?1:0
return s|(this.c?4:0)|0},
i:function(a){var s=this.a?1:0
return""+(s|(this.c?4:0)|0)},
t:function(a,b){var s
if(b==null)return!1
if(!(b instanceof A.ad))return!1
if(this.a===b.a)s=this.c===b.c
else s=!1
return s}}
A.cB.prototype={
ea:function(d1,d2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4=null,c5=u.C,c6="Required uniform value, ",c7=", was not defined or used in shader.",c8=c3.x,c9=new P.aY(""),d0=c8.fr
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
A.nH(c8,c9)
A.nJ(c8,c9)
A.nI(c8,c9)
A.nL(c8,c9)
A.nM(c8,c9)
A.nK(c8,c9)
A.nN(c8,c9)
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
c3.dH(0,s.charCodeAt(0)==0?s:s,A.nG(c8))
c3.y=c3.ga5(c3).h(0,"posAttr")
c3.Q=c3.ga5(c3).h(0,"normAttr")
c3.z=c3.ga5(c3).h(0,"binmAttr")
c3.ch=c3.ga5(c3).h(0,"txt2DAttr")
c3.cx=c3.ga5(c3).h(0,"txtCubeAttr")
c3.cy=c3.ga5(c3).h(0,"bendAttr")
if(c8.dy)c3.fy=t.j.a(c3.gA().H(0,"invViewMat"))
if(d0)c3.db=t.j.a(c3.gA().H(0,"objMat"))
if(r)c3.dx=t.j.a(c3.gA().H(0,"viewObjMat"))
d0=t.j
c3.fr=d0.a(c3.gA().H(0,"projViewObjMat"))
if(c8.go)c3.dy=d0.a(c3.gA().H(0,"viewMat"))
if(c8.x1)c3.go=t.Q.a(c3.gA().H(0,"txt2DMat"))
if(c8.x2)c3.id=d0.a(c3.gA().H(0,"txtCubeMat"))
if(c8.y1)c3.k1=d0.a(c3.gA().H(0,"colorMat"))
c3.k3=[]
s=c8.aX
if(s>0){c3.k2=t.v.a(c3.gA().H(0,"bendMatCount"))
for(n=0;n<s;++n){r=c3.k3
m=c3.r
if(m==null)H.f(P.d(c5))
q="bendValues["+n+"].mat"
l=m.h(0,q)
if(l==null)H.f(P.d(c6+q+c7))
r.push(d0.a(l))}}d0=c8.a
if(d0.a)c3.k4=t.g.a(c3.gA().H(0,"emissionClr"))
if(d0.c)c3.r2=t.a.a(c3.gA().H(0,"emissionTxt"))
d0=c8.b
if(d0.a)c3.rx=t.g.a(c3.gA().H(0,"ambientClr"))
if(d0.c)c3.x1=t.a.a(c3.gA().H(0,"ambientTxt"))
d0=c8.c
if(d0.a)c3.x2=t.g.a(c3.gA().H(0,"diffuseClr"))
if(d0.c)c3.y2=t.a.a(c3.gA().H(0,"diffuseTxt"))
d0=c8.d
if(d0.a)c3.aX=t.g.a(c3.gA().H(0,"invDiffuseClr"))
if(d0.c)c3.bv=t.a.a(c3.gA().H(0,"invDiffuseTxt"))
d0=c8.e
s=d0.a
if(!s)r=d0.c
else r=!0
if(r){c3.dv=t.n.a(c3.gA().H(0,"shininess"))
if(s)c3.dt=t.g.a(c3.gA().H(0,"specularClr"))
if(d0.c)c3.du=t.a.a(c3.gA().H(0,"specularTxt"))}if(c8.f.c)c3.dw=t.a.a(c3.gA().H(0,"bumpTxt"))
if(c8.db){d0=t.a
c3.dz=d0.a(c3.gA().H(0,"envSampler"))
s=c8.r
if(s.a)c3.dA=t.g.a(c3.gA().H(0,"reflectClr"))
if(s.c)c3.dB=d0.a(c3.gA().H(0,"reflectTxt"))
s=c8.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){c3.dC=t.n.a(c3.gA().H(0,"refraction"))
if(r)c3.dD=t.g.a(c3.gA().H(0,"refractClr"))
if(s.c)c3.dE=d0.a(c3.gA().H(0,"refractTxt"))}}d0=c8.y
if(d0.a)c3.dF=t.n.a(c3.gA().H(0,"alpha"))
if(d0.c)c3.dG=t.a.a(c3.gA().H(0,"alphaTxt"))
if(c8.k1){d0=c8.z
s=d0.length
if(s!==0){r=t.S
c3.cc=P.N(r,t.W)
c3.cd=P.N(r,t.J)
for(r=t.v,q=t.g,p=t.n,k=0;k<d0.length;d0.length===s||(0,H.m)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.eQ(l,d,c,a3,a2,a1))}c3.cd.m(0,i,g)
o=c3.cc
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.m(0,i,r.a(l))}}d0=c8.Q
s=d0.length
if(s!==0){r=t.S
c3.ce=P.N(r,t.W)
c3.cf=P.N(r,t.L)
for(r=t.v,q=t.g,p=t.G,k=0;k<d0.length;d0.length===s||(0,H.m)(d0),++k){j=d0[k]
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
g.push(new A.eR(a6,a5,a4,l,d,a7))}c3.cf.m(0,i,g)
o=c3.ce
m=c3.r
if(m==null)H.f(P.d(c5))
f=h+"Count"
l=m.h(0,f)
if(l==null)H.f(P.d(c6+f+c7))
o.m(0,i,r.a(l))}}d0=c8.ch
s=d0.length
if(s!==0){r=t.S
c3.cg=P.N(r,t.W)
c3.ci=P.N(r,t.U)
for(r=t.v,q=t.g,p=t.Q,o=t.a,f=t.F,e=t.n,k=0;k<d0.length;d0.length===s||(0,H.m)(d0),++k){j=d0[k]
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
a3=a2}g.push(new A.eU(l,d,b4,c,a7,b5,b6,a3,a2,a1))}c3.ci.m(0,i,g)
a8=c3.cg
m=c3.r
if(m==null)H.f(P.d(c5))
a9=h+"Count"
l=m.h(0,a9)
if(l==null)H.f(P.d(c6+a9+c7))
a8.m(0,i,r.a(l))}}c8=c8.cx
d0=c8.length
if(d0!==0){s=t.S
c3.cj=P.N(s,t.W)
c3.ck=P.N(s,t.R)
for(s=t.v,r=t.g,q=t.n,p=t.F,o=t.G,k=0;k<c8.length;c8.length===d0||(0,H.m)(c8),++k){j=c8[k]
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
g.push(new A.eX(l,d,c,b,a6,a5,c0,b9,b6,c2,c1,a3,a2,a1,a7,b5))}c3.ck.m(0,i,g)
f=c3.cj
m=c3.r
if(m==null)H.f(P.d(c5))
e=h+"Count"
l=m.h(0,e)
if(l==null)H.f(P.d(c6+e+c7))
f.m(0,i,s.a(l))}}}},
ae:function(a,b){if(b!=null&&b.d>=6)if(a!=null)a.cG(b)}}
A.ba.prototype={
i:function(a){return"barLight"+this.a}}
A.be.prototype={
i:function(a){return"dirLight"+this.a}}
A.bo.prototype={
i:function(a){return"pointLight"+this.a}}
A.bq.prototype={
i:function(a){return"spotLight"+this.a}}
A.i0.prototype={
i:function(a){return this.bu}}
A.eQ.prototype={}
A.eR.prototype={}
A.eU.prototype={}
A.eX.prototype={}
A.bR.prototype={
dH:function(a,b,c){var s,r,q,p,o,n=this
n.c=b
n.d=c
s=n.cU(b,35633)
r=n.cU(n.d,35632)
q=n.a
p=q.createProgram()
p.toString
n.e=p
q.attachShader(n.gay(),s)
q.attachShader(n.gay(),r)
q.linkProgram(n.gay())
if(!H.lj(q.getProgramParameter(n.gay(),35714))){o=q.getProgramInfoLog(n.gay())
if(o==null)o="undefined log error"
q.deleteProgram(n.e)
H.f(P.d("Failed to link shader: "+o))}n.fK()
n.fM()},
ga5:function(a){var s=this.f
if(s==null)throw H.c(P.d("Must initialize the shader prior to getting the attributes."))
return s},
gA:function(){var s=this.r
if(s==null)throw H.c(P.d(u.C))
return s},
gay:function(){var s=this.e
if(s==null)throw H.c(P.d(u.F))
return s},
T:function(a){a.a.useProgram(this.e)
this.ga5(this).ha()},
cU:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.lj(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.d('Error compiling shader "'+H.t(q)+'": '+s))}return q},
fK:function(){var s,r,q,p,o=this,n=u.F,m=[],l=o.a,k=H.jx(l.getProgramParameter(o.gay(),35721))
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
m.push(new A.hh(l,q,p))}o.f=new A.hi(m)},
fM:function(){var s,r,q,p,o,n,m=this,l=u.F,k=[],j=m.a,i=H.jx(j.getProgramParameter(m.gay(),35718))
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
k.push(m.h6(o,n,q,p))}m.r=new A.iX(k)},
aR:function(a,b,c){var s=this.a
if(a===1)return new A.cV(s,b,c)
else return A.k9(s,this.e,b,a,c)},
ew:function(a,b,c){var s=this.a
if(a===1)return new A.eV(s,b,c)
else return A.k9(s,this.e,b,a,c)},
ex:function(a,b,c){var s=this.a
if(a===1)return new A.eW(s,b,c)
else return A.k9(s,this.e,b,a,c)},
br:function(a,b){return new P.fl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
h6:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aR(b,c,d)
case 5121:return s.aR(b,c,d)
case 5122:return s.aR(b,c,d)
case 5123:return s.aR(b,c,d)
case 5124:return s.aR(b,c,d)
case 5125:return s.aR(b,c,d)
case 5126:return new A.eN(s.a,c,d)
case 35664:return new A.iT(s.a,c,d)
case 35665:return new A.eO(s.a,c,d)
case 35666:return new A.eP(s.a,c,d)
case 35667:return new A.iU(s.a,c,d)
case 35668:return new A.iV(s.a,c,d)
case 35669:return new A.iW(s.a,c,d)
case 35674:return new A.iY(s.a,c,d)
case 35675:return new A.eS(s.a,c,d)
case 35676:return new A.eT(s.a,c,d)
case 35678:return s.ew(b,c,d)
case 35680:return s.ex(b,c,d)
case 35670:throw H.c(s.br("BOOL",c))
case 35671:throw H.c(s.br("BOOL_VEC2",c))
case 35672:throw H.c(s.br("BOOL_VEC3",c))
case 35673:throw H.c(s.br("BOOL_VEC4",c))
default:throw H.c(P.d("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.cR.prototype={}
A.iR.prototype={}
A.iX.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
H:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.d("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.v()},
v:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.m)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.cV.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.iU.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.iV.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.iW.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.iS.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.eN.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.iT.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.eO.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.eP.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.iY.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.eS.prototype={
ac:function(a){var s=new Float32Array(H.dm(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.eT.prototype={
ac:function(a){var s=new Float32Array(H.dm(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.eV.prototype={
i:function(a){return"UniformSampler2D: "+this.c}}
A.eW.prototype={
cG:function(a){var s=a.d,r=this.a,q=this.d
if(s<6)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jw.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.co(q.b,b).co(q.d.co(q.c,b),c)
q=new V.V(p.a,p.b,p.c)
if(!J.a5(a.f,q)){a.f=q
q=a.a
if(q!=null)q.a3()}a.saZ(p.J())
q=1-b
s=1-c
s=new V.aU(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s)
if(!J.a5(a.cx,s)){a.cx=s
q=a.a
if(q!=null)q.a3()}},
$S:35}
F.al.prototype={
aO:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.d("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.d("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.gX().b.push(s)
s.b=b
b.gX().c.push(s)
s.c=c
c.gX().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gX().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a3()}},
ep:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.f2()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dK())return p
return q.J()},
er:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b5(0,n)
q=new V.B(o.a,o.b,o.c).J()
o=r.b5(0,n)
return q.be(new V.B(o.a,o.b,o.c).J()).J()},
c7:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.ep()
if(s==null){s=q.er()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a3()}return!0},
eo:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.f2()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dK())return p
return q.J()},
eq:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.C().toString
if(Math.abs(p-0)<1e-9){j=b.b5(0,e)
o=new V.B(j.a,j.b,j.c).J()
if(q.a-r.a<0)o=o.b1(0)}else{n=(j-s.b)/p
j=b.b5(0,e)
j=new V.V(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).b5(0,h)
o=new V.B(j.a,j.b,j.c).J()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b1(0)}m=l.d
if(m!=null){m=m.J()
o=m.be(o).J().be(m).J()}return o},
c5:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eo()
if(s==null){s=q.eq()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a3()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
D:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gas(p)
p=a+C.b.aj(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gas(o)
p=p+C.b.aj(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gas(o)
s=p+C.b.aj(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.v()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.v()
return s+((p==null?"-":p)+"}")},
v:function(){return this.D("")}}
F.hS.prototype={
e9:function(a,b){var s=this,r=a.a
if(r==null)throw H.c(P.d("May not create a line with a start vertex which is not attached to a shape."))
if(r!==b.a)throw H.c(P.d("May not create a line with vertices attached to different shapes."))
s.a=a
a.gat(a).b.push(s)
s.b=b
b.gat(b).c.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gat(r).b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a3()}},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
D:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gas(s)
s=a+C.b.aj(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gas(r)
return s+C.b.aj(C.c.i(r==null?-1:r),0)},
v:function(){return this.D("")}}
F.ik.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
D:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gas(s)
return a+C.b.aj(C.c.i(s),0)},
v:function(){return this.D("")}}
F.it.prototype={
gZ:function(){var s=this.a
return s==null?this.a=new F.u(this,[]):s},
gbA:function(a){var s=this.b
return s==null?this.b=new F.bS(this,[]):s},
gat:function(a){var s=this.c
return s==null?this.c=new F.cQ(this,[]):s},
gX:function(){var s=this.d
return s==null?this.d=new F.cP(this,[]):s},
gq:function(){var s=this.e
return s==null?this.e=D.D():s},
hh:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=null,b=d.e
if(b!=null)++b.d
a.gZ().U()
s=d.gZ().c.length
for(b=a.gZ().c,r=b.length,q=0;q<b.length;b.length===r||(0,H.m)(b),++q){p=b[q]
o=d.a
if(o==null)o=d.a=new F.u(d,[])
o.n(0,p.h4())}d.gZ().U()
for(b=a.gbA(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.m)(b),++q){n=b[q]
o=d.a
if(o==null)o=d.a=new F.u(d,[])
m=n.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
j=o[m]
m=d.b
o=(m==null?d.b=new F.bS(d,[]):m).a
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,j)
o=new F.ik()
if(j.a==null)H.f(P.d("May not create a point with a vertex which is not attached to a shape."))
o.a=j
m=j.b;(m==null?j.b=new F.j9([]):m).b.push(o)
m=o.a
if(m!=null){m=m.a
if(m!=null){l=m.b;(l==null?m.b=new F.bS(m,[]):l).b.push(o)}}o=o.a
if(o!=null){o=o.a
if(o!=null){o=o.e
if(o!=null)o.B(c)}}}for(b=a.gat(a).b,r=b.length,q=0;q<b.length;b.length===r||(0,H.m)(b),++q){i=b[q]
o=d.a
if(o==null)o=d.a=new F.u(d,[])
m=i.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.u(d,[]):m
m=i.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.c
o=(m==null?d.c=new F.cQ(d,[]):m).a
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,h)
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,g)
new F.hS().e9(h,g)}for(b=a.gX().b,r=b.length,q=0;q<b.length;b.length===r||(0,H.m)(b),++q){f=b[q]
o=d.a
if(o==null)o=d.a=new F.u(d,[])
m=f.a
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
h=o[m]
m=d.a
o=m==null?d.a=new F.u(d,[]):m
m=f.b
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
g=o[m]
m=d.a
o=m==null?d.a=new F.u(d,[]):m
m=f.c
if(m==null)m=c
else{l=m.a
if(l!=null){k=l.a;(k==null?l.a=new F.u(l,[]):k).U()}m=m.e}m=(m==null?0:m)+s
o=o.c
if(m>=o.length)return H.e(o,m)
e=o[m]
m=d.d
o=(m==null?d.d=new F.cP(d,[]):m).a
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,h)
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,g)
m=o.a;(m==null?o.a=new F.u(o,[]):m).n(0,e)
new F.al().aO(h,g,e)}b=d.e
if(b!=null)b.aJ(0)},
aC:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gX().aC()||!1
if(!r.gZ().aC())s=!1
q=r.e
if(q!=null)q.aJ(0)
return s},
di:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=34962,e={},d=h.gZ().c.length,c=$.ap(),b=a1.a,a=(b&c.a)!==0?1:0
if((b&$.b7().a)!==0)++a
if((b&$.b6().a)!==0)++a
if((b&$.by().a)!==0)++a
if((b&$.b8().a)!==0)++a
if((b&$.du().a)!==0)++a
if((b&$.dv().a)!==0)++a
if((b&$.c5().a)!==0)++a
if((b&$.b5().a)!==0)++a
s=a1.gcH(a1)
r=P.hU(d*s,0,!1)
e.a=0
q=P.ml(a,new F.iu(e,h,a1,s*4,d,s,r))
c=a0.a
b=c.createBuffer()
b.toString
c.bindBuffer(f,b)
c.bufferData(f,new Float32Array(H.dm(r)),35044)
c.bindBuffer(f,g)
p=new Z.bC(new Z.f4(f,b),[],q,a1)
if(h.gbA(h).b.length!==0){o=[]
n=0
while(!0){b=h.b
if(b==null){b=h.b=new F.bS(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
b=b[n].a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.u(m,[]):l).U()}b=b.e}o.push(b==null?0:b);++n}k=Z.kb(c,34963,o)
p.b.push(new Z.co(0,o.length,k))}if(h.gat(h).b.length!==0){o=[]
n=0
while(!0){b=h.c
if(b==null){b=h.c=new F.cQ(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
j=b[n]
b=j.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.u(m,[]):l).U()}b=b.e}o.push(b==null?0:b)
b=j.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.u(m,[]):l).U()}b=b.e}o.push(b==null?0:b);++n}k=Z.kb(c,34963,o)
p.b.push(new Z.co(1,o.length,k))}if(h.gX().b.length!==0){o=[]
n=0
while(!0){b=h.d
if(b==null){b=h.d=new F.cP(h,[])
m=b}else m=b
if(!(n<b.b.length))break
b=m.b
if(n>=b.length)return H.e(b,n)
i=b[n]
b=i.a
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.u(m,[]):l).U()}b=b.e}o.push(b==null?0:b)
b=i.b
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.u(m,[]):l).U()}b=b.e}o.push(b==null?0:b)
b=i.c
if(b==null)b=g
else{m=b.a
if(m!=null){l=m.a;(l==null?m.a=new F.u(m,[]):l).U()}b=b.e}o.push(b==null?0:b);++n}k=Z.kb(c,34963,o)
p.b.push(new Z.co(4,o.length,k))}return p},
i:function(a){var s=this,r="   ",q=[]
if(s.gZ().c.length!==0){q.push("Vertices:")
q.push(s.gZ().D(r))}if(s.gbA(s).b.length!==0){q.push("Points:")
q.push(s.gbA(s).D(r))}if(s.gat(s).b.length!==0){q.push("Lines:")
q.push(s.gat(s).D(r))}if(s.gX().b.length!==0){q.push("Faces:")
q.push(s.gX().D(r))}return C.a.j(q,"\n")},
a3:function(){var s=this.e
return s==null?null:s.B(null)}}
F.iu.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fZ(a),f=g.gcH(g),e=h.a,d=e.a
for(s=h.e,r=h.r,q=r.length,p=h.f,o=h.b,n=0;n<s;++n){m=o.a
m=(m==null?o.a=new F.u(o,[]):m).c
if(n>=m.length)return H.e(m,n)
l=m[n].hg(g)
k=e.a+n*p
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k>=q)return H.e(r,k)
r[k]=i;++k}}e.a+=f
return new Z.c7(g,f,d*4,h.d)},
$S:48}
F.cP.prototype={
fW:function(a){var s,r,q,p,o,n,m=[],l=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
o=s.a;(o==null?s.a=new F.u(s,[]):o).n(0,l)
o=s.a;(o==null?s.a=new F.u(s,[]):o).n(0,q)
o=s.a;(o==null?s.a=new F.u(s,[]):o).n(0,p)
n=new F.al()
n.aO(l,q,p)
m.push(n)}return m},
fX:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=[]
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
if(n){(l==null?s.a=new F.u(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,h)
f=new F.al()
f.aO(k,j,h)
e.push(f)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,k)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,g)
f=new F.al()
f.aO(k,h,g)
e.push(f)}else{(l==null?s.a=new F.u(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,h)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,g)
f=new F.al()
f.aO(j,h,g)
e.push(f)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,j)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,g)
l=s.a;(l==null?s.a=new F.u(s,[]):l).n(0,k)
f=new F.al()
f.aO(j,g,k)
e.push(f)}n=!n}p=!p}return e},
gl:function(a){return this.b.length},
aC:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].c7())q=!1
return q},
c6:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.m)(s),++p)if(!s[p].c5())q=!1
return q},
i:function(a){return this.v()},
D:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].D(a))
return C.a.j(p,"\n")},
v:function(){return this.D("")}}
F.cQ.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.v()},
D:function(a){var s,r=[],q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.e(q,s)
r.push(q[s].D(a+(""+s+". ")))}return C.a.j(r,"\n")},
v:function(){return this.D("")}}
F.bS.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.v()},
D:function(a){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].D(a))
return C.a.j(p,"\n")},
v:function(){return this.D("")}}
F.cZ.prototype={
c9:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.j4(s.cx,p,m,r,q,o,n,a,l)},
h4:function(){return this.c9(null)},
gat:function(a){var s=this.c
return s==null?this.c=new F.j8([],[]):s},
gX:function(){var s=this.d
return s==null?this.d=new F.j5([],[],[]):s},
gas:function(a){var s=this.a
if(s!=null)s.gZ().U()
return this.e},
saZ:function(a){var s
if(!J.a5(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a3()}},
hg:function(a){var s,r,q,p,o=this,n=null
if(a.t(0,$.ap())){s=o.f
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.t(0,$.b7())){s=o.r
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,1,0]:s}else if(a.t(0,$.b6())){s=o.x
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,1]:s}else if(a.t(0,$.by())){s=o.y
s=s==null?n:[s.a,s.b]
return s==null?[0,0]:s}else if(a.t(0,$.b8())){s=o.z
s=s==null?n:[s.a,s.b,s.c]
return s==null?[0,0,0]:s}else if(a.t(0,$.du())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return[q,p,s==null?1:s]}else if(a.t(0,$.dv())){s=o.Q
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[1,1,1,1]:s}else if(a.t(0,$.c5()))return[o.ch]
else if(a.t(0,$.b5())){s=o.cx
s=s==null?n:[s.a,s.b,s.c,s.d]
return s==null?[-1,-1,-1,-1]:s}else return[]},
c7:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.f2()
p.gX().F(0,new F.jb(o))
p.r=o.a.J()
if(r){s.a3()
o=s.e
if(o!=null)o.aJ(0)}return!0},
c5:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.f2()
p.gX().F(0,new F.ja(o))
p.x=o.a.J()
if(r){s.a3()
o=s.e
if(o!=null)o.aJ(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.v()},
D:function(a){var s,r,q=this,p=null,o="-",n=[]
n.push(C.b.aj(C.c.i(q.e),0))
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
n.push(V.x(q.ch,3,0))
s=q.cx
s=s==null?p:s.v()
n.push(s==null?o:s)
r=C.a.j(n,", ")
return a+"{"+r+"}"},
v:function(){return this.D("")}}
F.jb.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:7}
F.ja.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:7}
F.u.prototype={
U:function(){},
n:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.d("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a3()
return!0},
bs:function(a,b,c,d,e,f){var s=F.j4(a,null,b,c,null,d,e,f,0)
this.n(0,s)
return s},
gl:function(a){return this.c.length},
aC:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].c7()
return!0},
c6:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)s[q].c5()
return!0},
h0:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.J()
if(!J.a5(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.B(null)}}}}}return!0},
i:function(a){return this.v()},
D:function(a){var s,r,q,p
this.U()
s=[]
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.m)(r),++p)s.push(r[p].D(a))
return C.a.j(s,"\n")},
v:function(){return this.D("")}}
F.j5.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
F:function(a,b){var s=this
C.a.F(s.b,b)
C.a.F(s.c,new F.j6(s,b))
C.a.F(s.d,new F.j7(s,b))},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].D(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].D(""))
return C.a.j(p,"\n")}}
F.j6.prototype={
$1:function(a){if(!J.a5(a.a,this.a))this.b.$1(a)},
$S:7}
F.j7.prototype={
$1:function(a){var s=this.a
if(!J.a5(a.a,s)&&!J.a5(a.b,s))this.b.$1(a)},
$S:7}
F.j8.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].D(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].D(""))
return C.a.j(p,"\n")}}
F.j9.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.v()},
v:function(){var s,r,q,p=[]
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.m)(s),++q)p.push(s[q].D(""))
return C.a.j(p,"\n")}}
O.e1.prototype={
gq:function(){var s=this.fr
return s==null?this.fr=D.D():s},
O:function(a){var s=this.fr
return s==null?null:s.B(a)},
b9:function(){return this.O(null)},
d0:function(a){this.a=null
this.O(a)},
fG:function(){return this.d0(null)},
eN:function(a,b){return this.O(new D.av())},
eP:function(a,b){return this.O(new D.aw())},
gdM:function(){var s=this,r=s.dx
if(r==null){r=new D.ct([],[],[],[],[])
r.cF(r.geK(),r.gfj(),r.gfn())
r.gq().n(0,s.gd_())
r.gdL().n(0,s.gaz())
s.dx=r}return r},
gc4:function(){var s=this.r
return s==null?this.r=O.e2(this,"ambient"):s},
gcb:function(){var s=this.x
return s==null?this.x=O.e2(this,"diffuse"):s},
gbl:function(){var s=this.z
return s==null?this.z=new O.i3(new V.M(0,0,0),this,"specular",new A.ad(!1,!1,!1)):s},
gdj:function(){var s=this.Q
return s==null?this.Q=new O.i_(this,"bump",new A.ad(!1,!1,!1)):s},
gdU:function(){var s=this.cx
return s==null?this.cx=O.e2(this,"reflect"):s},
cS:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=t.y,a1=new H.R(a0),a2=b.dx
a2=a2==null?a:a2.e
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.m)(a2),++r){q=a2[r]
p=q.gar()
o=a1.h(0,q.gar())
a1.m(0,p,o==null?1:o)}n=[]
a1.F(0,new O.i4(b,n))
C.a.b4(n,new O.i5())
m=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.f
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.m)(a2),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=[]
m.F(0,new O.i6(b,l))
C.a.b4(l,new O.i7())
k=new H.R(a0)
a2=b.dx
a2=a2==null?a:a2.r
if(a2==null)a2=[]
s=a2.length
r=0
for(;r<a2.length;a2.length===s||(0,H.m)(a2),++r){q=a2[r]
p=q.gar()
o=k.h(0,q.gar())
k.m(0,p,o==null?1:o)}j=[]
k.F(0,new O.i8(b,j))
C.a.b4(j,new O.i9())
i=new H.R(a0)
a0=b.dx
a0=a0==null?a:a0.x
if(a0==null)a0=[]
a2=a0.length
r=0
for(;r<a0.length;a0.length===a2||(0,H.m)(a0),++r){q=a0[r]
s=q.gar()
p=i.h(0,q.gar())
i.m(0,s,p==null?1:p)}h=[]
i.F(0,new O.ia(b,h))
C.a.b4(h,new O.ib())
a0=C.c.a_(b.e.a.length+3,4)
if(b.dy==null)b.dy=new O.i1(new V.aL(0,0,0,0))
a2=b.f
a2=(a2==null?b.f=O.e2(b,"emission"):a2).c
s=b.gc4().c
p=b.gcb().c
o=b.y
o=(o==null?b.y=O.e2(b,"invDiffuse"):o).c
g=b.gbl().c
f=b.gdj().c
e=b.gdU().c
d=b.cy
d=(d==null?b.cy=new O.i2(new V.M(0,0,0),b,"refract",new A.ad(!1,!1,!1)):d).c
c=b.db
return A.mn(!1,!1,!1,!1,a0*4,a2,s,p,o,g,f,e,d,(c==null?b.db=new O.hZ(b,"alpha",new A.ad(!1,!1,!1)):c).c,n,l,j,h)},
ad:function(a,b){if(b!=null)if(!C.a.w(a,b)){b.a=a.length
a.push(b)}},
am:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aq(m==null?[]:m)
s=H.U(m).c
for(;m.u();){r=s.a(m.d)
q=$.j3
if(q==null)q=$.j3=new V.B(0,0,1)
r.c=q
p=$.j2
r.d=p==null?$.j2=new V.B(0,1,0):p
p=$.j1
r.e=p==null?$.j1=new V.B(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.bE(q).J()
r.d=n.bE(r.d).J()
r.e=n.bE(r.e).J()}}},
dV:function(a9,b0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7=null,a8=a6.a
if(a8==null){s=a6.cS()
r=s.bu
a8=t.d1.a(a9.fr.h(0,r))
if(a8==null){q=a9.a
p=t.S
o=t.W
a8=new A.cB(s,[],P.N(p,o),P.N(p,t.J),P.N(p,o),P.N(p,t.L),P.N(p,o),P.N(p,t.U),P.N(p,o),P.N(p,t.R),q,r)
a8.ea(s,q)
a9.da(a8)}a8=a6.a=a8
b0.e=null}n=a8.x
m=n.bv
s=b0.e
if(!(s instanceof Z.bC))s=b0.e=null
if(s==null||!s.d.t(0,m)){s=n.k4
if(s){r=b0.d
if(r!=null)r.aC()}r=n.r1
if(r){q=b0.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gX().c6()
q.gZ().c6()
q=q.e
if(q!=null)q.aJ(0)}}q=n.rx
if(q){p=b0.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.gZ().h0()
p=p.e
if(p!=null)p.aJ(0)}}p=b0.d
l=p==null?a7:p.di(new Z.f5(a9.a),m)
if(l==null)return
p=l.aE($.ap())
if(p!=null){o=a8.y
o=o==null?a7:o.c
p.e=o==null?0:o}if(s){s=l.aE($.b7())
if(s!=null){p=a8.Q
p=p==null?a7:p.c
s.e=p==null?1:p}}if(r){s=l.aE($.b6())
if(s!=null){r=a8.z
r=r==null?a7:r.c
s.e=r==null?2:r}}if(n.r2){s=l.aE($.by())
if(s!=null){r=a8.ch
r=r==null?a7:r.c
s.e=r==null?3:r}}if(q){s=l.aE($.b8())
if(s!=null){r=a8.cx
r=r==null?a7:r.c
s.e=r==null?4:r}}if(n.ry){s=l.aE($.b5())
if(s!=null){r=a8.cy
r=r==null?a7:r.c
s.e=r==null?5:r}}b0.e=l}k=[]
a8.T(a9)
if(n.fr){s=a9.dx
s=s.gY(s)
r=a8.db
if(r!=null)r.ac(s.a7(0,!0))}if(n.fx){s=a9.cx
if(s==null){s=a9.db
r=a9.dx
r=a9.cx=s.gY(s).P(0,r.gY(r))
s=r}r=a8.dx
if(r!=null)r.ac(s.a7(0,!0))}s=a9.ch
if(s==null){s=a9.dx
s=a9.ch=a9.ghu().P(0,s.gY(s))}r=a8.fr
if(r!=null)r.ac(s.a7(0,!0))
if(n.go){s=a9.db
s=s.gY(s)
r=a8.dy
if(r!=null)r.ac(s.a7(0,!0))}if(n.x1){s=$.kK
if(s==null){s=new V.cE(1,0,0,0,1,0,0,0,1)
$.kK=s}r=a8.go
if(r!=null)r.ac(s.a7(0,!0))}if(n.x2){s=V.a9()
r=a8.id
if(r!=null)r.ac(s.a7(0,!0))}if(n.y1){s=V.a9()
r=a8.k1
if(r!=null)r.ac(s.a7(0,!0))}if(n.aX>0){s=a6.e.a
j=s.length
r=a8.k2
if(r!=null)r.a.uniform1i(r.d,j)
for(i=0;i<j;++i){if(i>=s.length)return H.e(s,i)
r=s[i]
q=a8.k3
if(i>=q.length)return H.e(q,i)
q=q[i]
h=new Float32Array(H.dm(r.a7(0,!0)))
q.a.uniformMatrix4fv(q.d,!1,h)}}s=n.a
if(s.a){r=a6.f
r=r==null?a7:r.f
if(r==null)r=new V.M(0,0,0)
q=a8.k4
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.f
a6.ad(k,s==null?a7:s.e)
s=a6.f
s=s==null?a7:s.e
a8.ae(a8.r2,s)}if(n.k1){s=n.b
if(s.a){r=a6.r
r=r==null?a7:r.f
if(r==null)r=new V.M(0,0,0)
q=a8.rx
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.r
a6.ad(k,s==null?a7:s.e)
s=a6.r
s=s==null?a7:s.e
a8.ae(a8.x1,s)}s=n.c
if(s.a){r=a6.x
r=r==null?a7:r.f
if(r==null)r=new V.M(0,0,0)
q=a8.x2
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.x
a6.ad(k,s==null?a7:s.e)
s=a6.x
s=s==null?a7:s.e
a8.ae(a8.y2,s)}s=n.d
if(s.a){r=a6.y
r=r==null?a7:r.f
if(r==null)r=new V.M(0,0,0)
q=a8.aX
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.y
a6.ad(k,s==null?a7:s.e)
s=a6.y
s=s==null?a7:s.e
a8.ae(a8.bv,s)}s=n.e
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.z
q=q==null?a7:q.ch
if(q==null)q=100
p=a8.dv
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.z
r=r==null?a7:r.f
if(r==null)r=new V.M(1,1,1)
q=a8.dt
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.z
a6.ad(k,s==null?a7:s.e)
s=a6.z
s=s==null?a7:s.e
a8.ae(a8.du,s)}s=n.z
if(s.length>0){g=new H.R(t.y)
r=a6.dx
r=r==null?a7:r.e
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.m)(r),++f){e=r[f]
d=e.gar()
c=g.h(0,d)
if(c==null)c=0
g.m(0,d,c+1)
p=a8.cd.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ghK()
o=$.aA
p=p.bk(o==null?$.aA=new V.V(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghP()
o=$.aA
p=p.bk(o==null?$.aA=new V.V(0,0,0):o)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaD(e)
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(e.gds()){p=e.gdd()
o=b.e
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gde()
o=b.f
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdf()
o=b.r
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.m)(s),++f){q=s[f].a
j=g.h(0,q)
if(j==null)j=0
q=a8.cc.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.Q
if(s.length>0){r=a9.db
a=r.gY(r)
a0=new H.R(t.y)
r=a6.dx
r=r==null?a7:r.f
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.m)(r),++f){e=r[f]
c=a0.h(0,0)
if(c==null)c=0
a0.m(0,0,c+1)
p=a8.cf.h(0,0)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=a.bE(e.c).J()
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.b
o=b.f
o.a.uniform3f(o.d,p.a,p.b,p.c)}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.m)(s),++f){q=s[f].a
j=a0.h(0,q)
if(j==null)j=0
q=a8.ce.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.ch
if(s.length>0){r=a9.db
a=r.gY(r)
a1=new H.R(t.y)
r=a6.dx
r=r==null?a7:r.r
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.m)(r),++f){e=r[f]
d=e.gar()
c=a1.h(0,d)
if(c==null)c=0
a1.m(0,d,c+1)
p=a8.ci.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
a2=a.P(0,e.gY(e))
p=e.gY(e)
o=$.aA
p=p.bk(o==null?$.aA=new V.V(0,0,0):o)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aA
p=a2.bk(p==null?$.aA=new V.V(0,0,0):p)
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaD(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaK()
p=a2.cm(0)
o=b.d
if(o!=null){h=new Float32Array(H.dm(new V.cE(p.a,p.b,p.c,p.e,p.f,p.r,p.y,p.z,p.Q).a7(0,!0)))
o.a.uniformMatrix3fv(o.d,!1,h)}e.gaK()
p=e.gaK()
if(!C.a.w(k,p)){p.a=k.length
k.push(p)}p=e.gaK()
o=p.gbf(p)
if(o){o=b.f
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}e.gb3()
p=e.ge1()
o=b.x
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb3()
if(!C.a.w(k,p)){p.a=k.length
k.push(p)}p=e.gb3()
o=p.gbf(p)
if(o){o=b.r
if(o!=null){a3=p.d
a4=o.a
o=o.d
if(a3<6)a4.uniform1i(o,0)
else a4.uniform1i(o,p.a)}}if(e.gds()){p=e.gdd()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gde()
o=b.z
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdf()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.m)(s),++f){q=s[f].a
j=a1.h(0,q)
if(j==null)j=0
q=a8.cg.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}s=n.cx
if(s.length>0){r=a9.db
a=r.gY(r)
a5=new H.R(t.y)
r=a6.dx
r=r==null?a7:r.x
if(r==null)r=[]
q=r.length
f=0
for(;f<r.length;r.length===q||(0,H.m)(r),++f){e=r[f]
d=e.gar()
c=a5.h(0,d)
if(c==null)c=0
a5.m(0,d,c+1)
p=a8.ck.h(0,d)
if(p==null)p=[]
if(c>>>0!==c||c>=p.length)return H.e(p,c)
b=p[c]
p=e.ght(e)
o=b.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghN(e).J()
o=b.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=a.bk(e.ght(e))
o=b.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gaD(e)
o=b.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
e.gaK()
p=e.gcB()
o=b.f
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.gcw(e)
o=b.r
if(o!=null)o.a.uniform3f(o.d,p.a,p.b,p.c)
p=e.ghY()
o=b.x
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghZ()
o=b.y
if(o!=null)o.a.uniform1f(o.d,p)
e.gaK()
p=e.gaK()
if(!C.a.w(k,p)){p.a=k.length
k.push(p)}p=e.gaK()
o=p.gbf(p)
if(o){o=b.dx
if(o!=null){a3=p.gbf(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gas(p))}}e.gb3()
p=e.ge1()
o=b.z
if(o!=null)o.a.uniform4f(o.d,p.a,p.b,p.c,p.d)
p=e.gb3()
if(!C.a.w(k,p)){p.a=k.length
k.push(p)}p=e.gb3()
o=p.gbf(p)
if(o){o=b.dy
if(o!=null){a3=p.gbf(p)
a4=o.a
o=o.d
if(!a3)a4.uniform1i(o,0)
else a4.uniform1i(o,p.gas(p))}}if(e.ghO()){p=e.ghM()
o=b.Q
if(o!=null)o.a.uniform1f(o.d,p)
p=e.ghL()
o=b.ch
if(o!=null)o.a.uniform1f(o.d,p)}if(e.gds()){p=e.gdd()
o=b.cx
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gde()
o=b.cy
if(o!=null)o.a.uniform1f(o.d,p)
p=e.gdf()
o=b.db
if(o!=null)o.a.uniform1f(o.d,p)}}for(r=s.length,f=0;f<s.length;s.length===r||(0,H.m)(s),++f){q=s[f].a
j=a5.h(0,q)
if(j==null)j=0
q=a8.cj.h(0,q)
if(q!=null)q.a.uniform1i(q.d,j)}}}if(n.f.c){s=a6.Q
a6.ad(k,s==null?a7:s.e)
s=a6.Q
s=s==null?a7:s.e
a8.ae(a8.dw,s)}if(n.dy){s=a9.Q
if(s==null){s=a9.db
s=a9.Q=s.gY(s).cm(0)}r=a8.fy
if(r!=null)r.ac(s.a7(0,!0))}if(n.db){a6.ad(k,a6.ch)
s=a6.ch
a8.ae(a8.dz,s)
s=n.r
if(s.a){r=a6.cx
r=r==null?a7:r.f
if(r==null)r=new V.M(1,1,1)
q=a8.dA
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.cx
a6.ad(k,s==null?a7:s.e)
s=a6.cx
s=s==null?a7:s.e
a8.ae(a8.dB,s)}s=n.x
r=s.a
if(!r)q=s.c
else q=!0
if(q){q=a6.cy
q=q==null?a7:q.ch
if(q==null)q=0
p=a8.dC
if(p!=null)p.a.uniform1f(p.d,q)}if(r){r=a6.cy
r=r==null?a7:r.f
if(r==null)r=new V.M(1,1,1)
q=a8.dD
if(q!=null)q.a.uniform3f(q.d,r.a,r.b,r.c)}if(s.c){s=a6.cy
a6.ad(k,s==null?a7:s.e)
s=a6.cy
s=s==null?a7:s.e
a8.ae(a8.dE,s)}}s=n.y
r=s.a
q=!r
if(q)p=s.c
else p=!0
if(p){if(r){r=a6.db
r=r==null?a7:r.f
if(r==null)r=1
p=a8.dF
if(p!=null)p.a.uniform1f(p.d,r)}if(s.c){r=a6.db
a6.ad(k,r==null?a7:r.e)
r=a6.db
r=r==null?a7:r.e
a8.ae(a8.dG,r)}r=a9.a
r.enable(3042)
r.blendFunc(770,771)}for(i=0;i<k.length;++i)k[i].T(a9)
r=t.D.a(b0.e)
r.T(a9)
r.a9(a9)
r.aL(a9)
if(q)s=s.c
else s=!0
if(s)a9.a.disable(3042)
for(s=a9.a,i=0;i<k.length;++i){r=k[i]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(34067,a7)}}s.useProgram(a7)
a8.ga5(a8).dq()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cS().bu}}
O.i4.prototype={
$2:function(a,b){return this.b.push(new A.ba(a,C.c.a_(b+3,4)*4))},
$S:8}
O.i5.prototype={
$2:function(a,b){return C.c.af(a.a,b.a)},
$S:40}
O.i6.prototype={
$2:function(a,b){return this.b.push(new A.be(a,C.c.a_(b+3,4)*4))},
$S:8}
O.i7.prototype={
$2:function(a,b){return C.c.af(a.a,b.a)},
$S:41}
O.i8.prototype={
$2:function(a,b){return this.b.push(new A.bo(a,C.c.a_(b+3,4)*4))},
$S:8}
O.i9.prototype={
$2:function(a,b){return C.c.af(a.a,b.a)},
$S:42}
O.ia.prototype={
$2:function(a,b){return this.b.push(new A.bq(a,C.c.a_(b+3,4)*4))},
$S:8}
O.ib.prototype={
$2:function(a,b){return C.c.af(a.a,b.a)},
$S:43}
O.hZ.prototype={
aA:function(){var s,r=this
r.cI()
s=r.f
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.O(new D.z(r.b,s,1))}}}
O.cC.prototype={
O:function(a){return this.a.O(a)},
b9:function(){return this.O(null)},
aA:function(){},
c0:function(a){var s,r,q=this
if(!q.c.t(0,a)){s=q.c
if(!s.a)s=s.c
else s=!0
if(s){if(!a.a)s=a.c
else s=!0
r=!s}else r=!0
q.c=a
if(r)q.aA()
s=q.a
s.a=null
s.O(null)}},
saZ:function(a){var s,r=this,q=r.c
if(!q.c)r.c0(new A.ad(q.a,!1,!0))
q=r.e
if(q!==a){if(q!=null)q.gq().N(0,r.gaz())
s=r.e
r.e=a
a.gq().n(0,r.gaz())
r.a.O(new D.z(r.b+".textureCube",s,r.e))}}}
O.i_.prototype={}
O.cD.prototype={
d2:function(a){var s,r=this
if(!r.f.t(0,a)){s=r.f
r.f=a
r.a.O(new D.z(r.b+".color",s,a))}},
aA:function(){this.cI()
this.d2(new V.M(1,1,1))},
saD:function(a,b){this.c0(new A.ad(!0,!1,this.c.c))
this.d2(b)}}
O.i1.prototype={}
O.i2.prototype={
aA:function(){var s,r=this
r.cJ()
s=r.ch
$.C().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.O(new D.z(r.b+".refraction",s,1))}}}
O.i3.prototype={
d3:function(a){var s=this,r=s.ch
$.C().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.O(new D.z(s.b+".shininess",r,a))}},
aA:function(){this.cJ()
this.d3(100)}}
O.er.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.D():s},
O:function(a){var s=this.e
return s==null?null:s.B(a)},
b9:function(){return this.O(null)},
dV:function(a,b){var s,r,q,p,o,n,m=this,l=null
if(m.a==null){s=t.da.a(a.fr.h(0,"Skybox"))
if(s==null){s=new A.cR(a.a,"Skybox")
s.dH(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
s.x=s.ga5(s).h(0,"posAttr")
r=t.n
s.y=r.a(s.gA().h(0,"fov"))
s.z=r.a(s.gA().h(0,"ratio"))
s.Q=t.g.a(s.gA().h(0,"boxClr"))
s.ch=t.a.a(s.gA().h(0,"boxTxt"))
s.cx=t.j.a(s.gA().h(0,"viewMat"))
a.da(s)}m.a=s}if(b.e==null){r=b.d
r=r==null?l:r.di(new Z.f5(a.a),$.ap())
if(r==null)r=l
else{q=r.aE($.ap())
if(q!=null){p=m.a
if(p==null)p=l
else{p=p.x
p=p==null?l:p.c}q.e=p==null?0:p}}b.e=r}o=m.c
if(o==null)return
o.a=1
o.T(a)
r=a.d
q=a.c
p=m.a
if(p!=null){p.T(a)
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
r=r.gY(r).cm(0)
p=p.cx
if(p!=null)p.ac(r.a7(0,!0))}r=b.e
if(r instanceof Z.bC){r.T(a)
r.a9(a)
r.aL(a)}else b.e=null
r=m.a
if(r!=null){a.a.useProgram(l)
r.ga5(r).dq()}o.aL(a)}}
O.iC.prototype={}
T.iD.prototype={}
T.iE.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.D():s},
T:function(a){var s,r=this
if(!r.c&&r.d>=6){r.c=!0
s=a.a
s.activeTexture(33984+r.a)
s.bindTexture(34067,r.b)}},
aL:function(a){var s
if(this.c){this.c=!1
s=a.a
s.activeTexture(33984+this.a)
s.bindTexture(34067,null)}}}
T.iF.prototype={
dN:function(a,b){var s,r=this,q=34067,p=a+"/posx"+b,o=a+"/posy"+b,n=a+"/posz"+b,m=a+"/negx"+b,l=a+"/negy"+b,k=a+"/negz"+b,j=r.a,i=j.createTexture()
i.toString
j.bindTexture(q,i)
j.texParameteri(q,10242,10497)
j.texParameteri(q,10243,10497)
j.texParameteri(q,10241,9729)
j.texParameteri(q,10240,9729)
j.bindTexture(q,null)
s=new T.iE(i)
r.aT(s,i,p,34069,!1,!1)
r.aT(s,i,m,34070,!1,!1)
r.aT(s,i,o,34071,!1,!1)
r.aT(s,i,l,34072,!1,!1)
r.aT(s,i,n,34073,!1,!1)
r.aT(s,i,k,34074,!1,!1)
return s},
cp:function(a){return this.dN(a,".png")},
aT:function(a,b,c,d,e,f){var s=document.createElement("img")
s.src=c;++this.d
W.X(s,"load",new T.iG(this,s,!1,b,!1,d,a),!1)},
fH:function(a,b,c){var s,r,q,p,o,n
b=V.kt(b)
s=a.width
r=V.kt(s==null?512:s)
s=a.height
q=V.kt(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.jT()
p.width=r
p.height=q
o=t.b.a(C.f.dZ(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.o4(o.getImageData(0,0,s,n==null?512:n))}}}
T.iG.prototype={
$1:function(a){var s=this,r=s.a,q=r.fH(s.b,r.c,s.c),p=r.a
p.bindTexture(34067,s.d)
p.pixelStorei(37440,0)
C.U.hC(p,s.f,0,6408,6408,5121,q)
p.bindTexture(34067,null)
p=s.r
if(++p.d>=6){p=p.e
if(p!=null)p.h9()}++r.e},
$S:3}
X.dO.prototype={
gq:function(){var s=this.x
return s==null?this.x=D.D():s},
ao:function(a){var s=this.x
return s==null?null:s.B(a)},
sdl:function(a,b){if(this.b){this.b=!1
this.ao(new D.z("clearColor",!0,!1))}},
T:function(a){var s,r,q,p,o,n,m,l=a.a
l.bindFramebuffer(36160,null)
l.enable(2884)
l.enable(2929)
l.depthFunc(513)
s=l.drawingBufferWidth
if(s==null)s=512
r=l.drawingBufferHeight
if(r==null)r=512
q=this.r
p=C.d.al(q.a*s)
o=C.d.al(q.b*r)
n=C.d.al(q.c*s)
a.c=n
q=C.d.al(q.d*r)
a.d=q
l.viewport(p,o,n,q)
l.clearDepth(2000)
if(this.b){q=this.a
l.clearColor(q.a,q.b,q.c,q.d)
m=16640}else m=256
if(m>0)l.clear(m)}}
X.hO.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.D():s},
T:function(a){var s
a.cy.bC(V.a9())
s=V.a9()
a.db.bC(s)},
aL:function(a){a.cy.aH()
a.db.aH()}}
X.eg.prototype={
gq:function(){var s=this.f
return s==null?this.f=D.D():s},
ao:function(a){var s=this.f
return s==null?null:s.B(a)},
ek:function(){return this.ao(null)},
T:function(a){var s,r,q=this,p=a.c,o=a.d,n=q.c,m=q.d,l=q.e,k=l-m,j=1/Math.tan(n*0.5),i=V.ay(-j/(p/o),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
a.cy.bC(i)
s=$.lE()
r=q.b
if(r!=null)s=r.b0(0,a,q).P(0,s)
a.db.bC(s)},
aL:function(a){a.cy.aH()
a.db.aH()}}
X.iB.prototype={}
V.as.prototype={
bn:function(a){this.b=new P.hM(C.K)
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
n=l.b.ev(p,0,p.length)
m=n==null?p:n
m=H.kv(m," ","&nbsp;")
C.I.e0(o,m)
m=o.style
m.color=b
C.a.gbx(l.d).push(o)}},
dT:function(a,b){var s,r,q,p=this
p.d=[]
s=C.a.j(b,"\n")
r=p.c
if(r==null)r=p.c=p.bt()
if(r!=null)for(q=new H.o(s),q=new P.bw(r.cA(new H.aR(q,q.gl(q))).a());q.u();)p.bB(q.gC(q))}}
V.jQ.prototype={
$1:function(a){var s=C.d.cz(this.a.ghd(),2)
if(s!=="0.00")P.ku(s+" fps")},
$S:44}
V.dH.prototype={
bB:function(a){var s=this
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
bt:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()\\-+*%!&|=.,?:;",j="OpenDoubleStr",i="CloseDoubleStr",h="EscDoubleStr",g="OpenSingleStr",f="CloseSingleStr",e="EscSingleStr",d="Slash",c="Comment",b="EndComment",a="MLComment",a0="MLCStar",a1="Whitespace",a2=L.iL()
a2.d=a2.k(0,q)
s=a2.k(0,q).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=a2.k(0,p).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
a2.k(0,q).j(0,o).a.push(K.J("0","9"))
a2.k(0,o).j(0,o).a.push(K.J("0","9"))
s=a2.k(0,o).j(0,n)
r=new K.q([])
r.p(new H.o("."))
s.a.push(r)
a2.k(0,n).j(0,m).a.push(K.J("0","9"))
a2.k(0,m).j(0,m).a.push(K.J("0","9"))
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
a2.k(0,j).j(0,j).a.push(new K.aJ())
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
a2.k(0,g).j(0,g).a.push(new K.aJ())
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
a2.k(0,c).j(0,c).a.push(new K.a7(s))
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
a2.k(0,a0).j(0,a).a.push(new K.a7(r))
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
r.d=r.a.K("Num")
r=a2.k(0,m)
r.d=r.a.K("Num")
r=a2.k(0,l)
r.d=r.a.K("Symbol")
r=a2.k(0,i)
r.d=r.a.K("String")
r=a2.k(0,f)
r.d=r.a.K("String")
r=a2.k(0,b)
r.d=r.a.K(c)
r=a2.k(0,a1)
r.d=r.a.K(a1)
r=a2.k(0,p)
r=r.d=r.a.K(p)
r.aI(0,"Class",["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"])
r.aI(0,"Type",["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"])
r.aI(0,"Reserved",["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"])
return a2}}
V.dP.prototype={
bB:function(a){var s=this
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
bt:function(){var s,r,q="Start",p="Id",o="Int",n="FloatDot",m="Float",l="Sym",k="<>{}()[]\\-+*%!&|=.,?:;",j="Slash",i="Comment",h="EndComment",g="Preprocess",f="EndPreprocess",e="Whitespace",d=L.iL()
d.d=d.k(0,q)
s=d.k(0,q).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=d.k(0,p).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
d.k(0,q).j(0,o).a.push(K.J("0","9"))
d.k(0,o).j(0,o).a.push(K.J("0","9"))
s=d.k(0,o).j(0,n)
r=new K.q([])
r.p(new H.o("."))
s.a.push(r)
d.k(0,n).j(0,m).a.push(K.J("0","9"))
d.k(0,m).j(0,m).a.push(K.J("0","9"))
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
d.k(0,j).j(0,l).a.push(new K.aJ())
r=d.k(0,i).j(0,h)
s=new K.q([])
s.p(new H.o("\n"))
r.a.push(s)
s=[]
d.k(0,i).j(0,i).a.push(new K.a7(s))
r=new K.q([])
r.p(new H.o("\n"))
s.push(r)
r=d.k(0,q).j(0,g)
s=new K.q([])
s.p(new H.o("#"))
r.a.push(s)
s=[]
d.k(0,g).j(0,g).a.push(new K.a7(s))
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
s.d=s.a.K("Num")
s=d.k(0,m)
s.d=s.a.K("Num")
s=d.k(0,l)
s.d=s.a.K("Symbol")
s=d.k(0,h)
s.d=s.a.K(i)
s=d.k(0,f)
s.d=s.a.K(g)
s=d.k(0,e)
s.d=s.a.K(e)
s=d.k(0,p)
s=s.d=s.a.K(p)
s.aI(0,"Type",["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"])
s.aI(0,"Reserved",["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"])
s.aI(0,"Builtin",["gl_FragColor","gl_Position"])
return d}}
V.dR.prototype={
bB:function(a){var s=this,r="#111"
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
bt:function(){var s,r,q="Start",p="Id",o="Attr",n="Sym",m="OpenStr",l="CloseStr",k="Other",j=L.iL()
j.d=j.k(0,q)
s=j.k(0,q).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.k(0,p).j(0,p)
r=new K.q([])
r.p(new H.o("_"))
s=s.a
s.push(r)
s.push(K.J("0","9"))
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
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
j.k(0,m).j(0,m).a.push(new K.aJ())
j.k(0,q).j(0,k).a.push(new K.aJ())
s=[]
j.k(0,k).j(0,k).a.push(new K.a7(s))
r=new K.q([])
r.p(new H.o('</\\-!>=_"'))
s.push(r)
s.push(K.J("a","z"))
s.push(K.J("A","Z"))
s=j.k(0,n)
s.d=s.a.K("Symbol")
s=j.k(0,l)
s.d=s.a.K("String")
s=j.k(0,p)
r=s.a.K(p)
s.d=r
r.aI(0,"Reserved",["DOCTYPE","html","head","meta","link","title","body","script"])
r=j.k(0,o)
r.d=r.a.K(o)
r=j.k(0,k)
r.d=r.a.K(k)
return j}}
V.ei.prototype={
dT:function(a,b){this.d=[]
this.I(C.a.j(b,"\n"),"#111")},
bB:function(a){},
bt:function(){return null}}
V.iv.prototype={
d9:function(a){var s,r,q,p,o,n,m=this.fL(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.o(C.a.hf(a)),s=new P.bw(m.cA(new H.aR(s,s.gl(s))).a());s.u();){r=s.gC(s)
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
if(H.lz(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.lg(C.q,r,C.h,!1)
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
dY:function(a){var s,r,q,p=new V.dH("dart",[])
p.bn("dart")
s=new V.dP("glsl",[])
s.bn("glsl")
r=new V.dR("html",[])
r.bn("html")
q=C.a.hc([p,s,r],new V.iy(a))
if(q!=null)return q
p=new V.ei("plain",[])
p.bn("plain")
return p},
d8:function(a9,b0,b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="codeTableRow",a6="codeLineNums",a7="codeLineText",a8=[]
for(s=!1,r=0;r<b2.length;++r){q=b2[r]
if(C.b.bH(q,"+")){b2[r]=C.b.av(q,1)
a8.push(1)
s=!0}else if(C.b.bH(q,"-")){b2[r]=C.b.av(q,1)
a8.push(-1)
s=!0}else a8.push(0)}p=this.dY(b0)
p.dT(0,b2)
o=document
n=o.createElement("div")
n.className="codeTableScroll"
m=o.createElement("table")
m.className="codeTable"
n.appendChild(m).toString
this.a.appendChild(n).toString
l=P.lg(C.q,a9,C.h,!1)
k=o.createElement("tr")
k.className="headerRow"
j=o.createElement("td")
j.className="headerCell"
j.colSpan=s?3:2
i=o.createElement("div")
i.className="tableHeader"
i.id=l
h=W.ky()
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
for(e=q.length,a1=0;a1<q.length;q.length===e||(0,H.m)(q),++a1)a0.appendChild(q[a1]).toString
d.appendChild(c).toString
d.appendChild(b).toString
d.appendChild(a0).toString
m.appendChild(d).toString}else for(e=p.d,a2=e.length,a3=b1,a1=0;a1<e.length;e.length===a2||(0,H.m)(e),++a1){q=e[a1]
d=o.createElement("tr")
d.className=a5
c=o.createElement("td")
c.className=a6;++a3
c.textContent=""+a3
b=o.createElement("td")
b.className=a7
for(a4=C.a.gL(q);a4.u();)b.appendChild(a4.gC(a4)).toString
d.appendChild(c).toString
d.appendChild(b).toString
m.appendChild(d).toString}},
fL:function(){var s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other",h=this.b
if(h!=null)return h
h=L.iL()
h.d=h.k(0,q)
s=h.k(0,q).j(0,p)
r=new K.q([])
r.p(new H.o("*"))
s.a.push(r)
s.c=!0
s=[]
h.k(0,p).j(0,p).a.push(new K.a7(s))
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
h.k(0,o).j(0,o).a.push(new K.a7(r))
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
h.k(0,m).j(0,m).a.push(new K.a7(s))
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
h.k(0,l).j(0,l).a.push(new K.a7(s))
r=new K.q([])
r.p(new H.o("|]"))
s.push(r)
r=h.k(0,k).j(0,j)
s=new K.q([])
s.p(new H.o("]"))
r.a.push(s)
r.c=!0
r=[]
h.k(0,k).j(0,k).a.push(new K.a7(r))
s=new K.q([])
s.p(new H.o("|]"))
r.push(s)
h.k(0,q).j(0,i).a.push(new K.aJ())
s=[]
h.k(0,i).j(0,i).a.push(new K.a7(s))
r=new K.q([])
r.p(new H.o("*_`["))
s.push(r)
r=h.k(0,"BoldEnd")
r.d=r.a.K(p)
r=h.k(0,n)
r.d=r.a.K(o)
r=h.k(0,"CodeEnd")
r.d=r.a.K(m)
r=h.k(0,j)
r.d=r.a.K("Link")
r=h.k(0,i)
r.d=r.a.K(i)
return this.b=h}}
V.ix.prototype={
$1:function(a){P.kY(C.i,new V.iw(this.a))},
$S:3}
V.iw.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.al(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.t(-0.01*s)+"px"
q.top=r},
$S:2}
V.iy.prototype={
$1:function(a){var s=a==null?null:a.a
return s===this.a},
$S:45}
X.jO.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.a
q=q==null?null:q.c
s.d8("Vertex Shader","glsl",0,(q==null?"":q).split("\n"))
r=r.a
r=r==null?null:r.d
s.d8("Fragment Shader","glsl",0,(r==null?"":r).split("\n"))},
$S:1};(function aliases(){var s=J.a.prototype
s.e4=s.i
s=J.bi.prototype
s.e6=s.i
s=P.h.prototype
s.e5=s.bF
s=W.A.prototype
s.bI=s.ag
s=W.d9.prototype
s.e7=s.aq
s=K.dQ.prototype
s.e3=s.aG
s.bJ=s.i
s=O.cC.prototype
s.cI=s.aA
s=O.cD.prototype
s.cJ=s.aA})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installStaticTearOff,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0u,l=hunkHelpers._instance_1u,k=hunkHelpers._instance_0i
s(J,"nk","mi",46)
r(P,"nZ","mM",9)
r(P,"o_","mN",9)
r(P,"o0","mO",9)
q(P,"lr","nU",2)
r(W,"pw","hB",36)
p(W,"oc",4,null,["$4"],["mP"],18,0)
p(W,"od",4,null,["$4"],["mQ"],18,0)
var j
o(j=E.bE.prototype,"gdR",0,0,null,["$1","$0"],["dS","hn"],0,0)
o(j,"gdP",0,0,null,["$1","$0"],["dQ","hk"],0,0)
n(j,"ghi","hj",6)
n(j,"ghl","hm",6)
o(j=E.eH.prototype,"gcL",0,0,null,["$1","$0"],["cN","cM"],0,0)
m(j,"ghy","dW",2)
l(j=X.f1.prototype,"gf1","f2",3)
l(j,"geQ","eR",3)
l(j,"geW","eX",4)
l(j,"gf5","f6",15)
l(j,"gf3","f4",15)
l(j,"gf9","fa",4)
l(j,"gfd","fe",4)
l(j,"gf_","f0",4)
l(j,"gfb","fc",4)
l(j,"geY","eZ",4)
l(j,"gff","fg",27)
l(j,"gfh","fi",3)
l(j,"gfA","fB",11)
l(j,"gfu","fv",11)
l(j,"gfw","fz",11)
o(D.ce.prototype,"gee",0,0,null,["$1","$0"],["aw","ef"],0,0)
o(j=D.ct.prototype,"gcX",0,0,null,["$1","$0"],["cY","f7"],0,0)
l(j,"gfj","fk",29)
n(j,"geK","eL",20)
n(j,"gfn","fo",20)
k(V.W.prototype,"gl","cn",14)
k(V.B.prototype,"gl","cn",14)
o(j=U.bG.prototype,"gaQ",0,0,null,["$1","$0"],["M","a4"],0,0)
n(j,"geI","eJ",16)
n(j,"gfl","fm",16)
o(j=U.cW.prototype,"gaQ",0,0,null,["$1","$0"],["M","a4"],0,0)
l(j,"gbS","bT",12)
l(j,"gbU","bV",12)
l(j,"gbW","bX",12)
o(j=U.cX.prototype,"gaQ",0,0,null,["$1","$0"],["M","a4"],0,0)
l(j,"gbS","bT",1)
l(j,"gbU","bV",1)
l(j,"gbW","bX",1)
l(j,"geB","eC",1)
l(j,"geD","eE",1)
l(j,"gfS","fT",1)
l(j,"gfQ","fR",1)
l(j,"gfO","fP",1)
l(U.cY.prototype,"geG","eH",1)
o(j=M.ca.prototype,"gR",0,0,null,["$1","$0"],["S","b6"],0,0)
n(j,"gfp","fq",17)
n(j,"gfs","ft",17)
o(M.cc.prototype,"gR",0,0,null,["$1","$0"],["S","b6"],0,0)
o(j=M.ck.prototype,"gR",0,0,null,["$1","$0"],["S","b6"],0,0)
n(j,"geS","eT",6)
n(j,"geU","eV",6)
o(j=O.e1.prototype,"gaz",0,0,null,["$1","$0"],["O","b9"],0,0)
o(j,"gd_",0,0,null,["$1","$0"],["d0","fG"],0,0)
n(j,"geM","eN",24)
n(j,"geO","eP",24)
o(O.cC.prototype,"gaz",0,0,null,["$1","$0"],["O","b9"],0,0)
o(O.er.prototype,"gaz",0,0,null,["$1","$0"],["O","b9"],0,0)
o(X.eg.prototype,"gej",0,0,null,["$1","$0"],["ao","ek"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.L,null)
q(P.L,[H.k1,J.a,J.a6,P.G,P.d2,P.h,H.aR,P.dT,H.cl,H.f_,H.iP,H.ij,H.fM,H.bd,P.T,H.hT,H.e0,H.hP,H.ag,H.fo,P.df,P.bZ,P.bw,P.f7,P.ez,P.eA,P.jv,P.dk,P.jj,P.d1,P.E,P.eq,P.dD,P.hN,P.jt,P.Q,P.bf,P.ef,P.cS,P.fl,P.hK,P.af,P.aY,W.hs,W.jW,W.kc,W.bY,W.H,W.cK,W.d9,W.fR,W.cm,W.jn,W.h0,P.dh,P.fF,K.aJ,K.dQ,K.im,K.q,L.ew,L.eI,L.eJ,L.iK,O.bD,O.cF,E.hl,E.bE,E.bB,E.bN,E.fi,E.io,E.eH,Z.f4,Z.f5,Z.bC,Z.co,Z.b_,D.hn,D.bF,D.O,X.c8,X.dY,X.hR,X.hX,X.Y,X.ig,X.iM,X.f1,D.ce,V.M,V.aL,V.hE,V.cE,V.bJ,V.P,V.V,V.aU,V.em,V.W,V.B,U.cW,U.cX,U.cY,M.cc,M.ck,A.hh,A.hi,A.ad,A.ba,A.be,A.bo,A.bq,A.i0,A.eQ,A.eR,A.eU,A.eX,A.iR,A.iX,F.al,F.hS,F.ik,F.it,F.cP,F.cQ,F.bS,F.cZ,F.u,F.j5,F.j8,F.j9,O.iC,O.cC,O.i1,T.iF,X.iB,X.hO,X.eg,V.as,V.iv])
q(J.a,[J.dU,J.cr,J.bi,J.am,J.bI,J.aP,H.cH,W.b,W.hf,W.dC,W.c9,W.au,W.F,W.fc,W.ae,W.hv,W.hw,W.fd,W.ch,W.ff,W.hx,W.i,W.fm,W.aO,W.hL,W.fr,W.bh,W.hW,W.ic,W.fv,W.fw,W.aS,W.fx,W.fz,W.aT,W.fD,W.fG,W.aW,W.fH,W.aX,W.fN,W.an,W.fT,W.iI,W.aZ,W.fV,W.iN,W.iZ,W.h1,W.h3,W.h5,W.h7,W.h9,P.bk,P.ft,P.bn,P.fB,P.il,P.fO,P.bs,P.fX,P.hj,P.f9,P.bP,P.fK])
q(J.bi,[J.eh,J.bt,J.ax])
r(J.dW,J.am)
q(J.bI,[J.cq,J.dV])
q(P.G,[H.dZ,P.eM,H.dX,H.eZ,H.eo,H.fj,P.dz,P.ec,P.aj,P.f0,P.eY,P.bT,P.dE,P.dG])
r(P.cv,P.d2)
q(P.cv,[H.bV,W.fa,W.a0,P.dM])
r(H.o,H.bV)
q(P.h,[H.j,H.bl,H.bv,P.cp])
q(H.j,[H.cw,H.aQ])
r(H.ci,H.bl)
q(P.dT,[H.cz,H.f6])
r(H.cA,H.cw)
r(H.cL,P.eM)
q(H.bd,[H.eE,H.hQ,H.jK,H.jL,H.jM,P.jd,P.jc,P.je,P.jf,P.js,P.jr,P.jE,P.jl,P.jm,P.hY,P.hy,P.hz,W.hA,W.id,W.ie,W.is,W.iz,W.jg,W.ii,W.ih,W.jo,W.jp,W.jq,W.ju,P.jz,P.jG,P.hI,P.hJ,P.hk,E.ip,E.iq,E.ir,E.iH,D.hG,D.hH,F.jw,F.iu,F.jb,F.ja,F.j6,F.j7,O.i4,O.i5,O.i6,O.i7,O.i8,O.i9,O.ia,O.ib,T.iG,V.jQ,V.ix,V.iw,V.iy,X.jO])
q(H.eE,[H.ex,H.bA])
r(P.cy,P.T)
q(P.cy,[H.R,W.f8])
r(H.bM,H.cH)
q(H.bM,[H.d4,H.d6])
r(H.d5,H.d4)
r(H.bm,H.d5)
r(H.d7,H.d6)
r(H.cG,H.d7)
q(H.cG,[H.e6,H.e7,H.e8,H.e9,H.ea,H.cI,H.eb])
r(H.dg,H.fj)
r(P.dc,P.cp)
r(P.jk,P.jv)
r(P.d8,P.dk)
r(P.d0,P.d8)
r(P.dF,P.eA)
r(P.hC,P.dD)
q(P.dF,[P.hM,P.j0])
r(P.j_,P.hC)
q(P.aj,[P.cO,P.dS])
q(W.b,[W.r,W.dL,W.aB,W.da,W.aC,W.ah,W.dd,W.f3,W.bW,P.dB,P.aK])
q(W.r,[W.A,W.ak,W.bX])
q(W.A,[W.p,P.k])
q(W.p,[W.dx,W.dy,W.bz,W.bb,W.bc,W.cf,W.dN,W.bH,W.ep,W.cT,W.eC,W.eD,W.bU])
r(W.hr,W.au)
r(W.cd,W.fc)
q(W.ae,[W.ht,W.hu])
r(W.fe,W.fd)
r(W.cg,W.fe)
r(W.fg,W.ff)
r(W.dJ,W.fg)
r(W.aN,W.dC)
r(W.fn,W.fm)
r(W.dK,W.fn)
r(W.fs,W.fr)
r(W.bg,W.fs)
r(W.aE,W.i)
q(W.aE,[W.bj,W.aa,W.br])
r(W.e3,W.fv)
r(W.e4,W.fw)
r(W.fy,W.fx)
r(W.e5,W.fy)
r(W.fA,W.fz)
r(W.cJ,W.fA)
r(W.fE,W.fD)
r(W.ej,W.fE)
r(W.en,W.fG)
r(W.db,W.da)
r(W.et,W.db)
r(W.fI,W.fH)
r(W.eu,W.fI)
r(W.ey,W.fN)
r(W.fU,W.fT)
r(W.eF,W.fU)
r(W.de,W.dd)
r(W.eG,W.de)
r(W.fW,W.fV)
r(W.eK,W.fW)
r(W.b0,W.aa)
r(W.h2,W.h1)
r(W.fb,W.h2)
r(W.d_,W.ch)
r(W.h4,W.h3)
r(W.fp,W.h4)
r(W.h6,W.h5)
r(W.d3,W.h6)
r(W.h8,W.h7)
r(W.fJ,W.h8)
r(W.ha,W.h9)
r(W.fQ,W.ha)
r(W.fh,W.f8)
r(W.fk,P.ez)
r(W.fS,W.d9)
r(P.ab,P.fF)
r(P.fu,P.ft)
r(P.e_,P.fu)
r(P.fC,P.fB)
r(P.ed,P.fC)
r(P.bQ,P.k)
r(P.fP,P.fO)
r(P.eB,P.fP)
r(P.fY,P.fX)
r(P.eL,P.fY)
r(P.dA,P.f9)
r(P.ee,P.aK)
r(P.fL,P.fK)
r(P.ev,P.fL)
q(K.dQ,[K.a7,L.iO])
q(E.hl,[Z.c7,A.bR,T.iD])
q(D.O,[D.av,D.aw,D.z,X.ek])
q(X.ek,[X.cx,X.bK,X.bL,X.cU])
q(O.bD,[D.ct,U.bG,M.ca])
q(D.hn,[U.hp,U.Z])
r(U.cb,U.Z)
q(A.bR,[A.cB,A.cR])
q(A.iR,[A.cV,A.iU,A.iV,A.iW,A.iS,A.eN,A.iT,A.eO,A.eP,A.iY,A.eS,A.eT,A.eV,A.eW])
q(O.iC,[O.e1,O.er])
q(O.cC,[O.hZ,O.i_,O.cD])
q(O.cD,[O.i2,O.i3])
r(T.iE,T.iD)
r(X.dO,X.iB)
q(V.as,[V.dH,V.dP,V.dR,V.ei])
s(H.bV,H.f_)
s(H.d4,P.E)
s(H.d5,H.cl)
s(H.d6,P.E)
s(H.d7,H.cl)
s(P.d2,P.E)
s(P.dk,P.eq)
s(W.fc,W.hs)
s(W.fd,P.E)
s(W.fe,W.H)
s(W.ff,P.E)
s(W.fg,W.H)
s(W.fm,P.E)
s(W.fn,W.H)
s(W.fr,P.E)
s(W.fs,W.H)
s(W.fv,P.T)
s(W.fw,P.T)
s(W.fx,P.E)
s(W.fy,W.H)
s(W.fz,P.E)
s(W.fA,W.H)
s(W.fD,P.E)
s(W.fE,W.H)
s(W.fG,P.T)
s(W.da,P.E)
s(W.db,W.H)
s(W.fH,P.E)
s(W.fI,W.H)
s(W.fN,P.T)
s(W.fT,P.E)
s(W.fU,W.H)
s(W.dd,P.E)
s(W.de,W.H)
s(W.fV,P.E)
s(W.fW,W.H)
s(W.h1,P.E)
s(W.h2,W.H)
s(W.h3,P.E)
s(W.h4,W.H)
s(W.h5,P.E)
s(W.h6,W.H)
s(W.h7,P.E)
s(W.h8,W.H)
s(W.h9,P.E)
s(W.ha,W.H)
s(P.ft,P.E)
s(P.fu,W.H)
s(P.fB,P.E)
s(P.fC,W.H)
s(P.fO,P.E)
s(P.fP,W.H)
s(P.fX,P.E)
s(P.fY,W.H)
s(P.f9,P.T)
s(P.fK,P.E)
s(P.fL,W.H)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{n:"int",a3:"double",a4:"num",w:"String",a2:"bool",af:"Null",l:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([O?])","~(O)","~()","~(i)","~(aa)","~(w,@)","~(n,h<bE>)","~(al)","~(n,n)","~(~())","af()","~(br)","~(O?)","~(~(O))","a3()","~(bj)","~(n,h<Z?>)","~(n,h<bp>)","a2(A,w,w,bY)","a2(az)","~(n,h<cs>)","a2(r)","a2(w)","w(n)","~(n,h<bJ>)","~(a4)","~(L?,L?)","~(b0)","@(w)","a2(h<cs>)","@(@,w)","A(r)","~(@,@)","af(@)","~(@)","~(cZ,a3,a3)","w(b)","~(w,w)","@(@)","af(~())","n(ba,ba)","n(be,be)","n(bo,bo)","n(bq,bq)","~(iJ)","a2(as?)","n(@,@)","w(w)","c7(n)","~(r,r?)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.n7(v.typeUniverse,JSON.parse('{"eh":"bi","bt":"bi","ax":"bi","ow":"i","oI":"i","oy":"aK","ox":"b","oO":"b","oR":"b","ov":"k","oJ":"k","oz":"p","oM":"p","oK":"r","oH":"r","pe":"ah","oD":"aE","oA":"ak","oS":"ak","oQ":"aa","oL":"bg","oE":"F","oF":"an","oN":"bm","dU":{"a2":[]},"am":{"l":["1"],"j":["1"],"h":["1"]},"dW":{"l":["1"],"j":["1"],"h":["1"]},"bI":{"a3":[],"a4":[]},"cq":{"a3":[],"n":[],"a4":[]},"dV":{"a3":[],"a4":[]},"aP":{"w":[]},"dZ":{"G":[]},"o":{"l":["n"],"j":["n"],"h":["n"]},"j":{"h":["1"]},"cw":{"j":["1"],"h":["1"]},"bl":{"h":["2"]},"ci":{"j":["2"],"h":["2"]},"cA":{"j":["2"],"h":["2"]},"bv":{"h":["1"]},"bV":{"l":["1"],"j":["1"],"h":["1"]},"cL":{"G":[]},"dX":{"G":[]},"eZ":{"G":[]},"bd":{"cn":[]},"eE":{"cn":[]},"ex":{"cn":[]},"bA":{"cn":[]},"eo":{"G":[]},"R":{"S":["1","2"],"T.V":"2"},"aQ":{"j":["1"],"h":["1"]},"bM":{"v":["1"]},"bm":{"v":["a3"],"l":["a3"],"j":["a3"],"h":["a3"]},"cG":{"v":["n"],"l":["n"],"j":["n"],"h":["n"]},"e6":{"v":["n"],"l":["n"],"j":["n"],"h":["n"]},"e7":{"v":["n"],"l":["n"],"j":["n"],"h":["n"]},"e8":{"v":["n"],"l":["n"],"j":["n"],"h":["n"]},"e9":{"v":["n"],"l":["n"],"j":["n"],"h":["n"]},"ea":{"v":["n"],"l":["n"],"j":["n"],"h":["n"]},"cI":{"v":["n"],"l":["n"],"j":["n"],"h":["n"]},"eb":{"v":["n"],"l":["n"],"j":["n"],"h":["n"]},"fj":{"G":[]},"dg":{"G":[]},"df":{"iJ":[]},"dc":{"h":["1"]},"d0":{"j":["1"],"h":["1"]},"cp":{"h":["1"]},"cv":{"l":["1"],"j":["1"],"h":["1"]},"cy":{"S":["1","2"]},"T":{"S":["1","2"]},"d8":{"j":["1"],"h":["1"]},"a3":{"a4":[]},"n":{"a4":[]},"l":{"j":["1"],"h":["1"]},"dz":{"G":[]},"eM":{"G":[]},"ec":{"G":[]},"aj":{"G":[]},"cO":{"G":[]},"dS":{"G":[]},"f0":{"G":[]},"eY":{"G":[]},"bT":{"G":[]},"dE":{"G":[]},"ef":{"G":[]},"cS":{"G":[]},"dG":{"G":[]},"A":{"r":[],"b":[]},"bj":{"i":[]},"aa":{"i":[]},"r":{"b":[]},"aB":{"b":[]},"aC":{"b":[]},"ah":{"b":[]},"br":{"i":[]},"aE":{"i":[]},"b0":{"aa":[],"i":[]},"bY":{"az":[]},"p":{"A":[],"r":[],"b":[]},"dx":{"A":[],"r":[],"b":[]},"dy":{"A":[],"r":[],"b":[]},"bz":{"A":[],"r":[],"b":[]},"bb":{"A":[],"r":[],"b":[]},"bc":{"A":[],"r":[],"b":[]},"ak":{"r":[],"b":[]},"cf":{"A":[],"r":[],"b":[]},"cg":{"l":["ab<a4>"],"v":["ab<a4>"],"j":["ab<a4>"],"h":["ab<a4>"]},"ch":{"ab":["a4"]},"dJ":{"l":["w"],"v":["w"],"j":["w"],"h":["w"]},"fa":{"l":["A"],"j":["A"],"h":["A"]},"dK":{"l":["aN"],"v":["aN"],"j":["aN"],"h":["aN"]},"dL":{"b":[]},"dN":{"A":[],"r":[],"b":[]},"bg":{"l":["r"],"v":["r"],"j":["r"],"h":["r"]},"bH":{"A":[],"r":[],"b":[]},"e3":{"S":["w","@"],"T.V":"@"},"e4":{"S":["w","@"],"T.V":"@"},"e5":{"l":["aS"],"v":["aS"],"j":["aS"],"h":["aS"]},"a0":{"l":["r"],"j":["r"],"h":["r"]},"cJ":{"l":["r"],"v":["r"],"j":["r"],"h":["r"]},"ej":{"l":["aT"],"v":["aT"],"j":["aT"],"h":["aT"]},"en":{"S":["w","@"],"T.V":"@"},"ep":{"A":[],"r":[],"b":[]},"et":{"l":["aB"],"v":["aB"],"b":[],"j":["aB"],"h":["aB"]},"eu":{"l":["aW"],"v":["aW"],"j":["aW"],"h":["aW"]},"ey":{"S":["w","w"],"T.V":"w"},"cT":{"A":[],"r":[],"b":[]},"eC":{"A":[],"r":[],"b":[]},"eD":{"A":[],"r":[],"b":[]},"bU":{"A":[],"r":[],"b":[]},"eF":{"l":["ah"],"v":["ah"],"j":["ah"],"h":["ah"]},"eG":{"l":["aC"],"v":["aC"],"b":[],"j":["aC"],"h":["aC"]},"eK":{"l":["aZ"],"v":["aZ"],"j":["aZ"],"h":["aZ"]},"f3":{"b":[]},"bW":{"b":[]},"bX":{"r":[],"b":[]},"fb":{"l":["F"],"v":["F"],"j":["F"],"h":["F"]},"d_":{"ab":["a4"]},"fp":{"l":["aO?"],"v":["aO?"],"j":["aO?"],"h":["aO?"]},"d3":{"l":["r"],"v":["r"],"j":["r"],"h":["r"]},"fJ":{"l":["aX"],"v":["aX"],"j":["aX"],"h":["aX"]},"fQ":{"l":["an"],"v":["an"],"j":["an"],"h":["an"]},"f8":{"S":["w","w"]},"fh":{"S":["w","w"],"T.V":"w"},"cK":{"az":[]},"d9":{"az":[]},"fS":{"az":[]},"fR":{"az":[]},"dh":{"bh":[]},"dM":{"l":["A"],"j":["A"],"h":["A"]},"ab":{"fF":["1"]},"e_":{"l":["bk"],"j":["bk"],"h":["bk"]},"ed":{"l":["bn"],"j":["bn"],"h":["bn"]},"bQ":{"k":[],"A":[],"r":[],"b":[]},"eB":{"l":["w"],"j":["w"],"h":["w"]},"k":{"A":[],"r":[],"b":[]},"eL":{"l":["bs"],"j":["bs"],"h":["bs"]},"dA":{"S":["w","@"],"T.V":"@"},"dB":{"b":[]},"aK":{"b":[]},"ee":{"b":[]},"ev":{"l":["S<@,@>"],"j":["S<@,@>"],"h":["S<@,@>"]},"bD":{"h":["1"]},"av":{"O":[]},"aw":{"O":[]},"z":{"O":[]},"cx":{"O":[]},"bK":{"O":[]},"bL":{"O":[]},"ek":{"O":[]},"cU":{"O":[]},"ce":{"cs":[]},"ct":{"h":["cs"]},"cb":{"Z":[]},"bG":{"Z":[],"h":["Z?"]},"cW":{"Z":[]},"cX":{"Z":[]},"cY":{"Z":[]},"ca":{"bp":[],"h":["bp"]},"cc":{"bp":[]},"ck":{"bp":[]},"cB":{"bR":[]},"cR":{"bR":[]},"dH":{"as":[]},"dP":{"as":[]},"dR":{"as":[]},"ei":{"as":[]}}'))
H.n6(v.typeUniverse,JSON.parse('{"am":1,"dW":1,"a6":1,"j":1,"cw":1,"aR":1,"bl":2,"ci":2,"cz":2,"cA":2,"bv":1,"f6":1,"cl":1,"f_":1,"bV":1,"aQ":1,"e0":1,"bM":1,"bw":1,"dc":1,"ez":1,"eA":2,"d1":1,"cp":1,"cv":1,"E":1,"cy":2,"T":2,"eq":1,"d8":1,"d2":1,"dk":1,"dD":2,"dF":2,"h":1,"l":1,"dT":1,"fk":1,"H":1,"cm":1,"bD":1,"av":1,"aw":1,"z":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.o8
return{B:s("bz"),t:s("bb"),D:s("bC"),E:s("bc"),b:s("c9"),V:s("j<@>"),h:s("A"),C:s("G"),c:s("i"),w:s("dO"),Y:s("cn"),I:s("bh"),l:s("bH"),m:s("am<@>"),T:s("cr"),M:s("ax"),p:s("v<@>"),d:s("R<n,a2>"),y:s("R<n,n>"),J:s("l<eQ>"),L:s("l<eR>"),U:s("l<eU>"),R:s("l<eX>"),e:s("l<@>"),r:s("cx"),f:s("S<@,@>"),Z:s("bK"),O:s("bL"),P:s("af"),K:s("L"),q:s("ab<a4>"),s:s("bQ"),k:s("bR"),N:s("w"),u:s("k"),bg:s("bU"),ae:s("iJ"),aR:s("eI"),aM:s("cU"),n:s("eN"),v:s("cV"),g:s("eO"),F:s("eP"),Q:s("eS"),j:s("eT"),G:s("eV"),a:s("eW"),o:s("bt"),x:s("bX"),cB:s("a2"),i:s("a3"),z:s("@"),S:s("n"),A:s("0&*"),_:s("L*"),bc:s("kH<af>?"),d1:s("cB?"),X:s("L?"),ba:s("bP?"),da:s("cR?"),aJ:s("ew?"),aX:s("eJ?"),W:s("cV?"),H:s("a4")}})();(function constants(){var s=hunkHelpers.makeConstList
C.l=W.bb.prototype
C.f=W.bc.prototype
C.I=W.cf.prototype
C.L=J.a.prototype
C.a=J.am.prototype
C.c=J.cq.prototype
C.M=J.cr.prototype
C.d=J.bI.prototype
C.b=J.aP.prototype
C.N=J.ax.prototype
C.u=J.eh.prototype
C.U=P.bP.prototype
C.v=W.cT.prototype
C.k=J.bt.prototype
C.w=W.b0.prototype
C.x=W.bW.prototype
C.y=new E.bB("Browser.chrome")
C.m=new E.bB("Browser.firefox")
C.n=new E.bB("Browser.edge")
C.z=new E.bB("Browser.other")
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

C.G=new P.ef()
C.h=new P.j_()
C.H=new P.j0()
C.e=new P.jk()
C.i=new P.bf(0)
C.J=new P.bf(5e6)
C.K=new P.hN("element",!1,!1,!1)
C.O=s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"])
C.P=s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Q=s([])
C.q=s([0,0,65498,45055,65535,34815,65534,18431])
C.r=s(["bind","if","ref","repeat","syntax"])
C.j=s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"])
C.R=new E.bN("OperatingSystem.windows")
C.t=new E.bN("OperatingSystem.mac")
C.S=new E.bN("OperatingSystem.linux")
C.T=new E.bN("OperatingSystem.other")
C.V=new P.bZ(null,2)})();(function staticFields(){$.jh=null
$.ar=0
$.c6=null
$.kz=null
$.lt=null
$.lq=null
$.lx=null
$.jH=null
$.jN=null
$.kq=null
$.c_=null
$.dp=null
$.dq=null
$.kl=!1
$.ao=C.e
$.a8=[]
$.aM=null
$.jV=null
$.kF=null
$.kE=null
$.fq=P.N(t.N,t.Y)
$.hD=null
$.kK=null
$.kM=null
$.a_=null
$.aA=null
$.kS=null
$.bu=null
$.l2=null
$.j1=null
$.j2=null
$.j3=null
$.l1=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"oG","lD",function(){return H.ob("_$dart_dartClosure")})
s($,"oT","lF",function(){return H.aD(H.iQ({
toString:function(){return"$receiver$"}}))})
s($,"oU","lG",function(){return H.aD(H.iQ({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"oV","lH",function(){return H.aD(H.iQ(null))})
s($,"oW","lI",function(){return H.aD(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oZ","lL",function(){return H.aD(H.iQ(void 0))})
s($,"p_","lM",function(){return H.aD(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"oY","lK",function(){return H.aD(H.l_(null))})
s($,"oX","lJ",function(){return H.aD(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"p1","lO",function(){return H.aD(H.l_(void 0))})
s($,"p0","lN",function(){return H.aD(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"pf","kw",function(){return P.mL()})
s($,"pi","lT",function(){return P.my("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"pg","lS",function(){return P.kI(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N)})
s($,"p8","lR",function(){return Z.ai(0)})
s($,"p2","lP",function(){return Z.ai(511)})
s($,"pa","ap",function(){return Z.ai(1)})
s($,"p9","b7",function(){return Z.ai(2)})
s($,"p4","b6",function(){return Z.ai(4)})
s($,"pb","by",function(){return Z.ai(8)})
s($,"pc","b8",function(){return Z.ai(16)})
s($,"p5","du",function(){return Z.ai(32)})
s($,"p6","dv",function(){return Z.ai(64)})
s($,"p7","lQ",function(){return Z.ai(96)})
s($,"pd","c5",function(){return Z.ai(128)})
s($,"p3","b5",function(){return Z.ai(256)})
s($,"oC","lC",function(){return new V.hE()})
r($,"oB","C",function(){return $.lC()})
r($,"oP","lE",function(){var q=V.kO(),p=V.ka(),o=$.l1
return V.kL(q,p,o==null?$.l1=V.mI(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cH,ArrayBufferView:H.cH,Float32Array:H.bm,Float64Array:H.bm,Int16Array:H.e6,Int32Array:H.e7,Int8Array:H.e8,Uint16Array:H.e9,Uint32Array:H.ea,Uint8ClampedArray:H.cI,CanvasPixelArray:H.cI,Uint8Array:H.eb,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.hf,HTMLAnchorElement:W.dx,HTMLAreaElement:W.dy,HTMLBaseElement:W.bz,Blob:W.dC,HTMLBodyElement:W.bb,HTMLCanvasElement:W.bc,CanvasRenderingContext2D:W.c9,CDATASection:W.ak,CharacterData:W.ak,Comment:W.ak,ProcessingInstruction:W.ak,Text:W.ak,CSSPerspective:W.hr,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.cd,MSStyleCSSProperties:W.cd,CSS2Properties:W.cd,CSSImageValue:W.ae,CSSKeywordValue:W.ae,CSSNumericValue:W.ae,CSSPositionValue:W.ae,CSSResourceValue:W.ae,CSSUnitValue:W.ae,CSSURLImageValue:W.ae,CSSStyleValue:W.ae,CSSMatrixComponent:W.au,CSSRotation:W.au,CSSScale:W.au,CSSSkew:W.au,CSSTranslation:W.au,CSSTransformComponent:W.au,CSSTransformValue:W.ht,CSSUnparsedValue:W.hu,DataTransferItemList:W.hv,HTMLDivElement:W.cf,DOMException:W.hw,ClientRectList:W.cg,DOMRectList:W.cg,DOMRectReadOnly:W.ch,DOMStringList:W.dJ,DOMTokenList:W.hx,Element:W.A,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,SubmitEvent:W.i,AbsoluteOrientationSensor:W.b,Accelerometer:W.b,AccessibleNode:W.b,AmbientLightSensor:W.b,Animation:W.b,ApplicationCache:W.b,DOMApplicationCache:W.b,OfflineResourceList:W.b,BackgroundFetchRegistration:W.b,BatteryManager:W.b,BroadcastChannel:W.b,CanvasCaptureMediaStreamTrack:W.b,DedicatedWorkerGlobalScope:W.b,EventSource:W.b,FileReader:W.b,FontFaceSet:W.b,Gyroscope:W.b,XMLHttpRequest:W.b,XMLHttpRequestEventTarget:W.b,XMLHttpRequestUpload:W.b,LinearAccelerationSensor:W.b,Magnetometer:W.b,MediaDevices:W.b,MediaKeySession:W.b,MediaQueryList:W.b,MediaRecorder:W.b,MediaSource:W.b,MediaStream:W.b,MediaStreamTrack:W.b,MessagePort:W.b,MIDIAccess:W.b,MIDIInput:W.b,MIDIOutput:W.b,MIDIPort:W.b,NetworkInformation:W.b,Notification:W.b,OffscreenCanvas:W.b,OrientationSensor:W.b,PaymentRequest:W.b,Performance:W.b,PermissionStatus:W.b,PresentationAvailability:W.b,PresentationConnection:W.b,PresentationConnectionList:W.b,PresentationRequest:W.b,RelativeOrientationSensor:W.b,RemotePlayback:W.b,RTCDataChannel:W.b,DataChannel:W.b,RTCDTMFSender:W.b,RTCPeerConnection:W.b,webkitRTCPeerConnection:W.b,mozRTCPeerConnection:W.b,ScreenOrientation:W.b,Sensor:W.b,ServiceWorker:W.b,ServiceWorkerContainer:W.b,ServiceWorkerGlobalScope:W.b,ServiceWorkerRegistration:W.b,SharedWorker:W.b,SharedWorkerGlobalScope:W.b,SpeechRecognition:W.b,SpeechSynthesis:W.b,SpeechSynthesisUtterance:W.b,VR:W.b,VRDevice:W.b,VRDisplay:W.b,VRSession:W.b,VisualViewport:W.b,WebSocket:W.b,Worker:W.b,WorkerGlobalScope:W.b,WorkerPerformance:W.b,BluetoothDevice:W.b,BluetoothRemoteGATTCharacteristic:W.b,Clipboard:W.b,MojoInterfaceInterceptor:W.b,USB:W.b,IDBDatabase:W.b,IDBOpenDBRequest:W.b,IDBVersionChangeRequest:W.b,IDBRequest:W.b,IDBTransaction:W.b,AnalyserNode:W.b,RealtimeAnalyserNode:W.b,AudioBufferSourceNode:W.b,AudioDestinationNode:W.b,AudioNode:W.b,AudioScheduledSourceNode:W.b,AudioWorkletNode:W.b,BiquadFilterNode:W.b,ChannelMergerNode:W.b,AudioChannelMerger:W.b,ChannelSplitterNode:W.b,AudioChannelSplitter:W.b,ConstantSourceNode:W.b,ConvolverNode:W.b,DelayNode:W.b,DynamicsCompressorNode:W.b,GainNode:W.b,AudioGainNode:W.b,IIRFilterNode:W.b,MediaElementAudioSourceNode:W.b,MediaStreamAudioDestinationNode:W.b,MediaStreamAudioSourceNode:W.b,OscillatorNode:W.b,Oscillator:W.b,PannerNode:W.b,AudioPannerNode:W.b,webkitAudioPannerNode:W.b,ScriptProcessorNode:W.b,JavaScriptAudioNode:W.b,StereoPannerNode:W.b,WaveShaperNode:W.b,EventTarget:W.b,File:W.aN,FileList:W.dK,FileWriter:W.dL,HTMLFormElement:W.dN,Gamepad:W.aO,History:W.hL,HTMLCollection:W.bg,HTMLFormControlsCollection:W.bg,HTMLOptionsCollection:W.bg,ImageData:W.bh,HTMLImageElement:W.bH,KeyboardEvent:W.bj,Location:W.hW,MediaList:W.ic,MIDIInputMap:W.e3,MIDIOutputMap:W.e4,MimeType:W.aS,MimeTypeArray:W.e5,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.cJ,RadioNodeList:W.cJ,Plugin:W.aT,PluginArray:W.ej,RTCStatsReport:W.en,HTMLSelectElement:W.ep,SourceBuffer:W.aB,SourceBufferList:W.et,SpeechGrammar:W.aW,SpeechGrammarList:W.eu,SpeechRecognitionResult:W.aX,Storage:W.ey,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableElement:W.cT,HTMLTableRowElement:W.eC,HTMLTableSectionElement:W.eD,HTMLTemplateElement:W.bU,TextTrack:W.aC,TextTrackCue:W.ah,VTTCue:W.ah,TextTrackCueList:W.eF,TextTrackList:W.eG,TimeRanges:W.iI,Touch:W.aZ,TouchEvent:W.br,TouchList:W.eK,TrackDefaultList:W.iN,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,UIEvent:W.aE,URL:W.iZ,VideoTrackList:W.f3,WheelEvent:W.b0,Window:W.bW,DOMWindow:W.bW,Attr:W.bX,CSSRuleList:W.fb,ClientRect:W.d_,DOMRect:W.d_,GamepadList:W.fp,NamedNodeMap:W.d3,MozNamedAttrMap:W.d3,SpeechRecognitionResultList:W.fJ,StyleSheetList:W.fQ,SVGLength:P.bk,SVGLengthList:P.e_,SVGNumber:P.bn,SVGNumberList:P.ed,SVGPointList:P.il,SVGScriptElement:P.bQ,SVGStringList:P.eB,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.bs,SVGTransformList:P.eL,AudioBuffer:P.hj,AudioParamMap:P.dA,AudioTrackList:P.dB,AudioContext:P.aK,webkitAudioContext:P.aK,BaseAudioContext:P.aK,OfflineAudioContext:P.ee,WebGL2RenderingContext:P.bP,SQLResultSetRowList:P.ev})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.bm.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=X.ol
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
