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
a[c]=function(){a[c]=function(){H.pf(b)}
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
if(a[b]!==s)H.pg(b)
a[b]=r}a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.kB(this,a,b,c,true,false,e).prototype
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
if(w[s][a])return w[s][a]}}var C={},H={ka:function ka(){},
kc:function(a){return new H.cC("Field '"+a+"' has been assigned during initialization.")},
jP:function(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
iB:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nd:function(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
oT:function(a,b,c){return a},
mR:function(a,b,c,d){if(t.gw.b(a))return new H.ct(a,b,c.H("@<0>").b4(d).H("ct<1,2>"))
return new H.aL(a,b,c.H("@<0>").b4(d).H("aL<1,2>"))},
mI:function(){return new P.eN("No element")},
na:function(a,b){H.eI(a,0,J.aY(a)-1,b)},
eI:function(a,b,c,d){if(c-b<=32)H.n9(a,b,c,d)
else H.n8(a,b,c,d)},
n9:function(a,b,c,d){var s,r,q,p,o,n
for(s=b+1,r=J.bB(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.ae()
o=o>0}else o=!1
if(!o)break
n=p-1
r.k(a,p,r.h(a,n))
p=n}r.k(a,p,q)}},
n8:function(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j=C.c.X(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.X(a4+a5,2),f=g-j,e=g+j,d=J.bB(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=b
b=c
c=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=a1
a1=a0
a0=s}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=a
a=c
c=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=a0
a0=c
c=s}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=a0
a0=a
a=s}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=a1
a1=b
b=s}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=a
a=b
b=s}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ae()
if(a2>0){s=a1
a1=a0
a0=s}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
r=a4+1
q=a5-1
if(J.V(a6.$2(b,a0),0)){for(p=r;p<=q;++p){o=d.h(a3,p)
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
H.eI(a3,a4,r-2,a6)
H.eI(a3,q+2,a5,a6)
if(k)return
if(r<i&&q>h){for(;J.V(a6.$2(d.h(a3,r),b),0);)++r
for(;J.V(a6.$2(d.h(a3,q),a0),0);)--q
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
break}}H.eI(a3,r,q,a6)}else H.eI(a3,r,q,a6)},
cC:function cC(a){this.a=a},
Q:function Q(a){this.a=a},
m:function m(){},
bR:function bR(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
aL:function aL(a,b,c){this.a=a
this.b=b
this.$ti=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.$ti=c},
ej:function ej(a,b){this.a=null
this.b=a
this.c=b},
dh:function dh(a,b,c){this.a=a
this.b=b
this.$ti=c},
fh:function fh(a,b){this.a=a
this.b=b},
cu:function cu(){},
f9:function f9(){},
c5:function c5(){},
mB:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
m0:function(a){var s,r=H.m_(a)
if(r!=null)return r
s="minified:"+a
return s},
lT:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
w:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.dS(a)
return s},
cV:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
l0:function(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return H.d(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw H.c(P.a6(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((C.a.C(q,o)|32)>r)return n}return parseInt(a,b)},
cW:function(a){return H.mU(a)},
mU:function(a){var s,r,q,p
if(a instanceof P.O)return H.an(H.aW(a),null)
if(J.dN(a)===C.L||t.ak.b(a)){s=C.q(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return H.an(H.aW(a),null)},
mV:function(){if(!!self.location)return self.location.href
return null},
l_:function(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
n2:function(a){var s,r,q,p=H.b([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r){q=a[r]
if(!H.jF(q))throw H.c(H.dM(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(C.c.aO(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw H.c(H.dM(q))}return H.l_(p)},
l1:function(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!H.jF(q))throw H.c(H.dM(q))
if(q<0)throw H.c(H.dM(q))
if(q>65535)return H.n2(a)}return H.l_(a)},
n3:function(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aR:function(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((C.c.aO(s,10)|55296)>>>0,s&1023|56320)}}throw H.c(P.a6(a,0,1114111,null,null))},
bW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n1:function(a){var s=H.bW(a).getFullYear()+0
return s},
n_:function(a){var s=H.bW(a).getMonth()+1
return s},
mW:function(a){var s=H.bW(a).getDate()+0
return s},
mX:function(a){var s=H.bW(a).getHours()+0
return s},
mZ:function(a){var s=H.bW(a).getMinutes()+0
return s},
n0:function(a){var s=H.bW(a).getSeconds()+0
return s},
mY:function(a){var s=H.bW(a).getMilliseconds()+0
return s},
p3:function(a){throw H.c(H.dM(a))},
d:function(a,b){if(a==null)J.aY(a)
throw H.c(H.cg(a,b))},
cg:function(a,b){var s,r="index"
if(!H.jF(b))return new P.aE(!0,b,r,null)
s=J.aY(a)
if(b<0||b>=s)return P.L(b,a,r,null,s)
return P.eD(b,r)},
oY:function(a,b,c){if(a>c)return P.a6(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return P.a6(b,a,c,"end",null)
return new P.aE(!0,b,"end",null)},
dM:function(a){return new P.aE(!0,a,null,null)},
c:function(a){var s,r
if(a==null)a=new P.eu()
s=new Error()
s.dartException=a
r=H.ph
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
ph:function(){return J.dS(this.dartException)},
h:function(a){throw H.c(a)},
r:function(a){throw H.c(P.b0(a))},
aT:function(a){var s,r,q,p,o,n
a=H.lW(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.b([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.iM(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
iN:function(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
le:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
kb:function(a,b){var s=b==null,r=s?null:b.method
return new H.ef(a,r,s?null:b.receiver)},
bg:function(a){if(a==null)return new H.im(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.bC(a,a.dartException)
return H.oP(a)},
bC:function(a,b){if(t.bU.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
oP:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.c.aO(r,16)&8191)===10)switch(q){case 438:return H.bC(a,H.kb(H.w(s)+" (Error "+q+")",e))
case 445:case 5007:p=H.w(s)+" (Error "+q+")"
return H.bC(a,new H.cT(p,e))}}if(a instanceof TypeError){o=$.m4()
n=$.m5()
m=$.m6()
l=$.m7()
k=$.ma()
j=$.mb()
i=$.m9()
$.m8()
h=$.md()
g=$.mc()
f=o.ab(s)
if(f!=null)return H.bC(a,H.kb(s,f))
else{f=n.ab(s)
if(f!=null){f.method="call"
return H.bC(a,H.kb(s,f))}else{f=m.ab(s)
if(f==null){f=l.ab(s)
if(f==null){f=k.ab(s)
if(f==null){f=j.ab(s)
if(f==null){f=i.ab(s)
if(f==null){f=l.ab(s)
if(f==null){f=h.ab(s)
if(f==null){f=g.ab(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return H.bC(a,new H.cT(s,f==null?e:f.method))}}return H.bC(a,new H.f8(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.d1()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.bC(a,new P.aE(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.d1()
return a},
kD:function(a){var s
if(a==null)return new H.fW(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.fW(a)},
p_:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.k(0,a[s],a[r])}return b},
p7:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.f("Unsupported number of arguments for wrapped closure"))},
cf:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p7)
a.$identity=s
return s},
mA:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.iz().constructor.prototype):Object.create(new H.cj(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.aF
if(typeof r!=="number")return r.W()
$.aF=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.kO(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.mw(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kO(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
mw:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lR,a)
if(typeof a=="string"){if(b)throw H.c("Cannot compute signature for static tearoff.")
s=c?H.mu:H.mt
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.c("Error in functionType of tearoff")},
mx:function(a,b,c,d){var s=H.kN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
kO:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.mz(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.mx(r,!p,s,b)
if(r===0){p=$.aF
if(typeof p!=="number")return p.W()
$.aF=p+1
n="self"+p
p="return function(){var "+n+" = this."
o=$.ck
return new Function(p+(o==null?$.ck=H.hs("self"):o)+";return "+n+"."+H.w(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.aF
if(typeof p!=="number")return p.W()
$.aF=p+1
m+=p
p="return function("+m+"){return this."
o=$.ck
return new Function(p+(o==null?$.ck=H.hs("self"):o)+"."+H.w(s)+"("+m+");}")()},
my:function(a,b,c,d){var s=H.kN,r=H.mv
switch(b?-1:a){case 0:throw H.c(new H.eG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
mz:function(a,b){var s,r,q,p,o,n,m,l=$.ck
if(l==null)l=$.ck=H.hs("self")
s=$.kM
if(s==null)s=$.kM=H.hs("receiver")
r=b.$stubName
q=b.length
p=a[r]
o=b==null?p==null:b===p
n=!o||q>=28
if(n)return H.my(q,!o,r,b)
if(q===1){o="return function(){return this."+l+"."+H.w(r)+"(this."+s+");"
n=$.aF
if(typeof n!=="number")return n.W()
$.aF=n+1
return new Function(o+n+"}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,q-1).join(",")
o="return function("+m+"){return this."+l+"."+H.w(r)+"(this."+s+", "+m+");"
n=$.aF
if(typeof n!=="number")return n.W()
$.aF=n+1
return new Function(o+n+"}")()},
kB:function(a,b,c,d,e,f,g){return H.mA(a,b,c,d,!!e,!!f,g)},
mt:function(a,b){return H.h7(v.typeUniverse,H.aW(a.a),b)},
mu:function(a,b){return H.h7(v.typeUniverse,H.aW(a.c),b)},
kN:function(a){return a.a},
mv:function(a){return a.c},
hs:function(a){var s,r,q,p=new H.cj("self","target","receiver","name"),o=J.k9(Object.getOwnPropertyNames(p))
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.c(P.bE("Field name "+a+" not found."))},
pf:function(a){throw H.c(new P.e3(a))},
p1:function(a){return v.getIsolateTag(a)},
pg:function(a){return H.h(new H.cC(a))},
qn:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
p9:function(a){var s,r,q,p,o,n=$.lQ.$1(a),m=$.jK[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jU[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.lN.$2(a,n)
if(q!=null){m=$.jK[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.jU[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.jX(s)
$.jK[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.jU[n]=s
return s}if(p==="-"){o=H.jX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lU(a,s)
if(p==="*")throw H.c(P.iP(n))
if(v.leafTags[n]===true){o=H.jX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lU(a,s)},
lU:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.kG(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
jX:function(a){return J.kG(a,!1,null,!!a.$iy)},
pb:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.jX(s)
else return J.kG(s,c,null,null)},
p5:function(){if(!0===$.kE)return
$.kE=!0
H.p6()},
p6:function(){var s,r,q,p,o,n,m,l
$.jK=Object.create(null)
$.jU=Object.create(null)
H.p4()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.lV.$1(o)
if(n!=null){m=H.pb(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
p4:function(){var s,r,q,p,o,n,m=C.C()
m=H.ce(C.D,H.ce(C.E,H.ce(C.r,H.ce(C.r,H.ce(C.F,H.ce(C.G,H.ce(C.H(C.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.lQ=new H.jQ(p)
$.lN=new H.jR(o)
$.lV=new H.jS(n)},
ce:function(a,b){return a(b)||b},
mM:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.c(P.a5("Illegal RegExp pattern ("+String(n)+")",a,null))},
lX:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
oZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lW:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lY:function(a,b,c){var s=H.pe(a,b,c)
return s},
pe:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
r=""+c
for(q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lW(b),'g'),H.oZ(c))},
co:function co(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iM:function iM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cT:function cT(a,b){this.a=a
this.b=b},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a){this.a=a},
im:function im(a){this.a=a},
fW:function fW(a){this.a=a
this.b=null},
bH:function bH(){},
iD:function iD(){},
iz:function iz(){},
cj:function cj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a){this.a=a},
U:function U(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hV:function hV(a){this.a=a},
hX:function hX(a,b){this.a=a
this.b=b
this.c=null},
cE:function cE(a,b){this.a=a
this.$ti=b},
ei:function ei(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
ee:function ee(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){var s,r,q,p,o
if(t.aP.b(a))return a
s=J.bB(a)
r=s.gj(a)
q=P.cG(r,null,!1,t.z)
for(p=0;p<s.gj(a);++p){o=s.h(a,p)
if(p>=r)return H.d(q,p)
q[p]=o}return q},
aV:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cg(b,a))},
o2:function(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw H.c(H.oY(a,b,c))
return b},
cP:function cP(){},
Y:function Y(){},
bU:function bU(){},
bx:function bx(){},
cQ:function cQ(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
cR:function cR(){},
by:function by(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
l7:function(a,b){var s=b.c
return s==null?b.c=H.kq(a,b.z,!0):s},
l6:function(a,b){var s=b.c
return s==null?b.c=H.dC(a,"kQ",[b.z]):s},
l8:function(a){var s=a.y
if(s===6||s===7||s===8)return H.l8(a.z)
return s===11||s===12},
n6:function(a){return a.cy},
kC:function(a){return H.kr(v.typeUniverse,a,!1)},
bd:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bd(a,s,a0,a1)
if(r===s)return b
return H.lv(a,r,!0)
case 7:s=b.z
r=H.bd(a,s,a0,a1)
if(r===s)return b
return H.kq(a,r,!0)
case 8:s=b.z
r=H.bd(a,s,a0,a1)
if(r===s)return b
return H.lu(a,r,!0)
case 9:q=b.Q
p=H.dL(a,q,a0,a1)
if(p===q)return b
return H.dC(a,b.z,p)
case 10:o=b.z
n=H.bd(a,o,a0,a1)
m=b.Q
l=H.dL(a,m,a0,a1)
if(n===o&&l===m)return b
return H.ko(a,n,l)
case 11:k=b.z
j=H.bd(a,k,a0,a1)
i=b.Q
h=H.oM(a,i,a0,a1)
if(j===k&&h===i)return b
return H.lt(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.dL(a,g,a0,a1)
o=b.z
n=H.bd(a,o,a0,a1)
if(f===g&&n===o)return b
return H.kp(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.c(P.hl("Attempted to substitute unexpected RTI kind "+c))}},
dL:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bd(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
oN:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bd(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
oM:function(a,b,c,d){var s,r=b.a,q=H.dL(a,r,c,d),p=b.b,o=H.dL(a,p,c,d),n=b.c,m=H.oN(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fy()
s.a=q
s.b=o
s.c=m
return s},
b:function(a,b){a[v.arrayRti]=b
return a},
oU:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.lR(s)
return a.$S()}return null},
lS:function(a,b){var s
if(H.l8(b))if(a instanceof H.bH){s=H.oU(a)
if(s!=null)return s}return H.aW(a)},
aW:function(a){var s
if(a instanceof P.O){s=a.$ti
return s!=null?s:H.kx(a)}if(Array.isArray(a))return H.lE(a)
return H.kx(J.dN(a))},
lE:function(a){var s=a[v.arrayRti],r=t.gn
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
S:function(a){var s=a.$ti
return s!=null?s:H.kx(a)},
kx:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.oa(a,s)},
oa:function(a,b){var s=a instanceof H.bH?a.__proto__.__proto__.constructor:b,r=H.nK(v.typeUniverse,s.name)
b.$ccache=r
return r},
lR:function(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=H.kr(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
o9:function(a){var s,r,q,p=this
if(p===t.K)return H.dI(p,a,H.oe)
if(!H.aX(p))if(!(p===t._))s=!1
else s=!0
else s=!0
if(s)return H.dI(p,a,H.oh)
s=p.y
r=s===6?p.z:p
if(r===t.S)q=H.jF
else if(r===t.gR||r===t.H)q=H.od
else if(r===t.N)q=H.of
else q=r===t.cJ?H.jE:null
if(q!=null)return H.dI(p,a,q)
if(r.y===9){s=r.z
if(r.Q.every(H.p8)){p.r="$i"+s
return H.dI(p,a,H.og)}}else if(s===7)return H.dI(p,a,H.o7)
return H.dI(p,a,H.o5)},
dI:function(a,b,c){a.b=c
return a.b(b)},
o8:function(a){var s,r=this,q=H.o4
if(!H.aX(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=H.o1
else if(r===t.K)q=H.o_
else{s=H.dO(r)
if(s)q=H.o6}r.a=q
return r.a(a)},
kA:function(a){var s,r=a.y
if(!H.aX(a))if(!(a===t._))if(!(a===t.A))if(r!==7)s=r===8&&H.kA(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
o5:function(a){var s=this
if(a==null)return H.kA(s)
return H.P(v.typeUniverse,H.lS(a,s),null,s,null)},
o7:function(a){if(a==null)return!0
return this.z.b(a)},
og:function(a){var s,r=this
if(a==null)return H.kA(r)
s=r.r
if(a instanceof P.O)return!!a[s]
return!!J.dN(a)[s]},
o4:function(a){var s,r=this
if(a==null){s=H.dO(r)
if(s)return a}else if(r.b(a))return a
H.lH(a,r)},
o6:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.lH(a,s)},
lH:function(a,b){throw H.c(H.nA(H.lo(a,H.lS(a,b),H.an(b,null))))},
lo:function(a,b,c){var s=P.hM(a),r=H.an(b==null?H.aW(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
nA:function(a){return new H.dA("TypeError: "+a)},
a8:function(a,b){return new H.dA("TypeError: "+H.lo(a,null,b))},
oe:function(a){return a!=null},
o_:function(a){if(a!=null)return a
throw H.c(H.a8(a,"Object"))},
oh:function(a){return!0},
o1:function(a){return a},
jE:function(a){return!0===a||!1===a},
lF:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.c(H.a8(a,"bool"))},
qb:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a8(a,"bool"))},
qa:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.c(H.a8(a,"bool?"))},
qc:function(a){if(typeof a=="number")return a
throw H.c(H.a8(a,"double"))},
qe:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"double"))},
qd:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"double?"))},
jF:function(a){return typeof a=="number"&&Math.floor(a)===a},
jy:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.c(H.a8(a,"int"))},
qg:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a8(a,"int"))},
qf:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.c(H.a8(a,"int?"))},
od:function(a){return typeof a=="number"},
qh:function(a){if(typeof a=="number")return a
throw H.c(H.a8(a,"num"))},
qj:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"num"))},
qi:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.c(H.a8(a,"num?"))},
of:function(a){return typeof a=="string"},
o0:function(a){if(typeof a=="string")return a
throw H.c(H.a8(a,"String"))},
ql:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a8(a,"String"))},
qk:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.c(H.a8(a,"String?"))},
oI:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+H.an(a[q],b)
return s},
lI:function(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=H.b([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)a5.push("T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(j<0)return H.d(a5,j)
m=C.a.W(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+H.an(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.an(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+H.an(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+H.an(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=H.an(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
an:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.an(a.z,b)
return s}if(l===7){r=a.z
s=H.an(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+H.an(a.z,b)+">"
if(l===9){p=H.oO(a.z)
o=a.Q
return o.length!==0?p+("<"+H.oI(o,b)+">"):p}if(l===11)return H.lI(a,b,null)
if(l===12)return H.lI(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.d(b,n)
return b[n]}return"?"},
oO:function(a){var s,r=H.m_(a)
if(r!=null)return r
s="minified:"+a
return s},
lw:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
nK:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.kr(a,b,!1)
else if(typeof m=="number"){s=m
r=H.dD(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.dC(a,b,q)
n[b]=o
return o}else return m},
nI:function(a,b){return H.lD(a.tR,b)},
nH:function(a,b){return H.lD(a.eT,b)},
kr:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.ls(H.lq(a,null,b,c))
r.set(b,s)
return s},
h7:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.ls(H.lq(a,b,c,!0))
q.set(c,r)
return r},
nJ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.ko(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bc:function(a,b){b.a=H.o8
b.b=H.o9
return b},
dD:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.av(null,null)
s.y=b
s.cy=c
r=H.bc(a,s)
a.eC.set(c,r)
return r},
lv:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.nF(a,b,r,c)
a.eC.set(r,s)
return s},
nF:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aX(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.av(null,null)
q.y=6
q.z=b
q.cy=c
return H.bc(a,q)},
kq:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.nE(a,b,r,c)
a.eC.set(r,s)
return s},
nE:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.aX(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&H.dO(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.z
if(q.y===8&&H.dO(q.z))return q
else return H.l7(a,b)}}p=new H.av(null,null)
p.y=7
p.z=b
p.cy=c
return H.bc(a,p)},
lu:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.nC(a,b,r,c)
a.eC.set(r,s)
return s},
nC:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.aX(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.dC(a,"kQ",[b])
else if(b===t.P||b===t.T)return t.bG}q=new H.av(null,null)
q.y=8
q.z=b
q.cy=c
return H.bc(a,q)},
nG:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.av(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bc(a,s)
a.eC.set(q,r)
return r},
h6:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
nB:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
dC:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.h6(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.av(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bc(a,r)
a.eC.set(p,q)
return q},
ko:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.h6(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bc(a,o)
a.eC.set(q,n)
return n},
lt:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.h6(m)
if(j>0){s=l>0?",":""
r=H.h6(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.nB(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.av(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bc(a,o)
a.eC.set(q,r)
return r},
kp:function(a,b,c,d){var s,r=b.cy+("<"+H.h6(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.nD(a,b,c,r,d)
a.eC.set(r,s)
return s},
nD:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bd(a,b,r,0)
m=H.dL(a,c,r,0)
return H.kp(a,n,m,c!==m)}}l=new H.av(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bc(a,l)},
lq:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
ls:function(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=H.nu(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.lr(a,r,h,g,!1)
else if(q===46)r=H.lr(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.bb(a.u,a.e,g.pop()))
break
case 94:g.push(H.nG(a.u,g.pop()))
break
case 35:g.push(H.dD(a.u,5,"#"))
break
case 64:g.push(H.dD(a.u,2,"@"))
break
case 126:g.push(H.dD(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
H.kn(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(H.dC(p,n,o))
else{m=H.bb(p,a.e,n)
switch(m.y){case 11:g.push(H.kp(p,m,o,a.n))
break
default:g.push(H.ko(p,m,o))
break}}break
case 38:H.nv(a,g)
break
case 42:p=a.u
g.push(H.lv(p,H.bb(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(H.kq(p,H.bb(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(H.lu(p,H.bb(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new H.fy()
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
H.kn(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(H.lt(p,H.bb(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
H.kn(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
H.nx(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return H.bb(a.u,a.e,i)},
nu:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
lr:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.lw(s,o.z)[p]
if(n==null)H.h('No "'+p+'" in "'+H.n6(o)+'"')
d.push(H.h7(s,o,n))}else d.push(p)
return m},
nv:function(a,b){var s=b.pop()
if(0===s){b.push(H.dD(a.u,1,"0&"))
return}if(1===s){b.push(H.dD(a.u,4,"1&"))
return}throw H.c(P.hl("Unexpected extended operation "+H.w(s)))},
bb:function(a,b,c){if(typeof c=="string")return H.dC(a,c,a.sEA)
else if(typeof c=="number")return H.nw(a,b,c)
else return c},
kn:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bb(a,b,c[s])},
nx:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bb(a,b,c[s])},
nw:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.c(P.hl("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.c(P.hl("Bad index "+c+" for "+b.i(0)))},
P:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.aX(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.aX(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(H.P(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return H.P(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return H.P(a,b.z,c,d,e)
if(r===6)return H.P(a,b.z,c,d,e)
return r!==7}if(r===6)return H.P(a,b.z,c,d,e)
if(p===6){s=H.l7(a,d)
return H.P(a,b,c,s,e)}if(r===8){if(!H.P(a,b.z,c,d,e))return!1
return H.P(a,H.l6(a,b),c,d,e)}if(r===7){s=H.P(a,t.P,c,d,e)
return s&&H.P(a,b.z,c,d,e)}if(p===8){if(H.P(a,b,c,d.z,e))return!0
return H.P(a,b,c,H.l6(a,d),e)}if(p===7){s=H.P(a,b,c,t.P,e)
return s||H.P(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b8)return!0
if(p===12){if(b===t.O)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.P(a,k,c,j,e)||!H.P(a,j,e,k,c))return!1}return H.lJ(a,b.z,c,d.z,e)}if(p===11){if(b===t.O)return!0
if(s)return!1
return H.lJ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.oc(a,b,c,d,e)}return!1},
lJ:function(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!H.P(a3,a4.z,a5,a6.z,a7))return!1
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
if(!H.P(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.P(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.P(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!H.P(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
oc:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.P(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.lw(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.P(a,H.h7(a,b,l[p]),c,r[p],e))return!1
return!0},
dO:function(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!H.aX(a))if(r!==7)if(!(r===6&&H.dO(a.z)))s=r===8&&H.dO(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
p8:function(a){var s
if(!H.aX(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
aX:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
lD:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
av:function av(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fy:function fy(){this.c=this.b=this.a=null},
fu:function fu(){},
dA:function dA(a){this.a=a},
m_:function(a){return v.mangledGlobalNames[a]},
pc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jM:function(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.kE==null){H.p5()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw H.c(P.iP("Return interceptor for "+H.w(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.jg
if(o==null)o=$.jg=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=H.p9(a)
if(p!=null)return p
if(typeof a=="function")return C.N
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){o=$.jg
if(o==null)o=$.jg=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
mJ:function(a,b){if(a<0||a>4294967295)throw H.c(P.a6(a,0,4294967295,"length",null))
return J.mK(new Array(a),b)},
k8:function(a,b){if(a<0)throw H.c(P.bE("Length must be a non-negative integer: "+a))
return H.b(new Array(a),b.H("u<0>"))},
mK:function(a,b){return J.k9(H.b(a,b.H("u<0>")))},
k9:function(a){a.fixed$length=Array
return a},
mL:function(a,b){return J.mo(a,b)},
dN:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cy.prototype
return J.ed.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.cz.prototype
if(typeof a=="boolean")return J.ec.prototype
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.O)return a
return J.jM(a)},
bB:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.O)return a
return J.jM(a)},
jL:function(a){if(a==null)return a
if(a.constructor==Array)return J.u.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.O)return a
return J.jM(a)},
p0:function(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.O))return J.c4.prototype
return a},
bf:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aJ.prototype
return a}if(a instanceof P.O)return a
return J.jM(a)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dN(a).m(a,b)},
kK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lT(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bB(a).h(a,b)},
k_:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lT(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jL(a).k(a,b,c)},
mm:function(a,b,c){return J.bf(a).fH(a,b,c)},
mn:function(a,b,c,d){return J.bf(a).h_(a,b,c,d)},
mo:function(a,b){return J.p0(a).a9(a,b)},
k0:function(a,b){return J.jL(a).E(a,b)},
dR:function(a,b){return J.jL(a).A(a,b)},
mp:function(a){return J.bf(a).gbn(a)},
mq:function(a){return J.bf(a).gdf(a)},
k1:function(a){return J.dN(a).gw(a)},
aD:function(a){return J.jL(a).gN(a)},
aY:function(a){return J.bB(a).gj(a)},
mr:function(a,b){return J.bf(a).hM(a,b)},
dS:function(a){return J.dN(a).i(a)},
a:function a(){},
ec:function ec(){},
cz:function cz(){},
b2:function b2(){},
ez:function ez(){},
c4:function c4(){},
aJ:function aJ(){},
u:function u(a){this.$ti=a},
hU:function hU(a){this.$ti=a},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bQ:function bQ(){},
cy:function cy(){},
ed:function ed(){},
bt:function bt(){}},P={
nn:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.oQ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.cf(new P.jc(q),1)).observe(s,{childList:true})
return new P.jb(q,s,r)}else if(self.setImmediate!=null)return P.oR()
return P.oS()},
no:function(a){self.scheduleImmediate(H.cf(new P.jd(a),0))},
np:function(a){self.setImmediate(H.cf(new P.je(a),0))},
nq:function(a){P.kg(C.m,a)},
kg:function(a,b){var s=C.c.X(a.a,1000)
return P.ny(s<0?0:s,b)},
ld:function(a,b){var s=C.c.X(a.a,1000)
return P.nz(s<0?0:s,b)},
ny:function(a,b){var s=new P.dz()
s.en(a,b)
return s},
nz:function(a,b){var s=new P.dz()
s.eo(a,b)
return s},
q8:function(a){return new P.c9(a,1)},
nr:function(){return C.Y},
ns:function(a){return new P.c9(a,3)},
oj:function(a,b){return new P.dw(a,b.H("dw<0>"))},
oF:function(){var s,r
for(s=$.cd;s!=null;s=$.cd){$.dK=null
r=s.b
$.cd=r
if(r==null)$.dJ=null
s.a.$0()}},
oL:function(){$.ky=!0
try{P.oF()}finally{$.dK=null
$.ky=!1
if($.cd!=null)$.kJ().$1(P.lO())}},
oJ:function(a){var s=new P.fi(a),r=$.dJ
if(r==null){$.cd=$.dJ=s
if(!$.ky)$.kJ().$1(P.lO())}else $.dJ=r.b=s},
oK:function(a){var s,r,q,p=$.cd
if(p==null){P.oJ(a)
$.dK=$.dJ
return}s=new P.fi(a)
r=$.dK
if(r==null){s.b=p
$.cd=$.dK=s}else{q=r.b
s.b=q
$.dK=r.b=s
if(q==null)$.dJ=s}},
lc:function(a,b){var s=$.aC
if(s===C.f)return P.kg(a,b)
return P.kg(a,s.h2(b))},
nf:function(a,b){var s=$.aC
if(s===C.f)return P.ld(a,b)
return P.ld(a,s.dc(b,t.aF))},
lK:function(a,b,c,d,e){P.oK(new P.jI(d,e))},
oG:function(a,b,c,d){var s,r=$.aC
if(r===c)return d.$0()
$.aC=c
s=r
try{r=d.$0()
return r}finally{$.aC=s}},
oH:function(a,b,c,d,e){var s,r=$.aC
if(r===c)return d.$1(e)
$.aC=c
s=r
try{r=d.$1(e)
return r}finally{$.aC=s}},
jc:function jc(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
dz:function dz(){this.c=0},
jr:function jr(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c9:function c9(a,b){this.a=a
this.b=b},
ca:function ca(a){var _=this
_.a=a
_.d=_.c=_.b=null},
dw:function dw(a,b){this.a=a
this.$ti=b},
fi:function fi(a){this.a=a
this.b=null},
c_:function c_(){},
eP:function eP(){},
jw:function jw(){},
jI:function jI(a,b){this.a=a
this.b=b},
jj:function jj(){},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
mN:function(a,b){return new H.U(a.H("@<0>").b4(b).H("U<1,2>"))},
mO:function(a,b,c){return H.p_(a,new H.U(b.H("@<0>").b4(c).H("U<1,2>")))},
R:function(a,b){return new H.U(a.H("@<0>").b4(b).H("U<1,2>"))},
kT:function(a){return new P.dk(a.H("dk<0>"))},
km:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
nt:function(a,b){var s=new P.dl(a,b)
s.c=a.e
return s},
mH:function(a,b,c){var s,r
if(P.kz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.b([],t.s)
$.ah.push(a)
try{P.oi(a,s)}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}r=P.la(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
k7:function(a,b,c){var s,r
if(P.kz(a))return b+"..."+c
s=new P.Z(b)
$.ah.push(a)
try{r=s
r.a=P.la(r.a,a,", ")}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
kz:function(a){var s,r
for(s=$.ah.length,r=0;r<s;++r)if(a===$.ah[r])return!0
return!1},
oi:function(a,b){var s,r,q,p,o,n,m,l=a.gN(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.t())return
s=H.w(l.gD(l))
b.push(s)
k+=s.length+2;++j}if(!l.t()){if(j<=5)return
if(0>=b.length)return H.d(b,-1)
r=b.pop()
if(0>=b.length)return H.d(b,-1)
q=b.pop()}else{p=l.gD(l);++j
if(!l.t()){if(j<=4){b.push(H.w(p))
return}r=H.w(p)
if(0>=b.length)return H.d(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gD(l);++j
for(;l.t();p=o,o=n){n=l.gD(l);++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2;--j}b.push("...")
return}}q=H.w(p)
r=H.w(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
mP:function(a,b,c){var s=P.mN(b,c)
a.A(0,new P.hY(s,b,c))
return s},
kd:function(a){var s,r={}
if(P.kz(a))return"{...}"
s=new P.Z("")
try{$.ah.push(a)
s.a+="{"
r.a=!0
J.dR(a,new P.i1(r,s))
s.a+="}"}finally{if(0>=$.ah.length)return H.d($.ah,-1)
$.ah.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dk:function dk(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
dl:function dl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cx:function cx(){},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(){},
j:function j(){},
cI:function cI(){},
i1:function i1(a,b){this.a=a
this.b=b},
N:function N(){},
h8:function h8(){},
cJ:function cJ(){},
c6:function c6(a,b){this.a=a
this.$ti=b},
cZ:function cZ(){},
dt:function dt(){},
dm:function dm(){},
dE:function dE(){},
dG:function dG(){},
ni:function(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=P.nj(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
nj:function(a,b,c,d){var s=a?$.mf():$.me()
if(s==null)return null
if(0===c&&d===b.length)return P.li(s,b)
return P.li(s,b.subarray(c,P.b6(c,d,b.length)))},
li:function(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){H.bg(r)}return null},
kL:function(a,b,c,d,e,f){if(C.c.bh(f,4)!==0)throw H.c(P.a5("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a5("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a5("Invalid base64 padding, more than two '=' characters",a,b))},
nZ:function(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
nY:function(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.bB(a),r=0;r<p;++r){q=s.h(a,b+r)
o[r]=(q&4294967040)>>>0!==0?255:q}return o},
iZ:function iZ(){},
iY:function iY(){},
hp:function hp(){},
hq:function hq(){},
e_:function e_(){},
e2:function e2(){},
hI:function hI(){},
iW:function iW(){},
j_:function j_(){},
jv:function jv(a){this.b=0
this.c=a},
iX:function iX(a){this.a=a},
ju:function ju(a){this.a=a
this.b=16
this.c=0},
jT:function(a,b){var s=H.l0(a,b)
if(s!=null)return s
throw H.c(P.a5(a,null,null))},
mE:function(a){if(a instanceof H.bH)return a.i(0)
return"Instance of '"+H.cW(a)+"'"},
cG:function(a,b,c,d){var s,r=c?J.k8(a,d):J.mJ(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hZ:function(a,b,c){var s,r=H.b([],c.H("u<0>"))
for(s=J.aD(a);s.t();)r.push(s.gD(s))
if(b)return r
return J.k9(r)},
mQ:function(a,b,c){var s,r,q=J.k8(a,c)
for(s=0;s<a;++s){r=b.$1(s)
if(s>=q.length)return H.d(q,s)
q[s]=r}return q},
eR:function(a,b,c){var s,r
if(Array.isArray(a)){s=a
r=s.length
c=P.b6(b,c,r)
return H.l1(b>0||c<r?s.slice(b,c):s)}if(t.bm.b(a))return H.n3(a,b,P.b6(b,c,a.length))
return P.nc(a,b,c)},
nc:function(a,b,c){var s,r,q,p,o=null
if(b<0)throw H.c(P.a6(b,0,a.length,o,o))
s=c==null
if(!s&&c<b)throw H.c(P.a6(c,b,a.length,o,o))
r=J.aD(a)
for(q=0;q<b;++q)if(!r.t())throw H.c(P.a6(b,0,q,o,o))
p=[]
if(s)for(;r.t();)p.push(r.gD(r))
else for(q=b;q<c;++q){if(!r.t())throw H.c(P.a6(c,b,q,o,o))
p.push(r.gD(r))}return H.l1(p)},
n4:function(a){return new H.ee(a,H.mM(a,!1,!0,!1,!1,!1))},
la:function(a,b,c){var s=J.aD(b)
if(!s.t())return a
if(c.length===0){do a+=H.w(s.gD(s))
while(s.t())}else{a+=H.w(s.gD(s))
for(;s.t();)a=a+c+H.w(s.gD(s))}return a},
ki:function(){var s=H.mV()
if(s!=null)return P.nh(s)
throw H.c(P.z("'Uri.base' is not supported"))},
kw:function(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===C.e){s=$.mk().b
s=s.test(b)}else s=!1
if(s)return b
r=c.ghg().c8(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(n>=8)return H.d(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=H.aR(o)
else p=d&&o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
mC:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
mD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
e4:function(a){if(a>=10)return""+a
return"0"+a},
kP:function(a){return new P.bp(1000*a)},
hM:function(a){if(typeof a=="number"||H.jE(a)||null==a)return J.dS(a)
if(typeof a=="string")return JSON.stringify(a)
return P.mE(a)},
hl:function(a){return new P.dW(a)},
bE:function(a){return new P.aE(!1,null,null,a)},
eD:function(a,b){return new P.cX(null,null,!0,a,b,"Value not in range")},
a6:function(a,b,c,d,e){return new P.cX(b,c,!0,a,d,"Invalid value")},
b6:function(a,b,c){if(0>a||a>c)throw H.c(P.a6(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.a6(b,a,c,"end",null))
return b}return c},
l2:function(a,b){if(a<0)throw H.c(P.a6(a,0,null,b,null))
return a},
L:function(a,b,c,d,e){var s=e==null?J.aY(b):e
return new P.ea(s,!0,a,c,"Index out of range")},
z:function(a){return new P.fa(a)},
iP:function(a){return new P.f7(a)},
b0:function(a){return new P.e1(a)},
f:function(a){return new P.fv(a)},
a5:function(a,b,c){return new P.hR(a,b,c)},
kI:function(a){H.pc(a)},
nh:function(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((C.a.C(a5,4)^58)*3|C.a.C(a5,0)^100|C.a.C(a5,1)^97|C.a.C(a5,2)^116|C.a.C(a5,3)^97)>>>0
if(s===0)return P.lf(a4<a4?C.a.p(a5,0,a4):a5,5,a3).ge1()
else if(s===32)return P.lf(C.a.p(a5,5,a4),0,a3).ge1()}r=P.cG(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(P.lL(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(P.lL(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
if(k)if(p>q+3){j=a3
k=!1}else{i=o>0
if(i&&o+1===n){j=a3
k=!1}else{if(!(m<a4&&m===n+2&&C.a.a0(a5,"..",n)))h=m>n+2&&C.a.a0(a5,"/..",m-3)
else h=!0
if(h){j=a3
k=!1}else{if(q===4)if(C.a.a0(a5,"file",0)){if(p<=0){if(!C.a.a0(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+C.a.p(a5,n,a4)
q-=0
i=s-0
m+=i
l+=i
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=C.a.aY(a5,n,m,"/");++a4
m=f}j="file"}else if(C.a.a0(a5,"http",0)){if(i&&o+3===n&&C.a.a0(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=C.a.aY(a5,o,n,"")
a4-=3
n=e}j="http"}else j=a3
else if(q===5&&C.a.a0(a5,"https",0)){if(i&&o+4===n&&C.a.a0(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=C.a.aY(a5,o,n,"")
a4-=3
n=e}j="https"}else j=a3
k=!0}}}else j=a3
if(k){if(a4<a5.length){a5=C.a.p(a5,0,a4)
q-=0
p-=0
o-=0
n-=0
m-=0
l-=0}return new P.fQ(a5,q,p,o,n,m,l,j)}if(j==null)if(q>0)j=P.nS(a5,0,q)
else{if(q===0)P.cb(a5,0,"Invalid empty scheme")
j=""}if(p>0){d=q+3
c=d<p?P.nT(a5,d,p-1):""
b=P.nP(a5,p,o,!1)
i=o+1
if(i<n){a=H.l0(C.a.p(a5,i,n),a3)
a0=P.nR(a==null?H.h(P.a5("Invalid port",a5,i)):a,j)}else a0=a3}else{a0=a3
b=a0
c=""}a1=P.nQ(a5,n,m,a3,j,b!=null)
a2=m<l?P.kt(a5,m+1,l,a3):a3
return new P.bA(j,c,b,a0,a1,a2,l<a4?P.nO(a5,l+1,a4):a3)},
lh:function(a){var s=t.N
return C.b.hk(H.b(a.split("&"),t.s),P.R(s,s),new P.iU(C.e))},
ng:function(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iR(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=C.a.O(a,s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=P.jT(C.a.p(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
if(q>=4)return H.d(j,q)
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=P.jT(C.a.p(a,r,c),null)
if(o>255)k.$2(l,r)
if(q>=4)return H.d(j,q)
j[q]=o
return j},
lg:function(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new P.iS(a),c=new P.iT(d,a)
if(a.length<2)d.$1("address is too short")
s=H.b([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=C.a.O(a,r)
if(n===58){if(r===b){++r
if(C.a.O(a,r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$1("too few parts")
m=q===a0
l=C.b.gaB(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=P.ng(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)d.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){if(h<0||h>=16)return H.d(j,h)
j[h]=0
e=h+1
if(e>=16)return H.d(j,e)
j[e]=0
h+=2}else{e=C.c.aO(g,8)
if(h<0||h>=16)return H.d(j,h)
j[h]=e
e=h+1
if(e>=16)return H.d(j,e)
j[e]=g&255
h+=2}}return j},
lx:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cb:function(a,b,c){throw H.c(P.a5(c,a,b))},
nR:function(a,b){if(a!=null&&a===P.lx(b))return null
return a},
nP:function(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(C.a.O(a,b)===91){s=c-1
if(C.a.O(a,s)!==93)P.cb(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=P.nM(a,r,s)
if(q<s){p=q+1
o=P.lC(a,C.a.a0(a,"25",p)?q+3:p,s,"%25")}else o=""
P.lg(a,r,q)
return C.a.p(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(C.a.O(a,n)===58){q=C.a.bq(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=P.lC(a,C.a.a0(a,"25",p)?q+3:p,c,"%25")}else o=""
P.lg(a,b,q)
return"["+C.a.p(a,b,q)+o+"]"}return P.nV(a,b,c)},
nM:function(a,b,c){var s=C.a.bq(a,"%",b)
return s>=b&&s<c?s:c},
lC:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new P.Z(d):null
for(s=b,r=s,q=!0;s<c;){p=C.a.O(a,s)
if(p===37){o=P.ku(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new P.Z("")
m=i.a+=C.a.p(a,r,s)
if(n)o=C.a.p(a,s,s+3)
else if(o==="%")P.cb(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else{if(p<127){n=p>>>4
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(p&15))!==0}else n=!1
if(n){if(q&&65<=p&&90>=p){if(i==null)i=new P.Z("")
if(r<s){i.a+=C.a.p(a,r,s)
r=s}q=!1}++s}else{if((p&64512)===55296&&s+1<c){l=C.a.O(a,s+1)
if((l&64512)===56320){p=(p&1023)<<10|l&1023|65536
k=2}else k=1}else k=1
j=C.a.p(a,r,s)
if(i==null){i=new P.Z("")
n=i}else n=i
n.a+=j
n.a+=P.ks(p)
s+=k
r=s}}}if(i==null)return C.a.p(a,b,c)
if(r<c)i.a+=C.a.p(a,r,c)
n=i.a
return n.charCodeAt(0)==0?n:n},
nV:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=C.a.O(a,s)
if(o===37){n=P.ku(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new P.Z("")
l=C.a.p(a,r,s)
k=q.a+=!p?l.toLowerCase():l
if(m){n=C.a.p(a,s,s+3)
j=3}else if(n==="%"){n="%25"
j=1}else j=3
q.a=k+n
s+=j
r=s
p=!0}else{if(o<127){m=o>>>4
if(m>=8)return H.d(C.t,m)
m=(C.t[m]&1<<(o&15))!==0}else m=!1
if(m){if(p&&65<=o&&90>=o){if(q==null)q=new P.Z("")
if(r<s){q.a+=C.a.p(a,r,s)
r=s}p=!1}++s}else{if(o<=93){m=o>>>4
if(m>=8)return H.d(C.j,m)
m=(C.j[m]&1<<(o&15))!==0}else m=!1
if(m)P.cb(a,s,"Invalid character")
else{if((o&64512)===55296&&s+1<c){i=C.a.O(a,s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}else j=1}else j=1
l=C.a.p(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new P.Z("")
m=q}else m=q
m.a+=l
m.a+=P.ks(o)
s+=j
r=s}}}}if(q==null)return C.a.p(a,b,c)
if(r<c){l=C.a.p(a,r,c)
q.a+=!p?l.toLowerCase():l}m=q.a
return m.charCodeAt(0)==0?m:m},
nS:function(a,b,c){var s,r,q,p
if(b===c)return""
if(!P.lz(C.a.C(a,b)))P.cb(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=C.a.C(a,s)
if(q<128){p=q>>>4
if(p>=8)return H.d(C.l,p)
p=(C.l[p]&1<<(q&15))!==0}else p=!1
if(!p)P.cb(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=C.a.p(a,b,c)
return P.nL(r?a.toLowerCase():a)},
nL:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nT:function(a,b,c){return P.dF(a,b,c,C.P,!1)},
nQ:function(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=P.dF(a,b,c,C.u,!0)
if(s.length===0){if(r)return"/"}else if(q&&!C.a.a_(s,"/"))s="/"+s
return P.nU(s,e,f)},
nU:function(a,b,c){var s=b.length===0
if(s&&!c&&!C.a.a_(a,"/"))return P.nW(a,!s||c)
return P.nX(a)},
kt:function(a,b,c,d){var s,r={}
if(a!=null){if(d!=null)throw H.c(P.bE("Both query and queryParameters specified"))
return P.dF(a,b,c,C.k,!0)}if(d==null)return null
s=new P.Z("")
r.a=""
d.A(0,new P.js(new P.jt(r,s)))
r=s.a
return r.charCodeAt(0)==0?r:r},
nO:function(a,b,c){return P.dF(a,b,c,C.k,!0)},
ku:function(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=C.a.O(a,b+1)
r=C.a.O(a,n)
q=H.jP(s)
p=H.jP(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127){n=C.c.aO(o,4)
if(n>=8)return H.d(C.h,n)
n=(C.h[n]&1<<(o&15))!==0}else n=!1
if(n)return H.aR(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return C.a.p(a,b,b+3).toUpperCase()
return null},
ks:function(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=C.a.C(k,a>>>4)
s[2]=C.a.C(k,a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}p=3*q
s=new Uint8Array(p)
for(o=0;--q,q>=0;r=128){n=C.c.fP(a,6*q)&63|r
if(o>=p)return H.d(s,o)
s[o]=37
m=o+1
l=C.a.C(k,n>>>4)
if(m>=p)return H.d(s,m)
s[m]=l
l=o+2
m=C.a.C(k,n&15)
if(l>=p)return H.d(s,l)
s[l]=m
o+=3}}return P.eR(s,0,null)},
dF:function(a,b,c,d,e){var s=P.lB(a,b,c,d,e)
return s==null?C.a.p(a,b,c):s},
lB:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j=null
for(s=!e,r=b,q=r,p=j;r<c;){o=C.a.O(a,r)
if(o<127){n=o>>>4
if(n>=8)return H.d(d,n)
n=(d[n]&1<<(o&15))!==0}else n=!1
if(n)++r
else{if(o===37){m=P.ku(a,r,!1)
if(m==null){r+=3
continue}if("%"===m){m="%25"
l=1}else l=3}else{if(s)if(o<=93){n=o>>>4
if(n>=8)return H.d(C.j,n)
n=(C.j[n]&1<<(o&15))!==0}else n=!1
else n=!1
if(n){P.cb(a,r,"Invalid character")
l=j
m=l}else{if((o&64512)===55296){n=r+1
if(n<c){k=C.a.O(a,n)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
l=2}else l=1}else l=1}else l=1
m=P.ks(o)}}if(p==null){p=new P.Z("")
n=p}else n=p
n.a+=C.a.p(a,q,r)
n.a+=H.w(m)
if(typeof l!=="number")return H.p3(l)
r+=l
q=r}}if(p==null)return j
if(q<c)p.a+=C.a.p(a,q,c)
s=p.a
return s.charCodeAt(0)==0?s:s},
lA:function(a){if(C.a.a_(a,"."))return!0
return C.a.dD(a,"/.")!==-1},
nX:function(a){var s,r,q,p,o,n,m
if(!P.lA(a))return a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.V(n,"..")){m=s.length
if(m!==0){if(0>=m)return H.d(s,-1)
s.pop()
if(s.length===0)s.push("")}p=!0}else if("."===n)p=!0
else{s.push(n)
p=!1}}if(p)s.push("")
return C.b.n(s,"/")},
nW:function(a,b){var s,r,q,p,o,n
if(!P.lA(a))return!b?P.ly(a):a
s=H.b([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n)if(s.length!==0&&C.b.gaB(s)!==".."){if(0>=s.length)return H.d(s,-1)
s.pop()
p=!0}else{s.push("..")
p=!1}else if("."===n)p=!0
else{s.push(n)
p=!1}}r=s.length
if(r!==0)if(r===1){if(0>=r)return H.d(s,0)
r=s[0].length===0}else r=!1
else r=!0
if(r)return"./"
if(p||C.b.gaB(s)==="..")s.push("")
if(!b){if(0>=s.length)return H.d(s,0)
r=P.ly(s[0])
if(0>=s.length)return H.d(s,0)
s[0]=r}return C.b.n(s,"/")},
ly:function(a){var s,r,q,p=a.length
if(p>=2&&P.lz(C.a.C(a,0)))for(s=1;s<p;++s){r=C.a.C(a,s)
if(r===58)return C.a.p(a,0,s)+"%3A"+C.a.a5(a,s+1)
if(r<=127){q=r>>>4
if(q>=8)return H.d(C.l,q)
q=(C.l[q]&1<<(r&15))===0}else q=!0
if(q)break}return a},
nN:function(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=C.a.C(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw H.c(P.bE("Invalid URL encoding"))}}return s},
kv:function(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=C.a.C(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(C.e!==d)q=!1
else q=!0
if(q)return C.a.p(a,b,c)
else p=new H.Q(C.a.p(a,b,c))}else{p=H.b([],t.t)
for(q=a.length,o=b;o<c;++o){r=C.a.C(a,o)
if(r>127)throw H.c(P.bE("Illegal percent encoding in URI"))
if(r===37){if(o+3>q)throw H.c(P.bE("Truncated URI"))
p.push(P.nN(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return C.X.c8(p)},
lz:function(a){var s=a|32
return 97<=s&&s<=122},
lf:function(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=H.b([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=C.a.C(a,r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw H.c(P.a5(k,a,r))}}if(q<0&&r>b)throw H.c(P.a5(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=C.a.C(a,r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=C.b.gaB(j)
if(p!==44||r!==n+7||!C.a.a0(a,"base64",n+1))throw H.c(P.a5("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=C.B.ht(0,a,m,s)
else{l=P.lB(a,m,s,C.k,!0)
if(l!=null)a=C.a.aY(a,m,s,l)}return new P.iQ(a,j,c)},
o3:function(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="?",i="#",h=H.b(new Array(22),t.gN)
for(s=0;s<22;++s)h[s]=new Uint8Array(96)
r=new P.jB(h)
q=new P.jC()
p=new P.jD()
o=r.$2(0,225)
q.$3(o,n,1)
q.$3(o,m,14)
q.$3(o,l,34)
q.$3(o,k,3)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(14,225)
q.$3(o,n,1)
q.$3(o,m,15)
q.$3(o,l,34)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(15,225)
q.$3(o,n,1)
q.$3(o,"%",225)
q.$3(o,l,34)
q.$3(o,k,9)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(1,225)
q.$3(o,n,1)
q.$3(o,l,34)
q.$3(o,k,10)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(2,235)
q.$3(o,n,139)
q.$3(o,k,131)
q.$3(o,m,146)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(3,235)
q.$3(o,n,11)
q.$3(o,k,68)
q.$3(o,m,18)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(4,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,"[",232)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(5,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(6,231)
p.$3(o,"19",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(7,231)
p.$3(o,"09",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,172)
q.$3(o,i,205)
q.$3(r.$2(8,8),"]",5)
o=r.$2(9,235)
q.$3(o,n,11)
q.$3(o,m,16)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(16,235)
q.$3(o,n,11)
q.$3(o,m,17)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(17,235)
q.$3(o,n,11)
q.$3(o,k,9)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(10,235)
q.$3(o,n,11)
q.$3(o,m,18)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(18,235)
q.$3(o,n,11)
q.$3(o,m,19)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(19,235)
q.$3(o,n,11)
q.$3(o,k,234)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(11,235)
q.$3(o,n,11)
q.$3(o,k,10)
q.$3(o,j,172)
q.$3(o,i,205)
o=r.$2(12,236)
q.$3(o,n,12)
q.$3(o,j,12)
q.$3(o,i,205)
o=r.$2(13,237)
q.$3(o,n,13)
q.$3(o,j,13)
p.$3(r.$2(20,245),"az",21)
o=r.$2(21,245)
p.$3(o,"az",21)
p.$3(o,"09",21)
q.$3(o,"+-.",21)
return h},
lL:function(a,b,c,d,e){var s,r,q,p,o,n,m=$.ml()
for(s=m.length,r=b;r<c;++r){if(d<0||d>=s)return H.d(m,d)
q=m[d]
p=C.a.C(a,r)^96
o=q[p>95?31:p]
d=o&31
n=o>>>5
if(n>=8)return H.d(e,n)
e[n]=r}return d},
W:function W(a,b){this.a=a
this.b=b},
bp:function bp(a){this.a=a},
hF:function hF(){},
hG:function hG(){},
H:function H(){},
dW:function dW(a){this.a=a},
f0:function f0(){},
eu:function eu(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cX:function cX(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ea:function ea(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fa:function fa(a){this.a=a},
f7:function f7(a){this.a=a},
eN:function eN(a){this.a=a},
e1:function e1(a){this.a=a},
ex:function ex(){},
d1:function d1(){},
e3:function e3(a){this.a=a},
fv:function fv(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(){},
eb:function eb(){},
ae:function ae(){},
O:function O(){},
Z:function Z(a){this.a=a},
iU:function iU(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a,b){this.a=a
this.b=b},
bA:function bA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
jt:function jt(a,b){this.a=a
this.b=b},
js:function js(a){this.a=a},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a){this.a=a},
jC:function jC(){},
jD:function jD(){},
fQ:function fQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
fo:function fo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.x=null},
oW:function(a){var s,r,q,p
if(t.I.b(a)){s=J.mq(a)
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
return new P.dB(r,q,p)},
oV:function(a){if(a instanceof P.dB)return{data:a.a,height:a.b,width:a.c}
return a},
be:function(a){var s,r,q,p,o
if(a==null)return null
s=P.R(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
s.k(0,o,a[o])}return s},
lG:function(a){var s
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||H.jE(a))return a
if(t.f.b(a))return P.lP(a)
if(t.d.b(a)){s=[]
J.dR(a,new P.jz(s))
a=s}return a},
lP:function(a){var s={}
J.dR(a,new P.jJ(s))
return s},
jm:function jm(){},
jo:function jo(a,b){this.a=a
this.b=b},
jp:function jp(a,b){this.a=a
this.b=b},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a){this.a=a},
jJ:function jJ(a){this.a=a},
jn:function jn(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
hP:function hP(){},
hQ:function hQ(){},
fO:function fO(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aK:function aK(){},
eg:function eg(){},
aP:function aP(){},
ev:function ev(){},
io:function io(){},
eQ:function eQ(){},
n:function n(){},
aS:function aS(){},
f_:function f_(){},
fC:function fC(){},
fD:function fD(){},
fK:function fK(){},
fL:function fL(){},
fY:function fY(){},
fZ:function fZ(){},
h4:function h4(){},
h5:function h5(){},
hn:function hn(){},
dY:function dY(){},
ho:function ho(a){this.a=a},
dZ:function dZ(){},
b_:function b_(){},
ew:function ew(){},
fj:function fj(){},
bX:function bX(){},
eL:function eL(){},
fU:function fU(){},
fV:function fV(){}},W={
k2:function(){var s=document.createElement("canvas")
s.toString
return s},
hH:function(a){return"wheel"},
mG:function(a){var s,r=document.createElement("input"),q=t.gk.a(r)
try{q.type=a}catch(s){H.bg(s)}return q},
jh:function(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
lp:function(a,b,c,d){var s=W.jh(W.jh(W.jh(W.jh(0,a),b),c),d),r=s+((s&67108863)<<3)&536870911
r^=r>>>11
return r+((r&16383)<<15)&536870911},
a2:function(a,b,c,d){var s=new W.dj(a,b,c==null?null:W.lM(new W.jf(c),t.aD),!1)
s.fW()
return s},
lM:function(a,b){var s=$.aC
if(s===C.f)return a
return s.dc(a,b)},
o:function o(){},
hk:function hk(){},
dU:function dU(){},
dV:function dV(){},
bm:function bm(){},
bn:function bn(){},
cn:function cn(){},
aA:function aA(){},
hy:function hy(){},
F:function F(){},
cq:function cq(){},
hz:function hz(){},
ap:function ap(){},
aG:function aG(){},
hA:function hA(){},
hB:function hB(){},
hC:function hC(){},
hD:function hD(){},
cr:function cr(){},
cs:function cs(){},
e5:function e5(){},
hE:function hE(){},
fl:function fl(a,b){this.a=a
this.b=b},
E:function E(){},
l:function l(){},
e:function e(){},
ac:function ac(){},
bL:function bL(){},
e7:function e7(){},
e9:function e9(){},
aq:function aq(){},
hT:function hT(){},
br:function br(){},
bs:function bs(){},
bN:function bN(){},
bP:function bP(){},
bv:function bv(){},
i_:function i_(){},
ii:function ii(){},
bS:function bS(){},
em:function em(){},
ij:function ij(a){this.a=a},
en:function en(){},
ik:function ik(a){this.a=a},
at:function at(){},
eo:function eo(){},
ai:function ai(){},
fk:function fk(a){this.a=a},
t:function t(){},
cS:function cS(){},
au:function au(){},
eA:function eA(){},
eF:function eF(){},
it:function it(a){this.a=a},
eH:function eH(){},
aj:function aj(){},
eJ:function eJ(){},
aw:function aw(){},
eK:function eK(){},
ax:function ax(){},
eO:function eO(){},
iA:function iA(a){this.a=a},
ag:function ag(){},
b8:function b8(){},
ak:function ak(){},
aa:function aa(){},
eS:function eS(){},
eT:function eT(){},
iH:function iH(){},
al:function al(){},
bz:function bz(){},
eZ:function eZ(){},
iL:function iL(){},
aU:function aU(){},
iV:function iV(){},
ff:function ff(){},
ba:function ba(){},
c8:function c8(){},
fm:function fm(){},
di:function di(){},
fz:function fz(){},
dn:function dn(){},
fT:function fT(){},
h_:function h_(){},
k6:function k6(a,b){this.a=a
this.$ti=b},
dj:function dj(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jf:function jf(a){this.a=a},
kl:function kl(a){this.$ti=a},
J:function J(){},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
fn:function fn(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
fw:function fw(){},
fx:function fx(){},
fA:function fA(){},
fB:function fB(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
fM:function fM(){},
fN:function fN(){},
fP:function fP(){},
du:function du(){},
dv:function dv(){},
fR:function fR(){},
fS:function fS(){},
fX:function fX(){},
h0:function h0(){},
h1:function h1(){},
dx:function dx(){},
dy:function dy(){},
h2:function h2(){},
h3:function h3(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){}},K={dT:function dT(){},cw:function cw(){},aO:function aO(a){this.a=a},X:function X(a){this.a=a}},L={eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},eY:function eY(a,b){this.b=a
this.c=b},iJ:function iJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},d4:function d4(a,b){this.b=a
this.c=!1
this.a=b}},O={
k4:function(a){return new O.a4(H.b([],a.H("u<0>")),a.H("a4<0>"))},
a4:function a4(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
cN:function cN(a){this.a=a
this.b=null},
kU:function(){var s=O.k4(t.gc),r=new O.cK(s)
s.bi(r.geV(),r.geX())
s=r.gbu()
s.gq().l(0,r.gcV())
s.gdI().l(0,r.gb7())
return r},
el:function(a,b){return new O.cM(new V.M(0,0,0),a,b,new A.ao(!1,!1,!1))},
cK:function cK(a){var _=this
_.b=_.a=null
_.e=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.Q=_.z=_.y=_.x=_.r=_.f=null},
i8:function i8(a,b){this.a=a
this.b=b},
i9:function i9(){},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(){},
ic:function ic(a,b){this.a=a
this.b=b},
id:function id(){},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(){},
i2:function i2(a,b,c){var _=this
_.f=1
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cL:function cL(){},
i3:function i3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null},
cM:function cM(a,b,c,d){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
i5:function i5(a){this.b=a},
i6:function i6(a,b,c,d){var _=this
_.ch=1
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
i7:function i7(a,b,c,d){var _=this
_.ch=100
_.f=a
_.a=b
_.b=c
_.c=d
_.e=_.d=null},
d2:function d2(){}},E={
hJ:function(){var s=O.k4(t.l),r=new E.bq(s)
s.bi(r.ghu(),r.ghx())
r.sbD(0,null)
r.scu(null)
r.saW(null)
return r},
lm:function(){var s=window.navigator.vendor
s.toString
if(C.a.I(s,"Google"))return C.z
s=window.navigator.userAgent
s.toString
if(C.a.I(s,"Firefox"))return C.o
s=window.navigator.appVersion
s.toString
if(C.a.I(s,"Trident")||C.a.I(s,"Edge"))return C.p
s=window.navigator.appName
s.toString
if(C.a.I(s,"Microsoft"))return C.p
return C.A},
ln:function(){var s=window.navigator.appVersion
s.toString
if(C.a.I(s,"Win"))return C.T
if(C.a.I(s,"Mac"))return C.v
if(C.a.I(s,"Linux"))return C.U
return C.V},
n5:function(a,b){var s
Date.now()
s=t.fA
s=new E.ip(a,new P.W(Date.now(),!1),new P.W(Date.now(),!1),new O.cN(H.b([],s)),new O.cN(H.b([],s)),new O.cN(H.b([],s)),H.b([null],t.bc),P.R(t.N,t.fg))
s.ed(a,b)
return s},
ne:function(a,b,c,d,e){var s,r
if(t.gA.b(a))return E.lb(a,!0,!0,!0,!1)
s=W.k2()
r=s.style
r.width="100%"
r.height="100%"
J.mp(a).l(0,s)
return E.lb(s,!0,!0,!0,!1)},
lb:function(a,b,c,d,e){var s,r,q,p,o,n="mousemove",m=t.z,l=t.gW.a(C.i.cz(a,"webgl2",P.mO(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0],m,m)))
if(l==null)throw H.c(P.f("Failed to get the rendering context for WebGL."))
s=E.n5(l,a)
m=H.jy(l.getParameter(3379))
H.jy(l.getParameter(34076))
r=H.b([],t.g9)
q=$.hK
p=new X.fc(a,r,(q==null?$.hK=new E.ft(E.lm(),E.ln()):q).a===C.o?0.16666666666666666:0.005555555555555556)
o=document
o.toString
r.push(W.a2(o,"contextmenu",p.gf4(),!1))
r.push(W.a2(a,"focus",p.gfa(),!1))
r.push(W.a2(a,"blur",p.geZ(),!1))
r.push(W.a2(o,"keyup",p.gbU(),!1))
r.push(W.a2(o,"keydown",p.gbG(),!1))
r.push(W.a2(a,"mousedown",p.gfg(),!1))
r.push(W.a2(a,"mouseup",p.gfk(),!1))
r.push(W.a2(a,n,p.gfi(),!1))
W.hH(a)
W.hH(a)
r.push(W.a2(a,W.hH(a),p.gfm(),!1))
r.push(W.a2(o,n,p.gf6(),!1))
r.push(W.a2(o,"mouseup",p.gf8(),!1))
r.push(W.a2(o,"pointerlockchange",p.gfo(),!1))
r.push(W.a2(a,"touchstart",p.gfD(),!1))
r.push(W.a2(a,"touchend",p.gfz(),!1))
r.push(W.a2(a,"touchmove",p.gfB(),!1))
m=new E.eW(a,s,new T.iE(l,m),p,new P.W(Date.now(),!1))
m.cX()
return m},
hr:function hr(){},
bq:function bq(a){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=a
_.z=null},
bF:function bF(a){this.b=a},
bV:function bV(a){this.b=a},
ft:function ft(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c,d,e,f,g,h){var _=this
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
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
eW:function eW(a,b,c,d,e){var _=this
_.b=a
_.d=null
_.e=b
_.f=c
_.x=d
_.cx=!1
_.cy=e
_.db=0},
iG:function iG(a){this.a=a}},Z={
kk:function(a,b,c){var s=a.createBuffer()
s.toString
a.bindBuffer(b,s)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.fg(b,s)},
ay:function(a){return new Z.b9(a)},
fg:function fg(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ja:function ja(a){this.a=a},
cl:function cl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(a){this.a=a}},D={
I:function(){return new D.bK()},
ht:function ht(){},
bK:function bK(){var _=this
_.c=_.b=_.a=null
_.d=0},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
T:function T(){},
aH:function aH(){},
aI:function aI(){},
C:function C(a,b,c){this.c=a
this.d=b
this.e=c},
k5:function(a,b){var s=new D.bJ(new V.M(1,1,1),V.nm(),V.kj(),V.nl()),r=s.a
s.a=b
b.gq().l(0,s.gek())
s.au(new D.C("mover",r,s.a))
if(!s.b.m(0,a)){r=s.b
s.b=a
s.au(new D.C("color",r,a))}return s},
bJ:function bJ(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.r=_.f=null},
cD:function cD(a,b,c,d,e){var _=this
_.e=a
_.f=b
_.r=c
_.x=d
_.z=_.y=null
_.a=e
_.c=_.b=null}},X={
cB:function(){var s=new X.cA(H.b([],t.f5))
s.bC(s.gee(),s.geg(),s.gei())
return s},
cm:function cm(a,b){this.a=a
this.b=b},
ad:function ad(a,b){this.a=a
this.b=b},
bu:function bu(a){this.c=a},
cA:function cA(a){var _=this
_.f=null
_.r=!1
_.y=null
_.a=a
_.c=_.b=null},
hW:function hW(a){this.b=this.a=null
this.d=a},
cH:function cH(a,b,c){this.x=a
this.c=b
this.d=c},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.f=_.d=null
_.r=0
_.x=b
_.y=c
_.z=d},
aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e},
il:function il(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.f=0
_.r=b
_.x=c
_.y=d
_.z=e},
eC:function eC(){},
d3:function d3(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d},
iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.d=_.c=_.b=null
_.e=b
_.f=c
_.r=d
_.x=e},
fc:function fc(a,b,c){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.x=_.r=_.f=!1
_.y=null
_.z=b
_.Q=c},
mF:function(a){var s=new V.bo(0,0,0,1),r=$.l5
if(r==null){r=V.l4(0,0,1,1)
$.l5=r}return new X.hS(s,r)},
hS:function hS(a,b){this.a=a
this.r=b
this.x=null},
ey:function ey(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.e=2000
_.f=null},
iC:function iC(){},
oX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=O.kU(),d=e.gbu(),c=U.hx(V.kf(1,-3,-1,f))
d.l(0,D.k5(new V.M(0.4,0.4,1),c))
d=e.gbu()
c=U.hx(V.kf(0,1,0,f))
d.l(0,D.k5(new V.M(0,0.2,0.1),c))
d=e.gbm()
d.sap(0,new V.M(0.2,0.2,0.2))
d=e.gbp()
d.sap(0,new V.M(0.7,0.7,0.7))
e.gbE().sap(0,new V.M(1,1,1))
d=e.gbE()
d.bY(new A.ao(!0,d.c.b,!1))
d.cZ(10)
s=E.hJ()
s.scu(e)
r=F.l9()
F.dH(r,f,f,1,1,1,0,0,1)
F.dH(r,f,f,1,1,0,1,0,3)
F.dH(r,f,f,1,1,0,0,1,2)
F.dH(r,f,f,1,1,-1,0,0,0)
F.dH(r,f,f,1,1,0,-1,0,0)
F.dH(r,f,f,1,1,0,0,-1,3)
r.aP()
for(d=t.C,c=s.y,q=c.a,p=c.$ti.H("u<a4.T>"),o=-60;o<=60;o+=12)for(n=o/10,m=-60;m<=60;m+=12){l=E.hJ()
l.sbD(0,r)
k=m/10
j=$.cO
j=new U.cY(j==null?$.cO=new V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):j)
j.se3(n)
j.sdS(0,k)
j.sdY(0)
i=j.d
$.B().toString
if(!(Math.abs(i-n)<1e-9)){j.d=n
h=j.y
if(h!=null)h.v(new D.C("deltaYaw",i,n))}i=j.e
$.B().toString
if(!(Math.abs(i-k)<1e-9)){j.e=k
h=j.y
if(h!=null)h.v(new D.C("deltaPitch",i,k))}k=j.f
$.B().toString
if(!(Math.abs(k-0.32)<1e-9)){j.f=0.32
i=j.y
if(i!=null)i.v(new D.C("deltaRoll",k,0.32))}k=$.cO
k=new U.bI(k==null?$.cO=new V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):k)
k.sR(0,new V.as(1,0,0,o,0,1,0,0,0,0,1,m,0,0,0,1))
l.saW(U.kR(H.b([j,k],d)))
if(c.bW(H.b([l],p))){g=q.length
q.push(l)
k=H.b([l],p)
j=c.c
if(j!=null)j.$2(g,k)}}return s},
pa:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=1000,a6=V.n7("Test 038"),a7=W.k2()
a7.className="pageLargeCanvas"
a7.id=a4
a6.a.appendChild(a7).toString
s=t.s
a6.d6(H.b(["A test of basic 3D movement around a room similar to a first person view. ","A and D (left and right arrow keys) strifes left and right. ","W and S (up and down arrow keys) moves forward and backward. ","Q and E moves up and down. Mouse looks around with left mouse button pressed."],s))
a6.fZ(H.b(["options"],s))
a6.d6(H.b(["\xab[Back to Tests|../]"],s))
s=document
r=s.getElementById(a4)
if(r==null)H.h(P.f("Failed to find an element with the identifier, testCanvas."))
q=E.ne(r,!0,!0,!0,!1)
p=E.hJ()
a6=p.y
o=q.f.hr("../resources/Grass.png",!0,!0)
n=U.hx(V.kY(0,-3,0).K(0,V.aM(a5,0,0,0,0,1,0,0,0,0,a5,0,0,0,0,1)).K(0,V.ke(-1.5707963267948966)))
m=O.kU()
l=new V.b3(a5,0,0,0,a5,0,0,0,1)
if(!J.V(m.b,l)){k=m.b
j=k==null&&!0
if(j)m.a=null
m.b=l
m.T(new D.C("texture2DMatrix",k,l))}m.gbu().l(0,D.k5(new V.M(1,1,1),U.hx(V.kf(1,-3,-1,null))))
l=m.gbm()
l.sap(0,new V.M(0.5,0.5,0.5))
l=m.gbp()
l.sap(0,new V.M(0.5,0.5,0.5))
m.gbm().sdZ(o)
m.gbp().sdZ(o)
l=E.hJ()
l.sbD(0,F.p2(20,20))
l.saW(n)
l.scu(m)
a6.l(0,l)
a6.l(0,X.oX(q))
a6=q.x
l=X.cB()
k=X.cB()
j=X.cB()
i=X.cB()
h=X.cB()
g=X.cB()
f=U.e0()
e=U.e0()
d=U.e0()
c=new U.dg(l,k,j,i,h,g,f,e,d,V.ih(),V.ih(),V.b4())
l.a8(39)
l.a8(68)
b=c.gfc()
l.gaT().l(0,b)
k.a8(37)
k.a8(65)
k.gaT().l(0,b)
j.a8(81)
j.gaT().l(0,b)
i.a8(69)
i.gaT().l(0,b)
h.a8(40)
h.a8(83)
h.gaT().l(0,b)
g.a8(38)
g.a8(87)
g.gaT().l(0,b)
f.sbc(30)
f.saz(0)
b=c.gaH()
f.gq().l(0,b)
e.sbc(30)
e.saz(0)
e.gq().l(0,b)
d.sbc(30)
d.saz(0)
d.gq().l(0,b)
l.an(a6)
k.an(a6)
j.an(a6)
i.an(a6)
h.an(a6)
g.an(a6)
l=U.e0()
k=U.e0()
j=$.j0
if(j==null)j=$.j0=new V.am(0,0)
a=new U.df(l,k,new X.aN(!1,!1,!1),j,V.b4())
l.scw(0,!0)
l.sco(6.283185307179586)
l.scp(0)
l.sZ(0,0)
l.sbc(100)
l.sV(0)
l.saz(0.5)
j=a.gaH()
l.gq().l(0,j)
k.scw(0,!0)
k.sco(6.283185307179586)
k.scp(0)
k.sZ(0,0)
k.sbc(100)
k.sV(0)
k.saz(0.5)
k.gq().l(0,j)
j=new X.aN(!1,!1,!1)
if(!a.d.m(0,j)){a0=a.d
a.d=j
a.J(new D.C("modifiers",a0,j))}a.an(a6)
l.sco(1.5707963267948966)
l.scp(-1.5707963267948966)
l.saz(1)
k.saz(1)
l.scw(0,!1)
a.gq().l(0,new X.jV(c,a))
a1=U.kR(H.b([c,a],t.C))
a6=O.k4(t.l)
l=new M.e6(a6)
a6.bi(l.gf0(),l.gf2())
a2=X.mF(null)
a3=new X.ey(1.0471975511965976,0.1)
a3.saW(null)
k=a3.c
$.B().toString
if(!(Math.abs(k-1.0471975511965976)<1e-9)){a3.c=1.0471975511965976
a3.aK(new D.C("fov",k,1.0471975511965976))}k=a3.d
$.B().toString
if(!(Math.abs(k-0.1)<1e-9)){a3.d=0.1
a3.aK(new D.C("near",k,0.1))}k=a3.e
$.B().toString
if(!(Math.abs(k-2000)<1e-9)){a3.e=2000
a3.aK(new D.C("far",k,2000))}k=l.b
if(k!==a3){if(k!=null)k.gq().P(0,l.gaI())
a0=l.b
l.b=a3
a3.gq().l(0,l.gaI())
l.aJ(new D.C("camera",a0,l.b))}k=l.c
if(k!==a2){if(k!=null)k.gq().P(0,l.gaI())
a0=l.c
l.c=a2
a2.gq().l(0,l.gaI())
l.aJ(new D.C("target",a0,l.c))}a6.l(0,p)
a6=l.b
if(a6!=null)a6.saW(a1)
a6=q.d
if(a6!==l){if(a6!=null)a6.gq().P(0,q.gcE())
q.d=l
l.gq().l(0,q.gcE())
q.cF()}r=s.getElementById("options")
if(r==null)H.h(P.f("Failed to find options for CheckGroup"))
new V.hu("options",!0,r,H.b([],t.dh)).fY(0,"Mouse Locking",new X.jW(q),!1)
V.pd(q)},
jV:function jV(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a}},V={
kF:function(a,b,c){var s
if(c<=0)s=a
else s=c>=1?b:a+c*(b-a)
return s},
jZ:function(a,b,c){var s
if(c<=b)return b
s=c-b
a=C.d.bh(a-b,s)
return(a<0?a+s:a)+b},
x:function(a,b,c){$.B().toString
return C.a.ac(C.d.cv(Math.abs(a-0)<1e-9?0:a,b),c+b+1)},
ch:function(a,b,c){var s,r,q,p,o,n,m,l=H.b([],t.s)
for(s=a.length,r=c+b+1,q=0,p=0;p<a.length;a.length===s||(0,H.r)(a),++p){o=a[p]
$.B().toString
n=C.a.ac(C.d.cv(Math.abs(o-0)<1e-9?0:o,b),r)
q=Math.max(q,n.length)
l.push(n)}for(s=l.length,m=s-1;m>=0;--m,s=r){if(m>=s)return H.d(l,m)
s=C.a.ac(l[m],q)
r=l.length
if(m>=r)return H.d(l,m)
l[m]=s}return l},
kH:function(a){return C.d.hS(Math.pow(2,C.d.ck(Math.log(a)/Math.log(2))))},
ih:function(){var s=$.kV
return s==null?$.kV=new V.b3(1,0,0,0,1,0,0,0,1):s},
b4:function(){var s=$.cO
return s==null?$.cO=V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):s},
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.as(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kY:function(a,b,c){return V.aM(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ke:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aM(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)},
kX:function(a){var s=Math.cos(a),r=Math.sin(a)
return V.aM(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1)},
kf:function(a,b,c,d){d=V.kj()
return V.kW(V.kZ(),d,new V.D(a,b,c))},
kW:function(a,b,c){var s=c.M(),r=b.b9(s).M(),q=s.b9(r),p=new V.D(a.a,a.b,a.c)
return V.aM(r.a,q.a,s.a,r.b_(0).a2(p),r.b,q.b,s.b,q.b_(0).a2(p),r.c,q.c,s.c,s.b_(0).a2(p),0,0,0,1)},
kZ:function(){var s=$.aQ
return s==null?$.aQ=new V.a9(0,0,0):s},
l4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.eE(a,b,c,d)},
fd:function(){var s=$.lk
return s==null?$.lk=new V.D(0,0,0):s},
nl:function(){var s=$.j1
return s==null?$.j1=new V.D(-1,0,0):s},
kj:function(){var s=$.j2
return s==null?$.j2=new V.D(0,1,0):s},
nm:function(){var s=$.j3
return s==null?$.j3=new V.D(0,0,1):s},
nk:function(a,b,c){return new V.D(a,b,c)},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(){},
b3:function b3(a,b,c,d,e,f,g,h,i){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
pd:function(a){P.nf(C.K,new V.jY(a))},
n7:function(a){var s,r,q,p,o,n=document,m=n.body
if(m==null)throw H.c(P.f("The html document body was null."))
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
W.a2(n,"scroll",new V.iy(s),!1)
return new V.iw(o)},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jY:function jY(a){this.a=a},
iw:function iw(a){this.a=a
this.b=null},
iy:function iy(a){this.a=a},
ix:function ix(a){this.a=a}},U={
e0:function(){return new U.hw()},
hx:function(a){var s=V.b4(),r=new U.bI(s)
if(!s.m(0,a))r.a=a
return r},
kR:function(a){var s=new U.bM(V.b4(),H.b([],t.C))
s.bi(s.geR(),s.gft())
s.bl(0,a)
return s},
hw:function hw(){var _=this
_.a=!0
_.b=1e12
_.c=-1e12
_.d=0
_.e=100
_.x=_.f=0
_.y=null},
bI:function bI(a){this.a=a
this.b=null},
bM:function bM(a,b){var _=this
_.e=null
_.f=a
_.r=0
_.a=b
_.c=_.b=null},
a1:function a1(){},
cY:function cY(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=0
_.x=a
_.y=null},
df:function df(a,b,c,d,e){var _=this
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
dg:function dg(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.cy=0
_.db=l
_.dx=null}},M={e6:function e6(a){var _=this
_.a=!0
_.d=_.c=_.b=null
_.e=a
_.y=null}},A={
mS:function(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=""+"MaterialLight_"+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+b0.gal(b0)+b1.gal(b1)+b2.gal(b2)+b3.gal(b3)+"_"
a+=a0?"1":"0"
a+=a1?"1":"0"
a+=a2?"1":"0"
a=a+"0_"+a4
s=b4.length
if(s>0){a+="_Bar"
for(r=0;r<b4.length;b4.length===s||(0,H.r)(b4),++r)a+="_"+b4[r].a}s=b5.length
if(s>0){a+="_Dir"
for(r=0;r<b5.length;b5.length===s||(0,H.r)(b5),++r)a+="_"+b5[r].a}s=b6.length
if(s>0){a+="_Point"
for(r=0;r<b6.length;b6.length===s||(0,H.r)(b6),++r)a+="_"+b6[r].a}s=b7.length
if(s>0){a+="_Spot"
for(r=0;r<b7.length;b7.length===s||(0,H.r)(b7),++r)a+="_"+b7[r].a}for(s=b4.length,q=0,p=!1,r=0;r<s;++r,p=!0)q+=b4[r].b
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
b=$.bk()
if(h){s=$.bj()
b=new Z.b9(b.a|s.a)}if(g)b=new Z.b9(b.a|$.bi().a)
if(f)b=new Z.b9(b.a|$.bl().a)
if(e)b=new Z.b9(b.a|$.bh().a)
return new A.i4(a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,q,m,i,m,p,d,!0,c,!1,k,p,j,h,g,f,!1,e,a0,!1,a2,!1,a4,a.charCodeAt(0)==0?a:a,b)},
jG:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
jH:function(a,b,c){var s,r="Txt, txt2D).rgb;\n"
A.jG(a,b,c)
s=a.a+="\n"
s+="vec3 "+c+"Color;\n"
a.a=s
a.a=s+"\n"
s=a.a+="void set"+A.hj(c)+"Color()\n"
s=a.a=s+"{\n"
if(b.a)if(b.b){s+="   "+c+"Color = "+c+"Clr*texture2D("+c+r
a.a=s}else{s+="   "+c+"Color = "+c+"Clr;\n"
a.a=s}else if(b.b){s+="   "+c+"Color = texture2D("+c+r
a.a=s}a.a=s+"}\n"},
oo:function(a,b){var s,r=a.a,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Emission ===\n"
b.a=s+"\n"
A.jG(b,r,"emission")
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
ok:function(a,b){var s,r=a.b
if(!(r.a||r.b||!1))return
s=b.a+="// === Ambient ===\n"
b.a=s+"\n"
A.jH(b,r,"ambient")
b.a+="\n"},
om:function(a,b){var s,r=a.c
if(!(r.a||r.b||!1))return
s=b.a+="// === Diffuse ===\n"
b.a=s+"\n"
A.jH(b,r,"diffuse")
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
op:function(a,b){var s,r=a.d
if(!(r.a||r.b||!1))return
s=b.a+="// === Inverse Diffuse ===\n"
b.a=s+"\n"
A.jH(b,r,"invDiffuse")
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
ov:function(a,b){var s,r=a.e
if(!(r.a||r.b||!1))return
s=b.a+="// === Specular ===\n"
s+="\n"
b.a=s
b.a=s+"uniform float shininess;\n"
A.jH(b,r,"specular")
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
or:function(a,b){var s,r,q
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
ot:function(a,b){var s,r=a.r,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Reflection ===\n"
b.a=s+"\n"
A.jG(b,r,"reflect")
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
ou:function(a,b){var s,r=a.x,q=r.a
if(!(q||r.b||!1))return
s=b.a+="// === Refraction ===\n"
b.a=s+"\n"
A.jG(b,r,"refract")
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
ol:function(a,b,c){var s,r,q,p,o,n,m=b.b
if(m<=0)return
s=b.a
r="barLight"+s
q=A.hj(r)
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
c.a=p+"\n"}p=t.s
o=H.b([],p)
o.push("lit.color")
if(s)o.push("attenuation")
s=c.a+="   return "+C.b.n(o," * ")+";\n"
s+="}\n"
c.a=s
s+="\n"
c.a=s
s+="vec3 "+r+"Value(vec3 norm, "+q+" lit)\n"
c.a=s
c.a=s+"{\n"
o=H.b([],p)
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
n=H.b([],p)
s=a.c
if(s.a||s.b||!1)n.push("diffuse(norm, normDir)")
s=a.d
if(s.a||s.b||!1)n.push("invDiffuse(norm, normDir)")
s=a.e
if(s.a||s.b||!1)n.push("specular(norm, normDir)")
s=c.a+="      highLight = intensity*("+C.b.n(n," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.n(o," + ")+");\n"
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
on:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
s=b.a
r="dirLight"+s
q=A.hj(r)
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
p=c.a+="uniform "+q+" "+r+"s["+j+"];\n"
if(s)for(o=0;o<j;++o)p=c.a+="uniform sampler2D "+r+"sTexture2D"+o+";\n"
p+="\n"
c.a=p
n=s?", sampler2D txt2D":""
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+n+")\n"
c.a=p
c.a=p+"{\n"
p=t.s
m=H.b([],p)
l=a.b
if(l.a||l.b||!1)m.push("ambientColor")
if(a.dx){c.a+=u.k
k=H.b([],p)
p=a.c
if(p.a||p.b||!1)k.push("diffuse(norm, lit.viewDir)")
p=a.d
if(p.a||p.b||!1)k.push("invDiffuse(norm, lit.viewDir)")
p=a.e
if(p.a||p.b||!1)k.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.b.n(k," + ")+");\n"}else c.a+="   highLight = "+C.b.n(k," + ")+";\n"
m.push("highLight")}p=c.a+="   return lit.color*("+C.b.n(m," + ")+");\n"
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
if(s){for(s=p,o=0;o<j;++o){c.a+="   if("+r+"Count <= "+o+") return lightAccum;\n"
s=c.a+="   lightAccum += "+r+"Value(norm, "+r+"s["+o+"], "+r+"sTexture2D"+o+");\n"}j=s}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+r+"Count) break;\n"
c.a=j
j+="      lightAccum += "+r+"Value(norm, "+r+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
os:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=b.b
if(h<=0)return
s=b.a
r="pointLight"+s
q=A.hj(r)
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
c.a=p+"\n"}p=t.s
j=H.b([],p)
j.push("lit.color")
if(m)j.push("attenuation")
if(s)j.push("textureCube(txtCube, invNormDir).rgb")
m=c.a+="   return "+C.b.n(j," * ")+";\n"
m+="}\n"
c.a=m
m+="\n"
c.a=m
m+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+k+")\n"
c.a=m
c.a=m+"{\n"
j=H.b([],p)
m=a.b
if(m.a||m.b||!1)j.push("ambientColor")
if(a.dx){c.a+=u.k
j.push("highLight")
k=s?", txtCube":""
if(n)k+=", shadowCube"
m=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
m+="   vec3 intensity = "+r+"Intensity(normDir, lit"+k+");\n"
c.a=m
c.a=m+"   if(length(intensity) > 0.0001) {\n"
i=H.b([],p)
p=a.c
if(p.a||p.b||!1)i.push("diffuse(norm, normDir)")
p=a.d
if(p.a||p.b||!1)i.push("invDiffuse(norm, normDir)")
p=a.e
if(p.a||p.b||!1)i.push("specular(norm, normDir)")
p=c.a+="      highLight = intensity*("+C.b.n(i," + ")+");\n"
c.a=p+"   }\n"}p=c.a+="   return lit.color*("+C.b.n(j," + ")+");\n"
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
ow:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f="uniform sampler2D ",e=b.b
if(e<=0)return
s=b.a
r="spotLight"+s
q=A.hj(r)
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
if(m){s=$.hK
if(s==null)s=$.hK=new E.ft(E.lm(),E.ln())
p=c.a
if(s.b===C.v){s=p+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=s+"\n"}s=t.s
h=H.b([],s)
if(l)h.push("attenuation")
if(m)h.push("scale")
if(k)h.push("texture2D(txt2D, txtLoc).rgb")
else h.push("vec3(1.0, 1.0, 1.0)")
p=c.a+="   return "+C.b.n(h," * ")+";\n"
p+="}\n"
c.a=p
p+="\n"
c.a=p
p+="vec3 "+r+"Value(vec3 norm, "+q+" lit"+i+")\n"
c.a=p
c.a=p+"{\n"
h=H.b([],s)
p=a.b
if(p.a||p.b||!1)h.push("ambientColor")
if(a.dx){c.a+=u.k
h.push("highLight")
i=k?", txt2D":""
if(n)i+=", shadow2D"
p=c.a+="   vec3 intensity = "+r+"Intensity(lit"+i+");\n"
p+="   if(length(intensity) > 0.0001) {\n"
c.a=p
c.a=p+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
g=H.b([],s)
s=a.c
if(s.a||s.b||!1)g.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)g.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)g.push("specular(norm, litVec)")
s=c.a+="      highLight = intensity*("+C.b.n(g," + ")+");\n"
c.a=s+"   }\n"}s=c.a+="   return lit.color*("+C.b.n(h," + ")+");\n"
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
oq:function(a,b){var s,r
if(a.cy>0)return
s=b.a+="// === No Lights ===\n"
s+="\n"
b.a=s
s+="vec3 nonLightValues(vec3 norm)\n"
b.a=s
s+="{\n"
b.a=s
if(a.dx)b.a=s+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
r=H.b([],t.s)
s=a.b
if(s.a||s.b||!1)r.push("ambientColor")
s=a.c
if(s.a||s.b||!1)r.push("diffuse(norm, litVec)")
s=a.d
if(s.a||s.b||!1)r.push("invDiffuse(norm, litVec)")
s=a.e
if(s.a||s.b||!1)r.push("specular(norm, litVec)")
s=b.a+="   return "+C.b.n(r," + ")+";\n"
s+="}\n"
b.a=s
b.a=s+"\n"},
ox:function(a){var s,r,q,p,o,n,m,l="   lightAccum += all",k=new P.Z(""),j=""+"precision mediump float;\n"
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
A.oo(a,k)
A.ok(a,k)
A.om(a,k)
A.op(a,k)
A.ov(a,k)
j=a.db
if(j){q=k.a+="// === Environmental ===\n"
q+="\n"
k.a=q
q+="uniform samplerCube envSampler;\n"
k.a=q
k.a=q+"\n"
A.ot(a,k)
A.ou(a,k)}A.or(a,k)
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
if(q){for(p=a.z,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.ol(a,p[n],k)
for(p=a.Q,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.on(a,p[n],k)
for(p=a.ch,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.os(a,p[n],k)
for(p=a.cx,o=p.length,n=0;n<p.length;p.length===o||(0,H.r)(p),++n)A.ow(a,p[n],k)
A.oq(a,k)}p=k.a+="// === Main ===\n"
p+="\n"
k.a=p
p+="void main()\n"
k.a=p
p+="{\n"
k.a=p
p=k.a=p+"   float alpha = alphaValue();\n"
s=s?k.a=p+"   vec3 norm = normal();\n":p
if(j)k.a=s+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],t.s)
if(q){k.a+=u.o
m.push("lightAccum")
j=a.b
if(j.a||j.b||!1)k.a+="   setAmbientColor();\n"
j=a.c
if(j.a||j.b||!1)k.a+="   setDiffuseColor();\n"
j=a.d
if(j.a||j.b||!1)k.a+="   setInvDiffuseColor();\n"
j=a.e
if(j.a||j.b||!1)k.a+="   setSpecularColor();\n"
for(j=a.z,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="barLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a5(q,1))+"Values(norm);\n"}for(j=a.Q,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="dirLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a5(q,1))+"Values(norm);\n"}for(j=a.ch,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="pointLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a5(q,1))+"Values(norm);\n"}for(j=a.cx,s=j.length,n=0;n<j.length;j.length===s||(0,H.r)(j),++n){q="spotLight"+j[n].a
if(0>=q.length)return H.d(q,0)
k.a+=l+(q[0].toUpperCase()+C.a.a5(q,1))+"Values(norm);\n"}if(a.cy<=0)k.a+="   lightAccum += nonLightValues(norm);\n"}j=a.a
if(j.a||j.b||!1)m.push("emissionColor()")
j=a.r
if(j.a||j.b||!1)m.push("reflect(refl)")
j=a.x
if(j.a||j.b||!1)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
j=k.a+="   vec4 objClr = vec4("+C.b.n(m," + ")+", alpha);\n"
if(r)j=k.a=j+"   objClr = colorMat*objClr;\n"
j+="   gl_FragColor = objClr;\n"
k.a=j
j=k.a=j+"}\n"
return j.charCodeAt(0)==0?j:j},
oy:function(a,b){var s,r,q
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
oA:function(a,b){var s
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
oz:function(a,b){var s
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
oC:function(a,b){var s,r
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
oD:function(a,b){var s,r
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
oB:function(a,b){var s
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
oE:function(a,b){var s
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
hj:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.a5(a,1)},
kh:function(a,b,c,d,e){var s=new A.f1(H.b([],t.t),a,c,e)
s.f=d
s.e=P.cG(d,0,!1,t.S)
return s},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.x=a
_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=null
_.k3=b
_.i8=_.dv=_.du=_.i7=_.dt=_.ds=_.dr=_.i6=_.dq=_.dn=_.dm=_.i5=_.dl=_.dk=_.i4=_.dj=_.di=_.dh=_.aR=_.aQ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null
_.ca=c
_.cb=d
_.cc=e
_.cd=f
_.ce=g
_.cf=h
_.cg=i
_.ci=j
_.ib=_.ia=_.i9=null
_.a=k
_.b=l
_.d=_.c=""
_.r=_.f=_.e=null},
aZ:function aZ(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.b=b},
b5:function b5(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
i4:function i4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7){var _=this
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
_.aR=b6
_.dh=b7},
d8:function d8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d9:function d9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
db:function db(a,b,c,d,e,f,g,h,i,j){var _=this
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
de:function de(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d_:function d_(){},
a_:function a_(){},
iO:function iO(a){this.a=a},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c},
f3:function f3(a,b,c){this.a=a
this.c=b
this.d=c},
f4:function f4(a,b,c){this.a=a
this.c=b
this.d=c},
f5:function f5(a,b,c){this.a=a
this.c=b
this.d=c},
f1:function f1(a,b,c,d){var _=this
_.e=a
_.f=0
_.a=b
_.c=c
_.d=d},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
f2:function f2(a,b,c){this.a=a
this.c=b
this.d=c},
d6:function d6(a,b,c){this.a=a
this.c=b
this.d=c},
d7:function d7(a,b,c){this.a=a
this.c=b
this.d=c},
f6:function f6(a,b,c){this.a=a
this.c=b
this.d=c},
da:function da(a,b,c){this.a=a
this.c=b
this.d=c},
c3:function c3(a,b,c){this.a=a
this.c=b
this.d=c},
dc:function dc(a,b,c){this.a=a
this.c=b
this.d=c},
dd:function dd(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jA:function(a){var s=a.a>0?1:0
if(a.b>0)s+=2
return(a.c>0?s+4:s)*2},
dH:function(a,b,c,a0,a1,a2,a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i={},h=a2+a3,g=h+a4,f=a3+a4,e=a4+a2,d=new V.D(g,f+a2,e+a3)
i.a=d
s=a2-a3
r=a3-a4
q=a4-a2
p=i.b=new V.D(s+a4,r+a2,q+a3)
o=new V.D(s-a4,r-a2,q-a3)
i.c=o
n=i.d=new V.D(h-a4,f-a2,e-a3)
if(g>0){i.d=p
i.b=n
g=p
h=n}else{g=n
h=p}for(e=g,g=h,h=d,f=o,m=0;m<a5;++m,l=e,e=h,h=g,g=f,f=l){i.a=g
i.b=f
i.c=e
i.d=h}k=F.jA(h)
j=F.jA(g)
a.hs(F.lZ(a0,a1,new F.jx(i,F.jA(f),F.jA(e),j,k,c),b))},
p2:function(a,b){return F.lZ(b,a,new F.jN(new F.jO()),null)},
lZ:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(a<1)throw H.c(P.f("Must have 1 or more divisions of the width for a surface."))
if(b<1)throw H.c(P.f("Must have 1 or more divisions of the height for a surface."))
s=F.l9()
r=t.k
q=H.b([],r)
for(p=0;p<=b;++p){o=p/b
n=s.a
if(n==null)n=s.a=new F.A(s,H.b([],r))
if(o<0)m=0
else m=o>1?1:o
l=n.d5(new V.bo(m,0,0,1),new V.a3(o,1))
c.$3(l,o,0)
q.push(l.c9(d))}for(p=1;p<=a;++p){k=p/a
for(n=k>1,m=k<0,j=1-k,i=0;i<=b;++i){o=i/b
h=s.a
if(h==null)h=s.a=new F.A(s,H.b([],r))
if(o<0)g=0
else g=o>1?1:o
if(m)f=0
else f=n?1:k
if(m)e=0
else e=n?1:k
l=h.d5(new V.bo(g,f,e,1),new V.a3(o,j))
c.$3(l,o,k)
q.push(l.c9(d))}}s.gY().h0(a+1,b+1,q)
return s},
l9:function(){return new F.iu()},
ll:function(a,b,c,d,e,f,g,h,i){var s,r,q=new F.c7()
h=$.mg()
s=$.bk()
r=h.a
if((r&s.a)!==0)q.f=d
if((r&$.bj().a)!==0)q.r=e
if((r&$.bi().a)!==0)q.x=b
if((r&$.bl().a)!==0)q.y=f
if((r&$.bD().a)!==0)q.z=g
if((r&$.mh().a)!==0)q.Q=c
if((r&$.ci().a)!==0)q.ch=i
if((r&$.bh().a)!==0)q.cx=a
return q},
jx:function jx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jO:function jO(){},
jN:function jN(a){this.a=a},
aB:function aB(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){this.b=this.a=null},
eB:function eB(){this.a=null},
iu:function iu(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d0:function d0(a,b){this.a=a
this.b=b},
bY:function bY(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b){this.a=a
this.b=b},
c7:function c7(){var _=this
_.d=_.c=_.b=_.a=null
_.e=0
_.Q=_.z=_.y=_.x=_.r=_.f=null
_.ch=0
_.cx=null},
j9:function j9(a){this.a=a},
j8:function j8(a){this.a=a},
A:function A(a,b){this.a=a
this.b=!1
this.c=b},
j4:function j4(a,b,c){this.b=a
this.c=b
this.d=c},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.b=a
this.c=b},
j7:function j7(a){this.b=a}},T={c0:function c0(){},eU:function eU(){},eV:function eV(a){var _=this
_.a=0
_.b=a
_.d=_.c=!1
_.y=null},iE:function iE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=0},iF:function iF(a,b,c,d,e,f,g){var _=this
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
H.ka.prototype={}
J.a.prototype={
m:function(a,b){return a===b},
gw:function(a){return H.cV(a)},
i:function(a){return"Instance of '"+H.cW(a)+"'"}}
J.ec.prototype={
i:function(a){return String(a)},
gw:function(a){return a?519018:218159},
$iaz:1}
J.cz.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gw:function(a){return 0}}
J.b2.prototype={
gw:function(a){return 0},
i:function(a){return String(a)},
$ikS:1}
J.ez.prototype={}
J.c4.prototype={}
J.aJ.prototype={
i:function(a){var s=a[$.m2()]
if(s==null)return this.ea(a)
return"JavaScript function for "+J.dS(s)}}
J.u.prototype={
P:function(a,b){var s
if(!!a.fixed$length)H.h(P.z("remove"))
for(s=0;s<a.length;++s)if(J.V(a[s],b)){a.splice(s,1)
return!0}return!1},
bl:function(a,b){if(!!a.fixed$length)H.h(P.z("addAll"))
this.er(a,b)
return},
er:function(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw H.c(P.b0(a))
for(s=0;s<r;++s)a.push(b[s])},
A:function(a,b){var s,r=a.length
for(s=0;s<r;++s){b.$1(a[s])
if(a.length!==r)throw H.c(P.b0(a))}},
n:function(a,b){var s,r,q=a.length,p=P.cG(q,"",!1,t.N)
for(s=0;s<a.length;++s){r=H.w(a[s])
if(s>=q)return H.d(p,s)
p[s]=r}return p.join(b)},
hp:function(a){return this.n(a,"")},
hj:function(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw H.c(P.b0(a))}return s},
hk:function(a,b,c){return this.hj(a,b,c,t.z)},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
gaB:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.c(H.mI())},
b1:function(a,b){if(!!a.immutable$list)H.h(P.z("sort"))
H.na(a,b==null?J.ob():b)},
e7:function(a){return this.b1(a,null)},
I:function(a,b){var s
for(s=0;s<a.length;++s)if(J.V(a[s],b))return!0
return!1},
i:function(a){return P.k7(a,"[","]")},
gN:function(a){return new J.ab(a,a.length)},
gw:function(a){return H.cV(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.h(P.z("set length"))
if(b>a.length)H.lE(a).c.a(null)
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.cg(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.h(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cg(a,b))
a[b]=c},
$iv:1,
$im:1,
$ik:1,
$ip:1}
J.hU.prototype={}
J.ab.prototype={
gD:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.c(H.r(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.bQ.prototype={
a9:function(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbs(b)
if(this.gbs(a)===s)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
hS:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.c(P.z(""+a+".toInt()"))},
ck:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.c(P.z(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
cv:function(a,b){var s
if(b>20)throw H.c(P.a6(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+s
return s},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
bh:function(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
if(b<0)return s-b
else return s+b},
eb:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d0(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.d0(a,b)},
d0:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.c(P.z("Result of truncating division is "+H.w(s)+": "+H.w(a)+" ~/ "+b))},
aO:function(a,b){var s
if(a>0)s=this.d_(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fP:function(a,b){if(b<0)throw H.c(H.dM(b))
return this.d_(a,b)},
d_:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia0:1}
J.cy.prototype={$ii:1}
J.ed.prototype={}
J.bt.prototype={
O:function(a,b){if(b<0)throw H.c(H.cg(a,b))
if(b>=a.length)H.h(H.cg(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.cg(a,b))
return a.charCodeAt(b)},
W:function(a,b){return a+b},
aY:function(a,b,c,d){var s=P.b6(b,c,a.length),r=a.substring(0,b),q=a.substring(s)
return r+d+q},
a0:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
a_:function(a,b){return this.a0(a,b,0)},
p:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.eD(b,null))
if(b>c)throw H.c(P.eD(b,null))
if(c>a.length)throw H.c(P.eD(c,null))
return a.substring(b,c)},
a5:function(a,b){return this.p(a,b,null)},
K:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.I)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ac:function(a,b){var s=b-a.length
if(s<=0)return a
return this.K(" ",s)+a},
hC:function(a,b,c){var s=b-a.length
if(s<=0)return a
return a+this.K(c,s)},
bq:function(a,b,c){var s
if(c<0||c>a.length)throw H.c(P.a6(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
dD:function(a,b){return this.bq(a,b,0)},
h5:function(a,b,c){var s=a.length
if(c>s)throw H.c(P.a6(c,0,s,null,null))
return H.lX(a,b,c)},
I:function(a,b){return this.h5(a,b,0)},
a9:function(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i:function(a){return a},
gw:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gj:function(a){return a.length},
$iv:1,
$iq:1}
H.cC.prototype={
i:function(a){var s="LateInitializationError: "+this.a
return s}}
H.Q.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.O(this.a,b)}}
H.m.prototype={}
H.bR.prototype={
gD:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a,p=J.bB(q),o=p.gj(q)
if(r.b!==o)throw H.c(P.b0(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.E(q,s);++r.c
return!0}}
H.aL.prototype={
gN:function(a){return new H.ej(J.aD(this.a),this.b)},
gj:function(a){return J.aY(this.a)},
E:function(a,b){return this.b.$1(J.k0(this.a,b))}}
H.ct.prototype={$im:1}
H.ej.prototype={
t:function(){var s=this,r=s.b
if(r.t()){s.a=s.c.$1(r.gD(r))
return!0}s.a=null
return!1},
gD:function(a){return H.S(this).Q[1].a(this.a)}}
H.dh.prototype={
gN:function(a){return new H.fh(J.aD(this.a),this.b)}}
H.fh.prototype={
t:function(){var s,r
for(s=this.a,r=this.b;s.t();)if(r.$1(s.gD(s)))return!0
return!1},
gD:function(a){var s=this.a
return s.gD(s)}}
H.cu.prototype={}
H.f9.prototype={
k:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.c5.prototype={}
H.co.prototype={
i:function(a){return P.kd(this)},
k:function(a,b,c){H.mB()},
$iG:1}
H.cp.prototype={
gj:function(a){return this.a},
c7:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c7(0,b))return null
return this.cP(b)},
cP:function(a){return this.b[a]},
A:function(a,b){var s,r,q,p=this.c
for(s=p.length,r=0;r<s;++r){q=p[r]
b.$2(q,this.cP(q))}}}
H.iM.prototype={
ab:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
H.cT.prototype={
i:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.ef.prototype={
i:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
H.f8.prototype={
i:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.im.prototype={
i:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.fW.prototype={
i:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s}}
H.bH.prototype={
i:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.m0(r==null?"unknown":r)+"'"},
ghY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iD.prototype={}
H.iz.prototype={
i:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.m0(s)+"'"}}
H.cj.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cj))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gw:function(a){var s,r=this.c
if(r==null)s=H.cV(this.a)
else s=typeof r!=="object"?J.k1(r):H.cV(r)
return(s^H.cV(this.b))>>>0},
i:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.w(this.d)+"' of "+("Instance of '"+H.cW(s)+"'")}}
H.eG.prototype={
i:function(a){return"RuntimeError: "+this.a}}
H.U.prototype={
gj:function(a){return this.a},
gaa:function(a){return new H.cE(this,H.S(this).H("cE<1>"))},
ghX:function(a){var s=this,r=H.S(s)
return H.mR(s.gaa(s),new H.hV(s),r.c,r.Q[1])},
c7:function(a,b){var s=this.b
if(s==null)return!1
return this.eB(s,b)},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.bj(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.bj(p,b)
q=r==null?n:r.b
return q}else return o.hn(b)},
hn:function(a){var s,r,q=this,p=q.d
if(p==null)return null
s=q.cQ(p,q.dE(a))
r=q.dF(s,a)
if(r<0)return null
return s[r].b},
k:function(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.cJ(s==null?q.b=q.bR():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=q.c
q.cJ(r==null?q.c=q.bR():r,b,c)}else q.ho(b,c)},
ho:function(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.bR()
s=p.dE(a)
r=p.cQ(o,s)
if(r==null)p.bZ(o,s,[p.bS(a,b)])
else{q=p.dF(r,a)
if(q>=0)r[q].b=b
else r.push(p.bS(a,b))}},
A:function(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw H.c(P.b0(s))
r=r.c}},
cJ:function(a,b,c){var s=this.bj(a,b)
if(s==null)this.bZ(a,b,this.bS(b,c))
else s.b=c},
bS:function(a,b){var s=this,r=new H.hX(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&67108863
return r},
dE:function(a){return J.k1(a)&0x3ffffff},
dF:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1},
i:function(a){return P.kd(this)},
bj:function(a,b){return a[b]},
cQ:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
eE:function(a,b){delete a[b]},
eB:function(a,b){return this.bj(a,b)!=null},
bR:function(){var s="<non-identifier-key>",r=Object.create(null)
this.bZ(r,s,r)
this.eE(r,s)
return r}}
H.hV.prototype={
$1:function(a){var s=this.a
return H.S(s).Q[1].a(s.h(0,a))},
$S:function(){return H.S(this.a).H("2(1)")}}
H.hX.prototype={}
H.cE.prototype={
gj:function(a){return this.a.a},
gN:function(a){var s=this.a,r=new H.ei(s,s.r)
r.c=s.e
return r}}
H.ei.prototype={
gD:function(a){return H.S(this).c.a(this.d)},
t:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.c(P.b0(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
H.jQ.prototype={
$1:function(a){return this.a(a)},
$S:29}
H.jR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.jS.prototype={
$1:function(a){return this.a(a)},
$S:44}
H.ee.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$il3:1}
H.cP.prototype={$icP:1}
H.Y.prototype={$iY:1}
H.bU.prototype={
gj:function(a){return a.length},
$iv:1,
$iy:1}
H.bx.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aV(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.cQ.prototype={
k:function(a,b,c){H.aV(b,a,a.length)
a[b]=c},
$im:1,
$ik:1,
$ip:1}
H.ep.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.eq.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.er.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.es.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.et.prototype={
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.cR.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aV(b,a,a.length)
return a[b]}}
H.by.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aV(b,a,a.length)
return a[b]},
$iby:1,
$ic1:1}
H.dp.prototype={}
H.dq.prototype={}
H.dr.prototype={}
H.ds.prototype={}
H.av.prototype={
H:function(a){return H.h7(v.typeUniverse,this,a)},
b4:function(a){return H.nJ(v.typeUniverse,this,a)}}
H.fy.prototype={}
H.fu.prototype={
i:function(a){return this.a}}
H.dA.prototype={}
P.jc.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:43}
P.jb.prototype={
$1:function(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:40}
P.jd.prototype={
$0:function(){this.a.$0()},
$S:11}
P.je.prototype={
$0:function(){this.a.$0()},
$S:11}
P.dz.prototype={
en:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.jr(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eo:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cf(new P.jq(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$iiI:1}
P.jr.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jq.prototype={
$0:function(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=C.c.eb(s,o)}q.c=p
r.d.$1(q)},
$S:11}
P.c9.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.w(this.a)+")"}}
P.ca.prototype={
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
if(r instanceof P.c9){q=r.b
if(q===2){p=n.d
if(p==null||p.length===0){n.b=null
return!1}if(0>=p.length)return H.d(p,-1)
n.a=p.pop()
continue}else{s=r.a
if(q===3)throw s
else{o=J.aD(s)
if(o instanceof P.ca){s=n.d
if(s==null)s=n.d=[]
s.push(n.a)
n.a=o.a
continue}else{n.c=o
continue}}}}else{n.b=r
return!0}}return!1}}
P.dw.prototype={
gN:function(a){return new P.ca(this.a())}}
P.fi.prototype={}
P.c_.prototype={}
P.eP.prototype={}
P.jw.prototype={}
P.jI.prototype={
$0:function(){var s=H.c(this.a)
s.stack=this.b.i(0)
throw s},
$S:3}
P.jj.prototype={
hO:function(a){var s,r,q,p=null
try{if(C.f===$.aC){a.$0()
return}P.oG(p,p,this,a)}catch(q){s=H.bg(q)
r=H.kD(q)
P.lK(p,p,this,s,r)}},
hP:function(a,b){var s,r,q,p=null
try{if(C.f===$.aC){a.$1(b)
return}P.oH(p,p,this,a,b)}catch(q){s=H.bg(q)
r=H.kD(q)
P.lK(p,p,this,s,r)}},
hQ:function(a,b){return this.hP(a,b,t.z)},
h2:function(a){return new P.jk(this,a)},
dc:function(a,b){return new P.jl(this,a,b)}}
P.jk.prototype={
$0:function(){return this.a.hO(this.b)},
$S:3}
P.jl.prototype={
$1:function(a){return this.a.hQ(this.b,a)},
$S:function(){return this.c.H("~(0)")}}
P.dk.prototype={
gN:function(a){var s=new P.dl(this,this.r)
s.c=this.e
return s},
gj:function(a){return this.a},
I:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ey(b)
return r}},
ey:function(a){var s=this.d
if(s==null)return!1
return this.bO(s[this.bK(a)],a)>=0},
l:function(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cL(s==null?q.b=P.km():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cL(r==null?q.c=P.km():r,b)}else return q.eq(0,b)},
eq:function(a,b){var s,r,q=this,p=q.d
if(p==null)p=q.d=P.km()
s=q.bK(b)
r=p[s]
if(r==null)p[s]=[q.bJ(b)]
else{if(q.bO(r,b)>=0)return!1
r.push(q.bJ(b))}return!0},
P:function(a,b){if((b&1073741823)===b)return this.fG(this.c,b)
else return this.fF(0,b)},
fF:function(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bK(b)
r=n[s]
q=o.bO(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.d2(p)
return!0},
cL:function(a,b){if(a[b]!=null)return!1
a[b]=this.bJ(b)
return!0},
fG:function(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.d2(s)
delete a[b]
return!0},
cS:function(){this.r=this.r+1&1073741823},
bJ:function(a){var s,r=this,q=new P.ji(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cS()
return q},
d2:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cS()},
bK:function(a){return J.k1(a)&1073741823},
bO:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.V(a[r].a,b))return r
return-1}}
P.ji.prototype={}
P.dl.prototype={
gD:function(a){return H.S(this).c.a(this.d)},
t:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.c(P.b0(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
P.cx.prototype={}
P.hY.prototype={
$2:function(a,b){this.a.k(0,this.b.a(a),this.c.a(b))},
$S:9}
P.cF.prototype={$im:1,$ik:1,$ip:1}
P.j.prototype={
gN:function(a){return new H.bR(a,this.gj(a))},
E:function(a,b){return this.h(a,b)},
A:function(a,b){var s,r=this.gj(a)
for(s=0;s<r;++s){b.$1(this.h(a,s))
if(r!==this.gj(a))throw H.c(P.b0(a))}},
gdG:function(a){return this.gj(a)===0},
hU:function(a,b){var s,r,q,p,o=this
if(o.gdG(a)){s=J.k8(0,H.aW(a).H("j.E"))
return s}r=o.h(a,0)
q=P.cG(o.gj(a),r,!0,H.aW(a).H("j.E"))
for(p=1;p<o.gj(a);++p){s=o.h(a,p)
if(p>=q.length)return H.d(q,p)
q[p]=s}return q},
hT:function(a){return this.hU(a,!0)},
hh:function(a,b,c,d){var s
H.aW(a).H("j.E").a(d)
P.b6(b,c,this.gj(a))
for(s=b;s<c;++s)this.k(a,s,d)},
i:function(a){return P.k7(a,"[","]")}}
P.cI.prototype={}
P.i1.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.w(a)
r.a=s+": "
r.a+=H.w(b)},
$S:39}
P.N.prototype={
A:function(a,b){var s,r,q
for(s=J.aD(this.gaa(a)),r=H.aW(a).H("N.V");s.t();){q=s.gD(s)
b.$2(q,r.a(this.h(a,q)))}},
gj:function(a){return J.aY(this.gaa(a))},
i:function(a){return P.kd(a)},
$iG:1}
P.h8.prototype={
k:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.cJ.prototype={
h:function(a,b){return J.kK(this.a,b)},
k:function(a,b,c){J.k_(this.a,b,c)},
A:function(a,b){J.dR(this.a,b)},
gj:function(a){return J.aY(this.a)},
i:function(a){return J.dS(this.a)},
$iG:1}
P.c6.prototype={}
P.cZ.prototype={
i:function(a){return P.k7(this,"{","}")},
E:function(a,b){var s,r,q,p,o="index"
H.oT(b,o,t.S)
P.l2(b,o)
for(s=P.nt(this,this.r),r=H.S(s).c,q=0;s.t();){p=r.a(s.d)
if(b===q)return p;++q}throw H.c(P.L(b,this,o,null,q))}}
P.dt.prototype={$im:1,$ik:1}
P.dm.prototype={}
P.dE.prototype={}
P.dG.prototype={}
P.iZ.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){H.bg(r)}return null},
$S:23}
P.iY.prototype={
$0:function(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){H.bg(r)}return null},
$S:23}
P.hp.prototype={
ht:function(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="Invalid base64 encoding length "
a4=P.b6(a3,a4,a2.length)
s=$.mj()
for(r=s.length,q=a3,p=q,o=null,n=-1,m=-1,l=0;q<a4;q=k){k=q+1
j=C.a.C(a2,q)
if(j===37){i=k+2
if(i<=a4){h=H.jP(C.a.C(a2,k))
g=H.jP(C.a.C(a2,k+1))
f=h*16+g-(g&256)
if(f===37)f=-1
k=i}else f=-1}else f=j
if(0<=f&&f<=127){if(f<0||f>=r)return H.d(s,f)
e=s[f]
if(e>=0){f=C.a.O("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e)
if(f===j)continue
j=f}else{if(e===-1){if(n<0){d=o==null?null:o.a.length
if(d==null)d=0
n=d+(q-p)
m=q}++l
if(j===61)continue}j=f}if(e!==-2){if(o==null){o=new P.Z("")
d=o}else d=o
c=d.a+=C.a.p(a2,p,q)
d.a=c+H.aR(j)
p=k
continue}}throw H.c(P.a5("Invalid base64 data",a2,q))}if(o!=null){r=o.a+=C.a.p(a2,p,a4)
d=r.length
if(n>=0)P.kL(a2,m,a4,n,l,d)
else{b=C.c.bh(d-1,4)+1
if(b===1)throw H.c(P.a5(a0,a2,a4))
for(;b<4;){r+="="
o.a=r;++b}}r=o.a
return C.a.aY(a2,a3,a4,r.charCodeAt(0)==0?r:r)}a=a4-a3
if(n>=0)P.kL(a2,m,a4,n,l,a)
else{b=C.c.bh(a,4)
if(b===1)throw H.c(P.a5(a0,a2,a4))
if(b>1)a2=C.a.aY(a2,a4,a4,b===2?"==":"=")}return a2}}
P.hq.prototype={}
P.e_.prototype={}
P.e2.prototype={}
P.hI.prototype={}
P.iW.prototype={
ghg:function(){return C.J}}
P.j_.prototype={
c8:function(a){var s,r,q,p=P.b6(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new P.jv(r)
if(q.eG(a,0,p)!==p){C.a.O(a,p-1)
q.c2()}return new Uint8Array(r.subarray(0,H.o2(0,q.b,s)))}}
P.jv.prototype={
c2:function(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(q>=o)return H.d(r,q)
r[q]=239
q=s.b=p+1
if(p>=o)return H.d(r,p)
r[p]=191
s.b=q+1
if(q>=o)return H.d(r,q)
r[q]=189},
fX:function(a,b){var s,r,q,p,o,n=this
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
return!0}else{n.c2()
return!1}},
eG:function(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(C.a.O(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=C.a.C(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.fX(p,C.a.C(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.c2()}else if(p<=2047){o=l.b
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
P.iX.prototype={
c8:function(a){var s=this.a,r=P.ni(s,a,0,null)
if(r!=null)return r
return new P.ju(s).h6(a,0,null,!0)}}
P.ju.prototype={
h6:function(a,b,c,d){var s,r,q,p,o=this,n=P.b6(b,c,J.aY(a))
if(b===n)return""
s=P.nY(a,b,n)
r=o.bL(s,0,n-b,!0)
q=o.b
if((q&1)!==0){p=P.nZ(q)
o.b=0
throw H.c(P.a5(p,a,b+o.c))}return r},
bL:function(a,b,c,d){var s,r,q=this
if(c-b>1000){s=C.c.X(b+c,2)
r=q.bL(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.bL(a,s,c,d)}return q.ha(a,b,c,d)},
ha:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new P.Z(""),f=b+1,e=a.length
if(b<0||b>=e)return H.d(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=C.a.C("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=C.a.C(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=H.aR(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=H.aR(j)
break
case 65:g.a+=H.aR(j);--f
break
default:p=g.a+=H.aR(j)
g.a=p+H.aR(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(f<0||f>=e)return H.d(a,f)
s=a[f]}o=f+1
if(f<0||f>=e)return H.d(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(o<0||o>=e)return H.d(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(l>=e)return H.d(a,l)
g.a+=H.aR(a[l])}else g.a+=P.eR(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=H.aR(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
P.W.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.W&&this.a===b.a&&!0},
a9:function(a,b){return C.c.a9(this.a,b.a)},
gw:function(a){var s=this.a
return(s^C.c.aO(s,30))&1073741823},
i:function(a){var s=this,r=P.mC(H.n1(s)),q=P.e4(H.n_(s)),p=P.e4(H.mW(s)),o=P.e4(H.mX(s)),n=P.e4(H.mZ(s)),m=P.e4(H.n0(s)),l=P.mD(H.mY(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.bp.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.bp&&this.a===b.a},
gw:function(a){return C.c.gw(this.a)},
a9:function(a,b){return C.c.a9(this.a,b.a)},
i:function(a){var s,r,q,p=new P.hG(),o=this.a
if(o<0)return"-"+new P.bp(0-o).i(0)
s=p.$1(C.c.X(o,6e7)%60)
r=p.$1(C.c.X(o,1e6)%60)
q=new P.hF().$1(o%1e6)
return""+C.c.X(o,36e8)+":"+s+":"+r+"."+q}}
P.hF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.hG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.H.prototype={}
P.dW.prototype={
i:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.hM(s)
return"Assertion failed"}}
P.f0.prototype={}
P.eu.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gbN()+o+m
if(!q.a)return l
s=q.gbM()
r=P.hM(q.b)
return l+s+": "+r}}
P.cX.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.w(q):""
else if(q==null)s=": Not greater than or equal to "+H.w(r)
else if(q>r)s=": Not in inclusive range "+H.w(r)+".."+H.w(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.w(r)
return s}}
P.ea.prototype={
gbN:function(){return"RangeError"},
gbM:function(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gj:function(a){return this.f}}
P.fa.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f7.prototype={
i:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.eN.prototype={
i:function(a){return"Bad state: "+this.a}}
P.e1.prototype={
i:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hM(s)+"."}}
P.ex.prototype={
i:function(a){return"Out of Memory"},
$iH:1}
P.d1.prototype={
i:function(a){return"Stack Overflow"},
$iH:1}
P.e3.prototype={
i:function(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
P.fv.prototype={
i:function(a){return"Exception: "+this.a}}
P.hR.prototype={
i:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=C.a.p(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=C.a.C(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=C.a.O(d,o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(e-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-e<75){k=m-75
l=m
i=""}else{k=e-36
l=e+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}h=C.a.p(d,k,l)
return f+j+h+i+"\n"+C.a.K(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+H.w(e)+")"):f}}
P.k.prototype={
gj:function(a){var s,r=this.gN(this)
for(s=0;r.t();)++s
return s},
E:function(a,b){var s,r,q
P.l2(b,"index")
for(s=this.gN(this),r=0;s.t();){q=s.gD(s)
if(b===r)return q;++r}throw H.c(P.L(b,this,"index",null,r))},
i:function(a){return P.mH(this,"(",")")}}
P.eb.prototype={}
P.ae.prototype={
gw:function(a){return P.O.prototype.gw.call(C.M,this)},
i:function(a){return"null"}}
P.O.prototype={constructor:P.O,$iO:1,
m:function(a,b){return this===b},
gw:function(a){return H.cV(this)},
i:function(a){return"Instance of '"+H.cW(this)+"'"},
toString:function(){return this.i(this)}}
P.Z.prototype={
gj:function(a){return this.a.length},
i:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
P.iU.prototype={
$2:function(a,b){var s,r,q,p=C.a.dD(b,"=")
if(p===-1){if(b!=="")J.k_(a,P.kv(b,0,b.length,this.a,!0),"")}else if(p!==0){s=C.a.p(b,0,p)
r=C.a.a5(b,p+1)
q=this.a
J.k_(a,P.kv(s,0,s.length,q,!0),P.kv(r,0,r.length,q,!0))}return a},
$S:38}
P.iR.prototype={
$2:function(a,b){throw H.c(P.a5("Illegal IPv4 address, "+a,this.a,b))},
$S:37}
P.iS.prototype={
$2:function(a,b){throw H.c(P.a5("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:35}
P.iT.prototype={
$2:function(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=P.jT(C.a.p(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:33}
P.bA.prototype={
gc0:function(){var s,r,q,p=this,o=p.x
if(o==null){o=p.a
s=o.length!==0?""+o+":":""
r=p.c
q=r==null
if(!q||o==="file"){o=s+"//"
s=p.b
if(s.length!==0)o=o+s+"@"
if(!q)o+=r
s=p.d
if(s!=null)o=o+":"+H.w(s)}else o=s
o+=p.e
s=p.f
if(s!=null)o=o+"?"+s
s=p.r
if(s!=null)o=o+"#"+s
o=o.charCodeAt(0)==0?o:o
if(p.x==null)p.x=o
else o=H.h(H.kc("_text"))}return o},
gw:function(a){var s=this,r=s.z
if(r==null){r=C.a.gw(s.gc0())
if(s.z==null)s.z=r
else r=H.h(H.kc("hashCode"))}return r},
gby:function(){var s=this,r=s.Q
if(r==null){r=s.f
r=new P.c6(P.lh(r==null?"":r),t.x)
if(s.Q==null)s.Q=r
else r=H.h(H.kc("queryParameters"))}return r},
ge2:function(){return this.b},
gcl:function(a){var s=this.c
if(s==null)return""
if(C.a.a_(s,"["))return C.a.p(s,1,s.length-1)
return s},
gbx:function(a){var s=this.d
return s==null?P.lx(this.a):s},
gcs:function(a){var s=this.f
return s==null?"":s},
gdw:function(){var s=this.r
return s==null?"":s},
dW:function(a,b){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!C.a.a_(s,"/"))s="/"+s
q=s
p=P.kt(null,0,0,b)
return new P.bA(n,l,j,k,q,p,o.r)},
gdz:function(){return this.c!=null},
gdC:function(){return this.f!=null},
gdA:function(){return this.r!=null},
i:function(a){return this.gc0()},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(t.dD.b(b))if(q.a===b.gbB())if(q.c!=null===b.gdz())if(q.b===b.ge2())if(q.gcl(q)===b.gcl(b))if(q.gbx(q)===b.gbx(b))if(q.e===b.gdR(b)){s=q.f
r=s==null
if(!r===b.gdC()){if(r)s=""
if(s===b.gcs(b)){s=q.r
r=s==null
if(!r===b.gdA()){if(r)s=""
s=s===b.gdw()}else s=!1}else s=!1}else s=!1}else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
else s=!1
return s},
$ifb:1,
gbB:function(){return this.a},
gdR:function(a){return this.e}}
P.jt.prototype={
$2:function(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=s.a+=P.kw(C.h,a,C.e,!0)
if(b!=null&&b.length!==0){s.a=r+"="
s.a+=P.kw(C.h,b,C.e,!0)}},
$S:32}
P.js.prototype={
$2:function(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.aD(b),r=this.a;s.t();)r.$2(a,s.gD(s))},
$S:5}
P.iQ.prototype={
ge1:function(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return H.d(m,0)
s=o.a
m=m[0]+1
r=C.a.bq(s,"?",m)
q=s.length
if(r>=0){p=P.dF(s,r+1,q,C.k,!1)
q=r}else p=n
m=o.c=new P.fo("data","",n,n,P.dF(s,m,q,C.u,!1),p,n)}return m},
i:function(a){var s,r=this.b
if(0>=r.length)return H.d(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
P.jB.prototype={
$2:function(a,b){var s=this.a
if(a>=s.length)return H.d(s,a)
s=s[a]
C.S.hh(s,0,96,b)
return s},
$S:31}
P.jC.prototype={
$3:function(a,b,c){var s,r,q
for(s=b.length,r=0;r<s;++r){q=C.a.C(b,r)^96
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:22}
P.jD.prototype={
$3:function(a,b,c){var s,r,q
for(s=C.a.C(b,0),r=C.a.C(b,1);s<=r;++s){q=(s^96)>>>0
if(q>=96)return H.d(a,q)
a[q]=c}},
$S:22}
P.fQ.prototype={
gdz:function(){return this.c>0},
gdB:function(){return this.c>0&&this.d+1<this.e},
gdC:function(){return this.f<this.r},
gdA:function(){return this.r<this.a.length},
gbB:function(){var s=this.x
return s==null?this.x=this.ez():s},
ez:function(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&C.a.a_(r.a,"http"))return"http"
if(q===5&&C.a.a_(r.a,"https"))return"https"
if(s&&C.a.a_(r.a,"file"))return"file"
if(q===7&&C.a.a_(r.a,"package"))return"package"
return C.a.p(r.a,0,q)},
ge2:function(){var s=this.c,r=this.b+3
return s>r?C.a.p(this.a,r,s-1):""},
gcl:function(a){var s=this.c
return s>0?C.a.p(this.a,s,this.d):""},
gbx:function(a){var s,r=this
if(r.gdB())return P.jT(C.a.p(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&C.a.a_(r.a,"http"))return 80
if(s===5&&C.a.a_(r.a,"https"))return 443
return 0},
gdR:function(a){return C.a.p(this.a,this.e,this.f)},
gcs:function(a){var s=this.f,r=this.r
return s<r?C.a.p(this.a,s+1,r):""},
gdw:function(){var s=this.r,r=this.a
return s<r.length?C.a.a5(r,s+1):""},
gby:function(){var s=this
if(s.f>=s.r)return C.R
return new P.c6(P.lh(s.gcs(s)),t.x)},
dW:function(a,b){var s,r,q,p,o,n=this,m=null,l=n.gbB(),k=l==="file",j=n.c,i=j>0?C.a.p(n.a,n.b+3,j):"",h=n.gdB()?n.gbx(n):m
j=n.c
if(j>0)s=C.a.p(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=C.a.p(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!C.a.a_(r,"/"))r="/"+r
p=P.kt(m,0,0,b)
q=n.r
o=q<j.length?C.a.a5(j,q+1):m
return new P.bA(l,i,s,h,r,p,o)},
gw:function(a){var s=this.y
return s==null?this.y=C.a.gw(this.a):s},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.i(0)},
i:function(a){return this.a},
$ifb:1}
P.fo.prototype={}
W.o.prototype={}
W.hk.prototype={
gj:function(a){return a.length}}
W.dU.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.dV.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.bm.prototype={$ibm:1}
W.bn.prototype={
cz:function(a,b,c){if(c!=null)return a.getContext(b,P.lP(c))
return a.getContext(b)},
e4:function(a,b){return this.cz(a,b,null)},
$ibn:1}
W.cn.prototype={$icn:1}
W.aA.prototype={
gj:function(a){return a.length}}
W.hy.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.cq.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.hz.prototype={}
W.ap.prototype={}
W.aG.prototype={}
W.hA.prototype={
gj:function(a){return a.length}}
W.hB.prototype={
gj:function(a){return a.length}}
W.hC.prototype={
gj:function(a){return a.length}}
W.hD.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.cr.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.cs.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.w(r)+", "
s=a.top
s.toString
return r+H.w(s)+") "+H.w(this.gaF(a))+" x "+H.w(this.gaA(a))},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bf(b)
if(s===r.gbt(b)){s=a.top
s.toString
s=s===r.gbz(b)&&this.gaF(a)===r.gaF(b)&&this.gaA(a)===r.gaA(b)}else s=!1}else s=!1
return s},
gw:function(a){var s,r=a.left
r.toString
r=C.d.gw(r)
s=a.top
s.toString
return W.lp(r,C.d.gw(s),C.d.gw(this.gaF(a)),C.d.gw(this.gaA(a)))},
gdd:function(a){var s=a.bottom
s.toString
return s},
gcR:function(a){return a.height},
gaA:function(a){var s=this.gcR(a)
s.toString
return s},
gbt:function(a){var s=a.left
s.toString
return s},
gct:function(a){var s=a.right
s.toString
return s},
gbz:function(a){var s=a.top
s.toString
return s},
gd4:function(a){return a.width},
gaF:function(a){var s=this.gd4(a)
s.toString
return s},
$ia7:1}
W.e5.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.hE.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.fl.prototype={
gdG:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
return t.h.a(s[b])},
k:function(a,b,c){var s=this.b
if(b<0||b>=s.length)return H.d(s,b)
this.a.replaceChild(c,s[b]).toString},
l:function(a,b){this.a.appendChild(b).toString
return b},
gN:function(a){var s=this.hT(this)
return new J.ab(s,s.length)}}
W.E.prototype={
gbn:function(a){var s=a.children
s.toString
return new W.fl(a,s)},
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
return new P.a7(p,s,r,q,t.q)},
i:function(a){var s=a.localName
s.toString
return s},
$iE:1}
W.l.prototype={$il:1}
W.e.prototype={
h_:function(a,b,c,d){if(c!=null)this.es(a,b,c,!1)},
es:function(a,b,c,d){return a.addEventListener(b,H.cf(c,1),!1)},
$ie:1}
W.ac.prototype={$iac:1}
W.bL.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1,
$ibL:1}
W.e7.prototype={
gj:function(a){return a.length}}
W.e9.prototype={
gj:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.hT.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.br.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.bs.prototype={
gdf:function(a){var s=a.data
s.toString
return s},
$ibs:1}
W.bN.prototype={$ibN:1}
W.bP.prototype={$ibP:1,$ik3:1}
W.bv.prototype={$ibv:1}
W.i_.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ii.prototype={
gj:function(a){return a.length}}
W.bS.prototype={$ibS:1}
W.em.prototype={
h:function(a,b){return P.be(a.get(b))},
A:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.be(s.value[1]))}},
gaa:function(a){var s=H.b([],t.s)
this.A(a,new W.ij(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iG:1}
W.ij.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.en.prototype={
h:function(a,b){return P.be(a.get(b))},
A:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.be(s.value[1]))}},
gaa:function(a){var s=H.b([],t.s)
this.A(a,new W.ik(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iG:1}
W.ik.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.at.prototype={$iat:1}
W.eo.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.ai.prototype={$iai:1}
W.fk.prototype={
k:function(a,b,c){var s=this.a,r=s.childNodes
if(b<0||b>=r.length)return H.d(r,b)
s.replaceChild(c,r[b]).toString},
gN:function(a){var s=this.a.childNodes
return new W.cv(s,s.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var s=this.a.childNodes
if(b<0||b>=s.length)return H.d(s,b)
return s[b]}}
W.t.prototype={
hM:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.mm(s,b,a)}catch(q){H.bg(q)}return a},
i:function(a){var s=a.nodeValue
return s==null?this.e9(a):s},
fH:function(a,b,c){var s=a.replaceChild(b,c)
s.toString
return s},
$it:1}
W.cS.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.au.prototype={
gj:function(a){return a.length},
$iau:1}
W.eA.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.eF.prototype={
h:function(a,b){return P.be(a.get(b))},
A:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.be(s.value[1]))}},
gaa:function(a){var s=H.b([],t.s)
this.A(a,new W.it(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iG:1}
W.it.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
W.eH.prototype={
gj:function(a){return a.length}}
W.aj.prototype={$iaj:1}
W.eJ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.aw.prototype={$iaw:1}
W.eK.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.ax.prototype={
gj:function(a){return a.length},
$iax:1}
W.eO.prototype={
h:function(a,b){return a.getItem(H.o0(b))},
k:function(a,b,c){a.setItem(b,c)},
A:function(a,b){var s,r,q
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gaa:function(a){var s=H.b([],t.s)
this.A(a,new W.iA(s))
return s},
gj:function(a){var s=a.length
s.toString
return s},
$iG:1}
W.iA.prototype={
$2:function(a,b){return this.a.push(a)},
$S:27}
W.ag.prototype={$iag:1}
W.b8.prototype={$ib8:1}
W.ak.prototype={$iak:1}
W.aa.prototype={$iaa:1}
W.eS.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.eT.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.iH.prototype={
gj:function(a){var s=a.length
s.toString
return s}}
W.al.prototype={$ial:1}
W.bz.prototype={$ibz:1}
W.eZ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.iL.prototype={
gj:function(a){return a.length}}
W.aU.prototype={}
W.iV.prototype={
i:function(a){var s=String(a)
s.toString
return s}}
W.ff.prototype={
gj:function(a){return a.length}}
W.ba.prototype={
ghc:function(a){var s=a.deltaY
if(s!=null)return s
throw H.c(P.z("deltaY is not supported"))},
ghb:function(a){var s=a.deltaX
if(s!=null)return s
throw H.c(P.z("deltaX is not supported"))},
$iba:1}
W.c8.prototype={
fI:function(a,b){var s=a.requestAnimationFrame(H.cf(b,1))
s.toString
return s},
eF:function(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=['ms','moz','webkit','o']
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[r[q]+'CancelAnimationFrame']||b[r[q]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fm.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.di.prototype={
i:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.w(r)+", "
s=a.top
s.toString
s=r+H.w(s)+") "
r=a.width
r.toString
r=s+H.w(r)+" x "
s=a.height
s.toString
return r+H.w(s)},
m:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.bf(b)
if(s===r.gbt(b)){s=a.top
s.toString
if(s===r.gbz(b)){s=a.width
s.toString
if(s===r.gaF(b)){s=a.height
s.toString
r=s===r.gaA(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gw:function(a){var s,r,q,p=a.left
p.toString
p=C.d.gw(p)
s=a.top
s.toString
s=C.d.gw(s)
r=a.width
r.toString
r=C.d.gw(r)
q=a.height
q.toString
return W.lp(p,s,r,C.d.gw(q))},
gcR:function(a){return a.height},
gaA:function(a){var s=a.height
s.toString
return s},
gd4:function(a){return a.width},
gaF:function(a){var s=a.width
s.toString
return s}}
W.fz.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.dn.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.fT.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.h_.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a[b]
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iv:1,
$im:1,
$iy:1,
$ik:1,
$ip:1}
W.k6.prototype={}
W.dj.prototype={
fW:function(){var s,r=this.d
if(r!=null&&!0){s=this.b
s.toString
J.mn(s,this.c,r,!1)}}}
W.jf.prototype={
$1:function(a){return this.a.$1(a)},
$S:2}
W.kl.prototype={}
W.J.prototype={
gN:function(a){return new W.cv(a,this.gj(a))}}
W.cv.prototype={
t:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.kK(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gD:function(a){return H.S(this).c.a(this.d)}}
W.fn.prototype={}
W.fp.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fA.prototype={}
W.fB.prototype={}
W.fE.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fH.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fP.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.fR.prototype={}
W.fS.prototype={}
W.fX.prototype={}
W.h0.prototype={}
W.h1.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h9.prototype={}
W.ha.prototype={}
W.hb.prototype={}
W.hc.prototype={}
W.hd.prototype={}
W.he.prototype={}
W.hf.prototype={}
W.hg.prototype={}
W.hh.prototype={}
W.hi.prototype={}
P.jm.prototype={
cj:function(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
r.push(a)
this.b.push(null)
return q},
bA:function(a){var s,r,q,p,o,n=this,m={}
if(a==null)return a
if(H.jE(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof P.W)return new Date(a.a)
if(t.fJ.b(a))throw H.c(P.iP("structured clone of RegExp"))
if(t.c8.b(a))return a
if(t.fK.b(a))return a
if(t.bX.b(a))return a
if(t.I.b(a))return a
if(t.bZ.b(a)||t.dE.b(a)||t.bK.b(a))return a
if(t.f.b(a)){s=n.cj(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.a=r[s]
if(p!=null)return p
p={}
m.a=p
if(s>=q)return H.d(r,s)
r[s]=p
J.dR(a,new P.jo(m,n))
return m.a}if(t.d.b(a)){s=n.cj(a)
m=n.b
if(s>=m.length)return H.d(m,s)
p=m[s]
if(p!=null)return p
return n.h8(a,s)}if(t.eH.b(a)){s=n.cj(a)
r=n.b
q=r.length
if(s>=q)return H.d(r,s)
p=m.b=r[s]
if(p!=null)return p
o={}
o.toString
m.b=o
if(s>=q)return H.d(r,s)
r[s]=o
n.hl(a,new P.jp(m,n))
return m.b}throw H.c(P.iP("structured clone of other type"))},
h8:function(a,b){var s,r,q=J.bB(a),p=q.gj(a),o=new Array(p)
o.toString
s=this.b
if(b>=s.length)return H.d(s,b)
s[b]=o
for(r=0;r<p;++r){s=this.bA(q.h(a,r))
if(r>=o.length)return H.d(o,r)
o[r]=s}return o}}
P.jo.prototype={
$2:function(a,b){this.a.a[a]=this.b.bA(b)},
$S:9}
P.jp.prototype={
$2:function(a,b){this.a.b[a]=this.b.bA(b)},
$S:26}
P.dB.prototype={$ibs:1,
gdf:function(a){return this.a}}
P.jz.prototype={
$1:function(a){this.a.push(P.lG(a))},
$S:25}
P.jJ.prototype={
$2:function(a,b){this.a[a]=P.lG(b)},
$S:9}
P.jn.prototype={
hl:function(a,b){var s,r,q,p
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
b.$2(p,a[p])}}}
P.e8.prototype={
gb6:function(){var s=this.b,r=H.S(s)
return new H.aL(new H.dh(s,new P.hP(),r.H("dh<j.E>")),new P.hQ(),r.H("aL<j.E,E>"))},
A:function(a,b){C.b.A(P.hZ(this.gb6(),!1,t.h),b)},
k:function(a,b,c){var s=this.gb6()
J.mr(s.b.$1(J.k0(s.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b).toString},
gj:function(a){return J.aY(this.gb6().a)},
h:function(a,b){var s=this.gb6()
return s.b.$1(J.k0(s.a,b))},
gN:function(a){var s=P.hZ(this.gb6(),!1,t.h)
return new J.ab(s,s.length)}}
P.hP.prototype={
$1:function(a){return t.h.b(a)},
$S:54}
P.hQ.prototype={
$1:function(a){return t.h.a(a)},
$S:24}
P.fO.prototype={
gct:function(a){return this.$ti.c.a(this.a+this.c)},
gdd:function(a){return this.$ti.c.a(this.b+this.d)},
i:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
m:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.bf(b)
if(s===r.gbt(b)){q=o.b
if(q===r.gbz(b)){p=o.$ti.c
s=p.a(s+o.c)===r.gct(b)&&p.a(q+o.d)===r.gdd(b)}else s=!1}else s=!1}else s=!1
return s},
gw:function(a){var s=this,r=s.a,q=C.c.gw(r),p=s.b,o=C.c.gw(p),n=s.$ti.c
r=C.c.gw(n.a(r+s.c))
p=C.c.gw(n.a(p+s.d))
return H.nd(H.iB(H.iB(H.iB(H.iB(0,q),o),r),p))}}
P.a7.prototype={
gbt:function(a){return this.a},
gbz:function(a){return this.b},
gaF:function(a){return this.c},
gaA:function(a){return this.d}}
P.aK.prototype={$iaK:1}
P.eg.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.aP.prototype={$iaP:1}
P.ev.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.io.prototype={
gj:function(a){return a.length}}
P.eQ.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.n.prototype={
gbn:function(a){return new P.e8(a,new W.fk(a))}}
P.aS.prototype={$iaS:1}
P.f_.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=a.getItem(b)
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fC.prototype={}
P.fD.prototype={}
P.fK.prototype={}
P.fL.prototype={}
P.fY.prototype={}
P.fZ.prototype={}
P.h4.prototype={}
P.h5.prototype={}
P.hn.prototype={
gj:function(a){return a.length}}
P.dY.prototype={
h:function(a,b){return P.be(a.get(b))},
A:function(a,b){var s,r,q=a.entries()
for(;!0;){s=q.next()
r=s.done
r.toString
if(r)return
r=s.value[0]
r.toString
b.$2(r,P.be(s.value[1]))}},
gaa:function(a){var s=H.b([],t.s)
this.A(a,new P.ho(s))
return s},
gj:function(a){var s=a.size
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Not supported"))},
$iG:1}
P.ho.prototype={
$2:function(a,b){return this.a.push(a)},
$S:5}
P.dZ.prototype={
gj:function(a){return a.length}}
P.b_.prototype={}
P.ew.prototype={
gj:function(a){return a.length}}
P.fj.prototype={}
P.bX.prototype={
hR:function(a,b,c,d,e,f,g){var s
if(t.I.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,P.oV(g))
return}if(t.fS.b(g))s=!0
else s=!1
if(s){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.bE("Incorrect number or type of arguments"))},
$ibX:1}
P.eL.prototype={
gj:function(a){var s=a.length
s.toString
return s},
h:function(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw H.c(P.L(b,a,null,null,null))
s=P.be(a.item(b))
s.toString
return s},
k:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$im:1,
$ik:1,
$ip:1}
P.fU.prototype={}
P.fV.prototype={}
K.dT.prototype={
aU:function(a,b){return!0},
i:function(a){return"all"},
$ibw:1}
K.cw.prototype={
aU:function(a,b){var s,r,q
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)if(s[q].aU(0,b))return!0
return!1},
i:function(a){var s,r,q,p,o
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p){o=s[p]
if(q.length!==0)q+=", "
q+=o.i(0)}return q},
$ibw:1}
K.aO.prototype={
aU:function(a,b){return!this.e8(0,b)},
i:function(a){return"!["+this.bF(0)+"]"}}
K.X.prototype={
S:function(a){var s,r,q,p
if(a.a.length<=0)throw H.c(P.f("May not create a Set with zero characters."))
s=new H.U(t.fX)
for(r=new H.bR(a,a.gj(a)),q=H.S(r).c;r.t();)s.k(0,q.a(r.d),!0)
p=P.hZ(s.gaa(s),!0,t.S)
C.b.e7(p)
this.a=p},
aU:function(a,b){return C.b.I(this.a,b)},
i:function(a){return P.eR(this.a,0,null)},
$ibw:1}
L.eM.prototype={
n:function(a,b){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b.b===b)return p}p=new L.d4(this.a.L(0,b),H.b([],t.B))
s.push(p)
return p},
hi:function(a){var s,r,q,p
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.aU(0,a))return p}return null},
i:function(a){return this.b},
d1:function(){var s,r,q,p,o,n=this,m=""+("("+n.b+")"),l=n.d
if(l!=null){m+=" => ["+l.b+"]"
l=n.a.c
s=n.d
if(l.I(0,s==null?null:s.b))m+=" (consume)"
s=n.d
if(s==null)s=null
else{s=s.c
s=s.gaa(s)}s=J.aD(s==null?H.b([],t.s):s)
for(;s.t();){r=s.gD(s)
m+="\n"
q=n.d
if(q!=null)q.c.h(0,r)
m+="  -- "+r+" => []"
if(l.I(0,""))m+=" (consume)"}}for(l=n.c,s=l.length,p=0;p<l.length;l.length===s||(0,H.r)(l),++p){o=l[p]
m+="\n"
m+="  -- "+(o.b.b+": "+o.bF(0))}return m.charCodeAt(0)==0?m:m}}
L.eX.prototype={
i:function(a){var s=H.lY(this.b,"\n","\\n"),r=H.lY(s,"\t","\\t")
return this.a+":"+this.c+':"'+r+'"'}}
L.eY.prototype={
i:function(a){return this.b}}
L.iJ.prototype={
L:function(a,b){var s=this.a,r=s.h(0,b)
if(r==null){r=new L.eM(this,b,H.b([],t.ab))
s.k(0,b,r)}return r},
bf:function(a){var s,r=this.b,q=r.h(0,a)
if(q==null){s=t.N
q=new L.eY(a,P.R(s,s))
r.k(0,a,q)}return q},
e0:function(a){return this.hV(a)},
hV:function(a){var s=this
return P.oj(function(){var r=a
var q=0,p=1,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a0,a1
return function $async$e0(a2,a3){if(a2===1){o=a3
q=p}while(true)switch(q){case 0:d=s.d
c=t.t
b=H.b([],c)
a0=H.b([],c)
a1=H.b([],c)
n=H.S(r).c,m=s.c,l=null,k=0,j=0,i=0
case 2:if(!!0){q=3
break}h=a1.length
if(h!==0){if(!!a1.fixed$length)H.h(P.z("removeAt"))
if(0>=h)H.h(P.eD(0,null))
g=a1.splice(0,1)[0]}else{if(!r.t()){q=3
break}g=n.a(r.d)}a0.push(g);++k
h=d==null
f=h?null:d.hi(g)
q=f==null?4:6
break
case 4:if(l==null){e=P.eR(a0,0,null)
throw H.c(P.f("Untokenizable string [state: "+H.w(h?null:d.b)+", index "+k+']: "'+e+'"'))}if(!!a0.fixed$length)H.h(P.z("removeRange"))
P.b6(0,i,a0.length)
a0.splice(0,i-0)
C.b.bl(a1,a0)
a0=H.b([],c)
b=H.b([],c)
d=s.d
q=!m.I(0,l.a)?7:8
break
case 7:q=9
return l
case 9:case 8:k=j
l=null
i=0
q=5
break
case 6:if(!f.c)b.push(g)
d=f.b
h=d.d
if(h!=null){e=P.eR(b,0,null)
h=d.d
if(h==null)l=null
else{h.c.h(0,e)
h=h.b
h=new L.eX(h,e,k)
l=h}i=a0.length
j=k}case 5:q=2
break
case 3:q=l!=null&&!m.I(0,l.a)?10:11
break
case 10:q=12
return l
case 12:case 11:return P.nr()
case 1:return P.ns(o)}}},t.bJ)},
i:function(a){var s,r=new P.Z(""),q=this.d
if(q!=null)r.a=""+(q.d1()+"\n")
for(q=this.a,q=q.ghX(q),q=q.gN(q);q.t();){s=q.gD(q)
if(s!=this.d)r.a+=H.w(s==null?null:s.d1())+"\n"}q=r.a
return q.charCodeAt(0)==0?q:q}}
L.d4.prototype={
i:function(a){return this.b.b+": "+this.bF(0)}}
O.a4.prototype={
bC:function(a,b,c){this.b=b
this.c=a},
bi:function(a,b){return this.bC(a,null,b)},
bW:function(a){var s=this.b
s=s==null?null:s.$1(a)
return s==null?!0:s},
cD:function(a,b){var s=this.c
return s==null?null:s.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var s=this.a
return new J.ab(s,s.length)},
E:function(a,b){var s=this.a
if(b<0||b>=s.length)return H.d(s,b)
return s[b]},
l:function(a,b){var s,r,q=this,p=H.S(q).H("u<a4.T>")
if(q.bW(H.b([b],p))){s=q.a
r=s.length
s.push(b)
q.cD(r,H.b([b],p))}},
bl:function(a,b){var s,r
if(this.bW(b)){s=this.a
r=s.length
C.b.bl(s,b)
this.cD(r,b)}},
$ik:1}
O.cN.prototype={
gj:function(a){return this.a.length},
gq:function(){var s=this.b
return s==null?this.b=D.I():s},
aG:function(){var s=this.b
return s==null?null:s.v(null)},
gR:function(a){var s=this.a
if(s.length>0)return C.b.gaB(s)
else return V.b4()},
dU:function(a){this.a.push(a)
this.aG()},
cr:function(){var s=this.a
if(s.length>0){s.pop()
this.aG()}}}
E.hr.prototype={}
E.bq.prototype={
cK:function(){var s,r,q
this.e=null
for(s=this.y.a,s=new J.ab(s,s.length),r=H.S(s).c;s.t();){q=r.a(s.d)
if(q.f==null)q.cK()}},
sbD:function(a,b){var s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().P(0,s.gdN())
if(b!=null)b.gq().l(0,s.gdN())
s.aj(new D.C("shape",r,b))}},
scu:function(a){var s=this,r=s.f
if(r!=a){s.f=a
if(r!=null)r.gq().P(0,s.gdP())
if(a!=null)a.gq().l(0,s.gdP())
s.cK()
s.aj(new D.C("technique",r,a))}},
saW:function(a){var s,r,q=this
if(!J.V(q.r,a)){s=q.r
q.r=a
if(s!=null)s.gq().P(0,q.gdL())
if(a!=null)a.gq().l(0,q.gdL())
r=q.r
q.aj(new D.C("mover",s,r))}},
ad:function(a,b){var s,r,q=this,p=q.r,o=p==null?null:p.aE(0,b,q)
if(!J.V(o,q.x)){s=q.x
q.x=o
q.aj(new D.C("matrix",s,o))}p=q.f
if(p!=null)p.ad(0,b)
for(p=q.y.a,p=new J.ab(p,p.length),r=H.S(p).c;p.t();)r.a(p.d).ad(0,b)},
aX:function(a){var s,r=this,q=a.dx,p=r.x,o=q.a
if(p==null)o.push(q.gR(q))
else o.push(p.K(0,q.gR(q)))
q.aG()
a.dV(r.f)
s=C.b.gaB(a.dy)
if(r.d!=null)if(s!=null)s.hL(a,r)
for(p=r.y.a,p=new J.ab(p,p.length),o=H.S(p).c;p.t();)o.a(p.d).aX(a)
a.dT()
q.cr()},
aj:function(a){var s=this.z
return s==null?null:s.v(a)},
a1:function(){return this.aj(null)},
dO:function(a){this.e=null
this.aj(a)},
hA:function(){return this.dO(null)},
dQ:function(a){return this.aj(a)},
hB:function(){return this.dQ(null)},
dM:function(a){return this.aj(a)},
hz:function(){return this.dM(null)},
dK:function(a){return this.aj(a)},
hw:function(){return this.dK(null)},
hv:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gdJ(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bK()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.a1()},
hy:function(a,b){var s,r
for(s=b.gN(b),r=this.gdJ();s.t();)s.gD(s).gq().P(0,r)
this.a1()},
i:function(a){return"Unnamed entity"}}
E.bF.prototype={
i:function(a){return this.b}}
E.bV.prototype={
i:function(a){return this.b}}
E.ft.prototype={}
E.ip.prototype={
ed:function(a,b){var s=this
s.cy.gq().l(0,new E.iq(s))
s.db.gq().l(0,new E.ir(s))
s.dx.gq().l(0,new E.is(s))},
ghJ:function(){var s,r=this,q=r.z
if(q==null){q=r.cy
s=r.db
s=r.z=q.gR(q).K(0,s.gR(s))
q=s}return q},
dV:function(a){var s=this.dy
return s.push(a==null?C.b.gaB(s):a)},
dT:function(){var s=this.dy
if(s.length>1)s.pop()}}
E.iq.prototype={
$1:function(a){var s=this.a
s.ch=s.z=null},
$S:1}
E.ir.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=s.Q=s.z=null},
$S:1}
E.is.prototype={
$1:function(a){var s=this.a
s.cx=s.ch=null},
$S:1}
E.eW.prototype={
cG:function(a){this.dX()},
cF:function(){return this.cG(null)},
ghm:function(){var s,r=this,q=Date.now(),p=C.c.X(P.kP(q-r.cy.a).a,1000)/1000
if(p<=0)return 0
s=r.db
r.db=0
r.cy=new P.W(q,!1)
return s/p},
cX:function(){var s,r,q,p,o=window.devicePixelRatio
o.toString
s=this.b
r=s.clientWidth
r.toString
q=C.d.ck(r*o)
r=s.clientHeight
r.toString
p=C.d.ck(r*o)
if(s.width!==q||s.height!==p){s.width=q
s.height=p
P.lc(C.m,this.ghN())}},
dX:function(){var s,r
if(!this.cx){this.cx=!0
s=window
s.toString
C.y.eF(s)
r=W.lM(new E.iG(this),t.H)
r.toString
C.y.fI(s,r)}},
hK:function(){var s,r,q,p,o,n=this,m=null
try{++n.db
n.cx=!1
n.cX()
if(m==null)m=n.d
if(m!=null){q=n.e;++q.e
q.r=q.x
p=Date.now()
q.x=new P.W(p,!1)
q.y=P.kP(p-q.r.a).a*0.000001
p=q.cy
C.b.sj(p.a,0)
p.aG()
p=q.db
C.b.sj(p.a,0)
p.aG()
p=q.dx
C.b.sj(p.a,0)
p.aG()
p=q.dy
C.b.sj(p,0)
p.push(null)
m.aX(q)}}catch(o){s=H.bg(o)
r=H.kD(o)
P.kI("Error: "+H.w(s))
P.kI("Stack: "+H.w(r))
throw H.c(s)}}}
E.iG.prototype={
$1:function(a){var s=this.a
if(s.cx){s.cx=!1
s.hK()}},
$S:28}
Z.fg.prototype={}
Z.bG.prototype={
c3:function(a){var s,r,q,p=this
try{r=a.a
r.enableVertexAttribArray(p.e)
r.vertexAttribPointer(p.e,p.b,5126,!1,p.d,p.c)}catch(q){s=H.bg(q)
r=P.f('Failed to bind buffer attribute "'+p.a.i(0)+'": '+H.w(s))
throw H.c(r)}},
i:function(a){var s=this
return"["+s.a.i(0)+", Size: "+s.b+", Offset: "+s.c+", Stride: "+s.d+", Attr: "+s.e+"]"}}
Z.ja.prototype={}
Z.cl.prototype={
aS:function(a){var s,r,q,p,o
for(s=this.c,r=s.length,q=a.a,p=0;p<r;++p){o=s[p]
if((o.a.a&q)!==0)return o}return null},
c3:function(a){var s,r=this.a
a.a.bindBuffer(r.a,r.b)
for(r=this.c,s=r.length-1;s>=0;--s){if(s>=r.length)return H.d(r,s)
r[s].c3(a)}},
hW:function(a){var s,r,q
for(s=this.c,r=s.length-1,q=a.a;r>=0;--r){if(r>=s.length)return H.d(s,r)
q.disableVertexAttribArray(s[r].e)}q.bindBuffer(this.a.a,null)},
aX:function(a){var s,r,q,p,o,n=this.b,m=n.length
for(s=a.a,r=0;r<m;++r){if(r>=n.length)return H.d(n,r)
q=n[r]
p=q.c
o=p.a
s.bindBuffer(o,p.b)
s.drawElements(q.a,q.b,5123,0)
s.bindBuffer(o,null)}},
i:function(a){var s,r,q,p,o,n,m=t.s,l=H.b([],m)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
l.push("Type: "+p.a+", Count: "+p.b+", ["+("Instance of '"+H.cW(p.c)+"'")+"]")}o=H.b([],m)
for(m=this.c,s=m.length,q=0;q<m.length;m.length===s||(0,H.r)(m),++q){n=m[q]
o.push("["+n.a.i(0)+", Size: "+n.b+", Offset: "+n.c+", Stride: "+n.d+", Attr: "+n.e+"]")}return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.n(l,", ")+"\nAttrs:   "+C.b.n(o,", ")}}
Z.bO.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.cW(this.c)+"'")+"]"}}
Z.b9.prototype={
gcA:function(a){var s=this.a,r=(s&$.bk().a)!==0?3:0
if((s&$.bj().a)!==0)r+=3
if((s&$.bi().a)!==0)r+=3
if((s&$.bl().a)!==0)r+=2
if((s&$.bD().a)!==0)r+=3
if((s&$.dP().a)!==0)r+=3
if((s&$.dQ().a)!==0)r+=4
if((s&$.ci().a)!==0)++r
return(s&$.bh().a)!==0?r+4:r},
h1:function(a){var s,r=$.bk(),q=this.a
if((q&r.a)!==0){if(0===a)return r
s=1}else s=0
r=$.bj()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bi()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bl()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bD()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dP()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.dQ()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.ci()
if((q&r.a)!==0){if(s===a)return r;++s}r=$.bh()
if((q&r.a)!==0)if(s===a)return r
return $.mi()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b9))return!1
return this.a===b.a},
i:function(a){var s=H.b([],t.s),r=this.a
if((r&$.bk().a)!==0)s.push("Pos")
if((r&$.bj().a)!==0)s.push("Norm")
if((r&$.bi().a)!==0)s.push("Binm")
if((r&$.bl().a)!==0)s.push("Txt2D")
if((r&$.bD().a)!==0)s.push("TxtCube")
if((r&$.dP().a)!==0)s.push("Clr3")
if((r&$.dQ().a)!==0)s.push("Clr4")
if((r&$.ci().a)!==0)s.push("Weight")
if((r&$.bh().a)!==0)s.push("Bending")
if(s.length<=0)return"None"
return C.b.n(s,"|")}}
D.ht.prototype={}
D.bK.prototype={
l:function(a,b){var s=this.a
return(s==null?this.a=H.b([],t.a):s).push(b)},
P:function(a,b){var s,r=this,q=null,p=r.a
p=p==null?q:C.b.I(p,b)
if(p===!0){p=r.a
p=p==null?q:C.b.P(p,b)
s=p===!0||!1}else s=!1
p=r.b
p=p==null?q:C.b.I(p,b)
if(p===!0){p=r.b
p=p==null?q:C.b.P(p,b)
s=p===!0||s}return s},
v:function(a){var s,r,q=this,p=q.a,o=p==null,n=o?null:p.length===0
if(n!==!1){n=q.b
n=n==null?null:n.length===0
n=n!==!1}else n=!1
if(n)return!1
s=a==null?new D.T():a
if(q.d>0){if(q.c==null)q.c=s
return!0}if(!o)C.b.A(P.hZ(p,!0,t.h2),new D.hN(s))
r=q.b
if(r!=null){q.b=H.b([],t.a)
C.b.A(r,new D.hO(s))}return!0},
he:function(){return this.v(null)},
as:function(a){var s,r=this,q=r.d
if(q>0){--q
r.d=q
if(q<=0)q=r.c!=null
else q=!1
if(q){s=r.c
r.c=null
r.v(s)}}}}
D.hN.prototype={
$1:function(a){a.$1(this.a)},
$S:21}
D.hO.prototype={
$1:function(a){a.$1(this.a)},
$S:21}
D.T.prototype={}
D.aH.prototype={}
D.aI.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.w(this.d)+" => "+H.w(this.e)}}
X.cm.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cm))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.ad.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ad))return!1
if(this.a!==b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+this.a}}
X.bu.prototype={}
X.cA.prototype={
gaT:function(){var s=this.y
return s==null?this.y=D.I():s},
a8:function(a){return this.l(0,new X.ad(a,new X.aN(!1,!1,!1)))},
cH:function(a){return null},
eh:function(a){var s,r,q
for(s=a.length,r=this.a,q=0;q<a.length;a.length===s||(0,H.r)(a),++q)if(C.b.I(r,a[q]))return!1
return!0},
ef:function(a,b){return this.cH(new D.aH())},
ej:function(a,b){return this.cH(new D.aI())},
bH:function(a){var s,r=this
if(!r.r&&a instanceof X.bu)if(C.b.I(r.a,a.c)){r.r=!0
s=r.y
if(s!=null)s.v(a)}},
bV:function(a){if(this.r&&a instanceof X.bu)if(C.b.I(this.a,a.c))this.r=!1},
an:function(a){var s,r,q=this
if(q.f!=null)return!1
q.f=a
s=a.gba(a)
r=s.b
if(r==null)r=s.b=D.I()
r.l(0,q.gbG())
r=s.a
s=r==null?s.a=D.I():r
s.l(0,q.gbU())
return!0}}
X.hW.prototype={}
X.cH.prototype={}
X.i0.prototype={
b5:function(a,b){var s,r,q=this,p=Date.now(),o=q.x,n=new V.a3(o.a+b.a,o.b+b.b)
o=q.a.gbo()
s=$.af
if(s==null)s=$.af=new V.a3(0,0)
r=q.x
q.z=new P.W(p,!1)
q.x=n
return new X.bT(a,s,r,o,n)},
cq:function(a,b){this.r=a.a
return!1},
be:function(a,b){this.r=(this.r&~a.a)>>>0
return!1},
bd:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.b5(a,b))
return!0},
hG:function(a){return!1},
ff:function(a,b,c){var s,r,q=this
if(q.f==null)return
s=Date.now()
r=q.f
if(r!=null)r.v(new X.cH(c,q.a.gbo(),b))
q.y=new P.W(s,!1)
s=$.af
q.x=s==null?$.af=new V.a3(0,0):s}}
X.aN.prototype={
m:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof X.aN))return!1
if(s.a!==b.a)return!1
if(s.b!==b.b)return!1
if(s.c!==b.c)return!1
return!0},
i:function(a){var s=[]
if(this.a)s.push("Ctrl")
if(this.b)s.push("Alt")
if(this.c)s.push("Shift")
return C.b.n(s,"+")}}
X.bT.prototype={}
X.il.prototype={
bP:function(a,b,c){var s=this,r=new P.W(Date.now(),!1),q=s.a.gbo(),p=s.r,o=s.x
if(c){s.y=r
s.r=b}s.z=r
s.x=b
return new X.bT(a,p,o,q,b)},
cq:function(a,b){var s
this.f=a.a
s=this.b
if(s==null)return!1
s.v(this.bP(a,b,!0))
return!0},
be:function(a,b){var s,r=this
r.f=(r.f&~a.a)>>>0
s=r.c
if(s==null)return!1
s.v(r.bP(a,b,!0))
return!0},
bd:function(a,b){var s=this.d
if(s==null)return!1
s.v(this.bP(a,b,!1))
return!0},
hH:function(a,b){return!1}}
X.eC.prototype={}
X.d3.prototype={}
X.iK.prototype={
b5:function(a,b){var s,r,q,p,o=this,n=new P.W(Date.now(),!1)
if(a.length>0)s=a[0]
else{r=$.af
if(r==null){r=new V.a3(0,0)
$.af=r
s=r}else s=r}r=o.a.gbo()
q=o.e
p=o.f
if(b){o.r=n
o.e=s}o.x=n
o.f=s
return new X.d3(q,p,r,s)},
hF:function(a){var s=this.b
if(s==null)return!1
s.v(this.b5(a,!0))
return!0},
hD:function(a){var s=this.c
if(s==null)return!1
s.v(this.b5(a,!0))
return!0},
hE:function(a){var s=this.d
if(s==null)return!1
s.v(this.b5(a,!1))
return!0}}
X.fc.prototype={
gba:function(a){var s=this.b
return s==null?this.b=new X.hW(P.kT(t.S)):s},
gai:function(){var s,r=this.c
if(r==null){r=$.af
if(r==null){r=$.af=new V.a3(0,0)
s=r}else s=r
r=this.c=new X.il(this,r,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return r},
gah:function(){var s=this.d
if(s==null){s=$.af
if(s==null)s=$.af=new V.a3(0,0)
s=this.d=new X.i0(this,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return s},
gaZ:function(){var s,r=this.e
if(r==null){r=$.af
if(r==null){r=$.af=new V.a3(0,0)
s=r}else s=r
r=this.e=new X.iK(this,r,s,new P.W(Date.now(),!1),new P.W(Date.now(),!1))}return r},
gbo:function(){var s=this.a
return V.l4(0,0,C.i.gde(s).c,C.i.gde(s).d)},
cN:function(a){var s,r,q,p=a.keyCode
p.toString
s=a.ctrlKey
s.toString
if(!s){s=a.metaKey
s.toString}else s=!0
r=a.altKey
r.toString
q=a.shiftKey
q.toString
return new X.ad(p,new X.aN(s,r,q))},
aN:function(a){var s
this.gba(this)
s=a.ctrlKey
s.toString
if(!s)a.metaKey.toString
a.altKey.toString
a.shiftKey.toString},
c_:function(a){var s=a.ctrlKey
if(s!==!0)a.metaKey
this.gba(this)
a.altKey
a.shiftKey},
ay:function(a){var s,r,q,p
if(a==null){s=$.af
return s==null?$.af=new V.a3(0,0):s}s=this.a.getBoundingClientRect()
s.toString
r=a.pageX
r.toString
q=a.pageY
q.toString
p=s.left
p.toString
s=s.top
s.toString
return new V.a3(r-p,q-s)},
b8:function(a){var s,r=a.movementX
r.toString
s=a.movementY
s.toString
return new V.am(r,s)},
bX:function(a){var s,r,q,p,o,n,m,l,k,j=this.a.getBoundingClientRect()
j.toString
s=H.b([],t.cG)
r=a.touches
if(r==null)r=H.b([],t.gT)
q=r.length
p=0
for(;p<r.length;r.length===q||(0,H.r)(r),++p){o=r[p]
n=o.pageX
n.toString
n=C.d.ak(n)
m=o.pageY
m.toString
C.d.ak(m)
m=j.left
m.toString
l=o.pageX
l.toString
C.d.ak(l)
l=o.pageY
l.toString
l=C.d.ak(l)
k=j.top
k.toString
s.push(new V.a3(n-m,l-k))}return s},
av:function(a){var s,r,q,p
if(a==null)return new X.cm(0,new X.aN(!1,!1,!1))
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
return new X.cm(s,new X.aN(r,q,p))},
bQ:function(a){var s,r,q,p,o,n=this.a.getBoundingClientRect()
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
f_:function(a){return this.f=!1},
f5:function(a){if(this.f&&this.bQ(a))a.preventDefault()},
bV:function(a){var s,r,q=this
if(!q.f)return
s=q.cN(a)
r=q.gba(q)
r.d.l(0,s.a)
r=r.a
r=r==null?null:r.v(new X.bu(s))
if(r===!0)a.preventDefault()},
bH:function(a){var s,r,q=this
if(!q.f)return
s=q.cN(a)
r=q.gba(q)
r.d.P(0,s.a)
r=r.b
r=r==null?null:r.v(new X.bu(s))
if(r===!0)a.preventDefault()},
fh:function(a){var s,r,q,p=this,o=p.a
o.focus()
p.f=!0
p.aN(a)
if(p.x){s=p.av(a)
r=p.b8(a)
if(p.gah().cq(s,r))a.preventDefault()
return}if(p.r){p.y=a
o.requestPointerLock()
return}s=p.av(a)
q=p.ay(a)
if(p.gai().cq(s,q))a.preventDefault()},
fl:function(a){var s,r,q,p=this
p.aN(a)
s=p.av(a)
if(p.x){r=p.b8(a)
if(p.gah().be(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.gai().be(s,q))a.preventDefault()},
f9:function(a){var s,r,q,p=this
if(!p.bQ(a)){p.aN(a)
s=p.av(a)
if(p.x){r=p.b8(a)
if(p.gah().be(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.gai().be(s,q))a.preventDefault()}},
fj:function(a){var s,r,q,p=this
p.aN(a)
s=p.av(a)
if(p.x){r=p.b8(a)
if(p.gah().bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.gai().bd(s,q))a.preventDefault()},
f7:function(a){var s,r,q,p=this
if(!p.bQ(a)){p.aN(a)
s=p.av(a)
if(p.x){r=p.b8(a)
if(p.gah().bd(s,r))a.preventDefault()
return}if(p.r)return
q=p.ay(a)
if(p.gai().bd(s,q))a.preventDefault()}},
fn:function(a){var s,r,q=this
q.aN(a)
s=new V.am(C.x.ghb(a),C.x.ghc(a)).K(0,q.Q)
if(q.x){if(q.gah().hG(s))a.preventDefault()
return}if(q.r)return
r=q.ay(a)
if(q.gai().hH(s,r))a.preventDefault()},
fp:function(a){var s,r,q=this,p=document.pointerLockElement===q.a
if(p!==q.x){q.x=p
s=q.av(q.y)
r=q.ay(q.y)
q.gah().ff(s,r,p)}},
fE:function(a){var s,r=this
r.a.focus()
r.f=!0
r.c_(a)
s=r.bX(a)
if(r.gaZ().hF(s))a.preventDefault()},
fA:function(a){var s
this.c_(a)
s=this.bX(a)
if(this.gaZ().hD(s))a.preventDefault()},
fC:function(a){var s
this.c_(a)
s=this.bX(a)
if(this.gaZ().hE(s))a.preventDefault()}}
D.bJ.prototype={
au:function(a){var s=this.r
return s==null?null:s.v(a)},
el:function(){return this.au(null)},
$iar:1}
D.cD.prototype={
gq:function(){var s=this.y
return s==null?this.y=D.I():s},
gdI:function(){var s=this.z
return s==null?this.z=D.I():s},
au:function(a){var s=this.y
return s==null?null:s.v(a)},
cU:function(a){var s=this.z
return s==null?null:s.v(a)},
fe:function(){return this.cU(null)},
fs:function(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.r)(a),++r)if(this.eA(a[r]))return!1
return!0},
eU:function(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=this.gcT(),q=this.f,p=t.a,o=0;o<b.length;b.length===s||(0,H.r)(b),++o){n=b[o]
q.push(n)
m=n.r
if(m==null)m=n.r=new D.bK()
l=m.a;(l==null?m.a=H.b([],p):l).push(r)}this.au(new D.aH())},
fw:function(a,b){var s,r,q,p
for(s=b.gN(b),r=this.gcT(),q=this.e;s.t();){p=s.gD(s)
C.b.P(q,p)
p.gq().P(0,r)}this.au(new D.aI())},
eA:function(a){var s=C.b.I(this.f,a)
return s}}
V.M.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.M))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.bo.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bo))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.hL.prototype={}
V.b3.prototype={
a3:function(a,b){var s=this,r=H.b([s.a,s.d,s.r,s.b,s.e,s.x,s.c,s.f,s.y],t.n)
return r},
br:function(a){var s,r=this,q=r.a,p=r.e,o=r.y,n=p*o,m=r.f,l=r.x,k=r.d,j=r.b,i=j*o,h=r.c,g=l*h,f=r.r,e=j*m-p*h,d=q*(n-m*l)-k*(i-g)+f*e
$.B().toString
if(Math.abs(d-0)<1e-9)return V.ih()
s=1/d
return new V.b3((n-l*m)*s,(g-i)*s,e*s,(f*m-k*o)*s,(q*o-f*h)*s,(k*h-q*m)*s,(k*l-f*p)*s,(f*j-q*l)*s,(q*p-k*j)*s)},
aD:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.d*r+s.e*q+s.f*p,s.r*r+s.x*q+s.y*p)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b3))return!1
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
i:function(a){var s,r,q,p,o=this,n=t.n,m=V.ch(H.b([o.a,o.d,o.r],n),3,0),l=V.ch(H.b([o.b,o.e,o.x],n),3,0),k=V.ch(H.b([o.c,o.f,o.y],n),3,0)
n=m.length
if(0>=n)return H.d(m,0)
s="["+m[0]+", "
r=l.length
if(0>=r)return H.d(l,0)
s=s+l[0]+", "
q=k.length
if(0>=q)return H.d(k,0)
s=s+k[0]+",\n"
if(1>=n)return H.d(m,1)
p=" "+m[1]+", "
if(1>=r)return H.d(l,1)
p=p+l[1]+", "
if(1>=q)return H.d(k,1)
p=s+(p+k[1]+",\n")
if(2>=n)return H.d(m,2)
n=" "+m[2]+", "
if(2>=r)return H.d(l,2)
n=n+l[2]+", "
if(2>=q)return H.d(k,2)
return p+(n+k[2]+"]")}}
V.as.prototype={
a3:function(a,b){var s=this,r=H.b([s.a,s.e,s.y,s.cx,s.b,s.f,s.z,s.cy,s.c,s.r,s.Q,s.db,s.d,s.x,s.ch,s.dx],t.n)
return r},
br:function(b4){var s,r,q,p=this,o=p.a,n=p.f,m=p.b,l=p.e,k=o*n-m*l,j=p.r,i=p.c,h=o*j-i*l,g=p.x,f=p.d,e=o*g-f*l,d=m*j-i*n,c=m*g-f*n,b=i*g-f*j,a=p.y,a0=p.cy,a1=p.z,a2=p.cx,a3=a*a0-a1*a2,a4=p.db,a5=p.Q,a6=a*a4-a5*a2,a7=p.dx,a8=p.ch,a9=a*a7-a8*a2,b0=a1*a4-a5*a0,b1=a1*a7-a8*a0,b2=a5*a7-a8*a4,b3=k*b2-h*b1+e*b0+d*a9-c*a6+b*a3
$.B().toString
if(Math.abs(b3-0)<1e-9)return V.b4()
s=1/b3
r=-l
q=-a2
return V.aM((n*b2-j*b1+g*b0)*s,(-m*b2+i*b1-f*b0)*s,(a0*b-a4*c+a7*d)*s,(-a1*b+a5*c-a8*d)*s,(r*b2+j*a9-g*a6)*s,(o*b2-i*a9+f*a6)*s,(q*b+a4*e-a7*h)*s,(a*b-a5*e+a8*h)*s,(l*b1-n*a9+g*a3)*s,(-o*b1+m*a9-f*a3)*s,(a2*c-a0*e+a7*k)*s,(-a*c+a1*e-a8*k)*s,(r*b0+n*a6-j*a3)*s,(o*b0-m*a6+i*a3)*s,(q*d+a0*h-a4*k)*s,(a*d-a1*h+a5*k)*s)},
K:function(b4,b5){var s=this,r=s.a,q=b5.a,p=s.b,o=b5.e,n=s.c,m=b5.y,l=s.d,k=b5.cx,j=b5.b,i=b5.f,h=b5.z,g=b5.cy,f=b5.c,e=b5.r,d=b5.Q,c=b5.db,b=b5.d,a=b5.x,a0=b5.ch,a1=b5.dx,a2=s.e,a3=s.f,a4=s.r,a5=s.x,a6=s.y,a7=s.z,a8=s.Q,a9=s.ch,b0=s.cx,b1=s.cy,b2=s.db,b3=s.dx
return V.aM(r*q+p*o+n*m+l*k,r*j+p*i+n*h+l*g,r*f+p*e+n*d+l*c,r*b+p*a+n*a0+l*a1,a2*q+a3*o+a4*m+a5*k,a2*j+a3*i+a4*h+a5*g,a2*f+a3*e+a4*d+a5*c,a2*b+a3*a+a4*a0+a5*a1,a6*q+a7*o+a8*m+a9*k,a6*j+a7*i+a8*h+a9*g,a6*f+a7*e+a8*d+a9*c,a6*b+a7*a+a8*a0+a9*a1,b0*q+b1*o+b2*m+b3*k,b0*j+b1*i+b2*h+b3*g,b0*f+b1*e+b2*d+b3*c,b0*b+b1*a+b2*a0+b3*a1)},
aD:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.D(s.a*r+s.b*q+s.c*p,s.e*r+s.f*q+s.r*p,s.y*r+s.z*q+s.Q*p)},
bg:function(a){var s=this,r=a.a,q=a.b,p=a.c
return new V.a9(s.a*r+s.b*q+s.c*p+s.d,s.e*r+s.f*q+s.r*p+s.x,s.y*r+s.z*q+s.Q*p+s.ch)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.as))return!1
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
i:function(a){return this.u()},
B:function(a){var s,r,q,p,o,n=this,m=t.n,l=V.ch(H.b([n.a,n.e,n.y,n.cx],m),3,0),k=V.ch(H.b([n.b,n.f,n.z,n.cy],m),3,0),j=V.ch(H.b([n.c,n.r,n.Q,n.db],m),3,0),i=V.ch(H.b([n.d,n.x,n.ch,n.dx],m),3,0)
m=l.length
if(0>=m)return H.d(l,0)
s="["+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
s=s+k[0]+", "
q=j.length
if(0>=q)return H.d(j,0)
s=s+j[0]+", "
p=i.length
if(0>=p)return H.d(i,0)
s=s+i[0]+",\n"
o=a+" "
if(1>=m)return H.d(l,1)
o=o+l[1]+", "
if(1>=r)return H.d(k,1)
o=o+k[1]+", "
if(1>=q)return H.d(j,1)
o=o+j[1]+", "
if(1>=p)return H.d(i,1)
o=s+(o+i[1]+",\n")
s=a+" "
if(2>=m)return H.d(l,2)
s=s+l[2]+", "
if(2>=r)return H.d(k,2)
s=s+k[2]+", "
if(2>=q)return H.d(j,2)
s=s+j[2]+", "
if(2>=p)return H.d(i,2)
s=o+(s+i[2]+",\n")
o=a+" "
if(3>=m)return H.d(l,3)
o=o+l[3]+", "
if(3>=r)return H.d(k,3)
o=o+k[3]+", "
if(3>=q)return H.d(j,3)
o=o+j[3]+", "
if(3>=p)return H.d(i,3)
return s+(o+i[3]+"]")},
u:function(){return this.B("")}}
V.a3.prototype={
at:function(a){return new V.am(a.a-this.a,a.b-this.b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"},
u:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.a9.prototype={
b2:function(a,b){return new V.a9(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a9))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"},
u:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.cU.prototype={
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.cU))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"},
u:function(){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.eE.prototype={
gaV:function(){var s=this.c,r=this.d
return s>r?r:s},
m:function(a,b){var s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.eE))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-r.a)<1e-9))return!1
if(!(Math.abs(b.b-r.b)<1e-9))return!1
if(!(Math.abs(b.c-r.c)<1e-9))return!1
if(!(Math.abs(b.d-r.d)<1e-9))return!1
return!0},
i:function(a){var s=this
return"["+V.x(s.a,3,0)+", "+V.x(s.b,3,0)+", "+V.x(s.c,3,0)+", "+V.x(s.d,3,0)+"]"}}
V.am.prototype={
cm:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){return this.a*a.a+this.b*a.b},
K:function(a,b){return new V.am(this.a*b,this.b*b)},
am:function(a,b){var s
$.B().toString
if(Math.abs(b-0)<1e-9){s=$.j0
return s==null?$.j0=new V.am(0,0):s}return new V.am(this.a/b,this.b/b)},
m:function(a,b){var s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
s=b.a
$.B().toString
if(!(Math.abs(s-this.a)<1e-9))return!1
if(!(Math.abs(b.b-this.b)<1e-9))return!1
return!0},
i:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.D.prototype={
cm:function(a){return Math.sqrt(this.a2(this))},
a2:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cn:function(a,b){return new V.D(V.kF(this.a,a.a,b),V.kF(this.b,a.b,b),V.kF(this.c,a.c,b))},
M:function(){var s=this,r=Math.sqrt(s.a2(s))
if(r===1)return s
return s.am(0,r)},
b9:function(a){var s=this.b,r=a.c,q=this.c,p=a.b,o=a.a,n=this.a
return new V.D(s*r-q*p,q*o-n*r,n*p-s*o)},
W:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
b_:function(a){return new V.D(-this.a,-this.b,-this.c)},
am:function(a,b){$.B().toString
if(Math.abs(b-0)<1e-9)return V.fd()
return new V.D(this.a/b,this.b/b,this.c/b)},
dH:function(){$.B().toString
if(!(Math.abs(0-this.a)<1e-9))return!1
if(!(Math.abs(0-this.b)<1e-9))return!1
if(!(Math.abs(0-this.c)<1e-9))return!1
return!0},
m:function(a,b){var s,r=this
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
u:function(){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
U.hw.prototype={
bI:function(a){var s=this.a,r=this.c,q=this.b
if(s)return V.jZ(a,r,q)
else{if(a<r)s=r
else s=a>q?q:a
return s}},
gq:function(){var s=this.y
return s==null?this.y=D.I():s},
J:function(a){var s=this.y
return s==null?null:s.v(a)},
scw:function(a,b){var s=this.a
if(s!==b){this.a=b
this.J(new D.C("wrap",s,b))}},
sco:function(a){var s,r=this,q=r.b
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.b=a
if(a<r.c)r.d=r.c=a
else{s=r.d
if(a<s)r.d=r.bI(s)}r.J(new D.C("maximumLocation",q,r.b))}},
scp:function(a){var s,r=this,q=r.c
$.B().toString
if(!(Math.abs(q-a)<1e-9)){r.c=a
if(r.b<a)r.d=r.b=a
else{s=r.d
if(a>s)r.d=r.bI(s)}r.J(new D.C("minimumLocation",q,r.c))}},
sZ:function(a,b){var s,r=this
b=r.bI(b)
s=r.d
$.B().toString
if(!(Math.abs(s-b)<1e-9)){r.d=b
r.J(new D.C("location",s,b))}},
sbc:function(a){var s,r,q=this,p=q.e
$.B().toString
if(!(Math.abs(p-a)<1e-9)){q.e=a
s=q.f
r=-a
if(s<r)s=r
else if(s>a)s=a
q.f=s
q.J(new D.C("maximumVelocity",p,a))}},
sV:function(a){var s=this,r=s.e,q=-r
if(a<q)a=q
else if(a>r)a=r
r=s.f
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.f=a
s.J(new D.C("velocity",r,a))}},
saz:function(a){var s
if(a<0)a=0
else if(a>1)a=1
s=this.x
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.x=a
this.J(new D.C("dampening",s,a))}},
ad:function(a,b){var s,r,q,p=this,o=p.f
$.B().toString
if(!(Math.abs(o-0)<1e-9)||!(Math.abs(0)<1e-9)){s=o+0*b
o=p.e
r=-o
if(s<r)s=r
else if(s>o)s=o
p.sZ(0,p.d+s*b)
o=p.x
$.B().toString
if(!(Math.abs(o-0)<1e-9)){q=s*Math.pow(1-o,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}p.sV(s)}}}
U.bI.prototype={
gq:function(){var s=this.b
return s==null?this.b=D.I():s},
sR:function(a,b){var s,r,q=this
if(!q.a.m(0,b)){s=q.a
q.a=b
r=q.b
if(r!=null)r.v(new D.C("matrix",s,b))}},
aE:function(a,b,c){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bI))return!1
return this.a.m(0,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.bM.prototype={
gq:function(){var s=this.e
return s==null?this.e=D.I():s},
J:function(a){var s=this.e
return s==null?null:s.v(a)},
a6:function(){return this.J(null)},
eS:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaH(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
if(o!=null){n=o.gq()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}}this.J(new D.aH())},
fu:function(a,b){var s,r
for(s=b.gN(b),r=this.gaH();s.t();)s.gD(s).gq().P(0,r)
this.J(new D.aI())},
aE:function(a,b,c){var s,r,q,p=this,o=p.r,n=b.e
if(o<n){p.r=n
o=p.e
if(o!=null)++o.d
for(o=p.a,o=new J.ab(o,o.length),n=H.S(o).c,s=null;o.t();){r=n.a(o.d)
if(r!=null){q=r.aE(0,b,c)
s=s==null?q:q.K(0,s)}}p.f=s==null?V.b4():s
o=p.e
if(o!=null)o.as(0)}return p.f},
m:function(a,b){var s,r,q,p,o
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bM))return!1
s=this.a
r=s.length
for(q=b.a,p=0;p<r;++p){if(p>=s.length)return H.d(s,p)
o=s[p]
if(p>=q.length)return H.d(q,p)
if(!J.V(o,q[p]))return!1}return!0},
i:function(a){return"Group"},
$ia1:1}
U.a1.prototype={}
U.cY.prototype={
gq:function(){var s=this.y
return s==null?this.y=D.I():s},
J:function(a){var s=this.y
return s==null?null:s.v(a)},
se3:function(a){var s
a=V.jZ(a,0,6.283185307179586)
s=this.a
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.a=a
this.J(new D.C("yaw",s,a))}},
sdS:function(a,b){var s
b=V.jZ(b,0,6.283185307179586)
s=this.b
$.B().toString
if(!(Math.abs(s-b)<1e-9)){this.b=b
this.J(new D.C("pitch",s,b))}},
sdY:function(a){var s
a=V.jZ(a,0,6.283185307179586)
s=this.c
$.B().toString
if(!(Math.abs(s-a)<1e-9)){this.c=a
this.J(new D.C("roll",s,a))}},
aE:function(a,b,c){var s,r,q=this,p=q.r,o=b.e
if(p<o){q.r=o
p=q.y
if(p!=null)++p.d
q.se3(q.a+q.d*b.y)
q.sdS(0,q.b+q.e*b.y)
q.sdY(q.c+q.f*b.y)
p=q.c
s=Math.cos(p)
r=Math.sin(p)
q.x=V.aM(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).K(0,V.kX(q.b)).K(0,V.ke(q.a))
p=q.y
if(p!=null)p.as(0)}return q.x},
m:function(a,b){var s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof U.cY))return!1
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
U.df.prototype={
gq:function(){var s=this.fx
return s==null?this.fx=D.I():s},
J:function(a){var s=this.fx
return s==null?null:s.v(a)},
a6:function(){return this.J(null)},
an:function(a){var s,r,q=this
if(q.a!=null)return!1
q.a=a
s=a.gai()
r=s.b
s=r==null?s.b=D.I():r
s.l(0,q.geL())
s=a.gai()
r=s.d
s=r==null?s.d=D.I():r
s.l(0,q.geN())
s=a.gai()
r=s.c
s=r==null?s.c=D.I():r
s.l(0,q.geP())
s=a.gah()
r=s.f
s=r==null?s.f=D.I():r
s.l(0,q.geH())
s=a.gah()
r=s.d
s=r==null?s.d=D.I():r
s.l(0,q.geJ())
s=a.gaZ()
r=s.b
s=r==null?s.b=D.I():r
s.l(0,q.gfU())
s=a.gaZ()
r=s.d
s=r==null?s.d=D.I():r
s.l(0,q.gfS())
s=a.gaZ()
r=s.c
s=r==null?s.c=D.I():r
s.l(0,q.gfQ())
return!0},
aM:function(a){return new V.am(a.a,a.b)},
eM:function(a){var s=this
t.Z.a(a)
if(!s.d.m(0,a.x.b))return
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
eO:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.cx)return
if(n.ch){s=a.y.at(a.d)
if(s.a2(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.at(r).K(0,2).am(0,s.gaV()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aM(a.z.at(r).K(0,2).am(0,s.gaV()))
n.a6()},
eQ:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a2(s)>0.0001){r.c.sV(-r.dx.a*10*2.5)
r.b.sV(-r.dx.b*10*2.5)
r.a6()}},
eI:function(a){var s=this
if(t.bv.a(a).x){s.ch=!0
s.cy=s.c.d
s.db=s.b.d}},
eK:function(a){var s,r,q,p,o,n=this
t.Z.a(a)
if(!n.d.m(0,a.x.b))return
s=a.c
r=a.d
q=n.aM(a.y.at(r).K(0,2).am(0,s.gaV()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aM(a.z.at(r).K(0,2).am(0,s.gaV()))
n.a6()},
fV:function(a){var s=this
s.ch=s.cx=!0
s.cy=s.c.d
s.db=s.b.d},
fT:function(a){var s,r,q,p,o,n=this
t.dr.a(a)
if(!n.cx)return
if(n.ch){s=a.y.at(a.d)
if(s.a2(s)<4)return
n.ch=!1}s=a.c
r=a.d
q=n.aM(a.y.at(r).K(0,2).am(0,s.gaV()))
p=n.c
p.sZ(0,-q.a*2.5+n.cy)
o=n.b
o.sZ(0,-q.b*2.5+n.db)
o.sV(0)
p.sV(0)
n.dx=n.aM(a.z.at(r).K(0,2).am(0,s.gaV()))
n.a6()},
fR:function(a){var s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
s=r.dx
if(s.a2(s)>0.0001){r.c.sV(-r.dx.a*10*2.5)
r.b.sV(-r.dx.b*10*2.5)
r.a6()}},
aE:function(a,b,c){var s,r=this,q=r.dy,p=b.e
if(q<p){r.dy=p
s=b.y
q=r.c
q.ad(0,s)
p=r.b
p.ad(0,s)
r.fr=V.ke(p.d).K(0,V.kX(q.d))}return r.fr},
$ia1:1}
U.dg.prototype={
gq:function(){var s=this.dx
return s==null?this.dx=D.I():s},
J:function(a){var s=this.dx
return s==null?null:s.v(a)},
a6:function(){return this.J(null)},
gZ:function(a){return new V.a9(this.r.d,this.x.d,this.y.d)},
fd:function(a){return this.J(a)},
c1:function(a,b,c,d,e){if(a.r)e+=d
else if(b.r)e-=d
else e=e>0?e-Math.min(e,c):e+Math.min(-e,c)
return e},
aE:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i=j.cy,h=b.e
if(i<h){j.cy=h
j.gZ(j)
s=b.y
if(s>0.1)s=0.1
r=60*s
q=15*s
i=j.r
h=j.x
p=j.y
o=j.Q.aD(new V.D(i.f,h.f,p.f))
n=j.c1(j.a,j.b,r,q,o.a)
m=j.c1(j.c,j.d,r,q,o.b)
l=j.c1(j.e,j.f,r,q,o.c)
k=j.z.aD(new V.D(n,m,l))
i.sV(k.a)
h.sV(k.b)
p.sV(k.c)
i.ad(0,s)
h.ad(0,s)
p.ad(0,s)
j.db=V.kY(i.d,-h.d,p.d)}return j.db},
$ia1:1}
M.e6.prototype={
aJ:function(a){var s=this.y
return s==null?null:s.v(a)},
em:function(){return this.aJ(null)},
f1:function(a,b){var s,r,q,p,o,n,m
for(s=b.length,r=this.gaI(),q=t.a,p=0;p<b.length;b.length===s||(0,H.r)(b),++p){o=b[p]
n=o.z
if(n==null)n=o.z=new D.bK()
m=n.a;(m==null?n.a=H.b([],q):m).push(r)}this.aJ(new D.aH())},
f3:function(a,b){var s,r
for(s=b.gN(b),r=this.gaI();s.t();)s.gD(s).gq().P(0,r)
this.aJ(new D.aI())},
gq:function(){var s=this.y
return s==null?this.y=D.I():s},
aX:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
a.dV(d.d)
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
n=C.d.ak(o.a*q)
m=C.d.ak(o.b*p)
l=C.d.ak(o.c*q)
a.c=l
o=C.d.ak(o.d*p)
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
g=V.aM(-h/(r/o),0,0,0,0,h,0,0,0,0,j/i,-j*k/i,0,0,1,0)
a.cy.dU(g)
f=$.m3()
e=s.b
if(e!=null)f=e.aE(0,a,s).K(0,f)
a.db.dU(f)}for(s=d.e.a,r=new J.ab(s,s.length),o=H.S(r).c;r.t();)o.a(r.d).ad(0,a)
for(s=new J.ab(s,s.length),r=H.S(s).c;s.t();)r.a(s.d).aX(a)
if(d.b!=null){a.cy.cr()
a.db.cr()}a.dT()}}
A.dX.prototype={}
A.hm.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.b===b)return p}return null},
hf:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.enableVertexAttribArray(p.c)}},
hd:function(){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
p.a.disableVertexAttribArray(p.c)}}}
A.ao.prototype={
gal:function(a){var s=this.a?1:0,r=this.b?2:0
return s|r|0},
i:function(a){var s=this.a?1:0,r=this.b?2:0
return""+(s|r|0)},
m:function(a,b){if(b==null)return!1
if(!(b instanceof A.ao))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.ek.prototype={
ec:function(d7,d8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=null,d1=u.C,d2="Required uniform value, ",d3=", was not defined or used in shader.",d4=c9.x,d5=new P.Z(""),d6=d4.fr
if(d6){s=""+"uniform mat4 objMat;\n"
d5.a=s}else s=""
r=d4.fx
s=(r?d5.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
d5.a=s
s+="\n"
d5.a=s
s=d5.a=s+"attribute vec3 posAttr;\n"
q=d4.k4
if(q){s+="attribute vec3 normAttr;\n"
d5.a=s}p=d4.r1
d5.a=(p?d5.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.oy(d4,d5)
A.oA(d4,d5)
A.oz(d4,d5)
A.oC(d4,d5)
A.oD(d4,d5)
A.oB(d4,d5)
A.oE(d4,d5)
s=d5.a+="vec4 getPos()\n"
s+="{\n"
d5.a=s
o=d4.ry
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
d5.a=s
s+="}\n"
d5.a=s
s+="\n"
d5.a=s
s+="void main()\n"
d5.a=s
s=d5.a=s+"{\n"
if(o){s+="   setupBendData();\n"
d5.a=s}if(q){s+="   normalVec = getNorm();\n"
d5.a=s}if(p){s+="   binormalVec = getBinm();\n"
d5.a=s}if(d4.r2){s+="   txt2D = getTxt2D();\n"
d5.a=s}if(d4.rx){s+="   txtCube = getTxtCube();\n"
d5.a=s}if(d4.k2){s+="   objPos = getObjPos();\n"
d5.a=s}s=(d4.k3?d5.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
d5.a=s
s+="}\n"
d5.a=s
s=d5.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.ox(d4)
c9.c=n
c9.d=m
l=c9.cO(n,35633)
k=c9.cO(c9.d,35632)
s=c9.a
q=s.createProgram()
q.toString
c9.e=q
s.attachShader(c9.gaw(),l)
s.attachShader(c9.gaw(),k)
s.linkProgram(c9.gaw())
if(!H.lF(s.getProgramParameter(c9.gaw(),35714))){j=s.getProgramInfoLog(c9.gaw())
if(j==null)j="undefined log error"
s.deleteProgram(c9.e)
H.h(P.f("Failed to link shader: "+j))}c9.fM()
c9.fO()
c9.y=c9.gao(c9).h(0,"posAttr")
c9.Q=c9.gao(c9).h(0,"normAttr")
c9.z=c9.gao(c9).h(0,"binmAttr")
c9.ch=c9.gao(c9).h(0,"txt2DAttr")
c9.cx=c9.gao(c9).h(0,"txtCubeAttr")
c9.cy=c9.gao(c9).h(0,"bendAttr")
if(d4.dy)c9.fy=t.j.a(c9.gG().F(0,"invViewMat"))
if(d6)c9.db=t.j.a(c9.gG().F(0,"objMat"))
if(r)c9.dx=t.j.a(c9.gG().F(0,"viewObjMat"))
d6=t.j
c9.fr=d6.a(c9.gG().F(0,"projViewObjMat"))
if(d4.go)c9.dy=d6.a(c9.gG().F(0,"viewMat"))
if(d4.x1)c9.go=t.m.a(c9.gG().F(0,"txt2DMat"))
if(d4.x2)c9.id=d6.a(c9.gG().F(0,"txtCubeMat"))
if(d4.y1)c9.k1=d6.a(c9.gG().F(0,"colorMat"))
c9.k3=H.b([],t.p)
s=d4.aQ
if(s>0){c9.k2=t.w.a(c9.gG().F(0,"bendMatCount"))
for(i=0;i<s;++i){r=c9.k3
h=c9.r
if(h==null)H.h(P.f(d1))
q="bendValues["+i+"].mat"
g=h.h(0,q)
if(g==null)H.h(P.f(d2+q+d3))
r.push(d6.a(g))}}d6=d4.a
if(d6.a)c9.k4=t.g.a(c9.gG().F(0,"emissionClr"))
if(d6.b)c9.r1=t.G.a(c9.gG().F(0,"emissionTxt"))
d6=d4.b
if(d6.a)c9.rx=t.g.a(c9.gG().F(0,"ambientClr"))
if(d6.b)c9.ry=t.G.a(c9.gG().F(0,"ambientTxt"))
d6=d4.c
if(d6.a)c9.x2=t.g.a(c9.gG().F(0,"diffuseClr"))
if(d6.b)c9.y1=t.G.a(c9.gG().F(0,"diffuseTxt"))
d6=d4.d
if(d6.a)c9.aQ=t.g.a(c9.gG().F(0,"invDiffuseClr"))
if(d6.b)c9.aR=t.G.a(c9.gG().F(0,"invDiffuseTxt"))
d6=d4.e
s=d6.a
if(s||d6.b||!1){c9.dk=t.u.a(c9.gG().F(0,"shininess"))
if(s)c9.di=t.g.a(c9.gG().F(0,"specularClr"))
if(d6.b)c9.dj=t.G.a(c9.gG().F(0,"specularTxt"))}if(d4.f.b)c9.dl=t.G.a(c9.gG().F(0,"bumpTxt"))
if(d4.db){c9.dm=t.r.a(c9.gG().F(0,"envSampler"))
d6=d4.r
if(d6.a)c9.dn=t.g.a(c9.gG().F(0,"reflectClr"))
if(d6.b)c9.dq=t.G.a(c9.gG().F(0,"reflectTxt"))
d6=d4.x
s=d6.a
if(s||d6.b||!1){c9.dr=t.u.a(c9.gG().F(0,"refraction"))
if(s)c9.ds=t.g.a(c9.gG().F(0,"refractClr"))
if(d6.b)c9.dt=t.G.a(c9.gG().F(0,"refractTxt"))}}d6=d4.y
if(d6.a)c9.du=t.u.a(c9.gG().F(0,"alpha"))
if(d6.b)c9.dv=t.G.a(c9.gG().F(0,"alphaTxt"))
if(d4.k1){d6=d4.z
s=d6.length
if(s!==0){r=t.S
c9.ca=P.R(r,t.W)
c9.cb=P.R(r,t.Q)
for(r=t.w,q=t.g,p=t.u,o=t.Y,f=0;f<d6.length;d6.length===s||(0,H.r)(d6),++f){e=d6[f]
d=e.a
c="barLight"+d
b=H.b([],o)
for(a=e.b,a0=(d&4)!==0,i=0;i<a;++i){h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].startPnt"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
q.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].endPnt"
a2=h.h(0,a1)
if(a2==null)H.h(P.f(d2+a1+d3))
q.a(a2)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].color"
a3=h.h(0,a1)
if(a3==null)H.h(P.f(d2+a1+d3))
q.a(a3)
if(a0){h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].att0"
a4=h.h(0,a1)
if(a4==null)H.h(P.f(d2+a1+d3))
p.a(a4)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].att1"
a5=h.h(0,a1)
if(a5==null)H.h(P.f(d2+a1+d3))
p.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].att2"
a6=h.h(0,a1)
if(a6==null)H.h(P.f(d2+a1+d3))
p.a(a6)
a7=a6
a8=a5
a9=a4}else{a7=d0
a8=a7
a9=a8}b.push(new A.d8(g,a2,a3,a9,a8,a7))}c9.cb.k(0,d,b)
a=c9.ca
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.k(0,d,r.a(g))}}d6=d4.Q
s=d6.length
if(s!==0){r=t.S
c9.cc=P.R(r,t.W)
c9.cd=P.R(r,t.b)
for(r=t.w,q=t.g,p=t.G,o=t.V,f=0;f<d6.length;d6.length===s||(0,H.r)(d6),++f){e=d6[f]
d=e.a
c="dirLight"+d
b=H.b([],o)
for(a=e.b,a0=(d&1)!==0,i=0;i<a;++i){if(a0){h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].objUp"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
q.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].objRight"
a2=h.h(0,a1)
if(a2==null)H.h(P.f(d2+a1+d3))
q.a(a2)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].objDir"
a3=h.h(0,a1)
if(a3==null)H.h(P.f(d2+a1+d3))
q.a(a3)
b0=a3
b1=a2
b2=g}else{b0=d0
b1=b0
b2=b1}h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].viewDir"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
q.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"s["+i+"].color"
a2=h.h(0,a1)
if(a2==null)H.h(P.f(d2+a1+d3))
q.a(a2)
if(a0){h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"sTexture2D"+i
a3=h.h(0,a1)
if(a3==null)H.h(P.f(d2+a1+d3))
p.a(a3)
b3=a3}else b3=d0
b.push(new A.d9(b2,b1,b0,g,a2,b3))}c9.cd.k(0,d,b)
a=c9.cc
h=c9.r
if(h==null)H.h(P.f(d1))
a0=c+"Count"
g=h.h(0,a0)
if(g==null)H.h(P.f(d2+a0+d3))
a.k(0,d,r.a(g))}}d6=d4.ch
s=d6.length
if(s!==0){r=t.S
c9.ce=P.R(r,t.W)
c9.cf=P.R(r,t.c)
for(r=t.w,q=t.g,p=t.m,o=t.r,a=t.F,a0=t.u,a1=t.E,f=0;f<d6.length;d6.length===s||(0,H.r)(d6),++f){e=d6[f]
d=e.a
c="pointLight"+d
b=H.b([],a1)
for(b4=e.b,b5=(d&4)!==0,b6=(d&2)!==0,b7=(d&1)!==0,b8=(d&3)!==0,i=0;i<b4;++i){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].point"
g=h.h(0,b9)
if(g==null)H.h(P.f(d2+b9+d3))
q.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].viewPnt"
a2=h.h(0,b9)
if(a2==null)H.h(P.f(d2+b9+d3))
q.a(a2)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].color"
a3=h.h(0,b9)
if(a3==null)H.h(P.f(d2+b9+d3))
q.a(a3)
if(b8){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].invViewRotMat"
a4=h.h(0,b9)
if(a4==null)H.h(P.f(d2+b9+d3))
p.a(a4)
c0=a4}else c0=d0
if(b7){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"sTextureCube"+i
a4=h.h(0,b9)
if(a4==null)H.h(P.f(d2+b9+d3))
o.a(a4)
b3=a4}else b3=d0
if(b6){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"sShadowCube"+i
a4=h.h(0,b9)
if(a4==null)H.h(P.f(d2+b9+d3))
o.a(a4)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].shadowAdj"
a5=h.h(0,b9)
if(a5==null)H.h(P.f(d2+b9+d3))
a.a(a5)
c1=a4
c2=a5}else{c1=d0
c2=c1}if(b5){h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].att0"
a4=h.h(0,b9)
if(a4==null)H.h(P.f(d2+b9+d3))
a0.a(a4)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].att1"
a5=h.h(0,b9)
if(a5==null)H.h(P.f(d2+b9+d3))
a0.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
b9=c+"s["+i+"].att2"
a6=h.h(0,b9)
if(a6==null)H.h(P.f(d2+b9+d3))
a0.a(a6)
a7=a6
a8=a5
a9=a4}else{a7=d0
a8=a7
a9=a8}b.push(new A.db(g,a2,c0,a3,b3,c1,c2,a9,a8,a7))}c9.cf.k(0,d,b)
b4=c9.ce
h=c9.r
if(h==null)H.h(P.f(d1))
b5=c+"Count"
g=h.h(0,b5)
if(g==null)H.h(P.f(d2+b5+d3))
b4.k(0,d,r.a(g))}}d4=d4.cx
d6=d4.length
if(d6!==0){s=t.S
c9.cg=P.R(s,t.W)
c9.ci=P.R(s,t.R)
for(s=t.w,r=t.g,q=t.u,p=t.F,o=t.G,a=t.M,f=0;f<d4.length;d4.length===d6||(0,H.r)(d4),++f){e=d4[f]
d=e.a
c="spotLight"+d
b=H.b([],a)
for(a0=e.b,a1=(d&2)!==0,b4=(d&1)!==0,b5=(d&4)!==0,b6=(d&8)!==0,b7=(d&3)!==0,i=0;i<a0;++i){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].objPnt"
g=h.h(0,b8)
if(g==null)H.h(P.f(d2+b8+d3))
r.a(g)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].objDir"
a2=h.h(0,b8)
if(a2==null)H.h(P.f(d2+b8+d3))
r.a(a2)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].viewPnt"
a3=h.h(0,b8)
if(a3==null)H.h(P.f(d2+b8+d3))
r.a(a3)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].color"
a4=h.h(0,b8)
if(a4==null)H.h(P.f(d2+b8+d3))
r.a(a4)
if(b7){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].objUp"
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
r.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].objRight"
a6=h.h(0,b8)
if(a6==null)H.h(P.f(d2+b8+d3))
r.a(a6)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].tuScalar"
c3=h.h(0,b8)
if(c3==null)H.h(P.f(d2+b8+d3))
q.a(c3)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].tvScalar"
c4=h.h(0,b8)
if(c4==null)H.h(P.f(d2+b8+d3))
q.a(c4)
c5=c4
c6=c3
b1=a6
b2=a5}else{c5=d0
c6=c5
b1=c6
b2=b1}if(a1){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].shadowAdj"
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
p.a(a5)
c2=a5}else c2=d0
if(b6){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].cutoff"
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
q.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].coneAngle"
a6=h.h(0,b8)
if(a6==null)H.h(P.f(d2+b8+d3))
q.a(a6)
c7=a6
c8=a5}else{c7=d0
c8=c7}if(b5){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].att0"
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
q.a(a5)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].att1"
a6=h.h(0,b8)
if(a6==null)H.h(P.f(d2+b8+d3))
q.a(a6)
h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"s["+i+"].att2"
c3=h.h(0,b8)
if(c3==null)H.h(P.f(d2+b8+d3))
q.a(c3)
a7=c3
a8=a6
a9=a5}else{a7=d0
a8=a7
a9=a8}if(b4){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"sTexture2D"+i
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
o.a(a5)
b3=a5}else b3=d0
if(a1){h=c9.r
if(h==null)H.h(P.f(d1))
b8=c+"sShadow2D"+i
a5=h.h(0,b8)
if(a5==null)H.h(P.f(d2+b8+d3))
o.a(a5)
c1=a5}else c1=d0
b.push(new A.de(g,a2,a3,a4,b2,b1,c6,c5,c2,c8,c7,a9,a8,a7,b3,c1))}c9.ci.k(0,d,b)
a0=c9.cg
h=c9.r
if(h==null)H.h(P.f(d1))
a1=c+"Count"
g=h.h(0,a1)
if(g==null)H.h(P.f(d2+a1+d3))
a0.k(0,d,s.a(g))}}}},
ag:function(a,b){if(b!=null&&b.d)if(a!=null)a.e5(b)},
fL:function(a,b){}}
A.aZ.prototype={
i:function(a){return"barLight"+this.a}}
A.b1.prototype={
i:function(a){return"dirLight"+this.a}}
A.b5.prototype={
i:function(a){return"pointLight"+this.a}}
A.b7.prototype={
i:function(a){return"spotLight"+this.a}}
A.i4.prototype={
i:function(a){return this.aR}}
A.d8.prototype={}
A.d9.prototype={}
A.db.prototype={}
A.de.prototype={}
A.d_.prototype={
gao:function(a){var s=this.f
if(s==null)throw H.c(P.f("Must initialize the shader prior to getting the attributes."))
return s},
gG:function(){var s=this.r
if(s==null)throw H.c(P.f(u.C))
return s},
gaw:function(){var s=this.e
if(s==null)throw H.c(P.f(u.F))
return s},
cO:function(a,b){var s,r=this.a,q=r.createShader(b)
q.toString
r.shaderSource(q,a)
r.compileShader(q)
if(!H.lF(r.getShaderParameter(q,35713))){s=r.getShaderInfoLog(q)
if(s==null)s="undefined log error"
r.deleteShader(q)
throw H.c(P.f('Error compiling shader "'+H.w(q)+'": '+s))}return q},
fM:function(){var s,r,q,p,o=this,n=u.F,m=H.b([],t.eu),l=o.a,k=H.jy(l.getProgramParameter(o.gaw(),35721))
for(s=0;s<k;++s){r=o.e
if(r==null)H.h(P.f(n))
q=l.getActiveAttrib(r,s)
q.toString
r=o.e
if(r==null)H.h(P.f(n))
p=q.name
p.toString
p=l.getAttribLocation(r,p)
p.toString
q=q.name
q.toString
m.push(new A.dX(l,q,p))}o.f=new A.hm(m)},
fO:function(){var s,r,q,p,o,n,m=this,l=u.F,k=H.b([],t.dC),j=m.a,i=H.jy(j.getProgramParameter(m.gaw(),35718))
for(s=0;s<i;++s){r=m.e
if(r==null)H.h(P.f(l))
q=j.getActiveUniform(r,s)
q.toString
r=m.e
if(r==null)H.h(P.f(l))
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
k.push(m.h9(o,n,q,p))}m.r=new A.iO(k)},
aL:function(a,b,c){var s=this.a
if(a===1)return new A.c2(s,b,c)
else return A.kh(s,this.e,b,a,c)},
eC:function(a,b,c){var s=this.a
if(a===1)return new A.dc(s,b,c)
else return A.kh(s,this.e,b,a,c)},
eD:function(a,b,c){var s=this.a
if(a===1)return new A.dd(s,b,c)
else return A.kh(s,this.e,b,a,c)},
bk:function(a,b){return new P.fv(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+b+"."))},
h9:function(a,b,c,d){var s=this
switch(a){case 5120:return s.aL(b,c,d)
case 5121:return s.aL(b,c,d)
case 5122:return s.aL(b,c,d)
case 5123:return s.aL(b,c,d)
case 5124:return s.aL(b,c,d)
case 5125:return s.aL(b,c,d)
case 5126:return new A.d5(s.a,c,d)
case 35664:return new A.f2(s.a,c,d)
case 35665:return new A.d6(s.a,c,d)
case 35666:return new A.d7(s.a,c,d)
case 35667:return new A.f3(s.a,c,d)
case 35668:return new A.f4(s.a,c,d)
case 35669:return new A.f5(s.a,c,d)
case 35674:return new A.f6(s.a,c,d)
case 35675:return new A.da(s.a,c,d)
case 35676:return new A.c3(s.a,c,d)
case 35678:return s.eC(b,c,d)
case 35680:return s.eD(b,c,d)
case 35670:throw H.c(s.bk("BOOL",c))
case 35671:throw H.c(s.bk("BOOL_VEC2",c))
case 35672:throw H.c(s.bk("BOOL_VEC3",c))
case 35673:throw H.c(s.bk("BOOL_VEC4",c))
default:throw H.c(P.f("Unknown uniform variable type "+a+" for "+c+"."))}}}
A.a_.prototype={}
A.iO.prototype={
h:function(a,b){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(p.c===b)return p}return null},
F:function(a,b){var s=this.h(0,b)
if(s==null)throw H.c(P.f("Required uniform value, "+b+", was not defined or used in shader."))
return s},
i:function(a){return this.u()},
u:function(){var s,r,q,p
for(s=this.a,r=s.length,q="",p=0;p<s.length;s.length===r||(0,H.r)(s),++p)q+=s[p].i(0)+"\n"
return q}}
A.c2.prototype={
i:function(a){return"Uniform1i: "+this.c}}
A.f3.prototype={
i:function(a){return"Uniform2i: "+this.c}}
A.f4.prototype={
i:function(a){return"Uniform3i: "+this.c}}
A.f5.prototype={
i:function(a){return"Uniform4i: "+this.c}}
A.f1.prototype={
i:function(a){return"Uniform1iv: "+this.c}}
A.d5.prototype={
i:function(a){return"Uniform1f: "+this.c}}
A.f2.prototype={
i:function(a){return"Uniform2f: "+this.c}}
A.d6.prototype={
i:function(a){return"Uniform3f: "+this.c}}
A.d7.prototype={
i:function(a){return"Uniform4f: "+this.c}}
A.f6.prototype={
i:function(a){return"Uniform1Mat2 "+this.c}}
A.da.prototype={
af:function(a){var s=new Float32Array(H.cc(a))
this.a.uniformMatrix3fv(this.d,!1,s)},
i:function(a){return"UniformMat3: "+this.c}}
A.c3.prototype={
af:function(a){var s=new Float32Array(H.cc(a))
this.a.uniformMatrix4fv(this.d,!1,s)},
i:function(a){return"UniformMat4: "+this.c}}
A.dc.prototype={
e5:function(a){var s=a.d,r=this.a,q=this.d
if(!s)r.uniform1i(q,0)
else r.uniform1i(q,a.a)},
i:function(a){return"UniformSampler2D: "+this.c}}
A.dd.prototype={
i:function(a){return"UniformSamplerCube: "+this.c}}
F.jx.prototype={
$3:function(a,b,c){var s,r=this,q=r.a,p=q.a.cn(q.b,b).cn(q.d.cn(q.c,b),c)
a.sZ(0,new V.a9(p.a,p.b,p.c))
a.se_(p.M())
q=1-b
s=1-c
a.sda(new V.cU(r.b+b*c,r.c+q*c,r.d+b*s,r.e+q*s))},
$S:19}
F.jO.prototype={
$2:function(a,b){return 0},
$S:41}
F.jN.prototype={
$3:function(a,b,c){var s,r,q=b*2-1,p=c*2-1
a.sZ(0,new V.a9(q,p,this.a.$2(b,c)))
a.se_(new V.D(q,p,1).M())
s=1-b
r=1-c
a.sda(new V.cU(b*c,2+s*c,4+b*r,6+s*r))},
$S:19}
F.aB.prototype={
b3:function(a,b,c){var s=this,r=a.a
if(r==null)throw H.c(P.f("May not create a face with a first vertex which is not attached to a shape."))
if(r!==b.a||r!==c.a)throw H.c(P.f("May not create a face with vertices attached to different shapes."))
s.e=s.d=null
s.a=a
a.gY().b.push(s)
s.b=b
b.gY().c.push(s)
s.c=c
c.gY().d.push(s)
r=s.a
if(r!=null){r=r.a
if(r!=null)r.gY().b.push(s)}r=s.a
if(r!=null){r=r.a
if(r!=null)r.a1()}},
ev:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.r
o=this.b
s=o==null?p:o.r
o=this.c
r=o==null?p:o.r
q=V.fd()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dH())return p
return q.M()},
ex:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.f
o=this.b
s=o==null?p:o.f
o=this.c
r=o==null?p:o.f
if(n==null||s==null||r==null)return p
o=s.b2(0,n)
q=new V.D(o.a,o.b,o.c).M()
o=r.b2(0,n)
return q.b9(new V.D(o.a,o.b,o.c).M()).M()},
c6:function(){var s,r,q=this
if(q.d!=null)return!0
s=q.ev()
if(s==null){s=q.ex()
if(s==null)return!1}q.d=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a1()}return!0},
eu:function(){var s,r,q,p=null,o=this.a,n=o==null?p:o.x
o=this.b
s=o==null?p:o.x
o=this.c
r=o==null?p:o.x
q=V.fd()
if(n!=null)q=q.W(0,n)
if(s!=null)q=q.W(0,s)
if(r!=null)q=q.W(0,r)
if(q.dH())return p
return q.M()},
ew:function(){var s,r,q,p,o,n,m,l=this,k=null,j=l.a,i=j==null,h=i?k:j.f,g=l.b,f=g==null,e=f?k:g.f,d=l.c,c=d==null,b=c?k:d.f
if(h==null||e==null||b==null)return k
s=i?k:j.y
r=f?k:g.y
q=c?k:d.y
if(s==null||r==null||q==null)return k
j=r.b
p=j-q.b
$.B().toString
if(Math.abs(p-0)<1e-9){j=b.b2(0,e)
o=new V.D(j.a,j.b,j.c).M()
if(q.a-r.a<0)o=o.b_(0)}else{n=(j-s.b)/p
j=b.b2(0,e)
j=new V.a9(j.a*n+e.a,j.b*n+e.b,j.c*n+e.c).b2(0,h)
o=new V.D(j.a,j.b,j.c).M()
q=q.a
r=r.a
if((q-r)*n+r-s.a<0)o=o.b_(0)}m=l.d
if(m!=null){m=m.M()
o=m.b9(o).M().b9(m).M()}return o},
c4:function(){var s,r,q=this
if(q.e!=null)return!0
s=q.eu()
if(s==null){s=q.ew()
if(s==null)return!1}q.e=s
r=q.a
if(r!=null){r=r.a
if(r!=null)r.a1()}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s,r=this,q=null,p=r.a,o=p==null
if(o||r.b==null||r.c==null)return a+"disposed"
p=o?q:p.gar(p)
p=a+C.a.ac(C.c.i(p==null?-1:p),0)+", "
o=r.b
o=o==null?q:o.gar(o)
p=p+C.a.ac(C.c.i(o==null?-1:o),0)+", "
o=r.c
o=o==null?q:o.gar(o)
s=p+C.a.ac(C.c.i(o==null?-1:o),0)+" {"
p=r.d
p=p==null?q:p.u()
s+=(p==null?"-":p)+", "
p=r.e
p=p==null?q:p.u()
return s+((p==null?"-":p)+"}")},
u:function(){return this.B("")}}
F.eh.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s=this.a,r=s==null
if(r||this.b==null)return a+"disposed"
s=r?null:s.gar(s)
s=a+C.a.ac(C.c.i(s==null?-1:s),0)+", "
r=this.b
r=r==null?null:r.gar(r)
return s+C.a.ac(C.c.i(r==null?-1:r),0)},
u:function(){return this.B("")}}
F.eB.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s=this.a
if(s==null)return a+"disposed"
s=s.gar(s)
return a+C.a.ac(C.c.i(s),0)},
u:function(){return this.B("")}}
F.iu.prototype={
ga4:function(){var s=this.a
return s==null?this.a=new F.A(this,H.b([],t.k)):s},
gbw:function(a){var s=this.b
return s==null?this.b=new F.bZ(this,H.b([],t.J)):s},
gbv:function(a){var s=this.c
return s==null?this.c=new F.bY(this,H.b([],t.L)):s},
gY:function(){var s=this.d
return s==null?this.d=new F.d0(this,H.b([],t.v)):s},
gq:function(){var s=this.e
return s==null?this.e=D.I():s},
hs:function(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0=b.e
if(a0!=null)++a0.d
a1.ga4().U()
s=b.ga4().c.length
for(a0=a1.ga4().c,r=a0.length,q=t.k,p=0;p<a0.length;a0.length===r||(0,H.r)(a0),++p){o=a0[p]
n=b.a
if(n==null)n=b.a=new F.A(b,H.b([],q))
n.l(0,o.h7())}b.ga4().U()
for(a0=a1.gbw(a1).b,r=a0.length,n=t.J,p=0;p<a0.length;a0.length===r||(0,H.r)(a0),++p){m=a0[p]
l=b.a
if(l==null)l=b.a=new F.A(b,H.b([],q))
k=m.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).U()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
h=l[k]
k=b.b
l=(k==null?b.b=new F.bZ(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,h)
l=new F.eB()
if(h.a==null)H.h(P.f("May not create a point with a vertex which is not attached to a shape."))
l.a=h
k=h.b;(k==null?h.b=new F.j7(H.b([],n)):k).b.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.b;(j==null?k.b=new F.bZ(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.v(a)}}}for(a0=a1.gbv(a1).b,r=a0.length,n=t.L,p=0;p<a0.length;a0.length===r||(0,H.r)(a0),++p){g=a0[p]
l=b.a
if(l==null)l=b.a=new F.A(b,H.b([],q))
k=g.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).U()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.A(b,H.b([],q)):k
k=g.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).U()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.c
l=(k==null?b.c=new F.bY(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,e)
l=new F.eh()
k=f.a
if(k==null)H.h(P.f("May not create a line with a start vertex which is not attached to a shape."))
if(k!=e.a)H.h(P.f("May not create a line with vertices attached to different shapes."))
l.a=f
k=f.c;(k==null?f.c=new F.fe(H.b([],n),H.b([],n)):k).b.push(l)
l.b=e
k=e.c;(k==null?e.c=new F.fe(H.b([],n),H.b([],n)):k).c.push(l)
k=l.a
if(k!=null){k=k.a
if(k!=null){j=k.c;(j==null?k.c=new F.bY(k,H.b([],n)):j).b.push(l)}}l=l.a
if(l!=null){l=l.a
if(l!=null){l=l.e
if(l!=null)l.v(a)}}}for(a0=a1.gY().b,r=a0.length,n=t.v,p=0;p<a0.length;a0.length===r||(0,H.r)(a0),++p){d=a0[p]
l=b.a
if(l==null)l=b.a=new F.A(b,H.b([],q))
k=d.a
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).U()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
f=l[k]
k=b.a
l=k==null?b.a=new F.A(b,H.b([],q)):k
k=d.b
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).U()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
e=l[k]
k=b.a
l=k==null?b.a=new F.A(b,H.b([],q)):k
k=d.c
if(k==null)k=a
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],q)):i).U()}k=k.e}k=(k==null?0:k)+s
l=l.c
if(k>=l.length)return H.d(l,k)
c=l[k]
k=b.d
l=(k==null?b.d=new F.d0(b,H.b([],n)):k).a
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,f)
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,e)
k=l.a;(k==null?l.a=new F.A(l,H.b([],q)):k).l(0,c)
new F.aB().b3(f,e,c)}a0=b.e
if(a0!=null)a0.as(0)},
aP:function(){var s,r=this,q=r.e
if(q!=null)++q.d
s=r.gY().aP()||!1
if(!r.ga4().aP())s=!1
q=r.e
if(q!=null)q.as(0)
return s},
h3:function(a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c=34962,b={},a=e.ga4().c.length,a0=a3.a,a1=(a0&$.bk().a)!==0?1:0
if((a0&$.bj().a)!==0)++a1
if((a0&$.bi().a)!==0)++a1
if((a0&$.bl().a)!==0)++a1
if((a0&$.bD().a)!==0)++a1
if((a0&$.dP().a)!==0)++a1
if((a0&$.dQ().a)!==0)++a1
if((a0&$.ci().a)!==0)++a1
if((a0&$.bh().a)!==0)++a1
s=a3.gcA(a3)
r=P.cG(a*s,0,!1,t.gR)
b.a=0
q=P.mQ(a1,new F.iv(b,e,a3,s*4,a,s,r),t.eT)
a0=a2.a
p=a0.createBuffer()
p.toString
a0.bindBuffer(c,p)
a0.bufferData(c,new Float32Array(H.cc(r)),35044)
a0.bindBuffer(c,d)
o=new Z.cl(new Z.fg(c,p),H.b([],t.fv),q,a3)
if(e.gbw(e).b.length!==0){n=H.b([],t.t)
p=t.J
m=t.k
l=0
while(!0){k=e.b
if(k==null){k=e.b=new F.bZ(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
k=k[l].a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).U()}k=k.e}n.push(k==null?0:k);++l}h=Z.kk(a0,34963,n)
o.b.push(new Z.bO(0,n.length,h))}if(e.gbv(e).b.length!==0){n=H.b([],t.t)
p=t.L
m=t.k
l=0
while(!0){k=e.c
if(k==null){k=e.c=new F.bY(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
g=k[l]
k=g.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).U()}k=k.e}n.push(k==null?0:k)
k=g.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).U()}k=k.e}n.push(k==null?0:k);++l}h=Z.kk(a0,34963,n)
o.b.push(new Z.bO(1,n.length,h))}if(e.gY().b.length!==0){n=H.b([],t.t)
p=t.v
m=t.k
l=0
while(!0){k=e.d
if(k==null){k=e.d=new F.d0(e,H.b([],p))
j=k}else j=k
if(!(l<k.b.length))break
k=j.b
if(l>=k.length)return H.d(k,l)
f=k[l]
k=f.a
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).U()}k=k.e}n.push(k==null?0:k)
k=f.b
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).U()}k=k.e}n.push(k==null?0:k)
k=f.c
if(k==null)k=d
else{j=k.a
if(j!=null){i=j.a;(i==null?j.a=new F.A(j,H.b([],m)):i).U()}k=k.e}n.push(k==null?0:k);++l}h=Z.kk(a0,34963,n)
o.b.push(new Z.bO(4,n.length,h))}return o},
i:function(a){var s=this,r="   ",q=H.b([],t.s)
if(s.ga4().c.length!==0){q.push("Vertices:")
q.push(s.ga4().B(r))}if(s.gbw(s).b.length!==0){q.push("Points:")
q.push(s.gbw(s).B(r))}if(s.gbv(s).b.length!==0){q.push("Lines:")
q.push(s.gbv(s).B(r))}if(s.gY().b.length!==0){q.push("Faces:")
q.push(s.gY().B(r))}return C.b.n(q,"\n")},
a1:function(){var s=this.e
return s==null?null:s.v(null)}}
F.iv.prototype={
$1:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.h1(a),e=f.gcA(f),d=g.a,c=d.a
for(s=g.e,r=g.r,q=r.length,p=g.f,o=g.b,n=t.k,m=0;m<s;++m){l=o.a
l=(l==null?o.a=new F.A(o,H.b([],n)):l).c
if(m>=l.length)return H.d(l,m)
k=l[m].hq(f)
j=d.a+m*p
for(l=k.length,i=0;i<l;++i){h=k[i]
if(j>=q)return H.d(r,j)
r[j]=h;++j}}d.a+=e
return new Z.bG(f,e,c*4,g.d)},
$S:42}
F.d0.prototype={
h0:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=H.b([],t.v)
for(s=this.a,r=t.k,q=b,p=0,o=!1,n=1;n<a;++n,++p,++q){for(m=o,l=1;l<b;++l,q=h){k=c.length
if(p<0||p>=k)return H.d(c,p)
j=c[p];++p
if(p>=k)return H.d(c,p)
i=c[p]
h=q+1
if(h<0||h>=k)return H.d(c,h)
g=c[h]
if(q<0||q>=k)return H.d(c,q)
f=c[q]
k=s.a
if(m){(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,g)
e=new F.aB()
e.b3(j,i,g)
d.push(e)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,j)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,f)
e=new F.aB()
e.b3(j,g,f)
d.push(e)}else{(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,g)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,f)
e=new F.aB()
e.b3(i,g,f)
d.push(e)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,i)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,f)
k=s.a;(k==null?s.a=new F.A(s,H.b([],r)):k).l(0,j)
e=new F.aB()
e.b3(i,f,j)
d.push(e)}m=!m}o=!o}return d},
gj:function(a){return this.b.length},
aP:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].c6())q=!1
return q},
c5:function(){var s,r,q,p
for(s=this.b,r=s.length,q=!0,p=0;p<s.length;s.length===r||(0,H.r)(s),++p)if(!s[p].c4())q=!1
return q},
i:function(a){return this.u()},
B:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(a))
return C.b.n(p,"\n")},
u:function(){return this.B("")}}
F.bY.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
B:function(a){var s,r=H.b([],t.s),q=this.b,p=q.length
for(s=0;s<p;++s){if(s>=q.length)return H.d(q,s)
r.push(q[s].B(a+(""+s+". ")))}return C.b.n(r,"\n")},
u:function(){return this.B("")}}
F.bZ.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
B:function(a){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(a))
return C.b.n(p,"\n")},
u:function(){return this.B("")}}
F.c7.prototype={
c9:function(a){var s=this,r=s.f,q=s.r,p=s.x,o=s.y,n=s.z,m=s.Q,l=s.ch
return F.ll(s.cx,p,m,r,q,o,n,a,l)},
h7:function(){return this.c9(null)},
gY:function(){var s=this.d
if(s==null){s=t.v
s=this.d=new F.j4(H.b([],s),H.b([],s),H.b([],s))}return s},
gar:function(a){var s=this.a
if(s!=null)s.ga4().U()
return this.e},
sZ:function(a,b){var s
if(!J.V(this.f,b)){this.f=b
s=this.a
if(s!=null)s.a1()}},
se_:function(a){var s
if(!J.V(this.z,a)){this.z=a
s=this.a
if(s!=null)s.a1()}},
sda:function(a){var s
if(!J.V(this.cx,a)){this.cx=a
s=this.a
if(s!=null)s.a1()}},
hq:function(a){var s,r,q,p,o=this,n=null
if(a.m(0,$.bk())){s=o.f
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.bj())){s=o.r
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,1,0],t.n):s}else if(a.m(0,$.bi())){s=o.x
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,1],t.n):s}else if(a.m(0,$.bl())){s=o.y
s=s==null?n:H.b([s.a,s.b],t.n)
return s==null?H.b([0,0],t.n):s}else if(a.m(0,$.bD())){s=o.z
s=s==null?n:H.b([s.a,s.b,s.c],t.n)
return s==null?H.b([0,0,0],t.n):s}else if(a.m(0,$.dP())){s=o.Q
r=s==null
q=r?n:s.a
if(q==null)q=1
p=r?n:s.b
if(p==null)p=1
s=r?n:s.c
return H.b([q,p,s==null?1:s],t.n)}else if(a.m(0,$.dQ())){s=o.Q
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([1,1,1,1],t.n):s}else if(a.m(0,$.ci()))return H.b([o.ch],t.n)
else if(a.m(0,$.bh())){s=o.cx
s=s==null?n:H.b([s.a,s.b,s.c,s.d],t.n)
return s==null?H.b([-1,-1,-1,-1],t.n):s}else return H.b([],t.n)},
c6:function(){var s,r,q,p=this,o={}
if(p.r!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.fd()
p.gY().A(0,new F.j9(o))
p.r=o.a.M()
if(r){s.a1()
o=s.e
if(o!=null)o.as(0)}return!0},
c4:function(){var s,r,q,p=this,o={}
if(p.x!=null)return!0
s=p.a
r=s!=null
if(r){q=s.e
if(q!=null)++q.d}o.a=V.fd()
p.gY().A(0,new F.j8(o))
p.x=o.a.M()
if(r){s.a1()
o=s.e
if(o!=null)o.as(0)}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.u()},
B:function(a){var s,r,q=this,p=null,o="-",n=H.b([],t.s)
n.push(C.a.ac(C.c.i(q.e),0))
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
n.push(V.x(q.ch,3,0))
s=q.cx
s=s==null?p:s.u()
n.push(s==null?o:s)
r=C.b.n(n,", ")
return a+"{"+r+"}"},
u:function(){return this.B("")}}
F.j9.prototype={
$1:function(a){var s,r=a.d
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:7}
F.j8.prototype={
$1:function(a){var s,r=a.e
if(r!=null){s=this.a
s.a=s.a.W(0,r)}},
$S:7}
F.A.prototype={
U:function(){},
l:function(a,b){var s,r=b.a
if(r!=null){if(r===this.a)return!1
throw H.c(P.f("May not add a vertex already attached to another shape to this shape."))}r=this.c
b.e=r.length
s=this.a
b.a=s
r.push(b)
s.a1()
return!0},
d5:function(a,b){var s=null,r=F.ll(s,s,a,s,s,b,s,s,0)
this.l(0,r)
return r},
gj:function(a){return this.c.length},
aP:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].c6()
return!0},
c5:function(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)s[q].c4()
return!0},
h4:function(){var s,r,q,p,o,n
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q){p=s[q]
if(p.z==null){o=p.r
if(o!=null){n=o.M()
if(!J.V(p.z,n)){p.z=n
n=p.a
if(n!=null){n=n.e
if(n!=null)n.v(null)}}}}}return!0},
i:function(a){return this.u()},
B:function(a){var s,r,q,p
this.U()
s=H.b([],t.s)
for(r=this.c,q=r.length,p=0;p<r.length;r.length===q||(0,H.r)(r),++p)s.push(r[p].B(a))
return C.b.n(s,"\n")},
u:function(){return this.B("")}}
F.j4.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
A:function(a,b){var s=this
C.b.A(s.b,b)
C.b.A(s.c,new F.j5(s,b))
C.b.A(s.d,new F.j6(s,b))},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.d,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
F.j5.prototype={
$1:function(a){if(!J.V(a.a,this.a))this.b.$1(a)},
$S:7}
F.j6.prototype={
$1:function(a){var s=this.a
if(!J.V(a.a,s)&&!J.V(a.b,s))this.b.$1(a)},
$S:7}
F.fe.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
F.j7.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.u()},
u:function(){var s,r,q,p=H.b([],t.s)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.r)(s),++q)p.push(s[q].B(""))
return C.b.n(p,"\n")}}
O.cK.prototype={
gq:function(){var s=this.fr
return s==null?this.fr=D.I():s},
T:function(a){var s=this.fr
return s==null?null:s.v(a)},
bT:function(){return this.T(null)},
cW:function(a){this.a=null
this.T(a)},
fJ:function(){return this.cW(null)},
eW:function(a,b){return this.T(new D.aH())},
eY:function(a,b){return this.T(new D.aI())},
gbu:function(){var s=this,r=s.dx
if(r==null){r=new D.cD(H.b([],t.i),H.b([],t.U),H.b([],t.o),H.b([],t.D),H.b([],t.e))
r.bC(r.geT(),r.gfq(),r.gfv())
r.gq().l(0,s.gcV())
r.gdI().l(0,s.gb7())
s.dx=r}return r},
gbm:function(){var s=this.r
return s==null?this.r=O.el(this,"ambient"):s},
gbp:function(){var s=this.x
return s==null?this.x=O.el(this,"diffuse"):s},
gbE:function(){var s=this.z
return s==null?this.z=new O.i7(new V.M(0,0,0),this,"specular",new A.ao(!1,!1,!1)):s},
cM:function(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=t.y,a2=new H.U(a1),a3=a.dx
a3=a3==null?a0:a3.e
if(a3==null)a3=H.b([],t.i)
s=a3.length
r=0
for(;r<a3.length;a3.length===s||(0,H.r)(a3),++r){q=a3[r]
p=q.gaq()
o=a2.h(0,q.gaq())
a2.k(0,p,o==null?1:o)}n=H.b([],t.cn)
a2.A(0,new O.i8(a,n))
C.b.b1(n,new O.i9())
m=new H.U(a1)
a3=a.dx
a3=a3==null?a0:a3.f
if(a3==null)a3=H.b([],t.U)
s=a3.length
r=0
for(;r<a3.length;a3.length===s||(0,H.r)(a3),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],t.fD)
m.A(0,new O.ia(a,l))
C.b.b1(l,new O.ib())
k=new H.U(a1)
a3=a.dx
a3=a3==null?a0:a3.r
if(a3==null)a3=H.b([],t.o)
s=a3.length
r=0
for(;r<a3.length;a3.length===s||(0,H.r)(a3),++r){q=a3[r]
p=q.gaq()
o=k.h(0,q.gaq())
k.k(0,p,o==null?1:o)}j=H.b([],t.eg)
k.A(0,new O.ic(a,j))
C.b.b1(j,new O.id())
i=new H.U(a1)
a1=a.dx
a1=a1==null?a0:a1.x
if(a1==null)a1=H.b([],t.D)
a3=a1.length
r=0
for(;r<a1.length;a1.length===a3||(0,H.r)(a1),++r){q=a1[r]
s=q.gaq()
p=i.h(0,q.gaq())
i.k(0,s,p==null?1:p)}h=H.b([],t.c3)
i.A(0,new O.ie(a,h))
C.b.b1(h,new O.ig())
a1=C.c.X(a.e.a.length+3,4)
a3=a.b
if(a.dy==null)a.dy=new O.i5(new V.bo(0,0,0,0))
s=a.f
s=(s==null?a.f=O.el(a,"emission"):s).c
p=a.gbm().c
o=a.gbp().c
g=a.y
g=(g==null?a.y=O.el(a,"invDiffuse"):g).c
f=a.gbE().c
e=a.Q
e=(e==null?a.Q=new O.i3(a,"bump",new A.ao(!1,!1,!1)):e).c
d=a.cx
d=(d==null?a.cx=O.el(a,"reflect"):d).c
c=a.cy
c=(c==null?a.cy=new O.i6(new V.M(0,0,0),a,"refract",new A.ao(!1,!1,!1)):c).c
b=a.db
return A.mS(a3!=null,!1,!1,!1,a1*4,s,p,o,g,f,e,d,c,(b==null?a.db=new O.i2(a,"alpha",new A.ao(!1,!1,!1)):b).c,n,l,j,h)},
a7:function(a,b){if(b!=null)if(!C.b.I(a,b)){b.a=a.length
a.push(b)}},
ad:function(a,b){var s,r,q,p,o,n,m=this.dx
m=J.aD(m==null?H.b([],t.e):m)
s=H.S(m).c
for(;m.t();){r=s.a(m.d)
q=$.j3
if(q==null)q=$.j3=new V.D(0,0,1)
r.c=q
p=$.j2
r.d=p==null?$.j2=new V.D(0,1,0):p
p=$.j1
r.e=p==null?$.j1=new V.D(-1,0,0):p
o=r.a
if(o!=null){n=o.a
r.c=n.aD(q).M()
r.d=n.aD(r.d).M()
r.e=n.aD(r.e).M()}}},
hL:function(b1,b2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8=this,a9=null,b0=a8.a
if(b0==null){s=a8.cM()
r=s.aR
q=b1.fr
b0=q.h(0,r)
if(b0==null){p=b1.a
o=t.S
n=t.W
b0=new A.ek(s,H.b([],t.p),P.R(o,n),P.R(o,t.Q),P.R(o,n),P.R(o,t.b),P.R(o,n),P.R(o,t.c),P.R(o,n),P.R(o,t.R),p,r)
b0.ec(s,p)
if(r.length===0)H.h(P.f("May not cache a shader with no name."))
if(q.c7(0,r))H.h(P.f('Shader cache already contains a shader by the name "'+r+'".'))
q.k(0,r,b0)}b0=a8.a=b0
b2.e=null}m=b0.x
l=m.dh
s=b2.e
if(!(s instanceof Z.cl))s=b2.e=null
if(s==null||!s.d.m(0,l)){s=m.k4
if(s){r=b2.d
if(r!=null)r.aP()}r=m.r1
if(r){q=b2.d
if(q!=null){p=q.e
if(p!=null)++p.d
q.gY().c5()
q.ga4().c5()
q=q.e
if(q!=null)q.as(0)}}q=m.rx
if(q){p=b2.d
if(p!=null){o=p.e
if(o!=null)++o.d
p.ga4().h4()
p=p.e
if(p!=null)p.as(0)}}p=b2.d
k=p==null?a9:p.h3(new Z.ja(b1.a),l)
if(k==null)return
p=k.aS($.bk())
if(p!=null){o=b0.y
o=o==null?a9:o.c
p.e=o==null?0:o}if(s){s=k.aS($.bj())
if(s!=null){p=b0.Q
p=p==null?a9:p.c
s.e=p==null?1:p}}if(r){s=k.aS($.bi())
if(s!=null){r=b0.z
r=r==null?a9:r.c
s.e=r==null?2:r}}if(m.r2){s=k.aS($.bl())
if(s!=null){r=b0.ch
r=r==null?a9:r.c
s.e=r==null?3:r}}if(q){s=k.aS($.bD())
if(s!=null){r=b0.cx
r=r==null?a9:r.c
s.e=r==null?4:r}}if(m.ry){s=k.aS($.bh())
if(s!=null){r=b0.cy
r=r==null?a9:r.c
s.e=r==null?5:r}}b2.e=k}j=H.b([],t.ga)
s=b1.a
s.useProgram(b0.e)
b0.gao(b0).hf()
if(m.fr){r=b1.dx
r=r.gR(r)
q=b0.db
if(q!=null)q.af(r.a3(0,!0))}if(m.fx){r=b1.cx
if(r==null){r=b1.db
q=b1.dx
q=b1.cx=r.gR(r).K(0,q.gR(q))
r=q}q=b0.dx
if(q!=null)q.af(r.a3(0,!0))}r=b1.ch
if(r==null){r=b1.dx
r=b1.ch=b1.ghJ().K(0,r.gR(r))}q=b0.fr
if(q!=null)q.af(r.a3(0,!0))
if(m.go){r=b1.db
r=r.gR(r)
q=b0.dy
if(q!=null)q.af(r.a3(0,!0))}if(m.x1){r=a8.b
if(r==null)r=V.ih()
q=b0.go
if(q!=null)q.af(r.a3(0,!0))}if(m.x2){r=V.b4()
q=b0.id
if(q!=null)q.af(r.a3(0,!0))}if(m.y1){r=V.b4()
q=b0.k1
if(q!=null)q.af(r.a3(0,!0))}if(m.aQ>0){r=a8.e.a
i=r.length
q=b0.k2
if(q!=null)q.a.uniform1i(q.d,i)
for(h=0;h<i;++h){if(h>=r.length)return H.d(r,h)
q=r[h]
p=b0.k3
if(h>=p.length)return H.d(p,h)
p=p[h]
g=new Float32Array(H.cc(q.a3(0,!0)))
p.a.uniformMatrix4fv(p.d,!1,g)}}r=m.a
if(r.a){q=a8.f
q=q==null?a9:q.f
if(q==null)q=new V.M(0,0,0)
p=b0.k4
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.f
a8.a7(j,r==null?a9:r.d)
r=a8.f
r=r==null?a9:r.d
b0.ag(b0.r1,r)}if(m.k1){r=m.b
if(r.a){q=a8.r
q=q==null?a9:q.f
if(q==null)q=new V.M(0,0,0)
p=b0.rx
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.r
a8.a7(j,r==null?a9:r.d)
r=a8.r
r=r==null?a9:r.d
b0.ag(b0.ry,r)}r=m.c
if(r.a){q=a8.x
q=q==null?a9:q.f
if(q==null)q=new V.M(0,0,0)
p=b0.x2
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.x
a8.a7(j,r==null?a9:r.d)
r=a8.x
r=r==null?a9:r.d
b0.ag(b0.y1,r)}r=m.d
if(r.a){q=a8.y
q=q==null?a9:q.f
if(q==null)q=new V.M(0,0,0)
p=b0.aQ
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.y
a8.a7(j,r==null?a9:r.d)
r=a8.y
r=r==null?a9:r.d
b0.ag(b0.aR,r)}r=m.e
q=r.a
if(q||r.b||!1){p=a8.z
p=p==null?a9:p.ch
if(p==null)p=100
o=b0.dk
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a8.z
q=q==null?a9:q.f
if(q==null)q=new V.M(1,1,1)
p=b0.di
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.z
a8.a7(j,r==null?a9:r.d)
r=a8.z
r=r==null?a9:r.d
b0.ag(b0.dj,r)}r=m.z
if(r.length>0){f=new H.U(t.y)
q=a8.dx
q=q==null?a9:q.e
if(q==null)q=H.b([],t.i)
p=q.length
o=t.Y
e=0
for(;e<q.length;q.length===p||(0,H.r)(q),++e){d=q[e]
c=d.gaq()
b=f.h(0,c)
if(b==null)b=0
f.k(0,c,b+1)
n=b0.cb.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.ghZ()
a0=$.aQ
n=n.bg(a0==null?$.aQ=new V.a9(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gi3()
a0=$.aQ
n=n.bg(a0==null?$.aQ=new V.a9(0,0,0):a0)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gap(d)
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
if(d.gdg()){n=d.gd7()
a0=a.e
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gd8()
a0=a.f
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gd9()
a0=a.r
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.r)(r),++e){p=r[e].a
i=f.h(0,p)
if(i==null)i=0
p=b0.ca.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.Q
if(r.length>0){q=b1.db
a1=q.gR(q)
a2=new H.U(t.y)
q=a8.dx
q=q==null?a9:q.f
if(q==null)q=H.b([],t.U)
p=q.length
o=t.V
e=0
for(;e<q.length;q.length===p||(0,H.r)(q),++e){d=q[e]
b=a2.h(0,0)
if(b==null)b=0
a2.k(0,0,b+1)
n=b0.cd.h(0,0)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=a1.aD(d.c).M()
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.b
a0=a.f
a0.a.uniform3f(a0.d,n.a,n.b,n.c)}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.r)(r),++e){p=r[e].a
i=a2.h(0,p)
if(i==null)i=0
p=b0.cc.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.ch
if(r.length>0){q=b1.db
a1=q.gR(q)
a3=new H.U(t.y)
q=a8.dx
q=q==null?a9:q.r
if(q==null)q=H.b([],t.o)
p=q.length
o=t.E
e=0
for(;e<q.length;q.length===p||(0,H.r)(q),++e){d=q[e]
c=d.gaq()
b=a3.h(0,c)
if(b==null)b=0
a3.k(0,c,b+1)
n=b0.cf.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
a4=a1.K(0,d.gR(d))
n=d.gR(d)
a0=$.aQ
n=n.bg(a0==null?$.aQ=new V.a9(0,0,0):a0)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=$.aQ
n=a4.bg(n==null?$.aQ=new V.a9(0,0,0):n)
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gap(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaC()
n=a4.br(0)
a0=a.d
if(a0!=null){g=new Float32Array(H.cc(new V.b3(n.a,n.b,n.c,n.e,n.f,n.r,n.y,n.z,n.Q).a3(0,!0)))
a0.a.uniformMatrix3fv(a0.d,!1,g)}d.gaC()
n=d.gaC()
if(!C.b.I(j,n)){n.a=j.length
j.push(n)}n=d.gaC()
a0=n.gbb(n)
if(a0){a0=a.f
if(a0!=null){a5=n.gbb(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gar(n))}}d.gb0()
n=d.ge6()
a0=a.x
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb0()
if(!C.b.I(j,n)){n.a=j.length
j.push(n)}n=d.gb0()
a0=n.gbb(n)
if(a0){a0=a.r
if(a0!=null){a5=n.gbb(n)
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.gar(n))}}if(d.gdg()){n=d.gd7()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gd8()
a0=a.z
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gd9()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.r)(r),++e){p=r[e].a
i=a3.h(0,p)
if(i==null)i=0
p=b0.ce.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}r=m.cx
if(r.length>0){q=b1.db
a1=q.gR(q)
a7=new H.U(t.y)
q=a8.dx
q=q==null?a9:q.x
if(q==null)q=H.b([],t.D)
p=q.length
o=t.M
e=0
for(;e<q.length;q.length===p||(0,H.r)(q),++e){d=q[e]
c=d.gaq()
b=a7.h(0,c)
if(b==null)b=0
a7.k(0,c,b+1)
n=b0.ci.h(0,c)
if(n==null)n=H.b([],o)
if(b>>>0!==b||b>=n.length)return H.d(n,b)
a=n[b]
n=d.ghI(d)
a0=a.b
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gi1(d).M()
a0=a.c
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=a1.bg(d.ghI(d))
a0=a.d
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gap(d)
a0=a.e
a0.a.uniform3f(a0.d,n.a,n.b,n.c)
d.gaC()
n=d.gig()
a0=a.f
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gct(d)
a0=a.r
if(a0!=null)a0.a.uniform3f(a0.d,n.a,n.b,n.c)
n=d.gic()
a0=a.x
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gie()
a0=a.y
if(a0!=null)a0.a.uniform1f(a0.d,n)
d.gaC()
n=d.gaC()
if(!C.b.I(j,n)){n.a=j.length
j.push(n)}n=d.gaC()
a0=n.gbb(n)
if(a0){a0=a.dx
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}d.gb0()
n=d.ge6()
a0=a.z
if(a0!=null)a0.a.uniform4f(a0.d,n.a,n.b,n.c,n.d)
n=d.gb0()
if(!C.b.I(j,n)){n.a=j.length
j.push(n)}n=d.gb0()
a0=n.gbb(n)
if(a0){a0=a.dy
if(a0!=null){a5=n.d
a6=a0.a
a0=a0.d
if(!a5)a6.uniform1i(a0,0)
else a6.uniform1i(a0,n.a)}}if(d.gi2()){n=d.gi0()
a0=a.Q
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gi_()
a0=a.ch
if(a0!=null)a0.a.uniform1f(a0.d,n)}if(d.gdg()){n=d.gd7()
a0=a.cx
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gd8()
a0=a.cy
if(a0!=null)a0.a.uniform1f(a0.d,n)
n=d.gd9()
a0=a.db
if(a0!=null)a0.a.uniform1f(a0.d,n)}}for(q=r.length,e=0;e<r.length;r.length===q||(0,H.r)(r),++e){p=r[e].a
i=a7.h(0,p)
if(i==null)i=0
p=b0.cg.h(0,p)
if(p!=null)p.a.uniform1i(p.d,i)}}}if(m.f.b){r=a8.Q
a8.a7(j,r==null?a9:r.d)
r=a8.Q
r=r==null?a9:r.d
b0.ag(b0.dl,r)}if(m.dy){r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.gR(r).br(0)}q=b0.fy
if(q!=null)q.af(r.a3(0,!0))}if(m.db){a8.a7(j,a9)
b0.fL(b0.dm,a9)
r=m.r
if(r.a){q=a8.cx
q=q==null?a9:q.f
if(q==null)q=new V.M(1,1,1)
p=b0.dn
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.cx
a8.a7(j,r==null?a9:r.d)
r=a8.cx
r=r==null?a9:r.d
b0.ag(b0.dq,r)}r=m.x
q=r.a
if(q||r.b||!1){p=a8.cy
p=p==null?a9:p.ch
if(p==null)p=0
o=b0.dr
if(o!=null)o.a.uniform1f(o.d,p)}if(q){q=a8.cy
q=q==null?a9:q.f
if(q==null)q=new V.M(1,1,1)
p=b0.ds
if(p!=null)p.a.uniform3f(p.d,q.a,q.b,q.c)}if(r.b){r=a8.cy
a8.a7(j,r==null?a9:r.d)
r=a8.cy
r=r==null?a9:r.d
b0.ag(b0.dt,r)}}r=m.y
q=r.a
p=!q
if(!p||r.b||!1){if(q){q=a8.db
q=q==null?a9:q.f
if(q==null)q=1
o=b0.du
if(o!=null)o.a.uniform1f(o.d,q)}if(r.b){q=a8.db
a8.a7(j,q==null?a9:q.d)
q=a8.db
q=q==null?a9:q.d
b0.ag(b0.dv,q)}s.enable(3042)
s.blendFunc(770,771)}for(h=0;h<j.length;++h){q=j[h]
if(!q.c&&q.d){q.c=!0
s.activeTexture(33984+q.a)
s.bindTexture(3553,q.b)}}q=t.ed.a(b2.e)
q.c3(b1)
q.aX(b1)
q.hW(b1)
if(!p||r.b||!1)s.disable(3042)
for(h=0;h<j.length;++h){r=j[h]
if(r.c){r.c=!1
s.activeTexture(33984+r.a)
s.bindTexture(3553,a9)}}s.useProgram(a9)
b0.gao(b0).hd()},
i:function(a){var s=this.a
if(s!=null)return s.b
else return this.cM().aR}}
O.i8.prototype={
$2:function(a,b){return this.b.push(new A.aZ(a,C.c.X(b+3,4)*4))},
$S:6}
O.i9.prototype={
$2:function(a,b){return C.c.a9(a.a,b.a)},
$S:46}
O.ia.prototype={
$2:function(a,b){return this.b.push(new A.b1(a,C.c.X(b+3,4)*4))},
$S:6}
O.ib.prototype={
$2:function(a,b){return C.c.a9(a.a,b.a)},
$S:47}
O.ic.prototype={
$2:function(a,b){return this.b.push(new A.b5(a,C.c.X(b+3,4)*4))},
$S:6}
O.id.prototype={
$2:function(a,b){return C.c.a9(a.a,b.a)},
$S:48}
O.ie.prototype={
$2:function(a,b){return this.b.push(new A.b7(a,C.c.X(b+3,4)*4))},
$S:6}
O.ig.prototype={
$2:function(a,b){return C.c.a9(a.a,b.a)},
$S:49}
O.i2.prototype={
ax:function(){var s,r=this
r.cB()
s=r.f
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.f=1
r.a.T(new D.C(r.b,s,1))}}}
O.cL.prototype={
T:function(a){return this.a.T(a)},
bT:function(){return this.T(null)},
ax:function(){},
bY:function(a){var s,r,q=this
if(!q.c.m(0,a)){s=q.c
if(s.a||s.b||!1)r=!(a.a||a.b||!1)
else r=!0
q.c=a
if(r)q.ax()
s=q.a
s.a=null
s.T(null)}},
sdZ:function(a){var s,r=this,q=r.c
if(!q.b)r.bY(new A.ao(q.a,!0,!1))
q=r.d
if(q!==a){if(q!=null)q.gq().P(0,r.gb7())
s=r.d
r.d=a
a.gq().l(0,r.gb7())
r.a.T(new D.C(r.b+".texture2D",s,r.d))}}}
O.i3.prototype={}
O.cM.prototype={
cY:function(a){var s,r=this
if(!r.f.m(0,a)){s=r.f
r.f=a
r.a.T(new D.C(r.b+".color",s,a))}},
ax:function(){this.cB()
this.cY(new V.M(1,1,1))},
sap:function(a,b){this.bY(new A.ao(!0,this.c.b,!1))
this.cY(b)}}
O.i5.prototype={}
O.i6.prototype={
ax:function(){var s,r=this
r.cC()
s=r.ch
$.B().toString
if(!(Math.abs(s-1)<1e-9)){r.ch=1
r.a.T(new D.C(r.b+".refraction",s,1))}}}
O.i7.prototype={
cZ:function(a){var s=this,r=s.ch
$.B().toString
if(!(Math.abs(r-a)<1e-9)){s.ch=a
s.a.T(new D.C(s.b+".shininess",r,a))}},
ax:function(){this.cC()
this.cZ(100)}}
O.d2.prototype={}
T.c0.prototype={}
T.eU.prototype={}
T.eV.prototype={
gq:function(){var s=this.y
return s==null?this.y=D.I():s}}
T.iE.prototype={
hr:function(a,b,c){var s,r,q=3553,p=this.a,o=p.createTexture()
o.toString
p.bindTexture(q,o)
p.texParameteri(q,10242,10497)
p.texParameteri(q,10243,10497)
p.texParameteri(q,10241,9987)
p.texParameteri(q,10240,9729)
p.bindTexture(q,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.eV(o)
W.a2(s,"load",new T.iF(this,r,s,!1,o,!1,!0),!1)
return r},
fK:function(a,b,c){var s,r,q,p,o,n
b=V.kH(b)
s=a.width
r=V.kH(s==null?512:s)
s=a.height
q=V.kH(s==null?512:s)
r=Math.min(r,b)
q=Math.min(q,b)
if(a.width===r&&a.height===q)return a
else{p=W.k2()
p.width=r
p.height=q
o=t.ar.a(C.i.e4(p,"2d"))
o.imageSmoothingEnabled=!1
s=p.width
if(s==null)s=512
n=p.height
o.drawImage(a,0,0,s,n==null?512:n)
s=p.width
if(s==null)s=512
n=p.height
return P.oW(o.getImageData(0,0,s,n==null?512:n))}}}
T.iF.prototype={
$1:function(a){var s,r,q=this,p=3553,o=q.c
o.width
o.height
s=q.a
r=s.fK(o,s.b,q.d)
o.width
o.height
o=s.a
o.bindTexture(p,q.e)
o.pixelStorei(37440,0)
C.W.hR(o,p,0,6408,6408,5121,r)
o.generateMipmap(p)
o.bindTexture(p,null)
o=q.b
if(!o.d){o.d=!0
o=o.y
if(o!=null)o.he()}++s.e},
$S:2}
X.hS.prototype={
gq:function(){var s=this.x
return s==null?this.x=D.I():s}}
X.ey.prototype={
gq:function(){var s=this.f
return s==null?this.f=D.I():s},
aK:function(a){var s=this.f
return s==null?null:s.v(a)},
ep:function(){return this.aK(null)},
saW:function(a){var s,r,q=this
if(!J.V(q.b,a)){s=q.b
if(s!=null)s.gq().P(0,q.gcI())
r=q.b
q.b=a
if(a!=null)a.gq().l(0,q.gcI())
q.aK(new D.C("mover",r,q.b))}}}
X.iC.prototype={}
V.hu.prototype={
fY:function(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=k.d,i=j.length,h=P.ki().gby().h(0,k.a)
if(h==null||h.length<=i){s=!0
r=!1}else{if(i>=h.length)return H.d(h,i)
r=h[i]==="1"
s=!1}c.$1(r)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
o=k.c
n=J.bf(o)
n.gbn(o).l(0,p)
m=W.mG("checkbox")
m.checked=r
W.a2(m,"change",new V.hv(k,m,c,i),!1)
p.children.toString
p.appendChild(m).toString
l=q.createElement("span")
l.textContent=b
p.appendChild(l).toString
o=n.gbn(o)
q=q.createElement("br")
q.toString
o.l(0,q)
j.push(m)
if(s)k.d3(i,r)},
d3:function(a,b){var s,r,q,p,o,n=this.a,m=P.ki().gby().h(0,n)
if(m==null)m=""
s=m.length
if(s<a)m=C.a.hC(m,a-s+1,"0")
r=a>0?C.a.p(m,0,a):""
r+=b?"1":"0"
s=a+1
if(s<m.length)r+=C.a.a5(m,s)
q=P.ki()
s=t.N
p=P.mP(q.gby(),s,s)
p.k(0,n,r)
o=q.dW(0,p)
n=window.history
n.toString
s=o.gc0()
n.replaceState(new P.jn([],[]).bA(""),"",s)}}
V.hv.prototype={
$1:function(a){var s=this,r=s.b.checked,q=r===!0
s.c.$1(q)
s.a.d3(s.d,q)},
$S:2}
V.jY.prototype={
$1:function(a){var s=C.d.cv(this.a.ghm(),2)
if(s!=="0.00")P.kI(s+" fps")},
$S:50}
V.iw.prototype={
d6:function(a){var s,r,q,p,o,n,m=this.fN(),l=document,k=l.createElement("div")
k.className="textPar"
for(s=new H.Q(C.b.hp(a)),s=new P.ca(m.e0(new H.bR(s,s.gj(s))).a());s.t();){r=s.gD(s)
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
if(H.lX(r,"|",0)){p=r.split("|")
o=l.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
k.appendChild(o).toString}else{n=P.kw(C.Q,r,C.e,!1)
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
fZ:function(a){var s,r,q,p,o,n,m="auto",l=document,k=l.createElement("table")
k.id="shellTable"
s=k.style
s.width="100%"
s.padding="0px"
s.marginLeft=m
s.marginRight=m
this.a.appendChild(k).toString
r=k.insertRow(-1)
s=r.insertCell(-1)
s.toString
q=t.bY
s=q.a(s).style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=m
s.marginRight=m
for(p=0;p<1;++p){o=l.createElement("div")
o.id=a[p]
s=o.style
s.textAlign="left"
s=o.style
s.verticalAlign="top"
s=r.insertCell(-1)
s.toString
q.a(s)
n=s.style
n.textAlign="center"
n.verticalAlign="top"
n.marginLeft=m
n.marginRight=m
s.appendChild(o).toString}},
fN:function(){var s,r,q,p,o="Start",n="Bold",m="Italic",l="ItalicEnd",k="Code",j="LinkHead",i="LinkTail",h="LinkEnd",g="Other",f=this.b
if(f!=null)return f
s=t.N
f=new L.iJ(P.R(s,t.dl),P.R(s,t.f7),P.kT(s))
f.d=f.L(0,o)
s=f.L(0,o).n(0,n)
r=t.t
q=new K.X(H.b([],r))
q.S(new H.Q("*"))
s.a.push(q)
s.c=!0
s=f.L(0,n).n(0,n)
q=t.B
p=H.b([],q)
s.a.push(new K.aO(p))
s=new K.X(H.b([],r))
s.S(new H.Q("*"))
p.push(s)
s=f.L(0,n).n(0,"BoldEnd")
p=new K.X(H.b([],r))
p.S(new H.Q("*"))
s.a.push(p)
s.c=!0
s=f.L(0,o).n(0,m)
p=new K.X(H.b([],r))
p.S(new H.Q("_"))
s.a.push(p)
s.c=!0
s=f.L(0,m).n(0,m)
p=H.b([],q)
s.a.push(new K.aO(p))
s=new K.X(H.b([],r))
s.S(new H.Q("_"))
p.push(s)
s=f.L(0,m).n(0,l)
p=new K.X(H.b([],r))
p.S(new H.Q("_"))
s.a.push(p)
s.c=!0
s=f.L(0,o).n(0,k)
p=new K.X(H.b([],r))
p.S(new H.Q("`"))
s.a.push(p)
s.c=!0
s=f.L(0,k).n(0,k)
p=H.b([],q)
s.a.push(new K.aO(p))
s=new K.X(H.b([],r))
s.S(new H.Q("`"))
p.push(s)
s=f.L(0,k).n(0,"CodeEnd")
p=new K.X(H.b([],r))
p.S(new H.Q("`"))
s.a.push(p)
s.c=!0
s=f.L(0,o).n(0,j)
p=new K.X(H.b([],r))
p.S(new H.Q("["))
s.a.push(p)
s.c=!0
s=f.L(0,j).n(0,i)
p=new K.X(H.b([],r))
p.S(new H.Q("|"))
s.a.push(p)
p=f.L(0,j).n(0,h)
s=new K.X(H.b([],r))
s.S(new H.Q("]"))
p.a.push(s)
p.c=!0
p=f.L(0,j).n(0,j)
s=H.b([],q)
p.a.push(new K.aO(s))
p=new K.X(H.b([],r))
p.S(new H.Q("|]"))
s.push(p)
p=f.L(0,i).n(0,h)
s=new K.X(H.b([],r))
s.S(new H.Q("]"))
p.a.push(s)
p.c=!0
p=f.L(0,i).n(0,i)
s=H.b([],q)
p.a.push(new K.aO(s))
p=new K.X(H.b([],r))
p.S(new H.Q("|]"))
s.push(p)
f.L(0,o).n(0,g).a.push(new K.dT())
p=f.L(0,g).n(0,g)
q=H.b([],q)
p.a.push(new K.aO(q))
r=new K.X(H.b([],r))
r.S(new H.Q("*_`["))
q.push(r)
r=f.L(0,"BoldEnd")
r.d=r.a.bf(n)
r=f.L(0,l)
r.d=r.a.bf(m)
r=f.L(0,"CodeEnd")
r.d=r.a.bf(k)
r=f.L(0,h)
r.d=r.a.bf("Link")
r=f.L(0,g)
r.d=r.a.bf(g)
return this.b=f}}
V.iy.prototype={
$1:function(a){P.lc(C.m,new V.ix(this.a))},
$S:2}
V.ix.prototype={
$0:function(){var s,r,q=document.documentElement
if(q==null)s=null
else{q=q.scrollTop
q.toString
q=C.d.ak(q)
s=q}if(s==null)s=0
q=this.a.style
q.toString
r=H.w(-0.01*s)+"px"
q.top=r},
$S:3}
X.jV.prototype={
$1:function(a){var s,r=this.a,q=-this.b.c.d,p=Math.cos(q),o=Math.sin(q)
q=new V.b3(p,0,-o,0,1,0,o,0,p)
if(!r.z.m(0,q)){s=r.z
r.z=q
r.Q=q.br(0)
r.J(new D.C("velocityRotation",s,r.z))}},
$S:1}
X.jW.prototype={
$1:function(a){this.a.x.r=a},
$S:51};(function aliases(){var s=J.a.prototype
s.e9=s.i
s=J.b2.prototype
s.ea=s.i
s=K.cw.prototype
s.e8=s.aU
s.bF=s.i
s=O.cL.prototype
s.cB=s.ax
s=O.cM.prototype
s.cC=s.ax})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers._instance_1u,l=hunkHelpers._instance_0i
s(J,"ob","mL",52)
r(P,"oQ","no",12)
r(P,"oR","np",12)
r(P,"oS","nq",12)
q(P,"lO","oL",3)
r(W,"qo","hH",36)
var k
p(k=E.bq.prototype,"gdN",0,0,null,["$1","$0"],["dO","hA"],0,0)
p(k,"gdP",0,0,null,["$1","$0"],["dQ","hB"],0,0)
p(k,"gdL",0,0,null,["$1","$0"],["dM","hz"],0,0)
p(k,"gdJ",0,0,null,["$1","$0"],["dK","hw"],0,0)
o(k,"ghu","hv",8)
o(k,"ghx","hy",8)
p(k=E.eW.prototype,"gcE",0,0,null,["$1","$0"],["cG","cF"],0,0)
n(k,"ghN","dX",3)
m(k=X.cA.prototype,"geg","eh",30)
o(k,"gee","ef",20)
o(k,"gei","ej",20)
m(k,"gbG","bH",1)
m(k,"gbU","bV",1)
m(k=X.fc.prototype,"gfa","fb",2)
m(k,"geZ","f_",2)
m(k,"gf4","f5",4)
m(k,"gbU","bV",18)
m(k,"gbG","bH",18)
m(k,"gfg","fh",4)
m(k,"gfk","fl",4)
m(k,"gf8","f9",4)
m(k,"gfi","fj",4)
m(k,"gf6","f7",4)
m(k,"gfm","fn",34)
m(k,"gfo","fp",2)
m(k,"gfD","fE",10)
m(k,"gfz","fA",10)
m(k,"gfB","fC",10)
p(D.bJ.prototype,"gek",0,0,null,["$1","$0"],["au","el"],0,0)
p(k=D.cD.prototype,"gcT",0,0,null,["$1","$0"],["cU","fe"],0,0)
m(k,"gfq","fs",45)
o(k,"geT","eU",17)
o(k,"gfv","fw",17)
l(V.am.prototype,"gj","cm",16)
l(V.D.prototype,"gj","cm",16)
p(k=U.bM.prototype,"gaH",0,0,null,["$1","$0"],["J","a6"],0,0)
o(k,"geR","eS",13)
o(k,"gft","fu",13)
p(k=U.df.prototype,"gaH",0,0,null,["$1","$0"],["J","a6"],0,0)
m(k,"geL","eM",1)
m(k,"geN","eO",1)
m(k,"geP","eQ",1)
m(k,"geH","eI",1)
m(k,"geJ","eK",1)
m(k,"gfU","fV",1)
m(k,"gfS","fT",1)
m(k,"gfQ","fR",1)
p(k=U.dg.prototype,"gaH",0,0,null,["$1","$0"],["J","a6"],0,0)
m(k,"gfc","fd",1)
p(k=M.e6.prototype,"gaI",0,0,null,["$1","$0"],["aJ","em"],0,0)
o(k,"gf0","f1",8)
o(k,"gf2","f3",8)
p(k=O.cK.prototype,"gb7",0,0,null,["$1","$0"],["T","bT"],0,0)
p(k,"gcV",0,0,null,["$1","$0"],["cW","fJ"],0,0)
o(k,"geV","eW",14)
o(k,"geX","eY",14)
p(O.cL.prototype,"gb7",0,0,null,["$1","$0"],["T","bT"],0,0)
p(X.ey.prototype,"gcI",0,0,null,["$1","$0"],["aK","ep"],0,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.O,null)
q(P.O,[H.ka,J.a,J.ab,P.H,P.dm,P.k,H.bR,P.eb,H.cu,H.f9,H.co,H.iM,H.im,H.fW,H.bH,P.N,H.hX,H.ei,H.ee,H.av,H.fy,P.dz,P.c9,P.ca,P.fi,P.c_,P.eP,P.jw,P.dG,P.ji,P.dl,P.j,P.h8,P.cJ,P.cZ,P.e_,P.jv,P.ju,P.W,P.bp,P.ex,P.d1,P.fv,P.hR,P.ae,P.Z,P.bA,P.iQ,P.fQ,W.hz,W.k6,W.kl,W.J,W.cv,P.jm,P.dB,P.fO,K.dT,K.cw,K.X,L.eM,L.eX,L.eY,L.iJ,O.a4,O.cN,E.hr,E.bq,E.bF,E.bV,E.ft,E.ip,E.eW,Z.fg,Z.ja,Z.cl,Z.bO,Z.b9,D.ht,D.bK,D.T,X.cm,X.ad,X.hW,X.i0,X.aN,X.il,X.iK,X.fc,D.bJ,V.M,V.bo,V.hL,V.b3,V.as,V.a3,V.a9,V.cU,V.eE,V.am,V.D,U.df,U.dg,M.e6,A.dX,A.hm,A.ao,A.aZ,A.b1,A.b5,A.b7,A.i4,A.d8,A.d9,A.db,A.de,A.a_,A.iO,F.aB,F.eh,F.eB,F.iu,F.d0,F.bY,F.bZ,F.c7,F.A,F.j4,F.fe,F.j7,O.d2,O.cL,O.i5,T.iE,X.iC,X.ey,V.hu,V.iw])
q(J.a,[J.ec,J.cz,J.b2,J.u,J.bQ,J.bt,H.cP,H.Y,W.e,W.hk,W.bm,W.cn,W.aG,W.F,W.fn,W.ap,W.hC,W.hD,W.fp,W.cs,W.fr,W.hE,W.l,W.fw,W.aq,W.hT,W.fA,W.bs,W.i_,W.ii,W.fE,W.fF,W.at,W.fG,W.fI,W.au,W.fM,W.fP,W.aw,W.fR,W.ax,W.fX,W.ag,W.h0,W.iH,W.al,W.h2,W.iL,W.iV,W.h9,W.hb,W.hd,W.hf,W.hh,P.aK,P.fC,P.aP,P.fK,P.io,P.fY,P.aS,P.h4,P.hn,P.fj,P.bX,P.fU])
q(J.b2,[J.ez,J.c4,J.aJ])
r(J.hU,J.u)
q(J.bQ,[J.cy,J.ed])
q(P.H,[H.cC,P.f0,H.ef,H.f8,H.eG,H.fu,P.dW,P.eu,P.aE,P.fa,P.f7,P.eN,P.e1,P.e3])
r(P.cF,P.dm)
q(P.cF,[H.c5,W.fl,W.fk,P.e8])
r(H.Q,H.c5)
q(P.k,[H.m,H.aL,H.dh,P.cx])
r(H.ct,H.aL)
q(P.eb,[H.ej,H.fh])
r(H.cp,H.co)
r(H.cT,P.f0)
q(H.bH,[H.iD,H.hV,H.jQ,H.jR,H.jS,P.jc,P.jb,P.jd,P.je,P.jr,P.jq,P.jI,P.jk,P.jl,P.hY,P.i1,P.iZ,P.iY,P.hF,P.hG,P.iU,P.iR,P.iS,P.iT,P.jt,P.js,P.jB,P.jC,P.jD,W.ij,W.ik,W.it,W.iA,W.jf,P.jo,P.jp,P.jz,P.jJ,P.hP,P.hQ,P.ho,E.iq,E.ir,E.is,E.iG,D.hN,D.hO,F.jx,F.jO,F.jN,F.iv,F.j9,F.j8,F.j5,F.j6,O.i8,O.i9,O.ia,O.ib,O.ic,O.id,O.ie,O.ig,T.iF,V.hv,V.jY,V.iy,V.ix,X.jV,X.jW])
q(H.iD,[H.iz,H.cj])
r(P.cI,P.N)
r(H.U,P.cI)
r(H.cE,H.m)
r(H.bU,H.Y)
q(H.bU,[H.dp,H.dr])
r(H.dq,H.dp)
r(H.bx,H.dq)
r(H.ds,H.dr)
r(H.cQ,H.ds)
q(H.cQ,[H.ep,H.eq,H.er,H.es,H.et,H.cR,H.by])
r(H.dA,H.fu)
r(P.dw,P.cx)
r(P.jj,P.jw)
r(P.dt,P.dG)
r(P.dk,P.dt)
r(P.dE,P.cJ)
r(P.c6,P.dE)
q(P.e_,[P.hp,P.hI])
r(P.e2,P.eP)
q(P.e2,[P.hq,P.j_,P.iX])
r(P.iW,P.hI)
q(P.aE,[P.cX,P.ea])
r(P.fo,P.bA)
q(W.e,[W.t,W.e7,W.bS,W.aj,W.du,W.ak,W.aa,W.dx,W.ff,W.c8,P.dZ,P.b_])
q(W.t,[W.E,W.aA])
q(W.E,[W.o,P.n])
q(W.o,[W.dU,W.dV,W.bn,W.e9,W.bN,W.bP,W.eH,W.b8])
r(W.hy,W.aG)
r(W.cq,W.fn)
q(W.ap,[W.hA,W.hB])
r(W.fq,W.fp)
r(W.cr,W.fq)
r(W.fs,W.fr)
r(W.e5,W.fs)
r(W.ac,W.bm)
r(W.fx,W.fw)
r(W.bL,W.fx)
r(W.fB,W.fA)
r(W.br,W.fB)
r(W.aU,W.l)
q(W.aU,[W.bv,W.ai,W.bz])
r(W.em,W.fE)
r(W.en,W.fF)
r(W.fH,W.fG)
r(W.eo,W.fH)
r(W.fJ,W.fI)
r(W.cS,W.fJ)
r(W.fN,W.fM)
r(W.eA,W.fN)
r(W.eF,W.fP)
r(W.dv,W.du)
r(W.eJ,W.dv)
r(W.fS,W.fR)
r(W.eK,W.fS)
r(W.eO,W.fX)
r(W.h1,W.h0)
r(W.eS,W.h1)
r(W.dy,W.dx)
r(W.eT,W.dy)
r(W.h3,W.h2)
r(W.eZ,W.h3)
r(W.ba,W.ai)
r(W.ha,W.h9)
r(W.fm,W.ha)
r(W.di,W.cs)
r(W.hc,W.hb)
r(W.fz,W.hc)
r(W.he,W.hd)
r(W.dn,W.he)
r(W.hg,W.hf)
r(W.fT,W.hg)
r(W.hi,W.hh)
r(W.h_,W.hi)
r(W.dj,P.c_)
r(P.jn,P.jm)
r(P.a7,P.fO)
r(P.fD,P.fC)
r(P.eg,P.fD)
r(P.fL,P.fK)
r(P.ev,P.fL)
r(P.fZ,P.fY)
r(P.eQ,P.fZ)
r(P.h5,P.h4)
r(P.f_,P.h5)
r(P.dY,P.fj)
r(P.ew,P.b_)
r(P.fV,P.fU)
r(P.eL,P.fV)
q(K.cw,[K.aO,L.d4])
q(E.hr,[Z.bG,A.d_,T.c0])
q(D.T,[D.aH,D.aI,D.C,X.bu,X.eC])
q(O.a4,[X.cA,D.cD,U.bM])
q(X.eC,[X.cH,X.bT,X.d3])
q(D.ht,[U.hw,U.a1])
q(U.a1,[U.bI,U.cY])
r(A.ek,A.d_)
q(A.a_,[A.c2,A.f3,A.f4,A.f5,A.f1,A.d5,A.f2,A.d6,A.d7,A.f6,A.da,A.c3,A.dc,A.dd])
r(O.cK,O.d2)
q(O.cL,[O.i2,O.i3,O.cM])
q(O.cM,[O.i6,O.i7])
r(T.eU,T.c0)
r(T.eV,T.eU)
r(X.hS,X.iC)
s(H.c5,H.f9)
s(H.dp,P.j)
s(H.dq,H.cu)
s(H.dr,P.j)
s(H.ds,H.cu)
s(P.dm,P.j)
s(P.dE,P.h8)
s(P.dG,P.cZ)
s(W.fn,W.hz)
s(W.fp,P.j)
s(W.fq,W.J)
s(W.fr,P.j)
s(W.fs,W.J)
s(W.fw,P.j)
s(W.fx,W.J)
s(W.fA,P.j)
s(W.fB,W.J)
s(W.fE,P.N)
s(W.fF,P.N)
s(W.fG,P.j)
s(W.fH,W.J)
s(W.fI,P.j)
s(W.fJ,W.J)
s(W.fM,P.j)
s(W.fN,W.J)
s(W.fP,P.N)
s(W.du,P.j)
s(W.dv,W.J)
s(W.fR,P.j)
s(W.fS,W.J)
s(W.fX,P.N)
s(W.h0,P.j)
s(W.h1,W.J)
s(W.dx,P.j)
s(W.dy,W.J)
s(W.h2,P.j)
s(W.h3,W.J)
s(W.h9,P.j)
s(W.ha,W.J)
s(W.hb,P.j)
s(W.hc,W.J)
s(W.hd,P.j)
s(W.he,W.J)
s(W.hf,P.j)
s(W.hg,W.J)
s(W.hh,P.j)
s(W.hi,W.J)
s(P.fC,P.j)
s(P.fD,W.J)
s(P.fK,P.j)
s(P.fL,W.J)
s(P.fY,P.j)
s(P.fZ,W.J)
s(P.h4,P.j)
s(P.h5,W.J)
s(P.fj,P.N)
s(P.fU,P.j)
s(P.fV,W.J)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{i:"int",K:"double",a0:"num",q:"String",az:"bool",ae:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~([T?])","~(T)","~(l)","~()","~(ai)","~(q,@)","~(i,i)","~(aB)","~(i,k<bq>)","~(@,@)","~(bz)","ae()","~(~())","~(i,k<a1?>)","~(i,k<as>)","q(i)","K()","~(i,k<ar>)","~(bv)","~(c7,K,K)","~(i,k<ad>)","~(~(T))","~(c1,q,i)","@()","E(t)","~(@)","ae(@,@)","~(q,q)","~(a0)","@(@)","az(k<ad>)","c1(@,@)","~(q,q?)","i(i,i)","~(ba)","~(q[@])","q(e)","~(q,i)","G<q,q>(G<q,q>,q)","~(O?,O?)","ae(~())","K(K,K)","bG(i)","ae(@)","@(q)","az(k<ar>)","i(aZ,aZ)","i(b1,b1)","i(b5,b5)","i(b7,b7)","~(iI)","~(az)","i(@,@)","@(@,q)","az(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.nI(v.typeUniverse,JSON.parse('{"ez":"b2","c4":"b2","aJ":"b2","pj":"l","pv":"l","pl":"b_","pk":"e","pD":"e","pG":"e","pi":"n","px":"n","pm":"o","pA":"o","py":"t","pu":"t","q5":"aa","pq":"aU","pn":"aA","pH":"aA","pF":"ai","pz":"br","pr":"F","ps":"ag","pC":"bx","pB":"Y","ec":{"az":[]},"b2":{"kS":[]},"u":{"p":["1"],"m":["1"],"k":["1"],"v":["1"]},"hU":{"u":["1"],"p":["1"],"m":["1"],"k":["1"],"v":["1"]},"bQ":{"K":[],"a0":[]},"cy":{"K":[],"i":[],"a0":[]},"ed":{"K":[],"a0":[]},"bt":{"q":[],"v":["@"]},"cC":{"H":[]},"Q":{"j":["i"],"p":["i"],"m":["i"],"k":["i"],"j.E":"i"},"m":{"k":["1"]},"aL":{"k":["2"]},"ct":{"aL":["1","2"],"m":["2"],"k":["2"]},"dh":{"k":["1"]},"c5":{"j":["1"],"p":["1"],"m":["1"],"k":["1"]},"co":{"G":["1","2"]},"cp":{"G":["1","2"]},"cT":{"H":[]},"ef":{"H":[]},"f8":{"H":[]},"eG":{"H":[]},"U":{"N":["1","2"],"G":["1","2"],"N.V":"2"},"cE":{"m":["1"],"k":["1"]},"ee":{"l3":[]},"bU":{"y":["1"],"Y":[],"v":["1"]},"bx":{"j":["K"],"y":["K"],"p":["K"],"Y":[],"m":["K"],"v":["K"],"k":["K"],"j.E":"K"},"cQ":{"j":["i"],"y":["i"],"p":["i"],"Y":[],"m":["i"],"v":["i"],"k":["i"]},"ep":{"j":["i"],"y":["i"],"p":["i"],"Y":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"eq":{"j":["i"],"y":["i"],"p":["i"],"Y":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"er":{"j":["i"],"y":["i"],"p":["i"],"Y":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"es":{"j":["i"],"y":["i"],"p":["i"],"Y":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"et":{"j":["i"],"y":["i"],"p":["i"],"Y":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"cR":{"j":["i"],"y":["i"],"p":["i"],"Y":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"by":{"j":["i"],"c1":[],"y":["i"],"p":["i"],"Y":[],"m":["i"],"v":["i"],"k":["i"],"j.E":"i"},"fu":{"H":[]},"dA":{"H":[]},"dz":{"iI":[]},"dw":{"k":["1"]},"dk":{"cZ":["1"],"m":["1"],"k":["1"]},"cx":{"k":["1"]},"cF":{"j":["1"],"p":["1"],"m":["1"],"k":["1"]},"cI":{"N":["1","2"],"G":["1","2"]},"N":{"G":["1","2"]},"cJ":{"G":["1","2"]},"c6":{"G":["1","2"]},"dt":{"cZ":["1"],"m":["1"],"k":["1"]},"K":{"a0":[]},"i":{"a0":[]},"p":{"m":["1"],"k":["1"]},"dW":{"H":[]},"f0":{"H":[]},"eu":{"H":[]},"aE":{"H":[]},"cX":{"H":[]},"ea":{"H":[]},"fa":{"H":[]},"f7":{"H":[]},"eN":{"H":[]},"e1":{"H":[]},"ex":{"H":[]},"d1":{"H":[]},"e3":{"H":[]},"bA":{"fb":[]},"fQ":{"fb":[]},"fo":{"fb":[]},"E":{"t":[],"e":[]},"ac":{"bm":[]},"k3":{"E":[],"t":[],"e":[]},"bv":{"l":[]},"ai":{"l":[]},"t":{"e":[]},"aj":{"e":[]},"ak":{"e":[]},"aa":{"e":[]},"bz":{"l":[]},"aU":{"l":[]},"ba":{"ai":[],"l":[]},"o":{"E":[],"t":[],"e":[]},"dU":{"E":[],"t":[],"e":[]},"dV":{"E":[],"t":[],"e":[]},"bn":{"E":[],"t":[],"e":[]},"aA":{"t":[],"e":[]},"cr":{"j":["a7<a0>"],"p":["a7<a0>"],"y":["a7<a0>"],"m":["a7<a0>"],"k":["a7<a0>"],"v":["a7<a0>"],"j.E":"a7<a0>"},"cs":{"a7":["a0"]},"e5":{"j":["q"],"p":["q"],"y":["q"],"m":["q"],"k":["q"],"v":["q"],"j.E":"q"},"fl":{"j":["E"],"p":["E"],"m":["E"],"k":["E"],"j.E":"E"},"bL":{"j":["ac"],"p":["ac"],"y":["ac"],"m":["ac"],"k":["ac"],"v":["ac"],"j.E":"ac"},"e7":{"e":[]},"e9":{"E":[],"t":[],"e":[]},"br":{"j":["t"],"p":["t"],"y":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"bN":{"E":[],"t":[],"e":[]},"bP":{"k3":[],"E":[],"t":[],"e":[]},"bS":{"e":[]},"em":{"N":["q","@"],"G":["q","@"],"N.V":"@"},"en":{"N":["q","@"],"G":["q","@"],"N.V":"@"},"eo":{"j":["at"],"p":["at"],"y":["at"],"m":["at"],"k":["at"],"v":["at"],"j.E":"at"},"fk":{"j":["t"],"p":["t"],"m":["t"],"k":["t"],"j.E":"t"},"cS":{"j":["t"],"p":["t"],"y":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"eA":{"j":["au"],"p":["au"],"y":["au"],"m":["au"],"k":["au"],"v":["au"],"j.E":"au"},"eF":{"N":["q","@"],"G":["q","@"],"N.V":"@"},"eH":{"E":[],"t":[],"e":[]},"eJ":{"j":["aj"],"p":["aj"],"y":["aj"],"e":[],"m":["aj"],"k":["aj"],"v":["aj"],"j.E":"aj"},"eK":{"j":["aw"],"p":["aw"],"y":["aw"],"m":["aw"],"k":["aw"],"v":["aw"],"j.E":"aw"},"eO":{"N":["q","q"],"G":["q","q"],"N.V":"q"},"b8":{"E":[],"t":[],"e":[]},"eS":{"j":["aa"],"p":["aa"],"y":["aa"],"m":["aa"],"k":["aa"],"v":["aa"],"j.E":"aa"},"eT":{"j":["ak"],"p":["ak"],"y":["ak"],"e":[],"m":["ak"],"k":["ak"],"v":["ak"],"j.E":"ak"},"eZ":{"j":["al"],"p":["al"],"y":["al"],"m":["al"],"k":["al"],"v":["al"],"j.E":"al"},"ff":{"e":[]},"c8":{"e":[]},"fm":{"j":["F"],"p":["F"],"y":["F"],"m":["F"],"k":["F"],"v":["F"],"j.E":"F"},"di":{"a7":["a0"]},"fz":{"j":["aq?"],"p":["aq?"],"y":["aq?"],"m":["aq?"],"k":["aq?"],"v":["aq?"],"j.E":"aq?"},"dn":{"j":["t"],"p":["t"],"y":["t"],"m":["t"],"k":["t"],"v":["t"],"j.E":"t"},"fT":{"j":["ax"],"p":["ax"],"y":["ax"],"m":["ax"],"k":["ax"],"v":["ax"],"j.E":"ax"},"h_":{"j":["ag"],"p":["ag"],"y":["ag"],"m":["ag"],"k":["ag"],"v":["ag"],"j.E":"ag"},"dj":{"c_":["1"]},"dB":{"bs":[]},"e8":{"j":["E"],"p":["E"],"m":["E"],"k":["E"],"j.E":"E"},"a7":{"fO":["1"]},"eg":{"j":["aK"],"p":["aK"],"m":["aK"],"k":["aK"],"j.E":"aK"},"ev":{"j":["aP"],"p":["aP"],"m":["aP"],"k":["aP"],"j.E":"aP"},"eQ":{"j":["q"],"p":["q"],"m":["q"],"k":["q"],"j.E":"q"},"n":{"E":[],"t":[],"e":[]},"f_":{"j":["aS"],"p":["aS"],"m":["aS"],"k":["aS"],"j.E":"aS"},"dY":{"N":["q","@"],"G":["q","@"],"N.V":"@"},"dZ":{"e":[]},"b_":{"e":[]},"ew":{"e":[]},"eL":{"j":["G<@,@>"],"p":["G<@,@>"],"m":["G<@,@>"],"k":["G<@,@>"],"j.E":"G<@,@>"},"cw":{"bw":[]},"dT":{"bw":[]},"aO":{"bw":[]},"X":{"bw":[]},"d4":{"bw":[]},"a4":{"k":["1"],"a4.T":"1"},"aH":{"T":[]},"aI":{"T":[]},"C":{"T":[]},"bu":{"T":[]},"cA":{"a4":["ad"],"k":["ad"],"a4.T":"ad"},"cH":{"T":[]},"bT":{"T":[]},"eC":{"T":[]},"d3":{"T":[]},"ms":{"ar":[]},"bJ":{"ar":[]},"mT":{"ar":[]},"nb":{"ar":[]},"cD":{"a4":["ar"],"k":["ar"],"a4.T":"ar"},"bI":{"a1":[]},"bM":{"a4":["a1?"],"a1":[],"k":["a1?"],"a4.T":"a1?"},"cY":{"a1":[]},"df":{"a1":[]},"dg":{"a1":[]},"c2":{"a_":[]},"c3":{"a_":[]},"ek":{"d_":[]},"f3":{"a_":[]},"f4":{"a_":[]},"f5":{"a_":[]},"f1":{"a_":[]},"d5":{"a_":[]},"f2":{"a_":[]},"d6":{"a_":[]},"d7":{"a_":[]},"f6":{"a_":[]},"da":{"a_":[]},"dc":{"a_":[]},"dd":{"a_":[]},"cK":{"d2":[]},"eU":{"c0":[]},"eV":{"c0":[]},"c1":{"p":["i"],"m":["i"],"k":["i"]}}'))
H.nH(v.typeUniverse,JSON.parse('{"ab":1,"m":1,"bR":1,"ej":2,"fh":1,"cu":1,"f9":1,"c5":1,"co":2,"ei":1,"bU":1,"c_":1,"ca":1,"eP":2,"dl":1,"cx":1,"cF":1,"cI":2,"h8":2,"cJ":2,"dt":1,"dm":1,"dE":2,"dG":1,"e_":2,"e2":2,"eb":1,"dj":1,"J":1,"cv":1,"aH":1,"aI":1,"C":1}'))
var u={u:"   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n",v:"   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n",z:"   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n",q:"   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n",e:"   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n",k:"   vec3 highLight = vec3(0.0, 0.0, 0.0);\n",o:"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n",F:"Must initialize the shader prior to getting the program.",C:"Must initialize the shader prior to getting the uniforms."}
var t=(function rtii(){var s=H.kC
return{fK:s("bm"),eT:s("bG"),ed:s("cl"),gA:s("bn"),ar:s("cn"),gw:s("m<@>"),h:s("E"),l:s("bq"),bU:s("H"),aD:s("l"),c8:s("ac"),bX:s("bL"),b8:s("pw"),I:s("bs"),fS:s("bN"),gk:s("bP"),eu:s("u<dX>"),i:s("u<ms>"),cn:s("u<aZ>"),dh:s("u<k3>"),U:s("u<bJ>"),fD:s("u<b1>"),v:s("u<aB>"),fv:s("u<bO>"),f5:s("u<ad>"),e:s("u<ar>"),L:s("u<eh>"),B:s("u<bw>"),fA:s("u<as>"),J:s("u<eB>"),cG:s("u<a3>"),eg:s("u<b5>"),o:s("u<mT>"),D:s("u<nb>"),c3:s("u<b7>"),g9:s("u<c_<O>>"),s:s("u<q>"),ga:s("u<c0>"),gT:s("u<al>"),ab:s("u<d4>"),gN:s("u<c1>"),dC:s("u<a_>"),Y:s("u<d8>"),V:s("u<d9>"),E:s("u<db>"),M:s("u<de>"),k:s("u<c7>"),n:s("u<K>"),gn:s("u<@>"),t:s("u<i>"),C:s("u<a1?>"),bc:s("u<d2?>"),p:s("u<c3?>"),a:s("u<~(T)>"),aP:s("v<@>"),T:s("cz"),eH:s("kS"),O:s("aJ"),aU:s("y<@>"),fX:s("U<i,az>"),y:s("U<i,i>"),Q:s("p<d8>"),b:s("p<d9>"),c:s("p<db>"),R:s("p<de>"),d:s("p<@>"),bv:s("cH"),f:s("G<@,@>"),gc:s("as"),bK:s("bS"),Z:s("bT"),bZ:s("cP"),dE:s("Y"),bm:s("by"),P:s("ae"),K:s("O"),q:s("a7<a0>"),fJ:s("l3"),fg:s("d_"),N:s("q"),bY:s("b8"),aF:s("iI"),bJ:s("eX"),dr:s("d3"),u:s("d5"),w:s("c2"),g:s("d6"),F:s("d7"),m:s("da"),j:s("c3"),G:s("dc"),r:s("dd"),ak:s("c4"),x:s("c6<q,q>"),dD:s("fb"),cJ:s("az"),gR:s("K"),z:s("@"),S:s("i"),A:s("0&*"),_:s("O*"),bG:s("kQ<ae>?"),X:s("O?"),gW:s("bX?"),dl:s("eM?"),f7:s("eY?"),W:s("c2?"),H:s("a0"),h2:s("~(T)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.bn.prototype
C.L=J.a.prototype
C.b=J.u.prototype
C.c=J.cy.prototype
C.M=J.cz.prototype
C.d=J.bQ.prototype
C.a=J.bt.prototype
C.N=J.aJ.prototype
C.S=H.by.prototype
C.w=J.ez.prototype
C.W=P.bX.prototype
C.n=J.c4.prototype
C.x=W.ba.prototype
C.y=W.c8.prototype
C.z=new E.bF("Browser.chrome")
C.o=new E.bF("Browser.firefox")
C.p=new E.bF("Browser.edge")
C.A=new E.bF("Browser.other")
C.Z=new P.hq()
C.B=new P.hp()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=function() {
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
C.H=function(getTagFallback) {
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
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.G=function(hooks) {
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
C.F=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.I=new P.ex()
C.e=new P.iW()
C.J=new P.j_()
C.f=new P.jj()
C.m=new P.bp(0)
C.K=new P.bp(5e6)
C.j=H.b(s([0,0,32776,33792,1,10240,0,0]),t.t)
C.k=H.b(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
C.l=H.b(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
C.P=H.b(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
C.Q=H.b(s([0,0,65498,45055,65535,34815,65534,18431]),t.t)
C.h=H.b(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
C.t=H.b(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
C.u=H.b(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
C.O=H.b(s([]),t.s)
C.R=new H.cp(0,{},C.O,H.kC("cp<q,q>"))
C.T=new E.bV("OperatingSystem.windows")
C.v=new E.bV("OperatingSystem.mac")
C.U=new E.bV("OperatingSystem.linux")
C.V=new E.bV("OperatingSystem.other")
C.X=new P.iX(!1)
C.Y=new P.c9(null,2)})();(function staticFields(){$.jg=null
$.aF=0
$.ck=null
$.kM=null
$.lQ=null
$.lN=null
$.lV=null
$.jK=null
$.jU=null
$.kE=null
$.cd=null
$.dJ=null
$.dK=null
$.ky=!1
$.aC=C.f
$.ah=H.b([],H.kC("u<O>"))
$.hK=null
$.kV=null
$.cO=null
$.af=null
$.aQ=null
$.l5=null
$.j0=null
$.lk=null
$.j1=null
$.j2=null
$.j3=null
$.lj=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"pt","m2",function(){return H.p1("_$dart_dartClosure")})
s($,"pI","m4",function(){return H.aT(H.iN({
toString:function(){return"$receiver$"}}))})
s($,"pJ","m5",function(){return H.aT(H.iN({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"pK","m6",function(){return H.aT(H.iN(null))})
s($,"pL","m7",function(){return H.aT(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"pO","ma",function(){return H.aT(H.iN(void 0))})
s($,"pP","mb",function(){return H.aT(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"pN","m9",function(){return H.aT(H.le(null))})
s($,"pM","m8",function(){return H.aT(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"pR","md",function(){return H.aT(H.le(void 0))})
s($,"pQ","mc",function(){return H.aT(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"q6","kJ",function(){return P.nn()})
s($,"pS","me",function(){return new P.iZ().$0()})
s($,"pT","mf",function(){return new P.iY().$0()})
s($,"q7","mj",function(){return new Int8Array(H.cc(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t)))})
s($,"q9","mk",function(){return P.n4("^[\\-\\.0-9A-Z_a-z~]*$")})
s($,"qm","ml",function(){return P.o3()})
s($,"q_","mi",function(){return Z.ay(0)})
s($,"pU","mg",function(){return Z.ay(511)})
s($,"q1","bk",function(){return Z.ay(1)})
s($,"q0","bj",function(){return Z.ay(2)})
s($,"pW","bi",function(){return Z.ay(4)})
s($,"q2","bl",function(){return Z.ay(8)})
s($,"q3","bD",function(){return Z.ay(16)})
s($,"pX","dP",function(){return Z.ay(32)})
s($,"pY","dQ",function(){return Z.ay(64)})
s($,"pZ","mh",function(){return Z.ay(96)})
s($,"q4","ci",function(){return Z.ay(128)})
s($,"pV","bh",function(){return Z.ay(256)})
s($,"pp","m1",function(){return new V.hL()})
r($,"po","B",function(){return $.m1()})
r($,"pE","m3",function(){var q=V.kZ(),p=V.kj(),o=$.lj
return V.kW(q,p,o==null?$.lj=V.nk(0,0,-1):o)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cP,DataView:H.Y,ArrayBufferView:H.Y,Float32Array:H.bx,Float64Array:H.bx,Int16Array:H.ep,Int32Array:H.eq,Int8Array:H.er,Uint16Array:H.es,Uint32Array:H.et,Uint8ClampedArray:H.cR,CanvasPixelArray:H.cR,Uint8Array:H.by,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLBodyElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableColElement:W.o,HTMLTableElement:W.o,HTMLTableRowElement:W.o,HTMLTableSectionElement:W.o,HTMLTemplateElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.hk,HTMLAnchorElement:W.dU,HTMLAreaElement:W.dV,Blob:W.bm,HTMLCanvasElement:W.bn,CanvasRenderingContext2D:W.cn,CDATASection:W.aA,CharacterData:W.aA,Comment:W.aA,ProcessingInstruction:W.aA,Text:W.aA,CSSPerspective:W.hy,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.cq,MSStyleCSSProperties:W.cq,CSS2Properties:W.cq,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSNumericValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSUnitValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aG,CSSRotation:W.aG,CSSScale:W.aG,CSSSkew:W.aG,CSSTranslation:W.aG,CSSTransformComponent:W.aG,CSSTransformValue:W.hA,CSSUnparsedValue:W.hB,DataTransferItemList:W.hC,DOMException:W.hD,ClientRectList:W.cr,DOMRectList:W.cr,DOMRectReadOnly:W.cs,DOMStringList:W.e5,DOMTokenList:W.hE,Element:W.E,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,SubmitEvent:W.l,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ac,FileList:W.bL,FileWriter:W.e7,HTMLFormElement:W.e9,Gamepad:W.aq,History:W.hT,HTMLCollection:W.br,HTMLFormControlsCollection:W.br,HTMLOptionsCollection:W.br,ImageData:W.bs,HTMLImageElement:W.bN,HTMLInputElement:W.bP,KeyboardEvent:W.bv,Location:W.i_,MediaList:W.ii,MessagePort:W.bS,MIDIInputMap:W.em,MIDIOutputMap:W.en,MimeType:W.at,MimeTypeArray:W.eo,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeList:W.cS,RadioNodeList:W.cS,Plugin:W.au,PluginArray:W.eA,RTCStatsReport:W.eF,HTMLSelectElement:W.eH,SourceBuffer:W.aj,SourceBufferList:W.eJ,SpeechGrammar:W.aw,SpeechGrammarList:W.eK,SpeechRecognitionResult:W.ax,Storage:W.eO,CSSStyleSheet:W.ag,StyleSheet:W.ag,HTMLTableCellElement:W.b8,HTMLTableDataCellElement:W.b8,HTMLTableHeaderCellElement:W.b8,TextTrack:W.ak,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.eS,TextTrackList:W.eT,TimeRanges:W.iH,Touch:W.al,TouchEvent:W.bz,TouchList:W.eZ,TrackDefaultList:W.iL,CompositionEvent:W.aU,FocusEvent:W.aU,TextEvent:W.aU,UIEvent:W.aU,URL:W.iV,VideoTrackList:W.ff,WheelEvent:W.ba,Window:W.c8,DOMWindow:W.c8,CSSRuleList:W.fm,ClientRect:W.di,DOMRect:W.di,GamepadList:W.fz,NamedNodeMap:W.dn,MozNamedAttrMap:W.dn,SpeechRecognitionResultList:W.fT,StyleSheetList:W.h_,SVGLength:P.aK,SVGLengthList:P.eg,SVGNumber:P.aP,SVGNumberList:P.ev,SVGPointList:P.io,SVGStringList:P.eQ,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGScriptElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGTransform:P.aS,SVGTransformList:P.f_,AudioBuffer:P.hn,AudioParamMap:P.dY,AudioTrackList:P.dZ,AudioContext:P.b_,webkitAudioContext:P.b_,BaseAudioContext:P.b_,OfflineAudioContext:P.ew,WebGL2RenderingContext:P.bX,SQLResultSetRowList:P.eL})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
H.dq.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.dr.$nativeSuperclassTag="ArrayBufferView"
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
W.du.$nativeSuperclassTag="EventTarget"
W.dv.$nativeSuperclassTag="EventTarget"
W.dx.$nativeSuperclassTag="EventTarget"
W.dy.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=X.pa
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=test.dart.js.map
